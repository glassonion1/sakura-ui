type TreeNode<I> = Omit<I, 'children'> & { children?: TreeNode<I>[] }
type Input<I> = (I & { children: unknown })[]

export const treefy = <I extends { depth: number }>(input: I[]) => {
  const tree: TreeNode<I>[] = []
  const last: TreeNode<I>[] = []
  let top = -1
  let bottom = -1
  for (const { children: _, ...item } of input as Input<I>) {
    if (top < item.depth && item.depth <= bottom + 1) {
      const idx = item.depth - top
      bottom = item.depth
      ;(last[idx - 1].children ??= []).push(item)
      last[idx] = item
      continue
    }
    tree.push(item)
    last[0] = item
    top = bottom = item.depth
  }
  return tree
}
