import React from 'react'
import { cx } from '../utils'

export type Props = React.ComponentPropsWithoutRef<'select'>

export const Select = React.forwardRef<HTMLSelectElement, Props>(
  (props, ref) => {
    const { className, children, ...newProps } = props

    const style = `
    block
    appearance-none
    w-full
    bg-white-100
    border
    border-solid
    border-sea-600
    py-4 px-4 pr-8
    rounded-[4px]
    focus:outline
    focus:outline-2
    focus:outline-wood-500
  `
    return (
      <div className="inline-block relative">
        <select className={cx(style, props.className)} {...newProps} ref={ref}>
          {props.children}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
          <svg
            className="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </div>
      </div>
    )
  }
)
