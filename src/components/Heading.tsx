import clsx from 'clsx'
import React from 'react'

export type HeadingProps = React.ComponentProps<'h1'>

// 共通スタイル
const common = `
    font-bold
`

export const H1 = (props: HeadingProps) => {
  // コンポーネントを使う側でclassNameを指定しても問題ないようにする
  const { className, children, ...newProps } = props

  const style = `
    text-h1
    mt-16
    mb-6
  `

  return (
    <h1 className={clsx(common, style, props.className)} {...newProps}>
      {props.children}
    </h1>
  )
}

export const H2 = (props: HeadingProps) => {
  // コンポーネントを使う側でclassNameを指定しても問題ないようにする
  const { className, children, ...newProps } = props

  const style = `
    text-h2
    mt-16
    mb-6
  `

  return (
    <h2 className={clsx(common, style, props.className)} {...newProps}>
      {props.children}
    </h2>
  )
}

export const H3 = (props: HeadingProps) => {
  // コンポーネントを使う側でclassNameを指定しても問題ないようにする
  const { className, children, ...newProps } = props

  const style = `
    text-h3
    mt-10
    mb-6
  `

  return (
    <h3 className={clsx(common, style, props.className)} {...newProps}>
      {props.children}
    </h3>
  )
}

export const H4 = (props: HeadingProps) => {
  // コンポーネントを使う側でclassNameを指定しても問題ないようにする
  const { className, children, ...newProps } = props

  const style = `
    text-h4
    mt-10
    mb-4
  `

  return (
    <h4 className={clsx(common, style, props.className)} {...newProps}>
      {props.children}
    </h4>
  )
}

export const H5 = (props: HeadingProps) => {
  // コンポーネントを使う側でclassNameを指定しても問題ないようにする
  const { className, children, ...newProps } = props

  const style = `
    text-h5
    mt-10
    mb-4
  `

  return (
    <h5 className={clsx(common, style, props.className)} {...newProps}>
      {props.children}
    </h5>
  )
}

export const H6 = (props: HeadingProps) => {
  // コンポーネントを使う側でclassNameを指定しても問題ないようにする
  const { className, children, ...newProps } = props

  const style = `
    text-h6
    mt-6
    mb-4
  `

  return (
    <h6 className={clsx(common, style, props.className)} {...newProps}>
      {props.children}
    </h6>
  )
}
