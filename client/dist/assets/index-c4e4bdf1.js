function gw(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function Wd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var dv={exports:{}},jl={},fv={exports:{}},H={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ts=Symbol.for("react.element"),vw=Symbol.for("react.portal"),yw=Symbol.for("react.fragment"),xw=Symbol.for("react.strict_mode"),ww=Symbol.for("react.profiler"),bw=Symbol.for("react.provider"),Sw=Symbol.for("react.context"),jw=Symbol.for("react.forward_ref"),kw=Symbol.for("react.suspense"),Cw=Symbol.for("react.memo"),Pw=Symbol.for("react.lazy"),Oh=Symbol.iterator;function Ew(e){return e===null||typeof e!="object"?null:(e=Oh&&e[Oh]||e["@@iterator"],typeof e=="function"?e:null)}var hv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},pv=Object.assign,mv={};function Pi(e,t,n){this.props=e,this.context=t,this.refs=mv,this.updater=n||hv}Pi.prototype.isReactComponent={};Pi.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Pi.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function gv(){}gv.prototype=Pi.prototype;function Qd(e,t,n){this.props=e,this.context=t,this.refs=mv,this.updater=n||hv}var qd=Qd.prototype=new gv;qd.constructor=Qd;pv(qd,Pi.prototype);qd.isPureReactComponent=!0;var Lh=Array.isArray,vv=Object.prototype.hasOwnProperty,Kd={current:null},yv={key:!0,ref:!0,__self:!0,__source:!0};function xv(e,t,n){var r,i={},o=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(o=""+t.key),t)vv.call(t,r)&&!yv.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:ts,type:e,key:o,ref:s,props:i,_owner:Kd.current}}function Tw(e,t){return{$$typeof:ts,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Gd(e){return typeof e=="object"&&e!==null&&e.$$typeof===ts}function Rw(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Fh=/\/+/g;function cc(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Rw(""+e.key):t.toString(36)}function Zs(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case ts:case vw:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+cc(s,0):r,Lh(i)?(n="",e!=null&&(n=e.replace(Fh,"$&/")+"/"),Zs(i,t,n,"",function(u){return u})):i!=null&&(Gd(i)&&(i=Tw(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(Fh,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=r===""?".":r+":",Lh(e))for(var a=0;a<e.length;a++){o=e[a];var l=r+cc(o,a);s+=Zs(o,t,n,l,i)}else if(l=Ew(e),typeof l=="function")for(e=l.call(e),a=0;!(o=e.next()).done;)o=o.value,l=r+cc(o,a++),s+=Zs(o,t,n,l,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function vs(e,t,n){if(e==null)return e;var r=[],i=0;return Zs(e,r,"","",function(o){return t.call(n,o,i++)}),r}function Aw(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ke={current:null},Js={transition:null},$w={ReactCurrentDispatcher:Ke,ReactCurrentBatchConfig:Js,ReactCurrentOwner:Kd};function wv(){throw Error("act(...) is not supported in production builds of React.")}H.Children={map:vs,forEach:function(e,t,n){vs(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return vs(e,function(){t++}),t},toArray:function(e){return vs(e,function(t){return t})||[]},only:function(e){if(!Gd(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};H.Component=Pi;H.Fragment=yw;H.Profiler=ww;H.PureComponent=Qd;H.StrictMode=xw;H.Suspense=kw;H.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$w;H.act=wv;H.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=pv({},e.props),i=e.key,o=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,s=Kd.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)vv.call(t,l)&&!yv.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:ts,type:e.type,key:i,ref:o,props:r,_owner:s}};H.createContext=function(e){return e={$$typeof:Sw,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:bw,_context:e},e.Consumer=e};H.createElement=xv;H.createFactory=function(e){var t=xv.bind(null,e);return t.type=e,t};H.createRef=function(){return{current:null}};H.forwardRef=function(e){return{$$typeof:jw,render:e}};H.isValidElement=Gd;H.lazy=function(e){return{$$typeof:Pw,_payload:{_status:-1,_result:e},_init:Aw}};H.memo=function(e,t){return{$$typeof:Cw,type:e,compare:t===void 0?null:t}};H.startTransition=function(e){var t=Js.transition;Js.transition={};try{e()}finally{Js.transition=t}};H.unstable_act=wv;H.useCallback=function(e,t){return Ke.current.useCallback(e,t)};H.useContext=function(e){return Ke.current.useContext(e)};H.useDebugValue=function(){};H.useDeferredValue=function(e){return Ke.current.useDeferredValue(e)};H.useEffect=function(e,t){return Ke.current.useEffect(e,t)};H.useId=function(){return Ke.current.useId()};H.useImperativeHandle=function(e,t,n){return Ke.current.useImperativeHandle(e,t,n)};H.useInsertionEffect=function(e,t){return Ke.current.useInsertionEffect(e,t)};H.useLayoutEffect=function(e,t){return Ke.current.useLayoutEffect(e,t)};H.useMemo=function(e,t){return Ke.current.useMemo(e,t)};H.useReducer=function(e,t,n){return Ke.current.useReducer(e,t,n)};H.useRef=function(e){return Ke.current.useRef(e)};H.useState=function(e){return Ke.current.useState(e)};H.useSyncExternalStore=function(e,t,n){return Ke.current.useSyncExternalStore(e,t,n)};H.useTransition=function(){return Ke.current.useTransition()};H.version="18.3.1";fv.exports=H;var j=fv.exports;const B=Wd(j),Ow=gw({__proto__:null,default:B},[j]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lw=j,Fw=Symbol.for("react.element"),Mw=Symbol.for("react.fragment"),zw=Object.prototype.hasOwnProperty,Nw=Lw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,_w={key:!0,ref:!0,__self:!0,__source:!0};function bv(e,t,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)zw.call(t,r)&&!_w.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Fw,type:e,key:o,ref:s,props:i,_owner:Nw.current}}jl.Fragment=Mw;jl.jsx=bv;jl.jsxs=bv;dv.exports=jl;var c=dv.exports,uu={},Sv={exports:{}},ut={},jv={exports:{}},kv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(A,$){var z=A.length;A.push($);e:for(;0<z;){var M=z-1>>>1,Q=A[M];if(0<i(Q,$))A[M]=$,A[z]=Q,z=M;else break e}}function n(A){return A.length===0?null:A[0]}function r(A){if(A.length===0)return null;var $=A[0],z=A.pop();if(z!==$){A[0]=z;e:for(var M=0,Q=A.length,_t=Q>>>1;M<_t;){var Ye=2*(M+1)-1,Pt=A[Ye],Pe=Ye+1,ft=A[Pe];if(0>i(Pt,z))Pe<Q&&0>i(ft,Pt)?(A[M]=ft,A[Pe]=z,M=Pe):(A[M]=Pt,A[Ye]=z,M=Ye);else if(Pe<Q&&0>i(ft,z))A[M]=ft,A[Pe]=z,M=Pe;else break e}}return $}function i(A,$){var z=A.sortIndex-$.sortIndex;return z!==0?z:A.id-$.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}var l=[],u=[],d=1,f=null,h=3,p=!1,y=!1,w=!1,S=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(A){for(var $=n(u);$!==null;){if($.callback===null)r(u);else if($.startTime<=A)r(u),$.sortIndex=$.expirationTime,t(l,$);else break;$=n(u)}}function b(A){if(w=!1,v(A),!y)if(n(l)!==null)y=!0,W(C);else{var $=n(u);$!==null&&le(b,$.startTime-A)}}function C(A,$){y=!1,w&&(w=!1,m(T),T=-1),p=!0;var z=h;try{for(v($),f=n(l);f!==null&&(!(f.expirationTime>$)||A&&!ne());){var M=f.callback;if(typeof M=="function"){f.callback=null,h=f.priorityLevel;var Q=M(f.expirationTime<=$);$=e.unstable_now(),typeof Q=="function"?f.callback=Q:f===n(l)&&r(l),v($)}else r(l);f=n(l)}if(f!==null)var _t=!0;else{var Ye=n(u);Ye!==null&&le(b,Ye.startTime-$),_t=!1}return _t}finally{f=null,h=z,p=!1}}var P=!1,k=null,T=-1,O=5,F=-1;function ne(){return!(e.unstable_now()-F<O)}function X(){if(k!==null){var A=e.unstable_now();F=A;var $=!0;try{$=k(!0,A)}finally{$?ee():(P=!1,k=null)}}else P=!1}var ee;if(typeof g=="function")ee=function(){g(X)};else if(typeof MessageChannel<"u"){var G=new MessageChannel,Ce=G.port2;G.port1.onmessage=X,ee=function(){Ce.postMessage(null)}}else ee=function(){S(X,0)};function W(A){k=A,P||(P=!0,ee())}function le(A,$){T=S(function(){A(e.unstable_now())},$)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(A){A.callback=null},e.unstable_continueExecution=function(){y||p||(y=!0,W(C))},e.unstable_forceFrameRate=function(A){0>A||125<A?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):O=0<A?Math.floor(1e3/A):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(A){switch(h){case 1:case 2:case 3:var $=3;break;default:$=h}var z=h;h=$;try{return A()}finally{h=z}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(A,$){switch(A){case 1:case 2:case 3:case 4:case 5:break;default:A=3}var z=h;h=A;try{return $()}finally{h=z}},e.unstable_scheduleCallback=function(A,$,z){var M=e.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?M+z:M):z=M,A){case 1:var Q=-1;break;case 2:Q=250;break;case 5:Q=1073741823;break;case 4:Q=1e4;break;default:Q=5e3}return Q=z+Q,A={id:d++,callback:$,priorityLevel:A,startTime:z,expirationTime:Q,sortIndex:-1},z>M?(A.sortIndex=z,t(u,A),n(l)===null&&A===n(u)&&(w?(m(T),T=-1):w=!0,le(b,z-M))):(A.sortIndex=Q,t(l,A),y||p||(y=!0,W(C))),A},e.unstable_shouldYield=ne,e.unstable_wrapCallback=function(A){var $=h;return function(){var z=h;h=$;try{return A.apply(this,arguments)}finally{h=z}}}})(kv);jv.exports=kv;var Dw=jv.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Iw=j,lt=Dw;function R(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Cv=new Set,Po={};function Tr(e,t){fi(e,t),fi(e+"Capture",t)}function fi(e,t){for(Po[e]=t,e=0;e<t.length;e++)Cv.add(t[e])}var an=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),du=Object.prototype.hasOwnProperty,Vw=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Mh={},zh={};function Uw(e){return du.call(zh,e)?!0:du.call(Mh,e)?!1:Vw.test(e)?zh[e]=!0:(Mh[e]=!0,!1)}function Bw(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Hw(e,t,n,r){if(t===null||typeof t>"u"||Bw(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ge(e,t,n,r,i,o,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var Fe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Fe[e]=new Ge(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Fe[t]=new Ge(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Fe[e]=new Ge(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Fe[e]=new Ge(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Fe[e]=new Ge(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Fe[e]=new Ge(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Fe[e]=new Ge(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Fe[e]=new Ge(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Fe[e]=new Ge(e,5,!1,e.toLowerCase(),null,!1,!1)});var Yd=/[\-:]([a-z])/g;function Xd(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Yd,Xd);Fe[t]=new Ge(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Yd,Xd);Fe[t]=new Ge(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Yd,Xd);Fe[t]=new Ge(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Fe[e]=new Ge(e,1,!1,e.toLowerCase(),null,!1,!1)});Fe.xlinkHref=new Ge("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Fe[e]=new Ge(e,1,!1,e.toLowerCase(),null,!0,!0)});function Zd(e,t,n,r){var i=Fe.hasOwnProperty(t)?Fe[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Hw(t,n,i,r)&&(n=null),r||i===null?Uw(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var hn=Iw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ys=Symbol.for("react.element"),Ur=Symbol.for("react.portal"),Br=Symbol.for("react.fragment"),Jd=Symbol.for("react.strict_mode"),fu=Symbol.for("react.profiler"),Pv=Symbol.for("react.provider"),Ev=Symbol.for("react.context"),ef=Symbol.for("react.forward_ref"),hu=Symbol.for("react.suspense"),pu=Symbol.for("react.suspense_list"),tf=Symbol.for("react.memo"),xn=Symbol.for("react.lazy"),Tv=Symbol.for("react.offscreen"),Nh=Symbol.iterator;function zi(e){return e===null||typeof e!="object"?null:(e=Nh&&e[Nh]||e["@@iterator"],typeof e=="function"?e:null)}var pe=Object.assign,uc;function to(e){if(uc===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);uc=t&&t[1]||""}return`
`+uc+e}var dc=!1;function fc(e,t){if(!e||dc)return"";dc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a]){var l=`
`+i[s].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=s&&0<=a);break}}}finally{dc=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?to(e):""}function Ww(e){switch(e.tag){case 5:return to(e.type);case 16:return to("Lazy");case 13:return to("Suspense");case 19:return to("SuspenseList");case 0:case 2:case 15:return e=fc(e.type,!1),e;case 11:return e=fc(e.type.render,!1),e;case 1:return e=fc(e.type,!0),e;default:return""}}function mu(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Br:return"Fragment";case Ur:return"Portal";case fu:return"Profiler";case Jd:return"StrictMode";case hu:return"Suspense";case pu:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ev:return(e.displayName||"Context")+".Consumer";case Pv:return(e._context.displayName||"Context")+".Provider";case ef:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case tf:return t=e.displayName||null,t!==null?t:mu(e.type)||"Memo";case xn:t=e._payload,e=e._init;try{return mu(e(t))}catch{}}return null}function Qw(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return mu(t);case 8:return t===Jd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Vn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Rv(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function qw(e){var t=Rv(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function xs(e){e._valueTracker||(e._valueTracker=qw(e))}function Av(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Rv(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Pa(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function gu(e,t){var n=t.checked;return pe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function _h(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Vn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function $v(e,t){t=t.checked,t!=null&&Zd(e,"checked",t,!1)}function vu(e,t){$v(e,t);var n=Vn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?yu(e,t.type,n):t.hasOwnProperty("defaultValue")&&yu(e,t.type,Vn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Dh(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function yu(e,t,n){(t!=="number"||Pa(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var no=Array.isArray;function si(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Vn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function xu(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(R(91));return pe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ih(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(R(92));if(no(n)){if(1<n.length)throw Error(R(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Vn(n)}}function Ov(e,t){var n=Vn(t.value),r=Vn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Vh(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Lv(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function wu(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Lv(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ws,Fv=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ws=ws||document.createElement("div"),ws.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ws.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Eo(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var lo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Kw=["Webkit","ms","Moz","O"];Object.keys(lo).forEach(function(e){Kw.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),lo[t]=lo[e]})});function Mv(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||lo.hasOwnProperty(e)&&lo[e]?(""+t).trim():t+"px"}function zv(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Mv(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Gw=pe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function bu(e,t){if(t){if(Gw[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(R(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(R(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(R(61))}if(t.style!=null&&typeof t.style!="object")throw Error(R(62))}}function Su(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ju=null;function nf(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ku=null,ai=null,li=null;function Uh(e){if(e=is(e)){if(typeof ku!="function")throw Error(R(280));var t=e.stateNode;t&&(t=Tl(t),ku(e.stateNode,e.type,t))}}function Nv(e){ai?li?li.push(e):li=[e]:ai=e}function _v(){if(ai){var e=ai,t=li;if(li=ai=null,Uh(e),t)for(e=0;e<t.length;e++)Uh(t[e])}}function Dv(e,t){return e(t)}function Iv(){}var hc=!1;function Vv(e,t,n){if(hc)return e(t,n);hc=!0;try{return Dv(e,t,n)}finally{hc=!1,(ai!==null||li!==null)&&(Iv(),_v())}}function To(e,t){var n=e.stateNode;if(n===null)return null;var r=Tl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(R(231,t,typeof n));return n}var Cu=!1;if(an)try{var Ni={};Object.defineProperty(Ni,"passive",{get:function(){Cu=!0}}),window.addEventListener("test",Ni,Ni),window.removeEventListener("test",Ni,Ni)}catch{Cu=!1}function Yw(e,t,n,r,i,o,s,a,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var co=!1,Ea=null,Ta=!1,Pu=null,Xw={onError:function(e){co=!0,Ea=e}};function Zw(e,t,n,r,i,o,s,a,l){co=!1,Ea=null,Yw.apply(Xw,arguments)}function Jw(e,t,n,r,i,o,s,a,l){if(Zw.apply(this,arguments),co){if(co){var u=Ea;co=!1,Ea=null}else throw Error(R(198));Ta||(Ta=!0,Pu=u)}}function Rr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Uv(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Bh(e){if(Rr(e)!==e)throw Error(R(188))}function eb(e){var t=e.alternate;if(!t){if(t=Rr(e),t===null)throw Error(R(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Bh(i),e;if(o===r)return Bh(i),t;o=o.sibling}throw Error(R(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s)throw Error(R(189))}}if(n.alternate!==r)throw Error(R(190))}if(n.tag!==3)throw Error(R(188));return n.stateNode.current===n?e:t}function Bv(e){return e=eb(e),e!==null?Hv(e):null}function Hv(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Hv(e);if(t!==null)return t;e=e.sibling}return null}var Wv=lt.unstable_scheduleCallback,Hh=lt.unstable_cancelCallback,tb=lt.unstable_shouldYield,nb=lt.unstable_requestPaint,ye=lt.unstable_now,rb=lt.unstable_getCurrentPriorityLevel,rf=lt.unstable_ImmediatePriority,Qv=lt.unstable_UserBlockingPriority,Ra=lt.unstable_NormalPriority,ib=lt.unstable_LowPriority,qv=lt.unstable_IdlePriority,kl=null,Ht=null;function ob(e){if(Ht&&typeof Ht.onCommitFiberRoot=="function")try{Ht.onCommitFiberRoot(kl,e,void 0,(e.current.flags&128)===128)}catch{}}var Ot=Math.clz32?Math.clz32:lb,sb=Math.log,ab=Math.LN2;function lb(e){return e>>>=0,e===0?32:31-(sb(e)/ab|0)|0}var bs=64,Ss=4194304;function ro(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Aa(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,s=n&268435455;if(s!==0){var a=s&~i;a!==0?r=ro(a):(o&=s,o!==0&&(r=ro(o)))}else s=n&~i,s!==0?r=ro(s):o!==0&&(r=ro(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ot(t),i=1<<n,r|=e[n],t&=~i;return r}function cb(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ub(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-Ot(o),a=1<<s,l=i[s];l===-1?(!(a&n)||a&r)&&(i[s]=cb(a,t)):l<=t&&(e.expiredLanes|=a),o&=~a}}function Eu(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Kv(){var e=bs;return bs<<=1,!(bs&4194240)&&(bs=64),e}function pc(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ns(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ot(t),e[t]=n}function db(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Ot(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function of(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ot(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var te=0;function Gv(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Yv,sf,Xv,Zv,Jv,Tu=!1,js=[],An=null,$n=null,On=null,Ro=new Map,Ao=new Map,kn=[],fb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Wh(e,t){switch(e){case"focusin":case"focusout":An=null;break;case"dragenter":case"dragleave":$n=null;break;case"mouseover":case"mouseout":On=null;break;case"pointerover":case"pointerout":Ro.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ao.delete(t.pointerId)}}function _i(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=is(t),t!==null&&sf(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function hb(e,t,n,r,i){switch(t){case"focusin":return An=_i(An,e,t,n,r,i),!0;case"dragenter":return $n=_i($n,e,t,n,r,i),!0;case"mouseover":return On=_i(On,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Ro.set(o,_i(Ro.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Ao.set(o,_i(Ao.get(o)||null,e,t,n,r,i)),!0}return!1}function e0(e){var t=ar(e.target);if(t!==null){var n=Rr(t);if(n!==null){if(t=n.tag,t===13){if(t=Uv(n),t!==null){e.blockedOn=t,Jv(e.priority,function(){Xv(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ea(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ru(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ju=r,n.target.dispatchEvent(r),ju=null}else return t=is(n),t!==null&&sf(t),e.blockedOn=n,!1;t.shift()}return!0}function Qh(e,t,n){ea(e)&&n.delete(t)}function pb(){Tu=!1,An!==null&&ea(An)&&(An=null),$n!==null&&ea($n)&&($n=null),On!==null&&ea(On)&&(On=null),Ro.forEach(Qh),Ao.forEach(Qh)}function Di(e,t){e.blockedOn===t&&(e.blockedOn=null,Tu||(Tu=!0,lt.unstable_scheduleCallback(lt.unstable_NormalPriority,pb)))}function $o(e){function t(i){return Di(i,e)}if(0<js.length){Di(js[0],e);for(var n=1;n<js.length;n++){var r=js[n];r.blockedOn===e&&(r.blockedOn=null)}}for(An!==null&&Di(An,e),$n!==null&&Di($n,e),On!==null&&Di(On,e),Ro.forEach(t),Ao.forEach(t),n=0;n<kn.length;n++)r=kn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<kn.length&&(n=kn[0],n.blockedOn===null);)e0(n),n.blockedOn===null&&kn.shift()}var ci=hn.ReactCurrentBatchConfig,$a=!0;function mb(e,t,n,r){var i=te,o=ci.transition;ci.transition=null;try{te=1,af(e,t,n,r)}finally{te=i,ci.transition=o}}function gb(e,t,n,r){var i=te,o=ci.transition;ci.transition=null;try{te=4,af(e,t,n,r)}finally{te=i,ci.transition=o}}function af(e,t,n,r){if($a){var i=Ru(e,t,n,r);if(i===null)kc(e,t,r,Oa,n),Wh(e,r);else if(hb(i,e,t,n,r))r.stopPropagation();else if(Wh(e,r),t&4&&-1<fb.indexOf(e)){for(;i!==null;){var o=is(i);if(o!==null&&Yv(o),o=Ru(e,t,n,r),o===null&&kc(e,t,r,Oa,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else kc(e,t,r,null,n)}}var Oa=null;function Ru(e,t,n,r){if(Oa=null,e=nf(r),e=ar(e),e!==null)if(t=Rr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Uv(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Oa=e,null}function t0(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(rb()){case rf:return 1;case Qv:return 4;case Ra:case ib:return 16;case qv:return 536870912;default:return 16}default:return 16}}var En=null,lf=null,ta=null;function n0(){if(ta)return ta;var e,t=lf,n=t.length,r,i="value"in En?En.value:En.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[o-r];r++);return ta=i.slice(e,1<r?1-r:void 0)}function na(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ks(){return!0}function qh(){return!1}function dt(e){function t(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?ks:qh,this.isPropagationStopped=qh,this}return pe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ks)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ks)},persist:function(){},isPersistent:ks}),t}var Ei={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},cf=dt(Ei),rs=pe({},Ei,{view:0,detail:0}),vb=dt(rs),mc,gc,Ii,Cl=pe({},rs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:uf,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ii&&(Ii&&e.type==="mousemove"?(mc=e.screenX-Ii.screenX,gc=e.screenY-Ii.screenY):gc=mc=0,Ii=e),mc)},movementY:function(e){return"movementY"in e?e.movementY:gc}}),Kh=dt(Cl),yb=pe({},Cl,{dataTransfer:0}),xb=dt(yb),wb=pe({},rs,{relatedTarget:0}),vc=dt(wb),bb=pe({},Ei,{animationName:0,elapsedTime:0,pseudoElement:0}),Sb=dt(bb),jb=pe({},Ei,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),kb=dt(jb),Cb=pe({},Ei,{data:0}),Gh=dt(Cb),Pb={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Eb={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Tb={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Rb(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Tb[e])?!!t[e]:!1}function uf(){return Rb}var Ab=pe({},rs,{key:function(e){if(e.key){var t=Pb[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=na(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Eb[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:uf,charCode:function(e){return e.type==="keypress"?na(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?na(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),$b=dt(Ab),Ob=pe({},Cl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Yh=dt(Ob),Lb=pe({},rs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:uf}),Fb=dt(Lb),Mb=pe({},Ei,{propertyName:0,elapsedTime:0,pseudoElement:0}),zb=dt(Mb),Nb=pe({},Cl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),_b=dt(Nb),Db=[9,13,27,32],df=an&&"CompositionEvent"in window,uo=null;an&&"documentMode"in document&&(uo=document.documentMode);var Ib=an&&"TextEvent"in window&&!uo,r0=an&&(!df||uo&&8<uo&&11>=uo),Xh=String.fromCharCode(32),Zh=!1;function i0(e,t){switch(e){case"keyup":return Db.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function o0(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Hr=!1;function Vb(e,t){switch(e){case"compositionend":return o0(t);case"keypress":return t.which!==32?null:(Zh=!0,Xh);case"textInput":return e=t.data,e===Xh&&Zh?null:e;default:return null}}function Ub(e,t){if(Hr)return e==="compositionend"||!df&&i0(e,t)?(e=n0(),ta=lf=En=null,Hr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return r0&&t.locale!=="ko"?null:t.data;default:return null}}var Bb={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Jh(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Bb[e.type]:t==="textarea"}function s0(e,t,n,r){Nv(r),t=La(t,"onChange"),0<t.length&&(n=new cf("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var fo=null,Oo=null;function Hb(e){v0(e,0)}function Pl(e){var t=qr(e);if(Av(t))return e}function Wb(e,t){if(e==="change")return t}var a0=!1;if(an){var yc;if(an){var xc="oninput"in document;if(!xc){var ep=document.createElement("div");ep.setAttribute("oninput","return;"),xc=typeof ep.oninput=="function"}yc=xc}else yc=!1;a0=yc&&(!document.documentMode||9<document.documentMode)}function tp(){fo&&(fo.detachEvent("onpropertychange",l0),Oo=fo=null)}function l0(e){if(e.propertyName==="value"&&Pl(Oo)){var t=[];s0(t,Oo,e,nf(e)),Vv(Hb,t)}}function Qb(e,t,n){e==="focusin"?(tp(),fo=t,Oo=n,fo.attachEvent("onpropertychange",l0)):e==="focusout"&&tp()}function qb(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Pl(Oo)}function Kb(e,t){if(e==="click")return Pl(t)}function Gb(e,t){if(e==="input"||e==="change")return Pl(t)}function Yb(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var zt=typeof Object.is=="function"?Object.is:Yb;function Lo(e,t){if(zt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!du.call(t,i)||!zt(e[i],t[i]))return!1}return!0}function np(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function rp(e,t){var n=np(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=np(n)}}function c0(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?c0(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function u0(){for(var e=window,t=Pa();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Pa(e.document)}return t}function ff(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Xb(e){var t=u0(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&c0(n.ownerDocument.documentElement,n)){if(r!==null&&ff(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=rp(n,o);var s=rp(n,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Zb=an&&"documentMode"in document&&11>=document.documentMode,Wr=null,Au=null,ho=null,$u=!1;function ip(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;$u||Wr==null||Wr!==Pa(r)||(r=Wr,"selectionStart"in r&&ff(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ho&&Lo(ho,r)||(ho=r,r=La(Au,"onSelect"),0<r.length&&(t=new cf("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Wr)))}function Cs(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Qr={animationend:Cs("Animation","AnimationEnd"),animationiteration:Cs("Animation","AnimationIteration"),animationstart:Cs("Animation","AnimationStart"),transitionend:Cs("Transition","TransitionEnd")},wc={},d0={};an&&(d0=document.createElement("div").style,"AnimationEvent"in window||(delete Qr.animationend.animation,delete Qr.animationiteration.animation,delete Qr.animationstart.animation),"TransitionEvent"in window||delete Qr.transitionend.transition);function El(e){if(wc[e])return wc[e];if(!Qr[e])return e;var t=Qr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in d0)return wc[e]=t[n];return e}var f0=El("animationend"),h0=El("animationiteration"),p0=El("animationstart"),m0=El("transitionend"),g0=new Map,op="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Qn(e,t){g0.set(e,t),Tr(t,[e])}for(var bc=0;bc<op.length;bc++){var Sc=op[bc],Jb=Sc.toLowerCase(),eS=Sc[0].toUpperCase()+Sc.slice(1);Qn(Jb,"on"+eS)}Qn(f0,"onAnimationEnd");Qn(h0,"onAnimationIteration");Qn(p0,"onAnimationStart");Qn("dblclick","onDoubleClick");Qn("focusin","onFocus");Qn("focusout","onBlur");Qn(m0,"onTransitionEnd");fi("onMouseEnter",["mouseout","mouseover"]);fi("onMouseLeave",["mouseout","mouseover"]);fi("onPointerEnter",["pointerout","pointerover"]);fi("onPointerLeave",["pointerout","pointerover"]);Tr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Tr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Tr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Tr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Tr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Tr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var io="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),tS=new Set("cancel close invalid load scroll toggle".split(" ").concat(io));function sp(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Jw(r,t,void 0,e),e.currentTarget=null}function v0(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var s=r.length-1;0<=s;s--){var a=r[s],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==o&&i.isPropagationStopped())break e;sp(i,a,u),o=l}else for(s=0;s<r.length;s++){if(a=r[s],l=a.instance,u=a.currentTarget,a=a.listener,l!==o&&i.isPropagationStopped())break e;sp(i,a,u),o=l}}}if(Ta)throw e=Pu,Ta=!1,Pu=null,e}function oe(e,t){var n=t[zu];n===void 0&&(n=t[zu]=new Set);var r=e+"__bubble";n.has(r)||(y0(t,e,2,!1),n.add(r))}function jc(e,t,n){var r=0;t&&(r|=4),y0(n,e,r,t)}var Ps="_reactListening"+Math.random().toString(36).slice(2);function Fo(e){if(!e[Ps]){e[Ps]=!0,Cv.forEach(function(n){n!=="selectionchange"&&(tS.has(n)||jc(n,!1,e),jc(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ps]||(t[Ps]=!0,jc("selectionchange",!1,t))}}function y0(e,t,n,r){switch(t0(t)){case 1:var i=mb;break;case 4:i=gb;break;default:i=af}n=i.bind(null,t,n,e),i=void 0,!Cu||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function kc(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;s=s.return}for(;a!==null;){if(s=ar(a),s===null)return;if(l=s.tag,l===5||l===6){r=o=s;continue e}a=a.parentNode}}r=r.return}Vv(function(){var u=o,d=nf(n),f=[];e:{var h=g0.get(e);if(h!==void 0){var p=cf,y=e;switch(e){case"keypress":if(na(n)===0)break e;case"keydown":case"keyup":p=$b;break;case"focusin":y="focus",p=vc;break;case"focusout":y="blur",p=vc;break;case"beforeblur":case"afterblur":p=vc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Kh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=xb;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=Fb;break;case f0:case h0:case p0:p=Sb;break;case m0:p=zb;break;case"scroll":p=vb;break;case"wheel":p=_b;break;case"copy":case"cut":case"paste":p=kb;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Yh}var w=(t&4)!==0,S=!w&&e==="scroll",m=w?h!==null?h+"Capture":null:h;w=[];for(var g=u,v;g!==null;){v=g;var b=v.stateNode;if(v.tag===5&&b!==null&&(v=b,m!==null&&(b=To(g,m),b!=null&&w.push(Mo(g,b,v)))),S)break;g=g.return}0<w.length&&(h=new p(h,y,null,n,d),f.push({event:h,listeners:w}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",p=e==="mouseout"||e==="pointerout",h&&n!==ju&&(y=n.relatedTarget||n.fromElement)&&(ar(y)||y[ln]))break e;if((p||h)&&(h=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,p?(y=n.relatedTarget||n.toElement,p=u,y=y?ar(y):null,y!==null&&(S=Rr(y),y!==S||y.tag!==5&&y.tag!==6)&&(y=null)):(p=null,y=u),p!==y)){if(w=Kh,b="onMouseLeave",m="onMouseEnter",g="mouse",(e==="pointerout"||e==="pointerover")&&(w=Yh,b="onPointerLeave",m="onPointerEnter",g="pointer"),S=p==null?h:qr(p),v=y==null?h:qr(y),h=new w(b,g+"leave",p,n,d),h.target=S,h.relatedTarget=v,b=null,ar(d)===u&&(w=new w(m,g+"enter",y,n,d),w.target=v,w.relatedTarget=S,b=w),S=b,p&&y)t:{for(w=p,m=y,g=0,v=w;v;v=Fr(v))g++;for(v=0,b=m;b;b=Fr(b))v++;for(;0<g-v;)w=Fr(w),g--;for(;0<v-g;)m=Fr(m),v--;for(;g--;){if(w===m||m!==null&&w===m.alternate)break t;w=Fr(w),m=Fr(m)}w=null}else w=null;p!==null&&ap(f,h,p,w,!1),y!==null&&S!==null&&ap(f,S,y,w,!0)}}e:{if(h=u?qr(u):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var C=Wb;else if(Jh(h))if(a0)C=Gb;else{C=qb;var P=Qb}else(p=h.nodeName)&&p.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(C=Kb);if(C&&(C=C(e,u))){s0(f,C,n,d);break e}P&&P(e,h,u),e==="focusout"&&(P=h._wrapperState)&&P.controlled&&h.type==="number"&&yu(h,"number",h.value)}switch(P=u?qr(u):window,e){case"focusin":(Jh(P)||P.contentEditable==="true")&&(Wr=P,Au=u,ho=null);break;case"focusout":ho=Au=Wr=null;break;case"mousedown":$u=!0;break;case"contextmenu":case"mouseup":case"dragend":$u=!1,ip(f,n,d);break;case"selectionchange":if(Zb)break;case"keydown":case"keyup":ip(f,n,d)}var k;if(df)e:{switch(e){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else Hr?i0(e,n)&&(T="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&(r0&&n.locale!=="ko"&&(Hr||T!=="onCompositionStart"?T==="onCompositionEnd"&&Hr&&(k=n0()):(En=d,lf="value"in En?En.value:En.textContent,Hr=!0)),P=La(u,T),0<P.length&&(T=new Gh(T,e,null,n,d),f.push({event:T,listeners:P}),k?T.data=k:(k=o0(n),k!==null&&(T.data=k)))),(k=Ib?Vb(e,n):Ub(e,n))&&(u=La(u,"onBeforeInput"),0<u.length&&(d=new Gh("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:u}),d.data=k))}v0(f,t)})}function Mo(e,t,n){return{instance:e,listener:t,currentTarget:n}}function La(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=To(e,n),o!=null&&r.unshift(Mo(e,o,i)),o=To(e,t),o!=null&&r.push(Mo(e,o,i))),e=e.return}return r}function Fr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ap(e,t,n,r,i){for(var o=t._reactName,s=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=To(n,o),l!=null&&s.unshift(Mo(n,l,a))):i||(l=To(n,o),l!=null&&s.push(Mo(n,l,a)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var nS=/\r\n?/g,rS=/\u0000|\uFFFD/g;function lp(e){return(typeof e=="string"?e:""+e).replace(nS,`
`).replace(rS,"")}function Es(e,t,n){if(t=lp(t),lp(e)!==t&&n)throw Error(R(425))}function Fa(){}var Ou=null,Lu=null;function Fu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Mu=typeof setTimeout=="function"?setTimeout:void 0,iS=typeof clearTimeout=="function"?clearTimeout:void 0,cp=typeof Promise=="function"?Promise:void 0,oS=typeof queueMicrotask=="function"?queueMicrotask:typeof cp<"u"?function(e){return cp.resolve(null).then(e).catch(sS)}:Mu;function sS(e){setTimeout(function(){throw e})}function Cc(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),$o(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);$o(t)}function Ln(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function up(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Ti=Math.random().toString(36).slice(2),Bt="__reactFiber$"+Ti,zo="__reactProps$"+Ti,ln="__reactContainer$"+Ti,zu="__reactEvents$"+Ti,aS="__reactListeners$"+Ti,lS="__reactHandles$"+Ti;function ar(e){var t=e[Bt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ln]||n[Bt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=up(e);e!==null;){if(n=e[Bt])return n;e=up(e)}return t}e=n,n=e.parentNode}return null}function is(e){return e=e[Bt]||e[ln],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function qr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(R(33))}function Tl(e){return e[zo]||null}var Nu=[],Kr=-1;function qn(e){return{current:e}}function ae(e){0>Kr||(e.current=Nu[Kr],Nu[Kr]=null,Kr--)}function re(e,t){Kr++,Nu[Kr]=e.current,e.current=t}var Un={},Ue=qn(Un),et=qn(!1),xr=Un;function hi(e,t){var n=e.type.contextTypes;if(!n)return Un;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function tt(e){return e=e.childContextTypes,e!=null}function Ma(){ae(et),ae(Ue)}function dp(e,t,n){if(Ue.current!==Un)throw Error(R(168));re(Ue,t),re(et,n)}function x0(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(R(108,Qw(e)||"Unknown",i));return pe({},n,r)}function za(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Un,xr=Ue.current,re(Ue,e),re(et,et.current),!0}function fp(e,t,n){var r=e.stateNode;if(!r)throw Error(R(169));n?(e=x0(e,t,xr),r.__reactInternalMemoizedMergedChildContext=e,ae(et),ae(Ue),re(Ue,e)):ae(et),re(et,n)}var Jt=null,Rl=!1,Pc=!1;function w0(e){Jt===null?Jt=[e]:Jt.push(e)}function cS(e){Rl=!0,w0(e)}function Kn(){if(!Pc&&Jt!==null){Pc=!0;var e=0,t=te;try{var n=Jt;for(te=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Jt=null,Rl=!1}catch(i){throw Jt!==null&&(Jt=Jt.slice(e+1)),Wv(rf,Kn),i}finally{te=t,Pc=!1}}return null}var Gr=[],Yr=0,Na=null,_a=0,vt=[],yt=0,wr=null,en=1,tn="";function tr(e,t){Gr[Yr++]=_a,Gr[Yr++]=Na,Na=e,_a=t}function b0(e,t,n){vt[yt++]=en,vt[yt++]=tn,vt[yt++]=wr,wr=e;var r=en;e=tn;var i=32-Ot(r)-1;r&=~(1<<i),n+=1;var o=32-Ot(t)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,en=1<<32-Ot(t)+i|n<<i|r,tn=o+e}else en=1<<o|n<<i|r,tn=e}function hf(e){e.return!==null&&(tr(e,1),b0(e,1,0))}function pf(e){for(;e===Na;)Na=Gr[--Yr],Gr[Yr]=null,_a=Gr[--Yr],Gr[Yr]=null;for(;e===wr;)wr=vt[--yt],vt[yt]=null,tn=vt[--yt],vt[yt]=null,en=vt[--yt],vt[yt]=null}var at=null,st=null,ce=!1,$t=null;function S0(e,t){var n=wt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function hp(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,at=e,st=Ln(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,at=e,st=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=wr!==null?{id:en,overflow:tn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=wt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,at=e,st=null,!0):!1;default:return!1}}function _u(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Du(e){if(ce){var t=st;if(t){var n=t;if(!hp(e,t)){if(_u(e))throw Error(R(418));t=Ln(n.nextSibling);var r=at;t&&hp(e,t)?S0(r,n):(e.flags=e.flags&-4097|2,ce=!1,at=e)}}else{if(_u(e))throw Error(R(418));e.flags=e.flags&-4097|2,ce=!1,at=e}}}function pp(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;at=e}function Ts(e){if(e!==at)return!1;if(!ce)return pp(e),ce=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Fu(e.type,e.memoizedProps)),t&&(t=st)){if(_u(e))throw j0(),Error(R(418));for(;t;)S0(e,t),t=Ln(t.nextSibling)}if(pp(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(R(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){st=Ln(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}st=null}}else st=at?Ln(e.stateNode.nextSibling):null;return!0}function j0(){for(var e=st;e;)e=Ln(e.nextSibling)}function pi(){st=at=null,ce=!1}function mf(e){$t===null?$t=[e]:$t.push(e)}var uS=hn.ReactCurrentBatchConfig;function Vi(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(R(309));var r=n.stateNode}if(!r)throw Error(R(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(s){var a=i.refs;s===null?delete a[o]:a[o]=s},t._stringRef=o,t)}if(typeof e!="string")throw Error(R(284));if(!n._owner)throw Error(R(290,e))}return e}function Rs(e,t){throw e=Object.prototype.toString.call(t),Error(R(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function mp(e){var t=e._init;return t(e._payload)}function k0(e){function t(m,g){if(e){var v=m.deletions;v===null?(m.deletions=[g],m.flags|=16):v.push(g)}}function n(m,g){if(!e)return null;for(;g!==null;)t(m,g),g=g.sibling;return null}function r(m,g){for(m=new Map;g!==null;)g.key!==null?m.set(g.key,g):m.set(g.index,g),g=g.sibling;return m}function i(m,g){return m=Nn(m,g),m.index=0,m.sibling=null,m}function o(m,g,v){return m.index=v,e?(v=m.alternate,v!==null?(v=v.index,v<g?(m.flags|=2,g):v):(m.flags|=2,g)):(m.flags|=1048576,g)}function s(m){return e&&m.alternate===null&&(m.flags|=2),m}function a(m,g,v,b){return g===null||g.tag!==6?(g=Lc(v,m.mode,b),g.return=m,g):(g=i(g,v),g.return=m,g)}function l(m,g,v,b){var C=v.type;return C===Br?d(m,g,v.props.children,b,v.key):g!==null&&(g.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===xn&&mp(C)===g.type)?(b=i(g,v.props),b.ref=Vi(m,g,v),b.return=m,b):(b=ca(v.type,v.key,v.props,null,m.mode,b),b.ref=Vi(m,g,v),b.return=m,b)}function u(m,g,v,b){return g===null||g.tag!==4||g.stateNode.containerInfo!==v.containerInfo||g.stateNode.implementation!==v.implementation?(g=Fc(v,m.mode,b),g.return=m,g):(g=i(g,v.children||[]),g.return=m,g)}function d(m,g,v,b,C){return g===null||g.tag!==7?(g=gr(v,m.mode,b,C),g.return=m,g):(g=i(g,v),g.return=m,g)}function f(m,g,v){if(typeof g=="string"&&g!==""||typeof g=="number")return g=Lc(""+g,m.mode,v),g.return=m,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case ys:return v=ca(g.type,g.key,g.props,null,m.mode,v),v.ref=Vi(m,null,g),v.return=m,v;case Ur:return g=Fc(g,m.mode,v),g.return=m,g;case xn:var b=g._init;return f(m,b(g._payload),v)}if(no(g)||zi(g))return g=gr(g,m.mode,v,null),g.return=m,g;Rs(m,g)}return null}function h(m,g,v,b){var C=g!==null?g.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return C!==null?null:a(m,g,""+v,b);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case ys:return v.key===C?l(m,g,v,b):null;case Ur:return v.key===C?u(m,g,v,b):null;case xn:return C=v._init,h(m,g,C(v._payload),b)}if(no(v)||zi(v))return C!==null?null:d(m,g,v,b,null);Rs(m,v)}return null}function p(m,g,v,b,C){if(typeof b=="string"&&b!==""||typeof b=="number")return m=m.get(v)||null,a(g,m,""+b,C);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case ys:return m=m.get(b.key===null?v:b.key)||null,l(g,m,b,C);case Ur:return m=m.get(b.key===null?v:b.key)||null,u(g,m,b,C);case xn:var P=b._init;return p(m,g,v,P(b._payload),C)}if(no(b)||zi(b))return m=m.get(v)||null,d(g,m,b,C,null);Rs(g,b)}return null}function y(m,g,v,b){for(var C=null,P=null,k=g,T=g=0,O=null;k!==null&&T<v.length;T++){k.index>T?(O=k,k=null):O=k.sibling;var F=h(m,k,v[T],b);if(F===null){k===null&&(k=O);break}e&&k&&F.alternate===null&&t(m,k),g=o(F,g,T),P===null?C=F:P.sibling=F,P=F,k=O}if(T===v.length)return n(m,k),ce&&tr(m,T),C;if(k===null){for(;T<v.length;T++)k=f(m,v[T],b),k!==null&&(g=o(k,g,T),P===null?C=k:P.sibling=k,P=k);return ce&&tr(m,T),C}for(k=r(m,k);T<v.length;T++)O=p(k,m,T,v[T],b),O!==null&&(e&&O.alternate!==null&&k.delete(O.key===null?T:O.key),g=o(O,g,T),P===null?C=O:P.sibling=O,P=O);return e&&k.forEach(function(ne){return t(m,ne)}),ce&&tr(m,T),C}function w(m,g,v,b){var C=zi(v);if(typeof C!="function")throw Error(R(150));if(v=C.call(v),v==null)throw Error(R(151));for(var P=C=null,k=g,T=g=0,O=null,F=v.next();k!==null&&!F.done;T++,F=v.next()){k.index>T?(O=k,k=null):O=k.sibling;var ne=h(m,k,F.value,b);if(ne===null){k===null&&(k=O);break}e&&k&&ne.alternate===null&&t(m,k),g=o(ne,g,T),P===null?C=ne:P.sibling=ne,P=ne,k=O}if(F.done)return n(m,k),ce&&tr(m,T),C;if(k===null){for(;!F.done;T++,F=v.next())F=f(m,F.value,b),F!==null&&(g=o(F,g,T),P===null?C=F:P.sibling=F,P=F);return ce&&tr(m,T),C}for(k=r(m,k);!F.done;T++,F=v.next())F=p(k,m,T,F.value,b),F!==null&&(e&&F.alternate!==null&&k.delete(F.key===null?T:F.key),g=o(F,g,T),P===null?C=F:P.sibling=F,P=F);return e&&k.forEach(function(X){return t(m,X)}),ce&&tr(m,T),C}function S(m,g,v,b){if(typeof v=="object"&&v!==null&&v.type===Br&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case ys:e:{for(var C=v.key,P=g;P!==null;){if(P.key===C){if(C=v.type,C===Br){if(P.tag===7){n(m,P.sibling),g=i(P,v.props.children),g.return=m,m=g;break e}}else if(P.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===xn&&mp(C)===P.type){n(m,P.sibling),g=i(P,v.props),g.ref=Vi(m,P,v),g.return=m,m=g;break e}n(m,P);break}else t(m,P);P=P.sibling}v.type===Br?(g=gr(v.props.children,m.mode,b,v.key),g.return=m,m=g):(b=ca(v.type,v.key,v.props,null,m.mode,b),b.ref=Vi(m,g,v),b.return=m,m=b)}return s(m);case Ur:e:{for(P=v.key;g!==null;){if(g.key===P)if(g.tag===4&&g.stateNode.containerInfo===v.containerInfo&&g.stateNode.implementation===v.implementation){n(m,g.sibling),g=i(g,v.children||[]),g.return=m,m=g;break e}else{n(m,g);break}else t(m,g);g=g.sibling}g=Fc(v,m.mode,b),g.return=m,m=g}return s(m);case xn:return P=v._init,S(m,g,P(v._payload),b)}if(no(v))return y(m,g,v,b);if(zi(v))return w(m,g,v,b);Rs(m,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,g!==null&&g.tag===6?(n(m,g.sibling),g=i(g,v),g.return=m,m=g):(n(m,g),g=Lc(v,m.mode,b),g.return=m,m=g),s(m)):n(m,g)}return S}var mi=k0(!0),C0=k0(!1),Da=qn(null),Ia=null,Xr=null,gf=null;function vf(){gf=Xr=Ia=null}function yf(e){var t=Da.current;ae(Da),e._currentValue=t}function Iu(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function ui(e,t){Ia=e,gf=Xr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Je=!0),e.firstContext=null)}function jt(e){var t=e._currentValue;if(gf!==e)if(e={context:e,memoizedValue:t,next:null},Xr===null){if(Ia===null)throw Error(R(308));Xr=e,Ia.dependencies={lanes:0,firstContext:e}}else Xr=Xr.next=e;return t}var lr=null;function xf(e){lr===null?lr=[e]:lr.push(e)}function P0(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,xf(t)):(n.next=i.next,i.next=n),t.interleaved=n,cn(e,r)}function cn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var wn=!1;function wf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function E0(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function rn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Fn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,K&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,cn(e,n)}return i=r.interleaved,i===null?(t.next=t,xf(r)):(t.next=i.next,i.next=t),r.interleaved=t,cn(e,n)}function ra(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,of(e,n)}}function gp(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Va(e,t,n,r){var i=e.updateQueue;wn=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,s===null?o=u:s.next=u,s=l;var d=e.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==s&&(a===null?d.firstBaseUpdate=u:a.next=u,d.lastBaseUpdate=l))}if(o!==null){var f=i.baseState;s=0,d=u=l=null,a=o;do{var h=a.lane,p=a.eventTime;if((r&h)===h){d!==null&&(d=d.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=e,w=a;switch(h=t,p=n,w.tag){case 1:if(y=w.payload,typeof y=="function"){f=y.call(p,f,h);break e}f=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=w.payload,h=typeof y=="function"?y.call(p,f,h):y,h==null)break e;f=pe({},f,h);break e;case 2:wn=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,h=i.effects,h===null?i.effects=[a]:h.push(a))}else p={eventTime:p,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(u=d=p,l=f):d=d.next=p,s|=h;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;h=a,a=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(1);if(d===null&&(l=f),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Sr|=s,e.lanes=s,e.memoizedState=f}}function vp(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(R(191,i));i.call(r)}}}var os={},Wt=qn(os),No=qn(os),_o=qn(os);function cr(e){if(e===os)throw Error(R(174));return e}function bf(e,t){switch(re(_o,t),re(No,e),re(Wt,os),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:wu(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=wu(t,e)}ae(Wt),re(Wt,t)}function gi(){ae(Wt),ae(No),ae(_o)}function T0(e){cr(_o.current);var t=cr(Wt.current),n=wu(t,e.type);t!==n&&(re(No,e),re(Wt,n))}function Sf(e){No.current===e&&(ae(Wt),ae(No))}var de=qn(0);function Ua(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ec=[];function jf(){for(var e=0;e<Ec.length;e++)Ec[e]._workInProgressVersionPrimary=null;Ec.length=0}var ia=hn.ReactCurrentDispatcher,Tc=hn.ReactCurrentBatchConfig,br=0,he=null,Ee=null,Re=null,Ba=!1,po=!1,Do=0,dS=0;function Me(){throw Error(R(321))}function kf(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!zt(e[n],t[n]))return!1;return!0}function Cf(e,t,n,r,i,o){if(br=o,he=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ia.current=e===null||e.memoizedState===null?mS:gS,e=n(r,i),po){o=0;do{if(po=!1,Do=0,25<=o)throw Error(R(301));o+=1,Re=Ee=null,t.updateQueue=null,ia.current=vS,e=n(r,i)}while(po)}if(ia.current=Ha,t=Ee!==null&&Ee.next!==null,br=0,Re=Ee=he=null,Ba=!1,t)throw Error(R(300));return e}function Pf(){var e=Do!==0;return Do=0,e}function Vt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Re===null?he.memoizedState=Re=e:Re=Re.next=e,Re}function kt(){if(Ee===null){var e=he.alternate;e=e!==null?e.memoizedState:null}else e=Ee.next;var t=Re===null?he.memoizedState:Re.next;if(t!==null)Re=t,Ee=e;else{if(e===null)throw Error(R(310));Ee=e,e={memoizedState:Ee.memoizedState,baseState:Ee.baseState,baseQueue:Ee.baseQueue,queue:Ee.queue,next:null},Re===null?he.memoizedState=Re=e:Re=Re.next=e}return Re}function Io(e,t){return typeof t=="function"?t(e):t}function Rc(e){var t=kt(),n=t.queue;if(n===null)throw Error(R(311));n.lastRenderedReducer=e;var r=Ee,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=s=null,l=null,u=o;do{var d=u.lane;if((br&d)===d)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var f={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=f,s=r):l=l.next=f,he.lanes|=d,Sr|=d}u=u.next}while(u!==null&&u!==o);l===null?s=r:l.next=a,zt(r,t.memoizedState)||(Je=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,he.lanes|=o,Sr|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Ac(e){var t=kt(),n=t.queue;if(n===null)throw Error(R(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);zt(o,t.memoizedState)||(Je=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function R0(){}function A0(e,t){var n=he,r=kt(),i=t(),o=!zt(r.memoizedState,i);if(o&&(r.memoizedState=i,Je=!0),r=r.queue,Ef(L0.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||Re!==null&&Re.memoizedState.tag&1){if(n.flags|=2048,Vo(9,O0.bind(null,n,r,i,t),void 0,null),$e===null)throw Error(R(349));br&30||$0(n,t,i)}return i}function $0(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=he.updateQueue,t===null?(t={lastEffect:null,stores:null},he.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function O0(e,t,n,r){t.value=n,t.getSnapshot=r,F0(t)&&M0(e)}function L0(e,t,n){return n(function(){F0(t)&&M0(e)})}function F0(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!zt(e,n)}catch{return!0}}function M0(e){var t=cn(e,1);t!==null&&Lt(t,e,1,-1)}function yp(e){var t=Vt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Io,lastRenderedState:e},t.queue=e,e=e.dispatch=pS.bind(null,he,e),[t.memoizedState,e]}function Vo(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=he.updateQueue,t===null?(t={lastEffect:null,stores:null},he.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function z0(){return kt().memoizedState}function oa(e,t,n,r){var i=Vt();he.flags|=e,i.memoizedState=Vo(1|t,n,void 0,r===void 0?null:r)}function Al(e,t,n,r){var i=kt();r=r===void 0?null:r;var o=void 0;if(Ee!==null){var s=Ee.memoizedState;if(o=s.destroy,r!==null&&kf(r,s.deps)){i.memoizedState=Vo(t,n,o,r);return}}he.flags|=e,i.memoizedState=Vo(1|t,n,o,r)}function xp(e,t){return oa(8390656,8,e,t)}function Ef(e,t){return Al(2048,8,e,t)}function N0(e,t){return Al(4,2,e,t)}function _0(e,t){return Al(4,4,e,t)}function D0(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function I0(e,t,n){return n=n!=null?n.concat([e]):null,Al(4,4,D0.bind(null,t,e),n)}function Tf(){}function V0(e,t){var n=kt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&kf(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function U0(e,t){var n=kt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&kf(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function B0(e,t,n){return br&21?(zt(n,t)||(n=Kv(),he.lanes|=n,Sr|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Je=!0),e.memoizedState=n)}function fS(e,t){var n=te;te=n!==0&&4>n?n:4,e(!0);var r=Tc.transition;Tc.transition={};try{e(!1),t()}finally{te=n,Tc.transition=r}}function H0(){return kt().memoizedState}function hS(e,t,n){var r=zn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},W0(e))Q0(t,n);else if(n=P0(e,t,n,r),n!==null){var i=qe();Lt(n,e,r,i),q0(n,t,r)}}function pS(e,t,n){var r=zn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(W0(e))Q0(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,a=o(s,n);if(i.hasEagerState=!0,i.eagerState=a,zt(a,s)){var l=t.interleaved;l===null?(i.next=i,xf(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=P0(e,t,i,r),n!==null&&(i=qe(),Lt(n,e,r,i),q0(n,t,r))}}function W0(e){var t=e.alternate;return e===he||t!==null&&t===he}function Q0(e,t){po=Ba=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function q0(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,of(e,n)}}var Ha={readContext:jt,useCallback:Me,useContext:Me,useEffect:Me,useImperativeHandle:Me,useInsertionEffect:Me,useLayoutEffect:Me,useMemo:Me,useReducer:Me,useRef:Me,useState:Me,useDebugValue:Me,useDeferredValue:Me,useTransition:Me,useMutableSource:Me,useSyncExternalStore:Me,useId:Me,unstable_isNewReconciler:!1},mS={readContext:jt,useCallback:function(e,t){return Vt().memoizedState=[e,t===void 0?null:t],e},useContext:jt,useEffect:xp,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,oa(4194308,4,D0.bind(null,t,e),n)},useLayoutEffect:function(e,t){return oa(4194308,4,e,t)},useInsertionEffect:function(e,t){return oa(4,2,e,t)},useMemo:function(e,t){var n=Vt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Vt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=hS.bind(null,he,e),[r.memoizedState,e]},useRef:function(e){var t=Vt();return e={current:e},t.memoizedState=e},useState:yp,useDebugValue:Tf,useDeferredValue:function(e){return Vt().memoizedState=e},useTransition:function(){var e=yp(!1),t=e[0];return e=fS.bind(null,e[1]),Vt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=he,i=Vt();if(ce){if(n===void 0)throw Error(R(407));n=n()}else{if(n=t(),$e===null)throw Error(R(349));br&30||$0(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,xp(L0.bind(null,r,o,e),[e]),r.flags|=2048,Vo(9,O0.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Vt(),t=$e.identifierPrefix;if(ce){var n=tn,r=en;n=(r&~(1<<32-Ot(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Do++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=dS++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},gS={readContext:jt,useCallback:V0,useContext:jt,useEffect:Ef,useImperativeHandle:I0,useInsertionEffect:N0,useLayoutEffect:_0,useMemo:U0,useReducer:Rc,useRef:z0,useState:function(){return Rc(Io)},useDebugValue:Tf,useDeferredValue:function(e){var t=kt();return B0(t,Ee.memoizedState,e)},useTransition:function(){var e=Rc(Io)[0],t=kt().memoizedState;return[e,t]},useMutableSource:R0,useSyncExternalStore:A0,useId:H0,unstable_isNewReconciler:!1},vS={readContext:jt,useCallback:V0,useContext:jt,useEffect:Ef,useImperativeHandle:I0,useInsertionEffect:N0,useLayoutEffect:_0,useMemo:U0,useReducer:Ac,useRef:z0,useState:function(){return Ac(Io)},useDebugValue:Tf,useDeferredValue:function(e){var t=kt();return Ee===null?t.memoizedState=e:B0(t,Ee.memoizedState,e)},useTransition:function(){var e=Ac(Io)[0],t=kt().memoizedState;return[e,t]},useMutableSource:R0,useSyncExternalStore:A0,useId:H0,unstable_isNewReconciler:!1};function Rt(e,t){if(e&&e.defaultProps){t=pe({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Vu(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:pe({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var $l={isMounted:function(e){return(e=e._reactInternals)?Rr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=qe(),i=zn(e),o=rn(r,i);o.payload=t,n!=null&&(o.callback=n),t=Fn(e,o,i),t!==null&&(Lt(t,e,i,r),ra(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=qe(),i=zn(e),o=rn(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Fn(e,o,i),t!==null&&(Lt(t,e,i,r),ra(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=qe(),r=zn(e),i=rn(n,r);i.tag=2,t!=null&&(i.callback=t),t=Fn(e,i,r),t!==null&&(Lt(t,e,r,n),ra(t,e,r))}};function wp(e,t,n,r,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,s):t.prototype&&t.prototype.isPureReactComponent?!Lo(n,r)||!Lo(i,o):!0}function K0(e,t,n){var r=!1,i=Un,o=t.contextType;return typeof o=="object"&&o!==null?o=jt(o):(i=tt(t)?xr:Ue.current,r=t.contextTypes,o=(r=r!=null)?hi(e,i):Un),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=$l,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function bp(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&$l.enqueueReplaceState(t,t.state,null)}function Uu(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},wf(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=jt(o):(o=tt(t)?xr:Ue.current,i.context=hi(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Vu(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&$l.enqueueReplaceState(i,i.state,null),Va(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function vi(e,t){try{var n="",r=t;do n+=Ww(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function $c(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Bu(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var yS=typeof WeakMap=="function"?WeakMap:Map;function G0(e,t,n){n=rn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Qa||(Qa=!0,Ju=r),Bu(e,t)},n}function Y0(e,t,n){n=rn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Bu(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Bu(e,t),typeof r!="function"&&(Mn===null?Mn=new Set([this]):Mn.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function Sp(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new yS;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=OS.bind(null,e,t,n),t.then(e,e))}function jp(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function kp(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=rn(-1,1),t.tag=2,Fn(n,t,1))),n.lanes|=1),e)}var xS=hn.ReactCurrentOwner,Je=!1;function We(e,t,n,r){t.child=e===null?C0(t,null,n,r):mi(t,e.child,n,r)}function Cp(e,t,n,r,i){n=n.render;var o=t.ref;return ui(t,i),r=Cf(e,t,n,r,o,i),n=Pf(),e!==null&&!Je?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,un(e,t,i)):(ce&&n&&hf(t),t.flags|=1,We(e,t,r,i),t.child)}function Pp(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!zf(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,X0(e,t,o,r,i)):(e=ca(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:Lo,n(s,r)&&e.ref===t.ref)return un(e,t,i)}return t.flags|=1,e=Nn(o,r),e.ref=t.ref,e.return=t,t.child=e}function X0(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Lo(o,r)&&e.ref===t.ref)if(Je=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(Je=!0);else return t.lanes=e.lanes,un(e,t,i)}return Hu(e,t,n,r,i)}function Z0(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},re(Jr,ot),ot|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,re(Jr,ot),ot|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,re(Jr,ot),ot|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,re(Jr,ot),ot|=r;return We(e,t,i,n),t.child}function J0(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Hu(e,t,n,r,i){var o=tt(n)?xr:Ue.current;return o=hi(t,o),ui(t,i),n=Cf(e,t,n,r,o,i),r=Pf(),e!==null&&!Je?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,un(e,t,i)):(ce&&r&&hf(t),t.flags|=1,We(e,t,n,i),t.child)}function Ep(e,t,n,r,i){if(tt(n)){var o=!0;za(t)}else o=!1;if(ui(t,i),t.stateNode===null)sa(e,t),K0(t,n,r),Uu(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,a=t.memoizedProps;s.props=a;var l=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=jt(u):(u=tt(n)?xr:Ue.current,u=hi(t,u));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof s.getSnapshotBeforeUpdate=="function";f||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||l!==u)&&bp(t,s,r,u),wn=!1;var h=t.memoizedState;s.state=h,Va(t,r,s,i),l=t.memoizedState,a!==r||h!==l||et.current||wn?(typeof d=="function"&&(Vu(t,n,d,r),l=t.memoizedState),(a=wn||wp(t,n,a,r,h,l,u))?(f||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),s.props=r,s.state=l,s.context=u,r=a):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,E0(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:Rt(t.type,a),s.props=u,f=t.pendingProps,h=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=jt(l):(l=tt(n)?xr:Ue.current,l=hi(t,l));var p=n.getDerivedStateFromProps;(d=typeof p=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==f||h!==l)&&bp(t,s,r,l),wn=!1,h=t.memoizedState,s.state=h,Va(t,r,s,i);var y=t.memoizedState;a!==f||h!==y||et.current||wn?(typeof p=="function"&&(Vu(t,n,p,r),y=t.memoizedState),(u=wn||wp(t,n,u,r,h,y,l)||!1)?(d||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,y,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,y,l)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),s.props=r,s.state=y,s.context=l,r=u):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return Wu(e,t,n,r,o,i)}function Wu(e,t,n,r,i,o){J0(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return i&&fp(t,n,!1),un(e,t,o);r=t.stateNode,xS.current=t;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=mi(t,e.child,null,o),t.child=mi(t,null,a,o)):We(e,t,a,o),t.memoizedState=r.state,i&&fp(t,n,!0),t.child}function ey(e){var t=e.stateNode;t.pendingContext?dp(e,t.pendingContext,t.pendingContext!==t.context):t.context&&dp(e,t.context,!1),bf(e,t.containerInfo)}function Tp(e,t,n,r,i){return pi(),mf(i),t.flags|=256,We(e,t,n,r),t.child}var Qu={dehydrated:null,treeContext:null,retryLane:0};function qu(e){return{baseLanes:e,cachePool:null,transitions:null}}function ty(e,t,n){var r=t.pendingProps,i=de.current,o=!1,s=(t.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),re(de,i&1),e===null)return Du(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,o?(r=t.mode,o=t.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=Fl(s,r,0,null),e=gr(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=qu(n),t.memoizedState=Qu,e):Rf(t,s));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return wS(e,t,s,r,a,i,n);if(o){o=r.fallback,s=t.mode,i=e.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(s&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=Nn(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=Nn(a,o):(o=gr(o,s,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,s=e.child.memoizedState,s=s===null?qu(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~n,t.memoizedState=Qu,r}return o=e.child,e=o.sibling,r=Nn(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Rf(e,t){return t=Fl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function As(e,t,n,r){return r!==null&&mf(r),mi(t,e.child,null,n),e=Rf(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function wS(e,t,n,r,i,o,s){if(n)return t.flags&256?(t.flags&=-257,r=$c(Error(R(422))),As(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Fl({mode:"visible",children:r.children},i,0,null),o=gr(o,i,s,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&mi(t,e.child,null,s),t.child.memoizedState=qu(s),t.memoizedState=Qu,o);if(!(t.mode&1))return As(e,t,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(R(419)),r=$c(o,r,void 0),As(e,t,s,r)}if(a=(s&e.childLanes)!==0,Je||a){if(r=$e,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,cn(e,i),Lt(r,e,i,-1))}return Mf(),r=$c(Error(R(421))),As(e,t,s,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=LS.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,st=Ln(i.nextSibling),at=t,ce=!0,$t=null,e!==null&&(vt[yt++]=en,vt[yt++]=tn,vt[yt++]=wr,en=e.id,tn=e.overflow,wr=t),t=Rf(t,r.children),t.flags|=4096,t)}function Rp(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Iu(e.return,t,n)}function Oc(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function ny(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(We(e,t,r.children,n),r=de.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Rp(e,n,t);else if(e.tag===19)Rp(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(re(de,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Ua(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Oc(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Ua(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Oc(t,!0,n,null,o);break;case"together":Oc(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function sa(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function un(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Sr|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(R(153));if(t.child!==null){for(e=t.child,n=Nn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Nn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function bS(e,t,n){switch(t.tag){case 3:ey(t),pi();break;case 5:T0(t);break;case 1:tt(t.type)&&za(t);break;case 4:bf(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;re(Da,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(re(de,de.current&1),t.flags|=128,null):n&t.child.childLanes?ty(e,t,n):(re(de,de.current&1),e=un(e,t,n),e!==null?e.sibling:null);re(de,de.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return ny(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),re(de,de.current),r)break;return null;case 22:case 23:return t.lanes=0,Z0(e,t,n)}return un(e,t,n)}var ry,Ku,iy,oy;ry=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ku=function(){};iy=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,cr(Wt.current);var o=null;switch(n){case"input":i=gu(e,i),r=gu(e,r),o=[];break;case"select":i=pe({},i,{value:void 0}),r=pe({},r,{value:void 0}),o=[];break;case"textarea":i=xu(e,i),r=xu(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Fa)}bu(n,r);var s;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Po.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Po.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&oe("scroll",e),o||a===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};oy=function(e,t,n,r){n!==r&&(t.flags|=4)};function Ui(e,t){if(!ce)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ze(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function SS(e,t,n){var r=t.pendingProps;switch(pf(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ze(t),null;case 1:return tt(t.type)&&Ma(),ze(t),null;case 3:return r=t.stateNode,gi(),ae(et),ae(Ue),jf(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ts(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,$t!==null&&(nd($t),$t=null))),Ku(e,t),ze(t),null;case 5:Sf(t);var i=cr(_o.current);if(n=t.type,e!==null&&t.stateNode!=null)iy(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(R(166));return ze(t),null}if(e=cr(Wt.current),Ts(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Bt]=t,r[zo]=o,e=(t.mode&1)!==0,n){case"dialog":oe("cancel",r),oe("close",r);break;case"iframe":case"object":case"embed":oe("load",r);break;case"video":case"audio":for(i=0;i<io.length;i++)oe(io[i],r);break;case"source":oe("error",r);break;case"img":case"image":case"link":oe("error",r),oe("load",r);break;case"details":oe("toggle",r);break;case"input":_h(r,o),oe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},oe("invalid",r);break;case"textarea":Ih(r,o),oe("invalid",r)}bu(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&Es(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&Es(r.textContent,a,e),i=["children",""+a]):Po.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&oe("scroll",r)}switch(n){case"input":xs(r),Dh(r,o,!0);break;case"textarea":xs(r),Vh(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Fa)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Lv(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[Bt]=t,e[zo]=r,ry(e,t,!1,!1),t.stateNode=e;e:{switch(s=Su(n,r),n){case"dialog":oe("cancel",e),oe("close",e),i=r;break;case"iframe":case"object":case"embed":oe("load",e),i=r;break;case"video":case"audio":for(i=0;i<io.length;i++)oe(io[i],e);i=r;break;case"source":oe("error",e),i=r;break;case"img":case"image":case"link":oe("error",e),oe("load",e),i=r;break;case"details":oe("toggle",e),i=r;break;case"input":_h(e,r),i=gu(e,r),oe("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=pe({},r,{value:void 0}),oe("invalid",e);break;case"textarea":Ih(e,r),i=xu(e,r),oe("invalid",e);break;default:i=r}bu(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?zv(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Fv(e,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Eo(e,l):typeof l=="number"&&Eo(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Po.hasOwnProperty(o)?l!=null&&o==="onScroll"&&oe("scroll",e):l!=null&&Zd(e,o,l,s))}switch(n){case"input":xs(e),Dh(e,r,!1);break;case"textarea":xs(e),Vh(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Vn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?si(e,!!r.multiple,o,!1):r.defaultValue!=null&&si(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Fa)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ze(t),null;case 6:if(e&&t.stateNode!=null)oy(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(R(166));if(n=cr(_o.current),cr(Wt.current),Ts(t)){if(r=t.stateNode,n=t.memoizedProps,r[Bt]=t,(o=r.nodeValue!==n)&&(e=at,e!==null))switch(e.tag){case 3:Es(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Es(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Bt]=t,t.stateNode=r}return ze(t),null;case 13:if(ae(de),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ce&&st!==null&&t.mode&1&&!(t.flags&128))j0(),pi(),t.flags|=98560,o=!1;else if(o=Ts(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(R(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(R(317));o[Bt]=t}else pi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ze(t),o=!1}else $t!==null&&(nd($t),$t=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||de.current&1?Te===0&&(Te=3):Mf())),t.updateQueue!==null&&(t.flags|=4),ze(t),null);case 4:return gi(),Ku(e,t),e===null&&Fo(t.stateNode.containerInfo),ze(t),null;case 10:return yf(t.type._context),ze(t),null;case 17:return tt(t.type)&&Ma(),ze(t),null;case 19:if(ae(de),o=t.memoizedState,o===null)return ze(t),null;if(r=(t.flags&128)!==0,s=o.rendering,s===null)if(r)Ui(o,!1);else{if(Te!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=Ua(e),s!==null){for(t.flags|=128,Ui(o,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return re(de,de.current&1|2),t.child}e=e.sibling}o.tail!==null&&ye()>yi&&(t.flags|=128,r=!0,Ui(o,!1),t.lanes=4194304)}else{if(!r)if(e=Ua(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Ui(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!ce)return ze(t),null}else 2*ye()-o.renderingStartTime>yi&&n!==1073741824&&(t.flags|=128,r=!0,Ui(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(n=o.last,n!==null?n.sibling=s:t.child=s,o.last=s)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=ye(),t.sibling=null,n=de.current,re(de,r?n&1|2:n&1),t):(ze(t),null);case 22:case 23:return Ff(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?ot&1073741824&&(ze(t),t.subtreeFlags&6&&(t.flags|=8192)):ze(t),null;case 24:return null;case 25:return null}throw Error(R(156,t.tag))}function jS(e,t){switch(pf(t),t.tag){case 1:return tt(t.type)&&Ma(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return gi(),ae(et),ae(Ue),jf(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Sf(t),null;case 13:if(ae(de),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(R(340));pi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ae(de),null;case 4:return gi(),null;case 10:return yf(t.type._context),null;case 22:case 23:return Ff(),null;case 24:return null;default:return null}}var $s=!1,De=!1,kS=typeof WeakSet=="function"?WeakSet:Set,L=null;function Zr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){me(e,t,r)}else n.current=null}function Gu(e,t,n){try{n()}catch(r){me(e,t,r)}}var Ap=!1;function CS(e,t){if(Ou=$a,e=u0(),ff(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,u=0,d=0,f=e,h=null;t:for(;;){for(var p;f!==n||i!==0&&f.nodeType!==3||(a=s+i),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(p=f.firstChild)!==null;)h=f,f=p;for(;;){if(f===e)break t;if(h===n&&++u===i&&(a=s),h===o&&++d===r&&(l=s),(p=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Lu={focusedElem:e,selectionRange:n},$a=!1,L=t;L!==null;)if(t=L,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,L=e;else for(;L!==null;){t=L;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var w=y.memoizedProps,S=y.memoizedState,m=t.stateNode,g=m.getSnapshotBeforeUpdate(t.elementType===t.type?w:Rt(t.type,w),S);m.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var v=t.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(R(163))}}catch(b){me(t,t.return,b)}if(e=t.sibling,e!==null){e.return=t.return,L=e;break}L=t.return}return y=Ap,Ap=!1,y}function mo(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Gu(t,n,o)}i=i.next}while(i!==r)}}function Ol(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Yu(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function sy(e){var t=e.alternate;t!==null&&(e.alternate=null,sy(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Bt],delete t[zo],delete t[zu],delete t[aS],delete t[lS])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function ay(e){return e.tag===5||e.tag===3||e.tag===4}function $p(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||ay(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Xu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Fa));else if(r!==4&&(e=e.child,e!==null))for(Xu(e,t,n),e=e.sibling;e!==null;)Xu(e,t,n),e=e.sibling}function Zu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Zu(e,t,n),e=e.sibling;e!==null;)Zu(e,t,n),e=e.sibling}var Oe=null,At=!1;function gn(e,t,n){for(n=n.child;n!==null;)ly(e,t,n),n=n.sibling}function ly(e,t,n){if(Ht&&typeof Ht.onCommitFiberUnmount=="function")try{Ht.onCommitFiberUnmount(kl,n)}catch{}switch(n.tag){case 5:De||Zr(n,t);case 6:var r=Oe,i=At;Oe=null,gn(e,t,n),Oe=r,At=i,Oe!==null&&(At?(e=Oe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Oe.removeChild(n.stateNode));break;case 18:Oe!==null&&(At?(e=Oe,n=n.stateNode,e.nodeType===8?Cc(e.parentNode,n):e.nodeType===1&&Cc(e,n),$o(e)):Cc(Oe,n.stateNode));break;case 4:r=Oe,i=At,Oe=n.stateNode.containerInfo,At=!0,gn(e,t,n),Oe=r,At=i;break;case 0:case 11:case 14:case 15:if(!De&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&Gu(n,t,s),i=i.next}while(i!==r)}gn(e,t,n);break;case 1:if(!De&&(Zr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){me(n,t,a)}gn(e,t,n);break;case 21:gn(e,t,n);break;case 22:n.mode&1?(De=(r=De)||n.memoizedState!==null,gn(e,t,n),De=r):gn(e,t,n);break;default:gn(e,t,n)}}function Op(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new kS),t.forEach(function(r){var i=FS.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Tt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,s=t,a=s;e:for(;a!==null;){switch(a.tag){case 5:Oe=a.stateNode,At=!1;break e;case 3:Oe=a.stateNode.containerInfo,At=!0;break e;case 4:Oe=a.stateNode.containerInfo,At=!0;break e}a=a.return}if(Oe===null)throw Error(R(160));ly(o,s,i),Oe=null,At=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){me(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)cy(t,e),t=t.sibling}function cy(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Tt(t,e),Dt(e),r&4){try{mo(3,e,e.return),Ol(3,e)}catch(w){me(e,e.return,w)}try{mo(5,e,e.return)}catch(w){me(e,e.return,w)}}break;case 1:Tt(t,e),Dt(e),r&512&&n!==null&&Zr(n,n.return);break;case 5:if(Tt(t,e),Dt(e),r&512&&n!==null&&Zr(n,n.return),e.flags&32){var i=e.stateNode;try{Eo(i,"")}catch(w){me(e,e.return,w)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,s=n!==null?n.memoizedProps:o,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&$v(i,o),Su(a,s);var u=Su(a,o);for(s=0;s<l.length;s+=2){var d=l[s],f=l[s+1];d==="style"?zv(i,f):d==="dangerouslySetInnerHTML"?Fv(i,f):d==="children"?Eo(i,f):Zd(i,d,f,u)}switch(a){case"input":vu(i,o);break;case"textarea":Ov(i,o);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var p=o.value;p!=null?si(i,!!o.multiple,p,!1):h!==!!o.multiple&&(o.defaultValue!=null?si(i,!!o.multiple,o.defaultValue,!0):si(i,!!o.multiple,o.multiple?[]:"",!1))}i[zo]=o}catch(w){me(e,e.return,w)}}break;case 6:if(Tt(t,e),Dt(e),r&4){if(e.stateNode===null)throw Error(R(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(w){me(e,e.return,w)}}break;case 3:if(Tt(t,e),Dt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{$o(t.containerInfo)}catch(w){me(e,e.return,w)}break;case 4:Tt(t,e),Dt(e);break;case 13:Tt(t,e),Dt(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Of=ye())),r&4&&Op(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(De=(u=De)||d,Tt(t,e),De=u):Tt(t,e),Dt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(L=e,d=e.child;d!==null;){for(f=L=d;L!==null;){switch(h=L,p=h.child,h.tag){case 0:case 11:case 14:case 15:mo(4,h,h.return);break;case 1:Zr(h,h.return);var y=h.stateNode;if(typeof y.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(w){me(r,n,w)}}break;case 5:Zr(h,h.return);break;case 22:if(h.memoizedState!==null){Fp(f);continue}}p!==null?(p.return=h,L=p):Fp(f)}d=d.sibling}e:for(d=null,f=e;;){if(f.tag===5){if(d===null){d=f;try{i=f.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=f.stateNode,l=f.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Mv("display",s))}catch(w){me(e,e.return,w)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(w){me(e,e.return,w)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Tt(t,e),Dt(e),r&4&&Op(e);break;case 21:break;default:Tt(t,e),Dt(e)}}function Dt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(ay(n)){var r=n;break e}n=n.return}throw Error(R(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Eo(i,""),r.flags&=-33);var o=$p(e);Zu(e,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=$p(e);Xu(e,a,s);break;default:throw Error(R(161))}}catch(l){me(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function PS(e,t,n){L=e,uy(e)}function uy(e,t,n){for(var r=(e.mode&1)!==0;L!==null;){var i=L,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||$s;if(!s){var a=i.alternate,l=a!==null&&a.memoizedState!==null||De;a=$s;var u=De;if($s=s,(De=l)&&!u)for(L=i;L!==null;)s=L,l=s.child,s.tag===22&&s.memoizedState!==null?Mp(i):l!==null?(l.return=s,L=l):Mp(i);for(;o!==null;)L=o,uy(o),o=o.sibling;L=i,$s=a,De=u}Lp(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,L=o):Lp(e)}}function Lp(e){for(;L!==null;){var t=L;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:De||Ol(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!De)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Rt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&vp(t,o,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}vp(t,s,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&$o(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(R(163))}De||t.flags&512&&Yu(t)}catch(h){me(t,t.return,h)}}if(t===e){L=null;break}if(n=t.sibling,n!==null){n.return=t.return,L=n;break}L=t.return}}function Fp(e){for(;L!==null;){var t=L;if(t===e){L=null;break}var n=t.sibling;if(n!==null){n.return=t.return,L=n;break}L=t.return}}function Mp(e){for(;L!==null;){var t=L;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ol(4,t)}catch(l){me(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){me(t,i,l)}}var o=t.return;try{Yu(t)}catch(l){me(t,o,l)}break;case 5:var s=t.return;try{Yu(t)}catch(l){me(t,s,l)}}}catch(l){me(t,t.return,l)}if(t===e){L=null;break}var a=t.sibling;if(a!==null){a.return=t.return,L=a;break}L=t.return}}var ES=Math.ceil,Wa=hn.ReactCurrentDispatcher,Af=hn.ReactCurrentOwner,St=hn.ReactCurrentBatchConfig,K=0,$e=null,je=null,Le=0,ot=0,Jr=qn(0),Te=0,Uo=null,Sr=0,Ll=0,$f=0,go=null,Ze=null,Of=0,yi=1/0,Yt=null,Qa=!1,Ju=null,Mn=null,Os=!1,Tn=null,qa=0,vo=0,ed=null,aa=-1,la=0;function qe(){return K&6?ye():aa!==-1?aa:aa=ye()}function zn(e){return e.mode&1?K&2&&Le!==0?Le&-Le:uS.transition!==null?(la===0&&(la=Kv()),la):(e=te,e!==0||(e=window.event,e=e===void 0?16:t0(e.type)),e):1}function Lt(e,t,n,r){if(50<vo)throw vo=0,ed=null,Error(R(185));ns(e,n,r),(!(K&2)||e!==$e)&&(e===$e&&(!(K&2)&&(Ll|=n),Te===4&&Cn(e,Le)),nt(e,r),n===1&&K===0&&!(t.mode&1)&&(yi=ye()+500,Rl&&Kn()))}function nt(e,t){var n=e.callbackNode;ub(e,t);var r=Aa(e,e===$e?Le:0);if(r===0)n!==null&&Hh(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Hh(n),t===1)e.tag===0?cS(zp.bind(null,e)):w0(zp.bind(null,e)),oS(function(){!(K&6)&&Kn()}),n=null;else{switch(Gv(r)){case 1:n=rf;break;case 4:n=Qv;break;case 16:n=Ra;break;case 536870912:n=qv;break;default:n=Ra}n=yy(n,dy.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function dy(e,t){if(aa=-1,la=0,K&6)throw Error(R(327));var n=e.callbackNode;if(di()&&e.callbackNode!==n)return null;var r=Aa(e,e===$e?Le:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Ka(e,r);else{t=r;var i=K;K|=2;var o=hy();($e!==e||Le!==t)&&(Yt=null,yi=ye()+500,mr(e,t));do try{AS();break}catch(a){fy(e,a)}while(1);vf(),Wa.current=o,K=i,je!==null?t=0:($e=null,Le=0,t=Te)}if(t!==0){if(t===2&&(i=Eu(e),i!==0&&(r=i,t=td(e,i))),t===1)throw n=Uo,mr(e,0),Cn(e,r),nt(e,ye()),n;if(t===6)Cn(e,r);else{if(i=e.current.alternate,!(r&30)&&!TS(i)&&(t=Ka(e,r),t===2&&(o=Eu(e),o!==0&&(r=o,t=td(e,o))),t===1))throw n=Uo,mr(e,0),Cn(e,r),nt(e,ye()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(R(345));case 2:nr(e,Ze,Yt);break;case 3:if(Cn(e,r),(r&130023424)===r&&(t=Of+500-ye(),10<t)){if(Aa(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){qe(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Mu(nr.bind(null,e,Ze,Yt),t);break}nr(e,Ze,Yt);break;case 4:if(Cn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-Ot(r);o=1<<s,s=t[s],s>i&&(i=s),r&=~o}if(r=i,r=ye()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*ES(r/1960))-r,10<r){e.timeoutHandle=Mu(nr.bind(null,e,Ze,Yt),r);break}nr(e,Ze,Yt);break;case 5:nr(e,Ze,Yt);break;default:throw Error(R(329))}}}return nt(e,ye()),e.callbackNode===n?dy.bind(null,e):null}function td(e,t){var n=go;return e.current.memoizedState.isDehydrated&&(mr(e,t).flags|=256),e=Ka(e,t),e!==2&&(t=Ze,Ze=n,t!==null&&nd(t)),e}function nd(e){Ze===null?Ze=e:Ze.push.apply(Ze,e)}function TS(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!zt(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Cn(e,t){for(t&=~$f,t&=~Ll,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ot(t),r=1<<n;e[n]=-1,t&=~r}}function zp(e){if(K&6)throw Error(R(327));di();var t=Aa(e,0);if(!(t&1))return nt(e,ye()),null;var n=Ka(e,t);if(e.tag!==0&&n===2){var r=Eu(e);r!==0&&(t=r,n=td(e,r))}if(n===1)throw n=Uo,mr(e,0),Cn(e,t),nt(e,ye()),n;if(n===6)throw Error(R(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,nr(e,Ze,Yt),nt(e,ye()),null}function Lf(e,t){var n=K;K|=1;try{return e(t)}finally{K=n,K===0&&(yi=ye()+500,Rl&&Kn())}}function jr(e){Tn!==null&&Tn.tag===0&&!(K&6)&&di();var t=K;K|=1;var n=St.transition,r=te;try{if(St.transition=null,te=1,e)return e()}finally{te=r,St.transition=n,K=t,!(K&6)&&Kn()}}function Ff(){ot=Jr.current,ae(Jr)}function mr(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,iS(n)),je!==null)for(n=je.return;n!==null;){var r=n;switch(pf(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ma();break;case 3:gi(),ae(et),ae(Ue),jf();break;case 5:Sf(r);break;case 4:gi();break;case 13:ae(de);break;case 19:ae(de);break;case 10:yf(r.type._context);break;case 22:case 23:Ff()}n=n.return}if($e=e,je=e=Nn(e.current,null),Le=ot=t,Te=0,Uo=null,$f=Ll=Sr=0,Ze=go=null,lr!==null){for(t=0;t<lr.length;t++)if(n=lr[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}lr=null}return e}function fy(e,t){do{var n=je;try{if(vf(),ia.current=Ha,Ba){for(var r=he.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Ba=!1}if(br=0,Re=Ee=he=null,po=!1,Do=0,Af.current=null,n===null||n.return===null){Te=1,Uo=t,je=null;break}e:{var o=e,s=n.return,a=n,l=t;if(t=Le,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,d=a,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var p=jp(s);if(p!==null){p.flags&=-257,kp(p,s,a,o,t),p.mode&1&&Sp(o,u,t),t=p,l=u;var y=t.updateQueue;if(y===null){var w=new Set;w.add(l),t.updateQueue=w}else y.add(l);break e}else{if(!(t&1)){Sp(o,u,t),Mf();break e}l=Error(R(426))}}else if(ce&&a.mode&1){var S=jp(s);if(S!==null){!(S.flags&65536)&&(S.flags|=256),kp(S,s,a,o,t),mf(vi(l,a));break e}}o=l=vi(l,a),Te!==4&&(Te=2),go===null?go=[o]:go.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var m=G0(o,l,t);gp(o,m);break e;case 1:a=l;var g=o.type,v=o.stateNode;if(!(o.flags&128)&&(typeof g.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Mn===null||!Mn.has(v)))){o.flags|=65536,t&=-t,o.lanes|=t;var b=Y0(o,a,t);gp(o,b);break e}}o=o.return}while(o!==null)}my(n)}catch(C){t=C,je===n&&n!==null&&(je=n=n.return);continue}break}while(1)}function hy(){var e=Wa.current;return Wa.current=Ha,e===null?Ha:e}function Mf(){(Te===0||Te===3||Te===2)&&(Te=4),$e===null||!(Sr&268435455)&&!(Ll&268435455)||Cn($e,Le)}function Ka(e,t){var n=K;K|=2;var r=hy();($e!==e||Le!==t)&&(Yt=null,mr(e,t));do try{RS();break}catch(i){fy(e,i)}while(1);if(vf(),K=n,Wa.current=r,je!==null)throw Error(R(261));return $e=null,Le=0,Te}function RS(){for(;je!==null;)py(je)}function AS(){for(;je!==null&&!tb();)py(je)}function py(e){var t=vy(e.alternate,e,ot);e.memoizedProps=e.pendingProps,t===null?my(e):je=t,Af.current=null}function my(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=jS(n,t),n!==null){n.flags&=32767,je=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Te=6,je=null;return}}else if(n=SS(n,t,ot),n!==null){je=n;return}if(t=t.sibling,t!==null){je=t;return}je=t=e}while(t!==null);Te===0&&(Te=5)}function nr(e,t,n){var r=te,i=St.transition;try{St.transition=null,te=1,$S(e,t,n,r)}finally{St.transition=i,te=r}return null}function $S(e,t,n,r){do di();while(Tn!==null);if(K&6)throw Error(R(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(R(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(db(e,o),e===$e&&(je=$e=null,Le=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Os||(Os=!0,yy(Ra,function(){return di(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=St.transition,St.transition=null;var s=te;te=1;var a=K;K|=4,Af.current=null,CS(e,n),cy(n,e),Xb(Lu),$a=!!Ou,Lu=Ou=null,e.current=n,PS(n),nb(),K=a,te=s,St.transition=o}else e.current=n;if(Os&&(Os=!1,Tn=e,qa=i),o=e.pendingLanes,o===0&&(Mn=null),ob(n.stateNode),nt(e,ye()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Qa)throw Qa=!1,e=Ju,Ju=null,e;return qa&1&&e.tag!==0&&di(),o=e.pendingLanes,o&1?e===ed?vo++:(vo=0,ed=e):vo=0,Kn(),null}function di(){if(Tn!==null){var e=Gv(qa),t=St.transition,n=te;try{if(St.transition=null,te=16>e?16:e,Tn===null)var r=!1;else{if(e=Tn,Tn=null,qa=0,K&6)throw Error(R(331));var i=K;for(K|=4,L=e.current;L!==null;){var o=L,s=o.child;if(L.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(L=u;L!==null;){var d=L;switch(d.tag){case 0:case 11:case 15:mo(8,d,o)}var f=d.child;if(f!==null)f.return=d,L=f;else for(;L!==null;){d=L;var h=d.sibling,p=d.return;if(sy(d),d===u){L=null;break}if(h!==null){h.return=p,L=h;break}L=p}}}var y=o.alternate;if(y!==null){var w=y.child;if(w!==null){y.child=null;do{var S=w.sibling;w.sibling=null,w=S}while(w!==null)}}L=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,L=s;else e:for(;L!==null;){if(o=L,o.flags&2048)switch(o.tag){case 0:case 11:case 15:mo(9,o,o.return)}var m=o.sibling;if(m!==null){m.return=o.return,L=m;break e}L=o.return}}var g=e.current;for(L=g;L!==null;){s=L;var v=s.child;if(s.subtreeFlags&2064&&v!==null)v.return=s,L=v;else e:for(s=g;L!==null;){if(a=L,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Ol(9,a)}}catch(C){me(a,a.return,C)}if(a===s){L=null;break e}var b=a.sibling;if(b!==null){b.return=a.return,L=b;break e}L=a.return}}if(K=i,Kn(),Ht&&typeof Ht.onPostCommitFiberRoot=="function")try{Ht.onPostCommitFiberRoot(kl,e)}catch{}r=!0}return r}finally{te=n,St.transition=t}}return!1}function Np(e,t,n){t=vi(n,t),t=G0(e,t,1),e=Fn(e,t,1),t=qe(),e!==null&&(ns(e,1,t),nt(e,t))}function me(e,t,n){if(e.tag===3)Np(e,e,n);else for(;t!==null;){if(t.tag===3){Np(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Mn===null||!Mn.has(r))){e=vi(n,e),e=Y0(t,e,1),t=Fn(t,e,1),e=qe(),t!==null&&(ns(t,1,e),nt(t,e));break}}t=t.return}}function OS(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=qe(),e.pingedLanes|=e.suspendedLanes&n,$e===e&&(Le&n)===n&&(Te===4||Te===3&&(Le&130023424)===Le&&500>ye()-Of?mr(e,0):$f|=n),nt(e,t)}function gy(e,t){t===0&&(e.mode&1?(t=Ss,Ss<<=1,!(Ss&130023424)&&(Ss=4194304)):t=1);var n=qe();e=cn(e,t),e!==null&&(ns(e,t,n),nt(e,n))}function LS(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),gy(e,n)}function FS(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(R(314))}r!==null&&r.delete(t),gy(e,n)}var vy;vy=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||et.current)Je=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Je=!1,bS(e,t,n);Je=!!(e.flags&131072)}else Je=!1,ce&&t.flags&1048576&&b0(t,_a,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;sa(e,t),e=t.pendingProps;var i=hi(t,Ue.current);ui(t,n),i=Cf(null,t,r,e,i,n);var o=Pf();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,tt(r)?(o=!0,za(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,wf(t),i.updater=$l,t.stateNode=i,i._reactInternals=t,Uu(t,r,e,n),t=Wu(null,t,r,!0,o,n)):(t.tag=0,ce&&o&&hf(t),We(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(sa(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=zS(r),e=Rt(r,e),i){case 0:t=Hu(null,t,r,e,n);break e;case 1:t=Ep(null,t,r,e,n);break e;case 11:t=Cp(null,t,r,e,n);break e;case 14:t=Pp(null,t,r,Rt(r.type,e),n);break e}throw Error(R(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Rt(r,i),Hu(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Rt(r,i),Ep(e,t,r,i,n);case 3:e:{if(ey(t),e===null)throw Error(R(387));r=t.pendingProps,o=t.memoizedState,i=o.element,E0(e,t),Va(t,r,null,n);var s=t.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=vi(Error(R(423)),t),t=Tp(e,t,r,n,i);break e}else if(r!==i){i=vi(Error(R(424)),t),t=Tp(e,t,r,n,i);break e}else for(st=Ln(t.stateNode.containerInfo.firstChild),at=t,ce=!0,$t=null,n=C0(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(pi(),r===i){t=un(e,t,n);break e}We(e,t,r,n)}t=t.child}return t;case 5:return T0(t),e===null&&Du(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,Fu(r,i)?s=null:o!==null&&Fu(r,o)&&(t.flags|=32),J0(e,t),We(e,t,s,n),t.child;case 6:return e===null&&Du(t),null;case 13:return ty(e,t,n);case 4:return bf(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=mi(t,null,r,n):We(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Rt(r,i),Cp(e,t,r,i,n);case 7:return We(e,t,t.pendingProps,n),t.child;case 8:return We(e,t,t.pendingProps.children,n),t.child;case 12:return We(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,s=i.value,re(Da,r._currentValue),r._currentValue=s,o!==null)if(zt(o.value,s)){if(o.children===i.children&&!et.current){t=un(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=rn(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?l.next=l:(l.next=d.next,d.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Iu(o.return,n,t),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(R(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Iu(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}We(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,ui(t,n),i=jt(i),r=r(i),t.flags|=1,We(e,t,r,n),t.child;case 14:return r=t.type,i=Rt(r,t.pendingProps),i=Rt(r.type,i),Pp(e,t,r,i,n);case 15:return X0(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Rt(r,i),sa(e,t),t.tag=1,tt(r)?(e=!0,za(t)):e=!1,ui(t,n),K0(t,r,i),Uu(t,r,i,n),Wu(null,t,r,!0,e,n);case 19:return ny(e,t,n);case 22:return Z0(e,t,n)}throw Error(R(156,t.tag))};function yy(e,t){return Wv(e,t)}function MS(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function wt(e,t,n,r){return new MS(e,t,n,r)}function zf(e){return e=e.prototype,!(!e||!e.isReactComponent)}function zS(e){if(typeof e=="function")return zf(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ef)return 11;if(e===tf)return 14}return 2}function Nn(e,t){var n=e.alternate;return n===null?(n=wt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function ca(e,t,n,r,i,o){var s=2;if(r=e,typeof e=="function")zf(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case Br:return gr(n.children,i,o,t);case Jd:s=8,i|=8;break;case fu:return e=wt(12,n,t,i|2),e.elementType=fu,e.lanes=o,e;case hu:return e=wt(13,n,t,i),e.elementType=hu,e.lanes=o,e;case pu:return e=wt(19,n,t,i),e.elementType=pu,e.lanes=o,e;case Tv:return Fl(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Pv:s=10;break e;case Ev:s=9;break e;case ef:s=11;break e;case tf:s=14;break e;case xn:s=16,r=null;break e}throw Error(R(130,e==null?e:typeof e,""))}return t=wt(s,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function gr(e,t,n,r){return e=wt(7,e,r,t),e.lanes=n,e}function Fl(e,t,n,r){return e=wt(22,e,r,t),e.elementType=Tv,e.lanes=n,e.stateNode={isHidden:!1},e}function Lc(e,t,n){return e=wt(6,e,null,t),e.lanes=n,e}function Fc(e,t,n){return t=wt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function NS(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=pc(0),this.expirationTimes=pc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=pc(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Nf(e,t,n,r,i,o,s,a,l){return e=new NS(e,t,n,a,l),t===1?(t=1,o===!0&&(t|=8)):t=0,o=wt(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},wf(o),e}function _S(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ur,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function xy(e){if(!e)return Un;e=e._reactInternals;e:{if(Rr(e)!==e||e.tag!==1)throw Error(R(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(tt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(R(171))}if(e.tag===1){var n=e.type;if(tt(n))return x0(e,n,t)}return t}function wy(e,t,n,r,i,o,s,a,l){return e=Nf(n,r,!0,e,i,o,s,a,l),e.context=xy(null),n=e.current,r=qe(),i=zn(n),o=rn(r,i),o.callback=t??null,Fn(n,o,i),e.current.lanes=i,ns(e,i,r),nt(e,r),e}function Ml(e,t,n,r){var i=t.current,o=qe(),s=zn(i);return n=xy(n),t.context===null?t.context=n:t.pendingContext=n,t=rn(o,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Fn(i,t,s),e!==null&&(Lt(e,i,s,o),ra(e,i,s)),s}function Ga(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function _p(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function _f(e,t){_p(e,t),(e=e.alternate)&&_p(e,t)}function DS(){return null}var by=typeof reportError=="function"?reportError:function(e){console.error(e)};function Df(e){this._internalRoot=e}zl.prototype.render=Df.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(R(409));Ml(e,t,null,null)};zl.prototype.unmount=Df.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;jr(function(){Ml(null,e,null,null)}),t[ln]=null}};function zl(e){this._internalRoot=e}zl.prototype.unstable_scheduleHydration=function(e){if(e){var t=Zv();e={blockedOn:null,target:e,priority:t};for(var n=0;n<kn.length&&t!==0&&t<kn[n].priority;n++);kn.splice(n,0,e),n===0&&e0(e)}};function If(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Nl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Dp(){}function IS(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=Ga(s);o.call(u)}}var s=wy(t,r,e,0,null,!1,!1,"",Dp);return e._reactRootContainer=s,e[ln]=s.current,Fo(e.nodeType===8?e.parentNode:e),jr(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Ga(l);a.call(u)}}var l=Nf(e,0,!1,null,null,!1,!1,"",Dp);return e._reactRootContainer=l,e[ln]=l.current,Fo(e.nodeType===8?e.parentNode:e),jr(function(){Ml(t,l,n,r)}),l}function _l(e,t,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var a=i;i=function(){var l=Ga(s);a.call(l)}}Ml(t,s,e,i)}else s=IS(n,t,e,i,r);return Ga(s)}Yv=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=ro(t.pendingLanes);n!==0&&(of(t,n|1),nt(t,ye()),!(K&6)&&(yi=ye()+500,Kn()))}break;case 13:jr(function(){var r=cn(e,1);if(r!==null){var i=qe();Lt(r,e,1,i)}}),_f(e,1)}};sf=function(e){if(e.tag===13){var t=cn(e,134217728);if(t!==null){var n=qe();Lt(t,e,134217728,n)}_f(e,134217728)}};Xv=function(e){if(e.tag===13){var t=zn(e),n=cn(e,t);if(n!==null){var r=qe();Lt(n,e,t,r)}_f(e,t)}};Zv=function(){return te};Jv=function(e,t){var n=te;try{return te=e,t()}finally{te=n}};ku=function(e,t,n){switch(t){case"input":if(vu(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Tl(r);if(!i)throw Error(R(90));Av(r),vu(r,i)}}}break;case"textarea":Ov(e,n);break;case"select":t=n.value,t!=null&&si(e,!!n.multiple,t,!1)}};Dv=Lf;Iv=jr;var VS={usingClientEntryPoint:!1,Events:[is,qr,Tl,Nv,_v,Lf]},Bi={findFiberByHostInstance:ar,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},US={bundleType:Bi.bundleType,version:Bi.version,rendererPackageName:Bi.rendererPackageName,rendererConfig:Bi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:hn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Bv(e),e===null?null:e.stateNode},findFiberByHostInstance:Bi.findFiberByHostInstance||DS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ls=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ls.isDisabled&&Ls.supportsFiber)try{kl=Ls.inject(US),Ht=Ls}catch{}}ut.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=VS;ut.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!If(t))throw Error(R(200));return _S(e,t,null,n)};ut.createRoot=function(e,t){if(!If(e))throw Error(R(299));var n=!1,r="",i=by;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Nf(e,1,!1,null,null,n,!1,r,i),e[ln]=t.current,Fo(e.nodeType===8?e.parentNode:e),new Df(t)};ut.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(R(188)):(e=Object.keys(e).join(","),Error(R(268,e)));return e=Bv(t),e=e===null?null:e.stateNode,e};ut.flushSync=function(e){return jr(e)};ut.hydrate=function(e,t,n){if(!Nl(t))throw Error(R(200));return _l(null,e,t,!0,n)};ut.hydrateRoot=function(e,t,n){if(!If(e))throw Error(R(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=by;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=wy(t,null,e,1,n??null,i,!1,o,s),e[ln]=t.current,Fo(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new zl(t)};ut.render=function(e,t,n){if(!Nl(t))throw Error(R(200));return _l(null,e,t,!1,n)};ut.unmountComponentAtNode=function(e){if(!Nl(e))throw Error(R(40));return e._reactRootContainer?(jr(function(){_l(null,null,e,!1,function(){e._reactRootContainer=null,e[ln]=null})}),!0):!1};ut.unstable_batchedUpdates=Lf;ut.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Nl(n))throw Error(R(200));if(e==null||e._reactInternals===void 0)throw Error(R(38));return _l(e,t,n,!1,r)};ut.version="18.3.1-next-f1338f8080-20240426";function Sy(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Sy)}catch(e){console.error(e)}}Sy(),Sv.exports=ut;var jy=Sv.exports;const BS=Wd(jy);var Ip=jy;uu.createRoot=Ip.createRoot,uu.hydrateRoot=Ip.hydrateRoot;/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Bo(){return Bo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Bo.apply(this,arguments)}var Rn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Rn||(Rn={}));const Vp="popstate";function HS(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:s,hash:a}=r.location;return rd("",{pathname:o,search:s,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Ya(i)}return QS(t,n,null,e)}function xe(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function ky(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function WS(){return Math.random().toString(36).substr(2,8)}function Up(e,t){return{usr:e.state,key:e.key,idx:t}}function rd(e,t,n,r){return n===void 0&&(n=null),Bo({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Ri(t):t,{state:n,key:t&&t.key||r||WS()})}function Ya(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Ri(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function QS(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,s=i.history,a=Rn.Pop,l=null,u=d();u==null&&(u=0,s.replaceState(Bo({},s.state,{idx:u}),""));function d(){return(s.state||{idx:null}).idx}function f(){a=Rn.Pop;let S=d(),m=S==null?null:S-u;u=S,l&&l({action:a,location:w.location,delta:m})}function h(S,m){a=Rn.Push;let g=rd(w.location,S,m);n&&n(g,S),u=d()+1;let v=Up(g,u),b=w.createHref(g);try{s.pushState(v,"",b)}catch(C){if(C instanceof DOMException&&C.name==="DataCloneError")throw C;i.location.assign(b)}o&&l&&l({action:a,location:w.location,delta:1})}function p(S,m){a=Rn.Replace;let g=rd(w.location,S,m);n&&n(g,S),u=d();let v=Up(g,u),b=w.createHref(g);s.replaceState(v,"",b),o&&l&&l({action:a,location:w.location,delta:0})}function y(S){let m=i.location.origin!=="null"?i.location.origin:i.location.href,g=typeof S=="string"?S:Ya(S);return g=g.replace(/ $/,"%20"),xe(m,"No window.location.(origin|href) available to create URL for href: "+g),new URL(g,m)}let w={get action(){return a},get location(){return e(i,s)},listen(S){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Vp,f),l=S,()=>{i.removeEventListener(Vp,f),l=null}},createHref(S){return t(i,S)},createURL:y,encodeLocation(S){let m=y(S);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:h,replace:p,go(S){return s.go(S)}};return w}var Bp;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Bp||(Bp={}));function qS(e,t,n){return n===void 0&&(n="/"),KS(e,t,n,!1)}function KS(e,t,n,r){let i=typeof t=="string"?Ri(t):t,o=Vf(i.pathname||"/",n);if(o==null)return null;let s=Cy(e);GS(s);let a=null;for(let l=0;a==null&&l<s.length;++l){let u=s2(o);a=i2(s[l],u,r)}return a}function Cy(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,s,a)=>{let l={relativePath:a===void 0?o.path||"":a,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};l.relativePath.startsWith("/")&&(xe(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=_n([r,l.relativePath]),d=n.concat(l);o.children&&o.children.length>0&&(xe(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Cy(o.children,t,d,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:n2(u,o.index),routesMeta:d})};return e.forEach((o,s)=>{var a;if(o.path===""||!((a=o.path)!=null&&a.includes("?")))i(o,s);else for(let l of Py(o.path))i(o,s,l)}),t}function Py(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let s=Py(r.join("/")),a=[];return a.push(...s.map(l=>l===""?o:[o,l].join("/"))),i&&a.push(...s),a.map(l=>e.startsWith("/")&&l===""?"/":l)}function GS(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:r2(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const YS=/^:[\w-]+$/,XS=3,ZS=2,JS=1,e2=10,t2=-2,Hp=e=>e==="*";function n2(e,t){let n=e.split("/"),r=n.length;return n.some(Hp)&&(r+=t2),t&&(r+=ZS),n.filter(i=>!Hp(i)).reduce((i,o)=>i+(YS.test(o)?XS:o===""?JS:e2),r)}function r2(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function i2(e,t,n){n===void 0&&(n=!1);let{routesMeta:r}=e,i={},o="/",s=[];for(let a=0;a<r.length;++a){let l=r[a],u=a===r.length-1,d=o==="/"?t:t.slice(o.length)||"/",f=Wp({path:l.relativePath,caseSensitive:l.caseSensitive,end:u},d),h=l.route;if(!f&&u&&n&&!r[r.length-1].route.index&&(f=Wp({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},d)),!f)return null;Object.assign(i,f.params),s.push({params:i,pathname:_n([o,f.pathname]),pathnameBase:u2(_n([o,f.pathnameBase])),route:h}),f.pathnameBase!=="/"&&(o=_n([o,f.pathnameBase]))}return s}function Wp(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=o2(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],s=o.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,d,f)=>{let{paramName:h,isOptional:p}=d;if(h==="*"){let w=a[f]||"";s=o.slice(0,o.length-w.length).replace(/(.)\/+$/,"$1")}const y=a[f];return p&&!y?u[h]=void 0:u[h]=(y||"").replace(/%2F/g,"/"),u},{}),pathname:o,pathnameBase:s,pattern:e}}function o2(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),ky(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function s2(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return ky(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Vf(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function a2(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Ri(e):e;return{pathname:n?n.startsWith("/")?n:l2(n,t):t,search:d2(r),hash:f2(i)}}function l2(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Mc(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function c2(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Uf(e,t){let n=c2(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Bf(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Ri(e):(i=Bo({},e),xe(!i.pathname||!i.pathname.includes("?"),Mc("?","pathname","search",i)),xe(!i.pathname||!i.pathname.includes("#"),Mc("#","pathname","hash",i)),xe(!i.search||!i.search.includes("#"),Mc("#","search","hash",i)));let o=e===""||i.pathname==="",s=o?"/":i.pathname,a;if(s==null)a=n;else{let f=t.length-1;if(!r&&s.startsWith("..")){let h=s.split("/");for(;h[0]==="..";)h.shift(),f-=1;i.pathname=h.join("/")}a=f>=0?t[f]:"/"}let l=a2(i,a),u=s&&s!=="/"&&s.endsWith("/"),d=(o||s===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||d)&&(l.pathname+="/"),l}const _n=e=>e.join("/").replace(/\/\/+/g,"/"),u2=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),d2=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,f2=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function h2(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Ey=["post","put","patch","delete"];new Set(Ey);const p2=["get",...Ey];new Set(p2);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ho(){return Ho=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ho.apply(this,arguments)}const Hf=j.createContext(null),m2=j.createContext(null),Gn=j.createContext(null),Dl=j.createContext(null),qt=j.createContext({outlet:null,matches:[],isDataRoute:!1}),Ty=j.createContext(null);function g2(e,t){let{relative:n}=t===void 0?{}:t;Ai()||xe(!1);let{basename:r,navigator:i}=j.useContext(Gn),{hash:o,pathname:s,search:a}=Ay(e,{relative:n}),l=s;return r!=="/"&&(l=s==="/"?r:_n([r,s])),i.createHref({pathname:l,search:a,hash:o})}function Ai(){return j.useContext(Dl)!=null}function pn(){return Ai()||xe(!1),j.useContext(Dl).location}function Ry(e){j.useContext(Gn).static||j.useLayoutEffect(e)}function $i(){let{isDataRoute:e}=j.useContext(qt);return e?O2():v2()}function v2(){Ai()||xe(!1);let e=j.useContext(Hf),{basename:t,future:n,navigator:r}=j.useContext(Gn),{matches:i}=j.useContext(qt),{pathname:o}=pn(),s=JSON.stringify(Uf(i,n.v7_relativeSplatPath)),a=j.useRef(!1);return Ry(()=>{a.current=!0}),j.useCallback(function(u,d){if(d===void 0&&(d={}),!a.current)return;if(typeof u=="number"){r.go(u);return}let f=Bf(u,JSON.parse(s),o,d.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:_n([t,f.pathname])),(d.replace?r.replace:r.push)(f,d.state,d)},[t,r,s,o,e])}const y2=j.createContext(null);function x2(e){let t=j.useContext(qt).outlet;return t&&j.createElement(y2.Provider,{value:e},t)}function w2(){let{matches:e}=j.useContext(qt),t=e[e.length-1];return t?t.params:{}}function Ay(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=j.useContext(Gn),{matches:i}=j.useContext(qt),{pathname:o}=pn(),s=JSON.stringify(Uf(i,r.v7_relativeSplatPath));return j.useMemo(()=>Bf(e,JSON.parse(s),o,n==="path"),[e,s,o,n])}function b2(e,t){return S2(e,t)}function S2(e,t,n,r){Ai()||xe(!1);let{navigator:i}=j.useContext(Gn),{matches:o}=j.useContext(qt),s=o[o.length-1],a=s?s.params:{};s&&s.pathname;let l=s?s.pathnameBase:"/";s&&s.route;let u=pn(),d;if(t){var f;let S=typeof t=="string"?Ri(t):t;l==="/"||(f=S.pathname)!=null&&f.startsWith(l)||xe(!1),d=S}else d=u;let h=d.pathname||"/",p=h;if(l!=="/"){let S=l.replace(/^\//,"").split("/");p="/"+h.replace(/^\//,"").split("/").slice(S.length).join("/")}let y=qS(e,{pathname:p}),w=E2(y&&y.map(S=>Object.assign({},S,{params:Object.assign({},a,S.params),pathname:_n([l,i.encodeLocation?i.encodeLocation(S.pathname).pathname:S.pathname]),pathnameBase:S.pathnameBase==="/"?l:_n([l,i.encodeLocation?i.encodeLocation(S.pathnameBase).pathname:S.pathnameBase])})),o,n,r);return t&&w?j.createElement(Dl.Provider,{value:{location:Ho({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:Rn.Pop}},w):w}function j2(){let e=$2(),t=h2(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return j.createElement(j.Fragment,null,j.createElement("h2",null,"Unexpected Application Error!"),j.createElement("h3",{style:{fontStyle:"italic"}},t),n?j.createElement("pre",{style:i},n):null,o)}const k2=j.createElement(j2,null);class C2 extends j.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?j.createElement(qt.Provider,{value:this.props.routeContext},j.createElement(Ty.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function P2(e){let{routeContext:t,match:n,children:r}=e,i=j.useContext(Hf);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),j.createElement(qt.Provider,{value:t},r)}function E2(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var o;if(!n)return null;if(n.errors)e=n.matches;else if((o=r)!=null&&o.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let s=e,a=(i=n)==null?void 0:i.errors;if(a!=null){let d=s.findIndex(f=>f.route.id&&(a==null?void 0:a[f.route.id])!==void 0);d>=0||xe(!1),s=s.slice(0,Math.min(s.length,d+1))}let l=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<s.length;d++){let f=s[d];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(u=d),f.route.id){let{loaderData:h,errors:p}=n,y=f.route.loader&&h[f.route.id]===void 0&&(!p||p[f.route.id]===void 0);if(f.route.lazy||y){l=!0,u>=0?s=s.slice(0,u+1):s=[s[0]];break}}}return s.reduceRight((d,f,h)=>{let p,y=!1,w=null,S=null;n&&(p=a&&f.route.id?a[f.route.id]:void 0,w=f.route.errorElement||k2,l&&(u<0&&h===0?(L2("route-fallback",!1),y=!0,S=null):u===h&&(y=!0,S=f.route.hydrateFallbackElement||null)));let m=t.concat(s.slice(0,h+1)),g=()=>{let v;return p?v=w:y?v=S:f.route.Component?v=j.createElement(f.route.Component,null):f.route.element?v=f.route.element:v=d,j.createElement(P2,{match:f,routeContext:{outlet:d,matches:m,isDataRoute:n!=null},children:v})};return n&&(f.route.ErrorBoundary||f.route.errorElement||h===0)?j.createElement(C2,{location:n.location,revalidation:n.revalidation,component:w,error:p,children:g(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):g()},null)}var $y=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}($y||{}),Xa=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Xa||{});function T2(e){let t=j.useContext(Hf);return t||xe(!1),t}function R2(e){let t=j.useContext(m2);return t||xe(!1),t}function A2(e){let t=j.useContext(qt);return t||xe(!1),t}function Oy(e){let t=A2(),n=t.matches[t.matches.length-1];return n.route.id||xe(!1),n.route.id}function $2(){var e;let t=j.useContext(Ty),n=R2(Xa.UseRouteError),r=Oy(Xa.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function O2(){let{router:e}=T2($y.UseNavigateStable),t=Oy(Xa.UseNavigateStable),n=j.useRef(!1);return Ry(()=>{n.current=!0}),j.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,Ho({fromRouteId:t},o)))},[e,t])}const Qp={};function L2(e,t,n){!t&&!Qp[e]&&(Qp[e]=!0)}function F2(e,t){e==null||e.v7_startTransition,(e==null?void 0:e.v7_relativeSplatPath)===void 0&&(!t||t.v7_relativeSplatPath),t&&(t.v7_fetcherPersist,t.v7_normalizeFormMethod,t.v7_partialHydration,t.v7_skipActionErrorRevalidation)}function M2(e){let{to:t,replace:n,state:r,relative:i}=e;Ai()||xe(!1);let{future:o,static:s}=j.useContext(Gn),{matches:a}=j.useContext(qt),{pathname:l}=pn(),u=$i(),d=Bf(t,Uf(a,o.v7_relativeSplatPath),l,i==="path"),f=JSON.stringify(d);return j.useEffect(()=>u(JSON.parse(f),{replace:n,state:r,relative:i}),[u,f,i,n,r]),null}function z2(e){return x2(e.context)}function Xe(e){xe(!1)}function N2(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Rn.Pop,navigator:o,static:s=!1,future:a}=e;Ai()&&xe(!1);let l=t.replace(/^\/*/,"/"),u=j.useMemo(()=>({basename:l,navigator:o,static:s,future:Ho({v7_relativeSplatPath:!1},a)}),[l,a,o,s]);typeof r=="string"&&(r=Ri(r));let{pathname:d="/",search:f="",hash:h="",state:p=null,key:y="default"}=r,w=j.useMemo(()=>{let S=Vf(d,l);return S==null?null:{location:{pathname:S,search:f,hash:h,state:p,key:y},navigationType:i}},[l,d,f,h,p,y,i]);return w==null?null:j.createElement(Gn.Provider,{value:u},j.createElement(Dl.Provider,{children:n,value:w}))}function _2(e){let{children:t,location:n}=e;return b2(id(t),n)}new Promise(()=>{});function id(e,t){t===void 0&&(t=[]);let n=[];return j.Children.forEach(e,(r,i)=>{if(!j.isValidElement(r))return;let o=[...t,i];if(r.type===j.Fragment){n.push.apply(n,id(r.props.children,o));return}r.type!==Xe&&xe(!1),!r.props.index||!r.props.children||xe(!1);let s={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=id(r.props.children,o)),n.push(s)}),n}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function od(){return od=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},od.apply(this,arguments)}function D2(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function I2(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function V2(e,t){return e.button===0&&(!t||t==="_self")&&!I2(e)}function sd(e){return e===void 0&&(e=""),new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((t,n)=>{let r=e[n];return t.concat(Array.isArray(r)?r.map(i=>[n,i]):[[n,r]])},[]))}function U2(e,t){let n=sd(e);return t&&t.forEach((r,i)=>{n.has(i)||t.getAll(i).forEach(o=>{n.append(i,o)})}),n}const B2=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],H2="6";try{window.__reactRouterVersion=H2}catch{}const W2="startTransition",qp=Ow[W2];function Q2(e){let{basename:t,children:n,future:r,window:i}=e,o=j.useRef();o.current==null&&(o.current=HS({window:i,v5Compat:!0}));let s=o.current,[a,l]=j.useState({action:s.action,location:s.location}),{v7_startTransition:u}=r||{},d=j.useCallback(f=>{u&&qp?qp(()=>l(f)):l(f)},[l,u]);return j.useLayoutEffect(()=>s.listen(d),[s,d]),j.useEffect(()=>F2(r),[r]),j.createElement(N2,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:s,future:r})}const q2=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",K2=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ue=j.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:s,state:a,target:l,to:u,preventScrollReset:d,viewTransition:f}=t,h=D2(t,B2),{basename:p}=j.useContext(Gn),y,w=!1;if(typeof u=="string"&&K2.test(u)&&(y=u,q2))try{let v=new URL(window.location.href),b=u.startsWith("//")?new URL(v.protocol+u):new URL(u),C=Vf(b.pathname,p);b.origin===v.origin&&C!=null?u=C+b.search+b.hash:w=!0}catch{}let S=g2(u,{relative:i}),m=G2(u,{replace:s,state:a,target:l,preventScrollReset:d,relative:i,viewTransition:f});function g(v){r&&r(v),v.defaultPrevented||m(v)}return j.createElement("a",od({},h,{href:y||S,onClick:w||o?r:g,ref:n,target:l}))});var Kp;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Kp||(Kp={}));var Gp;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Gp||(Gp={}));function G2(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:s,viewTransition:a}=t===void 0?{}:t,l=$i(),u=pn(),d=Ay(e,{relative:s});return j.useCallback(f=>{if(V2(f,n)){f.preventDefault();let h=r!==void 0?r:Ya(u)===Ya(d);l(e,{replace:h,state:i,preventScrollReset:o,relative:s,viewTransition:a})}},[u,l,d,r,i,n,e,o,s,a])}function Ly(e){let t=j.useRef(sd(e)),n=j.useRef(!1),r=pn(),i=j.useMemo(()=>U2(r.search,n.current?null:t.current),[r.search]),o=$i(),s=j.useCallback((a,l)=>{const u=sd(typeof a=="function"?a(i):a);n.current=!0,o("?"+u,l)},[o,i]);return[i,s]}function ad(e,t){return ad=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,r){return n.__proto__=r,n},ad(e,t)}function ss(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,ad(e,t)}var as=function(){function e(){this.listeners=[]}var t=e.prototype;return t.subscribe=function(r){var i=this,o=r||function(){};return this.listeners.push(o),this.onSubscribe(),function(){i.listeners=i.listeners.filter(function(s){return s!==o}),i.onUnsubscribe()}},t.hasListeners=function(){return this.listeners.length>0},t.onSubscribe=function(){},t.onUnsubscribe=function(){},e}();function Y(){return Y=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Y.apply(null,arguments)}var Za=typeof window>"u";function _e(){}function Y2(e,t){return typeof e=="function"?e(t):e}function ld(e){return typeof e=="number"&&e>=0&&e!==1/0}function Ja(e){return Array.isArray(e)?e:[e]}function Fy(e,t){return Math.max(e+(t||0)-Date.now(),0)}function ua(e,t,n){return Il(e)?typeof t=="function"?Y({},n,{queryKey:e,queryFn:t}):Y({},t,{queryKey:e}):e}function bn(e,t,n){return Il(e)?[Y({},t,{queryKey:e}),n]:[e||{},t]}function X2(e,t){if(e===!0&&t===!0||e==null&&t==null)return"all";if(e===!1&&t===!1)return"none";var n=e??!t;return n?"active":"inactive"}function Yp(e,t){var n=e.active,r=e.exact,i=e.fetching,o=e.inactive,s=e.predicate,a=e.queryKey,l=e.stale;if(Il(a)){if(r){if(t.queryHash!==Wf(a,t.options))return!1}else if(!el(t.queryKey,a))return!1}var u=X2(n,o);if(u==="none")return!1;if(u!=="all"){var d=t.isActive();if(u==="active"&&!d||u==="inactive"&&d)return!1}return!(typeof l=="boolean"&&t.isStale()!==l||typeof i=="boolean"&&t.isFetching()!==i||s&&!s(t))}function Xp(e,t){var n=e.exact,r=e.fetching,i=e.predicate,o=e.mutationKey;if(Il(o)){if(!t.options.mutationKey)return!1;if(n){if(ur(t.options.mutationKey)!==ur(o))return!1}else if(!el(t.options.mutationKey,o))return!1}return!(typeof r=="boolean"&&t.state.status==="loading"!==r||i&&!i(t))}function Wf(e,t){var n=(t==null?void 0:t.queryKeyHashFn)||ur;return n(e)}function ur(e){var t=Ja(e);return Z2(t)}function Z2(e){return JSON.stringify(e,function(t,n){return cd(n)?Object.keys(n).sort().reduce(function(r,i){return r[i]=n[i],r},{}):n})}function el(e,t){return My(Ja(e),Ja(t))}function My(e,t){return e===t?!0:typeof e!=typeof t?!1:e&&t&&typeof e=="object"&&typeof t=="object"?!Object.keys(t).some(function(n){return!My(e[n],t[n])}):!1}function tl(e,t){if(e===t)return e;var n=Array.isArray(e)&&Array.isArray(t);if(n||cd(e)&&cd(t)){for(var r=n?e.length:Object.keys(e).length,i=n?t:Object.keys(t),o=i.length,s=n?[]:{},a=0,l=0;l<o;l++){var u=n?l:i[l];s[u]=tl(e[u],t[u]),s[u]===e[u]&&a++}return r===o&&a===r?e:s}return t}function J2(e,t){if(e&&!t||t&&!e)return!1;for(var n in e)if(e[n]!==t[n])return!1;return!0}function cd(e){if(!Zp(e))return!1;var t=e.constructor;if(typeof t>"u")return!0;var n=t.prototype;return!(!Zp(n)||!n.hasOwnProperty("isPrototypeOf"))}function Zp(e){return Object.prototype.toString.call(e)==="[object Object]"}function Il(e){return typeof e=="string"||Array.isArray(e)}function ej(e){return new Promise(function(t){setTimeout(t,e)})}function Jp(e){Promise.resolve().then(e).catch(function(t){return setTimeout(function(){throw t})})}function zy(){if(typeof AbortController=="function")return new AbortController}var tj=function(e){ss(t,e);function t(){var r;return r=e.call(this)||this,r.setup=function(i){var o;if(!Za&&((o=window)!=null&&o.addEventListener)){var s=function(){return i()};return window.addEventListener("visibilitychange",s,!1),window.addEventListener("focus",s,!1),function(){window.removeEventListener("visibilitychange",s),window.removeEventListener("focus",s)}}},r}var n=t.prototype;return n.onSubscribe=function(){this.cleanup||this.setEventListener(this.setup)},n.onUnsubscribe=function(){if(!this.hasListeners()){var i;(i=this.cleanup)==null||i.call(this),this.cleanup=void 0}},n.setEventListener=function(i){var o,s=this;this.setup=i,(o=this.cleanup)==null||o.call(this),this.cleanup=i(function(a){typeof a=="boolean"?s.setFocused(a):s.onFocus()})},n.setFocused=function(i){this.focused=i,i&&this.onFocus()},n.onFocus=function(){this.listeners.forEach(function(i){i()})},n.isFocused=function(){return typeof this.focused=="boolean"?this.focused:typeof document>"u"?!0:[void 0,"visible","prerender"].includes(document.visibilityState)},t}(as),yo=new tj,nj=function(e){ss(t,e);function t(){var r;return r=e.call(this)||this,r.setup=function(i){var o;if(!Za&&((o=window)!=null&&o.addEventListener)){var s=function(){return i()};return window.addEventListener("online",s,!1),window.addEventListener("offline",s,!1),function(){window.removeEventListener("online",s),window.removeEventListener("offline",s)}}},r}var n=t.prototype;return n.onSubscribe=function(){this.cleanup||this.setEventListener(this.setup)},n.onUnsubscribe=function(){if(!this.hasListeners()){var i;(i=this.cleanup)==null||i.call(this),this.cleanup=void 0}},n.setEventListener=function(i){var o,s=this;this.setup=i,(o=this.cleanup)==null||o.call(this),this.cleanup=i(function(a){typeof a=="boolean"?s.setOnline(a):s.onOnline()})},n.setOnline=function(i){this.online=i,i&&this.onOnline()},n.onOnline=function(){this.listeners.forEach(function(i){i()})},n.isOnline=function(){return typeof this.online=="boolean"?this.online:typeof navigator>"u"||typeof navigator.onLine>"u"?!0:navigator.onLine},t}(as),da=new nj;function rj(e){return Math.min(1e3*Math.pow(2,e),3e4)}function nl(e){return typeof(e==null?void 0:e.cancel)=="function"}var Ny=function(t){this.revert=t==null?void 0:t.revert,this.silent=t==null?void 0:t.silent};function fa(e){return e instanceof Ny}var _y=function(t){var n=this,r=!1,i,o,s,a;this.abort=t.abort,this.cancel=function(h){return i==null?void 0:i(h)},this.cancelRetry=function(){r=!0},this.continueRetry=function(){r=!1},this.continue=function(){return o==null?void 0:o()},this.failureCount=0,this.isPaused=!1,this.isResolved=!1,this.isTransportCancelable=!1,this.promise=new Promise(function(h,p){s=h,a=p});var l=function(p){n.isResolved||(n.isResolved=!0,t.onSuccess==null||t.onSuccess(p),o==null||o(),s(p))},u=function(p){n.isResolved||(n.isResolved=!0,t.onError==null||t.onError(p),o==null||o(),a(p))},d=function(){return new Promise(function(p){o=p,n.isPaused=!0,t.onPause==null||t.onPause()}).then(function(){o=void 0,n.isPaused=!1,t.onContinue==null||t.onContinue()})},f=function h(){if(!n.isResolved){var p;try{p=t.fn()}catch(y){p=Promise.reject(y)}i=function(w){if(!n.isResolved&&(u(new Ny(w)),n.abort==null||n.abort(),nl(p)))try{p.cancel()}catch{}},n.isTransportCancelable=nl(p),Promise.resolve(p).then(l).catch(function(y){var w,S;if(!n.isResolved){var m=(w=t.retry)!=null?w:3,g=(S=t.retryDelay)!=null?S:rj,v=typeof g=="function"?g(n.failureCount,y):g,b=m===!0||typeof m=="number"&&n.failureCount<m||typeof m=="function"&&m(n.failureCount,y);if(r||!b){u(y);return}n.failureCount++,t.onFail==null||t.onFail(n.failureCount,y),ej(v).then(function(){if(!yo.isFocused()||!da.isOnline())return d()}).then(function(){r?u(y):h()})}})}};f()},ij=function(){function e(){this.queue=[],this.transactions=0,this.notifyFn=function(n){n()},this.batchNotifyFn=function(n){n()}}var t=e.prototype;return t.batch=function(r){var i;this.transactions++;try{i=r()}finally{this.transactions--,this.transactions||this.flush()}return i},t.schedule=function(r){var i=this;this.transactions?this.queue.push(r):Jp(function(){i.notifyFn(r)})},t.batchCalls=function(r){var i=this;return function(){for(var o=arguments.length,s=new Array(o),a=0;a<o;a++)s[a]=arguments[a];i.schedule(function(){r.apply(void 0,s)})}},t.flush=function(){var r=this,i=this.queue;this.queue=[],i.length&&Jp(function(){r.batchNotifyFn(function(){i.forEach(function(o){r.notifyFn(o)})})})},t.setNotifyFunction=function(r){this.notifyFn=r},t.setBatchNotifyFunction=function(r){this.batchNotifyFn=r},e}(),ge=new ij,Dy=console;function rl(){return Dy}function oj(e){Dy=e}var sj=function(){function e(n){this.abortSignalConsumed=!1,this.hadObservers=!1,this.defaultOptions=n.defaultOptions,this.setOptions(n.options),this.observers=[],this.cache=n.cache,this.queryKey=n.queryKey,this.queryHash=n.queryHash,this.initialState=n.state||this.getDefaultState(this.options),this.state=this.initialState,this.meta=n.meta,this.scheduleGc()}var t=e.prototype;return t.setOptions=function(r){var i;this.options=Y({},this.defaultOptions,r),this.meta=r==null?void 0:r.meta,this.cacheTime=Math.max(this.cacheTime||0,(i=this.options.cacheTime)!=null?i:5*60*1e3)},t.setDefaultOptions=function(r){this.defaultOptions=r},t.scheduleGc=function(){var r=this;this.clearGcTimeout(),ld(this.cacheTime)&&(this.gcTimeout=setTimeout(function(){r.optionalRemove()},this.cacheTime))},t.clearGcTimeout=function(){this.gcTimeout&&(clearTimeout(this.gcTimeout),this.gcTimeout=void 0)},t.optionalRemove=function(){this.observers.length||(this.state.isFetching?this.hadObservers&&this.scheduleGc():this.cache.remove(this))},t.setData=function(r,i){var o,s,a=this.state.data,l=Y2(r,a);return(o=(s=this.options).isDataEqual)!=null&&o.call(s,a,l)?l=a:this.options.structuralSharing!==!1&&(l=tl(a,l)),this.dispatch({data:l,type:"success",dataUpdatedAt:i==null?void 0:i.updatedAt}),l},t.setState=function(r,i){this.dispatch({type:"setState",state:r,setStateOptions:i})},t.cancel=function(r){var i,o=this.promise;return(i=this.retryer)==null||i.cancel(r),o?o.then(_e).catch(_e):Promise.resolve()},t.destroy=function(){this.clearGcTimeout(),this.cancel({silent:!0})},t.reset=function(){this.destroy(),this.setState(this.initialState)},t.isActive=function(){return this.observers.some(function(r){return r.options.enabled!==!1})},t.isFetching=function(){return this.state.isFetching},t.isStale=function(){return this.state.isInvalidated||!this.state.dataUpdatedAt||this.observers.some(function(r){return r.getCurrentResult().isStale})},t.isStaleByTime=function(r){return r===void 0&&(r=0),this.state.isInvalidated||!this.state.dataUpdatedAt||!Fy(this.state.dataUpdatedAt,r)},t.onFocus=function(){var r,i=this.observers.find(function(o){return o.shouldFetchOnWindowFocus()});i&&i.refetch(),(r=this.retryer)==null||r.continue()},t.onOnline=function(){var r,i=this.observers.find(function(o){return o.shouldFetchOnReconnect()});i&&i.refetch(),(r=this.retryer)==null||r.continue()},t.addObserver=function(r){this.observers.indexOf(r)===-1&&(this.observers.push(r),this.hadObservers=!0,this.clearGcTimeout(),this.cache.notify({type:"observerAdded",query:this,observer:r}))},t.removeObserver=function(r){this.observers.indexOf(r)!==-1&&(this.observers=this.observers.filter(function(i){return i!==r}),this.observers.length||(this.retryer&&(this.retryer.isTransportCancelable||this.abortSignalConsumed?this.retryer.cancel({revert:!0}):this.retryer.cancelRetry()),this.cacheTime?this.scheduleGc():this.cache.remove(this)),this.cache.notify({type:"observerRemoved",query:this,observer:r}))},t.getObserversCount=function(){return this.observers.length},t.invalidate=function(){this.state.isInvalidated||this.dispatch({type:"invalidate"})},t.fetch=function(r,i){var o=this,s,a,l;if(this.state.isFetching){if(this.state.dataUpdatedAt&&(i!=null&&i.cancelRefetch))this.cancel({silent:!0});else if(this.promise){var u;return(u=this.retryer)==null||u.continueRetry(),this.promise}}if(r&&this.setOptions(r),!this.options.queryFn){var d=this.observers.find(function(g){return g.options.queryFn});d&&this.setOptions(d.options)}var f=Ja(this.queryKey),h=zy(),p={queryKey:f,pageParam:void 0,meta:this.meta};Object.defineProperty(p,"signal",{enumerable:!0,get:function(){if(h)return o.abortSignalConsumed=!0,h.signal}});var y=function(){return o.options.queryFn?(o.abortSignalConsumed=!1,o.options.queryFn(p)):Promise.reject("Missing queryFn")},w={fetchOptions:i,options:this.options,queryKey:f,state:this.state,fetchFn:y,meta:this.meta};if((s=this.options.behavior)!=null&&s.onFetch){var S;(S=this.options.behavior)==null||S.onFetch(w)}if(this.revertState=this.state,!this.state.isFetching||this.state.fetchMeta!==((a=w.fetchOptions)==null?void 0:a.meta)){var m;this.dispatch({type:"fetch",meta:(m=w.fetchOptions)==null?void 0:m.meta})}return this.retryer=new _y({fn:w.fetchFn,abort:h==null||(l=h.abort)==null?void 0:l.bind(h),onSuccess:function(v){o.setData(v),o.cache.config.onSuccess==null||o.cache.config.onSuccess(v,o),o.cacheTime===0&&o.optionalRemove()},onError:function(v){fa(v)&&v.silent||o.dispatch({type:"error",error:v}),fa(v)||(o.cache.config.onError==null||o.cache.config.onError(v,o),rl().error(v)),o.cacheTime===0&&o.optionalRemove()},onFail:function(){o.dispatch({type:"failed"})},onPause:function(){o.dispatch({type:"pause"})},onContinue:function(){o.dispatch({type:"continue"})},retry:w.options.retry,retryDelay:w.options.retryDelay}),this.promise=this.retryer.promise,this.promise},t.dispatch=function(r){var i=this;this.state=this.reducer(this.state,r),ge.batch(function(){i.observers.forEach(function(o){o.onQueryUpdate(r)}),i.cache.notify({query:i,type:"queryUpdated",action:r})})},t.getDefaultState=function(r){var i=typeof r.initialData=="function"?r.initialData():r.initialData,o=typeof r.initialData<"u",s=o?typeof r.initialDataUpdatedAt=="function"?r.initialDataUpdatedAt():r.initialDataUpdatedAt:0,a=typeof i<"u";return{data:i,dataUpdateCount:0,dataUpdatedAt:a?s??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchMeta:null,isFetching:!1,isInvalidated:!1,isPaused:!1,status:a?"success":"idle"}},t.reducer=function(r,i){var o,s;switch(i.type){case"failed":return Y({},r,{fetchFailureCount:r.fetchFailureCount+1});case"pause":return Y({},r,{isPaused:!0});case"continue":return Y({},r,{isPaused:!1});case"fetch":return Y({},r,{fetchFailureCount:0,fetchMeta:(o=i.meta)!=null?o:null,isFetching:!0,isPaused:!1},!r.dataUpdatedAt&&{error:null,status:"loading"});case"success":return Y({},r,{data:i.data,dataUpdateCount:r.dataUpdateCount+1,dataUpdatedAt:(s=i.dataUpdatedAt)!=null?s:Date.now(),error:null,fetchFailureCount:0,isFetching:!1,isInvalidated:!1,isPaused:!1,status:"success"});case"error":var a=i.error;return fa(a)&&a.revert&&this.revertState?Y({},this.revertState):Y({},r,{error:a,errorUpdateCount:r.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:r.fetchFailureCount+1,isFetching:!1,isPaused:!1,status:"error"});case"invalidate":return Y({},r,{isInvalidated:!0});case"setState":return Y({},r,i.state);default:return r}},e}(),aj=function(e){ss(t,e);function t(r){var i;return i=e.call(this)||this,i.config=r||{},i.queries=[],i.queriesMap={},i}var n=t.prototype;return n.build=function(i,o,s){var a,l=o.queryKey,u=(a=o.queryHash)!=null?a:Wf(l,o),d=this.get(u);return d||(d=new sj({cache:this,queryKey:l,queryHash:u,options:i.defaultQueryOptions(o),state:s,defaultOptions:i.getQueryDefaults(l),meta:o.meta}),this.add(d)),d},n.add=function(i){this.queriesMap[i.queryHash]||(this.queriesMap[i.queryHash]=i,this.queries.push(i),this.notify({type:"queryAdded",query:i}))},n.remove=function(i){var o=this.queriesMap[i.queryHash];o&&(i.destroy(),this.queries=this.queries.filter(function(s){return s!==i}),o===i&&delete this.queriesMap[i.queryHash],this.notify({type:"queryRemoved",query:i}))},n.clear=function(){var i=this;ge.batch(function(){i.queries.forEach(function(o){i.remove(o)})})},n.get=function(i){return this.queriesMap[i]},n.getAll=function(){return this.queries},n.find=function(i,o){var s=bn(i,o),a=s[0];return typeof a.exact>"u"&&(a.exact=!0),this.queries.find(function(l){return Yp(a,l)})},n.findAll=function(i,o){var s=bn(i,o),a=s[0];return Object.keys(a).length>0?this.queries.filter(function(l){return Yp(a,l)}):this.queries},n.notify=function(i){var o=this;ge.batch(function(){o.listeners.forEach(function(s){s(i)})})},n.onFocus=function(){var i=this;ge.batch(function(){i.queries.forEach(function(o){o.onFocus()})})},n.onOnline=function(){var i=this;ge.batch(function(){i.queries.forEach(function(o){o.onOnline()})})},t}(as),lj=function(){function e(n){this.options=Y({},n.defaultOptions,n.options),this.mutationId=n.mutationId,this.mutationCache=n.mutationCache,this.observers=[],this.state=n.state||cj(),this.meta=n.meta}var t=e.prototype;return t.setState=function(r){this.dispatch({type:"setState",state:r})},t.addObserver=function(r){this.observers.indexOf(r)===-1&&this.observers.push(r)},t.removeObserver=function(r){this.observers=this.observers.filter(function(i){return i!==r})},t.cancel=function(){return this.retryer?(this.retryer.cancel(),this.retryer.promise.then(_e).catch(_e)):Promise.resolve()},t.continue=function(){return this.retryer?(this.retryer.continue(),this.retryer.promise):this.execute()},t.execute=function(){var r=this,i,o=this.state.status==="loading",s=Promise.resolve();return o||(this.dispatch({type:"loading",variables:this.options.variables}),s=s.then(function(){r.mutationCache.config.onMutate==null||r.mutationCache.config.onMutate(r.state.variables,r)}).then(function(){return r.options.onMutate==null?void 0:r.options.onMutate(r.state.variables)}).then(function(a){a!==r.state.context&&r.dispatch({type:"loading",context:a,variables:r.state.variables})})),s.then(function(){return r.executeMutation()}).then(function(a){i=a,r.mutationCache.config.onSuccess==null||r.mutationCache.config.onSuccess(i,r.state.variables,r.state.context,r)}).then(function(){return r.options.onSuccess==null?void 0:r.options.onSuccess(i,r.state.variables,r.state.context)}).then(function(){return r.options.onSettled==null?void 0:r.options.onSettled(i,null,r.state.variables,r.state.context)}).then(function(){return r.dispatch({type:"success",data:i}),i}).catch(function(a){return r.mutationCache.config.onError==null||r.mutationCache.config.onError(a,r.state.variables,r.state.context,r),rl().error(a),Promise.resolve().then(function(){return r.options.onError==null?void 0:r.options.onError(a,r.state.variables,r.state.context)}).then(function(){return r.options.onSettled==null?void 0:r.options.onSettled(void 0,a,r.state.variables,r.state.context)}).then(function(){throw r.dispatch({type:"error",error:a}),a})})},t.executeMutation=function(){var r=this,i;return this.retryer=new _y({fn:function(){return r.options.mutationFn?r.options.mutationFn(r.state.variables):Promise.reject("No mutationFn found")},onFail:function(){r.dispatch({type:"failed"})},onPause:function(){r.dispatch({type:"pause"})},onContinue:function(){r.dispatch({type:"continue"})},retry:(i=this.options.retry)!=null?i:0,retryDelay:this.options.retryDelay}),this.retryer.promise},t.dispatch=function(r){var i=this;this.state=uj(this.state,r),ge.batch(function(){i.observers.forEach(function(o){o.onMutationUpdate(r)}),i.mutationCache.notify(i)})},e}();function cj(){return{context:void 0,data:void 0,error:null,failureCount:0,isPaused:!1,status:"idle",variables:void 0}}function uj(e,t){switch(t.type){case"failed":return Y({},e,{failureCount:e.failureCount+1});case"pause":return Y({},e,{isPaused:!0});case"continue":return Y({},e,{isPaused:!1});case"loading":return Y({},e,{context:t.context,data:void 0,error:null,isPaused:!1,status:"loading",variables:t.variables});case"success":return Y({},e,{data:t.data,error:null,status:"success",isPaused:!1});case"error":return Y({},e,{data:void 0,error:t.error,failureCount:e.failureCount+1,isPaused:!1,status:"error"});case"setState":return Y({},e,t.state);default:return e}}var dj=function(e){ss(t,e);function t(r){var i;return i=e.call(this)||this,i.config=r||{},i.mutations=[],i.mutationId=0,i}var n=t.prototype;return n.build=function(i,o,s){var a=new lj({mutationCache:this,mutationId:++this.mutationId,options:i.defaultMutationOptions(o),state:s,defaultOptions:o.mutationKey?i.getMutationDefaults(o.mutationKey):void 0,meta:o.meta});return this.add(a),a},n.add=function(i){this.mutations.push(i),this.notify(i)},n.remove=function(i){this.mutations=this.mutations.filter(function(o){return o!==i}),i.cancel(),this.notify(i)},n.clear=function(){var i=this;ge.batch(function(){i.mutations.forEach(function(o){i.remove(o)})})},n.getAll=function(){return this.mutations},n.find=function(i){return typeof i.exact>"u"&&(i.exact=!0),this.mutations.find(function(o){return Xp(i,o)})},n.findAll=function(i){return this.mutations.filter(function(o){return Xp(i,o)})},n.notify=function(i){var o=this;ge.batch(function(){o.listeners.forEach(function(s){s(i)})})},n.onFocus=function(){this.resumePausedMutations()},n.onOnline=function(){this.resumePausedMutations()},n.resumePausedMutations=function(){var i=this.mutations.filter(function(o){return o.state.isPaused});return ge.batch(function(){return i.reduce(function(o,s){return o.then(function(){return s.continue().catch(_e)})},Promise.resolve())})},t}(as);function fj(){return{onFetch:function(t){t.fetchFn=function(){var n,r,i,o,s,a,l=(n=t.fetchOptions)==null||(r=n.meta)==null?void 0:r.refetchPage,u=(i=t.fetchOptions)==null||(o=i.meta)==null?void 0:o.fetchMore,d=u==null?void 0:u.pageParam,f=(u==null?void 0:u.direction)==="forward",h=(u==null?void 0:u.direction)==="backward",p=((s=t.state.data)==null?void 0:s.pages)||[],y=((a=t.state.data)==null?void 0:a.pageParams)||[],w=zy(),S=w==null?void 0:w.signal,m=y,g=!1,v=t.options.queryFn||function(){return Promise.reject("Missing queryFn")},b=function(G,Ce,W,le){return m=le?[Ce].concat(m):[].concat(m,[Ce]),le?[W].concat(G):[].concat(G,[W])},C=function(G,Ce,W,le){if(g)return Promise.reject("Cancelled");if(typeof W>"u"&&!Ce&&G.length)return Promise.resolve(G);var A={queryKey:t.queryKey,signal:S,pageParam:W,meta:t.meta},$=v(A),z=Promise.resolve($).then(function(Q){return b(G,W,Q,le)});if(nl($)){var M=z;M.cancel=$.cancel}return z},P;if(!p.length)P=C([]);else if(f){var k=typeof d<"u",T=k?d:em(t.options,p);P=C(p,k,T)}else if(h){var O=typeof d<"u",F=O?d:hj(t.options,p);P=C(p,O,F,!0)}else(function(){m=[];var ee=typeof t.options.getNextPageParam>"u",G=l&&p[0]?l(p[0],0,p):!0;P=G?C([],ee,y[0]):Promise.resolve(b([],y[0],p[0]));for(var Ce=function(A){P=P.then(function($){var z=l&&p[A]?l(p[A],A,p):!0;if(z){var M=ee?y[A]:em(t.options,$);return C($,ee,M)}return Promise.resolve(b($,y[A],p[A]))})},W=1;W<p.length;W++)Ce(W)})();var ne=P.then(function(ee){return{pages:ee,pageParams:m}}),X=ne;return X.cancel=function(){g=!0,w==null||w.abort(),nl(P)&&P.cancel()},ne}}}}function em(e,t){return e.getNextPageParam==null?void 0:e.getNextPageParam(t[t.length-1],t)}function hj(e,t){return e.getPreviousPageParam==null?void 0:e.getPreviousPageParam(t[0],t)}var pj=function(){function e(n){n===void 0&&(n={}),this.queryCache=n.queryCache||new aj,this.mutationCache=n.mutationCache||new dj,this.defaultOptions=n.defaultOptions||{},this.queryDefaults=[],this.mutationDefaults=[]}var t=e.prototype;return t.mount=function(){var r=this;this.unsubscribeFocus=yo.subscribe(function(){yo.isFocused()&&da.isOnline()&&(r.mutationCache.onFocus(),r.queryCache.onFocus())}),this.unsubscribeOnline=da.subscribe(function(){yo.isFocused()&&da.isOnline()&&(r.mutationCache.onOnline(),r.queryCache.onOnline())})},t.unmount=function(){var r,i;(r=this.unsubscribeFocus)==null||r.call(this),(i=this.unsubscribeOnline)==null||i.call(this)},t.isFetching=function(r,i){var o=bn(r,i),s=o[0];return s.fetching=!0,this.queryCache.findAll(s).length},t.isMutating=function(r){return this.mutationCache.findAll(Y({},r,{fetching:!0})).length},t.getQueryData=function(r,i){var o;return(o=this.queryCache.find(r,i))==null?void 0:o.state.data},t.getQueriesData=function(r){return this.getQueryCache().findAll(r).map(function(i){var o=i.queryKey,s=i.state,a=s.data;return[o,a]})},t.setQueryData=function(r,i,o){var s=ua(r),a=this.defaultQueryOptions(s);return this.queryCache.build(this,a).setData(i,o)},t.setQueriesData=function(r,i,o){var s=this;return ge.batch(function(){return s.getQueryCache().findAll(r).map(function(a){var l=a.queryKey;return[l,s.setQueryData(l,i,o)]})})},t.getQueryState=function(r,i){var o;return(o=this.queryCache.find(r,i))==null?void 0:o.state},t.removeQueries=function(r,i){var o=bn(r,i),s=o[0],a=this.queryCache;ge.batch(function(){a.findAll(s).forEach(function(l){a.remove(l)})})},t.resetQueries=function(r,i,o){var s=this,a=bn(r,i,o),l=a[0],u=a[1],d=this.queryCache,f=Y({},l,{active:!0});return ge.batch(function(){return d.findAll(l).forEach(function(h){h.reset()}),s.refetchQueries(f,u)})},t.cancelQueries=function(r,i,o){var s=this,a=bn(r,i,o),l=a[0],u=a[1],d=u===void 0?{}:u;typeof d.revert>"u"&&(d.revert=!0);var f=ge.batch(function(){return s.queryCache.findAll(l).map(function(h){return h.cancel(d)})});return Promise.all(f).then(_e).catch(_e)},t.invalidateQueries=function(r,i,o){var s,a,l,u=this,d=bn(r,i,o),f=d[0],h=d[1],p=Y({},f,{active:(s=(a=f.refetchActive)!=null?a:f.active)!=null?s:!0,inactive:(l=f.refetchInactive)!=null?l:!1});return ge.batch(function(){return u.queryCache.findAll(f).forEach(function(y){y.invalidate()}),u.refetchQueries(p,h)})},t.refetchQueries=function(r,i,o){var s=this,a=bn(r,i,o),l=a[0],u=a[1],d=ge.batch(function(){return s.queryCache.findAll(l).map(function(h){return h.fetch(void 0,Y({},u,{meta:{refetchPage:l==null?void 0:l.refetchPage}}))})}),f=Promise.all(d).then(_e);return u!=null&&u.throwOnError||(f=f.catch(_e)),f},t.fetchQuery=function(r,i,o){var s=ua(r,i,o),a=this.defaultQueryOptions(s);typeof a.retry>"u"&&(a.retry=!1);var l=this.queryCache.build(this,a);return l.isStaleByTime(a.staleTime)?l.fetch(a):Promise.resolve(l.state.data)},t.prefetchQuery=function(r,i,o){return this.fetchQuery(r,i,o).then(_e).catch(_e)},t.fetchInfiniteQuery=function(r,i,o){var s=ua(r,i,o);return s.behavior=fj(),this.fetchQuery(s)},t.prefetchInfiniteQuery=function(r,i,o){return this.fetchInfiniteQuery(r,i,o).then(_e).catch(_e)},t.cancelMutations=function(){var r=this,i=ge.batch(function(){return r.mutationCache.getAll().map(function(o){return o.cancel()})});return Promise.all(i).then(_e).catch(_e)},t.resumePausedMutations=function(){return this.getMutationCache().resumePausedMutations()},t.executeMutation=function(r){return this.mutationCache.build(this,r).execute()},t.getQueryCache=function(){return this.queryCache},t.getMutationCache=function(){return this.mutationCache},t.getDefaultOptions=function(){return this.defaultOptions},t.setDefaultOptions=function(r){this.defaultOptions=r},t.setQueryDefaults=function(r,i){var o=this.queryDefaults.find(function(s){return ur(r)===ur(s.queryKey)});o?o.defaultOptions=i:this.queryDefaults.push({queryKey:r,defaultOptions:i})},t.getQueryDefaults=function(r){var i;return r?(i=this.queryDefaults.find(function(o){return el(r,o.queryKey)}))==null?void 0:i.defaultOptions:void 0},t.setMutationDefaults=function(r,i){var o=this.mutationDefaults.find(function(s){return ur(r)===ur(s.mutationKey)});o?o.defaultOptions=i:this.mutationDefaults.push({mutationKey:r,defaultOptions:i})},t.getMutationDefaults=function(r){var i;return r?(i=this.mutationDefaults.find(function(o){return el(r,o.mutationKey)}))==null?void 0:i.defaultOptions:void 0},t.defaultQueryOptions=function(r){if(r!=null&&r._defaulted)return r;var i=Y({},this.defaultOptions.queries,this.getQueryDefaults(r==null?void 0:r.queryKey),r,{_defaulted:!0});return!i.queryHash&&i.queryKey&&(i.queryHash=Wf(i.queryKey,i)),i},t.defaultQueryObserverOptions=function(r){return this.defaultQueryOptions(r)},t.defaultMutationOptions=function(r){return r!=null&&r._defaulted?r:Y({},this.defaultOptions.mutations,this.getMutationDefaults(r==null?void 0:r.mutationKey),r,{_defaulted:!0})},t.clear=function(){this.queryCache.clear(),this.mutationCache.clear()},e}(),mj=function(e){ss(t,e);function t(r,i){var o;return o=e.call(this)||this,o.client=r,o.options=i,o.trackedProps=[],o.selectError=null,o.bindMethods(),o.setOptions(i),o}var n=t.prototype;return n.bindMethods=function(){this.remove=this.remove.bind(this),this.refetch=this.refetch.bind(this)},n.onSubscribe=function(){this.listeners.length===1&&(this.currentQuery.addObserver(this),tm(this.currentQuery,this.options)&&this.executeFetch(),this.updateTimers())},n.onUnsubscribe=function(){this.listeners.length||this.destroy()},n.shouldFetchOnReconnect=function(){return ud(this.currentQuery,this.options,this.options.refetchOnReconnect)},n.shouldFetchOnWindowFocus=function(){return ud(this.currentQuery,this.options,this.options.refetchOnWindowFocus)},n.destroy=function(){this.listeners=[],this.clearTimers(),this.currentQuery.removeObserver(this)},n.setOptions=function(i,o){var s=this.options,a=this.currentQuery;if(this.options=this.client.defaultQueryObserverOptions(i),typeof this.options.enabled<"u"&&typeof this.options.enabled!="boolean")throw new Error("Expected enabled to be a boolean");this.options.queryKey||(this.options.queryKey=s.queryKey),this.updateQuery();var l=this.hasListeners();l&&nm(this.currentQuery,a,this.options,s)&&this.executeFetch(),this.updateResult(o),l&&(this.currentQuery!==a||this.options.enabled!==s.enabled||this.options.staleTime!==s.staleTime)&&this.updateStaleTimeout();var u=this.computeRefetchInterval();l&&(this.currentQuery!==a||this.options.enabled!==s.enabled||u!==this.currentRefetchInterval)&&this.updateRefetchInterval(u)},n.getOptimisticResult=function(i){var o=this.client.defaultQueryObserverOptions(i),s=this.client.getQueryCache().build(this.client,o);return this.createResult(s,o)},n.getCurrentResult=function(){return this.currentResult},n.trackResult=function(i,o){var s=this,a={},l=function(d){s.trackedProps.includes(d)||s.trackedProps.push(d)};return Object.keys(i).forEach(function(u){Object.defineProperty(a,u,{configurable:!1,enumerable:!0,get:function(){return l(u),i[u]}})}),(o.useErrorBoundary||o.suspense)&&l("error"),a},n.getNextResult=function(i){var o=this;return new Promise(function(s,a){var l=o.subscribe(function(u){u.isFetching||(l(),u.isError&&(i!=null&&i.throwOnError)?a(u.error):s(u))})})},n.getCurrentQuery=function(){return this.currentQuery},n.remove=function(){this.client.getQueryCache().remove(this.currentQuery)},n.refetch=function(i){return this.fetch(Y({},i,{meta:{refetchPage:i==null?void 0:i.refetchPage}}))},n.fetchOptimistic=function(i){var o=this,s=this.client.defaultQueryObserverOptions(i),a=this.client.getQueryCache().build(this.client,s);return a.fetch().then(function(){return o.createResult(a,s)})},n.fetch=function(i){var o=this;return this.executeFetch(i).then(function(){return o.updateResult(),o.currentResult})},n.executeFetch=function(i){this.updateQuery();var o=this.currentQuery.fetch(this.options,i);return i!=null&&i.throwOnError||(o=o.catch(_e)),o},n.updateStaleTimeout=function(){var i=this;if(this.clearStaleTimeout(),!(Za||this.currentResult.isStale||!ld(this.options.staleTime))){var o=Fy(this.currentResult.dataUpdatedAt,this.options.staleTime),s=o+1;this.staleTimeoutId=setTimeout(function(){i.currentResult.isStale||i.updateResult()},s)}},n.computeRefetchInterval=function(){var i;return typeof this.options.refetchInterval=="function"?this.options.refetchInterval(this.currentResult.data,this.currentQuery):(i=this.options.refetchInterval)!=null?i:!1},n.updateRefetchInterval=function(i){var o=this;this.clearRefetchInterval(),this.currentRefetchInterval=i,!(Za||this.options.enabled===!1||!ld(this.currentRefetchInterval)||this.currentRefetchInterval===0)&&(this.refetchIntervalId=setInterval(function(){(o.options.refetchIntervalInBackground||yo.isFocused())&&o.executeFetch()},this.currentRefetchInterval))},n.updateTimers=function(){this.updateStaleTimeout(),this.updateRefetchInterval(this.computeRefetchInterval())},n.clearTimers=function(){this.clearStaleTimeout(),this.clearRefetchInterval()},n.clearStaleTimeout=function(){this.staleTimeoutId&&(clearTimeout(this.staleTimeoutId),this.staleTimeoutId=void 0)},n.clearRefetchInterval=function(){this.refetchIntervalId&&(clearInterval(this.refetchIntervalId),this.refetchIntervalId=void 0)},n.createResult=function(i,o){var s=this.currentQuery,a=this.options,l=this.currentResult,u=this.currentResultState,d=this.currentResultOptions,f=i!==s,h=f?i.state:this.currentQueryInitialState,p=f?this.currentResult:this.previousQueryResult,y=i.state,w=y.dataUpdatedAt,S=y.error,m=y.errorUpdatedAt,g=y.isFetching,v=y.status,b=!1,C=!1,P;if(o.optimisticResults){var k=this.hasListeners(),T=!k&&tm(i,o),O=k&&nm(i,s,o,a);(T||O)&&(g=!0,w||(v="loading"))}if(o.keepPreviousData&&!y.dataUpdateCount&&(p!=null&&p.isSuccess)&&v!=="error")P=p.data,w=p.dataUpdatedAt,v=p.status,b=!0;else if(o.select&&typeof y.data<"u")if(l&&y.data===(u==null?void 0:u.data)&&o.select===this.selectFn)P=this.selectResult;else try{this.selectFn=o.select,P=o.select(y.data),o.structuralSharing!==!1&&(P=tl(l==null?void 0:l.data,P)),this.selectResult=P,this.selectError=null}catch(X){rl().error(X),this.selectError=X}else P=y.data;if(typeof o.placeholderData<"u"&&typeof P>"u"&&(v==="loading"||v==="idle")){var F;if(l!=null&&l.isPlaceholderData&&o.placeholderData===(d==null?void 0:d.placeholderData))F=l.data;else if(F=typeof o.placeholderData=="function"?o.placeholderData():o.placeholderData,o.select&&typeof F<"u")try{F=o.select(F),o.structuralSharing!==!1&&(F=tl(l==null?void 0:l.data,F)),this.selectError=null}catch(X){rl().error(X),this.selectError=X}typeof F<"u"&&(v="success",P=F,C=!0)}this.selectError&&(S=this.selectError,P=this.selectResult,m=Date.now(),v="error");var ne={status:v,isLoading:v==="loading",isSuccess:v==="success",isError:v==="error",isIdle:v==="idle",data:P,dataUpdatedAt:w,error:S,errorUpdatedAt:m,failureCount:y.fetchFailureCount,errorUpdateCount:y.errorUpdateCount,isFetched:y.dataUpdateCount>0||y.errorUpdateCount>0,isFetchedAfterMount:y.dataUpdateCount>h.dataUpdateCount||y.errorUpdateCount>h.errorUpdateCount,isFetching:g,isRefetching:g&&v!=="loading",isLoadingError:v==="error"&&y.dataUpdatedAt===0,isPlaceholderData:C,isPreviousData:b,isRefetchError:v==="error"&&y.dataUpdatedAt!==0,isStale:Qf(i,o),refetch:this.refetch,remove:this.remove};return ne},n.shouldNotifyListeners=function(i,o){if(!o)return!0;var s=this.options,a=s.notifyOnChangeProps,l=s.notifyOnChangePropsExclusions;if(!a&&!l||a==="tracked"&&!this.trackedProps.length)return!0;var u=a==="tracked"?this.trackedProps:a;return Object.keys(i).some(function(d){var f=d,h=i[f]!==o[f],p=u==null?void 0:u.some(function(w){return w===d}),y=l==null?void 0:l.some(function(w){return w===d});return h&&!y&&(!u||p)})},n.updateResult=function(i){var o=this.currentResult;if(this.currentResult=this.createResult(this.currentQuery,this.options),this.currentResultState=this.currentQuery.state,this.currentResultOptions=this.options,!J2(this.currentResult,o)){var s={cache:!0};(i==null?void 0:i.listeners)!==!1&&this.shouldNotifyListeners(this.currentResult,o)&&(s.listeners=!0),this.notify(Y({},s,i))}},n.updateQuery=function(){var i=this.client.getQueryCache().build(this.client,this.options);if(i!==this.currentQuery){var o=this.currentQuery;this.currentQuery=i,this.currentQueryInitialState=i.state,this.previousQueryResult=this.currentResult,this.hasListeners()&&(o==null||o.removeObserver(this),i.addObserver(this))}},n.onQueryUpdate=function(i){var o={};i.type==="success"?o.onSuccess=!0:i.type==="error"&&!fa(i.error)&&(o.onError=!0),this.updateResult(o),this.hasListeners()&&this.updateTimers()},n.notify=function(i){var o=this;ge.batch(function(){i.onSuccess?(o.options.onSuccess==null||o.options.onSuccess(o.currentResult.data),o.options.onSettled==null||o.options.onSettled(o.currentResult.data,null)):i.onError&&(o.options.onError==null||o.options.onError(o.currentResult.error),o.options.onSettled==null||o.options.onSettled(void 0,o.currentResult.error)),i.listeners&&o.listeners.forEach(function(s){s(o.currentResult)}),i.cache&&o.client.getQueryCache().notify({query:o.currentQuery,type:"observerResultsUpdated"})})},t}(as);function gj(e,t){return t.enabled!==!1&&!e.state.dataUpdatedAt&&!(e.state.status==="error"&&t.retryOnMount===!1)}function tm(e,t){return gj(e,t)||e.state.dataUpdatedAt>0&&ud(e,t,t.refetchOnMount)}function ud(e,t,n){if(t.enabled!==!1){var r=typeof n=="function"?n(e):n;return r==="always"||r!==!1&&Qf(e,t)}return!1}function nm(e,t,n,r){return n.enabled!==!1&&(e!==t||r.enabled===!1)&&(!n.suspense||e.state.status!=="error")&&Qf(e,n)}function Qf(e,t){return e.isStaleByTime(t.staleTime)}var vj=BS.unstable_batchedUpdates;ge.setBatchNotifyFunction(vj);var yj=console;oj(yj);var rm=B.createContext(void 0),Iy=B.createContext(!1);function Vy(e){return e&&typeof window<"u"?(window.ReactQueryClientContext||(window.ReactQueryClientContext=rm),window.ReactQueryClientContext):rm}var xj=function(){var t=B.useContext(Vy(B.useContext(Iy)));if(!t)throw new Error("No QueryClient set, use QueryClientProvider to set one");return t},wj=function(t){var n=t.client,r=t.contextSharing,i=r===void 0?!1:r,o=t.children;B.useEffect(function(){return n.mount(),function(){n.unmount()}},[n]);var s=Vy(i);return B.createElement(Iy.Provider,{value:i},B.createElement(s.Provider,{value:n},o))};function bj(){var e=!1;return{clearReset:function(){e=!1},reset:function(){e=!0},isReset:function(){return e}}}var Sj=B.createContext(bj()),jj=function(){return B.useContext(Sj)};function kj(e,t,n){return typeof t=="function"?t.apply(void 0,n):typeof t=="boolean"?t:!!e}function Cj(e,t){var n=B.useRef(!1),r=B.useState(0),i=r[1],o=xj(),s=jj(),a=o.defaultQueryObserverOptions(e);a.optimisticResults=!0,a.onError&&(a.onError=ge.batchCalls(a.onError)),a.onSuccess&&(a.onSuccess=ge.batchCalls(a.onSuccess)),a.onSettled&&(a.onSettled=ge.batchCalls(a.onSettled)),a.suspense&&(typeof a.staleTime!="number"&&(a.staleTime=1e3),a.cacheTime===0&&(a.cacheTime=1)),(a.suspense||a.useErrorBoundary)&&(s.isReset()||(a.retryOnMount=!1));var l=B.useState(function(){return new t(o,a)}),u=l[0],d=u.getOptimisticResult(a);if(B.useEffect(function(){n.current=!0,s.clearReset();var f=u.subscribe(ge.batchCalls(function(){n.current&&i(function(h){return h+1})}));return u.updateResult(),function(){n.current=!1,f()}},[s,u]),B.useEffect(function(){u.setOptions(a,{listeners:!1})},[a,u]),a.suspense&&d.isLoading)throw u.fetchOptimistic(a).then(function(f){var h=f.data;a.onSuccess==null||a.onSuccess(h),a.onSettled==null||a.onSettled(h,null)}).catch(function(f){s.clearReset(),a.onError==null||a.onError(f),a.onSettled==null||a.onSettled(void 0,f)});if(d.isError&&!s.isReset()&&!d.isFetching&&kj(a.suspense,a.useErrorBoundary,[d.error,u.getCurrentQuery()]))throw d.error;return a.notifyOnChangeProps==="tracked"&&(d=u.trackResult(d,a)),d}function Uy(e,t,n){var r=ua(e,t,n);return Cj(r,mj)}var By={exports:{}},Pj="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Ej=Pj,Tj=Ej;function Hy(){}function Wy(){}Wy.resetWarningCache=Hy;var Rj=function(){function e(r,i,o,s,a,l){if(l!==Tj){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:Wy,resetWarningCache:Hy};return n.PropTypes=n,n};By.exports=Rj();var Aj=By.exports;const q=Wd(Aj);function $j(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,dd(e,t)}function dd(e,t){return dd=Object.setPrototypeOf||function(n,r){return n.__proto__=r,n},dd(e,t)}var be={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title",FRAGMENT:"Symbol(react.fragment)"},Oj={rel:["amphtml","canonical","alternate"]},Lj={type:["application/ld+json"]},Fj={charset:"",name:["robots","description"],property:["og:type","og:title","og:url","og:image","og:image:alt","og:description","twitter:url","twitter:title","twitter:description","twitter:image","twitter:image:alt","twitter:card","twitter:site"]};Object.keys(be).map(function(e){return be[e]});var il={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"};Object.keys(il).reduce(function(e,t){return e[il[t]]=t,e},{});var Mj=function(e){return Array.isArray(e)?e.join(""):e},zc=function(e,t){return Array.isArray(e)?e.reduce(function(n,r){return function(i,o){for(var s=Object.keys(i),a=0;a<s.length;a+=1)if(o[s[a]]&&o[s[a]].includes(i[s[a]]))return!0;return!1}(r,t)?n.priority.push(r):n.default.push(r),n},{priority:[],default:[]}):{default:e}},zj=[be.NOSCRIPT,be.SCRIPT,be.STYLE],Nc=function(e,t){return t===void 0&&(t=!0),t===!1?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},im=function(e){return Object.keys(e).reduce(function(t,n){var r=e[n]!==void 0?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r},"")},om=function(e,t){return t===void 0&&(t={}),Object.keys(e).reduce(function(n,r){return n[il[r]||r]=e[r],n},t)},ha=function(e,t){return t.map(function(n,r){var i,o=((i={key:r})["data-rh"]=!0,i);return Object.keys(n).forEach(function(s){var a=il[s]||s;a==="innerHTML"||a==="cssText"?o.dangerouslySetInnerHTML={__html:n.innerHTML||n.cssText}:o[a]=n[s]}),B.createElement(e,o)})},pt=function(e,t,n){switch(e){case be.TITLE:return{toComponent:function(){return i=t.titleAttributes,(o={key:r=t.title})["data-rh"]=!0,s=om(i,o),[B.createElement(be.TITLE,s,r)];var r,i,o,s},toString:function(){return function(r,i,o,s){var a=im(o),l=Mj(i);return a?"<"+r+' data-rh="true" '+a+">"+Nc(l,s)+"</"+r+">":"<"+r+' data-rh="true">'+Nc(l,s)+"</"+r+">"}(e,t.title,t.titleAttributes,n)}};case"bodyAttributes":case"htmlAttributes":return{toComponent:function(){return om(t)},toString:function(){return im(t)}};default:return{toComponent:function(){return ha(e,t)},toString:function(){return function(r,i,o){return i.reduce(function(s,a){var l=Object.keys(a).filter(function(f){return!(f==="innerHTML"||f==="cssText")}).reduce(function(f,h){var p=a[h]===void 0?h:h+'="'+Nc(a[h],o)+'"';return f?f+" "+p:p},""),u=a.innerHTML||a.cssText||"",d=zj.indexOf(r)===-1;return s+"<"+r+' data-rh="true" '+l+(d?"/>":">"+u+"</"+r+">")},"")}(e,t,n)}}}},Nj=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,i=e.htmlAttributes,o=e.noscriptTags,s=e.styleTags,a=e.title,l=a===void 0?"":a,u=e.titleAttributes,d=e.linkTags,f=e.metaTags,h=e.scriptTags,p={toComponent:function(){},toString:function(){return""}};if(e.prioritizeSeoTags){var y=function(w){var S=w.linkTags,m=w.scriptTags,g=w.encode,v=zc(w.metaTags,Fj),b=zc(S,Oj),C=zc(m,Lj);return{priorityMethods:{toComponent:function(){return[].concat(ha(be.META,v.priority),ha(be.LINK,b.priority),ha(be.SCRIPT,C.priority))},toString:function(){return pt(be.META,v.priority,g)+" "+pt(be.LINK,b.priority,g)+" "+pt(be.SCRIPT,C.priority,g)}},metaTags:v.default,linkTags:b.default,scriptTags:C.default}}(e);p=y.priorityMethods,d=y.linkTags,f=y.metaTags,h=y.scriptTags}return{priority:p,base:pt(be.BASE,t,r),bodyAttributes:pt("bodyAttributes",n,r),htmlAttributes:pt("htmlAttributes",i,r),link:pt(be.LINK,d,r),meta:pt(be.META,f,r),noscript:pt(be.NOSCRIPT,o,r),script:pt(be.SCRIPT,h,r),style:pt(be.STYLE,s,r),title:pt(be.TITLE,{title:l,titleAttributes:u},r)}},Fs=[],_j=function(e,t){var n=this;t===void 0&&(t=typeof document<"u"),this.instances=[],this.value={setHelmet:function(r){n.context.helmet=r},helmetInstances:{get:function(){return n.canUseDOM?Fs:n.instances},add:function(r){(n.canUseDOM?Fs:n.instances).push(r)},remove:function(r){var i=(n.canUseDOM?Fs:n.instances).indexOf(r);(n.canUseDOM?Fs:n.instances).splice(i,1)}}},this.context=e,this.canUseDOM=t,t||(e.helmet=Nj({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}}))},Dj=B.createContext({}),Ij=q.shape({setHelmet:q.func,helmetInstances:q.shape({get:q.func,add:q.func,remove:q.func})}),Vj=typeof document<"u",oo=function(e){function t(n){var r;return(r=e.call(this,n)||this).helmetData=new _j(r.props.context,t.canUseDOM),r}return $j(t,e),t.prototype.render=function(){return B.createElement(Dj.Provider,{value:this.helmetData.value},this.props.children)},t}(j.Component);oo.canUseDOM=Vj,oo.propTypes={context:q.shape({helmet:q.shape()}),children:q.node.isRequired},oo.defaultProps={context:{}},oo.displayName="HelmetProvider";Ij.isRequired;q.object,q.object,q.oneOfType([q.arrayOf(q.node),q.node]),q.string,q.bool,q.bool,q.object,q.arrayOf(q.object),q.arrayOf(q.object),q.arrayOf(q.object),q.func,q.arrayOf(q.object),q.arrayOf(q.object),q.string,q.object,q.string,q.bool,q.object;let Uj={data:""},Bj=e=>typeof window=="object"?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||Uj,Hj=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,Wj=/\/\*[^]*?\*\/|  +/g,sm=/\n+/g,Pn=(e,t)=>{let n="",r="",i="";for(let o in e){let s=e[o];o[0]=="@"?o[1]=="i"?n=o+" "+s+";":r+=o[1]=="f"?Pn(s,o):o+"{"+Pn(s,o[1]=="k"?"":t)+"}":typeof s=="object"?r+=Pn(s,t?t.replace(/([^,])+/g,a=>o.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,l=>/&/.test(l)?l.replace(/&/g,a):a?a+" "+l:l)):o):s!=null&&(o=/^--/.test(o)?o:o.replace(/[A-Z]/g,"-$&").toLowerCase(),i+=Pn.p?Pn.p(o,s):o+":"+s+";")}return n+(t&&i?t+"{"+i+"}":i)+r},Gt={},Qy=e=>{if(typeof e=="object"){let t="";for(let n in e)t+=n+Qy(e[n]);return t}return e},Qj=(e,t,n,r,i)=>{let o=Qy(e),s=Gt[o]||(Gt[o]=(l=>{let u=0,d=11;for(;u<l.length;)d=101*d+l.charCodeAt(u++)>>>0;return"go"+d})(o));if(!Gt[s]){let l=o!==e?e:(u=>{let d,f,h=[{}];for(;d=Hj.exec(u.replace(Wj,""));)d[4]?h.shift():d[3]?(f=d[3].replace(sm," ").trim(),h.unshift(h[0][f]=h[0][f]||{})):h[0][d[1]]=d[2].replace(sm," ").trim();return h[0]})(e);Gt[s]=Pn(i?{["@keyframes "+s]:l}:l,n?"":"."+s)}let a=n&&Gt.g?Gt.g:null;return n&&(Gt.g=Gt[s]),((l,u,d,f)=>{f?u.data=u.data.replace(f,l):u.data.indexOf(l)===-1&&(u.data=d?l+u.data:u.data+l)})(Gt[s],t,r,a),s},qj=(e,t,n)=>e.reduce((r,i,o)=>{let s=t[o];if(s&&s.call){let a=s(n),l=a&&a.props&&a.props.className||/^go/.test(a)&&a;s=l?"."+l:a&&typeof a=="object"?a.props?"":Pn(a,""):a===!1?"":a}return r+i+(s??"")},"");function Vl(e){let t=this||{},n=e.call?e(t.p):e;return Qj(n.unshift?n.raw?qj(n,[].slice.call(arguments,1),t.p):n.reduce((r,i)=>Object.assign(r,i&&i.call?i(t.p):i),{}):n,Bj(t.target),t.g,t.o,t.k)}let qy,fd,hd;Vl.bind({g:1});let dn=Vl.bind({k:1});function Kj(e,t,n,r){Pn.p=t,qy=e,fd=n,hd=r}function Yn(e,t){let n=this||{};return function(){let r=arguments;function i(o,s){let a=Object.assign({},o),l=a.className||i.className;n.p=Object.assign({theme:fd&&fd()},a),n.o=/ *go\d+/.test(l),a.className=Vl.apply(n,r)+(l?" "+l:""),t&&(a.ref=s);let u=e;return e[0]&&(u=a.as||e,delete a.as),hd&&u[0]&&hd(a),qy(u,a)}return t?t(i):i}}var Gj=e=>typeof e=="function",ol=(e,t)=>Gj(e)?e(t):e,Yj=(()=>{let e=0;return()=>(++e).toString()})(),Ky=(()=>{let e;return()=>{if(e===void 0&&typeof window<"u"){let t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}})(),Xj=20,Gy=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,Xj)};case 1:return{...e,toasts:e.toasts.map(o=>o.id===t.toast.id?{...o,...t.toast}:o)};case 2:let{toast:n}=t;return Gy(e,{type:e.toasts.find(o=>o.id===n.id)?1:0,toast:n});case 3:let{toastId:r}=t;return{...e,toasts:e.toasts.map(o=>o.id===r||r===void 0?{...o,dismissed:!0,visible:!1}:o)};case 4:return t.toastId===void 0?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(o=>o.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let i=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(o=>({...o,pauseDuration:o.pauseDuration+i}))}}},pa=[],dr={toasts:[],pausedAt:void 0},Ar=e=>{dr=Gy(dr,e),pa.forEach(t=>{t(dr)})},Zj={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},Jj=(e={})=>{let[t,n]=j.useState(dr),r=j.useRef(dr);j.useEffect(()=>(r.current!==dr&&n(dr),pa.push(n),()=>{let o=pa.indexOf(n);o>-1&&pa.splice(o,1)}),[]);let i=t.toasts.map(o=>{var s,a,l;return{...e,...e[o.type],...o,removeDelay:o.removeDelay||((s=e[o.type])==null?void 0:s.removeDelay)||(e==null?void 0:e.removeDelay),duration:o.duration||((a=e[o.type])==null?void 0:a.duration)||(e==null?void 0:e.duration)||Zj[o.type],style:{...e.style,...(l=e[o.type])==null?void 0:l.style,...o.style}}});return{...t,toasts:i}},ek=(e,t="blank",n)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...n,id:(n==null?void 0:n.id)||Yj()}),ls=e=>(t,n)=>{let r=ek(t,e,n);return Ar({type:2,toast:r}),r.id},Qe=(e,t)=>ls("blank")(e,t);Qe.error=ls("error");Qe.success=ls("success");Qe.loading=ls("loading");Qe.custom=ls("custom");Qe.dismiss=e=>{Ar({type:3,toastId:e})};Qe.remove=e=>Ar({type:4,toastId:e});Qe.promise=(e,t,n)=>{let r=Qe.loading(t.loading,{...n,...n==null?void 0:n.loading});return typeof e=="function"&&(e=e()),e.then(i=>{let o=t.success?ol(t.success,i):void 0;return o?Qe.success(o,{id:r,...n,...n==null?void 0:n.success}):Qe.dismiss(r),i}).catch(i=>{let o=t.error?ol(t.error,i):void 0;o?Qe.error(o,{id:r,...n,...n==null?void 0:n.error}):Qe.dismiss(r)}),e};var tk=(e,t)=>{Ar({type:1,toast:{id:e,height:t}})},nk=()=>{Ar({type:5,time:Date.now()})},xo=new Map,rk=1e3,ik=(e,t=rk)=>{if(xo.has(e))return;let n=setTimeout(()=>{xo.delete(e),Ar({type:4,toastId:e})},t);xo.set(e,n)},ok=e=>{let{toasts:t,pausedAt:n}=Jj(e);j.useEffect(()=>{if(n)return;let o=Date.now(),s=t.map(a=>{if(a.duration===1/0)return;let l=(a.duration||0)+a.pauseDuration-(o-a.createdAt);if(l<0){a.visible&&Qe.dismiss(a.id);return}return setTimeout(()=>Qe.dismiss(a.id),l)});return()=>{s.forEach(a=>a&&clearTimeout(a))}},[t,n]);let r=j.useCallback(()=>{n&&Ar({type:6,time:Date.now()})},[n]),i=j.useCallback((o,s)=>{let{reverseOrder:a=!1,gutter:l=8,defaultPosition:u}=s||{},d=t.filter(p=>(p.position||u)===(o.position||u)&&p.height),f=d.findIndex(p=>p.id===o.id),h=d.filter((p,y)=>y<f&&p.visible).length;return d.filter(p=>p.visible).slice(...a?[h+1]:[0,h]).reduce((p,y)=>p+(y.height||0)+l,0)},[t]);return j.useEffect(()=>{t.forEach(o=>{if(o.dismissed)ik(o.id,o.removeDelay);else{let s=xo.get(o.id);s&&(clearTimeout(s),xo.delete(o.id))}})},[t]),{toasts:t,handlers:{updateHeight:tk,startPause:nk,endPause:r,calculateOffset:i}}},sk=dn`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,ak=dn`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,lk=dn`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,ck=Yn("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${sk} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${ak} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${lk} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,uk=dn`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,dk=Yn("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${uk} 1s linear infinite;
`,fk=dn`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,hk=dn`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,pk=Yn("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${fk} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${hk} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,mk=Yn("div")`
  position: absolute;
`,gk=Yn("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,vk=dn`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,yk=Yn("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${vk} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,xk=({toast:e})=>{let{icon:t,type:n,iconTheme:r}=e;return t!==void 0?typeof t=="string"?j.createElement(yk,null,t):t:n==="blank"?null:j.createElement(gk,null,j.createElement(dk,{...r}),n!=="loading"&&j.createElement(mk,null,n==="error"?j.createElement(ck,{...r}):j.createElement(pk,{...r})))},wk=e=>`
0% {transform: translate3d(0,${e*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,bk=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e*-150}%,-1px) scale(.6); opacity:0;}
`,Sk="0%{opacity:0;} 100%{opacity:1;}",jk="0%{opacity:1;} 100%{opacity:0;}",kk=Yn("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,Ck=Yn("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,Pk=(e,t)=>{let n=e.includes("top")?1:-1,[r,i]=Ky()?[Sk,jk]:[wk(n),bk(n)];return{animation:t?`${dn(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${dn(i)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},Ek=j.memo(({toast:e,position:t,style:n,children:r})=>{let i=e.height?Pk(e.position||t||"top-center",e.visible):{opacity:0},o=j.createElement(xk,{toast:e}),s=j.createElement(Ck,{...e.ariaProps},ol(e.message,e));return j.createElement(kk,{className:e.className,style:{...i,...n,...e.style}},typeof r=="function"?r({icon:o,message:s}):j.createElement(j.Fragment,null,o,s))});Kj(j.createElement);var Tk=({id:e,className:t,style:n,onHeightUpdate:r,children:i})=>{let o=j.useCallback(s=>{if(s){let a=()=>{let l=s.getBoundingClientRect().height;r(e,l)};a(),new MutationObserver(a).observe(s,{subtree:!0,childList:!0,characterData:!0})}},[e,r]);return j.createElement("div",{ref:o,className:t,style:n},i)},Rk=(e,t)=>{let n=e.includes("top"),r=n?{top:0}:{bottom:0},i=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:Ky()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(n?1:-1)}px)`,...r,...i}},Ak=Vl`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,Ms=16,$k=({reverseOrder:e,position:t="top-center",toastOptions:n,gutter:r,children:i,containerStyle:o,containerClassName:s})=>{let{toasts:a,handlers:l}=ok(n);return j.createElement("div",{id:"_rht_toaster",style:{position:"fixed",zIndex:9999,top:Ms,left:Ms,right:Ms,bottom:Ms,pointerEvents:"none",...o},className:s,onMouseEnter:l.startPause,onMouseLeave:l.endPause},a.map(u=>{let d=u.position||t,f=l.calculateOffset(u,{reverseOrder:e,gutter:r,defaultPosition:t}),h=Rk(d,f);return j.createElement(Tk,{id:u.id,key:u.id,onHeightUpdate:l.updateHeight,className:u.visible?Ak:"",style:h},u.type==="custom"?ol(u.message,u):i?i(u):j.createElement(Ek,{toast:u,position:d}))}))},J=Qe;const Yy=j.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"}),Ul=j.createContext({}),Bl=j.createContext(null),Hl=typeof document<"u",qf=Hl?j.useLayoutEffect:j.useEffect,Xy=j.createContext({strict:!1}),Kf=e=>e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),Ok="framerAppearId",Zy="data-"+Kf(Ok);function Lk(e,t,n,r){const{visualElement:i}=j.useContext(Ul),o=j.useContext(Xy),s=j.useContext(Bl),a=j.useContext(Yy).reducedMotion,l=j.useRef();r=r||o.renderer,!l.current&&r&&(l.current=r(e,{visualState:t,parent:i,props:n,presenceContext:s,blockInitialAnimation:s?s.initial===!1:!1,reducedMotionConfig:a}));const u=l.current;j.useInsertionEffect(()=>{u&&u.update(n,s)});const d=j.useRef(!!(n[Zy]&&!window.HandoffComplete));return qf(()=>{u&&(u.render(),d.current&&u.animationState&&u.animationState.animateChanges())}),j.useEffect(()=>{u&&(u.updateFeatures(),!d.current&&u.animationState&&u.animationState.animateChanges(),d.current&&(d.current=!1,window.HandoffComplete=!0))}),u}function ei(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function Fk(e,t,n){return j.useCallback(r=>{r&&e.mount&&e.mount(r),t&&(r?t.mount(r):t.unmount()),n&&(typeof n=="function"?n(r):ei(n)&&(n.current=r))},[t])}function Wo(e){return typeof e=="string"||Array.isArray(e)}function Wl(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}const Gf=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Yf=["initial",...Gf];function Ql(e){return Wl(e.animate)||Yf.some(t=>Wo(e[t]))}function Jy(e){return!!(Ql(e)||e.variants)}function Mk(e,t){if(Ql(e)){const{initial:n,animate:r}=e;return{initial:n===!1||Wo(n)?n:void 0,animate:Wo(r)?r:void 0}}return e.inherit!==!1?t:{}}function zk(e){const{initial:t,animate:n}=Mk(e,j.useContext(Ul));return j.useMemo(()=>({initial:t,animate:n}),[am(t),am(n)])}function am(e){return Array.isArray(e)?e.join(" "):e}const lm={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Qo={};for(const e in lm)Qo[e]={isEnabled:t=>lm[e].some(n=>!!t[n])};function Nk(e){for(const t in e)Qo[t]={...Qo[t],...e[t]}}const Xf=j.createContext({}),ex=j.createContext({}),_k=Symbol.for("motionComponentSymbol");function Dk({preloadedFeatures:e,createVisualElement:t,useRender:n,useVisualState:r,Component:i}){e&&Nk(e);function o(a,l){let u;const d={...j.useContext(Yy),...a,layoutId:Ik(a)},{isStatic:f}=d,h=zk(a),p=r(a,f);if(!f&&Hl){h.visualElement=Lk(i,p,d,t);const y=j.useContext(ex),w=j.useContext(Xy).strict;h.visualElement&&(u=h.visualElement.loadFeatures(d,w,e,y))}return j.createElement(Ul.Provider,{value:h},u&&h.visualElement?j.createElement(u,{visualElement:h.visualElement,...d}):null,n(i,a,Fk(p,h.visualElement,l),p,f,h.visualElement))}const s=j.forwardRef(o);return s[_k]=i,s}function Ik({layoutId:e}){const t=j.useContext(Xf).id;return t&&e!==void 0?t+"-"+e:e}function Vk(e){function t(r,i={}){return Dk(e(r,i))}if(typeof Proxy>"u")return t;const n=new Map;return new Proxy(t,{get:(r,i)=>(n.has(i)||n.set(i,t(i)),n.get(i))})}const Uk=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Zf(e){return typeof e!="string"||e.includes("-")?!1:!!(Uk.indexOf(e)>-1||/[A-Z]/.test(e))}const sl={};function Bk(e){Object.assign(sl,e)}const cs=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],$r=new Set(cs);function tx(e,{layout:t,layoutId:n}){return $r.has(e)||e.startsWith("origin")||(t||n!==void 0)&&(!!sl[e]||e==="opacity")}const it=e=>!!(e&&e.getVelocity),Hk={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},Wk=cs.length;function Qk(e,{enableHardwareAcceleration:t=!0,allowTransformNone:n=!0},r,i){let o="";for(let s=0;s<Wk;s++){const a=cs[s];if(e[a]!==void 0){const l=Hk[a]||a;o+=`${l}(${e[a]}) `}}return t&&!e.z&&(o+="translateZ(0)"),o=o.trim(),i?o=i(e,r?"":o):n&&r&&(o="none"),o}const nx=e=>t=>typeof t=="string"&&t.startsWith(e),rx=nx("--"),pd=nx("var(--"),qk=/var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g,Kk=(e,t)=>t&&typeof e=="number"?t.transform(e):e,Bn=(e,t,n)=>Math.min(Math.max(n,e),t),Or={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},wo={...Or,transform:e=>Bn(0,1,e)},zs={...Or,default:1},bo=e=>Math.round(e*1e5)/1e5,ql=/(-)?([\d]*\.?[\d])+/g,ix=/(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,Gk=/^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function us(e){return typeof e=="string"}const ds=e=>({test:t=>us(t)&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),vn=ds("deg"),Qt=ds("%"),N=ds("px"),Yk=ds("vh"),Xk=ds("vw"),cm={...Qt,parse:e=>Qt.parse(e)/100,transform:e=>Qt.transform(e*100)},um={...Or,transform:Math.round},ox={borderWidth:N,borderTopWidth:N,borderRightWidth:N,borderBottomWidth:N,borderLeftWidth:N,borderRadius:N,radius:N,borderTopLeftRadius:N,borderTopRightRadius:N,borderBottomRightRadius:N,borderBottomLeftRadius:N,width:N,maxWidth:N,height:N,maxHeight:N,size:N,top:N,right:N,bottom:N,left:N,padding:N,paddingTop:N,paddingRight:N,paddingBottom:N,paddingLeft:N,margin:N,marginTop:N,marginRight:N,marginBottom:N,marginLeft:N,rotate:vn,rotateX:vn,rotateY:vn,rotateZ:vn,scale:zs,scaleX:zs,scaleY:zs,scaleZ:zs,skew:vn,skewX:vn,skewY:vn,distance:N,translateX:N,translateY:N,translateZ:N,x:N,y:N,z:N,perspective:N,transformPerspective:N,opacity:wo,originX:cm,originY:cm,originZ:N,zIndex:um,fillOpacity:wo,strokeOpacity:wo,numOctaves:um};function Jf(e,t,n,r){const{style:i,vars:o,transform:s,transformOrigin:a}=e;let l=!1,u=!1,d=!0;for(const f in t){const h=t[f];if(rx(f)){o[f]=h;continue}const p=ox[f],y=Kk(h,p);if($r.has(f)){if(l=!0,s[f]=y,!d)continue;h!==(p.default||0)&&(d=!1)}else f.startsWith("origin")?(u=!0,a[f]=y):i[f]=y}if(t.transform||(l||r?i.transform=Qk(e.transform,n,d,r):i.transform&&(i.transform="none")),u){const{originX:f="50%",originY:h="50%",originZ:p=0}=a;i.transformOrigin=`${f} ${h} ${p}`}}const eh=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function sx(e,t,n){for(const r in t)!it(t[r])&&!tx(r,n)&&(e[r]=t[r])}function Zk({transformTemplate:e},t,n){return j.useMemo(()=>{const r=eh();return Jf(r,t,{enableHardwareAcceleration:!n},e),Object.assign({},r.vars,r.style)},[t])}function Jk(e,t,n){const r=e.style||{},i={};return sx(i,r,e),Object.assign(i,Zk(e,t,n)),e.transformValues?e.transformValues(i):i}function eC(e,t,n){const r={},i=Jk(e,t,n);return e.drag&&e.dragListener!==!1&&(r.draggable=!1,i.userSelect=i.WebkitUserSelect=i.WebkitTouchCallout="none",i.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(r.tabIndex=0),r.style=i,r}const tC=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","transformValues","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function al(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||tC.has(e)}let ax=e=>!al(e);function nC(e){e&&(ax=t=>t.startsWith("on")?!al(t):e(t))}try{nC(require("@emotion/is-prop-valid").default)}catch{}function rC(e,t,n){const r={};for(const i in e)i==="values"&&typeof e.values=="object"||(ax(i)||n===!0&&al(i)||!t&&!al(i)||e.draggable&&i.startsWith("onDrag"))&&(r[i]=e[i]);return r}function dm(e,t,n){return typeof e=="string"?e:N.transform(t+n*e)}function iC(e,t,n){const r=dm(t,e.x,e.width),i=dm(n,e.y,e.height);return`${r} ${i}`}const oC={offset:"stroke-dashoffset",array:"stroke-dasharray"},sC={offset:"strokeDashoffset",array:"strokeDasharray"};function aC(e,t,n=1,r=0,i=!0){e.pathLength=1;const o=i?oC:sC;e[o.offset]=N.transform(-r);const s=N.transform(t),a=N.transform(n);e[o.array]=`${s} ${a}`}function th(e,{attrX:t,attrY:n,attrScale:r,originX:i,originY:o,pathLength:s,pathSpacing:a=1,pathOffset:l=0,...u},d,f,h){if(Jf(e,u,d,h),f){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:p,style:y,dimensions:w}=e;p.transform&&(w&&(y.transform=p.transform),delete p.transform),w&&(i!==void 0||o!==void 0||y.transform)&&(y.transformOrigin=iC(w,i!==void 0?i:.5,o!==void 0?o:.5)),t!==void 0&&(p.x=t),n!==void 0&&(p.y=n),r!==void 0&&(p.scale=r),s!==void 0&&aC(p,s,a,l,!1)}const lx=()=>({...eh(),attrs:{}}),nh=e=>typeof e=="string"&&e.toLowerCase()==="svg";function lC(e,t,n,r){const i=j.useMemo(()=>{const o=lx();return th(o,t,{enableHardwareAcceleration:!1},nh(r),e.transformTemplate),{...o.attrs,style:{...o.style}}},[t]);if(e.style){const o={};sx(o,e.style,e),i.style={...o,...i.style}}return i}function cC(e=!1){return(n,r,i,{latestValues:o},s)=>{const l=(Zf(n)?lC:eC)(r,o,s,n),d={...rC(r,typeof n=="string",e),...l,ref:i},{children:f}=r,h=j.useMemo(()=>it(f)?f.get():f,[f]);return j.createElement(n,{...d,children:h})}}function cx(e,{style:t,vars:n},r,i){Object.assign(e.style,t,i&&i.getProjectionStyles(r));for(const o in n)e.style.setProperty(o,n[o])}const ux=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function dx(e,t,n,r){cx(e,t,void 0,r);for(const i in t.attrs)e.setAttribute(ux.has(i)?i:Kf(i),t.attrs[i])}function rh(e,t){const{style:n}=e,r={};for(const i in n)(it(n[i])||t.style&&it(t.style[i])||tx(i,e))&&(r[i]=n[i]);return r}function fx(e,t){const n=rh(e,t);for(const r in e)if(it(e[r])||it(t[r])){const i=cs.indexOf(r)!==-1?"attr"+r.charAt(0).toUpperCase()+r.substring(1):r;n[i]=e[r]}return n}function ih(e,t,n,r={},i={}){return typeof t=="function"&&(t=t(n!==void 0?n:e.custom,r,i)),typeof t=="string"&&(t=e.variants&&e.variants[t]),typeof t=="function"&&(t=t(n!==void 0?n:e.custom,r,i)),t}function hx(e){const t=j.useRef(null);return t.current===null&&(t.current=e()),t.current}const ll=e=>Array.isArray(e),uC=e=>!!(e&&typeof e=="object"&&e.mix&&e.toValue),dC=e=>ll(e)?e[e.length-1]||0:e;function ma(e){const t=it(e)?e.get():e;return uC(t)?t.toValue():t}function fC({scrapeMotionValuesFromProps:e,createRenderState:t,onMount:n},r,i,o){const s={latestValues:hC(r,i,o,e),renderState:t()};return n&&(s.mount=a=>n(r,a,s)),s}const px=e=>(t,n)=>{const r=j.useContext(Ul),i=j.useContext(Bl),o=()=>fC(e,t,r,i);return n?o():hx(o)};function hC(e,t,n,r){const i={},o=r(e,{});for(const h in o)i[h]=ma(o[h]);let{initial:s,animate:a}=e;const l=Ql(e),u=Jy(e);t&&u&&!l&&e.inherit!==!1&&(s===void 0&&(s=t.initial),a===void 0&&(a=t.animate));let d=n?n.initial===!1:!1;d=d||s===!1;const f=d?a:s;return f&&typeof f!="boolean"&&!Wl(f)&&(Array.isArray(f)?f:[f]).forEach(p=>{const y=ih(e,p);if(!y)return;const{transitionEnd:w,transition:S,...m}=y;for(const g in m){let v=m[g];if(Array.isArray(v)){const b=d?v.length-1:0;v=v[b]}v!==null&&(i[g]=v)}for(const g in w)i[g]=w[g]}),i}const ve=e=>e;class fm{constructor(){this.order=[],this.scheduled=new Set}add(t){if(!this.scheduled.has(t))return this.scheduled.add(t),this.order.push(t),!0}remove(t){const n=this.order.indexOf(t);n!==-1&&(this.order.splice(n,1),this.scheduled.delete(t))}clear(){this.order.length=0,this.scheduled.clear()}}function pC(e){let t=new fm,n=new fm,r=0,i=!1,o=!1;const s=new WeakSet,a={schedule:(l,u=!1,d=!1)=>{const f=d&&i,h=f?t:n;return u&&s.add(l),h.add(l)&&f&&i&&(r=t.order.length),l},cancel:l=>{n.remove(l),s.delete(l)},process:l=>{if(i){o=!0;return}if(i=!0,[t,n]=[n,t],n.clear(),r=t.order.length,r)for(let u=0;u<r;u++){const d=t.order[u];d(l),s.has(d)&&(a.schedule(d),e())}i=!1,o&&(o=!1,a.process(l))}};return a}const Ns=["prepare","read","update","preRender","render","postRender"],mC=40;function gC(e,t){let n=!1,r=!0;const i={delta:0,timestamp:0,isProcessing:!1},o=Ns.reduce((f,h)=>(f[h]=pC(()=>n=!0),f),{}),s=f=>o[f].process(i),a=()=>{const f=performance.now();n=!1,i.delta=r?1e3/60:Math.max(Math.min(f-i.timestamp,mC),1),i.timestamp=f,i.isProcessing=!0,Ns.forEach(s),i.isProcessing=!1,n&&t&&(r=!1,e(a))},l=()=>{n=!0,r=!0,i.isProcessing||e(a)};return{schedule:Ns.reduce((f,h)=>{const p=o[h];return f[h]=(y,w=!1,S=!1)=>(n||l(),p.schedule(y,w,S)),f},{}),cancel:f=>Ns.forEach(h=>o[h].cancel(f)),state:i,steps:o}}const{schedule:ie,cancel:fn,state:Ne,steps:_c}=gC(typeof requestAnimationFrame<"u"?requestAnimationFrame:ve,!0),vC={useVisualState:px({scrapeMotionValuesFromProps:fx,createRenderState:lx,onMount:(e,t,{renderState:n,latestValues:r})=>{ie.read(()=>{try{n.dimensions=typeof t.getBBox=="function"?t.getBBox():t.getBoundingClientRect()}catch{n.dimensions={x:0,y:0,width:0,height:0}}}),ie.render(()=>{th(n,r,{enableHardwareAcceleration:!1},nh(t.tagName),e.transformTemplate),dx(t,n)})}})},yC={useVisualState:px({scrapeMotionValuesFromProps:rh,createRenderState:eh})};function xC(e,{forwardMotionProps:t=!1},n,r){return{...Zf(e)?vC:yC,preloadedFeatures:n,useRender:cC(t),createVisualElement:r,Component:e}}function nn(e,t,n,r={passive:!0}){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n)}const mx=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1;function Kl(e,t="page"){return{point:{x:e[t+"X"],y:e[t+"Y"]}}}const wC=e=>t=>mx(t)&&e(t,Kl(t));function on(e,t,n,r){return nn(e,t,wC(n),r)}const bC=(e,t)=>n=>t(e(n)),Dn=(...e)=>e.reduce(bC);function gx(e){let t=null;return()=>{const n=()=>{t=null};return t===null?(t=e,n):!1}}const hm=gx("dragHorizontal"),pm=gx("dragVertical");function vx(e){let t=!1;if(e==="y")t=pm();else if(e==="x")t=hm();else{const n=hm(),r=pm();n&&r?t=()=>{n(),r()}:(n&&n(),r&&r())}return t}function yx(){const e=vx(!0);return e?(e(),!1):!0}class Xn{constructor(t){this.isMounted=!1,this.node=t}update(){}}function mm(e,t){const n="pointer"+(t?"enter":"leave"),r="onHover"+(t?"Start":"End"),i=(o,s)=>{if(o.pointerType==="touch"||yx())return;const a=e.getProps();e.animationState&&a.whileHover&&e.animationState.setActive("whileHover",t),a[r]&&ie.update(()=>a[r](o,s))};return on(e.current,n,i,{passive:!e.getProps()[r]})}class SC extends Xn{mount(){this.unmount=Dn(mm(this.node,!0),mm(this.node,!1))}unmount(){}}class jC extends Xn{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Dn(nn(this.node.current,"focus",()=>this.onFocus()),nn(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}const xx=(e,t)=>t?e===t?!0:xx(e,t.parentElement):!1;function Dc(e,t){if(!t)return;const n=new PointerEvent("pointer"+e);t(n,Kl(n))}class kC extends Xn{constructor(){super(...arguments),this.removeStartListeners=ve,this.removeEndListeners=ve,this.removeAccessibleListeners=ve,this.startPointerPress=(t,n)=>{if(this.isPressing)return;this.removeEndListeners();const r=this.node.getProps(),o=on(window,"pointerup",(a,l)=>{if(!this.checkPressEnd())return;const{onTap:u,onTapCancel:d,globalTapTarget:f}=this.node.getProps();ie.update(()=>{!f&&!xx(this.node.current,a.target)?d&&d(a,l):u&&u(a,l)})},{passive:!(r.onTap||r.onPointerUp)}),s=on(window,"pointercancel",(a,l)=>this.cancelPress(a,l),{passive:!(r.onTapCancel||r.onPointerCancel)});this.removeEndListeners=Dn(o,s),this.startPress(t,n)},this.startAccessiblePress=()=>{const t=o=>{if(o.key!=="Enter"||this.isPressing)return;const s=a=>{a.key!=="Enter"||!this.checkPressEnd()||Dc("up",(l,u)=>{const{onTap:d}=this.node.getProps();d&&ie.update(()=>d(l,u))})};this.removeEndListeners(),this.removeEndListeners=nn(this.node.current,"keyup",s),Dc("down",(a,l)=>{this.startPress(a,l)})},n=nn(this.node.current,"keydown",t),r=()=>{this.isPressing&&Dc("cancel",(o,s)=>this.cancelPress(o,s))},i=nn(this.node.current,"blur",r);this.removeAccessibleListeners=Dn(n,i)}}startPress(t,n){this.isPressing=!0;const{onTapStart:r,whileTap:i}=this.node.getProps();i&&this.node.animationState&&this.node.animationState.setActive("whileTap",!0),r&&ie.update(()=>r(t,n))}checkPressEnd(){return this.removeEndListeners(),this.isPressing=!1,this.node.getProps().whileTap&&this.node.animationState&&this.node.animationState.setActive("whileTap",!1),!yx()}cancelPress(t,n){if(!this.checkPressEnd())return;const{onTapCancel:r}=this.node.getProps();r&&ie.update(()=>r(t,n))}mount(){const t=this.node.getProps(),n=on(t.globalTapTarget?window:this.node.current,"pointerdown",this.startPointerPress,{passive:!(t.onTapStart||t.onPointerStart)}),r=nn(this.node.current,"focus",this.startAccessiblePress);this.removeStartListeners=Dn(n,r)}unmount(){this.removeStartListeners(),this.removeEndListeners(),this.removeAccessibleListeners()}}const md=new WeakMap,Ic=new WeakMap,CC=e=>{const t=md.get(e.target);t&&t(e)},PC=e=>{e.forEach(CC)};function EC({root:e,...t}){const n=e||document;Ic.has(n)||Ic.set(n,{});const r=Ic.get(n),i=JSON.stringify(t);return r[i]||(r[i]=new IntersectionObserver(PC,{root:e,...t})),r[i]}function TC(e,t,n){const r=EC(t);return md.set(e,n),r.observe(e),()=>{md.delete(e),r.unobserve(e)}}const RC={some:0,all:1};class AC extends Xn{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:t={}}=this.node.getProps(),{root:n,margin:r,amount:i="some",once:o}=t,s={root:n?n.current:void 0,rootMargin:r,threshold:typeof i=="number"?i:RC[i]},a=l=>{const{isIntersecting:u}=l;if(this.isInView===u||(this.isInView=u,o&&!u&&this.hasEnteredView))return;u&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",u);const{onViewportEnter:d,onViewportLeave:f}=this.node.getProps(),h=u?d:f;h&&h(l)};return TC(this.node.current,s,a)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:n}=this.node;["amount","margin","root"].some($C(t,n))&&this.startObserver()}unmount(){}}function $C({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}const OC={inView:{Feature:AC},tap:{Feature:kC},focus:{Feature:jC},hover:{Feature:SC}};function wx(e,t){if(!Array.isArray(t))return!1;const n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}function LC(e){const t={};return e.values.forEach((n,r)=>t[r]=n.get()),t}function FC(e){const t={};return e.values.forEach((n,r)=>t[r]=n.getVelocity()),t}function Gl(e,t,n){const r=e.getProps();return ih(r,t,n!==void 0?n:r.custom,LC(e),FC(e))}let MC=ve,oh=ve;const In=e=>e*1e3,sn=e=>e/1e3,zC={current:!1},bx=e=>Array.isArray(e)&&typeof e[0]=="number";function Sx(e){return!!(!e||typeof e=="string"&&jx[e]||bx(e)||Array.isArray(e)&&e.every(Sx))}const so=([e,t,n,r])=>`cubic-bezier(${e}, ${t}, ${n}, ${r})`,jx={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:so([0,.65,.55,1]),circOut:so([.55,0,1,.45]),backIn:so([.31,.01,.66,-.59]),backOut:so([.33,1.53,.69,.99])};function kx(e){if(e)return bx(e)?so(e):Array.isArray(e)?e.map(kx):jx[e]}function NC(e,t,n,{delay:r=0,duration:i,repeat:o=0,repeatType:s="loop",ease:a,times:l}={}){const u={[t]:n};l&&(u.offset=l);const d=kx(a);return Array.isArray(d)&&(u.easing=d),e.animate(u,{delay:r,duration:i,easing:Array.isArray(d)?"linear":d,fill:"both",iterations:o+1,direction:s==="reverse"?"alternate":"normal"})}function _C(e,{repeat:t,repeatType:n="loop"}){const r=t&&n!=="loop"&&t%2===1?0:e.length-1;return e[r]}const Cx=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,DC=1e-7,IC=12;function VC(e,t,n,r,i){let o,s,a=0;do s=t+(n-t)/2,o=Cx(s,r,i)-e,o>0?n=s:t=s;while(Math.abs(o)>DC&&++a<IC);return s}function fs(e,t,n,r){if(e===t&&n===r)return ve;const i=o=>VC(o,0,1,e,n);return o=>o===0||o===1?o:Cx(i(o),t,r)}const UC=fs(.42,0,1,1),BC=fs(0,0,.58,1),Px=fs(.42,0,.58,1),HC=e=>Array.isArray(e)&&typeof e[0]!="number",Ex=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,Tx=e=>t=>1-e(1-t),sh=e=>1-Math.sin(Math.acos(e)),Rx=Tx(sh),WC=Ex(sh),Ax=fs(.33,1.53,.69,.99),ah=Tx(Ax),QC=Ex(ah),qC=e=>(e*=2)<1?.5*ah(e):.5*(2-Math.pow(2,-10*(e-1))),KC={linear:ve,easeIn:UC,easeInOut:Px,easeOut:BC,circIn:sh,circInOut:WC,circOut:Rx,backIn:ah,backInOut:QC,backOut:Ax,anticipate:qC},gm=e=>{if(Array.isArray(e)){oh(e.length===4);const[t,n,r,i]=e;return fs(t,n,r,i)}else if(typeof e=="string")return KC[e];return e},lh=(e,t)=>n=>!!(us(n)&&Gk.test(n)&&n.startsWith(e)||t&&Object.prototype.hasOwnProperty.call(n,t)),$x=(e,t,n)=>r=>{if(!us(r))return r;const[i,o,s,a]=r.match(ql);return{[e]:parseFloat(i),[t]:parseFloat(o),[n]:parseFloat(s),alpha:a!==void 0?parseFloat(a):1}},GC=e=>Bn(0,255,e),Vc={...Or,transform:e=>Math.round(GC(e))},fr={test:lh("rgb","red"),parse:$x("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:r=1})=>"rgba("+Vc.transform(e)+", "+Vc.transform(t)+", "+Vc.transform(n)+", "+bo(wo.transform(r))+")"};function YC(e){let t="",n="",r="",i="";return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),i=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),i=e.substring(4,5),t+=t,n+=n,r+=r,i+=i),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}}const gd={test:lh("#"),parse:YC,transform:fr.transform},ti={test:lh("hsl","hue"),parse:$x("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>"hsla("+Math.round(e)+", "+Qt.transform(bo(t))+", "+Qt.transform(bo(n))+", "+bo(wo.transform(r))+")"},He={test:e=>fr.test(e)||gd.test(e)||ti.test(e),parse:e=>fr.test(e)?fr.parse(e):ti.test(e)?ti.parse(e):gd.parse(e),transform:e=>us(e)?e:e.hasOwnProperty("red")?fr.transform(e):ti.transform(e)},fe=(e,t,n)=>-n*e+n*t+e;function Uc(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function XC({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,t/=100,n/=100;let i=0,o=0,s=0;if(!t)i=o=s=n;else{const a=n<.5?n*(1+t):n+t-n*t,l=2*n-a;i=Uc(l,a,e+1/3),o=Uc(l,a,e),s=Uc(l,a,e-1/3)}return{red:Math.round(i*255),green:Math.round(o*255),blue:Math.round(s*255),alpha:r}}const Bc=(e,t,n)=>{const r=e*e;return Math.sqrt(Math.max(0,n*(t*t-r)+r))},ZC=[gd,fr,ti],JC=e=>ZC.find(t=>t.test(e));function vm(e){const t=JC(e);let n=t.parse(e);return t===ti&&(n=XC(n)),n}const Ox=(e,t)=>{const n=vm(e),r=vm(t),i={...n};return o=>(i.red=Bc(n.red,r.red,o),i.green=Bc(n.green,r.green,o),i.blue=Bc(n.blue,r.blue,o),i.alpha=fe(n.alpha,r.alpha,o),fr.transform(i))};function eP(e){var t,n;return isNaN(e)&&us(e)&&(((t=e.match(ql))===null||t===void 0?void 0:t.length)||0)+(((n=e.match(ix))===null||n===void 0?void 0:n.length)||0)>0}const Lx={regex:qk,countKey:"Vars",token:"${v}",parse:ve},Fx={regex:ix,countKey:"Colors",token:"${c}",parse:He.parse},Mx={regex:ql,countKey:"Numbers",token:"${n}",parse:Or.parse};function Hc(e,{regex:t,countKey:n,token:r,parse:i}){const o=e.tokenised.match(t);o&&(e["num"+n]=o.length,e.tokenised=e.tokenised.replace(t,r),e.values.push(...o.map(i)))}function cl(e){const t=e.toString(),n={value:t,tokenised:t,values:[],numVars:0,numColors:0,numNumbers:0};return n.value.includes("var(--")&&Hc(n,Lx),Hc(n,Fx),Hc(n,Mx),n}function zx(e){return cl(e).values}function Nx(e){const{values:t,numColors:n,numVars:r,tokenised:i}=cl(e),o=t.length;return s=>{let a=i;for(let l=0;l<o;l++)l<r?a=a.replace(Lx.token,s[l]):l<r+n?a=a.replace(Fx.token,He.transform(s[l])):a=a.replace(Mx.token,bo(s[l]));return a}}const tP=e=>typeof e=="number"?0:e;function nP(e){const t=zx(e);return Nx(e)(t.map(tP))}const Hn={test:eP,parse:zx,createTransformer:Nx,getAnimatableNone:nP},_x=(e,t)=>n=>`${n>0?t:e}`;function Dx(e,t){return typeof e=="number"?n=>fe(e,t,n):He.test(e)?Ox(e,t):e.startsWith("var(")?_x(e,t):Vx(e,t)}const Ix=(e,t)=>{const n=[...e],r=n.length,i=e.map((o,s)=>Dx(o,t[s]));return o=>{for(let s=0;s<r;s++)n[s]=i[s](o);return n}},rP=(e,t)=>{const n={...e,...t},r={};for(const i in n)e[i]!==void 0&&t[i]!==void 0&&(r[i]=Dx(e[i],t[i]));return i=>{for(const o in r)n[o]=r[o](i);return n}},Vx=(e,t)=>{const n=Hn.createTransformer(t),r=cl(e),i=cl(t);return r.numVars===i.numVars&&r.numColors===i.numColors&&r.numNumbers>=i.numNumbers?Dn(Ix(r.values,i.values),n):_x(e,t)},qo=(e,t,n)=>{const r=t-e;return r===0?1:(n-e)/r},ym=(e,t)=>n=>fe(e,t,n);function iP(e){return typeof e=="number"?ym:typeof e=="string"?He.test(e)?Ox:Vx:Array.isArray(e)?Ix:typeof e=="object"?rP:ym}function oP(e,t,n){const r=[],i=n||iP(e[0]),o=e.length-1;for(let s=0;s<o;s++){let a=i(e[s],e[s+1]);if(t){const l=Array.isArray(t)?t[s]||ve:t;a=Dn(l,a)}r.push(a)}return r}function Ux(e,t,{clamp:n=!0,ease:r,mixer:i}={}){const o=e.length;if(oh(o===t.length),o===1)return()=>t[0];e[0]>e[o-1]&&(e=[...e].reverse(),t=[...t].reverse());const s=oP(t,r,i),a=s.length,l=u=>{let d=0;if(a>1)for(;d<e.length-2&&!(u<e[d+1]);d++);const f=qo(e[d],e[d+1],u);return s[d](f)};return n?u=>l(Bn(e[0],e[o-1],u)):l}function sP(e,t){const n=e[e.length-1];for(let r=1;r<=t;r++){const i=qo(0,t,r);e.push(fe(n,1,i))}}function aP(e){const t=[0];return sP(t,e.length-1),t}function lP(e,t){return e.map(n=>n*t)}function cP(e,t){return e.map(()=>t||Px).splice(0,e.length-1)}function ul({duration:e=300,keyframes:t,times:n,ease:r="easeInOut"}){const i=HC(r)?r.map(gm):gm(r),o={done:!1,value:t[0]},s=lP(n&&n.length===t.length?n:aP(t),e),a=Ux(s,t,{ease:Array.isArray(i)?i:cP(t,i)});return{calculatedDuration:e,next:l=>(o.value=a(l),o.done=l>=e,o)}}function Bx(e,t){return t?e*(1e3/t):0}const uP=5;function Hx(e,t,n){const r=Math.max(t-uP,0);return Bx(n-e(r),t-r)}const Wc=.001,dP=.01,xm=10,fP=.05,hP=1;function pP({duration:e=800,bounce:t=.25,velocity:n=0,mass:r=1}){let i,o;MC(e<=In(xm));let s=1-t;s=Bn(fP,hP,s),e=Bn(dP,xm,sn(e)),s<1?(i=u=>{const d=u*s,f=d*e,h=d-n,p=vd(u,s),y=Math.exp(-f);return Wc-h/p*y},o=u=>{const f=u*s*e,h=f*n+n,p=Math.pow(s,2)*Math.pow(u,2)*e,y=Math.exp(-f),w=vd(Math.pow(u,2),s);return(-i(u)+Wc>0?-1:1)*((h-p)*y)/w}):(i=u=>{const d=Math.exp(-u*e),f=(u-n)*e+1;return-Wc+d*f},o=u=>{const d=Math.exp(-u*e),f=(n-u)*(e*e);return d*f});const a=5/e,l=gP(i,o,a);if(e=In(e),isNaN(l))return{stiffness:100,damping:10,duration:e};{const u=Math.pow(l,2)*r;return{stiffness:u,damping:s*2*Math.sqrt(r*u),duration:e}}}const mP=12;function gP(e,t,n){let r=n;for(let i=1;i<mP;i++)r=r-e(r)/t(r);return r}function vd(e,t){return e*Math.sqrt(1-t*t)}const vP=["duration","bounce"],yP=["stiffness","damping","mass"];function wm(e,t){return t.some(n=>e[n]!==void 0)}function xP(e){let t={velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1,...e};if(!wm(e,yP)&&wm(e,vP)){const n=pP(e);t={...t,...n,mass:1},t.isResolvedFromDuration=!0}return t}function Wx({keyframes:e,restDelta:t,restSpeed:n,...r}){const i=e[0],o=e[e.length-1],s={done:!1,value:i},{stiffness:a,damping:l,mass:u,duration:d,velocity:f,isResolvedFromDuration:h}=xP({...r,velocity:-sn(r.velocity||0)}),p=f||0,y=l/(2*Math.sqrt(a*u)),w=o-i,S=sn(Math.sqrt(a/u)),m=Math.abs(w)<5;n||(n=m?.01:2),t||(t=m?.005:.5);let g;if(y<1){const v=vd(S,y);g=b=>{const C=Math.exp(-y*S*b);return o-C*((p+y*S*w)/v*Math.sin(v*b)+w*Math.cos(v*b))}}else if(y===1)g=v=>o-Math.exp(-S*v)*(w+(p+S*w)*v);else{const v=S*Math.sqrt(y*y-1);g=b=>{const C=Math.exp(-y*S*b),P=Math.min(v*b,300);return o-C*((p+y*S*w)*Math.sinh(P)+v*w*Math.cosh(P))/v}}return{calculatedDuration:h&&d||null,next:v=>{const b=g(v);if(h)s.done=v>=d;else{let C=p;v!==0&&(y<1?C=Hx(g,v,b):C=0);const P=Math.abs(C)<=n,k=Math.abs(o-b)<=t;s.done=P&&k}return s.value=s.done?o:b,s}}}function bm({keyframes:e,velocity:t=0,power:n=.8,timeConstant:r=325,bounceDamping:i=10,bounceStiffness:o=500,modifyTarget:s,min:a,max:l,restDelta:u=.5,restSpeed:d}){const f=e[0],h={done:!1,value:f},p=T=>a!==void 0&&T<a||l!==void 0&&T>l,y=T=>a===void 0?l:l===void 0||Math.abs(a-T)<Math.abs(l-T)?a:l;let w=n*t;const S=f+w,m=s===void 0?S:s(S);m!==S&&(w=m-f);const g=T=>-w*Math.exp(-T/r),v=T=>m+g(T),b=T=>{const O=g(T),F=v(T);h.done=Math.abs(O)<=u,h.value=h.done?m:F};let C,P;const k=T=>{p(h.value)&&(C=T,P=Wx({keyframes:[h.value,y(h.value)],velocity:Hx(v,T,h.value),damping:i,stiffness:o,restDelta:u,restSpeed:d}))};return k(0),{calculatedDuration:null,next:T=>{let O=!1;return!P&&C===void 0&&(O=!0,b(T),k(T)),C!==void 0&&T>C?P.next(T-C):(!O&&b(T),h)}}}const wP=e=>{const t=({timestamp:n})=>e(n);return{start:()=>ie.update(t,!0),stop:()=>fn(t),now:()=>Ne.isProcessing?Ne.timestamp:performance.now()}},Sm=2e4;function jm(e){let t=0;const n=50;let r=e.next(t);for(;!r.done&&t<Sm;)t+=n,r=e.next(t);return t>=Sm?1/0:t}const bP={decay:bm,inertia:bm,tween:ul,keyframes:ul,spring:Wx};function dl({autoplay:e=!0,delay:t=0,driver:n=wP,keyframes:r,type:i="keyframes",repeat:o=0,repeatDelay:s=0,repeatType:a="loop",onPlay:l,onStop:u,onComplete:d,onUpdate:f,...h}){let p=1,y=!1,w,S;const m=()=>{S=new Promise(M=>{w=M})};m();let g;const v=bP[i]||ul;let b;v!==ul&&typeof r[0]!="number"&&(b=Ux([0,100],r,{clamp:!1}),r=[0,100]);const C=v({...h,keyframes:r});let P;a==="mirror"&&(P=v({...h,keyframes:[...r].reverse(),velocity:-(h.velocity||0)}));let k="idle",T=null,O=null,F=null;C.calculatedDuration===null&&o&&(C.calculatedDuration=jm(C));const{calculatedDuration:ne}=C;let X=1/0,ee=1/0;ne!==null&&(X=ne+s,ee=X*(o+1)-s);let G=0;const Ce=M=>{if(O===null)return;p>0&&(O=Math.min(O,M)),p<0&&(O=Math.min(M-ee/p,O)),T!==null?G=T:G=Math.round(M-O)*p;const Q=G-t*(p>=0?1:-1),_t=p>=0?Q<0:Q>ee;G=Math.max(Q,0),k==="finished"&&T===null&&(G=ee);let Ye=G,Pt=C;if(o){const Et=Math.min(G,ee)/X;let mn=Math.floor(Et),ht=Et%1;!ht&&Et>=1&&(ht=1),ht===1&&mn--,mn=Math.min(mn,o+1),!!(mn%2)&&(a==="reverse"?(ht=1-ht,s&&(ht-=s/X)):a==="mirror"&&(Pt=P)),Ye=Bn(0,1,ht)*X}const Pe=_t?{done:!1,value:r[0]}:Pt.next(Ye);b&&(Pe.value=b(Pe.value));let{done:ft}=Pe;!_t&&ne!==null&&(ft=p>=0?G>=ee:G<=0);const Zn=T===null&&(k==="finished"||k==="running"&&ft);return f&&f(Pe.value),Zn&&A(),Pe},W=()=>{g&&g.stop(),g=void 0},le=()=>{k="idle",W(),w(),m(),O=F=null},A=()=>{k="finished",d&&d(),W(),w()},$=()=>{if(y)return;g||(g=n(Ce));const M=g.now();l&&l(),T!==null?O=M-T:(!O||k==="finished")&&(O=M),k==="finished"&&m(),F=O,T=null,k="running",g.start()};e&&$();const z={then(M,Q){return S.then(M,Q)},get time(){return sn(G)},set time(M){M=In(M),G=M,T!==null||!g||p===0?T=M:O=g.now()-M/p},get duration(){const M=C.calculatedDuration===null?jm(C):C.calculatedDuration;return sn(M)},get speed(){return p},set speed(M){M===p||!g||(p=M,z.time=sn(G))},get state(){return k},play:$,pause:()=>{k="paused",T=G},stop:()=>{y=!0,k!=="idle"&&(k="idle",u&&u(),le())},cancel:()=>{F!==null&&Ce(F),le()},complete:()=>{k="finished"},sample:M=>(O=0,Ce(M))};return z}function SP(e){let t;return()=>(t===void 0&&(t=e()),t)}const jP=SP(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),kP=new Set(["opacity","clipPath","filter","transform","backgroundColor"]),_s=10,CP=2e4,PP=(e,t)=>t.type==="spring"||e==="backgroundColor"||!Sx(t.ease);function EP(e,t,{onUpdate:n,onComplete:r,...i}){if(!(jP()&&kP.has(t)&&!i.repeatDelay&&i.repeatType!=="mirror"&&i.damping!==0&&i.type!=="inertia"))return!1;let s=!1,a,l,u=!1;const d=()=>{l=new Promise(v=>{a=v})};d();let{keyframes:f,duration:h=300,ease:p,times:y}=i;if(PP(t,i)){const v=dl({...i,repeat:0,delay:0});let b={done:!1,value:f[0]};const C=[];let P=0;for(;!b.done&&P<CP;)b=v.sample(P),C.push(b.value),P+=_s;y=void 0,f=C,h=P-_s,p="linear"}const w=NC(e.owner.current,t,f,{...i,duration:h,ease:p,times:y}),S=()=>{u=!1,w.cancel()},m=()=>{u=!0,ie.update(S),a(),d()};return w.onfinish=()=>{u||(e.set(_C(f,i)),r&&r(),m())},{then(v,b){return l.then(v,b)},attachTimeline(v){return w.timeline=v,w.onfinish=null,ve},get time(){return sn(w.currentTime||0)},set time(v){w.currentTime=In(v)},get speed(){return w.playbackRate},set speed(v){w.playbackRate=v},get duration(){return sn(h)},play:()=>{s||(w.play(),fn(S))},pause:()=>w.pause(),stop:()=>{if(s=!0,w.playState==="idle")return;const{currentTime:v}=w;if(v){const b=dl({...i,autoplay:!1});e.setWithVelocity(b.sample(v-_s).value,b.sample(v).value,_s)}m()},complete:()=>{u||w.finish()},cancel:m}}function TP({keyframes:e,delay:t,onUpdate:n,onComplete:r}){const i=()=>(n&&n(e[e.length-1]),r&&r(),{time:0,speed:1,duration:0,play:ve,pause:ve,stop:ve,then:o=>(o(),Promise.resolve()),cancel:ve,complete:ve});return t?dl({keyframes:[0,1],duration:0,delay:t,onComplete:i}):i()}const RP={type:"spring",stiffness:500,damping:25,restSpeed:10},AP=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),$P={type:"keyframes",duration:.8},OP={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},LP=(e,{keyframes:t})=>t.length>2?$P:$r.has(e)?e.startsWith("scale")?AP(t[1]):RP:OP,yd=(e,t)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&(Hn.test(t)||t==="0")&&!t.startsWith("url(")),FP=new Set(["brightness","contrast","saturate","opacity"]);function MP(e){const[t,n]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[r]=n.match(ql)||[];if(!r)return e;const i=n.replace(r,"");let o=FP.has(t)?1:0;return r!==n&&(o*=100),t+"("+o+i+")"}const zP=/([a-z-]*)\(.*?\)/g,xd={...Hn,getAnimatableNone:e=>{const t=e.match(zP);return t?t.map(MP).join(" "):e}},NP={...ox,color:He,backgroundColor:He,outlineColor:He,fill:He,stroke:He,borderColor:He,borderTopColor:He,borderRightColor:He,borderBottomColor:He,borderLeftColor:He,filter:xd,WebkitFilter:xd},ch=e=>NP[e];function Qx(e,t){let n=ch(e);return n!==xd&&(n=Hn),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const qx=e=>/^0[^.\s]+$/.test(e);function _P(e){if(typeof e=="number")return e===0;if(e!==null)return e==="none"||e==="0"||qx(e)}function DP(e,t,n,r){const i=yd(t,n);let o;Array.isArray(n)?o=[...n]:o=[null,n];const s=r.from!==void 0?r.from:e.get();let a;const l=[];for(let u=0;u<o.length;u++)o[u]===null&&(o[u]=u===0?s:o[u-1]),_P(o[u])&&l.push(u),typeof o[u]=="string"&&o[u]!=="none"&&o[u]!=="0"&&(a=o[u]);if(i&&l.length&&a)for(let u=0;u<l.length;u++){const d=l[u];o[d]=Qx(t,a)}return o}function IP({when:e,delay:t,delayChildren:n,staggerChildren:r,staggerDirection:i,repeat:o,repeatType:s,repeatDelay:a,from:l,elapsed:u,...d}){return!!Object.keys(d).length}function uh(e,t){return e[t]||e.default||e}const VP={skipAnimations:!1},dh=(e,t,n,r={})=>i=>{const o=uh(r,e)||{},s=o.delay||r.delay||0;let{elapsed:a=0}=r;a=a-In(s);const l=DP(t,e,n,o),u=l[0],d=l[l.length-1],f=yd(e,u),h=yd(e,d);let p={keyframes:l,velocity:t.getVelocity(),ease:"easeOut",...o,delay:-a,onUpdate:y=>{t.set(y),o.onUpdate&&o.onUpdate(y)},onComplete:()=>{i(),o.onComplete&&o.onComplete()}};if(IP(o)||(p={...p,...LP(e,p)}),p.duration&&(p.duration=In(p.duration)),p.repeatDelay&&(p.repeatDelay=In(p.repeatDelay)),!f||!h||zC.current||o.type===!1||VP.skipAnimations)return TP(p);if(!r.isHandoff&&t.owner&&t.owner.current instanceof HTMLElement&&!t.owner.getProps().onUpdate){const y=EP(t,e,p);if(y)return y}return dl(p)};function fl(e){return!!(it(e)&&e.add)}const Kx=e=>/^\-?\d*\.?\d+$/.test(e);function fh(e,t){e.indexOf(t)===-1&&e.push(t)}function hh(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}class ph{constructor(){this.subscriptions=[]}add(t){return fh(this.subscriptions,t),()=>hh(this.subscriptions,t)}notify(t,n,r){const i=this.subscriptions.length;if(i)if(i===1)this.subscriptions[0](t,n,r);else for(let o=0;o<i;o++){const s=this.subscriptions[o];s&&s(t,n,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const UP=e=>!isNaN(parseFloat(e));class BP{constructor(t,n={}){this.version="10.18.0",this.timeDelta=0,this.lastUpdated=0,this.canTrackVelocity=!1,this.events={},this.updateAndNotify=(r,i=!0)=>{this.prev=this.current,this.current=r;const{delta:o,timestamp:s}=Ne;this.lastUpdated!==s&&(this.timeDelta=o,this.lastUpdated=s,ie.postRender(this.scheduleVelocityCheck)),this.prev!==this.current&&this.events.change&&this.events.change.notify(this.current),this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()),i&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.scheduleVelocityCheck=()=>ie.postRender(this.velocityCheck),this.velocityCheck=({timestamp:r})=>{r!==this.lastUpdated&&(this.prev=this.current,this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()))},this.hasAnimated=!1,this.prev=this.current=t,this.canTrackVelocity=UP(this.current),this.owner=n.owner}onChange(t){return this.on("change",t)}on(t,n){this.events[t]||(this.events[t]=new ph);const r=this.events[t].add(n);return t==="change"?()=>{r(),ie.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,n){this.passiveEffect=t,this.stopPassiveEffect=n}set(t,n=!0){!n||!this.passiveEffect?this.updateAndNotify(t,n):this.passiveEffect(t,this.updateAndNotify)}setWithVelocity(t,n,r){this.set(n),this.prev=t,this.timeDelta=r}jump(t){this.updateAndNotify(t),this.prev=t,this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?Bx(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(t){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=t(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function xi(e,t){return new BP(e,t)}const Gx=e=>t=>t.test(e),HP={test:e=>e==="auto",parse:e=>e},Yx=[Or,N,Qt,vn,Xk,Yk,HP],Hi=e=>Yx.find(Gx(e)),WP=[...Yx,He,Hn],QP=e=>WP.find(Gx(e));function qP(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,xi(n))}function KP(e,t){const n=Gl(e,t);let{transitionEnd:r={},transition:i={},...o}=n?e.makeTargetAnimatable(n,!1):{};o={...o,...r};for(const s in o){const a=dC(o[s]);qP(e,s,a)}}function GP(e,t,n){var r,i;const o=Object.keys(t).filter(a=>!e.hasValue(a)),s=o.length;if(s)for(let a=0;a<s;a++){const l=o[a],u=t[l];let d=null;Array.isArray(u)&&(d=u[0]),d===null&&(d=(i=(r=n[l])!==null&&r!==void 0?r:e.readValue(l))!==null&&i!==void 0?i:t[l]),d!=null&&(typeof d=="string"&&(Kx(d)||qx(d))?d=parseFloat(d):!QP(d)&&Hn.test(u)&&(d=Qx(l,u)),e.addValue(l,xi(d,{owner:e})),n[l]===void 0&&(n[l]=d),d!==null&&e.setBaseTarget(l,d))}}function YP(e,t){return t?(t[e]||t.default||t).from:void 0}function XP(e,t,n){const r={};for(const i in e){const o=YP(i,t);if(o!==void 0)r[i]=o;else{const s=n.getValue(i);s&&(r[i]=s.get())}}return r}function ZP({protectedKeys:e,needsAnimating:t},n){const r=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,r}function JP(e,t){const n=e.get();if(Array.isArray(t)){for(let r=0;r<t.length;r++)if(t[r]!==n)return!0}else return n!==t}function Xx(e,t,{delay:n=0,transitionOverride:r,type:i}={}){let{transition:o=e.getDefaultTransition(),transitionEnd:s,...a}=e.makeTargetAnimatable(t);const l=e.getValue("willChange");r&&(o=r);const u=[],d=i&&e.animationState&&e.animationState.getState()[i];for(const f in a){const h=e.getValue(f),p=a[f];if(!h||p===void 0||d&&ZP(d,f))continue;const y={delay:n,elapsed:0,...uh(o||{},f)};if(window.HandoffAppearAnimations){const m=e.getProps()[Zy];if(m){const g=window.HandoffAppearAnimations(m,f,h,ie);g!==null&&(y.elapsed=g,y.isHandoff=!0)}}let w=!y.isHandoff&&!JP(h,p);if(y.type==="spring"&&(h.getVelocity()||y.velocity)&&(w=!1),h.animation&&(w=!1),w)continue;h.start(dh(f,h,p,e.shouldReduceMotion&&$r.has(f)?{type:!1}:y));const S=h.animation;fl(l)&&(l.add(f),S.then(()=>l.remove(f))),u.push(S)}return s&&Promise.all(u).then(()=>{s&&KP(e,s)}),u}function wd(e,t,n={}){const r=Gl(e,t,n.custom);let{transition:i=e.getDefaultTransition()||{}}=r||{};n.transitionOverride&&(i=n.transitionOverride);const o=r?()=>Promise.all(Xx(e,r,n)):()=>Promise.resolve(),s=e.variantChildren&&e.variantChildren.size?(l=0)=>{const{delayChildren:u=0,staggerChildren:d,staggerDirection:f}=i;return eE(e,t,u+l,d,f,n)}:()=>Promise.resolve(),{when:a}=i;if(a){const[l,u]=a==="beforeChildren"?[o,s]:[s,o];return l().then(()=>u())}else return Promise.all([o(),s(n.delay)])}function eE(e,t,n=0,r=0,i=1,o){const s=[],a=(e.variantChildren.size-1)*r,l=i===1?(u=0)=>u*r:(u=0)=>a-u*r;return Array.from(e.variantChildren).sort(tE).forEach((u,d)=>{u.notify("AnimationStart",t),s.push(wd(u,t,{...o,delay:n+l(d)}).then(()=>u.notify("AnimationComplete",t)))}),Promise.all(s)}function tE(e,t){return e.sortNodePosition(t)}function nE(e,t,n={}){e.notify("AnimationStart",t);let r;if(Array.isArray(t)){const i=t.map(o=>wd(e,o,n));r=Promise.all(i)}else if(typeof t=="string")r=wd(e,t,n);else{const i=typeof t=="function"?Gl(e,t,n.custom):t;r=Promise.all(Xx(e,i,n))}return r.then(()=>e.notify("AnimationComplete",t))}const rE=[...Gf].reverse(),iE=Gf.length;function oE(e){return t=>Promise.all(t.map(({animation:n,options:r})=>nE(e,n,r)))}function sE(e){let t=oE(e);const n=lE();let r=!0;const i=(l,u)=>{const d=Gl(e,u);if(d){const{transition:f,transitionEnd:h,...p}=d;l={...l,...p,...h}}return l};function o(l){t=l(e)}function s(l,u){const d=e.getProps(),f=e.getVariantContext(!0)||{},h=[],p=new Set;let y={},w=1/0;for(let m=0;m<iE;m++){const g=rE[m],v=n[g],b=d[g]!==void 0?d[g]:f[g],C=Wo(b),P=g===u?v.isActive:null;P===!1&&(w=m);let k=b===f[g]&&b!==d[g]&&C;if(k&&r&&e.manuallyAnimateOnMount&&(k=!1),v.protectedKeys={...y},!v.isActive&&P===null||!b&&!v.prevProp||Wl(b)||typeof b=="boolean")continue;let O=aE(v.prevProp,b)||g===u&&v.isActive&&!k&&C||m>w&&C,F=!1;const ne=Array.isArray(b)?b:[b];let X=ne.reduce(i,{});P===!1&&(X={});const{prevResolvedValues:ee={}}=v,G={...ee,...X},Ce=W=>{O=!0,p.has(W)&&(F=!0,p.delete(W)),v.needsAnimating[W]=!0};for(const W in G){const le=X[W],A=ee[W];if(y.hasOwnProperty(W))continue;let $=!1;ll(le)&&ll(A)?$=!wx(le,A):$=le!==A,$?le!==void 0?Ce(W):p.add(W):le!==void 0&&p.has(W)?Ce(W):v.protectedKeys[W]=!0}v.prevProp=b,v.prevResolvedValues=X,v.isActive&&(y={...y,...X}),r&&e.blockInitialAnimation&&(O=!1),O&&(!k||F)&&h.push(...ne.map(W=>({animation:W,options:{type:g,...l}})))}if(p.size){const m={};p.forEach(g=>{const v=e.getBaseTarget(g);v!==void 0&&(m[g]=v)}),h.push({animation:m})}let S=!!h.length;return r&&(d.initial===!1||d.initial===d.animate)&&!e.manuallyAnimateOnMount&&(S=!1),r=!1,S?t(h):Promise.resolve()}function a(l,u,d){var f;if(n[l].isActive===u)return Promise.resolve();(f=e.variantChildren)===null||f===void 0||f.forEach(p=>{var y;return(y=p.animationState)===null||y===void 0?void 0:y.setActive(l,u)}),n[l].isActive=u;const h=s(d,l);for(const p in n)n[p].protectedKeys={};return h}return{animateChanges:s,setActive:a,setAnimateFunction:o,getState:()=>n}}function aE(e,t){return typeof t=="string"?t!==e:Array.isArray(t)?!wx(t,e):!1}function Jn(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function lE(){return{animate:Jn(!0),whileInView:Jn(),whileHover:Jn(),whileTap:Jn(),whileDrag:Jn(),whileFocus:Jn(),exit:Jn()}}class cE extends Xn{constructor(t){super(t),t.animationState||(t.animationState=sE(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();this.unmount(),Wl(t)&&(this.unmount=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:n}=this.node.prevProps||{};t!==n&&this.updateAnimationControlsSubscription()}unmount(){}}let uE=0;class dE extends Xn{constructor(){super(...arguments),this.id=uE++}update(){if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:n,custom:r}=this.node.presenceContext,{isPresent:i}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===i)return;const o=this.node.animationState.setActive("exit",!t,{custom:r??this.node.getProps().custom});n&&!t&&o.then(()=>n(this.id))}mount(){const{register:t}=this.node.presenceContext||{};t&&(this.unmount=t(this.id))}unmount(){}}const fE={animation:{Feature:cE},exit:{Feature:dE}},km=(e,t)=>Math.abs(e-t);function hE(e,t){const n=km(e.x,t.x),r=km(e.y,t.y);return Math.sqrt(n**2+r**2)}class Zx{constructor(t,n,{transformPagePoint:r,contextWindow:i,dragSnapToOrigin:o=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const f=qc(this.lastMoveEventInfo,this.history),h=this.startEvent!==null,p=hE(f.offset,{x:0,y:0})>=3;if(!h&&!p)return;const{point:y}=f,{timestamp:w}=Ne;this.history.push({...y,timestamp:w});const{onStart:S,onMove:m}=this.handlers;h||(S&&S(this.lastMoveEvent,f),this.startEvent=this.lastMoveEvent),m&&m(this.lastMoveEvent,f)},this.handlePointerMove=(f,h)=>{this.lastMoveEvent=f,this.lastMoveEventInfo=Qc(h,this.transformPagePoint),ie.update(this.updatePoint,!0)},this.handlePointerUp=(f,h)=>{this.end();const{onEnd:p,onSessionEnd:y,resumeAnimation:w}=this.handlers;if(this.dragSnapToOrigin&&w&&w(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const S=qc(f.type==="pointercancel"?this.lastMoveEventInfo:Qc(h,this.transformPagePoint),this.history);this.startEvent&&p&&p(f,S),y&&y(f,S)},!mx(t))return;this.dragSnapToOrigin=o,this.handlers=n,this.transformPagePoint=r,this.contextWindow=i||window;const s=Kl(t),a=Qc(s,this.transformPagePoint),{point:l}=a,{timestamp:u}=Ne;this.history=[{...l,timestamp:u}];const{onSessionStart:d}=n;d&&d(t,qc(a,this.history)),this.removeListeners=Dn(on(this.contextWindow,"pointermove",this.handlePointerMove),on(this.contextWindow,"pointerup",this.handlePointerUp),on(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),fn(this.updatePoint)}}function Qc(e,t){return t?{point:t(e.point)}:e}function Cm(e,t){return{x:e.x-t.x,y:e.y-t.y}}function qc({point:e},t){return{point:e,delta:Cm(e,Jx(t)),offset:Cm(e,pE(t)),velocity:mE(t,.1)}}function pE(e){return e[0]}function Jx(e){return e[e.length-1]}function mE(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null;const i=Jx(e);for(;n>=0&&(r=e[n],!(i.timestamp-r.timestamp>In(t)));)n--;if(!r)return{x:0,y:0};const o=sn(i.timestamp-r.timestamp);if(o===0)return{x:0,y:0};const s={x:(i.x-r.x)/o,y:(i.y-r.y)/o};return s.x===1/0&&(s.x=0),s.y===1/0&&(s.y=0),s}function ct(e){return e.max-e.min}function bd(e,t=0,n=.01){return Math.abs(e-t)<=n}function Pm(e,t,n,r=.5){e.origin=r,e.originPoint=fe(t.min,t.max,e.origin),e.scale=ct(n)/ct(t),(bd(e.scale,1,1e-4)||isNaN(e.scale))&&(e.scale=1),e.translate=fe(n.min,n.max,e.origin)-e.originPoint,(bd(e.translate)||isNaN(e.translate))&&(e.translate=0)}function So(e,t,n,r){Pm(e.x,t.x,n.x,r?r.originX:void 0),Pm(e.y,t.y,n.y,r?r.originY:void 0)}function Em(e,t,n){e.min=n.min+t.min,e.max=e.min+ct(t)}function gE(e,t,n){Em(e.x,t.x,n.x),Em(e.y,t.y,n.y)}function Tm(e,t,n){e.min=t.min-n.min,e.max=e.min+ct(t)}function jo(e,t,n){Tm(e.x,t.x,n.x),Tm(e.y,t.y,n.y)}function vE(e,{min:t,max:n},r){return t!==void 0&&e<t?e=r?fe(t,e,r.min):Math.max(e,t):n!==void 0&&e>n&&(e=r?fe(n,e,r.max):Math.min(e,n)),e}function Rm(e,t,n){return{min:t!==void 0?e.min+t:void 0,max:n!==void 0?e.max+n-(e.max-e.min):void 0}}function yE(e,{top:t,left:n,bottom:r,right:i}){return{x:Rm(e.x,n,i),y:Rm(e.y,t,r)}}function Am(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}function xE(e,t){return{x:Am(e.x,t.x),y:Am(e.y,t.y)}}function wE(e,t){let n=.5;const r=ct(e),i=ct(t);return i>r?n=qo(t.min,t.max-r,e.min):r>i&&(n=qo(e.min,e.max-i,t.min)),Bn(0,1,n)}function bE(e,t){const n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}const Sd=.35;function SE(e=Sd){return e===!1?e=0:e===!0&&(e=Sd),{x:$m(e,"left","right"),y:$m(e,"top","bottom")}}function $m(e,t,n){return{min:Om(e,t),max:Om(e,n)}}function Om(e,t){return typeof e=="number"?e:e[t]||0}const Lm=()=>({translate:0,scale:1,origin:0,originPoint:0}),ni=()=>({x:Lm(),y:Lm()}),Fm=()=>({min:0,max:0}),we=()=>({x:Fm(),y:Fm()});function gt(e){return[e("x"),e("y")]}function e1({top:e,left:t,right:n,bottom:r}){return{x:{min:t,max:n},y:{min:e,max:r}}}function jE({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function kE(e,t){if(!t)return e;const n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function Kc(e){return e===void 0||e===1}function jd({scale:e,scaleX:t,scaleY:n}){return!Kc(e)||!Kc(t)||!Kc(n)}function rr(e){return jd(e)||t1(e)||e.z||e.rotate||e.rotateX||e.rotateY}function t1(e){return Mm(e.x)||Mm(e.y)}function Mm(e){return e&&e!=="0%"}function hl(e,t,n){const r=e-n,i=t*r;return n+i}function zm(e,t,n,r,i){return i!==void 0&&(e=hl(e,i,r)),hl(e,n,r)+t}function kd(e,t=0,n=1,r,i){e.min=zm(e.min,t,n,r,i),e.max=zm(e.max,t,n,r,i)}function n1(e,{x:t,y:n}){kd(e.x,t.translate,t.scale,t.originPoint),kd(e.y,n.translate,n.scale,n.originPoint)}function CE(e,t,n,r=!1){const i=n.length;if(!i)return;t.x=t.y=1;let o,s;for(let a=0;a<i;a++){o=n[a],s=o.projectionDelta;const l=o.instance;l&&l.style&&l.style.display==="contents"||(r&&o.options.layoutScroll&&o.scroll&&o!==o.root&&ri(e,{x:-o.scroll.offset.x,y:-o.scroll.offset.y}),s&&(t.x*=s.x.scale,t.y*=s.y.scale,n1(e,s)),r&&rr(o.latestValues)&&ri(e,o.latestValues))}t.x=Nm(t.x),t.y=Nm(t.y)}function Nm(e){return Number.isInteger(e)||e>1.0000000000001||e<.999999999999?e:1}function Sn(e,t){e.min=e.min+t,e.max=e.max+t}function _m(e,t,[n,r,i]){const o=t[i]!==void 0?t[i]:.5,s=fe(e.min,e.max,o);kd(e,t[n],t[r],s,t.scale)}const PE=["x","scaleX","originX"],EE=["y","scaleY","originY"];function ri(e,t){_m(e.x,t,PE),_m(e.y,t,EE)}function r1(e,t){return e1(kE(e.getBoundingClientRect(),t))}function TE(e,t,n){const r=r1(e,n),{scroll:i}=t;return i&&(Sn(r.x,i.offset.x),Sn(r.y,i.offset.y)),r}const i1=({current:e})=>e?e.ownerDocument.defaultView:null,RE=new WeakMap;class AE{constructor(t){this.openGlobalLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=we(),this.visualElement=t}start(t,{snapToCursor:n=!1}={}){const{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;const i=d=>{const{dragSnapToOrigin:f}=this.getProps();f?this.pauseAnimation():this.stopAnimation(),n&&this.snapToCursor(Kl(d,"page").point)},o=(d,f)=>{const{drag:h,dragPropagation:p,onDragStart:y}=this.getProps();if(h&&!p&&(this.openGlobalLock&&this.openGlobalLock(),this.openGlobalLock=vx(h),!this.openGlobalLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),gt(S=>{let m=this.getAxisMotionValue(S).get()||0;if(Qt.test(m)){const{projection:g}=this.visualElement;if(g&&g.layout){const v=g.layout.layoutBox[S];v&&(m=ct(v)*(parseFloat(m)/100))}}this.originPoint[S]=m}),y&&ie.update(()=>y(d,f),!1,!0);const{animationState:w}=this.visualElement;w&&w.setActive("whileDrag",!0)},s=(d,f)=>{const{dragPropagation:h,dragDirectionLock:p,onDirectionLock:y,onDrag:w}=this.getProps();if(!h&&!this.openGlobalLock)return;const{offset:S}=f;if(p&&this.currentDirection===null){this.currentDirection=$E(S),this.currentDirection!==null&&y&&y(this.currentDirection);return}this.updateAxis("x",f.point,S),this.updateAxis("y",f.point,S),this.visualElement.render(),w&&w(d,f)},a=(d,f)=>this.stop(d,f),l=()=>gt(d=>{var f;return this.getAnimationState(d)==="paused"&&((f=this.getAxisMotionValue(d).animation)===null||f===void 0?void 0:f.play())}),{dragSnapToOrigin:u}=this.getProps();this.panSession=new Zx(t,{onSessionStart:i,onStart:o,onMove:s,onSessionEnd:a,resumeAnimation:l},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:u,contextWindow:i1(this.visualElement)})}stop(t,n){const r=this.isDragging;if(this.cancel(),!r)return;const{velocity:i}=n;this.startAnimation(i);const{onDragEnd:o}=this.getProps();o&&ie.update(()=>o(t,n))}cancel(){this.isDragging=!1;const{projection:t,animationState:n}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:r}=this.getProps();!r&&this.openGlobalLock&&(this.openGlobalLock(),this.openGlobalLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(t,n,r){const{drag:i}=this.getProps();if(!r||!Ds(t,i,this.currentDirection))return;const o=this.getAxisMotionValue(t);let s=this.originPoint[t]+r[t];this.constraints&&this.constraints[t]&&(s=vE(s,this.constraints[t],this.elastic[t])),o.set(s)}resolveConstraints(){var t;const{dragConstraints:n,dragElastic:r}=this.getProps(),i=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(t=this.visualElement.projection)===null||t===void 0?void 0:t.layout,o=this.constraints;n&&ei(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&i?this.constraints=yE(i.layoutBox,n):this.constraints=!1,this.elastic=SE(r),o!==this.constraints&&i&&this.constraints&&!this.hasMutatedConstraints&&gt(s=>{this.getAxisMotionValue(s)&&(this.constraints[s]=bE(i.layoutBox[s],this.constraints[s]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:n}=this.getProps();if(!t||!ei(t))return!1;const r=t.current,{projection:i}=this.visualElement;if(!i||!i.layout)return!1;const o=TE(r,i.root,this.visualElement.getTransformPagePoint());let s=xE(i.layout.layoutBox,o);if(n){const a=n(jE(s));this.hasMutatedConstraints=!!a,a&&(s=e1(a))}return s}startAnimation(t){const{drag:n,dragMomentum:r,dragElastic:i,dragTransition:o,dragSnapToOrigin:s,onDragTransitionEnd:a}=this.getProps(),l=this.constraints||{},u=gt(d=>{if(!Ds(d,n,this.currentDirection))return;let f=l&&l[d]||{};s&&(f={min:0,max:0});const h=i?200:1e6,p=i?40:1e7,y={type:"inertia",velocity:r?t[d]:0,bounceStiffness:h,bounceDamping:p,timeConstant:750,restDelta:1,restSpeed:10,...o,...f};return this.startAxisValueAnimation(d,y)});return Promise.all(u).then(a)}startAxisValueAnimation(t,n){const r=this.getAxisMotionValue(t);return r.start(dh(t,r,0,n))}stopAnimation(){gt(t=>this.getAxisMotionValue(t).stop())}pauseAnimation(){gt(t=>{var n;return(n=this.getAxisMotionValue(t).animation)===null||n===void 0?void 0:n.pause()})}getAnimationState(t){var n;return(n=this.getAxisMotionValue(t).animation)===null||n===void 0?void 0:n.state}getAxisMotionValue(t){const n="_drag"+t.toUpperCase(),r=this.visualElement.getProps(),i=r[n];return i||this.visualElement.getValue(t,(r.initial?r.initial[t]:void 0)||0)}snapToCursor(t){gt(n=>{const{drag:r}=this.getProps();if(!Ds(n,r,this.currentDirection))return;const{projection:i}=this.visualElement,o=this.getAxisMotionValue(n);if(i&&i.layout){const{min:s,max:a}=i.layout.layoutBox[n];o.set(t[n]-fe(s,a,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:n}=this.getProps(),{projection:r}=this.visualElement;if(!ei(n)||!r||!this.constraints)return;this.stopAnimation();const i={x:0,y:0};gt(s=>{const a=this.getAxisMotionValue(s);if(a){const l=a.get();i[s]=wE({min:l,max:l},this.constraints[s])}});const{transformTemplate:o}=this.visualElement.getProps();this.visualElement.current.style.transform=o?o({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.resolveConstraints(),gt(s=>{if(!Ds(s,t,null))return;const a=this.getAxisMotionValue(s),{min:l,max:u}=this.constraints[s];a.set(fe(l,u,i[s]))})}addListeners(){if(!this.visualElement.current)return;RE.set(this.visualElement,this);const t=this.visualElement.current,n=on(t,"pointerdown",l=>{const{drag:u,dragListener:d=!0}=this.getProps();u&&d&&this.start(l)}),r=()=>{const{dragConstraints:l}=this.getProps();ei(l)&&(this.constraints=this.resolveRefConstraints())},{projection:i}=this.visualElement,o=i.addEventListener("measure",r);i&&!i.layout&&(i.root&&i.root.updateScroll(),i.updateLayout()),r();const s=nn(window,"resize",()=>this.scalePositionWithinConstraints()),a=i.addEventListener("didUpdate",({delta:l,hasLayoutChanged:u})=>{this.isDragging&&u&&(gt(d=>{const f=this.getAxisMotionValue(d);f&&(this.originPoint[d]+=l[d].translate,f.set(f.get()+l[d].translate))}),this.visualElement.render())});return()=>{s(),n(),o(),a&&a()}}getProps(){const t=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:r=!1,dragPropagation:i=!1,dragConstraints:o=!1,dragElastic:s=Sd,dragMomentum:a=!0}=t;return{...t,drag:n,dragDirectionLock:r,dragPropagation:i,dragConstraints:o,dragElastic:s,dragMomentum:a}}}function Ds(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function $E(e,t=10){let n=null;return Math.abs(e.y)>t?n="y":Math.abs(e.x)>t&&(n="x"),n}class OE extends Xn{constructor(t){super(t),this.removeGroupControls=ve,this.removeListeners=ve,this.controls=new AE(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||ve}unmount(){this.removeGroupControls(),this.removeListeners()}}const Dm=e=>(t,n)=>{e&&ie.update(()=>e(t,n))};class LE extends Xn{constructor(){super(...arguments),this.removePointerDownListener=ve}onPointerDown(t){this.session=new Zx(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:i1(this.node)})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:n,onPan:r,onPanEnd:i}=this.node.getProps();return{onSessionStart:Dm(t),onStart:Dm(n),onMove:r,onEnd:(o,s)=>{delete this.session,i&&ie.update(()=>i(o,s))}}}mount(){this.removePointerDownListener=on(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}function FE(){const e=j.useContext(Bl);if(e===null)return[!0,null];const{isPresent:t,onExitComplete:n,register:r}=e,i=j.useId();return j.useEffect(()=>r(i),[]),!t&&n?[!1,()=>n&&n(i)]:[!0]}const ga={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function Im(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const Wi={correct:(e,t)=>{if(!t.target)return e;if(typeof e=="string")if(N.test(e))e=parseFloat(e);else return e;const n=Im(e,t.target.x),r=Im(e,t.target.y);return`${n}% ${r}%`}},ME={correct:(e,{treeScale:t,projectionDelta:n})=>{const r=e,i=Hn.parse(e);if(i.length>5)return r;const o=Hn.createTransformer(e),s=typeof i[0]!="number"?1:0,a=n.x.scale*t.x,l=n.y.scale*t.y;i[0+s]/=a,i[1+s]/=l;const u=fe(a,l,.5);return typeof i[2+s]=="number"&&(i[2+s]/=u),typeof i[3+s]=="number"&&(i[3+s]/=u),o(i)}};class zE extends B.Component{componentDidMount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r,layoutId:i}=this.props,{projection:o}=t;Bk(NE),o&&(n.group&&n.group.add(o),r&&r.register&&i&&r.register(o),o.root.didUpdate(),o.addEventListener("animationComplete",()=>{this.safeToRemove()}),o.setOptions({...o.options,onExitComplete:()=>this.safeToRemove()})),ga.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:n,visualElement:r,drag:i,isPresent:o}=this.props,s=r.projection;return s&&(s.isPresent=o,i||t.layoutDependency!==n||n===void 0?s.willUpdate():this.safeToRemove(),t.isPresent!==o&&(o?s.promote():s.relegate()||ie.postRender(()=>{const a=s.getStack();(!a||!a.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),queueMicrotask(()=>{!t.currentAnimation&&t.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r}=this.props,{projection:i}=t;i&&(i.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(i),r&&r.deregister&&r.deregister(i))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function o1(e){const[t,n]=FE(),r=j.useContext(Xf);return B.createElement(zE,{...e,layoutGroup:r,switchLayoutGroup:j.useContext(ex),isPresent:t,safeToRemove:n})}const NE={borderRadius:{...Wi,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Wi,borderTopRightRadius:Wi,borderBottomLeftRadius:Wi,borderBottomRightRadius:Wi,boxShadow:ME},s1=["TopLeft","TopRight","BottomLeft","BottomRight"],_E=s1.length,Vm=e=>typeof e=="string"?parseFloat(e):e,Um=e=>typeof e=="number"||N.test(e);function DE(e,t,n,r,i,o){i?(e.opacity=fe(0,n.opacity!==void 0?n.opacity:1,IE(r)),e.opacityExit=fe(t.opacity!==void 0?t.opacity:1,0,VE(r))):o&&(e.opacity=fe(t.opacity!==void 0?t.opacity:1,n.opacity!==void 0?n.opacity:1,r));for(let s=0;s<_E;s++){const a=`border${s1[s]}Radius`;let l=Bm(t,a),u=Bm(n,a);if(l===void 0&&u===void 0)continue;l||(l=0),u||(u=0),l===0||u===0||Um(l)===Um(u)?(e[a]=Math.max(fe(Vm(l),Vm(u),r),0),(Qt.test(u)||Qt.test(l))&&(e[a]+="%")):e[a]=u}(t.rotate||n.rotate)&&(e.rotate=fe(t.rotate||0,n.rotate||0,r))}function Bm(e,t){return e[t]!==void 0?e[t]:e.borderRadius}const IE=a1(0,.5,Rx),VE=a1(.5,.95,ve);function a1(e,t,n){return r=>r<e?0:r>t?1:n(qo(e,t,r))}function Hm(e,t){e.min=t.min,e.max=t.max}function mt(e,t){Hm(e.x,t.x),Hm(e.y,t.y)}function Wm(e,t,n,r,i){return e-=t,e=hl(e,1/n,r),i!==void 0&&(e=hl(e,1/i,r)),e}function UE(e,t=0,n=1,r=.5,i,o=e,s=e){if(Qt.test(t)&&(t=parseFloat(t),t=fe(s.min,s.max,t/100)-s.min),typeof t!="number")return;let a=fe(o.min,o.max,r);e===o&&(a-=t),e.min=Wm(e.min,t,n,a,i),e.max=Wm(e.max,t,n,a,i)}function Qm(e,t,[n,r,i],o,s){UE(e,t[n],t[r],t[i],t.scale,o,s)}const BE=["x","scaleX","originX"],HE=["y","scaleY","originY"];function qm(e,t,n,r){Qm(e.x,t,BE,n?n.x:void 0,r?r.x:void 0),Qm(e.y,t,HE,n?n.y:void 0,r?r.y:void 0)}function Km(e){return e.translate===0&&e.scale===1}function l1(e){return Km(e.x)&&Km(e.y)}function WE(e,t){return e.x.min===t.x.min&&e.x.max===t.x.max&&e.y.min===t.y.min&&e.y.max===t.y.max}function c1(e,t){return Math.round(e.x.min)===Math.round(t.x.min)&&Math.round(e.x.max)===Math.round(t.x.max)&&Math.round(e.y.min)===Math.round(t.y.min)&&Math.round(e.y.max)===Math.round(t.y.max)}function Gm(e){return ct(e.x)/ct(e.y)}class QE{constructor(){this.members=[]}add(t){fh(this.members,t),t.scheduleRender()}remove(t){if(hh(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(t){const n=this.members.findIndex(i=>t===i);if(n===0)return!1;let r;for(let i=n;i>=0;i--){const o=this.members[i];if(o.isPresent!==!1){r=o;break}}return r?(this.promote(r),!0):!1}promote(t,n){const r=this.lead;if(t!==r&&(this.prevLead=r,this.lead=t,t.show(),r)){r.instance&&r.scheduleRender(),t.scheduleRender(),t.resumeFrom=r,n&&(t.resumeFrom.preserveOpacity=!0),r.snapshot&&(t.snapshot=r.snapshot,t.snapshot.latestValues=r.animationValues||r.latestValues),t.root&&t.root.isUpdating&&(t.isLayoutDirty=!0);const{crossfade:i}=t.options;i===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(t=>{const{options:n,resumingFrom:r}=t;n.onExitComplete&&n.onExitComplete(),r&&r.options.onExitComplete&&r.options.onExitComplete()})}scheduleRender(){this.members.forEach(t=>{t.instance&&t.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function Ym(e,t,n){let r="";const i=e.x.translate/t.x,o=e.y.translate/t.y;if((i||o)&&(r=`translate3d(${i}px, ${o}px, 0) `),(t.x!==1||t.y!==1)&&(r+=`scale(${1/t.x}, ${1/t.y}) `),n){const{rotate:l,rotateX:u,rotateY:d}=n;l&&(r+=`rotate(${l}deg) `),u&&(r+=`rotateX(${u}deg) `),d&&(r+=`rotateY(${d}deg) `)}const s=e.x.scale*t.x,a=e.y.scale*t.y;return(s!==1||a!==1)&&(r+=`scale(${s}, ${a})`),r||"none"}const qE=(e,t)=>e.depth-t.depth;class KE{constructor(){this.children=[],this.isDirty=!1}add(t){fh(this.children,t),this.isDirty=!0}remove(t){hh(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(qE),this.isDirty=!1,this.children.forEach(t)}}function GE(e,t){const n=performance.now(),r=({timestamp:i})=>{const o=i-n;o>=t&&(fn(r),e(o-t))};return ie.read(r,!0),()=>fn(r)}function YE(e){window.MotionDebug&&window.MotionDebug.record(e)}function XE(e){return e instanceof SVGElement&&e.tagName!=="svg"}function ZE(e,t,n){const r=it(e)?e:xi(e);return r.start(dh("",r,t,n)),r.animation}const Xm=["","X","Y","Z"],JE={visibility:"hidden"},Zm=1e3;let eT=0;const ir={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0};function u1({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:r,resetTransform:i}){return class{constructor(s={},a=t==null?void 0:t()){this.id=eT++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,ir.totalNodes=ir.resolvedTargetDeltas=ir.recalculatedProjection=0,this.nodes.forEach(rT),this.nodes.forEach(lT),this.nodes.forEach(cT),this.nodes.forEach(iT),YE(ir)},this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=s,this.root=a?a.root||a:this,this.path=a?[...a.path,a]:[],this.parent=a,this.depth=a?a.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new KE)}addEventListener(s,a){return this.eventHandlers.has(s)||this.eventHandlers.set(s,new ph),this.eventHandlers.get(s).add(a)}notifyListeners(s,...a){const l=this.eventHandlers.get(s);l&&l.notify(...a)}hasListeners(s){return this.eventHandlers.has(s)}mount(s,a=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=XE(s),this.instance=s;const{layoutId:l,layout:u,visualElement:d}=this.options;if(d&&!d.current&&d.mount(s),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),a&&(u||l)&&(this.isLayoutDirty=!0),e){let f;const h=()=>this.root.updateBlockedByResize=!1;e(s,()=>{this.root.updateBlockedByResize=!0,f&&f(),f=GE(h,250),ga.hasAnimatedSinceResize&&(ga.hasAnimatedSinceResize=!1,this.nodes.forEach(eg))})}l&&this.root.registerSharedNode(l,this),this.options.animate!==!1&&d&&(l||u)&&this.addEventListener("didUpdate",({delta:f,hasLayoutChanged:h,hasRelativeTargetChanged:p,layout:y})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const w=this.options.transition||d.getDefaultTransition()||pT,{onLayoutAnimationStart:S,onLayoutAnimationComplete:m}=d.getProps(),g=!this.targetLayout||!c1(this.targetLayout,y)||p,v=!h&&p;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||v||h&&(g||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(f,v);const b={...uh(w,"layout"),onPlay:S,onComplete:m};(d.shouldReduceMotion||this.options.layoutRoot)&&(b.delay=0,b.type=!1),this.startAnimation(b)}else h||eg(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=y})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const s=this.getStack();s&&s.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,fn(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(uT),this.animationId++)}getTransformTemplate(){const{visualElement:s}=this.options;return s&&s.getProps().transformTemplate}willUpdate(s=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let d=0;d<this.path.length;d++){const f=this.path[d];f.shouldResetTransform=!0,f.updateScroll("snapshot"),f.options.layoutRoot&&f.willUpdate(!1)}const{layoutId:a,layout:l}=this.options;if(a===void 0&&!l)return;const u=this.getTransformTemplate();this.prevTransformTemplateValue=u?u(this.latestValues,""):void 0,this.updateSnapshot(),s&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(Jm);return}this.isUpdating||this.nodes.forEach(sT),this.isUpdating=!1,this.nodes.forEach(aT),this.nodes.forEach(tT),this.nodes.forEach(nT),this.clearAllSnapshots();const a=performance.now();Ne.delta=Bn(0,1e3/60,a-Ne.timestamp),Ne.timestamp=a,Ne.isProcessing=!0,_c.update.process(Ne),_c.preRender.process(Ne),_c.render.process(Ne),Ne.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,queueMicrotask(()=>this.update()))}clearAllSnapshots(){this.nodes.forEach(oT),this.sharedNodes.forEach(dT)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,ie.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){ie.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const s=this.layout;this.layout=this.measure(!1),this.layoutCorrected=we(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:a}=this.options;a&&a.notify("LayoutMeasure",this.layout.layoutBox,s?s.layoutBox:void 0)}updateScroll(s="measure"){let a=!!(this.options.layoutScroll&&this.instance);this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===s&&(a=!1),a&&(this.scroll={animationId:this.root.animationId,phase:s,isRoot:r(this.instance),offset:n(this.instance)})}resetTransform(){if(!i)return;const s=this.isLayoutDirty||this.shouldResetTransform,a=this.projectionDelta&&!l1(this.projectionDelta),l=this.getTransformTemplate(),u=l?l(this.latestValues,""):void 0,d=u!==this.prevTransformTemplateValue;s&&(a||rr(this.latestValues)||d)&&(i(this.instance,u),this.shouldResetTransform=!1,this.scheduleRender())}measure(s=!0){const a=this.measurePageBox();let l=this.removeElementScroll(a);return s&&(l=this.removeTransform(l)),mT(l),{animationId:this.root.animationId,measuredBox:a,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:s}=this.options;if(!s)return we();const a=s.measureViewportBox(),{scroll:l}=this.root;return l&&(Sn(a.x,l.offset.x),Sn(a.y,l.offset.y)),a}removeElementScroll(s){const a=we();mt(a,s);for(let l=0;l<this.path.length;l++){const u=this.path[l],{scroll:d,options:f}=u;if(u!==this.root&&d&&f.layoutScroll){if(d.isRoot){mt(a,s);const{scroll:h}=this.root;h&&(Sn(a.x,-h.offset.x),Sn(a.y,-h.offset.y))}Sn(a.x,d.offset.x),Sn(a.y,d.offset.y)}}return a}applyTransform(s,a=!1){const l=we();mt(l,s);for(let u=0;u<this.path.length;u++){const d=this.path[u];!a&&d.options.layoutScroll&&d.scroll&&d!==d.root&&ri(l,{x:-d.scroll.offset.x,y:-d.scroll.offset.y}),rr(d.latestValues)&&ri(l,d.latestValues)}return rr(this.latestValues)&&ri(l,this.latestValues),l}removeTransform(s){const a=we();mt(a,s);for(let l=0;l<this.path.length;l++){const u=this.path[l];if(!u.instance||!rr(u.latestValues))continue;jd(u.latestValues)&&u.updateSnapshot();const d=we(),f=u.measurePageBox();mt(d,f),qm(a,u.latestValues,u.snapshot?u.snapshot.layoutBox:void 0,d)}return rr(this.latestValues)&&qm(a,this.latestValues),a}setTargetDelta(s){this.targetDelta=s,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(s){this.options={...this.options,...s,crossfade:s.crossfade!==void 0?s.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Ne.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(s=!1){var a;const l=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=l.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=l.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=l.isSharedProjectionDirty);const u=!!this.resumingFrom||this!==l;if(!(s||u&&this.isSharedProjectionDirty||this.isProjectionDirty||!((a=this.parent)===null||a===void 0)&&a.isProjectionDirty||this.attemptToResolveRelativeTarget))return;const{layout:f,layoutId:h}=this.options;if(!(!this.layout||!(f||h))){if(this.resolvedRelativeTargetAt=Ne.timestamp,!this.targetDelta&&!this.relativeTarget){const p=this.getClosestProjectingParent();p&&p.layout&&this.animationProgress!==1?(this.relativeParent=p,this.forceRelativeParentToResolveTarget(),this.relativeTarget=we(),this.relativeTargetOrigin=we(),jo(this.relativeTargetOrigin,this.layout.layoutBox,p.layout.layoutBox),mt(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=we(),this.targetWithTransforms=we()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),gE(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):mt(this.target,this.layout.layoutBox),n1(this.target,this.targetDelta)):mt(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const p=this.getClosestProjectingParent();p&&!!p.resumingFrom==!!this.resumingFrom&&!p.options.layoutScroll&&p.target&&this.animationProgress!==1?(this.relativeParent=p,this.forceRelativeParentToResolveTarget(),this.relativeTarget=we(),this.relativeTargetOrigin=we(),jo(this.relativeTargetOrigin,this.target,p.target),mt(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}ir.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||jd(this.parent.latestValues)||t1(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var s;const a=this.getLead(),l=!!this.resumingFrom||this!==a;let u=!0;if((this.isProjectionDirty||!((s=this.parent)===null||s===void 0)&&s.isProjectionDirty)&&(u=!1),l&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(u=!1),this.resolvedRelativeTargetAt===Ne.timestamp&&(u=!1),u)return;const{layout:d,layoutId:f}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(d||f))return;mt(this.layoutCorrected,this.layout.layoutBox);const h=this.treeScale.x,p=this.treeScale.y;CE(this.layoutCorrected,this.treeScale,this.path,l),a.layout&&!a.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(a.target=a.layout.layoutBox);const{target:y}=a;if(!y){this.projectionTransform&&(this.projectionDelta=ni(),this.projectionTransform="none",this.scheduleRender());return}this.projectionDelta||(this.projectionDelta=ni(),this.projectionDeltaWithTransform=ni());const w=this.projectionTransform;So(this.projectionDelta,this.layoutCorrected,y,this.latestValues),this.projectionTransform=Ym(this.projectionDelta,this.treeScale),(this.projectionTransform!==w||this.treeScale.x!==h||this.treeScale.y!==p)&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",y)),ir.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(s=!0){if(this.options.scheduleRender&&this.options.scheduleRender(),s){const a=this.getStack();a&&a.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}setAnimationOrigin(s,a=!1){const l=this.snapshot,u=l?l.latestValues:{},d={...this.latestValues},f=ni();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!a;const h=we(),p=l?l.source:void 0,y=this.layout?this.layout.source:void 0,w=p!==y,S=this.getStack(),m=!S||S.members.length<=1,g=!!(w&&!m&&this.options.crossfade===!0&&!this.path.some(hT));this.animationProgress=0;let v;this.mixTargetDelta=b=>{const C=b/1e3;tg(f.x,s.x,C),tg(f.y,s.y,C),this.setTargetDelta(f),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(jo(h,this.layout.layoutBox,this.relativeParent.layout.layoutBox),fT(this.relativeTarget,this.relativeTargetOrigin,h,C),v&&WE(this.relativeTarget,v)&&(this.isProjectionDirty=!1),v||(v=we()),mt(v,this.relativeTarget)),w&&(this.animationValues=d,DE(d,u,this.latestValues,C,g,m)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=C},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(s){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(fn(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=ie.update(()=>{ga.hasAnimatedSinceResize=!0,this.currentAnimation=ZE(0,Zm,{...s,onUpdate:a=>{this.mixTargetDelta(a),s.onUpdate&&s.onUpdate(a)},onComplete:()=>{s.onComplete&&s.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const s=this.getStack();s&&s.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(Zm),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const s=this.getLead();let{targetWithTransforms:a,target:l,layout:u,latestValues:d}=s;if(!(!a||!l||!u)){if(this!==s&&this.layout&&u&&d1(this.options.animationType,this.layout.layoutBox,u.layoutBox)){l=this.target||we();const f=ct(this.layout.layoutBox.x);l.x.min=s.target.x.min,l.x.max=l.x.min+f;const h=ct(this.layout.layoutBox.y);l.y.min=s.target.y.min,l.y.max=l.y.min+h}mt(a,l),ri(a,d),So(this.projectionDeltaWithTransform,this.layoutCorrected,a,d)}}registerSharedNode(s,a){this.sharedNodes.has(s)||this.sharedNodes.set(s,new QE),this.sharedNodes.get(s).add(a);const u=a.options.initialPromotionConfig;a.promote({transition:u?u.transition:void 0,preserveFollowOpacity:u&&u.shouldPreserveFollowOpacity?u.shouldPreserveFollowOpacity(a):void 0})}isLead(){const s=this.getStack();return s?s.lead===this:!0}getLead(){var s;const{layoutId:a}=this.options;return a?((s=this.getStack())===null||s===void 0?void 0:s.lead)||this:this}getPrevLead(){var s;const{layoutId:a}=this.options;return a?(s=this.getStack())===null||s===void 0?void 0:s.prevLead:void 0}getStack(){const{layoutId:s}=this.options;if(s)return this.root.sharedNodes.get(s)}promote({needsReset:s,transition:a,preserveFollowOpacity:l}={}){const u=this.getStack();u&&u.promote(this,l),s&&(this.projectionDelta=void 0,this.needsReset=!0),a&&this.setOptions({transition:a})}relegate(){const s=this.getStack();return s?s.relegate(this):!1}resetRotation(){const{visualElement:s}=this.options;if(!s)return;let a=!1;const{latestValues:l}=s;if((l.rotate||l.rotateX||l.rotateY||l.rotateZ)&&(a=!0),!a)return;const u={};for(let d=0;d<Xm.length;d++){const f="rotate"+Xm[d];l[f]&&(u[f]=l[f],s.setStaticValue(f,0))}s.render();for(const d in u)s.setStaticValue(d,u[d]);s.scheduleRender()}getProjectionStyles(s){var a,l;if(!this.instance||this.isSVG)return;if(!this.isVisible)return JE;const u={visibility:""},d=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,u.opacity="",u.pointerEvents=ma(s==null?void 0:s.pointerEvents)||"",u.transform=d?d(this.latestValues,""):"none",u;const f=this.getLead();if(!this.projectionDelta||!this.layout||!f.target){const w={};return this.options.layoutId&&(w.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,w.pointerEvents=ma(s==null?void 0:s.pointerEvents)||""),this.hasProjected&&!rr(this.latestValues)&&(w.transform=d?d({},""):"none",this.hasProjected=!1),w}const h=f.animationValues||f.latestValues;this.applyTransformsToTarget(),u.transform=Ym(this.projectionDeltaWithTransform,this.treeScale,h),d&&(u.transform=d(h,u.transform));const{x:p,y}=this.projectionDelta;u.transformOrigin=`${p.origin*100}% ${y.origin*100}% 0`,f.animationValues?u.opacity=f===this?(l=(a=h.opacity)!==null&&a!==void 0?a:this.latestValues.opacity)!==null&&l!==void 0?l:1:this.preserveOpacity?this.latestValues.opacity:h.opacityExit:u.opacity=f===this?h.opacity!==void 0?h.opacity:"":h.opacityExit!==void 0?h.opacityExit:0;for(const w in sl){if(h[w]===void 0)continue;const{correct:S,applyTo:m}=sl[w],g=u.transform==="none"?h[w]:S(h[w],f);if(m){const v=m.length;for(let b=0;b<v;b++)u[m[b]]=g}else u[w]=g}return this.options.layoutId&&(u.pointerEvents=f===this?ma(s==null?void 0:s.pointerEvents)||"":"none"),u}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(s=>{var a;return(a=s.currentAnimation)===null||a===void 0?void 0:a.stop()}),this.root.nodes.forEach(Jm),this.root.sharedNodes.clear()}}}function tT(e){e.updateLayout()}function nT(e){var t;const n=((t=e.resumeFrom)===null||t===void 0?void 0:t.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&n&&e.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:i}=e.layout,{animationType:o}=e.options,s=n.source!==e.layout.source;o==="size"?gt(f=>{const h=s?n.measuredBox[f]:n.layoutBox[f],p=ct(h);h.min=r[f].min,h.max=h.min+p}):d1(o,n.layoutBox,r)&&gt(f=>{const h=s?n.measuredBox[f]:n.layoutBox[f],p=ct(r[f]);h.max=h.min+p,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[f].max=e.relativeTarget[f].min+p)});const a=ni();So(a,r,n.layoutBox);const l=ni();s?So(l,e.applyTransform(i,!0),n.measuredBox):So(l,r,n.layoutBox);const u=!l1(a);let d=!1;if(!e.resumeFrom){const f=e.getClosestProjectingParent();if(f&&!f.resumeFrom){const{snapshot:h,layout:p}=f;if(h&&p){const y=we();jo(y,n.layoutBox,h.layoutBox);const w=we();jo(w,r,p.layoutBox),c1(y,w)||(d=!0),f.options.layoutRoot&&(e.relativeTarget=w,e.relativeTargetOrigin=y,e.relativeParent=f)}}}e.notifyListeners("didUpdate",{layout:r,snapshot:n,delta:l,layoutDelta:a,hasLayoutChanged:u,hasRelativeTargetChanged:d})}else if(e.isLead()){const{onExitComplete:r}=e.options;r&&r()}e.options.transition=void 0}function rT(e){ir.totalNodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function iT(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function oT(e){e.clearSnapshot()}function Jm(e){e.clearMeasurements()}function sT(e){e.isLayoutDirty=!1}function aT(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function eg(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function lT(e){e.resolveTargetDelta()}function cT(e){e.calcProjection()}function uT(e){e.resetRotation()}function dT(e){e.removeLeadSnapshot()}function tg(e,t,n){e.translate=fe(t.translate,0,n),e.scale=fe(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function ng(e,t,n,r){e.min=fe(t.min,n.min,r),e.max=fe(t.max,n.max,r)}function fT(e,t,n,r){ng(e.x,t.x,n.x,r),ng(e.y,t.y,n.y,r)}function hT(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const pT={duration:.45,ease:[.4,0,.1,1]},rg=e=>typeof navigator<"u"&&navigator.userAgent.toLowerCase().includes(e),ig=rg("applewebkit/")&&!rg("chrome/")?Math.round:ve;function og(e){e.min=ig(e.min),e.max=ig(e.max)}function mT(e){og(e.x),og(e.y)}function d1(e,t,n){return e==="position"||e==="preserve-aspect"&&!bd(Gm(t),Gm(n),.2)}const gT=u1({attachResizeListener:(e,t)=>nn(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Gc={current:void 0},f1=u1({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!Gc.current){const e=new gT({});e.mount(window),e.setOptions({layoutScroll:!0}),Gc.current=e}return Gc.current},resetTransform:(e,t)=>{e.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),vT={pan:{Feature:LE},drag:{Feature:OE,ProjectionNode:f1,MeasureLayout:o1}},yT=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;function xT(e){const t=yT.exec(e);if(!t)return[,];const[,n,r]=t;return[n,r]}function Cd(e,t,n=1){const[r,i]=xT(e);if(!r)return;const o=window.getComputedStyle(t).getPropertyValue(r);if(o){const s=o.trim();return Kx(s)?parseFloat(s):s}else return pd(i)?Cd(i,t,n+1):i}function wT(e,{...t},n){const r=e.current;if(!(r instanceof Element))return{target:t,transitionEnd:n};n&&(n={...n}),e.values.forEach(i=>{const o=i.get();if(!pd(o))return;const s=Cd(o,r);s&&i.set(s)});for(const i in t){const o=t[i];if(!pd(o))continue;const s=Cd(o,r);s&&(t[i]=s,n||(n={}),n[i]===void 0&&(n[i]=o))}return{target:t,transitionEnd:n}}const bT=new Set(["width","height","top","left","right","bottom","x","y","translateX","translateY"]),h1=e=>bT.has(e),ST=e=>Object.keys(e).some(h1),sg=e=>e===Or||e===N,ag=(e,t)=>parseFloat(e.split(", ")[t]),lg=(e,t)=>(n,{transform:r})=>{if(r==="none"||!r)return 0;const i=r.match(/^matrix3d\((.+)\)$/);if(i)return ag(i[1],t);{const o=r.match(/^matrix\((.+)\)$/);return o?ag(o[1],e):0}},jT=new Set(["x","y","z"]),kT=cs.filter(e=>!jT.has(e));function CT(e){const t=[];return kT.forEach(n=>{const r=e.getValue(n);r!==void 0&&(t.push([n,r.get()]),r.set(n.startsWith("scale")?1:0))}),t.length&&e.render(),t}const wi={width:({x:e},{paddingLeft:t="0",paddingRight:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),height:({y:e},{paddingTop:t="0",paddingBottom:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:lg(4,13),y:lg(5,14)};wi.translateX=wi.x;wi.translateY=wi.y;const PT=(e,t,n)=>{const r=t.measureViewportBox(),i=t.current,o=getComputedStyle(i),{display:s}=o,a={};s==="none"&&t.setStaticValue("display",e.display||"block"),n.forEach(u=>{a[u]=wi[u](r,o)}),t.render();const l=t.measureViewportBox();return n.forEach(u=>{const d=t.getValue(u);d&&d.jump(a[u]),e[u]=wi[u](l,o)}),e},ET=(e,t,n={},r={})=>{t={...t},r={...r};const i=Object.keys(t).filter(h1);let o=[],s=!1;const a=[];if(i.forEach(l=>{const u=e.getValue(l);if(!e.hasValue(l))return;let d=n[l],f=Hi(d);const h=t[l];let p;if(ll(h)){const y=h.length,w=h[0]===null?1:0;d=h[w],f=Hi(d);for(let S=w;S<y&&h[S]!==null;S++)p?oh(Hi(h[S])===p):p=Hi(h[S])}else p=Hi(h);if(f!==p)if(sg(f)&&sg(p)){const y=u.get();typeof y=="string"&&u.set(parseFloat(y)),typeof h=="string"?t[l]=parseFloat(h):Array.isArray(h)&&p===N&&(t[l]=h.map(parseFloat))}else f!=null&&f.transform&&(p!=null&&p.transform)&&(d===0||h===0)?d===0?u.set(p.transform(d)):t[l]=f.transform(h):(s||(o=CT(e),s=!0),a.push(l),r[l]=r[l]!==void 0?r[l]:t[l],u.jump(h))}),a.length){const l=a.indexOf("height")>=0?window.pageYOffset:null,u=PT(t,e,a);return o.length&&o.forEach(([d,f])=>{e.getValue(d).set(f)}),e.render(),Hl&&l!==null&&window.scrollTo({top:l}),{target:u,transitionEnd:r}}else return{target:t,transitionEnd:r}};function TT(e,t,n,r){return ST(t)?ET(e,t,n,r):{target:t,transitionEnd:r}}const RT=(e,t,n,r)=>{const i=wT(e,t,r);return t=i.target,r=i.transitionEnd,TT(e,t,n,r)},Pd={current:null},p1={current:!1};function AT(){if(p1.current=!0,!!Hl)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>Pd.current=e.matches;e.addListener(t),t()}else Pd.current=!1}function $T(e,t,n){const{willChange:r}=t;for(const i in t){const o=t[i],s=n[i];if(it(o))e.addValue(i,o),fl(r)&&r.add(i);else if(it(s))e.addValue(i,xi(o,{owner:e})),fl(r)&&r.remove(i);else if(s!==o)if(e.hasValue(i)){const a=e.getValue(i);!a.hasAnimated&&a.set(o)}else{const a=e.getStaticValue(i);e.addValue(i,xi(a!==void 0?a:o,{owner:e}))}}for(const i in n)t[i]===void 0&&e.removeValue(i);return t}const cg=new WeakMap,m1=Object.keys(Qo),OT=m1.length,ug=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"],LT=Yf.length;class FT{constructor({parent:t,props:n,presenceContext:r,reducedMotionConfig:i,visualState:o},s={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.scheduleRender=()=>ie.render(this.render,!1,!0);const{latestValues:a,renderState:l}=o;this.latestValues=a,this.baseTarget={...a},this.initialValues=n.initial?{...a}:{},this.renderState=l,this.parent=t,this.props=n,this.presenceContext=r,this.depth=t?t.depth+1:0,this.reducedMotionConfig=i,this.options=s,this.isControllingVariants=Ql(n),this.isVariantNode=Jy(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:u,...d}=this.scrapeMotionValuesFromProps(n,{});for(const f in d){const h=d[f];a[f]!==void 0&&it(h)&&(h.set(a[f],!1),fl(u)&&u.add(f))}}scrapeMotionValuesFromProps(t,n){return{}}mount(t){this.current=t,cg.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,r)=>this.bindToMotionValue(r,n)),p1.current||AT(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:Pd.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){cg.delete(this.current),this.projection&&this.projection.unmount(),fn(this.notifyUpdate),fn(this.render),this.valueSubscriptions.forEach(t=>t()),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const t in this.events)this.events[t].clear();for(const t in this.features)this.features[t].unmount();this.current=null}bindToMotionValue(t,n){const r=$r.has(t),i=n.on("change",s=>{this.latestValues[t]=s,this.props.onUpdate&&ie.update(this.notifyUpdate,!1,!0),r&&this.projection&&(this.projection.isTransformDirty=!0)}),o=n.on("renderRequest",this.scheduleRender);this.valueSubscriptions.set(t,()=>{i(),o()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}loadFeatures({children:t,...n},r,i,o){let s,a;for(let l=0;l<OT;l++){const u=m1[l],{isEnabled:d,Feature:f,ProjectionNode:h,MeasureLayout:p}=Qo[u];h&&(s=h),d(n)&&(!this.features[u]&&f&&(this.features[u]=new f(this)),p&&(a=p))}if((this.type==="html"||this.type==="svg")&&!this.projection&&s){this.projection=new s(this.latestValues,this.parent&&this.parent.projection);const{layoutId:l,layout:u,drag:d,dragConstraints:f,layoutScroll:h,layoutRoot:p}=n;this.projection.setOptions({layoutId:l,layout:u,alwaysMeasureLayout:!!d||f&&ei(f),visualElement:this,scheduleRender:()=>this.scheduleRender(),animationType:typeof u=="string"?u:"both",initialPromotionConfig:o,layoutScroll:h,layoutRoot:p})}return a}updateFeatures(){for(const t in this.features){const n=this.features[t];n.isMounted?n.update():(n.mount(),n.isMounted=!0)}}triggerBuild(){this.build(this.renderState,this.latestValues,this.options,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):we()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,n){this.latestValues[t]=n}makeTargetAnimatable(t,n=!0){return this.makeTargetAnimatableFromInstance(t,this.props,n)}update(t,n){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let r=0;r<ug.length;r++){const i=ug[r];this.propEventSubscriptions[i]&&(this.propEventSubscriptions[i](),delete this.propEventSubscriptions[i]);const o=t["on"+i];o&&(this.propEventSubscriptions[i]=this.on(i,o))}this.prevMotionValues=$T(this,this.scrapeMotionValuesFromProps(t,this.prevProps),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}getVariantContext(t=!1){if(t)return this.parent?this.parent.getVariantContext():void 0;if(!this.isControllingVariants){const r=this.parent?this.parent.getVariantContext()||{}:{};return this.props.initial!==void 0&&(r.initial=this.props.initial),r}const n={};for(let r=0;r<LT;r++){const i=Yf[r],o=this.props[i];(Wo(o)||o===!1)&&(n[i]=o)}return n}addVariantChild(t){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(t),()=>n.variantChildren.delete(t)}addValue(t,n){n!==this.values.get(t)&&(this.removeValue(t),this.bindToMotionValue(t,n)),this.values.set(t,n),this.latestValues[t]=n.get()}removeValue(t){this.values.delete(t);const n=this.valueSubscriptions.get(t);n&&(n(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,n){if(this.props.values&&this.props.values[t])return this.props.values[t];let r=this.values.get(t);return r===void 0&&n!==void 0&&(r=xi(n,{owner:this}),this.addValue(t,r)),r}readValue(t){var n;return this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:(n=this.getBaseTargetFromProps(this.props,t))!==null&&n!==void 0?n:this.readValueFromInstance(this.current,t,this.options)}setBaseTarget(t,n){this.baseTarget[t]=n}getBaseTarget(t){var n;const{initial:r}=this.props,i=typeof r=="string"||typeof r=="object"?(n=ih(this.props,r))===null||n===void 0?void 0:n[t]:void 0;if(r&&i!==void 0)return i;const o=this.getBaseTargetFromProps(this.props,t);return o!==void 0&&!it(o)?o:this.initialValues[t]!==void 0&&i===void 0?void 0:this.baseTarget[t]}on(t,n){return this.events[t]||(this.events[t]=new ph),this.events[t].add(n)}notify(t,...n){this.events[t]&&this.events[t].notify(...n)}}class g1 extends FT{sortInstanceNodePosition(t,n){return t.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(t,n){return t.style?t.style[n]:void 0}removeValueFromRenderState(t,{vars:n,style:r}){delete n[t],delete r[t]}makeTargetAnimatableFromInstance({transition:t,transitionEnd:n,...r},{transformValues:i},o){let s=XP(r,t||{},this);if(i&&(n&&(n=i(n)),r&&(r=i(r)),s&&(s=i(s))),o){GP(this,r,s);const a=RT(this,r,s,n);n=a.transitionEnd,r=a.target}return{transition:t,transitionEnd:n,...r}}}function MT(e){return window.getComputedStyle(e)}class zT extends g1{constructor(){super(...arguments),this.type="html"}readValueFromInstance(t,n){if($r.has(n)){const r=ch(n);return r&&r.default||0}else{const r=MT(t),i=(rx(n)?r.getPropertyValue(n):r[n])||0;return typeof i=="string"?i.trim():i}}measureInstanceViewportBox(t,{transformPagePoint:n}){return r1(t,n)}build(t,n,r,i){Jf(t,n,r,i.transformTemplate)}scrapeMotionValuesFromProps(t,n){return rh(t,n)}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;it(t)&&(this.childSubscription=t.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}renderInstance(t,n,r,i){cx(t,n,r,i)}}class NT extends g1{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1}getBaseTargetFromProps(t,n){return t[n]}readValueFromInstance(t,n){if($r.has(n)){const r=ch(n);return r&&r.default||0}return n=ux.has(n)?n:Kf(n),t.getAttribute(n)}measureInstanceViewportBox(){return we()}scrapeMotionValuesFromProps(t,n){return fx(t,n)}build(t,n,r,i){th(t,n,r,this.isSVGTag,i.transformTemplate)}renderInstance(t,n,r,i){dx(t,n,r,i)}mount(t){this.isSVGTag=nh(t.tagName),super.mount(t)}}const _T=(e,t)=>Zf(e)?new NT(t,{enableHardwareAcceleration:!1}):new zT(t,{enableHardwareAcceleration:!0}),DT={layout:{ProjectionNode:f1,MeasureLayout:o1}},IT={...fE,...OC,...vT,...DT},_=Vk((e,t)=>xC(e,t,IT,_T));function v1(){const e=j.useRef(!1);return qf(()=>(e.current=!0,()=>{e.current=!1}),[]),e}function VT(){const e=v1(),[t,n]=j.useState(0),r=j.useCallback(()=>{e.current&&n(t+1)},[t]);return[j.useCallback(()=>ie.postRender(r),[r]),t]}class UT extends j.Component{getSnapshotBeforeUpdate(t){const n=this.props.childRef.current;if(n&&t.isPresent&&!this.props.isPresent){const r=this.props.sizeRef.current;r.height=n.offsetHeight||0,r.width=n.offsetWidth||0,r.top=n.offsetTop,r.left=n.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function BT({children:e,isPresent:t}){const n=j.useId(),r=j.useRef(null),i=j.useRef({width:0,height:0,top:0,left:0});return j.useInsertionEffect(()=>{const{width:o,height:s,top:a,left:l}=i.current;if(t||!r.current||!o||!s)return;r.current.dataset.motionPopId=n;const u=document.createElement("style");return document.head.appendChild(u),u.sheet&&u.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${o}px !important;
            height: ${s}px !important;
            top: ${a}px !important;
            left: ${l}px !important;
          }
        `),()=>{document.head.removeChild(u)}},[t]),j.createElement(UT,{isPresent:t,childRef:r,sizeRef:i},j.cloneElement(e,{ref:r}))}const Yc=({children:e,initial:t,isPresent:n,onExitComplete:r,custom:i,presenceAffectsLayout:o,mode:s})=>{const a=hx(HT),l=j.useId(),u=j.useMemo(()=>({id:l,initial:t,isPresent:n,custom:i,onExitComplete:d=>{a.set(d,!0);for(const f of a.values())if(!f)return;r&&r()},register:d=>(a.set(d,!1),()=>a.delete(d))}),o?void 0:[n]);return j.useMemo(()=>{a.forEach((d,f)=>a.set(f,!1))},[n]),j.useEffect(()=>{!n&&!a.size&&r&&r()},[n]),s==="popLayout"&&(e=j.createElement(BT,{isPresent:n},e)),j.createElement(Bl.Provider,{value:u},e)};function HT(){return new Map}function WT(e){return j.useEffect(()=>()=>e(),[])}const or=e=>e.key||"";function QT(e,t){e.forEach(n=>{const r=or(n);t.set(r,n)})}function qT(e){const t=[];return j.Children.forEach(e,n=>{j.isValidElement(n)&&t.push(n)}),t}const Wn=({children:e,custom:t,initial:n=!0,onExitComplete:r,exitBeforeEnter:i,presenceAffectsLayout:o=!0,mode:s="sync"})=>{const a=j.useContext(Xf).forceRender||VT()[0],l=v1(),u=qT(e);let d=u;const f=j.useRef(new Map).current,h=j.useRef(d),p=j.useRef(new Map).current,y=j.useRef(!0);if(qf(()=>{y.current=!1,QT(u,p),h.current=d}),WT(()=>{y.current=!0,p.clear(),f.clear()}),y.current)return j.createElement(j.Fragment,null,d.map(g=>j.createElement(Yc,{key:or(g),isPresent:!0,initial:n?void 0:!1,presenceAffectsLayout:o,mode:s},g)));d=[...d];const w=h.current.map(or),S=u.map(or),m=w.length;for(let g=0;g<m;g++){const v=w[g];S.indexOf(v)===-1&&!f.has(v)&&f.set(v,void 0)}return s==="wait"&&f.size&&(d=[]),f.forEach((g,v)=>{if(S.indexOf(v)!==-1)return;const b=p.get(v);if(!b)return;const C=w.indexOf(v);let P=g;if(!P){const k=()=>{f.delete(v);const T=Array.from(p.keys()).filter(O=>!S.includes(O));if(T.forEach(O=>p.delete(O)),h.current=u.filter(O=>{const F=or(O);return F===v||T.includes(F)}),!f.size){if(l.current===!1)return;a(),r&&r()}};P=j.createElement(Yc,{key:or(b),isPresent:!1,onExitComplete:k,custom:t,presenceAffectsLayout:o,mode:s},b),f.set(v,P)}d.splice(C,0,P)}),d=d.map(g=>{const v=g.key;return f.has(v)?g:j.createElement(Yc,{key:or(g),isPresent:!0,presenceAffectsLayout:o,mode:s},g)}),j.createElement(j.Fragment,null,f.size?d:d.map(g=>j.cloneElement(g)))};var Ve=function(){return Ve=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},Ve.apply(this,arguments)};function Ko(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}var se="-ms-",ko="-moz-",Z="-webkit-",y1="comm",Yl="rule",mh="decl",KT="@import",x1="@keyframes",GT="@layer",w1=Math.abs,gh=String.fromCharCode,Ed=Object.assign;function YT(e,t){return Ae(e,0)^45?(((t<<2^Ae(e,0))<<2^Ae(e,1))<<2^Ae(e,2))<<2^Ae(e,3):0}function b1(e){return e.trim()}function Xt(e,t){return(e=t.exec(e))?e[0]:e}function U(e,t,n){return e.replace(t,n)}function va(e,t,n){return e.indexOf(t,n)}function Ae(e,t){return e.charCodeAt(t)|0}function bi(e,t,n){return e.slice(t,n)}function Ut(e){return e.length}function S1(e){return e.length}function ao(e,t){return t.push(e),e}function XT(e,t){return e.map(t).join("")}function dg(e,t){return e.filter(function(n){return!Xt(n,t)})}var Xl=1,Si=1,j1=0,Ct=0,Se=0,Oi="";function Zl(e,t,n,r,i,o,s,a){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:Xl,column:Si,length:s,return:"",siblings:a}}function yn(e,t){return Ed(Zl("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Mr(e){for(;e.root;)e=yn(e.root,{children:[e]});ao(e,e.siblings)}function ZT(){return Se}function JT(){return Se=Ct>0?Ae(Oi,--Ct):0,Si--,Se===10&&(Si=1,Xl--),Se}function Ft(){return Se=Ct<j1?Ae(Oi,Ct++):0,Si++,Se===10&&(Si=1,Xl++),Se}function vr(){return Ae(Oi,Ct)}function ya(){return Ct}function Jl(e,t){return bi(Oi,e,t)}function Td(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function eR(e){return Xl=Si=1,j1=Ut(Oi=e),Ct=0,[]}function tR(e){return Oi="",e}function Xc(e){return b1(Jl(Ct-1,Rd(e===91?e+2:e===40?e+1:e)))}function nR(e){for(;(Se=vr())&&Se<33;)Ft();return Td(e)>2||Td(Se)>3?"":" "}function rR(e,t){for(;--t&&Ft()&&!(Se<48||Se>102||Se>57&&Se<65||Se>70&&Se<97););return Jl(e,ya()+(t<6&&vr()==32&&Ft()==32))}function Rd(e){for(;Ft();)switch(Se){case e:return Ct;case 34:case 39:e!==34&&e!==39&&Rd(Se);break;case 40:e===41&&Rd(e);break;case 92:Ft();break}return Ct}function iR(e,t){for(;Ft()&&e+Se!==47+10;)if(e+Se===42+42&&vr()===47)break;return"/*"+Jl(t,Ct-1)+"*"+gh(e===47?e:Ft())}function oR(e){for(;!Td(vr());)Ft();return Jl(e,Ct)}function sR(e){return tR(xa("",null,null,null,[""],e=eR(e),0,[0],e))}function xa(e,t,n,r,i,o,s,a,l){for(var u=0,d=0,f=s,h=0,p=0,y=0,w=1,S=1,m=1,g=0,v="",b=i,C=o,P=r,k=v;S;)switch(y=g,g=Ft()){case 40:if(y!=108&&Ae(k,f-1)==58){va(k+=U(Xc(g),"&","&\f"),"&\f",w1(u?a[u-1]:0))!=-1&&(m=-1);break}case 34:case 39:case 91:k+=Xc(g);break;case 9:case 10:case 13:case 32:k+=nR(y);break;case 92:k+=rR(ya()-1,7);continue;case 47:switch(vr()){case 42:case 47:ao(aR(iR(Ft(),ya()),t,n,l),l);break;default:k+="/"}break;case 123*w:a[u++]=Ut(k)*m;case 125*w:case 59:case 0:switch(g){case 0:case 125:S=0;case 59+d:m==-1&&(k=U(k,/\f/g,"")),p>0&&Ut(k)-f&&ao(p>32?hg(k+";",r,n,f-1,l):hg(U(k," ","")+";",r,n,f-2,l),l);break;case 59:k+=";";default:if(ao(P=fg(k,t,n,u,d,i,a,v,b=[],C=[],f,o),o),g===123)if(d===0)xa(k,t,P,P,b,o,f,a,C);else switch(h===99&&Ae(k,3)===110?100:h){case 100:case 108:case 109:case 115:xa(e,P,P,r&&ao(fg(e,P,P,0,0,i,a,v,i,b=[],f,C),C),i,C,f,a,r?b:C);break;default:xa(k,P,P,P,[""],C,0,a,C)}}u=d=p=0,w=m=1,v=k="",f=s;break;case 58:f=1+Ut(k),p=y;default:if(w<1){if(g==123)--w;else if(g==125&&w++==0&&JT()==125)continue}switch(k+=gh(g),g*w){case 38:m=d>0?1:(k+="\f",-1);break;case 44:a[u++]=(Ut(k)-1)*m,m=1;break;case 64:vr()===45&&(k+=Xc(Ft())),h=vr(),d=f=Ut(v=k+=oR(ya())),g++;break;case 45:y===45&&Ut(k)==2&&(w=0)}}return o}function fg(e,t,n,r,i,o,s,a,l,u,d,f){for(var h=i-1,p=i===0?o:[""],y=S1(p),w=0,S=0,m=0;w<r;++w)for(var g=0,v=bi(e,h+1,h=w1(S=s[w])),b=e;g<y;++g)(b=b1(S>0?p[g]+" "+v:U(v,/&\f/g,p[g])))&&(l[m++]=b);return Zl(e,t,n,i===0?Yl:a,l,u,d,f)}function aR(e,t,n,r){return Zl(e,t,n,y1,gh(ZT()),bi(e,2,-2),0,r)}function hg(e,t,n,r,i){return Zl(e,t,n,mh,bi(e,0,r),bi(e,r+1,-1),r,i)}function k1(e,t,n){switch(YT(e,t)){case 5103:return Z+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Z+e+e;case 4789:return ko+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return Z+e+ko+e+se+e+e;case 5936:switch(Ae(e,t+11)){case 114:return Z+e+se+U(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return Z+e+se+U(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return Z+e+se+U(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return Z+e+se+e+e;case 6165:return Z+e+se+"flex-"+e+e;case 5187:return Z+e+U(e,/(\w+).+(:[^]+)/,Z+"box-$1$2"+se+"flex-$1$2")+e;case 5443:return Z+e+se+"flex-item-"+U(e,/flex-|-self/g,"")+(Xt(e,/flex-|baseline/)?"":se+"grid-row-"+U(e,/flex-|-self/g,""))+e;case 4675:return Z+e+se+"flex-line-pack"+U(e,/align-content|flex-|-self/g,"")+e;case 5548:return Z+e+se+U(e,"shrink","negative")+e;case 5292:return Z+e+se+U(e,"basis","preferred-size")+e;case 6060:return Z+"box-"+U(e,"-grow","")+Z+e+se+U(e,"grow","positive")+e;case 4554:return Z+U(e,/([^-])(transform)/g,"$1"+Z+"$2")+e;case 6187:return U(U(U(e,/(zoom-|grab)/,Z+"$1"),/(image-set)/,Z+"$1"),e,"")+e;case 5495:case 3959:return U(e,/(image-set\([^]*)/,Z+"$1$`$1");case 4968:return U(U(e,/(.+:)(flex-)?(.*)/,Z+"box-pack:$3"+se+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Z+e+e;case 4200:if(!Xt(e,/flex-|baseline/))return se+"grid-column-align"+bi(e,t)+e;break;case 2592:case 3360:return se+U(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,Xt(r.props,/grid-\w+-end/)})?~va(e+(n=n[t].value),"span",0)?e:se+U(e,"-start","")+e+se+"grid-row-span:"+(~va(n,"span",0)?Xt(n,/\d+/):+Xt(n,/\d+/)-+Xt(e,/\d+/))+";":se+U(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return Xt(r.props,/grid-\w+-start/)})?e:se+U(U(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return U(e,/(.+)-inline(.+)/,Z+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Ut(e)-1-t>6)switch(Ae(e,t+1)){case 109:if(Ae(e,t+4)!==45)break;case 102:return U(e,/(.+:)(.+)-([^]+)/,"$1"+Z+"$2-$3$1"+ko+(Ae(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~va(e,"stretch",0)?k1(U(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return U(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,s,a,l,u){return se+i+":"+o+u+(s?se+i+"-span:"+(a?l:+l-+o)+u:"")+e});case 4949:if(Ae(e,t+6)===121)return U(e,":",":"+Z)+e;break;case 6444:switch(Ae(e,Ae(e,14)===45?18:11)){case 120:return U(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Z+(Ae(e,14)===45?"inline-":"")+"box$3$1"+Z+"$2$3$1"+se+"$2box$3")+e;case 100:return U(e,":",":"+se)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return U(e,"scroll-","scroll-snap-")+e}return e}function pl(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function lR(e,t,n,r){switch(e.type){case GT:if(e.children.length)break;case KT:case mh:return e.return=e.return||e.value;case y1:return"";case x1:return e.return=e.value+"{"+pl(e.children,r)+"}";case Yl:if(!Ut(e.value=e.props.join(",")))return""}return Ut(n=pl(e.children,r))?e.return=e.value+"{"+n+"}":""}function cR(e){var t=S1(e);return function(n,r,i,o){for(var s="",a=0;a<t;a++)s+=e[a](n,r,i,o)||"";return s}}function uR(e){return function(t){t.root||(t=t.return)&&e(t)}}function dR(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case mh:e.return=k1(e.value,e.length,n);return;case x1:return pl([yn(e,{value:U(e.value,"@","@"+Z)})],r);case Yl:if(e.length)return XT(n=e.props,function(i){switch(Xt(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Mr(yn(e,{props:[U(i,/:(read-\w+)/,":"+ko+"$1")]})),Mr(yn(e,{props:[i]})),Ed(e,{props:dg(n,r)});break;case"::placeholder":Mr(yn(e,{props:[U(i,/:(plac\w+)/,":"+Z+"input-$1")]})),Mr(yn(e,{props:[U(i,/:(plac\w+)/,":"+ko+"$1")]})),Mr(yn(e,{props:[U(i,/:(plac\w+)/,se+"input-$1")]})),Mr(yn(e,{props:[i]})),Ed(e,{props:dg(n,r)});break}return""})}}var fR={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},ji=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",C1="active",P1="data-styled-version",ec="6.1.19",vh=`/*!sc*/
`,ml=typeof window<"u"&&typeof document<"u",hR=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),tc=Object.freeze([]),ki=Object.freeze({});function pR(e,t,n){return n===void 0&&(n=ki),e.theme!==n.theme&&e.theme||t||n.theme}var E1=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),mR=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,gR=/(^-|-$)/g;function pg(e){return e.replace(mR,"-").replace(gR,"")}var vR=/(a)(d)/gi,Is=52,mg=function(e){return String.fromCharCode(e+(e>25?39:97))};function Ad(e){var t,n="";for(t=Math.abs(e);t>Is;t=t/Is|0)n=mg(t%Is)+n;return(mg(t%Is)+n).replace(vR,"$1-$2")}var Zc,T1=5381,ii=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},R1=function(e){return ii(T1,e)};function A1(e){return Ad(R1(e)>>>0)}function yR(e){return e.displayName||e.name||"Component"}function Jc(e){return typeof e=="string"&&!0}var $1=typeof Symbol=="function"&&Symbol.for,O1=$1?Symbol.for("react.memo"):60115,xR=$1?Symbol.for("react.forward_ref"):60112,wR={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},bR={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},L1={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},SR=((Zc={})[xR]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Zc[O1]=L1,Zc);function gg(e){return("type"in(t=e)&&t.type.$$typeof)===O1?L1:"$$typeof"in e?SR[e.$$typeof]:wR;var t}var jR=Object.defineProperty,kR=Object.getOwnPropertyNames,vg=Object.getOwnPropertySymbols,CR=Object.getOwnPropertyDescriptor,PR=Object.getPrototypeOf,yg=Object.prototype;function F1(e,t,n){if(typeof t!="string"){if(yg){var r=PR(t);r&&r!==yg&&F1(e,r,n)}var i=kR(t);vg&&(i=i.concat(vg(t)));for(var o=gg(e),s=gg(t),a=0;a<i.length;++a){var l=i[a];if(!(l in bR||n&&n[l]||s&&l in s||o&&l in o)){var u=CR(t,l);try{jR(e,l,u)}catch{}}}}return e}function kr(e){return typeof e=="function"}function yh(e){return typeof e=="object"&&"styledComponentId"in e}function hr(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function $d(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function Go(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Od(e,t,n){if(n===void 0&&(n=!1),!n&&!Go(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Od(e[r],t[r]);else if(Go(t))for(var r in t)e[r]=Od(e[r],t[r]);return e}function xh(e,t){Object.defineProperty(e,"toString",{value:t})}function Cr(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var ER=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;t>=o;)if((o<<=1)<0)throw Cr(16,"".concat(t));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var s=i;s<o;s++)this.groupSizes[s]=0}for(var a=this.indexOfGroup(t+1),l=(s=0,n.length);s<l;s++)this.tag.insertRule(a,n[s])&&(this.groupSizes[t]++,a++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),o=i+r,s=i;s<o;s++)n+="".concat(this.tag.getRule(s)).concat(vh);return n},e}(),wa=new Map,gl=new Map,ba=1,Vs=function(e){if(wa.has(e))return wa.get(e);for(;gl.has(ba);)ba++;var t=ba++;return wa.set(e,t),gl.set(t,e),t},TR=function(e,t){ba=t+1,wa.set(e,t),gl.set(t,e)},RR="style[".concat(ji,"][").concat(P1,'="').concat(ec,'"]'),AR=new RegExp("^".concat(ji,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),$R=function(e,t,n){for(var r,i=n.split(","),o=0,s=i.length;o<s;o++)(r=i[o])&&e.registerName(t,r)},OR=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(vh),i=[],o=0,s=r.length;o<s;o++){var a=r[o].trim();if(a){var l=a.match(AR);if(l){var u=0|parseInt(l[1],10),d=l[2];u!==0&&(TR(d,u),$R(e,d,l[3]),e.getTag().insertRules(u,i)),i.length=0}else i.push(a)}}},xg=function(e){for(var t=document.querySelectorAll(RR),n=0,r=t.length;n<r;n++){var i=t[n];i&&i.getAttribute(ji)!==C1&&(OR(e,i),i.parentNode&&i.parentNode.removeChild(i))}};function LR(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var M1=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(a){var l=Array.from(a.querySelectorAll("style[".concat(ji,"]")));return l[l.length-1]}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(ji,C1),r.setAttribute(P1,ec);var s=LR();return s&&r.setAttribute("nonce",s),n.insertBefore(r,o),r},FR=function(){function e(t){this.element=M1(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,o=r.length;i<o;i++){var s=r[i];if(s.ownerNode===n)return s}throw Cr(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),MR=function(){function e(t){this.element=M1(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),zR=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),wg=ml,NR={isServer:!ml,useCSSOMInjection:!hR},z1=function(){function e(t,n,r){t===void 0&&(t=ki),n===void 0&&(n={});var i=this;this.options=Ve(Ve({},NR),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&ml&&wg&&(wg=!1,xg(this)),xh(this,function(){return function(o){for(var s=o.getTag(),a=s.length,l="",u=function(f){var h=function(m){return gl.get(m)}(f);if(h===void 0)return"continue";var p=o.names.get(h),y=s.getGroup(f);if(p===void 0||!p.size||y.length===0)return"continue";var w="".concat(ji,".g").concat(f,'[id="').concat(h,'"]'),S="";p!==void 0&&p.forEach(function(m){m.length>0&&(S+="".concat(m,","))}),l+="".concat(y).concat(w,'{content:"').concat(S,'"}').concat(vh)},d=0;d<a;d++)u(d);return l}(i)})}return e.registerId=function(t){return Vs(t)},e.prototype.rehydrate=function(){!this.server&&ml&&xg(this)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(Ve(Ve({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new zR(i):r?new FR(i):new MR(i)}(this.options),new ER(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(Vs(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(Vs(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Vs(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),_R=/&/g,DR=/^\s*\/\/.*$/gm;function N1(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=N1(n.children,t)),n})}function IR(e){var t,n,r,i=e===void 0?ki:e,o=i.options,s=o===void 0?ki:o,a=i.plugins,l=a===void 0?tc:a,u=function(h,p,y){return y.startsWith(n)&&y.endsWith(n)&&y.replaceAll(n,"").length>0?".".concat(t):h},d=l.slice();d.push(function(h){h.type===Yl&&h.value.includes("&")&&(h.props[0]=h.props[0].replace(_R,n).replace(r,u))}),s.prefix&&d.push(dR),d.push(lR);var f=function(h,p,y,w){p===void 0&&(p=""),y===void 0&&(y=""),w===void 0&&(w="&"),t=w,n=p,r=new RegExp("\\".concat(n,"\\b"),"g");var S=h.replace(DR,""),m=sR(y||p?"".concat(y," ").concat(p," { ").concat(S," }"):S);s.namespace&&(m=N1(m,s.namespace));var g=[];return pl(m,cR(d.concat(uR(function(v){return g.push(v)})))),g};return f.hash=l.length?l.reduce(function(h,p){return p.name||Cr(15),ii(h,p.name)},T1).toString():"",f}var VR=new z1,Ld=IR(),_1=B.createContext({shouldForwardProp:void 0,styleSheet:VR,stylis:Ld});_1.Consumer;B.createContext(void 0);function bg(){return j.useContext(_1)}var D1=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=Ld);var s=r.name+o.hash;i.hasNameForId(r.id,s)||i.insertRules(r.id,s,o(r.rules,s,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,xh(this,function(){throw Cr(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Ld),this.name+t.hash},e}(),UR=function(e){return e>="A"&&e<="Z"};function Sg(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;UR(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var I1=function(e){return e==null||e===!1||e===""},V1=function(e){var t,n,r=[];for(var i in e){var o=e[i];e.hasOwnProperty(i)&&!I1(o)&&(Array.isArray(o)&&o.isCss||kr(o)?r.push("".concat(Sg(i),":"),o,";"):Go(o)?r.push.apply(r,Ko(Ko(["".concat(i," {")],V1(o),!1),["}"],!1)):r.push("".concat(Sg(i),": ").concat((t=i,(n=o)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in fR||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function yr(e,t,n,r){if(I1(e))return[];if(yh(e))return[".".concat(e.styledComponentId)];if(kr(e)){if(!kr(o=e)||o.prototype&&o.prototype.isReactComponent||!t)return[e];var i=e(t);return yr(i,t,n,r)}var o;return e instanceof D1?n?(e.inject(n,r),[e.getName(r)]):[e]:Go(e)?V1(e):Array.isArray(e)?Array.prototype.concat.apply(tc,e.map(function(s){return yr(s,t,n,r)})):[e.toString()]}function BR(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(kr(n)&&!yh(n))return!1}return!0}var HR=R1(ec),WR=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&BR(t),this.componentId=n,this.baseHash=ii(HR,n),this.baseStyle=r,z1.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=hr(i,this.staticRulesId);else{var o=$d(yr(this.rules,t,n,r)),s=Ad(ii(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,s)){var a=r(o,".".concat(s),void 0,this.componentId);n.insertRules(this.componentId,s,a)}i=hr(i,s),this.staticRulesId=s}else{for(var l=ii(this.baseHash,r.hash),u="",d=0;d<this.rules.length;d++){var f=this.rules[d];if(typeof f=="string")u+=f;else if(f){var h=$d(yr(f,t,n,r));l=ii(l,h+d),u+=h}}if(u){var p=Ad(l>>>0);n.hasNameForId(this.componentId,p)||n.insertRules(this.componentId,p,r(u,".".concat(p),void 0,this.componentId)),i=hr(i,p)}}return i},e}(),vl=B.createContext(void 0);vl.Consumer;function QR(e){var t=B.useContext(vl),n=j.useMemo(function(){return function(r,i){if(!r)throw Cr(14);if(kr(r)){var o=r(i);return o}if(Array.isArray(r)||typeof r!="object")throw Cr(8);return i?Ve(Ve({},i),r):r}(e.theme,t)},[e.theme,t]);return e.children?B.createElement(vl.Provider,{value:n},e.children):null}var eu={};function qR(e,t,n){var r=yh(e),i=e,o=!Jc(e),s=t.attrs,a=s===void 0?tc:s,l=t.componentId,u=l===void 0?function(b,C){var P=typeof b!="string"?"sc":pg(b);eu[P]=(eu[P]||0)+1;var k="".concat(P,"-").concat(A1(ec+P+eu[P]));return C?"".concat(C,"-").concat(k):k}(t.displayName,t.parentComponentId):l,d=t.displayName,f=d===void 0?function(b){return Jc(b)?"styled.".concat(b):"Styled(".concat(yR(b),")")}(e):d,h=t.displayName&&t.componentId?"".concat(pg(t.displayName),"-").concat(t.componentId):t.componentId||u,p=r&&i.attrs?i.attrs.concat(a).filter(Boolean):a,y=t.shouldForwardProp;if(r&&i.shouldForwardProp){var w=i.shouldForwardProp;if(t.shouldForwardProp){var S=t.shouldForwardProp;y=function(b,C){return w(b,C)&&S(b,C)}}else y=w}var m=new WR(n,h,r?i.componentStyle:void 0);function g(b,C){return function(P,k,T){var O=P.attrs,F=P.componentStyle,ne=P.defaultProps,X=P.foldedComponentIds,ee=P.styledComponentId,G=P.target,Ce=B.useContext(vl),W=bg(),le=P.shouldForwardProp||W.shouldForwardProp,A=pR(k,Ce,ne)||ki,$=function(Pt,Pe,ft){for(var Zn,Et=Ve(Ve({},Pe),{className:void 0,theme:ft}),mn=0;mn<Pt.length;mn+=1){var ht=kr(Zn=Pt[mn])?Zn(Et):Zn;for(var Kt in ht)Et[Kt]=Kt==="className"?hr(Et[Kt],ht[Kt]):Kt==="style"?Ve(Ve({},Et[Kt]),ht[Kt]):ht[Kt]}return Pe.className&&(Et.className=hr(Et.className,Pe.className)),Et}(O,k,A),z=$.as||G,M={};for(var Q in $)$[Q]===void 0||Q[0]==="$"||Q==="as"||Q==="theme"&&$.theme===A||(Q==="forwardedAs"?M.as=$.forwardedAs:le&&!le(Q,z)||(M[Q]=$[Q]));var _t=function(Pt,Pe){var ft=bg(),Zn=Pt.generateAndInjectStyles(Pe,ft.styleSheet,ft.stylis);return Zn}(F,$),Ye=hr(X,ee);return _t&&(Ye+=" "+_t),$.className&&(Ye+=" "+$.className),M[Jc(z)&&!E1.has(z)?"class":"className"]=Ye,T&&(M.ref=T),j.createElement(z,M)}(v,b,C)}g.displayName=f;var v=B.forwardRef(g);return v.attrs=p,v.componentStyle=m,v.displayName=f,v.shouldForwardProp=y,v.foldedComponentIds=r?hr(i.foldedComponentIds,i.styledComponentId):"",v.styledComponentId=h,v.target=r?i.target:e,Object.defineProperty(v,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(b){this._foldedDefaultProps=r?function(C){for(var P=[],k=1;k<arguments.length;k++)P[k-1]=arguments[k];for(var T=0,O=P;T<O.length;T++)Od(C,O[T],!0);return C}({},i.defaultProps,b):b}}),xh(v,function(){return".".concat(v.styledComponentId)}),o&&F1(v,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),v}function jg(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var kg=function(e){return Object.assign(e,{isCss:!0})};function Be(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(kr(e)||Go(e))return kg(yr(jg(tc,Ko([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?yr(r):kg(yr(jg(r,t)))}function Fd(e,t,n){if(n===void 0&&(n=ki),!t)throw Cr(1,t);var r=function(i){for(var o=[],s=1;s<arguments.length;s++)o[s-1]=arguments[s];return e(t,n,Be.apply(void 0,Ko([i],o,!1)))};return r.attrs=function(i){return Fd(e,t,Ve(Ve({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return Fd(e,t,Ve(Ve({},n),i))},r}var U1=function(e){return Fd(qR,e)},x=U1;E1.forEach(function(e){x[e]=U1(e)});function wh(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=$d(Be.apply(void 0,Ko([e],t,!1))),i=A1(r);return new D1(i,r)}var KR={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const GR=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),YR=(e,t)=>{const n=j.forwardRef(({color:r="currentColor",size:i=24,strokeWidth:o=2,absoluteStrokeWidth:s,children:a,...l},u)=>j.createElement("svg",{ref:u,...KR,width:i,height:i,stroke:r,strokeWidth:s?Number(o)*24/Number(i):o,className:`lucide lucide-${GR(e)}`,...l},[...t.map(([d,f])=>j.createElement(d,f)),...(Array.isArray(a)?a:[a])||[]]));return n.displayName=`${e}`,n};var V=YR;const XR=V("Activity",[["path",{d:"M22 12h-4l-3 9L9 3l-3 9H2",key:"d5dnw9"}]]),jn=V("AlertCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]),Cg=V("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]),Us=V("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]),Ci=V("Award",[["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}],["path",{d:"M15.477 12.89 17 22l-5-3-5 3 1.523-9.11",key:"em7aur"}]]),Pg=V("BarChart3",[["path",{d:"M3 3v18h18",key:"1s2lah"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]),bt=V("BookOpen",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}]]),ZR=V("Camera",[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]),xt=V("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["polyline",{points:"22 4 12 14.01 9 11.01",key:"6xbx8j"}]]),JR=V("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]),Yo=V("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]),yl=V("EyeOff",[["path",{d:"M9.88 9.88a3 3 0 1 0 4.24 4.24",key:"1jxqfv"}],["path",{d:"M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",key:"9wicm4"}],["path",{d:"M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",key:"1jreej"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]),Xo=V("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]),bh=V("Facebook",[["path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",key:"1jg4f8"}]]),Md=V("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"2",x2:"22",y1:"12",y2:"12",key:"1dnqot"}],["path",{d:"M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z",key:"nb9nel"}]]),zd=V("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]),Sh=V("Instagram",[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]]),e3=V("Loader2",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]),Nd=V("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]),_d=V("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]),Li=V("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]),jh=V("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]),t3=V("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]),Eg=V("Package",[["path",{d:"M16.5 9.4 7.55 4.24",key:"10qotr"}],["path",{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z",key:"yt0hxn"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12",key:"a4e8g8"}]]),n3=V("PenSquare",[["path",{d:"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1qinfi"}],["path",{d:"M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4Z",key:"w2jsv5"}]]),xl=V("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]),Tg=V("PieChart",[["path",{d:"M21.21 15.89A10 10 0 1 1 8 2.83",key:"k2fpak"}],["path",{d:"M22 12A10 10 0 0 0 12 2v10z",key:"1rfc4y"}]]),kh=V("Play",[["polygon",{points:"5 3 19 12 5 21 5 3",key:"191637"}]]),r3=V("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]),i3=V("Save",[["path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z",key:"1owoqh"}],["polyline",{points:"17 21 17 13 7 13 7 21",key:"1md35c"}],["polyline",{points:"7 3 7 8 15 8",key:"8nz8an"}]]),Ch=V("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]),o3=V("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]),s3=V("Shield",[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",key:"3xmgem"}]]),a3=V("ShoppingCart",[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]]),Pr=V("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]),B1=V("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]),l3=V("Twitter",[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]]),Zo=V("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]),hs=V("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]),c3=V("XCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]),u3=V("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),d3=x.section`
  background: linear-gradient(135deg, var(--color-background) 0%, var(--color-background-secondary) 100%);
  padding: var(--spacing-xxl) 0;
  text-align: center;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="petals" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse"><circle cx="10" cy="10" r="2" fill="%23E6E6FA" opacity="0.3"/></pattern></defs><rect width="100" height="100" fill="url(%23petals)"/></svg>');
    opacity: 0.5;
  }
`,f3=x.div`
  position: relative;
  z-index: 1;
  max-width: 800px;
  margin: 0 auto;
  padding: 0 var(--spacing-md);
`,h3=x(_.h1)`
  font-size: 3.5rem;
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: var(--spacing-lg);
  line-height: 1.2;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`,p3=x(_.p)`
  font-size: 1.25rem;
  color: var(--color-text-light);
  margin-bottom: var(--spacing-xl);
  line-height: 1.6;
`,m3=x(_(ue))`
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-sm);
  padding: var(--spacing-md) var(--spacing-xl);
  background: var(--color-primary);
  color: white;
  text-decoration: none;
  border-radius: var(--border-radius-lg);
  font-weight: 600;
  font-size: 1.125rem;
  transition: var(--transition-fast);
  box-shadow: var(--shadow-md);
  
  &:hover {
    background: var(--color-hover-primary);
    transform: translateY(-2px);
    box-shadow: var(--shadow-lg);
  }
`,g3=x.section`
  padding: var(--spacing-xxl) 0;
  background: white;
`,v3=x.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-xl);
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-md);
`,y3=x(_.div)`
  background: var(--color-background);
  padding: var(--spacing-xl);
  border-radius: var(--border-radius-lg);
  text-align: center;
  box-shadow: var(--shadow-sm);
  transition: var(--transition-normal);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-lg);
  }
`,x3=x.div`
  width: 80px;
  height: 80px;
  background: var(--color-primary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto var(--spacing-lg);
  color: white;
`,w3=x.section`
  padding: var(--spacing-xxl) 0;
  background: var(--color-background-secondary);
`,b3=x.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--spacing-xl);
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-md);
  text-align: center;
`,S3=x(_.div)`
  h3 {
    font-size: 2.5rem;
    color: var(--color-primary);
    margin-bottom: var(--spacing-sm);
  }
  
  p {
    color: var(--color-text-light);
    font-size: 1.125rem;
  }
`,j3=x.section`
  padding: var(--spacing-xxl) 0;
  background: white;
`,Rg=x.h2`
  text-align: center;
  font-size: 2.5rem;
  color: var(--color-text);
  margin-bottom: var(--spacing-xl);
`,k3=x.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: var(--spacing-xl);
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-md);
`,C3=x(_.div)`
  background: var(--color-background);
  border-radius: var(--border-radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  transition: var(--transition-normal);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-lg);
  }
`,P3=x.div`
  height: 200px;
  background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
  font-weight: 600;
`,E3=x.div`
  padding: var(--spacing-lg);
`,T3=x.h3`
  color: var(--color-text);
  margin-bottom: var(--spacing-sm);
`,R3=x.p`
  color: var(--color-text-light);
  margin-bottom: var(--spacing-md);
`,A3=x.div`
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--color-primary);
  margin-bottom: var(--spacing-md);
`,$3=x(ue)`
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-sm);
  color: var(--color-primary);
  text-decoration: none;
  font-weight: 500;
  transition: var(--transition-fast);
  
  &:hover {
    color: var(--color-hover-primary);
    gap: var(--spacing-md);
  }
`,O3=()=>{const e=[{icon:c.jsx(bt,{size:32}),title:"Профессиональные курсы",description:"Изучайте флористику с ведущими экспертами отрасли"},{icon:c.jsx(hs,{size:32}),title:"Сообщество",description:"Присоединяйтесь к сообществу флористов и делитесь опытом"},{icon:c.jsx(Ci,{size:32}),title:"Сертификация",description:"Получите сертификат по окончании курса"}],t=[{number:"1000+",label:"Студентов"},{number:"50+",label:"Курсов"},{number:"20+",label:"Преподавателей"},{number:"95%",label:"Довольных клиентов"}],n=[{title:"Профессия флорист",description:"Базовый курс для начинающих флористов",price:"29,900 ₽",image:"🌺"},{title:"Флорист-дизайнер",description:"Продвинутый курс для создания уникальных композиций",price:"39,900 ₽",image:"🌸"},{title:"Свадебная флористика",description:"Специализация на свадебных букетах и декоре",price:"24,900 ₽",image:"🌹"}];return c.jsxs(c.Fragment,{children:[c.jsx(d3,{children:c.jsxs(f3,{children:[c.jsx(h3,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.8},children:"Изучайте искусство флористики онлайн"}),c.jsx(p3,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.8,delay:.2},children:"Превратите свое увлечение цветами в прибыльную профессию. Изучайте с лучшими преподавателями, практикуйтесь и создавайте прекрасные композиции."}),c.jsxs(m3,{to:"/courses",initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.8,delay:.4},whileHover:{scale:1.05},whileTap:{scale:.95},children:["Начать обучение",c.jsx(Cg,{size:20})]})]})}),c.jsx(g3,{children:c.jsxs("div",{className:"container",children:[c.jsx(Rg,{children:"Почему выбирают Flerr?"}),c.jsx(v3,{children:e.map((r,i)=>c.jsxs(y3,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.6,delay:i*.2},viewport:{once:!0},children:[c.jsx(x3,{children:r.icon}),c.jsx("h3",{children:r.title}),c.jsx("p",{children:r.description})]},i))})]})}),c.jsx(w3,{children:c.jsx("div",{className:"container",children:c.jsx(b3,{children:t.map((r,i)=>c.jsxs(S3,{initial:{opacity:0,scale:.8},whileInView:{opacity:1,scale:1},transition:{duration:.6,delay:i*.1},viewport:{once:!0},children:[c.jsx("h3",{children:r.number}),c.jsx("p",{children:r.label})]},i))})})}),c.jsx(j3,{children:c.jsxs("div",{className:"container",children:[c.jsx(Rg,{children:"Популярные курсы"}),c.jsx(k3,{children:n.map((r,i)=>c.jsxs(C3,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.6,delay:i*.2},viewport:{once:!0},children:[c.jsx(P3,{children:r.image}),c.jsxs(E3,{children:[c.jsx(T3,{children:r.title}),c.jsx(R3,{children:r.description}),c.jsx(A3,{children:r.price}),c.jsxs($3,{to:"/courses",children:["Подробнее",c.jsx(Cg,{size:16})]})]})]},i))})]})})]})},L3=x(_.button)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border: none;
  border-radius: 12px;
  font-weight: 600;
  font-family: inherit;
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
  overflow: hidden;

  ${({fullWidth:e})=>e&&Be`
      width: 100%;
    `}

  ${({size:e})=>{switch(e){case"small":return Be`
          padding: 8px 16px;
          font-size: 14px;
          min-height: 36px;
        `;case"large":return Be`
          padding: 16px 32px;
          font-size: 18px;
          min-height: 56px;
        `;default:return Be`
          padding: 12px 24px;
          font-size: 16px;
          min-height: 48px;
        `}}}

  ${({variant:e,theme:t})=>{switch(e){case"secondary":return Be`
          background: ${t.colors.lavender};
          color: ${t.colors.purple};
          &:hover:not(:disabled) {
            background: ${t.colors.lightLavender};
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(147, 112, 219, 0.3);
          }
        `;case"outline":return Be`
          background: transparent;
          color: ${t.colors.purple};
          border: 2px solid ${t.colors.purple};
          &:hover:not(:disabled) {
            background: ${t.colors.purple};
            color: white;
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(147, 112, 219, 0.3);
          }
        `;case"ghost":return Be`
          background: transparent;
          color: ${t.colors.purple};
          &:hover:not(:disabled) {
            background: ${t.colors.lavender};
            transform: translateY(-2px);
          }
        `;case"danger":return Be`
          background: ${t.colors.error};
          color: white;
          &:hover:not(:disabled) {
            background: #d32f2f;
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(211, 47, 47, 0.3);
          }
        `;default:return Be`
          background: linear-gradient(135deg, ${t.colors.purple}, ${t.colors.charlotte});
          color: white;
          &:hover:not(:disabled) {
            background: linear-gradient(135deg, ${t.colors.charlotte}, ${t.colors.purple});
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(147, 112, 219, 0.4);
          }
        `}}}

  ${({disabled:e})=>e&&Be`
      opacity: 0.6;
      cursor: not-allowed;
      transform: none !important;
      box-shadow: none !important;
    `}

  ${({loading:e})=>e&&Be`
      cursor: wait;
      pointer-events: none;
    `}
`,F3=x.div`
  width: 16px;
  height: 16px;
  border: 2px solid transparent;
  border-top: 2px solid currentColor;
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`,Co=({variant:e="primary",size:t="medium",fullWidth:n=!1,disabled:r=!1,loading:i=!1,children:o,onClick:s,type:a="button",...l})=>c.jsxs(L3,{variant:e,size:t,fullWidth:n,disabled:r||i,loading:i,onClick:s,type:a,whileHover:{scale:r||i?1:1.02},whileTap:{scale:r||i?1:.98},...l,children:[i&&c.jsx(F3,{}),o]});x(_.div)`
  background: white;
  border-radius: 16px;
  overflow: hidden;
  position: relative;
  transition: all 0.3s ease;

  ${({variant:e,theme:t})=>{switch(e){case"elevated":return`
          box-shadow: 0 8px 32px rgba(147, 112, 219, 0.15);
          border: 1px solid ${t.colors.lavender};
        `;case"outlined":return`
          border: 2px solid ${t.colors.lavender};
          box-shadow: none;
        `;default:return`
          box-shadow: 0 4px 20px rgba(147, 112, 219, 0.1);
          border: 1px solid ${t.colors.lightLavender};
        `}}}

  ${({hover:e,onClick:t})=>e&&`
    cursor: pointer;
    &:hover {
      transform: translateY(-4px);
      box-shadow: 0 12px 40px rgba(147, 112, 219, 0.2);
    }
  `}
`;x.div`
  padding: 20px 24px 16px;
  border-bottom: 1px solid ${({theme:e})=>e.colors.lightLavender};
`;x.div`
  padding: 20px 24px;
`;x.div`
  padding: 16px 24px 20px;
  border-top: 1px solid ${({theme:e})=>e.colors.lightLavender};
  background: ${({theme:e})=>e.colors.background};
`;x.div`
  width: 100%;
  height: ${({height:e})=>e||"200px"};
  background-image: url(${({src:e})=>e});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      135deg,
      rgba(147, 112, 219, 0.1),
      rgba(230, 230, 250, 0.1)
    );
  }
`;x.span`
  position: absolute;
  top: 12px;
  right: 12px;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;

  ${({variant:e,theme:t})=>{switch(e){case"success":return`
          background: ${t.colors.success};
          color: white;
        `;case"warning":return`
          background: ${t.colors.warning};
          color: white;
        `;case"error":return`
          background: ${t.colors.error};
          color: white;
        `;default:return`
          background: ${t.colors.purple};
          color: white;
        `}}}
`;const M3=x.div`
  position: relative;
  width: ${({fullWidth:e})=>e?"100%":"auto"};
`,z3=x.label`
  display: block;
  margin-bottom: 8px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.purple};
  font-size: 14px;
`,N3=x.div`
  position: relative;
  display: flex;
  align-items: center;
  background: white;
  border: 2px solid ${({theme:e,hasError:t,isFocused:n})=>t?e.colors.error:n?e.colors.purple:e.colors.lightLavender};
  border-radius: 12px;
  transition: all 0.2s ease;
  overflow: hidden;

  ${({disabled:e})=>e&&Be`
      opacity: 0.6;
      cursor: not-allowed;
    `}

  ${({isFocused:e,theme:t})=>e&&Be`
      box-shadow: 0 0 0 3px rgba(147, 112, 219, 0.1);
    `}
`,_3=x(_.input)`
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  font-family: inherit;
  font-size: 16px;
  color: ${({theme:e})=>e.colors.text};
  padding: ${({size:e,hasIcon:t})=>t?"0 16px 0 48px":e==="small"?"8px 12px":e==="large"?"16px 20px":"12px 16px"};
  min-height: ${({size:e})=>e==="small"?"36px":e==="large"?"56px":"48px"};

  &::placeholder {
    color: ${({theme:e})=>e.colors.textLight};
  }

  &:disabled {
    cursor: not-allowed;
  }
`,D3=x.div`
  position: absolute;
  left: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({theme:e})=>e.colors.textLight};
  z-index: 1;
`,I3=x.button`
  position: absolute;
  right: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  color: ${({theme:e})=>e.colors.textLight};
  cursor: pointer;
  padding: 4px;
  border-radius: 4px;
  transition: color 0.2s ease;

  &:hover {
    color: ${({theme:e})=>e.colors.purple};
  }
`,V3=x(_.div)`
  margin-top: 4px;
  font-size: 12px;
  color: ${({theme:e})=>e.colors.error};
  font-weight: 500;
`,Jo=j.forwardRef(({type:e="text",placeholder:t,value:n,onChange:r,onBlur:i,onFocus:o,label:s,error:a,disabled:l=!1,required:u=!1,fullWidth:d=!1,size:f="medium",icon:h,className:p,id:y,name:w,autoComplete:S,autoFocus:m,readOnly:g,min:v,max:b,step:C,pattern:P,maxLength:k,minLength:T,...O},F)=>{const[ne,X]=j.useState(!1),[ee,G]=j.useState(!1),Ce=$=>{X(!0),o==null||o($)},W=$=>{X(!1),i==null||i($)},le=()=>{G(!ee)},A=e==="password"&&ee?"text":e;return c.jsxs(M3,{fullWidth:d,className:p,children:[s&&c.jsxs(z3,{children:[s,u&&c.jsx("span",{style:{color:"#d32f2f"},children:" *"})]}),c.jsxs(N3,{hasError:!!a,isFocused:ne,disabled:l,children:[h&&c.jsx(D3,{children:h}),c.jsx(_3,{ref:F,type:A,placeholder:t,value:n,onChange:r,onFocus:Ce,onBlur:W,disabled:l,required:u,id:y,name:w,autoComplete:S,autoFocus:m,readOnly:g,min:v,max:b,step:C,pattern:P,maxLength:k,minLength:T,size:f,hasIcon:!!h}),e==="password"&&c.jsx(I3,{type:"button",onClick:le,disabled:l,children:ee?c.jsx(yl,{size:18}):c.jsx(Xo,{size:18})})]}),a&&c.jsx(V3,{initial:{opacity:0,y:-10},animate:{opacity:1,y:0},transition:{duration:.2},children:a})]})});Jo.displayName="Input";const U3=wh`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`,B3=wh`
  0%, 80%, 100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
`,H3=wh`
  0% {
    transform: scale(0.95);
    opacity: 0.5;
  }
  50% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(0.95);
    opacity: 0.5;
  }
`;x.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;

  ${({fullScreen:e})=>e&&`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(4px);
    z-index: 9999;
  `}
`;x.div`
  width: ${({size:e})=>{switch(e){case"small":return"24px";case"large":return"48px";default:return"32px"}}};
  height: ${({size:e})=>{switch(e){case"small":return"24px";case"large":return"48px";default:return"32px"}}};
  border: 3px solid ${({theme:e,color:t})=>t||e.colors.lightLavender};
  border-top: 3px solid ${({theme:e,color:t})=>t||e.colors.purple};
  border-radius: 50%;
  animation: ${U3} 1s linear infinite;
`;x.div`
  display: flex;
  gap: 4px;
`;x.div`
  width: ${({size:e})=>{switch(e){case"small":return"6px";case"large":return"12px";default:return"8px"}}};
  height: ${({size:e})=>{switch(e){case"small":return"6px";case"large":return"12px";default:return"8px"}}};
  background: ${({theme:e,color:t})=>t||e.colors.purple};
  border-radius: 50%;
  animation: ${B3} 1.4s ease-in-out infinite both;
  animation-delay: ${({delay:e})=>e}s;
`;x.div`
  width: ${({size:e})=>{switch(e){case"small":return"24px";case"large":return"48px";default:return"32px"}}};
  height: ${({size:e})=>{switch(e){case"small":return"24px";case"large":return"48px";default:return"32px"}}};
  background: ${({theme:e,color:t})=>t||e.colors.purple};
  border-radius: 50%;
  animation: ${H3} 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
`;x.p`
  color: ${({theme:e})=>e.colors.textLight};
  font-size: 14px;
  font-weight: 500;
  margin: 0;
`;x(_.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
`;x(_.div)`
  background: white;
  border-radius: 16px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  position: relative;
  max-height: 90vh;
  max-width: ${({size:e})=>{switch(e){case"small":return"400px";case"large":return"800px";case"full":return"95vw";default:return"600px"}}};
  width: 100%;
`;x.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 24px 16px;
  border-bottom: 1px solid ${({theme:e})=>e.colors.lightLavender};
`;x.h2`
  margin: 0;
  font-size: 20px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.purple};
`;x.button`
  background: none;
  border: none;
  color: ${({theme:e})=>e.colors.textLight};
  cursor: pointer;
  padding: 8px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;

  &:hover {
    background: ${({theme:e})=>e.colors.lightLavender};
    color: ${({theme:e})=>e.colors.purple};
  }
`;x.div`
  padding: 20px 24px;
  overflow-y: auto;
  max-height: calc(90vh - 120px);
`;x.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 12px;
  padding: 16px 24px 24px;
  border-top: 1px solid ${({theme:e})=>e.colors.lightLavender};
  background: ${({theme:e})=>e.colors.background};
`;function H1(e,t){return function(){return e.apply(t,arguments)}}const{toString:W3}=Object.prototype,{getPrototypeOf:Ph}=Object,{iterator:nc,toStringTag:W1}=Symbol,rc=(e=>t=>{const n=W3.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),Nt=e=>(e=e.toLowerCase(),t=>rc(t)===e),ic=e=>t=>typeof t===e,{isArray:Fi}=Array,es=ic("undefined");function ps(e){return e!==null&&!es(e)&&e.constructor!==null&&!es(e.constructor)&&rt(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Q1=Nt("ArrayBuffer");function Q3(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Q1(e.buffer),t}const q3=ic("string"),rt=ic("function"),q1=ic("number"),ms=e=>e!==null&&typeof e=="object",K3=e=>e===!0||e===!1,Sa=e=>{if(rc(e)!=="object")return!1;const t=Ph(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(W1 in e)&&!(nc in e)},G3=e=>{if(!ms(e)||ps(e))return!1;try{return Object.keys(e).length===0&&Object.getPrototypeOf(e)===Object.prototype}catch{return!1}},Y3=Nt("Date"),X3=Nt("File"),Z3=Nt("Blob"),J3=Nt("FileList"),eA=e=>ms(e)&&rt(e.pipe),tA=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||rt(e.append)&&((t=rc(e))==="formdata"||t==="object"&&rt(e.toString)&&e.toString()==="[object FormData]"))},nA=Nt("URLSearchParams"),[rA,iA,oA,sA]=["ReadableStream","Request","Response","Headers"].map(Nt),aA=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function gs(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,i;if(typeof e!="object"&&(e=[e]),Fi(e))for(r=0,i=e.length;r<i;r++)t.call(null,e[r],r,e);else{if(ps(e))return;const o=n?Object.getOwnPropertyNames(e):Object.keys(e),s=o.length;let a;for(r=0;r<s;r++)a=o[r],t.call(null,e[a],a,e)}}function K1(e,t){if(ps(e))return null;t=t.toLowerCase();const n=Object.keys(e);let r=n.length,i;for(;r-- >0;)if(i=n[r],t===i.toLowerCase())return i;return null}const pr=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),G1=e=>!es(e)&&e!==pr;function Dd(){const{caseless:e}=G1(this)&&this||{},t={},n=(r,i)=>{const o=e&&K1(t,i)||i;Sa(t[o])&&Sa(r)?t[o]=Dd(t[o],r):Sa(r)?t[o]=Dd({},r):Fi(r)?t[o]=r.slice():t[o]=r};for(let r=0,i=arguments.length;r<i;r++)arguments[r]&&gs(arguments[r],n);return t}const lA=(e,t,n,{allOwnKeys:r}={})=>(gs(t,(i,o)=>{n&&rt(i)?e[o]=H1(i,n):e[o]=i},{allOwnKeys:r}),e),cA=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),uA=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},dA=(e,t,n,r)=>{let i,o,s;const a={};if(t=t||{},e==null)return t;do{for(i=Object.getOwnPropertyNames(e),o=i.length;o-- >0;)s=i[o],(!r||r(s,e,t))&&!a[s]&&(t[s]=e[s],a[s]=!0);e=n!==!1&&Ph(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},fA=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},hA=e=>{if(!e)return null;if(Fi(e))return e;let t=e.length;if(!q1(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},pA=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&Ph(Uint8Array)),mA=(e,t)=>{const r=(e&&e[nc]).call(e);let i;for(;(i=r.next())&&!i.done;){const o=i.value;t.call(e,o[0],o[1])}},gA=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},vA=Nt("HTMLFormElement"),yA=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,i){return r.toUpperCase()+i}),Ag=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),xA=Nt("RegExp"),Y1=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};gs(n,(i,o)=>{let s;(s=t(i,o,e))!==!1&&(r[o]=s||i)}),Object.defineProperties(e,r)},wA=e=>{Y1(e,(t,n)=>{if(rt(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(rt(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},bA=(e,t)=>{const n={},r=i=>{i.forEach(o=>{n[o]=!0})};return Fi(e)?r(e):r(String(e).split(t)),n},SA=()=>{},jA=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t;function kA(e){return!!(e&&rt(e.append)&&e[W1]==="FormData"&&e[nc])}const CA=e=>{const t=new Array(10),n=(r,i)=>{if(ms(r)){if(t.indexOf(r)>=0)return;if(ps(r))return r;if(!("toJSON"in r)){t[i]=r;const o=Fi(r)?[]:{};return gs(r,(s,a)=>{const l=n(s,i+1);!es(l)&&(o[a]=l)}),t[i]=void 0,o}}return r};return n(e,0)},PA=Nt("AsyncFunction"),EA=e=>e&&(ms(e)||rt(e))&&rt(e.then)&&rt(e.catch),X1=((e,t)=>e?setImmediate:t?((n,r)=>(pr.addEventListener("message",({source:i,data:o})=>{i===pr&&o===n&&r.length&&r.shift()()},!1),i=>{r.push(i),pr.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",rt(pr.postMessage)),TA=typeof queueMicrotask<"u"?queueMicrotask.bind(pr):typeof process<"u"&&process.nextTick||X1,RA=e=>e!=null&&rt(e[nc]),E={isArray:Fi,isArrayBuffer:Q1,isBuffer:ps,isFormData:tA,isArrayBufferView:Q3,isString:q3,isNumber:q1,isBoolean:K3,isObject:ms,isPlainObject:Sa,isEmptyObject:G3,isReadableStream:rA,isRequest:iA,isResponse:oA,isHeaders:sA,isUndefined:es,isDate:Y3,isFile:X3,isBlob:Z3,isRegExp:xA,isFunction:rt,isStream:eA,isURLSearchParams:nA,isTypedArray:pA,isFileList:J3,forEach:gs,merge:Dd,extend:lA,trim:aA,stripBOM:cA,inherits:uA,toFlatObject:dA,kindOf:rc,kindOfTest:Nt,endsWith:fA,toArray:hA,forEachEntry:mA,matchAll:gA,isHTMLForm:vA,hasOwnProperty:Ag,hasOwnProp:Ag,reduceDescriptors:Y1,freezeMethods:wA,toObjectSet:bA,toCamelCase:yA,noop:SA,toFiniteNumber:jA,findKey:K1,global:pr,isContextDefined:G1,isSpecCompliantForm:kA,toJSONObject:CA,isAsyncFn:PA,isThenable:EA,setImmediate:X1,asap:TA,isIterable:RA};function I(e,t,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i,this.status=i.status?i.status:null)}E.inherits(I,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:E.toJSONObject(this.config),code:this.code,status:this.status}}});const Z1=I.prototype,J1={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{J1[e]={value:e}});Object.defineProperties(I,J1);Object.defineProperty(Z1,"isAxiosError",{value:!0});I.from=(e,t,n,r,i,o)=>{const s=Object.create(Z1);return E.toFlatObject(e,s,function(l){return l!==Error.prototype},a=>a!=="isAxiosError"),I.call(s,e.message,t,n,r,i),s.cause=e,s.name=e.name,o&&Object.assign(s,o),s};const AA=null;function Id(e){return E.isPlainObject(e)||E.isArray(e)}function ew(e){return E.endsWith(e,"[]")?e.slice(0,-2):e}function $g(e,t,n){return e?e.concat(t).map(function(i,o){return i=ew(i),!n&&o?"["+i+"]":i}).join(n?".":""):t}function $A(e){return E.isArray(e)&&!e.some(Id)}const OA=E.toFlatObject(E,{},null,function(t){return/^is[A-Z]/.test(t)});function oc(e,t,n){if(!E.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=E.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(w,S){return!E.isUndefined(S[w])});const r=n.metaTokens,i=n.visitor||d,o=n.dots,s=n.indexes,l=(n.Blob||typeof Blob<"u"&&Blob)&&E.isSpecCompliantForm(t);if(!E.isFunction(i))throw new TypeError("visitor must be a function");function u(y){if(y===null)return"";if(E.isDate(y))return y.toISOString();if(E.isBoolean(y))return y.toString();if(!l&&E.isBlob(y))throw new I("Blob is not supported. Use a Buffer instead.");return E.isArrayBuffer(y)||E.isTypedArray(y)?l&&typeof Blob=="function"?new Blob([y]):Buffer.from(y):y}function d(y,w,S){let m=y;if(y&&!S&&typeof y=="object"){if(E.endsWith(w,"{}"))w=r?w:w.slice(0,-2),y=JSON.stringify(y);else if(E.isArray(y)&&$A(y)||(E.isFileList(y)||E.endsWith(w,"[]"))&&(m=E.toArray(y)))return w=ew(w),m.forEach(function(v,b){!(E.isUndefined(v)||v===null)&&t.append(s===!0?$g([w],b,o):s===null?w:w+"[]",u(v))}),!1}return Id(y)?!0:(t.append($g(S,w,o),u(y)),!1)}const f=[],h=Object.assign(OA,{defaultVisitor:d,convertValue:u,isVisitable:Id});function p(y,w){if(!E.isUndefined(y)){if(f.indexOf(y)!==-1)throw Error("Circular reference detected in "+w.join("."));f.push(y),E.forEach(y,function(m,g){(!(E.isUndefined(m)||m===null)&&i.call(t,m,E.isString(g)?g.trim():g,w,h))===!0&&p(m,w?w.concat(g):[g])}),f.pop()}}if(!E.isObject(e))throw new TypeError("data must be an object");return p(e),t}function Og(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function Eh(e,t){this._pairs=[],e&&oc(e,this,t)}const tw=Eh.prototype;tw.append=function(t,n){this._pairs.push([t,n])};tw.toString=function(t){const n=t?function(r){return t.call(this,r,Og)}:Og;return this._pairs.map(function(i){return n(i[0])+"="+n(i[1])},"").join("&")};function LA(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function nw(e,t,n){if(!t)return e;const r=n&&n.encode||LA;E.isFunction(n)&&(n={serialize:n});const i=n&&n.serialize;let o;if(i?o=i(t,n):o=E.isURLSearchParams(t)?t.toString():new Eh(t,n).toString(r),o){const s=e.indexOf("#");s!==-1&&(e=e.slice(0,s)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class FA{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){E.forEach(this.handlers,function(r){r!==null&&t(r)})}}const Lg=FA,rw={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},MA=typeof URLSearchParams<"u"?URLSearchParams:Eh,zA=typeof FormData<"u"?FormData:null,NA=typeof Blob<"u"?Blob:null,_A={isBrowser:!0,classes:{URLSearchParams:MA,FormData:zA,Blob:NA},protocols:["http","https","file","blob","url","data"]},Th=typeof window<"u"&&typeof document<"u",Vd=typeof navigator=="object"&&navigator||void 0,DA=Th&&(!Vd||["ReactNative","NativeScript","NS"].indexOf(Vd.product)<0),IA=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),VA=Th&&window.location.href||"http://localhost",UA=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Th,hasStandardBrowserEnv:DA,hasStandardBrowserWebWorkerEnv:IA,navigator:Vd,origin:VA},Symbol.toStringTag,{value:"Module"})),Ie={...UA,..._A};function BA(e,t){return oc(e,new Ie.classes.URLSearchParams,{visitor:function(n,r,i,o){return Ie.isNode&&E.isBuffer(n)?(this.append(r,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)},...t})}function HA(e){return E.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function WA(e){const t={},n=Object.keys(e);let r;const i=n.length;let o;for(r=0;r<i;r++)o=n[r],t[o]=e[o];return t}function iw(e){function t(n,r,i,o){let s=n[o++];if(s==="__proto__")return!0;const a=Number.isFinite(+s),l=o>=n.length;return s=!s&&E.isArray(i)?i.length:s,l?(E.hasOwnProp(i,s)?i[s]=[i[s],r]:i[s]=r,!a):((!i[s]||!E.isObject(i[s]))&&(i[s]=[]),t(n,r,i[s],o)&&E.isArray(i[s])&&(i[s]=WA(i[s])),!a)}if(E.isFormData(e)&&E.isFunction(e.entries)){const n={};return E.forEachEntry(e,(r,i)=>{t(HA(r),i,n,0)}),n}return null}function QA(e,t,n){if(E.isString(e))try{return(t||JSON.parse)(e),E.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const Rh={transitional:rw,adapter:["xhr","http","fetch"],transformRequest:[function(t,n){const r=n.getContentType()||"",i=r.indexOf("application/json")>-1,o=E.isObject(t);if(o&&E.isHTMLForm(t)&&(t=new FormData(t)),E.isFormData(t))return i?JSON.stringify(iw(t)):t;if(E.isArrayBuffer(t)||E.isBuffer(t)||E.isStream(t)||E.isFile(t)||E.isBlob(t)||E.isReadableStream(t))return t;if(E.isArrayBufferView(t))return t.buffer;if(E.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let a;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return BA(t,this.formSerializer).toString();if((a=E.isFileList(t))||r.indexOf("multipart/form-data")>-1){const l=this.env&&this.env.FormData;return oc(a?{"files[]":t}:t,l&&new l,this.formSerializer)}}return o||i?(n.setContentType("application/json",!1),QA(t)):t}],transformResponse:[function(t){const n=this.transitional||Rh.transitional,r=n&&n.forcedJSONParsing,i=this.responseType==="json";if(E.isResponse(t)||E.isReadableStream(t))return t;if(t&&E.isString(t)&&(r&&!this.responseType||i)){const s=!(n&&n.silentJSONParsing)&&i;try{return JSON.parse(t)}catch(a){if(s)throw a.name==="SyntaxError"?I.from(a,I.ERR_BAD_RESPONSE,this,null,this.response):a}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Ie.classes.FormData,Blob:Ie.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};E.forEach(["delete","get","head","post","put","patch"],e=>{Rh.headers[e]={}});const Ah=Rh,qA=E.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),KA=e=>{const t={};let n,r,i;return e&&e.split(`
`).forEach(function(s){i=s.indexOf(":"),n=s.substring(0,i).trim().toLowerCase(),r=s.substring(i+1).trim(),!(!n||t[n]&&qA[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},Fg=Symbol("internals");function Qi(e){return e&&String(e).trim().toLowerCase()}function ja(e){return e===!1||e==null?e:E.isArray(e)?e.map(ja):String(e)}function GA(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const YA=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function tu(e,t,n,r,i){if(E.isFunction(r))return r.call(this,t,n);if(i&&(t=n),!!E.isString(t)){if(E.isString(r))return t.indexOf(r)!==-1;if(E.isRegExp(r))return r.test(t)}}function XA(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function ZA(e,t){const n=E.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(i,o,s){return this[r].call(this,t,i,o,s)},configurable:!0})})}class sc{constructor(t){t&&this.set(t)}set(t,n,r){const i=this;function o(a,l,u){const d=Qi(l);if(!d)throw new Error("header name must be a non-empty string");const f=E.findKey(i,d);(!f||i[f]===void 0||u===!0||u===void 0&&i[f]!==!1)&&(i[f||l]=ja(a))}const s=(a,l)=>E.forEach(a,(u,d)=>o(u,d,l));if(E.isPlainObject(t)||t instanceof this.constructor)s(t,n);else if(E.isString(t)&&(t=t.trim())&&!YA(t))s(KA(t),n);else if(E.isObject(t)&&E.isIterable(t)){let a={},l,u;for(const d of t){if(!E.isArray(d))throw TypeError("Object iterator must return a key-value pair");a[u=d[0]]=(l=a[u])?E.isArray(l)?[...l,d[1]]:[l,d[1]]:d[1]}s(a,n)}else t!=null&&o(n,t,r);return this}get(t,n){if(t=Qi(t),t){const r=E.findKey(this,t);if(r){const i=this[r];if(!n)return i;if(n===!0)return GA(i);if(E.isFunction(n))return n.call(this,i,r);if(E.isRegExp(n))return n.exec(i);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=Qi(t),t){const r=E.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||tu(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let i=!1;function o(s){if(s=Qi(s),s){const a=E.findKey(r,s);a&&(!n||tu(r,r[a],a,n))&&(delete r[a],i=!0)}}return E.isArray(t)?t.forEach(o):o(t),i}clear(t){const n=Object.keys(this);let r=n.length,i=!1;for(;r--;){const o=n[r];(!t||tu(this,this[o],o,t,!0))&&(delete this[o],i=!0)}return i}normalize(t){const n=this,r={};return E.forEach(this,(i,o)=>{const s=E.findKey(r,o);if(s){n[s]=ja(i),delete n[o];return}const a=t?XA(o):String(o).trim();a!==o&&delete n[o],n[a]=ja(i),r[a]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return E.forEach(this,(r,i)=>{r!=null&&r!==!1&&(n[i]=t&&E.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(i=>r.set(i)),r}static accessor(t){const r=(this[Fg]=this[Fg]={accessors:{}}).accessors,i=this.prototype;function o(s){const a=Qi(s);r[a]||(ZA(i,s),r[a]=!0)}return E.isArray(t)?t.forEach(o):o(t),this}}sc.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);E.reduceDescriptors(sc.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});E.freezeMethods(sc);const Mt=sc;function nu(e,t){const n=this||Ah,r=t||n,i=Mt.from(r.headers);let o=r.data;return E.forEach(e,function(a){o=a.call(n,o,i.normalize(),t?t.status:void 0)}),i.normalize(),o}function ow(e){return!!(e&&e.__CANCEL__)}function Mi(e,t,n){I.call(this,e??"canceled",I.ERR_CANCELED,t,n),this.name="CanceledError"}E.inherits(Mi,I,{__CANCEL__:!0});function sw(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new I("Request failed with status code "+n.status,[I.ERR_BAD_REQUEST,I.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function JA(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function e5(e,t){e=e||10;const n=new Array(e),r=new Array(e);let i=0,o=0,s;return t=t!==void 0?t:1e3,function(l){const u=Date.now(),d=r[o];s||(s=u),n[i]=l,r[i]=u;let f=o,h=0;for(;f!==i;)h+=n[f++],f=f%e;if(i=(i+1)%e,i===o&&(o=(o+1)%e),u-s<t)return;const p=d&&u-d;return p?Math.round(h*1e3/p):void 0}}function t5(e,t){let n=0,r=1e3/t,i,o;const s=(u,d=Date.now())=>{n=d,i=null,o&&(clearTimeout(o),o=null),e(...u)};return[(...u)=>{const d=Date.now(),f=d-n;f>=r?s(u,d):(i=u,o||(o=setTimeout(()=>{o=null,s(i)},r-f)))},()=>i&&s(i)]}const wl=(e,t,n=3)=>{let r=0;const i=e5(50,250);return t5(o=>{const s=o.loaded,a=o.lengthComputable?o.total:void 0,l=s-r,u=i(l),d=s<=a;r=s;const f={loaded:s,total:a,progress:a?s/a:void 0,bytes:l,rate:u||void 0,estimated:u&&a&&d?(a-s)/u:void 0,event:o,lengthComputable:a!=null,[t?"download":"upload"]:!0};e(f)},n)},Mg=(e,t)=>{const n=e!=null;return[r=>t[0]({lengthComputable:n,total:e,loaded:r}),t[1]]},zg=e=>(...t)=>E.asap(()=>e(...t)),n5=Ie.hasStandardBrowserEnv?((e,t)=>n=>(n=new URL(n,Ie.origin),e.protocol===n.protocol&&e.host===n.host&&(t||e.port===n.port)))(new URL(Ie.origin),Ie.navigator&&/(msie|trident)/i.test(Ie.navigator.userAgent)):()=>!0,r5=Ie.hasStandardBrowserEnv?{write(e,t,n,r,i,o){const s=[e+"="+encodeURIComponent(t)];E.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),E.isString(r)&&s.push("path="+r),E.isString(i)&&s.push("domain="+i),o===!0&&s.push("secure"),document.cookie=s.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function i5(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function o5(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function aw(e,t,n){let r=!i5(t);return e&&(r||n==!1)?o5(e,t):t}const Ng=e=>e instanceof Mt?{...e}:e;function Er(e,t){t=t||{};const n={};function r(u,d,f,h){return E.isPlainObject(u)&&E.isPlainObject(d)?E.merge.call({caseless:h},u,d):E.isPlainObject(d)?E.merge({},d):E.isArray(d)?d.slice():d}function i(u,d,f,h){if(E.isUndefined(d)){if(!E.isUndefined(u))return r(void 0,u,f,h)}else return r(u,d,f,h)}function o(u,d){if(!E.isUndefined(d))return r(void 0,d)}function s(u,d){if(E.isUndefined(d)){if(!E.isUndefined(u))return r(void 0,u)}else return r(void 0,d)}function a(u,d,f){if(f in t)return r(u,d);if(f in e)return r(void 0,u)}const l={url:o,method:o,data:o,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,withXSRFToken:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:a,headers:(u,d,f)=>i(Ng(u),Ng(d),f,!0)};return E.forEach(Object.keys({...e,...t}),function(d){const f=l[d]||i,h=f(e[d],t[d],d);E.isUndefined(h)&&f!==a||(n[d]=h)}),n}const lw=e=>{const t=Er({},e);let{data:n,withXSRFToken:r,xsrfHeaderName:i,xsrfCookieName:o,headers:s,auth:a}=t;t.headers=s=Mt.from(s),t.url=nw(aw(t.baseURL,t.url,t.allowAbsoluteUrls),e.params,e.paramsSerializer),a&&s.set("Authorization","Basic "+btoa((a.username||"")+":"+(a.password?unescape(encodeURIComponent(a.password)):"")));let l;if(E.isFormData(n)){if(Ie.hasStandardBrowserEnv||Ie.hasStandardBrowserWebWorkerEnv)s.setContentType(void 0);else if((l=s.getContentType())!==!1){const[u,...d]=l?l.split(";").map(f=>f.trim()).filter(Boolean):[];s.setContentType([u||"multipart/form-data",...d].join("; "))}}if(Ie.hasStandardBrowserEnv&&(r&&E.isFunction(r)&&(r=r(t)),r||r!==!1&&n5(t.url))){const u=i&&o&&r5.read(o);u&&s.set(i,u)}return t},s5=typeof XMLHttpRequest<"u",a5=s5&&function(e){return new Promise(function(n,r){const i=lw(e);let o=i.data;const s=Mt.from(i.headers).normalize();let{responseType:a,onUploadProgress:l,onDownloadProgress:u}=i,d,f,h,p,y;function w(){p&&p(),y&&y(),i.cancelToken&&i.cancelToken.unsubscribe(d),i.signal&&i.signal.removeEventListener("abort",d)}let S=new XMLHttpRequest;S.open(i.method.toUpperCase(),i.url,!0),S.timeout=i.timeout;function m(){if(!S)return;const v=Mt.from("getAllResponseHeaders"in S&&S.getAllResponseHeaders()),C={data:!a||a==="text"||a==="json"?S.responseText:S.response,status:S.status,statusText:S.statusText,headers:v,config:e,request:S};sw(function(k){n(k),w()},function(k){r(k),w()},C),S=null}"onloadend"in S?S.onloadend=m:S.onreadystatechange=function(){!S||S.readyState!==4||S.status===0&&!(S.responseURL&&S.responseURL.indexOf("file:")===0)||setTimeout(m)},S.onabort=function(){S&&(r(new I("Request aborted",I.ECONNABORTED,e,S)),S=null)},S.onerror=function(){r(new I("Network Error",I.ERR_NETWORK,e,S)),S=null},S.ontimeout=function(){let b=i.timeout?"timeout of "+i.timeout+"ms exceeded":"timeout exceeded";const C=i.transitional||rw;i.timeoutErrorMessage&&(b=i.timeoutErrorMessage),r(new I(b,C.clarifyTimeoutError?I.ETIMEDOUT:I.ECONNABORTED,e,S)),S=null},o===void 0&&s.setContentType(null),"setRequestHeader"in S&&E.forEach(s.toJSON(),function(b,C){S.setRequestHeader(C,b)}),E.isUndefined(i.withCredentials)||(S.withCredentials=!!i.withCredentials),a&&a!=="json"&&(S.responseType=i.responseType),u&&([h,y]=wl(u,!0),S.addEventListener("progress",h)),l&&S.upload&&([f,p]=wl(l),S.upload.addEventListener("progress",f),S.upload.addEventListener("loadend",p)),(i.cancelToken||i.signal)&&(d=v=>{S&&(r(!v||v.type?new Mi(null,e,S):v),S.abort(),S=null)},i.cancelToken&&i.cancelToken.subscribe(d),i.signal&&(i.signal.aborted?d():i.signal.addEventListener("abort",d)));const g=JA(i.url);if(g&&Ie.protocols.indexOf(g)===-1){r(new I("Unsupported protocol "+g+":",I.ERR_BAD_REQUEST,e));return}S.send(o||null)})},l5=(e,t)=>{const{length:n}=e=e?e.filter(Boolean):[];if(t||n){let r=new AbortController,i;const o=function(u){if(!i){i=!0,a();const d=u instanceof Error?u:this.reason;r.abort(d instanceof I?d:new Mi(d instanceof Error?d.message:d))}};let s=t&&setTimeout(()=>{s=null,o(new I(`timeout ${t} of ms exceeded`,I.ETIMEDOUT))},t);const a=()=>{e&&(s&&clearTimeout(s),s=null,e.forEach(u=>{u.unsubscribe?u.unsubscribe(o):u.removeEventListener("abort",o)}),e=null)};e.forEach(u=>u.addEventListener("abort",o));const{signal:l}=r;return l.unsubscribe=()=>E.asap(a),l}},c5=l5,u5=function*(e,t){let n=e.byteLength;if(!t||n<t){yield e;return}let r=0,i;for(;r<n;)i=r+t,yield e.slice(r,i),r=i},d5=async function*(e,t){for await(const n of f5(e))yield*u5(n,t)},f5=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}const t=e.getReader();try{for(;;){const{done:n,value:r}=await t.read();if(n)break;yield r}}finally{await t.cancel()}},_g=(e,t,n,r)=>{const i=d5(e,t);let o=0,s,a=l=>{s||(s=!0,r&&r(l))};return new ReadableStream({async pull(l){try{const{done:u,value:d}=await i.next();if(u){a(),l.close();return}let f=d.byteLength;if(n){let h=o+=f;n(h)}l.enqueue(new Uint8Array(d))}catch(u){throw a(u),u}},cancel(l){return a(l),i.return()}},{highWaterMark:2})},ac=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",cw=ac&&typeof ReadableStream=="function",h5=ac&&(typeof TextEncoder=="function"?(e=>t=>e.encode(t))(new TextEncoder):async e=>new Uint8Array(await new Response(e).arrayBuffer())),uw=(e,...t)=>{try{return!!e(...t)}catch{return!1}},p5=cw&&uw(()=>{let e=!1;const t=new Request(Ie.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!t}),Dg=64*1024,Ud=cw&&uw(()=>E.isReadableStream(new Response("").body)),bl={stream:Ud&&(e=>e.body)};ac&&(e=>{["text","arrayBuffer","blob","formData","stream"].forEach(t=>{!bl[t]&&(bl[t]=E.isFunction(e[t])?n=>n[t]():(n,r)=>{throw new I(`Response type '${t}' is not supported`,I.ERR_NOT_SUPPORT,r)})})})(new Response);const m5=async e=>{if(e==null)return 0;if(E.isBlob(e))return e.size;if(E.isSpecCompliantForm(e))return(await new Request(Ie.origin,{method:"POST",body:e}).arrayBuffer()).byteLength;if(E.isArrayBufferView(e)||E.isArrayBuffer(e))return e.byteLength;if(E.isURLSearchParams(e)&&(e=e+""),E.isString(e))return(await h5(e)).byteLength},g5=async(e,t)=>{const n=E.toFiniteNumber(e.getContentLength());return n??m5(t)},v5=ac&&(async e=>{let{url:t,method:n,data:r,signal:i,cancelToken:o,timeout:s,onDownloadProgress:a,onUploadProgress:l,responseType:u,headers:d,withCredentials:f="same-origin",fetchOptions:h}=lw(e);u=u?(u+"").toLowerCase():"text";let p=c5([i,o&&o.toAbortSignal()],s),y;const w=p&&p.unsubscribe&&(()=>{p.unsubscribe()});let S;try{if(l&&p5&&n!=="get"&&n!=="head"&&(S=await g5(d,r))!==0){let C=new Request(t,{method:"POST",body:r,duplex:"half"}),P;if(E.isFormData(r)&&(P=C.headers.get("content-type"))&&d.setContentType(P),C.body){const[k,T]=Mg(S,wl(zg(l)));r=_g(C.body,Dg,k,T)}}E.isString(f)||(f=f?"include":"omit");const m="credentials"in Request.prototype;y=new Request(t,{...h,signal:p,method:n.toUpperCase(),headers:d.normalize().toJSON(),body:r,duplex:"half",credentials:m?f:void 0});let g=await fetch(y,h);const v=Ud&&(u==="stream"||u==="response");if(Ud&&(a||v&&w)){const C={};["status","statusText","headers"].forEach(O=>{C[O]=g[O]});const P=E.toFiniteNumber(g.headers.get("content-length")),[k,T]=a&&Mg(P,wl(zg(a),!0))||[];g=new Response(_g(g.body,Dg,k,()=>{T&&T(),w&&w()}),C)}u=u||"text";let b=await bl[E.findKey(bl,u)||"text"](g,e);return!v&&w&&w(),await new Promise((C,P)=>{sw(C,P,{data:b,headers:Mt.from(g.headers),status:g.status,statusText:g.statusText,config:e,request:y})})}catch(m){throw w&&w(),m&&m.name==="TypeError"&&/Load failed|fetch/i.test(m.message)?Object.assign(new I("Network Error",I.ERR_NETWORK,e,y),{cause:m.cause||m}):I.from(m,m&&m.code,e,y)}}),Bd={http:AA,xhr:a5,fetch:v5};E.forEach(Bd,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const Ig=e=>`- ${e}`,y5=e=>E.isFunction(e)||e===null||e===!1,dw={getAdapter:e=>{e=E.isArray(e)?e:[e];const{length:t}=e;let n,r;const i={};for(let o=0;o<t;o++){n=e[o];let s;if(r=n,!y5(n)&&(r=Bd[(s=String(n)).toLowerCase()],r===void 0))throw new I(`Unknown adapter '${s}'`);if(r)break;i[s||"#"+o]=r}if(!r){const o=Object.entries(i).map(([a,l])=>`adapter ${a} `+(l===!1?"is not supported by the environment":"is not available in the build"));let s=t?o.length>1?`since :
`+o.map(Ig).join(`
`):" "+Ig(o[0]):"as no adapter specified";throw new I("There is no suitable adapter to dispatch the request "+s,"ERR_NOT_SUPPORT")}return r},adapters:Bd};function ru(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Mi(null,e)}function Vg(e){return ru(e),e.headers=Mt.from(e.headers),e.data=nu.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),dw.getAdapter(e.adapter||Ah.adapter)(e).then(function(r){return ru(e),r.data=nu.call(e,e.transformResponse,r),r.headers=Mt.from(r.headers),r},function(r){return ow(r)||(ru(e),r&&r.response&&(r.response.data=nu.call(e,e.transformResponse,r.response),r.response.headers=Mt.from(r.response.headers))),Promise.reject(r)})}const fw="1.11.0",lc={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{lc[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const Ug={};lc.transitional=function(t,n,r){function i(o,s){return"[Axios v"+fw+"] Transitional option '"+o+"'"+s+(r?". "+r:"")}return(o,s,a)=>{if(t===!1)throw new I(i(s," has been removed"+(n?" in "+n:"")),I.ERR_DEPRECATED);return n&&!Ug[s]&&(Ug[s]=!0,console.warn(i(s," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(o,s,a):!0}};lc.spelling=function(t){return(n,r)=>(console.warn(`${r} is likely a misspelling of ${t}`),!0)};function x5(e,t,n){if(typeof e!="object")throw new I("options must be an object",I.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let i=r.length;for(;i-- >0;){const o=r[i],s=t[o];if(s){const a=e[o],l=a===void 0||s(a,o,e);if(l!==!0)throw new I("option "+o+" must be "+l,I.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new I("Unknown option "+o,I.ERR_BAD_OPTION)}}const ka={assertOptions:x5,validators:lc},It=ka.validators;class Sl{constructor(t){this.defaults=t||{},this.interceptors={request:new Lg,response:new Lg}}async request(t,n){try{return await this._request(t,n)}catch(r){if(r instanceof Error){let i={};Error.captureStackTrace?Error.captureStackTrace(i):i=new Error;const o=i.stack?i.stack.replace(/^.+\n/,""):"";try{r.stack?o&&!String(r.stack).endsWith(o.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+o):r.stack=o}catch{}}throw r}}_request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=Er(this.defaults,n);const{transitional:r,paramsSerializer:i,headers:o}=n;r!==void 0&&ka.assertOptions(r,{silentJSONParsing:It.transitional(It.boolean),forcedJSONParsing:It.transitional(It.boolean),clarifyTimeoutError:It.transitional(It.boolean)},!1),i!=null&&(E.isFunction(i)?n.paramsSerializer={serialize:i}:ka.assertOptions(i,{encode:It.function,serialize:It.function},!0)),n.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?n.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:n.allowAbsoluteUrls=!0),ka.assertOptions(n,{baseUrl:It.spelling("baseURL"),withXsrfToken:It.spelling("withXSRFToken")},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let s=o&&E.merge(o.common,o[n.method]);o&&E.forEach(["delete","get","head","post","put","patch","common"],y=>{delete o[y]}),n.headers=Mt.concat(s,o);const a=[];let l=!0;this.interceptors.request.forEach(function(w){typeof w.runWhen=="function"&&w.runWhen(n)===!1||(l=l&&w.synchronous,a.unshift(w.fulfilled,w.rejected))});const u=[];this.interceptors.response.forEach(function(w){u.push(w.fulfilled,w.rejected)});let d,f=0,h;if(!l){const y=[Vg.bind(this),void 0];for(y.unshift(...a),y.push(...u),h=y.length,d=Promise.resolve(n);f<h;)d=d.then(y[f++],y[f++]);return d}h=a.length;let p=n;for(f=0;f<h;){const y=a[f++],w=a[f++];try{p=y(p)}catch(S){w.call(this,S);break}}try{d=Vg.call(this,p)}catch(y){return Promise.reject(y)}for(f=0,h=u.length;f<h;)d=d.then(u[f++],u[f++]);return d}getUri(t){t=Er(this.defaults,t);const n=aw(t.baseURL,t.url,t.allowAbsoluteUrls);return nw(n,t.params,t.paramsSerializer)}}E.forEach(["delete","get","head","options"],function(t){Sl.prototype[t]=function(n,r){return this.request(Er(r||{},{method:t,url:n,data:(r||{}).data}))}});E.forEach(["post","put","patch"],function(t){function n(r){return function(o,s,a){return this.request(Er(a||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:s}))}}Sl.prototype[t]=n(),Sl.prototype[t+"Form"]=n(!0)});const Ca=Sl;class $h{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const r=this;this.promise.then(i=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](i);r._listeners=null}),this.promise.then=i=>{let o;const s=new Promise(a=>{r.subscribe(a),o=a}).then(i);return s.cancel=function(){r.unsubscribe(o)},s},t(function(o,s,a){r.reason||(r.reason=new Mi(o,s,a),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const t=new AbortController,n=r=>{t.abort(r)};return this.subscribe(n),t.signal.unsubscribe=()=>this.unsubscribe(n),t.signal}static source(){let t;return{token:new $h(function(i){t=i}),cancel:t}}}const w5=$h;function b5(e){return function(n){return e.apply(null,n)}}function S5(e){return E.isObject(e)&&e.isAxiosError===!0}const Hd={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Hd).forEach(([e,t])=>{Hd[t]=e});const j5=Hd;function hw(e){const t=new Ca(e),n=H1(Ca.prototype.request,t);return E.extend(n,Ca.prototype,t,{allOwnKeys:!0}),E.extend(n,t,null,{allOwnKeys:!0}),n.create=function(i){return hw(Er(e,i))},n}const ke=hw(Ah);ke.Axios=Ca;ke.CanceledError=Mi;ke.CancelToken=w5;ke.isCancel=ow;ke.VERSION=fw;ke.toFormData=oc;ke.AxiosError=I;ke.Cancel=ke.CanceledError;ke.all=function(t){return Promise.all(t)};ke.spread=b5;ke.isAxiosError=S5;ke.mergeConfig=Er;ke.AxiosHeaders=Mt;ke.formToJSON=e=>iw(E.isHTMLForm(e)?new FormData(e):e);ke.getAdapter=dw.getAdapter;ke.HttpStatusCode=j5;ke.default=ke;const k5=ke,sr=k5.create({baseURL:{BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1}.VITE_API_URL||"http://localhost:5000/api",timeout:1e4,headers:{"Content-Type":"application/json"}});sr.interceptors.request.use(e=>{const t=localStorage.getItem("token");return t&&(e.headers.Authorization=`Bearer ${t}`),e},e=>Promise.reject(e));sr.interceptors.response.use(e=>e,e=>{const{response:t}=e;if(t){const{status:n,data:r}=t;switch(n){case 401:localStorage.removeItem("token"),window.location.href="/login",J.error("Session expired. Please login again.");break;case 403:J.error("Access denied. You don't have permission to perform this action.");break;case 404:J.error("Resource not found.");break;case 422:if(r.details){const i=r.details.map(o=>o.message).join(", ");J.error(i)}else J.error(r.error||"Validation failed");break;case 500:J.error("Server error. Please try again later.");break;default:J.error(r.error||"Something went wrong")}}else J.error("Network error. Please check your connection.");return Promise.reject(e)});const Zt={get:(e,t)=>sr.get(e,t),post:(e,t,n)=>sr.post(e,t,n),put:(e,t,n)=>sr.put(e,t,n),patch:(e,t,n)=>sr.patch(e,t,n),delete:(e,t)=>sr.delete(e,t)},pw={list:e=>Zt.get("/courses",{params:e}),getBySlug:e=>Zt.get(`/courses/${e}`)},Bg=x.div`
  padding: var(--spacing-xxl) 0;
  min-height: 80vh;
`,C5=x.div`
  text-align: center;
  margin-bottom: var(--spacing-xxl);
`,P5=x.h1`
  color: var(--color-text);
  margin-bottom: var(--spacing-md);
  font-size: 2.5rem;
  font-weight: 600;
`,E5=x.p`
  color: var(--color-text-light);
  font-size: 1.125rem;
  line-height: 1.6;
  max-width: 600px;
  margin: 0 auto;
`,T5=x.div`
  background: var(--color-background-secondary);
  padding: var(--spacing-lg);
  border-radius: var(--border-radius-lg);
  margin-bottom: var(--spacing-xl);
  box-shadow: var(--shadow-sm);
`,R5=x.div`
  display: grid;
  grid-template-columns: 1fr auto auto auto;
  gap: var(--spacing-md);
  align-items: center;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: var(--spacing-sm);
  }
`,A5=x.div`
  position: relative;
  width: 100%;
`,iu=x.select`
  padding: var(--spacing-sm) var(--spacing-md);
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius-md);
  background: white;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:focus {
    outline: none;
    border-color: var(--color-primary);
  }
`,$5=x.div`
  display: flex;
  gap: var(--spacing-sm);
  justify-content: flex-end;
  margin-bottom: var(--spacing-md);
`,O5=x.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: var(--spacing-lg);
  margin-bottom: var(--spacing-xl);
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,L5=x(_.div)`
  background: white;
  border-radius: var(--border-radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-md);
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-lg);
  }
`,F5=x.div`
  height: 200px;
  background: linear-gradient(135deg, var(--color-accent) 0%, var(--color-background-secondary) 100%);
  background-image: ${e=>e.$imageUrl?`url(${e.$imageUrl})`:"none"};
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
  }
`,M5=x.div`
  position: relative;
  z-index: 2;
  width: 60px;
  height: 60px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background: white;
    transform: scale(1.1);
  }
  
  svg {
    color: var(--color-primary);
    margin-left: 2px;
  }
`,z5=x.div`
  padding: var(--spacing-lg);
`,N5=x.h3`
  color: var(--color-text);
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: var(--spacing-sm);
  line-height: 1.4;
`,_5=x.p`
  color: var(--color-text-light);
  font-size: 0.9rem;
  line-height: 1.5;
  margin-bottom: var(--spacing-md);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,D5=x.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-md);
  font-size: 0.875rem;
  color: var(--color-text-muted);
  
  span {
    display: flex;
    align-items: center;
    gap: 0.25rem;
  }
`,I5=x.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: var(--spacing-md);
`,V5=x.div`
  display: flex;
  align-items: baseline;
  gap: var(--spacing-sm);
`,U5=x.span`
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--color-primary);
`,B5=x.span`
  font-size: 1rem;
  color: var(--color-text-muted);
  text-decoration: line-through;
`,H5=x.span`
  background: var(--color-success);
  color: white;
  padding: 0.25rem 0.5rem;
  border-radius: var(--border-radius-sm);
  font-size: 0.75rem;
  font-weight: 500;
`,W5=x(ue)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: var(--spacing-sm) var(--spacing-md);
  background: var(--color-primary);
  color: white;
  text-decoration: none;
  border-radius: var(--border-radius-md);
  font-weight: 500;
  transition: all 0.2s ease;
  
  &:hover {
    background: var(--color-hover-primary);
    transform: translateY(-1px);
  }
`,Hg=x.div`
  text-align: center;
  padding: var(--spacing-xxl) 0;
  color: var(--color-text-muted);
`,Q5=x.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: var(--spacing-xxl) 0;
  
  &::after {
    content: '';
    width: 40px;
    height: 40px;
    border: 3px solid var(--color-border);
    border-top: 3px solid var(--color-primary);
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`,q5=()=>{const[e,t]=Ly(),[n,r]=j.useState(e.get("q")||""),[i,o]=j.useState(e.get("q")||""),[s,a]=j.useState(e.get("category")||""),[l,u]=j.useState(e.get("level")||""),[d,f]=j.useState(e.get("sort")||"createdAt"),[h,p]=j.useState(Number(e.get("page")||1)),[y]=j.useState(12);B.useEffect(()=>{const k=setTimeout(()=>o(n),400);return()=>clearTimeout(k)},[n]);const w=k=>k==="students"?"popularity":k==="price"?"price":"createdAt",{data:S,isLoading:m,isError:g}=Uy(["courses",{page:h,limit:y,debouncedSearch:i,categoryFilter:s,levelFilter:l,sortBy:d}],async()=>(await pw.list({page:h,limit:y,search:i||void 0,category:s||void 0,level:l||void 0,sort:w(d),order:"desc"})).data,{keepPreviousData:!0}),v=(S==null?void 0:S.data)??[],b=S==null?void 0:S.pagination;B.useEffect(()=>{const k=new URLSearchParams;n&&k.set("q",n),s&&k.set("category",s),l&&k.set("level",l),d&&d!=="createdAt"&&k.set("sort",d),h&&h!==1&&k.set("page",String(h)),t(k,{replace:!0})},[n,s,l,d,h,t]);const C=v,P=(k,T)=>Math.round((k-T)/k*100);return m?c.jsx(Bg,{children:c.jsx(Q5,{})}):c.jsxs(Bg,{children:[c.jsxs(C5,{children:[c.jsx(P5,{children:"Курсы флористики"}),c.jsx(E5,{children:"Выберите подходящий курс и начните свой путь в мире флористики. Каждый курс включает бонусные уроки по бизнесу и социальным сетям."})]}),c.jsxs(T5,{children:[c.jsx($5,{children:c.jsx(Co,{onClick:()=>{r(""),a(""),u(""),f("createdAt"),p(1)},variant:"secondary",children:"Сбросить фильтры"})}),c.jsxs(R5,{children:[c.jsxs(A5,{children:[c.jsx(Ch,{size:20}),c.jsx(Jo,{type:"text",placeholder:"Поиск курсов...",value:n,onChange:k=>{r(k.target.value),p(1)}})]}),c.jsxs(iu,{value:s,onChange:k=>{a(k.target.value),p(1)},children:[c.jsx("option",{value:"",children:"Все категории"}),c.jsx("option",{value:"profession",children:"Профессия"}),c.jsx("option",{value:"design",children:"Дизайн"}),c.jsx("option",{value:"interior",children:"Интерьер"}),c.jsx("option",{value:"commercial",children:"Коммерция"}),c.jsx("option",{value:"wedding",children:"Свадьба"})]}),c.jsxs(iu,{value:l,onChange:k=>{u(k.target.value),p(1)},children:[c.jsx("option",{value:"",children:"Все уровни"}),c.jsx("option",{value:"beginner",children:"Начинающий"}),c.jsx("option",{value:"intermediate",children:"Средний"}),c.jsx("option",{value:"advanced",children:"Продвинутый"})]}),c.jsxs(iu,{value:d,onChange:k=>{f(k.target.value),p(1)},children:[c.jsx("option",{value:"createdAt",children:"По дате"}),c.jsx("option",{value:"price",children:"По цене"}),c.jsx("option",{value:"rating",children:"По рейтингу"}),c.jsx("option",{value:"students",children:"По популярности"})]})]})]}),c.jsx(Wn,{mode:"wait",children:g?c.jsxs(Hg,{children:[c.jsx("h3",{children:"Ошибка загрузки"}),c.jsx("p",{children:"Попробуйте обновить страницу или позже."})]}):C.length>0?c.jsx(O5,{children:C.map((k,T)=>{var O;return c.jsxs(L5,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},transition:{delay:T*.1},children:[c.jsx(F5,{$imageUrl:k.image,children:c.jsx(M5,{children:c.jsx(kh,{size:24})})}),c.jsxs(z5,{children:[c.jsx(N5,{children:k.title}),c.jsx(_5,{children:k.description}),c.jsxs(D5,{children:[typeof k.rating<"u"&&c.jsxs("span",{children:[c.jsx(Pr,{size:16}),k.rating]}),c.jsxs("span",{children:[c.jsx(Yo,{size:16}),k.duration]}),typeof k.studentsCount<"u"&&c.jsxs("span",{children:[c.jsx(hs,{size:16}),k.studentsCount," студентов"]}),c.jsxs("span",{children:[c.jsx(bt,{size:16}),((O=k.lessons)==null?void 0:O.length)??0," уроков"]})]}),c.jsxs(I5,{children:[c.jsxs(V5,{children:[c.jsxs(U5,{children:[k.price.toLocaleString()," ₽"]}),k.originalPrice>k.price&&c.jsxs(c.Fragment,{children:[c.jsxs(B5,{children:[k.originalPrice.toLocaleString()," ₽"]}),c.jsxs(H5,{children:["-",P(k.originalPrice,k.price),"%"]})]})]}),c.jsxs(W5,{to:`/courses/${k.slug}`,children:["Подробнее",c.jsx(JR,{size:16})]})]})]})]},k._id)})}):c.jsxs(Hg,{children:[c.jsx("h3",{children:"Курсы не найдены"}),c.jsx("p",{children:"Попробуйте изменить параметры поиска или фильтры"})]})}),b&&b.totalPages>1&&c.jsxs("div",{style:{display:"flex",justifyContent:"center",gap:"1rem",marginTop:"1rem"},children:[c.jsx(Co,{onClick:()=>p(k=>Math.max(1,k-1)),disabled:!b.hasPrev,children:"Назад"}),c.jsxs("span",{style:{alignSelf:"center"},children:["Страница ",b.page," из ",b.totalPages]}),c.jsx(Co,{onClick:()=>p(k=>k+1),disabled:!b.hasNext,children:"Далее"})]})]})},oi={login:e=>Zt.post("/auth/login",e),register:e=>Zt.post("/auth/register",e),getMe:()=>Zt.get("/auth/me"),updateProfile:e=>Zt.put("/auth/profile",e),changePassword:e=>Zt.put("/auth/change-password",e),forgotPassword:e=>Zt.post("/auth/forgot-password",e),resetPassword:e=>Zt.post("/auth/reset-password",e)},mw=j.createContext(void 0),K5={user:null,token:localStorage.getItem("token"),isLoading:!1,isAuthenticated:!1},G5=(e,t)=>{switch(t.type){case"AUTH_START":return{...e,isLoading:!0};case"AUTH_SUCCESS":return{...e,user:t.payload.user,token:t.payload.token,isLoading:!1,isAuthenticated:!0};case"AUTH_FAILURE":return{...e,user:null,token:null,isLoading:!1,isAuthenticated:!1};case"LOGOUT":return{...e,user:null,token:null,isLoading:!1,isAuthenticated:!1};case"UPDATE_USER":return{...e,user:t.payload};default:return e}},Y5=({children:e})=>{const[t,n]=j.useReducer(G5,K5);j.useEffect(()=>{(async()=>{const u=localStorage.getItem("token");if(u)try{n({type:"AUTH_START"});const d=await oi.getMe();n({type:"AUTH_SUCCESS",payload:{user:d.data,token:u}})}catch{localStorage.removeItem("token"),n({type:"AUTH_FAILURE"})}})()},[]);const a={...t,login:async(l,u)=>{try{n({type:"AUTH_START"});const d=await oi.login({email:l,password:u}),{user:f,token:h}=d.data;localStorage.setItem("token",h),n({type:"AUTH_SUCCESS",payload:{user:f,token:h}})}catch(d){throw n({type:"AUTH_FAILURE"}),d}},register:async l=>{try{n({type:"AUTH_START"});const u=await oi.register(l),{user:d,token:f}=u.data;localStorage.setItem("token",f),n({type:"AUTH_SUCCESS",payload:{user:d,token:f}})}catch(u){throw n({type:"AUTH_FAILURE"}),u}},logout:()=>{localStorage.removeItem("token"),n({type:"LOGOUT"})},updateUser:async l=>{try{const u=await oi.updateProfile(l);n({type:"UPDATE_USER",payload:u.data})}catch(u){throw u}}};return c.jsx(mw.Provider,{value:a,children:e})},Lr=()=>{const e=j.useContext(mw);if(e===void 0)throw new Error("useAuth must be used within an AuthProvider");return e},ou=x.div`
  padding: var(--spacing-xxl) 0;
  min-height: 80vh;
`,X5=x.section`
  background: linear-gradient(135deg, var(--color-accent) 0%, var(--color-background-secondary) 100%);
  padding: var(--spacing-xxl) 0;
  margin-bottom: var(--spacing-xxl);
`,Z5=x.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-lg);
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-xxl);
  align-items: center;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: var(--spacing-lg);
  }
`,J5=x.div``,e$=x(_.h1)`
  color: var(--color-text);
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: var(--spacing-md);
  line-height: 1.2;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`,t$=x(_.p)`
  color: var(--color-text-light);
  font-size: 1.25rem;
  line-height: 1.6;
  margin-bottom: var(--spacing-lg);
`,n$=x(_.div)`
  display: flex;
  align-items: center;
  gap: var(--spacing-lg);
  margin-bottom: var(--spacing-lg);
  flex-wrap: wrap;
  
  span {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--color-text-muted);
    font-size: 0.9rem;
  }
`,r$=x.div`
  height: 400px;
  background: linear-gradient(135deg, var(--color-accent) 0%, var(--color-background-secondary) 100%);
  background-image: ${e=>e.$imageUrl?`url(${e.$imageUrl})`:"none"};
  background-size: cover;
  background-position: center;
  border-radius: var(--border-radius-lg);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
    border-radius: var(--border-radius-lg);
  }
`,i$=x(_.button)`
  position: relative;
  z-index: 2;
  width: 80px;
  height: 80px;
  background: rgba(255, 255, 255, 0.9);
  border: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background: white;
    transform: scale(1.1);
  }
  
  svg {
    color: var(--color-primary);
    margin-left: 4px;
  }
`,o$=x.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-lg);
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: var(--spacing-xxl);
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: var(--spacing-lg);
  }
`,qi=x.section`
  margin-bottom: var(--spacing-xxl);
`,Ki=x.h2`
  color: var(--color-text);
  font-size: 1.75rem;
  font-weight: 600;
  margin-bottom: var(--spacing-lg);
`,s$=x.div`
  color: var(--color-text-light);
  line-height: 1.7;
  font-size: 1.1rem;
  margin-bottom: var(--spacing-xl);
`,a$=x.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--spacing-lg);
  margin-bottom: var(--spacing-xl);
`,l$=x(_.div)`
  background: white;
  padding: var(--spacing-lg);
  border-radius: var(--border-radius-md);
  box-shadow: var(--shadow-sm);
  border-left: 4px solid var(--color-primary);
  
  h4 {
    color: var(--color-text);
    font-size: 1.125rem;
    font-weight: 600;
    margin-bottom: var(--spacing-sm);
  }
  
  p {
    color: var(--color-text-light);
    font-size: 0.9rem;
    line-height: 1.5;
  }
`,c$=x.div`
  margin-bottom: var(--spacing-xl);
`,u$=x.div`
  background: white;
  padding: var(--spacing-lg);
  border-radius: var(--border-radius-md);
  box-shadow: var(--shadow-sm);
  margin-bottom: var(--spacing-md);
  border-left: 4px solid ${e=>e.$isCompleted?"var(--color-success)":"var(--color-border)"};
  transition: all 0.2s ease;
  
  &:hover {
    box-shadow: var(--shadow-md);
    transform: translateY(-2px);
  }
`,d$=x.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: var(--spacing-sm);
`,f$=x.h4`
  color: var(--color-text);
  font-size: 1.125rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
`,h$=x.span`
  color: var(--color-text-muted);
  font-size: 0.875rem;
`,p$=x.p`
  color: var(--color-text-light);
  font-size: 0.9rem;
  line-height: 1.5;
`,m$=x.aside`
  position: sticky;
  top: var(--spacing-lg);
  height: fit-content;
`,g$=x(_.div)`
  background: white;
  padding: var(--spacing-xl);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-lg);
  margin-bottom: var(--spacing-lg);
`,v$=x.div`
  text-align: center;
  margin-bottom: var(--spacing-lg);
`,y$=x.div`
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--color-primary);
  margin-bottom: var(--spacing-sm);
`,x$=x.div`
  font-size: 1.25rem;
  color: var(--color-text-muted);
  text-decoration: line-through;
  margin-bottom: var(--spacing-sm);
`,w$=x.div`
  background: var(--color-success);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: var(--border-radius-sm);
  font-size: 0.875rem;
  font-weight: 500;
  display: inline-block;
`,b$=x.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-lg);
`,Wg=x.button`
  width: 100%;
  padding: var(--spacing-md);
  background: var(--color-primary);
  color: white;
  border: none;
  border-radius: var(--border-radius-md);
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-sm);
  
  &:hover {
    background: var(--color-hover-primary);
    transform: translateY(-1px);
  }
`,S$=x.button`
  width: 100%;
  padding: var(--spacing-md);
  background: white;
  color: var(--color-primary);
  border: 2px solid var(--color-primary);
  border-radius: var(--border-radius-md);
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-sm);
  
  &:hover {
    background: var(--color-primary);
    color: white;
  }
`,j$=x.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-lg);
`,Qg=x.div`
  text-align: center;
  padding: var(--spacing-md);
  background: var(--color-background-secondary);
  border-radius: var(--border-radius-md);
  
  .stat-number {
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--color-primary);
    margin-bottom: 0.25rem;
  }
  
  .stat-label {
    font-size: 0.875rem;
    color: var(--color-text-muted);
  }
`,k$=x(_.div)`
  background: white;
  padding: var(--spacing-lg);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-md);
  text-align: center;
`,C$=x.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--color-accent) 0%, var(--color-background-secondary) 100%);
  background-image: ${e=>e.$imageUrl?`url(${e.$imageUrl})`:"none"};
  background-size: cover;
  background-position: center;
  margin: 0 auto var(--spacing-md);
`,P$=x.h4`
  color: var(--color-text);
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: var(--spacing-sm);
`,E$=x.p`
  color: var(--color-text-light);
  font-size: 0.9rem;
  line-height: 1.5;
  margin-bottom: var(--spacing-md);
`;x.div`
  display: flex;
  justify-content: center;
  gap: var(--spacing-sm);
  
  a {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: var(--color-accent);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--color-primary);
    text-decoration: none;
    transition: all 0.2s ease;
    
    &:hover {
      background: var(--color-primary);
      color: white;
      transform: translateY(-2px);
    }
  }
`;const T$=()=>{const{slug:e}=w2(),{isAuthenticated:t}=Lr(),[n,r]=B.useState(!1),{data:i,isLoading:o,isError:s}=Uy(["course",e],async()=>(await pw.getBySlug(e)).data.data,{enabled:!!e}),a=(p,y)=>Math.round((p-y)/p*100),l=()=>{if(!t){J.error("Войдите в аккаунт для записи на курс");return}J.success("Вы успешно записались на курс!"),r(!0)},u=()=>{J("Воспроизведение превью курса")};if(o)return c.jsx(ou,{children:c.jsx("div",{style:{textAlign:"center",padding:"var(--spacing-xxl) 0"},children:"Загрузка курса..."})});if(s||!i)return c.jsx(ou,{children:c.jsx("div",{style:{textAlign:"center",padding:"var(--spacing-xxl) 0"},children:"Курс не найден"})});const d=i,f=d.instructors&&d.instructors.length>0?d.instructors[0]:null,h=Array.isArray(d.lessons)?d.lessons.length:0;return c.jsxs(ou,{children:[c.jsx(X5,{children:c.jsxs(Z5,{children:[c.jsxs(J5,{children:[c.jsx(e$,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.6},children:d.title}),c.jsx(t$,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.6,delay:.1},children:d.shortDescription}),c.jsxs(n$,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.6,delay:.2},children:[typeof d.rating<"u"&&c.jsxs("span",{children:[c.jsx(Pr,{size:16}),d.rating]}),c.jsxs("span",{children:[c.jsx(Yo,{size:16}),d.duration]}),typeof d.studentsCount<"u"&&c.jsxs("span",{children:[c.jsx(hs,{size:16}),d.studentsCount," студентов"]}),c.jsxs("span",{children:[c.jsx(bt,{size:16}),h," уроков"]})]})]}),c.jsx(r$,{$imageUrl:d.image,children:c.jsx(i$,{onClick:u,whileHover:{scale:1.1},whileTap:{scale:.95},children:c.jsx(kh,{size:32})})})]})}),c.jsxs(o$,{children:[c.jsxs("div",{children:[c.jsxs(qi,{children:[c.jsx(Ki,{children:"Описание курса"}),c.jsx(s$,{children:d.description})]}),c.jsx(qi,{children:Array.isArray(d.outcomes)&&d.outcomes.length>0&&c.jsxs(c.Fragment,{children:[c.jsx(Ki,{children:"Что вы получите"}),c.jsx(a$,{children:d.outcomes.map((p,y)=>c.jsxs(l$,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.5,delay:y*.05},viewport:{once:!0},children:[c.jsx("h4",{children:p}),c.jsx("p",{})]},y))})]})}),c.jsxs(qi,{children:[c.jsx(Ki,{children:"Программа курса"}),c.jsx(c$,{children:Array.isArray(d.lessons)&&d.lessons.map((p,y)=>c.jsxs(u$,{$isCompleted:p.isCompleted,children:[c.jsxs(d$,{children:[c.jsxs(f$,{children:[p.isCompleted&&c.jsx(xt,{size:16,color:"var(--color-success)"}),p.title,p.isFree&&c.jsx("span",{style:{background:"var(--color-success)",color:"white",padding:"0.25rem 0.5rem",borderRadius:"var(--border-radius-sm)",fontSize:"0.75rem"},children:"Бесплатно"})]}),c.jsx(h$,{children:typeof p.duration=="number"?`${p.duration} мин`:p.duration})]}),c.jsx(p$,{children:p.description})]},p._id))})]}),c.jsxs(qi,{children:[c.jsx(Ki,{children:"Требования"}),c.jsx("ul",{style:{color:"var(--color-text-light)",lineHeight:1.7},children:Array.isArray(d.requirements)&&d.requirements.map((p,y)=>c.jsx("li",{style:{marginBottom:"0.5rem"},children:p},y))})]}),c.jsxs(qi,{children:[c.jsx(Ki,{children:"Результаты обучения"}),c.jsx("ul",{style:{color:"var(--color-text-light)",lineHeight:1.7},children:Array.isArray(d.outcomes)&&d.outcomes.map((p,y)=>c.jsx("li",{style:{marginBottom:"0.5rem"},children:p},y))})]})]}),c.jsxs(m$,{children:[c.jsxs(g$,{initial:{opacity:0,x:30},animate:{opacity:1,x:0},transition:{duration:.6,delay:.3},children:[c.jsxs(v$,{children:[c.jsxs(y$,{children:[d.price.toLocaleString()," ₽"]}),d.originalPrice>d.price&&c.jsxs(c.Fragment,{children:[c.jsxs(x$,{children:[d.originalPrice.toLocaleString()," ₽"]}),c.jsxs(w$,{children:["-",a(d.originalPrice,d.price),"%"]})]})]}),c.jsxs(j$,{children:[c.jsxs(Qg,{children:[c.jsx("div",{className:"stat-number",children:h}),c.jsx("div",{className:"stat-label",children:"Уроков"})]}),c.jsxs(Qg,{children:[c.jsx("div",{className:"stat-number",children:d.duration}),c.jsx("div",{className:"stat-label",children:"Длительность"})]})]}),c.jsxs(b$,{children:[n?c.jsxs(Wg,{children:[c.jsx(bt,{size:20}),"Перейти к курсу"]}):c.jsxs(Wg,{onClick:l,children:[c.jsx(a3,{size:20}),"Записаться на курс"]}),c.jsxs(S$,{children:[c.jsx(zd,{size:20}),"Добавить в избранное"]})]}),c.jsx("div",{style:{textAlign:"center",color:"var(--color-text-muted)",fontSize:"0.875rem"},children:"Гарантия возврата денег в течение 30 дней"})]}),f&&c.jsxs(k$,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.4},children:[c.jsx(C$,{$imageUrl:f.avatar||""}),c.jsx(P$,{children:`${f.firstName||""} ${f.lastName||""}`.trim()}),f.bio&&c.jsx(E$,{children:f.bio})]})]})]})]})},R$=x.div`
  padding: var(--spacing-xxl) 0;
  min-height: 80vh;
`,A$=x.section`
  text-align: center;
  margin-bottom: var(--spacing-xxl);
  background: linear-gradient(135deg, var(--color-accent) 0%, var(--color-background-secondary) 100%);
  padding: var(--spacing-xxl) 0;
  border-radius: var(--border-radius-lg);
`,$$=x(_.h1)`
  color: var(--color-text);
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: var(--spacing-lg);
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`,O$=x(_.p)`
  color: var(--color-text-light);
  font-size: 1.25rem;
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto;
`,L$=x.section`
  margin-bottom: var(--spacing-xxl);
`,Bs=x.h2`
  color: var(--color-text);
  font-size: 2.5rem;
  font-weight: 600;
  text-align: center;
  margin-bottom: var(--spacing-xl);
`,F$=x.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-xl);
  margin-bottom: var(--spacing-xxl);
`,M$=x(_.div)`
  background: white;
  padding: var(--spacing-xl);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-md);
  text-align: center;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-lg);
  }
`,z$=x.div`
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto var(--spacing-lg);
  
  svg {
    color: white;
    width: 40px;
    height: 40px;
  }
`,N$=x.h3`
  color: var(--color-text);
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: var(--spacing-md);
`,_$=x.p`
  color: var(--color-text-light);
  line-height: 1.6;
`,D$=x.section`
  margin-bottom: var(--spacing-xxl);
  background: var(--color-background-secondary);
  padding: var(--spacing-xxl) 0;
  border-radius: var(--border-radius-lg);
`,I$=x.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--spacing-lg);
`,V$=x(_.div)`
  background: white;
  padding: var(--spacing-lg);
  border-radius: var(--border-radius-md);
  box-shadow: var(--shadow-sm);
  text-align: center;
  
  &:hover {
    box-shadow: var(--shadow-md);
  }
`,U$=x.div`
  width: 60px;
  height: 60px;
  background: var(--color-accent);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto var(--spacing-md);
  
  svg {
    color: var(--color-primary);
    width: 30px;
    height: 30px;
  }
`,B$=x.h4`
  color: var(--color-text);
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: var(--spacing-sm);
`,H$=x.p`
  color: var(--color-text-light);
  font-size: 0.9rem;
  line-height: 1.5;
`,W$=x.section`
  margin-bottom: var(--spacing-xxl);
`,Q$=x.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: var(--spacing-xl);
`,q$=x(_.div)`
  background: white;
  padding: var(--spacing-xl);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-md);
  border-left: 4px solid var(--color-primary);
`,K$=x.div`
  width: 40px;
  height: 40px;
  background: var(--color-primary);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  margin-bottom: var(--spacing-md);
`,G$=x.h3`
  color: var(--color-text);
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: var(--spacing-md);
`,Y$=x.p`
  color: var(--color-text-light);
  line-height: 1.6;
`,X$=x.section`
  background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%);
  padding: var(--spacing-xxl) 0;
  border-radius: var(--border-radius-lg);
  margin-bottom: var(--spacing-xxl);
`,Z$=x.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--spacing-xl);
  text-align: center;
`,J$=x(_.div)`
  color: white;
`,e4=x.div`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: var(--spacing-sm);
`,t4=x.div`
  font-size: 1.125rem;
  opacity: 0.9;
`,n4=x.section`
  margin-bottom: var(--spacing-xxl);
`,r4=x.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-lg);
`,i4=x(_.div)`
  background: white;
  padding: var(--spacing-lg);
  border-radius: var(--border-radius-md);
  box-shadow: var(--shadow-sm);
  display: flex;
  align-items: flex-start;
  gap: var(--spacing-md);
  
  &:hover {
    box-shadow: var(--shadow-md);
  }
`,o4=x.div`
  width: 50px;
  height: 50px;
  background: var(--color-accent);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  
  svg {
    color: var(--color-primary);
    width: 24px;
    height: 24px;
  }
`,s4=x.div`
  flex: 1;
`,a4=x.h4`
  color: var(--color-text);
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: var(--spacing-sm);
`,l4=x.p`
  color: var(--color-text-light);
  font-size: 0.9rem;
  line-height: 1.5;
`,c4=()=>{const e=[{icon:c.jsx(zd,{}),title:"Наша миссия",description:"Сделать качественное образование в области флористики доступным для каждого, кто мечтает о творческой профессии."},{icon:c.jsx(B1,{}),title:"Наша цель",description:"Подготовить профессиональных флористов, способных создавать уникальные композиции и успешно вести бизнес."},{icon:c.jsx(hs,{}),title:"Наше сообщество",description:"Создать дружное сообщество флористов, где каждый может поделиться опытом и найти поддержку."}],t=[{icon:c.jsx(Ci,{}),title:"Качество",description:"Мы гарантируем высокое качество обучения и постоянное обновление программ."},{icon:c.jsx(zd,{}),title:"Забота",description:"Индивидуальный подход к каждому студенту и поддержка на всех этапах обучения."},{icon:c.jsx(bt,{}),title:"Инновации",description:"Использование современных технологий и актуальных методик преподавания."},{icon:c.jsx(Pr,{}),title:"Экспертиза",description:"Обучение у ведущих специалистов с многолетним опытом в индустрии."}],n=[{number:"01",title:"Практический подход",description:"Все курсы построены на практических занятиях. Вы не просто изучаете теорию, а сразу применяете знания на практике."},{number:"02",title:"Персональное сопровождение",description:"Каждый студент получает индивидуальную поддержку от преподавателей и кураторов на протяжении всего обучения."},{number:"03",title:"Бизнес-ориентированность",description:"Помимо творческих навыков, вы получаете знания по ведению бизнеса и продвижению в социальных сетях."},{number:"04",title:"Гибкое обучение",description:"Учитесь в удобном для вас темпе. Доступ к материалам курса остается навсегда."}],r=[{number:"500+",label:"Выпускников"},{number:"15+",label:"Экспертов"},{number:"95%",label:"Успешных проектов"},{number:"24/7",label:"Поддержка"}],i=[{icon:c.jsx(xt,{}),title:"Бонусные уроки",description:"К каждому курсу прилагаются уроки по бизнесу и продвижению в социальных сетях."},{icon:c.jsx(xt,{}),title:"Скидки на курсы",description:"Скидка 20% на каждый следующий курс по бизнесу и социальным сетям."},{icon:c.jsx(xt,{}),title:"База поставщиков",description:"Доступ к проверенной базе поставщиков цветов и материалов для студентов."},{icon:c.jsx(xt,{}),title:"Сертификат",description:"Получение сертификата по завершении курса с возможностью трудоустройства."}];return c.jsxs(R$,{children:[c.jsxs(A$,{children:[c.jsx($$,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.6},children:"О школе Flerr"}),c.jsx(O$,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.6,delay:.2},children:"Мы создаем будущее флористики, обучая талантливых людей создавать красоту и строить успешный бизнес в мире цветов."})]}),c.jsxs(L$,{children:[c.jsx(Bs,{children:"Наша миссия и цели"}),c.jsx(F$,{children:e.map((o,s)=>c.jsxs(M$,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.6,delay:s*.1},viewport:{once:!0},children:[c.jsx(z$,{children:o.icon}),c.jsx(N$,{children:o.title}),c.jsx(_$,{children:o.description})]},s))})]}),c.jsxs(D$,{children:[c.jsx(Bs,{children:"Наши ценности"}),c.jsx(I$,{children:t.map((o,s)=>c.jsxs(V$,{initial:{opacity:0,scale:.9},whileInView:{opacity:1,scale:1},transition:{duration:.5,delay:s*.1},viewport:{once:!0},children:[c.jsx(U$,{children:o.icon}),c.jsx(B$,{children:o.title}),c.jsx(H$,{children:o.description})]},s))})]}),c.jsxs(W$,{children:[c.jsx(Bs,{children:"Наш подход к обучению"}),c.jsx(Q$,{children:n.map((o,s)=>c.jsxs(q$,{initial:{opacity:0,x:-30},whileInView:{opacity:1,x:0},transition:{duration:.6,delay:s*.1},viewport:{once:!0},children:[c.jsx(K$,{children:o.number}),c.jsx(G$,{children:o.title}),c.jsx(Y$,{children:o.description})]},s))})]}),c.jsx(X$,{children:c.jsx(Z$,{children:r.map((o,s)=>c.jsxs(J$,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.6,delay:s*.1},viewport:{once:!0},children:[c.jsx(e4,{children:o.number}),c.jsx(t4,{children:o.label})]},s))})}),c.jsxs(n4,{children:[c.jsx(Bs,{children:"Преимущества обучения"}),c.jsx(r4,{children:i.map((o,s)=>c.jsxs(i4,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.5,delay:s*.1},viewport:{once:!0},children:[c.jsx(o4,{children:o.icon}),c.jsxs(s4,{children:[c.jsx(a4,{children:o.title}),c.jsx(l4,{children:o.description})]})]},s))})]})]})},qg=x.div`
  padding: var(--spacing-xxl) 0;
  min-height: 80vh;
`,u4=x.div`
  text-align: center;
  margin-bottom: var(--spacing-xxl);
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 var(--spacing-lg);
`,d4=x(_.h1)`
  color: var(--color-text);
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: var(--spacing-md);
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`,f4=x(_.p)`
  color: var(--color-text-light);
  font-size: 1.25rem;
  line-height: 1.6;
  margin-bottom: var(--spacing-lg);
`,h4=x(_.div)`
  display: flex;
  justify-content: center;
  gap: var(--spacing-xl);
  flex-wrap: wrap;
  
  .stat {
    text-align: center;
    
    .number {
      font-size: 2rem;
      font-weight: 700;
      color: var(--color-primary);
      margin-bottom: 0.25rem;
    }
    
    .label {
      color: var(--color-text-muted);
      font-size: 0.875rem;
    }
  }
`,p4=x.div`
  max-width: 1200px;
  margin: 0 auto var(--spacing-xxl);
  padding: 0 var(--spacing-lg);
`,m4=x.div`
  background: white;
  padding: var(--spacing-lg);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-sm);
  display: flex;
  gap: var(--spacing-lg);
  align-items: center;
  flex-wrap: wrap;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
  }
`,g4=x.div`
  flex: 1;
  min-width: 250px;
  position: relative;
  
  input {
    width: 100%;
    padding: var(--spacing-md) var(--spacing-md) var(--spacing-md) 3rem;
    border: 1px solid var(--color-border);
    border-radius: var(--border-radius-md);
    font-size: 1rem;
    
    &:focus {
      outline: none;
      border-color: var(--color-primary);
      box-shadow: 0 0 0 3px rgba(128, 0, 128, 0.1);
    }
  }
  
  svg {
    position: absolute;
    left: var(--spacing-md);
    top: 50%;
    transform: translateY(-50%);
    color: var(--color-text-muted);
  }
`,Kg=x.select`
  padding: var(--spacing-md);
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius-md);
  font-size: 1rem;
  background: white;
  min-width: 150px;
  
  &:focus {
    outline: none;
    border-color: var(--color-primary);
  }
`,v4=x.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-lg);
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: var(--spacing-lg);
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,y4=x(_.div)`
  background: white;
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-md);
  overflow: hidden;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-lg);
  }
`,x4=x.div`
  position: relative;
  height: 200px;
  background: linear-gradient(135deg, var(--color-accent) 0%, var(--color-background-secondary) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
`,w4=x.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: white;
  background-image: ${e=>e.$imageUrl?`url(${e.$imageUrl})`:"none"};
  background-size: cover;
  background-position: center;
  border: 4px solid white;
  box-shadow: var(--shadow-md);
`,b4=x.div`
  padding: var(--spacing-lg);
`,S4=x.h3`
  color: var(--color-text);
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: var(--spacing-sm);
`,j4=x.p`
  color: var(--color-primary);
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: var(--spacing-md);
`,k4=x.p`
  color: var(--color-text-light);
  font-size: 0.9rem;
  line-height: 1.6;
  margin-bottom: var(--spacing-md);
`,C4=x.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-md);
  
  .stat {
    text-align: center;
    
    .number {
      font-size: 1.25rem;
      font-weight: 600;
      color: var(--color-primary);
      margin-bottom: 0.25rem;
    }
    
    .label {
      font-size: 0.75rem;
      color: var(--color-text-muted);
    }
  }
`,P4=x.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-md);
  flex-wrap: wrap;
  
  span {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--color-text-muted);
    font-size: 0.875rem;
  }
`,E4=x.div`
  display: flex;
  gap: var(--spacing-sm);
  margin-bottom: var(--spacing-md);
  
  a {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: var(--color-accent);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--color-primary);
    text-decoration: none;
    transition: all 0.2s ease;
    
    &:hover {
      background: var(--color-primary);
      color: white;
      transform: translateY(-2px);
    }
  }
`,T4=x.div`
  display: flex;
  gap: var(--spacing-sm);
  
  button {
    flex: 1;
    padding: var(--spacing-sm);
    border: none;
    border-radius: var(--border-radius-md);
    font-size: 0.875rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
  }
`,R4=x.button`
  background: var(--color-primary);
  color: white;
  
  &:hover {
    background: var(--color-hover-primary);
  }
`,A4=x.button`
  background: var(--color-accent);
  color: var(--color-primary);
  
  &:hover {
    background: var(--color-primary);
    color: white;
  }
`,$4=x.div`
  text-align: center;
  padding: var(--spacing-xxl) 0;
  color: var(--color-text-muted);
  
  h3 {
    font-size: 1.5rem;
    margin-bottom: var(--spacing-md);
  }
  
  p {
    font-size: 1rem;
  }
`,O4=x.div`
  position: absolute;
  top: var(--spacing-md);
  right: var(--spacing-md);
  background: var(--color-primary);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: var(--border-radius-sm);
  font-size: 0.75rem;
  font-weight: 500;
`,L4=()=>{const[e,t]=j.useState([]),[n,r]=j.useState(!0),[i,o]=j.useState(""),[s,a]=j.useState(""),[l,u]=j.useState(""),d=[{_id:"1",name:"Анна Петрова",title:"Ведущий флорист",avatar:"/images/instructor-1.jpg",bio:'Профессиональный флорист с 10-летним опытом работы. Основатель студии "Цветочная мастерская". Специализируется на свадебной флористике и интерьерных композициях.',experience:10,rating:4.9,studentsCount:156,coursesCount:8,specialization:"Свадебная флористика",location:"Москва",isFeatured:!0,socialMedia:{instagram:"@anna_florist",facebook:"anna.petrovna",website:"www.annaflorist.com"}},{_id:"2",name:"Мария Сидорова",title:"Флорист-дизайнер",avatar:"/images/instructor-2.jpg",bio:'Дизайнер с художественным образованием. Создает уникальные композиции из сухих и искусственных цветов. Автор курса "Интерьерные композиции".',experience:8,rating:4.8,studentsCount:98,coursesCount:5,specialization:"Интерьерные композиции",location:"Санкт-Петербург",isFeatured:!1,socialMedia:{instagram:"@maria_design",facebook:"maria.sidorova",website:"www.mariadesign.ru"}},{_id:"3",name:"Елена Козлова",title:"Коммерческий флорист",avatar:"/images/instructor-3.jpg",bio:'Эксперт по коммерческой флористике. Помогает начинающим флористам открыть свой бизнес. Автор популярного курса "Коммерческий флорист".',experience:12,rating:4.9,studentsCount:203,coursesCount:12,specialization:"Коммерческая флористика",location:"Москва",isFeatured:!0,socialMedia:{instagram:"@elena_commercial",facebook:"elena.kozlovna",website:"www.elenaflorist.ru"}},{_id:"4",name:"Ольга Иванова",title:"Мастер свадебной флористики",avatar:"/images/instructor-4.jpg",bio:"Специалист по свадебной флористике с международным опытом. Работала в Италии и Франции. Создает роскошные свадебные композиции.",experience:15,rating:5,studentsCount:89,coursesCount:6,specialization:"Свадебная флористика",location:"Казань",isFeatured:!1,socialMedia:{instagram:"@olga_wedding",facebook:"olga.ivanova",website:"www.olgawedding.ru"}},{_id:"5",name:"Татьяна Смирнова",title:"Флорист-преподаватель",avatar:"/images/instructor-5.jpg",bio:"Опытный преподаватель с педагогическим образованием. Специализируется на обучении начинающих флористов. Автор методических пособий.",experience:7,rating:4.7,studentsCount:134,coursesCount:9,specialization:"Обучение флористике",location:"Екатеринбург",isFeatured:!1,socialMedia:{instagram:"@tatiana_teach",facebook:"tatiana.smirnova",website:"www.tatianateach.ru"}},{_id:"6",name:"Ирина Волкова",title:"Дизайнер интерьерных композиций",avatar:"/images/instructor-6.jpg",bio:"Художник-дизайнер, специализирующийся на создании интерьерных композиций из сухих цветов. Автор уникальных техник сохранения цветов.",experience:9,rating:4.8,studentsCount:76,coursesCount:4,specialization:"Интерьерные композиции",location:"Новосибирск",isFeatured:!1,socialMedia:{instagram:"@irina_interior",facebook:"irina.volkova",website:"www.irinainterior.ru"}}];j.useEffect(()=>{setTimeout(()=>{t(d),r(!1)},1e3)},[]);const f=e.filter(m=>{const g=m.name.toLowerCase().includes(i.toLowerCase())||m.specialization.toLowerCase().includes(i.toLowerCase()),v=!s||m.experience>=parseInt(s),b=!l||m.specialization===l;return g&&v&&b}),h=m=>{J.success(`Связаться с ${m.name}`)},p=m=>{J(`Переход к профилю ${m.name}`)},y=e.length,w=e.filter(m=>m.isFeatured).length,S=(e.reduce((m,g)=>m+g.rating,0)/e.length).toFixed(1);return n?c.jsx(qg,{children:c.jsx("div",{style:{textAlign:"center",padding:"var(--spacing-xxl) 0"},children:"Загрузка преподавателей..."})}):c.jsxs(qg,{children:[c.jsxs(u4,{children:[c.jsx(d4,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.6},children:"Наши преподаватели"}),c.jsx(f4,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.6,delay:.1},children:"Учитесь у лучших флористов России с многолетним опытом работы"}),c.jsxs(h4,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.6,delay:.2},children:[c.jsxs("div",{className:"stat",children:[c.jsx("div",{className:"number",children:y}),c.jsx("div",{className:"label",children:"Преподавателей"})]}),c.jsxs("div",{className:"stat",children:[c.jsx("div",{className:"number",children:w}),c.jsx("div",{className:"label",children:"Ведущих специалистов"})]}),c.jsxs("div",{className:"stat",children:[c.jsx("div",{className:"number",children:S}),c.jsx("div",{className:"label",children:"Средний рейтинг"})]})]})]}),c.jsx(p4,{children:c.jsxs(m4,{children:[c.jsxs(g4,{children:[c.jsx(Ch,{size:20}),c.jsx("input",{type:"text",placeholder:"Поиск по имени или специализации...",value:i,onChange:m=>o(m.target.value)})]}),c.jsxs(Kg,{value:s,onChange:m=>a(m.target.value),children:[c.jsx("option",{value:"",children:"Любой опыт"}),c.jsx("option",{value:"5",children:"От 5 лет"}),c.jsx("option",{value:"10",children:"От 10 лет"}),c.jsx("option",{value:"15",children:"От 15 лет"})]}),c.jsxs(Kg,{value:l,onChange:m=>u(m.target.value),children:[c.jsx("option",{value:"",children:"Все специализации"}),c.jsx("option",{value:"Свадебная флористика",children:"Свадебная флористика"}),c.jsx("option",{value:"Интерьерные композиции",children:"Интерьерные композиции"}),c.jsx("option",{value:"Коммерческая флористика",children:"Коммерческая флористика"}),c.jsx("option",{value:"Обучение флористике",children:"Обучение флористике"})]})]})}),c.jsx(v4,{children:c.jsx(Wn,{mode:"wait",children:f.length>0?f.map((m,g)=>c.jsxs(y4,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:g*.1},layout:!0,children:[c.jsxs(x4,{children:[m.isFeatured&&c.jsx(O4,{children:"Ведущий специалист"}),c.jsx(w4,{$imageUrl:m.avatar})]}),c.jsxs(b4,{children:[c.jsx(S4,{children:m.name}),c.jsx(j4,{children:m.title}),c.jsx(k4,{children:m.bio}),c.jsxs(C4,{children:[c.jsxs("div",{className:"stat",children:[c.jsx("div",{className:"number",children:m.experience}),c.jsx("div",{className:"label",children:"лет опыта"})]}),c.jsxs("div",{className:"stat",children:[c.jsx("div",{className:"number",children:m.studentsCount}),c.jsx("div",{className:"label",children:"студентов"})]}),c.jsxs("div",{className:"stat",children:[c.jsx("div",{className:"number",children:m.coursesCount}),c.jsx("div",{className:"label",children:"курсов"})]})]}),c.jsxs(P4,{children:[c.jsxs("span",{children:[c.jsx(Pr,{size:16}),m.rating]}),c.jsxs("span",{children:[c.jsx(jh,{size:16}),m.location]}),c.jsxs("span",{children:[c.jsx(Ci,{size:16}),m.specialization]})]}),c.jsxs(E4,{children:[c.jsx("a",{href:"#",title:"Instagram",children:c.jsx(Sh,{size:18})}),c.jsx("a",{href:"#",title:"Facebook",children:c.jsx(bh,{size:18})}),c.jsx("a",{href:"#",title:"Website",children:c.jsx(Md,{size:18})})]}),c.jsxs(T4,{children:[c.jsxs(R4,{onClick:()=>p(m),children:[c.jsx(bt,{size:16}),"Профиль"]}),c.jsxs(A4,{onClick:()=>h(m),children:[c.jsx(Li,{size:16}),"Связаться"]})]})]})]},m._id)):c.jsxs($4,{children:[c.jsx("h3",{children:"Преподаватели не найдены"}),c.jsx("p",{children:"Попробуйте изменить параметры поиска"})]})})})]})},Gg=x.div`
  padding: var(--spacing-xxl) 0;
  min-height: 80vh;
`,F4=x.div`
  text-align: center;
  margin-bottom: var(--spacing-xxl);
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 var(--spacing-lg);
`,M4=x(_.h1)`
  color: var(--color-text);
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: var(--spacing-md);
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`,z4=x(_.p)`
  color: var(--color-text-light);
  font-size: 1.25rem;
  line-height: 1.6;
  margin-bottom: var(--spacing-lg);
`,N4=x(_.div)`
  display: flex;
  justify-content: center;
  gap: var(--spacing-xl);
  flex-wrap: wrap;
  
  .stat {
    text-align: center;
    
    .number {
      font-size: 2rem;
      font-weight: 700;
      color: var(--color-primary);
      margin-bottom: 0.25rem;
    }
    
    .label {
      color: var(--color-text-muted);
      font-size: 0.875rem;
    }
  }
`,_4=x.div`
  max-width: 1200px;
  margin: 0 auto var(--spacing-xxl);
  padding: 0 var(--spacing-lg);
`,D4=x.div`
  background: white;
  padding: var(--spacing-lg);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-sm);
  display: flex;
  gap: var(--spacing-lg);
  align-items: center;
  flex-wrap: wrap;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
  }
`,I4=x.div`
  flex: 1;
  min-width: 250px;
  position: relative;
  
  input {
    width: 100%;
    padding: var(--spacing-md) var(--spacing-md) var(--spacing-md) 3rem;
    border: 1px solid var(--color-border);
    border-radius: var(--border-radius-md);
    font-size: 1rem;
    
    &:focus {
      outline: none;
      border-color: var(--color-primary);
      box-shadow: 0 0 0 3px rgba(128, 0, 128, 0.1);
    }
  }
  
  svg {
    position: absolute;
    left: var(--spacing-md);
    top: 50%;
    transform: translateY(-50%);
    color: var(--color-text-muted);
  }
`,Yg=x.select`
  padding: var(--spacing-md);
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius-md);
  font-size: 1rem;
  background: white;
  min-width: 150px;
  
  &:focus {
    outline: none;
    border-color: var(--color-primary);
  }
`,V4=x.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-lg);
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: var(--spacing-lg);
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,U4=x(_.div)`
  background: white;
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-md);
  overflow: hidden;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-lg);
  }
`,B4=x.div`
  position: relative;
  height: 200px;
  background: linear-gradient(135deg, var(--color-accent) 0%, var(--color-background-secondary) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
`,H4=x.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: white;
  background-image: ${e=>e.$imageUrl?`url(${e.$imageUrl})`:"none"};
  background-size: cover;
  background-position: center;
  border: 4px solid white;
  box-shadow: var(--shadow-md);
`,W4=x.div`
  padding: var(--spacing-lg);
`,Q4=x.h3`
  color: var(--color-text);
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: var(--spacing-sm);
`,q4=x.p`
  color: var(--color-primary);
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: var(--spacing-md);
`,K4=x.p`
  color: var(--color-text-light);
  font-size: 0.9rem;
  line-height: 1.6;
  margin-bottom: var(--spacing-md);
`,G4=x.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-md);
  
  .stat {
    text-align: center;
    
    .number {
      font-size: 1.25rem;
      font-weight: 600;
      color: var(--color-primary);
      margin-bottom: 0.25rem;
    }
    
    .label {
      font-size: 0.75rem;
      color: var(--color-text-muted);
    }
  }
`,Y4=x.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-md);
  flex-wrap: wrap;
  
  span {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--color-text-muted);
    font-size: 0.875rem;
  }
`,X4=x.div`
  display: flex;
  gap: var(--spacing-sm);
  margin-bottom: var(--spacing-md);
  flex-wrap: wrap;
`,su=x.span`
  padding: 0.25rem 0.75rem;
  border-radius: var(--border-radius-sm);
  font-size: 0.75rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  
  ${e=>{switch(e.$type){case"verified":return`
          background: var(--color-success);
          color: white;
        `;case"featured":return`
          background: var(--color-primary);
          color: white;
        `;case"premium":return`
          background: var(--color-warning);
          color: white;
        `;default:return""}}}
`,Z4=x.div`
  margin-bottom: var(--spacing-md);
  
  .contact-item {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--color-text-muted);
    font-size: 0.875rem;
    margin-bottom: 0.5rem;
    
    a {
      color: var(--color-primary);
      text-decoration: none;
      
      &:hover {
        text-decoration: underline;
      }
    }
  }
`,J4=x.div`
  display: flex;
  gap: var(--spacing-sm);
  margin-bottom: var(--spacing-md);
  
  a {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: var(--color-accent);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--color-primary);
    text-decoration: none;
    transition: all 0.2s ease;
    
    &:hover {
      background: var(--color-primary);
      color: white;
      transform: translateY(-2px);
    }
  }
`,eO=x.div`
  display: flex;
  gap: var(--spacing-sm);
  
  button {
    flex: 1;
    padding: var(--spacing-sm);
    border: none;
    border-radius: var(--border-radius-md);
    font-size: 0.875rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
  }
`,tO=x.button`
  background: var(--color-primary);
  color: white;
  
  &:hover {
    background: var(--color-hover-primary);
  }
`,nO=x.button`
  background: var(--color-accent);
  color: var(--color-primary);
  
  &:hover {
    background: var(--color-primary);
    color: white;
  }
`,rO=x.div`
  text-align: center;
  padding: var(--spacing-xxl) 0;
  color: var(--color-text-muted);
  
  h3 {
    font-size: 1.5rem;
    margin-bottom: var(--spacing-md);
  }
  
  p {
    font-size: 1rem;
  }
`,iO=()=>{const[e,t]=j.useState([]),[n,r]=j.useState(!0),[i,o]=j.useState(""),[s,a]=j.useState(""),[l,u]=j.useState(""),d=[{_id:"1",name:"Цветочный Рай",category:"Свежие цветы",description:"Поставщик свежих цветов премиум-класса. Работаем с лучшими плантациями Голландии, Эквадора и Кении. Доставка по всей России.",logo:"/images/supplier-1.jpg",rating:4.9,productsCount:150,deliveryTime:"1-2 дня",region:"Москва",isVerified:!0,isFeatured:!0,isPremium:!0,contact:{phone:"+7 (495) 123-45-67",email:"info@flowerparadise.ru",website:"www.flowerparadise.ru"},socialMedia:{instagram:"@flowerparadise",facebook:"flowerparadise.ru"}},{_id:"2",name:"Сухие Цветы",category:"Сухие цветы",description:"Специализируемся на поставке качественных сухих цветов и декоративных элементов для интерьерных композиций.",logo:"/images/supplier-2.jpg",rating:4.7,productsCount:89,deliveryTime:"3-5 дней",region:"Санкт-Петербург",isVerified:!0,isFeatured:!1,isPremium:!1,contact:{phone:"+7 (812) 987-65-43",email:"sales@dryflowers.ru",website:"www.dryflowers.ru"},socialMedia:{instagram:"@dryflowers",facebook:"dryflowers.ru"}},{_id:"3",name:"Искусственные Цветы",category:"Искусственные цветы",description:"Производитель высококачественных искусственных цветов для декора и флористики. Широкий ассортимент и доступные цены.",logo:"/images/supplier-3.jpg",rating:4.5,productsCount:234,deliveryTime:"2-3 дня",region:"Екатеринбург",isVerified:!0,isFeatured:!1,isPremium:!0,contact:{phone:"+7 (343) 456-78-90",email:"info@artificialflowers.ru",website:"www.artificialflowers.ru"},socialMedia:{instagram:"@artificialflowers",facebook:"artificialflowers.ru"}},{_id:"4",name:"Флористические Материалы",category:"Материалы и инструменты",description:"Поставщик профессиональных материалов и инструментов для флористов. Ленты, проволока, флористическая губка, ножницы.",logo:"/images/supplier-4.jpg",rating:4.8,productsCount:567,deliveryTime:"1-3 дня",region:"Москва",isVerified:!0,isFeatured:!0,isPremium:!1,contact:{phone:"+7 (495) 234-56-78",email:"sales@floristmaterials.ru",website:"www.floristmaterials.ru"},socialMedia:{instagram:"@floristmaterials",facebook:"floristmaterials.ru"}},{_id:"5",name:"Упаковка для Букетов",category:"Упаковка",description:"Специализируемся на поставке качественной упаковки для букетов и подарков. Бумага, ленты, коробки, пакеты.",logo:"/images/supplier-5.jpg",rating:4.6,productsCount:123,deliveryTime:"2-4 дня",region:"Казань",isVerified:!0,isFeatured:!1,isPremium:!1,contact:{phone:"+7 (843) 345-67-89",email:"info@packaging.ru",website:"www.packaging.ru"},socialMedia:{instagram:"@packaging",facebook:"packaging.ru"}},{_id:"6",name:"Экзотические Цветы",category:"Свежие цветы",description:"Поставщик экзотических цветов и редких сортов. Орхидеи, антуриумы, стрелиции и другие тропические растения.",logo:"/images/supplier-6.jpg",rating:4.9,productsCount:78,deliveryTime:"3-7 дней",region:"Новосибирск",isVerified:!0,isFeatured:!0,isPremium:!0,contact:{phone:"+7 (383) 456-78-90",email:"sales@exoticflowers.ru",website:"www.exoticflowers.ru"},socialMedia:{instagram:"@exoticflowers",facebook:"exoticflowers.ru"}}];j.useEffect(()=>{setTimeout(()=>{t(d),r(!1)},1e3)},[]);const f=e.filter(m=>{const g=m.name.toLowerCase().includes(i.toLowerCase())||m.category.toLowerCase().includes(i.toLowerCase())||m.description.toLowerCase().includes(i.toLowerCase()),v=!s||m.category===s,b=!l||m.region===l;return g&&v&&b}),h=m=>{J.success(`Связаться с ${m.name}`)},p=m=>{J(`Переход к каталогу ${m.name}`)},y=e.length,w=e.filter(m=>m.isVerified).length,S=e.filter(m=>m.isFeatured).length;return n?c.jsx(Gg,{children:c.jsx("div",{style:{textAlign:"center",padding:"var(--spacing-xxl) 0"},children:"Загрузка поставщиков..."})}):c.jsxs(Gg,{children:[c.jsxs(F4,{children:[c.jsx(M4,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.6},children:"База поставщиков"}),c.jsx(z4,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.6,delay:.1},children:"Надежные поставщики цветов, материалов и инструментов для флористов"}),c.jsxs(N4,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.6,delay:.2},children:[c.jsxs("div",{className:"stat",children:[c.jsx("div",{className:"number",children:y}),c.jsx("div",{className:"label",children:"Поставщиков"})]}),c.jsxs("div",{className:"stat",children:[c.jsx("div",{className:"number",children:w}),c.jsx("div",{className:"label",children:"Проверенных"})]}),c.jsxs("div",{className:"stat",children:[c.jsx("div",{className:"number",children:S}),c.jsx("div",{className:"label",children:"Рекомендуемых"})]})]})]}),c.jsx(_4,{children:c.jsxs(D4,{children:[c.jsxs(I4,{children:[c.jsx(Ch,{size:20}),c.jsx("input",{type:"text",placeholder:"Поиск по названию, категории или описанию...",value:i,onChange:m=>o(m.target.value)})]}),c.jsxs(Yg,{value:s,onChange:m=>a(m.target.value),children:[c.jsx("option",{value:"",children:"Все категории"}),c.jsx("option",{value:"Свежие цветы",children:"Свежие цветы"}),c.jsx("option",{value:"Сухие цветы",children:"Сухие цветы"}),c.jsx("option",{value:"Искусственные цветы",children:"Искусственные цветы"}),c.jsx("option",{value:"Материалы и инструменты",children:"Материалы и инструменты"}),c.jsx("option",{value:"Упаковка",children:"Упаковка"})]}),c.jsxs(Yg,{value:l,onChange:m=>u(m.target.value),children:[c.jsx("option",{value:"",children:"Все регионы"}),c.jsx("option",{value:"Москва",children:"Москва"}),c.jsx("option",{value:"Санкт-Петербург",children:"Санкт-Петербург"}),c.jsx("option",{value:"Екатеринбург",children:"Екатеринбург"}),c.jsx("option",{value:"Казань",children:"Казань"}),c.jsx("option",{value:"Новосибирск",children:"Новосибирск"})]})]})}),c.jsx(V4,{children:c.jsx(Wn,{mode:"wait",children:f.length>0?f.map((m,g)=>c.jsxs(U4,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:g*.1},layout:!0,children:[c.jsx(B4,{children:c.jsx(H4,{$imageUrl:m.logo})}),c.jsxs(W4,{children:[c.jsx(Q4,{children:m.name}),c.jsx(q4,{children:m.category}),c.jsx(K4,{children:m.description}),c.jsxs(G4,{children:[c.jsxs("div",{className:"stat",children:[c.jsx("div",{className:"number",children:m.rating}),c.jsx("div",{className:"label",children:"рейтинг"})]}),c.jsxs("div",{className:"stat",children:[c.jsx("div",{className:"number",children:m.productsCount}),c.jsx("div",{className:"label",children:"товаров"})]}),c.jsxs("div",{className:"stat",children:[c.jsx("div",{className:"number",children:m.deliveryTime}),c.jsx("div",{className:"label",children:"доставка"})]})]}),c.jsxs(Y4,{children:[c.jsxs("span",{children:[c.jsx(Pr,{size:16}),m.rating]}),c.jsxs("span",{children:[c.jsx(jh,{size:16}),m.region]}),c.jsxs("span",{children:[c.jsx(Eg,{size:16}),m.category]})]}),c.jsxs(X4,{children:[m.isVerified&&c.jsxs(su,{$type:"verified",children:[c.jsx(s3,{size:12}),"Проверен"]}),m.isFeatured&&c.jsxs(su,{$type:"featured",children:[c.jsx(Ci,{size:12}),"Рекомендуемый"]}),m.isPremium&&c.jsxs(su,{$type:"premium",children:[c.jsx(Pr,{size:12}),"Премиум"]})]}),c.jsxs(Z4,{children:[c.jsxs("div",{className:"contact-item",children:[c.jsx(xl,{size:14}),c.jsx("a",{href:`tel:${m.contact.phone}`,children:m.contact.phone})]}),c.jsxs("div",{className:"contact-item",children:[c.jsx(Li,{size:14}),c.jsx("a",{href:`mailto:${m.contact.email}`,children:m.contact.email})]}),c.jsxs("div",{className:"contact-item",children:[c.jsx(Md,{size:14}),c.jsx("a",{href:`https://${m.contact.website}`,target:"_blank",rel:"noopener noreferrer",children:m.contact.website})]})]}),c.jsxs(J4,{children:[c.jsx("a",{href:"#",title:"Instagram",children:c.jsx(Sh,{size:18})}),c.jsx("a",{href:"#",title:"Facebook",children:c.jsx(bh,{size:18})}),c.jsx("a",{href:"#",title:"Website",children:c.jsx(Md,{size:18})})]}),c.jsxs(eO,{children:[c.jsxs(tO,{onClick:()=>p(m),children:[c.jsx(Eg,{size:16}),"Каталог"]}),c.jsxs(nO,{onClick:()=>h(m),children:[c.jsx(xl,{size:16}),"Связаться"]})]})]})]},m._id)):c.jsxs(rO,{children:[c.jsx("h3",{children:"Поставщики не найдены"}),c.jsx("p",{children:"Попробуйте изменить параметры поиска"})]})})})]})},oO=x.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-lg);
  background: linear-gradient(135deg, var(--color-accent) 0%, var(--color-background-secondary) 100%);
`,sO=x(_.div)`
  background: white;
  padding: var(--spacing-xxl);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-lg);
  width: 100%;
  max-width: 400px;
`,aO=x.div`
  text-align: center;
  margin-bottom: var(--spacing-xl);
`,lO=x.h1`
  color: var(--color-text);
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: var(--spacing-sm);
`,cO=x.p`
  color: var(--color-text-light);
  font-size: 1rem;
`,uO=x.form`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
`,Xg=x.div`
  position: relative;
`,Zg=x.input`
  width: 100%;
  padding: var(--spacing-md) var(--spacing-md) var(--spacing-md) 3rem;
  border: 1px solid ${e=>e.$hasError?"var(--color-error)":"var(--color-border)"};
  border-radius: var(--border-radius-md);
  font-size: 1rem;
  background: white;
  transition: all 0.2s ease;
  
  &:focus {
    outline: none;
    border-color: var(--color-primary);
    box-shadow: 0 0 0 3px rgba(128, 0, 128, 0.1);
  }
  
  &::placeholder {
    color: var(--color-text-muted);
  }
`,Jg=x.div`
  position: absolute;
  left: var(--spacing-md);
  top: 50%;
  transform: translateY(-50%);
  color: var(--color-text-muted);
`,dO=x.button`
  position: absolute;
  right: var(--spacing-md);
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: var(--color-text-muted);
  cursor: pointer;
  padding: 0;
  
  &:hover {
    color: var(--color-text);
  }
`,ev=x.div`
  color: var(--color-error);
  font-size: 0.875rem;
  margin-top: var(--spacing-xs);
  display: flex;
  align-items: center;
  gap: 0.25rem;
`,fO=x.button`
  width: 100%;
  padding: var(--spacing-md);
  background: var(--color-primary);
  color: white;
  border: none;
  border-radius: var(--border-radius-md);
  font-size: 1rem;
  font-weight: 500;
  cursor: ${e=>e.$isLoading?"not-allowed":"pointer"};
  transition: all 0.2s ease;
  opacity: ${e=>e.$isLoading?.7:1};
  
  &:hover:not(:disabled) {
    background: var(--color-hover-primary);
    transform: translateY(-1px);
  }
  
  &:disabled {
    cursor: not-allowed;
  }
`,hO=x.div`
  display: flex;
  align-items: center;
  margin: var(--spacing-lg) 0;
  
  &::before,
  &::after {
    content: '';
    flex: 1;
    height: 1px;
    background: var(--color-border);
  }
  
  span {
    padding: 0 var(--spacing-md);
    color: var(--color-text-muted);
    font-size: 0.875rem;
  }
`,pO=x.button`
  width: 100%;
  padding: var(--spacing-md);
  background: white;
  color: var(--color-text);
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius-md);
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background: var(--color-background-secondary);
    border-color: var(--color-primary);
  }
`,mO=x.div`
  text-align: center;
  margin-top: var(--spacing-xl);
  color: var(--color-text-light);
  font-size: 0.875rem;
  
  a {
    color: var(--color-primary);
    text-decoration: none;
    font-weight: 500;
    
    &:hover {
      text-decoration: underline;
    }
  }
`,gO=x.div`
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 2px solid transparent;
  border-top: 2px solid white;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`,vO=()=>{var w,S;const[e,t]=j.useState({email:"",password:""}),[n,r]=j.useState({}),[i,o]=j.useState(!1),[s,a]=j.useState(!1),{login:l}=Lr(),u=$i(),f=((S=(w=pn().state)==null?void 0:w.from)==null?void 0:S.pathname)||"/",h=()=>{const m={};return e.email?/\S+@\S+\.\S+/.test(e.email)||(m.email="Введите корректный email"):m.email="Email обязателен",e.password?e.password.length<6&&(m.password="Пароль должен содержать минимум 6 символов"):m.password="Пароль обязателен",r(m),Object.keys(m).length===0},p=async m=>{if(m.preventDefault(),!!h()){a(!0);try{await l(e.email,e.password),J.success("Добро пожаловать!"),u(f,{replace:!0})}catch(g){J.error(g.message||"Ошибка входа")}finally{a(!1)}}},y=m=>{const{name:g,value:v}=m.target;t(b=>({...b,[g]:v})),n[g]&&r(b=>({...b,[g]:""}))};return c.jsx(oO,{children:c.jsxs(sO,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6},children:[c.jsxs(aO,{children:[c.jsx(lO,{children:"Вход в аккаунт"}),c.jsx(cO,{children:"Войдите в свой аккаунт для доступа к курсам"})]}),c.jsxs(uO,{onSubmit:p,children:[c.jsxs(Xg,{children:[c.jsx(Jg,{children:c.jsx(Li,{size:20})}),c.jsx(Zg,{type:"email",name:"email",placeholder:"Введите email",value:e.email,onChange:y,$hasError:!!n.email}),n.email&&c.jsxs(ev,{children:[c.jsx(jn,{size:16}),n.email]})]}),c.jsxs(Xg,{children:[c.jsx(Jg,{children:c.jsx(Nd,{size:20})}),c.jsx(Zg,{type:i?"text":"password",name:"password",placeholder:"Введите пароль",value:e.password,onChange:y,$hasError:!!n.password}),c.jsx(dO,{type:"button",onClick:()=>o(!i),children:i?c.jsx(yl,{size:20}):c.jsx(Xo,{size:20})}),n.password&&c.jsxs(ev,{children:[c.jsx(jn,{size:16}),n.password]})]}),c.jsx(fO,{type:"submit",$isLoading:s,disabled:s,children:s?c.jsxs(c.Fragment,{children:[c.jsx(gO,{}),"Вход..."]}):"Войти"})]}),c.jsx(hO,{children:c.jsx("span",{children:"или"})}),c.jsx(pO,{type:"button",onClick:()=>J("Функция в разработке"),children:"Войти через Google"}),c.jsxs(mO,{children:[c.jsxs("p",{children:["Нет аккаунта?"," ",c.jsx(ue,{to:"/register",children:"Зарегистрироваться"})]}),c.jsx("p",{style:{marginTop:"0.5rem"},children:c.jsx(ue,{to:"/forgot-password",children:"Забыли пароль?"})})]})]})})},yO=x.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-lg);
  background: linear-gradient(135deg, var(--color-accent) 0%, var(--color-background-secondary) 100%);
`,xO=x(_.div)`
  background: white;
  padding: var(--spacing-xxl);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-lg);
  width: 100%;
  max-width: 500px;
`,wO=x.div`
  text-align: center;
  margin-bottom: var(--spacing-xl);
`,bO=x.h1`
  color: var(--color-text);
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: var(--spacing-sm);
`,SO=x.p`
  color: var(--color-text-light);
  font-size: 1rem;
`,jO=x.form`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
`,zr=x.div`
  position: relative;
`,Nr=x.input`
  width: 100%;
  padding: var(--spacing-md) var(--spacing-md) var(--spacing-md) 3rem;
  border: 1px solid ${e=>e.$hasError?"var(--color-error)":e.$hasSuccess?"var(--color-success)":"var(--color-border)"};
  border-radius: var(--border-radius-md);
  font-size: 1rem;
  background: white;
  transition: all 0.2s ease;
  
  &:focus {
    outline: none;
    border-color: var(--color-primary);
    box-shadow: 0 0 0 3px rgba(128, 0, 128, 0.1);
  }
  
  &::placeholder {
    color: var(--color-text-muted);
  }
`,_r=x.div`
  position: absolute;
  left: var(--spacing-md);
  top: 50%;
  transform: translateY(-50%);
  color: var(--color-text-muted);
`,tv=x.button`
  position: absolute;
  right: var(--spacing-md);
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: var(--color-text-muted);
  cursor: pointer;
  padding: 0;
  
  &:hover {
    color: var(--color-text);
  }
`,Dr=x.div`
  color: var(--color-error);
  font-size: 0.875rem;
  margin-top: var(--spacing-xs);
  display: flex;
  align-items: center;
  gap: 0.25rem;
`,Gi=x.div`
  color: var(--color-success);
  font-size: 0.875rem;
  margin-top: var(--spacing-xs);
  display: flex;
  align-items: center;
  gap: 0.25rem;
`,kO=x.button`
  width: 100%;
  padding: var(--spacing-md);
  background: var(--color-primary);
  color: white;
  border: none;
  border-radius: var(--border-radius-md);
  font-size: 1rem;
  font-weight: 500;
  cursor: ${e=>e.$isLoading?"not-allowed":"pointer"};
  transition: all 0.2s ease;
  opacity: ${e=>e.$isLoading?.7:1};
  
  &:hover:not(:disabled) {
    background: var(--color-hover-primary);
    transform: translateY(-1px);
  }
  
  &:disabled {
    cursor: not-allowed;
  }
`,CO=x.div`
  display: flex;
  align-items: center;
  margin: var(--spacing-lg) 0;
  
  &::before,
  &::after {
    content: '';
    flex: 1;
    height: 1px;
    background: var(--color-border);
  }
  
  span {
    padding: 0 var(--spacing-md);
    color: var(--color-text-muted);
    font-size: 0.875rem;
  }
`,PO=x.button`
  width: 100%;
  padding: var(--spacing-md);
  background: white;
  color: var(--color-text);
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius-md);
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background: var(--color-background-secondary);
    border-color: var(--color-primary);
  }
`,EO=x.div`
  text-align: center;
  margin-top: var(--spacing-xl);
  color: var(--color-text-light);
  font-size: 0.875rem;
  
  a {
    color: var(--color-primary);
    text-decoration: none;
    font-weight: 500;
    
    &:hover {
      text-decoration: underline;
    }
  }
`,TO=x.div`
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 2px solid transparent;
  border-top: 2px solid white;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`,RO=x.div`
  margin-top: var(--spacing-xs);
`,AO=x.div`
  height: 4px;
  background: var(--color-border);
  border-radius: 2px;
  overflow: hidden;
  margin-bottom: var(--spacing-xs);
`,$O=x.div`
  height: 100%;
  background: ${e=>e.$strength<=2?"var(--color-error)":e.$strength<=3?"var(--color-warning)":"var(--color-success)"};
  width: ${e=>e.$strength*25}%;
  transition: all 0.3s ease;
`,OO=x.div`
  font-size: 0.75rem;
  color: ${e=>e.$strength<=2?"var(--color-error)":e.$strength<=3?"var(--color-warning)":"var(--color-success)"};
`,LO=()=>{const[e,t]=j.useState({firstName:"",lastName:"",email:"",phone:"",password:"",confirmPassword:""}),[n,r]=j.useState({}),[i,o]=j.useState({}),[s,a]=j.useState(!1),[l,u]=j.useState(!1),[d,f]=j.useState(!1),{register:h}=Lr(),p=$i(),y=b=>{let C=0;return b.length>=8&&C++,/[a-z]/.test(b)&&C++,/[A-Z]/.test(b)&&C++,/[0-9]/.test(b)&&C++,/[^A-Za-z0-9]/.test(b)&&C++,Math.min(C,4)},w=b=>{switch(b){case 0:return"Очень слабый";case 1:return"Слабый";case 2:return"Средний";case 3:return"Хороший";case 4:return"Отличный";default:return""}},S=()=>{const b={},C={};return e.firstName?e.firstName.length<2?b.firstName="Имя должно содержать минимум 2 символа":C.firstName=!0:b.firstName="Имя обязательно",e.lastName?e.lastName.length<2?b.lastName="Фамилия должна содержать минимум 2 символа":C.lastName=!0:b.lastName="Фамилия обязательна",e.email?/\S+@\S+\.\S+/.test(e.email)?C.email=!0:b.email="Введите корректный email":b.email="Email обязателен",e.phone&&!/^[\+]?[0-9\s\-\(\)]{10,}$/.test(e.phone)?b.phone="Введите корректный номер телефона":e.phone&&(C.phone=!0),e.password?e.password.length<8?b.password="Пароль должен содержать минимум 8 символов":C.password=!0:b.password="Пароль обязателен",e.confirmPassword?e.password!==e.confirmPassword?b.confirmPassword="Пароли не совпадают":e.confirmPassword&&(C.confirmPassword=!0):b.confirmPassword="Подтвердите пароль",r(b),o(C),Object.keys(b).length===0},m=async b=>{if(b.preventDefault(),!!S()){f(!0);try{await h(e),J.success("Регистрация успешна! Добро пожаловать!"),p("/")}catch(C){J.error(C.message||"Ошибка регистрации")}finally{f(!1)}}},g=b=>{const{name:C,value:P}=b.target;t(k=>({...k,[C]:P})),n[C]&&r(k=>({...k,[C]:""})),i[C]&&o(k=>({...k,[C]:!1}))},v=y(e.password);return c.jsx(yO,{children:c.jsxs(xO,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6},children:[c.jsxs(wO,{children:[c.jsx(bO,{children:"Создать аккаунт"}),c.jsx(SO,{children:"Присоединяйтесь к сообществу флористов"})]}),c.jsxs(jO,{onSubmit:m,children:[c.jsxs(zr,{children:[c.jsx(_r,{children:c.jsx(Zo,{size:20})}),c.jsx(Nr,{type:"text",name:"firstName",placeholder:"Имя",value:e.firstName,onChange:g,$hasError:!!n.firstName,$hasSuccess:i.firstName}),n.firstName&&c.jsxs(Dr,{children:[c.jsx(jn,{size:16}),n.firstName]}),i.firstName&&c.jsxs(Gi,{children:[c.jsx(xt,{size:16}),"Отлично!"]})]}),c.jsxs(zr,{children:[c.jsx(_r,{children:c.jsx(Zo,{size:20})}),c.jsx(Nr,{type:"text",name:"lastName",placeholder:"Фамилия",value:e.lastName,onChange:g,$hasError:!!n.lastName,$hasSuccess:i.lastName}),n.lastName&&c.jsxs(Dr,{children:[c.jsx(jn,{size:16}),n.lastName]}),i.lastName&&c.jsxs(Gi,{children:[c.jsx(xt,{size:16}),"Отлично!"]})]}),c.jsxs(zr,{children:[c.jsx(_r,{children:c.jsx(Li,{size:20})}),c.jsx(Nr,{type:"email",name:"email",placeholder:"Email",value:e.email,onChange:g,$hasError:!!n.email,$hasSuccess:i.email}),n.email&&c.jsxs(Dr,{children:[c.jsx(jn,{size:16}),n.email]}),i.email&&c.jsxs(Gi,{children:[c.jsx(xt,{size:16}),"Отлично!"]})]}),c.jsxs(zr,{children:[c.jsx(_r,{children:c.jsx(xl,{size:20})}),c.jsx(Nr,{type:"tel",name:"phone",placeholder:"Телефон (необязательно)",value:e.phone,onChange:g,$hasError:!!n.phone,$hasSuccess:i.phone}),n.phone&&c.jsxs(Dr,{children:[c.jsx(jn,{size:16}),n.phone]}),i.phone&&c.jsxs(Gi,{children:[c.jsx(xt,{size:16}),"Отлично!"]})]}),c.jsxs(zr,{children:[c.jsx(_r,{children:c.jsx(Nd,{size:20})}),c.jsx(Nr,{type:s?"text":"password",name:"password",placeholder:"Пароль",value:e.password,onChange:g,$hasError:!!n.password,$hasSuccess:i.password}),c.jsx(tv,{type:"button",onClick:()=>a(!s),children:s?c.jsx(yl,{size:20}):c.jsx(Xo,{size:20})}),n.password&&c.jsxs(Dr,{children:[c.jsx(jn,{size:16}),n.password]}),e.password&&!n.password&&c.jsxs(RO,{children:[c.jsx(AO,{children:c.jsx($O,{$strength:v})}),c.jsx(OO,{$strength:v,children:w(v)})]})]}),c.jsxs(zr,{children:[c.jsx(_r,{children:c.jsx(Nd,{size:20})}),c.jsx(Nr,{type:l?"text":"password",name:"confirmPassword",placeholder:"Подтвердите пароль",value:e.confirmPassword,onChange:g,$hasError:!!n.confirmPassword,$hasSuccess:i.confirmPassword}),c.jsx(tv,{type:"button",onClick:()=>u(!l),children:l?c.jsx(yl,{size:20}):c.jsx(Xo,{size:20})}),n.confirmPassword&&c.jsxs(Dr,{children:[c.jsx(jn,{size:16}),n.confirmPassword]}),i.confirmPassword&&c.jsxs(Gi,{children:[c.jsx(xt,{size:16}),"Пароли совпадают!"]})]}),c.jsx(kO,{type:"submit",$isLoading:d,disabled:d,children:d?c.jsxs(c.Fragment,{children:[c.jsx(TO,{}),"Регистрация..."]}):"Создать аккаунт"})]}),c.jsx(CO,{children:c.jsx("span",{children:"или"})}),c.jsx(PO,{type:"button",onClick:()=>J("Функция в разработке"),children:"Зарегистрироваться через Google"}),c.jsx(EO,{children:c.jsxs("p",{children:["Уже есть аккаунт?"," ",c.jsx(ue,{to:"/login",children:"Войти"})]})})]})})},FO=x.div`
  padding: var(--spacing-xxl) 0;
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
`,MO=x.div`
  background: white;
  padding: var(--spacing-xxl);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-lg);
  max-width: 480px;
  width: 100%;
`,zO=x.h1`
  color: var(--color-text);
  font-size: 1.75rem;
  font-weight: 700;
  margin-bottom: var(--spacing-md);
`,NO=x.p`
  color: var(--color-text-light);
  margin-bottom: var(--spacing-lg);
`,_O=x.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
  margin-bottom: var(--spacing-lg);
`,DO=()=>{const[e,t]=B.useState(""),[n,r]=B.useState(!1),i=async o=>{if(o.preventDefault(),!e){J("Введите e-mail");return}try{r(!0),await oi.forgotPassword({email:e}),J("Письмо со ссылкой отправлено")}catch{}finally{r(!1)}};return c.jsx(FO,{children:c.jsxs(MO,{children:[c.jsx(zO,{children:"Восстановление пароля"}),c.jsx(NO,{children:"Укажите e-mail, на который отправим ссылку для сброса пароля"}),c.jsxs("form",{onSubmit:i,children:[c.jsxs(_O,{children:[c.jsx("label",{htmlFor:"email",children:"E-mail"}),c.jsx(Jo,{id:"email",type:"email",placeholder:"you@example.com",value:e,onChange:o=>t(o.target.value)})]}),c.jsx(Co,{type:"submit",loading:n,fullWidth:!0,children:"Отправить ссылку"})]})]})})},IO=x.div`
  padding: var(--spacing-xxl) 0;
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
`,VO=x.div`
  background: white;
  padding: var(--spacing-xxl);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-lg);
  max-width: 480px;
  width: 100%;
`,UO=x.h1`
  color: var(--color-text);
  font-size: 1.75rem;
  font-weight: 700;
  margin-bottom: var(--spacing-md);
`,BO=x.p`
  color: var(--color-text-light);
  margin-bottom: var(--spacing-lg);
`,nv=x.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
  margin-bottom: var(--spacing-lg);
`,HO=()=>{const[e]=Ly(),t=$i(),n=e.get("token")||"",[r,i]=B.useState(""),[o,s]=B.useState(""),[a,l]=B.useState(!1),u=async d=>{if(d.preventDefault(),!n){J("Неверная или устаревшая ссылка");return}if(!r||r.length<6){J("Пароль должен быть не менее 6 символов");return}if(r!==o){J("Пароли не совпадают");return}try{l(!0),await oi.resetPassword({token:n,newPassword:r}),J("Пароль успешно изменён"),t("/login")}catch{}finally{l(!1)}};return c.jsx(IO,{children:c.jsxs(VO,{children:[c.jsx(UO,{children:"Сброс пароля"}),c.jsx(BO,{children:"Введите новый пароль для вашего аккаунта"}),c.jsxs("form",{onSubmit:u,children:[c.jsxs(nv,{children:[c.jsx("label",{htmlFor:"password",children:"Новый пароль"}),c.jsx(Jo,{id:"password",type:"password",placeholder:"••••••••",value:r,onChange:d=>i(d.target.value)})]}),c.jsxs(nv,{children:[c.jsx("label",{htmlFor:"confirm",children:"Повторите пароль"}),c.jsx(Jo,{id:"confirm",type:"password",placeholder:"••••••••",value:o,onChange:d=>s(d.target.value)})]}),c.jsx(Co,{type:"submit",loading:a,fullWidth:!0,children:"Сохранить пароль"})]})]})})},rv=x.div`
  padding: var(--spacing-xxl) 0;
  min-height: 80vh;
`,WO=x.div`
  background: linear-gradient(135deg, var(--color-accent) 0%, var(--color-background-secondary) 100%);
  padding: var(--spacing-xxl) 0;
  margin-bottom: var(--spacing-xxl);
`,QO=x.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-lg);
  display: flex;
  align-items: center;
  gap: var(--spacing-xl);
  
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`,qO=x.div`
  position: relative;
`,KO=x.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: white;
  background-image: ${e=>e.$imageUrl?`url(${e.$imageUrl})`:"none"};
  background-size: cover;
  background-position: center;
  border: 4px solid white;
  box-shadow: var(--shadow-lg);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  color: var(--color-primary);
  position: relative;
`,GO=x.button`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: var(--color-primary);
  color: white;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background: var(--color-hover-primary);
    transform: scale(1.1);
  }
`,YO=x.div`
  flex: 1;
`,XO=x.h1`
  color: var(--color-text);
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: var(--spacing-sm);
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`,ZO=x.p`
  color: var(--color-text-light);
  font-size: 1.125rem;
  margin-bottom: var(--spacing-md);
`,JO=x.div`
  display: flex;
  gap: var(--spacing-lg);
  flex-wrap: wrap;
  
  .stat {
    text-align: center;
    
    .number {
      font-size: 1.5rem;
      font-weight: 600;
      color: var(--color-primary);
      margin-bottom: 0.25rem;
    }
    
    .label {
      color: var(--color-text-muted);
      font-size: 0.875rem;
    }
  }
`,eL=x.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-lg);
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: var(--spacing-xxl);
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: var(--spacing-lg);
  }
`,tL=x.aside`
  height: fit-content;
`,iv=x(_.div)`
  background: white;
  padding: var(--spacing-xl);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-md);
  margin-bottom: var(--spacing-lg);
`,ov=x.h3`
  color: var(--color-text);
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: var(--spacing-lg);
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
`,Ir=x.div`
  margin-bottom: var(--spacing-lg);
`,Vr=x.label`
  display: block;
  color: var(--color-text);
  font-weight: 500;
  margin-bottom: var(--spacing-sm);
`,Yi=x.input`
  width: 100%;
  padding: var(--spacing-md);
  border: 1px solid ${e=>e.$hasError?"var(--color-error)":"var(--color-border)"};
  border-radius: var(--border-radius-md);
  font-size: 1rem;
  background: white;
  transition: all 0.2s ease;
  
  &:focus {
    outline: none;
    border-color: var(--color-primary);
    box-shadow: 0 0 0 3px rgba(128, 0, 128, 0.1);
  }
  
  &:disabled {
    background: var(--color-background-secondary);
    cursor: not-allowed;
  }
`,nL=x.textarea`
  width: 100%;
  padding: var(--spacing-md);
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius-md);
  font-size: 1rem;
  background: white;
  resize: vertical;
  min-height: 100px;
  font-family: inherit;
  
  &:focus {
    outline: none;
    border-color: var(--color-primary);
    box-shadow: 0 0 0 3px rgba(128, 0, 128, 0.1);
  }
`,au=x.div`
  color: var(--color-error);
  font-size: 0.875rem;
  margin-top: var(--spacing-xs);
`,er=x.button`
  padding: var(--spacing-md) var(--spacing-lg);
  border: none;
  border-radius: var(--border-radius-md);
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  
  ${e=>{switch(e.$variant){case"primary":return`
          background: var(--color-primary);
          color: white;
          
          &:hover {
            background: var(--color-hover-primary);
          }
        `;case"secondary":return`
          background: var(--color-accent);
          color: var(--color-primary);
          
          &:hover {
            background: var(--color-primary);
            color: white;
          }
        `;case"danger":return`
          background: var(--color-error);
          color: white;
          
          &:hover {
            background: #d32f2f;
          }
        `;default:return`
          background: var(--color-primary);
          color: white;
          
          &:hover {
            background: var(--color-hover-primary);
          }
        `}}}
`,rL=x.section`
  margin-bottom: var(--spacing-xxl);
`,iL=x.h2`
  color: var(--color-text);
  font-size: 1.75rem;
  font-weight: 600;
  margin-bottom: var(--spacing-lg);
`,oL=x.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: var(--spacing-lg);
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,sL=x(_.div)`
  background: white;
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-md);
  overflow: hidden;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-lg);
  }
`,aL=x.div`
  height: 160px;
  background: linear-gradient(135deg, var(--color-accent) 0%, var(--color-background-secondary) 100%);
  background-image: ${e=>e.$imageUrl?`url(${e.$imageUrl})`:"none"};
  background-size: cover;
  background-position: center;
  position: relative;
`,lL=x.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: rgba(255, 255, 255, 0.3);
  
  .progress-fill {
    height: 100%;
    background: var(--color-success);
    transition: width 0.3s ease;
  }
`,cL=x.div`
  padding: var(--spacing-lg);
`,uL=x.h4`
  color: var(--color-text);
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: var(--spacing-sm);
`,dL=x.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-md);
  flex-wrap: wrap;
  
  span {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    color: var(--color-text-muted);
    font-size: 0.875rem;
  }
`,fL=x.div`
  width: 100%;
  height: 8px;
  background: var(--color-border);
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: var(--spacing-sm);
  
  .progress-fill {
    height: 100%;
    background: var(--color-success);
    transition: width 0.3s ease;
  }
`,hL=x.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.875rem;
  color: var(--color-text-muted);
`,pL=x.div`
  text-align: center;
  padding: var(--spacing-xxl) 0;
  color: var(--color-text-muted);
  
  h3 {
    font-size: 1.5rem;
    margin-bottom: var(--spacing-md);
  }
  
  p {
    font-size: 1rem;
  }
`,mL=()=>{const{user:e,logout:t}=Lr(),[n,r]=j.useState(!1),[i,o]=j.useState(!0),[s,a]=j.useState({firstName:"",lastName:"",email:"",phone:"",location:"",bio:""}),[l,u]=j.useState({}),[d,f]=j.useState([]),h={_id:"1",firstName:"Анна",lastName:"Иванова",email:"anna.ivanova@example.com",phone:"+7 (999) 123-45-67",location:"Москва",bio:"Начинающий флорист, увлекаюсь созданием букетов и композиций. Изучаю основы флористики и планирую открыть свою студию.",avatar:"/images/user-avatar.jpg",joinDate:"2024-01-15",completedCourses:2,totalCourses:5,averageRating:4.8},p=[{_id:"1",title:"Профессия флорист",image:"/images/course-1.jpg",progress:75,completedLessons:18,totalLessons:24,lastAccessed:"2024-03-15",instructor:"Анна Петрова"},{_id:"2",title:"Интерьерные композиции",image:"/images/course-2.jpg",progress:30,completedLessons:6,totalLessons:20,lastAccessed:"2024-03-10",instructor:"Мария Сидорова"},{_id:"3",title:"Коммерческий флорист",image:"/images/course-3.jpg",progress:0,completedLessons:0,totalLessons:16,lastAccessed:"2024-03-01",instructor:"Елена Козлова"}];j.useEffect(()=>{setTimeout(()=>{a({firstName:h.firstName,lastName:h.lastName,email:h.email,phone:h.phone,location:h.location,bio:h.bio}),f(p),o(!1)},1e3)},[]);const y=()=>{const v={};return s.firstName||(v.firstName="Имя обязательно"),s.lastName||(v.lastName="Фамилия обязательна"),s.email?/\S+@\S+\.\S+/.test(s.email)||(v.email="Введите корректный email"):v.email="Email обязателен",u(v),Object.keys(v).length===0},w=()=>{y()&&(J.success("Профиль успешно обновлен!"),r(!1))},S=()=>{a({firstName:h.firstName,lastName:h.lastName,email:h.email,phone:h.phone,location:h.location,bio:h.bio}),u({}),r(!1)},m=v=>{const{name:b,value:C}=v.target;a(P=>({...P,[b]:C})),l[b]&&u(P=>({...P,[b]:""}))},g=()=>{t(),J.success("Вы успешно вышли из аккаунта")};return i?c.jsx(rv,{children:c.jsx("div",{style:{textAlign:"center",padding:"var(--spacing-xxl) 0"},children:"Загрузка профиля..."})}):c.jsxs(rv,{children:[c.jsx(WO,{children:c.jsxs(QO,{children:[c.jsxs(qO,{children:[c.jsx(KO,{$imageUrl:h.avatar,children:!h.avatar}),c.jsx(GO,{onClick:()=>J("Загрузка фото"),children:c.jsx(ZR,{size:20})})]}),c.jsxs(YO,{children:[c.jsxs(XO,{children:[h.firstName," ",h.lastName]}),c.jsx(ZO,{children:h.email}),c.jsxs(JO,{children:[c.jsxs("div",{className:"stat",children:[c.jsx("div",{className:"number",children:h.completedCourses}),c.jsx("div",{className:"label",children:"Завершенных курсов"})]}),c.jsxs("div",{className:"stat",children:[c.jsx("div",{className:"number",children:h.totalCourses}),c.jsx("div",{className:"label",children:"Всего курсов"})]}),c.jsxs("div",{className:"stat",children:[c.jsx("div",{className:"number",children:h.averageRating}),c.jsx("div",{className:"label",children:"Средний рейтинг"})]})]})]})]})}),c.jsxs(eL,{children:[c.jsxs(tL,{children:[c.jsxs(iv,{initial:{opacity:0,x:-30},animate:{opacity:1,x:0},transition:{duration:.6},children:[c.jsxs(ov,{children:[c.jsx(Zo,{size:20}),"Личная информация"]}),c.jsxs(Ir,{children:[c.jsx(Vr,{children:"Имя"}),c.jsx(Yi,{type:"text",name:"firstName",value:s.firstName,onChange:m,disabled:!n,$hasError:!!l.firstName}),l.firstName&&c.jsx(au,{children:l.firstName})]}),c.jsxs(Ir,{children:[c.jsx(Vr,{children:"Фамилия"}),c.jsx(Yi,{type:"text",name:"lastName",value:s.lastName,onChange:m,disabled:!n,$hasError:!!l.lastName}),l.lastName&&c.jsx(au,{children:l.lastName})]}),c.jsxs(Ir,{children:[c.jsx(Vr,{children:"Email"}),c.jsx(Yi,{type:"email",name:"email",value:s.email,onChange:m,disabled:!n,$hasError:!!l.email}),l.email&&c.jsx(au,{children:l.email})]}),c.jsxs(Ir,{children:[c.jsx(Vr,{children:"Телефон"}),c.jsx(Yi,{type:"tel",name:"phone",value:s.phone,onChange:m,disabled:!n})]}),c.jsxs(Ir,{children:[c.jsx(Vr,{children:"Город"}),c.jsx(Yi,{type:"text",name:"location",value:s.location,onChange:m,disabled:!n})]}),c.jsxs(Ir,{children:[c.jsx(Vr,{children:"О себе"}),c.jsx(nL,{name:"bio",value:s.bio,onChange:m,disabled:!n,placeholder:"Расскажите о себе..."})]}),n?c.jsxs("div",{style:{display:"flex",gap:"var(--spacing-sm)"},children:[c.jsxs(er,{onClick:w,children:[c.jsx(i3,{size:16}),"Сохранить"]}),c.jsxs(er,{$variant:"secondary",onClick:S,children:[c.jsx(c3,{size:16}),"Отмена"]})]}):c.jsxs(er,{onClick:()=>r(!0),children:[c.jsx(n3,{size:16}),"Редактировать"]})]}),c.jsxs(iv,{initial:{opacity:0,x:-30},animate:{opacity:1,x:0},transition:{duration:.6,delay:.1},children:[c.jsxs(ov,{children:[c.jsx(o3,{size:20}),"Настройки"]}),c.jsxs(er,{$variant:"secondary",style:{marginBottom:"var(--spacing-md)"},children:[c.jsx(Xo,{size:16}),"Настройки приватности"]}),c.jsxs(er,{$variant:"secondary",style:{marginBottom:"var(--spacing-md)"},children:[c.jsx(Li,{size:16}),"Настройки уведомлений"]}),c.jsxs(er,{$variant:"danger",onClick:g,children:[c.jsx(_d,{size:16}),"Выйти из аккаунта"]})]})]}),c.jsx("div",{children:c.jsxs(rL,{children:[c.jsx(iL,{children:"Мои курсы"}),d.length>0?c.jsx(oL,{children:c.jsx(Wn,{mode:"wait",children:d.map((v,b)=>c.jsxs(sL,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:b*.1},children:[c.jsx(aL,{$imageUrl:v.image,children:c.jsx(lL,{children:c.jsx("div",{className:"progress-fill",style:{width:`${v.progress}%`}})})}),c.jsxs(cL,{children:[c.jsx(uL,{children:v.title}),c.jsxs(dL,{children:[c.jsxs("span",{children:[c.jsx(bt,{size:14}),v.completedLessons,"/",v.totalLessons," уроков"]}),c.jsxs("span",{children:[c.jsx(Yo,{size:14}),v.lastAccessed]})]}),c.jsx(fL,{children:c.jsx("div",{className:"progress-fill",style:{width:`${v.progress}%`}})}),c.jsxs(hL,{children:[c.jsx("span",{children:"Прогресс"}),c.jsxs("span",{children:[v.progress,"%"]})]}),c.jsx("div",{style:{marginTop:"var(--spacing-md)"},children:c.jsxs(er,{$variant:"primary",style:{width:"100%"},children:[c.jsx(bt,{size:16}),"Продолжить обучение"]})})]})]},v._id))})}):c.jsxs(pL,{children:[c.jsx("h3",{children:"У вас пока нет курсов"}),c.jsx("p",{children:"Запишитесь на курсы, чтобы начать обучение"})]})]})})]})]})},sv=x.div`
  padding: var(--spacing-xxl) 0;
  min-height: 80vh;
`,gL=x.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-lg);
  margin-bottom: var(--spacing-xxl);
`,vL=x.div`
  background: linear-gradient(135deg, var(--color-accent) 0%, var(--color-background-secondary) 100%);
  padding: var(--spacing-xl);
  border-radius: var(--border-radius-lg);
  margin-bottom: var(--spacing-lg);
`,yL=x.h1`
  color: var(--color-text);
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: var(--spacing-sm);
`,xL=x.p`
  color: var(--color-text-light);
  font-size: 1.125rem;
  margin-bottom: var(--spacing-lg);
`,wL=x.div`
  display: flex;
  gap: var(--spacing-md);
  flex-wrap: wrap;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`,lu=x(ue)`
  padding: var(--spacing-md) var(--spacing-lg);
  background: white;
  color: var(--color-primary);
  border: 2px solid var(--color-primary);
  border-radius: var(--border-radius-md);
  text-decoration: none;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  transition: all 0.2s ease;
  
  &:hover {
    background: var(--color-primary);
    color: white;
    transform: translateY(-2px);
  }
`,bL=x.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-lg);
`,SL=x.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--spacing-lg);
  margin-bottom: var(--spacing-xxl);
`,Hs=x(_.div)`
  background: white;
  padding: var(--spacing-lg);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-md);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: var(--color-primary);
  }
`,Ws=x.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: var(--spacing-md);
`,Qs=x.div`
  width: 48px;
  height: 48px;
  border-radius: var(--border-radius-md);
  background: ${e=>e.$color};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`,qs=x.div`
  font-size: 2rem;
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: var(--spacing-xs);
`,Ks=x.div`
  color: var(--color-text-muted);
  font-size: 0.875rem;
  margin-bottom: var(--spacing-sm);
`,Gs=x.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.875rem;
  color: ${e=>e.$isPositive?"var(--color-success)":"var(--color-error)"};
`,jL=x.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: var(--spacing-xxl);
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: var(--spacing-lg);
  }
`,Xi=x.section`
  margin-bottom: var(--spacing-xxl);
`,Zi=x.h2`
  color: var(--color-text);
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: var(--spacing-lg);
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
`,kL=x(_.div)`
  background: white;
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-md);
  overflow: hidden;
`,CL=x(_.div)`
  padding: var(--spacing-lg);
  border-bottom: 1px solid var(--color-border);
  transition: all 0.2s ease;
  
  &:last-child {
    border-bottom: none;
  }
  
  &:hover {
    background: var(--color-background-secondary);
  }
`,PL=x.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: var(--spacing-sm);
`,EL=x.h4`
  color: var(--color-text);
  font-size: 1.125rem;
  font-weight: 600;
`,TL=x.div`
  font-size: 0.875rem;
  color: var(--color-primary);
  font-weight: 500;
`,RL=x.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  color: var(--color-text-muted);
  font-size: 0.875rem;
  
  span {
    display: flex;
    align-items: center;
    gap: 0.25rem;
  }
`,Ji=x.div`
  width: 100%;
  height: 6px;
  background: var(--color-border);
  border-radius: 3px;
  overflow: hidden;
  margin-top: var(--spacing-sm);
  
  .progress-fill {
    height: 100%;
    background: var(--color-success);
    transition: width 0.3s ease;
  }
`,av=x.div`
  background: white;
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-md);
  padding: var(--spacing-lg);
`,AL=x.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  padding: var(--spacing-md) 0;
  border-bottom: 1px solid var(--color-border);
  
  &:last-child {
    border-bottom: none;
  }
`,$L=x.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  
  ${e=>{switch(e.$type){case"course":return"background: var(--color-primary);";case"achievement":return"background: var(--color-success);";case"certificate":return"background: var(--color-warning);";default:return""}}}
`,OL=x.div`
  flex: 1;
`,LL=x.div`
  color: var(--color-text);
  font-weight: 500;
  margin-bottom: 0.25rem;
`,FL=x.div`
  color: var(--color-text-muted);
  font-size: 0.875rem;
`,lv=x.div`
  background: white;
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-md);
  padding: var(--spacing-lg);
  margin-bottom: var(--spacing-lg);
`,cv=x.div`
  height: 200px;
  background: var(--color-background-secondary);
  border-radius: var(--border-radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-text-muted);
  font-size: 1.125rem;
`,ML=x.div`
  text-align: center;
  padding: var(--spacing-xxl) 0;
  color: var(--color-text-muted);
  
  h3 {
    font-size: 1.5rem;
    margin-bottom: var(--spacing-md);
  }
  
  p {
    font-size: 1rem;
  }
`,zL=()=>{const{user:e}=Lr(),[t,n]=j.useState(!0),[r,i]=j.useState({}),[o,s]=j.useState([]),[a,l]=j.useState([]),u={totalCourses:5,completedCourses:2,totalHours:48,averageRating:4.8,certificates:3,achievements:12,weeklyProgress:15,monthlyProgress:25},d=[{_id:"1",title:"Профессия флорист",progress:75,lastAccessed:"2 часа назад",instructor:"Анна Петрова",nextLesson:"Урок 19: Создание свадебных букетов"},{_id:"2",title:"Интерьерные композиции",progress:30,lastAccessed:"1 день назад",instructor:"Мария Сидорова",nextLesson:"Урок 7: Работа с сухими цветами"},{_id:"3",title:"Коммерческий флорист",progress:0,lastAccessed:"3 дня назад",instructor:"Елена Козлова",nextLesson:"Урок 1: Введение в коммерческую флористику"}],f=[{_id:"1",type:"course",title:'Завершен курс "Основы флористики"',time:"2 дня назад",icon:bt},{_id:"2",type:"achievement",title:'Получено достижение "Первые шаги"',time:"3 дня назад",icon:Ci},{_id:"3",type:"certificate",title:'Получен сертификат по курсу "Базовые техники"',time:"1 неделю назад",icon:xt},{_id:"4",type:"course",title:'Начат новый курс "Интерьерные композиции"',time:"1 неделю назад",icon:kh}];j.useEffect(()=>{setTimeout(()=>{i(u),s(d),l(f),n(!1)},1e3)},[]);const h=()=>{const y=new Date().getHours();return y<12?"Доброе утро":y<18?"Добрый день":"Добрый вечер"};return t?c.jsx(sv,{children:c.jsx("div",{style:{textAlign:"center",padding:"var(--spacing-xxl) 0"},children:"Загрузка панели управления..."})}):c.jsxs(sv,{children:[c.jsx(gL,{children:c.jsxs(vL,{children:[c.jsxs(yL,{children:[h(),", ",(e==null?void 0:e.firstName)||"Студент","!"]}),c.jsx(xL,{children:"Продолжайте обучение и развивайте свои навыки флориста"}),c.jsxs(wL,{children:[c.jsxs(lu,{to:"/courses",children:[c.jsx(bt,{size:20}),"Найти курсы"]}),c.jsxs(lu,{to:"/profile",children:[c.jsx(B1,{size:20}),"Мои курсы"]}),c.jsxs(lu,{to:"/suppliers",children:[c.jsx(r3,{size:20}),"Поставщики"]})]})]})}),c.jsxs(bL,{children:[c.jsxs(SL,{children:[c.jsxs(Hs,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},children:[c.jsxs(Ws,{children:[c.jsx(Qs,{$color:"var(--color-primary)",children:c.jsx(bt,{size:24})}),c.jsxs(Gs,{$isPositive:!0,children:[c.jsx(Us,{size:16}),"+15%"]})]}),c.jsx(qs,{children:r.totalCourses}),c.jsx(Ks,{children:"Всего курсов"}),c.jsx(Ji,{children:c.jsx("div",{className:"progress-fill",style:{width:`${r.completedCourses/r.totalCourses*100}%`}})})]}),c.jsxs(Hs,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.1},children:[c.jsxs(Ws,{children:[c.jsx(Qs,{$color:"var(--color-success)",children:c.jsx(xt,{size:24})}),c.jsxs(Gs,{$isPositive:!0,children:[c.jsx(Us,{size:16}),"+8%"]})]}),c.jsx(qs,{children:r.completedCourses}),c.jsx(Ks,{children:"Завершенных курсов"}),c.jsx(Ji,{children:c.jsx("div",{className:"progress-fill",style:{width:`${r.completedCourses/r.totalCourses*100}%`}})})]}),c.jsxs(Hs,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.2},children:[c.jsxs(Ws,{children:[c.jsx(Qs,{$color:"var(--color-warning)",children:c.jsx(Yo,{size:24})}),c.jsxs(Gs,{$isPositive:!0,children:[c.jsx(Us,{size:16}),"+12%"]})]}),c.jsx(qs,{children:r.totalHours}),c.jsx(Ks,{children:"Часов обучения"}),c.jsx(Ji,{children:c.jsx("div",{className:"progress-fill",style:{width:`${r.totalHours/100*100}%`}})})]}),c.jsxs(Hs,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.3},children:[c.jsxs(Ws,{children:[c.jsx(Qs,{$color:"var(--color-primary)",children:c.jsx(Pr,{size:24})}),c.jsxs(Gs,{$isPositive:!0,children:[c.jsx(Us,{size:16}),"+5%"]})]}),c.jsx(qs,{children:r.averageRating}),c.jsx(Ks,{children:"Средний рейтинг"}),c.jsx(Ji,{children:c.jsx("div",{className:"progress-fill",style:{width:`${r.averageRating/5*100}%`}})})]})]}),c.jsxs(jL,{children:[c.jsxs("div",{children:[c.jsxs(Xi,{children:[c.jsxs(Zi,{children:[c.jsx(bt,{size:24}),"Недавние курсы"]}),o.length>0?c.jsx(kL,{children:c.jsx(Wn,{mode:"wait",children:o.map((p,y)=>c.jsxs(CL,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{duration:.5,delay:y*.1},children:[c.jsxs(PL,{children:[c.jsx(EL,{children:p.title}),c.jsxs(TL,{children:[p.progress,"%"]})]}),c.jsxs(RL,{children:[c.jsxs("span",{children:[c.jsx(hs,{size:14}),p.instructor]}),c.jsxs("span",{children:[c.jsx(Yo,{size:14}),p.lastAccessed]})]}),c.jsxs("div",{style:{color:"var(--color-text-light)",fontSize:"0.875rem",marginTop:"var(--spacing-sm)"},children:["Следующий урок: ",p.nextLesson]}),c.jsx(Ji,{children:c.jsx("div",{className:"progress-fill",style:{width:`${p.progress}%`}})})]},p._id))})}):c.jsxs(ML,{children:[c.jsx("h3",{children:"У вас пока нет курсов"}),c.jsx("p",{children:"Запишитесь на курсы, чтобы начать обучение"})]})]}),c.jsxs(Xi,{children:[c.jsxs(Zi,{children:[c.jsx(Pg,{size:24}),"Прогресс обучения"]}),c.jsx(lv,{children:c.jsxs(cv,{children:[c.jsx(Pg,{size:48}),c.jsx("div",{style:{marginLeft:"var(--spacing-md)"},children:"График прогресса обучения"})]})})]})]}),c.jsxs("div",{children:[c.jsxs(Xi,{children:[c.jsxs(Zi,{children:[c.jsx(XR,{size:24}),"Последняя активность"]}),c.jsx(av,{children:c.jsx(Wn,{mode:"wait",children:a.map((p,y)=>c.jsxs(AL,{children:[c.jsx($L,{$type:p.type,children:c.jsx(p.icon,{size:20})}),c.jsxs(OL,{children:[c.jsx(LL,{children:p.title}),c.jsx(FL,{children:p.time})]})]},p._id))})})]}),c.jsxs(Xi,{children:[c.jsxs(Zi,{children:[c.jsx(Tg,{size:24}),"Статистика"]}),c.jsx(lv,{children:c.jsxs(cv,{children:[c.jsx(Tg,{size:48}),c.jsx("div",{style:{marginLeft:"var(--spacing-md)"},children:"Круговая диаграмма достижений"})]})})]}),c.jsxs(Xi,{children:[c.jsxs(Zi,{children:[c.jsx(Ci,{size:24}),"Достижения"]}),c.jsx(av,{children:c.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"var(--spacing-md)"},children:[c.jsxs("div",{style:{textAlign:"center",padding:"var(--spacing-md)"},children:[c.jsx("div",{style:{fontSize:"2rem",fontWeight:"700",color:"var(--color-primary)",marginBottom:"0.5rem"},children:r.certificates}),c.jsx("div",{style:{fontSize:"0.875rem",color:"var(--color-text-muted)"},children:"Сертификатов"})]}),c.jsxs("div",{style:{textAlign:"center",padding:"var(--spacing-md)"},children:[c.jsx("div",{style:{fontSize:"2rem",fontWeight:"700",color:"var(--color-success)",marginBottom:"0.5rem"},children:r.achievements}),c.jsx("div",{style:{fontSize:"0.875rem",color:"var(--color-text-muted)"},children:"Достижений"})]})]})})]})]})]})]})]})},NL=x(_.header)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(248, 247, 255, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(230, 230, 250, 0.3);
  transition: var(--transition-normal);
`,_L=x.nav`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-md);
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
`,DL=x(ue)`
  font-family: var(--font-secondary);
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-primary);
  text-decoration: none;
  transition: var(--transition-fast);
  
  &:hover {
    color: var(--color-hover-primary);
  }
`,IL=x.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-lg);
  
  @media (max-width: 768px) {
    display: none;
  }
`,VL=x(ue)`
  color: ${e=>e.$isActive?"var(--color-primary)":"var(--color-text)"};
  text-decoration: none;
  font-weight: ${e=>e.$isActive?"600":"400"};
  transition: var(--transition-fast);
  position: relative;
  
  &:hover {
    color: var(--color-primary);
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: ${e=>e.$isActive?"100%":"0"};
    height: 2px;
    background: var(--color-primary);
    transition: var(--transition-fast);
  }
  
  &:hover::after {
    width: 100%;
  }
`,UL=x.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  
  @media (max-width: 768px) {
    display: none;
  }
`,eo=x.button`
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: var(--border-radius-md);
  font-weight: 500;
  transition: var(--transition-fast);
  cursor: pointer;
  
  ${e=>e.$variant==="primary"?`
    background: var(--color-primary);
    color: white;
    border: none;
    
    &:hover {
      background: var(--color-hover-primary);
    }
  `:`
    background: transparent;
    color: var(--color-text);
    border: 1px solid var(--color-text-muted);
    
    &:hover {
      background: var(--color-background-secondary);
      border-color: var(--color-primary);
    }
  `}
`,BL=x.button`
  display: none;
  background: none;
  border: none;
  color: var(--color-text);
  cursor: pointer;
  padding: var(--spacing-sm);
  
  @media (max-width: 768px) {
    display: block;
  }
`,HL=x(_.div)`
  position: fixed;
  top: 80px;
  left: 0;
  right: 0;
  background: var(--color-background);
  border-bottom: 1px solid var(--color-background-secondary);
  padding: var(--spacing-md);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
  
  @media (min-width: 769px) {
    display: none;
  }
`,Ys=x(ue)`
  color: ${e=>e.$isActive?"var(--color-primary)":"var(--color-text)"};
  text-decoration: none;
  font-weight: ${e=>e.$isActive?"600":"400"};
  padding: var(--spacing-sm) 0;
  border-bottom: 1px solid var(--color-background-secondary);
  transition: var(--transition-fast);
  
  &:hover {
    color: var(--color-primary);
  }
`,WL=x.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
`,QL=x.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--color-primary);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  cursor: pointer;
  transition: var(--transition-fast);
  
  &:hover {
    background: var(--color-hover-primary);
  }
`,qL=()=>{var f;const[e,t]=j.useState(!1),[n,r]=j.useState(!1),i=pn(),{user:o,isAuthenticated:s,logout:a}=Lr();j.useEffect(()=>{const h=()=>{r(window.scrollY>20)};return window.addEventListener("scroll",h),()=>window.removeEventListener("scroll",h)},[]);const l=[{path:"/",label:"Главная"},{path:"/courses",label:"Курсы"},{path:"/instructors",label:"Преподаватели"},{path:"/suppliers",label:"Поставщики"},{path:"/about",label:"О нас"}],u=h=>i.pathname===h,d=()=>{a(),t(!1)};return c.jsxs(NL,{initial:{y:-100},animate:{y:0},style:{boxShadow:n?"var(--shadow-md)":"none"},children:[c.jsxs(_L,{children:[c.jsx(DL,{to:"/",children:"Flerr"}),c.jsx(IL,{children:l.map(h=>c.jsx(VL,{to:h.path,$isActive:u(h.path),children:h.label},h.path))}),c.jsx(UL,{children:s?c.jsxs(WL,{children:[c.jsx(QL,{children:((f=o==null?void 0:o.firstName)==null?void 0:f.charAt(0))||"U"}),c.jsx(ue,{to:"/profile",children:c.jsxs(eo,{$variant:"secondary",children:[c.jsx(Zo,{size:16}),"Профиль"]})}),c.jsxs(eo,{$variant:"secondary",onClick:d,children:[c.jsx(_d,{size:16}),"Выйти"]})]}):c.jsxs(c.Fragment,{children:[c.jsx(ue,{to:"/login",children:c.jsx(eo,{$variant:"secondary",children:"Войти"})}),c.jsx(ue,{to:"/register",children:c.jsx(eo,{$variant:"primary",children:"Регистрация"})})]})}),c.jsx(BL,{onClick:()=>t(!e),children:e?c.jsx(u3,{size:24}):c.jsx(t3,{size:24})})]}),c.jsx(Wn,{children:e&&c.jsxs(HL,{initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},transition:{duration:.3},children:[l.map(h=>c.jsx(Ys,{to:h.path,$isActive:u(h.path),onClick:()=>t(!1),children:h.label},h.path)),s?c.jsxs(c.Fragment,{children:[c.jsxs(Ys,{to:"/profile",onClick:()=>t(!1),children:[c.jsx(Zo,{size:16}),"Профиль"]}),c.jsxs(eo,{$variant:"secondary",onClick:d,children:[c.jsx(_d,{size:16}),"Выйти"]})]}):c.jsxs(c.Fragment,{children:[c.jsx(Ys,{to:"/login",onClick:()=>t(!1),children:"Войти"}),c.jsx(Ys,{to:"/register",onClick:()=>t(!1),children:"Регистрация"})]})]})})]})},KL=x.footer`
  background: var(--color-background-secondary);
  border-top: 1px solid var(--color-background-tertiary);
  padding: var(--spacing-xxl) 0 var(--spacing-lg);
  margin-top: auto;
`,GL=x.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-md);
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--spacing-xl);
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: var(--spacing-lg);
  }
`,Xs=x.div`
  h3 {
    color: var(--color-primary);
    margin-bottom: var(--spacing-md);
    font-size: 1.25rem;
  }
  
  p {
    color: var(--color-text-light);
    line-height: 1.6;
    margin-bottom: var(--spacing-sm);
  }
  
  ul {
    list-style: none;
    padding: 0;
  }
  
  li {
    margin-bottom: var(--spacing-sm);
  }
  
  a {
    color: var(--color-text-light);
    text-decoration: none;
    transition: var(--transition-fast);
    
    &:hover {
      color: var(--color-primary);
    }
  }
`,cu=x.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  margin-bottom: var(--spacing-sm);
  color: var(--color-text-light);
  
  svg {
    color: var(--color-primary);
    flex-shrink: 0;
  }
`,YL=x.div`
  display: flex;
  gap: var(--spacing-md);
  margin-top: var(--spacing-md);
  
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: var(--color-primary);
    color: white;
    transition: var(--transition-fast);
    
    &:hover {
      background: var(--color-hover-primary);
      transform: translateY(-2px);
    }
  }
`,XL=x.div`
  text-align: center;
  padding-top: var(--spacing-lg);
  margin-top: var(--spacing-xl);
  border-top: 1px solid var(--color-background-tertiary);
  color: var(--color-text-muted);
  font-size: 0.875rem;
`,ZL=()=>c.jsxs(KL,{children:[c.jsxs(GL,{children:[c.jsxs(Xs,{children:[c.jsx("h3",{children:"Flerr"}),c.jsx("p",{children:"Онлайн школа флористики, где вы научитесь создавать прекрасные композиции и превратите свое увлечение в прибыльную профессию."}),c.jsxs(YL,{children:[c.jsx("a",{href:"#","aria-label":"Instagram",children:c.jsx(Sh,{size:20})}),c.jsx("a",{href:"#","aria-label":"Facebook",children:c.jsx(bh,{size:20})}),c.jsx("a",{href:"#","aria-label":"Twitter",children:c.jsx(l3,{size:20})})]})]}),c.jsxs(Xs,{children:[c.jsx("h3",{children:"Курсы"}),c.jsxs("ul",{children:[c.jsx("li",{children:c.jsx(ue,{to:"/courses",children:"Все курсы"})}),c.jsx("li",{children:c.jsx(ue,{to:"/courses?category=beginner",children:"Для начинающих"})}),c.jsx("li",{children:c.jsx(ue,{to:"/courses?category=advanced",children:"Продвинутые"})}),c.jsx("li",{children:c.jsx(ue,{to:"/courses?category=wedding",children:"Свадебная флористика"})}),c.jsx("li",{children:c.jsx(ue,{to:"/courses?category=interior",children:"Интерьерные композиции"})})]})]}),c.jsxs(Xs,{children:[c.jsx("h3",{children:"Информация"}),c.jsxs("ul",{children:[c.jsx("li",{children:c.jsx(ue,{to:"/about",children:"О нас"})}),c.jsx("li",{children:c.jsx(ue,{to:"/instructors",children:"Преподаватели"})}),c.jsx("li",{children:c.jsx(ue,{to:"/suppliers",children:"Поставщики"})}),c.jsx("li",{children:c.jsx(ue,{to:"/contact",children:"Контакты"})}),c.jsx("li",{children:c.jsx(ue,{to:"/privacy",children:"Политика конфиденциальности"})})]})]}),c.jsxs(Xs,{children:[c.jsx("h3",{children:"Контакты"}),c.jsxs(cu,{children:[c.jsx(Li,{size:16}),c.jsx("span",{children:"info@flerr-school.com"})]}),c.jsxs(cu,{children:[c.jsx(xl,{size:16}),c.jsx("span",{children:"+7 (999) 123-45-67"})]}),c.jsxs(cu,{children:[c.jsx(jh,{size:16}),c.jsx("span",{children:"Москва, ул. Цветочная, 1"})]})]})]}),c.jsx(XL,{children:c.jsx("div",{className:"container",children:"© 2024 Flerr Online School. Все права защищены."})})]}),JL=x.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`,eF=x(_.main)`
  flex: 1;
  padding-top: 80px; // Account for fixed header
`,tF={initial:{opacity:0,y:20},in:{opacity:1,y:0},out:{opacity:0,y:-20}},nF={type:"tween",ease:"anticipate",duration:.4},rF=()=>c.jsxs(JL,{children:[c.jsx(qL,{}),c.jsx(eF,{initial:"initial",animate:"in",exit:"out",variants:tF,transition:nF,children:c.jsx(z2,{})}),c.jsx(ZL,{})]}),iF=x.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 400px;
  color: var(--color-primary);
`,oF=x(e3)`
  animation: spin 1s linear infinite;
  
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`,uv=({children:e})=>{const{isAuthenticated:t,isLoading:n}=Lr(),r=pn();return n?c.jsx(iF,{children:c.jsx(oF,{size:32})}):t?c.jsx(c.Fragment,{children:e}):c.jsx(M2,{to:"/login",state:{from:r},replace:!0})},sF=()=>c.jsx(Wn,{mode:"wait",children:c.jsx(_2,{children:c.jsxs(Xe,{path:"/",element:c.jsx(rF,{}),children:[c.jsx(Xe,{index:!0,element:c.jsx(O3,{})}),c.jsx(Xe,{path:"courses",element:c.jsx(q5,{})}),c.jsx(Xe,{path:"courses/:slug",element:c.jsx(T$,{})}),c.jsx(Xe,{path:"about",element:c.jsx(c4,{})}),c.jsx(Xe,{path:"instructors",element:c.jsx(L4,{})}),c.jsx(Xe,{path:"suppliers",element:c.jsx(iO,{})}),c.jsx(Xe,{path:"login",element:c.jsx(vO,{})}),c.jsx(Xe,{path:"register",element:c.jsx(LO,{})}),c.jsx(Xe,{path:"forgot-password",element:c.jsx(DO,{})}),c.jsx(Xe,{path:"reset-password",element:c.jsx(HO,{})}),c.jsx(Xe,{path:"profile",element:c.jsx(uv,{children:c.jsx(mL,{})})}),c.jsx(Xe,{path:"dashboard",element:c.jsx(uv,{children:c.jsx(zL,{})})})]})})}),D={colors:{primary:"#800080",purple:"#800080",secondary:"#B4A5A5",charlotte:"#B4A5A5",accent:"#E6E6FA",lavender:"#E6E6FA",lightLavender:"#F0E6FF",background:"#F8F7FF",backgroundSecondary:"#E6E6FA",backgroundTertiary:"#F0F0FF",text:"#2D1B3D",textLight:"#6B4E71",textMuted:"#9B8BA5",success:"#4CAF50",warning:"#FF9800",error:"#F44336",info:"#2196F3",gradientPrimary:"linear-gradient(135deg, #E6E6FA 0%, #F0F0FF 100%)",gradientSecondary:"linear-gradient(135deg, #800080 0%, #6B4E71 100%)",gradientAccent:"linear-gradient(135deg, #B4A5A5 0%, #9B8BA5 100%)",hoverPrimary:"#E0DCFF",hoverSecondary:"#A595A5",hoverAccent:"#D0C0FF"},fonts:{primary:'"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',secondary:'"Playfair Display", Georgia, serif'},spacing:{xs:"0.25rem",sm:"0.5rem",md:"1rem",lg:"1.5rem",xl:"2rem",xxl:"3rem"},borderRadius:{sm:"0.25rem",md:"0.5rem",lg:"1rem",xl:"1.5rem"},shadows:{sm:"0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)",md:"0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)",lg:"0 10px 20px rgba(0, 0, 0, 0.1), 0 6px 6px rgba(0, 0, 0, 0.06)",xl:"0 20px 25px rgba(0, 0, 0, 0.1), 0 10px 10px rgba(0, 0, 0, 0.04)"},transitions:{fast:"all 0.15s ease-in-out",normal:"all 0.3s ease-in-out",slow:"all 0.5s ease-in-out"},breakpoints:{xs:"480px",sm:"768px",md:"1024px",lg:"1200px",xl:"1440px"},animations:{fadeIn:{from:{opacity:0,transform:"translateY(20px)"},to:{opacity:1,transform:"translateY(0)"}},slideIn:{from:{transform:"translateX(-100%)"},to:{transform:"translateX(0)"}},scaleIn:{from:{transform:"scale(0.9)",opacity:0},to:{transform:"scale(1)",opacity:1}},bounce:{"0%, 20%, 53%, 80%, 100%":{transform:"translate3d(0,0,0)"},"40%, 43%":{transform:"translate3d(0, -30px, 0)"},"70%":{transform:"translate3d(0, -15px, 0)"},"90%":{transform:"translate3d(0, -4px, 0)"}}}};`${D.colors.primary}${D.colors.secondary}${D.colors.accent}${D.colors.background}${D.colors.backgroundSecondary}${D.colors.text}${D.colors.textLight}${D.colors.textMuted}${D.fonts.primary}${D.fonts.secondary}${D.spacing.xs}${D.spacing.sm}${D.spacing.md}${D.spacing.lg}${D.spacing.xl}${D.spacing.xxl}${D.borderRadius.sm}${D.borderRadius.md}${D.borderRadius.lg}${D.borderRadius.xl}${D.shadows.sm}${D.shadows.md}${D.shadows.lg}${D.shadows.xl}${D.transitions.fast}${D.transitions.normal}${D.transitions.slow}`;const aF={...D,components:{button:{primary:{background:D.colors.primary,color:"white",border:"none","&:hover":{background:D.colors.hoverPrimary}},secondary:{background:"transparent",color:D.colors.text,border:`1px solid ${D.colors.textMuted}`,"&:hover":{background:D.colors.backgroundSecondary,borderColor:D.colors.primary}}},card:{background:D.colors.background,borderRadius:D.borderRadius.lg,boxShadow:D.shadows.sm,"&:hover":{boxShadow:D.shadows.md}},input:{border:`1px solid ${D.colors.textMuted}`,borderRadius:D.borderRadius.md,"&:focus":{borderColor:D.colors.primary,boxShadow:`0 0 0 3px ${D.colors.primary}20`}}}},lF=({children:e})=>c.jsx(QR,{theme:aF,children:e});const cF=new pj({defaultOptions:{queries:{retry:1,refetchOnWindowFocus:!1}}});uu.createRoot(document.getElementById("root")).render(c.jsx(B.StrictMode,{children:c.jsx(oo,{children:c.jsx(wj,{client:cF,children:c.jsx(Q2,{children:c.jsx(lF,{children:c.jsxs(Y5,{children:[c.jsx(sF,{}),c.jsx($k,{position:"top-right",toastOptions:{duration:4e3,style:{background:"#363636",color:"#fff"}}})]})})})})})}));
//# sourceMappingURL=index-c4e4bdf1.js.map
