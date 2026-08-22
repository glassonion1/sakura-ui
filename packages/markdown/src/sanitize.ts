import DOMPurify from 'dompurify'

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
      if (!ALLOWED_CSS_PROPERTIES.has(property)) {
        return Boolean(RESTRICTED_VALUES[property]?.has(value))
      }
      // url(), expression() and @import never appear in the content, and each is
      // a way back out of the sanitiser.
      return !/url\(|expression\(|@import|behavior:/i.test(value)
    })
    .map((declaration) => `${declaration};`)
    .join(' ')

let hooked = false

const install = () => {
  if (hooked) return
  hooked = true
  DOMPurify.addHook('afterSanitizeAttributes', (node) => {
    const element = node as Element
    if (!element.getAttribute) return

    if (element.tagName === 'IFRAME') {
      if (!isAllowedIframe(element.getAttribute('src'))) {
        element.remove()
        return
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
    // A link that opens elsewhere must not hand the opener over with it.
    if (element.getAttribute('target') === '_blank') {
      element.setAttribute('rel', 'noopener noreferrer')
    }
  })
}

/**
 * Returns a fragment rather than a string: the caller has to walk the result to
 * put the design system on it, and going back through the parser would only
 * throw away what has just been built.
 */
export const sanitize = (html: string): DocumentFragment => {
  install()
  return DOMPurify.sanitize(html, {
    ADD_TAGS,
    ADD_ATTR,
    RETURN_DOM_FRAGMENT: true,
    ALLOWED_URI_REGEXP:
      /^(?:(?:https?|mailto):|[^a-z]|[a-z+.-]+(?:[^a-z+.\-:]|$))/i
  })
}

export const __testing = { filterStyle, ALLOWED_CSS_PROPERTIES }
