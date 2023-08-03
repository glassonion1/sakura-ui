import React from 'react'
import { cx } from '../utils/class'

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

export interface LinkProps extends React.ComponentPropsWithRef<'a'> {}

export const Link: React.ElementType<LinkProps> = React.forwardRef<
  HTMLAnchorElement,
  LinkProps
>((props, ref) => {
  const { className, children, ...restProps } = props
  const href = props.href ?? ''
  const fileType = getFileType(href)

  const style = `
      rounded-sm
      cursor-pointer
      text-sea-600
      underline
      underline-offset-[0.125em]
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
        className={cx(style, className)}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        {...restProps}
        ref={ref}
      >
        {children}
        {fileType ? `（${fileType}）` : null}
      </a>
    )
  }
  return (
    <a className={cx(style, className)} href={href} {...restProps} ref={ref}>
      {children}
      {fileType ? `（${fileType}）` : null}
    </a>
  )
})

Link.displayName = 'Link'
