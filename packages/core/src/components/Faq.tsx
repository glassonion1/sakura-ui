import React from 'react'
import { cx } from '@sakura-ui/helper'

/** The size of the Q and A markers, matching a medium heading. */
export const faqMarkerStyle = `
  text-h-med-m
  sm:text-h-med
`

export const faqStyle = `
  flex
  flex-col
  gap-8
`

export const questionStyle = `
  flex
  flex-row
  gap-8
  mt-8
`

export const answerStyle = `
  flex
  flex-row
  items-start
  gap-8
`

export namespace Faq {
  export interface Props extends React.ComponentPropsWithoutRef<'dl'> {}
}

export const Faq = (props: Faq.Props) => {
  const { className, children, ...restProps } = props

  // No schema.org FAQPage markup here. Google discontinued the FAQ rich result
  // in May 2026, so it is not implemented.
  return (
    <dl className={cx(faqStyle, className)} {...restProps}>
      {children}
    </dl>
  )
}

export namespace Question {
  export interface Props extends React.ComponentPropsWithoutRef<'dt'> {}
}

export const Question = (props: Question.Props) => {
  const { className, children, ...restProps } = props

  return (
    <dt className={cx(questionStyle, faqMarkerStyle, className)} {...restProps}>
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

  return (
    <dd className={cx(answerStyle, className)} {...restProps}>
      <span className={cx(faqMarkerStyle, '!leading-none')} aria-hidden="true">
        A
      </span>
      <span>{children}</span>
    </dd>
  )
}
