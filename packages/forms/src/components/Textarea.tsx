import React from 'react'
import { cx } from '../utils'

export interface TextareaProps
  extends React.ComponentPropsWithoutRef<'textarea'> {
  label?: string
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (props, ref) => {
    const { label, className, children, ...newProps } = props

    const style = `
      p-4
      rounded-lg
      border
      border-solid
      border-sumi-900
      focus:outline
      focus:outline-2
      focus:outline-wood-500
      disabled:bg-sumi-500
      disabled:text-white-1000
      disabled:border
      disabled:border-solid
      disabled:border-sumi-500
    `

    const elem = (
      <textarea className={cx(style, className)} {...newProps} ref={ref}>
        {children}
      </textarea>
    )

    return (
      <>
        {label ? (
          <label>
            <div className="mb-2">{label}</div>
            {elem}
          </label>
        ) : (
          elem
        )}
      </>
    )
  }
)
