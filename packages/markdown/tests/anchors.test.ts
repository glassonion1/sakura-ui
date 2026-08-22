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

  it('should be reachable from a link in the prose', () => {
    // The point of naming one. decorate.ts marks up links that leave the page,
    // and a link to a name on this one must not be taken for one of those.
    const out = html('[料金へ](#pricing)\n\n:::cell{#pricing}\n本文\n:::')
    expect(out).toContain('href="#pricing"')
    expect(out).toContain('id="pricing"')
    expect(out).not.toContain('target="_blank"')
  })

  it('should not answer to {id=name}', () => {
    // A sigil says something about the element and means the same everywhere;
    // an attribute belongs to the directive that reads it. Keeping them apart
    // is what stopped the video on a youtube embed taking the anchor's place.
    expect(ids(':::cell{id=pricing}\n本文\n:::')).not.toContain('pricing')
  })

  it('should leave the video to the video', () => {
    const out = html('::youtube[題]{#player video=dQw4w9WgXcQ}')
    expect(out).toContain('id="player"')
    expect(out).toContain('embed/dQw4w9WgXcQ')
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

/**
 * A writer has the address of the video, not its id, so the address is what
 * the directive takes.
 */
describe('the youtube video', () => {
  const src = (markdown: string) =>
    /src="([^"]*)"/.exec(render(markdown).html)?.[1]

  const ID = 'dQw4w9WgXcQ'
  const embed = `https://www.youtube-nocookie.com/embed/${ID}`

  it.each([
    ['the id itself', ID],
    ['the watch page', `https://www.youtube.com/watch?v=${ID}`],
    ['the watch page with more on it', `https://www.youtube.com/watch?v=${ID}&t=42s`],
    ['the share link', `https://youtu.be/${ID}`],
    ['a short', `https://www.youtube.com/shorts/${ID}`],
    ['an embed already written', `https://www.youtube.com/embed/${ID}`]
  ])('should take %s', (_what, written) => {
    expect(src(`::youtube[題]{video=${written}}`)).toBe(embed)
  })

  it('should not let the document decide what the frame may reach for', () => {
    const out = render(
      '::youtube[題]{video=dQw4w9WgXcQ allow=camera referrerpolicy=unsafe-url}'
    ).html
    expect(out).not.toContain('camera')
    expect(out).not.toContain('unsafe-url')
    expect(out).toContain('referrerpolicy="strict-origin-when-cross-origin"')
  })
})
