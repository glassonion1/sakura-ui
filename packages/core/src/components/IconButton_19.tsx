import React, { type ComponentProps } from 'react'
import { cx } from '@sakura-ui/helper'
import {
  base,
  getVariantStyle,
  getSizeStyle,
  type ButtonVariant,
  type ButtonSize
} from './buttonStyle'

export namespace IconButton {
  export interface Props<T extends React.ElementType> {
    as?: T
    variant?: ButtonVariant
    size?: ButtonSize
    iconLayout?: 'left' | 'right'
    icon: string
    rounded?: string
  }
}

export const IconButton = <T extends React.ElementType = 'button'>(
  props: IconButton.Props<T> &
    Omit<React.ComponentProps<T>, keyof IconButton.Props<T>>
) => {
  const {
    as: Component = 'button',
    variant = 'solid-fill',
    size = 'lg',
    iconLayout = 'left',
    icon,
    rounded,
    className,
    children,
    ...restProps
  } = props

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

IconButton.displayName = 'IconButton'
