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
    border
    border-solid
    border-sumi-300
    rounded-2xl
    sm:rounded-3xl
    text-sumi-900
  `

  const topStyle = `
    pt-6
    px-6
    text-h-xxs-m
    sm:text-h-xxs
    leading-none
    mb-2
  `

  const bottmStyle = `
    pb-6
    px-6
    text-base
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
