"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[602],{10602:function(e,r,t){t.r(r),t.d(r,{CrossAppAuthScreen:function(){return h},CrossAppAuthScreenView:function(){return u},default:function(){return h}});var i=t(57437),n=t(2265),a=t(89660),o=t(27296),s=t(71554),l=t(75599),c=t(41884),d=t(65488),p=t(31870);t(29155),t(87336),t(97048),t(64131),t(84250);let u=({providerApp:e,success:r,error:t,onClose:a})=>{let{title:o,subtitle:s}=(0,n.useMemo)(()=>r?{title:`Successfully connected with ${e.name}`,subtitle:"You're good to go!"}:t?{title:"Authentication failed",subtitle:t.message}:{title:`Connecting to ${e.name}`,subtitle:`Please check the pop-up from ${e.name} to continue`},[r,t,e.name]);return(0,i.jsx)(p.S,{title:o,subtitle:s,icon:e.logoUrl,iconVariant:"loading",iconLoadingStatus:{success:r,fail:!!t},onBack:a,watermark:!0})},h={component:()=>{let e=(0,a.u)(),{data:r,navigate:t,setModalData:p,onUserCloseViaDialogOrKeybindRef:h}=(0,l.a)(),{crossAppAuthFlow:g,updateWallets:v,closePrivyModal:f,createAnalyticsEvent:x}=(0,s.u)(),{logout:m}=(0,c.z)(),[b,y]=(0,n.useState)({}),w=r?.crossAppAuth,j=new s.a(`There was an issue connecting your ${w?.name} account. Please try again.`),z=new o.R(async e=>{if(w?.popup)try{let r=await g({appId:e,popup:w.popup,action:w.action,disableSignup:w.disableSignup});y({data:r})}catch(e){if(e instanceof s.a)y({error:e});else if(e instanceof s.e){if(e.privyErrorCode===s.b.ACCOUNT_TRANSFER_REQUIRED&&e.data?.data?.nonce)return p({accountTransfer:{nonce:e.data?.data?.nonce,account:e.data?.data?.subject,displayName:e.data?.data?.account?.displayName,linkMethod:`privy:${w.appId}`,embeddedWalletAddress:e.data?.data?.otherUser?.embeddedWalletAddress,oAuthUserInfo:e.data?.data?.otherUser?.oAuthUserInfo}}),void t("LinkConflictScreen");w.popup&&w.popup.close(),y({error:j})}else y({error:j})}else y({error:j})}),k=()=>{b.data&&(v(),w?.onSuccess(b.data),f({shouldCallAuthOnSuccess:!0,isSuccess:!0})),w?.onError(b.error??new s.a("User canceled flow")),f({shouldCallAuthOnSuccess:!1,isSuccess:!1})};return h.current=k,(0,n.useEffect)(()=>{w?.appId?.length&&z.execute(w.appId)},[w?.appId]),(0,n.useEffect)(()=>{if(!b.data)return;let r=b.data;if(e.legal.requireUsersAcceptTerms&&!r.hasAcceptedTerms){let e=setTimeout(()=>{t("AffirmativeConsentScreen")},a.q);return()=>clearTimeout(e)}if((0,d.s)(r,e.embeddedWallets)){let e=setTimeout(()=>{p({createWallet:{onSuccess:()=>{},onFailure:e=>{console.error(e),x({eventName:"embedded_wallet_creation_failure_logout",payload:{error:e,provider:`privy:${w?.appId}`,screen:"CrossAppAuthScreen"}}),m()},callAuthOnSuccessOnClose:!0}}),t("EmbeddedWalletOnAccountCreateScreen")},a.q);return()=>clearTimeout(e)}let i=setTimeout(k,a.q);return()=>clearTimeout(i)},[b.data]),w?.appId?(0,i.jsx)(u,{providerApp:{id:w?.appId,logoUrl:w?.logoUrl,name:w?.name},success:!!b.data,error:b.error,onClose:k}):(console.warn("Missing data for Screen"),null)},isShownBeforeReady:!0}},64630:function(e,r,t){t.d(r,{S:function(){return j}});var i=t(57437),n=t(2265),a=t(1801),o=t(41884),s=t(38992),l=t(20278);let c=a.zo.div`
  /* spacing tokens */
  --screen-space: 16px; /* base 1x = 16 */
  --screen-space-lg: calc(var(--screen-space) * 1.5); /* 24px */

  position: relative;
  overflow: hidden;
  margin: 0 calc(-1 * var(--screen-space)); /* extends over modal padding */
  height: 100%;
  border-radius: var(--privy-border-radius-lg);
