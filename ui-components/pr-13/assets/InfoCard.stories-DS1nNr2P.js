import{i as e}from"./preload-helper-C95eyGIq.js";import{a as t}from"./iframe-DBY5es7T.js";import{n,t as r}from"./badge-BhT0EtlY.js";import{n as i,t as a}from"./collapsible-section-C_gyMePP.js";import{n as o,t as s}from"./info-card-C5uJHOVI.js";import{n as c,t as l}from"./markdown-text-DTHEb9bV.js";var u,d,f,p,m,h;e((()=>{s(),a(),l(),r(),u=t(),d={title:`Components/InfoCard`,component:o,parameters:{layout:`centered`},tags:[`autodocs`],decorators:[e=>(0,u.jsx)(`div`,{style:{width:`100%`,maxWidth:450},children:(0,u.jsx)(e,{})})]},f={render:()=>(0,u.jsxs)(o,{children:[(0,u.jsxs)(o.Header,{children:[(0,u.jsx)(o.Icon,{}),(0,u.jsxs)(`div`,{className:`flex flex-col gap-0.5`,children:[(0,u.jsx)(o.Title,{children:`Echo Server`}),(0,u.jsx)(o.Subtitle,{children:`mock/echo v1.0.0`})]})]}),(0,u.jsxs)(o.Content,{children:[(0,u.jsx)(o.Section,{children:(0,u.jsx)(c,{text:`Server card auto-generated from live MCP connection to **mock/echo**.`})}),(0,u.jsx)(o.Section,{children:(0,u.jsxs)(i.Root,{children:[(0,u.jsx)(i.Trigger,{children:`Capabilities`}),(0,u.jsx)(i.Content,{children:(0,u.jsxs)(`div`,{className:`flex flex-wrap gap-1.5`,children:[(0,u.jsx)(n,{variant:`secondary`,size:`sm`,children:`Tools`}),(0,u.jsx)(n,{variant:`secondary`,size:`sm`,children:`Resources`}),(0,u.jsx)(n,{variant:`secondary`,size:`sm`,children:`Prompts`})]})})]})}),(0,u.jsx)(o.Section,{children:(0,u.jsxs)(i.Root,{children:[(0,u.jsxs)(i.Trigger,{children:[(0,u.jsx)(n,{variant:`outline`,size:`sm`,children:`3`}),`Tools`]}),(0,u.jsx)(i.Content,{children:(0,u.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,u.jsx)(`p`,{className:`text-xs text-muted-foreground`,children:`echo — Echoes back the input text`}),(0,u.jsx)(`p`,{className:`text-xs text-muted-foreground`,children:`reverse — Reverses the input string`}),(0,u.jsx)(`p`,{className:`text-xs text-muted-foreground`,children:`uppercase — Converts to uppercase`})]})})]})})]})]})},p={render:()=>(0,u.jsxs)(o,{children:[(0,u.jsxs)(o.Header,{children:[(0,u.jsx)(o.Icon,{children:(0,u.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:`20`,height:`20`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,className:`text-muted-foreground`,children:(0,u.jsx)(`path`,{d:`M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z`})})}),(0,u.jsxs)(`div`,{className:`flex flex-col gap-0.5`,children:[(0,u.jsx)(o.Title,{children:`Weather Service`}),(0,u.jsx)(o.Subtitle,{children:`Provides real-time weather data`})]})]}),(0,u.jsx)(o.Content,{children:(0,u.jsx)(o.Section,{children:(0,u.jsx)(c,{text:`Get current weather, forecasts, and historical data for any location worldwide.

- Temperature
- Humidity
- Wind speed`})})})]})},m={render:()=>(0,u.jsxs)(o,{children:[(0,u.jsx)(o.Header,{children:(0,u.jsxs)(`div`,{className:`flex flex-col gap-0.5`,children:[(0,u.jsx)(o.Title,{children:`Documentation`}),(0,u.jsx)(o.Subtitle,{children:`API Reference`})]})}),(0,u.jsx)(o.Content,{children:(0,u.jsx)(o.Section,{children:(0,u.jsx)(c,{text:`## Getting Started

Install the package:

\`\`\`bash
npm install @open-resource-discovery/ui-components
\`\`\`

Then import and use:

\`\`\`tsx
import { InfoCard } from '@open-resource-discovery/ui-components';
\`\`\``})})})]})},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <InfoCard>
      <InfoCard.Header>
        <InfoCard.Icon />
        <div className="flex flex-col gap-0.5">
          <InfoCard.Title>Echo Server</InfoCard.Title>
          <InfoCard.Subtitle>mock/echo v1.0.0</InfoCard.Subtitle>
        </div>
      </InfoCard.Header>
      <InfoCard.Content>
        <InfoCard.Section>
          <MarkdownText text="Server card auto-generated from live MCP connection to **mock/echo**." />
        </InfoCard.Section>
        <InfoCard.Section>
          <CollapsibleSection.Root>
            <CollapsibleSection.Trigger>Capabilities</CollapsibleSection.Trigger>
            <CollapsibleSection.Content>
              <div className="flex flex-wrap gap-1.5">
                <Badge variant="secondary" size="sm">Tools</Badge>
                <Badge variant="secondary" size="sm">Resources</Badge>
                <Badge variant="secondary" size="sm">Prompts</Badge>
              </div>
            </CollapsibleSection.Content>
          </CollapsibleSection.Root>
        </InfoCard.Section>
        <InfoCard.Section>
          <CollapsibleSection.Root>
            <CollapsibleSection.Trigger>
              <Badge variant="outline" size="sm">3</Badge>
              Tools
            </CollapsibleSection.Trigger>
            <CollapsibleSection.Content>
              <div className="flex flex-col gap-2">
                <p className="text-xs text-muted-foreground">echo — Echoes back the input text</p>
                <p className="text-xs text-muted-foreground">reverse — Reverses the input string</p>
                <p className="text-xs text-muted-foreground">uppercase — Converts to uppercase</p>
              </div>
            </CollapsibleSection.Content>
          </CollapsibleSection.Root>
        </InfoCard.Section>
      </InfoCard.Content>
    </InfoCard>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <InfoCard>
      <InfoCard.Header>
        <InfoCard.Icon>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-muted-foreground">
            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
          </svg>
        </InfoCard.Icon>
        <div className="flex flex-col gap-0.5">
          <InfoCard.Title>Weather Service</InfoCard.Title>
          <InfoCard.Subtitle>Provides real-time weather data</InfoCard.Subtitle>
        </div>
      </InfoCard.Header>
      <InfoCard.Content>
        <InfoCard.Section>
          <MarkdownText text={'Get current weather, forecasts, and historical data for any location worldwide.\\n\\n- Temperature\\n- Humidity\\n- Wind speed'} />
        </InfoCard.Section>
      </InfoCard.Content>
    </InfoCard>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <InfoCard>
      <InfoCard.Header>
        <div className="flex flex-col gap-0.5">
          <InfoCard.Title>Documentation</InfoCard.Title>
          <InfoCard.Subtitle>API Reference</InfoCard.Subtitle>
        </div>
      </InfoCard.Header>
      <InfoCard.Content>
        <InfoCard.Section>
          <MarkdownText text={\`## Getting Started

Install the package:

\\\`\\\`\\\`bash
npm install @open-resource-discovery/ui-components
\\\`\\\`\\\`

Then import and use:

\\\`\\\`\\\`tsx
import { InfoCard } from '@open-resource-discovery/ui-components';
\\\`\\\`\\\`\`} />
        </InfoCard.Section>
      </InfoCard.Content>
    </InfoCard>
}`,...m.parameters?.docs?.source}}},h=[`Default`,`WithCustomIcon`,`MarkdownOnly`]}))();export{f as Default,m as MarkdownOnly,p as WithCustomIcon,h as __namedExportsOrder,d as default};