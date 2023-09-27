import React from 'react'
import { cx } from '../utils/class'

export interface ButtonProps extends React.ComponentPropsWithRef<'button'> {
  variant?: 'primary' | 'secondary'
  textAlign?: 'left' | 'right' | 'center'
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    // Make sure that there is no problem even if className is specified on the side that uses the component
    const { className, children, textAlign, variant, ...restProps } = props

    const align = textAlign ?? 'center'

    const style = `
    select-none
    inline-block
    p-4
    text-button
    text-${align}
    rounded-lg
    cursor-pointer
    whitespace-nowrap
    border
    border-solid
    border-sea-800
    active:enabled:border-sea-800/[.8]
    hover:enabled:border-sea-800/[.85]
    focus:outline
    focus:outline-2
    focus:outline-wood-600
    disabled:border-sumi-500
    disabled:cursor-not-allowed
  `

    const primary = `
    text-white-1000
    bg-sea-800
    active:enabled:bg-sea-800/[.8]
    hover:enabled:bg-sea-800/[.85]
    disabled:bg-sumi-500
    disabled:text-white-1000
  `
    const secondary = `
    text-sea-800
    bg-transparent
    active:enabled:bg-sea-50/[.60]
    hover:enabled:bg-sea-50
    active:enabled:text-sea-800/[.85]
    hover:enabled:text-sea-800/[.85]
    disabled:text-sumi-500
  `

    const styles = {
      primary: primary,
      secondary: secondary
    }

    return (
      <button
        className={cx(style, styles[variant ?? 'primary'], className)}
        {...restProps}
        ref={ref}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'
