import clsx from 'clsx'
import React from 'react'

export type Props = React.ComponentProps<'div'> & {
  title?: string
}

/*
 * TODO: next/linkを使うと警告がでるのでReact.forwardRefが必要
 */
export const InfoCard = (props: Props) => {
  const { className, children, ...newProps } = props

  const style = `
    bg-sumi-50
    border-sumi-900
    border
    border-solid
    rounded-[12px]
  `

  const topStyle = `
    p-4
    text-h5
    font-bold
  `

  const bottmStyle = `
    px-4
    pb-4
  `

  return (
    <div className={clsx(style, props.className)} {...newProps}>
      <h2 className={topStyle}>{props.title}</h2>
      <p className={bottmStyle}>{props.children}</p>
    </div>
  )
}
