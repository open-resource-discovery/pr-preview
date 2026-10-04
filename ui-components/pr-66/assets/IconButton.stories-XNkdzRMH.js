import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-DiVRNtpo.js";import{a as n}from"./iframe-BfRHCllG.js";import{n as r,t as i}from"./IconButton-CwX2z5My.js";var a,o,s,c,l,u,d,f,p;function m(){return(m=e((()=>{a=t(),r(),o=n(),s=(0,o.jsx)(`svg`,{"aria-hidden":`true`,viewBox:`0 0 24 24`,width:`16`,height:`16`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:(0,o.jsx)(`path`,{d:`M11.5 2.8 14 8l5.7.8-4.1 4 1 5.7-5.1-2.7-5.1 2.7 1-5.7-4.1-4L9 8Z`})}),c=(0,o.jsx)(`svg`,{"aria-hidden":`true`,viewBox:`0 0 24 24`,width:`16`,height:`16`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:(0,o.jsx)(`path`,{d:`M20 6 9 17l-5-5`})}),l={title:`Metadata UI/IconButton`,component:i,parameters:{layout:`centered`},tags:[`autodocs`]},u={args:{icon:s,label:`Favourite`}},d={args:{icon:s,activeIcon:c,label:`Favourite`,variant:`ghost`,size:`icon`},render:e=>{let[t,n]=(0,a.useState)(!1),r=(0,a.useRef)(void 0);return(0,a.useEffect)(()=>()=>clearTimeout(r.current),[]),(0,o.jsx)(i,{...e,active:t,label:t?`Favourited`:`Favourite`,onClick:()=>{n(!0),clearTimeout(r.current),r.current=setTimeout(()=>n(!1),2e3)}})}},f={args:{icon:s,label:`Favourite`,variant:`outline`,size:`sm`}},p=[`Default`,`TwoIcons`,`Outline`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    icon: StarIcon,
    label: 'Favourite'
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    icon: StarIcon,
    activeIcon: CheckIcon,
    label: 'Favourite',
    variant: 'ghost',
    size: 'icon'
  },
  render: args => {
    const [active, setActive] = useState(false);
    const timer = useRef<ReturnType<typeof setTimeout>>(undefined);
    useEffect(() => () => clearTimeout(timer.current), []);
    return <IconButton {...args} active={active} label={active ? 'Favourited' : 'Favourite'} onClick={() => {
      setActive(true);
      clearTimeout(timer.current);
      timer.current = setTimeout(() => setActive(false), 2000);
    }} />;
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    icon: StarIcon,
    label: 'Favourite',
    variant: 'outline',
    size: 'sm'
  }
}`,...f.parameters?.docs?.source}}}})))()}m();export{u as Default,f as Outline,d as TwoIcons,p as __namedExportsOrder,l as default};