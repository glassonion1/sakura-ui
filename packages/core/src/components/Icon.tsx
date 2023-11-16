import React from 'react'
import { cx } from '../libs/cx'

export interface IconProps extends React.ComponentPropsWithRef<'span'> {
  icon: string
}

export const Icon = React.forwardRef<HTMLElement, IconProps>((props, ref) => {
  const { className, icon, ...restProps } = props

  const style = `
    inline
    align-middle
    font-icon
    antialiased
  `

  return (
    <span className={cx(style, className)} {...restProps} ref={ref}>
      {icon}
    </span>
  )
})

Icon.displayName = 'Icon'
