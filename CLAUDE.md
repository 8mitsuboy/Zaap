# Zaap プロジェクト ルール

## 画像の配置ルール

### 記事内画像・サムネイル
- 画像はすべて `public/posts/{記事ディレクトリ名}/` に配置する
- `src/pages/posts/` 内には画像を置かない

### markdown内の参照パス
- 絶対パスで記述する: `/posts/{記事ディレクトリ名}/{ファイル名}`
- 相対パス（`./image.png`）は使わない

### frontmatter のサムネイル設定
```yaml
image:
  url: /posts/{記事ディレクトリ名}/{ファイル名}
  alt: "画像の説明"
```

## 記事の構成

- ブログ記事: `src/pages/posts/{日付-スラッグ}/index.md`
- レイアウト: `../../../layouts/MarkdownPostLayout.astro`
