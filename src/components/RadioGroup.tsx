import React from 'react'
import { Radio } from './Radio'

interface Item {
  label: string
  value: string
}

export interface RadioGroupProps {
  name: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  items: Item[]
}

export const RadioGroup = ({ name, items, onChange }: RadioGroupProps) => {
  return (
    <>
      {items.map(({ label, value }, index) => {
        const itemId = name + value

        return (
          <div key={index}>
            <Radio
              className="mb-6 ml-4"
              id={itemId}
              name={name}
              value={value}
              onChange={onChange}
              defaultChecked={index === 0}
            >
              {label}
            </Radio>
          </div>
        )
      })}
    </>
  )
}
