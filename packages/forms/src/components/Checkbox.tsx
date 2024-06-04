import React from 'react'
import { cx } from '../utils/class'
import { ControllerContext } from './context'

export interface CheckboxProps extends React.ComponentPropsWithRef<'input'> {}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (props, ref) => {
    const { id, className, children, ...restProps } = props
    const checkboxId = id || React.useId()
    const ctx = React.useContext(ControllerContext)
    if (ctx.isRequired) {
      restProps.required = true
    }
    if (ctx.groupName) {
      restProps.name = ctx.groupName
    }

    const style = `
      inline-block
      text-label
      cursor-pointer
      py-2
      mr-4
    `

    const styleInput = `
      peer
      sr-only
    `

    const styleCheck = `
      bg-clip-content
      w-6 h-6
      ml-1
      mr-2
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
      <label htmlFor={checkboxId} className={cx(style, className)}>
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
          <span className={styleCheck}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
              <path d="m9.55 17.65-5.325-5.325 1.05-1.075 4.275 4.275 9.175-9.175 1.05 1.075Z" />
            </svg>
          </span>
          <span className="peer-disabled:text-sumi-500">{children}</span>
        </span>
      </label>
    )
  }
)

Checkbox.displayName = 'Checkbox'
