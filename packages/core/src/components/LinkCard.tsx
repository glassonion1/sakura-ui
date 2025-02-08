import React from 'react'
import { cx, Style } from '@sakura-ui/helper'
import { Card, CardFooter, CardHeader } from './Card'
import { Icon } from './Icon'

interface LinkContextType {
  href: string
}
const LinkContext = React.createContext<LinkContextType>({ href: '' })

export namespace LinkCard {
  export interface Props extends React.ComponentProps<'article'> {
    href: string
  }
}

export const LinkCard = ({
  href,
  className,
  children,
  ...rest
}: LinkCard.Props) => {
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

  const isExternal = href?.startsWith('https://')

  return (
    <LinkContext.Provider value={{ href: href }}>
      <a
        className={cx(styleLink)}
        href={href}
        target={isExternal ? '_blank' : ''}
      >
        <Card className={cx(styleHover, className)} {...rest}>
          {children}
        </Card>
      </a>
    </LinkContext.Provider>
  )
}

export interface LinkCardHeaderProps extends React.ComponentProps<'div'> {}

export const LinkCardHeader = ({
  className,
  children
}: LinkCardHeaderProps) => {
  const { href } = React.useContext(LinkContext)

  const styleHeading = `
    decoration-blue-900
    underline
    underline-offset-[calc(3/16*1rem)]
  `
  const styleHover = `
    group-hover:text-blue-900
    group-hover:decoration-[calc(3/16*1rem)]
  `

  const isExternal = href.startsWith('https://')

  return (
    <CardHeader className={cx(className, styleHeading, styleHover)}>
      {href === '' ? (
        children
      ) : (
        <>
          <span>
            {children}
            {isExternal ? (
              <Icon opticalSize={16} className="ml-1">
                open_in_new
              </Icon>
            ) : (
              ''
            )}
          </span>
        </>
      )}
    </CardHeader>
  )
}

export interface LinkCardFooterProps extends React.ComponentProps<'div'> {}

export const LinkCardFooter = ({
  className,
  children
}: LinkCardHeaderProps) => {
  const { href } = React.useContext(LinkContext)

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
      {href === '' ? (
        children
      ) : (
        <>
          <span>{children}</span>
          <span className={cx(styleIcon, styleIconHover)}>
            <Icon opticalSize={16}>arrow_forward</Icon>
          </span>
        </>
      )}
    </CardFooter>
  )
}
