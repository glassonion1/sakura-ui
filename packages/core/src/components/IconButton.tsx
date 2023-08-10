import React from 'react'
import { cx } from '../utils/class'

export interface IconButtonProps extends React.ComponentPropsWithRef<'button'> {
  variant?: 'primary' | 'secondary'
  iconLayout?: 'left' | 'right'
  rounded?: string
  icon: string
}

export const IconButton: React.ElementType<IconButtonProps> = React.forwardRef<
  HTMLButtonElement,
  IconButtonProps
>((props, ref) => {
  const {
    className,
    children,
    variant,
    icon,
    iconLayout,
    rounded,
    ...restProps
  } = props

  const layout = iconLayout ?? 'left'

  const align = 'center'

  const style = `
      ${rounded === 'full' ? 'aspect-square' : ''}
      inline-block
      p-4
      text-button
      text-${align}
      rounded-${rounded ? rounded : 'lg'}
      cursor-pointer
      whitespace-nowrap
      border
      border-solid
      border-sea-800
      active:hover:enabled:border-sea-800-darken
      focus:outline
      focus:outline-2
      focus:outline-wood-600
      disabled:border-sumi-500
      disabled:cursor-not-allowed
    `

  const primary = `
      text-white-1000
      bg-sea-800
      active:hover:enabled:bg-sea-800-darken
      disabled:bg-sumi-500
      disabled:text-white-1000
    `
  const secondary = `
      text-sea-800
      bg-transparent
      active:hover:enabled:bg-sea-50
      active:hover:enabled:text-sea-800-darken
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
})

IconButton.displayName = 'IconButton'
