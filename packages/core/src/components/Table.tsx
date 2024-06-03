import React from 'react'
import { cx } from '../libs/cx'

export interface TableProps extends React.ComponentPropsWithoutRef<'table'> {}

const styleBorder = `
  border
  border-collapse
  border-[#cccccc]
`

export const Table = (props: TableProps) => {
  const { className, children, ...restProps } = props

  // If there is no break-all setting, the table will protrude when using a smartphone
  const style = `
    w-full
    table-auto
    break-all
  `

  return (
    <table className={cx(style, styleBorder, className)} {...restProps}>
      {children}
    </table>
  )
}

export interface CaptionProps
  extends React.ComponentPropsWithoutRef<'caption'> {}

export const Caption = (props: CaptionProps) => {
  const { className, children, ...restProps } = props

  const style = `text-left`
  return (
    <caption className={cx(style, className)} {...restProps}>
      {children}
    </caption>
  )
}

export interface TheadProps extends React.ComponentPropsWithoutRef<'thead'> {}

export const Thead = (props: TheadProps) => {
  const { className, children, ...restProps } = props

  return (
    <thead className={cx(className)} {...restProps}>
      {children}
    </thead>
  )
}

export interface TbodyProps extends React.ComponentPropsWithoutRef<'tbody'> {}

export const Tbody = (props: TbodyProps) => {
  const { className, children, ...restProps } = props

  return (
    <tbody className={cx(className)} {...restProps}>
      {children}
    </tbody>
  )
}

export interface ThProps extends React.ComponentPropsWithoutRef<'th'> {}

export const Th = (props: ThProps) => {
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

export interface TrProps extends React.ComponentPropsWithoutRef<'tr'> {}

export const Tr = (props: TrProps) => {
  const { className, children, ...restProps } = props

  const style = ``

  return (
    <tr className={cx(style, styleBorder, className)} {...restProps}>
      {children}
    </tr>
  )
}

export interface TdProps extends React.ComponentPropsWithoutRef<'td'> {}

export const Td = (props: TdProps) => {
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
