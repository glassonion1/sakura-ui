import React from 'react'
import { cx } from '../utils'

export interface TableProps extends React.ComponentProps<'table'> {}

const styleBorder = `
    border
    border-collapse
    border-sumi-900
`

export const Table = (props: TableProps) => {
  const { className, children, ...newprops } = props

  // If there is no break-all setting, the table will protrude when using a smartphone
  const style = `
    w-full
    table-auto
    break-all
  `

  return (
    <table className={cx(style, styleBorder, className)} {...newprops}>
      {children}
    </table>
  )
}

export interface CaptionProps extends React.ComponentProps<'caption'> {}

export const Caption = (props: CaptionProps) => {
  const { className, children, ...newprops } = props

  const style = `text-left`
  return (
    <caption className={cx(style, className)} {...newprops}>
      {children}
    </caption>
  )
}

export interface TheadProps extends React.ComponentProps<'thead'> {}

export const Thead = (props: TheadProps) => {
  const { className, children, ...newprops } = props

  return (
    <thead className={cx(className)} {...newprops}>
      {children}
    </thead>
  )
}

export interface TbodyProps extends React.ComponentProps<'tbody'> {}

export const Tbody = (props: TbodyProps) => {
  const { className, children, ...newprops } = props

  return (
    <tbody className={cx(className)} {...newprops}>
      {children}
    </tbody>
  )
}

export interface ThProps extends React.ComponentProps<'th'> {}

export const Th = (props: ThProps) => {
  const { className, children, ...newprops } = props

  const style = `
    p-2
    bg-sumi-100
    text-left
  `
  return (
    <th className={cx(style, styleBorder, className)} {...newprops}>
      {children}
    </th>
  )
}

export interface TrProps extends React.ComponentProps<'tr'> {}

export const Tr = (props: TrProps) => {
  const { className, children, ...newprops } = props

  const style = ``

  return (
    <tr className={cx(style, styleBorder, className)} {...newprops}>
      {children}
    </tr>
  )
}

export interface TdProps extends React.ComponentProps<'td'> {}

export const Td = (props: TdProps) => {
  const { className, children, ...newprops } = props

  const style = `
    p-2
  `

  return (
    <td className={cx(style, styleBorder, className)} {...newprops}>
      {children}
    </td>
  )
}
