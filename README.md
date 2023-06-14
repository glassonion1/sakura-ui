# Sakura UI
Sakura UI - UI components built with Tailwind CSS for React. Sakura UI is an unofficial implementation of the Digital Agency Design System. The specifications for each UI component have been implemented with reference to the Digital Agency Design System.

- [Design System 1.2.2](https://www.figma.com/community/file/1172530831489802410)

## Sample page

- [UI Catalog](https://glassonion1.github.io/sakura-ui/)

## Install
```
$ npm install @sakura-ui/sakura-ui
```
or
```
$ yarn add @sakura-ui/sakura-ui
```
or
```
$ pnpm add @sakura-ui/core @sakura-ui/forms @sakura-ui/config
```

## Configuration
tailwind.config.js
```ts
module.exports = {
  mode: 'jit',
  content: [
    './src/pages/**/*.{jsx,tsx}',
    './node_modules/@sakura-ui/core/**/*.{js,jsx,ts,tsx}',
    './node_modules/@sakura-ui/forms/**/*.{js,jsx,ts,tsx}'
  ],
  plugins: [require('@sakura-ui/config')]
}
```

Add fonts from CDN.
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link
      href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100;200;300;400;500;600;700&display=swap"
      rel="stylesheet"
    />
    <link
      href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
      rel="stylesheet"
    />
    ...head
  </head>
  <body>
    ...body
  </body>
</html>
```


## Usage
```ts
import { useState } from 'react'
import { H1, H2, H3, H4, H5, H6, Button, IconButton } from '@sakura-ui/core'

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <div>
      <H1>SakuraUI Heading1</H1>
      <H2>SakuraUI Heading2</H2>
      <H3>SakuraUI Heading3</H3>
      <H4>SakuraUI Heading4</H4>
      <H5>SakuraUI Heading5</H5>
      <H6>SakuraUI Heading6</H6>
      <div>
        <Button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
        <Button
          variant="secondary"
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </Button>
        <IconButton icon="face">Face</IconButton>
      </div>
    </div>
  )
}

export default App
```

## Core components
- H1-H6 Headings
- Link
- Card
- InfoCard
- Ol
- Ul
- Table
- Caption
- Thead
- Tbody
- Th
- Tr
- Td
- Code
- Pre
- Button
- Icon
- IconButton

## Form components
- Radio
- Checkbox
- Select
- Input
- Textarea
- LabelControl
- FieldsetControl
