import React from 'react'
import {
  cx,
  mod,
  focusableSelector,
  styleClickable,
  styleFocusRoundedWithBg,
  styleHoverUnderline
} from '@sakura-ui/helper'
import { Menu, MenuMobile, Close, CloseMobile } from '@/icons'

export interface MenuButtonProps
  extends React.ComponentPropsWithRef<'button'> {}

export const MenuButton = ({
  className,
  children,
  onChange,
  ...rest
}: MenuButtonProps) => {
  // leading 16px * 1.375(snug) + padding top 12px + padding bottom 12px + border * 2 = 48px
  const styleMenuItem = `
    w-fit
    py-[1px]
    sm:py-3
    text-base
    leading-snug
    ${styleClickable}
    ${styleHoverUnderline}
    ${styleFocusRoundedWithBg}
  `

  const dialogRef = React.useRef<HTMLDialogElement>(null)

  React.useEffect(() => {
    document.body.style.overflow = 'auto'
  }, [])

  const open = () => {
    dialogRef.current?.showModal()
    document.body.style.overflow = 'hidden'
  }
  const close = () => {
    dialogRef.current?.close()
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
    // Focus trap
    if (e.key === 'Tab') {
      e.preventDefault()

      const focusables: HTMLElement[] = Array.from(
        dialogRef.current?.querySelectorAll(focusableSelector) || []
      )
      if (focusables.length === 0) return

      const tabIndex = focusables.findIndex(
        (el) => el === document.activeElement
      )
      // If there is no focused element, focus the first element
      if (tabIndex === -1) {
        focusables[0].focus()
        return
      }
      const nextIndex = mod(tabIndex + (e.shiftKey ? -1 : 1), focusables.length)
      focusables[nextIndex].focus()

      return
    }
    if (e.key === 'Escape') {
      e.preventDefault()

      close()
    }
  }

  const handleOnClose = (_: React.KeyboardEvent<HTMLDialogElement>) => {
    document.body.style.overflow = 'auto'
  }

  const handleOnClick = (e: React.MouseEvent<HTMLElement>) => {
    if ((e.target as HTMLElement).nodeName === 'DIALOG') {
      close()
    }
  }

  return (
    <div className={className}>
      <dialog
        ref={dialogRef}
        className="peer"
        onKeyDown={handleKeyDown}
        onClick={handleOnClick}
        onClose={handleOnClose}
      >
        {children}
      </dialog>
      <button
        className={cx(styleMenuItem, 'flex items-center peer-open:hidden')}
        onClick={open}
        {...rest}
      >
        <MenuMobile size={44} className="inline-block sm:hidden" />
        <Menu size={22} className="hidden sm:inline-block mr-1" />
        <span className="hidden sm:inline">Menu</span>
      </button>
      <button
        className={cx(styleMenuItem, 'peer-open:flex items-center hidden')}
        onClick={close}
        {...rest}
      >
        <CloseMobile size={44} className="inline-block sm:hidden" />
        <Close size={22} className="hidden sm:inline-block mr-1" />
        <span className="hidden sm:inline">Close</span>
      </button>
    </div>
  )
}
