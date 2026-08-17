"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["4979"],{54190(e,r,a){a.d(r,{r:()=>E,n:()=>ep,s:()=>b});var o=a(96540),t=a(73386),i=a(69308),n=a(74848),l=a(34312);let s=(0,l.A)("search",[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]]),d=(0,l.A)("download",[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]]);var c=a(56755),p=a(98842),v=a(78797);let u=(0,l.A)("target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]),h=(0,l.A)("chevrons-down-up",[["path",{d:"m7 20 5-5 5 5",key:"13a0gw"}],["path",{d:"m7 4 5 5 5-5",key:"1kwcof"}]]),y=(0,l.A)("chevrons-up-down",[["path",{d:"m7 15 5 5 5-5",key:"1hf1tw"}],["path",{d:"m7 9 5-5 5 5",key:"sgt6xg"}]]);var m=e=>{let r,a=new Set,o=(e,o)=>{let t="function"==typeof e?e(r):e;if(!Object.is(t,r)){let e=r;r=(null!=o?o:"object"!=typeof t||null===t)?t:Object.assign({},r,t),a.forEach(a=>a(r,e))}},t=()=>r,i={setState:o,getState:t,getInitialState:()=>n,subscribe:e=>(a.add(e),()=>a.delete(e))},n=r=e(o,t,i);return i},x=e=>{let r=e?m(e):m,a=e=>(function(e,r=e=>e){let a=o.useSyncExternalStore(e.subscribe,o.useCallback(()=>r(e.getState()),[e,r]),o.useCallback(()=>r(e.getInitialState()),[e,r]));return o.useDebugValue(a),a})(r,e);return Object.assign(a,r),a},f=e=>e?x(e):x,g={rawJson:"",parsedOverlay:null,lastValidOverlay:null,parseError:null,isDirty:!1,setRawJson:()=>{},reset:()=>{}},b=f(e=>({...g,setRawJson:r=>{let{overlay:a,error:o}=function(e){if(!e.trim())return{overlay:null,error:null};try{let r=function(e){let r;if(e){if("{"===e.charAt(0))try{r=JSON.parse(e)}catch(e){console.error(e);return}else try{r=(0,t.parse)(e)}catch(e){console.error(e);return}if(r&&"object"==typeof r)return r}}(e);if(!r)return{overlay:null,error:"Invalid JSON or YAML"};if("string"!=typeof r.ordOverlay)return{overlay:null,error:"Document is missing the required `ordOverlay` field."};return{overlay:r,error:null}}catch(e){return{overlay:null,error:e instanceof Error?e.message:"Invalid overlay document"}}}(r);e(e=>({rawJson:r,parsedOverlay:a,parseError:o,isDirty:!0,lastValidOverlay:a??e.lastValidOverlay}))},reset:()=>e({rawJson:"",parsedOverlay:null,lastValidOverlay:null,parseError:null,isDirty:!1})})),w=e=>e.parsedOverlay,j=e=>e.parseError,k="ord-ui-theme";function N(){return"u"<typeof window||"function"!=typeof window.matchMedia?"light":window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}function C(e){return"system"===e?N():e}var O=function(){if("u"<typeof window)return"system";try{let e=window.localStorage?.getItem(k);return"light"===e||"dark"===e||"system"===e?e:"system"}catch{return"system"}}(),z=f(e=>({theme:O,resolvedTheme:C(O),setTheme:r=>{let a=C(r);if("u">typeof window)try{window.localStorage?.setItem(k,r)}catch{}e({theme:r,resolvedTheme:a})}}));function E(){return{theme:z(e=>e.theme),resolvedTheme:z(e=>e.resolvedTheme),setTheme:z(e=>e.setTheme)}}"u">typeof window&&"function"==typeof window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",()=>{let{theme:e}=z.getState();"system"===e&&z.setState({resolvedTheme:N()})});var S={kind:"overview"},T={kind:"target"},M=e=>({kind:"patch",index:e});function I(e){switch(e.kind){case"overview":return"overview";case"target":return"target";case"patch":return`patch-${e.index}`}}function R(e){if("overview"===e)return S;if("target"===e)return T;let r=/^patch-(\d+)$/.exec(e);if(r)return M(Number(r[1]))}function D(e,r){return e.kind===r.kind&&("patch"!==e.kind||"patch"!==r.kind||e.index===r.index)}function L({sidebar:e,toolbar:r,children:a}){return(0,n.jsxs)("div",{className:"overlay-shell",children:[e,(0,n.jsxs)("div",{className:"overlay-main",children:[r,(0,n.jsx)("main",{className:"overlay-main-content",children:a})]})]})}function J(e){if(e.root)return{kind:"root",value:"whole document"};if(e.jsonPath)return{kind:"jsonPath",value:e.jsonPath};if(e.operation&&e.parameter)return{kind:"parameter",value:e.parameter,context:`in operation ${e.operation}`};if(e.operation&&e.returnType)return{kind:"returnType",value:"return type",context:`of operation ${e.operation}`};if(e.operation)return{kind:"operation",value:e.operation};if(e.propertyType){let r=e.entityType??e.complexType??e.enumType??"?";return{kind:"propertyType",value:e.propertyType,context:`on ${r}`}}return e.entityType?{kind:"entityType",value:e.entityType}:e.complexType?{kind:"complexType",value:e.complexType}:e.enumType?{kind:"enumType",value:e.enumType}:e.entitySet?{kind:"entitySet",value:e.entitySet}:e.namespace?{kind:"namespace",value:e.namespace}:{kind:"unknown",value:JSON.stringify(e)}}function P(e){switch(e){case"update":return"default";case"merge":return"success";case"remove":return"destructive"}}function $(e){switch(e){case"public":return"success";case"internal":return"warning";case"private":return"destructive"}}function A(e){let r=document.getElementById(I(e));return!!r&&(r.scrollIntoView({behavior:"smooth",block:"start"}),!0)}var V="u">typeof navigator&&/Mac|iPad|iPhone|iPod/.test(navigator.platform),B=V?"\u2318 K":"^ K";function Z(e,r){if(!r)return e;let a=e.toLowerCase().indexOf(r.toLowerCase());if(-1===a)return e;let o=a+r.length;return(0,n.jsxs)(n.Fragment,{children:[e.slice(0,a),(0,n.jsx)("mark",{className:"overlay-sidebar-hit",children:e.slice(a,o)}),e.slice(o)]})}function U(e,r){return!r||e.primary.toLowerCase().includes(r)||e.secondary?.toLowerCase().includes(r)===!0||e.action?.includes(r)===!0}function H({overlay:e,activeSection:r,onSectionChange:a}){var t,l;let d,{meta:c,patches:p}=(0,o.useMemo)(()=>{let r;return r=[{section:S,primary:"Overview"}],e.target&&r.push({section:T,primary:"Target"}),{meta:r,patches:(e.patches??[]).map((e,r)=>{let a=J(e.selector);return{section:M(r),primary:a.value,secondary:a.kind,action:e.action}})}},[e]),[v,u]=(0,o.useState)(""),h=(0,o.useRef)(null);t=(0,o.useCallback)(()=>u(""),[]),(0,o.useEffect)(()=>{let e=e=>{if((V?e.metaKey:e.ctrlKey)&&("k"===e.key||"K"===e.key)){e.preventDefault(),h.current?.focus(),h.current?.select();return}"Escape"===e.key&&document.activeElement===h.current&&(t(),h.current?.blur())};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},[h,t]),l=(0,o.useMemo)(()=>[...c,...p].map(e=>I(e.section)),[c,p]),d=(0,o.useRef)(r),(0,o.useEffect)(()=>{d.current=r},[r]),(0,o.useEffect)(()=>{let e=l.map(e=>document.getElementById(e)).filter(e=>null!==e);if(0===e.length)return;let r=new IntersectionObserver(e=>{let r=e.filter(e=>e.isIntersecting).sort((e,r)=>e.boundingClientRect.top-r.boundingClientRect.top)[0];if(!r)return;let o=R(r.target.id);o&&!D(o,d.current)&&a(o)},{rootMargin:"-20% 0px -60% 0px",threshold:0});return e.forEach(e=>r.observe(e)),()=>r.disconnect()},[l,a]),(0,o.useEffect)(()=>{if("u"<typeof window)return;let e=`#${I(r)}`;window.location.hash!==e&&history.replaceState(null,"",e)},[r]);let y=v.trim().toLowerCase(),m=c.filter(e=>U(e,y)),x=p.filter(e=>U(e,y)),f=""!==y&&0===m.length&&0===x.length,g=(0,o.useCallback)(e=>r=>{A(e)&&(r.preventDefault(),a(e))},[a]);return(0,n.jsx)("aside",{className:"overlay-sidebar",children:(0,n.jsxs)("div",{className:"overlay-sidebar-inner",children:[(0,n.jsx)("div",{className:"overlay-sidebar-header",children:(0,n.jsxs)("div",{className:"overlay-sidebar-search",children:[(0,n.jsx)(s,{size:14,"aria-hidden":!0,className:"overlay-sidebar-search-icon"}),(0,n.jsx)(i.pd,{ref:h,type:"search",placeholder:"Search",value:v,onChange:e=>u(e.target.value),className:"overlay-sidebar-search-input","aria-label":"Search overlay"}),(0,n.jsx)("kbd",{className:"overlay-sidebar-kbd",children:B})]})}),(0,n.jsxs)("nav",{"aria-label":"Overlay navigation",className:"overlay-sidebar-nav",children:[m.length>0?(0,n.jsx)("ul",{className:"overlay-sidebar-list",children:m.map(e=>(0,n.jsx)(q,{entry:e,isActive:D(e.section,r),query:v,onClick:g(e.section),plain:!0},I(e.section)))}):null,x.length>0?(0,n.jsxs)("div",{className:"overlay-sidebar-group",children:[(0,n.jsx)("p",{className:"overlay-sidebar-group-title",children:"Patches"}),(0,n.jsx)("ul",{className:"overlay-sidebar-list",children:x.map(e=>(0,n.jsx)(q,{entry:e,isActive:D(e.section,r),query:v,onClick:g(e.section)},I(e.section)))})]}):null,f?(0,n.jsxs)("div",{className:"overlay-sidebar-empty",children:["No matches for \u201C",v,"\u201D"]}):null]}),(0,n.jsxs)("footer",{className:"overlay-sidebar-footer",children:[(0,n.jsxs)("span",{children:["ORD Overlay ",e.ordOverlay]}),(0,n.jsx)("span",{"aria-hidden":!0,className:"overlay-sidebar-footer-spacer"}),(0,n.jsx)("a",{href:"https://open-resource-discovery.org",target:"_blank",rel:"noreferrer",children:"open-resource-discovery.org"})]})]})})}function q({entry:e,isActive:r,query:a,onClick:o,plain:t}){return(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:`#${I(e.section)}`,onClick:o,className:(0,i.cn)("overlay-sidebar-item",t&&"overlay-sidebar-item-plain",r&&"overlay-sidebar-item-active"),children:e.action?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("span",{className:(0,i.cn)("overlay-sidebar-method",`overlay-sidebar-method-${P(e.action)}`),children:e.action.toUpperCase()}),(0,n.jsx)("span",{className:"overlay-sidebar-item-label",children:Z(e.primary,a)})]}):Z(e.primary,a)})})}async function F(e){try{return await navigator.clipboard.writeText(e),!0}catch{return!1}}function K({overlay:e,rawContent:r,currentSectionLabel:a}){let[t,l]=(0,o.useState)(!1),s=(0,o.useMemo)(()=>(function(e){try{return JSON.stringify(JSON.parse(e),null,2)}catch{return e}})(r),[r]),u=async()=>{await F(r)&&(l(!0),setTimeout(()=>l(!1),1500))};return(0,n.jsxs)("header",{className:"overlay-toolbar",children:[(0,n.jsx)("div",{className:"overlay-toolbar-left",children:(0,n.jsx)("span",{className:"overlay-toolbar-section",title:a,children:a})}),(0,n.jsxs)("div",{className:"overlay-toolbar-actions",children:[(0,n.jsxs)(i.$n,{variant:"ghost",size:"sm",onClick:()=>{var r,a;let o,t,i;r=e.ordId,a=`${(r??"overlay").replace(/[^a-z0-9.-]+/gi,"-").replace(/^-+|-+$/g,"")}.overlay.json`,o=new Blob([s],{type:"application/json"}),t=URL.createObjectURL(o),(i=document.createElement("a")).href=t,i.download=a,document.body.appendChild(i),i.click(),i.remove(),URL.revokeObjectURL(t)},"aria-label":"Download overlay",children:[(0,n.jsx)(d,{size:14,"aria-hidden":!0}),(0,n.jsx)("span",{children:"Download"})]}),(0,n.jsxs)(i.$n,{variant:"ghost",size:"sm",onClick:u,"aria-label":"Copy raw overlay",children:[t?(0,n.jsx)(c.A,{size:14,"aria-hidden":!0}):(0,n.jsx)(p.A,{size:14,"aria-hidden":!0}),(0,n.jsx)("span",{children:t?"Copied":"Copy"})]}),(0,n.jsxs)("a",{href:"https://github.com/open-resource-discovery/specification/blob/main/spec/v1/OrdOverlay.schema.yaml",target:"_blank",rel:"noreferrer",className:"overlay-toolbar-link","aria-label":"Open ORD Overlay specification",children:[(0,n.jsx)("span",{children:"Spec"}),(0,n.jsx)(v.A,{size:12,"aria-hidden":!0})]})]})]})}function _({children:e}){return(0,n.jsx)("code",{className:"font-mono text-sm",children:e})}function Y({label:e,children:r}){return(0,n.jsxs)("div",{className:"overlay-target-row",children:[(0,n.jsx)("span",{className:"overlay-target-label",children:e}),(0,n.jsx)("span",{className:"overlay-target-value",children:r})]})}function G({overlay:e}){return(0,n.jsxs)(i.Zp,{children:[(0,n.jsxs)(i.Zp.Header,{children:[(0,n.jsx)(i.Zp.Title,{children:"Provenance"}),(0,n.jsx)(i.Zp.Description,{children:"How this overlay is identified and scoped."})]}),(0,n.jsx)(i.Zp.Content,{children:(0,n.jsxs)("dl",{className:"overlay-target-rows",children:[(0,n.jsx)(Y,{label:"Spec",children:(0,n.jsxs)(_,{children:["ORD Overlay ",e.ordOverlay]})}),e.visibility?(0,n.jsx)(Y,{label:"Visibility",children:(0,n.jsx)(i.Ex,{variant:$(e.visibility),size:"sm",className:"uppercase",children:e.visibility})}):null,e.perspective?(0,n.jsx)(Y,{label:"Perspective",children:(0,n.jsx)(_,{children:e.perspective})}):null]})})]})}function Q({overlay:e}){let r=e.ordId??"ORD Overlay";return(0,n.jsxs)("section",{id:"overview",className:"overlay-section overlay-hero",children:[(0,n.jsxs)("div",{children:[(0,n.jsxs)("div",{className:"overlay-hero-badges",children:[(0,n.jsxs)(i.Ex,{variant:"highlight",size:"sm",children:["v",e.ordOverlay]}),e.visibility?(0,n.jsx)(i.Ex,{variant:$(e.visibility),size:"sm",className:"uppercase",children:e.visibility}):null,e.perspective?(0,n.jsx)(i.Ex,{variant:"secondary",size:"sm",children:e.perspective}):null]}),(0,n.jsx)("h1",{className:"overlay-hero-title",children:r})]}),(0,n.jsxs)("div",{className:"overlay-hero-columns",children:[(0,n.jsx)("div",{className:"overlay-hero-main",children:e.description?(0,n.jsx)("div",{className:"overlay-hero-description",children:(0,n.jsx)(i.Rb,{text:e.description})}):null}),(0,n.jsx)("div",{className:"overlay-hero-side",children:(0,n.jsx)(G,{overlay:e})})]})]})}function W({target:e}){return e.ordId||e.url||e.definitionType||e.correlationIds?.length?(0,n.jsxs)("section",{id:"target",className:"overlay-section",children:[(0,n.jsx)("header",{className:"overlay-section-header",children:(0,n.jsxs)("div",{className:"overlay-section-header-left",children:[(0,n.jsx)(u,{size:18,"aria-hidden":!0}),(0,n.jsx)("h2",{className:"overlay-section-title",children:"Target"})]})}),(0,n.jsxs)(i.Zp,{className:"overlay-target-card",children:[(0,n.jsx)(i.Zp.Header,{children:(0,n.jsx)(i.Zp.Description,{children:"Identifies the resource or definition file this overlay patches."})}),(0,n.jsxs)(i.Zp.Content,{className:"overlay-target-rows",children:[e.ordId?(0,n.jsx)(Y,{label:"ORD ID",children:(0,n.jsx)(_,{children:e.ordId})}):null,e.definitionType?(0,n.jsx)(Y,{label:"Definition type",children:(0,n.jsx)(_,{children:e.definitionType})}):null,e.url?(0,n.jsx)(Y,{label:"URL",children:(0,n.jsxs)("a",{href:e.url,target:"_blank",rel:"noreferrer",className:"inline-flex items-center gap-1 text-primary hover:underline break-all",children:[(0,n.jsx)("span",{className:"font-mono text-sm",children:e.url}),(0,n.jsx)(v.A,{size:14,"aria-hidden":!0})]})}):null,e.correlationIds&&e.correlationIds.length>0?(0,n.jsx)(Y,{label:"Correlation IDs",children:(0,n.jsx)("span",{className:"flex flex-wrap gap-1",children:e.correlationIds.map(e=>(0,n.jsx)("code",{className:"font-mono text-xs bg-muted px-1.5 py-0.5 rounded",children:e},e))})}):null]})]})]}):null}function X({selector:e}){return(0,n.jsxs)("span",{className:"overlay-selector inline-flex items-center gap-2 min-w-0",children:[(0,n.jsx)(i.Ex,{variant:"outline",size:"sm",className:"overlay-selector-kind uppercase tracking-wide",children:e.kind}),(0,n.jsx)("code",{className:"overlay-selector-value font-mono text-sm text-foreground truncate",children:e.value}),e.context?(0,n.jsx)("span",{className:"overlay-selector-context text-xs text-muted-foreground truncate",children:e.context}):null]})}var ee=null,er={update:{label:"Replacement value",filename:"replacement.yaml"},merge:{label:"Merge payload",filename:"merge-payload.yaml"},remove:{label:"Removal mask",filename:"removal-mask.yaml"}};function ea({patch:e}){let r=function(){let[e,r]=(0,o.useState)();return(0,o.useEffect)(()=>{let e=!1;return(!ee&&(ee=Promise.all([a.e("5005"),a.e("3831")]).then(a.bind(a,79738)).then(({createHighlighter:e})=>e({themes:["github-light","github-dark"],langs:["yaml","json"]}))),ee).then(a=>{e||r(a)}),()=>{e=!0}},[]),e}(),{action:l,data:s}=e;if("remove"===l&&void 0===s)return(0,n.jsxs)("div",{className:"overlay-callout overlay-callout-destructive",children:["This patch ",(0,n.jsx)("strong",{children:"removes"})," the entire selected element."]});if(void 0===s)return null;let{label:d,filename:c}=er[l];return(0,n.jsxs)("section",{className:"overlay-field",children:[(0,n.jsxs)("header",{className:"overlay-field-header",children:[(0,n.jsx)("h4",{className:"overlay-field-label",children:d}),(0,n.jsx)(i.Ex,{variant:"remove"===l?"destructive":"outline",size:"sm",className:"uppercase",children:l})]}),(0,n.jsx)(i.NG,{code:function(e){try{return(0,t.stringify)(e)}catch{return JSON.stringify(e,null,2)}}(s),language:"yaml",filename:c,highlighter:r,lightTheme:"github-light",darkTheme:"github-dark",maxHeight:"320px"})]})}function eo({patch:e,index:r,defaultOpen:a}){let o=J(e.selector),t=e.action;return(0,n.jsx)("div",{id:`patch-${r}`,className:"overlay-patch-anchor",children:(0,n.jsxs)(i.iV.Root,{bordered:!0,defaultOpen:a,className:"overlay-patch",children:[(0,n.jsx)(i.iV.Trigger,{className:"overlay-patch-trigger",badges:(0,n.jsx)(i.Ex,{variant:P(t),className:"uppercase tracking-wide",children:t}),children:(0,n.jsxs)("span",{className:"overlay-patch-label",children:[(0,n.jsxs)("span",{className:"text-xs uppercase tracking-wide text-muted-foreground",children:["Patch #",r+1]}),(0,n.jsx)(X,{selector:o})]})}),(0,n.jsxs)(i.iV.Content,{className:"overlay-patch-body",children:[(0,n.jsxs)("div",{className:"overlay-patch-col overlay-patch-col-details",children:[e.description?(0,n.jsxs)("section",{className:"overlay-field",children:[(0,n.jsx)("h4",{className:"overlay-field-label",children:"Description"}),(0,n.jsx)(i.Rb,{text:e.description})]}):null,e.tags&&e.tags.length>0?(0,n.jsxs)("section",{className:"overlay-field overlay-tags",children:[(0,n.jsx)("h4",{className:"overlay-field-label",children:"Tags"}),(0,n.jsx)("div",{className:"flex flex-wrap gap-1.5",children:e.tags.map(e=>(0,n.jsx)(i.Ex,{variant:"secondary",size:"sm",children:e},e))})]}):null]}),(0,n.jsx)("div",{className:"overlay-patch-col overlay-patch-col-payload",children:(0,n.jsx)(ea,{patch:e})})]})]})})}function et({patches:e}){let[r,a]=(0,o.useState)(!0);return(0,n.jsxs)("section",{id:"patches",className:"overlay-section",children:[(0,n.jsx)(ei,{patches:e,allExpanded:r,onToggleAll:()=>a(e=>!e)}),0===e.length?(0,n.jsx)("div",{className:"overlay-callout",children:"This overlay defines no patches."}):(0,n.jsx)("div",{className:"overlay-patch-list",children:e.map((e,a)=>(0,n.jsx)(eo,{patch:e,index:a,defaultOpen:r},a))},String(r))]})}function ei({patches:e,allExpanded:r,onToggleAll:a}){let o=e.length>1;return(0,n.jsxs)("header",{className:"overlay-section-header",children:[(0,n.jsxs)("div",{className:"overlay-section-header-left",children:[(0,n.jsx)("h2",{className:"overlay-section-title",children:"Patches"}),(0,n.jsx)(i.Ex,{variant:"secondary",size:"sm",children:e.length})]}),o?(0,n.jsxs)(i.$n,{variant:"ghost",size:"sm",onClick:a,"aria-label":r?"Collapse all patches":"Expand all patches",children:[r?(0,n.jsx)(h,{size:14,"aria-hidden":!0}):(0,n.jsx)(y,{size:14,"aria-hidden":!0}),(0,n.jsx)("span",{children:r?"Collapse all":"Expand all"})]}):null]})}var en="navigation-with-keyboard";function el(){let e=b(w),r=b(e=>e.rawJson),a=b(j),{resolvedTheme:t}=E(),[l,s]=(0,o.useState)(S);(0,o.useEffect)(()=>{if("u"<typeof document)return;let e=e=>{"Tab"===e.key&&document.body.classList.add(en)},r=()=>document.body.classList.remove(en);return window.addEventListener("keydown",e),window.addEventListener("mousedown",r),()=>{window.removeEventListener("keydown",e),window.removeEventListener("mousedown",r)}},[]),(0,o.useEffect)(()=>{if("u"<typeof window)return;let e=window.location.hash.replace(/^#/,"");if(!e)return;let r=R(e);if(!r)return;let a=requestAnimationFrame(()=>{A(r)&&s(r)});return()=>cancelAnimationFrame(a)},[s]);let d=(0,i.cn)("ord-ui","text-foreground","overlay-root","dark"===t&&"dark");if(!e)return(0,n.jsx)("div",{className:d,children:(0,n.jsxs)("div",{className:"overlay-fatal",children:[(0,n.jsx)("h1",{children:"Invalid Overlay"}),(0,n.jsx)("p",{children:a??"Document is missing the required `ordOverlay` field."})]})});let c=e.patches??[];return(0,n.jsx)("div",{className:d,children:(0,n.jsx)(i.m_.Provider,{children:(0,n.jsxs)(L,{toolbar:(0,n.jsx)(K,{overlay:e,rawContent:r,currentSectionLabel:function(e,r){switch(e.kind){case"overview":return"Overview";case"target":return"Target";case"patch":{let a=r[e.index];return a?`${a.action.toUpperCase()} \xb7 patch #${e.index+1}`:`Patch #${e.index+1}`}}}(l,c)}),sidebar:(0,n.jsx)(H,{overlay:e,activeSection:l,onSectionChange:s}),children:[(0,n.jsx)(Q,{overlay:e}),e.target?(0,n.jsx)(W,{target:e.target}):null,(0,n.jsx)(et,{patches:c})]})})})}var es=`
/* ============================================================================
 * Overlay-specific tokens only.
 * Everything else (--ord-background / -foreground / -muted / -border / -card /
 * -primary / -success / -warning / -destructive / -radius / -font-*)
 * is provided by @open-resource-discovery/ui-components' ThemeRoot and is
 * automatically swapped between light and dark themes by useTheme().
 * ============================================================================ */
