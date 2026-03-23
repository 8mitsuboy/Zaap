ブログ記事の雛形を作成する。

以下の手順で実行すること：

1. ユーザーに以下を確認する（まとめて一度に聞く）：
   - スラッグ（例: `2026-03-25-my-topic`）
   - タイトル
   - タグ（カンマ区切り）

2. 確認した情報をもとに `src/pages/posts/{スラッグ}/index.md` を以下の雛形で作成する：

```markdown
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

3. 今日の日付は `currentDate` コンテキストを参照すること。
4. ファイル作成後、パスを伝える。
