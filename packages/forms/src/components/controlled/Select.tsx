import React from 'react'
import { cx } from '../../utils'
import { Select as Atom } from '../Select'

export interface SelectProps extends React.ComponentPropsWithoutRef<'select'> {
  label: string
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  (props, ref) => {
    const { label, className, ...newProps } = props

    return (
      <div className={cx('mb-4', className)}>
        <label>
          <div className="block mb-2">{label}</div>
          <Atom ref={ref} {...newProps} />
        </label>
      </div>
    )
  }
)
