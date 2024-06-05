import React from 'react'
import { cx } from '../utils/class'
import { ControllerContext } from './context'
import { InputSize } from './inputStyle'

export interface CheckboxProps
  extends Omit<React.ComponentPropsWithRef<'input'>, 'size'> {
  size?: InputSize
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (props, ref) => {
    const { id, className, size = 'lg', children, ...restProps } = props
    const checkboxId = id || React.useId()
    const ctx = React.useContext(ControllerContext)
    if (ctx.isRequired) {
      restProps.required = true
    }
    if (ctx.groupName) {
      restProps.name = ctx.groupName
    }

    const spaces: { [key in InputSize]: string } = {
      lg: 'py-4 mr-6',
      md: 'py-3 mr-4',
      sm: 'py-2 mr-2'
    }

    const checkSpaces: { [key in InputSize]: string } = {
      lg: 'mr-2',
      md: 'mr-1',
      sm: 'mr-1'
    }

    const iconSizes: { [key in InputSize]: string } = {
      lg: 'w-6 h-6',
      md: 'w-5 h-5',
      sm: 'w-5 h-5'
    }

    const scales: { [key in InputSize]: number } = {
      lg: 24 / 24,
      md: 20 / 24,
      sm: 20 / 24
    }

    const style = `
      inline-block
      text-label
      cursor-pointer
    `

    const styleInput = `
      peer
      sr-only
    `

    const styleCheck = `
      bg-clip-content
      ml-1
      rounded
      border
      border-solid
      border-sumi-900
      fill-transparent
      peer-checked:fill-white
      peer-checked:bg-sea-600
      peer-checked:border-none
      peer-disabled:border-sumi-500
      peer-focus-visible:ring-2
      peer-focus-visible:ring-offset-2
      peer-focus-visible:ring-wood-500
    `

    return (
      <label
        htmlFor={checkboxId}
        className={cx(style, spaces[size], className)}
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
            ref={ref}
          />
          <span className={cx(styleCheck, iconSizes[size], checkSpaces[size])}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden={true}
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <title>check</title>
              <g transform={`scale(${scales[size]} ${scales[size]})`}>
                <path d="m9.55 17.65-5.325-5.325 1.05-1.075 4.275 4.275 9.175-9.175 1.05 1.075Z" />
              </g>
            </svg>
          </span>
          <span className="peer-disabled:text-sumi-500">{children}</span>
        </span>
      </label>
    )
  }
)

Checkbox.displayName = 'Checkbox'
