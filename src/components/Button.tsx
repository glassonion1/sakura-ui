import clsx from 'clsx'
import React from 'react'

export type ButtonProps = React.ComponentProps<'button'> & {
  variant?: 'primary' | 'secondary'
  textAlign?: 'left' | 'right' | 'center'
}

/*
 * リンク目的で利用しないこと。リンクする場合ははLinkButtonを利用すること
 */
export const Button = (props: ButtonProps) => {
  // コンポーネントを使う側でclassNameを指定しても問題ないようにする
  const { className, children, textAlign, variant, ...newProps } = props

  const align = textAlign ?? 'center'

  const style = `
    inline-block
    p-4
    text-base
    font-bold
    rounded-lg
    text-${align}
    cursor-pointer
    whitespace-nowrap
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
      {children}
    </button>
  )
}
