import{i as e}from"./preload-helper-CxMj7VeQ.js";import{i as t}from"./iframe-DDLzXLyK.js";import{n,t as r}from"./badge-BQKOqZ-z.js";import{n as i,t as a}from"./tabs-CVnKA_wo.js";var o,s,c,l,u;e((()=>{a(),r(),o=t(),s={title:`Components/Tabs`,component:i.Root,parameters:{layout:`centered`},tags:[`autodocs`]},c={render:()=>(0,o.jsx)(`div`,{style:{width:`100%`,maxWidth:400},children:(0,o.jsxs)(i.Root,{defaultValue:`account`,children:[(0,o.jsxs)(i.List,{children:[(0,o.jsx)(i.Tab,{value:`account`,children:`Account`}),(0,o.jsx)(i.Tab,{value:`password`,children:`Password`}),(0,o.jsx)(i.Tab,{value:`settings`,children:`Settings`})]}),(0,o.jsx)(i.Panel,{value:`account`,children:(0,o.jsx)(`p`,{style:{padding:`16px 0`},children:`Manage your account settings and preferences.`})}),(0,o.jsx)(i.Panel,{value:`password`,children:(0,o.jsx)(`p`,{style:{padding:`16px 0`},children:`Change your password here.`})}),(0,o.jsx)(i.Panel,{value:`settings`,children:(0,o.jsx)(`p`,{style:{padding:`16px 0`},children:`Configure your application settings.`})})]})})},l={render:()=>(0,o.jsx)(`div`,{style:{width:`100%`,maxWidth:500},children:(0,o.jsxs)(i.Root,{defaultValue:`preview`,children:[(0,o.jsxs)(i.List,{children:[(0,o.jsx)(i.Tab,{value:`preview`,children:`Preview`}),(0,o.jsxs)(i.Tab,{value:`validation`,children:[`Validation`,(0,o.jsx)(n,{variant:`destructive`,size:`sm`,children:`3`})]}),(0,o.jsxs)(i.Tab,{value:`tools`,children:[`Tools`,(0,o.jsx)(n,{variant:`secondary`,size:`sm`,children:`5`})]}),(0,o.jsxs)(i.Tab,{value:`logs`,children:[`HTTP Log`,(0,o.jsx)(n,{variant:`outline`,size:`sm`,children:`12`})]})]}),(0,o.jsx)(i.Panel,{value:`preview`,children:(0,o.jsx)(`p`,{className:`text-sm text-muted-foreground py-4`,children:`Server card preview content.`})}),(0,o.jsx)(i.Panel,{value:`validation`,children:(0,o.jsx)(`p`,{className:`text-sm text-muted-foreground py-4`,children:`3 validation errors found.`})}),(0,o.jsx)(i.Panel,{value:`tools`,children:(0,o.jsx)(`p`,{className:`text-sm text-muted-foreground py-4`,children:`5 tools available.`})}),(0,o.jsx)(i.Panel,{value:`logs`,children:(0,o.jsx)(`p`,{className:`text-sm text-muted-foreground py-4`,children:`12 HTTP log entries.`})})]})})},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: "100%",
    maxWidth: 400
  }}>
      <Tabs.Root defaultValue="account">
        <Tabs.List>
          <Tabs.Tab value="account">Account</Tabs.Tab>
          <Tabs.Tab value="password">Password</Tabs.Tab>
          <Tabs.Tab value="settings">Settings</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value="account">
          <p style={{
          padding: '16px 0'
        }}>Manage your account settings and preferences.</p>
        </Tabs.Panel>
        <Tabs.Panel value="password">
          <p style={{
          padding: '16px 0'
        }}>Change your password here.</p>
        </Tabs.Panel>
        <Tabs.Panel value="settings">
          <p style={{
          padding: '16px 0'
        }}>Configure your application settings.</p>
        </Tabs.Panel>
      </Tabs.Root>
    </div>
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: "100%",
    maxWidth: 500
  }}>
      <Tabs.Root defaultValue="preview">
        <Tabs.List>
          <Tabs.Tab value="preview">Preview</Tabs.Tab>
          <Tabs.Tab value="validation">
            Validation
            <Badge variant="destructive" size="sm">3</Badge>
          </Tabs.Tab>
          <Tabs.Tab value="tools">
            Tools
            <Badge variant="secondary" size="sm">5</Badge>
          </Tabs.Tab>
          <Tabs.Tab value="logs">
            HTTP Log
            <Badge variant="outline" size="sm">12</Badge>
          </Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value="preview">
          <p className="text-sm text-muted-foreground py-4">Server card preview content.</p>
        </Tabs.Panel>
        <Tabs.Panel value="validation">
          <p className="text-sm text-muted-foreground py-4">3 validation errors found.</p>
        </Tabs.Panel>
        <Tabs.Panel value="tools">
          <p className="text-sm text-muted-foreground py-4">5 tools available.</p>
        </Tabs.Panel>
        <Tabs.Panel value="logs">
          <p className="text-sm text-muted-foreground py-4">12 HTTP log entries.</p>
        </Tabs.Panel>
      </Tabs.Root>
    </div>
}`,...l.parameters?.docs?.source}}},u=[`Default`,`WithBadges`]}))();export{c as Default,l as WithBadges,u as __namedExportsOrder,s as default};