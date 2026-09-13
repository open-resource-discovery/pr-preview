"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["4507"],{64017(e,t,r){r.d(t,{t:()=>f});var o=r(92810),n=r(96540),a=r(74848),l=r(90580),i=`
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
`;function s(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function c(e,t,r,o){let n=e.ownerDocument.createElement("template");n.innerHTML=o,e.insertBefore(n.content,t);let a=t;for(;a;){let t=a.nextSibling,o=a===r;if(e.removeChild(a),o)break;a=t}}function d(e,t){if(e.nodeType!==Node.TEXT_NODE)return null;let r=(e.textContent??"").replace(/^\s+/,""),o=/^@([\w.]+):\s*$/.exec(r);if(!o||!t||t.nodeType!==Node.ELEMENT_NODE)return null;let n=null;return("CODE"===t.tagName?n=t:"A"===t.tagName&&(n=t.querySelector("code")),n)?{key:`@${o[1]}`,valueNode:t,codeEl:n}:null}function f({content:e,config:t,customAttributes:r,className:u,theme:p}){let[h,b]=(0,n.useState)({kind:"idle"});return(0,n.useEffect)(()=>{let n;if(!e)return void b({kind:"idle"});let a=!1;b({kind:"loading"});try{n=JSON.parse(e)}catch(e){b({kind:"error",message:String(e)});return}let i=r??[],f=void 0!==r,u=f?(0,o.i)(e):null,p=f?function(e){let t={};for(let r of e)for(let[e,o]of Object.entries(r.annotations??{}))if("type"in o&&"link"===o.type&&"callback"in o&&!(e in t)){let r=o.callback;t[e]=e=>r(e)??""}return t}(i):{},h={...t,annotationLinkCallbacks:{...p,...t?.annotationLinkCallbacks}};return(0,l.JF)(n,h).then(e=>{let t=f?function(e,t,r){let o=new Map;for(let e of t){for(let[t,r]of Object.entries(e.annotations??{}))o.has(t)||o.set(t,{def:r,config:e});if(e.prefixStartsWith&&r)for(let t of function(e,t){let r=new Set,o=e=>{if(e&&"object"==typeof e)for(let o of Object.keys(e))o.startsWith(t)&&r.add(o)},n=e.definitions;if(n)for(let e of Object.values(n)){o(e);let t=e?.elements;if(t)for(let e of Object.values(t))o(e)}return[...r]}(r,e.prefixStartsWith))o.has(t)||o.set(t,{def:void 0,config:e})}if(0===o.size)return e;let n=new DOMParser().parseFromString(e,"text/html");for(let e of Array.from(n.querySelectorAll("td, p")))for(let{textNode:t,valueNode:r,codeEl:n,key:a,entry:l}of function(e,t){let r=[],o=Array.from(e.childNodes);for(let e=0;e<o.length-1;e++){let n=d(o[e],o[e+1]);if(!n)continue;let a=t.get(n.key);a&&r.push({textNode:o[e],valueNode:n.valueNode,codeEl:n.codeEl,key:n.key,entry:a})}return r}(e,o)){let o=function(e,t,r,o){var n;let a;if(null==t)return"";let l=r&&!("render"in r)&&"label"in r&&r.label?r.label:(n=o.prefixStartsWith??"@",a=e,n&&a.startsWith(n)&&(a=a.slice(n.length)),a.split(".").filter(Boolean).map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(" \xb7 ")),i=o.documentationUrl?.(e),c=i?` <a href="${s(i)}" class="csn-attr-doclink" target="_blank" rel="noreferrer" title="Documentation">\u{2197}</a>`:"",d=function e(t,r){if(null==t)return"";if(r&&"render"in r)return r.render(t);if(r?.type==="link"&&"callback"in r){let e=r.callback(t),o=s(String(t));return e?`<a href="${s(e)}" class="csn-attr-link" target="_blank" rel="noreferrer">${o}</a>`:o}if(r?.type==="boolean"||"boolean"==typeof t)return t?"Yes":"No";if(r?.type==="number"||"number"==typeof t)return s(String(t));if(r?.type==="array"||Array.isArray(t))return Array.isArray(t)?`<span class="csn-attr-list">${t.map(t=>`<span class="csn-attr-list-item">${e(t,void 0)}</span>`).join("")}</span>`:s(String(t));if(r?.type==="object"||"object"==typeof t&&null!==t){let r=Object.entries(t);return 1===r.length&&"#"===r[0][0]?s(String(r[0][1])):`<span class="csn-attr-obj">${r.map(([t,r])=>`<span class="csn-attr-kv"><span class="csn-attr-kv-key">${s(t)}</span><span class="csn-attr-kv-val">${e(r,void 0)}</span></span>`).join("")}</span>`}if(r&&"valueLinks"in r&&r.valueLinks){let e=r.valueLinks[String(t)],o=s(String(t));return e?`<a href="${s(e)}" class="csn-attr-link" target="_blank" rel="noreferrer">${o}</a>`:o}return s(String(t))}(t,r);return d?`<span class="csn-attr-row"><span class="csn-attr-label">${s(l)}${c}</span><span class="csn-attr-value">${d}</span></span>`:""}(a,function(e){try{return JSON.parse(e)}catch{return e}}(n.textContent??""),l.def,l.config);o&&c(e,t,r,o)}return n.body.innerHTML}(e,i,u):function(e){let t=new DOMParser().parseFromString(e,"text/html");for(let e of Array.from(t.querySelectorAll("td, p"))){let t=Array.from(e.childNodes),r=[];for(let e=0;e<t.length-1;e++){let o=d(t[e],t[e+1]);o&&r.push({textNode:t[e],valueNode:o.valueNode,br:function(e){let t=e.previousSibling;return t&&t.nodeType===Node.TEXT_NODE&&!(t.textContent??"").trim()&&(t=t.previousSibling),t&&t.nodeType===Node.ELEMENT_NODE&&"BR"===t.tagName?t:null}(t[e])})}for(let{textNode:t,valueNode:o,br:n}of r)c(e,t,o,""),n&&n.parentNode===e&&e.removeChild(n)}return t.body.innerHTML}(e);a||b({kind:"ready",html:t})}).catch(e=>{a||b({kind:"error",message:String(e)})}),()=>{a=!0}},[e,t,r]),(0,a.jsxs)("div",{className:`csn-root${u?` ${u}`:""}`,style:p,children:[(0,a.jsx)("style",{children:i}),"ready"===h.kind&&(0,a.jsx)("div",{className:"p-4",dangerouslySetInnerHTML:{__html:h.html}}),"error"===h.kind&&(0,a.jsxs)("div",{children:[(0,a.jsx)("h1",{children:"Invalid CSN"}),(0,a.jsx)("div",{children:h.message})]})]})}},87862(e,t,r){r.r(t),r.d(t,{CsnRenderer:()=>o.t});var o=r(64017)}}]);