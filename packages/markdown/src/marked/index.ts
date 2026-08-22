import type { MarkedExtension, Tokens } from 'marked'
import { directiveRenderer, type RendererOptions } from './renderer'
import {
  blockStart,
  blockTokenizer,
  type DirectiveToken,
  inlineStart,
  inlineTokenizer
} from './tokenizer'

export type { DirectiveToken } from './tokenizer'
export type { RendererOptions } from './renderer'

/**
 * The `:::name` syntax, as a marked extension.
 *
 * Both levels register under the same name because marked looks the renderer up
 * by the token type, so a second name would mean a second renderer saying the
 * same thing.
 */
export const directiveExtension = (
  options: RendererOptions
): MarkedExtension => ({
  extensions: [
    {
      name: 'directive',
      level: 'inline',
      start: inlineStart,
      tokenizer: inlineTokenizer
    },
    {
      name: 'directive',
      level: 'block',
      start: blockStart,
      tokenizer: blockTokenizer,
      renderer(token: Tokens.Generic) {
        return directiveRenderer.call(
          this as never,
          token as DirectiveToken,
          options
        )
      }
    }
  ]
})