.overlay-root {
    /* accent \u{2014} Scalar's display-p3 blue, used for active sidebar items + hits */
    --overlay-accent: #0099ff;
    --overlay-accent-bg: color-mix(in oklab, var(--overlay-accent) 12%, transparent);

    /* verb colors for action / method indicators */
    --overlay-action-update: #c97a17;
    --overlay-action-merge: #0b9061;
    --overlay-action-remove: #dc2626;
    --overlay-action-default: #0a6ed1;

    /* layout */
    --overlay-toolbar-height: 48px;
    --overlay-sidebar-width: 280px;

    color: var(--ord-foreground);
    background: var(--ord-background);
    min-height: 100%;

    /* container queries target this element via @container overlay-root (...) */
    container-type: inline-size;
    container-name: overlay-root;
}

#overview, #target, [id^="patch-"] {
    scroll-margin-top: calc(var(--overlay-toolbar-height) + 16px);
}

/* ============================================================================
 * Shell \u{2014} Scalar's grid: sidebar + main. Container queries on .overlay-root
 * drive the breakpoints (so layout responds to renderer width, not viewport).
 * ============================================================================ */
.overlay-shell {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    min-height: 100%;
    background: var(--ord-background);
}
@container overlay-root (min-width: 720px) {
    .overlay-shell {
        grid-template-columns: var(--overlay-sidebar-width) minmax(0, 1fr);
    }
}

