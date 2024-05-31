export type ButtonVariant = 'primary' | 'secondary' | 'tertiary'
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
  border-sea-800
  active:border-sea-1200
  hover:border-sea-900
  focus:outline
  focus:outline-2
  focus:outline-wood-600
  disabled:border-sumi-500
  disabled:cursor-not-allowed
`

const primary = `
  text-white-1000
  bg-sea-800
  active:bg-sea-1200
  hover:bg-sea-900
  disabled:bg-sumi-500
  disabled:text-white-1000
`

const secondary = `
  text-sea-800
  bg-transparent
  active:bg-sea-200
  hover:bg-sea-100
  active:text-sea-1200
  hover:text-sea-900
  disabled:text-sumi-500
  disabled:bg-transparent
`

const tertiary = `
    bg-transparent
    text-blue-900
    underline
    hover:bg-blue-200
    hover:text-blue-1000
    active:bg-blue-300
    active:text-blue-1200
    disabled:bg-transparent
    disabled:text-solid-grey-420
  `

const styles: { [key in ButtonVariant]: string } = {
  primary: primary,
  secondary: secondary,
  tertiary: tertiary
}

const params: { [key in ButtonSize]: string } = {
  lg: `
    p-4
    text-button
    rounded-lg
  `,
  md: `
    px-4
    py-3
    text-button
    rounded-lg
  `,
  sm: `
    px-3
    py-1.5
    my-1
    text-button
    rounded-md
  `,
  xs: `
    px-2
    py-[7px]
    my-2
    text-button-sm
    !leading-[14px]
    rounded
  `
}

export const getVariantStyle = (variant: ButtonVariant) => {
  return styles[variant]
}

export const getSizeStyle = (size: ButtonSize) => {
  return params[size]
}
