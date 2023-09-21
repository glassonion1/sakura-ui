import React from 'react'
import { cx } from '../utils/class'
import { ControllerContext } from './context'

export interface FieldsetControlProps
  extends React.ComponentPropsWithRef<'fieldset'> {
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
    ...restProps
  } = props

  const groupName = restProps.name ?? `group-${id}`

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
      <fieldset className={cx('mb-4', className)} ref={ref} {...restProps}>
        <legend>
          <p
            className={cx('block mb-2 text-label', isInvalid && 'text-sun-800')}
          >
            {labelText}
            {isRequired && <span className="text-sun-800">&nbsp;*</span>}
          </p>
        </legend>
        <div className={cx('inline-flex', styleDirection)}>{children}</div>
        {helperText && (
          <p id={context.helperTextId} className="text-sup text-sumi-700 mt-2">
            {helperText}
          </p>
        )}
        {isInvalid && (
          <p
            id={context.errorMessageId}
            className={cx(
              'text-sup text-sun-800',
              helperText ? 'mt-1' : 'mt-2'
            )}
          >
            {errorMessage}
          </p>
        )}
      </fieldset>
    </ControllerContext.Provider>
  )
})

FieldsetControl.displayName = 'FieldsetControl'
