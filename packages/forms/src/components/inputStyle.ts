export type InputSize = 'lg' | 'md' | 'sm'

export const borderedInputBaseStyles = `
  bg-white
  border
  border-solid
  border-sumi-900
  outline-offset-2
  focus:outline
  focus:outline-2
  focus:outline-wood-500
  disabled:bg-transparent
  disabled:text-sumi-500
  disabled:border-sumi-500
  aria-invalid:border-sun-800
`

// for text input and select
export const borderedInputSizeStyles: { [key in InputSize]: string } = {
  // 16(p-4) * 2 + 22(text-label * leading-snug) + boader * 2 = 56px
  lg: `
    p-4
    text-label
    rounded-lg
    leading-snug
  `,
  // 12(py-3) * 2 + 22(text-label * leading-snug) + boader * 2 = 48px
  md: `
    px-4
    py-3
    text-label
    rounded-lg
    leading-snug
  `,
  // 8(py-2) * 2 + 22(text-label * leading-snug) + boader * 2 = 40px
  sm: `
    px-3
    py-2
    text-label
    rounded-md
    leading-snug
  `
}

export const borderlessInputBaseStyles = `
  inline-block
  cursor-pointer
  border
  border-solid
  border-transparent
`

// for radio and checkbox
export const borderlessInputSizeStyles: { [key in InputSize]: string } = {
  // 16(p-4) * 2 + 22(text-label * leading-snug) + boader(transparent) * 2 = 56px
  lg: `
    pr-8
    py-4
    text-label
    leading-snug
  `,
  // 12(py-3) * 2 + 22(text-label * leading-snug) + boader(transparent) * 2 = 48px
  md: `
    pr-6
    py-3
    text-label
    leading-snug
  `,
  // 8(py-2) * 2 + 22(text-label * leading-snug) + boader(transparent) * 2 = 40px
  sm: `
    pr-4
    py-2
    text-label
    leading-snug
  `
}

// for radio and checkbox
export const iconStyles: { [key in InputSize]: string } = {
  lg: 'w-[22px] h-[22px] mr-2',
  md: 'w-[18px] h-[18px] mr-1.5',
  sm: 'w-[18px] h-[18px] mr-1'
}
