if(!self.define){let e,i={};const s=(s,r)=>(s=new URL(s+".js",r).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(r,n)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let t={};const f=e=>s(e,o),c={module:{uri:o},exports:t,require:f};i[o]=Promise.all(r.map((e=>c[e]||f(e)))).then((e=>(n(...e),t)))}}define(["./workbox-f4fe0df5"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"app.js",revision:"6258d68638f73f1bdb7346730dcf222a"},{url:"app.webmanifest",revision:"891658d9dc0a941504c65a698ae67d0d"},{url:"example.html",revision:"6e1bb6264aec4ca8a9a5533a2c6f11a4"},{url:"icons/192.png",revision:"29f18e8179e971b997a169916484e290"},{url:"icons/512.png",revision:"d959be4e2745e76fce469c56fc0fc115"},{url:"index.html",revision:"45023effa0b36206cb03697963e0b047"},{url:"style.css",revision:"d3a5f899fcb4f7e63d8be412250d95eb"},{url:"sw2.js",revision:"14b7d4819ee0a2d5f0665ef38749a031"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map
