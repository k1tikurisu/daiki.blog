# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Japanese blog built with Astro 5 that generates static files optimized for Japanese typography. The blog is deployed to Cloudflare Pages and includes comprehensive linting for both code and Japanese text.

## Development Commands

### Core Development

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

### Linting & Formatting

- `npm run lint` - Lint TypeScript/JavaScript/Astro files
- `npm run lint:fix` - Auto-fix linting issues
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting
- `npm run lint:md` - Lint Markdown files with markdownlint
- `npm run lint:md:fix` - Auto-fix Markdown issues
- `npm run lint:text` - Lint Japanese text with textlint
- `npm run lint:text:fix` - Auto-fix Japanese text issues
- `npm run lint:all` - Run all linters
- `npm run fix:all` - Run all auto-fixers

### Deployment

- `npm run deploy` - Deploy to production via Cloudflare Pages
- `npm run deploy:preview` - Deploy to preview environment

## Architecture Overview

### Content Management

- **Content Collections**: Blog posts are managed through Astro's content collections system in `src/content.config.ts`
- **Posts Directory**: All blog posts are stored as Markdown files in `content/posts/`
- **Schema**: Posts require `title`, `date`, and optional `description` and `draft` fields
- **Draft Handling**: Posts with `draft: true` are excluded from production builds

### Key Files & Structure

- `astro.config.mjs` - Astro configuration with static output and file format
- `src/layouts/Layout.astro` - Base layout with Japanese typography, OGP, Twitter Cards, and Cloudflare Analytics
- `src/pages/posts/[slug].astro` - Dynamic post pages with Japanese date formatting
- `src/pages/rss.xml.js` - RSS feed generation
- `.textlintrc.json` - Japanese text linting rules using preset-ja-technical-writing
- `wrangler.toml` - Cloudflare Pages deployment configuration

### Japanese Localization

- **Language**: Site is configured for Japanese (lang="ja")
- **Typography**: Uses `font-feature-settings: 'palt' 1` for Japanese text optimization
- **Font Stack**: Prioritizes Japanese fonts (Hiragino Sans, Noto Sans JP)
- **Date Formatting**: Japanese date format in post pages
- **Text Linting**: Japanese technical writing rules via textlint

### Styling Approach

- **CSS Variables**: Centralized theming with CSS custom properties
- **Global Styles**: Typography and base styles in Layout.astro
- **Component Styles**: Scoped styles in individual Astro components
- **Responsive**: Mobile-first responsive design

### Deployment & Analytics

- **Platform**: Cloudflare Pages via Wrangler CLI
- **Analytics**: Cloudflare Web Analytics (production only, controlled by CF_ANALYTICS_TOKEN)
- **Environments**: Separate production and preview environments
- **Build**: Static file generation with clean URLs (format: 'file')

## Content Guidelines

### Blog Post Structure

Blog posts should include frontmatter with:

```yaml
---
title: 'Post Title'
date: 2024-01-01
description: 'Optional description for SEO'
draft: false # Optional, defaults to false
---
```

### Japanese Text Quality

All Japanese text is automatically linted with textlint using technical writing rules. Run `npm run lint:text` before committing content changes.

### SEO & Social Sharing

- Posts automatically generate OGP and Twitter Card metadata
- RSS feed is automatically updated when posts are added
- Canonical URLs and proper meta tags are handled by the Layout component
