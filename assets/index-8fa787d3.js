function Xd(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function Fs(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Zd={exports:{}},ya={},Jd={exports:{}},oe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wi=Symbol.for("react.element"),em=Symbol.for("react.portal"),tm=Symbol.for("react.fragment"),nm=Symbol.for("react.strict_mode"),rm=Symbol.for("react.profiler"),im=Symbol.for("react.provider"),om=Symbol.for("react.context"),am=Symbol.for("react.forward_ref"),lm=Symbol.for("react.suspense"),sm=Symbol.for("react.memo"),um=Symbol.for("react.lazy"),lc=Symbol.iterator;function cm(e){return e===null||typeof e!="object"?null:(e=lc&&e[lc]||e["@@iterator"],typeof e=="function"?e:null)}var qd={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ef=Object.assign,tf={};function Yr(e,t,n){this.props=e,this.context=t,this.refs=tf,this.updater=n||qd}Yr.prototype.isReactComponent={};Yr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Yr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function nf(){}nf.prototype=Yr.prototype;function Us(e,t,n){this.props=e,this.context=t,this.refs=tf,this.updater=n||qd}var Bs=Us.prototype=new nf;Bs.constructor=Us;ef(Bs,Yr.prototype);Bs.isPureReactComponent=!0;var sc=Array.isArray,rf=Object.prototype.hasOwnProperty,Vs={current:null},of={key:!0,ref:!0,__self:!0,__source:!0};function af(e,t,n){var r,i={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)rf.call(t,r)&&!of.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var s=Array(l),u=0;u<l;u++)s[u]=arguments[u+2];i.children=s}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Wi,type:e,key:o,ref:a,props:i,_owner:Vs.current}}function dm(e,t){return{$$typeof:Wi,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Hs(e){return typeof e=="object"&&e!==null&&e.$$typeof===Wi}function fm(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var uc=/\/+/g;function ll(e,t){return typeof e=="object"&&e!==null&&e.key!=null?fm(""+e.key):t.toString(36)}function Po(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Wi:case em:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+ll(a,0):r,sc(i)?(n="",e!=null&&(n=e.replace(uc,"$&/")+"/"),Po(i,t,n,"",function(u){return u})):i!=null&&(Hs(i)&&(i=dm(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(uc,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",sc(e))for(var l=0;l<e.length;l++){o=e[l];var s=r+ll(o,l);a+=Po(o,t,n,s,i)}else if(s=cm(e),typeof s=="function")for(e=s.call(e),l=0;!(o=e.next()).done;)o=o.value,s=r+ll(o,l++),a+=Po(o,t,n,s,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function so(e,t,n){if(e==null)return e;var r=[],i=0;return Po(e,r,"","",function(o){return t.call(n,o,i++)}),r}function pm(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ct={current:null},To={transition:null},hm={ReactCurrentDispatcher:ct,ReactCurrentBatchConfig:To,ReactCurrentOwner:Vs};function lf(){throw Error("act(...) is not supported in production builds of React.")}oe.Children={map:so,forEach:function(e,t,n){so(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return so(e,function(){t++}),t},toArray:function(e){return so(e,function(t){return t})||[]},only:function(e){if(!Hs(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};oe.Component=Yr;oe.Fragment=tm;oe.Profiler=rm;oe.PureComponent=Us;oe.StrictMode=nm;oe.Suspense=lm;oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=hm;oe.act=lf;oe.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=ef({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=Vs.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)rf.call(t,s)&&!of.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&l!==void 0?l[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){l=Array(s);for(var u=0;u<s;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:Wi,type:e.type,key:i,ref:o,props:r,_owner:a}};oe.createContext=function(e){return e={$$typeof:om,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:im,_context:e},e.Consumer=e};oe.createElement=af;oe.createFactory=function(e){var t=af.bind(null,e);return t.type=e,t};oe.createRef=function(){return{current:null}};oe.forwardRef=function(e){return{$$typeof:am,render:e}};oe.isValidElement=Hs;oe.lazy=function(e){return{$$typeof:um,_payload:{_status:-1,_result:e},_init:pm}};oe.memo=function(e,t){return{$$typeof:sm,type:e,compare:t===void 0?null:t}};oe.startTransition=function(e){var t=To.transition;To.transition={};try{e()}finally{To.transition=t}};oe.unstable_act=lf;oe.useCallback=function(e,t){return ct.current.useCallback(e,t)};oe.useContext=function(e){return ct.current.useContext(e)};oe.useDebugValue=function(){};oe.useDeferredValue=function(e){return ct.current.useDeferredValue(e)};oe.useEffect=function(e,t){return ct.current.useEffect(e,t)};oe.useId=function(){return ct.current.useId()};oe.useImperativeHandle=function(e,t,n){return ct.current.useImperativeHandle(e,t,n)};oe.useInsertionEffect=function(e,t){return ct.current.useInsertionEffect(e,t)};oe.useLayoutEffect=function(e,t){return ct.current.useLayoutEffect(e,t)};oe.useMemo=function(e,t){return ct.current.useMemo(e,t)};oe.useReducer=function(e,t,n){return ct.current.useReducer(e,t,n)};oe.useRef=function(e){return ct.current.useRef(e)};oe.useState=function(e){return ct.current.useState(e)};oe.useSyncExternalStore=function(e,t,n){return ct.current.useSyncExternalStore(e,t,n)};oe.useTransition=function(){return ct.current.useTransition()};oe.version="18.3.1";Jd.exports=oe;var j=Jd.exports;const St=Fs(j),mm=Xd({__proto__:null,default:St},[j]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gm=j,vm=Symbol.for("react.element"),ym=Symbol.for("react.fragment"),wm=Object.prototype.hasOwnProperty,xm=gm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,km={key:!0,ref:!0,__self:!0,__source:!0};function sf(e,t,n){var r,i={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)wm.call(t,r)&&!km.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:vm,type:e,key:o,ref:a,props:i,_owner:xm.current}}ya.Fragment=ym;ya.jsx=sf;ya.jsxs=sf;Zd.exports=ya;var g=Zd.exports,Il={},uf={exports:{}},Et={},cf={exports:{}},df={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(z,F){var K=z.length;z.push(F);e:for(;0<K;){var se=K-1>>>1,M=z[se];if(0<i(M,F))z[se]=F,z[K]=M,K=se;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var F=z[0],K=z.pop();if(K!==F){z[0]=K;e:for(var se=0,M=z.length,A=M>>>1;se<A;){var $=2*(se+1)-1,Q=z[$],C=$+1,Z=z[C];if(0>i(Q,K))C<M&&0>i(Z,Q)?(z[se]=Z,z[C]=K,se=C):(z[se]=Q,z[$]=K,se=$);else if(C<M&&0>i(Z,K))z[se]=Z,z[C]=K,se=C;else break e}}return F}function i(z,F){var K=z.sortIndex-F.sortIndex;return K!==0?K:z.id-F.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var s=[],u=[],f=1,d=null,p=3,E=!1,x=!1,k=!1,R=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(z){for(var F=n(u);F!==null;){if(F.callback===null)r(u);else if(F.startTime<=z)r(u),F.sortIndex=F.expirationTime,t(s,F);else break;F=n(u)}}function S(z){if(k=!1,m(z),!x)if(n(s)!==null)x=!0,Ze(_);else{var F=n(u);F!==null&&Fe(S,F.startTime-z)}}function _(z,F){x=!1,k&&(k=!1,h(y),y=-1),E=!0;var K=p;try{for(m(F),d=n(s);d!==null&&(!(d.expirationTime>F)||z&&!W());){var se=d.callback;if(typeof se=="function"){d.callback=null,p=d.priorityLevel;var M=se(d.expirationTime<=F);F=e.unstable_now(),typeof M=="function"?d.callback=M:d===n(s)&&r(s),m(F)}else r(s);d=n(s)}if(d!==null)var A=!0;else{var $=n(u);$!==null&&Fe(S,$.startTime-F),A=!1}return A}finally{d=null,p=K,E=!1}}var L=!1,I=null,y=-1,U=5,D=-1;function W(){return!(e.unstable_now()-D<U)}function ie(){if(I!==null){var z=e.unstable_now();D=z;var F=!0;try{F=I(!0,z)}finally{F?ce():(L=!1,I=null)}}else L=!1}var ce;if(typeof c=="function")ce=function(){c(ie)};else if(typeof MessageChannel<"u"){var le=new MessageChannel,be=le.port2;le.port1.onmessage=ie,ce=function(){be.postMessage(null)}}else ce=function(){R(ie,0)};function Ze(z){I=z,L||(L=!0,ce())}function Fe(z,F){y=R(function(){z(e.unstable_now())},F)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(z){z.callback=null},e.unstable_continueExecution=function(){x||E||(x=!0,Ze(_))},e.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):U=0<z?Math.floor(1e3/z):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(z){switch(p){case 1:case 2:case 3:var F=3;break;default:F=p}var K=p;p=F;try{return z()}finally{p=K}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(z,F){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var K=p;p=z;try{return F()}finally{p=K}},e.unstable_scheduleCallback=function(z,F,K){var se=e.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?se+K:se):K=se,z){case 1:var M=-1;break;case 2:M=250;break;case 5:M=1073741823;break;case 4:M=1e4;break;default:M=5e3}return M=K+M,z={id:f++,callback:F,priorityLevel:z,startTime:K,expirationTime:M,sortIndex:-1},K>se?(z.sortIndex=K,t(u,z),n(s)===null&&z===n(u)&&(k?(h(y),y=-1):k=!0,Fe(S,K-se))):(z.sortIndex=M,t(s,z),x||E||(x=!0,Ze(_))),z},e.unstable_shouldYield=W,e.unstable_wrapCallback=function(z){var F=p;return function(){var K=p;p=F;try{return z.apply(this,arguments)}finally{p=K}}}})(df);cf.exports=df;var Sm=cf.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cm=j,bt=Sm;function T(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ff=new Set,Ci={};function ur(e,t){Dr(e,t),Dr(e+"Capture",t)}function Dr(e,t){for(Ci[e]=t,e=0;e<t.length;e++)ff.add(t[e])}var un=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),$l=Object.prototype.hasOwnProperty,bm=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,cc={},dc={};function Em(e){return $l.call(dc,e)?!0:$l.call(cc,e)?!1:bm.test(e)?dc[e]=!0:(cc[e]=!0,!1)}function Rm(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function jm(e,t,n,r){if(t===null||typeof t>"u"||Rm(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function dt(e,t,n,r,i,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var tt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){tt[e]=new dt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];tt[t]=new dt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){tt[e]=new dt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){tt[e]=new dt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){tt[e]=new dt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){tt[e]=new dt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){tt[e]=new dt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){tt[e]=new dt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){tt[e]=new dt(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ws=/[\-:]([a-z])/g;function Qs(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ws,Qs);tt[t]=new dt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ws,Qs);tt[t]=new dt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ws,Qs);tt[t]=new dt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){tt[e]=new dt(e,1,!1,e.toLowerCase(),null,!1,!1)});tt.xlinkHref=new dt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){tt[e]=new dt(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ys(e,t,n,r){var i=tt.hasOwnProperty(t)?tt[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(jm(t,n,i,r)&&(n=null),r||i===null?Em(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var hn=Cm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,uo=Symbol.for("react.element"),gr=Symbol.for("react.portal"),vr=Symbol.for("react.fragment"),Ks=Symbol.for("react.strict_mode"),Fl=Symbol.for("react.profiler"),pf=Symbol.for("react.provider"),hf=Symbol.for("react.context"),Gs=Symbol.for("react.forward_ref"),Ul=Symbol.for("react.suspense"),Bl=Symbol.for("react.suspense_list"),Xs=Symbol.for("react.memo"),Sn=Symbol.for("react.lazy"),mf=Symbol.for("react.offscreen"),fc=Symbol.iterator;function Zr(e){return e===null||typeof e!="object"?null:(e=fc&&e[fc]||e["@@iterator"],typeof e=="function"?e:null)}var Ae=Object.assign,sl;function si(e){if(sl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);sl=t&&t[1]||""}return`
`+sl+e}var ul=!1;function cl(e,t){if(!e||ul)return"";ul=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),a=i.length-1,l=o.length-1;1<=a&&0<=l&&i[a]!==o[l];)l--;for(;1<=a&&0<=l;a--,l--)if(i[a]!==o[l]){if(a!==1||l!==1)do if(a--,l--,0>l||i[a]!==o[l]){var s=`
`+i[a].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=a&&0<=l);break}}}finally{ul=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?si(e):""}function _m(e){switch(e.tag){case 5:return si(e.type);case 16:return si("Lazy");case 13:return si("Suspense");case 19:return si("SuspenseList");case 0:case 2:case 15:return e=cl(e.type,!1),e;case 11:return e=cl(e.type.render,!1),e;case 1:return e=cl(e.type,!0),e;default:return""}}function Vl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case vr:return"Fragment";case gr:return"Portal";case Fl:return"Profiler";case Ks:return"StrictMode";case Ul:return"Suspense";case Bl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case hf:return(e.displayName||"Context")+".Consumer";case pf:return(e._context.displayName||"Context")+".Provider";case Gs:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Xs:return t=e.displayName||null,t!==null?t:Vl(e.type)||"Memo";case Sn:t=e._payload,e=e._init;try{return Vl(e(t))}catch{}}return null}function Pm(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Vl(t);case 8:return t===Ks?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function In(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function gf(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Tm(e){var t=gf(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function co(e){e._valueTracker||(e._valueTracker=Tm(e))}function vf(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=gf(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Vo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Hl(e,t){var n=t.checked;return Ae({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function pc(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=In(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function yf(e,t){t=t.checked,t!=null&&Ys(e,"checked",t,!1)}function Wl(e,t){yf(e,t);var n=In(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ql(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ql(e,t.type,In(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function hc(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ql(e,t,n){(t!=="number"||Vo(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var ui=Array.isArray;function Tr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+In(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Yl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(T(91));return Ae({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function mc(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(T(92));if(ui(n)){if(1<n.length)throw Error(T(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:In(n)}}function wf(e,t){var n=In(t.value),r=In(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function gc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function xf(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Kl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?xf(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var fo,kf=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(fo=fo||document.createElement("div"),fo.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=fo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function bi(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var pi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Nm=["Webkit","ms","Moz","O"];Object.keys(pi).forEach(function(e){Nm.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),pi[t]=pi[e]})});function Sf(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||pi.hasOwnProperty(e)&&pi[e]?(""+t).trim():t+"px"}function Cf(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Sf(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Lm=Ae({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Gl(e,t){if(t){if(Lm[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(T(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(T(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(T(61))}if(t.style!=null&&typeof t.style!="object")throw Error(T(62))}}function Xl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Zl=null;function Zs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Jl=null,Nr=null,Lr=null;function vc(e){if(e=Ki(e)){if(typeof Jl!="function")throw Error(T(280));var t=e.stateNode;t&&(t=Ca(t),Jl(e.stateNode,e.type,t))}}function bf(e){Nr?Lr?Lr.push(e):Lr=[e]:Nr=e}function Ef(){if(Nr){var e=Nr,t=Lr;if(Lr=Nr=null,vc(e),t)for(e=0;e<t.length;e++)vc(t[e])}}function Rf(e,t){return e(t)}function jf(){}var dl=!1;function _f(e,t,n){if(dl)return e(t,n);dl=!0;try{return Rf(e,t,n)}finally{dl=!1,(Nr!==null||Lr!==null)&&(jf(),Ef())}}function Ei(e,t){var n=e.stateNode;if(n===null)return null;var r=Ca(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(T(231,t,typeof n));return n}var ql=!1;if(un)try{var Jr={};Object.defineProperty(Jr,"passive",{get:function(){ql=!0}}),window.addEventListener("test",Jr,Jr),window.removeEventListener("test",Jr,Jr)}catch{ql=!1}function zm(e,t,n,r,i,o,a,l,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(f){this.onError(f)}}var hi=!1,Ho=null,Wo=!1,es=null,Mm={onError:function(e){hi=!0,Ho=e}};function Am(e,t,n,r,i,o,a,l,s){hi=!1,Ho=null,zm.apply(Mm,arguments)}function Dm(e,t,n,r,i,o,a,l,s){if(Am.apply(this,arguments),hi){if(hi){var u=Ho;hi=!1,Ho=null}else throw Error(T(198));Wo||(Wo=!0,es=u)}}function cr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Pf(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function yc(e){if(cr(e)!==e)throw Error(T(188))}function Om(e){var t=e.alternate;if(!t){if(t=cr(e),t===null)throw Error(T(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return yc(i),e;if(o===r)return yc(i),t;o=o.sibling}throw Error(T(188))}if(n.return!==r.return)n=i,r=o;else{for(var a=!1,l=i.child;l;){if(l===n){a=!0,n=i,r=o;break}if(l===r){a=!0,r=i,n=o;break}l=l.sibling}if(!a){for(l=o.child;l;){if(l===n){a=!0,n=o,r=i;break}if(l===r){a=!0,r=o,n=i;break}l=l.sibling}if(!a)throw Error(T(189))}}if(n.alternate!==r)throw Error(T(190))}if(n.tag!==3)throw Error(T(188));return n.stateNode.current===n?e:t}function Tf(e){return e=Om(e),e!==null?Nf(e):null}function Nf(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Nf(e);if(t!==null)return t;e=e.sibling}return null}var Lf=bt.unstable_scheduleCallback,wc=bt.unstable_cancelCallback,Im=bt.unstable_shouldYield,$m=bt.unstable_requestPaint,$e=bt.unstable_now,Fm=bt.unstable_getCurrentPriorityLevel,Js=bt.unstable_ImmediatePriority,zf=bt.unstable_UserBlockingPriority,Qo=bt.unstable_NormalPriority,Um=bt.unstable_LowPriority,Mf=bt.unstable_IdlePriority,wa=null,Kt=null;function Bm(e){if(Kt&&typeof Kt.onCommitFiberRoot=="function")try{Kt.onCommitFiberRoot(wa,e,void 0,(e.current.flags&128)===128)}catch{}}var Ut=Math.clz32?Math.clz32:Wm,Vm=Math.log,Hm=Math.LN2;function Wm(e){return e>>>=0,e===0?32:31-(Vm(e)/Hm|0)|0}var po=64,ho=4194304;function ci(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Yo(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,a=n&268435455;if(a!==0){var l=a&~i;l!==0?r=ci(l):(o&=a,o!==0&&(r=ci(o)))}else a=n&~i,a!==0?r=ci(a):o!==0&&(r=ci(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ut(t),i=1<<n,r|=e[n],t&=~i;return r}function Qm(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ym(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-Ut(o),l=1<<a,s=i[a];s===-1?(!(l&n)||l&r)&&(i[a]=Qm(l,t)):s<=t&&(e.expiredLanes|=l),o&=~l}}function ts(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Af(){var e=po;return po<<=1,!(po&4194240)&&(po=64),e}function fl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Qi(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ut(t),e[t]=n}function Km(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Ut(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function qs(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ut(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var ge=0;function Df(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Of,eu,If,$f,Ff,ns=!1,mo=[],_n=null,Pn=null,Tn=null,Ri=new Map,ji=new Map,bn=[],Gm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function xc(e,t){switch(e){case"focusin":case"focusout":_n=null;break;case"dragenter":case"dragleave":Pn=null;break;case"mouseover":case"mouseout":Tn=null;break;case"pointerover":case"pointerout":Ri.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ji.delete(t.pointerId)}}function qr(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Ki(t),t!==null&&eu(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Xm(e,t,n,r,i){switch(t){case"focusin":return _n=qr(_n,e,t,n,r,i),!0;case"dragenter":return Pn=qr(Pn,e,t,n,r,i),!0;case"mouseover":return Tn=qr(Tn,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Ri.set(o,qr(Ri.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,ji.set(o,qr(ji.get(o)||null,e,t,n,r,i)),!0}return!1}function Uf(e){var t=Xn(e.target);if(t!==null){var n=cr(t);if(n!==null){if(t=n.tag,t===13){if(t=Pf(n),t!==null){e.blockedOn=t,Ff(e.priority,function(){If(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function No(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=rs(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Zl=r,n.target.dispatchEvent(r),Zl=null}else return t=Ki(n),t!==null&&eu(t),e.blockedOn=n,!1;t.shift()}return!0}function kc(e,t,n){No(e)&&n.delete(t)}function Zm(){ns=!1,_n!==null&&No(_n)&&(_n=null),Pn!==null&&No(Pn)&&(Pn=null),Tn!==null&&No(Tn)&&(Tn=null),Ri.forEach(kc),ji.forEach(kc)}function ei(e,t){e.blockedOn===t&&(e.blockedOn=null,ns||(ns=!0,bt.unstable_scheduleCallback(bt.unstable_NormalPriority,Zm)))}function _i(e){function t(i){return ei(i,e)}if(0<mo.length){ei(mo[0],e);for(var n=1;n<mo.length;n++){var r=mo[n];r.blockedOn===e&&(r.blockedOn=null)}}for(_n!==null&&ei(_n,e),Pn!==null&&ei(Pn,e),Tn!==null&&ei(Tn,e),Ri.forEach(t),ji.forEach(t),n=0;n<bn.length;n++)r=bn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<bn.length&&(n=bn[0],n.blockedOn===null);)Uf(n),n.blockedOn===null&&bn.shift()}var zr=hn.ReactCurrentBatchConfig,Ko=!0;function Jm(e,t,n,r){var i=ge,o=zr.transition;zr.transition=null;try{ge=1,tu(e,t,n,r)}finally{ge=i,zr.transition=o}}function qm(e,t,n,r){var i=ge,o=zr.transition;zr.transition=null;try{ge=4,tu(e,t,n,r)}finally{ge=i,zr.transition=o}}function tu(e,t,n,r){if(Ko){var i=rs(e,t,n,r);if(i===null)Sl(e,t,r,Go,n),xc(e,r);else if(Xm(i,e,t,n,r))r.stopPropagation();else if(xc(e,r),t&4&&-1<Gm.indexOf(e)){for(;i!==null;){var o=Ki(i);if(o!==null&&Of(o),o=rs(e,t,n,r),o===null&&Sl(e,t,r,Go,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Sl(e,t,r,null,n)}}var Go=null;function rs(e,t,n,r){if(Go=null,e=Zs(r),e=Xn(e),e!==null)if(t=cr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Pf(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Go=e,null}function Bf(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Fm()){case Js:return 1;case zf:return 4;case Qo:case Um:return 16;case Mf:return 536870912;default:return 16}default:return 16}}var Rn=null,nu=null,Lo=null;function Vf(){if(Lo)return Lo;var e,t=nu,n=t.length,r,i="value"in Rn?Rn.value:Rn.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[o-r];r++);return Lo=i.slice(e,1<r?1-r:void 0)}function zo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function go(){return!0}function Sc(){return!1}function Rt(e){function t(n,r,i,o,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?go:Sc,this.isPropagationStopped=Sc,this}return Ae(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=go)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=go)},persist:function(){},isPersistent:go}),t}var Kr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ru=Rt(Kr),Yi=Ae({},Kr,{view:0,detail:0}),eg=Rt(Yi),pl,hl,ti,xa=Ae({},Yi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:iu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ti&&(ti&&e.type==="mousemove"?(pl=e.screenX-ti.screenX,hl=e.screenY-ti.screenY):hl=pl=0,ti=e),pl)},movementY:function(e){return"movementY"in e?e.movementY:hl}}),Cc=Rt(xa),tg=Ae({},xa,{dataTransfer:0}),ng=Rt(tg),rg=Ae({},Yi,{relatedTarget:0}),ml=Rt(rg),ig=Ae({},Kr,{animationName:0,elapsedTime:0,pseudoElement:0}),og=Rt(ig),ag=Ae({},Kr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),lg=Rt(ag),sg=Ae({},Kr,{data:0}),bc=Rt(sg),ug={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},cg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},dg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function fg(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=dg[e])?!!t[e]:!1}function iu(){return fg}var pg=Ae({},Yi,{key:function(e){if(e.key){var t=ug[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=zo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?cg[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:iu,charCode:function(e){return e.type==="keypress"?zo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?zo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),hg=Rt(pg),mg=Ae({},xa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ec=Rt(mg),gg=Ae({},Yi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:iu}),vg=Rt(gg),yg=Ae({},Kr,{propertyName:0,elapsedTime:0,pseudoElement:0}),wg=Rt(yg),xg=Ae({},xa,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),kg=Rt(xg),Sg=[9,13,27,32],ou=un&&"CompositionEvent"in window,mi=null;un&&"documentMode"in document&&(mi=document.documentMode);var Cg=un&&"TextEvent"in window&&!mi,Hf=un&&(!ou||mi&&8<mi&&11>=mi),Rc=String.fromCharCode(32),jc=!1;function Wf(e,t){switch(e){case"keyup":return Sg.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Qf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var yr=!1;function bg(e,t){switch(e){case"compositionend":return Qf(t);case"keypress":return t.which!==32?null:(jc=!0,Rc);case"textInput":return e=t.data,e===Rc&&jc?null:e;default:return null}}function Eg(e,t){if(yr)return e==="compositionend"||!ou&&Wf(e,t)?(e=Vf(),Lo=nu=Rn=null,yr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Hf&&t.locale!=="ko"?null:t.data;default:return null}}var Rg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function _c(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Rg[e.type]:t==="textarea"}function Yf(e,t,n,r){bf(r),t=Xo(t,"onChange"),0<t.length&&(n=new ru("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var gi=null,Pi=null;function jg(e){ip(e,0)}function ka(e){var t=kr(e);if(vf(t))return e}function _g(e,t){if(e==="change")return t}var Kf=!1;if(un){var gl;if(un){var vl="oninput"in document;if(!vl){var Pc=document.createElement("div");Pc.setAttribute("oninput","return;"),vl=typeof Pc.oninput=="function"}gl=vl}else gl=!1;Kf=gl&&(!document.documentMode||9<document.documentMode)}function Tc(){gi&&(gi.detachEvent("onpropertychange",Gf),Pi=gi=null)}function Gf(e){if(e.propertyName==="value"&&ka(Pi)){var t=[];Yf(t,Pi,e,Zs(e)),_f(jg,t)}}function Pg(e,t,n){e==="focusin"?(Tc(),gi=t,Pi=n,gi.attachEvent("onpropertychange",Gf)):e==="focusout"&&Tc()}function Tg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ka(Pi)}function Ng(e,t){if(e==="click")return ka(t)}function Lg(e,t){if(e==="input"||e==="change")return ka(t)}function zg(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Vt=typeof Object.is=="function"?Object.is:zg;function Ti(e,t){if(Vt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!$l.call(t,i)||!Vt(e[i],t[i]))return!1}return!0}function Nc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Lc(e,t){var n=Nc(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Nc(n)}}function Xf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Xf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Zf(){for(var e=window,t=Vo();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Vo(e.document)}return t}function au(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Mg(e){var t=Zf(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Xf(n.ownerDocument.documentElement,n)){if(r!==null&&au(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Lc(n,o);var a=Lc(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Ag=un&&"documentMode"in document&&11>=document.documentMode,wr=null,is=null,vi=null,os=!1;function zc(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;os||wr==null||wr!==Vo(r)||(r=wr,"selectionStart"in r&&au(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),vi&&Ti(vi,r)||(vi=r,r=Xo(is,"onSelect"),0<r.length&&(t=new ru("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=wr)))}function vo(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var xr={animationend:vo("Animation","AnimationEnd"),animationiteration:vo("Animation","AnimationIteration"),animationstart:vo("Animation","AnimationStart"),transitionend:vo("Transition","TransitionEnd")},yl={},Jf={};un&&(Jf=document.createElement("div").style,"AnimationEvent"in window||(delete xr.animationend.animation,delete xr.animationiteration.animation,delete xr.animationstart.animation),"TransitionEvent"in window||delete xr.transitionend.transition);function Sa(e){if(yl[e])return yl[e];if(!xr[e])return e;var t=xr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Jf)return yl[e]=t[n];return e}var qf=Sa("animationend"),ep=Sa("animationiteration"),tp=Sa("animationstart"),np=Sa("transitionend"),rp=new Map,Mc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Fn(e,t){rp.set(e,t),ur(t,[e])}for(var wl=0;wl<Mc.length;wl++){var xl=Mc[wl],Dg=xl.toLowerCase(),Og=xl[0].toUpperCase()+xl.slice(1);Fn(Dg,"on"+Og)}Fn(qf,"onAnimationEnd");Fn(ep,"onAnimationIteration");Fn(tp,"onAnimationStart");Fn("dblclick","onDoubleClick");Fn("focusin","onFocus");Fn("focusout","onBlur");Fn(np,"onTransitionEnd");Dr("onMouseEnter",["mouseout","mouseover"]);Dr("onMouseLeave",["mouseout","mouseover"]);Dr("onPointerEnter",["pointerout","pointerover"]);Dr("onPointerLeave",["pointerout","pointerover"]);ur("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ur("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ur("onBeforeInput",["compositionend","keypress","textInput","paste"]);ur("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ur("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ur("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var di="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ig=new Set("cancel close invalid load scroll toggle".split(" ").concat(di));function Ac(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Dm(r,t,void 0,e),e.currentTarget=null}function ip(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var l=r[a],s=l.instance,u=l.currentTarget;if(l=l.listener,s!==o&&i.isPropagationStopped())break e;Ac(i,l,u),o=s}else for(a=0;a<r.length;a++){if(l=r[a],s=l.instance,u=l.currentTarget,l=l.listener,s!==o&&i.isPropagationStopped())break e;Ac(i,l,u),o=s}}}if(Wo)throw e=es,Wo=!1,es=null,e}function Re(e,t){var n=t[cs];n===void 0&&(n=t[cs]=new Set);var r=e+"__bubble";n.has(r)||(op(t,e,2,!1),n.add(r))}function kl(e,t,n){var r=0;t&&(r|=4),op(n,e,r,t)}var yo="_reactListening"+Math.random().toString(36).slice(2);function Ni(e){if(!e[yo]){e[yo]=!0,ff.forEach(function(n){n!=="selectionchange"&&(Ig.has(n)||kl(n,!1,e),kl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[yo]||(t[yo]=!0,kl("selectionchange",!1,t))}}function op(e,t,n,r){switch(Bf(t)){case 1:var i=Jm;break;case 4:i=qm;break;default:i=tu}n=i.bind(null,t,n,e),i=void 0,!ql||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Sl(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var s=a.tag;if((s===3||s===4)&&(s=a.stateNode.containerInfo,s===i||s.nodeType===8&&s.parentNode===i))return;a=a.return}for(;l!==null;){if(a=Xn(l),a===null)return;if(s=a.tag,s===5||s===6){r=o=a;continue e}l=l.parentNode}}r=r.return}_f(function(){var u=o,f=Zs(n),d=[];e:{var p=rp.get(e);if(p!==void 0){var E=ru,x=e;switch(e){case"keypress":if(zo(n)===0)break e;case"keydown":case"keyup":E=hg;break;case"focusin":x="focus",E=ml;break;case"focusout":x="blur",E=ml;break;case"beforeblur":case"afterblur":E=ml;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":E=Cc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":E=ng;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":E=vg;break;case qf:case ep:case tp:E=og;break;case np:E=wg;break;case"scroll":E=eg;break;case"wheel":E=kg;break;case"copy":case"cut":case"paste":E=lg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":E=Ec}var k=(t&4)!==0,R=!k&&e==="scroll",h=k?p!==null?p+"Capture":null:p;k=[];for(var c=u,m;c!==null;){m=c;var S=m.stateNode;if(m.tag===5&&S!==null&&(m=S,h!==null&&(S=Ei(c,h),S!=null&&k.push(Li(c,S,m)))),R)break;c=c.return}0<k.length&&(p=new E(p,x,null,n,f),d.push({event:p,listeners:k}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",E=e==="mouseout"||e==="pointerout",p&&n!==Zl&&(x=n.relatedTarget||n.fromElement)&&(Xn(x)||x[cn]))break e;if((E||p)&&(p=f.window===f?f:(p=f.ownerDocument)?p.defaultView||p.parentWindow:window,E?(x=n.relatedTarget||n.toElement,E=u,x=x?Xn(x):null,x!==null&&(R=cr(x),x!==R||x.tag!==5&&x.tag!==6)&&(x=null)):(E=null,x=u),E!==x)){if(k=Cc,S="onMouseLeave",h="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(k=Ec,S="onPointerLeave",h="onPointerEnter",c="pointer"),R=E==null?p:kr(E),m=x==null?p:kr(x),p=new k(S,c+"leave",E,n,f),p.target=R,p.relatedTarget=m,S=null,Xn(f)===u&&(k=new k(h,c+"enter",x,n,f),k.target=m,k.relatedTarget=R,S=k),R=S,E&&x)t:{for(k=E,h=x,c=0,m=k;m;m=hr(m))c++;for(m=0,S=h;S;S=hr(S))m++;for(;0<c-m;)k=hr(k),c--;for(;0<m-c;)h=hr(h),m--;for(;c--;){if(k===h||h!==null&&k===h.alternate)break t;k=hr(k),h=hr(h)}k=null}else k=null;E!==null&&Dc(d,p,E,k,!1),x!==null&&R!==null&&Dc(d,R,x,k,!0)}}e:{if(p=u?kr(u):window,E=p.nodeName&&p.nodeName.toLowerCase(),E==="select"||E==="input"&&p.type==="file")var _=_g;else if(_c(p))if(Kf)_=Lg;else{_=Tg;var L=Pg}else(E=p.nodeName)&&E.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(_=Ng);if(_&&(_=_(e,u))){Yf(d,_,n,f);break e}L&&L(e,p,u),e==="focusout"&&(L=p._wrapperState)&&L.controlled&&p.type==="number"&&Ql(p,"number",p.value)}switch(L=u?kr(u):window,e){case"focusin":(_c(L)||L.contentEditable==="true")&&(wr=L,is=u,vi=null);break;case"focusout":vi=is=wr=null;break;case"mousedown":os=!0;break;case"contextmenu":case"mouseup":case"dragend":os=!1,zc(d,n,f);break;case"selectionchange":if(Ag)break;case"keydown":case"keyup":zc(d,n,f)}var I;if(ou)e:{switch(e){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else yr?Wf(e,n)&&(y="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(Hf&&n.locale!=="ko"&&(yr||y!=="onCompositionStart"?y==="onCompositionEnd"&&yr&&(I=Vf()):(Rn=f,nu="value"in Rn?Rn.value:Rn.textContent,yr=!0)),L=Xo(u,y),0<L.length&&(y=new bc(y,e,null,n,f),d.push({event:y,listeners:L}),I?y.data=I:(I=Qf(n),I!==null&&(y.data=I)))),(I=Cg?bg(e,n):Eg(e,n))&&(u=Xo(u,"onBeforeInput"),0<u.length&&(f=new bc("onBeforeInput","beforeinput",null,n,f),d.push({event:f,listeners:u}),f.data=I))}ip(d,t)})}function Li(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Xo(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Ei(e,n),o!=null&&r.unshift(Li(e,o,i)),o=Ei(e,t),o!=null&&r.push(Li(e,o,i))),e=e.return}return r}function hr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Dc(e,t,n,r,i){for(var o=t._reactName,a=[];n!==null&&n!==r;){var l=n,s=l.alternate,u=l.stateNode;if(s!==null&&s===r)break;l.tag===5&&u!==null&&(l=u,i?(s=Ei(n,o),s!=null&&a.unshift(Li(n,s,l))):i||(s=Ei(n,o),s!=null&&a.push(Li(n,s,l)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var $g=/\r\n?/g,Fg=/\u0000|\uFFFD/g;function Oc(e){return(typeof e=="string"?e:""+e).replace($g,`
`).replace(Fg,"")}function wo(e,t,n){if(t=Oc(t),Oc(e)!==t&&n)throw Error(T(425))}function Zo(){}var as=null,ls=null;function ss(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var us=typeof setTimeout=="function"?setTimeout:void 0,Ug=typeof clearTimeout=="function"?clearTimeout:void 0,Ic=typeof Promise=="function"?Promise:void 0,Bg=typeof queueMicrotask=="function"?queueMicrotask:typeof Ic<"u"?function(e){return Ic.resolve(null).then(e).catch(Vg)}:us;function Vg(e){setTimeout(function(){throw e})}function Cl(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),_i(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);_i(t)}function Nn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function $c(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Gr=Math.random().toString(36).slice(2),Yt="__reactFiber$"+Gr,zi="__reactProps$"+Gr,cn="__reactContainer$"+Gr,cs="__reactEvents$"+Gr,Hg="__reactListeners$"+Gr,Wg="__reactHandles$"+Gr;function Xn(e){var t=e[Yt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[cn]||n[Yt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=$c(e);e!==null;){if(n=e[Yt])return n;e=$c(e)}return t}e=n,n=e.parentNode}return null}function Ki(e){return e=e[Yt]||e[cn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function kr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(T(33))}function Ca(e){return e[zi]||null}var ds=[],Sr=-1;function Un(e){return{current:e}}function je(e){0>Sr||(e.current=ds[Sr],ds[Sr]=null,Sr--)}function Ce(e,t){Sr++,ds[Sr]=e.current,e.current=t}var $n={},ot=Un($n),ht=Un(!1),rr=$n;function Or(e,t){var n=e.type.contextTypes;if(!n)return $n;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function mt(e){return e=e.childContextTypes,e!=null}function Jo(){je(ht),je(ot)}function Fc(e,t,n){if(ot.current!==$n)throw Error(T(168));Ce(ot,t),Ce(ht,n)}function ap(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(T(108,Pm(e)||"Unknown",i));return Ae({},n,r)}function qo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||$n,rr=ot.current,Ce(ot,e),Ce(ht,ht.current),!0}function Uc(e,t,n){var r=e.stateNode;if(!r)throw Error(T(169));n?(e=ap(e,t,rr),r.__reactInternalMemoizedMergedChildContext=e,je(ht),je(ot),Ce(ot,e)):je(ht),Ce(ht,n)}var nn=null,ba=!1,bl=!1;function lp(e){nn===null?nn=[e]:nn.push(e)}function Qg(e){ba=!0,lp(e)}function Bn(){if(!bl&&nn!==null){bl=!0;var e=0,t=ge;try{var n=nn;for(ge=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}nn=null,ba=!1}catch(i){throw nn!==null&&(nn=nn.slice(e+1)),Lf(Js,Bn),i}finally{ge=t,bl=!1}}return null}var Cr=[],br=0,ea=null,ta=0,_t=[],Pt=0,ir=null,rn=1,on="";function Yn(e,t){Cr[br++]=ta,Cr[br++]=ea,ea=e,ta=t}function sp(e,t,n){_t[Pt++]=rn,_t[Pt++]=on,_t[Pt++]=ir,ir=e;var r=rn;e=on;var i=32-Ut(r)-1;r&=~(1<<i),n+=1;var o=32-Ut(t)+i;if(30<o){var a=i-i%5;o=(r&(1<<a)-1).toString(32),r>>=a,i-=a,rn=1<<32-Ut(t)+i|n<<i|r,on=o+e}else rn=1<<o|n<<i|r,on=e}function lu(e){e.return!==null&&(Yn(e,1),sp(e,1,0))}function su(e){for(;e===ea;)ea=Cr[--br],Cr[br]=null,ta=Cr[--br],Cr[br]=null;for(;e===ir;)ir=_t[--Pt],_t[Pt]=null,on=_t[--Pt],_t[Pt]=null,rn=_t[--Pt],_t[Pt]=null}var Ct=null,kt=null,Te=!1,Ft=null;function up(e,t){var n=Tt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Bc(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ct=e,kt=Nn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ct=e,kt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=ir!==null?{id:rn,overflow:on}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Tt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ct=e,kt=null,!0):!1;default:return!1}}function fs(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ps(e){if(Te){var t=kt;if(t){var n=t;if(!Bc(e,t)){if(fs(e))throw Error(T(418));t=Nn(n.nextSibling);var r=Ct;t&&Bc(e,t)?up(r,n):(e.flags=e.flags&-4097|2,Te=!1,Ct=e)}}else{if(fs(e))throw Error(T(418));e.flags=e.flags&-4097|2,Te=!1,Ct=e}}}function Vc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ct=e}function xo(e){if(e!==Ct)return!1;if(!Te)return Vc(e),Te=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ss(e.type,e.memoizedProps)),t&&(t=kt)){if(fs(e))throw cp(),Error(T(418));for(;t;)up(e,t),t=Nn(t.nextSibling)}if(Vc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(T(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){kt=Nn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}kt=null}}else kt=Ct?Nn(e.stateNode.nextSibling):null;return!0}function cp(){for(var e=kt;e;)e=Nn(e.nextSibling)}function Ir(){kt=Ct=null,Te=!1}function uu(e){Ft===null?Ft=[e]:Ft.push(e)}var Yg=hn.ReactCurrentBatchConfig;function ni(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(T(309));var r=n.stateNode}if(!r)throw Error(T(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var l=i.refs;a===null?delete l[o]:l[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error(T(284));if(!n._owner)throw Error(T(290,e))}return e}function ko(e,t){throw e=Object.prototype.toString.call(t),Error(T(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Hc(e){var t=e._init;return t(e._payload)}function dp(e){function t(h,c){if(e){var m=h.deletions;m===null?(h.deletions=[c],h.flags|=16):m.push(c)}}function n(h,c){if(!e)return null;for(;c!==null;)t(h,c),c=c.sibling;return null}function r(h,c){for(h=new Map;c!==null;)c.key!==null?h.set(c.key,c):h.set(c.index,c),c=c.sibling;return h}function i(h,c){return h=An(h,c),h.index=0,h.sibling=null,h}function o(h,c,m){return h.index=m,e?(m=h.alternate,m!==null?(m=m.index,m<c?(h.flags|=2,c):m):(h.flags|=2,c)):(h.flags|=1048576,c)}function a(h){return e&&h.alternate===null&&(h.flags|=2),h}function l(h,c,m,S){return c===null||c.tag!==6?(c=Nl(m,h.mode,S),c.return=h,c):(c=i(c,m),c.return=h,c)}function s(h,c,m,S){var _=m.type;return _===vr?f(h,c,m.props.children,S,m.key):c!==null&&(c.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===Sn&&Hc(_)===c.type)?(S=i(c,m.props),S.ref=ni(h,c,m),S.return=h,S):(S=Fo(m.type,m.key,m.props,null,h.mode,S),S.ref=ni(h,c,m),S.return=h,S)}function u(h,c,m,S){return c===null||c.tag!==4||c.stateNode.containerInfo!==m.containerInfo||c.stateNode.implementation!==m.implementation?(c=Ll(m,h.mode,S),c.return=h,c):(c=i(c,m.children||[]),c.return=h,c)}function f(h,c,m,S,_){return c===null||c.tag!==7?(c=nr(m,h.mode,S,_),c.return=h,c):(c=i(c,m),c.return=h,c)}function d(h,c,m){if(typeof c=="string"&&c!==""||typeof c=="number")return c=Nl(""+c,h.mode,m),c.return=h,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case uo:return m=Fo(c.type,c.key,c.props,null,h.mode,m),m.ref=ni(h,null,c),m.return=h,m;case gr:return c=Ll(c,h.mode,m),c.return=h,c;case Sn:var S=c._init;return d(h,S(c._payload),m)}if(ui(c)||Zr(c))return c=nr(c,h.mode,m,null),c.return=h,c;ko(h,c)}return null}function p(h,c,m,S){var _=c!==null?c.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return _!==null?null:l(h,c,""+m,S);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case uo:return m.key===_?s(h,c,m,S):null;case gr:return m.key===_?u(h,c,m,S):null;case Sn:return _=m._init,p(h,c,_(m._payload),S)}if(ui(m)||Zr(m))return _!==null?null:f(h,c,m,S,null);ko(h,m)}return null}function E(h,c,m,S,_){if(typeof S=="string"&&S!==""||typeof S=="number")return h=h.get(m)||null,l(c,h,""+S,_);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case uo:return h=h.get(S.key===null?m:S.key)||null,s(c,h,S,_);case gr:return h=h.get(S.key===null?m:S.key)||null,u(c,h,S,_);case Sn:var L=S._init;return E(h,c,m,L(S._payload),_)}if(ui(S)||Zr(S))return h=h.get(m)||null,f(c,h,S,_,null);ko(c,S)}return null}function x(h,c,m,S){for(var _=null,L=null,I=c,y=c=0,U=null;I!==null&&y<m.length;y++){I.index>y?(U=I,I=null):U=I.sibling;var D=p(h,I,m[y],S);if(D===null){I===null&&(I=U);break}e&&I&&D.alternate===null&&t(h,I),c=o(D,c,y),L===null?_=D:L.sibling=D,L=D,I=U}if(y===m.length)return n(h,I),Te&&Yn(h,y),_;if(I===null){for(;y<m.length;y++)I=d(h,m[y],S),I!==null&&(c=o(I,c,y),L===null?_=I:L.sibling=I,L=I);return Te&&Yn(h,y),_}for(I=r(h,I);y<m.length;y++)U=E(I,h,y,m[y],S),U!==null&&(e&&U.alternate!==null&&I.delete(U.key===null?y:U.key),c=o(U,c,y),L===null?_=U:L.sibling=U,L=U);return e&&I.forEach(function(W){return t(h,W)}),Te&&Yn(h,y),_}function k(h,c,m,S){var _=Zr(m);if(typeof _!="function")throw Error(T(150));if(m=_.call(m),m==null)throw Error(T(151));for(var L=_=null,I=c,y=c=0,U=null,D=m.next();I!==null&&!D.done;y++,D=m.next()){I.index>y?(U=I,I=null):U=I.sibling;var W=p(h,I,D.value,S);if(W===null){I===null&&(I=U);break}e&&I&&W.alternate===null&&t(h,I),c=o(W,c,y),L===null?_=W:L.sibling=W,L=W,I=U}if(D.done)return n(h,I),Te&&Yn(h,y),_;if(I===null){for(;!D.done;y++,D=m.next())D=d(h,D.value,S),D!==null&&(c=o(D,c,y),L===null?_=D:L.sibling=D,L=D);return Te&&Yn(h,y),_}for(I=r(h,I);!D.done;y++,D=m.next())D=E(I,h,y,D.value,S),D!==null&&(e&&D.alternate!==null&&I.delete(D.key===null?y:D.key),c=o(D,c,y),L===null?_=D:L.sibling=D,L=D);return e&&I.forEach(function(ie){return t(h,ie)}),Te&&Yn(h,y),_}function R(h,c,m,S){if(typeof m=="object"&&m!==null&&m.type===vr&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case uo:e:{for(var _=m.key,L=c;L!==null;){if(L.key===_){if(_=m.type,_===vr){if(L.tag===7){n(h,L.sibling),c=i(L,m.props.children),c.return=h,h=c;break e}}else if(L.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===Sn&&Hc(_)===L.type){n(h,L.sibling),c=i(L,m.props),c.ref=ni(h,L,m),c.return=h,h=c;break e}n(h,L);break}else t(h,L);L=L.sibling}m.type===vr?(c=nr(m.props.children,h.mode,S,m.key),c.return=h,h=c):(S=Fo(m.type,m.key,m.props,null,h.mode,S),S.ref=ni(h,c,m),S.return=h,h=S)}return a(h);case gr:e:{for(L=m.key;c!==null;){if(c.key===L)if(c.tag===4&&c.stateNode.containerInfo===m.containerInfo&&c.stateNode.implementation===m.implementation){n(h,c.sibling),c=i(c,m.children||[]),c.return=h,h=c;break e}else{n(h,c);break}else t(h,c);c=c.sibling}c=Ll(m,h.mode,S),c.return=h,h=c}return a(h);case Sn:return L=m._init,R(h,c,L(m._payload),S)}if(ui(m))return x(h,c,m,S);if(Zr(m))return k(h,c,m,S);ko(h,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,c!==null&&c.tag===6?(n(h,c.sibling),c=i(c,m),c.return=h,h=c):(n(h,c),c=Nl(m,h.mode,S),c.return=h,h=c),a(h)):n(h,c)}return R}var $r=dp(!0),fp=dp(!1),na=Un(null),ra=null,Er=null,cu=null;function du(){cu=Er=ra=null}function fu(e){var t=na.current;je(na),e._currentValue=t}function hs(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Mr(e,t){ra=e,cu=Er=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(pt=!0),e.firstContext=null)}function Lt(e){var t=e._currentValue;if(cu!==e)if(e={context:e,memoizedValue:t,next:null},Er===null){if(ra===null)throw Error(T(308));Er=e,ra.dependencies={lanes:0,firstContext:e}}else Er=Er.next=e;return t}var Zn=null;function pu(e){Zn===null?Zn=[e]:Zn.push(e)}function pp(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,pu(t)):(n.next=i.next,i.next=n),t.interleaved=n,dn(e,r)}function dn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Cn=!1;function hu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function hp(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function ln(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Ln(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,ue&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,dn(e,n)}return i=r.interleaved,i===null?(t.next=t,pu(r)):(t.next=i.next,i.next=t),r.interleaved=t,dn(e,n)}function Mo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,qs(e,n)}}function Wc(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=a:o=o.next=a,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ia(e,t,n,r){var i=e.updateQueue;Cn=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var s=l,u=s.next;s.next=null,a===null?o=u:a.next=u,a=s;var f=e.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==a&&(l===null?f.firstBaseUpdate=u:l.next=u,f.lastBaseUpdate=s))}if(o!==null){var d=i.baseState;a=0,f=u=s=null,l=o;do{var p=l.lane,E=l.eventTime;if((r&p)===p){f!==null&&(f=f.next={eventTime:E,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var x=e,k=l;switch(p=t,E=n,k.tag){case 1:if(x=k.payload,typeof x=="function"){d=x.call(E,d,p);break e}d=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=k.payload,p=typeof x=="function"?x.call(E,d,p):x,p==null)break e;d=Ae({},d,p);break e;case 2:Cn=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,p=i.effects,p===null?i.effects=[l]:p.push(l))}else E={eventTime:E,lane:p,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(u=f=E,s=d):f=f.next=E,a|=p;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;p=l,l=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);if(f===null&&(s=d),i.baseState=s,i.firstBaseUpdate=u,i.lastBaseUpdate=f,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);ar|=a,e.lanes=a,e.memoizedState=d}}function Qc(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(T(191,i));i.call(r)}}}var Gi={},Gt=Un(Gi),Mi=Un(Gi),Ai=Un(Gi);function Jn(e){if(e===Gi)throw Error(T(174));return e}function mu(e,t){switch(Ce(Ai,t),Ce(Mi,e),Ce(Gt,Gi),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Kl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Kl(t,e)}je(Gt),Ce(Gt,t)}function Fr(){je(Gt),je(Mi),je(Ai)}function mp(e){Jn(Ai.current);var t=Jn(Gt.current),n=Kl(t,e.type);t!==n&&(Ce(Mi,e),Ce(Gt,n))}function gu(e){Mi.current===e&&(je(Gt),je(Mi))}var ze=Un(0);function oa(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var El=[];function vu(){for(var e=0;e<El.length;e++)El[e]._workInProgressVersionPrimary=null;El.length=0}var Ao=hn.ReactCurrentDispatcher,Rl=hn.ReactCurrentBatchConfig,or=0,Me=null,Qe=null,Ke=null,aa=!1,yi=!1,Di=0,Kg=0;function nt(){throw Error(T(321))}function yu(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Vt(e[n],t[n]))return!1;return!0}function wu(e,t,n,r,i,o){if(or=o,Me=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ao.current=e===null||e.memoizedState===null?Jg:qg,e=n(r,i),yi){o=0;do{if(yi=!1,Di=0,25<=o)throw Error(T(301));o+=1,Ke=Qe=null,t.updateQueue=null,Ao.current=e0,e=n(r,i)}while(yi)}if(Ao.current=la,t=Qe!==null&&Qe.next!==null,or=0,Ke=Qe=Me=null,aa=!1,t)throw Error(T(300));return e}function xu(){var e=Di!==0;return Di=0,e}function Qt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ke===null?Me.memoizedState=Ke=e:Ke=Ke.next=e,Ke}function zt(){if(Qe===null){var e=Me.alternate;e=e!==null?e.memoizedState:null}else e=Qe.next;var t=Ke===null?Me.memoizedState:Ke.next;if(t!==null)Ke=t,Qe=e;else{if(e===null)throw Error(T(310));Qe=e,e={memoizedState:Qe.memoizedState,baseState:Qe.baseState,baseQueue:Qe.baseQueue,queue:Qe.queue,next:null},Ke===null?Me.memoizedState=Ke=e:Ke=Ke.next=e}return Ke}function Oi(e,t){return typeof t=="function"?t(e):t}function jl(e){var t=zt(),n=t.queue;if(n===null)throw Error(T(311));n.lastRenderedReducer=e;var r=Qe,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var a=i.next;i.next=o.next,o.next=a}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var l=a=null,s=null,u=o;do{var f=u.lane;if((or&f)===f)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var d={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(l=s=d,a=r):s=s.next=d,Me.lanes|=f,ar|=f}u=u.next}while(u!==null&&u!==o);s===null?a=r:s.next=l,Vt(r,t.memoizedState)||(pt=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,Me.lanes|=o,ar|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function _l(e){var t=zt(),n=t.queue;if(n===null)throw Error(T(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do o=e(o,a.action),a=a.next;while(a!==i);Vt(o,t.memoizedState)||(pt=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function gp(){}function vp(e,t){var n=Me,r=zt(),i=t(),o=!Vt(r.memoizedState,i);if(o&&(r.memoizedState=i,pt=!0),r=r.queue,ku(xp.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||Ke!==null&&Ke.memoizedState.tag&1){if(n.flags|=2048,Ii(9,wp.bind(null,n,r,i,t),void 0,null),Ge===null)throw Error(T(349));or&30||yp(n,t,i)}return i}function yp(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Me.updateQueue,t===null?(t={lastEffect:null,stores:null},Me.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function wp(e,t,n,r){t.value=n,t.getSnapshot=r,kp(t)&&Sp(e)}function xp(e,t,n){return n(function(){kp(t)&&Sp(e)})}function kp(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Vt(e,n)}catch{return!0}}function Sp(e){var t=dn(e,1);t!==null&&Bt(t,e,1,-1)}function Yc(e){var t=Qt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Oi,lastRenderedState:e},t.queue=e,e=e.dispatch=Zg.bind(null,Me,e),[t.memoizedState,e]}function Ii(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Me.updateQueue,t===null?(t={lastEffect:null,stores:null},Me.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Cp(){return zt().memoizedState}function Do(e,t,n,r){var i=Qt();Me.flags|=e,i.memoizedState=Ii(1|t,n,void 0,r===void 0?null:r)}function Ea(e,t,n,r){var i=zt();r=r===void 0?null:r;var o=void 0;if(Qe!==null){var a=Qe.memoizedState;if(o=a.destroy,r!==null&&yu(r,a.deps)){i.memoizedState=Ii(t,n,o,r);return}}Me.flags|=e,i.memoizedState=Ii(1|t,n,o,r)}function Kc(e,t){return Do(8390656,8,e,t)}function ku(e,t){return Ea(2048,8,e,t)}function bp(e,t){return Ea(4,2,e,t)}function Ep(e,t){return Ea(4,4,e,t)}function Rp(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function jp(e,t,n){return n=n!=null?n.concat([e]):null,Ea(4,4,Rp.bind(null,t,e),n)}function Su(){}function _p(e,t){var n=zt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&yu(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Pp(e,t){var n=zt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&yu(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Tp(e,t,n){return or&21?(Vt(n,t)||(n=Af(),Me.lanes|=n,ar|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,pt=!0),e.memoizedState=n)}function Gg(e,t){var n=ge;ge=n!==0&&4>n?n:4,e(!0);var r=Rl.transition;Rl.transition={};try{e(!1),t()}finally{ge=n,Rl.transition=r}}function Np(){return zt().memoizedState}function Xg(e,t,n){var r=Mn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Lp(e))zp(t,n);else if(n=pp(e,t,n,r),n!==null){var i=ut();Bt(n,e,r,i),Mp(n,t,r)}}function Zg(e,t,n){var r=Mn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Lp(e))zp(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,l=o(a,n);if(i.hasEagerState=!0,i.eagerState=l,Vt(l,a)){var s=t.interleaved;s===null?(i.next=i,pu(t)):(i.next=s.next,s.next=i),t.interleaved=i;return}}catch{}finally{}n=pp(e,t,i,r),n!==null&&(i=ut(),Bt(n,e,r,i),Mp(n,t,r))}}function Lp(e){var t=e.alternate;return e===Me||t!==null&&t===Me}function zp(e,t){yi=aa=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Mp(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,qs(e,n)}}var la={readContext:Lt,useCallback:nt,useContext:nt,useEffect:nt,useImperativeHandle:nt,useInsertionEffect:nt,useLayoutEffect:nt,useMemo:nt,useReducer:nt,useRef:nt,useState:nt,useDebugValue:nt,useDeferredValue:nt,useTransition:nt,useMutableSource:nt,useSyncExternalStore:nt,useId:nt,unstable_isNewReconciler:!1},Jg={readContext:Lt,useCallback:function(e,t){return Qt().memoizedState=[e,t===void 0?null:t],e},useContext:Lt,useEffect:Kc,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Do(4194308,4,Rp.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Do(4194308,4,e,t)},useInsertionEffect:function(e,t){return Do(4,2,e,t)},useMemo:function(e,t){var n=Qt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Qt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Xg.bind(null,Me,e),[r.memoizedState,e]},useRef:function(e){var t=Qt();return e={current:e},t.memoizedState=e},useState:Yc,useDebugValue:Su,useDeferredValue:function(e){return Qt().memoizedState=e},useTransition:function(){var e=Yc(!1),t=e[0];return e=Gg.bind(null,e[1]),Qt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Me,i=Qt();if(Te){if(n===void 0)throw Error(T(407));n=n()}else{if(n=t(),Ge===null)throw Error(T(349));or&30||yp(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Kc(xp.bind(null,r,o,e),[e]),r.flags|=2048,Ii(9,wp.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Qt(),t=Ge.identifierPrefix;if(Te){var n=on,r=rn;n=(r&~(1<<32-Ut(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Di++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Kg++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},qg={readContext:Lt,useCallback:_p,useContext:Lt,useEffect:ku,useImperativeHandle:jp,useInsertionEffect:bp,useLayoutEffect:Ep,useMemo:Pp,useReducer:jl,useRef:Cp,useState:function(){return jl(Oi)},useDebugValue:Su,useDeferredValue:function(e){var t=zt();return Tp(t,Qe.memoizedState,e)},useTransition:function(){var e=jl(Oi)[0],t=zt().memoizedState;return[e,t]},useMutableSource:gp,useSyncExternalStore:vp,useId:Np,unstable_isNewReconciler:!1},e0={readContext:Lt,useCallback:_p,useContext:Lt,useEffect:ku,useImperativeHandle:jp,useInsertionEffect:bp,useLayoutEffect:Ep,useMemo:Pp,useReducer:_l,useRef:Cp,useState:function(){return _l(Oi)},useDebugValue:Su,useDeferredValue:function(e){var t=zt();return Qe===null?t.memoizedState=e:Tp(t,Qe.memoizedState,e)},useTransition:function(){var e=_l(Oi)[0],t=zt().memoizedState;return[e,t]},useMutableSource:gp,useSyncExternalStore:vp,useId:Np,unstable_isNewReconciler:!1};function Ot(e,t){if(e&&e.defaultProps){t=Ae({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function ms(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Ae({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ra={isMounted:function(e){return(e=e._reactInternals)?cr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ut(),i=Mn(e),o=ln(r,i);o.payload=t,n!=null&&(o.callback=n),t=Ln(e,o,i),t!==null&&(Bt(t,e,i,r),Mo(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ut(),i=Mn(e),o=ln(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Ln(e,o,i),t!==null&&(Bt(t,e,i,r),Mo(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ut(),r=Mn(e),i=ln(n,r);i.tag=2,t!=null&&(i.callback=t),t=Ln(e,i,r),t!==null&&(Bt(t,e,r,n),Mo(t,e,r))}};function Gc(e,t,n,r,i,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,a):t.prototype&&t.prototype.isPureReactComponent?!Ti(n,r)||!Ti(i,o):!0}function Ap(e,t,n){var r=!1,i=$n,o=t.contextType;return typeof o=="object"&&o!==null?o=Lt(o):(i=mt(t)?rr:ot.current,r=t.contextTypes,o=(r=r!=null)?Or(e,i):$n),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ra,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Xc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ra.enqueueReplaceState(t,t.state,null)}function gs(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},hu(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Lt(o):(o=mt(t)?rr:ot.current,i.context=Or(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(ms(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Ra.enqueueReplaceState(i,i.state,null),ia(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Ur(e,t){try{var n="",r=t;do n+=_m(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function Pl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function vs(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var t0=typeof WeakMap=="function"?WeakMap:Map;function Dp(e,t,n){n=ln(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ua||(ua=!0,js=r),vs(e,t)},n}function Op(e,t,n){n=ln(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){vs(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){vs(e,t),typeof r!="function"&&(zn===null?zn=new Set([this]):zn.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function Zc(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new t0;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=m0.bind(null,e,t,n),t.then(e,e))}function Jc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function qc(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=ln(-1,1),t.tag=2,Ln(n,t,1))),n.lanes|=1),e)}var n0=hn.ReactCurrentOwner,pt=!1;function lt(e,t,n,r){t.child=e===null?fp(t,null,n,r):$r(t,e.child,n,r)}function ed(e,t,n,r,i){n=n.render;var o=t.ref;return Mr(t,i),r=wu(e,t,n,r,o,i),n=xu(),e!==null&&!pt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,fn(e,t,i)):(Te&&n&&lu(t),t.flags|=1,lt(e,t,r,i),t.child)}function td(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Tu(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Ip(e,t,o,r,i)):(e=Fo(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var a=o.memoizedProps;if(n=n.compare,n=n!==null?n:Ti,n(a,r)&&e.ref===t.ref)return fn(e,t,i)}return t.flags|=1,e=An(o,r),e.ref=t.ref,e.return=t,t.child=e}function Ip(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Ti(o,r)&&e.ref===t.ref)if(pt=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(pt=!0);else return t.lanes=e.lanes,fn(e,t,i)}return ys(e,t,n,r,i)}function $p(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ce(jr,wt),wt|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Ce(jr,wt),wt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,Ce(jr,wt),wt|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,Ce(jr,wt),wt|=r;return lt(e,t,i,n),t.child}function Fp(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ys(e,t,n,r,i){var o=mt(n)?rr:ot.current;return o=Or(t,o),Mr(t,i),n=wu(e,t,n,r,o,i),r=xu(),e!==null&&!pt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,fn(e,t,i)):(Te&&r&&lu(t),t.flags|=1,lt(e,t,n,i),t.child)}function nd(e,t,n,r,i){if(mt(n)){var o=!0;qo(t)}else o=!1;if(Mr(t,i),t.stateNode===null)Oo(e,t),Ap(t,n,r),gs(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,l=t.memoizedProps;a.props=l;var s=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=Lt(u):(u=mt(n)?rr:ot.current,u=Or(t,u));var f=n.getDerivedStateFromProps,d=typeof f=="function"||typeof a.getSnapshotBeforeUpdate=="function";d||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||s!==u)&&Xc(t,a,r,u),Cn=!1;var p=t.memoizedState;a.state=p,ia(t,r,a,i),s=t.memoizedState,l!==r||p!==s||ht.current||Cn?(typeof f=="function"&&(ms(t,n,f,r),s=t.memoizedState),(l=Cn||Gc(t,n,l,r,p,s,u))?(d||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),a.props=r,a.state=s,a.context=u,r=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,hp(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:Ot(t.type,l),a.props=u,d=t.pendingProps,p=a.context,s=n.contextType,typeof s=="object"&&s!==null?s=Lt(s):(s=mt(n)?rr:ot.current,s=Or(t,s));var E=n.getDerivedStateFromProps;(f=typeof E=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==d||p!==s)&&Xc(t,a,r,s),Cn=!1,p=t.memoizedState,a.state=p,ia(t,r,a,i);var x=t.memoizedState;l!==d||p!==x||ht.current||Cn?(typeof E=="function"&&(ms(t,n,E,r),x=t.memoizedState),(u=Cn||Gc(t,n,u,r,p,x,s)||!1)?(f||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,x,s),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,x,s)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=x),a.props=r,a.state=x,a.context=s,r=u):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return ws(e,t,n,r,o,i)}function ws(e,t,n,r,i,o){Fp(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&Uc(t,n,!1),fn(e,t,o);r=t.stateNode,n0.current=t;var l=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=$r(t,e.child,null,o),t.child=$r(t,null,l,o)):lt(e,t,l,o),t.memoizedState=r.state,i&&Uc(t,n,!0),t.child}function Up(e){var t=e.stateNode;t.pendingContext?Fc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Fc(e,t.context,!1),mu(e,t.containerInfo)}function rd(e,t,n,r,i){return Ir(),uu(i),t.flags|=256,lt(e,t,n,r),t.child}var xs={dehydrated:null,treeContext:null,retryLane:0};function ks(e){return{baseLanes:e,cachePool:null,transitions:null}}function Bp(e,t,n){var r=t.pendingProps,i=ze.current,o=!1,a=(t.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),Ce(ze,i&1),e===null)return ps(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,o?(r=t.mode,o=t.child,a={mode:"hidden",children:a},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=Pa(a,r,0,null),e=nr(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=ks(n),t.memoizedState=xs,e):Cu(t,a));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return r0(e,t,a,r,l,i,n);if(o){o=r.fallback,a=t.mode,i=e.child,l=i.sibling;var s={mode:"hidden",children:r.children};return!(a&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=An(i,s),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?o=An(l,o):(o=nr(o,a,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,a=e.child.memoizedState,a=a===null?ks(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~n,t.memoizedState=xs,r}return o=e.child,e=o.sibling,r=An(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Cu(e,t){return t=Pa({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function So(e,t,n,r){return r!==null&&uu(r),$r(t,e.child,null,n),e=Cu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function r0(e,t,n,r,i,o,a){if(n)return t.flags&256?(t.flags&=-257,r=Pl(Error(T(422))),So(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Pa({mode:"visible",children:r.children},i,0,null),o=nr(o,i,a,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&$r(t,e.child,null,a),t.child.memoizedState=ks(a),t.memoizedState=xs,o);if(!(t.mode&1))return So(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,o=Error(T(419)),r=Pl(o,r,void 0),So(e,t,a,r)}if(l=(a&e.childLanes)!==0,pt||l){if(r=Ge,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,dn(e,i),Bt(r,e,i,-1))}return Pu(),r=Pl(Error(T(421))),So(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=g0.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,kt=Nn(i.nextSibling),Ct=t,Te=!0,Ft=null,e!==null&&(_t[Pt++]=rn,_t[Pt++]=on,_t[Pt++]=ir,rn=e.id,on=e.overflow,ir=t),t=Cu(t,r.children),t.flags|=4096,t)}function id(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),hs(e.return,t,n)}function Tl(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Vp(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(lt(e,t,r.children,n),r=ze.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&id(e,n,t);else if(e.tag===19)id(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Ce(ze,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&oa(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Tl(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&oa(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Tl(t,!0,n,null,o);break;case"together":Tl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Oo(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function fn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),ar|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(T(153));if(t.child!==null){for(e=t.child,n=An(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=An(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function i0(e,t,n){switch(t.tag){case 3:Up(t),Ir();break;case 5:mp(t);break;case 1:mt(t.type)&&qo(t);break;case 4:mu(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;Ce(na,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Ce(ze,ze.current&1),t.flags|=128,null):n&t.child.childLanes?Bp(e,t,n):(Ce(ze,ze.current&1),e=fn(e,t,n),e!==null?e.sibling:null);Ce(ze,ze.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Vp(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Ce(ze,ze.current),r)break;return null;case 22:case 23:return t.lanes=0,$p(e,t,n)}return fn(e,t,n)}var Hp,Ss,Wp,Qp;Hp=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ss=function(){};Wp=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Jn(Gt.current);var o=null;switch(n){case"input":i=Hl(e,i),r=Hl(e,r),o=[];break;case"select":i=Ae({},i,{value:void 0}),r=Ae({},r,{value:void 0}),o=[];break;case"textarea":i=Yl(e,i),r=Yl(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Zo)}Gl(n,r);var a;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ci.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var s=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&s!==l&&(s!=null||l!=null))if(u==="style")if(l){for(a in l)!l.hasOwnProperty(a)||s&&s.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in s)s.hasOwnProperty(a)&&l[a]!==s[a]&&(n||(n={}),n[a]=s[a])}else n||(o||(o=[]),o.push(u,n)),n=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,l=l?l.__html:void 0,s!=null&&l!==s&&(o=o||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(o=o||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ci.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&Re("scroll",e),o||l===s||(o=[])):(o=o||[]).push(u,s))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};Qp=function(e,t,n,r){n!==r&&(t.flags|=4)};function ri(e,t){if(!Te)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function rt(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function o0(e,t,n){var r=t.pendingProps;switch(su(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return rt(t),null;case 1:return mt(t.type)&&Jo(),rt(t),null;case 3:return r=t.stateNode,Fr(),je(ht),je(ot),vu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(xo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ft!==null&&(Ts(Ft),Ft=null))),Ss(e,t),rt(t),null;case 5:gu(t);var i=Jn(Ai.current);if(n=t.type,e!==null&&t.stateNode!=null)Wp(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(T(166));return rt(t),null}if(e=Jn(Gt.current),xo(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Yt]=t,r[zi]=o,e=(t.mode&1)!==0,n){case"dialog":Re("cancel",r),Re("close",r);break;case"iframe":case"object":case"embed":Re("load",r);break;case"video":case"audio":for(i=0;i<di.length;i++)Re(di[i],r);break;case"source":Re("error",r);break;case"img":case"image":case"link":Re("error",r),Re("load",r);break;case"details":Re("toggle",r);break;case"input":pc(r,o),Re("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},Re("invalid",r);break;case"textarea":mc(r,o),Re("invalid",r)}Gl(n,o),i=null;for(var a in o)if(o.hasOwnProperty(a)){var l=o[a];a==="children"?typeof l=="string"?r.textContent!==l&&(o.suppressHydrationWarning!==!0&&wo(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&wo(r.textContent,l,e),i=["children",""+l]):Ci.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&Re("scroll",r)}switch(n){case"input":co(r),hc(r,o,!0);break;case"textarea":co(r),gc(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Zo)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=xf(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[Yt]=t,e[zi]=r,Hp(e,t,!1,!1),t.stateNode=e;e:{switch(a=Xl(n,r),n){case"dialog":Re("cancel",e),Re("close",e),i=r;break;case"iframe":case"object":case"embed":Re("load",e),i=r;break;case"video":case"audio":for(i=0;i<di.length;i++)Re(di[i],e);i=r;break;case"source":Re("error",e),i=r;break;case"img":case"image":case"link":Re("error",e),Re("load",e),i=r;break;case"details":Re("toggle",e),i=r;break;case"input":pc(e,r),i=Hl(e,r),Re("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Ae({},r,{value:void 0}),Re("invalid",e);break;case"textarea":mc(e,r),i=Yl(e,r),Re("invalid",e);break;default:i=r}Gl(n,i),l=i;for(o in l)if(l.hasOwnProperty(o)){var s=l[o];o==="style"?Cf(e,s):o==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&kf(e,s)):o==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&bi(e,s):typeof s=="number"&&bi(e,""+s):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Ci.hasOwnProperty(o)?s!=null&&o==="onScroll"&&Re("scroll",e):s!=null&&Ys(e,o,s,a))}switch(n){case"input":co(e),hc(e,r,!1);break;case"textarea":co(e),gc(e);break;case"option":r.value!=null&&e.setAttribute("value",""+In(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Tr(e,!!r.multiple,o,!1):r.defaultValue!=null&&Tr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Zo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return rt(t),null;case 6:if(e&&t.stateNode!=null)Qp(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(T(166));if(n=Jn(Ai.current),Jn(Gt.current),xo(t)){if(r=t.stateNode,n=t.memoizedProps,r[Yt]=t,(o=r.nodeValue!==n)&&(e=Ct,e!==null))switch(e.tag){case 3:wo(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&wo(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Yt]=t,t.stateNode=r}return rt(t),null;case 13:if(je(ze),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Te&&kt!==null&&t.mode&1&&!(t.flags&128))cp(),Ir(),t.flags|=98560,o=!1;else if(o=xo(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(T(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(T(317));o[Yt]=t}else Ir(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;rt(t),o=!1}else Ft!==null&&(Ts(Ft),Ft=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||ze.current&1?Ye===0&&(Ye=3):Pu())),t.updateQueue!==null&&(t.flags|=4),rt(t),null);case 4:return Fr(),Ss(e,t),e===null&&Ni(t.stateNode.containerInfo),rt(t),null;case 10:return fu(t.type._context),rt(t),null;case 17:return mt(t.type)&&Jo(),rt(t),null;case 19:if(je(ze),o=t.memoizedState,o===null)return rt(t),null;if(r=(t.flags&128)!==0,a=o.rendering,a===null)if(r)ri(o,!1);else{if(Ye!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=oa(e),a!==null){for(t.flags|=128,ri(o,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Ce(ze,ze.current&1|2),t.child}e=e.sibling}o.tail!==null&&$e()>Br&&(t.flags|=128,r=!0,ri(o,!1),t.lanes=4194304)}else{if(!r)if(e=oa(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),ri(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!Te)return rt(t),null}else 2*$e()-o.renderingStartTime>Br&&n!==1073741824&&(t.flags|=128,r=!0,ri(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(n=o.last,n!==null?n.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=$e(),t.sibling=null,n=ze.current,Ce(ze,r?n&1|2:n&1),t):(rt(t),null);case 22:case 23:return _u(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?wt&1073741824&&(rt(t),t.subtreeFlags&6&&(t.flags|=8192)):rt(t),null;case 24:return null;case 25:return null}throw Error(T(156,t.tag))}function a0(e,t){switch(su(t),t.tag){case 1:return mt(t.type)&&Jo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Fr(),je(ht),je(ot),vu(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return gu(t),null;case 13:if(je(ze),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(T(340));Ir()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return je(ze),null;case 4:return Fr(),null;case 10:return fu(t.type._context),null;case 22:case 23:return _u(),null;case 24:return null;default:return null}}var Co=!1,it=!1,l0=typeof WeakSet=="function"?WeakSet:Set,V=null;function Rr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Oe(e,t,r)}else n.current=null}function Cs(e,t,n){try{n()}catch(r){Oe(e,t,r)}}var od=!1;function s0(e,t){if(as=Ko,e=Zf(),au(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var a=0,l=-1,s=-1,u=0,f=0,d=e,p=null;t:for(;;){for(var E;d!==n||i!==0&&d.nodeType!==3||(l=a+i),d!==o||r!==0&&d.nodeType!==3||(s=a+r),d.nodeType===3&&(a+=d.nodeValue.length),(E=d.firstChild)!==null;)p=d,d=E;for(;;){if(d===e)break t;if(p===n&&++u===i&&(l=a),p===o&&++f===r&&(s=a),(E=d.nextSibling)!==null)break;d=p,p=d.parentNode}d=E}n=l===-1||s===-1?null:{start:l,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(ls={focusedElem:e,selectionRange:n},Ko=!1,V=t;V!==null;)if(t=V,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,V=e;else for(;V!==null;){t=V;try{var x=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var k=x.memoizedProps,R=x.memoizedState,h=t.stateNode,c=h.getSnapshotBeforeUpdate(t.elementType===t.type?k:Ot(t.type,k),R);h.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(T(163))}}catch(S){Oe(t,t.return,S)}if(e=t.sibling,e!==null){e.return=t.return,V=e;break}V=t.return}return x=od,od=!1,x}function wi(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Cs(t,n,o)}i=i.next}while(i!==r)}}function ja(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function bs(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Yp(e){var t=e.alternate;t!==null&&(e.alternate=null,Yp(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Yt],delete t[zi],delete t[cs],delete t[Hg],delete t[Wg])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Kp(e){return e.tag===5||e.tag===3||e.tag===4}function ad(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Kp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Es(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Zo));else if(r!==4&&(e=e.child,e!==null))for(Es(e,t,n),e=e.sibling;e!==null;)Es(e,t,n),e=e.sibling}function Rs(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Rs(e,t,n),e=e.sibling;e!==null;)Rs(e,t,n),e=e.sibling}var qe=null,It=!1;function xn(e,t,n){for(n=n.child;n!==null;)Gp(e,t,n),n=n.sibling}function Gp(e,t,n){if(Kt&&typeof Kt.onCommitFiberUnmount=="function")try{Kt.onCommitFiberUnmount(wa,n)}catch{}switch(n.tag){case 5:it||Rr(n,t);case 6:var r=qe,i=It;qe=null,xn(e,t,n),qe=r,It=i,qe!==null&&(It?(e=qe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):qe.removeChild(n.stateNode));break;case 18:qe!==null&&(It?(e=qe,n=n.stateNode,e.nodeType===8?Cl(e.parentNode,n):e.nodeType===1&&Cl(e,n),_i(e)):Cl(qe,n.stateNode));break;case 4:r=qe,i=It,qe=n.stateNode.containerInfo,It=!0,xn(e,t,n),qe=r,It=i;break;case 0:case 11:case 14:case 15:if(!it&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&Cs(n,t,a),i=i.next}while(i!==r)}xn(e,t,n);break;case 1:if(!it&&(Rr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Oe(n,t,l)}xn(e,t,n);break;case 21:xn(e,t,n);break;case 22:n.mode&1?(it=(r=it)||n.memoizedState!==null,xn(e,t,n),it=r):xn(e,t,n);break;default:xn(e,t,n)}}function ld(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new l0),t.forEach(function(r){var i=v0.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Dt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,a=t,l=a;e:for(;l!==null;){switch(l.tag){case 5:qe=l.stateNode,It=!1;break e;case 3:qe=l.stateNode.containerInfo,It=!0;break e;case 4:qe=l.stateNode.containerInfo,It=!0;break e}l=l.return}if(qe===null)throw Error(T(160));Gp(o,a,i),qe=null,It=!1;var s=i.alternate;s!==null&&(s.return=null),i.return=null}catch(u){Oe(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Xp(t,e),t=t.sibling}function Xp(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Dt(t,e),Wt(e),r&4){try{wi(3,e,e.return),ja(3,e)}catch(k){Oe(e,e.return,k)}try{wi(5,e,e.return)}catch(k){Oe(e,e.return,k)}}break;case 1:Dt(t,e),Wt(e),r&512&&n!==null&&Rr(n,n.return);break;case 5:if(Dt(t,e),Wt(e),r&512&&n!==null&&Rr(n,n.return),e.flags&32){var i=e.stateNode;try{bi(i,"")}catch(k){Oe(e,e.return,k)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,a=n!==null?n.memoizedProps:o,l=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&yf(i,o),Xl(l,a);var u=Xl(l,o);for(a=0;a<s.length;a+=2){var f=s[a],d=s[a+1];f==="style"?Cf(i,d):f==="dangerouslySetInnerHTML"?kf(i,d):f==="children"?bi(i,d):Ys(i,f,d,u)}switch(l){case"input":Wl(i,o);break;case"textarea":wf(i,o);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var E=o.value;E!=null?Tr(i,!!o.multiple,E,!1):p!==!!o.multiple&&(o.defaultValue!=null?Tr(i,!!o.multiple,o.defaultValue,!0):Tr(i,!!o.multiple,o.multiple?[]:"",!1))}i[zi]=o}catch(k){Oe(e,e.return,k)}}break;case 6:if(Dt(t,e),Wt(e),r&4){if(e.stateNode===null)throw Error(T(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(k){Oe(e,e.return,k)}}break;case 3:if(Dt(t,e),Wt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{_i(t.containerInfo)}catch(k){Oe(e,e.return,k)}break;case 4:Dt(t,e),Wt(e);break;case 13:Dt(t,e),Wt(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Ru=$e())),r&4&&ld(e);break;case 22:if(f=n!==null&&n.memoizedState!==null,e.mode&1?(it=(u=it)||f,Dt(t,e),it=u):Dt(t,e),Wt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!f&&e.mode&1)for(V=e,f=e.child;f!==null;){for(d=V=f;V!==null;){switch(p=V,E=p.child,p.tag){case 0:case 11:case 14:case 15:wi(4,p,p.return);break;case 1:Rr(p,p.return);var x=p.stateNode;if(typeof x.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,x.props=t.memoizedProps,x.state=t.memoizedState,x.componentWillUnmount()}catch(k){Oe(r,n,k)}}break;case 5:Rr(p,p.return);break;case 22:if(p.memoizedState!==null){ud(d);continue}}E!==null?(E.return=p,V=E):ud(d)}f=f.sibling}e:for(f=null,d=e;;){if(d.tag===5){if(f===null){f=d;try{i=d.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=d.stateNode,s=d.memoizedProps.style,a=s!=null&&s.hasOwnProperty("display")?s.display:null,l.style.display=Sf("display",a))}catch(k){Oe(e,e.return,k)}}}else if(d.tag===6){if(f===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(k){Oe(e,e.return,k)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;f===d&&(f=null),d=d.return}f===d&&(f=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Dt(t,e),Wt(e),r&4&&ld(e);break;case 21:break;default:Dt(t,e),Wt(e)}}function Wt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Kp(n)){var r=n;break e}n=n.return}throw Error(T(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(bi(i,""),r.flags&=-33);var o=ad(e);Rs(e,o,i);break;case 3:case 4:var a=r.stateNode.containerInfo,l=ad(e);Es(e,l,a);break;default:throw Error(T(161))}}catch(s){Oe(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function u0(e,t,n){V=e,Zp(e)}function Zp(e,t,n){for(var r=(e.mode&1)!==0;V!==null;){var i=V,o=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||Co;if(!a){var l=i.alternate,s=l!==null&&l.memoizedState!==null||it;l=Co;var u=it;if(Co=a,(it=s)&&!u)for(V=i;V!==null;)a=V,s=a.child,a.tag===22&&a.memoizedState!==null?cd(i):s!==null?(s.return=a,V=s):cd(i);for(;o!==null;)V=o,Zp(o),o=o.sibling;V=i,Co=l,it=u}sd(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,V=o):sd(e)}}function sd(e){for(;V!==null;){var t=V;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:it||ja(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!it)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Ot(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Qc(t,o,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Qc(t,a,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var d=f.dehydrated;d!==null&&_i(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(T(163))}it||t.flags&512&&bs(t)}catch(p){Oe(t,t.return,p)}}if(t===e){V=null;break}if(n=t.sibling,n!==null){n.return=t.return,V=n;break}V=t.return}}function ud(e){for(;V!==null;){var t=V;if(t===e){V=null;break}var n=t.sibling;if(n!==null){n.return=t.return,V=n;break}V=t.return}}function cd(e){for(;V!==null;){var t=V;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ja(4,t)}catch(s){Oe(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(s){Oe(t,i,s)}}var o=t.return;try{bs(t)}catch(s){Oe(t,o,s)}break;case 5:var a=t.return;try{bs(t)}catch(s){Oe(t,a,s)}}}catch(s){Oe(t,t.return,s)}if(t===e){V=null;break}var l=t.sibling;if(l!==null){l.return=t.return,V=l;break}V=t.return}}var c0=Math.ceil,sa=hn.ReactCurrentDispatcher,bu=hn.ReactCurrentOwner,Nt=hn.ReactCurrentBatchConfig,ue=0,Ge=null,Be=null,et=0,wt=0,jr=Un(0),Ye=0,$i=null,ar=0,_a=0,Eu=0,xi=null,ft=null,Ru=0,Br=1/0,tn=null,ua=!1,js=null,zn=null,bo=!1,jn=null,ca=0,ki=0,_s=null,Io=-1,$o=0;function ut(){return ue&6?$e():Io!==-1?Io:Io=$e()}function Mn(e){return e.mode&1?ue&2&&et!==0?et&-et:Yg.transition!==null?($o===0&&($o=Af()),$o):(e=ge,e!==0||(e=window.event,e=e===void 0?16:Bf(e.type)),e):1}function Bt(e,t,n,r){if(50<ki)throw ki=0,_s=null,Error(T(185));Qi(e,n,r),(!(ue&2)||e!==Ge)&&(e===Ge&&(!(ue&2)&&(_a|=n),Ye===4&&En(e,et)),gt(e,r),n===1&&ue===0&&!(t.mode&1)&&(Br=$e()+500,ba&&Bn()))}function gt(e,t){var n=e.callbackNode;Ym(e,t);var r=Yo(e,e===Ge?et:0);if(r===0)n!==null&&wc(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&wc(n),t===1)e.tag===0?Qg(dd.bind(null,e)):lp(dd.bind(null,e)),Bg(function(){!(ue&6)&&Bn()}),n=null;else{switch(Df(r)){case 1:n=Js;break;case 4:n=zf;break;case 16:n=Qo;break;case 536870912:n=Mf;break;default:n=Qo}n=oh(n,Jp.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Jp(e,t){if(Io=-1,$o=0,ue&6)throw Error(T(327));var n=e.callbackNode;if(Ar()&&e.callbackNode!==n)return null;var r=Yo(e,e===Ge?et:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=da(e,r);else{t=r;var i=ue;ue|=2;var o=eh();(Ge!==e||et!==t)&&(tn=null,Br=$e()+500,tr(e,t));do try{p0();break}catch(l){qp(e,l)}while(1);du(),sa.current=o,ue=i,Be!==null?t=0:(Ge=null,et=0,t=Ye)}if(t!==0){if(t===2&&(i=ts(e),i!==0&&(r=i,t=Ps(e,i))),t===1)throw n=$i,tr(e,0),En(e,r),gt(e,$e()),n;if(t===6)En(e,r);else{if(i=e.current.alternate,!(r&30)&&!d0(i)&&(t=da(e,r),t===2&&(o=ts(e),o!==0&&(r=o,t=Ps(e,o))),t===1))throw n=$i,tr(e,0),En(e,r),gt(e,$e()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(T(345));case 2:Kn(e,ft,tn);break;case 3:if(En(e,r),(r&130023424)===r&&(t=Ru+500-$e(),10<t)){if(Yo(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){ut(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=us(Kn.bind(null,e,ft,tn),t);break}Kn(e,ft,tn);break;case 4:if(En(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-Ut(r);o=1<<a,a=t[a],a>i&&(i=a),r&=~o}if(r=i,r=$e()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*c0(r/1960))-r,10<r){e.timeoutHandle=us(Kn.bind(null,e,ft,tn),r);break}Kn(e,ft,tn);break;case 5:Kn(e,ft,tn);break;default:throw Error(T(329))}}}return gt(e,$e()),e.callbackNode===n?Jp.bind(null,e):null}function Ps(e,t){var n=xi;return e.current.memoizedState.isDehydrated&&(tr(e,t).flags|=256),e=da(e,t),e!==2&&(t=ft,ft=n,t!==null&&Ts(t)),e}function Ts(e){ft===null?ft=e:ft.push.apply(ft,e)}function d0(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Vt(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function En(e,t){for(t&=~Eu,t&=~_a,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ut(t),r=1<<n;e[n]=-1,t&=~r}}function dd(e){if(ue&6)throw Error(T(327));Ar();var t=Yo(e,0);if(!(t&1))return gt(e,$e()),null;var n=da(e,t);if(e.tag!==0&&n===2){var r=ts(e);r!==0&&(t=r,n=Ps(e,r))}if(n===1)throw n=$i,tr(e,0),En(e,t),gt(e,$e()),n;if(n===6)throw Error(T(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Kn(e,ft,tn),gt(e,$e()),null}function ju(e,t){var n=ue;ue|=1;try{return e(t)}finally{ue=n,ue===0&&(Br=$e()+500,ba&&Bn())}}function lr(e){jn!==null&&jn.tag===0&&!(ue&6)&&Ar();var t=ue;ue|=1;var n=Nt.transition,r=ge;try{if(Nt.transition=null,ge=1,e)return e()}finally{ge=r,Nt.transition=n,ue=t,!(ue&6)&&Bn()}}function _u(){wt=jr.current,je(jr)}function tr(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Ug(n)),Be!==null)for(n=Be.return;n!==null;){var r=n;switch(su(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Jo();break;case 3:Fr(),je(ht),je(ot),vu();break;case 5:gu(r);break;case 4:Fr();break;case 13:je(ze);break;case 19:je(ze);break;case 10:fu(r.type._context);break;case 22:case 23:_u()}n=n.return}if(Ge=e,Be=e=An(e.current,null),et=wt=t,Ye=0,$i=null,Eu=_a=ar=0,ft=xi=null,Zn!==null){for(t=0;t<Zn.length;t++)if(n=Zn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var a=o.next;o.next=i,r.next=a}n.pending=r}Zn=null}return e}function qp(e,t){do{var n=Be;try{if(du(),Ao.current=la,aa){for(var r=Me.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}aa=!1}if(or=0,Ke=Qe=Me=null,yi=!1,Di=0,bu.current=null,n===null||n.return===null){Ye=1,$i=t,Be=null;break}e:{var o=e,a=n.return,l=n,s=t;if(t=et,l.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,f=l,d=f.tag;if(!(f.mode&1)&&(d===0||d===11||d===15)){var p=f.alternate;p?(f.updateQueue=p.updateQueue,f.memoizedState=p.memoizedState,f.lanes=p.lanes):(f.updateQueue=null,f.memoizedState=null)}var E=Jc(a);if(E!==null){E.flags&=-257,qc(E,a,l,o,t),E.mode&1&&Zc(o,u,t),t=E,s=u;var x=t.updateQueue;if(x===null){var k=new Set;k.add(s),t.updateQueue=k}else x.add(s);break e}else{if(!(t&1)){Zc(o,u,t),Pu();break e}s=Error(T(426))}}else if(Te&&l.mode&1){var R=Jc(a);if(R!==null){!(R.flags&65536)&&(R.flags|=256),qc(R,a,l,o,t),uu(Ur(s,l));break e}}o=s=Ur(s,l),Ye!==4&&(Ye=2),xi===null?xi=[o]:xi.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var h=Dp(o,s,t);Wc(o,h);break e;case 1:l=s;var c=o.type,m=o.stateNode;if(!(o.flags&128)&&(typeof c.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(zn===null||!zn.has(m)))){o.flags|=65536,t&=-t,o.lanes|=t;var S=Op(o,l,t);Wc(o,S);break e}}o=o.return}while(o!==null)}nh(n)}catch(_){t=_,Be===n&&n!==null&&(Be=n=n.return);continue}break}while(1)}function eh(){var e=sa.current;return sa.current=la,e===null?la:e}function Pu(){(Ye===0||Ye===3||Ye===2)&&(Ye=4),Ge===null||!(ar&268435455)&&!(_a&268435455)||En(Ge,et)}function da(e,t){var n=ue;ue|=2;var r=eh();(Ge!==e||et!==t)&&(tn=null,tr(e,t));do try{f0();break}catch(i){qp(e,i)}while(1);if(du(),ue=n,sa.current=r,Be!==null)throw Error(T(261));return Ge=null,et=0,Ye}function f0(){for(;Be!==null;)th(Be)}function p0(){for(;Be!==null&&!Im();)th(Be)}function th(e){var t=ih(e.alternate,e,wt);e.memoizedProps=e.pendingProps,t===null?nh(e):Be=t,bu.current=null}function nh(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=a0(n,t),n!==null){n.flags&=32767,Be=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ye=6,Be=null;return}}else if(n=o0(n,t,wt),n!==null){Be=n;return}if(t=t.sibling,t!==null){Be=t;return}Be=t=e}while(t!==null);Ye===0&&(Ye=5)}function Kn(e,t,n){var r=ge,i=Nt.transition;try{Nt.transition=null,ge=1,h0(e,t,n,r)}finally{Nt.transition=i,ge=r}return null}function h0(e,t,n,r){do Ar();while(jn!==null);if(ue&6)throw Error(T(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(T(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Km(e,o),e===Ge&&(Be=Ge=null,et=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||bo||(bo=!0,oh(Qo,function(){return Ar(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Nt.transition,Nt.transition=null;var a=ge;ge=1;var l=ue;ue|=4,bu.current=null,s0(e,n),Xp(n,e),Mg(ls),Ko=!!as,ls=as=null,e.current=n,u0(n),$m(),ue=l,ge=a,Nt.transition=o}else e.current=n;if(bo&&(bo=!1,jn=e,ca=i),o=e.pendingLanes,o===0&&(zn=null),Bm(n.stateNode),gt(e,$e()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ua)throw ua=!1,e=js,js=null,e;return ca&1&&e.tag!==0&&Ar(),o=e.pendingLanes,o&1?e===_s?ki++:(ki=0,_s=e):ki=0,Bn(),null}function Ar(){if(jn!==null){var e=Df(ca),t=Nt.transition,n=ge;try{if(Nt.transition=null,ge=16>e?16:e,jn===null)var r=!1;else{if(e=jn,jn=null,ca=0,ue&6)throw Error(T(331));var i=ue;for(ue|=4,V=e.current;V!==null;){var o=V,a=o.child;if(V.flags&16){var l=o.deletions;if(l!==null){for(var s=0;s<l.length;s++){var u=l[s];for(V=u;V!==null;){var f=V;switch(f.tag){case 0:case 11:case 15:wi(8,f,o)}var d=f.child;if(d!==null)d.return=f,V=d;else for(;V!==null;){f=V;var p=f.sibling,E=f.return;if(Yp(f),f===u){V=null;break}if(p!==null){p.return=E,V=p;break}V=E}}}var x=o.alternate;if(x!==null){var k=x.child;if(k!==null){x.child=null;do{var R=k.sibling;k.sibling=null,k=R}while(k!==null)}}V=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,V=a;else e:for(;V!==null;){if(o=V,o.flags&2048)switch(o.tag){case 0:case 11:case 15:wi(9,o,o.return)}var h=o.sibling;if(h!==null){h.return=o.return,V=h;break e}V=o.return}}var c=e.current;for(V=c;V!==null;){a=V;var m=a.child;if(a.subtreeFlags&2064&&m!==null)m.return=a,V=m;else e:for(a=c;V!==null;){if(l=V,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:ja(9,l)}}catch(_){Oe(l,l.return,_)}if(l===a){V=null;break e}var S=l.sibling;if(S!==null){S.return=l.return,V=S;break e}V=l.return}}if(ue=i,Bn(),Kt&&typeof Kt.onPostCommitFiberRoot=="function")try{Kt.onPostCommitFiberRoot(wa,e)}catch{}r=!0}return r}finally{ge=n,Nt.transition=t}}return!1}function fd(e,t,n){t=Ur(n,t),t=Dp(e,t,1),e=Ln(e,t,1),t=ut(),e!==null&&(Qi(e,1,t),gt(e,t))}function Oe(e,t,n){if(e.tag===3)fd(e,e,n);else for(;t!==null;){if(t.tag===3){fd(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(zn===null||!zn.has(r))){e=Ur(n,e),e=Op(t,e,1),t=Ln(t,e,1),e=ut(),t!==null&&(Qi(t,1,e),gt(t,e));break}}t=t.return}}function m0(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ut(),e.pingedLanes|=e.suspendedLanes&n,Ge===e&&(et&n)===n&&(Ye===4||Ye===3&&(et&130023424)===et&&500>$e()-Ru?tr(e,0):Eu|=n),gt(e,t)}function rh(e,t){t===0&&(e.mode&1?(t=ho,ho<<=1,!(ho&130023424)&&(ho=4194304)):t=1);var n=ut();e=dn(e,t),e!==null&&(Qi(e,t,n),gt(e,n))}function g0(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),rh(e,n)}function v0(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(T(314))}r!==null&&r.delete(t),rh(e,n)}var ih;ih=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ht.current)pt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return pt=!1,i0(e,t,n);pt=!!(e.flags&131072)}else pt=!1,Te&&t.flags&1048576&&sp(t,ta,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Oo(e,t),e=t.pendingProps;var i=Or(t,ot.current);Mr(t,n),i=wu(null,t,r,e,i,n);var o=xu();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,mt(r)?(o=!0,qo(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,hu(t),i.updater=Ra,t.stateNode=i,i._reactInternals=t,gs(t,r,e,n),t=ws(null,t,r,!0,o,n)):(t.tag=0,Te&&o&&lu(t),lt(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Oo(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=w0(r),e=Ot(r,e),i){case 0:t=ys(null,t,r,e,n);break e;case 1:t=nd(null,t,r,e,n);break e;case 11:t=ed(null,t,r,e,n);break e;case 14:t=td(null,t,r,Ot(r.type,e),n);break e}throw Error(T(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ot(r,i),ys(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ot(r,i),nd(e,t,r,i,n);case 3:e:{if(Up(t),e===null)throw Error(T(387));r=t.pendingProps,o=t.memoizedState,i=o.element,hp(e,t),ia(t,r,null,n);var a=t.memoizedState;if(r=a.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Ur(Error(T(423)),t),t=rd(e,t,r,n,i);break e}else if(r!==i){i=Ur(Error(T(424)),t),t=rd(e,t,r,n,i);break e}else for(kt=Nn(t.stateNode.containerInfo.firstChild),Ct=t,Te=!0,Ft=null,n=fp(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ir(),r===i){t=fn(e,t,n);break e}lt(e,t,r,n)}t=t.child}return t;case 5:return mp(t),e===null&&ps(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,ss(r,i)?a=null:o!==null&&ss(r,o)&&(t.flags|=32),Fp(e,t),lt(e,t,a,n),t.child;case 6:return e===null&&ps(t),null;case 13:return Bp(e,t,n);case 4:return mu(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=$r(t,null,r,n):lt(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ot(r,i),ed(e,t,r,i,n);case 7:return lt(e,t,t.pendingProps,n),t.child;case 8:return lt(e,t,t.pendingProps.children,n),t.child;case 12:return lt(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,a=i.value,Ce(na,r._currentValue),r._currentValue=a,o!==null)if(Vt(o.value,a)){if(o.children===i.children&&!ht.current){t=fn(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var l=o.dependencies;if(l!==null){a=o.child;for(var s=l.firstContext;s!==null;){if(s.context===r){if(o.tag===1){s=ln(-1,n&-n),s.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?s.next=s:(s.next=f.next,f.next=s),u.pending=s}}o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),hs(o.return,n,t),l.lanes|=n;break}s=s.next}}else if(o.tag===10)a=o.type===t.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(T(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),hs(a,n,t),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===t){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}lt(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Mr(t,n),i=Lt(i),r=r(i),t.flags|=1,lt(e,t,r,n),t.child;case 14:return r=t.type,i=Ot(r,t.pendingProps),i=Ot(r.type,i),td(e,t,r,i,n);case 15:return Ip(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ot(r,i),Oo(e,t),t.tag=1,mt(r)?(e=!0,qo(t)):e=!1,Mr(t,n),Ap(t,r,i),gs(t,r,i,n),ws(null,t,r,!0,e,n);case 19:return Vp(e,t,n);case 22:return $p(e,t,n)}throw Error(T(156,t.tag))};function oh(e,t){return Lf(e,t)}function y0(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Tt(e,t,n,r){return new y0(e,t,n,r)}function Tu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function w0(e){if(typeof e=="function")return Tu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Gs)return 11;if(e===Xs)return 14}return 2}function An(e,t){var n=e.alternate;return n===null?(n=Tt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Fo(e,t,n,r,i,o){var a=2;if(r=e,typeof e=="function")Tu(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case vr:return nr(n.children,i,o,t);case Ks:a=8,i|=8;break;case Fl:return e=Tt(12,n,t,i|2),e.elementType=Fl,e.lanes=o,e;case Ul:return e=Tt(13,n,t,i),e.elementType=Ul,e.lanes=o,e;case Bl:return e=Tt(19,n,t,i),e.elementType=Bl,e.lanes=o,e;case mf:return Pa(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case pf:a=10;break e;case hf:a=9;break e;case Gs:a=11;break e;case Xs:a=14;break e;case Sn:a=16,r=null;break e}throw Error(T(130,e==null?e:typeof e,""))}return t=Tt(a,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function nr(e,t,n,r){return e=Tt(7,e,r,t),e.lanes=n,e}function Pa(e,t,n,r){return e=Tt(22,e,r,t),e.elementType=mf,e.lanes=n,e.stateNode={isHidden:!1},e}function Nl(e,t,n){return e=Tt(6,e,null,t),e.lanes=n,e}function Ll(e,t,n){return t=Tt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function x0(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=fl(0),this.expirationTimes=fl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=fl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Nu(e,t,n,r,i,o,a,l,s){return e=new x0(e,t,n,l,s),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Tt(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},hu(o),e}function k0(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:gr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function ah(e){if(!e)return $n;e=e._reactInternals;e:{if(cr(e)!==e||e.tag!==1)throw Error(T(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(mt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(T(171))}if(e.tag===1){var n=e.type;if(mt(n))return ap(e,n,t)}return t}function lh(e,t,n,r,i,o,a,l,s){return e=Nu(n,r,!0,e,i,o,a,l,s),e.context=ah(null),n=e.current,r=ut(),i=Mn(n),o=ln(r,i),o.callback=t??null,Ln(n,o,i),e.current.lanes=i,Qi(e,i,r),gt(e,r),e}function Ta(e,t,n,r){var i=t.current,o=ut(),a=Mn(i);return n=ah(n),t.context===null?t.context=n:t.pendingContext=n,t=ln(o,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Ln(i,t,a),e!==null&&(Bt(e,i,a,o),Mo(e,i,a)),a}function fa(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function pd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Lu(e,t){pd(e,t),(e=e.alternate)&&pd(e,t)}function S0(){return null}var sh=typeof reportError=="function"?reportError:function(e){console.error(e)};function zu(e){this._internalRoot=e}Na.prototype.render=zu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(T(409));Ta(e,t,null,null)};Na.prototype.unmount=zu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;lr(function(){Ta(null,e,null,null)}),t[cn]=null}};function Na(e){this._internalRoot=e}Na.prototype.unstable_scheduleHydration=function(e){if(e){var t=$f();e={blockedOn:null,target:e,priority:t};for(var n=0;n<bn.length&&t!==0&&t<bn[n].priority;n++);bn.splice(n,0,e),n===0&&Uf(e)}};function Mu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function La(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function hd(){}function C0(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=fa(a);o.call(u)}}var a=lh(t,r,e,0,null,!1,!1,"",hd);return e._reactRootContainer=a,e[cn]=a.current,Ni(e.nodeType===8?e.parentNode:e),lr(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=fa(s);l.call(u)}}var s=Nu(e,0,!1,null,null,!1,!1,"",hd);return e._reactRootContainer=s,e[cn]=s.current,Ni(e.nodeType===8?e.parentNode:e),lr(function(){Ta(t,s,n,r)}),s}function za(e,t,n,r,i){var o=n._reactRootContainer;if(o){var a=o;if(typeof i=="function"){var l=i;i=function(){var s=fa(a);l.call(s)}}Ta(t,a,e,i)}else a=C0(n,t,e,i,r);return fa(a)}Of=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=ci(t.pendingLanes);n!==0&&(qs(t,n|1),gt(t,$e()),!(ue&6)&&(Br=$e()+500,Bn()))}break;case 13:lr(function(){var r=dn(e,1);if(r!==null){var i=ut();Bt(r,e,1,i)}}),Lu(e,1)}};eu=function(e){if(e.tag===13){var t=dn(e,134217728);if(t!==null){var n=ut();Bt(t,e,134217728,n)}Lu(e,134217728)}};If=function(e){if(e.tag===13){var t=Mn(e),n=dn(e,t);if(n!==null){var r=ut();Bt(n,e,t,r)}Lu(e,t)}};$f=function(){return ge};Ff=function(e,t){var n=ge;try{return ge=e,t()}finally{ge=n}};Jl=function(e,t,n){switch(t){case"input":if(Wl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Ca(r);if(!i)throw Error(T(90));vf(r),Wl(r,i)}}}break;case"textarea":wf(e,n);break;case"select":t=n.value,t!=null&&Tr(e,!!n.multiple,t,!1)}};Rf=ju;jf=lr;var b0={usingClientEntryPoint:!1,Events:[Ki,kr,Ca,bf,Ef,ju]},ii={findFiberByHostInstance:Xn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},E0={bundleType:ii.bundleType,version:ii.version,rendererPackageName:ii.rendererPackageName,rendererConfig:ii.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:hn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Tf(e),e===null?null:e.stateNode},findFiberByHostInstance:ii.findFiberByHostInstance||S0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Eo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Eo.isDisabled&&Eo.supportsFiber)try{wa=Eo.inject(E0),Kt=Eo}catch{}}Et.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=b0;Et.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Mu(t))throw Error(T(200));return k0(e,t,null,n)};Et.createRoot=function(e,t){if(!Mu(e))throw Error(T(299));var n=!1,r="",i=sh;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Nu(e,1,!1,null,null,n,!1,r,i),e[cn]=t.current,Ni(e.nodeType===8?e.parentNode:e),new zu(t)};Et.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(T(188)):(e=Object.keys(e).join(","),Error(T(268,e)));return e=Tf(t),e=e===null?null:e.stateNode,e};Et.flushSync=function(e){return lr(e)};Et.hydrate=function(e,t,n){if(!La(t))throw Error(T(200));return za(null,e,t,!0,n)};Et.hydrateRoot=function(e,t,n){if(!Mu(e))throw Error(T(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",a=sh;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=lh(t,null,e,1,n??null,i,!1,o,a),e[cn]=t.current,Ni(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Na(t)};Et.render=function(e,t,n){if(!La(t))throw Error(T(200));return za(null,e,t,!1,n)};Et.unmountComponentAtNode=function(e){if(!La(e))throw Error(T(40));return e._reactRootContainer?(lr(function(){za(null,null,e,!1,function(){e._reactRootContainer=null,e[cn]=null})}),!0):!1};Et.unstable_batchedUpdates=ju;Et.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!La(n))throw Error(T(200));if(e==null||e._reactInternals===void 0)throw Error(T(38));return za(e,t,n,!1,r)};Et.version="18.3.1-next-f1338f8080-20240426";function uh(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(uh)}catch(e){console.error(e)}}uh(),uf.exports=Et;var Au=uf.exports;const R0=Fs(Au),j0=Xd({__proto__:null,default:R0},[Au]);var md=Au;Il.createRoot=md.createRoot,Il.hydrateRoot=md.hydrateRoot;/**
 * @remix-run/router v1.19.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Le(){return Le=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Le.apply(this,arguments)}var Ie;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Ie||(Ie={}));const gd="popstate";function _0(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:a,hash:l}=r.location;return Fi("",{pathname:o,search:a,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:sr(i)}return T0(t,n,null,e)}function te(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Vr(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function P0(){return Math.random().toString(36).substr(2,8)}function vd(e,t){return{usr:e.state,key:e.key,idx:t}}function Fi(e,t,n,r){return n===void 0&&(n=null),Le({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?mn(t):t,{state:n,key:t&&t.key||r||P0()})}function sr(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function mn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function T0(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,a=i.history,l=Ie.Pop,s=null,u=f();u==null&&(u=0,a.replaceState(Le({},a.state,{idx:u}),""));function f(){return(a.state||{idx:null}).idx}function d(){l=Ie.Pop;let R=f(),h=R==null?null:R-u;u=R,s&&s({action:l,location:k.location,delta:h})}function p(R,h){l=Ie.Push;let c=Fi(k.location,R,h);n&&n(c,R),u=f()+1;let m=vd(c,u),S=k.createHref(c);try{a.pushState(m,"",S)}catch(_){if(_ instanceof DOMException&&_.name==="DataCloneError")throw _;i.location.assign(S)}o&&s&&s({action:l,location:k.location,delta:1})}function E(R,h){l=Ie.Replace;let c=Fi(k.location,R,h);n&&n(c,R),u=f();let m=vd(c,u),S=k.createHref(c);a.replaceState(m,"",S),o&&s&&s({action:l,location:k.location,delta:0})}function x(R){let h=i.location.origin!=="null"?i.location.origin:i.location.href,c=typeof R=="string"?R:sr(R);return c=c.replace(/ $/,"%20"),te(h,"No window.location.(origin|href) available to create URL for href: "+c),new URL(c,h)}let k={get action(){return l},get location(){return e(i,a)},listen(R){if(s)throw new Error("A history only accepts one active listener");return i.addEventListener(gd,d),s=R,()=>{i.removeEventListener(gd,d),s=null}},createHref(R){return t(i,R)},createURL:x,encodeLocation(R){let h=x(R);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:p,replace:E,go(R){return a.go(R)}};return k}var xe;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(xe||(xe={}));const N0=new Set(["lazy","caseSensitive","path","id","index","children"]);function L0(e){return e.index===!0}function Ui(e,t,n,r){return n===void 0&&(n=[]),r===void 0&&(r={}),e.map((i,o)=>{let a=[...n,String(o)],l=typeof i.id=="string"?i.id:a.join("-");if(te(i.index!==!0||!i.children,"Cannot specify children on an index route"),te(!r[l],'Found a route id collision on id "'+l+`".  Route id's must be globally unique within Data Router usages`),L0(i)){let s=Le({},i,t(i),{id:l});return r[l]=s,s}else{let s=Le({},i,t(i),{id:l,children:void 0});return r[l]=s,i.children&&(s.children=Ui(i.children,t,a,r)),s}})}function Gn(e,t,n){return n===void 0&&(n="/"),Uo(e,t,n,!1)}function Uo(e,t,n,r){let i=typeof t=="string"?mn(t):t,o=pn(i.pathname||"/",n);if(o==null)return null;let a=ch(e);M0(a);let l=null;for(let s=0;l==null&&s<a.length;++s){let u=W0(o);l=V0(a[s],u,r)}return l}function z0(e,t){let{route:n,pathname:r,params:i}=e;return{id:n.id,pathname:r,params:i,data:t[n.id],handle:n.handle}}function ch(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,a,l)=>{let s={relativePath:l===void 0?o.path||"":l,caseSensitive:o.caseSensitive===!0,childrenIndex:a,route:o};s.relativePath.startsWith("/")&&(te(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(r.length));let u=sn([r,s.relativePath]),f=n.concat(s);o.children&&o.children.length>0&&(te(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),ch(o.children,t,f,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:U0(u,o.index),routesMeta:f})};return e.forEach((o,a)=>{var l;if(o.path===""||!((l=o.path)!=null&&l.includes("?")))i(o,a);else for(let s of dh(o.path))i(o,a,s)}),t}function dh(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let a=dh(r.join("/")),l=[];return l.push(...a.map(s=>s===""?o:[o,s].join("/"))),i&&l.push(...a),l.map(s=>e.startsWith("/")&&s===""?"/":s)}function M0(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:B0(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const A0=/^:[\w-]+$/,D0=3,O0=2,I0=1,$0=10,F0=-2,yd=e=>e==="*";function U0(e,t){let n=e.split("/"),r=n.length;return n.some(yd)&&(r+=F0),t&&(r+=O0),n.filter(i=>!yd(i)).reduce((i,o)=>i+(A0.test(o)?D0:o===""?I0:$0),r)}function B0(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function V0(e,t,n){n===void 0&&(n=!1);let{routesMeta:r}=e,i={},o="/",a=[];for(let l=0;l<r.length;++l){let s=r[l],u=l===r.length-1,f=o==="/"?t:t.slice(o.length)||"/",d=pa({path:s.relativePath,caseSensitive:s.caseSensitive,end:u},f),p=s.route;if(!d&&u&&n&&!r[r.length-1].route.index&&(d=pa({path:s.relativePath,caseSensitive:s.caseSensitive,end:!1},f)),!d)return null;Object.assign(i,d.params),a.push({params:i,pathname:sn([o,d.pathname]),pathnameBase:K0(sn([o,d.pathnameBase])),route:p}),d.pathnameBase!=="/"&&(o=sn([o,d.pathnameBase]))}return a}function pa(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=H0(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],a=o.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((u,f,d)=>{let{paramName:p,isOptional:E}=f;if(p==="*"){let k=l[d]||"";a=o.slice(0,o.length-k.length).replace(/(.)\/+$/,"$1")}const x=l[d];return E&&!x?u[p]=void 0:u[p]=(x||"").replace(/%2F/g,"/"),u},{}),pathname:o,pathnameBase:a,pattern:e}}function H0(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Vr(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,l,s)=>(r.push({paramName:l,isOptional:s!=null}),s?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function W0(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Vr(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function pn(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function Q0(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?mn(e):e;return{pathname:n?n.startsWith("/")?n:Y0(n,t):t,search:G0(r),hash:X0(i)}}function Y0(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function zl(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function fh(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Du(e,t){let n=fh(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Ou(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=mn(e):(i=Le({},e),te(!i.pathname||!i.pathname.includes("?"),zl("?","pathname","search",i)),te(!i.pathname||!i.pathname.includes("#"),zl("#","pathname","hash",i)),te(!i.search||!i.search.includes("#"),zl("#","search","hash",i)));let o=e===""||i.pathname==="",a=o?"/":i.pathname,l;if(a==null)l=n;else{let d=t.length-1;if(!r&&a.startsWith("..")){let p=a.split("/");for(;p[0]==="..";)p.shift(),d-=1;i.pathname=p.join("/")}l=d>=0?t[d]:"/"}let s=Q0(i,l),u=a&&a!=="/"&&a.endsWith("/"),f=(o||a===".")&&n.endsWith("/");return!s.pathname.endsWith("/")&&(u||f)&&(s.pathname+="/"),s}const sn=e=>e.join("/").replace(/\/\/+/g,"/"),K0=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),G0=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,X0=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;class ha{constructor(t,n,r,i){i===void 0&&(i=!1),this.status=t,this.statusText=n||"",this.internal=i,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function Ma(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const ph=["post","put","patch","delete"],Z0=new Set(ph),J0=["get",...ph],q0=new Set(J0),ev=new Set([301,302,303,307,308]),tv=new Set([307,308]),Ml={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},nv={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},oi={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},Iu=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,rv=e=>({hasErrorBoundary:!!e.hasErrorBoundary}),hh="remix-router-transitions";function iv(e){const t=e.window?e.window:typeof window<"u"?window:void 0,n=typeof t<"u"&&typeof t.document<"u"&&typeof t.document.createElement<"u",r=!n;te(e.routes.length>0,"You must provide a non-empty routes array to createRouter");let i;if(e.mapRouteProperties)i=e.mapRouteProperties;else if(e.detectErrorBoundary){let v=e.detectErrorBoundary;i=w=>({hasErrorBoundary:v(w)})}else i=rv;let o={},a=Ui(e.routes,i,void 0,o),l,s=e.basename||"/",u=e.unstable_dataStrategy||uv,f=e.unstable_patchRoutesOnNavigation,d=Le({v7_fetcherPersist:!1,v7_normalizeFormMethod:!1,v7_partialHydration:!1,v7_prependBasename:!1,v7_relativeSplatPath:!1,v7_skipActionErrorRevalidation:!1},e.future),p=null,E=new Set,x=1e3,k=new Set,R=null,h=null,c=null,m=e.hydrationData!=null,S=Gn(a,e.history.location,s),_=null;if(S==null&&!f){let v=at(404,{pathname:e.history.location.pathname}),{matches:w,route:b}=_d(a);S=w,_={[b.id]:v}}S&&!e.hydrationData&&ro(S,a,e.history.location.pathname).active&&(S=null);let L;if(S)if(S.some(v=>v.route.lazy))L=!1;else if(!S.some(v=>v.route.loader))L=!0;else if(d.v7_partialHydration){let v=e.hydrationData?e.hydrationData.loaderData:null,w=e.hydrationData?e.hydrationData.errors:null,b=P=>P.route.loader?typeof P.route.loader=="function"&&P.route.loader.hydrate===!0?!1:v&&v[P.route.id]!==void 0||w&&w[P.route.id]!==void 0:!0;if(w){let P=S.findIndex(B=>w[B.route.id]!==void 0);L=S.slice(0,P+1).every(b)}else L=S.every(b)}else L=e.hydrationData!=null;else if(L=!1,S=[],d.v7_partialHydration){let v=ro(null,a,e.history.location.pathname);v.active&&v.matches&&(S=v.matches)}let I,y={historyAction:e.history.action,location:e.history.location,matches:S,initialized:L,navigation:Ml,restoreScrollPosition:e.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:e.hydrationData&&e.hydrationData.loaderData||{},actionData:e.hydrationData&&e.hydrationData.actionData||null,errors:e.hydrationData&&e.hydrationData.errors||_,fetchers:new Map,blockers:new Map},U=Ie.Pop,D=!1,W,ie=!1,ce=new Map,le=null,be=!1,Ze=!1,Fe=[],z=new Set,F=new Map,K=0,se=-1,M=new Map,A=new Set,$=new Map,Q=new Map,C=new Set,Z=new Map,N=new Map,_e=new Map,ae=!1;function fe(){if(p=e.history.listen(v=>{let{action:w,location:b,delta:P}=v;if(ae){ae=!1;return}Vr(N.size===0||P!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let B=nc({currentLocation:y.location,nextLocation:b,historyAction:w});if(B&&P!=null){ae=!0,e.history.go(P*-1),to(B,{state:"blocked",location:b,proceed(){to(B,{state:"proceeding",proceed:void 0,reset:void 0,location:b}),e.history.go(P)},reset(){let H=new Map(y.blockers);H.set(B,oi),pe({blockers:H})}});return}return Ee(w,b)}),n){Sv(t,ce);let v=()=>Cv(t,ce);t.addEventListener("pagehide",v),le=()=>t.removeEventListener("pagehide",v)}return y.initialized||Ee(Ie.Pop,y.location,{initialHydration:!0}),I}function J(){p&&p(),le&&le(),E.clear(),W&&W.abort(),y.fetchers.forEach((v,w)=>eo(w)),y.blockers.forEach((v,w)=>tc(w))}function Ve(v){return E.add(v),()=>E.delete(v)}function pe(v,w){w===void 0&&(w={}),y=Le({},y,v);let b=[],P=[];d.v7_fetcherPersist&&y.fetchers.forEach((B,H)=>{B.state==="idle"&&(C.has(H)?P.push(H):b.push(H))}),[...E].forEach(B=>B(y,{deletedFetchers:P,unstable_viewTransitionOpts:w.viewTransitionOpts,unstable_flushSync:w.flushSync===!0})),d.v7_fetcherPersist&&(b.forEach(B=>y.fetchers.delete(B)),P.forEach(B=>eo(B)))}function re(v,w,b){var P,B;let{flushSync:H}=b===void 0?{}:b,G=y.actionData!=null&&y.navigation.formMethod!=null&&$t(y.navigation.formMethod)&&y.navigation.state==="loading"&&((P=v.state)==null?void 0:P._isRedirect)!==!0,O;w.actionData?Object.keys(w.actionData).length>0?O=w.actionData:O=null:G?O=y.actionData:O=null;let q=w.loaderData?Rd(y.loaderData,w.loaderData,w.matches||[],w.errors):y.loaderData,Y=y.blockers;Y.size>0&&(Y=new Map(Y),Y.forEach((me,ke)=>Y.set(ke,oi)));let ee=D===!0||y.navigation.formMethod!=null&&$t(y.navigation.formMethod)&&((B=v.state)==null?void 0:B._isRedirect)!==!0;l&&(a=l,l=void 0),be||U===Ie.Pop||(U===Ie.Push?e.history.push(v,v.state):U===Ie.Replace&&e.history.replace(v,v.state));let we;if(U===Ie.Pop){let me=ce.get(y.location.pathname);me&&me.has(v.pathname)?we={currentLocation:y.location,nextLocation:v}:ce.has(v.pathname)&&(we={currentLocation:v,nextLocation:y.location})}else if(ie){let me=ce.get(y.location.pathname);me?me.add(v.pathname):(me=new Set([v.pathname]),ce.set(y.location.pathname,me)),we={currentLocation:y.location,nextLocation:v}}pe(Le({},w,{actionData:O,loaderData:q,historyAction:U,location:v,initialized:!0,navigation:Ml,revalidation:"idle",restoreScrollPosition:ic(v,w.matches||y.matches),preventScrollReset:ee,blockers:Y}),{viewTransitionOpts:we,flushSync:H===!0}),U=Ie.Pop,D=!1,ie=!1,be=!1,Ze=!1,Fe=[]}async function He(v,w){if(typeof v=="number"){e.history.go(v);return}let b=Ns(y.location,y.matches,s,d.v7_prependBasename,v,d.v7_relativeSplatPath,w==null?void 0:w.fromRouteId,w==null?void 0:w.relative),{path:P,submission:B,error:H}=wd(d.v7_normalizeFormMethod,!1,b,w),G=y.location,O=Fi(y.location,P,w&&w.state);O=Le({},O,e.history.encodeLocation(O));let q=w&&w.replace!=null?w.replace:void 0,Y=Ie.Push;q===!0?Y=Ie.Replace:q===!1||B!=null&&$t(B.formMethod)&&B.formAction===y.location.pathname+y.location.search&&(Y=Ie.Replace);let ee=w&&"preventScrollReset"in w?w.preventScrollReset===!0:void 0,we=(w&&w.unstable_flushSync)===!0,me=nc({currentLocation:G,nextLocation:O,historyAction:Y});if(me){to(me,{state:"blocked",location:O,proceed(){to(me,{state:"proceeding",proceed:void 0,reset:void 0,location:O}),He(v,w)},reset(){let ke=new Map(y.blockers);ke.set(me,oi),pe({blockers:ke})}});return}return await Ee(Y,O,{submission:B,pendingError:H,preventScrollReset:ee,replace:w&&w.replace,enableViewTransition:w&&w.unstable_viewTransition,flushSync:we})}function de(){if(il(),pe({revalidation:"loading"}),y.navigation.state!=="submitting"){if(y.navigation.state==="idle"){Ee(y.historyAction,y.location,{startUninterruptedRevalidation:!0});return}Ee(U||y.historyAction,y.navigation.location,{overrideNavigation:y.navigation})}}async function Ee(v,w,b){W&&W.abort(),W=null,U=v,be=(b&&b.startUninterruptedRevalidation)===!0,Xh(y.location,y.matches),D=(b&&b.preventScrollReset)===!0,ie=(b&&b.enableViewTransition)===!0;let P=l||a,B=b&&b.overrideNavigation,H=Gn(P,w,s),G=(b&&b.flushSync)===!0,O=ro(H,P,w.pathname);if(O.active&&O.matches&&(H=O.matches),!H){let{error:he,notFoundMatches:Je,route:Ue}=ol(w.pathname);re(w,{matches:Je,loaderData:{},errors:{[Ue.id]:he}},{flushSync:G});return}if(y.initialized&&!Ze&&mv(y.location,w)&&!(b&&b.submission&&$t(b.submission.formMethod))){re(w,{matches:H},{flushSync:G});return}W=new AbortController;let q=mr(e.history,w,W.signal,b&&b.submission),Y;if(b&&b.pendingError)Y=[_r(H).route.id,{type:xe.error,error:b.pendingError}];else if(b&&b.submission&&$t(b.submission.formMethod)){let he=await Hn(q,w,b.submission,H,O.active,{replace:b.replace,flushSync:G});if(he.shortCircuited)return;if(he.pendingActionResult){let[Je,Ue]=he.pendingActionResult;if(xt(Ue)&&Ma(Ue.error)&&Ue.error.status===404){W=null,re(w,{matches:he.matches,loaderData:{},errors:{[Je]:Ue.error}});return}}H=he.matches||H,Y=he.pendingActionResult,B=Al(w,b.submission),G=!1,O.active=!1,q=mr(e.history,q.url,q.signal)}let{shortCircuited:ee,matches:we,loaderData:me,errors:ke}=await We(q,w,H,O.active,B,b&&b.submission,b&&b.fetcherSubmission,b&&b.replace,b&&b.initialHydration===!0,G,Y);ee||(W=null,re(w,Le({matches:we||H},jd(Y),{loaderData:me,errors:ke})))}async function Hn(v,w,b,P,B,H){H===void 0&&(H={}),il();let G=xv(w,b);if(pe({navigation:G},{flushSync:H.flushSync===!0}),B){let Y=await io(P,w.pathname,v.signal);if(Y.type==="aborted")return{shortCircuited:!0};if(Y.type==="error"){let{boundaryId:ee,error:we}=no(w.pathname,Y);return{matches:Y.partialMatches,pendingActionResult:[ee,{type:xe.error,error:we}]}}else if(Y.matches)P=Y.matches;else{let{notFoundMatches:ee,error:we,route:me}=ol(w.pathname);return{matches:ee,pendingActionResult:[me.id,{type:xe.error,error:we}]}}}let O,q=fi(P,w);if(!q.route.action&&!q.route.lazy)O={type:xe.error,error:at(405,{method:v.method,pathname:w.pathname,routeId:q.route.id})};else if(O=(await Jt("action",v,[q],P))[0],v.signal.aborted)return{shortCircuited:!0};if(er(O)){let Y;return H&&H.replace!=null?Y=H.replace:Y=Cd(O.response.headers.get("Location"),new URL(v.url),s)===y.location.pathname+y.location.search,await Zt(v,O,{submission:b,replace:Y}),{shortCircuited:!0}}if(qn(O))throw at(400,{type:"defer-action"});if(xt(O)){let Y=_r(P,q.route.id);return(H&&H.replace)!==!0&&(U=Ie.Push),{matches:P,pendingActionResult:[Y.route.id,O]}}return{matches:P,pendingActionResult:[q.route.id,O]}}async function We(v,w,b,P,B,H,G,O,q,Y,ee){let we=B||Al(w,H),me=H||G||Ld(we),ke=!be&&(!d.v7_partialHydration||!q);if(P){if(ke){let De=Wn(ee);pe(Le({navigation:we},De!==void 0?{actionData:De}:{}),{flushSync:Y})}let ne=await io(b,w.pathname,v.signal);if(ne.type==="aborted")return{shortCircuited:!0};if(ne.type==="error"){let{boundaryId:De,error:yt}=no(w.pathname,ne);return{matches:ne.partialMatches,loaderData:{},errors:{[De]:yt}}}else if(ne.matches)b=ne.matches;else{let{error:De,notFoundMatches:yt,route:Pe}=ol(w.pathname);return{matches:yt,loaderData:{},errors:{[Pe.id]:De}}}}let he=l||a,[Je,Ue]=xd(e.history,y,b,me,w,d.v7_partialHydration&&q===!0,d.v7_skipActionErrorRevalidation,Ze,Fe,z,C,$,A,he,s,ee);if(al(ne=>!(b&&b.some(De=>De.route.id===ne))||Je&&Je.some(De=>De.route.id===ne)),se=++K,Je.length===0&&Ue.length===0){let ne=qu();return re(w,Le({matches:b,loaderData:{},errors:ee&&xt(ee[1])?{[ee[0]]:ee[1].error}:null},jd(ee),ne?{fetchers:new Map(y.fetchers)}:{}),{flushSync:Y}),{shortCircuited:!0}}if(ke){let ne={};if(!P){ne.navigation=we;let De=Wn(ee);De!==void 0&&(ne.actionData=De)}Ue.length>0&&(ne.fetchers=Qn(Ue)),pe(ne,{flushSync:Y})}Ue.forEach(ne=>{F.has(ne.key)&&yn(ne.key),ne.controller&&F.set(ne.key,ne.controller)});let Xr=()=>Ue.forEach(ne=>yn(ne.key));W&&W.signal.addEventListener("abort",Xr);let{loaderResults:wn,fetcherResults:dr}=await At(y.matches,b,Je,Ue,v);if(v.signal.aborted)return{shortCircuited:!0};W&&W.signal.removeEventListener("abort",Xr),Ue.forEach(ne=>F.delete(ne.key));let fr=Pd([...wn,...dr]);if(fr){if(fr.idx>=Je.length){let ne=Ue[fr.idx-Je.length].key;A.add(ne)}return await Zt(v,fr.result,{replace:O}),{shortCircuited:!0}}let{loaderData:pr,errors:Ht}=Ed(y,b,Je,wn,ee,Ue,dr,Z);Z.forEach((ne,De)=>{ne.subscribe(yt=>{(yt||ne.done)&&Z.delete(De)})}),d.v7_partialHydration&&q&&y.errors&&Object.entries(y.errors).filter(ne=>{let[De]=ne;return!Je.some(yt=>yt.route.id===De)}).forEach(ne=>{let[De,yt]=ne;Ht=Object.assign(Ht||{},{[De]:yt})});let oo=qu(),ao=ec(se),lo=oo||ao||Ue.length>0;return Le({matches:b,loaderData:pr,errors:Ht},lo?{fetchers:new Map(y.fetchers)}:{})}function Wn(v){if(v&&!xt(v[1]))return{[v[0]]:v[1].data};if(y.actionData)return Object.keys(y.actionData).length===0?null:y.actionData}function Qn(v){return v.forEach(w=>{let b=y.fetchers.get(w.key),P=ai(void 0,b?b.data:void 0);y.fetchers.set(w.key,P)}),new Map(y.fetchers)}function vt(v,w,b,P){if(r)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");F.has(v)&&yn(v);let B=(P&&P.unstable_flushSync)===!0,H=l||a,G=Ns(y.location,y.matches,s,d.v7_prependBasename,b,d.v7_relativeSplatPath,w,P==null?void 0:P.relative),O=Gn(H,G,s),q=ro(O,H,G);if(q.active&&q.matches&&(O=q.matches),!O){qt(v,w,at(404,{pathname:G}),{flushSync:B});return}let{path:Y,submission:ee,error:we}=wd(d.v7_normalizeFormMethod,!0,G,P);if(we){qt(v,w,we,{flushSync:B});return}let me=fi(O,Y);if(D=(P&&P.preventScrollReset)===!0,ee&&$t(ee.formMethod)){X(v,w,Y,me,O,q.active,B,ee);return}$.set(v,{routeId:w,path:Y}),Ne(v,w,Y,me,O,q.active,B,ee)}async function X(v,w,b,P,B,H,G,O){il(),$.delete(v);function q(Pe){if(!Pe.route.action&&!Pe.route.lazy){let en=at(405,{method:O.formMethod,pathname:b,routeId:w});return qt(v,w,en,{flushSync:G}),!0}return!1}if(!H&&q(P))return;let Y=y.fetchers.get(v);vn(v,kv(O,Y),{flushSync:G});let ee=new AbortController,we=mr(e.history,b,ee.signal,O);if(H){let Pe=await io(B,b,we.signal);if(Pe.type==="aborted")return;if(Pe.type==="error"){let{error:en}=no(b,Pe);qt(v,w,en,{flushSync:G});return}else if(Pe.matches){if(B=Pe.matches,P=fi(B,b),q(P))return}else{qt(v,w,at(404,{pathname:b}),{flushSync:G});return}}F.set(v,ee);let me=K,he=(await Jt("action",we,[P],B))[0];if(we.signal.aborted){F.get(v)===ee&&F.delete(v);return}if(d.v7_fetcherPersist&&C.has(v)){if(er(he)||xt(he)){vn(v,kn(void 0));return}}else{if(er(he))if(F.delete(v),se>me){vn(v,kn(void 0));return}else return A.add(v),vn(v,ai(O)),Zt(we,he,{fetcherSubmission:O});if(xt(he)){qt(v,w,he.error);return}}if(qn(he))throw at(400,{type:"defer-action"});let Je=y.navigation.location||y.location,Ue=mr(e.history,Je,ee.signal),Xr=l||a,wn=y.navigation.state!=="idle"?Gn(Xr,y.navigation.location,s):y.matches;te(wn,"Didn't find any matches after fetcher action");let dr=++K;M.set(v,dr);let fr=ai(O,he.data);y.fetchers.set(v,fr);let[pr,Ht]=xd(e.history,y,wn,O,Je,!1,d.v7_skipActionErrorRevalidation,Ze,Fe,z,C,$,A,Xr,s,[P.route.id,he]);Ht.filter(Pe=>Pe.key!==v).forEach(Pe=>{let en=Pe.key,ac=y.fetchers.get(en),qh=ai(void 0,ac?ac.data:void 0);y.fetchers.set(en,qh),F.has(en)&&yn(en),Pe.controller&&F.set(en,Pe.controller)}),pe({fetchers:new Map(y.fetchers)});let oo=()=>Ht.forEach(Pe=>yn(Pe.key));ee.signal.addEventListener("abort",oo);let{loaderResults:ao,fetcherResults:lo}=await At(y.matches,wn,pr,Ht,Ue);if(ee.signal.aborted)return;ee.signal.removeEventListener("abort",oo),M.delete(v),F.delete(v),Ht.forEach(Pe=>F.delete(Pe.key));let ne=Pd([...ao,...lo]);if(ne){if(ne.idx>=pr.length){let Pe=Ht[ne.idx-pr.length].key;A.add(Pe)}return Zt(Ue,ne.result)}let{loaderData:De,errors:yt}=Ed(y,y.matches,pr,ao,void 0,Ht,lo,Z);if(y.fetchers.has(v)){let Pe=kn(he.data);y.fetchers.set(v,Pe)}ec(dr),y.navigation.state==="loading"&&dr>se?(te(U,"Expected pending action"),W&&W.abort(),re(y.navigation.location,{matches:wn,loaderData:De,errors:yt,fetchers:new Map(y.fetchers)})):(pe({errors:yt,loaderData:Rd(y.loaderData,De,wn,yt),fetchers:new Map(y.fetchers)}),Ze=!1)}async function Ne(v,w,b,P,B,H,G,O){let q=y.fetchers.get(v);vn(v,ai(O,q?q.data:void 0),{flushSync:G});let Y=new AbortController,ee=mr(e.history,b,Y.signal);if(H){let he=await io(B,b,ee.signal);if(he.type==="aborted")return;if(he.type==="error"){let{error:Je}=no(b,he);qt(v,w,Je,{flushSync:G});return}else if(he.matches)B=he.matches,P=fi(B,b);else{qt(v,w,at(404,{pathname:b}),{flushSync:G});return}}F.set(v,Y);let we=K,ke=(await Jt("loader",ee,[P],B))[0];if(qn(ke)&&(ke=await wh(ke,ee.signal,!0)||ke),F.get(v)===Y&&F.delete(v),!ee.signal.aborted){if(C.has(v)){vn(v,kn(void 0));return}if(er(ke))if(se>we){vn(v,kn(void 0));return}else{A.add(v),await Zt(ee,ke);return}if(xt(ke)){qt(v,w,ke.error);return}te(!qn(ke),"Unhandled fetcher deferred data"),vn(v,kn(ke.data))}}async function Zt(v,w,b){let{submission:P,fetcherSubmission:B,replace:H}=b===void 0?{}:b;w.response.headers.has("X-Remix-Revalidate")&&(Ze=!0);let G=w.response.headers.get("Location");te(G,"Expected a Location header on the redirect Response"),G=Cd(G,new URL(v.url),s);let O=Fi(y.location,G,{_isRedirect:!0});if(n){let ke=!1;if(w.response.headers.has("X-Remix-Reload-Document"))ke=!0;else if(Iu.test(G)){const he=e.history.createURL(G);ke=he.origin!==t.location.origin||pn(he.pathname,s)==null}if(ke){H?t.location.replace(G):t.location.assign(G);return}}W=null;let q=H===!0||w.response.headers.has("X-Remix-Replace")?Ie.Replace:Ie.Push,{formMethod:Y,formAction:ee,formEncType:we}=y.navigation;!P&&!B&&Y&&ee&&we&&(P=Ld(y.navigation));let me=P||B;if(tv.has(w.response.status)&&me&&$t(me.formMethod))await Ee(q,O,{submission:Le({},me,{formAction:G}),preventScrollReset:D});else{let ke=Al(O,P);await Ee(q,O,{overrideNavigation:ke,fetcherSubmission:B,preventScrollReset:D})}}async function Jt(v,w,b,P){try{let B=await cv(u,v,w,b,P,o,i);return await Promise.all(B.map((H,G)=>{if(vv(H)){let O=H.result;return{type:xe.redirect,response:pv(O,w,b[G].route.id,P,s,d.v7_relativeSplatPath)}}return fv(H)}))}catch(B){return b.map(()=>({type:xe.error,error:B}))}}async function At(v,w,b,P,B){let[H,...G]=await Promise.all([b.length?Jt("loader",B,b,w):[],...P.map(O=>{if(O.matches&&O.match&&O.controller){let q=mr(e.history,O.path,O.controller.signal);return Jt("loader",q,[O.match],O.matches).then(Y=>Y[0])}else return Promise.resolve({type:xe.error,error:at(404,{pathname:O.path})})})]);return await Promise.all([Nd(v,b,H,H.map(()=>B.signal),!1,y.loaderData),Nd(v,P.map(O=>O.match),G,P.map(O=>O.controller?O.controller.signal:null),!0)]),{loaderResults:H,fetcherResults:G}}function il(){Ze=!0,Fe.push(...al()),$.forEach((v,w)=>{F.has(w)&&(z.add(w),yn(w))})}function vn(v,w,b){b===void 0&&(b={}),y.fetchers.set(v,w),pe({fetchers:new Map(y.fetchers)},{flushSync:(b&&b.flushSync)===!0})}function qt(v,w,b,P){P===void 0&&(P={});let B=_r(y.matches,w);eo(v),pe({errors:{[B.route.id]:b},fetchers:new Map(y.fetchers)},{flushSync:(P&&P.flushSync)===!0})}function Zu(v){return d.v7_fetcherPersist&&(Q.set(v,(Q.get(v)||0)+1),C.has(v)&&C.delete(v)),y.fetchers.get(v)||nv}function eo(v){let w=y.fetchers.get(v);F.has(v)&&!(w&&w.state==="loading"&&M.has(v))&&yn(v),$.delete(v),M.delete(v),A.delete(v),C.delete(v),z.delete(v),y.fetchers.delete(v)}function Yh(v){if(d.v7_fetcherPersist){let w=(Q.get(v)||0)-1;w<=0?(Q.delete(v),C.add(v)):Q.set(v,w)}else eo(v);pe({fetchers:new Map(y.fetchers)})}function yn(v){let w=F.get(v);te(w,"Expected fetch controller: "+v),w.abort(),F.delete(v)}function Ju(v){for(let w of v){let b=Zu(w),P=kn(b.data);y.fetchers.set(w,P)}}function qu(){let v=[],w=!1;for(let b of A){let P=y.fetchers.get(b);te(P,"Expected fetcher: "+b),P.state==="loading"&&(A.delete(b),v.push(b),w=!0)}return Ju(v),w}function ec(v){let w=[];for(let[b,P]of M)if(P<v){let B=y.fetchers.get(b);te(B,"Expected fetcher: "+b),B.state==="loading"&&(yn(b),M.delete(b),w.push(b))}return Ju(w),w.length>0}function Kh(v,w){let b=y.blockers.get(v)||oi;return N.get(v)!==w&&N.set(v,w),b}function tc(v){y.blockers.delete(v),N.delete(v)}function to(v,w){let b=y.blockers.get(v)||oi;te(b.state==="unblocked"&&w.state==="blocked"||b.state==="blocked"&&w.state==="blocked"||b.state==="blocked"&&w.state==="proceeding"||b.state==="blocked"&&w.state==="unblocked"||b.state==="proceeding"&&w.state==="unblocked","Invalid blocker state transition: "+b.state+" -> "+w.state);let P=new Map(y.blockers);P.set(v,w),pe({blockers:P})}function nc(v){let{currentLocation:w,nextLocation:b,historyAction:P}=v;if(N.size===0)return;N.size>1&&Vr(!1,"A router only supports one blocker at a time");let B=Array.from(N.entries()),[H,G]=B[B.length-1],O=y.blockers.get(H);if(!(O&&O.state==="proceeding")&&G({currentLocation:w,nextLocation:b,historyAction:P}))return H}function ol(v){let w=at(404,{pathname:v}),b=l||a,{matches:P,route:B}=_d(b);return al(),{notFoundMatches:P,route:B,error:w}}function no(v,w){return{boundaryId:_r(w.partialMatches).route.id,error:at(400,{type:"route-discovery",pathname:v,message:w.error!=null&&"message"in w.error?w.error:String(w.error)})}}function al(v){let w=[];return Z.forEach((b,P)=>{(!v||v(P))&&(b.cancel(),w.push(P),Z.delete(P))}),w}function Gh(v,w,b){if(R=v,c=w,h=b||null,!m&&y.navigation===Ml){m=!0;let P=ic(y.location,y.matches);P!=null&&pe({restoreScrollPosition:P})}return()=>{R=null,c=null,h=null}}function rc(v,w){return h&&h(v,w.map(P=>z0(P,y.loaderData)))||v.key}function Xh(v,w){if(R&&c){let b=rc(v,w);R[b]=c()}}function ic(v,w){if(R){let b=rc(v,w),P=R[b];if(typeof P=="number")return P}return null}function ro(v,w,b){if(f){if(k.has(b))return{active:!1,matches:v};if(v){if(Object.keys(v[0].params).length>0)return{active:!0,matches:Uo(w,b,s,!0)}}else return{active:!0,matches:Uo(w,b,s,!0)||[]}}return{active:!1,matches:null}}async function io(v,w,b){let P=v;for(;;){let B=l==null,H=l||a;try{await sv(f,w,P,H,o,i,_e,b)}catch(q){return{type:"error",error:q,partialMatches:P}}finally{B&&(a=[...a])}if(b.aborted)return{type:"aborted"};let G=Gn(H,w,s);if(G)return oc(w,k),{type:"success",matches:G};let O=Uo(H,w,s,!0);if(!O||P.length===O.length&&P.every((q,Y)=>q.route.id===O[Y].route.id))return oc(w,k),{type:"success",matches:null};P=O}}function oc(v,w){if(w.size>=x){let b=w.values().next().value;w.delete(b)}w.add(v)}function Zh(v){o={},l=Ui(v,i,void 0,o)}function Jh(v,w){let b=l==null;gh(v,w,l||a,o,i),b&&(a=[...a],pe({}))}return I={get basename(){return s},get future(){return d},get state(){return y},get routes(){return a},get window(){return t},initialize:fe,subscribe:Ve,enableScrollRestoration:Gh,navigate:He,fetch:vt,revalidate:de,createHref:v=>e.history.createHref(v),encodeLocation:v=>e.history.encodeLocation(v),getFetcher:Zu,deleteFetcher:Yh,dispose:J,getBlocker:Kh,deleteBlocker:tc,patchRoutes:Jh,_internalFetchControllers:F,_internalActiveDeferreds:Z,_internalSetRoutes:Zh},I}function ov(e){return e!=null&&("formData"in e&&e.formData!=null||"body"in e&&e.body!==void 0)}function Ns(e,t,n,r,i,o,a,l){let s,u;if(a){s=[];for(let d of t)if(s.push(d),d.route.id===a){u=d;break}}else s=t,u=t[t.length-1];let f=Ou(i||".",Du(s,o),pn(e.pathname,n)||e.pathname,l==="path");return i==null&&(f.search=e.search,f.hash=e.hash),(i==null||i===""||i===".")&&u&&u.route.index&&!$u(f.search)&&(f.search=f.search?f.search.replace(/^\?/,"?index&"):"?index"),r&&n!=="/"&&(f.pathname=f.pathname==="/"?n:sn([n,f.pathname])),sr(f)}function wd(e,t,n,r){if(!r||!ov(r))return{path:n};if(r.formMethod&&!wv(r.formMethod))return{path:n,error:at(405,{method:r.formMethod})};let i=()=>({path:n,error:at(400,{type:"invalid-body"})}),o=r.formMethod||"get",a=e?o.toUpperCase():o.toLowerCase(),l=vh(n);if(r.body!==void 0){if(r.formEncType==="text/plain"){if(!$t(a))return i();let p=typeof r.body=="string"?r.body:r.body instanceof FormData||r.body instanceof URLSearchParams?Array.from(r.body.entries()).reduce((E,x)=>{let[k,R]=x;return""+E+k+"="+R+`
`},""):String(r.body);return{path:n,submission:{formMethod:a,formAction:l,formEncType:r.formEncType,formData:void 0,json:void 0,text:p}}}else if(r.formEncType==="application/json"){if(!$t(a))return i();try{let p=typeof r.body=="string"?JSON.parse(r.body):r.body;return{path:n,submission:{formMethod:a,formAction:l,formEncType:r.formEncType,formData:void 0,json:p,text:void 0}}}catch{return i()}}}te(typeof FormData=="function","FormData is not available in this environment");let s,u;if(r.formData)s=Ls(r.formData),u=r.formData;else if(r.body instanceof FormData)s=Ls(r.body),u=r.body;else if(r.body instanceof URLSearchParams)s=r.body,u=bd(s);else if(r.body==null)s=new URLSearchParams,u=new FormData;else try{s=new URLSearchParams(r.body),u=bd(s)}catch{return i()}let f={formMethod:a,formAction:l,formEncType:r&&r.formEncType||"application/x-www-form-urlencoded",formData:u,json:void 0,text:void 0};if($t(f.formMethod))return{path:n,submission:f};let d=mn(n);return t&&d.search&&$u(d.search)&&s.append("index",""),d.search="?"+s,{path:sr(d),submission:f}}function av(e,t){let n=e;if(t){let r=e.findIndex(i=>i.route.id===t);r>=0&&(n=e.slice(0,r))}return n}function xd(e,t,n,r,i,o,a,l,s,u,f,d,p,E,x,k){let R=k?xt(k[1])?k[1].error:k[1].data:void 0,h=e.createURL(t.location),c=e.createURL(i),m=k&&xt(k[1])?k[0]:void 0,S=m?av(n,m):n,_=k?k[1].statusCode:void 0,L=a&&_&&_>=400,I=S.filter((U,D)=>{let{route:W}=U;if(W.lazy)return!0;if(W.loader==null)return!1;if(o)return typeof W.loader!="function"||W.loader.hydrate?!0:t.loaderData[W.id]===void 0&&(!t.errors||t.errors[W.id]===void 0);if(lv(t.loaderData,t.matches[D],U)||s.some(le=>le===U.route.id))return!0;let ie=t.matches[D],ce=U;return kd(U,Le({currentUrl:h,currentParams:ie.params,nextUrl:c,nextParams:ce.params},r,{actionResult:R,actionStatus:_,defaultShouldRevalidate:L?!1:l||h.pathname+h.search===c.pathname+c.search||h.search!==c.search||mh(ie,ce)}))}),y=[];return d.forEach((U,D)=>{if(o||!n.some(be=>be.route.id===U.routeId)||f.has(D))return;let W=Gn(E,U.path,x);if(!W){y.push({key:D,routeId:U.routeId,path:U.path,matches:null,match:null,controller:null});return}let ie=t.fetchers.get(D),ce=fi(W,U.path),le=!1;p.has(D)?le=!1:u.has(D)?(u.delete(D),le=!0):ie&&ie.state!=="idle"&&ie.data===void 0?le=l:le=kd(ce,Le({currentUrl:h,currentParams:t.matches[t.matches.length-1].params,nextUrl:c,nextParams:n[n.length-1].params},r,{actionResult:R,actionStatus:_,defaultShouldRevalidate:L?!1:l})),le&&y.push({key:D,routeId:U.routeId,path:U.path,matches:W,match:ce,controller:new AbortController})}),[I,y]}function lv(e,t,n){let r=!t||n.route.id!==t.route.id,i=e[n.route.id]===void 0;return r||i}function mh(e,t){let n=e.route.path;return e.pathname!==t.pathname||n!=null&&n.endsWith("*")&&e.params["*"]!==t.params["*"]}function kd(e,t){if(e.route.shouldRevalidate){let n=e.route.shouldRevalidate(t);if(typeof n=="boolean")return n}return t.defaultShouldRevalidate}async function sv(e,t,n,r,i,o,a,l){let s=[t,...n.map(u=>u.route.id)].join("-");try{let u=a.get(s);u||(u=e({path:t,matches:n,patch:(f,d)=>{l.aborted||gh(f,d,r,i,o)}}),a.set(s,u)),u&&gv(u)&&await u}finally{a.delete(s)}}function gh(e,t,n,r,i){if(e){var o;let a=r[e];te(a,"No route found to patch children into: routeId = "+e);let l=Ui(t,i,[e,"patch",String(((o=a.children)==null?void 0:o.length)||"0")],r);a.children?a.children.push(...l):a.children=l}else{let a=Ui(t,i,["patch",String(n.length||"0")],r);n.push(...a)}}async function Sd(e,t,n){if(!e.lazy)return;let r=await e.lazy();if(!e.lazy)return;let i=n[e.id];te(i,"No route found in manifest");let o={};for(let a in r){let s=i[a]!==void 0&&a!=="hasErrorBoundary";Vr(!s,'Route "'+i.id+'" has a static property "'+a+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+a+'" will be ignored.')),!s&&!N0.has(a)&&(o[a]=r[a])}Object.assign(i,o),Object.assign(i,Le({},t(i),{lazy:void 0}))}function uv(e){return Promise.all(e.matches.map(t=>t.resolve()))}async function cv(e,t,n,r,i,o,a,l){let s=r.reduce((d,p)=>d.add(p.route.id),new Set),u=new Set,f=await e({matches:i.map(d=>{let p=s.has(d.route.id);return Le({},d,{shouldLoad:p,resolve:x=>(u.add(d.route.id),p?dv(t,n,d,o,a,x,l):Promise.resolve({type:xe.data,result:void 0}))})}),request:n,params:i[0].params,context:l});return i.forEach(d=>te(u.has(d.route.id),'`match.resolve()` was not called for route id "'+d.route.id+'". You must call `match.resolve()` on every match passed to `dataStrategy` to ensure all routes are properly loaded.')),f.filter((d,p)=>s.has(i[p].route.id))}async function dv(e,t,n,r,i,o,a){let l,s,u=f=>{let d,p=new Promise((k,R)=>d=R);s=()=>d(),t.signal.addEventListener("abort",s);let E=k=>typeof f!="function"?Promise.reject(new Error("You cannot call the handler for a route which defines a boolean "+('"'+e+'" [routeId: '+n.route.id+"]"))):f({request:t,params:n.params,context:a},...k!==void 0?[k]:[]),x;return o?x=o(k=>E(k)):x=(async()=>{try{return{type:"data",result:await E()}}catch(k){return{type:"error",result:k}}})(),Promise.race([x,p])};try{let f=n.route[e];if(n.route.lazy)if(f){let d,[p]=await Promise.all([u(f).catch(E=>{d=E}),Sd(n.route,i,r)]);if(d!==void 0)throw d;l=p}else if(await Sd(n.route,i,r),f=n.route[e],f)l=await u(f);else if(e==="action"){let d=new URL(t.url),p=d.pathname+d.search;throw at(405,{method:t.method,pathname:p,routeId:n.route.id})}else return{type:xe.data,result:void 0};else if(f)l=await u(f);else{let d=new URL(t.url),p=d.pathname+d.search;throw at(404,{pathname:p})}te(l.result!==void 0,"You defined "+(e==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+e+"` ")+"function. Please return a value or `null`.")}catch(f){return{type:xe.error,result:f}}finally{s&&t.signal.removeEventListener("abort",s)}return l}async function fv(e){let{result:t,type:n}=e;if(yh(t)){let u;try{let f=t.headers.get("Content-Type");f&&/\bapplication\/json\b/.test(f)?t.body==null?u=null:u=await t.json():u=await t.text()}catch(f){return{type:xe.error,error:f}}return n===xe.error?{type:xe.error,error:new ha(t.status,t.statusText,u),statusCode:t.status,headers:t.headers}:{type:xe.data,data:u,statusCode:t.status,headers:t.headers}}if(n===xe.error){if(Td(t)){var r;if(t.data instanceof Error){var i;return{type:xe.error,error:t.data,statusCode:(i=t.init)==null?void 0:i.status}}t=new ha(((r=t.init)==null?void 0:r.status)||500,void 0,t.data)}return{type:xe.error,error:t,statusCode:Ma(t)?t.status:void 0}}if(yv(t)){var o,a;return{type:xe.deferred,deferredData:t,statusCode:(o=t.init)==null?void 0:o.status,headers:((a=t.init)==null?void 0:a.headers)&&new Headers(t.init.headers)}}if(Td(t)){var l,s;return{type:xe.data,data:t.data,statusCode:(l=t.init)==null?void 0:l.status,headers:(s=t.init)!=null&&s.headers?new Headers(t.init.headers):void 0}}return{type:xe.data,data:t}}function pv(e,t,n,r,i,o){let a=e.headers.get("Location");if(te(a,"Redirects returned/thrown from loaders/actions must have a Location header"),!Iu.test(a)){let l=r.slice(0,r.findIndex(s=>s.route.id===n)+1);a=Ns(new URL(t.url),l,i,!0,a,o),e.headers.set("Location",a)}return e}function Cd(e,t,n){if(Iu.test(e)){let r=e,i=r.startsWith("//")?new URL(t.protocol+r):new URL(r),o=pn(i.pathname,n)!=null;if(i.origin===t.origin&&o)return i.pathname+i.search+i.hash}return e}function mr(e,t,n,r){let i=e.createURL(vh(t)).toString(),o={signal:n};if(r&&$t(r.formMethod)){let{formMethod:a,formEncType:l}=r;o.method=a.toUpperCase(),l==="application/json"?(o.headers=new Headers({"Content-Type":l}),o.body=JSON.stringify(r.json)):l==="text/plain"?o.body=r.text:l==="application/x-www-form-urlencoded"&&r.formData?o.body=Ls(r.formData):o.body=r.formData}return new Request(i,o)}function Ls(e){let t=new URLSearchParams;for(let[n,r]of e.entries())t.append(n,typeof r=="string"?r:r.name);return t}function bd(e){let t=new FormData;for(let[n,r]of e.entries())t.append(n,r);return t}function hv(e,t,n,r,i,o){let a={},l=null,s,u=!1,f={},d=r&&xt(r[1])?r[1].error:void 0;return n.forEach((p,E)=>{let x=t[E].route.id;if(te(!er(p),"Cannot handle redirect results in processLoaderData"),xt(p)){let k=p.error;if(d!==void 0&&(k=d,d=void 0),l=l||{},o)l[x]=k;else{let R=_r(e,x);l[R.route.id]==null&&(l[R.route.id]=k)}a[x]=void 0,u||(u=!0,s=Ma(p.error)?p.error.status:500),p.headers&&(f[x]=p.headers)}else qn(p)?(i.set(x,p.deferredData),a[x]=p.deferredData.data,p.statusCode!=null&&p.statusCode!==200&&!u&&(s=p.statusCode),p.headers&&(f[x]=p.headers)):(a[x]=p.data,p.statusCode&&p.statusCode!==200&&!u&&(s=p.statusCode),p.headers&&(f[x]=p.headers))}),d!==void 0&&r&&(l={[r[0]]:d},a[r[0]]=void 0),{loaderData:a,errors:l,statusCode:s||200,loaderHeaders:f}}function Ed(e,t,n,r,i,o,a,l){let{loaderData:s,errors:u}=hv(t,n,r,i,l,!1);for(let f=0;f<o.length;f++){let{key:d,match:p,controller:E}=o[f];te(a!==void 0&&a[f]!==void 0,"Did not find corresponding fetcher result");let x=a[f];if(!(E&&E.signal.aborted))if(xt(x)){let k=_r(e.matches,p==null?void 0:p.route.id);u&&u[k.route.id]||(u=Le({},u,{[k.route.id]:x.error})),e.fetchers.delete(d)}else if(er(x))te(!1,"Unhandled fetcher revalidation redirect");else if(qn(x))te(!1,"Unhandled fetcher deferred data");else{let k=kn(x.data);e.fetchers.set(d,k)}}return{loaderData:s,errors:u}}function Rd(e,t,n,r){let i=Le({},t);for(let o of n){let a=o.route.id;if(t.hasOwnProperty(a)?t[a]!==void 0&&(i[a]=t[a]):e[a]!==void 0&&o.route.loader&&(i[a]=e[a]),r&&r.hasOwnProperty(a))break}return i}function jd(e){return e?xt(e[1])?{actionData:{}}:{actionData:{[e[0]]:e[1].data}}:{}}function _r(e,t){return(t?e.slice(0,e.findIndex(r=>r.route.id===t)+1):[...e]).reverse().find(r=>r.route.hasErrorBoundary===!0)||e[0]}function _d(e){let t=e.length===1?e[0]:e.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:t}],route:t}}function at(e,t){let{pathname:n,routeId:r,method:i,type:o,message:a}=t===void 0?{}:t,l="Unknown Server Error",s="Unknown @remix-run/router error";return e===400?(l="Bad Request",o==="route-discovery"?s='Unable to match URL "'+n+'" - the `unstable_patchRoutesOnNavigation()` '+(`function threw the following error:
`+a):i&&n&&r?s="You made a "+i+' request to "'+n+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":o==="defer-action"?s="defer() is not supported in actions":o==="invalid-body"&&(s="Unable to encode submission body")):e===403?(l="Forbidden",s='Route "'+r+'" does not match URL "'+n+'"'):e===404?(l="Not Found",s='No route matches URL "'+n+'"'):e===405&&(l="Method Not Allowed",i&&n&&r?s="You made a "+i.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":i&&(s='Invalid request method "'+i.toUpperCase()+'"')),new ha(e||500,l,new Error(s),!0)}function Pd(e){for(let t=e.length-1;t>=0;t--){let n=e[t];if(er(n))return{result:n,idx:t}}}function vh(e){let t=typeof e=="string"?mn(e):e;return sr(Le({},t,{hash:""}))}function mv(e,t){return e.pathname!==t.pathname||e.search!==t.search?!1:e.hash===""?t.hash!=="":e.hash===t.hash?!0:t.hash!==""}function gv(e){return typeof e=="object"&&e!=null&&"then"in e}function vv(e){return yh(e.result)&&ev.has(e.result.status)}function qn(e){return e.type===xe.deferred}function xt(e){return e.type===xe.error}function er(e){return(e&&e.type)===xe.redirect}function Td(e){return typeof e=="object"&&e!=null&&"type"in e&&"data"in e&&"init"in e&&e.type==="DataWithResponseInit"}function yv(e){let t=e;return t&&typeof t=="object"&&typeof t.data=="object"&&typeof t.subscribe=="function"&&typeof t.cancel=="function"&&typeof t.resolveData=="function"}function yh(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.headers=="object"&&typeof e.body<"u"}function wv(e){return q0.has(e.toLowerCase())}function $t(e){return Z0.has(e.toLowerCase())}async function Nd(e,t,n,r,i,o){for(let a=0;a<n.length;a++){let l=n[a],s=t[a];if(!s)continue;let u=e.find(d=>d.route.id===s.route.id),f=u!=null&&!mh(u,s)&&(o&&o[s.route.id])!==void 0;if(qn(l)&&(i||f)){let d=r[a];te(d,"Expected an AbortSignal for revalidating fetcher deferred result"),await wh(l,d,i).then(p=>{p&&(n[a]=p||n[a])})}}}async function wh(e,t,n){if(n===void 0&&(n=!1),!await e.deferredData.resolveData(t)){if(n)try{return{type:xe.data,data:e.deferredData.unwrappedData}}catch(i){return{type:xe.error,error:i}}return{type:xe.data,data:e.deferredData.data}}}function $u(e){return new URLSearchParams(e).getAll("index").some(t=>t==="")}function fi(e,t){let n=typeof t=="string"?mn(t).search:t.search;if(e[e.length-1].route.index&&$u(n||""))return e[e.length-1];let r=fh(e);return r[r.length-1]}function Ld(e){let{formMethod:t,formAction:n,formEncType:r,text:i,formData:o,json:a}=e;if(!(!t||!n||!r)){if(i!=null)return{formMethod:t,formAction:n,formEncType:r,formData:void 0,json:void 0,text:i};if(o!=null)return{formMethod:t,formAction:n,formEncType:r,formData:o,json:void 0,text:void 0};if(a!==void 0)return{formMethod:t,formAction:n,formEncType:r,formData:void 0,json:a,text:void 0}}}function Al(e,t){return t?{state:"loading",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}:{state:"loading",location:e,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function xv(e,t){return{state:"submitting",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}}function ai(e,t){return e?{state:"loading",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t}}function kv(e,t){return{state:"submitting",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t?t.data:void 0}}function kn(e){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}function Sv(e,t){try{let n=e.sessionStorage.getItem(hh);if(n){let r=JSON.parse(n);for(let[i,o]of Object.entries(r||{}))o&&Array.isArray(o)&&t.set(i,new Set(o||[]))}}catch{}}function Cv(e,t){if(t.size>0){let n={};for(let[r,i]of t)n[r]=[...i];try{e.sessionStorage.setItem(hh,JSON.stringify(n))}catch(r){Vr(!1,"Failed to save applied view transitions in sessionStorage ("+r+").")}}}/**
 * React Router v6.26.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Bi(){return Bi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Bi.apply(this,arguments)}const Xi=j.createContext(null),Fu=j.createContext(null),Vn=j.createContext(null),Aa=j.createContext(null),gn=j.createContext({outlet:null,matches:[],isDataRoute:!1}),xh=j.createContext(null);function bv(e,t){let{relative:n}=t===void 0?{}:t;Zi()||te(!1);let{basename:r,navigator:i}=j.useContext(Vn),{hash:o,pathname:a,search:l}=Da(e,{relative:n}),s=a;return r!=="/"&&(s=a==="/"?r:sn([r,a])),i.createHref({pathname:s,search:l,hash:o})}function Zi(){return j.useContext(Aa)!=null}function Ji(){return Zi()||te(!1),j.useContext(Aa).location}function kh(e){j.useContext(Vn).static||j.useLayoutEffect(e)}function Ev(){let{isDataRoute:e}=j.useContext(gn);return e?Fv():Rv()}function Rv(){Zi()||te(!1);let e=j.useContext(Xi),{basename:t,future:n,navigator:r}=j.useContext(Vn),{matches:i}=j.useContext(gn),{pathname:o}=Ji(),a=JSON.stringify(Du(i,n.v7_relativeSplatPath)),l=j.useRef(!1);return kh(()=>{l.current=!0}),j.useCallback(function(u,f){if(f===void 0&&(f={}),!l.current)return;if(typeof u=="number"){r.go(u);return}let d=Ou(u,JSON.parse(a),o,f.relative==="path");e==null&&t!=="/"&&(d.pathname=d.pathname==="/"?t:sn([t,d.pathname])),(f.replace?r.replace:r.push)(d,f.state,f)},[t,r,a,o,e])}const jv=j.createContext(null);function _v(e){let t=j.useContext(gn).outlet;return t&&j.createElement(jv.Provider,{value:e},t)}function Pv(){let{matches:e}=j.useContext(gn),t=e[e.length-1];return t?t.params:{}}function Da(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=j.useContext(Vn),{matches:i}=j.useContext(gn),{pathname:o}=Ji(),a=JSON.stringify(Du(i,r.v7_relativeSplatPath));return j.useMemo(()=>Ou(e,JSON.parse(a),o,n==="path"),[e,a,o,n])}function Tv(e,t,n,r){Zi()||te(!1);let{navigator:i}=j.useContext(Vn),{matches:o}=j.useContext(gn),a=o[o.length-1],l=a?a.params:{};a&&a.pathname;let s=a?a.pathnameBase:"/";a&&a.route;let u=Ji(),f;if(t){var d;let R=typeof t=="string"?mn(t):t;s==="/"||(d=R.pathname)!=null&&d.startsWith(s)||te(!1),f=R}else f=u;let p=f.pathname||"/",E=p;if(s!=="/"){let R=s.replace(/^\//,"").split("/");E="/"+p.replace(/^\//,"").split("/").slice(R.length).join("/")}let x=Gn(e,{pathname:E}),k=Av(x&&x.map(R=>Object.assign({},R,{params:Object.assign({},l,R.params),pathname:sn([s,i.encodeLocation?i.encodeLocation(R.pathname).pathname:R.pathname]),pathnameBase:R.pathnameBase==="/"?s:sn([s,i.encodeLocation?i.encodeLocation(R.pathnameBase).pathname:R.pathnameBase])})),o,n,r);return t&&k?j.createElement(Aa.Provider,{value:{location:Bi({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:Ie.Pop}},k):k}function Nv(){let e=$v(),t=Ma(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return j.createElement(j.Fragment,null,j.createElement("h2",null,"Unexpected Application Error!"),j.createElement("h3",{style:{fontStyle:"italic"}},t),n?j.createElement("pre",{style:i},n):null,o)}const Lv=j.createElement(Nv,null);class zv extends j.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?j.createElement(gn.Provider,{value:this.props.routeContext},j.createElement(xh.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Mv(e){let{routeContext:t,match:n,children:r}=e,i=j.useContext(Xi);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),j.createElement(gn.Provider,{value:t},r)}function Av(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var o;if(!n)return null;if(n.errors)e=n.matches;else if((o=r)!=null&&o.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let a=e,l=(i=n)==null?void 0:i.errors;if(l!=null){let f=a.findIndex(d=>d.route.id&&(l==null?void 0:l[d.route.id])!==void 0);f>=0||te(!1),a=a.slice(0,Math.min(a.length,f+1))}let s=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let f=0;f<a.length;f++){let d=a[f];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(u=f),d.route.id){let{loaderData:p,errors:E}=n,x=d.route.loader&&p[d.route.id]===void 0&&(!E||E[d.route.id]===void 0);if(d.route.lazy||x){s=!0,u>=0?a=a.slice(0,u+1):a=[a[0]];break}}}return a.reduceRight((f,d,p)=>{let E,x=!1,k=null,R=null;n&&(E=l&&d.route.id?l[d.route.id]:void 0,k=d.route.errorElement||Lv,s&&(u<0&&p===0?(Uv("route-fallback",!1),x=!0,R=null):u===p&&(x=!0,R=d.route.hydrateFallbackElement||null)));let h=t.concat(a.slice(0,p+1)),c=()=>{let m;return E?m=k:x?m=R:d.route.Component?m=j.createElement(d.route.Component,null):d.route.element?m=d.route.element:m=f,j.createElement(Mv,{match:d,routeContext:{outlet:f,matches:h,isDataRoute:n!=null},children:m})};return n&&(d.route.ErrorBoundary||d.route.errorElement||p===0)?j.createElement(zv,{location:n.location,revalidation:n.revalidation,component:k,error:E,children:c(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):c()},null)}var Sh=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Sh||{}),ma=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(ma||{});function Dv(e){let t=j.useContext(Xi);return t||te(!1),t}function Ov(e){let t=j.useContext(Fu);return t||te(!1),t}function Iv(e){let t=j.useContext(gn);return t||te(!1),t}function Ch(e){let t=Iv(),n=t.matches[t.matches.length-1];return n.route.id||te(!1),n.route.id}function $v(){var e;let t=j.useContext(xh),n=Ov(ma.UseRouteError),r=Ch(ma.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function Fv(){let{router:e}=Dv(Sh.UseNavigateStable),t=Ch(ma.UseNavigateStable),n=j.useRef(!1);return kh(()=>{n.current=!0}),j.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,Bi({fromRouteId:t},o)))},[e,t])}const zd={};function Uv(e,t,n){!t&&!zd[e]&&(zd[e]=!0)}function Uu(e){return _v(e.context)}function Bv(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Ie.Pop,navigator:o,static:a=!1,future:l}=e;Zi()&&te(!1);let s=t.replace(/^\/*/,"/"),u=j.useMemo(()=>({basename:s,navigator:o,static:a,future:Bi({v7_relativeSplatPath:!1},l)}),[s,l,o,a]);typeof r=="string"&&(r=mn(r));let{pathname:f="/",search:d="",hash:p="",state:E=null,key:x="default"}=r,k=j.useMemo(()=>{let R=pn(f,s);return R==null?null:{location:{pathname:R,search:d,hash:p,state:E,key:x},navigationType:i}},[s,f,d,p,E,x,i]);return k==null?null:j.createElement(Vn.Provider,{value:u},j.createElement(Aa.Provider,{children:n,value:k}))}new Promise(()=>{});function Vv(e){let t={hasErrorBoundary:e.ErrorBoundary!=null||e.errorElement!=null};return e.Component&&Object.assign(t,{element:j.createElement(e.Component),Component:void 0}),e.HydrateFallback&&Object.assign(t,{hydrateFallbackElement:j.createElement(e.HydrateFallback),HydrateFallback:void 0}),e.ErrorBoundary&&Object.assign(t,{errorElement:j.createElement(e.ErrorBoundary),ErrorBoundary:void 0}),t}/**
 * React Router DOM v6.26.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Hr(){return Hr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Hr.apply(this,arguments)}function bh(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function Hv(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Wv(e,t){return e.button===0&&(!t||t==="_self")&&!Hv(e)}const Qv=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],Yv=["aria-current","caseSensitive","className","end","style","to","unstable_viewTransition","children"],Kv="6";try{window.__reactRouterVersion=Kv}catch{}function Gv(e,t){return iv({basename:t==null?void 0:t.basename,future:Hr({},t==null?void 0:t.future,{v7_prependBasename:!0}),history:_0({window:t==null?void 0:t.window}),hydrationData:(t==null?void 0:t.hydrationData)||Xv(),routes:e,mapRouteProperties:Vv,unstable_dataStrategy:t==null?void 0:t.unstable_dataStrategy,unstable_patchRoutesOnNavigation:t==null?void 0:t.unstable_patchRoutesOnNavigation,window:t==null?void 0:t.window}).initialize()}function Xv(){var e;let t=(e=window)==null?void 0:e.__staticRouterHydrationData;return t&&t.errors&&(t=Hr({},t,{errors:Zv(t.errors)})),t}function Zv(e){if(!e)return null;let t=Object.entries(e),n={};for(let[r,i]of t)if(i&&i.__type==="RouteErrorResponse")n[r]=new ha(i.status,i.statusText,i.data,i.internal===!0);else if(i&&i.__type==="Error"){if(i.__subType){let o=window[i.__subType];if(typeof o=="function")try{let a=new o(i.message);a.stack="",n[r]=a}catch{}}if(n[r]==null){let o=new Error(i.message);o.stack="",n[r]=o}}else n[r]=i;return n}const Eh=j.createContext({isTransitioning:!1}),Jv=j.createContext(new Map),qv="startTransition",Md=mm[qv],e1="flushSync",Ad=j0[e1];function t1(e){Md?Md(e):e()}function li(e){Ad?Ad(e):e()}class n1{constructor(){this.status="pending",this.promise=new Promise((t,n)=>{this.resolve=r=>{this.status==="pending"&&(this.status="resolved",t(r))},this.reject=r=>{this.status==="pending"&&(this.status="rejected",n(r))}})}}function r1(e){let{fallbackElement:t,router:n,future:r}=e,[i,o]=j.useState(n.state),[a,l]=j.useState(),[s,u]=j.useState({isTransitioning:!1}),[f,d]=j.useState(),[p,E]=j.useState(),[x,k]=j.useState(),R=j.useRef(new Map),{v7_startTransition:h}=r||{},c=j.useCallback(y=>{h?t1(y):y()},[h]),m=j.useCallback((y,U)=>{let{deletedFetchers:D,unstable_flushSync:W,unstable_viewTransitionOpts:ie}=U;D.forEach(le=>R.current.delete(le)),y.fetchers.forEach((le,be)=>{le.data!==void 0&&R.current.set(be,le.data)});let ce=n.window==null||n.window.document==null||typeof n.window.document.startViewTransition!="function";if(!ie||ce){W?li(()=>o(y)):c(()=>o(y));return}if(W){li(()=>{p&&(f&&f.resolve(),p.skipTransition()),u({isTransitioning:!0,flushSync:!0,currentLocation:ie.currentLocation,nextLocation:ie.nextLocation})});let le=n.window.document.startViewTransition(()=>{li(()=>o(y))});le.finished.finally(()=>{li(()=>{d(void 0),E(void 0),l(void 0),u({isTransitioning:!1})})}),li(()=>E(le));return}p?(f&&f.resolve(),p.skipTransition(),k({state:y,currentLocation:ie.currentLocation,nextLocation:ie.nextLocation})):(l(y),u({isTransitioning:!0,flushSync:!1,currentLocation:ie.currentLocation,nextLocation:ie.nextLocation}))},[n.window,p,f,R,c]);j.useLayoutEffect(()=>n.subscribe(m),[n,m]),j.useEffect(()=>{s.isTransitioning&&!s.flushSync&&d(new n1)},[s]),j.useEffect(()=>{if(f&&a&&n.window){let y=a,U=f.promise,D=n.window.document.startViewTransition(async()=>{c(()=>o(y)),await U});D.finished.finally(()=>{d(void 0),E(void 0),l(void 0),u({isTransitioning:!1})}),E(D)}},[c,a,f,n.window]),j.useEffect(()=>{f&&a&&i.location.key===a.location.key&&f.resolve()},[f,p,i.location,a]),j.useEffect(()=>{!s.isTransitioning&&x&&(l(x.state),u({isTransitioning:!0,flushSync:!1,currentLocation:x.currentLocation,nextLocation:x.nextLocation}),k(void 0))},[s.isTransitioning,x]),j.useEffect(()=>{},[]);let S=j.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:y=>n.navigate(y),push:(y,U,D)=>n.navigate(y,{state:U,preventScrollReset:D==null?void 0:D.preventScrollReset}),replace:(y,U,D)=>n.navigate(y,{replace:!0,state:U,preventScrollReset:D==null?void 0:D.preventScrollReset})}),[n]),_=n.basename||"/",L=j.useMemo(()=>({router:n,navigator:S,static:!1,basename:_}),[n,S,_]),I=j.useMemo(()=>({v7_relativeSplatPath:n.future.v7_relativeSplatPath}),[n.future.v7_relativeSplatPath]);return j.createElement(j.Fragment,null,j.createElement(Xi.Provider,{value:L},j.createElement(Fu.Provider,{value:i},j.createElement(Jv.Provider,{value:R.current},j.createElement(Eh.Provider,{value:s},j.createElement(Bv,{basename:_,location:i.location,navigationType:i.historyAction,navigator:S,future:I},i.initialized||n.future.v7_partialHydration?j.createElement(i1,{routes:n.routes,future:n.future,state:i}):t))))),null)}const i1=j.memo(o1);function o1(e){let{routes:t,future:n,state:r}=e;return Tv(t,void 0,r,n)}const a1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",l1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Vi=j.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:a,state:l,target:s,to:u,preventScrollReset:f,unstable_viewTransition:d}=t,p=bh(t,Qv),{basename:E}=j.useContext(Vn),x,k=!1;if(typeof u=="string"&&l1.test(u)&&(x=u,a1))try{let m=new URL(window.location.href),S=u.startsWith("//")?new URL(m.protocol+u):new URL(u),_=pn(S.pathname,E);S.origin===m.origin&&_!=null?u=_+S.search+S.hash:k=!0}catch{}let R=bv(u,{relative:i}),h=c1(u,{replace:a,state:l,target:s,preventScrollReset:f,relative:i,unstable_viewTransition:d});function c(m){r&&r(m),m.defaultPrevented||h(m)}return j.createElement("a",Hr({},p,{href:x||R,onClick:k||o?r:c,ref:n,target:s}))}),s1=j.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:i=!1,className:o="",end:a=!1,style:l,to:s,unstable_viewTransition:u,children:f}=t,d=bh(t,Yv),p=Da(s,{relative:d.relative}),E=Ji(),x=j.useContext(Fu),{navigator:k,basename:R}=j.useContext(Vn),h=x!=null&&d1(p)&&u===!0,c=k.encodeLocation?k.encodeLocation(p).pathname:p.pathname,m=E.pathname,S=x&&x.navigation&&x.navigation.location?x.navigation.location.pathname:null;i||(m=m.toLowerCase(),S=S?S.toLowerCase():null,c=c.toLowerCase()),S&&R&&(S=pn(S,R)||S);const _=c!=="/"&&c.endsWith("/")?c.length-1:c.length;let L=m===c||!a&&m.startsWith(c)&&m.charAt(_)==="/",I=S!=null&&(S===c||!a&&S.startsWith(c)&&S.charAt(c.length)==="/"),y={isActive:L,isPending:I,isTransitioning:h},U=L?r:void 0,D;typeof o=="function"?D=o(y):D=[o,L?"active":null,I?"pending":null,h?"transitioning":null].filter(Boolean).join(" ");let W=typeof l=="function"?l(y):l;return j.createElement(Vi,Hr({},d,{"aria-current":U,className:D,ref:n,style:W,to:s,unstable_viewTransition:u}),typeof f=="function"?f(y):f)});var zs;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(zs||(zs={}));var Dd;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Dd||(Dd={}));function u1(e){let t=j.useContext(Xi);return t||te(!1),t}function c1(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:a,unstable_viewTransition:l}=t===void 0?{}:t,s=Ev(),u=Ji(),f=Da(e,{relative:a});return j.useCallback(d=>{if(Wv(d,n)){d.preventDefault();let p=r!==void 0?r:sr(u)===sr(f);s(e,{replace:p,state:i,preventScrollReset:o,relative:a,unstable_viewTransition:l})}},[u,s,f,r,i,n,e,o,a,l])}function d1(e,t){t===void 0&&(t={});let n=j.useContext(Eh);n==null&&te(!1);let{basename:r}=u1(zs.useViewTransitionState),i=Da(e,{relative:t.relative});if(!n.isTransitioning)return!1;let o=pn(n.currentLocation.pathname,r)||n.currentLocation.pathname,a=pn(n.nextLocation.pathname,r)||n.nextLocation.pathname;return pa(i.pathname,a)!=null||pa(i.pathname,o)!=null}var Rh={exports:{}},ve={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bu=Symbol.for("react.element"),Vu=Symbol.for("react.portal"),Oa=Symbol.for("react.fragment"),Ia=Symbol.for("react.strict_mode"),$a=Symbol.for("react.profiler"),Fa=Symbol.for("react.provider"),Ua=Symbol.for("react.context"),f1=Symbol.for("react.server_context"),Ba=Symbol.for("react.forward_ref"),Va=Symbol.for("react.suspense"),Ha=Symbol.for("react.suspense_list"),Wa=Symbol.for("react.memo"),Qa=Symbol.for("react.lazy"),p1=Symbol.for("react.offscreen"),jh;jh=Symbol.for("react.module.reference");function Mt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Bu:switch(e=e.type,e){case Oa:case $a:case Ia:case Va:case Ha:return e;default:switch(e=e&&e.$$typeof,e){case f1:case Ua:case Ba:case Qa:case Wa:case Fa:return e;default:return t}}case Vu:return t}}}ve.ContextConsumer=Ua;ve.ContextProvider=Fa;ve.Element=Bu;ve.ForwardRef=Ba;ve.Fragment=Oa;ve.Lazy=Qa;ve.Memo=Wa;ve.Portal=Vu;ve.Profiler=$a;ve.StrictMode=Ia;ve.Suspense=Va;ve.SuspenseList=Ha;ve.isAsyncMode=function(){return!1};ve.isConcurrentMode=function(){return!1};ve.isContextConsumer=function(e){return Mt(e)===Ua};ve.isContextProvider=function(e){return Mt(e)===Fa};ve.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Bu};ve.isForwardRef=function(e){return Mt(e)===Ba};ve.isFragment=function(e){return Mt(e)===Oa};ve.isLazy=function(e){return Mt(e)===Qa};ve.isMemo=function(e){return Mt(e)===Wa};ve.isPortal=function(e){return Mt(e)===Vu};ve.isProfiler=function(e){return Mt(e)===$a};ve.isStrictMode=function(e){return Mt(e)===Ia};ve.isSuspense=function(e){return Mt(e)===Va};ve.isSuspenseList=function(e){return Mt(e)===Ha};ve.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Oa||e===$a||e===Ia||e===Va||e===Ha||e===p1||typeof e=="object"&&e!==null&&(e.$$typeof===Qa||e.$$typeof===Wa||e.$$typeof===Fa||e.$$typeof===Ua||e.$$typeof===Ba||e.$$typeof===jh||e.getModuleId!==void 0)};ve.typeOf=Mt;Rh.exports=ve;var _h=Rh.exports;function h1(e){function t(M,A,$,Q,C){for(var Z=0,N=0,_e=0,ae=0,fe,J,Ve=0,pe=0,re,He=re=fe=0,de=0,Ee=0,Hn=0,We=0,Wn=$.length,Qn=Wn-1,vt,X="",Ne="",Zt="",Jt="",At;de<Wn;){if(J=$.charCodeAt(de),de===Qn&&N+ae+_e+Z!==0&&(N!==0&&(J=N===47?10:47),ae=_e=Z=0,Wn++,Qn++),N+ae+_e+Z===0){if(de===Qn&&(0<Ee&&(X=X.replace(p,"")),0<X.trim().length)){switch(J){case 32:case 9:case 59:case 13:case 10:break;default:X+=$.charAt(de)}J=59}switch(J){case 123:for(X=X.trim(),fe=X.charCodeAt(0),re=1,We=++de;de<Wn;){switch(J=$.charCodeAt(de)){case 123:re++;break;case 125:re--;break;case 47:switch(J=$.charCodeAt(de+1)){case 42:case 47:e:{for(He=de+1;He<Qn;++He)switch($.charCodeAt(He)){case 47:if(J===42&&$.charCodeAt(He-1)===42&&de+2!==He){de=He+1;break e}break;case 10:if(J===47){de=He+1;break e}}de=He}}break;case 91:J++;case 40:J++;case 34:case 39:for(;de++<Qn&&$.charCodeAt(de)!==J;);}if(re===0)break;de++}switch(re=$.substring(We,de),fe===0&&(fe=(X=X.replace(d,"").trim()).charCodeAt(0)),fe){case 64:switch(0<Ee&&(X=X.replace(p,"")),J=X.charCodeAt(1),J){case 100:case 109:case 115:case 45:Ee=A;break;default:Ee=Ze}if(re=t(A,Ee,re,J,C+1),We=re.length,0<z&&(Ee=n(Ze,X,Hn),At=l(3,re,Ee,A,ce,ie,We,J,C,Q),X=Ee.join(""),At!==void 0&&(We=(re=At.trim()).length)===0&&(J=0,re="")),0<We)switch(J){case 115:X=X.replace(L,a);case 100:case 109:case 45:re=X+"{"+re+"}";break;case 107:X=X.replace(c,"$1 $2"),re=X+"{"+re+"}",re=be===1||be===2&&o("@"+re,3)?"@-webkit-"+re+"@"+re:"@"+re;break;default:re=X+re,Q===112&&(re=(Ne+=re,""))}else re="";break;default:re=t(A,n(A,X,Hn),re,Q,C+1)}Zt+=re,re=Hn=Ee=He=fe=0,X="",J=$.charCodeAt(++de);break;case 125:case 59:if(X=(0<Ee?X.replace(p,""):X).trim(),1<(We=X.length))switch(He===0&&(fe=X.charCodeAt(0),fe===45||96<fe&&123>fe)&&(We=(X=X.replace(" ",":")).length),0<z&&(At=l(1,X,A,M,ce,ie,Ne.length,Q,C,Q))!==void 0&&(We=(X=At.trim()).length)===0&&(X="\0\0"),fe=X.charCodeAt(0),J=X.charCodeAt(1),fe){case 0:break;case 64:if(J===105||J===99){Jt+=X+$.charAt(de);break}default:X.charCodeAt(We-1)!==58&&(Ne+=i(X,fe,J,X.charCodeAt(2)))}Hn=Ee=He=fe=0,X="",J=$.charCodeAt(++de)}}switch(J){case 13:case 10:N===47?N=0:1+fe===0&&Q!==107&&0<X.length&&(Ee=1,X+="\0"),0<z*K&&l(0,X,A,M,ce,ie,Ne.length,Q,C,Q),ie=1,ce++;break;case 59:case 125:if(N+ae+_e+Z===0){ie++;break}default:switch(ie++,vt=$.charAt(de),J){case 9:case 32:if(ae+Z+N===0)switch(Ve){case 44:case 58:case 9:case 32:vt="";break;default:J!==32&&(vt=" ")}break;case 0:vt="\\0";break;case 12:vt="\\f";break;case 11:vt="\\v";break;case 38:ae+N+Z===0&&(Ee=Hn=1,vt="\f"+vt);break;case 108:if(ae+N+Z+le===0&&0<He)switch(de-He){case 2:Ve===112&&$.charCodeAt(de-3)===58&&(le=Ve);case 8:pe===111&&(le=pe)}break;case 58:ae+N+Z===0&&(He=de);break;case 44:N+_e+ae+Z===0&&(Ee=1,vt+="\r");break;case 34:case 39:N===0&&(ae=ae===J?0:ae===0?J:ae);break;case 91:ae+N+_e===0&&Z++;break;case 93:ae+N+_e===0&&Z--;break;case 41:ae+N+Z===0&&_e--;break;case 40:if(ae+N+Z===0){if(fe===0)switch(2*Ve+3*pe){case 533:break;default:fe=1}_e++}break;case 64:N+_e+ae+Z+He+re===0&&(re=1);break;case 42:case 47:if(!(0<ae+Z+_e))switch(N){case 0:switch(2*J+3*$.charCodeAt(de+1)){case 235:N=47;break;case 220:We=de,N=42}break;case 42:J===47&&Ve===42&&We+2!==de&&($.charCodeAt(We+2)===33&&(Ne+=$.substring(We,de+1)),vt="",N=0)}}N===0&&(X+=vt)}pe=Ve,Ve=J,de++}if(We=Ne.length,0<We){if(Ee=A,0<z&&(At=l(2,Ne,Ee,M,ce,ie,We,Q,C,Q),At!==void 0&&(Ne=At).length===0))return Jt+Ne+Zt;if(Ne=Ee.join(",")+"{"+Ne+"}",be*le!==0){switch(be!==2||o(Ne,2)||(le=0),le){case 111:Ne=Ne.replace(S,":-moz-$1")+Ne;break;case 112:Ne=Ne.replace(m,"::-webkit-input-$1")+Ne.replace(m,"::-moz-$1")+Ne.replace(m,":-ms-input-$1")+Ne}le=0}}return Jt+Ne+Zt}function n(M,A,$){var Q=A.trim().split(R);A=Q;var C=Q.length,Z=M.length;switch(Z){case 0:case 1:var N=0;for(M=Z===0?"":M[0]+" ";N<C;++N)A[N]=r(M,A[N],$).trim();break;default:var _e=N=0;for(A=[];N<C;++N)for(var ae=0;ae<Z;++ae)A[_e++]=r(M[ae]+" ",Q[N],$).trim()}return A}function r(M,A,$){var Q=A.charCodeAt(0);switch(33>Q&&(Q=(A=A.trim()).charCodeAt(0)),Q){case 38:return A.replace(h,"$1"+M.trim());case 58:return M.trim()+A.replace(h,"$1"+M.trim());default:if(0<1*$&&0<A.indexOf("\f"))return A.replace(h,(M.charCodeAt(0)===58?"":"$1")+M.trim())}return M+A}function i(M,A,$,Q){var C=M+";",Z=2*A+3*$+4*Q;if(Z===944){M=C.indexOf(":",9)+1;var N=C.substring(M,C.length-1).trim();return N=C.substring(0,M).trim()+N+";",be===1||be===2&&o(N,1)?"-webkit-"+N+N:N}if(be===0||be===2&&!o(C,1))return C;switch(Z){case 1015:return C.charCodeAt(10)===97?"-webkit-"+C+C:C;case 951:return C.charCodeAt(3)===116?"-webkit-"+C+C:C;case 963:return C.charCodeAt(5)===110?"-webkit-"+C+C:C;case 1009:if(C.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+C+C;case 978:return"-webkit-"+C+"-moz-"+C+C;case 1019:case 983:return"-webkit-"+C+"-moz-"+C+"-ms-"+C+C;case 883:if(C.charCodeAt(8)===45)return"-webkit-"+C+C;if(0<C.indexOf("image-set(",11))return C.replace(W,"$1-webkit-$2")+C;break;case 932:if(C.charCodeAt(4)===45)switch(C.charCodeAt(5)){case 103:return"-webkit-box-"+C.replace("-grow","")+"-webkit-"+C+"-ms-"+C.replace("grow","positive")+C;case 115:return"-webkit-"+C+"-ms-"+C.replace("shrink","negative")+C;case 98:return"-webkit-"+C+"-ms-"+C.replace("basis","preferred-size")+C}return"-webkit-"+C+"-ms-"+C+C;case 964:return"-webkit-"+C+"-ms-flex-"+C+C;case 1023:if(C.charCodeAt(8)!==99)break;return N=C.substring(C.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+N+"-webkit-"+C+"-ms-flex-pack"+N+C;case 1005:return x.test(C)?C.replace(E,":-webkit-")+C.replace(E,":-moz-")+C:C;case 1e3:switch(N=C.substring(13).trim(),A=N.indexOf("-")+1,N.charCodeAt(0)+N.charCodeAt(A)){case 226:N=C.replace(_,"tb");break;case 232:N=C.replace(_,"tb-rl");break;case 220:N=C.replace(_,"lr");break;default:return C}return"-webkit-"+C+"-ms-"+N+C;case 1017:if(C.indexOf("sticky",9)===-1)break;case 975:switch(A=(C=M).length-10,N=(C.charCodeAt(A)===33?C.substring(0,A):C).substring(M.indexOf(":",7)+1).trim(),Z=N.charCodeAt(0)+(N.charCodeAt(7)|0)){case 203:if(111>N.charCodeAt(8))break;case 115:C=C.replace(N,"-webkit-"+N)+";"+C;break;case 207:case 102:C=C.replace(N,"-webkit-"+(102<Z?"inline-":"")+"box")+";"+C.replace(N,"-webkit-"+N)+";"+C.replace(N,"-ms-"+N+"box")+";"+C}return C+";";case 938:if(C.charCodeAt(5)===45)switch(C.charCodeAt(6)){case 105:return N=C.replace("-items",""),"-webkit-"+C+"-webkit-box-"+N+"-ms-flex-"+N+C;case 115:return"-webkit-"+C+"-ms-flex-item-"+C.replace(y,"")+C;default:return"-webkit-"+C+"-ms-flex-line-pack"+C.replace("align-content","").replace(y,"")+C}break;case 973:case 989:if(C.charCodeAt(3)!==45||C.charCodeAt(4)===122)break;case 931:case 953:if(D.test(M)===!0)return(N=M.substring(M.indexOf(":")+1)).charCodeAt(0)===115?i(M.replace("stretch","fill-available"),A,$,Q).replace(":fill-available",":stretch"):C.replace(N,"-webkit-"+N)+C.replace(N,"-moz-"+N.replace("fill-",""))+C;break;case 962:if(C="-webkit-"+C+(C.charCodeAt(5)===102?"-ms-"+C:"")+C,$+Q===211&&C.charCodeAt(13)===105&&0<C.indexOf("transform",10))return C.substring(0,C.indexOf(";",27)+1).replace(k,"$1-webkit-$2")+C}return C}function o(M,A){var $=M.indexOf(A===1?":":"{"),Q=M.substring(0,A!==3?$:10);return $=M.substring($+1,M.length-1),F(A!==2?Q:Q.replace(U,"$1"),$,A)}function a(M,A){var $=i(A,A.charCodeAt(0),A.charCodeAt(1),A.charCodeAt(2));return $!==A+";"?$.replace(I," or ($1)").substring(4):"("+A+")"}function l(M,A,$,Q,C,Z,N,_e,ae,fe){for(var J=0,Ve=A,pe;J<z;++J)switch(pe=Fe[J].call(f,M,Ve,$,Q,C,Z,N,_e,ae,fe)){case void 0:case!1:case!0:case null:break;default:Ve=pe}if(Ve!==A)return Ve}function s(M){switch(M){case void 0:case null:z=Fe.length=0;break;default:if(typeof M=="function")Fe[z++]=M;else if(typeof M=="object")for(var A=0,$=M.length;A<$;++A)s(M[A]);else K=!!M|0}return s}function u(M){return M=M.prefix,M!==void 0&&(F=null,M?typeof M!="function"?be=1:(be=2,F=M):be=0),u}function f(M,A){var $=M;if(33>$.charCodeAt(0)&&($=$.trim()),se=$,$=[se],0<z){var Q=l(-1,A,$,$,ce,ie,0,0,0,0);Q!==void 0&&typeof Q=="string"&&(A=Q)}var C=t(Ze,$,A,0,0);return 0<z&&(Q=l(-2,C,$,$,ce,ie,C.length,0,0,0),Q!==void 0&&(C=Q)),se="",le=0,ie=ce=1,C}var d=/^\0+/g,p=/[\0\r\f]/g,E=/: */g,x=/zoo|gra/,k=/([,: ])(transform)/g,R=/,\r+?/g,h=/([\t\r\n ])*\f?&/g,c=/@(k\w+)\s*(\S*)\s*/,m=/::(place)/g,S=/:(read-only)/g,_=/[svh]\w+-[tblr]{2}/,L=/\(\s*(.*)\s*\)/g,I=/([\s\S]*?);/g,y=/-self|flex-/g,U=/[^]*?(:[rp][el]a[\w-]+)[^]*/,D=/stretch|:\s*\w+\-(?:conte|avail)/,W=/([^-])(image-set\()/,ie=1,ce=1,le=0,be=1,Ze=[],Fe=[],z=0,F=null,K=0,se="";return f.use=s,f.set=u,e!==void 0&&u(e),f}var m1={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function g1(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var v1=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,Od=g1(function(e){return v1.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),Ph={exports:{}},ye={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xe=typeof Symbol=="function"&&Symbol.for,Hu=Xe?Symbol.for("react.element"):60103,Wu=Xe?Symbol.for("react.portal"):60106,Ya=Xe?Symbol.for("react.fragment"):60107,Ka=Xe?Symbol.for("react.strict_mode"):60108,Ga=Xe?Symbol.for("react.profiler"):60114,Xa=Xe?Symbol.for("react.provider"):60109,Za=Xe?Symbol.for("react.context"):60110,Qu=Xe?Symbol.for("react.async_mode"):60111,Ja=Xe?Symbol.for("react.concurrent_mode"):60111,qa=Xe?Symbol.for("react.forward_ref"):60112,el=Xe?Symbol.for("react.suspense"):60113,y1=Xe?Symbol.for("react.suspense_list"):60120,tl=Xe?Symbol.for("react.memo"):60115,nl=Xe?Symbol.for("react.lazy"):60116,w1=Xe?Symbol.for("react.block"):60121,x1=Xe?Symbol.for("react.fundamental"):60117,k1=Xe?Symbol.for("react.responder"):60118,S1=Xe?Symbol.for("react.scope"):60119;function jt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Hu:switch(e=e.type,e){case Qu:case Ja:case Ya:case Ga:case Ka:case el:return e;default:switch(e=e&&e.$$typeof,e){case Za:case qa:case nl:case tl:case Xa:return e;default:return t}}case Wu:return t}}}function Th(e){return jt(e)===Ja}ye.AsyncMode=Qu;ye.ConcurrentMode=Ja;ye.ContextConsumer=Za;ye.ContextProvider=Xa;ye.Element=Hu;ye.ForwardRef=qa;ye.Fragment=Ya;ye.Lazy=nl;ye.Memo=tl;ye.Portal=Wu;ye.Profiler=Ga;ye.StrictMode=Ka;ye.Suspense=el;ye.isAsyncMode=function(e){return Th(e)||jt(e)===Qu};ye.isConcurrentMode=Th;ye.isContextConsumer=function(e){return jt(e)===Za};ye.isContextProvider=function(e){return jt(e)===Xa};ye.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Hu};ye.isForwardRef=function(e){return jt(e)===qa};ye.isFragment=function(e){return jt(e)===Ya};ye.isLazy=function(e){return jt(e)===nl};ye.isMemo=function(e){return jt(e)===tl};ye.isPortal=function(e){return jt(e)===Wu};ye.isProfiler=function(e){return jt(e)===Ga};ye.isStrictMode=function(e){return jt(e)===Ka};ye.isSuspense=function(e){return jt(e)===el};ye.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Ya||e===Ja||e===Ga||e===Ka||e===el||e===y1||typeof e=="object"&&e!==null&&(e.$$typeof===nl||e.$$typeof===tl||e.$$typeof===Xa||e.$$typeof===Za||e.$$typeof===qa||e.$$typeof===x1||e.$$typeof===k1||e.$$typeof===S1||e.$$typeof===w1)};ye.typeOf=jt;Ph.exports=ye;var C1=Ph.exports,Yu=C1,b1={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},E1={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},R1={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Nh={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Ku={};Ku[Yu.ForwardRef]=R1;Ku[Yu.Memo]=Nh;function Id(e){return Yu.isMemo(e)?Nh:Ku[e.$$typeof]||b1}var j1=Object.defineProperty,_1=Object.getOwnPropertyNames,$d=Object.getOwnPropertySymbols,P1=Object.getOwnPropertyDescriptor,T1=Object.getPrototypeOf,Fd=Object.prototype;function Lh(e,t,n){if(typeof t!="string"){if(Fd){var r=T1(t);r&&r!==Fd&&Lh(e,r,n)}var i=_1(t);$d&&(i=i.concat($d(t)));for(var o=Id(e),a=Id(t),l=0;l<i.length;++l){var s=i[l];if(!E1[s]&&!(n&&n[s])&&!(a&&a[s])&&!(o&&o[s])){var u=P1(t,s);try{j1(e,s,u)}catch{}}}}return e}var N1=Lh;const L1=Fs(N1);function an(){return(an=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var Ud=function(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n},Ms=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!_h.typeOf(e)},ga=Object.freeze([]),Dn=Object.freeze({});function Hi(e){return typeof e=="function"}function Bd(e){return e.displayName||e.name||"Component"}function Gu(e){return e&&typeof e.styledComponentId=="string"}var Wr=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",Xu=typeof window<"u"&&"HTMLElement"in window,z1=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY));function qi(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var M1=function(){function e(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var t=e.prototype;return t.indexOfGroup=function(n){for(var r=0,i=0;i<n;i++)r+=this.groupSizes[i];return r},t.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var i=this.groupSizes,o=i.length,a=o;n>=a;)(a<<=1)<0&&qi(16,""+n);this.groupSizes=new Uint32Array(a),this.groupSizes.set(i),this.length=a;for(var l=o;l<a;l++)this.groupSizes[l]=0}for(var s=this.indexOfGroup(n+1),u=0,f=r.length;u<f;u++)this.tag.insertRule(s,r[u])&&(this.groupSizes[n]++,s++)},t.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],i=this.indexOfGroup(n),o=i+r;this.groupSizes[n]=0;for(var a=i;a<o;a++)this.tag.deleteRule(i)}},t.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var i=this.groupSizes[n],o=this.indexOfGroup(n),a=o+i,l=o;l<a;l++)r+=this.tag.getRule(l)+`/*!sc*/
`;return r},e}(),Bo=new Map,va=new Map,Si=1,Ro=function(e){if(Bo.has(e))return Bo.get(e);for(;va.has(Si);)Si++;var t=Si++;return Bo.set(e,t),va.set(t,e),t},A1=function(e){return va.get(e)},D1=function(e,t){t>=Si&&(Si=t+1),Bo.set(e,t),va.set(t,e)},O1="style["+Wr+'][data-styled-version="5.3.11"]',I1=new RegExp("^"+Wr+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),$1=function(e,t,n){for(var r,i=n.split(","),o=0,a=i.length;o<a;o++)(r=i[o])&&e.registerName(t,r)},F1=function(e,t){for(var n=(t.textContent||"").split(`/*!sc*/
`),r=[],i=0,o=n.length;i<o;i++){var a=n[i].trim();if(a){var l=a.match(I1);if(l){var s=0|parseInt(l[1],10),u=l[2];s!==0&&(D1(u,s),$1(e,u,l[3]),e.getTag().insertRules(s,r)),r.length=0}else r.push(a)}}},U1=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},zh=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(l){for(var s=l.childNodes,u=s.length;u>=0;u--){var f=s[u];if(f&&f.nodeType===1&&f.hasAttribute(Wr))return f}}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(Wr,"active"),r.setAttribute("data-styled-version","5.3.11");var a=U1();return a&&r.setAttribute("nonce",a),n.insertBefore(r,o),r},B1=function(){function e(n){var r=this.element=zh(n);r.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var o=document.styleSheets,a=0,l=o.length;a<l;a++){var s=o[a];if(s.ownerNode===i)return s}qi(17)}(r),this.length=0}var t=e.prototype;return t.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},t.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},t.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},e}(),V1=function(){function e(n){var r=this.element=zh(n);this.nodes=r.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(n,r){if(n<=this.length&&n>=0){var i=document.createTextNode(r),o=this.nodes[n];return this.element.insertBefore(i,o||null),this.length++,!0}return!1},t.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},t.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},e}(),H1=function(){function e(n){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},t.deleteRule=function(n){this.rules.splice(n,1),this.length--},t.getRule=function(n){return n<this.length?this.rules[n]:""},e}(),Vd=Xu,W1={isServer:!Xu,useCSSOMInjection:!z1},Mh=function(){function e(n,r,i){n===void 0&&(n=Dn),r===void 0&&(r={}),this.options=an({},W1,{},n),this.gs=r,this.names=new Map(i),this.server=!!n.isServer,!this.server&&Xu&&Vd&&(Vd=!1,function(o){for(var a=document.querySelectorAll(O1),l=0,s=a.length;l<s;l++){var u=a[l];u&&u.getAttribute(Wr)!=="active"&&(F1(o,u),u.parentNode&&u.parentNode.removeChild(u))}}(this))}e.registerId=function(n){return Ro(n)};var t=e.prototype;return t.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new e(an({},this.options,{},n),this.gs,r&&this.names||void 0)},t.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},t.getTag=function(){return this.tag||(this.tag=(i=(r=this.options).isServer,o=r.useCSSOMInjection,a=r.target,n=i?new H1(a):o?new B1(a):new V1(a),new M1(n)));var n,r,i,o,a},t.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},t.registerName=function(n,r){if(Ro(n),this.names.has(n))this.names.get(n).add(r);else{var i=new Set;i.add(r),this.names.set(n,i)}},t.insertRules=function(n,r,i){this.registerName(n,r),this.getTag().insertRules(Ro(n),i)},t.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},t.clearRules=function(n){this.getTag().clearGroup(Ro(n)),this.clearNames(n)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(n){for(var r=n.getTag(),i=r.length,o="",a=0;a<i;a++){var l=A1(a);if(l!==void 0){var s=n.names.get(l),u=r.getGroup(a);if(s&&u&&s.size){var f=Wr+".g"+a+'[id="'+l+'"]',d="";s!==void 0&&s.forEach(function(p){p.length>0&&(d+=p+",")}),o+=""+u+f+'{content:"'+d+`"}/*!sc*/
`}}}return o}(this)},e}(),Q1=/(a)(d)/gi,Hd=function(e){return String.fromCharCode(e+(e>25?39:97))};function As(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Hd(t%52)+n;return(Hd(t%52)+n).replace(Q1,"$1-$2")}var Pr=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Ah=function(e){return Pr(5381,e)};function Y1(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Hi(n)&&!Gu(n))return!1}return!0}var K1=Ah("5.3.11"),G1=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Y1(t),this.componentId=n,this.baseHash=Pr(K1,n),this.baseStyle=r,Mh.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.componentId,o=[];if(this.baseStyle&&o.push(this.baseStyle.generateAndInjectStyles(t,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(i,this.staticRulesId))o.push(this.staticRulesId);else{var a=Qr(this.rules,t,n,r).join(""),l=As(Pr(this.baseHash,a)>>>0);if(!n.hasNameForId(i,l)){var s=r(a,"."+l,void 0,i);n.insertRules(i,l,s)}o.push(l),this.staticRulesId=l}else{for(var u=this.rules.length,f=Pr(this.baseHash,r.hash),d="",p=0;p<u;p++){var E=this.rules[p];if(typeof E=="string")d+=E;else if(E){var x=Qr(E,t,n,r),k=Array.isArray(x)?x.join(""):x;f=Pr(f,k+p),d+=k}}if(d){var R=As(f>>>0);if(!n.hasNameForId(i,R)){var h=r(d,"."+R,void 0,i);n.insertRules(i,R,h)}o.push(R)}}return o.join(" ")},e}(),X1=/^\s*\/\/.*$/gm,Z1=[":","[",".","#"];function J1(e){var t,n,r,i,o=e===void 0?Dn:e,a=o.options,l=a===void 0?Dn:a,s=o.plugins,u=s===void 0?ga:s,f=new h1(l),d=[],p=function(k){function R(h){if(h)try{k(h+"}")}catch{}}return function(h,c,m,S,_,L,I,y,U,D){switch(h){case 1:if(U===0&&c.charCodeAt(0)===64)return k(c+";"),"";break;case 2:if(y===0)return c+"/*|*/";break;case 3:switch(y){case 102:case 112:return k(m[0]+c),"";default:return c+(D===0?"/*|*/":"")}case-2:c.split("/*|*/}").forEach(R)}}}(function(k){d.push(k)}),E=function(k,R,h){return R===0&&Z1.indexOf(h[n.length])!==-1||h.match(i)?k:"."+t};function x(k,R,h,c){c===void 0&&(c="&");var m=k.replace(X1,""),S=R&&h?h+" "+R+" { "+m+" }":m;return t=c,n=R,r=new RegExp("\\"+n+"\\b","g"),i=new RegExp("(\\"+n+"\\b){2,}"),f(h||!R?"":R,S)}return f.use([].concat(u,[function(k,R,h){k===2&&h.length&&h[0].lastIndexOf(n)>0&&(h[0]=h[0].replace(r,E))},p,function(k){if(k===-2){var R=d;return d=[],R}}])),x.hash=u.length?u.reduce(function(k,R){return R.name||qi(15),Pr(k,R.name)},5381).toString():"",x}var Dh=St.createContext();Dh.Consumer;var Oh=St.createContext(),q1=(Oh.Consumer,new Mh),Ds=J1();function ey(){return j.useContext(Dh)||q1}function ty(){return j.useContext(Oh)||Ds}var ny=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=Ds);var a=r.name+o.hash;i.hasNameForId(r.id,a)||i.insertRules(r.id,a,o(r.rules,a,"@keyframes"))},this.toString=function(){return qi(12,String(r.name))},this.name=t,this.id="sc-keyframes-"+t,this.rules=n}return e.prototype.getName=function(t){return t===void 0&&(t=Ds),this.name+t.hash},e}(),ry=/([A-Z])/,iy=/([A-Z])/g,oy=/^ms-/,ay=function(e){return"-"+e.toLowerCase()};function Wd(e){return ry.test(e)?e.replace(iy,ay).replace(oy,"-ms-"):e}var Qd=function(e){return e==null||e===!1||e===""};function Qr(e,t,n,r){if(Array.isArray(e)){for(var i,o=[],a=0,l=e.length;a<l;a+=1)(i=Qr(e[a],t,n,r))!==""&&(Array.isArray(i)?o.push.apply(o,i):o.push(i));return o}if(Qd(e))return"";if(Gu(e))return"."+e.styledComponentId;if(Hi(e)){if(typeof(u=e)!="function"||u.prototype&&u.prototype.isReactComponent||!t)return e;var s=e(t);return Qr(s,t,n,r)}var u;return e instanceof ny?n?(e.inject(n,r),e.getName(r)):e:Ms(e)?function f(d,p){var E,x,k=[];for(var R in d)d.hasOwnProperty(R)&&!Qd(d[R])&&(Array.isArray(d[R])&&d[R].isCss||Hi(d[R])?k.push(Wd(R)+":",d[R],";"):Ms(d[R])?k.push.apply(k,f(d[R],R)):k.push(Wd(R)+": "+(E=R,(x=d[R])==null||typeof x=="boolean"||x===""?"":typeof x!="number"||x===0||E in m1||E.startsWith("--")?String(x).trim():x+"px")+";"));return p?[p+" {"].concat(k,["}"]):k}(e):e.toString()}var Yd=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function ly(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return Hi(e)||Ms(e)?Yd(Qr(Ud(ga,[e].concat(n)))):n.length===0&&e.length===1&&typeof e[0]=="string"?e:Yd(Qr(Ud(e,n)))}var sy=function(e,t,n){return n===void 0&&(n=Dn),e.theme!==n.theme&&e.theme||t||n.theme},uy=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,cy=/(^-|-$)/g;function Dl(e){return e.replace(uy,"-").replace(cy,"")}var dy=function(e){return As(Ah(e)>>>0)};function jo(e){return typeof e=="string"&&!0}var Os=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},fy=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function py(e,t,n){var r=e[n];Os(t)&&Os(r)?Ih(r,t):e[n]=t}function Ih(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var i=0,o=n;i<o.length;i++){var a=o[i];if(Os(a))for(var l in a)fy(l)&&py(e,a[l],l)}return e}var $h=St.createContext();$h.Consumer;var Ol={};function Fh(e,t,n){var r=Gu(e),i=!jo(e),o=t.attrs,a=o===void 0?ga:o,l=t.componentId,s=l===void 0?function(c,m){var S=typeof c!="string"?"sc":Dl(c);Ol[S]=(Ol[S]||0)+1;var _=S+"-"+dy("5.3.11"+S+Ol[S]);return m?m+"-"+_:_}(t.displayName,t.parentComponentId):l,u=t.displayName,f=u===void 0?function(c){return jo(c)?"styled."+c:"Styled("+Bd(c)+")"}(e):u,d=t.displayName&&t.componentId?Dl(t.displayName)+"-"+t.componentId:t.componentId||s,p=r&&e.attrs?Array.prototype.concat(e.attrs,a).filter(Boolean):a,E=t.shouldForwardProp;r&&e.shouldForwardProp&&(E=t.shouldForwardProp?function(c,m,S){return e.shouldForwardProp(c,m,S)&&t.shouldForwardProp(c,m,S)}:e.shouldForwardProp);var x,k=new G1(n,d,r?e.componentStyle:void 0),R=k.isStatic&&a.length===0,h=function(c,m){return function(S,_,L,I){var y=S.attrs,U=S.componentStyle,D=S.defaultProps,W=S.foldedComponentIds,ie=S.shouldForwardProp,ce=S.styledComponentId,le=S.target,be=function(Q,C,Z){Q===void 0&&(Q=Dn);var N=an({},C,{theme:Q}),_e={};return Z.forEach(function(ae){var fe,J,Ve,pe=ae;for(fe in Hi(pe)&&(pe=pe(N)),pe)N[fe]=_e[fe]=fe==="className"?(J=_e[fe],Ve=pe[fe],J&&Ve?J+" "+Ve:J||Ve):pe[fe]}),[N,_e]}(sy(_,j.useContext($h),D)||Dn,_,y),Ze=be[0],Fe=be[1],z=function(Q,C,Z,N){var _e=ey(),ae=ty(),fe=C?Q.generateAndInjectStyles(Dn,_e,ae):Q.generateAndInjectStyles(Z,_e,ae);return fe}(U,I,Ze),F=L,K=Fe.$as||_.$as||Fe.as||_.as||le,se=jo(K),M=Fe!==_?an({},_,{},Fe):_,A={};for(var $ in M)$[0]!=="$"&&$!=="as"&&($==="forwardedAs"?A.as=M[$]:(ie?ie($,Od,K):!se||Od($))&&(A[$]=M[$]));return _.style&&Fe.style!==_.style&&(A.style=an({},_.style,{},Fe.style)),A.className=Array.prototype.concat(W,ce,z!==ce?z:null,_.className,Fe.className).filter(Boolean).join(" "),A.ref=F,j.createElement(K,A)}(x,c,m,R)};return h.displayName=f,(x=St.forwardRef(h)).attrs=p,x.componentStyle=k,x.displayName=f,x.shouldForwardProp=E,x.foldedComponentIds=r?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):ga,x.styledComponentId=d,x.target=r?e.target:e,x.withComponent=function(c){var m=t.componentId,S=function(L,I){if(L==null)return{};var y,U,D={},W=Object.keys(L);for(U=0;U<W.length;U++)y=W[U],I.indexOf(y)>=0||(D[y]=L[y]);return D}(t,["componentId"]),_=m&&m+"-"+(jo(c)?c:Dl(Bd(c)));return Fh(c,an({},S,{attrs:p,componentId:_}),n)},Object.defineProperty(x,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(c){this._foldedDefaultProps=r?Ih({},e.defaultProps,c):c}}),Object.defineProperty(x,"toString",{value:function(){return"."+x.styledComponentId}}),i&&L1(x,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),x}var Is=function(e){return function t(n,r,i){if(i===void 0&&(i=Dn),!_h.isValidElementType(r))return qi(1,String(r));var o=function(){return n(r,i,ly.apply(void 0,arguments))};return o.withConfig=function(a){return t(n,r,an({},i,{},a))},o.attrs=function(a){return t(n,r,an({},i,{attrs:Array.prototype.concat(i.attrs,a).filter(Boolean)}))},o}(Fh,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){Is[e]=Is(e)});const Se=Is,hy=()=>g.jsx(my,{children:g.jsxs("div",{className:"content",children:[g.jsx("p",{children:"©2022-2024 Fernando Fugihara."}),g.jsx("p",{children:"All Rights Reserved."})]})}),my=Se.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  align-content: center;
  background: var(--background-secondary-color);
  border-radius: 5rem 0;
  border: 1px solid var(--text-color);
  .content {
    color: var(--white);
    display: flex;
    flex-direction: column;
    height: 5rem;
    justify-content: center;
    align-items: center;
    p {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: .5rem;
      color: var(--text-color)
    }
  }

`,gy=()=>g.jsx(vy,{children:g.jsx(Uu,{})}),vy=Se.div`
  
`;var Uh={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Kd=St.createContext&&St.createContext(Uh),On=globalThis&&globalThis.__assign||function(){return On=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},On.apply(this,arguments)},yy=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};function Bh(e){return e&&e.map(function(t,n){return St.createElement(t.tag,On({key:n},t.attr),Bh(t.child))})}function Xt(e){return function(t){return St.createElement(wy,On({attr:On({},e.attr)},t),Bh(e.child))}}function wy(e){var t=function(n){var r=e.attr,i=e.size,o=e.title,a=yy(e,["attr","size","title"]),l=i||n.size||"1em",s;return n.className&&(s=n.className),e.className&&(s=(s?s+" ":"")+e.className),St.createElement("svg",On({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,a,{className:s,style:On(On({color:e.color||n.color},n.style),e.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),o&&St.createElement("title",null,o),e.children)};return Kd!==void 0?St.createElement(Kd.Consumer,null,function(n){return t(n)}):t(Uh)}function Vh(e){return Xt({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"}}]})(e)}function xy(e){return Xt({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1 1 68.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z"}}]})(e)}function ky(e){return Xt({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 0 0-44.4 0L77.5 505a63.9 63.9 0 0 0-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0 0 18.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z"}}]})(e)}function Sy(e){return Xt({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 110.8V792H136V270.8l-27.6-21.5 39.3-50.5 42.8 33.3h643.1l42.8-33.3 39.3 50.5-27.7 21.5zM833.6 232L512 482 190.4 232l-42.8-33.3-39.3 50.5 27.6 21.5 341.6 265.6a55.99 55.99 0 0 0 68.7 0L888 270.8l27.6-21.5-39.3-50.5-42.7 33.2z"}}]})(e)}function Cy(e){return Xt({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M384 320H256c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h128c17.67 0 32-14.33 32-32V352c0-17.67-14.33-32-32-32zM192 32c0-17.67-14.33-32-32-32H32C14.33 0 0 14.33 0 32v128c0 17.67 14.33 32 32 32h95.72l73.16 128.04C211.98 300.98 232.4 288 256 288h.28L192 175.51V128h224V64H192V32zM608 0H480c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h128c17.67 0 32-14.33 32-32V32c0-17.67-14.33-32-32-32z"}}]})(e)}const Hh=[{text:"home",path:"home",order:1},{text:"work",path:"work",order:2},{text:"about",path:"about",order:3},{text:"contact",path:"contact",order:5}];function by(e){return Xt({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M331.3 308.7L278.6 256l52.7-52.7c6.2-6.2 6.2-16.4 0-22.6-6.2-6.2-16.4-6.2-22.6 0L256 233.4l-52.7-52.7c-6.2-6.2-15.6-7.1-22.6 0-7.1 7.1-6 16.6 0 22.6l52.7 52.7-52.7 52.7c-6.7 6.7-6.4 16.3 0 22.6 6.4 6.4 16.4 6.2 22.6 0l52.7-52.7 52.7 52.7c6.2 6.2 16.4 6.2 22.6 0 6.3-6.2 6.3-16.4 0-22.6z"}},{tag:"path",attr:{d:"M256 76c48.1 0 93.3 18.7 127.3 52.7S436 207.9 436 256s-18.7 93.3-52.7 127.3S304.1 436 256 436c-48.1 0-93.3-18.7-127.3-52.7S76 304.1 76 256s18.7-93.3 52.7-127.3S207.9 76 256 76m0-28C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48z"}}]})(e)}const Ey=({onClick:e,showLittleNav:t})=>g.jsx(Ry,{children:g.jsx("div",{className:`${t?"overlay black":"overlay"}`,children:g.jsxs("div",{className:`${t?"content active":"content"}`,children:[g.jsx(by,{onClick:e,className:`${t?"icon active":"icon"}`}),Hh.map(n=>{const{text:r,path:i}=n;return g.jsx("a",{onClick:e,className:"nav-link",href:`#${i}`,children:r},r)})]})})}),Ry=Se.nav`
    position: fixed;
    display: inline-block;
    z-index: 2;
        .overlay.black {
          background-color: rgba(0, 0, 0, 0.6);
          width: 100vw;
          height: 100vh;
          }

          .icon {
          position: absolute;
          top: 1rem;
          font-size: 3rem;
          z-index: 10000;
          right: 1rem;
          transition: 0.9s ease-in-out;
          opacity: 0;
          cursor: pointer;
        }

        .icon.active {
          opacity: 1;
        }
        .content {
          z-index: 10;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        flex-direction: column;
        gap: 2rem;
        height: 100vh;
        width: 50vw;
        transition: 0.7s;
        transform: translateY(-100%);
        background-color: var(--background-color);
      }
      .content.active {
        transform: translateY(0);
      }      
    
    .nav-link {
      text-transform: capitalize;
      color: var(--text-color);
      transition: var(--transition);
      font-size: 2rem;
      display: inline;
    }

    .nav-link::after {
      content: "";
      width: 100%;
      height: 2px;
      color: red;
      position: absolute;
      top: 19rem;
      z-index: 10;
    }

    .nav-link:hover {
      opacity: 0.8;
      transform: scale(1.1);
    }

    @media (max-width: 700px) {
      .content {
        justify-content: start;
        padding-top: 6rem;
      }
      .nav-link {
        font-size: 1.2rem;
      }
    }
`;function jy(e){return Xt({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"}}]})(e)}function _y(e){return Xt({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"}}]})(e)}const Py=()=>{const{isDarkTheme:e,toggleDarkTheme:t}=rl();return g.jsx(g.Fragment,{children:g.jsxs(Ty,{children:[g.jsx("input",{onChange:t,type:"checkbox",id:"darkmode-toggle",checked:e===!0}),g.jsxs("label",{htmlFor:"darkmode-toggle",children:[g.jsx(_y,{className:"sun"}),g.jsx(jy,{className:"moon"})]})]})})},Ty=Se.div`
    height: 0;
    label {
        width: 50px;
        height: 20px;
        position: fixed;
        right: 115px;
        top: 23px;
        display: block;
        background-color: var(--white);
        border-radius: 200px;
        box-shadow: inset 0px 5px 15px rgba(0, 0, 0, 0.4), inset 0px -5px 15px rgba(255, 255, 255, 0.4);
        cursor: pointer;
        transition: 1s;
        z-index: 99;
    }
    label:after {
        content: "";
        width: 18px;
        height: 18px;
        position: absolute;
        top: 1px;
        left: 2px;
        background: var(--background-secondary-color);
        border-radius: 180px;
        box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
        transition: 1s;
    }

    input {
        width: 0;
        height: 0;
        visibility: hidden;
    }
    input:checked + label {
        background-color: #242424;
    }
    input:checked + label:after {
        left: 49px;
        transform: translateX(-100%);
        background: linear-gradient(180deg, #777, #3a3a3a);
    }
    label:active:after {
        width: 26px;
    }

    label .sun {
        position: absolute;
        font-size: 12px;
        top: 4px;
        left: 4.9px;
        z-index: 100;
        transition: 0.3s;
        color: var(--black);
    }
    
    label .moon {
        position: absolute;
        font-size: 12px;
        top: 4px;
        right: 3.5px;
        z-index: 100;
        color: var(--grey-600);
    }

    input:checked + label .sun {
        color:var(--grey-600);
    }
    input:checked + label .moon {
        color: var(--white);
    }

`;Se.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    .flag-container {
        position: relative;
    }
    .flag {
        width: 2rem;
    }
    .button {
        cursor: pointer;
    }
    .hide {
        transition: 0.3s;
        transform: translateX(100rem);
        opacity: 0;
    }
    .active {
        opacity: 1;
    }
    .flag-container {
        width: 100%;
        height: 100%;
        position: relative;
    }
    img {
        width: 100%;
    }
    h5 {
        font-family: "Montserrat";
    }

    .drop-down {
        position: absolute;
        border-radius: 1rem;
        padding: 1rem;
        display: flex;
        justify-content: start;
        flex-direction: column;
        align-items: start;
        background-color: white;
        color: black;
    }

    .arrow {
        color: white;
    }

    .arrow-active {
        color: black;
    }

    .language {
        display: flex;
        justify-content: center;
        align-items: center;
        img {
            width: 2rem;
            height: 2rem;
        }
    }
    p {
        color: black
    }
