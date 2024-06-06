import React from 'react'
import { cx } from '../utils/class'
import { ControllerContext } from './context'

export interface FileInputProps extends React.ComponentPropsWithRef<'input'> {}

export const FileInput = React.forwardRef<HTMLInputElement, FileInputProps>(
  (props, ref) => {
    const { id, className, ...restProps } = props
    const ctx = React.useContext(ControllerContext)
    if (ctx.isRequired) {
      restProps.required = true
    }

    const base = `
      file:mr-2
      file:inline-block
      file:text-button
      file:text-center
      file:cursor-pointer
      file:select-none
      file:touch-manipulation
      file:whitespace-nowrap
      file:border
      file:border-solid
      file:border-blue-900
      file:hover:border-blue-1000
      file:active:border-blue-1200
      file:disabled:border-sumi-500
      file:disabled:cursor-not-allowed
    `

    const secondary = `
      file:text-sea-900
      file:hover:text-sea-1000
      file:active:text-sea-1200
      file:bg-transparent
      file:hover:bg-sea-200
      file:active:bg-sea-300
      file:disabled:text-sumi-500
      file:disabled:bg-transparent
    `
    const styleLg = `
      file:p-4
      file:text-button
      file:rounded-lg
      file:leading-snug
    `
    const styleInput = `
      text-label
      text-sumi-900
      rounded-lg
      outline-offset-2
      focus:outline
      focus:outline-2
      focus:outline-wood-600
      aria-invalid:text-sun-800
    `

    return (
      <input
        type="file"
        id={id || ctx.id}
        className={cx(base, secondary, styleLg, styleInput, className)}
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

FileInput.displayName = 'FileInput'
