import {
  styleFocusRounded,
  styleFocusRoundedWithBg,
  styleHoverUnderline,
  styleUnderlineNoDeco
} from '@sakura-ui/helper'

// Deprecated, replace to ButtonVariantV2
export type ButtonVariantV1 = 'primary' | 'secondary' | 'tertiary'
export type ButtonVariantV2 = 'solid-fill' | 'outline' | 'text'
export type ButtonVariant = ButtonVariantV1 | ButtonVariantV2

export type ButtonSize = 'lg' | 'md' | 'sm' | 'xs'

export const base = `
  inline-block
  text-button
  text-center
  cursor-pointer
  select-none
  touch-manipulation
  whitespace-nowrap
  outline-offset-2
  border
  border-solid
  border-blue-900
  hover:border-blue-1000
  active:border-blue-1200
  disabled:border-sumi-500
  disabled:cursor-not-allowed
`

const solidFill = `
  text-white
  bg-blue-900
  hover:bg-blue-1000
  active:bg-blue-1200
  disabled:bg-sumi-500
  disabled:text-white
  ${styleHoverUnderline}
  ${styleFocusRounded}
`

const outline = `
  text-blue-900
  hover:text-blue-1000
  active:text-blue-1200
  bg-transparent
  hover:bg-blue-200
  active:bg-blue-300
  disabled:bg-transparent
  disabled:text-sumi-500
  ${styleHoverUnderline}
  ${styleFocusRounded}
`

const text = `
  bg-transparent
  text-blue-900
  hover:text-blue-1000
  active:text-blue-1200
  hover:bg-blue-200
  active:bg-blue-300
  disabled:bg-transparent
  disabled:text-sumi-500
  ${styleUnderlineNoDeco}
  ${styleFocusRoundedWithBg}
`

const styles: { [key in ButtonVariant]: string } = {
  primary: solidFill,
  secondary: outline,
  tertiary: text,
  'solid-fill': solidFill,
  outline: outline,
  text: text
}

const params: { [key in ButtonSize]: string } = {
  // 16(p-4) * 2 + 22(text-button * leading-snug) + boader * 2 = 56px
  lg: `
    p-4
    text-button
    leading-snug
    rounded-lg
  `,
  // 12(py-3) * 2 + 22(text-button * leading-snug) + boader * 2 = 48px
  md: `
    px-4
    py-3
    text-button
    leading-snug
    rounded-lg
  `,
  // 6(py-1.5) * 2 + 22(text-button * leading-snug) + boader * 2 = 36px
  sm: `
    px-3
    py-1.5
    my-1
    text-button
    leading-snug
    rounded-md
  `,
  // 6(py-1.5) * 2 + 14(text-button-sm) + boader * 2 = 28p
  xs: `
    px-2
    py-1.5
    my-2
    text-button-sm
    rounded
  `
}

export const getVariantStyle = (variant: ButtonVariant) => {
  return styles[variant]
}

export const getSizeStyle = (size: ButtonSize) => {
  return params[size]
}
