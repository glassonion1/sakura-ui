import React from 'react'
import { cx } from '../utils/class'

export interface CodeProps extends React.ComponentPropsWithoutRef<'code'> {}

export const Code: React.ElementType<CodeProps> = (props: CodeProps) => {
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
