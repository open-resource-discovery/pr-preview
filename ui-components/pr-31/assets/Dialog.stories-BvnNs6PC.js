import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-BZJXY1be.js";import{a as r}from"./iframe-f7ZUfOUw.js";import{n as i,t as a}from"./Button-C5VG62LS.js";import{n as o,t as s}from"./Field-QHNpunt1.js";import{n as c,t as l}from"./Dialog-C6hOMT9m.js";import{n as u,t as d}from"./Input-BxY38PlG.js";import{n as f,t as p}from"./Textarea-Cj-yfHg9.js";var m,h,g;function _(){return(_=t((()=>{m=e(n(),1),c(),h=r(),g=(0,m.forwardRef)(({trigger:e,title:t,description:n,children:r,footer:i,open:a,defaultOpen:o,onOpenChange:s,showClose:c=!0,...u},d)=>(0,h.jsxs)(l.Root,{open:a,defaultOpen:o,onOpenChange:s,children:[e!==null&&(0,h.jsx)(l.Trigger,{render:e}),(0,h.jsxs)(l.Portal,{children:[(0,h.jsx)(l.Backdrop,{}),(0,h.jsxs)(l.Popup,{ref:d,...u,children:[(t!==null||n!==null)&&(0,h.jsxs)(`div`,{className:`mb-4`,children:[t!==null&&(0,h.jsx)(l.Title,{children:t}),n!==null&&(0,h.jsx)(l.Description,{children:n})]}),r,i!==null&&(0,h.jsx)(`div`,{className:`mt-6 flex justify-end gap-2`,children:i}),c&&(0,h.jsx)(l.Close,{"aria-label":`Close`,className:`absolute right-4 top-4 inline-flex h-6 w-6 items-center justify-center rounded-sm text-muted-foreground opacity-70 transition-opacity hover:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring`,children:(0,h.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:`14`,height:`14`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,h.jsx)(`path`,{d:`M18 6 6 18`}),(0,h.jsx)(`path`,{d:`m6 6 12 12`})]})})]})]})]})),g.displayName=`SimpleDialog`,g.__docgenInfo={description:``,methods:[],displayName:`SimpleDialog`,props:{trigger:{required:!1,tsType:{name:`ReactNode`},description:``},title:{required:!1,tsType:{name:`ReactNode`},description:``},description:{required:!1,tsType:{name:`ReactNode`},description:``},children:{required:!1,tsType:{name:`ReactNode`},description:``},footer:{required:!1,tsType:{name:`ReactNode`},description:``},open:{required:!1,tsType:{name:`boolean`},description:``},defaultOpen:{required:!1,tsType:{name:`boolean`},description:``},onOpenChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(open: boolean) => void`,signature:{arguments:[{type:{name:`boolean`},name:`open`}],return:{name:`void`}}},description:``},showClose:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`true`,computed:!1}}},composes:[`Omit`]}})))()}var v,y,b,x,S,C,w;function T(){return(T=t((()=>{c(),_(),i(),u(),f(),o(),v=r(),y={title:`Components/Dialog`,component:l.Root,parameters:{layout:`centered`,docs:{story:{inline:!1,height:`420px`}}},tags:[`autodocs`]},b={render:()=>(0,v.jsxs)(l.Root,{children:[(0,v.jsx)(l.Trigger,{render:(0,v.jsx)(a,{children:`Open dialog`})}),(0,v.jsxs)(l.Portal,{children:[(0,v.jsx)(l.Backdrop,{}),(0,v.jsxs)(l.Popup,{children:[(0,v.jsx)(l.Title,{children:`Are you sure?`}),(0,v.jsx)(l.Description,{children:`This action cannot be undone. This will permanently delete the connection.`}),(0,v.jsxs)(`div`,{className:`mt-6 flex justify-end gap-2`,children:[(0,v.jsx)(l.Close,{render:(0,v.jsx)(a,{variant:`outline`,children:`Cancel`})}),(0,v.jsx)(l.Close,{render:(0,v.jsx)(a,{variant:`destructive`,children:`Delete`})})]})]})]})]})},x={render:()=>(0,v.jsxs)(l.Root,{children:[(0,v.jsx)(l.Trigger,{render:(0,v.jsx)(a,{children:`Edit profile`})}),(0,v.jsxs)(l.Portal,{children:[(0,v.jsx)(l.Backdrop,{}),(0,v.jsxs)(l.Popup,{children:[(0,v.jsx)(l.Title,{children:`Edit profile`}),(0,v.jsx)(l.Description,{children:`Update your profile details and click save.`}),(0,v.jsxs)(`div`,{className:`mt-4 flex flex-col gap-4`,children:[(0,v.jsxs)(s.Root,{children:[(0,v.jsx)(s.Label,{children:`Name`}),(0,v.jsx)(d,{defaultValue:`Jane Doe`})]}),(0,v.jsxs)(s.Root,{children:[(0,v.jsx)(s.Label,{children:`Bio`}),(0,v.jsx)(p,{defaultValue:`Building things on the open web.`,rows:3})]})]}),(0,v.jsxs)(`div`,{className:`mt-6 flex justify-end gap-2`,children:[(0,v.jsx)(l.Close,{render:(0,v.jsx)(a,{variant:`outline`,children:`Cancel`})}),(0,v.jsx)(l.Close,{render:(0,v.jsx)(a,{children:`Save`})})]})]})]})]})},S={render:()=>(0,v.jsx)(g,{trigger:(0,v.jsx)(a,{children:`Open simple`}),title:`Welcome`,description:`A SimpleDialog wraps the compound parts with a clean API.`,footer:(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(l.Close,{render:(0,v.jsx)(a,{variant:`outline`,children:`Cancel`})}),(0,v.jsx)(l.Close,{render:(0,v.jsx)(a,{children:`Continue`})})]}),children:(0,v.jsx)(`p`,{className:`text-sm`,children:`Anything you put inside renders in the body.`})})},C={render:()=>(0,v.jsx)(g,{trigger:(0,v.jsx)(a,{variant:`destructive`,children:`Delete account`}),title:`Delete account?`,description:`This action is permanent. Your data will be unrecoverable.`,footer:(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(l.Close,{render:(0,v.jsx)(a,{variant:`outline`,children:`Cancel`})}),(0,v.jsx)(l.Close,{render:(0,v.jsx)(a,{variant:`destructive`,children:`Delete`})})]})})},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <Dialog.Root>
      <Dialog.Trigger render={<Button>Open dialog</Button>} />
      <Dialog.Portal>
        <Dialog.Backdrop />
        <Dialog.Popup>
          <Dialog.Title>Are you sure?</Dialog.Title>
          <Dialog.Description>
            This action cannot be undone. This will permanently delete the connection.
          </Dialog.Description>
          <div className="mt-6 flex justify-end gap-2">
            <Dialog.Close render={<Button variant="outline">Cancel</Button>} />
            <Dialog.Close render={<Button variant="destructive">Delete</Button>} />
          </div>
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <Dialog.Root>
      <Dialog.Trigger render={<Button>Edit profile</Button>} />
      <Dialog.Portal>
        <Dialog.Backdrop />
        <Dialog.Popup>
          <Dialog.Title>Edit profile</Dialog.Title>
          <Dialog.Description>Update your profile details and click save.</Dialog.Description>
          <div className="mt-4 flex flex-col gap-4">
            <Field.Root>
              <Field.Label>Name</Field.Label>
              <Input defaultValue="Jane Doe" />
            </Field.Root>
            <Field.Root>
              <Field.Label>Bio</Field.Label>
              <Textarea defaultValue="Building things on the open web." rows={3} />
            </Field.Root>
          </div>
          <div className="mt-6 flex justify-end gap-2">
            <Dialog.Close render={<Button variant="outline">Cancel</Button>} />
            <Dialog.Close render={<Button>Save</Button>} />
          </div>
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <SimpleDialog trigger={<Button>Open simple</Button>} title="Welcome" description="A SimpleDialog wraps the compound parts with a clean API." footer={<>
          <Dialog.Close render={<Button variant="outline">Cancel</Button>} />
          <Dialog.Close render={<Button>Continue</Button>} />
        </>}>
      <p className="text-sm">Anything you put inside renders in the body.</p>
    </SimpleDialog>
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <SimpleDialog trigger={<Button variant="destructive">Delete account</Button>} title="Delete account?" description="This action is permanent. Your data will be unrecoverable." footer={<>
          <Dialog.Close render={<Button variant="outline">Cancel</Button>} />
          <Dialog.Close render={<Button variant="destructive">Delete</Button>} />
        </>} />
}`,...C.parameters?.docs?.source}}},w=[`Default`,`WithForm`,`Simple`,`SimpleConfirm`]})))()}T();export{b as Default,S as Simple,C as SimpleConfirm,x as WithForm,w as __namedExportsOrder,y as default};