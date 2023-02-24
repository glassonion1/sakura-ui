import clsx from 'clsx'
import React from 'react'

export type CodeProps = React.ComponentProps<'code'>

export const Code = (props: CodeProps) => {
  const { className, children, ...newProps } = props

  const style = `
    bg-sumi-50
    font-mono
  `

  return (
    <code className={clsx(style, className)} {...newProps}>
      {children}
    </code>
  )
}
