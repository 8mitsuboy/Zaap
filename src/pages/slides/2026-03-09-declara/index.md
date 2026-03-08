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

<div style="display:flex; gap:2rem; align-items:flex-start;">
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
<div style="flex-shrink:0; width:30%;">

<img src="/slides/2026-03-08-declara/images/profile.jpeg" alt="長江明信のプロフィール写真" style="width:100%; height:420px; object-fit:cover; border-radius:12px;" />

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

# 私の考える先延ばしの正体（怠惰ループ）

### 例.「引っ越したい」
<br />

1. やるべきことがわからない。順序がわからない。→ ゴールまでの過程がブラックボックス
2. めんどくさくなる
3. 何も進んでなくて落ち込む
4. 落ち込んで現実逃避 →萎え戻り。ループ続行ｯ！

<br />

### 俺は引っ越したい（新居で暮らしている状態になりたい）だけで <br /> 引越し業者の手配や住所変更とかしたくない！
あれ？これってさ

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

---

# 「〜したい」は理想の状態の宣言だった

「引っ越したい」=「引っ越した状態になりたい」= **理想の状態の宣言**

<br />

Reactで `<Button>` と書くとき、
開発者は「理想の状態を定義している」とは意識しない。
ただ「ボタン置きたい」と書いた結果、宣言になっている。

<br />

日常の「〜したい」も同じ構造のはず。
**自然な入力が、そのまま理想の状態の宣言になる。**

→ ならAIにHowを任せる設計が成り立つ。

---

# ループから抜けられるのでは？

俺も宣言するだけで、裏側でいい感じにやってくれないかな〜

…さすがに全部やってくれる魔法はない。

でも本当の敵は「作業そのもの」じゃなくて「何をすればいいかわからないこと」だった。

**ブラックボックスを開けるだけなら、AIにできる！これでループ抜けられる！**

---

<div style="display:flex; gap:3rem; align-items:center; min-height:648px;">
<div style="flex:1; text-align:center;">

<h1 style="border-left:none; padding-left:0;">だから作ってみた</h1>

## Declara

### 宣言するだけのタスク管理アプリ

</div>
<div style="flex-shrink:0;">

<img src="/slides/2026-03-08-declara/images/create_declaration_page.png" alt="Declara宣言入力画面" style="height:620px; width:auto; border-radius:24px; box-shadow:0 8px 32px rgba(0,0,0,0.5);" />

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

# 技術スタック

- ### Flutter + Riverpod

<br />

- ### Drift (SQLite) で永続化

<br />

- ### Claude API でタスク生成

<br />

- ### DDDで層分離（Presentation / Domain / Data）

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

# ウキウキで使ってもらったら..
<br />

利用者） ちょうどいい理想状態の抽象度考えるのがむずくね？ 汎用的に使えないしメモ帳でいいや
<br />

「〜したい」が理想の状態の宣言として成り立つのは、抽象度が絶妙な場合だけだったと言うことに気づいた..

<br />

| 抽象度 | 例 | 問題 |
|---|---|---|
| 高すぎ | 幸せになりたい | 分解できない |
| **ちょうどいい** | **引っ越したい** | **ここだけ刺さる** |
| 低すぎ | 食器を洗いたい | 分解不要 |



<br />

---

# なぜ気づけなかったのか

エンジニアは「状態」を点として扱う。
Reactのstateのようにある時点の確定した一つの値。

Declaraの「宣言」もその感覚でモデリングしていた。
→ 宣言の抽象度も一つ、と無意識に決めつけていた。

加えて自分が想定ユーザーだったため、自分の粒度でしか検証していなかった。

**ユーザーによって、宣言したい粒度は違う。**

次のアプリ開発からは妥当性確認の観点として↓を使う：

> ### 「違う抽象度のインプットを想定したとき、このアプリは成り立つか？」

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

- ### アプリが窮屈になっていないか確認するための、複数の抽象度のインプットを想定してみる


---

<div style="min-height:648px; display:flex; flex-direction:column; align-items:center; justify-content:center; text-align:center;">

## ご清聴ありがとうございました！



</div>
