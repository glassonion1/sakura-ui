import React from 'react'
import { Radio } from './Radio'
import { InputItem } from './InputItem'

export interface RadioGroupProps
  extends Omit<React.ComponentProps<'fieldset'>, 'onChange'> {
  items: InputItem[]
  onChange: React.ChangeEventHandler<HTMLInputElement>
  label?: string
}

export const RadioGroup = (props: RadioGroupProps) => {
  const { items, onChange, label, className, children, ...newProps } = props
  const groupName = 'radio group ' + Math.random() * 100000

  return (
    <fieldset {...newProps}>
      {label && <legend>{label}</legend>}
      {items.map(({ label, value }, index) => {
        return (
          <div key={index}>
            <Radio
              className=""
              name={groupName}
              value={value}
              onChange={onChange}
              defaultChecked={index === 0}
            >
              {label}
            </Radio>
          </div>
        )
      })}
    </fieldset>
  )
}
