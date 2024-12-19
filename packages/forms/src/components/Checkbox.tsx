import React, { type ComponentPropsWithRef } from 'react'
import { cx, Style } from '@sakura-ui/helper'
import { ControllerContext } from './context'
import {
  type InputSize,
  borderlessInputBaseStyles,
  borderlessInputSizeStyles,
  iconStyles
} from './inputStyle'

export namespace Checkbox {
  export interface Props extends Omit<ComponentPropsWithRef<'input'>, 'size'> {
    size?: InputSize
  }
}

export const Checkbox = (props: Checkbox.Props) => {
  const { id, className, size = 'lg', children, ...restProps } = props
  const genId = React.useId()
  const checkboxId = id || genId
  const ctx = React.useContext(ControllerContext)
  if (ctx.isRequired) {
    restProps.required = true
  }
  if (ctx.groupName) {
    restProps.name = ctx.groupName
  }

  const scales: { [key in InputSize]: number } = {
    lg: 22 / 24,
    md: 18 / 24,
    sm: 18 / 24
  }

  const styleInput = `
      peer
      sr-only
    `

  const styleCheck = `
      bg-clip-content
      rounded
      border
      border-solid
      border-solid-gray-900
      fill-transparent
      peer-checked:fill-white
      peer-checked:bg-blue-600
      peer-checked:border-none
      peer-disabled:border-solid-gray-500
      ${Style.Peer.focusRect}
    `

  return (
    <label
      htmlFor={checkboxId}
      className={cx(
        borderlessInputBaseStyles,
        borderlessInputSizeStyles[size],
        className
      )}
    >
      <span className="flex items-center">
        <input
          id={checkboxId}
          className={styleInput}
          type="checkbox"
          aria-describedby={ctx.helperTextId}
          aria-errormessage={ctx.errorMessageId}
          aria-invalid={ctx.isInvalid ?? false}
          aria-required={ctx.isRequired ?? false}
          {...restProps}
        />
        <span className={cx(styleCheck, iconStyles[size])}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden={true}
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <g transform={`scale(${scales[size]} ${scales[size]})`}>
              <path d="m9.55 17.65-5.325-5.325 1.05-1.075 4.275 4.275 9.175-9.175 1.05 1.075Z" />
            </g>
          </svg>
        </span>
        <span className="peer-disabled:text-solid-gray-500">{children}</span>
      </span>
    </label>
  )
}

Checkbox.displayName = 'Checkbox'
