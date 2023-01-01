// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t,e=Object.defineProperty,n=Object.prototype,o=n.toString,u=n.__defineGetter__,i=n.__defineSetter__,a=n.__lookupGetter__,c=n.__lookupSetter__;t=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,t,e){var f,l,s,p;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((l="value"in e)&&(a.call(r,t)||c.call(r,t)?(f=r.__proto__,r.__proto__=n,delete r[t],r[t]=e.value,r.__proto__=f):r[t]=e.value),s="get"in e,p="set"in e,l&&(s||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return s&&u&&u.call(r,t,e.get),p&&i&&i.call(r,t,e.set),r};var f=t;function l(r,t,e){f(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}function s(r){var t=r.default;if("function"==typeof t){var e=function(){return t.apply(this,arguments)};e.prototype=t.prototype}else e={};return Object.defineProperty(e,"__esModule",{value:!0}),Object.keys(r).forEach((function(t){var n=Object.getOwnPropertyDescriptor(r,t);Object.defineProperty(e,t,n.get?n:{enumerable:!0,get:function(){return r[t]}})})),e}function p(r,t){for(var e=0,n=r.length-1;n>=0;n--){var o=r[n];"."===o?r.splice(n,1):".."===o?(r.splice(n,1),e++):e&&(r.splice(n,1),e--)}if(t)for(;e--;e)r.unshift("..");return r}var y=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,b=function(r){return y.exec(r).slice(1)};function v(){for(var r="",t=!1,e=arguments.length-1;e>=-1&&!t;e--){var n=e>=0?arguments[e]:"/";if("string"!=typeof n)throw new TypeError("Arguments to path.resolve must be strings");n&&(r=n+"/"+r,t="/"===n.charAt(0))}return(t?"/":"")+(r=p(E(r.split("/"),(function(r){return!!r})),!t).join("/"))||"."}function d(r){var t=g(r),e="/"===A(r,-1);return(r=p(E(r.split("/"),(function(r){return!!r})),!t).join("/"))||t||(r="."),r&&e&&(r+="/"),(t?"/":"")+r}function g(r){return"/"===r.charAt(0)}function j(){var r=Array.prototype.slice.call(arguments,0);return d(E(r,(function(r,t){if("string"!=typeof r)throw new TypeError("Arguments to path.join must be strings");return r})).join("/"))}function m(r,t){function e(r){for(var t=0;t<r.length&&""===r[t];t++);for(var e=r.length-1;e>=0&&""===r[e];e--);return t>e?[]:r.slice(t,e-t+1)}r=v(r).substr(1),t=v(t).substr(1);for(var n=e(r.split("/")),o=e(t.split("/")),u=Math.min(n.length,o.length),i=u,a=0;a<u;a++)if(n[a]!==o[a]){i=a;break}var c=[];for(a=i;a<n.length;a++)c.push("..");return(c=c.concat(o.slice(i))).join("/")}function h(r){var t=b(r),e=t[0],n=t[1];return e||n?(n&&(n=n.substr(0,n.length-1)),e+n):"."}function _(r,t){var e=b(r)[2];return t&&e.substr(-1*t.length)===t&&(e=e.substr(0,e.length-t.length)),e}function w(r){return b(r)[3]}var O={extname:w,basename:_,dirname:h,sep:"/",delimiter:":",relative:m,join:j,isAbsolute:g,normalize:d,resolve:v};function E(r,t){if(r.filter)return r.filter(t);for(var e=[],n=0;n<r.length;n++)t(r[n],n,r)&&e.push(r[n]);return e}var A="b"==="ab".substr(-1)?function(r,t,e){return r.substr(t,e)}:function(r,t,e){return t<0&&(t=r.length+t),r.substr(t,e)},S=s(Object.freeze({__proto__:null,resolve:v,normalize:d,isAbsolute:g,join:j,relative:m,sep:"/",delimiter:":",dirname:h,basename:_,extname:w,default:O}));var P=/./;function T(r){return"boolean"==typeof r}var k="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function x(){return k&&"symbol"==typeof Symbol.toStringTag}var B=Object.prototype.toString;var N=Object.prototype.hasOwnProperty;var q,C="function"==typeof Symbol?Symbol.toStringTag:"";q=x()?function(r){var t,e,n,o,u;if(null==r)return B.call(r);e=r[C],u=C,t=null!=(o=r)&&N.call(o,u);try{r[C]=void 0}catch(t){return B.call(r)}return n=B.call(r),t?r[C]=e:delete r[C],n}:function(r){return B.call(r)};var M=q,V=Boolean.prototype.toString;var z=x();function F(r){return"object"==typeof r&&(r instanceof Boolean||(z?function(r){try{return V.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===M(r)))}function G(r){return T(r)||F(r)}function L(){return new Function("return this;")()}l(G,"isPrimitive",T),l(G,"isObject",F);var R="object"==typeof self?self:null,D="object"==typeof window?window:null,I="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},J="object"==typeof I?I:null;var U=function(r){if(arguments.length){if(!T(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return L()}if(R)return R;if(D)return D;if(J)return J;throw new Error("unexpected error. Unable to resolve global object.")}(),X=U.document&&U.document.childNodes,$=Int8Array;function H(){return/^\s*function\s*([^(]*)/i}var K,Q=/^\s*function\s*([^(]*)/i;l(H,"REGEXP",Q),K=Array.isArray?Array.isArray:function(r){return"[object Array]"===M(r)};var W=K;function Y(r){return null!==r&&"object"==typeof r}var Z=function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(t){var e,n;if(!W(t))return!1;if(0===(e=t.length))return!1;for(n=0;n<e;n++)if(!1===r(t[n]))return!1;return!0}}(Y);function rr(r){var t,e,n,o;if(("Object"===(e=M(r).slice(8,-1))||"Error"===e)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(t=Q.exec(n.toString()))return t[1]}return Y(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}l(Y,"isObjectLikeArray",Z);var tr="function"==typeof P||"object"==typeof $||"function"==typeof X?function(r){return rr(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?rr(r).toLowerCase():t};var er,nr,or=Object.getPrototypeOf;nr=Object.getPrototypeOf,er="function"===tr(nr)?or:function(r){var t=function(r){return r.__proto__}(r);return t||null===t?t:"[object Function]"===M(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var ur=er;function ir(r){return null==r?null:(r=Object(r),ur(r))}function ar(r,t,e,n,o){var u,i,a,c,f,l;if(f=r-e,r<=0||f<=0)return NaN;if(1===r||0===o)return 0;for(u=o<0?(1-r)*o:0,i=0,a=0,l=0;l<r;l++)i+=(c=n[u]-t)*c,a+=c,u+=o;return i/f-a/r*(a/f)}l(ar,"ndarray",(function(r,t,e,n,o,u){var i,a,c,f,l,s;if(l=r-e,r<=0||l<=0)return NaN;if(1===r||0===o)return 0;for(i=u,a=0,c=0,s=0;s<r;s++)a+=(f=n[i]-t)*f,c+=f,i+=o;return a/l-c/r*(c/l)}));var cr,fr=function(r){try{return function(r){throw new Error('Could not dynamically require "'+r+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}(r)}catch(r){return function(r){if("object"!=typeof r||null===r)return!1;if(r instanceof Error)return!0;for(;r;){if("[object Error]"===M(r))return!0;r=ir(r)}return!1}(r)?r:"object"==typeof r?new Error(JSON.stringify(r)):new Error(r.toString())}}((0,S.join)("/home/runner/work/stats-base-dvarm/stats-base-dvarm/node_modules/@stdlib/stats-base-dvarmpn/lib","./native.js")),lr=cr=fr instanceof Error?ar:fr;const{ndarray:sr}=cr;function pr(r,t,e,n,o){return lr(r,t,e,n,o)}function yr(r,t,e,n,o,u){return sr(r,t,e,n,o,u)}l(pr,"ndarray",yr);export{pr as default,yr as ndarray};
//# sourceMappingURL=mod.js.map