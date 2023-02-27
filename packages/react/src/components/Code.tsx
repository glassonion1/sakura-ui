import React from 'react'
import { cx } from '../utils'

export type CodeProps = React.ComponentProps<'code'>

export const Code = (props: CodeProps) => {
  const { className, children, ...newProps } = props

  const style = `
    bg-sumi-50
    font-mono
  `

  return (
    <code className={cx(style, className)} {...newProps}>
      {children}
    </code>
  )
}
