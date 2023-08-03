import React from 'react'
import { cx } from '../utils/class'

export interface CardProps extends React.ComponentPropsWithoutRef<'section'> {}

export const Card: React.ElementType<CardProps> = (props: CardProps) => {
  const { className, children, ...restProps } = props

  const style = `
    bg-sumi-50
    border
    border-solid
    border-sumi-300
    rounded-[12px]
    p-4
    text-sumi-900
  `
  return (
    <section className={cx(style, props.className)} {...restProps}>
      {props.children}
    </section>
  )
}
