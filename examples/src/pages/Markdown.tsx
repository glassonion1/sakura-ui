import { Button, MenuButton, NavigationItem } from '@sakura-ui/core'
import { Textarea } from '@sakura-ui/forms'
import { Markdown as MarkdownRenderer } from '@sakura-ui/markdown'
import clsx from 'clsx'
import React from 'react'
import { markdownSample } from './markdownSample'

const Markdown = () => {
  const [draft, setDraft] = React.useState(markdownSample)
  const [source, setSource] = React.useState(markdownSample)

  const dirty = draft !== source

  const styleSp = 'hidden sm:block'

  // The page is the height of the window and does not scroll; each pane scrolls
  // on its own, the way an editor beside a preview does.
  const pageStyle = `
    text-solid-gray-900
    text-base
    lg:h-screen
    lg:flex
    lg:flex-col
    lg:overflow-hidden
  `

  const paneStyle = `
    flex
    flex-col
    min-h-0
  `

  const paneHeaderStyle = `
    px-6
    py-3
    border-b
    border-solid-gray-420
    text-label
    text-solid-gray-700
  `

  return (
    <div className={pageStyle}>
      <header className="px-6 border-b border-solid-gray-420 shrink-0">
        <div className="py-4 flex items-center justify-between">
          <div className="text-2xl font-bold">
            <a href="/sakura-ui/">Sakura-UI</a>
          </div>
          <nav>
            <ul className="flex sm:gap-8">
              <li className={styleSp}>
                <NavigationItem href="/sakura-ui/">Home</NavigationItem>
              </li>
              <li className={styleSp}>
                <NavigationItem href="/sakura-ui/forms">Forms</NavigationItem>
              </li>
              <li className={styleSp}>
                <NavigationItem href="/sakura-ui/markdown">
                  Markdown
                </NavigationItem>
              </li>
              <li className={clsx(styleSp, 'py-2')} aria-hidden="true">
                |
              </li>
              <li>
                <MenuButton>
                  <div className="fixed top-24 left-0 right-0 max-h-[calc(100vh-6rem)] overflow-y-scroll">
                    <nav className="p-6 bg-white flex flex-col sm:flex-row gap-4 sm:gap-10 justify-center">
                      <ul>
                        <li>
                          <NavigationItem href="/sakura-ui/">
                            Home
                          </NavigationItem>
                        </li>
                        <li>
                          <NavigationItem href="/sakura-ui/forms">
                            Forms
                          </NavigationItem>
                        </li>
                        <li>
                          <NavigationItem href="/sakura-ui/markdown">
                            Markdown
                          </NavigationItem>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </MenuButton>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <div className="px-6 py-3 border-b border-solid-gray-420 bg-solid-gray-50 flex flex-wrap gap-4 items-center justify-between shrink-0">
        <div>
          <h1 className="text-label-b">Markdown</h1>
          <p className="text-label text-solid-gray-700">
            ガイドで使う書き方をひととおり入れてあります。書き換えて試せます。
          </p>
        </div>
        <div className="flex gap-4 items-center">
          <p aria-live="polite" className="text-label text-solid-gray-700">
            {dirty ? '未反映の変更があります' : '反映済み'}
          </p>
          <Button
            size="sm"
            variant="outline"
            onClick={() => {
              setDraft(markdownSample)
              setSource(markdownSample)
            }}
          >
            元に戻す
          </Button>
          <Button size="sm" onClick={() => setSource(draft)}>
            反映する
          </Button>
        </div>
      </div>

      <div className="lg:grid lg:grid-cols-2 lg:flex-1 lg:min-h-0">
        <section
          className={clsx(paneStyle, 'lg:border-r lg:border-solid-gray-420')}
        >
          <h2 id="markdown-editor-label" className={paneHeaderStyle}>
            編集
          </h2>
          <Textarea
            aria-labelledby="markdown-editor-label"
            className="flex-1 min-h-[60vh] lg:min-h-0 w-full rounded-none border-0 font-code text-code"
            spellCheck={false}
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
          />
        </section>

        <section className={paneStyle}>
          <h2 className={paneHeaderStyle}>プレビュー</h2>
          <div className="flex-1 lg:overflow-auto px-6">
            <MarkdownRenderer showToc shiftHeading={2}>
              {source}
            </MarkdownRenderer>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Markdown