`;const Ny=()=>{const{toggleSidebar:e,showSidebar:t}=rl();return g.jsxs(Ly,{children:[g.jsx(Py,{}),g.jsx("a",{target:"_blank",className:"github-link",href:"https://github.com/fekenzofugi",children:g.jsx(Vh,{})}),g.jsx("button",{className:`${t?"nav-btn active":"nav-btn"}`,onClick:e,children:g.jsxs("svg",{stroke:"var(--text-color)",fill:"none",className:"hamburguer",viewBox:"-10 -10 120 120",width:"60",children:[g.jsx("path",{className:"line",d:"m 20 40 h 60 a 1 1 0 0 1 0 20 h -60 a 1 1 0 0 1 0 -40 h 30 v 70",strokeWidth:"6",strokeLinecap:"round",strokeLinejoin:"round"}),g.jsx("line",{className:"line bottom",x1:"80",x2:"20",y1:"20",y2:"20",strokeWidth:"6",strokeLinecap:"round",strokeDasharray:"80",strokeDashoffset:"0"})]})})]})},Ly=Se.nav`
    overflow: hidden;
    .github-link {
        position: fixed;
        top: 11px;
        font-size: 2.5rem;
        color: var(--text-color);
        right: 63px;
        transition: 1s;
        z-index: 100;
    }

    .nav-btn {
      border: transparent;
      background: transparent;
      cursor: pointer;
      position: fixed;
      right: 5px;
      top: 7px;
      z-index: 9999;
      overflow: hidden;
      --button-color: var(--text-color);
    }

    .nav-btn .hamburguer {
      transition: translate 1s, rotate 1s;
    }

    .nav-btn.active .hamburguer {
      translate: 10px -10px;
      rotate: .125turn
    }

    .nav-btn .line {
      transition: 1s;
      stroke-dasharray: 60 31.5 60 1000;
      transition: 1s;
    }

    .nav-btn.active .line {
      stroke-dasharray: 60 105 60 1000;
      stroke-dashoffset: -90;
    }

