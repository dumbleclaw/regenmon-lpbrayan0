"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7577],{81801:function(e,r,n){var i=n(2265);let t=i.forwardRef(function(e,r){let{title:n,titleId:t,...o}=e;return i.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:r,"aria-labelledby":t},o),n?i.createElement("title",{id:t},n):null,i.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m19.5 8.25-7.5 7.5-7.5-7.5"}))});r.Z=t},47842:function(e,r,n){var i=n(2265);let t=i.forwardRef(function(e,r){let{title:n,titleId:t,...o}=e;return i.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:r,"aria-labelledby":t},o),n?i.createElement("title",{id:t},n):null,i.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"}))});r.Z=t},49227:function(e,r,n){n.d(r,{Q:function(){return t}});var i=n(50242);function t(e){let r=e.filter(e=>!i.e.has(e.id));return i.B.concat(r)}},60683:function(e,r,n){n.d(r,{B:function(){return t},C:function(){return l},F:function(){return c},H:function(){return a},R:function(){return h},S:function(){return u},a:function(){return d},b:function(){return p},c:function(){return s},d:function(){return x},e:function(){return o}});var i=n(1801);let t=i.zo.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  margin-top: auto;
  gap: 16px;
  flex-grow: 100;
`,o=i.zo.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  width: 100%;
`,a=i.zo.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`,l=(0,i.zo)(o)`
  padding: 20px 0;
`,s=(0,i.zo)(o)`
  gap: 16px;
`,c=i.zo.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`,d=i.zo.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;i.zo.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;let u=i.zo.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  text-align: left;
  gap: 8px;
  padding: 16px;
  margin-top: 16px;
  margin-bottom: 16px;
  width: 100%;
  background: var(--privy-color-background-2);
  border-radius: var(--privy-border-radius-md);
  && h4 {
    color: var(--privy-color-foreground-3);
    font-size: 14px;
    text-decoration: underline;
    font-weight: medium;
  }
  && p {
    color: var(--privy-color-foreground-3);
    font-size: 14px;
  }
`,p=i.zo.div`
  height: 16px;
`,h=i.zo.div`
  height: 12px;
`;i.zo.div`
  position: relative;
`;let x=i.zo.div`
  height: ${e=>e.height??"12"}px;
`;i.zo.div`
  background-color: var(--privy-color-accent);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border-color: white;
  border-width: 2px !important;
`},64630:function(e,r,n){n.d(r,{S:function(){return w}});var i=n(57437),t=n(2265),o=n(1801),a=n(41884),l=n(38992),s=n(20278);let c=o.zo.div`
  /* spacing tokens */
  --screen-space: 16px; /* base 1x = 16 */
  --screen-space-lg: calc(var(--screen-space) * 1.5); /* 24px */

  position: relative;
  overflow: hidden;
  margin: 0 calc(-1 * var(--screen-space)); /* extends over modal padding */
  height: 100%;
  border-radius: var(--privy-border-radius-lg);
`,d=o.zo.div`
  display: flex;
  flex-direction: column;
  gap: calc(var(--screen-space) * 1.5);
  width: 100%;
  background: var(--privy-color-background);
  padding: 0 var(--screen-space-lg) var(--screen-space);
  height: 100%;
  border-radius: var(--privy-border-radius-lg);
`,u=o.zo.div`
  position: relative;
  display: flex;
  flex-direction: column;
`,p=(0,o.zo)(l.M)`
  margin: 0 -8px;
`,h=o.zo.div`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;

  /* Enable scrolling */
  overflow-y: auto;

  /* Hide scrollbar but keep functionality when scrollable */
  /* Add padding for focus outline space, offset with negative margin */
  padding: 3px;
  margin: -3px;

  &::-webkit-scrollbar {
    display: none;
  }
  scrollbar-gutter: stable both-edges;
  scrollbar-width: none;
  -ms-overflow-style: none;

  /* Gradient effect for scroll indication */
  ${({$colorScheme:e})=>"light"===e?"background: linear-gradient(var(--privy-color-background), var(--privy-color-background) 70%) bottom, linear-gradient(rgba(0, 0, 0, 0) 20%, rgba(0, 0, 0, 0.06)) bottom;":"dark"===e?"background: linear-gradient(var(--privy-color-background), var(--privy-color-background) 70%) bottom, linear-gradient(rgba(255, 255, 255, 0) 20%, rgba(255, 255, 255, 0.06)) bottom;":void 0}

  background-repeat: no-repeat;
  background-size:
    100% 32px,
    100% 16px;
  background-attachment: local, scroll;
`,x=o.zo.div`
  display: flex;
  flex-direction: column;
  gap: var(--screen-space-lg);
`,f=o.zo.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--screen-space);
`,g=o.zo.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,v=o.zo.h3`
  && {
    font-size: 20px;
    line-height: 32px;
    font-weight: 500;
    color: var(--privy-color-foreground);
    margin: 0;
  }
`,m=o.zo.p`
  && {
    margin: 0;
    font-size: 16px;
    font-weight: 300;
    line-height: 24px;
    color: var(--privy-color-foreground);
  }
`,y=o.zo.div`
  background: ${({$variant:e})=>{switch(e){case"success":return"var(--privy-color-success-bg, #EAFCEF)";case"warning":return"var(--privy-color-warn, #FEF3C7)";case"error":return"var(--privy-color-error-bg, #FEE2E2)";case"loading":case"logo":return"transparent";default:return"var(--privy-color-background-2)"}}};

  border-radius: 50%;
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
`,b=o.zo.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img,
  svg {
    max-height: 90px;
    max-width: 180px;
  }
`,j=o.zo.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 82px;

  > div {
    position: relative;
  }

  > div > :first-child {
    position: relative;
  }

  > div > :last-child {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`,w=({children:e,...r})=>(0,i.jsx)(c,{children:(0,i.jsx)(d,{...r,children:e})}),k=o.zo.div`
  position: absolute;
  top: 0;
  left: calc(-1 * var(--screen-space-lg));
  width: calc(100% + calc(var(--screen-space-lg) * 2));
  height: 4px;
  background: var(--privy-color-background-2);
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
  overflow: hidden;
`,z=(0,o.zo)(l.B)`
  padding: 0;
  && a {
    padding: 0;
    color: var(--privy-color-foreground-3);
  }
`,S=o.zo.div`
  height: 100%;
  width: ${({pct:e})=>e}%;
  background: var(--privy-color-foreground-3);
  border-radius: 2px;
  transition: width 300ms ease-in-out;
`,P=({step:e})=>e?(0,i.jsx)(k,{children:(0,i.jsx)(S,{pct:Math.min(100,e.current/e.total*100)})}):null;w.Header=({title:e,subtitle:r,icon:n,iconVariant:t,iconLoadingStatus:o,showBack:a,onBack:l,showInfo:s,onInfo:c,showClose:d,onClose:h,step:x,...y})=>(0,i.jsxs)(u,{...y,children:[(0,i.jsx)(p,{backFn:a?l:void 0,infoFn:s?c:void 0,onClose:d?h:void 0,closeable:d}),(n||t||e||r)&&(0,i.jsxs)(f,{children:[n||t?(0,i.jsx)(w.Icon,{icon:n,variant:t,loadingStatus:o}):null,!(!e&&!r)&&(0,i.jsxs)(g,{children:[e&&(0,i.jsx)(v,{children:e}),r&&(0,i.jsx)(m,{children:r})]})]}),x&&(0,i.jsx)(P,{step:x})]}),(w.Body=t.forwardRef(({children:e,...r},n)=>(0,i.jsx)(h,{ref:n,...r,children:e}))).displayName="Screen.Body",w.Footer=({children:e,...r})=>(0,i.jsx)(x,{id:"privy-content-footer-container",...r,children:e}),w.Actions=({children:e,...r})=>(0,i.jsx)(E,{...r,children:e}),w.HelpText=({children:e,...r})=>(0,i.jsx)(C,{...r,children:e}),w.Watermark=()=>(0,i.jsx)(z,{}),w.Icon=({icon:e,variant:r="subtle",loadingStatus:n})=>"logo"===r&&e?(0,i.jsx)(b,"string"==typeof e?{children:(0,i.jsx)("img",{src:e,alt:""})}:t.isValidElement(e)?{children:e}:{children:t.createElement(e)}):"loading"===r?e?(0,i.jsx)(j,{children:(0,i.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:[(0,i.jsx)(a.a4,{success:n?.success,fail:n?.fail}),"string"==typeof e?(0,i.jsx)("span",{style:{background:`url('${e}') 0 0 / contain`,height:"38px",width:"38px",borderRadius:"6px",margin:"auto",backgroundSize:"contain"}}):t.isValidElement(e)?t.cloneElement(e,{style:{width:"38px",height:"38px"}}):t.createElement(e,{style:{width:"38px",height:"38px"}})]})}):(0,i.jsx)(y,{$variant:r,children:(0,i.jsx)(s.N,{size:"64px"})}):(0,i.jsx)(y,{$variant:r,children:e&&("string"==typeof e?(0,i.jsx)("img",{src:e,alt:"",style:{width:"32px",height:"32px",borderRadius:"6px"}}):t.isValidElement(e)?e:t.createElement(e,{width:32,height:32,stroke:(()=>{switch(r){case"success":return"var(--privy-color-icon-success)";case"warning":return"var(--privy-color-icon-warning)";case"error":return"var(--privy-color-icon-error)";default:return"var(--privy-color-icon-muted)"}})(),strokeWidth:2}))});let E=o.zo.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: calc(var(--screen-space) / 2);
`,C=o.zo.div`
  && {
    margin: 0;
    width: 100%;
    text-align: center;
    color: var(--privy-color-foreground-3);
    font-size: 14px;
    line-height: 22px;

    & a {
      color: var(--privy-color-accent);
    }
  }
