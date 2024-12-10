import React from 'react'
import { cx } from '@sakura-ui/helper'

export namespace OverflowContainer {
  export interface Props extends React.ComponentPropsWithoutRef<'div'> {}
}

export const OverflowContainer = (props: OverflowContainer.Props) => {
  const { className, children, ...restProps } = props

  const style = `
    w-full
    overflow-x-auto
    whitespace-nowrap
    print:overflow-visible
    print:whitespace-normal
  `

  return (
    <div className={cx(style, className)} {...restProps}>
      {children}
    </div>
  )
}
