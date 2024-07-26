# Sakura UI markdown extension
Sakura UI markdown extension is a markdown extension library that utilizes the Directive syntax of markdown.

For details on markdown directives, please refer to the following page.
- [remark-directive](https://github.com/remarkjs/remark-directive)

## Install
```
$ npm install @sakura-ui/markdown
```
or
```
$ yarn add @sakura-ui/markdown
```
or
```
$ pnpm add @sakura-ui/markdown
```

## Usage
When using libraries such as Gatsby or Next.js, please use them in combination with React Suspense.
```ts
import React, { lazy, Suspense } from 'react'

const Markdown = lazy(() =>
  import('@sakura-ui/markdown').then((module) => ({ default: module.Markdown }))
)

export const MyPage = () => {
  const text = `
    # Page title
    I really like using Markdown.
  
    - First item
    - Second item
    - Third item
  `

  return (
    <div>
      <Suspense fallback={<div />}>
        <Markdown>{text}</Markdown>
      </Suspense>
    </div>
  );
}
```

## Syntax
### LinkButton
```
:link-button[services and applications]{href=/services}
```

### YouTube
```
::youtube[title]{id=o_dzh2vzyMMn}
```

### Multi column layout
```
::::grid-cols-2
:::cell
::cell-img{alt=alternative_text src=https://image.foo}
Cell contents...
:::
:::cell
::cell-description[Cell text...]
:::
::::
```

### Multi column layout with card
```
::::grid-cols-2
:::card
::card-title[card title]
::card-description[Cell text...]
:::
:::card
::card-img{alt=alternative_text src=https://image.foo}
::card-title[card title]
::card-description[Cell text...]
:::
::::
```

### FAQ
```
:::faq
::faq-q[Question1]
::faq-a[Answer1]
::faq-q[Question2]
::faq-a[Answer2]
:::
```
or
```
::::faq
:::faq-q
Question1
:::
:::faq-a
Answer1
:::
:::faq-q
Question2
:::
:::faq-a
Answer2
:::
::::
```
