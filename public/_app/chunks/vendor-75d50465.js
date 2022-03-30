var If=Object.defineProperty;var Fo=Object.getOwnPropertySymbols;var Af=Object.prototype.hasOwnProperty,xf=Object.prototype.propertyIsEnumerable;var Ro=(t,e,n)=>e in t?If(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Pt=(t,e)=>{for(var n in e||(e={}))Af.call(e,n)&&Ro(t,n,e[n]);if(Fo)for(var n of Fo(e))xf.call(e,n)&&Ro(t,n,e[n]);return t};function Be(){}function nr(t,e){for(const n in e)t[n]=e[n];return t}function Df(t){return t&&typeof t=="object"&&typeof t.then=="function"}function qu(t){return t()}function No(){return Object.create(null)}function fn(t){t.forEach(qu)}function $f(t){return typeof t=="function"}function Hu(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let On;function BD(t,e){return On||(On=document.createElement("a")),On.href=e,t===On.href}function kf(t){return Object.keys(t).length===0}function qD(t,e,n,r){if(t){const s=zu(t,e,n,r);return t[0](s)}}function zu(t,e,n,r){return t[1]&&r?nr(n.ctx.slice(),t[1](r(e))):n.ctx}function HD(t,e,n,r){if(t[2]&&r){const s=t[2](r(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const i=[],o=Math.max(e.dirty.length,s.length);for(let a=0;a<o;a+=1)i[a]=e.dirty[a]|s[a];return i}return e.dirty|s}return e.dirty}function zD(t,e,n,r,s,i){if(s){const o=zu(e,n,r,i);t.p(o,s)}}function KD(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let r=0;r<n;r++)e[r]=-1;return e}return-1}function Po(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}let Cr=!1;function Of(){Cr=!0}function Ff(){Cr=!1}function Rf(t,e,n,r){for(;t<e;){const s=t+(e-t>>1);n(s)<=r?t=s+1:e=s}return t}function Nf(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const u=[];for(let c=0;c<e.length;c++){const l=e[c];l.claim_order!==void 0&&u.push(l)}e=u}const n=new Int32Array(e.length+1),r=new Int32Array(e.length);n[0]=-1;let s=0;for(let u=0;u<e.length;u++){const c=e[u].claim_order,l=(s>0&&e[n[s]].claim_order<=c?s+1:Rf(1,s,f=>e[n[f]].claim_order,c))-1;r[u]=n[l]+1;const h=l+1;n[h]=u,s=Math.max(h,s)}const i=[],o=[];let a=e.length-1;for(let u=n[s]+1;u!=0;u=r[u-1]){for(i.push(e[u-1]);a>=u;a--)o.push(e[a]);a--}for(;a>=0;a--)o.push(e[a]);i.reverse(),o.sort((u,c)=>u.claim_order-c.claim_order);for(let u=0,c=0;u<o.length;u++){for(;c<i.length&&o[u].claim_order>=i[c].claim_order;)c++;const l=c<i.length?i[c]:null;t.insertBefore(o[u],l)}}function Pf(t,e){if(Cr){for(Nf(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Ku(t,e,n){Cr&&!n?Pf(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function rr(t){t.parentNode.removeChild(t)}function GD(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function Lf(t){return document.createElement(t)}function Gu(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function Si(t){return document.createTextNode(t)}function WD(){return Si(" ")}function Lo(){return Si("")}function XD(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function YD(t){return function(e){return e.preventDefault(),t.call(this,e)}}function Mf(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Mo(t,e){for(const n in e)Mf(t,n,e[n])}function Wu(t){return Array.from(t.childNodes)}function jf(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function Xu(t,e,n,r,s=!1){jf(t);const i=(()=>{for(let o=t.claim_info.last_index;o<t.length;o++){const a=t[o];if(e(a)){const u=n(a);return u===void 0?t.splice(o,1):t[o]=u,s||(t.claim_info.last_index=o),a}}for(let o=t.claim_info.last_index-1;o>=0;o--){const a=t[o];if(e(a)){const u=n(a);return u===void 0?t.splice(o,1):t[o]=u,s?u===void 0&&t.claim_info.last_index--:t.claim_info.last_index=o,a}}return r()})();return i.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,i}function Yu(t,e,n,r){return Xu(t,s=>s.nodeName===e,s=>{const i=[];for(let o=0;o<s.attributes.length;o++){const a=s.attributes[o];n[a.name]||i.push(a.name)}i.forEach(o=>s.removeAttribute(o))},()=>r(e))}function QD(t,e,n){return Yu(t,e,n,Lf)}function Uf(t,e,n){return Yu(t,e,n,Gu)}function Vf(t,e){return Xu(t,n=>n.nodeType===3,n=>{const r=""+e;if(n.data.startsWith(r)){if(n.data.length!==r.length)return n.splitText(r.length)}else n.data=r},()=>Si(e),!0)}function JD(t){return Vf(t," ")}function ZD(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function e$(t,e,n){t.classList[n?"add":"remove"](e)}function Bf(t,e,n=!1){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,!1,e),r}function t$(t,e=document.body){return Array.from(e.querySelectorAll(t))}let Xt;function be(t){Xt=t}function Et(){if(!Xt)throw new Error("Function called outside component initialization");return Xt}function qf(t){Et().$$.on_mount.push(t)}function n$(t){Et().$$.after_update.push(t)}function Hf(t){Et().$$.on_destroy.push(t)}function zf(){const t=Et();return(e,n)=>{const r=t.$$.callbacks[e];if(r){const s=Bf(e,n);r.slice().forEach(i=>{i.call(t,s)})}}}function r$(t,e){Et().$$.context.set(t,e)}const Vt=[],jo=[],Gn=[],Uo=[],Kf=Promise.resolve();let xs=!1;function Gf(){xs||(xs=!0,Kf.then(Ci))}function Ds(t){Gn.push(t)}const ns=new Set;let Fn=0;function Ci(){const t=Xt;do{for(;Fn<Vt.length;){const e=Vt[Fn];Fn++,be(e),Wf(e.$$)}for(be(null),Vt.length=0,Fn=0;jo.length;)jo.pop()();for(let e=0;e<Gn.length;e+=1){const n=Gn[e];ns.has(n)||(ns.add(n),n())}Gn.length=0}while(Vt.length);for(;Uo.length;)Uo.pop()();xs=!1,ns.clear(),be(t)}function Wf(t){if(t.fragment!==null){t.update(),fn(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(Ds)}}const Wn=new Set;let Le;function Xf(){Le={r:0,c:[],p:Le}}function Yf(){Le.r||fn(Le.c),Le=Le.p}function Qu(t,e){t&&t.i&&(Wn.delete(t),t.i(e))}function Qf(t,e,n,r){if(t&&t.o){if(Wn.has(t))return;Wn.add(t),Le.c.push(()=>{Wn.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}}function s$(t,e){const n=e.token={};function r(s,i,o,a){if(e.token!==n)return;e.resolved=a;let u=e.ctx;o!==void 0&&(u=u.slice(),u[o]=a);const c=s&&(e.current=s)(u);let l=!1;e.block&&(e.blocks?e.blocks.forEach((h,f)=>{f!==i&&h&&(Xf(),Qf(h,1,1,()=>{e.blocks[f]===h&&(e.blocks[f]=null)}),Yf())}):e.block.d(1),c.c(),Qu(c,1),c.m(e.mount(),e.anchor),l=!0),e.block=c,e.blocks&&(e.blocks[i]=c),l&&Ci()}if(Df(t)){const s=Et();if(t.then(i=>{be(s),r(e.then,1,e.value,i),be(null)},i=>{if(be(s),r(e.catch,2,e.error,i),be(null),!e.hasCatch)throw i}),e.current!==e.pending)return r(e.pending,0),!0}else{if(e.current!==e.then)return r(e.then,1,e.value,t),!0;e.resolved=t}}function i$(t,e,n){const r=e.slice(),{resolved:s}=t;t.current===t.then&&(r[t.value]=s),t.current===t.catch&&(r[t.error]=s),t.block.p(r,n)}function Jf(t,e){const n={},r={},s={$$scope:1};let i=t.length;for(;i--;){const o=t[i],a=e[i];if(a){for(const u in o)u in a||(r[u]=1);for(const u in a)s[u]||(n[u]=a[u],s[u]=1);t[i]=a}else for(const u in o)s[u]=1}for(const o in r)o in n||(n[o]=void 0);return n}function o$(t){return typeof t=="object"&&t!==null?t:{}}function a$(t){t&&t.c()}function u$(t,e){t&&t.l(e)}function Zf(t,e,n,r){const{fragment:s,on_mount:i,on_destroy:o,after_update:a}=t.$$;s&&s.m(e,n),r||Ds(()=>{const u=i.map(qu).filter($f);o?o.push(...u):fn(u),t.$$.on_mount=[]}),a.forEach(Ds)}function ed(t,e){const n=t.$$;n.fragment!==null&&(fn(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function td(t,e){t.$$.dirty[0]===-1&&(Vt.push(t),Gf(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function nd(t,e,n,r,s,i,o,a=[-1]){const u=Xt;be(t);const c=t.$$={fragment:null,ctx:null,props:i,update:Be,not_equal:s,bound:No(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(u?u.$$.context:[])),callbacks:No(),dirty:a,skip_bound:!1,root:e.target||u.$$.root};o&&o(c.root);let l=!1;if(c.ctx=n?n(t,e.props||{},(h,f,...d)=>{const p=d.length?d[0]:f;return c.ctx&&s(c.ctx[h],c.ctx[h]=p)&&(!c.skip_bound&&c.bound[h]&&c.bound[h](p),l&&td(t,h)),f}):[],c.update(),l=!0,fn(c.before_update),c.fragment=r?r(c.ctx):!1,e.target){if(e.hydrate){Of();const h=Wu(e.target);c.fragment&&c.fragment.l(h),h.forEach(rr)}else c.fragment&&c.fragment.c();e.intro&&Qu(t.$$.fragment),Zf(t,e.target,e.anchor,e.customElement),Ff(),Ci()}be(u)}class rd{$destroy(){ed(this,1),this.$destroy=Be}$on(e,n){const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}$set(e){this.$$set&&!kf(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const st=[];function c$(t,e=Be){let n;const r=new Set;function s(a){if(Hu(t,a)&&(t=a,n)){const u=!st.length;for(const c of r)c[1](),st.push(c,t);if(u){for(let c=0;c<st.length;c+=2)st[c][0](st[c+1]);st.length=0}}}function i(a){s(a(t))}function o(a,u=Be){const c=[a,u];return r.add(c),r.size===1&&(n=e(s)||Be),a(t),()=>{r.delete(c),r.size===0&&(n(),n=null)}}return{set:s,update:i,subscribe:o}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ju=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},sd=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],u=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},id={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,u=s+2<t.length,c=u?t[s+2]:0,l=i>>2,h=(i&3)<<4|a>>4;let f=(a&15)<<2|c>>6,d=c&63;u||(d=64,o||(f=64)),r.push(n[l],n[h],n[f],n[d])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Ju(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):sd(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const c=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||c==null||h==null)throw Error();const f=i<<2|a>>4;if(r.push(f),c!==64){const d=a<<4&240|c>>2;if(r.push(d),h!==64){const p=c<<6&192|h;r.push(p)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},od=function(t){const e=Ju(t);return id.encodeByteArray(e,!0)},Zu=function(t){return od(t).replace(/\./g,"")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ad{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ir(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ud(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ir())}function cd(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function ld(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function hd(){return Ir().indexOf("Electron/")>=0}function fd(){const t=Ir();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function dd(){return Ir().indexOf("MSAppHost/")>=0}function pd(){return typeof indexedDB=="object"}function gd(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const md="FirebaseError";class dn extends Error{constructor(e,n,r){super(n);this.code=e,this.customData=r,this.name=md,Object.setPrototypeOf(this,dn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ec.prototype.create)}}class ec{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?yd(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new dn(s,a,r)}}function yd(t,e){return t.replace(vd,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const vd=/\{\$([^}]+)}/g;function $s(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Vo(i)&&Vo(o)){if(!$s(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Vo(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ar(t){return t&&t._delegate?t._delegate:t}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bt(t,e){return new Promise((n,r)=>{t.onsuccess=s=>{n(s.target.result)},t.onerror=s=>{var i;r(`${e}: ${(i=s.target.error)===null||i===void 0?void 0:i.message}`)}})}class Bo{constructor(e){this._db=e,this.objectStoreNames=this._db.objectStoreNames}transaction(e,n){return new tc(this._db.transaction.call(this._db,e,n))}createObjectStore(e,n){return new nc(this._db.createObjectStore(e,n))}close(){this._db.close()}}class tc{constructor(e){this._transaction=e,this.complete=new Promise((n,r)=>{this._transaction.oncomplete=function(){n()},this._transaction.onerror=()=>{r(this._transaction.error)},this._transaction.onabort=()=>{r(this._transaction.error)}})}objectStore(e){return new nc(this._transaction.objectStore(e))}}class nc{constructor(e){this._store=e}index(e){return new qo(this._store.index(e))}createIndex(e,n,r){return new qo(this._store.createIndex(e,n,r))}get(e){const n=this._store.get(e);return Bt(n,"Error reading from IndexedDB")}put(e,n){const r=this._store.put(e,n);return Bt(r,"Error writing to IndexedDB")}delete(e){const n=this._store.delete(e);return Bt(n,"Error deleting from IndexedDB")}clear(){const e=this._store.clear();return Bt(e,"Error clearing IndexedDB object store")}}class qo{constructor(e){this._index=e}get(e){const n=this._index.get(e);return Bt(n,"Error reading from IndexedDB")}}function wd(t,e,n){return new Promise((r,s)=>{try{const i=indexedDB.open(t,e);i.onsuccess=o=>{r(new Bo(o.target.result))},i.onerror=o=>{var a;s(`Error opening indexedDB: ${(a=o.target.error)===null||a===void 0?void 0:a.message}`)},i.onupgradeneeded=o=>{n(new Bo(i.result),o.oldVersion,o.newVersion,new tc(i.transaction))}}catch(i){s(`Error opening indexedDB: ${i.message}`)}})}class dt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Re="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _d{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new ad;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Ed(e))try{this.getOrInitializeService({instanceIdentifier:Re})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Re){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Re){return this.instances.has(e)}getOptions(e=Re){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:bd(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Re){return this.component?this.component.multipleInstances?e:Re:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function bd(t){return t===Re?void 0:t}function Ed(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Td{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new _d(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var k;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(k||(k={}));const Sd={debug:k.DEBUG,verbose:k.VERBOSE,info:k.INFO,warn:k.WARN,error:k.ERROR,silent:k.SILENT},Cd=k.INFO,Id={[k.DEBUG]:"log",[k.VERBOSE]:"log",[k.INFO]:"info",[k.WARN]:"warn",[k.ERROR]:"error"},Ad=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=Id[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class rc{constructor(e){this.name=e,this._logLevel=Cd,this._logHandler=Ad,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in k))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Sd[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,k.DEBUG,...e),this._logHandler(this,k.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,k.VERBOSE,...e),this._logHandler(this,k.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,k.INFO,...e),this._logHandler(this,k.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,k.WARN,...e),this._logHandler(this,k.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,k.ERROR,...e),this._logHandler(this,k.ERROR,...e)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xd{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Dd(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Dd(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ks="@firebase/app",Ho="0.7.20";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ii=new rc("@firebase/app"),$d="@firebase/app-compat",kd="@firebase/analytics-compat",Od="@firebase/analytics",Fd="@firebase/app-check-compat",Rd="@firebase/app-check",Nd="@firebase/auth",Pd="@firebase/auth-compat",Ld="@firebase/database",Md="@firebase/database-compat",jd="@firebase/functions",Ud="@firebase/functions-compat",Vd="@firebase/installations",Bd="@firebase/installations-compat",qd="@firebase/messaging",Hd="@firebase/messaging-compat",zd="@firebase/performance",Kd="@firebase/performance-compat",Gd="@firebase/remote-config",Wd="@firebase/remote-config-compat",Xd="@firebase/storage",Yd="@firebase/storage-compat",Qd="@firebase/firestore",Jd="@firebase/firestore-compat",Zd="firebase",ep="9.6.10";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sc="[DEFAULT]",tp={[ks]:"fire-core",[$d]:"fire-core-compat",[Od]:"fire-analytics",[kd]:"fire-analytics-compat",[Rd]:"fire-app-check",[Fd]:"fire-app-check-compat",[Nd]:"fire-auth",[Pd]:"fire-auth-compat",[Ld]:"fire-rtdb",[Md]:"fire-rtdb-compat",[jd]:"fire-fn",[Ud]:"fire-fn-compat",[Vd]:"fire-iid",[Bd]:"fire-iid-compat",[qd]:"fire-fcm",[Hd]:"fire-fcm-compat",[zd]:"fire-perf",[Kd]:"fire-perf-compat",[Gd]:"fire-rc",[Wd]:"fire-rc-compat",[Xd]:"fire-gcs",[Yd]:"fire-gcs-compat",[Qd]:"fire-fst",[Jd]:"fire-fst-compat","fire-js":"fire-js",[Zd]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sr=new Map,Os=new Map;function np(t,e){try{t.container.addComponent(e)}catch(n){Ii.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Yt(t){const e=t.name;if(Os.has(e))return Ii.debug(`There were multiple attempts to register component ${e}.`),!1;Os.set(e,t);for(const n of sr.values())np(n,t);return!0}function ic(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rp={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},Ke=new ec("app","Firebase",rp);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sp{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new dt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ke.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oc=ep;function l$(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:sc,automaticDataCollectionEnabled:!1},e),r=n.name;if(typeof r!="string"||!r)throw Ke.create("bad-app-name",{appName:String(r)});const s=sr.get(r);if(s){if($s(t,s.options)&&$s(n,s.config))return s;throw Ke.create("duplicate-app",{appName:r})}const i=new Td(r);for(const a of Os.values())i.addComponent(a);const o=new sp(t,n,i);return sr.set(r,o),o}function ac(t=sc){const e=sr.get(t);if(!e)throw Ke.create("no-app",{appName:t});return e}function Ce(t,e,n){var r;let s=(r=tp[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ii.warn(a.join(" "));return}Yt(new dt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ip="firebase-heartbeat-database",op=1,Qt="firebase-heartbeat-store";let rs=null;function uc(){return rs||(rs=wd(ip,op,(t,e)=>{switch(e){case 0:t.createObjectStore(Qt)}}).catch(t=>{throw Ke.create("storage-open",{originalErrorMessage:t.message})})),rs}async function ap(t){try{return(await uc()).transaction(Qt).objectStore(Qt).get(cc(t))}catch(e){throw Ke.create("storage-get",{originalErrorMessage:e.message})}}async function zo(t,e){try{const r=(await uc()).transaction(Qt,"readwrite");return await r.objectStore(Qt).put(e,cc(t)),r.complete}catch(n){throw Ke.create("storage-set",{originalErrorMessage:n.message})}}function cc(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const up=1024,cp=30*24*60*60*1e3;class lp{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new fp(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Ko();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=cp}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Ko(),{heartbeatsToSend:n,unsentEntries:r}=hp(this._heartbeatsCache.heartbeats),s=Zu(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Ko(){return new Date().toISOString().substring(0,10)}function hp(t,e=up){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Go(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Go(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class fp{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return pd()?gd().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await ap(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return zo(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return zo(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Go(t){return Zu(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dp(t){Yt(new dt("platform-logger",e=>new xd(e),"PRIVATE")),Yt(new dt("heartbeat",e=>new lp(e),"PRIVATE")),Ce(ks,Ho,t),Ce(ks,Ho,"esm2017"),Ce("fire-js","")}dp("");var pp=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},y,Ai=Ai||{},S=pp||self;function ir(){}function Fs(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function pn(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function gp(t){return Object.prototype.hasOwnProperty.call(t,ss)&&t[ss]||(t[ss]=++mp)}var ss="closure_uid_"+(1e9*Math.random()>>>0),mp=0;function yp(t,e,n){return t.call.apply(t.bind,arguments)}function vp(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function X(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?X=yp:X=vp,X.apply(null,arguments)}function Rn(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function ee(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(r,o)}}function $e(){this.s=this.s,this.o=this.o}var wp=0,_p={};$e.prototype.s=!1;$e.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),wp!=0)){var t=gp(this);delete _p[t]}};$e.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const lc=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},hc=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const r=t.length,s=typeof t=="string"?t.split(""):t;for(let i=0;i<r;i++)i in s&&e.call(n,s[i],i,t)};function bp(t){e:{var e=fg;const n=t.length,r=typeof t=="string"?t.split(""):t;for(let s=0;s<n;s++)if(s in r&&e.call(void 0,r[s],s,t)){e=s;break e}e=-1}return 0>e?null:typeof t=="string"?t.charAt(e):t[e]}function Wo(t){return Array.prototype.concat.apply([],arguments)}function xi(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function or(t){return/^[\s\xa0]*$/.test(t)}var Xo=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function se(t,e){return t.indexOf(e)!=-1}function is(t,e){return t<e?-1:t>e?1:0}var ie;e:{var Yo=S.navigator;if(Yo){var Qo=Yo.userAgent;if(Qo){ie=Qo;break e}}ie=""}function Di(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function fc(t){const e={};for(const n in t)e[n]=t[n];return e}var Jo="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function dc(t,e){let n,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(n in r)t[n]=r[n];for(let i=0;i<Jo.length;i++)n=Jo[i],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function $i(t){return $i[" "](t),t}$i[" "]=ir;function Ep(t){var e=Cp;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var Tp=se(ie,"Opera"),pt=se(ie,"Trident")||se(ie,"MSIE"),pc=se(ie,"Edge"),Rs=pc||pt,gc=se(ie,"Gecko")&&!(se(ie.toLowerCase(),"webkit")&&!se(ie,"Edge"))&&!(se(ie,"Trident")||se(ie,"MSIE"))&&!se(ie,"Edge"),Sp=se(ie.toLowerCase(),"webkit")&&!se(ie,"Edge");function mc(){var t=S.document;return t?t.documentMode:void 0}var ar;e:{var os="",as=function(){var t=ie;if(gc)return/rv:([^\);]+)(\)|;)/.exec(t);if(pc)return/Edge\/([\d\.]+)/.exec(t);if(pt)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(Sp)return/WebKit\/(\S+)/.exec(t);if(Tp)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(as&&(os=as?as[1]:""),pt){var us=mc();if(us!=null&&us>parseFloat(os)){ar=String(us);break e}}ar=os}var Cp={};function Ip(){return Ep(function(){let t=0;const e=Xo(String(ar)).split("."),n=Xo("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var s=e[o]||"",i=n[o]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s[0].length==0&&i[0].length==0)break;t=is(s[1].length==0?0:parseInt(s[1],10),i[1].length==0?0:parseInt(i[1],10))||is(s[2].length==0,i[2].length==0)||is(s[2],i[2]),s=s[3],i=i[3]}while(t==0)}return 0<=t})}var Ns;if(S.document&&pt){var Zo=mc();Ns=Zo||parseInt(ar,10)||void 0}else Ns=void 0;var Ap=Ns,xp=function(){if(!S.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{S.addEventListener("test",ir,e),S.removeEventListener("test",ir,e)}catch{}return t}();function ne(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}ne.prototype.h=function(){this.defaultPrevented=!0};function Jt(t,e){if(ne.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(gc){e:{try{$i(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:Dp[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Jt.Z.h.call(this)}}ee(Jt,ne);var Dp={2:"touch",3:"pen",4:"mouse"};Jt.prototype.h=function(){Jt.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var gn="closure_listenable_"+(1e6*Math.random()|0),$p=0;function kp(t,e,n,r,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ia=s,this.key=++$p,this.ca=this.fa=!1}function xr(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function Dr(t){this.src=t,this.g={},this.h=0}Dr.prototype.add=function(t,e,n,r,s){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=Ls(t,e,r,s);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new kp(e,this.src,i,!!r,s),e.fa=n,t.push(e)),e};function Ps(t,e){var n=e.type;if(n in t.g){var r=t.g[n],s=lc(r,e),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(xr(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Ls(t,e,n,r){for(var s=0;s<t.length;++s){var i=t[s];if(!i.ca&&i.listener==e&&i.capture==!!n&&i.ia==r)return s}return-1}var ki="closure_lm_"+(1e6*Math.random()|0),cs={};function yc(t,e,n,r,s){if(r&&r.once)return wc(t,e,n,r,s);if(Array.isArray(e)){for(var i=0;i<e.length;i++)yc(t,e[i],n,r,s);return null}return n=Ri(n),t&&t[gn]?t.N(e,n,pn(r)?!!r.capture:!!r,s):vc(t,e,n,!1,r,s)}function vc(t,e,n,r,s,i){if(!e)throw Error("Invalid event type");var o=pn(s)?!!s.capture:!!s,a=Fi(t);if(a||(t[ki]=a=new Dr(t)),n=a.add(e,n,r,o,i),n.proxy)return n;if(r=Op(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)xp||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),r,s);else if(t.attachEvent)t.attachEvent(bc(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Op(){function t(n){return e.call(t.src,t.listener,n)}var e=Fp;return t}function wc(t,e,n,r,s){if(Array.isArray(e)){for(var i=0;i<e.length;i++)wc(t,e[i],n,r,s);return null}return n=Ri(n),t&&t[gn]?t.O(e,n,pn(r)?!!r.capture:!!r,s):vc(t,e,n,!0,r,s)}function _c(t,e,n,r,s){if(Array.isArray(e))for(var i=0;i<e.length;i++)_c(t,e[i],n,r,s);else r=pn(r)?!!r.capture:!!r,n=Ri(n),t&&t[gn]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=Ls(i,n,r,s),-1<n&&(xr(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=Fi(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Ls(e,n,r,s)),(n=-1<t?e[t]:null)&&Oi(n))}function Oi(t){if(typeof t!="number"&&t&&!t.ca){var e=t.src;if(e&&e[gn])Ps(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(bc(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Fi(e))?(Ps(n,t),n.h==0&&(n.src=null,e[ki]=null)):xr(t)}}}function bc(t){return t in cs?cs[t]:cs[t]="on"+t}function Fp(t,e){if(t.ca)t=!0;else{e=new Jt(e,this);var n=t.listener,r=t.ia||t.src;t.fa&&Oi(t),t=n.call(r,e)}return t}function Fi(t){return t=t[ki],t instanceof Dr?t:null}var ls="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ri(t){return typeof t=="function"?t:(t[ls]||(t[ls]=function(e){return t.handleEvent(e)}),t[ls])}function K(){$e.call(this),this.i=new Dr(this),this.P=this,this.I=null}ee(K,$e);K.prototype[gn]=!0;K.prototype.removeEventListener=function(t,e,n,r){_c(this,t,e,n,r)};function Y(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,typeof e=="string")e=new ne(e,t);else if(e instanceof ne)e.target=e.target||t;else{var s=e;e=new ne(r,t),dc(e,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];s=Nn(o,r,!0,e)&&s}if(o=e.g=t,s=Nn(o,r,!0,e)&&s,s=Nn(o,r,!1,e)&&s,n)for(i=0;i<n.length;i++)o=e.g=n[i],s=Nn(o,r,!1,e)&&s}K.prototype.M=function(){if(K.Z.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)xr(n[r]);delete t.g[e],t.h--}}this.I=null};K.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};K.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Nn(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ca&&o.capture==n){var a=o.listener,u=o.ia||o.src;o.fa&&Ps(t.i,o),s=a.call(u,r)!==!1&&s}}return s&&!r.defaultPrevented}var Ni=S.JSON.stringify;function Rp(){var t=Tc;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class Np{constructor(){this.h=this.g=null}add(e,n){const r=Ec.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var Ec=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new Pp,t=>t.reset());class Pp{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function Lp(t){S.setTimeout(()=>{throw t},0)}function Pi(t,e){Ms||Mp(),js||(Ms(),js=!0),Tc.add(t,e)}var Ms;function Mp(){var t=S.Promise.resolve(void 0);Ms=function(){t.then(jp)}}var js=!1,Tc=new Np;function jp(){for(var t;t=Rp();){try{t.h.call(t.g)}catch(n){Lp(n)}var e=Ec;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}js=!1}function $r(t,e){K.call(this),this.h=t||1,this.g=e||S,this.j=X(this.kb,this),this.l=Date.now()}ee($r,K);y=$r.prototype;y.da=!1;y.S=null;y.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),Y(this,"tick"),this.da&&(Li(this),this.start()))}};y.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Li(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}y.M=function(){$r.Z.M.call(this),Li(this),delete this.g};function Mi(t,e,n){if(typeof t=="function")n&&(t=X(t,n));else if(t&&typeof t.handleEvent=="function")t=X(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:S.setTimeout(t,e||0)}function Sc(t){t.g=Mi(()=>{t.g=null,t.i&&(t.i=!1,Sc(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class Up extends $e{constructor(e,n){super();this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Sc(this)}M(){super.M(),this.g&&(S.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Zt(t){$e.call(this),this.h=t,this.g={}}ee(Zt,$e);var ea=[];function Cc(t,e,n,r){Array.isArray(n)||(n&&(ea[0]=n.toString()),n=ea);for(var s=0;s<n.length;s++){var i=yc(e,n[s],r||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function Ic(t){Di(t.g,function(e,n){this.g.hasOwnProperty(n)&&Oi(e)},t),t.g={}}Zt.prototype.M=function(){Zt.Z.M.call(this),Ic(this)};Zt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function kr(){this.g=!0}kr.prototype.Aa=function(){this.g=!1};function Vp(t,e,n,r,s,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),u=0;u<a.length;u++){var c=a[u].split("=");if(1<c.length){var l=c[0];c=c[1];var h=l.split("_");o=2<=h.length&&h[1]=="type"?o+(l+"="+c+"&"):o+(l+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function Bp(t,e,n,r,s,i,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+e+`
`+n+`
`+i+" "+o})}function at(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+Hp(t,n)+(r?" "+r:"")})}function qp(t,e){t.info(function(){return"TIMEOUT: "+e})}kr.prototype.info=function(){};function Hp(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return Ni(n)}catch{return e}}var et={},ta=null;function Or(){return ta=ta||new K}et.Ma="serverreachability";function Ac(t){ne.call(this,et.Ma,t)}ee(Ac,ne);function en(t){const e=Or();Y(e,new Ac(e,t))}et.STAT_EVENT="statevent";function xc(t,e){ne.call(this,et.STAT_EVENT,t),this.stat=e}ee(xc,ne);function oe(t){const e=Or();Y(e,new xc(e,t))}et.Na="timingevent";function Dc(t,e){ne.call(this,et.Na,t),this.size=e}ee(Dc,ne);function mn(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return S.setTimeout(function(){t()},e)}var Fr={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},$c={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function ji(){}ji.prototype.h=null;function na(t){return t.h||(t.h=t.i())}function kc(){}var yn={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function Ui(){ne.call(this,"d")}ee(Ui,ne);function Vi(){ne.call(this,"c")}ee(Vi,ne);var Us;function Rr(){}ee(Rr,ji);Rr.prototype.g=function(){return new XMLHttpRequest};Rr.prototype.i=function(){return{}};Us=new Rr;function vn(t,e,n,r){this.l=t,this.j=e,this.m=n,this.X=r||1,this.V=new Zt(this),this.P=zp,t=Rs?125:void 0,this.W=new $r(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new Oc}function Oc(){this.i=null,this.g="",this.h=!1}var zp=45e3,Vs={},ur={};y=vn.prototype;y.setTimeout=function(t){this.P=t};function Bs(t,e,n){t.K=1,t.v=Pr(Te(e)),t.s=n,t.U=!0,Fc(t,null)}function Fc(t,e){t.F=Date.now(),wn(t),t.A=Te(t.v);var n=t.A,r=t.X;Array.isArray(r)||(r=[String(r)]),Uc(n.h,"t",r),t.C=0,n=t.l.H,t.h=new Oc,t.g=ol(t.l,n?e:null,!t.s),0<t.O&&(t.L=new Up(X(t.Ia,t,t.g),t.O)),Cc(t.V,t.g,"readystatechange",t.gb),e=t.H?fc(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),en(1),Vp(t.j,t.u,t.A,t.m,t.X,t.s)}y.gb=function(t){t=t.target;const e=this.L;e&&Ee(t)==3?e.l():this.Ia(t)};y.Ia=function(t){try{if(t==this.g)e:{const l=Ee(this.g);var e=this.g.Da();const h=this.g.ba();if(!(3>l)&&(l!=3||Rs||this.g&&(this.h.h||this.g.ga()||oa(this.g)))){this.I||l!=4||e==7||(e==8||0>=h?en(3):en(2)),Nr(this);var n=this.g.ba();this.N=n;t:if(Rc(this)){var r=oa(this.g);t="";var s=r.length,i=Ee(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){Me(this),Ht(this);var o="";break t}this.h.i=new S.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:i&&e==s-1});r.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=n==200,Bp(this.j,this.u,this.A,this.m,this.X,l,n),this.i){if(this.$&&!this.J){t:{if(this.g){var a,u=this.g;if((a=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!or(a)){var c=a;break t}}c=null}if(n=c)at(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,qs(this,n);else{this.i=!1,this.o=3,oe(12),Me(this),Ht(this);break e}}this.U?(Nc(this,l,o),Rs&&this.i&&l==3&&(Cc(this.V,this.W,"tick",this.fb),this.W.start())):(at(this.j,this.m,o,null),qs(this,o)),l==4&&Me(this),this.i&&!this.I&&(l==4?nl(this.l,this):(this.i=!1,wn(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,oe(12)):(this.o=0,oe(13)),Me(this),Ht(this)}}}catch{}finally{}};function Rc(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Ba:!1}function Nc(t,e,n){let r=!0,s;for(;!t.I&&t.C<n.length;)if(s=Kp(t,n),s==ur){e==4&&(t.o=4,oe(14),r=!1),at(t.j,t.m,null,"[Incomplete Response]");break}else if(s==Vs){t.o=4,oe(15),at(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else at(t.j,t.m,s,null),qs(t,s);Rc(t)&&s!=ur&&s!=Vs&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,oe(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),Yi(e),e.L=!0,oe(11))):(at(t.j,t.m,n,"[Invalid Chunked Response]"),Me(t),Ht(t))}y.fb=function(){if(this.g){var t=Ee(this.g),e=this.g.ga();this.C<e.length&&(Nr(this),Nc(this,t,e),this.i&&t!=4&&wn(this))}};function Kp(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?ur:(n=Number(e.substring(n,r)),isNaN(n)?Vs:(r+=1,r+n>e.length?ur:(e=e.substr(r,n),t.C=r+n,e)))}y.cancel=function(){this.I=!0,Me(this)};function wn(t){t.Y=Date.now()+t.P,Pc(t,t.P)}function Pc(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=mn(X(t.eb,t),e)}function Nr(t){t.B&&(S.clearTimeout(t.B),t.B=null)}y.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(qp(this.j,this.A),this.K!=2&&(en(3),oe(17)),Me(this),this.o=2,Ht(this)):Pc(this,this.Y-t)};function Ht(t){t.l.G==0||t.I||nl(t.l,t)}function Me(t){Nr(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Li(t.W),Ic(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function qs(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Hs(n.i,t))){if(n.I=t.N,!t.J&&Hs(n.i,t)&&n.G==3){try{var r=n.Ca.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)fr(n),jr(n);else break e;Xi(n),oe(18)}}else n.ta=s[1],0<n.ta-n.U&&37500>s[2]&&n.N&&n.A==0&&!n.v&&(n.v=mn(X(n.ab,n),6e3));if(1>=qc(n.i)&&n.ka){try{n.ka()}catch{}n.ka=void 0}}else je(n,11)}else if((t.J||n.g==t)&&fr(n),!or(e))for(s=n.Ca.g.parse(e),e=0;e<s.length;e++){let c=s[e];if(n.U=c[0],c=c[1],n.G==2)if(c[0]=="c"){n.J=c[1],n.la=c[2];const l=c[3];l!=null&&(n.ma=l,n.h.info("VER="+n.ma));const h=c[4];h!=null&&(n.za=h,n.h.info("SVER="+n.za));const f=c[5];f!=null&&typeof f=="number"&&0<f&&(r=1.5*f,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;const d=t.g;if(d){const p=d.g?d.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(p){var i=r.i;!i.g&&(se(p,"spdy")||se(p,"quic")||se(p,"h2"))&&(i.j=i.l,i.g=new Set,i.h&&(Hi(i,i.h),i.h=null))}if(r.D){const v=d.g?d.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(r.sa=v,P(r.F,r.D,v))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),r=n;var o=t;if(r.oa=il(r,r.H?r.la:null,r.W),o.J){Hc(r.i,o);var a=o,u=r.K;u&&a.setTimeout(u),a.B&&(Nr(a),wn(a)),r.g=o}else el(r);0<n.l.length&&Ur(n)}else c[0]!="stop"&&c[0]!="close"||je(n,7);else n.G==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?je(n,7):Wi(n):c[0]!="noop"&&n.j&&n.j.wa(c),n.A=0)}}en(4)}catch{}}function Gp(t){if(t.R&&typeof t.R=="function")return t.R();if(typeof t=="string")return t.split("");if(Fs(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function Bi(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Fs(t)||typeof t=="string")hc(t,e,void 0);else{if(t.T&&typeof t.T=="function")var n=t.T();else if(t.R&&typeof t.R=="function")n=void 0;else if(Fs(t)||typeof t=="string"){n=[];for(var r=t.length,s=0;s<r;s++)n.push(s)}else for(s in n=[],r=0,t)n[r++]=s;r=Gp(t),s=r.length;for(var i=0;i<s;i++)e.call(void 0,r[i],n&&n[i],t)}}function Tt(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(t)if(t instanceof Tt)for(n=t.T(),r=0;r<n.length;r++)this.set(n[r],t.get(n[r]));else for(r in t)this.set(r,t[r])}y=Tt.prototype;y.R=function(){qi(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t};y.T=function(){return qi(this),this.g.concat()};function qi(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var r=t.g[e];Ge(t.h,r)&&(t.g[n++]=r),e++}t.g.length=n}if(t.i!=t.g.length){var s={};for(n=e=0;e<t.g.length;)r=t.g[e],Ge(s,r)||(t.g[n++]=r,s[r]=1),e++;t.g.length=n}}y.get=function(t,e){return Ge(this.h,t)?this.h[t]:e};y.set=function(t,e){Ge(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e};y.forEach=function(t,e){for(var n=this.T(),r=0;r<n.length;r++){var s=n[r],i=this.get(s);t.call(e,i,s,this)}};function Ge(t,e){return Object.prototype.hasOwnProperty.call(t,e)}var Lc=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Wp(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),s=null;if(0<=r){var i=t[n].substring(0,r);s=t[n].substring(r+1)}else i=t[n];e(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function We(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof We){this.g=e!==void 0?e:t.g,cr(this,t.j),this.s=t.s,lr(this,t.i),hr(this,t.m),this.l=t.l,e=t.h;var n=new tn;n.i=e.i,e.g&&(n.g=new Tt(e.g),n.h=e.h),ra(this,n),this.o=t.o}else t&&(n=String(t).match(Lc))?(this.g=!!e,cr(this,n[1]||"",!0),this.s=zt(n[2]||""),lr(this,n[3]||"",!0),hr(this,n[4]),this.l=zt(n[5]||"",!0),ra(this,n[6]||"",!0),this.o=zt(n[7]||"")):(this.g=!!e,this.h=new tn(null,this.g))}We.prototype.toString=function(){var t=[],e=this.j;e&&t.push(qt(e,sa,!0),":");var n=this.i;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(qt(e,sa,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&t.push("/"),t.push(qt(n,n.charAt(0)=="/"?Zp:Jp,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",qt(n,tg)),t.join("")};function Te(t){return new We(t)}function cr(t,e,n){t.j=n?zt(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function lr(t,e,n){t.i=n?zt(e,!0):e}function hr(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function ra(t,e,n){e instanceof tn?(t.h=e,ng(t.h,t.g)):(n||(e=qt(e,eg)),t.h=new tn(e,t.g))}function P(t,e,n){t.h.set(e,n)}function Pr(t){return P(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Xp(t){return t instanceof We?Te(t):new We(t,void 0)}function Yp(t,e,n,r){var s=new We(null,void 0);return t&&cr(s,t),e&&lr(s,e),n&&hr(s,n),r&&(s.l=r),s}function zt(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function qt(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,Qp),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Qp(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var sa=/[#\/\?@]/g,Jp=/[#\?:]/g,Zp=/[#\?]/g,eg=/[#\?@]/g,tg=/#/g;function tn(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function ke(t){t.g||(t.g=new Tt,t.h=0,t.i&&Wp(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}y=tn.prototype;y.add=function(t,e){ke(this),this.i=null,t=St(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Mc(t,e){ke(t),e=St(t,e),Ge(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,Ge(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&qi(t)))}function jc(t,e){return ke(t),e=St(t,e),Ge(t.g.h,e)}y.forEach=function(t,e){ke(this),this.g.forEach(function(n,r){hc(n,function(s){t.call(e,s,r,this)},this)},this)};y.T=function(){ke(this);for(var t=this.g.R(),e=this.g.T(),n=[],r=0;r<e.length;r++)for(var s=t[r],i=0;i<s.length;i++)n.push(e[r]);return n};y.R=function(t){ke(this);var e=[];if(typeof t=="string")jc(this,t)&&(e=Wo(e,this.g.get(St(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=Wo(e,t[n])}return e};y.set=function(t,e){return ke(this),this.i=null,t=St(this,t),jc(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};y.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e};function Uc(t,e,n){Mc(t,e),0<n.length&&(t.i=null,t.g.set(St(t,e),xi(n)),t.h+=n.length)}y.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var r=e[n],s=encodeURIComponent(String(r));r=this.R(r);for(var i=0;i<r.length;i++){var o=s;r[i]!==""&&(o+="="+encodeURIComponent(String(r[i]))),t.push(o)}}return this.i=t.join("&")};function St(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function ng(t,e){e&&!t.j&&(ke(t),t.i=null,t.g.forEach(function(n,r){var s=r.toLowerCase();r!=s&&(Mc(this,r),Uc(this,s,n))},t)),t.j=e}var rg=class{constructor(t,e){this.h=t,this.g=e}};function Vc(t){this.l=t||sg,S.PerformanceNavigationTiming?(t=S.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(S.g&&S.g.Ea&&S.g.Ea()&&S.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var sg=10;function Bc(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function qc(t){return t.h?1:t.g?t.g.size:0}function Hs(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Hi(t,e){t.g?t.g.add(e):t.h=e}function Hc(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Vc.prototype.cancel=function(){if(this.i=zc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function zc(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return xi(t.i)}function zi(){}zi.prototype.stringify=function(t){return S.JSON.stringify(t,void 0)};zi.prototype.parse=function(t){return S.JSON.parse(t,void 0)};function ig(){this.g=new zi}function og(t,e,n){const r=n||"";try{Bi(t,function(s,i){let o=s;pn(s)&&(o=Ni(s)),e.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw e.push(r+"type="+encodeURIComponent("_badmap")),s}}function ag(t,e){const n=new kr;if(S.Image){const r=new Image;r.onload=Rn(Pn,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Rn(Pn,n,r,"TestLoadImage: error",!1,e),r.onabort=Rn(Pn,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Rn(Pn,n,r,"TestLoadImage: timeout",!1,e),S.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Pn(t,e,n,r,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(r)}catch{}}function _n(t){this.l=t.$b||null,this.j=t.ib||!1}ee(_n,ji);_n.prototype.g=function(){return new Lr(this.l,this.j)};_n.prototype.i=function(t){return function(){return t}}({});function Lr(t,e){K.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Ki,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}ee(Lr,K);var Ki=0;y=Lr.prototype;y.open=function(t,e){if(this.readyState!=Ki)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,nn(this)};y.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||S).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))};y.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,bn(this)),this.readyState=Ki};y.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,nn(this)),this.g&&(this.readyState=3,nn(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof S.ReadableStream!="undefined"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Kc(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))};function Kc(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}y.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?bn(this):nn(this),this.readyState==3&&Kc(this)}};y.Ua=function(t){this.g&&(this.response=this.responseText=t,bn(this))};y.Ta=function(t){this.g&&(this.response=t,bn(this))};y.ha=function(){this.g&&bn(this)};function bn(t){t.readyState=4,t.l=null,t.j=null,t.A=null,nn(t)}y.setRequestHeader=function(t,e){this.v.append(t,e)};y.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};y.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function nn(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Lr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var ug=S.JSON.parse;function q(t){K.call(this),this.headers=new Tt,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Gc,this.K=this.L=!1}ee(q,K);var Gc="",cg=/^https?$/i,lg=["POST","PUT"];y=q.prototype;y.ea=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Us.g(),this.C=this.u?na(this.u):na(Us),this.g.onreadystatechange=X(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(i){ia(this,i);return}t=n||"";const s=new Tt(this.headers);r&&Bi(r,function(i,o){s.set(o,i)}),r=bp(s.T()),n=S.FormData&&t instanceof S.FormData,!(0<=lc(lg,e))||r||n||s.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),s.forEach(function(i,o){this.g.setRequestHeader(o,i)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Yc(this),0<this.B&&((this.K=hg(this.g))?(this.g.timeout=this.B,this.g.ontimeout=X(this.pa,this)):this.A=Mi(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){ia(this,i)}};function hg(t){return pt&&Ip()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}function fg(t){return t.toLowerCase()=="content-type"}y.pa=function(){typeof Ai!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Y(this,"timeout"),this.abort(8))};function ia(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Wc(t),Mr(t)}function Wc(t){t.D||(t.D=!0,Y(t,"complete"),Y(t,"error"))}y.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Y(this,"complete"),Y(this,"abort"),Mr(this))};y.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Mr(this,!0)),q.Z.M.call(this)};y.Fa=function(){this.s||(this.F||this.v||this.l?Xc(this):this.cb())};y.cb=function(){Xc(this)};function Xc(t){if(t.h&&typeof Ai!="undefined"&&(!t.C[1]||Ee(t)!=4||t.ba()!=2)){if(t.v&&Ee(t)==4)Mi(t.Fa,0,t);else if(Y(t,"readystatechange"),Ee(t)==4){t.h=!1;try{const a=t.ba();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var s=String(t.H).match(Lc)[1]||null;if(!s&&S.self&&S.self.location){var i=S.self.location.protocol;s=i.substr(0,i.length-1)}r=!cg.test(s?s.toLowerCase():"")}n=r}if(n)Y(t,"complete"),Y(t,"success");else{t.m=6;try{var o=2<Ee(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.ba()+"]",Wc(t)}}finally{Mr(t)}}}}function Mr(t,e){if(t.g){Yc(t);const n=t.g,r=t.C[0]?ir:null;t.g=null,t.C=null,e||Y(t,"ready");try{n.onreadystatechange=r}catch{}}}function Yc(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(S.clearTimeout(t.A),t.A=null)}function Ee(t){return t.g?t.g.readyState:0}y.ba=function(){try{return 2<Ee(this)?this.g.status:-1}catch{return-1}};y.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};y.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),ug(e)}};function oa(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Gc:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}y.Da=function(){return this.m};y.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function dg(t){let e="";return Di(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Gi(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=dg(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):P(t,e,n))}function Lt(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Qc(t){this.za=0,this.l=[],this.h=new kr,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=Lt("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=Lt("baseRetryDelayMs",5e3,t),this.$a=Lt("retryDelaySeedMs",1e4,t),this.Ya=Lt("forwardChannelMaxRetries",2,t),this.ra=Lt("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new Vc(t&&t.concurrentRequestLimit),this.Ca=new ig,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||t.Xb!==!1}y=Qc.prototype;y.ma=8;y.G=1;function Wi(t){if(Jc(t),t.G==3){var e=t.V++,n=Te(t.F);P(n,"SID",t.J),P(n,"RID",e),P(n,"TYPE","terminate"),En(t,n),e=new vn(t,t.h,e,void 0),e.K=2,e.v=Pr(Te(n)),n=!1,S.navigator&&S.navigator.sendBeacon&&(n=S.navigator.sendBeacon(e.v.toString(),"")),!n&&S.Image&&(new Image().src=e.v,n=!0),n||(e.g=ol(e.l,null),e.g.ea(e.v)),e.F=Date.now(),wn(e)}sl(t)}y.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch{}};function jr(t){t.g&&(Yi(t),t.g.cancel(),t.g=null)}function Jc(t){jr(t),t.u&&(S.clearTimeout(t.u),t.u=null),fr(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&S.clearTimeout(t.m),t.m=null)}function hs(t,e){t.l.push(new rg(t.Za++,e)),t.G==3&&Ur(t)}function Ur(t){Bc(t.i)||t.m||(t.m=!0,Pi(t.Ha,t),t.C=0)}function pg(t,e){return qc(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.l=e.D.concat(t.l),!0):t.G==1||t.G==2||t.C>=(t.Xa?0:t.Ya)?!1:(t.m=mn(X(t.Ha,t,e),rl(t,t.C)),t.C++,!0)}y.Ha=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const s=new vn(this,this.h,t,void 0);let i=this.s;if(this.P&&(i?(i=fc(i),dc(i,this.P)):i=this.P),this.o===null&&(s.H=i),this.ja)e:{for(var e=0,n=0;n<this.l.length;n++){t:{var r=this.l[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.l.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Zc(this,s,e),n=Te(this.F),P(n,"RID",t),P(n,"CVER",22),this.D&&P(n,"X-HTTP-Session-Id",this.D),En(this,n),this.o&&i&&Gi(n,this.o,i),Hi(this.i,s),this.Ra&&P(n,"TYPE","init"),this.ja?(P(n,"$req",e),P(n,"SID","null"),s.$=!0,Bs(s,n,null)):Bs(s,n,e),this.G=2}}else this.G==3&&(t?aa(this,t):this.l.length==0||Bc(this.i)||aa(this))};function aa(t,e){var n;e?n=e.m:n=t.V++;const r=Te(t.F);P(r,"SID",t.J),P(r,"RID",n),P(r,"AID",t.U),En(t,r),t.o&&t.s&&Gi(r,t.o,t.s),n=new vn(t,t.h,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=Zc(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),Hi(t.i,n),Bs(n,r,e)}function En(t,e){t.j&&Bi({},function(n,r){P(e,r,n)})}function Zc(t,e,n){n=Math.min(t.l.length,n);var r=t.j?X(t.j.Oa,t.j,t):null;e:{var s=t.l;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=s[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let u=0;u<n;u++){let c=s[u].h;const l=s[u].g;if(c-=i,0>c)i=Math.max(0,s[u].h-100),a=!1;else try{og(l,o,"req"+c+"_")}catch{r&&r(l)}}if(a){r=o.join("&");break e}}}return t=t.l.splice(0,n),e.D=t,r}function el(t){t.g||t.u||(t.Y=1,Pi(t.Ga,t),t.A=0)}function Xi(t){return t.g||t.u||3<=t.A?!1:(t.Y++,t.u=mn(X(t.Ga,t),rl(t,t.A)),t.A++,!0)}y.Ga=function(){if(this.u=null,tl(this),this.$&&!(this.L||this.g==null||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=mn(X(this.bb,this),t)}};y.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,oe(10),jr(this),tl(this))};function Yi(t){t.B!=null&&(S.clearTimeout(t.B),t.B=null)}function tl(t){t.g=new vn(t,t.h,"rpc",t.Y),t.o===null&&(t.g.H=t.s),t.g.O=0;var e=Te(t.oa);P(e,"RID","rpc"),P(e,"SID",t.J),P(e,"CI",t.N?"0":"1"),P(e,"AID",t.U),En(t,e),P(e,"TYPE","xmlhttp"),t.o&&t.s&&Gi(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=Pr(Te(e)),n.s=null,n.U=!0,Fc(n,t)}y.ab=function(){this.v!=null&&(this.v=null,jr(this),Xi(this),oe(19))};function fr(t){t.v!=null&&(S.clearTimeout(t.v),t.v=null)}function nl(t,e){var n=null;if(t.g==e){fr(t),Yi(t),t.g=null;var r=2}else if(Hs(t.i,e))n=e.D,Hc(t.i,e),r=1;else return;if(t.I=e.N,t.G!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var s=t.C;r=Or(),Y(r,new Dc(r,n,e,s)),Ur(t)}else el(t);else if(s=e.o,s==3||s==0&&0<t.I||!(r==1&&pg(t,e)||r==2&&Xi(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),s){case 1:je(t,5);break;case 4:je(t,10);break;case 3:je(t,6);break;default:je(t,2)}}}function rl(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function je(t,e){if(t.h.info("Error code "+e),e==2){var n=null;t.j&&(n=null);var r=X(t.jb,t);n||(n=new We("//www.google.com/images/cleardot.gif"),S.location&&S.location.protocol=="http"||cr(n,"https"),Pr(n)),ag(n.toString(),r)}else oe(2);t.G=0,t.j&&t.j.va(e),sl(t),Jc(t)}y.jb=function(t){t?(this.h.info("Successfully pinged google.com"),oe(2)):(this.h.info("Failed to ping google.com"),oe(1))};function sl(t){t.G=0,t.I=-1,t.j&&((zc(t.i).length!=0||t.l.length!=0)&&(t.i.i.length=0,xi(t.l),t.l.length=0),t.j.ua())}function il(t,e,n){let r=Xp(n);if(r.i!="")e&&lr(r,e+"."+r.i),hr(r,r.m);else{const s=S.location;r=Yp(s.protocol,e?e+"."+s.hostname:s.hostname,+s.port,n)}return t.aa&&Di(t.aa,function(s,i){P(r,i,s)}),e=t.D,n=t.sa,e&&n&&P(r,e,n),P(r,"VER",t.ma),En(t,r),r}function ol(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new q(new _n({ib:!0})):new q(t.qa),e.L=t.H,e}function al(){}y=al.prototype;y.xa=function(){};y.wa=function(){};y.va=function(){};y.ua=function(){};y.Oa=function(){};function dr(){if(pt&&!(10<=Number(Ap)))throw Error("Environmental error: no available transport.")}dr.prototype.g=function(t,e){return new fe(t,e)};function fe(t,e){K.call(this),this.g=new Qc(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!or(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!or(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Ct(this)}ee(fe,K);fe.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),Pi(X(t.hb,t,e))),oe(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=il(t,null,t.W),Ur(t)};fe.prototype.close=function(){Wi(this.g)};fe.prototype.u=function(t){if(typeof t=="string"){var e={};e.__data__=t,hs(this.g,e)}else this.v?(e={},e.__data__=Ni(t),hs(this.g,e)):hs(this.g,t)};fe.prototype.M=function(){this.g.j=null,delete this.j,Wi(this.g),delete this.g,fe.Z.M.call(this)};function ul(t){Ui.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}ee(ul,Ui);function cl(){Vi.call(this),this.status=1}ee(cl,Vi);function Ct(t){this.g=t}ee(Ct,al);Ct.prototype.xa=function(){Y(this.g,"a")};Ct.prototype.wa=function(t){Y(this.g,new ul(t))};Ct.prototype.va=function(t){Y(this.g,new cl(t))};Ct.prototype.ua=function(){Y(this.g,"b")};dr.prototype.createWebChannel=dr.prototype.g;fe.prototype.send=fe.prototype.u;fe.prototype.open=fe.prototype.m;fe.prototype.close=fe.prototype.close;Fr.NO_ERROR=0;Fr.TIMEOUT=8;Fr.HTTP_ERROR=6;$c.COMPLETE="complete";kc.EventType=yn;yn.OPEN="a";yn.CLOSE="b";yn.ERROR="c";yn.MESSAGE="d";K.prototype.listen=K.prototype.N;q.prototype.listenOnce=q.prototype.O;q.prototype.getLastError=q.prototype.La;q.prototype.getLastErrorCode=q.prototype.Da;q.prototype.getStatus=q.prototype.ba;q.prototype.getResponseJson=q.prototype.Qa;q.prototype.getResponseText=q.prototype.ga;q.prototype.send=q.prototype.ea;var gg=function(){return new dr},mg=function(){return Or()},fs=Fr,yg=$c,vg=et,ua={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},wg=_n,Ln=kc,_g=q;const ca="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ae.UNAUTHENTICATED=new ae(null),ae.GOOGLE_CREDENTIALS=new ae("google-credentials-uid"),ae.FIRST_PARTY=new ae("first-party-uid"),ae.MOCK_USER=new ae("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let It="9.6.10";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xe=new rc("@firebase/firestore");function la(){return Xe.logLevel}function w(t,...e){if(Xe.logLevel<=k.DEBUG){const n=e.map(Qi);Xe.debug(`Firestore (${It}): ${t}`,...n)}}function xe(t,...e){if(Xe.logLevel<=k.ERROR){const n=e.map(Qi);Xe.error(`Firestore (${It}): ${t}`,...n)}}function ha(t,...e){if(Xe.logLevel<=k.WARN){const n=e.map(Qi);Xe.warn(`Firestore (${It}): ${t}`,...n)}}function Qi(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C(t="Unexpected state"){const e=`FIRESTORE (${It}) INTERNAL ASSERTION FAILED: `+t;throw xe(e),new Error(e)}function B(t,e){t||C()}function D(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class T extends dn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bg{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Eg{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ae.UNAUTHENTICATED))}shutdown(){}}class Tg{constructor(e){this.t=e,this.currentUser=ae.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const s=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let i=new qe;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new qe,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const u=i;e.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},a=u=>{w("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(w("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new qe)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(w("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(B(typeof r.accessToken=="string"),new bg(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return B(e===null||typeof e=="string"),new ae(e)}}class Sg{constructor(e,n,r){this.type="FirstParty",this.user=ae.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",n);const s=e.auth.getAuthHeaderValueForFirstParty([]);s&&this.headers.set("Authorization",s),r&&this.headers.set("X-Goog-Iam-Authorization-Token",r)}}class Cg{constructor(e,n,r){this.h=e,this.l=n,this.m=r}getToken(){return Promise.resolve(new Sg(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(ae.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Ig{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Ag{constructor(e){this.g=e,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(e,n){const r=i=>{i.error!=null&&w("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.p;return this.p=i.token,w("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{w("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.g.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.g.getImmediate({optional:!0});i?s(i):w("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(B(typeof n.token=="string"),this.p=n.token,new Ig(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.I(r),this.T=r=>n.writeSequenceNumber(r))}I(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.T&&this.T(e),e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xg(t){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ji.A=-1;class Dg{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=xg(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function O(t,e){return t<e?-1:t>e?1:0}function rn(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new T(m.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new T(m.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new T(m.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new T(m.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ve.fromMillis(Date.now())}static fromDate(e){return ve.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new ve(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?O(this.nanoseconds,e.nanoseconds):O(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I{constructor(e){this.timestamp=e}static fromTimestamp(e){return new I(e)}static min(){return new I(new ve(0,0))}static max(){return new I(new ve(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fa(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Vr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function $g(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{constructor(e,n,r){n===void 0?n=0:n>e.length&&C(),r===void 0?r=e.length-n:r>e.length-n&&C(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return sn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof sn?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class M extends sn{construct(e,n,r){return new M(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new T(m.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new M(n)}static emptyPath(){return new M([])}}const kg=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ye extends sn{construct(e,n,r){return new ye(e,n,r)}static isValidIdentifier(e){return kg.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ye.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ye(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new T(m.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new T(m.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new T(m.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new T(m.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ye(n)}static emptyPath(){return new ye([])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new J(n)}static fromUint8Array(e){const n=function(r){let s="";for(let i=0;i<r.length;++i)s+=String.fromCharCode(r[i]);return s}(e);return new J(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return O(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}J.EMPTY_BYTE_STRING=new J("");const Og=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function De(t){if(B(!!t),typeof t=="string"){let e=0;const n=Og.exec(t);if(B(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:V(t.seconds),nanos:V(t.nanos)}}function V(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function gt(t){return typeof t=="string"?J.fromBase64String(t):J.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ll(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function hl(t){const e=t.mapValue.fields.__previous_value__;return ll(e)?hl(e):e}function on(t){const e=De(t.mapValue.fields.__local_write_time__.timestampValue);return new ve(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fg{constructor(e,n,r,s,i,o,a,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=u}}class mt{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new mt("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof mt&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function At(t){return t==null}function zs(t){return t===0&&1/t==-1/0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E{constructor(e){this.path=e}static fromPath(e){return new E(M.fromString(e))}static fromName(e){return new E(M.fromString(e).popFirst(5))}static empty(){return new E(M.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&M.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return M.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new E(new M(e.slice()))}}function Ye(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?ll(t)?4:Rg(t)?9:10:C()}function we(t,e){if(t===e)return!0;const n=Ye(t);if(n!==Ye(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return on(t).isEqual(on(e));case 3:return function(r,s){if(typeof r.timestampValue=="string"&&typeof s.timestampValue=="string"&&r.timestampValue.length===s.timestampValue.length)return r.timestampValue===s.timestampValue;const i=De(r.timestampValue),o=De(s.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,s){return gt(r.bytesValue).isEqual(gt(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,s){return V(r.geoPointValue.latitude)===V(s.geoPointValue.latitude)&&V(r.geoPointValue.longitude)===V(s.geoPointValue.longitude)}(t,e);case 2:return function(r,s){if("integerValue"in r&&"integerValue"in s)return V(r.integerValue)===V(s.integerValue);if("doubleValue"in r&&"doubleValue"in s){const i=V(r.doubleValue),o=V(s.doubleValue);return i===o?zs(i)===zs(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return rn(t.arrayValue.values||[],e.arrayValue.values||[],we);case 10:return function(r,s){const i=r.mapValue.fields||{},o=s.mapValue.fields||{};if(fa(i)!==fa(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!we(i[a],o[a])))return!1;return!0}(t,e);default:return C()}}function an(t,e){return(t.values||[]).find(n=>we(n,e))!==void 0}function yt(t,e){if(t===e)return 0;const n=Ye(t),r=Ye(e);if(n!==r)return O(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return O(t.booleanValue,e.booleanValue);case 2:return function(s,i){const o=V(s.integerValue||s.doubleValue),a=V(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return da(t.timestampValue,e.timestampValue);case 4:return da(on(t),on(e));case 5:return O(t.stringValue,e.stringValue);case 6:return function(s,i){const o=gt(s),a=gt(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(s,i){const o=s.split("/"),a=i.split("/");for(let u=0;u<o.length&&u<a.length;u++){const c=O(o[u],a[u]);if(c!==0)return c}return O(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,i){const o=O(V(s.latitude),V(i.latitude));return o!==0?o:O(V(s.longitude),V(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,i){const o=s.values||[],a=i.values||[];for(let u=0;u<o.length&&u<a.length;++u){const c=yt(o[u],a[u]);if(c)return c}return O(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,i){const o=s.fields||{},a=Object.keys(o),u=i.fields||{},c=Object.keys(u);a.sort(),c.sort();for(let l=0;l<a.length&&l<c.length;++l){const h=O(a[l],c[l]);if(h!==0)return h;const f=yt(o[a[l]],u[c[l]]);if(f!==0)return f}return O(a.length,c.length)}(t.mapValue,e.mapValue);default:throw C()}}function da(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return O(t,e);const n=De(t),r=De(e),s=O(n.seconds,r.seconds);return s!==0?s:O(n.nanos,r.nanos)}function lt(t){return Ks(t)}function Ks(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const s=De(r);return`time(${s.seconds},${s.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?gt(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,E.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let s="[",i=!0;for(const o of r.values||[])i?i=!1:s+=",",s+=Ks(o);return s+"]"}(t.arrayValue):"mapValue"in t?function(r){const s=Object.keys(r.fields||{}).sort();let i="{",o=!0;for(const a of s)o?o=!1:i+=",",i+=`${a}:${Ks(r.fields[a])}`;return i+"}"}(t.mapValue):C();var e,n}function Gs(t){return!!t&&"integerValue"in t}function Zi(t){return!!t&&"arrayValue"in t}function pa(t){return!!t&&"nullValue"in t}function ga(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ds(t){return!!t&&"mapValue"in t}function Kt(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Vr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Kt(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Kt(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Rg(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e{constructor(e){this.value=e}static empty(){return new _e({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!ds(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Kt(n)}setAll(e){let n=ye.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const u=this.getFieldsMap(n);this.applyChanges(u,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=Kt(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());ds(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return we(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];ds(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Vr(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new _e(Kt(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{constructor(e,n,r,s,i,o){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.data=i,this.documentState=o}static newInvalidDocument(e){return new te(e,0,I.min(),I.min(),_e.empty(),0)}static newFoundDocument(e,n,r){return new te(e,1,n,I.min(),r,0)}static newNoDocument(e,n){return new te(e,2,n,I.min(),_e.empty(),0)}static newUnknownDocument(e,n){return new te(e,3,n,I.min(),_e.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=_e.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=_e.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof te&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new te(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}function Ng(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=I.fromTimestamp(r===1e9?new ve(n+1,0):new ve(n,r));return new vt(s,E.empty(),e)}function Pg(t){return new vt(t.readTime,t.key,-1)}class vt{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new vt(I.min(),E.empty(),-1)}static max(){return new vt(I.max(),E.empty(),-1)}}function Lg(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=E.comparator(t.documentKey,e.documentKey),n!==0?n:O(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mg{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.P=null}}function ma(t,e=null,n=[],r=[],s=null,i=null,o=null){return new Mg(t,e,n,r,s,i,o)}function eo(t){const e=D(t);if(e.P===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>{return(s=r).field.canonicalString()+s.op.toString()+lt(s.value);var s}).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),At(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>lt(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>lt(r)).join(",")),e.P=n}return e.P}function jg(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(r=n).field.canonicalString()} ${r.op} ${lt(r.value)}`;var r}).join(", ")}]`),At(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>lt(n)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>lt(n)).join(",")),`Target(${e})`}function to(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let s=0;s<t.orderBy.length;s++)if(!Gg(t.orderBy[s],e.orderBy[s]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let s=0;s<t.filters.length;s++)if(n=t.filters[s],r=e.filters[s],n.op!==r.op||!n.field.isEqual(r.field)||!we(n.value,r.value))return!1;var n,r;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!va(t.startAt,e.startAt)&&va(t.endAt,e.endAt)}function Ws(t){return E.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class ue extends class{}{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.V(e,n,r):new Ug(e,n,r):n==="array-contains"?new qg(e,r):n==="in"?new Hg(e,r):n==="not-in"?new zg(e,r):n==="array-contains-any"?new Kg(e,r):new ue(e,n,r)}static V(e,n,r){return n==="in"?new Vg(e,r):new Bg(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.v(yt(n,this.value)):n!==null&&Ye(this.value)===Ye(n)&&this.v(yt(n,this.value))}v(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return C()}}S(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class Ug extends ue{constructor(e,n,r){super(e,n,r),this.key=E.fromName(r.referenceValue)}matches(e){const n=E.comparator(e.key,this.key);return this.v(n)}}class Vg extends ue{constructor(e,n){super(e,"in",n),this.keys=fl("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Bg extends ue{constructor(e,n){super(e,"not-in",n),this.keys=fl("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function fl(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>E.fromName(r.referenceValue))}class qg extends ue{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Zi(n)&&an(n.arrayValue,this.value)}}class Hg extends ue{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&an(this.value.arrayValue,n)}}class zg extends ue{constructor(e,n){super(e,"not-in",n)}matches(e){if(an(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!an(this.value.arrayValue,n)}}class Kg extends ue{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Zi(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>an(this.value.arrayValue,r))}}class pr{constructor(e,n){this.position=e,this.inclusive=n}}class Gt{constructor(e,n="asc"){this.field=e,this.dir=n}}function Gg(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function ya(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=E.comparator(E.fromName(o.referenceValue),n.key):r=yt(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function va(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!we(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=u,this.D=null,this.C=null,this.startAt,this.endAt}}function Wg(t,e,n,r,s,i,o,a){return new Br(t,e,n,r,s,i,o,a)}function dl(t){return new Br(t)}function Xn(t){return!At(t.limit)&&t.limitType==="F"}function gr(t){return!At(t.limit)&&t.limitType==="L"}function Xg(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Yg(t){for(const e of t.filters)if(e.S())return e.field;return null}function Qg(t){return t.collectionGroup!==null}function un(t){const e=D(t);if(e.D===null){e.D=[];const n=Yg(e),r=Xg(e);if(n!==null&&r===null)n.isKeyField()||e.D.push(new Gt(n)),e.D.push(new Gt(ye.keyField(),"asc"));else{let s=!1;for(const i of e.explicitOrderBy)e.D.push(i),i.field.isKeyField()&&(s=!0);if(!s){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.D.push(new Gt(ye.keyField(),i))}}}return e.D}function Qe(t){const e=D(t);if(!e.C)if(e.limitType==="F")e.C=ma(e.path,e.collectionGroup,un(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of un(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new Gt(i.field,o))}const r=e.endAt?new pr(e.endAt.position,!e.endAt.inclusive):null,s=e.startAt?new pr(e.startAt.position,!e.startAt.inclusive):null;e.C=ma(e.path,e.collectionGroup,n,e.filters,e.limit,r,s)}return e.C}function Jg(t,e,n){return new Br(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function qr(t,e){return to(Qe(t),Qe(e))&&t.limitType===e.limitType}function pl(t){return`${eo(Qe(t))}|lt:${t.limitType}`}function Xs(t){return`Query(target=${jg(Qe(t))}; limitType=${t.limitType})`}function no(t,e){return e.isFoundDocument()&&function(n,r){const s=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(s):E.isDocumentKey(n.path)?n.path.isEqual(s):n.path.isImmediateParentOf(s)}(t,e)&&function(n,r){for(const s of n.explicitOrderBy)if(!s.field.isKeyField()&&r.data.field(s.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const s of n.filters)if(!s.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(s,i,o){const a=ya(s,i,o);return s.inclusive?a<=0:a<0}(n.startAt,un(n),r)||n.endAt&&!function(s,i,o){const a=ya(s,i,o);return s.inclusive?a>=0:a>0}(n.endAt,un(n),r))}(t,e)}function Zg(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function gl(t){return(e,n)=>{let r=!1;for(const s of un(t)){const i=em(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function em(t,e,n){const r=t.field.isKeyField()?E.comparator(e.key,n.key):function(s,i,o){const a=i.data.field(s),u=o.data.field(s);return a!==null&&u!==null?yt(a,u):C()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return C()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tm(t,e){if(t.N){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:zs(e)?"-0":e}}function nm(t){return{integerValue:""+t}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr{constructor(){this._=void 0}}function rm(t,e,n){return t instanceof Ys?function(r,s){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return s&&(i.fields.__previous_value__=s),{mapValue:i}}(n,e):t instanceof mr?ml(t,e):t instanceof yr?yl(t,e):function(r,s){const i=im(r,s),o=wa(i)+wa(r.k);return Gs(i)&&Gs(r.k)?nm(o):tm(r.M,o)}(t,e)}function sm(t,e,n){return t instanceof mr?ml(t,e):t instanceof yr?yl(t,e):n}function im(t,e){return t instanceof Qs?Gs(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class Ys extends Hr{}class mr extends Hr{constructor(e){super(),this.elements=e}}function ml(t,e){const n=vl(e);for(const r of t.elements)n.some(s=>we(s,r))||n.push(r);return{arrayValue:{values:n}}}class yr extends Hr{constructor(e){super(),this.elements=e}}function yl(t,e){let n=vl(e);for(const r of t.elements)n=n.filter(s=>!we(s,r));return{arrayValue:{values:n}}}class Qs extends Hr{constructor(e,n){super(),this.M=e,this.k=n}}function wa(t){return V(t.integerValue||t.doubleValue)}function vl(t){return Zi(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function om(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof mr&&r instanceof mr||n instanceof yr&&r instanceof yr?rn(n.elements,r.elements,we):n instanceof Qs&&r instanceof Qs?we(n.k,r.k):n instanceof Ys&&r instanceof Ys}(t.transform,e.transform)}function Yn(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class wl{}function am(t,e,n){t instanceof _l?function(r,s,i){const o=r.value.clone(),a=Ea(r.fieldTransforms,s,i.transformResults);o.setAll(a),s.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof bl?function(r,s,i){if(!Yn(r.precondition,s))return void s.convertToUnknownDocument(i.version);const o=Ea(r.fieldTransforms,s,i.transformResults),a=s.data;a.setAll(El(r)),a.setAll(o),s.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(r,s,i){s.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function Js(t,e,n){t instanceof _l?function(r,s,i){if(!Yn(r.precondition,s))return;const o=r.value.clone(),a=Ta(r.fieldTransforms,i,s);o.setAll(a),s.convertToFoundDocument(ba(s),o).setHasLocalMutations()}(t,e,n):t instanceof bl?function(r,s,i){if(!Yn(r.precondition,s))return;const o=Ta(r.fieldTransforms,i,s),a=s.data;a.setAll(El(r)),a.setAll(o),s.convertToFoundDocument(ba(s),a).setHasLocalMutations()}(t,e,n):function(r,s){Yn(r.precondition,s)&&s.convertToNoDocument(I.min())}(t,e)}function _a(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&rn(n,r,(s,i)=>om(s,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}function ba(t){return t.isFoundDocument()?t.version:I.min()}class _l extends wl{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}}class bl extends wl{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}}function El(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Ea(t,e,n){const r=new Map;B(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,sm(o,a,n[s]))}return r}function Ta(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,rm(i,o,e))}return r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class um{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var U,A;function Tl(t){if(t===void 0)return xe("GRPC error has no .code"),m.UNKNOWN;switch(t){case U.OK:return m.OK;case U.CANCELLED:return m.CANCELLED;case U.UNKNOWN:return m.UNKNOWN;case U.DEADLINE_EXCEEDED:return m.DEADLINE_EXCEEDED;case U.RESOURCE_EXHAUSTED:return m.RESOURCE_EXHAUSTED;case U.INTERNAL:return m.INTERNAL;case U.UNAVAILABLE:return m.UNAVAILABLE;case U.UNAUTHENTICATED:return m.UNAUTHENTICATED;case U.INVALID_ARGUMENT:return m.INVALID_ARGUMENT;case U.NOT_FOUND:return m.NOT_FOUND;case U.ALREADY_EXISTS:return m.ALREADY_EXISTS;case U.PERMISSION_DENIED:return m.PERMISSION_DENIED;case U.FAILED_PRECONDITION:return m.FAILED_PRECONDITION;case U.ABORTED:return m.ABORTED;case U.OUT_OF_RANGE:return m.OUT_OF_RANGE;case U.UNIMPLEMENTED:return m.UNIMPLEMENTED;case U.DATA_LOSS:return m.DATA_LOSS;default:return C()}}(A=U||(U={}))[A.OK=0]="OK",A[A.CANCELLED=1]="CANCELLED",A[A.UNKNOWN=2]="UNKNOWN",A[A.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",A[A.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",A[A.NOT_FOUND=5]="NOT_FOUND",A[A.ALREADY_EXISTS=6]="ALREADY_EXISTS",A[A.PERMISSION_DENIED=7]="PERMISSION_DENIED",A[A.UNAUTHENTICATED=16]="UNAUTHENTICATED",A[A.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",A[A.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",A[A.ABORTED=10]="ABORTED",A[A.OUT_OF_RANGE=11]="OUT_OF_RANGE",A[A.UNIMPLEMENTED=12]="UNIMPLEMENTED",A[A.INTERNAL=13]="INTERNAL",A[A.UNAVAILABLE=14]="UNAVAILABLE",A[A.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Vr(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return $g(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(e,n){this.comparator=e,this.root=n||W.EMPTY}insert(e,n){return new Z(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,W.BLACK,null,null))}remove(e){return new Z(this.comparator,this.root.remove(e,this.comparator).copy(null,null,W.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Mn(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Mn(this.root,e,this.comparator,!1)}getReverseIterator(){return new Mn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Mn(this.root,e,this.comparator,!0)}}class Mn{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class W{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r!=null?r:W.RED,this.left=s!=null?s:W.EMPTY,this.right=i!=null?i:W.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new W(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,s!=null?s:this.left,i!=null?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return W.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return W.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,W.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,W.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw C();const e=this.left.check();if(e!==this.right.check())throw C();return e+(this.isRed()?0:1)}}W.EMPTY=null,W.RED=!0,W.BLACK=!1;W.EMPTY=new class{constructor(){this.size=0}get key(){throw C()}get value(){throw C()}get color(){throw C()}get left(){throw C()}get right(){throw C()}copy(t,e,n,r,s){return this}insert(t,e,n){return new W(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(e){this.comparator=e,this.data=new Z(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Sa(this.data.getIterator())}getIteratorFrom(e){return new Sa(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Q)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Q(this.comparator);return n.data=e,n}}class Sa{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cm=new Z(E.comparator);function Je(){return cm}const lm=new Z(E.comparator);function Zs(){return lm}function ps(){return new xt(t=>t.toString(),(t,e)=>t.isEqual(e))}new Z(E.comparator);const hm=new Q(E.comparator);function L(...t){let e=hm;for(const n of t)e=e.add(n);return e}const fm=new Q(O);function Sl(){return fm}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zr{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n){const r=new Map;return r.set(e,Tn.createSynthesizedTargetChangeForCurrentChange(e,n)),new zr(I.min(),r,Sl(),Je(),L())}}class Tn{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n){return new Tn(J.EMPTY_BYTE_STRING,n,L(),L(),L())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn{constructor(e,n,r,s){this.O=e,this.removedTargetIds=n,this.key=r,this.F=s}}class Cl{constructor(e,n){this.targetId=e,this.$=n}}class Il{constructor(e,n,r=J.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Ca{constructor(){this.B=0,this.L=Aa(),this.U=J.EMPTY_BYTE_STRING,this.q=!1,this.G=!0}get current(){return this.q}get resumeToken(){return this.U}get K(){return this.B!==0}get j(){return this.G}W(e){e.approximateByteSize()>0&&(this.G=!0,this.U=e)}H(){let e=L(),n=L(),r=L();return this.L.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:C()}}),new Tn(this.U,this.q,e,n,r)}J(){this.G=!1,this.L=Aa()}Y(e,n){this.G=!0,this.L=this.L.insert(e,n)}X(e){this.G=!0,this.L=this.L.remove(e)}Z(){this.B+=1}tt(){this.B-=1}et(){this.G=!0,this.q=!0}}class dm{constructor(e){this.nt=e,this.st=new Map,this.it=Je(),this.rt=Ia(),this.ot=new Q(O)}ut(e){for(const n of e.O)e.F&&e.F.isFoundDocument()?this.at(n,e.F):this.ct(n,e.key,e.F);for(const n of e.removedTargetIds)this.ct(n,e.key,e.F)}ht(e){this.forEachTarget(e,n=>{const r=this.lt(n);switch(e.state){case 0:this.ft(n)&&r.W(e.resumeToken);break;case 1:r.tt(),r.K||r.J(),r.W(e.resumeToken);break;case 2:r.tt(),r.K||this.removeTarget(n);break;case 3:this.ft(n)&&(r.et(),r.W(e.resumeToken));break;case 4:this.ft(n)&&(this.dt(n),r.W(e.resumeToken));break;default:C()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.st.forEach((r,s)=>{this.ft(s)&&n(s)})}_t(e){const n=e.targetId,r=e.$.count,s=this.wt(n);if(s){const i=s.target;if(Ws(i))if(r===0){const o=new E(i.path);this.ct(n,o,te.newNoDocument(o,I.min()))}else B(r===1);else this.gt(n)!==r&&(this.dt(n),this.ot=this.ot.add(n))}}yt(e){const n=new Map;this.st.forEach((i,o)=>{const a=this.wt(o);if(a){if(i.current&&Ws(a.target)){const u=new E(a.target.path);this.it.get(u)!==null||this.It(o,u)||this.ct(o,u,te.newNoDocument(u,e))}i.j&&(n.set(o,i.H()),i.J())}});let r=L();this.rt.forEach((i,o)=>{let a=!0;o.forEachWhile(u=>{const c=this.wt(u);return!c||c.purpose===2||(a=!1,!1)}),a&&(r=r.add(i))}),this.it.forEach((i,o)=>o.setReadTime(e));const s=new zr(e,n,this.ot,this.it,r);return this.it=Je(),this.rt=Ia(),this.ot=new Q(O),s}at(e,n){if(!this.ft(e))return;const r=this.It(e,n.key)?2:0;this.lt(e).Y(n.key,r),this.it=this.it.insert(n.key,n),this.rt=this.rt.insert(n.key,this.Tt(n.key).add(e))}ct(e,n,r){if(!this.ft(e))return;const s=this.lt(e);this.It(e,n)?s.Y(n,1):s.X(n),this.rt=this.rt.insert(n,this.Tt(n).delete(e)),r&&(this.it=this.it.insert(n,r))}removeTarget(e){this.st.delete(e)}gt(e){const n=this.lt(e).H();return this.nt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Z(e){this.lt(e).Z()}lt(e){let n=this.st.get(e);return n||(n=new Ca,this.st.set(e,n)),n}Tt(e){let n=this.rt.get(e);return n||(n=new Q(O),this.rt=this.rt.insert(e,n)),n}ft(e){const n=this.wt(e)!==null;return n||w("WatchChangeAggregator","Detected inactive target",e),n}wt(e){const n=this.st.get(e);return n&&n.K?null:this.nt.Et(e)}dt(e){this.st.set(e,new Ca),this.nt.getRemoteKeysForTarget(e).forEach(n=>{this.ct(e,n,null)})}It(e,n){return this.nt.getRemoteKeysForTarget(e).has(n)}}function Ia(){return new Z(E.comparator)}function Aa(){return new Z(E.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pm=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),gm=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class mm{constructor(e,n){this.databaseId=e,this.N=n}}function ym(t,e){return t.N?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function vm(t,e){return t.N?e.toBase64():e.toUint8Array()}function cn(t){return B(!!t),I.fromTimestamp(function(e){const n=De(e);return new ve(n.seconds,n.nanos)}(t))}function wm(t,e){return function(n){return new M(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function Al(t){const e=M.fromString(t);return B($l(e)),e}function gs(t,e){const n=Al(e);if(n.get(1)!==t.databaseId.projectId)throw new T(m.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new T(m.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new E(xl(n))}function ei(t,e){return wm(t.databaseId,e)}function _m(t){const e=Al(t);return e.length===4?M.emptyPath():xl(e)}function xa(t){return new M(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function xl(t){return B(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function bm(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:C()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(u,c){return u.N?(B(c===void 0||typeof c=="string"),J.fromBase64String(c||"")):(B(c===void 0||c instanceof Uint8Array),J.fromUint8Array(c||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const c=u.code===void 0?m.UNKNOWN:Tl(u.code);return new T(c,u.message||"")}(o);n=new Il(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=gs(t,r.document.name),i=cn(r.document.updateTime),o=new _e({mapValue:{fields:r.document.fields}}),a=te.newFoundDocument(s,i,o),u=r.targetIds||[],c=r.removedTargetIds||[];n=new Qn(u,c,a.key,a)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=gs(t,r.document),i=r.readTime?cn(r.readTime):I.min(),o=te.newNoDocument(s,i),a=r.removedTargetIds||[];n=new Qn([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=gs(t,r.document),i=r.removedTargetIds||[];n=new Qn([],i,s,null)}else{if(!("filter"in e))return C();{e.filter;const r=e.filter;r.targetId;const s=r.count||0,i=new um(s),o=r.targetId;n=new Cl(o,i)}}return n}function Em(t,e){return{documents:[ei(t,e.path)]}}function Tm(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=ei(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=ei(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(u){if(u.length===0)return;const c=u.map(l=>function(h){if(h.op==="=="){if(ga(h.value))return{unaryFilter:{field:it(h.field),op:"IS_NAN"}};if(pa(h.value))return{unaryFilter:{field:it(h.field),op:"IS_NULL"}}}else if(h.op==="!="){if(ga(h.value))return{unaryFilter:{field:it(h.field),op:"IS_NOT_NAN"}};if(pa(h.value))return{unaryFilter:{field:it(h.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:it(h.field),op:Am(h.op),value:h.value}}}(l));return c.length===1?c[0]:{compositeFilter:{op:"AND",filters:c}}}(e.filters);s&&(n.structuredQuery.where=s);const i=function(u){if(u.length!==0)return u.map(c=>function(l){return{field:it(l.field),direction:Im(l.dir)}}(c))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(u,c){return u.N||At(c)?c:{value:c}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),n}function Sm(t){let e=_m(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){B(r===1);const l=n.from[0];l.allDescendants?s=l.collectionId:e=e.child(l.collectionId)}let i=[];n.where&&(i=Dl(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(l=>function(h){return new Gt(ut(h.field),function(f){switch(f){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(l)));let a=null;n.limit&&(a=function(l){let h;return h=typeof l=="object"?l.value:l,At(h)?null:h}(n.limit));let u=null;n.startAt&&(u=function(l){const h=!!l.before,f=l.values||[];return new pr(f,h)}(n.startAt));let c=null;return n.endAt&&(c=function(l){const h=!l.before,f=l.values||[];return new pr(f,h)}(n.endAt)),Wg(e,s,o,i,a,"F",u,c)}function Cm(t,e){const n=function(r,s){switch(s){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return C()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function Dl(t){return t?t.unaryFilter!==void 0?[Dm(t)]:t.fieldFilter!==void 0?[xm(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>Dl(e)).reduce((e,n)=>e.concat(n)):C():[]}function Im(t){return pm[t]}function Am(t){return gm[t]}function it(t){return{fieldPath:t.canonicalString()}}function ut(t){return ye.fromServerFormat(t.fieldPath)}function xm(t){return ue.create(ut(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return C()}}(t.fieldFilter.op),t.fieldFilter.value)}function Dm(t){switch(t.unaryFilter.op){case"IS_NAN":const e=ut(t.unaryFilter.field);return ue.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=ut(t.unaryFilter.field);return ue.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=ut(t.unaryFilter.field);return ue.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=ut(t.unaryFilter.field);return ue.create(s,"!=",{nullValue:"NULL_VALUE"});default:return C()}}function $l(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $m="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class km{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&C(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new g((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof g?n:g.resolve(n)}catch(n){return g.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):g.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):g.reject(n)}static resolve(e){return new g((n,r)=>{n(e)})}static reject(e){return new g((n,r)=>{r(e)})}static waitFor(e){return new g((n,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},u=>r(u))}),o=!0,i===s&&n()})}static or(e){let n=g.resolve(!1);for(const r of e)n=n.next(s=>s?g.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}}function Sn(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Om{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&am(i,e,r[s])}}applyToLocalView(e){for(const n of this.baseMutations)n.key.isEqual(e.key)&&Js(n,e,this.localWriteTime);for(const n of this.mutations)n.key.isEqual(e.key)&&Js(n,e,this.localWriteTime)}applyToLocalDocumentSet(e){this.mutations.forEach(n=>{const r=e.get(n.key),s=r;this.applyToLocalView(s),r.isValidDocument()||s.convertToNoDocument(I.min())})}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),L())}isEqual(e){return this.batchId===e.batchId&&rn(this.mutations,e.mutations,(n,r)=>_a(n,r))&&rn(this.baseMutations,e.baseMutations,(n,r)=>_a(n,r))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fm{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(e,n,r,s,i=I.min(),o=I.min(),a=J.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new He(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new He(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new He(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rm{constructor(e){this.Jt=e}}function Nm(t){const e=Sm({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Jg(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pm{constructor(){this.qe=new Lm}addToCollectionParentIndex(e,n){return this.qe.add(n),g.resolve()}getCollectionParents(e,n){return g.resolve(this.qe.getEntries(n))}addFieldIndex(e,n){return g.resolve()}deleteFieldIndex(e,n){return g.resolve()}getDocumentsMatchingTarget(e,n){return g.resolve(null)}getFieldIndex(e,n){return g.resolve(null)}getFieldIndexes(e,n){return g.resolve([])}getNextCollectionGroupToUpdate(e){return g.resolve(null)}updateCollectionGroup(e,n,r){return g.resolve()}updateIndexEntries(e,n){return g.resolve()}}class Lm{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new Q(M.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Q(M.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(e){this.wn=e}next(){return this.wn+=2,this.wn}static mn(){return new wt(0)}static gn(){return new wt(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ro(t){if(t.code!==m.FAILED_PRECONDITION||t.message!==$m)throw t;w("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mm{constructor(){this.changes=new xt(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,te.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?g.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jm{constructor(e,n,r){this.fs=e,this.$s=n,this.indexManager=r}Bs(e,n){return this.$s.getAllMutationBatchesAffectingDocumentKey(e,n).next(r=>this.Ls(e,n,r))}Ls(e,n,r){return this.fs.getEntry(e,n).next(s=>{for(const i of r)i.applyToLocalView(s);return s})}Us(e,n){e.forEach((r,s)=>{for(const i of n)i.applyToLocalView(s)})}qs(e,n){return this.fs.getEntries(e,n).next(r=>this.Gs(e,r).next(()=>r))}Gs(e,n){return this.$s.getAllMutationBatchesAffectingDocumentKeys(e,n).next(r=>this.Us(n,r))}Ks(e,n,r){return function(s){return E.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(n)?this.Qs(e,n.path):Qg(n)?this.js(e,n,r):this.Ws(e,n,r)}Qs(e,n){return this.Bs(e,new E(n)).next(r=>{let s=Zs();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}js(e,n,r){const s=n.collectionGroup;let i=Zs();return this.indexManager.getCollectionParents(e,s).next(o=>g.forEach(o,a=>{const u=function(c,l){return new Br(l,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt)}(n,a.child(s));return this.Ws(e,u,r).next(c=>{c.forEach((l,h)=>{i=i.insert(l,h)})})}).next(()=>i))}Ws(e,n,r){let s;return this.fs.getAllFromCollection(e,n.path,r).next(i=>(s=i,this.$s.getAllMutationBatchesAffectingQuery(e,n))).next(i=>{for(const o of i)for(const a of o.mutations){const u=a.key;let c=s.get(u);c==null&&(c=te.newInvalidDocument(u),s=s.insert(u,c)),Js(a,c,o.localWriteTime),c.isFoundDocument()||(s=s.remove(u))}}).next(()=>(s.forEach((i,o)=>{no(n,o)||(s=s.remove(i))}),s))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.zs=r,this.Hs=s}static Js(e,n){let r=L(),s=L();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new so(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Um{Ys(e){this.Xs=e}Ks(e,n,r,s){return function(i){return i.filters.length===0&&i.limit===null&&i.startAt==null&&i.endAt==null&&(i.explicitOrderBy.length===0||i.explicitOrderBy.length===1&&i.explicitOrderBy[0].field.isKeyField())}(n)||r.isEqual(I.min())?this.Zs(e,n):this.Xs.qs(e,s).next(i=>{const o=this.ti(n,i);return(Xn(n)||gr(n))&&this.ei(n.limitType,o,s,r)?this.Zs(e,n):(la()<=k.DEBUG&&w("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Xs(n)),this.Xs.Ks(e,n,Ng(r,-1)).next(a=>(o.forEach(u=>{a=a.insert(u.key,u)}),a)))})}ti(e,n){let r=new Q(gl(e));return n.forEach((s,i)=>{no(e,i)&&(r=r.add(i))}),r}ei(e,n,r,s){if(r.size!==n.size)return!0;const i=e==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Zs(e,n){return la()<=k.DEBUG&&w("QueryEngine","Using full collection scan to execute query:",Xs(n)),this.Xs.Ks(e,n,vt.min())}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vm{constructor(e,n,r,s){this.persistence=e,this.ni=n,this.M=s,this.si=new Z(O),this.ii=new xt(i=>eo(i),to),this.ri=new Map,this.oi=e.getRemoteDocumentCache(),this.ls=e.getTargetCache(),this.ds=e.getBundleCache(),this.ui(r)}ui(e){this.indexManager=this.persistence.getIndexManager(e),this.$s=this.persistence.getMutationQueue(e,this.indexManager),this.ai=new jm(this.oi,this.$s,this.indexManager),this.oi.setIndexManager(this.indexManager),this.ni.Ys(this.ai)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.si))}}function Bm(t,e,n,r){return new Vm(t,e,n,r)}async function kl(t,e){const n=D(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.$s.getAllMutationBatches(r).next(i=>(s=i,n.ui(e),n.$s.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let u=L();for(const c of s){o.push(c.batchId);for(const l of c.mutations)u=u.add(l.key)}for(const c of i){a.push(c.batchId);for(const l of c.mutations)u=u.add(l.key)}return n.ai.qs(r,u).next(c=>({ci:c,removedBatchIds:o,addedBatchIds:a}))})})}function Ol(t){const e=D(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.ls.getLastRemoteSnapshotVersion(n))}function qm(t,e){const n=D(t),r=e.snapshotVersion;let s=n.si;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.oi.newChangeBuffer({trackRemovals:!0});s=n.si;const a=[];e.targetChanges.forEach((c,l)=>{const h=s.get(l);if(!h)return;a.push(n.ls.removeMatchingKeys(i,c.removedDocuments,l).next(()=>n.ls.addMatchingKeys(i,c.addedDocuments,l)));let f=h.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.has(l)?f=f.withResumeToken(J.EMPTY_BYTE_STRING,I.min()).withLastLimboFreeSnapshotVersion(I.min()):c.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(c.resumeToken,r)),s=s.insert(l,f),function(d,p,v){return d.resumeToken.approximateByteSize()===0||p.snapshotVersion.toMicroseconds()-d.snapshotVersion.toMicroseconds()>=3e8?!0:v.addedDocuments.size+v.modifiedDocuments.size+v.removedDocuments.size>0}(h,f,c)&&a.push(n.ls.updateTargetData(i,f))});let u=Je();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,c))}),a.push(Hm(i,o,e.documentUpdates).next(c=>{u=c})),!r.isEqual(I.min())){const c=n.ls.getLastRemoteSnapshotVersion(i).next(l=>n.ls.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(c)}return g.waitFor(a).next(()=>o.apply(i)).next(()=>n.ai.Gs(i,u)).next(()=>u)}).then(i=>(n.si=s,i))}function Hm(t,e,n){let r=L();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let i=Je();return n.forEach((o,a)=>{const u=s.get(o);a.isNoDocument()&&a.version.isEqual(I.min())?(e.removeEntry(o,a.readTime),i=i.insert(o,a)):!u.isValidDocument()||a.version.compareTo(u.version)>0||a.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(a),i=i.insert(o,a)):w("LocalStore","Ignoring outdated watch update for ",o,". Current version:",u.version," Watch version:",a.version)}),i})}function zm(t,e){const n=D(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.ls.getTargetData(r,e).next(i=>i?(s=i,g.resolve(s)):n.ls.allocateTargetId(r).next(o=>(s=new He(e,o,0,r.currentSequenceNumber),n.ls.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.si.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.si=n.si.insert(r.targetId,r),n.ii.set(e,r.targetId)),r})}async function ti(t,e,n){const r=D(t),s=r.si.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Sn(o))throw o;w("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.si=r.si.remove(e),r.ii.delete(s.target)}function Da(t,e,n){const r=D(t);let s=I.min(),i=L();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,u,c){const l=D(a),h=l.ii.get(c);return h!==void 0?g.resolve(l.si.get(h)):l.ls.getTargetData(u,c)}(r,o,Qe(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.ls.getMatchingKeysForTargetId(o,a.targetId).next(u=>{i=u})}).next(()=>r.ni.Ks(o,e,n?s:I.min(),n?i:L())).next(a=>(Km(r,Zg(e),a),{documents:a,hi:i})))}function Km(t,e,n){let r=I.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.ri.set(e,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gm{constructor(e){this.M=e,this._i=new Map,this.wi=new Map}getBundleMetadata(e,n){return g.resolve(this._i.get(n))}saveBundleMetadata(e,n){var r;return this._i.set(n.id,{id:(r=n).id,version:r.version,createTime:cn(r.createTime)}),g.resolve()}getNamedQuery(e,n){return g.resolve(this.wi.get(n))}saveNamedQuery(e,n){return this.wi.set(n.name,function(r){return{name:r.name,query:Nm(r.bundledQuery),readTime:cn(r.readTime)}}(n)),g.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wm{constructor(){this.overlays=new Z(E.comparator),this.mi=new Map}getOverlay(e,n){return g.resolve(this.overlays.get(n))}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.Xt(e,n,i)}),g.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.mi.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.mi.delete(r)),g.resolve()}getOverlaysForCollection(e,n,r){const s=ps(),i=n.length+1,o=new E(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return g.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Z((c,l)=>c-l);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let l=i.get(c.largestBatchId);l===null&&(l=ps(),i=i.insert(c.largestBatchId,l)),l.set(c.getKey(),c)}}const a=ps(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,l)=>a.set(c,l)),!(a.size()>=s)););return g.resolve(a)}Xt(e,n,r){if(r===null)return;const s=this.overlays.get(r.key);if(s!==null){const o=this.mi.get(s.largestBatchId).delete(r.key);this.mi.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Fm(n,r));let i=this.mi.get(n);i===void 0&&(i=L(),this.mi.set(n,i)),this.mi.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class io{constructor(){this.gi=new Q(z.yi),this.pi=new Q(z.Ii)}isEmpty(){return this.gi.isEmpty()}addReference(e,n){const r=new z(e,n);this.gi=this.gi.add(r),this.pi=this.pi.add(r)}Ti(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Ei(new z(e,n))}Ai(e,n){e.forEach(r=>this.removeReference(r,n))}Ri(e){const n=new E(new M([])),r=new z(n,e),s=new z(n,e+1),i=[];return this.pi.forEachInRange([r,s],o=>{this.Ei(o),i.push(o.key)}),i}bi(){this.gi.forEach(e=>this.Ei(e))}Ei(e){this.gi=this.gi.delete(e),this.pi=this.pi.delete(e)}Pi(e){const n=new E(new M([])),r=new z(n,e),s=new z(n,e+1);let i=L();return this.pi.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new z(e,0),r=this.gi.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class z{constructor(e,n){this.key=e,this.Vi=n}static yi(e,n){return E.comparator(e.key,n.key)||O(e.Vi,n.Vi)}static Ii(e,n){return O(e.Vi,n.Vi)||E.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xm{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.$s=[],this.vi=1,this.Si=new Q(z.yi)}checkEmpty(e){return g.resolve(this.$s.length===0)}addMutationBatch(e,n,r,s){const i=this.vi;this.vi++,this.$s.length>0&&this.$s[this.$s.length-1];const o=new Om(i,n,r,s);this.$s.push(o);for(const a of s)this.Si=this.Si.add(new z(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return g.resolve(o)}lookupMutationBatch(e,n){return g.resolve(this.Di(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Ci(r),i=s<0?0:s;return g.resolve(this.$s.length>i?this.$s[i]:null)}getHighestUnacknowledgedBatchId(){return g.resolve(this.$s.length===0?-1:this.vi-1)}getAllMutationBatches(e){return g.resolve(this.$s.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new z(n,0),s=new z(n,Number.POSITIVE_INFINITY),i=[];return this.Si.forEachInRange([r,s],o=>{const a=this.Di(o.Vi);i.push(a)}),g.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Q(O);return n.forEach(s=>{const i=new z(s,0),o=new z(s,Number.POSITIVE_INFINITY);this.Si.forEachInRange([i,o],a=>{r=r.add(a.Vi)})}),g.resolve(this.xi(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;E.isDocumentKey(i)||(i=i.child(""));const o=new z(new E(i),0);let a=new Q(O);return this.Si.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===s&&(a=a.add(u.Vi)),!0)},o),g.resolve(this.xi(a))}xi(e){const n=[];return e.forEach(r=>{const s=this.Di(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){B(this.Ni(n.batchId,"removed")===0),this.$s.shift();let r=this.Si;return g.forEach(n.mutations,s=>{const i=new z(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Si=r})}dn(e){}containsKey(e,n){const r=new z(n,0),s=this.Si.firstAfterOrEqual(r);return g.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.$s.length,g.resolve()}Ni(e,n){return this.Ci(e)}Ci(e){return this.$s.length===0?0:e-this.$s[0].batchId}Di(e){const n=this.Ci(e);return n<0||n>=this.$s.length?null:this.$s[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ym{constructor(e){this.ki=e,this.docs=new Z(E.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.ki(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return g.resolve(r?r.document.mutableCopy():te.newInvalidDocument(n))}getEntries(e,n){let r=Je();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():te.newInvalidDocument(s))}),g.resolve(r)}getAllFromCollection(e,n,r){let s=Je();const i=new E(n.child("")),o=this.docs.getIteratorFrom(i);for(;o.hasNext();){const{key:a,value:{document:u}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||Lg(Pg(u),r)<=0||(s=s.insert(u.key,u.mutableCopy()))}return g.resolve(s)}getAllFromCollectionGroup(e,n,r,s){C()}Mi(e,n){return g.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new Qm(this)}getSize(e){return g.resolve(this.size)}}class Qm extends Mm{constructor(e){super(),this.qn=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.qn.addEntry(e,s)):this.qn.removeEntry(r)}),g.waitFor(n)}getFromCache(e,n){return this.qn.getEntry(e,n)}getAllFromCache(e,n){return this.qn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jm{constructor(e){this.persistence=e,this.Oi=new xt(n=>eo(n),to),this.lastRemoteSnapshotVersion=I.min(),this.highestTargetId=0,this.Fi=0,this.$i=new io,this.targetCount=0,this.Bi=wt.mn()}forEachTarget(e,n){return this.Oi.forEach((r,s)=>n(s)),g.resolve()}getLastRemoteSnapshotVersion(e){return g.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return g.resolve(this.Fi)}allocateTargetId(e){return this.highestTargetId=this.Bi.next(),g.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Fi&&(this.Fi=n),g.resolve()}In(e){this.Oi.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Bi=new wt(n),this.highestTargetId=n),e.sequenceNumber>this.Fi&&(this.Fi=e.sequenceNumber)}addTargetData(e,n){return this.In(n),this.targetCount+=1,g.resolve()}updateTargetData(e,n){return this.In(n),g.resolve()}removeTargetData(e,n){return this.Oi.delete(n.target),this.$i.Ri(n.targetId),this.targetCount-=1,g.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Oi.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Oi.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),g.waitFor(i).next(()=>s)}getTargetCount(e){return g.resolve(this.targetCount)}getTargetData(e,n){const r=this.Oi.get(n)||null;return g.resolve(r)}addMatchingKeys(e,n,r){return this.$i.Ti(n,r),g.resolve()}removeMatchingKeys(e,n,r){this.$i.Ai(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),g.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.$i.Ri(n),g.resolve()}getMatchingKeysForTargetId(e,n){const r=this.$i.Pi(n);return g.resolve(r)}containsKey(e,n){return g.resolve(this.$i.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zm{constructor(e,n){this.Li={},this.overlays={},this.ts=new Ji(0),this.es=!1,this.es=!0,this.referenceDelegate=e(this),this.ls=new Jm(this),this.indexManager=new Pm,this.fs=function(r){return new Ym(r)}(r=>this.referenceDelegate.Ui(r)),this.M=new Rm(n),this.ds=new Gm(this.M)}start(){return Promise.resolve()}shutdown(){return this.es=!1,Promise.resolve()}get started(){return this.es}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Wm,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Li[e.toKey()];return r||(r=new Xm(n,this.referenceDelegate),this.Li[e.toKey()]=r),r}getTargetCache(){return this.ls}getRemoteDocumentCache(){return this.fs}getBundleCache(){return this.ds}runTransaction(e,n,r){w("MemoryPersistence","Starting transaction:",e);const s=new ey(this.ts.next());return this.referenceDelegate.qi(),r(s).next(i=>this.referenceDelegate.Gi(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ki(e,n){return g.or(Object.values(this.Li).map(r=>()=>r.containsKey(e,n)))}}class ey extends km{constructor(e){super(),this.currentSequenceNumber=e}}class oo{constructor(e){this.persistence=e,this.Qi=new io,this.ji=null}static Wi(e){return new oo(e)}get zi(){if(this.ji)return this.ji;throw C()}addReference(e,n,r){return this.Qi.addReference(r,n),this.zi.delete(r.toString()),g.resolve()}removeReference(e,n,r){return this.Qi.removeReference(r,n),this.zi.add(r.toString()),g.resolve()}markPotentiallyOrphaned(e,n){return this.zi.add(n.toString()),g.resolve()}removeTarget(e,n){this.Qi.Ri(n.targetId).forEach(s=>this.zi.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.zi.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}qi(){this.ji=new Set}Gi(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return g.forEach(this.zi,r=>{const s=E.fromPath(r);return this.Hi(e,s).next(i=>{i||n.removeEntry(s,I.min())})}).next(()=>(this.ji=null,n.apply(e)))}updateLimboDocument(e,n){return this.Hi(e,n).next(r=>{r?this.zi.delete(n.toString()):this.zi.add(n.toString())})}Ui(e){return 0}Hi(e,n){return g.or([()=>g.resolve(this.Qi.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ki(e,n)])}}class $a{constructor(){this.activeTargetIds=Sl()}Xi(e){this.activeTargetIds=this.activeTargetIds.add(e)}Zi(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Yi(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class ty{constructor(){this.Fr=new $a,this.$r={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Fr.Xi(e),this.$r[e]||"not-current"}updateQueryState(e,n,r){this.$r[e]=n}removeLocalQueryTarget(e){this.Fr.Zi(e)}isLocalQueryTarget(e){return this.Fr.activeTargetIds.has(e)}clearQueryState(e){delete this.$r[e]}getAllActiveQueryTargets(){return this.Fr.activeTargetIds}isActiveQueryTarget(e){return this.Fr.activeTargetIds.has(e)}start(){return this.Fr=new $a,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ny{Br(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ka{constructor(){this.Lr=()=>this.Ur(),this.qr=()=>this.Gr(),this.Kr=[],this.Qr()}Br(e){this.Kr.push(e)}shutdown(){window.removeEventListener("online",this.Lr),window.removeEventListener("offline",this.qr)}Qr(){window.addEventListener("online",this.Lr),window.addEventListener("offline",this.qr)}Ur(){w("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Kr)e(0)}Gr(){w("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Kr)e(1)}static vt(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ry={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sy{constructor(e){this.jr=e.jr,this.Wr=e.Wr}zr(e){this.Hr=e}Jr(e){this.Yr=e}onMessage(e){this.Xr=e}close(){this.Wr()}send(e){this.jr(e)}Zr(){this.Hr()}eo(e){this.Yr(e)}no(e){this.Xr(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iy extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.so=n+"://"+e.host,this.io="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}ro(e,n,r,s,i){const o=this.oo(e,n);w("RestConnection","Sending: ",o,r);const a={};return this.uo(a,s,i),this.ao(e,o,a,r).then(u=>(w("RestConnection","Received: ",u),u),u=>{throw ha("RestConnection",`${e} failed with error: `,u,"url: ",o,"request:",r),u})}co(e,n,r,s,i){return this.ro(e,n,r,s,i)}uo(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+It,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}oo(e,n){const r=ry[e];return`${this.so}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}ao(e,n,r,s){return new Promise((i,o)=>{const a=new _g;a.listenOnce(yg.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case fs.NO_ERROR:const c=a.getResponseJson();w("Connection","XHR received:",JSON.stringify(c)),i(c);break;case fs.TIMEOUT:w("Connection",'RPC "'+e+'" timed out'),o(new T(m.DEADLINE_EXCEEDED,"Request time out"));break;case fs.HTTP_ERROR:const l=a.getStatus();if(w("Connection",'RPC "'+e+'" failed with status:',l,"response text:",a.getResponseText()),l>0){const h=a.getResponseJson().error;if(h&&h.status&&h.message){const f=function(d){const p=d.toLowerCase().replace(/_/g,"-");return Object.values(m).indexOf(p)>=0?p:m.UNKNOWN}(h.status);o(new T(f,h.message))}else o(new T(m.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new T(m.UNAVAILABLE,"Connection failed."));break;default:C()}}finally{w("Connection",'RPC "'+e+'" completed.')}});const u=JSON.stringify(s);a.send(n,"POST",u,r,15)})}ho(e,n,r){const s=[this.so,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=gg(),o=mg(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new wg({})),this.uo(a.initMessageHeaders,n,r),ud()||ld()||hd()||fd()||dd()||cd()||(a.httpHeadersOverwriteParam="$httpHeaders");const u=s.join("");w("Connection","Creating WebChannel: "+u,a);const c=i.createWebChannel(u,a);let l=!1,h=!1;const f=new sy({jr:p=>{h?w("Connection","Not sending because WebChannel is closed:",p):(l||(w("Connection","Opening WebChannel transport."),c.open(),l=!0),w("Connection","WebChannel sending:",p),c.send(p))},Wr:()=>c.close()}),d=(p,v,_)=>{p.listen(v,x=>{try{_(x)}catch(F){setTimeout(()=>{throw F},0)}})};return d(c,Ln.EventType.OPEN,()=>{h||w("Connection","WebChannel transport opened.")}),d(c,Ln.EventType.CLOSE,()=>{h||(h=!0,w("Connection","WebChannel transport closed"),f.eo())}),d(c,Ln.EventType.ERROR,p=>{h||(h=!0,ha("Connection","WebChannel transport errored:",p),f.eo(new T(m.UNAVAILABLE,"The operation could not be completed")))}),d(c,Ln.EventType.MESSAGE,p=>{var v;if(!h){const _=p.data[0];B(!!_);const x=_,F=x.error||((v=x[0])===null||v===void 0?void 0:v.error);if(F){w("Connection","WebChannel received error:",F);const N=F.status;let $=function(b){const j=U[b];if(j!==void 0)return Tl(j)}(N),H=F.message;$===void 0&&($=m.INTERNAL,H="Unknown error status: "+N+" with message "+F.message),h=!0,f.eo(new T($,H)),c.close()}else w("Connection","WebChannel received:",_),f.no(_)}}),d(o,vg.STAT_EVENT,p=>{p.stat===ua.PROXY?w("Connection","Detected buffering proxy"):p.stat===ua.NOPROXY&&w("Connection","Detected no buffering proxy")}),setTimeout(()=>{f.Zr()},0),f}}function ms(){return typeof document!="undefined"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fl(t){return new mm(t,!0)}class Rl{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Jn=e,this.timerId=n,this.lo=r,this.fo=s,this._o=i,this.wo=0,this.mo=null,this.yo=Date.now(),this.reset()}reset(){this.wo=0}po(){this.wo=this._o}Io(e){this.cancel();const n=Math.floor(this.wo+this.To()),r=Math.max(0,Date.now()-this.yo),s=Math.max(0,n-r);s>0&&w("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.wo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.mo=this.Jn.enqueueAfterDelay(this.timerId,s,()=>(this.yo=Date.now(),e())),this.wo*=this.fo,this.wo<this.lo&&(this.wo=this.lo),this.wo>this._o&&(this.wo=this._o)}Eo(){this.mo!==null&&(this.mo.skipDelay(),this.mo=null)}cancel(){this.mo!==null&&(this.mo.cancel(),this.mo=null)}To(){return(Math.random()-.5)*this.wo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oy{constructor(e,n,r,s,i,o,a,u){this.Jn=e,this.Ao=r,this.Ro=s,this.bo=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.Po=0,this.Vo=null,this.vo=null,this.stream=null,this.So=new Rl(e,n)}Do(){return this.state===1||this.state===5||this.Co()}Co(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.xo()}async stop(){this.Do()&&await this.close(0)}No(){this.state=0,this.So.reset()}ko(){this.Co()&&this.Vo===null&&(this.Vo=this.Jn.enqueueAfterDelay(this.Ao,6e4,()=>this.Mo()))}Oo(e){this.Fo(),this.stream.send(e)}async Mo(){if(this.Co())return this.close(0)}Fo(){this.Vo&&(this.Vo.cancel(),this.Vo=null)}$o(){this.vo&&(this.vo.cancel(),this.vo=null)}async close(e,n){this.Fo(),this.$o(),this.So.cancel(),this.Po++,e!==4?this.So.reset():n&&n.code===m.RESOURCE_EXHAUSTED?(xe(n.toString()),xe("Using maximum backoff delay to prevent overloading the backend."),this.So.po()):n&&n.code===m.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Bo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Jr(n)}Bo(){}auth(){this.state=1;const e=this.Lo(this.Po),n=this.Po;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Po===n&&this.Uo(r,s)},r=>{e(()=>{const s=new T(m.UNKNOWN,"Fetching auth token failed: "+r.message);return this.qo(s)})})}Uo(e,n){const r=this.Lo(this.Po);this.stream=this.Go(e,n),this.stream.zr(()=>{r(()=>(this.state=2,this.vo=this.Jn.enqueueAfterDelay(this.Ro,1e4,()=>(this.Co()&&(this.state=3),Promise.resolve())),this.listener.zr()))}),this.stream.Jr(s=>{r(()=>this.qo(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}xo(){this.state=5,this.So.Io(async()=>{this.state=0,this.start()})}qo(e){return w("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Lo(e){return n=>{this.Jn.enqueueAndForget(()=>this.Po===e?n():(w("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class ay extends oy{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.M=i}Go(e,n){return this.bo.ho("Listen",e,n)}onMessage(e){this.So.reset();const n=bm(this.M,e),r=function(s){if(!("targetChange"in s))return I.min();const i=s.targetChange;return i.targetIds&&i.targetIds.length?I.min():i.readTime?cn(i.readTime):I.min()}(e);return this.listener.Ko(n,r)}Qo(e){const n={};n.database=xa(this.M),n.addTarget=function(s,i){let o;const a=i.target;return o=Ws(a)?{documents:Em(s,a)}:{query:Tm(s,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=vm(s,i.resumeToken):i.snapshotVersion.compareTo(I.min())>0&&(o.readTime=ym(s,i.snapshotVersion.toTimestamp())),o}(this.M,e);const r=Cm(this.M,e);r&&(n.labels=r),this.Oo(n)}jo(e){const n={};n.database=xa(this.M),n.removeTarget=e,this.Oo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uy extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.bo=r,this.M=s,this.Zo=!1}tu(){if(this.Zo)throw new T(m.FAILED_PRECONDITION,"The client has already been terminated.")}ro(e,n,r){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.bo.ro(e,n,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===m.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new T(m.UNKNOWN,s.toString())})}co(e,n,r){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.bo.co(e,n,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===m.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new T(m.UNKNOWN,s.toString())})}terminate(){this.Zo=!0}}class cy{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.eu=0,this.nu=null,this.su=!0}iu(){this.eu===0&&(this.ru("Unknown"),this.nu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.nu=null,this.ou("Backend didn't respond within 10 seconds."),this.ru("Offline"),Promise.resolve())))}uu(e){this.state==="Online"?this.ru("Unknown"):(this.eu++,this.eu>=1&&(this.au(),this.ou(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ru("Offline")))}set(e){this.au(),this.eu=0,e==="Online"&&(this.su=!1),this.ru(e)}ru(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ou(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.su?(xe(n),this.su=!1):w("OnlineStateTracker",n)}au(){this.nu!==null&&(this.nu.cancel(),this.nu=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ly{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.cu=[],this.hu=new Map,this.lu=new Set,this.fu=[],this.du=i,this.du.Br(o=>{r.enqueueAndForget(async()=>{In(this)&&(w("RemoteStore","Restarting streams for network reachability change."),await async function(a){const u=D(a);u.lu.add(4),await Cn(u),u._u.set("Unknown"),u.lu.delete(4),await Kr(u)}(this))})}),this._u=new cy(r,s)}}async function Kr(t){if(In(t))for(const e of t.fu)await e(!0)}async function Cn(t){for(const e of t.fu)await e(!1)}function Nl(t,e){const n=D(t);n.hu.has(e.targetId)||(n.hu.set(e.targetId,e),co(n)?uo(n):Dt(n).Co()&&ao(n,e))}function Pl(t,e){const n=D(t),r=Dt(n);n.hu.delete(e),r.Co()&&Ll(n,e),n.hu.size===0&&(r.Co()?r.ko():In(n)&&n._u.set("Unknown"))}function ao(t,e){t.wu.Z(e.targetId),Dt(t).Qo(e)}function Ll(t,e){t.wu.Z(e),Dt(t).jo(e)}function uo(t){t.wu=new dm({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>t.hu.get(e)||null}),Dt(t).start(),t._u.iu()}function co(t){return In(t)&&!Dt(t).Do()&&t.hu.size>0}function In(t){return D(t).lu.size===0}function Ml(t){t.wu=void 0}async function hy(t){t.hu.forEach((e,n)=>{ao(t,e)})}async function fy(t,e){Ml(t),co(t)?(t._u.uu(e),uo(t)):t._u.set("Unknown")}async function dy(t,e,n){if(t._u.set("Online"),e instanceof Il&&e.state===2&&e.cause)try{await async function(r,s){const i=s.cause;for(const o of s.targetIds)r.hu.has(o)&&(await r.remoteSyncer.rejectListen(o,i),r.hu.delete(o),r.wu.removeTarget(o))}(t,e)}catch(r){w("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Oa(t,r)}else if(e instanceof Qn?t.wu.ut(e):e instanceof Cl?t.wu._t(e):t.wu.ht(e),!n.isEqual(I.min()))try{const r=await Ol(t.localStore);n.compareTo(r)>=0&&await function(s,i){const o=s.wu.yt(i);return o.targetChanges.forEach((a,u)=>{if(a.resumeToken.approximateByteSize()>0){const c=s.hu.get(u);c&&s.hu.set(u,c.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const u=s.hu.get(a);if(!u)return;s.hu.set(a,u.withResumeToken(J.EMPTY_BYTE_STRING,u.snapshotVersion)),Ll(s,a);const c=new He(u.target,a,1,u.sequenceNumber);ao(s,c)}),s.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){w("RemoteStore","Failed to raise snapshot:",r),await Oa(t,r)}}async function Oa(t,e,n){if(!Sn(e))throw e;t.lu.add(1),await Cn(t),t._u.set("Offline"),n||(n=()=>Ol(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{w("RemoteStore","Retrying IndexedDB access"),await n(),t.lu.delete(1),await Kr(t)})}async function Fa(t,e){const n=D(t);n.asyncQueue.verifyOperationInProgress(),w("RemoteStore","RemoteStore received new credentials");const r=In(n);n.lu.add(3),await Cn(n),r&&n._u.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.lu.delete(3),await Kr(n)}async function py(t,e){const n=D(t);e?(n.lu.delete(2),await Kr(n)):e||(n.lu.add(2),await Cn(n),n._u.set("Unknown"))}function Dt(t){return t.mu||(t.mu=function(e,n,r){const s=D(e);return s.tu(),new ay(n,s.bo,s.authCredentials,s.appCheckCredentials,s.M,r)}(t.datastore,t.asyncQueue,{zr:hy.bind(null,t),Jr:fy.bind(null,t),Ko:dy.bind(null,t)}),t.fu.push(async e=>{e?(t.mu.No(),co(t)?uo(t):t._u.set("Unknown")):(await t.mu.stop(),Ml(t))})),t.mu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lo{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new qe,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new lo(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new T(m.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function jl(t,e){if(xe("AsyncQueue",`${e}: ${t}`),Sn(t))return new T(m.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(e){this.comparator=e?(n,r)=>e(n,r)||E.comparator(n.key,r.key):(n,r)=>E.comparator(n.key,r.key),this.keyedMap=Zs(),this.sortedSet=new Z(this.comparator)}static emptySet(e){return new ht(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ht)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new ht;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ra{constructor(){this.yu=new Z(E.comparator)}track(e){const n=e.doc.key,r=this.yu.get(n);r?e.type!==0&&r.type===3?this.yu=this.yu.insert(n,e):e.type===3&&r.type!==1?this.yu=this.yu.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.yu=this.yu.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.yu=this.yu.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.yu=this.yu.remove(n):e.type===1&&r.type===2?this.yu=this.yu.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.yu=this.yu.insert(n,{type:2,doc:e.doc}):C():this.yu=this.yu.insert(n,e)}pu(){const e=[];return this.yu.inorderTraversal((n,r)=>{e.push(r)}),e}}class _t{constructor(e,n,r,s,i,o,a,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u}static fromInitialDocuments(e,n,r,s){const i=[];return n.forEach(o=>{i.push({type:0,doc:o})}),new _t(e,n,ht.emptySet(n),i,r,s,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&qr(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gy{constructor(){this.Iu=void 0,this.listeners=[]}}class my{constructor(){this.queries=new xt(e=>pl(e),qr),this.onlineState="Unknown",this.Tu=new Set}}async function yy(t,e){const n=D(t),r=e.query;let s=!1,i=n.queries.get(r);if(i||(s=!0,i=new gy),s)try{i.Iu=await n.onListen(r)}catch(o){const a=jl(o,`Initialization of query '${Xs(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,i),i.listeners.push(e),e.Eu(n.onlineState),i.Iu&&e.Au(i.Iu)&&ho(n)}async function vy(t,e){const n=D(t),r=e.query;let s=!1;const i=n.queries.get(r);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),s=i.listeners.length===0)}if(s)return n.queries.delete(r),n.onUnlisten(r)}function wy(t,e){const n=D(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.Au(s)&&(r=!0);o.Iu=s}}r&&ho(n)}function _y(t,e,n){const r=D(t),s=r.queries.get(e);if(s)for(const i of s.listeners)i.onError(n);r.queries.delete(e)}function ho(t){t.Tu.forEach(e=>{e.next()})}class by{constructor(e,n,r){this.query=e,this.Ru=n,this.bu=!1,this.Pu=null,this.onlineState="Unknown",this.options=r||{}}Au(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new _t(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let n=!1;return this.bu?this.Vu(e)&&(this.Ru.next(e),n=!0):this.vu(e,this.onlineState)&&(this.Su(e),n=!0),this.Pu=e,n}onError(e){this.Ru.error(e)}Eu(e){this.onlineState=e;let n=!1;return this.Pu&&!this.bu&&this.vu(this.Pu,e)&&(this.Su(this.Pu),n=!0),n}vu(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Du||!r)&&(!e.docs.isEmpty()||n==="Offline")}Vu(e){if(e.docChanges.length>0)return!0;const n=this.Pu&&this.Pu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Su(e){e=_t.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.bu=!0,this.Ru.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ul{constructor(e){this.key=e}}class Vl{constructor(e){this.key=e}}class Ey{constructor(e,n){this.query=e,this.Fu=n,this.$u=null,this.current=!1,this.Bu=L(),this.mutatedKeys=L(),this.Lu=gl(e),this.Uu=new ht(this.Lu)}get qu(){return this.Fu}Gu(e,n){const r=n?n.Ku:new Ra,s=n?n.Uu:this.Uu;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const u=Xn(this.query)&&s.size===this.query.limit?s.last():null,c=gr(this.query)&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((l,h)=>{const f=s.get(l),d=no(this.query,h)?h:null,p=!!f&&this.mutatedKeys.has(f.key),v=!!d&&(d.hasLocalMutations||this.mutatedKeys.has(d.key)&&d.hasCommittedMutations);let _=!1;f&&d?f.data.isEqual(d.data)?p!==v&&(r.track({type:3,doc:d}),_=!0):this.Qu(f,d)||(r.track({type:2,doc:d}),_=!0,(u&&this.Lu(d,u)>0||c&&this.Lu(d,c)<0)&&(a=!0)):!f&&d?(r.track({type:0,doc:d}),_=!0):f&&!d&&(r.track({type:1,doc:f}),_=!0,(u||c)&&(a=!0)),_&&(d?(o=o.add(d),i=v?i.add(l):i.delete(l)):(o=o.delete(l),i=i.delete(l)))}),Xn(this.query)||gr(this.query))for(;o.size>this.query.limit;){const l=Xn(this.query)?o.last():o.first();o=o.delete(l.key),i=i.delete(l.key),r.track({type:1,doc:l})}return{Uu:o,Ku:r,ei:a,mutatedKeys:i}}Qu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const s=this.Uu;this.Uu=e.Uu,this.mutatedKeys=e.mutatedKeys;const i=e.Ku.pu();i.sort((c,l)=>function(h,f){const d=p=>{switch(p){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return C()}};return d(h)-d(f)}(c.type,l.type)||this.Lu(c.doc,l.doc)),this.ju(r);const o=n?this.Wu():[],a=this.Bu.size===0&&this.current?1:0,u=a!==this.$u;return this.$u=a,i.length!==0||u?{snapshot:new _t(this.query,e.Uu,s,i,e.mutatedKeys,a===0,u,!1),zu:o}:{zu:o}}Eu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Uu:this.Uu,Ku:new Ra,mutatedKeys:this.mutatedKeys,ei:!1},!1)):{zu:[]}}Hu(e){return!this.Fu.has(e)&&!!this.Uu.has(e)&&!this.Uu.get(e).hasLocalMutations}ju(e){e&&(e.addedDocuments.forEach(n=>this.Fu=this.Fu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Fu=this.Fu.delete(n)),this.current=e.current)}Wu(){if(!this.current)return[];const e=this.Bu;this.Bu=L(),this.Uu.forEach(r=>{this.Hu(r.key)&&(this.Bu=this.Bu.add(r.key))});const n=[];return e.forEach(r=>{this.Bu.has(r)||n.push(new Vl(r))}),this.Bu.forEach(r=>{e.has(r)||n.push(new Ul(r))}),n}Ju(e){this.Fu=e.hi,this.Bu=L();const n=this.Gu(e.documents);return this.applyChanges(n,!0)}Yu(){return _t.fromInitialDocuments(this.query,this.Uu,this.mutatedKeys,this.$u===0)}}class Ty{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class Sy{constructor(e){this.key=e,this.Xu=!1}}class Cy{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Zu={},this.ta=new xt(a=>pl(a),qr),this.ea=new Map,this.na=new Set,this.sa=new Z(E.comparator),this.ia=new Map,this.ra=new io,this.oa={},this.ua=new Map,this.aa=wt.gn(),this.onlineState="Unknown",this.ca=void 0}get isPrimaryClient(){return this.ca===!0}}async function Iy(t,e){const n=Fy(t);let r,s;const i=n.ta.get(e);if(i)r=i.targetId,n.sharedClientState.addLocalQueryTarget(r),s=i.view.Yu();else{const o=await zm(n.localStore,Qe(e));n.isPrimaryClient&&Nl(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,s=await Ay(n,e,r,a==="current")}return s}async function Ay(t,e,n,r){t.ha=(l,h,f)=>async function(d,p,v,_){let x=p.view.Gu(v);x.ei&&(x=await Da(d.localStore,p.query,!1).then(({documents:$})=>p.view.Gu($,x)));const F=_&&_.targetChanges.get(p.targetId),N=p.view.applyChanges(x,d.isPrimaryClient,F);return Pa(d,p.targetId,N.zu),N.snapshot}(t,l,h,f);const s=await Da(t.localStore,e,!0),i=new Ey(e,s.hi),o=i.Gu(s.documents),a=Tn.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline"),u=i.applyChanges(o,t.isPrimaryClient,a);Pa(t,n,u.zu);const c=new Ty(e,n,i);return t.ta.set(e,c),t.ea.has(n)?t.ea.get(n).push(e):t.ea.set(n,[e]),u.snapshot}async function xy(t,e){const n=D(t),r=n.ta.get(e),s=n.ea.get(r.targetId);if(s.length>1)return n.ea.set(r.targetId,s.filter(i=>!qr(i,e))),void n.ta.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await ti(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),Pl(n.remoteStore,r.targetId),ni(n,r.targetId)}).catch(ro)):(ni(n,r.targetId),await ti(n.localStore,r.targetId,!0))}async function Bl(t,e){const n=D(t);try{const r=await qm(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.ia.get(i);o&&(B(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.Xu=!0:s.modifiedDocuments.size>0?B(o.Xu):s.removedDocuments.size>0&&(B(o.Xu),o.Xu=!1))}),await Hl(n,r,e)}catch(r){await ro(r)}}function Na(t,e,n){const r=D(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.ta.forEach((i,o)=>{const a=o.view.Eu(e);a.snapshot&&s.push(a.snapshot)}),function(i,o){const a=D(i);a.onlineState=o;let u=!1;a.queries.forEach((c,l)=>{for(const h of l.listeners)h.Eu(o)&&(u=!0)}),u&&ho(a)}(r.eventManager,e),s.length&&r.Zu.Ko(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Dy(t,e,n){const r=D(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.ia.get(e),i=s&&s.key;if(i){let o=new Z(E.comparator);o=o.insert(i,te.newNoDocument(i,I.min()));const a=L().add(i),u=new zr(I.min(),new Map,new Q(O),o,a);await Bl(r,u),r.sa=r.sa.remove(i),r.ia.delete(e),fo(r)}else await ti(r.localStore,e,!1).then(()=>ni(r,e,n)).catch(ro)}function ni(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.ea.get(e))t.ta.delete(r),n&&t.Zu.la(r,n);t.ea.delete(e),t.isPrimaryClient&&t.ra.Ri(e).forEach(r=>{t.ra.containsKey(r)||ql(t,r)})}function ql(t,e){t.na.delete(e.path.canonicalString());const n=t.sa.get(e);n!==null&&(Pl(t.remoteStore,n),t.sa=t.sa.remove(e),t.ia.delete(n),fo(t))}function Pa(t,e,n){for(const r of n)r instanceof Ul?(t.ra.addReference(r.key,e),$y(t,r)):r instanceof Vl?(w("SyncEngine","Document no longer in limbo: "+r.key),t.ra.removeReference(r.key,e),t.ra.containsKey(r.key)||ql(t,r.key)):C()}function $y(t,e){const n=e.key,r=n.path.canonicalString();t.sa.get(n)||t.na.has(r)||(w("SyncEngine","New document in limbo: "+n),t.na.add(r),fo(t))}function fo(t){for(;t.na.size>0&&t.sa.size<t.maxConcurrentLimboResolutions;){const e=t.na.values().next().value;t.na.delete(e);const n=new E(M.fromString(e)),r=t.aa.next();t.ia.set(r,new Sy(n)),t.sa=t.sa.insert(n,r),Nl(t.remoteStore,new He(Qe(dl(n.path)),r,2,Ji.A))}}async function Hl(t,e,n){const r=D(t),s=[],i=[],o=[];r.ta.isEmpty()||(r.ta.forEach((a,u)=>{o.push(r.ha(u,e,n).then(c=>{if(c){r.isPrimaryClient&&r.sharedClientState.updateQueryState(u.targetId,c.fromCache?"not-current":"current"),s.push(c);const l=so.Js(u.targetId,c);i.push(l)}}))}),await Promise.all(o),r.Zu.Ko(s),await async function(a,u){const c=D(a);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",l=>g.forEach(u,h=>g.forEach(h.zs,f=>c.persistence.referenceDelegate.addReference(l,h.targetId,f)).next(()=>g.forEach(h.Hs,f=>c.persistence.referenceDelegate.removeReference(l,h.targetId,f)))))}catch(l){if(!Sn(l))throw l;w("LocalStore","Failed to update sequence numbers: "+l)}for(const l of u){const h=l.targetId;if(!l.fromCache){const f=c.si.get(h),d=f.snapshotVersion,p=f.withLastLimboFreeSnapshotVersion(d);c.si=c.si.insert(h,p)}}}(r.localStore,i))}async function ky(t,e){const n=D(t);if(!n.currentUser.isEqual(e)){w("SyncEngine","User change. New user:",e.toKey());const r=await kl(n.localStore,e);n.currentUser=e,function(s,i){s.ua.forEach(o=>{o.forEach(a=>{a.reject(new T(m.CANCELLED,i))})}),s.ua.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Hl(n,r.ci)}}function Oy(t,e){const n=D(t),r=n.ia.get(e);if(r&&r.Xu)return L().add(r.key);{let s=L();const i=n.ea.get(e);if(!i)return s;for(const o of i){const a=n.ta.get(o);s=s.unionWith(a.view.qu)}return s}}function Fy(t){const e=D(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Bl.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Oy.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Dy.bind(null,e),e.Zu.Ko=wy.bind(null,e.eventManager),e.Zu.la=_y.bind(null,e.eventManager),e}class Ry{constructor(){this.synchronizeTabs=!1}async initialize(e){this.M=Fl(e.databaseInfo.databaseId),this.sharedClientState=this.da(e),this.persistence=this._a(e),await this.persistence.start(),this.gcScheduler=this.wa(e),this.localStore=this.ma(e)}wa(e){return null}ma(e){return Bm(this.persistence,new Um,e.initialUser,this.M)}_a(e){return new Zm(oo.Wi,this.M)}da(e){return new ty}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Ny{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Na(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=ky.bind(null,this.syncEngine),await py(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new my}createDatastore(e){const n=Fl(e.databaseInfo.databaseId),r=(s=e.databaseInfo,new iy(s));var s;return function(i,o,a,u){return new uy(i,o,a,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,s=e.asyncQueue,i=a=>Na(this.syncEngine,a,0),o=ka.vt()?new ka:new ny,new ly(n,r,s,i,o);var n,r,s,i,o}createSyncEngine(e,n){return function(r,s,i,o,a,u,c){const l=new Cy(r,s,i,o,a,u);return c&&(l.ca=!0),l}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=D(e);w("RemoteStore","RemoteStore shutting down."),n.lu.add(5),await Cn(n),n.du.shutdown(),n._u.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Py{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.ya(this.observer.next,e)}error(e){this.observer.error?this.ya(this.observer.error,e):console.error("Uncaught Error in snapshot listener:",e)}pa(){this.muted=!0}ya(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ly{constructor(e,n,r,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=ae.UNAUTHENTICATED,this.clientId=Dg.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{w("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(w("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new T(m.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new qe;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=jl(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function My(t,e){t.asyncQueue.verifyOperationInProgress(),w("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await kl(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function jy(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Uy(t);w("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(s=>Fa(e.remoteStore,s)),t.setAppCheckTokenChangeListener((s,i)=>Fa(e.remoteStore,i)),t.onlineComponents=e}async function Uy(t){return t.offlineComponents||(w("FirestoreClient","Using default OfflineComponentProvider"),await My(t,new Ry)),t.offlineComponents}async function Vy(t){return t.onlineComponents||(w("FirestoreClient","Using default OnlineComponentProvider"),await jy(t,new Ny)),t.onlineComponents}async function By(t){const e=await Vy(t),n=e.eventManager;return n.onListen=Iy.bind(null,e.syncEngine),n.onUnlisten=xy.bind(null,e.syncEngine),n}function qy(t,e,n={}){const r=new qe;return t.asyncQueue.enqueueAndForget(async()=>function(s,i,o,a,u){const c=new Py({next:h=>{i.enqueueAndForget(()=>vy(s,l)),h.fromCache&&a.source==="server"?u.reject(new T(m.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(h)},error:h=>u.reject(h)}),l=new by(o,c,{includeMetadataChanges:!0,Du:!0});return yy(s,l)}(await By(t),t.asyncQueue,e,n,r)),r.promise}const La=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hy(t,e,n){if(!n)throw new T(m.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function zy(t,e,n,r){if(e===!0&&r===!0)throw new T(m.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Ma(t){if(E.isDocumentKey(t))throw new T(m.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Ky(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":C()}function ja(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new T(m.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ky(t);throw new T(m.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ua{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new T(m.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new T(m.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,zy("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zl{constructor(e,n,r){this._authCredentials=n,this._appCheckCredentials=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ua({}),this._settingsFrozen=!1,e instanceof mt?this._databaseId=e:(this._app=e,this._databaseId=function(s){if(!Object.prototype.hasOwnProperty.apply(s.options,["projectId"]))throw new T(m.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new mt(s.options.projectId)}(e))}get app(){if(!this._app)throw new T(m.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new T(m.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ua(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Eg;switch(n.type){case"gapi":const r=n.client;return B(!(typeof r!="object"||r===null||!r.auth||!r.auth.getAuthHeaderValueForFirstParty)),new Cg(r,n.sessionIndex||"0",n.iamToken||null);case"provider":return n.client;default:throw new T(m.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=La.get(e);n&&(w("ComponentProvider","Removing Datastore"),La.delete(e),n.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ft(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new $t(this.firestore,e,this._key)}}class Gr{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Gr(this.firestore,e,this._query)}}class ft extends Gr{constructor(e,n,r){super(e,n,dl(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new $t(this.firestore,null,new E(e))}withConverter(e){return new ft(this.firestore,e,this._path)}}function h$(t,e,...n){if(t=Ar(t),Hy("collection","path",e),t instanceof zl){const r=M.fromString(e,...n);return Ma(r),new ft(t,null,r)}{if(!(t instanceof $t||t instanceof ft))throw new T(m.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(M.fromString(e,...n));return Ma(r),new ft(t.firestore,null,r)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gy{constructor(){this.Na=Promise.resolve(),this.ka=[],this.Ma=!1,this.Oa=[],this.Fa=null,this.$a=!1,this.Ba=!1,this.La=[],this.So=new Rl(this,"async_queue_retry"),this.Ua=()=>{const n=ms();n&&w("AsyncQueue","Visibility state changed to "+n.visibilityState),this.So.Eo()};const e=ms();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Ua)}get isShuttingDown(){return this.Ma}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.qa(),this.Ga(e)}enterRestrictedMode(e){if(!this.Ma){this.Ma=!0,this.Ba=e||!1;const n=ms();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Ua)}}enqueue(e){if(this.qa(),this.Ma)return new Promise(()=>{});const n=new qe;return this.Ga(()=>this.Ma&&this.Ba?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.ka.push(e),this.Ka()))}async Ka(){if(this.ka.length!==0){try{await this.ka[0](),this.ka.shift(),this.So.reset()}catch(e){if(!Sn(e))throw e;w("AsyncQueue","Operation failed with retryable error: "+e)}this.ka.length>0&&this.So.Io(()=>this.Ka())}}Ga(e){const n=this.Na.then(()=>(this.$a=!0,e().catch(r=>{this.Fa=r,this.$a=!1;const s=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(r);throw xe("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.$a=!1,r))));return this.Na=n,n}enqueueAfterDelay(e,n,r){this.qa(),this.La.indexOf(e)>-1&&(n=0);const s=lo.createAndSchedule(this,e,n,r,i=>this.Qa(i));return this.Oa.push(s),s}qa(){this.Fa&&C()}verifyOperationInProgress(){}async ja(){let e;do e=this.Na,await e;while(e!==this.Na)}Wa(e){for(const n of this.Oa)if(n.timerId===e)return!0;return!1}za(e){return this.ja().then(()=>{this.Oa.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Oa)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.ja()})}Ha(e){this.La.push(e)}Qa(e){const n=this.Oa.indexOf(e);this.Oa.splice(n,1)}}class Kl extends zl{constructor(e,n,r){super(e,n,r),this.type="firestore",this._queue=new Gy,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||Gl(this),this._firestoreClient.terminate()}}function f$(t=ac()){return ic(t,"firestore").getImmediate()}function Wy(t){return t._firestoreClient||Gl(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Gl(t){var e;const n=t._freezeSettings(),r=function(s,i,o,a){return new Fg(s,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new Ly(t._authCredentials,t._appCheckCredentials,t._queue,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wl{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new T(m.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ye(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new vr(J.fromBase64String(e))}catch(n){throw new T(m.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new vr(J.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xy{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new T(m.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new T(m.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return O(this._lat,e._lat)||O(this._long,e._long)}}const Yy=new RegExp("[~\\*/\\[\\]]");function Qy(t,e,n){if(e.search(Yy)>=0)throw Va(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Wl(...e.split("."))._internalPath}catch{throw Va(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Va(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(i||o)&&(u+=" (found",i&&(u+=` in field ${r}`),o&&(u+=` in document ${s}`),u+=")"),new T(m.INVALID_ARGUMENT,a+t+u)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xl{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new $t(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Jy(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Yl("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Jy extends Xl{data(){return super.data()}}function Yl(t,e){return typeof e=="string"?Qy(t,e):e instanceof Wl?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Zy extends Xl{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Jn(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Yl("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Jn extends Zy{data(e={}){return super.data(e)}}class ev{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new jn(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Jn(this._firestore,this._userDataWriter,r.key,r,new jn(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new T(m.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,s){if(r._snapshot.oldDocs.isEmpty()){let i=0;return r._snapshot.docChanges.map(o=>({type:"added",doc:new Jn(r._firestore,r._userDataWriter,o.doc.key,o.doc,new jn(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter),oldIndex:-1,newIndex:i++}))}{let i=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>s||o.type!==3).map(o=>{const a=new Jn(r._firestore,r._userDataWriter,o.doc.key,o.doc,new jn(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let u=-1,c=-1;return o.type!==0&&(u=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),c=i.indexOf(o.doc.key)),{type:tv(o.type),doc:a,oldIndex:u,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function tv(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return C()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nv(t){if(gr(t)&&t.explicitOrderBy.length===0)throw new T(m.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rv{convertValue(e,n="none"){switch(Ye(e)){case 0:return null;case 1:return e.booleanValue;case 2:return V(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(gt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw C()}}convertObject(e,n){const r={};return Vr(e.fields,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(e){return new Xy(V(e.latitude),V(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=hl(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(on(e));default:return null}}convertTimestamp(e){const n=De(e);return new ve(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=M.fromString(e);B($l(r));const s=new mt(r.get(1),r.get(3)),i=new E(r.popFirst(5));return s.isEqual(n)||xe(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}class sv extends rv{constructor(e){super(),this.firestore=e}convertBytes(e){return new vr(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new $t(this.firestore,null,n)}}function d$(t){t=ja(t,Gr);const e=ja(t.firestore,Kl),n=Wy(e),r=new sv(e);return nv(t._query),qy(n,t._query).then(s=>new ev(e,r,t,s))}(function(t,e=!0){(function(n){It=n})(oc),Yt(new dt("firestore",(n,{options:r})=>{const s=n.getProvider("app").getImmediate(),i=new Kl(s,new Tg(n.getProvider("auth-internal")),new Ag(n.getProvider("app-check-internal")));return r=Object.assign({useFetchStreams:e},r),i._setSettings(r),i},"PUBLIC")),Ce(ca,"3.4.7",t),Ce(ca,"3.4.7","esm2017")})();var iv="firebase",ov="9.6.10";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ce(iv,ov,"app");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ql="firebasestorage.googleapis.com",Jl="storageBucket",av=2*60*1e3,uv=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G extends dn{constructor(e,n){super(ys(e),`Firebase Storage: ${n} (${ys(e)})`);this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,G.prototype)}_codeEquals(e){return ys(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}function ys(t){return"storage/"+t}function Zl(){const t="An unknown error occurred, please check the error payload for server response.";return new G("unknown",t)}function cv(t){return new G("object-not-found","Object '"+t+"' does not exist.")}function lv(t){return new G("quota-exceeded","Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function hv(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new G("unauthenticated",t)}function fv(){return new G("unauthorized-app","This app does not have permission to access Firebase Storage on this project.")}function dv(t){return new G("unauthorized","User does not have permission to access '"+t+"'.")}function pv(){return new G("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function gv(){return new G("canceled","User canceled the upload/download.")}function mv(t){return new G("invalid-url","Invalid URL '"+t+"'.")}function yv(t){return new G("invalid-default-bucket","Invalid default bucket '"+t+"'.")}function vv(){return new G("no-default-bucket","No default bucket found. Did you set the '"+Jl+"' property when initializing the app?")}function wv(){return new G("no-download-url","The given file does not have any download URLs.")}function ri(t){return new G("invalid-argument",t)}function eh(){return new G("app-deleted","The Firebase app was deleted.")}function _v(t){return new G("invalid-root-operation","The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Mt(t){throw new G("internal-error","Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=ce.makeFromUrl(e,n)}catch{return new ce(e,"")}if(r.path==="")return r;throw yv(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i($){$.path.charAt($.path.length-1)==="/"&&($.path_=$.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+s+o,"i"),u={bucket:1,path:3};function c($){$.path_=decodeURIComponent($.path)}const l="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",d=new RegExp(`^https?://${h}/${l}/b/${s}/o${f}`,"i"),p={bucket:1,path:3},v=n===Ql?"(?:storage.googleapis.com|storage.cloud.google.com)":n,_="([^?#]*)",x=new RegExp(`^https?://${v}/${s}/${_}`,"i"),N=[{regex:a,indices:u,postModify:i},{regex:d,indices:p,postModify:c},{regex:x,indices:{bucket:1,path:2},postModify:c}];for(let $=0;$<N.length;$++){const H=N[$],b=H.regex.exec(e);if(b){const j=b[H.indices.bucket];let de=b[H.indices.path];de||(de=""),r=new ce(j,de),H.postModify(r);break}}if(r==null)throw mv(e);return r}}class bv{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ev(t,e,n){let r=1,s=null,i=null,o=!1,a=0;function u(){return a===2}let c=!1;function l(..._){c||(c=!0,e.apply(null,_))}function h(_){s=setTimeout(()=>{s=null,t(d,u())},_)}function f(){i&&clearTimeout(i)}function d(_,...x){if(c){f();return}if(_){f(),l.call(null,_,...x);return}if(u()||o){f(),l.call(null,_,...x);return}r<64&&(r*=2);let N;a===1?(a=2,N=0):N=(r+Math.random())*1e3,h(N)}let p=!1;function v(_){p||(p=!0,f(),!c&&(s!==null?(_||(a=2),clearTimeout(s),h(0)):_||(a=1)))}return h(0),i=setTimeout(()=>{o=!0,v(!0)},n),v}function Tv(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sv(t){return t!==void 0}function Cv(t){return typeof t=="object"&&!Array.isArray(t)}function th(t){return typeof t=="string"||t instanceof String}function Ba(t,e,n,r){if(r<e)throw ri(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw ri(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nh(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function rh(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ze;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(ze||(ze={}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iv{constructor(e,n,r,s,i,o,a,u,c,l,h){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=u,this.timeout_=c,this.progressCallback_=l,this.connectionFactory_=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((f,d)=>{this.resolve_=f,this.reject_=d,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new Un(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const u=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,c)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===ze.NO_ERROR,u=i.getStatus();if(!a||this.isRetryStatusCode_(u)){const l=i.getErrorCode()===ze.ABORT;r(!1,new Un(!1,null,l));return}const c=this.successCodes_.indexOf(u)!==-1;r(!0,new Un(c,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,a=s.connection;if(s.wasSuccessCode)try{const u=this.callback_(a,a.getResponse());Sv(u)?i(u):i()}catch(u){o(u)}else if(a!==null){const u=Zl();u.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,u)):o(u)}else if(s.canceled){const u=this.appDelete_?eh():gv();o(u)}else{const u=pv();o(u)}};this.canceled_?n(!1,new Un(!1,null,!0)):this.backoffId_=Ev(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&Tv(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}isRetryStatusCode_(e){const n=e>=500&&e<600,s=[408,429].indexOf(e)!==-1,i=this.additionalRetryCodes_.indexOf(e)!==-1;return n||s||i}}class Un{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function Av(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function xv(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e!=null?e:"AppManager")}function Dv(t,e){e&&(t["X-Firebase-GMPID"]=e)}function $v(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function kv(t,e,n,r,s,i){const o=rh(t.urlParams),a=t.url+o,u=Object.assign({},t.headers);return Dv(u,e),Av(u,n),xv(u,i),$v(u,r),new Iv(a,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sh(t){let e;try{e=JSON.parse(t)}catch{return null}return Cv(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ov(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function Fv(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function ih(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rv(t,e){return e}class re{constructor(e,n,r,s){this.server=e,this.local=n||e,this.writable=!!r,this.xform=s||Rv}}let Vn=null;function Nv(t){return!th(t)||t.length<2?t:ih(t)}function Pv(){if(Vn)return Vn;const t=[];t.push(new re("bucket")),t.push(new re("generation")),t.push(new re("metageneration")),t.push(new re("name","fullPath",!0));function e(i,o){return Nv(o)}const n=new re("name");n.xform=e,t.push(n);function r(i,o){return o!==void 0?Number(o):o}const s=new re("size");return s.xform=r,t.push(s),t.push(new re("timeCreated")),t.push(new re("updated")),t.push(new re("md5Hash",null,!0)),t.push(new re("cacheControl",null,!0)),t.push(new re("contentDisposition",null,!0)),t.push(new re("contentEncoding",null,!0)),t.push(new re("contentLanguage",null,!0)),t.push(new re("contentType",null,!0)),t.push(new re("metadata","customMetadata",!0)),Vn=t,Vn}function Lv(t,e){function n(){const r=t.bucket,s=t.fullPath,i=new ce(r,s);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function Mv(t,e,n){const r={};r.type="file";const s=n.length;for(let i=0;i<s;i++){const o=n[i];r[o.local]=o.xform(r,e[o.server])}return Lv(r,t),r}function jv(t,e,n){const r=sh(e);return r===null?null:Mv(t,r,n)}function Uv(t,e,n,r){const s=sh(e);if(s===null||!th(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(c=>{const l=t.bucket,h=t.fullPath,f="/b/"+o(l)+"/o/"+o(h),d=nh(f,n,r),p=rh({alt:"media",token:c});return d+p})[0]}class Vv{constructor(e,n,r,s){this.url=e,this.method=n,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bv(t){if(!t)throw Zl()}function qv(t,e){function n(r,s){const i=jv(t,s,e);return Bv(i!==null),Uv(i,s,t.host,t._protocol)}return n}function Hv(t){function e(n,r){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=fv():s=hv():n.getStatus()===402?s=lv(t.bucket):n.getStatus()===403?s=dv(t.path):s=r,s.serverResponse=r.serverResponse,s}return e}function zv(t){const e=Hv(t);function n(r,s){let i=e(r,s);return r.getStatus()===404&&(i=cv(t.path)),i.serverResponse=s.serverResponse,i}return n}function Kv(t,e,n){const r=e.fullServerUrl(),s=nh(r,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,a=new Vv(s,i,qv(t,n),o);return a.errorHandler=zv(e),a}class Gv{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=ze.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=ze.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=ze.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,s){if(this.sent_)throw Mt("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),s!==void 0)for(const i in s)s.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,s[i].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Mt("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Mt("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Mt("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Mt("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class Wv extends Gv{initXhr(){this.xhr_.responseType="text"}}function Xv(){return new Wv}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e,n){this._service=e,n instanceof ce?this._location=n:this._location=ce.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Ze(e,n)}get root(){const e=new ce(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return ih(this._location.path)}get storage(){return this._service}get parent(){const e=Ov(this._location.path);if(e===null)return null;const n=new ce(this._location.bucket,e);return new Ze(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw _v(e)}}function Yv(t){t._throwIfRoot("getDownloadURL");const e=Kv(t.storage,t._location,Pv());return t.storage.makeRequestWithTokens(e,Xv).then(n=>{if(n===null)throw wv();return n})}function Qv(t,e){const n=Fv(t._location.path,e),r=new ce(t._location.bucket,n);return new Ze(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jv(t){return/^[A-Za-z]+:\/\//.test(t)}function Zv(t,e){return new Ze(t,e)}function oh(t,e){if(t instanceof po){const n=t;if(n._bucket==null)throw vv();const r=new Ze(n,n._bucket);return e!=null?oh(r,e):r}else return e!==void 0?Qv(t,e):t}function e0(t,e){if(e&&Jv(e)){if(t instanceof po)return Zv(t,e);throw ri("To use ref(service, url), the first argument must be a Storage instance.")}else return oh(t,e)}function qa(t,e){const n=e==null?void 0:e[Jl];return n==null?null:ce.makeFromBucketSpec(n,t)}class po{constructor(e,n,r,s,i){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=Ql,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=av,this._maxUploadRetryTime=uv,this._requests=new Set,s!=null?this._bucket=ce.makeFromBucketSpec(s,this._host):this._bucket=qa(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=ce.makeFromBucketSpec(this._url,e):this._bucket=qa(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Ba("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Ba("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Ze(this,e)}_makeRequest(e,n,r,s){if(this._deleted)return new bv(eh());{const i=kv(e,this._appId,r,s,n,this._firebaseVersion);return this._requests.add(i),i.getPromise().then(()=>this._requests.delete(i),()=>this._requests.delete(i)),i}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const Ha="@firebase/storage",za="0.9.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ah="storage";function p$(t){return t=Ar(t),Yv(t)}function g$(t,e){return t=Ar(t),e0(t,e)}function m$(t=ac(),e){return t=Ar(t),ic(t,ah).getImmediate({identifier:e})}function t0(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new po(n,r,s,e,oc)}function n0(){Yt(new dt(ah,t0,"PUBLIC").setMultipleInstances(!0)),Ce(Ha,za,""),Ce(Ha,za,"esm2017")}n0();const Ue=/^[a-z0-9]+(-[a-z0-9]+)*$/,bt=Object.freeze({left:0,top:0,width:16,height:16,rotate:0,vFlip:!1,hFlip:!1});function go(t){return Pt(Pt({},bt),t)}const Wr=(t,e,n,r="")=>{const s=t.split(":");if(t.slice(0,1)==="@"){if(s.length<2||s.length>3)return null;r=s.shift().slice(1)}if(s.length>3||!s.length)return null;if(s.length>1){const a=s.pop(),u=s.pop(),c={provider:s.length>0?s[0]:r,prefix:u,name:a};return e&&!Wt(c)?null:c}const i=s[0],o=i.split("-");if(o.length>1){const a={provider:r,prefix:o.shift(),name:o.join("-")};return e&&!Wt(a)?null:a}if(n&&r===""){const a={provider:r,prefix:"",name:i};return e&&!Wt(a,n)?null:a}return null},Wt=(t,e)=>t?!!((t.provider===""||t.provider.match(Ue))&&(e&&t.prefix===""||t.prefix.match(Ue))&&t.name.match(Ue)):!1;function r0(t,e){const n=Pt({},t);for(const r in bt){const s=r;if(e[s]!==void 0){const i=e[s];if(n[s]===void 0){n[s]=i;continue}switch(s){case"rotate":n[s]=(n[s]+i)%4;break;case"hFlip":case"vFlip":n[s]=i!==n[s];break;default:n[s]=i}}}return n}function Ka(t,e,n=!1){function r(i,o){var a,u,c,l;if(t.icons[i]!==void 0)return Object.assign({},t.icons[i]);if(o>5)return null;if(((a=t.aliases)==null?void 0:a[i])!==void 0){const h=(u=t.aliases)==null?void 0:u[i],f=r(h.parent,o+1);return f&&r0(f,h)}return o===0&&((c=t.chars)==null?void 0:c[i])!==void 0?r((l=t.chars)==null?void 0:l[i],o+1):null}const s=r(e,0);if(s)for(const i in bt)s[i]===void 0&&t[i]!==void 0&&(s[i]=t[i]);return s&&n?go(s):s}const s0=/^[a-f0-9]+(-[a-f0-9]+)*$/;function Ga(t,e){for(const n in t){const r=n,i=typeof t[r];if(i==="undefined"){delete t[r];continue}switch(n){case"body":case"parent":if(i!=="string")return n;break;case"hFlip":case"vFlip":case"hidden":if(i!=="boolean")if(e)delete t[r];else return n;break;case"width":case"height":case"left":case"top":case"rotate":case"inlineHeight":case"inlineTop":case"verticalAlign":if(i!=="number")if(e)delete t[r];else return n;break;default:if(i==="object")if(e)delete t[r];else return n}}return null}function i0(t,e){var i;const n=!!(e!=null&&e.fix);if(typeof t!="object"||t===null||typeof t.icons!="object"||!t.icons)throw new Error("Bad icon set");const r=t;if(typeof(e==null?void 0:e.prefix)=="string")r.prefix=e.prefix;else if(typeof r.prefix!="string"||!r.prefix.match(Ue))throw new Error("Invalid prefix");if(typeof(e==null?void 0:e.provider)=="string")r.provider=e.provider;else if(r.provider!==void 0){const o=r.provider;if(typeof o!="string"||o!==""&&!o.match(Ue))if(n)delete r.provider;else throw new Error("Invalid provider")}const s=r.icons;if(Object.keys(s).forEach(o=>{if(!o.match(Ue)){if(n){delete s[o];return}throw new Error(`Invalid icon name: "${o}"`)}const a=s[o];if(typeof a!="object"||a===null||typeof a.body!="string"){if(n){delete s[o];return}throw new Error(`Invalid icon: "${o}"`)}const u=typeof a.parent=="string"?"parent":Ga(a,n);if(u!==null){if(n){delete s[o];return}throw new Error(`Invalid property "${u}" in icon "${o}"`)}}),r.not_found!==void 0&&!(r.not_found instanceof Array))if(n)delete r.not_found;else throw new Error("Invalid not_found list");if(!Object.keys(r.icons).length&&!((i=r.not_found)!=null&&i.length))throw new Error("Icon set is empty");if(r.aliases!==void 0&&(typeof r.aliases!="object"||r.aliases===null))if(n)delete r.aliases;else throw new Error("Invalid aliases list");if(typeof r.aliases=="object"){let o=function(l,h){if(u.has(l))return!c.has(l);const f=a[l];if(h>5||typeof f!="object"||f===null||typeof f.parent!="string"||!l.match(Ue)){if(n)return delete a[l],c.add(l),!1;throw new Error(`Invalid icon alias: "${l}"`)}const d=f.parent;if(r.icons[d]===void 0&&(a[d]===void 0||!o(d,h+1))){if(n)return delete a[l],c.add(l),!1;throw new Error(`Missing parent icon for alias "${l}`)}n&&f.body!==void 0&&delete f.body;const p=f.body!==void 0?"body":Ga(f,n);if(p!==null){if(n)return delete a[l],c.add(l),!1;throw new Error(`Invalid property "${p}" in alias "${l}"`)}return u.add(l),!0};const a=r.aliases,u=new Set,c=new Set;Object.keys(a).forEach(l=>{o(l,0)}),n&&!Object.keys(r.aliases).length&&delete r.aliases}if(Object.keys(bt).forEach(o=>{const a=typeof bt[o],u=typeof r[o];if(u!=="undefined"&&u!==a)throw new Error(`Invalid value type for "${o}"`)}),r.chars!==void 0&&(typeof r.chars!="object"||r.chars===null))if(n)delete r.chars;else throw new Error("Invalid characters map");if(typeof r.chars=="object"){const o=r.chars;Object.keys(o).forEach(a=>{var c;if(!s0.exec(a)||typeof o[a]!="string"){if(n){delete o[a];return}throw new Error(`Invalid character "${a}"`)}const u=o[a];if(r.icons[u]===void 0&&((c=r.aliases)==null?void 0:c[u])===void 0){if(n){delete o[a];return}throw new Error(`Character "${a}" points to missing icon "${u}"`)}}),n&&!Object.keys(r.chars).length&&delete r.chars}return r}function o0(t){for(const e in bt)if(t[e]!==void 0)return!0;return!1}function uh(t,e,n){n=n||{};const r=[];if(typeof t!="object"||typeof t.icons!="object")return r;const s=n.validate;if(s!==!1)try{i0(t,typeof s=="object"?s:{fix:!0})}catch{return r}t.not_found instanceof Array&&t.not_found.forEach(a=>{e(a,null),r.push(a)});const i=t.icons;Object.keys(i).forEach(a=>{const u=Ka(t,a,!0);u&&(e(a,u),r.push(a))});const o=n.aliases||"all";if(o!=="none"&&typeof t.aliases=="object"){const a=t.aliases;Object.keys(a).forEach(u=>{if(o==="variations"&&o0(a[u]))return;const c=Ka(t,u,!0);c&&(e(u,c),r.push(u))})}return r}const a0=1;let Zn=Object.create(null);try{const t=window||self;(t==null?void 0:t._iconifyStorage.version)===a0&&(Zn=t._iconifyStorage.storage)}catch{}function u0(t,e){return{provider:t,prefix:e,icons:Object.create(null),missing:Object.create(null)}}function tt(t,e){Zn[t]===void 0&&(Zn[t]=Object.create(null));const n=Zn[t];return n[e]===void 0&&(n[e]=u0(t,e)),n[e]}function mo(t,e){const n=Date.now();return uh(e,(r,s)=>{s?t.icons[r]=s:t.missing[r]=n})}function c0(t,e,n){try{if(typeof n.body=="string")return t.icons[e]=Object.freeze(go(n)),!0}catch{}return!1}function l0(t,e){const n=t.icons[e];return n===void 0?null:n}let ln=!1;function ch(t){return typeof t=="boolean"&&(ln=t),ln}function h0(t){const e=typeof t=="string"?Wr(t,!0,ln):t;return e?l0(tt(e.provider,e.prefix),e.name):null}function f0(t,e){const n=Wr(t,!0,ln);if(!n)return!1;const r=tt(n.provider,n.prefix);return c0(r,n.name,e)}function d0(t,e){if(typeof t!="object")return!1;if(typeof e!="string"&&(e=typeof t.provider=="string"?t.provider:""),ln&&e===""&&(typeof t.prefix!="string"||t.prefix==="")){let r=!1;return uh(t,(s,i)=>{i&&f0(s,i)&&(r=!0)},{validate:{fix:!0,prefix:""}}),r}if(typeof t.prefix!="string"||!Wt({provider:e,prefix:t.prefix,name:"a"}))return!1;const n=tt(e,t.prefix);return!!mo(n,t)}const Wa=Object.freeze({inline:!1,width:null,height:null,hAlign:"center",vAlign:"middle",slice:!1,hFlip:!1,vFlip:!1,rotate:0});function p0(t,e){const n={};for(const r in t){const s=r;if(n[s]=t[s],e[s]===void 0)continue;const i=e[s];switch(s){case"inline":case"slice":typeof i=="boolean"&&(n[s]=i);break;case"hFlip":case"vFlip":i===!0&&(n[s]=!n[s]);break;case"hAlign":case"vAlign":typeof i=="string"&&i!==""&&(n[s]=i);break;case"width":case"height":(typeof i=="string"&&i!==""||typeof i=="number"&&i||i===null)&&(n[s]=i);break;case"rotate":typeof i=="number"&&(n[s]+=i);break}}return n}const g0=/(-?[0-9.]*[0-9]+[0-9.]*)/g,m0=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function vs(t,e,n){if(e===1)return t;if(n=n===void 0?100:n,typeof t=="number")return Math.ceil(t*e*n)/n;if(typeof t!="string")return t;const r=t.split(g0);if(r===null||!r.length)return t;const s=[];let i=r.shift(),o=m0.test(i);for(;;){if(o){const a=parseFloat(i);isNaN(a)?s.push(i):s.push(Math.ceil(a*e*n)/n)}else s.push(i);if(i=r.shift(),i===void 0)return s.join("");o=!o}}function y0(t){let e="";switch(t.hAlign){case"left":e+="xMin";break;case"right":e+="xMax";break;default:e+="xMid"}switch(t.vAlign){case"top":e+="YMin";break;case"bottom":e+="YMax";break;default:e+="YMid"}return e+=t.slice?" slice":" meet",e}function v0(t,e){const n={left:t.left,top:t.top,width:t.width,height:t.height};let r=t.body;[t,e].forEach(a=>{const u=[],c=a.hFlip,l=a.vFlip;let h=a.rotate;c?l?h+=2:(u.push("translate("+(n.width+n.left).toString()+" "+(0-n.top).toString()+")"),u.push("scale(-1 1)"),n.top=n.left=0):l&&(u.push("translate("+(0-n.left).toString()+" "+(n.height+n.top).toString()+")"),u.push("scale(1 -1)"),n.top=n.left=0);let f;switch(h<0&&(h-=Math.floor(h/4)*4),h=h%4,h){case 1:f=n.height/2+n.top,u.unshift("rotate(90 "+f.toString()+" "+f.toString()+")");break;case 2:u.unshift("rotate(180 "+(n.width/2+n.left).toString()+" "+(n.height/2+n.top).toString()+")");break;case 3:f=n.width/2+n.left,u.unshift("rotate(-90 "+f.toString()+" "+f.toString()+")");break}h%2===1&&((n.left!==0||n.top!==0)&&(f=n.left,n.left=n.top,n.top=f),n.width!==n.height&&(f=n.width,n.width=n.height,n.height=f)),u.length&&(r='<g transform="'+u.join(" ")+'">'+r+"</g>")});let s,i;e.width===null&&e.height===null?(i="1em",s=vs(i,n.width/n.height)):e.width!==null&&e.height!==null?(s=e.width,i=e.height):e.height!==null?(i=e.height,s=vs(i,n.width/n.height)):(s=e.width,i=vs(s,n.height/n.width)),s==="auto"&&(s=n.width),i==="auto"&&(i=n.height),s=typeof s=="string"?s:s.toString()+"",i=typeof i=="string"?i:i.toString()+"";const o={attributes:{width:s,height:i,preserveAspectRatio:y0(e),viewBox:n.left.toString()+" "+n.top.toString()+" "+n.width.toString()+" "+n.height.toString()},body:r};return e.inline&&(o.inline=!0),o}const w0=/\sid="(\S+)"/g,_0="IconifyId"+Date.now().toString(16)+(Math.random()*16777216|0).toString(16);let b0=0;function E0(t,e=_0){const n=[];let r;for(;r=w0.exec(t);)n.push(r[1]);return n.length&&n.forEach(s=>{const i=typeof e=="function"?e(s):e+(b0++).toString(),o=s.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");t=t.replace(new RegExp('([#;"])('+o+')([")]|\\.[a-z])',"g"),"$1"+i+"$3")}),t}const si=Object.create(null);function T0(t,e){si[t]=e}function ii(t){return si[t]||si[""]}function yo(t){let e;if(typeof t.resources=="string")e=[t.resources];else if(e=t.resources,!(e instanceof Array)||!e.length)return null;return{resources:e,path:t.path===void 0?"/":t.path,maxURL:t.maxURL?t.maxURL:500,rotate:t.rotate?t.rotate:750,timeout:t.timeout?t.timeout:5e3,random:t.random===!0,index:t.index?t.index:0,dataAfterTimeout:t.dataAfterTimeout!==!1}}const vo=Object.create(null),jt=["https://api.simplesvg.com","https://api.unisvg.com"],er=[];for(;jt.length>0;)jt.length===1||Math.random()>.5?er.push(jt.shift()):er.push(jt.pop());vo[""]=yo({resources:["https://api.iconify.design"].concat(er)});function S0(t,e){const n=yo(e);return n===null?!1:(vo[t]=n,!0)}function wo(t){return vo[t]}const lh=(t,e)=>{let n=t,r=n.indexOf("?")!==-1;function s(i){switch(typeof i){case"boolean":return i?"true":"false";case"number":return encodeURIComponent(i);case"string":return encodeURIComponent(i);default:throw new Error("Invalid parameter")}}return Object.keys(e).forEach(i=>{let o;try{o=s(e[i])}catch{return}n+=(r?"&":"?")+encodeURIComponent(i)+"="+o,r=!0}),n},hh={},tr={},C0=()=>{let t;try{if(t=fetch,typeof t=="function")return t}catch{}return null};let Xa=C0();function I0(t,e){const n=wo(t);if(!n)return 0;let r;if(!n.maxURL)r=0;else{let i=0;n.resources.forEach(a=>{i=Math.max(i,a.length)});const o=lh(e+".json",{icons:""});r=n.maxURL-i-n.path.length-o.length}const s=t+":"+e;return tr[t]=n.path,hh[s]=r,r}function A0(t){return t===404}const x0=(t,e,n)=>{const r=[];let s=hh[e];s===void 0&&(s=I0(t,e));const i="icons";let o={type:i,provider:t,prefix:e,icons:[]},a=0;return n.forEach((u,c)=>{a+=u.length+1,a>=s&&c>0&&(r.push(o),o={type:i,provider:t,prefix:e,icons:[]},a=u.length),o.icons.push(u)}),r.push(o),r};function D0(t){if(typeof t=="string"){if(tr[t]===void 0){const e=wo(t);if(!e)return"/";tr[t]=e.path}return tr[t]}return"/"}const $0=(t,e,n)=>{if(!Xa){n("abort",424);return}let r=D0(e.provider);switch(e.type){case"icons":{const i=e.prefix,a=e.icons.join(",");r+=lh(i+".json",{icons:a});break}case"custom":{const i=e.uri;r+=i.slice(0,1)==="/"?i.slice(1):i;break}default:n("abort",400);return}let s=503;Xa(t+r).then(i=>{const o=i.status;if(o!==200){setTimeout(()=>{n(A0(o)?"abort":"next",o)});return}return s=501,i.json()}).then(i=>{if(typeof i!="object"||i===null){setTimeout(()=>{n("next",s)});return}setTimeout(()=>{n("success",i)})}).catch(()=>{n("next",s)})},k0={prepare:x0,send:$0};function O0(t){const e={loaded:[],missing:[],pending:[]},n=Object.create(null);t.sort((s,i)=>s.provider!==i.provider?s.provider.localeCompare(i.provider):s.prefix!==i.prefix?s.prefix.localeCompare(i.prefix):s.name.localeCompare(i.name));let r={provider:"",prefix:"",name:""};return t.forEach(s=>{if(r.name===s.name&&r.prefix===s.prefix&&r.provider===s.provider)return;r=s;const i=s.provider,o=s.prefix,a=s.name;n[i]===void 0&&(n[i]=Object.create(null));const u=n[i];u[o]===void 0&&(u[o]=tt(i,o));const c=u[o];let l;c.icons[a]!==void 0?l=e.loaded:o===""||c.missing[a]!==void 0?l=e.missing:l=e.pending;const h={provider:i,prefix:o,name:a};l.push(h)}),e}const Ie=Object.create(null),ws=Object.create(null);function fh(t,e){t.forEach(n=>{const r=n.provider;if(Ie[r]===void 0)return;const s=Ie[r],i=n.prefix,o=s[i];o&&(s[i]=o.filter(a=>a.id!==e))})}function F0(t,e){ws[t]===void 0&&(ws[t]=Object.create(null));const n=ws[t];n[e]||(n[e]=!0,setTimeout(()=>{if(n[e]=!1,Ie[t]===void 0||Ie[t][e]===void 0)return;const r=Ie[t][e].slice(0);if(!r.length)return;const s=tt(t,e);let i=!1;r.forEach(o=>{const a=o.icons,u=a.pending.length;a.pending=a.pending.filter(c=>{if(c.prefix!==e)return!0;const l=c.name;if(s.icons[l]!==void 0)a.loaded.push({provider:t,prefix:e,name:l});else if(s.missing[l]!==void 0)a.missing.push({provider:t,prefix:e,name:l});else return i=!0,!0;return!1}),a.pending.length!==u&&(i||fh([{provider:t,prefix:e}],o.id),o.callback(a.loaded.slice(0),a.missing.slice(0),a.pending.slice(0),o.abort))})}))}let R0=0;function N0(t,e,n){const r=R0++,s=fh.bind(null,n,r);if(!e.pending.length)return s;const i={id:r,icons:e,callback:t,abort:s};return n.forEach(o=>{const a=o.provider,u=o.prefix;Ie[a]===void 0&&(Ie[a]=Object.create(null));const c=Ie[a];c[u]===void 0&&(c[u]=[]),c[u].push(i)}),s}function P0(t,e=!0,n=!1){const r=[];return t.forEach(s=>{const i=typeof s=="string"?Wr(s,!1,n):s;(!e||Wt(i,n))&&r.push({provider:i.provider,prefix:i.prefix,name:i.name})}),r}var Ya={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function L0(t,e,n,r){const s=t.resources.length,i=t.random?Math.floor(Math.random()*s):t.index;let o;if(t.random){let b=t.resources.slice(0);for(o=[];b.length>1;){const j=Math.floor(Math.random()*b.length);o.push(b[j]),b=b.slice(0,j).concat(b.slice(j+1))}o=o.concat(b)}else o=t.resources.slice(i).concat(t.resources.slice(0,i));const a=Date.now();let u="pending",c=0,l,h=null,f=[],d=[];typeof r=="function"&&d.push(r);function p(){h&&(clearTimeout(h),h=null)}function v(){u==="pending"&&(u="aborted"),p(),f.forEach(b=>{b.status==="pending"&&(b.status="aborted")}),f=[]}function _(b,j){j&&(d=[]),typeof b=="function"&&d.push(b)}function x(){return{startTime:a,payload:e,status:u,queriesSent:c,queriesPending:f.length,subscribe:_,abort:v}}function F(){u="failed",d.forEach(b=>{b(void 0,l)})}function N(){f.forEach(b=>{b.status==="pending"&&(b.status="aborted")}),f=[]}function $(b,j,de){const kn=j!=="success";switch(f=f.filter(Fe=>Fe!==b),u){case"pending":break;case"failed":if(kn||!t.dataAfterTimeout)return;break;default:return}if(j==="abort"){l=de,F();return}if(kn){l=de,f.length||(o.length?H():F());return}if(p(),N(),!t.random){const Fe=t.resources.indexOf(b.resource);Fe!==-1&&Fe!==t.index&&(t.index=Fe)}u="completed",d.forEach(Fe=>{Fe(de)})}function H(){if(u!=="pending")return;p();const b=o.shift();if(b===void 0){if(f.length){h=setTimeout(()=>{p(),u==="pending"&&(N(),F())},t.timeout);return}F();return}const j={status:"pending",resource:b,callback:(de,kn)=>{$(j,de,kn)}};f.push(j),c++,h=setTimeout(H,t.rotate),n(b,e,j.callback)}return setTimeout(H),x}function M0(t){if(typeof t!="object"||typeof t.resources!="object"||!(t.resources instanceof Array)||!t.resources.length)throw new Error("Invalid Reduncancy configuration");const e=Object.create(null);let n;for(n in Ya)t[n]!==void 0?e[n]=t[n]:e[n]=Ya[n];return e}function dh(t){const e=M0(t);let n=[];function r(){n=n.filter(a=>a().status==="pending")}function s(a,u,c){const l=L0(e,a,u,(h,f)=>{r(),c&&c(h,f)});return n.push(l),l}function i(a){const u=n.find(c=>a(c));return u!==void 0?u:null}return{query:s,find:i,setIndex:a=>{e.index=a},getIndex:()=>e.index,cleanup:r}}function Qa(){}const _s=Object.create(null);function j0(t){if(_s[t]===void 0){const e=wo(t);if(!e)return;const n=dh(e),r={config:e,redundancy:n};_s[t]=r}return _s[t]}function U0(t,e,n){let r,s;if(typeof t=="string"){const i=ii(t);if(!i)return n(void 0,424),Qa;s=i.send;const o=j0(t);o&&(r=o.redundancy)}else{const i=yo(t);if(i){r=dh(i);const o=t.resources?t.resources[0]:"",a=ii(o);a&&(s=a.send)}}return!r||!s?(n(void 0,424),Qa):r.query(e,s,n)().abort}const oi={};function Ja(){}const Ve=Object.create(null),bs=Object.create(null),Es=Object.create(null),Ts=Object.create(null);function V0(t,e){Es[t]===void 0&&(Es[t]=Object.create(null));const n=Es[t];n[e]||(n[e]=!0,setTimeout(()=>{n[e]=!1,F0(t,e)}))}const Za=Object.create(null);function B0(t,e,n){function r(){const a=(t===""?"":"@"+t+":")+e,u=Math.floor(Date.now()/6e4);Za[a]<u&&(Za[a]=u,console.error('Unable to retrieve icons for "'+a+'" because API is not configured properly.'))}bs[t]===void 0&&(bs[t]=Object.create(null));const s=bs[t];Ts[t]===void 0&&(Ts[t]=Object.create(null));const i=Ts[t];Ve[t]===void 0&&(Ve[t]=Object.create(null));const o=Ve[t];s[e]===void 0?s[e]=n:s[e]=s[e].concat(n).sort(),i[e]||(i[e]=!0,setTimeout(()=>{i[e]=!1;const a=s[e];delete s[e];const u=ii(t);if(!u){r();return}u.prepare(t,e,a).forEach(l=>{U0(t,l,(h,f)=>{const d=tt(t,e);if(typeof h!="object"){if(f!==404)return;const p=Date.now();l.icons.forEach(v=>{d.missing[v]=p})}else try{const p=mo(d,h);if(!p.length)return;const v=o[e];p.forEach(_=>{delete v[_]}),oi.store&&oi.store(t,h)}catch(p){console.error(p)}V0(t,e)})})}))}const q0=(t,e)=>{const n=P0(t,!0,ch()),r=O0(n);if(!r.pending.length){let c=!0;return e&&setTimeout(()=>{c&&e(r.loaded,r.missing,r.pending,Ja)}),()=>{c=!1}}const s=Object.create(null),i=[];let o,a;r.pending.forEach(c=>{const l=c.provider,h=c.prefix;if(h===a&&l===o)return;o=l,a=h,i.push({provider:l,prefix:h}),Ve[l]===void 0&&(Ve[l]=Object.create(null));const f=Ve[l];f[h]===void 0&&(f[h]=Object.create(null)),s[l]===void 0&&(s[l]=Object.create(null));const d=s[l];d[h]===void 0&&(d[h]=[])});const u=Date.now();return r.pending.forEach(c=>{const l=c.provider,h=c.prefix,f=c.name,d=Ve[l][h];d[f]===void 0&&(d[f]=u,s[l][h].push(f))}),i.forEach(c=>{const l=c.provider,h=c.prefix;s[l][h].length&&B0(l,h,s[l][h])}),e?N0(e,r,i):Ja},ph="iconify2",An="iconify",gh=An+"-count",mh=An+"-version",yh=36e5,H0=168,_o={local:!0,session:!0};let ai=!1;const vh={local:0,session:0},wh={local:[],session:[]};let Bn=typeof window=="undefined"?{}:window;function _h(t){const e=t+"Storage";try{if(Bn&&Bn[e]&&typeof Bn[e].length=="number")return Bn[e]}catch{}return _o[t]=!1,null}function bo(t,e,n){try{return t.setItem(gh,n.toString()),vh[e]=n,!0}catch{return!1}}function bh(t){const e=t.getItem(gh);if(e){const n=parseInt(e);return n||0}return 0}function z0(t,e){try{t.setItem(mh,ph)}catch{}bo(t,e,0)}function K0(t){try{const e=bh(t);for(let n=0;n<e;n++)t.removeItem(An+n.toString())}catch{}}const Eh=()=>{if(ai)return;ai=!0;const t=Math.floor(Date.now()/yh)-H0;function e(n){const r=_h(n);if(!r)return;const s=i=>{const o=An+i.toString(),a=r.getItem(o);if(typeof a!="string")return!1;let u=!0;try{const c=JSON.parse(a);if(typeof c!="object"||typeof c.cached!="number"||c.cached<t||typeof c.provider!="string"||typeof c.data!="object"||typeof c.data.prefix!="string")u=!1;else{const l=c.provider,h=c.data.prefix,f=tt(l,h);u=mo(f,c.data).length>0}}catch{u=!1}return u||r.removeItem(o),u};try{const i=r.getItem(mh);if(i!==ph){i&&K0(r),z0(r,n);return}let o=bh(r);for(let a=o-1;a>=0;a--)s(a)||(a===o-1?o--:wh[n].push(a));bo(r,n,o)}catch{}}for(const n in _o)e(n)},G0=(t,e)=>{ai||Eh();function n(r){if(!_o[r])return!1;const s=_h(r);if(!s)return!1;let i=wh[r].shift();if(i===void 0&&(i=vh[r],!bo(s,r,i+1)))return!1;try{const o={cached:Math.floor(Date.now()/yh),provider:t,data:e};s.setItem(An+i.toString(),JSON.stringify(o))}catch{return!1}return!0}!Object.keys(e.icons).length||(e.not_found&&(e=Object.assign({},e),delete e.not_found),n("local")||n("session"))},Th=/[\s,]+/;function W0(t,e){e.split(Th).forEach(n=>{switch(n.trim()){case"horizontal":t.hFlip=!0;break;case"vertical":t.vFlip=!0;break}})}function X0(t,e){e.split(Th).forEach(n=>{const r=n.trim();switch(r){case"left":case"center":case"right":t.hAlign=r;break;case"top":case"middle":case"bottom":t.vAlign=r;break;case"slice":case"crop":t.slice=!0;break;case"meet":t.slice=!1}})}function Y0(t,e=0){const n=t.replace(/^-?[0-9.]*/,"");function r(s){for(;s<0;)s+=4;return s%4}if(n===""){const s=parseInt(t);return isNaN(s)?0:r(s)}else if(n!==t){let s=0;switch(n){case"%":s=25;break;case"deg":s=90}if(s){let i=parseFloat(t.slice(0,t.length-n.length));return isNaN(i)?0:(i=i/s,i%1===0?r(i):0)}}return e}const Q0={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":!0,role:"img"};function J0(t,e){const n=p0(Wa,e),r=Pt({},Q0);let s=typeof e.style=="string"?e.style:"";for(let u in e){const c=e[u];if(c!==void 0)switch(u){case"icon":case"style":case"onLoad":break;case"inline":case"hFlip":case"vFlip":n[u]=c===!0||c==="true"||c===1;break;case"flip":typeof c=="string"&&W0(n,c);break;case"align":typeof c=="string"&&X0(n,c);break;case"color":s=s+(s.length>0&&s.trim().slice(-1)!==";"?";":"")+"color: "+c+"; ";break;case"rotate":typeof c=="string"?n[u]=Y0(c):typeof c=="number"&&(n[u]=c);break;case"ariaHidden":case"aria-hidden":c!==!0&&c!=="true"&&delete r["aria-hidden"];break;default:if(u.slice(0,3)==="on:")break;Wa[u]===void 0&&(r[u]=c)}}const i=v0(t,n);for(let u in i.attributes)r[u]=i.attributes[u];i.inline&&(s="vertical-align: -0.125em; "+s),s!==""&&(r.style=s);let o=0,a=e.id;return typeof a=="string"&&(a=a.replace(/-/g,"_")),{attributes:r,body:E0(i.body,a?()=>a+"ID"+o++:"iconifySvelte")}}ch(!0);T0("",k0);if(typeof document!="undefined"&&typeof window!="undefined"){oi.store=G0,Eh();const t=window;if(t.IconifyPreload!==void 0){const e=t.IconifyPreload,n="Invalid IconifyPreload syntax.";typeof e=="object"&&e!==null&&(e instanceof Array?e:[e]).forEach(r=>{try{(typeof r!="object"||r===null||r instanceof Array||typeof r.icons!="object"||typeof r.prefix!="string"||!d0(r))&&console.error(n)}catch{console.error(n)}})}if(t.IconifyProviders!==void 0){const e=t.IconifyProviders;if(typeof e=="object"&&e!==null)for(let n in e){const r="IconifyProviders["+n+"] is invalid.";try{const s=e[n];if(typeof s!="object"||!s||s.resources===void 0)continue;S0(n,s)||console.error(r)}catch{console.error(r)}}}}function Z0(t,e,n,r,s){function i(){e.loading&&(e.loading.abort(),e.loading=null)}if(typeof t=="object"&&t!==null&&typeof t.body=="string")return e.name="",i(),{data:go(t)};let o;if(typeof t!="string"||(o=Wr(t,!1,!0))===null)return i(),null;const a=h0(o);if(a===null)return n&&(!e.loading||e.loading.name!==t)&&(i(),e.name="",e.loading={name:t,abort:q0([o],r)}),null;i(),e.name!==t&&(e.name=t,s&&!e.destroyed&&s(t));const u=["iconify"];return o.prefix!==""&&u.push("iconify--"+o.prefix),o.provider!==""&&u.push("iconify--"+o.provider),{data:a,classes:u}}function ew(t,e){return t?J0(t,e):null}function eu(t){let e,n=t[0].body+"",r=[t[0].attributes],s={};for(let i=0;i<r.length;i+=1)s=nr(s,r[i]);return{c(){e=Gu("svg"),this.h()},l(i){e=Uf(i,"svg",{});var o=Wu(e);o.forEach(rr),this.h()},h(){Mo(e,s)},m(i,o){Ku(i,e,o),e.innerHTML=n},p(i,o){o&1&&n!==(n=i[0].body+"")&&(e.innerHTML=n),Mo(e,s=Jf(r,[o&1&&i[0].attributes]))},d(i){i&&rr(e)}}}function tw(t){let e,n=t[0]!==null&&eu(t);return{c(){n&&n.c(),e=Lo()},l(r){n&&n.l(r),e=Lo()},m(r,s){n&&n.m(r,s),Ku(r,e,s)},p(r,[s]){r[0]!==null?n?n.p(r,s):(n=eu(r),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},i:Be,o:Be,d(r){n&&n.d(r),r&&rr(e)}}}function nw(t,e,n){const r={name:"",loading:null,destroyed:!1};let s=!1,i=0,o;const a=c=>{typeof e.onLoad=="function"&&e.onLoad(c),zf()("load",{icon:c})};function u(){n(3,i++,i)}return qf(()=>{n(2,s=!0)}),Hf(()=>{n(1,r.destroyed=!0,r),r.loading&&(r.loading.abort(),n(1,r.loading=null,r))}),t.$$set=c=>{n(6,e=nr(nr({},e),Po(c)))},t.$$.update=()=>{{const c=Z0(e.icon,r,s,u,a);n(0,o=c?ew(c.data,e):null),o&&c.classes&&n(0,o.attributes.class=(typeof e.class=="string"?e.class+" ":"")+c.classes.join(" "),o)}},e=Po(e),[o,r,s,i]}class y$ extends rd{constructor(e){super();nd(this,e,nw,tw,Hu,{})}}const wr={_origin:"https://api.emailjs.com"},v$=(t,e="https://api.emailjs.com")=>{wr._userID=t,wr._origin=e},rw=(t,e,n)=>{if(!t)throw"The user ID is required. Visit https://dashboard.emailjs.com/admin/integration";if(!e)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!n)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class tu{constructor(e){this.status=e.status,this.text=e.responseText}}const sw=(t,e,n={})=>new Promise((r,s)=>{const i=new XMLHttpRequest;i.addEventListener("load",({target:o})=>{const a=new tu(o);a.status===200||a.text==="OK"?r(a):s(a)}),i.addEventListener("error",({target:o})=>{s(new tu(o))}),i.open("POST",wr._origin+t,!0),Object.keys(n).forEach(o=>{i.setRequestHeader(o,n[o])}),i.send(e)}),w$=(t,e,n,r)=>{const s=r||wr._userID;rw(s,t,e);const i={lib_version:"3.5.0",user_id:s,service_id:t,template_id:e,template_params:n};return sw("/api/v1.0/email/send",JSON.stringify(i),{"Content-type":"application/json"})};var ui;try{ui=Map}catch{}var ci;try{ci=Set}catch{}function Sh(t,e,n){if(!t||typeof t!="object"||typeof t=="function")return t;if(t.nodeType&&"cloneNode"in t)return t.cloneNode(!0);if(t instanceof Date)return new Date(t.getTime());if(t instanceof RegExp)return new RegExp(t);if(Array.isArray(t))return t.map(li);if(ui&&t instanceof ui)return new Map(Array.from(t.entries()));if(ci&&t instanceof ci)return new Set(Array.from(t.values()));if(t instanceof Object){e.push(t);var r=Object.create(t);n.push(r);for(var s in t){var i=e.findIndex(function(o){return o===t[s]});r[s]=i>-1?n[i]:Sh(t[s],e,n)}return r}return t}function li(t){return Sh(t,[],[])}const iw=Object.prototype.toString,ow=Error.prototype.toString,aw=RegExp.prototype.toString,uw=typeof Symbol!="undefined"?Symbol.prototype.toString:()=>"",cw=/^Symbol\((.*)\)(.*)$/;function lw(t){return t!=+t?"NaN":t===0&&1/t<0?"-0":""+t}function nu(t,e=!1){if(t==null||t===!0||t===!1)return""+t;const n=typeof t;if(n==="number")return lw(t);if(n==="string")return e?`"${t}"`:t;if(n==="function")return"[Function "+(t.name||"anonymous")+"]";if(n==="symbol")return uw.call(t).replace(cw,"Symbol($1)");const r=iw.call(t).slice(8,-1);return r==="Date"?isNaN(t.getTime())?""+t:t.toISOString(t):r==="Error"||t instanceof Error?"["+ow.call(t)+"]":r==="RegExp"?aw.call(t):null}function hn(t,e){let n=nu(t,e);return n!==null?n:JSON.stringify(t,function(r,s){let i=nu(this[r],e);return i!==null?i:s},2)}let Ne={default:"${path} is invalid",required:"${path} is a required field",oneOf:"${path} must be one of the following values: ${values}",notOneOf:"${path} must not be one of the following values: ${values}",notType:({path:t,type:e,value:n,originalValue:r})=>{let s=r!=null&&r!==n,i=`${t} must be a \`${e}\` type, but the final value was: \`${hn(n,!0)}\``+(s?` (cast from the value \`${hn(r,!0)}\`).`:".");return n===null&&(i+='\n If "null" is intended as an empty value be sure to mark the schema as `.nullable()`'),i},defined:"${path} must be defined"},ge={length:"${path} must be exactly ${length} characters",min:"${path} must be at least ${min} characters",max:"${path} must be at most ${max} characters",matches:'${path} must match the following: "${regex}"',email:"${path} must be a valid email",url:"${path} must be a valid URL",uuid:"${path} must be a valid UUID",trim:"${path} must be a trimmed string",lowercase:"${path} must be a lowercase string",uppercase:"${path} must be a upper case string"},hw={min:"${path} must be greater than or equal to ${min}",max:"${path} must be less than or equal to ${max}",lessThan:"${path} must be less than ${less}",moreThan:"${path} must be greater than ${more}",positive:"${path} must be a positive number",negative:"${path} must be a negative number",integer:"${path} must be an integer"},hi={min:"${path} field must be later than ${min}",max:"${path} field must be at earlier than ${max}"},fw={isValue:"${path} field must be ${value}"},fi={noUnknown:"${path} field has unspecified keys: ${unknown}"},dw={min:"${path} field must have at least ${min} items",max:"${path} field must have less than or equal to ${max} items",length:"${path} must have ${length} items"};Object.assign(Object.create(null),{mixed:Ne,string:ge,number:hw,date:hi,object:fi,array:dw,boolean:fw});var qn=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},pw=Object.prototype,gw=pw.hasOwnProperty;function mw(t,e){return t!=null&&gw.call(t,e)}var yw=mw,vw=Array.isArray,Oe=vw,ww=typeof qn=="object"&&qn&&qn.Object===Object&&qn,Ch=ww,_w=Ch,bw=typeof self=="object"&&self&&self.Object===Object&&self,Ew=_w||bw||Function("return this")(),Se=Ew,Tw=Se,Sw=Tw.Symbol,Xr=Sw,ru=Xr,Ih=Object.prototype,Cw=Ih.hasOwnProperty,Iw=Ih.toString,Ut=ru?ru.toStringTag:void 0;function Aw(t){var e=Cw.call(t,Ut),n=t[Ut];try{t[Ut]=void 0;var r=!0}catch{}var s=Iw.call(t);return r&&(e?t[Ut]=n:delete t[Ut]),s}var xw=Aw,Dw=Object.prototype,$w=Dw.toString;function kw(t){return $w.call(t)}var Ow=kw,su=Xr,Fw=xw,Rw=Ow,Nw="[object Null]",Pw="[object Undefined]",iu=su?su.toStringTag:void 0;function Lw(t){return t==null?t===void 0?Pw:Nw:iu&&iu in Object(t)?Fw(t):Rw(t)}var xn=Lw;function Mw(t){return t!=null&&typeof t=="object"}var Dn=Mw,jw=xn,Uw=Dn,Vw="[object Symbol]";function Bw(t){return typeof t=="symbol"||Uw(t)&&jw(t)==Vw}var Eo=Bw,qw=Oe,Hw=Eo,zw=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Kw=/^\w*$/;function Gw(t,e){if(qw(t))return!1;var n=typeof t;return n=="number"||n=="symbol"||n=="boolean"||t==null||Hw(t)?!0:Kw.test(t)||!zw.test(t)||e!=null&&t in Object(e)}var To=Gw;function Ww(t){var e=typeof t;return t!=null&&(e=="object"||e=="function")}var So=Ww,Xw=xn,Yw=So,Qw="[object AsyncFunction]",Jw="[object Function]",Zw="[object GeneratorFunction]",e_="[object Proxy]";function t_(t){if(!Yw(t))return!1;var e=Xw(t);return e==Jw||e==Zw||e==Qw||e==e_}var Ah=t_,n_=Se,r_=n_["__core-js_shared__"],s_=r_,Ss=s_,ou=function(){var t=/[^.]+$/.exec(Ss&&Ss.keys&&Ss.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();function i_(t){return!!ou&&ou in t}var o_=i_,a_=Function.prototype,u_=a_.toString;function c_(t){if(t!=null){try{return u_.call(t)}catch{}try{return t+""}catch{}}return""}var xh=c_,l_=Ah,h_=o_,f_=So,d_=xh,p_=/[\\^$.*+?()[\]{}|]/g,g_=/^\[object .+?Constructor\]$/,m_=Function.prototype,y_=Object.prototype,v_=m_.toString,w_=y_.hasOwnProperty,__=RegExp("^"+v_.call(w_).replace(p_,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function b_(t){if(!f_(t)||h_(t))return!1;var e=l_(t)?__:g_;return e.test(d_(t))}var E_=b_;function T_(t,e){return t==null?void 0:t[e]}var S_=T_,C_=E_,I_=S_;function A_(t,e){var n=I_(t,e);return C_(n)?n:void 0}var nt=A_,x_=nt,D_=x_(Object,"create"),Yr=D_,au=Yr;function $_(){this.__data__=au?au(null):{},this.size=0}var k_=$_;function O_(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}var F_=O_,R_=Yr,N_="__lodash_hash_undefined__",P_=Object.prototype,L_=P_.hasOwnProperty;function M_(t){var e=this.__data__;if(R_){var n=e[t];return n===N_?void 0:n}return L_.call(e,t)?e[t]:void 0}var j_=M_,U_=Yr,V_=Object.prototype,B_=V_.hasOwnProperty;function q_(t){var e=this.__data__;return U_?e[t]!==void 0:B_.call(e,t)}var H_=q_,z_=Yr,K_="__lodash_hash_undefined__";function G_(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=z_&&e===void 0?K_:e,this}var W_=G_,X_=k_,Y_=F_,Q_=j_,J_=H_,Z_=W_;function kt(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}kt.prototype.clear=X_;kt.prototype.delete=Y_;kt.prototype.get=Q_;kt.prototype.has=J_;kt.prototype.set=Z_;var eb=kt;function tb(){this.__data__=[],this.size=0}var nb=tb;function rb(t,e){return t===e||t!==t&&e!==e}var Dh=rb,sb=Dh;function ib(t,e){for(var n=t.length;n--;)if(sb(t[n][0],e))return n;return-1}var Qr=ib,ob=Qr,ab=Array.prototype,ub=ab.splice;function cb(t){var e=this.__data__,n=ob(e,t);if(n<0)return!1;var r=e.length-1;return n==r?e.pop():ub.call(e,n,1),--this.size,!0}var lb=cb,hb=Qr;function fb(t){var e=this.__data__,n=hb(e,t);return n<0?void 0:e[n][1]}var db=fb,pb=Qr;function gb(t){return pb(this.__data__,t)>-1}var mb=gb,yb=Qr;function vb(t,e){var n=this.__data__,r=yb(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this}var wb=vb,_b=nb,bb=lb,Eb=db,Tb=mb,Sb=wb;function Ot(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}Ot.prototype.clear=_b;Ot.prototype.delete=bb;Ot.prototype.get=Eb;Ot.prototype.has=Tb;Ot.prototype.set=Sb;var Jr=Ot,Cb=nt,Ib=Se,Ab=Cb(Ib,"Map"),Co=Ab,uu=eb,xb=Jr,Db=Co;function $b(){this.size=0,this.__data__={hash:new uu,map:new(Db||xb),string:new uu}}var kb=$b;function Ob(t){var e=typeof t;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?t!=="__proto__":t===null}var Fb=Ob,Rb=Fb;function Nb(t,e){var n=t.__data__;return Rb(e)?n[typeof e=="string"?"string":"hash"]:n.map}var Zr=Nb,Pb=Zr;function Lb(t){var e=Pb(this,t).delete(t);return this.size-=e?1:0,e}var Mb=Lb,jb=Zr;function Ub(t){return jb(this,t).get(t)}var Vb=Ub,Bb=Zr;function qb(t){return Bb(this,t).has(t)}var Hb=qb,zb=Zr;function Kb(t,e){var n=zb(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this}var Gb=Kb,Wb=kb,Xb=Mb,Yb=Vb,Qb=Hb,Jb=Gb;function Ft(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}Ft.prototype.clear=Wb;Ft.prototype.delete=Xb;Ft.prototype.get=Yb;Ft.prototype.has=Qb;Ft.prototype.set=Jb;var Io=Ft,$h=Io,Zb="Expected a function";function Ao(t,e){if(typeof t!="function"||e!=null&&typeof e!="function")throw new TypeError(Zb);var n=function(){var r=arguments,s=e?e.apply(this,r):r[0],i=n.cache;if(i.has(s))return i.get(s);var o=t.apply(this,r);return n.cache=i.set(s,o)||i,o};return n.cache=new(Ao.Cache||$h),n}Ao.Cache=$h;var eE=Ao,tE=eE,nE=500;function rE(t){var e=tE(t,function(r){return n.size===nE&&n.clear(),r}),n=e.cache;return e}var sE=rE,iE=sE,oE=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,aE=/\\(\\)?/g,uE=iE(function(t){var e=[];return t.charCodeAt(0)===46&&e.push(""),t.replace(oE,function(n,r,s,i){e.push(s?i.replace(aE,"$1"):r||n)}),e}),cE=uE;function lE(t,e){for(var n=-1,r=t==null?0:t.length,s=Array(r);++n<r;)s[n]=e(t[n],n,t);return s}var hE=lE,cu=Xr,fE=hE,dE=Oe,pE=Eo,gE=1/0,lu=cu?cu.prototype:void 0,hu=lu?lu.toString:void 0;function kh(t){if(typeof t=="string")return t;if(dE(t))return fE(t,kh)+"";if(pE(t))return hu?hu.call(t):"";var e=t+"";return e=="0"&&1/t==-gE?"-0":e}var mE=kh,yE=mE;function vE(t){return t==null?"":yE(t)}var $n=vE,wE=Oe,_E=To,bE=cE,EE=$n;function TE(t,e){return wE(t)?t:_E(t,e)?[t]:bE(EE(t))}var Oh=TE,SE=xn,CE=Dn,IE="[object Arguments]";function AE(t){return CE(t)&&SE(t)==IE}var xE=AE,fu=xE,DE=Dn,Fh=Object.prototype,$E=Fh.hasOwnProperty,kE=Fh.propertyIsEnumerable,OE=fu(function(){return arguments}())?fu:function(t){return DE(t)&&$E.call(t,"callee")&&!kE.call(t,"callee")},Rh=OE,FE=9007199254740991,RE=/^(?:0|[1-9]\d*)$/;function NE(t,e){var n=typeof t;return e=e==null?FE:e,!!e&&(n=="number"||n!="symbol"&&RE.test(t))&&t>-1&&t%1==0&&t<e}var Nh=NE,PE=9007199254740991;function LE(t){return typeof t=="number"&&t>-1&&t%1==0&&t<=PE}var xo=LE,ME=Eo,jE=1/0;function UE(t){if(typeof t=="string"||ME(t))return t;var e=t+"";return e=="0"&&1/t==-jE?"-0":e}var es=UE,VE=Oh,BE=Rh,qE=Oe,HE=Nh,zE=xo,KE=es;function GE(t,e,n){e=VE(e,t);for(var r=-1,s=e.length,i=!1;++r<s;){var o=KE(e[r]);if(!(i=t!=null&&n(t,o)))break;t=t[o]}return i||++r!=s?i:(s=t==null?0:t.length,!!s&&zE(s)&&HE(o,s)&&(qE(t)||BE(t)))}var Ph=GE,WE=yw,XE=Ph;function YE(t,e){return t!=null&&XE(t,e,WE)}var _r=YE;const Lh=t=>t&&t.__isYupSchema__;class QE{constructor(e,n){if(this.fn=void 0,this.refs=e,this.refs=e,typeof n=="function"){this.fn=n;return}if(!_r(n,"is"))throw new TypeError("`is:` is required for `when()` conditions");if(!n.then&&!n.otherwise)throw new TypeError("either `then:` or `otherwise:` is required for `when()` conditions");let{is:r,then:s,otherwise:i}=n,o=typeof r=="function"?r:(...a)=>a.every(u=>u===r);this.fn=function(...a){let u=a.pop(),c=a.pop(),l=o(...a)?s:i;if(!!l)return typeof l=="function"?l(c):c.concat(l.resolve(u))}}resolve(e,n){let r=this.refs.map(i=>i.getValue(n==null?void 0:n.value,n==null?void 0:n.parent,n==null?void 0:n.context)),s=this.fn.apply(e,r.concat(e,n));if(s===void 0||s===e)return e;if(!Lh(s))throw new TypeError("conditions must return a schema object");return s.resolve(n)}}function Mh(t){return t==null?[]:[].concat(t)}function di(){return di=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},di.apply(this,arguments)}let JE=/\$\{\s*(\w+)\s*\}/g;class le extends Error{static formatError(e,n){const r=n.label||n.path||"this";return r!==n.path&&(n=di({},n,{path:r})),typeof e=="string"?e.replace(JE,(s,i)=>hn(n[i])):typeof e=="function"?e(n):e}static isError(e){return e&&e.name==="ValidationError"}constructor(e,n,r,s){super();this.value=void 0,this.path=void 0,this.type=void 0,this.errors=void 0,this.params=void 0,this.inner=void 0,this.name="ValidationError",this.value=n,this.path=r,this.type=s,this.errors=[],this.inner=[],Mh(e).forEach(i=>{le.isError(i)?(this.errors.push(...i.errors),this.inner=this.inner.concat(i.inner.length?i.inner:i)):this.errors.push(i)}),this.message=this.errors.length>1?`${this.errors.length} errors occurred`:this.errors[0],Error.captureStackTrace&&Error.captureStackTrace(this,le)}}const ZE=t=>{let e=!1;return(...n)=>{e||(e=!0,t(...n))}};function pi(t,e){let{endEarly:n,tests:r,args:s,value:i,errors:o,sort:a,path:u}=t,c=ZE(e),l=r.length;const h=[];if(o=o||[],!l)return o.length?c(new le(o,i,u)):c(null,i);for(let f=0;f<r.length;f++)r[f](s,function(v){if(v){if(!le.isError(v))return c(v,i);if(n)return v.value=i,c(v,i);h.push(v)}if(--l<=0){if(h.length&&(a&&h.sort(a),o.length&&h.push(...o),o=h),o.length){c(new le(o,i,u),i);return}c(null,i)}})}var e1=nt,t1=function(){try{var t=e1(Object,"defineProperty");return t({},"",{}),t}catch{}}(),n1=t1,du=n1;function r1(t,e,n){e=="__proto__"&&du?du(t,e,{configurable:!0,enumerable:!0,value:n,writable:!0}):t[e]=n}var jh=r1;function s1(t){return function(e,n,r){for(var s=-1,i=Object(e),o=r(e),a=o.length;a--;){var u=o[t?a:++s];if(n(i[u],u,i)===!1)break}return e}}var i1=s1,o1=i1,a1=o1(),u1=a1;function c1(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r}var l1=c1,br={exports:{}};function h1(){return!1}var f1=h1;(function(t,e){var n=Se,r=f1,s=e&&!e.nodeType&&e,i=s&&!0&&t&&!t.nodeType&&t,o=i&&i.exports===s,a=o?n.Buffer:void 0,u=a?a.isBuffer:void 0,c=u||r;t.exports=c})(br,br.exports);var d1=xn,p1=xo,g1=Dn,m1="[object Arguments]",y1="[object Array]",v1="[object Boolean]",w1="[object Date]",_1="[object Error]",b1="[object Function]",E1="[object Map]",T1="[object Number]",S1="[object Object]",C1="[object RegExp]",I1="[object Set]",A1="[object String]",x1="[object WeakMap]",D1="[object ArrayBuffer]",$1="[object DataView]",k1="[object Float32Array]",O1="[object Float64Array]",F1="[object Int8Array]",R1="[object Int16Array]",N1="[object Int32Array]",P1="[object Uint8Array]",L1="[object Uint8ClampedArray]",M1="[object Uint16Array]",j1="[object Uint32Array]",R={};R[k1]=R[O1]=R[F1]=R[R1]=R[N1]=R[P1]=R[L1]=R[M1]=R[j1]=!0;R[m1]=R[y1]=R[D1]=R[v1]=R[$1]=R[w1]=R[_1]=R[b1]=R[E1]=R[T1]=R[S1]=R[C1]=R[I1]=R[A1]=R[x1]=!1;function U1(t){return g1(t)&&p1(t.length)&&!!R[d1(t)]}var V1=U1;function B1(t){return function(e){return t(e)}}var q1=B1,gi={exports:{}};(function(t,e){var n=Ch,r=e&&!e.nodeType&&e,s=r&&!0&&t&&!t.nodeType&&t,i=s&&s.exports===r,o=i&&n.process,a=function(){try{var u=s&&s.require&&s.require("util").types;return u||o&&o.binding&&o.binding("util")}catch{}}();t.exports=a})(gi,gi.exports);var H1=V1,z1=q1,pu=gi.exports,gu=pu&&pu.isTypedArray,K1=gu?z1(gu):H1,Uh=K1,G1=l1,W1=Rh,X1=Oe,Y1=br.exports,Q1=Nh,J1=Uh,Z1=Object.prototype,eT=Z1.hasOwnProperty;function tT(t,e){var n=X1(t),r=!n&&W1(t),s=!n&&!r&&Y1(t),i=!n&&!r&&!s&&J1(t),o=n||r||s||i,a=o?G1(t.length,String):[],u=a.length;for(var c in t)(e||eT.call(t,c))&&!(o&&(c=="length"||s&&(c=="offset"||c=="parent")||i&&(c=="buffer"||c=="byteLength"||c=="byteOffset")||Q1(c,u)))&&a.push(c);return a}var nT=tT,rT=Object.prototype;function sT(t){var e=t&&t.constructor,n=typeof e=="function"&&e.prototype||rT;return t===n}var iT=sT;function oT(t,e){return function(n){return t(e(n))}}var aT=oT,uT=aT,cT=uT(Object.keys,Object),lT=cT,hT=iT,fT=lT,dT=Object.prototype,pT=dT.hasOwnProperty;function gT(t){if(!hT(t))return fT(t);var e=[];for(var n in Object(t))pT.call(t,n)&&n!="constructor"&&e.push(n);return e}var mT=gT,yT=Ah,vT=xo;function wT(t){return t!=null&&vT(t.length)&&!yT(t)}var _T=wT,bT=nT,ET=mT,TT=_T;function ST(t){return TT(t)?bT(t):ET(t)}var Do=ST,CT=u1,IT=Do;function AT(t,e){return t&&CT(t,e,IT)}var Vh=AT,xT=Jr;function DT(){this.__data__=new xT,this.size=0}var $T=DT;function kT(t){var e=this.__data__,n=e.delete(t);return this.size=e.size,n}var OT=kT;function FT(t){return this.__data__.get(t)}var RT=FT;function NT(t){return this.__data__.has(t)}var PT=NT,LT=Jr,MT=Co,jT=Io,UT=200;function VT(t,e){var n=this.__data__;if(n instanceof LT){var r=n.__data__;if(!MT||r.length<UT-1)return r.push([t,e]),this.size=++n.size,this;n=this.__data__=new jT(r)}return n.set(t,e),this.size=n.size,this}var BT=VT,qT=Jr,HT=$T,zT=OT,KT=RT,GT=PT,WT=BT;function Rt(t){var e=this.__data__=new qT(t);this.size=e.size}Rt.prototype.clear=HT;Rt.prototype.delete=zT;Rt.prototype.get=KT;Rt.prototype.has=GT;Rt.prototype.set=WT;var Bh=Rt,XT="__lodash_hash_undefined__";function YT(t){return this.__data__.set(t,XT),this}var QT=YT;function JT(t){return this.__data__.has(t)}var ZT=JT,eS=Io,tS=QT,nS=ZT;function Er(t){var e=-1,n=t==null?0:t.length;for(this.__data__=new eS;++e<n;)this.add(t[e])}Er.prototype.add=Er.prototype.push=tS;Er.prototype.has=nS;var rS=Er;function sS(t,e){for(var n=-1,r=t==null?0:t.length;++n<r;)if(e(t[n],n,t))return!0;return!1}var iS=sS;function oS(t,e){return t.has(e)}var aS=oS,uS=rS,cS=iS,lS=aS,hS=1,fS=2;function dS(t,e,n,r,s,i){var o=n&hS,a=t.length,u=e.length;if(a!=u&&!(o&&u>a))return!1;var c=i.get(t),l=i.get(e);if(c&&l)return c==e&&l==t;var h=-1,f=!0,d=n&fS?new uS:void 0;for(i.set(t,e),i.set(e,t);++h<a;){var p=t[h],v=e[h];if(r)var _=o?r(v,p,h,e,t,i):r(p,v,h,t,e,i);if(_!==void 0){if(_)continue;f=!1;break}if(d){if(!cS(e,function(x,F){if(!lS(d,F)&&(p===x||s(p,x,n,r,i)))return d.push(F)})){f=!1;break}}else if(!(p===v||s(p,v,n,r,i))){f=!1;break}}return i.delete(t),i.delete(e),f}var qh=dS,pS=Se,gS=pS.Uint8Array,mS=gS;function yS(t){var e=-1,n=Array(t.size);return t.forEach(function(r,s){n[++e]=[s,r]}),n}var vS=yS;function wS(t){var e=-1,n=Array(t.size);return t.forEach(function(r){n[++e]=r}),n}var _S=wS,mu=Xr,yu=mS,bS=Dh,ES=qh,TS=vS,SS=_S,CS=1,IS=2,AS="[object Boolean]",xS="[object Date]",DS="[object Error]",$S="[object Map]",kS="[object Number]",OS="[object RegExp]",FS="[object Set]",RS="[object String]",NS="[object Symbol]",PS="[object ArrayBuffer]",LS="[object DataView]",vu=mu?mu.prototype:void 0,Cs=vu?vu.valueOf:void 0;function MS(t,e,n,r,s,i,o){switch(n){case LS:if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case PS:return!(t.byteLength!=e.byteLength||!i(new yu(t),new yu(e)));case AS:case xS:case kS:return bS(+t,+e);case DS:return t.name==e.name&&t.message==e.message;case OS:case RS:return t==e+"";case $S:var a=TS;case FS:var u=r&CS;if(a||(a=SS),t.size!=e.size&&!u)return!1;var c=o.get(t);if(c)return c==e;r|=IS,o.set(t,e);var l=ES(a(t),a(e),r,s,i,o);return o.delete(t),l;case NS:if(Cs)return Cs.call(t)==Cs.call(e)}return!1}var jS=MS;function US(t,e){for(var n=-1,r=e.length,s=t.length;++n<r;)t[s+n]=e[n];return t}var VS=US,BS=VS,qS=Oe;function HS(t,e,n){var r=e(t);return qS(t)?r:BS(r,n(t))}var zS=HS;function KS(t,e){for(var n=-1,r=t==null?0:t.length,s=0,i=[];++n<r;){var o=t[n];e(o,n,t)&&(i[s++]=o)}return i}var GS=KS;function WS(){return[]}var XS=WS,YS=GS,QS=XS,JS=Object.prototype,ZS=JS.propertyIsEnumerable,wu=Object.getOwnPropertySymbols,eC=wu?function(t){return t==null?[]:(t=Object(t),YS(wu(t),function(e){return ZS.call(t,e)}))}:QS,tC=eC,nC=zS,rC=tC,sC=Do;function iC(t){return nC(t,sC,rC)}var oC=iC,_u=oC,aC=1,uC=Object.prototype,cC=uC.hasOwnProperty;function lC(t,e,n,r,s,i){var o=n&aC,a=_u(t),u=a.length,c=_u(e),l=c.length;if(u!=l&&!o)return!1;for(var h=u;h--;){var f=a[h];if(!(o?f in e:cC.call(e,f)))return!1}var d=i.get(t),p=i.get(e);if(d&&p)return d==e&&p==t;var v=!0;i.set(t,e),i.set(e,t);for(var _=o;++h<u;){f=a[h];var x=t[f],F=e[f];if(r)var N=o?r(F,x,f,e,t,i):r(x,F,f,t,e,i);if(!(N===void 0?x===F||s(x,F,n,r,i):N)){v=!1;break}_||(_=f=="constructor")}if(v&&!_){var $=t.constructor,H=e.constructor;$!=H&&"constructor"in t&&"constructor"in e&&!(typeof $=="function"&&$ instanceof $&&typeof H=="function"&&H instanceof H)&&(v=!1)}return i.delete(t),i.delete(e),v}var hC=lC,fC=nt,dC=Se,pC=fC(dC,"DataView"),gC=pC,mC=nt,yC=Se,vC=mC(yC,"Promise"),wC=vC,_C=nt,bC=Se,EC=_C(bC,"Set"),TC=EC,SC=nt,CC=Se,IC=SC(CC,"WeakMap"),AC=IC,mi=gC,yi=Co,vi=wC,wi=TC,_i=AC,Hh=xn,Nt=xh,bu="[object Map]",xC="[object Object]",Eu="[object Promise]",Tu="[object Set]",Su="[object WeakMap]",Cu="[object DataView]",DC=Nt(mi),$C=Nt(yi),kC=Nt(vi),OC=Nt(wi),FC=Nt(_i),Pe=Hh;(mi&&Pe(new mi(new ArrayBuffer(1)))!=Cu||yi&&Pe(new yi)!=bu||vi&&Pe(vi.resolve())!=Eu||wi&&Pe(new wi)!=Tu||_i&&Pe(new _i)!=Su)&&(Pe=function(t){var e=Hh(t),n=e==xC?t.constructor:void 0,r=n?Nt(n):"";if(r)switch(r){case DC:return Cu;case $C:return bu;case kC:return Eu;case OC:return Tu;case FC:return Su}return e});var RC=Pe,Is=Bh,NC=qh,PC=jS,LC=hC,Iu=RC,Au=Oe,xu=br.exports,MC=Uh,jC=1,Du="[object Arguments]",$u="[object Array]",Hn="[object Object]",UC=Object.prototype,ku=UC.hasOwnProperty;function VC(t,e,n,r,s,i){var o=Au(t),a=Au(e),u=o?$u:Iu(t),c=a?$u:Iu(e);u=u==Du?Hn:u,c=c==Du?Hn:c;var l=u==Hn,h=c==Hn,f=u==c;if(f&&xu(t)){if(!xu(e))return!1;o=!0,l=!1}if(f&&!l)return i||(i=new Is),o||MC(t)?NC(t,e,n,r,s,i):PC(t,e,u,n,r,s,i);if(!(n&jC)){var d=l&&ku.call(t,"__wrapped__"),p=h&&ku.call(e,"__wrapped__");if(d||p){var v=d?t.value():t,_=p?e.value():e;return i||(i=new Is),s(v,_,n,r,i)}}return f?(i||(i=new Is),LC(t,e,n,r,s,i)):!1}var BC=VC,qC=BC,Ou=Dn;function zh(t,e,n,r,s){return t===e?!0:t==null||e==null||!Ou(t)&&!Ou(e)?t!==t&&e!==e:qC(t,e,n,r,zh,s)}var Kh=zh,HC=Bh,zC=Kh,KC=1,GC=2;function WC(t,e,n,r){var s=n.length,i=s,o=!r;if(t==null)return!i;for(t=Object(t);s--;){var a=n[s];if(o&&a[2]?a[1]!==t[a[0]]:!(a[0]in t))return!1}for(;++s<i;){a=n[s];var u=a[0],c=t[u],l=a[1];if(o&&a[2]){if(c===void 0&&!(u in t))return!1}else{var h=new HC;if(r)var f=r(c,l,u,t,e,h);if(!(f===void 0?zC(l,c,KC|GC,r,h):f))return!1}}return!0}var XC=WC,YC=So;function QC(t){return t===t&&!YC(t)}var Gh=QC,JC=Gh,ZC=Do;function eI(t){for(var e=ZC(t),n=e.length;n--;){var r=e[n],s=t[r];e[n]=[r,s,JC(s)]}return e}var tI=eI;function nI(t,e){return function(n){return n==null?!1:n[t]===e&&(e!==void 0||t in Object(n))}}var Wh=nI,rI=XC,sI=tI,iI=Wh;function oI(t){var e=sI(t);return e.length==1&&e[0][2]?iI(e[0][0],e[0][1]):function(n){return n===t||rI(n,t,e)}}var aI=oI,uI=Oh,cI=es;function lI(t,e){e=uI(e,t);for(var n=0,r=e.length;t!=null&&n<r;)t=t[cI(e[n++])];return n&&n==r?t:void 0}var Xh=lI,hI=Xh;function fI(t,e,n){var r=t==null?void 0:hI(t,e);return r===void 0?n:r}var dI=fI;function pI(t,e){return t!=null&&e in Object(t)}var gI=pI,mI=gI,yI=Ph;function vI(t,e){return t!=null&&yI(t,e,mI)}var wI=vI,_I=Kh,bI=dI,EI=wI,TI=To,SI=Gh,CI=Wh,II=es,AI=1,xI=2;function DI(t,e){return TI(t)&&SI(e)?CI(II(t),e):function(n){var r=bI(n,t);return r===void 0&&r===e?EI(n,t):_I(e,r,AI|xI)}}var $I=DI;function kI(t){return t}var OI=kI;function FI(t){return function(e){return e==null?void 0:e[t]}}var RI=FI,NI=Xh;function PI(t){return function(e){return NI(e,t)}}var LI=PI,MI=RI,jI=LI,UI=To,VI=es;function BI(t){return UI(t)?MI(VI(t)):jI(t)}var qI=BI,HI=aI,zI=$I,KI=OI,GI=Oe,WI=qI;function XI(t){return typeof t=="function"?t:t==null?KI:typeof t=="object"?GI(t)?zI(t[0],t[1]):HI(t):WI(t)}var Yh=XI,YI=jh,QI=Vh,JI=Yh;function ZI(t,e){var n={};return e=JI(e),QI(t,function(r,s,i){YI(n,s,e(r,s,i))}),n}var Qh=ZI;function rt(t){this._maxSize=t,this.clear()}rt.prototype.clear=function(){this._size=0,this._values=Object.create(null)};rt.prototype.get=function(t){return this._values[t]};rt.prototype.set=function(t,e){return this._size>=this._maxSize&&this.clear(),t in this._values||this._size++,this._values[t]=e};var eA=/[^.^\]^[]+|(?=\[\]|\.\.)/g,Jh=/^\d+$/,tA=/^\d/,nA=/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g,rA=/^\s*(['"]?)(.*?)(\1)\s*$/,$o=512,Fu=new rt($o),Ru=new rt($o),Nu=new rt($o),ts={Cache:rt,split:bi,normalizePath:As,setter:function(t){var e=As(t);return Ru.get(t)||Ru.set(t,function(r,s){for(var i=0,o=e.length,a=r;i<o-1;){var u=e[i];if(u==="__proto__"||u==="constructor"||u==="prototype")return r;a=a[e[i++]]}a[e[i]]=s})},getter:function(t,e){var n=As(t);return Nu.get(t)||Nu.set(t,function(s){for(var i=0,o=n.length;i<o;)if(s!=null||!e)s=s[n[i++]];else return;return s})},join:function(t){return t.reduce(function(e,n){return e+(ko(n)||Jh.test(n)?"["+n+"]":(e?".":"")+n)},"")},forEach:function(t,e,n){sA(Array.isArray(t)?t:bi(t),e,n)}};function As(t){return Fu.get(t)||Fu.set(t,bi(t).map(function(e){return e.replace(rA,"$2")}))}function bi(t){return t.match(eA)||[""]}function sA(t,e,n){var r=t.length,s,i,o,a;for(i=0;i<r;i++)s=t[i],s&&(aA(s)&&(s='"'+s+'"'),a=ko(s),o=!a&&/^\d+$/.test(s),e.call(n,s,a,o,i,t))}function ko(t){return typeof t=="string"&&t&&["'",'"'].indexOf(t.charAt(0))!==-1}function iA(t){return t.match(tA)&&!t.match(Jh)}function oA(t){return nA.test(t)}function aA(t){return!ko(t)&&(iA(t)||oA(t))}const zn={context:"$",value:"."};class Ae{constructor(e,n={}){if(this.key=void 0,this.isContext=void 0,this.isValue=void 0,this.isSibling=void 0,this.path=void 0,this.getter=void 0,this.map=void 0,typeof e!="string")throw new TypeError("ref must be a string, got: "+e);if(this.key=e.trim(),e==="")throw new TypeError("ref must be a non-empty string");this.isContext=this.key[0]===zn.context,this.isValue=this.key[0]===zn.value,this.isSibling=!this.isContext&&!this.isValue;let r=this.isContext?zn.context:this.isValue?zn.value:"";this.path=this.key.slice(r.length),this.getter=this.path&&ts.getter(this.path,!0),this.map=n.map}getValue(e,n,r){let s=this.isContext?r:this.isValue?e:n;return this.getter&&(s=this.getter(s||{})),this.map&&(s=this.map(s)),s}cast(e,n){return this.getValue(e,n==null?void 0:n.parent,n==null?void 0:n.context)}resolve(){return this}describe(){return{type:"ref",key:this.key}}toString(){return`Ref(${this.key})`}static isRef(e){return e&&e.__isYupRef}}Ae.prototype.__isYupRef=!0;function Tr(){return Tr=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Tr.apply(this,arguments)}function uA(t,e){if(t==null)return{};var n={},r=Object.keys(t),s,i;for(i=0;i<r.length;i++)s=r[i],!(e.indexOf(s)>=0)&&(n[s]=t[s]);return n}function Kn(t){function e(n,r){let{value:s,path:i="",label:o,options:a,originalValue:u,sync:c}=n,l=uA(n,["value","path","label","options","originalValue","sync"]);const{name:h,test:f,params:d,message:p}=t;let{parent:v,context:_}=a;function x(b){return Ae.isRef(b)?b.getValue(s,v,_):b}function F(b={}){const j=Qh(Tr({value:s,originalValue:u,label:o,path:b.path||i},d,b.params),x),de=new le(le.formatError(b.message||p,j),s,j.path,b.type||h);return de.params=j,de}let N=Tr({path:i,parent:v,type:h,createError:F,resolve:x,options:a,originalValue:u},l);if(!c){try{Promise.resolve(f.call(N,s,N)).then(b=>{le.isError(b)?r(b):b?r(null,b):r(F())}).catch(r)}catch(b){r(b)}return}let $;try{var H;if($=f.call(N,s,N),typeof((H=$)==null?void 0:H.then)=="function")throw new Error(`Validation test of type: "${N.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`)}catch(b){r(b);return}le.isError($)?r($):$?r(null,$):r(F())}return e.OPTIONS=t,e}let cA=t=>t.substr(0,t.length-1).substr(1);function lA(t,e,n,r=n){let s,i,o;return e?(ts.forEach(e,(a,u,c)=>{let l=u?cA(a):a;if(t=t.resolve({context:r,parent:s,value:n}),t.innerType){let h=c?parseInt(l,10):0;if(n&&h>=n.length)throw new Error(`Yup.reach cannot resolve an array item at index: ${a}, in the path: ${e}. because there is no value at that index. `);s=n,n=n&&n[h],t=t.innerType}if(!c){if(!t.fields||!t.fields[l])throw new Error(`The schema does not contain the path: ${e}. (failed at: ${o} which is a type: "${t._type}")`);s=n,n=n&&n[l],t=t.fields[l]}i=l,o=u?"["+a+"]":"."+a}),{schema:t,parent:s,parentPath:i}):{parent:s,parentPath:e,schema:t}}class Sr{constructor(){this.list=void 0,this.refs=void 0,this.list=new Set,this.refs=new Map}get size(){return this.list.size+this.refs.size}describe(){const e=[];for(const n of this.list)e.push(n);for(const[,n]of this.refs)e.push(n.describe());return e}toArray(){return Array.from(this.list).concat(Array.from(this.refs.values()))}resolveAll(e){return this.toArray().reduce((n,r)=>n.concat(Ae.isRef(r)?e(r):r),[])}add(e){Ae.isRef(e)?this.refs.set(e.key,e):this.list.add(e)}delete(e){Ae.isRef(e)?this.refs.delete(e.key):this.list.delete(e)}clone(){const e=new Sr;return e.list=new Set(this.list),e.refs=new Map(this.refs),e}merge(e,n){const r=this.clone();return e.list.forEach(s=>r.add(s)),e.refs.forEach(s=>r.add(s)),n.list.forEach(s=>r.delete(s)),n.refs.forEach(s=>r.delete(s)),r}}function pe(){return pe=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},pe.apply(this,arguments)}class he{constructor(e){this.deps=[],this.tests=void 0,this.transforms=void 0,this.conditions=[],this._mutate=void 0,this._typeError=void 0,this._whitelist=new Sr,this._blacklist=new Sr,this.exclusiveTests=Object.create(null),this.spec=void 0,this.tests=[],this.transforms=[],this.withMutation(()=>{this.typeError(Ne.notType)}),this.type=(e==null?void 0:e.type)||"mixed",this.spec=pe({strip:!1,strict:!1,abortEarly:!0,recursive:!0,nullable:!1,presence:"optional"},e==null?void 0:e.spec)}get _type(){return this.type}_typeCheck(e){return!0}clone(e){if(this._mutate)return e&&Object.assign(this.spec,e),this;const n=Object.create(Object.getPrototypeOf(this));return n.type=this.type,n._typeError=this._typeError,n._whitelistError=this._whitelistError,n._blacklistError=this._blacklistError,n._whitelist=this._whitelist.clone(),n._blacklist=this._blacklist.clone(),n.exclusiveTests=pe({},this.exclusiveTests),n.deps=[...this.deps],n.conditions=[...this.conditions],n.tests=[...this.tests],n.transforms=[...this.transforms],n.spec=li(pe({},this.spec,e)),n}label(e){let n=this.clone();return n.spec.label=e,n}meta(...e){if(e.length===0)return this.spec.meta;let n=this.clone();return n.spec.meta=Object.assign(n.spec.meta||{},e[0]),n}withMutation(e){let n=this._mutate;this._mutate=!0;let r=e(this);return this._mutate=n,r}concat(e){if(!e||e===this)return this;if(e.type!==this.type&&this.type!=="mixed")throw new TypeError(`You cannot \`concat()\` schema's of different types: ${this.type} and ${e.type}`);let n=this,r=e.clone();const s=pe({},n.spec,r.spec);return r.spec=s,r._typeError||(r._typeError=n._typeError),r._whitelistError||(r._whitelistError=n._whitelistError),r._blacklistError||(r._blacklistError=n._blacklistError),r._whitelist=n._whitelist.merge(e._whitelist,e._blacklist),r._blacklist=n._blacklist.merge(e._blacklist,e._whitelist),r.tests=n.tests,r.exclusiveTests=n.exclusiveTests,r.withMutation(i=>{e.tests.forEach(o=>{i.test(o.OPTIONS)})}),r.transforms=[...n.transforms,...r.transforms],r}isType(e){return this.spec.nullable&&e===null?!0:this._typeCheck(e)}resolve(e){let n=this;if(n.conditions.length){let r=n.conditions;n=n.clone(),n.conditions=[],n=r.reduce((s,i)=>i.resolve(s,e),n),n=n.resolve(e)}return n}cast(e,n={}){let r=this.resolve(pe({value:e},n)),s=r._cast(e,n);if(e!==void 0&&n.assert!==!1&&r.isType(s)!==!0){let i=hn(e),o=hn(s);throw new TypeError(`The value of ${n.path||"field"} could not be cast to a value that satisfies the schema type: "${r._type}". 

attempted value: ${i} 
`+(o!==i?`result of cast: ${o}`:""))}return s}_cast(e,n){let r=e===void 0?e:this.transforms.reduce((s,i)=>i.call(this,s,e,this),e);return r===void 0&&(r=this.getDefault()),r}_validate(e,n={},r){let{sync:s,path:i,from:o=[],originalValue:a=e,strict:u=this.spec.strict,abortEarly:c=this.spec.abortEarly}=n,l=e;u||(l=this._cast(l,pe({assert:!1},n)));let h={value:l,path:i,options:n,originalValue:a,schema:this,label:this.spec.label,sync:s,from:o},f=[];this._typeError&&f.push(this._typeError);let d=[];this._whitelistError&&d.push(this._whitelistError),this._blacklistError&&d.push(this._blacklistError),pi({args:h,value:l,path:i,sync:s,tests:f,endEarly:c},p=>{if(p)return void r(p,l);pi({tests:this.tests.concat(d),args:h,path:i,sync:s,value:l,endEarly:c},r)})}validate(e,n,r){let s=this.resolve(pe({},n,{value:e}));return typeof r=="function"?s._validate(e,n,r):new Promise((i,o)=>s._validate(e,n,(a,u)=>{a?o(a):i(u)}))}validateSync(e,n){let r=this.resolve(pe({},n,{value:e})),s;return r._validate(e,pe({},n,{sync:!0}),(i,o)=>{if(i)throw i;s=o}),s}isValid(e,n){return this.validate(e,n).then(()=>!0,r=>{if(le.isError(r))return!1;throw r})}isValidSync(e,n){try{return this.validateSync(e,n),!0}catch(r){if(le.isError(r))return!1;throw r}}_getDefault(){let e=this.spec.default;return e==null?e:typeof e=="function"?e.call(this):li(e)}getDefault(e){return this.resolve(e||{})._getDefault()}default(e){return arguments.length===0?this._getDefault():this.clone({default:e})}strict(e=!0){let n=this.clone();return n.spec.strict=e,n}_isPresent(e){return e!=null}defined(e=Ne.defined){return this.test({message:e,name:"defined",exclusive:!0,test(n){return n!==void 0}})}required(e=Ne.required){return this.clone({presence:"required"}).withMutation(n=>n.test({message:e,name:"required",exclusive:!0,test(r){return this.schema._isPresent(r)}}))}notRequired(){let e=this.clone({presence:"optional"});return e.tests=e.tests.filter(n=>n.OPTIONS.name!=="required"),e}nullable(e=!0){return this.clone({nullable:e!==!1})}transform(e){let n=this.clone();return n.transforms.push(e),n}test(...e){let n;if(e.length===1?typeof e[0]=="function"?n={test:e[0]}:n=e[0]:e.length===2?n={name:e[0],test:e[1]}:n={name:e[0],message:e[1],test:e[2]},n.message===void 0&&(n.message=Ne.default),typeof n.test!="function")throw new TypeError("`test` is a required parameters");let r=this.clone(),s=Kn(n),i=n.exclusive||n.name&&r.exclusiveTests[n.name]===!0;if(n.exclusive&&!n.name)throw new TypeError("Exclusive tests must provide a unique `name` identifying the test");return n.name&&(r.exclusiveTests[n.name]=!!n.exclusive),r.tests=r.tests.filter(o=>!(o.OPTIONS.name===n.name&&(i||o.OPTIONS.test===s.OPTIONS.test))),r.tests.push(s),r}when(e,n){!Array.isArray(e)&&typeof e!="string"&&(n=e,e=".");let r=this.clone(),s=Mh(e).map(i=>new Ae(i));return s.forEach(i=>{i.isSibling&&r.deps.push(i.key)}),r.conditions.push(new QE(s,n)),r}typeError(e){let n=this.clone();return n._typeError=Kn({message:e,name:"typeError",test(r){return r!==void 0&&!this.schema.isType(r)?this.createError({params:{type:this.schema._type}}):!0}}),n}oneOf(e,n=Ne.oneOf){let r=this.clone();return e.forEach(s=>{r._whitelist.add(s),r._blacklist.delete(s)}),r._whitelistError=Kn({message:n,name:"oneOf",test(s){if(s===void 0)return!0;let i=this.schema._whitelist,o=i.resolveAll(this.resolve);return o.includes(s)?!0:this.createError({params:{values:i.toArray().join(", "),resolved:o}})}}),r}notOneOf(e,n=Ne.notOneOf){let r=this.clone();return e.forEach(s=>{r._blacklist.add(s),r._whitelist.delete(s)}),r._blacklistError=Kn({message:n,name:"notOneOf",test(s){let i=this.schema._blacklist,o=i.resolveAll(this.resolve);return o.includes(s)?this.createError({params:{values:i.toArray().join(", "),resolved:o}}):!0}}),r}strip(e=!0){let n=this.clone();return n.spec.strip=e,n}describe(){const e=this.clone(),{label:n,meta:r}=e.spec;return{meta:r,label:n,type:e.type,oneOf:e._whitelist.describe(),notOneOf:e._blacklist.describe(),tests:e.tests.map(i=>({name:i.OPTIONS.name,params:i.OPTIONS.params})).filter((i,o,a)=>a.findIndex(u=>u.name===i.name)===o)}}}he.prototype.__isYupSchema__=!0;for(const t of["validate","validateSync"])he.prototype[`${t}At`]=function(e,n,r={}){const{parent:s,parentPath:i,schema:o}=lA(this,e,n,r.context);return o[t](s&&s[i],pe({},r,{parent:s,path:e}))};for(const t of["equals","is"])he.prototype[t]=he.prototype.oneOf;for(const t of["not","nope"])he.prototype[t]=he.prototype.notOneOf;he.prototype.optional=he.prototype.notRequired;const me=t=>t==null;let hA=/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i,fA=/^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,dA=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,pA=t=>me(t)||t===t.trim(),gA={}.toString();function mA(){return new Zh}class Zh extends he{constructor(){super({type:"string"});this.withMutation(()=>{this.transform(function(e){if(this.isType(e)||Array.isArray(e))return e;const n=e!=null&&e.toString?e.toString():e;return n===gA?e:n})})}_typeCheck(e){return e instanceof String&&(e=e.valueOf()),typeof e=="string"}_isPresent(e){return super._isPresent(e)&&!!e.length}length(e,n=ge.length){return this.test({message:n,name:"length",exclusive:!0,params:{length:e},test(r){return me(r)||r.length===this.resolve(e)}})}min(e,n=ge.min){return this.test({message:n,name:"min",exclusive:!0,params:{min:e},test(r){return me(r)||r.length>=this.resolve(e)}})}max(e,n=ge.max){return this.test({name:"max",exclusive:!0,message:n,params:{max:e},test(r){return me(r)||r.length<=this.resolve(e)}})}matches(e,n){let r=!1,s,i;return n&&(typeof n=="object"?{excludeEmptyString:r=!1,message:s,name:i}=n:s=n),this.test({name:i||"matches",message:s||ge.matches,params:{regex:e},test:o=>me(o)||o===""&&r||o.search(e)!==-1})}email(e=ge.email){return this.matches(hA,{name:"email",message:e,excludeEmptyString:!0})}url(e=ge.url){return this.matches(fA,{name:"url",message:e,excludeEmptyString:!0})}uuid(e=ge.uuid){return this.matches(dA,{name:"uuid",message:e,excludeEmptyString:!1})}ensure(){return this.default("").transform(e=>e===null?"":e)}trim(e=ge.trim){return this.transform(n=>n!=null?n.trim():n).test({message:e,name:"trim",test:pA})}lowercase(e=ge.lowercase){return this.transform(n=>me(n)?n:n.toLowerCase()).test({message:e,name:"string_case",exclusive:!0,test:n=>me(n)||n===n.toLowerCase()})}uppercase(e=ge.uppercase){return this.transform(n=>me(n)?n:n.toUpperCase()).test({message:e,name:"string_case",exclusive:!0,test:n=>me(n)||n===n.toUpperCase()})}}mA.prototype=Zh.prototype;var yA=/^(\d{4}|[+\-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,\.](\d{1,}))?)?(?:(Z)|([+\-])(\d{2})(?::?(\d{2}))?)?)?$/;function vA(t){var e=[1,4,5,6,7,10,11],n=0,r,s;if(s=yA.exec(t)){for(var i=0,o;o=e[i];++i)s[o]=+s[o]||0;s[2]=(+s[2]||1)-1,s[3]=+s[3]||1,s[7]=s[7]?String(s[7]).substr(0,3):0,(s[8]===void 0||s[8]==="")&&(s[9]===void 0||s[9]==="")?r=+new Date(s[1],s[2],s[3],s[4],s[5],s[6],s[7]):(s[8]!=="Z"&&s[9]!==void 0&&(n=s[10]*60+s[11],s[9]==="+"&&(n=0-n)),r=Date.UTC(s[1],s[2],s[3],s[4],s[5]+n,s[6],s[7]))}else r=Date.parse?Date.parse(t):NaN;return r}let ef=new Date(""),wA=t=>Object.prototype.toString.call(t)==="[object Date]";class _A extends he{constructor(){super({type:"date"});this.withMutation(()=>{this.transform(function(e){return this.isType(e)?e:(e=vA(e),isNaN(e)?ef:new Date(e))})})}_typeCheck(e){return wA(e)&&!isNaN(e.getTime())}prepareParam(e,n){let r;if(Ae.isRef(e))r=e;else{let s=this.cast(e);if(!this._typeCheck(s))throw new TypeError(`\`${n}\` must be a Date or a value that can be \`cast()\` to a Date`);r=s}return r}min(e,n=hi.min){let r=this.prepareParam(e,"min");return this.test({message:n,name:"min",exclusive:!0,params:{min:e},test(s){return me(s)||s>=this.resolve(r)}})}max(e,n=hi.max){let r=this.prepareParam(e,"max");return this.test({message:n,name:"max",exclusive:!0,params:{max:e},test(s){return me(s)||s<=this.resolve(r)}})}}_A.INVALID_DATE=ef;function bA(t,e,n,r){var s=-1,i=t==null?0:t.length;for(r&&i&&(n=t[++s]);++s<i;)n=e(n,t[s],s,t);return n}var EA=bA;function TA(t){return function(e){return t==null?void 0:t[e]}}var SA=TA,CA=SA,IA={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},AA=CA(IA),xA=AA,DA=xA,$A=$n,kA=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,OA="\\u0300-\\u036f",FA="\\ufe20-\\ufe2f",RA="\\u20d0-\\u20ff",NA=OA+FA+RA,PA="["+NA+"]",LA=RegExp(PA,"g");function MA(t){return t=$A(t),t&&t.replace(kA,DA).replace(LA,"")}var jA=MA,UA=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function VA(t){return t.match(UA)||[]}var BA=VA,qA=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function HA(t){return qA.test(t)}var zA=HA,tf="\\ud800-\\udfff",KA="\\u0300-\\u036f",GA="\\ufe20-\\ufe2f",WA="\\u20d0-\\u20ff",XA=KA+GA+WA,nf="\\u2700-\\u27bf",rf="a-z\\xdf-\\xf6\\xf8-\\xff",YA="\\xac\\xb1\\xd7\\xf7",QA="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",JA="\\u2000-\\u206f",ZA=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",sf="A-Z\\xc0-\\xd6\\xd8-\\xde",ex="\\ufe0e\\ufe0f",of=YA+QA+JA+ZA,af="['\u2019]",Pu="["+of+"]",tx="["+XA+"]",uf="\\d+",nx="["+nf+"]",cf="["+rf+"]",lf="[^"+tf+of+uf+nf+rf+sf+"]",rx="\\ud83c[\\udffb-\\udfff]",sx="(?:"+tx+"|"+rx+")",ix="[^"+tf+"]",hf="(?:\\ud83c[\\udde6-\\uddff]){2}",ff="[\\ud800-\\udbff][\\udc00-\\udfff]",ot="["+sf+"]",ox="\\u200d",Lu="(?:"+cf+"|"+lf+")",ax="(?:"+ot+"|"+lf+")",Mu="(?:"+af+"(?:d|ll|m|re|s|t|ve))?",ju="(?:"+af+"(?:D|LL|M|RE|S|T|VE))?",df=sx+"?",pf="["+ex+"]?",ux="(?:"+ox+"(?:"+[ix,hf,ff].join("|")+")"+pf+df+")*",cx="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",lx="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",hx=pf+df+ux,fx="(?:"+[nx,hf,ff].join("|")+")"+hx,dx=RegExp([ot+"?"+cf+"+"+Mu+"(?="+[Pu,ot,"$"].join("|")+")",ax+"+"+ju+"(?="+[Pu,ot+Lu,"$"].join("|")+")",ot+"?"+Lu+"+"+Mu,ot+"+"+ju,lx,cx,uf,fx].join("|"),"g");function px(t){return t.match(dx)||[]}var gx=px,mx=BA,yx=zA,vx=$n,wx=gx;function _x(t,e,n){return t=vx(t),e=n?void 0:e,e===void 0?yx(t)?wx(t):mx(t):t.match(e)||[]}var bx=_x,Ex=EA,Tx=jA,Sx=bx,Cx="['\u2019]",Ix=RegExp(Cx,"g");function Ax(t){return function(e){return Ex(Sx(Tx(e).replace(Ix,"")),t,"")}}var gf=Ax,xx=gf,Dx=xx(function(t,e,n){return t+(n?"_":"")+e.toLowerCase()}),Uu=Dx;function $x(t,e,n){var r=-1,s=t.length;e<0&&(e=-e>s?0:s+e),n=n>s?s:n,n<0&&(n+=s),s=e>n?0:n-e>>>0,e>>>=0;for(var i=Array(s);++r<s;)i[r]=t[r+e];return i}var kx=$x,Ox=kx;function Fx(t,e,n){var r=t.length;return n=n===void 0?r:n,!e&&n>=r?t:Ox(t,e,n)}var Rx=Fx,Nx="\\ud800-\\udfff",Px="\\u0300-\\u036f",Lx="\\ufe20-\\ufe2f",Mx="\\u20d0-\\u20ff",jx=Px+Lx+Mx,Ux="\\ufe0e\\ufe0f",Vx="\\u200d",Bx=RegExp("["+Vx+Nx+jx+Ux+"]");function qx(t){return Bx.test(t)}var mf=qx;function Hx(t){return t.split("")}var zx=Hx,yf="\\ud800-\\udfff",Kx="\\u0300-\\u036f",Gx="\\ufe20-\\ufe2f",Wx="\\u20d0-\\u20ff",Xx=Kx+Gx+Wx,Yx="\\ufe0e\\ufe0f",Qx="["+yf+"]",Ei="["+Xx+"]",Ti="\\ud83c[\\udffb-\\udfff]",Jx="(?:"+Ei+"|"+Ti+")",vf="[^"+yf+"]",wf="(?:\\ud83c[\\udde6-\\uddff]){2}",_f="[\\ud800-\\udbff][\\udc00-\\udfff]",Zx="\\u200d",bf=Jx+"?",Ef="["+Yx+"]?",eD="(?:"+Zx+"(?:"+[vf,wf,_f].join("|")+")"+Ef+bf+")*",tD=Ef+bf+eD,nD="(?:"+[vf+Ei+"?",Ei,wf,_f,Qx].join("|")+")",rD=RegExp(Ti+"(?="+Ti+")|"+nD+tD,"g");function sD(t){return t.match(rD)||[]}var iD=sD,oD=zx,aD=mf,uD=iD;function cD(t){return aD(t)?uD(t):oD(t)}var lD=cD,hD=Rx,fD=mf,dD=lD,pD=$n;function gD(t){return function(e){e=pD(e);var n=fD(e)?dD(e):void 0,r=n?n[0]:e.charAt(0),s=n?hD(n,1).join(""):e.slice(1);return r[t]()+s}}var mD=gD,yD=mD,vD=yD("toUpperCase"),wD=vD,_D=$n,bD=wD;function ED(t){return bD(_D(t).toLowerCase())}var TD=ED,SD=TD,CD=gf,ID=CD(function(t,e,n){return e=e.toLowerCase(),t+(n?SD(e):e)}),AD=ID,xD=jh,DD=Vh,$D=Yh;function kD(t,e){var n={};return e=$D(e),DD(t,function(r,s,i){xD(n,e(r,s,i),r)}),n}var OD=kD,Oo={exports:{}};Oo.exports=function(t){return Tf(FD(t),t)};Oo.exports.array=Tf;function Tf(t,e){var n=t.length,r=new Array(n),s={},i=n,o=RD(e),a=ND(t);for(e.forEach(function(c){if(!a.has(c[0])||!a.has(c[1]))throw new Error("Unknown node. There is an unknown node in the supplied edges.")});i--;)s[i]||u(t[i],i,new Set);return r;function u(c,l,h){if(h.has(c)){var f;try{f=", node was:"+JSON.stringify(c)}catch{f=""}throw new Error("Cyclic dependency"+f)}if(!a.has(c))throw new Error("Found unknown node. Make sure to provided all involved nodes. Unknown node: "+JSON.stringify(c));if(!s[l]){s[l]=!0;var d=o.get(c)||new Set;if(d=Array.from(d),l=d.length){h.add(c);do{var p=d[--l];u(p,a.get(p),h)}while(l);h.delete(c)}r[--n]=c}}}function FD(t){for(var e=new Set,n=0,r=t.length;n<r;n++){var s=t[n];e.add(s[0]),e.add(s[1])}return Array.from(e)}function RD(t){for(var e=new Map,n=0,r=t.length;n<r;n++){var s=t[n];e.has(s[0])||e.set(s[0],new Set),e.has(s[1])||e.set(s[1],new Set),e.get(s[0]).add(s[1])}return e}function ND(t){for(var e=new Map,n=0,r=t.length;n<r;n++)e.set(t[n],n);return e}var PD=Oo.exports;function LD(t,e=[]){let n=[],r=new Set,s=new Set(e.map(([o,a])=>`${o}-${a}`));function i(o,a){let u=ts.split(o)[0];r.add(u),s.has(`${a}-${u}`)||n.push([a,u])}for(const o in t)if(_r(t,o)){let a=t[o];r.add(o),Ae.isRef(a)&&a.isSibling?i(a.path,o):Lh(a)&&"deps"in a&&a.deps.forEach(u=>i(u,o))}return PD.array(Array.from(r),n).reverse()}function Vu(t,e){let n=1/0;return t.some((r,s)=>{var i;if(((i=e.path)==null?void 0:i.indexOf(r))!==-1)return n=s,!0}),n}function Sf(t){return(e,n)=>Vu(t,e)-Vu(t,n)}function ct(){return ct=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ct.apply(this,arguments)}let Bu=t=>Object.prototype.toString.call(t)==="[object Object]";function MD(t,e){let n=Object.keys(t.fields);return Object.keys(e).filter(r=>n.indexOf(r)===-1)}const jD=Sf([]);class Cf extends he{constructor(e){super({type:"object"});this.fields=Object.create(null),this._sortErrors=jD,this._nodes=[],this._excludedEdges=[],this.withMutation(()=>{this.transform(function(r){if(typeof r=="string")try{r=JSON.parse(r)}catch{r=null}return this.isType(r)?r:null}),e&&this.shape(e)})}_typeCheck(e){return Bu(e)||typeof e=="function"}_cast(e,n={}){var r;let s=super._cast(e,n);if(s===void 0)return this.getDefault();if(!this._typeCheck(s))return s;let i=this.fields,o=(r=n.stripUnknown)!=null?r:this.spec.noUnknown,a=this._nodes.concat(Object.keys(s).filter(h=>this._nodes.indexOf(h)===-1)),u={},c=ct({},n,{parent:u,__validating:n.__validating||!1}),l=!1;for(const h of a){let f=i[h],d=_r(s,h);if(f){let p,v=s[h];c.path=(n.path?`${n.path}.`:"")+h,f=f.resolve({value:v,context:n.context,parent:u});let _="spec"in f?f.spec:void 0,x=_==null?void 0:_.strict;if(_!=null&&_.strip){l=l||h in s;continue}p=!n.__validating||!x?f.cast(s[h],c):s[h],p!==void 0&&(u[h]=p)}else d&&!o&&(u[h]=s[h]);u[h]!==s[h]&&(l=!0)}return l?u:s}_validate(e,n={},r){let s=[],{sync:i,from:o=[],originalValue:a=e,abortEarly:u=this.spec.abortEarly,recursive:c=this.spec.recursive}=n;o=[{schema:this,value:a},...o],n.__validating=!0,n.originalValue=a,n.from=o,super._validate(e,n,(l,h)=>{if(l){if(!le.isError(l)||u)return void r(l,h);s.push(l)}if(!c||!Bu(h)){r(s[0]||null,h);return}a=a||h;let f=this._nodes.map(d=>(p,v)=>{let _=d.indexOf(".")===-1?(n.path?`${n.path}.`:"")+d:`${n.path||""}["${d}"]`,x=this.fields[d];if(x&&"validate"in x){x.validate(h[d],ct({},n,{path:_,from:o,strict:!0,parent:h,originalValue:a[d]}),v);return}v(null)});pi({sync:i,tests:f,value:h,errors:s,endEarly:u,sort:this._sortErrors,path:n.path},r)})}clone(e){const n=super.clone(e);return n.fields=ct({},this.fields),n._nodes=this._nodes,n._excludedEdges=this._excludedEdges,n._sortErrors=this._sortErrors,n}concat(e){let n=super.concat(e),r=n.fields;for(let[s,i]of Object.entries(this.fields)){const o=r[s];o===void 0?r[s]=i:o instanceof he&&i instanceof he&&(r[s]=i.concat(o))}return n.withMutation(()=>n.shape(r,this._excludedEdges))}getDefaultFromShape(){let e={};return this._nodes.forEach(n=>{const r=this.fields[n];e[n]="default"in r?r.getDefault():void 0}),e}_getDefault(){if("default"in this.spec)return super._getDefault();if(!!this._nodes.length)return this.getDefaultFromShape()}shape(e,n=[]){let r=this.clone(),s=Object.assign(r.fields,e);return r.fields=s,r._sortErrors=Sf(Object.keys(s)),n.length&&(Array.isArray(n[0])||(n=[n]),r._excludedEdges=[...r._excludedEdges,...n]),r._nodes=LD(s,r._excludedEdges),r}pick(e){const n={};for(const r of e)this.fields[r]&&(n[r]=this.fields[r]);return this.clone().withMutation(r=>(r.fields={},r.shape(n)))}omit(e){const n=this.clone(),r=n.fields;n.fields={};for(const s of e)delete r[s];return n.withMutation(()=>n.shape(r))}from(e,n,r){let s=ts.getter(e,!0);return this.transform(i=>{if(i==null)return i;let o=i;return _r(i,e)&&(o=ct({},i),r||delete o[e],o[n]=s(i)),o})}noUnknown(e=!0,n=fi.noUnknown){typeof e=="string"&&(n=e,e=!0);let r=this.test({name:"noUnknown",exclusive:!0,message:n,test(s){if(s==null)return!0;const i=MD(this.schema,s);return!e||i.length===0||this.createError({params:{unknown:i.join(", ")}})}});return r.spec.noUnknown=e,r}unknown(e=!0,n=fi.noUnknown){return this.noUnknown(!e,n)}transformKeys(e){return this.transform(n=>n&&OD(n,(r,s)=>e(s)))}camelCase(){return this.transformKeys(AD)}snakeCase(){return this.transformKeys(Uu)}constantCase(){return this.transformKeys(e=>Uu(e).toUpperCase())}describe(){let e=super.describe();return e.fields=Qh(this.fields,n=>n.describe()),e}}function UD(t){return new Cf(t)}UD.prototype=Cf.prototype;export{mA as $,qf as A,nr as B,c$ as C,Pf as D,Be as E,GD as F,d$ as G,h$ as H,y$ as I,qD as J,zD as K,KD as L,HD as M,l$ as N,m$ as O,f$ as P,t$ as Q,BD as R,rd as S,s$ as T,i$ as U,p$ as V,g$ as W,e$ as X,XD as Y,YD as Z,UD as _,Wu as a,w$ as a0,jo as a1,v$ as a2,Mf as b,QD as c,rr as d,Lf as e,Ku as f,Vf as g,ZD as h,nd as i,a$ as j,WD as k,Lo as l,u$ as m,JD as n,Zf as o,Jf as p,o$ as q,Xf as r,Hu as s,Si as t,Qf as u,ed as v,Yf as w,Qu as x,r$ as y,n$ as z};
