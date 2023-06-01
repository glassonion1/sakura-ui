import React from 'react'
import { cx } from '../utils/class'

export interface HeadingProps extends React.ComponentProps<'h1'> {}

export const H1 = (props: HeadingProps) => {
  const { className, children, ...restProps } = props

  const style = `
    text-lm
    sm:text-l
    mt-16
    mb-6
  `

  return (
    <h1 className={cx(style, className)} {...restProps}>
      {children}
    </h1>
  )
}

export const H2 = (props: HeadingProps) => {
  // コンポーネントを使う側でclassNameを指定しても問題ないようにする
  const { className, children, ...restProps } = props

  const style = `
    text-mm
    sm:text-m
    mt-16
    mb-6
  `

  return (
    <h2 className={cx(style, className)} {...restProps}>
      {children}
    </h2>
  )
}

export const H3 = (props: HeadingProps) => {
  // コンポーネントを使う側でclassNameを指定しても問題ないようにする
  const { className, children, ...restProps } = props

  const style = `
    text-sm
    sm:text-s
    mt-10
    mb-6
  `

  return (
    <h3 className={cx(style, className)} {...restProps}>
      {children}
    </h3>
  )
}

export const H4 = (props: HeadingProps) => {
  // コンポーネントを使う側でclassNameを指定しても問題ないようにする
  const { className, children, ...restProps } = props

  const style = `
    text-xsm
    sm:text-xs
    mt-10
    mb-4
  `

  return (
    <h4 className={cx(style, className)} {...restProps}>
      {children}
    </h4>
  )
}

export const H5 = (props: HeadingProps) => {
  // コンポーネントを使う側でclassNameを指定しても問題ないようにする
  const { className, children, ...restProps } = props

  const style = `
    text-xxsm
    sm:text-xxs
    mt-10
    mb-4
  `

  return (
    <h5 className={cx(style, className)} {...restProps}>
      {children}
    </h5>
  )
}

export const H6 = (props: HeadingProps) => {
  // コンポーネントを使う側でclassNameを指定しても問題ないようにする
  const { className, children, ...restProps } = props

  const style = `
    text-xxsm
    sm:text-xxs
    mt-6
    mb-4
  `

  return (
    <h6 className={cx(style, className)} {...restProps}>
      {children}
    </h6>
  )
}
