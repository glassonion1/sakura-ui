import React from 'react'
import { cx } from '@sakura-ui/helper'

export const cardStyle = `
  border
  border-solid
  border-solid-gray-500
  rounded-2xl
  sm:rounded-3xl
  text-solid-gray-900
  overflow-hidden
`

export namespace Card {
  export interface Props<T extends React.ElementType> {
    as?: T
  }
}

export const Card = <T extends React.ElementType = 'div'>(
  props: Card.Props<T> & Omit<React.ComponentProps<T>, keyof Card.Props<T>>
) => {
  const { as: Component = 'div', className, children, ...restProps } = props

  // A div cannot carry an accessible name, so no ARIA is set here. See the
  // Accessible names section of the README before adding any.
  return (
    <Component className={cx(cardStyle, className)} {...restProps}>
      {children}
    </Component>
  )
}

Card.displayName = 'Card'

export const cardImgStyle = `
  object-cover
  mb-2
`

/**
 * Resets the browser defaults of the heading and paragraph elements, so that
 * the element CardHeader renders does not change how the card looks.
 */
export const cardHeaderStyle = `
  m-0
  text-base
  leading-[2rem]
  font-medium
  first:pt-4
  pt-2
  last:pb-4
  px-6
`

export const cardBodyStyle = `
  text-base-sm
  leading-[1.85rem]
  first:pt-4
  pt-2
  last:pb-4
  px-6
`

export const cardFooterPositionStyle = `
  sticky
  top-full
`

export namespace CardImg {
  export interface Props extends React.ComponentPropsWithoutRef<'img'> {}
}

export const CardImg = (props: CardImg.Props) => {
  const { className, ...restProps } = props

  // biome-ignore lint/a11y/useAltText: things to check on the user side
  return <img className={cx(cardImgStyle, className)} {...restProps} />
}

CardImg.displayName = 'CardImg'

export type CardHeaderAs = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p'

export namespace CardHeader {
  export interface Props extends React.ComponentPropsWithoutRef<'h3'> {
    /**
     * The element to render the title as. Required on purpose: the right level
     * depends on the surrounding document outline, so the library must not pick
     * one. Use 'p' for lists of many cards, where headings would add noise.
     */
    as: CardHeaderAs
  }
}

export const CardHeader = (props: CardHeader.Props) => {
  const { as: Component, className, children, ...restProps } = props

  if (!Component) {
    // Without this, React reports an invalid element type and suggests a missing
    // export, which says nothing about the property that was actually left out.
    throw new Error(
      'CardHeader: the "as" property is required. Pass the heading level that ' +
        'fits the outline around the card, or "p" for lists of many cards.'
    )
  }

  return (
    <Component className={cx(cardHeaderStyle, className)} {...restProps}>
      {children}
    </Component>
  )
}

CardHeader.displayName = 'CardHeader'

export namespace CardBody {
  export interface Props extends React.ComponentPropsWithoutRef<'div'> {}
}

export const CardBody = (props: CardBody.Props) => {
  const { className, children, ...restProps } = props

  // No generated id here. Callers that want the body to describe the card pass
  // their own id and point aria-describedby at it.
  return (
    <div className={cx(cardBodyStyle, className)} {...restProps}>
      {children}
    </div>
  )
}

CardBody.displayName = 'CardBody'

export namespace CardFooter {
  export interface Props extends React.ComponentPropsWithoutRef<'div'> {}
}

export const CardFooter = (props: CardFooter.Props) => {
  const { className, children, ...restProps } = props

  return (
    <div
      className={cx(cardFooterPositionStyle, cardBodyStyle, className)}
      {...restProps}
    >
      {children}
    </div>
  )
}

CardFooter.displayName = 'CardFooter'
