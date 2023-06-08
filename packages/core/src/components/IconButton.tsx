import React from 'react'
import { cx } from '../utils/class'

export interface IconButtonProps extends React.ComponentProps<'button'> {
  variant?: 'primary' | 'secondary'
  iconLayout?: 'left' | 'right'
  icon: string
}

export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  (props, ref) => {
    const { className, children, variant, icon, iconLayout, ...restProps } =
      props

    const layout = iconLayout ?? 'left'

    const align = 'center'

    const style = `
      inline-block
      p-4
      text-button
      text-${align}
      rounded-lg
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
      hover:enabled:bg-sea-100
      active:enabled:bg-sea-200
      disabled:text-sumi-500
    `

    const styles = {
      primary: primary,
      secondary: secondary
    }

    const iconStyle = `
      inline-block
      align-middle
      font-icon
      text-2xl
      font-light
      leading-4
      antialiased
      mb-1
    `

    return (
      <button
        className={cx(style, styles[variant ?? 'primary'], className)}
        {...restProps}
        ref={ref}
      >
        {layout == 'left' && <span className={cx(iconStyle)}>{icon}</span>}
        {children && <span className="mx-1 inline-block">{children}</span>}
        {layout == 'right' && <span className={cx(iconStyle)}>{icon}</span>}
      </button>
    )
  }
) as React.ElementType
