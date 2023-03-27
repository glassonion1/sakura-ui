import React from 'react'
import { cx } from '../utils'
import { ControllerContext } from './context'

export interface CheckboxProps extends React.ComponentProps<'input'> {}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (props, ref) => {
    const { className, children, ...restProps } = props
    const ctx = React.useContext(ControllerContext)
    if (ctx.isRequired) {
      restProps.required = true
    }
    if (ctx.groupName) {
      restProps.name = ctx.groupName
    }

    const style = `
      inline-block
      text-sm
      cursor-pointer
      py-2
      mr-4
    `

    const styleInput = `
      hidden
      peer
    `

    const styleCheck = `
      inline-block
      bg-clip-content
      w-6 h-6
      ml-1
      mr-2
      rounded
      border
      border-solid
      border-sumi-900
      peer-checked:bg-sea-600
      peer-checked:border-none
    `

    return (
      <label htmlFor={restProps.id} className={cx(style, className)}>
        <span className="flex items-center">
          <input
            className={styleInput}
            type="checkbox"
            aria-describedby={ctx.helperTextId}
            aria-errormessage={ctx.errorMessageId}
            aria-invalid={ctx.isInvalid ?? false}
            {...restProps}
            ref={ref}
          />
          <span className={styleCheck}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
              <path
                fill="#fff"
                d="m9.55 17.65-5.325-5.325 1.05-1.075 4.275 4.275 9.175-9.175 1.05 1.075Z"
              />
            </svg>
          </span>
          {children}
        </span>
      </label>
    )
  }
)