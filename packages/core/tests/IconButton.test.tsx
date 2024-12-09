import React from 'react'
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'

import { IconButton } from '../src'

describe('given a IconButton with Slot', () => {
  describe('without asChild', () => {
    it('should render a button with icon', async () => {
      render(<IconButton icon="home">Button with icon</IconButton>)

      const button = screen.getByRole('button')
      expect(button).toBeInTheDocument()

      const text = screen.getByText(/home/)
      expect(text).toBeInTheDocument()
    })
  })

  describe('with asChild', () => {
    it('should render a link with icon', async () => {
      render(
        <IconButton icon="home" asChild>
          <a href="https://googl.com">Button with icon</a>
        </IconButton>
      )

      const button = screen.getByRole('link')
      expect(button).toBeInTheDocument()

      const text = screen.getByText(/home/)
      expect(text).toBeInTheDocument()
    })
  })
})

describe('given a IconButton', () => {
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
})
