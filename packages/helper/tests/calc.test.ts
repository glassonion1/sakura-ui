import { describe, it, expect } from 'vitest'
import { mod } from '../src/calc'

describe('mod', () => {
  it('should return the remainder for positive numbers', () => {
    expect(mod(5, 3)).toBe(2)
  })

  it('should return a positive result for negative dividend', () => {
    expect(mod(-1, 3)).toBe(2)
    expect(mod(-5, 3)).toBe(1)
  })

  it('should return 0 when evenly divisible', () => {
    expect(mod(6, 3)).toBe(0)
    expect(mod(7, 7)).toBe(0)
  })

  it('should return 0 when dividend is 0', () => {
    expect(mod(0, 5)).toBe(0)
  })
})
