"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2468],{79205:function(e,r,t){t.d(r,{Z:function(){return u}});var i=t(2265);let a=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),n=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,t)=>t?t.toUpperCase():r.toLowerCase()),o=e=>{let r=n(e);return r.charAt(0).toUpperCase()+r.slice(1)},l=function(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];return r.filter((e,r,t)=>!!e&&""!==e.trim()&&t.indexOf(e)===r).join(" ").trim()},s=e=>{for(let r in e)if(r.startsWith("aria-")||"role"===r||"title"===r)return!0};var c={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let d=(0,i.forwardRef)((e,r)=>{let{color:t="currentColor",size:a=24,strokeWidth:n=2,absoluteStrokeWidth:o,className:d="",children:u,iconNode:p,...h}=e;return(0,i.createElement)("svg",{ref:r,...c,width:a,height:a,stroke:t,strokeWidth:o?24*Number(n)/Number(a):n,className:l("lucide",d),...!u&&!s(h)&&{"aria-hidden":"true"},...h},[...p.map(e=>{let[r,t]=e;return(0,i.createElement)(r,t)}),...Array.isArray(u)?u:[u]])}),u=(e,r)=>{let t=(0,i.forwardRef)((t,n)=>{let{className:s,...c}=t;return(0,i.createElement)(d,{ref:n,iconNode:r,className:l("lucide-".concat(a(o(e))),"lucide-".concat(e),s),...c})});return t.displayName=o(e),t}},99388:function(e,r,t){t.d(r,{Z:function(){return i}});let i=(0,t(79205).Z)("circle-x",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]])},72468:function(e,r,t){t.r(r),t.d(r,{EmbeddedWalletOnAccountCreateScreen:function(){return h},EmbeddedWalletOnAccountCreateView:function(){return p},default:function(){return h}});var i=t(57437),a=t(99388),n=t(2265);async function o(e,r){let t=`${e}-auto-${"ethereum"===r?"eth":"sol"}`,i=(new TextEncoder).encode(t);return Array.from(new Uint8Array(await crypto.subtle.digest("SHA-256",i))).map(e=>e.toString(16).padStart(2,"0")).join("")}var l=t(89660),s=t(27296),c=t(71554),d=t(75599),u=t(31870);t(29155),t(87336),t(97048),t(64131),t(84250);let p=({errorMessage:e,onClose:r})=>(0,i.jsx)(u.S,e?{title:"Something went wrong",subtitle:e,icon:a.Z,iconVariant:"error",primaryCta:{label:"Close",onClick:r},watermark:!0}:{title:"Creating your wallet",subtitle:"Please wait...",iconVariant:"loading",watermark:!1}),h={component:()=>{let{setModalData:e,navigate:r,data:t,onUserCloseViaDialogOrKeybindRef:a}=(0,d.a)(),u=(0,l.u)(),[h,g]=(0,n.useState)(""),{embeddedWallets:v}=(0,l.u)(),{authenticated:x,user:f}=(0,d.u)(),{closePrivyModal:m,walletProxy:y,client:b}=(0,c.u)(),{onSuccess:w,onFailure:j,callAuthOnSuccessOnClose:k,shouldCreateEth:z,shouldCreateSol:C}=t.createWallet,S="legacy-embedded-wallets-only"===u.embeddedWallets.mode&&!0===u?.embeddedWallets.requireUserOwnedRecoveryOnCreate,[E,A]=(0,n.useState)(null),{create:W}=(0,s.v)(),$=z??(!!f&&(0,s.s)(f,u.embeddedWallets.ethereum.createOnLogin)),O=C??(!!f&&(0,s.k)(f,u.embeddedWallets.solana.createOnLogin)),F=new s.R(async()=>{let e=await b.getAccessToken();if(f&&e&&y)try{let e,t=await o(f.id,"ethereum"),i=await o(f.id,"solana");if($&&O)e=await W({chainType:"ethereum",walletIndex:0,latestUser:f,idempotencyKey:t}),e=await W({chainType:"solana",walletIndex:0,latestUser:e.user,idempotencyKey:i});else if(O)e=await W({chainType:"solana",walletIndex:0,latestUser:f,idempotencyKey:i});else{if(!$)return void m({shouldCallAuthOnSuccess:k});e=await W({chainType:"ethereum",walletIndex:0,latestUser:f,idempotencyKey:t})}A(e),r("EmbeddedWalletCreatedScreen")}catch(e){g(e.message)}});return(0,n.useEffect)(()=>x&&f?S?(e({...t,createWallet:{...t.createWallet,shouldCreateEth:$,shouldCreateSol:O},recoverySelection:{...t?.recoverySelection,isInAccountCreateFlow:!0,shouldCreateEth:$,shouldCreateSol:O}}),r((0,s.F)({walletAction:"create",showAutomaticRecovery:!1,availableRecoveryMethods:v.userOwnedRecoveryOptions,legacySetWalletPasswordFlow:!1,isResettingPassword:!1}))):void F.execute():(r("LandingScreen"),void j(Error("User must be authenticated before creating a Privy wallet"))),[S,x]),a.current=()=>null,(0,i.jsx)(p,{errorMessage:h||void 0,onClose:()=>{E?(w(E),m({shouldCallAuthOnSuccess:k})):(j(new c.m("User wallet creation failed")),m({shouldCallAuthOnSuccess:!1}))}})}}},64630:function(e,r,t){t.d(r,{S:function(){return j}});var i=t(57437),a=t(2265),n=t(1801),o=t(41884),l=t(38992),s=t(20278);let c=n.zo.div`
  /* spacing tokens */
  --screen-space: 16px; /* base 1x = 16 */
  --screen-space-lg: calc(var(--screen-space) * 1.5); /* 24px */

  position: relative;
  overflow: hidden;
  margin: 0 calc(-1 * var(--screen-space)); /* extends over modal padding */
  height: 100%;
  border-radius: var(--privy-border-radius-lg);
