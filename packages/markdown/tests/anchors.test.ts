import { describe, expect, it } from 'vitest'
import { render } from '../src/render'

const html = (markdown: string) => render(markdown).html

const ids = (markdown: string) =>
  Array.from(html(markdown).matchAll(/ id="([^"]*)"/g)).map((m) => m[1])

/**
 * `{#name}` names the element a directive renders, so a link elsewhere on the
 * site can point at it. The parser has read the sigil since the syntax existed;
 * nothing passed it on, so writers reached for an empty <div id> instead.
 */
describe('anchors', () => {
  it('should put the name on the element', () => {
    expect(ids(':::card{#pricing}\n::card-title[料金]\n:::')).toContain(
      'pricing'
    )
  })

  it('should name each kind of directive', () => {
    const cases: Array<[string, string]> = [
      ['grid', '::::grid-cols-2{#a}\n:::cell\n本文\n:::\n::::'],
      ['cell', ':::cell{#a}\n本文\n:::'],
      ['faq', ':::faq{#a}\n::faq-q[問]\n::faq-a[答]\n:::'],
      ['card-description', '::card-description[説明]{#a}'],
      ['card-img', '::card-img{#a src=/a.png alt=図}'],
      ['link-button', ':link-button[押す]{#a href=/x}']
    ]
    for (const [what, markdown] of cases) {
      expect(ids(markdown), what).toContain('a')
    }
  })

  it('should name the heading a card title renders as', () => {
    // Not the anchor inside it as well, which would be the id twice.
    expect(ids(':::card{href=/x}\n::card-title[題]{#top}\n:::')).toEqual(['top'])
  })

  it('should read {id=name} as the same thing', () => {
    expect(ids(':::cell{id=pricing}\n本文\n:::')).toContain('pricing')
  })

  it('should leave the video id to the video', () => {
    // The video is `video`, so `id` is free to mean what it means anywhere
    // else on the page.
    const out = html('::youtube[題]{#player video=abc123}')
    expect(out).toContain('id="player"')
    expect(out).toContain('embed/abc123')
  })

  it('should keep a name a heading would otherwise have taken', () => {
    const out = render('## 概要\n\n:::cell{#概要}\n本文\n:::')
    expect(out.html).toContain('id="概要"')
    // The heading is generated first and keeps the plain slug; what matters is
    // that the two do not both answer to it.
    const all = Array.from(out.html.matchAll(/ id="([^"]*)"/g)).map((m) => m[1])
    expect(new Set(all).size).toBe(all.length)
  })

  it('should not let a later heading repeat a name written by hand', () => {
    const out = render('<h2 id="概要">前書き</h2>\n\n## 概要')
    const all = Array.from(out.html.matchAll(/ id="([^"]*)"/g)).map((m) => m[1])
    expect(new Set(all).size).toBe(all.length)
  })
})
