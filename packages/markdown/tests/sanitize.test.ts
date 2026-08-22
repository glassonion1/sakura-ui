import sharedDOMPurify from 'dompurify'
import { describe, expect, it } from 'vitest'
import { render } from '../src/render'

const html = (markdown: string) => render(markdown).html

/**
 * The pipeline lets raw HTML through, because 40% of the documents it renders
 * contain some. These are the things it must not let through with it.
 */
describe('sanitize', () => {
  describe('script', () => {
    it('should drop a script element', () => {
      expect(html('<script>alert(1)</script>')).not.toContain('alert')
    })

    it('should drop an event handler', () => {
      const out = html('<img src="/a.png" onerror="alert(1)">')
      expect(out).toContain('src="/a.png"')
      expect(out).not.toContain('onerror')
    })

    it('should drop a javascript URL', () => {
      expect(html('[click](javascript:alert(1))')).not.toContain('javascript:')
    })

    it('should drop a javascript URL written as a directive', () => {
      // marked keeps its own URL cleaning to itself, so a renderer writing href
      // has to bring one; without it this href went straight through.
      const out = html(':link-button[click]{href=javascript:alert(1)}')
      expect(out).not.toContain('javascript:')
    })

    it('should drop a javascript URL in raw HTML', () => {
      expect(html('<a href="javascript:alert(1)">click</a>')).not.toContain(
        'javascript:'
      )
    })
  })

  describe('the shared DOMPurify', () => {
    // DOMPurify's default export is one object for the whole page. A hook put
    // on it runs for everyone, and anyone calling removeAllHooks takes it back
    // off again — while sanitize goes on returning a fragment, so nothing says
    // the filters have gone.
    it('should not be given this package hooks', () => {
      html('<div style="position: fixed">x</div>')
      expect(
        sharedDOMPurify.sanitize('<div style="position: fixed">x</div>')
      ).toContain('position: fixed')
    })

    it('should not be able to take this package filters away', () => {
      html('<div style="position: fixed">x</div>')
      sharedDOMPurify.removeAllHooks()
      expect(html('<div style="position: fixed">x</div>')).not.toContain(
        'position: fixed'
      )
    })
  })

  describe('data URLs', () => {
    // The URL cleaner used to let images through while ALLOWED_URI_REGEXP took
    // them out a step later. Nothing in the content uses one; these say which
    // of the two was meant.
    const PIXEL =
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAAAAAA6fptVAAAACklEQVR4nGMAAQAABQABDQottAAAAABJRU5ErkJggg=='

    it('should drop one written as an image', () => {
      expect(html(`![点](${PIXEL})`)).not.toContain('data:')
    })

    it('should drop one written as a directive', () => {
      expect(html(`::card-img{src=${PIXEL} alt=点}`)).not.toContain('data:')
    })

    it('should drop one written in raw HTML', () => {
      expect(html(`<img src="${PIXEL}" alt="点">`)).not.toContain('data:')
    })
  })

  describe('style', () => {
    it('should keep the properties the content uses', () => {
      const out = html(
        '<table><tbody><tr><td style="vertical-align: top; white-space: nowrap; width: 15%;">値</td></tr></tbody></table>'
      )
      expect(out).toContain('vertical-align: top')
      expect(out).toContain('white-space: nowrap')
      expect(out).toContain('width: 15%')
    })

    it('should drop a fixed overlay', () => {
      // A transparent box over the page takes every click aimed at what is
      // underneath it, without a line of script.
      const out = html(
        '<div style="position: fixed; top: 0; left: 0; width: 100%; height: 100%">x</div>'
      )
      expect(out).not.toContain('position: fixed')
    })

    it('should keep position relative', () => {
      const out = html('<div style="position: relative">x</div>')
      expect(out).toContain('position: relative')
    })

    it('should drop a url() reference', () => {
      const out = html(
        '<div style="background-color: red; background-image: url(https://evil.example/a.png)">x</div>'
      )
      expect(out).toContain('background-color: red')
      expect(out).not.toContain('url(')
    })
  })

  describe('frames', () => {
    it('should keep the video the youtube directive embeds', () => {
      const out = html('::youtube[題]{video=abc123}')
      expect(out).toContain('www.youtube-nocookie.com/embed/abc123')
    })

    it('should drop an iframe pointing anywhere else', () => {
      expect(html('<iframe src="https://evil.example/x"></iframe>')).not.toContain(
        'evil.example'
      )
    })

    it('should drop an iframe with no source', () => {
      expect(html('<iframe></iframe>')).not.toContain('<iframe')
    })
  })

  describe('links that leave the page', () => {
    it('should not hand the opener to the page it opens', () => {
      const out = html('<a href="https://example.com" target="_blank">外部</a>')
      expect(out).toContain('rel="noopener noreferrer"')
    })

    it('should say that the link opens elsewhere', () => {
      const out = html('[外部](https://example.com)')
      expect(out).toContain('Opens in new tab')
    })
  })

  describe('what the content needs', () => {
    it('should keep a table that spans cells', () => {
      const out = html(
        '<table><tbody><tr><td colspan="2" rowspan="3">値</td></tr></tbody></table>'
      )
      expect(out).toContain('colspan="2"')
      expect(out).toContain('rowspan="3"')
    })

    it('should keep a caption and a column group', () => {
      const out = html(
        '<table><caption>表</caption><colgroup><col style="width: 15%;"></colgroup></table>'
      )
      expect(out).toContain('<caption')
      expect(out).toContain('<col')
    })

    it('should keep a details block and the markdown inside it', () => {
      const out = html('<details>\n<summary>題</summary>\n\n- 項目\n\n</details>')
      expect(out).toContain('<details>')
      expect(out).toContain('<summary>')
      expect(out).toContain('<li>')
    })
  })
})
