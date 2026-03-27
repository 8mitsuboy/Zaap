---
layout: ../../../layouts/MarkdownPostLayout.astro
title: "パーティクル関連のお悩み相談"
pubDate: 2026-03-24
description: ""
author: "はちみつぼーい"
tags: ["Blender", "パーティクル"]
image:
  url: /posts/2026-03-24-particle/particle-render.png
  alt: "パーティクルで水草と小物を配置した様子"
references:
  - url: https://www.udemy.com/course/blenderaquarium/learn/lecture/52968051#content
    label: "Blenderアクアリウム_22"
---

<div class="callout-cue">

**ヘアーパーティクルのインスタンスオブジェクトを、エミッター平面の法線方向に立てたい**

</div>

背景：パーティクル（ヘアー）のインスタンスオブジェクトに自作オブジェクトを設定したら、地面からまっすぐ立ってほしいのに倒れる形で配置されてしまった。

<br />

![パーティクルで水草と小物を配置した様子](/posts/2026-03-24-particle/particle-render.png)

<br />

解決方法は、インスタンスオブジェクトの長手方向（オブジェクトの上方向）を、インスタンスオブジェクトのローカル+Y軸に向ける！

### 具体的な手順

1. インスタンスオブジェクトの長手方向をローカル+Y軸に向ける

- 対象オブジェクトを選択 → Edit Mode（Tab）
- 全選択（A） → R → X → -90 → Enter
- Object Mode に戻る（Tab）

2. スケールと回転を適用する

- Object Mode のまま Ctrl+A → 「全トランスフォーム」

3. オリジンを根元に移動する

- Edit Mode で根元の頂点を選択
- Shift+S → 「カーソルを選択物へ」
- Object Mode に戻る
- 対象オブジェクトを選択した状態で右クリック → 「オリジンを設定」→「オリジンを3Dカーソルへ」

<br />

![パーティクルが立った様子](/posts/2026-03-24-particle/particle-standing.png)

<br />

なぜZ軸ではなく+Y軸なのか、わからん、、

---

<div class="callout-summary">

**まとめ**:

</div>
