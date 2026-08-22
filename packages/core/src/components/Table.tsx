import React from 'react'
import { cx } from '@sakura-ui/helper'

/**
 * Table classes are exported separately, in the order the components combine
 * them, so that anything rendering a table without React produces the same
 * class attribute.
 */
export const tableBorderStyle = `
  border
  border-collapse
  border-solid-gray-420
`

export const captionStyle = 'text-left'

export const thStyle = `
  p-2
  bg-[#f8f8fb]
  text-label
  text-left
`

export const tdStyle = `
  p-2
  text-label
`

export namespace Table {
  export interface Props extends React.ComponentPropsWithoutRef<'table'> {}
}

export const Table = (props: Table.Props) => {
  const { className, children, ...restProps } = props

  return (
    <table className={cx(tableBorderStyle, className)} {...restProps}>
      {children}
    </table>
  )
}

export namespace Caption {
  export interface Props extends React.ComponentPropsWithoutRef<'caption'> {}
}

export const Caption = (props: Caption.Props) => {
  const { className, children, ...restProps } = props

  return (
    <caption className={cx(captionStyle, className)} {...restProps}>
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

  return (
    <th className={cx(thStyle, tableBorderStyle, className)} {...restProps}>
      {children}
    </th>
  )
}

export namespace Tr {
  export interface Props extends React.ComponentPropsWithoutRef<'tr'> {}
}

export const Tr = (props: Tr.Props) => {
  const { className, children, ...restProps } = props

  return (
    <tr className={cx(tableBorderStyle, className)} {...restProps}>
      {children}
    </tr>
  )
}

export namespace Td {
  export interface Props extends React.ComponentPropsWithoutRef<'td'> {}
}

export const Td = (props: Td.Props) => {
  const { className, children, ...restProps } = props

  return (
    <td className={cx(tdStyle, tableBorderStyle, className)} {...restProps}>
      {children}
    </td>
  )
}
