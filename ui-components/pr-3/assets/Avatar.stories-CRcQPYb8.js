import{i as e}from"./preload-helper-BMGke09Z.js";import{i as t}from"./iframe-BGnzxjsf.js";import{n,t as r}from"./avatar-CEwzwt1Q.js";var i,a,o,s,c,l;e((()=>{r(),i=t(),a={title:`Components/Avatar`,parameters:{layout:`centered`},tags:[`autodocs`]},o={render:()=>(0,i.jsxs)(n.Root,{children:[(0,i.jsx)(n.Image,{src:`https://i.pravatar.cc/150?u=a`,alt:`User`}),(0,i.jsx)(n.Fallback,{children:`JD`})]})},s={render:()=>(0,i.jsxs)(n.Root,{children:[(0,i.jsx)(n.Image,{src:`https://invalid-url.example/broken.jpg`,alt:`User`}),(0,i.jsx)(n.Fallback,{children:`JD`})]})},c={render:()=>(0,i.jsxs)(`div`,{className:`flex items-center gap-4`,children:[(0,i.jsx)(n.Root,{size:`sm`,children:(0,i.jsx)(n.Fallback,{children:`SM`})}),(0,i.jsx)(n.Root,{size:`default`,children:(0,i.jsx)(n.Fallback,{children:`MD`})}),(0,i.jsx)(n.Root,{size:`lg`,children:(0,i.jsx)(n.Fallback,{children:`LG`})})]})},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <Avatar.Root>
      <Avatar.Image src="https://i.pravatar.cc/150?u=a" alt="User" />
      <Avatar.Fallback>JD</Avatar.Fallback>
    </Avatar.Root>
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <Avatar.Root>
      <Avatar.Image src="https://invalid-url.example/broken.jpg" alt="User" />
      <Avatar.Fallback>JD</Avatar.Fallback>
    </Avatar.Root>
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-4">
      <Avatar.Root size="sm">
        <Avatar.Fallback>SM</Avatar.Fallback>
      </Avatar.Root>
      <Avatar.Root size="default">
        <Avatar.Fallback>MD</Avatar.Fallback>
      </Avatar.Root>
      <Avatar.Root size="lg">
        <Avatar.Fallback>LG</Avatar.Fallback>
      </Avatar.Root>
    </div>
}`,...c.parameters?.docs?.source}}},l=[`WithImage`,`WithFallback`,`Sizes`]}))();export{c as Sizes,s as WithFallback,o as WithImage,l as __namedExportsOrder,a as default};