import React from 'react'
import { cx } from '../utils'

export interface SelectProps extends React.ComponentPropsWithoutRef<'select'> {}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  (props, ref) => {
    const { className, children, ...newProps } = props

    const style = `
      appearance-none
      text-base
      w-full
      bg-white-100
      border
      border-solid
      border-sumi-900
      py-4 px-4 pr-8
      rounded-[8px]
      focus:outline
      focus:outline-2
      focus:outline-wood-500
    `

    return (
      <div className="inline-block relative">
        <select className={cx(style, props.className)} {...newProps} ref={ref}>
          {children}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="fill-sumi-900"
            height="24"
            width="24"
          >
            <path d="M12 15.05 6.35 9.4 7.4 8.35l4.6 4.6 4.6-4.6 1.05 1.05Z" />
          </svg>
        </div>
      </div>
    )
  }
)
