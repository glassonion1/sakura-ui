import type { Root } from 'mdast'
import { h } from 'hastscript'
import { visit } from 'unist-util-visit'
import type { Directives } from 'mdast-util-directive'
import { isContainerDirective } from './helper'

// This plugin is to turn `::linkButton` into divs, passing arbitrary
// attributes.
export function gridPlugin() {
  return (tree: Root) => {
    visit(tree, isContainerDirective, (node: Directives) => {
      if (!node.name.startsWith('grid-cols-')) {
        return
      }

      node.attributes = node.attributes ?? {}

      if (node.attributes.as === 'list') {
        node.attributes.as = undefined
        node.attributes['data-behavior'] = 'list'
      }

      const gridNum: number = parseInt(node.name.split('-').pop() || '1')

      // Tailwind doesn't generate CSS for string interpolation
      const gridClass: { [key: number]: string } = {
        1: 'md:grid-cols-1',
        2: 'md:grid-cols-2',
        3: 'md:grid-cols-3',
        4: 'md:grid-cols-4',
        5: 'md:grid-cols-5',
        6: 'md:grid-cols-6',
        7: 'md:grid-cols-6',
        8: 'md:grid-cols-6',
        9: 'md:grid-cols-6',
        10: 'md:grid-cols-6',
        11: 'md:grid-cols-6',
        12: 'md:grid-cols-12'
      }

      node.data = node.data ?? {}
      const tagName = 'div'

      node.data.hName = tagName

      node.attributes.class = `flex flex-col md:grid ${gridClass[gridNum]} gap-8`

      node.data.hProperties = h(tagName, node.attributes).properties
    })
  }
}
