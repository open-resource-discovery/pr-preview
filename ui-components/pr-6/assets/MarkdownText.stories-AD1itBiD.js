import{i as e}from"./preload-helper-DIF550On.js";import{i as t}from"./iframe-pc92L1PC.js";import{n,t as r}from"./markdown-text-Dk8ZNQCK.js";var i,a,o,s,c,l;e((()=>{r(),i=t(),a={title:`Components/MarkdownText`,component:n,parameters:{layout:`centered`},tags:[`autodocs`],decorators:[e=>(0,i.jsx)(`div`,{style:{width:`100%`,maxWidth:400},children:(0,i.jsx)(e,{})})]},o={args:{text:`This is a **bold** and *italic* markdown text with a [link](https://example.com).`}},s={args:{text:`# Heading

This is a longer markdown text that should be clamped after a few lines. It contains multiple paragraphs.

- Item one
- Item two
- Item three

Another paragraph with more content that will definitely overflow the clamp limit and trigger the "Show more" button.

Final paragraph with **bold text** and \`inline code\`.`,clampLines:3}},c={args:{text:'Here is some code:\n\n```javascript\nconst hello = "world";\nconsole.log(hello);\n```\n\nAnd an inline `code snippet`.'}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'This is a **bold** and *italic* markdown text with a [link](https://example.com).'
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    text: \`# Heading

This is a longer markdown text that should be clamped after a few lines. It contains multiple paragraphs.

- Item one
- Item two
- Item three

Another paragraph with more content that will definitely overflow the clamp limit and trigger the "Show more" button.

Final paragraph with **bold text** and \\\`inline code\\\`.\`,
    clampLines: 3
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    text: \`Here is some code:

\\\`\\\`\\\`javascript
const hello = "world";
console.log(hello);
\\\`\\\`\\\`

And an inline \\\`code snippet\\\`.\`
  }
}`,...c.parameters?.docs?.source}}},l=[`Default`,`WithClamp`,`CodeBlock`]}))();export{c as CodeBlock,o as Default,s as WithClamp,l as __namedExportsOrder,a as default};