import React from 'react'
import { cx } from '@sakura-ui/helper'

export const preStyle = `
  p-4
  bg-solid-gray-50
  rounded-lg
  whitespace-pre-wrap
  overflow-y-scroll
`

export namespace Pre {
  export interface Props extends React.ComponentPropsWithoutRef<'pre'> {}
}

export const Pre = (props: Pre.Props) => {
  const { className, children, ...restProps } = props

  return (
    <pre className={cx(preStyle, className)} {...restProps}>
      {children}
    </pre>
  )
}
