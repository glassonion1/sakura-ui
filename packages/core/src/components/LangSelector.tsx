import React from 'react'
import {
  cx,
  styleClickable,
  styleFocusRoundedWithBg,
  styleHoverUnderline
} from '@sakura-ui/helper'
import { Language, LanguageMobile, KeyboadArrowDown } from '@/icons'
import { PopoverMenu, PopoverMenuItem } from './PopoverMenu'

const mod = (n: number, m: number): number => ((n % m) + m) % m

interface Lang {
  code: string
  title: string
  path: string
}

// Tailwind 3.4.5 or higher is required to use anchor-name.
// https://github.com/tailwindlabs/tailwindcss/issues/13818
export interface LangSelectorProps extends React.ComponentPropsWithRef<'div'> {
  current: string
  langs: Lang[]
}

export const LangSelector = ({
  current,
  langs,
  className,
  ...rest
}: LangSelectorProps) => {
  const styleRoot = `
    relative
    group
  `

  const styleAnchorName = `
    [anchor-name:--target]
  `

  const styleButton = `
    w-fit
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

  // see: https://stackoverflow.com/questions/71145871/how-to-focus-the-next-input-with-react
  const [currentIndex, setCurrentIndex] = React.useState(0)
  const [menuItemRefs] = React.useState(() =>
    Array.from({ length: langs.length }, () =>
      React.createRef<HTMLAnchorElement>()
    )
  )
  const menuRef = React.useRef<HTMLUListElement>(null)

  const fucus = (index: number) => {
    if (index >= 0) {
      menuItemRefs[index].current?.focus()
    }
    setCurrentIndex(index)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
    let index = currentIndex
    switch (e.key) {
      case 'ArrowUp':
        e.preventDefault()
        menuRef.current?.showPopover()
        index = mod(currentIndex - 1, langs.length)
        fucus(index)
        break
      case 'ArrowDown':
        e.preventDefault()
        menuRef.current?.showPopover()
        index = mod(currentIndex + 1, langs.length)
        fucus(index)
        break
      case 'Tab':
        index = e.shiftKey ? currentIndex - 1 : currentIndex + 1
        setCurrentIndex(index)
        if (index === -1 || index === langs.length) {
          menuRef.current?.hidePopover()
        }
        break
    }
  }

  const handleOnToggle = (_e: React.MouseEvent<HTMLElement>) => {
    fucus(-1)
  }

  return (
    <div className={styleRoot} onKeyDown={handleKeyDown} {...rest}>
      <button
        popoverTarget={targetId}
        type="button"
        onClick={handleOnToggle}
        className={styleButton}
      >
        <Language size={20} className={cx('hidden sm:inline-block')} />
        <span className="hidden sm:mb-0.5 sm:mx-1 sm:inline">Language</span>
        <LanguageMobile size={44} className="inline-block sm:hidden" />
        <KeyboadArrowDown
          size={16}
          className="inline-block sm:mt-0.5 group-[:has(:popover-open)]:rotate-180"
        />
      </button>
      <PopoverMenu
        ref={menuRef}
        id={targetId}
        popover="auto"
        className={stylePositionBottomRight}
      >
        {menuItemRefs.map((ref, index) => (
          <PopoverMenuItem
            key={langs[index].code}
            aria-current={current === langs[index].code}
            ref={ref}
            href={langs[index].path}
          >
            {langs[index].title}
          </PopoverMenuItem>
        ))}
      </PopoverMenu>
    </div>
  )
}

LangSelector.displayName = 'LangSelector'
