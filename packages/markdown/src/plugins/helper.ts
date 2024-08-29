import type { Directives } from 'mdast-util-directive'
import type { Node } from 'unist'
import type { Heading } from 'mdast'

export const isDirective = (node: Node): node is Directives => {
  return (
    node.type === 'containerDirective' ||
    node.type === 'leafDirective' ||
    node.type === 'textDirective'
  )
}

export const isContainerDirective = (node: Node): node is Directives => {
  return node.type === 'containerDirective'
}

export const isLeafDirective = (node: Node): node is Directives => {
  return node.type === 'leafDirective'
}

export const isTextDirective = (node: Node): node is Directives => {
  return node.type === 'textDirective'
}

export const isHeading = (node: Node): node is Heading => {
  return node.type === 'heading'
}
