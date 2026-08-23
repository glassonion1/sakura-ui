import { classNames, cleanUrl } from '../html'
import type { DirectiveRenderer } from './context'

/**
 * `width` and `height` are pixels. `max-width` goes with a width so that the
 * image shrinks inside its column on a narrow screen rather than overflowing
 * it; with a height alone there is nothing to overflow, since the width
 * follows the proportions.
 */
const sizeStyle = (
  width: string | undefined,
  height: string | undefined
): string | undefined => {
  const rules: string[] = []
  if (width) rules.push(`width:${width}px`)
  if (height) rules.push(`height:${height}px`)
  if (width) rules.push('max-width:100%')
  return rules.length > 0 ? rules.join(';') : undefined
}

export const imageRenderers: Record<string, DirectiveRenderer> = {
  img: ({ attrs, root, nl }) =>
    `<img${root({
      class: classNames(attrs.class),
      src: cleanUrl(attrs.src),
      alt: attrs.alt ?? '',
      style: sizeStyle(attrs.width, attrs.height)
    })}>${nl}`
}
