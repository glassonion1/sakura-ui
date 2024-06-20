import React from 'react'
import { cx } from '../libs/cx'

export interface HeadingProps extends React.ComponentPropsWithoutRef<'h1'> {}

export const H1 = (props: HeadingProps) => {
  const { className, children, ...restProps } = props

  const style = `
    text-h-lg-m
    sm:text-h-lg
    pt-[2rem]
    sm:pt-[6.5rem]
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
    pt-[4rem]
    sm:pt-[4.5rem]
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
    pt-[4rem]
    sm:pt-[4.5rem]
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
    pt-[3.5rem]
    sm:pt-[4.5rem]
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
    pt-[3rem]
    sm:pt-[4rem]
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
    pt-[2.5rem]
    sm:pt-[3.5rem]
  `

  return (
    <h6 className={cx(style, className)} {...restProps}>
      {children}
    </h6>
  )
}
