import React from 'react'
import { cx } from '../libs/cx'

export interface IconProps extends React.ComponentPropsWithRef<'span'> {
  icon: string
  srText?: string
}

export const Icon = React.forwardRef<HTMLElement, IconProps>((props, ref) => {
  const { className, icon, srText, ...restProps } = props

  const style = `
    inline
    align-middle
    font-icon
    antialiased
  `

  return (
    <>
      <span
        aria-hidden="true"
        className={cx(style, className)}
        {...restProps}
        ref={ref}
      >
        {icon}
      </span>
      <span className="sr-only">{srText}</span>
    </>
  )
})

Icon.displayName = 'Icon'
