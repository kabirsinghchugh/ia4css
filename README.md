# ia4css

This repository contains a minimal blog built with the `ia4` CSS design. The `site` directory holds the static pages and example posts. Markdown files can be converted to styled HTML with the `convert.js` script which also supports LaTeX math via KaTeX.

## Convert markdown to HTML

```
node convert.js path/to/input.md path/to/output.html
```

Example posts are located in `site/posts`. The homepage (`site/index.html`) shows recent news, with dedicated pages for [posts](site/posts.html) and a [portfolio](site/portfolio.html) grid.
