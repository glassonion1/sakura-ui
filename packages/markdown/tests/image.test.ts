import { describe, expect, it } from 'vitest'
import { render } from '../src/render'

const html = (markdown: string) => render(markdown).html
const style = (markdown: string) => /style="([^"]*)"/.exec(html(markdown))?.[1]

/**
 * `::img` is the Markdown image plus a size. A document that needs one reaches
 * for raw HTML and an inline style otherwise.
 */
describe('img', () => {
  it('should render the source and the alternative text', () => {
    const out = html('::img{src=/a.png alt="A field at dawn"}')
    expect(out).toContain('src="/a.png"')
    expect(out).toContain('alt="A field at dawn"')
  })

  it('should take no size', () => {
    expect(style('::img{src=/a.png alt=図}')).toBeUndefined()
  })

  it('should draw at the width asked for', () => {
    expect(style('::img{src=/a.png alt=図 width=520}')).toBe(
      'width:520px; max-width:100%;'
    )
  })

  it('should keep the image inside a narrow column', () => {
    // Without max-width a fixed width overflows on a phone.
    expect(style('::img{src=/a.png alt=図 width=1200}')).toContain(
      'max-width:100%'
    )
  })

  it('should draw at the height asked for', () => {
    expect(style('::img{src=/a.png alt=図 height=300}')).toBe('height:300px;')
  })

  it('should take both', () => {
    expect(style('::img{src=/a.png alt=図 width=520 height=300}')).toBe(
      'width:520px; height:300px; max-width:100%;'
    )
  })

  it('should survive the sanitiser', () => {
    // width and max-width are on the CSS allowlist; a property that is not
    // would be dropped here rather than in the renderer.
    expect(html('::img{src=/a.png alt=図 width=520}')).toContain('520px')
  })

  it('should refuse a javascript URL', () => {
    expect(html('::img{src=javascript:alert(1) alt=図}')).not.toContain(
      'javascript:'
    )
  })

  it('should answer to {#name}', () => {
    expect(html('::img{#figure-1 src=/a.png alt=図}')).toContain('id="figure-1"')
  })

  it('should be empty alt when none is given', () => {
    expect(html('::img{src=/a.png}')).toContain('alt=""')
  })
})
