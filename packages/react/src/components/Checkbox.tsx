import React from 'react'
import { cx } from '../utils'

export interface CheckboxProps extends React.ComponentProps<'input'> {}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (props, ref) => {
    const { className, children, ...newProps } = props

    const style = `
    flex
    items-center
    text-sm
    cursor-pointer
    py-2
  `
    const styleInput = `
    hidden
    peer
  `

    const styleCheck = `
    inline-block
    bg-clip-content
    w-6 h-6
    ml-1
    mr-2
    rounded
    border
    border-solid
    border-sumi-900
    peer-checked:bg-sea-600
    peer-checked:border-none
    `

    return (
      <label htmlFor={newProps.id} className={cx(style, className)}>
        <input className={styleInput} type="checkbox" {...newProps} ref={ref} />
        <span className={styleCheck}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="w-6"
            height="w-6"
            viewBox="0 0 24 24"
          >
            <path
              d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"
              fill="#fff"
            />
          </svg>
        </span>
        {children}
      </label>
    )
  }
)
