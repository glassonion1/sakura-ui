import { H2, Link, Ul } from '@sakura-ui/core'
import React from 'react'
import { type HeadingItem, render } from '../render'

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
  const { html, headings } = React.useMemo(
    () => render(children, { shiftHeading, tocMaxDepth }),
    [children, shiftHeading, tocMaxDepth]
  )

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
          <H2 className="pt-0">{tocTitle}</H2>
          <Ul>
            <TableOfContents items={headings} />
          </Ul>
        </nav>
      )}
      {/* The markup is sanitised in src/sanitize.ts before it gets here. */}
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  )
}
