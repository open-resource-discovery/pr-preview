import{i as e}from"./preload-helper-B46vD8Hp.js";import{a as t}from"./iframe-CbxfcL66.js";import{n,t as r}from"./badge-BHNpVxu3.js";import{n as i,t as a}from"./section-card-Cx4A4XbX.js";var o,s,c,l,u,d,f,p,m;e((()=>{a(),r(),o=t(),s={title:`Components/SectionCard`,component:i.Root,parameters:{layout:`centered`},tags:[`autodocs`],decorators:[e=>(0,o.jsx)(`div`,{style:{width:`100%`,maxWidth:400},children:(0,o.jsx)(e,{})})]},c=(0,o.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:(0,o.jsx)(`path`,{d:`M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z`})}),l=(0,o.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:(0,o.jsx)(`path`,{d:`M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z`})}),u={render:()=>(0,o.jsxs)(i.Root,{children:[(0,o.jsx)(i.Header,{title:`Tools (3)`}),(0,o.jsx)(i.Content,{children:(0,o.jsx)(`p`,{className:`text-sm text-muted-foreground`,children:`Content goes here.`})})]})},d={render:()=>(0,o.jsxs)(i.Root,{children:[(0,o.jsx)(i.Header,{icon:c,title:`Tools (3)`}),(0,o.jsx)(i.Content,{children:(0,o.jsxs)(`div`,{className:`space-y-2`,children:[(0,o.jsx)(`div`,{className:`text-sm p-2 rounded bg-muted`,children:`get_weather`}),(0,o.jsx)(`div`,{className:`text-sm p-2 rounded bg-muted`,children:`search_docs`}),(0,o.jsx)(`div`,{className:`text-sm p-2 rounded bg-muted`,children:`run_query`})]})})]})},f={render:()=>(0,o.jsxs)(i.Root,{children:[(0,o.jsx)(i.Header,{icon:l,title:`Authentication`,badges:(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n,{variant:`success`,size:`sm`,children:`Verified`}),(0,o.jsx)(n,{variant:`outline`,size:`sm`,children:`OAuth 2.0`})]})}),(0,o.jsx)(i.Content,{children:(0,o.jsx)(`p`,{className:`text-sm text-muted-foreground`,children:`This server uses OAuth 2.0 with PKCE for authentication.`})})]})},p={render:()=>(0,o.jsxs)(`div`,{className:`space-y-3`,children:[(0,o.jsxs)(i.Root,{children:[(0,o.jsx)(i.Header,{icon:c,title:`Tools (3)`}),(0,o.jsx)(i.Content,{children:(0,o.jsx)(`p`,{className:`text-sm text-muted-foreground`,children:`get_weather, search_docs, run_query`})})]}),(0,o.jsxs)(i.Root,{children:[(0,o.jsx)(i.Header,{icon:l,title:`Security`,badges:(0,o.jsx)(n,{variant:`success`,size:`sm`,children:`Enabled`})}),(0,o.jsx)(i.Content,{children:(0,o.jsx)(`p`,{className:`text-sm text-muted-foreground`,children:`TLS 1.3 with mutual authentication.`})})]})]})},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <SectionCard.Root>
      <SectionCard.Header title="Tools (3)" />
      <SectionCard.Content>
        <p className="text-sm text-muted-foreground">Content goes here.</p>
      </SectionCard.Content>
    </SectionCard.Root>
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <SectionCard.Root>
      <SectionCard.Header icon={WrenchIcon} title="Tools (3)" />
      <SectionCard.Content>
        <div className="space-y-2">
          <div className="text-sm p-2 rounded bg-muted">get_weather</div>
          <div className="text-sm p-2 rounded bg-muted">search_docs</div>
          <div className="text-sm p-2 rounded bg-muted">run_query</div>
        </div>
      </SectionCard.Content>
    </SectionCard.Root>
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <SectionCard.Root>
      <SectionCard.Header icon={ShieldIcon} title="Authentication" badges={<>
            <Badge variant="success" size="sm">Verified</Badge>
            <Badge variant="outline" size="sm">OAuth 2.0</Badge>
          </>} />
      <SectionCard.Content>
        <p className="text-sm text-muted-foreground">This server uses OAuth 2.0 with PKCE for authentication.</p>
      </SectionCard.Content>
    </SectionCard.Root>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-3">
      <SectionCard.Root>
        <SectionCard.Header icon={WrenchIcon} title="Tools (3)" />
        <SectionCard.Content>
          <p className="text-sm text-muted-foreground">get_weather, search_docs, run_query</p>
        </SectionCard.Content>
      </SectionCard.Root>
      <SectionCard.Root>
        <SectionCard.Header icon={ShieldIcon} title="Security" badges={<Badge variant="success" size="sm">Enabled</Badge>} />
        <SectionCard.Content>
          <p className="text-sm text-muted-foreground">TLS 1.3 with mutual authentication.</p>
        </SectionCard.Content>
      </SectionCard.Root>
    </div>
}`,...p.parameters?.docs?.source}}},m=[`Basic`,`WithIcon`,`WithBadges`,`Multiple`]}))();export{u as Basic,p as Multiple,f as WithBadges,d as WithIcon,m as __namedExportsOrder,s as default};