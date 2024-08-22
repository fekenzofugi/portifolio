function Gp(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(r,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function Jc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var qc={exports:{}},Wi={},ed={exports:{}},ee={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Po=Symbol.for("react.element"),Kp=Symbol.for("react.portal"),Xp=Symbol.for("react.fragment"),Zp=Symbol.for("react.strict_mode"),Jp=Symbol.for("react.profiler"),qp=Symbol.for("react.provider"),eh=Symbol.for("react.context"),th=Symbol.for("react.forward_ref"),nh=Symbol.for("react.suspense"),rh=Symbol.for("react.memo"),oh=Symbol.for("react.lazy"),fu=Symbol.iterator;function ih(e){return e===null||typeof e!="object"?null:(e=fu&&e[fu]||e["@@iterator"],typeof e=="function"?e:null)}var td={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},nd=Object.assign,rd={};function _r(e,t,n){this.props=e,this.context=t,this.refs=rd,this.updater=n||td}_r.prototype.isReactComponent={};_r.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};_r.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function od(){}od.prototype=_r.prototype;function os(e,t,n){this.props=e,this.context=t,this.refs=rd,this.updater=n||td}var is=os.prototype=new od;is.constructor=os;nd(is,_r.prototype);is.isPureReactComponent=!0;var pu=Array.isArray,id=Object.prototype.hasOwnProperty,ls={current:null},ld={key:!0,ref:!0,__self:!0,__source:!0};function ad(e,t,n){var r,o={},i=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(i=""+t.key),t)id.call(t,r)&&!ld.hasOwnProperty(r)&&(o[r]=t[r]);var a=arguments.length-2;if(a===1)o.children=n;else if(1<a){for(var s=Array(a),u=0;u<a;u++)s[u]=arguments[u+2];o.children=s}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)o[r]===void 0&&(o[r]=a[r]);return{$$typeof:Po,type:e,key:i,ref:l,props:o,_owner:ls.current}}function lh(e,t){return{$$typeof:Po,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function as(e){return typeof e=="object"&&e!==null&&e.$$typeof===Po}function ah(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var hu=/\/+/g;function bl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?ah(""+e.key):t.toString(36)}function oi(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Po:case Kp:l=!0}}if(l)return l=e,o=o(l),e=r===""?"."+bl(l,0):r,pu(o)?(n="",e!=null&&(n=e.replace(hu,"$&/")+"/"),oi(o,t,n,"",function(u){return u})):o!=null&&(as(o)&&(o=lh(o,n+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(hu,"$&/")+"/")+e)),t.push(o)),1;if(l=0,r=r===""?".":r+":",pu(e))for(var a=0;a<e.length;a++){i=e[a];var s=r+bl(i,a);l+=oi(i,t,n,s,o)}else if(s=ih(e),typeof s=="function")for(e=s.call(e),a=0;!(i=e.next()).done;)i=i.value,s=r+bl(i,a++),l+=oi(i,t,n,s,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function $o(e,t,n){if(e==null)return e;var r=[],o=0;return oi(e,r,"","",function(i){return t.call(n,i,o++)}),r}function sh(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var tt={current:null},ii={transition:null},uh={ReactCurrentDispatcher:tt,ReactCurrentBatchConfig:ii,ReactCurrentOwner:ls};ee.Children={map:$o,forEach:function(e,t,n){$o(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return $o(e,function(){t++}),t},toArray:function(e){return $o(e,function(t){return t})||[]},only:function(e){if(!as(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};ee.Component=_r;ee.Fragment=Xp;ee.Profiler=Jp;ee.PureComponent=os;ee.StrictMode=Zp;ee.Suspense=nh;ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=uh;ee.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=nd({},e.props),o=e.key,i=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,l=ls.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(s in t)id.call(t,s)&&!ld.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&a!==void 0?a[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){a=Array(s);for(var u=0;u<s;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Po,type:e.type,key:o,ref:i,props:r,_owner:l}};ee.createContext=function(e){return e={$$typeof:eh,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:qp,_context:e},e.Consumer=e};ee.createElement=ad;ee.createFactory=function(e){var t=ad.bind(null,e);return t.type=e,t};ee.createRef=function(){return{current:null}};ee.forwardRef=function(e){return{$$typeof:th,render:e}};ee.isValidElement=as;ee.lazy=function(e){return{$$typeof:oh,_payload:{_status:-1,_result:e},_init:sh}};ee.memo=function(e,t){return{$$typeof:rh,type:e,compare:t===void 0?null:t}};ee.startTransition=function(e){var t=ii.transition;ii.transition={};try{e()}finally{ii.transition=t}};ee.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};ee.useCallback=function(e,t){return tt.current.useCallback(e,t)};ee.useContext=function(e){return tt.current.useContext(e)};ee.useDebugValue=function(){};ee.useDeferredValue=function(e){return tt.current.useDeferredValue(e)};ee.useEffect=function(e,t){return tt.current.useEffect(e,t)};ee.useId=function(){return tt.current.useId()};ee.useImperativeHandle=function(e,t,n){return tt.current.useImperativeHandle(e,t,n)};ee.useInsertionEffect=function(e,t){return tt.current.useInsertionEffect(e,t)};ee.useLayoutEffect=function(e,t){return tt.current.useLayoutEffect(e,t)};ee.useMemo=function(e,t){return tt.current.useMemo(e,t)};ee.useReducer=function(e,t,n){return tt.current.useReducer(e,t,n)};ee.useRef=function(e){return tt.current.useRef(e)};ee.useState=function(e){return tt.current.useState(e)};ee.useSyncExternalStore=function(e,t,n){return tt.current.useSyncExternalStore(e,t,n)};ee.useTransition=function(){return tt.current.useTransition()};ee.version="18.2.0";ed.exports=ee;var P=ed.exports;const ft=Jc(P),ta=Gp({__proto__:null,default:ft},[P]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ch=P,dh=Symbol.for("react.element"),fh=Symbol.for("react.fragment"),ph=Object.prototype.hasOwnProperty,hh=ch.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,mh={key:!0,ref:!0,__self:!0,__source:!0};function sd(e,t,n){var r,o={},i=null,l=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)ph.call(t,r)&&!mh.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:dh,type:e,key:i,ref:l,props:o,_owner:hh.current}}Wi.Fragment=fh;Wi.jsx=sd;Wi.jsxs=sd;qc.exports=Wi;var m=qc.exports,na={},ud={exports:{}},mt={},cd={exports:{}},dd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(z,B){var $=z.length;z.push(B);e:for(;0<$;){var re=$-1>>>1,A=z[re];if(0<o(A,B))z[re]=B,z[$]=A,$=re;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var B=z[0],$=z.pop();if($!==B){z[0]=$;e:for(var re=0,A=z.length,D=A>>>1;re<D;){var M=2*(re+1)-1,H=z[M],k=M+1,J=z[k];if(0>o(H,$))k<A&&0>o(J,H)?(z[re]=J,z[k]=$,re=k):(z[re]=H,z[M]=$,re=M);else if(k<A&&0>o(J,$))z[re]=J,z[k]=$,re=k;else break e}}return B}function o(z,B){var $=z.sortIndex-B.sortIndex;return $!==0?$:z.id-B.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var l=Date,a=l.now();e.unstable_now=function(){return l.now()-a}}var s=[],u=[],p=1,g=null,v=3,S=!1,x=!1,y=!1,h=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f(z){for(var B=n(u);B!==null;){if(B.callback===null)r(u);else if(B.startTime<=z)r(u),B.sortIndex=B.expirationTime,t(s,B);else break;B=n(u)}}function w(z){if(y=!1,f(z),!x)if(n(s)!==null)x=!0,ut(b);else{var B=n(u);B!==null&&Be(w,B.startTime-z)}}function b(z,B){x=!1,y&&(y=!1,d(_),_=-1),S=!0;var $=v;try{for(f(B),g=n(s);g!==null&&(!(g.expirationTime>B)||z&&!ge());){var re=g.callback;if(typeof re=="function"){g.callback=null,v=g.priorityLevel;var A=re(g.expirationTime<=B);B=e.unstable_now(),typeof A=="function"?g.callback=A:g===n(s)&&r(s),f(B)}else r(s);g=n(s)}if(g!==null)var D=!0;else{var M=n(u);M!==null&&Be(w,M.startTime-B),D=!1}return D}finally{g=null,v=$,S=!1}}var N=!1,T=null,_=-1,Z=5,U=-1;function ge(){return!(e.unstable_now()-U<Z)}function ve(){if(T!==null){var z=e.unstable_now();U=z;var B=!0;try{B=T(!0,z)}finally{B?ye():(N=!1,T=null)}}else N=!1}var ye;if(typeof c=="function")ye=function(){c(ve)};else if(typeof MessageChannel<"u"){var Re=new MessageChannel,pe=Re.port2;Re.port1.onmessage=ve,ye=function(){pe.postMessage(null)}}else ye=function(){h(ve,0)};function ut(z){T=z,N||(N=!0,ye())}function Be(z,B){_=h(function(){z(e.unstable_now())},B)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(z){z.callback=null},e.unstable_continueExecution=function(){x||S||(x=!0,ut(b))},e.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Z=0<z?Math.floor(1e3/z):5},e.unstable_getCurrentPriorityLevel=function(){return v},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(z){switch(v){case 1:case 2:case 3:var B=3;break;default:B=v}var $=v;v=B;try{return z()}finally{v=$}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(z,B){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var $=v;v=z;try{return B()}finally{v=$}},e.unstable_scheduleCallback=function(z,B,$){var re=e.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?re+$:re):$=re,z){case 1:var A=-1;break;case 2:A=250;break;case 5:A=1073741823;break;case 4:A=1e4;break;default:A=5e3}return A=$+A,z={id:p++,callback:B,priorityLevel:z,startTime:$,expirationTime:A,sortIndex:-1},$>re?(z.sortIndex=$,t(u,z),n(s)===null&&z===n(u)&&(y?(d(_),_=-1):y=!0,Be(w,$-re))):(z.sortIndex=A,t(s,z),x||S||(x=!0,ut(b))),z},e.unstable_shouldYield=ge,e.unstable_wrapCallback=function(z){var B=v;return function(){var $=v;v=B;try{return z.apply(this,arguments)}finally{v=$}}}})(dd);cd.exports=dd;var gh=cd.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fd=P,ht=gh;function j(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var pd=new Set,ao={};function Hn(e,t){yr(e,t),yr(e+"Capture",t)}function yr(e,t){for(ao[e]=t,e=0;e<t.length;e++)pd.add(t[e])}var qt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ra=Object.prototype.hasOwnProperty,vh=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,mu={},gu={};function yh(e){return ra.call(gu,e)?!0:ra.call(mu,e)?!1:vh.test(e)?gu[e]=!0:(mu[e]=!0,!1)}function wh(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function xh(e,t,n,r){if(t===null||typeof t>"u"||wh(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function nt(e,t,n,r,o,i,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=l}var Qe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Qe[e]=new nt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Qe[t]=new nt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Qe[e]=new nt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Qe[e]=new nt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Qe[e]=new nt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Qe[e]=new nt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Qe[e]=new nt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Qe[e]=new nt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Qe[e]=new nt(e,5,!1,e.toLowerCase(),null,!1,!1)});var ss=/[\-:]([a-z])/g;function us(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ss,us);Qe[t]=new nt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ss,us);Qe[t]=new nt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ss,us);Qe[t]=new nt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Qe[e]=new nt(e,1,!1,e.toLowerCase(),null,!1,!1)});Qe.xlinkHref=new nt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Qe[e]=new nt(e,1,!1,e.toLowerCase(),null,!0,!0)});function cs(e,t,n,r){var o=Qe.hasOwnProperty(t)?Qe[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(xh(t,n,o,r)&&(n=null),r||o===null?yh(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var on=fd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Io=Symbol.for("react.element"),Xn=Symbol.for("react.portal"),Zn=Symbol.for("react.fragment"),ds=Symbol.for("react.strict_mode"),oa=Symbol.for("react.profiler"),hd=Symbol.for("react.provider"),md=Symbol.for("react.context"),fs=Symbol.for("react.forward_ref"),ia=Symbol.for("react.suspense"),la=Symbol.for("react.suspense_list"),ps=Symbol.for("react.memo"),un=Symbol.for("react.lazy"),gd=Symbol.for("react.offscreen"),vu=Symbol.iterator;function Dr(e){return e===null||typeof e!="object"?null:(e=vu&&e[vu]||e["@@iterator"],typeof e=="function"?e:null)}var be=Object.assign,El;function Qr(e){if(El===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);El=t&&t[1]||""}return`
`+El+e}var Rl=!1;function jl(e,t){if(!e||Rl)return"";Rl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),i=r.stack.split(`
`),l=o.length-1,a=i.length-1;1<=l&&0<=a&&o[l]!==i[a];)a--;for(;1<=l&&0<=a;l--,a--)if(o[l]!==i[a]){if(l!==1||a!==1)do if(l--,a--,0>a||o[l]!==i[a]){var s=`
`+o[l].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=l&&0<=a);break}}}finally{Rl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Qr(e):""}function kh(e){switch(e.tag){case 5:return Qr(e.type);case 16:return Qr("Lazy");case 13:return Qr("Suspense");case 19:return Qr("SuspenseList");case 0:case 2:case 15:return e=jl(e.type,!1),e;case 11:return e=jl(e.type.render,!1),e;case 1:return e=jl(e.type,!0),e;default:return""}}function aa(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Zn:return"Fragment";case Xn:return"Portal";case oa:return"Profiler";case ds:return"StrictMode";case ia:return"Suspense";case la:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case md:return(e.displayName||"Context")+".Consumer";case hd:return(e._context.displayName||"Context")+".Provider";case fs:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ps:return t=e.displayName||null,t!==null?t:aa(e.type)||"Memo";case un:t=e._payload,e=e._init;try{return aa(e(t))}catch{}}return null}function Sh(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return aa(t);case 8:return t===ds?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function En(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function vd(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Ch(e){var t=vd(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(l){r=""+l,i.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Fo(e){e._valueTracker||(e._valueTracker=Ch(e))}function yd(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=vd(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function vi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function sa(e,t){var n=t.checked;return be({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function yu(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=En(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function wd(e,t){t=t.checked,t!=null&&cs(e,"checked",t,!1)}function ua(e,t){wd(e,t);var n=En(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ca(e,t.type,n):t.hasOwnProperty("defaultValue")&&ca(e,t.type,En(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function wu(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ca(e,t,n){(t!=="number"||vi(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Yr=Array.isArray;function dr(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+En(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function da(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(j(91));return be({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function xu(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(j(92));if(Yr(n)){if(1<n.length)throw Error(j(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:En(n)}}function xd(e,t){var n=En(t.value),r=En(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function ku(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function kd(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function fa(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?kd(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Uo,Sd=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Uo=Uo||document.createElement("div"),Uo.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Uo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function so(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Xr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},bh=["Webkit","ms","Moz","O"];Object.keys(Xr).forEach(function(e){bh.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Xr[t]=Xr[e]})});function Cd(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Xr.hasOwnProperty(e)&&Xr[e]?(""+t).trim():t+"px"}function bd(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=Cd(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var Eh=be({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function pa(e,t){if(t){if(Eh[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(j(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(j(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(j(61))}if(t.style!=null&&typeof t.style!="object")throw Error(j(62))}}function ha(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ma=null;function hs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ga=null,fr=null,pr=null;function Su(e){if(e=zo(e)){if(typeof ga!="function")throw Error(j(280));var t=e.stateNode;t&&(t=Ki(t),ga(e.stateNode,e.type,t))}}function Ed(e){fr?pr?pr.push(e):pr=[e]:fr=e}function Rd(){if(fr){var e=fr,t=pr;if(pr=fr=null,Su(e),t)for(e=0;e<t.length;e++)Su(t[e])}}function jd(e,t){return e(t)}function _d(){}var _l=!1;function Pd(e,t,n){if(_l)return e(t,n);_l=!0;try{return jd(e,t,n)}finally{_l=!1,(fr!==null||pr!==null)&&(_d(),Rd())}}function uo(e,t){var n=e.stateNode;if(n===null)return null;var r=Ki(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(j(231,t,typeof n));return n}var va=!1;if(qt)try{var Or={};Object.defineProperty(Or,"passive",{get:function(){va=!0}}),window.addEventListener("test",Or,Or),window.removeEventListener("test",Or,Or)}catch{va=!1}function Rh(e,t,n,r,o,i,l,a,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(p){this.onError(p)}}var Zr=!1,yi=null,wi=!1,ya=null,jh={onError:function(e){Zr=!0,yi=e}};function _h(e,t,n,r,o,i,l,a,s){Zr=!1,yi=null,Rh.apply(jh,arguments)}function Ph(e,t,n,r,o,i,l,a,s){if(_h.apply(this,arguments),Zr){if(Zr){var u=yi;Zr=!1,yi=null}else throw Error(j(198));wi||(wi=!0,ya=u)}}function Qn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Nd(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Cu(e){if(Qn(e)!==e)throw Error(j(188))}function Nh(e){var t=e.alternate;if(!t){if(t=Qn(e),t===null)throw Error(j(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return Cu(o),e;if(i===r)return Cu(o),t;i=i.sibling}throw Error(j(188))}if(n.return!==r.return)n=o,r=i;else{for(var l=!1,a=o.child;a;){if(a===n){l=!0,n=o,r=i;break}if(a===r){l=!0,r=o,n=i;break}a=a.sibling}if(!l){for(a=i.child;a;){if(a===n){l=!0,n=i,r=o;break}if(a===r){l=!0,r=i,n=o;break}a=a.sibling}if(!l)throw Error(j(189))}}if(n.alternate!==r)throw Error(j(190))}if(n.tag!==3)throw Error(j(188));return n.stateNode.current===n?e:t}function Td(e){return e=Nh(e),e!==null?zd(e):null}function zd(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=zd(e);if(t!==null)return t;e=e.sibling}return null}var Ad=ht.unstable_scheduleCallback,bu=ht.unstable_cancelCallback,Th=ht.unstable_shouldYield,zh=ht.unstable_requestPaint,Pe=ht.unstable_now,Ah=ht.unstable_getCurrentPriorityLevel,ms=ht.unstable_ImmediatePriority,Ld=ht.unstable_UserBlockingPriority,xi=ht.unstable_NormalPriority,Lh=ht.unstable_LowPriority,Md=ht.unstable_IdlePriority,Hi=null,Ut=null;function Mh(e){if(Ut&&typeof Ut.onCommitFiberRoot=="function")try{Ut.onCommitFiberRoot(Hi,e,void 0,(e.current.flags&128)===128)}catch{}}var Tt=Math.clz32?Math.clz32:$h,Dh=Math.log,Oh=Math.LN2;function $h(e){return e>>>=0,e===0?32:31-(Dh(e)/Oh|0)|0}var Bo=64,Vo=4194304;function Gr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ki(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,l=n&268435455;if(l!==0){var a=l&~o;a!==0?r=Gr(a):(i&=l,i!==0&&(r=Gr(i)))}else l=n&~o,l!==0?r=Gr(l):i!==0&&(r=Gr(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Tt(t),o=1<<n,r|=e[n],t&=~o;return r}function Ih(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Fh(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var l=31-Tt(i),a=1<<l,s=o[l];s===-1?(!(a&n)||a&r)&&(o[l]=Ih(a,t)):s<=t&&(e.expiredLanes|=a),i&=~a}}function wa(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Dd(){var e=Bo;return Bo<<=1,!(Bo&4194240)&&(Bo=64),e}function Pl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function No(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Tt(t),e[t]=n}function Uh(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-Tt(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function gs(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Tt(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var se=0;function Od(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var $d,vs,Id,Fd,Ud,xa=!1,Wo=[],mn=null,gn=null,vn=null,co=new Map,fo=new Map,dn=[],Bh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Eu(e,t){switch(e){case"focusin":case"focusout":mn=null;break;case"dragenter":case"dragleave":gn=null;break;case"mouseover":case"mouseout":vn=null;break;case"pointerover":case"pointerout":co.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":fo.delete(t.pointerId)}}function $r(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=zo(t),t!==null&&vs(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function Vh(e,t,n,r,o){switch(t){case"focusin":return mn=$r(mn,e,t,n,r,o),!0;case"dragenter":return gn=$r(gn,e,t,n,r,o),!0;case"mouseover":return vn=$r(vn,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return co.set(i,$r(co.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,fo.set(i,$r(fo.get(i)||null,e,t,n,r,o)),!0}return!1}function Bd(e){var t=Ln(e.target);if(t!==null){var n=Qn(t);if(n!==null){if(t=n.tag,t===13){if(t=Nd(n),t!==null){e.blockedOn=t,Ud(e.priority,function(){Id(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function li(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ka(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ma=r,n.target.dispatchEvent(r),ma=null}else return t=zo(n),t!==null&&vs(t),e.blockedOn=n,!1;t.shift()}return!0}function Ru(e,t,n){li(e)&&n.delete(t)}function Wh(){xa=!1,mn!==null&&li(mn)&&(mn=null),gn!==null&&li(gn)&&(gn=null),vn!==null&&li(vn)&&(vn=null),co.forEach(Ru),fo.forEach(Ru)}function Ir(e,t){e.blockedOn===t&&(e.blockedOn=null,xa||(xa=!0,ht.unstable_scheduleCallback(ht.unstable_NormalPriority,Wh)))}function po(e){function t(o){return Ir(o,e)}if(0<Wo.length){Ir(Wo[0],e);for(var n=1;n<Wo.length;n++){var r=Wo[n];r.blockedOn===e&&(r.blockedOn=null)}}for(mn!==null&&Ir(mn,e),gn!==null&&Ir(gn,e),vn!==null&&Ir(vn,e),co.forEach(t),fo.forEach(t),n=0;n<dn.length;n++)r=dn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<dn.length&&(n=dn[0],n.blockedOn===null);)Bd(n),n.blockedOn===null&&dn.shift()}var hr=on.ReactCurrentBatchConfig,Si=!0;function Hh(e,t,n,r){var o=se,i=hr.transition;hr.transition=null;try{se=1,ys(e,t,n,r)}finally{se=o,hr.transition=i}}function Qh(e,t,n,r){var o=se,i=hr.transition;hr.transition=null;try{se=4,ys(e,t,n,r)}finally{se=o,hr.transition=i}}function ys(e,t,n,r){if(Si){var o=ka(e,t,n,r);if(o===null)Il(e,t,r,Ci,n),Eu(e,r);else if(Vh(o,e,t,n,r))r.stopPropagation();else if(Eu(e,r),t&4&&-1<Bh.indexOf(e)){for(;o!==null;){var i=zo(o);if(i!==null&&$d(i),i=ka(e,t,n,r),i===null&&Il(e,t,r,Ci,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else Il(e,t,r,null,n)}}var Ci=null;function ka(e,t,n,r){if(Ci=null,e=hs(r),e=Ln(e),e!==null)if(t=Qn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Nd(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ci=e,null}function Vd(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ah()){case ms:return 1;case Ld:return 4;case xi:case Lh:return 16;case Md:return 536870912;default:return 16}default:return 16}}var pn=null,ws=null,ai=null;function Wd(){if(ai)return ai;var e,t=ws,n=t.length,r,o="value"in pn?pn.value:pn.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===o[i-r];r++);return ai=o.slice(e,1<r?1-r:void 0)}function si(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ho(){return!0}function ju(){return!1}function gt(e){function t(n,r,o,i,l){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Ho:ju,this.isPropagationStopped=ju,this}return be(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ho)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ho)},persist:function(){},isPersistent:Ho}),t}var Pr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},xs=gt(Pr),To=be({},Pr,{view:0,detail:0}),Yh=gt(To),Nl,Tl,Fr,Qi=be({},To,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ks,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Fr&&(Fr&&e.type==="mousemove"?(Nl=e.screenX-Fr.screenX,Tl=e.screenY-Fr.screenY):Tl=Nl=0,Fr=e),Nl)},movementY:function(e){return"movementY"in e?e.movementY:Tl}}),_u=gt(Qi),Gh=be({},Qi,{dataTransfer:0}),Kh=gt(Gh),Xh=be({},To,{relatedTarget:0}),zl=gt(Xh),Zh=be({},Pr,{animationName:0,elapsedTime:0,pseudoElement:0}),Jh=gt(Zh),qh=be({},Pr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),em=gt(qh),tm=be({},Pr,{data:0}),Pu=gt(tm),nm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},rm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},om={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function im(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=om[e])?!!t[e]:!1}function ks(){return im}var lm=be({},To,{key:function(e){if(e.key){var t=nm[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=si(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?rm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ks,charCode:function(e){return e.type==="keypress"?si(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?si(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),am=gt(lm),sm=be({},Qi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Nu=gt(sm),um=be({},To,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ks}),cm=gt(um),dm=be({},Pr,{propertyName:0,elapsedTime:0,pseudoElement:0}),fm=gt(dm),pm=be({},Qi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),hm=gt(pm),mm=[9,13,27,32],Ss=qt&&"CompositionEvent"in window,Jr=null;qt&&"documentMode"in document&&(Jr=document.documentMode);var gm=qt&&"TextEvent"in window&&!Jr,Hd=qt&&(!Ss||Jr&&8<Jr&&11>=Jr),Tu=String.fromCharCode(32),zu=!1;function Qd(e,t){switch(e){case"keyup":return mm.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Yd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Jn=!1;function vm(e,t){switch(e){case"compositionend":return Yd(t);case"keypress":return t.which!==32?null:(zu=!0,Tu);case"textInput":return e=t.data,e===Tu&&zu?null:e;default:return null}}function ym(e,t){if(Jn)return e==="compositionend"||!Ss&&Qd(e,t)?(e=Wd(),ai=ws=pn=null,Jn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Hd&&t.locale!=="ko"?null:t.data;default:return null}}var wm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Au(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!wm[e.type]:t==="textarea"}function Gd(e,t,n,r){Ed(r),t=bi(t,"onChange"),0<t.length&&(n=new xs("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var qr=null,ho=null;function xm(e){lf(e,0)}function Yi(e){var t=tr(e);if(yd(t))return e}function km(e,t){if(e==="change")return t}var Kd=!1;if(qt){var Al;if(qt){var Ll="oninput"in document;if(!Ll){var Lu=document.createElement("div");Lu.setAttribute("oninput","return;"),Ll=typeof Lu.oninput=="function"}Al=Ll}else Al=!1;Kd=Al&&(!document.documentMode||9<document.documentMode)}function Mu(){qr&&(qr.detachEvent("onpropertychange",Xd),ho=qr=null)}function Xd(e){if(e.propertyName==="value"&&Yi(ho)){var t=[];Gd(t,ho,e,hs(e)),Pd(xm,t)}}function Sm(e,t,n){e==="focusin"?(Mu(),qr=t,ho=n,qr.attachEvent("onpropertychange",Xd)):e==="focusout"&&Mu()}function Cm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Yi(ho)}function bm(e,t){if(e==="click")return Yi(t)}function Em(e,t){if(e==="input"||e==="change")return Yi(t)}function Rm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var At=typeof Object.is=="function"?Object.is:Rm;function mo(e,t){if(At(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!ra.call(t,o)||!At(e[o],t[o]))return!1}return!0}function Du(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ou(e,t){var n=Du(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Du(n)}}function Zd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Zd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Jd(){for(var e=window,t=vi();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=vi(e.document)}return t}function Cs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function jm(e){var t=Jd(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Zd(n.ownerDocument.documentElement,n)){if(r!==null&&Cs(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=Ou(n,i);var l=Ou(n,r);o&&l&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var _m=qt&&"documentMode"in document&&11>=document.documentMode,qn=null,Sa=null,eo=null,Ca=!1;function $u(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ca||qn==null||qn!==vi(r)||(r=qn,"selectionStart"in r&&Cs(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),eo&&mo(eo,r)||(eo=r,r=bi(Sa,"onSelect"),0<r.length&&(t=new xs("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=qn)))}function Qo(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var er={animationend:Qo("Animation","AnimationEnd"),animationiteration:Qo("Animation","AnimationIteration"),animationstart:Qo("Animation","AnimationStart"),transitionend:Qo("Transition","TransitionEnd")},Ml={},qd={};qt&&(qd=document.createElement("div").style,"AnimationEvent"in window||(delete er.animationend.animation,delete er.animationiteration.animation,delete er.animationstart.animation),"TransitionEvent"in window||delete er.transitionend.transition);function Gi(e){if(Ml[e])return Ml[e];if(!er[e])return e;var t=er[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in qd)return Ml[e]=t[n];return e}var ef=Gi("animationend"),tf=Gi("animationiteration"),nf=Gi("animationstart"),rf=Gi("transitionend"),of=new Map,Iu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function jn(e,t){of.set(e,t),Hn(t,[e])}for(var Dl=0;Dl<Iu.length;Dl++){var Ol=Iu[Dl],Pm=Ol.toLowerCase(),Nm=Ol[0].toUpperCase()+Ol.slice(1);jn(Pm,"on"+Nm)}jn(ef,"onAnimationEnd");jn(tf,"onAnimationIteration");jn(nf,"onAnimationStart");jn("dblclick","onDoubleClick");jn("focusin","onFocus");jn("focusout","onBlur");jn(rf,"onTransitionEnd");yr("onMouseEnter",["mouseout","mouseover"]);yr("onMouseLeave",["mouseout","mouseover"]);yr("onPointerEnter",["pointerout","pointerover"]);yr("onPointerLeave",["pointerout","pointerover"]);Hn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Hn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Hn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Hn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Hn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Hn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Kr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Tm=new Set("cancel close invalid load scroll toggle".split(" ").concat(Kr));function Fu(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Ph(r,t,void 0,e),e.currentTarget=null}function lf(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var l=r.length-1;0<=l;l--){var a=r[l],s=a.instance,u=a.currentTarget;if(a=a.listener,s!==i&&o.isPropagationStopped())break e;Fu(o,a,u),i=s}else for(l=0;l<r.length;l++){if(a=r[l],s=a.instance,u=a.currentTarget,a=a.listener,s!==i&&o.isPropagationStopped())break e;Fu(o,a,u),i=s}}}if(wi)throw e=ya,wi=!1,ya=null,e}function he(e,t){var n=t[_a];n===void 0&&(n=t[_a]=new Set);var r=e+"__bubble";n.has(r)||(af(t,e,2,!1),n.add(r))}function $l(e,t,n){var r=0;t&&(r|=4),af(n,e,r,t)}var Yo="_reactListening"+Math.random().toString(36).slice(2);function go(e){if(!e[Yo]){e[Yo]=!0,pd.forEach(function(n){n!=="selectionchange"&&(Tm.has(n)||$l(n,!1,e),$l(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Yo]||(t[Yo]=!0,$l("selectionchange",!1,t))}}function af(e,t,n,r){switch(Vd(t)){case 1:var o=Hh;break;case 4:o=Qh;break;default:o=ys}n=o.bind(null,t,n,e),o=void 0,!va||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Il(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var a=r.stateNode.containerInfo;if(a===o||a.nodeType===8&&a.parentNode===o)break;if(l===4)for(l=r.return;l!==null;){var s=l.tag;if((s===3||s===4)&&(s=l.stateNode.containerInfo,s===o||s.nodeType===8&&s.parentNode===o))return;l=l.return}for(;a!==null;){if(l=Ln(a),l===null)return;if(s=l.tag,s===5||s===6){r=i=l;continue e}a=a.parentNode}}r=r.return}Pd(function(){var u=i,p=hs(n),g=[];e:{var v=of.get(e);if(v!==void 0){var S=xs,x=e;switch(e){case"keypress":if(si(n)===0)break e;case"keydown":case"keyup":S=am;break;case"focusin":x="focus",S=zl;break;case"focusout":x="blur",S=zl;break;case"beforeblur":case"afterblur":S=zl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":S=_u;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":S=Kh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":S=cm;break;case ef:case tf:case nf:S=Jh;break;case rf:S=fm;break;case"scroll":S=Yh;break;case"wheel":S=hm;break;case"copy":case"cut":case"paste":S=em;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":S=Nu}var y=(t&4)!==0,h=!y&&e==="scroll",d=y?v!==null?v+"Capture":null:v;y=[];for(var c=u,f;c!==null;){f=c;var w=f.stateNode;if(f.tag===5&&w!==null&&(f=w,d!==null&&(w=uo(c,d),w!=null&&y.push(vo(c,w,f)))),h)break;c=c.return}0<y.length&&(v=new S(v,x,null,n,p),g.push({event:v,listeners:y}))}}if(!(t&7)){e:{if(v=e==="mouseover"||e==="pointerover",S=e==="mouseout"||e==="pointerout",v&&n!==ma&&(x=n.relatedTarget||n.fromElement)&&(Ln(x)||x[en]))break e;if((S||v)&&(v=p.window===p?p:(v=p.ownerDocument)?v.defaultView||v.parentWindow:window,S?(x=n.relatedTarget||n.toElement,S=u,x=x?Ln(x):null,x!==null&&(h=Qn(x),x!==h||x.tag!==5&&x.tag!==6)&&(x=null)):(S=null,x=u),S!==x)){if(y=_u,w="onMouseLeave",d="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(y=Nu,w="onPointerLeave",d="onPointerEnter",c="pointer"),h=S==null?v:tr(S),f=x==null?v:tr(x),v=new y(w,c+"leave",S,n,p),v.target=h,v.relatedTarget=f,w=null,Ln(p)===u&&(y=new y(d,c+"enter",x,n,p),y.target=f,y.relatedTarget=h,w=y),h=w,S&&x)t:{for(y=S,d=x,c=0,f=y;f;f=Kn(f))c++;for(f=0,w=d;w;w=Kn(w))f++;for(;0<c-f;)y=Kn(y),c--;for(;0<f-c;)d=Kn(d),f--;for(;c--;){if(y===d||d!==null&&y===d.alternate)break t;y=Kn(y),d=Kn(d)}y=null}else y=null;S!==null&&Uu(g,v,S,y,!1),x!==null&&h!==null&&Uu(g,h,x,y,!0)}}e:{if(v=u?tr(u):window,S=v.nodeName&&v.nodeName.toLowerCase(),S==="select"||S==="input"&&v.type==="file")var b=km;else if(Au(v))if(Kd)b=Em;else{b=Cm;var N=Sm}else(S=v.nodeName)&&S.toLowerCase()==="input"&&(v.type==="checkbox"||v.type==="radio")&&(b=bm);if(b&&(b=b(e,u))){Gd(g,b,n,p);break e}N&&N(e,v,u),e==="focusout"&&(N=v._wrapperState)&&N.controlled&&v.type==="number"&&ca(v,"number",v.value)}switch(N=u?tr(u):window,e){case"focusin":(Au(N)||N.contentEditable==="true")&&(qn=N,Sa=u,eo=null);break;case"focusout":eo=Sa=qn=null;break;case"mousedown":Ca=!0;break;case"contextmenu":case"mouseup":case"dragend":Ca=!1,$u(g,n,p);break;case"selectionchange":if(_m)break;case"keydown":case"keyup":$u(g,n,p)}var T;if(Ss)e:{switch(e){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else Jn?Qd(e,n)&&(_="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(Hd&&n.locale!=="ko"&&(Jn||_!=="onCompositionStart"?_==="onCompositionEnd"&&Jn&&(T=Wd()):(pn=p,ws="value"in pn?pn.value:pn.textContent,Jn=!0)),N=bi(u,_),0<N.length&&(_=new Pu(_,e,null,n,p),g.push({event:_,listeners:N}),T?_.data=T:(T=Yd(n),T!==null&&(_.data=T)))),(T=gm?vm(e,n):ym(e,n))&&(u=bi(u,"onBeforeInput"),0<u.length&&(p=new Pu("onBeforeInput","beforeinput",null,n,p),g.push({event:p,listeners:u}),p.data=T))}lf(g,t)})}function vo(e,t,n){return{instance:e,listener:t,currentTarget:n}}function bi(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=uo(e,n),i!=null&&r.unshift(vo(e,i,o)),i=uo(e,t),i!=null&&r.push(vo(e,i,o))),e=e.return}return r}function Kn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Uu(e,t,n,r,o){for(var i=t._reactName,l=[];n!==null&&n!==r;){var a=n,s=a.alternate,u=a.stateNode;if(s!==null&&s===r)break;a.tag===5&&u!==null&&(a=u,o?(s=uo(n,i),s!=null&&l.unshift(vo(n,s,a))):o||(s=uo(n,i),s!=null&&l.push(vo(n,s,a)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var zm=/\r\n?/g,Am=/\u0000|\uFFFD/g;function Bu(e){return(typeof e=="string"?e:""+e).replace(zm,`
`).replace(Am,"")}function Go(e,t,n){if(t=Bu(t),Bu(e)!==t&&n)throw Error(j(425))}function Ei(){}var ba=null,Ea=null;function Ra(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ja=typeof setTimeout=="function"?setTimeout:void 0,Lm=typeof clearTimeout=="function"?clearTimeout:void 0,Vu=typeof Promise=="function"?Promise:void 0,Mm=typeof queueMicrotask=="function"?queueMicrotask:typeof Vu<"u"?function(e){return Vu.resolve(null).then(e).catch(Dm)}:ja;function Dm(e){setTimeout(function(){throw e})}function Fl(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),po(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);po(t)}function yn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Wu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Nr=Math.random().toString(36).slice(2),Ft="__reactFiber$"+Nr,yo="__reactProps$"+Nr,en="__reactContainer$"+Nr,_a="__reactEvents$"+Nr,Om="__reactListeners$"+Nr,$m="__reactHandles$"+Nr;function Ln(e){var t=e[Ft];if(t)return t;for(var n=e.parentNode;n;){if(t=n[en]||n[Ft]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Wu(e);e!==null;){if(n=e[Ft])return n;e=Wu(e)}return t}e=n,n=e.parentNode}return null}function zo(e){return e=e[Ft]||e[en],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function tr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(j(33))}function Ki(e){return e[yo]||null}var Pa=[],nr=-1;function _n(e){return{current:e}}function me(e){0>nr||(e.current=Pa[nr],Pa[nr]=null,nr--)}function fe(e,t){nr++,Pa[nr]=e.current,e.current=t}var Rn={},Ze=_n(Rn),lt=_n(!1),Fn=Rn;function wr(e,t){var n=e.type.contextTypes;if(!n)return Rn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function at(e){return e=e.childContextTypes,e!=null}function Ri(){me(lt),me(Ze)}function Hu(e,t,n){if(Ze.current!==Rn)throw Error(j(168));fe(Ze,t),fe(lt,n)}function sf(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(j(108,Sh(e)||"Unknown",o));return be({},n,r)}function ji(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Rn,Fn=Ze.current,fe(Ze,e),fe(lt,lt.current),!0}function Qu(e,t,n){var r=e.stateNode;if(!r)throw Error(j(169));n?(e=sf(e,t,Fn),r.__reactInternalMemoizedMergedChildContext=e,me(lt),me(Ze),fe(Ze,e)):me(lt),fe(lt,n)}var Yt=null,Xi=!1,Ul=!1;function uf(e){Yt===null?Yt=[e]:Yt.push(e)}function Im(e){Xi=!0,uf(e)}function Pn(){if(!Ul&&Yt!==null){Ul=!0;var e=0,t=se;try{var n=Yt;for(se=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Yt=null,Xi=!1}catch(o){throw Yt!==null&&(Yt=Yt.slice(e+1)),Ad(ms,Pn),o}finally{se=t,Ul=!1}}return null}var rr=[],or=0,_i=null,Pi=0,yt=[],wt=0,Un=null,Gt=1,Kt="";function zn(e,t){rr[or++]=Pi,rr[or++]=_i,_i=e,Pi=t}function cf(e,t,n){yt[wt++]=Gt,yt[wt++]=Kt,yt[wt++]=Un,Un=e;var r=Gt;e=Kt;var o=32-Tt(r)-1;r&=~(1<<o),n+=1;var i=32-Tt(t)+o;if(30<i){var l=o-o%5;i=(r&(1<<l)-1).toString(32),r>>=l,o-=l,Gt=1<<32-Tt(t)+o|n<<o|r,Kt=i+e}else Gt=1<<i|n<<o|r,Kt=e}function bs(e){e.return!==null&&(zn(e,1),cf(e,1,0))}function Es(e){for(;e===_i;)_i=rr[--or],rr[or]=null,Pi=rr[--or],rr[or]=null;for(;e===Un;)Un=yt[--wt],yt[wt]=null,Kt=yt[--wt],yt[wt]=null,Gt=yt[--wt],yt[wt]=null}var pt=null,dt=null,xe=!1,Nt=null;function df(e,t){var n=xt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Yu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,pt=e,dt=yn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,pt=e,dt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Un!==null?{id:Gt,overflow:Kt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=xt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,pt=e,dt=null,!0):!1;default:return!1}}function Na(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ta(e){if(xe){var t=dt;if(t){var n=t;if(!Yu(e,t)){if(Na(e))throw Error(j(418));t=yn(n.nextSibling);var r=pt;t&&Yu(e,t)?df(r,n):(e.flags=e.flags&-4097|2,xe=!1,pt=e)}}else{if(Na(e))throw Error(j(418));e.flags=e.flags&-4097|2,xe=!1,pt=e}}}function Gu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;pt=e}function Ko(e){if(e!==pt)return!1;if(!xe)return Gu(e),xe=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ra(e.type,e.memoizedProps)),t&&(t=dt)){if(Na(e))throw ff(),Error(j(418));for(;t;)df(e,t),t=yn(t.nextSibling)}if(Gu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(j(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){dt=yn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}dt=null}}else dt=pt?yn(e.stateNode.nextSibling):null;return!0}function ff(){for(var e=dt;e;)e=yn(e.nextSibling)}function xr(){dt=pt=null,xe=!1}function Rs(e){Nt===null?Nt=[e]:Nt.push(e)}var Fm=on.ReactCurrentBatchConfig;function _t(e,t){if(e&&e.defaultProps){t=be({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Ni=_n(null),Ti=null,ir=null,js=null;function _s(){js=ir=Ti=null}function Ps(e){var t=Ni.current;me(Ni),e._currentValue=t}function za(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function mr(e,t){Ti=e,js=ir=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(it=!0),e.firstContext=null)}function St(e){var t=e._currentValue;if(js!==e)if(e={context:e,memoizedValue:t,next:null},ir===null){if(Ti===null)throw Error(j(308));ir=e,Ti.dependencies={lanes:0,firstContext:e}}else ir=ir.next=e;return t}var Mn=null;function Ns(e){Mn===null?Mn=[e]:Mn.push(e)}function pf(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Ns(t)):(n.next=o.next,o.next=n),t.interleaved=n,tn(e,r)}function tn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var cn=!1;function Ts(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function hf(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Zt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function wn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,ie&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,tn(e,n)}return o=r.interleaved,o===null?(t.next=t,Ns(r)):(t.next=o.next,o.next=t),r.interleaved=t,tn(e,n)}function ui(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,gs(e,n)}}function Ku(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=l:i=i.next=l,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function zi(e,t,n,r){var o=e.updateQueue;cn=!1;var i=o.firstBaseUpdate,l=o.lastBaseUpdate,a=o.shared.pending;if(a!==null){o.shared.pending=null;var s=a,u=s.next;s.next=null,l===null?i=u:l.next=u,l=s;var p=e.alternate;p!==null&&(p=p.updateQueue,a=p.lastBaseUpdate,a!==l&&(a===null?p.firstBaseUpdate=u:a.next=u,p.lastBaseUpdate=s))}if(i!==null){var g=o.baseState;l=0,p=u=s=null,a=i;do{var v=a.lane,S=a.eventTime;if((r&v)===v){p!==null&&(p=p.next={eventTime:S,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var x=e,y=a;switch(v=t,S=n,y.tag){case 1:if(x=y.payload,typeof x=="function"){g=x.call(S,g,v);break e}g=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=y.payload,v=typeof x=="function"?x.call(S,g,v):x,v==null)break e;g=be({},g,v);break e;case 2:cn=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,v=o.effects,v===null?o.effects=[a]:v.push(a))}else S={eventTime:S,lane:v,tag:a.tag,payload:a.payload,callback:a.callback,next:null},p===null?(u=p=S,s=g):p=p.next=S,l|=v;if(a=a.next,a===null){if(a=o.shared.pending,a===null)break;v=a,a=v.next,v.next=null,o.lastBaseUpdate=v,o.shared.pending=null}}while(1);if(p===null&&(s=g),o.baseState=s,o.firstBaseUpdate=u,o.lastBaseUpdate=p,t=o.shared.interleaved,t!==null){o=t;do l|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);Vn|=l,e.lanes=l,e.memoizedState=g}}function Xu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(j(191,o));o.call(r)}}}var mf=new fd.Component().refs;function Aa(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:be({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Zi={isMounted:function(e){return(e=e._reactInternals)?Qn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=et(),o=kn(e),i=Zt(r,o);i.payload=t,n!=null&&(i.callback=n),t=wn(e,i,o),t!==null&&(zt(t,e,o,r),ui(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=et(),o=kn(e),i=Zt(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=wn(e,i,o),t!==null&&(zt(t,e,o,r),ui(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=et(),r=kn(e),o=Zt(n,r);o.tag=2,t!=null&&(o.callback=t),t=wn(e,o,r),t!==null&&(zt(t,e,r,n),ui(t,e,r))}};function Zu(e,t,n,r,o,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,l):t.prototype&&t.prototype.isPureReactComponent?!mo(n,r)||!mo(o,i):!0}function gf(e,t,n){var r=!1,o=Rn,i=t.contextType;return typeof i=="object"&&i!==null?i=St(i):(o=at(t)?Fn:Ze.current,r=t.contextTypes,i=(r=r!=null)?wr(e,o):Rn),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Zi,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function Ju(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Zi.enqueueReplaceState(t,t.state,null)}function La(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs=mf,Ts(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=St(i):(i=at(t)?Fn:Ze.current,o.context=wr(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Aa(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Zi.enqueueReplaceState(o,o.state,null),zi(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Ur(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(j(309));var r=n.stateNode}if(!r)throw Error(j(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(l){var a=o.refs;a===mf&&(a=o.refs={}),l===null?delete a[i]:a[i]=l},t._stringRef=i,t)}if(typeof e!="string")throw Error(j(284));if(!n._owner)throw Error(j(290,e))}return e}function Xo(e,t){throw e=Object.prototype.toString.call(t),Error(j(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function qu(e){var t=e._init;return t(e._payload)}function vf(e){function t(d,c){if(e){var f=d.deletions;f===null?(d.deletions=[c],d.flags|=16):f.push(c)}}function n(d,c){if(!e)return null;for(;c!==null;)t(d,c),c=c.sibling;return null}function r(d,c){for(d=new Map;c!==null;)c.key!==null?d.set(c.key,c):d.set(c.index,c),c=c.sibling;return d}function o(d,c){return d=Sn(d,c),d.index=0,d.sibling=null,d}function i(d,c,f){return d.index=f,e?(f=d.alternate,f!==null?(f=f.index,f<c?(d.flags|=2,c):f):(d.flags|=2,c)):(d.flags|=1048576,c)}function l(d){return e&&d.alternate===null&&(d.flags|=2),d}function a(d,c,f,w){return c===null||c.tag!==6?(c=Gl(f,d.mode,w),c.return=d,c):(c=o(c,f),c.return=d,c)}function s(d,c,f,w){var b=f.type;return b===Zn?p(d,c,f.props.children,w,f.key):c!==null&&(c.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===un&&qu(b)===c.type)?(w=o(c,f.props),w.ref=Ur(d,c,f),w.return=d,w):(w=mi(f.type,f.key,f.props,null,d.mode,w),w.ref=Ur(d,c,f),w.return=d,w)}function u(d,c,f,w){return c===null||c.tag!==4||c.stateNode.containerInfo!==f.containerInfo||c.stateNode.implementation!==f.implementation?(c=Kl(f,d.mode,w),c.return=d,c):(c=o(c,f.children||[]),c.return=d,c)}function p(d,c,f,w,b){return c===null||c.tag!==7?(c=In(f,d.mode,w,b),c.return=d,c):(c=o(c,f),c.return=d,c)}function g(d,c,f){if(typeof c=="string"&&c!==""||typeof c=="number")return c=Gl(""+c,d.mode,f),c.return=d,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case Io:return f=mi(c.type,c.key,c.props,null,d.mode,f),f.ref=Ur(d,null,c),f.return=d,f;case Xn:return c=Kl(c,d.mode,f),c.return=d,c;case un:var w=c._init;return g(d,w(c._payload),f)}if(Yr(c)||Dr(c))return c=In(c,d.mode,f,null),c.return=d,c;Xo(d,c)}return null}function v(d,c,f,w){var b=c!==null?c.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return b!==null?null:a(d,c,""+f,w);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Io:return f.key===b?s(d,c,f,w):null;case Xn:return f.key===b?u(d,c,f,w):null;case un:return b=f._init,v(d,c,b(f._payload),w)}if(Yr(f)||Dr(f))return b!==null?null:p(d,c,f,w,null);Xo(d,f)}return null}function S(d,c,f,w,b){if(typeof w=="string"&&w!==""||typeof w=="number")return d=d.get(f)||null,a(c,d,""+w,b);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Io:return d=d.get(w.key===null?f:w.key)||null,s(c,d,w,b);case Xn:return d=d.get(w.key===null?f:w.key)||null,u(c,d,w,b);case un:var N=w._init;return S(d,c,f,N(w._payload),b)}if(Yr(w)||Dr(w))return d=d.get(f)||null,p(c,d,w,b,null);Xo(c,w)}return null}function x(d,c,f,w){for(var b=null,N=null,T=c,_=c=0,Z=null;T!==null&&_<f.length;_++){T.index>_?(Z=T,T=null):Z=T.sibling;var U=v(d,T,f[_],w);if(U===null){T===null&&(T=Z);break}e&&T&&U.alternate===null&&t(d,T),c=i(U,c,_),N===null?b=U:N.sibling=U,N=U,T=Z}if(_===f.length)return n(d,T),xe&&zn(d,_),b;if(T===null){for(;_<f.length;_++)T=g(d,f[_],w),T!==null&&(c=i(T,c,_),N===null?b=T:N.sibling=T,N=T);return xe&&zn(d,_),b}for(T=r(d,T);_<f.length;_++)Z=S(T,d,_,f[_],w),Z!==null&&(e&&Z.alternate!==null&&T.delete(Z.key===null?_:Z.key),c=i(Z,c,_),N===null?b=Z:N.sibling=Z,N=Z);return e&&T.forEach(function(ge){return t(d,ge)}),xe&&zn(d,_),b}function y(d,c,f,w){var b=Dr(f);if(typeof b!="function")throw Error(j(150));if(f=b.call(f),f==null)throw Error(j(151));for(var N=b=null,T=c,_=c=0,Z=null,U=f.next();T!==null&&!U.done;_++,U=f.next()){T.index>_?(Z=T,T=null):Z=T.sibling;var ge=v(d,T,U.value,w);if(ge===null){T===null&&(T=Z);break}e&&T&&ge.alternate===null&&t(d,T),c=i(ge,c,_),N===null?b=ge:N.sibling=ge,N=ge,T=Z}if(U.done)return n(d,T),xe&&zn(d,_),b;if(T===null){for(;!U.done;_++,U=f.next())U=g(d,U.value,w),U!==null&&(c=i(U,c,_),N===null?b=U:N.sibling=U,N=U);return xe&&zn(d,_),b}for(T=r(d,T);!U.done;_++,U=f.next())U=S(T,d,_,U.value,w),U!==null&&(e&&U.alternate!==null&&T.delete(U.key===null?_:U.key),c=i(U,c,_),N===null?b=U:N.sibling=U,N=U);return e&&T.forEach(function(ve){return t(d,ve)}),xe&&zn(d,_),b}function h(d,c,f,w){if(typeof f=="object"&&f!==null&&f.type===Zn&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case Io:e:{for(var b=f.key,N=c;N!==null;){if(N.key===b){if(b=f.type,b===Zn){if(N.tag===7){n(d,N.sibling),c=o(N,f.props.children),c.return=d,d=c;break e}}else if(N.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===un&&qu(b)===N.type){n(d,N.sibling),c=o(N,f.props),c.ref=Ur(d,N,f),c.return=d,d=c;break e}n(d,N);break}else t(d,N);N=N.sibling}f.type===Zn?(c=In(f.props.children,d.mode,w,f.key),c.return=d,d=c):(w=mi(f.type,f.key,f.props,null,d.mode,w),w.ref=Ur(d,c,f),w.return=d,d=w)}return l(d);case Xn:e:{for(N=f.key;c!==null;){if(c.key===N)if(c.tag===4&&c.stateNode.containerInfo===f.containerInfo&&c.stateNode.implementation===f.implementation){n(d,c.sibling),c=o(c,f.children||[]),c.return=d,d=c;break e}else{n(d,c);break}else t(d,c);c=c.sibling}c=Kl(f,d.mode,w),c.return=d,d=c}return l(d);case un:return N=f._init,h(d,c,N(f._payload),w)}if(Yr(f))return x(d,c,f,w);if(Dr(f))return y(d,c,f,w);Xo(d,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,c!==null&&c.tag===6?(n(d,c.sibling),c=o(c,f),c.return=d,d=c):(n(d,c),c=Gl(f,d.mode,w),c.return=d,d=c),l(d)):n(d,c)}return h}var kr=vf(!0),yf=vf(!1),Ao={},Bt=_n(Ao),wo=_n(Ao),xo=_n(Ao);function Dn(e){if(e===Ao)throw Error(j(174));return e}function zs(e,t){switch(fe(xo,t),fe(wo,e),fe(Bt,Ao),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:fa(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=fa(t,e)}me(Bt),fe(Bt,t)}function Sr(){me(Bt),me(wo),me(xo)}function wf(e){Dn(xo.current);var t=Dn(Bt.current),n=fa(t,e.type);t!==n&&(fe(wo,e),fe(Bt,n))}function As(e){wo.current===e&&(me(Bt),me(wo))}var Se=_n(0);function Ai(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Bl=[];function Ls(){for(var e=0;e<Bl.length;e++)Bl[e]._workInProgressVersionPrimary=null;Bl.length=0}var ci=on.ReactCurrentDispatcher,Vl=on.ReactCurrentBatchConfig,Bn=0,Ce=null,Me=null,Ie=null,Li=!1,to=!1,ko=0,Um=0;function Ge(){throw Error(j(321))}function Ms(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!At(e[n],t[n]))return!1;return!0}function Ds(e,t,n,r,o,i){if(Bn=i,Ce=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ci.current=e===null||e.memoizedState===null?Hm:Qm,e=n(r,o),to){i=0;do{if(to=!1,ko=0,25<=i)throw Error(j(301));i+=1,Ie=Me=null,t.updateQueue=null,ci.current=Ym,e=n(r,o)}while(to)}if(ci.current=Mi,t=Me!==null&&Me.next!==null,Bn=0,Ie=Me=Ce=null,Li=!1,t)throw Error(j(300));return e}function Os(){var e=ko!==0;return ko=0,e}function $t(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ie===null?Ce.memoizedState=Ie=e:Ie=Ie.next=e,Ie}function Ct(){if(Me===null){var e=Ce.alternate;e=e!==null?e.memoizedState:null}else e=Me.next;var t=Ie===null?Ce.memoizedState:Ie.next;if(t!==null)Ie=t,Me=e;else{if(e===null)throw Error(j(310));Me=e,e={memoizedState:Me.memoizedState,baseState:Me.baseState,baseQueue:Me.baseQueue,queue:Me.queue,next:null},Ie===null?Ce.memoizedState=Ie=e:Ie=Ie.next=e}return Ie}function So(e,t){return typeof t=="function"?t(e):t}function Wl(e){var t=Ct(),n=t.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=e;var r=Me,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var l=o.next;o.next=i.next,i.next=l}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var a=l=null,s=null,u=i;do{var p=u.lane;if((Bn&p)===p)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var g={lane:p,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(a=s=g,l=r):s=s.next=g,Ce.lanes|=p,Vn|=p}u=u.next}while(u!==null&&u!==i);s===null?l=r:s.next=a,At(r,t.memoizedState)||(it=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,Ce.lanes|=i,Vn|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Hl(e){var t=Ct(),n=t.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var l=o=o.next;do i=e(i,l.action),l=l.next;while(l!==o);At(i,t.memoizedState)||(it=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function xf(){}function kf(e,t){var n=Ce,r=Ct(),o=t(),i=!At(r.memoizedState,o);if(i&&(r.memoizedState=o,it=!0),r=r.queue,$s(bf.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||Ie!==null&&Ie.memoizedState.tag&1){if(n.flags|=2048,Co(9,Cf.bind(null,n,r,o,t),void 0,null),Fe===null)throw Error(j(349));Bn&30||Sf(n,t,o)}return o}function Sf(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Ce.updateQueue,t===null?(t={lastEffect:null,stores:null},Ce.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Cf(e,t,n,r){t.value=n,t.getSnapshot=r,Ef(t)&&Rf(e)}function bf(e,t,n){return n(function(){Ef(t)&&Rf(e)})}function Ef(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!At(e,n)}catch{return!0}}function Rf(e){var t=tn(e,1);t!==null&&zt(t,e,1,-1)}function ec(e){var t=$t();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:So,lastRenderedState:e},t.queue=e,e=e.dispatch=Wm.bind(null,Ce,e),[t.memoizedState,e]}function Co(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Ce.updateQueue,t===null?(t={lastEffect:null,stores:null},Ce.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function jf(){return Ct().memoizedState}function di(e,t,n,r){var o=$t();Ce.flags|=e,o.memoizedState=Co(1|t,n,void 0,r===void 0?null:r)}function Ji(e,t,n,r){var o=Ct();r=r===void 0?null:r;var i=void 0;if(Me!==null){var l=Me.memoizedState;if(i=l.destroy,r!==null&&Ms(r,l.deps)){o.memoizedState=Co(t,n,i,r);return}}Ce.flags|=e,o.memoizedState=Co(1|t,n,i,r)}function tc(e,t){return di(8390656,8,e,t)}function $s(e,t){return Ji(2048,8,e,t)}function _f(e,t){return Ji(4,2,e,t)}function Pf(e,t){return Ji(4,4,e,t)}function Nf(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Tf(e,t,n){return n=n!=null?n.concat([e]):null,Ji(4,4,Nf.bind(null,t,e),n)}function Is(){}function zf(e,t){var n=Ct();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ms(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Af(e,t){var n=Ct();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ms(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Lf(e,t,n){return Bn&21?(At(n,t)||(n=Dd(),Ce.lanes|=n,Vn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,it=!0),e.memoizedState=n)}function Bm(e,t){var n=se;se=n!==0&&4>n?n:4,e(!0);var r=Vl.transition;Vl.transition={};try{e(!1),t()}finally{se=n,Vl.transition=r}}function Mf(){return Ct().memoizedState}function Vm(e,t,n){var r=kn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Df(e))Of(t,n);else if(n=pf(e,t,n,r),n!==null){var o=et();zt(n,e,r,o),$f(n,t,r)}}function Wm(e,t,n){var r=kn(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Df(e))Of(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var l=t.lastRenderedState,a=i(l,n);if(o.hasEagerState=!0,o.eagerState=a,At(a,l)){var s=t.interleaved;s===null?(o.next=o,Ns(t)):(o.next=s.next,s.next=o),t.interleaved=o;return}}catch{}finally{}n=pf(e,t,o,r),n!==null&&(o=et(),zt(n,e,r,o),$f(n,t,r))}}function Df(e){var t=e.alternate;return e===Ce||t!==null&&t===Ce}function Of(e,t){to=Li=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function $f(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,gs(e,n)}}var Mi={readContext:St,useCallback:Ge,useContext:Ge,useEffect:Ge,useImperativeHandle:Ge,useInsertionEffect:Ge,useLayoutEffect:Ge,useMemo:Ge,useReducer:Ge,useRef:Ge,useState:Ge,useDebugValue:Ge,useDeferredValue:Ge,useTransition:Ge,useMutableSource:Ge,useSyncExternalStore:Ge,useId:Ge,unstable_isNewReconciler:!1},Hm={readContext:St,useCallback:function(e,t){return $t().memoizedState=[e,t===void 0?null:t],e},useContext:St,useEffect:tc,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,di(4194308,4,Nf.bind(null,t,e),n)},useLayoutEffect:function(e,t){return di(4194308,4,e,t)},useInsertionEffect:function(e,t){return di(4,2,e,t)},useMemo:function(e,t){var n=$t();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=$t();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Vm.bind(null,Ce,e),[r.memoizedState,e]},useRef:function(e){var t=$t();return e={current:e},t.memoizedState=e},useState:ec,useDebugValue:Is,useDeferredValue:function(e){return $t().memoizedState=e},useTransition:function(){var e=ec(!1),t=e[0];return e=Bm.bind(null,e[1]),$t().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Ce,o=$t();if(xe){if(n===void 0)throw Error(j(407));n=n()}else{if(n=t(),Fe===null)throw Error(j(349));Bn&30||Sf(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,tc(bf.bind(null,r,i,e),[e]),r.flags|=2048,Co(9,Cf.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=$t(),t=Fe.identifierPrefix;if(xe){var n=Kt,r=Gt;n=(r&~(1<<32-Tt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=ko++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Um++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Qm={readContext:St,useCallback:zf,useContext:St,useEffect:$s,useImperativeHandle:Tf,useInsertionEffect:_f,useLayoutEffect:Pf,useMemo:Af,useReducer:Wl,useRef:jf,useState:function(){return Wl(So)},useDebugValue:Is,useDeferredValue:function(e){var t=Ct();return Lf(t,Me.memoizedState,e)},useTransition:function(){var e=Wl(So)[0],t=Ct().memoizedState;return[e,t]},useMutableSource:xf,useSyncExternalStore:kf,useId:Mf,unstable_isNewReconciler:!1},Ym={readContext:St,useCallback:zf,useContext:St,useEffect:$s,useImperativeHandle:Tf,useInsertionEffect:_f,useLayoutEffect:Pf,useMemo:Af,useReducer:Hl,useRef:jf,useState:function(){return Hl(So)},useDebugValue:Is,useDeferredValue:function(e){var t=Ct();return Me===null?t.memoizedState=e:Lf(t,Me.memoizedState,e)},useTransition:function(){var e=Hl(So)[0],t=Ct().memoizedState;return[e,t]},useMutableSource:xf,useSyncExternalStore:kf,useId:Mf,unstable_isNewReconciler:!1};function Cr(e,t){try{var n="",r=t;do n+=kh(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function Ql(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ma(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Gm=typeof WeakMap=="function"?WeakMap:Map;function If(e,t,n){n=Zt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Oi||(Oi=!0,Ha=r),Ma(e,t)},n}function Ff(e,t,n){n=Zt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Ma(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Ma(e,t),typeof r!="function"&&(xn===null?xn=new Set([this]):xn.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function nc(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Gm;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=sg.bind(null,e,t,n),t.then(e,e))}function rc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function oc(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Zt(-1,1),t.tag=2,wn(n,t,1))),n.lanes|=1),e)}var Km=on.ReactCurrentOwner,it=!1;function Je(e,t,n,r){t.child=e===null?yf(t,null,n,r):kr(t,e.child,n,r)}function ic(e,t,n,r,o){n=n.render;var i=t.ref;return mr(t,o),r=Ds(e,t,n,r,i,o),n=Os(),e!==null&&!it?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,nn(e,t,o)):(xe&&n&&bs(t),t.flags|=1,Je(e,t,r,o),t.child)}function lc(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!Ys(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Uf(e,t,i,r,o)):(e=mi(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var l=i.memoizedProps;if(n=n.compare,n=n!==null?n:mo,n(l,r)&&e.ref===t.ref)return nn(e,t,o)}return t.flags|=1,e=Sn(i,r),e.ref=t.ref,e.return=t,t.child=e}function Uf(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(mo(i,r)&&e.ref===t.ref)if(it=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(it=!0);else return t.lanes=e.lanes,nn(e,t,o)}return Da(e,t,n,r,o)}function Bf(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},fe(ar,ct),ct|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,fe(ar,ct),ct|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,fe(ar,ct),ct|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,fe(ar,ct),ct|=r;return Je(e,t,o,n),t.child}function Vf(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Da(e,t,n,r,o){var i=at(n)?Fn:Ze.current;return i=wr(t,i),mr(t,o),n=Ds(e,t,n,r,i,o),r=Os(),e!==null&&!it?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,nn(e,t,o)):(xe&&r&&bs(t),t.flags|=1,Je(e,t,n,o),t.child)}function ac(e,t,n,r,o){if(at(n)){var i=!0;ji(t)}else i=!1;if(mr(t,o),t.stateNode===null)fi(e,t),gf(t,n,r),La(t,n,r,o),r=!0;else if(e===null){var l=t.stateNode,a=t.memoizedProps;l.props=a;var s=l.context,u=n.contextType;typeof u=="object"&&u!==null?u=St(u):(u=at(n)?Fn:Ze.current,u=wr(t,u));var p=n.getDerivedStateFromProps,g=typeof p=="function"||typeof l.getSnapshotBeforeUpdate=="function";g||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==r||s!==u)&&Ju(t,l,r,u),cn=!1;var v=t.memoizedState;l.state=v,zi(t,r,l,o),s=t.memoizedState,a!==r||v!==s||lt.current||cn?(typeof p=="function"&&(Aa(t,n,p,r),s=t.memoizedState),(a=cn||Zu(t,n,a,r,v,s,u))?(g||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),l.props=r,l.state=s,l.context=u,r=a):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,hf(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:_t(t.type,a),l.props=u,g=t.pendingProps,v=l.context,s=n.contextType,typeof s=="object"&&s!==null?s=St(s):(s=at(n)?Fn:Ze.current,s=wr(t,s));var S=n.getDerivedStateFromProps;(p=typeof S=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==g||v!==s)&&Ju(t,l,r,s),cn=!1,v=t.memoizedState,l.state=v,zi(t,r,l,o);var x=t.memoizedState;a!==g||v!==x||lt.current||cn?(typeof S=="function"&&(Aa(t,n,S,r),x=t.memoizedState),(u=cn||Zu(t,n,u,r,v,x,s)||!1)?(p||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,x,s),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,x,s)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&v===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&v===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=x),l.props=r,l.state=x,l.context=s,r=u):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&v===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&v===e.memoizedState||(t.flags|=1024),r=!1)}return Oa(e,t,n,r,i,o)}function Oa(e,t,n,r,o,i){Vf(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return o&&Qu(t,n,!1),nn(e,t,i);r=t.stateNode,Km.current=t;var a=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=kr(t,e.child,null,i),t.child=kr(t,null,a,i)):Je(e,t,a,i),t.memoizedState=r.state,o&&Qu(t,n,!0),t.child}function Wf(e){var t=e.stateNode;t.pendingContext?Hu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Hu(e,t.context,!1),zs(e,t.containerInfo)}function sc(e,t,n,r,o){return xr(),Rs(o),t.flags|=256,Je(e,t,n,r),t.child}var $a={dehydrated:null,treeContext:null,retryLane:0};function Ia(e){return{baseLanes:e,cachePool:null,transitions:null}}function Hf(e,t,n){var r=t.pendingProps,o=Se.current,i=!1,l=(t.flags&128)!==0,a;if((a=l)||(a=e!==null&&e.memoizedState===null?!1:(o&2)!==0),a?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),fe(Se,o&1),e===null)return Ta(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,i?(r=t.mode,i=t.child,l={mode:"hidden",children:l},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=l):i=tl(l,r,0,null),e=In(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Ia(n),t.memoizedState=$a,e):Fs(t,l));if(o=e.memoizedState,o!==null&&(a=o.dehydrated,a!==null))return Xm(e,t,l,r,a,o,n);if(i){i=r.fallback,l=t.mode,o=e.child,a=o.sibling;var s={mode:"hidden",children:r.children};return!(l&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=Sn(o,s),r.subtreeFlags=o.subtreeFlags&14680064),a!==null?i=Sn(a,i):(i=In(i,l,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,l=e.child.memoizedState,l=l===null?Ia(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=e.childLanes&~n,t.memoizedState=$a,r}return i=e.child,e=i.sibling,r=Sn(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Fs(e,t){return t=tl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Zo(e,t,n,r){return r!==null&&Rs(r),kr(t,e.child,null,n),e=Fs(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Xm(e,t,n,r,o,i,l){if(n)return t.flags&256?(t.flags&=-257,r=Ql(Error(j(422))),Zo(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=tl({mode:"visible",children:r.children},o,0,null),i=In(i,o,l,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&kr(t,e.child,null,l),t.child.memoizedState=Ia(l),t.memoizedState=$a,i);if(!(t.mode&1))return Zo(e,t,l,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var a=r.dgst;return r=a,i=Error(j(419)),r=Ql(i,r,void 0),Zo(e,t,l,r)}if(a=(l&e.childLanes)!==0,it||a){if(r=Fe,r!==null){switch(l&-l){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|l)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,tn(e,o),zt(r,e,o,-1))}return Qs(),r=Ql(Error(j(421))),Zo(e,t,l,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=ug.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,dt=yn(o.nextSibling),pt=t,xe=!0,Nt=null,e!==null&&(yt[wt++]=Gt,yt[wt++]=Kt,yt[wt++]=Un,Gt=e.id,Kt=e.overflow,Un=t),t=Fs(t,r.children),t.flags|=4096,t)}function uc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),za(e.return,t,n)}function Yl(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function Qf(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(Je(e,t,r.children,n),r=Se.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&uc(e,n,t);else if(e.tag===19)uc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(fe(Se,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&Ai(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Yl(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Ai(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Yl(t,!0,n,null,i);break;case"together":Yl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function fi(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function nn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Vn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(j(153));if(t.child!==null){for(e=t.child,n=Sn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Sn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Zm(e,t,n){switch(t.tag){case 3:Wf(t),xr();break;case 5:wf(t);break;case 1:at(t.type)&&ji(t);break;case 4:zs(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;fe(Ni,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(fe(Se,Se.current&1),t.flags|=128,null):n&t.child.childLanes?Hf(e,t,n):(fe(Se,Se.current&1),e=nn(e,t,n),e!==null?e.sibling:null);fe(Se,Se.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Qf(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),fe(Se,Se.current),r)break;return null;case 22:case 23:return t.lanes=0,Bf(e,t,n)}return nn(e,t,n)}var Yf,Fa,Gf,Kf;Yf=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Fa=function(){};Gf=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,Dn(Bt.current);var i=null;switch(n){case"input":o=sa(e,o),r=sa(e,r),i=[];break;case"select":o=be({},o,{value:void 0}),r=be({},r,{value:void 0}),i=[];break;case"textarea":o=da(e,o),r=da(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ei)}pa(n,r);var l;n=null;for(u in o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var a=o[u];for(l in a)a.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ao.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var s=r[u];if(a=o!=null?o[u]:void 0,r.hasOwnProperty(u)&&s!==a&&(s!=null||a!=null))if(u==="style")if(a){for(l in a)!a.hasOwnProperty(l)||s&&s.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in s)s.hasOwnProperty(l)&&a[l]!==s[l]&&(n||(n={}),n[l]=s[l])}else n||(i||(i=[]),i.push(u,n)),n=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,a=a?a.__html:void 0,s!=null&&a!==s&&(i=i||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(i=i||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ao.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&he("scroll",e),i||a===s||(i=[])):(i=i||[]).push(u,s))}n&&(i=i||[]).push("style",n);var u=i;(t.updateQueue=u)&&(t.flags|=4)}};Kf=function(e,t,n,r){n!==r&&(t.flags|=4)};function Br(e,t){if(!xe)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ke(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Jm(e,t,n){var r=t.pendingProps;switch(Es(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ke(t),null;case 1:return at(t.type)&&Ri(),Ke(t),null;case 3:return r=t.stateNode,Sr(),me(lt),me(Ze),Ls(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ko(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Nt!==null&&(Ga(Nt),Nt=null))),Fa(e,t),Ke(t),null;case 5:As(t);var o=Dn(xo.current);if(n=t.type,e!==null&&t.stateNode!=null)Gf(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(j(166));return Ke(t),null}if(e=Dn(Bt.current),Ko(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[Ft]=t,r[yo]=i,e=(t.mode&1)!==0,n){case"dialog":he("cancel",r),he("close",r);break;case"iframe":case"object":case"embed":he("load",r);break;case"video":case"audio":for(o=0;o<Kr.length;o++)he(Kr[o],r);break;case"source":he("error",r);break;case"img":case"image":case"link":he("error",r),he("load",r);break;case"details":he("toggle",r);break;case"input":yu(r,i),he("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},he("invalid",r);break;case"textarea":xu(r,i),he("invalid",r)}pa(n,i),o=null;for(var l in i)if(i.hasOwnProperty(l)){var a=i[l];l==="children"?typeof a=="string"?r.textContent!==a&&(i.suppressHydrationWarning!==!0&&Go(r.textContent,a,e),o=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&Go(r.textContent,a,e),o=["children",""+a]):ao.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&he("scroll",r)}switch(n){case"input":Fo(r),wu(r,i,!0);break;case"textarea":Fo(r),ku(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Ei)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=kd(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[Ft]=t,e[yo]=r,Yf(e,t,!1,!1),t.stateNode=e;e:{switch(l=ha(n,r),n){case"dialog":he("cancel",e),he("close",e),o=r;break;case"iframe":case"object":case"embed":he("load",e),o=r;break;case"video":case"audio":for(o=0;o<Kr.length;o++)he(Kr[o],e);o=r;break;case"source":he("error",e),o=r;break;case"img":case"image":case"link":he("error",e),he("load",e),o=r;break;case"details":he("toggle",e),o=r;break;case"input":yu(e,r),o=sa(e,r),he("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=be({},r,{value:void 0}),he("invalid",e);break;case"textarea":xu(e,r),o=da(e,r),he("invalid",e);break;default:o=r}pa(n,o),a=o;for(i in a)if(a.hasOwnProperty(i)){var s=a[i];i==="style"?bd(e,s):i==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Sd(e,s)):i==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&so(e,s):typeof s=="number"&&so(e,""+s):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(ao.hasOwnProperty(i)?s!=null&&i==="onScroll"&&he("scroll",e):s!=null&&cs(e,i,s,l))}switch(n){case"input":Fo(e),wu(e,r,!1);break;case"textarea":Fo(e),ku(e);break;case"option":r.value!=null&&e.setAttribute("value",""+En(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?dr(e,!!r.multiple,i,!1):r.defaultValue!=null&&dr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Ei)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ke(t),null;case 6:if(e&&t.stateNode!=null)Kf(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(j(166));if(n=Dn(xo.current),Dn(Bt.current),Ko(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ft]=t,(i=r.nodeValue!==n)&&(e=pt,e!==null))switch(e.tag){case 3:Go(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Go(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ft]=t,t.stateNode=r}return Ke(t),null;case 13:if(me(Se),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(xe&&dt!==null&&t.mode&1&&!(t.flags&128))ff(),xr(),t.flags|=98560,i=!1;else if(i=Ko(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(j(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(j(317));i[Ft]=t}else xr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ke(t),i=!1}else Nt!==null&&(Ga(Nt),Nt=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Se.current&1?De===0&&(De=3):Qs())),t.updateQueue!==null&&(t.flags|=4),Ke(t),null);case 4:return Sr(),Fa(e,t),e===null&&go(t.stateNode.containerInfo),Ke(t),null;case 10:return Ps(t.type._context),Ke(t),null;case 17:return at(t.type)&&Ri(),Ke(t),null;case 19:if(me(Se),i=t.memoizedState,i===null)return Ke(t),null;if(r=(t.flags&128)!==0,l=i.rendering,l===null)if(r)Br(i,!1);else{if(De!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=Ai(e),l!==null){for(t.flags|=128,Br(i,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,e=l.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return fe(Se,Se.current&1|2),t.child}e=e.sibling}i.tail!==null&&Pe()>br&&(t.flags|=128,r=!0,Br(i,!1),t.lanes=4194304)}else{if(!r)if(e=Ai(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Br(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!xe)return Ke(t),null}else 2*Pe()-i.renderingStartTime>br&&n!==1073741824&&(t.flags|=128,r=!0,Br(i,!1),t.lanes=4194304);i.isBackwards?(l.sibling=t.child,t.child=l):(n=i.last,n!==null?n.sibling=l:t.child=l,i.last=l)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=Pe(),t.sibling=null,n=Se.current,fe(Se,r?n&1|2:n&1),t):(Ke(t),null);case 22:case 23:return Hs(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?ct&1073741824&&(Ke(t),t.subtreeFlags&6&&(t.flags|=8192)):Ke(t),null;case 24:return null;case 25:return null}throw Error(j(156,t.tag))}function qm(e,t){switch(Es(t),t.tag){case 1:return at(t.type)&&Ri(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Sr(),me(lt),me(Ze),Ls(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return As(t),null;case 13:if(me(Se),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(j(340));xr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return me(Se),null;case 4:return Sr(),null;case 10:return Ps(t.type._context),null;case 22:case 23:return Hs(),null;case 24:return null;default:return null}}var Jo=!1,Xe=!1,eg=typeof WeakSet=="function"?WeakSet:Set,O=null;function lr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ee(e,t,r)}else n.current=null}function Ua(e,t,n){try{n()}catch(r){Ee(e,t,r)}}var cc=!1;function tg(e,t){if(ba=Si,e=Jd(),Cs(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var l=0,a=-1,s=-1,u=0,p=0,g=e,v=null;t:for(;;){for(var S;g!==n||o!==0&&g.nodeType!==3||(a=l+o),g!==i||r!==0&&g.nodeType!==3||(s=l+r),g.nodeType===3&&(l+=g.nodeValue.length),(S=g.firstChild)!==null;)v=g,g=S;for(;;){if(g===e)break t;if(v===n&&++u===o&&(a=l),v===i&&++p===r&&(s=l),(S=g.nextSibling)!==null)break;g=v,v=g.parentNode}g=S}n=a===-1||s===-1?null:{start:a,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ea={focusedElem:e,selectionRange:n},Si=!1,O=t;O!==null;)if(t=O,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,O=e;else for(;O!==null;){t=O;try{var x=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var y=x.memoizedProps,h=x.memoizedState,d=t.stateNode,c=d.getSnapshotBeforeUpdate(t.elementType===t.type?y:_t(t.type,y),h);d.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var f=t.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(j(163))}}catch(w){Ee(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,O=e;break}O=t.return}return x=cc,cc=!1,x}function no(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&Ua(t,n,i)}o=o.next}while(o!==r)}}function qi(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Ba(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Xf(e){var t=e.alternate;t!==null&&(e.alternate=null,Xf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ft],delete t[yo],delete t[_a],delete t[Om],delete t[$m])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Zf(e){return e.tag===5||e.tag===3||e.tag===4}function dc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Zf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Va(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ei));else if(r!==4&&(e=e.child,e!==null))for(Va(e,t,n),e=e.sibling;e!==null;)Va(e,t,n),e=e.sibling}function Wa(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Wa(e,t,n),e=e.sibling;e!==null;)Wa(e,t,n),e=e.sibling}var We=null,Pt=!1;function sn(e,t,n){for(n=n.child;n!==null;)Jf(e,t,n),n=n.sibling}function Jf(e,t,n){if(Ut&&typeof Ut.onCommitFiberUnmount=="function")try{Ut.onCommitFiberUnmount(Hi,n)}catch{}switch(n.tag){case 5:Xe||lr(n,t);case 6:var r=We,o=Pt;We=null,sn(e,t,n),We=r,Pt=o,We!==null&&(Pt?(e=We,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):We.removeChild(n.stateNode));break;case 18:We!==null&&(Pt?(e=We,n=n.stateNode,e.nodeType===8?Fl(e.parentNode,n):e.nodeType===1&&Fl(e,n),po(e)):Fl(We,n.stateNode));break;case 4:r=We,o=Pt,We=n.stateNode.containerInfo,Pt=!0,sn(e,t,n),We=r,Pt=o;break;case 0:case 11:case 14:case 15:if(!Xe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,l=i.destroy;i=i.tag,l!==void 0&&(i&2||i&4)&&Ua(n,t,l),o=o.next}while(o!==r)}sn(e,t,n);break;case 1:if(!Xe&&(lr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Ee(n,t,a)}sn(e,t,n);break;case 21:sn(e,t,n);break;case 22:n.mode&1?(Xe=(r=Xe)||n.memoizedState!==null,sn(e,t,n),Xe=r):sn(e,t,n);break;default:sn(e,t,n)}}function fc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new eg),t.forEach(function(r){var o=cg.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function jt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,l=t,a=l;e:for(;a!==null;){switch(a.tag){case 5:We=a.stateNode,Pt=!1;break e;case 3:We=a.stateNode.containerInfo,Pt=!0;break e;case 4:We=a.stateNode.containerInfo,Pt=!0;break e}a=a.return}if(We===null)throw Error(j(160));Jf(i,l,o),We=null,Pt=!1;var s=o.alternate;s!==null&&(s.return=null),o.return=null}catch(u){Ee(o,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)qf(t,e),t=t.sibling}function qf(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(jt(t,e),Ot(e),r&4){try{no(3,e,e.return),qi(3,e)}catch(y){Ee(e,e.return,y)}try{no(5,e,e.return)}catch(y){Ee(e,e.return,y)}}break;case 1:jt(t,e),Ot(e),r&512&&n!==null&&lr(n,n.return);break;case 5:if(jt(t,e),Ot(e),r&512&&n!==null&&lr(n,n.return),e.flags&32){var o=e.stateNode;try{so(o,"")}catch(y){Ee(e,e.return,y)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,l=n!==null?n.memoizedProps:i,a=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&wd(o,i),ha(a,l);var u=ha(a,i);for(l=0;l<s.length;l+=2){var p=s[l],g=s[l+1];p==="style"?bd(o,g):p==="dangerouslySetInnerHTML"?Sd(o,g):p==="children"?so(o,g):cs(o,p,g,u)}switch(a){case"input":ua(o,i);break;case"textarea":xd(o,i);break;case"select":var v=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var S=i.value;S!=null?dr(o,!!i.multiple,S,!1):v!==!!i.multiple&&(i.defaultValue!=null?dr(o,!!i.multiple,i.defaultValue,!0):dr(o,!!i.multiple,i.multiple?[]:"",!1))}o[yo]=i}catch(y){Ee(e,e.return,y)}}break;case 6:if(jt(t,e),Ot(e),r&4){if(e.stateNode===null)throw Error(j(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(y){Ee(e,e.return,y)}}break;case 3:if(jt(t,e),Ot(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{po(t.containerInfo)}catch(y){Ee(e,e.return,y)}break;case 4:jt(t,e),Ot(e);break;case 13:jt(t,e),Ot(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(Vs=Pe())),r&4&&fc(e);break;case 22:if(p=n!==null&&n.memoizedState!==null,e.mode&1?(Xe=(u=Xe)||p,jt(t,e),Xe=u):jt(t,e),Ot(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!p&&e.mode&1)for(O=e,p=e.child;p!==null;){for(g=O=p;O!==null;){switch(v=O,S=v.child,v.tag){case 0:case 11:case 14:case 15:no(4,v,v.return);break;case 1:lr(v,v.return);var x=v.stateNode;if(typeof x.componentWillUnmount=="function"){r=v,n=v.return;try{t=r,x.props=t.memoizedProps,x.state=t.memoizedState,x.componentWillUnmount()}catch(y){Ee(r,n,y)}}break;case 5:lr(v,v.return);break;case 22:if(v.memoizedState!==null){hc(g);continue}}S!==null?(S.return=v,O=S):hc(g)}p=p.sibling}e:for(p=null,g=e;;){if(g.tag===5){if(p===null){p=g;try{o=g.stateNode,u?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=g.stateNode,s=g.memoizedProps.style,l=s!=null&&s.hasOwnProperty("display")?s.display:null,a.style.display=Cd("display",l))}catch(y){Ee(e,e.return,y)}}}else if(g.tag===6){if(p===null)try{g.stateNode.nodeValue=u?"":g.memoizedProps}catch(y){Ee(e,e.return,y)}}else if((g.tag!==22&&g.tag!==23||g.memoizedState===null||g===e)&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===e)break e;for(;g.sibling===null;){if(g.return===null||g.return===e)break e;p===g&&(p=null),g=g.return}p===g&&(p=null),g.sibling.return=g.return,g=g.sibling}}break;case 19:jt(t,e),Ot(e),r&4&&fc(e);break;case 21:break;default:jt(t,e),Ot(e)}}function Ot(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Zf(n)){var r=n;break e}n=n.return}throw Error(j(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(so(o,""),r.flags&=-33);var i=dc(e);Wa(e,i,o);break;case 3:case 4:var l=r.stateNode.containerInfo,a=dc(e);Va(e,a,l);break;default:throw Error(j(161))}}catch(s){Ee(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function ng(e,t,n){O=e,ep(e)}function ep(e,t,n){for(var r=(e.mode&1)!==0;O!==null;){var o=O,i=o.child;if(o.tag===22&&r){var l=o.memoizedState!==null||Jo;if(!l){var a=o.alternate,s=a!==null&&a.memoizedState!==null||Xe;a=Jo;var u=Xe;if(Jo=l,(Xe=s)&&!u)for(O=o;O!==null;)l=O,s=l.child,l.tag===22&&l.memoizedState!==null?mc(o):s!==null?(s.return=l,O=s):mc(o);for(;i!==null;)O=i,ep(i),i=i.sibling;O=o,Jo=a,Xe=u}pc(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,O=i):pc(e)}}function pc(e){for(;O!==null;){var t=O;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Xe||qi(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Xe)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:_t(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Xu(t,i,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Xu(t,l,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var p=u.memoizedState;if(p!==null){var g=p.dehydrated;g!==null&&po(g)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(j(163))}Xe||t.flags&512&&Ba(t)}catch(v){Ee(t,t.return,v)}}if(t===e){O=null;break}if(n=t.sibling,n!==null){n.return=t.return,O=n;break}O=t.return}}function hc(e){for(;O!==null;){var t=O;if(t===e){O=null;break}var n=t.sibling;if(n!==null){n.return=t.return,O=n;break}O=t.return}}function mc(e){for(;O!==null;){var t=O;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{qi(4,t)}catch(s){Ee(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(s){Ee(t,o,s)}}var i=t.return;try{Ba(t)}catch(s){Ee(t,i,s)}break;case 5:var l=t.return;try{Ba(t)}catch(s){Ee(t,l,s)}}}catch(s){Ee(t,t.return,s)}if(t===e){O=null;break}var a=t.sibling;if(a!==null){a.return=t.return,O=a;break}O=t.return}}var rg=Math.ceil,Di=on.ReactCurrentDispatcher,Us=on.ReactCurrentOwner,kt=on.ReactCurrentBatchConfig,ie=0,Fe=null,Te=null,He=0,ct=0,ar=_n(0),De=0,bo=null,Vn=0,el=0,Bs=0,ro=null,ot=null,Vs=0,br=1/0,Ht=null,Oi=!1,Ha=null,xn=null,qo=!1,hn=null,$i=0,oo=0,Qa=null,pi=-1,hi=0;function et(){return ie&6?Pe():pi!==-1?pi:pi=Pe()}function kn(e){return e.mode&1?ie&2&&He!==0?He&-He:Fm.transition!==null?(hi===0&&(hi=Dd()),hi):(e=se,e!==0||(e=window.event,e=e===void 0?16:Vd(e.type)),e):1}function zt(e,t,n,r){if(50<oo)throw oo=0,Qa=null,Error(j(185));No(e,n,r),(!(ie&2)||e!==Fe)&&(e===Fe&&(!(ie&2)&&(el|=n),De===4&&fn(e,He)),st(e,r),n===1&&ie===0&&!(t.mode&1)&&(br=Pe()+500,Xi&&Pn()))}function st(e,t){var n=e.callbackNode;Fh(e,t);var r=ki(e,e===Fe?He:0);if(r===0)n!==null&&bu(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&bu(n),t===1)e.tag===0?Im(gc.bind(null,e)):uf(gc.bind(null,e)),Mm(function(){!(ie&6)&&Pn()}),n=null;else{switch(Od(r)){case 1:n=ms;break;case 4:n=Ld;break;case 16:n=xi;break;case 536870912:n=Md;break;default:n=xi}n=sp(n,tp.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function tp(e,t){if(pi=-1,hi=0,ie&6)throw Error(j(327));var n=e.callbackNode;if(gr()&&e.callbackNode!==n)return null;var r=ki(e,e===Fe?He:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Ii(e,r);else{t=r;var o=ie;ie|=2;var i=rp();(Fe!==e||He!==t)&&(Ht=null,br=Pe()+500,$n(e,t));do try{lg();break}catch(a){np(e,a)}while(1);_s(),Di.current=i,ie=o,Te!==null?t=0:(Fe=null,He=0,t=De)}if(t!==0){if(t===2&&(o=wa(e),o!==0&&(r=o,t=Ya(e,o))),t===1)throw n=bo,$n(e,0),fn(e,r),st(e,Pe()),n;if(t===6)fn(e,r);else{if(o=e.current.alternate,!(r&30)&&!og(o)&&(t=Ii(e,r),t===2&&(i=wa(e),i!==0&&(r=i,t=Ya(e,i))),t===1))throw n=bo,$n(e,0),fn(e,r),st(e,Pe()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(j(345));case 2:An(e,ot,Ht);break;case 3:if(fn(e,r),(r&130023424)===r&&(t=Vs+500-Pe(),10<t)){if(ki(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){et(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=ja(An.bind(null,e,ot,Ht),t);break}An(e,ot,Ht);break;case 4:if(fn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var l=31-Tt(r);i=1<<l,l=t[l],l>o&&(o=l),r&=~i}if(r=o,r=Pe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*rg(r/1960))-r,10<r){e.timeoutHandle=ja(An.bind(null,e,ot,Ht),r);break}An(e,ot,Ht);break;case 5:An(e,ot,Ht);break;default:throw Error(j(329))}}}return st(e,Pe()),e.callbackNode===n?tp.bind(null,e):null}function Ya(e,t){var n=ro;return e.current.memoizedState.isDehydrated&&($n(e,t).flags|=256),e=Ii(e,t),e!==2&&(t=ot,ot=n,t!==null&&Ga(t)),e}function Ga(e){ot===null?ot=e:ot.push.apply(ot,e)}function og(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!At(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function fn(e,t){for(t&=~Bs,t&=~el,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Tt(t),r=1<<n;e[n]=-1,t&=~r}}function gc(e){if(ie&6)throw Error(j(327));gr();var t=ki(e,0);if(!(t&1))return st(e,Pe()),null;var n=Ii(e,t);if(e.tag!==0&&n===2){var r=wa(e);r!==0&&(t=r,n=Ya(e,r))}if(n===1)throw n=bo,$n(e,0),fn(e,t),st(e,Pe()),n;if(n===6)throw Error(j(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,An(e,ot,Ht),st(e,Pe()),null}function Ws(e,t){var n=ie;ie|=1;try{return e(t)}finally{ie=n,ie===0&&(br=Pe()+500,Xi&&Pn())}}function Wn(e){hn!==null&&hn.tag===0&&!(ie&6)&&gr();var t=ie;ie|=1;var n=kt.transition,r=se;try{if(kt.transition=null,se=1,e)return e()}finally{se=r,kt.transition=n,ie=t,!(ie&6)&&Pn()}}function Hs(){ct=ar.current,me(ar)}function $n(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Lm(n)),Te!==null)for(n=Te.return;n!==null;){var r=n;switch(Es(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ri();break;case 3:Sr(),me(lt),me(Ze),Ls();break;case 5:As(r);break;case 4:Sr();break;case 13:me(Se);break;case 19:me(Se);break;case 10:Ps(r.type._context);break;case 22:case 23:Hs()}n=n.return}if(Fe=e,Te=e=Sn(e.current,null),He=ct=t,De=0,bo=null,Bs=el=Vn=0,ot=ro=null,Mn!==null){for(t=0;t<Mn.length;t++)if(n=Mn[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var l=i.next;i.next=o,r.next=l}n.pending=r}Mn=null}return e}function np(e,t){do{var n=Te;try{if(_s(),ci.current=Mi,Li){for(var r=Ce.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Li=!1}if(Bn=0,Ie=Me=Ce=null,to=!1,ko=0,Us.current=null,n===null||n.return===null){De=1,bo=t,Te=null;break}e:{var i=e,l=n.return,a=n,s=t;if(t=He,a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,p=a,g=p.tag;if(!(p.mode&1)&&(g===0||g===11||g===15)){var v=p.alternate;v?(p.updateQueue=v.updateQueue,p.memoizedState=v.memoizedState,p.lanes=v.lanes):(p.updateQueue=null,p.memoizedState=null)}var S=rc(l);if(S!==null){S.flags&=-257,oc(S,l,a,i,t),S.mode&1&&nc(i,u,t),t=S,s=u;var x=t.updateQueue;if(x===null){var y=new Set;y.add(s),t.updateQueue=y}else x.add(s);break e}else{if(!(t&1)){nc(i,u,t),Qs();break e}s=Error(j(426))}}else if(xe&&a.mode&1){var h=rc(l);if(h!==null){!(h.flags&65536)&&(h.flags|=256),oc(h,l,a,i,t),Rs(Cr(s,a));break e}}i=s=Cr(s,a),De!==4&&(De=2),ro===null?ro=[i]:ro.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var d=If(i,s,t);Ku(i,d);break e;case 1:a=s;var c=i.type,f=i.stateNode;if(!(i.flags&128)&&(typeof c.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(xn===null||!xn.has(f)))){i.flags|=65536,t&=-t,i.lanes|=t;var w=Ff(i,a,t);Ku(i,w);break e}}i=i.return}while(i!==null)}ip(n)}catch(b){t=b,Te===n&&n!==null&&(Te=n=n.return);continue}break}while(1)}function rp(){var e=Di.current;return Di.current=Mi,e===null?Mi:e}function Qs(){(De===0||De===3||De===2)&&(De=4),Fe===null||!(Vn&268435455)&&!(el&268435455)||fn(Fe,He)}function Ii(e,t){var n=ie;ie|=2;var r=rp();(Fe!==e||He!==t)&&(Ht=null,$n(e,t));do try{ig();break}catch(o){np(e,o)}while(1);if(_s(),ie=n,Di.current=r,Te!==null)throw Error(j(261));return Fe=null,He=0,De}function ig(){for(;Te!==null;)op(Te)}function lg(){for(;Te!==null&&!Th();)op(Te)}function op(e){var t=ap(e.alternate,e,ct);e.memoizedProps=e.pendingProps,t===null?ip(e):Te=t,Us.current=null}function ip(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=qm(n,t),n!==null){n.flags&=32767,Te=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{De=6,Te=null;return}}else if(n=Jm(n,t,ct),n!==null){Te=n;return}if(t=t.sibling,t!==null){Te=t;return}Te=t=e}while(t!==null);De===0&&(De=5)}function An(e,t,n){var r=se,o=kt.transition;try{kt.transition=null,se=1,ag(e,t,n,r)}finally{kt.transition=o,se=r}return null}function ag(e,t,n,r){do gr();while(hn!==null);if(ie&6)throw Error(j(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(j(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(Uh(e,i),e===Fe&&(Te=Fe=null,He=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||qo||(qo=!0,sp(xi,function(){return gr(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=kt.transition,kt.transition=null;var l=se;se=1;var a=ie;ie|=4,Us.current=null,tg(e,n),qf(n,e),jm(Ea),Si=!!ba,Ea=ba=null,e.current=n,ng(n),zh(),ie=a,se=l,kt.transition=i}else e.current=n;if(qo&&(qo=!1,hn=e,$i=o),i=e.pendingLanes,i===0&&(xn=null),Mh(n.stateNode),st(e,Pe()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Oi)throw Oi=!1,e=Ha,Ha=null,e;return $i&1&&e.tag!==0&&gr(),i=e.pendingLanes,i&1?e===Qa?oo++:(oo=0,Qa=e):oo=0,Pn(),null}function gr(){if(hn!==null){var e=Od($i),t=kt.transition,n=se;try{if(kt.transition=null,se=16>e?16:e,hn===null)var r=!1;else{if(e=hn,hn=null,$i=0,ie&6)throw Error(j(331));var o=ie;for(ie|=4,O=e.current;O!==null;){var i=O,l=i.child;if(O.flags&16){var a=i.deletions;if(a!==null){for(var s=0;s<a.length;s++){var u=a[s];for(O=u;O!==null;){var p=O;switch(p.tag){case 0:case 11:case 15:no(8,p,i)}var g=p.child;if(g!==null)g.return=p,O=g;else for(;O!==null;){p=O;var v=p.sibling,S=p.return;if(Xf(p),p===u){O=null;break}if(v!==null){v.return=S,O=v;break}O=S}}}var x=i.alternate;if(x!==null){var y=x.child;if(y!==null){x.child=null;do{var h=y.sibling;y.sibling=null,y=h}while(y!==null)}}O=i}}if(i.subtreeFlags&2064&&l!==null)l.return=i,O=l;else e:for(;O!==null;){if(i=O,i.flags&2048)switch(i.tag){case 0:case 11:case 15:no(9,i,i.return)}var d=i.sibling;if(d!==null){d.return=i.return,O=d;break e}O=i.return}}var c=e.current;for(O=c;O!==null;){l=O;var f=l.child;if(l.subtreeFlags&2064&&f!==null)f.return=l,O=f;else e:for(l=c;O!==null;){if(a=O,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:qi(9,a)}}catch(b){Ee(a,a.return,b)}if(a===l){O=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,O=w;break e}O=a.return}}if(ie=o,Pn(),Ut&&typeof Ut.onPostCommitFiberRoot=="function")try{Ut.onPostCommitFiberRoot(Hi,e)}catch{}r=!0}return r}finally{se=n,kt.transition=t}}return!1}function vc(e,t,n){t=Cr(n,t),t=If(e,t,1),e=wn(e,t,1),t=et(),e!==null&&(No(e,1,t),st(e,t))}function Ee(e,t,n){if(e.tag===3)vc(e,e,n);else for(;t!==null;){if(t.tag===3){vc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(xn===null||!xn.has(r))){e=Cr(n,e),e=Ff(t,e,1),t=wn(t,e,1),e=et(),t!==null&&(No(t,1,e),st(t,e));break}}t=t.return}}function sg(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=et(),e.pingedLanes|=e.suspendedLanes&n,Fe===e&&(He&n)===n&&(De===4||De===3&&(He&130023424)===He&&500>Pe()-Vs?$n(e,0):Bs|=n),st(e,t)}function lp(e,t){t===0&&(e.mode&1?(t=Vo,Vo<<=1,!(Vo&130023424)&&(Vo=4194304)):t=1);var n=et();e=tn(e,t),e!==null&&(No(e,t,n),st(e,n))}function ug(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),lp(e,n)}function cg(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(j(314))}r!==null&&r.delete(t),lp(e,n)}var ap;ap=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||lt.current)it=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return it=!1,Zm(e,t,n);it=!!(e.flags&131072)}else it=!1,xe&&t.flags&1048576&&cf(t,Pi,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;fi(e,t),e=t.pendingProps;var o=wr(t,Ze.current);mr(t,n),o=Ds(null,t,r,e,o,n);var i=Os();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,at(r)?(i=!0,ji(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Ts(t),o.updater=Zi,t.stateNode=o,o._reactInternals=t,La(t,r,e,n),t=Oa(null,t,r,!0,i,n)):(t.tag=0,xe&&i&&bs(t),Je(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(fi(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=fg(r),e=_t(r,e),o){case 0:t=Da(null,t,r,e,n);break e;case 1:t=ac(null,t,r,e,n);break e;case 11:t=ic(null,t,r,e,n);break e;case 14:t=lc(null,t,r,_t(r.type,e),n);break e}throw Error(j(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:_t(r,o),Da(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:_t(r,o),ac(e,t,r,o,n);case 3:e:{if(Wf(t),e===null)throw Error(j(387));r=t.pendingProps,i=t.memoizedState,o=i.element,hf(e,t),zi(t,r,null,n);var l=t.memoizedState;if(r=l.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=Cr(Error(j(423)),t),t=sc(e,t,r,n,o);break e}else if(r!==o){o=Cr(Error(j(424)),t),t=sc(e,t,r,n,o);break e}else for(dt=yn(t.stateNode.containerInfo.firstChild),pt=t,xe=!0,Nt=null,n=yf(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(xr(),r===o){t=nn(e,t,n);break e}Je(e,t,r,n)}t=t.child}return t;case 5:return wf(t),e===null&&Ta(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,l=o.children,Ra(r,o)?l=null:i!==null&&Ra(r,i)&&(t.flags|=32),Vf(e,t),Je(e,t,l,n),t.child;case 6:return e===null&&Ta(t),null;case 13:return Hf(e,t,n);case 4:return zs(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=kr(t,null,r,n):Je(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:_t(r,o),ic(e,t,r,o,n);case 7:return Je(e,t,t.pendingProps,n),t.child;case 8:return Je(e,t,t.pendingProps.children,n),t.child;case 12:return Je(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,l=o.value,fe(Ni,r._currentValue),r._currentValue=l,i!==null)if(At(i.value,l)){if(i.children===o.children&&!lt.current){t=nn(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var a=i.dependencies;if(a!==null){l=i.child;for(var s=a.firstContext;s!==null;){if(s.context===r){if(i.tag===1){s=Zt(-1,n&-n),s.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var p=u.pending;p===null?s.next=s:(s.next=p.next,p.next=s),u.pending=s}}i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),za(i.return,n,t),a.lanes|=n;break}s=s.next}}else if(i.tag===10)l=i.type===t.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(j(341));l.lanes|=n,a=l.alternate,a!==null&&(a.lanes|=n),za(l,n,t),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===t){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}Je(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,mr(t,n),o=St(o),r=r(o),t.flags|=1,Je(e,t,r,n),t.child;case 14:return r=t.type,o=_t(r,t.pendingProps),o=_t(r.type,o),lc(e,t,r,o,n);case 15:return Uf(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:_t(r,o),fi(e,t),t.tag=1,at(r)?(e=!0,ji(t)):e=!1,mr(t,n),gf(t,r,o),La(t,r,o,n),Oa(null,t,r,!0,e,n);case 19:return Qf(e,t,n);case 22:return Bf(e,t,n)}throw Error(j(156,t.tag))};function sp(e,t){return Ad(e,t)}function dg(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function xt(e,t,n,r){return new dg(e,t,n,r)}function Ys(e){return e=e.prototype,!(!e||!e.isReactComponent)}function fg(e){if(typeof e=="function")return Ys(e)?1:0;if(e!=null){if(e=e.$$typeof,e===fs)return 11;if(e===ps)return 14}return 2}function Sn(e,t){var n=e.alternate;return n===null?(n=xt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function mi(e,t,n,r,o,i){var l=2;if(r=e,typeof e=="function")Ys(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Zn:return In(n.children,o,i,t);case ds:l=8,o|=8;break;case oa:return e=xt(12,n,t,o|2),e.elementType=oa,e.lanes=i,e;case ia:return e=xt(13,n,t,o),e.elementType=ia,e.lanes=i,e;case la:return e=xt(19,n,t,o),e.elementType=la,e.lanes=i,e;case gd:return tl(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case hd:l=10;break e;case md:l=9;break e;case fs:l=11;break e;case ps:l=14;break e;case un:l=16,r=null;break e}throw Error(j(130,e==null?e:typeof e,""))}return t=xt(l,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function In(e,t,n,r){return e=xt(7,e,r,t),e.lanes=n,e}function tl(e,t,n,r){return e=xt(22,e,r,t),e.elementType=gd,e.lanes=n,e.stateNode={isHidden:!1},e}function Gl(e,t,n){return e=xt(6,e,null,t),e.lanes=n,e}function Kl(e,t,n){return t=xt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function pg(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Pl(0),this.expirationTimes=Pl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Pl(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Gs(e,t,n,r,o,i,l,a,s){return e=new pg(e,t,n,a,s),t===1?(t=1,i===!0&&(t|=8)):t=0,i=xt(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ts(i),e}function hg(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Xn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function up(e){if(!e)return Rn;e=e._reactInternals;e:{if(Qn(e)!==e||e.tag!==1)throw Error(j(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(at(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(j(171))}if(e.tag===1){var n=e.type;if(at(n))return sf(e,n,t)}return t}function cp(e,t,n,r,o,i,l,a,s){return e=Gs(n,r,!0,e,o,i,l,a,s),e.context=up(null),n=e.current,r=et(),o=kn(n),i=Zt(r,o),i.callback=t??null,wn(n,i,o),e.current.lanes=o,No(e,o,r),st(e,r),e}function nl(e,t,n,r){var o=t.current,i=et(),l=kn(o);return n=up(n),t.context===null?t.context=n:t.pendingContext=n,t=Zt(i,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=wn(o,t,l),e!==null&&(zt(e,o,l,i),ui(e,o,l)),l}function Fi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function yc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ks(e,t){yc(e,t),(e=e.alternate)&&yc(e,t)}function mg(){return null}var dp=typeof reportError=="function"?reportError:function(e){console.error(e)};function Xs(e){this._internalRoot=e}rl.prototype.render=Xs.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(j(409));nl(e,t,null,null)};rl.prototype.unmount=Xs.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Wn(function(){nl(null,e,null,null)}),t[en]=null}};function rl(e){this._internalRoot=e}rl.prototype.unstable_scheduleHydration=function(e){if(e){var t=Fd();e={blockedOn:null,target:e,priority:t};for(var n=0;n<dn.length&&t!==0&&t<dn[n].priority;n++);dn.splice(n,0,e),n===0&&Bd(e)}};function Zs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ol(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function wc(){}function gg(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var u=Fi(l);i.call(u)}}var l=cp(t,r,e,0,null,!1,!1,"",wc);return e._reactRootContainer=l,e[en]=l.current,go(e.nodeType===8?e.parentNode:e),Wn(),l}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var a=r;r=function(){var u=Fi(s);a.call(u)}}var s=Gs(e,0,!1,null,null,!1,!1,"",wc);return e._reactRootContainer=s,e[en]=s.current,go(e.nodeType===8?e.parentNode:e),Wn(function(){nl(t,s,n,r)}),s}function il(e,t,n,r,o){var i=n._reactRootContainer;if(i){var l=i;if(typeof o=="function"){var a=o;o=function(){var s=Fi(l);a.call(s)}}nl(t,l,e,o)}else l=gg(n,t,e,o,r);return Fi(l)}$d=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Gr(t.pendingLanes);n!==0&&(gs(t,n|1),st(t,Pe()),!(ie&6)&&(br=Pe()+500,Pn()))}break;case 13:Wn(function(){var r=tn(e,1);if(r!==null){var o=et();zt(r,e,1,o)}}),Ks(e,1)}};vs=function(e){if(e.tag===13){var t=tn(e,134217728);if(t!==null){var n=et();zt(t,e,134217728,n)}Ks(e,134217728)}};Id=function(e){if(e.tag===13){var t=kn(e),n=tn(e,t);if(n!==null){var r=et();zt(n,e,t,r)}Ks(e,t)}};Fd=function(){return se};Ud=function(e,t){var n=se;try{return se=e,t()}finally{se=n}};ga=function(e,t,n){switch(t){case"input":if(ua(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=Ki(r);if(!o)throw Error(j(90));yd(r),ua(r,o)}}}break;case"textarea":xd(e,n);break;case"select":t=n.value,t!=null&&dr(e,!!n.multiple,t,!1)}};jd=Ws;_d=Wn;var vg={usingClientEntryPoint:!1,Events:[zo,tr,Ki,Ed,Rd,Ws]},Vr={findFiberByHostInstance:Ln,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},yg={bundleType:Vr.bundleType,version:Vr.version,rendererPackageName:Vr.rendererPackageName,rendererConfig:Vr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:on.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Td(e),e===null?null:e.stateNode},findFiberByHostInstance:Vr.findFiberByHostInstance||mg,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ei=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ei.isDisabled&&ei.supportsFiber)try{Hi=ei.inject(yg),Ut=ei}catch{}}mt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=vg;mt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Zs(t))throw Error(j(200));return hg(e,t,null,n)};mt.createRoot=function(e,t){if(!Zs(e))throw Error(j(299));var n=!1,r="",o=dp;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Gs(e,1,!1,null,null,n,!1,r,o),e[en]=t.current,go(e.nodeType===8?e.parentNode:e),new Xs(t)};mt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(j(188)):(e=Object.keys(e).join(","),Error(j(268,e)));return e=Td(t),e=e===null?null:e.stateNode,e};mt.flushSync=function(e){return Wn(e)};mt.hydrate=function(e,t,n){if(!ol(t))throw Error(j(200));return il(null,e,t,!0,n)};mt.hydrateRoot=function(e,t,n){if(!Zs(e))throw Error(j(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",l=dp;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=cp(t,null,e,1,n??null,o,!1,i,l),e[en]=t.current,go(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new rl(t)};mt.render=function(e,t,n){if(!ol(t))throw Error(j(200));return il(null,e,t,!1,n)};mt.unmountComponentAtNode=function(e){if(!ol(e))throw Error(j(40));return e._reactRootContainer?(Wn(function(){il(null,null,e,!1,function(){e._reactRootContainer=null,e[en]=null})}),!0):!1};mt.unstable_batchedUpdates=Ws;mt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!ol(n))throw Error(j(200));if(e==null||e._reactInternals===void 0)throw Error(j(38));return il(e,t,n,!1,r)};mt.version="18.2.0-next-9e3b772b8-20220608";function fp(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(fp)}catch(e){console.error(e)}}fp(),ud.exports=mt;var wg=ud.exports,xc=wg;na.createRoot=xc.createRoot,na.hydrateRoot=xc.hydrateRoot;/**
 * @remix-run/router v1.5.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ne(){return ne=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ne.apply(this,arguments)}var Ne;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Ne||(Ne={}));const kc="popstate";function xg(e){e===void 0&&(e={});function t(r,o){let{pathname:i,search:l,hash:a}=r.location;return Eo("",{pathname:i,search:l,hash:a},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(r,o){return typeof o=="string"?o:rn(o)}return Sg(t,n,null,e)}function X(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Er(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function kg(){return Math.random().toString(36).substr(2,8)}function Sc(e,t){return{usr:e.state,key:e.key,idx:t}}function Eo(e,t,n,r){return n===void 0&&(n=null),ne({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?ln(t):t,{state:n,key:t&&t.key||r||kg()})}function rn(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function ln(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Sg(e,t,n,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:i=!1}=r,l=o.history,a=Ne.Pop,s=null,u=p();u==null&&(u=0,l.replaceState(ne({},l.state,{idx:u}),""));function p(){return(l.state||{idx:null}).idx}function g(){a=Ne.Pop;let h=p(),d=h==null?null:h-u;u=h,s&&s({action:a,location:y.location,delta:d})}function v(h,d){a=Ne.Push;let c=Eo(y.location,h,d);n&&n(c,h),u=p()+1;let f=Sc(c,u),w=y.createHref(c);try{l.pushState(f,"",w)}catch{o.location.assign(w)}i&&s&&s({action:a,location:y.location,delta:1})}function S(h,d){a=Ne.Replace;let c=Eo(y.location,h,d);n&&n(c,h),u=p();let f=Sc(c,u),w=y.createHref(c);l.replaceState(f,"",w),i&&s&&s({action:a,location:y.location,delta:0})}function x(h){let d=o.location.origin!=="null"?o.location.origin:o.location.href,c=typeof h=="string"?h:rn(h);return X(d,"No window.location.(origin|href) available to create URL for href: "+c),new URL(c,d)}let y={get action(){return a},get location(){return e(o,l)},listen(h){if(s)throw new Error("A history only accepts one active listener");return o.addEventListener(kc,g),s=h,()=>{o.removeEventListener(kc,g),s=null}},createHref(h){return t(o,h)},createURL:x,encodeLocation(h){let d=x(h);return{pathname:d.pathname,search:d.search,hash:d.hash}},push:v,replace:S,go(h){return l.go(h)}};return y}var Le;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Le||(Le={}));const Cg=new Set(["lazy","caseSensitive","path","id","index","children"]);function bg(e){return e.index===!0}function pp(e,t,n,r){return n===void 0&&(n=[]),r===void 0&&(r={}),e.map((o,i)=>{let l=[...n,i],a=typeof o.id=="string"?o.id:l.join("-");if(X(o.index!==!0||!o.children,"Cannot specify children on an index route"),X(!r[a],'Found a route id collision on id "'+a+`".  Route id's must be globally unique within Data Router usages`),bg(o)){let s=ne({},o,{hasErrorBoundary:t(o),id:a});return r[a]=s,s}else{let s=ne({},o,{id:a,hasErrorBoundary:t(o),children:void 0});return r[a]=s,o.children&&(s.children=pp(o.children,t,l,r)),s}})}function sr(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?ln(t):t,o=Lo(r.pathname||"/",n);if(o==null)return null;let i=hp(e);Eg(i);let l=null;for(let a=0;l==null&&a<i.length;++a)l=Lg(i[a],Og(o));return l}function hp(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let o=(i,l,a)=>{let s={relativePath:a===void 0?i.path||"":a,caseSensitive:i.caseSensitive===!0,childrenIndex:l,route:i};s.relativePath.startsWith("/")&&(X(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(r.length));let u=Jt([r,s.relativePath]),p=n.concat(s);i.children&&i.children.length>0&&(X(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),hp(i.children,t,p,u)),!(i.path==null&&!i.index)&&t.push({path:u,score:zg(u,i.index),routesMeta:p})};return e.forEach((i,l)=>{var a;if(i.path===""||!((a=i.path)!=null&&a.includes("?")))o(i,l);else for(let s of mp(i.path))o(i,l,s)}),t}function mp(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,o=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return o?[i,""]:[i];let l=mp(r.join("/")),a=[];return a.push(...l.map(s=>s===""?i:[i,s].join("/"))),o&&a.push(...l),a.map(s=>e.startsWith("/")&&s===""?"/":s)}function Eg(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Ag(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Rg=/^:\w+$/,jg=3,_g=2,Pg=1,Ng=10,Tg=-2,Cc=e=>e==="*";function zg(e,t){let n=e.split("/"),r=n.length;return n.some(Cc)&&(r+=Tg),t&&(r+=_g),n.filter(o=>!Cc(o)).reduce((o,i)=>o+(Rg.test(i)?jg:i===""?Pg:Ng),r)}function Ag(e,t){return e.length===t.length&&e.slice(0,-1).every((r,o)=>r===t[o])?e[e.length-1]-t[t.length-1]:0}function Lg(e,t){let{routesMeta:n}=e,r={},o="/",i=[];for(let l=0;l<n.length;++l){let a=n[l],s=l===n.length-1,u=o==="/"?t:t.slice(o.length)||"/",p=Mg({path:a.relativePath,caseSensitive:a.caseSensitive,end:s},u);if(!p)return null;Object.assign(r,p.params);let g=a.route;i.push({params:r,pathname:Jt([o,p.pathname]),pathnameBase:Ug(Jt([o,p.pathnameBase])),route:g}),p.pathnameBase!=="/"&&(o=Jt([o,p.pathnameBase]))}return i}function Mg(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Dg(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let i=o[0],l=i.replace(/(.)\/+$/,"$1"),a=o.slice(1);return{params:r.reduce((u,p,g)=>{if(p==="*"){let v=a[g]||"";l=i.slice(0,i.length-v.length).replace(/(.)\/+$/,"$1")}return u[p]=$g(a[g]||"",p),u},{}),pathname:i,pathnameBase:l,pattern:e}}function Dg(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Er(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(l,a)=>(r.push(a),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}function Og(e){try{return decodeURI(e)}catch(t){return Er(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function $g(e,t){try{return decodeURIComponent(e)}catch(n){return Er(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function Lo(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function Ig(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:o=""}=typeof e=="string"?ln(e):e;return{pathname:n?n.startsWith("/")?n:Fg(n,t):t,search:Bg(r),hash:Vg(o)}}function Fg(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function Xl(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function ll(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Js(e,t,n,r){r===void 0&&(r=!1);let o;typeof e=="string"?o=ln(e):(o=ne({},e),X(!o.pathname||!o.pathname.includes("?"),Xl("?","pathname","search",o)),X(!o.pathname||!o.pathname.includes("#"),Xl("#","pathname","hash",o)),X(!o.search||!o.search.includes("#"),Xl("#","search","hash",o)));let i=e===""||o.pathname==="",l=i?"/":o.pathname,a;if(r||l==null)a=n;else{let g=t.length-1;if(l.startsWith("..")){let v=l.split("/");for(;v[0]==="..";)v.shift(),g-=1;o.pathname=v.join("/")}a=g>=0?t[g]:"/"}let s=Ig(o,a),u=l&&l!=="/"&&l.endsWith("/"),p=(i||l===".")&&n.endsWith("/");return!s.pathname.endsWith("/")&&(u||p)&&(s.pathname+="/"),s}const Jt=e=>e.join("/").replace(/\/\/+/g,"/"),Ug=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Bg=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Vg=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;class qs{constructor(t,n,r,o){o===void 0&&(o=!1),this.status=t,this.statusText=n||"",this.internal=o,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function gp(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const vp=["post","put","patch","delete"],Wg=new Set(vp),Hg=["get",...vp],Qg=new Set(Hg),Yg=new Set([301,302,303,307,308]),Gg=new Set([307,308]),Zl={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},Kg={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},bc={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},yp=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,wp=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Xg=!wp,Zg=e=>!!e.hasErrorBoundary;function Jg(e){X(e.routes.length>0,"You must provide a non-empty routes array to createRouter");let t=e.detectErrorBoundary||Zg,n={},r=pp(e.routes,t,void 0,n),o,i=ne({v7_normalizeFormMethod:!1},e.future),l=null,a=new Set,s=null,u=null,p=null,g=e.hydrationData!=null,v=sr(r,e.history.location,e.basename),S=null;if(v==null){let C=It(404,{pathname:e.history.location.pathname}),{matches:E,route:R}=Tc(r);v=E,S={[R.id]:C}}let x=!v.some(C=>C.route.lazy)&&(!v.some(C=>C.route.loader)||e.hydrationData!=null),y,h={historyAction:e.history.action,location:e.history.location,matches:v,initialized:x,navigation:Zl,restoreScrollPosition:e.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:e.hydrationData&&e.hydrationData.loaderData||{},actionData:e.hydrationData&&e.hydrationData.actionData||null,errors:e.hydrationData&&e.hydrationData.errors||S,fetchers:new Map,blockers:new Map},d=Ne.Pop,c=!1,f,w=!1,b=!1,N=[],T=[],_=new Map,Z=0,U=-1,ge=new Map,ve=new Set,ye=new Map,Re=new Map,pe=new Map,ut=!1;function Be(){return l=e.history.listen(C=>{let{action:E,location:R,delta:I}=C;if(ut){ut=!1;return}Er(pe.size===0||I!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let F=rt({currentLocation:h.location,nextLocation:R,historyAction:E});if(F&&I!=null){ut=!0,e.history.go(I*-1),Mt(F,{state:"blocked",location:R,proceed(){Mt(F,{state:"proceeding",proceed:void 0,reset:void 0,location:R}),e.history.go(I)},reset(){Lt(F),$({blockers:new Map(y.state.blockers)})}});return}return M(E,R)}),h.initialized||M(Ne.Pop,h.location),y}function z(){l&&l(),a.clear(),f&&f.abort(),h.fetchers.forEach((C,E)=>q(E)),h.blockers.forEach((C,E)=>Lt(E))}function B(C){return a.add(C),()=>a.delete(C)}function $(C){h=ne({},h,C),a.forEach(E=>E(h))}function re(C,E){var R,I;let F=h.actionData!=null&&h.navigation.formMethod!=null&&Qt(h.navigation.formMethod)&&h.navigation.state==="loading"&&((R=C.state)==null?void 0:R._isRedirect)!==!0,Q;E.actionData?Object.keys(E.actionData).length>0?Q=E.actionData:Q=null:F?Q=h.actionData:Q=null;let Y=E.loaderData?Nc(h.loaderData,E.loaderData,E.matches||[],E.errors):h.loaderData;for(let[V]of pe)Lt(V);let K=c===!0||h.navigation.formMethod!=null&&Qt(h.navigation.formMethod)&&((I=C.state)==null?void 0:I._isRedirect)!==!0;o&&(r=o,o=void 0),$(ne({},E,{actionData:Q,loaderData:Y,historyAction:d,location:C,initialized:!0,navigation:Zl,revalidation:"idle",restoreScrollPosition:Yn(C,E.matches||h.matches),preventScrollReset:K,blockers:new Map(h.blockers)})),w||d===Ne.Pop||(d===Ne.Push?e.history.push(C,C.state):d===Ne.Replace&&e.history.replace(C,C.state)),d=Ne.Pop,c=!1,w=!1,b=!1,N=[],T=[]}async function A(C,E){if(typeof C=="number"){e.history.go(C);return}let{path:R,submission:I,error:F}=Ec(C,i,E),Q=h.location,Y=Eo(h.location,R,E&&E.state);Y=ne({},Y,e.history.encodeLocation(Y));let K=E&&E.replace!=null?E.replace:void 0,V=Ne.Push;K===!0?V=Ne.Replace:K===!1||I!=null&&Qt(I.formMethod)&&I.formAction===h.location.pathname+h.location.search&&(V=Ne.Replace);let de=E&&"preventScrollReset"in E?E.preventScrollReset===!0:void 0,ae=rt({currentLocation:Q,nextLocation:Y,historyAction:V});if(ae){Mt(ae,{state:"blocked",location:Y,proceed(){Mt(ae,{state:"proceeding",proceed:void 0,reset:void 0,location:Y}),A(C,E)},reset(){Lt(ae),$({blockers:new Map(h.blockers)})}});return}return await M(V,Y,{submission:I,pendingError:F,preventScrollReset:de,replace:E&&E.replace})}function D(){if(je(),$({revalidation:"loading"}),h.navigation.state!=="submitting"){if(h.navigation.state==="idle"){M(h.historyAction,h.location,{startUninterruptedRevalidation:!0});return}M(d||h.historyAction,h.navigation.location,{overrideNavigation:h.navigation})}}async function M(C,E,R){f&&f.abort(),f=null,d=C,w=(R&&R.startUninterruptedRevalidation)===!0,zr(h.location,h.matches),c=(R&&R.preventScrollReset)===!0;let I=o||r,F=R&&R.overrideNavigation,Q=sr(I,E,e.basename);if(!Q){let $e=It(404,{pathname:E.pathname}),{matches:Ve,route:Et}=Tc(I);W(),re(E,{matches:Ve,loaderData:{},errors:{[Et.id]:$e}});return}if(r0(h.location,E)&&!(R&&R.submission&&Qt(R.submission.formMethod))){re(E,{matches:Q});return}f=new AbortController;let Y=Hr(e.history,E,f.signal,R&&R.submission),K,V;if(R&&R.pendingError)V={[ur(Q).route.id]:R.pendingError};else if(R&&R.submission&&Qt(R.submission.formMethod)){let $e=await H(Y,E,R.submission,Q,{replace:R.replace});if($e.shortCircuited)return;K=$e.pendingActionData,V=$e.pendingActionError,F=ne({state:"loading",location:E},R.submission),Y=new Request(Y.url,{signal:Y.signal})}let{shortCircuited:de,loaderData:ae,errors:bt}=await k(Y,E,Q,F,R&&R.submission,R&&R.fetcherSubmission,R&&R.replace,K,V);de||(f=null,re(E,ne({matches:Q},K?{actionData:K}:{},{loaderData:ae,errors:bt})))}async function H(C,E,R,I,F){je();let Q=ne({state:"submitting",location:E},R);$({navigation:Q});let Y,K=Ka(I,E);if(!K.route.action&&!K.route.lazy)Y={type:Le.error,error:It(405,{method:C.method,pathname:E.pathname,routeId:K.route.id})};else if(Y=await Wr("action",C,K,I,n,t,y.basename),C.signal.aborted)return{shortCircuited:!0};if(vr(Y)){let V;return F&&F.replace!=null?V=F.replace:V=Y.location===h.location.pathname+h.location.search,await te(h,Y,{submission:R,replace:V}),{shortCircuited:!0}}if(io(Y)){let V=ur(I,K.route.id);return(F&&F.replace)!==!0&&(d=Ne.Push),{pendingActionData:{},pendingActionError:{[V.route.id]:Y.error}}}if(On(Y))throw It(400,{type:"defer-action"});return{pendingActionData:{[K.route.id]:Y.data}}}async function k(C,E,R,I,F,Q,Y,K,V){let de=I;de||(de=ne({state:"loading",location:E,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},F));let ae=F||Q?F||Q:de.formMethod&&de.formAction&&de.formData&&de.formEncType?{formMethod:de.formMethod,formAction:de.formAction,formData:de.formData,formEncType:de.formEncType}:void 0,bt=o||r,[$e,Ve]=Rc(e.history,h,R,ae,E,b,N,T,ye,bt,e.basename,K,V);if(W(Ye=>!(R&&R.some(Rt=>Rt.route.id===Ye))||$e&&$e.some(Rt=>Rt.route.id===Ye)),$e.length===0&&Ve.length===0)return re(E,ne({matches:R,loaderData:{},errors:V||null},K?{actionData:K}:{})),{shortCircuited:!0};if(!w){Ve.forEach(Rt=>{let Tn=h.fetchers.get(Rt.key),Mr={state:"loading",data:Tn&&Tn.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};h.fetchers.set(Rt.key,Mr)});let Ye=K||h.actionData;$(ne({navigation:de},Ye?Object.keys(Ye).length===0?{actionData:null}:{actionData:Ye}:{},Ve.length>0?{fetchers:new Map(h.fetchers)}:{}))}U=++Z,Ve.forEach(Ye=>_.set(Ye.key,f));let{results:Et,loaderResults:Ar,fetcherResults:xl}=await G(h.matches,R,$e,Ve,C);if(C.signal.aborted)return{shortCircuited:!0};Ve.forEach(Ye=>_.delete(Ye.key));let Lr=zc(Et);if(Lr)return await te(h,Lr,{replace:Y}),{shortCircuited:!0};let{loaderData:Gn,errors:kl}=Pc(h,R,$e,Ar,V,Ve,xl,Re);Re.forEach((Ye,Rt)=>{Ye.subscribe(Tn=>{(Tn||Ye.done)&&Re.delete(Rt)})}),ze();let Sl=an(U);return ne({loaderData:Gn,errors:kl},Sl||Ve.length>0?{fetchers:new Map(h.fetchers)}:{})}function J(C){return h.fetchers.get(C)||Kg}function L(C,E,R,I){if(Xg)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");_.has(C)&&_e(C);let Q=sr(o||r,R,e.basename);if(!Q){Oe(C,E,It(404,{pathname:R}));return}let{path:Y,submission:K}=Ec(R,i,I,!0),V=Ka(Q,Y);if(c=(I&&I.preventScrollReset)===!0,K&&Qt(K.formMethod)){we(C,E,Y,V,Q,K);return}ye.set(C,{routeId:E,path:Y}),le(C,E,Y,V,Q,K)}async function we(C,E,R,I,F,Q){if(je(),ye.delete(C),!I.route.action&&!I.route.lazy){let Wt=It(405,{method:Q.formMethod,pathname:R,routeId:E});Oe(C,E,Wt);return}let Y=h.fetchers.get(C),K=ne({state:"submitting"},Q,{data:Y&&Y.data," _hasFetcherDoneAnything ":!0});h.fetchers.set(C,K),$({fetchers:new Map(h.fetchers)});let V=new AbortController,de=Hr(e.history,R,V.signal,Q);_.set(C,V);let ae=await Wr("action",de,I,F,n,t,y.basename);if(de.signal.aborted){_.get(C)===V&&_.delete(C);return}if(vr(ae)){_.delete(C),ve.add(C);let Wt=ne({state:"loading"},Q,{data:void 0," _hasFetcherDoneAnything ":!0});return h.fetchers.set(C,Wt),$({fetchers:new Map(h.fetchers)}),te(h,ae,{submission:Q,isFetchActionRedirect:!0})}if(io(ae)){Oe(C,E,ae.error);return}if(On(ae))throw It(400,{type:"defer-action"});let bt=h.navigation.location||h.location,$e=Hr(e.history,bt,V.signal),Ve=o||r,Et=h.navigation.state!=="idle"?sr(Ve,h.navigation.location,e.basename):h.matches;X(Et,"Didn't find any matches after fetcher action");let Ar=++Z;ge.set(C,Ar);let xl=ne({state:"loading",data:ae.data},Q,{" _hasFetcherDoneAnything ":!0});h.fetchers.set(C,xl);let[Lr,Gn]=Rc(e.history,h,Et,Q,bt,b,N,T,ye,Ve,e.basename,{[I.route.id]:ae.data},void 0);Gn.filter(Wt=>Wt.key!==C).forEach(Wt=>{let Cl=Wt.key,du=h.fetchers.get(Cl),Yp={state:"loading",data:du&&du.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};h.fetchers.set(Cl,Yp),_.set(Cl,V)}),$({fetchers:new Map(h.fetchers)});let{results:kl,loaderResults:Sl,fetcherResults:Ye}=await G(h.matches,Et,Lr,Gn,$e);if(V.signal.aborted)return;ge.delete(C),_.delete(C),Gn.forEach(Wt=>_.delete(Wt.key));let Rt=zc(kl);if(Rt)return te(h,Rt);let{loaderData:Tn,errors:Mr}=Pc(h,h.matches,Lr,Sl,void 0,Gn,Ye,Re),Hp={state:"idle",data:ae.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};h.fetchers.set(C,Hp);let Qp=an(Ar);h.navigation.state==="loading"&&Ar>U?(X(d,"Expected pending action"),f&&f.abort(),re(h.navigation.location,{matches:Et,loaderData:Tn,errors:Mr,fetchers:new Map(h.fetchers)})):($(ne({errors:Mr,loaderData:Nc(h.loaderData,Tn,Et,Mr)},Qp?{fetchers:new Map(h.fetchers)}:{})),b=!1)}async function le(C,E,R,I,F,Q){let Y=h.fetchers.get(C),K=ne({state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},Q,{data:Y&&Y.data," _hasFetcherDoneAnything ":!0});h.fetchers.set(C,K),$({fetchers:new Map(h.fetchers)});let V=new AbortController,de=Hr(e.history,R,V.signal);_.set(C,V);let ae=await Wr("loader",de,I,F,n,t,y.basename);if(On(ae)&&(ae=await Cp(ae,de.signal,!0)||ae),_.get(C)===V&&_.delete(C),de.signal.aborted)return;if(vr(ae)){await te(h,ae);return}if(io(ae)){let $e=ur(h.matches,E);h.fetchers.delete(C),$({fetchers:new Map(h.fetchers),errors:{[$e.route.id]:ae.error}});return}X(!On(ae),"Unhandled fetcher deferred data");let bt={state:"idle",data:ae.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};h.fetchers.set(C,bt),$({fetchers:new Map(h.fetchers)})}async function te(C,E,R){var I;let{submission:F,replace:Q,isFetchActionRedirect:Y}=R===void 0?{}:R;E.revalidate&&(b=!0);let K=Eo(C.location,E.location,ne({_isRedirect:!0},Y?{_isFetchActionRedirect:!0}:{}));if(X(K,"Expected a location on the redirect navigation"),yp.test(E.location)&&wp&&typeof((I=window)==null?void 0:I.location)<"u"){let Ve=e.history.createURL(E.location),Et=Lo(Ve.pathname,e.basename||"/")==null;if(window.location.origin!==Ve.origin||Et){Q?window.location.replace(E.location):window.location.assign(E.location);return}}f=null;let V=Q===!0?Ne.Replace:Ne.Push,{formMethod:de,formAction:ae,formEncType:bt,formData:$e}=C.navigation;!F&&de&&ae&&$e&&bt&&(F={formMethod:de,formAction:ae,formEncType:bt,formData:$e}),Gg.has(E.status)&&F&&Qt(F.formMethod)?await M(V,K,{submission:ne({},F,{formAction:E.location}),preventScrollReset:c}):Y?await M(V,K,{overrideNavigation:{state:"loading",location:K,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},fetcherSubmission:F,preventScrollReset:c}):await M(V,K,{overrideNavigation:{state:"loading",location:K,formMethod:F?F.formMethod:void 0,formAction:F?F.formAction:void 0,formEncType:F?F.formEncType:void 0,formData:F?F.formData:void 0},preventScrollReset:c})}async function G(C,E,R,I,F){let Q=await Promise.all([...R.map(V=>Wr("loader",F,V,E,n,t,y.basename)),...I.map(V=>V.matches&&V.match?Wr("loader",Hr(e.history,V.path,F.signal),V.match,V.matches,n,t,y.basename):{type:Le.error,error:It(404,{pathname:V.path})})]),Y=Q.slice(0,R.length),K=Q.slice(R.length);return await Promise.all([Ac(C,R,Y,F.signal,!1,h.loaderData),Ac(C,I.map(V=>V.match),K,F.signal,!0)]),{results:Q,loaderResults:Y,fetcherResults:K}}function je(){b=!0,N.push(...W()),ye.forEach((C,E)=>{_.has(E)&&(T.push(E),_e(E))})}function Oe(C,E,R){let I=ur(h.matches,E);q(C),$({errors:{[I.route.id]:R},fetchers:new Map(h.fetchers)})}function q(C){_.has(C)&&_e(C),ye.delete(C),ge.delete(C),ve.delete(C),h.fetchers.delete(C)}function _e(C){let E=_.get(C);X(E,"Expected fetch controller: "+C),E.abort(),_.delete(C)}function oe(C){for(let E of C){let I={state:"idle",data:J(E).data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};h.fetchers.set(E,I)}}function ze(){let C=[];for(let E of ve){let R=h.fetchers.get(E);X(R,"Expected fetcher: "+E),R.state==="loading"&&(ve.delete(E),C.push(E))}oe(C)}function an(C){let E=[];for(let[R,I]of ge)if(I<C){let F=h.fetchers.get(R);X(F,"Expected fetcher: "+R),F.state==="loading"&&(_e(R),ge.delete(R),E.push(R))}return oe(E),E.length>0}function Ae(C,E){let R=h.blockers.get(C)||bc;return pe.get(C)!==E&&pe.set(C,E),R}function Lt(C){h.blockers.delete(C),pe.delete(C)}function Mt(C,E){let R=h.blockers.get(C)||bc;X(R.state==="unblocked"&&E.state==="blocked"||R.state==="blocked"&&E.state==="blocked"||R.state==="blocked"&&E.state==="proceeding"||R.state==="blocked"&&E.state==="unblocked"||R.state==="proceeding"&&E.state==="unblocked","Invalid blocker state transition: "+R.state+" -> "+E.state),h.blockers.set(C,E),$({blockers:new Map(h.blockers)})}function rt(C){let{currentLocation:E,nextLocation:R,historyAction:I}=C;if(pe.size===0)return;pe.size>1&&Er(!1,"A router only supports one blocker at a time");let F=Array.from(pe.entries()),[Q,Y]=F[F.length-1],K=h.blockers.get(Q);if(!(K&&K.state==="proceeding")&&Y({currentLocation:E,nextLocation:R,historyAction:I}))return Q}function W(C){let E=[];return Re.forEach((R,I)=>{(!C||C(I))&&(R.cancel(),E.push(I),Re.delete(I))}),E}function ke(C,E,R){if(s=C,p=E,u=R||(I=>I.key),!g&&h.navigation===Zl){g=!0;let I=Yn(h.location,h.matches);I!=null&&$({restoreScrollPosition:I})}return()=>{s=null,p=null,u=null}}function zr(C,E){if(s&&u&&p){let R=E.map(F=>Lc(F,h.loaderData)),I=u(C,R)||C.key;s[I]=p()}}function Yn(C,E){if(s&&u&&p){let R=E.map(Q=>Lc(Q,h.loaderData)),I=u(C,R)||C.key,F=s[I];if(typeof F=="number")return F}return null}function Dt(C){o=C}return y={get basename(){return e.basename},get state(){return h},get routes(){return r},initialize:Be,subscribe:B,enableScrollRestoration:ke,navigate:A,fetch:L,revalidate:D,createHref:C=>e.history.createHref(C),encodeLocation:C=>e.history.encodeLocation(C),getFetcher:J,deleteFetcher:q,dispose:z,getBlocker:Ae,deleteBlocker:Lt,_internalFetchControllers:_,_internalActiveDeferreds:Re,_internalSetRoutes:Dt},y}function qg(e){return e!=null&&"formData"in e}function Ec(e,t,n,r){r===void 0&&(r=!1);let o=typeof e=="string"?e:rn(e);if(!n||!qg(n))return{path:o};if(n.formMethod&&!l0(n.formMethod))return{path:o,error:It(405,{method:n.formMethod})};let i;if(n.formData){let s=n.formMethod||"get";if(i={formMethod:t.v7_normalizeFormMethod?s.toUpperCase():s.toLowerCase(),formAction:Sp(o),formEncType:n&&n.formEncType||"application/x-www-form-urlencoded",formData:n.formData},Qt(i.formMethod))return{path:o,submission:i}}let l=ln(o),a=kp(n.formData);return r&&l.search&&bp(l.search)&&a.append("index",""),l.search="?"+a,{path:rn(l),submission:i}}function e0(e,t){let n=e;if(t){let r=e.findIndex(o=>o.route.id===t);r>=0&&(n=e.slice(0,r))}return n}function Rc(e,t,n,r,o,i,l,a,s,u,p,g,v){let S=v?Object.values(v)[0]:g?Object.values(g)[0]:void 0,x=e.createURL(t.location),y=e.createURL(o),h=i||x.toString()===y.toString()||x.search!==y.search,d=v?Object.keys(v)[0]:void 0,f=e0(n,d).filter((b,N)=>{if(b.route.lazy)return!0;if(b.route.loader==null)return!1;if(t0(t.loaderData,t.matches[N],b)||l.some(Z=>Z===b.route.id))return!0;let T=t.matches[N],_=b;return jc(b,ne({currentUrl:x,currentParams:T.params,nextUrl:y,nextParams:_.params},r,{actionResult:S,defaultShouldRevalidate:h||xp(T,_)}))}),w=[];return s.forEach((b,N)=>{if(!n.some(U=>U.route.id===b.routeId))return;let T=sr(u,b.path,p);if(!T){w.push(ne({key:N},b,{matches:null,match:null}));return}let _=Ka(T,b.path);if(a.includes(N)){w.push(ne({key:N,matches:T,match:_},b));return}jc(_,ne({currentUrl:x,currentParams:t.matches[t.matches.length-1].params,nextUrl:y,nextParams:n[n.length-1].params},r,{actionResult:S,defaultShouldRevalidate:h}))&&w.push(ne({key:N,matches:T,match:_},b))}),[f,w]}function t0(e,t,n){let r=!t||n.route.id!==t.route.id,o=e[n.route.id]===void 0;return r||o}function xp(e,t){let n=e.route.path;return e.pathname!==t.pathname||n!=null&&n.endsWith("*")&&e.params["*"]!==t.params["*"]}function jc(e,t){if(e.route.shouldRevalidate){let n=e.route.shouldRevalidate(t);if(typeof n=="boolean")return n}return t.defaultShouldRevalidate}async function _c(e,t,n){if(!e.lazy)return;let r=await e.lazy();if(!e.lazy)return;let o=n[e.id];X(o,"No route found in manifest");let i={};for(let l in r){let s=o[l]!==void 0&&l!=="hasErrorBoundary";Er(!s,'Route "'+o.id+'" has a static property "'+l+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+l+'" will be ignored.')),!s&&!Cg.has(l)&&(i[l]=r[l])}Object.assign(o,i),Object.assign(o,{hasErrorBoundary:t(ne({},o)),lazy:void 0})}async function Wr(e,t,n,r,o,i,l,a,s,u){l===void 0&&(l="/"),a===void 0&&(a=!1),s===void 0&&(s=!1);let p,g,v,S=h=>{let d,c=new Promise((f,w)=>d=w);return v=()=>d(),t.signal.addEventListener("abort",v),Promise.race([h({request:t,params:n.params,context:u}),c])};try{let h=n.route[e];if(n.route.lazy)if(h)g=(await Promise.all([S(h),_c(n.route,i,o)]))[0];else if(await _c(n.route,i,o),h=n.route[e],h)g=await S(h);else{if(e==="action")throw It(405,{method:t.method,pathname:new URL(t.url).pathname,routeId:n.route.id});return{type:Le.data,data:void 0}}else X(h,"Could not find the "+e+' to run on the "'+n.route.id+'" route'),g=await S(h);X(g!==void 0,"You defined "+(e==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+e+"` ")+"function. Please return a value or `null`.")}catch(h){p=Le.error,g=h}finally{v&&t.signal.removeEventListener("abort",v)}if(i0(g)){let h=g.status;if(Yg.has(h)){let f=g.headers.get("Location");if(X(f,"Redirects returned/thrown from loaders/actions must have a Location header"),yp.test(f)){if(!a){let w=new URL(t.url),b=f.startsWith("//")?new URL(w.protocol+f):new URL(f),N=Lo(b.pathname,l)!=null;b.origin===w.origin&&N&&(f=b.pathname+b.search+b.hash)}}else{let w=r.slice(0,r.indexOf(n)+1),b=ll(w).map(T=>T.pathnameBase),N=Js(f,b,new URL(t.url).pathname);if(X(rn(N),"Unable to resolve redirect location: "+f),l){let T=N.pathname;N.pathname=T==="/"?l:Jt([l,T])}f=rn(N)}if(a)throw g.headers.set("Location",f),g;return{type:Le.redirect,status:h,location:f,revalidate:g.headers.get("X-Remix-Revalidate")!==null}}if(s)throw{type:p||Le.data,response:g};let d,c=g.headers.get("Content-Type");return c&&/\bapplication\/json\b/.test(c)?d=await g.json():d=await g.text(),p===Le.error?{type:p,error:new qs(h,g.statusText,d),headers:g.headers}:{type:Le.data,data:d,statusCode:g.status,headers:g.headers}}if(p===Le.error)return{type:p,error:g};if(o0(g)){var x,y;return{type:Le.deferred,deferredData:g,statusCode:(x=g.init)==null?void 0:x.status,headers:((y=g.init)==null?void 0:y.headers)&&new Headers(g.init.headers)}}return{type:Le.data,data:g}}function Hr(e,t,n,r){let o=e.createURL(Sp(t)).toString(),i={signal:n};if(r&&Qt(r.formMethod)){let{formMethod:l,formEncType:a,formData:s}=r;i.method=l.toUpperCase(),i.body=a==="application/x-www-form-urlencoded"?kp(s):s}return new Request(o,i)}function kp(e){let t=new URLSearchParams;for(let[n,r]of e.entries())t.append(n,r instanceof File?r.name:r);return t}function n0(e,t,n,r,o){let i={},l=null,a,s=!1,u={};return n.forEach((p,g)=>{let v=t[g].route.id;if(X(!vr(p),"Cannot handle redirect results in processLoaderData"),io(p)){let S=ur(e,v),x=p.error;r&&(x=Object.values(r)[0],r=void 0),l=l||{},l[S.route.id]==null&&(l[S.route.id]=x),i[v]=void 0,s||(s=!0,a=gp(p.error)?p.error.status:500),p.headers&&(u[v]=p.headers)}else On(p)?(o.set(v,p.deferredData),i[v]=p.deferredData.data):i[v]=p.data,p.statusCode!=null&&p.statusCode!==200&&!s&&(a=p.statusCode),p.headers&&(u[v]=p.headers)}),r&&(l=r,i[Object.keys(r)[0]]=void 0),{loaderData:i,errors:l,statusCode:a||200,loaderHeaders:u}}function Pc(e,t,n,r,o,i,l,a){let{loaderData:s,errors:u}=n0(t,n,r,o,a);for(let p=0;p<i.length;p++){let{key:g,match:v}=i[p];X(l!==void 0&&l[p]!==void 0,"Did not find corresponding fetcher result");let S=l[p];if(io(S)){let x=ur(e.matches,v==null?void 0:v.route.id);u&&u[x.route.id]||(u=ne({},u,{[x.route.id]:S.error})),e.fetchers.delete(g)}else if(vr(S))X(!1,"Unhandled fetcher revalidation redirect");else if(On(S))X(!1,"Unhandled fetcher deferred data");else{let x={state:"idle",data:S.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};e.fetchers.set(g,x)}}return{loaderData:s,errors:u}}function Nc(e,t,n,r){let o=ne({},t);for(let i of n){let l=i.route.id;if(t.hasOwnProperty(l)?t[l]!==void 0&&(o[l]=t[l]):e[l]!==void 0&&i.route.loader&&(o[l]=e[l]),r&&r.hasOwnProperty(l))break}return o}function ur(e,t){return(t?e.slice(0,e.findIndex(r=>r.route.id===t)+1):[...e]).reverse().find(r=>r.route.hasErrorBoundary===!0)||e[0]}function Tc(e){let t=e.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:t}],route:t}}function It(e,t){let{pathname:n,routeId:r,method:o,type:i}=t===void 0?{}:t,l="Unknown Server Error",a="Unknown @remix-run/router error";return e===400?(l="Bad Request",o&&n&&r?a="You made a "+o+' request to "'+n+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":i==="defer-action"&&(a="defer() is not supported in actions")):e===403?(l="Forbidden",a='Route "'+r+'" does not match URL "'+n+'"'):e===404?(l="Not Found",a='No route matches URL "'+n+'"'):e===405&&(l="Method Not Allowed",o&&n&&r?a="You made a "+o.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":o&&(a='Invalid request method "'+o.toUpperCase()+'"')),new qs(e||500,l,new Error(a),!0)}function zc(e){for(let t=e.length-1;t>=0;t--){let n=e[t];if(vr(n))return n}}function Sp(e){let t=typeof e=="string"?ln(e):e;return rn(ne({},t,{hash:""}))}function r0(e,t){return e.pathname===t.pathname&&e.search===t.search&&e.hash!==t.hash}function On(e){return e.type===Le.deferred}function io(e){return e.type===Le.error}function vr(e){return(e&&e.type)===Le.redirect}function o0(e){let t=e;return t&&typeof t=="object"&&typeof t.data=="object"&&typeof t.subscribe=="function"&&typeof t.cancel=="function"&&typeof t.resolveData=="function"}function i0(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.headers=="object"&&typeof e.body<"u"}function l0(e){return Qg.has(e.toLowerCase())}function Qt(e){return Wg.has(e.toLowerCase())}async function Ac(e,t,n,r,o,i){for(let l=0;l<n.length;l++){let a=n[l],s=t[l];if(!s)continue;let u=e.find(g=>g.route.id===s.route.id),p=u!=null&&!xp(u,s)&&(i&&i[s.route.id])!==void 0;On(a)&&(o||p)&&await Cp(a,r,o).then(g=>{g&&(n[l]=g||n[l])})}}async function Cp(e,t,n){if(n===void 0&&(n=!1),!await e.deferredData.resolveData(t)){if(n)try{return{type:Le.data,data:e.deferredData.unwrappedData}}catch(o){return{type:Le.error,error:o}}return{type:Le.data,data:e.deferredData.data}}}function bp(e){return new URLSearchParams(e).getAll("index").some(t=>t==="")}function Lc(e,t){let{route:n,pathname:r,params:o}=e;return{id:n.id,pathname:r,params:o,data:t[n.id],handle:n.handle}}function Ka(e,t){let n=typeof t=="string"?ln(t).search:t.search;if(e[e.length-1].route.index&&bp(n||""))return e[e.length-1];let r=ll(e);return r[r.length-1]}/**
 * React Router v6.10.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function a0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}const s0=typeof Object.is=="function"?Object.is:a0,{useState:u0,useEffect:c0,useLayoutEffect:d0,useDebugValue:f0}=ta;function p0(e,t,n){const r=t(),[{inst:o},i]=u0({inst:{value:r,getSnapshot:t}});return d0(()=>{o.value=r,o.getSnapshot=t,Jl(o)&&i({inst:o})},[e,r,t]),c0(()=>(Jl(o)&&i({inst:o}),e(()=>{Jl(o)&&i({inst:o})})),[e]),f0(r),r}function Jl(e){const t=e.getSnapshot,n=e.value;try{const r=t();return!s0(n,r)}catch{return!0}}function h0(e,t,n){return t()}const m0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",g0=!m0,v0=g0?h0:p0,y0="useSyncExternalStore"in ta?(e=>e.useSyncExternalStore)(ta):v0,eu=P.createContext(null),al=P.createContext(null),Tr=P.createContext(null),sl=P.createContext(null),Nn=P.createContext({outlet:null,matches:[]}),Ep=P.createContext(null);function Xa(){return Xa=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Xa.apply(this,arguments)}function w0(e,t){let{relative:n}=t===void 0?{}:t;Mo()||X(!1);let{basename:r,navigator:o}=P.useContext(Tr),{hash:i,pathname:l,search:a}=tu(e,{relative:n}),s=l;return r!=="/"&&(s=l==="/"?r:Jt([r,l])),o.createHref({pathname:s,search:a,hash:i})}function Mo(){return P.useContext(sl)!=null}function Do(){return Mo()||X(!1),P.useContext(sl).location}function x0(){Mo()||X(!1);let{basename:e,navigator:t}=P.useContext(Tr),{matches:n}=P.useContext(Nn),{pathname:r}=Do(),o=JSON.stringify(ll(n).map(a=>a.pathnameBase)),i=P.useRef(!1);return P.useEffect(()=>{i.current=!0}),P.useCallback(function(a,s){if(s===void 0&&(s={}),!i.current)return;if(typeof a=="number"){t.go(a);return}let u=Js(a,JSON.parse(o),r,s.relative==="path");e!=="/"&&(u.pathname=u.pathname==="/"?e:Jt([e,u.pathname])),(s.replace?t.replace:t.push)(u,s.state,s)},[e,t,o,r])}const k0=P.createContext(null);function S0(e){let t=P.useContext(Nn).outlet;return t&&P.createElement(k0.Provider,{value:e},t)}function C0(){let{matches:e}=P.useContext(Nn),t=e[e.length-1];return t?t.params:{}}function tu(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=P.useContext(Nn),{pathname:o}=Do(),i=JSON.stringify(ll(r).map(l=>l.pathnameBase));return P.useMemo(()=>Js(e,JSON.parse(i),o,n==="path"),[e,i,o,n])}function b0(e,t){Mo()||X(!1);let{navigator:n}=P.useContext(Tr),r=P.useContext(al),{matches:o}=P.useContext(Nn),i=o[o.length-1],l=i?i.params:{};i&&i.pathname;let a=i?i.pathnameBase:"/";i&&i.route;let s=Do(),u;if(t){var p;let y=typeof t=="string"?ln(t):t;a==="/"||(p=y.pathname)!=null&&p.startsWith(a)||X(!1),u=y}else u=s;let g=u.pathname||"/",v=a==="/"?g:g.slice(a.length)||"/",S=sr(e,{pathname:v}),x=_0(S&&S.map(y=>Object.assign({},y,{params:Object.assign({},l,y.params),pathname:Jt([a,n.encodeLocation?n.encodeLocation(y.pathname).pathname:y.pathname]),pathnameBase:y.pathnameBase==="/"?a:Jt([a,n.encodeLocation?n.encodeLocation(y.pathnameBase).pathname:y.pathnameBase])})),o,r||void 0);return t&&x?P.createElement(sl.Provider,{value:{location:Xa({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Ne.Pop}},x):x}function E0(){let e=z0(),t=gp(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},i=null;return P.createElement(P.Fragment,null,P.createElement("h2",null,"Unexpected Application Error!"),P.createElement("h3",{style:{fontStyle:"italic"}},t),n?P.createElement("pre",{style:o},n):null,i)}class R0 extends P.Component{constructor(t){super(t),this.state={location:t.location,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location?{error:t.error,location:t.location}:{error:t.error||n.error,location:n.location}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?P.createElement(Nn.Provider,{value:this.props.routeContext},P.createElement(Ep.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function j0(e){let{routeContext:t,match:n,children:r}=e,o=P.useContext(eu);return o&&o.static&&o.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),P.createElement(Nn.Provider,{value:t},r)}function _0(e,t,n){if(t===void 0&&(t=[]),e==null)if(n!=null&&n.errors)e=n.matches;else return null;let r=e,o=n==null?void 0:n.errors;if(o!=null){let i=r.findIndex(l=>l.route.id&&(o==null?void 0:o[l.route.id]));i>=0||X(!1),r=r.slice(0,Math.min(r.length,i+1))}return r.reduceRight((i,l,a)=>{let s=l.route.id?o==null?void 0:o[l.route.id]:null,u=null;n&&(l.route.ErrorBoundary?u=P.createElement(l.route.ErrorBoundary,null):l.route.errorElement?u=l.route.errorElement:u=P.createElement(E0,null));let p=t.concat(r.slice(0,a+1)),g=()=>{let v=i;return s?v=u:l.route.Component?v=P.createElement(l.route.Component,null):l.route.element&&(v=l.route.element),P.createElement(j0,{match:l,routeContext:{outlet:i,matches:p},children:v})};return n&&(l.route.ErrorBoundary||l.route.errorElement||a===0)?P.createElement(R0,{location:n.location,component:u,error:s,children:g(),routeContext:{outlet:null,matches:p}}):g()},null)}var Mc;(function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator"})(Mc||(Mc={}));var Ui;(function(e){e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator"})(Ui||(Ui={}));function P0(e){let t=P.useContext(al);return t||X(!1),t}function N0(e){let t=P.useContext(Nn);return t||X(!1),t}function T0(e){let t=N0(),n=t.matches[t.matches.length-1];return n.route.id||X(!1),n.route.id}function z0(){var e;let t=P.useContext(Ep),n=P0(Ui.UseRouteError),r=T0(Ui.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function A0(e){let{fallbackElement:t,router:n}=e,r=P.useCallback(()=>n.state,[n]),o=y0(n.subscribe,r,r),i=P.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:s=>n.navigate(s),push:(s,u,p)=>n.navigate(s,{state:u,preventScrollReset:p==null?void 0:p.preventScrollReset}),replace:(s,u,p)=>n.navigate(s,{replace:!0,state:u,preventScrollReset:p==null?void 0:p.preventScrollReset})}),[n]),l=n.basename||"/",a=P.useMemo(()=>({router:n,navigator:i,static:!1,basename:l}),[n,i,l]);return P.createElement(P.Fragment,null,P.createElement(eu.Provider,{value:a},P.createElement(al.Provider,{value:o},P.createElement(M0,{basename:n.basename,location:n.state.location,navigationType:n.state.historyAction,navigator:i},n.state.initialized?P.createElement(D0,null):t))),null)}function nu(e){return S0(e.context)}function L0(e){X(!1)}function M0(e){let{basename:t="/",children:n=null,location:r,navigationType:o=Ne.Pop,navigator:i,static:l=!1}=e;Mo()&&X(!1);let a=t.replace(/^\/*/,"/"),s=P.useMemo(()=>({basename:a,navigator:i,static:l}),[a,i,l]);typeof r=="string"&&(r=ln(r));let{pathname:u="/",search:p="",hash:g="",state:v=null,key:S="default"}=r,x=P.useMemo(()=>{let y=Lo(u,a);return y==null?null:{location:{pathname:y,search:p,hash:g,state:v,key:S},navigationType:o}},[a,u,p,g,v,S,o]);return x==null?null:P.createElement(Tr.Provider,{value:s},P.createElement(sl.Provider,{children:n,value:x}))}function D0(e){let{children:t,location:n}=e,r=P.useContext(eu),o=r&&!t?r.router.routes:Za(t);return b0(o,n)}var Dc;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(Dc||(Dc={}));new Promise(()=>{});function Za(e,t){t===void 0&&(t=[]);let n=[];return P.Children.forEach(e,(r,o)=>{if(!P.isValidElement(r))return;let i=[...t,o];if(r.type===P.Fragment){n.push.apply(n,Za(r.props.children,i));return}r.type!==L0&&X(!1),!r.props.index||!r.props.children||X(!1);let l={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(l.children=Za(r.props.children,i)),n.push(l)}),n}function O0(e){return!!e.ErrorBoundary||!!e.errorElement}/**
 * React Router DOM v6.10.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ro(){return Ro=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ro.apply(this,arguments)}function Rp(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function $0(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function I0(e,t){return e.button===0&&(!t||t==="_self")&&!$0(e)}const F0=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],U0=["aria-current","caseSensitive","className","end","style","to","children"];function B0(e,t){return Jg({basename:t==null?void 0:t.basename,future:t==null?void 0:t.future,history:xg({window:t==null?void 0:t.window}),hydrationData:(t==null?void 0:t.hydrationData)||V0(),routes:e,detectErrorBoundary:O0}).initialize()}function V0(){var e;let t=(e=window)==null?void 0:e.__staticRouterHydrationData;return t&&t.errors&&(t=Ro({},t,{errors:W0(t.errors)})),t}function W0(e){if(!e)return null;let t=Object.entries(e),n={};for(let[r,o]of t)if(o&&o.__type==="RouteErrorResponse")n[r]=new qs(o.status,o.statusText,o.data,o.internal===!0);else if(o&&o.__type==="Error"){let i=new Error(o.message);i.stack="",n[r]=i}else n[r]=o;return n}const H0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Q0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,jo=P.forwardRef(function(t,n){let{onClick:r,relative:o,reloadDocument:i,replace:l,state:a,target:s,to:u,preventScrollReset:p}=t,g=Rp(t,F0),{basename:v}=P.useContext(Tr),S,x=!1;if(typeof u=="string"&&Q0.test(u)&&(S=u,H0)){let c=new URL(window.location.href),f=u.startsWith("//")?new URL(c.protocol+u):new URL(u),w=Lo(f.pathname,v);f.origin===c.origin&&w!=null?u=w+f.search+f.hash:x=!0}let y=w0(u,{relative:o}),h=G0(u,{replace:l,state:a,target:s,preventScrollReset:p,relative:o});function d(c){r&&r(c),c.defaultPrevented||h(c)}return P.createElement("a",Ro({},g,{href:S||y,onClick:x||i?r:d,ref:n,target:s}))}),Y0=P.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:o=!1,className:i="",end:l=!1,style:a,to:s,children:u}=t,p=Rp(t,U0),g=tu(s,{relative:p.relative}),v=Do(),S=P.useContext(al),{navigator:x}=P.useContext(Tr),y=x.encodeLocation?x.encodeLocation(g).pathname:g.pathname,h=v.pathname,d=S&&S.navigation&&S.navigation.location?S.navigation.location.pathname:null;o||(h=h.toLowerCase(),d=d?d.toLowerCase():null,y=y.toLowerCase());let c=h===y||!l&&h.startsWith(y)&&h.charAt(y.length)==="/",f=d!=null&&(d===y||!l&&d.startsWith(y)&&d.charAt(y.length)==="/"),w=c?r:void 0,b;typeof i=="function"?b=i({isActive:c,isPending:f}):b=[i,c?"active":null,f?"pending":null].filter(Boolean).join(" ");let N=typeof a=="function"?a({isActive:c,isPending:f}):a;return P.createElement(jo,Ro({},p,{"aria-current":w,className:b,ref:n,style:N,to:s}),typeof u=="function"?u({isActive:c,isPending:f}):u)});var Oc;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})(Oc||(Oc={}));var $c;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})($c||($c={}));function G0(e,t){let{target:n,replace:r,state:o,preventScrollReset:i,relative:l}=t===void 0?{}:t,a=x0(),s=Do(),u=tu(e,{relative:l});return P.useCallback(p=>{if(I0(p,n)){p.preventDefault();let g=r!==void 0?r:rn(s)===rn(u);a(e,{replace:g,state:o,preventScrollReset:i,relative:l})}},[s,a,u,r,o,n,e,i,l])}var jp={exports:{}},ue={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ue=typeof Symbol=="function"&&Symbol.for,ru=Ue?Symbol.for("react.element"):60103,ou=Ue?Symbol.for("react.portal"):60106,ul=Ue?Symbol.for("react.fragment"):60107,cl=Ue?Symbol.for("react.strict_mode"):60108,dl=Ue?Symbol.for("react.profiler"):60114,fl=Ue?Symbol.for("react.provider"):60109,pl=Ue?Symbol.for("react.context"):60110,iu=Ue?Symbol.for("react.async_mode"):60111,hl=Ue?Symbol.for("react.concurrent_mode"):60111,ml=Ue?Symbol.for("react.forward_ref"):60112,gl=Ue?Symbol.for("react.suspense"):60113,K0=Ue?Symbol.for("react.suspense_list"):60120,vl=Ue?Symbol.for("react.memo"):60115,yl=Ue?Symbol.for("react.lazy"):60116,X0=Ue?Symbol.for("react.block"):60121,Z0=Ue?Symbol.for("react.fundamental"):60117,J0=Ue?Symbol.for("react.responder"):60118,q0=Ue?Symbol.for("react.scope"):60119;function vt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case ru:switch(e=e.type,e){case iu:case hl:case ul:case dl:case cl:case gl:return e;default:switch(e=e&&e.$$typeof,e){case pl:case ml:case yl:case vl:case fl:return e;default:return t}}case ou:return t}}}function _p(e){return vt(e)===hl}ue.AsyncMode=iu;ue.ConcurrentMode=hl;ue.ContextConsumer=pl;ue.ContextProvider=fl;ue.Element=ru;ue.ForwardRef=ml;ue.Fragment=ul;ue.Lazy=yl;ue.Memo=vl;ue.Portal=ou;ue.Profiler=dl;ue.StrictMode=cl;ue.Suspense=gl;ue.isAsyncMode=function(e){return _p(e)||vt(e)===iu};ue.isConcurrentMode=_p;ue.isContextConsumer=function(e){return vt(e)===pl};ue.isContextProvider=function(e){return vt(e)===fl};ue.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===ru};ue.isForwardRef=function(e){return vt(e)===ml};ue.isFragment=function(e){return vt(e)===ul};ue.isLazy=function(e){return vt(e)===yl};ue.isMemo=function(e){return vt(e)===vl};ue.isPortal=function(e){return vt(e)===ou};ue.isProfiler=function(e){return vt(e)===dl};ue.isStrictMode=function(e){return vt(e)===cl};ue.isSuspense=function(e){return vt(e)===gl};ue.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===ul||e===hl||e===dl||e===cl||e===gl||e===K0||typeof e=="object"&&e!==null&&(e.$$typeof===yl||e.$$typeof===vl||e.$$typeof===fl||e.$$typeof===pl||e.$$typeof===ml||e.$$typeof===Z0||e.$$typeof===J0||e.$$typeof===q0||e.$$typeof===X0)};ue.typeOf=vt;jp.exports=ue;var lu=jp.exports;function ev(e){function t(A,D,M,H,k){for(var J=0,L=0,we=0,le=0,te,G,je=0,Oe=0,q,_e=q=te=0,oe=0,ze=0,an=0,Ae=0,Lt=M.length,Mt=Lt-1,rt,W="",ke="",zr="",Yn="",Dt;oe<Lt;){if(G=M.charCodeAt(oe),oe===Mt&&L+le+we+J!==0&&(L!==0&&(G=L===47?10:47),le=we=J=0,Lt++,Mt++),L+le+we+J===0){if(oe===Mt&&(0<ze&&(W=W.replace(v,"")),0<W.trim().length)){switch(G){case 32:case 9:case 59:case 13:case 10:break;default:W+=M.charAt(oe)}G=59}switch(G){case 123:for(W=W.trim(),te=W.charCodeAt(0),q=1,Ae=++oe;oe<Lt;){switch(G=M.charCodeAt(oe)){case 123:q++;break;case 125:q--;break;case 47:switch(G=M.charCodeAt(oe+1)){case 42:case 47:e:{for(_e=oe+1;_e<Mt;++_e)switch(M.charCodeAt(_e)){case 47:if(G===42&&M.charCodeAt(_e-1)===42&&oe+2!==_e){oe=_e+1;break e}break;case 10:if(G===47){oe=_e+1;break e}}oe=_e}}break;case 91:G++;case 40:G++;case 34:case 39:for(;oe++<Mt&&M.charCodeAt(oe)!==G;);}if(q===0)break;oe++}switch(q=M.substring(Ae,oe),te===0&&(te=(W=W.replace(g,"").trim()).charCodeAt(0)),te){case 64:switch(0<ze&&(W=W.replace(v,"")),G=W.charCodeAt(1),G){case 100:case 109:case 115:case 45:ze=D;break;default:ze=ut}if(q=t(D,ze,q,G,k+1),Ae=q.length,0<z&&(ze=n(ut,W,an),Dt=a(3,q,ze,D,ye,ve,Ae,G,k,H),W=ze.join(""),Dt!==void 0&&(Ae=(q=Dt.trim()).length)===0&&(G=0,q="")),0<Ae)switch(G){case 115:W=W.replace(N,l);case 100:case 109:case 45:q=W+"{"+q+"}";break;case 107:W=W.replace(c,"$1 $2"),q=W+"{"+q+"}",q=pe===1||pe===2&&i("@"+q,3)?"@-webkit-"+q+"@"+q:"@"+q;break;default:q=W+q,H===112&&(q=(ke+=q,""))}else q="";break;default:q=t(D,n(D,W,an),q,H,k+1)}zr+=q,q=an=ze=_e=te=0,W="",G=M.charCodeAt(++oe);break;case 125:case 59:if(W=(0<ze?W.replace(v,""):W).trim(),1<(Ae=W.length))switch(_e===0&&(te=W.charCodeAt(0),te===45||96<te&&123>te)&&(Ae=(W=W.replace(" ",":")).length),0<z&&(Dt=a(1,W,D,A,ye,ve,ke.length,H,k,H))!==void 0&&(Ae=(W=Dt.trim()).length)===0&&(W="\0\0"),te=W.charCodeAt(0),G=W.charCodeAt(1),te){case 0:break;case 64:if(G===105||G===99){Yn+=W+M.charAt(oe);break}default:W.charCodeAt(Ae-1)!==58&&(ke+=o(W,te,G,W.charCodeAt(2)))}an=ze=_e=te=0,W="",G=M.charCodeAt(++oe)}}switch(G){case 13:case 10:L===47?L=0:1+te===0&&H!==107&&0<W.length&&(ze=1,W+="\0"),0<z*$&&a(0,W,D,A,ye,ve,ke.length,H,k,H),ve=1,ye++;break;case 59:case 125:if(L+le+we+J===0){ve++;break}default:switch(ve++,rt=M.charAt(oe),G){case 9:case 32:if(le+J+L===0)switch(je){case 44:case 58:case 9:case 32:rt="";break;default:G!==32&&(rt=" ")}break;case 0:rt="\\0";break;case 12:rt="\\f";break;case 11:rt="\\v";break;case 38:le+L+J===0&&(ze=an=1,rt="\f"+rt);break;case 108:if(le+L+J+Re===0&&0<_e)switch(oe-_e){case 2:je===112&&M.charCodeAt(oe-3)===58&&(Re=je);case 8:Oe===111&&(Re=Oe)}break;case 58:le+L+J===0&&(_e=oe);break;case 44:L+we+le+J===0&&(ze=1,rt+="\r");break;case 34:case 39:L===0&&(le=le===G?0:le===0?G:le);break;case 91:le+L+we===0&&J++;break;case 93:le+L+we===0&&J--;break;case 41:le+L+J===0&&we--;break;case 40:if(le+L+J===0){if(te===0)switch(2*je+3*Oe){case 533:break;default:te=1}we++}break;case 64:L+we+le+J+_e+q===0&&(q=1);break;case 42:case 47:if(!(0<le+J+we))switch(L){case 0:switch(2*G+3*M.charCodeAt(oe+1)){case 235:L=47;break;case 220:Ae=oe,L=42}break;case 42:G===47&&je===42&&Ae+2!==oe&&(M.charCodeAt(Ae+2)===33&&(ke+=M.substring(Ae,oe+1)),rt="",L=0)}}L===0&&(W+=rt)}Oe=je,je=G,oe++}if(Ae=ke.length,0<Ae){if(ze=D,0<z&&(Dt=a(2,ke,ze,A,ye,ve,Ae,H,k,H),Dt!==void 0&&(ke=Dt).length===0))return Yn+ke+zr;if(ke=ze.join(",")+"{"+ke+"}",pe*Re!==0){switch(pe!==2||i(ke,2)||(Re=0),Re){case 111:ke=ke.replace(w,":-moz-$1")+ke;break;case 112:ke=ke.replace(f,"::-webkit-input-$1")+ke.replace(f,"::-moz-$1")+ke.replace(f,":-ms-input-$1")+ke}Re=0}}return Yn+ke+zr}function n(A,D,M){var H=D.trim().split(h);D=H;var k=H.length,J=A.length;switch(J){case 0:case 1:var L=0;for(A=J===0?"":A[0]+" ";L<k;++L)D[L]=r(A,D[L],M).trim();break;default:var we=L=0;for(D=[];L<k;++L)for(var le=0;le<J;++le)D[we++]=r(A[le]+" ",H[L],M).trim()}return D}function r(A,D,M){var H=D.charCodeAt(0);switch(33>H&&(H=(D=D.trim()).charCodeAt(0)),H){case 38:return D.replace(d,"$1"+A.trim());case 58:return A.trim()+D.replace(d,"$1"+A.trim());default:if(0<1*M&&0<D.indexOf("\f"))return D.replace(d,(A.charCodeAt(0)===58?"":"$1")+A.trim())}return A+D}function o(A,D,M,H){var k=A+";",J=2*D+3*M+4*H;if(J===944){A=k.indexOf(":",9)+1;var L=k.substring(A,k.length-1).trim();return L=k.substring(0,A).trim()+L+";",pe===1||pe===2&&i(L,1)?"-webkit-"+L+L:L}if(pe===0||pe===2&&!i(k,1))return k;switch(J){case 1015:return k.charCodeAt(10)===97?"-webkit-"+k+k:k;case 951:return k.charCodeAt(3)===116?"-webkit-"+k+k:k;case 963:return k.charCodeAt(5)===110?"-webkit-"+k+k:k;case 1009:if(k.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+k+k;case 978:return"-webkit-"+k+"-moz-"+k+k;case 1019:case 983:return"-webkit-"+k+"-moz-"+k+"-ms-"+k+k;case 883:if(k.charCodeAt(8)===45)return"-webkit-"+k+k;if(0<k.indexOf("image-set(",11))return k.replace(ge,"$1-webkit-$2")+k;break;case 932:if(k.charCodeAt(4)===45)switch(k.charCodeAt(5)){case 103:return"-webkit-box-"+k.replace("-grow","")+"-webkit-"+k+"-ms-"+k.replace("grow","positive")+k;case 115:return"-webkit-"+k+"-ms-"+k.replace("shrink","negative")+k;case 98:return"-webkit-"+k+"-ms-"+k.replace("basis","preferred-size")+k}return"-webkit-"+k+"-ms-"+k+k;case 964:return"-webkit-"+k+"-ms-flex-"+k+k;case 1023:if(k.charCodeAt(8)!==99)break;return L=k.substring(k.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+L+"-webkit-"+k+"-ms-flex-pack"+L+k;case 1005:return x.test(k)?k.replace(S,":-webkit-")+k.replace(S,":-moz-")+k:k;case 1e3:switch(L=k.substring(13).trim(),D=L.indexOf("-")+1,L.charCodeAt(0)+L.charCodeAt(D)){case 226:L=k.replace(b,"tb");break;case 232:L=k.replace(b,"tb-rl");break;case 220:L=k.replace(b,"lr");break;default:return k}return"-webkit-"+k+"-ms-"+L+k;case 1017:if(k.indexOf("sticky",9)===-1)break;case 975:switch(D=(k=A).length-10,L=(k.charCodeAt(D)===33?k.substring(0,D):k).substring(A.indexOf(":",7)+1).trim(),J=L.charCodeAt(0)+(L.charCodeAt(7)|0)){case 203:if(111>L.charCodeAt(8))break;case 115:k=k.replace(L,"-webkit-"+L)+";"+k;break;case 207:case 102:k=k.replace(L,"-webkit-"+(102<J?"inline-":"")+"box")+";"+k.replace(L,"-webkit-"+L)+";"+k.replace(L,"-ms-"+L+"box")+";"+k}return k+";";case 938:if(k.charCodeAt(5)===45)switch(k.charCodeAt(6)){case 105:return L=k.replace("-items",""),"-webkit-"+k+"-webkit-box-"+L+"-ms-flex-"+L+k;case 115:return"-webkit-"+k+"-ms-flex-item-"+k.replace(_,"")+k;default:return"-webkit-"+k+"-ms-flex-line-pack"+k.replace("align-content","").replace(_,"")+k}break;case 973:case 989:if(k.charCodeAt(3)!==45||k.charCodeAt(4)===122)break;case 931:case 953:if(U.test(A)===!0)return(L=A.substring(A.indexOf(":")+1)).charCodeAt(0)===115?o(A.replace("stretch","fill-available"),D,M,H).replace(":fill-available",":stretch"):k.replace(L,"-webkit-"+L)+k.replace(L,"-moz-"+L.replace("fill-",""))+k;break;case 962:if(k="-webkit-"+k+(k.charCodeAt(5)===102?"-ms-"+k:"")+k,M+H===211&&k.charCodeAt(13)===105&&0<k.indexOf("transform",10))return k.substring(0,k.indexOf(";",27)+1).replace(y,"$1-webkit-$2")+k}return k}function i(A,D){var M=A.indexOf(D===1?":":"{"),H=A.substring(0,D!==3?M:10);return M=A.substring(M+1,A.length-1),B(D!==2?H:H.replace(Z,"$1"),M,D)}function l(A,D){var M=o(D,D.charCodeAt(0),D.charCodeAt(1),D.charCodeAt(2));return M!==D+";"?M.replace(T," or ($1)").substring(4):"("+D+")"}function a(A,D,M,H,k,J,L,we,le,te){for(var G=0,je=D,Oe;G<z;++G)switch(Oe=Be[G].call(p,A,je,M,H,k,J,L,we,le,te)){case void 0:case!1:case!0:case null:break;default:je=Oe}if(je!==D)return je}function s(A){switch(A){case void 0:case null:z=Be.length=0;break;default:if(typeof A=="function")Be[z++]=A;else if(typeof A=="object")for(var D=0,M=A.length;D<M;++D)s(A[D]);else $=!!A|0}return s}function u(A){return A=A.prefix,A!==void 0&&(B=null,A?typeof A!="function"?pe=1:(pe=2,B=A):pe=0),u}function p(A,D){var M=A;if(33>M.charCodeAt(0)&&(M=M.trim()),re=M,M=[re],0<z){var H=a(-1,D,M,M,ye,ve,0,0,0,0);H!==void 0&&typeof H=="string"&&(D=H)}var k=t(ut,M,D,0,0);return 0<z&&(H=a(-2,k,M,M,ye,ve,k.length,0,0,0),H!==void 0&&(k=H)),re="",Re=0,ve=ye=1,k}var g=/^\0+/g,v=/[\0\r\f]/g,S=/: */g,x=/zoo|gra/,y=/([,: ])(transform)/g,h=/,\r+?/g,d=/([\t\r\n ])*\f?&/g,c=/@(k\w+)\s*(\S*)\s*/,f=/::(place)/g,w=/:(read-only)/g,b=/[svh]\w+-[tblr]{2}/,N=/\(\s*(.*)\s*\)/g,T=/([\s\S]*?);/g,_=/-self|flex-/g,Z=/[^]*?(:[rp][el]a[\w-]+)[^]*/,U=/stretch|:\s*\w+\-(?:conte|avail)/,ge=/([^-])(image-set\()/,ve=1,ye=1,Re=0,pe=1,ut=[],Be=[],z=0,B=null,$=0,re="";return p.use=s,p.set=u,e!==void 0&&u(e),p}var tv={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function nv(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var rv=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,Ic=nv(function(e){return rv.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),au=lu,ov={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},iv={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},lv={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Pp={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},su={};su[au.ForwardRef]=lv;su[au.Memo]=Pp;function Fc(e){return au.isMemo(e)?Pp:su[e.$$typeof]||ov}var av=Object.defineProperty,sv=Object.getOwnPropertyNames,Uc=Object.getOwnPropertySymbols,uv=Object.getOwnPropertyDescriptor,cv=Object.getPrototypeOf,Bc=Object.prototype;function Np(e,t,n){if(typeof t!="string"){if(Bc){var r=cv(t);r&&r!==Bc&&Np(e,r,n)}var o=sv(t);Uc&&(o=o.concat(Uc(t)));for(var i=Fc(e),l=Fc(t),a=0;a<o.length;++a){var s=o[a];if(!iv[s]&&!(n&&n[s])&&!(l&&l[s])&&!(i&&i[s])){var u=uv(t,s);try{av(e,s,u)}catch{}}}}return e}var dv=Np;const fv=Jc(dv);function Xt(){return(Xt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var Vc=function(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n},Ja=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!lu.typeOf(e)},Bi=Object.freeze([]),Cn=Object.freeze({});function _o(e){return typeof e=="function"}function Wc(e){return e.displayName||e.name||"Component"}function uu(e){return e&&typeof e.styledComponentId=="string"}var Rr=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",cu=typeof window<"u"&&"HTMLElement"in window,pv=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY));function Oo(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var hv=function(){function e(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var t=e.prototype;return t.indexOfGroup=function(n){for(var r=0,o=0;o<n;o++)r+=this.groupSizes[o];return r},t.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var o=this.groupSizes,i=o.length,l=i;n>=l;)(l<<=1)<0&&Oo(16,""+n);this.groupSizes=new Uint32Array(l),this.groupSizes.set(o),this.length=l;for(var a=i;a<l;a++)this.groupSizes[a]=0}for(var s=this.indexOfGroup(n+1),u=0,p=r.length;u<p;u++)this.tag.insertRule(s,r[u])&&(this.groupSizes[n]++,s++)},t.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],o=this.indexOfGroup(n),i=o+r;this.groupSizes[n]=0;for(var l=o;l<i;l++)this.tag.deleteRule(o)}},t.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var o=this.groupSizes[n],i=this.indexOfGroup(n),l=i+o,a=i;a<l;a++)r+=this.tag.getRule(a)+`/*!sc*/
`;return r},e}(),gi=new Map,Vi=new Map,lo=1,ti=function(e){if(gi.has(e))return gi.get(e);for(;Vi.has(lo);)lo++;var t=lo++;return gi.set(e,t),Vi.set(t,e),t},mv=function(e){return Vi.get(e)},gv=function(e,t){t>=lo&&(lo=t+1),gi.set(e,t),Vi.set(t,e)},vv="style["+Rr+'][data-styled-version="5.3.10"]',yv=new RegExp("^"+Rr+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),wv=function(e,t,n){for(var r,o=n.split(","),i=0,l=o.length;i<l;i++)(r=o[i])&&e.registerName(t,r)},xv=function(e,t){for(var n=(t.textContent||"").split(`/*!sc*/
`),r=[],o=0,i=n.length;o<i;o++){var l=n[o].trim();if(l){var a=l.match(yv);if(a){var s=0|parseInt(a[1],10),u=a[2];s!==0&&(gv(u,s),wv(e,u,a[3]),e.getTag().insertRules(s,r)),r.length=0}else r.push(l)}}},kv=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},Tp=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(a){for(var s=a.childNodes,u=s.length;u>=0;u--){var p=s[u];if(p&&p.nodeType===1&&p.hasAttribute(Rr))return p}}(n),i=o!==void 0?o.nextSibling:null;r.setAttribute(Rr,"active"),r.setAttribute("data-styled-version","5.3.10");var l=kv();return l&&r.setAttribute("nonce",l),n.insertBefore(r,i),r},Sv=function(){function e(n){var r=this.element=Tp(n);r.appendChild(document.createTextNode("")),this.sheet=function(o){if(o.sheet)return o.sheet;for(var i=document.styleSheets,l=0,a=i.length;l<a;l++){var s=i[l];if(s.ownerNode===o)return s}Oo(17)}(r),this.length=0}var t=e.prototype;return t.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},t.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},t.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},e}(),Cv=function(){function e(n){var r=this.element=Tp(n);this.nodes=r.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(n,r){if(n<=this.length&&n>=0){var o=document.createTextNode(r),i=this.nodes[n];return this.element.insertBefore(o,i||null),this.length++,!0}return!1},t.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},t.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},e}(),bv=function(){function e(n){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},t.deleteRule=function(n){this.rules.splice(n,1),this.length--},t.getRule=function(n){return n<this.length?this.rules[n]:""},e}(),Hc=cu,Ev={isServer:!cu,useCSSOMInjection:!pv},zp=function(){function e(n,r,o){n===void 0&&(n=Cn),r===void 0&&(r={}),this.options=Xt({},Ev,{},n),this.gs=r,this.names=new Map(o),this.server=!!n.isServer,!this.server&&cu&&Hc&&(Hc=!1,function(i){for(var l=document.querySelectorAll(vv),a=0,s=l.length;a<s;a++){var u=l[a];u&&u.getAttribute(Rr)!=="active"&&(xv(i,u),u.parentNode&&u.parentNode.removeChild(u))}}(this))}e.registerId=function(n){return ti(n)};var t=e.prototype;return t.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new e(Xt({},this.options,{},n),this.gs,r&&this.names||void 0)},t.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},t.getTag=function(){return this.tag||(this.tag=(o=(r=this.options).isServer,i=r.useCSSOMInjection,l=r.target,n=o?new bv(l):i?new Sv(l):new Cv(l),new hv(n)));var n,r,o,i,l},t.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},t.registerName=function(n,r){if(ti(n),this.names.has(n))this.names.get(n).add(r);else{var o=new Set;o.add(r),this.names.set(n,o)}},t.insertRules=function(n,r,o){this.registerName(n,r),this.getTag().insertRules(ti(n),o)},t.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},t.clearRules=function(n){this.getTag().clearGroup(ti(n)),this.clearNames(n)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(n){for(var r=n.getTag(),o=r.length,i="",l=0;l<o;l++){var a=mv(l);if(a!==void 0){var s=n.names.get(a),u=r.getGroup(l);if(s&&u&&s.size){var p=Rr+".g"+l+'[id="'+a+'"]',g="";s!==void 0&&s.forEach(function(v){v.length>0&&(g+=v+",")}),i+=""+u+p+'{content:"'+g+`"}/*!sc*/
`}}}return i}(this)},e}(),Rv=/(a)(d)/gi,Qc=function(e){return String.fromCharCode(e+(e>25?39:97))};function qa(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Qc(t%52)+n;return(Qc(t%52)+n).replace(Rv,"$1-$2")}var cr=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Ap=function(e){return cr(5381,e)};function jv(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(_o(n)&&!uu(n))return!1}return!0}var _v=Ap("5.3.10"),Pv=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&jv(t),this.componentId=n,this.baseHash=cr(_v,n),this.baseStyle=r,zp.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var o=this.componentId,i=[];if(this.baseStyle&&i.push(this.baseStyle.generateAndInjectStyles(t,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(o,this.staticRulesId))i.push(this.staticRulesId);else{var l=jr(this.rules,t,n,r).join(""),a=qa(cr(this.baseHash,l)>>>0);if(!n.hasNameForId(o,a)){var s=r(l,"."+a,void 0,o);n.insertRules(o,a,s)}i.push(a),this.staticRulesId=a}else{for(var u=this.rules.length,p=cr(this.baseHash,r.hash),g="",v=0;v<u;v++){var S=this.rules[v];if(typeof S=="string")g+=S;else if(S){var x=jr(S,t,n,r),y=Array.isArray(x)?x.join(""):x;p=cr(p,y+v),g+=y}}if(g){var h=qa(p>>>0);if(!n.hasNameForId(o,h)){var d=r(g,"."+h,void 0,o);n.insertRules(o,h,d)}i.push(h)}}return i.join(" ")},e}(),Nv=/^\s*\/\/.*$/gm,Tv=[":","[",".","#"];function zv(e){var t,n,r,o,i=e===void 0?Cn:e,l=i.options,a=l===void 0?Cn:l,s=i.plugins,u=s===void 0?Bi:s,p=new ev(a),g=[],v=function(y){function h(d){if(d)try{y(d+"}")}catch{}}return function(d,c,f,w,b,N,T,_,Z,U){switch(d){case 1:if(Z===0&&c.charCodeAt(0)===64)return y(c+";"),"";break;case 2:if(_===0)return c+"/*|*/";break;case 3:switch(_){case 102:case 112:return y(f[0]+c),"";default:return c+(U===0?"/*|*/":"")}case-2:c.split("/*|*/}").forEach(h)}}}(function(y){g.push(y)}),S=function(y,h,d){return h===0&&Tv.indexOf(d[n.length])!==-1||d.match(o)?y:"."+t};function x(y,h,d,c){c===void 0&&(c="&");var f=y.replace(Nv,""),w=h&&d?d+" "+h+" { "+f+" }":f;return t=c,n=h,r=new RegExp("\\"+n+"\\b","g"),o=new RegExp("(\\"+n+"\\b){2,}"),p(d||!h?"":h,w)}return p.use([].concat(u,[function(y,h,d){y===2&&d.length&&d[0].lastIndexOf(n)>0&&(d[0]=d[0].replace(r,S))},v,function(y){if(y===-2){var h=g;return g=[],h}}])),x.hash=u.length?u.reduce(function(y,h){return h.name||Oo(15),cr(y,h.name)},5381).toString():"",x}var Lp=ft.createContext();Lp.Consumer;var Mp=ft.createContext(),Av=(Mp.Consumer,new zp),es=zv();function Lv(){return P.useContext(Lp)||Av}function Mv(){return P.useContext(Mp)||es}var Dv=function(){function e(t,n){var r=this;this.inject=function(o,i){i===void 0&&(i=es);var l=r.name+i.hash;o.hasNameForId(r.id,l)||o.insertRules(r.id,l,i(r.rules,l,"@keyframes"))},this.toString=function(){return Oo(12,String(r.name))},this.name=t,this.id="sc-keyframes-"+t,this.rules=n}return e.prototype.getName=function(t){return t===void 0&&(t=es),this.name+t.hash},e}(),Ov=/([A-Z])/,$v=/([A-Z])/g,Iv=/^ms-/,Fv=function(e){return"-"+e.toLowerCase()};function Yc(e){return Ov.test(e)?e.replace($v,Fv).replace(Iv,"-ms-"):e}var Gc=function(e){return e==null||e===!1||e===""};function jr(e,t,n,r){if(Array.isArray(e)){for(var o,i=[],l=0,a=e.length;l<a;l+=1)(o=jr(e[l],t,n,r))!==""&&(Array.isArray(o)?i.push.apply(i,o):i.push(o));return i}if(Gc(e))return"";if(uu(e))return"."+e.styledComponentId;if(_o(e)){if(typeof(u=e)!="function"||u.prototype&&u.prototype.isReactComponent||!t)return e;var s=e(t);return jr(s,t,n,r)}var u;return e instanceof Dv?n?(e.inject(n,r),e.getName(r)):e:Ja(e)?function p(g,v){var S,x,y=[];for(var h in g)g.hasOwnProperty(h)&&!Gc(g[h])&&(Array.isArray(g[h])&&g[h].isCss||_o(g[h])?y.push(Yc(h)+":",g[h],";"):Ja(g[h])?y.push.apply(y,p(g[h],h)):y.push(Yc(h)+": "+(S=h,(x=g[h])==null||typeof x=="boolean"||x===""?"":typeof x!="number"||x===0||S in tv||S.startsWith("--")?String(x).trim():x+"px")+";"));return v?[v+" {"].concat(y,["}"]):y}(e):e.toString()}var Kc=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function Uv(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return _o(e)||Ja(e)?Kc(jr(Vc(Bi,[e].concat(n)))):n.length===0&&e.length===1&&typeof e[0]=="string"?e:Kc(jr(Vc(e,n)))}var Bv=function(e,t,n){return n===void 0&&(n=Cn),e.theme!==n.theme&&e.theme||t||n.theme},Vv=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Wv=/(^-|-$)/g;function ql(e){return e.replace(Vv,"-").replace(Wv,"")}var Hv=function(e){return qa(Ap(e)>>>0)};function ni(e){return typeof e=="string"&&!0}var ts=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},Qv=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function Yv(e,t,n){var r=e[n];ts(t)&&ts(r)?Dp(r,t):e[n]=t}function Dp(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var o=0,i=n;o<i.length;o++){var l=i[o];if(ts(l))for(var a in l)Qv(a)&&Yv(e,l[a],a)}return e}var Op=ft.createContext();Op.Consumer;var ea={};function $p(e,t,n){var r=uu(e),o=!ni(e),i=t.attrs,l=i===void 0?Bi:i,a=t.componentId,s=a===void 0?function(c,f){var w=typeof c!="string"?"sc":ql(c);ea[w]=(ea[w]||0)+1;var b=w+"-"+Hv("5.3.10"+w+ea[w]);return f?f+"-"+b:b}(t.displayName,t.parentComponentId):a,u=t.displayName,p=u===void 0?function(c){return ni(c)?"styled."+c:"Styled("+Wc(c)+")"}(e):u,g=t.displayName&&t.componentId?ql(t.displayName)+"-"+t.componentId:t.componentId||s,v=r&&e.attrs?Array.prototype.concat(e.attrs,l).filter(Boolean):l,S=t.shouldForwardProp;r&&e.shouldForwardProp&&(S=t.shouldForwardProp?function(c,f,w){return e.shouldForwardProp(c,f,w)&&t.shouldForwardProp(c,f,w)}:e.shouldForwardProp);var x,y=new Pv(n,g,r?e.componentStyle:void 0),h=y.isStatic&&l.length===0,d=function(c,f){return function(w,b,N,T){var _=w.attrs,Z=w.componentStyle,U=w.defaultProps,ge=w.foldedComponentIds,ve=w.shouldForwardProp,ye=w.styledComponentId,Re=w.target,pe=function(H,k,J){H===void 0&&(H=Cn);var L=Xt({},k,{theme:H}),we={};return J.forEach(function(le){var te,G,je,Oe=le;for(te in _o(Oe)&&(Oe=Oe(L)),Oe)L[te]=we[te]=te==="className"?(G=we[te],je=Oe[te],G&&je?G+" "+je:G||je):Oe[te]}),[L,we]}(Bv(b,P.useContext(Op),U)||Cn,b,_),ut=pe[0],Be=pe[1],z=function(H,k,J,L){var we=Lv(),le=Mv(),te=k?H.generateAndInjectStyles(Cn,we,le):H.generateAndInjectStyles(J,we,le);return te}(Z,T,ut),B=N,$=Be.$as||b.$as||Be.as||b.as||Re,re=ni($),A=Be!==b?Xt({},b,{},Be):b,D={};for(var M in A)M[0]!=="$"&&M!=="as"&&(M==="forwardedAs"?D.as=A[M]:(ve?ve(M,Ic,$):!re||Ic(M))&&(D[M]=A[M]));return b.style&&Be.style!==b.style&&(D.style=Xt({},b.style,{},Be.style)),D.className=Array.prototype.concat(ge,ye,z!==ye?z:null,b.className,Be.className).filter(Boolean).join(" "),D.ref=B,P.createElement($,D)}(x,c,f,h)};return d.displayName=p,(x=ft.forwardRef(d)).attrs=v,x.componentStyle=y,x.displayName=p,x.shouldForwardProp=S,x.foldedComponentIds=r?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):Bi,x.styledComponentId=g,x.target=r?e.target:e,x.withComponent=function(c){var f=t.componentId,w=function(N,T){if(N==null)return{};var _,Z,U={},ge=Object.keys(N);for(Z=0;Z<ge.length;Z++)_=ge[Z],T.indexOf(_)>=0||(U[_]=N[_]);return U}(t,["componentId"]),b=f&&f+"-"+(ni(c)?c:ql(Wc(c)));return $p(c,Xt({},w,{attrs:v,componentId:b}),n)},Object.defineProperty(x,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(c){this._foldedDefaultProps=r?Dp({},e.defaultProps,c):c}}),Object.defineProperty(x,"toString",{value:function(){return"."+x.styledComponentId}}),o&&fv(x,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),x}var ns=function(e){return function t(n,r,o){if(o===void 0&&(o=Cn),!lu.isValidElementType(r))return Oo(1,String(r));var i=function(){return n(r,o,Uv.apply(void 0,arguments))};return i.withConfig=function(l){return t(n,r,Xt({},o,{},l))},i.attrs=function(l){return t(n,r,Xt({},o,{attrs:Array.prototype.concat(o.attrs,l).filter(Boolean)}))},i}($p,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){ns[e]=ns(e)});const ce=ns,Gv=()=>m.jsx(Kv,{children:m.jsxs("div",{className:"content",children:[m.jsx("p",{children:"©2022-2024 Fernando Fugihara."}),m.jsx("p",{children:"All Rights Reserved."})]})}),Kv=ce.div`
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

`,Xv=()=>m.jsx(Zv,{children:m.jsx(nu,{})}),Zv=ce.div`
  
`;var Ip={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Xc=ft.createContext&&ft.createContext(Ip),bn=globalThis&&globalThis.__assign||function(){return bn=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},bn.apply(this,arguments)},Jv=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n};function Fp(e){return e&&e.map(function(t,n){return ft.createElement(t.tag,bn({key:n},t.attr),Fp(t.child))})}function Vt(e){return function(t){return ft.createElement(qv,bn({attr:bn({},e.attr)},t),Fp(e.child))}}function qv(e){var t=function(n){var r=e.attr,o=e.size,i=e.title,l=Jv(e,["attr","size","title"]),a=o||n.size||"1em",s;return n.className&&(s=n.className),e.className&&(s=(s?s+" ":"")+e.className),ft.createElement("svg",bn({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,l,{className:s,style:bn(bn({color:e.color||n.color},n.style),e.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),i&&ft.createElement("title",null,i),e.children)};return Xc!==void 0?ft.createElement(Xc.Consumer,null,function(n){return t(n)}):t(Ip)}function Up(e){return Vt({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"}}]})(e)}function e1(e){return Vt({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1 1 68.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z"}}]})(e)}function t1(e){return Vt({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 0 0-44.4 0L77.5 505a63.9 63.9 0 0 0-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0 0 18.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z"}}]})(e)}function n1(e){return Vt({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 110.8V792H136V270.8l-27.6-21.5 39.3-50.5 42.8 33.3h643.1l42.8-33.3 39.3 50.5-27.7 21.5zM833.6 232L512 482 190.4 232l-42.8-33.3-39.3 50.5 27.6 21.5 341.6 265.6a55.99 55.99 0 0 0 68.7 0L888 270.8l27.6-21.5-39.3-50.5-42.7 33.2z"}}]})(e)}function r1(e){return Vt({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M384 320H256c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h128c17.67 0 32-14.33 32-32V352c0-17.67-14.33-32-32-32zM192 32c0-17.67-14.33-32-32-32H32C14.33 0 0 14.33 0 32v128c0 17.67 14.33 32 32 32h95.72l73.16 128.04C211.98 300.98 232.4 288 256 288h.28L192 175.51V128h224V64H192V32zM608 0H480c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h128c17.67 0 32-14.33 32-32V32c0-17.67-14.33-32-32-32z"}}]})(e)}const Bp=[{text:"home",path:"home",order:1},{text:"work",path:"work",order:2},{text:"about",path:"about",order:3},{text:"contact",path:"contact",order:5}];function o1(e){return Vt({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M331.3 308.7L278.6 256l52.7-52.7c6.2-6.2 6.2-16.4 0-22.6-6.2-6.2-16.4-6.2-22.6 0L256 233.4l-52.7-52.7c-6.2-6.2-15.6-7.1-22.6 0-7.1 7.1-6 16.6 0 22.6l52.7 52.7-52.7 52.7c-6.7 6.7-6.4 16.3 0 22.6 6.4 6.4 16.4 6.2 22.6 0l52.7-52.7 52.7 52.7c6.2 6.2 16.4 6.2 22.6 0 6.3-6.2 6.3-16.4 0-22.6z"}},{tag:"path",attr:{d:"M256 76c48.1 0 93.3 18.7 127.3 52.7S436 207.9 436 256s-18.7 93.3-52.7 127.3S304.1 436 256 436c-48.1 0-93.3-18.7-127.3-52.7S76 304.1 76 256s18.7-93.3 52.7-127.3S207.9 76 256 76m0-28C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48z"}}]})(e)}const i1=({onClick:e,showLittleNav:t})=>m.jsx(l1,{children:m.jsx("div",{className:`${t?"overlay black":"overlay"}`,children:m.jsxs("div",{className:`${t?"content active":"content"}`,children:[m.jsx(o1,{onClick:e,className:`${t?"icon active":"icon"}`}),Bp.map(n=>{const{text:r,path:o}=n;return m.jsx("a",{onClick:e,className:"nav-link",href:`#${o}`,children:r},r)})]})})}),l1=ce.nav`
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
`;function a1(e){return Vt({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"}}]})(e)}function s1(e){return Vt({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"}}]})(e)}const u1=()=>{const{isDarkTheme:e,toggleDarkTheme:t}=wl();return m.jsx(m.Fragment,{children:m.jsxs(c1,{children:[m.jsx("input",{onChange:t,type:"checkbox",id:"darkmode-toggle",checked:e===!0}),m.jsxs("label",{htmlFor:"darkmode-toggle",children:[m.jsx(s1,{className:"sun"}),m.jsx(a1,{className:"moon"})]})]})})},c1=ce.div`
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

`;ce.div`
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
`;const d1=()=>{const{toggleSidebar:e,showSidebar:t}=wl();return m.jsxs(f1,{children:[m.jsx(u1,{}),m.jsx("a",{target:"_blank",className:"github-link",href:"https://github.com/fekenzofugi",children:m.jsx(Up,{})}),m.jsx("button",{className:`${t?"nav-btn active":"nav-btn"}`,onClick:e,children:m.jsxs("svg",{stroke:"var(--text-color)",fill:"none",className:"hamburguer",viewBox:"-10 -10 120 120",width:"60",children:[m.jsx("path",{className:"line",d:"m 20 40 h 60 a 1 1 0 0 1 0 20 h -60 a 1 1 0 0 1 0 -40 h 30 v 70",strokeWidth:"6",strokeLinecap:"round",strokeLinejoin:"round"}),m.jsx("line",{className:"line bottom",x1:"80",x2:"20",y1:"20",y2:"20",strokeWidth:"6",strokeLinecap:"round",strokeDasharray:"80",strokeDashoffset:"0"})]})})]})},f1=ce.nav`
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

`;function p1(e){return Vt({tag:"svg",attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"}}]})(e)}const h1=[{text:"home",path:"./",icon:m.jsx(t1,{})},{text:"blog",path:"blog",icon:m.jsx(p1,{})},{text:"projects",path:"projects",icon:m.jsx(r1,{})}],m1=()=>{const{toggleSidebar:e}=wl();return m.jsx(g1,{children:h1.map(t=>{const{text:n,path:r,icon:o}=t;return m.jsx(Y0,{to:r,className:({isActive:i})=>i?"nav-link active":"nav-link",onClick:e,children:m.jsxs("div",{className:"icon",children:[o,n]})},n)})})},g1=ce.div`
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
`,v1=()=>{const{showSidebar:e}=wl();return m.jsx(y1,{children:m.jsx("div",{className:`${e?"sidebar-container show-sidebar":"sidebar-container"}`,children:m.jsx("div",{className:"content",children:m.jsx(m1,{})})})})},y1=ce.nav`
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



`;var rs=new Map,ri=new WeakMap,Zc=0,w1=void 0;function x1(e){return e?(ri.has(e)||(Zc+=1,ri.set(e,Zc.toString())),ri.get(e)):"0"}function k1(e){return Object.keys(e).sort().filter(t=>e[t]!==void 0).map(t=>`${t}_${t==="root"?x1(e.root):e[t]}`).toString()}function S1(e){let t=k1(e),n=rs.get(t);if(!n){const r=new Map;let o;const i=new IntersectionObserver(l=>{l.forEach(a=>{var s;const u=a.isIntersecting&&o.some(p=>a.intersectionRatio>=p);e.trackVisibility&&typeof a.isVisible>"u"&&(a.isVisible=u),(s=r.get(a.target))==null||s.forEach(p=>{p(u,a)})})},e);o=i.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:i,elements:r},rs.set(t,n)}return n}function C1(e,t,n={},r=w1){if(typeof window.IntersectionObserver>"u"&&r!==void 0){const s=e.getBoundingClientRect();return t(r,{isIntersecting:r,target:e,intersectionRatio:typeof n.threshold=="number"?n.threshold:0,time:0,boundingClientRect:s,intersectionRect:s,rootBounds:s}),()=>{}}const{id:o,observer:i,elements:l}=S1(n);let a=l.get(e)||[];return l.has(e)||l.set(e,a),a.push(t),i.observe(e),function(){a.splice(a.indexOf(t),1),a.length===0&&(l.delete(e),i.unobserve(e)),l.size===0&&(i.disconnect(),rs.delete(o))}}function qe({threshold:e,delay:t,trackVisibility:n,rootMargin:r,root:o,triggerOnce:i,skip:l,initialInView:a,fallbackInView:s,onChange:u}={}){var p;const[g,v]=P.useState(null),S=P.useRef(),[x,y]=P.useState({inView:!!a,entry:void 0});S.current=u,P.useEffect(()=>{if(l||!g)return;let f;return f=C1(g,(w,b)=>{y({inView:w,entry:b}),S.current&&S.current(w,b),b.isIntersecting&&i&&f&&(f(),f=void 0)},{root:o,rootMargin:r,threshold:e,trackVisibility:n,delay:t},s),()=>{f&&f()}},[Array.isArray(e)?e.toString():e,g,o,r,i,l,n,s,t]);const h=(p=x.entry)==null?void 0:p.target,d=P.useRef();!g&&h&&!i&&!l&&d.current!==h&&(d.current=h,y({inView:!!a,entry:void 0}));const c=[v,x.inView,x.entry];return c.ref=c[0],c.inView=c[1],c.entry=c[2],c}const b1=({classes:e})=>m.jsx(E1,{children:m.jsx("div",{className:`loading-container ${e}`,children:m.jsxs("svg",{width:"120",height:"30",viewBox:"0 0 120 30",xmlns:"http://www.w3.org/2000/svg",fill:"var(--text-color)",children:[m.jsxs("circle",{cx:"15",cy:"15",r:"15",children:[m.jsx("animate",{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}),m.jsx("animate",{attributeName:"fillOpacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"})]}),m.jsxs("circle",{cx:"60",cy:"15",r:"9",fillOpacity:"0.3",children:[m.jsx("animate",{attributeName:"r",from:"9",to:"9",begin:"0s",dur:"0.8s",values:"9;15;9",calcMode:"linear",repeatCount:"indefinite"}),m.jsx("animate",{attributeName:"fillOpacity",from:"0.5",to:"0.5",begin:"0s",dur:"0.8s",values:".5;1;.5",calcMode:"linear",repeatCount:"indefinite"})]}),m.jsxs("circle",{cx:"105",cy:"15",r:"15",children:[m.jsx("animate",{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}),m.jsx("animate",{attributeName:"fillOpacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"})]})]})})}),E1=ce.div`
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
`,Vp=P.createContext(),R1=()=>{const[e,t]=P.useState(!0),[n,r]=P.useState(!1),[o,i]=P.useState(ky()),l=()=>{const s=!o;i(s),document.body.classList.toggle("dark-theme",o),localStorage.setItem("darkTheme",s)},a=()=>{r(!n)};return P.useEffect(()=>{setTimeout(()=>{t(!1)},1e3)},[]),m.jsx(Vp.Provider,{value:{showSidebar:n,toggleSidebar:a,isDarkTheme:o,toggleDarkTheme:l},children:m.jsxs("main",{children:[m.jsx(b1,{classes:e?"loading-container":"hide"}),m.jsx(v1,{}),m.jsx(d1,{}),m.jsx(nu,{}),m.jsx(Gv,{})]})})},wl=()=>P.useContext(Vp),j1="/portifolio/assets/sfugies-0b4f38c6.png",_1="/portifolio/assets/4any1-bff370cc.png",P1="/portifolio/assets/restaurant-57dff58d.png",N1="/portifolio/assets/vinho-27214b5a.png",T1="/portifolio/assets/mvm-f573efd3.png",z1="/portifolio/assets/negocia-88f468de.png",A1="/portifolio/assets/mood-6c3523cd.png",L1=({name:e,description:t,link:n,source:r})=>{const{ref:o,inView:i}=qe();return m.jsx(M1,{ref:o,className:`${i?"animate":"hide"}`,children:m.jsxs("div",{className:"content",children:[m.jsx("h5",{children:e}),m.jsxs("div",{className:"image-div",children:[e==="4any1 Assessoria de Corrida"&&m.jsx("a",{target:"_blank",href:n,children:m.jsx("img",{src:_1,className:"img",alt:""})}),e==="Sfugies"&&m.jsx("a",{target:"_blank",href:n,children:m.jsx("img",{src:j1,className:"img",alt:""})}),e==="d'heaven"&&m.jsx("a",{target:"_blank",href:n,children:m.jsx("img",{src:P1,className:"img",alt:""})}),e==="Mil Vezes Mãe"&&m.jsx("a",{target:"_blank",href:n,children:m.jsx("img",{src:T1,className:"img",alt:""})}),e==="Classe do Vinho"&&m.jsx("a",{target:"_blank",href:n,children:m.jsx("img",{src:N1,className:"img",alt:""})}),e==="Negocia Tudo"&&m.jsx("a",{target:"_blank",href:n,children:m.jsx("img",{src:z1,className:"img",alt:""})}),e==="Market Mood"&&m.jsxs("a",{target:"_blank",href:n,children:[m.jsx("img",{src:A1,className:"img rec",alt:""})," "]}),m.jsx("p",{className:"work-description",children:t}),m.jsxs("div",{className:"buttons",children:[m.jsx("a",{className:"link",target:"_blank",href:n,children:"See Project"}),r!=""?m.jsx("a",{className:"link link_sc",target:"_blank",href:r,children:"Source Code"}):m.jsx("a",{className:"link link_sc",children:"Source not available"})]})]})]})})},M1=ce.div`
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
`,D1=[{name:"4any1 Assessoria de Corrida",description:"",link:"https://www.4any1assessoria.com.br/",source:""},{name:"Sfugies",description:"A web application using reactjs for the client side, Node.js + Express for the backend server and NoSQL database MongoDB.",link:"https://sfugies.onrender.com/",source:"https://github.com/fekenzofugi/Sfugies"},{name:"Mil Vezes Mãe",description:"",link:"http://mochilacriativa.com.br",source:"https://github.com/fekenzofugi/MilVezesMae"},{name:"Classe do Vinho",description:"",link:"https://classedovinho.com.br",source:""}],O1=()=>{const{ref:e,inView:t}=qe();qe();const{ref:n,inView:r}=qe();return m.jsxs($1,{children:[m.jsx("header",{ref:n,className:`${r?"grow":"hide"}`,children:m.jsx("h1",{ref:e,className:`${t?"animate":"hide"}`,children:"Projects"})}),m.jsx("div",{className:"works",children:D1.map(o=>{const{name:i,description:l,link:a,source:s}=o;return m.jsx(L1,{className:"work",name:i,description:l,link:a,source:s},i)})}),m.jsx(jo,{to:"projects",className:"btn more",children:"See More"})]})},$1=ce.div`
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

`,I1=()=>(qe(),qe(),qe(),m.jsxs(F1,{id:"work",children:[m.jsx("svg",{className:"wave",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1440 319",children:m.jsx("path",{fill:"var(--background-secondary-color)","fill-opacity":"1",d:"M0,160L80,154.7C160,149,320,139,480,160C640,181,800,235,960,234.7C1120,235,1280,181,1360,154.7L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"})}),m.jsx(O1,{})]})),F1=ce.section`
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
`,U1=()=>m.jsx(B1,{id:"experience"}),B1=ce.section`

`,V1="/portifolio/assets/perfil-bb3418cf.jpeg",W1=()=>m.jsxs(H1,{children:[m.jsx("h4",{children:"Education"}),m.jsx("ol",{children:m.jsx("li",{children:"bachelor's degree in electrical engineering (in progress)"})})]}),H1=ce.div`
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
`,Q1=()=>m.jsxs(Y1,{children:[m.jsx("h4",{children:"Interests"}),m.jsxs("ol",{children:[m.jsx("li",{children:"Machine / Deep Learning"}),m.jsx("li",{children:"Web Development"})]})]}),Y1=ce.div`
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
`,G1=()=>m.jsxs(K1,{children:[m.jsx("h4",{children:"Technologies"}),m.jsx("br",{}),m.jsx("hr",{}),m.jsx("h5",{children:"Programming Languages"}),m.jsxs("ol",{children:[m.jsx("li",{children:"Python"}),m.jsx("li",{children:"JavaScript"}),m.jsx("li",{children:"Typescript"})]}),m.jsx("br",{})]}),K1=ce.div`
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
`,X1=()=>m.jsxs(Z1,{children:[m.jsx("h4",{children:"Professional Goals"}),m.jsx("ol",{children:m.jsx("li",{children:"Work for something great"})})]}),Z1=ce.div`
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
`,J1=()=>{const{ref:e,inView:t}=qe(),{ref:n,inView:r}=qe();return m.jsxs(q1,{id:"about",children:[m.jsx("svg",{className:"wave",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1440 319",children:m.jsx("path",{fill:"var(--background-color)","fill-opacity":"1",d:"M0,160L80,154.7C160,149,320,139,480,160C640,181,800,235,960,234.7C1120,235,1280,181,1360,154.7L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"})}),m.jsxs("div",{className:"content",children:[m.jsx("header",{ref:n,className:`${r?"grow":"hide"}`,children:m.jsx("h1",{ref:e,className:`${t?" animat":"hide"}`,children:"About me"})}),m.jsxs("header",{className:"content-header",children:[m.jsxs("div",{className:"about-image",children:[m.jsx("img",{src:V1,className:"img",alt:""}),m.jsx("h5",{children:"Fernando Fugihara"})]}),m.jsxs("div",{className:"description",children:[m.jsxs("p",{children:["I'm a undergraduate researcher at",m.jsx("a",{target:"_blank",className:"link",href:"https://www.unicamp.br/unicamp/",children:" University of Campinas"}),"."]}),m.jsx("p",{children:"In this moment, my interests are Machine Learning development and Computer Vision. Stay tune for the projects that will come!"}),m.jsx("hr",{}),m.jsxs("div",{className:"middle-section",children:[m.jsx(W1,{}),m.jsx(Q1,{}),m.jsx(G1,{}),m.jsx(X1,{})]})]})]})]})]})},q1=ce.section`
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
`,ey=()=>{const{ref:e,inView:t}=qe();qe();const{ref:n,inView:r}=qe(),{ref:o,inView:i}=qe();return P.useState(!1),m.jsx(ty,{id:"contact",children:m.jsxs("div",{className:"content",children:[m.jsx("header",{ref:o,className:`${i?"grow":"hide"}`,children:m.jsx("h1",{ref:e,className:`${t?" animated":"hide"}`,children:"Contact"})}),m.jsxs("div",{className:"form",children:[m.jsxs("div",{className:"form-row",children:[m.jsx("label",{htmlFor:"name",className:"form-label",children:"Name"}),m.jsx("input",{type:"text",id:"name",placeholder:"Your Name",className:"form-input",required:!0})]}),m.jsxs("div",{className:"form-row",children:[m.jsx("label",{htmlFor:"email",className:"form-label",children:"E-mail"}),m.jsx("input",{type:"email",id:"email",placeholder:"Your E-mail",className:"form-input",required:!0})]}),m.jsxs("div",{className:"form-row",children:[m.jsx("label",{htmlFor:"phone",className:"form-label",children:"Phone"}),m.jsx("input",{type:"text",id:"phone",placeholder:"Phone number",className:"form-input",required:!0})]}),m.jsx("textarea",{className:"form-textarea",name:"",id:"message",cols:"30",rows:"10",placeholder:"How can we help you?"}),m.jsx("button",{type:"submit",className:"btn btn-block",children:"Submit"})]}),m.jsxs("div",{ref:n,className:`${r?"icons animate":"icons hide"}`,children:[m.jsx(n1,{className:"social-media email"}),m.jsx("a",{href:"https://github.com/fekenzofugi",target:"_blank",children:m.jsx(Up,{className:"social-media"})}),m.jsx("a",{href:"https://www.linkedin.com/in/fernando-fugihara-116490322/",target:"_blank",children:m.jsx(e1,{className:"social-media linkedin"})})]})]})})},ty=ce.section`
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

`;function ny(e){return Vt({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M2.002 9.63c-.023.411.207.794.581.966l7.504 3.442 3.442 7.503c.164.356.52.583.909.583l.057-.002a1 1 0 0 0 .894-.686l5.595-17.032c.117-.358.023-.753-.243-1.02s-.66-.358-1.02-.243L2.688 8.736a1 1 0 0 0-.686.894zm16.464-3.971-4.182 12.73-2.534-5.522a.998.998 0 0 0-.492-.492L5.734 9.841l12.732-4.182z"}}]})(e)}const ry=()=>m.jsx(oy,{children:m.jsx("div",{className:"content",children:m.jsx("ul",{children:Bp.map(e=>m.jsx("li",{children:m.jsx("a",{href:"",children:e.name})},e.name))})})}),oy=ce.nav`
    position: fixed;
`,iy=()=>{const{ref:e,inView:t}=qe(),{ref:n,inView:r}=qe(),[o,i]=P.useState(!1),l=()=>{i(!o)};let a=()=>{const s=document.documentElement.scrollTop,u=document.documentElement.scrollHeight-document.documentElement.clientHeight,p=`${s/u}`,g=document.getElementById("progress-bar");g.style.transform=`scale(${p}, 1)`,g.style.opacity=`${p}`};return P.useEffect(()=>{window.addEventListener("scroll",a)},[]),m.jsxs(ly,{children:[m.jsx("div",{id:"progress-bar-container",children:m.jsx("div",{id:"progress-bar"})}),m.jsx(ry,{}),m.jsx(ny,{onClick:l,className:`${o?"nav-btn active":"nav-btn"}`}),m.jsx(i1,{showLittleNav:o,onClick:l}),m.jsxs("div",{id:"home",className:"home",children:[m.jsxs("div",{className:"first-page",children:[m.jsx("h1",{ref:e,className:`${t?"animate-name":"hide"}`,children:"KENMA"}),m.jsx("p",{ref:n,className:`${r?"animate-name":"hide"}`,children:"A software developer that builds web applications."})]}),m.jsx("svg",{className:"wave",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1440 319",children:m.jsx("path",{fill:"var(--background-color)","fill-opacity":"1",d:"M0,160L80,144C160,128,320,96,480,122.7C640,149,800,235,960,245.3C1120,256,1280,192,1360,160L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"})})]}),m.jsx(I1,{}),m.jsx(J1,{}),m.jsx(U1,{}),m.jsx(ey,{})]})},ly=ce.div`
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

`,Wp=[{count:1,title:"Welcome!",subHeader:"First post on the blog!",tags:["first post"],date:"27/01/2024",postBody:"<p>As you guys can see this is my first blog post, here i'll be sharing my journey to becoming the best programmer i can be, i'll post here the technologies i'm currently learning, projects and much more.</p><p></p>",img:"https://www.devopsschool.com/blog/wp-content/uploads/2022/03/eb9e3b7dab09358e7cf13f188f64f9f4.png"},{count:2,title:"Ruby Programming Language Basic Syntax",subHeader:"First Day learning ruby.",tags:["ruby","programming language"],date:"25/01/2024",postBody:`<p>Today i've started learning the Ruby programming language. The main motivation it's to build a good foundation and use properly the Ruby on Rails framework that transformed the way the web works and learn how to make proper web applications.</p><p>To learn the language i'll be using the book 'Programming Ruby 3.2: The Pragmatic Programmers Guide' by Dave Thomas, Chad Fowler, Andy Hunt.</p><h4>A pure object oriented language<h4/><p>An object is a thing that has data associated and functionality to manipulate that data. A language is object oriented if it has contructors methods to build these objects.</p><p>The biggest difference between Ruby and other programming languages such as Java, C# and Python is that all Ruby types are objects and there are no non-object types that behave differently.</p><p>The basic conecept of object oriented programming is a class that is a blueprint of a real world model. In Ruby you initialize an object using an special method called constructor that has a different syntax compared to Java and C#. The standard constructor in Ruby is called new.</p><pre>object1 = Class.new(arguments)</pre><p>Each object is derived by the same class but can have different data and an unique identifier that can be returned via the property object_id. Furthermore, for each object you can define instance variables - only available inside the scope of the object - and instance methods.</p><pre>object.method(something)</pre><p>The moment we call an instance method, a message is being sent to the object that message have the method's name and any arguments it expect, after that as a response the object - if the particular method is found - will involke the method. This concept was inherited from the SmallTalk programming language.</p><p>In Ruby you don't have static methods - functionality that belongs to a class - the methods needs to be called through an object. That's Ruby is called a pure object-oriented language because it doens't have basic types.</p><h4>Ruby Basic Syntax</h4><p>To continue exploring more advanced concepts inside Ruby, we need to know some basic syntax and conventions.</p><pre>#function syntax<br>def say_hello(name)<br>  result = 'hello ' + name <br>  return result<br>end<br><br>#call method<br>puts say_hello()</pre><p>One important thing to have in mind is that Ruby functions does not require the parenthesis unless they are directly needed for the interpreter. To avoid misunderstanding you can use in all situations parenthesis. Often we'll see functions with one parameter being called with no parenthesis.</p><p>There's a difference between strings inside single quotes and double quotes, using double quotes you Ruby allows you to break a line with the backslash n symbol and and using expression interpolation where you add a #{EXPRESSION} inside the string.</p><p>Variables and methods name conventions: </p><ul><li>Local Variable: name variable_underscore</li><li>Instance Variable: @name @variable_name</li><li>Class Variable: @@name @@variable_name</li><li>Global Variable $variable_name</li><li>Class Name: MyClass</li><li>Constant Name: CONSTANT_NAME</li></ul><h4>Arrays and Hashes</h4><p>Array is a data structure, it's a linear list of objects where we retrieve them via their index. In Ruby an array can have elements with different data types.The array initialization syntax is very simple we use the assignment operator followed by square brackets (array literal).</p><pre>array = [element1, element2]</pre><p>A hash is a data structure where the data is organized in the format key : value, the data is retrived by calling the keywords.</p><pre>hash = { 
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
end</pre><p>The first validation declares that a title value must be present. Because title is a string, this means that the title value must contain at least one non-whitespace character.</p><p>The second validation declares that the body value must be present. Additionally, it declares that the body value must be at least 10 characteres long.</p><p></p>`,img:"https://www.devopsschool.com/blog/wp-content/uploads/2022/03/eb9e3b7dab09358e7cf13f188f64f9f4.png"}],ay=()=>{const t=C0().id,n=Wp.find(r=>r.title==t);return m.jsx(sy,{children:m.jsxs("div",{className:"content",children:[m.jsxs("header",{children:[m.jsxs("h2",{children:["#",n.count," - ",n.title]}),m.jsx("h5",{children:n.date})]}),m.jsx("div",{className:"body",dangerouslySetInnerHTML:{__html:n.postBody}})]})})},sy=ce.div`
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
`,uy=e=>m.jsx(cy,{children:m.jsx(jo,{to:`${e.title}`,children:m.jsxs("div",{className:"content",children:[m.jsxs("header",{children:[m.jsxs("h4",{children:["#",e.count," - ",e.title]}),m.jsx("p",{children:e.subHeader}),m.jsx("p",{children:e.date}),m.jsx("div",{className:"tags",children:e.tags.map(t=>m.jsx(jo,{to:"/blog/{tag}",className:"tag",children:t},t))})]}),m.jsx("div",{className:"body"})]})})}),cy=ce.div`
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

`,dy=()=>m.jsx(fy,{children:Wp.map(e=>m.jsx(uy,{count:e.count,title:e.title,subHeader:e.subHeader,tags:e.tags,date:e.date,img:e.img},e))}),fy=ce.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column-reverse;
  gap: 2rem;
  margin: 5rem 0;
  min-height: 100vh !important;
`,py=()=>m.jsx(hy,{children:m.jsx(nu,{})}),hy=ce.div`
`,my=e=>m.jsx(gy,{children:m.jsxs("div",{className:"content",children:[m.jsxs("header",{children:[m.jsxs("h4",{children:["#",e.count," - ",e.title]}),m.jsx("p",{children:e.subHeader}),m.jsx("div",{className:"tags",children:e.tags.map(t=>m.jsx(jo,{to:"/blog/{tag}",className:"tag",children:t},t))})]}),m.jsx("div",{className:"body"}),m.jsx("a",{target:"_blank",href:e.date,children:"source code"})]})}),gy=ce.div`
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

`,vy=[{count:0,title:"Blink.io",subHeader:"Job Interview assistent.",tags:[],github:"https://github.com/fekenzofugi/blink.io",postBody:"<p>As you guys can see this is my first blog post, here i'll be sharing my journey to becoming the best programmer i can be, i'll post here the technologies i'm currently learning, projects and much more.</p><p></p>",img:"https://www.devopsschool.com/blog/wp-content/uploads/2022/03/eb9e3b7dab09358e7cf13f188f64f9f4.png"}],yy=()=>m.jsx(wy,{children:vy.map(e=>m.jsx(my,{count:e.count,title:e.title,subHeader:e.subHeader,tags:e.tags,date:e.github,img:e.img},e))}),wy=ce.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column-reverse;
  gap: 2rem;
  margin: 5rem 0;
  min-height: 100vh !important;
`,xy=B0([{path:"/portifolio",element:m.jsx(R1,{}),children:[{index:!0,element:m.jsx(iy,{})},{path:"blog",element:m.jsx(Xv,{}),children:[{index:!0,element:m.jsx(dy,{})},{path:":id",element:m.jsx(ay,{})}]},{path:"projects",element:m.jsx(py,{}),children:[{index:!0,element:m.jsx(yy,{})}]}]}]),ky=()=>{const e=localStorage.getItem("darkTheme")==="true";return document.body.classList.toggle("dark-theme",e),e},Sy=()=>m.jsx(m.Fragment,{children:m.jsx(A0,{router:xy})});na.createRoot(document.getElementById("root")).render(m.jsx(ft.StrictMode,{children:m.jsx(Sy,{})}));
