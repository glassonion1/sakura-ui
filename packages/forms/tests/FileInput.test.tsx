import React from 'react'
import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'

import { FileInput } from '../src'

describe('FileInput', () => {
  it('should render a file input with a label text', async () => {
    render(<FileInput />)

    const input = screen.getByRole('button')

    expect(input).toBeInTheDocument()

    expect(screen.getByLabelText('File Upload')).toBeInTheDocument()
  })

  it('should pass an object to the ref property', async () => {
    const ref = vi.fn()

    render(<FileInput ref={ref} />)

    expect(ref).toHaveBeenCalledTimes(1)
  })
})
