import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-DiVRNtpo.js";import{a as n,n as r,r as i}from"./iframe-CkGT4wFf.js";import{n as a,t as o}from"./cn-CRPPm6yZ.js";function s(e,t){if(!t||e.length<=t)return e.map(e=>({it:e}));let n=e[0],r=e.slice(e.length-(t-1));return[{it:n},{ellipsis:!0},...r.map(e=>({it:e}))]}var c,l,u,d,f;function p(){return(p=e((()=>{c=t(),a(),l=n(),u=(0,l.jsx)(`svg`,{"aria-hidden":`true`,viewBox:`0 0 24 24`,width:`14`,height:`14`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:(0,l.jsx)(`path`,{d:`m9 18 6-6-6-6`})}),d=`ordu:rounded ordu:transition-colors ordu:hover:text-foreground ordu:focus-visible:outline-none ordu:focus-visible:ring-2 ordu:focus-visible:ring-ring`,f=(0,c.forwardRef)(({items:e,label:t,separator:n=u,linkRender:r,maxItems:i,collapseLabel:a,className:f,...p},m)=>{let h=s(e,i);return(0,l.jsx)(`nav`,{ref:m,"aria-label":t,className:o(`ordu:w-full`,f),...p,children:(0,l.jsx)(`ol`,{className:`ordu:flex ordu:flex-wrap ordu:items-center ordu:gap-1.5 ordu:m-0 ordu:p-0 ordu:list-none ordu:text-sm ordu:text-muted-foreground`,children:h.map((e,t)=>{let i=t===h.length-1,o=!i&&(0,l.jsx)(`li`,{"aria-hidden":`true`,className:`ordu:flex ordu:items-center ordu:text-muted-foreground`,children:n});if(`ellipsis`in e)return(0,l.jsxs)(c.Fragment,{children:[(0,l.jsx)(`li`,{className:`ordu:flex ordu:items-center`,children:(0,l.jsx)(`span`,{"aria-label":a,children:`…`})}),o]},`ellipsis-${t}`);let{it:s}=e,u=s.render??r,f;return f=i?(0,l.jsx)(`span`,{"aria-current":`page`,className:`ordu:font-medium ordu:text-foreground`,children:s.label}):u?u({className:d,children:s.label}):s.href?(0,l.jsx)(`a`,{href:s.href,className:d,children:s.label}):(0,l.jsx)(`span`,{children:s.label}),(0,l.jsxs)(c.Fragment,{children:[(0,l.jsx)(`li`,{className:`ordu:flex ordu:items-center ordu:min-w-0 ordu:truncate`,children:f}),o]},t)})})})}),f.displayName=`Breadcrumbs`,f.__docgenInfo={description:'A semantic, responsive breadcrumb trail (`<nav>` → `<ol>`). The last item is rendered as the\ncurrent page (`aria-current="page"`, non-navigational). Link items render through a caller-supplied\n{@link LinkRender} (Next.js / TanStack Router — no router dependency here) or a native `<a href>`.',methods:[],displayName:`Breadcrumbs`,props:{items:{required:!0,tsType:{name:`Array`,elements:[{name:`BreadcrumbItem`}],raw:`BreadcrumbItem[]`},description:``},label:{required:!0,tsType:{name:`string`},description:"Accessible name for the `<nav>` landmark. Required and caller-provided (no default text)."},separator:{required:!1,tsType:{name:`ReactNode`},description:`Separator rendered between items. Defaults to a chevron.`,defaultValue:{value:`<svg
  aria-hidden="true"
  viewBox="0 0 24 24"
  width="14"
  height="14"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round">
  <path d="m9 18 6-6-6-6" />
</svg>`,computed:!1}},linkRender:{required:!1,tsType:{name:`LinkRender`},description:"Default link renderer for items without their own `render`."},maxItems:{required:!1,tsType:{name:`number`},description:"Collapse to the first item + the last `maxItems - 1` when the trail is longer. 0/undefined disables."},collapseLabel:{required:!1,tsType:{name:`string`},description:`Accessible label for the collapsed-items ellipsis.`}},composes:[`Omit`]}})))()}var m,h,g,_,v,y,b;function x(){return(x=e((()=>{p(),i(),m=n(),h={title:`Metadata UI/Breadcrumbs`,component:f,parameters:{layout:`padded`},tags:[`autodocs`]},g={args:{label:`Breadcrumb`,items:[{label:`Products`,href:`/products`},{label:`Customer Order`,href:`/products/customer-order`},{label:`Order API`}]}},_={args:{label:`Breadcrumb`,linkRender:e=>(0,m.jsx)(`a`,{href:`#`,...e}),items:[{label:`Landscapes`,href:`#`},{label:`Canary`,href:`#`},{label:`Overview`}]}},v={args:{label:`Breadcrumb`,maxItems:3,collapseLabel:`Show hidden levels`,items:[{label:`Products`,href:`#`},{label:`Sales`,href:`#`},{label:`Customer Order`,href:`#`},{label:`APIs`,href:`#`},{label:`Order API`}]}},y={parameters:{disableThemeRoot:!0,backgrounds:{value:`dark`}},render:()=>(0,m.jsx)(r,{defaultTheme:`dark`,style:{padding:24},children:(0,m.jsx)(f,{label:`Breadcrumb`,items:[{label:`Products`,href:`#`},{label:`Customer Order`,href:`#`},{label:`Order API`}]})})},b=[`Default`,`WithLinkRenderer`,`Collapsed`,`DarkMode`],g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}}})))()}x();export{v as Collapsed,y as DarkMode,g as Default,_ as WithLinkRenderer,b as __namedExportsOrder,h as default};