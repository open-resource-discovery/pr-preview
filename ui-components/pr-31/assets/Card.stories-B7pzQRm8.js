import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-BZJXY1be.js";import{a as r}from"./iframe-f7ZUfOUw.js";import{n as i,t as a}from"./cn-Dm4OyE3Q.js";import{n as o,t as s}from"./Button-C5VG62LS.js";import{n as c,t as l}from"./Card-nevhpQ0a.js";var u,d,f;function p(){return(p=t((()=>{u=e(n(),1),c(),i(),d=r(),f=(0,u.forwardRef)(({title:e,description:t,content:n,buttons:r,className:i,...o},s)=>(0,d.jsxs)(l,{ref:s,className:a(i),...o,children:[(e||t)&&(0,d.jsxs)(l.Header,{children:[e&&(0,d.jsx)(l.Title,{children:e}),t&&(0,d.jsx)(l.Description,{children:t})]}),n&&(0,d.jsx)(l.Content,{children:n}),r&&(0,d.jsx)(l.Footer,{children:r})]})),f.displayName=`SimpleCard`,f.__docgenInfo={description:``,methods:[],displayName:`SimpleCard`,props:{title:{required:!1,tsType:{name:`ReactNode`},description:``},description:{required:!1,tsType:{name:`ReactNode`},description:``},content:{required:!1,tsType:{name:`ReactNode`},description:``},buttons:{required:!1,tsType:{name:`ReactNode`},description:``}},composes:[`Omit`]}})))()}var m,h,g,_,v,y;function b(){return(b=t((()=>{c(),p(),o(),m=r(),h={title:`Components/Card`,component:l,parameters:{layout:`centered`},tags:[`autodocs`]},g={render:()=>(0,m.jsxs)(l,{style:{width:`100%`,maxWidth:350},children:[(0,m.jsxs)(l.Header,{children:[(0,m.jsx)(l.Title,{children:`Card Title`}),(0,m.jsx)(l.Description,{children:`Card description goes here.`})]}),(0,m.jsx)(l.Content,{children:(0,m.jsx)(`p`,{children:`Card content goes here. This is where the main body of the card would be displayed.`})}),(0,m.jsxs)(l.Footer,{className:`gap-2`,children:[(0,m.jsx)(s,{variant:`outline`,children:`Cancel`}),(0,m.jsx)(s,{children:`Submit`})]})]})},_={render:()=>(0,m.jsx)(f,{style:{width:`100%`,maxWidth:350},title:`Notifications`,description:`You have 3 unread messages.`,content:(0,m.jsx)(`p`,{className:`text-sm text-muted-foreground`,children:`Check your inbox for the latest updates.`}),buttons:(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(s,{variant:`outline`,size:`sm`,children:`Dismiss`}),(0,m.jsx)(s,{size:`sm`,children:`View All`})]})})},v={render:()=>(0,m.jsx)(f,{style:{width:`100%`,maxWidth:350},title:`Simple Title Only`})},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <SimpleCard style={{
    width: "100%",
    maxWidth: 350
  }} title="Notifications" description="You have 3 unread messages." content={<p className="text-sm text-muted-foreground">Check your inbox for the latest updates.</p>} buttons={<>
          <Button variant="outline" size="sm">Dismiss</Button>
          <Button size="sm">View All</Button>
        </>} />
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <SimpleCard style={{
    width: "100%",
    maxWidth: 350
  }} title="Simple Title Only" />
}`,...v.parameters?.docs?.source}}},y=[`Default`,`Simple`,`MinimalSimpleCard`]})))()}b();export{g as Default,v as MinimalSimpleCard,_ as Simple,y as __namedExportsOrder,h as default};