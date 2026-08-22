import React from 'react'
import { cx } from '@sakura-ui/helper'

export const overflowContainerStyle = `
  w-full
  overflow-x-auto
  whitespace-nowrap
  print:overflow-visible
  print:whitespace-normal
`

export namespace OverflowContainer {
  export interface Props extends React.ComponentPropsWithoutRef<'div'> {}
}

export const OverflowContainer = (props: OverflowContainer.Props) => {
  const { className, children, ...restProps } = props

  return (
    <div className={cx(overflowContainerStyle, className)} {...restProps}>
      {children}
    </div>
  )
}
