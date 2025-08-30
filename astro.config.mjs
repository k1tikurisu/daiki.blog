// @ts-check
import { defineConfig } from 'astro/config';
import remarkAbbr from '@richardtowers/remark-abbr';
import remarkDefinitionList from 'remark-definition-list';

// https://astro.build/config
export default defineConfig({
  site: 'https://daiki.blog',
  output: 'static',
  build: {
    format: 'file',
  },
  markdown: {
    remarkPlugins: [remarkDefinitionList, remarkAbbr],
  },
});
