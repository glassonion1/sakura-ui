/**
 * One document covering everything the guide this package renders puts in front
 * of it, so that a change to the pipeline can be looked at rather than guessed
 * about.
 *
 * The proportions follow what was measured across its 509 documents: raw HTML
 * in 40% of them, 1,733 inline styles, 637 details blocks, 265 stray closing
 * br tags, and tables that need cells to span.
 */
export const markdownSample = `# 見出し1 マークダウンの見本

この段落には **強調** と *斜体* と \`インラインコード\` と ~~取り消し線~~ が入っています。
日本語のソフト改行はこの行のあとで
\`<br>\` になります。

記法に見えるだけの文字も壊れないこと: 開始時刻は HH:MM 形式、スコープは chat:write、
属性は xml:lang、比率は 16:9、第1章:はじめに。

## 見出し2 リンク

[内部リンク](/sakura-ui/) と [外部リンク](https://www.digital.go.jp/) と裸の URL https://design.digital.go.jp/ 。

:link-button[リンクボタン]{href=/sakura-ui/forms}

### 見出し3 リスト

- 第一項目
- 第二項目
  - 入れ子の項目
    - さらに入れ子
- 第三項目

1. 番号つき
2. その二
3. その三

#### 見出し4 引用とコード

> 引用文です。
> 二行目も引用です。

\`\`\`sh
$ pnpm --filter @sakura-ui/markdown test
\`\`\`

\`\`\`
言語指定のないコードブロック
\`\`\`

##### 見出し5 GFM の表

| 項番 | 分類 | 目的 |
| --- | --- | --- |
| 1 | 可用性 | 単一障害点をなくす |
| 2 | 運用性 | 手順を減らす |

###### 見出し6 画像

![富士山の写真](/sakura-ui/bg-mt.webp)

## 生 HTML

HTML の表は、セルの結合や列幅の指定が必要なときに使われています。

<table>
<caption>表:01 セルを結合した表</caption>
<colgroup><col style="width: 20%;"><col style="width: 40%;"><col style="width: 40%;"></colgroup>
<thead>
<tr><th rowspan="2" style="vertical-align: top;">区分</th><th colspan="2" style="text-align:center;">内容</th></tr>
<tr><th>項目</th><th>説明</th></tr>
</thead>
<tbody>
<tr><td rowspan="2" style="vertical-align: top; white-space: nowrap;">共通</td><td>認証</td><td>利用者の確認を行う<br>多要素認証を必須とする</td></tr>
<tr><td>監査</td><td>操作の記録を残す</td></tr>
</tbody>
</table>

<div style="background-color: #E8F1FE; padding: 12px 16px; border-radius: 8px; margin: 0 24px;">
コールアウト。<code>style</code> 属性で色と余白を指定しています。
</div>

<img src="/sakura-ui/bg-mt.webp" alt="幅を指定した画像" style="width: 320px;color-scheme: light;">

本文中の <strong>太字</strong> と <u>下線</u> と <sup>（※1）</sup> と <small>注記</small> 。

<a href="https://www.digital.go.jp/" target="_blank">生 HTML の外部リンク</a>

### 折りたたみ

<details>
<summary>詳細はこちら</summary>

中に Markdown を書けます。

- 箇条書き
- もうひとつ

| 列A | 列B |
| --- | --- |
| 1 | 2 |

</details>

<ul>
<details>
<summary>ul で囲んだ折りたたみ（インデント目的の書き方）</summary>
入れ子にした場合の見え方を確認します。<br>この書き方は 12 ファイルで使われています。
</details>
</ul>

### 壊れた HTML

書き手が間違えた形も、崩れずに表示されること。

一行目<br>二行目</br>三行目</BR>四行目

<table><tbody><tr><td>閉じタグの打ち間違い</d></tr></tbody></table>

## 独自記法

### カード

:::card
::card-img{src=/sakura-ui/bg-mt.webp alt=カードの画像}
::card-title[カードのタイトル]
::card-description[カードの説明文です。]
:::

:::card{as=link href=/sakura-ui/forms}
::card-title[リンクカードのタイトル]
::card-description[カード全体が押せます。]
::card-footer[2026年8月22日]
:::

### グリッド

::::grid-cols-3
:::card
::card-title[ひとつ目]
::card-description[説明。]
:::
:::card
::card-title[ふたつ目]
::card-description[説明。]
:::
:::card
::card-title[みっつ目]
::card-description[説明。]
:::
::::

### セル

::::grid-cols-2{as=list}
:::cell
::cell-img{src=/sakura-ui/bg-mt.webp alt=セルの画像}
セルの本文です。
:::
:::cell
::cell-img{src=/sakura-ui/bg-mt.webp alt=セルの画像}
ふたつ目のセルです。
:::
::::

### よくある質問

:::faq
::faq-q[この記法はどこで使われていますか。]
::faq-a[README に載っている記法です。]
::faq-q[生 HTML は書けますか。]
::faq-a[書けます。サニタイズを通したうえで表示されます。]
:::

### 動画

::youtube[デジタル庁の紹介動画]{id=yXdbvBzxeb8}

## 見出しの重複

同じ見出しが続いたときに id が衝突しないこと。

## 見出しの重複

ふたつ目です。

## 記号を含む見出し（概要）／A/B テスト
`
