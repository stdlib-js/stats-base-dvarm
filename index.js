// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("path")):"function"==typeof define&&define.amd?define(["path"],e):(r="undefined"!=typeof globalThis?globalThis:r||self).dvarm=e(r.require$$0)}(this,(function(r){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=Object.defineProperty;function n(r){return"number"==typeof r}function i(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function o(r,e,t){var n=!1,o=e-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+i(o):i(o)+r,n&&(r="-"+r)),r}var a=String.prototype.toLowerCase,c=String.prototype.toUpperCase;function u(r){var e,t,i;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,i=parseInt(t,10),!isFinite(i)){if(!n(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===r.specifier||10!==e)&&(i=4294967295+i+1),i<0?(t=(-i).toString(e),r.precision&&(t=o(t,r.precision,r.padRight)),t="-"+t):(t=i.toString(e),i||r.precision?r.precision&&(t=o(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===c.call(r.specifier)?c.call(t):a.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function l(r){return"string"==typeof r}var f=Math.abs,s=String.prototype.toLowerCase,p=String.prototype.toUpperCase,g=String.prototype.replace,d=/e\+(\d)$/,y=/e-(\d)$/,b=/^(\d+)$/,h=/^(\d+)e/,v=/\.0$/,w=/\.0*e/,m=/(\..*[^0])0*e/;function j(r){var e,t,i=parseFloat(r.arg);if(!isFinite(i)){if(!n(r.arg))throw new Error("invalid floating-point number. Value: "+t);i=r.arg}switch(r.specifier){case"e":case"E":t=i.toExponential(r.precision);break;case"f":case"F":t=i.toFixed(r.precision);break;case"g":case"G":f(i)<1e-4?((e=r.precision)>0&&(e-=1),t=i.toExponential(e)):t=i.toPrecision(r.precision),r.alternate||(t=g.call(t,m,"$1e"),t=g.call(t,w,"e"),t=g.call(t,v,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=g.call(t,d,"e+0$1"),t=g.call(t,y,"e-0$1"),r.alternate&&(t=g.call(t,b,"$1."),t=g.call(t,h,"$1.e")),i>=0&&r.sign&&(t=r.sign+t),t=r.specifier===p.call(r.specifier)?p.call(t):s.call(t)}function _(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function E(r,e,t){var n=e-r.length;return n<0?r:r=t?r+_(n):_(n)+r}var S=String.fromCharCode,x=isNaN,k=Array.isArray;function O(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function T(r){var e,t,n,i,a,c,f,s,p;if(!k(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(c="",f=1,s=0;s<r.length;s++)if(l(n=r[s]))c+=n;else{if(e=void 0!==n.precision,!(n=O(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(f=n.mapping),t=n.flags,p=0;p<t.length;p++)switch(i=t.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[f],10),f+=1,x(n.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[f],10),f+=1,x(n.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[f],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!x(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=x(a)?String(n.arg):S(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=j(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=o(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=E(n.arg,n.width,n.padRight)),c+=n.arg||"",f+=1}return c}var A=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function V(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function $(r){var e,t,n,i;for(t=[],i=0,n=A.exec(r);n;)(e=r.slice(i,A.lastIndex-n[0].length)).length&&t.push(e),t.push(V(n)),i=A.lastIndex,n=A.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function F(r){return"string"==typeof r}function P(r){var e,t,n;if(!F(r))throw new TypeError(P("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=$(r),(t=new Array(arguments.length))[0]=e,n=1;n<t.length;n++)t[n]=arguments[n];return T.apply(null,t)}var C,I=Object.prototype,R=I.toString,N=I.__defineGetter__,B=I.__defineSetter__,q=I.__lookupGetter__,L=I.__lookupSetter__;C=function(){try{return e({},"x",{}),!0}catch(r){return!1}}()?t:function(r,e,t){var n,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===R.call(r))throw new TypeError(P("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===R.call(t))throw new TypeError(P("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(q.call(r,e)||L.call(r,e)?(n=r.__proto__,r.__proto__=I,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&N&&N.call(r,e,t.get),a&&B&&B.call(r,e,t.set),r};var G=C;function Z(r,e,t){G(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}var W=Object,M=/./;function U(r){return"boolean"==typeof r}var X="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function z(){return X&&"symbol"==typeof Symbol.toStringTag}var D=Object.prototype.toString;var J=Object.prototype.hasOwnProperty;var H,K="function"==typeof Symbol?Symbol:void 0,Q="function"==typeof K?K.toStringTag:"";H=z()?function(r){var e,t,n,i,o;if(null==r)return D.call(r);t=r[Q],o=Q,e=null!=(i=r)&&J.call(i,o);try{r[Q]=void 0}catch(e){return D.call(r)}return n=D.call(r),e?r[Q]=t:delete r[Q],n}:function(r){return D.call(r)};var Y=H,rr=Boolean,er=Boolean.prototype.toString;var tr=z();function nr(r){return"object"==typeof r&&(r instanceof rr||(tr?function(r){try{return er.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===Y(r)))}function ir(r){return U(r)||nr(r)}function or(){return new Function("return this;")()}Z(ir,"isPrimitive",U),Z(ir,"isObject",nr);var ar="object"==typeof self?self:null,cr="object"==typeof window?window:null,ur="object"==typeof global?global:null,lr="object"==typeof globalThis?globalThis:null;var fr=function(r){if(arguments.length){if(!U(r))throw new TypeError(P("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return or()}if(lr)return lr;if(ar)return ar;if(cr)return cr;if(ur)return ur;throw new Error("unexpected error. Unable to resolve global object.")}(),sr=fr.document&&fr.document.childNodes,pr=Int8Array;function gr(){return/^\s*function\s*([^(]*)/i}var dr,yr=/^\s*function\s*([^(]*)/i;Z(gr,"REGEXP",yr),dr=Array.isArray?Array.isArray:function(r){return"[object Array]"===Y(r)};var br=dr;function hr(r){return null!==r&&"object"==typeof r}var vr=function(r){if("function"!=typeof r)throw new TypeError(P("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!br(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(hr);function wr(r){var e,t,n,i;if(("Object"===(t=Y(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=yr.exec(n.toString()))return e[1]}return hr(i=r)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}Z(hr,"isObjectLikeArray",vr);var mr="function"==typeof M||"object"==typeof pr||"function"==typeof sr?function(r){return wr(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?wr(r).toLowerCase():e};var jr,_r,Er=Object.getPrototypeOf;_r=Object.getPrototypeOf,jr="function"===mr(_r)?Er:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===Y(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Sr=jr;function xr(r){return null==r?null:(r=W(r),Sr(r))}function kr(r){if("object"!=typeof r||null===r)return!1;if(r instanceof Error)return!0;for(;r;){if("[object Error]"===Y(r))return!0;r=xr(r)}return!1}function Or(r,e,t,n,i){var o,a,c,u,l,f;if(l=r-t,r<=0||l<=0)return NaN;if(1===r||0===i)return 0;for(o=i<0?(1-r)*i:0,a=0,c=0,f=0;f<r;f++)a+=(u=n[o]-e)*u,c+=u,o+=i;return a/l-c/r*(c/l)}Z(Or,"ndarray",(function(r,e,t,n,i,o){var a,c,u,l,f,s;if(f=r-t,r<=0||f<=0)return NaN;if(1===r||0===i)return 0;for(a=o,c=0,u=0,s=0;s<r;s++)c+=(l=n[a]-e)*l,u+=l,a+=i;return c/f-u/r*(u/f)}));var Tr,Ar=function(r){try{return function(r){throw new Error('Could not dynamically require "'+r+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}(r)}catch(r){return kr(r)?r:"object"==typeof r?new Error(JSON.stringify(r)):new Error(r.toString())}}((0,r.join)(__dirname,"./native.js")),Vr=Tr=kr(Ar)?Or:Ar;const{ndarray:$r}=Tr;function Fr(r,e,t,n,i){return Vr(r,e,t,n,i)}return Z(Fr,"ndarray",(function(r,e,t,n,i,o){return $r(r,e,t,n,i,o)})),Fr}));
//# sourceMappingURL=index.js.map