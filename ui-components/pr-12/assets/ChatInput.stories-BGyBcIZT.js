import{i as e}from"./preload-helper-B46vD8Hp.js";import{a as t}from"./iframe-DA_HM6Nx.js";import{n,t as r}from"./chat-input-DLNKqefr.js";var i,a,o,s,c,l;e((()=>{r(),i=t(),a={title:`Components/ChatInput`,component:n,parameters:{layout:`centered`},tags:[`autodocs`],decorators:[e=>(0,i.jsx)(`div`,{style:{width:`100%`,maxWidth:400},children:(0,i.jsx)(e,{})})]},o={args:{placeholder:`Type a message...`,onSubmit:e=>console.log(`Submitted:`,e)}},s={args:{placeholder:`Connect to start chatting...`,disabled:!0}},c={args:{loading:!0,onCancel:()=>console.log(`Cancelled`)}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Type a message...',
    onSubmit: value => console.log('Submitted:', value)
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Connect to start chatting...',
    disabled: true
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    loading: true,
    onCancel: () => console.log('Cancelled')
  }
}`,...c.parameters?.docs?.source}}},l=[`Default`,`Disabled`,`Loading`]}))();export{o as Default,s as Disabled,c as Loading,l as __namedExportsOrder,a as default};