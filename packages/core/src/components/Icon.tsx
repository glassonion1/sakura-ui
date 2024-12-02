import React from 'react'
import { cx } from '@sakura-ui/helper'

export interface IconProps extends React.ComponentPropsWithRef<'span'> {
  opticalSize?: 16 | 20 | 24 | 40 | 44 | 48
  altText?: string
}

export const Icon = React.forwardRef<HTMLElement, IconProps>((props, ref) => {
  const { className, altText = '', opticalSize = 24, children, ...rest } = props

  const size = {
    16: '!text-[16px]',
    20: '!text-[20px]',
    24: '!text-[24px]',
    40: '!text-[40px]',
    44: '!text-[44px]',
    48: '!text-[48px]'
  }

  const fontSize = size[opticalSize]

  // @see: https://developers.google.com/fonts/docs/material_symbols
  //.material-symbols-outlined {
  //  font-family: 'Material Symbols Outlined';
  //  font-weight: normal;
  //  font-style: normal;
  //  font-size: 24px;  /* Preferred icon size */
  //  display: inline-block;
  //  line-height: 1;
  //  text-transform: none;
  //  letter-spacing: normal;
  //  word-wrap: normal;
  //  white-space: nowrap;
  //  direction: ltr;
  //}

  const style = `
    font-icon
    font-light
    inline-block
    leading-none
    align-middle
    whitespace-nowrap
  `

  return (
    <>
      <span
        aria-hidden="true"
        className={cx(className, fontSize, style)}
        {...rest}
        ref={ref}
      >
        {children}
      </span>
      <span className="sr-only">{altText}</span>
    </>
  )
})

Icon.displayName = 'Icon'
