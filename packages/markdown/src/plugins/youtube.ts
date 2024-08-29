import type { Root } from 'mdast'
import { visit } from 'unist-util-visit'
import type { Directives } from 'mdast-util-directive'
import type { Literal } from 'unist'
import { isDirective } from './helper'

// This plugin is turn `::youtube` into iframes.
export const youtubePlugin = () => {
  return (tree: Root) => {
    visit(tree, isDirective, (node: Directives) => {
      if (node.type === 'containerDirective' || node.type === 'leafDirective') {
        if (node.name !== 'youtube') return

        const data = node.data || (node.data = {})
        const attributes = node.attributes || {}
        const id = attributes.id

        if (!id) {
          console.error('Unexpected missing `id` on `youtube` directive')
        }

        const child = node.children[0] as Literal

        const title = child.value as string
        const width = attributes.width
        const height = attributes.height
        const allow =
          attributes.allow ||
          'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        const referrerpolicy =
          attributes.referrerpolicy || 'strict-origin-when-cross-origin'

        data.hName = 'iframe'
        data.hProperties = {
          title: title,
          src: `https://www.youtube-nocookie.com/embed/${id}`,
          width: width,
          height: height,
          frameBorder: 0,
          allow: allow,
          referrerpolicy: referrerpolicy,
          allowFullScreen: true,
          loading: 'lazy'
        }
      }
    })
  }
}
