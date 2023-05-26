import React from 'react'
import { cx } from '../utils/class'

export interface InfoCardProps extends React.ComponentProps<'section'> {
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

  const headingId = React.useId()

  return (
    <section
      aria-labelledby={headingId}
      className={cx(style, className)}
      {...restProps}
    >
      <h2 id={headingId} className={topStyle}>
        {title}
      </h2>
      <p className={bottmStyle}>{children}</p>
    </section>
  )
}
