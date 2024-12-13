"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[793],{53179:function(e,t,n){n.d(t,{Vo:function(){return d},Ho:function(){return h},Eu:function(){return m}});var r=n(81210),a=n(74572),o=n(36957);let s={beta:"EnreachExt_beta",staging:"EnreachExt_staging",prod:"EnreachExt"};function i(){return window[s[o.Vi]]}var l=n(76114),u=n(95258),c=n(49755);let d=(0,c.createContext)({login:async()=>{},setUser:()=>{},logout:()=>{}}),f="last-login-user",p=()=>{try{let e=localStorage.getItem(f);if(!e)return null;return JSON.parse(e)}catch(e){return console.error(e),null}},h=e=>{let{children:t}=e,n=(0,c.useRef)(!1),o=(0,u.useRouter)(),[s,h]=(0,c.useState)(p()),m=e=>{var t,r;e?(n.current=!1,h(e),localStorage.setItem(f,JSON.stringify(e)),e.token&&(null===(r=i())||void 0===r||r.request({name:"setAccessToken",body:e.token}).catch(console.error)),o.push("/")):(n.current=!0,h(null),localStorage.removeItem(f),null===(t=i())||void 0===t||t.request({name:"clearAccessToken"}).catch(console.error),o.push("/signin"))},g=()=>{m()};(0,c.useEffect)(()=>{let e;return s&&s.token&&(e=setInterval(()=>{let e=i();if(!e){console.warn("Extension not installed");return}e.request({name:"getStat"}).then(e=>{e.logined||(console.info("sync logout from ext"),g())}).catch(console.error)},1e3)),()=>clearInterval(e)},[s]);let x=async e=>{try{if(!e.email||!e.password)return;let t=await a.Z.loginApi(e);m(t),a.Z.setAuth()}catch(e){throw console.error(e),e}};a.Z.setAuth(null==s?void 0:s.token);let w=(0,l.a)({queryKey:["QueryUserInfo",null==s?void 0:s.token],enabled:!!(null==s?void 0:s.token),queryFn:()=>a.Z.userInfo()});return(0,r.jsx)(d.Provider,{value:{user:s,login:x,logout:g,setUser:m,queryUserInfo:w},children:t})},m=()=>(0,c.useContext)(d)},2793:function(e,t,n){n.d(t,{e:function(){return w}});var r=n(81210),a=n(84200),o=n(27767),s=n(77422),i=n(36689),l=n(17528),u=n(49755),c=n(44384),d=n(47608),f=n(54957),p=n(52897),h=n(74572),m=n(53179),g=n(83332),x=n(13882);function w(e){let{defReferralCode:t,btn:n="Sign in with Google",isDisabled:w}=e,b=(0,m.Eu)(),[v,y]=(0,u.useState)(""),[j,k]=(0,f.Z)(!1),[N,A]=(0,u.useState)(!1),C=(0,u.useRef)(""),{mutate:R,isPending:E}=(0,l.D)({onError:d.rV,mutationFn:async e=>{A(!1),C.current=e.access_token;let n=await h.Z.loginByGoogleApi({accessToken:e.access_token});if(n.token)b.setUser(n);else if(t&&!0===(0,p.tx)(t)){let e=await h.Z.loginSetReferralApi({accessToken:C.current,referralCode:t}).catch(d.rV);e?b.setUser(e):k()}else k()}}),S=(0,c.Nq)({flow:"implicit",onError:e=>{A(!1),(0,d.rV)(e.error_description)},onSuccess:R}),{mutate:I,isPending:P}=(0,l.D)({onError:d.rV,mutationFn:async()=>{if(!0!==(0,p.tx)(v)||!C.current)return;let e=await h.Z.loginSetReferralApi({accessToken:C.current,referralCode:v});b.setUser(e),k(!1)}}),{mutate:U,isPending:Z}=(0,l.D)({onError:d.rV,mutationFn:async()=>{if(!C.current)return;let e=await h.Z.loginSetReferralApi({accessToken:C.current});b.setUser(e),k(!1)}}),_=P||E||!0!==(0,p.tx)(v)||!C.current,T=w||E||N;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(o.un,{color:"default",type:"button",isDisabled:T,isLoading:E||N,onClick:()=>{A(!0),S()},children:[(0,r.jsx)(a.JM8,{})," ",n]}),(0,r.jsxs)(s.m,{isOpen:j,children:[(0,r.jsx)("p",{className:"self-stretch flex-grow-0 flex-shrink-0  text-base text-center text-white",children:"A Special Welcome"}),(0,r.jsx)("p",{className:"self-stretch flex-grow-0 flex-shrink-0  text-sm text-center text-white/50",children:"Join in EnReach's Open Edge journey and earn BERRY rewards with extra boost!"}),(0,r.jsx)(i.Fx,{onChange:y}),(0,r.jsx)(o.un,{isDisabled:_,className:"w-full",onClick:()=>I(),isLoading:P,children:"Get Boosted"}),(0,r.jsx)("div",{className:"flex justify-center text-white/80  text-sm",children:(0,r.jsx)(x.g,{onClick:()=>U(),className:"ml-2 text-xs",children:Z?(0,r.jsx)(g.c,{size:"sm"}):"Skip"})})]})]})}},27767:function(e,t,n){n.d(t,{a5:function(){return u},uU:function(){return l},un:function(){return i}});var r=n(81210),a=n(11013),o=n(41551),s=n(62365);function i(e){let{children:t,className:n,...s}=e;return(0,r.jsx)(a.A,{color:"primary",className:(0,o.cn)("h-[2.625rem] hover:bg-default","default"==s.color?"hover:bg-l1":"",n),...s,children:t})}function l(e){let{children:t,className:n,...s}=e;return(0,r.jsx)(a.A,{color:"primary",className:(0,o.cn)("h-[2.625rem] bg-l1 shadow-1 backdrop-blur-lg hover:bg-primary",n),...s,children:t})}function u(e){let{children:t,className:n,tip:i,...l}=e;return(0,r.jsx)(s.S,{content:i,children:(0,r.jsx)(a.A,{color:"primary",className:(0,o.cn)("h-8 w-8 min-w-8 max-w-8 rounded-full p-0 hover:bg-default",n),...l,children:t})})}},77422:function(e,t,n){n.d(t,{C:function(){return c},m:function(){return u}});var r=n(81210),a=n(29906),o=n(12014),s=n(21585),i=n(10307),l=n(85947);function u(e){let{children:t,contentProps:n,bodyProps:i,...l}=e;return(0,r.jsx)(a.R,{isDismissable:!1,backdrop:"blur",classNames:{backdrop:"backdrop-blur"},hideCloseButton:!0,...l,children:(0,r.jsx)(o.A,{className:"w-[22.5rem] p-6 bg-m1 rounded-3xl",...n||{},children:(0,r.jsx)(s.I,{className:"flex flex-col justify-start items-center w-full gap-6 p-0",...i||{},children:t})})})}function c(e){let{tit:t,children:n,contentProps:u,bodyProps:c,...d}=e;return(0,r.jsx)(a.R,{hideCloseButton:!0,backdrop:"blur",classNames:{backdrop:"backdrop-blur"},...d,children:(0,r.jsx)(o.A,{className:"w-[31.25rem] bg-m1 gap-6 p-6 rounded-3xl",...u||{},children:e=>(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(i.k,{className:"justify-between p-0",children:[(0,r.jsx)("span",{className:"text-base font-bold text-left text-white",children:t}),(0,r.jsx)("div",{className:"p-0 rounded-full w-6 h-6 flex justify-center items-center text-xs cursor-pointer bg-white/10 hover:bg-white/30",onClick:e,children:(0,r.jsx)(l.q5L,{})})]}),(0,r.jsx)(s.I,{className:"flex flex-col justify-start items-center w-full gap-6 p-0",...c||{},children:n})]})})})}},74568:function(e,t,n){n.d(t,{Ie:function(){return i},Ih:function(){return s},if:function(){return l}});var r=n(13910),a=n.n(r),o=n(28853);function s(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=a().toNumber(e);return n?(0,o.Z)(n).format({mantissa:2,trimMantissa:!0,average:n>=1e3}).toUpperCase():t}function i(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"-",n=a().toNumber(e),r=n?Math.min(a().round(100*n/10),100):0;return n?r<33.33?"Poor":r<66.66?"Good":"Superb":t}function l(e){return Math.max(a().round(a().toNumber(e||"1"),1),1)}},36689:function(e,t,n){n.d(t,{CM:function(){return d},Fx:function(){return m},Iv:function(){return h},e9:function(){return p},j7:function(){return f}});var r=n(81210),a=n(52897),o=n(37018),s=n(84824),i=n(54957),l=n(29060),u=n.n(l);let c={inputWrapper:"h-[2.625rem] rounded-lg bg-l1 border-none backdrop-blur-lg shadow-1 text-xs",label:"text-xs",input:"text-xs !text-white"};function d(e){let{setPassword:t,label:n,error:l,validate:u=a.uo}=e,[d,f]=(0,i.Z)(!1);return(0,r.jsx)(o.Y,{isRequired:!0,classNames:c,type:d?"text":"password",placeholder:n||"Password",labelPlacement:"inside",variant:"bordered",validate:u,endContent:(0,r.jsx)("button",{className:"focus:outline-none h-full",type:"button",onClick:()=>f(),"aria-label":"toggle password visibility",children:d?(0,r.jsx)(s.VhL,{className:"text-xs text-default-400 pointer-events-none"}):(0,r.jsx)(s.nO8,{className:"text-xs text-default-400 pointer-events-none"})}),errorMessage:l,onChange:e=>t(e.target.value)})}function f(e){let{setEmail:t,value:n}=e;return(0,r.jsx)(o.Y,{value:n,classNames:c,type:"email",placeholder:"Email",labelPlacement:"inside",variant:"bordered",isRequired:!0,validate:a.oH,onChange:e=>t(e.target.value)})}function p(e){let{setReferalCode:t,value:n}=e;return(0,r.jsx)(o.Y,{value:n,classNames:c,type:"text",placeholder:"Referral code (optional)",labelPlacement:"inside",variant:"bordered",isRequired:!0,validate:a.tx,onChange:e=>t(e.target.value)})}function h(e){let{setVerifyCode:t}=e;return(0,r.jsx)(o.Y,{classNames:c,type:"text",placeholder:"Verification Code",labelPlacement:"inside",variant:"bordered",isRequired:!0,validate:a.jg,onChange:e=>t(e.target.value)})}function m(e){let{onComplete:t,onChange:n}=e;return(0,r.jsx)(u(),{placeholder:"",onChange:n,onComplete:t,classNames:{container:"w-full justify-between h-[2.625rem] ",character:"rounded-lg max-w-[2.625rem]  w-[2.625rem] bg-l1 bg-transparent backdrop-blur-lg shadow-1 text-white text-xl leading-[2.625rem] uppercase"}})}},13882:function(e,t,n){n.d(t,{g:function(){return s}});var r=n(81210),a=n(41551),o=n(36805);function s(e){let{children:t,className:n,onClick:s,isDisable:i,href:l="javascript:void(0);",...u}=e;return(0,r.jsx)(o.default,{href:l,onClick:e=>{i||null==s||s(e)},className:(0,a.cn)("underline text-white/60 hover:text-primary cursor-pointer",{"cursor-not-allowed hover:text-white/60":i},n),...u,children:t})}},62365:function(e,t,n){n.d(t,{S:function(){return s}});var r=n(81210),a=n(62216),o=n(47048);function s(e){let{content:t,children:n}=e;return(0,r.jsx)(a.e,{showArrow:!1,content:t,color:"default",className:" min-h-9 min-w-[4.5rem] max-w-[12.5rem]",classNames:{content:"bg-[#40414F] border border-solid border-[rgba(255,255,255,0.1)] min-h-9 min-w-[4.5rem] text-xs"},children:n||(0,r.jsx)("button",{className:"outline-none border-none",children:(0,r.jsx)(o.nj5,{})})})}},74572:function(e,t,n){n.d(t,{t:function(){return l}});var r=n(80957),a=n(36957),o=n(13910),s=n.n(o),i=n(74568);let l={beta:"https://dev-api.enreach.network/api",staging:"https://staging-api-1.enreach.network/api",prod:"https://api.enreach.network/api"}[a.Vi],u=r.default.create({baseURL:l,headers:{"Content-Type":"application/json"}}),c={setAuth:e=>{e?u.defaults.headers.common.Authorization=e.startsWith("Bearer")?e:"Bearer ".concat(e):delete u.defaults.headers.common.Authorization},loginApi:async e=>{let t=await u.post("/user/signIn",e);return c.setAuth(t.data.data.token),t.data.data},loginByGoogleApi:async e=>{let t=await u.post("/user/google/signIn",e);return c.setAuth(t.data.data.token),t.data.data},loginSetReferralApi:async e=>{let t=await u.post("/user/referral/by",e);return c.setAuth(t.data.data.token),t.data.data},registerApi:async e=>(await u.post("/user/signUp",{...e})).data.data,registerByGoogleApi:async e=>(await u.post("/user/google/signUp",{accessToken:e})).data.data,resendRegisterVerifyCode:async e=>(await u.post("/user/verify/".concat(e,"/resend")),!0),verifyRegisterCode:async(e,t)=>(await u.post("/user/verify/".concat(e,"/").concat(t))).data.data,userInfo:async()=>{let e=await u.get("/user/profile"),t=e.data.data.point;return s().keys(t).forEach(e=>{t[e]=s().toNumber(t[e])}),t.total=(0,i.if)(e.data.data.stat.extraBoost)*t.total,e.data.data},sendResetPassword:async e=>(await u.post("/user/password/reset/send",{email:e}),!0),resetPassword:async e=>(await u.post("/user/password/reset",e),!0),userUpdate:async e=>(await u.post("/user/profile/update",e),!0),userReward:async()=>(await u.get("/user/reward")).data.data,nodeList:async()=>(await u.get("/node/list")).data.data,trendingRewards:async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"month";return(await u.get("/trending/rewards",{params:{type:e}})).data.data},getAccessToken:async()=>(await u.get("/user/accessToken")).data.data.accessToken,getIP:async()=>(await r.default.get("https://api.bigdatacloud.net/data/client-ip")).data,updateNodeName:async(e,t)=>(await u.post("/node/rename/".concat(e.connectionId,"/").concat(encodeURIComponent(e.ipAddress),"/").concat(encodeURIComponent(t))),!0)};t.Z=c},36957:function(e,t,n){n.d(t,{Vi:function(){return r},u1:function(){return a}}),n(45303).env.NEXT_PUBLIC_BASE_PATH;let r="staging",a=""},47608:function(e,t,n){n.d(t,{G$:function(){return h},N3:function(){return d},Q1:function(){return g},Y:function(){return m},_v:function(){return p},rV:function(){return f}});var r=n(36062),a=n(28672),o=n.n(a),s=n(85542),i=n.n(s),l=n(94782),u=n(13910),c=n.n(u);function d(e){return e.toLowerCase().replaceAll(" ","_")}function f(e){var t,n;let a;r.Am.error(c().upperFirst((a="Unkown","string"==typeof e?a=e:e instanceof l.d7?a=(null===(n=e.response)||void 0===n?void 0:null===(t=n.data)||void 0===t?void 0:t.message)||e.message:"string"==typeof(null==e?void 0:e.msg)?a=null==e?void 0:e.msg:"string"==typeof(null==e?void 0:e.message)&&(a=null==e?void 0:e.message),a).trim()))}function p(e){return new Promise(t=>setTimeout(t,e))}function h(e,t){return o()(e).format(t)}function m(e,t){return o().duration(e).format(t)}function g(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:16;return c().round(e/t,4)+"rem"}o().extend(i())},52897:function(e,t,n){function r(e){return e?!!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(e)||"Please enter a vaild email !":null}function a(e){return e?!!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/.test(e)||"Your password must be at least 8 characters long and include: at least one uppercase letter, one lowercase letter, and one number. Special characters (@$!%*?&) are allowed.":null}function o(e,t){return e&&t?e===t||"Passwords do not match!":null}function s(e){return e?6==e.length||"Invalid referral code!":null}function i(e){return e?6==e.length||"Invalid verification code":null}n.d(t,{S$:function(){return o},jg:function(){return i},oH:function(){return r},tx:function(){return s},uo:function(){return a}})}}]);