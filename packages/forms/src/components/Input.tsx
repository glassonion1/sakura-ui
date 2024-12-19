import React, { type ComponentPropsWithRef } from 'react'
import { cx } from '@sakura-ui/helper'
import { ControllerContext } from './context'
import {
  type InputSize,
  borderedInputBaseStyles,
  borderedInputSizeStyles
} from './inputStyle'

export namespace Input {
  export interface Props extends Omit<ComponentPropsWithRef<'input'>, 'size'> {
    size?: InputSize
  }
}

export const Input = (props: Input.Props) => {
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
      {...restProps}
    />
  )
}

Input.displayName = 'Input'
