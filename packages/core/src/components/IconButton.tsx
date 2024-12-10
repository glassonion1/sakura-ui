import { type ComponentWithAs, cx, forwardRef } from '@sakura-ui/helper'
import {
  base,
  getVariantStyle,
  getSizeStyle,
  type ButtonVariant,
  type ButtonSize
} from './buttonStyle'

export namespace IconButton {
  export interface Props {
    variant?: ButtonVariant
    size?: ButtonSize
    iconLayout?: 'left' | 'right'
    icon: string
    rounded?: string
  }
}

export const IconButton: ComponentWithAs<'button', IconButton.Props> =
  forwardRef((props, ref) => {
    const {
      as: Component = 'button',
      variant = 'solid-fill',
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
        <span>
          {iconLayout === 'left' && (
            <span
              className={cx(styleIcon, styleFontSize, children && 'mr-1')}
              aria-hidden={ariaHidden}
            >
              {icon}
            </span>
          )}
          {children}
          {iconLayout === 'right' && (
            <span
              className={cx(styleIcon, styleFontSize, children && 'ml-1')}
              aria-hidden={ariaHidden}
            >
              {icon}
            </span>
          )}
        </span>
      </Component>
    )
  })

IconButton.displayName = 'IconButton'
