import React from 'react'
import { Checkbox } from './Checkbox'
import { InputItem } from './InputItem'

export interface CheckboxGroupProps
  extends Omit<React.ComponentProps<'fieldset'>, 'onChange'> {
  items: InputItem[]
  onChange: React.ChangeEventHandler<HTMLInputElement>
  label?: string
}

export const CheckboxGroup = (props: CheckboxGroupProps) => {
  const { items, onChange, label, className, children, ...newProps } = props
  const groupName = 'checkbox group ' + Math.random() * 100000

  return (
    <fieldset {...newProps}>
      {label && <legend>{label}</legend>}
      {items.map(({ label, value }, index) => {
        return (
          <div key={index}>
            <Checkbox
              className=""
              name={groupName}
              value={value}
              onChange={onChange}
            >
              {label}
            </Checkbox>
          </div>
        )
      })}
    </fieldset>
  )
}
