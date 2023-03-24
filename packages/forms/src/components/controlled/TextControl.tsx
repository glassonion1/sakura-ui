import React from 'react'
import { LabelControl } from '../LabelControl'
import { Text } from '../Text'

export interface TextControlProps
  extends React.ComponentPropsWithoutRef<'input'> {
  labelText: string
  helperText?: string
  errorMessage?: string
  isInvalid?: boolean
  isRequired?: boolean
}

export const TextControl = React.forwardRef<HTMLInputElement, TextControlProps>(
  (props, ref) => {
    const {
      className,
      labelText,
      helperText,
      errorMessage,
      isInvalid,
      isRequired,
      ...newProps
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
        <Text ref={ref} {...newProps} />
      </LabelControl>
    )
  }
)
