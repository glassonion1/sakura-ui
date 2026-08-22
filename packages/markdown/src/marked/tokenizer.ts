import type { Token, Tokens } from 'marked'
import { type Attrs, readTail } from './attributes'
import { CONTAINER, type DirectiveKind, isKnown, LEAF, TEXT } from './registry'

export interface DirectiveToken extends Tokens.Generic {
  type: 'directive'
  kind: DirectiveKind
  name: string
  attrs: Attrs
  tokens: Token[]
  raw: string
  /** A link card puts its href on the title; the tokenizer copies it down. */
  inherited?: { behavior: 'link'; href: string }
  /** Set on a card once it is known to have a title to put its link on. */
  linked?: boolean
}

const BLOCK_HEAD = /^(:{2,})([A-Za-z][A-Za-z0-9_-]*)/
const INLINE_HEAD = /^:([A-Za-z][A-Za-z0-9_-]*)/

/**
 * The closing fence is the first line made only of at least as many colons as
 * the opening one. Nesting needs no bookkeeping: an inner directive uses fewer
 * colons, so it cannot be mistaken for the close of the outer one.
 */
const findClose = (
  body: string,
  fenceLength: number
): { contentEnd: number; rawEnd: number } | null => {
  const re = new RegExp(`^:{${fenceLength},}[ \\t]*$`)
  let offset = 0
  for (const line of body.split('\n')) {
    if (re.test(line)) {
      return {
        contentEnd: offset,
        rawEnd: Math.min(offset + line.length + 1, body.length)
      }
    }
    offset += line.length + 1
  }
  return null
}

/**
 * marked passes src.slice(1) to start() and clips the paragraph it was about to
 * take at the returned index plus one, so what is wanted here is the position of
 * the newline before the directive. Without it a directive following a
 * paragraph is swallowed by that paragraph.
 */
export const blockStart = (src: string): number | undefined => {
  const m = /\n:{2,}[A-Za-z]/.exec(src)
  return m ? m.index : undefined
}

export const inlineStart = (src: string): number | undefined => {
  const m = /:[A-Za-z][A-Za-z0-9_-]*\[/.exec(src)
  return m ? m.index : undefined
}

/**
 * A link card's href belongs on the title, and the footer needs to know it is
 * one. A card with no title has nowhere to put the link, so it is left as a
 * plain card rather than dressed as something that answers to a click.
 */
const propagateCardLink = (token: DirectiveToken): void => {
  if (token.name !== 'card' || token.attrs.as !== 'link') return
  const children = token.tokens as DirectiveToken[]
  const hasTitle = children.some(
    (child) => child.type === 'directive' && child.name === 'card-title'
  )
  if (!hasTitle) return
  token.linked = true
  for (const child of children) {
    if (child.type !== 'directive') continue
    if (child.name === 'card-title' || child.name === 'card-footer') {
      child.inherited = { behavior: 'link', href: token.attrs.href ?? '' }
    }
  }
}

export function blockTokenizer(
  this: {
    lexer: {
      blockTokens: (src: string) => Token[]
      inline: (src: string, tokens: Token[]) => void
    }
  },
  src: string
): DirectiveToken | undefined {
  const head = BLOCK_HEAD.exec(src)
  if (!head) return undefined
  const [, fence, name] = head
  const kind = fence.length >= 3 ? CONTAINER : LEAF
  if (!isKnown(name, kind)) return undefined

  const tail = readTail(src, head[0].length)
  const eol = /^[ \t]*(?:\n|$)/.exec(src.slice(tail.end))
  if (!eol) return undefined
  const openLength = tail.end + eol[0].length

  const token: DirectiveToken = {
    type: 'directive',
    kind,
    name,
    attrs: tail.attrs,
    tokens: [],
    raw: src.slice(0, openLength)
  }

  if (kind === LEAF) {
    // Queued rather than tokenized now: marked drains the inline queue after the
    // whole block pass, which is what lets a link reference defined further down
    // the document resolve.
    if (tail.label) this.lexer.inline(tail.label, token.tokens)
    return token
  }

  const body = src.slice(openLength)
  const close = findClose(body, fence.length)
  token.raw = src.slice(0, openLength + (close ? close.rawEnd : body.length))
  token.tokens = this.lexer.blockTokens(
    close ? body.slice(0, close.contentEnd) : body
  )
  propagateCardLink(token)
  return token
}

export function inlineTokenizer(
  this: { lexer: { inlineTokens: (src: string) => Token[] } },
  src: string
): DirectiveToken | undefined {
  const head = INLINE_HEAD.exec(src)
  if (!head) return undefined
  const [, name] = head
  if (!isKnown(name, TEXT)) return undefined

  const tail = readTail(src, head[0].length)
  if (tail.label === null) return undefined

  return {
    type: 'directive',
    kind: TEXT,
    name,
    attrs: tail.attrs,
    tokens: this.lexer.inlineTokens(tail.label),
    raw: src.slice(0, tail.end)
  }
}
