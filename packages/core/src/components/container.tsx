import React from 'react'
import { cx } from '../libs/cx'

export interface OverflowContainerProps
  extends React.ComponentPropsWithoutRef<'div'> {}

export const OverflowContainer = (props: OverflowContainerProps) => {
  const { className, children, ...restProps } = props

  const style = `
    w-full
    overflow-x-auto
    whitespace-nowrap
  `

  return (
    <div className={cx(style, className)} {...restProps}>
      {children}
    </div>
  )
}