`;function zy(e){return Xt({tag:"svg",attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"}}]})(e)}const My=[{text:"home",path:"./",icon:g.jsx(ky,{})},{text:"blog",path:"blog",icon:g.jsx(zy,{})},{text:"projects",path:"projects",icon:g.jsx(Cy,{})}],Ay=()=>{const{toggleSidebar:e}=rl();return g.jsx(Dy,{children:My.map(t=>{const{text:n,path:r,icon:i}=t;return g.jsx(s1,{to:r,className:({isActive:o})=>o?"nav-link active":"nav-link",onClick:e,children:g.jsxs("div",{className:"icon",children:[i,n]})},n)})})},Dy=Se.div`
    a {
        color: var(--text-color);
        font-size: 2.5rem;
        text-transform: capitalize;
    }
    .icon {
        display: flex;
        gap: .5rem;
        margin: 1rem;
    }

    .nav-link {
        display: block;
        transition: var(--transition);
    }

    .nav-link:hover {
        transform: scale(1.1);
        opacity: 0.7;
        
    }

    .active {
        color: orangered
    }
`,Oy=()=>{const{showSidebar:e}=rl();return g.jsx(Iy,{children:g.jsx("div",{className:`${e?"sidebar-container show-sidebar":"sidebar-container"}`,children:g.jsx("div",{className:"content",children:g.jsx(Ay,{})})})})},Iy=Se.nav`
  .sidebar-container {
    background-color: var(--background-secondary-color);
    position: fixed;
    inset: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    opacity: 0;
    visibility: hidden;
    transition: var(--transition);
  }
  .show-sidebar {
    z-index: 99;
    opacity: 1;
    visibility: visible;
    transition: 1s;
  }
  .content {
    position: relative;
    background-color: var(--background-secondary-color);
    height: 100vh;
    width: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    border-radius: var(--border-radius);
    padding: 8rem 2rem;
  }
  .close-btn {
    position: absolute;
    top: 10px;
    left: 10px;
    background: transparent;
    border-color: transparent;
    font-size: 2rem;
    color: var(--black);
    cursor: pointer;
  }



