import { defineConfig } from 'astro/config';
import { unified } from '@astrojs/markdown-remark';

// The bug is in the remark/rehype pipeline (unified()), not the default satteri processor.
export default defineConfig({
  markdown: {
    processor: unified(),
  },
});
