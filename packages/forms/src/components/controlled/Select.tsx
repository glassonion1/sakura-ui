import React from 'react'
import { cx } from '../../utils'
import { Select as Atom } from '../Select'

export interface SelectProps extends React.ComponentPropsWithoutRef<'select'> {
  label: string
  helperText?: string
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  (props, ref) => {
    const id = React.useId()
    const { label, className, helperText, ...newProps } = props

    return (
      <div className={cx('mb-4', className)}>
        <label className="block mb-2" htmlFor={`select-${id}`}>
          {label}
        </label>
        <Atom
          id={`select-${id}`}
          ref={ref}
          aria-describedby={`helper-text-${id}`}
          {...newProps}
        />
        {helperText && (
          <p id={`helper-text-${id}`} className="text-sm text-sumi-700">
            {helperText}
          </p>
        )}
      </div>
    )
  }
)
