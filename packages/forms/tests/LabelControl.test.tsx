import * as React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

import { LabelControl } from '../src'

describe('LabelControl', () => {
  test('renders LabelControl component', () => {
    render(<LabelControl labelText="label" />)
  })
})
