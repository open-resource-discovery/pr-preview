import{i as e}from"./preload-helper-DsZH5ZyP.js";import{i as t}from"./iframe-9TL6zHda.js";import{n,t as r}from"./split-pane-gIF5hStM.js";function i({label:e,color:t}){return(0,a.jsx)(`div`,{className:`h-full flex items-center justify-center text-sm font-medium ${t}`,children:e})}var a,o,s,c,l,u,d,f,p;e((()=>{r(),a=t(),o={title:`Components/SplitPane`,component:n.Root,parameters:{layout:`fullscreen`},tags:[`autodocs`],decorators:[e=>(0,a.jsx)(`div`,{style:{height:400},children:(0,a.jsx)(e,{})})]},s={render:()=>(0,a.jsxs)(n.Root,{orientation:`horizontal`,children:[(0,a.jsx)(n.Panel,{defaultSize:50,minSize:20,children:(0,a.jsx)(i,{label:`Left Panel`,color:`bg-muted`})}),(0,a.jsx)(n.Handle,{}),(0,a.jsx)(n.Panel,{defaultSize:50,minSize:20,children:(0,a.jsx)(i,{label:`Right Panel`,color:`bg-card`})})]})},c={render:()=>(0,a.jsxs)(n.Root,{orientation:`horizontal`,children:[(0,a.jsx)(n.Panel,{defaultSize:20,minSize:15,children:(0,a.jsx)(i,{label:`Sidebar`,color:`bg-muted`})}),(0,a.jsx)(n.Handle,{}),(0,a.jsx)(n.Panel,{defaultSize:45,minSize:30,children:(0,a.jsx)(i,{label:`Editor`,color:`bg-card`})}),(0,a.jsx)(n.Handle,{}),(0,a.jsx)(n.Panel,{defaultSize:35,minSize:20,children:(0,a.jsx)(i,{label:`Preview`,color:`bg-muted`})})]})},l={render:()=>(0,a.jsxs)(n.Root,{orientation:`vertical`,children:[(0,a.jsx)(n.Panel,{defaultSize:60,minSize:20,children:(0,a.jsx)(i,{label:`Top Panel`,color:`bg-card`})}),(0,a.jsx)(n.Handle,{}),(0,a.jsx)(n.Panel,{defaultSize:40,minSize:20,children:(0,a.jsx)(i,{label:`Bottom Panel`,color:`bg-muted`})})]})},u={render:()=>(0,a.jsxs)(n.Root,{orientation:`horizontal`,children:[(0,a.jsx)(n.Panel,{defaultSize:30,minSize:15,children:(0,a.jsx)(i,{label:`Sidebar`,color:`bg-muted`})}),(0,a.jsx)(n.Handle,{}),(0,a.jsx)(n.Panel,{defaultSize:70,minSize:30,children:(0,a.jsxs)(n.Root,{orientation:`vertical`,children:[(0,a.jsx)(n.Panel,{defaultSize:60,minSize:20,children:(0,a.jsx)(i,{label:`Main Content`,color:`bg-card`})}),(0,a.jsx)(n.Handle,{}),(0,a.jsx)(n.Panel,{defaultSize:40,minSize:15,children:(0,a.jsx)(i,{label:`Terminal`,color:`bg-muted`})})]})})]})},d={render:()=>(0,a.jsxs)(n.Root,{orientation:`horizontal`,children:[(0,a.jsx)(n.Panel,{defaultSize:20,minSize:10,collapsible:!0,collapsedSize:0,children:(0,a.jsx)(i,{label:`Collapsible Sidebar`,color:`bg-muted`})}),(0,a.jsx)(n.Handle,{}),(0,a.jsx)(n.Panel,{defaultSize:50,minSize:30,children:(0,a.jsx)(i,{label:`Editor`,color:`bg-card`})}),(0,a.jsx)(n.Handle,{}),(0,a.jsx)(n.Panel,{defaultSize:30,minSize:15,children:(0,a.jsx)(i,{label:`Preview`,color:`bg-muted`})})]})},f={render:()=>(0,a.jsxs)(n.Root,{orientation:`horizontal`,children:[(0,a.jsx)(n.Panel,{defaultSize:50,minSize:20,children:(0,a.jsx)(i,{label:`Left`,color:`bg-muted`})}),(0,a.jsx)(n.Handle,{showGrip:!1}),(0,a.jsx)(n.Panel,{defaultSize:50,minSize:20,children:(0,a.jsx)(i,{label:`Right`,color:`bg-card`})})]})},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <SplitPane.Root orientation="horizontal">
      <SplitPane.Panel defaultSize={50} minSize={20}>
        <PaneContent label="Left Panel" color="bg-muted" />
      </SplitPane.Panel>
      <SplitPane.Handle />
      <SplitPane.Panel defaultSize={50} minSize={20}>
        <PaneContent label="Right Panel" color="bg-card" />
      </SplitPane.Panel>
    </SplitPane.Root>
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <SplitPane.Root orientation="horizontal">
      <SplitPane.Panel defaultSize={20} minSize={15}>
        <PaneContent label="Sidebar" color="bg-muted" />
      </SplitPane.Panel>
      <SplitPane.Handle />
      <SplitPane.Panel defaultSize={45} minSize={30}>
        <PaneContent label="Editor" color="bg-card" />
      </SplitPane.Panel>
      <SplitPane.Handle />
      <SplitPane.Panel defaultSize={35} minSize={20}>
        <PaneContent label="Preview" color="bg-muted" />
      </SplitPane.Panel>
    </SplitPane.Root>
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <SplitPane.Root orientation="vertical">
      <SplitPane.Panel defaultSize={60} minSize={20}>
        <PaneContent label="Top Panel" color="bg-card" />
      </SplitPane.Panel>
      <SplitPane.Handle />
      <SplitPane.Panel defaultSize={40} minSize={20}>
        <PaneContent label="Bottom Panel" color="bg-muted" />
      </SplitPane.Panel>
    </SplitPane.Root>
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <SplitPane.Root orientation="horizontal">
      <SplitPane.Panel defaultSize={30} minSize={15}>
        <PaneContent label="Sidebar" color="bg-muted" />
      </SplitPane.Panel>
      <SplitPane.Handle />
      <SplitPane.Panel defaultSize={70} minSize={30}>
        <SplitPane.Root orientation="vertical">
          <SplitPane.Panel defaultSize={60} minSize={20}>
            <PaneContent label="Main Content" color="bg-card" />
          </SplitPane.Panel>
          <SplitPane.Handle />
          <SplitPane.Panel defaultSize={40} minSize={15}>
            <PaneContent label="Terminal" color="bg-muted" />
          </SplitPane.Panel>
        </SplitPane.Root>
      </SplitPane.Panel>
    </SplitPane.Root>
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <SplitPane.Root orientation="horizontal">
      <SplitPane.Panel defaultSize={20} minSize={10} collapsible collapsedSize={0}>
        <PaneContent label="Collapsible Sidebar" color="bg-muted" />
      </SplitPane.Panel>
      <SplitPane.Handle />
      <SplitPane.Panel defaultSize={50} minSize={30}>
        <PaneContent label="Editor" color="bg-card" />
      </SplitPane.Panel>
      <SplitPane.Handle />
      <SplitPane.Panel defaultSize={30} minSize={15}>
        <PaneContent label="Preview" color="bg-muted" />
      </SplitPane.Panel>
    </SplitPane.Root>
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <SplitPane.Root orientation="horizontal">
      <SplitPane.Panel defaultSize={50} minSize={20}>
        <PaneContent label="Left" color="bg-muted" />
      </SplitPane.Panel>
      <SplitPane.Handle showGrip={false} />
      <SplitPane.Panel defaultSize={50} minSize={20}>
        <PaneContent label="Right" color="bg-card" />
      </SplitPane.Panel>
    </SplitPane.Root>
}`,...f.parameters?.docs?.source}}},p=[`TwoPanes`,`ThreePanes`,`Vertical`,`Nested`,`Collapsible`,`NoGrip`]}))();export{d as Collapsible,u as Nested,f as NoGrip,c as ThreePanes,s as TwoPanes,l as Vertical,p as __namedExportsOrder,o as default};