/* ============================================================================
 * Sidebar \u{2014} three-section sticky inner (search / nav / footer)
 * ============================================================================ */
.overlay-sidebar {
    background: var(--ord-background);
    border-right: 1px solid var(--ord-border);
}
.overlay-sidebar-inner {
    position: sticky;
    top: 0;
    height: 100dvh;
    display: flex;
    flex-direction: column;
    overflow: hidden;
}
.overlay-sidebar-header {
    display: flex;
    align-items: center;
    gap: 4px;
    padding: 8px 12px;
    border-bottom: 1px solid var(--ord-border);
    flex-shrink: 0;
}
.overlay-sidebar-search {
    position: relative;
    display: flex;
    align-items: center;
    flex: 1;
    min-width: 0;
}
.overlay-sidebar-search-icon {
    position: absolute;
    left: 10px;
    color: var(--ord-muted-foreground);
    pointer-events: none;
}
.overlay-sidebar-search-input {
    padding-left: 26px;
    padding-right: 56px;
    height: 32px;
    font-size: 13px;
    border-radius: 6px;
    width: 100%;
}
.overlay-sidebar-kbd {
    position: absolute;
    right: 8px;
    top: 50%;
    transform: translateY(-50%);
    font-family: var(--ord-font-mono, 'JetBrains Mono', ui-monospace, Menlo, Monaco, 'Cascadia Code', monospace);
    font-size: 10px;
    text-transform: uppercase;
    line-height: 1;
    color: var(--ord-muted-foreground);
    background: var(--ord-muted);
    border-radius: 4px;
    padding: 4px 5px;
    pointer-events: none;
}
.overlay-sidebar-nav {
    flex: 1;
    overflow-y: auto;
    padding: 6px 12px;
    display: flex;
    flex-direction: column;
    gap: 12px;
}
.overlay-sidebar-footer {
    flex-shrink: 0;
    border-top: 1px solid var(--ord-border);
    padding: 8px 12px;
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 11px;
    color: var(--ord-muted-foreground);
}
.overlay-sidebar-footer a {
    color: var(--ord-muted-foreground);
    text-decoration: none;
}
.overlay-sidebar-footer a:hover {
    color: var(--ord-foreground);
}
.overlay-sidebar-footer-spacer { flex: 1; }

