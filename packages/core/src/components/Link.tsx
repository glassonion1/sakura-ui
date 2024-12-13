import { type ComponentWithAs, cx, forwardRef, Style } from '@sakura-ui/helper'
import { Icon } from './Icon'

export namespace Link {
  // biome-ignore lint/suspicious/noEmptyInterface: no error
  export interface Props {}
}

export const Link: ComponentWithAs<'a', Link.Props> = forwardRef(
  (props, ref) => {
    const { as: Component = 'a', className, children, ...rest } = props

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
    return (
      <Component className={cx(style, className)} {...rest} ref={ref}>
        {children}
      </Component>
    )
  }
)

Link.displayName = 'Link'
