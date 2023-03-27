import React from 'react'
import { cx } from '../utils'
import { ControllerContext } from './context'

export interface SelectProps extends React.ComponentPropsWithoutRef<'select'> {}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  (props, ref) => {
    const { className, children, ...newProps } = props
    const ctx = React.useContext(ControllerContext)
    if (ctx.isRequired) {
      newProps.required = true
    }

    const invalidStyle = ctx.isInvalid ? 'border-sun-800' : 'border-sumi-900'

    const style = `
      cursor-pointer
      appearance-none
      text-base
      w-full
      bg-white-100
      border
      border-solid
      py-4 px-4 pr-8
      rounded-[8px]
      focus:outline
      focus:outline-2
      focus:outline-wood-500
    `

    return (
      <span className="inline-block relative">
        <select
          className={cx(style, invalidStyle, props.className)}
          aria-describedby={ctx.helperTextId}
          aria-errormessage={ctx.errorMessageId}
          aria-invalid={ctx.isInvalid ?? false}
          {...newProps}
          ref={ref}
        >
          {children}
        </select>
        <span className="flex items-center absolute inset-y-0 right-0 px-2 pointer-events-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="fill-sumi-900"
            height="24"
            width="24"
          >
            <path d="M12 15.05 6.35 9.4 7.4 8.35l4.6 4.6 4.6-4.6 1.05 1.05Z" />
          </svg>
        </span>
      </span>
    )
  }
)
