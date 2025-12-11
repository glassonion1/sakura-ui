import React from 'react'
import { cx } from '@sakura-ui/helper'
import { Card, CardHeader } from './Card'

export namespace NotificationBanner {
  export interface Props extends React.ComponentPropsWithoutRef<'article'> {}
}

export const NotificationBanner = (props: NotificationBanner.Props) => {
  const { className, children, ...restProps } = props

  const style = `
  `

  return (
    <Card className={cx(style, className)} {...restProps}>
      {children}
    </Card>
  )
}
