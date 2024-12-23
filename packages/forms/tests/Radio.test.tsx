import React from 'react'
import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'

import { Radio } from '../src'

describe('Radio', () => {
  it('should render a radio with a value text', async () => {
    render(<Radio id="test" value="test" />)

    const radio = screen.getByRole('radio')

    expect(radio).toBeInTheDocument()

    expect(screen.getByDisplayValue('test')).toBeInTheDocument()
  })

  it('should render two radios with verify checked states', async () => {
    render(
      <>
        <Radio id="test" value="test1" data-testid="checked" checked />
        <Radio id="test" value="test2" data-testid="not_checked" />
      </>
    )

    const checked = screen.getByTestId('checked')

    expect(checked).toBeInTheDocument()
    expect(checked).toBeChecked()

    const notChecked = screen.getByTestId('not_checked')

    expect(notChecked).toBeInTheDocument()
    expect(notChecked).not.toBeChecked()
  })

  it('should pass an object to the ref property', async () => {
    const ref = vi.fn()

    render(<Radio ref={ref} />)

    expect(ref).toHaveBeenCalledTimes(1)
  })
})
