import React from 'react'
import { cx } from '../utils/class'
import { ControllerContext } from './context'
import { InputSize } from './inputStyle'

export interface RadioProps
  extends Omit<React.ComponentPropsWithRef<'input'>, 'size'> {
  size?: InputSize
}

export const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  (props, ref) => {
    const { id, className, size = 'lg', children, ...restProps } = props
    const radioId = id || React.useId()
    const ctx = React.useContext(ControllerContext)
    if (ctx.isRequired) {
      restProps.required = true
    }
    if (ctx.groupName) {
      restProps.name = ctx.groupName
    }

    const spaces: { [key in InputSize]: string } = {
      lg: 'py-2 mr-4',
      md: 'py-1.5 mr-3',
      sm: 'py-1 mr-1.5'
    }

    const radioSpaces: { [key in InputSize]: string } = {
      lg: 'mr-2',
      md: 'mr-1',
      sm: 'mr-1'
    }

    const iconSizes: { [key in InputSize]: string } = {
      lg: 'w-6 h-6',
      md: 'w-5 h-5',
      sm: 'w-5 h-5'
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

    const styleRadio = `
      bg-clip-content
      ml-1
      p-1
      rounded-full
      border
      border-solid
      border-sumi-900
      peer-checked:bg-sea-600
      peer-checked:border-sea-600
      peer-disabled:border-sumi-500
      peer-focus-visible:ring-2
      peer-focus-visible:ring-offset-2
      peer-focus-visible:ring-wood-500
    `

    return (
      <label htmlFor={radioId} className={cx(style, spaces[size], className)}>
        <span className="flex items-center">
          <input
            id={radioId}
            className={styleInput}
            type="radio"
            aria-describedby={ctx.helperTextId}
            aria-errormessage={ctx.errorMessageId}
            aria-invalid={ctx.isInvalid ?? false}
            aria-required={ctx.isRequired ?? false}
            {...restProps}
            ref={ref}
          />
          <span
            aria-hidden={true}
            className={cx(styleRadio, radioSpaces[size], iconSizes[size])}
          />
          <span className="peer-disabled:text-sumi-500">{children}</span>
        </span>
      </label>
    )
  }
)

Radio.displayName = 'Radio'
