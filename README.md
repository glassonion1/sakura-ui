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

### For the Card API before 0.5.0
`Card` and `LinkCard` changed shape in `@sakura-ui/core` 0.5.0. See
[Card and LinkCard](#card-and-linkcard) for what to change; to stay on the old API for now:
```
$ pnpm add @sakura-ui/core@0.4.1 @sakura-ui/markdown@0.2.2
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

### Card and LinkCard
`CardHeader` needs an `as` property. There is no default: the right level depends on the
document outline around the card, and a wrong guess breaks heading navigation. Use `p` for
lists of many cards, where headings would only add noise.

```tsx
<Card>
  <CardHeader as="h3">Title</CardHeader>
  <CardBody>Body</CardBody>
</Card>
```

`LinkCard` puts the link in the title, and the link covers the whole card. Because of that a
link card cannot contain another link, a button or a form control.

```tsx
<LinkCard>
  <LinkCardHeader as="h3" href="/readme">Title</LinkCardHeader>
  <CardBody>Body</CardBody>
  <LinkCardFooter>June 27th, 2026</LinkCardFooter>
</LinkCard>
```

`Card` renders a `div` and carries no ARIA of its own, so nothing can dangle or collide. A
`div` maps to the generic role, which cannot take an accessible name. When a card really is a
self-contained composition, name it yourself:

```tsx
<Card as="article" aria-labelledby="card-title">
  <CardHeader as="h3" id="card-title">Title</CardHeader>
  <CardBody>Body</CardBody>
</Card>
```
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

Every form control takes its accessible name from the label it is associated with, so wrap it in `LabelControl` — or `FieldsetControl` for a group of radios or checkboxes. A control rendered without a label has no name for assistive technology.

```tsx
<LabelControl labelText="添付書類" isRequired>
  <FileInput />
</LabelControl>
```

If a visible label is not an option, pass `aria-label` yourself; it is forwarded to the underlying element.

## Markdwon extension
- Markdown

## Accessible names

A note for anyone working on these components, rather than for people using them.

Whether an element can be named at all is decided by its role, not by the attribute
you write. Every ARIA role declares where its name may come from:

| Name from | Meaning | Roles |
|---|---|---|
| author, contents | `aria-label`, `aria-labelledby`, **or the text inside** | `button`, `link`, `heading`, `cell`, `option`, `tab`, `menuitem` |
| author | `aria-label`, `aria-labelledby` or `title` **only** | `article`, `region`, `dialog`, `img`, `table`, `form` |
| prohibited | cannot be named; the attribute is ignored | `generic` (a bare `<div>` or `<span>`), `paragraph` |

Two consequences catch people out.

**A `<div>` cannot be given a name.** It maps to `generic`, where naming is prohibited,
so `<div aria-label="Card">` does nothing at all. Reaching for a name means reaching for
a different element, which is why dropping `aria-labelledby` from `Card` and dropping its
`<article>` were the same decision.

**An `<article>` does not take its name from a heading inside it.** It is named by the
author only, so `<article><h3>Title</h3></article>` has no accessible name. A `<button>`
or an `<a>` would be named "Title" here, because those are named from their contents.
Mixing the two up is what made `LinkCard` produce a link with no name: an `<a>` wrapping
an `<article>` never reached the title, because Chrome does not descend into a role that
is named by its author.

So, in practice:

- Leave it a `<div>` and give it no name. A list and the headings inside it already tell
  the reader where they are.
- Use `<section>` only with a name. A `<section>` becomes a `region` **because** it has one;
  without a name it is no different from a `<div>`.
- Use `<article>` only for something that stands on its own, and name it when you do.
  Naming it is recommended by the APG so that readers can tell one article from the next.

## Development

### Setup
```
$ pnpm install
```

### Run the example app
`examples` resolves each package to its `src` through Vite aliases, so **no build step is required**. Changes under `packages/*/src` are reflected through HMR.

```
$ pnpm dev
```

Then open http://localhost:5173/sakura-ui/

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
$ pnpm test
```

Runs every package through turbo. To watch a single package while working on it:

```
$ pnpm --filter @sakura-ui/core test:watch
```

### Lint
```
$ pnpm lint
```

`pnpm lint`, `pnpm build` and `pnpm test` all run on pull requests through the `CI` workflow.

### Publish
Releases go through npm trusted publishing (OIDC), so no npm token is stored anywhere.

1. Bump the `version` field of the packages to release and merge that to `main`
2. Publish a GitHub Release

The `Publish` workflow then builds the packages and runs `pnpm publish -r`, which walks the workspace in dependency order and skips versions that are already on npm — `@sakura-ui/helper` goes out before the packages that depend on it.

To rehearse without releasing anything, run the workflow manually from the Actions tab: manual runs default to a dry run.

Each package needs this repository and `.github/workflows/publish.yaml` registered as its trusted publisher on npmjs.com.

Publishing by hand is not supported. npm requires 2FA for direct publishes, and `npm publish` would upload `"@sakura-ui/helper": "workspace:*"` verbatim, since only pnpm expands the workspace protocol at publish time.
