import clsx from 'clsx'
import React from 'react'

export type TextProps = React.ComponentPropsWithoutRef<'input'>

export const Text = React.forwardRef<HTMLInputElement, TextProps>(
  ({ ...props }, ref) => {
    // コンポーネントを使う側でclassNameを指定しても問題ないようにする
    const { className, ...newProps } = props

    const style = `
    p-4
    rounded-[4px]
    border
    border-solid
    border-sumi-900
    focus:outline
    focus:outline-2
    focus:outline-wood-500
    disabled:bg-sumi-500
    disabled:text-white-1000
    disabled:border
    disabled:border-solid
    disabled:border-sumi-500
  `

    return (
      <input
        type="text"
        className={clsx(style, className)}
        {...newProps}
        ref={ref}
      />
    )
  }
)
