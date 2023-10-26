import React from 'react'
import { cx } from '../utils/class'
import { base, getVariantStyle, getSizeStyle } from './buttonStyle'

export interface IconButtonProps extends React.ComponentPropsWithRef<'button'> {
  variant?: 'primary' | 'secondary'
  size?: 'lg' | 'md' | 'sm' | 'xs'
  iconLayout?: 'left' | 'right'
  icon: string
  rounded?: string
}

export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  (props, ref) => {
    const {
      className,
      children,
      variant,
      size,
      iconLayout,
      icon,
      rounded,
      ...restProps
    } = props

    const layout = iconLayout ?? 'left'
    const v = variant ?? 'primary'
    const s = size ?? 'lg'

    const styleIcon = `
      inline-block
      align-middle
      font-icon
      text-2xl
      font-light
      leading-4
      antialiased
      mb-1
    `

    const styleRounded = `
      ${rounded ? `aspect-square !rounded-full` : ''}
    `

    // When text is specified on a button, set the 'aria-hidden' attribute of the icon to true.
    const ariaHidden = children ? true : false

    return (
      <button
        className={cx(
          base,
          getVariantStyle(v),
          getSizeStyle(s),
          styleRounded,
          className
        )}
        {...restProps}
        ref={ref}
      >
        {layout == 'left' && (
          <span className={cx(styleIcon)} aria-hidden={ariaHidden}>
            {icon}
          </span>
        )}
        {children && <span className="mx-1 inline-block">{children}</span>}
        {layout == 'right' && (
          <span className={cx(styleIcon)} aria-hidden={ariaHidden}>
            {icon}
          </span>
        )}
      </button>
    )
  }
)

IconButton.displayName = 'IconButton'
