import React from 'react'
import { cx } from '../utils/class'

export interface IconButtonProps extends React.ComponentPropsWithRef<'button'> {
  variant?: 'primary' | 'secondary'
  iconLayout?: 'left' | 'right'
  rounded?: string
  icon: string
}

export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  (props, ref) => {
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

    // When text is specified on a button, set the 'aria-hidden' attribute of the icon to true.
    const ariaHidden = children ? true : false

    return (
      <button
        className={cx(style, styles[variant ?? 'primary'], className)}
        {...restProps}
        ref={ref}
      >
        {layout == 'left' && (
          <span className={cx(iconStyle)} aria-hidden={ariaHidden}>
            {icon}
          </span>
        )}
        {children && <span className="mx-1 inline-block">{children}</span>}
        {layout == 'right' && (
          <span className={cx(iconStyle)} aria-hidden={ariaHidden}>
            {icon}
          </span>
        )}
      </button>
    )
  }
)

IconButton.displayName = 'IconButton'
