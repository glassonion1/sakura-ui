import React from 'react'
import { cx } from '../libs/cx'

interface IdContextType {
  id: string
}

const IdContext = React.createContext<IdContextType>({ id: '' })

export interface CardProps extends React.ComponentPropsWithoutRef<'section'> {}

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

export const CardHeader = (props: CardHeaderProps) => {
  const { className, children, ...restProps } = props

  const ctx = React.useContext(IdContext)

  const style = `
    px-6
    first:pt-6
    last:pb-6
    py-3
    text-base
    font-medium
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

  const style = `
    px-6
    first:pt-6
    last:pb-6
    pb-3
    text-base-sm
  `

  return (
    <div className={cx(style, className)} {...restProps}>
      {children}
    </div>
  )
}

export interface CardFooterProps
  extends React.ComponentPropsWithoutRef<'div'> {}

export const CardFooter = (props: CardFooterProps) => {
  const { className, children, ...restProps } = props

  const style = `
    px-6
    first:pt-6
    last:pb-6
    text-base-sm
  `

  return (
    <div className={cx(style, className)} {...restProps}>
      {children}
    </div>
  )
}
