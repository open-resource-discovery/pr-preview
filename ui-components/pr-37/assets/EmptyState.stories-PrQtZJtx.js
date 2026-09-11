import{i as e}from"./preload-helper-DeOYd297.js";import{a as t,n,r}from"./iframe-DHO46fBE.js";import{n as i,t as a}from"./button-DVwv5ICX.js";import{n as o,t as s}from"./empty-state-CqtqsmuY.js";var c,l,u,d,f,p,m,h;e((()=>{s(),a(),r(),c=t(),l=(0,c.jsxs)(`svg`,{"aria-hidden":`true`,viewBox:`0 0 24 24`,width:`20`,height:`20`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,c.jsx)(`circle`,{cx:`11`,cy:`11`,r:`8`}),(0,c.jsx)(`path`,{d:`m21 21-4.3-4.3`})]}),u={title:`Metadata UI/EmptyState`,component:o,parameters:{layout:`padded`},tags:[`autodocs`]},d={args:{icon:l,title:`No results found`,description:`Try adjusting your search or filters to find what you are looking for.`}},f={args:{icon:l,title:`No products yet`,description:`Products discovered in your landscapes will appear here.`,actions:(0,c.jsx)(i,{variant:`outline`,children:`Reset filters`})}},p={args:{title:`Nothing to show`}},m={parameters:{disableThemeRoot:!0,backgrounds:{value:`dark`}},render:()=>(0,c.jsx)(n,{defaultTheme:`dark`,style:{padding:24},children:(0,c.jsx)(o,{icon:l,title:`No results found`,description:`Try adjusting your search or filters.`,actions:(0,c.jsx)(i,{variant:`outline`,children:`Reset filters`})})})},h=[`Default`,`WithAction`,`TitleOnly`,`DarkMode`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    icon: SearchIcon,
    title: 'No results found',
    description: 'Try adjusting your search or filters to find what you are looking for.'
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    icon: SearchIcon,
    title: 'No products yet',
    description: 'Products discovered in your landscapes will appear here.',
    actions: <Button variant="outline">Reset filters</Button>
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Nothing to show'
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  parameters: {
    disableThemeRoot: true,
    backgrounds: {
      value: 'dark'
    }
  },
  render: () => <ThemeRoot defaultTheme="dark" style={{
    padding: 24
  }}>
      <EmptyState icon={SearchIcon} title="No results found" description="Try adjusting your search or filters." actions={<Button variant="outline">Reset filters</Button>} />
    </ThemeRoot>
}`,...m.parameters?.docs?.source}}}}))();export{m as DarkMode,d as Default,p as TitleOnly,f as WithAction,h as __namedExportsOrder,u as default};