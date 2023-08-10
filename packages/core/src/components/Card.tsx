import React from 'react'
import { cx } from '../utils/class'

interface IdContextType {
  id: string
}

const IdContext = React.createContext<IdContextType>({ id: '' })

export interface CardProps extends React.ComponentPropsWithoutRef<'section'> {}

export const Card: React.ElementType<CardProps> = (props: CardProps) => {
  const { className, children, ...restProps } = props

  const id = React.useId()
  const ctx: IdContextType = { id: id }

  const style = `
    border
    border-solid
    border-sumi-300
    rounded-2xl
    md:rounded-3xl
    text-sumi-900
    overflow-hidden
  `

  return (
    <IdContext.Provider value={ctx}>
      <section
        aria-labelledby={ctx.id}
        className={cx(style, className)}
        {...restProps}
      >
        {children}
      </section>
    </IdContext.Provider>
  )
}

export interface CardHeaderProps extends React.ComponentPropsWithoutRef<'h2'> {}

export const CardHeader: React.ElementType<CardHeaderProps> = (
  props: CardHeaderProps
) => {
  const { className, children, ...restProps } = props

  const ctx = React.useContext(IdContext)

  const style = `
    py-6
    px-6
    text-lgm
    leading-none
  `

  return (
    <h2 id={ctx.id} className={cx(style, className)} {...restProps}>
      {children}
    </h2>
  )
}

export interface CardBodyProps extends React.ComponentPropsWithoutRef<'p'> {}

export const CardBody: React.ElementType<CardBodyProps> = (
  props: CardBodyProps
) => {
  const { className, children, ...restProps } = props

  const style = `
    px-6
    first:pt-6
    pb-6
    text-base
  `

  return (
    <p className={cx(style, className)} {...restProps}>
      {children}
    </p>
  )
}

export interface CardFooterProps
  extends React.ComponentPropsWithoutRef<'div'> {}

export const CardFooter: React.ElementType<CardFooterProps> = (
  props: CardFooterProps
) => {
  const { className, children, ...restProps } = props

  const style = `
    px-6
    first:pt-6
    pb-6
  `

  return (
    <div className={cx(style, className)} {...restProps}>
      {children}
    </div>
  )
}
