import React from 'react'
import { Checkbox } from '../Checkbox'
import { InputItem } from './InputItem'
import { cx } from '../../utils'

export interface CheckboxGroupProps
  extends Omit<React.ComponentProps<'fieldset'>, 'onChange'> {
  items: InputItem[]
  onChange: React.ChangeEventHandler<HTMLInputElement>
  label: string
}

export const CheckboxGroup = (props: CheckboxGroupProps) => {
  const { items, onChange, label, className, ...newProps } = props
  const groupName = `checkbox_group_${Math.random()}`

  return (
    <fieldset className={cx('mb-4', className)} {...newProps}>
      <legend>{label}</legend>
      {items.map(({ label, value }, index) => {
        return (
          <div key={index}>
            <Checkbox name={groupName} value={value} onChange={onChange}>
              {label}
            </Checkbox>
          </div>
        )
      })}
    </fieldset>
  )
}
