import React from 'react'
import { cx } from '../utils/class'
import { ControllerContext } from './context'

export interface TextareaProps extends React.ComponentProps<'textarea'> {}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (props, ref) => {
    const { className, children, onChange, maxLength, ...restProps } = props

    const [count, setCount] = React.useState(0)

    const onChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      if (onChange) onChange(e)

      setCount(e.target.value.length)
    }

    const ctx = React.useContext(ControllerContext)
    if (ctx.isRequired) {
      restProps.required = true
    }

    const invalidStyle = ctx.isInvalid ? 'border-sun-800' : 'border-sumi-900'
    const overtextStyle =
      count > (maxLength || 0) ? 'text-sun-800' : 'text-sumi-700'

    const style = `
      p-4
      rounded-lg
      border
      border-solid
      focus:outline
      focus:outline-2
      focus:outline-wood-500
      disabled:bg-transparent
      disabled:text-sumi-500
      disabled:border-sumi-500
    `

    return (
      <>
        <textarea
          id={restProps.id ?? ctx.id}
          className={cx(style, invalidStyle, className)}
          aria-describedby={ctx.helperTextId}
          aria-errormessage={ctx.errorMessageId}
          aria-invalid={ctx.isInvalid ?? false}
          onChange={onChangeHandler}
          {...restProps}
          ref={ref}
        >
          {children}
        </textarea>
        {maxLength ? (
          <p className="text-xs text-sumi-700">
            <span className={overtextStyle}>{count}</span>/
            <span>{maxLength}</span>
          </p>
        ) : (
          ''
        )}
      </>
    )
  }
) as React.ElementType
