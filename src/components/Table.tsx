import React from 'react'
import clsx from 'clsx'

export type TableProps = React.ComponentProps<'table'>

const styleBorder = `
    border
    border-collapse
    border-sumi-900
`

export const Table = (props: TableProps) => {
  const { className, children, ...newprops } = props

  // break-allの設定がないとスマホのときにテーブルがはみ出す
  const style = `
    w-full
    table-auto
    break-all
  `

  return (
    <table className={clsx(style, styleBorder, className)} {...newprops}>
      {children}
    </table>
  )
}

export type CaptionProps = React.ComponentProps<'caption'>

export const Caption = (props: CaptionProps) => {
  const { className, children, ...newprops } = props

  const style = `text-left`
  return (
    <caption className={clsx(style, className)} {...newprops}>
      {children}
    </caption>
  )
}

export type TheadProps = React.ComponentProps<'thead'>

export const Thead = (props: TheadProps) => {
  const { className, children, ...newprops } = props

  return (
    <thead className={clsx(className)} {...newprops}>
      {children}
    </thead>
  )
}

export type TbodyProps = React.ComponentProps<'tbody'>

export const Tbody = (props: TbodyProps) => {
  const { className, children, ...newprops } = props

  return (
    <tbody className={clsx(className)} {...newprops}>
      {children}
    </tbody>
  )
}

export type ThProps = React.ComponentProps<'th'>

export const Th = (props: ThProps) => {
  const { className, children, ...newprops } = props

  const style = `
    p-2
    bg-sumi-100
    text-left
  `
  return (
    <th className={clsx(style, styleBorder, className)} {...newprops}>
      {children}
    </th>
  )
}

export type TrProps = React.ComponentProps<'tr'>

export const Tr = (props: TrProps) => {
  const { className, children, ...newprops } = props

  const style = ``

  return (
    <tr className={clsx(style, styleBorder, className)} {...newprops}>
      {children}
    </tr>
  )
}

export type TdProps = React.ComponentProps<'td'>

export const Td = (props: TdProps) => {
  const { className, children, ...newprops } = props

  const style = `
    p-2
  `

  return (
    <td className={clsx(style, styleBorder, className)} {...newprops}>
      {children}
    </td>
  )
}
