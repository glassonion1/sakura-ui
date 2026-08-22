import React from 'react'
import { cx } from '@sakura-ui/helper'

export namespace Card {
  export interface Props<T extends React.ElementType> {
    as?: T
  }
}

export const Card = <T extends React.ElementType = 'div'>(
  props: Card.Props<T> & Omit<React.ComponentProps<T>, keyof Card.Props<T>>
) => {
  const { as: Component = 'div', className, children, ...restProps } = props

  const style = `
    border
    border-solid
    border-solid-gray-500
    rounded-2xl
    sm:rounded-3xl
    text-solid-gray-900
    overflow-hidden
  `

  // No ARIA here on purpose. A div maps to the generic role, which prohibits an
  // accessible name, so aria-labelledby would be ignored anyway. Callers that
  // genuinely need a named region pass as="article" together with their own
  // aria-labelledby and put a matching id on CardHeader.
  return (
    <Component className={cx(style, className)} {...restProps}>
      {children}
    </Component>
  )
}

Card.displayName = 'Card'

export namespace CardImg {
  export interface Props extends React.ComponentPropsWithoutRef<'img'> {}
}

export const CardImg = (props: CardImg.Props) => {
  const { className, ...restProps } = props

  const style = `
    object-cover
    mb-2
  `

  // biome-ignore lint/a11y/useAltText: things to check on the user side
  return <img className={cx(style, className)} {...restProps} />
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

  // Reset the browser defaults of the heading and paragraph elements so that the
  // rendered element does not change how the card looks.
  const style = `
    m-0
    text-base
    leading-[2rem]
    font-medium
    first:pt-4
    pt-2
    last:pb-4
    px-6
  `

  return (
    <Component className={cx(style, className)} {...restProps}>
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

  const style = `
    text-base-sm
    leading-[1.85rem]
    first:pt-4
    pt-2
    last:pb-4
    px-6
  `

  // No generated id here. Callers that want the body to describe the card pass
  // their own id and point aria-describedby at it.
  return (
    <div className={cx(style, className)} {...restProps}>
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

  const stylePosition = `
    sticky
    top-full
  `

  const style = `
    text-base-sm
    leading-[1.85rem]
    first:pt-4
    pt-2
    last:pb-4
    px-6
  `

  return (
    <div className={cx(stylePosition, style, className)} {...restProps}>
      {children}
    </div>
  )
}

CardFooter.displayName = 'CardFooter'
