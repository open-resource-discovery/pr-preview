"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["4507"],{72890(e,t,r){r.d(t,{t:()=>c});var o=r(12965),n=r(96540),a=r(74848),i=r(90580),l=`
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
`;function s(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function c({content:e,config:t,customAttributes:r,className:d,theme:f}){let[p,h]=(0,n.useState)({kind:"idle"});return(0,n.useEffect)(()=>{let n;if(!e)return void h({kind:"idle"});let a=!1;h({kind:"loading"});try{n=JSON.parse(e)}catch(e){h({kind:"error",message:String(e)});return}let l=r??[],c=void 0!==r,d=c?(0,o.i)(e):null,f=c?function(e){let t={};for(let r of e)for(let[e,o]of Object.entries(r.annotations??{}))if("type"in o&&"link"===o.type&&"callback"in o&&!(e in t)){let r=o.callback;t[e]=e=>r(e)??""}return t}(l):{},p={...t,annotationLinkCallbacks:{...f,...t?.annotationLinkCallbacks}};return(0,i.JF)(n,p).then(e=>{let t=c?function(e,t,r){let o=new Map;for(let e of t){for(let[t,r]of Object.entries(e.annotations??{}))o.has(t)||o.set(t,{def:r,config:e});if(e.prefixStartsWith&&r)for(let t of function(e,t){let r=new Set,o=e=>{if(e&&"object"==typeof e)for(let o of Object.keys(e))o.startsWith(t)&&r.add(o)},n=e.definitions;if(n)for(let e of Object.values(n)){o(e);let t=e?.elements;if(t)for(let e of Object.values(t))o(e)}return[...r]}(r,e.prefixStartsWith))o.has(t)||o.set(t,{def:void 0,config:e})}if(0===o.size)return e;let n=new DOMParser().parseFromString(e,"text/html");for(let e of Array.from(n.querySelectorAll("td, p")))for(let{textNode:t,valueNode:r,codeEl:n,key:a,entry:i}of function(e,t){let r=[],o=Array.from(e.childNodes);for(let e=0;e<o.length-1;e++){let n=o[e];if(n.nodeType!==Node.TEXT_NODE)continue;let a=(n.textContent??"").replace(/^\s+/,""),i=/^@([\w.]+):\s*$/.exec(a);if(!i)continue;let l=`@${i[1]}`,s=t.get(l);if(!s)continue;let c=o[e+1];if(!c||c.nodeType!==Node.ELEMENT_NODE)continue;let d=null;"CODE"===c.tagName?d=c:"A"===c.tagName&&(d=c.querySelector("code")),d&&r.push({textNode:n,valueNode:c,codeEl:d,key:l,entry:s})}return r}(e,o)){let o=function(e,t,r,o){var n;let a;if(null==t)return"";let i=r&&!("render"in r)&&"label"in r&&r.label?r.label:(n=o.prefixStartsWith??"@",a=e,n&&a.startsWith(n)&&(a=a.slice(n.length)),a.split(".").filter(Boolean).map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(" \xb7 ")),l=o.documentationUrl?.(e),c=l?` <a href="${s(l)}" class="csn-attr-doclink" target="_blank" rel="noreferrer" title="Documentation">\u{2197}</a>`:"",d=function e(t,r){if(null==t)return"";if(r&&"render"in r)return r.render(t);if(r?.type==="link"&&"callback"in r){let e=r.callback(t),o=s(String(t));return e?`<a href="${s(e)}" class="csn-attr-link" target="_blank" rel="noreferrer">${o}</a>`:o}if(r?.type==="boolean"||"boolean"==typeof t)return t?"Yes":"No";if(r?.type==="number"||"number"==typeof t)return s(String(t));if(r?.type==="array"||Array.isArray(t))return Array.isArray(t)?`<span class="csn-attr-list">${t.map(t=>`<span class="csn-attr-list-item">${e(t,void 0)}</span>`).join("")}</span>`:s(String(t));if(r?.type==="object"||"object"==typeof t&&null!==t){let r=Object.entries(t);return 1===r.length&&"#"===r[0][0]?s(String(r[0][1])):`<span class="csn-attr-obj">${r.map(([t,r])=>`<span class="csn-attr-kv"><span class="csn-attr-kv-key">${s(t)}</span><span class="csn-attr-kv-val">${e(r,void 0)}</span></span>`).join("")}</span>`}if(r&&"valueLinks"in r&&r.valueLinks){let e=r.valueLinks[String(t)],o=s(String(t));return e?`<a href="${s(e)}" class="csn-attr-link" target="_blank" rel="noreferrer">${o}</a>`:o}return s(String(t))}(t,r);return d?`<span class="csn-attr-row"><span class="csn-attr-label">${s(i)}${c}</span><span class="csn-attr-value">${d}</span></span>`:""}(a,function(e){try{return JSON.parse(e)}catch{return e}}(n.textContent??""),i.def,i.config);o&&function(e,t,r,o){let n=e.ownerDocument.createElement("template");n.innerHTML=o,e.insertBefore(n.content,t);let a=t;for(;a;){let t=a.nextSibling,o=a===r;if(e.removeChild(a),o)break;a=t}}(e,t,r,o)}return n.body.innerHTML}(e,l,d):e;a||h({kind:"ready",html:t})}).catch(e=>{a||h({kind:"error",message:String(e)})}),()=>{a=!0}},[e,t,r]),(0,a.jsxs)("div",{className:`csn-root${d?` ${d}`:""}`,style:f,children:[(0,a.jsx)("style",{children:l}),"ready"===p.kind&&(0,a.jsx)("div",{className:"p-4",dangerouslySetInnerHTML:{__html:p.html}}),"error"===p.kind&&(0,a.jsxs)("div",{children:[(0,a.jsx)("h1",{children:"Invalid CSN"}),(0,a.jsx)("div",{children:p.message})]})]})}},87862(e,t,r){r.r(t),r.d(t,{CsnRenderer:()=>o.t});var o=r(72890)}}]);