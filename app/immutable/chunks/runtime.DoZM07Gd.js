var mn=Array.isArray,An=Array.from,gn=Object.defineProperty,ot=Object.getOwnPropertyDescriptor,Ut=Object.getOwnPropertyDescriptors,Sn=Object.prototype,Rn=Array.prototype,Bt=Object.getPrototypeOf;const xn=()=>{};function Dn(t){return t()}function Vt(t){for(var n=0;n<t.length;n++)t[n]()}const m=2,_t=4,M=8,tt=16,E=32,$=64,D=128,B=256,p=512,S=1024,Y=2048,b=4096,j=8192,Gt=16384,ct=32768,On=65536,Kt=1<<18,vt=1<<19,ut=Symbol("$state"),kn=Symbol("");function pt(t){return t===this.v}function $t(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function ht(t){return!$t(t,this.v)}function Zt(t){throw new Error("effect_in_teardown")}function Wt(){throw new Error("effect_in_unowned_derived")}function zt(t){throw new Error("effect_orphan")}function Jt(){throw new Error("effect_update_depth_exceeded")}function In(){throw new Error("hydration_failed")}function Nn(t){throw new Error("lifecycle_legacy_only")}function bn(t){throw new Error("props_invalid_value")}function Pn(){throw new Error("state_descriptors_fixed")}function Cn(){throw new Error("state_prototype_fixed")}function Qt(){throw new Error("state_unsafe_local_read")}function Xt(){throw new Error("state_unsafe_mutation")}function nt(t){return{f:0,v:t,reactions:null,equals:pt,version:0}}function Fn(t){return dt(nt(t))}function tn(t,n=!1){var e;const r=nt(t);return n||(r.equals=ht),f!==null&&f.l!==null&&((e=f.l).s??(e.s=[])).push(r),r}function qn(t,n=!1){return dt(tn(t,n))}function dt(t){return a!==null&&a.f&m&&(y===null?pn([t]):y.push(t)),t}function Ln(t,n){return a!==null&&st()&&a.f&(m|tt)&&(y===null||!y.includes(t))&&Xt(),nn(t,n)}function nn(t,n){return t.equals(n)||(t.v=n,t.version=qt(),yt(t,S),st()&&u!==null&&u.f&p&&!(u.f&E)&&(_!==null&&_.includes(t)?(w(u,S),W(u)):g===null?hn([t]):g.push(t))),n}function yt(t,n){var r=t.reactions;if(r!==null)for(var e=st(),s=r.length,l=0;l<s;l++){var o=r[l],i=o.f;i&S||!e&&o===u||(w(o,n),i&(p|D)&&(i&m?yt(o,Y):W(o)))}}const Mn=1,Yn=2,jn=4,Hn=8,Un=16,Bn=1,Vn=2,rn="[",en="[!",sn="]",Et={},Gn=Symbol();function wt(t){console.warn("hydration_mismatch")}let x=!1;function Kn(t){x=t}let d;function F(t){if(t===null)throw wt(),Et;return d=t}function $n(){return F(O(d))}function Zn(t){if(x){if(O(d)!==null)throw wt(),Et;d=t}}function Wn(t=1){if(x){for(var n=t,r=d;n--;)r=O(r);d=r}}function zn(){for(var t=0,n=d;;){if(n.nodeType===8){var r=n.data;if(r===sn){if(t===0)return n;t-=1}else(r===rn||r===en)&&(t+=1)}var e=O(n);n.remove(),n=e}}var at,Tt,mt;function Jn(){if(at===void 0){at=window;var t=Element.prototype,n=Node.prototype;Tt=ot(n,"firstChild").get,mt=ot(n,"nextSibling").get,t.__click=void 0,t.__className="",t.__attributes=null,t.__styles=null,t.__e=void 0,Text.prototype.__t=void 0}}function z(t=""){return document.createTextNode(t)}function J(t){return Tt.call(t)}function O(t){return mt.call(t)}function Qn(t,n){if(!x)return J(t);var r=J(d);if(r===null)r=d.appendChild(z());else if(n&&r.nodeType!==3){var e=z();return r==null||r.before(e),F(e),e}return F(r),r}function Xn(t,n){if(!x){var r=J(t);return r instanceof Comment&&r.data===""?O(r):r}return d}function tr(t,n=1,r=!1){let e=x?d:t;for(;n--;)e=O(e);if(!x)return e;var s=e.nodeType;if(r&&s!==3){var l=z();return e==null||e.before(l),F(l),l}return F(e),e}function nr(t){t.textContent=""}function ln(t){var n=m|S;u===null?n|=D:u.f|=vt;const r={children:null,ctx:f,deps:null,equals:pt,f:n,fn:t,reactions:null,v:null,version:0,parent:u};if(a!==null&&a.f&m){var e=a;(e.children??(e.children=[])).push(r)}return r}function rr(t){const n=ln(t);return n.equals=ht,n}function At(t){var n=t.children;if(n!==null){t.children=null;for(var r=0;r<n.length;r+=1){var e=n[r];e.f&m?rt(e):C(e)}}}function gt(t){var n,r=u;K(t.parent);try{At(t),n=Lt(t)}finally{K(r)}return n}function St(t){var n=gt(t),r=(k||t.f&D)&&t.deps!==null?Y:p;w(t,r),t.equals(n)||(t.v=n,t.version=qt())}function rt(t){At(t),L(t,0),w(t,j),t.v=t.children=t.deps=t.ctx=t.reactions=null}function Rt(t){u===null&&a===null&&zt(),a!==null&&a.f&D&&Wt(),et&&Zt()}function on(t,n){var r=n.last;r===null?n.last=n.first=t:(r.next=t,t.prev=r,n.last=t)}function P(t,n,r,e=!0){var s=(t&$)!==0,l=u,o={ctx:f,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:t|S,first:null,fn:n,last:null,next:null,parent:s?null:l,prev:null,teardown:null,transitions:null,version:0};if(r){var i=I;try{it(!0),Z(o),o.f|=Gt}catch(c){throw C(o),c}finally{it(i)}}else n!==null&&W(o);var T=r&&o.deps===null&&o.first===null&&o.nodes_start===null&&o.teardown===null&&(o.f&vt)===0;if(!T&&!s&&e&&(l!==null&&on(o,l),a!==null&&a.f&m)){var A=a;(A.children??(A.children=[])).push(o)}return o}function er(t){const n=P(M,null,!1);return w(n,p),n.teardown=t,n}function sr(t){Rt();var n=u!==null&&(u.f&E)!==0&&f!==null&&!f.m;if(n){var r=f;(r.e??(r.e=[])).push({fn:t,effect:u,reaction:a})}else{var e=xt(t);return e}}function lr(t){return Rt(),un(t)}function or(t){const n=P($,t,!0);return()=>{C(n)}}function xt(t){return P(_t,t,!1)}function un(t){return P(M,t,!0)}function ur(t){return an(t)}function an(t,n=0){return P(M|tt|n,t,!0)}function ar(t,n=!0){return P(M|E,t,!0,n)}function Dt(t){var n=t.teardown;if(n!==null){const r=et,e=a;ft(!0),G(null);try{n.call(null)}finally{ft(r),G(e)}}}function Ot(t){var n=t.deriveds;if(n!==null){t.deriveds=null;for(var r=0;r<n.length;r+=1)rt(n[r])}}function kt(t,n=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var e=r.next;C(r,n),r=e}}function fn(t){for(var n=t.first;n!==null;){var r=n.next;n.f&E||C(n),n=r}}function C(t,n=!0){var r=!1;if((n||t.f&Kt)&&t.nodes_start!==null){for(var e=t.nodes_start,s=t.nodes_end;e!==null;){var l=e===s?null:O(e);e.remove(),e=l}r=!0}kt(t,n&&!r),Ot(t),L(t,0),w(t,j);var o=t.transitions;if(o!==null)for(const T of o)T.stop();Dt(t);var i=t.parent;i!==null&&i.first!==null&&It(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.parent=t.fn=t.nodes_start=t.nodes_end=null}function It(t){var n=t.parent,r=t.prev,e=t.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),n!==null&&(n.first===t&&(n.first=e),n.last===t&&(n.last=r))}function ir(t,n){var r=[];Nt(t,r,!0),_n(r,()=>{C(t),n&&n()})}function _n(t,n){var r=t.length;if(r>0){var e=()=>--r||n();for(var s of t)s.out(e)}else n()}function Nt(t,n,r){if(!(t.f&b)){if(t.f^=b,t.transitions!==null)for(const o of t.transitions)(o.is_global||r)&&n.push(o);for(var e=t.first;e!==null;){var s=e.next,l=(e.f&ct)!==0||(e.f&E)!==0;Nt(e,n,l?r:!1),e=s}}}function fr(t){bt(t,!0)}function bt(t,n){if(t.f&b){t.f^=b,H(t)&&Z(t);for(var r=t.first;r!==null;){var e=r.next,s=(r.f&ct)!==0||(r.f&E)!==0;bt(r,s?n:!1),r=e}if(t.transitions!==null)for(const l of t.transitions)(l.is_global||n)&&l.in()}}let V=!1,Q=[];function Pt(){V=!1;const t=Q.slice();Q=[],Vt(t)}function _r(t){V||(V=!0,queueMicrotask(Pt)),Q.push(t)}function cn(){V&&Pt()}const Ct=0,vn=1;let U=Ct,q=!1,I=!1,et=!1;function it(t){I=t}function ft(t){et=t}let R=[],N=0;let a=null;function G(t){a=t}let u=null;function K(t){u=t}let y=null;function pn(t){y=t}let _=null,h=0,g=null;function hn(t){g=t}let Ft=0,k=!1,f=null;function qt(){return++Ft}function st(){return f!==null&&f.l===null}function H(t){var o,i;var n=t.f;if(n&S)return!0;if(n&Y){var r=t.deps,e=(n&D)!==0;if(r!==null){var s;if(n&B){for(s=0;s<r.length;s++)((o=r[s]).reactions??(o.reactions=[])).push(t);t.f^=B}for(s=0;s<r.length;s++){var l=r[s];if(H(l)&&St(l),e&&u!==null&&!k&&!((i=l==null?void 0:l.reactions)!=null&&i.includes(t))&&(l.reactions??(l.reactions=[])).push(t),l.version>t.version)return!0}}e||w(t,p)}return!1}function dn(t,n,r){throw t}function Lt(t){var lt;var n=_,r=h,e=g,s=a,l=k,o=y,i=f,T=t.f;_=null,h=0,g=null,a=T&(E|$)?null:t,k=!I&&(T&D)!==0,y=null,f=t.ctx;try{var A=(0,t.fn)(),c=t.deps;if(_!==null){var v;if(L(t,h),c!==null&&h>0)for(c.length=h+_.length,v=0;v<_.length;v++)c[h+v]=_[v];else t.deps=c=_;if(!k)for(v=h;v<c.length;v++)((lt=c[v]).reactions??(lt.reactions=[])).push(t)}else c!==null&&h<c.length&&(L(t,h),c.length=h);return A}finally{_=n,h=r,g=e,a=s,k=l,y=o,f=i}}function yn(t,n){let r=n.reactions;if(r!==null){var e=r.indexOf(t);if(e!==-1){var s=r.length-1;s===0?r=n.reactions=null:(r[e]=r[s],r.pop())}}r===null&&n.f&m&&(_===null||!_.includes(n))&&(w(n,Y),n.f&(D|B)||(n.f^=B),L(n,0))}function L(t,n){var r=t.deps;if(r!==null)for(var e=n;e<r.length;e++)yn(t,r[e])}function Z(t){var n=t.f;if(!(n&j)){w(t,p);var r=u;u=t;try{n&tt?fn(t):kt(t),Ot(t),Dt(t);var e=Lt(t);t.teardown=typeof e=="function"?e:null,t.version=Ft}catch(s){dn(s)}finally{u=r}}}function Mt(){N>1e3&&(N=0,Jt()),N++}function Yt(t){var n=t.length;if(n!==0){Mt();var r=I;I=!0;try{for(var e=0;e<n;e++){var s=t[e];s.f&p||(s.f^=p);var l=[];jt(s,l),En(l)}}finally{I=r}}}function En(t){var n=t.length;if(n!==0)for(var r=0;r<n;r++){var e=t[r];!(e.f&(j|b))&&H(e)&&(Z(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?It(e):e.fn=null))}}function wn(){if(q=!1,N>1001)return;const t=R;R=[],Yt(t),q||(N=0)}function W(t){U===Ct&&(q||(q=!0,queueMicrotask(wn)));for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if(r&($|E)){if(!(r&p))return;n.f^=p}}R.push(n)}function jt(t,n){var r=t.first,e=[];t:for(;r!==null;){var s=r.f,l=(s&E)!==0,o=l&&(s&p)!==0;if(!o&&!(s&b))if(s&M){l?r.f^=p:H(r)&&Z(r);var i=r.first;if(i!==null){r=i;continue}}else s&_t&&e.push(r);var T=r.next;if(T===null){let v=r.parent;for(;v!==null;){if(t===v)break t;var A=v.next;if(A!==null){r=A;continue t}v=v.parent}}r=T}for(var c=0;c<e.length;c++)i=e[c],n.push(i),jt(i,n)}function Ht(t){var n=U,r=R;try{Mt();const s=[];U=vn,R=s,q=!1,Yt(r);var e=t==null?void 0:t();return cn(),(R.length>0||s.length>0)&&Ht(),N=0,e}finally{U=n,R=r}}async function cr(){await Promise.resolve(),Ht()}function vr(t){var i;var n=t.f,r=(n&m)!==0;if(r&&n&j){var e=gt(t);return rt(t),e}if(a!==null){y!==null&&y.includes(t)&&Qt();var s=a.deps;_===null&&s!==null&&s[h]===t?h++:_===null?_=[t]:_.push(t),g!==null&&u!==null&&u.f&p&&!(u.f&E)&&g.includes(t)&&(w(u,S),W(u))}else if(r&&t.deps===null){var l=t,o=l.parent;o!==null&&!((i=o.deriveds)!=null&&i.includes(l))&&(o.deriveds??(o.deriveds=[])).push(l)}return r&&(l=t,H(l)&&St(l)),t.v}function pr(t){const n=a;try{return a=null,t()}finally{a=n}}const Tn=~(S|Y|p);function w(t,n){t.f=t.f&Tn|n}function hr(t,n=!1,r){f={p:f,c:null,e:null,m:!1,s:t,x:null,l:null},n||(f.l={s:null,u:null,r1:[],r2:nt(!1)})}function dr(t){const n=f;if(n!==null){const o=n.e;if(o!==null){var r=u,e=a;n.e=null;try{for(var s=0;s<o.length;s++){var l=o[s];K(l.effect),G(l.reaction),xt(l.fn)}}finally{K(r),G(e)}}f=n.p,n.m=!0}return{}}function yr(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(ut in t)X(t);else if(!Array.isArray(t))for(let n in t){const r=t[n];typeof r=="object"&&r&&ut in r&&X(r)}}}function X(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let e in t)try{X(t[e],n)}catch{}const r=Bt(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=Ut(r);for(let s in e){const l=e[s].get;if(l)try{l.call(t)}catch{}}}}}export{a as $,Cn as A,mn as B,bn as C,On as D,jn as E,ht as F,E as G,K as H,Mn as I,Hn as J,Un as K,kn as L,rr as M,tn as N,xn as O,Yn as P,er as Q,$ as R,ut as S,an as T,Gn as U,ct as V,ar as W,C as X,d as Y,gn as Z,G as _,sr as a,Jn as a0,J as a1,rn as a2,O as a3,Et as a4,Kn as a5,F as a6,$n as a7,sn as a8,wt as a9,In as aa,nr as ab,An as ac,or as ad,z as ae,Wn as af,qn as ag,xt as ah,un as ai,_r as aj,Nn as ak,Bn as al,Vn as am,en as an,zn as ao,fr as ap,ir as aq,Ht as ar,cr as as,Fn as at,$t as au,pr as b,f as c,Dn as d,yr as e,ln as f,vr as g,Bt as h,x as i,Ut as j,Xn as k,dr as l,Qn as m,Zn as n,Sn as o,hr as p,Rn as q,Vt as r,tr as s,ur as t,lr as u,nt as v,Pn as w,Ln as x,ot as y,u as z};
