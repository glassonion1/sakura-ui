import React from 'react'
import { describe, test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'

import { Button } from '../src'

describe('given a Button with Slot', () => {
  test('without asChild', async () => {
    render(<Button>Button</Button>)

    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
  })
  test('with asChild', async () => {
    render(
      <Button asChild>
        <a href="https://example.com">Button</a>
      </Button>
    )

    const button = screen.getByRole('link')
    expect(button).toBeInTheDocument()
  })
})

describe('should labeled text from Button', () => {
  test('text', async () => {
    render(<Button>button</Button>)

    const text = screen.getByText(/button/)
    expect(text).toBeInTheDocument()
  })
})
