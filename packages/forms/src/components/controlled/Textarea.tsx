import React from 'react'
import { cx } from '../../utils'
import { Textarea as Atom } from '../Textarea'

export interface TextareaProps
  extends React.ComponentPropsWithoutRef<'textarea'> {
  label: string
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
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
