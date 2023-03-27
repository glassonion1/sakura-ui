import React from 'react'
import { cx } from '../utils'
import { ControllerContext } from './context'

export interface LabelControlProps
  extends React.ComponentPropsWithoutRef<'div'> {
  labelText: string
  helperText?: string
  errorMessage?: string
  isInvalid?: boolean
  isRequired?: boolean
}

export const LabelControl = React.forwardRef<HTMLDivElement, LabelControlProps>(
  (props, ref) => {
    const id = React.useId()
    const {
      labelText,
      className,
      helperText,
      errorMessage,
      isInvalid,
      isRequired,
      children,
      ...restProps
    } = props

    const context = {
      helperTextId: `helper-text-${id}`,
      errorMessageId: `error-message-${id}`,
      isInvalid: isInvalid ?? false,
      isRequired: isRequired ?? false
    }

    return (
      <ControllerContext.Provider value={context}>
        <div className={cx('mb-4', className)} ref={ref} {...restProps}>
          <label>
            <span className={cx('block mb-2', isInvalid && 'text-sun-800')}>
              {labelText}
              {isRequired && <span className="text-sun-800">&nbsp;*</span>}
            </span>
            {children}
          </label>
          {helperText && (
            <p id={context.helperTextId} className="text-sm text-sumi-700 mt-2">
              {helperText}
            </p>
          )}
          {isInvalid && (
            <p
              id={context.errorMessageId}
              className={cx(
                'text-sm text-sun-800',
                helperText ? 'mt-1' : 'mt-2'
              )}
            >
              {errorMessage}
            </p>
          )}
        </div>
      </ControllerContext.Provider>
    )
  }
)
