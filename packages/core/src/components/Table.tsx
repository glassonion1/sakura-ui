import React from 'react'
import { cx } from '../utils/class'

export interface TableProps extends React.ComponentPropsWithoutRef<'table'> {}

const styleBorder = `
  border
  border-collapse
  border-sumi-900
`

export const Table: React.ElementType<TableProps> = (props: TableProps) => {
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

export const Caption: React.ElementType<CaptionProps> = (
  props: CaptionProps
) => {
  const { className, children, ...restProps } = props

  const style = `text-left`
  return (
    <caption className={cx(style, className)} {...restProps}>
      {children}
    </caption>
  )
}

export interface TheadProps extends React.ComponentPropsWithoutRef<'thead'> {}

export const Thead: React.ElementType<TheadProps> = (props: TheadProps) => {
  const { className, children, ...restProps } = props

  return (
    <thead className={cx(className)} {...restProps}>
      {children}
    </thead>
  )
}

export interface TbodyProps extends React.ComponentPropsWithoutRef<'tbody'> {}

export const Tbody: React.ElementType<TbodyProps> = (props: TbodyProps) => {
  const { className, children, ...restProps } = props

  return (
    <tbody className={cx(className)} {...restProps}>
      {children}
    </tbody>
  )
}

export interface ThProps extends React.ComponentPropsWithoutRef<'th'> {}

export const Th: React.ElementType<ThProps> = (props: ThProps) => {
  const { className, children, ...restProps } = props

  const style = `
    p-2
    bg-sumi-100
    text-left
  `
  return (
    <th className={cx(style, styleBorder, className)} {...restProps}>
      {children}
    </th>
  )
}

export interface TrProps extends React.ComponentPropsWithoutRef<'tr'> {}

export const Tr: React.ElementType<TrProps> = (props: TrProps) => {
  const { className, children, ...restProps } = props

  const style = ``

  return (
    <tr className={cx(style, styleBorder, className)} {...restProps}>
      {children}
    </tr>
  )
}

export interface TdProps extends React.ComponentPropsWithoutRef<'td'> {}

export const Td: React.ElementType<TdProps> = (props: TdProps) => {
  const { className, children, ...restProps } = props

  const style = `
    p-2
  `

  return (
    <td className={cx(style, styleBorder, className)} {...restProps}>
      {children}
    </td>
  )
}
