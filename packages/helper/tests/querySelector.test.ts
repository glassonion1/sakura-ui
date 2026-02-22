import { describe, it, expect } from 'vitest'
import { focusableSelector } from '../src/querySelector'

describe('focusableSelector', () => {
  it('should be a string', () => {
    expect(typeof focusableSelector).toBe('string')
  })

  it('should include common focusable element selectors', () => {
    expect(focusableSelector).toContain('a[href]')
    expect(focusableSelector).toContain('button')
    expect(focusableSelector).toContain('input')
    expect(focusableSelector).toContain('select')
    expect(focusableSelector).toContain('textarea')
  })

  it('should exclude elements with negative tabindex', () => {
    expect(focusableSelector).toContain(':not([tabindex^="-"])')
  })

  it('should exclude disabled elements for interactive elements', () => {
    expect(focusableSelector).toContain(':not(:disabled)')
  })
})
