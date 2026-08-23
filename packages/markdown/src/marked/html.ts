const ESCAPES: Record<string, string> = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;'
}

export const escapeHtml = (value: unknown): string =>
  String(value).replace(/[&<>"']/g, (c) => ESCAPES[c] ?? c)

/**
 * Takes control characters out by code point rather than by pattern. A tab or a
 * newline placed between the letters hides the scheme from a reader while the
 * browser still follows it, and a regular expression holding those characters
 * is refused by the linter either way.
 */
const stripControl = (value: string): string =>
  Array.from(value)
    .filter((char) => {
      const code = char.codePointAt(0) ?? 0
      return code > 0x1f && code !== 0x7f
    })
    .join('')

/**
 * Rejects the schemes that turn a link into script. marked keeps its own
 * version of this to itself, so a renderer writing href or src has to bring one.
 */
export const cleanUrl = (href: string | undefined): string | undefined => {
  if (href == null || href === '') return undefined
  const trimmed = stripControl(String(href)).trim()
  if (/^(?:javascript|vbscript|file):/i.test(trimmed)) return undefined
  // Refused here and in the sanitiser both: DOMPurify allows the scheme on an
  // img whatever ALLOWED_URI_REGEXP says, so this is the only place a directive
  // writing one is turned back.
  if (/^data:/i.test(trimmed)) return undefined
  return trimmed
}

export type AttrValue = string | boolean | undefined | null

/**
 * Attributes where an empty value says something, and so is written out. On an
 * image an empty alt marks it as decoration; leaving the attribute off instead
 * makes a screen reader read the file name.
 */
const KEEP_WHEN_EMPTY = new Set(['alt'])

/** `{a: 'x', b: true, c: undefined}` becomes ` a="x" b` */
export const attrsToHtml = (attrs: Record<string, AttrValue>): string =>
  Object.entries(attrs)
    .filter(
      ([k, v]) =>
        v !== undefined &&
        v !== null &&
        v !== false &&
        (v !== '' || KEEP_WHEN_EMPTY.has(k))
    )
    .map(([k, v]) => (v === true ? ` ${k}` : ` ${k}="${escapeHtml(v)}"`))
    .join('')

/**
 * Turns the multi-line class strings the components use into a single line, so
 * that the markup this package produces does not carry their indentation.
 */
export const classNames = (...values: (string | undefined | false)[]): string =>
  values.filter(Boolean).join(' ').split(/\s+/).filter(Boolean).join(' ')
