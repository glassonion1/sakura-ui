import { classNames, cleanUrl } from '../html'
import type { DirectiveRenderer } from './context'

/**
 * Beyond six the columns are too narrow to read, so 7 through 11 stop there.
 * Twelve is kept because it is the grid people reach for when they are dividing
 * a row rather than listing things.
 */
const GRID_CLASS: Record<number, string> = {
  1: 'md:grid-cols-1',
  2: 'md:grid-cols-2',
  3: 'md:grid-cols-3',
  4: 'md:grid-cols-4',
  5: 'md:grid-cols-5',
  6: 'md:grid-cols-6',
  7: 'md:grid-cols-6',
  8: 'md:grid-cols-6',
  9: 'md:grid-cols-6',
  10: 'md:grid-cols-6',
  11: 'md:grid-cols-6',
  12: 'md:grid-cols-12'
}

/**
 * `grid-cols-N` for any N the registry allows. A grid of cards is a `<ul>` and
 * anything else a `<div>`; the tokenizer decides which, because by the time the
 * children are rendered they are one string with no seams.
 */
export const grid: DirectiveRenderer = ({ token, root, body, nl }) => {
  const columns = Number(token.name.slice('grid-cols-'.length))
  const cls = classNames(
    'flex flex-col md:grid',
    GRID_CLASS[columns],
    'gap-8'
  )
  const tag = token.listed ? 'ul' : 'div'
  return `<${tag}${root({ class: cls })}>${body()}</${tag}>${nl}`
}

export const cellRenderers: Record<string, DirectiveRenderer> = {
  cell: ({ attrs, root, body, nl }) =>
    `<div${root({ class: attrs.class })}>${body()}</div>${nl}`,

  'cell-img': ({ attrs, root, nl }) =>
    `<img${root({
      class: classNames('mb-4', attrs.class),
      src: cleanUrl(attrs.src),
      alt: attrs.alt ?? ''
    })}>${nl}`
}
