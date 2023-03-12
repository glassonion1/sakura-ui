import React from 'react'
import { cx } from '../../utils'
import { Text as Atom } from '../Text'

export interface TextProps extends React.ComponentPropsWithoutRef<'input'> {
  label: string
}

export const Text = React.forwardRef<HTMLInputElement, TextProps>(
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
