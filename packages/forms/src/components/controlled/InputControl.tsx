import React from 'react'
import { LabelControl } from '../LabelControl'
import { Input } from '../Input'

export interface InputControlProps extends React.ComponentProps<'input'> {
  labelText: string
  helperText?: string
  errorMessage?: string
  isInvalid?: boolean
  isRequired?: boolean
}

export const InputControl = React.forwardRef<
  HTMLInputElement,
  InputControlProps
>((props, ref) => {
  const {
    className,
    labelText,
    helperText,
    errorMessage,
    isInvalid,
    isRequired,
    ...restProps
  } = props

  return (
    <LabelControl
      className={className}
      labelText={labelText}
      helperText={helperText}
      errorMessage={errorMessage}
      isInvalid={isInvalid}
      isRequired={isRequired}
    >
      <Input ref={ref} {...restProps} />
    </LabelControl>
  )
}) as React.ElementType
