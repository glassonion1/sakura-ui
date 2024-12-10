export namespace Style {
  export const clickable = `
    px-2
    min-h-[calc(44/16*1rem)]
    border
    border-transparent
    rounded-lg
    hover:bg-solid-grey-50
  `

  export const selected = `
    rounded-full
    bg-yellow-50
  `

  const focus = `
    focus-visible:outline
    focus-visible:outline-4
    focus-visible:outline-black
    focus-visible:ring-yellow-300
  `

  export const focusRectCondensed = `
    ${focus}
    focus-visible:-outline-offset-4
    focus-visible:ring-[calc(6/16*1rem)]
    focus-visible:ring-inset
  `

  export const focusRectCondensedWithBg = `
    ${focusRectCondensed}
    focus-visible:bg-yellow-300
  `

  export const focusRect = `
    ${focus}
    focus-visible:outline-offset-[calc(2/16*1rem)]
    focus-visible:ring-[calc(2/16*1rem)]
  `

  export const focusRounded = `
    ${focusRect}
    focus-visible:rounded
  `

  export const focusCard = `
    ${focusRect}
    focus-visible:rounded-2xl
    sm:focus-visible:rounded-3xl
  `

  export const focusRectWithBg = `
    ${focusRect}
    focus-visible:bg-yellow-300
  `

  export const focusRoundedWithBg = `
    ${focusRectWithBg}
    focus-visible:rounded
  `

  export const hoverUnderline = `
    hover:underline
    hover:underline-offset-[calc(3/16*1rem)]
  `

  export const underline = `
    underline
    underline-offset-[calc(3/16*1rem)]
    hover:decoration-[calc(3/16*1rem)]
  `

  export const underlineNoDeco = `
    underline
    underline-offset-[calc(3/16*1rem)]
  `

  export const popover = `
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

  export const popoverPositionBottomRight = `
    absolute
    top-11
    right-0
  `

  export const popoverPositionBottomLeft = `
    absolute
    top-11
    left-0
  `

  export namespace Peer {
    export const focus = `
      peer-focus-visible:outline
      peer-focus-visible:outline-4
      peer-focus-visible:outline-black
      peer-focus-visible:ring-yellow-300
    `

    export const focusRect = `
      ${focus}
      peer-focus-visible:outline-offset-[calc(2/16*1rem)]
      peer-focus-visible:ring-[calc(2/16*1rem)]
    `
  }
}
