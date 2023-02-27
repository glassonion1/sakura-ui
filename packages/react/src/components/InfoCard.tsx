import React from 'react'
import { cx } from '../utils'

export type Props = React.ComponentProps<'div'> & {
  title?: string
}

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
    <div className={cx(style, props.className)} {...newProps}>
      <h2 className={topStyle}>{props.title}</h2>
      <p className={bottmStyle}>{props.children}</p>
    </div>
  )
}
