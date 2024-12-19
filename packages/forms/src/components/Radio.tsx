import React, { type ComponentPropsWithRef } from 'react'
import { cx, Style } from '@sakura-ui/helper'
import { ControllerContext } from './context'
import {
  type InputSize,
  borderlessInputBaseStyles,
  borderlessInputSizeStyles,
  iconStyles
} from './inputStyle'

export namespace Radio {
  export interface Props extends Omit<ComponentPropsWithRef<'input'>, 'size'> {
    size?: InputSize
  }
}

export const Radio = (props: Radio.Props) => {
  const { id, className, size = 'lg', children, ...restProps } = props
  const genId = React.useId()
  const radioId = id || genId
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
      border-solid-gray-900
      peer-checked:bg-blue-600
      peer-checked:border-blue-600
      peer-disabled:border-solid-gray-500
      ${Style.Peer.focusRect}
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
        />
        <span
          aria-hidden={true}
          className={cx(styleRadio, radioSizes[size], iconStyles[size])}
        />
        <span className="peer-disabled:text-solid-gray-500">{children}</span>
      </span>
    </label>
  )
}

Radio.displayName = 'Radio'
