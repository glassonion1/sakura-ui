import React from 'react'
import { cx, Style } from '@sakura-ui/helper'
import { Card, CardFooter, CardHeader } from './Card'
import { Icon } from './Icon'

export namespace LinkCard {
  export interface Props<T extends React.ElementType>
    extends React.ComponentProps<'article'> {
    href: string
    target?: string
    linkAs?: T
  }
}

export const LinkCard = <T extends React.ElementType = 'a'>(
  props: LinkCard.Props<T>
) => {
  const {
    href,
    target,
    linkAs: Component = 'a',
    className,
    children,
    ...rest
  } = props

  const styleLink = `
    grid
    outline-offset-4
    rounded-2xl
    sm:rounded-3xl
    w-full h-full
    ${Style.focusCard}
    group
  `

  const styleHover = `
    group-hover:outline
    group-hover:outline-blue-900
    group-hover:outline-4
    group-hover:outline-offset-[-1px]
  `

  return (
    <Component className={cx(styleLink)} href={href} target={target}>
      <Card className={cx(styleHover, className)} {...rest}>
        {children}
      </Card>
    </Component>
  )
}

export namespace LinkCardHeader {
  export interface Props extends React.ComponentProps<'div'> {
    target?: string
  }
}

export const LinkCardHeader = ({
  target,
  className,
  children
}: LinkCardHeader.Props) => {
  const styleHeading = `
    decoration-blue-900
    underline
    underline-offset-[calc(3/16*1rem)]
  `
  const styleHover = `
    group-hover:text-blue-900
    group-hover:decoration-[calc(3/16*1rem)]
  `

  return (
    <CardHeader className={cx(className, styleHeading, styleHover)}>
      <span>
        {children}
        {target === '_blank' && (
          <Icon opticalSize={16} className="ml-1">
            open_in_new
          </Icon>
        )}
      </span>
    </CardHeader>
  )
}

export namespace LinkCardFooter {
  export interface Props extends React.ComponentProps<'div'> {}
}

export const LinkCardFooter = ({
  className,
  children
}: LinkCardFooter.Props) => {
  const style = `
    flex
    justify-between
    items-center
  `

  const styleIcon = `
    inline-flex
    items-center
    justify-center
    w-6 h-6
    text-blue-1000
    border
    border-blue-1000
    rounded-full
  `

  const styleIconHover = `
    group-hover:bg-blue-1000
    group-hover:text-white
  `

  return (
    <CardFooter className={cx(className, style)}>
      <span>{children}</span>
      <span className={cx(styleIcon, styleIconHover)}>
        <Icon opticalSize={16}>arrow_forward</Icon>
      </span>
    </CardFooter>
  )
}
