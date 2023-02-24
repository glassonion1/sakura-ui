import clsx from 'clsx'
import React from 'react'

export type Props = React.ComponentProps<'div'>

export const Card = (props: Props) => {
  const { className, children, ...newProps } = props
  const style = `
    bg-sumi-50
    border
    border-solid
    border-sumi-900
    rounded-[12px]
    p-4
  `
  return (
    <div className={clsx(style, props.className)} {...newProps}>
      {props.children}
    </div>
  )
}
