import React from 'react'
import {
  cx,
  mod,
  focusableSelector,
  styleClickable,
  styleFocusRoundedWithBg,
  styleHoverUnderline
} from '@sakura-ui/helper'
import { Language, LanguageMobile, KeyboadArrowDown } from '@/icons'
import { PopoverMenu, PopoverMenuItem } from './PopoverMenu'

interface Lang {
  code: string
  title: string
  path: string
}

// Tailwind 3.4.5 or higher is required to use anchor-name.
// https://github.com/tailwindlabs/tailwindcss/issues/13818
export interface LangSelectorProps
  extends React.ComponentPropsWithRef<'button'> {
  current: string
  langs: Lang[]
}

export const LangSelector = ({
  current,
  langs,
  className,
  ...restProps
}: LangSelectorProps) => {
  const styleRoot = `
    relative
    group
  `

  const styleAnchorName = `
    [anchor-name:--target]
  `

  // height: text-base(16px)*1.375 + p-3(12px)*2 + border(1px)*2  = 48px
  const styleButton = `
    w-fit
    py-[1px]
    sm:py-3
    text-base
    leading-snug
    ${styleClickable}
    ${styleFocusRoundedWithBg}
    ${styleAnchorName}
    ${styleHoverUnderline}
    flex items-center
  `

  const stylePositionBottomRight = `
    absolute
    top-[anchor(--target_bottom)]
    right-[anchor(--target_right)] 
    position-try-options:flip-block]
    inset-[unset]
  `

  const targetId = React.useId()

  const menuRef = React.useRef<HTMLUListElement>(null)

  const handleKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
    if (e.key === 'Tab') {
      e.preventDefault()

      const focusables: HTMLElement[] = Array.from(
        menuRef.current?.querySelectorAll(focusableSelector) || []
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
  }

  const handleToggle = () => {
    const focusable: HTMLElement | null | undefined =
      menuRef.current?.querySelector(focusableSelector)
    if (!focusable) return
    focusable.focus()
  }

  React.useEffect(() => {
    menuRef.current?.addEventListener('toggle', handleToggle)

    return () => menuRef.current?.removeEventListener('toggle', handleToggle)
  }, [menuRef])

  return (
    <div className={cx(className, styleRoot)}>
      <button
        popoverTarget={targetId}
        type="button"
        className={styleButton}
        {...restProps}
      >
        <Language size={20} className="hidden sm:mt-0.5 sm:inline-block" />
        <span className="hidden sm:mx-1 sm:inline">Language</span>
        <LanguageMobile size={44} className="inline-block sm:hidden" />
        <KeyboadArrowDown
          size={16}
          className="inline-block sm:mt-1 group-[:has(:popover-open)]:rotate-180"
        />
      </button>
      <PopoverMenu
        ref={menuRef}
        id={targetId}
        popover="auto"
        onKeyDown={handleKeyDown}
        className={stylePositionBottomRight}
      >
        {langs.map((lang) => (
          <PopoverMenuItem
            key={lang.code}
            aria-current={current === lang.code}
            href={lang.path}
          >
            {lang.title}
          </PopoverMenuItem>
        ))}
      </PopoverMenu>
    </div>
  )
}

LangSelector.displayName = 'LangSelector'
