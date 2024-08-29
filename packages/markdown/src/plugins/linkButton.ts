import type { Root } from 'mdast'
import { h } from 'hastscript'
import { visit } from 'unist-util-visit'
import type { Directives } from 'mdast-util-directive'
import { isTextDirective } from './helper'

// This plugin is to turn `::linkButton` into divs, passing arbitrary
// attributes.
export const linkButtonPlugin = () => {
  return (tree: Root) => {
    visit(tree, isTextDirective, (node: Directives) => {
      if (node.name !== 'link-button') return

      const data = node.data || (node.data = {})
      const tagName = 'a'

      data.hName = tagName

      node.attributes = node.attributes ?? {}
      node.attributes['data-node'] = node.name

      data.hProperties = h(tagName, node.attributes).properties
    })
  }
}
