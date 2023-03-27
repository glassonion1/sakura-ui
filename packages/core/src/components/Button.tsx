import React from 'react'
import { cx } from '../utils'

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
  `

    const primary = `
    text-white-1000
    border
    border-solid
    border-sea-600
    bg-sea-600
    hover:bg-sea-800
    active:bg-sea-800
    focus:outline
    focus:outline-2
    focus:outline-wood-500
    disabled:bg-sumi-500
    disabled:text-white-1000
    disabled:border
    disabled:border-solid
    disabled:border-sumi-500
    disabled:cursor-not-allowed
  `
    const secondary = `
    text-sea-600
    border
    border-solid
    border-sea-600
    hover:bg-sea-100
    active:bg-sea-100
    focus:outline
    focus:outline-2
    focus:outline-wood-500
    disabled:hover:bg-white-1000
    disabled:text-sumi-500
    disabled:border
    disabled:border-solid
    disabled:border-sumi-500
    disabled:cursor-not-allowed
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
