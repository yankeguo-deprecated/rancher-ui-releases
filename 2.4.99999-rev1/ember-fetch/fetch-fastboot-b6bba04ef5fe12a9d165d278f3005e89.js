define("fetch",["exports"],function(e){var t,r,o=/^https?:\/\//,s=/^\/\//,n=FastBoot.require("abortcontroller-polyfill/dist/cjs-ponyfill"),i=FastBoot.require("node-fetch")
function f(e,t,r){if(s.test(e))e=r+e
else if(!o.test(e)){if(!r)throw new Error("You are using using fetch with a path-relative URL, but host is missing from Fastboot request. Please set the hostWhitelist property in your environment.js.")
e=t+"//"+r+e}return e}e.default=function(e,o){return e&&e.href?e.url=f(e.href,r,t):"string"==typeof e&&(e=f(e,r,t)),i(e,o)},e.setupFastboot=function(e,o){r=e,t=o},e.Request=class extends i.Request{constructor(e,o){"string"==typeof e?e=f(e,r,t):e&&e.href&&(e=f(e.href,r,t)),super(e,o)}},e.Headers=i.Headers,e.Response=i.Response,e.AbortController=n.AbortController}),define("fetch/ajax",["exports"],function(){throw new Error("You included `fetch/ajax` but it was renamed to `ember-fetch/ajax`")})

//# sourceMappingURL=fetch-fastboot-911782258c3b2cbc202f99633301e3d9.map