import type { Root } from 'mdast'
import { h } from 'hastscript'
import { visit } from 'unist-util-visit'
import type { Directives } from 'mdast-util-directive'
import { isDirective } from './helper'

// This plugin is to turn `:::card` into divs, passing arbitrary
// attributes.
export const cardPlugin = () => {
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

      const attributes = node.attributes
      const isLink = attributes['data-behavior'] === 'link'

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

        // The title carries the link, so it needs the href of the card. The
        // footer only needs to know that it belongs to a link card, to render
        // the arrow. A child cannot read its parent once this is a React tree,
        // so the marker is copied down here.
        if (isLink && (child.name === 'card-title' || child.name === 'card-footer')) {
          child.attributes['data-behavior'] = 'link'
          if (child.name === 'card-title') {
            child.attributes['data-href'] = attributes['data-href'] || ''
          }
        }

        child.data.hProperties = h(tagName, child.attributes).properties
      })
    })
  }
}