`},31870:function(e,r,n){n.d(r,{S:function(){return a}});var i=n(57437),t=n(38992),o=n(64630);let a=({primaryCta:e,secondaryCta:r,helpText:n,watermark:a=!0,children:l,...s})=>{let c=e||r?(0,i.jsxs)(i.Fragment,{children:[e&&(()=>{let{label:r,...n}=e,o=n.variant||"primary";return(0,i.jsx)(t.a,{...n,variant:o,style:{width:"100%",...n.style},children:r})})(),r&&(()=>{let{label:e,...n}=r,o=n.variant||"secondary";return(0,i.jsx)(t.a,{...n,variant:o,style:{width:"100%",...n.style},children:e})})()]}):null;return(0,i.jsxs)(o.S,{id:s.id,className:s.className,children:[(0,i.jsx)(o.S.Header,{...s}),l?(0,i.jsx)(o.S.Body,{children:l}):null,n||c||a?(0,i.jsxs)(o.S.Footer,{children:[n?(0,i.jsx)(o.S.HelpText,{children:n}):null,c?(0,i.jsx)(o.S.Actions,{children:c}):null,a?(0,i.jsx)(o.S.Watermark,{}):null]}):null]})}},33657:function(e,r,n){n.d(r,{T:function(){return A}});var i=n(57437),t=n(1801),o=n(27692),a=n(20166),l=n(60683),s=n(81801),c=n(2265),d=n(89660);let u=({label:e,children:r,valueStyles:n})=>(0,i.jsxs)(p,{children:[(0,i.jsx)("div",{children:e}),(0,i.jsx)(h,{style:{...n},children:r})]}),p=t.zo.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  > :first-child {
    color: var(--privy-color-foreground-3);
    text-align: left;
  }

  > :last-child {
    color: var(--privy-color-foreground-2);
    text-align: right;
  }
`,h=t.zo.div`
  font-size: 14px;
  line-height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--privy-border-radius-full);
  background-color: var(--privy-color-background-2);
  padding: 4px 8px;
`,x=({gas:e,tokenPrice:r,tokenSymbol:n})=>(0,i.jsxs)(l.F,{style:{paddingBottom:"12px"},children:[(0,i.jsxs)(g,{children:[(0,i.jsx)(m,{children:"Est. Fees"}),(0,i.jsx)("div",{children:(0,i.jsx)(o.P,{weiQuantities:[BigInt(e)],tokenPrice:r,tokenSymbol:n})})]}),r&&(0,i.jsx)(v,{children:`${(0,a.g)(BigInt(e),n)}`})]}),f=({value:e,gas:r,tokenPrice:n,tokenSymbol:t})=>{let s=BigInt(e??0)+BigInt(r);return(0,i.jsxs)(l.F,{children:[(0,i.jsxs)(g,{children:[(0,i.jsx)(m,{children:"Total (including fees)"}),(0,i.jsx)("div",{children:(0,i.jsx)(o.P,{weiQuantities:[BigInt(e||0),BigInt(r)],tokenPrice:n,tokenSymbol:t})})]}),n&&(0,i.jsx)(v,{children:(0,a.g)(s,t)})]})},g=t.zo.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: 4px;
`,v=t.zo.div`
  display: flex;
  flex-direction: row;
  height: 12px;

  font-size: 12px;
  line-height: 12px;
  color: var(--privy-color-foreground-3);
  font-weight: 400;
