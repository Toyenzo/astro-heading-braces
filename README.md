# Repro: `getHeadings()` turns `{` into `${` in Markdown heading text

Uses `astro@7.4.11` with the remark/rehype pipeline (`markdown.processor: unified()` from `@astrojs/markdown-remark@7.3.8`). The default satteri processor is not affected.

`src/post.md` has the heading `## Using {braces} in config`. `src/pages/index.astro` prints `getHeadings()` and renders the Markdown.

Needs Node >= 22.23.4.

```sh
npm install
npm run build
grep -A3 'using-braces' dist/index.html
```

**Actual:** `getHeadings()` reports `"text": "Using ${braces} in config"`, while the rendered `<h2>` shows `Using {braces} in config`.

**Expected:** `"text": "Using {braces} in config"`.
