import React from 'react'
import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'

import { Answer, Faq, Question } from '../src'

describe('Faq', () => {
  it('should render the questions and the answers', async () => {
    render(
      <Faq>
        <Question>Question-1</Question>
        <Answer>Answer-1</Answer>
        <Question>Question-2</Question>
        <Answer>Answer-2</Answer>
      </Faq>
    )

    expect(screen.getByText('Question-1')).toBeInTheDocument()
    expect(screen.getByText('Answer-1')).toBeInTheDocument()
    expect(screen.getByText('Question-2')).toBeInTheDocument()
    expect(screen.getByText('Answer-2')).toBeInTheDocument()
  })

  it('should keep the Q and A markers out of the accessibility tree', async () => {
    render(
      <Faq>
        <Question data-testid="question">Question-1</Question>
        <Answer>Answer-1</Answer>
      </Faq>
    )

    // The letters are there for the eye only; a reader gets the question text.
    const marker = screen.getByTestId('question').firstElementChild
    expect(marker).toHaveTextContent('Q')
    expect(marker).toHaveAttribute('aria-hidden', 'true')
  })

  it('should render a plain definition list', async () => {
    const { container } = render(
      <Faq>
        <Question>Question-1</Question>
        <Answer>Answer-1</Answer>
        <Question>Question-2</Question>
        <Answer>Answer-2</Answer>
      </Faq>
    )

    // The schema.org markup described the whole list as one Question carrying a
    // name and an answer per pair, and it wrapped everything in an article that
    // nothing could name. Both are gone.
    expect(container.querySelector('[itemscope]')).toBeNull()
    expect(container.querySelector('[itemprop]')).toBeNull()
    expect(container.querySelector('article')).toBeNull()
    expect(container.querySelector('dl')).toBeInTheDocument()
    expect(container.querySelectorAll('dt')).toHaveLength(2)
    expect(container.querySelectorAll('dd')).toHaveLength(2)
  })

  it('should pass unknown properties through to the elements', async () => {
    render(
      <Faq data-testid="faq" data-kind="list">
        <Question data-testid="question" data-kind="q">
          Question-1
        </Question>
        <Answer data-testid="answer" data-kind="a">
          Answer-1
        </Answer>
      </Faq>
    )

    expect(screen.getByTestId('faq')).toHaveAttribute('data-kind', 'list')
    expect(screen.getByTestId('question')).toHaveAttribute('data-kind', 'q')
    expect(screen.getByTestId('answer')).toHaveAttribute('data-kind', 'a')
  })
})
