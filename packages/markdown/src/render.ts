import { Marked } from 'marked'
import { decorate, type HeadingItem } from './decorate'
import { directiveExtension } from './marked'
import { sanitize } from './sanitize'

export type { HeadingItem } from './decorate'

export type RenderOptions = {
  /** Moves every heading down by this many levels, as rehype-shift-heading did. */
  shiftHeading?: number
  /** How deep the table of contents goes. Headings below this are still rendered. */
  tocMaxDepth?: number
}

export type RenderResult = {
  html: string
  headings: HeadingItem[]
}

const clampLevel = (level: number) => Math.min(6, Math.max(1, level))

/**
 * Markdown to HTML, in three steps: marked writes the markup, DOMPurify takes
 * out what must not reach the DOM, and decorate puts the design system on what
 * is left.
 *
 * Styling last is what lets a table written as raw HTML look like one written
 * with pipes, and it is why the heading ids are generated in one place.
 */
export const render = (
  markdown: string,
  options: RenderOptions = {}
): RenderResult => {
  const { shiftHeading = 0, tocMaxDepth = 2 } = options

  // A fresh Marked per call: marked.use() would reach every other caller.
  const marked = new Marked(
    { gfm: true, breaks: true },
    directiveExtension({
      // The card title is a heading too, and the shift has to reach it.
      cardHeadingLevel: `h${clampLevel(3 + shiftHeading)}`
    })
  )

  const fragment = sanitize(marked.parse(markdown, { async: false }) as string)
  const { headings } = decorate(fragment, document, {
    shiftHeading,
    tocMaxDepth
  })

  const container = document.createElement('div')
  container.appendChild(fragment)

  return { html: container.innerHTML, headings }
}
