import clsx from 'clsx'
import React, { ChangeEvent } from 'react'

export type Props = React.ComponentProps<'input'> & {}

export const Radio = (props: Props) => {
  const { className, children, ...newProps } = props

  const style = `
    flex
    items-center
    text-sm
    cursor-pointer
  `
  const styleInput = `
    hidden
    peer
  `

  const styleRadio = `
    inline-block
    bg-clip-content
    w-6 h-6
    mr-2
    p-1
    rounded-full
    border
    border-solid
    border-sumi-900
    peer-checked:bg-sea-600
  `
  return (
    <label htmlFor={newProps.id} className={clsx(style, className)}>
      <input className={styleInput} type="radio" {...newProps} />
      <span className={styleRadio}></span>
      {children}
    </label>
  )
}
