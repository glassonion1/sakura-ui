import React from 'react'
import { cx } from '../utils/class'
import { ControllerContext } from './context'
import {
  InputSize,
  borderedInputBaseStyles,
  borderedInputSizeStyles
} from './inputStyle'

export interface SelectProps
  extends Omit<React.ComponentPropsWithRef<'select'>, 'size'> {
  size?: InputSize
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  (props, ref) => {
    const { id, className, size = 'lg', children, ...restProps } = props
    const ctx = React.useContext(ControllerContext)
    if (ctx.isRequired) {
      restProps.required = true
    }

    const style = `
      !pr-8
      peer
      cursor-pointer
      appearance-none
    `

    const styleArrow = `
      pointer-events-none
      absolute
      right-4
      top-1/2
      -translate-y-1/2
      text-sumi-900
      peer-disabled:text-sumi-500
    `

    return (
      <div className="inline-block relative">
        <select
          id={id || ctx.id}
          className={cx(
            style,
            borderedInputBaseStyles,
            borderedInputSizeStyles[size],
            props.className
          )}
          aria-describedby={ctx.helperTextId}
          aria-errormessage={ctx.errorMessageId}
          aria-invalid={ctx.isInvalid ?? false}
          aria-required={ctx.isRequired ?? false}
          {...restProps}
          ref={ref}
        >
          {children}
        </select>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden={true}
          className={styleArrow}
          fill="none"
          width="16"
          height="16"
          viewBox="0 0 16 16"
        >
          <title>arrow down</title>
          <path
            d="M12 15.05 6.35 9.4 7.4 8.35l4.6 4.6 4.6-4.6 1.05 1.05Z"
            fill="currentColor"
          />
        </svg>
      </div>
    )
  }
)
