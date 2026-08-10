"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["4507"],{95841(e,t,n){n.d(t,{n:()=>c,t:()=>d});var r=n(12965),a=n(96540),o=n(74848),l=n(90580),i=`
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
`;function s(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}var c={prefixStartsWith:"@",annotations:{"@EndUserText.label":{type:"string",label:"End User Text \xb7 Label"},"@EndUserText.heading":{type:"string",label:"End User Text \xb7 Heading"},"@EndUserText.quickInfo":{type:"string",label:"End User Text \xb7 Quick Info"},"@ObjectModel.modelingPattern":{type:"object",label:"Modeling Pattern"},"@ObjectModel.text.element":{type:"array",label:"Text Element"},"@ObjectModel.text.association":{type:"object",label:"Text Association"},"@ObjectModel.semanticKey":{type:"array",label:"Semantic Key"},"@ObjectModel.representativeKey":{type:"object",label:"Representative Key"},"@ObjectModel.compositionRoot":{type:"boolean",label:"Composition Root"},"@ObjectModel.supportedCapabilities":{type:"array",label:"Supported Capabilities"},"@ObjectModel.usageType.sizeCategory":{type:"string",label:"Usage Type \xb7 Size Category"},"@ObjectModel.foreignKey.association":{type:"object",label:"Foreign Key Association"},"@Consumption.valueHelpDefinition":{type:"array",label:"Value Help"},"@Consumption.hidden":{type:"boolean",label:"Hidden"},"@PersonalData.entitySemantics":{type:"string",label:"DPP \xb7 Entity Semantics"},"@PersonalData.dataSubjectRole":{type:"string",label:"DPP \xb7 Data Subject Role"},"@PersonalData.dataSubjectRoleDescription":{type:"string",label:"DPP \xb7 Data Subject Role Description"},"@PersonalData.fieldSemantics":{type:"string",label:"DPP \xb7 Field Semantics"},"@PersonalData.isPotentiallyPersonal":{type:"boolean",label:"DPP \xb7 Potentially Personal"},"@PersonalData.isPotentiallySensitive":{type:"boolean",label:"DPP \xb7 Potentially Sensitive"},"@Semantics.currencyCode":{type:"boolean",label:"Semantics \xb7 Currency Code"},"@Semantics.amount.currencyCode":{type:"object",label:"Semantics \xb7 Amount Currency"},"@Semantics.unitOfMeasure":{type:"boolean",label:"Semantics \xb7 Unit of Measure"},"@Semantics.quantity.unitOfMeasure":{type:"object",label:"Semantics \xb7 Quantity Unit"},"@Semantics.text":{type:"boolean",label:"Semantics \xb7 Text"},"@Semantics.uuid":{type:"boolean",label:"Semantics \xb7 UUID"},"@Semantics.language":{type:"boolean",label:"Semantics \xb7 Language"},"@API.element.releaseState":{type:"string",label:"API \xb7 Element Release State"},"@API.entity.releaseState":{type:"string",label:"API \xb7 Entity Release State"},"@ODM.entityName":{type:"string",label:"ODM \xb7 Entity Name"},"@ODM.oid":{type:"string",label:"ODM \xb7 OID"},"@ODM.oidReference.entityName":{type:"string",label:"ODM \xb7 OID Reference Entity"},"@Aggregation.default":{type:"object",label:"Default Aggregation"},"@EntityRelationship.entityType":{type:"string",label:"Entity Relationship \xb7 Type"},"@EntityRelationship.entityIds":{type:"array",label:"Entity Relationship \xb7 IDs"},"@EntityRelationship.propertyType":{type:"string",label:"Entity Relationship \xb7 Property Type"},"@EntityRelationship.compositeReferences":{type:"array",label:"Entity Relationship \xb7 Composite References"},"@EntityRelationship.reference":{type:"array",label:"Entity Relationship \xb7 Reference"},"@DataIntegration.dataUnavailable":{type:"boolean",label:"Data Integration \xb7 Unavailable"}}};function d({content:e,config:t,showCustomAttributes:n=!0,customAttributes:p,className:b,theme:f}){let[y,u]=(0,a.useState)({kind:"idle"});return(0,a.useEffect)(()=>{let a;if(!e)return void u({kind:"idle"});let o=!1;u({kind:"loading"});try{a=JSON.parse(e)}catch(e){u({kind:"error",message:String(e)});return}let i=p??[c],d=n?(0,r.i)(e):null,b=n?function(e){let t={};for(let n of e)for(let[e,r]of Object.entries(n.annotations??{}))if("type"in r&&"link"===r.type&&"callback"in r&&!(e in t)){let n=r.callback;t[e]=e=>n(e)??""}return t}(i):{},f={...t,annotationLinkCallbacks:{...b,...t?.annotationLinkCallbacks}};return(0,l.JF)(a,f).then(e=>{let t=n?function(e,t,n){let r=new Map;for(let e of t){for(let[t,n]of Object.entries(e.annotations??{}))r.has(t)||r.set(t,{def:n,config:e});if(e.prefixStartsWith&&n)for(let t of function(e,t){let n=new Set,r=e=>{if(e&&"object"==typeof e)for(let r of Object.keys(e))r.startsWith(t)&&n.add(r)},a=e.definitions;if(a)for(let e of Object.values(a)){r(e);let t=e?.elements;if(t)for(let e of Object.values(t))r(e)}return[...n]}(n,e.prefixStartsWith))r.has(t)||r.set(t,{def:void 0,config:e})}if(0===r.size)return e;let a=new DOMParser().parseFromString(e,"text/html");for(let e of Array.from(a.querySelectorAll("td, p")))for(let{textNode:t,valueNode:n,codeEl:a,key:o,entry:l}of function(e,t){let n=[],r=Array.from(e.childNodes);for(let e=0;e<r.length-1;e++){let a=r[e];if(a.nodeType!==Node.TEXT_NODE)continue;let o=(a.textContent??"").replace(/^\s+/,""),l=/^@([\w.]+):\s*$/.exec(o);if(!l)continue;let i=`@${l[1]}`,s=t.get(i);if(!s)continue;let c=r[e+1];if(!c||c.nodeType!==Node.ELEMENT_NODE)continue;let d=null;"CODE"===c.tagName?d=c:"A"===c.tagName&&(d=c.querySelector("code")),d&&n.push({textNode:a,valueNode:c,codeEl:d,key:i,entry:s})}return n}(e,r)){let r=function(e,t,n,r){var a;let o;if(null==t)return"";let l=n&&!("render"in n)&&"label"in n&&n.label?n.label:(a=r.prefixStartsWith??"@",o=e,a&&o.startsWith(a)&&(o=o.slice(a.length)),o.split(".").filter(Boolean).map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(" \xb7 ")),i=r.documentationUrl?.(e),c=i?` <a href="${s(i)}" class="csn-attr-doclink" target="_blank" rel="noreferrer" title="Documentation">\u{2197}</a>`:"",d=function e(t,n){if(null==t)return"";if(n&&"render"in n)return n.render(t);if(n?.type==="link"&&"callback"in n){let e=n.callback(t),r=s(String(t));return e?`<a href="${s(e)}" class="csn-attr-link" target="_blank" rel="noreferrer">${r}</a>`:r}if(n?.type==="boolean"||"boolean"==typeof t)return t?"Yes":"No";if(n?.type==="number"||"number"==typeof t)return s(String(t));if(n?.type==="array"||Array.isArray(t))return Array.isArray(t)?`<span class="csn-attr-list">${t.map(t=>`<span class="csn-attr-list-item">${e(t,void 0)}</span>`).join("")}</span>`:s(String(t));if(n?.type==="object"||"object"==typeof t&&null!==t){let n=Object.entries(t);return 1===n.length&&"#"===n[0][0]?s(String(n[0][1])):`<span class="csn-attr-obj">${n.map(([t,n])=>`<span class="csn-attr-kv"><span class="csn-attr-kv-key">${s(t)}</span><span class="csn-attr-kv-val">${e(n,void 0)}</span></span>`).join("")}</span>`}if(n&&"valueLinks"in n&&n.valueLinks){let e=n.valueLinks[String(t)],r=s(String(t));return e?`<a href="${s(e)}" class="csn-attr-link" target="_blank" rel="noreferrer">${r}</a>`:r}return s(String(t))}(t,n);return d?`<span class="csn-attr-row"><span class="csn-attr-label">${s(l)}${c}</span><span class="csn-attr-value">${d}</span></span>`:""}(o,function(e){try{return JSON.parse(e)}catch{return e}}(a.textContent??""),l.def,l.config);r&&function(e,t,n,r){let a=e.ownerDocument.createElement("template");a.innerHTML=r,e.insertBefore(a.content,t);let o=t;for(;o;){let t=o.nextSibling,r=o===n;if(e.removeChild(o),r)break;o=t}}(e,t,n,r)}return a.body.innerHTML}(e,i,d):e;o||u({kind:"ready",html:t})}).catch(e=>{o||u({kind:"error",message:String(e)})}),()=>{o=!0}},[e,t,n,p]),(0,o.jsxs)("div",{className:`csn-root${b?` ${b}`:""}`,style:f,children:[(0,o.jsx)("style",{children:i}),"ready"===y.kind&&(0,o.jsx)("div",{className:"p-4",dangerouslySetInnerHTML:{__html:y.html}}),"error"===y.kind&&(0,o.jsxs)("div",{children:[(0,o.jsx)("h1",{children:"Invalid CSN"}),(0,o.jsx)("div",{children:y.message})]})]})}},87862(e,t,n){n.r(t),n.d(t,{CsnRenderer:()=>r.t});var r=n(95841)}}]);