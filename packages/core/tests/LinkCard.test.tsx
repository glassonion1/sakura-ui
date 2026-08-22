import React from 'react'
import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'

import { CardBody, LinkCard, LinkCardFooter, LinkCardHeader } from '../src'

describe('LinkCard', () => {
  it('should render the title as a link', async () => {
    render(
      <LinkCard>
        <LinkCardHeader as="h3" href="/readme">
          Link-Card-Header
        </LinkCardHeader>
        <CardBody>Link-Card-Body</CardBody>
      </LinkCard>
    )

    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('href', '/readme')
  })

  it('should take the accessible name of the link from the title alone', async () => {
    render(
      <LinkCard>
        <LinkCardHeader as="h3" href="/readme">
          Link-Card-Header
        </LinkCardHeader>
        <CardBody>Link-Card-Body</CardBody>
        <LinkCardFooter>June 27th, 2026</LinkCardFooter>
      </LinkCard>
    )

    // Asserting the accessible name rather than the link text: when the anchor
    // wrapped the whole card, the body and the footer were read out as part of
    // the link name before it was announced as a link.
    const link = screen.getByRole('link')
    expect(link).toHaveAccessibleName('Link-Card-Header')
    expect(link).not.toHaveAccessibleName(/Link-Card-Body/)
  })

  it('should keep the title reachable by heading navigation', async () => {
    render(
      <LinkCard>
        <LinkCardHeader as="h3" href="/readme">
          Link-Card-Header
        </LinkCardHeader>
      </LinkCard>
    )

    expect(
      screen.getByRole('heading', { level: 3, name: 'Link-Card-Header' })
    ).toBeInTheDocument()
  })

  it('should tell that the link opens in a new tab', async () => {
    render(
      <LinkCard>
        <LinkCardHeader as="h3" href="https://example.com" target="_blank">
          Link-Card-Header
        </LinkCardHeader>
      </LinkCard>
    )

    // The icon itself is aria-hidden, so without the alternative text the fact
    // that the link opens elsewhere reached sighted users only.
    expect(screen.getByRole('link')).toHaveAccessibleName(
      /新しいタブで開きます/
    )
  })

  it('should not tell about a new tab for a link that stays in the tab', async () => {
    render(
      <LinkCard>
        <LinkCardHeader as="h3" href="/readme">
          Link-Card-Header
        </LinkCardHeader>
      </LinkCard>
    )

    expect(screen.getByRole('link')).toHaveAccessibleName('Link-Card-Header')
  })

  it('should render the link with the component given by linkAs', async () => {
    const NextLinkLike = ({
      to,
      children,
      ...rest
    }: { to: string; children: React.ReactNode }) => (
      <a href={to} {...rest}>
        {children}
      </a>
    )

    render(
      <LinkCard>
        <LinkCardHeader as="h3" linkAs={NextLinkLike} to="/readme">
          Link-Card-Header
        </LinkCardHeader>
      </LinkCard>
    )

    expect(screen.getByRole('link')).toHaveAttribute('href', '/readme')
  })

  it('should pass unknown properties through to the link and the footer', async () => {
    render(
      <LinkCard data-testid="card">
        <LinkCardHeader as="h3" href="/readme" data-kind="title">
          Link-Card-Header
        </LinkCardHeader>
        <LinkCardFooter data-testid="footer" data-kind="meta">
          June 27th, 2026
        </LinkCardFooter>
      </LinkCard>
    )

    // These used to be dropped: both components declared that they accept the
    // properties of a div but never spread them onto an element.
    expect(screen.getByRole('link')).toHaveAttribute('data-kind', 'title')
    expect(screen.getByTestId('footer')).toHaveAttribute('data-kind', 'meta')
    expect(screen.getByTestId('card')).toBeInTheDocument()
  })

  it('should say which property is missing when as is left out', async () => {
    const Header = LinkCardHeader as unknown as React.ComponentType<{
      href: string
      children: React.ReactNode
    }>

    expect(() =>
      render(
        <LinkCard>
          <Header href="/readme">Link-Card-Header</Header>
        </LinkCard>
      )
    ).toThrow(/LinkCardHeader: the "as" property is required/)
  })

  it('should pass an object to the ref property', async () => {
    const ref = vi.fn()
    render(
      <LinkCard ref={ref}>
        <LinkCardHeader as="h3" href="/readme">
          Link-Card-Header
        </LinkCardHeader>
      </LinkCard>
    )

    expect(ref).toHaveBeenCalledTimes(1)
  })
})
