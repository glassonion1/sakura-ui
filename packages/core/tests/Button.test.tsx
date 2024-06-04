import React from 'react'
import { describe, test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'

import { Button } from '../src'

describe('should labeled text from Button', () => {
  test('text', async () => {
    render(<Button>Button</Button>)

    const text = screen.getByText(/Button/)
    expect(text).toBeInTheDocument()
  })
  test('as button', async () => {
    render(<Button>Button</Button>)

    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
  })
  test('as link', async () => {
    render(
      <Button as="a" href="https://example.com">
        Button
      </Button>
    )

    const button = screen.getByRole('link')
    expect(button).toBeInTheDocument()
  })
})
