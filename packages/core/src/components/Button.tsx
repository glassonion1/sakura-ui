import { cx } from '../libs/cx'
import type { ComponentWithAs } from '../types/component'
import { forwardRef } from '../libs/forward-ref'
import {
  type ButtonVariant,
  type ButtonSize,
  base,
  getVariantStyle,
  getSizeStyle
} from './buttonStyle'

export interface ButtonProps {
  variant?: ButtonVariant
  size?: ButtonSize
}

export const Button: ComponentWithAs<'button', ButtonProps> = forwardRef(
  (props, ref) => {
    const {
      as: Component = 'button',
      variant = 'primary',
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
        ref={ref}
      >
        {children}
      </Component>
    )
  }
)

Button.displayName = 'Button'
