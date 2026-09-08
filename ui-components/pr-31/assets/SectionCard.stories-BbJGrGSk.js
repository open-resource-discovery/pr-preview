import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-BZJXY1be.js";import{a as n}from"./iframe-f7ZUfOUw.js";import{n as r,t as i}from"./cn-Dm4OyE3Q.js";import{n as a,t as o}from"./Badge-BijyrlwF.js";var s,c,l,u,d,f;function p(){return(p=e((()=>{s=t(),r(),c=n(),l=(0,s.forwardRef)(({className:e,children:t,...n},r)=>(0,c.jsx)(`div`,{ref:r,className:i(`rounded-lg border border-card-border bg-card-bg overflow-hidden`,e),...n,children:t})),l.displayName=`SectionCard.Root`,u=(0,s.forwardRef)(({icon:e,title:t,badges:n,className:r,...a},o)=>(0,c.jsxs)(`div`,{ref:o,className:i(`flex flex-wrap items-center gap-2 px-4 py-3`,r),...a,children:[e&&(0,c.jsx)(`span`,{className:`shrink-0 h-4 w-4 [&>svg]:h-full [&>svg]:w-full`,children:e}),(0,c.jsx)(`span`,{className:`text-sm font-medium flex-1 truncate`,children:t}),n&&(0,c.jsx)(`div`,{className:`flex items-center gap-1.5`,children:n})]})),u.displayName=`SectionCard.Header`,d=(0,s.forwardRef)(({className:e,children:t,...n},r)=>(0,c.jsx)(`div`,{ref:r,className:i(`px-4 pb-4 pt-0`,e),...n,children:t})),d.displayName=`SectionCard.Content`,f=Object.assign(l,{Root:l,Header:u,Content:d}),l.__docgenInfo={description:``,methods:[],displayName:`SectionCard.Root`,props:{children:{required:!0,tsType:{name:`ReactNode`},description:``}}}})))()}var m,h,g,_,v,y,b,x,S;function C(){return(C=e((()=>{p(),a(),m=n(),h={title:`Components/SectionCard`,component:f.Root,parameters:{layout:`centered`},tags:[`autodocs`],decorators:[e=>(0,m.jsx)(`div`,{style:{width:`100%`,maxWidth:400},children:(0,m.jsx)(e,{})})]},g=(0,m.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:(0,m.jsx)(`path`,{d:`M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z`})}),_=(0,m.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:(0,m.jsx)(`path`,{d:`M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z`})}),v={render:()=>(0,m.jsxs)(f.Root,{children:[(0,m.jsx)(f.Header,{title:`Tools (3)`}),(0,m.jsx)(f.Content,{children:(0,m.jsx)(`p`,{className:`text-sm text-muted-foreground`,children:`Content goes here.`})})]})},y={render:()=>(0,m.jsxs)(f.Root,{children:[(0,m.jsx)(f.Header,{icon:g,title:`Tools (3)`}),(0,m.jsx)(f.Content,{children:(0,m.jsxs)(`div`,{className:`space-y-2`,children:[(0,m.jsx)(`div`,{className:`text-sm p-2 rounded bg-muted`,children:`get_weather`}),(0,m.jsx)(`div`,{className:`text-sm p-2 rounded bg-muted`,children:`search_docs`}),(0,m.jsx)(`div`,{className:`text-sm p-2 rounded bg-muted`,children:`run_query`})]})})]})},b={render:()=>(0,m.jsxs)(f.Root,{children:[(0,m.jsx)(f.Header,{icon:_,title:`Authentication`,badges:(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(o,{variant:`success`,size:`sm`,children:`Verified`}),(0,m.jsx)(o,{variant:`outline`,size:`sm`,children:`OAuth 2.0`})]})}),(0,m.jsx)(f.Content,{children:(0,m.jsx)(`p`,{className:`text-sm text-muted-foreground`,children:`This server uses OAuth 2.0 with PKCE for authentication.`})})]})},x={render:()=>(0,m.jsxs)(`div`,{className:`space-y-3`,children:[(0,m.jsxs)(f.Root,{children:[(0,m.jsx)(f.Header,{icon:g,title:`Tools (3)`}),(0,m.jsx)(f.Content,{children:(0,m.jsx)(`p`,{className:`text-sm text-muted-foreground`,children:`get_weather, search_docs, run_query`})})]}),(0,m.jsxs)(f.Root,{children:[(0,m.jsx)(f.Header,{icon:_,title:`Security`,badges:(0,m.jsx)(o,{variant:`success`,size:`sm`,children:`Enabled`})}),(0,m.jsx)(f.Content,{children:(0,m.jsx)(`p`,{className:`text-sm text-muted-foreground`,children:`TLS 1.3 with mutual authentication.`})})]})]})},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <SectionCard.Root>
      <SectionCard.Header title="Tools (3)" />
      <SectionCard.Content>
        <p className="text-sm text-muted-foreground">Content goes here.</p>
      </SectionCard.Content>
    </SectionCard.Root>
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <SectionCard.Root>
      <SectionCard.Header icon={ShieldIcon} title="Authentication" badges={<>
            <Badge variant="success" size="sm">Verified</Badge>
            <Badge variant="outline" size="sm">OAuth 2.0</Badge>
          </>} />
      <SectionCard.Content>
        <p className="text-sm text-muted-foreground">This server uses OAuth 2.0 with PKCE for authentication.</p>
      </SectionCard.Content>
    </SectionCard.Root>
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},S=[`Basic`,`WithIcon`,`WithBadges`,`Multiple`]})))()}C();export{v as Basic,x as Multiple,b as WithBadges,y as WithIcon,S as __namedExportsOrder,h as default};