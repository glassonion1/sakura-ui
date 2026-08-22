import React from 'react'
import { cx } from '@sakura-ui/helper'

export namespace Faq {
  export interface Props extends React.ComponentPropsWithoutRef<'dl'> {}
}

const headingStyle = `
  text-h-med-m
  sm:text-h-med
`

export const Faq = (props: Faq.Props) => {
  const { className, children, ...restProps } = props

  const style = `
    flex
    flex-col
    gap-8
  `
  // No schema.org FAQPage markup here. Google discontinued the FAQ rich result
  // in May 2026, so it is not implemented.
  return (
    <dl className={cx(style, className)} {...restProps}>
      {children}
    </dl>
  )
}

export namespace Question {
  export interface Props extends React.ComponentPropsWithoutRef<'dt'> {}
}

export const Question = (props: Question.Props) => {
  const { className, children, ...restProps } = props

  const style = `
    flex
    flex-row
    gap-8
    mt-8
  `
  return (
    <dt className={cx(style, headingStyle, className)} {...restProps}>
      <span aria-hidden="true">Q</span>
      <span>{children}</span>
    </dt>
  )
}

export namespace Answer {
  export interface Props extends React.ComponentPropsWithoutRef<'dd'> {}
}

export const Answer = (props: Answer.Props) => {
  const { className, children, ...restProps } = props

  const style = `
    flex
    flex-row
    items-start
    gap-8
  `
  return (
    <dd className={cx(style, className)} {...restProps}>
      <span className={cx(headingStyle, '!leading-none')} aria-hidden="true">
        A
      </span>
      <span>{children}</span>
    </dd>
  )
}
