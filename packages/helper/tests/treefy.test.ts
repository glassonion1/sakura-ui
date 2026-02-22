import { describe, it, expect } from 'vitest'
import { treefy } from '../src/treefy'

describe('treefy', () => {
  it('should return an empty array for empty input', () => {
    expect(treefy([])).toEqual([])
  })

  it('should keep flat items at the root level when all depths are the same', () => {
    const input = [
      { depth: 1, name: 'a' },
      { depth: 1, name: 'b' },
      { depth: 1, name: 'c' }
    ]
    expect(treefy(input)).toEqual([
      { depth: 1, name: 'a' },
      { depth: 1, name: 'b' },
      { depth: 1, name: 'c' }
    ])
  })

  it('should nest children under their parent', () => {
    const input = [
      { depth: 1, name: 'parent' },
      { depth: 2, name: 'child1' },
      { depth: 2, name: 'child2' }
    ]
    expect(treefy(input)).toEqual([
      {
        depth: 1,
        name: 'parent',
        children: [
          { depth: 2, name: 'child1' },
          { depth: 2, name: 'child2' }
        ]
      }
    ])
  })

  it('should nest deeply (depth 1 -> 2 -> 3)', () => {
    const input = [
      { depth: 1, name: 'root' },
      { depth: 2, name: 'child' },
      { depth: 3, name: 'grandchild' }
    ]
    expect(treefy(input)).toEqual([
      {
        depth: 1,
        name: 'root',
        children: [
          {
            depth: 2,
            name: 'child',
            children: [{ depth: 3, name: 'grandchild' }]
          }
        ]
      }
    ])
  })

  it('should handle multiple root nodes with children', () => {
    const input = [
      { depth: 1, name: 'h1-first' },
      { depth: 2, name: 'h2-under-first' },
      { depth: 1, name: 'h1-second' },
      { depth: 2, name: 'h2-under-second' }
    ]
    expect(treefy(input)).toEqual([
      {
        depth: 1,
        name: 'h1-first',
        children: [{ depth: 2, name: 'h2-under-first' }]
      },
      {
        depth: 1,
        name: 'h1-second',
        children: [{ depth: 2, name: 'h2-under-second' }]
      }
    ])
  })

  it('should strip existing children property from input items', () => {
    const input = [
      { depth: 1, name: 'parent', children: 'should be removed' },
      { depth: 2, name: 'child', children: null }
    ]
    expect(treefy(input)).toEqual([
      {
        depth: 1,
        name: 'parent',
        children: [{ depth: 2, name: 'child' }]
      }
    ])
  })

  // PR #21: treefy bug fix - children were not properly attached to parent nodes
  it('should correctly attach children to parent (regression test for PR #21)', () => {
    const input = [
      { depth: 2, name: 'hogehoge1' },
      { depth: 3, name: 'fugafuga' },
      { depth: 2, name: 'hogehoge2' }
    ]
    const result = treefy(input)

    // hogehoge1 should have fugafuga as a child
    expect(result[0].children).toEqual([{ depth: 3, name: 'fugafuga' }])
    // hogehoge2 should be a separate root node, not nested under hogehoge1
    expect(result).toHaveLength(2)
    expect(result[1]).toEqual({ depth: 2, name: 'hogehoge2' })
  })
})
