import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-DiVRNtpo.js";import{a as n}from"./iframe-Cyq8n8Wb.js";import{n as r,t as i}from"./cn-CRPPm6yZ.js";import{n as a,r as o}from"./Button-DdbStypR.js";var s,c,l,u;function d(){return(d=e((()=>{s=t(),r(),o(),c=n(),l=(0,c.jsxs)(`svg`,{"aria-hidden":`true`,viewBox:`0 0 24 24`,width:`16`,height:`16`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,c.jsx)(`path`,{d:`M15 3h6v6`}),(0,c.jsx)(`path`,{d:`M10 14 21 3`}),(0,c.jsx)(`path`,{d:`M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6`})]}),u=(0,s.forwardRef)(({href:e,render:t,label:n,icon:r=l,variant:o=`ghost`,size:s=`icon`,className:u},d)=>{let f=i(a({variant:o,size:s,className:u}));return t?t({className:f,children:r,"aria-label":n,target:`_blank`,rel:`noopener noreferrer`}):(0,c.jsx)(`a`,{ref:d,href:e,target:`_blank`,rel:`noopener noreferrer`,"aria-label":n,className:f,children:r})}),u.displayName=`ExternalLinkButton`,u.__docgenInfo={description:'An icon-only link that opens its target in a new tab, styled like an icon button (shared\n`buttonVariants` surface). Provide a `render` to wire a router\'s `<Link>` (it receives\n`target`/`rel`), or an `href` for a native `<a target="_blank">` fallback. Defaults to the\n`ghost`/`icon` look and a square-with-arrow glyph.',methods:[],displayName:`ExternalLinkButton`,props:{href:{required:!1,tsType:{name:`string`},description:"Navigation target for the native `<a>` fallback. Ignored when `render` is provided."},render:{required:!1,tsType:{name:`LinkRender`},description:"Caller-supplied link renderer. Receives `target`/`rel` so it opens in a new tab too."},label:{required:!1,tsType:{name:`string`},description:`Accessible name for the link (icon-only, no visible text).`},icon:{required:!1,tsType:{name:`ReactNode`},description:`Override the icon (defaults to a square-with-arrow glyph).`,defaultValue:{value:`<svg
  aria-hidden="true"
  viewBox="0 0 24 24"
  width="16"
  height="16"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round">
  <path d="M15 3h6v6" />
  <path d="M10 14 21 3" />
  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6" />
</svg>`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``},variant:{defaultValue:{value:`"ghost"`,computed:!1},required:!1},size:{defaultValue:{value:`"icon"`,computed:!1},required:!1}},composes:[`Pick`]}})))()}var f,p,m,h,g,_;function v(){return(v=e((()=>{d(),f=n(),p={title:`Metadata UI/ExternalLinkButton`,component:u,parameters:{layout:`centered`},tags:[`autodocs`]},m={args:{href:`https://open-resource-discovery.github.io/specification/`,label:`Open specification in a new tab`}},h={args:{href:`https://open-resource-discovery.github.io/specification/`,label:`Open specification in a new tab`,variant:`outline`,size:`sm`}},g={render:()=>(0,f.jsxs)(`div`,{className:`flex items-center gap-2 rounded-md border px-3 py-1.5 font-mono text-sm`,children:[(0,f.jsx)(`span`,{children:`https://example.com/resource`}),(0,f.jsx)(u,{href:`https://example.com/resource`,size:`sm`,label:`Open in a new tab`})]})},_=[`Default`,`Outline`,`InlineWithCode`],m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    href: 'https://open-resource-discovery.github.io/specification/',
    label: 'Open specification in a new tab'
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    href: 'https://open-resource-discovery.github.io/specification/',
    label: 'Open specification in a new tab',
    variant: 'outline',
    size: 'sm'
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-2 rounded-md border px-3 py-1.5 font-mono text-sm">
      <span>https://example.com/resource</span>
      <ExternalLinkButton href="https://example.com/resource" size="sm" label="Open in a new tab" />
    </div>
}`,...g.parameters?.docs?.source}}}})))()}v();export{m as Default,g as InlineWithCode,h as Outline,_ as __namedExportsOrder,p as default};