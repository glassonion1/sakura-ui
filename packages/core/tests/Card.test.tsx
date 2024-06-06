import React from 'react'
import { describe, test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'

import { Card, CardBody, CardHeader } from '../src'

describe('should labeled text from Card', () => {
  test('text', async () => {
    render(
      <Card>
        <CardHeader>Card-Header</CardHeader>
        <CardBody>Card-Body</CardBody>
      </Card>
    )

    const text1 = screen.getByText(/Card-Header/)
    expect(text1).toBeInTheDocument()

    const text2 = screen.getByText(/Card-Body/)
    expect(text2).toBeInTheDocument()
  })
  test('role and id', async () => {
    render(
      <Card>
        <CardHeader>Card-Header</CardHeader>
        <CardBody>Card-Body</CardBody>
      </Card>
    )

    const card = screen.getByRole('article')
    expect(card).toBeInTheDocument()
    expect(card).toHaveProperty('id')

    const header = screen.getByLabelText('Card-Header')
    expect(header).toBeInTheDocument()
    expect(header).toHaveProperty('id')

    const body = screen.getByRole('article', { description: 'Card-Body' })
    expect(body).toBeInTheDocument()
    expect(body).toHaveProperty('id')
  })
})
