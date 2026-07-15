import{i as e}from"./preload-helper-C95eyGIq.js";import{a as t,t as n}from"./iframe-DBY5es7T.js";import{n as r,t as i}from"./badge-BhT0EtlY.js";import{n as a}from"./code-block-C1yeD7sB.js";import{n as o,t as s}from"./http-log-entry-l7ip1rKt.js";var c=e((()=>{n(),i()})),l,u,d,f,p,m,h,g,_,v,y,b;e((()=>{s(),c(),l=t(),u={title:`Components/HttpLogEntry`,component:o,parameters:{layout:`centered`},tags:[`autodocs`],decorators:[e=>(0,l.jsx)(`div`,{style:{width:`100%`,maxWidth:500},children:(0,l.jsx)(e,{})})]},d={args:{method:`tools/call`,url:`http://localhost:3000/mcp`,statusCode:200,responseStatus:`OK`,duration:62,timestamp:new Date,requestBody:JSON.stringify({jsonrpc:`2.0`,method:`tools/call`,params:{name:`get_weather`,arguments:{city:`Berlin`}},id:1}),requestHeaders:{"Content-Type":`application/json`,Accept:`application/json`},responseBody:JSON.stringify({jsonrpc:`2.0`,result:{content:[{type:`text`,text:`22°C, sunny`}]},id:1}),onResend:()=>console.log(`Resend`),onCopy:()=>console.log(`Copy as cURL`)}},f={args:{method:`tools/call`,url:`http://localhost:3000/mcp`,statusCode:500,responseStatus:`Internal Server Error`,duration:145,timestamp:new Date,requestBody:JSON.stringify({jsonrpc:`2.0`,method:`tools/call`,params:{name:`invalid_tool`},id:2}),responseBody:JSON.stringify({jsonrpc:`2.0`,error:{code:-32601,message:`Method not found`},id:2}),error:`Server returned an error response`,onCopy:()=>console.log(`Copy as cURL`)}},p={args:{method:`initialize`,url:`http://localhost:3000/mcp`,timestamp:new Date,requestBody:JSON.stringify({jsonrpc:`2.0`,method:`initialize`,params:{capabilities:{}},id:3})}},m={args:{method:`tools/call`,url:`http://localhost:3000/mcp`,statusCode:200,responseStatus:`OK`,duration:35,timestamp:new Date,highlighted:!0,defaultOpen:!0,requestBody:JSON.stringify({jsonrpc:`2.0`,method:`tools/call`,params:{name:`echo`,arguments:{text:`hello`}},id:4}),responseBody:JSON.stringify({jsonrpc:`2.0`,result:{content:[{type:`text`,text:`hello`}]},id:4}),onResend:()=>console.log(`Resend`),onCopy:()=>console.log(`Copy as cURL`)}},h={args:{method:`tools/call`,url:`http://localhost:3000/mcp`,statusCode:200,responseStatus:`OK`,duration:62,timestamp:new Date,defaultOpen:!0,requestBody:JSON.stringify({jsonrpc:`2.0`,method:`tools/call`,params:{name:`get_weather`,arguments:{city:`Berlin`}},id:1}),requestHeaders:{"Content-Type":`application/json`,Accept:`application/json`},responseBody:JSON.stringify({jsonrpc:`2.0`,result:{content:[{type:`text`,text:`22°C, sunny`}]},id:1}),onResend:()=>console.log(`Resend`),onCopy:()=>console.log(`Copy as cURL`),onEdit:e=>console.log(`Edit & Send`,e)}},g=[{index:0,label:`Event 1`,dataJson:JSON.stringify({jsonrpc:`2.0`,result:{status:{state:`submitted`}},id:5},null,2)},{index:1,label:`Event 2`,dataJson:JSON.stringify({jsonrpc:`2.0`,result:{status:{state:`working`},artifact:{parts:[{type:`text`,text:`Fetching weather…`}]}},id:5},null,2)},{index:2,label:`Event 3`,dataJson:JSON.stringify({jsonrpc:`2.0`,result:{status:{state:`completed`},artifact:{parts:[{type:`text`,text:`22°C, sunny`}]}},id:5},null,2)}],_=(0,l.jsxs)(`div`,{className:`space-y-1`,children:[(0,l.jsxs)(`p`,{className:`text-[11px] text-muted-foreground`,children:[g.length,` events`]}),g.map(e=>(0,l.jsxs)(`details`,{className:`text-xs`,children:[(0,l.jsx)(`summary`,{className:`cursor-pointer text-muted-foreground hover:text-foreground`,children:e.label}),(0,l.jsx)(a,{code:e.dataJson,language:`json`,className:`mt-1 text-[11px]`})]},e.index))]}),v={args:{method:`message/stream`,url:`http://localhost:3000/a2a`,statusCode:200,responseStatus:`OK`,duration:340,timestamp:new Date,defaultOpen:!0,requestBody:JSON.stringify({jsonrpc:`2.0`,method:`message/stream`,params:{message:{role:`user`,parts:[{type:`text`,text:`What is the weather in Berlin?`}]}},id:5}),requestHeaders:{"Content-Type":`application/json`,Accept:`text/event-stream`},extraBadges:(0,l.jsx)(r,{variant:`outline`,size:`sm`,className:`font-mono shrink-0`,children:`SSE`}),responseBodyContent:_,onResend:()=>console.log(`Resend`),onCopy:()=>console.log(`Copy as cURL`)}},y={args:{method:``,url:``},render:()=>(0,l.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,l.jsx)(o,{method:`initialize`,url:`http://localhost:3000/mcp`,statusCode:200,responseStatus:`OK`,duration:12,timestamp:new Date(Date.now()-5e3),requestBody:JSON.stringify({jsonrpc:`2.0`,method:`initialize`,id:1}),responseBody:JSON.stringify({jsonrpc:`2.0`,result:{capabilities:{tools:{}}},id:1})}),(0,l.jsx)(o,{method:`tools/list`,url:`http://localhost:3000/mcp`,statusCode:200,responseStatus:`OK`,duration:8,timestamp:new Date(Date.now()-3e3),requestBody:JSON.stringify({jsonrpc:`2.0`,method:`tools/list`,id:2}),responseBody:JSON.stringify({jsonrpc:`2.0`,result:{tools:[{name:`get_weather`}]},id:2})}),(0,l.jsx)(o,{method:`tools/call`,url:`http://localhost:3000/mcp`,statusCode:200,responseStatus:`OK`,duration:62,timestamp:new Date,requestBody:JSON.stringify({jsonrpc:`2.0`,method:`tools/call`,params:{name:`get_weather`,arguments:{city:`Berlin`}},id:3}),responseBody:JSON.stringify({jsonrpc:`2.0`,result:{content:[{type:`text`,text:`22°C`}]},id:3}),onResend:()=>{},onCopy:()=>{}})]})},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    method: 'tools/call',
    url: 'http://localhost:3000/mcp',
    statusCode: 200,
    responseStatus: 'OK',
    duration: 62,
    timestamp: new Date(),
    defaultOpen: true,
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
    onCopy: () => console.log('Copy as cURL'),
    onEdit: payload => console.log('Edit & Send', payload)
  }
}`,...h.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    method: 'message/stream',
    url: 'http://localhost:3000/a2a',
    statusCode: 200,
    responseStatus: 'OK',
    duration: 340,
    timestamp: new Date(),
    defaultOpen: true,
    requestBody: JSON.stringify({
      jsonrpc: '2.0',
      method: 'message/stream',
      params: {
        message: {
          role: 'user',
          parts: [{
            type: 'text',
            text: 'What is the weather in Berlin?'
          }]
        }
      },
      id: 5
    }),
    requestHeaders: {
      'Content-Type': 'application/json',
      Accept: 'text/event-stream'
    },
    extraBadges: <Badge variant="outline" size="sm" className="font-mono shrink-0">
        SSE
      </Badge>,
    responseBodyContent: sseResponseBodyContent,
    onResend: () => console.log('Resend'),
    onCopy: () => console.log('Copy as cURL')
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    method: '',
    url: ''
  },
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
}`,...y.parameters?.docs?.source}}},b=[`Success`,`Error`,`Pending`,`Highlighted`,`WithEdit`,`SSEStream`,`Multiple`]}))();export{f as Error,m as Highlighted,y as Multiple,p as Pending,v as SSEStream,d as Success,h as WithEdit,b as __namedExportsOrder,u as default};