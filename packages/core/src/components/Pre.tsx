import React from 'react'
import { cx } from '@sakura-ui/helper'

export interface PreProps extends React.ComponentPropsWithoutRef<'pre'> {}

export const Pre = (props: PreProps) => {
  const { className, children, ...restProps } = props

  const style = `
    p-4
    bg-sumi-50
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
