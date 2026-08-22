import React from 'react'
import { describe, expect, it } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'

import { Markdown } from '../src'
import {
  directives,
  headings,
  malformedHtml,
  notDirectives,
  plain,
  rawHtml
} from './fixtures'

/**
 * Renders the component and returns the DOM it produced. The component converts
 * inside an effect, so the first paint is empty and the result has to be waited
 * for.
 */
const renderMarkdown = async (md: string, props = {}) => {
  const { container } = render(<Markdown {...props}>{md}</Markdown>)
  await waitFor(() => expect(container.firstElementChild?.innerHTML).not.toBe(''))
  return container.innerHTML
}

/**
 * These snapshots exist to catch the difference when the pipeline is replaced,
 * not to describe what the output ought to be. Some of them pin behaviour that
 * is wrong today; those say so.
 */
describe('Markdown', () => {
  describe('plain markdown', () => {
    for (const [name, md] of Object.entries(plain)) {
      it(`should render ${name}`, async () => {
        expect(await renderMarkdown(md)).toMatchSnapshot()
      })
    }
  })

  describe('raw html', () => {
    for (const [name, md] of Object.entries(rawHtml)) {
      it(`should render ${name}`, async () => {
        expect(await renderMarkdown(md)).toMatchSnapshot()
      })
    }
  })

  describe('malformed html', () => {
    for (const [name, md] of Object.entries(malformedHtml)) {
      it(`should recover from ${name}`, async () => {
        expect(await renderMarkdown(md)).toMatchSnapshot()
      })
    }
  })

  describe('directives', () => {
    for (const [name, md] of Object.entries(directives)) {
      it(`should render ${name}`, async () => {
        expect(await renderMarkdown(md)).toMatchSnapshot()
      })
    }
  })

  describe('text that only looks like a directive', () => {
    for (const [name, md] of Object.entries(notDirectives)) {
      it(`should leave ${name} alone`, async () => {
        expect(await renderMarkdown(md)).toMatchSnapshot()
      })
    }
  })

  describe('headings', () => {
    for (const [name, md] of Object.entries(headings)) {
      it(`should render ${name}`, async () => {
        expect(await renderMarkdown(md)).toMatchSnapshot()
      })
    }
  })

  describe('table of contents', () => {
    it('should render the table of contents when asked for it', async () => {
      const html = await renderMarkdown(
        '# 章1\n\n## 節1\n\n### 項1\n\n## 節2\n\n# 章2',
        { showToc: true }
      )
      expect(html).toMatchSnapshot()
    })

    it('should use the given title', async () => {
      render(
        <Markdown showToc tocTitle="もくじ">
          {'# 章1'}
        </Markdown>
      )
      await waitFor(() => expect(screen.getByText('もくじ')).toBeInTheDocument())
    })
  })

  describe('heading shift', () => {
    it('should move the headings down by the given amount', async () => {
      const html = await renderMarkdown('# 見出し1\n\n## 見出し2', {
        shiftHeding: 1
      })
      expect(html).toMatchSnapshot()
    })
  })
})
