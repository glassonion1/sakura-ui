import React from 'react'
import { cx } from '@sakura-ui/helper'
import { ControllerContext } from './context'

export namespace FieldsetControl {
  export interface Props extends React.ComponentPropsWithRef<'fieldset'> {
    labelText: string
    helperText?: string
    errorMessage?: string
    isInvalid?: boolean
    isRequired?: boolean
    direction?: 'flex-col' | 'flex-row'
  }
}

export const FieldsetControl = React.forwardRef<
  HTMLFieldSetElement,
  FieldsetControl.Props
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
      <fieldset
        className={cx('flex flex-col items-start gap-2', className)}
        ref={ref}
        {...restProps}
      >
        <legend>
          <p className={cx('block text-label', isInvalid && 'text-sun-800')}>
            {labelText}
            {isRequired && <span className="text-sun-800">&nbsp;*</span>}
          </p>
        </legend>
        <div className={cx('inline-flex', styleDirection)}>{children}</div>
        {helperText && (
          <p id={context.helperTextId} className="text-sup text-sumi-700">
            {helperText}
          </p>
        )}
        {isInvalid && (
          <p id={context.errorMessageId} className="text-label text-sun-800">
            {errorMessage}
          </p>
        )}
      </fieldset>
    </ControllerContext.Provider>
  )
})

FieldsetControl.displayName = 'FieldsetControl'
