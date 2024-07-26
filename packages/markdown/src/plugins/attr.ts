import type { Root } from 'mdast'
import { h } from 'hastscript'
import { visit } from 'unist-util-visit'
import type { Directives } from 'mdast-util-directive'
import { isDirective } from './helper'

// This plugin is an example to turn `::node` into divs, passing arbitrary
// attributes.
export const attrPlugin = () => {
  return (tree: Root) => {
    visit(tree, isDirective, function (node: Directives) {
      node.data = node.data ?? {}
      const hast = h(node.name, node.attributes || {})

      node.data.hName = hast.tagName
      node.data.hProperties = hast.properties
    })
  }
}
