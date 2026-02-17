"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7545],{79205:function(e,n,r){r.d(n,{Z:function(){return u}});var t=r(2265);let i=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),o=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,n,r)=>r?r.toUpperCase():n.toLowerCase()),a=e=>{let n=o(e);return n.charAt(0).toUpperCase()+n.slice(1)},c=function(){for(var e=arguments.length,n=Array(e),r=0;r<e;r++)n[r]=arguments[r];return n.filter((e,n,r)=>!!e&&""!==e.trim()&&r.indexOf(e)===n).join(" ").trim()},s=e=>{for(let n in e)if(n.startsWith("aria-")||"role"===n||"title"===n)return!0};var d={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let l=(0,t.forwardRef)((e,n)=>{let{color:r="currentColor",size:i=24,strokeWidth:o=2,absoluteStrokeWidth:a,className:l="",children:u,iconNode:f,...p}=e;return(0,t.createElement)("svg",{ref:n,...d,width:i,height:i,stroke:r,strokeWidth:a?24*Number(o)/Number(i):o,className:c("lucide",l),...!u&&!s(p)&&{"aria-hidden":"true"},...p},[...f.map(e=>{let[n,r]=e;return(0,t.createElement)(n,r)}),...Array.isArray(u)?u:[u]])}),u=(e,n)=>{let r=(0,t.forwardRef)((r,o)=>{let{className:s,...d}=r;return(0,t.createElement)(l,{ref:o,iconNode:n,className:c("lucide-".concat(i(a(e))),"lucide-".concat(e),s),...d})});return r.displayName=a(e),r}},30401:function(e,n,r){r.d(n,{Z:function(){return t}});let t=(0,r(79205).Z)("check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]])},78867:function(e,n,r){r.d(n,{Z:function(){return t}});let t=(0,r(79205).Z)("copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]])},3848:function(e,n,r){r.d(n,{Cr:function(){return a},LH:function(){return c},R1:function(){return o}});var t=r(71282),i=r(39502);function o(e){return e?`${e.slice(0,5)}…${e.slice(-4)}`:""}function a({wei:e,precision:n=3}){return parseFloat((0,t.d)(e)).toFixed(n).replace(/0+$/,"").replace(/\.$/,"")}function c({amount:e,decimals:n}){return(0,i.b)(BigInt(e),n)}},1210:function(e,n,r){r.d(n,{A:function(){return l}});var t=r(57437),i=r(30401),o=r(78867),a=r(2265),c=r(1801),s=r(41884),d=r(38992);let l=({address:e,showCopyIcon:n,url:r,className:c})=>{let[l,g]=(0,a.useState)(!1);function h(n){n.stopPropagation(),navigator.clipboard.writeText(e).then(()=>g(!0)).catch(console.error)}return(0,a.useEffect)(()=>{if(l){let e=setTimeout(()=>g(!1),3e3);return()=>clearTimeout(e)}},[l]),(0,t.jsxs)(u,r?{children:[(0,t.jsx)(p,{title:e,className:c,href:`${r}/address/${e}`,target:"_blank",children:(0,s.D)(e)}),n&&(0,t.jsx)(d.S,{onClick:h,size:"sm",style:{gap:"0.375rem"},children:(0,t.jsxs)(t.Fragment,l?{children:["Copied",(0,t.jsx)(i.Z,{size:16})]}:{children:["Copy",(0,t.jsx)(o.Z,{size:16})]})})]}:{children:[(0,t.jsx)(f,{title:e,className:c,children:(0,s.D)(e)}),n&&(0,t.jsx)(d.S,{onClick:h,size:"sm",style:{gap:"0.375rem",fontSize:"14px"},children:(0,t.jsxs)(t.Fragment,l?{children:["Copied",(0,t.jsx)(i.Z,{size:14})]}:{children:["Copy",(0,t.jsx)(o.Z,{size:14})]})})]})},u=c.zo.span`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
`,f=c.zo.span`
  font-size: 14px;
  font-weight: 500;
  color: var(--privy-color-foreground);
`,p=c.zo.a`
  font-size: 14px;
  color: var(--privy-color-foreground);
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`},70547:function(e,n,r){r.d(n,{E:function(){return i}});var t=r(1801);let i=t.zo.span`
  text-align: left;
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 1.125rem; /* 150% */

  color: var(--privy-color-error);
`},59287:function(e,n,r){r.d(n,{t:function(){return a}});var t=r(57437),i=r(75599),o=r(38992);function a({title:e}){let{currentScreen:n,navigateBack:r,navigate:a,data:c,setModalData:s}=(0,i.a)();return(0,t.jsx)(o.M,{title:e,backFn:"ManualTransferScreen"===n?r:n===c?.funding?.methodScreen?c.funding.comingFromSendTransactionScreen?()=>a("SendTransactionScreen"):void 0:c?.funding?.methodScreen?()=>{let e=c.funding;e.usingDefaultFundingMethod&&(e.usingDefaultFundingMethod=!1),s({funding:e,solanaFundingData:c?.solanaFundingData}),a(e.methodScreen)}:void 0})}},96308:function(e,n,r){r.d(n,{I:function(){return c}});var t=r(57437),i=r(2265);let o=i.forwardRef(function(e,n){let{title:r,titleId:t,...o}=e;return i.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:n,"aria-labelledby":t},o),r?i.createElement("title",{id:t},r):null,i.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"}))});var a=r(1801);let c=({children:e,theme:n})=>(0,t.jsxs)(s,{$theme:n,children:[(0,t.jsx)(o,{width:"20px",height:"20px",color:"var(--privy-color-icon-subtle)",strokeWidth:2,style:{flexShrink:0}}),(0,t.jsx)(d,{$theme:n,children:e})]}),s=a.zo.div`
  display: flex;
  gap: 0.75rem;
  background-color: var(--privy-color-background-2);
  align-items: flex-start;
  padding: 1rem;
  border-radius: 0.75rem;
`,d=a.zo.div`
  color: ${e=>"dark"===e.$theme?"var(--privy-color-foreground-2)":"var(--privy-color-foreground)"};
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  flex: 1;
  text-align: left;
`},28642:function(e,n,r){r.d(n,{L:function(){return i}});var t=r(1801);let i=t.zo.span`
  color: var(--privy-color-foreground-3);
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 1.125rem; /* 150% */
`},60683:function(e,n,r){r.d(n,{B:function(){return i},C:function(){return c},F:function(){return d},H:function(){return a},R:function(){return p},S:function(){return u},a:function(){return l},b:function(){return f},c:function(){return s},d:function(){return g},e:function(){return o}});var t=r(1801);let i=t.zo.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  margin-top: auto;
  gap: 16px;
  flex-grow: 100;
`,o=t.zo.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  width: 100%;
`,a=t.zo.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`,c=(0,t.zo)(o)`
  padding: 20px 0;
`,s=(0,t.zo)(o)`
  gap: 16px;
`,d=t.zo.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`,l=t.zo.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;t.zo.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;let u=t.zo.div`
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
`,f=t.zo.div`
  height: 16px;
`,p=t.zo.div`
  height: 12px;
`;t.zo.div`
  position: relative;
`;let g=t.zo.div`
  height: ${e=>e.height??"12"}px;
`;t.zo.div`
  background-color: var(--privy-color-accent);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border-color: white;
  border-width: 2px !important;
`},47545:function(e,n,r){r.r(n),r.d(n,{ManualTransferScreen:function(){return T},default:function(){return T}});var t=r(57437),i=r(2265),o=r(39502),a=r(3848),c=r(38992),s=r(60683),d=r(91902),l=r(59287),u=r(96308),f=r(71471),p=r(41270),g=r(14133),h=r(89660),m=r(41884),v=r(71554),x=r(75599),y=r(70594),b=r(96351),C=r(80625),w=r(27296),S=r(57104),z=r(78528),j=r(60164),k=r(74533);r(35819),r(29155),r(97048),r(87336),r(64131),r(84250);let T={component:()=>{let{wallets:e}=(0,b.u)(),{connectors:n}=(0,v.u)(),r=n.filter(m.v).flatMap(e=>e.wallets),{data:T,setModalData:F,navigate:A,lastScreen:M}=(0,x.a)(),{rpcConfig:E,appId:B,createAnalyticsEvent:$,closePrivyModal:N}=(0,v.u)(),L=(0,h.u)(),[P,U]=(0,i.useState)(void 0),[I,Z]=(0,i.useState)(!1),H=T?.funding,{reloadBalance:O}=(0,y.u)({rpcConfig:E,appId:B,address:"ethereum"===H.chainType?H.address:void 0,chain:"ethereum"===H.chainType?H.chain:void 0}),R="solana"===H.chainType,W=R?H.isUSDC?"USDC":"SOL":H.erc20Address?H.erc20ContractInfo?.symbol:H.chain.nativeCurrency.symbol,V=R?r.find(({address:e})=>e===H.address):e.find(({address:e})=>(0,m.D)(e)===(0,m.D)(H.address));if(!H)return F({errorModalData:{error:Error("Couldn't find funding config"),previousScreen:M||"FundingMethodSelectionScreen"},funding:T?.funding,solanaFundingData:T?.solanaFundingData,sendTransaction:T?.sendTransaction}),A("ErrorScreen"),(0,t.jsx)(t.Fragment,{});(0,i.useEffect)(()=>{let e=R?async function(){if("solana"!==H.chainType)return;let e=L.solanaRpcs[H.chain];e?(H.isUSDC?async function({rpc:e,address:n,mintAddress:r}){let t=await e.getTokenAccountsByOwner(n,{mint:r},{encoding:"jsonParsed",commitment:"confirmed"}).send(),i=t.value[0]?.account;return i?BigInt(i.data.parsed.info.tokenAmount.amount):0n}({rpc:e.rpc,address:H.address,mintAddress:(0,z.g)(H.chain)}):(0,w.x)({rpc:e.rpc,address:H.address})).then(e=>{let n=BigInt(e);P&&n>P&&(Z(!0),$({eventName:C.O,payload:{provider:"manual",status:"success",chainType:"solana",address:V?.address,value:H.isUSDC?(0,o.b)(n-P,6):(0,o.b)(n-P,9),token:H.isUSDC?"USDC":"SOL"}})),U(n)}):console.warn("Unable to load solana rpc, skipping balance")}:async function(){"ethereum"===H.chainType&&(async()=>{if(!H.erc20Address)return await O()??BigInt(0);{let{balance:e}=await (0,k.g)({chain:H.chain,address:H.address,erc20Address:H.erc20Address,rpcConfig:E,appId:B});return e}})().then(e=>{P&&e>P&&(Z(!0),$({eventName:C.O,payload:{provider:"manual",status:"success",chainType:"ethereum",address:V?.address,chainId:H.chain.id,value:(0,o.b)(e-P,H.erc20ContractInfo?.decimals??18),token:H.erc20ContractInfo?.symbol??H.erc20Address??"ETH"}})),U(e)}).catch(()=>U(void 0))},n=setInterval(e,2e3);return e(),()=>clearInterval(n)},[P]);let G=(0,i.useMemo)(()=>null==P?"":H.isUSDC?(0,a.LH)({amount:P,decimals:6}):R?(0,j.g)(P,3,!0,!0):null!=H.erc20ContractInfo?.decimals?(0,a.LH)({amount:P,decimals:H.erc20ContractInfo.decimals}):(0,a.Cr)({wei:P}),[P,R,H]),J="ethereum"===H.chainType?H.chain.name:(0,S.g)(H.chain),_=(0,i.useMemo)(()=>""===H.uiConfig?.receiveFundsTitle?null:(0,t.jsx)(p.T,{children:H.uiConfig?.receiveFundsTitle??`Receive ${H.amount} ${W??""}`.trim()}),[H.uiConfig?.receiveFundsTitle,H.amount,W]),q=(0,i.useMemo)(()=>""===H.uiConfig?.receiveFundsSubtitle?null:(0,t.jsx)(f.S,{children:H.uiConfig?.receiveFundsSubtitle??`Scan this code or copy your wallet address to receive funds on ${J}.`}),[H.uiConfig?.receiveFundsSubtitle,J]),Y="solana"===H.chainType&&H.isUSDC&&(0,z.g)(H.chain)?`?spl-token=${(0,z.g)(H.chain)}`:"";return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.t,{}),_,q,(0,t.jsxs)(s.F,{style:{gap:"1rem",margin:_||q?"1rem 0":"0"},children:[(0,t.jsx)(d.Q,{url:`${H.chainType}:${H.address}${Y}`,size:200,squareLogoElement:D}),(0,t.jsxs)(u.I,{theme:L.appearance.palette.colorScheme,children:["Make sure to send funds on ",J,"."]}),(0,t.jsx)(g.W,{title:"Your wallet",errMsg:void 0,showCopyButton:!0,balance:`${G} ${W}`,address:H.address}),I&&(0,t.jsx)(c.P,{onClick:()=>N({shouldCallAuthOnSuccess:!1,isSuccess:!0}),children:"Continue"})]}),(0,t.jsx)(c.B,{})]})}},D=({...e})=>(0,t.jsx)(w.z,{color:"black",...e})},71471:function(e,n,r){r.d(n,{S:function(){return i}});var t=r(1801);let i=t.zo.span`
  margin-top: 4px;
  color: var(--privy-color-foreground);
  text-align: center;

  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.375rem; /* 157.143% */

  && a {
    color: var(--privy-color-accent);
  }
`},41270:function(e,n,r){r.d(n,{T:function(){return i}});var t=r(1801);let i=t.zo.span`
  color: var(--privy-color-foreground);
  font-size: 1.125rem;
  font-weight: 600;
  line-height: 1.875rem; /* 166.667% */
  text-align: center;
`},14133:function(e,n,r){r.d(n,{W:function(){return b}});var t=r(57437),i=r(30401),o=r(78867),a=r(2265),c=r(1801),s=r(38992),d=r(70547),l=r(28642),u=r(1210),f=r(41618);let p=(0,c.zo)(f.B)`
  && {
    padding: 0.75rem;
    height: 56px;
  }
`,g=c.zo.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`,h=c.zo.div`
  display: flex;
  flex-direction: column;
  gap: 0;
`,m=c.zo.div`
  font-size: 12px;
  line-height: 1rem;
  color: var(--privy-color-foreground-3);
`,v=(0,c.zo)(l.L)`
  text-align: left;
  margin-bottom: 0.5rem;
`,x=(0,c.zo)(d.E)`
  margin-top: 0.25rem;
`,y=(0,c.zo)(s.S)`
  && {
    gap: 0.375rem;
    font-size: 14px;
  }
`,b=({errMsg:e,balance:n,address:r,className:c,title:s,showCopyButton:d=!1})=>{let[l,f]=(0,a.useState)(!1);return(0,a.useEffect)(()=>{if(l){let e=setTimeout(()=>f(!1),3e3);return()=>clearTimeout(e)}},[l]),(0,t.jsxs)("div",{children:[s&&(0,t.jsx)(v,{children:s}),(0,t.jsx)(p,{className:c,$state:e?"error":void 0,children:(0,t.jsxs)(g,{children:[(0,t.jsxs)(h,{children:[(0,t.jsx)(u.A,{address:r,showCopyIcon:!1}),void 0!==n&&(0,t.jsx)(m,{children:n})]}),d&&(0,t.jsx)(y,{onClick:function(e){e.stopPropagation(),navigator.clipboard.writeText(r).then(()=>f(!0)).catch(console.error)},size:"sm",children:(0,t.jsxs)(t.Fragment,l?{children:["Copied",(0,t.jsx)(i.Z,{size:14})]}:{children:["Copy",(0,t.jsx)(o.Z,{size:14})]})})]})}),e&&(0,t.jsx)(x,{children:e})]})}},80625:function(e,n,r){r.d(n,{O:function(){return t}});let t="sdk_fiat_on_ramp_completed_with_status"},57104:function(e,n,r){r.d(n,{g:function(){return t}});function t(e){switch(e){case"solana:mainnet":return"Solana";case"solana:devnet":return"Devnet";case"solana:testnet":return"Testnet"}}},74533:function(e,n,r){r.d(n,{g:function(){return a}});var t=r(70751),i=r(78722),o=r(96821);let a=async({chain:e,address:n,appId:r,rpcConfig:a,erc20Address:s})=>{let d=(0,t.v)({chain:e,transport:(0,i.d)((0,o.a)(e,a,r))});return{balance:await d.readContract({address:s,abi:c,functionName:"balanceOf",args:[n]}).catch(()=>0n),chain:e}},c=[{constant:!0,inputs:[{name:"_owner",type:"address"}],name:"balanceOf",outputs:[{name:"balance",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"}]},36672:function(e,n,r){r.d(n,{A:function(){return c},D:function(){return l},J:function(){return d},L:function(){return t},R:function(){return s},S:function(){return i},T:function(){return o},a:function(){return a},g:function(){return u}});let t=1e9,i="11111111111111111111111111111111",o="TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",a="TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb",c="ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL",s=["CPMMoo8L3F4NbTegBCKVNunggL7H1ZpdTHKxQB5qKP1C","CPMDWBwJDtYax9qW7AyRuVC19Cc4L4Vcy4n2BHAbHkCW"],d=["JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4"],l={"solana:mainnet":{EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v:{symbol:"USDC",decimals:6,address:"EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v"},Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB:{symbol:"USDT",decimals:6,address:"Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB"},So11111111111111111111111111111111111111112:{symbol:"SOL",decimals:9,address:"So11111111111111111111111111111111111111112"}},"solana:devnet":{"4zMMC9srt5Ri5X14GAgXhaHii3GnPAEERYPJgZJDncDU":{symbol:"USDC",decimals:6,address:"4zMMC9srt5Ri5X14GAgXhaHii3GnPAEERYPJgZJDncDU"},EJwZgeZrdC8TXTQbQBoL6bfuAnFUUy1PVCMB4DYPzVaS:{symbol:"USDT",decimals:6,address:"EJwZgeZrdC8TXTQbQBoL6bfuAnFUUy1PVCMB4DYPzVaS"},So11111111111111111111111111111111111111112:{symbol:"SOL",decimals:9,address:"So11111111111111111111111111111111111111112"}},"solana:testnet":{}};function u(e,n){let r=parseFloat(e.toString())/t,i=f.format(n*r);return"$0.00"===i?"<$0.01":i}let f=new Intl.NumberFormat(void 0,{style:"currency",currency:"USD",maximumFractionDigits:2})},78528:function(e,n,r){r.d(n,{g:function(){return i}});var t=r(36672);function i(e){let[n]=Object.entries(t.D[e]).find(([e,n])=>"USDC"===n.symbol)??[];return n}},41618:function(e,n,r){r.d(n,{B:function(){return o},a:function(){return i}});var t=r(1801);let i=(0,t.iv)`
  && {
    border-width: 1px;
    padding: 0.5rem 1rem;
  }

  width: 100%;
  text-align: left;
  border: solid 1px var(--privy-color-foreground-4);
  border-radius: var(--privy-border-radius-md);
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${e=>"error"===e.$state?"\n        border-color: var(--privy-color-error);\n        background: var(--privy-color-error-bg);\n      ":""}
`,o=t.zo.div`
  ${i}
`},60164:function(e,n,r){r.d(n,{a:function(){return o},g:function(){return i}});var t=r(36672);function i(e,n=6,r=!1,t=!1){let i=(parseFloat(e.toString())/1e9).toFixed(n).replace(/0+$/,"").replace(/\.$/,""),o=t?"":" SOL";return r?`${i}${o}`:`${"0"===i?"<0.001":i}${o}`}function o({amount:e,fee:n,tokenPrice:r,isUsdc:o}){let a=BigInt(Math.floor(parseFloat(e)*10**(o?6:9))),c=o?a:a+n;return{fundingAmountInBaseUnit:a,fundingAmountInUsd:r?(0,t.g)(a,r):void 0,totalPriceInUsd:r?(0,t.g)(c,r):void 0,totalPriceInNativeCurrency:i(c),feePriceInNativeCurrency:i(n),feePriceInUsd:r?(0,t.g)(n,r):void 0}}},70594:function(e,n,r){r.d(n,{u:function(){return s}});var t=r(2265),i=r(70751),o=r(78722),a=r(96821),c=r(71554);function s({rpcConfig:e,appId:n,address:r,chain:s}){let{chains:d}=(0,c.u)(),[l,u]=(0,t.useState)(0n),[f,p]=(0,t.useState)(!1),g=(0,t.useMemo)(()=>{let r=s||d[0];if(r)return(0,i.v)({chain:s,transport:(0,o.d)((0,a.a)(r,e,n))})},[s,e,n]),h=(0,t.useCallback)(async()=>{if(!r||!g)return;p(!0);let e=await g.getBalance({address:r}).catch(console.error);return e?(u(e),p(!1),e):void 0},[g,r,u]);return(0,t.useEffect)(()=>{h().catch(console.error)},[]),{balance:l,isLoading:f,reloadBalance:h}}}}]);