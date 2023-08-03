import React from 'react'
import { cx } from '../utils/class'
import { ControllerContext } from './context'

export interface InputProps extends React.ComponentPropsWithRef<'input'> {}

export const Input: React.ElementType<InputProps> = React.forwardRef<
  HTMLInputElement,
  InputProps
>((props, ref) => {
  const { className, ...restProps } = props
  const ctx = React.useContext(ControllerContext)
  if (ctx.isRequired) {
    restProps.required = true
  }

  const invalidStyle = ctx.isInvalid ? 'border-sun-800' : 'border-sumi-900'

  const style = `
    p-4
    rounded-lg
    border
    border-solid
    focus:outline
    focus:outline-2
    focus:outline-wood-500
    disabled:bg-transparent
    disabled:text-sumi-500
    disabled:border-sumi-500
  `

  return (
    <input
      type="text"
      id={restProps.id ?? ctx.id}
      className={cx(style, invalidStyle, className)}
      aria-describedby={ctx.helperTextId}
      aria-errormessage={ctx.errorMessageId}
      aria-invalid={ctx.isInvalid ?? false}
      ref={ref}
      {...restProps}
    />
  )
})

Input.displayName = 'Input'
