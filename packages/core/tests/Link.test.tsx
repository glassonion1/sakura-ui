import React from 'react'
import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'

import { Link } from '../src'

describe('Link', () => {
  it('should render a link', async () => {
    render(<Link href="/">Button</Link>)

    const link = screen.getByRole('link')
    expect(link).toBeInTheDocument()
    expect(link).not.toHaveAttribute('target')
  })

  it('should render a link with icon', async () => {
    render(<Link href="https://google.com">Button</Link>)

    const link = screen.getByRole('link')
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('target')

    const text = screen.getByText(/open_in_new/)
    expect(text).toBeInTheDocument()
  })

  it('should render a link with icon', async () => {
    render(
      <Link href="/test" target="_blank">
        Button
      </Link>
    )

    const link = screen.getByRole('link')
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('target')

    const text = screen.getByText(/open_in_new/)
    expect(text).toBeInTheDocument()
  })

  it('should not hand the opener to the page it opens', async () => {
    render(<Link href="https://example.com">Button</Link>)

    expect(screen.getByRole('link')).toHaveAttribute(
      'rel',
      'noopener noreferrer'
    )
  })

  it('should keep the rel the caller asked for as well', async () => {
    render(
      <Link href="https://example.com" rel="nofollow">
        Button
      </Link>
    )

    const rel = screen.getByRole('link').getAttribute('rel')?.split(' ')
    expect(rel).toContain('noopener')
    expect(rel).toContain('noreferrer')
    expect(rel).toContain('nofollow')
  })

  it('should not repeat a rel the caller already asked for', async () => {
    render(
      <Link href="https://example.com" rel="noopener">
        Button
      </Link>
    )

    expect(screen.getByRole('link')).toHaveAttribute(
      'rel',
      'noopener noreferrer'
    )
  })

  it('should leave a link that stays on the page without a rel', async () => {
    render(<Link href="/">Button</Link>)

    expect(screen.getByRole('link')).not.toHaveAttribute('rel')
  })

  it('should labeled text from Button', async () => {
    render(<Link href="/">here</Link>)

    const text = screen.getByText(/here/)
    expect(text).toBeInTheDocument()
  })

  it('should pass an object to the ref property', async () => {
    const ref = vi.fn()

    render(
      <Link ref={ref} href="/">
        link
      </Link>
    )

    expect(ref).toHaveBeenCalledTimes(1)
  })
})
