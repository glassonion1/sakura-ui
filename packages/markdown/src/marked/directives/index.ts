import { GRID_RE } from '../registry'
import { cardRenderers } from './card'
import type { DirectiveRenderer } from './context'
import { faqRenderers } from './faq'
import { imageRenderers } from './image'
import { cellRenderers, grid } from './grid'
import { linkButtonRenderers } from './linkButton'
import { youtubeRenderers } from './youtube'

const BY_NAME: Record<string, DirectiveRenderer> = {
  ...cardRenderers,
  ...cellRenderers,
  ...faqRenderers,
  ...imageRenderers,
  ...youtubeRenderers,
  ...linkButtonRenderers
}

/**
 * `grid-cols-N` is the one name that is not a name but a shape, so it is looked
 * for after the others rather than listed among them.
 */
export const findRenderer = (name: string): DirectiveRenderer | undefined =>
  BY_NAME[name] ?? (GRID_RE.test(name) ? grid : undefined)

export type {
  DirectiveContext,
  DirectiveRenderer,
  Parser,
  RendererOptions
} from './context'