`,d=n.zo.div`
  display: flex;
  flex-direction: column;
  gap: calc(var(--screen-space) * 1.5);
  width: 100%;
  background: var(--privy-color-background);
  padding: 0 var(--screen-space-lg) var(--screen-space);
  height: 100%;
  border-radius: var(--privy-border-radius-lg);
`,u=n.zo.div`
  position: relative;
  display: flex;
  flex-direction: column;
`,p=(0,n.zo)(l.M)`
  margin: 0 -8px;
`,h=n.zo.div`
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
`,g=n.zo.div`
  display: flex;
  flex-direction: column;
  gap: var(--screen-space-lg);
`,v=n.zo.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--screen-space);
`,x=n.zo.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,f=n.zo.h3`
  && {
    font-size: 20px;
    line-height: 32px;
    font-weight: 500;
    color: var(--privy-color-foreground);
    margin: 0;
  }
`,m=n.zo.p`
  && {
    margin: 0;
    font-size: 16px;
    font-weight: 300;
    line-height: 24px;
    color: var(--privy-color-foreground);
  }
`,y=n.zo.div`
  background: ${({$variant:e})=>{switch(e){case"success":return"var(--privy-color-success-bg, #EAFCEF)";case"warning":return"var(--privy-color-warn, #FEF3C7)";case"error":return"var(--privy-color-error-bg, #FEE2E2)";case"loading":case"logo":return"transparent";default:return"var(--privy-color-background-2)"}}};

  border-radius: 50%;
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
`,b=n.zo.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img,
  svg {
    max-height: 90px;
    max-width: 180px;
  }
`,w=n.zo.div`
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
`,j=({children:e,...r})=>(0,i.jsx)(c,{children:(0,i.jsx)(d,{...r,children:e})}),k=n.zo.div`
  position: absolute;
  top: 0;
  left: calc(-1 * var(--screen-space-lg));
  width: calc(100% + calc(var(--screen-space-lg) * 2));
  height: 4px;
  background: var(--privy-color-background-2);
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
  overflow: hidden;
`,z=(0,n.zo)(l.B)`
  padding: 0;
  && a {
    padding: 0;
    color: var(--privy-color-foreground-3);
  }
`,C=n.zo.div`
  height: 100%;
  width: ${({pct:e})=>e}%;
  background: var(--privy-color-foreground-3);
  border-radius: 2px;
  transition: width 300ms ease-in-out;
