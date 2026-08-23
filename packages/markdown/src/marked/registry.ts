export const CONTAINER = 'container'
export const LEAF = 'leaf'
export const TEXT = 'text'

export type DirectiveKind = typeof CONTAINER | typeof LEAF | typeof TEXT

/**
 * The whitelist. A name that is not here is not a directive, and the text
 * carrying it is left alone — which is what keeps "HH:MM" and "chat:write"
 * intact in the prose.
 */
const STATIC: Record<string, DirectiveKind[]> = {
  card: [CONTAINER],
  'card-img': [LEAF],
  'card-title': [LEAF, CONTAINER],
  'card-description': [LEAF, CONTAINER],
  'card-footer': [LEAF, CONTAINER],
  faq: [CONTAINER],
  'faq-q': [LEAF, CONTAINER],
  'faq-a': [LEAF, CONTAINER],
  cell: [CONTAINER],
  'cell-img': [LEAF],
  youtube: [LEAF, CONTAINER],
  'link-button': [TEXT]
}

/** The one directive whose name carries a number. Shared with the renderer. */
export const GRID_RE = /^grid-cols-(?:1[0-2]|[1-9])$/

export const isKnown = (name: string, kind: DirectiveKind): boolean =>
  GRID_RE.test(name) ? kind === CONTAINER : (STATIC[name] ?? []).includes(kind)
