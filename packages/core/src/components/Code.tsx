import React from 'react'
import { cx } from '@sakura-ui/helper'

export const codeStyle = `
  bg-solid-gray-50
  font-mono
`

export namespace Code {
  export interface Props extends React.ComponentPropsWithoutRef<'code'> {}
}

export const Code = (props: Code.Props) => {
  const { className, children, ...restProps } = props

  return (
    <code className={cx(codeStyle, className)} {...restProps}>
      {children}
    </code>
  )
}
