export type InputSize = 'lg' | 'md' | 'sm'

export const sizeStyles: { [key in InputSize]: string } = {
  // 16(p-4) * 2 + 22(text-button * leading-snug) + boader * 2 = 56px
  lg: `
    p-4
    text-label
    rounded-lg
    leading-snug
  `,
  // 12(py-3) * 2 + 22(text-button * leading-snug) + boader * 2 = 48px
  md: `
    px-4
    py-3
    text-label
    rounded-lg
    leading-snug
  `,
  // 8(py-2) * 2 + 22(text-button * leading-snug) + boader * 2 = 40px
  sm: `
    px-3
    py-2
    text-label
    rounded-md
    leading-snug
  `
}
