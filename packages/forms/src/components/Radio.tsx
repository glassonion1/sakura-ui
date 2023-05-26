import React from 'react'
import { cx } from '../utils/class'
import { ControllerContext } from './context'

export interface Props extends React.ComponentPropsWithoutRef<'input'> {}

export const Radio = React.forwardRef<HTMLInputElement, Props>((props, ref) => {
  const { className, children, ...newProps } = props
  const ctx = React.useContext(ControllerContext)
  if (ctx.isRequired) {
    newProps.required = true
  }
  if (ctx.groupName) {
    newProps.name = ctx.groupName
  }

  const style = `
    inline-block
    text-sm
    cursor-pointer
    py-2
    mr-4
    
  `
  const styleInput = `
    peer
    hidden
  `

  const styleRadio = `
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
    peer-disabled:border-sumi-500
  `
  return (
    <label htmlFor={newProps.id} className={cx(style, className)}>
      <span className="flex items-center">
        <input
          className={styleInput}
          type="radio"
          aria-describedby={ctx.helperTextId}
          aria-errormessage={ctx.errorMessageId}
          aria-invalid={ctx.isInvalid ?? false}
          {...newProps}
          ref={ref}
        />
        <span className={styleRadio}></span>
        <span className="peer-disabled:text-sumi-500">{children}</span>
      </span>
    </label>
  )
})
