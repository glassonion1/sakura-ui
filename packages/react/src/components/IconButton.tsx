import React from 'react'
import { cx } from '../utils'

export type IconButtonProps = React.ComponentProps<'button'> & {
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
  `

    const primary = `
    text-white-1000
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
  `
    const secondary = `
    border
    border-solid
    border-sea-600
    hover:bg-sea-100
    active:bg-sea-100
    focus:outline
    focus:outline-2
    focus:outline-wood-500
    disabled:bg-sumi-500
    disabled:text-white-1000
    disabled:border
    disabled:border-solid
    disabled:border-sumi-500
  `

    const styles = {
      primary: primary,
      secondary: secondary
    }

    return (
      <button
        className={cx(style, styles[variant ?? 'primary'], className)}
        {...newProps}
        ref={ref}
      >
        <img src={`/icons/${props.icon}.svg`} alt={props.icon} width="24" />
        {children}
      </button>
    )
  }
)
