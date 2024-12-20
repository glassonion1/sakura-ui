import React from 'react'
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'

import { FieldsetControl, Input } from '../src'

describe('FieldsetControl', () => {
  it('should render a fieldset with a label text', async () => {
    render(<FieldsetControl labelText="test" />)

    const fieldset = screen.getByRole('group')

    expect(fieldset).toBeInTheDocument()

    expect(screen.getByText('test')).toBeInTheDocument()
  })

  it('should render a fieldset with a helper text and error text', async () => {
    render(
      <FieldsetControl
        labelText="test"
        helperText="helper"
        errorMessage="error"
        isInvalid
      >
        <Input />
      </FieldsetControl>
    )

    expect(screen.getByText('helper')).toBeInTheDocument()
    expect(screen.getByText('error')).toBeInTheDocument()

    const input = screen.getByRole('textbox')

    expect(input).toBeInTheDocument()

    expect(input).toHaveAttribute('aria-describedby', 'helper-text-:r1:')
    expect(input).toHaveAttribute('aria-errormessage', 'error-message-:r1:')

    expect(input).toBeInvalid()
    expect(input).toHaveAttribute('aria-invalid', 'true')
  })

  it('should render a fieldset with a helper text', async () => {
    render(
      <FieldsetControl
        labelText="test"
        helperText="helper"
        errorMessage="error"
      >
        <Input />
      </FieldsetControl>
    )

    expect(screen.getByText('helper')).toBeInTheDocument()
    expect(screen.queryByText('error')).toBeNull()

    const input = screen.getByRole('textbox')

    expect(input).toBeInTheDocument()

    expect(input).toBeValid()
    expect(input).toHaveAttribute('aria-invalid', 'false')
  })

  it('should display an asterisk only when isRequired prop is true', async () => {
    render(<FieldsetControl labelText="test" />)

    expect(screen.queryByText('*')).toBeNull()

    render(<FieldsetControl labelText="test" isRequired />)

    expect(screen.getByText('*')).toBeInTheDocument()
  })

  it('should render an input with required attribute and correct label text', async () => {
    render(
      <FieldsetControl labelText="test" isRequired>
        <Input defaultValue="test value" />
      </FieldsetControl>
    )

    const input = screen.getByRole('textbox')

    expect(input).toBeInTheDocument()

    expect(input).toBeValid()
    expect(input).toBeRequired()
  })

  it('should render an input as invalid when required but has no value', async () => {
    render(
      <FieldsetControl labelText="test" isRequired>
        <Input />
      </FieldsetControl>
    )

    const input = screen.getByRole('textbox')

    expect(input).toBeInTheDocument()

    expect(input).toBeInvalid()
    expect(input).toBeRequired()
  })
})
