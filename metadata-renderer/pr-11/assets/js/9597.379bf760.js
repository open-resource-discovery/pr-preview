"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["9597"],{22604(e,t,r){r.r(t),r.d(t,{AsyncApiRenderer:()=>a.t});var a=r(65749)},65749(e,t,r){r.d(t,{n:()=>$,t:()=>A});var a=r(12965),n=r(96540),s=r(29152),i=r(74848),o=r(13406),l=r(85096),c={version:"",configs:[],rootFields:{},getDocumentationUrl(e){return(this.configs.find(t=>t.extensions?.[e])??this.configs.find(t=>t.prefixStartsWith&&e.startsWith(t.prefixStartsWith)))?.documentationUrl?.(e,{version:this.version})}};function p({attributeName:e}){let t=c.getDocumentationUrl(e);return t?(0,i.jsx)("a",{href:t,style:{marginLeft:4,marginTop:4},target:"_blank",rel:"noreferrer",title:"View in AsyncAPI Specification",children:(0,i.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",children:(0,i.jsx)("path",{d:"M10.604 1h4.146a.25.25 0 01.25.25v4.146a.25.25 0 01-.427.177L13.03 4.03 9.28 7.78a.75.75 0 01-1.06-1.06l3.75-3.75-1.543-1.543A.25.25 0 0110.604 1zM3.75 2A1.75 1.75 0 002 3.75v8.5c0 .966.784 1.75 1.75 1.75h8.5A1.75 1.75 0 0014 12.25v-3.5a.75.75 0 00-1.5 0v3.5a.25.25 0 01-.25.25h-8.5a.25.25 0 01-.25-.25v-8.5a.25.25 0 01.25-.25h3.5a.75.75 0 000-1.5h-3.5z"})})}):null}function d({name:e,label:t}){return(0,i.jsxs)("div",{className:"asyncapi-attr-label",children:[t," ",(0,i.jsx)(p,{attributeName:e})]})}function u(e){if(null==e)return(0,i.jsx)("span",{className:"asyncapi-attr-placeholder",children:"\u2014"});if("boolean"==typeof e)return(0,i.jsx)("span",{children:e?"Yes":"No"});if("number"==typeof e)return(0,i.jsx)("span",{children:e});if(Array.isArray(e))return(0,i.jsx)("ul",{className:"asyncapi-attr-list",children:e.map((e,t)=>(0,i.jsx)("li",{children:u(e)},t))});if("object"==typeof e)return(0,i.jsx)("dl",{className:"asyncapi-attr-obj",children:Object.entries(e).map(([e,t])=>(0,i.jsxs)("div",{className:"asyncapi-attr-obj-row",children:[(0,i.jsxs)("dt",{className:"asyncapi-attr-obj-key",children:[e,":"]})," ",(0,i.jsx)("dd",{className:"asyncapi-attr-obj-val",children:u(t)})]},e))});let t=String(e);return/[*_`[\]#]/.test(t)?(0,i.jsx)(s.oz,{children:t}):(0,i.jsx)("span",{children:t})}function f(e){let t=e.valueLinks?.[e.value];return(0,i.jsxs)("div",{className:"asyncapi-attr-row",children:[(0,i.jsx)(d,{name:e.name,label:e.label}),(0,i.jsx)("p",{className:"asyncapi-attr-value",children:t?(0,i.jsx)("a",{href:t,rel:"noreferrer noopener",target:"_blank",className:"asyncapi-attr-link",children:e.value}):e.value})]})}function b(e){return(0,i.jsxs)("div",{className:"asyncapi-attr-row",children:[(0,i.jsx)(d,{name:e.name,label:e.label}),(0,i.jsx)("p",{className:"asyncapi-attr-value",children:e.value?"Yes":"No"})]})}function m(e){return(0,i.jsxs)("div",{className:"asyncapi-attr-row",children:[(0,i.jsx)(d,{name:e.name,label:e.label}),(0,i.jsx)("p",{className:"asyncapi-attr-value",children:e.value})]})}function h(e){return(0,i.jsxs)("div",{className:"asyncapi-attr-row",children:[(0,i.jsx)(d,{name:e.name,label:e.label}),(0,i.jsx)("div",{className:"asyncapi-attr-value",children:(0,i.jsx)("ul",{className:"asyncapi-attr-list",children:e.value.map((e,t)=>(0,i.jsx)("li",{children:u(e)},t))})})]})}function x(e){return(0,i.jsxs)("div",{className:"asyncapi-attr-row",children:[(0,i.jsx)(d,{name:e.name,label:e.label}),(0,i.jsx)("div",{className:"asyncapi-attr-value",children:u(e.value)})]})}function y(e){let t=e.callback(e.value);return(0,i.jsxs)("div",{className:"asyncapi-attr-row",children:[(0,i.jsx)(d,{name:e.name,label:e.label}),(0,i.jsx)("p",{className:"asyncapi-attr-value",children:t?(0,i.jsx)("a",{href:t,rel:"noreferrer noopener",target:"_blank",className:"asyncapi-attr-link",children:String(e.value)}):String(e.value)})]})}function g(e,t,r){return t&&"component"in t?t.component:function({propertyValue:a}){var n;let s;if(null==a)return null;let o=t&&"label"in t&&t.label?t.label:(n=r.prefixStartsWith,s=e,n&&s.startsWith(n)&&(s=s.slice(n.length)),s.replace(/([a-z])([A-Z])/g,"$1-$2").split("-").filter(Boolean).map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(" "));if(t?.type==="link")return(0,i.jsx)(y,{name:e,label:o,value:a,callback:t.callback});if(t?.type==="boolean"||"boolean"==typeof a)return(0,i.jsx)(b,{name:e,label:o,value:!!a});if(t?.type==="number"||"number"==typeof a)return(0,i.jsx)(m,{name:e,label:o,value:a});if(t?.type==="array"||Array.isArray(a))return Array.isArray(a)?(0,i.jsx)(h,{name:e,label:o,value:a}):null;if(t?.type==="object"||"object"==typeof a)return(0,i.jsx)(x,{name:e,label:o,value:a});let l=t&&"valueLinks"in t?t.valueLinks:void 0;return(0,i.jsx)(f,{name:e,label:o,value:String(a),valueLinks:l})}}var v=new Set(["asyncapi","info","channels","operations","components","servers","tags","id","defaultContentType","externalDocs"]),j={ACTIVE:"color-mix(in srgb, #22c55e 15%, transparent)",BETA:"color-mix(in srgb, #3b82f6 15%, transparent)",DEPRECATED:"color-mix(in srgb, #f97316 15%, transparent)",DECOMMISSIONED:"color-mix(in srgb, #ef4444 15%, transparent)"},S={ACTIVE:"#16a34a",BETA:"#2563eb",DEPRECATED:"#ea580c",DECOMMISSIONED:"#dc2626"},$={prefixStartsWith:"x-sap-",documentationUrl:e=>`https://github.com/SAP/asyncapi-specification#${e}`,extensions:{"x-sap-catalog-spec-version":{type:"string",label:"SAP Catalog Spec Version"},"x-sap-application-namespace":{type:"string",label:"SAP Application Namespace"},"x-sap-ord-id":{type:"string",label:"ORD ID"},"x-sap-shortText":{type:"string",label:"SAP Short Text"},"x-sap-software-min-version":{type:"string",label:"SAP Software Version"},"x-sap-stateInfo":{component:function({propertyName:e,propertyValue:t}){if(!t||"object"!=typeof t)return null;let r=t.state?.toUpperCase(),a=(0,i.jsx)("span",{style:{display:"inline-block",borderRadius:"10px",padding:"0 6px",background:j[r]||"",color:S[r]||""},children:r}),n=new Intl.DateTimeFormat("en-GB",{dateStyle:"long"}),s=e=>{let t=new Date(e);return isNaN(t.getTime())?e:n.format(t)};return(0,i.jsxs)("div",{className:"asyncapi-attr-row",children:[(0,i.jsxs)("div",{className:"asyncapi-attr-label",children:["API State ",(0,i.jsx)(p,{attributeName:e})]}),(0,i.jsxs)("div",{className:"asyncapi-attr-value",children:[a,t.deprecationDate&&(0,i.jsxs)("div",{children:["Deprecated on ",s(t.deprecationDate)]}),t.decommissionedDate&&(0,i.jsxs)("div",{children:["Decommissioned on ",s(t.decommissionedDate)]}),t.link&&(0,i.jsxs)("div",{children:["More info: ",(0,i.jsx)("a",{href:t.link,target:"_blank",rel:"noreferrer",className:"asyncapi-attr-link",children:t.link})]})]})]})}},"x-sap-event-spec-version":{type:"string",label:"SAP Event Spec Version"},"x-sap-event-source":{type:"string",label:"SAP Event Source"},"x-sap-event-source-parameters":{type:"object",label:"SAP Event Source Parameters"},"x-sap-event-version":{type:"string",label:"SAP Event Version"},"x-sap-event-characteristics":{type:"object",label:"SAP Event Characteristics"},"x-sap-object-type":{type:"string",label:"SAP Object Type"},"x-sap-odm-version":{type:"string",label:"SAP ODM Version"},"x-sap-logical-odm-event-version":{type:"string",label:"SAP Logical ODM Event Version"},"x-sap-dpp-entity-semantics":{type:"string",label:"SAP DPP: Entity Semantics"},"x-sap-dpp-data-subject-role":{type:"string",label:"SAP DPP: Data Subject Role"},"x-sap-dpp-data-subject-role-description":{type:"string",label:"SAP DPP: Data Subject Role Description"},"x-sap-dpp-field-semantics":{type:"string",label:"SAP DPP: Field Semantics"},"x-sap-dpp-is-potentially-personal":{type:"boolean",label:"SAP DPP: Potentially Personal"},"x-sap-dpp-is-potentially-sensitive":{type:"boolean",label:"SAP DPP: Potentially Sensitive"}}},w=`
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
`,k={"--ord-background":"#1e1e1e","--ord-foreground":"#d4d4d4","--ord-card":"#252526","--ord-primary":"#0098ff","--ord-primary-foreground":"#1e1e1e","--ord-muted":"#2d2d30","--ord-muted-foreground":"#969696","--ord-border":"#3e3e42"};function A({content:e,config:t,showCustomAttributes:r=!0,customAttributes:s,className:p,theme:d}){let u,f,b,m,h,x,y,j,S,P,N,D,E,O,W=(0,n.useId)(),C=p?.split(/\s+/).includes("dark")??!1,M=d??(C?k:null),T=M?(u=M["--ord-background"],f=M["--ord-foreground"],b=M["--ord-secondary"],m=M["--ord-secondary-foreground"],h=M["--ord-muted"],x=M["--ord-muted-foreground"],y=M["--ord-border"],j=M["--ord-primary"],S=M["--ord-primary-foreground"],P=M["--ord-accent"],N=M["--ord-accent-foreground"],D=M["--ord-radius"],E=[],O=`[data-renderer-id="${W}"]`,u&&E.push(`${O} .bg-white { background-color: ${u} !important; }`),f&&E.push(`${O} {color: ${f}; }`),P&&N&&E.push(`${O} .bg-blue-100 { color: ${N}; background-color: ${P}; }`),b&&E.push(`${O} .bg-gray-100 { background-color: ${b} !important; }`),m&&E.push(`${O} .prose, ${O} .text-gray-700 { color: ${m}; }`),h&&E.push(`${O} .bg-gray-200 { background-color: ${h} !important; }`),x&&E.push(`${O} .text-gray-500, ${O} .text-gray-600 { color: ${x} !important; }`),j&&E.push(`${O} .bg-gray-800 { background-color: ${j} !important; }`,`${O} .bg-blue-100 .text-purple-700 { color: ${j}; }`),S&&E.push(`${O} .text-white { color: ${S} !important; }`),b&&E.push(`${O} .bg-gray-400 { background-color: ${b} !important; }`),N&&E.push(`${O} .text-gray-200, ${O} .examples .text-gray-600 { color: ${N} !important; } `),f&&E.push(`${O} .text-gray-800, ${O} .text-gray-900 { color: ${f} !important; }`),y&&E.push(`${O} .border { border-color: ${y}; }`,`${O} .border-b { border-bottom-color: ${y}; }`,`${O} .border-gray-400 { border-color: ${y} !important; }`),D&&E.push(`${O} .rounded, ${O} .prose pre, ${O} .\\32 xl\\:rounded { border-radius: ${D}px; }`,`${O} .rounded:not(.inline-block) { overflow: hidden; }`,`${O} .rounded-tl-none { border-top-left-radius: 0px; }`,`${O} .examples { border-radius: 0px !important; }`),E.join("\n")):null,I=s??[$],V=(0,n.useMemo)(()=>r?(0,a.i)(e):null,[e,r]),B=(0,n.useMemo)(()=>"string"==typeof V?.asyncapi?V.asyncapi:"",[V]),F=(0,n.useMemo)(()=>{if(!r)return t??{};let e=function(e,t,r){if(c.version=r,c.configs=e,t){let r=e.map(e=>e.prefixStartsWith).filter(Boolean);c.rootFields=r.length?function(e,t){let r={};for(let[a,n]of Object.entries(e))!v.has(a)&&a.startsWith("x-")&&t.some(e=>a.startsWith(e))&&(r[a]=n);return r}(t,r):{}}else c.rootFields={};let a={};for(let r of e){for(let[e,t]of Object.entries(r.extensions??{}))a[e]=g(e,t,r);if(r.prefixStartsWith&&t)for(let e of function(e,t){let r=new Set,a=e=>{if(e&&"object"==typeof e)for(let a of Object.keys(e))a.startsWith(t)&&r.add(a)};a(e),a(e.info);let n=e.channels;if(n)for(let e of Object.values(n)){if(!e||"object"!=typeof e)continue;for(let t of(a(e),["subscribe","publish","send","receive"])){let r=e[t];r&&"object"==typeof r&&(a(r),a(r.message))}let t=e.messages;if(t)for(let e of Object.values(t))a(e)}let s=e.operations;if(s)for(let e of Object.values(s))a(e);let i=e.components;if(i){for(let e of["messages","messageTraits"]){let t=i[e];if(t)for(let e of Object.values(t))a(e)}let e=i.schemas;if(e)for(let t of Object.values(e))a(t);let t=i.channels;if(t)for(let e of Object.values(t))a(e);let r=i.operations;if(r)for(let e of Object.values(r))a(e)}return[...r]}(t,r.prefixStartsWith))a[e]||(a[e]=g(e,void 0,r))}return a}(I,V,B);return{...t,extensions:{...e,...t?.extensions??{}}}},[t,r,I,V,B]),R=(0,n.useMemo)(()=>r?function(e){function t(t){let r=Object.entries(c.rootFields);if(!r.length)return null;let a=r.flatMap(([t,r])=>{let a=c.configs.find(e=>e.extensions?.[t])??c.configs.find(e=>e.prefixStartsWith&&t.startsWith(e.prefixStartsWith))??e[0];if(!a)return[];let s=a.extensions?.[t];return[(0,n.createElement)(g(t,s,a),{key:t,propertyName:t,propertyValue:r,document:void 0,parent:void 0})]});return a.length?(0,n.createElement)("div",null,...a):null}return{name:"sap-root-extensions",version:"1.0.0",install(e){e.registerComponent(l.WN.INFO,t)}}}(I):null,[r,I]),z=`[data-renderer-id="${W}"]`,L=`${z} { container: asyncapi-attrs / inline-size; height: 100%; overflow: auto; scrollbar-gutter: stable; }
${z} :where(h1,h2,h3,h4,p,span,strong,a,li,td,div):not(pre *) { overflow-wrap: anywhere; }`;return(0,i.jsxs)("div",{"data-renderer-id":W,className:p,children:[T&&(0,i.jsx)("style",{children:T}),r&&(0,i.jsx)("style",{children:w}),(0,i.jsx)("style",{children:L}),r&&(0,i.jsx)("style",{children:`[data-renderer-id="${W}"] #introduction .hidden { display: block !important; }`}),(0,i.jsx)(o,{schema:e,config:F,plugins:R?[R]:[]})]})}}}]);