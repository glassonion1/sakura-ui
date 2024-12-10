import React from 'react'
import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'

import { Card, CardBody, CardHeader } from '../src'

describe('Card', () => {
  it('should labeled text from Card', async () => {
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
  it('should set the role and id correctly', async () => {
    render(
      <Card>
        <CardHeader data-testid="header">Card-Header</CardHeader>
        <CardBody data-testid="body">Card-Body</CardBody>
      </Card>
    )

    const card = screen.getByRole('article')
    expect(card).toBeInTheDocument()

    const header = screen.getByTestId('header')
    expect(header).toBeInTheDocument()
    expect(header).toHaveAttribute('id')

    const headerText = screen.getByLabelText('Card-Header')
    expect(headerText).toBeInTheDocument()

    const body = screen.getByTestId('body')
    expect(body).toBeInTheDocument()
    expect(body).toHaveAttribute('id')

    const bodyText = screen.getByRole('article', { description: 'Card-Body' })
    expect(bodyText).toBeInTheDocument()
  })
})
