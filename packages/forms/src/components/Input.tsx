import React from 'react'
import { cx } from '../utils/class'
import { ControllerContext } from './context'

export interface InputProps extends React.ComponentPropsWithRef<'input'> {}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (props, ref) => {
    const { id, className, ...restProps } = props
    const ctx = React.useContext(ControllerContext)
    if (ctx.isRequired) {
      restProps.required = true
    }

    const style = `
      p-4
      text-label
      rounded-lg
      border
      border-solid
      border-sumi-900
      outline-offset-2
      focus:outline
      focus:outline-2
      focus:outline-wood-500
      disabled:bg-transparent
      disabled:text-sumi-500
      disabled:border-sumi-500
      aria-invalid:border-sun-800
    `

    return (
      <input
        type="text"
        id={id || ctx.id}
        className={cx(style, className)}
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