.overlay-sidebar-group { display: flex; flex-direction: column; gap: 2px; }
.overlay-sidebar-group + .overlay-sidebar-group {
    border-top: 1px solid var(--ord-border);
    margin-top: 8px;
    padding-top: 8px;
}
.overlay-sidebar-group-title {
    text-transform: uppercase;
    letter-spacing: 0.05em;
    font-size: 11px;
    font-weight: 600;
    color: var(--ord-muted-foreground);
    padding: 6px 8px 4px;
    margin: 0;
}
.overlay-sidebar-list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 1px; }
.overlay-sidebar-item {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 6px 8px;
    border-radius: 4px;
    font-size: 14px;
    color: var(--ord-muted-foreground);
    text-decoration: none;
    font-weight: 400;
    line-height: 1.385;
}
.overlay-sidebar-item:hover { background: var(--ord-muted); color: var(--ord-foreground); }
.overlay-sidebar-item-active {
    color: var(--overlay-accent);
    font-weight: 500;
    background: var(--overlay-accent-bg);
}
.overlay-sidebar-item-active .overlay-sidebar-item-label {
    color: var(--overlay-accent);
}
.overlay-sidebar-item-label {
    flex: 1;
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-family: var(--ord-font-mono, 'JetBrains Mono', ui-monospace, Menlo, Monaco, 'Cascadia Code', monospace);
    font-size: 13px;
}
.overlay-sidebar-method {
    font-size: 10px;
    font-weight: 600;
    flex-shrink: 0;
    text-transform: uppercase;
    min-width: 50px;
    font-family: var(--ord-font-mono, 'JetBrains Mono', ui-monospace, Menlo, Monaco, 'Cascadia Code', monospace);
    text-align: right;
}
.overlay-sidebar-method-default { color: var(--overlay-action-default); }
.overlay-sidebar-method-success { color: var(--overlay-action-merge); }
.overlay-sidebar-method-destructive { color: var(--overlay-action-remove); }
.overlay-sidebar-hit {
    background: var(--overlay-accent-bg);
    color: inherit;
    padding: 0;
    border-radius: 2px;
}
.overlay-sidebar-empty {
    padding: 16px 12px;
    font-size: 12px;
    color: var(--ord-muted-foreground);
    text-align: center;
}

