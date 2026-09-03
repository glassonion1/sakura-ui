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
const renderMarkdown = async (
  md: string,
  // Typed, so that a prop that no longer exists is a compile error rather than
  // a test that passes while measuring nothing.
  props: Omit<React.ComponentProps<typeof Markdown>, 'children'> = {}
) => {
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

    it('should not dress a card as a link when it has no title', async () => {
      // The link goes on the title, so a card without one has nowhere to put
      // it. It used to keep the hover and the arrow regardless: a card that
      // answered the pointer and then did nothing.
      const html = await renderMarkdown(directives.linkCardWithoutTitle)
      expect(html).not.toContain('<a')
      expect(html).not.toContain('hover:bg-solid-gray-50')
      expect(html).not.toContain('arrow_forward')
    })
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

    // The nesting is read from the DOM rather than left to the snapshot, so a
    // return to one flat list says which shape was lost.
    it('should put a heading under the one it belongs to', async () => {
      render(<Markdown showToc>{'# 章1\n\n## 節1\n\n## 節2\n\n# 章2'}</Markdown>)
      const toc = await screen.findByRole('navigation')

      const chapters = toc.querySelectorAll(':scope > ul > li')
      expect(
        Array.from(chapters, (li) => li.querySelector('a')?.textContent)
      ).toEqual(['章1', '章2'])

      const sections = chapters[0].querySelectorAll(':scope > ul > li')
      expect(
        Array.from(sections, (li) => li.querySelector('a')?.textContent)
      ).toEqual(['節1', '節2'])
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
        shiftHeading: 1
      })
      expect(html).toMatchSnapshot()
    })
  })
})
