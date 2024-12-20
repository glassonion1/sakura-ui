import React from 'react'
import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'

import { Select } from '../src'

describe('Select', () => {
  it('should render a select with a value text', async () => {
    render(
      <Select value="dog">
        <option value="cat">Cat</option>
        <option value="dog">Dog</option>
      </Select>
    )

    const select = screen.getByRole('combobox')

    expect(select).toBeInTheDocument()

    expect(screen.getByDisplayValue('Dog')).toBeInTheDocument()
  })

  it('should pass an object to the ref property', async () => {
    const ref = vi.fn()

    render(<Select ref={ref} />)

    expect(ref).toHaveBeenCalledTimes(1)
  })
})
