"use strict";var precacheConfig=[["./index.html","6f5c139e7077a4d842e4aefee694152b"],["./static/css/main.65027555.css","41e5e45b9b5d9ecaa09b72c11eed3386"],["./static/js/0.1077dee5.chunk.js","f2a83551ce93a39349b05a9f56cfc23e"],["./static/js/1.437a3cb9.chunk.js","aa4722765ade846a188bbd855734dfd8"],["./static/js/2.05ec05e6.chunk.js","047a1c49de86e75053a079a44ec6da32"],["./static/js/3.b6abf72c.chunk.js","0da1279266ca0bf02c378ef6141d68a1"],["./static/js/4.b9e49aa2.chunk.js","0ddaf152768d35d1867e2dd0483a76d6"],["./static/js/5.9c09a8ff.chunk.js","b46110fa59e296b60242447d36ce2f29"],["./static/js/main.94db6525.js","a9dd7210e14c947d01d81750566f805a"],["./static/media/SF-UI-Display-Black.61f8219b.otf","61f8219b2e668d1a7904e089a2cb5e64"],["./static/media/SF-UI-Text-Light.287e8b35.otf","287e8b35ca1ddb5d79a6794fbc571c39"],["./static/media/SF-UI-Text-Regular.af70caa8.otf","af70caa8b33a56d2b61ab19fc6e4ec56"],["./static/media/belo-animation-alter.dde90366.png","dde903663b6984a5e4a802aec068cc58"],["./static/media/belo-animation.aab26008.png","aab26008bf268606ce67d24e783483c5"],["./static/media/lbi_project_banner@2x.e6c3007d.jpg","e6c3007dc46d96c38ab9f6e37dd5b07a"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var r="./index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});