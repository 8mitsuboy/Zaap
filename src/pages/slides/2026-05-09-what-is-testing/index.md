---
layout: ../../../layouts/SlideLayout.astro
title: "AIに指示が出せなかった自分が、テスト設計を学んで変わったこと"
postUrl: /posts/2026-05-09-what-is-testing/
---

<div style="min-height:648px; display:flex; flex-direction:column; align-items:center; justify-content:center; text-align:center;">

## AIに指示が出せなかったけど

## テストを学んで指示できるようになったという話


</div>

---

# 自己紹介

<div style="display:flex; gap:2.5rem; align-items:flex-start;">
<div style="flex:1;">

## 先延ばしの癖の酷い凝り性

<br />

### すきなもの

- アニメ・漫画（HxH, アイシールド21, RE:ゼロなど）
- VSCodeのテーマ（Gruvbox, Moegi, Horaizonなど）

### 作ってしまったVSCodeのテーマ

- [VSCodeのテーマ「Warp Cyber Wave」](https://marketplace.visualstudio.com/items?itemName=8mitsuboy.warp-cyber-wave)
- [VSCode拡張「Keiryu」](https://marketplace.visualstudio.com/items?itemName=8mitsuboy.keiryu&ssr=false#overview)

### 技術
React, Next.js, AWS, Flutter など

</div>
<div style="flex-shrink:0; width:38%;">
<div class="js-scratch-card scratch-card" style="width:100%; height:520px; position:relative; border-radius:16px; overflow:hidden; cursor:crosshair;">
<div class="scratch-card-under" style="width:100%; height:100%; display:flex; flex-direction:column; align-items:center; justify-content:center; padding-top:3rem; background:linear-gradient(135deg, var(--slide-surface) 0%, #252530 100%); gap:0.4rem;">
<img src="/slides/2026-03-09-declara/images/8mitsuboy.png" alt="8mitsuboy" style="width:42%; height:auto; filter:drop-shadow(0 0 24px rgba(196,173,108,0.5));" />
<p style="margin-top:0.1rem; margin-bottom:0.1rem; font-size:1.3rem; color:var(--slide-accent); font-weight:700;">8mitsuboy</p>
<span style="display:inline-flex; align-items:center; gap:0.5rem; padding:0.35rem 0.8rem; background:rgba(255,255,255,0.06); border-radius:10px; border:1px solid var(--slide-border);"><img src="/slides/2026-03-09-declara/images/JSTQB.jpg" alt="JSTQB Certified Tester Foundation Level" style="width:40px; height:40px; object-fit:contain; border-radius:4px; background:#fff;" /><span style="font-size:0.75rem; color:var(--slide-text-muted); font-weight:600; line-height:1.3;">JSTQB Certified Tester<br/>Foundation Level</span></span>
</div>
</div>
<p style="text-align:center; font-size:0.85rem; color:var(--slide-text-subtle); margin-top:0.5rem;" class="scratch-hint">scratch the profileImage</p>
</div>
</div>

---

# きっかけ

- 物量で押し切る勉強法に限界を感じた
- 業務に入ると何を実装すべきか見えなくなった
- AIに頼ろうとしても、何を指示すればいいか分からなかった

> 理想状態が分からないと、人にもAIにも聞けない

---

# 今日のゴール

> **以前よりもテストについて知り、テスト活動で悩めるようになること**

- JSTQBの第1章・第4章・第5章ベース
- 前提はシステムテストレベル
- 目標はテストケース作成までの流れを掴むこと

---

# 先に結論


### AIに指示できない
###  ↓
### 対象の振る舞いが整理できていない
###  ↓
### テスト分析・テスト設計を学ぶ
###  ↓
### 「何を確認し、何を期待するか」が言語化できる


---

# テストの目的

テストの目的は1つではない

| 目的 | 内容 |
|---|---|
| 欠陥の検出 | 故障を引き起こす欠陥を見つける |
| 要件の確認 | 実装が要件や仕様を満たしているか確認する |
| カバレッジの確保 | 重要な機能や特性の見落としを防ぐ |
| リスクの低減 | 本番での問題発生確率を下げる |

---

# 目的はコンテキストで変わる

### 納期が近い
最低限、必要機能が動くことを確認

### 決済機能のリリース前
欠陥検出と要件確認を重視

### 機能追加後
既存機能への影響確認を重視

> まず決めるべきは「何のためのテストか」

---

# 目的が曖昧だと起こること

### 目的がない
### ↓
### 終わりのないテストになる
### ↓
### 疲弊して「よしなに調整」になる
### ↓
### 属人的になり、品質がブレる

- ゴールは見える形で置く
- できれば定量化する

---

# テストプロセスの全体像

### テスト計画
- テスト目的・リスクを定義

### テスト分析
- 何をテストするかを明らかにする
- テスト条件を抽出する
- カバレッジ基準を設定する

### テスト設計
- どのようにテストするかを明らかにする
- カバレッジアイテムを導出する
- テストケースを設計する

---

# なぜプロセスを踏むのか

- やらなくていいことを決められる
- 思いつきの確認で終わらなくなる
- テストケースに根拠が持てる
- 時間切れのときも優先順位をつけやすい

---

# テスト分析

## 何をテストするか

> テスト条件 = テストによって確認できるもの/こと

| 抽象度 | 例 |
|---|---|
| 高い | 送料計算が正しく機能すること |
| 中くらい | 会員ステータスによって送料が変わること |
| 詳細 | 一般会員・5000円未満・クレカ時に500円になること |

---

# 抽象度に幅があるのが大事

### ❌ 一般会員なら送料計算が正しいこと
会員しか見えない

### ✅ 送料計算が正しく機能すること
金額、支払い方法など他の属性も洗い出せる

- 具体的すぎると観点が狭まる
- 抽象的すぎると完了条件が曖昧になる

---

# カバレッジ基準

> **何をもって100%とするかのルール**

### 例
- 送料計算に影響する属性をすべて対象にする
- 会員 × 購入金額 × 支払い方法の組み合わせを確認する
- 購入金額は4999円と5000円を必ず確認する

- 完了条件を定義するために必要
- リスクが高いほど厳しくなる

---

# テスト設計

## どのようにテストするか

### テスト分析
何をテストするか

### テスト設計
- どんなデータで
- どんな手順で
- 何を期待するか

---

# テスト技法の役割

### 同値分割
属性とパーティションを識別する

### デシジョンテーブル
属性の組み合わせを整理する

### 境界値分析
具体的なテストデータを決める

> 漏れなく、根拠を持って決めるために使う

---

# 技法をどうつなぐか

### 1. 同値分割
テスト条件から属性を識別する

### 2. デシジョンテーブル
属性の組み合わせを整理する

### 3. 境界値分析
各組み合わせに入れる具体値を決める

### 4. テストケース
期待結果まで含めて完成

> 組み合わせはカバレッジアイテムでもあり、テストケースの土台でもある

---

# 同値分割

<div style="display:flex; gap:2rem; align-items:flex-start;">
<div style="flex:0 0 44%;">

まず属性を洗い出す

### 属性とは
テスト対象の振る舞いに影響を与える要素

### 送料計算が正しく機能すること
- 会員ステータス
- 購入金額
- 支払い方法

次に同じ振る舞いをするグループへ分ける

### 購入金額
- 5000円未満
- 5000円以上

</div>
<div style="flex:1; padding-top:2.5rem;">

<img src="/slides/2026-05-09-what-is-testing/images/equivalence-partitioning.svg" alt="同値分割のイメージ" style="width:100%; max-width:820px; height:auto; display:block; margin-left:auto;" />

</div>
</div>

---

# デシジョンテーブル

複数属性の組み合わせを整理する

![送料計算のデシジョンテーブル](/posts/2026-05-09-what-is-testing/decision_table.svg)

### 会員 2 × 金額 2 × 支払い 2 = 8通り

---

# 境界値分析

<div style="display:flex; gap:2rem; align-items:flex-start;">
<div style="flex:0 0 42%;">

欠陥は境界に潜みやすい

### 仕様
5000円以上は送料無料

### 見るべき値
- 4999円
- 5000円

- 3000円だけでは境界のバグは見えない
- 同値分割とセットで考える

</div>
<div style="flex:1; padding-top:2rem;">

<img src="/slides/2026-05-09-what-is-testing/images/boundary-value-analysis.svg" alt="境界値分析のイメージ" style="width:100%; max-width:820px; height:auto; display:block; margin-left:auto;" />

</div>
</div>

---

# 3つの技法で何が決まるか

### 何をテストするのか
### テスト条件
送料計算が正しく機能すること

### カバレッジ基準
会員 × 購入金額 × 支払い方法の組み合わせを確認する

購入金額は境界値を使って確認する

---

# 3つの技法で何が決まるか

### どのようにテストするのか
### 同値分割
振る舞いに影響する属性を見つける

会員ステータス / 購入金額 / 支払い方法

### デシジョンテーブル
属性の組み合わせを整理する

### 境界値分析
具体的にどの値で確かめるかを決める

5000円未満 → 4999円

5000円以上 → 5000円

### 例
| 会員 | 購入金額 | 支払い方法 | テストデータ |
|---|---|---|---|
| 一般 | 5000円未満 | クレカ | 4999円 |
| 一般 | 5000円以上 | クレカ | 5000円 |
| プレミアム | 5000円未満 | 代引き | 4999円 |
| プレミアム | 5000円以上 | 代引き | 5000円 |

### つまり
3つの技法を通すと、テスト条件に対する具体的なテストケースが決まる

---

# カバレッジ基準の種類

- イーチチョイス
  - 各パーティションが最低1回出ればよい
- 全組み合わせ
  - すべての組み合わせを確認する

> 正解は1つではない。リスクと時間で決める

---

# リスク分析

> リスク = 発生可能性がある不利益をもたらす何か

共通する性質

1. 不確実性がある
2. 現実になると損失が出る

---

# リスクレジスター

### P = 発生確率
### C = 影響度
### E = P × C

| リスク | P | C | E |
|---|---:|---:|---:|
| 境界値で送料が誤る | 3 | 5 | 15 |
| 組み合わせで送料が誤る | 3 | 6 | 18 |
| 代引き加算が誤る | 2 | 4 | 8 |
| 無効値で異常系が漏れる | 1 | 3 | 3 |

> Eが高いものほど優先して厳しくテストする

---

# バグゼロを掲げる危うさ

### 全部重要
### ↓
### 優先順位が消える
### ↓
### 全部やろうとして時間切れ
### ↓
### 本当に危ない所を落とす

- 重要なのは網羅より優先順位
- 時間制約があるならなおさら

---

# 時間制約への向き合い方

### E=18
全組み合わせで確認する

### E=3
時間があれば確認する

> リスク分析があると、削る判断にも根拠が持てる

---

# 作ったもの

## テストケース生成スキル

入力
- PBIチケット
- 既存コード
- その他のテストベース

自動化したいこと
- テスト目的の整理
- リスクレジスター作成
- カバレッジ基準の決定
- テストケース出力

---

# スキルの流れ

### STEP1
コンテキストを質問で集める

### STEP2
コードから仕様を読む

### STEP3
リスクレジスターを作る

### STEP4
Eスコアからカバレッジ基準を決める

### STEP5
テストケースを表で出す

---

# この話で言いたかったこと

### PBI + コード
### ↓
### テストベース分析
### ↓
### 振る舞いが整理される
### ↓
### 期待結果が言語化される
### ↓
### AIへの指示が具体化する

---

# まとめ

- テストは「バグを探す作業」だけではない
- 目的、リスク、カバレッジ基準が先にある
- テスト分析で何を確認するかを決める
- テスト設計でどう確認するかを決める
- 振る舞いが整理できると、AIにも指示しやすくなる

---

# おわり

テストを学ぶと

**実装対象の振る舞いを言葉にできる**

それがそのまま

**AIに渡す指示の精度につながる**
