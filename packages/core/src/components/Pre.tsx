import React from 'react'
import { cx } from '@sakura-ui/helper'

export namespace Pre {
  export interface Props extends React.ComponentPropsWithoutRef<'pre'> {}
}

export const Pre = (props: Pre.Props) => {
  const { className, children, ...restProps } = props

  const style = `
    p-4
    bg-solid-gray-50
    rounded-lg
    whitespace-pre-wrap
    overflow-y-scroll
  `

  return (
    <pre className={cx(style, className)} {...restProps}>
      {children}
    </pre>
  )
}