/* ============================================================================
 * Main column
 * ============================================================================ */
.overlay-main {
    display: flex;
    flex-direction: column;
    min-width: 0;
}
.overlay-toolbar {
    position: sticky;
    top: 0;
    z-index: 10;
    height: var(--overlay-toolbar-height);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 24px;
    border-bottom: 1px solid var(--ord-border);
    background: var(--ord-background);
    gap: 8px;
}
.overlay-toolbar-left { display: flex; align-items: center; gap: 8px; min-width: 0; flex: 1; }
.overlay-toolbar-section {
    font-size: 13px;
    font-weight: 500;
    color: var(--ord-foreground);
    font-family: var(--ord-font-mono, 'JetBrains Mono', ui-monospace, Menlo, Monaco, 'Cascadia Code', monospace);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    min-width: 0;
    transition: opacity 120ms ease;
}
.overlay-toolbar-actions { display: flex; align-items: center; gap: 4px; }
.overlay-toolbar-link {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    height: 28px;
    padding: 0 10px;
    border-radius: 6px;
    font-size: 12px;
    font-weight: 500;
    color: var(--ord-foreground);
    text-decoration: none;
}
.overlay-toolbar-link:hover { background: var(--ord-muted); }

.overlay-main-content {
    display: flex;
    flex-direction: column;
}

