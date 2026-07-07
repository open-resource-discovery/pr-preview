import{i as e}from"./preload-helper-CxMj7VeQ.js";import{i as t}from"./iframe-DDLzXLyK.js";import{n,t as r}from"./button-Cb3E51od.js";import{n as i,t as a}from"./tooltip-SiPUkT-H.js";var o,s,c,l,u;e((()=>{a(),r(),o=t(),s={title:`Components/Tooltip`,parameters:{layout:`centered`},tags:[`autodocs`]},c={render:()=>(0,o.jsx)(i.Provider,{children:(0,o.jsxs)(i.Root,{children:[(0,o.jsx)(i.Trigger,{children:(0,o.jsx)(n,{variant:`outline`,children:`Hover me`})}),(0,o.jsx)(i.Portal,{children:(0,o.jsx)(i.Positioner,{children:(0,o.jsxs)(i.Popup,{children:[`This is a tooltip`,(0,o.jsx)(i.Arrow,{})]})})})]})})},l={render:()=>(0,o.jsx)(i.Provider,{children:(0,o.jsxs)(i.Root,{children:[(0,o.jsx)(i.Trigger,{children:(0,o.jsx)(n,{children:`Info`})}),(0,o.jsx)(i.Portal,{children:(0,o.jsx)(i.Positioner,{children:(0,o.jsx)(i.Popup,{children:`This tooltip has longer content to demonstrate wrapping behavior.`})})})]})})},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}},u=[`Default`,`WithLongContent`]}))();export{c as Default,l as WithLongContent,u as __namedExportsOrder,s as default};