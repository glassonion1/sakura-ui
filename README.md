# Sakura UI
Sakura UI - UI components built with Tailwind CSS for React. Sakura UI is an unofficial implementation of the Digital Agency Design System. The specifications for each UI component have been implemented with reference to the Digital Agency Design System.

- [Digital Agency Design System](https://www.digital.go.jp/policies/servicedesign/designsystem)

## Sample page

- [UI Catalog](https://glassonion1.github.io/sakura-ui/)

## Install
```
$ npm install @sakura-ui/core @sakura-ui/forms @sakura-ui/tailwind-theme-plugin @sakura-ui/markdown
```
or
```
$ yarn add @sakura-ui/core @sakura-ui/forms @sakura-ui/tailwind-theme-plugin @sakura-ui/markdown
```
or
```
$ pnpm add @sakura-ui/core @sakura-ui/forms @sakura-ui/tailwind-theme-plugin @sakura-ui/markdown
```

### For React 18
```
$ pnpm add @sakura-ui/core@0.3.1 @sakura-ui/forms@0.2.2 @sakura-ui/tailwind-theme-plugin@0.2.2 @sakura-ui/markdown@0.0.17
```

## Configuration
tailwind.config.js
```ts
module.exports = {
  mode: 'jit',
  content: [
    './src/pages/**/*.{jsx,tsx}',
    './node_modules/@sakura-ui/core/**/*.{js,jsx,ts,tsx}',
    './node_modules/@sakura-ui/forms/**/*.{js,jsx,ts,tsx}',
    './node_modules/@sakura-ui/markdown/**/*.{js,jsx,ts,tsx}'
  ],
  plugins: [require('@sakura-ui/tailwind-theme-plugin')]
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
      rel="preload"
    />
    <link
      href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght@100;200;300;400;500;600;700&display=swap"
      rel="preload"
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
- LinkCard
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
- FileInput
- Textarea
- LabelControl
- FieldsetControl

## Markdwon extension
- Markdown

## Development

### Setup
```
$ pnpm install
```

### Run the example app
`examples` resolves each package to its `src` through Vite aliases, so **no build step is required**. Changes under `packages/*/src` are reflected through HMR.

```
$ pnpm --filter examples dev
```

Then open http://localhost:5173/sakura-ui/

Note: `pnpm dev` at the repository root does not work, because the root package has no `dev` script.

### Build
```
$ pnpm build
```

Builds go through turbo, which resolves the dependency order — `@sakura-ui/helper` is built before `core` / `forms` / `markdown`. To build a single package, use a filter so that its dependencies are built as well.

```
$ pnpm build --filter @sakura-ui/core
```

Running `pnpm build` inside a package directory (e.g. `cd packages/core && pnpm build`) fails while `@sakura-ui/helper` has not been built yet.

### Test
```
$ pnpm --filter @sakura-ui/core exec vitest run
```

### Lint
```
$ pnpm exec biome lint ./
```

### Publish
Bump the `version` field of the packages to release, build them, and publish.

```
$ pnpm build
$ pnpm publish -r
```

`pnpm publish -r` walks the workspace in dependency order and skips versions that are already on npm, so `@sakura-ui/helper` is published before the packages that depend on it. To release a single package:

```
$ pnpm publish --filter @sakura-ui/core
```

Use `pnpm publish`, never `npm publish`. The packages depend on each other through the `workspace:*` protocol, and only pnpm expands it to a real version at publish time — `npm publish` would upload `"@sakura-ui/helper": "workspace:*"` as-is and the released package would not install.
