/*
MIT License
Copyright (c) 2019 Segun Adebayo
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

import React, { type ComponentProps } from 'react'

// biome-ignore lint/suspicious/noExplicitAny:
export type As<Props = any> = React.ElementType<Props>

export type OmitCommonProps<
  Target,
  // biome-ignore lint/suspicious/noExplicitAny:
  OmitAdditionalProps extends keyof any = never
> = Omit<Target, 'as' | OmitAdditionalProps>

export type RightJoinProps<
  SourceProps extends object = object,
  OverrideProps extends object = object
> = OmitCommonProps<SourceProps, keyof OverrideProps> & OverrideProps

type MergeWithAs<
  ComponentProps extends object,
  AsProps extends object,
  AdditionalProps extends object = object,
  AsComponent extends As = As
> = RightJoinProps<ComponentProps, AdditionalProps> &
  RightJoinProps<AsProps, AdditionalProps> & {
    as?: AsComponent
  }

export type PropsWithAs<
  Component extends As,
  Props extends object
> = RightJoinProps<ComponentProps<Component>, Props> & {
  as?: As
}

export type PropsOf<T extends As> = React.ComponentPropsWithoutRef<T> & {
  as?: As
}

export type ComponentWithAs<
  Component extends As,
  Props extends object = object
> = {
  <AsComponent extends As = Component>(
    props: MergeWithAs<
      React.ComponentProps<Component>,
      React.ComponentProps<AsComponent>,
      Props,
      AsComponent
    >
    // biome-ignore lint/correctness/noUndeclaredVariables:
  ): JSX.Element
  displayName?: string
  // biome-ignore lint/suspicious/noExplicitAny:
  propTypes?: React.WeakValidationMap<any>
  // biome-ignore lint/suspicious/noExplicitAny:
  contextTypes?: React.ValidationMap<any>
  // biome-ignore lint/suspicious/noExplicitAny:
  defaultProps?: Partial<any>
  id?: string
}
