const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["../nodes/0.g7kZ7_YE.js","../chunks/disclose-version.BHozzVJo.js","../chunks/runtime.-plsBkaG.js","../nodes/1.Bx1jxKG5.js","../chunks/render.BudXNarT.js","../chunks/lifecycle.Dzzt3MP_.js","../chunks/store.CkPTVkg6.js","../chunks/entry.DB-GugzC.js","../chunks/paths.CLLvq6KT.js","../nodes/2.CvOxnYz9.js","../assets/2.Xw61wHtR.css","../nodes/3.xHG-gQoZ.js","../chunks/index-client.DMpqzUzl.js","../chunks/transform.CzLan8xH.js","../assets/3.ygB1r1cX.css","../nodes/4.Dg2DGUYe.js","../chunks/props.CNLPtm4q.js","../assets/4.IPNNAL0g.css"])))=>i.map(i=>d[i]);
var U=a=>{throw TypeError(a)};var W=(a,e,s)=>e.has(a)||U("Cannot "+s);var f=(a,e,s)=>(W(a,e,"read from private field"),s?s.call(a):e.get(a)),S=(a,e,s)=>e.has(a)?U("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(a):e.set(a,s),O=(a,e,s,n)=>(W(a,e,"write to private field"),n?n.call(a,s):e.set(a,s),s);import{k as w,a6 as G,h as J,am as ee,an as te,a5 as re,a4 as Y,ao as H,i as B,ap as F,l as K,E as Q,g,x as A,aq as se,Y as ae,W as ne,p as oe,u as ie,a as ce,ar as le,m as T,o as ue,as as p,v as fe,q as de,t as me,s as _e,f as C}from"../chunks/runtime.-plsBkaG.js";import{h as he,m as ve,u as ge,s as ye}from"../chunks/render.BudXNarT.js";import{a as R,t as X,c as D,d as Ee}from"../chunks/disclose-version.BHozzVJo.js";import{p as I,a as be}from"../chunks/props.CNLPtm4q.js";import{o as Re,b as j}from"../chunks/index-client.DMpqzUzl.js";function q(a,e,s,n=null,i=!1){w&&G();var o=a,r=null,t=null,l=null,u=i?Q:0;J(()=>{if(l===(l=!!e()))return;let m=!1;if(w){const P=o.data===ee;l===P&&(o=te(),re(o),Y(!1),m=!0)}l?(r?H(r):r=B(()=>s(o)),t&&F(t,()=>{t=null})):(t?H(t):n&&(t=B(()=>n(o))),r&&F(r,()=>{r=null})),m&&Y(!0)},u),w&&(o=K)}function V(a,e,s){w&&G();var n=a,i,o;J(()=>{i!==(i=e())&&(o&&(F(o),o=null),i&&(o=B(()=>s(n,i))))},Q),w&&(n=K)}function Pe(a){return class extends ke{constructor(e){super({component:a,...e})}}}var y,d;class ke{constructor(e){S(this,y);S(this,d);var o;var s=new Map,n=(r,t)=>{var l=ne(t);return s.set(r,l),l};const i=new Proxy({...e.props||{},$$events:{}},{get(r,t){return g(s.get(t)??n(t,Reflect.get(r,t)))},has(r,t){return g(s.get(t)??n(t,Reflect.get(r,t))),Reflect.has(r,t)},set(r,t,l){return A(s.get(t)??n(t,l),l),Reflect.set(r,t,l)}});O(this,d,(e.hydrate?he:ve)(e.component,{target:e.target,props:i,context:e.context,intro:e.intro??!1,recover:e.recover})),(!((o=e==null?void 0:e.props)!=null&&o.$$host)||e.sync===!1)&&se(),O(this,y,i.$$events);for(const r of Object.keys(f(this,d)))r==="$set"||r==="$destroy"||r==="$on"||ae(this,r,{get(){return f(this,d)[r]},set(t){f(this,d)[r]=t},enumerable:!0});f(this,d).$set=r=>{Object.assign(i,r)},f(this,d).$destroy=()=>{ge(f(this,d))}}$set(e){f(this,d).$set(e)}$on(e,s){f(this,y)[e]=f(this,y)[e]||[];const n=(...i)=>s.call(this,...i);return f(this,y)[e].push(n),()=>{f(this,y)[e]=f(this,y)[e].filter(i=>i!==n)}}$destroy(){f(this,d).$destroy()}}y=new WeakMap,d=new WeakMap;const we="modulepreload",xe=function(a,e){return new URL(a,e).href},z={},k=function(e,s,n){let i=Promise.resolve();if(s&&s.length>0){const r=document.getElementsByTagName("link"),t=document.querySelector("meta[property=csp-nonce]"),l=(t==null?void 0:t.nonce)||(t==null?void 0:t.getAttribute("nonce"));i=Promise.allSettled(s.map(u=>{if(u=xe(u,n),u in z)return;z[u]=!0;const m=u.endsWith(".css"),P=m?'[rel="stylesheet"]':"";if(!!n)for(let _=r.length-1;_>=0;_--){const v=r[_];if(v.href===u&&(!m||v.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${u}"]${P}`))return;const c=document.createElement("link");if(c.rel=m?"stylesheet":we,m||(c.as="script"),c.crossOrigin="",c.href=u,l&&c.setAttribute("nonce",l),document.head.appendChild(c),m)return new Promise((_,v)=>{c.addEventListener("load",_),c.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${u}`)))})}))}function o(r){const t=new Event("vite:preloadError",{cancelable:!0});if(t.payload=r,window.dispatchEvent(t),!t.defaultPrevented)throw r}return i.then(r=>{for(const t of r||[])t.status==="rejected"&&o(t.reason);return e().catch(o)})},qe={};var Te=X('<div id="svelte-announcer" aria-live="assertive" aria-atomic="true" style="position: absolute; left: 0; top: 0; clip: rect(0 0 0 0); clip-path: inset(50%); overflow: hidden; white-space: nowrap; width: 1px; height: 1px"><!></div>'),Ae=X("<!> <!>",1);function Le(a,e){oe(e,!0);let s=I(e,"components",23,()=>[]),n=I(e,"data_0",3,null),i=I(e,"data_1",3,null);ie(()=>e.stores.page.set(e.page)),ce(()=>{e.stores,e.page,e.constructors,s(),e.form,n(),i(),e.stores.page.notify()});let o=p(!1),r=p(!1),t=p(null);Re(()=>{const E=e.stores.page.subscribe(()=>{g(o)&&(A(r,!0),le().then(()=>{A(t,be(document.title||"untitled page"))}))});return A(o,!0),E});const l=C(()=>e.constructors[1]);var u=Ae(),m=T(u);q(m,()=>e.constructors[1],E=>{var c=D();const _=C(()=>e.constructors[0]);var v=T(c);V(v,()=>g(_),(b,L)=>{j(L(b,{get data(){return n()},get form(){return e.form},children:(h,Se)=>{var N=D(),Z=T(N);V(Z,()=>g(l),(M,$)=>{j($(M,{get data(){return i()},get form(){return e.form}}),x=>s()[1]=x,()=>{var x;return(x=s())==null?void 0:x[1]})}),R(h,N)},$$slots:{default:!0}}),h=>s()[0]=h,()=>{var h;return(h=s())==null?void 0:h[0]})}),R(E,c)},E=>{var c=D();const _=C(()=>e.constructors[0]);var v=T(c);V(v,()=>g(_),(b,L)=>{j(L(b,{get data(){return n()},get form(){return e.form}}),h=>s()[0]=h,()=>{var h;return(h=s())==null?void 0:h[0]})}),R(E,c)});var P=fe(m,2);q(P,()=>g(o),E=>{var c=Te(),_=de(c);q(_,()=>g(r),v=>{var b=Ee();me(()=>ye(b,g(t))),R(v,b)}),_e(c),R(E,c)}),R(a,u),ue()}const Ve=Pe(Le),Be=[()=>k(()=>import("../nodes/0.g7kZ7_YE.js"),__vite__mapDeps([0,1,2]),import.meta.url),()=>k(()=>import("../nodes/1.Bx1jxKG5.js"),__vite__mapDeps([3,1,2,4,5,6,7,8]),import.meta.url),()=>k(()=>import("../nodes/2.CvOxnYz9.js"),__vite__mapDeps([9,1,2,8,10]),import.meta.url),()=>k(()=>import("../nodes/3.xHG-gQoZ.js"),__vite__mapDeps([11,1,2,12,5,13,8,14]),import.meta.url),()=>k(()=>import("../nodes/4.Dg2DGUYe.js"),__vite__mapDeps([15,1,2,16,6,12,13,8,17]),import.meta.url)],Fe=[],Ne={"/":[2],"/projects":[3],"/projects/south-africa-energy":[4]},Ue={handleError:({error:a})=>{console.error(a)},reroute:()=>{}};export{Ne as dictionary,Ue as hooks,qe as matchers,Be as nodes,Ve as root,Fe as server_loads};
