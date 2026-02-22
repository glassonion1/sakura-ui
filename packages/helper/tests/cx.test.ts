import { describe, it, expect } from 'vitest'
import { cx } from '../src/cx'

describe('cx', () => {
  it('should join multiple class names with a space', () => {
    expect(cx('foo', 'bar', 'baz')).toBe('foo bar baz')
  })

  it('should filter out falsy values', () => {
    expect(cx('foo', false, 'bar', null, undefined, 0, '', 'baz')).toBe(
      'foo bar baz'
    )
  })

  it('should handle conditional class names', () => {
    const isActive = true
    const isDisabled = false
    expect(cx('base', isActive && 'active', isDisabled && 'disabled')).toBe(
      'base active'
    )
  })

  it('should return an empty string when no arguments', () => {
    expect(cx()).toBe('')
  })

  it('should handle a single class name', () => {
    expect(cx('only')).toBe('only')
  })
})
