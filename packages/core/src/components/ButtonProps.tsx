import React from 'react'

export interface ButtonProps extends React.ComponentPropsWithRef<'button'> {
  variant?: 'primary' | 'secondary'
  size?: 'lg' | 'md' | 'sm' | 'xs'
}
