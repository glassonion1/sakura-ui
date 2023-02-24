import clsx from 'clsx'
import React from 'react'

export type IconButtonProps = React.ComponentProps<'button'> & {
  variant?: 'primary' | 'secondary'
  icon: string
}

/*
 * リンク目的で利用しないこと。リンクする場合ははLinkButtonを利用すること
 */
export const IconButton = (props: IconButtonProps) => {
  // コンポーネントを使う側でclassNameを指定しても問題ないようにする
  const { className, children, icon, variant, ...newProps } = props

  const align = 'center'

  const style = `
    inline-block
    p-4
    text-base
    font-bold
    rounded-lg
    text-${align}
    cursor-pointer
  `

  const primary = `
    text-white-1000
    bg-sea-600
    hover:bg-sea-800
    active:bg-sea-800
    focus:outline
    focus:outline-2
    focus:outline-wood-500
    disabled:bg-sumi-500
    disabled:text-white-1000
    disabled:border
    disabled:border-solid
    disabled:border-sumi-500
  `
  const secondary = `
    border
    border-solid
    border-sea-600
    hover:bg-sea-100
    active:bg-sea-100
    focus:outline
    focus:outline-2
    focus:outline-wood-500
    disabled:bg-sumi-500
    disabled:text-white-1000
    disabled:border
    disabled:border-solid
    disabled:border-sumi-500
  `

  const styles = {
    primary: primary,
    secondary: secondary
  }

  return (
    <button
      className={clsx(style, styles[variant ?? 'primary'], className)}
      {...newProps}
    >
      <img src={`/icons/${props.icon}.svg`} alt={props.icon} width="24" />
      {children}
    </button>
  )
}
