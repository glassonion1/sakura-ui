import React from 'react'
import { LabelControl } from '../LabelControl'
import { Textarea } from '../Textarea'

export interface TextareaControlProps
  extends React.ComponentPropsWithoutRef<'textarea'> {
  labelText: string
  helperText?: string
  errorMessage?: string
  isInvalid?: boolean
  isRequired?: boolean
}

export const TextareaControl = React.forwardRef<
  HTMLTextAreaElement,
  TextareaControlProps
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
      <Textarea ref={ref} {...restProps} />
    </LabelControl>
  )
})
