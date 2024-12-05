import React, { type ComponentProps } from 'react'
import { cx, styleUnderline, styleFocusRoundedWithBg } from '@sakura-ui/helper'
import { Icon } from './Icon'
import { Slot } from './Slot'

export type LinkProps = {
  className?: string
} & (
  | ({ asChild?: false } & ComponentProps<'a'>)
  | {
      asChild: true
      children: React.ReactNode
    }
)

export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  (props, ref) => {
    const { asChild, className, children, ...rest } = props

    const Component = asChild ? Slot : 'a'

    // Make lines break at each word
    const style = `
      cursor-pointer
      text-blue-1000
      active:text-orange-700
      visited:text-magenta-900
      ${styleFocusRoundedWithBg}
      ${styleUnderline}
      disabled:border-sumi-500
      [overflow-wrap:anywhere]
    `

    // This assumes the use of next/link or gatsby-link.
    if (asChild) {
      return (
        <Component className={cx(style, className)} {...rest} ref={ref}>
          {children}
        </Component>
      )
    }

    if (props.href?.startsWith('http') || props.target === '_blank') {
      return (
        <Component
          className={cx(style, className)}
          target="_blank"
          rel="noopener noreferrer"
          {...rest}
          ref={ref}
        >
          <span>{children}</span>
          <Icon opticalSize={16} altText="Opens in new tab" className="ml-0.5">
            open_in_new
          </Icon>
        </Component>
      )
    }
  }
)

Link.displayName = 'Link'
