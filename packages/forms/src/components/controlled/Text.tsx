import React from 'react'
import { cx } from '../../utils'
import { Text as Atom } from '../Text'

export interface TextProps extends React.ComponentPropsWithoutRef<'input'> {
  label: string
  helperText?: string
  errorMessage?: string
  isInvalid?: boolean
}

export const Text = React.forwardRef<HTMLInputElement, TextProps>(
  (props, ref) => {
    const id = React.useId()
    const {
      label,
      className,
      helperText,
      errorMessage,
      isInvalid,
      ...newProps
    } = props

    return (
      <div className={cx('mb-4', className)}>
        <label
          className={cx('block mb-2', isInvalid && 'text-sun-800')}
          htmlFor={`text-${id}`}
        >
          {label}
          {newProps.required && <span className="text-sun-800">&nbsp;*</span>}
        </label>
        <Atom
          id={`text-${id}`}
          className={isInvalid ? 'border-1 border-sun-800' : ''}
          ref={ref}
          aria-describedby={`helper-text-${id}`}
          aria-errormessage={`error-message-${id}`}
          {...newProps}
        />
        {helperText && (
          <p id={`helper-text-${id}`} className="text-sm text-sumi-700 mt-2">
            {helperText}
          </p>
        )}
        {isInvalid && (
          <p
            id={`error-message-${id}`}
            className={cx('text-sm text-sun-800', helperText ? 'mt-1' : 'mt-2')}
          >
            {errorMessage}
          </p>
        )}
      </div>
    )
  }
)
