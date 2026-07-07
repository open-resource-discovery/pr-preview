import{i as e}from"./preload-helper-DsZH5ZyP.js";import{i as t}from"./iframe-9TL6zHda.js";import{n,t as r}from"./button-BzzGJOdx.js";import{i,n as a,t as o}from"./card-C48rwtYe.js";var s,c,l,u,d,f;e((()=>{o(),r(),s=t(),c={title:`Components/Card`,component:i,parameters:{layout:`centered`},tags:[`autodocs`]},l={render:()=>(0,s.jsxs)(i,{style:{width:`100%`,maxWidth:350},children:[(0,s.jsxs)(i.Header,{children:[(0,s.jsx)(i.Title,{children:`Card Title`}),(0,s.jsx)(i.Description,{children:`Card description goes here.`})]}),(0,s.jsx)(i.Content,{children:(0,s.jsx)(`p`,{children:`Card content goes here. This is where the main body of the card would be displayed.`})}),(0,s.jsxs)(i.Footer,{className:`gap-2`,children:[(0,s.jsx)(n,{variant:`outline`,children:`Cancel`}),(0,s.jsx)(n,{children:`Submit`})]})]})},u={render:()=>(0,s.jsx)(a,{style:{width:`100%`,maxWidth:350},title:`Notifications`,description:`You have 3 unread messages.`,content:(0,s.jsx)(`p`,{className:`text-sm text-muted-foreground`,children:`Check your inbox for the latest updates.`}),buttons:(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n,{variant:`outline`,size:`sm`,children:`Dismiss`}),(0,s.jsx)(n,{size:`sm`,children:`View All`})]})})},d={render:()=>(0,s.jsx)(a,{style:{width:`100%`,maxWidth:350},title:`Simple Title Only`})},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <Card style={{
    width: "100%",
    maxWidth: 350
  }}>
      <Card.Header>
        <Card.Title>Card Title</Card.Title>
        <Card.Description>Card description goes here.</Card.Description>
      </Card.Header>
      <Card.Content>
        <p>Card content goes here. This is where the main body of the card would be displayed.</p>
      </Card.Content>
      <Card.Footer className="gap-2">
        <Button variant="outline">Cancel</Button>
        <Button>Submit</Button>
      </Card.Footer>
    </Card>
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <SimpleCard style={{
    width: "100%",
    maxWidth: 350
  }} title="Notifications" description="You have 3 unread messages." content={<p className="text-sm text-muted-foreground">Check your inbox for the latest updates.</p>} buttons={<>
          <Button variant="outline" size="sm">Dismiss</Button>
          <Button size="sm">View All</Button>
        </>} />
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <SimpleCard style={{
    width: "100%",
    maxWidth: 350
  }} title="Simple Title Only" />
}`,...d.parameters?.docs?.source}}},f=[`Default`,`Simple`,`MinimalSimpleCard`]}))();export{l as Default,d as MinimalSimpleCard,u as Simple,f as __namedExportsOrder,c as default};