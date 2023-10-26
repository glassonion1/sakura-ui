import React from 'react'
import { cx } from '../utils/class'
import { base, getVariantStyle, getSizeStyle } from './buttonStyle'

export interface ButtonProps extends React.ComponentPropsWithRef<'button'> {
  variant?: 'primary' | 'secondary'
  size?: 'lg' | 'md' | 'sm' | 'xs'
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    // Make sure that there is no problem even if className is specified on the side that uses the component
    const { className, children, variant, size, ...restProps } = props

    const v = variant ?? 'primary'
    const s = size ?? 'lg'

    return (
      <button
        className={cx(base, getVariantStyle(v), getSizeStyle(s), className)}
        {...restProps}
        ref={ref}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'
