"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["9535"],{77710(o,r,e){e.d(r,{t:()=>a});var t=e(92810),l=e(96540),d=e(74848),i=e(54190),s=`
.overlay-root.ord-ui .ord-code-block .shiki span[style*="color:#6a737d" i] { color: var(--ord-hljs-comment) !important; }
.overlay-root.ord-ui .ord-code-block .shiki span[style*="color:#032f62" i] { color: var(--ord-hljs-string) !important; }
.overlay-root.ord-ui .ord-code-block .shiki span[style*="color:#d73a49" i] { color: var(--ord-hljs-keyword) !important; }
.overlay-root.ord-ui .ord-code-block .shiki span[style*="color:#22863a" i] { color: var(--ord-hljs-attr) !important; }
.overlay-root.ord-ui .ord-code-block .shiki span[style*="color:#005cc5" i] { color: var(--ord-hljs-number) !important; }
.overlay-root.ord-ui .ord-code-block .shiki span[style*="color:#6f42c1" i] { color: var(--ord-hljs-function) !important; }
.overlay-root.ord-ui .ord-code-block .shiki,
.overlay-root.ord-ui .ord-code-block .shiki span[style*="color:#24292e" i] { color: var(--ord-code-fg, var(--ord-hljs-punctuation)) !important; }
`;function a({content:o,className:r,theme:e}){let c=(0,l.useId)(),n=(0,l.useRef)(null),{setTheme:h}=(0,i.r)(),u=r?.split(/\s+/).includes("dark")??!1;(0,l.useEffect)(()=>{i.s.getState().setRawJson(o)},[o]),(0,l.useEffect)(()=>{h(u?"dark":"light")},[u,h]),(0,l.useEffect)(()=>{let o=n.current;if(!o)return;let r=new ResizeObserver(([r])=>{o.style.setProperty("--overlay-container-height",`${r.contentRect.height}px`)});return r.observe(o),()=>r.disconnect()},[]);let v=e?(0,t.t)("overlay-root",c,e):null,y=`[data-renderer-id="${c}"] .overlay-root`,k=`
        ${y} .overlay-sidebar-inner {
            height: var(--overlay-container-height, 100dvh);
        }
        ${y} code {
            color: var(--ord-code-fg, var(--ord-foreground, #24292f));
            background-color: var(--ord-code-bg, var(--ord-muted, #f6f8fa));
        }
    `;return(0,d.jsxs)("div",{ref:n,"data-renderer-id":c,className:"h-full",children:[(0,d.jsx)("style",{children:s}),(0,d.jsx)("style",{children:k}),v&&(0,d.jsx)("style",{children:v}),(0,d.jsx)(i.n,{})]})}},7858(o,r,e){e.r(r),e.d(r,{OverlayRenderer:()=>t.t});var t=e(77710)}}]);