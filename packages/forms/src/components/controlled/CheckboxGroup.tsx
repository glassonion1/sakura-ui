import React, { type ComponentPropsWithRef } from 'react'
import { Checkbox } from '../Checkbox'
import { FieldsetControl } from '../FieldsetControl'
import type { InputItem } from './InputItem'
import type { InputSize } from '../inputStyle'

export namespace CheckboxGroup {
  export interface Props
    extends Omit<ComponentPropsWithRef<'fieldset'>, 'onChange'> {
    items: InputItem[]
    onChange: React.ChangeEventHandler<HTMLInputElement>
    labelText: string
    helperText?: string
    errorMessage?: string
    isInvalid?: boolean
    isRequired?: boolean
    size?: InputSize
  }
}

export const CheckboxGroup = (props: CheckboxGroup.Props) => {
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
}

CheckboxGroup.displayName = 'CheckboxGroup'
