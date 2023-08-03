import React from 'react'
import { cx } from '../utils/class'

export interface InfoCardProps
  extends React.ComponentPropsWithoutRef<'section'> {
  title?: string
}

export const InfoCard: React.ElementType<InfoCardProps> = (
  props: InfoCardProps
) => {
  const { className, children, title, ...restProps } = props

  const style = `
    bg-sumi-50
    border-sumi-300
    border
    border-solid
    rounded-[12px]
    text-sumi-900
  `

  const topStyle = `
    px-4
    pt-4
    mb-1
    text-lgm
    sm:text-lg
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
