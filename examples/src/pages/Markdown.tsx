import { H1, H2, MenuButton, NavigationItem } from '@sakura-ui/core'
import { Markdown as MarkdownRenderer } from '@sakura-ui/markdown'
import clsx from 'clsx'
import React from 'react'
import { markdownSample } from './markdownSample'

const Markdown = () => {
  const style = `
    min-h-screen
    text-solid-gray-900
    text-base
  `

  const styleSp = 'hidden sm:block'

  // The source sits still while the rendered document scrolls past it, so the
  // two can be read against each other.
  const paneStyle = `
    lg:sticky
    lg:top-0
    lg:h-screen
    lg:overflow-auto
    py-8
  `

  return (
    <div className={style}>
      <header className="px-6 border-b border-solid-gray-420">
        <div className="py-6 flex items-center justify-between">
          <div className="text-3xl font-bold">
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
                  <ul className="flex flex-col gap-4">
                    <li>
                      <NavigationItem href="/sakura-ui/">Home</NavigationItem>
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
                </MenuButton>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="px-6">
        <H1 className="pt-8">Markdown</H1>
        <p className="pt-4 pb-4">
          左が書いたもの、右が出たものです。ガイドが実際に使っている書き方を
          ひととおり並べてあるので、パイプラインに手を入れたらここを見て
          崩れていないか確かめてください。
        </p>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <section className={paneStyle}>
            <H2 className="pt-0">書いたもの</H2>
            <pre className="mt-4 p-4 bg-solid-gray-50 rounded-lg text-code font-code whitespace-pre-wrap [overflow-wrap:anywhere]">
              {markdownSample}
            </pre>
          </section>

          <section className="py-8">
            <H2 className="pt-0">出たもの</H2>
            <MarkdownRenderer showToc shiftHeading={2}>
              {markdownSample}
            </MarkdownRenderer>
          </section>
        </div>
      </main>
    </div>
  )
}

export default Markdown
