import * as React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import { FieldsetControl } from '../src'

describe('FieldsetControl', () => {
  test('renders FieldsetControl component vol1', async () => {
    render(<FieldsetControl labelText="test" />)

    const fieldset = screen.getByRole('group')

    expect(fieldset).toBeInTheDocument()

    expect(screen.getByText('test')).toBeInTheDocument()
  })

  test('renders FieldsetControl component vol2', async () => {
    render(
      <FieldsetControl
        labelText="test"
        helperText="helper"
        errorMessage="error"
      />
    )

    expect(screen.getByText('helper')).toBeInTheDocument()
    expect(screen.queryByText('error')).toBeNull()
  })

  test('renders FieldsetControl component vol3', async () => {
    render(
      <FieldsetControl
        labelText="test"
        helperText="helper"
        errorMessage="error"
        isInvalid
      />
    )

    expect(screen.getByText('helper')).toBeInTheDocument()
    expect(screen.getByText('error')).toBeInTheDocument()
  })

  test('renders FieldsetControl component vol4', async () => {
    render(<FieldsetControl labelText="test" />)

    expect(screen.queryByText('*')).toBeNull()

    render(<FieldsetControl labelText="test" isRequired />)

    expect(screen.getByText('*')).toBeInTheDocument()
  })
})
