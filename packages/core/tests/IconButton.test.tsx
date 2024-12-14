import React from 'react'
import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'

import { IconButton } from '../src'

describe('IconButton', () => {
  it('should render a button with icon', async () => {
    render(<IconButton icon="home">Button with icon</IconButton>)

    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()

    const text = screen.getByText(/home/)
    expect(text).toBeInTheDocument()
  })

  it('should render a link with icon', async () => {
    render(
      <IconButton as="a" icon="home" href="https://googl.com">
        Button with icon
      </IconButton>
    )

    const button = screen.getByRole('link')
    expect(button).toBeInTheDocument()

    const text = screen.getByText(/home/)
    expect(text).toBeInTheDocument()
  })

  it('should aria-hidden true', async () => {
    render(<IconButton icon="home">button</IconButton>)

    const text = screen.getByText(/home/)
    expect(text).toHaveAttribute('aria-hidden', 'true')
  })

  it('should aria-hidden false', async () => {
    render(<IconButton icon="home" />)

    const text = screen.getByText(/home/)
    expect(text).toHaveAttribute('aria-hidden', 'false')
  })

  it('should pass an object to the ref property', async () => {
    const ref = vi.fn()

    render(
      <IconButton icon="home" ref={ref}>
        button
      </IconButton>
    )

    expect(ref).toHaveBeenCalledTimes(1)
  })
})
