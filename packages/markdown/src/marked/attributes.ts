const ATTR_RE =
  /([#.])?([A-Za-z_:][-A-Za-z0-9_.:]*)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'{}]+)))?/g

export type Attrs = Record<string, string>

/** Parses the inside of `{...}`: `key=value key2="値 2" #id .cls` */
export const parseAttrs = (body: string | null): Attrs => {
  const out: Attrs = {}
  if (!body) return out
  ATTR_RE.lastIndex = 0
  let m = ATTR_RE.exec(body)
  while (m !== null) {
    const [, sigil, key, doubleQuoted, singleQuoted, bare] = m
    const value = doubleQuoted ?? singleQuoted ?? bare
    if (sigil === '#') {
      out.id = key
    } else if (sigil === '.') {
      out.class = out.class ? `${out.class} ${key}` : key
    } else {
      out[key] = value ?? ''
    }
    m = ATTR_RE.exec(body)
  }
  return out
}

/**
 * Reads a delimited run, counting nesting. remark-directive accepts a label
 * like `[a [b] c]`, so matching `\[([^\]]*)\]` would cut it in the wrong place.
 */
export const readDelimited = (
  src: string,
  start: number,
  open: string,
  close: string
): { value: string; end: number } | null => {
  if (src[start] !== open) return null
  let depth = 0
  for (let i = start; i < src.length; i++) {
    const ch = src[i]
    if (ch === '\\') {
      i++
      continue
    }
    if (ch === '\n') return null
    if (ch === open) {
      depth++
    } else if (ch === close) {
      depth--
      if (depth === 0) return { value: src.slice(start + 1, i), end: i + 1 }
    }
  }
  return null
}

/** An optional `[label]` followed by an optional `{attrs}`, starting at index i */
export const readTail = (
  src: string,
  i: number
): { label: string | null; attrs: Attrs; end: number } => {
  let label: string | null = null
  const labelRun = readDelimited(src, i, '[', ']')
  if (labelRun) {
    label = labelRun.value
    i = labelRun.end
  }
  let attrs: Attrs = {}
  const attrRun = readDelimited(src, i, '{', '}')
  if (attrRun) {
    attrs = parseAttrs(attrRun.value)
    i = attrRun.end
  }
  return { label, attrs, end: i }
}
