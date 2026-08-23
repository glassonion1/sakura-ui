import { styles } from '@sakura-ui/core'
import { classNames, cleanUrl } from '../html'
import type { DirectiveRenderer } from './context'

const cardImgClass = classNames(styles.cardImgStyle, 'w-full aspect-[352/226]')

const iconHtml = (name: string, altText: string): string =>
  `<span aria-hidden="true" class="${classNames(
    styles.iconSizeStyle[16],
    styles.iconStyle
  )}">${name}</span><span class="sr-only">${altText}</span>`

export const cardRenderers: Record<string, DirectiveRenderer> = {
  card: ({ token, attrs, root, body, nl }) => {
    // Set by the tokenizer, and only when the card has a title to put the
    // link on. A card without one must not look as though it were clickable.
    const isLink = Boolean(token.linked)
    const cls = classNames(
      styles.cardStyle,
      isLink && styles.linkCardPositionStyle,
      isLink && styles.linkCardHoverStyle,
      isLink && styles.linkCardFocusStyle,
      attrs.class
    )
    const card = `<div${root({ class: cls })}>${body()}</div>`
    // A card in a grid of cards is one of a list; the tokenizer says which.
    return token.listed ? `<li class="sm:grid">${card}</li>${nl}` : `${card}${nl}`
  },

  'card-img': ({ attrs, root, nl }) =>
    `<img${root({
      class: classNames(cardImgClass, attrs.class),
      src: cleanUrl(attrs.src),
      alt: attrs.alt ?? ''
    })}>${nl}`,

  'card-title': ({ token, attrs, root, own, body, nl, options }) => {
    const tag = options.cardHeadingLevel
    const href = token.inherited ? cleanUrl(token.inherited.href) : undefined
    if (href) {
      // The anchor covers the card from here, so the title is the whole of the
      // name the link is read out under.
      return `<${tag}${root({
        class: classNames(styles.cardHeaderStyle, styles.linkCardHeadingStyle)
      })}><a${own({
        class: classNames(styles.linkCardOverlayStyle),
        href
      })}>${body()}</a></${tag}>${nl}`
    }
    return `<${tag}${root({
      class: classNames(styles.cardHeaderStyle, attrs.class)
    })}>${body()}</${tag}>${nl}`
  },

  'card-description': ({ attrs, root, body, nl }) =>
    `<div${root({
      class: classNames(styles.cardBodyStyle, attrs.class)
    })}>${body()}</div>${nl}`,

  'card-footer': ({ token, attrs, root, body, nl }) => {
    const isLink = Boolean(token.inherited)
    const cls = classNames(
      styles.cardFooterPositionStyle,
      styles.cardBodyStyle,
      isLink && styles.linkCardFooterStyle,
      attrs.class
    )
    if (isLink) {
      const arrow = `<span class="${classNames(
        styles.linkCardArrowStyle,
        styles.linkCardArrowHoverStyle
      )}">${iconHtml('arrow_forward', '')}</span>`
      return `<div${root({ class: cls })}><span>${body()}</span>${arrow}</div>${nl}`
    }
    return `<div${root({ class: cls })}>${body()}</div>${nl}`
  }
}
