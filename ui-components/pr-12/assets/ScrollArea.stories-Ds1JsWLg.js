import{i as e,s as t}from"./preload-helper-B46vD8Hp.js";import{O as n,a as r}from"./iframe-CbxfcL66.js";import{n as i,t as a}from"./scroll-area-2rxgCSGr.js";function o(){let[e,t]=(0,s.useState)([`Item 1`,`Item 2`,`Item 3`]),n=(0,s.useCallback)(()=>{t(e=>[...e,`Item ${e.length+1}`])},[]);return(0,c.jsxs)(`div`,{className:`flex flex-col h-full`,children:[(0,c.jsx)(i,{className:`flex-1 border border-border rounded-md p-3`,autoScroll:!0,children:(0,c.jsx)(`div`,{className:`flex flex-col gap-2`,children:e.map((e,t)=>(0,c.jsx)(`p`,{className:`text-sm`,children:e},t))})}),(0,c.jsx)(`button`,{onClick:n,className:`mt-2 px-3 py-1 text-xs bg-primary text-primary-foreground rounded-md`,children:`Add Item (auto-scrolls)`})]})}var s,c,l,u,d,f;e((()=>{s=t(n(),1),a(),c=r(),l={title:`Components/ScrollArea`,component:i,parameters:{layout:`centered`},tags:[`autodocs`],decorators:[e=>(0,c.jsx)(`div`,{style:{width:`100%`,maxWidth:300,height:200},children:(0,c.jsx)(e,{})})]},u={render:()=>(0,c.jsx)(i,{className:`h-full border border-border rounded-md p-3`,children:(0,c.jsx)(`div`,{className:`flex flex-col gap-2`,children:Array.from({length:20},(e,t)=>(0,c.jsxs)(`p`,{className:`text-sm`,children:[`Message `,t+1,`: This is a scrollable item.`]},t))})})},d={render:()=>(0,c.jsx)(o,{})},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <ScrollArea className="h-full border border-border rounded-md p-3">
      <div className="flex flex-col gap-2">
        {Array.from({
        length: 20
      }, (_, i) => <p key={i} className="text-sm">
            Message {i + 1}: This is a scrollable item.
          </p>)}
      </div>
    </ScrollArea>
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <AutoScrollDemo />
}`,...d.parameters?.docs?.source}}},f=[`Default`,`AutoScroll`]}))();export{d as AutoScroll,u as Default,f as __namedExportsOrder,l as default};