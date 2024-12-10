import React from 'react'
import { describe, beforeEach, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'

import { Slot } from '../src'

type TriggerProps = React.ComponentProps<'button'> & { as: React.ElementType }

const Trigger = ({ as: Comp = 'button', ...props }: TriggerProps) => (
  <Comp {...props} />
)

describe('given a slotted Trigger', () => {
  describe('with onClick on itself', () => {
    const handleClick = vi.fn()

    beforeEach(() => {
      handleClick.mockReset()
      render(
        <Trigger as={Slot} onClick={handleClick}>
          <button type="button">Click me</button>
        </Trigger>
      )
      fireEvent.click(screen.getByRole('button'))
    })

    it('should call the onClick passed to the Trigger', async () => {
      expect(handleClick).toHaveBeenCalledTimes(1)
    })
  })

  describe('with onClick on the child', () => {
    const handleClick = vi.fn()

    beforeEach(() => {
      handleClick.mockReset()
      render(
        <Trigger as={Slot}>
          <button type="button" onClick={handleClick}>
            Click me
          </button>
        </Trigger>
      )
      fireEvent.click(screen.getByRole('button'))
    })

    it("should call the child's onClick", async () => {
      expect(handleClick).toHaveBeenCalledTimes(1)
    })
  })

  describe('with onClick on itself AND the child', () => {
    const handleTriggerClick = vi.fn()
    const handleChildClick = vi.fn()

    beforeEach(() => {
      handleTriggerClick.mockReset()
      handleChildClick.mockReset()
      render(
        <Trigger as={Slot} onClick={handleTriggerClick}>
          <button type="button" onClick={handleChildClick}>
            Click me
          </button>
        </Trigger>
      )
      fireEvent.click(screen.getByRole('button'))
    })

    it("should not call the Trigger's onClick", async () => {
      expect(handleTriggerClick).not.toHaveBeenCalledTimes(1)
    })

    it("should call the child's onClick", async () => {
      expect(handleChildClick).toHaveBeenCalledTimes(1)
    })
  })
})
