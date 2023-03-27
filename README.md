# Sakura UI
Sakura UI - UI components built with Tailwind CSS for React. Sakura UI is an unofficial implementation of the Digital Agency Design System. The specifications for each UI component have been implemented with reference to the Digital Agency Design System. Please refer to this link for more information about the Digital Agency Design System.

- [Design System 1.2.1](https://www.figma.com/community/file/1172530831489802410)

## Install
```
$ npm install @sakura-ui/sakura-ui
```
or
```
$ yarn add @sakura-ui/sakura-ui
```

## Configuration
tailwind.config.js
```
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
```
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
- IconButton

## Form components
- Radio
- Checkbox
- Select
- Text
- Textarea
- LabelControl
- FieldsetControl

## UI Samples

### Heading
![Heading](https://user-images.githubusercontent.com/1037944/227953097-5c35de72-b4a2-4ec3-95bf-a65ccbb5744e.png)

### List
![List](https://user-images.githubusercontent.com/1037944/227954257-418f55a0-69fe-4f97-85cd-e46e03ebada6.png)

### Button
![Button](https://user-images.githubusercontent.com/1037944/227955904-8c5f3466-d7c0-426d-b7b2-af58f13d84d5.png)

### Icon button
![Icon button](https://user-images.githubusercontent.com/1037944/227956130-142160f6-263f-48d4-83d3-3ba9479c14f2.png)

### Select
![Select](https://user-images.githubusercontent.com/1037944/227956833-29d1201d-e9ea-4124-b4c3-f14c937a9079.png)

### Radio button
![Radio](https://user-images.githubusercontent.com/1037944/227956968-2c0519ba-0e8c-424e-9949-722a6ab6fcba.png)

### Checkbox
![Checkbox](https://user-images.githubusercontent.com/1037944/227957113-a75370eb-b1ed-4010-b30f-bc44db1846a5.png)

### Textbox
![Textbox](https://user-images.githubusercontent.com/1037944/227957734-7aeabd51-f2ae-441b-94ae-b5ebb1536811.png)

### Textarea
![Textarea](https://user-images.githubusercontent.com/1037944/227957968-627a2808-7f5a-4106-8824-9622d5ab7c1a.png)
