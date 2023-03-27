import React from 'react'
import { Checkbox } from '../Checkbox'
import { FieldsetControl } from '../FieldsetControl'
import { InputItem } from './InputItem'

export interface CheckboxGroupProps
  extends Omit<React.ComponentPropsWithoutRef<'fieldset'>, 'onChange'> {
  items: InputItem[]
  onChange: React.ChangeEventHandler<HTMLInputElement>
  labelText: string
  helperText?: string
  errorMessage?: string
  isInvalid?: boolean
  isRequired?: boolean
}

export const CheckboxGroup = React.forwardRef<
  HTMLFieldSetElement,
  CheckboxGroupProps
>((props, ref) => {
  const {
    items,
    onChange,
    className,
    labelText,
    helperText,
    errorMessage,
    isInvalid,
    isRequired,
    ...newProps
  } = props

  return (
    <FieldsetControl
      className={className}
      labelText={labelText}
      helperText={helperText}
      errorMessage={errorMessage}
      isInvalid={isInvalid}
      isRequired={isRequired}
      ref={ref}
      {...newProps}
    >
      {items.map(({ label, value }, index) => {
        return (
          <Checkbox key={index} value={value} onChange={onChange}>
            {label}
          </Checkbox>
        )
      })}
    </FieldsetControl>
  )
})
