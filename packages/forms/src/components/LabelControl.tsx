import React from 'react'
import { cx } from '../utils/class'
import { ControllerContext } from './context'

export interface LabelControlProps
  extends React.ComponentPropsWithoutRef<'label'> {
  labelText: string
  helperText?: string
  errorMessage?: string
  isInvalid?: boolean
  isRequired?: boolean
}

export const LabelControl = React.forwardRef<
  HTMLLabelElement,
  LabelControlProps
>((props, ref) => {
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
    id: props.htmlFor ?? `input-${id}`,
    helperTextId: `helper-text-${id}`,
    errorMessageId: `error-message-${id}`,
    isInvalid: isInvalid ?? false,
    isRequired: isRequired ?? false
  }

  return (
    <ControllerContext.Provider value={context}>
      <div className={cx('mb-4', className)}>
        <label
          className={cx('block mb-2', isInvalid && 'text-sun-800')}
          htmlFor={context.id}
          ref={ref}
          {...restProps}
        >
          {labelText}
          {isRequired && <span className="text-sun-800">&nbsp;*</span>}
        </label>
        {children}

        {helperText && (
          <p id={context.helperTextId} className="text-sm text-sumi-700 mt-2">
            {helperText}
          </p>
        )}
        {isInvalid && (
          <p
            id={context.errorMessageId}
            className={cx('text-sm text-sun-800', helperText ? 'mt-1' : 'mt-2')}
          >
            {errorMessage}
          </p>
        )}
      </div>
    </ControllerContext.Provider>
  )
})
