import React from 'react'
import { cx } from '../utils'

export interface LinkProps extends React.ComponentProps<'a'> {}

const getFileType = (url: string) => {
  const converted = url.toLowerCase()

  if (converted.endsWith('.pdf')) {
    return 'PDF'
  }
  if (converted.endsWith('.doc') || converted.endsWith('.docx')) {
    return 'Word'
  }
  if (converted.endsWith('.xls') || converted.endsWith('.xlsx')) {
    return 'Excel'
  }
  if (converted.endsWith('.csv')) {
    return 'CSV'
  }
  if (converted.endsWith('.json')) {
    return 'JSON'
  }
  if (converted.endsWith('.ndjson')) {
    return 'NDJSON'
  }
  if (converted.includes('youtu.be')) {
    return 'YouTube'
  }
  return null
}

export const Link = (props: LinkProps) => {
  const { className, children, ...newProps } = props
  const href = props.href ?? ''
  const fileType = getFileType(href)

  const style = `
    rounded-sm
    cursor-pointer
    text-sea-600
    underline
    underline-offset-[0.1em]
    hover:text-sea-800
    active:text-sea-800
    visited:text-sea-900
    focus:outline
    focus:outline-2
    focus:outline-wood-500
    disabled:border-sumi-500
  `

  if (href.startsWith('http')) {
    return (
      <a
        className={cx(style, props.className)}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        {...newProps}
      >
        {props.children}
        {fileType ? `（${fileType}）` : null}
      </a>
    )
  }
  return (
    <a className={cx(style, props.className)} href={href} {...newProps}>
      {props.children}
      {fileType ? `（${fileType}）` : null}
    </a>
  )
}
