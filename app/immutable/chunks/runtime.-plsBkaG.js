var mn=Array.isArray,gn=Array.from,An=Object.defineProperty,ot=Object.getOwnPropertyDescriptor,Ut=Object.getOwnPropertyDescriptors,xn=Object.prototype,Rn=Array.prototype,Bt=Object.getPrototypeOf;const Sn=()=>{};function Dn(t){return t()}function Vt(t){for(var n=0;n<t.length;n++)t[n]()}const m=2,_t=4,M=8,tt=16,E=32,G=64,D=128,B=256,p=512,x=1024,j=2048,b=4096,Y=8192,Kt=16384,ct=32768,kn=65536,$t=1<<18,vt=1<<19,ut=Symbol("$state");function pt(t){return t===this.v}function Gt(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function ht(t){return!Gt(t,this.v)}function Zt(t){throw new Error("effect_in_teardown")}function Wt(){throw new Error("effect_in_unowned_derived")}function zt(t){throw new Error("effect_orphan")}function Jt(){throw new Error("effect_update_depth_exceeded")}function On(){throw new Error("hydration_failed")}function In(t){throw new Error("lifecycle_legacy_only")}function Nn(t){throw new Error("props_invalid_value")}function bn(){throw new Error("state_descriptors_fixed")}function Pn(){throw new Error("state_prototype_fixed")}function Qt(){throw new Error("state_unsafe_local_read")}function Xt(){throw new Error("state_unsafe_mutation")}function nt(t){return{f:0,v:t,reactions:null,equals:pt,version:0}}function Cn(t){return dt(nt(t))}function tn(t,n=!1){var e;const r=nt(t);return n||(r.equals=ht),f!==null&&f.l!==null&&((e=f.l).s??(e.s=[])).push(r),r}function Fn(t,n=!1){return dt(tn(t,n))}function dt(t){return a!==null&&a.f&m&&(y===null?pn([t]):y.push(t)),t}function qn(t,n){return a!==null&&st()&&a.f&(m|tt)&&(y===null||!y.includes(t))&&Xt(),nn(t,n)}function nn(t,n){return t.equals(n)||(t.v=n,t.version=qt(),yt(t,x),st()&&u!==null&&u.f&p&&!(u.f&E)&&(_!==null&&_.includes(t)?(w(u,x),W(u)):A===null?hn([t]):A.push(t))),n}function yt(t,n){var r=t.reactions;if(r!==null)for(var e=st(),s=r.length,l=0;l<s;l++){var o=r[l],i=o.f;i&x||!e&&o===u||(w(o,n),i&(p|D)&&(i&m?yt(o,j):W(o)))}}const Ln=1,Mn=2,jn=4,Yn=8,Hn=16,Un=1,Bn=2,rn="[",en="[!",sn="]",Et={},Vn=Symbol();function wt(t){console.warn("hydration_mismatch")}let S=!1;function Kn(t){S=t}let d;function F(t){if(t===null)throw wt(),Et;return d=t}function $n(){return F(k(d))}function Gn(t){if(S){if(k(d)!==null)throw wt(),Et;d=t}}function Zn(t=1){if(S){for(var n=t,r=d;n--;)r=k(r);d=r}}function Wn(){for(var t=0,n=d;;){if(n.nodeType===8){var r=n.data;if(r===sn){if(t===0)return n;t-=1}else(r===rn||r===en)&&(t+=1)}var e=k(n);n.remove(),n=e}}var at,Tt,mt;function zn(){if(at===void 0){at=window;var t=Element.prototype,n=Node.prototype;Tt=ot(n,"firstChild").get,mt=ot(n,"nextSibling").get,t.__click=void 0,t.__className="",t.__attributes=null,t.__styles=null,t.__e=void 0,Text.prototype.__t=void 0}}function z(t=""){return document.createTextNode(t)}function J(t){return Tt.call(t)}function k(t){return mt.call(t)}function Jn(t,n){if(!S)return J(t);var r=J(d);if(r===null)r=d.appendChild(z());else if(n&&r.nodeType!==3){var e=z();return r==null||r.before(e),F(e),e}return F(r),r}function Qn(t,n){if(!S){var r=J(t);return r instanceof Comment&&r.data===""?k(r):r}return d}function Xn(t,n=1,r=!1){let e=S?d:t;for(;n--;)e=k(e);if(!S)return e;var s=e.nodeType;if(r&&s!==3){var l=z();return e==null||e.before(l),F(l),l}return F(e),e}function tr(t){t.textContent=""}function ln(t){var n=m|x;u===null?n|=D:u.f|=vt;const r={children:null,ctx:f,deps:null,equals:pt,f:n,fn:t,reactions:null,v:null,version:0,parent:u};if(a!==null&&a.f&m){var e=a;(e.children??(e.children=[])).push(r)}return r}function nr(t){const n=ln(t);return n.equals=ht,n}function gt(t){var n=t.children;if(n!==null){t.children=null;for(var r=0;r<n.length;r+=1){var e=n[r];e.f&m?rt(e):C(e)}}}function At(t){var n,r=u;$(t.parent);try{gt(t),n=Lt(t)}finally{$(r)}return n}function xt(t){var n=At(t),r=(O||t.f&D)&&t.deps!==null?j:p;w(t,r),t.equals(n)||(t.v=n,t.version=qt())}function rt(t){gt(t),L(t,0),w(t,Y),t.v=t.children=t.deps=t.ctx=t.reactions=null}function Rt(t){u===null&&a===null&&zt(),a!==null&&a.f&D&&Wt(),et&&Zt()}function on(t,n){var r=n.last;r===null?n.last=n.first=t:(r.next=t,t.prev=r,n.last=t)}function P(t,n,r,e=!0){var s=(t&G)!==0,l=u,o={ctx:f,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:t|x,first:null,fn:n,last:null,next:null,parent:s?null:l,prev:null,teardown:null,transitions:null,version:0};if(r){var i=I;try{it(!0),Z(o),o.f|=Kt}catch(c){throw C(o),c}finally{it(i)}}else n!==null&&W(o);var T=r&&o.deps===null&&o.first===null&&o.nodes_start===null&&o.teardown===null&&(o.f&vt)===0;if(!T&&!s&&e&&(l!==null&&on(o,l),a!==null&&a.f&m)){var g=a;(g.children??(g.children=[])).push(o)}return o}function rr(t){const n=P(M,null,!1);return w(n,p),n.teardown=t,n}function er(t){Rt();var n=u!==null&&(u.f&E)!==0&&f!==null&&!f.m;if(n){var r=f;(r.e??(r.e=[])).push({fn:t,effect:u,reaction:a})}else{var e=St(t);return e}}function sr(t){return Rt(),un(t)}function lr(t){const n=P(G,t,!0);return()=>{C(n)}}function St(t){return P(_t,t,!1)}function un(t){return P(M,t,!0)}function or(t){return an(t)}function an(t,n=0){return P(M|tt|n,t,!0)}function ur(t,n=!0){return P(M|E,t,!0,n)}function Dt(t){var n=t.teardown;if(n!==null){const r=et,e=a;ft(!0),K(null);try{n.call(null)}finally{ft(r),K(e)}}}function kt(t){var n=t.deriveds;if(n!==null){t.deriveds=null;for(var r=0;r<n.length;r+=1)rt(n[r])}}function Ot(t,n=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var e=r.next;C(r,n),r=e}}function fn(t){for(var n=t.first;n!==null;){var r=n.next;n.f&E||C(n),n=r}}function C(t,n=!0){var r=!1;if((n||t.f&$t)&&t.nodes_start!==null){for(var e=t.nodes_start,s=t.nodes_end;e!==null;){var l=e===s?null:k(e);e.remove(),e=l}r=!0}Ot(t,n&&!r),kt(t),L(t,0),w(t,Y);var o=t.transitions;if(o!==null)for(const T of o)T.stop();Dt(t);var i=t.parent;i!==null&&i.first!==null&&It(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.parent=t.fn=t.nodes_start=t.nodes_end=null}function It(t){var n=t.parent,r=t.prev,e=t.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),n!==null&&(n.first===t&&(n.first=e),n.last===t&&(n.last=r))}function ar(t,n){var r=[];Nt(t,r,!0),_n(r,()=>{C(t),n&&n()})}function _n(t,n){var r=t.length;if(r>0){var e=()=>--r||n();for(var s of t)s.out(e)}else n()}function Nt(t,n,r){if(!(t.f&b)){if(t.f^=b,t.transitions!==null)for(const o of t.transitions)(o.is_global||r)&&n.push(o);for(var e=t.first;e!==null;){var s=e.next,l=(e.f&ct)!==0||(e.f&E)!==0;Nt(e,n,l?r:!1),e=s}}}function ir(t){bt(t,!0)}function bt(t,n){if(t.f&b){t.f^=b,H(t)&&Z(t);for(var r=t.first;r!==null;){var e=r.next,s=(r.f&ct)!==0||(r.f&E)!==0;bt(r,s?n:!1),r=e}if(t.transitions!==null)for(const l of t.transitions)(l.is_global||n)&&l.in()}}let V=!1,Q=[];function Pt(){V=!1;const t=Q.slice();Q=[],Vt(t)}function fr(t){V||(V=!0,queueMicrotask(Pt)),Q.push(t)}function cn(){V&&Pt()}const Ct=0,vn=1;let U=Ct,q=!1,I=!1,et=!1;function it(t){I=t}function ft(t){et=t}let R=[],N=0;let a=null;function K(t){a=t}let u=null;function $(t){u=t}let y=null;function pn(t){y=t}let _=null,h=0,A=null;function hn(t){A=t}let Ft=0,O=!1,f=null;function qt(){return++Ft}function st(){return f!==null&&f.l===null}function H(t){var o,i;var n=t.f;if(n&x)return!0;if(n&j){var r=t.deps,e=(n&D)!==0;if(r!==null){var s;if(n&B){for(s=0;s<r.length;s++)((o=r[s]).reactions??(o.reactions=[])).push(t);t.f^=B}for(s=0;s<r.length;s++){var l=r[s];if(H(l)&&xt(l),e&&u!==null&&!O&&!((i=l==null?void 0:l.reactions)!=null&&i.includes(t))&&(l.reactions??(l.reactions=[])).push(t),l.version>t.version)return!0}}e||w(t,p)}return!1}function dn(t,n,r){throw t}function Lt(t){var lt;var n=_,r=h,e=A,s=a,l=O,o=y,i=f,T=t.f;_=null,h=0,A=null,a=T&(E|G)?null:t,O=!I&&(T&D)!==0,y=null,f=t.ctx;try{var g=(0,t.fn)(),c=t.deps;if(_!==null){var v;if(L(t,h),c!==null&&h>0)for(c.length=h+_.length,v=0;v<_.length;v++)c[h+v]=_[v];else t.deps=c=_;if(!O)for(v=h;v<c.length;v++)((lt=c[v]).reactions??(lt.reactions=[])).push(t)}else c!==null&&h<c.length&&(L(t,h),c.length=h);return g}finally{_=n,h=r,A=e,a=s,O=l,y=o,f=i}}function yn(t,n){let r=n.reactions;if(r!==null){var e=r.indexOf(t);if(e!==-1){var s=r.length-1;s===0?r=n.reactions=null:(r[e]=r[s],r.pop())}}r===null&&n.f&m&&(_===null||!_.includes(n))&&(w(n,j),n.f&(D|B)||(n.f^=B),L(n,0))}function L(t,n){var r=t.deps;if(r!==null)for(var e=n;e<r.length;e++)yn(t,r[e])}function Z(t){var n=t.f;if(!(n&Y)){w(t,p);var r=u;u=t;try{n&tt?fn(t):Ot(t),kt(t),Dt(t);var e=Lt(t);t.teardown=typeof e=="function"?e:null,t.version=Ft}catch(s){dn(s)}finally{u=r}}}function Mt(){N>1e3&&(N=0,Jt()),N++}function jt(t){var n=t.length;if(n!==0){Mt();var r=I;I=!0;try{for(var e=0;e<n;e++){var s=t[e];s.f&p||(s.f^=p);var l=[];Yt(s,l),En(l)}}finally{I=r}}}function En(t){var n=t.length;if(n!==0)for(var r=0;r<n;r++){var e=t[r];!(e.f&(Y|b))&&H(e)&&(Z(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?It(e):e.fn=null))}}function wn(){if(q=!1,N>1001)return;const t=R;R=[],jt(t),q||(N=0)}function W(t){U===Ct&&(q||(q=!0,queueMicrotask(wn)));for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if(r&(G|E)){if(!(r&p))return;n.f^=p}}R.push(n)}function Yt(t,n){var r=t.first,e=[];t:for(;r!==null;){var s=r.f,l=(s&E)!==0,o=l&&(s&p)!==0;if(!o&&!(s&b))if(s&M){l?r.f^=p:H(r)&&Z(r);var i=r.first;if(i!==null){r=i;continue}}else s&_t&&e.push(r);var T=r.next;if(T===null){let v=r.parent;for(;v!==null;){if(t===v)break t;var g=v.next;if(g!==null){r=g;continue t}v=v.parent}}r=T}for(var c=0;c<e.length;c++)i=e[c],n.push(i),Yt(i,n)}function Ht(t){var n=U,r=R;try{Mt();const s=[];U=vn,R=s,q=!1,jt(r);var e=t==null?void 0:t();return cn(),(R.length>0||s.length>0)&&Ht(),N=0,e}finally{U=n,R=r}}async function _r(){await Promise.resolve(),Ht()}function cr(t){var i;var n=t.f,r=(n&m)!==0;if(r&&n&Y){var e=At(t);return rt(t),e}if(a!==null){y!==null&&y.includes(t)&&Qt();var s=a.deps;_===null&&s!==null&&s[h]===t?h++:_===null?_=[t]:_.push(t),A!==null&&u!==null&&u.f&p&&!(u.f&E)&&A.includes(t)&&(w(u,x),W(u))}else if(r&&t.deps===null){var l=t,o=l.parent;o!==null&&!((i=o.deriveds)!=null&&i.includes(l))&&(o.deriveds??(o.deriveds=[])).push(l)}return r&&(l=t,H(l)&&xt(l)),t.v}function vr(t){const n=a;try{return a=null,t()}finally{a=n}}const Tn=~(x|j|p);function w(t,n){t.f=t.f&Tn|n}function pr(t,n=!1,r){f={p:f,c:null,e:null,m:!1,s:t,x:null,l:null},n||(f.l={s:null,u:null,r1:[],r2:nt(!1)})}function hr(t){const n=f;if(n!==null){const o=n.e;if(o!==null){var r=u,e=a;n.e=null;try{for(var s=0;s<o.length;s++){var l=o[s];$(l.effect),K(l.reaction),St(l.fn)}}finally{$(r),K(e)}}f=n.p,n.m=!0}return{}}function dr(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(ut in t)X(t);else if(!Array.isArray(t))for(let n in t){const r=t[n];typeof r=="object"&&r&&ut in r&&X(r)}}}function X(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let e in t)try{X(t[e],n)}catch{}const r=Bt(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=Ut(r);for(let s in e){const l=e[s].get;if(l)try{l.call(t)}catch{}}}}}export{zn as $,nt as A,bn as B,ot as C,u as D,ct as E,Pn as F,Bt as G,mn as H,Nn as I,jn as J,ht as K,kn as L,E as M,$ as N,Ln as O,Mn as P,Yn as Q,G as R,ut as S,Hn as T,Vn as U,nr as V,tn as W,rr as X,An as Y,K as Z,a as _,er as a,J as a0,rn as a1,k as a2,Et as a3,Kn as a4,F as a5,$n as a6,sn as a7,wt as a8,On as a9,tr as aa,gn as ab,lr as ac,z as ad,Ut as ae,Zn as af,St as ag,un as ah,fr as ai,In as aj,Un as ak,Bn as al,en as am,Wn as an,ir as ao,ar as ap,Ht as aq,_r as ar,Cn as as,Gt as at,vr as b,f as c,Dn as d,dr as e,ln as f,cr as g,an as h,ur as i,C as j,S as k,d as l,Qn as m,Sn as n,hr as o,pr as p,Jn as q,Vt as r,Gn as s,or as t,sr as u,Xn as v,Fn as w,qn as x,xn as y,Rn as z};