`;var $s=new Map,_o=new WeakMap,Gd=0,$y=void 0;function Fy(e){return e?(_o.has(e)||(Gd+=1,_o.set(e,Gd.toString())),_o.get(e)):"0"}function Uy(e){return Object.keys(e).sort().filter(t=>e[t]!==void 0).map(t=>`${t}_${t==="root"?Fy(e.root):e[t]}`).toString()}function By(e){const t=Uy(e);let n=$s.get(t);if(!n){const r=new Map;let i;const o=new IntersectionObserver(a=>{a.forEach(l=>{var s;const u=l.isIntersecting&&i.some(f=>l.intersectionRatio>=f);e.trackVisibility&&typeof l.isVisible>"u"&&(l.isVisible=u),(s=r.get(l.target))==null||s.forEach(f=>{f(u,l)})})},e);i=o.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:o,elements:r},$s.set(t,n)}return n}function Vy(e,t,n={},r=$y){if(typeof window.IntersectionObserver>"u"&&r!==void 0){const s=e.getBoundingClientRect();return t(r,{isIntersecting:r,target:e,intersectionRatio:typeof n.threshold=="number"?n.threshold:0,time:0,boundingClientRect:s,intersectionRect:s,rootBounds:s}),()=>{}}const{id:i,observer:o,elements:a}=By(n),l=a.get(e)||[];return a.has(e)||a.set(e,l),l.push(t),o.observe(e),function(){l.splice(l.indexOf(t),1),l.length===0&&(a.delete(e),o.unobserve(e)),a.size===0&&(o.disconnect(),$s.delete(i))}}function st({threshold:e,delay:t,trackVisibility:n,rootMargin:r,root:i,triggerOnce:o,skip:a,initialInView:l,fallbackInView:s,onChange:u}={}){var f;const[d,p]=j.useState(null),E=j.useRef(),[x,k]=j.useState({inView:!!l,entry:void 0});E.current=u,j.useEffect(()=>{if(a||!d)return;let m;return m=Vy(d,(S,_)=>{k({inView:S,entry:_}),E.current&&E.current(S,_),_.isIntersecting&&o&&m&&(m(),m=void 0)},{root:i,rootMargin:r,threshold:e,trackVisibility:n,delay:t},s),()=>{m&&m()}},[Array.isArray(e)?e.toString():e,d,i,r,o,a,n,s,t]);const R=(f=x.entry)==null?void 0:f.target,h=j.useRef();!d&&R&&!o&&!a&&h.current!==R&&(h.current=R,k({inView:!!l,entry:void 0}));const c=[p,x.inView,x.entry];return c.ref=c[0],c.inView=c[1],c.entry=c[2],c}const Hy=({classes:e})=>g.jsx(Wy,{children:g.jsx("div",{className:`loading-container ${e}`,children:g.jsxs("svg",{width:"120",height:"30",viewBox:"0 0 120 30",xmlns:"http://www.w3.org/2000/svg",fill:"var(--text-color)",children:[g.jsxs("circle",{cx:"15",cy:"15",r:"15",children:[g.jsx("animate",{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}),g.jsx("animate",{attributeName:"fillOpacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"})]}),g.jsxs("circle",{cx:"60",cy:"15",r:"9",fillOpacity:"0.3",children:[g.jsx("animate",{attributeName:"r",from:"9",to:"9",begin:"0s",dur:"0.8s",values:"9;15;9",calcMode:"linear",repeatCount:"indefinite"}),g.jsx("animate",{attributeName:"fillOpacity",from:"0.5",to:"0.5",begin:"0s",dur:"0.8s",values:".5;1;.5",calcMode:"linear",repeatCount:"indefinite"})]}),g.jsxs("circle",{cx:"105",cy:"15",r:"15",children:[g.jsx("animate",{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}),g.jsx("animate",{attributeName:"fillOpacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"})]})]})})}),Wy=Se.div`
    .loading-container {
        height: 100vh;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        background-color: var(--background-secondary-color);
        z-index: 100000000;
        transition: 2.2s;
    }
    .loading-container.hide {
        transform: translateY(-100rem);
    }

    .loading-container svg {
        transition: 0.3s;
    }

    .loading-container.hide svg {
        opacity: 0;
    }

    @keyframes loading {
        0% {
            transform: scale(7);
        }
        100% {
            transform: scale(2);
        }
    }
