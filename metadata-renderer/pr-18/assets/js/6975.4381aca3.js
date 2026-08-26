(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["6975"],{22365(e){function r(e){return Promise.resolve().then(function(){var r=Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r})}r.keys=()=>[],r.resolve=r,r.id=22365,e.exports=r},73950(e,r,a){"use strict";a.d(r,{n:()=>h,t:()=>M});var t=a(92810),s=a(96540),o=a(30897),l=a(29152),i=a(74848),n=a(98207),c={version:"",configs:[],getDocumentationUrl(e){return(this.configs.find(r=>r.extensions?.[e])??this.configs.find(r=>r.prefixStartsWith&&e.startsWith(r.prefixStartsWith)))?.documentationUrl?.(e,{version:this.version})}},p=["get","put","post","delete","options","head","patch","trace"],d="x-sap-schema-attrs";function h({attributeName:e}){let r=c.getDocumentationUrl(e);return r?(0,i.jsx)("a",{href:r,style:{marginLeft:4},target:"_blank",rel:"noreferrer",title:"View in OpenAPI Specification",children:(0,i.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",children:(0,i.jsx)("path",{d:"M10.604 1h4.146a.25.25 0 01.25.25v4.146a.25.25 0 01-.427.177L13.03 4.03 9.28 7.78a.75.75 0 01-1.06-1.06l3.75-3.75-1.543-1.543A.25.25 0 0110.604 1zM3.75 2A1.75 1.75 0 002 3.75v8.5c0 .966.784 1.75 1.75 1.75h8.5A1.75 1.75 0 0014 12.25v-3.5a.75.75 0 00-1.5 0v3.5a.25.25 0 01-.25.25h-8.5a.25.25 0 01-.25-.25v-8.5a.25.25 0 01.25-.25h3.5a.75.75 0 000-1.5h-3.5z"})})}):null}function u({name:e,label:r}){return(0,i.jsxs)("div",{className:"sap-api-label",children:[r," ",(0,i.jsx)(h,{attributeName:e})]})}function f(e){let r=e.valueLinks?.[e.value];return(0,i.jsxs)("div",{className:"sap-api-container",children:[(0,i.jsx)(u,{name:e.name,label:e.label}),(0,i.jsx)("p",{className:"sap-api-value",children:r?(0,i.jsx)("a",{href:r,rel:"noreferrer noopener",target:"_blank",className:"sap-api-link",children:e.value}):e.value})]})}function b(e){return(0,i.jsxs)("div",{className:"sap-api-container",children:[(0,i.jsx)(u,{name:e.name,label:e.label}),(0,i.jsx)("p",{className:"sap-api-value",children:e.value?"Yes":"No"})]})}function m(e){return(0,i.jsxs)("div",{className:"sap-api-container",children:[(0,i.jsx)(u,{name:e.name,label:e.label}),(0,i.jsx)("p",{className:"sap-api-value",children:e.value})]})}function j(e){return(0,i.jsxs)("div",{className:"sap-api-container",children:[(0,i.jsx)(u,{name:e.name,label:e.label}),(0,i.jsx)("div",{className:"sap-api-value",children:(0,i.jsx)("ul",{className:"sap-api-list",children:e.value.map((e,r)=>(0,i.jsx)("li",{children:v(e)},r))})})]})}function v(e){if(null==e)return(0,i.jsx)("span",{className:"sap-api-placeholder",children:"\u2014"});if("boolean"==typeof e)return(0,i.jsx)("span",{children:e?"Yes":"No"});if("number"==typeof e)return(0,i.jsx)("span",{children:e});if(Array.isArray(e))return(0,i.jsx)("ul",{className:"sap-api-list",children:e.map((e,r)=>(0,i.jsx)("li",{children:v(e)},r))});if("object"==typeof e)return(0,i.jsx)("dl",{className:"sap-api-obj",children:Object.entries(e).map(([e,r])=>(0,i.jsxs)("div",{className:"sap-api-obj-row",children:[(0,i.jsxs)("dt",{className:"sap-api-obj-key",children:[e,":"]})," ",(0,i.jsx)("dd",{className:"sap-api-obj-val",children:v(r)})]},e))});let r=String(e);return/[*_`[\]#]/.test(r)?(0,i.jsx)(l.oz,{children:r}):(0,i.jsx)("span",{children:r})}function g(e){return(0,i.jsxs)("div",{className:"sap-api-container",children:[(0,i.jsx)(u,{name:e.name,label:e.label}),(0,i.jsx)("div",{className:"sap-api-value",children:v(e.value)})]})}function x(e){let r=e.callback(e.value);return(0,i.jsxs)("div",{className:"sap-api-container",children:[(0,i.jsx)(u,{name:e.name,label:e.label}),(0,i.jsx)("p",{className:"sap-api-value",children:r?(0,i.jsx)("a",{href:r,rel:"noreferrer noopener",target:"_blank",className:"sap-api-link",children:String(e.value)}):String(e.value)})]})}function y(e,r,a){return r&&"component"in r?r.component:t=>{var s;let o,l=function(e,r){if(e&&"object"==typeof e)return e[r.replace(/-./g,e=>e[1].toUpperCase())]}(t,e);if(null==l)return null;let n=r&&"label"in r&&r.label?r.label:(s=a.prefixStartsWith,o=e,s&&o.startsWith(s)&&(o=o.slice(s.length)),o.split("-").filter(Boolean).map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(" "));if(r?.type==="link"&&"callback"in r)return(0,i.jsx)(x,{name:e,label:n,value:l,callback:r.callback});if(r?.type==="boolean"||"boolean"==typeof l)return(0,i.jsx)(b,{name:e,label:n,value:!!l});if(r?.type==="number"||"number"==typeof l)return(0,i.jsx)(m,{name:e,label:n,value:l});if(r?.type==="array"||Array.isArray(l))return Array.isArray(l)?(0,i.jsx)(j,{name:e,label:n,value:l}):null;if(r?.type==="object"||"object"==typeof l)return(0,i.jsx)(g,{name:e,label:n,value:l});let c=r&&"valueLinks"in r?r.valueLinks:void 0;return(0,i.jsx)(f,{name:e,label:n,value:String(l),valueLinks:c})}}var k={"--ord-background":["--scalar-background-1"],"--ord-foreground":["--scalar-color-1"],"--ord-secondary":["--scalar-background-2"],"--ord-secondary-foreground":["--scalar-color-2"],"--ord-muted":["--scalar-background-3"],"--ord-muted-foreground":["--scalar-color-3"],"--ord-primary":["--scalar-color-accent","--scalar-button-1","--scalar-link-color","--scalar-button-1-hover","--scalar-link-color-hover"],"--ord-primary-foreground":["--scalar-button-1-color"],"--ord-border":["--scalar-border-color"],"--ord-destructive":["--scalar-color-red","--scalar-color-danger"],"--ord-success":["--scalar-color-green"],"--ord-warning":["--scalar-color-orange"],"--ord-radius":["--scalar-radius","--scalar-radius-lg"]},w={"--ord-sidebar":["--scalar-sidebar-background-1"],"--ord-sidebar-foreground":["--scalar-sidebar-color-1"],"--ord-sidebar-primary":["--scalar-sidebar-background-2"],"--ord-sidebar-primary-foreground":["--scalar-sidebar-color-2","--scalar-sidebar-search-color"],"--ord-sidebar-accent":["--scalar-sidebar-item-active-background","--scalar-sidebar-item-hover-background","--scalar-sidebar-search-background"],"--ord-sidebar-accent-foreground":["--scalar-sidebar-color-active","--scalar-sidebar-item-hover-color"],"--ord-sidebar-border":["--scalar-sidebar-border-color","--scalar-sidebar-search-border-color"]};function O(e,r){return"--ord-radius"===e?`${r}px`:r}var N={selector:".scalar-app",map(e){let r={};for(let[a,t]of Object.entries(e)){let e=k[a];if(!e)continue;let s=O(a,t);for(let a of e)r[a]=s}return r}},S={selector:".scalar-app .t-doc__sidebar",map(e){let r={};for(let[a,t]of Object.entries(e)){let e=w[a];if(e)for(let a of e)r[a]=t}return r}},W={selector:".scalar-app .dark-mode, .scalar-app.dark-mode, .scalar-app .light-mode, .scalar-app.light-mode",map(e){let r={};for(let[a,t]of Object.entries(e)){let e=k[a];if(!e)continue;let s=O(a,t);for(let a of e)r[a]=s}return r}},$=["--ord-hljs-attr","--ord-hljs-string","--ord-hljs-number","--ord-hljs-function","--ord-hljs-literal","--ord-hljs-punctuation","--ord-hljs-keyword","--ord-hljs-comment"],A={selector:".scalar-app",map(e){let r={};for(let a of $)a in e&&(r[a]=e[a]);return r}},_={selector:".scalar-app, #headlessui-portal-root",map(e){let r={};for(let[a,t]of Object.entries(e)){let e=k[a];if(!e)continue;let s=O(a,t);for(let a of e)r[a]=s}return r}},C=`
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
`;function M({content:e,customAttributes:r,className:a,theme:l}){let h,u,f=(0,s.useId)(),b=(0,s.useRef)(null),m=a?.split(/\s+/).includes("dark")??!1,j=(0,s.useMemo)(()=>r??[],[r]),v=void 0!==r;(0,s.useEffect)(()=>{let e=b.current;if(!e)return;let r=new ResizeObserver(([r])=>{e.style.setProperty("--scalar-container-height",`${r.contentRect.height}px`)});return r.observe(e),()=>{r.disconnect(),window.location.hash&&history.replaceState(null,"",window.location.pathname+window.location.search)}},[]);let g=(0,s.useMemo)(()=>{if(!v)return"";let r=(0,t.i)(e);return r?j.flatMap(e=>(function(e,r){let a=[];for(let[t,s]of Object.entries(e))t.startsWith(r)&&a.push([t,s]);let t=e.paths;if(t){for(let[e,s]of Object.entries(t))if(s&&"object"==typeof s)for(let t of p){let o=s[t];if(o&&"object"==typeof o)for(let[s,l]of Object.entries(o))s.startsWith(r)&&a.push([`paths.${e}.${t}.${s}`,l])}}let s=e.components?.schemas;if(s)for(let[e,t]of Object.entries(s)){if(!t||"object"!=typeof t)continue;for(let[s,o]of Object.entries(t))s.startsWith(r)&&a.push([`components.schemas.${e}.${s}`,o]);let s=t.properties;if(s){for(let[t,o]of Object.entries(s))if(o&&"object"==typeof o)for(let[s,l]of Object.entries(o))s.startsWith(r)&&a.push([`components.schemas.${e}.properties.${t}.${s}`,l])}}return a})(r,e.prefixStartsWith??"").map(([e,r])=>`${e}=${JSON.stringify(r)}`)).join("|"):""},[e,v,j]),x=(0,s.useMemo)(()=>{let r;c.version=(r=(0,t.i)(e))?"openapi"in r&&r.openapi&&"string"==typeof r.openapi?r.openapi.substring(0,3):"swagger"in r&&r.swagger&&"string"==typeof r.swagger?"2.0":"":"",c.configs=v?j:[];let a=(0,t.i)(e),o=j.map(e=>e.prefixStartsWith).filter(Boolean);return{content:v&&a&&o.length?function(e,r){let a=e.components?.schemas;if(!a)return e;let t={},s=!1;for(let[e,o]of Object.entries(a)){if(!o||"object"!=typeof o){t[e]=o;continue}let a={};for(let[e,t]of Object.entries(o))r.some(r=>e.startsWith(r))&&(a[e]=t);if(0===Object.keys(a).length){t[e]=o;continue}s=!0,t[e]={...o,properties:{[d]:{[d]:a},...o.properties}}}return s?{...e,components:{...e.components,schemas:t}}:e}(a,o):a??e,plugins:v?[function(e,r){let a=new Set;for(let t of r){if(t.extensions)for(let e of Object.keys(t.extensions))a.add(e);if(t.prefixStartsWith&&e)for(let r of function(e,r){let a=new Set;for(let t of Object.keys(e))t.startsWith(r)&&a.add(t);let t=e.paths;if(t){for(let e of Object.values(t))if(e&&"object"==typeof e)for(let t of p){let s=e[t];if(s&&"object"==typeof s)for(let e of Object.keys(s))e.startsWith(r)&&a.add(e)}}let s=e.components?.schemas;if(s)for(let e of Object.values(s)){if(!e||"object"!=typeof e)continue;for(let t of Object.keys(e))t.startsWith(r)&&a.add(t);let t=e.properties;if(t){for(let e of Object.values(t))if(e&&"object"==typeof e)for(let t of Object.keys(e))t.startsWith(r)&&a.add(t)}}return[...a]}(e,t.prefixStartsWith))a.add(r)}let t=[...a].map(e=>{let a=r.find(r=>r.extensions?.[e])??r.find(r=>r.prefixStartsWith&&e.startsWith(r.prefixStartsWith))??r[0],t=a?.extensions?.[e];return{name:e,component:y(e,t,a??{}),renderer:n.N}});return t.push({name:d,component:e=>{if(!e||"object"!=typeof e)return null;let a=e.xSapSchemaAttrs??e["x-sap-schema-attrs"];if(!a||"object"!=typeof a)return null;let t=function(e){let r={};for(let[a,t]of Object.entries(e))r[a.replace(/-./g,e=>e[1].toUpperCase())]=t;return r}(a),o=[];for(let e of Object.keys(a)){if(!e.startsWith("x-"))continue;let a=r.find(r=>r.extensions?.[e])??r.find(r=>r.prefixStartsWith&&e.startsWith(r.prefixStartsWith));if(!a)continue;let s=a.extensions?.[e],l=y(e,s,a)(t);l&&o.push(l)}return 0===o.length?null:(0,s.createElement)("div",{className:"sap-schema-attrs-block"},...o)},renderer:n.N}),()=>({name:"custom-attributes-plugin",extensions:t})}(a,j)]:[],forceDarkModeState:m?"dark":"light",hideDarkModeToggle:!0,hideClientButton:!0,showDeveloperTools:"never"}},[e,m,v,j]);return(0,i.jsxs)("div",{ref:b,"data-renderer-id":f,style:{height:"100%",...l},children:[(0,i.jsx)("style",{children:C}),l&&(0,i.jsx)("style",{children:(h=`[data-renderer-id="${f}"]`,[[N,S,W,A].map(e=>{let r=Object.entries(e.map(l)).map(([e,r])=>`  ${e}: ${r};`).join("\n");return r?`${h} ${e.selector} {
${r}
}`:""}).filter(Boolean).join("\n\n"),!(u=Object.entries(_.map(l)).map(([e,r])=>`  ${e}: ${r};`).join("\n"))?"":`${_.selector} {
${u}
}`].filter(Boolean).join("\n\n"))}),(0,i.jsx)(o.B,{configuration:x},`${m?"dark":"light"}-${v}-${g}`)]})}},37494(e,r,a){"use strict";a.r(r),a.d(r,{OpenApiRenderer:()=>t.t});var t=a(73950)}}]);