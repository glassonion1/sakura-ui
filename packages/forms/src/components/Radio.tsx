import React from 'react'
import { cx } from '../utils/class'
import { ControllerContext } from './context'
import {
  InputSize,
  borderlessInputBaseStyles,
  borderlessInputSizeStyles,
  iconStyles
} from './inputStyle'

export interface RadioProps
  extends Omit<React.ComponentPropsWithRef<'input'>, 'size'> {
  size?: InputSize
}

export const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  (props, ref) => {
    const { id, className, size = 'lg', children, ...restProps } = props
    const radioId = id || React.useId()
    const ctx = React.useContext(ControllerContext)
    if (ctx.isRequired) {
      restProps.required = true
    }
    if (ctx.groupName) {
      restProps.name = ctx.groupName
    }

    const styleInput = `
      peer
      sr-only
    `

    const styleRadio = `
      bg-clip-content
      rounded-full
      border
      border-solid
      border-sumi-900
      peer-checked:bg-sea-600
      peer-checked:border-sea-600
      peer-disabled:border-sumi-500
      peer-focus-visible:ring-2
      peer-focus-visible:ring-offset-2
      peer-focus-visible:ring-wood-500
    `

    const radioSizes: { [key in InputSize]: string } = {
      lg: 'p-1',
      md: 'p-[3px]',
      sm: 'p-[3px]'
    }

    return (
      <label
        htmlFor={radioId}
        className={cx(
          borderlessInputBaseStyles,
          borderlessInputSizeStyles[size],
          className
        )}
      >
        <span className="flex items-center">
          <input
            id={radioId}
            className={styleInput}
            type="radio"
            aria-describedby={ctx.helperTextId}
            aria-errormessage={ctx.errorMessageId}
            aria-invalid={ctx.isInvalid ?? false}
            aria-required={ctx.isRequired ?? false}
            {...restProps}
            ref={ref}
          />
          <span
            aria-hidden={true}
            className={cx(styleRadio, radioSizes[size], iconStyles[size])}
          />
          <span className="peer-disabled:text-sumi-500">{children}</span>
        </span>
      </label>
    )
  }
)

Radio.displayName = 'Radio'
