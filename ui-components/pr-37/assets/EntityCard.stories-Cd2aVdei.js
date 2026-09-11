import{i as e}from"./preload-helper-DeOYd297.js";import{a as t,n,r}from"./iframe-DHO46fBE.js";import{n as i,t as a}from"./entity-card-P-EGFEBE.js";var o,s,c,l,u,d,f,p;e((()=>{a(),r(),o=t(),s={title:`Metadata UI/EntityCard`,component:i,parameters:{layout:`centered`},tags:[`autodocs`]},c={args:{kind:`API Resource`,title:`Sales Order API`,subtitle:`sap.s4:apiResource:SalesOrder:v1`,description:`Read and manage sales orders across the connected landscapes.`,version:`v1`,statuses:[{label:`Active`,tone:`success`},{label:`Public`,tone:`info`}],metrics:[{label:`Compliance`,value:`92%`},{label:`Entity types`,value:8}]}},l={args:{...c.args,href:`#`,ariaLabel:`Open Sales Order API`}},u={args:{...c.args,render:e=>(0,o.jsx)(`a`,{href:`#`,...e})}},d={args:{kind:`Event Resource`,title:`Order Changed`}},f={parameters:{disableThemeRoot:!0,backgrounds:{value:`dark`}},render:()=>(0,o.jsx)(n,{defaultTheme:`dark`,style:{padding:24,width:340},children:(0,o.jsx)(i,{kind:`API Resource`,title:`Sales Order API`,subtitle:`sap.s4:apiResource:SalesOrder:v1`,version:`v1`,statuses:[{label:`Active`,tone:`success`},{label:`Public`,tone:`info`}],metrics:[{label:`Compliance`,value:`92%`},{label:`Entity types`,value:8}]})})},p=[`Default`,`AsLink`,`WithRenderProp`,`Minimal`,`DarkMode`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    kind: 'API Resource',
    title: 'Sales Order API',
    subtitle: 'sap.s4:apiResource:SalesOrder:v1',
    description: 'Read and manage sales orders across the connected landscapes.',
    version: 'v1',
    statuses: [{
      label: 'Active',
      tone: 'success'
    }, {
      label: 'Public',
      tone: 'info'
    }],
    metrics: [{
      label: 'Compliance',
      value: '92%'
    }, {
      label: 'Entity types',
      value: 8
    }]
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    href: '#',
    ariaLabel: 'Open Sales Order API'
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    // In an app: \`(props) => <Link href="/resources/sales-order" {...props} />\`.
    render: props => <a href="#" {...props} />
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    kind: 'Event Resource',
    title: 'Order Changed'
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  parameters: {
    disableThemeRoot: true,
    backgrounds: {
      value: 'dark'
    }
  },
  render: () => <ThemeRoot defaultTheme="dark" style={{
    padding: 24,
    width: 340
  }}>
      <EntityCard kind="API Resource" title="Sales Order API" subtitle="sap.s4:apiResource:SalesOrder:v1" version="v1" statuses={[{
      label: 'Active',
      tone: 'success'
    }, {
      label: 'Public',
      tone: 'info'
    }]} metrics={[{
      label: 'Compliance',
      value: '92%'
    }, {
      label: 'Entity types',
      value: 8
    }]} />
    </ThemeRoot>
}`,...f.parameters?.docs?.source}}}}))();export{l as AsLink,f as DarkMode,c as Default,d as Minimal,u as WithRenderProp,p as __namedExportsOrder,s as default};