`,Wh=j.createContext(),Qy=()=>{const[e,t]=j.useState(!0),[n,r]=j.useState(!1),[i,o]=j.useState(Uw()),a=()=>{const s=!i;o(s),document.body.classList.toggle("dark-theme",i),localStorage.setItem("darkTheme",s)},l=()=>{r(!n)};return j.useEffect(()=>{setTimeout(()=>{t(!1)},1e3)},[]),g.jsx(Wh.Provider,{value:{showSidebar:n,toggleSidebar:l,isDarkTheme:i,toggleDarkTheme:a},children:g.jsxs("main",{children:[g.jsx(Hy,{classes:e?"loading-container":"hide"}),g.jsx(Oy,{}),g.jsx(Ny,{}),g.jsx(Uu,{}),g.jsx(hy,{})]})})},rl=()=>j.useContext(Wh),Yy="/portifolio/assets/sfugies-0b4f38c6.png",Ky="/portifolio/assets/4any1-bff370cc.png",Gy="/portifolio/assets/restaurant-57dff58d.png",Xy="/portifolio/assets/vinho-27214b5a.png",Zy="/portifolio/assets/mvm-f573efd3.png",Jy="/portifolio/assets/negocia-88f468de.png",qy="/portifolio/assets/mood-6c3523cd.png",ew=({name:e,description:t,link:n,source:r})=>{const{ref:i,inView:o}=st();return g.jsx(tw,{ref:i,className:`${o?"animate":"hide"}`,children:g.jsxs("div",{className:"content",children:[g.jsx("h5",{children:e}),g.jsxs("div",{className:"image-div",children:[e==="4any1 Assessoria de Corrida"&&g.jsx("a",{target:"_blank",href:n,children:g.jsx("img",{src:Ky,className:"img",alt:""})}),e==="Sfugies"&&g.jsx("a",{target:"_blank",href:n,children:g.jsx("img",{src:Yy,className:"img",alt:""})}),e==="d'heaven"&&g.jsx("a",{target:"_blank",href:n,children:g.jsx("img",{src:Gy,className:"img",alt:""})}),e==="Mil Vezes Mãe"&&g.jsx("a",{target:"_blank",href:n,children:g.jsx("img",{src:Zy,className:"img",alt:""})}),e==="Classe do Vinho"&&g.jsx("a",{target:"_blank",href:n,children:g.jsx("img",{src:Xy,className:"img",alt:""})}),e==="Negocia Tudo"&&g.jsx("a",{target:"_blank",href:n,children:g.jsx("img",{src:Jy,className:"img",alt:""})}),e==="Market Mood"&&g.jsxs("a",{target:"_blank",href:n,children:[g.jsx("img",{src:qy,className:"img rec",alt:""})," "]}),g.jsx("p",{className:"work-description",children:t}),g.jsxs("div",{className:"buttons",children:[g.jsx("a",{className:"link",target:"_blank",href:n,children:"See Project"}),r!=""?g.jsx("a",{className:"link link_sc",target:"_blank",href:r,children:"Source Code"}):g.jsx("a",{className:"link link_sc",children:"Source not available"})]})]})]})})},tw=Se.div`
    background: var(--background-color);
    box-shadow: var(--shadow-2);
    display: flex;
    align-items: center;
    .content {
        z-index: -5;
    }

    .rec {
      
    }
    h5 {
        padding: 1rem;
        text-align: center;
    }
    .work-description {
        position: absolute;
        top: 5rem;
        opacity: 0;
        transition-delay: 0.2s;
        transition: 0.3s ease-in-out;
        color: var(--background-secondary-color);
        display: flex;
        justify-content: center;
        padding: 0 1rem;
        text-align: justify;
    }

    .image-div {
        background-color: var(--text-color);
        z-index: -1;
        display: flex;
        justify-content: center;
    }

    .image-div:hover .work-description {
        opacity: 1;
    }

    .image-div:hover .img {
        opacity: 0;
    }

    .image-div:hover .link {
        opacity: 1;
    }
    .img {
        border: 2px solid black;
        transition: 0.3s ease-in-out;
        height: 100%;
    }
    .img:hover {
        opacity: 0;
    }

    .buttons {
        position: absolute;
        display: flex;
        width: 100%;
        gap: 1rem;
        padding: 0 1rem;
        bottom: 2rem;
    }
    .link{
        width: 60%;
        border: 1px solid var(--background-secondary-color);
        cursor: pointer;
        padding: 5px 10px;
        border-radius: 1rem;
        background-color: var(--text-color);
        color: var(--background-secondary-color);
        z-index: 12;
        transition: 0.3s ease-in-out;
        opacity: 0;
        display: flex;
        justify-content: center;
    }

    .link:hover {
        background-color: var(--background-secondary-color);
        color:var(--text-color);
    }

    @media (max-width: 700px) {
        p {
            padding: 0 10px;
            text-align: justify;
            font-size: 1rem;
        }
    }
