"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["9597"],{22604(e,r,t){t.r(r),t.d(r,{AsyncApiRenderer:()=>a.t});var a=t(97538)},97538(e,r,t){t.d(r,{n:()=>d,t:()=>w});var a=t(92810),n=t(96540),o=t(29152),i=t(74848),s=t(13406),l=t(85096),c={version:"",configs:[],rootFields:{},getDocumentationUrl(e){return(this.configs.find(r=>r.extensions?.[e])??this.configs.find(r=>r.prefixStartsWith&&e.startsWith(r.prefixStartsWith)))?.documentationUrl?.(e,{version:this.version})}};function d({attributeName:e}){let r=c.getDocumentationUrl(e);return r?(0,i.jsx)("a",{href:r,style:{marginLeft:4,marginTop:4},target:"_blank",rel:"noreferrer",title:"View in AsyncAPI Specification",children:(0,i.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",children:(0,i.jsx)("path",{d:"M10.604 1h4.146a.25.25 0 01.25.25v4.146a.25.25 0 01-.427.177L13.03 4.03 9.28 7.78a.75.75 0 01-1.06-1.06l3.75-3.75-1.543-1.543A.25.25 0 0110.604 1zM3.75 2A1.75 1.75 0 002 3.75v8.5c0 .966.784 1.75 1.75 1.75h8.5A1.75 1.75 0 0014 12.25v-3.5a.75.75 0 00-1.5 0v3.5a.25.25 0 01-.25.25h-8.5a.25.25 0 01-.25-.25v-8.5a.25.25 0 01.25-.25h3.5a.75.75 0 000-1.5h-3.5z"})})}):null}function p({name:e,label:r}){return(0,i.jsxs)("div",{className:"asyncapi-attr-label",children:[r," ",(0,i.jsx)(d,{attributeName:e})]})}function u(e){if(null==e)return(0,i.jsx)("span",{className:"asyncapi-attr-placeholder",children:"\u2014"});if("boolean"==typeof e)return(0,i.jsx)("span",{children:e?"Yes":"No"});if("number"==typeof e)return(0,i.jsx)("span",{children:e});if(Array.isArray(e))return(0,i.jsx)("ul",{className:"asyncapi-attr-list",children:e.map((e,r)=>(0,i.jsx)("li",{children:u(e)},r))});if("object"==typeof e)return(0,i.jsx)("dl",{className:"asyncapi-attr-obj",children:Object.entries(e).map(([e,r])=>(0,i.jsxs)("div",{className:"asyncapi-attr-obj-row",children:[(0,i.jsxs)("dt",{className:"asyncapi-attr-obj-key",children:[e,":"]})," ",(0,i.jsx)("dd",{className:"asyncapi-attr-obj-val",children:u(r)})]},e))});let r=String(e);return/[*_`[\]#]/.test(r)?(0,i.jsx)(o.oz,{children:r}):(0,i.jsx)("span",{children:r})}function f(e){let r=e.valueLinks?.[e.value];return(0,i.jsxs)("div",{className:"asyncapi-attr-row",children:[(0,i.jsx)(p,{name:e.name,label:e.label}),(0,i.jsx)("p",{className:"asyncapi-attr-value",children:r?(0,i.jsx)("a",{href:r,rel:"noreferrer noopener",target:"_blank",className:"asyncapi-attr-link",children:e.value}):e.value})]})}function h(e){return(0,i.jsxs)("div",{className:"asyncapi-attr-row",children:[(0,i.jsx)(p,{name:e.name,label:e.label}),(0,i.jsx)("p",{className:"asyncapi-attr-value",children:e.value?"Yes":"No"})]})}function b(e){return(0,i.jsxs)("div",{className:"asyncapi-attr-row",children:[(0,i.jsx)(p,{name:e.name,label:e.label}),(0,i.jsx)("p",{className:"asyncapi-attr-value",children:e.value})]})}function m(e){return(0,i.jsxs)("div",{className:"asyncapi-attr-row",children:[(0,i.jsx)(p,{name:e.name,label:e.label}),(0,i.jsx)("div",{className:"asyncapi-attr-value",children:(0,i.jsx)("ul",{className:"asyncapi-attr-list",children:e.value.map((e,r)=>(0,i.jsx)("li",{children:u(e)},r))})})]})}function x(e){return(0,i.jsxs)("div",{className:"asyncapi-attr-row",children:[(0,i.jsx)(p,{name:e.name,label:e.label}),(0,i.jsx)("div",{className:"asyncapi-attr-value",children:u(e.value)})]})}function y(e){let r=e.callback(e.value);return(0,i.jsxs)("div",{className:"asyncapi-attr-row",children:[(0,i.jsx)(p,{name:e.name,label:e.label}),(0,i.jsx)("p",{className:"asyncapi-attr-value",children:r?(0,i.jsx)("a",{href:r,rel:"noreferrer noopener",target:"_blank",className:"asyncapi-attr-link",children:String(e.value)}):String(e.value)})]})}function v(e,r,t){return r&&"component"in r?r.component:function({propertyValue:a}){var n;let o;if(null==a)return null;let s=r&&"label"in r&&r.label?r.label:(n=t.prefixStartsWith,o=e,n&&o.startsWith(n)&&(o=o.slice(n.length)),o.replace(/([a-z])([A-Z])/g,"$1-$2").split("-").filter(Boolean).map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(" "));if(r?.type==="link")return(0,i.jsx)(y,{name:e,label:s,value:a,callback:r.callback});if(r?.type==="boolean"||"boolean"==typeof a)return(0,i.jsx)(h,{name:e,label:s,value:!!a});if(r?.type==="number"||"number"==typeof a)return(0,i.jsx)(b,{name:e,label:s,value:a});if(r?.type==="array"||Array.isArray(a))return Array.isArray(a)?(0,i.jsx)(m,{name:e,label:s,value:a}):null;if(r?.type==="object"||"object"==typeof a)return(0,i.jsx)(x,{name:e,label:s,value:a});let l=r&&"valueLinks"in r?r.valueLinks:void 0;return(0,i.jsx)(f,{name:e,label:s,value:String(a),valueLinks:l})}}var g=new Set(["asyncapi","info","channels","operations","components","servers","tags","id","defaultContentType","externalDocs"]),j=`
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
`,$={"--ord-background":"#1e1e1e","--ord-foreground":"#d4d4d4","--ord-card":"#252526","--ord-primary":"#0098ff","--ord-primary-foreground":"#1e1e1e","--ord-muted":"#2d2d30","--ord-muted-foreground":"#969696","--ord-border":"#3e3e42"};function w({content:e,config:r,customAttributes:t,className:o,theme:d}){let p,u,f,h,b,m,x,y,k,N,W,A,S,O,M=(0,n.useId)(),z=o?.split(/\s+/).includes("dark")??!1,C=d??(z?$:null),F=C?(p=C["--ord-background"],u=C["--ord-foreground"],f=C["--ord-secondary"],h=C["--ord-secondary-foreground"],b=C["--ord-muted"],m=C["--ord-muted-foreground"],x=C["--ord-border"],y=C["--ord-primary"],k=C["--ord-primary-foreground"],N=C["--ord-accent"],W=C["--ord-accent-foreground"],A=C["--ord-radius"],S=[],O=`[data-renderer-id="${M}"]`,p&&S.push(`${O} .bg-white { background-color: ${p} !important; }`),u&&S.push(`${O} {color: ${u}; }`),N&&W&&S.push(`${O} .bg-blue-100 { color: ${W}; background-color: ${N}; }`),f&&S.push(`${O} .bg-gray-100 { background-color: ${f} !important; }`),h&&S.push(`${O} .prose, ${O} .text-gray-700 { color: ${h}; }`),b&&S.push(`${O} .bg-gray-200 { background-color: ${b} !important; }`),m&&S.push(`${O} .text-gray-500, ${O} .text-gray-600 { color: ${m} !important; }`),y&&S.push(`${O} .bg-gray-800 { background-color: ${y} !important; }`,`${O} .bg-blue-100 .text-purple-700 { color: ${y}; }`),k&&S.push(`${O} .text-white { color: ${k} !important; }`),f&&S.push(`${O} .bg-gray-400 { background-color: ${f} !important; }`),W&&S.push(`${O} .text-gray-200, ${O} .examples .text-gray-600 { color: ${W} !important; } `),u&&S.push(`${O} .text-gray-800, ${O} .text-gray-900 { color: ${u} !important; }`),x&&S.push(`${O} .border { border-color: ${x}; }`,`${O} .border-b { border-bottom-color: ${x}; }`,`${O} .border-gray-400 { border-color: ${x} !important; }`),A&&S.push(`${O} .rounded, ${O} .prose pre { border-radius: ${A}px; }`,`@media (min-width: 1536px) {
${O} .\\32 xl\\:rounded { border-radius: ${A}px; }
}`,`${O} .rounded:not(.inline-block) { overflow: hidden; }`,`${O} .rounded-tl-none { border-top-left-radius: 0px; }`),S.join("\n")):null,L=(0,n.useMemo)(()=>t??[],[t]),B=void 0!==t,U=(0,n.useMemo)(()=>B?(0,a.i)(e):null,[e,B]),_=(0,n.useMemo)(()=>"string"==typeof U?.asyncapi?U.asyncapi:"",[U]),D=(0,n.useMemo)(()=>{if(!B)return r??{};let e=function(e,r,t){if(c.version=t,c.configs=e,r){let t=e.map(e=>e.prefixStartsWith).filter(Boolean);c.rootFields=t.length?function(e,r){let t={};for(let[a,n]of Object.entries(e))!g.has(a)&&a.startsWith("x-")&&r.some(e=>a.startsWith(e))&&(t[a]=n);return t}(r,t):{}}else c.rootFields={};let a={};for(let t of e){for(let[e,r]of Object.entries(t.extensions??{}))a[e]=v(e,r,t);if(t.prefixStartsWith&&r)for(let e of function(e,r){let t=new Set,a=e=>{if(e&&"object"==typeof e)for(let a of Object.keys(e))a.startsWith(r)&&t.add(a)};a(e),a(e.info);let n=e.channels;if(n)for(let e of Object.values(n)){if(!e||"object"!=typeof e)continue;for(let r of(a(e),["subscribe","publish","send","receive"])){let t=e[r];t&&"object"==typeof t&&(a(t),a(t.message))}let r=e.messages;if(r)for(let e of Object.values(r))a(e)}let o=e.operations;if(o)for(let e of Object.values(o))a(e);let i=e.components;if(i){for(let e of["messages","messageTraits"]){let r=i[e];if(r)for(let e of Object.values(r))a(e)}let e=i.schemas;if(e)for(let r of Object.values(e))a(r);let r=i.channels;if(r)for(let e of Object.values(r))a(e);let t=i.operations;if(t)for(let e of Object.values(t))a(e)}return[...t]}(r,t.prefixStartsWith))a[e]||(a[e]=v(e,void 0,t))}return a}(L,U,_);return{...r,extensions:{...e,...r?.extensions??{}}}},[r,B,L,U,_]),E=(0,n.useMemo)(()=>B?function(e){function r(r){let t=Object.entries(c.rootFields);if(!t.length)return null;let a=t.flatMap(([r,t])=>{let a=c.configs.find(e=>e.extensions?.[r])??c.configs.find(e=>e.prefixStartsWith&&r.startsWith(e.prefixStartsWith))??e[0];if(!a)return[];let o=a.extensions?.[r];return[(0,n.createElement)(v(r,o,a),{key:r,propertyName:r,propertyValue:t,document:void 0,parent:void 0})]});return a.length?(0,n.createElement)("div",null,...a):null}return{name:"sap-root-extensions",version:"1.0.0",install(e){e.registerComponent(l.WN.INFO,r)}}}(L):null,[B,L]),I=`[data-renderer-id="${M}"]`,T=`${I} { container: asyncapi-attrs / inline-size; height: 100%; overflow: auto; scrollbar-gutter: stable; }
${I} :where(h1,h2,h3,h4,p,span,strong,a,li,td,div):not(pre *) { overflow-wrap: anywhere; }`;return(0,i.jsxs)("div",{"data-renderer-id":M,className:o,children:[F&&(0,i.jsx)("style",{children:F}),B&&(0,i.jsx)("style",{children:j}),(0,i.jsx)("style",{children:T}),B&&(0,i.jsx)("style",{children:`[data-renderer-id="${M}"] #introduction .hidden { display: block !important; }`}),!B&&(0,i.jsx)("style",{children:`[data-renderer-id="${M}"] :is(#operations, #messages) div:has(> .flex.py-2 span.Extensions) { display: none; }`}),(0,i.jsx)(s,{schema:e,config:D,plugins:E?[E]:[]})]})}}}]);