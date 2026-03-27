ブログ記事の雛形を作成する。

以下の手順で実行すること：

1. ユーザーに以下を確認する（まとめて一度に聞く）：
   - スラッグ（例: `2026-03-25-my-topic`）
   - タイトル
   - タグ（カンマ区切り）
   - 記事スタイル（以下のいずれか）:
     - `cornell`（デフォルト）: 自分の復習・学習メモ向け。左カラムにcueを置くコーチネルノート形式
     - `article`: 他の人に内容を伝える紹介記事向け。全幅レイアウト

2. 確認した情報をもとにファイルを作成する。

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

3. 今日の日付は `currentDate` コンテキストを参照すること。
4. ファイル作成後、パスを伝える。
