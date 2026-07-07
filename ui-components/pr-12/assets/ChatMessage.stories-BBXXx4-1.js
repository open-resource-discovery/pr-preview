import{i as e}from"./preload-helper-B46vD8Hp.js";import{a as t}from"./iframe-CbxfcL66.js";import{n,t as r}from"./badge-BHNpVxu3.js";import{n as i,t as a}from"./chat-message-yUDV8Eq3.js";var o,s,c,l,u,d,f,p,m,h,g;e((()=>{a(),r(),o=t(),s={title:`Components/ChatMessage`,component:i,parameters:{layout:`centered`},tags:[`autodocs`],decorators:[e=>(0,o.jsx)(`div`,{style:{width:`100%`,maxWidth:400},children:(0,o.jsx)(e,{})})]},c=(0,o.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:`24`,height:`24`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,className:`text-muted-foreground`,children:[(0,o.jsx)(`path`,{d:`M12 8V4H8`}),(0,o.jsx)(`rect`,{width:`16`,height:`12`,x:`4`,y:`8`,rx:`2`}),(0,o.jsx)(`path`,{d:`M2 14h2`}),(0,o.jsx)(`path`,{d:`M20 14h2`}),(0,o.jsx)(`path`,{d:`M15 13v2`}),(0,o.jsx)(`path`,{d:`M9 13v2`})]}),l=(0,o.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:`24`,height:`24`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,className:`text-muted-foreground`,children:[(0,o.jsx)(`circle`,{cx:`12`,cy:`8`,r:`5`}),(0,o.jsx)(`path`,{d:`M20 21a8 8 0 0 0-16 0`})]}),u={args:{role:`user`,timestamp:new Date,children:(0,o.jsx)(`p`,{children:`Hello! Can you help me with my project?`})}},d={args:{role:`agent`,timestamp:new Date,children:(0,o.jsx)(`p`,{children:`Of course! I'd be happy to help. What are you working on?`})}},f={render:()=>(0,o.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,o.jsx)(i,{role:`user`,icon:l,timestamp:new Date(Date.now()-6e4),children:(0,o.jsx)(`p`,{children:`What's the weather like today?`})}),(0,o.jsx)(i,{role:`agent`,icon:c,timestamp:new Date,children:(0,o.jsx)(`p`,{children:`It's 22°C and sunny with light winds from the west.`})})]})},p={render:()=>(0,o.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,o.jsx)(i,{role:`user`,icon:l,timestamp:new Date(Date.now()-6e4),onCopy:()=>console.log(`Copy user message`),onRetry:()=>console.log(`Retry message`),children:(0,o.jsx)(`p`,{children:`What's the weather like today?`})}),(0,o.jsx)(i,{role:`agent`,icon:c,timestamp:new Date,onCopy:()=>console.log(`Copy agent message`),children:(0,o.jsx)(`p`,{children:`It's 22°C and sunny with light winds from the west. No umbrella needed!`})})]})},m={render:()=>(0,o.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,o.jsx)(i,{role:`user`,timestamp:new Date(Date.now()-12e4),onCopy:()=>{},onRetry:()=>{},children:(0,o.jsx)(`p`,{children:`What's the weather like today?`})}),(0,o.jsx)(i,{role:`agent`,timestamp:new Date(Date.now()-6e4),onCopy:()=>{},children:(0,o.jsx)(`p`,{children:`Based on the current data, it's 22°C and sunny with light winds from the west.`})}),(0,o.jsx)(i,{role:`user`,timestamp:new Date(Date.now()-3e4),onCopy:()=>{},onRetry:()=>{},children:(0,o.jsx)(`p`,{children:`Thanks! Should I bring an umbrella?`})}),(0,o.jsx)(i,{role:`agent`,timestamp:new Date,onCopy:()=>{},children:(0,o.jsx)(`p`,{children:`No umbrella needed today! The forecast shows clear skies through the evening.`})})]})},h={render:()=>(0,o.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,o.jsx)(i,{role:`agent`,icon:c,timestamp:new Date,onCopy:()=>{},status:(0,o.jsx)(n,{variant:`success`,size:`sm`,children:`Compliant`}),children:(0,o.jsx)(`p`,{children:`The response has been validated against the A2A protocol specification.`})}),(0,o.jsx)(i,{role:`agent`,icon:c,timestamp:new Date,onCopy:()=>{},status:(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n,{variant:`warning`,size:`sm`,children:`Non-compliant`}),(0,o.jsx)(n,{variant:`outline`,size:`sm`,children:`2 issues`})]}),children:(0,o.jsx)(`p`,{children:`The response had some protocol validation issues.`})})]})},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    role: 'user',
    timestamp: new Date(),
    children: <p>Hello! Can you help me with my project?</p>
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    role: 'agent',
    timestamp: new Date(),
    children: <p>Of course! I'd be happy to help. What are you working on?</p>
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-3">
      <ChatMessage role="user" icon={UserIcon} timestamp={new Date(Date.now() - 60000)}>
        <p>What's the weather like today?</p>
      </ChatMessage>
      <ChatMessage role="agent" icon={BotIcon} timestamp={new Date()}>
        <p>It's 22°C and sunny with light winds from the west.</p>
      </ChatMessage>
    </div>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-3">
      <ChatMessage role="user" icon={UserIcon} timestamp={new Date(Date.now() - 60000)} onCopy={() => console.log('Copy user message')} onRetry={() => console.log('Retry message')}>
        <p>What's the weather like today?</p>
      </ChatMessage>
      <ChatMessage role="agent" icon={BotIcon} timestamp={new Date()} onCopy={() => console.log('Copy agent message')}>
        <p>It's 22°C and sunny with light winds from the west. No umbrella needed!</p>
      </ChatMessage>
    </div>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g=[`UserMessage`,`AgentMessage`,`WithIcons`,`WithActions`,`Conversation`,`WithStatus`]}))();export{d as AgentMessage,m as Conversation,u as UserMessage,p as WithActions,f as WithIcons,h as WithStatus,g as __namedExportsOrder,s as default};