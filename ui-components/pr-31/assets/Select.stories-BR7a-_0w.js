import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t}from"./iframe-f7ZUfOUw.js";import{n,t as r}from"./Select-H7oY2CsN.js";import{n as i,t as a}from"./SimpleSelect-BOiU2Z7w.js";var o,s,c,l,u,d,f,p,m,h;function g(){return(g=e((()=>{n(),i(),o=t(),s={title:`Components/Select`,component:r.Root,parameters:{layout:`padded`},tags:[`autodocs`],decorators:[e=>(0,o.jsx)(`div`,{className:`p-8`,style:{width:`100%`,maxWidth:300},children:(0,o.jsx)(e,{})})]},c={render:()=>(0,o.jsxs)(r.Root,{defaultValue:`streamable-http`,items:{"streamable-http":`Streamable HTTP`,sse:`SSE`,stdio:`stdio`},children:[(0,o.jsxs)(r.Trigger,{children:[(0,o.jsx)(r.Value,{placeholder:`Select transport...`}),(0,o.jsx)(r.Icon,{})]}),(0,o.jsx)(r.Portal,{children:(0,o.jsx)(r.Positioner,{children:(0,o.jsxs)(r.Popup,{children:[(0,o.jsxs)(r.Item,{value:`streamable-http`,children:[(0,o.jsx)(r.ItemIndicator,{}),(0,o.jsx)(r.ItemText,{children:`Streamable HTTP`})]}),(0,o.jsxs)(r.Item,{value:`sse`,children:[(0,o.jsx)(r.ItemIndicator,{}),(0,o.jsx)(r.ItemText,{children:`SSE`})]}),(0,o.jsxs)(r.Item,{value:`stdio`,children:[(0,o.jsx)(r.ItemIndicator,{}),(0,o.jsx)(r.ItemText,{children:`stdio`})]})]})})})]})},l={render:()=>(0,o.jsxs)(r.Root,{defaultValue:`streamable-http`,items:{"streamable-http":`Streamable HTTP`,sse:`SSE`,stdio:`stdio`},children:[(0,o.jsxs)(r.Trigger,{children:[(0,o.jsx)(r.Value,{placeholder:`Select transport...`}),(0,o.jsx)(r.Icon,{})]}),(0,o.jsx)(r.Portal,{children:(0,o.jsx)(r.Positioner,{children:(0,o.jsxs)(r.Popup,{children:[(0,o.jsxs)(r.Group,{children:[(0,o.jsx)(r.GroupLabel,{children:`Remote`}),(0,o.jsxs)(r.Item,{value:`streamable-http`,children:[(0,o.jsx)(r.ItemIndicator,{}),(0,o.jsx)(r.ItemText,{children:`Streamable HTTP`})]}),(0,o.jsxs)(r.Item,{value:`sse`,children:[(0,o.jsx)(r.ItemIndicator,{}),(0,o.jsx)(r.ItemText,{children:`SSE`})]})]}),(0,o.jsxs)(r.Group,{children:[(0,o.jsx)(r.GroupLabel,{children:`Local`}),(0,o.jsxs)(r.Item,{value:`stdio`,children:[(0,o.jsx)(r.ItemIndicator,{}),(0,o.jsx)(r.ItemText,{children:`stdio`})]})]})]})})})]})},u={render:()=>(0,o.jsxs)(r.Root,{defaultValue:`streamable-http`,disabled:!0,items:{"streamable-http":`Streamable HTTP`},children:[(0,o.jsxs)(r.Trigger,{children:[(0,o.jsx)(r.Value,{placeholder:`Select transport...`}),(0,o.jsx)(r.Icon,{})]}),(0,o.jsx)(r.Portal,{children:(0,o.jsx)(r.Positioner,{children:(0,o.jsx)(r.Popup,{children:(0,o.jsxs)(r.Item,{value:`streamable-http`,children:[(0,o.jsx)(r.ItemIndicator,{}),(0,o.jsx)(r.ItemText,{children:`Streamable HTTP`})]})})})})]})},d=[{value:`streamable-http`,label:`Streamable HTTP`},{value:`sse`,label:`SSE`},{value:`stdio`,label:`stdio`}],f={render:()=>(0,o.jsx)(a,{items:d,placeholder:`Select transport...`,defaultValue:`streamable-http`})},p=[{label:`Remote`,items:[{value:`streamable-http`,label:`Streamable HTTP`},{value:`sse`,label:`SSE`}]},{label:`Local`,items:[{value:`stdio`,label:`stdio`}]}],m={render:()=>(0,o.jsx)(a,{items:p,placeholder:`Select transport...`})},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <Select.Root defaultValue="streamable-http" items={{
    'streamable-http': 'Streamable HTTP',
    sse: 'SSE',
    stdio: 'stdio'
  }}>
      <Select.Trigger>
        <Select.Value placeholder="Select transport..." />
        <Select.Icon />
      </Select.Trigger>
      <Select.Portal>
        <Select.Positioner>
          <Select.Popup>
            <Select.Item value="streamable-http">
              <Select.ItemIndicator />
              <Select.ItemText>Streamable HTTP</Select.ItemText>
            </Select.Item>
            <Select.Item value="sse">
              <Select.ItemIndicator />
              <Select.ItemText>SSE</Select.ItemText>
            </Select.Item>
            <Select.Item value="stdio">
              <Select.ItemIndicator />
              <Select.ItemText>stdio</Select.ItemText>
            </Select.Item>
          </Select.Popup>
        </Select.Positioner>
      </Select.Portal>
    </Select.Root>
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <Select.Root defaultValue="streamable-http" items={{
    'streamable-http': 'Streamable HTTP',
    sse: 'SSE',
    stdio: 'stdio'
  }}>
      <Select.Trigger>
        <Select.Value placeholder="Select transport..." />
        <Select.Icon />
      </Select.Trigger>
      <Select.Portal>
        <Select.Positioner>
          <Select.Popup>
            <Select.Group>
              <Select.GroupLabel>Remote</Select.GroupLabel>
              <Select.Item value="streamable-http">
                <Select.ItemIndicator />
                <Select.ItemText>Streamable HTTP</Select.ItemText>
              </Select.Item>
              <Select.Item value="sse">
                <Select.ItemIndicator />
                <Select.ItemText>SSE</Select.ItemText>
              </Select.Item>
            </Select.Group>
            <Select.Group>
              <Select.GroupLabel>Local</Select.GroupLabel>
              <Select.Item value="stdio">
                <Select.ItemIndicator />
                <Select.ItemText>stdio</Select.ItemText>
              </Select.Item>
            </Select.Group>
          </Select.Popup>
        </Select.Positioner>
      </Select.Portal>
    </Select.Root>
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <Select.Root defaultValue="streamable-http" disabled items={{
    'streamable-http': 'Streamable HTTP'
  }}>
      <Select.Trigger>
        <Select.Value placeholder="Select transport..." />
        <Select.Icon />
      </Select.Trigger>
      <Select.Portal>
        <Select.Positioner>
          <Select.Popup>
            <Select.Item value="streamable-http">
              <Select.ItemIndicator />
              <Select.ItemText>Streamable HTTP</Select.ItemText>
            </Select.Item>
          </Select.Popup>
        </Select.Positioner>
      </Select.Portal>
    </Select.Root>
}`,...u.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <SimpleSelect items={transportItems} placeholder="Select transport..." defaultValue="streamable-http" />
}`,...f.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <SimpleSelect items={groupedItems} placeholder="Select transport..." />
}`,...m.parameters?.docs?.source}}},h=[`Default`,`WithGroups`,`Disabled`,`Simple`,`SimpleWithGroups`]})))()}g();export{c as Default,u as Disabled,f as Simple,m as SimpleWithGroups,l as WithGroups,h as __namedExportsOrder,s as default};