"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["9535"],{39811(e,r,t){t.d(r,{t:()=>d});var s=t(92810),n=t(96540),o=t(74848),a=t(54190);function d({content:e,className:r,theme:t}){let l=(0,n.useId)(),c=(0,n.useRef)(null),{setTheme:i}=(0,a.r)(),u=r?.split(/\s+/).includes("dark")??!1;(0,n.useEffect)(()=>{a.s.getState().setRawJson(e)},[e]),(0,n.useEffect)(()=>{i(u?"dark":"light")},[u,i]),(0,n.useEffect)(()=>{let e=c.current;if(!e)return;let r=new ResizeObserver(([r])=>{e.style.setProperty("--overlay-container-height",`${r.contentRect.height}px`)});return r.observe(e),()=>r.disconnect()},[]);let f=t?(0,s.t)("overlay-root",l,t):null,h=`[data-renderer-id="${l}"] .overlay-root`;return(0,o.jsxs)("div",{ref:c,"data-renderer-id":l,className:"h-full",children:[(0,o.jsx)("style",{children:`
        ${h} .overlay-sidebar-inner {
            height: var(--overlay-container-height, 100dvh);
        }
        ${h} code {
            color: var(--ord-code-fg, var(--ord-foreground, #24292f));
            background-color: var(--ord-code-bg, var(--ord-muted, #f6f8fa));
        }
    `}),f&&(0,o.jsx)("style",{children:f}),(0,o.jsx)(a.n,{})]})}},7858(e,r,t){t.r(r),t.d(r,{OverlayRenderer:()=>s.t});var s=t(39811)}}]);