import React from 'react'
import { cx, Style } from '@sakura-ui/helper'
import { Card, CardHeader } from './Card'
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
  `

  const styleHover = `
    hover:text-blue-1000
    hover:border-blue-1000
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
    flex
    justify-between
    items-center
  `

  const isExternal = href.startsWith('https://')

  return (
    <CardHeader className={cx(className, styleHeading)}>
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
          {isExternal ? '' : <Icon opticalSize={16}>arrow_forward</Icon>}
        </>
      )}
    </CardHeader>
  )
}
