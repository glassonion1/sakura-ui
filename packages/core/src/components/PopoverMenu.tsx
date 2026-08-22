import React from 'react'
import { cx, Style } from '@sakura-ui/helper'
import { Icon } from './Icon'

export const PopoverMenu = React.forwardRef<
  HTMLUListElement,
  React.ComponentProps<'ul'>
>((props, ref) => {
  const { className, children, ...rest } = props

  const style = `
    font-normal
    whitespace-nowrap
    ${Style.popover}
  `

  return (
    // biome-ignore lint/a11y/noNoninteractiveElementToInteractiveRole: the WAI-ARIA authoring practices build menus from a ul with role="menu"
    <ul ref={ref} role="menu" className={cx(className, style)} {...rest}>
      {children}
    </ul>
  )
})

PopoverMenu.displayName = 'PopoverMenu'

export const PopoverMenuItem = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentProps<'a'>
>((props, ref) => {
  const { className, children, ...rest } = props

  const style = `
    py-1.5 pl-1.5 pr-4
    flex
    items-center
    gap-x-1.5
    hover:bg-solid-gray-50
    ${Style.focusRectCondensedWithBg}
  `

  const styleSelected = `
    !text-blue-1000
    !bg-blue-100
    font-bold
  `

  const current = rest['aria-current'] ?? false

  return (
    <li role="presentation">
      <a
        aria-current={current}
        ref={ref}
        role="menuitem"
        className={cx(style, current && styleSelected)}
        {...rest}
      >
        <Icon
          opticalSize={20}
          className={`flex-none ${!current && 'invisible'}`}
        >
          check
        </Icon>
        <span className={Style.hoverUnderline}>{children}</span>
      </a>
    </li>
  )
})

PopoverMenuItem.displayName = 'PopoverMenuItem'
