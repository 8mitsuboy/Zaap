ブログ記事の雛形を作成する。
以下の手順で実行すること：

1. ユーザーに以下を確認する（まとめて一度に聞く）：
   - タイトル
   - 記事スタイル（以下のいずれか）:
     - `cornell`（デフォルト）: 自分の復習・学習メモ向け。左カラムにcueを置くコーネルノート形式
     - `article`: 他の人に内容を伝える紹介記事向け。全幅レイアウト

2. `src/pages/posts/` 以下の既存記事のfrontmatterからタグ一覧を収集する

3. タイトルをもとに以下を提案し、ユーザーに確認する：
   - スラッグのsuffix（タイトルを英語に変換したもの、kebab-case）
   - タグ（既存タグから選ぶ。なければ新規提案）
   - ユーザーが修正した場合はそれを採用、OKならそのまま進む

4. 確認した情報をもとにファイルを作成する。
   実際のスラッグは `{今日の日付}-{suffix}` 形式になる（例: `2026-03-28-my-topic`）

5. 今日の日付は `currentDate` コンテキストを参照すること。

6. ファイル作成後、パスを伝える。

### cornell スタイル（デフォルト）
`src/pages/posts/{スラッグ}/index.mdx` を以下の雛形で作成する：
```mdx
---
layout: ../../../layouts/MarkdownPostLayout.astro
title: "{タイトル}"
pubDate: {YYYY-MM-DD}
description: ""
author: "はちみつぼーい"
tags: [{タグをJSON配列形式で}]
references:
  - url:
    label: ""
---
<div class="callout-cue">
****
</div>
---
<div class="callout-summary">
**まとめ**:
</div>
```

### article スタイル
`src/pages/posts/{スラッグ}/index.mdx` を以下の雛形で作成する：
```mdx
---
layout: ../../../layouts/ArticlePostLayout.astro
title: "{タイトル}"
pubDate: {YYYY-MM-DD}
description: ""
author: "はちみつぼーい"
tags: [{タグをJSON配列形式で}]
references:
  - url:
    label: ""
---
## 背景・課題
---
## 解決策
---
## まとめ
```