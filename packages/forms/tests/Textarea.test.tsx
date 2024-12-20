import React from 'react'
import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'

import { Textarea } from '../src'

describe('Textarea', () => {
  it('should render a textarea with a value text', async () => {
    render(<Textarea value="test" />)

    const input = screen.getByRole('textbox')

    expect(input).toBeInTheDocument()

    expect(screen.getByDisplayValue('test')).toBeInTheDocument()
  })

  it('should pass an object to the ref property', async () => {
    const ref = vi.fn()

    render(<Textarea ref={ref} />)

    expect(ref).toHaveBeenCalledTimes(1)
  })
})
