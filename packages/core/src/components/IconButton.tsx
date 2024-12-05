import React, { type ComponentProps } from 'react'
import { cx } from '@sakura-ui/helper'
import {
  base,
  getVariantStyle,
  getSizeStyle,
  type ButtonVariant,
  type ButtonSize
} from './buttonStyle'
import { Slot } from './Slot'

export type IconButtonProps = {
  className?: string
  variant?: ButtonVariant
  size?: ButtonSize
  iconLayout?: 'left' | 'right'
  icon: string
  rounded?: string
} & (
  | ({ asChild?: false } & ComponentProps<'button'>)
  | { asChild: true; children: React.ReactNode }
)

export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  (props, ref) => {
    const {
      asChild,
      variant = 'solid-fill',
      size = 'lg',
      iconLayout = 'left',
      icon,
      rounded,
      className,
      children,
      ...restProps
    } = props

    const Component = asChild ? Slot : 'button'

    const styleFontSize = `${size === 'xs' ? 'scale-105' : 'scale-125'}`

    const styleIcon = `
      inline-block
      align-middle
      mb-1
      font-icon
      font-light
      leading-[0px]      
      antialiased
    `

    const styleRounded = `${rounded ? 'aspect-square !rounded-full !py-0' : ''}`

    // When text is specified on a button, set the 'aria-hidden' attribute of the icon to true.
    const ariaHidden = !!children

    return (
      <Component
        className={cx(
          base,
          getVariantStyle(variant),
          getSizeStyle(size),
          styleRounded,
          className
        )}
        {...restProps}
        ref={ref}
      >
        <span>
          {iconLayout === 'left' && (
            <span
              className={cx(styleIcon, styleFontSize)}
              aria-hidden={ariaHidden}
            >
              {icon}
            </span>
          )}
          {children && <span className="mx-1">{children}</span>}
          {iconLayout === 'right' && (
            <span
              className={cx(styleIcon, styleFontSize)}
              aria-hidden={ariaHidden}
            >
              {icon}
            </span>
          )}
        </span>
      </Component>
    )
  }
)

IconButton.displayName = 'IconButton'
