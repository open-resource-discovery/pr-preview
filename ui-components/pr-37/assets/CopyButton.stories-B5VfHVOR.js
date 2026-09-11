import{i as e}from"./preload-helper-DeOYd297.js";import{a as t}from"./iframe-DHO46fBE.js";import{n,t as r}from"./copy-button-BoAlbG8X.js";var i,a,o,s,c,l;e((()=>{r(),i=t(),a={title:`Metadata UI/CopyButton`,component:n,parameters:{layout:`centered`},tags:[`autodocs`]},o={args:{value:`sap.s4:apiResource:Order_v1:v1`,label:`Copy identifier`,copiedAnnouncement:`Copied to clipboard`,errorAnnouncement:`Copy failed`}},s={args:{value:`https://example.com/resource`,variant:`outline`,size:`sm`,label:`Copy link`,copiedAnnouncement:`Link copied`,errorAnnouncement:`Copy failed`,children:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(`svg`,{"aria-hidden":`true`,viewBox:`0 0 24 24`,width:`16`,height:`16`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,i.jsx)(`rect`,{width:`14`,height:`14`,x:`8`,y:`8`,rx:`2`,ry:`2`}),(0,i.jsx)(`path`,{d:`M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2`})]}),`Copy link`]})}},c={render:()=>(0,i.jsxs)(`div`,{className:`flex items-center gap-2 rounded-md border px-3 py-1.5 font-mono text-sm`,children:[(0,i.jsx)(`span`,{children:`sap.s4:apiResource:Order_v1:v1`}),(0,i.jsx)(n,{value:`sap.s4:apiResource:Order_v1:v1`,size:`sm`,label:`Copy identifier`,copiedAnnouncement:`Copied`,errorAnnouncement:`Copy failed`})]})},l=[`Default`,`WithLabel`,`InlineWithCode`],o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    value: 'sap.s4:apiResource:Order_v1:v1',
    label: 'Copy identifier',
    copiedAnnouncement: 'Copied to clipboard',
    errorAnnouncement: 'Copy failed'
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    value: 'https://example.com/resource',
    variant: 'outline',
    size: 'sm',
    label: 'Copy link',
    copiedAnnouncement: 'Link copied',
    errorAnnouncement: 'Copy failed',
    children: <>
        <svg aria-hidden="true" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
          <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
        </svg>
        Copy link
      </>
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-2 rounded-md border px-3 py-1.5 font-mono text-sm">
      <span>sap.s4:apiResource:Order_v1:v1</span>
      <CopyButton value="sap.s4:apiResource:Order_v1:v1" size="sm" label="Copy identifier" copiedAnnouncement="Copied" errorAnnouncement="Copy failed" />
    </div>
}`,...c.parameters?.docs?.source}}}}))();export{o as Default,c as InlineWithCode,s as WithLabel,l as __namedExportsOrder,a as default};