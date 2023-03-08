import React from 'react'
import { cx } from '../utils'

export interface IconProps extends React.ComponentProps<'span'> {
  icon: string
}

export const Icon = React.forwardRef<HTMLElement, IconProps>((props, ref) => {
  const { className, icon, ...newProps } = props

  return (
    <span
      className={cx(
        "inline-block font-['Material Symbols Outlined']",
        className
      )}
      {...newProps}
      ref={ref}
    >
      {icon}
    </span>
  )
})
