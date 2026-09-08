import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-BZJXY1be.js";import{a as n}from"./iframe-f7ZUfOUw.js";import{n as r,t as i}from"./cn-Dm4OyE3Q.js";import{n as a,t as o}from"./Badge-BijyrlwF.js";var s,c,l;function u(){return(u=e((()=>{s=t(),r(),c=n(),l=(0,s.forwardRef)(({role:e,timestamp:t,icon:n,onCopy:r,onRetry:a,status:o,className:s,children:l,...u},d)=>{let f=t==null?void 0:new Date(t).toLocaleTimeString([],{hour:`2-digit`,minute:`2-digit`}),p=e===`user`,m=r!=null||a!=null;return(0,c.jsx)(`div`,{ref:d,className:i(`group flex`,p?`justify-end`:`justify-start`,s),...u,children:(0,c.jsxs)(`div`,{className:i(`flex items-end gap-2`,p&&`flex-row-reverse`),children:[n&&(0,c.jsx)(`div`,{className:`shrink-0 w-6 h-6`,children:n}),(0,c.jsxs)(`div`,{className:`flex flex-col`,children:[(0,c.jsxs)(`div`,{className:i(`flex items-end gap-1`,p&&`flex-row-reverse`),children:[(0,c.jsxs)(`div`,{className:i(`max-w-[85%] rounded-2xl px-4 py-2 text-sm`,p?`rounded-br-sm bg-primary text-primary-foreground`:`rounded-bl-sm bg-muted text-foreground`),children:[o&&(0,c.jsx)(`div`,{className:`flex items-center gap-1.5 mb-2`,children:o}),l]}),m&&(0,c.jsxs)(`div`,{className:`flex flex-col gap-0.5 opacity-0 group-hover:opacity-100 transition-opacity`,children:[r&&(0,c.jsx)(`button`,{type:`button`,onClick:r,className:`h-6 w-6 inline-flex items-center justify-center rounded-md text-muted-foreground hover:text-foreground hover:bg-accent transition-colors`,"aria-label":`Copy`,children:(0,c.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:`14`,height:`14`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,c.jsx)(`rect`,{width:`14`,height:`14`,x:`8`,y:`8`,rx:`2`,ry:`2`}),(0,c.jsx)(`path`,{d:`M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2`})]})}),a&&(0,c.jsx)(`button`,{type:`button`,onClick:a,className:`h-6 w-6 inline-flex items-center justify-center rounded-md text-muted-foreground hover:text-foreground hover:bg-accent transition-colors`,"aria-label":`Retry`,children:(0,c.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:`14`,height:`14`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,c.jsx)(`path`,{d:`M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8`}),(0,c.jsx)(`path`,{d:`M21 3v5h-5`}),(0,c.jsx)(`path`,{d:`M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16`}),(0,c.jsx)(`path`,{d:`M3 21v-5h5`})]})})]})]}),f&&(0,c.jsx)(`span`,{className:i(`text-[10px] text-muted-foreground mt-1`,p?`text-right`:`text-left`),children:f})]})]})})}),l.displayName=`ChatMessage`,l.__docgenInfo={description:``,methods:[],displayName:`ChatMessage`,props:{role:{required:!0,tsType:{name:`union`,raw:`"user" | "agent"`,elements:[{name:`literal`,value:`"user"`},{name:`literal`,value:`"agent"`}]},description:``},timestamp:{required:!1,tsType:{name:`union`,raw:`Date | string`,elements:[{name:`Date`},{name:`string`}]},description:``},icon:{required:!1,tsType:{name:`ReactNode`},description:``},onCopy:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},onRetry:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},status:{required:!1,tsType:{name:`ReactNode`},description:``}}}})))()}var d,f,p,m,h,g,_,v,y,b,x;function S(){return(S=e((()=>{u(),a(),d=n(),f={title:`Components/ChatMessage`,component:l,parameters:{layout:`centered`},tags:[`autodocs`],decorators:[e=>(0,d.jsx)(`div`,{style:{width:`100%`,maxWidth:400},children:(0,d.jsx)(e,{})})]},p=(0,d.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:`24`,height:`24`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,className:`text-muted-foreground`,children:[(0,d.jsx)(`path`,{d:`M12 8V4H8`}),(0,d.jsx)(`rect`,{width:`16`,height:`12`,x:`4`,y:`8`,rx:`2`}),(0,d.jsx)(`path`,{d:`M2 14h2`}),(0,d.jsx)(`path`,{d:`M20 14h2`}),(0,d.jsx)(`path`,{d:`M15 13v2`}),(0,d.jsx)(`path`,{d:`M9 13v2`})]}),m=(0,d.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:`24`,height:`24`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,className:`text-muted-foreground`,children:[(0,d.jsx)(`circle`,{cx:`12`,cy:`8`,r:`5`}),(0,d.jsx)(`path`,{d:`M20 21a8 8 0 0 0-16 0`})]}),h={args:{role:`user`,timestamp:new Date,children:(0,d.jsx)(`p`,{children:`Hello! Can you help me with my project?`})}},g={args:{role:`agent`,timestamp:new Date,children:(0,d.jsx)(`p`,{children:`Of course! I'd be happy to help. What are you working on?`})}},_={render:()=>(0,d.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,d.jsx)(l,{role:`user`,icon:m,timestamp:new Date(Date.now()-6e4),children:(0,d.jsx)(`p`,{children:`What's the weather like today?`})}),(0,d.jsx)(l,{role:`agent`,icon:p,timestamp:new Date,children:(0,d.jsx)(`p`,{children:`It's 22°C and sunny with light winds from the west.`})})]})},v={render:()=>(0,d.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,d.jsx)(l,{role:`user`,icon:m,timestamp:new Date(Date.now()-6e4),onCopy:()=>console.log(`Copy user message`),onRetry:()=>console.log(`Retry message`),children:(0,d.jsx)(`p`,{children:`What's the weather like today?`})}),(0,d.jsx)(l,{role:`agent`,icon:p,timestamp:new Date,onCopy:()=>console.log(`Copy agent message`),children:(0,d.jsx)(`p`,{children:`It's 22°C and sunny with light winds from the west. No umbrella needed!`})})]})},y={render:()=>(0,d.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,d.jsx)(l,{role:`user`,timestamp:new Date(Date.now()-12e4),onCopy:()=>{},onRetry:()=>{},children:(0,d.jsx)(`p`,{children:`What's the weather like today?`})}),(0,d.jsx)(l,{role:`agent`,timestamp:new Date(Date.now()-6e4),onCopy:()=>{},children:(0,d.jsx)(`p`,{children:`Based on the current data, it's 22°C and sunny with light winds from the west.`})}),(0,d.jsx)(l,{role:`user`,timestamp:new Date(Date.now()-3e4),onCopy:()=>{},onRetry:()=>{},children:(0,d.jsx)(`p`,{children:`Thanks! Should I bring an umbrella?`})}),(0,d.jsx)(l,{role:`agent`,timestamp:new Date,onCopy:()=>{},children:(0,d.jsx)(`p`,{children:`No umbrella needed today! The forecast shows clear skies through the evening.`})})]})},b={render:()=>(0,d.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,d.jsx)(l,{role:`agent`,icon:p,timestamp:new Date,onCopy:()=>{},status:(0,d.jsx)(o,{variant:`success`,size:`sm`,children:`Compliant`}),children:(0,d.jsx)(`p`,{children:`The response has been validated against the A2A protocol specification.`})}),(0,d.jsx)(l,{role:`agent`,icon:p,timestamp:new Date,onCopy:()=>{},status:(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(o,{variant:`warning`,size:`sm`,children:`Non-compliant`}),(0,d.jsx)(o,{variant:`outline`,size:`sm`,children:`2 issues`})]}),children:(0,d.jsx)(`p`,{children:`The response had some protocol validation issues.`})})]})},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    role: 'user',
    timestamp: new Date(),
    children: <p>Hello! Can you help me with my project?</p>
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    role: 'agent',
    timestamp: new Date(),
    children: <p>Of course! I'd be happy to help. What are you working on?</p>
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-3">
      <ChatMessage role="user" icon={UserIcon} timestamp={new Date(Date.now() - 60000)}>
        <p>What's the weather like today?</p>
      </ChatMessage>
      <ChatMessage role="agent" icon={BotIcon} timestamp={new Date()}>
        <p>It's 22°C and sunny with light winds from the west.</p>
      </ChatMessage>
    </div>
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-3">
      <ChatMessage role="user" icon={UserIcon} timestamp={new Date(Date.now() - 60000)} onCopy={() => console.log('Copy user message')} onRetry={() => console.log('Retry message')}>
        <p>What's the weather like today?</p>
      </ChatMessage>
      <ChatMessage role="agent" icon={BotIcon} timestamp={new Date()} onCopy={() => console.log('Copy agent message')}>
        <p>It's 22°C and sunny with light winds from the west. No umbrella needed!</p>
      </ChatMessage>
    </div>
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-3">
      <ChatMessage role="user" timestamp={new Date(Date.now() - 120000)} onCopy={() => {}} onRetry={() => {}}>
        <p>What's the weather like today?</p>
      </ChatMessage>
      <ChatMessage role="agent" timestamp={new Date(Date.now() - 60000)} onCopy={() => {}}>
        <p>Based on the current data, it's 22°C and sunny with light winds from the west.</p>
      </ChatMessage>
      <ChatMessage role="user" timestamp={new Date(Date.now() - 30000)} onCopy={() => {}} onRetry={() => {}}>
        <p>Thanks! Should I bring an umbrella?</p>
      </ChatMessage>
      <ChatMessage role="agent" timestamp={new Date()} onCopy={() => {}}>
        <p>No umbrella needed today! The forecast shows clear skies through the evening.</p>
      </ChatMessage>
    </div>
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-3">
      <ChatMessage role="agent" icon={BotIcon} timestamp={new Date()} onCopy={() => {}} status={<Badge variant="success" size="sm">Compliant</Badge>}>
        <p>The response has been validated against the A2A protocol specification.</p>
      </ChatMessage>
      <ChatMessage role="agent" icon={BotIcon} timestamp={new Date()} onCopy={() => {}} status={<>
            <Badge variant="warning" size="sm">Non-compliant</Badge>
            <Badge variant="outline" size="sm">2 issues</Badge>
          </>}>
        <p>The response had some protocol validation issues.</p>
      </ChatMessage>
    </div>
}`,...b.parameters?.docs?.source}}},x=[`UserMessage`,`AgentMessage`,`WithIcons`,`WithActions`,`Conversation`,`WithStatus`]})))()}S();export{g as AgentMessage,y as Conversation,h as UserMessage,v as WithActions,_ as WithIcons,b as WithStatus,x as __namedExportsOrder,f as default};