`,nw=[{name:"4any1 Assessoria de Corrida",description:"",link:"https://www.4any1assessoria.com.br/",source:""},{name:"Sfugies",description:"A web application using reactjs for the client side, Node.js + Express for the backend server and NoSQL database MongoDB.",link:"https://sfugies.onrender.com/",source:"https://github.com/fekenzofugi/Sfugies"},{name:"Mil Vezes Mãe",description:"",link:"http://mochilacriativa.com.br",source:"https://github.com/fekenzofugi/MilVezesMae"},{name:"Classe do Vinho",description:"",link:"https://classedovinho.com.br",source:""}],rw=()=>{const{ref:e,inView:t}=st();st();const{ref:n,inView:r}=st();return g.jsxs(iw,{children:[g.jsx("header",{ref:n,className:`${r?"grow":"hide"}`,children:g.jsx("h1",{ref:e,className:`${t?"animate":"hide"}`,children:"Projects"})}),g.jsx("div",{className:"works",children:nw.map(i=>{const{name:o,description:a,link:l,source:s}=i;return g.jsx(ew,{className:"work",name:o,description:a,link:l,source:s},o)})}),g.jsx(Vi,{to:"projects",className:"btn more",children:"See More"})]})},iw=Se.div`
    margin: 1rem 3rem 1rem;
    text-align: center;
    .more {
        margin-top: 1rem;
        color: var(--font-color);
        background-color: var(--background-secondary-color)
    }
    header h1 {
        background-color: var(--background-color);
        z-index: 1;
        padding: 0 1rem;
    }
    header {
        position: relative;
        width: 100%;
        display: flex;
        justify-content: center;
        margin-bottom: 2rem;
    }
    header.grow::before {
        content: "";
        background-color: orangered;
        height: 2px;
        width: 100%;
        position: absolute;
        top: 42%; 
        left: 0;
        z-index: 0;
        animation: grow-bar 1s 1s forwards;
        transform-origin: left;
        opacity: 0;
    }
    header.grow::after {
        content: "";
        background-color: orangered;
        height: 2px;
        width: 100%;
        position: absolute;
        top: 42%; 
        right: 0;
        z-index: 0;
        animation: grow-bar 1s 1s forwards;
        transform-origin: right;
        opacity: 0;
    }

    @keyframes grow-bar {
        0% {
            opacity: 1;
            transform: scaleX(0);
        }
        100% {
            opacity: 1;
            transform: scaleX(1);
        }
    }
    .works {
        display: grid;
        grid-template-columns: 1fr 1fr;
        max-width: 1000px;
        gap: 2rem;
    }
    @media (max-width: 700px) {
        margin: 3.5rem 2rem 0;
        .works {
            grid-template-columns: 1fr;
            gap: 2rem;
        }
    }

