import React, { type ComponentProps } from 'react'
import { cx } from '@sakura-ui/helper'
import {
  type ButtonVariant,
  type ButtonSize,
  base,
  getVariantStyle,
  getSizeStyle
} from './buttonStyle'

export namespace Button {
  export interface Props<T extends React.ElementType> {
    as?: T
    variant?: ButtonVariant
    size?: ButtonSize
  }
}

export const Button = <T extends React.ElementType = 'button'>(
  props: Button.Props<T> & Omit<React.ComponentProps<T>, keyof Button.Props<T>>
) => {
  const {
    as: Component = 'button',
    variant = 'solid-fill',
    size = 'lg',
    className,
    children,
    ...restProps
  } = props

  return (
    <Component
      className={cx(
        base,
        getVariantStyle(variant),
        getSizeStyle(size),
        className
      )}
      {...restProps}
    >
      {children}
    </Component>
  )
}

Button.displayName = 'Button'
