import React from 'react'
import { cx } from '../utils/class'
import { ControllerContext } from './context'

export interface TextareaProps extends React.ComponentProps<'textarea'> {}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (props, ref) => {
    const { className, children, ...restProps } = props

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
      <textarea
        id={restProps.id ?? ctx.id}
        className={cx(style, invalidStyle, className)}
        aria-describedby={ctx.helperTextId}
        aria-errormessage={ctx.errorMessageId}
        aria-invalid={ctx.isInvalid ?? false}
        {...restProps}
        ref={ref}
      >
        {children}
      </textarea>
    )
  }
) as React.ElementType
