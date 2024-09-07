export const styleClickable = `
  px-2
  min-h-[calc(44/16*1rem)]
  border
  border-transparent
  rounded-lg
  hover:bg-solid-grey-50
`

export const styleSelected = `
  rounded-full
  bg-yellow-50
`

export const styleFocusRect = `
  focus-visible:outline
  focus-visible:outline-4
  focus-visible:outline-black
  focus-visible:outline-offset-[calc(2/16*1rem)]
  focus-visible:ring-[calc(2/16*1rem)]
  focus-visible:ring-yellow-300
`

export const styleFocusRounded = `
  focus-visible:rounded
  ${styleFocusRect}
`

export const styleFocusRectWithBg = `
  focus-visible:bg-yellow-300
  ${styleFocusRect}
`

export const styleFocusRoundedWithBg = `
  focus-visible:rounded
  ${styleFocusRectWithBg}
`

export const styleHoverUnderline = `
  hover:underline
  hover:underline-offset-[calc(3/16*1rem)]
`

export const styleUnderline = `
  underline
  underline-offset-[calc(3/16*1rem)]
  hover:decoration-[calc(3/16*1rem)]
`

export const styleUnderlineNoDeco = `
  underline
  underline-offset-[calc(3/16*1rem)]
`

export const stylePopover = `
  min-w-fit
  w-auto
  py-2
  bg-white
  shadow-1
  rounded-lg
  border
  border-solid-grey-420
  has-[>:nth-child(7)]:rounded-r-none
`

export const stylePopoverPositionBottomRight = `
  absolute
  top-11
  right-0
`

export const stylePopoverPositionBottomLeft = `
  absolute
  top-11
  left-0
`
