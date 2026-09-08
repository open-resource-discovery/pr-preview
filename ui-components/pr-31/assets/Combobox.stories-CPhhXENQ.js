import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-BZJXY1be.js";import{a as n}from"./iframe-f7ZUfOUw.js";import{i as r,n as i,r as a,t as o}from"./SimpleCombobox-D_UdeRz3.js";function s(){let[e,t]=(0,c.useState)(``),n=d.filter(t=>t.toLowerCase().includes(e.toLowerCase()));return(0,l.jsx)(`div`,{style:{width:`100%`,maxWidth:240},children:(0,l.jsxs)(a.Root,{onInputValueChange:e=>t(e),children:[(0,l.jsx)(a.Input,{placeholder:`Search fruits...`}),(0,l.jsx)(a.Portal,{children:(0,l.jsx)(a.Positioner,{children:(0,l.jsx)(a.Popup,{children:n.length===0?(0,l.jsx)(a.Empty,{children:`No fruits found.`}):n.map(e=>(0,l.jsxs)(a.Item,{value:e,children:[(0,l.jsx)(a.ItemIndicator,{}),e]},e))})})})]})})}var c,l,u,d,f,p,m,h,g;function _(){return(_=e((()=>{c=t(),r(),i(),l=n(),u={title:`Components/Combobox`,component:a.Root,parameters:{layout:`centered`},tags:[`autodocs`]},d=[`Apple`,`Banana`,`Cherry`,`Grape`,`Kiwi`,`Mango`,`Orange`,`Peach`,`Pear`,`Strawberry`],f={render:()=>(0,l.jsx)(s,{})},p={render:()=>(0,l.jsx)(`div`,{style:{width:`100%`,maxWidth:240},children:(0,l.jsxs)(a.Root,{children:[(0,l.jsx)(a.Input,{placeholder:`Type to search...`}),(0,l.jsx)(a.Portal,{children:(0,l.jsx)(a.Positioner,{children:(0,l.jsx)(a.Popup,{children:d.map(e=>(0,l.jsxs)(a.Item,{value:e,children:[(0,l.jsx)(a.ItemIndicator,{}),e]},e))})})})]})})},m=d.map(e=>({value:e.toLowerCase(),label:e})),h={render:()=>(0,l.jsx)(`div`,{style:{width:`100%`,maxWidth:240},children:(0,l.jsx)(o,{items:m,placeholder:`Pick a fruit...`,maxVisibleItems:5})})},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <ComboboxExample />
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: "100%",
    maxWidth: 240
  }}>
      <Combobox.Root>
        <Combobox.Input placeholder="Type to search..." />
        <Combobox.Portal>
          <Combobox.Positioner>
            <Combobox.Popup>
              {fruits.map(fruit => <Combobox.Item key={fruit} value={fruit}>
                  <Combobox.ItemIndicator />
                  {fruit}
                </Combobox.Item>)}
            </Combobox.Popup>
          </Combobox.Positioner>
        </Combobox.Portal>
      </Combobox.Root>
    </div>
}`,...p.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: "100%",
    maxWidth: 240
  }}>
      <SimpleCombobox items={fruitItems} placeholder="Pick a fruit..." maxVisibleItems={5} />
    </div>
}`,...h.parameters?.docs?.source}}},g=[`Default`,`WithPlaceholder`,`Simple`]})))()}_();export{f as Default,h as Simple,p as WithPlaceholder,g as __namedExportsOrder,u as default};