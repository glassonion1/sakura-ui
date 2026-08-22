/**
 * One document exercising everything the renderer handles, so that a change to
 * the pipeline can be looked at rather than guessed about.
 *
 * It leans on what long-lived documentation tends to accumulate rather than on
 * what Markdown allows: raw HTML mixed into the prose, inline styles, tables
 * with cells that span, disclosure blocks holding Markdown, and closing tags
 * that were never valid.
 */
export const markdownSample = `# Heading 1

A paragraph with **bold**, *italic*, \`inline code\` and ~~strikethrough~~.

Text that only looks like a directive has to survive: the format is HH:MM,
the scope is chat:write, the attribute is xml:lang, the ratio is 16:9.

## Heading 2, links

An [internal link](/sakura-ui/), an [external one](https://www.digital.go.jp/)
and a bare URL https://design.digital.go.jp/ .

:link-button[Link button]{href=/sakura-ui/forms}

### Heading 3, lists

- First item
- Second item
  - Nested
    - Nested again
- Third item

1. One
2. Two
3. Three

#### Heading 4, quotes and code

> A quotation.
> Its second line.

\`\`\`sh
$ pnpm --filter @sakura-ui/markdown test
\`\`\`

\`\`\`
A fence with no language.
\`\`\`

##### Heading 5, a table

| No. | Area | Purpose |
| --- | --- | --- |
| 1 | Availability | Remove single points of failure |
| 2 | Operability | Cut the number of steps |

###### Heading 6, an image

![A mountain at sunrise](/sakura-ui/bg-mt.webp)

## Raw HTML

Tables are written in HTML when cells have to span or columns need a width.

<table>
<caption>Table 1. Cells that span</caption>
<colgroup><col style="width: 20%;"><col style="width: 40%;"><col style="width: 40%;"></colgroup>
<thead>
<tr><th rowspan="2" style="vertical-align: top;">Group</th><th colspan="2" style="text-align:center;">Detail</th></tr>
<tr><th>Item</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td rowspan="2" style="vertical-align: top; white-space: nowrap;">Common</td><td>Sign-in</td><td>Confirms who is asking<br>Requires a second factor</td></tr>
<tr><td>Audit</td><td>Keeps a record of what was done</td></tr>
</tbody>
</table>

<div style="background-color: #E8F1FE; padding: 12px 16px; border-radius: 8px; margin: 0 24px;">
A callout, coloured and spaced with a <code>style</code> attribute.
</div>

<img src="/sakura-ui/bg-mt.webp" alt="The same mountain, narrower" style="width: 320px;color-scheme: light;">

Inline <strong>bold</strong>, <u>underline</u>, <sup>(*1)</sup> and <small>small print</small>.

<a href="https://www.digital.go.jp/" target="_blank">An external link written in HTML</a>

### Disclosure

<details>
<summary>Open for more</summary>

Markdown goes inside.

- A list
- And another item

| A | B |
| --- | --- |
| 1 | 2 |

</details>

<ul>
<details>
<summary>Wrapped in a ul, which people do to get an indent</summary>
It is not valid, and it still has to render.
</details>
</ul>

### HTML that is wrong

Mistakes the writers make, which still have to come out looking like something.

Line one<br>line two</br>line three</BR>line four

<table><tbody><tr><td>A closing tag with a typo</d></tr></tbody></table>

## Directives

### Card

:::card
::card-img{src=/sakura-ui/bg-mt.webp alt=A mountain}
::card-title[Card title]
::card-description[What the card is about.]
:::

:::card{href=/sakura-ui/forms}
::card-title[Link card title]
::card-description[The whole card is the link.]
::card-footer[22 August 2026]
:::

### Grid

::::grid-cols-3
:::card
::card-title[First]
::card-description[Something.]
:::
:::card
::card-title[Second]
::card-description[Something else.]
:::
:::card
::card-title[Third]
::card-description[One more.]
:::
::::

### Cells

::::grid-cols-2
:::cell
::cell-img{src=/sakura-ui/bg-mt.webp alt=A mountain}
The first cell.
:::
:::cell
::cell-img{src=/sakura-ui/bg-mt.webp alt=A mountain}
The second cell.
:::
::::

### Questions

:::faq
::faq-q[Where is this syntax used?]
::faq-a[It is the syntax the README documents.]
::faq-q[Can I write HTML?]
::faq-a[Yes. It is sanitised on the way through.]
:::

### Video

::youtube[An introduction]{id=yXdbvBzxeb8}

## CJK

Japanese wraps and breaks differently, and the heading ids keep the characters.

日本語のソフト改行はこの行のあとで
\`<br>\` になります。開始時刻は HH:MM 形式、第1章:はじめに。

### はじめに（概要）

全角の括弧は id から落ちます。

### A/B テスト

## Repeated heading

## Repeated heading

The second one gets a suffix so the anchors stay apart.
`
