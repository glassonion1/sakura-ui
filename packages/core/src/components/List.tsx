import React from 'react'
import { cx } from '../utils/class'

export interface UlProps extends React.ComponentPropsWithoutRef<'ul'> {}

export const Ul: React.ElementType<UlProps> = (props: UlProps) => {
  const { className, children, ...restProps } = props

  const style = `
    list-disc
    list-inside
    -indent-4
    pl-4
    marker:text-xs
  `
  return (
    <ul className={cx(style, className)} {...restProps}>
      {children}
    </ul>
  )
}

export interface OlProps extends React.ComponentPropsWithoutRef<'ol'> {}

export const Ol: React.ElementType<OlProps> = (props: OlProps) => {
  const { className, children, ...restProps } = props

  const style = `
    list-decimal
    list-inside
    -indent-4
    pl-4
  `
  return (
    <ol className={cx(style, className)} {...restProps}>
      {children}
    </ol>
  )
}
