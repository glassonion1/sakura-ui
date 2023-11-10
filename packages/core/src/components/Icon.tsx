import React from 'react'
import { cx } from '../libs/cx'

export interface IconProps extends React.ComponentPropsWithRef<'span'> {
  icon: string
}

export const Icon = React.forwardRef<HTMLElement, IconProps>((props, ref) => {
  const { className, icon, ...restProps } = props

  const style = `
    inline-block
    align-middle
    font-icon
    text-2xl
    font-light
    leading-none
    antialiased
    mb-1
  `

  return (
    <span className={cx(style, className)} {...restProps} ref={ref}>
      {icon}
    </span>
  )
})

Icon.displayName = 'Icon'
