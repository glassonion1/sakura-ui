# Sakura UI
Sakura UI - UI components built with Tailwind CSS for React.

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
    './node_modules/@sakura-ui/react/**/*.{js,jsx,ts,tsx}',
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
import { H1, H2, H3, H4, H5, H6, Button, IconButton } from '@sakura-ui/react'

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

## Standard Components
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
- RadioGroup
- CheckboxGroup
- Select
- Text
- Textarea
