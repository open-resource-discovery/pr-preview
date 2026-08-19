(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["1654"],{22365(e){function a(e){return Promise.resolve().then(function(){var a=Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a})}a.keys=()=>[],a.resolve=a,a.id=22365,e.exports=a},69185(e,a,t){"use strict";t.r(a),t.d(a,{default:()=>b});var r=t(74848),s=t(96540),n=t(83602);let o="sectionTitle_pg6q",i="sectionBody_tmP2",l="row_R35m",c="rowLabel_Oscc",d="radioLabel_k2l6",p="select_LNCx",u="inputLabel_DAOg";function h({id:e,checked:a,onChange:t}){return(0,r.jsxs)("label",{className:"toggleSwitch_V1fd",htmlFor:e,children:[(0,r.jsx)("input",{id:e,type:"checkbox",checked:a,onChange:e=>t(e.target.checked)}),(0,r.jsx)("span",{className:"toggleSlider_PvsK"})]})}function b({onOptionsChange:e,onClose:a,autoDetect:t,onAutoDetectChange:f,strictTypeCheck:m,onStrictTypeCheckChange:y}){let[x,g]=(0,s.useState)("error"),[v,j]=(0,s.useState)(!1),[S,k]=(0,s.useState)(!1),[w,N]=(0,s.useState)(!1),[A,O]=(0,s.useState)(!1),[D,P]=(0,s.useState)(!0),[E,C]=(0,s.useState)(!0),[$,M]=(0,s.useState)(!0),[T,R]=(0,s.useState)(!0),[I,L]=(0,s.useState)(!1),[W,_]=(0,s.useState)(!0),[B,U]=(0,s.useState)(!0),[F,V]=(0,s.useState)(!1),[z,q]=(0,s.useState)("byDefault"),[H,K]=(0,s.useState)("byDefault"),[J,Y]=(0,s.useState)(""),[G,Q]=(0,s.useState)(""),[X,Z]=(0,s.useState)(""),[ee,ea]=(0,s.useState)(""),[et,er]=(0,s.useState)(""),[es,en]=(0,s.useState)("");function eo(a){let r={autoDetect:t,strictTypeCheck:m,fallback:x,showCustomAttributes:v,a2aValidation:S,mcpValidation:w,asyncSidebar:A,asyncInfo:D,asyncServers:E,asyncOperations:$,asyncMessages:T,asyncMessageExamples:I,asyncSchemas:W,asyncErrors:B,asyncExpandMsgExamples:F,asyncShowServers:z,asyncShowOperations:H,publishLabel:J,subscribeLabel:G,sendLabel:X,receiveLabel:ee,requestLabel:et,replyLabel:es,...a};e({autoDetect:r.autoDetect,strictTypeCheck:r.strictTypeCheck,fallback:r.fallback,customAttributes:!!r.showCustomAttributes&&{openapi:[n.sapOpenApiAttributesConfig],asyncapi:[n.sapAsyncApiAttributesConfig],csn:[n.sapCsnAttributesConfig]},a2a:{showValidation:r.a2aValidation,showConnection:r.a2aConnection},mcp:{showValidation:r.mcpValidation},asyncapi:{show:{sidebar:r.asyncSidebar,info:r.asyncInfo,servers:r.asyncServers,operations:r.asyncOperations,messages:r.asyncMessages,messageExamples:r.asyncMessageExamples,schemas:r.asyncSchemas,errors:r.asyncErrors},expand:{messageExamples:r.asyncExpandMsgExamples},sidebar:{showServers:r.asyncShowServers,showOperations:r.asyncShowOperations},...r.publishLabel?{publishLabel:r.publishLabel}:{},...r.subscribeLabel?{subscribeLabel:r.subscribeLabel}:{},...r.sendLabel?{sendLabel:r.sendLabel}:{},...r.receiveLabel?{receiveLabel:r.receiveLabel}:{},...r.requestLabel?{requestLabel:r.requestLabel}:{},...r.replyLabel?{replyLabel:r.replyLabel}:{}}})}function ei(e,a){return t=>{e(t),eo({[a]:t})}}return(0,r.jsxs)("div",{className:"sidebar_YwfI",children:[(0,r.jsxs)("div",{className:"header_B8Tu",children:[(0,r.jsxs)("div",{className:"headerText_h8Ci",children:[(0,r.jsx)("p",{className:"title_xcHa",children:"Options"}),(0,r.jsx)("p",{className:"subtitle_SbtR",children:"Configure renderer behaviour"})]}),a&&(0,r.jsx)("button",{type:"button",className:"closeBtn_TeqM",onClick:a,title:"Close",children:"\u2715"})]}),(0,r.jsxs)("div",{className:"sections_jywA",children:[(0,r.jsxs)("details",{open:!0,children:[(0,r.jsx)("summary",{className:o,children:"General"}),(0,r.jsxs)("div",{className:i,children:[(0,r.jsxs)("div",{className:l,children:[(0,r.jsx)("span",{className:c,children:"Auto-detect format"}),(0,r.jsx)(h,{id:"opt-autoDetect",checked:t,onChange:e=>{f(e),eo({autoDetect:e})}})]}),(0,r.jsxs)("div",{className:l,children:[(0,r.jsx)("span",{className:c,children:"Show custom attributes"}),(0,r.jsx)(h,{id:"opt-showCustomAttributes",checked:v,onChange:ei(j,"showCustomAttributes")})]}),(0,r.jsxs)("div",{className:l,children:[(0,r.jsx)("span",{className:c,children:"Ignore type check"}),(0,r.jsx)(h,{id:"opt-strictTypeCheck",checked:!m,onChange:e=>{y(!e),eo({strictTypeCheck:!e})}})]}),(0,r.jsx)("div",{className:l,children:(0,r.jsx)("span",{className:c,children:"Fallback for unsupported types"})}),(0,r.jsxs)("div",{className:"radioGroup_k_LS",children:[(0,r.jsxs)("label",{className:d,children:[(0,r.jsx)("input",{type:"radio",name:"fallback",value:"error",checked:"error"===x,onChange:()=>{g("error"),eo({fallback:"error"})}}),"Error message"]}),(0,r.jsxs)("label",{className:d,children:[(0,r.jsx)("input",{type:"radio",name:"fallback",value:"raw",checked:"raw"===x,onChange:()=>{g("raw"),eo({fallback:"raw"})}}),"Raw content"]})]})]})]}),(0,r.jsxs)("details",{children:[(0,r.jsx)("summary",{className:o,children:"A2A"}),(0,r.jsx)("div",{className:i,children:(0,r.jsxs)("div",{className:l,children:[(0,r.jsx)("span",{className:c,children:"Show validation panel"}),(0,r.jsx)(h,{id:"opt-a2a-validation",checked:S,onChange:ei(k,"a2aValidation")})]})})]}),(0,r.jsxs)("details",{children:[(0,r.jsx)("summary",{className:o,children:"MCP"}),(0,r.jsx)("div",{className:i,children:(0,r.jsxs)("div",{className:l,children:[(0,r.jsx)("span",{className:c,children:"Show validation panel"}),(0,r.jsx)(h,{id:"opt-mcp-validation",checked:w,onChange:ei(N,"mcpValidation")})]})})]}),(0,r.jsxs)("details",{children:[(0,r.jsx)("summary",{className:o,children:"AsyncAPI \u2014 Visibility"}),(0,r.jsxs)("div",{className:i,children:[[["Sidebar",A,ei(O,"asyncSidebar"),"opt-async-sidebar"],["Info",D,ei(P,"asyncInfo"),"opt-async-info"],["Servers",E,ei(C,"asyncServers"),"opt-async-servers"],["Operations",$,ei(M,"asyncOperations"),"opt-async-ops"],["Messages",T,ei(R,"asyncMessages"),"opt-async-msgs"],["Message examples",I,ei(L,"asyncMessageExamples"),"opt-async-msgex"],["Schemas",W,ei(_,"asyncSchemas"),"opt-async-schemas"],["Errors",B,ei(U,"asyncErrors"),"opt-async-errors"]].map(([e,a,t,s])=>(0,r.jsxs)("div",{className:l,children:[(0,r.jsx)("span",{className:c,children:e}),(0,r.jsx)(h,{id:s,checked:a,onChange:t})]},s)),(0,r.jsxs)("div",{className:l,children:[(0,r.jsx)("span",{className:c,children:"Expand message examples"}),(0,r.jsx)(h,{id:"opt-async-expand-msgex",checked:F,onChange:ei(V,"asyncExpandMsgExamples")})]})]})]}),(0,r.jsxs)("details",{children:[(0,r.jsx)("summary",{className:o,children:"AsyncAPI \u2014 Sidebar grouping"}),(0,r.jsxs)("div",{className:i,children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{className:u,children:"Show servers"}),(0,r.jsxs)("select",{className:p,value:z,onChange:e=>{let a=e.target.value;q(a),eo({asyncShowServers:a})},children:[(0,r.jsx)("option",{value:"byDefault",children:"By default"}),(0,r.jsx)("option",{value:"bySpecTags",children:"By spec tags"}),(0,r.jsx)("option",{value:"byServersTags",children:"By servers tags"})]})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{className:u,children:"Show operations"}),(0,r.jsxs)("select",{className:p,value:H,onChange:e=>{let a=e.target.value;K(a),eo({asyncShowOperations:a})},children:[(0,r.jsx)("option",{value:"byDefault",children:"By default"}),(0,r.jsx)("option",{value:"bySpecTags",children:"By spec tags"}),(0,r.jsx)("option",{value:"byOperationsTags",children:"By operations tags"})]})]})]})]}),(0,r.jsxs)("details",{children:[(0,r.jsx)("summary",{className:o,children:"AsyncAPI \u2014 Operation labels"}),(0,r.jsx)("div",{className:i,children:[["Publish",J,e=>{Y(e),eo({publishLabel:e})},"Publish"],["Subscribe",G,e=>{Q(e),eo({subscribeLabel:e})},"Subscribe"],["Send",X,e=>{Z(e),eo({sendLabel:e})},"Send"],["Receive",ee,e=>{ea(e),eo({receiveLabel:e})},"Receive"],["Request",et,e=>{er(e),eo({requestLabel:e})},"Request"],["Reply",es,e=>{en(e),eo({replyLabel:e})},"Reply"]].map(([e,a,t,s])=>(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{className:u,children:e}),(0,r.jsx)("input",{className:"textInput_u1sD",type:"text",value:a,placeholder:s,onChange:e=>t(e.target.value)})]},e))})]})]})]})}},78791(e,a,t){"use strict";t.d(a,{t:()=>l});var r=t(12965),s=t(96540),n=t(74848),o=t(4288),i=t(96008);function l({content:e,showValidation:a=!1,showConnection:t=!1,className:c,theme:d}){let p=(0,s.useId)(),{setTheme:u}=(0,o.l)(),h=c?.split(/\s+/).includes("dark")??!1;(0,s.useEffect)(()=>{o._.getState().setRawJson(e)},[e]),(0,s.useEffect)(()=>{u(h?"dark":"light")},[h,u]);let b=d?(0,r.t)("a2a-root",p,d):null;return(0,n.jsxs)("div",{"data-renderer-id":p,className:"h-full",children:[b&&(0,n.jsx)("style",{children:b}),(0,n.jsx)(i.Bc,{readOnly:!0,showValidation:a,showConnection:t})]})}},3905(e,a,t){"use strict";t.d(a,{n:()=>d,t:()=>k});var r=t(12965),s=t(96540),n=t(29152),o=t(74848),i=t(13406),l=t(85096),c={version:"",configs:[],rootFields:{},getDocumentationUrl(e){return(this.configs.find(a=>a.extensions?.[e])??this.configs.find(a=>a.prefixStartsWith&&e.startsWith(a.prefixStartsWith)))?.documentationUrl?.(e,{version:this.version})}};function d({attributeName:e}){let a=c.getDocumentationUrl(e);return a?(0,o.jsx)("a",{href:a,style:{marginLeft:4,marginTop:4},target:"_blank",rel:"noreferrer",title:"View in AsyncAPI Specification",children:(0,o.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",children:(0,o.jsx)("path",{d:"M10.604 1h4.146a.25.25 0 01.25.25v4.146a.25.25 0 01-.427.177L13.03 4.03 9.28 7.78a.75.75 0 01-1.06-1.06l3.75-3.75-1.543-1.543A.25.25 0 0110.604 1zM3.75 2A1.75 1.75 0 002 3.75v8.5c0 .966.784 1.75 1.75 1.75h8.5A1.75 1.75 0 0014 12.25v-3.5a.75.75 0 00-1.5 0v3.5a.25.25 0 01-.25.25h-8.5a.25.25 0 01-.25-.25v-8.5a.25.25 0 01.25-.25h3.5a.75.75 0 000-1.5h-3.5z"})})}):null}function p({name:e,label:a}){return(0,o.jsxs)("div",{className:"asyncapi-attr-label",children:[a," ",(0,o.jsx)(d,{attributeName:e})]})}function u(e){if(null==e)return(0,o.jsx)("span",{className:"asyncapi-attr-placeholder",children:"\u2014"});if("boolean"==typeof e)return(0,o.jsx)("span",{children:e?"Yes":"No"});if("number"==typeof e)return(0,o.jsx)("span",{children:e});if(Array.isArray(e))return(0,o.jsx)("ul",{className:"asyncapi-attr-list",children:e.map((e,a)=>(0,o.jsx)("li",{children:u(e)},a))});if("object"==typeof e)return(0,o.jsx)("dl",{className:"asyncapi-attr-obj",children:Object.entries(e).map(([e,a])=>(0,o.jsxs)("div",{className:"asyncapi-attr-obj-row",children:[(0,o.jsxs)("dt",{className:"asyncapi-attr-obj-key",children:[e,":"]})," ",(0,o.jsx)("dd",{className:"asyncapi-attr-obj-val",children:u(a)})]},e))});let a=String(e);return/[*_`[\]#]/.test(a)?(0,o.jsx)(n.oz,{children:a}):(0,o.jsx)("span",{children:a})}function h(e){let a=e.valueLinks?.[e.value];return(0,o.jsxs)("div",{className:"asyncapi-attr-row",children:[(0,o.jsx)(p,{name:e.name,label:e.label}),(0,o.jsx)("p",{className:"asyncapi-attr-value",children:a?(0,o.jsx)("a",{href:a,rel:"noreferrer noopener",target:"_blank",className:"asyncapi-attr-link",children:e.value}):e.value})]})}function b(e){return(0,o.jsxs)("div",{className:"asyncapi-attr-row",children:[(0,o.jsx)(p,{name:e.name,label:e.label}),(0,o.jsx)("p",{className:"asyncapi-attr-value",children:e.value?"Yes":"No"})]})}function f(e){return(0,o.jsxs)("div",{className:"asyncapi-attr-row",children:[(0,o.jsx)(p,{name:e.name,label:e.label}),(0,o.jsx)("p",{className:"asyncapi-attr-value",children:e.value})]})}function m(e){return(0,o.jsxs)("div",{className:"asyncapi-attr-row",children:[(0,o.jsx)(p,{name:e.name,label:e.label}),(0,o.jsx)("div",{className:"asyncapi-attr-value",children:(0,o.jsx)("ul",{className:"asyncapi-attr-list",children:e.value.map((e,a)=>(0,o.jsx)("li",{children:u(e)},a))})})]})}function y(e){return(0,o.jsxs)("div",{className:"asyncapi-attr-row",children:[(0,o.jsx)(p,{name:e.name,label:e.label}),(0,o.jsx)("div",{className:"asyncapi-attr-value",children:u(e.value)})]})}function x(e){let a=e.callback(e.value);return(0,o.jsxs)("div",{className:"asyncapi-attr-row",children:[(0,o.jsx)(p,{name:e.name,label:e.label}),(0,o.jsx)("p",{className:"asyncapi-attr-value",children:a?(0,o.jsx)("a",{href:a,rel:"noreferrer noopener",target:"_blank",className:"asyncapi-attr-link",children:String(e.value)}):String(e.value)})]})}function g(e,a,t){return a&&"component"in a?a.component:function({propertyValue:r}){var s;let n;if(null==r)return null;let i=a&&"label"in a&&a.label?a.label:(s=t.prefixStartsWith,n=e,s&&n.startsWith(s)&&(n=n.slice(s.length)),n.replace(/([a-z])([A-Z])/g,"$1-$2").split("-").filter(Boolean).map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(" "));if(a?.type==="link")return(0,o.jsx)(x,{name:e,label:i,value:r,callback:a.callback});if(a?.type==="boolean"||"boolean"==typeof r)return(0,o.jsx)(b,{name:e,label:i,value:!!r});if(a?.type==="number"||"number"==typeof r)return(0,o.jsx)(f,{name:e,label:i,value:r});if(a?.type==="array"||Array.isArray(r))return Array.isArray(r)?(0,o.jsx)(m,{name:e,label:i,value:r}):null;if(a?.type==="object"||"object"==typeof r)return(0,o.jsx)(y,{name:e,label:i,value:r});let l=a&&"valueLinks"in a?a.valueLinks:void 0;return(0,o.jsx)(h,{name:e,label:i,value:String(r),valueLinks:l})}}var v=new Set(["asyncapi","info","channels","operations","components","servers","tags","id","defaultContentType","externalDocs"]),j=`
.asyncapi-attr-row {
    display: flex;
    border: 1px solid var(--ord-border, #e5e7eb);
    border-radius: calc(var(--ord-radius, 4)*1px);
    margin-top: 8px;
    margin-bottom: 4px;
    font-size: 0.875rem;
    line-height: 1.5;
    overflow: hidden;
}
.asyncapi-attr-label {
    color: var(--ord-foreground, #111);
    width: 20ch;
    min-width: 20ch;
    flex-shrink: 0;
    background: var(--ord-muted, #f3f4f6);
    padding: 8px 10px 8px 16px;
    border-right: 1px solid var(--ord-border, #e5e7eb);
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    font-weight: 400;
}
.asyncapi-attr-value {
    color: var(--ord-muted-foreground, #555);
    padding: 8px;
}
.asyncapi-attr-list {
    margin: 0 2ch;
    list-style: disc;
}
.asyncapi-attr-link {
    text-decoration: none;
    color: var(--ord-primary, #0098ff);
    transition: color 0.1s ease-in-out;
    cursor: pointer;
}
.asyncapi-attr-placeholder {
    color: #999;
}
.asyncapi-attr-obj {
    margin: 0;
    padding-left: 12px;
}
.asyncapi-attr-obj-row {
    margin-bottom: 4px;
}
.asyncapi-attr-obj-key {
    font-weight: 600;
    display: inline;
}
.asyncapi-attr-obj-val {
    display: inline;
    margin: 0;
}

/* Width-adaptive rows: react to the renderer's own available width (container on the
   wrapper above). Below the breakpoint, every row stacks label-above-value simultaneously,
   and the label spans the full width. */
@container asyncapi-attrs (max-width: 520px) {
    .asyncapi-attr-row {
        flex-direction: column;
    }
    .asyncapi-attr-label {
        width: 100%;
        min-width: 0;
        border-right: none;
        border-bottom: 1px solid var(--ord-border, #e5e7eb);
    }
    .asyncapi-attr-value {
        width: 100%;
    }
}
`,S={"--ord-background":"#1e1e1e","--ord-foreground":"#d4d4d4","--ord-card":"#252526","--ord-primary":"#0098ff","--ord-primary-foreground":"#1e1e1e","--ord-muted":"#2d2d30","--ord-muted-foreground":"#969696","--ord-border":"#3e3e42"};function k({content:e,config:a,customAttributes:t,className:n,theme:d}){let p,u,h,b,f,m,y,x,w,N,A,O,D,P,E=(0,s.useId)(),C=n?.split(/\s+/).includes("dark")??!1,$=d??(C?S:null),M=$?(p=$["--ord-background"],u=$["--ord-foreground"],h=$["--ord-secondary"],b=$["--ord-secondary-foreground"],f=$["--ord-muted"],m=$["--ord-muted-foreground"],y=$["--ord-border"],x=$["--ord-primary"],w=$["--ord-primary-foreground"],N=$["--ord-accent"],A=$["--ord-accent-foreground"],O=$["--ord-radius"],D=[],P=`[data-renderer-id="${E}"]`,p&&D.push(`${P} .bg-white { background-color: ${p} !important; }`),u&&D.push(`${P} {color: ${u}; }`),N&&A&&D.push(`${P} .bg-blue-100 { color: ${A}; background-color: ${N}; }`),h&&D.push(`${P} .bg-gray-100 { background-color: ${h} !important; }`),b&&D.push(`${P} .prose, ${P} .text-gray-700 { color: ${b}; }`),f&&D.push(`${P} .bg-gray-200 { background-color: ${f} !important; }`),m&&D.push(`${P} .text-gray-500, ${P} .text-gray-600 { color: ${m} !important; }`),x&&D.push(`${P} .bg-gray-800 { background-color: ${x} !important; }`,`${P} .bg-blue-100 .text-purple-700 { color: ${x}; }`),w&&D.push(`${P} .text-white { color: ${w} !important; }`),h&&D.push(`${P} .bg-gray-400 { background-color: ${h} !important; }`),A&&D.push(`${P} .text-gray-200, ${P} .examples .text-gray-600 { color: ${A} !important; } `),u&&D.push(`${P} .text-gray-800, ${P} .text-gray-900 { color: ${u} !important; }`),y&&D.push(`${P} .border { border-color: ${y}; }`,`${P} .border-b { border-bottom-color: ${y}; }`,`${P} .border-gray-400 { border-color: ${y} !important; }`),O&&D.push(`${P} .rounded, ${P} .prose pre, ${P} .\\32 xl\\:rounded { border-radius: ${O}px; }`,`${P} .rounded:not(.inline-block) { overflow: hidden; }`,`${P} .rounded-tl-none { border-top-left-radius: 0px; }`),D.join("\n")):null,T=(0,s.useMemo)(()=>t??[],[t]),R=void 0!==t,I=(0,s.useMemo)(()=>R?(0,r.i)(e):null,[e,R]),L=(0,s.useMemo)(()=>"string"==typeof I?.asyncapi?I.asyncapi:"",[I]),W=(0,s.useMemo)(()=>{if(!R)return a??{};let e=function(e,a,t){if(c.version=t,c.configs=e,a){let t=e.map(e=>e.prefixStartsWith).filter(Boolean);c.rootFields=t.length?function(e,a){let t={};for(let[r,s]of Object.entries(e))!v.has(r)&&r.startsWith("x-")&&a.some(e=>r.startsWith(e))&&(t[r]=s);return t}(a,t):{}}else c.rootFields={};let r={};for(let t of e){for(let[e,a]of Object.entries(t.extensions??{}))r[e]=g(e,a,t);if(t.prefixStartsWith&&a)for(let e of function(e,a){let t=new Set,r=e=>{if(e&&"object"==typeof e)for(let r of Object.keys(e))r.startsWith(a)&&t.add(r)};r(e),r(e.info);let s=e.channels;if(s)for(let e of Object.values(s)){if(!e||"object"!=typeof e)continue;for(let a of(r(e),["subscribe","publish","send","receive"])){let t=e[a];t&&"object"==typeof t&&(r(t),r(t.message))}let a=e.messages;if(a)for(let e of Object.values(a))r(e)}let n=e.operations;if(n)for(let e of Object.values(n))r(e);let o=e.components;if(o){for(let e of["messages","messageTraits"]){let a=o[e];if(a)for(let e of Object.values(a))r(e)}let e=o.schemas;if(e)for(let a of Object.values(e))r(a);let a=o.channels;if(a)for(let e of Object.values(a))r(e);let t=o.operations;if(t)for(let e of Object.values(t))r(e)}return[...t]}(a,t.prefixStartsWith))r[e]||(r[e]=g(e,void 0,t))}return r}(T,I,L);return{...a,extensions:{...e,...a?.extensions??{}}}},[a,R,T,I,L]),_=(0,s.useMemo)(()=>R?function(e){function a(a){let t=Object.entries(c.rootFields);if(!t.length)return null;let r=t.flatMap(([a,t])=>{let r=c.configs.find(e=>e.extensions?.[a])??c.configs.find(e=>e.prefixStartsWith&&a.startsWith(e.prefixStartsWith))??e[0];if(!r)return[];let n=r.extensions?.[a];return[(0,s.createElement)(g(a,n,r),{key:a,propertyName:a,propertyValue:t,document:void 0,parent:void 0})]});return r.length?(0,s.createElement)("div",null,...r):null}return{name:"sap-root-extensions",version:"1.0.0",install(e){e.registerComponent(l.WN.INFO,a)}}}(T):null,[R,T]),B=`[data-renderer-id="${E}"]`,U=`${B} { container: asyncapi-attrs / inline-size; height: 100%; overflow: auto; scrollbar-gutter: stable; }
${B} :where(h1,h2,h3,h4,p,span,strong,a,li,td,div):not(pre *) { overflow-wrap: anywhere; }`;return(0,o.jsxs)("div",{"data-renderer-id":E,className:n,children:[M&&(0,o.jsx)("style",{children:M}),R&&(0,o.jsx)("style",{children:j}),(0,o.jsx)("style",{children:U}),R&&(0,o.jsx)("style",{children:`[data-renderer-id="${E}"] #introduction .hidden { display: block !important; }`}),!R&&(0,o.jsx)("style",{children:`[data-renderer-id="${E}"] :is(#operations, #messages) div:has(> .flex.py-2 span.Extensions) { display: none; }`}),(0,o.jsx)(i,{schema:e,config:W,plugins:_?[_]:[]})]})}},59625(e,a,t){"use strict";t.d(a,{t:()=>p});var r=t(12965),s=t(96540),n=t(74848),o=t(90580),i=`
.csn-root {
    color: var(--ord-foreground, #1a1a2e);
    background-color: var(--ord-background, #ffffff);
    container: csn / inline-size;
    /* Single font source for the whole renderer so tables, headings, paragraphs and
       custom fields stay consistent (they otherwise inherit the host page's font). */
    font-family: system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
}
/* Host frameworks (e.g. Docusaurus/Infima) set font-family directly on h1-h6, which
   beats inheritance from .csn-root. Re-inherit so headings match the rest of the renderer. */
.csn-root h1,
.csn-root h2,
.csn-root h3,
.csn-root h4,
.csn-root h5,
.csn-root h6 {
    font-family: inherit;
}
.csn-root table {
    border-spacing: 0;
    border-collapse: separate;
    border: solid 1px var(--ord-border, #a6a6a6);
    border-radius: calc(var(--ord-radius, 4)*1px);
    /* display: table overrides Docusaurus/Infima's global "table { display: block }",
       which otherwise breaks table-layout: fixed and the column widths below. */
    display: table;
    width: 100%;
    table-layout: fixed;
    overflow: hidden;
}
.csn-root table th {
    text-align: left;
    background-color: var(--ord-primary, #1a1a2e);
    color: var(--ord-primary-foreground, #fafafa);
    padding: 8px;
    border: 1px solid var(--ord-border, #a6a6a6);
}
.csn-root table td {
    text-align: start;
    padding: 8px;
    align-content: start;
    font-size: 0.875em;
}
.csn-root table td strong {
    font-weight: 500;
}
.csn-root table th:nth-child(1),
.csn-root table td:nth-child(1) {
    width: clamp(10ch, 24cqi, 20ch);
}
.csn-root table th:nth-child(2),
.csn-root table td:nth-child(2) {
    width: clamp(8ch, 19cqi, 16ch);
}
.csn-root table tbody td {
    color: var(--ord-foreground, #636363);
    border: 1px solid var(--ord-border, #dddfe1);
}
.csn-root table tbody tr {
    background-color: var(--ord-card, #f9fafb);
}
.csn-root table tbody tr:nth-child(odd) {
    background-color: var(--ord-background, #ffffff);
}
.csn-root code {
    font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, "Liberation Mono", monospace;
    background-color: var(--ord-code-bg, #cccccc);
    color: var(--ord-code-fg, #333333);
}
.csn-root a {
    color: var(--ord-accent-foreground, #375eab)
}
.csn-root .csn-attr-row {
    display: flex;
    gap: 0;
    margin: 6px 0;
    font-size: 0.875em;
    line-height: 1.5;
    border: 1px solid var(--ord-border, #dddfe1);
    border-radius: 4px;
    overflow: hidden;
}
.csn-root .csn-attr-row + br { display: none; } /* Remove br's afte attribute rows */
.csn-root .csn-attr-label {
    width: 25%;
    min-width: 20ch;
    flex-shrink: 0;
    color: var(--ord-foreground, #1a1a2e);
    background: var(--ord-muted, #f3f4f6);
    padding: 4px 8px;
    display: inline-flex;
    align-items: center;
    gap: 4px;
    border-right: 1px solid var(--ord-border, #dddfe1);
    font-weight: 500;
}
.csn-root .csn-attr-value {
    color: var(--ord-muted-foreground, #6b7280);
    padding: 3px 8px;
}
.csn-root .csn-attr-link {
    color: var(--ord-primary, #375eab);
    text-decoration: none;
}
.csn-root .csn-attr-doclink {
    color: var(--ord-muted-foreground, #6b7280);
    text-decoration: none;
    font-size: 0.8em;
    margin-left: 2px;
}
.csn-root .csn-attr-list {
    display: flex;
    flex-direction: column;
    gap: 2px;
}
.csn-root .csn-attr-list-item {
    display: block;
}
.csn-root .csn-attr-obj {
    display: flex;
    flex-direction: column;
    gap: 2px;
}
.csn-root .csn-attr-kv {
    display: flex;
    gap: 4px;
}
.csn-root .csn-attr-kv-key {
    font-weight: 600;
    color: var(--ord-foreground, #1a1a2e);
}
.csn-root .csn-attr-kv-val {
    color: var(--ord-muted-foreground, #6b7280);
}

/* Width-adaptive attribute rows. Trigger is the renderer's own width (container: csn).
   Root-level annotations sit in <p> and get ~full renderer width, so they only flip to
   vertical when the renderer itself is narrow. Element-level annotations sit in a <td>
   (the Description cell) and only get the 3rd column's width, so they flip much earlier.
   (A real container on the <td> is impossible: size containment is ignored on table cells.) */
@container csn (max-width: 420px) {
    .csn-root p .csn-attr-row {
        flex-direction: column;
    }
    .csn-root p .csn-attr-label {
        width: 100%;
        min-width: 0;
        border-right: none;
        border-bottom: 1px solid var(--ord-border, #dddfe1);
    }
    .csn-root p .csn-attr-value {
        width: 100%;
    }
}
@container csn (max-width: 700px) {
    .csn-root td .csn-attr-row {
        flex-direction: column;
    }
    .csn-root td .csn-attr-label {
        width: 100%;
        min-width: 0;
        border-right: none;
        border-bottom: 1px solid var(--ord-border, #dddfe1);
    }
    .csn-root td .csn-attr-value {
        width: 100%;
    }
}
`;function l(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function c(e,a,t,r){let s=e.ownerDocument.createElement("template");s.innerHTML=r,e.insertBefore(s.content,a);let n=a;for(;n;){let a=n.nextSibling,r=n===t;if(e.removeChild(n),r)break;n=a}}function d(e,a){if(e.nodeType!==Node.TEXT_NODE)return null;let t=(e.textContent??"").replace(/^\s+/,""),r=/^@([\w.]+):\s*$/.exec(t);if(!r||!a||a.nodeType!==Node.ELEMENT_NODE)return null;let s=null;return("CODE"===a.tagName?s=a:"A"===a.tagName&&(s=a.querySelector("code")),s)?{key:`@${r[1]}`,valueNode:a,codeEl:s}:null}function p({content:e,config:a,customAttributes:t,className:u,theme:h}){let[b,f]=(0,s.useState)({kind:"idle"});return(0,s.useEffect)(()=>{let s;if(!e)return void f({kind:"idle"});let n=!1;f({kind:"loading"});try{s=JSON.parse(e)}catch(e){f({kind:"error",message:String(e)});return}let i=t??[],p=void 0!==t,u=p?(0,r.i)(e):null,h=p?function(e){let a={};for(let t of e)for(let[e,r]of Object.entries(t.annotations??{}))if("type"in r&&"link"===r.type&&"callback"in r&&!(e in a)){let t=r.callback;a[e]=e=>t(e)??""}return a}(i):{},b={...a,annotationLinkCallbacks:{...h,...a?.annotationLinkCallbacks}};return(0,o.JF)(s,b).then(e=>{let a=p?function(e,a,t){let r=new Map;for(let e of a){for(let[a,t]of Object.entries(e.annotations??{}))r.has(a)||r.set(a,{def:t,config:e});if(e.prefixStartsWith&&t)for(let a of function(e,a){let t=new Set,r=e=>{if(e&&"object"==typeof e)for(let r of Object.keys(e))r.startsWith(a)&&t.add(r)},s=e.definitions;if(s)for(let e of Object.values(s)){r(e);let a=e?.elements;if(a)for(let e of Object.values(a))r(e)}return[...t]}(t,e.prefixStartsWith))r.has(a)||r.set(a,{def:void 0,config:e})}if(0===r.size)return e;let s=new DOMParser().parseFromString(e,"text/html");for(let e of Array.from(s.querySelectorAll("td, p")))for(let{textNode:a,valueNode:t,codeEl:s,key:n,entry:o}of function(e,a){let t=[],r=Array.from(e.childNodes);for(let e=0;e<r.length-1;e++){let s=d(r[e],r[e+1]);if(!s)continue;let n=a.get(s.key);n&&t.push({textNode:r[e],valueNode:s.valueNode,codeEl:s.codeEl,key:s.key,entry:n})}return t}(e,r)){let r=function(e,a,t,r){var s;let n;if(null==a)return"";let o=t&&!("render"in t)&&"label"in t&&t.label?t.label:(s=r.prefixStartsWith??"@",n=e,s&&n.startsWith(s)&&(n=n.slice(s.length)),n.split(".").filter(Boolean).map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(" \xb7 ")),i=r.documentationUrl?.(e),c=i?` <a href="${l(i)}" class="csn-attr-doclink" target="_blank" rel="noreferrer" title="Documentation">\u{2197}</a>`:"",d=function e(a,t){if(null==a)return"";if(t&&"render"in t)return t.render(a);if(t?.type==="link"&&"callback"in t){let e=t.callback(a),r=l(String(a));return e?`<a href="${l(e)}" class="csn-attr-link" target="_blank" rel="noreferrer">${r}</a>`:r}if(t?.type==="boolean"||"boolean"==typeof a)return a?"Yes":"No";if(t?.type==="number"||"number"==typeof a)return l(String(a));if(t?.type==="array"||Array.isArray(a))return Array.isArray(a)?`<span class="csn-attr-list">${a.map(a=>`<span class="csn-attr-list-item">${e(a,void 0)}</span>`).join("")}</span>`:l(String(a));if(t?.type==="object"||"object"==typeof a&&null!==a){let t=Object.entries(a);return 1===t.length&&"#"===t[0][0]?l(String(t[0][1])):`<span class="csn-attr-obj">${t.map(([a,t])=>`<span class="csn-attr-kv"><span class="csn-attr-kv-key">${l(a)}</span><span class="csn-attr-kv-val">${e(t,void 0)}</span></span>`).join("")}</span>`}if(t&&"valueLinks"in t&&t.valueLinks){let e=t.valueLinks[String(a)],r=l(String(a));return e?`<a href="${l(e)}" class="csn-attr-link" target="_blank" rel="noreferrer">${r}</a>`:r}return l(String(a))}(a,t);return d?`<span class="csn-attr-row"><span class="csn-attr-label">${l(o)}${c}</span><span class="csn-attr-value">${d}</span></span>`:""}(n,function(e){try{return JSON.parse(e)}catch{return e}}(s.textContent??""),o.def,o.config);r&&c(e,a,t,r)}return s.body.innerHTML}(e,i,u):function(e){let a=new DOMParser().parseFromString(e,"text/html");for(let e of Array.from(a.querySelectorAll("td, p"))){let a=Array.from(e.childNodes),t=[];for(let e=0;e<a.length-1;e++){let r=d(a[e],a[e+1]);r&&t.push({textNode:a[e],valueNode:r.valueNode,br:function(e){let a=e.previousSibling;return a&&a.nodeType===Node.TEXT_NODE&&!(a.textContent??"").trim()&&(a=a.previousSibling),a&&a.nodeType===Node.ELEMENT_NODE&&"BR"===a.tagName?a:null}(a[e])})}for(let{textNode:a,valueNode:r,br:s}of t)c(e,a,r,""),s&&s.parentNode===e&&e.removeChild(s)}return a.body.innerHTML}(e);n||f({kind:"ready",html:a})}).catch(e=>{n||f({kind:"error",message:String(e)})}),()=>{n=!0}},[e,a,t]),(0,n.jsxs)("div",{className:`csn-root${u?` ${u}`:""}`,style:h,children:[(0,n.jsx)("style",{children:i}),"ready"===b.kind&&(0,n.jsx)("div",{className:"p-4",dangerouslySetInnerHTML:{__html:b.html}}),"error"===b.kind&&(0,n.jsxs)("div",{children:[(0,n.jsx)("h1",{children:"Invalid CSN"}),(0,n.jsx)("div",{children:b.message})]})]})}},5792(e,a,t){"use strict";t.d(a,{t:()=>l});var r=t(12965),s=t(96540),n=t(74848),o=t(85240),i=t(91604);function l({content:e,showValidation:a=!1,className:t,theme:c}){let d=(0,s.useId)(),{setTheme:p}=(0,o.E)(),u=t?.split(/\s+/).includes("dark")??!1;(0,s.useEffect)(()=>{o.S.getState().setRawJson(e)},[e]),(0,s.useEffect)(()=>{p(u?"dark":"light")},[u,p]);let h=c?(0,r.t)("mcp-root",d,c):null;return(0,n.jsxs)("div",{"data-renderer-id":d,className:"h-full",children:[h&&(0,n.jsx)("style",{children:h}),(0,n.jsx)(i.t,{readOnly:!0,showValidation:a})]})}},7757(e,a,t){"use strict";t.d(a,{n:()=>u,t:()=>$});var r=t(12965),s=t(96540),n=t(30897),o=t(29152),i=t(74848),l=t(98207),c={version:"",configs:[],getDocumentationUrl(e){return(this.configs.find(a=>a.extensions?.[e])??this.configs.find(a=>a.prefixStartsWith&&e.startsWith(a.prefixStartsWith)))?.documentationUrl?.(e,{version:this.version})}},d=["get","put","post","delete","options","head","patch","trace"],p="x-sap-schema-attrs";function u({attributeName:e}){let a=c.getDocumentationUrl(e);return a?(0,i.jsx)("a",{href:a,style:{marginLeft:4},target:"_blank",rel:"noreferrer",title:"View in OpenAPI Specification",children:(0,i.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",children:(0,i.jsx)("path",{d:"M10.604 1h4.146a.25.25 0 01.25.25v4.146a.25.25 0 01-.427.177L13.03 4.03 9.28 7.78a.75.75 0 01-1.06-1.06l3.75-3.75-1.543-1.543A.25.25 0 0110.604 1zM3.75 2A1.75 1.75 0 002 3.75v8.5c0 .966.784 1.75 1.75 1.75h8.5A1.75 1.75 0 0014 12.25v-3.5a.75.75 0 00-1.5 0v3.5a.25.25 0 01-.25.25h-8.5a.25.25 0 01-.25-.25v-8.5a.25.25 0 01.25-.25h3.5a.75.75 0 000-1.5h-3.5z"})})}):null}function h({name:e,label:a}){return(0,i.jsxs)("div",{className:"sap-api-label",children:[a," ",(0,i.jsx)(u,{attributeName:e})]})}function b(e){let a=e.valueLinks?.[e.value];return(0,i.jsxs)("div",{className:"sap-api-container",children:[(0,i.jsx)(h,{name:e.name,label:e.label}),(0,i.jsx)("p",{className:"sap-api-value",children:a?(0,i.jsx)("a",{href:a,rel:"noreferrer noopener",target:"_blank",className:"sap-api-link",children:e.value}):e.value})]})}function f(e){return(0,i.jsxs)("div",{className:"sap-api-container",children:[(0,i.jsx)(h,{name:e.name,label:e.label}),(0,i.jsx)("p",{className:"sap-api-value",children:e.value?"Yes":"No"})]})}function m(e){return(0,i.jsxs)("div",{className:"sap-api-container",children:[(0,i.jsx)(h,{name:e.name,label:e.label}),(0,i.jsx)("p",{className:"sap-api-value",children:e.value})]})}function y(e){return(0,i.jsxs)("div",{className:"sap-api-container",children:[(0,i.jsx)(h,{name:e.name,label:e.label}),(0,i.jsx)("div",{className:"sap-api-value",children:(0,i.jsx)("ul",{className:"sap-api-list",children:e.value.map((e,a)=>(0,i.jsx)("li",{children:x(e)},a))})})]})}function x(e){if(null==e)return(0,i.jsx)("span",{className:"sap-api-placeholder",children:"\u2014"});if("boolean"==typeof e)return(0,i.jsx)("span",{children:e?"Yes":"No"});if("number"==typeof e)return(0,i.jsx)("span",{children:e});if(Array.isArray(e))return(0,i.jsx)("ul",{className:"sap-api-list",children:e.map((e,a)=>(0,i.jsx)("li",{children:x(e)},a))});if("object"==typeof e)return(0,i.jsx)("dl",{className:"sap-api-obj",children:Object.entries(e).map(([e,a])=>(0,i.jsxs)("div",{className:"sap-api-obj-row",children:[(0,i.jsxs)("dt",{className:"sap-api-obj-key",children:[e,":"]})," ",(0,i.jsx)("dd",{className:"sap-api-obj-val",children:x(a)})]},e))});let a=String(e);return/[*_`[\]#]/.test(a)?(0,i.jsx)(o.oz,{children:a}):(0,i.jsx)("span",{children:a})}function g(e){return(0,i.jsxs)("div",{className:"sap-api-container",children:[(0,i.jsx)(h,{name:e.name,label:e.label}),(0,i.jsx)("div",{className:"sap-api-value",children:x(e.value)})]})}function v(e){let a=e.callback(e.value);return(0,i.jsxs)("div",{className:"sap-api-container",children:[(0,i.jsx)(h,{name:e.name,label:e.label}),(0,i.jsx)("p",{className:"sap-api-value",children:a?(0,i.jsx)("a",{href:a,rel:"noreferrer noopener",target:"_blank",className:"sap-api-link",children:String(e.value)}):String(e.value)})]})}function j(e,a,t){return a&&"component"in a?a.component:r=>{var s;let n,o=function(e,a){if(e&&"object"==typeof e)return e[a.replace(/-./g,e=>e[1].toUpperCase())]}(r,e);if(null==o)return null;let l=a&&"label"in a&&a.label?a.label:(s=t.prefixStartsWith,n=e,s&&n.startsWith(s)&&(n=n.slice(s.length)),n.split("-").filter(Boolean).map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(" "));if(a?.type==="link"&&"callback"in a)return(0,i.jsx)(v,{name:e,label:l,value:o,callback:a.callback});if(a?.type==="boolean"||"boolean"==typeof o)return(0,i.jsx)(f,{name:e,label:l,value:!!o});if(a?.type==="number"||"number"==typeof o)return(0,i.jsx)(m,{name:e,label:l,value:o});if(a?.type==="array"||Array.isArray(o))return Array.isArray(o)?(0,i.jsx)(y,{name:e,label:l,value:o}):null;if(a?.type==="object"||"object"==typeof o)return(0,i.jsx)(g,{name:e,label:l,value:o});let c=a&&"valueLinks"in a?a.valueLinks:void 0;return(0,i.jsx)(b,{name:e,label:l,value:String(o),valueLinks:c})}}var S={"--ord-background":["--scalar-background-1"],"--ord-foreground":["--scalar-color-1"],"--ord-secondary":["--scalar-background-2"],"--ord-secondary-foreground":["--scalar-color-2"],"--ord-muted":["--scalar-background-3"],"--ord-muted-foreground":["--scalar-color-3"],"--ord-primary":["--scalar-color-accent","--scalar-button-1","--scalar-link-color","--scalar-button-1-hover","--scalar-link-color-hover"],"--ord-primary-foreground":["--scalar-button-1-color"],"--ord-border":["--scalar-border-color"],"--ord-destructive":["--scalar-color-red","--scalar-color-danger"],"--ord-success":["--scalar-color-green"],"--ord-warning":["--scalar-color-orange"],"--ord-radius":["--scalar-radius","--scalar-radius-lg"]},k={"--ord-sidebar":["--scalar-sidebar-background-1"],"--ord-sidebar-foreground":["--scalar-sidebar-color-1"],"--ord-sidebar-primary":["--scalar-sidebar-background-2"],"--ord-sidebar-primary-foreground":["--scalar-sidebar-color-2","--scalar-sidebar-search-color"],"--ord-sidebar-accent":["--scalar-sidebar-item-active-background","--scalar-sidebar-item-hover-background","--scalar-sidebar-search-background"],"--ord-sidebar-accent-foreground":["--scalar-sidebar-color-active","--scalar-sidebar-item-hover-color"],"--ord-sidebar-border":["--scalar-sidebar-border-color","--scalar-sidebar-search-border-color"]};function w(e,a){return"--ord-radius"===e?`${a}px`:a}var N={selector:".scalar-app",map(e){let a={};for(let[t,r]of Object.entries(e)){let e=S[t];if(!e)continue;let s=w(t,r);for(let t of e)a[t]=s}return a}},A={selector:".scalar-app .t-doc__sidebar",map(e){let a={};for(let[t,r]of Object.entries(e)){let e=k[t];if(e)for(let t of e)a[t]=r}return a}},O={selector:".scalar-app .dark-mode, .scalar-app.dark-mode, .scalar-app .light-mode, .scalar-app.light-mode",map(e){let a={};for(let[t,r]of Object.entries(e)){let e=S[t];if(!e)continue;let s=w(t,r);for(let t of e)a[t]=s}return a}},D=["--ord-hljs-attr","--ord-hljs-string","--ord-hljs-number","--ord-hljs-function","--ord-hljs-literal","--ord-hljs-punctuation","--ord-hljs-keyword","--ord-hljs-comment"],P={selector:".scalar-app",map(e){let a={};for(let t of D)t in e&&(a[t]=e[t]);return a}},E={selector:".scalar-app, #headlessui-portal-root",map(e){let a={};for(let[t,r]of Object.entries(e)){let e=S[t];if(!e)continue;let s=w(t,r);for(let t of e)a[t]=s}return a}},C=`
.sap-api-container {
    display: flex;
    flex-wrap: wrap;
    container-type: inline-size;
    border: var(--scalar-border-width) solid var(--scalar-border-color);
    border-radius: var(--scalar-radius-lg);
    margin-top: 8px;
    font-size: var(--scalar-small);
    line-height: var(--scalar-line-height-3);
    overflow: hidden;
}

.sap-api-label {
    color: var(--scalar-color-1);
    width: 30%;
    min-width: 20ch;
    flex-shrink: 0;
    background: var(--scalar-background-2);
    padding: 6px 9px 6px 12px;
    border-right: var(--scalar-border-width) solid var(--scalar-border-color);
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    font-weight: 500;
}

.sap-api-label--root {
    min-width: 20ch;
}

.sap-api-value {
    color: var(--scalar-color-2);
    padding: 8px;
    flex: 1 1 0;
    min-width: 0;
}

.sap-api-value--root {
    flex: 1 1 0;
    min-width: 0;
}

.sap-api-list {
    margin: 0 2ch;
    list-style: disc;
}

.sap-api-link {
    text-decoration: none;
    color: var(--scalar-link-color);
    transition: color 0.1s ease-in-out;
    cursor: pointer;
}

.sap-api-ord-id {
    display: flex;
    align-items: flex-start;
    gap: 8px;
}

.sap-api-ord-id-text {
    flex: 1 1 auto;
    min-width: 0;
    word-break: break-all;
}

.sap-api-copy-btn {
    flex-shrink: 0;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 1em;
    line-height: 1;
    padding: 4px;
    color: var(--scalar-color-2);
    background: var(--scalar-background-2);
    border: var(--scalar-border-width) solid var(--scalar-border-color);
    border-radius: var(--scalar-radius);
    transition: background 0.1s ease-in-out, color 0.1s ease-in-out;
}

.sap-api-copy-btn:hover {
    background: var(--scalar-background-3);
    color: var(--scalar-color-1);
}

.sap-api-placeholder {
    color: #999;
}

.sap-api-obj {
    margin: 0;
    padding-left: 12px;
}

.sap-api-obj-row {
    margin-bottom: 4px;
}

.sap-api-obj-key {
    font-weight: 600;
    display: inline;
}

.sap-api-obj-val {
    display: inline;
    margin: 0;
}

/* Width-adaptive rows: react to the row's own available width (container-type above).
   When the row is narrow, label and value wrap onto separate lines (label above value). */
@container (max-width: 420px) {
    .sap-api-label,
    .sap-api-label--root {
        flex-basis: 100%;
        width: 100%;
        min-width: 0;
        border-right: none;
        border-bottom: var(--scalar-border-width) solid var(--scalar-border-color);
    }
    .sap-api-value,
    .sap-api-value--root {
        flex-basis: 100%;
        width: 100%;
    }
}

a {
    text-decoration: none;
    color: var(--sapLinkColor);
    transition: color 0.1s ease-in-out;
    cursor: pointer;
}
a:hover {
    text-decoration: underline;
}

/* Keyboard key: use Scalar background instead of Infima colors */
.scalar-app kbd {
    background: var(--scalar-background-1);
    color: var(--scalar-color-1);
    border: 1px solid var(--scalar-border-color);
}

/* Syntax highlighting \u{2014} override --scalar-color-* with ThemeEditor --ord-hljs-* tokens */
.scalar-app .hljs-attr,
.scalar-app .hljs-attribute { color: var(--ord-hljs-attr); }

.scalar-app .hljs-string,
.scalar-app .hljs-regexp,
.scalar-app .hljs-subst,
.scalar-app .hljs-doctag,
.scalar-app .hljs-bullet,
.scalar-app .hljs-link,
.scalar-app .hljs-meta,
.scalar-app .hljs-symbol { color: var(--ord-hljs-string); }

.scalar-app .hljs-number,
.scalar-app .hljs-selector-attr,
.scalar-app .hljs-selector-pseudo,
.scalar-app .hljs-built_in { color: var(--ord-hljs-number); }

.scalar-app .hljs-title.function_ { color: var(--ord-hljs-function); }

.scalar-app .hljs-addition,
.scalar-app .hljs-literal,
.scalar-app .hljs-selector-tag,
.scalar-app .hljs-type { color: var(--ord-hljs-literal); }

.scalar-app .hljs-keyword { color: var(--ord-hljs-keyword); }

.scalar-app .hljs-comment,
.scalar-app .hljs-quote { color: var(--ord-hljs-comment); }

.scalar-app .hljs-punctuation { color: var(--ord-hljs-punctuation); }

/* Hide the "x-sap-schema-attrs" property heading row \u{2014} the row exists only to
   carry schema-level extension components; the key name should not be visible. */
.scalar-app .property:has(.sap-schema-attrs-block) {
    padding-top: 2px;
}
.scalar-app .property:has(.sap-schema-attrs-block) .property-heading {
    display: none;
}

/* Override Scalar's sidebar height variable so the <aside> uses our measured container height
   instead of Scalar's default 100dvh (which breaks when embedded in Docusaurus/non-fullscreen). */
.scalar-app {
    --refs-sidebar-height: calc(var(--scalar-container-height, 100dvh) - var(--refs-header-height, 0px));
}
`;function $({content:e,customAttributes:a,className:t,theme:o}){let u,h,b=(0,s.useId)(),f=(0,s.useRef)(null),m=t?.split(/\s+/).includes("dark")??!1,y=(0,s.useMemo)(()=>a??[],[a]),x=void 0!==a;(0,s.useEffect)(()=>{let e=f.current;if(!e)return;let a=new ResizeObserver(([a])=>{e.style.setProperty("--scalar-container-height",`${a.contentRect.height}px`)});return a.observe(e),()=>{a.disconnect(),window.location.hash&&history.replaceState(null,"",window.location.pathname+window.location.search)}},[]);let g=(0,s.useMemo)(()=>{if(!x)return"";let a=(0,r.i)(e);return a?y.flatMap(e=>(function(e,a){let t=[];for(let[r,s]of Object.entries(e))r.startsWith(a)&&t.push([r,s]);let r=e.paths;if(r){for(let[e,s]of Object.entries(r))if(s&&"object"==typeof s)for(let r of d){let n=s[r];if(n&&"object"==typeof n)for(let[s,o]of Object.entries(n))s.startsWith(a)&&t.push([`paths.${e}.${r}.${s}`,o])}}let s=e.components?.schemas;if(s)for(let[e,r]of Object.entries(s)){if(!r||"object"!=typeof r)continue;for(let[s,n]of Object.entries(r))s.startsWith(a)&&t.push([`components.schemas.${e}.${s}`,n]);let s=r.properties;if(s){for(let[r,n]of Object.entries(s))if(n&&"object"==typeof n)for(let[s,o]of Object.entries(n))s.startsWith(a)&&t.push([`components.schemas.${e}.properties.${r}.${s}`,o])}}return t})(a,e.prefixStartsWith??"").map(([e,a])=>`${e}=${JSON.stringify(a)}`)).join("|"):""},[e,x,y]),v=(0,s.useMemo)(()=>{let a;c.version=(a=(0,r.i)(e))?"openapi"in a&&a.openapi&&"string"==typeof a.openapi?a.openapi.substring(0,3):"swagger"in a&&a.swagger&&"string"==typeof a.swagger?"2.0":"":"",c.configs=x?y:[];let t=(0,r.i)(e),n=y.map(e=>e.prefixStartsWith).filter(Boolean);return{content:x&&t&&n.length?function(e,a){let t=e.components?.schemas;if(!t)return e;let r={},s=!1;for(let[e,n]of Object.entries(t)){if(!n||"object"!=typeof n){r[e]=n;continue}let t={};for(let[e,r]of Object.entries(n))a.some(a=>e.startsWith(a))&&(t[e]=r);if(0===Object.keys(t).length){r[e]=n;continue}s=!0,r[e]={...n,properties:{[p]:{[p]:t},...n.properties}}}return s?{...e,components:{...e.components,schemas:r}}:e}(t,n):t??e,plugins:x?[function(e,a){let t=new Set;for(let r of a){if(r.extensions)for(let e of Object.keys(r.extensions))t.add(e);if(r.prefixStartsWith&&e)for(let a of function(e,a){let t=new Set;for(let r of Object.keys(e))r.startsWith(a)&&t.add(r);let r=e.paths;if(r){for(let e of Object.values(r))if(e&&"object"==typeof e)for(let r of d){let s=e[r];if(s&&"object"==typeof s)for(let e of Object.keys(s))e.startsWith(a)&&t.add(e)}}let s=e.components?.schemas;if(s)for(let e of Object.values(s)){if(!e||"object"!=typeof e)continue;for(let r of Object.keys(e))r.startsWith(a)&&t.add(r);let r=e.properties;if(r){for(let e of Object.values(r))if(e&&"object"==typeof e)for(let r of Object.keys(e))r.startsWith(a)&&t.add(r)}}return[...t]}(e,r.prefixStartsWith))t.add(a)}let r=[...t].map(e=>{let t=a.find(a=>a.extensions?.[e])??a.find(a=>a.prefixStartsWith&&e.startsWith(a.prefixStartsWith))??a[0],r=t?.extensions?.[e];return{name:e,component:j(e,r,t??{}),renderer:l.N}});return r.push({name:p,component:e=>{if(!e||"object"!=typeof e)return null;let t=e.xSapSchemaAttrs??e["x-sap-schema-attrs"];if(!t||"object"!=typeof t)return null;let r=function(e){let a={};for(let[t,r]of Object.entries(e))a[t.replace(/-./g,e=>e[1].toUpperCase())]=r;return a}(t),n=[];for(let e of Object.keys(t)){if(!e.startsWith("x-"))continue;let t=a.find(a=>a.extensions?.[e])??a.find(a=>a.prefixStartsWith&&e.startsWith(a.prefixStartsWith));if(!t)continue;let s=t.extensions?.[e],o=j(e,s,t)(r);o&&n.push(o)}return 0===n.length?null:(0,s.createElement)("div",{className:"sap-schema-attrs-block"},...n)},renderer:l.N}),()=>({name:"custom-attributes-plugin",extensions:r})}(t,y)]:[],forceDarkModeState:m?"dark":"light",hideDarkModeToggle:!0,hideClientButton:!0,showDeveloperTools:"never"}},[e,m,x,y]);return(0,i.jsxs)("div",{ref:f,"data-renderer-id":b,style:{height:"100%",...o},children:[(0,i.jsx)("style",{children:C}),o&&(0,i.jsx)("style",{children:(u=`[data-renderer-id="${b}"]`,[[N,A,O,P].map(e=>{let a=Object.entries(e.map(o)).map(([e,a])=>`  ${e}: ${a};`).join("\n");return a?`${u} ${e.selector} {
${a}
}`:""}).filter(Boolean).join("\n\n"),!(h=Object.entries(E.map(o)).map(([e,a])=>`  ${e}: ${a};`).join("\n"))?"":`${E.selector} {
${h}
}`].filter(Boolean).join("\n\n"))}),(0,i.jsx)(n.B,{configuration:v},`${m?"dark":"light"}-${x}-${g}`)]})}},83602(e,a,t){"use strict";t.r(a),t.d(a,{A2ARenderer:()=>i.t,AsyncApiRenderer:()=>o.t,CsnRenderer:()=>n.t,McpRenderer:()=>l.t,MetadataRenderer:()=>b,OpenApiRenderer:()=>s.t,createTheme:()=>m,detectMetaType:()=>r.n,extractVersion:()=>r.r,loadObject:()=>r.i,sapAsyncApiAttributesConfig:()=>N,sapCsnAttributesConfig:()=>A,sapOpenApiAttributesConfig:()=>S});var r=t(12965),s=t(7757),n=t(59625),o=t(3905),i=t(78791),l=t(5792),c=t(96540),d=t(29152),p=t(74848),u={openapi:s.t,csn:n.t,asyncapi:o.t,a2a:i.t,mcp:l.t},h={openapi:"OpenAPI",csn:"CSN",asyncapi:"AsyncAPI",a2a:"A2A",mcp:"MCP"};function b({content:e,renderers:a,options:t,type:s,className:n,theme:o}){let i,l=t?.autoDetect!==!1,d=t?.strictTypeCheck!==!1,f=(0,c.useMemo)(()=>s||(l?(0,r.n)(e):"unknown"),[s,l,e]),m=(0,c.useMemo)(()=>s&&e?(0,r.n)(e):null,[s,e]),y=null!==m&&m!==s&&("unknown"!==m||d),x=(0,c.useMemo)(()=>(0,r.r)(f,e),[f,e]),g=h[f],v=(a??u)[f];if(y){let e="unknown"===m?"an unrecognised format":`\u{2018}${h[m]??m}\u{2019}`;i=(0,p.jsxs)("div",{style:{padding:16,fontFamily:"system-ui, sans-serif"},children:[(0,p.jsx)("strong",{children:"Type mismatch:"})," content was detected as ",e," but \u2018",h[s]??s,"\u2019 was specified."]})}else if(v){let a,r,s;i=(0,p.jsx)(v,{content:e,className:n,theme:o,...(a={},s=!1!==(r=t?.customAttributes)?r:void 0,"openapi"===f&&s?.openapi&&(a.customAttributes=s.openapi),"asyncapi"===f&&(t?.asyncapi&&Object.assign(a,{config:t.asyncapi}),s?.asyncapi&&(a.customAttributes=s.asyncapi)),"csn"===f&&(t?.csn&&Object.assign(a,{config:t.csn}),s?.csn&&(a.customAttributes=s.csn)),"a2a"===f&&t?.a2a&&Object.assign(a,t.a2a),"mcp"===f&&t?.mcp&&Object.assign(a,t.mcp),a)})}else i=t?.fallback==="raw"?(0,p.jsx)("pre",{style:{margin:0,padding:16,overflow:"auto",height:"100%"},children:e}):(0,p.jsxs)("div",{style:{padding:16,fontFamily:"system-ui, sans-serif"},children:[(0,p.jsx)("strong",{children:"Unsupported format:"})," No renderer registered for type \u2018",f,"\u2019."]});return(0,p.jsxs)("div",{style:{position:"relative",height:"100%",...o},children:[g&&(0,p.jsxs)("div",{style:{position:"absolute",top:8,right:8,zIndex:10,padding:"2px 8px",borderRadius:4,fontSize:11,fontFamily:"system-ui, sans-serif",lineHeight:"16px",pointerEvents:"none",background:"var(--ord-muted, #e5e7eb)",color:"var(--ord-muted-foreground, #6b7280)"},children:[g,x?` \xb7 ${x}`:""]}),i]})}var f={background:"--ord-background",foreground:"--ord-foreground",primary:"--ord-primary",primaryForeground:"--ord-primary-foreground",secondary:"--ord-secondary",secondaryForeground:"--ord-secondary-foreground",muted:"--ord-muted",mutedForeground:"--ord-muted-foreground",accent:"--ord-accent",accentForeground:"--ord-accent-foreground",destructive:"--ord-destructive",destructiveForeground:"--ord-destructive-foreground",success:"--ord-success",successForeground:"--ord-success-foreground",warning:"--ord-warning",warningForeground:"--ord-warning-foreground",border:"--ord-border",input:"--ord-input",ring:"--ord-ring",card:"--ord-card",cardForeground:"--ord-card-foreground",popover:"--ord-popover",popoverForeground:"--ord-popover-foreground",radius:"--ord-radius"};function m(e){let a={};for(let[t,r]of Object.entries(e))void 0!==r&&(a[f[t]]=r);return a}var y={ACTIVE:"color-mix(in srgb, var(--scalar-color-green) 15%, transparent)",BETA:"color-mix(in srgb, var(--scalar-color-blue) 15%, transparent)",DEPRECATED:"color-mix(in srgb, var(--scalar-color-orange) 15%, transparent)",DECOMMISSIONED:"color-mix(in srgb, var(--scalar-color-red) 15%, transparent)"},x={ACTIVE:"var(--scalar-color-green)",BETA:"var(--scalar-color-blue)",DEPRECATED:"var(--scalar-color-orange)",DECOMMISSIONED:"var(--scalar-color-red)"};function g(){return(0,p.jsxs)("svg",{viewBox:"0 0 24 24",width:"1em",height:"1em",fill:"none",stroke:"currentColor",strokeWidth:"2","aria-hidden":"true",children:[(0,p.jsx)("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2"}),(0,p.jsx)("path",{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"})]})}function v(){return(0,p.jsx)("svg",{viewBox:"0 0 24 24",width:"1em",height:"1em",fill:"none",stroke:"currentColor",strokeWidth:"2","aria-hidden":"true",children:(0,p.jsx)("path",{d:"M20 6 9 17l-5-5"})})}function j(e){return{component:e}}var S={prefixStartsWith:"x-sap-",documentationUrl:(e,{version:a})=>`https://github.com/SAP/openapi-specification/tree/main/sap-schemas/v${a}#${e}`,extensions:{"x-sap-compliance-level":{type:"link",label:"SAP Compliance Level",callback:e=>({"sap:base:v1":"https://github.com/open-resource-discovery/specification/blob/main/docs/spec-extensions/policy-levels/sap-base-v1.md","sap:core:v1":"https://github.com/open-resource-discovery/specification/blob/main/docs/spec-extensions/policy-levels/sap-core-v1.md","sap:core:v2":"https://github.com/open-resource-discovery/specification/blob/main/docs/spec-extensions/policy-levels/sap-core-v1.md"})[String(e)]},"x-sap-shortText":{type:"string",label:"SAP Short Text"},"x-sap-software-min-version":{type:"string",label:"SAP Software Version"},"x-sap-api-type":{type:"string",label:"SAP API Type"},"x-sap-direction":{type:"string",label:"SAP Direction"},"x-sap-ord-id":j(function({xSapOrdId:e}){let[a,t]=(0,c.useState)(!1);return e?(0,p.jsxs)("div",{className:"sap-api-container",children:[(0,p.jsxs)("div",{className:"sap-api-label",children:["ORD ID ",(0,p.jsx)(s.n,{attributeName:"x-sap-ord-id"})]}),(0,p.jsxs)("div",{className:"sap-api-value sap-api-ord-id",children:[(0,p.jsx)("span",{className:"sap-api-ord-id-text",children:e}),(0,p.jsx)("button",{type:"button",className:"sap-api-copy-btn",onClick:()=>{navigator.clipboard?.writeText(e).then(()=>{t(!0),setTimeout(()=>t(!1),1500)})},"aria-label":"Copy ORD ID",title:a?"Copied":"Copy",children:a?(0,p.jsx)(v,{}):(0,p.jsx)(g,{})})]})]}):null}),"x-sap-operation-intent":{type:"string",label:"SAP Operation Intent"},"x-sap-odm-oid":{type:"string",label:"ODM OID"},"x-sap-odm-oid-reference-entity-name":{type:"string",label:"ODM OID Reference Entity Name"},"x-sap-precision":{type:"number",label:"SAP Precision"},"x-sap-scale":{type:"number",label:"SAP Scale"},"x-sap-root-entity":{type:"boolean",label:"SAP Root Entity"},"x-sap-dpp-entity-semantics":{type:"string",label:"SAP DPP: Entity Semantics"},"x-sap-dpp-data-subject-role":{type:"string",label:"SAP DPP: Data Subject Role"},"x-sap-dpp-data-subject-role-description":{type:"string",label:"SAP DPP: Data Subject Role Description"},"x-sap-dpp-field-semantics":{type:"string",label:"SAP DPP: Field Semantics"},"x-sap-dpp-is-potentially-personal":{type:"boolean",label:"SAP DPP: Potentially Personal"},"x-sap-dpp-is-potentially-sensitive":{type:"boolean",label:"SAP DPP: Potentially Sensitive"},"x-sap-ext-overview":j(function(e){if(!("object"==typeof e&&null!==e&&"xSapExtOverview"in e&&Array.isArray(e.xSapExtOverview)&&e.xSapExtOverview.every(e=>"object"==typeof e&&null!==e&&"name"in e&&"values"in e&&"string"==typeof e.name&&("string"==typeof e.values||!!Array.isArray(e.values)&&(!!e.values.every(e=>"string"==typeof e)||e.values.every(e=>"object"==typeof e&&null!==e&&"text"in e&&"string"==typeof e.text&&"format"in e&&("plain"===e.format||"markdown"===e.format)))))))return null;let{xSapExtOverview:a}=e;return(0,p.jsxs)("div",{className:"sap-api-container",children:[(0,p.jsxs)("div",{className:"sap-api-label sap-api-label--root",children:["SAP Extensibility Overview ",(0,p.jsx)(s.n,{attributeName:"x-sap-ext-overview"})]}),(0,p.jsx)("div",{className:"sap-api-value sap-api-value--root",children:a.map(e=>(0,p.jsxs)("div",{children:[(0,p.jsx)("strong",{children:e.name}),(0,p.jsx)("ul",{className:"sap-api-list",children:"string"==typeof e.values?(0,p.jsx)("li",{children:e.values}):e.values.map(e=>"string"==typeof e?(0,p.jsx)("li",{children:e},e):(0,p.jsx)("li",{children:"plain"===e.format?e.text:(0,p.jsx)(d.oz,{children:e.text})},e.text))})]},e.name))})]})}),"x-sap-stateInfo":j(function({xSapStateInfo:e}){if(!e)return null;let a=e.state?.toUpperCase(),t=(0,p.jsx)("span",{style:{display:"inline-block",borderRadius:"10px",padding:"0 6px",background:y[a]||"",color:x[a]||""},children:a}),r=new Intl.DateTimeFormat("en-GB",{dateStyle:"long"}),n=e=>{let a=new Date(e);return isNaN(a.getTime())?e:r.format(a)};return(0,p.jsxs)("div",{className:"sap-api-container",children:[(0,p.jsxs)("div",{className:"sap-api-label",children:["API State ",(0,p.jsx)(s.n,{attributeName:"x-sap-stateInfo"})]}),(0,p.jsxs)("div",{className:"sap-api-value",children:[t,e.deprecationDate&&(0,p.jsxs)("div",{children:["Deprecated on ",n(e.deprecationDate)]}),e.decommissionedDate&&(0,p.jsxs)("div",{children:["Decommissioned on ",n(e.decommissionedDate)]}),e.successorApi&&(0,p.jsxs)("div",{children:["Successor API: ",(0,p.jsx)("a",{href:e.successorApi,target:"_blank",rel:"noreferrer",className:"sap-api-link",children:e.successorApi})]})]})]})}),"x-sap-extensible":{type:"object",label:"SAP Extensible"},"x-sap-deprecated-operation":j(function({xSapDeprecatedOperation:e}){let a=new Intl.DateTimeFormat("en-GB",{dateStyle:"long"}).format(new Date(e.deprecationDate));return(0,p.jsxs)("div",{className:"sap-api-container",children:[(0,p.jsxs)("div",{className:"sap-api-label",children:["SAP Deprecated Operation ",(0,p.jsx)(s.n,{attributeName:"x-sap-deprecated-operation"})]}),(0,p.jsxs)("div",{className:"sap-api-value",children:["Deprecated on ",a," ",(0,p.jsx)("br",{}),e.successorOperationRef||e.successorOperationId?(0,p.jsxs)(p.Fragment,{children:[" Successor ",e.successorOperationRef?(0,p.jsx)("a",{href:e.successorOperationRef,rel:"noreferrer, noopener",children:e.successorOperationRef}):null,e.successorOperationId?(0,p.jsx)("span",{children:e.successorOperationId}):null]}):null]})]})}),"x-sap-odm-entity-name":j(function({xSapOdmEntityName:e}){return(0,p.jsxs)("div",{className:"sap-api-container",children:[(0,p.jsxs)("div",{className:"sap-api-label",children:["ODM entity name ",(0,p.jsx)(s.n,{attributeName:"x-sap-odm-entity-name"})]}),(0,p.jsx)("div",{className:"sap-api-value",children:e})]})}),"x-sap-odm-semantic-key":j(function({xSapOdmSemanticKey:e}){return(0,p.jsxs)("div",{className:"sap-api-container",children:[(0,p.jsxs)("div",{className:"sap-api-label",children:["ODM Semantic Key ",(0,p.jsx)(s.n,{attributeName:"x-sap-odm-semantic-key"})]}),(0,p.jsx)("div",{className:"sap-api-value",children:e.map(e=>(0,p.jsxs)("div",{children:[(0,p.jsx)("strong",{children:e.name}),(0,p.jsx)("ul",{className:"sap-api-list",children:e.values.map(e=>(0,p.jsx)("li",{children:e},e))})]},e.name))})]})})}},k={ACTIVE:"color-mix(in srgb, #22c55e 15%, transparent)",BETA:"color-mix(in srgb, #3b82f6 15%, transparent)",DEPRECATED:"color-mix(in srgb, #f97316 15%, transparent)",DECOMMISSIONED:"color-mix(in srgb, #ef4444 15%, transparent)"},w={ACTIVE:"#16a34a",BETA:"#2563eb",DEPRECATED:"#ea580c",DECOMMISSIONED:"#dc2626"},N={prefixStartsWith:"x-sap-",documentationUrl:e=>`https://github.com/SAP/asyncapi-specification#${e}`,extensions:{"x-sap-catalog-spec-version":{type:"string",label:"SAP Catalog Spec Version"},"x-sap-application-namespace":{type:"string",label:"SAP Application Namespace"},"x-sap-ord-id":{type:"string",label:"ORD ID"},"x-sap-shortText":{type:"string",label:"SAP Short Text"},"x-sap-software-min-version":{type:"string",label:"SAP Software Version"},"x-sap-stateInfo":{component:function({propertyName:e,propertyValue:a}){if(!a||"object"!=typeof a)return null;let t=a.state?.toUpperCase(),r=(0,p.jsx)("span",{style:{display:"inline-block",borderRadius:"10px",padding:"0 6px",background:k[t]||"",color:w[t]||""},children:t}),s=new Intl.DateTimeFormat("en-GB",{dateStyle:"long"}),n=e=>{let a=new Date(e);return isNaN(a.getTime())?e:s.format(a)};return(0,p.jsxs)("div",{className:"asyncapi-attr-row",children:[(0,p.jsxs)("div",{className:"asyncapi-attr-label",children:["API State ",(0,p.jsx)(o.n,{attributeName:e})]}),(0,p.jsxs)("div",{className:"asyncapi-attr-value",children:[r,a.deprecationDate&&(0,p.jsxs)("div",{children:["Deprecated on ",n(a.deprecationDate)]}),a.decommissionedDate&&(0,p.jsxs)("div",{children:["Decommissioned on ",n(a.decommissionedDate)]}),a.link&&(0,p.jsxs)("div",{children:["More info: ",(0,p.jsx)("a",{href:a.link,target:"_blank",rel:"noreferrer",className:"asyncapi-attr-link",children:a.link})]})]})]})}},"x-sap-event-spec-version":{type:"string",label:"SAP Event Spec Version"},"x-sap-event-source":{type:"string",label:"SAP Event Source"},"x-sap-event-source-parameters":{type:"object",label:"SAP Event Source Parameters"},"x-sap-event-version":{type:"string",label:"SAP Event Version"},"x-sap-event-characteristics":{type:"object",label:"SAP Event Characteristics"},"x-sap-object-type":{type:"string",label:"SAP Object Type"},"x-sap-odm-version":{type:"string",label:"SAP ODM Version"},"x-sap-logical-odm-event-version":{type:"string",label:"SAP Logical ODM Event Version"},"x-sap-dpp-entity-semantics":{type:"string",label:"SAP DPP: Entity Semantics"},"x-sap-dpp-data-subject-role":{type:"string",label:"SAP DPP: Data Subject Role"},"x-sap-dpp-data-subject-role-description":{type:"string",label:"SAP DPP: Data Subject Role Description"},"x-sap-dpp-field-semantics":{type:"string",label:"SAP DPP: Field Semantics"},"x-sap-dpp-is-potentially-personal":{type:"boolean",label:"SAP DPP: Potentially Personal"},"x-sap-dpp-is-potentially-sensitive":{type:"boolean",label:"SAP DPP: Potentially Sensitive"}}},A={prefixStartsWith:"@",annotations:{"@EndUserText.label":{type:"string",label:"End User Text \xb7 Label"},"@EndUserText.heading":{type:"string",label:"End User Text \xb7 Heading"},"@EndUserText.quickInfo":{type:"string",label:"End User Text \xb7 Quick Info"},"@ObjectModel.modelingPattern":{type:"object",label:"Modeling Pattern"},"@ObjectModel.text.element":{type:"array",label:"Text Element"},"@ObjectModel.text.association":{type:"object",label:"Text Association"},"@ObjectModel.semanticKey":{type:"array",label:"Semantic Key"},"@ObjectModel.representativeKey":{type:"object",label:"Representative Key"},"@ObjectModel.compositionRoot":{type:"boolean",label:"Composition Root"},"@ObjectModel.supportedCapabilities":{type:"array",label:"Supported Capabilities"},"@ObjectModel.usageType.sizeCategory":{type:"string",label:"Usage Type \xb7 Size Category"},"@ObjectModel.foreignKey.association":{type:"object",label:"Foreign Key Association"},"@Consumption.valueHelpDefinition":{type:"array",label:"Value Help"},"@Consumption.hidden":{type:"boolean",label:"Hidden"},"@PersonalData.entitySemantics":{type:"string",label:"DPP \xb7 Entity Semantics"},"@PersonalData.dataSubjectRole":{type:"string",label:"DPP \xb7 Data Subject Role"},"@PersonalData.dataSubjectRoleDescription":{type:"string",label:"DPP \xb7 Data Subject Role Description"},"@PersonalData.fieldSemantics":{type:"string",label:"DPP \xb7 Field Semantics"},"@PersonalData.isPotentiallyPersonal":{type:"boolean",label:"DPP \xb7 Potentially Personal"},"@PersonalData.isPotentiallySensitive":{type:"boolean",label:"DPP \xb7 Potentially Sensitive"},"@Semantics.currencyCode":{type:"boolean",label:"Semantics \xb7 Currency Code"},"@Semantics.amount.currencyCode":{type:"object",label:"Semantics \xb7 Amount Currency"},"@Semantics.unitOfMeasure":{type:"boolean",label:"Semantics \xb7 Unit of Measure"},"@Semantics.quantity.unitOfMeasure":{type:"object",label:"Semantics \xb7 Quantity Unit"},"@Semantics.text":{type:"boolean",label:"Semantics \xb7 Text"},"@Semantics.uuid":{type:"boolean",label:"Semantics \xb7 UUID"},"@Semantics.language":{type:"boolean",label:"Semantics \xb7 Language"},"@API.element.releaseState":{type:"string",label:"API \xb7 Element Release State"},"@API.entity.releaseState":{type:"string",label:"API \xb7 Entity Release State"},"@ODM.entityName":{type:"string",label:"ODM \xb7 Entity Name"},"@ODM.oid":{type:"string",label:"ODM \xb7 OID"},"@ODM.oidReference.entityName":{type:"string",label:"ODM \xb7 OID Reference Entity"},"@Aggregation.default":{type:"object",label:"Default Aggregation"},"@EntityRelationship.entityType":{type:"string",label:"Entity Relationship \xb7 Type"},"@EntityRelationship.entityIds":{type:"array",label:"Entity Relationship \xb7 IDs"},"@EntityRelationship.propertyType":{type:"string",label:"Entity Relationship \xb7 Property Type"},"@EntityRelationship.compositeReferences":{type:"array",label:"Entity Relationship \xb7 Composite References"},"@EntityRelationship.reference":{type:"array",label:"Entity Relationship \xb7 Reference"},"@DataIntegration.dataUnavailable":{type:"boolean",label:"Data Integration \xb7 Unavailable"}}}}}]);