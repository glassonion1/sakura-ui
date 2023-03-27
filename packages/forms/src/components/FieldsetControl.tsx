import React from 'react'
import { cx } from '../utils'
import { ControllerContext } from './context'

export interface FieldsetControlProps
  extends React.ComponentPropsWithoutRef<'fieldset'> {
  labelText: string
  helperText?: string
  errorMessage?: string
  isInvalid?: boolean
  isRequired?: boolean
  direction?: 'flex-col' | 'flex-row'
}

export const FieldsetControl = React.forwardRef<
  HTMLFieldSetElement,
  FieldsetControlProps
>((props, ref) => {
  const id = React.useId()
  const {
    labelText,
    className,
    helperText,
    errorMessage,
    isInvalid,
    isRequired,
    direction,
    children,
    ...newProps
  } = props

  const groupName = newProps.name ?? `group-${id}`

  const context = {
    groupName: groupName,
    helperTextId: `helper-text-${id}`,
    errorMessageId: `error-message-${id}`,
    isInvalid: isInvalid ?? false,
    isRequired: isRequired ?? false
  }

  const styleDirection = direction ?? 'flex-col'

  return (
    <ControllerContext.Provider value={context}>
      <fieldset className={cx('mb-4', className)} ref={ref} {...newProps}>
        <legend>
          <p className={cx('block mb-2', isInvalid && 'text-sun-800')}>
            {labelText}
            {isRequired && <span className="text-sun-800">&nbsp;*</span>}
          </p>
        </legend>
        <div className={cx('inline-flex', styleDirection)}>{children}</div>
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
      </fieldset>
    </ControllerContext.Provider>
  )
})
