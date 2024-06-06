import { cx } from '../libs/cx'
import type { ComponentWithAs } from '../types/component'
import { forwardRef } from '../libs/forward-ref'

// biome-ignore lint/suspicious/noEmptyInterface:
export interface LinkProps {}

export const Link: ComponentWithAs<'a', LinkProps> = forwardRef(
  (props, ref) => {
    const {
      as: Component = 'a',
      href,
      className,
      children,
      ...restProps
    } = props

    const styleUnderLine = `
      underline
      underline-offset-[0.1875rem]
      hover:decoration-4
    `

    // Make lines break at each word
    const style = `
      rounded-sm
      cursor-pointer
      text-blue-1000
      active:text-orange-700
      visited:text-magenta-900
      focus:outline
      focus:outline-2
      focus:outline-wood-500
      disabled:border-sumi-500
      [overflow-wrap:anywhere]
    `

    const styleIcon = `
      inline
      align-middle
      font-icon
      font-light
      antialiased
    `

    const styleIcon2 = `
      align-middle
      ml-0.5
      text-sumi-700
      font-icon
      font-light
      leading-4
      antialiased
    `

    if (href?.startsWith('http')) {
      return (
        <Component
          className={cx(style, styleUnderLine, className)}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          {...restProps}
          ref={ref}
        >
          <span>{children}</span>&nbsp;
          <span className={cx(styleIcon)} aria-hidden="true">
            open_in_new
          </span>
          <span className="sr-only">Opens in new tab</span>
        </Component>
      )
    }
    return (
      <Component
        className={cx(style, styleUnderLine, className)}
        href={href}
        {...restProps}
        ref={ref}
      >
        {children}
      </Component>
    )
  }
)

Link.displayName = 'Link'
