import { styles } from '@sakura-ui/core'
import { classNames } from '../html'
import type { DirectiveRenderer } from './context'

/**
 * A description list, which is what a run of questions and answers is. The Q
 * and the A are decoration and are hidden from a screen reader, which is told
 * the same thing by the <dt> and <dd>.
 *
 * No schema.org FAQPage markup here. Google discontinued the FAQ rich result in
 * May 2026, so it is not implemented.
 */
export const faqRenderers: Record<string, DirectiveRenderer> = {
  faq: ({ root, body, nl }) =>
    `<dl${root({ class: classNames(styles.faqStyle) })}>${body()}</dl>${nl}`,

  'faq-q': ({ root, body, nl }) =>
    `<dt${root({
      class: classNames(styles.questionStyle, styles.faqMarkerStyle)
    })}><span aria-hidden="true">Q</span><span>${body()}</span></dt>${nl}`,

  'faq-a': ({ root, body, nl }) =>
    `<dd${root({
      class: classNames(styles.answerStyle)
    })}><span class="${classNames(
      styles.faqMarkerStyle,
      '!leading-none'
    )}" aria-hidden="true">A</span><span>${body()}</span></dd>${nl}`
}
