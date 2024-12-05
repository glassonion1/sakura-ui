import React from 'react'

export interface SlotProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode
}

export const Slot = React.forwardRef<HTMLElement, SlotProps>((props, ref) => {
  const { children, ...restProps } = props

  if (React.isValidElement(children)) {
    return React.cloneElement(children, {
      ...restProps,
      ...children.props,
      className: `${restProps.className ?? ''} ${children.props.className ?? ''}`,
      ref
    })
  }

  if (React.Children.count(children) > 1) {
    React.Children.only(null)
  }
  return null
})
