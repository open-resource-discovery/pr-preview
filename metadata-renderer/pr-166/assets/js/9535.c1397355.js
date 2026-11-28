"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["9535"],{7835(e,r,d){d.d(r,{t:()=>s});var o=d(96540),a=d(51041),t=d(50790),l=d(74848);function s({content:e,className:r,theme:d}){let n=(0,o.useId)(),{setTheme:c}=(0,a.r)(),u=r?.split(/\s+/).includes("dark")??!1;(0,o.useEffect)(()=>{a.s.getState().setRawJson(e)},[e]),(0,o.useEffect)(()=>{c(u?"dark":"light")},[u,c]);let i=d?(0,t.t)("overlay-root",n,d):null,f=d?(0,t.t)("overlay-sidebar-footer-mobile",n,d):null,v=`
        [data-renderer-id="${n}"] .overlay-root code {
            color: var(--ord-code-fg, var(--ord-foreground, #24292f));
            background-color: var(--ord-code-bg, var(--ord-muted, #f6f8fa));
        }
        [data-renderer-id="${n}"] .overlay-sidebar-footer-mobile {
            background: var(--ord-background);
            color: var(--ord-muted-foreground);
        }
    `;return(0,l.jsxs)("div",{"data-renderer-id":n,className:"h-full",children:[(0,l.jsx)("style",{children:v}),i&&(0,l.jsx)("style",{children:i}),f&&(0,l.jsx)("style",{children:f}),(0,l.jsx)(a.n,{})]})}},7858(e,r,d){d.r(r),d.d(r,{OverlayRenderer:()=>o.t});var o=d(7835)}}]);