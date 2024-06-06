import React from 'react'
import { Radio } from '../Radio'
import { FieldsetControl } from '../FieldsetControl'
import type { InputItem } from './InputItem'
import { InputSize } from '../inputStyle'

export interface RadioGroupProps
  extends Omit<React.ComponentPropsWithRef<'fieldset'>, 'onChange'> {
  items: InputItem[]
  onChange: React.ChangeEventHandler<HTMLInputElement>
  labelText: string
  helperText?: string
  errorMessage?: string
  isInvalid?: boolean
  isRequired?: boolean
  defaultValue?: string
  size?: InputSize
}

export const RadioGroup = React.forwardRef<
  HTMLFieldSetElement,
  RadioGroupProps
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
    defaultValue,
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
          <Radio
            key={`${label}-${value}`}
            size={size}
            value={value}
            onChange={onChange}
            defaultChecked={defaultValue === value}
          >
            {label}
          </Radio>
        )
      })}
    </FieldsetControl>
  )
})

RadioGroup.displayName = 'RadioGroup'
