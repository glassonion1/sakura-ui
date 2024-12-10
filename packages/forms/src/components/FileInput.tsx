import React from 'react'
import { cx, Style } from '@sakura-ui/helper'
import { ControllerContext } from './context'
import { InputSize } from './inputStyle'

export namespace FileInput {
  export interface Props
    extends Omit<React.ComponentPropsWithRef<'input'>, 'size'> {
    size?: InputSize
  }
}

export const FileInput = React.forwardRef<HTMLInputElement, FileInput.Props>(
  (props, ref) => {
    const { id, className, size = 'lg', ...restProps } = props
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

    const outline = `
      file:text-sea-900
      file:hover:text-sea-1000
      file:active:text-sea-1200
      file:bg-transparent
      file:hover:bg-sea-200
      file:active:bg-sea-300
      file:disabled:text-sumi-500
      file:disabled:bg-transparent
    `

    const styleInput = `
      text-label
      text-sumi-900
      rounded-lg
      outline-offset-2
      aria-invalid:text-sun-800
      ${Style.hoverUnderline}
      ${Style.focusRounded}
    `

    const sizeStyles: { [key in InputSize]: string } = {
      // 16(p-4) * 2 + 22(text-button * leading-snug) + boader * 2 = 56px
      lg: `
        file:p-4
        file:text-button
        file:rounded-lg
        file:leading-snug
      `,
      // 12(py-3) * 2 + 22(text-button * leading-snug) + boader * 2 = 48px
      md: `
        file:px-4
        file:py-3
        file:text-button
        file:rounded-lg
        file:leading-snug
      `,
      // 8(py-2) * 2 + 22(text-button * leading-snug) + boader * 2 = 40px
      sm: `
        file:px-3
        file:py-2
        file:text-button
        file:rounded-md
        file:leading-snug
      `
    }

    return (
      <input
        type="file"
        id={id || ctx.id}
        className={cx(base, outline, sizeStyles[size], styleInput, className)}
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
