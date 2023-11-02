//   select-none
export const base = `
  text-button
  leading-[22px]
  text-center
  cursor-pointer
  whitespace-nowrap
  outline-offset-2
  border
  border-solid
  border-sea-800
  active:enabled:border-sea-1200
  hover:enabled:border-sea-900
  focus:outline
  focus:outline-2
  focus:outline-wood-600
  disabled:border-sumi-500
  disabled:cursor-not-allowed
`

const primary = `
  text-white-1000
  bg-sea-800
  active:enabled:bg-sea-1200
  hover:enabled:bg-sea-900
  disabled:bg-sumi-500
  disabled:text-white-1000
`

const secondary = `
  text-sea-800
  bg-transparent
  active:enabled:bg-sea-200
  hover:enabled:bg-sea-100
  active:enabled:text-sea-1200
  hover:enabled:text-sea-900
  disabled:text-sumi-500
`

const styles: { [key: string]: string } = {
  primary: primary,
  secondary: secondary
}

export const getVariantStyle = (variant: 'primary' | 'secondary') => {
  return styles[variant]
}

const params: {
  [key: string]: string
} = {
  lg: `
    h-[56px]
    px-4
    text-button
    rounded-lg
  `,
  md: `
    h-[48px]
    px-4
    text-button
    rounded-lg
  `,
  sm: `
    h-[36px]
    px-3
    my-1
    text-button
    rounded-md
  `,
  xs: `
    h-[28px]
    px-2
    my-2
    text-button-sm
    !leading-[14px]
    rounded
  `
}

export const getSizeStyle = (size: 'lg' | 'md' | 'sm' | 'xs') => {
  return params[size]
}