`,m=t.zo.div`
  font-size: 14px;
  line-height: 22.4px;
  font-weight: 400;
`,y=(0,c.createContext)(void 0),b=(0,c.createContext)(void 0),j=({defaultValue:e,children:r})=>{let[n,t]=(0,c.useState)(e||null);return(0,i.jsx)(y.Provider,{value:{activePanel:n,togglePanel:e=>{t(n===e?null:e)}},children:(0,i.jsx)(P,{children:r})})},w=({value:e,children:r})=>{let{activePanel:n,togglePanel:t}=(0,c.useContext)(y),o=n===e;return(0,i.jsx)(b.Provider,{value:{onToggle:()=>t(e),value:e},children:(0,i.jsx)($,{isActive:o?"true":"false","data-open":String(o),children:r})})},k=({children:e})=>{let{activePanel:r}=(0,c.useContext)(y),{onToggle:n,value:t}=(0,c.useContext)(b),o=r===t;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(E,{onClick:n,"data-open":String(o),children:[(0,i.jsx)(F,{children:e}),(0,i.jsx)(T,{isactive:o?"true":"false",children:(0,i.jsx)(s.Z,{height:"16px",width:"16px",strokeWidth:"2"})})]}),(0,i.jsx)(C,{})]})},z=({children:e})=>{let{activePanel:r}=(0,c.useContext)(y),{value:n}=(0,c.useContext)(b);return(0,i.jsx)(B,{"data-open":String(r===n),children:(0,i.jsx)(L,{children:e})})},S=({children:e})=>{let{activePanel:r}=(0,c.useContext)(y),{value:n}=(0,c.useContext)(b);return(0,i.jsx)(L,{children:"function"==typeof e?e({isActive:r===n}):e})},P=t.zo.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 8px;
`,E=t.zo.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  cursor: pointer;
  padding-bottom: 8px;
