(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["8051"],{22365(e){function r(e){return Promise.resolve().then(function(){var r=Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r})}r.keys=()=>[],r.resolve=r,r.id=22365,e.exports=r},76999(e,r,t){"use strict";t.d(r,{t:()=>l});var a=t(92810),n=t(96540),o=t(74848),s=t(4288),i=t(96008);function l({content:e,showValidation:r=!1,showConnection:t=!1,className:c,theme:d}){let p=(0,n.useId)(),{setTheme:u}=(0,s.l)(),f=c?.split(/\s+/).includes("dark")??!1;(0,n.useEffect)(()=>{s._.getState().setRawJson(e)},[e]),(0,n.useEffect)(()=>{u(f?"dark":"light")},[f,u]);let b=d?(0,a.t)("a2a-root",p,d):null;return(0,o.jsxs)("div",{"data-renderer-id":p,className:"h-full",children:[b&&(0,o.jsx)("style",{children:b}),(0,o.jsx)(i.Bc,{readOnly:!0,showValidation:r,showConnection:t})]})}},73428(e,r,t){"use strict";t.d(r,{n:()=>d,t:()=>S});var a=t(92810),n=t(96540),o=t(29152),s=t(74848),i=t(13406),l=t(85096),c={version:"",configs:[],rootFields:{},getDocumentationUrl(e){return(this.configs.find(r=>r.extensions?.[e])??this.configs.find(r=>r.prefixStartsWith&&e.startsWith(r.prefixStartsWith)))?.documentationUrl?.(e,{version:this.version})}};function d({attributeName:e}){let r=c.getDocumentationUrl(e);return r?(0,s.jsx)("a",{href:r,style:{marginLeft:4,marginTop:4},target:"_blank",rel:"noreferrer",title:"View in AsyncAPI Specification",children:(0,s.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",children:(0,s.jsx)("path",{d:"M10.604 1h4.146a.25.25 0 01.25.25v4.146a.25.25 0 01-.427.177L13.03 4.03 9.28 7.78a.75.75 0 01-1.06-1.06l3.75-3.75-1.543-1.543A.25.25 0 0110.604 1zM3.75 2A1.75 1.75 0 002 3.75v8.5c0 .966.784 1.75 1.75 1.75h8.5A1.75 1.75 0 0014 12.25v-3.5a.75.75 0 00-1.5 0v3.5a.25.25 0 01-.25.25h-8.5a.25.25 0 01-.25-.25v-8.5a.25.25 0 01.25-.25h3.5a.75.75 0 000-1.5h-3.5z"})})}):null}function p({name:e,label:r}){return(0,s.jsxs)("div",{className:"asyncapi-attr-label",children:[r," ",(0,s.jsx)(d,{attributeName:e})]})}function u(e){if(null==e)return(0,s.jsx)("span",{className:"asyncapi-attr-placeholder",children:"\u2014"});if("boolean"==typeof e)return(0,s.jsx)("span",{children:e?"Yes":"No"});if("number"==typeof e)return(0,s.jsx)("span",{children:e});if(Array.isArray(e))return(0,s.jsx)("ul",{className:"asyncapi-attr-list",children:e.map((e,r)=>(0,s.jsx)("li",{children:u(e)},r))});if("object"==typeof e)return(0,s.jsx)("dl",{className:"asyncapi-attr-obj",children:Object.entries(e).map(([e,r])=>(0,s.jsxs)("div",{className:"asyncapi-attr-obj-row",children:[(0,s.jsxs)("dt",{className:"asyncapi-attr-obj-key",children:[e,":"]})," ",(0,s.jsx)("dd",{className:"asyncapi-attr-obj-val",children:u(r)})]},e))});let r=String(e);return/[*_`[\]#]/.test(r)?(0,s.jsx)(o.oz,{children:r}):(0,s.jsx)("span",{children:r})}function f(e){let r=e.valueLinks?.[e.value];return(0,s.jsxs)("div",{className:"asyncapi-attr-row",children:[(0,s.jsx)(p,{name:e.name,label:e.label}),(0,s.jsx)("p",{className:"asyncapi-attr-value",children:r?(0,s.jsx)("a",{href:r,rel:"noreferrer noopener",target:"_blank",className:"asyncapi-attr-link",children:e.value}):e.value})]})}function b(e){return(0,s.jsxs)("div",{className:"asyncapi-attr-row",children:[(0,s.jsx)(p,{name:e.name,label:e.label}),(0,s.jsx)("p",{className:"asyncapi-attr-value",children:e.value?"Yes":"No"})]})}function h(e){return(0,s.jsxs)("div",{className:"asyncapi-attr-row",children:[(0,s.jsx)(p,{name:e.name,label:e.label}),(0,s.jsx)("p",{className:"asyncapi-attr-value",children:e.value})]})}function m(e){return(0,s.jsxs)("div",{className:"asyncapi-attr-row",children:[(0,s.jsx)(p,{name:e.name,label:e.label}),(0,s.jsx)("div",{className:"asyncapi-attr-value",children:(0,s.jsx)("ul",{className:"asyncapi-attr-list",children:e.value.map((e,r)=>(0,s.jsx)("li",{children:u(e)},r))})})]})}function y(e){return(0,s.jsxs)("div",{className:"asyncapi-attr-row",children:[(0,s.jsx)(p,{name:e.name,label:e.label}),(0,s.jsx)("div",{className:"asyncapi-attr-value",children:u(e.value)})]})}function x(e){let r=e.callback(e.value);return(0,s.jsxs)("div",{className:"asyncapi-attr-row",children:[(0,s.jsx)(p,{name:e.name,label:e.label}),(0,s.jsx)("p",{className:"asyncapi-attr-value",children:r?(0,s.jsx)("a",{href:r,rel:"noreferrer noopener",target:"_blank",className:"asyncapi-attr-link",children:String(e.value)}):String(e.value)})]})}function g(e,r,t){return r&&"component"in r?r.component:function({propertyValue:a}){var n;let o;if(null==a)return null;let i=r&&"label"in r&&r.label?r.label:(n=t.prefixStartsWith,o=e,n&&o.startsWith(n)&&(o=o.slice(n.length)),o.replace(/([a-z])([A-Z])/g,"$1-$2").split("-").filter(Boolean).map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(" "));if(r?.type==="link")return(0,s.jsx)(x,{name:e,label:i,value:a,callback:r.callback});if(r?.type==="boolean"||"boolean"==typeof a)return(0,s.jsx)(b,{name:e,label:i,value:!!a});if(r?.type==="number"||"number"==typeof a)return(0,s.jsx)(h,{name:e,label:i,value:a});if(r?.type==="array"||Array.isArray(a))return Array.isArray(a)?(0,s.jsx)(m,{name:e,label:i,value:a}):null;if(r?.type==="object"||"object"==typeof a)return(0,s.jsx)(y,{name:e,label:i,value:a});let l=r&&"valueLinks"in r?r.valueLinks:void 0;return(0,s.jsx)(f,{name:e,label:i,value:String(a),valueLinks:l})}}var v=new Set(["asyncapi","info","channels","operations","components","servers","tags","id","defaultContentType","externalDocs"]),j=`
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
`,k={"--ord-background":"#1e1e1e","--ord-foreground":"#d4d4d4","--ord-card":"#252526","--ord-primary":"#0098ff","--ord-primary-foreground":"#1e1e1e","--ord-muted":"#2d2d30","--ord-muted-foreground":"#969696","--ord-border":"#3e3e42"};function S({content:e,config:r,customAttributes:t,className:o,theme:d}){let p,u,f,b,h,m,y,x,w,N,A,O,D,P,$=(0,n.useId)(),E=o?.split(/\s+/).includes("dark")??!1,M=d??(E?k:null),C=M?(p=M["--ord-background"],u=M["--ord-foreground"],f=M["--ord-secondary"],b=M["--ord-secondary-foreground"],h=M["--ord-muted"],m=M["--ord-muted-foreground"],y=M["--ord-border"],x=M["--ord-primary"],w=M["--ord-primary-foreground"],N=M["--ord-accent"],A=M["--ord-accent-foreground"],O=M["--ord-radius"],D=[],P=`[data-renderer-id="${$}"]`,p&&D.push(`${P} .bg-white { background-color: ${p} !important; }`),u&&D.push(`${P} {color: ${u}; }`),N&&A&&D.push(`${P} .bg-blue-100 { color: ${A}; background-color: ${N}; }`),f&&D.push(`${P} .bg-gray-100 { background-color: ${f} !important; }`),b&&D.push(`${P} .prose, ${P} .text-gray-700 { color: ${b}; }`),h&&D.push(`${P} .bg-gray-200 { background-color: ${h} !important; }`),m&&D.push(`${P} .text-gray-500, ${P} .text-gray-600 { color: ${m} !important; }`),x&&D.push(`${P} .bg-gray-800 { background-color: ${x} !important; }`,`${P} .bg-blue-100 .text-purple-700 { color: ${x}; }`),w&&D.push(`${P} .text-white { color: ${w} !important; }`),f&&D.push(`${P} .bg-gray-400 { background-color: ${f} !important; }`),A&&D.push(`${P} .text-gray-200, ${P} .examples .text-gray-600 { color: ${A} !important; } `),u&&D.push(`${P} .text-gray-800, ${P} .text-gray-900 { color: ${u} !important; }`),y&&D.push(`${P} .border { border-color: ${y}; }`,`${P} .border-b { border-bottom-color: ${y}; }`,`${P} .border-gray-400 { border-color: ${y} !important; }`),O&&D.push(`${P} .rounded, ${P} .prose pre { border-radius: ${O}px; }`,`@media (min-width: 1536px) {
${P} .\\32 xl\\:rounded { border-radius: ${O}px; }
}`,`${P} .rounded:not(.inline-block) { overflow: hidden; }`,`${P} .rounded-tl-none { border-top-left-radius: 0px; }`),D.join("\n")):null,T=(0,n.useMemo)(()=>t??[],[t]),R=void 0!==t,I=(0,n.useMemo)(()=>R?(0,a.i)(e):null,[e,R]),W=(0,n.useMemo)(()=>"string"==typeof I?.asyncapi?I.asyncapi:"",[I]),U=(0,n.useMemo)(()=>{if(!R)return r??{};let e=function(e,r,t){if(c.version=t,c.configs=e,r){let t=e.map(e=>e.prefixStartsWith).filter(Boolean);c.rootFields=t.length?function(e,r){let t={};for(let[a,n]of Object.entries(e))!v.has(a)&&a.startsWith("x-")&&r.some(e=>a.startsWith(e))&&(t[a]=n);return t}(r,t):{}}else c.rootFields={};let a={};for(let t of e){for(let[e,r]of Object.entries(t.extensions??{}))a[e]=g(e,r,t);if(t.prefixStartsWith&&r)for(let e of function(e,r){let t=new Set,a=e=>{if(e&&"object"==typeof e)for(let a of Object.keys(e))a.startsWith(r)&&t.add(a)};a(e),a(e.info);let n=e.channels;if(n)for(let e of Object.values(n)){if(!e||"object"!=typeof e)continue;for(let r of(a(e),["subscribe","publish","send","receive"])){let t=e[r];t&&"object"==typeof t&&(a(t),a(t.message))}let r=e.messages;if(r)for(let e of Object.values(r))a(e)}let o=e.operations;if(o)for(let e of Object.values(o))a(e);let s=e.components;if(s){for(let e of["messages","messageTraits"]){let r=s[e];if(r)for(let e of Object.values(r))a(e)}let e=s.schemas;if(e)for(let r of Object.values(e))a(r);let r=s.channels;if(r)for(let e of Object.values(r))a(e);let t=s.operations;if(t)for(let e of Object.values(t))a(e)}return[...t]}(r,t.prefixStartsWith))a[e]||(a[e]=g(e,void 0,t))}return a}(T,I,W);return{...r,extensions:{...e,...r?.extensions??{}}}},[r,R,T,I,W]),F=(0,n.useMemo)(()=>R?function(e){function r(r){let t=Object.entries(c.rootFields);if(!t.length)return null;let a=t.flatMap(([r,t])=>{let a=c.configs.find(e=>e.extensions?.[r])??c.configs.find(e=>e.prefixStartsWith&&r.startsWith(e.prefixStartsWith))??e[0];if(!a)return[];let o=a.extensions?.[r];return[(0,n.createElement)(g(r,o,a),{key:r,propertyName:r,propertyValue:t,document:void 0,parent:void 0})]});return a.length?(0,n.createElement)("div",null,...a):null}return{name:"sap-root-extensions",version:"1.0.0",install(e){e.registerComponent(l.WN.INFO,r)}}}(T):null,[R,T]),L=`[data-renderer-id="${$}"]`,_=`${L} { container: asyncapi-attrs / inline-size; height: 100%; overflow: auto; scrollbar-gutter: stable; }
${L} :where(h1,h2,h3,h4,p,span,strong,a,li,td,div):not(pre *) { overflow-wrap: anywhere; }`;return(0,s.jsxs)("div",{"data-renderer-id":$,className:o,children:[C&&(0,s.jsx)("style",{children:C}),R&&(0,s.jsx)("style",{children:j}),(0,s.jsx)("style",{children:_}),R&&(0,s.jsx)("style",{children:`[data-renderer-id="${$}"] #introduction .hidden { display: block !important; }`}),!R&&(0,s.jsx)("style",{children:`[data-renderer-id="${$}"] :is(#operations, #messages) div:has(> .flex.py-2 span.Extensions) { display: none; }`}),(0,s.jsx)(i,{schema:e,config:U,plugins:F?[F]:[]})]})}},64017(e,r,t){"use strict";t.d(r,{t:()=>p});var a=t(92810),n=t(96540),o=t(74848),s=t(90580),i=`
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
`;function l(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function c(e,r,t,a){let n=e.ownerDocument.createElement("template");n.innerHTML=a,e.insertBefore(n.content,r);let o=r;for(;o;){let r=o.nextSibling,a=o===t;if(e.removeChild(o),a)break;o=r}}function d(e,r){if(e.nodeType!==Node.TEXT_NODE)return null;let t=(e.textContent??"").replace(/^\s+/,""),a=/^@([\w.]+):\s*$/.exec(t);if(!a||!r||r.nodeType!==Node.ELEMENT_NODE)return null;let n=null;return("CODE"===r.tagName?n=r:"A"===r.tagName&&(n=r.querySelector("code")),n)?{key:`@${a[1]}`,valueNode:r,codeEl:n}:null}function p({content:e,config:r,customAttributes:t,className:u,theme:f}){let[b,h]=(0,n.useState)({kind:"idle"});return(0,n.useEffect)(()=>{let n;if(!e)return void h({kind:"idle"});let o=!1;h({kind:"loading"});try{n=JSON.parse(e)}catch(e){h({kind:"error",message:String(e)});return}let i=t??[],p=void 0!==t,u=p?(0,a.i)(e):null,f=p?function(e){let r={};for(let t of e)for(let[e,a]of Object.entries(t.annotations??{}))if("type"in a&&"link"===a.type&&"callback"in a&&!(e in r)){let t=a.callback;r[e]=e=>t(e)??""}return r}(i):{},b={...r,annotationLinkCallbacks:{...f,...r?.annotationLinkCallbacks}};return(0,s.JF)(n,b).then(e=>{let r=p?function(e,r,t){let a=new Map;for(let e of r){for(let[r,t]of Object.entries(e.annotations??{}))a.has(r)||a.set(r,{def:t,config:e});if(e.prefixStartsWith&&t)for(let r of function(e,r){let t=new Set,a=e=>{if(e&&"object"==typeof e)for(let a of Object.keys(e))a.startsWith(r)&&t.add(a)},n=e.definitions;if(n)for(let e of Object.values(n)){a(e);let r=e?.elements;if(r)for(let e of Object.values(r))a(e)}return[...t]}(t,e.prefixStartsWith))a.has(r)||a.set(r,{def:void 0,config:e})}if(0===a.size)return e;let n=new DOMParser().parseFromString(e,"text/html");for(let e of Array.from(n.querySelectorAll("td, p")))for(let{textNode:r,valueNode:t,codeEl:n,key:o,entry:s}of function(e,r){let t=[],a=Array.from(e.childNodes);for(let e=0;e<a.length-1;e++){let n=d(a[e],a[e+1]);if(!n)continue;let o=r.get(n.key);o&&t.push({textNode:a[e],valueNode:n.valueNode,codeEl:n.codeEl,key:n.key,entry:o})}return t}(e,a)){let a=function(e,r,t,a){var n;let o;if(null==r)return"";let s=t&&!("render"in t)&&"label"in t&&t.label?t.label:(n=a.prefixStartsWith??"@",o=e,n&&o.startsWith(n)&&(o=o.slice(n.length)),o.split(".").filter(Boolean).map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(" \xb7 ")),i=a.documentationUrl?.(e),c=i?` <a href="${l(i)}" class="csn-attr-doclink" target="_blank" rel="noreferrer" title="Documentation">\u{2197}</a>`:"",d=function e(r,t){if(null==r)return"";if(t&&"render"in t)return t.render(r);if(t?.type==="link"&&"callback"in t){let e=t.callback(r),a=l(String(r));return e?`<a href="${l(e)}" class="csn-attr-link" target="_blank" rel="noreferrer">${a}</a>`:a}if(t?.type==="boolean"||"boolean"==typeof r)return r?"Yes":"No";if(t?.type==="number"||"number"==typeof r)return l(String(r));if(t?.type==="array"||Array.isArray(r))return Array.isArray(r)?`<span class="csn-attr-list">${r.map(r=>`<span class="csn-attr-list-item">${e(r,void 0)}</span>`).join("")}</span>`:l(String(r));if(t?.type==="object"||"object"==typeof r&&null!==r){let t=Object.entries(r);return 1===t.length&&"#"===t[0][0]?l(String(t[0][1])):`<span class="csn-attr-obj">${t.map(([r,t])=>`<span class="csn-attr-kv"><span class="csn-attr-kv-key">${l(r)}</span><span class="csn-attr-kv-val">${e(t,void 0)}</span></span>`).join("")}</span>`}if(t&&"valueLinks"in t&&t.valueLinks){let e=t.valueLinks[String(r)],a=l(String(r));return e?`<a href="${l(e)}" class="csn-attr-link" target="_blank" rel="noreferrer">${a}</a>`:a}return l(String(r))}(r,t);return d?`<span class="csn-attr-row"><span class="csn-attr-label">${l(s)}${c}</span><span class="csn-attr-value">${d}</span></span>`:""}(o,function(e){try{return JSON.parse(e)}catch{return e}}(n.textContent??""),s.def,s.config);a&&c(e,r,t,a)}return n.body.innerHTML}(e,i,u):function(e){let r=new DOMParser().parseFromString(e,"text/html");for(let e of Array.from(r.querySelectorAll("td, p"))){let r=Array.from(e.childNodes),t=[];for(let e=0;e<r.length-1;e++){let a=d(r[e],r[e+1]);a&&t.push({textNode:r[e],valueNode:a.valueNode,br:function(e){let r=e.previousSibling;return r&&r.nodeType===Node.TEXT_NODE&&!(r.textContent??"").trim()&&(r=r.previousSibling),r&&r.nodeType===Node.ELEMENT_NODE&&"BR"===r.tagName?r:null}(r[e])})}for(let{textNode:r,valueNode:a,br:n}of t)c(e,r,a,""),n&&n.parentNode===e&&e.removeChild(n)}return r.body.innerHTML}(e);o||h({kind:"ready",html:r})}).catch(e=>{o||h({kind:"error",message:String(e)})}),()=>{o=!0}},[e,r,t]),(0,o.jsxs)("div",{className:`csn-root${u?` ${u}`:""}`,style:f,children:[(0,o.jsx)("style",{children:i}),"ready"===b.kind&&(0,o.jsx)("div",{className:"p-4",dangerouslySetInnerHTML:{__html:b.html}}),"error"===b.kind&&(0,o.jsxs)("div",{children:[(0,o.jsx)("h1",{children:"Invalid CSN"}),(0,o.jsx)("div",{children:b.message})]})]})}},10491(e,r,t){"use strict";t.d(r,{t:()=>l});var a=t(92810),n=t(96540),o=t(74848),s=t(37429),i=t(91604);function l({content:e,showValidation:r=!1,className:t,theme:c}){let d=(0,n.useId)(),{setTheme:p}=(0,s.E)(),u=t?.split(/\s+/).includes("dark")??!1;(0,n.useEffect)(()=>{s.S.getState().setRawJson(e)},[e]),(0,n.useEffect)(()=>{p(u?"dark":"light")},[u,p]);let f=c?(0,a.t)("mcp-root",d,c):null;return(0,o.jsxs)("div",{"data-renderer-id":d,className:"h-full",children:[f&&(0,o.jsx)("style",{children:f}),(0,o.jsx)(i.t,{readOnly:!0,showValidation:r})]})}},73950(e,r,t){"use strict";t.d(r,{n:()=>u,t:()=>M});var a=t(92810),n=t(96540),o=t(30897),s=t(29152),i=t(74848),l=t(98207),c={version:"",configs:[],getDocumentationUrl(e){return(this.configs.find(r=>r.extensions?.[e])??this.configs.find(r=>r.prefixStartsWith&&e.startsWith(r.prefixStartsWith)))?.documentationUrl?.(e,{version:this.version})}},d=["get","put","post","delete","options","head","patch","trace"],p="x-sap-schema-attrs";function u({attributeName:e}){let r=c.getDocumentationUrl(e);return r?(0,i.jsx)("a",{href:r,style:{marginLeft:4},target:"_blank",rel:"noreferrer",title:"View in OpenAPI Specification",children:(0,i.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",children:(0,i.jsx)("path",{d:"M10.604 1h4.146a.25.25 0 01.25.25v4.146a.25.25 0 01-.427.177L13.03 4.03 9.28 7.78a.75.75 0 01-1.06-1.06l3.75-3.75-1.543-1.543A.25.25 0 0110.604 1zM3.75 2A1.75 1.75 0 002 3.75v8.5c0 .966.784 1.75 1.75 1.75h8.5A1.75 1.75 0 0014 12.25v-3.5a.75.75 0 00-1.5 0v3.5a.25.25 0 01-.25.25h-8.5a.25.25 0 01-.25-.25v-8.5a.25.25 0 01.25-.25h3.5a.75.75 0 000-1.5h-3.5z"})})}):null}function f({name:e,label:r}){return(0,i.jsxs)("div",{className:"sap-api-label",children:[r," ",(0,i.jsx)(u,{attributeName:e})]})}function b(e){let r=e.valueLinks?.[e.value];return(0,i.jsxs)("div",{className:"sap-api-container",children:[(0,i.jsx)(f,{name:e.name,label:e.label}),(0,i.jsx)("p",{className:"sap-api-value",children:r?(0,i.jsx)("a",{href:r,rel:"noreferrer noopener",target:"_blank",className:"sap-api-link",children:e.value}):e.value})]})}function h(e){return(0,i.jsxs)("div",{className:"sap-api-container",children:[(0,i.jsx)(f,{name:e.name,label:e.label}),(0,i.jsx)("p",{className:"sap-api-value",children:e.value?"Yes":"No"})]})}function m(e){return(0,i.jsxs)("div",{className:"sap-api-container",children:[(0,i.jsx)(f,{name:e.name,label:e.label}),(0,i.jsx)("p",{className:"sap-api-value",children:e.value})]})}function y(e){return(0,i.jsxs)("div",{className:"sap-api-container",children:[(0,i.jsx)(f,{name:e.name,label:e.label}),(0,i.jsx)("div",{className:"sap-api-value",children:(0,i.jsx)("ul",{className:"sap-api-list",children:e.value.map((e,r)=>(0,i.jsx)("li",{children:x(e)},r))})})]})}function x(e){if(null==e)return(0,i.jsx)("span",{className:"sap-api-placeholder",children:"\u2014"});if("boolean"==typeof e)return(0,i.jsx)("span",{children:e?"Yes":"No"});if("number"==typeof e)return(0,i.jsx)("span",{children:e});if(Array.isArray(e))return(0,i.jsx)("ul",{className:"sap-api-list",children:e.map((e,r)=>(0,i.jsx)("li",{children:x(e)},r))});if("object"==typeof e)return(0,i.jsx)("dl",{className:"sap-api-obj",children:Object.entries(e).map(([e,r])=>(0,i.jsxs)("div",{className:"sap-api-obj-row",children:[(0,i.jsxs)("dt",{className:"sap-api-obj-key",children:[e,":"]})," ",(0,i.jsx)("dd",{className:"sap-api-obj-val",children:x(r)})]},e))});let r=String(e);return/[*_`[\]#]/.test(r)?(0,i.jsx)(s.oz,{children:r}):(0,i.jsx)("span",{children:r})}function g(e){return(0,i.jsxs)("div",{className:"sap-api-container",children:[(0,i.jsx)(f,{name:e.name,label:e.label}),(0,i.jsx)("div",{className:"sap-api-value",children:x(e.value)})]})}function v(e){let r=e.callback(e.value);return(0,i.jsxs)("div",{className:"sap-api-container",children:[(0,i.jsx)(f,{name:e.name,label:e.label}),(0,i.jsx)("p",{className:"sap-api-value",children:r?(0,i.jsx)("a",{href:r,rel:"noreferrer noopener",target:"_blank",className:"sap-api-link",children:String(e.value)}):String(e.value)})]})}function j(e,r,t){return r&&"component"in r?r.component:a=>{var n;let o,s=function(e,r){if(e&&"object"==typeof e)return e[r.replace(/-./g,e=>e[1].toUpperCase())]}(a,e);if(null==s)return null;let l=r&&"label"in r&&r.label?r.label:(n=t.prefixStartsWith,o=e,n&&o.startsWith(n)&&(o=o.slice(n.length)),o.split("-").filter(Boolean).map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(" "));if(r?.type==="link"&&"callback"in r)return(0,i.jsx)(v,{name:e,label:l,value:s,callback:r.callback});if(r?.type==="boolean"||"boolean"==typeof s)return(0,i.jsx)(h,{name:e,label:l,value:!!s});if(r?.type==="number"||"number"==typeof s)return(0,i.jsx)(m,{name:e,label:l,value:s});if(r?.type==="array"||Array.isArray(s))return Array.isArray(s)?(0,i.jsx)(y,{name:e,label:l,value:s}):null;if(r?.type==="object"||"object"==typeof s)return(0,i.jsx)(g,{name:e,label:l,value:s});let c=r&&"valueLinks"in r?r.valueLinks:void 0;return(0,i.jsx)(b,{name:e,label:l,value:String(s),valueLinks:c})}}var k={"--ord-background":["--scalar-background-1"],"--ord-foreground":["--scalar-color-1"],"--ord-secondary":["--scalar-background-2"],"--ord-secondary-foreground":["--scalar-color-2"],"--ord-muted":["--scalar-background-3"],"--ord-muted-foreground":["--scalar-color-3"],"--ord-primary":["--scalar-color-accent","--scalar-button-1","--scalar-link-color","--scalar-button-1-hover","--scalar-link-color-hover"],"--ord-primary-foreground":["--scalar-button-1-color"],"--ord-border":["--scalar-border-color"],"--ord-destructive":["--scalar-color-red","--scalar-color-danger"],"--ord-success":["--scalar-color-green"],"--ord-warning":["--scalar-color-orange"],"--ord-radius":["--scalar-radius","--scalar-radius-lg"]},S={"--ord-sidebar":["--scalar-sidebar-background-1"],"--ord-sidebar-foreground":["--scalar-sidebar-color-1"],"--ord-sidebar-primary":["--scalar-sidebar-background-2"],"--ord-sidebar-primary-foreground":["--scalar-sidebar-color-2","--scalar-sidebar-search-color"],"--ord-sidebar-accent":["--scalar-sidebar-item-active-background","--scalar-sidebar-item-hover-background","--scalar-sidebar-search-background"],"--ord-sidebar-accent-foreground":["--scalar-sidebar-color-active","--scalar-sidebar-item-hover-color"],"--ord-sidebar-border":["--scalar-sidebar-border-color","--scalar-sidebar-search-border-color"]};function w(e,r){return"--ord-radius"===e?`${r}px`:r}var N={selector:".scalar-app",map(e){let r={};for(let[t,a]of Object.entries(e)){let e=k[t];if(!e)continue;let n=w(t,a);for(let t of e)r[t]=n}return r}},A={selector:".scalar-app .t-doc__sidebar",map(e){let r={};for(let[t,a]of Object.entries(e)){let e=S[t];if(e)for(let t of e)r[t]=a}return r}},O={selector:".scalar-app .dark-mode, .scalar-app.dark-mode, .scalar-app .light-mode, .scalar-app.light-mode",map(e){let r={};for(let[t,a]of Object.entries(e)){let e=k[t];if(!e)continue;let n=w(t,a);for(let t of e)r[t]=n}return r}},D=["--ord-hljs-attr","--ord-hljs-string","--ord-hljs-number","--ord-hljs-function","--ord-hljs-literal","--ord-hljs-punctuation","--ord-hljs-keyword","--ord-hljs-comment"],P={selector:".scalar-app",map(e){let r={};for(let t of D)t in e&&(r[t]=e[t]);return r}},$={selector:".scalar-app, #headlessui-portal-root",map(e){let r={};for(let[t,a]of Object.entries(e)){let e=k[t];if(!e)continue;let n=w(t,a);for(let t of e)r[t]=n}return r}},E=`
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
`;function M({content:e,customAttributes:r,className:t,theme:s}){let u,f,b=(0,n.useId)(),h=(0,n.useRef)(null),m=t?.split(/\s+/).includes("dark")??!1,y=(0,n.useMemo)(()=>r??[],[r]),x=void 0!==r;(0,n.useEffect)(()=>{let e=h.current;if(!e)return;let r=new ResizeObserver(([r])=>{e.style.setProperty("--scalar-container-height",`${r.contentRect.height}px`)});return r.observe(e),()=>{r.disconnect(),window.location.hash&&history.replaceState(null,"",window.location.pathname+window.location.search)}},[]);let g=(0,n.useMemo)(()=>{if(!x)return"";let r=(0,a.i)(e);return r?y.flatMap(e=>(function(e,r){let t=[];for(let[a,n]of Object.entries(e))a.startsWith(r)&&t.push([a,n]);let a=e.paths;if(a){for(let[e,n]of Object.entries(a))if(n&&"object"==typeof n)for(let a of d){let o=n[a];if(o&&"object"==typeof o)for(let[n,s]of Object.entries(o))n.startsWith(r)&&t.push([`paths.${e}.${a}.${n}`,s])}}let n=e.components?.schemas;if(n)for(let[e,a]of Object.entries(n)){if(!a||"object"!=typeof a)continue;for(let[n,o]of Object.entries(a))n.startsWith(r)&&t.push([`components.schemas.${e}.${n}`,o]);let n=a.properties;if(n){for(let[a,o]of Object.entries(n))if(o&&"object"==typeof o)for(let[n,s]of Object.entries(o))n.startsWith(r)&&t.push([`components.schemas.${e}.properties.${a}.${n}`,s])}}return t})(r,e.prefixStartsWith??"").map(([e,r])=>`${e}=${JSON.stringify(r)}`)).join("|"):""},[e,x,y]),v=(0,n.useMemo)(()=>{let r;c.version=(r=(0,a.i)(e))?"openapi"in r&&r.openapi&&"string"==typeof r.openapi?r.openapi.substring(0,3):"swagger"in r&&r.swagger&&"string"==typeof r.swagger?"2.0":"":"",c.configs=x?y:[];let t=(0,a.i)(e),o=y.map(e=>e.prefixStartsWith).filter(Boolean);return{content:x&&t&&o.length?function(e,r){let t=e.components?.schemas;if(!t)return e;let a={},n=!1;for(let[e,o]of Object.entries(t)){if(!o||"object"!=typeof o){a[e]=o;continue}let t={};for(let[e,a]of Object.entries(o))r.some(r=>e.startsWith(r))&&(t[e]=a);if(0===Object.keys(t).length){a[e]=o;continue}n=!0,a[e]={...o,properties:{[p]:{[p]:t},...o.properties}}}return n?{...e,components:{...e.components,schemas:a}}:e}(t,o):t??e,plugins:x?[function(e,r){let t=new Set;for(let a of r){if(a.extensions)for(let e of Object.keys(a.extensions))t.add(e);if(a.prefixStartsWith&&e)for(let r of function(e,r){let t=new Set;for(let a of Object.keys(e))a.startsWith(r)&&t.add(a);let a=e.paths;if(a){for(let e of Object.values(a))if(e&&"object"==typeof e)for(let a of d){let n=e[a];if(n&&"object"==typeof n)for(let e of Object.keys(n))e.startsWith(r)&&t.add(e)}}let n=e.components?.schemas;if(n)for(let e of Object.values(n)){if(!e||"object"!=typeof e)continue;for(let a of Object.keys(e))a.startsWith(r)&&t.add(a);let a=e.properties;if(a){for(let e of Object.values(a))if(e&&"object"==typeof e)for(let a of Object.keys(e))a.startsWith(r)&&t.add(a)}}return[...t]}(e,a.prefixStartsWith))t.add(r)}let a=[...t].map(e=>{let t=r.find(r=>r.extensions?.[e])??r.find(r=>r.prefixStartsWith&&e.startsWith(r.prefixStartsWith))??r[0],a=t?.extensions?.[e];return{name:e,component:j(e,a,t??{}),renderer:l.N}});return a.push({name:p,component:e=>{if(!e||"object"!=typeof e)return null;let t=e.xSapSchemaAttrs??e["x-sap-schema-attrs"];if(!t||"object"!=typeof t)return null;let a=function(e){let r={};for(let[t,a]of Object.entries(e))r[t.replace(/-./g,e=>e[1].toUpperCase())]=a;return r}(t),o=[];for(let e of Object.keys(t)){if(!e.startsWith("x-"))continue;let t=r.find(r=>r.extensions?.[e])??r.find(r=>r.prefixStartsWith&&e.startsWith(r.prefixStartsWith));if(!t)continue;let n=t.extensions?.[e],s=j(e,n,t)(a);s&&o.push(s)}return 0===o.length?null:(0,n.createElement)("div",{className:"sap-schema-attrs-block"},...o)},renderer:l.N}),()=>({name:"custom-attributes-plugin",extensions:a})}(t,y)]:[],forceDarkModeState:m?"dark":"light",hideDarkModeToggle:!0,hideClientButton:!0,showDeveloperTools:"never"}},[e,m,x,y]);return(0,i.jsxs)("div",{ref:h,"data-renderer-id":b,style:{height:"100%",...s},children:[(0,i.jsx)("style",{children:E}),s&&(0,i.jsx)("style",{children:(u=`[data-renderer-id="${b}"]`,[[N,A,O,P].map(e=>{let r=Object.entries(e.map(s)).map(([e,r])=>`  ${e}: ${r};`).join("\n");return r?`${u} ${e.selector} {
${r}
}`:""}).filter(Boolean).join("\n\n"),!(f=Object.entries($.map(s)).map(([e,r])=>`  ${e}: ${r};`).join("\n"))?"":`${$.selector} {
${f}
}`].filter(Boolean).join("\n\n"))}),(0,i.jsx)(o.B,{configuration:v},`${m?"dark":"light"}-${x}-${g}`)]})}},30811(e,r,t){"use strict";t.d(r,{t:()=>i});var a=t(92810),n=t(96540),o=t(74848),s=t(68157);function i({content:e,className:r,theme:t}){let l=(0,n.useId)(),{setTheme:c}=(0,s.r)(),d=r?.split(/\s+/).includes("dark")??!1;(0,n.useEffect)(()=>{s.s.getState().setRawJson(e)},[e]),(0,n.useEffect)(()=>{c(d?"dark":"light")},[d,c]);let p=t?(0,a.t)("overlay-root",l,t):null,u=t?(0,a.t)("overlay-sidebar-footer-mobile",l,t):null;return(0,o.jsxs)("div",{"data-renderer-id":l,className:"h-full",children:[(0,o.jsx)("style",{children:`
        [data-renderer-id="${l}"] .overlay-root code {
            color: var(--ord-code-fg, var(--ord-foreground, #24292f));
            background-color: var(--ord-code-bg, var(--ord-muted, #f6f8fa));
        }
        [data-renderer-id="${l}"] .overlay-sidebar-footer-mobile {
            background: var(--ord-background);
            color: var(--ord-muted-foreground);
        }
    `}),p&&(0,o.jsx)("style",{children:p}),u&&(0,o.jsx)("style",{children:u}),(0,o.jsx)(s.n,{})]})}},83602(e,r,t){"use strict";t.r(r),t.d(r,{A2ARenderer:()=>l.t,AsyncApiRenderer:()=>s.t,CsnRenderer:()=>o.t,McpRenderer:()=>c.t,MetadataRenderer:()=>h,OpenApiRenderer:()=>n.t,OverlayRenderer:()=>i.t,createTheme:()=>y,detectMetaType:()=>a.n,extractVersion:()=>a.r,loadObject:()=>a.i,sapAsyncApiAttributesConfig:()=>A,sapCsnAttributesConfig:()=>O,sapOpenApiAttributesConfig:()=>S});var a=t(92810),n=t(73950),o=t(64017),s=t(73428),i=t(30811),l=t(76999),c=t(10491),d=t(96540),p=t(29152),u=t(74848),f={openapi:n.t,csn:o.t,asyncapi:s.t,overlay:i.t,a2a:l.t,mcp:c.t},b={openapi:"OpenAPI",csn:"CSN",asyncapi:"AsyncAPI",overlay:"Overlay",a2a:"A2A",mcp:"MCP"};function h({content:e,renderers:r,options:t,type:n,className:o,theme:s}){let i,l=t?.autoDetect!==!1,c=t?.strictTypeCheck!==!1,p=(0,d.useMemo)(()=>n||(l?(0,a.n)(e):"unknown"),[n,l,e]),m=(0,d.useMemo)(()=>n&&e?(0,a.n)(e):null,[n,e]),y=null!==m&&m!==n&&("unknown"!==m||c),x=(0,d.useMemo)(()=>(0,a.r)(p,e),[p,e]),g=b[p],v=(r??f)[p];if(y){let e="unknown"===m?"an unrecognised format":`\u{2018}${b[m]??m}\u{2019}`;i=(0,u.jsxs)("div",{style:{padding:16,fontFamily:"system-ui, sans-serif"},children:[(0,u.jsx)("strong",{children:"Type mismatch:"})," content was detected as ",e," but \u2018",b[n]??n,"\u2019 was specified."]})}else if(v){let r,a,n;i=(0,u.jsx)(v,{content:e,className:o,theme:s,...(r={},n=!1!==(a=t?.customAttributes)?a:void 0,"openapi"===p&&n?.openapi&&(r.customAttributes=n.openapi),"asyncapi"===p&&(t?.asyncapi&&Object.assign(r,{config:t.asyncapi}),n?.asyncapi&&(r.customAttributes=n.asyncapi)),"csn"===p&&(t?.csn&&Object.assign(r,{config:t.csn}),n?.csn&&(r.customAttributes=n.csn)),"a2a"===p&&t?.a2a&&Object.assign(r,t.a2a),"mcp"===p&&t?.mcp&&Object.assign(r,t.mcp),r)})}else i=t?.fallback==="raw"?(0,u.jsx)("pre",{style:{margin:0,padding:16,overflow:"auto",height:"100%"},children:e}):(0,u.jsxs)("div",{style:{padding:16,fontFamily:"system-ui, sans-serif"},children:[(0,u.jsx)("strong",{children:"Unsupported format:"})," No renderer registered for type \u2018",p,"\u2019."]});return(0,u.jsxs)("div",{style:{position:"relative",height:"100%",...s},children:[g&&g!==b.overlay&&g!==b.openapi&&(0,u.jsxs)("div",{style:{position:"absolute",top:8,right:8,zIndex:100,padding:"2px 8px",borderRadius:4,fontSize:11,fontFamily:"system-ui, sans-serif",lineHeight:"16px",pointerEvents:"none",background:"var(--ord-muted, #e5e7eb)",color:"var(--ord-muted-foreground, #6b7280)"},children:[g,x?` \xb7 ${x}`:""]}),i]})}var m={background:"--ord-background",foreground:"--ord-foreground",primary:"--ord-primary",primaryForeground:"--ord-primary-foreground",secondary:"--ord-secondary",secondaryForeground:"--ord-secondary-foreground",muted:"--ord-muted",mutedForeground:"--ord-muted-foreground",accent:"--ord-accent",accentForeground:"--ord-accent-foreground",destructive:"--ord-destructive",destructiveForeground:"--ord-destructive-foreground",success:"--ord-success",successForeground:"--ord-success-foreground",warning:"--ord-warning",warningForeground:"--ord-warning-foreground",border:"--ord-border",input:"--ord-input",ring:"--ord-ring",card:"--ord-card",cardForeground:"--ord-card-foreground",popover:"--ord-popover",popoverForeground:"--ord-popover-foreground",radius:"--ord-radius"};function y(e){let r={};for(let[t,a]of Object.entries(e))void 0!==a&&(r[m[t]]=a);return r}var x={ACTIVE:"color-mix(in srgb, var(--scalar-color-green) 15%, transparent)",BETA:"color-mix(in srgb, var(--scalar-color-blue) 15%, transparent)",DEPRECATED:"color-mix(in srgb, var(--scalar-color-orange) 15%, transparent)",DECOMMISSIONED:"color-mix(in srgb, var(--scalar-color-red) 15%, transparent)"},g={ACTIVE:"var(--scalar-color-green)",BETA:"var(--scalar-color-blue)",DEPRECATED:"var(--scalar-color-orange)",DECOMMISSIONED:"var(--scalar-color-red)"};function v(){return(0,u.jsxs)("svg",{viewBox:"0 0 24 24",width:"1em",height:"1em",fill:"none",stroke:"currentColor",strokeWidth:"2","aria-hidden":"true",children:[(0,u.jsx)("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2"}),(0,u.jsx)("path",{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"})]})}function j(){return(0,u.jsx)("svg",{viewBox:"0 0 24 24",width:"1em",height:"1em",fill:"none",stroke:"currentColor",strokeWidth:"2","aria-hidden":"true",children:(0,u.jsx)("path",{d:"M20 6 9 17l-5-5"})})}function k(e){return{component:e}}var S={prefixStartsWith:"x-sap-",documentationUrl:(e,{version:r})=>`https://github.com/SAP/openapi-specification/tree/main/sap-schemas/v${r}#${e}`,extensions:{"x-sap-compliance-level":{type:"link",label:"SAP Compliance Level",callback:e=>({"sap:base:v1":"https://github.com/open-resource-discovery/specification/blob/main/docs/spec-extensions/policy-levels/sap-base-v1.md","sap:core:v1":"https://github.com/open-resource-discovery/specification/blob/main/docs/spec-extensions/policy-levels/sap-core-v1.md","sap:core:v2":"https://github.com/open-resource-discovery/specification/blob/main/docs/spec-extensions/policy-levels/sap-core-v1.md"})[String(e)]},"x-sap-shortText":{type:"string",label:"SAP Short Text"},"x-sap-software-min-version":{type:"string",label:"SAP Software Version"},"x-sap-api-type":{type:"string",label:"SAP API Type"},"x-sap-direction":{type:"string",label:"SAP Direction"},"x-sap-ord-id":k(function({xSapOrdId:e}){let[r,t]=(0,d.useState)(!1);return e?(0,u.jsxs)("div",{className:"sap-api-container",children:[(0,u.jsxs)("div",{className:"sap-api-label",children:["ORD ID ",(0,u.jsx)(n.n,{attributeName:"x-sap-ord-id"})]}),(0,u.jsxs)("div",{className:"sap-api-value sap-api-ord-id",children:[(0,u.jsx)("span",{className:"sap-api-ord-id-text",children:e}),(0,u.jsx)("button",{type:"button",className:"sap-api-copy-btn",onClick:()=>{navigator.clipboard?.writeText(e).then(()=>{t(!0),setTimeout(()=>t(!1),1500)})},"aria-label":"Copy ORD ID",title:r?"Copied":"Copy",children:r?(0,u.jsx)(j,{}):(0,u.jsx)(v,{})})]})]}):null}),"x-sap-operation-intent":{type:"string",label:"SAP Operation Intent"},"x-sap-odm-oid":{type:"string",label:"ODM OID"},"x-sap-odm-oid-reference-entity-name":{type:"string",label:"ODM OID Reference Entity Name"},"x-sap-precision":{type:"number",label:"SAP Precision"},"x-sap-scale":{type:"number",label:"SAP Scale"},"x-sap-root-entity":{type:"boolean",label:"SAP Root Entity"},"x-sap-dpp-entity-semantics":{type:"string",label:"SAP DPP: Entity Semantics"},"x-sap-dpp-data-subject-role":{type:"string",label:"SAP DPP: Data Subject Role"},"x-sap-dpp-data-subject-role-description":{type:"string",label:"SAP DPP: Data Subject Role Description"},"x-sap-dpp-field-semantics":{type:"string",label:"SAP DPP: Field Semantics"},"x-sap-dpp-is-potentially-personal":{type:"boolean",label:"SAP DPP: Potentially Personal"},"x-sap-dpp-is-potentially-sensitive":{type:"boolean",label:"SAP DPP: Potentially Sensitive"},"x-sap-ext-overview":k(function(e){if(!("object"==typeof e&&null!==e&&"xSapExtOverview"in e&&Array.isArray(e.xSapExtOverview)&&e.xSapExtOverview.every(e=>"object"==typeof e&&null!==e&&"name"in e&&"values"in e&&"string"==typeof e.name&&("string"==typeof e.values||!!Array.isArray(e.values)&&(!!e.values.every(e=>"string"==typeof e)||e.values.every(e=>"object"==typeof e&&null!==e&&"text"in e&&"string"==typeof e.text&&"format"in e&&("plain"===e.format||"markdown"===e.format)))))))return null;let{xSapExtOverview:r}=e;return(0,u.jsxs)("div",{className:"sap-api-container",children:[(0,u.jsxs)("div",{className:"sap-api-label sap-api-label--root",children:["SAP Extensibility Overview ",(0,u.jsx)(n.n,{attributeName:"x-sap-ext-overview"})]}),(0,u.jsx)("div",{className:"sap-api-value sap-api-value--root",children:r.map(e=>(0,u.jsxs)("div",{children:[(0,u.jsx)("strong",{children:e.name}),(0,u.jsx)("ul",{className:"sap-api-list",children:"string"==typeof e.values?(0,u.jsx)("li",{children:e.values}):e.values.map(e=>"string"==typeof e?(0,u.jsx)("li",{children:e},e):(0,u.jsx)("li",{children:"plain"===e.format?e.text:(0,u.jsx)(p.oz,{children:e.text})},e.text))})]},e.name))})]})}),"x-sap-stateInfo":k(function({xSapStateInfo:e}){if(!e)return null;let r=e.state?.toUpperCase(),t=(0,u.jsx)("span",{style:{display:"inline-block",borderRadius:"10px",padding:"0 6px",background:x[r]||"",color:g[r]||""},children:r}),a=new Intl.DateTimeFormat("en-GB",{dateStyle:"long"}),o=e=>{let r=new Date(e);return isNaN(r.getTime())?e:a.format(r)};return(0,u.jsxs)("div",{className:"sap-api-container",children:[(0,u.jsxs)("div",{className:"sap-api-label",children:["API State ",(0,u.jsx)(n.n,{attributeName:"x-sap-stateInfo"})]}),(0,u.jsxs)("div",{className:"sap-api-value",children:[t,e.deprecationDate&&(0,u.jsxs)("div",{children:["Deprecated on ",o(e.deprecationDate)]}),e.decommissionedDate&&(0,u.jsxs)("div",{children:["Decommissioned on ",o(e.decommissionedDate)]}),e.successorApi&&(0,u.jsxs)("div",{children:["Successor API: ",(0,u.jsx)("a",{href:e.successorApi,target:"_blank",rel:"noreferrer",className:"sap-api-link",children:e.successorApi})]})]})]})}),"x-sap-extensible":{type:"object",label:"SAP Extensible"},"x-sap-deprecated-operation":k(function({xSapDeprecatedOperation:e}){let r=new Intl.DateTimeFormat("en-GB",{dateStyle:"long"}).format(new Date(e.deprecationDate));return(0,u.jsxs)("div",{className:"sap-api-container",children:[(0,u.jsxs)("div",{className:"sap-api-label",children:["SAP Deprecated Operation ",(0,u.jsx)(n.n,{attributeName:"x-sap-deprecated-operation"})]}),(0,u.jsxs)("div",{className:"sap-api-value",children:["Deprecated on ",r," ",(0,u.jsx)("br",{}),e.successorOperationRef||e.successorOperationId?(0,u.jsxs)(u.Fragment,{children:[" Successor ",e.successorOperationRef?(0,u.jsx)("a",{href:e.successorOperationRef,rel:"noreferrer, noopener",children:e.successorOperationRef}):null,e.successorOperationId?(0,u.jsx)("span",{children:e.successorOperationId}):null]}):null]})]})}),"x-sap-odm-entity-name":k(function({xSapOdmEntityName:e}){return(0,u.jsxs)("div",{className:"sap-api-container",children:[(0,u.jsxs)("div",{className:"sap-api-label",children:["ODM entity name ",(0,u.jsx)(n.n,{attributeName:"x-sap-odm-entity-name"})]}),(0,u.jsx)("div",{className:"sap-api-value",children:e})]})}),"x-sap-odm-semantic-key":k(function({xSapOdmSemanticKey:e}){return(0,u.jsxs)("div",{className:"sap-api-container",children:[(0,u.jsxs)("div",{className:"sap-api-label",children:["ODM Semantic Key ",(0,u.jsx)(n.n,{attributeName:"x-sap-odm-semantic-key"})]}),(0,u.jsx)("div",{className:"sap-api-value",children:e.map(e=>(0,u.jsxs)("div",{children:[(0,u.jsx)("strong",{children:e.name}),(0,u.jsx)("ul",{className:"sap-api-list",children:e.values.map(e=>(0,u.jsx)("li",{children:e},e))})]},e.name))})]})})}},w={ACTIVE:"color-mix(in srgb, #22c55e 15%, transparent)",BETA:"color-mix(in srgb, #3b82f6 15%, transparent)",DEPRECATED:"color-mix(in srgb, #f97316 15%, transparent)",DECOMMISSIONED:"color-mix(in srgb, #ef4444 15%, transparent)"},N={ACTIVE:"#16a34a",BETA:"#2563eb",DEPRECATED:"#ea580c",DECOMMISSIONED:"#dc2626"},A={prefixStartsWith:"x-sap-",documentationUrl:e=>`https://github.com/SAP/asyncapi-specification#${e}`,extensions:{"x-sap-catalog-spec-version":{type:"string",label:"SAP Catalog Spec Version"},"x-sap-application-namespace":{type:"string",label:"SAP Application Namespace"},"x-sap-ord-id":{type:"string",label:"ORD ID"},"x-sap-shortText":{type:"string",label:"SAP Short Text"},"x-sap-software-min-version":{type:"string",label:"SAP Software Version"},"x-sap-stateInfo":{component:function({propertyName:e,propertyValue:r}){if(!r||"object"!=typeof r)return null;let t=r.state?.toUpperCase(),a=(0,u.jsx)("span",{style:{display:"inline-block",borderRadius:"10px",padding:"0 6px",background:w[t]||"",color:N[t]||""},children:t}),n=new Intl.DateTimeFormat("en-GB",{dateStyle:"long"}),o=e=>{let r=new Date(e);return isNaN(r.getTime())?e:n.format(r)};return(0,u.jsxs)("div",{className:"asyncapi-attr-row",children:[(0,u.jsxs)("div",{className:"asyncapi-attr-label",children:["API State ",(0,u.jsx)(s.n,{attributeName:e})]}),(0,u.jsxs)("div",{className:"asyncapi-attr-value",children:[a,r.deprecationDate&&(0,u.jsxs)("div",{children:["Deprecated on ",o(r.deprecationDate)]}),r.decommissionedDate&&(0,u.jsxs)("div",{children:["Decommissioned on ",o(r.decommissionedDate)]}),r.link&&(0,u.jsxs)("div",{children:["More info: ",(0,u.jsx)("a",{href:r.link,target:"_blank",rel:"noreferrer",className:"asyncapi-attr-link",children:r.link})]})]})]})}},"x-sap-event-spec-version":{type:"string",label:"SAP Event Spec Version"},"x-sap-event-source":{type:"string",label:"SAP Event Source"},"x-sap-event-source-parameters":{type:"object",label:"SAP Event Source Parameters"},"x-sap-event-version":{type:"string",label:"SAP Event Version"},"x-sap-event-characteristics":{type:"object",label:"SAP Event Characteristics"},"x-sap-object-type":{type:"string",label:"SAP Object Type"},"x-sap-odm-version":{type:"string",label:"SAP ODM Version"},"x-sap-logical-odm-event-version":{type:"string",label:"SAP Logical ODM Event Version"},"x-sap-dpp-entity-semantics":{type:"string",label:"SAP DPP: Entity Semantics"},"x-sap-dpp-data-subject-role":{type:"string",label:"SAP DPP: Data Subject Role"},"x-sap-dpp-data-subject-role-description":{type:"string",label:"SAP DPP: Data Subject Role Description"},"x-sap-dpp-field-semantics":{type:"string",label:"SAP DPP: Field Semantics"},"x-sap-dpp-is-potentially-personal":{type:"boolean",label:"SAP DPP: Potentially Personal"},"x-sap-dpp-is-potentially-sensitive":{type:"boolean",label:"SAP DPP: Potentially Sensitive"}}},O={prefixStartsWith:"@",annotations:{"@EndUserText.label":{type:"string",label:"End User Text \xb7 Label"},"@EndUserText.heading":{type:"string",label:"End User Text \xb7 Heading"},"@EndUserText.quickInfo":{type:"string",label:"End User Text \xb7 Quick Info"},"@ObjectModel.modelingPattern":{type:"object",label:"Modeling Pattern"},"@ObjectModel.text.element":{type:"array",label:"Text Element"},"@ObjectModel.text.association":{type:"object",label:"Text Association"},"@ObjectModel.semanticKey":{type:"array",label:"Semantic Key"},"@ObjectModel.representativeKey":{type:"object",label:"Representative Key"},"@ObjectModel.compositionRoot":{type:"boolean",label:"Composition Root"},"@ObjectModel.supportedCapabilities":{type:"array",label:"Supported Capabilities"},"@ObjectModel.usageType.sizeCategory":{type:"string",label:"Usage Type \xb7 Size Category"},"@ObjectModel.foreignKey.association":{type:"object",label:"Foreign Key Association"},"@Consumption.valueHelpDefinition":{type:"array",label:"Value Help"},"@Consumption.hidden":{type:"boolean",label:"Hidden"},"@PersonalData.entitySemantics":{type:"string",label:"DPP \xb7 Entity Semantics"},"@PersonalData.dataSubjectRole":{type:"string",label:"DPP \xb7 Data Subject Role"},"@PersonalData.dataSubjectRoleDescription":{type:"string",label:"DPP \xb7 Data Subject Role Description"},"@PersonalData.fieldSemantics":{type:"string",label:"DPP \xb7 Field Semantics"},"@PersonalData.isPotentiallyPersonal":{type:"boolean",label:"DPP \xb7 Potentially Personal"},"@PersonalData.isPotentiallySensitive":{type:"boolean",label:"DPP \xb7 Potentially Sensitive"},"@Semantics.currencyCode":{type:"boolean",label:"Semantics \xb7 Currency Code"},"@Semantics.amount.currencyCode":{type:"object",label:"Semantics \xb7 Amount Currency"},"@Semantics.unitOfMeasure":{type:"boolean",label:"Semantics \xb7 Unit of Measure"},"@Semantics.quantity.unitOfMeasure":{type:"object",label:"Semantics \xb7 Quantity Unit"},"@Semantics.text":{type:"boolean",label:"Semantics \xb7 Text"},"@Semantics.uuid":{type:"boolean",label:"Semantics \xb7 UUID"},"@Semantics.language":{type:"boolean",label:"Semantics \xb7 Language"},"@API.element.releaseState":{type:"string",label:"API \xb7 Element Release State"},"@API.entity.releaseState":{type:"string",label:"API \xb7 Entity Release State"},"@ODM.entityName":{type:"string",label:"ODM \xb7 Entity Name"},"@ODM.oid":{type:"string",label:"ODM \xb7 OID"},"@ODM.oidReference.entityName":{type:"string",label:"ODM \xb7 OID Reference Entity"},"@Aggregation.default":{type:"object",label:"Default Aggregation"},"@EntityRelationship.entityType":{type:"string",label:"Entity Relationship \xb7 Type"},"@EntityRelationship.entityIds":{type:"array",label:"Entity Relationship \xb7 IDs"},"@EntityRelationship.propertyType":{type:"string",label:"Entity Relationship \xb7 Property Type"},"@EntityRelationship.compositeReferences":{type:"array",label:"Entity Relationship \xb7 Composite References"},"@EntityRelationship.reference":{type:"array",label:"Entity Relationship \xb7 Reference"},"@DataIntegration.dataUnavailable":{type:"boolean",label:"Data Integration \xb7 Unavailable"}}}}}]);