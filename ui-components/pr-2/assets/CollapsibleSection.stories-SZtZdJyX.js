import{i as e}from"./preload-helper-BuWHWz2h.js";import{i as t}from"./iframe-CtcPCbgd.js";import{n,t as r}from"./badge-BRKYTD3S.js";import{n as i,t as a}from"./collapsible-section-DhzfGtCq.js";var o,s,c,l,u,d,f,p,m,h,g,_;e((()=>{a(),r(),o=t(),s={title:`Components/CollapsibleSection`,parameters:{layout:`centered`},tags:[`autodocs`],decorators:[e=>(0,o.jsx)(`div`,{style:{width:`100%`,maxWidth:400},children:(0,o.jsx)(e,{})})]},c=(0,o.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:(0,o.jsx)(`path`,{d:`M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z`})}),l=(0,o.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,o.jsx)(`polyline`,{points:`16 18 22 12 16 6`}),(0,o.jsx)(`polyline`,{points:`8 6 2 12 8 18`})]}),u={render:()=>(0,o.jsxs)(i.Root,{children:[(0,o.jsx)(i.Trigger,{children:`Input Schema`}),(0,o.jsx)(i.Content,{children:(0,o.jsx)(`pre`,{className:`text-xs bg-muted p-2 rounded-md`,children:JSON.stringify({type:`object`,properties:{name:{type:`string`}}},null,2)})})]})},d={render:()=>(0,o.jsxs)(i.Root,{children:[(0,o.jsx)(i.Trigger,{icon:c,children:`Tools (3)`}),(0,o.jsx)(i.Content,{children:(0,o.jsxs)(`div`,{className:`space-y-1 pl-[18px]`,children:[(0,o.jsx)(`div`,{className:`text-sm`,children:`get_weather`}),(0,o.jsx)(`div`,{className:`text-sm`,children:`search_docs`}),(0,o.jsx)(`div`,{className:`text-sm`,children:`run_query`})]})})]})},f={render:()=>(0,o.jsxs)(i.Root,{children:[(0,o.jsx)(i.Trigger,{icon:l,badges:(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n,{variant:`secondary`,size:`sm`,children:`required`}),(0,o.jsx)(n,{variant:`outline`,size:`sm`,children:`v2`})]}),children:`Input Schema`}),(0,o.jsx)(i.Content,{children:(0,o.jsx)(`pre`,{className:`text-xs bg-muted p-2 rounded-md mt-1`,children:JSON.stringify({type:`object`,properties:{query:{type:`string`}},required:[`query`]},null,2)})})]})},p={render:()=>(0,o.jsxs)(i.Root,{children:[(0,o.jsx)(i.Trigger,{icon:c,description:`Fetches current weather data for a given city using the OpenWeather API.`,children:`get_weather`}),(0,o.jsx)(i.Content,{children:(0,o.jsxs)(`div`,{className:`pl-[18px] space-y-2`,children:[(0,o.jsx)(`p`,{className:`text-sm text-muted-foreground`,children:`Fetches current weather data for a given city using the OpenWeather API.`}),(0,o.jsx)(`pre`,{className:`text-xs bg-muted p-2 rounded-md`,children:JSON.stringify({type:`object`,properties:{city:{type:`string`}},required:[`city`]},null,2)})]})})]})},m={render:()=>(0,o.jsxs)(i.Root,{children:[(0,o.jsx)(i.Trigger,{icon:c,badges:(0,o.jsx)(n,{variant:`success`,size:`sm`,children:`active`}),description:`Search documentation and return relevant snippets.`,children:`search_docs`}),(0,o.jsx)(i.Content,{children:(0,o.jsxs)(`div`,{className:`pl-[18px] space-y-2`,children:[(0,o.jsx)(`p`,{className:`text-sm`,children:`Search documentation and return relevant snippets.`}),(0,o.jsx)(`pre`,{className:`text-xs bg-muted p-2 rounded-md`,children:JSON.stringify({type:`object`,properties:{query:{type:`string`},limit:{type:`number`,default:5}}},null,2)})]})})]})},h={render:()=>(0,o.jsxs)(i.Root,{defaultOpen:!0,children:[(0,o.jsx)(i.Trigger,{icon:l,description:`This description is hidden when open.`,children:`Open by default`}),(0,o.jsx)(i.Content,{children:(0,o.jsx)(`p`,{className:`text-sm pl-[18px]`,children:`This section is open by default. The description should be hidden.`})})]})},g={render:()=>(0,o.jsxs)(i.Root,{bordered:!0,children:[(0,o.jsx)(i.Trigger,{icon:c,badges:(0,o.jsx)(n,{variant:`success`,size:`sm`,children:`active`}),description:`Search documentation and return relevant snippets.`,children:`search_docs`}),(0,o.jsx)(i.Content,{children:(0,o.jsx)(`pre`,{className:`text-xs bg-muted p-2 rounded-md`,children:JSON.stringify({type:`object`,properties:{query:{type:`string`},limit:{type:`number`}}},null,2)})})]})},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <CollapsibleSection.Root>
      <CollapsibleSection.Trigger>Input Schema</CollapsibleSection.Trigger>
      <CollapsibleSection.Content>
        <pre className="text-xs bg-muted p-2 rounded-md">
          {JSON.stringify({
          type: 'object',
          properties: {
            name: {
              type: 'string'
            }
          }
        }, null, 2)}
        </pre>
      </CollapsibleSection.Content>
    </CollapsibleSection.Root>
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <CollapsibleSection.Root>
      <CollapsibleSection.Trigger icon={WrenchIcon}>Tools (3)</CollapsibleSection.Trigger>
      <CollapsibleSection.Content>
        <div className="space-y-1 pl-[18px]">
          <div className="text-sm">get_weather</div>
          <div className="text-sm">search_docs</div>
          <div className="text-sm">run_query</div>
        </div>
      </CollapsibleSection.Content>
    </CollapsibleSection.Root>
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <CollapsibleSection.Root>
      <CollapsibleSection.Trigger icon={CodeIcon} badges={<>
            <Badge variant="secondary" size="sm">required</Badge>
            <Badge variant="outline" size="sm">v2</Badge>
          </>}>
        Input Schema
      </CollapsibleSection.Trigger>
      <CollapsibleSection.Content>
        <pre className="text-xs bg-muted p-2 rounded-md mt-1">
          {JSON.stringify({
          type: 'object',
          properties: {
            query: {
              type: 'string'
            }
          },
          required: ['query']
        }, null, 2)}
        </pre>
      </CollapsibleSection.Content>
    </CollapsibleSection.Root>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <CollapsibleSection.Root>
      <CollapsibleSection.Trigger icon={WrenchIcon} description="Fetches current weather data for a given city using the OpenWeather API.">
        get_weather
      </CollapsibleSection.Trigger>
      <CollapsibleSection.Content>
        <div className="pl-[18px] space-y-2">
          <p className="text-sm text-muted-foreground">Fetches current weather data for a given city using the OpenWeather API.</p>
          <pre className="text-xs bg-muted p-2 rounded-md">
            {JSON.stringify({
            type: 'object',
            properties: {
              city: {
                type: 'string'
              }
            },
            required: ['city']
          }, null, 2)}
          </pre>
        </div>
      </CollapsibleSection.Content>
    </CollapsibleSection.Root>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <CollapsibleSection.Root>
      <CollapsibleSection.Trigger icon={WrenchIcon} badges={<Badge variant="success" size="sm">active</Badge>} description="Search documentation and return relevant snippets.">
        search_docs
      </CollapsibleSection.Trigger>
      <CollapsibleSection.Content>
        <div className="pl-[18px] space-y-2">
          <p className="text-sm">Search documentation and return relevant snippets.</p>
          <pre className="text-xs bg-muted p-2 rounded-md">
            {JSON.stringify({
            type: 'object',
            properties: {
              query: {
                type: 'string'
              },
              limit: {
                type: 'number',
                default: 5
              }
            }
          }, null, 2)}
          </pre>
        </div>
      </CollapsibleSection.Content>
    </CollapsibleSection.Root>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <CollapsibleSection.Root defaultOpen>
      <CollapsibleSection.Trigger icon={CodeIcon} description="This description is hidden when open.">
        Open by default
      </CollapsibleSection.Trigger>
      <CollapsibleSection.Content>
        <p className="text-sm pl-[18px]">This section is open by default. The description should be hidden.</p>
      </CollapsibleSection.Content>
    </CollapsibleSection.Root>
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <CollapsibleSection.Root bordered>
      <CollapsibleSection.Trigger icon={WrenchIcon} badges={<Badge variant="success" size="sm">active</Badge>} description="Search documentation and return relevant snippets.">
        search_docs
      </CollapsibleSection.Trigger>
      <CollapsibleSection.Content>
        <pre className="text-xs bg-muted p-2 rounded-md">
          {JSON.stringify({
          type: 'object',
          properties: {
            query: {
              type: 'string'
            },
            limit: {
              type: 'number'
            }
          }
        }, null, 2)}
        </pre>
      </CollapsibleSection.Content>
    </CollapsibleSection.Root>
}`,...g.parameters?.docs?.source}}},_=[`Default`,`WithIcon`,`WithBadges`,`WithDescription`,`Full`,`DefaultOpen`,`Bordered`]}))();export{g as Bordered,u as Default,h as DefaultOpen,m as Full,f as WithBadges,p as WithDescription,d as WithIcon,_ as __namedExportsOrder,s as default};