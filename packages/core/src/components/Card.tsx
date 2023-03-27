import React from 'react'
import { cx } from '../utils'

export interface CardProps extends React.ComponentProps<'div'> {}

export const Card = (props: CardProps) => {
  const { className, children, ...restProps } = props

  const style = `
    bg-sumi-50
    border
    border-solid
    border-sumi-900
    rounded-[12px]
    p-4
  `
  return (
    <div className={cx(style, props.className)} {...restProps}>
      {props.children}
    </div>
  )
}
