import React from 'react'
import { cx } from '@sakura-ui/helper'

export interface CodeProps extends React.ComponentPropsWithoutRef<'code'> {}

export const Code = (props: CodeProps) => {
  const { className, children, ...restProps } = props

  const style = `
    bg-sumi-50
    font-mono
  `

  return (
    <code className={cx(style, className)} {...restProps}>
      {children}
    </code>
  )
}
