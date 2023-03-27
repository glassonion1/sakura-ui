import * as React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import { FieldsetControl, Radio } from '../src'

describe('should derive values from surrounding FieldsetControl', () => {
  test('renders Text component vol1', async () => {
    render(
      <FieldsetControl labelText="test">
        <Radio />
      </FieldsetControl>
    )

    const elem = screen.getByRole('radio')

    expect(elem).toBeInTheDocument()
  })

  test('renders Text component vol2', async () => {
    render(
      <FieldsetControl
        labelText="test"
        helperText="helper"
        errorMessage="error"
      >
        <Radio />
      </FieldsetControl>
    )

    const elem = screen.getByRole('radio')

    expect(elem).toBeInTheDocument()

    expect(elem).toHaveAttribute('aria-describedby', 'helper-text-:r1:')
    expect(elem).toHaveAttribute('aria-errormessage', 'error-message-:r1:')
  })

  test('renders Text component vol3', async () => {
    render(
      <FieldsetControl labelText="test">
        <Radio />
      </FieldsetControl>
    )

    const elem = screen.getByRole('radio')

    expect(elem).toBeInTheDocument()

    expect(elem).toBeValid()
    expect(elem).toHaveAttribute('aria-invalid', 'false')
  })

  test('renders Text component vol4', async () => {
    render(
      <FieldsetControl labelText="test" isInvalid>
        <Radio />
      </FieldsetControl>
    )

    const elem = screen.getByRole('radio')

    expect(elem).toBeInTheDocument()

    expect(elem).toBeInvalid()
    expect(elem).toHaveAttribute('aria-invalid', 'true')
    expect(elem).not.toBeRequired()
  })

  test('renders Text component vol5', async () => {
    render(
      <FieldsetControl labelText="test" isRequired>
        <Radio defaultChecked={true} />
      </FieldsetControl>
    )

    const elem = screen.getByRole('radio')

    expect(elem).toBeInTheDocument()

    expect(elem).toBeValid()
    expect(elem).toBeRequired()
  })

  test('renders Text component vol6', async () => {
    render(
      <FieldsetControl labelText="test" isRequired>
        <Radio />
      </FieldsetControl>
    )

    const elem = screen.getByRole('radio')

    expect(elem).toBeInTheDocument()

    expect(elem).toBeInvalid()
    expect(elem).toBeRequired()
  })
})
