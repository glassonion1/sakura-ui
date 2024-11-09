import {
  type ComponentWithAs,
  cx,
  forwardRef,
  styleClickable,
  styleHoverUnderline,
  styleFocusRectWithBg
} from '@sakura-ui/helper'

// biome-ignore lint/suspicious/noEmptyInterface:
export interface NavigationItemProps {}

export const NavigationItem: ComponentWithAs<'a', NavigationItemProps> =
  forwardRef((props, ref) => {
    const { as: Component = 'a', href, className, children, ...rest } = props

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
        href={href}
        rel="noopener noreferrer"
        {...rest}
        ref={ref}
      >
        {children}
      </Component>
    )
  })

NavigationItem.displayName = 'NavigationItem'
