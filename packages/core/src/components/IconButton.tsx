import { cx } from '../libs/cx'
import type { ComponentWithAs } from '../types/component'
import { forwardRef } from '../libs/forward-ref'
import { base, getVariantStyle, getSizeStyle } from './buttonStyle'

export interface IconButtonProps {
  variant?: 'primary' | 'secondary'
  size?: 'lg' | 'md' | 'sm' | 'xs'
  iconLayout?: 'left' | 'right'
  icon: string
  rounded?: string
}

export const IconButton: ComponentWithAs<'button', IconButtonProps> =
  forwardRef((props, ref) => {
    const {
      as: Component = 'button',
      variant = 'primary',
      size = 'lg',
      iconLayout = 'left',
      icon,
      rounded,
      className,
      children,
      ...restProps
    } = props

    const styleFontSize = `${size === 'xs' ? 'scale-105' : 'scale-125'}`

    const styleIcon = `
      inline-block
      align-middle
      mb-1
      font-icon
      font-light
      leading-[0px]      
      antialiased
    `

    const styleRounded = `${rounded ? 'aspect-square !rounded-full !py-0' : ''}`

    // When text is specified on a button, set the 'aria-hidden' attribute of the icon to true.
    const ariaHidden = !!children

    return (
      <Component
        className={cx(
          base,
          getVariantStyle(variant),
          getSizeStyle(size),
          styleRounded,
          className
        )}
        {...restProps}
        ref={ref}
      >
        {iconLayout === 'left' && (
          <span
            className={cx(styleIcon, styleFontSize)}
            aria-hidden={ariaHidden}
          >
            {icon}
          </span>
        )}
        {children && <span className="mx-1">{children}</span>}
        {iconLayout === 'right' && (
          <span
            className={cx(styleIcon, styleFontSize)}
            aria-hidden={ariaHidden}
          >
            {icon}
          </span>
        )}
      </Component>
    )
  })

IconButton.displayName = 'IconButton'
