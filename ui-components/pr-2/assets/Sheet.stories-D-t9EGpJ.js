import{i as e}from"./preload-helper-BuWHWz2h.js";import{i as t}from"./iframe-CtcPCbgd.js";import{n,t as r}from"./button-C-1x_bBY.js";import{n as i,t as a}from"./field-BMzG73gX.js";import{n as o,t as s}from"./input-DHXjbWF_.js";import{i as c,n as l,t as u}from"./sheet-Cl--mpOj.js";function d({side:e}){return(0,f.jsxs)(c.Root,{children:[(0,f.jsx)(c.Trigger,{render:(0,f.jsxs)(n,{children:[`Open from `,e]})}),(0,f.jsxs)(c.Portal,{children:[(0,f.jsx)(c.Backdrop,{}),(0,f.jsxs)(c.Popup,{side:e,children:[(0,f.jsxs)(`div`,{children:[(0,f.jsx)(c.Title,{children:`Edit profile`}),(0,f.jsx)(c.Description,{children:`Make changes to your profile here.`})]}),(0,f.jsxs)(`div`,{className:`flex-1 overflow-y-auto px-1 -mx-1 flex flex-col gap-4`,children:[(0,f.jsxs)(i.Root,{children:[(0,f.jsx)(i.Label,{children:`Name`}),(0,f.jsx)(o,{defaultValue:`Jane Doe`})]}),(0,f.jsxs)(i.Root,{children:[(0,f.jsx)(i.Label,{children:`Username`}),(0,f.jsx)(o,{defaultValue:`@janedoe`})]})]}),(0,f.jsxs)(`div`,{className:`flex justify-end gap-2`,children:[(0,f.jsx)(c.Close,{render:(0,f.jsx)(n,{variant:`outline`,children:`Cancel`})}),(0,f.jsx)(c.Close,{render:(0,f.jsx)(n,{children:`Save`})})]})]})]})]})}var f,p,m,h,g,_,v,y;e((()=>{u(),r(),s(),a(),f=t(),p={title:`Components/Sheet`,component:c.Root,parameters:{layout:`centered`,docs:{story:{inline:!1,height:`480px`}}},tags:[`autodocs`]},m={render:()=>(0,f.jsx)(d,{side:`right`})},h={render:()=>(0,f.jsx)(d,{side:`left`})},g={render:()=>(0,f.jsx)(d,{side:`top`})},_={render:()=>(0,f.jsx)(d,{side:`bottom`})},v={render:()=>(0,f.jsx)(l,{side:`right`,trigger:(0,f.jsx)(n,{children:`Open filters`}),title:`Filters`,description:`Refine the list of resources.`,footer:(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(c.Close,{render:(0,f.jsx)(n,{variant:`outline`,children:`Reset`})}),(0,f.jsx)(c.Close,{render:(0,f.jsx)(n,{children:`Apply`})})]}),children:(0,f.jsx)(`div`,{className:`flex flex-col gap-3 text-sm`,children:(0,f.jsx)(`p`,{children:`Status, type, owner, and more.`})})})},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <SheetExample side="right" />
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <SheetExample side="left" />
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <SheetExample side="top" />
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <SheetExample side="bottom" />
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <SimpleSheet side="right" trigger={<Button>Open filters</Button>} title="Filters" description="Refine the list of resources." footer={<>
          <Sheet.Close render={<Button variant="outline">Reset</Button>} />
          <Sheet.Close render={<Button>Apply</Button>} />
        </>}>
      <div className="flex flex-col gap-3 text-sm">
        <p>Status, type, owner, and more.</p>
      </div>
    </SimpleSheet>
}`,...v.parameters?.docs?.source}}},y=[`Right`,`Left`,`Top`,`Bottom`,`Simple`]}))();export{_ as Bottom,h as Left,m as Right,v as Simple,g as Top,y as __namedExportsOrder,p as default};