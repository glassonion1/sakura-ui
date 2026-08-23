import { ANCHOR } from './attributes'
import { attrsToHtml } from './html'
import { CONTAINER, TEXT } from './registry'
import type { DirectiveToken } from './tokenizer'
import {
  type DirectiveContext,
  findRenderer,
  type Parser,
  type RendererOptions
} from './directives'

/**
 * Builds the context, then hands the token to the renderer that knows its name.
 * The renderers live in `directives/`, a file to a feature, so that a card and
 * everything written inside one stay together.
 *
 * A name with no renderer falls through to its own children.
 */
export function directiveRenderer(
  this: { parser: Parser },
  token: DirectiveToken,
  options: RendererOptions
): string {
  const { name, kind, attrs, tokens } = token
  const nl = kind === TEXT ? '' : '\n'

  // Marks what the directive dressed itself, so that the pass which styles the
  // rest of the document leaves it alone.
  const own: DirectiveContext['own'] = (values) =>
    attrsToHtml({ ...values, 'data-sakura': name })

  const context: DirectiveContext = {
    token,
    attrs,
    nl,
    own,
    root: (values) => own({ ...values, id: attrs[ANCHOR] }),
    body: () =>
      kind === CONTAINER
        ? this.parser.parse(tokens)
        : this.parser.parseInline(tokens),
    parser: this.parser,
    options
  }

  const render = findRenderer(name)
  return render ? render(context) : context.body() + nl
}

export type { RendererOptions } from './directives'
