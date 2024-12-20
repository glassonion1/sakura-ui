import React from 'react'
import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'

import { Checkbox } from '../src'

describe('Checkbox', () => {
  it('should render a checkbox with a label text', async () => {
    render(<Checkbox>test</Checkbox>)

    const checkbox = screen.getByRole('checkbox')

    expect(checkbox).toBeInTheDocument()

    expect(screen.getByText('test')).toBeInTheDocument()
  })

  it('should render two checkbox with verify checked states', async () => {
    render(
      <>
        <Checkbox id="test" value="test1" data-testid="checked" checked />
        <Checkbox id="test" value="test2" data-testid="not_checked" />
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

    render(<Checkbox ref={ref}>test</Checkbox>)

    expect(ref).toHaveBeenCalledTimes(1)
  })
})
