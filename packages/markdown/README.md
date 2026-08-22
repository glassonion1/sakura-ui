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

## Client only

This renders in the browser and nowhere else. Sanitising and styling both walk
the DOM, so the conversion runs in an effect: on the server it produces nothing,
and the markup appears once the page is live.

With Next.js, load it through `next/dynamic` with `ssr: false`.

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

## Properties

| Property | Default | |
|---|---|---|
| `children` | — | The Markdown to render. |
| `showToc` | `false` | Puts a table of contents above the document. |
| `tocTitle` | `目次` | The heading of that table of contents. |
| `shiftHeading` | `0` | Moves every heading down by this many levels, so that a document starting at `#` can sit under a page title. |
| `tocMaxDepth` | `2` | How deep the table of contents goes. Headings below it are still rendered. |

`shiftHeading` was called `shiftHeding` before 0.4.0.

## Raw HTML

Markdown may contain HTML, and it is sanitised before it reaches the page:
script, event handlers, and `javascript:` URLs never survive. Inline `style` is
kept, but only the properties the design system expects — `position: fixed`, for
instance, is dropped, since a transparent box over the page takes every click
aimed at what is underneath it.

An `iframe` is allowed only for the video the `youtube` directive embeds. One
pointing anywhere else is removed.

## Syntax

A directive is a name, then an optional `[label]`, then optional `{attributes}`,
in that order.

```
:link-button[Services and applications]{href=/services}
```

Quote a value that has a space in it. Without the quotes the value stops at the
first one, and the rest is read as another attribute and dropped — which is how
alternative text ends up as one long word.

```
::card-img{src=/photo.jpg alt="A field at dawn"}
```

Write `{#name}` to name the element, so that a link somewhere else can point at
it.

```
:::card{#pricing}
::card-title[What it costs]
:::
```

`{#name}` is the only spelling. A sigil says something about the element and
means the same on every directive, while an attribute belongs to whichever
directive reads it, so `{id=name}` is left for a directive to take if one ever
wants it. The name is used as written and nothing else on the page is given it,
so a heading further down that would have produced the same one gets `-1`
instead.

### LinkButton
```
:link-button[Services and applications]{href=/services}
```
<img width="288" alt="スクリーンショット 2024-07-26 23 44 39" src="https://github.com/user-attachments/assets/997ccf27-4d83-4fb5-b173-ae94cd7d76cb">

### YouTube

The address of the video, as it is copied from the browser. The watch page, the
share link, a short and an embed are all read; so is the id on its own. The
label becomes the frame's title, which is the name a screen reader reads out, so
write one.

