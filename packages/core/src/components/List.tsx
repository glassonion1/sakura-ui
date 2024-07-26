import React from 'react'
import { cx } from '@sakura-ui/helper'

export interface UlProps extends React.ComponentPropsWithoutRef<'ul'> {}

export const Ul = (props: UlProps) => {
  const { className, children, ...restProps } = props

  const style = `
    list-disc
    [&_&]:list-circle
    [&_&_&]:list-square
    pl-8
  `
  return (
    <ul className={cx(style, className)} {...restProps}>
      {children}
    </ul>
  )
}

export interface OlProps extends React.ComponentPropsWithoutRef<'ol'> {}

export const Ol = (props: OlProps) => {
  const { className, children, ...restProps } = props

  const style = `
    list-decimal
    [&_&]:list-lower-latin
    pl-8
  `
  return (
    <ol className={cx(style, className)} {...restProps}>
      {children}
    </ol>
  )
}
