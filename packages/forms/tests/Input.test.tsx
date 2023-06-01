import * as React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import { LabelControl, Input } from '../src'

describe('should derive values from surrounding LabelControl', () => {
  test('renders Text component vol1', async () => {
    render(
      <LabelControl labelText="test">
        <Input />
      </LabelControl>
    )

    const text = screen.getByLabelText(/test/)

    expect(text).toBeInTheDocument()
  })

  test('renders Text component vol2', async () => {
    render(
      <LabelControl labelText="test" helperText="helper" errorMessage="error">
        <Input />
      </LabelControl>
    )

    const text = screen.getByLabelText(/test/)

    expect(text).toBeInTheDocument()

    expect(text).toHaveAttribute('aria-describedby', 'helper-text-:r1:')
    expect(text).toHaveAttribute('aria-errormessage', 'error-message-:r1:')
  })

  test('renders Text component vol3', async () => {
    render(
      <LabelControl labelText="test">
        <Input />
      </LabelControl>
    )

    const text = screen.getByLabelText(/test/)

    expect(text).toBeInTheDocument()

    expect(text).toBeValid()
    expect(text).toHaveAttribute('aria-invalid', 'false')
  })

  test('renders Text component vol4', async () => {
    render(
      <LabelControl labelText="test" isInvalid>
        <Input />
      </LabelControl>
    )

    const text = screen.getByLabelText(/test/)

    expect(text).toBeInTheDocument()

    expect(text).toBeInvalid()
    expect(text).toHaveAttribute('aria-invalid', 'true')
    expect(text).not.toBeRequired()
  })

  test('renders Text component vol5', async () => {
    render(
      <LabelControl labelText="test" isRequired>
        <Input defaultValue="test value" />
      </LabelControl>
    )

    screen.getByLabelText
    const text = screen.getByLabelText(/test/)

    expect(text).toBeInTheDocument()

    expect(text).toBeValid()
    expect(text).toBeRequired()
  })

  test('renders Text component vol6', async () => {
    render(
      <LabelControl labelText="test" isRequired>
        <Input />
      </LabelControl>
    )

    const text = screen.getByLabelText(/test/)

    expect(text).toBeInTheDocument()

    expect(text).toBeInvalid()
    expect(text).toBeRequired()
  })
})
