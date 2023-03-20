import React from 'react'
import { cx } from '../../utils'
import { Textarea as Atom } from '../Textarea'

export interface TextareaProps
  extends React.ComponentPropsWithoutRef<'textarea'> {
  label: string
  helperText?: string
  errorMessage?: string
  isInvalid?: boolean
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
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
          htmlFor={`textarea-${id}`}
        >
          {label}
          {newProps.required && <span className="text-sun-800">&nbsp;*</span>}
        </label>
        <Atom
          id={`textarea-${id}`}
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
