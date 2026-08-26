"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["9597"],{22604(e,r,t){t.r(r),t.d(r,{AsyncApiRenderer:()=>a.t});var a=t(32169)},32169(e,r,t){t.d(r,{n:()=>c,t:()=>$});var a=t(92810),n=t(96540),o=t(29152),i=t(74848),s=t(13406),l={version:"",configs:[],rootFields:{},getDocumentationUrl(e){return(this.configs.find(r=>r.extensions?.[e])??this.configs.find(r=>r.prefixStartsWith&&e.startsWith(r.prefixStartsWith)))?.documentationUrl?.(e,{version:this.version})}};function c({attributeName:e}){let r=l.getDocumentationUrl(e);return r?(0,i.jsx)("a",{href:r,style:{marginLeft:4,marginTop:4},target:"_blank",rel:"noreferrer",title:"View in AsyncAPI Specification",children:(0,i.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",children:(0,i.jsx)("path",{d:"M10.604 1h4.146a.25.25 0 01.25.25v4.146a.25.25 0 01-.427.177L13.03 4.03 9.28 7.78a.75.75 0 01-1.06-1.06l3.75-3.75-1.543-1.543A.25.25 0 0110.604 1zM3.75 2A1.75 1.75 0 002 3.75v8.5c0 .966.784 1.75 1.75 1.75h8.5A1.75 1.75 0 0014 12.25v-3.5a.75.75 0 00-1.5 0v3.5a.25.25 0 01-.25.25h-8.5a.25.25 0 01-.25-.25v-8.5a.25.25 0 01.25-.25h3.5a.75.75 0 000-1.5h-3.5z"})})}):null}function d({name:e,label:r}){return(0,i.jsxs)("div",{className:"asyncapi-attr-label",children:[r," ",(0,i.jsx)(c,{attributeName:e})]})}function p(e){if(null==e)return(0,i.jsx)("span",{className:"asyncapi-attr-placeholder",children:"\u2014"});if("boolean"==typeof e)return(0,i.jsx)("span",{children:e?"Yes":"No"});if("number"==typeof e)return(0,i.jsx)("span",{children:e});if(Array.isArray(e))return(0,i.jsx)("ul",{className:"asyncapi-attr-list",children:e.map((e,r)=>(0,i.jsx)("li",{children:p(e)},r))});if("object"==typeof e)return(0,i.jsx)("dl",{className:"asyncapi-attr-obj",children:Object.entries(e).map(([e,r])=>(0,i.jsxs)("div",{className:"asyncapi-attr-obj-row",children:[(0,i.jsxs)("dt",{className:"asyncapi-attr-obj-key",children:[e,":"]})," ",(0,i.jsx)("dd",{className:"asyncapi-attr-obj-val",children:p(r)})]},e))});let r=String(e);return/[*_`[\]#]/.test(r)?(0,i.jsx)(o.oz,{children:r}):(0,i.jsx)("span",{children:r})}function u(e){let r=e.valueLinks?.[e.value];return(0,i.jsxs)("div",{className:"asyncapi-attr-row",children:[(0,i.jsx)(d,{name:e.name,label:e.label}),(0,i.jsx)("p",{className:"asyncapi-attr-value",children:r?(0,i.jsx)("a",{href:r,rel:"noreferrer noopener",target:"_blank",className:"asyncapi-attr-link",children:e.value}):e.value})]})}function f(e){return(0,i.jsxs)("div",{className:"asyncapi-attr-row",children:[(0,i.jsx)(d,{name:e.name,label:e.label}),(0,i.jsx)("p",{className:"asyncapi-attr-value",children:e.value?"Yes":"No"})]})}function h(e){return(0,i.jsxs)("div",{className:"asyncapi-attr-row",children:[(0,i.jsx)(d,{name:e.name,label:e.label}),(0,i.jsx)("p",{className:"asyncapi-attr-value",children:e.value})]})}function b(e){return(0,i.jsxs)("div",{className:"asyncapi-attr-row",children:[(0,i.jsx)(d,{name:e.name,label:e.label}),(0,i.jsx)("div",{className:"asyncapi-attr-value",children:(0,i.jsx)("ul",{className:"asyncapi-attr-list",children:e.value.map((e,r)=>(0,i.jsx)("li",{children:p(e)},r))})})]})}function m(e){return(0,i.jsxs)("div",{className:"asyncapi-attr-row",children:[(0,i.jsx)(d,{name:e.name,label:e.label}),(0,i.jsx)("div",{className:"asyncapi-attr-value",children:p(e.value)})]})}function x(e){let r=e.callback(e.value);return(0,i.jsxs)("div",{className:"asyncapi-attr-row",children:[(0,i.jsx)(d,{name:e.name,label:e.label}),(0,i.jsx)("p",{className:"asyncapi-attr-value",children:r?(0,i.jsx)("a",{href:r,rel:"noreferrer noopener",target:"_blank",className:"asyncapi-attr-link",children:String(e.value)}):String(e.value)})]})}function y(e,r,t){return r&&"component"in r?r.component:function({propertyValue:a}){var n;let o;if(null==a)return null;let s=r&&"label"in r&&r.label?r.label:(n=t.prefixStartsWith,o=e,n&&o.startsWith(n)&&(o=o.slice(n.length)),o.replace(/([a-z])([A-Z])/g,"$1-$2").split("-").filter(Boolean).map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(" "));if(r?.type==="link")return(0,i.jsx)(x,{name:e,label:s,value:a,callback:r.callback});if(r?.type==="boolean"||"boolean"==typeof a)return(0,i.jsx)(f,{name:e,label:s,value:!!a});if(r?.type==="number"||"number"==typeof a)return(0,i.jsx)(h,{name:e,label:s,value:a});if(r?.type==="array"||Array.isArray(a))return Array.isArray(a)?(0,i.jsx)(b,{name:e,label:s,value:a}):null;if(r?.type==="object"||"object"==typeof a)return(0,i.jsx)(m,{name:e,label:s,value:a});let l=r&&"valueLinks"in r?r.valueLinks:void 0;return(0,i.jsx)(u,{name:e,label:s,value:String(a),valueLinks:l})}}var g=new Set(["asyncapi","info","channels","operations","components","servers","tags","id","defaultContentType","externalDocs"]),v=`
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
`,j={"--ord-background":"#1e1e1e","--ord-foreground":"#d4d4d4","--ord-card":"#252526","--ord-primary":"#0098ff","--ord-primary-foreground":"#1e1e1e","--ord-muted":"#2d2d30","--ord-muted-foreground":"#969696","--ord-border":"#3e3e42"};function $({content:e,config:r,customAttributes:t,className:o,theme:c}){let d,p,u,f,h,b,m,x,w,k,N,S,A,W,O=(0,n.useId)(),M=o?.split(/\s+/).includes("dark")??!1,z=c??(M?j:null),C=z?(d=z["--ord-background"],p=z["--ord-foreground"],u=z["--ord-secondary"],f=z["--ord-secondary-foreground"],h=z["--ord-muted"],b=z["--ord-muted-foreground"],m=z["--ord-border"],x=z["--ord-primary"],w=z["--ord-primary-foreground"],k=z["--ord-accent"],N=z["--ord-accent-foreground"],S=z["--ord-radius"],A=[],W=`[data-renderer-id="${O}"]`,d&&A.push(`${W} .bg-white { background-color: ${d} !important; }`),p&&A.push(`${W} {color: ${p}; }`),k&&N&&A.push(`${W} .bg-blue-100 { color: ${N}; background-color: ${k}; }`),u&&A.push(`${W} .bg-gray-100 { background-color: ${u} !important; }`),f&&A.push(`${W} .prose, ${W} .text-gray-700 { color: ${f}; }`),h&&A.push(`${W} .bg-gray-200 { background-color: ${h} !important; }`),b&&A.push(`${W} .text-gray-500, ${W} .text-gray-600 { color: ${b} !important; }`),x&&A.push(`${W} .bg-gray-800 { background-color: ${x} !important; }`,`${W} .bg-blue-100 .text-purple-700 { color: ${x}; }`),w&&A.push(`${W} .text-white { color: ${w} !important; }`),u&&A.push(`${W} .bg-gray-400 { background-color: ${u} !important; }`),N&&A.push(`${W} .text-gray-200, ${W} .examples .text-gray-600 { color: ${N} !important; } `),p&&A.push(`${W} .text-gray-800, ${W} .text-gray-900 { color: ${p} !important; }`),m&&A.push(`${W} .border { border-color: ${m}; }`,`${W} .border-b { border-bottom-color: ${m}; }`,`${W} .border-gray-400 { border-color: ${m} !important; }`),S&&A.push(`${W} .rounded, ${W} .prose pre { border-radius: ${S}px; }`,`@media (min-width: 1536px) {
${W} .\\32 xl\\:rounded { border-radius: ${S}px; }
}`,`${W} .rounded:not(.inline-block) { overflow: hidden; }`,`${W} .rounded-tl-none { border-top-left-radius: 0px; }`),A.join("\n")):null,F=(0,n.useMemo)(()=>t??[],[t]),L=void 0!==t,B=(0,n.useMemo)(()=>L?(0,a.i)(e):null,[e,L]),U=(0,n.useMemo)(()=>"string"==typeof B?.asyncapi?B.asyncapi:"",[B]),_=(0,n.useMemo)(()=>{if(!L)return r??{};let e=function(e,r,t){if(l.version=t,l.configs=e,r){let t=e.map(e=>e.prefixStartsWith).filter(Boolean);l.rootFields=t.length?function(e,r){let t={};for(let[a,n]of Object.entries(e))!g.has(a)&&a.startsWith("x-")&&r.some(e=>a.startsWith(e))&&(t[a]=n);return t}(r,t):{}}else l.rootFields={};let a={};for(let t of e){for(let[e,r]of Object.entries(t.extensions??{}))a[e]=y(e,r,t);if(t.prefixStartsWith&&r)for(let e of function(e,r){let t=new Set,a=e=>{if(e&&"object"==typeof e)for(let a of Object.keys(e))a.startsWith(r)&&t.add(a)};a(e),a(e.info);let n=e.channels;if(n)for(let e of Object.values(n)){if(!e||"object"!=typeof e)continue;for(let r of(a(e),["subscribe","publish","send","receive"])){let t=e[r];t&&"object"==typeof t&&(a(t),a(t.message))}let r=e.messages;if(r)for(let e of Object.values(r))a(e)}let o=e.operations;if(o)for(let e of Object.values(o))a(e);let i=e.components;if(i){for(let e of["messages","messageTraits"]){let r=i[e];if(r)for(let e of Object.values(r))a(e)}let e=i.schemas;if(e)for(let r of Object.values(e))a(r);let r=i.channels;if(r)for(let e of Object.values(r))a(e);let t=i.operations;if(t)for(let e of Object.values(t))a(e)}return[...t]}(r,t.prefixStartsWith))a[e]||(a[e]=y(e,void 0,t))}return a}(F,B,U);return{...r,extensions:{...e,...r?.extensions??{}}}},[r,L,F,B,U]),D=(0,n.useMemo)(()=>L?function(e){function r(r){let t=Object.entries(l.rootFields);if(!t.length)return null;let a=t.flatMap(([r,t])=>{let a=l.configs.find(e=>e.extensions?.[r])??l.configs.find(e=>e.prefixStartsWith&&r.startsWith(e.prefixStartsWith))??e[0];if(!a)return[];let o=a.extensions?.[r];return[(0,n.createElement)(y(r,o,a),{key:r,propertyName:r,propertyValue:t,document:void 0,parent:void 0})]});return a.length?(0,n.createElement)("div",null,...a):null}return{name:"sap-root-extensions",version:"1.0.0",install(e){e.registerComponent(s.PluginSlot.INFO,r)}}}(F):null,[L,F]),E=`[data-renderer-id="${O}"]`,I=`${E} { container: asyncapi-attrs / inline-size; height: 100%; overflow: auto; scrollbar-gutter: stable; }
${E} :where(h1,h2,h3,h4,p,span,strong,a,li,td,div):not(pre *) { overflow-wrap: anywhere; }`;return(0,i.jsxs)("div",{"data-renderer-id":O,className:o,children:[C&&(0,i.jsx)("style",{children:C}),L&&(0,i.jsx)("style",{children:v}),(0,i.jsx)("style",{children:I}),L&&(0,i.jsx)("style",{children:`[data-renderer-id="${O}"] #introduction .hidden { display: block !important; }`}),!L&&(0,i.jsx)("style",{children:`[data-renderer-id="${O}"] :is(#operations, #messages) div:has(> .flex.py-2 span.Extensions) { display: none; }`}),(0,i.jsx)(s,{schema:e,config:_,plugins:D?[D]:[]})]})}}}]);