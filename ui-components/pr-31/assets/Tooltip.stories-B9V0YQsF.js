import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t}from"./iframe-f7ZUfOUw.js";import{n,t as r}from"./Button-C5VG62LS.js";import{n as i,t as a}from"./Tooltip-KaT4Fa_H.js";var o,s,c,l,u;function d(){return(d=e((()=>{i(),n(),o=t(),s={title:`Components/Tooltip`,parameters:{layout:`centered`},tags:[`autodocs`]},c={render:()=>(0,o.jsx)(a.Provider,{children:(0,o.jsxs)(a.Root,{children:[(0,o.jsx)(a.Trigger,{children:(0,o.jsx)(r,{variant:`outline`,children:`Hover me`})}),(0,o.jsx)(a.Portal,{children:(0,o.jsx)(a.Positioner,{children:(0,o.jsxs)(a.Popup,{children:[`This is a tooltip`,(0,o.jsx)(a.Arrow,{})]})})})]})})},l={render:()=>(0,o.jsx)(a.Provider,{children:(0,o.jsxs)(a.Root,{children:[(0,o.jsx)(a.Trigger,{children:(0,o.jsx)(r,{children:`Info`})}),(0,o.jsx)(a.Portal,{children:(0,o.jsx)(a.Positioner,{children:(0,o.jsx)(a.Popup,{children:`This tooltip has longer content to demonstrate wrapping behavior.`})})})]})})},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger>
          <Button variant="outline">Hover me</Button>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Positioner>
            <Tooltip.Popup>
              This is a tooltip
              <Tooltip.Arrow />
            </Tooltip.Popup>
          </Tooltip.Positioner>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger>
          <Button>Info</Button>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Positioner>
            <Tooltip.Popup>
              This tooltip has longer content to demonstrate wrapping behavior.
            </Tooltip.Popup>
          </Tooltip.Positioner>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
}`,...l.parameters?.docs?.source}}},u=[`Default`,`WithLongContent`]})))()}d();export{c as Default,l as WithLongContent,u as __namedExportsOrder,s as default};