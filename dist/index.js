"use strict";var u=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var s=u(function(k,n){
var x=require('@stdlib/stats-base-dvarmpn/dist');function f(e,r,a,i,t){return x(e,r,a,i,t)}n.exports=f
});var q=u(function(w,d){
var j=require('@stdlib/stats-base-dvarmpn/dist').ndarray;function l(e,r,a,i,t,y){return j(e,r,a,i,t,y)}d.exports=l
});var p=u(function(z,o){
var R=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),m=s(),_=q();R(m,"ndarray",_);o.exports=m
});var E=require("path").join,O=require('@stdlib/utils-try-require/dist'),b=require('@stdlib/assert-is-error/dist'),g=p(),v,c=O(E(__dirname,"./native.js"));b(c)?v=g:v=c;module.exports=v;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
