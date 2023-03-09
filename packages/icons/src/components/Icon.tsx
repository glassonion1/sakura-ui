import React from 'react'
import { cx } from '../utils'

export interface IconProps extends React.ComponentProps<'span'> {
  icon: string
}

export const Icon = React.forwardRef<HTMLElement, IconProps>((props, ref) => {
  const { className, icon, ...newProps } = props

  const style = `
  inline-block
  font-icon
  text-2xl
  font-light
  leading-none
  antialiased
  `

  return (
    <span className={cx(style, className)} {...newProps} ref={ref}>
      {icon}
    </span>
  )
})
