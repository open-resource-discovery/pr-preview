(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["6975"],{22365(e){function r(e){return Promise.resolve().then(function(){var r=Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r})}r.keys=()=>[],r.resolve=r,r.id=22365,e.exports=r},1557(e,r,a){"use strict";a.d(r,{n:()=>h,t:()=>M});var t=a(50790),s=a(96540),o=a(74848),l=a(92354),i=a(92267),n=a(98207),c=["get","put","post","delete","options","head","patch","trace"],p="x-sap-schema-attrs",d=`
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
`,u={version:"",configs:[],getDocumentationUrl(e){return(this.configs.find(r=>r.extensions?.[e])??this.configs.find(r=>r.prefixStartsWith&&e.startsWith(r.prefixStartsWith)))?.documentationUrl?.(e,{version:this.version})}};function h({attributeName:e}){let r=u.getDocumentationUrl(e);return r?(0,o.jsx)("a",{href:r,style:{marginLeft:4},target:"_blank",rel:"noreferrer",title:"View in OpenAPI Specification",children:(0,o.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",children:(0,o.jsx)("path",{d:"M10.604 1h4.146a.25.25 0 01.25.25v4.146a.25.25 0 01-.427.177L13.03 4.03 9.28 7.78a.75.75 0 01-1.06-1.06l3.75-3.75-1.543-1.543A.25.25 0 0110.604 1zM3.75 2A1.75 1.75 0 002 3.75v8.5c0 .966.784 1.75 1.75 1.75h8.5A1.75 1.75 0 0014 12.25v-3.5a.75.75 0 00-1.5 0v3.5a.25.25 0 01-.25.25h-8.5a.25.25 0 01-.25-.25v-8.5a.25.25 0 01.25-.25h3.5a.75.75 0 000-1.5h-3.5z"})})}):null}function f({name:e,label:r}){return(0,o.jsxs)("div",{className:"sap-api-label",children:[r," ",(0,o.jsx)(h,{attributeName:e})]})}function b(e){let r=e.valueLinks?.[e.value];return(0,o.jsxs)("div",{className:"sap-api-container",children:[(0,o.jsx)(f,{name:e.name,label:e.label}),(0,o.jsx)("p",{className:"sap-api-value",children:r?(0,o.jsx)("a",{href:r,rel:"noreferrer noopener",target:"_blank",className:"sap-api-link",children:e.value}):e.value})]})}function m(e){return(0,o.jsxs)("div",{className:"sap-api-container",children:[(0,o.jsx)(f,{name:e.name,label:e.label}),(0,o.jsx)("p",{className:"sap-api-value",children:e.value?"Yes":"No"})]})}function j(e){return(0,o.jsxs)("div",{className:"sap-api-container",children:[(0,o.jsx)(f,{name:e.name,label:e.label}),(0,o.jsx)("p",{className:"sap-api-value",children:e.value})]})}function v(e){return(0,o.jsxs)("div",{className:"sap-api-container",children:[(0,o.jsx)(f,{name:e.name,label:e.label}),(0,o.jsx)("div",{className:"sap-api-value",children:(0,o.jsx)("ul",{className:"sap-api-list",children:e.value.map((e,r)=>(0,o.jsx)("li",{children:g(e)},r))})})]})}function g(e){if(null==e)return(0,o.jsx)("span",{className:"sap-api-placeholder",children:"\u2014"});if("boolean"==typeof e)return(0,o.jsx)("span",{children:e?"Yes":"No"});if("number"==typeof e)return(0,o.jsx)("span",{children:e});if(Array.isArray(e))return(0,o.jsx)("ul",{className:"sap-api-list",children:e.map((e,r)=>(0,o.jsx)("li",{children:g(e)},r))});if("object"==typeof e)return(0,o.jsx)("dl",{className:"sap-api-obj",children:Object.entries(e).map(([e,r])=>(0,o.jsxs)("div",{className:"sap-api-obj-row",children:[(0,o.jsxs)("dt",{className:"sap-api-obj-key",children:[e,":"]})," ",(0,o.jsx)("dd",{className:"sap-api-obj-val",children:g(r)})]},e))});let r=String(e);return/[*_`[\]#]/.test(r)?(0,o.jsx)(l.oz,{children:r}):(0,o.jsx)("span",{children:r})}function x(e){return(0,o.jsxs)("div",{className:"sap-api-container",children:[(0,o.jsx)(f,{name:e.name,label:e.label}),(0,o.jsx)("div",{className:"sap-api-value",children:g(e.value)})]})}function y(e){let r=e.callback(e.value);return(0,o.jsxs)("div",{className:"sap-api-container",children:[(0,o.jsx)(f,{name:e.name,label:e.label}),(0,o.jsx)("p",{className:"sap-api-value",children:r?(0,o.jsx)("a",{href:r,rel:"noreferrer noopener",target:"_blank",className:"sap-api-link",children:String(e.value)}):String(e.value)})]})}function k(e,r,a){return r&&"component"in r?r.component:t=>{var s;let l,i=function(e,r){if(e&&"object"==typeof e)return e[r.replace(/-./g,e=>e[1].toUpperCase())]}(t,e);if(null==i)return null;let n=r&&"label"in r&&r.label?r.label:(s=a.prefixStartsWith,l=e,s&&l.startsWith(s)&&(l=l.slice(s.length)),l.split("-").filter(Boolean).map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(" "));if(r?.type==="link"&&"callback"in r)return(0,o.jsx)(y,{name:e,label:n,value:i,callback:r.callback});if(r?.type==="boolean"||"boolean"==typeof i)return(0,o.jsx)(m,{name:e,label:n,value:!!i});if(r?.type==="number"||"number"==typeof i)return(0,o.jsx)(j,{name:e,label:n,value:i});if(r?.type==="array"||Array.isArray(i))return Array.isArray(i)?(0,o.jsx)(v,{name:e,label:n,value:i}):null;if(r?.type==="object"||"object"==typeof i)return(0,o.jsx)(x,{name:e,label:n,value:i});let c=r&&"valueLinks"in r?r.valueLinks:void 0;return(0,o.jsx)(b,{name:e,label:n,value:String(i),valueLinks:c})}}var w={"--ord-background":["--scalar-background-1"],"--ord-foreground":["--scalar-color-1"],"--ord-secondary":["--scalar-background-2"],"--ord-secondary-foreground":["--scalar-color-2"],"--ord-muted":["--scalar-background-3"],"--ord-muted-foreground":["--scalar-color-3"],"--ord-primary":["--scalar-color-accent","--scalar-button-1","--scalar-link-color","--scalar-button-1-hover","--scalar-link-color-hover"],"--ord-primary-foreground":["--scalar-button-1-color"],"--ord-border":["--scalar-border-color"],"--ord-destructive":["--scalar-color-red","--scalar-color-danger"],"--ord-success":["--scalar-color-green"],"--ord-warning":["--scalar-color-orange"],"--ord-radius":["--scalar-radius","--scalar-radius-lg"]},O={"--ord-sidebar":["--scalar-sidebar-background-1"],"--ord-sidebar-foreground":["--scalar-sidebar-color-1"],"--ord-sidebar-primary":["--scalar-sidebar-background-2"],"--ord-sidebar-primary-foreground":["--scalar-sidebar-color-2","--scalar-sidebar-search-color"],"--ord-sidebar-accent":["--scalar-sidebar-item-active-background","--scalar-sidebar-item-hover-background","--scalar-sidebar-search-background"],"--ord-sidebar-accent-foreground":["--scalar-sidebar-color-active","--scalar-sidebar-item-hover-color"],"--ord-sidebar-border":["--scalar-sidebar-border-color","--scalar-sidebar-search-border-color"]};function N(e,r){return"--ord-radius"===e?`${r}px`:r}var S={selector:".scalar-app",map(e){let r={};for(let[a,t]of Object.entries(e)){let e=w[a];if(!e)continue;let s=N(a,t);for(let a of e)r[a]=s}return r}},_={selector:".scalar-app .t-doc__sidebar",map(e){let r={};for(let[a,t]of Object.entries(e)){let e=O[a];if(e)for(let a of e)r[a]=t}return r}},W={selector:".scalar-app .dark-mode, .scalar-app.dark-mode, .scalar-app .light-mode, .scalar-app.light-mode",map(e){let r={};for(let[a,t]of Object.entries(e)){let e=w[a];if(!e)continue;let s=N(a,t);for(let a of e)r[a]=s}return r}},$=["--ord-hljs-attr","--ord-hljs-string","--ord-hljs-number","--ord-hljs-function","--ord-hljs-literal","--ord-hljs-punctuation","--ord-hljs-keyword","--ord-hljs-comment"],A={selector:".scalar-app",map(e){let r={};for(let a of $)a in e&&(r[a]=e[a]);return r}},E={selector:".scalar-app, #headlessui-portal-root",map(e){let r={};for(let[a,t]of Object.entries(e)){let e=w[a];if(!e)continue;let s=N(a,t);for(let a of e)r[a]=s}return r}},D=globalThis;function M({content:e,customAttributes:r,className:a,theme:l}){let h,f,b=(0,s.useId)(),m=(0,s.useRef)(null),j=(0,s.useRef)(null),v=(0,s.useRef)(null),g=a?.split(/\s+/).includes("dark")??!1,x=(0,s.useMemo)(()=>r??[],[r]),y=void 0!==r;(0,s.useEffect)(()=>{let e=m.current;if(!e)return;let r=function(e){for(let r=e.parentElement;r&&r!==document.body;r=r.parentElement)if(/^(auto|scroll|overlay|hidden)$/.test(getComputedStyle(r).overflowY))return r;return null}(e),a=()=>{var a;let t=(a=e.clientHeight,Math.min(a,r?.clientHeight??null??1/0,window.innerHeight));e.style.setProperty("--scalar-container-height",`${t}px`)},t=new ResizeObserver(a);return t.observe(e),r&&t.observe(r),window.addEventListener("resize",a),()=>{t.disconnect(),window.removeEventListener("resize",a),window.location.hash&&history.replaceState(null,"",window.location.pathname+window.location.search),document.body.classList.remove("light-mode","dark-mode")}},[]);let w=(0,s.useMemo)(()=>{if(!y)return"";let r=(0,t.i)(e);return r?x.flatMap(e=>(function(e,r){let a=[];for(let[t,s]of Object.entries(e))t.startsWith(r)&&a.push([t,s]);let t=e.paths;if(t){for(let[e,s]of Object.entries(t))if(s&&"object"==typeof s)for(let t of c){let o=s[t];if(o&&"object"==typeof o)for(let[s,l]of Object.entries(o))s.startsWith(r)&&a.push([`paths.${e}.${t}.${s}`,l])}}let s=e.components?.schemas;if(s)for(let[e,t]of Object.entries(s)){if(!t||"object"!=typeof t)continue;for(let[s,o]of Object.entries(t))s.startsWith(r)&&a.push([`components.schemas.${e}.${s}`,o]);let s=t.properties;if(s){for(let[t,o]of Object.entries(s))if(o&&"object"==typeof o)for(let[s,l]of Object.entries(o))s.startsWith(r)&&a.push([`components.schemas.${e}.properties.${t}.${s}`,l])}}return a})(r,e.prefixStartsWith??"").map(([e,r])=>`${e}=${JSON.stringify(r)}`)).join("|"):""},[e,y,x]),O=(0,s.useMemo)(()=>{let r;u.version=(r=(0,t.i)(e))?"openapi"in r&&r.openapi&&"string"==typeof r.openapi?r.openapi.substring(0,3):"swagger"in r&&r.swagger&&"string"==typeof r.swagger?"2.0":"":"",u.configs=y?x:[];let a=(0,t.i)(e),o=x.map(e=>e.prefixStartsWith).filter(Boolean);return{content:y&&a&&o.length?function(e,r){let a=e.components?.schemas;if(!a)return e;let t={},s=!1;for(let[e,o]of Object.entries(a)){if(!o||"object"!=typeof o){t[e]=o;continue}let a={};for(let[e,t]of Object.entries(o))r.some(r=>e.startsWith(r))&&(a[e]=t);if(0===Object.keys(a).length){t[e]=o;continue}s=!0,t[e]={...o,properties:{[p]:{[p]:a},...o.properties}}}return s?{...e,components:{...e.components,schemas:t}}:e}(a,o):a??e,plugins:y?[function(e,r){let a=new Set;for(let t of r){if(t.extensions)for(let e of Object.keys(t.extensions))a.add(e);if(t.prefixStartsWith&&e)for(let r of function(e,r){let a=new Set;for(let t of Object.keys(e))t.startsWith(r)&&a.add(t);let t=e.paths;if(t){for(let e of Object.values(t))if(e&&"object"==typeof e)for(let t of c){let s=e[t];if(s&&"object"==typeof s)for(let e of Object.keys(s))e.startsWith(r)&&a.add(e)}}let s=e.components?.schemas;if(s)for(let e of Object.values(s)){if(!e||"object"!=typeof e)continue;for(let t of Object.keys(e))t.startsWith(r)&&a.add(t);let t=e.properties;if(t){for(let e of Object.values(t))if(e&&"object"==typeof e)for(let t of Object.keys(e))t.startsWith(r)&&a.add(t)}}return[...a]}(e,t.prefixStartsWith))a.add(r)}let t=[...a].map(e=>{let a=r.find(r=>r.extensions?.[e])??r.find(r=>r.prefixStartsWith&&e.startsWith(r.prefixStartsWith))??r[0],t=a?.extensions?.[e];return{name:e,component:k(e,t,a??{}),renderer:n.N}});return t.push({name:p,component:e=>{if(!e||"object"!=typeof e)return null;let a=e.xSapSchemaAttrs??e["x-sap-schema-attrs"];if(!a||"object"!=typeof a)return null;let t=function(e){let r={};for(let[a,t]of Object.entries(e))r[a.replace(/-./g,e=>e[1].toUpperCase())]=t;return r}(a),o=[];for(let e of Object.keys(a)){if(!e.startsWith("x-"))continue;let a=r.find(r=>r.extensions?.[e])??r.find(r=>r.prefixStartsWith&&e.startsWith(r.prefixStartsWith));if(!a)continue;let s=a.extensions?.[e],l=k(e,s,a)(t);l&&o.push(l)}return 0===o.length?null:(0,s.createElement)("div",{className:"sap-schema-attrs-block"},...o)},renderer:n.N}),()=>({name:"custom-attributes-plugin",extensions:t})}(a,x)]:[],forceDarkModeState:g?"dark":"light",hideDarkModeToggle:!0,hideClientButton:!0,showDeveloperTools:"never"}},[e,g,y,x]);return(0,s.useEffect)(()=>{let e=j.current;if(!e)return;let r=document.createElement("div");r.style.height="100%",e.appendChild(r);let a=(0,i.g1)(r,{_integration:"react",...O});return v.current=a,()=>{v.current=null,queueMicrotask(()=>{a.destroy(),r.remove()})}},[g,y,w]),(0,s.useEffect)(()=>{v.current?.updateConfiguration({_integration:"react",...O})},[O]),(0,o.jsxs)("div",{ref:m,"data-renderer-id":b,style:{height:"100%",...l},children:[(0,o.jsx)("style",{children:d}),l&&(0,o.jsx)("style",{children:(h=`[data-renderer-id="${b}"]`,[[S,_,W,A].map(e=>{let r=Object.entries(e.map(l)).map(([e,r])=>`  ${e}: ${r};`).join("\n");return r?`${h} ${e.selector} {
${r}
}`:""}).filter(Boolean).join("\n\n"),!(f=Object.entries(E.map(l)).map(([e,r])=>`  ${e}: ${r};`).join("\n"))?"":`${E.selector} {
${f}
}`].filter(Boolean).join("\n\n"))}),(0,o.jsx)("div",{ref:j})]})}D.__VUE_OPTIONS_API__=!0,D.__VUE_PROD_HYDRATION_MISMATCH_DETAILS__=!0,D.__VUE_PROD_DEVTOOLS__=!1},37494(e,r,a){"use strict";a.r(r),a.d(r,{OpenApiRenderer:()=>t.t});var t=a(1557)}}]);