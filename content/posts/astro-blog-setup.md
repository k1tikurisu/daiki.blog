---
title: "Astroでシンプルなブログを作る"
date: 2025-01-21
description: "Astroを使ってミニマルなブログサイトを構築する方法"
draft: false
---

## Astroとは

Astroは、コンテンツ重視のWebサイトを構築するための静的サイトジェネレーターです。パフォーマンスを重視し、デフォルトでJavaScriptを最小限に抑えた設計になっています。

## セットアップ

### プロジェクトの作成

```bash
npm create astro@latest my-blog
```

### 必要なパッケージのインストール

```bash
cd my-blog
npm install
```

## ディレクトリ構造

```
src/
├── content/
│   └── posts/
│       └── *.md
├── layouts/
│   └── Layout.astro
├── pages/
│   ├── index.astro
│   └── posts/
│       └── [slug].astro
└── styles/
    └── global.css
```

## Content Collectionsの設定

`src/content/config.ts`でブログ記事のスキーマを定義します：

```typescript
import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});
```

## Markdownでの記事作成

記事は`src/content/posts/`ディレクトリにMarkdownファイルとして作成します。フロントマターで記事のメタデータを定義します。

## デプロイ

Vercel、Netlify、GitHub Pagesなど、様々なプラットフォームにデプロイできます。

```bash
npm run build
```

上記コマンドで`dist/`ディレクトリに静的ファイルが生成されます。

## まとめ

Astroを使うことで、シンプルで高速なブログサイトを簡単に構築できます。Content Collectionsを活用することで、型安全な記事管理も可能です。