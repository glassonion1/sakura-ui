import React from 'react'
import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'

import { NotificationBanner } from '../src'

describe('NotificationBanner', () => {
  it('should render its title and body', async () => {
    render(
      <NotificationBanner type="success" title="Banner-Title">
        Banner-Body
      </NotificationBanner>
    )

    expect(screen.getByText('Banner-Title')).toBeInTheDocument()
    expect(screen.getByText('Banner-Body')).toBeInTheDocument()
  })

  it('should render the title as the heading given by the headingLevel property', async () => {
    render(
      <NotificationBanner type="success" title="Banner-Title" headingLevel="h3">
        Banner-Body
      </NotificationBanner>
    )

    // Querying by role rather than by tag name: the point is that the title is
    // reachable by heading navigation, not that it is an <h3>.
    expect(
      screen.getByRole('heading', { level: 3, name: /Banner-Title/ })
    ).toBeInTheDocument()
  })

  it('should not put the title in the outline when no headingLevel is given', async () => {
    render(
      <NotificationBanner type="success" title="Banner-Title">
        Banner-Body
      </NotificationBanner>
    )

    expect(screen.queryByRole('heading')).toBeNull()
  })

  it('should label the icon after the type so it is not conveyed by colour alone', async () => {
    const { rerender } = render(
      <NotificationBanner type="success" title="Banner-Title" />
    )
    expect(screen.getByRole('img', { name: 'Success' })).toBeInTheDocument()

    rerender(<NotificationBanner type="error" title="Banner-Title" />)
    expect(screen.getByRole('img', { name: 'Error' })).toBeInTheDocument()

    rerender(<NotificationBanner type="warning" title="Banner-Title" />)
    expect(screen.getByRole('img', { name: 'Warning' })).toBeInTheDocument()

    rerender(<NotificationBanner type="info1" title="Banner-Title" />)
    expect(screen.getByRole('img', { name: 'Information' })).toBeInTheDocument()

    rerender(<NotificationBanner type="info2" title="Banner-Title" />)
    expect(screen.getByRole('img', { name: 'Information' })).toBeInTheDocument()
  })

  it('should let the caller replace the icon label for another language', async () => {
    render(
      <NotificationBanner type="success" title="Banner-Title" iconLabel="成功" />
    )

    expect(screen.getByRole('img', { name: '成功' })).toBeInTheDocument()
    expect(screen.queryByRole('img', { name: 'Success' })).toBeNull()
  })

  it('should let the caller set a live region role', async () => {
    render(
      <NotificationBanner
        type="error"
        title="Banner-Title"
        role="alert"
        data-testid="banner"
      >
        Banner-Body
      </NotificationBanner>
    )

    expect(screen.getByRole('alert')).toBeInTheDocument()
    expect(screen.getByTestId('banner')).toHaveAttribute('role', 'alert')
  })

  it('should keep the class names it is given alongside its own', async () => {
    render(
      <NotificationBanner
        type="success"
        title="Banner-Title"
        className="mt-4"
        data-testid="banner"
      >
        Banner-Body
      </NotificationBanner>
    )

    const banner = screen.getByTestId('banner')
    expect(banner).toHaveClass('mt-4')
    expect(banner).toHaveClass('grid')
  })
})
