import React from 'react'
import { cx } from '../utils/class'

export interface LinkProps extends React.ComponentPropsWithRef<'a'> {}

export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  (props, ref) => {
    const { className, children, ...restProps } = props
    const href = props.href ?? ''

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

    const iconStyle = `
      inline-block
      align-middle
      ml-0.5
      text-sumi-700
      font-icon
      font-light
      leading-4
      antialiased
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
          <span className={cx(iconStyle)} aria-hidden="true">
            open_in_new
          </span>
        </a>
      )
    }
    return (
      <a className={cx(style, className)} href={href} {...restProps} ref={ref}>
        {children}
      </a>
    )
  }
)

Link.displayName = 'Link'
