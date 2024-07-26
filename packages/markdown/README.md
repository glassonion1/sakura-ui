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
:link-button[Services and applications]{href=/services}
```

### YouTube
```
::youtube[title]{id=yXdbvBzxeb8}
```

### Multi column layout
```
::::grid-cols-3
:::cell
![alternative text](https://dummyimage.com/600x400/000/fff)
Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
:::
:::cell
![alternative text](https://dummyimage.com/600x400/000/fff)
Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
:::
:::cell
![alternative text](https://dummyimage.com/600x400/000/fff)
Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
:::
::::
```

### Multi column layout with card
```
::::grid-cols-3
:::card
::card-img{alt=alternative_text src=https://dummyimage.com/600x400/000/fff}
::card-title[Card title]
::card-description[Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.]
:::
:::card
::card-img{alt=alternative_text src=https://dummyimage.com/600x400/000/fff}
::card-title[Card title]
::card-description[Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.]
:::
:::card
::card-img{alt=alternative_text src=https://dummyimage.com/600x400/000/fff}
::card-title[Card title]
::card-description[Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.]
:::
::::
```

### FAQ
```
:::faq
::faq-q[Why you need an FAQ page]
::faq-a[Here are the benefits of having an FAQ page.]
::faq-q[Whom to contact?]
::faq-a[You can contact the apprenticeship office through our official phone hotline above, or with the web-form below. We generally respond to written requests within 7-10 days.]
:::
```
or
```
::::faq
:::faq-q
Why you need an FAQ page
:::
:::faq-a
Here are the benefits of having an FAQ page.
:::
:::faq-q
Whom to contact?
:::
:::faq-a
You can contact the apprenticeship office through our official phone hotline above, or with the web-form below. We generally respond to written requests within 7-10 days.
:::
::::
```
