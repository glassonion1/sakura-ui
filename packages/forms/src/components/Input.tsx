import React from 'react'
import { cx } from '@sakura-ui/helper'
import { ControllerContext } from './context'
import {
  type InputSize,
  borderedInputBaseStyles,
  borderedInputSizeStyles
} from './inputStyle'

export interface InputProps
  extends Omit<React.ComponentPropsWithRef<'input'>, 'size'> {
  size?: InputSize
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (props, ref) => {
    const { id, className, size = 'lg', ...restProps } = props
    const ctx = React.useContext(ControllerContext)
    if (ctx.isRequired) {
      restProps.required = true
    }

    return (
      <input
        type="text"
        id={id || ctx.id}
        className={cx(
          borderedInputBaseStyles,
          borderedInputSizeStyles[size],
          className
        )}
        aria-describedby={ctx.helperTextId}
        aria-errormessage={ctx.errorMessageId}
        aria-invalid={ctx.isInvalid ?? false}
        aria-required={ctx.isRequired ?? false}
        ref={ref}
        {...restProps}
      />
    )
  }
)

Input.displayName = 'Input'
