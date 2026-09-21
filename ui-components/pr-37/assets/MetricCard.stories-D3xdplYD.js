import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-DiVRNtpo.js";import{a as n,n as r,r as i}from"./iframe-CkGT4wFf.js";import{n as a,t as o}from"./cn-CRPPm6yZ.js";var s,c,l,u,d,f;function p(){return(p=e((()=>{s=t(),a(),c=n(),l={success:`ordu:text-success`,critical:`ordu:text-destructive`,neutral:`ordu:text-muted-foreground`},u={up:`success`,down:`critical`,flat:`neutral`},d={up:`m5 15 7-7 7 7`,down:`m5 9 7 7 7-7`,flat:`M5 12h14`},f=(0,s.forwardRef)(({label:e,value:t,detail:n,trend:r,icon:i,className:a,...s},f)=>{let p=r?r.tone??u[r.direction]:`neutral`;return(0,c.jsxs)(`div`,{ref:f,className:o(`ordu:bg-card-bg ordu:text-card-fg ordu:border ordu:border-card-border ordu:rounded-[var(--ord-radius)] ordu:shadow-sm ordu:p-4 ordu:flex ordu:flex-col ordu:gap-1.5`,a),...s,children:[(0,c.jsxs)(`div`,{className:`ordu:flex ordu:items-start ordu:justify-between ordu:gap-2`,children:[(0,c.jsx)(`span`,{className:`ordu:text-xs ordu:font-medium ordu:text-muted-foreground`,children:e}),i&&(0,c.jsx)(`span`,{className:`ordu:shrink-0 ordu:h-4 ordu:w-4 ordu:text-muted-foreground ordu:[&>svg]:h-full ordu:[&>svg]:w-full`,children:i})]}),(0,c.jsx)(`span`,{className:`ordu:text-2xl ordu:font-semibold ordu:leading-none ordu:tracking-tight ordu:text-foreground`,children:t}),(n||r)&&(0,c.jsxs)(`div`,{className:`ordu:flex ordu:items-center ordu:gap-2 ordu:text-xs`,children:[r&&(0,c.jsxs)(`span`,{className:o(`ordu:inline-flex ordu:items-center ordu:gap-0.5 ordu:font-medium`,l[p]),"aria-label":r.label,children:[(0,c.jsx)(`svg`,{"aria-hidden":`true`,viewBox:`0 0 24 24`,width:`12`,height:`12`,fill:`none`,stroke:`currentColor`,strokeWidth:`2.5`,strokeLinecap:`round`,strokeLinejoin:`round`,children:(0,c.jsx)(`path`,{d:d[r.direction]})}),r.value]}),n&&(0,c.jsx)(`span`,{className:`ordu:text-muted-foreground`,children:n})]})]})}),f.displayName=`MetricCard`,f.__docgenInfo={description:"A KPI tile presenting a label, value, optional detail, and an optional trend indicator.\nReuses the Card surface. The caller pre-formats `value` and `trend.value`; the component\nperforms no locale/number formatting.",methods:[],displayName:`MetricCard`,props:{label:{required:!0,tsType:{name:`ReactNode`},description:`Metric name.`},value:{required:!0,tsType:{name:`ReactNode`},description:`Pre-formatted metric value (caller owns locale/number formatting).`},detail:{required:!1,tsType:{name:`ReactNode`},description:`Supplementary context shown beside the trend.`},trend:{required:!1,tsType:{name:`MetricTrend`},description:``},icon:{required:!1,tsType:{name:`ReactNode`},description:`Optional icon shown in the top-right corner.`}},composes:[`Omit`]}})))()}var m,h,g,_,v,y,b,x;function S(){return(S=e((()=>{p(),i(),m=n(),h={title:`Metadata UI/MetricCard`,component:f,parameters:{layout:`centered`},tags:[`autodocs`]},g={args:{label:`Compliance score`,value:`87%`,detail:`across 142 resources`}},_={args:{label:`Conformant resources`,value:`124`,trend:{direction:`up`,value:`+8`,label:`Up 8 since last crawl`},detail:`vs. last crawl`}},v={args:{label:`Open violations`,value:`31`,trend:{direction:`down`,value:`-5`,label:`Down 5 since last crawl`},detail:`vs. last crawl`}},y={render:()=>(0,m.jsxs)(`div`,{className:`grid grid-cols-2 gap-4`,style:{width:520},children:[(0,m.jsx)(f,{label:`Landscapes`,value:`3`}),(0,m.jsx)(f,{label:`Products`,value:`42`,trend:{direction:`up`,value:`+2`}}),(0,m.jsx)(f,{label:`Compliance score`,value:`87%`,detail:`across 142 resources`}),(0,m.jsx)(f,{label:`Open violations`,value:`31`,trend:{direction:`down`,value:`-5`}})]})},b={parameters:{disableThemeRoot:!0,backgrounds:{value:`dark`}},render:()=>(0,m.jsx)(r,{defaultTheme:`dark`,style:{padding:24},children:(0,m.jsxs)(`div`,{className:`grid grid-cols-2 gap-4`,style:{width:520},children:[(0,m.jsx)(f,{label:`Products`,value:`42`,trend:{direction:`up`,value:`+2`}}),(0,m.jsx)(f,{label:`Open violations`,value:`31`,trend:{direction:`down`,value:`-5`}})]})})},x=[`Default`,`TrendUp`,`TrendDown`,`Grid`,`DarkMode`],g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Compliance score',
    value: '87%',
    detail: 'across 142 resources'
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Conformant resources',
    value: '124',
    trend: {
      direction: 'up',
      value: '+8',
      label: 'Up 8 since last crawl'
    },
    detail: 'vs. last crawl'
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Open violations',
    value: '31',
    trend: {
      direction: 'down',
      value: '-5',
      label: 'Down 5 since last crawl'
    },
    detail: 'vs. last crawl'
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <div className="grid grid-cols-2 gap-4" style={{
    width: 520
  }}>
      <MetricCard label="Landscapes" value="3" />
      <MetricCard label="Products" value="42" trend={{
      direction: 'up',
      value: '+2'
    }} />
      <MetricCard label="Compliance score" value="87%" detail="across 142 resources" />
      <MetricCard label="Open violations" value="31" trend={{
      direction: 'down',
      value: '-5'
    }} />
    </div>
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  parameters: {
    disableThemeRoot: true,
    backgrounds: {
      value: 'dark'
    }
  },
  render: () => <ThemeRoot defaultTheme="dark" style={{
    padding: 24
  }}>
      <div className="grid grid-cols-2 gap-4" style={{
      width: 520
    }}>
        <MetricCard label="Products" value="42" trend={{
        direction: 'up',
        value: '+2'
      }} />
        <MetricCard label="Open violations" value="31" trend={{
        direction: 'down',
        value: '-5'
      }} />
      </div>
    </ThemeRoot>
}`,...b.parameters?.docs?.source}}}})))()}S();export{b as DarkMode,g as Default,y as Grid,v as TrendDown,_ as TrendUp,x as __namedExportsOrder,h as default};