import * as React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import { Card, CardHeader } from '../src'

describe('should labeled text from Card', () => {
  test('renders Card', async () => {
    render(
      <Card>
        <CardHeader>Card-Label</CardHeader>
      </Card>
    )

    const text = screen.getByLabelText(/Card-Label/)

    expect(text).toBeInTheDocument()
  })
})
