(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["6975"],{22365(e){function a(e){return Promise.resolve().then(function(){var a=Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a})}a.keys=()=>[],a.resolve=a,a.id=22365,e.exports=a},74810(e,a,r){"use strict";r.d(a,{n:()=>T,t:()=>B});var t=r(12965),s=r(96540),i=r(30897),l=r(29152),o=r(74848),n=r(98207),c={version:"",configs:[],getDocumentationUrl(e){return(this.configs.find(a=>a.extensions?.[e])??this.configs.find(a=>a.prefixStartsWith&&e.startsWith(a.prefixStartsWith)))?.documentationUrl?.(e,{version:this.version})}},p=["get","put","post","delete","options","head","patch","trace"],d="x-sap-schema-attrs";function u({attributeName:e}){let a=c.getDocumentationUrl(e);return a?(0,o.jsx)("a",{href:a,style:{marginLeft:4},target:"_blank",rel:"noreferrer",title:"View in OpenAPI Specification",children:(0,o.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",children:(0,o.jsx)("path",{d:"M10.604 1h4.146a.25.25 0 01.25.25v4.146a.25.25 0 01-.427.177L13.03 4.03 9.28 7.78a.75.75 0 01-1.06-1.06l3.75-3.75-1.543-1.543A.25.25 0 0110.604 1zM3.75 2A1.75 1.75 0 002 3.75v8.5c0 .966.784 1.75 1.75 1.75h8.5A1.75 1.75 0 0014 12.25v-3.5a.75.75 0 00-1.5 0v3.5a.25.25 0 01-.25.25h-8.5a.25.25 0 01-.25-.25v-8.5a.25.25 0 01.25-.25h3.5a.75.75 0 000-1.5h-3.5z"})})}):null}function h({name:e,label:a}){return(0,o.jsxs)("div",{className:"sap-api-label",children:[a," ",(0,o.jsx)(u,{attributeName:e})]})}function f(e){let a=e.valueLinks?.[e.value];return(0,o.jsxs)("div",{className:"sap-api-container",children:[(0,o.jsx)(h,{name:e.name,label:e.label}),(0,o.jsx)("p",{className:"sap-api-value",children:a?(0,o.jsx)("a",{href:a,rel:"noreferrer noopener",target:"_blank",className:"sap-api-link",children:e.value}):e.value})]})}function b(e){return(0,o.jsxs)("div",{className:"sap-api-container",children:[(0,o.jsx)(h,{name:e.name,label:e.label}),(0,o.jsx)("p",{className:"sap-api-value",children:e.value?"Yes":"No"})]})}function m(e){return(0,o.jsxs)("div",{className:"sap-api-container",children:[(0,o.jsx)(h,{name:e.name,label:e.label}),(0,o.jsx)("p",{className:"sap-api-value",children:e.value})]})}function x(e){return(0,o.jsxs)("div",{className:"sap-api-container",children:[(0,o.jsx)(h,{name:e.name,label:e.label}),(0,o.jsx)("div",{className:"sap-api-value",children:(0,o.jsx)("ul",{className:"sap-api-list",children:e.value.map((e,a)=>(0,o.jsx)("li",{children:v(e)},a))})})]})}function v(e){if(null==e)return(0,o.jsx)("span",{className:"sap-api-placeholder",children:"\u2014"});if("boolean"==typeof e)return(0,o.jsx)("span",{children:e?"Yes":"No"});if("number"==typeof e)return(0,o.jsx)("span",{children:e});if(Array.isArray(e))return(0,o.jsx)("ul",{className:"sap-api-list",children:e.map((e,a)=>(0,o.jsx)("li",{children:v(e)},a))});if("object"==typeof e)return(0,o.jsx)("dl",{className:"sap-api-obj",children:Object.entries(e).map(([e,a])=>(0,o.jsxs)("div",{className:"sap-api-obj-row",children:[(0,o.jsxs)("dt",{className:"sap-api-obj-key",children:[e,":"]})," ",(0,o.jsx)("dd",{className:"sap-api-obj-val",children:v(a)})]},e))});let a=String(e);return/[*_`[\]#]/.test(a)?(0,o.jsx)(l.oz,{children:a}):(0,o.jsx)("span",{children:a})}function j(e){return(0,o.jsxs)("div",{className:"sap-api-container",children:[(0,o.jsx)(h,{name:e.name,label:e.label}),(0,o.jsx)("div",{className:"sap-api-value",children:v(e.value)})]})}function g(e){let a=e.callback(e.value);return(0,o.jsxs)("div",{className:"sap-api-container",children:[(0,o.jsx)(h,{name:e.name,label:e.label}),(0,o.jsx)("p",{className:"sap-api-value",children:a?(0,o.jsx)("a",{href:a,rel:"noreferrer noopener",target:"_blank",className:"sap-api-link",children:String(e.value)}):String(e.value)})]})}function y(e,a,r){return a&&"component"in a?a.component:t=>{var s;let i,l=function(e,a){if(e&&"object"==typeof e)return e[a.replace(/-./g,e=>e[1].toUpperCase())]}(t,e);if(null==l)return null;let n=a&&"label"in a&&a.label?a.label:(s=r.prefixStartsWith,i=e,s&&i.startsWith(s)&&(i=i.slice(s.length)),i.split("-").filter(Boolean).map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(" "));if(a?.type==="link"&&"callback"in a)return(0,o.jsx)(g,{name:e,label:n,value:l,callback:a.callback});if(a?.type==="boolean"||"boolean"==typeof l)return(0,o.jsx)(b,{name:e,label:n,value:!!l});if(a?.type==="number"||"number"==typeof l)return(0,o.jsx)(m,{name:e,label:n,value:l});if(a?.type==="array"||Array.isArray(l))return Array.isArray(l)?(0,o.jsx)(x,{name:e,label:n,value:l}):null;if(a?.type==="object"||"object"==typeof l)return(0,o.jsx)(j,{name:e,label:n,value:l});let c=a&&"valueLinks"in a?a.valueLinks:void 0;return(0,o.jsx)(f,{name:e,label:n,value:String(l),valueLinks:c})}}var k={"--ord-background":["--scalar-background-1"],"--ord-foreground":["--scalar-color-1"],"--ord-secondary":["--scalar-background-2"],"--ord-secondary-foreground":["--scalar-color-2"],"--ord-muted":["--scalar-background-3"],"--ord-muted-foreground":["--scalar-color-3"],"--ord-primary":["--scalar-color-accent","--scalar-button-1","--scalar-link-color","--scalar-button-1-hover","--scalar-link-color-hover"],"--ord-primary-foreground":["--scalar-button-1-color"],"--ord-border":["--scalar-border-color"],"--ord-destructive":["--scalar-color-red","--scalar-color-danger"],"--ord-success":["--scalar-color-green"],"--ord-warning":["--scalar-color-orange"],"--ord-radius":["--scalar-radius","--scalar-radius-lg"]},w={"--ord-sidebar":["--scalar-sidebar-background-1"],"--ord-sidebar-foreground":["--scalar-sidebar-color-1"],"--ord-sidebar-primary":["--scalar-sidebar-background-2"],"--ord-sidebar-primary-foreground":["--scalar-sidebar-color-2","--scalar-sidebar-search-color"],"--ord-sidebar-accent":["--scalar-sidebar-item-active-background","--scalar-sidebar-item-hover-background","--scalar-sidebar-search-background"],"--ord-sidebar-accent-foreground":["--scalar-sidebar-color-active","--scalar-sidebar-item-hover-color"],"--ord-sidebar-border":["--scalar-sidebar-border-color","--scalar-sidebar-search-border-color"]};function S(e,a){return"--ord-radius"===e?`${a}px`:a}var N={selector:".scalar-app",map(e){let a={};for(let[r,t]of Object.entries(e)){let e=k[r];if(!e)continue;let s=S(r,t);for(let r of e)a[r]=s}return a}},O={selector:".scalar-app .t-doc__sidebar",map(e){let a={};for(let[r,t]of Object.entries(e)){let e=w[r];if(e)for(let r of e)a[r]=t}return a}},D={selector:".scalar-app .dark-mode, .scalar-app.dark-mode, .scalar-app .light-mode, .scalar-app.light-mode",map(e){let a={};for(let[r,t]of Object.entries(e)){let e=k[r];if(!e)continue;let s=S(r,t);for(let r of e)a[r]=s}return a}},A=["--ord-hljs-attr","--ord-hljs-string","--ord-hljs-number","--ord-hljs-function","--ord-hljs-literal","--ord-hljs-punctuation","--ord-hljs-keyword","--ord-hljs-comment"],P={selector:".scalar-app",map(e){let a={};for(let r of A)r in e&&(a[r]=e[r]);return a}},W={selector:".scalar-app, #headlessui-portal-root",map(e){let a={};for(let[r,t]of Object.entries(e)){let e=k[r];if(!e)continue;let s=S(r,t);for(let r of e)a[r]=s}return a}},E={ACTIVE:"color-mix(in srgb, var(--scalar-color-green) 15%, transparent)",BETA:"color-mix(in srgb, var(--scalar-color-blue) 15%, transparent)",DEPRECATED:"color-mix(in srgb, var(--scalar-color-orange) 15%, transparent)",DECOMMISSIONED:"color-mix(in srgb, var(--scalar-color-red) 15%, transparent)"},$={ACTIVE:"var(--scalar-color-green)",BETA:"var(--scalar-color-blue)",DEPRECATED:"var(--scalar-color-orange)",DECOMMISSIONED:"var(--scalar-color-red)"};function I(){return(0,o.jsxs)("svg",{viewBox:"0 0 24 24",width:"1em",height:"1em",fill:"none",stroke:"currentColor",strokeWidth:"2","aria-hidden":"true",children:[(0,o.jsx)("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2"}),(0,o.jsx)("path",{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"})]})}function C(){return(0,o.jsx)("svg",{viewBox:"0 0 24 24",width:"1em",height:"1em",fill:"none",stroke:"currentColor",strokeWidth:"2","aria-hidden":"true",children:(0,o.jsx)("path",{d:"M20 6 9 17l-5-5"})})}function M(e){return{component:e}}var T={prefixStartsWith:"x-sap-",documentationUrl:(e,{version:a})=>`https://github.com/SAP/openapi-specification/tree/main/sap-schemas/v${a}#${e}`,extensions:{"x-sap-compliance-level":{type:"link",label:"SAP Compliance Level",callback:e=>({"sap:base:v1":"https://github.com/open-resource-discovery/specification/blob/main/docs/spec-extensions/policy-levels/sap-base-v1.md","sap:core:v1":"https://github.com/open-resource-discovery/specification/blob/main/docs/spec-extensions/policy-levels/sap-core-v1.md","sap:core:v2":"https://github.com/open-resource-discovery/specification/blob/main/docs/spec-extensions/policy-levels/sap-core-v1.md"})[String(e)]},"x-sap-shortText":{type:"string",label:"SAP Short Text"},"x-sap-software-min-version":{type:"string",label:"SAP Software Version"},"x-sap-api-type":{type:"string",label:"SAP API Type"},"x-sap-direction":{type:"string",label:"SAP Direction"},"x-sap-ord-id":M(function({xSapOrdId:e}){let[a,r]=(0,s.useState)(!1);return e?(0,o.jsxs)("div",{className:"sap-api-container",children:[(0,o.jsxs)("div",{className:"sap-api-label",children:["ORD ID ",(0,o.jsx)(u,{attributeName:"x-sap-ord-id"})]}),(0,o.jsxs)("div",{className:"sap-api-value sap-api-ord-id",children:[(0,o.jsx)("span",{className:"sap-api-ord-id-text",children:e}),(0,o.jsx)("button",{type:"button",className:"sap-api-copy-btn",onClick:()=>{navigator.clipboard?.writeText(e).then(()=>{r(!0),setTimeout(()=>r(!1),1500)})},"aria-label":"Copy ORD ID",title:a?"Copied":"Copy",children:a?(0,o.jsx)(C,{}):(0,o.jsx)(I,{})})]})]}):null}),"x-sap-operation-intent":{type:"string",label:"SAP Operation Intent"},"x-sap-odm-oid":{type:"string",label:"ODM OID"},"x-sap-odm-oid-reference-entity-name":{type:"string",label:"ODM OID Reference Entity Name"},"x-sap-precision":{type:"number",label:"SAP Precision"},"x-sap-scale":{type:"number",label:"SAP Scale"},"x-sap-root-entity":{type:"boolean",label:"SAP Root Entity"},"x-sap-dpp-entity-semantics":{type:"string",label:"SAP DPP: Entity Semantics"},"x-sap-dpp-data-subject-role":{type:"string",label:"SAP DPP: Data Subject Role"},"x-sap-dpp-data-subject-role-description":{type:"string",label:"SAP DPP: Data Subject Role Description"},"x-sap-dpp-field-semantics":{type:"string",label:"SAP DPP: Field Semantics"},"x-sap-dpp-is-potentially-personal":{type:"boolean",label:"SAP DPP: Potentially Personal"},"x-sap-dpp-is-potentially-sensitive":{type:"boolean",label:"SAP DPP: Potentially Sensitive"},"x-sap-ext-overview":M(function(e){if(!("object"==typeof e&&null!==e&&"xSapExtOverview"in e&&Array.isArray(e.xSapExtOverview)&&e.xSapExtOverview.every(e=>"object"==typeof e&&null!==e&&"name"in e&&"values"in e&&"string"==typeof e.name&&("string"==typeof e.values||!!Array.isArray(e.values)&&(!!e.values.every(e=>"string"==typeof e)||e.values.every(e=>"object"==typeof e&&null!==e&&"text"in e&&"string"==typeof e.text&&"format"in e&&("plain"===e.format||"markdown"===e.format)))))))return null;let{xSapExtOverview:a}=e;return(0,o.jsxs)("div",{className:"sap-api-container",children:[(0,o.jsxs)("div",{className:"sap-api-label sap-api-label--root",children:["SAP Extensibility Overview ",(0,o.jsx)(u,{attributeName:"x-sap-ext-overview"})]}),(0,o.jsx)("div",{className:"sap-api-value sap-api-value--root",children:a.map(e=>(0,o.jsxs)("div",{children:[(0,o.jsx)("strong",{children:e.name}),(0,o.jsx)("ul",{className:"sap-api-list",children:"string"==typeof e.values?(0,o.jsx)("li",{children:e.values}):e.values.map(e=>"string"==typeof e?(0,o.jsx)("li",{children:e},e):(0,o.jsx)("li",{children:"plain"===e.format?e.text:(0,o.jsx)(l.oz,{children:e.text})},e.text))})]},e.name))})]})}),"x-sap-stateInfo":M(function({xSapStateInfo:e}){if(!e)return null;let a=e.state?.toUpperCase(),r=(0,o.jsx)("span",{style:{display:"inline-block",borderRadius:"10px",padding:"0 6px",background:E[a]||"",color:$[a]||""},children:a}),t=new Intl.DateTimeFormat("en-GB",{dateStyle:"long"}),s=e=>{let a=new Date(e);return isNaN(a.getTime())?e:t.format(a)};return(0,o.jsxs)("div",{className:"sap-api-container",children:[(0,o.jsxs)("div",{className:"sap-api-label",children:["API State ",(0,o.jsx)(u,{attributeName:"x-sap-stateInfo"})]}),(0,o.jsxs)("div",{className:"sap-api-value",children:[r,e.deprecationDate&&(0,o.jsxs)("div",{children:["Deprecated on ",s(e.deprecationDate)]}),e.decommissionedDate&&(0,o.jsxs)("div",{children:["Decommissioned on ",s(e.decommissionedDate)]}),e.successorApi&&(0,o.jsxs)("div",{children:["Successor API: ",(0,o.jsx)("a",{href:e.successorApi,target:"_blank",rel:"noreferrer",className:"sap-api-link",children:e.successorApi})]})]})]})}),"x-sap-extensible":{type:"object",label:"SAP Extensible"},"x-sap-deprecated-operation":M(function({xSapDeprecatedOperation:e}){let a=new Intl.DateTimeFormat("en-GB",{dateStyle:"long"}).format(new Date(e.deprecationDate));return(0,o.jsxs)("div",{className:"sap-api-container",children:[(0,o.jsxs)("div",{className:"sap-api-label",children:["SAP Deprecated Operation ",(0,o.jsx)(u,{attributeName:"x-sap-deprecated-operation"})]}),(0,o.jsxs)("div",{className:"sap-api-value",children:["Deprecated on ",a," ",(0,o.jsx)("br",{}),e.successorOperationRef||e.successorOperationId?(0,o.jsxs)(o.Fragment,{children:[" Successor ",e.successorOperationRef?(0,o.jsx)("a",{href:e.successorOperationRef,rel:"noreferrer, noopener",children:e.successorOperationRef}):null,e.successorOperationId?(0,o.jsx)("span",{children:e.successorOperationId}):null]}):null]})]})}),"x-sap-odm-entity-name":M(function({xSapOdmEntityName:e}){return(0,o.jsxs)("div",{className:"sap-api-container",children:[(0,o.jsxs)("div",{className:"sap-api-label",children:["ODM entity name ",(0,o.jsx)(u,{attributeName:"x-sap-odm-entity-name"})]}),(0,o.jsx)("div",{className:"sap-api-value",children:e})]})}),"x-sap-odm-semantic-key":M(function({xSapOdmSemanticKey:e}){return(0,o.jsxs)("div",{className:"sap-api-container",children:[(0,o.jsxs)("div",{className:"sap-api-label",children:["ODM Semantic Key ",(0,o.jsx)(u,{attributeName:"x-sap-odm-semantic-key"})]}),(0,o.jsx)("div",{className:"sap-api-value",children:e.map(e=>(0,o.jsxs)("div",{children:[(0,o.jsx)("strong",{children:e.name}),(0,o.jsx)("ul",{className:"sap-api-list",children:e.values.map(e=>(0,o.jsx)("li",{children:e},e))})]},e.name))})]})})}},R=`
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
`;function B({content:e,showCustomAttributes:a=!0,customAttributes:r,className:l,theme:u}){let h,f,b=(0,s.useId)(),m=(0,s.useRef)(null),x=l?.split(/\s+/).includes("dark")??!1,v=r??[T];(0,s.useEffect)(()=>{let e=m.current;if(!e)return;let a=new ResizeObserver(([a])=>{e.style.setProperty("--scalar-container-height",`${a.contentRect.height}px`)});return a.observe(e),()=>{a.disconnect(),window.location.hash&&history.replaceState(null,"",window.location.pathname+window.location.search)}},[]);let j=(0,s.useMemo)(()=>{if(!a)return"";let r=(0,t.i)(e);return r?v.flatMap(e=>(function(e,a){let r=[];for(let[t,s]of Object.entries(e))t.startsWith(a)&&r.push([t,s]);let t=e.paths;if(t){for(let[e,s]of Object.entries(t))if(s&&"object"==typeof s)for(let t of p){let i=s[t];if(i&&"object"==typeof i)for(let[s,l]of Object.entries(i))s.startsWith(a)&&r.push([`paths.${e}.${t}.${s}`,l])}}let s=e.components?.schemas;if(s)for(let[e,t]of Object.entries(s)){if(!t||"object"!=typeof t)continue;for(let[s,i]of Object.entries(t))s.startsWith(a)&&r.push([`components.schemas.${e}.${s}`,i]);let s=t.properties;if(s){for(let[t,i]of Object.entries(s))if(i&&"object"==typeof i)for(let[s,l]of Object.entries(i))s.startsWith(a)&&r.push([`components.schemas.${e}.properties.${t}.${s}`,l])}}return r})(r,e.prefixStartsWith??"").map(([e,a])=>`${e}=${JSON.stringify(a)}`)).join("|"):""},[e,a,v]),g=(0,s.useMemo)(()=>{let r;c.version=(r=(0,t.i)(e))?"openapi"in r&&r.openapi&&"string"==typeof r.openapi?r.openapi.substring(0,3):"swagger"in r&&r.swagger&&"string"==typeof r.swagger?"2.0":"":"",c.configs=a?v:[];let i=(0,t.i)(e),l=v.map(e=>e.prefixStartsWith).filter(Boolean);return{content:a&&i&&l.length?function(e,a){let r=e.components?.schemas;if(!r)return e;let t={},s=!1;for(let[e,i]of Object.entries(r)){if(!i||"object"!=typeof i){t[e]=i;continue}let r={};for(let[e,t]of Object.entries(i))a.some(a=>e.startsWith(a))&&(r[e]=t);if(0===Object.keys(r).length){t[e]=i;continue}s=!0,t[e]={...i,properties:{[d]:{[d]:r},...i.properties}}}return s?{...e,components:{...e.components,schemas:t}}:e}(i,l):i??e,plugins:a?[function(e,a){let r=new Set;for(let t of a){if(t.extensions)for(let e of Object.keys(t.extensions))r.add(e);if(t.prefixStartsWith&&e)for(let a of function(e,a){let r=new Set;for(let t of Object.keys(e))t.startsWith(a)&&r.add(t);let t=e.paths;if(t){for(let e of Object.values(t))if(e&&"object"==typeof e)for(let t of p){let s=e[t];if(s&&"object"==typeof s)for(let e of Object.keys(s))e.startsWith(a)&&r.add(e)}}let s=e.components?.schemas;if(s)for(let e of Object.values(s)){if(!e||"object"!=typeof e)continue;for(let t of Object.keys(e))t.startsWith(a)&&r.add(t);let t=e.properties;if(t){for(let e of Object.values(t))if(e&&"object"==typeof e)for(let t of Object.keys(e))t.startsWith(a)&&r.add(t)}}return[...r]}(e,t.prefixStartsWith))r.add(a)}let t=[...r].map(e=>{let r=a.find(a=>a.extensions?.[e])??a.find(a=>a.prefixStartsWith&&e.startsWith(a.prefixStartsWith))??a[0],t=r?.extensions?.[e];return{name:e,component:y(e,t,r??{}),renderer:n.N}});return t.push({name:d,component:e=>{if(!e||"object"!=typeof e)return null;let r=e.xSapSchemaAttrs??e["x-sap-schema-attrs"];if(!r||"object"!=typeof r)return null;let t=function(e){let a={};for(let[r,t]of Object.entries(e))a[r.replace(/-./g,e=>e[1].toUpperCase())]=t;return a}(r),i=[];for(let e of Object.keys(r)){if(!e.startsWith("x-"))continue;let r=a.find(a=>a.extensions?.[e])??a.find(a=>a.prefixStartsWith&&e.startsWith(a.prefixStartsWith));if(!r)continue;let s=r.extensions?.[e],l=y(e,s,r)(t);l&&i.push(l)}return 0===i.length?null:(0,s.createElement)("div",{className:"sap-schema-attrs-block"},...i)},renderer:n.N}),()=>({name:"custom-attributes-plugin",extensions:t})}(i,v)]:[],forceDarkModeState:x?"dark":"light",hideDarkModeToggle:!0,hideClientButton:!0,showDeveloperTools:"never"}},[e,x,a,v]);return(0,o.jsxs)("div",{ref:m,"data-renderer-id":b,style:{height:"100%",...u},children:[(0,o.jsx)("style",{children:R}),u&&(0,o.jsx)("style",{children:(h=`[data-renderer-id="${b}"]`,[[N,O,D,P].map(e=>{let a=Object.entries(e.map(u)).map(([e,a])=>`  ${e}: ${a};`).join("\n");return a?`${h} ${e.selector} {
${a}
}`:""}).filter(Boolean).join("\n\n"),!(f=Object.entries(W.map(u)).map(([e,a])=>`  ${e}: ${a};`).join("\n"))?"":`${W.selector} {
${f}
}`].filter(Boolean).join("\n\n"))}),(0,o.jsx)(i.B,{configuration:g},`${x?"dark":"light"}-${a}-${j}`)]})}},37494(e,a,r){"use strict";r.r(a),r.d(a,{OpenApiRenderer:()=>t.t});var t=r(74810)}}]);