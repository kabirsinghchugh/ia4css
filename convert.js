const fs = require('fs');
const path = require('path');
const fm = require('front-matter');
const MarkdownIt = require('markdown-it');
const mdKatex = require('markdown-it-katex');

const md = new MarkdownIt({html: true}).use(mdKatex);

if (process.argv.length < 4) {
  console.error('Usage: node convert.js <input.md> <output.html>');
  process.exit(1);
}

const [input, output] = process.argv.slice(2);
const data = fs.readFileSync(input, 'utf8');
const content = fm(data);
const htmlBody = md.render(content.body);
const title = content.attributes.title || path.basename(input, '.md');

const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>${title}</title>
  <link rel="stylesheet" href="../css/ia4.css">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.7/dist/katex.min.css">
</head>
<body>
<div class="entry-content">
${htmlBody}
</div>
</body>
</html>`;

fs.writeFileSync(output, html);
