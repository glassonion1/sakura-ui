import React, { type ComponentProps } from 'react'
import { cx } from '@sakura-ui/helper'
import {
  type ButtonVariant,
  type ButtonSize,
  base,
  getVariantStyle,
  getSizeStyle
} from './buttonStyle'
import { Slot } from './Slot'

export type ButtonProps = {
  className?: string
  variant?: ButtonVariant
  size?: ButtonSize
} & (
  | ({ asChild?: false } & ComponentProps<'button'>)
  | { asChild: true; children: React.ReactNode }
)

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const {
      asChild,
      variant = 'solid-fill',
      size = 'lg',
      className,
      children,
      ...restProps
    } = props

    const Component = asChild ? Slot : 'button'

    return (
      <Component
        className={cx(
          base,
          getVariantStyle(variant),
          getSizeStyle(size),
          className
        )}
        {...restProps}
        ref={ref}
      >
        {children}
      </Component>
    )
  }
)

Button.displayName = 'Button'
