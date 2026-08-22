import type { DirectiveRenderer } from './context'

/**
 * Fixed rather than taken from the document. What an embedded frame may reach
 * for, and how much of the address it hands to the other end, are the page's to
 * settle; the person writing the prose is not the one to ask.
 */
const ALLOW =
  'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
const REFERRER_POLICY = 'strict-origin-when-cross-origin'

/**
 * The video, from its id or from any of the addresses a writer has to hand —
 * the watch page, the share link, an embed already written, a short. An id is
 * eleven characters of that alphabet, which is what tells one from the other.
 *
 * Anything else is handed on as it came: a video that does not exist says so
 * where it would have played, and a directive that rendered nothing would not.
 */
const ID = /^[\w-]{11}$/
const ID_IN_URL = /(?:youtu\.be\/|[?&]v=|\/embed\/|\/shorts\/)([\w-]{11})/

const videoId = (value: string | undefined): string => {
  if (!value) return ''
  if (ID.test(value)) return value
  return ID_IN_URL.exec(value)?.[1] ?? value
}

export const youtubeRenderers: Record<string, DirectiveRenderer> = {
  youtube: ({ token, attrs, root, nl, parser }) => {
    // The label, as text: it becomes the frame's title, which is the name a
    // screen reader reads the embed out under.
    const title = parser.parseInline(token.tokens, parser.textRenderer)
    return `<iframe${root({
      title,
      src: `https://www.youtube-nocookie.com/embed/${encodeURIComponent(videoId(attrs.video))}`,
      class: 'aspect-video w-full max-w-[470px]',
      style: attrs.width ? `width:${attrs.width}px` : undefined,
      frameborder: '0',
      allow: ALLOW,
      referrerpolicy: REFERRER_POLICY,
      allowfullscreen: true,
      loading: 'lazy'
    })}></iframe>${nl}`
  }
}
