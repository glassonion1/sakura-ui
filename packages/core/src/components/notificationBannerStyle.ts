export type NotificationBannerType =
  | 'success'
  | 'error'
  | 'warning'
  | 'info1'
  | 'info2'

export type NotificationBannerStyle = 'standard' | 'color-chip'

export type NotificationBannerHeadingLevel = 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

// The grid is icon / text / trailing space. Its first row is tall enough for
// the icon so the title lines up with it however short the title is.
// The column widths, paddings and the 48rem breakpoint (md here) come from the
// DADS spec.
export const base = `
  grid
  grid-cols-[calc(24/16*1rem)_1fr_auto]
  grid-rows-[minmax(calc(36/16*1rem),auto)]
  gap-4
  bg-white
  px-4
  pt-2
  pb-6
  text-base
  text-solid-gray-800
  md:grid-cols-[calc(36/16*1rem)_1fr_auto]
  md:gap-x-6
  md:px-6
  md:pt-6
  md:pb-8
`

export const headingStyle = `
  col-span-2
  grid
  grid-cols-[inherit]
  gap-[inherit]
`

export const headingTextStyle = `
  pt-[calc(3/16*1rem)]
  text-h-xxs-m
  text-solid-gray-900
  md:pt-0.5
  md:text-h-xxs
`

export const iconStyle = `
  justify-self-center
  pt-[calc(3/16*1rem)]
  size-7
  max-w-none
  max-h-none
  md:size-11
  md:-my-1
  md:pt-0
`

// The body starts on the next row. On a narrow screen it uses the full width,
// and from md it lines up with the title instead of sitting under the icon.
export const bodyStyle = `
  col-start-1
  col-end-4
  -mt-1
  grid
  gap-y-2
  md:col-start-2
  md:mt-0
`

const standard = `
  rounded-xl
  border-[calc(3/16*1rem)]
`

// The chip is an inset shadow rather than a border so that the border keeps its
// own width. The left padding has to beat the px-4 in base, hence the !.
const colorChip = `
  border-2
  !pl-6
  shadow-[inset_calc(8/16*1rem)_0_0_0]
  md:!pl-10
  md:shadow-[inset_calc(16/16*1rem)_0_0_0]
`

const styles: { [key in NotificationBannerStyle]: string } = {
  standard: standard,
  'color-chip': colorChip
}

// One colour per type, but it lands on three different elements: the border of
// the banner, the icon, and the chip on the left in the color-chip style.
// They cannot share a single text colour, because the body text stays grey.
// Warning is the exception for the chip: its text colour has to stay dark for
// contrast, which reads as a different colour from the icon when used as a
// wide bar, so the chip uses the lighter yellow the spec asks for.
const types: {
  [key in NotificationBannerType]: {
    border: string
    icon: string
    chip: string
  }
} = {
  success: {
    border: 'border-success-2',
    icon: 'text-success-2',
    chip: 'shadow-success-2'
  },
  error: {
    border: 'border-error-1',
    icon: 'text-error-1',
    chip: 'shadow-error-1'
  },
  warning: {
    border: 'border-warning-yellow-2',
    icon: 'text-warning-yellow-2',
    chip: 'shadow-yellow-400'
  },
  info1: {
    border: 'border-blue-900',
    icon: 'text-blue-900',
    chip: 'shadow-blue-900'
  },
  info2: {
    border: 'border-solid-gray-536',
    icon: 'text-solid-gray-536',
    chip: 'shadow-solid-gray-536'
  }
}

export const getNotificationBannerStyle = (style: NotificationBannerStyle) => {
  return styles[style]
}

export const getNotificationBannerBorderStyle = (
  type: NotificationBannerType
) => {
  return types[type].border
}

export const getNotificationBannerIconStyle = (
  type: NotificationBannerType
) => {
  return types[type].icon
}

export const getNotificationBannerChipStyle = (
  type: NotificationBannerType
) => {
  return types[type].chip
}
