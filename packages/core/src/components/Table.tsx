import React from 'react'
import { cx } from '@sakura-ui/helper'

export namespace Table {
  export interface Props extends React.ComponentPropsWithoutRef<'table'> {}
}

const styleBorder = `
  border
  border-collapse
  border-solid-grey-420
`

export const Table = (props: Table.Props) => {
  const { className, children, ...restProps } = props

  return (
    <table className={cx(styleBorder, className)} {...restProps}>
      {children}
    </table>
  )
}

export namespace Caption {
  export interface Props extends React.ComponentPropsWithoutRef<'caption'> {}
}

export const Caption = (props: Caption.Props) => {
  const { className, children, ...restProps } = props

  const style = 'text-left'
  return (
    <caption className={cx(style, className)} {...restProps}>
      {children}
    </caption>
  )
}

export namespace Thead {
  export interface Props extends React.ComponentPropsWithoutRef<'thead'> {}
}

export const Thead = (props: Thead.Props) => {
  const { className, children, ...restProps } = props

  return (
    <thead className={cx(className)} {...restProps}>
      {children}
    </thead>
  )
}

export namespace Tbody {
  export interface Props extends React.ComponentPropsWithoutRef<'tbody'> {}
}

export const Tbody = (props: Tbody.Props) => {
  const { className, children, ...restProps } = props

  return (
    <tbody className={cx(className)} {...restProps}>
      {children}
    </tbody>
  )
}

export namespace Th {
  export interface Props extends React.ComponentPropsWithoutRef<'th'> {}
}

export const Th = (props: Th.Props) => {
  const { className, children, ...restProps } = props

  const style = `
    p-2
    bg-[#f8f8fb]
    text-label
    text-left
  `
  return (
    <th className={cx(style, styleBorder, className)} {...restProps}>
      {children}
    </th>
  )
}

export namespace Tr {
  export interface Props extends React.ComponentPropsWithoutRef<'tr'> {}
}

export const Tr = (props: Tr.Props) => {
  const { className, children, ...restProps } = props

  const style = ''

  return (
    <tr className={cx(style, styleBorder, className)} {...restProps}>
      {children}
    </tr>
  )
}

export namespace Td {
  export interface Props extends React.ComponentPropsWithoutRef<'td'> {}
}

export const Td = (props: Td.Props) => {
  const { className, children, ...restProps } = props

  const style = `
    p-2
    text-label
  `

  return (
    <td className={cx(style, styleBorder, className)} {...restProps}>
      {children}
    </td>
  )
}
