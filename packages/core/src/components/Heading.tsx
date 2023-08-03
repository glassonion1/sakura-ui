import React from 'react'
import { cx } from '../utils/class'

export interface HeadingProps extends React.ComponentPropsWithoutRef<'h1'> {}

export const H1: React.ElementType<HeadingProps> = (props: HeadingProps) => {
  const { className, children, ...restProps } = props

  const style = `
    text-4xlm
    sm:text-4xl
    mt-16
    mb-6
  `

  return (
    <h1 className={cx(style, className)} {...restProps}>
      {children}
    </h1>
  )
}

export const H2: React.ElementType<HeadingProps> = (props: HeadingProps) => {
  const { className, children, ...restProps } = props

  const style = `
    text-3xlm
    sm:text-3xl
    mt-16
    mb-6
  `

  return (
    <h2 className={cx(style, className)} {...restProps}>
      {children}
    </h2>
  )
}

export const H3: React.ElementType<HeadingProps> = (props: HeadingProps) => {
  const { className, children, ...restProps } = props

  const style = `
    text-2xlm
    sm:text-2xl
    mt-10
    mb-6
  `

  return (
    <h3 className={cx(style, className)} {...restProps}>
      {children}
    </h3>
  )
}

export const H4: React.ElementType<HeadingProps> = (props: HeadingProps) => {
  const { className, children, ...restProps } = props

  const style = `
    text-xlm
    sm:text-xl
    mt-10
    mb-4
  `

  return (
    <h4 className={cx(style, className)} {...restProps}>
      {children}
    </h4>
  )
}

export const H5: React.ElementType<HeadingProps> = (props: HeadingProps) => {
  const { className, children, ...restProps } = props

  const style = `
    text-lgm
    sm:text-lg
    mt-10
    mb-4
  `

  return (
    <h5 className={cx(style, className)} {...restProps}>
      {children}
    </h5>
  )
}

export const H6: React.ElementType<HeadingProps> = (props: HeadingProps) => {
  const { className, children, ...restProps } = props

  const style = `
    text-lgm
    sm:text-lg
    mt-6
    mb-4
  `

  return (
    <h6 className={cx(style, className)} {...restProps}>
      {children}
    </h6>
  )
}