`,S=({step:e})=>e?(0,i.jsx)(k,{children:(0,i.jsx)(C,{pct:Math.min(100,e.current/e.total*100)})}):null;j.Header=({title:e,subtitle:r,icon:t,iconVariant:a,iconLoadingStatus:n,showBack:o,onBack:l,showInfo:s,onInfo:c,showClose:d,onClose:h,step:g,...y})=>(0,i.jsxs)(u,{...y,children:[(0,i.jsx)(p,{backFn:o?l:void 0,infoFn:s?c:void 0,onClose:d?h:void 0,closeable:d}),(t||a||e||r)&&(0,i.jsxs)(v,{children:[t||a?(0,i.jsx)(j.Icon,{icon:t,variant:a,loadingStatus:n}):null,!(!e&&!r)&&(0,i.jsxs)(x,{children:[e&&(0,i.jsx)(f,{children:e}),r&&(0,i.jsx)(m,{children:r})]})]}),g&&(0,i.jsx)(S,{step:g})]}),(j.Body=a.forwardRef(({children:e,...r},t)=>(0,i.jsx)(h,{ref:t,...r,children:e}))).displayName="Screen.Body",j.Footer=({children:e,...r})=>(0,i.jsx)(g,{id:"privy-content-footer-container",...r,children:e}),j.Actions=({children:e,...r})=>(0,i.jsx)(E,{...r,children:e}),j.HelpText=({children:e,...r})=>(0,i.jsx)(A,{...r,children:e}),j.Watermark=()=>(0,i.jsx)(z,{}),j.Icon=({icon:e,variant:r="subtle",loadingStatus:t})=>"logo"===r&&e?(0,i.jsx)(b,"string"==typeof e?{children:(0,i.jsx)("img",{src:e,alt:""})}:a.isValidElement(e)?{children:e}:{children:a.createElement(e)}):"loading"===r?e?(0,i.jsx)(w,{children:(0,i.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:[(0,i.jsx)(o.a4,{success:t?.success,fail:t?.fail}),"string"==typeof e?(0,i.jsx)("span",{style:{background:`url('${e}') 0 0 / contain`,height:"38px",width:"38px",borderRadius:"6px",margin:"auto",backgroundSize:"contain"}}):a.isValidElement(e)?a.cloneElement(e,{style:{width:"38px",height:"38px"}}):a.createElement(e,{style:{width:"38px",height:"38px"}})]})}):(0,i.jsx)(y,{$variant:r,children:(0,i.jsx)(s.N,{size:"64px"})}):(0,i.jsx)(y,{$variant:r,children:e&&("string"==typeof e?(0,i.jsx)("img",{src:e,alt:"",style:{width:"32px",height:"32px",borderRadius:"6px"}}):a.isValidElement(e)?e:a.createElement(e,{width:32,height:32,stroke:(()=>{switch(r){case"success":return"var(--privy-color-icon-success)";case"warning":return"var(--privy-color-icon-warning)";case"error":return"var(--privy-color-icon-error)";default:return"var(--privy-color-icon-muted)"}})(),strokeWidth:2}))});let E=n.zo.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: calc(var(--screen-space) / 2);
`,A=n.zo.div`
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
`},31870:function(e,r,t){t.d(r,{S:function(){return o}});var i=t(57437),a=t(38992),n=t(64630);let o=({primaryCta:e,secondaryCta:r,helpText:t,watermark:o=!0,children:l,...s})=>{let c=e||r?(0,i.jsxs)(i.Fragment,{children:[e&&(()=>{let{label:r,...t}=e,n=t.variant||"primary";return(0,i.jsx)(a.a,{...t,variant:n,style:{width:"100%",...t.style},children:r})})(),r&&(()=>{let{label:e,...t}=r,n=t.variant||"secondary";return(0,i.jsx)(a.a,{...t,variant:n,style:{width:"100%",...t.style},children:e})})()]}):null;return(0,i.jsxs)(n.S,{id:s.id,className:s.className,children:[(0,i.jsx)(n.S.Header,{...s}),l?(0,i.jsx)(n.S.Body,{children:l}):null,t||c||o?(0,i.jsxs)(n.S.Footer,{children:[t?(0,i.jsx)(n.S.HelpText,{children:t}):null,c?(0,i.jsx)(n.S.Actions,{children:c}):null,o?(0,i.jsx)(n.S.Watermark,{}):null]}):null]})}},20278:function(e,r,t){t.d(r,{N:function(){return n}});var i=t(57437),a=t(1801);let n=({size:e,centerIcon:r})=>(0,i.jsx)(o,{$size:e,children:(0,i.jsxs)(l,{children:[(0,i.jsx)(c,{}),(0,i.jsx)(d,{}),r?(0,i.jsx)(s,{children:r}):null]})}),o=a.zo.div`
  --spinner-size: ${e=>e.$size?e.$size:"96px"};

  display: inline-flex;
  justify-content: center;
  align-items: center;

  @media all and (display-mode: standalone) {
    margin-bottom: 30px;
  }
`,l=a.zo.div`
  position: relative;
  height: var(--spinner-size);
  width: var(--spinner-size);

  opacity: 1;
  animation: fadein 200ms ease;
`,s=a.zo.div`
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
`,c=a.zo.div`
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
`,d=a.zo.div`
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
`}}]);