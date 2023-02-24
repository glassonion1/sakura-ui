import clsx from 'clsx'
import React from 'react'

export type TextareaProps = React.ComponentPropsWithoutRef<'textarea'>

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ ...props }, ref) => {
    // コンポーネントを使う側でclassNameを指定しても問題ないようにする
    const { className, children, ...newProps } = props

    const style = `
    p-4
    rounded-[12px]
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
      <textarea className={clsx(style, className)} {...newProps} ref={ref}>
        {children}
      </textarea>
    )
  }
)
