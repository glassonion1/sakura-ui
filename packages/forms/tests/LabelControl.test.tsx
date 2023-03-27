import * as React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import { LabelControl } from '../src'

describe('LabelControl', () => {
  test('renders LabelControl component vol1', async () => {
    render(<LabelControl labelText="test" data-testid="label" />)

    const elem = screen.getByTestId('label')

    expect(elem).toBeInTheDocument()

    expect(screen.getByText('test')).toBeInTheDocument()
  })

  test('renders LabelControl component vol2', async () => {
    render(
      <LabelControl labelText="test" helperText="helper" errorMessage="error" />
    )

    expect(screen.getByText('helper')).toBeInTheDocument()
    expect(screen.queryByText('error')).toBeNull()
  })

  test('renders LabelControl component vol3', async () => {
    render(
      <LabelControl
        labelText="test"
        helperText="helper"
        errorMessage="error"
        isInvalid
      />
    )

    expect(screen.getByText('helper')).toBeInTheDocument()
    expect(screen.getByText('error')).toBeInTheDocument()
  })

  test('renders LabelControl component vol4', async () => {
    render(<LabelControl labelText="test" />)

    expect(screen.queryByText('*')).toBeNull()

    render(<LabelControl labelText="test" isRequired />)

    expect(screen.getByText('*')).toBeInTheDocument()
  })
})
