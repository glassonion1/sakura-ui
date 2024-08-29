import type { Root } from 'mdast'
import { h } from 'hastscript'
import { visit } from 'unist-util-visit'
import type { Directives } from 'mdast-util-directive'
import { isContainerDirective, isDirective } from './helper'

// This plugin is to turn `::linkButton` into divs, passing arbitrary
// attributes.
export const faqPlugin = () => {
  return (tree: Root) => {
    visit(tree, isContainerDirective, (node: Directives) => {
      if (node.name !== 'faq') {
        return
      }

      node.data = node.data ?? {}
      const tagName = 'dl'

      node.data.hName = tagName

      node.data.hProperties = h(tagName, node.attributes || {}).properties

      node.children.forEach((child) => {
        if (!isDirective(child)) {
          return
        }
        if (child.name !== 'faq-q' && child.name !== 'faq-a') {
          return
        }

        child.data = child.data ?? {}
        const tagName = child.name === 'faq-q' ? 'dt' : 'dd'

        child.data.hName = tagName

        child.data.hProperties = h(tagName, child.attributes || {}).properties
      })
    })
  }
}
