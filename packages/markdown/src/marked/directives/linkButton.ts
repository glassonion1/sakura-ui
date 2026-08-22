import { styles } from '@sakura-ui/core'
import { classNames, cleanUrl } from '../html'
import type { DirectiveRenderer } from './context'

const linkButtonClass = classNames(
  styles.buttonBaseStyle,
  styles.getButtonVariantStyle('secondary'),
  styles.getButtonSizeStyle('lg')
)

/**
 * Written inline, so it takes no newline after it — it sits in a sentence.
 */
export const linkButtonRenderers: Record<string, DirectiveRenderer> = {
  'link-button': ({ attrs, root, body }) =>
    `<a${root({
      class: linkButtonClass,
      href: cleanUrl(attrs.href)
    })}>${body()}</a>`
}
