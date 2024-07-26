import React from 'react'
import { cx } from '@sakura-ui/helper'
import { Card, CardHeader } from './Card'
import { Icon } from './Icon'

interface LinkContextType {
  href: string
}

const LinkContext = React.createContext<LinkContextType>({ href: '' })

export interface LinkCardProps extends React.ComponentProps<'article'> {
  href: string
}

export const LinkCard = ({
  href,
  className,
  children,
  ...rest
}: LinkCardProps) => {
  const styleLink = `
    grid
    outline-offset-4
    rounded-2xl
    sm:rounded-3xl
    focus:outline-2
    focus:outline-wood-600
    w-full h-full
  `

  const styleHover = `
    hover:text-sea-1000
    hover:border-sea-1000
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
              <Icon className="text-base ml-1 font-light" icon="open_in_new" />
            ) : (
              ''
            )}
          </span>
          {isExternal ? (
            ''
          ) : (
            <Icon className="text-base-sm !font-medium" icon="arrow_forward" />
          )}
        </>
      )}
    </CardHeader>
  )
}
