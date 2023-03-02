import React from 'react'
import { Button } from './Button'

export interface IconButtonProps extends React.ComponentProps<'button'> {
  variant?: 'primary' | 'secondary'
  icon: string
}

export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  (props, ref) => {
    const { children, icon, ...newProps } = props

    const align = 'center'

    return (
      <Button textAlign={align} {...newProps} ref={ref}>
        <img src={`/icons/${props.icon}.svg`} alt={props.icon} width="24" />
        {children}
      </Button>
    )
  }
)
