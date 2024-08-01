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
<img width="288" alt="スクリーンショット 2024-07-26 23 44 39" src="https://github.com/user-attachments/assets/997ccf27-4d83-4fb5-b173-ae94cd7d76cb">

### YouTube
```
::youtube[title]{id=yXdbvBzxeb8}
```
<img width="494" alt="スクリーンショット 2024-07-26 23 48 18" src="https://github.com/user-attachments/assets/a724cf27-a1af-4633-b9a8-27b25b04e3ae">

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
<img width="1143" alt="スクリーンショット 2024-07-26 23 51 46" src="https://github.com/user-attachments/assets/60b813b4-3a8c-451d-99b2-58c1e5b3a3b4">

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
<img width="1133" alt="スクリーンショット 2024-07-26 23 55 37" src="https://github.com/user-attachments/assets/9a6dff6f-7115-451a-9d15-f953ddad78b7">

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
<img width="1133" alt="スクリーンショット 2024-07-26 23 59 50" src="https://github.com/user-attachments/assets/0f6b51fb-068e-4173-8011-f782c1b894f6">
