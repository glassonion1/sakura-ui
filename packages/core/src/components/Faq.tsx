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
  return (
    <article itemScope itemType="https://schema.org/FAQPage">
      <dl
        className={cx(style, className)}
        itemScope
        itemProp="mainEntity"
        itemType="https://schema.org/Question"
        {...restProps}
      >
        {children}
      </dl>
    </article>
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
    <dt
      className={cx(style, headingStyle, className)}
      itemProp="name"
      {...restProps}
    >
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
    <dd
      className={cx(style, className)}
      itemScope
      itemProp="acceptedAnswer"
      itemType="https://schema.org/Answer"
      {...restProps}
    >
      <span className={cx(headingStyle, '!leading-none')} aria-hidden="true">
        A
      </span>
      <span itemProp="text">{children}</span>
    </dd>
  )
}
