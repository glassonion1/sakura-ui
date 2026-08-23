import createDOMPurify, { type DOMPurify } from 'dompurify'

/**
 * Markdown is allowed to carry raw HTML, so the output is sanitised before it
 * reaches the DOM.
 *
 * The lists below come from measuring what the documents actually contain
 * rather than from what HTML permits: 27 tags, 24 CSS properties, and no
 * script, no event handler, no javascript: or data: URL anywhere.
 */

/** Tags DOMPurify does not allow by default but the content needs. */
const ADD_TAGS = ['caption', 'col', 'colgroup', 'small', 'u', 'iframe']

/** Attributes beyond the default set. */
const ADD_ATTR = [
  'target',
  'role',
  'colspan',
  'rowspan',
  'open',
  'allow',
  'allowfullscreen',
  'frameborder',
  'referrerpolicy',
  'loading'
]

/**
 * iframe is allowed only so that the youtube directive can embed a video, and
 * only from the host that directive writes. Nothing in the content writes an
 * iframe of its own, so the list stays at one host; an embed pointing anywhere
 * else is dropped rather than trusted.
 */
const IFRAME_HOSTS = new Set(['www.youtube-nocookie.com'])

const isAllowedIframe = (src: string | null): boolean => {
  if (!src) return false
  try {
    return IFRAME_HOSTS.has(new URL(src).host)
  } catch {
    return false
  }
}

/**
 * The CSS properties an inline style may set.
 *
 * Letting style through untouched would leave clickjacking on the table: a
 * fixed, transparent box over the page takes every click. None of the content
 * needs position beyond relative, so the list stays closed.
 */
const ALLOWED_CSS_PROPERTIES = new Set([
  'background-color',
  'border',
  'border-bottom',
  'border-collapse',
  'border-left',
  'border-radius',
  'border-right',
  'border-top',
  'color',
  'color-scheme',
  'font-size',
  'font-weight',
  'height',
  'line-height',
  'list-style',
  'list-style-type',
  'margin',
  'margin-bottom',
  'margin-left',
  'margin-right',
  'margin-top',
  'max-width',
  'min-width',
  'padding',
  'padding-bottom',
  'padding-left',
  'padding-right',
  'padding-top',
  'text-align',
  'text-indent',
  'text-orientation',
  'vertical-align',
  'white-space',
  'width',
  'writing-mode'
])

/** position is allowed, but only the value that cannot cover the page. */
const RESTRICTED_VALUES: Record<string, Set<string>> = {
  position: new Set(['relative', 'static'])
}

const filterStyle = (style: string): string =>
  style
    .split(';')
    .map((declaration) => declaration.trim())
    .filter(Boolean)
    .filter((declaration) => {
      const [rawProperty, ...rest] = declaration.split(':')
      const property = rawProperty.trim().toLowerCase()
      const value = rest.join(':').trim().toLowerCase()
      // url(), expression() and @import never appear in the content, and each
      // is a way back out of the sanitiser. Asked before the property is looked
      // at, so that a property added to RESTRICTED_VALUES later does not slip
      // past it.
      if (/url\(|expression\(|@import|behavior:/i.test(value)) return false
      if (!ALLOWED_CSS_PROPERTIES.has(property)) {
        return Boolean(RESTRICTED_VALUES[property]?.has(value))
      }
      return true
    })
    .map((declaration) => `${declaration};`)
    .join(' ')

/**
 * Whitespace and control characters taken out, so that a scheme spelt with a
 * tab in the middle of it is read the way the browser will read it. Written by
 * code point because the linter refuses a regular expression holding them.
 */
const withoutBlanks = (value: string): string =>
  Array.from(value)
    .filter((char) => (char.codePointAt(0) ?? 0) > 0x20)
    .join('')
    .toLowerCase()

let instance: DOMPurify | null = null

/**
 * An instance of our own, not the shared default export. A hook added to that
 * one runs for every other caller on the page, and any of them calling
 * removeAllHooks would take the iframe check and the style filter away with it
 * — silently, since sanitize would go on returning a fragment either way.
 */
const purifier = (): DOMPurify => {
  if (instance) return instance
  instance = createDOMPurify(window)
  instance.addHook('afterSanitizeAttributes', (node) => {
    const element = node as Element
    if (!element.getAttribute) return

    if (element.tagName === 'IFRAME') {
      if (!isAllowedIframe(element.getAttribute('src'))) {
        element.remove()
        return
      }
    }

    // DOMPurify allows data: on an img src whatever ALLOWED_URI_REGEXP says,
    // through its own list of tags that may carry one. The content has no use
    // for it, and leaving it would make raw HTML the loose way in while the
    // directives refused the same URL.
    for (const name of ['src', 'href']) {
      const value = element.getAttribute(name)
      if (value && withoutBlanks(value).startsWith('data:')) {
        element.removeAttribute(name)
      }
    }

    const style = element.getAttribute('style')
    if (style) {
      const filtered = filterStyle(style)
      if (filtered) {
        element.setAttribute('style', filtered)
      } else {
        element.removeAttribute('style')
      }
    }
    // A link that opens elsewhere must not hand the opener over with it. What
    // the document asked for is kept alongside rather than replaced.
    if (element.getAttribute('target') === '_blank') {
      const asked = (element.getAttribute('rel') ?? '').split(/\s+/)
      element.setAttribute(
        'rel',
        Array.from(
          new Set(['noopener', 'noreferrer', ...asked.filter(Boolean)])
        ).join(' ')
      )
    }
  })
  return instance
}

/**
 * Returns a fragment rather than a string: the caller has to walk the result to
 * put the design system on it, and going back through the parser would only
 * throw away what has just been built.
 */
export const sanitize = (html: string): DocumentFragment => {
  return purifier().sanitize(html, {
    ADD_TAGS,
    ADD_ATTR,
    RETURN_DOM_FRAGMENT: true,
    ALLOWED_URI_REGEXP:
      /^(?:(?:https?|mailto):|[^a-z]|[a-z+.-]+(?:[^a-z+.\-:]|$))/i
  })
}

export const __testing = { filterStyle, ALLOWED_CSS_PROPERTIES }