```
::youtube[Introducing the service]{video=https://www.youtube.com/watch?v=yXdbvBzxeb8}
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

A grid of cells is a layout — prose beside a figure is not two of something — so
it renders as plain boxes. A grid of cards is a list, and renders as one; see
below.

Use `::cell-img` in place of a Markdown image when the image is the top of the
cell; it carries the spacing that separates it from the text underneath.

```
:::cell
::cell-img{src=https://dummyimage.com/600x400/000/fff alt="A field at dawn"}
Lorem ipsum dolor sit amet.
:::
```

### Multi column layout with card
```
::::grid-cols-3
:::card
::card-img{alt="A field at dawn" src=https://dummyimage.com/600x400/000/fff}
::card-title[Card title]
::card-description[Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.]
:::
:::card
::card-img{alt="A field at dawn" src=https://dummyimage.com/600x400/000/fff}
::card-title[Card title]
::card-description[Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.]
:::
:::card
::card-img{alt="A field at dawn" src=https://dummyimage.com/600x400/000/fff}
::card-title[Card title]
::card-description[Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.]
:::
::::
```
<img width="1133" alt="スクリーンショット 2024-07-26 23 55 37" src="https://github.com/user-attachments/assets/9a6dff6f-7115-451a-9d15-f953ddad78b7">

Cards in a grid are things of one kind, and how many there are is part of what
the page says, so the grid becomes a `<ul>` and each card an `<li>`: a reader is
told there are three. Nothing is written to ask for this, the way nothing is
written to ask a run of `- ` for a list. A grid holding anything but cards is
left as a layout.

A Markdown list, meanwhile, only ever runs down the page, and there is no way to
put a class on one from here. This is how a list gets columns.

A card may end with `::card-footer`, for a date or a category — something that
belongs to the card but is not what it says.

```
:::card
::card-title[Card title]
::card-description[Lorem ipsum dolor sit amet.]
::card-footer[22 August 2026]
:::
```

### Card that is a link

Give the card an `href` and the whole of it becomes clickable. There is nothing
else an href on a card could mean, so it is not also asked for by name.

```
:::card{href=/services}
::card-title[Services and applications]
::card-description[Lorem ipsum dolor sit amet.]
::card-footer[22 August 2026]
:::
```

The link itself goes on the title, and covers the card from there; the footer
grows an arrow. Only the title is read out as the name of the link, so write one
that says where it goes — a screen reader user meets it on its own, out of the
order the page is in.

That also means a link card wants a title. Without one there is no link, and the
card is only a box.

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

## How it is put together

Markdown becomes HTML in three steps, and each of them owns one thing.

```
markdown
   │
   │  src/render.ts          builds a Marked for this call and runs the three steps
   ▼
marked ── src/marked/        the ::: syntax, as a marked extension
   │
   ▼
HTML string
   │
   │  src/sanitize.ts        takes out what must not reach the DOM
   ▼
DocumentFragment
   │
   │  src/decorate.ts        puts the design system on it, collects the headings
   ▼
HTML string + headings
   │
   │  src/components/Markdown.tsx   renders it, draws the table of contents
   ▼
page
```

| | |
|---|---|
| `render.ts` | The entry point. A fresh `Marked` per call, so `marked.use()` never reaches another caller. |
| `sanitize.ts` | The DOMPurify configuration: which tags, which attributes, which CSS properties. Returns a fragment rather than a string, since the next step has to walk it. |
| `decorate.ts` | Runs over the finished document. Adds the classes, wraps tables so they scroll, marks up links that leave the page, generates the heading ids and collects them for the table of contents. |
| `components/Markdown.tsx` | The React side: the table of contents, the markup, and the jump to the anchor in the URL. |

Inside `src/marked/`:

| | |
|---|---|
| `registry.ts` | The list of directive names. **Adding or removing a directive starts here**; a name that is not in it is left as the text it is. |
| `tokenizer.ts` | Reads `:::name{attrs}` into tokens. Nesting needs no bookkeeping: the closing fence is the first line of at least as many colons, and an inner directive uses fewer. |
| `renderer.ts` | Tokens to HTML. Also where a grid of cards wraps each of them in an `<li>`, which is possible here and not later, because the children are still apart. |
| `attributes.ts` | `{key=value}` and the balanced reader for `[label]`, which may hold brackets of its own. |
| `html.ts` | Escaping and URL cleaning. Nothing else builds an attribute by hand. |
| `index.ts` | Registers the block and inline extensions under one name, since marked looks the renderer up by the token type. |

Styling happens in `decorate.ts` rather than in `renderer.ts` so that a table
written as raw HTML looks like one written with pipes. The class strings come
from `@sakura-ui/core`, which exports them under a `styles` namespace; keeping a
copy here would mean the two drifting apart the first time a component is
restyled.

## Adding a directive

There are no plugins. The pipeline this replaced had one per directive; here it
is two files, and the tokenizer is shared.

**1. Name it in `registry.ts`.** Nothing outside this list is a directive, which
is why prose keeps its colons: `HH:MM` stays `HH:MM` because `MM` is not here.

```ts
const STATIC: Record<string, DirectiveKind[]> = {
  callout: [CONTAINER],
  ...
}
```

The kinds decide how it is written, and a name may take more than one — `faq-q`
is both a `LEAF` and a `CONTAINER`, so a short question fits on one line and a
long one does not have to.

| | Written | |
|---|---|---|
| `TEXT` | `:name[label]{attrs}` | Inside a sentence. |
| `LEAF` | `::name[label]{attrs}` | A line of its own, with nothing inside it. |
| `CONTAINER` | `:::name{attrs}` … `:::` | Holds Markdown, directives included. |

**2. Render it in `renderer.ts`.** One branch, returning a string.

```ts
if (name === 'callout') {
  return `<aside${root({ class: classNames(styles.calloutStyle, attrs.class) })}>${body()}</aside>${nl}`
}
```

Three things are to hand, and using them is what keeps a new directive behaving
like the others:

| | |
|---|---|
| `root(…)` | Attributes for the element the directive **is**. Adds the id from `{#name}`, and `data-sakura`, which tells `decorate.ts` the element is dressed already and to leave its classes alone. Headings are the exception: one rendered by a directive still has an id generated for it and still reaches the table of contents, which is how a card title gets there. |
| `own(…)` | The same without the id, for elements **inside** it. A link card's title is a heading around an anchor; only the heading is the directive. |
| `body()` | The children, already rendered — inline for a `TEXT` or `LEAF`, block for a `CONTAINER`. |

Classes come from `styles`, never written out here, or the directive stops
looking like the component the first time that component is restyled. URLs go
through `cleanUrl` and every attribute through `attrsToHtml`, both in `html.ts`;
nothing builds an attribute by hand.

**3. Anything a container has to know about its children** belongs in
`tokenizer.ts`, where they are still separate tokens. Once `renderer.ts` has run
they are one string with no seams. That is where a card is told it sits in a
grid of cards, and where a link card's title is handed the href.

Then add it to `tests/fixtures.ts`, which every snapshot test walks, and to the
document in `examples/src/pages/markdownSample.ts`.
