import React from 'react'
import { cx } from '../utils'

export interface IconButtonProps extends React.ComponentProps<'button'> {
  variant?: 'primary' | 'secondary'
  icon: string
}

export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  (props, ref) => {
    const { className, children, icon, variant, ...newProps } = props

    const align = 'center'

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

    const fontStyle = `
    inline-block
    font-icon
    text-2xl
    font-light
    leading-none
    antialiased
    `

    return (
      <button
        className={cx(style, styles[variant ?? 'primary'], className)}
        {...newProps}
        ref={ref}
      >
        <div className="flex items-center">
          <span className={cx(fontStyle)}>{icon}</span>
          <span className="ml-1">{children}</span>
        </div>
      </button>
    )
  }
)