`,d=a.zo.div`
  display: flex;
  flex-direction: column;
  gap: calc(var(--screen-space) * 1.5);
  width: 100%;
  background: var(--privy-color-background);
  padding: 0 var(--screen-space-lg) var(--screen-space);
  height: 100%;
  border-radius: var(--privy-border-radius-lg);
`,p=a.zo.div`
  position: relative;
  display: flex;
  flex-direction: column;
`,u=(0,a.zo)(s.M)`
  margin: 0 -8px;
`,h=a.zo.div`
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
`,g=a.zo.div`
  display: flex;
  flex-direction: column;
  gap: var(--screen-space-lg);
`,v=a.zo.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--screen-space);
`,f=a.zo.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,x=a.zo.h3`
  && {
    font-size: 20px;
    line-height: 32px;
    font-weight: 500;
    color: var(--privy-color-foreground);
    margin: 0;
  }
`,m=a.zo.p`
  && {
    margin: 0;
    font-size: 16px;
    font-weight: 300;
    line-height: 24px;
    color: var(--privy-color-foreground);
  }
`,b=a.zo.div`
  background: ${({$variant:e})=>{switch(e){case"success":return"var(--privy-color-success-bg, #EAFCEF)";case"warning":return"var(--privy-color-warn, #FEF3C7)";case"error":return"var(--privy-color-error-bg, #FEE2E2)";case"loading":case"logo":return"transparent";default:return"var(--privy-color-background-2)"}}};

  border-radius: 50%;
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
`,y=a.zo.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img,
  svg {
    max-height: 90px;
    max-width: 180px;
  }
`,w=a.zo.div`
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
`,j=({children:e,...r})=>(0,i.jsx)(c,{children:(0,i.jsx)(d,{...r,children:e})}),z=a.zo.div`
  position: absolute;
  top: 0;
  left: calc(-1 * var(--screen-space-lg));
  width: calc(100% + calc(var(--screen-space-lg) * 2));
  height: 4px;
  background: var(--privy-color-background-2);
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
  overflow: hidden;
`,k=(0,a.zo)(s.B)`
  padding: 0;
  && a {
    padding: 0;
    color: var(--privy-color-foreground-3);
  }
`,S=a.zo.div`
  height: 100%;
  width: ${({pct:e})=>e}%;
  background: var(--privy-color-foreground-3);
  border-radius: 2px;
  transition: width 300ms ease-in-out;
