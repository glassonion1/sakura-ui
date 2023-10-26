import React from 'react'
import { cx } from '../utils/class'

export interface LinkProps extends React.ComponentPropsWithRef<'a'> {}

export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  (props, ref) => {
    const { className, children, ...restProps } = props
    const href = props.href ?? ''

    const styleUnderLine = `
      underline
      underline-offset-[0.125em]
    `

    const style = `
      rounded-sm
      cursor-pointer
      text-sea-600
      hover:text-sea-800
      active:text-sea-800
      visited:text-sea-900
      focus:outline
      focus:outline-2
      focus:outline-wood-500
      disabled:border-sumi-500
    `

    const styleIcon = `
      align-middle
      ml-0.5
      text-sumi-700
      font-icon
      font-light
      leading-4
      antialiased
    `

    const getLabel = () => {
      const language =
        (window.navigator.languages && window.navigator.languages[0]) ||
        window.navigator.language
      if (language === 'ja') {
        return '新規タブで開きます'
      }
      return 'Opens in new tab'
    }

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
          <span className={styleUnderLine}>{children}</span>
          <span className={cx(styleIcon)} aria-label={getLabel()}>
            open_in_new
          </span>
        </a>
      )
    }
    return (
      <a
        className={cx(style, styleUnderLine, className)}
        href={href}
        {...restProps}
        ref={ref}
      >
        {children}
      </a>
    )
  }
)

Link.displayName = 'Link'
