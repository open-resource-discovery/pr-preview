(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["8051"],{22365(e){function t(e){return Promise.resolve().then(function(){var t=Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t})}t.keys=()=>[],t.resolve=t,t.id=22365,e.exports=t},78791(e,t,r){"use strict";r.d(t,{t:()=>l});var a=r(12965),n=r(96540),o=r(74848),s=r(4288),i=r(96008);function l({content:e,showValidation:t=!1,showConnection:r=!1,className:c,theme:d}){let p=(0,n.useId)(),{setTheme:u}=(0,s.l)(),f=c?.split(/\s+/).includes("dark")??!1;(0,n.useEffect)(()=>{s._.getState().setRawJson(e)},[e]),(0,n.useEffect)(()=>{u(f?"dark":"light")},[f,u]);let b=d?(0,a.t)("a2a-root",p,d):null;return(0,o.jsxs)("div",{"data-renderer-id":p,className:"h-full",children:[b&&(0,o.jsx)("style",{children:b}),(0,o.jsx)(i.Bc,{readOnly:!0,showValidation:t,showConnection:r})]})}},3905(e,t,r){"use strict";r.d(t,{n:()=>d,t:()=>S});var a=r(12965),n=r(96540),o=r(29152),s=r(74848),i=r(13406),l=r(85096),c={version:"",configs:[],rootFields:{},getDocumentationUrl(e){return(this.configs.find(t=>t.extensions?.[e])??this.configs.find(t=>t.prefixStartsWith&&e.startsWith(t.prefixStartsWith)))?.documentationUrl?.(e,{version:this.version})}};function d({attributeName:e}){let t=c.getDocumentationUrl(e);return t?(0,s.jsx)("a",{href:t,style:{marginLeft:4,marginTop:4},target:"_blank",rel:"noreferrer",title:"View in AsyncAPI Specification",children:(0,s.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",children:(0,s.jsx)("path",{d:"M10.604 1h4.146a.25.25 0 01.25.25v4.146a.25.25 0 01-.427.177L13.03 4.03 9.28 7.78a.75.75 0 01-1.06-1.06l3.75-3.75-1.543-1.543A.25.25 0 0110.604 1zM3.75 2A1.75 1.75 0 002 3.75v8.5c0 .966.784 1.75 1.75 1.75h8.5A1.75 1.75 0 0014 12.25v-3.5a.75.75 0 00-1.5 0v3.5a.25.25 0 01-.25.25h-8.5a.25.25 0 01-.25-.25v-8.5a.25.25 0 01.25-.25h3.5a.75.75 0 000-1.5h-3.5z"})})}):null}function p({name:e,label:t}){return(0,s.jsxs)("div",{className:"asyncapi-attr-label",children:[t," ",(0,s.jsx)(d,{attributeName:e})]})}function u(e){if(null==e)return(0,s.jsx)("span",{className:"asyncapi-attr-placeholder",children:"\u2014"});if("boolean"==typeof e)return(0,s.jsx)("span",{children:e?"Yes":"No"});if("number"==typeof e)return(0,s.jsx)("span",{children:e});if(Array.isArray(e))return(0,s.jsx)("ul",{className:"asyncapi-attr-list",children:e.map((e,t)=>(0,s.jsx)("li",{children:u(e)},t))});if("object"==typeof e)return(0,s.jsx)("dl",{className:"asyncapi-attr-obj",children:Object.entries(e).map(([e,t])=>(0,s.jsxs)("div",{className:"asyncapi-attr-obj-row",children:[(0,s.jsxs)("dt",{className:"asyncapi-attr-obj-key",children:[e,":"]})," ",(0,s.jsx)("dd",{className:"asyncapi-attr-obj-val",children:u(t)})]},e))});let t=String(e);return/[*_`[\]#]/.test(t)?(0,s.jsx)(o.oz,{children:t}):(0,s.jsx)("span",{children:t})}function f(e){let t=e.valueLinks?.[e.value];return(0,s.jsxs)("div",{className:"asyncapi-attr-row",children:[(0,s.jsx)(p,{name:e.name,label:e.label}),(0,s.jsx)("p",{className:"asyncapi-attr-value",children:t?(0,s.jsx)("a",{href:t,rel:"noreferrer noopener",target:"_blank",className:"asyncapi-attr-link",children:e.value}):e.value})]})}function b(e){return(0,s.jsxs)("div",{className:"asyncapi-attr-row",children:[(0,s.jsx)(p,{name:e.name,label:e.label}),(0,s.jsx)("p",{className:"asyncapi-attr-value",children:e.value?"Yes":"No"})]})}function h(e){return(0,s.jsxs)("div",{className:"asyncapi-attr-row",children:[(0,s.jsx)(p,{name:e.name,label:e.label}),(0,s.jsx)("p",{className:"asyncapi-attr-value",children:e.value})]})}function m(e){return(0,s.jsxs)("div",{className:"asyncapi-attr-row",children:[(0,s.jsx)(p,{name:e.name,label:e.label}),(0,s.jsx)("div",{className:"asyncapi-attr-value",children:(0,s.jsx)("ul",{className:"asyncapi-attr-list",children:e.value.map((e,t)=>(0,s.jsx)("li",{children:u(e)},t))})})]})}function y(e){return(0,s.jsxs)("div",{className:"asyncapi-attr-row",children:[(0,s.jsx)(p,{name:e.name,label:e.label}),(0,s.jsx)("div",{className:"asyncapi-attr-value",children:u(e.value)})]})}function x(e){let t=e.callback(e.value);return(0,s.jsxs)("div",{className:"asyncapi-attr-row",children:[(0,s.jsx)(p,{name:e.name,label:e.label}),(0,s.jsx)("p",{className:"asyncapi-attr-value",children:t?(0,s.jsx)("a",{href:t,rel:"noreferrer noopener",target:"_blank",className:"asyncapi-attr-link",children:String(e.value)}):String(e.value)})]})}function g(e,t,r){return t&&"component"in t?t.component:function({propertyValue:a}){var n;let o;if(null==a)return null;let i=t&&"label"in t&&t.label?t.label:(n=r.prefixStartsWith,o=e,n&&o.startsWith(n)&&(o=o.slice(n.length)),o.replace(/([a-z])([A-Z])/g,"$1-$2").split("-").filter(Boolean).map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(" "));if(t?.type==="link")return(0,s.jsx)(x,{name:e,label:i,value:a,callback:t.callback});if(t?.type==="boolean"||"boolean"==typeof a)return(0,s.jsx)(b,{name:e,label:i,value:!!a});if(t?.type==="number"||"number"==typeof a)return(0,s.jsx)(h,{name:e,label:i,value:a});if(t?.type==="array"||Array.isArray(a))return Array.isArray(a)?(0,s.jsx)(m,{name:e,label:i,value:a}):null;if(t?.type==="object"||"object"==typeof a)return(0,s.jsx)(y,{name:e,label:i,value:a});let l=t&&"valueLinks"in t?t.valueLinks:void 0;return(0,s.jsx)(f,{name:e,label:i,value:String(a),valueLinks:l})}}var v=new Set(["asyncapi","info","channels","operations","components","servers","tags","id","defaultContentType","externalDocs"]),j=`
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
`,k={"--ord-background":"#1e1e1e","--ord-foreground":"#d4d4d4","--ord-card":"#252526","--ord-primary":"#0098ff","--ord-primary-foreground":"#1e1e1e","--ord-muted":"#2d2d30","--ord-muted-foreground":"#969696","--ord-border":"#3e3e42"};function S({content:e,config:t,customAttributes:r,className:o,theme:d}){let p,u,f,b,h,m,y,x,w,N,A,O,D,P,$=(0,n.useId)(),E=o?.split(/\s+/).includes("dark")??!1,M=d??(E?k:null),C=M?(p=M["--ord-background"],u=M["--ord-foreground"],f=M["--ord-secondary"],b=M["--ord-secondary-foreground"],h=M["--ord-muted"],m=M["--ord-muted-foreground"],y=M["--ord-border"],x=M["--ord-primary"],w=M["--ord-primary-foreground"],N=M["--ord-accent"],A=M["--ord-accent-foreground"],O=M["--ord-radius"],D=[],P=`[data-renderer-id="${$}"]`,p&&D.push(`${P} .bg-white { background-color: ${p} !important; }`),u&&D.push(`${P} {color: ${u}; }`),N&&A&&D.push(`${P} .bg-blue-100 { color: ${A}; background-color: ${N}; }`),f&&D.push(`${P} .bg-gray-100 { background-color: ${f} !important; }`),b&&D.push(`${P} .prose, ${P} .text-gray-700 { color: ${b}; }`),h&&D.push(`${P} .bg-gray-200 { background-color: ${h} !important; }`),m&&D.push(`${P} .text-gray-500, ${P} .text-gray-600 { color: ${m} !important; }`),x&&D.push(`${P} .bg-gray-800 { background-color: ${x} !important; }`,`${P} .bg-blue-100 .text-purple-700 { color: ${x}; }`),w&&D.push(`${P} .text-white { color: ${w} !important; }`),f&&D.push(`${P} .bg-gray-400 { background-color: ${f} !important; }`),A&&D.push(`${P} .text-gray-200, ${P} .examples .text-gray-600 { color: ${A} !important; } `),u&&D.push(`${P} .text-gray-800, ${P} .text-gray-900 { color: ${u} !important; }`),y&&D.push(`${P} .border { border-color: ${y}; }`,`${P} .border-b { border-bottom-color: ${y}; }`,`${P} .border-gray-400 { border-color: ${y} !important; }`),O&&D.push(`${P} .rounded, ${P} .prose pre, ${P} .\\32 xl\\:rounded { border-radius: ${O}px; }`,`${P} .rounded:not(.inline-block) { overflow: hidden; }`,`${P} .rounded-tl-none { border-top-left-radius: 0px; }`),D.join("\n")):null,T=(0,n.useMemo)(()=>r??[],[r]),R=void 0!==r,I=(0,n.useMemo)(()=>R?(0,a.i)(e):null,[e,R]),W=(0,n.useMemo)(()=>"string"==typeof I?.asyncapi?I.asyncapi:"",[I]),U=(0,n.useMemo)(()=>{if(!R)return t??{};let e=function(e,t,r){if(c.version=r,c.configs=e,t){let r=e.map(e=>e.prefixStartsWith).filter(Boolean);c.rootFields=r.length?function(e,t){let r={};for(let[a,n]of Object.entries(e))!v.has(a)&&a.startsWith("x-")&&t.some(e=>a.startsWith(e))&&(r[a]=n);return r}(t,r):{}}else c.rootFields={};let a={};for(let r of e){for(let[e,t]of Object.entries(r.extensions??{}))a[e]=g(e,t,r);if(r.prefixStartsWith&&t)for(let e of function(e,t){let r=new Set,a=e=>{if(e&&"object"==typeof e)for(let a of Object.keys(e))a.startsWith(t)&&r.add(a)};a(e),a(e.info);let n=e.channels;if(n)for(let e of Object.values(n)){if(!e||"object"!=typeof e)continue;for(let t of(a(e),["subscribe","publish","send","receive"])){let r=e[t];r&&"object"==typeof r&&(a(r),a(r.message))}let t=e.messages;if(t)for(let e of Object.values(t))a(e)}let o=e.operations;if(o)for(let e of Object.values(o))a(e);let s=e.components;if(s){for(let e of["messages","messageTraits"]){let t=s[e];if(t)for(let e of Object.values(t))a(e)}let e=s.schemas;if(e)for(let t of Object.values(e))a(t);let t=s.channels;if(t)for(let e of Object.values(t))a(e);let r=s.operations;if(r)for(let e of Object.values(r))a(e)}return[...r]}(t,r.prefixStartsWith))a[e]||(a[e]=g(e,void 0,r))}return a}(T,I,W);return{...t,extensions:{...e,...t?.extensions??{}}}},[t,R,T,I,W]),F=(0,n.useMemo)(()=>R?function(e){function t(t){let r=Object.entries(c.rootFields);if(!r.length)return null;let a=r.flatMap(([t,r])=>{let a=c.configs.find(e=>e.extensions?.[t])??c.configs.find(e=>e.prefixStartsWith&&t.startsWith(e.prefixStartsWith))??e[0];if(!a)return[];let o=a.extensions?.[t];return[(0,n.createElement)(g(t,o,a),{key:t,propertyName:t,propertyValue:r,document:void 0,parent:void 0})]});return a.length?(0,n.createElement)("div",null,...a):null}return{name:"sap-root-extensions",version:"1.0.0",install(e){e.registerComponent(l.WN.INFO,t)}}}(T):null,[R,T]),L=`[data-renderer-id="${$}"]`,_=`${L} { container: asyncapi-attrs / inline-size; height: 100%; overflow: auto; scrollbar-gutter: stable; }
${L} :where(h1,h2,h3,h4,p,span,strong,a,li,td,div):not(pre *) { overflow-wrap: anywhere; }`;return(0,s.jsxs)("div",{"data-renderer-id":$,className:o,children:[C&&(0,s.jsx)("style",{children:C}),R&&(0,s.jsx)("style",{children:j}),(0,s.jsx)("style",{children:_}),R&&(0,s.jsx)("style",{children:`[data-renderer-id="${$}"] #introduction .hidden { display: block !important; }`}),!R&&(0,s.jsx)("style",{children:`[data-renderer-id="${$}"] :is(#operations, #messages) div:has(> .flex.py-2 span.Extensions) { display: none; }`}),(0,s.jsx)(i,{schema:e,config:U,plugins:F?[F]:[]})]})}},59625(e,t,r){"use strict";r.d(t,{t:()=>p});var a=r(12965),n=r(96540),o=r(74848),s=r(90580),i=`
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
`;function l(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function c(e,t,r,a){let n=e.ownerDocument.createElement("template");n.innerHTML=a,e.insertBefore(n.content,t);let o=t;for(;o;){let t=o.nextSibling,a=o===r;if(e.removeChild(o),a)break;o=t}}function d(e,t){if(e.nodeType!==Node.TEXT_NODE)return null;let r=(e.textContent??"").replace(/^\s+/,""),a=/^@([\w.]+):\s*$/.exec(r);if(!a||!t||t.nodeType!==Node.ELEMENT_NODE)return null;let n=null;return("CODE"===t.tagName?n=t:"A"===t.tagName&&(n=t.querySelector("code")),n)?{key:`@${a[1]}`,valueNode:t,codeEl:n}:null}function p({content:e,config:t,customAttributes:r,className:u,theme:f}){let[b,h]=(0,n.useState)({kind:"idle"});return(0,n.useEffect)(()=>{let n;if(!e)return void h({kind:"idle"});let o=!1;h({kind:"loading"});try{n=JSON.parse(e)}catch(e){h({kind:"error",message:String(e)});return}let i=r??[],p=void 0!==r,u=p?(0,a.i)(e):null,f=p?function(e){let t={};for(let r of e)for(let[e,a]of Object.entries(r.annotations??{}))if("type"in a&&"link"===a.type&&"callback"in a&&!(e in t)){let r=a.callback;t[e]=e=>r(e)??""}return t}(i):{},b={...t,annotationLinkCallbacks:{...f,...t?.annotationLinkCallbacks}};return(0,s.JF)(n,b).then(e=>{let t=p?function(e,t,r){let a=new Map;for(let e of t){for(let[t,r]of Object.entries(e.annotations??{}))a.has(t)||a.set(t,{def:r,config:e});if(e.prefixStartsWith&&r)for(let t of function(e,t){let r=new Set,a=e=>{if(e&&"object"==typeof e)for(let a of Object.keys(e))a.startsWith(t)&&r.add(a)},n=e.definitions;if(n)for(let e of Object.values(n)){a(e);let t=e?.elements;if(t)for(let e of Object.values(t))a(e)}return[...r]}(r,e.prefixStartsWith))a.has(t)||a.set(t,{def:void 0,config:e})}if(0===a.size)return e;let n=new DOMParser().parseFromString(e,"text/html");for(let e of Array.from(n.querySelectorAll("td, p")))for(let{textNode:t,valueNode:r,codeEl:n,key:o,entry:s}of function(e,t){let r=[],a=Array.from(e.childNodes);for(let e=0;e<a.length-1;e++){let n=d(a[e],a[e+1]);if(!n)continue;let o=t.get(n.key);o&&r.push({textNode:a[e],valueNode:n.valueNode,codeEl:n.codeEl,key:n.key,entry:o})}return r}(e,a)){let a=function(e,t,r,a){var n;let o;if(null==t)return"";let s=r&&!("render"in r)&&"label"in r&&r.label?r.label:(n=a.prefixStartsWith??"@",o=e,n&&o.startsWith(n)&&(o=o.slice(n.length)),o.split(".").filter(Boolean).map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(" \xb7 ")),i=a.documentationUrl?.(e),c=i?` <a href="${l(i)}" class="csn-attr-doclink" target="_blank" rel="noreferrer" title="Documentation">\u{2197}</a>`:"",d=function e(t,r){if(null==t)return"";if(r&&"render"in r)return r.render(t);if(r?.type==="link"&&"callback"in r){let e=r.callback(t),a=l(String(t));return e?`<a href="${l(e)}" class="csn-attr-link" target="_blank" rel="noreferrer">${a}</a>`:a}if(r?.type==="boolean"||"boolean"==typeof t)return t?"Yes":"No";if(r?.type==="number"||"number"==typeof t)return l(String(t));if(r?.type==="array"||Array.isArray(t))return Array.isArray(t)?`<span class="csn-attr-list">${t.map(t=>`<span class="csn-attr-list-item">${e(t,void 0)}</span>`).join("")}</span>`:l(String(t));if(r?.type==="object"||"object"==typeof t&&null!==t){let r=Object.entries(t);return 1===r.length&&"#"===r[0][0]?l(String(r[0][1])):`<span class="csn-attr-obj">${r.map(([t,r])=>`<span class="csn-attr-kv"><span class="csn-attr-kv-key">${l(t)}</span><span class="csn-attr-kv-val">${e(r,void 0)}</span></span>`).join("")}</span>`}if(r&&"valueLinks"in r&&r.valueLinks){let e=r.valueLinks[String(t)],a=l(String(t));return e?`<a href="${l(e)}" class="csn-attr-link" target="_blank" rel="noreferrer">${a}</a>`:a}return l(String(t))}(t,r);return d?`<span class="csn-attr-row"><span class="csn-attr-label">${l(s)}${c}</span><span class="csn-attr-value">${d}</span></span>`:""}(o,function(e){try{return JSON.parse(e)}catch{return e}}(n.textContent??""),s.def,s.config);a&&c(e,t,r,a)}return n.body.innerHTML}(e,i,u):function(e){let t=new DOMParser().parseFromString(e,"text/html");for(let e of Array.from(t.querySelectorAll("td, p"))){let t=Array.from(e.childNodes),r=[];for(let e=0;e<t.length-1;e++){let a=d(t[e],t[e+1]);a&&r.push({textNode:t[e],valueNode:a.valueNode,br:function(e){let t=e.previousSibling;return t&&t.nodeType===Node.TEXT_NODE&&!(t.textContent??"").trim()&&(t=t.previousSibling),t&&t.nodeType===Node.ELEMENT_NODE&&"BR"===t.tagName?t:null}(t[e])})}for(let{textNode:t,valueNode:a,br:n}of r)c(e,t,a,""),n&&n.parentNode===e&&e.removeChild(n)}return t.body.innerHTML}(e);o||h({kind:"ready",html:t})}).catch(e=>{o||h({kind:"error",message:String(e)})}),()=>{o=!0}},[e,t,r]),(0,o.jsxs)("div",{className:`csn-root${u?` ${u}`:""}`,style:f,children:[(0,o.jsx)("style",{children:i}),"ready"===b.kind&&(0,o.jsx)("div",{className:"p-4",dangerouslySetInnerHTML:{__html:b.html}}),"error"===b.kind&&(0,o.jsxs)("div",{children:[(0,o.jsx)("h1",{children:"Invalid CSN"}),(0,o.jsx)("div",{children:b.message})]})]})}},5792(e,t,r){"use strict";r.d(t,{t:()=>l});var a=r(12965),n=r(96540),o=r(74848),s=r(85240),i=r(91604);function l({content:e,showValidation:t=!1,className:r,theme:c}){let d=(0,n.useId)(),{setTheme:p}=(0,s.E)(),u=r?.split(/\s+/).includes("dark")??!1;(0,n.useEffect)(()=>{s.S.getState().setRawJson(e)},[e]),(0,n.useEffect)(()=>{p(u?"dark":"light")},[u,p]);let f=c?(0,a.t)("mcp-root",d,c):null;return(0,o.jsxs)("div",{"data-renderer-id":d,className:"h-full",children:[f&&(0,o.jsx)("style",{children:f}),(0,o.jsx)(i.t,{readOnly:!0,showValidation:t})]})}},7757(e,t,r){"use strict";r.d(t,{n:()=>u,t:()=>M});var a=r(12965),n=r(96540),o=r(30897),s=r(29152),i=r(74848),l=r(98207),c={version:"",configs:[],getDocumentationUrl(e){return(this.configs.find(t=>t.extensions?.[e])??this.configs.find(t=>t.prefixStartsWith&&e.startsWith(t.prefixStartsWith)))?.documentationUrl?.(e,{version:this.version})}},d=["get","put","post","delete","options","head","patch","trace"],p="x-sap-schema-attrs";function u({attributeName:e}){let t=c.getDocumentationUrl(e);return t?(0,i.jsx)("a",{href:t,style:{marginLeft:4},target:"_blank",rel:"noreferrer",title:"View in OpenAPI Specification",children:(0,i.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",children:(0,i.jsx)("path",{d:"M10.604 1h4.146a.25.25 0 01.25.25v4.146a.25.25 0 01-.427.177L13.03 4.03 9.28 7.78a.75.75 0 01-1.06-1.06l3.75-3.75-1.543-1.543A.25.25 0 0110.604 1zM3.75 2A1.75 1.75 0 002 3.75v8.5c0 .966.784 1.75 1.75 1.75h8.5A1.75 1.75 0 0014 12.25v-3.5a.75.75 0 00-1.5 0v3.5a.25.25 0 01-.25.25h-8.5a.25.25 0 01-.25-.25v-8.5a.25.25 0 01.25-.25h3.5a.75.75 0 000-1.5h-3.5z"})})}):null}function f({name:e,label:t}){return(0,i.jsxs)("div",{className:"sap-api-label",children:[t," ",(0,i.jsx)(u,{attributeName:e})]})}function b(e){let t=e.valueLinks?.[e.value];return(0,i.jsxs)("div",{className:"sap-api-container",children:[(0,i.jsx)(f,{name:e.name,label:e.label}),(0,i.jsx)("p",{className:"sap-api-value",children:t?(0,i.jsx)("a",{href:t,rel:"noreferrer noopener",target:"_blank",className:"sap-api-link",children:e.value}):e.value})]})}function h(e){return(0,i.jsxs)("div",{className:"sap-api-container",children:[(0,i.jsx)(f,{name:e.name,label:e.label}),(0,i.jsx)("p",{className:"sap-api-value",children:e.value?"Yes":"No"})]})}function m(e){return(0,i.jsxs)("div",{className:"sap-api-container",children:[(0,i.jsx)(f,{name:e.name,label:e.label}),(0,i.jsx)("p",{className:"sap-api-value",children:e.value})]})}function y(e){return(0,i.jsxs)("div",{className:"sap-api-container",children:[(0,i.jsx)(f,{name:e.name,label:e.label}),(0,i.jsx)("div",{className:"sap-api-value",children:(0,i.jsx)("ul",{className:"sap-api-list",children:e.value.map((e,t)=>(0,i.jsx)("li",{children:x(e)},t))})})]})}function x(e){if(null==e)return(0,i.jsx)("span",{className:"sap-api-placeholder",children:"\u2014"});if("boolean"==typeof e)return(0,i.jsx)("span",{children:e?"Yes":"No"});if("number"==typeof e)return(0,i.jsx)("span",{children:e});if(Array.isArray(e))return(0,i.jsx)("ul",{className:"sap-api-list",children:e.map((e,t)=>(0,i.jsx)("li",{children:x(e)},t))});if("object"==typeof e)return(0,i.jsx)("dl",{className:"sap-api-obj",children:Object.entries(e).map(([e,t])=>(0,i.jsxs)("div",{className:"sap-api-obj-row",children:[(0,i.jsxs)("dt",{className:"sap-api-obj-key",children:[e,":"]})," ",(0,i.jsx)("dd",{className:"sap-api-obj-val",children:x(t)})]},e))});let t=String(e);return/[*_`[\]#]/.test(t)?(0,i.jsx)(s.oz,{children:t}):(0,i.jsx)("span",{children:t})}function g(e){return(0,i.jsxs)("div",{className:"sap-api-container",children:[(0,i.jsx)(f,{name:e.name,label:e.label}),(0,i.jsx)("div",{className:"sap-api-value",children:x(e.value)})]})}function v(e){let t=e.callback(e.value);return(0,i.jsxs)("div",{className:"sap-api-container",children:[(0,i.jsx)(f,{name:e.name,label:e.label}),(0,i.jsx)("p",{className:"sap-api-value",children:t?(0,i.jsx)("a",{href:t,rel:"noreferrer noopener",target:"_blank",className:"sap-api-link",children:String(e.value)}):String(e.value)})]})}function j(e,t,r){return t&&"component"in t?t.component:a=>{var n;let o,s=function(e,t){if(e&&"object"==typeof e)return e[t.replace(/-./g,e=>e[1].toUpperCase())]}(a,e);if(null==s)return null;let l=t&&"label"in t&&t.label?t.label:(n=r.prefixStartsWith,o=e,n&&o.startsWith(n)&&(o=o.slice(n.length)),o.split("-").filter(Boolean).map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(" "));if(t?.type==="link"&&"callback"in t)return(0,i.jsx)(v,{name:e,label:l,value:s,callback:t.callback});if(t?.type==="boolean"||"boolean"==typeof s)return(0,i.jsx)(h,{name:e,label:l,value:!!s});if(t?.type==="number"||"number"==typeof s)return(0,i.jsx)(m,{name:e,label:l,value:s});if(t?.type==="array"||Array.isArray(s))return Array.isArray(s)?(0,i.jsx)(y,{name:e,label:l,value:s}):null;if(t?.type==="object"||"object"==typeof s)return(0,i.jsx)(g,{name:e,label:l,value:s});let c=t&&"valueLinks"in t?t.valueLinks:void 0;return(0,i.jsx)(b,{name:e,label:l,value:String(s),valueLinks:c})}}var k={"--ord-background":["--scalar-background-1"],"--ord-foreground":["--scalar-color-1"],"--ord-secondary":["--scalar-background-2"],"--ord-secondary-foreground":["--scalar-color-2"],"--ord-muted":["--scalar-background-3"],"--ord-muted-foreground":["--scalar-color-3"],"--ord-primary":["--scalar-color-accent","--scalar-button-1","--scalar-link-color","--scalar-button-1-hover","--scalar-link-color-hover"],"--ord-primary-foreground":["--scalar-button-1-color"],"--ord-border":["--scalar-border-color"],"--ord-destructive":["--scalar-color-red","--scalar-color-danger"],"--ord-success":["--scalar-color-green"],"--ord-warning":["--scalar-color-orange"],"--ord-radius":["--scalar-radius","--scalar-radius-lg"]},S={"--ord-sidebar":["--scalar-sidebar-background-1"],"--ord-sidebar-foreground":["--scalar-sidebar-color-1"],"--ord-sidebar-primary":["--scalar-sidebar-background-2"],"--ord-sidebar-primary-foreground":["--scalar-sidebar-color-2","--scalar-sidebar-search-color"],"--ord-sidebar-accent":["--scalar-sidebar-item-active-background","--scalar-sidebar-item-hover-background","--scalar-sidebar-search-background"],"--ord-sidebar-accent-foreground":["--scalar-sidebar-color-active","--scalar-sidebar-item-hover-color"],"--ord-sidebar-border":["--scalar-sidebar-border-color","--scalar-sidebar-search-border-color"]};function w(e,t){return"--ord-radius"===e?`${t}px`:t}var N={selector:".scalar-app",map(e){let t={};for(let[r,a]of Object.entries(e)){let e=k[r];if(!e)continue;let n=w(r,a);for(let r of e)t[r]=n}return t}},A={selector:".scalar-app .t-doc__sidebar",map(e){let t={};for(let[r,a]of Object.entries(e)){let e=S[r];if(e)for(let r of e)t[r]=a}return t}},O={selector:".scalar-app .dark-mode, .scalar-app.dark-mode, .scalar-app .light-mode, .scalar-app.light-mode",map(e){let t={};for(let[r,a]of Object.entries(e)){let e=k[r];if(!e)continue;let n=w(r,a);for(let r of e)t[r]=n}return t}},D=["--ord-hljs-attr","--ord-hljs-string","--ord-hljs-number","--ord-hljs-function","--ord-hljs-literal","--ord-hljs-punctuation","--ord-hljs-keyword","--ord-hljs-comment"],P={selector:".scalar-app",map(e){let t={};for(let r of D)r in e&&(t[r]=e[r]);return t}},$={selector:".scalar-app, #headlessui-portal-root",map(e){let t={};for(let[r,a]of Object.entries(e)){let e=k[r];if(!e)continue;let n=w(r,a);for(let r of e)t[r]=n}return t}},E=`
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
`;function M({content:e,customAttributes:t,className:r,theme:s}){let u,f,b=(0,n.useId)(),h=(0,n.useRef)(null),m=r?.split(/\s+/).includes("dark")??!1,y=(0,n.useMemo)(()=>t??[],[t]),x=void 0!==t;(0,n.useEffect)(()=>{let e=h.current;if(!e)return;let t=new ResizeObserver(([t])=>{e.style.setProperty("--scalar-container-height",`${t.contentRect.height}px`)});return t.observe(e),()=>{t.disconnect(),window.location.hash&&history.replaceState(null,"",window.location.pathname+window.location.search)}},[]);let g=(0,n.useMemo)(()=>{if(!x)return"";let t=(0,a.i)(e);return t?y.flatMap(e=>(function(e,t){let r=[];for(let[a,n]of Object.entries(e))a.startsWith(t)&&r.push([a,n]);let a=e.paths;if(a){for(let[e,n]of Object.entries(a))if(n&&"object"==typeof n)for(let a of d){let o=n[a];if(o&&"object"==typeof o)for(let[n,s]of Object.entries(o))n.startsWith(t)&&r.push([`paths.${e}.${a}.${n}`,s])}}let n=e.components?.schemas;if(n)for(let[e,a]of Object.entries(n)){if(!a||"object"!=typeof a)continue;for(let[n,o]of Object.entries(a))n.startsWith(t)&&r.push([`components.schemas.${e}.${n}`,o]);let n=a.properties;if(n){for(let[a,o]of Object.entries(n))if(o&&"object"==typeof o)for(let[n,s]of Object.entries(o))n.startsWith(t)&&r.push([`components.schemas.${e}.properties.${a}.${n}`,s])}}return r})(t,e.prefixStartsWith??"").map(([e,t])=>`${e}=${JSON.stringify(t)}`)).join("|"):""},[e,x,y]),v=(0,n.useMemo)(()=>{let t;c.version=(t=(0,a.i)(e))?"openapi"in t&&t.openapi&&"string"==typeof t.openapi?t.openapi.substring(0,3):"swagger"in t&&t.swagger&&"string"==typeof t.swagger?"2.0":"":"",c.configs=x?y:[];let r=(0,a.i)(e),o=y.map(e=>e.prefixStartsWith).filter(Boolean);return{content:x&&r&&o.length?function(e,t){let r=e.components?.schemas;if(!r)return e;let a={},n=!1;for(let[e,o]of Object.entries(r)){if(!o||"object"!=typeof o){a[e]=o;continue}let r={};for(let[e,a]of Object.entries(o))t.some(t=>e.startsWith(t))&&(r[e]=a);if(0===Object.keys(r).length){a[e]=o;continue}n=!0,a[e]={...o,properties:{[p]:{[p]:r},...o.properties}}}return n?{...e,components:{...e.components,schemas:a}}:e}(r,o):r??e,plugins:x?[function(e,t){let r=new Set;for(let a of t){if(a.extensions)for(let e of Object.keys(a.extensions))r.add(e);if(a.prefixStartsWith&&e)for(let t of function(e,t){let r=new Set;for(let a of Object.keys(e))a.startsWith(t)&&r.add(a);let a=e.paths;if(a){for(let e of Object.values(a))if(e&&"object"==typeof e)for(let a of d){let n=e[a];if(n&&"object"==typeof n)for(let e of Object.keys(n))e.startsWith(t)&&r.add(e)}}let n=e.components?.schemas;if(n)for(let e of Object.values(n)){if(!e||"object"!=typeof e)continue;for(let a of Object.keys(e))a.startsWith(t)&&r.add(a);let a=e.properties;if(a){for(let e of Object.values(a))if(e&&"object"==typeof e)for(let a of Object.keys(e))a.startsWith(t)&&r.add(a)}}return[...r]}(e,a.prefixStartsWith))r.add(t)}let a=[...r].map(e=>{let r=t.find(t=>t.extensions?.[e])??t.find(t=>t.prefixStartsWith&&e.startsWith(t.prefixStartsWith))??t[0],a=r?.extensions?.[e];return{name:e,component:j(e,a,r??{}),renderer:l.N}});return a.push({name:p,component:e=>{if(!e||"object"!=typeof e)return null;let r=e.xSapSchemaAttrs??e["x-sap-schema-attrs"];if(!r||"object"!=typeof r)return null;let a=function(e){let t={};for(let[r,a]of Object.entries(e))t[r.replace(/-./g,e=>e[1].toUpperCase())]=a;return t}(r),o=[];for(let e of Object.keys(r)){if(!e.startsWith("x-"))continue;let r=t.find(t=>t.extensions?.[e])??t.find(t=>t.prefixStartsWith&&e.startsWith(t.prefixStartsWith));if(!r)continue;let n=r.extensions?.[e],s=j(e,n,r)(a);s&&o.push(s)}return 0===o.length?null:(0,n.createElement)("div",{className:"sap-schema-attrs-block"},...o)},renderer:l.N}),()=>({name:"custom-attributes-plugin",extensions:a})}(r,y)]:[],forceDarkModeState:m?"dark":"light",hideDarkModeToggle:!0,hideClientButton:!0,showDeveloperTools:"never"}},[e,m,x,y]);return(0,i.jsxs)("div",{ref:h,"data-renderer-id":b,style:{height:"100%",...s},children:[(0,i.jsx)("style",{children:E}),s&&(0,i.jsx)("style",{children:(u=`[data-renderer-id="${b}"]`,[[N,A,O,P].map(e=>{let t=Object.entries(e.map(s)).map(([e,t])=>`  ${e}: ${t};`).join("\n");return t?`${u} ${e.selector} {
${t}
}`:""}).filter(Boolean).join("\n\n"),!(f=Object.entries($.map(s)).map(([e,t])=>`  ${e}: ${t};`).join("\n"))?"":`${$.selector} {
${f}
}`].filter(Boolean).join("\n\n"))}),(0,i.jsx)(o.B,{configuration:v},`${m?"dark":"light"}-${x}-${g}`)]})}},83602(e,t,r){"use strict";r.r(t),r.d(t,{A2ARenderer:()=>i.t,AsyncApiRenderer:()=>s.t,CsnRenderer:()=>o.t,McpRenderer:()=>l.t,MetadataRenderer:()=>b,OpenApiRenderer:()=>n.t,createTheme:()=>m,detectMetaType:()=>a.n,extractVersion:()=>a.r,loadObject:()=>a.i,sapAsyncApiAttributesConfig:()=>N,sapCsnAttributesConfig:()=>A,sapOpenApiAttributesConfig:()=>k});var a=r(12965),n=r(7757),o=r(59625),s=r(3905),i=r(78791),l=r(5792),c=r(96540),d=r(29152),p=r(74848),u={openapi:n.t,csn:o.t,asyncapi:s.t,a2a:i.t,mcp:l.t},f={openapi:"OpenAPI",csn:"CSN",asyncapi:"AsyncAPI",a2a:"A2A",mcp:"MCP"};function b({content:e,renderers:t,options:r,type:n,className:o,theme:s}){let i,l=r?.autoDetect!==!1,d=r?.strictTypeCheck!==!1,h=(0,c.useMemo)(()=>n||(l?(0,a.n)(e):"unknown"),[n,l,e]),m=(0,c.useMemo)(()=>n&&e?(0,a.n)(e):null,[n,e]),y=null!==m&&m!==n&&("unknown"!==m||d),x=(0,c.useMemo)(()=>(0,a.r)(h,e),[h,e]),g=f[h],v=(t??u)[h];if(y){let e="unknown"===m?"an unrecognised format":`\u{2018}${f[m]??m}\u{2019}`;i=(0,p.jsxs)("div",{style:{padding:16,fontFamily:"system-ui, sans-serif"},children:[(0,p.jsx)("strong",{children:"Type mismatch:"})," content was detected as ",e," but \u2018",f[n]??n,"\u2019 was specified."]})}else if(v){let t,a,n;i=(0,p.jsx)(v,{content:e,className:o,theme:s,...(t={},n=!1!==(a=r?.customAttributes)?a:void 0,"openapi"===h&&n?.openapi&&(t.customAttributes=n.openapi),"asyncapi"===h&&(r?.asyncapi&&Object.assign(t,{config:r.asyncapi}),n?.asyncapi&&(t.customAttributes=n.asyncapi)),"csn"===h&&(r?.csn&&Object.assign(t,{config:r.csn}),n?.csn&&(t.customAttributes=n.csn)),"a2a"===h&&r?.a2a&&Object.assign(t,r.a2a),"mcp"===h&&r?.mcp&&Object.assign(t,r.mcp),t)})}else i=r?.fallback==="raw"?(0,p.jsx)("pre",{style:{margin:0,padding:16,overflow:"auto",height:"100%"},children:e}):(0,p.jsxs)("div",{style:{padding:16,fontFamily:"system-ui, sans-serif"},children:[(0,p.jsx)("strong",{children:"Unsupported format:"})," No renderer registered for type \u2018",h,"\u2019."]});return(0,p.jsxs)("div",{style:{position:"relative",height:"100%",...s},children:[g&&(0,p.jsxs)("div",{style:{position:"absolute",top:8,right:8,zIndex:10,padding:"2px 8px",borderRadius:4,fontSize:11,fontFamily:"system-ui, sans-serif",lineHeight:"16px",pointerEvents:"none",background:"var(--ord-muted, #e5e7eb)",color:"var(--ord-muted-foreground, #6b7280)"},children:[g,x?` \xb7 ${x}`:""]}),i]})}var h={background:"--ord-background",foreground:"--ord-foreground",primary:"--ord-primary",primaryForeground:"--ord-primary-foreground",secondary:"--ord-secondary",secondaryForeground:"--ord-secondary-foreground",muted:"--ord-muted",mutedForeground:"--ord-muted-foreground",accent:"--ord-accent",accentForeground:"--ord-accent-foreground",destructive:"--ord-destructive",destructiveForeground:"--ord-destructive-foreground",success:"--ord-success",successForeground:"--ord-success-foreground",warning:"--ord-warning",warningForeground:"--ord-warning-foreground",border:"--ord-border",input:"--ord-input",ring:"--ord-ring",card:"--ord-card",cardForeground:"--ord-card-foreground",popover:"--ord-popover",popoverForeground:"--ord-popover-foreground",radius:"--ord-radius"};function m(e){let t={};for(let[r,a]of Object.entries(e))void 0!==a&&(t[h[r]]=a);return t}var y={ACTIVE:"color-mix(in srgb, var(--scalar-color-green) 15%, transparent)",BETA:"color-mix(in srgb, var(--scalar-color-blue) 15%, transparent)",DEPRECATED:"color-mix(in srgb, var(--scalar-color-orange) 15%, transparent)",DECOMMISSIONED:"color-mix(in srgb, var(--scalar-color-red) 15%, transparent)"},x={ACTIVE:"var(--scalar-color-green)",BETA:"var(--scalar-color-blue)",DEPRECATED:"var(--scalar-color-orange)",DECOMMISSIONED:"var(--scalar-color-red)"};function g(){return(0,p.jsxs)("svg",{viewBox:"0 0 24 24",width:"1em",height:"1em",fill:"none",stroke:"currentColor",strokeWidth:"2","aria-hidden":"true",children:[(0,p.jsx)("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2"}),(0,p.jsx)("path",{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"})]})}function v(){return(0,p.jsx)("svg",{viewBox:"0 0 24 24",width:"1em",height:"1em",fill:"none",stroke:"currentColor",strokeWidth:"2","aria-hidden":"true",children:(0,p.jsx)("path",{d:"M20 6 9 17l-5-5"})})}function j(e){return{component:e}}var k={prefixStartsWith:"x-sap-",documentationUrl:(e,{version:t})=>`https://github.com/SAP/openapi-specification/tree/main/sap-schemas/v${t}#${e}`,extensions:{"x-sap-compliance-level":{type:"link",label:"SAP Compliance Level",callback:e=>({"sap:base:v1":"https://github.com/open-resource-discovery/specification/blob/main/docs/spec-extensions/policy-levels/sap-base-v1.md","sap:core:v1":"https://github.com/open-resource-discovery/specification/blob/main/docs/spec-extensions/policy-levels/sap-core-v1.md","sap:core:v2":"https://github.com/open-resource-discovery/specification/blob/main/docs/spec-extensions/policy-levels/sap-core-v1.md"})[String(e)]},"x-sap-shortText":{type:"string",label:"SAP Short Text"},"x-sap-software-min-version":{type:"string",label:"SAP Software Version"},"x-sap-api-type":{type:"string",label:"SAP API Type"},"x-sap-direction":{type:"string",label:"SAP Direction"},"x-sap-ord-id":j(function({xSapOrdId:e}){let[t,r]=(0,c.useState)(!1);return e?(0,p.jsxs)("div",{className:"sap-api-container",children:[(0,p.jsxs)("div",{className:"sap-api-label",children:["ORD ID ",(0,p.jsx)(n.n,{attributeName:"x-sap-ord-id"})]}),(0,p.jsxs)("div",{className:"sap-api-value sap-api-ord-id",children:[(0,p.jsx)("span",{className:"sap-api-ord-id-text",children:e}),(0,p.jsx)("button",{type:"button",className:"sap-api-copy-btn",onClick:()=>{navigator.clipboard?.writeText(e).then(()=>{r(!0),setTimeout(()=>r(!1),1500)})},"aria-label":"Copy ORD ID",title:t?"Copied":"Copy",children:t?(0,p.jsx)(v,{}):(0,p.jsx)(g,{})})]})]}):null}),"x-sap-operation-intent":{type:"string",label:"SAP Operation Intent"},"x-sap-odm-oid":{type:"string",label:"ODM OID"},"x-sap-odm-oid-reference-entity-name":{type:"string",label:"ODM OID Reference Entity Name"},"x-sap-precision":{type:"number",label:"SAP Precision"},"x-sap-scale":{type:"number",label:"SAP Scale"},"x-sap-root-entity":{type:"boolean",label:"SAP Root Entity"},"x-sap-dpp-entity-semantics":{type:"string",label:"SAP DPP: Entity Semantics"},"x-sap-dpp-data-subject-role":{type:"string",label:"SAP DPP: Data Subject Role"},"x-sap-dpp-data-subject-role-description":{type:"string",label:"SAP DPP: Data Subject Role Description"},"x-sap-dpp-field-semantics":{type:"string",label:"SAP DPP: Field Semantics"},"x-sap-dpp-is-potentially-personal":{type:"boolean",label:"SAP DPP: Potentially Personal"},"x-sap-dpp-is-potentially-sensitive":{type:"boolean",label:"SAP DPP: Potentially Sensitive"},"x-sap-ext-overview":j(function(e){if(!("object"==typeof e&&null!==e&&"xSapExtOverview"in e&&Array.isArray(e.xSapExtOverview)&&e.xSapExtOverview.every(e=>"object"==typeof e&&null!==e&&"name"in e&&"values"in e&&"string"==typeof e.name&&("string"==typeof e.values||!!Array.isArray(e.values)&&(!!e.values.every(e=>"string"==typeof e)||e.values.every(e=>"object"==typeof e&&null!==e&&"text"in e&&"string"==typeof e.text&&"format"in e&&("plain"===e.format||"markdown"===e.format)))))))return null;let{xSapExtOverview:t}=e;return(0,p.jsxs)("div",{className:"sap-api-container",children:[(0,p.jsxs)("div",{className:"sap-api-label sap-api-label--root",children:["SAP Extensibility Overview ",(0,p.jsx)(n.n,{attributeName:"x-sap-ext-overview"})]}),(0,p.jsx)("div",{className:"sap-api-value sap-api-value--root",children:t.map(e=>(0,p.jsxs)("div",{children:[(0,p.jsx)("strong",{children:e.name}),(0,p.jsx)("ul",{className:"sap-api-list",children:"string"==typeof e.values?(0,p.jsx)("li",{children:e.values}):e.values.map(e=>"string"==typeof e?(0,p.jsx)("li",{children:e},e):(0,p.jsx)("li",{children:"plain"===e.format?e.text:(0,p.jsx)(d.oz,{children:e.text})},e.text))})]},e.name))})]})}),"x-sap-stateInfo":j(function({xSapStateInfo:e}){if(!e)return null;let t=e.state?.toUpperCase(),r=(0,p.jsx)("span",{style:{display:"inline-block",borderRadius:"10px",padding:"0 6px",background:y[t]||"",color:x[t]||""},children:t}),a=new Intl.DateTimeFormat("en-GB",{dateStyle:"long"}),o=e=>{let t=new Date(e);return isNaN(t.getTime())?e:a.format(t)};return(0,p.jsxs)("div",{className:"sap-api-container",children:[(0,p.jsxs)("div",{className:"sap-api-label",children:["API State ",(0,p.jsx)(n.n,{attributeName:"x-sap-stateInfo"})]}),(0,p.jsxs)("div",{className:"sap-api-value",children:[r,e.deprecationDate&&(0,p.jsxs)("div",{children:["Deprecated on ",o(e.deprecationDate)]}),e.decommissionedDate&&(0,p.jsxs)("div",{children:["Decommissioned on ",o(e.decommissionedDate)]}),e.successorApi&&(0,p.jsxs)("div",{children:["Successor API: ",(0,p.jsx)("a",{href:e.successorApi,target:"_blank",rel:"noreferrer",className:"sap-api-link",children:e.successorApi})]})]})]})}),"x-sap-extensible":{type:"object",label:"SAP Extensible"},"x-sap-deprecated-operation":j(function({xSapDeprecatedOperation:e}){let t=new Intl.DateTimeFormat("en-GB",{dateStyle:"long"}).format(new Date(e.deprecationDate));return(0,p.jsxs)("div",{className:"sap-api-container",children:[(0,p.jsxs)("div",{className:"sap-api-label",children:["SAP Deprecated Operation ",(0,p.jsx)(n.n,{attributeName:"x-sap-deprecated-operation"})]}),(0,p.jsxs)("div",{className:"sap-api-value",children:["Deprecated on ",t," ",(0,p.jsx)("br",{}),e.successorOperationRef||e.successorOperationId?(0,p.jsxs)(p.Fragment,{children:[" Successor ",e.successorOperationRef?(0,p.jsx)("a",{href:e.successorOperationRef,rel:"noreferrer, noopener",children:e.successorOperationRef}):null,e.successorOperationId?(0,p.jsx)("span",{children:e.successorOperationId}):null]}):null]})]})}),"x-sap-odm-entity-name":j(function({xSapOdmEntityName:e}){return(0,p.jsxs)("div",{className:"sap-api-container",children:[(0,p.jsxs)("div",{className:"sap-api-label",children:["ODM entity name ",(0,p.jsx)(n.n,{attributeName:"x-sap-odm-entity-name"})]}),(0,p.jsx)("div",{className:"sap-api-value",children:e})]})}),"x-sap-odm-semantic-key":j(function({xSapOdmSemanticKey:e}){return(0,p.jsxs)("div",{className:"sap-api-container",children:[(0,p.jsxs)("div",{className:"sap-api-label",children:["ODM Semantic Key ",(0,p.jsx)(n.n,{attributeName:"x-sap-odm-semantic-key"})]}),(0,p.jsx)("div",{className:"sap-api-value",children:e.map(e=>(0,p.jsxs)("div",{children:[(0,p.jsx)("strong",{children:e.name}),(0,p.jsx)("ul",{className:"sap-api-list",children:e.values.map(e=>(0,p.jsx)("li",{children:e},e))})]},e.name))})]})})}},S={ACTIVE:"color-mix(in srgb, #22c55e 15%, transparent)",BETA:"color-mix(in srgb, #3b82f6 15%, transparent)",DEPRECATED:"color-mix(in srgb, #f97316 15%, transparent)",DECOMMISSIONED:"color-mix(in srgb, #ef4444 15%, transparent)"},w={ACTIVE:"#16a34a",BETA:"#2563eb",DEPRECATED:"#ea580c",DECOMMISSIONED:"#dc2626"},N={prefixStartsWith:"x-sap-",documentationUrl:e=>`https://github.com/SAP/asyncapi-specification#${e}`,extensions:{"x-sap-catalog-spec-version":{type:"string",label:"SAP Catalog Spec Version"},"x-sap-application-namespace":{type:"string",label:"SAP Application Namespace"},"x-sap-ord-id":{type:"string",label:"ORD ID"},"x-sap-shortText":{type:"string",label:"SAP Short Text"},"x-sap-software-min-version":{type:"string",label:"SAP Software Version"},"x-sap-stateInfo":{component:function({propertyName:e,propertyValue:t}){if(!t||"object"!=typeof t)return null;let r=t.state?.toUpperCase(),a=(0,p.jsx)("span",{style:{display:"inline-block",borderRadius:"10px",padding:"0 6px",background:S[r]||"",color:w[r]||""},children:r}),n=new Intl.DateTimeFormat("en-GB",{dateStyle:"long"}),o=e=>{let t=new Date(e);return isNaN(t.getTime())?e:n.format(t)};return(0,p.jsxs)("div",{className:"asyncapi-attr-row",children:[(0,p.jsxs)("div",{className:"asyncapi-attr-label",children:["API State ",(0,p.jsx)(s.n,{attributeName:e})]}),(0,p.jsxs)("div",{className:"asyncapi-attr-value",children:[a,t.deprecationDate&&(0,p.jsxs)("div",{children:["Deprecated on ",o(t.deprecationDate)]}),t.decommissionedDate&&(0,p.jsxs)("div",{children:["Decommissioned on ",o(t.decommissionedDate)]}),t.link&&(0,p.jsxs)("div",{children:["More info: ",(0,p.jsx)("a",{href:t.link,target:"_blank",rel:"noreferrer",className:"asyncapi-attr-link",children:t.link})]})]})]})}},"x-sap-event-spec-version":{type:"string",label:"SAP Event Spec Version"},"x-sap-event-source":{type:"string",label:"SAP Event Source"},"x-sap-event-source-parameters":{type:"object",label:"SAP Event Source Parameters"},"x-sap-event-version":{type:"string",label:"SAP Event Version"},"x-sap-event-characteristics":{type:"object",label:"SAP Event Characteristics"},"x-sap-object-type":{type:"string",label:"SAP Object Type"},"x-sap-odm-version":{type:"string",label:"SAP ODM Version"},"x-sap-logical-odm-event-version":{type:"string",label:"SAP Logical ODM Event Version"},"x-sap-dpp-entity-semantics":{type:"string",label:"SAP DPP: Entity Semantics"},"x-sap-dpp-data-subject-role":{type:"string",label:"SAP DPP: Data Subject Role"},"x-sap-dpp-data-subject-role-description":{type:"string",label:"SAP DPP: Data Subject Role Description"},"x-sap-dpp-field-semantics":{type:"string",label:"SAP DPP: Field Semantics"},"x-sap-dpp-is-potentially-personal":{type:"boolean",label:"SAP DPP: Potentially Personal"},"x-sap-dpp-is-potentially-sensitive":{type:"boolean",label:"SAP DPP: Potentially Sensitive"}}},A={prefixStartsWith:"@",annotations:{"@EndUserText.label":{type:"string",label:"End User Text \xb7 Label"},"@EndUserText.heading":{type:"string",label:"End User Text \xb7 Heading"},"@EndUserText.quickInfo":{type:"string",label:"End User Text \xb7 Quick Info"},"@ObjectModel.modelingPattern":{type:"object",label:"Modeling Pattern"},"@ObjectModel.text.element":{type:"array",label:"Text Element"},"@ObjectModel.text.association":{type:"object",label:"Text Association"},"@ObjectModel.semanticKey":{type:"array",label:"Semantic Key"},"@ObjectModel.representativeKey":{type:"object",label:"Representative Key"},"@ObjectModel.compositionRoot":{type:"boolean",label:"Composition Root"},"@ObjectModel.supportedCapabilities":{type:"array",label:"Supported Capabilities"},"@ObjectModel.usageType.sizeCategory":{type:"string",label:"Usage Type \xb7 Size Category"},"@ObjectModel.foreignKey.association":{type:"object",label:"Foreign Key Association"},"@Consumption.valueHelpDefinition":{type:"array",label:"Value Help"},"@Consumption.hidden":{type:"boolean",label:"Hidden"},"@PersonalData.entitySemantics":{type:"string",label:"DPP \xb7 Entity Semantics"},"@PersonalData.dataSubjectRole":{type:"string",label:"DPP \xb7 Data Subject Role"},"@PersonalData.dataSubjectRoleDescription":{type:"string",label:"DPP \xb7 Data Subject Role Description"},"@PersonalData.fieldSemantics":{type:"string",label:"DPP \xb7 Field Semantics"},"@PersonalData.isPotentiallyPersonal":{type:"boolean",label:"DPP \xb7 Potentially Personal"},"@PersonalData.isPotentiallySensitive":{type:"boolean",label:"DPP \xb7 Potentially Sensitive"},"@Semantics.currencyCode":{type:"boolean",label:"Semantics \xb7 Currency Code"},"@Semantics.amount.currencyCode":{type:"object",label:"Semantics \xb7 Amount Currency"},"@Semantics.unitOfMeasure":{type:"boolean",label:"Semantics \xb7 Unit of Measure"},"@Semantics.quantity.unitOfMeasure":{type:"object",label:"Semantics \xb7 Quantity Unit"},"@Semantics.text":{type:"boolean",label:"Semantics \xb7 Text"},"@Semantics.uuid":{type:"boolean",label:"Semantics \xb7 UUID"},"@Semantics.language":{type:"boolean",label:"Semantics \xb7 Language"},"@API.element.releaseState":{type:"string",label:"API \xb7 Element Release State"},"@API.entity.releaseState":{type:"string",label:"API \xb7 Entity Release State"},"@ODM.entityName":{type:"string",label:"ODM \xb7 Entity Name"},"@ODM.oid":{type:"string",label:"ODM \xb7 OID"},"@ODM.oidReference.entityName":{type:"string",label:"ODM \xb7 OID Reference Entity"},"@Aggregation.default":{type:"object",label:"Default Aggregation"},"@EntityRelationship.entityType":{type:"string",label:"Entity Relationship \xb7 Type"},"@EntityRelationship.entityIds":{type:"array",label:"Entity Relationship \xb7 IDs"},"@EntityRelationship.propertyType":{type:"string",label:"Entity Relationship \xb7 Property Type"},"@EntityRelationship.compositeReferences":{type:"array",label:"Entity Relationship \xb7 Composite References"},"@EntityRelationship.reference":{type:"array",label:"Entity Relationship \xb7 Reference"},"@DataIntegration.dataUnavailable":{type:"boolean",label:"Data Integration \xb7 Unavailable"}}}}}]);