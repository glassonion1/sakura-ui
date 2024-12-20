import React from 'react'
import { describe, test, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'

import { LabelControl, Select, Input, Textarea, FileInput } from '../src'

describe('LabelControl', () => {
  it('should render a label with a label text', async () => {
    render(<LabelControl labelText="test" data-testid="label" />)

    const label = screen.getByTestId('label')

    expect(label).toBeInTheDocument()

    expect(screen.getByText('test')).toBeInTheDocument()
  })

  it('should render a fieldset with a helper text and error text', async () => {
    render(
      <LabelControl
        labelText="test"
        helperText="helper"
        errorMessage="error"
        isInvalid
      >
        <Input />
      </LabelControl>
    )

    expect(screen.getByText('helper')).toBeInTheDocument()
    expect(screen.getByText('error')).toBeInTheDocument()

    const input = screen.getByLabelText(/test/)

    expect(input).toBeInTheDocument()

    expect(input).toHaveAttribute('aria-describedby', 'helper-text-:r1:')
    expect(input).toHaveAttribute('aria-errormessage', 'error-message-:r1:')

    expect(input).toBeInvalid()
    expect(input).toHaveAttribute('aria-invalid', 'true')
  })

  it('should render a fieldset with a helper text', async () => {
    render(
      <LabelControl labelText="test">
        <Input />
      </LabelControl>
    )

    const input = screen.getByLabelText(/test/)

    expect(input).toBeInTheDocument()

    expect(input).toBeValid()
    expect(input).toHaveAttribute('aria-invalid', 'false')
  })

  it('should display an asterisk only when isRequired prop is true', async () => {
    render(<LabelControl labelText="test" />)

    expect(screen.queryByText('*')).toBeNull()

    render(<LabelControl labelText="test" isRequired />)

    expect(screen.getByText('*')).toBeInTheDocument()
  })

  it('should render an input with required attribute and correct label text', async () => {
    render(
      <LabelControl labelText="test" isRequired>
        <Input defaultValue="test value" />
      </LabelControl>
    )

    const input = screen.getByLabelText(/test/)

    expect(input).toBeInTheDocument()

    expect(input).toBeValid()
    expect(input).toBeRequired()
  })

  it('should render an input as invalid when required but has no value', async () => {
    render(
      <LabelControl labelText="test" isRequired>
        <Input />
      </LabelControl>
    )

    const input = screen.getByLabelText(/test/)

    expect(input).toBeInTheDocument()

    expect(input).toBeInvalid()
    expect(input).toBeRequired()
  })

  test('Test the relationship between the label and input elements.', async () => {
    render(
      <>
        <LabelControl labelText="test1">
          <Select>
            <option value="1" defaultChecked />
          </Select>
        </LabelControl>
        <LabelControl labelText="test2">
          <Input defaultValue="1" />
        </LabelControl>
        <LabelControl labelText="test3">
          <FileInput />
        </LabelControl>
        <LabelControl labelText="test4">
          <Textarea defaultValue="1" />
        </LabelControl>
      </>
    )

    const select = screen.getByLabelText(/test1/)
    expect(select).toBeInTheDocument()
    expect(select).toHaveValue('1')
    expect(select).toHaveAttribute('id')

    const text = screen.getByLabelText(/test2/)
    expect(text).toBeInTheDocument()
    expect(text).toHaveValue('1')
    expect(text).toHaveAttribute('id')

    const file = screen.getByLabelText(/test3/)
    expect(file).toBeInTheDocument()
    expect(file).toHaveAttribute('id')

    const textarea = screen.getByLabelText(/test4/)
    expect(textarea).toBeInTheDocument()
    expect(textarea).toHaveValue('1')
    expect(textarea).toHaveAttribute('id')
  })

  test('Test the relationship between the label and input elements.', async () => {
    render(
      <>
        <LabelControl labelText="test1" htmlFor="id1">
          <Select>
            <option value="1" defaultChecked />
          </Select>
        </LabelControl>
        <LabelControl labelText="test2" htmlFor="id2">
          <Input defaultValue="1" />
        </LabelControl>
        <LabelControl labelText="test3" htmlFor="id3">
          <FileInput />
        </LabelControl>
        <LabelControl labelText="test4" htmlFor="id4">
          <Textarea defaultValue="1" />
        </LabelControl>
      </>
    )

    const select = screen.getByLabelText(/test1/)
    expect(select).toBeInTheDocument()
    expect(select).toHaveValue('1')
    expect(select).toHaveAttribute('id', 'id1')

    const input = screen.getByLabelText(/test2/)
    expect(input).toBeInTheDocument()
    expect(input).toHaveValue('1')
    expect(input).toHaveAttribute('id', 'id2')

    const file = screen.getByLabelText(/test3/)
    expect(file).toBeInTheDocument()
    expect(file).toHaveAttribute('id', 'id3')

    const textarea = screen.getByLabelText(/test4/)
    expect(textarea).toBeInTheDocument()
    expect(textarea).toHaveValue('1')
    expect(textarea).toHaveAttribute('id', 'id4')
  })
})
