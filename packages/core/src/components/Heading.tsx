import React from 'react'
import { cx } from '../libs/cx'

export interface HeadingProps extends React.ComponentPropsWithoutRef<'h1'> {}

export const H1 = (props: HeadingProps) => {
  const { className, children, ...restProps } = props

  const style = `
    text-h-lg-m
    sm:text-h-lg
    mt-8
    mb-3
    sm:mt-16
    sm:mb-6
  `

  return (
    <h1 className={cx(style, className)} {...restProps}>
      {children}
    </h1>
  )
}

export const H2 = (props: HeadingProps) => {
  const { className, children, ...restProps } = props

  const style = `
    text-h-med-m
    sm:text-h-med
    mt-8
    mb-3
    sm:mt-16
    sm:mb-6
  `

  return (
    <h2 className={cx(style, className)} {...restProps}>
      {children}
    </h2>
  )
}

export const H3 = (props: HeadingProps) => {
  const { className, children, ...restProps } = props

  const style = `
    text-h-sm-m
    sm:text-h-sm
    mt-5
    mb-3
    sm:mt-10
    sm:mb-6
  `

  return (
    <h3 className={cx(style, className)} {...restProps}>
      {children}
    </h3>
  )
}

export const H4 = (props: HeadingProps) => {
  const { className, children, ...restProps } = props

  const style = `
    text-h-xs-m
    sm:text-h-xs
    mt-5
    mb-2
    sm:mt-10
    sm:mb-4
  `

  return (
    <h4 className={cx(style, className)} {...restProps}>
      {children}
    </h4>
  )
}

export const H5 = (props: HeadingProps) => {
  const { className, children, ...restProps } = props

  const style = `
    text-h-xxs-m
    sm:text-h-xxs
    mt-5
    mb-2
    sm:mt-10
    sm:mb-4
  `

  return (
    <h5 className={cx(style, className)} {...restProps}>
      {children}
    </h5>
  )
}

export const H6 = (props: HeadingProps) => {
  const { className, children, ...restProps } = props

  const style = `
    text-h-xxs-m
    sm:text-h-xxs
    mt-3
    mb-2
    sm:mt-6
    sm:mb-4
  `

  return (
    <h6 className={cx(style, className)} {...restProps}>
      {children}
    </h6>
  )
}
