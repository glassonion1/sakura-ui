/**
 * The class strings the components put on the elements they render.
 *
 * They are exported so that anything producing the same markup without React —
 * @sakura-ui/markdown builds HTML strings — reads these instead of keeping a
 * copy of its own, which would drift the moment a component is restyled.
 *
 * Reach for a component first. These are for the cases where there is no React
 * tree to put one in.
 */

export {
  base as buttonBaseStyle,
  getVariantStyle as getButtonVariantStyle,
  getSizeStyle as getButtonSizeStyle
} from './buttonStyle'
export {
  cardStyle,
  cardImgStyle,
  cardHeaderStyle,
  cardBodyStyle,
  cardFooterPositionStyle
} from './Card'
export { codeStyle } from './Code'
export { faqStyle, faqMarkerStyle, questionStyle, answerStyle } from './Faq'
export { headingStyle } from './Heading'
export { iconStyle, iconSizeStyle } from './Icon'
export { linkStyle } from './Link'
export {
  linkCardPositionStyle,
  linkCardHoverStyle,
  linkCardFocusStyle,
  linkCardHeadingStyle,
  linkCardOverlayStyle,
  linkCardFooterStyle,
  linkCardArrowStyle,
  linkCardArrowHoverStyle
} from './LinkCard'
export { ulStyle, olStyle } from './List'
export { overflowContainerStyle } from './OverflowContainer'
export { preStyle } from './Pre'
export { tableBorderStyle, captionStyle, thStyle, tdStyle } from './Table'
