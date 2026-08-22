import React from 'react'
import { renderToString } from 'react-dom/server'
import { afterEach, describe, expect, it } from 'vitest'

import { Markdown } from '../src'

/**
 * The pipeline sanitises and styles through the DOM, so it cannot run where
 * there is no document. What it must not do is throw there: a page that renders
 * on the server has to reach the browser, where the effect fills the markup in.
 *
 * The document is taken away rather than the environment changed, because the
 * component is only ever server-rendered by a caller who has React but no DOM.
 */
const withoutDocument = <T,>(body: () => T): T => {
  const saved = Object.getOwnPropertyDescriptor(globalThis, 'document')
  Object.defineProperty(globalThis, 'document', {
    configurable: true,
    get() {
      throw new ReferenceError('document is not defined')
    }
  })
  try {
    return body()
  } finally {
    if (saved) Object.defineProperty(globalThis, 'document', saved)
    else Reflect.deleteProperty(globalThis, 'document')
  }
}

describe('server rendering', () => {
  afterEach(() => {
    expect(globalThis.document).toBeDefined()
  })

  it('should render without a document', () => {
    expect(() =>
      withoutDocument(() =>
        renderToString(<Markdown>{'# 見出し\n\n本文'}</Markdown>)
      )
    ).not.toThrow()
  })

  it('should render nothing rather than half of something', () => {
    const html = withoutDocument(() =>
      renderToString(<Markdown showToc>{'# 見出し\n\n本文'}</Markdown>)
    )
    expect(html).not.toContain('見出し')
    expect(html).not.toContain('本文')
  })
})
