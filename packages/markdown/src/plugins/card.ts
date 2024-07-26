import type { Root } from 'mdast'
import { h } from 'hastscript'
import { visit } from 'unist-util-visit'
import type { Directives } from 'mdast-util-directive'
import { isDirective } from './helper'

// This plugin is to turn `:::card` into divs, passing arbitrary
// attributes.
export function cardPlugin() {
  return (tree: Root) => {
    visit(tree, isDirective, (node: Directives) => {
      if (node.type !== 'containerDirective') {
        return
      }
      if (node.name !== 'card') {
        return
      }

      node.data = node.data ?? {}

      const tagName = 'article'

      node.data.hName = tagName

      node.attributes = node.attributes ?? {}
      node.attributes['data-node'] = node.name

      if (node.attributes.as === 'link') {
        node.attributes.as = undefined
        node.attributes['data-behavior'] = 'link'
        node.attributes['data-href'] = node.attributes.href || ''
      }

      node.data.hProperties = h(tagName, node.attributes).properties

      node.children.forEach((child) => {
        if (!isDirective(child)) {
          return
        }

        child.data = child.data ?? {}

        let tagName = 'div'
        if (child.name === 'card-img') {
          tagName = 'img'
        }

        child.data.hName = tagName

        child.attributes = child.attributes ?? {}
        child.attributes['data-node'] = child.name

        child.data.hProperties = h(tagName, child.attributes).properties
      })
    })
  }
}
