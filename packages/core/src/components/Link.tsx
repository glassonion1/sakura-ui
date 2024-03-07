import { useState, useEffect } from 'react'
import { cx } from '../libs/cx'
import { ComponentWithAs } from '../types/component'
import { forwardRef } from '../libs/forward-ref'

export interface LinkProps {}

export const Link: ComponentWithAs<'a', LinkProps> = forwardRef(
  (props, ref) => {
    const {
      as: Component = 'a',
      href,
      className,
      children,
      ...restProps
    } = props

    const styleUnderLine = `
      underline
      underline-offset-[0.125em]
    `

    // Make lines break at each word
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
      [overflow-wrap:anywhere]
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

    const [iconLabel, setIconLabel] = useState('')
    useEffect(() => {
      const language =
        (window.navigator.languages && window.navigator.languages[0]) ||
        window.navigator.language
      if (/^ja\b/.test(language)) {
        setIconLabel('新規タブで開きます')
        return
      }
      setIconLabel('Opens in new tab')
    }, [])

    if (href?.startsWith('http')) {
      return (
        <Component
          className={cx(style, className)}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          {...restProps}
          ref={ref}
        >
          <span className={styleUnderLine}>{children}</span>
          <span className={cx(styleIcon)} aria-hidden="true">
            open_in_new
          </span>
          <span className="sr-only">{iconLabel}</span>
        </Component>
      )
    }
    return (
      <Component
        className={cx(style, styleUnderLine, className)}
        href={href}
        {...restProps}
        ref={ref}
      >
        {children}
      </Component>
    )
  }
)

Link.displayName = 'Link'
