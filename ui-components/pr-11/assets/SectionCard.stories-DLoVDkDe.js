import{i as e,s as t}from"./preload-helper-CxMj7VeQ.js";import{D as n,i as r}from"./iframe-DDLzXLyK.js";import{n as i,t as a}from"./cn-BMoLQ__i.js";import{n as o,t as s}from"./badge-BQKOqZ-z.js";var c,l,u,d,f,p,m=e((()=>{c=t(n(),1),i(),l=r(),u=(0,c.forwardRef)(({className:e,children:t,...n},r)=>(0,l.jsx)(`div`,{ref:r,className:a(`rounded-lg border border-card-border bg-card-bg overflow-hidden`,e),...n,children:t})),u.displayName=`SectionCard.Root`,d=(0,c.forwardRef)(({icon:e,title:t,badges:n,className:r,...i},o)=>(0,l.jsxs)(`div`,{ref:o,className:a(`flex flex-wrap items-center gap-2 px-4 py-3`,r),...i,children:[e&&(0,l.jsx)(`span`,{className:`shrink-0 h-4 w-4 [&>svg]:h-full [&>svg]:w-full`,children:e}),(0,l.jsx)(`span`,{className:`text-sm font-medium flex-1 truncate`,children:t}),n&&(0,l.jsx)(`div`,{className:`flex items-center gap-1.5`,children:n})]})),d.displayName=`SectionCard.Header`,f=(0,c.forwardRef)(({className:e,children:t,...n},r)=>(0,l.jsx)(`div`,{ref:r,className:a(`px-4 pb-4 pt-0`,e),...n,children:t})),f.displayName=`SectionCard.Content`,p=Object.assign(u,{Root:u,Header:d,Content:f}),u.__docgenInfo={description:``,methods:[],displayName:`SectionCard.Root`,props:{children:{required:!0,tsType:{name:`ReactNode`},description:``}}}})),h=e((()=>{m()})),g,_,v,y,b,x,S,C,w;e((()=>{h(),s(),g=r(),_={title:`Components/SectionCard`,component:p.Root,parameters:{layout:`centered`},tags:[`autodocs`],decorators:[e=>(0,g.jsx)(`div`,{style:{width:`100%`,maxWidth:400},children:(0,g.jsx)(e,{})})]},v=(0,g.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:(0,g.jsx)(`path`,{d:`M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z`})}),y=(0,g.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:(0,g.jsx)(`path`,{d:`M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z`})}),b={render:()=>(0,g.jsxs)(p.Root,{children:[(0,g.jsx)(p.Header,{title:`Tools (3)`}),(0,g.jsx)(p.Content,{children:(0,g.jsx)(`p`,{className:`text-sm text-muted-foreground`,children:`Content goes here.`})})]})},x={render:()=>(0,g.jsxs)(p.Root,{children:[(0,g.jsx)(p.Header,{icon:v,title:`Tools (3)`}),(0,g.jsx)(p.Content,{children:(0,g.jsxs)(`div`,{className:`space-y-2`,children:[(0,g.jsx)(`div`,{className:`text-sm p-2 rounded bg-muted`,children:`get_weather`}),(0,g.jsx)(`div`,{className:`text-sm p-2 rounded bg-muted`,children:`search_docs`}),(0,g.jsx)(`div`,{className:`text-sm p-2 rounded bg-muted`,children:`run_query`})]})})]})},S={render:()=>(0,g.jsxs)(p.Root,{children:[(0,g.jsx)(p.Header,{icon:y,title:`Authentication`,badges:(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(o,{variant:`success`,size:`sm`,children:`Verified`}),(0,g.jsx)(o,{variant:`outline`,size:`sm`,children:`OAuth 2.0`})]})}),(0,g.jsx)(p.Content,{children:(0,g.jsx)(`p`,{className:`text-sm text-muted-foreground`,children:`This server uses OAuth 2.0 with PKCE for authentication.`})})]})},C={render:()=>(0,g.jsxs)(`div`,{className:`space-y-3`,children:[(0,g.jsxs)(p.Root,{children:[(0,g.jsx)(p.Header,{icon:v,title:`Tools (3)`}),(0,g.jsx)(p.Content,{children:(0,g.jsx)(`p`,{className:`text-sm text-muted-foreground`,children:`get_weather, search_docs, run_query`})})]}),(0,g.jsxs)(p.Root,{children:[(0,g.jsx)(p.Header,{icon:y,title:`Security`,badges:(0,g.jsx)(o,{variant:`success`,size:`sm`,children:`Enabled`})}),(0,g.jsx)(p.Content,{children:(0,g.jsx)(`p`,{className:`text-sm text-muted-foreground`,children:`TLS 1.3 with mutual authentication.`})})]})]})},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <SectionCard.Root>
      <SectionCard.Header title="Tools (3)" />
      <SectionCard.Content>
        <p className="text-sm text-muted-foreground">Content goes here.</p>
      </SectionCard.Content>
    </SectionCard.Root>
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <SectionCard.Root>
      <SectionCard.Header icon={ShieldIcon} title="Authentication" badges={<>
            <Badge variant="success" size="sm">Verified</Badge>
            <Badge variant="outline" size="sm">OAuth 2.0</Badge>
          </>} />
      <SectionCard.Content>
        <p className="text-sm text-muted-foreground">This server uses OAuth 2.0 with PKCE for authentication.</p>
      </SectionCard.Content>
    </SectionCard.Root>
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}},w=[`Basic`,`WithIcon`,`WithBadges`,`Multiple`]}))();export{b as Basic,C as Multiple,S as WithBadges,x as WithIcon,w as __namedExportsOrder,_ as default};