/* Each top-level block (hero / target / patches) is wrapped in this section. */
.overlay-section {
    padding: 48px 24px;
    display: flex;
    flex-direction: column;
    gap: 24px;
}

/* ============================================================================
 * Hero \u{2014} two-column (left description / right sticky cards)
 * ============================================================================ */
.overlay-hero { gap: 48px; }
.overlay-hero-badges { display: flex; flex-wrap: wrap; gap: 8px; align-items: center; }
.overlay-hero-title {
    font-size: 24px;
    line-height: 1.45;
    font-weight: 600;
    margin: 12px 0 0;
    color: var(--ord-foreground);
    font-family: var(--ord-font-mono, 'JetBrains Mono', ui-monospace, Menlo, Monaco, 'Cascadia Code', monospace);
    word-break: break-word;
}
.overlay-hero-eyebrow {
    color: var(--ord-muted-foreground);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    font-size: 11px;
    font-weight: 600;
    margin: 0;
}
.overlay-hero-columns {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    gap: 32px;
}
.overlay-hero-description {
    font-size: 16px;
    line-height: 1.625;
    color: var(--ord-foreground);
}
.overlay-hero-description :where(p) { margin: 0 0 12px 0; }
.overlay-hero-description :where(p:last-child) { margin-bottom: 0; }
.overlay-hero-description :where(a),
.overlay-patch-body :where(a) {
    color: var(--ord-foreground);
    text-decoration: underline;
    text-underline-offset: 2px;
    text-decoration-thickness: 1px;
}
.overlay-hero-description :where(a):hover,
.overlay-patch-body :where(a):hover {
    color: var(--overlay-accent);
}

