import React from 'react'
import {
  cx,
  styleClickable,
  styleFocusRoundedWithBg,
  styleHoverUnderline
} from '@sakura-ui/helper'
import { Icon } from './Icon'
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
    flex
    w-fit
    items-center
    sm:gap-1
    ${styleClickable}
    ${styleFocusRoundedWithBg}
    ${styleAnchorName}
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
        menuRef.current?.hidePopover()
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
        <Icon opticalSize={20} className="hidden sm:inline-block">
          language
        </Icon>
        <span
          className={cx('hidden sm:inline-block mb-0.5', styleHoverUnderline)}
        >
          Language
        </span>
        <IconLanguageMobile className="sm:hidden" />
        <Icon
          opticalSize={20}
          className="group-[:has(:popover-open)]:rotate-180"
        >
          keyboard_arrow_down
        </Icon>
      </button>
      <PopoverMenu
        ref={menuRef}
        id={targetId}
        popover="auto"
        className={stylePositionBottomRight}
      >
        {menuItemRefs.map((ref, index) => (
          <PopoverMenuItem
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

const IconLanguageMobile = (props: React.ComponentProps<'svg'>) => {
  const { className, ...rest } = props
  return (
    <svg
      aria-label={`${rest['aria-label'] ?? 'Language'}`}
      className={className}
      fill="none"
      height="44"
      role="img"
      viewBox="0 0 44 44"
      width="44"
      {...rest}
    >
      <g>
        <path
          d="M22 27.0669C20.3718 27.0669 18.8353 26.7548 17.3906 26.1306C15.9459 25.5064 14.6859 24.6567 13.6106 23.5814C12.5353 22.506 11.6855 21.246 11.0613 19.8013C10.4371 18.3566 10.125 16.8202 10.125 15.192C10.125 13.5509 10.4371 12.0113 11.0613 10.573C11.6855 9.1347 12.5353 7.87788 13.6106 6.80255C14.6859 5.72724 15.9459 4.87749 17.3906 4.2533C18.8353 3.62909 20.3718 3.31699 22 3.31699C23.641 3.31699 25.1806 3.62909 26.6189 4.2533C28.0572 4.87749 29.314 5.72724 30.3894 6.80255C31.4647 7.87788 32.3144 9.1347 32.9386 10.573C33.5628 12.0113 33.8749 13.5509 33.8749 15.192C33.8749 16.8202 33.5628 18.3566 32.9386 19.8013C32.3144 21.246 31.4647 22.506 30.3894 23.5814C29.314 24.6567 28.0572 25.5064 26.6189 26.1306C25.1806 26.7548 23.641 27.0669 22 27.0669ZM22 25.1655C22.6378 24.3194 23.1747 23.466 23.6106 22.6054C24.0465 21.7448 24.4014 20.8041 24.6755 19.7833H19.3245C19.6145 20.8362 19.9735 21.7929 20.4014 22.6535C20.8293 23.5141 21.3621 24.3514 22 25.1655ZM19.5793 24.8218C19.1002 24.1343 18.6699 23.3526 18.2885 22.4768C17.9071 21.601 17.6106 20.7031 17.399 19.7833H13.1586C13.8189 21.0814 14.7043 22.1719 15.8149 23.055C16.9255 23.938 18.1803 24.5269 19.5793 24.8218ZM24.4206 24.8218C25.8196 24.5269 27.0745 23.938 28.1851 23.055C29.2956 22.1719 30.1811 21.0814 30.8413 19.7833H26.6009C26.3493 20.7112 26.0328 21.613 25.6514 22.4888C25.27 23.3646 24.8597 24.1423 24.4206 24.8218ZM12.3726 17.9083H17.0192C16.9407 17.4436 16.8838 16.9881 16.8486 16.5417C16.8133 16.0954 16.7957 15.6455 16.7957 15.192C16.7957 14.7384 16.8133 14.2885 16.8486 13.8422C16.8838 13.3959 16.9407 12.9403 17.0192 12.4756H12.3726C12.2524 12.9003 12.1602 13.3418 12.0961 13.8001C12.032 14.2584 12 14.7224 12 15.192C12 15.6615 12.032 16.1255 12.0961 16.5838C12.1602 17.0421 12.2524 17.4836 12.3726 17.9083ZM18.8942 17.9083H25.1058C25.1843 17.4436 25.2412 16.9921 25.2764 16.5537C25.3117 16.1154 25.3293 15.6615 25.3293 15.192C25.3293 14.7224 25.3117 14.2685 25.2764 13.8302C25.2412 13.3919 25.1843 12.9403 25.1058 12.4756H18.8942C18.8157 12.9403 18.7588 13.3919 18.7235 13.8302C18.6883 14.2685 18.6706 14.7224 18.6706 15.192C18.6706 15.6615 18.6883 16.1154 18.7235 16.5537C18.7588 16.9921 18.8157 17.4436 18.8942 17.9083ZM26.9807 17.9083H31.6274C31.7476 17.4836 31.8397 17.0421 31.9038 16.5838C31.9679 16.1255 32 15.6615 32 15.192C32 14.7224 31.9679 14.2584 31.9038 13.8001C31.8397 13.3418 31.7476 12.9003 31.6274 12.4756H26.9807C27.0592 12.9403 27.1161 13.3959 27.1514 13.8422C27.1866 14.2885 27.2043 14.7384 27.2043 15.192C27.2043 15.6455 27.1866 16.0954 27.1514 16.5417C27.1161 16.9881 27.0592 17.4436 26.9807 17.9083ZM26.6009 10.6006H30.8413C30.1731 9.28652 29.2936 8.19596 28.2031 7.32896C27.1125 6.46198 25.8517 5.86903 24.4206 5.55011C24.8998 6.27767 25.326 7.07335 25.6994 7.93714C26.0729 8.80094 26.3733 9.68877 26.6009 10.6006ZM19.3245 10.6006H24.6755C24.3854 9.55577 24.0204 8.59302 23.5805 7.71239C23.1406 6.83179 22.6138 6.00046 22 5.21839C21.3862 6.00046 20.8593 6.83179 20.4194 7.71239C19.9795 8.59302 19.6145 9.55577 19.3245 10.6006ZM13.1586 10.6006H17.399C17.6266 9.68877 17.9271 8.80094 18.3005 7.93714C18.6739 7.07335 19.1002 6.27767 19.5793 5.55011C18.1402 5.86903 16.8774 6.46399 15.7908 7.33499C14.7043 8.20599 13.8269 9.29454 13.1586 10.6006Z"
          fill="currentColor"
        />
      </g>
      <path
        d="M34.0409 35.272H37.1369V39.544C36.6809 39.696 36.2129 39.808 35.7329 39.88C35.2609 39.96 34.7209 40 34.1129 40C33.2409 40 32.5009 39.824 31.8929 39.472C31.2929 39.12 30.8329 38.616 30.5129 37.96C30.2009 37.304 30.0449 36.516 30.0449 35.596C30.0449 34.7 30.2209 33.924 30.5729 33.268C30.9249 32.612 31.4289 32.104 32.0849 31.744C32.7489 31.376 33.5529 31.192 34.4969 31.192C34.9689 31.192 35.4209 31.24 35.8529 31.336C36.2849 31.424 36.6849 31.548 37.0529 31.708L36.5849 32.788C36.2889 32.652 35.9569 32.54 35.5889 32.452C35.2289 32.356 34.8489 32.308 34.4489 32.308C33.8169 32.308 33.2689 32.444 32.8049 32.716C32.3489 32.98 31.9969 33.36 31.7489 33.856C31.5089 34.344 31.3889 34.928 31.3889 35.608C31.3889 36.248 31.4889 36.816 31.6889 37.312C31.8889 37.808 32.2049 38.196 32.6369 38.476C33.0689 38.756 33.6329 38.896 34.3289 38.896C34.5609 38.896 34.7649 38.888 34.9409 38.872C35.1169 38.848 35.2769 38.824 35.4209 38.8C35.5729 38.768 35.7169 38.74 35.8529 38.716V36.388H34.0409V35.272Z"
        fill="currentColor"
      />
      <path
        d="M28.1804 39.88H26.6084L22.2764 32.956H22.2284C22.2364 33.116 22.2444 33.288 22.2524 33.472C22.2684 33.656 22.2804 33.852 22.2884 34.06C22.2964 34.26 22.3044 34.468 22.3124 34.684C22.3204 34.892 22.3244 35.104 22.3244 35.32V39.88H21.1484V31.312H22.7084L27.0284 38.2H27.0644C27.0564 38.08 27.0484 37.932 27.0404 37.756C27.0324 37.572 27.0244 37.376 27.0164 37.168C27.0164 36.96 27.0124 36.748 27.0044 36.532C26.9964 36.316 26.9884 36.112 26.9804 35.92V31.312H28.1804V39.88Z"
        fill="currentColor"
      />
      <path
        d="M18.6363 39.88L17.7242 37.408H14.4123L13.5002 39.88H12.1562L15.4083 31.276H16.7523L19.9923 39.88H18.6363ZM16.5002 33.868C16.4762 33.78 16.4323 33.648 16.3682 33.472C16.3123 33.288 16.2563 33.104 16.2003 32.92C16.1443 32.728 16.1002 32.572 16.0682 32.452C16.0282 32.612 15.9802 32.788 15.9242 32.98C15.8762 33.164 15.8283 33.336 15.7803 33.496C15.7323 33.648 15.6923 33.772 15.6603 33.868L14.7963 36.28H17.3643L16.5002 33.868Z"
        fill="currentColor"
      />
      <path
        d="M6.86328 39.88V31.312H8.15928V38.764H11.8193V39.88H6.86328Z"
        fill="currentColor"
      />
    </svg>
  )
}

LangSelector.displayName = 'LangSelector'
