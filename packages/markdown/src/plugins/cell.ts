import type { Root } from 'mdast'
import { h } from 'hastscript'
import { visit } from 'unist-util-visit'
import type { Directives } from 'mdast-util-directive'
import { isContainerDirective, isDirective } from './helper'

// This plugin is to turn `:::cell` into divs, passing arbitrary
// attributes.
export function cellPlugin() {
  return (tree: Root) => {
    visit(tree, isContainerDirective, (node: Directives) => {
      if (node.name !== 'cell') {
        return
      }

      node.data = node.data ?? {}
      const tagName = 'div'

      node.data.hName = tagName

      node.attributes = node.attributes ?? {}
      node.attributes['data-node'] = node.name

      node.data.hProperties = h(tagName, node.attributes).properties

      node.children.forEach((child) => {
        if (!isDirective(child)) {
          return
        }
        if (child.name !== 'cell-img') {
          return
        }

        child.data = child.data ?? {}

        const tagName = 'img'

        child.data.hName = tagName

        child.attributes = child.attributes ?? {}
        child.attributes['data-node'] = child.name

        child.data.hProperties = h(tagName, child.attributes).properties
      })
    })
  }
}
