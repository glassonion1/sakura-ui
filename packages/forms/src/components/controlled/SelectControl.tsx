import React from 'react'
import { LabelControl } from '../LabelControl'
import { Select } from '../Select'

export interface SelectControlProps
  extends React.ComponentPropsWithRef<'select'> {
  labelText: string
  helperText?: string
  errorMessage?: string
  isInvalid?: boolean
  isRequired?: boolean
}

export const SelectControl = React.forwardRef<
  HTMLSelectElement,
  SelectControlProps
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
      <Select ref={ref} {...restProps} />
    </LabelControl>
  )
})

SelectControl.displayName = 'SelectControl'
