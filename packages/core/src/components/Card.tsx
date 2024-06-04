import React from 'react'
import { cx } from '../libs/cx'

interface IdContextType {
  id: string
}

const IdContext = React.createContext<IdContextType>({ id: '' })

export interface CardProps extends React.ComponentPropsWithoutRef<'article'> {}

export const Card = (props: CardProps) => {
  const { className, children, ...restProps } = props

  const id = React.useId()
  const ctx: IdContextType = { id: id }

  const style = `
    border
    border-solid
    border-sumi-300
    rounded-2xl
    sm:rounded-3xl
    text-sumi-900
    overflow-hidden
    flex flex-col
    gap-2
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

export interface CardImgProps extends React.ComponentPropsWithoutRef<'img'> {}

export const CardImg = (props: CardImgProps) => {
  const { className, ...restProps } = props

  const style = `
    object-cover
    mb-2
  `

  return <img className={cx(style, className)} {...restProps} />
}

export interface CardHeaderProps
  extends React.ComponentPropsWithoutRef<'div'> {}

export const CardHeader = (props: CardHeaderProps) => {
  const { className, children, ...restProps } = props

  const ctx = React.useContext(IdContext)

  const style = `
    text-base
    font-medium
    first:pt-4
    last:pb-4
    px-6
  `

  return (
    <div id={ctx.id} className={cx(style, className)} {...restProps}>
      {children}
    </div>
  )
}

export interface CardBodyProps extends React.ComponentPropsWithoutRef<'div'> {}

export const CardBody = (props: CardBodyProps) => {
  const { className, children, ...restProps } = props

  const ctx = React.useContext(IdContext)

  const style = `
    text-base-sm
    first:pt-4
    last:pb-4
    px-6
  `

  return (
    <div id={`${ctx.id}-desc`} className={cx(style, className)} {...restProps}>
      {children}
    </div>
  )
}

export interface CardFooterProps
  extends React.ComponentPropsWithoutRef<'div'> {}

export const CardFooter = (props: CardFooterProps) => {
  const { className, children, ...restProps } = props

  const style = `
    text-base-sm
    first:pt-4
    last:pb-4
    px-6
  `

  return (
    <div className={cx(style, className)} {...restProps}>
      {children}
    </div>
  )
}
