import React from 'react'
import { cx } from '@sakura-ui/helper'

/**
 * The nested markers rely on the class being present on the nested list too:
 * `[&_&]` compiles to a descendant selector of the class with itself. Anything
 * rendering lists without React has to emit the same class for that to hold.
 */
export const ulStyle = `
  list-disc
  [&_&]:list-circle
  [&_&_&]:list-square
  pl-8
`

export const olStyle = `
  list-decimal
  [&_&]:list-lower-latin
  pl-8
`

export namespace Ul {
  export interface Props extends React.ComponentPropsWithoutRef<'ul'> {}
}

export const Ul = (props: Ul.Props) => {
  const { className, children, ...restProps } = props

  return (
    <ul className={cx(ulStyle, className)} {...restProps}>
      {children}
    </ul>
  )
}

export namespace Ol {
  export interface Props extends React.ComponentPropsWithoutRef<'ol'> {}
}

export const Ol = (props: Ol.Props) => {
  const { className, children, ...restProps } = props

  return (
    <ol className={cx(olStyle, className)} {...restProps}>
      {children}
    </ol>
  )
}
