const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["../nodes/0.ExZzz4dr.js","../chunks/disclose-version.Blli6E5o.js","../chunks/runtime.DoZM07Gd.js","../chunks/paths.DllY594u.js","../nodes/1.BWBIjm77.js","../chunks/render.Bg6eSBXm.js","../chunks/lifecycle.B7sh-X9R.js","../chunks/store.BxAygKsJ.js","../chunks/entry.vixGJjCM.js","../nodes/2.D9hYKjOe.js","../chunks/attributes.CVoaOWor.js","../assets/2.Xw61wHtR.css","../nodes/3.BtJeEGHG.js","../chunks/index-client.cQjgrv4v.js","../chunks/transform.CzLan8xH.js","../assets/3.ygB1r1cX.css","../nodes/4.1sOYmsZN.js","../assets/4.pLXSx08R.css","../nodes/5.Bo1O0Hpl.js","../chunks/props.CD8wr2Vr.js","../assets/5.BRe01DO4.css"])))=>i.map(i=>d[i]);
var U=a=>{throw TypeError(a)};var W=(a,e,s)=>e.has(a)||U("Cannot "+s);var f=(a,e,s)=>(W(a,e,"read from private field"),s?s.call(a):e.get(a)),L=(a,e,s)=>e.has(a)?U("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(a):e.set(a,s),O=(a,e,s,n)=>(W(a,e,"write to private field"),n?n.call(a,s):e.set(a,s),s);import{i as k,a7 as z,T as G,an as ee,ao as te,a6 as re,a5 as Y,ap as H,W as B,aq as N,Y as J,V as K,g,x as A,ar as se,Z as ae,N as ne,p as oe,u as ie,a as ce,as as le,k as x,l as ue,at as S,s as fe,m as de,t as me,n as _e,f as C}from"../chunks/runtime.DoZM07Gd.js";import{h as he,m as ve,u as ge,s as ye}from"../chunks/render.Bg6eSBXm.js";import{a as R,t as Q,c as D,e as Ee}from"../chunks/disclose-version.Blli6E5o.js";import{p as I,a as be}from"../chunks/props.CD8wr2Vr.js";import{o as Re,b as V}from"../chunks/index-client.cQjgrv4v.js";function j(a,e,s,n=null,i=!1){k&&z();var o=a,r=null,t=null,l=null,u=i?K:0;G(()=>{if(l===(l=!!e()))return;let m=!1;if(k){const T=o.data===ee;l===T&&(o=te(),re(o),Y(!1),m=!0)}l?(r?H(r):r=B(()=>s(o)),t&&N(t,()=>{t=null})):(t?H(t):n&&(t=B(()=>n(o))),r&&N(r,()=>{r=null})),m&&Y(!0)},u),k&&(o=J)}function q(a,e,s){k&&z();var n=a,i,o;G(()=>{i!==(i=e())&&(o&&(N(o),o=null),i&&(o=B(()=>s(n,i))))},K),k&&(n=J)}function Pe(a){return class extends Te{constructor(e){super({component:a,...e})}}}var y,d;class Te{constructor(e){L(this,y);L(this,d);var o;var s=new Map,n=(r,t)=>{var l=ne(t);return s.set(r,l),l};const i=new Proxy({...e.props||{},$$events:{}},{get(r,t){return g(s.get(t)??n(t,Reflect.get(r,t)))},has(r,t){return g(s.get(t)??n(t,Reflect.get(r,t))),Reflect.has(r,t)},set(r,t,l){return A(s.get(t)??n(t,l),l),Reflect.set(r,t,l)}});O(this,d,(e.hydrate?he:ve)(e.component,{target:e.target,props:i,context:e.context,intro:e.intro??!1,recover:e.recover})),(!((o=e==null?void 0:e.props)!=null&&o.$$host)||e.sync===!1)&&se(),O(this,y,i.$$events);for(const r of Object.keys(f(this,d)))r==="$set"||r==="$destroy"||r==="$on"||ae(this,r,{get(){return f(this,d)[r]},set(t){f(this,d)[r]=t},enumerable:!0});f(this,d).$set=r=>{Object.assign(i,r)},f(this,d).$destroy=()=>{ge(f(this,d))}}$set(e){f(this,d).$set(e)}$on(e,s){f(this,y)[e]=f(this,y)[e]||[];const n=(...i)=>s.call(this,...i);return f(this,y)[e].push(n),()=>{f(this,y)[e]=f(this,y)[e].filter(i=>i!==n)}}$destroy(){f(this,d).$destroy()}}y=new WeakMap,d=new WeakMap;const ke="modulepreload",we=function(a,e){return new URL(a,e).href},Z={},P=function(e,s,n){let i=Promise.resolve();if(s&&s.length>0){const r=document.getElementsByTagName("link"),t=document.querySelector("meta[property=csp-nonce]"),l=(t==null?void 0:t.nonce)||(t==null?void 0:t.getAttribute("nonce"));i=Promise.allSettled(s.map(u=>{if(u=we(u,n),u in Z)return;Z[u]=!0;const m=u.endsWith(".css"),T=m?'[rel="stylesheet"]':"";if(!!n)for(let _=r.length-1;_>=0;_--){const v=r[_];if(v.href===u&&(!m||v.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${u}"]${T}`))return;const c=document.createElement("link");if(c.rel=m?"stylesheet":ke,m||(c.as="script"),c.crossOrigin="",c.href=u,l&&c.setAttribute("nonce",l),document.head.appendChild(c),m)return new Promise((_,v)=>{c.addEventListener("load",_),c.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${u}`)))})}))}function o(r){const t=new Event("vite:preloadError",{cancelable:!0});if(t.payload=r,window.dispatchEvent(t),!t.defaultPrevented)throw r}return i.then(r=>{for(const t of r||[])t.status==="rejected"&&o(t.reason);return e().catch(o)})},je={};var xe=Q('<div id="svelte-announcer" aria-live="assertive" aria-atomic="true" style="position: absolute; left: 0; top: 0; clip: rect(0 0 0 0); clip-path: inset(50%); overflow: hidden; white-space: nowrap; width: 1px; height: 1px"><!></div>'),Ae=Q("<!> <!>",1);function pe(a,e){oe(e,!0);let s=I(e,"components",23,()=>[]),n=I(e,"data_0",3,null),i=I(e,"data_1",3,null);ie(()=>e.stores.page.set(e.page)),ce(()=>{e.stores,e.page,e.constructors,s(),e.form,n(),i(),e.stores.page.notify()});let o=S(!1),r=S(!1),t=S(null);Re(()=>{const E=e.stores.page.subscribe(()=>{g(o)&&(A(r,!0),le().then(()=>{A(t,be(document.title||"untitled page"))}))});return A(o,!0),E});const l=C(()=>e.constructors[1]);var u=Ae(),m=x(u);j(m,()=>e.constructors[1],E=>{var c=D();const _=C(()=>e.constructors[0]);var v=x(c);q(v,()=>g(_),(b,p)=>{V(p(b,{get data(){return n()},get form(){return e.form},children:(h,Le)=>{var F=D(),X=x(F);q(X,()=>g(l),(M,$)=>{V($(M,{get data(){return i()},get form(){return e.form}}),w=>s()[1]=w,()=>{var w;return(w=s())==null?void 0:w[1]})}),R(h,F)},$$slots:{default:!0}}),h=>s()[0]=h,()=>{var h;return(h=s())==null?void 0:h[0]})}),R(E,c)},E=>{var c=D();const _=C(()=>e.constructors[0]);var v=x(c);q(v,()=>g(_),(b,p)=>{V(p(b,{get data(){return n()},get form(){return e.form}}),h=>s()[0]=h,()=>{var h;return(h=s())==null?void 0:h[0]})}),R(E,c)});var T=fe(m,2);j(T,()=>g(o),E=>{var c=xe(),_=de(c);j(_,()=>g(r),v=>{var b=Ee();me(()=>ye(b,g(t))),R(v,b)}),_e(c),R(E,c)}),R(a,u),ue()}const qe=Pe(pe),Be=[()=>P(()=>import("../nodes/0.ExZzz4dr.js"),__vite__mapDeps([0,1,2,3]),import.meta.url),()=>P(()=>import("../nodes/1.BWBIjm77.js"),__vite__mapDeps([4,1,2,5,6,7,8,3]),import.meta.url),()=>P(()=>import("../nodes/2.D9hYKjOe.js"),__vite__mapDeps([9,1,2,10,3,11]),import.meta.url),()=>P(()=>import("../nodes/3.BtJeEGHG.js"),__vite__mapDeps([12,1,2,13,6,14,3,15]),import.meta.url),()=>P(()=>import("../nodes/4.1sOYmsZN.js"),__vite__mapDeps([16,1,2,3,17]),import.meta.url),()=>P(()=>import("../nodes/5.Bo1O0Hpl.js"),__vite__mapDeps([18,1,2,10,19,7,13,14,3,20]),import.meta.url)],Ne=[],Fe={"/":[2],"/projects":[3],"/projects/police-shootings":[4],"/projects/south-africa-energy":[5]},Ue={handleError:({error:a})=>{console.error(a)},reroute:()=>{}};export{Fe as dictionary,Ue as hooks,je as matchers,Be as nodes,qe as root,Ne as server_loads};