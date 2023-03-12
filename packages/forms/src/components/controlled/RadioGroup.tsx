import React from 'react'
import { Radio } from '../Radio'
import { InputItem } from './InputItem'
import { cx } from '../../utils'

export interface RadioGroupProps
  extends Omit<React.ComponentProps<'fieldset'>, 'onChange'> {
  items: InputItem[]
  onChange: React.ChangeEventHandler<HTMLInputElement>
  label: string
}

export const RadioGroup = (props: RadioGroupProps) => {
  const { items, onChange, label, className, ...newProps } = props
  const groupName = `radio_group_${Math.random()}`

  return (
    <fieldset className={cx('mb-4', className)} {...newProps}>
      <legend>{label}</legend>
      {items.map(({ label, value }, index) => {
        return (
          <div key={index}>
            <Radio
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
