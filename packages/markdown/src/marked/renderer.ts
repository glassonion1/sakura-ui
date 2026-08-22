import { styles } from '@sakura-ui/core'
import type { Token } from 'marked'
import { attrsToHtml, classNames, cleanUrl } from './html'
import { CONTAINER, TEXT } from './registry'
import type { DirectiveToken } from './tokenizer'

/**
 * The directives render the same markup the components would, using the class
 * strings the components themselves use. Nothing is reproduced here by hand, so
 * restyling a component carries over.
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

const YOUTUBE_ALLOW =
  'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'

const linkButtonClass = classNames(
  styles.buttonBaseStyle,
  styles.getButtonVariantStyle('secondary'),
  styles.getButtonSizeStyle('lg')
)

const cardImgClass = classNames(styles.cardImgStyle, 'w-full aspect-[352/226]')

const iconHtml = (name: string, altText: string, extra?: string): string =>
  `<span aria-hidden="true" class="${classNames(
    styles.iconSizeStyle[16],
    styles.iconStyle,
    extra
  )}">${name}</span><span class="sr-only">${altText}</span>`

export interface RendererOptions {
  /** The element a card title renders as, already shifted. */
  cardHeadingLevel: string
}

export function directiveRenderer(
  this: {
    parser: {
      parse: (tokens: Token[]) => string
      parseInline: (tokens: Token[], renderer?: unknown) => string
      textRenderer: unknown
    }
  },
  token: DirectiveToken,
  options: RendererOptions
): string {
  const { name, kind, attrs, tokens } = token
  const nl = kind === TEXT ? '' : '\n'

  // Marks what the directive dressed itself, so that the pass which styles the
  // rest of the document leaves it alone.
  const own = (values: Parameters<typeof attrsToHtml>[0]) =>
    attrsToHtml({ ...values, 'data-sakura': name })
  const body = () =>
    kind === CONTAINER
      ? this.parser.parse(tokens)
      : this.parser.parseInline(tokens)

  if (name === 'youtube') {
    const title = this.parser.parseInline(tokens, this.parser.textRenderer)
    return `<iframe${own({
      title,
      src: `https://www.youtube-nocookie.com/embed/${encodeURIComponent(attrs.id ?? '')}`,
      class: 'aspect-video w-full max-w-[470px]',
      style: attrs.width ? `width:${attrs.width}px` : undefined,
      frameborder: '0',
      allow: attrs.allow ?? YOUTUBE_ALLOW,
      referrerpolicy: attrs.referrerpolicy ?? 'strict-origin-when-cross-origin',
      allowfullscreen: true,
      loading: 'lazy'
    })}></iframe>${nl}`
  }

  if (name === 'link-button') {
    return `<a${own({
      class: linkButtonClass,
      href: cleanUrl(attrs.href)
    })}>${body()}</a>`
  }

  const grid = /^grid-cols-(\d+)$/.exec(name)
  if (grid) {
    const cls = classNames(
      'flex flex-col md:grid',
      GRID_CLASS[Number(grid[1])],
      'gap-8'
    )
    if (attrs.as === 'list') {
      // Wrapping each child asks for the boundary between them, which a pass
      // over the finished HTML no longer has. Here the tokens are still apart.
      const items = tokens
        .filter((t) => t.type !== 'space')
        .map((t) => `<li class="sm:grid">${this.parser.parse([t])}</li>`)
        .join('')
      return `<ul${own({ class: cls })}>${items}</ul>${nl}`
    }
    return `<div${own({ class: cls })}>${body()}</div>${nl}`
  }

  if (name === 'card') {
    const isLink = attrs.as === 'link'
    const cls = classNames(
      styles.cardStyle,
      isLink && styles.linkCardPositionStyle,
      isLink && styles.linkCardHoverStyle,
      isLink && styles.linkCardFocusStyle,
      attrs.class
    )
    return `<div${own({ class: cls })}>${body()}</div>${nl}`
  }

  if (name === 'card-img') {
    return `<img${own({
      class: classNames(cardImgClass, attrs.class),
      src: cleanUrl(attrs.src),
      alt: attrs.alt ?? ''
    })}>${nl}`
  }

  if (name === 'cell-img') {
    return `<img${own({
      class: classNames('mb-4', attrs.class),
      src: cleanUrl(attrs.src),
      alt: attrs.alt ?? ''
    })}>${nl}`
  }

  if (name === 'card-title') {
    const tag = options.cardHeadingLevel
    const href = token.inherited ? cleanUrl(token.inherited.href) : undefined
    if (href) {
      return `<${tag}${own({
        class: classNames(styles.cardHeaderStyle, styles.linkCardHeadingStyle)
      })}><a${own({
        class: classNames(styles.linkCardOverlayStyle),
        href
      })}>${body()}</a></${tag}>${nl}`
    }
    return `<${tag}${own({
      class: classNames(styles.cardHeaderStyle, attrs.class)
    })}>${body()}</${tag}>${nl}`
  }

  if (name === 'card-description') {
    return `<div${own({
      class: classNames(styles.cardBodyStyle, attrs.class)
    })}>${body()}</div>${nl}`
  }

  if (name === 'card-footer') {
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
      return `<div${own({ class: cls })}><span>${body()}</span>${arrow}</div>${nl}`
    }
    return `<div${own({ class: cls })}>${body()}</div>${nl}`
  }

  if (name === 'cell') {
    return `<div${own({ class: attrs.class })}>${body()}</div>${nl}`
  }

  if (name === 'faq') {
    return `<dl${own({ class: classNames(styles.faqStyle) })}>${body()}</dl>${nl}`
  }

  if (name === 'faq-q') {
    return `<dt${own({
      class: classNames(styles.questionStyle, styles.faqMarkerStyle)
    })}><span aria-hidden="true">Q</span><span>${body()}</span></dt>${nl}`
  }

  if (name === 'faq-a') {
    return `<dd${own({
      class: classNames(styles.answerStyle)
    })}><span class="${classNames(
      styles.faqMarkerStyle,
      '!leading-none'
    )}" aria-hidden="true">A</span><span>${body()}</span></dd>${nl}`
  }

  return body() + nl
}

export { iconHtml }
