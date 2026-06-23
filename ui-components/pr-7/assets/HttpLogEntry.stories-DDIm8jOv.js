import{i as e}from"./preload-helper-CrHqsmmo.js";import{i as t}from"./iframe-Dl7qWFob.js";import{n,t as r}from"./http-log-entry-TyF1gauE.js";var i,a,o,s,c,l,u,d;e((()=>{r(),i=t(),a={title:`Components/HttpLogEntry`,component:n,parameters:{layout:`centered`},tags:[`autodocs`],decorators:[e=>(0,i.jsx)(`div`,{style:{width:`100%`,maxWidth:500},children:(0,i.jsx)(e,{})})]},o={args:{method:`tools/call`,url:`http://localhost:3000/mcp`,statusCode:200,responseStatus:`OK`,duration:62,timestamp:new Date,requestBody:JSON.stringify({jsonrpc:`2.0`,method:`tools/call`,params:{name:`get_weather`,arguments:{city:`Berlin`}},id:1}),requestHeaders:{"Content-Type":`application/json`,Accept:`application/json`},responseBody:JSON.stringify({jsonrpc:`2.0`,result:{content:[{type:`text`,text:`22°C, sunny`}]},id:1}),onResend:()=>console.log(`Resend`),onCopy:()=>console.log(`Copy as cURL`)}},s={args:{method:`tools/call`,url:`http://localhost:3000/mcp`,statusCode:500,responseStatus:`Internal Server Error`,duration:145,timestamp:new Date,requestBody:JSON.stringify({jsonrpc:`2.0`,method:`tools/call`,params:{name:`invalid_tool`},id:2}),responseBody:JSON.stringify({jsonrpc:`2.0`,error:{code:-32601,message:`Method not found`},id:2}),error:`Server returned an error response`,onCopy:()=>console.log(`Copy as cURL`)}},c={args:{method:`initialize`,url:`http://localhost:3000/mcp`,timestamp:new Date,requestBody:JSON.stringify({jsonrpc:`2.0`,method:`initialize`,params:{capabilities:{}},id:3})}},l={args:{method:`tools/call`,url:`http://localhost:3000/mcp`,statusCode:200,responseStatus:`OK`,duration:35,timestamp:new Date,highlighted:!0,defaultOpen:!0,requestBody:JSON.stringify({jsonrpc:`2.0`,method:`tools/call`,params:{name:`echo`,arguments:{text:`hello`}},id:4}),responseBody:JSON.stringify({jsonrpc:`2.0`,result:{content:[{type:`text`,text:`hello`}]},id:4}),onResend:()=>console.log(`Resend`),onCopy:()=>console.log(`Copy as cURL`)}},u={render:()=>(0,i.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,i.jsx)(n,{method:`initialize`,url:`http://localhost:3000/mcp`,statusCode:200,responseStatus:`OK`,duration:12,timestamp:new Date(Date.now()-5e3),requestBody:JSON.stringify({jsonrpc:`2.0`,method:`initialize`,id:1}),responseBody:JSON.stringify({jsonrpc:`2.0`,result:{capabilities:{tools:{}}},id:1})}),(0,i.jsx)(n,{method:`tools/list`,url:`http://localhost:3000/mcp`,statusCode:200,responseStatus:`OK`,duration:8,timestamp:new Date(Date.now()-3e3),requestBody:JSON.stringify({jsonrpc:`2.0`,method:`tools/list`,id:2}),responseBody:JSON.stringify({jsonrpc:`2.0`,result:{tools:[{name:`get_weather`}]},id:2})}),(0,i.jsx)(n,{method:`tools/call`,url:`http://localhost:3000/mcp`,statusCode:200,responseStatus:`OK`,duration:62,timestamp:new Date,requestBody:JSON.stringify({jsonrpc:`2.0`,method:`tools/call`,params:{name:`get_weather`,arguments:{city:`Berlin`}},id:3}),responseBody:JSON.stringify({jsonrpc:`2.0`,result:{content:[{type:`text`,text:`22°C`}]},id:3}),onResend:()=>{},onCopy:()=>{}})]})},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    method: 'tools/call',
    url: 'http://localhost:3000/mcp',
    statusCode: 200,
    responseStatus: 'OK',
    duration: 62,
    timestamp: new Date(),
    requestBody: JSON.stringify({
      jsonrpc: '2.0',
      method: 'tools/call',
      params: {
        name: 'get_weather',
        arguments: {
          city: 'Berlin'
        }
      },
      id: 1
    }),
    requestHeaders: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    responseBody: JSON.stringify({
      jsonrpc: '2.0',
      result: {
        content: [{
          type: 'text',
          text: '22°C, sunny'
        }]
      },
      id: 1
    }),
    onResend: () => console.log('Resend'),
    onCopy: () => console.log('Copy as cURL')
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    method: 'tools/call',
    url: 'http://localhost:3000/mcp',
    statusCode: 500,
    responseStatus: 'Internal Server Error',
    duration: 145,
    timestamp: new Date(),
    requestBody: JSON.stringify({
      jsonrpc: '2.0',
      method: 'tools/call',
      params: {
        name: 'invalid_tool'
      },
      id: 2
    }),
    responseBody: JSON.stringify({
      jsonrpc: '2.0',
      error: {
        code: -32601,
        message: 'Method not found'
      },
      id: 2
    }),
    error: 'Server returned an error response',
    onCopy: () => console.log('Copy as cURL')
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    method: 'initialize',
    url: 'http://localhost:3000/mcp',
    timestamp: new Date(),
    requestBody: JSON.stringify({
      jsonrpc: '2.0',
      method: 'initialize',
      params: {
        capabilities: {}
      },
      id: 3
    })
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    method: 'tools/call',
    url: 'http://localhost:3000/mcp',
    statusCode: 200,
    responseStatus: 'OK',
    duration: 35,
    timestamp: new Date(),
    highlighted: true,
    defaultOpen: true,
    requestBody: JSON.stringify({
      jsonrpc: '2.0',
      method: 'tools/call',
      params: {
        name: 'echo',
        arguments: {
          text: 'hello'
        }
      },
      id: 4
    }),
    responseBody: JSON.stringify({
      jsonrpc: '2.0',
      result: {
        content: [{
          type: 'text',
          text: 'hello'
        }]
      },
      id: 4
    }),
    onResend: () => console.log('Resend'),
    onCopy: () => console.log('Copy as cURL')
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-2">
      <HttpLogEntry method="initialize" url="http://localhost:3000/mcp" statusCode={200} responseStatus="OK" duration={12} timestamp={new Date(Date.now() - 5000)} requestBody={JSON.stringify({
      jsonrpc: '2.0',
      method: 'initialize',
      id: 1
    })} responseBody={JSON.stringify({
      jsonrpc: '2.0',
      result: {
        capabilities: {
          tools: {}
        }
      },
      id: 1
    })} />
      <HttpLogEntry method="tools/list" url="http://localhost:3000/mcp" statusCode={200} responseStatus="OK" duration={8} timestamp={new Date(Date.now() - 3000)} requestBody={JSON.stringify({
      jsonrpc: '2.0',
      method: 'tools/list',
      id: 2
    })} responseBody={JSON.stringify({
      jsonrpc: '2.0',
      result: {
        tools: [{
          name: 'get_weather'
        }]
      },
      id: 2
    })} />
      <HttpLogEntry method="tools/call" url="http://localhost:3000/mcp" statusCode={200} responseStatus="OK" duration={62} timestamp={new Date()} requestBody={JSON.stringify({
      jsonrpc: '2.0',
      method: 'tools/call',
      params: {
        name: 'get_weather',
        arguments: {
          city: 'Berlin'
        }
      },
      id: 3
    })} responseBody={JSON.stringify({
      jsonrpc: '2.0',
      result: {
        content: [{
          type: 'text',
          text: '22°C'
        }]
      },
      id: 3
    })} onResend={() => {}} onCopy={() => {}} />
    </div>
}`,...u.parameters?.docs?.source}}},d=[`Success`,`Error`,`Pending`,`Highlighted`,`Multiple`]}))();export{s as Error,l as Highlighted,u as Multiple,c as Pending,o as Success,d as __namedExportsOrder,a as default};