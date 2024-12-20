import React, { type ComponentPropsWithRef } from 'react'
import { cx } from '@sakura-ui/helper'
import { ControllerContext } from './context'

export namespace LabelControl {
  export interface Props extends ComponentPropsWithRef<'label'> {
    labelText: string
    helperText?: string
    errorMessage?: string
    isInvalid?: boolean
    isRequired?: boolean
  }
}

export const LabelControl = (props: LabelControl.Props) => {
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
    text-label text-solid-gray-700
  `

  const styleError = `
    text-label text-red-800
  `

  return (
    <ControllerContext.Provider value={context}>
      <div className={cx('flex flex-col items-start gap-2', className)}>
        <label
          className={cx('block text-label', isInvalid && 'text-red-800')}
          htmlFor={context.id}
          {...restProps}
        >
          {labelText}
          {isRequired && (
            <span className="text-label text-red-800">&nbsp;*</span>
          )}
        </label>
        {helperText && (
          <p id={context.helperTextId} className={styleHelp}>
            {helperText}
          </p>
        )}
        {children}
        {isInvalid && (
          <p id={context.errorMessageId} className={styleError}>
            {errorMessage}
          </p>
        )}
      </div>
    </ControllerContext.Provider>
  )
}

LabelControl.displayName = 'LabelControl'
