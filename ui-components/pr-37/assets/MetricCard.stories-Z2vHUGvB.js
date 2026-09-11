import{i as e}from"./preload-helper-DeOYd297.js";import{a as t,n,r}from"./iframe-DHO46fBE.js";import{n as i,t as a}from"./metric-card-Bg8cdXHF.js";var o,s,c,l,u,d,f,p;e((()=>{a(),r(),o=t(),s={title:`Metadata UI/MetricCard`,component:i,parameters:{layout:`centered`},tags:[`autodocs`]},c={args:{label:`Compliance score`,value:`87%`,detail:`across 142 resources`}},l={args:{label:`Conformant resources`,value:`124`,trend:{direction:`up`,value:`+8`,label:`Up 8 since last crawl`},detail:`vs. last crawl`}},u={args:{label:`Open violations`,value:`31`,trend:{direction:`down`,value:`-5`,label:`Down 5 since last crawl`},detail:`vs. last crawl`}},d={render:()=>(0,o.jsxs)(`div`,{className:`grid grid-cols-2 gap-4`,style:{width:520},children:[(0,o.jsx)(i,{label:`Landscapes`,value:`3`}),(0,o.jsx)(i,{label:`Products`,value:`42`,trend:{direction:`up`,value:`+2`}}),(0,o.jsx)(i,{label:`Compliance score`,value:`87%`,detail:`across 142 resources`}),(0,o.jsx)(i,{label:`Open violations`,value:`31`,trend:{direction:`down`,value:`-5`}})]})},f={parameters:{disableThemeRoot:!0,backgrounds:{value:`dark`}},render:()=>(0,o.jsx)(n,{defaultTheme:`dark`,style:{padding:24},children:(0,o.jsxs)(`div`,{className:`grid grid-cols-2 gap-4`,style:{width:520},children:[(0,o.jsx)(i,{label:`Products`,value:`42`,trend:{direction:`up`,value:`+2`}}),(0,o.jsx)(i,{label:`Open violations`,value:`31`,trend:{direction:`down`,value:`-5`}})]})})},p=[`Default`,`TrendUp`,`TrendDown`,`Grid`,`DarkMode`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Compliance score',
    value: '87%',
    detail: 'across 142 resources'
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}}}))();export{f as DarkMode,c as Default,d as Grid,u as TrendDown,l as TrendUp,p as __namedExportsOrder,s as default};