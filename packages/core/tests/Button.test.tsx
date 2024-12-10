import React from 'react'
import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'

import { Button } from '../src'

describe('Button', () => {
  it('should render a button', async () => {
    render(<Button>Button</Button>)

    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
  })

  it('should render a link', async () => {
    render(
      <Button as="a" href="https://example.com">
        Button
      </Button>
    )

    const button = screen.getByRole('link')
    expect(button).toBeInTheDocument()
  })

  it('should labeled text from Button', async () => {
    render(<Button>button</Button>)

    const text = screen.getByText(/button/)
    expect(text).toBeInTheDocument()
  })

  it('should pass an object to the ref property', async () => {
    const ref = vi.fn()

    render(<Button ref={ref}>button</Button>)

    expect(ref).toHaveBeenCalledTimes(1)
  })
})