`,A=({step:e})=>e?(0,i.jsx)(z,{children:(0,i.jsx)(S,{pct:Math.min(100,e.current/e.total*100)})}):null;j.Header=({title:e,subtitle:r,icon:t,iconVariant:n,iconLoadingStatus:a,showBack:o,onBack:s,showInfo:l,onInfo:c,showClose:d,onClose:h,step:g,...b})=>(0,i.jsxs)(p,{...b,children:[(0,i.jsx)(u,{backFn:o?s:void 0,infoFn:l?c:void 0,onClose:d?h:void 0,closeable:d}),(t||n||e||r)&&(0,i.jsxs)(v,{children:[t||n?(0,i.jsx)(j.Icon,{icon:t,variant:n,loadingStatus:a}):null,!(!e&&!r)&&(0,i.jsxs)(f,{children:[e&&(0,i.jsx)(x,{children:e}),r&&(0,i.jsx)(m,{children:r})]})]}),g&&(0,i.jsx)(A,{step:g})]}),(j.Body=n.forwardRef(({children:e,...r},t)=>(0,i.jsx)(h,{ref:t,...r,children:e}))).displayName="Screen.Body",j.Footer=({children:e,...r})=>(0,i.jsx)(g,{id:"privy-content-footer-container",...r,children:e}),j.Actions=({children:e,...r})=>(0,i.jsx)(C,{...r,children:e}),j.HelpText=({children:e,...r})=>(0,i.jsx)(E,{...r,children:e}),j.Watermark=()=>(0,i.jsx)(k,{}),j.Icon=({icon:e,variant:r="subtle",loadingStatus:t})=>"logo"===r&&e?(0,i.jsx)(y,"string"==typeof e?{children:(0,i.jsx)("img",{src:e,alt:""})}:n.isValidElement(e)?{children:e}:{children:n.createElement(e)}):"loading"===r?e?(0,i.jsx)(w,{children:(0,i.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:[(0,i.jsx)(o.a4,{success:t?.success,fail:t?.fail}),"string"==typeof e?(0,i.jsx)("span",{style:{background:`url('${e}') 0 0 / contain`,height:"38px",width:"38px",borderRadius:"6px",margin:"auto",backgroundSize:"contain"}}):n.isValidElement(e)?n.cloneElement(e,{style:{width:"38px",height:"38px"}}):n.createElement(e,{style:{width:"38px",height:"38px"}})]})}):(0,i.jsx)(b,{$variant:r,children:(0,i.jsx)(l.N,{size:"64px"})}):(0,i.jsx)(b,{$variant:r,children:e&&("string"==typeof e?(0,i.jsx)("img",{src:e,alt:"",style:{width:"32px",height:"32px",borderRadius:"6px"}}):n.isValidElement(e)?e:n.createElement(e,{width:32,height:32,stroke:(()=>{switch(r){case"success":return"var(--privy-color-icon-success)";case"warning":return"var(--privy-color-icon-warning)";case"error":return"var(--privy-color-icon-error)";default:return"var(--privy-color-icon-muted)"}})(),strokeWidth:2}))});let C=a.zo.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: calc(var(--screen-space) / 2);
`,E=a.zo.div`
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
`},31870:function(e,r,t){t.d(r,{S:function(){return o}});var i=t(57437),n=t(38992),a=t(64630);let o=({primaryCta:e,secondaryCta:r,helpText:t,watermark:o=!0,children:s,...l})=>{let c=e||r?(0,i.jsxs)(i.Fragment,{children:[e&&(()=>{let{label:r,...t}=e,a=t.variant||"primary";return(0,i.jsx)(n.a,{...t,variant:a,style:{width:"100%",...t.style},children:r})})(),r&&(()=>{let{label:e,...t}=r,a=t.variant||"secondary";return(0,i.jsx)(n.a,{...t,variant:a,style:{width:"100%",...t.style},children:e})})()]}):null;return(0,i.jsxs)(a.S,{id:l.id,className:l.className,children:[(0,i.jsx)(a.S.Header,{...l}),s?(0,i.jsx)(a.S.Body,{children:s}):null,t||c||o?(0,i.jsxs)(a.S.Footer,{children:[t?(0,i.jsx)(a.S.HelpText,{children:t}):null,c?(0,i.jsx)(a.S.Actions,{children:c}):null,o?(0,i.jsx)(a.S.Watermark,{}):null]}):null]})}},20278:function(e,r,t){t.d(r,{N:function(){return a}});var i=t(57437),n=t(1801);let a=({size:e,centerIcon:r})=>(0,i.jsx)(o,{$size:e,children:(0,i.jsxs)(s,{children:[(0,i.jsx)(c,{}),(0,i.jsx)(d,{}),r?(0,i.jsx)(l,{children:r}):null]})}),o=n.zo.div`
  --spinner-size: ${e=>e.$size?e.$size:"96px"};

  display: inline-flex;
  justify-content: center;
  align-items: center;

  @media all and (display-mode: standalone) {
    margin-bottom: 30px;
  }
`,s=n.zo.div`
  position: relative;
  height: var(--spinner-size);
  width: var(--spinner-size);

  opacity: 1;
  animation: fadein 200ms ease;
`,l=n.zo.div`
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
`,c=n.zo.div`
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
`,d=n.zo.div`
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
`},65488:function(e,r,t){t.d(r,{s:function(){return n}});var i=t(27296);let n=(e,r)=>(0,i.s)(e,r.ethereum.createOnLogin)||(0,i.k)(e,r.solana.createOnLogin)}}]);