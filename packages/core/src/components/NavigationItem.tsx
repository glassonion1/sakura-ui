import React, { type ComponentProps } from 'react'
import {
  cx,
  styleClickable,
  styleHoverUnderline,
  styleFocusRectWithBg
} from '@sakura-ui/helper'
import { Slot } from './Slot'

export type NavigationItemProps = {
  className?: string
} & (
  | ({ asChild?: false } & ComponentProps<'a'>)
  | {
      asChild: true
      children: React.ReactNode
    }
)

export const NavigationItem = React.forwardRef<
  HTMLAnchorElement,
  NavigationItemProps
>((props, ref) => {
  const { asChild, className, children, ...rest } = props

  const Component = asChild ? Slot : 'a'

  // leading 16px * 1.375(snug) + padding top 12px + padding bottom 12px + border * 2 = 48px
  const style = `
      inline-block
      w-fit
      py-3
      text-base
      leading-snug
      ${styleClickable}
      ${styleHoverUnderline}
      ${styleFocusRectWithBg}
    `

  return (
    <Component
      className={cx(style, className)}
      rel="noopener noreferrer"
      {...rest}
      ref={ref}
    >
      {children}
    </Component>
  )
})

NavigationItem.displayName = 'NavigationItem'
