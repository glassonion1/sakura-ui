import React from 'react'
import { Radio } from '../Radio'
import { InputItem } from './InputItem'
import { cx } from '../../utils'

export interface RadioGroupProps
  extends Omit<React.ComponentProps<'fieldset'>, 'onChange'> {
  items: InputItem[]
  onChange: React.ChangeEventHandler<HTMLInputElement>
  label: string
  helperText?: string
}

export const RadioGroup = (props: RadioGroupProps) => {
  const id = React.useId()
  const { items, onChange, label, className, helperText, ...newProps } = props
  const groupName = `radio_group_${Math.random()}`

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
      {helperText && (
        <p id={`helper-text-${id}`} className="text-sm text-sumi-700">
          {helperText}
        </p>
      )}
    </fieldset>
  )
}
