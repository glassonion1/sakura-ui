import React from 'react'
import { cx } from '../utils/class'
import { ControllerContext } from './context'

export interface SelectProps extends React.ComponentPropsWithRef<'select'> {}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  (props, ref) => {
    const { id, className, children, ...restProps } = props
    const ctx = React.useContext(ControllerContext)
    if (ctx.isRequired) {
      restProps.required = true
    }

    const style = `
      peer
      cursor-pointer
      appearance-none
      text-label
      w-full
      bg-white
      border
      border-solid
      border-sumi-900
      py-4 px-4 pr-8
      rounded-[8px]
      outline-offset-2
      focus:outline
      focus:outline-2
      focus:outline-wood-500
      disabled:bg-transparent
      disabled:text-sumi-500
      disabled:border-sumi-500
      aria-invalid:border-sun-800
    `

    const styleArrow = `
      flex items-center
      absolute inset-y-0 right-0
      px-2
      pointer-events-none
      peer-disabled:fill-sumi-500
    `

    return (
      <label className="inline-block relative">
        <select
          id={id || ctx.id}
          className={cx(style, props.className)}
          aria-describedby={ctx.helperTextId}
          aria-errormessage={ctx.errorMessageId}
          aria-invalid={ctx.isInvalid ?? false}
          aria-required={ctx.isRequired ?? false}
          {...restProps}
          ref={ref}
        >
          {children}
        </select>
        <span className={styleArrow}>
          <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24">
            <path d="M12 15.05 6.35 9.4 7.4 8.35l4.6 4.6 4.6-4.6 1.05 1.05Z" />
          </svg>
        </span>
      </label>
    )
  }
)