`,ow=()=>(st(),st(),st(),g.jsxs(aw,{id:"work",children:[g.jsx("svg",{className:"wave",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1440 319",children:g.jsx("path",{fill:"var(--background-secondary-color)","fill-opacity":"1",d:"M0,160L80,154.7C160,149,320,139,480,160C640,181,800,235,960,234.7C1120,235,1280,181,1360,154.7L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"})}),g.jsx(rw,{})]})),aw=Se.section`
    padding-bottom: 25%;
    background-color: var(--background-color);
    overflow: hidden;
    display: flex;
    justify-content: center;
    flex-direction: column;
    position: relative;
    align-items: center;
    
    .wave {
        position: absolute;
        bottom: 0;
        display: block;
        margin: 0;
    }
    .content {
        display: flex;
        flex-direction: column;
        position: relative;
        align-items: center;
        justify-content: center;
    }

    p {
        margin-top: 0.2rem;
        display: flex;
        position: relative;
        justify-content: center;
        align-items: center;
        padding: 1rem 0 0;
        text-align: center;
    }
    h1 {
        display: flex;
        position: relative;
        justify-content: center;
    }
    @media (max-width: 700px) {
        padding-bottom: 10rem;
        .content {
            
        }
    }
`,lw=()=>g.jsx(sw,{id:"experience"}),sw=Se.section`

`,uw="/portifolio/assets/perfil-bb3418cf.jpeg",cw=()=>g.jsxs(dw,{children:[g.jsx("h4",{children:"Education"}),g.jsx("ol",{children:g.jsx("li",{children:"bachelor's degree in electrical engineering (in progress)"})})]}),dw=Se.div`
    h4{
        margin-top: 1rem;
        font-weight: 500;
    }
    ol{
        list-style: disc;
    }
    li {
        margin-top: 1rem;
        font-size: 14px;
    }
`,fw=()=>g.jsxs(pw,{children:[g.jsx("h4",{children:"Interests"}),g.jsxs("ol",{children:[g.jsx("li",{children:"Machine / Deep Learning"}),g.jsx("li",{children:"Web Development"})]})]}),pw=Se.div`
    h4{
        margin-top: 1rem;
        font-weight: 500;
    }
    ol{
        list-style: disc;
    }
    li {
        margin-top: 1rem;
        font-size: 14px;
    }
`,hw=()=>g.jsxs(mw,{children:[g.jsx("h4",{children:"Technologies"}),g.jsx("br",{}),g.jsx("hr",{}),g.jsx("h5",{children:"Programming Languages"}),g.jsxs("ol",{children:[g.jsx("li",{children:"Python"}),g.jsx("li",{children:"JavaScript"}),g.jsx("li",{children:"Typescript"})]}),g.jsx("br",{})]}),mw=Se.div`
    h4{
        margin-top: 1rem;
        font-weight: 500;
    }
    ol{
        list-style: disc;
    }
    li {
        margin-top: 1rem;
        font-size: 14px;
    }
`,gw=()=>g.jsxs(vw,{children:[g.jsx("h4",{children:"Professional Goals"}),g.jsx("ol",{children:g.jsx("li",{children:"Work for something great"})})]}),vw=Se.div`
    h4{
        margin-top: 1rem;
        font-weight: 500;
    }
    ol{
        list-style: disc;
    }
    li {
        margin-top: 1rem;
        font-size: 14px;
    }
`,yw=()=>{const{ref:e,inView:t}=st(),{ref:n,inView:r}=st();return g.jsxs(ww,{id:"about",children:[g.jsx("svg",{className:"wave",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1440 319",children:g.jsx("path",{fill:"var(--background-color)","fill-opacity":"1",d:"M0,160L80,154.7C160,149,320,139,480,160C640,181,800,235,960,234.7C1120,235,1280,181,1360,154.7L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"})}),g.jsxs("div",{className:"content",children:[g.jsx("header",{ref:n,className:`${r?"grow":"hide"}`,children:g.jsx("h1",{ref:e,className:`${t?" animat":"hide"}`,children:"About me"})}),g.jsxs("header",{className:"content-header",children:[g.jsxs("div",{className:"about-image",children:[g.jsx("img",{src:uw,className:"img",alt:""}),g.jsx("h5",{children:"Fernando Fugihara"})]}),g.jsxs("div",{className:"description",children:[g.jsxs("p",{children:["I'm a undergraduate researcher at",g.jsx("a",{target:"_blank",className:"link",href:"https://www.unicamp.br/unicamp/",children:" University of Campinas"}),"."]}),g.jsx("p",{children:"In this moment, my interests are Machine Learning development and Computer Vision. Stay tune for the projects that will come!"}),g.jsx("hr",{}),g.jsxs("div",{className:"middle-section",children:[g.jsx(cw,{}),g.jsx(fw,{}),g.jsx(hw,{}),g.jsx(gw,{})]})]})]})]})]})},ww=Se.section`
    background-color: var(--background-secondary-color);
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    position: relative;
    padding-bottom: 25%;
    .wave {
      display: block;
      margin: 0;
      position: absolute;
      bottom: 0;
      width: 100%;
    }
    .content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 2rem 2rem;
        max-width: 1000px;
    }
    p {
      padding-top: 0;
      padding-bottom: 0;
    }
    header h1 {
        z-index: 1;
        background-color: var(--background-secondary-color);
        padding: 0 1rem;
    }
    header {
        position: relative;
        width: 100%;
        display: flex;
        justify-content: center;
        margin-bottom: 2rem;
    }
    header.grow::before {
        content: "";
        background-color: orangered;
        height: 2px;
        width: 100%;
        position: absolute;
        top: 42%; 
        left: 0;
        z-index: 0;
        animation: grow-bar 1s 1s forwards;
        transform-origin: left;
        opacity: 0;
    }
    header.grow::after {
        content: "";
        background-color: orangered;
        height: 2px;
        width: 100%;
        position: absolute;
        top: 42%; 
        right: 0;
        z-index: 0;
        animation: grow-bar 1s 1s forwards;
        transform-origin: right;
        opacity: 0;
    }

    @keyframes grow-bar {
        0% {
            opacity: 1;
            transform: scaleX(0);
        }
        100% {
            opacity: 1;
            transform: scaleX(1);
        }
    }

    .content-header {
        display: grid;
        grid-template-columns: 1fr 2.5fr;
        gap: 4rem;
        h5 {
            margin-top: 1rem;
        }
    }
    .pdf {
        margin-top: 1rem;
        border: 1px solid black;
        border-radius: 1rem;
        padding: 5px 10px;
        color: var(--text-color);
        background-color: var(--background-secondary-color);
    }
    .pdf:hover {
        background-color: var(--text-color);
        color: var(--background-secondary-color);
    }
    .description {
        margin-bottom: 0rem;
        .link {
            
            color: orangered;
        }
        p {
            text-align: start;
            display: inline-block;
            line-height: 1.5;
            margin-bottom: 1rem;
        }
    }
    .about-image {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: start;
    }
    .img {
        width: 10rem;
        border-radius: 100%;
        border: 1px solid black;
        transition: 0.2s ease-in-out;
    }
    .img:hover {
        transform: scale(1.1);
    }
    .middle-section {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 2rem;
    }
    .interests {
        margin-top: 1rem;

    }
    .education {
        margin-top: 1rem;
    }

    .container-h1 {
        position: relative;
    }
    .animat {
        animation: popUp cubic-bezier(0.645, 0.045, 0.355, 1) 1s;
    }

    @keyframes popUp {
        0% {
            transform: scale(0);
        }
        100% {
            transform: scale(1);
        }
    }
    @media (max-width: 700px) {
        padding: 0rem 1rem 1rem;
        .heading-description {
            justify-content: center;
        }
        .content-header {
            grid-template-columns: 1fr;
        }
        .middle-section {
        grid-template-columns: 1fr;
        }
        .description p{
            text-align: justify;
        }
    }
`,xw=()=>{const{ref:e,inView:t}=st();st();const{ref:n,inView:r}=st(),{ref:i,inView:o}=st();return j.useState(!1),g.jsx(kw,{id:"contact",children:g.jsxs("div",{className:"content",children:[g.jsx("header",{ref:i,className:`${o?"grow":"hide"}`,children:g.jsx("h1",{ref:e,className:`${t?" animated":"hide"}`,children:"Contact"})}),g.jsxs("div",{className:"form",children:[g.jsxs("div",{className:"form-row",children:[g.jsx("label",{htmlFor:"name",className:"form-label",children:"Name"}),g.jsx("input",{type:"text",id:"name",placeholder:"Your Name",className:"form-input",required:!0})]}),g.jsxs("div",{className:"form-row",children:[g.jsx("label",{htmlFor:"email",className:"form-label",children:"E-mail"}),g.jsx("input",{type:"email",id:"email",placeholder:"Your E-mail",className:"form-input",required:!0})]}),g.jsxs("div",{className:"form-row",children:[g.jsx("label",{htmlFor:"phone",className:"form-label",children:"Phone"}),g.jsx("input",{type:"text",id:"phone",placeholder:"Phone number",className:"form-input",required:!0})]}),g.jsx("textarea",{className:"form-textarea",name:"",id:"message",cols:"30",rows:"10",placeholder:"How can we help you?"}),g.jsx("button",{type:"submit",className:"btn btn-block",children:"Submit"})]}),g.jsxs("div",{ref:n,className:`${r?"icons animate":"icons hide"}`,children:[g.jsx(Sy,{className:"social-media email"}),g.jsx("a",{href:"https://github.com/fekenzofugi",target:"_blank",children:g.jsx(Vh,{className:"social-media"})}),g.jsx("a",{href:"https://www.linkedin.com/in/fernando-fugihara-116490322/",target:"_blank",children:g.jsx(xy,{className:"social-media linkedin"})})]})]})})},kw=Se.section`
    overflow: hidden;
    display: flex;
    justify-content: center;
    position: relative;
    align-items: center;
    padding-top: 2rem;
    margin-bottom: 1rem;
    .content {
        display: flex;
        flex-direction: column;
        position: relative;

    }
    p {
        margin-top: 1rem;
    }
    header h1 {
        z-index: 1;
        background-color: var(--background-color);
        padding: 0 1rem;
    }

    header h1.animated {
        animation: drop 1.1s forwards;
    } 

    @keyframes drop {
        0% {
            transform: scale(0);
        }
        100% {
            transform: scale(1);
        }
    }
    header {
        width: 100%;
        position: relative;
        display: flex;
        justify-content: center;
    }
    header.grow::before {
        content: "";
        background-color: orangered;
        height: 2px;
        width: 100%;
        position: absolute;
        top: 42%; 
        left: 0;
        z-index: -1;
        animation: grow-bar 1s 0.8s forwards;
        transform-origin: left;
        opacity: 0;
    }
    header.grow::after {
        content: "";
        background-color: orangered;
        height: 2px;
        width: 100%;
        position: absolute;
        top: 42%; 
        right: 0;
        z-index: -1;
        animation: grow-bar 1.1s 0.8s forwards;
        transform-origin: right;
        opacity: 0;
    }

    .btn {
        font-family: "Montserrat" ;
    }

    @keyframes grow-bar {
        0% {
            opacity: 1;
            transform: scaleX(0);
        }
        100% {
            opacity: 1;
            transform: scaleX(1);
        }
    }
    .icons {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        gap: 2rem;
    }
    .social-media {
        color: var(--text-color);
        font-size: 4rem;
        transition: transform 1s;
        cursor: pointer;
        z-index: 10000;
    }

    .social-media:hover {
        cursor: pointer;
        transform: scale(1.1);
    }

    button {
        margin-top: 1rem;
        background-color: var(--black);
        color: var(--white);
        cursor: pointer;
        font-weight: 400;
        text-transform: uppercase;
    }
    
    @media (max-width: 700px) {
    }

`;function Sw(e){return Xt({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M2.002 9.63c-.023.411.207.794.581.966l7.504 3.442 3.442 7.503c.164.356.52.583.909.583l.057-.002a1 1 0 0 0 .894-.686l5.595-17.032c.117-.358.023-.753-.243-1.02s-.66-.358-1.02-.243L2.688 8.736a1 1 0 0 0-.686.894zm16.464-3.971-4.182 12.73-2.534-5.522a.998.998 0 0 0-.492-.492L5.734 9.841l12.732-4.182z"}}]})(e)}const Cw=()=>g.jsx(bw,{children:g.jsx("div",{className:"content",children:g.jsx("ul",{children:Hh.map(e=>g.jsx("li",{children:g.jsx("a",{href:"",children:e.name})},e.name))})})}),bw=Se.nav`
    position: fixed;
`,Ew=()=>{const{ref:e,inView:t}=st(),{ref:n,inView:r}=st(),[i,o]=j.useState(!1),a=()=>{o(!i)};let l=()=>{const s=document.documentElement.scrollTop,u=document.documentElement.scrollHeight-document.documentElement.clientHeight,f=`${s/u}`,d=document.getElementById("progress-bar");d.style.transform=`scale(${f}, 1)`,d.style.opacity=`${f}`};return j.useEffect(()=>{window.addEventListener("scroll",l)},[]),g.jsxs(Rw,{children:[g.jsx("div",{id:"progress-bar-container",children:g.jsx("div",{id:"progress-bar"})}),g.jsx(Cw,{}),g.jsx(Sw,{onClick:a,className:`${i?"nav-btn active":"nav-btn"}`}),g.jsx(Ey,{showLittleNav:i,onClick:a}),g.jsxs("div",{id:"home",className:"home",children:[g.jsxs("div",{className:"first-page",children:[g.jsx("h1",{ref:e,className:`${t?"animate-name":"hide"}`,children:"KENMA"}),g.jsx("p",{ref:n,className:`${r?"animate-name":"hide"}`,children:"A software developer that builds web applications."})]}),g.jsx("svg",{className:"wave",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1440 319",children:g.jsx("path",{fill:"var(--background-color)","fill-opacity":"1",d:"M0,160L80,144C160,128,320,96,480,122.7C640,149,800,235,960,245.3C1120,256,1280,192,1360,160L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"})})]}),g.jsx(ow,{}),g.jsx(yw,{}),g.jsx(lw,{}),g.jsx(xw,{})]})},Rw=Se.div`
  position: relative;
  overflow: hidden;
  .nav-btn {
    position: fixed;
    top: 10px;
    left: 10px;
    font-size: 2.5rem;
    cursor: pointer;
    transform: scale(1);
    z-index: 100;
    transition: 0.5s;
  }
  h1 {
    font-family: "Montserrat"
  }
  .nav-btn.active {
    opacity: 0;
    transform: scale(0);
  }


  .nav-btn:hover {
    transform: rotate(46deg);
  }


  @media (max-width: 700px) {
    .left-container-arrow1 {
      justify-content: start;
    }
  }

  @keyframes pump {
    0% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(0);
    }
    100% {
      transform: translate(3px);
    }
  }

  @keyframes super-pump {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(100%);
    }
  }


    #progress-bar-container {
        position: fixed;
        z-index: 100;
        background-color: white;
        width: 100%;
        top: 0;
        left: 0;
        box-shadow: var(--shadow-1)
    }
    #progress-bar {
        background-color: black;
        transform-origin: top left;
        transform: scale(0,0);
        opacity: 0;
        width: 100%;
    }
    #progress-bar-container,
    #progress-bar {
        height: 2px;
    }

    .home {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh;
        margin: 0;
        position: relative;
        background-color: var(--background-secondary-color); 
        flex-direction: column
    }

    .wave {
      display: block;
      margin: 0;
      position: absolute;
      bottom: 0;
    }

    /* .home::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: var(--primary-500);
      border-radius: 0 0 40% 40%
    } */

    .first-page

    h1 {
        display: flex;
        justify-content: center;
        padding: 4px;
        margin-bottom: 1rem;
        font-weight: 500;
    }

    p {
        margin-top: 0.2rem;
        display: flex;
        position: relative;
        justify-content: center;
        align-items: center;
        padding: 1rem 0 0;
        text-align: center;
    }

    .hide {
        visibility: hidden;
        opacity: 0;
    }

    .animate {
        animation: left-to-right 0.5s forwards 0.5s;
        transform: scaleX(0);
        transform-origin: left;
    }

    .animate::before {
        position: absolute;
        width: 100%;
        height: 100%;
        content: "";
        background-color: var(--text-color);
        animation: right-to-left 0.5s forwards 1s;
        transform: scaleX(1);
        transform-origin: right;
    }

    @keyframes left-to-right {
        100% {
            transform: scaleX(1);
        }

    }

    @keyframes right-to-left {
        100% {
            transform: scaleX(0);
        }
    }

    .animate-name {
      animation: small-to-big 1s forwards;
      transform-origin: bottom;
      opacity: 0;
    }

    @keyframes small-to-big {
      0% {

      }
      100% {
        opacity: 1;
      }
    }

    .logo {
      position: fixed;
      font-size: 2em;
      top: 0.9rem;
      left: 4rem;
      transition: 0.5s ease-in-out;
      cursor: pointer;
      z-index: 5;
    }

    .animate2{
      visibility: visible;
      opacity: 1;
    }

