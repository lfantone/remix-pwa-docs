var l=(e,t={})=>{let s=typeof t=="number"?{status:t}:t,a=new Headers(s.headers);return a.has("Content-Type")||a.set("Content-Type","application/json; charset=utf-8"),new Response(JSON.stringify(e),{...s,headers:a})};function i(...e){}async function x(e){i("Service worker installed")}async function C(e){i("Service worker activated")}var p="asset-cache",y="data-cache",g="document-cache",q=["/build/","/icons/"];async function k(e){console.debug("sync manifest");let t=new Map,[s,a,c]=await Promise.all([caches.open(y),caches.open(g),caches.open(p)]),d=e.data.manifest,b=Object.values(d.routes);for(let n of b){if(n.id.includes("$")){console.debug("parametrized route",n.id);continue}w(n)}await Promise.all(t.values());function w(n){let r=f(n);if(n.hasLoader&&R(n),n.module&&t.set(n.module,m(n.module)),n.imports)for(let o of n.imports)i(n.index,n.parentId,n.imports,n.module),!t.has(o)&&t.set(o,m(o));t.set(r,a.add(r).catch(o=>{console.debug(`Failed to cache document ${r}:`,o)}))}function R(n){let r=f(n),S=`?${new URLSearchParams({_data:n.id}).toString()}`,u=r+S;t.has(u)||(console.debug("Caching data for",u),t.set(u,s.add(u).catch(E=>{console.debug(`Failed to cache data for ${u}:`,E)})))}async function m(n){if(!await c.match(n))return console.debug("Caching asset",n),c.add(n).catch(r=>{console.debug(`Failed to cache asset ${n}:`,r)})}function f(n){let r="";if(n.path&&n.path.length>0&&(r="/"+n.path),n.parentId){let o=f(d.routes[n.parentId]);o&&(r=o+r)}return r}}async function _(e){let t=new URL(e.request.url);if(L(e.request)){let s=await caches.match(e.request,{cacheName:p,ignoreVary:!0,ignoreSearch:!0});if(s)return i("Serving asset from cache",t.pathname),s;i("Serving asset from network",t.pathname);let a=await fetch(e.request);return a.status===200&&await(await caches.open(p)).put(e.request,a.clone()),a}if(A(e.request))try{i("Serving data from network",t.pathname+t.search);let s=await fetch(e.request.clone());return await(await caches.open(y)).put(e.request,s.clone()),s}catch{i("Serving data from network failed, falling back to cache",t.pathname+t.search);let a=await caches.match(e.request);return a?(a.headers.set("X-Remix-Worker","yes"),a):l({message:"Network Error"},{status:500,headers:{"X-Remix-Catch":"yes","X-Remix-Worker":"yes"}})}if(F(e.request)){let s=new URL(e.request.url);return console.debug("Serving document from network",s.pathname),caches.open(g).then(a=>fetch(e.request.clone()).then(c=>(a.put(e.request,c.clone()),c)).catch(async c=>{console.debug("Serving document from network failed, falling back to cache",s.pathname);let d=await caches.match(e.request);if(!d)throw c;return d}))}return fetch(e.request.clone())}var P=e=>{let t=JSON.parse(e==null?void 0:e.data.text()),s=t.title?t.title:"Remix PWA",a={body:t.body?t.body:"Notification Body Text",icon:t.icon?t.icon:"/icons/android-icon-192x192.png",badge:t.badge?t.badge:"/icons/android-icon-48x48.png",dir:t.dir?t.dir:"auto",image:t.image?t.image:void 0,silent:t.silent?t.silent:!1};self.registration.showNotification(s,{...a})};function h(e,t){return t.includes(e.method.toLowerCase())}function L(e){return h(e,["get"])&&q.some(t=>e.url.startsWith(t))}function A(e){let t=new URL(e.url);return h(e,["get"])&&t.searchParams.get("_data")}function F(e){return h(e,["get"])&&e.mode==="navigate"}self.addEventListener("install",e=>{e.waitUntil(x(e).then(()=>self.skipWaiting()))});self.addEventListener("activate",e=>{e.waitUntil(C(e).then(()=>self.clients.claim()))});self.addEventListener("message",e=>{e.waitUntil(k(e))});self.addEventListener("push",e=>{e.waitUntil(P(e))});self.addEventListener("fetch",e=>{e.respondWith((async()=>{let t={};try{t.response=await _(e)}catch(s){t.error=s}return T(e,t)})())});async function T(e,{error:t,response:s}){return s}
/*! Bundled license information:

@remix-run/server-runtime/dist/esm/responses.js:
  (**
   * @remix-run/server-runtime v1.12.0
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/server-runtime/dist/esm/index.js:
  (**
   * @remix-run/server-runtime v1.12.0
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)
*/
