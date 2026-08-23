import React from 'react'
import { cx, Style } from '@sakura-ui/helper'
import { Icon } from './Icon'

// Make lines break at each word
export const linkStyle = `
  cursor-pointer
  text-blue-1000
  active:text-orange-700
  visited:text-magenta-900
  ${Style.focusRoundedWithBg}
  ${Style.underline}
  disabled:border-solid-gray-500
  [overflow-wrap:anywhere]
`

export namespace Link {
  export interface Props<T extends React.ElementType> {
    as?: T
  }
}

/**
 * A link that opens elsewhere must not hand the opener to the page it opens.
 * Merged with what the caller asked for rather than replacing it, so a
 * `rel="nofollow"` does not take `noopener` away with it.
 */
const externalRel = (rel: unknown): string =>
  Array.from(
    new Set([
      'noopener',
      'noreferrer',
      ...String(rel ?? '')
        .split(/\s+/)
        .filter(Boolean)
    ])
  ).join(' ')

export const Link = <T extends React.ElementType = 'a'>(
  props: Link.Props<T> & Omit<React.ComponentProps<T>, keyof Link.Props<T>>
) => {
  const { as: Component = 'a', className, children, ...restProps } = props
  const style = linkStyle

  if (restProps.href?.startsWith('http') || restProps.target === '_blank') {
    return (
      <Component
        className={cx(style, className)}
        target="_blank"
        {...restProps}
        rel={externalRel(restProps.rel)}
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
