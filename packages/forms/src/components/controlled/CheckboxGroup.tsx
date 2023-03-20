import React from 'react'
import { Checkbox } from '../Checkbox'
import { InputItem } from './InputItem'
import { cx } from '../../utils'

export interface CheckboxGroupProps
  extends Omit<React.ComponentProps<'fieldset'>, 'onChange'> {
  items: InputItem[]
  onChange: React.ChangeEventHandler<HTMLInputElement>
  label: string
  helperText?: string
}

export const CheckboxGroup = (props: CheckboxGroupProps) => {
  const id = React.useId()
  const { items, onChange, label, className, helperText, ...newProps } = props
  const groupName = `checkbox_group_${Math.random()}`

  return (
    <fieldset
      className={cx('mb-4', className)}
      aria-describedby={`helper-text-${id}`}
      {...newProps}
    >
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
      {helperText && (
        <p id={`helper-text-${id}`} className="text-sm text-sumi-700">
          {helperText}
        </p>
      )}
    </fieldset>
  )
}
