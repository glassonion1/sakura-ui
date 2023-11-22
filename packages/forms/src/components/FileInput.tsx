import React from 'react'
import { cx } from '../utils/class'
import { ControllerContext } from './context'

export interface FileInputProps extends React.ComponentPropsWithRef<'input'> {}

export const FileInput = React.forwardRef<HTMLInputElement, FileInputProps>(
  (props, ref) => {
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
    outline-offset-2
    focus:outline
    focus:outline-2
    focus:outline-wood-500
    disabled:bg-transparent
    disabled:text-sumi-500
    disabled:border-sumi-500
  `

    return (
      <input
        type="file"
        id={restProps.id ?? ctx.id}
        className={cx(style, invalidStyle, className)}
        aria-describedby={ctx.helperTextId}
        aria-errormessage={ctx.errorMessageId}
        aria-invalid={ctx.isInvalid ?? false}
        ref={ref}
        {...restProps}
      />
    )
  }
)

FileInput.displayName = 'FileInput'
