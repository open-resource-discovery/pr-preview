import{i as e}from"./preload-helper-BMGke09Z.js";import{i as t}from"./iframe-BGnzxjsf.js";import{n,t as r}from"./switch-BFPGGL-S.js";var i,a,o,s,c,l,u;e((()=>{r(),i=t(),a={title:`Components/Switch`,component:n.Root,parameters:{layout:`centered`},tags:[`autodocs`],decorators:[e=>(0,i.jsx)(`div`,{style:{padding:20},children:(0,i.jsx)(e,{})})]},o={render:()=>(0,i.jsx)(n.Root,{defaultChecked:!1,children:(0,i.jsx)(n.Thumb,{})})},s={render:()=>(0,i.jsx)(n.Root,{defaultChecked:!0,children:(0,i.jsx)(n.Thumb,{})})},c={render:()=>(0,i.jsxs)(`label`,{className:`flex items-center gap-2 text-sm font-medium text-foreground cursor-pointer`,children:[(0,i.jsx)(n.Root,{defaultChecked:!0,children:(0,i.jsx)(n.Thumb,{})}),`Connected`]})},l={render:()=>(0,i.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,i.jsxs)(`label`,{className:`flex items-center gap-2 text-sm font-medium text-foreground cursor-pointer`,children:[(0,i.jsx)(n.Root,{defaultChecked:!1,disabled:!0,children:(0,i.jsx)(n.Thumb,{})}),`Disabled (off)`]}),(0,i.jsxs)(`label`,{className:`flex items-center gap-2 text-sm font-medium text-foreground cursor-pointer`,children:[(0,i.jsx)(n.Root,{defaultChecked:!0,disabled:!0,children:(0,i.jsx)(n.Thumb,{})}),`Disabled (on)`]})]})},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <Switch.Root defaultChecked={false}>
      <Switch.Thumb />
    </Switch.Root>
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <Switch.Root defaultChecked>
      <Switch.Thumb />
    </Switch.Root>
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <label className="flex items-center gap-2 text-sm font-medium text-foreground cursor-pointer">
      <Switch.Root defaultChecked>
        <Switch.Thumb />
      </Switch.Root>
      Connected
    </label>
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-3">
      <label className="flex items-center gap-2 text-sm font-medium text-foreground cursor-pointer">
        <Switch.Root defaultChecked={false} disabled>
          <Switch.Thumb />
        </Switch.Root>
        Disabled (off)
      </label>
      <label className="flex items-center gap-2 text-sm font-medium text-foreground cursor-pointer">
        <Switch.Root defaultChecked disabled>
          <Switch.Thumb />
        </Switch.Root>
        Disabled (on)
      </label>
    </div>
}`,...l.parameters?.docs?.source}}},u=[`Default`,`Checked`,`WithLabel`,`Disabled`]}))();export{s as Checked,o as Default,l as Disabled,c as WithLabel,u as __namedExportsOrder,a as default};