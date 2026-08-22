import React from 'react'
import { cx } from '@sakura-ui/helper'
import { Card, CardFooter, CardHeader, type CardHeaderAs } from './Card'
import { Icon } from './Icon'

export namespace LinkCard {
  export interface Props<T extends React.ElementType> extends Card.Props<T> {}
}

/**
 * A Card whose title carries the link. The link stretches over the whole card
 * through a ::after overlay, so the card cannot contain another link, a button
 * or a form control.
 */
/**
 * z-0 establishes a stacking context so that the overlay of the title can be
 * raised above the rest of the card. CardFooter is sticky, which makes it a
 * positioned element that would otherwise paint over the overlay and swallow
 * the clicks aimed at the bottom of the card.
 */
export const linkCardPositionStyle = `
  relative
  z-0
  group
`

export const linkCardHoverStyle = `
  hover:outline
  hover:outline-2
  hover:outline-black
  hover:bg-solid-gray-50
`

/**
 * The focus ring goes on the card itself, not on the <a>, so that it surrounds
 * the whole card. The card sets overflow-hidden, which would cut off a ring
 * drawn on the ::after overlay inside it. An element never clips its own
 * outline, so the ring survives here.
 */
export const linkCardFocusStyle = `
  has-[a:focus-visible]:outline
  has-[a:focus-visible]:outline-4
  has-[a:focus-visible]:outline-black
  has-[a:focus-visible]:outline-offset-[calc(2/16*1rem)]
  has-[a:focus-visible]:ring-[calc(2/16*1rem)]
  has-[a:focus-visible]:ring-yellow-300
`

export const LinkCard = <T extends React.ElementType = 'div'>(
  props: LinkCard.Props<T> & Omit<React.ComponentProps<T>, keyof LinkCard.Props<T>>
) => {
  const { className, children, ...restProps } = props

  // TypeScript cannot carry the generic through to Card, which is polymorphic in
  // the same way. The public signature above stays exact; only this hand-off is
  // widened.
  const Root = Card as React.ElementType

  return (
    <Root
      className={cx(
        linkCardPositionStyle,
        linkCardHoverStyle,
        linkCardFocusStyle,
        className
      )}
      {...restProps}
    >
      {children}
    </Root>
  )
}

LinkCard.displayName = 'LinkCard'

export const linkCardHeadingStyle = `
  decoration-blue-900
  underline
  underline-offset-[calc(3/16*1rem)]

  group-hover:text-blue-900
  group-hover:decoration-[calc(3/16*1rem)]
`

/**
 * The ::after overlay makes the whole card clickable. It carries no visual of
 * its own; the focus ring lives on the LinkCard element.
 */
export const linkCardOverlayStyle = `
  after:content-['']
  after:absolute
  after:inset-0
  after:z-10
  focus-visible:outline-none
`

export const linkCardFooterStyle = `
  flex
  justify-between
  items-center
`

export const linkCardArrowStyle = `
  inline-flex
  items-center
  justify-center
  w-6 h-6
  text-blue-1000
  border
  border-blue-1000
  rounded-full
`

export const linkCardArrowHoverStyle = `
  group-hover:bg-blue-1000
  group-hover:text-white
`

export namespace LinkCardHeader {
  export interface Props<T extends React.ElementType> {
    /** The element to render the title as. See CardHeader. */
    as: CardHeaderAs
    /** The component to render the link as. Defaults to an anchor element. */
    linkAs?: T
  }
}

/**
 * The title of a LinkCard, holding the link that covers the whole card.
 *
 * `className` styles the title element; every other prop (href, target, and
 * whatever the component passed to `linkAs` accepts) goes to the link.
 */
export const LinkCardHeader = <T extends React.ElementType = 'a'>(
  props: LinkCardHeader.Props<T> &
    Omit<React.ComponentProps<T>, keyof LinkCardHeader.Props<T>>
) => {
  const {
    as,
    linkAs: Component = 'a',
    className,
    children,
    ...restProps
  } = props

  if (!as) {
    throw new Error(
      'LinkCardHeader: the "as" property is required. Pass the heading level ' +
        'that fits the outline around the card, or "p" for lists of many cards.'
    )
  }

  return (
    <CardHeader as={as} className={cx(className, linkCardHeadingStyle)}>
      <Component className={linkCardOverlayStyle} {...restProps}>
        {children}
        {restProps.target === '_blank' && (
          <Icon opticalSize={16} className="ml-1" altText="新しいタブで開きます">
            open_in_new
          </Icon>
        )}
      </Component>
    </CardHeader>
  )
}

LinkCardHeader.displayName = 'LinkCardHeader'

export namespace LinkCardFooter {
  export interface Props extends React.ComponentPropsWithoutRef<'div'> {}
}

export const LinkCardFooter = (props: LinkCardFooter.Props) => {
  const { className, children, ...restProps } = props

  return (
    <CardFooter className={cx(linkCardFooterStyle, className)} {...restProps}>
      <span>{children}</span>
      <span className={cx(linkCardArrowStyle, linkCardArrowHoverStyle)}>
        <Icon opticalSize={16}>arrow_forward</Icon>
      </span>
    </CardFooter>
  )
}

LinkCardFooter.displayName = 'LinkCardFooter'
