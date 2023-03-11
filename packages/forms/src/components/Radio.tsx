import React from 'react'
import { cx } from '../utils'

export interface Props extends React.ComponentProps<'input'> {}

export const Radio = React.forwardRef<HTMLInputElement, Props>((props, ref) => {
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

  const styleRadio = `
    inline-block
    bg-clip-content
    w-6 h-6
    ml-1
    mr-2
    p-1
    rounded-full
    border
    border-solid
    border-sumi-900
    peer-checked:bg-sea-600
    peer-checked:border-sea-600
  `
  return (
    <label htmlFor={newProps.id} className={cx(style, className)}>
      <input className={styleInput} type="radio" {...newProps} ref={ref} />
      <span className={styleRadio}></span>
      {children}
    </label>
  )
})
