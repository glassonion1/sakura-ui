import React from 'react'
import { cx, Style } from '@sakura-ui/helper'
import { Icon } from './Icon'

export namespace Link {
  export interface Props<T extends React.ElementType> {
    as?: T
  }
}

export const Link = <T extends React.ElementType = 'a'>(
  props: Link.Props<T> & Omit<React.ComponentProps<T>, keyof Link.Props<T>>
) => {
  const { as: Component = 'a', className, children, ...restProps } = props

  // Make lines break at each word
  const style = `
    cursor-pointer
    text-blue-1000
    active:text-orange-700
    visited:text-magenta-900
    ${Style.focusRoundedWithBg}
    ${Style.underline}
    disabled:border-sumi-500
    [overflow-wrap:anywhere]
  `

  if (restProps.href?.startsWith('http') || restProps.target === '_blank') {
    return (
      <Component
        className={cx(style, className)}
        target="_blank"
        rel="noopener noreferrer"
        {...restProps}
      >
        <span>{children}</span>
        <Icon opticalSize={16} altText="Opens in new tab" className="ml-0.5">
          open_in_new
        </Icon>
      </Component>
    )
  }

  return (
    <Component className={cx(style, className)} {...restProps}>
      {children}
    </Component>
  )
}

Link.displayName = 'Link'
