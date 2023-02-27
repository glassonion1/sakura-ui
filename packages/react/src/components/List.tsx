import React from 'react'
import { cx } from '../utils'

export type UlProps = React.ComponentProps<'ul'>

export const Ul = (props: UlProps) => {
  const { className, children, ...newprops } = props

  const style = `
    list-disc
    list-inside
    -indent-4
    pl-4
  `
  return (
    <ul className={cx(style, className)} {...newprops}>
      {children}
    </ul>
  )
}

export type OlProps = React.ComponentProps<'ol'>

export const Ol = (props: OlProps) => {
  const { className, children, ...newprops } = props

  const style = `
    list-decimal
    list-inside
    -indent-4
    pl-4
  `
  return (
    <ol className={cx(style, className)} {...newprops}>
      {children}
    </ol>
  )
}
