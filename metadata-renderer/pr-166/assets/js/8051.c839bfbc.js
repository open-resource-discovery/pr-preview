(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["8051"],{22365(e){function r(e){return Promise.resolve().then(function(){var r=Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r})}r.keys=()=>[],r.resolve=r,r.id=22365,e.exports=r},7559(e,r,t){"use strict";t.d(r,{t:()=>l});var a=t(96540),n=t(91231),o=t(96008),s=t(50790),i=t(74848);function l({content:e,showValidation:r=!1,showConnection:t=!1,className:c,theme:d}){let p=(0,a.useId)(),{setTheme:u}=(0,n.l)(),f=c?.split(/\s+/).includes("dark")??!1;(0,a.useEffect)(()=>{n._.getState().setRawJson(e)},[e]),(0,a.useEffect)(()=>{u(f?"dark":"light")},[f,u]);let b=d?(0,s.t)("a2a-root",p,d):null;return(0,i.jsxs)("div",{"data-renderer-id":p,className:"h-full",children:[b&&(0,i.jsx)("style",{children:b}),(0,i.jsx)(o.Bc,{readOnly:!0,showValidation:r,showConnection:t})]})}},34693(e,r,t){"use strict";t.d(r,{n:()=>d,t:()=>k});var a=t(96540),n=t(13406),o=t(85096),s=t(92354),i=t(74848),l=t(50790),c={version:"",configs:[],rootFields:{},getDocumentationUrl(e){return(this.configs.find(r=>r.extensions?.[e])??this.configs.find(r=>r.prefixStartsWith&&e.startsWith(r.prefixStartsWith)))?.documentationUrl?.(e,{version:this.version})}};function d({attributeName:e}){let r=c.getDocumentationUrl(e);return r?(0,i.jsx)("a",{href:r,style:{marginLeft:4,marginTop:4},target:"_blank",rel:"noreferrer",title:"View in AsyncAPI Specification",children:(0,i.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",children:(0,i.jsx)("path",{d:"M10.604 1h4.146a.25.25 0 01.25.25v4.146a.25.25 0 01-.427.177L13.03 4.03 9.28 7.78a.75.75 0 01-1.06-1.06l3.75-3.75-1.543-1.543A.25.25 0 0110.604 1zM3.75 2A1.75 1.75 0 002 3.75v8.5c0 .966.784 1.75 1.75 1.75h8.5A1.75 1.75 0 0014 12.25v-3.5a.75.75 0 00-1.5 0v3.5a.25.25 0 01-.25.25h-8.5a.25.25 0 01-.25-.25v-8.5a.25.25 0 01.25-.25h3.5a.75.75 0 000-1.5h-3.5z"})})}):null}function p({name:e,label:r}){return(0,i.jsxs)("div",{className:"asyncapi-attr-label",children:[r," ",(0,i.jsx)(d,{attributeName:e})]})}function u(e){if(null==e)return(0,i.jsx)("span",{className:"asyncapi-attr-placeholder",children:"\u2014"});if("boolean"==typeof e)return(0,i.jsx)("span",{children:e?"Yes":"No"});if("number"==typeof e)return(0,i.jsx)("span",{children:e});if(Array.isArray(e))return(0,i.jsx)("ul",{className:"asyncapi-attr-list",children:e.map((e,r)=>(0,i.jsx)("li",{children:u(e)},r))});if("object"==typeof e)return(0,i.jsx)("dl",{className:"asyncapi-attr-obj",children:Object.entries(e).map(([e,r])=>(0,i.jsxs)("div",{className:"asyncapi-attr-obj-row",children:[(0,i.jsxs)("dt",{className:"asyncapi-attr-obj-key",children:[e,":"]})," ",(0,i.jsx)("dd",{className:"asyncapi-attr-obj-val",children:u(r)})]},e))});let r=String(e);return/[*_`[\]#]/.test(r)?(0,i.jsx)(s.oz,{children:r}):(0,i.jsx)("span",{children:r})}function f(e){let r=e.valueLinks?.[e.value];return(0,i.jsxs)("div",{className:"asyncapi-attr-row",children:[(0,i.jsx)(p,{name:e.name,label:e.label}),(0,i.jsx)("p",{className:"asyncapi-attr-value",children:r?(0,i.jsx)("a",{href:r,rel:"noreferrer noopener",target:"_blank",className:"asyncapi-attr-link",children:e.value}):e.value})]})}function b(e){return(0,i.jsxs)("div",{className:"asyncapi-attr-row",children:[(0,i.jsx)(p,{name:e.name,label:e.label}),(0,i.jsx)("p",{className:"asyncapi-attr-value",children:e.value?"Yes":"No"})]})}function h(e){return(0,i.jsxs)("div",{className:"asyncapi-attr-row",children:[(0,i.jsx)(p,{name:e.name,label:e.label}),(0,i.jsx)("p",{className:"asyncapi-attr-value",children:e.value})]})}function m(e){return(0,i.jsxs)("div",{className:"asyncapi-attr-row",children:[(0,i.jsx)(p,{name:e.name,label:e.label}),(0,i.jsx)("div",{className:"asyncapi-attr-value",children:(0,i.jsx)("ul",{className:"asyncapi-attr-list",children:e.value.map((e,r)=>(0,i.jsx)("li",{children:u(e)},r))})})]})}function y(e){return(0,i.jsxs)("div",{className:"asyncapi-attr-row",children:[(0,i.jsx)(p,{name:e.name,label:e.label}),(0,i.jsx)("div",{className:"asyncapi-attr-value",children:u(e.value)})]})}function g(e){let r=e.callback(e.value);return(0,i.jsxs)("div",{className:"asyncapi-attr-row",children:[(0,i.jsx)(p,{name:e.name,label:e.label}),(0,i.jsx)("p",{className:"asyncapi-attr-value",children:r?(0,i.jsx)("a",{href:r,rel:"noreferrer noopener",target:"_blank",className:"asyncapi-attr-link",children:String(e.value)}):String(e.value)})]})}function x(e,r,t){return r&&"component"in r?r.component:function({propertyValue:a}){var n;let o;if(null==a)return null;let s=r&&"label"in r&&r.label?r.label:(n=t.prefixStartsWith,o=e,n&&o.startsWith(n)&&(o=o.slice(n.length)),o.replace(/([a-z])([A-Z])/g,"$1-$2").split("-").filter(Boolean).map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(" "));if(r?.type==="link")return(0,i.jsx)(g,{name:e,label:s,value:a,callback:r.callback});if(r?.type==="boolean"||"boolean"==typeof a)return(0,i.jsx)(b,{name:e,label:s,value:!!a});if(r?.type==="number"||"number"==typeof a)return(0,i.jsx)(h,{name:e,label:s,value:a});if(r?.type==="array"||Array.isArray(a))return Array.isArray(a)?(0,i.jsx)(m,{name:e,label:s,value:a}):null;if(r?.type==="object"||"object"==typeof a)return(0,i.jsx)(y,{name:e,label:s,value:a});let l=r&&"valueLinks"in r?r.valueLinks:void 0;return(0,i.jsx)(f,{name:e,label:s,value:String(a),valueLinks:l})}}var v=new Set(["asyncapi","info","channels","operations","components","servers","tags","id","defaultContentType","externalDocs"]),j={"--ord-background":"#1e1e1e","--ord-foreground":"#d4d4d4","--ord-card":"#252526","--ord-primary":"#0098ff","--ord-primary-foreground":"#1e1e1e","--ord-muted":"#2d2d30","--ord-muted-foreground":"#969696","--ord-border":"#3e3e42"};function k({content:e,config:r,customAttributes:t,className:s,theme:d}){let p,u,f,b,h,m,y,g,S,w,N,A,O,D,P=(0,a.useId)(),E=s?.split(/\s+/).includes("dark")??!1,$=d??(E?j:null),M=$?(p=$["--ord-background"],u=$["--ord-foreground"],f=$["--ord-secondary"],b=$["--ord-secondary-foreground"],h=$["--ord-muted"],m=$["--ord-muted-foreground"],y=$["--ord-border"],g=$["--ord-primary"],S=$["--ord-primary-foreground"],w=$["--ord-accent"],N=$["--ord-accent-foreground"],A=$["--ord-radius"],O=[],D=`[data-renderer-id="${P}"]`,p&&O.push(`${D} .bg-white { background-color: ${p} !important; }`),u&&O.push(`${D} {color: ${u}; }`),w&&N&&O.push(`${D} .bg-blue-100 { color: ${N}; background-color: ${w}; }`),f&&O.push(`${D} .bg-gray-100 { background-color: ${f} !important; }`),b&&O.push(`${D} .prose, ${D} .text-gray-700 { color: ${b}; }`),h&&O.push(`${D} .bg-gray-200 { background-color: ${h} !important; }`),m&&O.push(`${D} .text-gray-500, ${D} .text-gray-600 { color: ${m} !important; }`),g&&O.push(`${D} .bg-gray-800 { background-color: ${g} !important; }`,`${D} .bg-blue-100 .text-purple-700 { color: ${g}; }`),S&&O.push(`${D} .text-white { color: ${S} !important; }`),f&&O.push(`${D} .bg-gray-400 { background-color: ${f} !important; }`),N&&O.push(`${D} .text-gray-200, ${D} .examples .text-gray-600 { color: ${N} !important; } `),u&&O.push(`${D} .text-gray-800, ${D} .text-gray-900 { color: ${u} !important; }`),y&&O.push(`${D} .border { border-color: ${y}; }`,`${D} .border-b { border-bottom-color: ${y}; }`,`${D} .border-gray-400 { border-color: ${y} !important; }`),A&&O.push(`${D} .rounded, ${D} .prose pre { border-radius: ${A}px; }`,`@media (min-width: 1536px) {
${D} .\\32 xl\\:rounded { border-radius: ${A}px; }
}`,`${D} .rounded:not(.inline-block) { overflow: hidden; }`,`${D} .rounded-tl-none { border-top-left-radius: 0px; }`),O.join("\n")):null,T=(0,a.useMemo)(()=>t??[],[t]),C=void 0!==t,R=(0,a.useMemo)(()=>C?(0,l.i)(e):null,[e,C]),I=(0,a.useMemo)(()=>"string"==typeof R?.asyncapi?R.asyncapi:"",[R]),W=(0,a.useMemo)(()=>{if(!C)return r??{};let e=function(e,r,t){if(c.version=t,c.configs=e,r){let t=e.map(e=>e.prefixStartsWith).filter(Boolean);c.rootFields=t.length?function(e,r){let t={};for(let[a,n]of Object.entries(e))!v.has(a)&&a.startsWith("x-")&&r.some(e=>a.startsWith(e))&&(t[a]=n);return t}(r,t):{}}else c.rootFields={};let a={};for(let t of e){for(let[e,r]of Object.entries(t.extensions??{}))a[e]=x(e,r,t);if(t.prefixStartsWith&&r)for(let e of function(e,r){let t=new Set,a=e=>{if(e&&"object"==typeof e)for(let a of Object.keys(e))a.startsWith(r)&&t.add(a)};a(e),a(e.info);let n=e.channels;if(n)for(let e of Object.values(n)){if(!e||"object"!=typeof e)continue;for(let r of(a(e),["subscribe","publish","send","receive"])){let t=e[r];t&&"object"==typeof t&&(a(t),a(t.message))}let r=e.messages;if(r)for(let e of Object.values(r))a(e)}let o=e.operations;if(o)for(let e of Object.values(o))a(e);let s=e.components;if(s){for(let e of["messages","messageTraits"]){let r=s[e];if(r)for(let e of Object.values(r))a(e)}let e=s.schemas;if(e)for(let r of Object.values(e))a(r);let r=s.channels;if(r)for(let e of Object.values(r))a(e);let t=s.operations;if(t)for(let e of Object.values(t))a(e)}return[...t]}(r,t.prefixStartsWith))a[e]||(a[e]=x(e,void 0,t))}return a}(T,R,I);return{...r,extensions:{...e,...r?.extensions??{}}}},[r,C,T,R,I]),_=(0,a.useMemo)(()=>C?function(e){function r(r){let t=Object.entries(c.rootFields);if(!t.length)return null;let n=t.flatMap(([r,t])=>{let n=c.configs.find(e=>e.extensions?.[r])??c.configs.find(e=>e.prefixStartsWith&&r.startsWith(e.prefixStartsWith))??e[0];if(!n)return[];let o=x(r,n.extensions?.[r],n);return[(0,a.createElement)(o,{key:r,propertyName:r,propertyValue:t,document:void 0,parent:void 0})]});return n.length?(0,a.createElement)("div",null,...n):null}return{name:"sap-root-extensions",version:"1.0.0",install(e){e.registerComponent(o.WN.INFO,r)}}}(T):null,[C,T]),U=`[data-renderer-id="${P}"]`,L=`${U} { container: asyncapi-attrs / inline-size; height: 100%; overflow: auto; scrollbar-gutter: stable; }
${U} :where(h1,h2,h3,h4,p,span,strong,a,li,td,div):not(pre *) { overflow-wrap: anywhere; }`;return(0,i.jsxs)("div",{"data-renderer-id":P,className:s,children:[M&&(0,i.jsx)("style",{children:M}),C&&(0,i.jsx)("style",{children:"\n.asyncapi-attr-row {\n    display: flex;\n    border: 1px solid var(--ord-border, #e5e7eb);\n    border-radius: calc(var(--ord-radius, 4)*1px);\n    margin-top: 8px;\n    margin-bottom: 4px;\n    font-size: 0.875rem;\n    line-height: 1.5;\n    overflow: hidden;\n}\n.asyncapi-attr-label {\n    color: var(--ord-foreground, #111);\n    width: 20ch;\n    min-width: 20ch;\n    flex-shrink: 0;\n    background: var(--ord-muted, #f3f4f6);\n    padding: 8px 10px 8px 16px;\n    border-right: 1px solid var(--ord-border, #e5e7eb);\n    display: flex;\n    justify-content: space-between;\n    align-items: flex-start;\n    font-weight: 400;\n}\n.asyncapi-attr-value {\n    color: var(--ord-muted-foreground, #555);\n    padding: 8px;\n}\n.asyncapi-attr-list {\n    margin: 0 2ch;\n    list-style: disc;\n}\n.asyncapi-attr-link {\n    text-decoration: none;\n    color: var(--ord-primary, #0098ff);\n    transition: color 0.1s ease-in-out;\n    cursor: pointer;\n}\n.asyncapi-attr-placeholder {\n    color: #999;\n}\n.asyncapi-attr-obj {\n    margin: 0;\n    padding-left: 12px;\n}\n.asyncapi-attr-obj-row {\n    margin-bottom: 4px;\n}\n.asyncapi-attr-obj-key {\n    font-weight: 600;\n    display: inline;\n}\n.asyncapi-attr-obj-val {\n    display: inline;\n    margin: 0;\n}\n\n/* Width-adaptive rows: react to the renderer's own available width (container on the\n   wrapper above). Below the breakpoint, every row stacks label-above-value simultaneously,\n   and the label spans the full width. */\n@container asyncapi-attrs (max-width: 520px) {\n    .asyncapi-attr-row {\n        flex-direction: column;\n    }\n    .asyncapi-attr-label {\n        width: 100%;\n        min-width: 0;\n        border-right: none;\n        border-bottom: 1px solid var(--ord-border, #e5e7eb);\n    }\n    .asyncapi-attr-value {\n        width: 100%;\n    }\n}\n"}),(0,i.jsx)("style",{children:L}),C&&(0,i.jsx)("style",{children:`[data-renderer-id="${P}"] #introduction .hidden { display: block !important; }`}),!C&&(0,i.jsx)("style",{children:`[data-renderer-id="${P}"] :is(#operations, #messages) div:has(> .flex.py-2 span.Extensions) { display: none; }`}),(0,i.jsx)(n,{schema:e,config:W,plugins:_?[_]:[]})]})}},19962(e,r,t){"use strict";t.d(r,{t:()=>p});var a=t(96540),n=t(90580),o=t(50790),s=t(74848),i=`
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
`;function l(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function c(e,r,t,a){let n=e.ownerDocument.createElement("template");n.innerHTML=a,e.insertBefore(n.content,r);let o=r;for(;o;){let r=o.nextSibling,a=o===t;if(e.removeChild(o),a)break;o=r}}function d(e,r){if(e.nodeType!==Node.TEXT_NODE)return null;let t=(e.textContent??"").replace(/^\s+/,""),a=/^@([\w.]+):\s*$/.exec(t);if(!a||!r||r.nodeType!==Node.ELEMENT_NODE)return null;let n=null;return("CODE"===r.tagName?n=r:"A"===r.tagName&&(n=r.querySelector("code")),n)?{key:`@${a[1]}`,valueNode:r,codeEl:n}:null}function p({content:e,config:r,customAttributes:t,className:u,theme:f}){let[b,h]=(0,a.useState)({kind:"idle"});return(0,a.useEffect)(()=>{let a;if(!e)return void h({kind:"idle"});let s=!1;h({kind:"loading"});try{a=JSON.parse(e)}catch(e){h({kind:"error",message:String(e)});return}let i=t??[],p=void 0!==t,u=p?(0,o.i)(e):null,f=p?function(e){let r={};for(let t of e)for(let[e,a]of Object.entries(t.annotations??{}))if("type"in a&&"link"===a.type&&"callback"in a&&!(e in r)){let t=a.callback;r[e]=e=>t(e)??""}return r}(i):{},b={...r,annotationLinkCallbacks:{...f,...r?.annotationLinkCallbacks}};return(0,n.JF)(a,b).then(e=>{let r=p?function(e,r,t){let a=new Map;for(let e of r){for(let[r,t]of Object.entries(e.annotations??{}))a.has(r)||a.set(r,{def:t,config:e});if(e.prefixStartsWith&&t)for(let r of function(e,r){let t=new Set,a=e=>{if(e&&"object"==typeof e)for(let a of Object.keys(e))a.startsWith(r)&&t.add(a)},n=e.definitions;if(n)for(let e of Object.values(n)){a(e);let r=e?.elements;if(r)for(let e of Object.values(r))a(e)}return[...t]}(t,e.prefixStartsWith))a.has(r)||a.set(r,{def:void 0,config:e})}if(0===a.size)return e;let n=new DOMParser().parseFromString(e,"text/html");for(let e of Array.from(n.querySelectorAll("td, p")))for(let{textNode:r,valueNode:t,codeEl:n,key:o,entry:s}of function(e,r){let t=[],a=Array.from(e.childNodes);for(let e=0;e<a.length-1;e++){let n=d(a[e],a[e+1]);if(!n)continue;let o=r.get(n.key);o&&t.push({textNode:a[e],valueNode:n.valueNode,codeEl:n.codeEl,key:n.key,entry:o})}return t}(e,a)){let a=function(e,r,t,a){var n;let o;if(null==r)return"";let s=t&&!("render"in t)&&"label"in t&&t.label?t.label:(n=a.prefixStartsWith??"@",o=e,n&&o.startsWith(n)&&(o=o.slice(n.length)),o.split(".").filter(Boolean).map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(" \xb7 ")),i=a.documentationUrl?.(e),c=i?` <a href="${l(i)}" class="csn-attr-doclink" target="_blank" rel="noreferrer" title="Documentation">\u{2197}</a>`:"",d=function e(r,t){if(null==r)return"";if(t&&"render"in t)return t.render(r);if(t?.type==="link"&&"callback"in t){let e=t.callback(r),a=l(String(r));return e?`<a href="${l(e)}" class="csn-attr-link" target="_blank" rel="noreferrer">${a}</a>`:a}if(t?.type==="boolean"||"boolean"==typeof r)return r?"Yes":"No";if(t?.type==="number"||"number"==typeof r)return l(String(r));if(t?.type==="array"||Array.isArray(r))return Array.isArray(r)?`<span class="csn-attr-list">${r.map(r=>`<span class="csn-attr-list-item">${e(r,void 0)}</span>`).join("")}</span>`:l(String(r));if(t?.type==="object"||"object"==typeof r&&null!==r){let t=Object.entries(r);return 1===t.length&&"#"===t[0][0]?l(String(t[0][1])):`<span class="csn-attr-obj">${t.map(([r,t])=>`<span class="csn-attr-kv"><span class="csn-attr-kv-key">${l(r)}</span><span class="csn-attr-kv-val">${e(t,void 0)}</span></span>`).join("")}</span>`}if(t&&"valueLinks"in t&&t.valueLinks){let e=t.valueLinks[String(r)],a=l(String(r));return e?`<a href="${l(e)}" class="csn-attr-link" target="_blank" rel="noreferrer">${a}</a>`:a}return l(String(r))}(r,t);return d?`<span class="csn-attr-row"><span class="csn-attr-label">${l(s)}${c}</span><span class="csn-attr-value">${d}</span></span>`:""}(o,function(e){try{return JSON.parse(e)}catch{return e}}(n.textContent??""),s.def,s.config);a&&c(e,r,t,a)}return n.body.innerHTML}(e,i,u):function(e){let r=new DOMParser().parseFromString(e,"text/html");for(let e of Array.from(r.querySelectorAll("td, p"))){let r=Array.from(e.childNodes),t=[];for(let e=0;e<r.length-1;e++){let a=d(r[e],r[e+1]);a&&t.push({textNode:r[e],valueNode:a.valueNode,br:function(e){let r=e.previousSibling;return r&&r.nodeType===Node.TEXT_NODE&&!(r.textContent??"").trim()&&(r=r.previousSibling),r&&r.nodeType===Node.ELEMENT_NODE&&"BR"===r.tagName?r:null}(r[e])})}for(let{textNode:r,valueNode:a,br:n}of t)c(e,r,a,""),n&&n.parentNode===e&&e.removeChild(n)}return r.body.innerHTML}(e);s||h({kind:"ready",html:r})}).catch(e=>{s||h({kind:"error",message:String(e)})}),()=>{s=!0}},[e,r,t]),(0,s.jsxs)("div",{className:`csn-root${u?` ${u}`:""}`,style:f,children:[(0,s.jsx)("style",{children:i}),"ready"===b.kind&&(0,s.jsx)("div",{className:"p-4",dangerouslySetInnerHTML:{__html:b.html}}),"error"===b.kind&&(0,s.jsxs)("div",{children:[(0,s.jsx)("h1",{children:"Invalid CSN"}),(0,s.jsx)("div",{children:b.message})]})]})}},44815(e,r,t){"use strict";t.d(r,{t:()=>l});var a=t(96540),n=t(30629),o=t(38964),s=t(50790),i=t(74848);function l({content:e,showValidation:r=!1,className:t,theme:c}){let d=(0,a.useId)(),{setTheme:p}=(0,n.E)(),u=t?.split(/\s+/).includes("dark")??!1;(0,a.useEffect)(()=>{n.S.getState().setRawJson(e)},[e]),(0,a.useEffect)(()=>{p(u?"dark":"light")},[u,p]);let f=c?(0,s.t)("mcp-root",d,c):null;return(0,i.jsxs)("div",{"data-renderer-id":d,className:"h-full",children:[f&&(0,i.jsx)("style",{children:f}),(0,i.jsx)(o.t,{readOnly:!0,showValidation:r})]})}},80336(e,r,t){"use strict";t.d(r,{n:()=>u,t:()=>T});var a=t(96540),n=t(92267),o=t(50790),s=t(92354),i=t(74848),l=t(98207),c={version:"",configs:[],getDocumentationUrl(e){return(this.configs.find(r=>r.extensions?.[e])??this.configs.find(r=>r.prefixStartsWith&&e.startsWith(r.prefixStartsWith)))?.documentationUrl?.(e,{version:this.version})}},d=["get","put","post","delete","options","head","patch","trace"],p="x-sap-schema-attrs";function u({attributeName:e}){let r=c.getDocumentationUrl(e);return r?(0,i.jsx)("a",{href:r,style:{marginLeft:4},target:"_blank",rel:"noreferrer",title:"View in OpenAPI Specification",children:(0,i.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",children:(0,i.jsx)("path",{d:"M10.604 1h4.146a.25.25 0 01.25.25v4.146a.25.25 0 01-.427.177L13.03 4.03 9.28 7.78a.75.75 0 01-1.06-1.06l3.75-3.75-1.543-1.543A.25.25 0 0110.604 1zM3.75 2A1.75 1.75 0 002 3.75v8.5c0 .966.784 1.75 1.75 1.75h8.5A1.75 1.75 0 0014 12.25v-3.5a.75.75 0 00-1.5 0v3.5a.25.25 0 01-.25.25h-8.5a.25.25 0 01-.25-.25v-8.5a.25.25 0 01.25-.25h3.5a.75.75 0 000-1.5h-3.5z"})})}):null}function f({name:e,label:r}){return(0,i.jsxs)("div",{className:"sap-api-label",children:[r," ",(0,i.jsx)(u,{attributeName:e})]})}function b(e){let r=e.valueLinks?.[e.value];return(0,i.jsxs)("div",{className:"sap-api-container",children:[(0,i.jsx)(f,{name:e.name,label:e.label}),(0,i.jsx)("p",{className:"sap-api-value",children:r?(0,i.jsx)("a",{href:r,rel:"noreferrer noopener",target:"_blank",className:"sap-api-link",children:e.value}):e.value})]})}function h(e){return(0,i.jsxs)("div",{className:"sap-api-container",children:[(0,i.jsx)(f,{name:e.name,label:e.label}),(0,i.jsx)("p",{className:"sap-api-value",children:e.value?"Yes":"No"})]})}function m(e){return(0,i.jsxs)("div",{className:"sap-api-container",children:[(0,i.jsx)(f,{name:e.name,label:e.label}),(0,i.jsx)("p",{className:"sap-api-value",children:e.value})]})}function y(e){return(0,i.jsxs)("div",{className:"sap-api-container",children:[(0,i.jsx)(f,{name:e.name,label:e.label}),(0,i.jsx)("div",{className:"sap-api-value",children:(0,i.jsx)("ul",{className:"sap-api-list",children:e.value.map((e,r)=>(0,i.jsx)("li",{children:g(e)},r))})})]})}function g(e){if(null==e)return(0,i.jsx)("span",{className:"sap-api-placeholder",children:"\u2014"});if("boolean"==typeof e)return(0,i.jsx)("span",{children:e?"Yes":"No"});if("number"==typeof e)return(0,i.jsx)("span",{children:e});if(Array.isArray(e))return(0,i.jsx)("ul",{className:"sap-api-list",children:e.map((e,r)=>(0,i.jsx)("li",{children:g(e)},r))});if("object"==typeof e)return(0,i.jsx)("dl",{className:"sap-api-obj",children:Object.entries(e).map(([e,r])=>(0,i.jsxs)("div",{className:"sap-api-obj-row",children:[(0,i.jsxs)("dt",{className:"sap-api-obj-key",children:[e,":"]})," ",(0,i.jsx)("dd",{className:"sap-api-obj-val",children:g(r)})]},e))});let r=String(e);return/[*_`[\]#]/.test(r)?(0,i.jsx)(s.oz,{children:r}):(0,i.jsx)("span",{children:r})}function x(e){return(0,i.jsxs)("div",{className:"sap-api-container",children:[(0,i.jsx)(f,{name:e.name,label:e.label}),(0,i.jsx)("div",{className:"sap-api-value",children:g(e.value)})]})}function v(e){let r=e.callback(e.value);return(0,i.jsxs)("div",{className:"sap-api-container",children:[(0,i.jsx)(f,{name:e.name,label:e.label}),(0,i.jsx)("p",{className:"sap-api-value",children:r?(0,i.jsx)("a",{href:r,rel:"noreferrer noopener",target:"_blank",className:"sap-api-link",children:String(e.value)}):String(e.value)})]})}function j(e,r,t){return r&&"component"in r?r.component:a=>{var n;let o,s=function(e,r){if(e&&"object"==typeof e)return e[r.replace(/-./g,e=>e[1].toUpperCase())]}(a,e);if(null==s)return null;let l=r&&"label"in r&&r.label?r.label:(n=t.prefixStartsWith,o=e,n&&o.startsWith(n)&&(o=o.slice(n.length)),o.split("-").filter(Boolean).map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(" "));if(r?.type==="link"&&"callback"in r)return(0,i.jsx)(v,{name:e,label:l,value:s,callback:r.callback});if(r?.type==="boolean"||"boolean"==typeof s)return(0,i.jsx)(h,{name:e,label:l,value:!!s});if(r?.type==="number"||"number"==typeof s)return(0,i.jsx)(m,{name:e,label:l,value:s});if(r?.type==="array"||Array.isArray(s))return Array.isArray(s)?(0,i.jsx)(y,{name:e,label:l,value:s}):null;if(r?.type==="object"||"object"==typeof s)return(0,i.jsx)(x,{name:e,label:l,value:s});let c=r&&"valueLinks"in r?r.valueLinks:void 0;return(0,i.jsx)(b,{name:e,label:l,value:String(s),valueLinks:c})}}var k={"--ord-background":["--scalar-background-1"],"--ord-foreground":["--scalar-color-1"],"--ord-secondary":["--scalar-background-2"],"--ord-secondary-foreground":["--scalar-color-2"],"--ord-muted":["--scalar-background-3"],"--ord-muted-foreground":["--scalar-color-3"],"--ord-primary":["--scalar-color-accent","--scalar-button-1","--scalar-link-color","--scalar-button-1-hover","--scalar-link-color-hover"],"--ord-primary-foreground":["--scalar-button-1-color"],"--ord-border":["--scalar-border-color"],"--ord-destructive":["--scalar-color-red","--scalar-color-danger"],"--ord-success":["--scalar-color-green"],"--ord-warning":["--scalar-color-orange"],"--ord-radius":["--scalar-radius","--scalar-radius-lg"]},S={"--ord-sidebar":["--scalar-sidebar-background-1"],"--ord-sidebar-foreground":["--scalar-sidebar-color-1"],"--ord-sidebar-primary":["--scalar-sidebar-background-2"],"--ord-sidebar-primary-foreground":["--scalar-sidebar-color-2","--scalar-sidebar-search-color"],"--ord-sidebar-accent":["--scalar-sidebar-item-active-background","--scalar-sidebar-item-hover-background","--scalar-sidebar-search-background"],"--ord-sidebar-accent-foreground":["--scalar-sidebar-color-active","--scalar-sidebar-item-hover-color"],"--ord-sidebar-border":["--scalar-sidebar-border-color","--scalar-sidebar-search-border-color"]};function w(e,r){return"--ord-radius"===e?`${r}px`:r}var N={selector:".scalar-app",map(e){let r={};for(let[t,a]of Object.entries(e)){let e=k[t];if(!e)continue;let n=w(t,a);for(let t of e)r[t]=n}return r}},A={selector:".scalar-app .t-doc__sidebar",map(e){let r={};for(let[t,a]of Object.entries(e)){let e=S[t];if(e)for(let t of e)r[t]=a}return r}},O={selector:".scalar-app .dark-mode, .scalar-app.dark-mode, .scalar-app .light-mode, .scalar-app.light-mode",map(e){let r={};for(let[t,a]of Object.entries(e)){let e=k[t];if(!e)continue;let n=w(t,a);for(let t of e)r[t]=n}return r}},D=["--ord-hljs-attr","--ord-hljs-string","--ord-hljs-number","--ord-hljs-function","--ord-hljs-literal","--ord-hljs-punctuation","--ord-hljs-keyword","--ord-hljs-comment"],P={selector:".scalar-app",map(e){let r={};for(let t of D)t in e&&(r[t]=e[t]);return r}},E={selector:".scalar-app, #headlessui-portal-root",map(e){let r={};for(let[t,a]of Object.entries(e)){let e=k[t];if(!e)continue;let n=w(t,a);for(let t of e)r[t]=n}return r}},$=`
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
   instead of Scalar's default 100dvh (which breaks when embedded in Docusaurus/non-fullscreen).
   The measurement is capped at the visible height \u{2014} see utils/sidebarHeight.ts. */
.scalar-app {
    --refs-sidebar-height: calc(var(--scalar-container-height, 100dvh) - var(--refs-header-height, 0px));
}
`,M=globalThis;function T({content:e,customAttributes:r,className:t,theme:s}){let u,f,b=(0,a.useId)(),h=(0,a.useRef)(null),m=(0,a.useRef)(null),y=(0,a.useRef)(null),g=t?.split(/\s+/).includes("dark")??!1,x=(0,a.useMemo)(()=>r??[],[r]),v=void 0!==r;(0,a.useEffect)(()=>{let e=h.current;if(!e)return;let r=function(e){for(let r=e.parentElement;r&&r!==document.body;r=r.parentElement)if(/^(auto|scroll|overlay|hidden)$/.test(getComputedStyle(r).overflowY))return r;return null}(e),t=()=>{var t;let a=(t=e.clientHeight,Math.min(t,r?.clientHeight??null??1e400,window.innerHeight));e.style.setProperty("--scalar-container-height",`${a}px`)},a=new ResizeObserver(t);return a.observe(e),r&&a.observe(r),window.addEventListener("resize",t),()=>{a.disconnect(),window.removeEventListener("resize",t),window.location.hash&&history.replaceState(null,"",window.location.pathname+window.location.search),document.body.classList.remove("light-mode","dark-mode")}},[]);let k=(0,a.useMemo)(()=>{if(!v)return"";let r=(0,o.i)(e);return r?x.flatMap(e=>(function(e,r){let t=[];for(let[a,n]of Object.entries(e))a.startsWith(r)&&t.push([a,n]);let a=e.paths;if(a){for(let[e,n]of Object.entries(a))if(n&&"object"==typeof n)for(let a of d){let o=n[a];if(o&&"object"==typeof o)for(let[n,s]of Object.entries(o))n.startsWith(r)&&t.push([`paths.${e}.${a}.${n}`,s])}}let n=e.components?.schemas;if(n)for(let[e,a]of Object.entries(n)){if(!a||"object"!=typeof a)continue;for(let[n,o]of Object.entries(a))n.startsWith(r)&&t.push([`components.schemas.${e}.${n}`,o]);let n=a.properties;if(n){for(let[a,o]of Object.entries(n))if(o&&"object"==typeof o)for(let[n,s]of Object.entries(o))n.startsWith(r)&&t.push([`components.schemas.${e}.properties.${a}.${n}`,s])}}return t})(r,e.prefixStartsWith??"").map(([e,r])=>`${e}=${JSON.stringify(r)}`)).join("|"):""},[e,v,x]),S=(0,a.useMemo)(()=>{let r;c.version=(r=(0,o.i)(e))?"openapi"in r&&r.openapi&&"string"==typeof r.openapi?r.openapi.substring(0,3):"swagger"in r&&r.swagger&&"string"==typeof r.swagger?"2.0":"":"",c.configs=v?x:[];let t=(0,o.i)(e),n=x.map(e=>e.prefixStartsWith).filter(Boolean);return{content:v&&t&&n.length?function(e,r){let t=e.components?.schemas;if(!t)return e;let a={},n=!1;for(let[e,o]of Object.entries(t)){if(!o||"object"!=typeof o){a[e]=o;continue}let t={};for(let[e,a]of Object.entries(o))r.some(r=>e.startsWith(r))&&(t[e]=a);if(0===Object.keys(t).length){a[e]=o;continue}n=!0,a[e]={...o,properties:{[p]:{[p]:t},...o.properties}}}return n?{...e,components:{...e.components,schemas:a}}:e}(t,n):t??e,plugins:v?[function(e,r){let t=new Set;for(let a of r){if(a.extensions)for(let e of Object.keys(a.extensions))t.add(e);if(a.prefixStartsWith&&e)for(let r of function(e,r){let t=new Set;for(let a of Object.keys(e))a.startsWith(r)&&t.add(a);let a=e.paths;if(a){for(let e of Object.values(a))if(e&&"object"==typeof e)for(let a of d){let n=e[a];if(n&&"object"==typeof n)for(let e of Object.keys(n))e.startsWith(r)&&t.add(e)}}let n=e.components?.schemas;if(n)for(let e of Object.values(n)){if(!e||"object"!=typeof e)continue;for(let a of Object.keys(e))a.startsWith(r)&&t.add(a);let a=e.properties;if(a){for(let e of Object.values(a))if(e&&"object"==typeof e)for(let a of Object.keys(e))a.startsWith(r)&&t.add(a)}}return[...t]}(e,a.prefixStartsWith))t.add(r)}let n=[...t].map(e=>{let t=r.find(r=>r.extensions?.[e])??r.find(r=>r.prefixStartsWith&&e.startsWith(r.prefixStartsWith))??r[0];return{name:e,component:j(e,t?.extensions?.[e],t??{}),renderer:l.N}});return n.push({name:p,component:e=>{if(!e||"object"!=typeof e)return null;let t=e.xSapSchemaAttrs??e["x-sap-schema-attrs"];if(!t||"object"!=typeof t)return null;let n=function(e){let r={};for(let[t,a]of Object.entries(e))r[t.replace(/-./g,e=>e[1].toUpperCase())]=a;return r}(t),o=[];for(let e of Object.keys(t)){if(!e.startsWith("x-"))continue;let t=r.find(r=>r.extensions?.[e])??r.find(r=>r.prefixStartsWith&&e.startsWith(r.prefixStartsWith));if(!t)continue;let a=j(e,t.extensions?.[e],t)(n);a&&o.push(a)}return 0===o.length?null:(0,a.createElement)("div",{className:"sap-schema-attrs-block"},...o)},renderer:l.N}),()=>({name:"custom-attributes-plugin",extensions:n})}(t,x)]:[],forceDarkModeState:g?"dark":"light",hideDarkModeToggle:!0,hideClientButton:!0,showDeveloperTools:"never"}},[e,g,v,x]);return(0,a.useEffect)(()=>{let e=m.current;if(!e)return;let r=document.createElement("div");r.style.height="100%",e.appendChild(r);let t=(0,n.g1)(r,{_integration:"react",...S});return y.current=t,()=>{y.current=null,queueMicrotask(()=>{t.destroy(),r.remove()})}},[g,v,k]),(0,a.useEffect)(()=>{y.current?.updateConfiguration({_integration:"react",...S})},[S]),(0,i.jsxs)("div",{ref:h,"data-renderer-id":b,style:{height:"100%",...s},children:[(0,i.jsx)("style",{children:$}),s&&(0,i.jsx)("style",{children:(u=`[data-renderer-id="${b}"]`,[[N,A,O,P].map(e=>{let r=Object.entries(e.map(s)).map(([e,r])=>`  ${e}: ${r};`).join("\n");return r?`${u} ${e.selector} {
${r}
}`:""}).filter(Boolean).join("\n\n"),!(f=Object.entries(E.map(s)).map(([e,r])=>`  ${e}: ${r};`).join("\n"))?"":`${E.selector} {
${f}
}`].filter(Boolean).join("\n\n"))}),(0,i.jsx)("div",{ref:m})]})}M.__VUE_OPTIONS_API__=!0,M.__VUE_PROD_HYDRATION_MISMATCH_DETAILS__=!0,M.__VUE_PROD_DEVTOOLS__=!1},7835(e,r,t){"use strict";t.d(r,{t:()=>i});var a=t(96540),n=t(51041),o=t(50790),s=t(74848);function i({content:e,className:r,theme:t}){let l=(0,a.useId)(),{setTheme:c}=(0,n.r)(),d=r?.split(/\s+/).includes("dark")??!1;(0,a.useEffect)(()=>{n.s.getState().setRawJson(e)},[e]),(0,a.useEffect)(()=>{c(d?"dark":"light")},[d,c]);let p=t?(0,o.t)("overlay-root",l,t):null,u=t?(0,o.t)("overlay-sidebar-footer-mobile",l,t):null,f=`
        [data-renderer-id="${l}"] .overlay-root code {
            color: var(--ord-code-fg, var(--ord-foreground, #24292f));
            background-color: var(--ord-code-bg, var(--ord-muted, #f6f8fa));
        }
        [data-renderer-id="${l}"] .overlay-sidebar-footer-mobile {
            background: var(--ord-background);
            color: var(--ord-muted-foreground);
        }
    `;return(0,s.jsxs)("div",{"data-renderer-id":l,className:"h-full",children:[(0,s.jsx)("style",{children:f}),p&&(0,s.jsx)("style",{children:p}),u&&(0,s.jsx)("style",{children:u}),(0,s.jsx)(n.n,{})]})}},83602(e,r,t){"use strict";t.r(r),t.d(r,{A2ARenderer:()=>c.t,AsyncApiRenderer:()=>i.t,CsnRenderer:()=>s.t,McpRenderer:()=>d.t,MetadataRenderer:()=>h,OpenApiRenderer:()=>o.t,OverlayRenderer:()=>l.t,createTheme:()=>y,detectMetaType:()=>n.n,extractVersion:()=>n.r,loadObject:()=>n.i,sapAsyncApiAttributesConfig:()=>A,sapCsnAttributesConfig:()=>O,sapOpenApiAttributesConfig:()=>S});var a=t(96540),n=t(50790),o=t(80336),s=t(19962),i=t(34693),l=t(7835),c=t(7559),d=t(44815),p=t(74848),u=t(92354),f={openapi:o.t,csn:s.t,asyncapi:i.t,overlay:l.t,a2a:c.t,mcp:d.t},b={openapi:"OpenAPI",csn:"CSN",asyncapi:"AsyncAPI",overlay:"Overlay",a2a:"A2A",mcp:"MCP"};function h({content:e,renderers:r,options:t,type:o,className:s,theme:i}){let l,c=t?.autoDetect!==!1,d=t?.strictTypeCheck!==!1,u=(0,a.useMemo)(()=>o||(c?(0,n.n)(e):"unknown"),[o,c,e]),m=(0,a.useMemo)(()=>o&&e?(0,n.n)(e):null,[o,e]),y=null!==m&&m!==o&&("unknown"!==m||d),g=(0,a.useMemo)(()=>(0,n.r)(u,e),[u,e]),x=b[u],v=(r??f)[u];if(y){let e="unknown"===m?"an unrecognised format":`\u{2018}${b[m]??m}\u{2019}`;l=(0,p.jsxs)("div",{style:{padding:16,fontFamily:"system-ui, sans-serif"},children:[(0,p.jsx)("strong",{children:"Type mismatch:"})," content was detected as ",e," but \u2018",b[o]??o,"\u2019 was specified."]})}else if(v){let r,a,n,o=(r={},n=!1!==(a=t?.customAttributes)?a:void 0,"openapi"===u&&n?.openapi&&(r.customAttributes=n.openapi),"asyncapi"===u&&(t?.asyncapi&&Object.assign(r,{config:t.asyncapi}),n?.asyncapi&&(r.customAttributes=n.asyncapi)),"csn"===u&&(t?.csn&&Object.assign(r,{config:t.csn}),n?.csn&&(r.customAttributes=n.csn)),"a2a"===u&&t?.a2a&&Object.assign(r,t.a2a),"mcp"===u&&t?.mcp&&Object.assign(r,t.mcp),r);l=(0,p.jsx)(v,{content:e,className:s,theme:i,...o})}else l=t?.fallback==="raw"?(0,p.jsx)("pre",{style:{margin:0,padding:16,overflow:"auto",height:"100%"},children:e}):(0,p.jsxs)("div",{style:{padding:16,fontFamily:"system-ui, sans-serif"},children:[(0,p.jsx)("strong",{children:"Unsupported format:"})," No renderer registered for type \u2018",u,"\u2019."]});return(0,p.jsxs)("div",{style:{position:"relative",height:"100%",...i},children:[x&&x!==b.overlay&&x!==b.openapi&&(0,p.jsxs)("div",{style:{position:"absolute",top:8,right:8,zIndex:100,padding:"2px 8px",borderRadius:4,fontSize:11,fontFamily:"system-ui, sans-serif",lineHeight:"16px",pointerEvents:"none",background:"var(--ord-muted, #e5e7eb)",color:"var(--ord-muted-foreground, #6b7280)"},children:[x,g?` \xb7 ${g}`:""]}),l]})}var m={background:"--ord-background",foreground:"--ord-foreground",primary:"--ord-primary",primaryForeground:"--ord-primary-foreground",secondary:"--ord-secondary",secondaryForeground:"--ord-secondary-foreground",muted:"--ord-muted",mutedForeground:"--ord-muted-foreground",accent:"--ord-accent",accentForeground:"--ord-accent-foreground",destructive:"--ord-destructive",destructiveForeground:"--ord-destructive-foreground",success:"--ord-success",successForeground:"--ord-success-foreground",warning:"--ord-warning",warningForeground:"--ord-warning-foreground",border:"--ord-border",input:"--ord-input",ring:"--ord-ring",card:"--ord-card",cardForeground:"--ord-card-foreground",popover:"--ord-popover",popoverForeground:"--ord-popover-foreground",radius:"--ord-radius"};function y(e){let r={};for(let[t,a]of Object.entries(e))void 0!==a&&(r[m[t]]=a);return r}var g={ACTIVE:"color-mix(in srgb, var(--scalar-color-green) 15%, transparent)",BETA:"color-mix(in srgb, var(--scalar-color-blue) 15%, transparent)",DEPRECATED:"color-mix(in srgb, var(--scalar-color-orange) 15%, transparent)",DECOMMISSIONED:"color-mix(in srgb, var(--scalar-color-red) 15%, transparent)"},x={ACTIVE:"var(--scalar-color-green)",BETA:"var(--scalar-color-blue)",DEPRECATED:"var(--scalar-color-orange)",DECOMMISSIONED:"var(--scalar-color-red)"};function v(){return(0,p.jsxs)("svg",{viewBox:"0 0 24 24",width:"1em",height:"1em",fill:"none",stroke:"currentColor",strokeWidth:"2","aria-hidden":"true",children:[(0,p.jsx)("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2"}),(0,p.jsx)("path",{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"})]})}function j(){return(0,p.jsx)("svg",{viewBox:"0 0 24 24",width:"1em",height:"1em",fill:"none",stroke:"currentColor",strokeWidth:"2","aria-hidden":"true",children:(0,p.jsx)("path",{d:"M20 6 9 17l-5-5"})})}function k(e){return{component:e}}var S={prefixStartsWith:"x-sap-",documentationUrl:(e,{version:r})=>`https://github.com/SAP/openapi-specification/tree/main/sap-schemas/v${r}#${e}`,extensions:{"x-sap-compliance-level":{type:"link",label:"SAP Compliance Level",callback:e=>({"sap:base:v1":"https://github.com/open-resource-discovery/specification/blob/main/docs/spec-extensions/policy-levels/sap-base-v1.md","sap:core:v1":"https://github.com/open-resource-discovery/specification/blob/main/docs/spec-extensions/policy-levels/sap-core-v1.md","sap:core:v2":"https://github.com/open-resource-discovery/specification/blob/main/docs/spec-extensions/policy-levels/sap-core-v1.md"})[String(e)]},"x-sap-shortText":{type:"string",label:"SAP Short Text"},"x-sap-software-min-version":{type:"string",label:"SAP Software Version"},"x-sap-api-type":{type:"string",label:"SAP API Type"},"x-sap-direction":{type:"string",label:"SAP Direction"},"x-sap-ord-id":k(function({xSapOrdId:e}){let[r,t]=(0,a.useState)(!1);return e?(0,p.jsxs)("div",{className:"sap-api-container",children:[(0,p.jsxs)("div",{className:"sap-api-label",children:["ORD ID ",(0,p.jsx)(o.n,{attributeName:"x-sap-ord-id"})]}),(0,p.jsxs)("div",{className:"sap-api-value sap-api-ord-id",children:[(0,p.jsx)("span",{className:"sap-api-ord-id-text",children:e}),(0,p.jsx)("button",{type:"button",className:"sap-api-copy-btn",onClick:()=>{navigator.clipboard?.writeText(e).then(()=>{t(!0),setTimeout(()=>t(!1),1500)})},"aria-label":"Copy ORD ID",title:r?"Copied":"Copy",children:r?(0,p.jsx)(j,{}):(0,p.jsx)(v,{})})]})]}):null}),"x-sap-operation-intent":{type:"string",label:"SAP Operation Intent"},"x-sap-odm-oid":{type:"string",label:"ODM OID"},"x-sap-odm-oid-reference-entity-name":{type:"string",label:"ODM OID Reference Entity Name"},"x-sap-precision":{type:"number",label:"SAP Precision"},"x-sap-scale":{type:"number",label:"SAP Scale"},"x-sap-root-entity":{type:"boolean",label:"SAP Root Entity"},"x-sap-dpp-entity-semantics":{type:"string",label:"SAP DPP: Entity Semantics"},"x-sap-dpp-data-subject-role":{type:"string",label:"SAP DPP: Data Subject Role"},"x-sap-dpp-data-subject-role-description":{type:"string",label:"SAP DPP: Data Subject Role Description"},"x-sap-dpp-field-semantics":{type:"string",label:"SAP DPP: Field Semantics"},"x-sap-dpp-is-potentially-personal":{type:"boolean",label:"SAP DPP: Potentially Personal"},"x-sap-dpp-is-potentially-sensitive":{type:"boolean",label:"SAP DPP: Potentially Sensitive"},"x-sap-ext-overview":k(function(e){if(!("object"==typeof e&&null!==e&&"xSapExtOverview"in e&&Array.isArray(e.xSapExtOverview)&&e.xSapExtOverview.every(e=>"object"==typeof e&&null!==e&&"name"in e&&"values"in e&&"string"==typeof e.name&&("string"==typeof e.values||!!Array.isArray(e.values)&&(!!e.values.every(e=>"string"==typeof e)||e.values.every(e=>"object"==typeof e&&null!==e&&"text"in e&&"string"==typeof e.text&&"format"in e&&("plain"===e.format||"markdown"===e.format)))))))return null;let{xSapExtOverview:r}=e;return(0,p.jsxs)("div",{className:"sap-api-container",children:[(0,p.jsxs)("div",{className:"sap-api-label sap-api-label--root",children:["SAP Extensibility Overview ",(0,p.jsx)(o.n,{attributeName:"x-sap-ext-overview"})]}),(0,p.jsx)("div",{className:"sap-api-value sap-api-value--root",children:r.map(e=>(0,p.jsxs)("div",{children:[(0,p.jsx)("strong",{children:e.name}),(0,p.jsx)("ul",{className:"sap-api-list",children:"string"==typeof e.values?(0,p.jsx)("li",{children:e.values}):e.values.map(e=>"string"==typeof e?(0,p.jsx)("li",{children:e},e):(0,p.jsx)("li",{children:"plain"===e.format?e.text:(0,p.jsx)(u.oz,{children:e.text})},e.text))})]},e.name))})]})}),"x-sap-stateInfo":k(function({xSapStateInfo:e}){if(!e)return null;let r=e.state?.toUpperCase(),t=(0,p.jsx)("span",{style:{display:"inline-block",borderRadius:"10px",padding:"0 6px",background:g[r]||"",color:x[r]||""},children:r}),a=new Intl.DateTimeFormat("en-GB",{dateStyle:"long"}),n=e=>{let r=new Date(e);return isNaN(r.getTime())?e:a.format(r)};return(0,p.jsxs)("div",{className:"sap-api-container",children:[(0,p.jsxs)("div",{className:"sap-api-label",children:["API State ",(0,p.jsx)(o.n,{attributeName:"x-sap-stateInfo"})]}),(0,p.jsxs)("div",{className:"sap-api-value",children:[t,e.deprecationDate&&(0,p.jsxs)("div",{children:["Deprecated on ",n(e.deprecationDate)]}),e.decommissionedDate&&(0,p.jsxs)("div",{children:["Decommissioned on ",n(e.decommissionedDate)]}),e.successorApi&&(0,p.jsxs)("div",{children:["Successor API: ",(0,p.jsx)("a",{href:e.successorApi,target:"_blank",rel:"noreferrer",className:"sap-api-link",children:e.successorApi})]})]})]})}),"x-sap-extensible":{type:"object",label:"SAP Extensible"},"x-sap-deprecated-operation":k(function({xSapDeprecatedOperation:e}){let r=new Intl.DateTimeFormat("en-GB",{dateStyle:"long"}).format(new Date(e.deprecationDate));return(0,p.jsxs)("div",{className:"sap-api-container",children:[(0,p.jsxs)("div",{className:"sap-api-label",children:["SAP Deprecated Operation ",(0,p.jsx)(o.n,{attributeName:"x-sap-deprecated-operation"})]}),(0,p.jsxs)("div",{className:"sap-api-value",children:["Deprecated on ",r," ",(0,p.jsx)("br",{}),e.successorOperationRef||e.successorOperationId?(0,p.jsxs)(p.Fragment,{children:[" Successor ",e.successorOperationRef?(0,p.jsx)("a",{href:e.successorOperationRef,rel:"noreferrer, noopener",children:e.successorOperationRef}):null,e.successorOperationId?(0,p.jsx)("span",{children:e.successorOperationId}):null]}):null]})]})}),"x-sap-odm-entity-name":k(function({xSapOdmEntityName:e}){return(0,p.jsxs)("div",{className:"sap-api-container",children:[(0,p.jsxs)("div",{className:"sap-api-label",children:["ODM entity name ",(0,p.jsx)(o.n,{attributeName:"x-sap-odm-entity-name"})]}),(0,p.jsx)("div",{className:"sap-api-value",children:e})]})}),"x-sap-odm-semantic-key":k(function({xSapOdmSemanticKey:e}){return(0,p.jsxs)("div",{className:"sap-api-container",children:[(0,p.jsxs)("div",{className:"sap-api-label",children:["ODM Semantic Key ",(0,p.jsx)(o.n,{attributeName:"x-sap-odm-semantic-key"})]}),(0,p.jsx)("div",{className:"sap-api-value",children:e.map(e=>(0,p.jsxs)("div",{children:[(0,p.jsx)("strong",{children:e.name}),(0,p.jsx)("ul",{className:"sap-api-list",children:e.values.map(e=>(0,p.jsx)("li",{children:e},e))})]},e.name))})]})})}},w={ACTIVE:"color-mix(in srgb, #22c55e 15%, transparent)",BETA:"color-mix(in srgb, #3b82f6 15%, transparent)",DEPRECATED:"color-mix(in srgb, #f97316 15%, transparent)",DECOMMISSIONED:"color-mix(in srgb, #ef4444 15%, transparent)"},N={ACTIVE:"#16a34a",BETA:"#2563eb",DEPRECATED:"#ea580c",DECOMMISSIONED:"#dc2626"},A={prefixStartsWith:"x-sap-",documentationUrl:e=>`https://github.com/SAP/asyncapi-specification#${e}`,extensions:{"x-sap-catalog-spec-version":{type:"string",label:"SAP Catalog Spec Version"},"x-sap-application-namespace":{type:"string",label:"SAP Application Namespace"},"x-sap-ord-id":{type:"string",label:"ORD ID"},"x-sap-shortText":{type:"string",label:"SAP Short Text"},"x-sap-software-min-version":{type:"string",label:"SAP Software Version"},"x-sap-stateInfo":{component:function({propertyName:e,propertyValue:r}){if(!r||"object"!=typeof r)return null;let t=r.state?.toUpperCase(),a=(0,p.jsx)("span",{style:{display:"inline-block",borderRadius:"10px",padding:"0 6px",background:w[t]||"",color:N[t]||""},children:t}),n=new Intl.DateTimeFormat("en-GB",{dateStyle:"long"}),o=e=>{let r=new Date(e);return isNaN(r.getTime())?e:n.format(r)};return(0,p.jsxs)("div",{className:"asyncapi-attr-row",children:[(0,p.jsxs)("div",{className:"asyncapi-attr-label",children:["API State ",(0,p.jsx)(i.n,{attributeName:e})]}),(0,p.jsxs)("div",{className:"asyncapi-attr-value",children:[a,r.deprecationDate&&(0,p.jsxs)("div",{children:["Deprecated on ",o(r.deprecationDate)]}),r.decommissionedDate&&(0,p.jsxs)("div",{children:["Decommissioned on ",o(r.decommissionedDate)]}),r.link&&(0,p.jsxs)("div",{children:["More info: ",(0,p.jsx)("a",{href:r.link,target:"_blank",rel:"noreferrer",className:"asyncapi-attr-link",children:r.link})]})]})]})}},"x-sap-event-spec-version":{type:"string",label:"SAP Event Spec Version"},"x-sap-event-source":{type:"string",label:"SAP Event Source"},"x-sap-event-source-parameters":{type:"object",label:"SAP Event Source Parameters"},"x-sap-event-version":{type:"string",label:"SAP Event Version"},"x-sap-event-characteristics":{type:"object",label:"SAP Event Characteristics"},"x-sap-object-type":{type:"string",label:"SAP Object Type"},"x-sap-odm-version":{type:"string",label:"SAP ODM Version"},"x-sap-logical-odm-event-version":{type:"string",label:"SAP Logical ODM Event Version"},"x-sap-dpp-entity-semantics":{type:"string",label:"SAP DPP: Entity Semantics"},"x-sap-dpp-data-subject-role":{type:"string",label:"SAP DPP: Data Subject Role"},"x-sap-dpp-data-subject-role-description":{type:"string",label:"SAP DPP: Data Subject Role Description"},"x-sap-dpp-field-semantics":{type:"string",label:"SAP DPP: Field Semantics"},"x-sap-dpp-is-potentially-personal":{type:"boolean",label:"SAP DPP: Potentially Personal"},"x-sap-dpp-is-potentially-sensitive":{type:"boolean",label:"SAP DPP: Potentially Sensitive"}}},O={prefixStartsWith:"@",annotations:{"@EndUserText.label":{type:"string",label:"End User Text \xb7 Label"},"@EndUserText.heading":{type:"string",label:"End User Text \xb7 Heading"},"@EndUserText.quickInfo":{type:"string",label:"End User Text \xb7 Quick Info"},"@ObjectModel.modelingPattern":{type:"object",label:"Modeling Pattern"},"@ObjectModel.text.element":{type:"array",label:"Text Element"},"@ObjectModel.text.association":{type:"object",label:"Text Association"},"@ObjectModel.semanticKey":{type:"array",label:"Semantic Key"},"@ObjectModel.representativeKey":{type:"object",label:"Representative Key"},"@ObjectModel.compositionRoot":{type:"boolean",label:"Composition Root"},"@ObjectModel.supportedCapabilities":{type:"array",label:"Supported Capabilities"},"@ObjectModel.usageType.sizeCategory":{type:"string",label:"Usage Type \xb7 Size Category"},"@ObjectModel.foreignKey.association":{type:"object",label:"Foreign Key Association"},"@Consumption.valueHelpDefinition":{type:"array",label:"Value Help"},"@Consumption.hidden":{type:"boolean",label:"Hidden"},"@PersonalData.entitySemantics":{type:"string",label:"DPP \xb7 Entity Semantics"},"@PersonalData.dataSubjectRole":{type:"string",label:"DPP \xb7 Data Subject Role"},"@PersonalData.dataSubjectRoleDescription":{type:"string",label:"DPP \xb7 Data Subject Role Description"},"@PersonalData.fieldSemantics":{type:"string",label:"DPP \xb7 Field Semantics"},"@PersonalData.isPotentiallyPersonal":{type:"boolean",label:"DPP \xb7 Potentially Personal"},"@PersonalData.isPotentiallySensitive":{type:"boolean",label:"DPP \xb7 Potentially Sensitive"},"@Semantics.currencyCode":{type:"boolean",label:"Semantics \xb7 Currency Code"},"@Semantics.amount.currencyCode":{type:"object",label:"Semantics \xb7 Amount Currency"},"@Semantics.unitOfMeasure":{type:"boolean",label:"Semantics \xb7 Unit of Measure"},"@Semantics.quantity.unitOfMeasure":{type:"object",label:"Semantics \xb7 Quantity Unit"},"@Semantics.text":{type:"boolean",label:"Semantics \xb7 Text"},"@Semantics.uuid":{type:"boolean",label:"Semantics \xb7 UUID"},"@Semantics.language":{type:"boolean",label:"Semantics \xb7 Language"},"@API.element.releaseState":{type:"string",label:"API \xb7 Element Release State"},"@API.entity.releaseState":{type:"string",label:"API \xb7 Entity Release State"},"@ODM.entityName":{type:"string",label:"ODM \xb7 Entity Name"},"@ODM.oid":{type:"string",label:"ODM \xb7 OID"},"@ODM.oidReference.entityName":{type:"string",label:"ODM \xb7 OID Reference Entity"},"@Aggregation.default":{type:"object",label:"Default Aggregation"},"@EntityRelationship.entityType":{type:"string",label:"Entity Relationship \xb7 Type"},"@EntityRelationship.entityIds":{type:"array",label:"Entity Relationship \xb7 IDs"},"@EntityRelationship.propertyType":{type:"string",label:"Entity Relationship \xb7 Property Type"},"@EntityRelationship.compositeReferences":{type:"array",label:"Entity Relationship \xb7 Composite References"},"@EntityRelationship.reference":{type:"array",label:"Entity Relationship \xb7 Reference"},"@DataIntegration.dataUnavailable":{type:"boolean",label:"Data Integration \xb7 Unavailable"}}}}}]);