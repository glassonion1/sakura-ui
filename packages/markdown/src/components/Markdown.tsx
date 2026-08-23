import { Link, Ul } from '@sakura-ui/core'
import React from 'react'
import { type HeadingItem, render, type RenderResult } from '../render'

/**
 * What the server, and the first render in the browser, have to show. The
 * pipeline sanitises and styles through the DOM, so it cannot run where there
 * is no document.
 */
const NOTHING_YET: RenderResult = { html: '', headings: [] }

interface TocProps {
  items: HeadingItem[]
}

export const TableOfContents = ({ items }: TocProps) => {
  return (
    <>
      {items.map((item) => {
        return (
          <li key={item.id}>
            <Link href={`#${item.id}`}>{item.value}</Link>
            {item.children ? (
              <Ul>{<TableOfContents items={item.children} />}</Ul>
            ) : null}
          </li>
        )
      })}
    </>
  )
}

export namespace Markdown {
  export interface Props {
    tocTitle?: string
    showToc?: boolean
    /** Moves every heading down by this many levels. */
    shiftHeading?: number
    /** How deep the table of contents goes. Defaults to 2. */
    tocMaxDepth?: number
    children: string
  }
}

export const Markdown = ({
  children,
  showToc,
  tocTitle = '目次',
  shiftHeading = 0,
  tocMaxDepth = 2
}: Markdown.Props) => {
  // Converted in an effect, not while rendering. useMemo runs on the server as
  // well, and the pipeline reaches for document, so rendering there threw
  // instead of producing the empty output the caller could recover from. This
  // way the server and the first render in the browser agree, and the markup
  // arrives once the effect has run.
  const [{ html, headings }, setResult] =
    React.useState<RenderResult>(NOTHING_YET)

  React.useEffect(() => {
    setResult(render(children, { shiftHeading, tocMaxDepth }))
  }, [children, shiftHeading, tocMaxDepth])

  React.useEffect(() => {
    // The browser looked for the anchor before this markup existed, so the jump
    // is made again once it does.
    if (!html) return
    const id = decodeURI(window.location.hash.slice(1))
    if (!id) return
    document.getElementById(id)?.scrollIntoView()
  }, [html])

  return (
    <div className="py-8 flex flex-col gap-8">
      {showToc && headings.length > 0 && (
        <nav className="rounded-3xl p-10 bg-yellow-50">
          {/*
            The label on a box, not a heading in the document, so it does not
            use core's H2 and its heading size and spacing.
          */}
          <h2 className="mb-4 font-bold text-h-xs-m sm:text-h-xs">
            {tocTitle}
          </h2>
          <Ul>
            <TableOfContents items={headings} />
          </Ul>
        </nav>
      )}
      {/*
        The document's blocks are children of this element, not of the wrapper,
        so the space between them is set here.

        The markup is sanitised in src/sanitize.ts before it gets here.
      */}
      <div
        className="flex flex-col gap-8"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  )
}
