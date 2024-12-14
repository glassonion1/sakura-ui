import React, { type ComponentProps } from 'react'
import { cx, Style } from '@sakura-ui/helper'

export namespace NavigationItem {
  export interface Props<T extends React.ElementType> {
    as?: T
  }
}

export const NavigationItem = <T extends React.ElementType = 'a'>(
  props: NavigationItem.Props<T> &
    Omit<React.ComponentProps<T>, keyof NavigationItem.Props<T>>
) => {
  const { as, className, children, ...rest } = props

  const Component = as || 'a'

  // leading 16px * 1.375(snug) + padding top 12px + padding bottom 12px + border * 2 = 48px
  const style = `
      inline-block
      w-fit
      py-3
      text-base
      leading-snug
      ${Style.clickable}
      ${Style.hoverUnderline}
      ${Style.focusRectWithBg}
    `

  return (
    <Component
      className={cx(style, className)}
      rel="noopener noreferrer"
      {...rest}
    >
      {children}
    </Component>
  )
}

NavigationItem.displayName = 'NavigationItem'
