import type { Token } from 'marked'
import type { Attrs } from '../attributes'
import type { AttrValue } from '../html'
import type { DirectiveToken } from '../tokenizer'

export interface Parser {
  parse: (tokens: Token[]) => string
  parseInline: (tokens: Token[], renderer?: unknown) => string
  textRenderer: unknown
}

export interface RendererOptions {
  /** The element a card title renders as, already shifted. */
  cardHeadingLevel: string
}

type Values = Record<string, AttrValue>

/**
 * What each renderer is handed.
 *
 * `root` and `own` differ in one thing: `root` adds the id asked for by
 * `{#name}`. It belongs on the element the directive **is**, and `own` on
 * anything nested inside that, or the id would be written twice.
 */
export interface DirectiveContext {
  token: DirectiveToken
  attrs: Attrs
  /** A newline after a block directive, nothing after an inline one. */
  nl: string
  root: (values: Values) => string
  own: (values: Values) => string
  /** The children, rendered — inline for a leaf, block for a container. */
  body: () => string
  parser: Parser
  options: RendererOptions
}

export type DirectiveRenderer = (context: DirectiveContext) => string