`,Qh=[{count:1,title:"Welcome!",subHeader:"First post on the blog!",tags:["first post"],date:"27/01/2024",postBody:"<p>As you guys can see this is my first blog post, here i'll be sharing my journey to becoming the best programmer i can be, i'll post here the technologies i'm currently learning, projects and much more.</p><p></p>",img:"https://www.devopsschool.com/blog/wp-content/uploads/2022/03/eb9e3b7dab09358e7cf13f188f64f9f4.png"},{count:2,title:"Ruby Programming Language Basic Syntax",subHeader:"First Day learning ruby.",tags:["ruby","programming language"],date:"25/01/2024",postBody:`<p>Today i've started learning the Ruby programming language. The main motivation it's to build a good foundation and use properly the Ruby on Rails framework that transformed the way the web works and learn how to make proper web applications.</p><p>To learn the language i'll be using the book 'Programming Ruby 3.2: The Pragmatic Programmers Guide' by Dave Thomas, Chad Fowler, Andy Hunt.</p><h4>A pure object oriented language<h4/><p>An object is a thing that has data associated and functionality to manipulate that data. A language is object oriented if it has contructors methods to build these objects.</p><p>The biggest difference between Ruby and other programming languages such as Java, C# and Python is that all Ruby types are objects and there are no non-object types that behave differently.</p><p>The basic conecept of object oriented programming is a class that is a blueprint of a real world model. In Ruby you initialize an object using an special method called constructor that has a different syntax compared to Java and C#. The standard constructor in Ruby is called new.</p><pre>object1 = Class.new(arguments)</pre><p>Each object is derived by the same class but can have different data and an unique identifier that can be returned via the property object_id. Furthermore, for each object you can define instance variables - only available inside the scope of the object - and instance methods.</p><pre>object.method(something)</pre><p>The moment we call an instance method, a message is being sent to the object that message have the method's name and any arguments it expect, after that as a response the object - if the particular method is found - will involke the method. This concept was inherited from the SmallTalk programming language.</p><p>In Ruby you don't have static methods - functionality that belongs to a class - the methods needs to be called through an object. That's Ruby is called a pure object-oriented language because it doens't have basic types.</p><h4>Ruby Basic Syntax</h4><p>To continue exploring more advanced concepts inside Ruby, we need to know some basic syntax and conventions.</p><pre>#function syntax<br>def say_hello(name)<br>  result = 'hello ' + name <br>  return result<br>end<br><br>#call method<br>puts say_hello()</pre><p>One important thing to have in mind is that Ruby functions does not require the parenthesis unless they are directly needed for the interpreter. To avoid misunderstanding you can use in all situations parenthesis. Often we'll see functions with one parameter being called with no parenthesis.</p><p>There's a difference between strings inside single quotes and double quotes, using double quotes you Ruby allows you to break a line with the backslash n symbol and and using expression interpolation where you add a #{EXPRESSION} inside the string.</p><p>Variables and methods name conventions: </p><ul><li>Local Variable: name variable_underscore</li><li>Instance Variable: @name @variable_name</li><li>Class Variable: @@name @@variable_name</li><li>Global Variable $variable_name</li><li>Class Name: MyClass</li><li>Constant Name: CONSTANT_NAME</li></ul><h4>Arrays and Hashes</h4><p>Array is a data structure, it's a linear list of objects where we retrieve them via their index. In Ruby an array can have elements with different data types.The array initialization syntax is very simple we use the assignment operator followed by square brackets (array literal).</p><pre>array = [element1, element2]</pre><p>A hash is a data structure where the data is organized in the format key : value, the data is retrived by calling the keywords.</p><pre>hash = { 
  'key' => 'value'
 }</pre><h4>Symbols</h4><p>Symbols in Ruby are special strings that are immutable.</p><pre>:variable_name</pre><h4>Control Structures</h4><pre>if condition
  logic
elsif condition
  logic
else
  logic
end</pre><pre>while (condition)
  logic
end</pre><h4>Regular Expressions</h4><p>A regular expression is a way to specify a pattern of characters to be matched in a string. It's a powerful tool when we're working with text.</p><pre>line = gets
if line.match?(/Ruby|Rust)
  logic
end</pre><h4>Blocks</h4><p>A block is a chunck of code that can be passed to a method. There're two ways to initialize a block. The first one is between curly braces and the other is bewtween a do end statement. You should use curly braces when you're passing a single line block and the between the do and end statement when you're passing a multiline block.</p><p>You can control how many times you want a block to be executed within a method with the yield statement. Furthermore, you can pass arguments in a block if the yield statement expects parameters</p><pre>def call_block
  logic
  yield('parameter1', 'parameter2')
  yield('parameter1', 'parameter2')
end
call_block { |name1, name2| puts name1 + name2}</pre><p>In Ruby you can iterate through a collection, this action is called enumeration.</p><pre>animals = ['ant', 'bee', 'cat', 'dog']
animals.each {|animal| puts animal}}</pre><p>You can iterate within a range of values and define the times you want to execute the block</p><pre>animals = ['ant', 'bee', 'cat', 'dog']
5.times {puts '*'}
3.upto(6) {|i| print i}</pre><h4>Reading and Writing</h4><p>To read content on the console we use the method gets -get string- and to write content we use the method print or puts.</p>`,img:"https://www.devopsschool.com/blog/wp-content/uploads/2022/03/eb9e3b7dab09358e7cf13f188f64f9f4.png"},{count:3,title:"Getting started with rails",subHeader:"First look at the framework Ruby on Rails",tags:["ruby","programming language"],date:"29/01/2024",postBody:`<p>Now we're going to start learning Ruby on Rails following the starting guide from the oficial website of Rails.</p><h4>1. What is Ruby on Rails?</h4><p>Ruby on Rails it's a web application development framework written in the Ruby programming language. Experienced programmers often report that Rails make web development more fun.</p><h4>2. Ruby on Rails History</h4><p>The Ruby on Rails journey starts back in</p><h4>3. Rails principles</h4><ul><li>DRY: The Don't Repeat Yourself principle stands for it self</li><li>Convention over Configuration: Rails defines it's own default configurations</li></ul><h4>4. Creating a new rails project</h4><p>To create a rails project first you need to install the Ruby, Rails and sqlite3.</p><p>After the installation is completed, we generate a new project. Rails comes with a number of scripts called generators that are designed to make your development life easier by creating everything that's necessary to start working on a particular task. The generators will provide the foundation of a Rails application so you don't need to create yourself.</p><pre>$ rails new blog</pre><p>This command will create a directory called blog that contains different files and folders that make up the structure of a Rails application. In the table down below there's a table explaining each folder and file, the folder path has a / after.</p><table><tr><th>File/Folder</th><th>Purpose</th></tr><tr><td>app/</td><td>Contains the controllers, models, views, helpers, mailers, channels, jobs, and assets for your application.</td></tr><tr><td>bin/</td><td>Contains the rails script that starts your app and can contain other scripts you use to set up, create, deploy, or run your application.</td></tr><tr><td>config/</td><td>Contains configuration for your application's routes, database, and more.</td></tr><tr><td>config.ru</td><td>Rack configuration for Rack-based servers used to start the application.</td></tr><tr><td>db/</td><td>Contains your current database schema, as well as the database migrations.</td></tr><tr><td>Dockerfile</td><td>Configuration file for Docker.</td></tr><tr><td>Gemfile GEmfile.lock</td><td>These files allow you to specify what gem dependencies are needed for your Rails application. These files are used by the Bundler gem.</td></tr><tr><td>lib/</td><td>Extended modules for your application.</td></tr><tr><td>log/</td><td>Application log files.</td></tr><tr><td>public/</td><td>Contains static files and compiled asssets. When your app is running, this directory will be exposed as-is.</td></tr><tr><td>Rakefile</td><td>This file locates and loads tasks that can be run from the command line. The task definitions are defined throughout the componenents of Rails. Rather than changing Rakefile, you should add your own task sby adding files to the lib/tasks directory or your application.</td></tr><tr><td>README.md</td><td>This is a brief instruction manual for your application. You should edit this file to tell others what your application does, how to set it up, and so on.</td></tr><tr><td>storage/</td><td>Active Storage files for Disk Service.</td></tr><tr><td>test/</td><td>Unit tests, fixtures, and other test apparatus.</td></tr><tr><td>tmp/</td><td>Temporary files (like cache and pid files).</td></tr><tr><td>vendor/</td><td>A place for all third-party code. In a typical Rails application this includes vendored gems.</td></tr><tr><td>.dockerignore</td><td>This tells Docker which files it should not copy into the container.</td></tr><tr><td>.gitattributes</td><td>This file defines metadata for specific paths in a git repository. This metadata can be used by git and other tools to enhance their behavior. </td></tr><tr><td>.gitignore</td><td>This file tells git which files (or patterns) it should ignore.</td></tr><tr><td>.ruby-version</td><td>This file contains the default Ruby version.</td></tr></table><p>This table was taken from the original framework website <a target=_blanc href='https://guides.rubyonrails.org/getting_started.html'> click here to see more</a>.</p><h4>5. Hello World</h4><h5>5.1 Web server</h5><p>First we need to start a web server localy on our machine. Type the following command inside blog directory.</p><pre>$ bin/rails server</pre><p>This command will start up <a target=_blanc href='https://puma.io/'>Puma</a>, a web server distributed with Rails by default. To see your application in action, open a browser window and navigate to http://localhost:3000, you'll see the initial Rails page.</p><h5>5.2 Hello World</h5><p>To say 'Hello World' using Rails you need to create at minimun a route, a controller with an action and a view. A route maps a request to a controller action. A controller action performs the necessary work to handle the request, and prepares any data for the view. A view displays data in a derired format.</p><p>In terms of implementation: Routes are rules written in a Ruby DSL (Domain-Specific-Language). Controllers are Ruby classes, and their public methods are actions. And views are templates, usually written in a mixture of HTML and Ruby.</p><p>Let's start by adding a route to our routes file, config/routes.rb, at the top of the Rails.application.routes.draw block: </p><pre>Rails.application.routes.draw do
  get "/articles", to: "articles#index"
end</pre><p>The route above declares that GET / articles request are mapped to the index action of ArticlesController.</p><p>To create ArticlesController and its index action, we'll run the controller generator (with the --skip-routes option because because we already have an appropriate route):</p><pre>$ bin/rails generate controller Articles index --skip-routes</pre><p>Rails will create several files for you.</p><p>The most important of these is the controller file: app/controllers/ articles_controller.rb: </p><pre>class ArticlesController < ApplicationController
  def index
  end
end</pre><p>The index action is empty. When an action does not explicitly render a view (or otherwise trigger an HTTP response), Rails will automatically render a view that matches the name of the controller and action. Convention over Configuration! Views are located in the app/views directory. So the index action will render app/views/articles/index.html.erb by default. </p><p>Let's open app/views/articles/index.html.erb and replace its contents with an h1 tag with hello rails inside it. </p><p>Now if we restart the server typing bin/rails server and visit http://localhost:3000/articles we'll see the text displayed.</p><p>Gathering everything together, first we added the articles route that are mapped to the index action of ArticlesController. Then we create the ArticlesController and it's index action, we need to remember a important thing about Rails it's that automaticaly if not specified the index method will render a view with the same as the controller and the action in that case it's articles, so the index action will render the articles view (and html file).</p><h4>6. Setting the application home page</h4><p>Until now we have in our home route the standart Rails logo. Let's display the 'hello world' text in our home route. To do it we will add a route that maps the root path of our application to the appropriate controller and action.</p><p>Let's open config/routes.rb and add the following root route to the top of the Rails.application.routes.draw block: </p><pre>Rails.application.routes.draw do
  root 'artcles#index'
  get '/articles', to: 'articles#index'
end</pre><h4>7. Autoloading</h4><p>The ArticlesController class inherits the ApplicationController, but the first one does not require explicitly the superclass. Application classes and modules are available everywhere in the project, you do not need and should not load anything under app with require. This feature is called autoloading.</p><h4>8. MVC Design pattern</h4><p>MVC (Model-View-Controller) is a design pattern that divide the responsabilities of an application. MVC is the design pattern that Ruby follows by convention.</p><p>Let's create a model.</p><h5>8.1 Generating a Model</h5><p>A model is a Ruby class that is used to represent data. Adding to it, models can interact with the application's database through a feature of Rails called Active Record. To define a model, we will use the model generator: </p><pre>$ bin/rails generate model Article title:string body:text</pre><p>This command will generate multiple files, we'll focus on db/migrate/<timestamp>_create_articles.rb and the model file app/models/article.rb</p><h5>8.2 Database migrations</h5><p>Migrations are used to alter the structure of an application's database. In Rails applications, migrations are written in ruby so that they can be database-agnostic.</p><p>Inside our migrations file we have: </p><pre>class CreateArticles < ActiveRecord::Migration[7.1]
  def change
    create_table : articles do |t|
      t.string :title
      t.text :body

      t.timestamps
    end
  end
end</pre><p>create_table specifies how the articles table should be constructed. By default, the create_table method adds an id column as an auto-incrementing primary key.</p><p>Inside the create_table block, two columns are defined: title and body. These were added by the generator because we included them in our generate command.</p><p>On the last line of the block is a call to t.timestamps. This method defines two additional columns named created_at and updated_at. As we will see, Rails will manage these for us, setting the values when we create or update a model object.</p><p>To run our migration we type the following command: </p><pre>$ bin/rails dg:migrate</pre><p>We use the model to interact with the table.</p><h5>8.3 Using a model to iteract with the database</h5><p>To play with our model, we're going to use a feature of Rails called console. The console is an interact coding environment just like irb, but it also automatically loads Rails and our application code.</p><p>IRB stands for 'interactive ruby' and is at tool to interactively execute Ruby expressions read from the standart input.</p><p>Launch the console with the following command: </p><pre>$ bin/rails console</pre><p>At the console prompt, we can initialize a new Article object: </p><pre>irb> article = Article.new(title: 'Hello Rails', body: 'I am on Rails!')</pre><p>It's important to note that we have only initialized this object. This object is not saved to the database at all. It's only available in the console at the moment. To save the object to the database, we must call save: </p><pre>irb> article.save</pre><p>As a response we'll see printed INSERT INTO 'articles' this means that the object was created at the table.</p><p>if we type in the prompt article we'll see printed the object data.</p><p>Notice that id, created_at and updated_at object attributes were created.</p><p>We can fetch this object from the database using the find method passing the id number as a argument.</p><pre>irb>Article.find(1)</pre><p>Adding to it, we can fetch all the articles from the database using the all method.</p><pre>irb>Article.all</pre><p>This method returns an ActiveRecord::Relation object, which you can think of as a superpowered array.</p><p>Models are the final piece of the MVC puzzle. Next, we will connect all of the pieces together.</p><h5>8.4 Showing a list of articles</h5><p>Back in the controller in app/controllers/articles_controller.rb, let's change the index action to fetch all articles from the database: </p><pre>class ArticlesController < ApplicationController
  def index
    @articles = Article.all
  end
end</pre><p>Controller instance variables can be accessed by the view. That means we can reference @articles in app/views/articles/index.html.erb. Let's open that file and change it's content.</p><pre><code class='language-html line-numbers'>&lt;h1&gt;Articles&lt;/h1&gt;
&lt;ul&gt;
  &lt;% @articles.each do |article| %&gt;
    &lt;li&gt;
      &lt;%=article.title %&gt
    &lt;/li&gt;
  &lt;% end %&gt;
&lt;ul&gt;</code></pre><p>The above code is a mixture of HTML and ERB. ERB is a templating system taht evaluates Ruby code embedded in a document. Here, we can see two types of ERB tags: &lt;% %&gt; and &lt;%= %&gt;. The first one means 'evaluate the enclosed Ruby code'. The last one means 'evaluate the enclosed Ruby code, and output the value it returns'. Anything you could write in regular Ruby program go inside these ERB tags, though it's usually best to keep the contents of ERB tags short, for readability.  </p><p>If we restart our server, now we'll see the data from our database displayed on http://localhost:3000.</p><p>Let's recap what happens when we visit http://localhost:3000 :</p><ol><li>The browser makes a request to http://localhost:3000.</li><li>Our Rails application receives this request.</li><li>The Rails router maps the root route to the index action of ArticlesController.</li><li>The index action uses the Article model to fetch all articles in the database.</li><li>Rails automatically renders the app/views/articles/index.html.erb view.</li><li>The ERB code in the view is evaluated to output HTML.</li><li>The server sends a response containing the HTML back to the browser.</li></ol><p>We've connected all the MVC design pattern parts together and we have our first controller action. Next, we'll move to the second action.</p><h4>9. CRUD</h4><p>Almost all web applications involve CRUD (Create, Read, Update, Delete) operations. You may even find that the majority of the work you application does is CRUD. Rails acknowledges this, and provides many features to help simplify code doing CRUD. Let's begin exploring these features by adding more functionality to our application</p><h5>9.1 Showing a Single Article</h5><p>We currently have a view that lists all the articles in our database. Let's create  a view that shows the title and body of a single article.</p><p>We start by adding a new route that maps to a new controller action (which we will add next). Open config/routes.rb, and insert the last route shown here.</p><pre>Rails.application.routes.draw do
  root 'artcles#index'

  get '/articles', to: 'articles#index'
  get '/articles/:id', to: 'articles#show'
end</pre><p>The new route is another get route, but it has something extra in its path :id. This designates a route parameter. A route parameter captures a segment of the request's path, and puts that value in the params hash, which is accessible by the controller action. For example, when handling a request like GET http://localhost:3000/articles/1, 1 would be captured as the value for :id, which would then be accessible as params[:id] in the show action of ArticlesController.</p><p>Let's add that show action now, below the index action in app/controllers/articles_controller.rb.</p><pre>class ArticlesController < ApplicationController
  def index
    @articles = Article.all
  end

  def show
    @article = Article.find(params[:id])
  end
end</pre><p>The show action calls Article.find with the id captured by the route parameter. The returned article is stored in the @article instance variable, so it is accessible by the view. By default, the show action will render app/views/articles/show.html.erb.</p><p>Let's create app/views/articles/show.html.erb, with the following contents</p><pre>&lt;h1&gt;&lt;%= @article.title %&gt;&lt;/h1&gt;

&lt;p&gt;&lt;%= @article.body %&gt;&lt;/p&gt;</pre><p>Now we can see the article when we visit http://localhost:3000/articles/1.</p><p>To finish up, let's add a convenient way to get to an article's page. We'll link each article's page. We'll link each article's title in app/views/articles/index.html.erb to its page.</p><pre><code class='language-html line-numbers'>&lt;h1&gt;Articles&lt;/h1&gt;
&lt;ul&gt;
  &lt;% @articles.each do |article| %&gt;
    &lt;li&gt;
      &lt;a href='/articles/ &lt;%= article.id %&gt;'&gt;
        &lt;%=article.title %&gt
      &lt/a&gt;
    &lt;li&gt;
  &lt;% end %&gt;
&lt;ul&gt;</code></pre><h5>9.2 Resourceful Routing</h5><p>So far, we've covered the 'R' (Read) of CRUD. We will eventually cover the 'C' (Create), 'U' (Update), and 'D' (Delete). As you might have guessed, we will so do by adding new routes, controller actions and views. Whenever we have such a combination of routes, controller actions, and views that work together to perform CRUD operations on an entity, we call that a entity resource. For example, in our application, we would say an article is a resource.</p><p>Rails provides a routes method named resources that maps all the conventional routes for a collection of resources, such as articles. So before we proceed to the 'C', 'U' and 'D' sections, let's replace the two get routes in config/routes/rb with resources: </p><pre>Rails.application.routes.draw do
  root 'articles#index'
  resources :articles
end</pre><p>We can inspect what routes are mapped by running the bin/rails routes command.</p><p>The resources method also sets up URL and path helper methods that we can use to keep our code from depending on a specific route configuration. The values in the 'prefix' column (in in the table on the command line when we type the bin/rails routes command) plus a suffix of _url or _path forms the names of these helpers. For example, the article_path helper returns /articles/#{article.id} when given an article. We can use it to tidy up our links in app/views/articles/index.html.erb.</p><pre>&lt;h1&gt;Articles&lt;/h1&gt;
&lt;ul&gt;
  &lt;% @articles.each do |article| %&gt;
    &lt;li&gt;
      &lt;a href='&lt;%= article_path(article) %&gt;'&gt;
        &lt;%=article.title %&gt
      &lt/a&gt;
    &lt;li&gt;
  &lt;% end %&gt;
&lt;ul&gt;</pre><p>However, we will take this one step further by using the link_to helper. The link_to helper renders a link with its first argument as the link's text and its second argument as the link's destination, link_to will call the appropriate path helper to convert the object to a path. For example, if we pass an article, link_to will call article_path. So app/views/articles/index.html.erb becomes: </p><pre><code class='language-html line-numbers'>&lt;h1&gt;Articles&lt;/h1&gt;
&lt;ul&gt;
  &lt;li&gt;
    &lt;% @articles.each do |article| %&gt;
      &lt;%=article.title %&gt    
    &lt;% end %&gt;
  &lt;li&gt;
&lt;ul&gt;</code></pre><h5>9.3 Creating a new article</h5><p>Now we move on to the 'C' (Create) of CRUD. Typically, in web applications, creating a new resource is a multi-step process. First, the user requests a form to fill out. Then, the user submits the form. If there are no errors, then the resource is created and some kind of confiramation is displayed. Else, the form is redisplayed with error messages, and the process is repeated.</p><p>In a Rails application, these steps are conventionally handled by a controller's new and create action. Let's add a typical implementation of these actions to app/controllers/articles_controllers.rb below the show action: </p><pre>class ArticlesController < ApplicationController
  def index
    @articles = Article.all
  end

  def show
    @article = Article.find(params[:id])
  end

  def new
    @article = Article.new
  end

  def create
    @article = Article.new(title: '...', body: '...')

    if @article.save
      redirect_to @article
    else
      render :new, status: :unprocessable_entity
    end
  end
end</pre><p>The new action instantiates a new article, but does not save it. This article will be used in the view when building the form. By default, the new action will render app/views/articles/new.html.erb, which we will create next.</p><p>The create action instantiates a new article with values for the title and body, and attempts to save it. If the article is saved successfully, the action redirects the browser to the articles's page at 'http://localhost:3000/articles/#{@article.id}'. Else, the action redisplays the form by rendering app/views/articles/new.html.erb with status code 422 Unprocessable Entity. The title and body here are dummy values. After we create the form, we will come back and change these.</p><p>redirect_to will cause the browser to make a new request, whereas render renders the specified view for the current request. It is important to use redirect_to after mutating the database or application state. Otherwise, if the user refreshes the page, the browser will make the same request, and the mutation will be repeated.</p><h5>9.3.1 Using a Form Builder</h5><p>We will use a feature of Rails called a form builder to create our form. Using a form builder, we can write minimal amount of code to output a form that is fully configured and follows Rails conventions.</p><p>Let's create app/views/articles/new.html.erb with the following contents: </p><pre>&lt;h1&gt;New Article&lt;/h1&gt;

&lt;%= form_with model: @article do |form| %>
  &lt;div&gt;
    &lt;%= form.label :title %&gt;&lt;br&gt;
    &lt;%= form.text_field :title %&gt;
  &lt;/div&gt;

  &lt;div&gt;
    &lt;%=form.label :body %&gt;&lt;br&gt;
    &lt;%= form.text_area :body %&gt;
  &lt;/div&gt;

  &lt;div&gt;
    &lt;%= form.submit %&gt;
  &lt;/div&gt;
&lt;% end %&gt;</pre><p>The form_with helper method instantiates a form builder. In the form_with block we call methods like label and text_field on the form builder to output the appropriate form elements.</p><p>The returning output from our form_with call will look like: </p><pre>&lt;form action='/articles' accept-charset='UTF-8' method='post'&gt;
  &lt;input type='hidden' name='authenticity_token' value='...' &gt;

  &lt;div&gt;
    &lt;label for='article_title'&gt;Title&lt;/label&gt;&lt;br&gt;
    &lt;input type='text' name='article[title]' id='article_title'&gt;
  &lt;/div&gt;

  &lt;div&gt;
    &lt;label for='article_body'&gt;Body&lt;/label&gt;&lt;br&gt;
    &lt;textarea name='article[body]' id='article_body'&gt;&lt;/textarea&gt;
  &lt;/div&gt;

  &lt;div&gt;
    &lt;input type='submit' name='commit' value='Create Article' data-disable-with='Create Article'&gt;
  &lt;/div&gt;
&lt;/form&gt;</pre><h5>9.3.2 Using strong parameters</h5><p>Submitted form data is put into the params hash, alongside captured route parameters. Thus, the create action can access the submitted title via params[:article][:title] and the submitted body via params[:article][:body]. We could pass these values individually to Article.new, but that would be verbose and possibly error-prone. And it would become worse as we add more fields.</p><p>Instead, we will pass a single hash that contains the values. However, we must still specify what values are allowed in that Hash. Otherwise, a malicious user could potentially submit extra form fields and overwrite private data. In fact, if we pass the unfiltred params[:article] hash directly to Article.new, Rails will raise a ForbiddenAttributesError to alert us about the problem. So we will use a feature called Strong Parameters to filter params. Think of it as strong typing for params.</p><p>Let's add a private method to the bottom of app/controllers/articles_controller.rb named article_params that filters params. And let's change create to use it.</p><pre>class ArticlesController < ApplicationController
  def index
    @articles = Article.all
  end

  def show
    @article = Article.find(params[:id])
  end

  def new
    @article = Article.new
  end

  def create
    @article = Article.new(article_params)

    if @article.save
      redirect_to @article
    else
      render :new, status: :unprocessable_entity
    end
  end

  private
    def article_params
      params.require(:article).permit(:title, :body)
    end
end</pre><h5>9.3.3 Validations and Displaying Error messages</h5><p>Creating is a multi-step process. Input validation is another step of it. To deal with that Rails provide a feature called validations. Validaitions are rules that are chacked before a model object is saved. If the new object is invalid the creating will be aborted and appropriate error messages will ge added to the errors attribute of the model object.</p><pre>class Article < ApplicationRecord
  validates :title, presence: true
  validates :body, presence: true, length: { minimum: 10 }
end</pre><p>The first validation declares that a title value must be present. Because title is a string, this means that the title value must contain at least one non-whitespace character.</p><p>The second validation declares that the body value must be present. Additionally, it declares that the body value must be at least 10 characteres long.</p><p></p>`,img:"https://www.devopsschool.com/blog/wp-content/uploads/2022/03/eb9e3b7dab09358e7cf13f188f64f9f4.png"}],jw=()=>{const t=Pv().id,n=Qh.find(r=>r.title==t);return g.jsx(_w,{children:g.jsxs("div",{className:"content",children:[g.jsxs("header",{children:[g.jsxs("h2",{children:["#",n.count," - ",n.title]}),g.jsx("h5",{children:n.date})]}),g.jsx("div",{className:"body",dangerouslySetInnerHTML:{__html:n.postBody}})]})})},_w=Se.div`
  overflow: hidden;
  display: flex;
  justify-content: center;
  padding: 4rem 3rem 2rem;
  min-height: 100vh;
  h2 {
    font-weight: 800;
    font-size: 3rem;
    margin-bottom: 2rem;
  }
  pre {
    display: flex;
    flex-wrap: wrap;
  }
  header {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 2rem;
  }
  .content {
    position: relative;
    max-width: 1000px;
  }
  .body {
    p {
      overflow-wrap: break-word;
      font-size: 1.2rem;
      margin-bottom: 1rem;
      line-height: 1.4;
      font-weight: 800;
      font-family: 'Courier New', Courier, monospace;
      text-transform: none;
    }

    pre {
      background-color: var(--background-secondary-color);
      border: 1px solid var(--text-color);
      padding: 1rem;
      font-size: 1.2rem;
      text-transform: none;
      word-wrap: break-word;
      overflow-x: auto;
      line-height: 1.8rem;
      margin: 2rem 0;
    }
    
    b {
      color: red;
    }

    ol {
      list-style: decimal !important;
    }

    ol, ul {
      position: relative;
      font-family: 'Courier New', Courier, monospace;
      font-weight: 800;
      list-style: disc;
      overflow-wrap: break-word;
      width: 100%;
      li {
        font-size: 1.2rem;
        position: relative;
        width: 100%;
      }
    }

    h4 {
      font-size: 2.5rem;
      margin: 2rem 0;
    }
    h5 {
      font-size: 2rem;
      margin: 2rem 0;
    }
    
    p, h4, h5, pre, ul, ol {
      color: var(--text-color);
      margin-bottom: 1rem;
      display: block;
    }
  }

  table {
  font-family: 'Courier New', Courier, monospace;
  border-collapse: collapse;
  width: 100%;
  margin-bottom: 1rem;
}

table td, table th {
  font-weight: 800;
  border: 1px solid var(--text-color);
  padding: 8px;
}

table th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
}

a {
  color :red;
}

  @media (max-width: 500px) {
    h2 {
      font-size: 2rem;
    }
    h4 {
      font-size: 1.9rem !important;
    }
    h5 {
      font-size: 1.5rem !important;
    }
    .content {
      width: 17rem;
    }

  }

  @media (max-width: 350px) {
    .content {
      width: 15rem;
    }
  }
`,Pw=e=>g.jsx(Tw,{children:g.jsx(Vi,{to:`${e.title}`,children:g.jsxs("div",{className:"content",children:[g.jsxs("header",{children:[g.jsxs("h4",{children:["#",e.count," - ",e.title]}),g.jsx("p",{children:e.subHeader}),g.jsx("p",{children:e.date}),g.jsx("div",{className:"tags",children:e.tags.map(t=>g.jsx(Vi,{to:"/blog/{tag}",className:"tag",children:t},t))})]}),g.jsx("div",{className:"body"})]})})}),Tw=Se.div`
  a {
    transition: 0.3s;
    color: var(--font-color)
  }
  a:hover .content {
    background-color: rgba(0, 0, 0, 0.2) !important;
  }
  .content {
    transition: .3s;
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    width: 700px;
    height: 14rem;
    background-color: var(--background-secondary-color);
    justify-content: center;
    align-items: center;
    padding: 2rem 0 0;
  }
  header {
    width: 100%;
    padding: 0 1rem 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  h4 {
    font-weight: 800;
  }
  img {
    max-height: 10rem;
    max-width: 500px;
  }
  .tags {
    display: flex;
    gap: 1rem;
  }
  .tag {
    border-radius: 1rem;
    color: white;
    padding: 5px 10px;
    background-color: #b81212;
    border: 1px solid black;
    font-size: var(--font-size);
    z-index: 10;
    cursor: pointer;
  }
  .tag:hover {
    transform: scale(1.04);
  }
  
  @media (max-width: 800px) {
    .content {
      width: 300px;
    }
  }

`,Nw=()=>g.jsx(Lw,{children:Qh.map(e=>g.jsx(Pw,{count:e.count,title:e.title,subHeader:e.subHeader,tags:e.tags,date:e.date,img:e.img},e))}),Lw=Se.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column-reverse;
  gap: 2rem;
  margin: 5rem 0;
  min-height: 100vh !important;
`,zw=()=>g.jsx(Mw,{children:g.jsx(Uu,{})}),Mw=Se.div`
`,Aw=e=>g.jsx(Dw,{children:g.jsxs("div",{className:"content",children:[g.jsxs("header",{children:[g.jsxs("h4",{children:["#",e.count," - ",e.title]}),g.jsx("p",{children:e.subHeader}),g.jsx("div",{className:"tags",children:e.tags.map(t=>g.jsx(Vi,{to:"/blog/{tag}",className:"tag",children:t},t))})]}),g.jsx("div",{className:"body"}),g.jsx("a",{target:"_blank",href:e.date,children:"source code"})]})}),Dw=Se.div`
  a {
    transition: 0.3s;
    color: var(--font-color);
    border-color: var(--font-color);
    border: 1px solid;
    padding: 5px 5px;
  }

  a:hover{
    background-color: rgba(0, 0, 0, 0.2) !important;
  }
  .content {
    transition: .3s;
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    width: 700px;
    height: 14rem;
    background-color: var(--background-secondary-color);
    justify-content: center;
    align-items: center;
    padding: 2rem 0 0;
  }
  header {
    width: 100%;
    padding: 0 1rem 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  h4 {
    font-weight: 800;
  }
  img {
    max-height: 10rem;
    max-width: 500px;
  }
  .tags {
    display: flex;
    gap: 1rem;
  }
  .tag {
    border-radius: 1rem;
    color: white;
    padding: 5px 10px;
    background-color: #b81212;
    border: 1px solid black;
    font-size: var(--font-size);
    z-index: 10;
    cursor: pointer;
  }
  .tag:hover {
    transform: scale(1.04);
  }
  
  @media (max-width: 800px) {
    .content {
      width: 300px;
    }
  }

`,Ow=[{count:0,title:"Blink.io",subHeader:"Job Interview assistent.",tags:[],github:"https://github.com/fekenzofugi/blink.io",postBody:"<p>As you guys can see this is my first blog post, here i'll be sharing my journey to becoming the best programmer i can be, i'll post here the technologies i'm currently learning, projects and much more.</p><p></p>",img:"https://www.devopsschool.com/blog/wp-content/uploads/2022/03/eb9e3b7dab09358e7cf13f188f64f9f4.png"}],Iw=()=>g.jsx($w,{children:Ow.map(e=>g.jsx(Aw,{count:e.count,title:e.title,subHeader:e.subHeader,tags:e.tags,date:e.github,img:e.img},e))}),$w=Se.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column-reverse;
  gap: 2rem;
  margin: 5rem 0;
  min-height: 100vh !important;
`,Fw=Gv([{path:"/portifolio",element:g.jsx(Qy,{}),children:[{index:!0,element:g.jsx(Ew,{})},{path:"blog",element:g.jsx(gy,{}),children:[{index:!0,element:g.jsx(Nw,{})},{path:":id",element:g.jsx(jw,{})}]},{path:"projects",element:g.jsx(zw,{}),children:[{index:!0,element:g.jsx(Iw,{})}]}]}]),Uw=()=>{const e=localStorage.getItem("darkTheme")==="true";return document.body.classList.toggle("dark-theme",e),e},Bw=()=>g.jsx(g.Fragment,{children:g.jsx(r1,{router:Fw})});Il.createRoot(document.getElementById("root")).render(g.jsx(St.StrictMode,{children:g.jsx(Bw,{})}));
