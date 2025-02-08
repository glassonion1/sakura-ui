import React from 'react'
import { cx } from '@sakura-ui/helper'

interface IdContextType {
  id: string
}

const IdContext = React.createContext<IdContextType>({ id: '' })

export namespace Card {
  export interface Props extends React.ComponentPropsWithoutRef<'article'> {}
}

export const Card = (props: Card.Props) => {
  const { className, children, ...restProps } = props

  const id = React.useId()
  const ctx: IdContextType = { id: id }

  const style = `
    border
    border-solid
    border-solid-gray-500
    rounded-2xl
    sm:rounded-3xl
    text-solid-gray-900
    overflow-hidden
  `

  return (
    <IdContext.Provider value={ctx}>
      <article
        aria-labelledby={ctx.id}
        aria-describedby={`${ctx.id}-desc`}
        className={cx(style, className)}
        {...restProps}
      >
        {children}
      </article>
    </IdContext.Provider>
  )
}

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

export namespace CardHeader {
  export interface Props extends React.ComponentPropsWithoutRef<'div'> {}
}

export const CardHeader = (props: CardHeader.Props) => {
  const { className, children, ...restProps } = props

  const ctx = React.useContext(IdContext)

  const style = `
    text-base
    leading-[2rem]
    font-medium
    first:pt-4
    pt-2
    last:pb-4
    px-6
  `

  return (
    <div id={ctx.id} className={cx(style, className)} {...restProps}>
      {children}
    </div>
  )
}

export namespace CardBody {
  export interface Props extends React.ComponentPropsWithoutRef<'div'> {}
}

export const CardBody = (props: CardBody.Props) => {
  const { className, children, ...restProps } = props

  const ctx = React.useContext(IdContext)

  const style = `
    text-base-sm
    leading-[1.85rem]
    first:pt-4
    pt-2
    last:pb-4
    px-6
  `

  return (
    <div id={`${ctx.id}-desc`} className={cx(style, className)} {...restProps}>
      {children}
    </div>
  )
}

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
