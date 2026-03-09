---
layout: ../../../layouts/SlideLayout.astro
title: "僕は引っ越したいだけで、住所変更したいわけじゃない 〜宣言的プログラミングで先延ばし人間を救いたい〜"
postUrl: /posts/2026-03-09-declara/
---

<div style="min-height:648px; display:flex; flex-direction:column; align-items:center; justify-content:center; text-align:center;">

## 引っ越したいだけで、住所変更したいわけじゃない

### 〜宣言的プログラミングは先延ばし人間を救えるかも〜

長江 明信

</div>

---

# 自己紹介

<div style="display:flex; gap:2.5rem; align-items:flex-start;">
<div style="flex:1;">

## 先延ばしの癖の酷い凝り性

<br />

### すきなもの

- アニメ・漫画（HxH, アイシールド21, RE:ゼロなど）
- 革雑貨（PLANT, anshare, MOTHERHOUSEなど）

### 作ったもの

- [VSCodeのテーマ「Warp Cyber Wave」](https://marketplace.visualstudio.com/items?itemName=8mitsuboy.warp-cyber-wave)
- [VSCode拡張「sideVar」](https://marketplace.visualstudio.com/items?itemName=ak-nagae.sidevar)

### 技術
React, Next.js, AWS, Flutter など

</div>
<div style="flex-shrink:0; width:38%;">
<div class="js-scratch-card scratch-card" style="width:100%; height:520px; position:relative; border-radius:16px; overflow:hidden; cursor:crosshair;">
<div class="scratch-card-under" style="width:100%; height:100%; display:flex; flex-direction:column; align-items:center; justify-content:center; background:linear-gradient(135deg, var(--slide-surface) 0%, #252530 100%);">
<img src="/slides/2026-03-09-declara/images/8mitsuboy.png" alt="8mitsuboy" style="width:65%; height:auto; filter:drop-shadow(0 0 24px rgba(196,173,108,0.5));" />
<p style="margin-top:0.8rem; font-size:1.4rem; color:var(--slide-accent); font-weight:700;">8mitsuboy</p>
</div>
</div>
<p style="text-align:center; font-size:0.85rem; color:var(--slide-text-subtle); margin-top:0.5rem;" class="scratch-hint">scratch the profileImage</p>
</div>
</div>

---

# もくじ
<br />

### 1. 先延ばし癖と向き合ってみた

<br />

### 2. 宣言的プログラミングで先延ばしループを抜けられるのでは？

<br />

### 3. Declaraを作ってみた

<br />

### 4. 作って見えた学びと新たな問い

---

# 私の考える先延ばしの正体

### 例.「引っ越したい」
<br />

やるべきことがわからない。順序もわからない。

→ ゴールまでの過程が**ブラックボックス**だから動けない。

<br />

### 俺は引っ越したい（新居で暮らしている状態になりたい）だけで <br /> 引越し業者の手配や住所変更とかしたくない！

---

# あれ、これって宣言的UIと同じだ

「この状態のときこうなってほしい」だけ書く。
<br />

開発者はDOMの操作（住所変更）をしたいわけじゃない。

```jsx
// 手続き的：状態が変わるたびにDOMを自分で操作
if (isLoading) {
  button.disabled = true;
  button.textContent = "送信中...";
} else {
  button.disabled = false;
  button.textContent = "送信";
}

// 宣言的：この状態のときこうあってほしいを書くだけ
<button disabled={isLoading}>
  {isLoading ? "送信中..." : "送信"}
</button>
```

**Whatだけ宣言 → HowはFrameworkが解決。**

→ 日常の「引っ越したい」も、Whatだけ宣言しているのと同じじゃないか？

---

# ブラックボックスを開ければ動けるのでは？

俺も「引っ越したい」って宣言するだけで、ブラックボックスが開いてくれないかな〜

…さすがに全部やってくれる魔法はない。

でも本当の敵は「作業そのもの」じゃなくて「何をすればいいかわからないこと」だった。

**ブラックボックスを開けるだけなら、AIにできる！**

---

<div style="display:flex; gap:3rem; align-items:center; min-height:648px;">
<div style="flex:1; text-align:center;">

<h1 style="border-left:none; padding-left:0;">だから作ってみた</h1>

## Declara

### 宣言するだけのタスク管理アプリ

</div>
<div style="flex-shrink:0;">

<iframe
  width="349"
  height="620"
  src="https://www.youtube.com/embed/Kwgv2iGUPhU"
  title="Declara のデモ動画"
  style="border:none; border-radius:24px; box-shadow:0 8px 32px rgba(0,0,0,0.5); background:#000;"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  referrerpolicy="strict-origin-when-cross-origin"
  allowfullscreen
></iframe>

</div>
</div>

---

# 既存TodoとDeclaraの違い

<br />

| | 既存Todo | Declara |
|---|---|---|
| 入力 | タスクを自分で書く | 宣言するだけ |
| 初動 | Howを要求される | Whatだけでいい |
| 頭の使いどころ | 分解・整理 | やりたいことに向き合う |

---

# ブラックボックスを開けるだけじゃ足りない

宣言してから達成するまでの**気持ちの変化**に沿ってUIを作った。

| フェーズ | 感情 | UI方針 |
|---------|------|--------|
| 停滞 | 何すれば… | 出発点として受け止める |
| 宣言 | ポンと入力 | 入力UIを極小化 |
| 開封 | これだけでいい | タスクを見やすく提示 |
| 実行 | 進んでる | 進捗可視化 + 完了演出 |
| 達成 | やりきった | 小さく祝う |

---

# レビュー

ウキウキで使ってもらってみたら..

> 利用者） ちょうどいい理想状態の抽象度考えるのがむずくね？ 汎用的に使えないしメモ帳でいいや
<br />

**「〜したい」= 理想の状態** が成り立つのは、抽象度が絶妙な場合だけだったと言うことに気づいた..

<br />

| 抽象度 | 例 | 問題 |
|---|---|---|
| 高すぎ | 幸せになりたい | 分解できない |
| **ちょうどいい** | **引っ越したい** | **ここだけ刺さる** |
| 低すぎ | 食器を洗いたい | 分解不要 |



<br />

---

# ふりかえり

特定の抽象度しか受け付けられないアプリ = **窮屈なアプリ = 使われないアプリ**

<br />

### Try: 窮屈さの早期検知


<div style="text-align:center;">

## 開発者の無意識の前提を疑う

</div>

<br />

例）Declara: 「入力の抽象度は一つ」という前提 → 特定の粒度しか刺さらなかった

---

# 今後の展望

抽象度の高い理想の状態の宣言にも対応できるように、宣言を再帰できるようにする

- ### ルート宣言: 引っ越したい
<br />

- ### 子宣言: 住所変更したい
<br />

- ### 孫宣言: 転出届を出したい


---

# まとめ

- ### 後回し癖のある人はAIにWhatだけ宣言する。HowはAIに考えさせれば少しは楽になる
<br />

- ### そういえばブラックボックスをいい感じにやってくれる魔法って、AIエージェントやん
<br />

- ### 開発者の無意識の前提を疑う—窮屈なアプリを避けるために


---

# 技術スタック

- ### Flutter + Riverpod

<br />

- ### Drift (SQLite) で永続化

<br />

- ### Claude API でタスク生成

<br />

- ### DDDで層分離（Presentation / Domain / Data）

---

<div style="min-height:648px; display:flex; flex-direction:column; align-items:center; justify-content:center; text-align:center;">

## ご清聴ありがとうございました！



</div>
