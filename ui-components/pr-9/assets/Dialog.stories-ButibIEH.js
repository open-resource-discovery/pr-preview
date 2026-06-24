import{i as e}from"./preload-helper-BolXgPNn.js";import{i as t}from"./iframe-Cy1IM9hb.js";import{n,t as r}from"./button-CECf2mJA.js";import{n as i,t as a}from"./field-D9JUHmMP.js";import{i as o,n as s,t as c}from"./dialog-DBL8CnJp.js";import{n as l,t as u}from"./input-BHNqf3X-.js";import{n as d,t as f}from"./textarea-BTuZdWnX.js";var p,m,h,g,_,v,y;e((()=>{c(),r(),u(),f(),a(),p=t(),m={title:`Components/Dialog`,component:o.Root,parameters:{layout:`centered`,docs:{story:{inline:!1,height:`420px`}}},tags:[`autodocs`]},h={render:()=>(0,p.jsxs)(o.Root,{children:[(0,p.jsx)(o.Trigger,{render:(0,p.jsx)(n,{children:`Open dialog`})}),(0,p.jsxs)(o.Portal,{children:[(0,p.jsx)(o.Backdrop,{}),(0,p.jsxs)(o.Popup,{children:[(0,p.jsx)(o.Title,{children:`Are you sure?`}),(0,p.jsx)(o.Description,{children:`This action cannot be undone. This will permanently delete the connection.`}),(0,p.jsxs)(`div`,{className:`mt-6 flex justify-end gap-2`,children:[(0,p.jsx)(o.Close,{render:(0,p.jsx)(n,{variant:`outline`,children:`Cancel`})}),(0,p.jsx)(o.Close,{render:(0,p.jsx)(n,{variant:`destructive`,children:`Delete`})})]})]})]})]})},g={render:()=>(0,p.jsxs)(o.Root,{children:[(0,p.jsx)(o.Trigger,{render:(0,p.jsx)(n,{children:`Edit profile`})}),(0,p.jsxs)(o.Portal,{children:[(0,p.jsx)(o.Backdrop,{}),(0,p.jsxs)(o.Popup,{children:[(0,p.jsx)(o.Title,{children:`Edit profile`}),(0,p.jsx)(o.Description,{children:`Update your profile details and click save.`}),(0,p.jsxs)(`div`,{className:`mt-4 flex flex-col gap-4`,children:[(0,p.jsxs)(i.Root,{children:[(0,p.jsx)(i.Label,{children:`Name`}),(0,p.jsx)(l,{defaultValue:`Jane Doe`})]}),(0,p.jsxs)(i.Root,{children:[(0,p.jsx)(i.Label,{children:`Bio`}),(0,p.jsx)(d,{defaultValue:`Building things on the open web.`,rows:3})]})]}),(0,p.jsxs)(`div`,{className:`mt-6 flex justify-end gap-2`,children:[(0,p.jsx)(o.Close,{render:(0,p.jsx)(n,{variant:`outline`,children:`Cancel`})}),(0,p.jsx)(o.Close,{render:(0,p.jsx)(n,{children:`Save`})})]})]})]})]})},_={render:()=>(0,p.jsx)(s,{trigger:(0,p.jsx)(n,{children:`Open simple`}),title:`Welcome`,description:`A SimpleDialog wraps the compound parts with a clean API.`,footer:(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(o.Close,{render:(0,p.jsx)(n,{variant:`outline`,children:`Cancel`})}),(0,p.jsx)(o.Close,{render:(0,p.jsx)(n,{children:`Continue`})})]}),children:(0,p.jsx)(`p`,{className:`text-sm`,children:`Anything you put inside renders in the body.`})})},v={render:()=>(0,p.jsx)(s,{trigger:(0,p.jsx)(n,{variant:`destructive`,children:`Delete account`}),title:`Delete account?`,description:`This action is permanent. Your data will be unrecoverable.`,footer:(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(o.Close,{render:(0,p.jsx)(n,{variant:`outline`,children:`Cancel`})}),(0,p.jsx)(o.Close,{render:(0,p.jsx)(n,{variant:`destructive`,children:`Delete`})})]})})},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <SimpleDialog trigger={<Button>Open simple</Button>} title="Welcome" description="A SimpleDialog wraps the compound parts with a clean API." footer={<>
          <Dialog.Close render={<Button variant="outline">Cancel</Button>} />
          <Dialog.Close render={<Button>Continue</Button>} />
        </>}>
      <p className="text-sm">Anything you put inside renders in the body.</p>
    </SimpleDialog>
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <SimpleDialog trigger={<Button variant="destructive">Delete account</Button>} title="Delete account?" description="This action is permanent. Your data will be unrecoverable." footer={<>
          <Dialog.Close render={<Button variant="outline">Cancel</Button>} />
          <Dialog.Close render={<Button variant="destructive">Delete</Button>} />
        </>} />
}`,...v.parameters?.docs?.source}}},y=[`Default`,`WithForm`,`Simple`,`SimpleConfirm`]}))();export{h as Default,_ as Simple,v as SimpleConfirm,g as WithForm,y as __namedExportsOrder,m as default};