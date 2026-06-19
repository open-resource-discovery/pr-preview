import{i as e}from"./preload-helper-DIF550On.js";import{i as t}from"./iframe-pc92L1PC.js";import{i as n,n as r,t as i}from"./select-Bolo83Ec.js";var a,o,s,c,l,u,d,f,p,m;e((()=>{i(),a=t(),o={title:`Components/Select`,component:n.Root,parameters:{layout:`padded`},tags:[`autodocs`],decorators:[e=>(0,a.jsx)(`div`,{className:`p-8`,style:{width:`100%`,maxWidth:300},children:(0,a.jsx)(e,{})})]},s={render:()=>(0,a.jsxs)(n.Root,{defaultValue:`streamable-http`,items:{"streamable-http":`Streamable HTTP`,sse:`SSE`,stdio:`stdio`},children:[(0,a.jsxs)(n.Trigger,{children:[(0,a.jsx)(n.Value,{placeholder:`Select transport...`}),(0,a.jsx)(n.Icon,{})]}),(0,a.jsx)(n.Portal,{children:(0,a.jsx)(n.Positioner,{children:(0,a.jsxs)(n.Popup,{children:[(0,a.jsxs)(n.Item,{value:`streamable-http`,children:[(0,a.jsx)(n.ItemIndicator,{}),(0,a.jsx)(n.ItemText,{children:`Streamable HTTP`})]}),(0,a.jsxs)(n.Item,{value:`sse`,children:[(0,a.jsx)(n.ItemIndicator,{}),(0,a.jsx)(n.ItemText,{children:`SSE`})]}),(0,a.jsxs)(n.Item,{value:`stdio`,children:[(0,a.jsx)(n.ItemIndicator,{}),(0,a.jsx)(n.ItemText,{children:`stdio`})]})]})})})]})},c={render:()=>(0,a.jsxs)(n.Root,{defaultValue:`streamable-http`,items:{"streamable-http":`Streamable HTTP`,sse:`SSE`,stdio:`stdio`},children:[(0,a.jsxs)(n.Trigger,{children:[(0,a.jsx)(n.Value,{placeholder:`Select transport...`}),(0,a.jsx)(n.Icon,{})]}),(0,a.jsx)(n.Portal,{children:(0,a.jsx)(n.Positioner,{children:(0,a.jsxs)(n.Popup,{children:[(0,a.jsxs)(n.Group,{children:[(0,a.jsx)(n.GroupLabel,{children:`Remote`}),(0,a.jsxs)(n.Item,{value:`streamable-http`,children:[(0,a.jsx)(n.ItemIndicator,{}),(0,a.jsx)(n.ItemText,{children:`Streamable HTTP`})]}),(0,a.jsxs)(n.Item,{value:`sse`,children:[(0,a.jsx)(n.ItemIndicator,{}),(0,a.jsx)(n.ItemText,{children:`SSE`})]})]}),(0,a.jsxs)(n.Group,{children:[(0,a.jsx)(n.GroupLabel,{children:`Local`}),(0,a.jsxs)(n.Item,{value:`stdio`,children:[(0,a.jsx)(n.ItemIndicator,{}),(0,a.jsx)(n.ItemText,{children:`stdio`})]})]})]})})})]})},l={render:()=>(0,a.jsxs)(n.Root,{defaultValue:`streamable-http`,disabled:!0,items:{"streamable-http":`Streamable HTTP`},children:[(0,a.jsxs)(n.Trigger,{children:[(0,a.jsx)(n.Value,{placeholder:`Select transport...`}),(0,a.jsx)(n.Icon,{})]}),(0,a.jsx)(n.Portal,{children:(0,a.jsx)(n.Positioner,{children:(0,a.jsx)(n.Popup,{children:(0,a.jsxs)(n.Item,{value:`streamable-http`,children:[(0,a.jsx)(n.ItemIndicator,{}),(0,a.jsx)(n.ItemText,{children:`Streamable HTTP`})]})})})})]})},u=[{value:`streamable-http`,label:`Streamable HTTP`},{value:`sse`,label:`SSE`},{value:`stdio`,label:`stdio`}],d={render:()=>(0,a.jsx)(r,{items:u,placeholder:`Select transport...`,defaultValue:`streamable-http`})},f=[{label:`Remote`,items:[{value:`streamable-http`,label:`Streamable HTTP`},{value:`sse`,label:`SSE`}]},{label:`Local`,items:[{value:`stdio`,label:`stdio`}]}],p={render:()=>(0,a.jsx)(r,{items:f,placeholder:`Select transport...`})},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <SimpleSelect items={transportItems} placeholder="Select transport..." defaultValue="streamable-http" />
}`,...d.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <SimpleSelect items={groupedItems} placeholder="Select transport..." />
}`,...p.parameters?.docs?.source}}},m=[`Default`,`WithGroups`,`Disabled`,`Simple`,`SimpleWithGroups`]}))();export{s as Default,l as Disabled,d as Simple,p as SimpleWithGroups,c as WithGroups,m as __namedExportsOrder,o as default};