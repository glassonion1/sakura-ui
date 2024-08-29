import type { Heading, Root } from 'mdast'
import Slugger from 'github-slugger'
import { visit } from 'unist-util-visit'
import { toString as mdastToString } from 'mdast-util-to-string'
import { treefy } from '@sakura-ui/helper'
import { isHeading } from './helper'

export type HeadingItem = {
  id?: string
  depth: number
  value?: string
  children?: Array<HeadingItem>
}

export const headingsPlugin = () => {
  return (tree: Root, vFile: any) => {
    const headings: Array<HeadingItem> = []
    const slugger = new Slugger()

    const getFlatHeadingsList = (node: Heading) => {
      const h: HeadingItem = {
        id: slugger.slug(mdastToString(node)),
        depth: node.depth,
        value: mdastToString(node)
      }

      headings.push(h)
    }

    visit(tree, isHeading, getFlatHeadingsList)

    if (!vFile.data.fm) vFile.data.fm = {}
    vFile.data.fm.headings = treefy(headings)
  }
}