.overlay-hero-side {
    display: flex;
    flex-direction: column;
}
.overlay-hero-side > * + * {
    border-top: 0;
    margin-top: -1px; /* fuse cards like Scalar's introduction-card */
    border-top-left-radius: 0;
    border-top-right-radius: 0;
}
.overlay-hero-side > *:not(:last-child) {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
}

@media (min-width: 1000px) {
    /* fallback for browsers without container query support */
}

/* ============================================================================
 * Target card (Scalar info-card style)
 * ============================================================================ */
.overlay-target-card {
    background: var(--ord-card);
    border: 1px solid var(--ord-border);
    border-radius: var(--ord-radius);
}
.overlay-target-rows { display: flex; flex-direction: column; gap: 8px; }
.overlay-target-row {
    display: grid;
    grid-template-columns: 160px 1fr;
    align-items: baseline;
    gap: 12px;
}
.overlay-target-label {
    text-transform: uppercase;
    letter-spacing: 0.05em;
    font-size: 11px;
    font-weight: 600;
    color: var(--ord-muted-foreground);
}
.overlay-target-value { min-width: 0; word-break: break-word; font-size: 14px; }

/* ============================================================================
 * Section header (Patches title row)
 * ============================================================================ */
.overlay-section-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
}
.overlay-section-header-left { display: flex; align-items: center; gap: 8px; }
.overlay-section-title {
    font-size: 20px;
    font-weight: 600;
    margin: 0;
    line-height: 1.3;
}

