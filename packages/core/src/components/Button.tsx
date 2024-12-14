import { type ComponentWithAs, cx, forwardRef } from '@sakura-ui/helper'
import {
  type ButtonVariant,
  type ButtonSize,
  base,
  getVariantStyle,
  getSizeStyle
} from './buttonStyle'

export namespace Button {
  export interface Props {
    variant?: ButtonVariant
    size?: ButtonSize
  }
}

export const Button: ComponentWithAs<'button', Button.Props> = forwardRef(
  (props, ref) => {
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
        ref={ref}
      >
        {children}
      </Component>
    )
  }
)

Button.displayName = 'Button'
