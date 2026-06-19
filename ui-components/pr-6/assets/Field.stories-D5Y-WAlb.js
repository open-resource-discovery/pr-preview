import{i as e}from"./preload-helper-DIF550On.js";import{i as t}from"./iframe-pc92L1PC.js";import{n,t as r}from"./field-CfnCaBsU.js";import{n as i,t as a}from"./input-B08ZGKcJ.js";var o,s,c,l,u,d,f;e((()=>{r(),a(),o=t(),s={title:`Components/Field`,component:n.Root,parameters:{layout:`centered`},tags:[`autodocs`],decorators:[e=>(0,o.jsx)(`div`,{className:`w-full max-w-[320px]`,children:(0,o.jsx)(e,{})})]},c={render:()=>(0,o.jsxs)(n.Root,{children:[(0,o.jsx)(n.Label,{children:`Email`}),(0,o.jsx)(i,{placeholder:`name@example.com`})]})},l={render:()=>(0,o.jsxs)(n.Root,{children:[(0,o.jsx)(n.Label,{children:`Username`}),(0,o.jsx)(i,{placeholder:`johndoe`}),(0,o.jsx)(n.Description,{children:`This is your public display name.`})]})},u={render:()=>(0,o.jsxs)(n.Root,{invalid:!0,children:[(0,o.jsx)(n.Label,{children:`Email`}),(0,o.jsx)(i,{placeholder:`name@example.com`}),(0,o.jsx)(n.Error,{children:`Please enter a valid email address.`})]})},d={render:()=>(0,o.jsxs)(n.Root,{invalid:!0,children:[(0,o.jsx)(n.Label,{children:`Password`}),(0,o.jsx)(i,{type:`password`,placeholder:`Enter password`}),(0,o.jsx)(n.Description,{children:`Must be at least 8 characters.`}),(0,o.jsx)(n.Error,{children:`Password is too short.`})]})},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <Field.Root>
      <Field.Label>Email</Field.Label>
      <Input placeholder="name@example.com" />
    </Field.Root>
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <Field.Root>
      <Field.Label>Username</Field.Label>
      <Input placeholder="johndoe" />
      <Field.Description>This is your public display name.</Field.Description>
    </Field.Root>
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <Field.Root invalid>
      <Field.Label>Email</Field.Label>
      <Input placeholder="name@example.com" />
      <Field.Error>Please enter a valid email address.</Field.Error>
    </Field.Root>
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <Field.Root invalid>
      <Field.Label>Password</Field.Label>
      <Input type="password" placeholder="Enter password" />
      <Field.Description>Must be at least 8 characters.</Field.Description>
      <Field.Error>Password is too short.</Field.Error>
    </Field.Root>
}`,...d.parameters?.docs?.source}}},f=[`Default`,`WithDescription`,`WithError`,`Complete`]}))();export{d as Complete,c as Default,l as WithDescription,u as WithError,f as __namedExportsOrder,s as default};