import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{a as t,n,r}from"./iframe-Cyq8n8Wb.js";import{n as i,t as a}from"./Breadcrumbs-C9X_0weV.js";var o,s,c,l,u,d,f;function p(){return(p=e((()=>{i(),r(),o=t(),s={title:`Metadata UI/Breadcrumbs`,component:a,parameters:{layout:`padded`},tags:[`autodocs`]},c={args:{label:`Breadcrumb`,items:[{label:`Products`,href:`/products`},{label:`Customer Order`,href:`/products/customer-order`},{label:`Order API`}]}},l={args:{label:`Breadcrumb`,linkRender:e=>(0,o.jsx)(`a`,{href:`#`,...e}),items:[{label:`Landscapes`,href:`#`},{label:`Canary`,href:`#`},{label:`Overview`}]}},u={args:{label:`Breadcrumb`,maxItems:3,collapseLabel:`Show hidden levels`,items:[{label:`Products`,href:`#`},{label:`Sales`,href:`#`},{label:`Customer Order`,href:`#`},{label:`APIs`,href:`#`},{label:`Order API`}]}},d={parameters:{disableThemeRoot:!0,backgrounds:{value:`dark`}},render:()=>(0,o.jsx)(n,{defaultTheme:`dark`,style:{padding:24},children:(0,o.jsx)(a,{label:`Breadcrumb`,items:[{label:`Products`,href:`#`},{label:`Customer Order`,href:`#`},{label:`Order API`}]})})},f=[`Default`,`WithLinkRenderer`,`Collapsed`,`DarkMode`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Breadcrumb',
    items: [{
      label: 'Products',
      href: '/products'
    }, {
      label: 'Customer Order',
      href: '/products/customer-order'
    }, {
      label: 'Order API'
    }]
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Breadcrumb',
    // In an app this is \`(props) => <Link href={item.href!} {...props} />\`.
    linkRender: props => <a href="#" {...props} />,
    items: [{
      label: 'Landscapes',
      href: '#'
    }, {
      label: 'Canary',
      href: '#'
    }, {
      label: 'Overview'
    }]
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Breadcrumb',
    maxItems: 3,
    collapseLabel: 'Show hidden levels',
    items: [{
      label: 'Products',
      href: '#'
    }, {
      label: 'Sales',
      href: '#'
    }, {
      label: 'Customer Order',
      href: '#'
    }, {
      label: 'APIs',
      href: '#'
    }, {
      label: 'Order API'
    }]
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  parameters: {
    disableThemeRoot: true,
    backgrounds: {
      value: 'dark'
    }
  },
  render: () => <ThemeRoot defaultTheme="dark" style={{
    padding: 24
  }}>
      <Breadcrumbs label="Breadcrumb" items={[{
      label: 'Products',
      href: '#'
    }, {
      label: 'Customer Order',
      href: '#'
    }, {
      label: 'Order API'
    }]} />
    </ThemeRoot>
}`,...d.parameters?.docs?.source}}}})))()}p();export{u as Collapsed,d as DarkMode,c as Default,l as WithLinkRenderer,f as __namedExportsOrder,s as default};