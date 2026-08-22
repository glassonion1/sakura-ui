import React from 'react'
import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'

import { Card, CardBody, CardFooter, CardHeader } from '../src'

describe('Card', () => {
  it('should render its header and body', async () => {
    render(
      <Card>
        <CardHeader as="h3">Card-Header</CardHeader>
        <CardBody>Card-Body</CardBody>
      </Card>
    )

    expect(screen.getByText('Card-Header')).toBeInTheDocument()
    expect(screen.getByText('Card-Body')).toBeInTheDocument()
  })

  it('should render the header as the element given by the as property', async () => {
    render(
      <Card>
        <CardHeader as="h4">Card-Header</CardHeader>
      </Card>
    )

    // Querying by role rather than by tag name: the point of the change is that
    // the title is reachable by heading navigation, not that it is an <h4>.
    expect(
      screen.getByRole('heading', { level: 4, name: 'Card-Header' })
    ).toBeInTheDocument()
  })

  it('should render the header as a paragraph when asked to', async () => {
    render(
      <Card>
        <CardHeader as="p">Card-Header</CardHeader>
      </Card>
    )

    // Lists of many cards use 'p' so that the headings do not pollute the outline.
    expect(screen.queryByRole('heading')).toBeNull()
    expect(screen.getByText('Card-Header')).toBeInTheDocument()
  })

  it('should render the root as the element given by the as property', async () => {
    render(
      <Card as="article">
        <CardHeader as="h3">Card-Header</CardHeader>
      </Card>
    )

    expect(screen.getByRole('article')).toBeInTheDocument()
  })

  it('should not generate any id or aria reference of its own', async () => {
    const { container } = render(
      <Card as="article">
        <CardHeader as="h3" data-testid="header">
          Card-Header
        </CardHeader>
        <CardBody data-testid="body">Card-Body</CardBody>
      </Card>
    )

    const card = screen.getByRole('article')
    // A generated id can only ever dangle or collide, so the library emits none.
    // Callers that want the card named do it themselves, see the test below.
    expect(card).not.toHaveAttribute('aria-labelledby')
    expect(card).not.toHaveAttribute('aria-describedby')
    expect(screen.getByTestId('header')).not.toHaveAttribute('id')
    expect(screen.getByTestId('body')).not.toHaveAttribute('id')
    expect(container.querySelector('[id=""]')).toBeNull()
  })

  it('should not repeat an id when more than one body is rendered', async () => {
    render(
      <Card>
        <CardBody data-testid="body1">Body-1</CardBody>
        <CardBody data-testid="body2">Body-2</CardBody>
      </Card>
    )

    expect(screen.getByTestId('body1')).not.toHaveAttribute('id')
    expect(screen.getByTestId('body2')).not.toHaveAttribute('id')
  })

  it('should let the caller name the card explicitly', async () => {
    render(
      <Card as="article" aria-labelledby="card-title" aria-describedby="card-desc">
        <CardHeader as="h3" id="card-title">
          Card-Header
        </CardHeader>
        <CardBody id="card-desc">Card-Body</CardBody>
      </Card>
    )

    const card = screen.getByRole('article')
    expect(card).toHaveAccessibleName('Card-Header')
    expect(card).toHaveAccessibleDescription('Card-Body')
  })

  it('should render a card without a header', async () => {
    render(
      <Card as="article">
        <CardBody>Card-Body</CardBody>
      </Card>
    )

    // Used to leave aria-labelledby pointing at an element that was never rendered.
    const card = screen.getByRole('article')
    expect(card).not.toHaveAttribute('aria-labelledby')
    expect(card).toHaveAccessibleName('')
  })

  it('should say which property is missing when as is left out', async () => {
    // React would otherwise report an invalid element type and suggest a missing
    // export, which points nowhere near the actual mistake.
    const Header = CardHeader as unknown as React.ComponentType<{
      children: React.ReactNode
    }>

    expect(() =>
      render(
        <Card>
          <Header>Card-Header</Header>
        </Card>
      )
    ).toThrow(/CardHeader: the "as" property is required/)
  })

  it('should pass unknown properties through to the elements', async () => {
    render(
      <Card>
        <CardHeader as="h3" data-testid="header" data-kind="title">
          Card-Header
        </CardHeader>
        <CardBody data-testid="body" data-kind="desc">
          Card-Body
        </CardBody>
        <CardFooter data-testid="footer" data-kind="meta">
          Card-Footer
        </CardFooter>
      </Card>
    )

    expect(screen.getByTestId('header')).toHaveAttribute('data-kind', 'title')
    expect(screen.getByTestId('body')).toHaveAttribute('data-kind', 'desc')
    expect(screen.getByTestId('footer')).toHaveAttribute('data-kind', 'meta')
  })
})
