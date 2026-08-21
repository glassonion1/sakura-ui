import React from 'react'
import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'

import { FileInput, LabelControl } from '../src'

describe('FileInput', () => {
  it('should render a file input', async () => {
    // input[type=file] maps to no ARIA role, so it cannot be queried by role
    const { container } = render(<FileInput />)

    const input = container.querySelector('input[type="file"]')

    expect(input).toBeInTheDocument()
  })

  it('should take its accessible name from the surrounding label', async () => {
    render(
      <LabelControl labelText="添付書類">
        <FileInput />
      </LabelControl>
    )

    const input = screen.getByLabelText('添付書類')

    expect(input).toBeInTheDocument()
    // Asserting the accessible name rather than using getByLabelText alone:
    // getByLabelText also matches aria-label, so it would still pass if the
    // component set a generic name of its own and shadowed the label.
    expect(input).toHaveAccessibleName('添付書類')
  })

  it('should be required when the label control marks it as required', async () => {
    render(
      <LabelControl labelText="添付書類" isRequired>
        <FileInput />
      </LabelControl>
    )

    expect(screen.getByLabelText(/添付書類/)).toBeRequired()
  })

  it('should pass an object to the ref property', async () => {
    const ref = vi.fn()

    render(<FileInput ref={ref} />)

    expect(ref).toHaveBeenCalledTimes(1)
  })
})
