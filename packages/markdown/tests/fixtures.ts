/**
 * Inputs that the rendered output is pinned against while the pipeline is
 * replaced. They lean on what long-lived documentation accumulates rather than
 * on what Markdown allows.
 */

export const plain = {
  headings:
    '# 見出し1\n\n## 見出し 2\n\n### 見出し・3\n\n#### はじめに（概要）',
  paragraph: '段落です。**強調** と *斜体* と `コード` と ~~取り消し~~。',
  cjkSoftBreak: '東京都\n港区',
  list: '- 項目1\n- 項目2\n  - 入れ子\n    - さらに\n\n1. one\n2. two',
  gfmTable: '| 見出し | 値 |\n| --- | --- |\n| あ | 1 |\n| い | 2 |',
  codeFence: '```sh\necho "hello"\n```\n\n```\n言語指定なし\n```',
  links:
    '[内部](/foo) と [外部](https://example.com) と https://example.com/bare',
  image: '![代替テキスト](/images/a.png)',
  blockquote: '> 引用文\n> 続き',
  rule: '---',
  footnote: '本文[^1]\n\n[^1]: 脚注の中身'
}

export const rawHtml = {
  // Often with Markdown inside, which is what makes it awkward
  details:
    '<details>\n<summary>詳細はこちら</summary>\n\n- リスト項目\n\n| 表 | 見出し |\n| --- | --- |\n| a | b |\n\n</details>',
  // Written in HTML because the cells have to span
  tableSpan:
    '<table>\n<caption>表:01 キャプション</caption>\n<colgroup><col style="width: 15%;"><col style="width: auto;"></colgroup>\n<thead><tr><th colspan="2">見出し</th></tr></thead>\n<tbody><tr><td rowspan="2" style="vertical-align: top;">結合</td><td>値</td></tr><tr><td>値2</td></tr></tbody>\n</table>',
  // Inline style carries the layout of most hand-written HTML
  styledBlock:
    '<div style="background-color: #E8F1FE; padding: 12px 16px; border-radius: 8px; margin: 0 24px;">\n注記のボックス\n</div>',
  styledImg:
    '<img src="/images/a.png" alt="図" style="width: 800px;color-scheme: light;">',
  inlineTags:
    '本文に <strong>太字</strong> と <u>下線</u> と <sup>（※1）</sup> と <small>小</small>。',
  externalAnchor: '<a href="https://example.com" target="_blank">外部リンク</a>'
}

export const malformedHtml = {
  // A closing tag for a void element, written often enough to matter
  closingBr: '一行目<br>二行目</br>三行目</BR>四行目',
  // </td> mistyped as </d>
  mistypedClose: '<table><tbody><tr><td>値</d></tr></tbody></table>',
  unclosedCell: '<table><tbody><tr><td>閉じ忘れ<tr><td>次の行</table>',
  // <ul> wrapping <details> for indentation, with the closing tags crossed
  crossedNesting:
    '<ul>\n<details>\n<summary>まとめ</summary>\n中身\n</details>\n</ul>'
}

export const directives = {
  linkButton:
    'ご案内です。:link-button[サービス一覧]{href=/services} をどうぞ。',
  youtube: '::youtube[動画タイトル]{id=yXdbvBzxeb8 width=560 height=315}',
  card: ':::card\n::card-img{src=/a.png alt=図}\n::card-title[タイトル]\n::card-description[説明]\n:::',
  linkCard:
    ':::card{as=link href=/x}\n::card-title[タイトル]\n::card-description[説明]\n::card-footer[2026年8月]\n:::',
  grid: '::::grid-cols-3\n:::card\n::card-title[1つ目]\n:::\n:::card\n::card-title[2つ目]\n:::\n::::',
  gridAsList:
    '::::grid-cols-2{as=list}\n:::cell\n![alt](/a.png)\n本文1\n:::\n:::cell\n本文2\n:::\n::::',
  cell: ':::cell\n::cell-img{src=/a.png alt=図}\n本文\n:::',
  faq: ':::faq\n::faq-q[質問は？]\n::faq-a[回答です。]\n::faq-q[二つ目の質問は？]\n::faq-a[二つ目の回答。]\n:::'
}

/**
 * Text that looks like a directive but is not one. The current attr plugin
 * turns any name into a tag of the same name, so "参照:example" loses its
 * ":example" entirely. Pinned here so the migration is seen to fix it.
 */
export const notDirectives = {
  colonWord: '参照:example と note:important を見てください。',
  functionCall: '関数 foo:bar() を呼びます。',
  time: '開始は 10:30 です。',
  ratio: '比率は 16:9 です。',
  emoji: '絵文字 :smile: です。',
  todo: 'TODO: あとで直す',
  xmlAttr: '属性は xml:lang です。',
  chapter: '第1章:はじめに',
  // Shapes that lose text today. Each of them appears in real documentation,
  // and each renders with the part after the colon gone.
  timeFormat: '開始時刻は HH:MM 形式で記載する。',
  scopeName: 'スコープ chat:write を付与する。',
  linkLabel: '[AWSドキュメント:AWS PrivateLink](https://example.com)'
}

export const headings = {
  japanese:
    '## 概要\n\n## はじめに（概要）\n\n## A/B テスト\n\n## サービス・アプリ',
  duplicated: '## 概要\n\n## 概要\n\n## 概要',
  withImage: '## ![ロゴ](/a.png) 会社概要',
  withInlineHtml: '## <b>太字</b> タイトル',
  withCode: '## `code` を含む見出し'
}