/* ============================================================================
 * Patches summary card (Scalar endpoints-card preview)
 * ============================================================================ */
.overlay-patch-summary {
    border: 1px solid var(--ord-border);
    border-radius: var(--ord-radius);
    background: var(--ord-background);
    overflow: hidden;
}
.overlay-patch-summary-header {
    padding: 10px 14px;
    background: var(--ord-muted);
    font-size: 11px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: var(--ord-muted-foreground);
    border-bottom: 1px solid var(--ord-border);
}
.overlay-patch-summary ul { list-style: none; padding: 0; margin: 0; }
.overlay-patch-summary li + li { border-top: 1px solid var(--ord-border); }
.overlay-patch-summary a {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 8px 14px;
    text-decoration: none;
    color: var(--ord-foreground);
}
.overlay-patch-summary a:hover { background: var(--ord-muted); }

/* ============================================================================
 * Patches list \u{2014} Scalar operations
 * ============================================================================ */
.overlay-patch-list { display: flex; flex-direction: column; gap: 12px; }
.overlay-patch-anchor {
    scroll-margin-top: calc(var(--overlay-toolbar-height) + 16px);
}
.overlay-patch { background: var(--ord-background); }
.overlay-patch-trigger { display: flex; width: 100%; }
.overlay-patch-label { display: flex; flex-direction: column; gap: 4px; flex: 1; min-width: 0; text-align: left; }
.overlay-patch-body {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    gap: 24px;
    padding: 16px;
}
.overlay-patch-col { display: flex; flex-direction: column; gap: 16px; min-width: 0; }

.overlay-field { display: flex; flex-direction: column; gap: 6px; }
.overlay-field-header { display: flex; align-items: center; justify-content: space-between; gap: 8px; }
.overlay-field-label {
    text-transform: uppercase;
    letter-spacing: 0.05em;
    font-size: 11px;
    font-weight: 600;
    color: var(--ord-muted-foreground);
    margin: 0;
}

.overlay-callout {
    padding: 12px 14px;
    border: 1px solid var(--ord-border);
    border-radius: var(--ord-radius);
    font-size: 13px;
    color: var(--ord-muted-foreground);
    background: var(--ord-card);
}
.overlay-callout-destructive {
    border-left: 4px solid var(--ord-destructive);
    background: rgba(220, 38, 38, 0.06);
    color: var(--ord-foreground);
}

.overlay-selector { font-size: 13px; }
.overlay-selector-value { font-family: var(--ord-font-mono, 'JetBrains Mono', ui-monospace, Menlo, Monaco, 'Cascadia Code', monospace); }

.overlay-fatal {
    padding: 32px;
    color: var(--ord-foreground);
    font-family: var(--ord-font-sans, Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, system-ui, sans-serif);
}
.overlay-fatal h1 { margin: 0 0 8px 0; font-size: 22px; font-weight: 600; }
.overlay-fatal p { margin: 0; color: var(--ord-muted-foreground); }

/* ============================================================================
 * Focus ring (keyboard-only)
 * ============================================================================ */
.overlay-root :focus { outline: none; }
body.navigation-with-keyboard .overlay-root :focus-visible {
    outline: 1px solid var(--overlay-accent);
    outline-offset: -2px;
    border-radius: inherit;
}

/* ============================================================================
 * Mobile \u{2014} drawer instead of display:none
 * ============================================================================ */
/* Hero two-column at wide container */
@container overlay-root (min-width: 900px) {
    .overlay-hero-columns {
        grid-template-columns: minmax(0, 1fr) 320px;
    }
    .overlay-hero-side {
        position: sticky;
        top: calc(var(--overlay-toolbar-height) + 16px);
        align-self: start;
    }
}

@container overlay-root (min-width: 1000px) {
    .overlay-patch-body {
        grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    }
}

/* Narrow container \u{2014} tighten section padding so content doesn't crowd edges. */
@container overlay-root (max-width: 720px) {
    .overlay-section { padding: 32px 16px; }
}
`,ed=!1;function ec(){if("u"<typeof document||ed)return;ed=!0;let e=document.createElement("style");e.dataset.overlayEditor="overlay-card-view",e.textContent=es,document.head.appendChild(e)}function ep({content:e,className:r}){return(0,o.useEffect)(ec,[]),(0,o.useEffect)(()=>{void 0!==e&&b.getState().setRawJson(e)},[e]),(0,n.jsx)("div",{className:r,children:(0,n.jsx)(el,{})})}}}]);