import React from 'react'
import { cx } from '../utils/class'
import { ControllerContext } from './context'

export interface LabelControlProps
  extends React.ComponentPropsWithRef<'label'> {
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

  const styleHelp = `
    text-label text-sumi-700
  `

  const styleError = `
    text-label text-sun-800
  `

  return (
    <ControllerContext.Provider value={context}>
      <div className={cx('mb-4', className)}>
        <label
          className={cx('block mb-2 text-label', isInvalid && 'text-sun-800')}
          htmlFor={context.id}
          ref={ref}
          {...restProps}
        >
          {labelText}
          {isRequired && (
            <span className="text-label text-sun-800">&nbsp;*</span>
          )}
        </label>
        {helperText && (
          <p id={context.helperTextId} className={cx(styleHelp, 'mb-2')}>
            {helperText}
          </p>
        )}
        {children}
        {isInvalid && (
          <p
            id={context.errorMessageId}
            className={cx(styleError, helperText ? 'mt-1' : 'mt-2')}
          >
            {errorMessage}
          </p>
        )}
      </div>
    </ControllerContext.Provider>
  )
})

LabelControl.displayName = 'LabelControl'
