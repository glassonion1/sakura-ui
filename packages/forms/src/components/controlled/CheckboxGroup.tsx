import React from 'react'
import { Checkbox } from '../Checkbox'
import { FieldsetControl } from '../FieldsetControl'
import type { InputItem } from './InputItem'
import type { InputSize } from '../inputStyle'

export interface CheckboxGroupProps
  extends Omit<React.ComponentPropsWithRef<'fieldset'>, 'onChange'> {
  items: InputItem[]
  onChange: React.ChangeEventHandler<HTMLInputElement>
  labelText: string
  helperText?: string
  errorMessage?: string
  isInvalid?: boolean
  isRequired?: boolean
  size?: InputSize
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
    size,
    ...restProps
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
      {...restProps}
    >
      {items.map(({ label, value }) => {
        return (
          <Checkbox
            key={`${label}-${value}`}
            size={size}
            value={value}
            onChange={onChange}
          >
            {label}
          </Checkbox>
        )
      })}
    </FieldsetControl>
  )
})

CheckboxGroup.displayName = 'CheckboxGroup'
