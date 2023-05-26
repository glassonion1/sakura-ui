import React from 'react'
import { cx } from '../utils/class'

export interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  variant?: 'primary' | 'secondary'
  textAlign?: 'left' | 'right' | 'center'
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    // Make sure that there is no problem even if className is specified on the side that uses the component
    const { className, children, textAlign, variant, ...restProps } = props

    const align = textAlign ?? 'center'

    const style = `
      inline-block
      p-4
      text-base
      font-bold
      rounded-lg
      text-${align}
      cursor-pointer
      whitespace-nowrap
      border
      border-solid
      border-sea-600
      focus:outline
      focus:outline-2
      focus:outline-wood-500
      disabled:border-sumi-500
      disabled:cursor-not-allowed
    `

    const primary = `
      text-white-1000
      bg-sea-600
      hover:enabled:bg-sea-700
      active:enabled:bg-sea-800
      disabled:bg-sumi-500
      disabled:text-white-1000
    `
    const secondary = `
      text-sea-600
      bg-transparent
      hover:enabled:bg-sea-100
      active:enabled:bg-sea-200
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