`,C=t.zo.div`
  width: 100%;

  && {
    border-top: 1px solid;
    border-color: var(--privy-color-foreground-4);
  }
  padding-bottom: 12px;
`,F=t.zo.div`
  font-size: 14px;
  font-weight: 500;
  line-height: 19.6px;
  width: 100%;
  padding-right: 8px;
`,$=t.zo.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: hidden;
  padding: 12px;

  && {
    border: 1px solid;
    border-color: var(--privy-color-foreground-4);
    border-radius: var(--privy-border-radius-md);
  }
`,B=t.zo.div`
  position: relative;
  overflow: hidden;
  transition: max-height 25ms ease-out;

  &[data-open='true'] {
    max-height: 700px;
  }

  &[data-open='false'] {
    max-height: 0;
  }
`,L=t.zo.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex: 1 1 auto;
  min-height: 1px;
`,T=t.zo.div`
  transform: ${e=>"true"===e.isactive?"rotate(180deg)":"rotate(0deg)"};
`,A=({from:e,to:r,txn:n,transactionInfo:t,tokenPrice:a,gas:l,tokenSymbol:s})=>{let c=BigInt(n?.value||0);return(0,i.jsx)(j,{...(0,d.u)().render.standalone?{defaultValue:"details"}:{},children:(0,i.jsxs)(w,{value:"details",children:[(0,i.jsx)(k,{children:(0,i.jsxs)(I,{children:[(0,i.jsx)("div",{children:t?.title||"Details"}),(0,i.jsx)(D,{children:(0,i.jsx)(o.H,{weiQuantities:[c],tokenPrice:a,tokenSymbol:s})})]})}),(0,i.jsxs)(z,{children:[(0,i.jsx)(u,{label:"From",children:(0,i.jsx)(o.W,{walletAddress:e,chainId:n.chainId||d.s,chainType:"ethereum"})}),(0,i.jsx)(u,{label:"To",children:(0,i.jsx)(o.W,{walletAddress:r,chainId:n.chainId||d.s,chainType:"ethereum"})}),t&&t.action&&(0,i.jsx)(u,{label:"Action",children:t.action}),l&&(0,i.jsx)(x,{value:n.value,gas:l,tokenPrice:a,tokenSymbol:s})]}),(0,i.jsx)(S,{children:({isActive:e})=>(0,i.jsx)(f,{value:n.value,displayFee:e,gas:l||"0x0",tokenPrice:a,tokenSymbol:s})})]})})},I=t.zo.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`,D=t.zo.div`
  flex-shrink: 0;
  padding-left: 8px;
`},27692:function(e,r,n){n.d(r,{H:function(){return d},P:function(){return u},S:function(){return p},W:function(){return v}});var i=n(57437),t=n(1801),o=n(39502),a=n(20166),l=n(36672),s=n(60164),c=n(41884);let d=({weiQuantities:e,tokenPrice:r,tokenSymbol:n})=>{let t=(0,a.s)(e),o=r?(0,a.a)(t,r):void 0,l=(0,a.g)(t,n);return(0,i.jsx)(h,{children:o||l})},u=({weiQuantities:e,tokenPrice:r,tokenSymbol:n})=>{let t=(0,a.s)(e),o=r?(0,a.a)(t,r):void 0,l=(0,a.g)(t,n);return(0,i.jsx)(h,{children:o?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(x,{children:"USD"}),"<$0.01"===o?(0,i.jsxs)(g,{children:[(0,i.jsx)(f,{children:"<"}),"$0.01"]}):o]}):l})},p=({quantities:e,tokenPrice:r,tokenSymbol:n="SOL",tokenDecimals:t=9})=>{let a=e.reduce((e,r)=>e+r,0n),c=r&&"SOL"===n&&9===t?(0,l.g)(a,r):void 0,d="SOL"===n&&9===t?(0,s.g)(a):`${(0,o.b)(a,t)} ${n}`;return(0,i.jsx)(h,{children:c?(0,i.jsx)(i.Fragment,{children:"<$0.01"===c?(0,i.jsxs)(g,{children:[(0,i.jsx)(f,{children:"<"}),"$0.01"]}):c}):d})},h=t.zo.span`
  font-size: 14px;
  line-height: 140%;
  display: flex;
  gap: 4px;
  align-items: center;
`,x=t.zo.span`
  font-size: 12px;
  line-height: 12px;
  color: var(--privy-color-foreground-3);
`,f=t.zo.span`
  font-size: 10px;
`,g=t.zo.span`
  display: flex;
  align-items: center;
`,v=e=>{var r,n;return(0,i.jsx)(m,{href:"ethereum"===e.chainType?(0,a.b)(e.chainId,e.walletAddress):(r=e.walletAddress,n=e.chainId,`https://explorer.solana.com/account/${r}?chain=${n}`),target:"_blank",children:(0,c.D)(e.walletAddress)})},m=t.zo.a`
  &:hover {
    text-decoration: underline;
  }
`},20166:function(e,r,n){n.d(r,{a:function(){return c},b:function(){return h},c:function(){return s},g:function(){return d},p:function(){return u},s:function(){return p}});var i=n(71282),t=n(71554),o=n(41884);let a=new Intl.NumberFormat(void 0,{style:"currency",currency:"USD",maximumFractionDigits:2}),l=e=>a.format(e),s=(e,r)=>{let n=l(r*parseFloat(e));return"$0.00"!==n?n:"<$0.01"},c=(e,r)=>{let n=l(r*parseFloat((0,i.d)(e)));return"$0.00"===n?"<$0.01":n},d=(e,r,n=6,i=!1)=>`${u(e,n,i)} ${r}`,u=(e,r=6,n=!1)=>{let t=parseFloat((0,i.d)(e)).toFixed(r).replace(/0+$/,"").replace(/\.$/,"");return n?t:`${"0"===t?"<0.001":t}`},p=e=>e.reduce((e,r)=>e+r,0n),h=(e,r)=>{let{chains:n}=(0,t.u)(),i=`https://etherscan.io/address/${r}`,a=`${(0,o.a5)(e,n)}/address/${r}`;if(!a)return i;try{new URL(a)}catch{return i}return a}},36672:function(e,r,n){n.d(r,{A:function(){return l},D:function(){return d},J:function(){return c},L:function(){return i},R:function(){return s},S:function(){return t},T:function(){return o},a:function(){return a},g:function(){return u}});let i=1e9,t="11111111111111111111111111111111",o="TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",a="TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb",l="ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL",s=["CPMMoo8L3F4NbTegBCKVNunggL7H1ZpdTHKxQB5qKP1C","CPMDWBwJDtYax9qW7AyRuVC19Cc4L4Vcy4n2BHAbHkCW"],c=["JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4"],d={"solana:mainnet":{EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v:{symbol:"USDC",decimals:6,address:"EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v"},Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB:{symbol:"USDT",decimals:6,address:"Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB"},So11111111111111111111111111111111111111112:{symbol:"SOL",decimals:9,address:"So11111111111111111111111111111111111111112"}},"solana:devnet":{"4zMMC9srt5Ri5X14GAgXhaHii3GnPAEERYPJgZJDncDU":{symbol:"USDC",decimals:6,address:"4zMMC9srt5Ri5X14GAgXhaHii3GnPAEERYPJgZJDncDU"},EJwZgeZrdC8TXTQbQBoL6bfuAnFUUy1PVCMB4DYPzVaS:{symbol:"USDT",decimals:6,address:"EJwZgeZrdC8TXTQbQBoL6bfuAnFUUy1PVCMB4DYPzVaS"},So11111111111111111111111111111111111111112:{symbol:"SOL",decimals:9,address:"So11111111111111111111111111111111111111112"}},"solana:testnet":{}};function u(e,r){let n=parseFloat(e.toString())/i,t=p.format(r*n);return"$0.00"===t?"<$0.01":t}let p=new Intl.NumberFormat(void 0,{style:"currency",currency:"USD",maximumFractionDigits:2})},20278:function(e,r,n){n.d(r,{N:function(){return o}});var i=n(57437),t=n(1801);let o=({size:e,centerIcon:r})=>(0,i.jsx)(a,{$size:e,children:(0,i.jsxs)(l,{children:[(0,i.jsx)(c,{}),(0,i.jsx)(d,{}),r?(0,i.jsx)(s,{children:r}):null]})}),a=t.zo.div`
  --spinner-size: ${e=>e.$size?e.$size:"96px"};

  display: inline-flex;
  justify-content: center;
  align-items: center;

  @media all and (display-mode: standalone) {
    margin-bottom: 30px;
  }
`,l=t.zo.div`
  position: relative;
  height: var(--spinner-size);
  width: var(--spinner-size);

  opacity: 1;
  animation: fadein 200ms ease;
`,s=t.zo.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  svg,
  img {
    width: calc(var(--spinner-size) * 0.4);
    height: calc(var(--spinner-size) * 0.4);
    border-radius: var(--privy-border-radius-full);
  }
`,c=t.zo.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: var(--spinner-size);
  height: var(--spinner-size);

  && {
    border: 4px solid var(--privy-color-border-default);
    border-radius: 50%;
  }
`,d=t.zo.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: var(--spinner-size);
  height: var(--spinner-size);
  animation: spin 1200ms linear infinite;

  && {
    border: 4px solid;
    border-color: var(--privy-color-icon-subtle) transparent transparent transparent;
    border-radius: 50%;
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`},60164:function(e,r,n){n.d(r,{a:function(){return o},g:function(){return t}});var i=n(36672);function t(e,r=6,n=!1,i=!1){let t=(parseFloat(e.toString())/1e9).toFixed(r).replace(/0+$/,"").replace(/\.$/,""),o=i?"":" SOL";return n?`${t}${o}`:`${"0"===t?"<0.001":t}${o}`}function o({amount:e,fee:r,tokenPrice:n,isUsdc:o}){let a=BigInt(Math.floor(parseFloat(e)*10**(o?6:9))),l=o?a:a+r;return{fundingAmountInBaseUnit:a,fundingAmountInUsd:n?(0,i.g)(a,n):void 0,totalPriceInUsd:n?(0,i.g)(l,n):void 0,totalPriceInNativeCurrency:t(l),feePriceInNativeCurrency:t(r),feePriceInUsd:n?(0,i.g)(r,n):void 0}}},48723:function(e,r,n){n.d(r,{u:function(){return o}});var i=n(2265),t=n(71554);let o=({enabled:e=!0}={})=>{let{showFiatPrices:r,getUsdPriceForSol:n}=(0,t.u)(),[o,a]=(0,i.useState)(!0),[l,s]=(0,i.useState)(void 0),[c,d]=(0,i.useState)(void 0);return(0,i.useEffect)(()=>{(async()=>{if(r&&e)try{a(!0);let e=await n();e?d(e):s(Error("Unable to fetch SOL price"))}catch(e){s(e)}finally{a(!1)}else a(!1)})()},[]),{solPrice:c,isSolPriceLoading:o,solPriceError:l}}},12485:function(e,r,n){n.d(r,{u:function(){return s}});var i=n(2265),t=n(49227),o=n(89660),a=n(71554),l=n(48723);function s(e){let{tokenPrice:r,isTokenPriceLoading:n,tokenPriceError:s}=(e=>{let{showFiatPrices:r,getUsdTokenPrice:n,chains:l}=(0,a.u)(),[s,c]=(0,i.useState)(!0),[d,u]=(0,i.useState)(void 0),[p,h]=(0,i.useState)(void 0);return(0,i.useEffect)(()=>{e||=o.s;let i=(0,t.Q)(l).find(r=>r.id===Number(e));(async()=>{if(r){if(!i)return c(!1),void u(Error(`Unable to fetch token price on chain id ${e}`));try{c(!0);let e=await n(i);e?h(e):u(Error(`Unable to fetch token price on chain id ${i.id}`))}catch(e){u(e)}finally{c(!1)}}else c(!1)})()},[e]),{tokenPrice:p,isTokenPriceLoading:s,tokenPriceError:d}})("solana"===e?-1:e),{solPrice:c,isSolPriceLoading:d,solPriceError:u}=(0,l.u)({enabled:"solana"===e});return"solana"===e?{tokenPrice:c,isTokenPriceLoading:d,tokenPriceError:u}:{tokenPrice:r,isTokenPriceLoading:n,tokenPriceError:s}}}}]);