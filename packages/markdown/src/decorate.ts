import { styles } from '@sakura-ui/core'
import Slugger from 'github-slugger'
import { classNames } from './marked/html'

/**
 * Applies the look of the design system to the finished document.
 *
 * Runs over the sanitised DOM rather than inside the markdown renderer, so that
 * a table written as raw HTML is styled the same as one written with pipes.
 */

export type HeadingItem = {
  id?: string
  depth: number
  value?: string
  children?: HeadingItem[]
}

/** tag name to the classes the matching component puts on it */
const CLASS_BY_TAG: Record<string, string> = {
  h1: styles.headingStyle.h1,
  h2: styles.headingStyle.h2,
  h3: styles.headingStyle.h3,
  h4: styles.headingStyle.h4,
  h5: styles.headingStyle.h5,
  h6: styles.headingStyle.h6,
  ul: styles.ulStyle,
  ol: styles.olStyle,
  pre: styles.preStyle,
  code: styles.codeStyle,
  table: styles.tableBorderStyle,
  caption: styles.captionStyle,
  th: classNames(styles.thStyle, styles.tableBorderStyle),
  tr: styles.tableBorderStyle,
  td: classNames(styles.tdStyle, styles.tableBorderStyle),
  a: styles.linkStyle
}

/** Elements a directive rendered are already dressed; leave them be. */
const isDirectiveOutput = (element: Element) =>
  element.hasAttribute('data-styled')

/**
 * A link that opens elsewhere must not hand the opener to the page it opens.
 * Merged with what the document asked for rather than replacing it, so a
 * `rel="nofollow"` does not take `noopener` away with it.
 */
const externalRel = (rel: string | null): string =>
  Array.from(
    new Set([
      'noopener',
      'noreferrer',
      ...(rel ?? '').split(/\s+/).filter(Boolean)
    ])
  ).join(' ')

const addClass = (element: Element, value: string) => {
  const merged = classNames(element.getAttribute('class') ?? '', value)
  if (merged) element.setAttribute('class', merged)
}

const HEADINGS = new Set(['h1', 'h2', 'h3', 'h4', 'h5', 'h6'])

/**
 * Says that the link leaves the page. The glyph is hidden from assistive
 * technology and the words next to it carry the meaning instead, which is what
 * the Icon component does.
 */
const appendNewTabIcon = (anchor: Element, document: Document) => {
  if (anchor.querySelector('[data-new-tab]')) return
  const glyph = document.createElement('span')
  glyph.setAttribute('aria-hidden', 'true')
  glyph.setAttribute('data-new-tab', 'true')
  glyph.setAttribute(
    'class',
    classNames(styles.iconSizeStyle[16], styles.iconStyle, 'ml-0.5')
  )
  glyph.textContent = 'open_in_new'
  const label = document.createElement('span')
  label.setAttribute('class', 'sr-only')
  label.textContent = 'Opens in new tab'
  anchor.append(glyph, label)
}

export type DecorateOptions = {
  shiftHeading: number
  tocMaxDepth: number
}

export type DecorateResult = {
  headings: HeadingItem[]
}

const clampLevel = (level: number) => Math.min(6, Math.max(1, level))

export const decorate = (
  root: DocumentFragment | Element,
  document: Document,
  options: DecorateOptions
): DecorateResult => {
  const { shiftHeading, tocMaxDepth } = options
  const slugger = new Slugger()
  const flat: HeadingItem[] = []

  // The heading level has to move before the id is read, so that the id belongs
  // to the element that ends up in the document.
  if (shiftHeading !== 0) {
    for (const heading of Array.from(
      root.querySelectorAll('h1,h2,h3,h4,h5,h6')
    )) {
      const depth = Number(heading.tagName[1])
      const moved = document.createElement(
        `h${clampLevel(depth + shiftHeading)}`
      )
      for (const attribute of Array.from(heading.attributes)) {
        moved.setAttribute(attribute.name, attribute.value)
      }
      moved.innerHTML = heading.innerHTML
      heading.replaceWith(moved)
    }
  }

  for (const element of Array.from(root.querySelectorAll('*'))) {
    const tag = element.tagName.toLowerCase()

    // One id, generated once, for headings from markdown and from raw HTML
    // alike, so the table of contents and the body cannot disagree.
    if (HEADINGS.has(tag)) {
      const text = element.textContent ?? ''
      const asked = element.getAttribute('id')
      // An id the author asked for is kept as written, but still handed to the
      // slugger, so that a heading further down does not generate the same one.
      if (asked) slugger.slug(asked)
      const id = asked || slugger.slug(text)
      element.setAttribute('id', id)
      flat.push({ id, depth: Number(tag[1]) - shiftHeading, value: text })
    }

    if (isDirectiveOutput(element)) continue

    if (tag === 'a') {
      const href = element.getAttribute('href') ?? ''
      if (
        href.startsWith('http') ||
        element.getAttribute('target') === '_blank'
      ) {
        element.setAttribute('target', '_blank')
        element.setAttribute('rel', externalRel(element.getAttribute('rel')))
        appendNewTabIcon(element, document)
      }
    }

    const cls = CLASS_BY_TAG[tag]
    if (cls) addClass(element, cls)
  }

  // A wide table scrolls inside its own box rather than pushing the page.
  for (const table of Array.from(root.querySelectorAll('table'))) {
    const parent = table.parentElement
    if (parent?.dataset?.tableContainer === 'true') continue
    const container = document.createElement('div')
    container.setAttribute('class', classNames(styles.overflowContainerStyle))
    container.dataset.tableContainer = 'true'
    table.replaceWith(container)
    container.appendChild(table)
  }

  return {
    headings: flat.filter((h) => h.depth <= tocMaxDepth) as HeadingItem[]
  }
}
