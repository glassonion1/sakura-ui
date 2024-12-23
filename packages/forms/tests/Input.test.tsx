import React from 'react'
import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'

import { Input } from '../src'

describe('Input', () => {
  it('should render a input with a value text', async () => {
    render(<Input value="test" />)

    const input = screen.getByRole('textbox')

    expect(input).toBeInTheDocument()

    expect(screen.getByDisplayValue('test')).toBeInTheDocument()
  })

  it('should pass an object to the ref property', async () => {
    const ref = vi.fn()

    render(<Input ref={ref} />)

    expect(ref).toHaveBeenCalledTimes(1)
  })
})
