import React from 'react'
import { cx } from '../utils'

export interface InfoCardProps extends React.ComponentProps<'div'> {
  title?: string
}

export const InfoCard = (props: InfoCardProps) => {
  const { className, children, title, ...restProps } = props

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
    <div className={cx(style, className)} {...restProps}>
      <h2 className={topStyle}>{title}</h2>
      <p className={bottmStyle}>{children}</p>
    </div>
  )
}
