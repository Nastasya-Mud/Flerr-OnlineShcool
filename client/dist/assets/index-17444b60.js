function hw(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function Hd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var cv={exports:{}},bl={},uv={exports:{}},B={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xo=Symbol.for("react.element"),mw=Symbol.for("react.portal"),gw=Symbol.for("react.fragment"),vw=Symbol.for("react.strict_mode"),yw=Symbol.for("react.profiler"),xw=Symbol.for("react.provider"),ww=Symbol.for("react.context"),bw=Symbol.for("react.forward_ref"),Sw=Symbol.for("react.suspense"),jw=Symbol.for("react.memo"),kw=Symbol.for("react.lazy"),$p=Symbol.iterator;function Cw(e){return e===null||typeof e!="object"?null:(e=$p&&e[$p]||e["@@iterator"],typeof e=="function"?e:null)}var dv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},fv=Object.assign,pv={};function Ci(e,t,n){this.props=e,this.context=t,this.refs=pv,this.updater=n||dv}Ci.prototype.isReactComponent={};Ci.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Ci.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function hv(){}hv.prototype=Ci.prototype;function Wd(e,t,n){this.props=e,this.context=t,this.refs=pv,this.updater=n||dv}var Qd=Wd.prototype=new hv;Qd.constructor=Wd;fv(Qd,Ci.prototype);Qd.isPureReactComponent=!0;var Op=Array.isArray,mv=Object.prototype.hasOwnProperty,qd={current:null},gv={key:!0,ref:!0,__self:!0,__source:!0};function vv(e,t,n){var r,i={},o=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(o=""+t.key),t)mv.call(t,r)&&!gv.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Xo,type:e,key:o,ref:s,props:i,_owner:qd.current}}function Pw(e,t){return{$$typeof:Xo,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Kd(e){return typeof e=="object"&&e!==null&&e.$$typeof===Xo}function Ew(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Lp=/\/+/g;function ac(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Ew(""+e.key):t.toString(36)}function Ys(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case Xo:case mw:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+ac(s,0):r,Op(i)?(n="",e!=null&&(n=e.replace(Lp,"$&/")+"/"),Ys(i,t,n,"",function(u){return u})):i!=null&&(Kd(i)&&(i=Pw(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(Lp,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=r===""?".":r+":",Op(e))for(var a=0;a<e.length;a++){o=e[a];var l=r+ac(o,a);s+=Ys(o,t,n,l,i)}else if(l=Cw(e),typeof l=="function")for(e=l.call(e),a=0;!(o=e.next()).done;)o=o.value,l=r+ac(o,a++),s+=Ys(o,t,n,l,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function hs(e,t,n){if(e==null)return e;var r=[],i=0;return Ys(e,r,"","",function(o){return t.call(n,o,i++)}),r}function Tw(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ke={current:null},Xs={transition:null},Rw={ReactCurrentDispatcher:Ke,ReactCurrentBatchConfig:Xs,ReactCurrentOwner:qd};function yv(){throw Error("act(...) is not supported in production builds of React.")}B.Children={map:hs,forEach:function(e,t,n){hs(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return hs(e,function(){t++}),t},toArray:function(e){return hs(e,function(t){return t})||[]},only:function(e){if(!Kd(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};B.Component=Ci;B.Fragment=gw;B.Profiler=yw;B.PureComponent=Wd;B.StrictMode=vw;B.Suspense=Sw;B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Rw;B.act=yv;B.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=fv({},e.props),i=e.key,o=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,s=qd.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)mv.call(t,l)&&!gv.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Xo,type:e.type,key:i,ref:o,props:r,_owner:s}};B.createContext=function(e){return e={$$typeof:ww,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:xw,_context:e},e.Consumer=e};B.createElement=vv;B.createFactory=function(e){var t=vv.bind(null,e);return t.type=e,t};B.createRef=function(){return{current:null}};B.forwardRef=function(e){return{$$typeof:bw,render:e}};B.isValidElement=Kd;B.lazy=function(e){return{$$typeof:kw,_payload:{_status:-1,_result:e},_init:Tw}};B.memo=function(e,t){return{$$typeof:jw,type:e,compare:t===void 0?null:t}};B.startTransition=function(e){var t=Xs.transition;Xs.transition={};try{e()}finally{Xs.transition=t}};B.unstable_act=yv;B.useCallback=function(e,t){return Ke.current.useCallback(e,t)};B.useContext=function(e){return Ke.current.useContext(e)};B.useDebugValue=function(){};B.useDeferredValue=function(e){return Ke.current.useDeferredValue(e)};B.useEffect=function(e,t){return Ke.current.useEffect(e,t)};B.useId=function(){return Ke.current.useId()};B.useImperativeHandle=function(e,t,n){return Ke.current.useImperativeHandle(e,t,n)};B.useInsertionEffect=function(e,t){return Ke.current.useInsertionEffect(e,t)};B.useLayoutEffect=function(e,t){return Ke.current.useLayoutEffect(e,t)};B.useMemo=function(e,t){return Ke.current.useMemo(e,t)};B.useReducer=function(e,t,n){return Ke.current.useReducer(e,t,n)};B.useRef=function(e){return Ke.current.useRef(e)};B.useState=function(e){return Ke.current.useState(e)};B.useSyncExternalStore=function(e,t,n){return Ke.current.useSyncExternalStore(e,t,n)};B.useTransition=function(){return Ke.current.useTransition()};B.version="18.3.1";uv.exports=B;var j=uv.exports;const G=Hd(j),Aw=hw({__proto__:null,default:G},[j]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $w=j,Ow=Symbol.for("react.element"),Lw=Symbol.for("react.fragment"),Fw=Object.prototype.hasOwnProperty,Mw=$w.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,zw={key:!0,ref:!0,__self:!0,__source:!0};function xv(e,t,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)Fw.call(t,r)&&!zw.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Ow,type:e,key:o,ref:s,props:i,_owner:Mw.current}}bl.Fragment=Lw;bl.jsx=xv;bl.jsxs=xv;cv.exports=bl;var c=cv.exports,cu={},wv={exports:{}},ct={},bv={exports:{}},Sv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(A,$){var z=A.length;A.push($);e:for(;0<z;){var M=z-1>>>1,H=A[M];if(0<i(H,$))A[M]=$,A[z]=H,z=M;else break e}}function n(A){return A.length===0?null:A[0]}function r(A){if(A.length===0)return null;var $=A[0],z=A.pop();if(z!==$){A[0]=z;e:for(var M=0,H=A.length,_t=H>>>1;M<_t;){var Ye=2*(M+1)-1,Pt=A[Ye],Ce=Ye+1,dt=A[Ce];if(0>i(Pt,z))Ce<H&&0>i(dt,Pt)?(A[M]=dt,A[Ce]=z,M=Ce):(A[M]=Pt,A[Ye]=z,M=Ye);else if(Ce<H&&0>i(dt,z))A[M]=dt,A[Ce]=z,M=Ce;else break e}}return $}function i(A,$){var z=A.sortIndex-$.sortIndex;return z!==0?z:A.id-$.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}var l=[],u=[],d=1,f=null,p=3,m=!1,y=!1,w=!1,k=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(A){for(var $=n(u);$!==null;){if($.callback===null)r(u);else if($.startTime<=A)r(u),$.sortIndex=$.expirationTime,t(l,$);else break;$=n(u)}}function b(A){if(w=!1,v(A),!y)if(n(l)!==null)y=!0,Q(S);else{var $=n(u);$!==null&&he(b,$.startTime-A)}}function S(A,$){y=!1,w&&(w=!1,h(T),T=-1),m=!0;var z=p;try{for(v($),f=n(l);f!==null&&(!(f.expirationTime>$)||A&&!ne());){var M=f.callback;if(typeof M=="function"){f.callback=null,p=f.priorityLevel;var H=M(f.expirationTime<=$);$=e.unstable_now(),typeof H=="function"?f.callback=H:f===n(l)&&r(l),v($)}else r(l);f=n(l)}if(f!==null)var _t=!0;else{var Ye=n(u);Ye!==null&&he(b,Ye.startTime-$),_t=!1}return _t}finally{f=null,p=z,m=!1}}var C=!1,P=null,T=-1,L=5,F=-1;function ne(){return!(e.unstable_now()-F<L)}function J(){if(P!==null){var A=e.unstable_now();F=A;var $=!0;try{$=P(!0,A)}finally{$?re():(C=!1,P=null)}}else C=!1}var re;if(typeof g=="function")re=function(){g(J)};else if(typeof MessageChannel<"u"){var X=new MessageChannel,$e=X.port2;X.port1.onmessage=J,re=function(){$e.postMessage(null)}}else re=function(){k(J,0)};function Q(A){P=A,C||(C=!0,re())}function he(A,$){T=k(function(){A(e.unstable_now())},$)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(A){A.callback=null},e.unstable_continueExecution=function(){y||m||(y=!0,Q(S))},e.unstable_forceFrameRate=function(A){0>A||125<A?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<A?Math.floor(1e3/A):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(A){switch(p){case 1:case 2:case 3:var $=3;break;default:$=p}var z=p;p=$;try{return A()}finally{p=z}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(A,$){switch(A){case 1:case 2:case 3:case 4:case 5:break;default:A=3}var z=p;p=A;try{return $()}finally{p=z}},e.unstable_scheduleCallback=function(A,$,z){var M=e.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?M+z:M):z=M,A){case 1:var H=-1;break;case 2:H=250;break;case 5:H=1073741823;break;case 4:H=1e4;break;default:H=5e3}return H=z+H,A={id:d++,callback:$,priorityLevel:A,startTime:z,expirationTime:H,sortIndex:-1},z>M?(A.sortIndex=z,t(u,A),n(l)===null&&A===n(u)&&(w?(h(T),T=-1):w=!0,he(b,z-M))):(A.sortIndex=H,t(l,A),y||m||(y=!0,Q(S))),A},e.unstable_shouldYield=ne,e.unstable_wrapCallback=function(A){var $=p;return function(){var z=p;p=$;try{return A.apply(this,arguments)}finally{p=z}}}})(Sv);bv.exports=Sv;var Nw=bv.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _w=j,at=Nw;function R(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var jv=new Set,jo={};function Tr(e,t){di(e,t),di(e+"Capture",t)}function di(e,t){for(jo[e]=t,e=0;e<t.length;e++)jv.add(t[e])}var an=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),uu=Object.prototype.hasOwnProperty,Dw=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Fp={},Mp={};function Iw(e){return uu.call(Mp,e)?!0:uu.call(Fp,e)?!1:Dw.test(e)?Mp[e]=!0:(Fp[e]=!0,!1)}function Vw(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Uw(e,t,n,r){if(t===null||typeof t>"u"||Vw(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ge(e,t,n,r,i,o,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var Fe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Fe[e]=new Ge(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Fe[t]=new Ge(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Fe[e]=new Ge(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Fe[e]=new Ge(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Fe[e]=new Ge(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Fe[e]=new Ge(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Fe[e]=new Ge(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Fe[e]=new Ge(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Fe[e]=new Ge(e,5,!1,e.toLowerCase(),null,!1,!1)});var Gd=/[\-:]([a-z])/g;function Yd(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Gd,Yd);Fe[t]=new Ge(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Gd,Yd);Fe[t]=new Ge(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Gd,Yd);Fe[t]=new Ge(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Fe[e]=new Ge(e,1,!1,e.toLowerCase(),null,!1,!1)});Fe.xlinkHref=new Ge("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Fe[e]=new Ge(e,1,!1,e.toLowerCase(),null,!0,!0)});function Xd(e,t,n,r){var i=Fe.hasOwnProperty(t)?Fe[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Uw(t,n,i,r)&&(n=null),r||i===null?Iw(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var pn=_w.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ms=Symbol.for("react.element"),Ur=Symbol.for("react.portal"),Br=Symbol.for("react.fragment"),Zd=Symbol.for("react.strict_mode"),du=Symbol.for("react.profiler"),kv=Symbol.for("react.provider"),Cv=Symbol.for("react.context"),Jd=Symbol.for("react.forward_ref"),fu=Symbol.for("react.suspense"),pu=Symbol.for("react.suspense_list"),ef=Symbol.for("react.memo"),xn=Symbol.for("react.lazy"),Pv=Symbol.for("react.offscreen"),zp=Symbol.iterator;function Fi(e){return e===null||typeof e!="object"?null:(e=zp&&e[zp]||e["@@iterator"],typeof e=="function"?e:null)}var pe=Object.assign,lc;function Ji(e){if(lc===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);lc=t&&t[1]||""}return`
`+lc+e}var cc=!1;function uc(e,t){if(!e||cc)return"";cc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a]){var l=`
`+i[s].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=s&&0<=a);break}}}finally{cc=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Ji(e):""}function Bw(e){switch(e.tag){case 5:return Ji(e.type);case 16:return Ji("Lazy");case 13:return Ji("Suspense");case 19:return Ji("SuspenseList");case 0:case 2:case 15:return e=uc(e.type,!1),e;case 11:return e=uc(e.type.render,!1),e;case 1:return e=uc(e.type,!0),e;default:return""}}function hu(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Br:return"Fragment";case Ur:return"Portal";case du:return"Profiler";case Zd:return"StrictMode";case fu:return"Suspense";case pu:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Cv:return(e.displayName||"Context")+".Consumer";case kv:return(e._context.displayName||"Context")+".Provider";case Jd:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ef:return t=e.displayName||null,t!==null?t:hu(e.type)||"Memo";case xn:t=e._payload,e=e._init;try{return hu(e(t))}catch{}}return null}function Hw(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return hu(t);case 8:return t===Zd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Vn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ev(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Ww(e){var t=Ev(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function gs(e){e._valueTracker||(e._valueTracker=Ww(e))}function Tv(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Ev(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function ka(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function mu(e,t){var n=t.checked;return pe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Np(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Vn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Rv(e,t){t=t.checked,t!=null&&Xd(e,"checked",t,!1)}function gu(e,t){Rv(e,t);var n=Vn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?vu(e,t.type,n):t.hasOwnProperty("defaultValue")&&vu(e,t.type,Vn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function _p(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function vu(e,t,n){(t!=="number"||ka(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var eo=Array.isArray;function oi(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Vn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function yu(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(R(91));return pe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Dp(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(R(92));if(eo(n)){if(1<n.length)throw Error(R(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Vn(n)}}function Av(e,t){var n=Vn(t.value),r=Vn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Ip(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function $v(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function xu(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?$v(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var vs,Ov=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(vs=vs||document.createElement("div"),vs.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=vs.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function ko(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var so={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Qw=["Webkit","ms","Moz","O"];Object.keys(so).forEach(function(e){Qw.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),so[t]=so[e]})});function Lv(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||so.hasOwnProperty(e)&&so[e]?(""+t).trim():t+"px"}function Fv(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Lv(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var qw=pe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function wu(e,t){if(t){if(qw[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(R(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(R(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(R(61))}if(t.style!=null&&typeof t.style!="object")throw Error(R(62))}}function bu(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Su=null;function tf(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ju=null,si=null,ai=null;function Vp(e){if(e=es(e)){if(typeof ju!="function")throw Error(R(280));var t=e.stateNode;t&&(t=Pl(t),ju(e.stateNode,e.type,t))}}function Mv(e){si?ai?ai.push(e):ai=[e]:si=e}function zv(){if(si){var e=si,t=ai;if(ai=si=null,Vp(e),t)for(e=0;e<t.length;e++)Vp(t[e])}}function Nv(e,t){return e(t)}function _v(){}var dc=!1;function Dv(e,t,n){if(dc)return e(t,n);dc=!0;try{return Nv(e,t,n)}finally{dc=!1,(si!==null||ai!==null)&&(_v(),zv())}}function Co(e,t){var n=e.stateNode;if(n===null)return null;var r=Pl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(R(231,t,typeof n));return n}var ku=!1;if(an)try{var Mi={};Object.defineProperty(Mi,"passive",{get:function(){ku=!0}}),window.addEventListener("test",Mi,Mi),window.removeEventListener("test",Mi,Mi)}catch{ku=!1}function Kw(e,t,n,r,i,o,s,a,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var ao=!1,Ca=null,Pa=!1,Cu=null,Gw={onError:function(e){ao=!0,Ca=e}};function Yw(e,t,n,r,i,o,s,a,l){ao=!1,Ca=null,Kw.apply(Gw,arguments)}function Xw(e,t,n,r,i,o,s,a,l){if(Yw.apply(this,arguments),ao){if(ao){var u=Ca;ao=!1,Ca=null}else throw Error(R(198));Pa||(Pa=!0,Cu=u)}}function Rr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Iv(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Up(e){if(Rr(e)!==e)throw Error(R(188))}function Zw(e){var t=e.alternate;if(!t){if(t=Rr(e),t===null)throw Error(R(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Up(i),e;if(o===r)return Up(i),t;o=o.sibling}throw Error(R(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s)throw Error(R(189))}}if(n.alternate!==r)throw Error(R(190))}if(n.tag!==3)throw Error(R(188));return n.stateNode.current===n?e:t}function Vv(e){return e=Zw(e),e!==null?Uv(e):null}function Uv(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Uv(e);if(t!==null)return t;e=e.sibling}return null}var Bv=at.unstable_scheduleCallback,Bp=at.unstable_cancelCallback,Jw=at.unstable_shouldYield,eb=at.unstable_requestPaint,ye=at.unstable_now,tb=at.unstable_getCurrentPriorityLevel,nf=at.unstable_ImmediatePriority,Hv=at.unstable_UserBlockingPriority,Ea=at.unstable_NormalPriority,nb=at.unstable_LowPriority,Wv=at.unstable_IdlePriority,Sl=null,Ht=null;function rb(e){if(Ht&&typeof Ht.onCommitFiberRoot=="function")try{Ht.onCommitFiberRoot(Sl,e,void 0,(e.current.flags&128)===128)}catch{}}var Ot=Math.clz32?Math.clz32:sb,ib=Math.log,ob=Math.LN2;function sb(e){return e>>>=0,e===0?32:31-(ib(e)/ob|0)|0}var ys=64,xs=4194304;function to(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ta(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,s=n&268435455;if(s!==0){var a=s&~i;a!==0?r=to(a):(o&=s,o!==0&&(r=to(o)))}else s=n&~i,s!==0?r=to(s):o!==0&&(r=to(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ot(t),i=1<<n,r|=e[n],t&=~i;return r}function ab(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function lb(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-Ot(o),a=1<<s,l=i[s];l===-1?(!(a&n)||a&r)&&(i[s]=ab(a,t)):l<=t&&(e.expiredLanes|=a),o&=~a}}function Pu(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Qv(){var e=ys;return ys<<=1,!(ys&4194240)&&(ys=64),e}function fc(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Zo(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ot(t),e[t]=n}function cb(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Ot(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function rf(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ot(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var Z=0;function qv(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Kv,of,Gv,Yv,Xv,Eu=!1,ws=[],An=null,$n=null,On=null,Po=new Map,Eo=new Map,kn=[],ub="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Hp(e,t){switch(e){case"focusin":case"focusout":An=null;break;case"dragenter":case"dragleave":$n=null;break;case"mouseover":case"mouseout":On=null;break;case"pointerover":case"pointerout":Po.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Eo.delete(t.pointerId)}}function zi(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=es(t),t!==null&&of(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function db(e,t,n,r,i){switch(t){case"focusin":return An=zi(An,e,t,n,r,i),!0;case"dragenter":return $n=zi($n,e,t,n,r,i),!0;case"mouseover":return On=zi(On,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Po.set(o,zi(Po.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Eo.set(o,zi(Eo.get(o)||null,e,t,n,r,i)),!0}return!1}function Zv(e){var t=ar(e.target);if(t!==null){var n=Rr(t);if(n!==null){if(t=n.tag,t===13){if(t=Iv(n),t!==null){e.blockedOn=t,Xv(e.priority,function(){Gv(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Zs(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Tu(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Su=r,n.target.dispatchEvent(r),Su=null}else return t=es(n),t!==null&&of(t),e.blockedOn=n,!1;t.shift()}return!0}function Wp(e,t,n){Zs(e)&&n.delete(t)}function fb(){Eu=!1,An!==null&&Zs(An)&&(An=null),$n!==null&&Zs($n)&&($n=null),On!==null&&Zs(On)&&(On=null),Po.forEach(Wp),Eo.forEach(Wp)}function Ni(e,t){e.blockedOn===t&&(e.blockedOn=null,Eu||(Eu=!0,at.unstable_scheduleCallback(at.unstable_NormalPriority,fb)))}function To(e){function t(i){return Ni(i,e)}if(0<ws.length){Ni(ws[0],e);for(var n=1;n<ws.length;n++){var r=ws[n];r.blockedOn===e&&(r.blockedOn=null)}}for(An!==null&&Ni(An,e),$n!==null&&Ni($n,e),On!==null&&Ni(On,e),Po.forEach(t),Eo.forEach(t),n=0;n<kn.length;n++)r=kn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<kn.length&&(n=kn[0],n.blockedOn===null);)Zv(n),n.blockedOn===null&&kn.shift()}var li=pn.ReactCurrentBatchConfig,Ra=!0;function pb(e,t,n,r){var i=Z,o=li.transition;li.transition=null;try{Z=1,sf(e,t,n,r)}finally{Z=i,li.transition=o}}function hb(e,t,n,r){var i=Z,o=li.transition;li.transition=null;try{Z=4,sf(e,t,n,r)}finally{Z=i,li.transition=o}}function sf(e,t,n,r){if(Ra){var i=Tu(e,t,n,r);if(i===null)Sc(e,t,r,Aa,n),Hp(e,r);else if(db(i,e,t,n,r))r.stopPropagation();else if(Hp(e,r),t&4&&-1<ub.indexOf(e)){for(;i!==null;){var o=es(i);if(o!==null&&Kv(o),o=Tu(e,t,n,r),o===null&&Sc(e,t,r,Aa,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Sc(e,t,r,null,n)}}var Aa=null;function Tu(e,t,n,r){if(Aa=null,e=tf(r),e=ar(e),e!==null)if(t=Rr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Iv(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Aa=e,null}function Jv(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(tb()){case nf:return 1;case Hv:return 4;case Ea:case nb:return 16;case Wv:return 536870912;default:return 16}default:return 16}}var En=null,af=null,Js=null;function e0(){if(Js)return Js;var e,t=af,n=t.length,r,i="value"in En?En.value:En.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[o-r];r++);return Js=i.slice(e,1<r?1-r:void 0)}function ea(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function bs(){return!0}function Qp(){return!1}function ut(e){function t(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?bs:Qp,this.isPropagationStopped=Qp,this}return pe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=bs)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=bs)},persist:function(){},isPersistent:bs}),t}var Pi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},lf=ut(Pi),Jo=pe({},Pi,{view:0,detail:0}),mb=ut(Jo),pc,hc,_i,jl=pe({},Jo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:cf,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==_i&&(_i&&e.type==="mousemove"?(pc=e.screenX-_i.screenX,hc=e.screenY-_i.screenY):hc=pc=0,_i=e),pc)},movementY:function(e){return"movementY"in e?e.movementY:hc}}),qp=ut(jl),gb=pe({},jl,{dataTransfer:0}),vb=ut(gb),yb=pe({},Jo,{relatedTarget:0}),mc=ut(yb),xb=pe({},Pi,{animationName:0,elapsedTime:0,pseudoElement:0}),wb=ut(xb),bb=pe({},Pi,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Sb=ut(bb),jb=pe({},Pi,{data:0}),Kp=ut(jb),kb={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Cb={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Pb={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Eb(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Pb[e])?!!t[e]:!1}function cf(){return Eb}var Tb=pe({},Jo,{key:function(e){if(e.key){var t=kb[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ea(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Cb[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:cf,charCode:function(e){return e.type==="keypress"?ea(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ea(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Rb=ut(Tb),Ab=pe({},jl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Gp=ut(Ab),$b=pe({},Jo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:cf}),Ob=ut($b),Lb=pe({},Pi,{propertyName:0,elapsedTime:0,pseudoElement:0}),Fb=ut(Lb),Mb=pe({},jl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),zb=ut(Mb),Nb=[9,13,27,32],uf=an&&"CompositionEvent"in window,lo=null;an&&"documentMode"in document&&(lo=document.documentMode);var _b=an&&"TextEvent"in window&&!lo,t0=an&&(!uf||lo&&8<lo&&11>=lo),Yp=String.fromCharCode(32),Xp=!1;function n0(e,t){switch(e){case"keyup":return Nb.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function r0(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Hr=!1;function Db(e,t){switch(e){case"compositionend":return r0(t);case"keypress":return t.which!==32?null:(Xp=!0,Yp);case"textInput":return e=t.data,e===Yp&&Xp?null:e;default:return null}}function Ib(e,t){if(Hr)return e==="compositionend"||!uf&&n0(e,t)?(e=e0(),Js=af=En=null,Hr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return t0&&t.locale!=="ko"?null:t.data;default:return null}}var Vb={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Zp(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Vb[e.type]:t==="textarea"}function i0(e,t,n,r){Mv(r),t=$a(t,"onChange"),0<t.length&&(n=new lf("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var co=null,Ro=null;function Ub(e){m0(e,0)}function kl(e){var t=qr(e);if(Tv(t))return e}function Bb(e,t){if(e==="change")return t}var o0=!1;if(an){var gc;if(an){var vc="oninput"in document;if(!vc){var Jp=document.createElement("div");Jp.setAttribute("oninput","return;"),vc=typeof Jp.oninput=="function"}gc=vc}else gc=!1;o0=gc&&(!document.documentMode||9<document.documentMode)}function eh(){co&&(co.detachEvent("onpropertychange",s0),Ro=co=null)}function s0(e){if(e.propertyName==="value"&&kl(Ro)){var t=[];i0(t,Ro,e,tf(e)),Dv(Ub,t)}}function Hb(e,t,n){e==="focusin"?(eh(),co=t,Ro=n,co.attachEvent("onpropertychange",s0)):e==="focusout"&&eh()}function Wb(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return kl(Ro)}function Qb(e,t){if(e==="click")return kl(t)}function qb(e,t){if(e==="input"||e==="change")return kl(t)}function Kb(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var zt=typeof Object.is=="function"?Object.is:Kb;function Ao(e,t){if(zt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!uu.call(t,i)||!zt(e[i],t[i]))return!1}return!0}function th(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function nh(e,t){var n=th(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=th(n)}}function a0(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?a0(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function l0(){for(var e=window,t=ka();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ka(e.document)}return t}function df(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Gb(e){var t=l0(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&a0(n.ownerDocument.documentElement,n)){if(r!==null&&df(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=nh(n,o);var s=nh(n,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Yb=an&&"documentMode"in document&&11>=document.documentMode,Wr=null,Ru=null,uo=null,Au=!1;function rh(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Au||Wr==null||Wr!==ka(r)||(r=Wr,"selectionStart"in r&&df(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),uo&&Ao(uo,r)||(uo=r,r=$a(Ru,"onSelect"),0<r.length&&(t=new lf("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Wr)))}function Ss(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Qr={animationend:Ss("Animation","AnimationEnd"),animationiteration:Ss("Animation","AnimationIteration"),animationstart:Ss("Animation","AnimationStart"),transitionend:Ss("Transition","TransitionEnd")},yc={},c0={};an&&(c0=document.createElement("div").style,"AnimationEvent"in window||(delete Qr.animationend.animation,delete Qr.animationiteration.animation,delete Qr.animationstart.animation),"TransitionEvent"in window||delete Qr.transitionend.transition);function Cl(e){if(yc[e])return yc[e];if(!Qr[e])return e;var t=Qr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in c0)return yc[e]=t[n];return e}var u0=Cl("animationend"),d0=Cl("animationiteration"),f0=Cl("animationstart"),p0=Cl("transitionend"),h0=new Map,ih="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Qn(e,t){h0.set(e,t),Tr(t,[e])}for(var xc=0;xc<ih.length;xc++){var wc=ih[xc],Xb=wc.toLowerCase(),Zb=wc[0].toUpperCase()+wc.slice(1);Qn(Xb,"on"+Zb)}Qn(u0,"onAnimationEnd");Qn(d0,"onAnimationIteration");Qn(f0,"onAnimationStart");Qn("dblclick","onDoubleClick");Qn("focusin","onFocus");Qn("focusout","onBlur");Qn(p0,"onTransitionEnd");di("onMouseEnter",["mouseout","mouseover"]);di("onMouseLeave",["mouseout","mouseover"]);di("onPointerEnter",["pointerout","pointerover"]);di("onPointerLeave",["pointerout","pointerover"]);Tr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Tr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Tr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Tr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Tr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Tr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var no="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Jb=new Set("cancel close invalid load scroll toggle".split(" ").concat(no));function oh(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Xw(r,t,void 0,e),e.currentTarget=null}function m0(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var s=r.length-1;0<=s;s--){var a=r[s],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==o&&i.isPropagationStopped())break e;oh(i,a,u),o=l}else for(s=0;s<r.length;s++){if(a=r[s],l=a.instance,u=a.currentTarget,a=a.listener,l!==o&&i.isPropagationStopped())break e;oh(i,a,u),o=l}}}if(Pa)throw e=Cu,Pa=!1,Cu=null,e}function ie(e,t){var n=t[Mu];n===void 0&&(n=t[Mu]=new Set);var r=e+"__bubble";n.has(r)||(g0(t,e,2,!1),n.add(r))}function bc(e,t,n){var r=0;t&&(r|=4),g0(n,e,r,t)}var js="_reactListening"+Math.random().toString(36).slice(2);function $o(e){if(!e[js]){e[js]=!0,jv.forEach(function(n){n!=="selectionchange"&&(Jb.has(n)||bc(n,!1,e),bc(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[js]||(t[js]=!0,bc("selectionchange",!1,t))}}function g0(e,t,n,r){switch(Jv(t)){case 1:var i=pb;break;case 4:i=hb;break;default:i=sf}n=i.bind(null,t,n,e),i=void 0,!ku||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Sc(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;s=s.return}for(;a!==null;){if(s=ar(a),s===null)return;if(l=s.tag,l===5||l===6){r=o=s;continue e}a=a.parentNode}}r=r.return}Dv(function(){var u=o,d=tf(n),f=[];e:{var p=h0.get(e);if(p!==void 0){var m=lf,y=e;switch(e){case"keypress":if(ea(n)===0)break e;case"keydown":case"keyup":m=Rb;break;case"focusin":y="focus",m=mc;break;case"focusout":y="blur",m=mc;break;case"beforeblur":case"afterblur":m=mc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=qp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=vb;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=Ob;break;case u0:case d0:case f0:m=wb;break;case p0:m=Fb;break;case"scroll":m=mb;break;case"wheel":m=zb;break;case"copy":case"cut":case"paste":m=Sb;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Gp}var w=(t&4)!==0,k=!w&&e==="scroll",h=w?p!==null?p+"Capture":null:p;w=[];for(var g=u,v;g!==null;){v=g;var b=v.stateNode;if(v.tag===5&&b!==null&&(v=b,h!==null&&(b=Co(g,h),b!=null&&w.push(Oo(g,b,v)))),k)break;g=g.return}0<w.length&&(p=new m(p,y,null,n,d),f.push({event:p,listeners:w}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",m=e==="mouseout"||e==="pointerout",p&&n!==Su&&(y=n.relatedTarget||n.fromElement)&&(ar(y)||y[ln]))break e;if((m||p)&&(p=d.window===d?d:(p=d.ownerDocument)?p.defaultView||p.parentWindow:window,m?(y=n.relatedTarget||n.toElement,m=u,y=y?ar(y):null,y!==null&&(k=Rr(y),y!==k||y.tag!==5&&y.tag!==6)&&(y=null)):(m=null,y=u),m!==y)){if(w=qp,b="onMouseLeave",h="onMouseEnter",g="mouse",(e==="pointerout"||e==="pointerover")&&(w=Gp,b="onPointerLeave",h="onPointerEnter",g="pointer"),k=m==null?p:qr(m),v=y==null?p:qr(y),p=new w(b,g+"leave",m,n,d),p.target=k,p.relatedTarget=v,b=null,ar(d)===u&&(w=new w(h,g+"enter",y,n,d),w.target=v,w.relatedTarget=k,b=w),k=b,m&&y)t:{for(w=m,h=y,g=0,v=w;v;v=Fr(v))g++;for(v=0,b=h;b;b=Fr(b))v++;for(;0<g-v;)w=Fr(w),g--;for(;0<v-g;)h=Fr(h),v--;for(;g--;){if(w===h||h!==null&&w===h.alternate)break t;w=Fr(w),h=Fr(h)}w=null}else w=null;m!==null&&sh(f,p,m,w,!1),y!==null&&k!==null&&sh(f,k,y,w,!0)}}e:{if(p=u?qr(u):window,m=p.nodeName&&p.nodeName.toLowerCase(),m==="select"||m==="input"&&p.type==="file")var S=Bb;else if(Zp(p))if(o0)S=qb;else{S=Wb;var C=Hb}else(m=p.nodeName)&&m.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(S=Qb);if(S&&(S=S(e,u))){i0(f,S,n,d);break e}C&&C(e,p,u),e==="focusout"&&(C=p._wrapperState)&&C.controlled&&p.type==="number"&&vu(p,"number",p.value)}switch(C=u?qr(u):window,e){case"focusin":(Zp(C)||C.contentEditable==="true")&&(Wr=C,Ru=u,uo=null);break;case"focusout":uo=Ru=Wr=null;break;case"mousedown":Au=!0;break;case"contextmenu":case"mouseup":case"dragend":Au=!1,rh(f,n,d);break;case"selectionchange":if(Yb)break;case"keydown":case"keyup":rh(f,n,d)}var P;if(uf)e:{switch(e){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else Hr?n0(e,n)&&(T="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&(t0&&n.locale!=="ko"&&(Hr||T!=="onCompositionStart"?T==="onCompositionEnd"&&Hr&&(P=e0()):(En=d,af="value"in En?En.value:En.textContent,Hr=!0)),C=$a(u,T),0<C.length&&(T=new Kp(T,e,null,n,d),f.push({event:T,listeners:C}),P?T.data=P:(P=r0(n),P!==null&&(T.data=P)))),(P=_b?Db(e,n):Ib(e,n))&&(u=$a(u,"onBeforeInput"),0<u.length&&(d=new Kp("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:u}),d.data=P))}m0(f,t)})}function Oo(e,t,n){return{instance:e,listener:t,currentTarget:n}}function $a(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Co(e,n),o!=null&&r.unshift(Oo(e,o,i)),o=Co(e,t),o!=null&&r.push(Oo(e,o,i))),e=e.return}return r}function Fr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function sh(e,t,n,r,i){for(var o=t._reactName,s=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Co(n,o),l!=null&&s.unshift(Oo(n,l,a))):i||(l=Co(n,o),l!=null&&s.push(Oo(n,l,a)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var e2=/\r\n?/g,t2=/\u0000|\uFFFD/g;function ah(e){return(typeof e=="string"?e:""+e).replace(e2,`
`).replace(t2,"")}function ks(e,t,n){if(t=ah(t),ah(e)!==t&&n)throw Error(R(425))}function Oa(){}var $u=null,Ou=null;function Lu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Fu=typeof setTimeout=="function"?setTimeout:void 0,n2=typeof clearTimeout=="function"?clearTimeout:void 0,lh=typeof Promise=="function"?Promise:void 0,r2=typeof queueMicrotask=="function"?queueMicrotask:typeof lh<"u"?function(e){return lh.resolve(null).then(e).catch(i2)}:Fu;function i2(e){setTimeout(function(){throw e})}function jc(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),To(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);To(t)}function Ln(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function ch(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Ei=Math.random().toString(36).slice(2),Bt="__reactFiber$"+Ei,Lo="__reactProps$"+Ei,ln="__reactContainer$"+Ei,Mu="__reactEvents$"+Ei,o2="__reactListeners$"+Ei,s2="__reactHandles$"+Ei;function ar(e){var t=e[Bt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ln]||n[Bt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=ch(e);e!==null;){if(n=e[Bt])return n;e=ch(e)}return t}e=n,n=e.parentNode}return null}function es(e){return e=e[Bt]||e[ln],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function qr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(R(33))}function Pl(e){return e[Lo]||null}var zu=[],Kr=-1;function qn(e){return{current:e}}function se(e){0>Kr||(e.current=zu[Kr],zu[Kr]=null,Kr--)}function ee(e,t){Kr++,zu[Kr]=e.current,e.current=t}var Un={},Ue=qn(Un),Je=qn(!1),xr=Un;function fi(e,t){var n=e.type.contextTypes;if(!n)return Un;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function et(e){return e=e.childContextTypes,e!=null}function La(){se(Je),se(Ue)}function uh(e,t,n){if(Ue.current!==Un)throw Error(R(168));ee(Ue,t),ee(Je,n)}function v0(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(R(108,Hw(e)||"Unknown",i));return pe({},n,r)}function Fa(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Un,xr=Ue.current,ee(Ue,e),ee(Je,Je.current),!0}function dh(e,t,n){var r=e.stateNode;if(!r)throw Error(R(169));n?(e=v0(e,t,xr),r.__reactInternalMemoizedMergedChildContext=e,se(Je),se(Ue),ee(Ue,e)):se(Je),ee(Je,n)}var Jt=null,El=!1,kc=!1;function y0(e){Jt===null?Jt=[e]:Jt.push(e)}function a2(e){El=!0,y0(e)}function Kn(){if(!kc&&Jt!==null){kc=!0;var e=0,t=Z;try{var n=Jt;for(Z=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Jt=null,El=!1}catch(i){throw Jt!==null&&(Jt=Jt.slice(e+1)),Bv(nf,Kn),i}finally{Z=t,kc=!1}}return null}var Gr=[],Yr=0,Ma=null,za=0,vt=[],yt=0,wr=null,en=1,tn="";function tr(e,t){Gr[Yr++]=za,Gr[Yr++]=Ma,Ma=e,za=t}function x0(e,t,n){vt[yt++]=en,vt[yt++]=tn,vt[yt++]=wr,wr=e;var r=en;e=tn;var i=32-Ot(r)-1;r&=~(1<<i),n+=1;var o=32-Ot(t)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,en=1<<32-Ot(t)+i|n<<i|r,tn=o+e}else en=1<<o|n<<i|r,tn=e}function ff(e){e.return!==null&&(tr(e,1),x0(e,1,0))}function pf(e){for(;e===Ma;)Ma=Gr[--Yr],Gr[Yr]=null,za=Gr[--Yr],Gr[Yr]=null;for(;e===wr;)wr=vt[--yt],vt[yt]=null,tn=vt[--yt],vt[yt]=null,en=vt[--yt],vt[yt]=null}var st=null,ot=null,le=!1,$t=null;function w0(e,t){var n=wt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function fh(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,st=e,ot=Ln(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,st=e,ot=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=wr!==null?{id:en,overflow:tn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=wt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,st=e,ot=null,!0):!1;default:return!1}}function Nu(e){return(e.mode&1)!==0&&(e.flags&128)===0}function _u(e){if(le){var t=ot;if(t){var n=t;if(!fh(e,t)){if(Nu(e))throw Error(R(418));t=Ln(n.nextSibling);var r=st;t&&fh(e,t)?w0(r,n):(e.flags=e.flags&-4097|2,le=!1,st=e)}}else{if(Nu(e))throw Error(R(418));e.flags=e.flags&-4097|2,le=!1,st=e}}}function ph(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;st=e}function Cs(e){if(e!==st)return!1;if(!le)return ph(e),le=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Lu(e.type,e.memoizedProps)),t&&(t=ot)){if(Nu(e))throw b0(),Error(R(418));for(;t;)w0(e,t),t=Ln(t.nextSibling)}if(ph(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(R(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ot=Ln(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ot=null}}else ot=st?Ln(e.stateNode.nextSibling):null;return!0}function b0(){for(var e=ot;e;)e=Ln(e.nextSibling)}function pi(){ot=st=null,le=!1}function hf(e){$t===null?$t=[e]:$t.push(e)}var l2=pn.ReactCurrentBatchConfig;function Di(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(R(309));var r=n.stateNode}if(!r)throw Error(R(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(s){var a=i.refs;s===null?delete a[o]:a[o]=s},t._stringRef=o,t)}if(typeof e!="string")throw Error(R(284));if(!n._owner)throw Error(R(290,e))}return e}function Ps(e,t){throw e=Object.prototype.toString.call(t),Error(R(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function hh(e){var t=e._init;return t(e._payload)}function S0(e){function t(h,g){if(e){var v=h.deletions;v===null?(h.deletions=[g],h.flags|=16):v.push(g)}}function n(h,g){if(!e)return null;for(;g!==null;)t(h,g),g=g.sibling;return null}function r(h,g){for(h=new Map;g!==null;)g.key!==null?h.set(g.key,g):h.set(g.index,g),g=g.sibling;return h}function i(h,g){return h=Nn(h,g),h.index=0,h.sibling=null,h}function o(h,g,v){return h.index=v,e?(v=h.alternate,v!==null?(v=v.index,v<g?(h.flags|=2,g):v):(h.flags|=2,g)):(h.flags|=1048576,g)}function s(h){return e&&h.alternate===null&&(h.flags|=2),h}function a(h,g,v,b){return g===null||g.tag!==6?(g=$c(v,h.mode,b),g.return=h,g):(g=i(g,v),g.return=h,g)}function l(h,g,v,b){var S=v.type;return S===Br?d(h,g,v.props.children,b,v.key):g!==null&&(g.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===xn&&hh(S)===g.type)?(b=i(g,v.props),b.ref=Di(h,g,v),b.return=h,b):(b=aa(v.type,v.key,v.props,null,h.mode,b),b.ref=Di(h,g,v),b.return=h,b)}function u(h,g,v,b){return g===null||g.tag!==4||g.stateNode.containerInfo!==v.containerInfo||g.stateNode.implementation!==v.implementation?(g=Oc(v,h.mode,b),g.return=h,g):(g=i(g,v.children||[]),g.return=h,g)}function d(h,g,v,b,S){return g===null||g.tag!==7?(g=gr(v,h.mode,b,S),g.return=h,g):(g=i(g,v),g.return=h,g)}function f(h,g,v){if(typeof g=="string"&&g!==""||typeof g=="number")return g=$c(""+g,h.mode,v),g.return=h,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case ms:return v=aa(g.type,g.key,g.props,null,h.mode,v),v.ref=Di(h,null,g),v.return=h,v;case Ur:return g=Oc(g,h.mode,v),g.return=h,g;case xn:var b=g._init;return f(h,b(g._payload),v)}if(eo(g)||Fi(g))return g=gr(g,h.mode,v,null),g.return=h,g;Ps(h,g)}return null}function p(h,g,v,b){var S=g!==null?g.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return S!==null?null:a(h,g,""+v,b);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case ms:return v.key===S?l(h,g,v,b):null;case Ur:return v.key===S?u(h,g,v,b):null;case xn:return S=v._init,p(h,g,S(v._payload),b)}if(eo(v)||Fi(v))return S!==null?null:d(h,g,v,b,null);Ps(h,v)}return null}function m(h,g,v,b,S){if(typeof b=="string"&&b!==""||typeof b=="number")return h=h.get(v)||null,a(g,h,""+b,S);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case ms:return h=h.get(b.key===null?v:b.key)||null,l(g,h,b,S);case Ur:return h=h.get(b.key===null?v:b.key)||null,u(g,h,b,S);case xn:var C=b._init;return m(h,g,v,C(b._payload),S)}if(eo(b)||Fi(b))return h=h.get(v)||null,d(g,h,b,S,null);Ps(g,b)}return null}function y(h,g,v,b){for(var S=null,C=null,P=g,T=g=0,L=null;P!==null&&T<v.length;T++){P.index>T?(L=P,P=null):L=P.sibling;var F=p(h,P,v[T],b);if(F===null){P===null&&(P=L);break}e&&P&&F.alternate===null&&t(h,P),g=o(F,g,T),C===null?S=F:C.sibling=F,C=F,P=L}if(T===v.length)return n(h,P),le&&tr(h,T),S;if(P===null){for(;T<v.length;T++)P=f(h,v[T],b),P!==null&&(g=o(P,g,T),C===null?S=P:C.sibling=P,C=P);return le&&tr(h,T),S}for(P=r(h,P);T<v.length;T++)L=m(P,h,T,v[T],b),L!==null&&(e&&L.alternate!==null&&P.delete(L.key===null?T:L.key),g=o(L,g,T),C===null?S=L:C.sibling=L,C=L);return e&&P.forEach(function(ne){return t(h,ne)}),le&&tr(h,T),S}function w(h,g,v,b){var S=Fi(v);if(typeof S!="function")throw Error(R(150));if(v=S.call(v),v==null)throw Error(R(151));for(var C=S=null,P=g,T=g=0,L=null,F=v.next();P!==null&&!F.done;T++,F=v.next()){P.index>T?(L=P,P=null):L=P.sibling;var ne=p(h,P,F.value,b);if(ne===null){P===null&&(P=L);break}e&&P&&ne.alternate===null&&t(h,P),g=o(ne,g,T),C===null?S=ne:C.sibling=ne,C=ne,P=L}if(F.done)return n(h,P),le&&tr(h,T),S;if(P===null){for(;!F.done;T++,F=v.next())F=f(h,F.value,b),F!==null&&(g=o(F,g,T),C===null?S=F:C.sibling=F,C=F);return le&&tr(h,T),S}for(P=r(h,P);!F.done;T++,F=v.next())F=m(P,h,T,F.value,b),F!==null&&(e&&F.alternate!==null&&P.delete(F.key===null?T:F.key),g=o(F,g,T),C===null?S=F:C.sibling=F,C=F);return e&&P.forEach(function(J){return t(h,J)}),le&&tr(h,T),S}function k(h,g,v,b){if(typeof v=="object"&&v!==null&&v.type===Br&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case ms:e:{for(var S=v.key,C=g;C!==null;){if(C.key===S){if(S=v.type,S===Br){if(C.tag===7){n(h,C.sibling),g=i(C,v.props.children),g.return=h,h=g;break e}}else if(C.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===xn&&hh(S)===C.type){n(h,C.sibling),g=i(C,v.props),g.ref=Di(h,C,v),g.return=h,h=g;break e}n(h,C);break}else t(h,C);C=C.sibling}v.type===Br?(g=gr(v.props.children,h.mode,b,v.key),g.return=h,h=g):(b=aa(v.type,v.key,v.props,null,h.mode,b),b.ref=Di(h,g,v),b.return=h,h=b)}return s(h);case Ur:e:{for(C=v.key;g!==null;){if(g.key===C)if(g.tag===4&&g.stateNode.containerInfo===v.containerInfo&&g.stateNode.implementation===v.implementation){n(h,g.sibling),g=i(g,v.children||[]),g.return=h,h=g;break e}else{n(h,g);break}else t(h,g);g=g.sibling}g=Oc(v,h.mode,b),g.return=h,h=g}return s(h);case xn:return C=v._init,k(h,g,C(v._payload),b)}if(eo(v))return y(h,g,v,b);if(Fi(v))return w(h,g,v,b);Ps(h,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,g!==null&&g.tag===6?(n(h,g.sibling),g=i(g,v),g.return=h,h=g):(n(h,g),g=$c(v,h.mode,b),g.return=h,h=g),s(h)):n(h,g)}return k}var hi=S0(!0),j0=S0(!1),Na=qn(null),_a=null,Xr=null,mf=null;function gf(){mf=Xr=_a=null}function vf(e){var t=Na.current;se(Na),e._currentValue=t}function Du(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function ci(e,t){_a=e,mf=Xr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ze=!0),e.firstContext=null)}function jt(e){var t=e._currentValue;if(mf!==e)if(e={context:e,memoizedValue:t,next:null},Xr===null){if(_a===null)throw Error(R(308));Xr=e,_a.dependencies={lanes:0,firstContext:e}}else Xr=Xr.next=e;return t}var lr=null;function yf(e){lr===null?lr=[e]:lr.push(e)}function k0(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,yf(t)):(n.next=i.next,i.next=n),t.interleaved=n,cn(e,r)}function cn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var wn=!1;function xf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function C0(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function rn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Fn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,q&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,cn(e,n)}return i=r.interleaved,i===null?(t.next=t,yf(r)):(t.next=i.next,i.next=t),r.interleaved=t,cn(e,n)}function ta(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,rf(e,n)}}function mh(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Da(e,t,n,r){var i=e.updateQueue;wn=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,s===null?o=u:s.next=u,s=l;var d=e.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==s&&(a===null?d.firstBaseUpdate=u:a.next=u,d.lastBaseUpdate=l))}if(o!==null){var f=i.baseState;s=0,d=u=l=null,a=o;do{var p=a.lane,m=a.eventTime;if((r&p)===p){d!==null&&(d=d.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=e,w=a;switch(p=t,m=n,w.tag){case 1:if(y=w.payload,typeof y=="function"){f=y.call(m,f,p);break e}f=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=w.payload,p=typeof y=="function"?y.call(m,f,p):y,p==null)break e;f=pe({},f,p);break e;case 2:wn=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,p=i.effects,p===null?i.effects=[a]:p.push(a))}else m={eventTime:m,lane:p,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(u=d=m,l=f):d=d.next=m,s|=p;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;p=a,a=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);if(d===null&&(l=f),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Sr|=s,e.lanes=s,e.memoizedState=f}}function gh(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(R(191,i));i.call(r)}}}var ts={},Wt=qn(ts),Fo=qn(ts),Mo=qn(ts);function cr(e){if(e===ts)throw Error(R(174));return e}function wf(e,t){switch(ee(Mo,t),ee(Fo,e),ee(Wt,ts),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:xu(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=xu(t,e)}se(Wt),ee(Wt,t)}function mi(){se(Wt),se(Fo),se(Mo)}function P0(e){cr(Mo.current);var t=cr(Wt.current),n=xu(t,e.type);t!==n&&(ee(Fo,e),ee(Wt,n))}function bf(e){Fo.current===e&&(se(Wt),se(Fo))}var ue=qn(0);function Ia(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Cc=[];function Sf(){for(var e=0;e<Cc.length;e++)Cc[e]._workInProgressVersionPrimary=null;Cc.length=0}var na=pn.ReactCurrentDispatcher,Pc=pn.ReactCurrentBatchConfig,br=0,fe=null,Pe=null,Te=null,Va=!1,fo=!1,zo=0,c2=0;function Me(){throw Error(R(321))}function jf(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!zt(e[n],t[n]))return!1;return!0}function kf(e,t,n,r,i,o){if(br=o,fe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,na.current=e===null||e.memoizedState===null?p2:h2,e=n(r,i),fo){o=0;do{if(fo=!1,zo=0,25<=o)throw Error(R(301));o+=1,Te=Pe=null,t.updateQueue=null,na.current=m2,e=n(r,i)}while(fo)}if(na.current=Ua,t=Pe!==null&&Pe.next!==null,br=0,Te=Pe=fe=null,Va=!1,t)throw Error(R(300));return e}function Cf(){var e=zo!==0;return zo=0,e}function Vt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Te===null?fe.memoizedState=Te=e:Te=Te.next=e,Te}function kt(){if(Pe===null){var e=fe.alternate;e=e!==null?e.memoizedState:null}else e=Pe.next;var t=Te===null?fe.memoizedState:Te.next;if(t!==null)Te=t,Pe=e;else{if(e===null)throw Error(R(310));Pe=e,e={memoizedState:Pe.memoizedState,baseState:Pe.baseState,baseQueue:Pe.baseQueue,queue:Pe.queue,next:null},Te===null?fe.memoizedState=Te=e:Te=Te.next=e}return Te}function No(e,t){return typeof t=="function"?t(e):t}function Ec(e){var t=kt(),n=t.queue;if(n===null)throw Error(R(311));n.lastRenderedReducer=e;var r=Pe,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=s=null,l=null,u=o;do{var d=u.lane;if((br&d)===d)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var f={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=f,s=r):l=l.next=f,fe.lanes|=d,Sr|=d}u=u.next}while(u!==null&&u!==o);l===null?s=r:l.next=a,zt(r,t.memoizedState)||(Ze=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,fe.lanes|=o,Sr|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Tc(e){var t=kt(),n=t.queue;if(n===null)throw Error(R(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);zt(o,t.memoizedState)||(Ze=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function E0(){}function T0(e,t){var n=fe,r=kt(),i=t(),o=!zt(r.memoizedState,i);if(o&&(r.memoizedState=i,Ze=!0),r=r.queue,Pf($0.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||Te!==null&&Te.memoizedState.tag&1){if(n.flags|=2048,_o(9,A0.bind(null,n,r,i,t),void 0,null),Ae===null)throw Error(R(349));br&30||R0(n,t,i)}return i}function R0(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=fe.updateQueue,t===null?(t={lastEffect:null,stores:null},fe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function A0(e,t,n,r){t.value=n,t.getSnapshot=r,O0(t)&&L0(e)}function $0(e,t,n){return n(function(){O0(t)&&L0(e)})}function O0(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!zt(e,n)}catch{return!0}}function L0(e){var t=cn(e,1);t!==null&&Lt(t,e,1,-1)}function vh(e){var t=Vt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:No,lastRenderedState:e},t.queue=e,e=e.dispatch=f2.bind(null,fe,e),[t.memoizedState,e]}function _o(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=fe.updateQueue,t===null?(t={lastEffect:null,stores:null},fe.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function F0(){return kt().memoizedState}function ra(e,t,n,r){var i=Vt();fe.flags|=e,i.memoizedState=_o(1|t,n,void 0,r===void 0?null:r)}function Tl(e,t,n,r){var i=kt();r=r===void 0?null:r;var o=void 0;if(Pe!==null){var s=Pe.memoizedState;if(o=s.destroy,r!==null&&jf(r,s.deps)){i.memoizedState=_o(t,n,o,r);return}}fe.flags|=e,i.memoizedState=_o(1|t,n,o,r)}function yh(e,t){return ra(8390656,8,e,t)}function Pf(e,t){return Tl(2048,8,e,t)}function M0(e,t){return Tl(4,2,e,t)}function z0(e,t){return Tl(4,4,e,t)}function N0(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function _0(e,t,n){return n=n!=null?n.concat([e]):null,Tl(4,4,N0.bind(null,t,e),n)}function Ef(){}function D0(e,t){var n=kt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&jf(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function I0(e,t){var n=kt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&jf(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function V0(e,t,n){return br&21?(zt(n,t)||(n=Qv(),fe.lanes|=n,Sr|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ze=!0),e.memoizedState=n)}function u2(e,t){var n=Z;Z=n!==0&&4>n?n:4,e(!0);var r=Pc.transition;Pc.transition={};try{e(!1),t()}finally{Z=n,Pc.transition=r}}function U0(){return kt().memoizedState}function d2(e,t,n){var r=zn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},B0(e))H0(t,n);else if(n=k0(e,t,n,r),n!==null){var i=qe();Lt(n,e,r,i),W0(n,t,r)}}function f2(e,t,n){var r=zn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(B0(e))H0(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,a=o(s,n);if(i.hasEagerState=!0,i.eagerState=a,zt(a,s)){var l=t.interleaved;l===null?(i.next=i,yf(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=k0(e,t,i,r),n!==null&&(i=qe(),Lt(n,e,r,i),W0(n,t,r))}}function B0(e){var t=e.alternate;return e===fe||t!==null&&t===fe}function H0(e,t){fo=Va=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function W0(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,rf(e,n)}}var Ua={readContext:jt,useCallback:Me,useContext:Me,useEffect:Me,useImperativeHandle:Me,useInsertionEffect:Me,useLayoutEffect:Me,useMemo:Me,useReducer:Me,useRef:Me,useState:Me,useDebugValue:Me,useDeferredValue:Me,useTransition:Me,useMutableSource:Me,useSyncExternalStore:Me,useId:Me,unstable_isNewReconciler:!1},p2={readContext:jt,useCallback:function(e,t){return Vt().memoizedState=[e,t===void 0?null:t],e},useContext:jt,useEffect:yh,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,ra(4194308,4,N0.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ra(4194308,4,e,t)},useInsertionEffect:function(e,t){return ra(4,2,e,t)},useMemo:function(e,t){var n=Vt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Vt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=d2.bind(null,fe,e),[r.memoizedState,e]},useRef:function(e){var t=Vt();return e={current:e},t.memoizedState=e},useState:vh,useDebugValue:Ef,useDeferredValue:function(e){return Vt().memoizedState=e},useTransition:function(){var e=vh(!1),t=e[0];return e=u2.bind(null,e[1]),Vt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=fe,i=Vt();if(le){if(n===void 0)throw Error(R(407));n=n()}else{if(n=t(),Ae===null)throw Error(R(349));br&30||R0(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,yh($0.bind(null,r,o,e),[e]),r.flags|=2048,_o(9,A0.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Vt(),t=Ae.identifierPrefix;if(le){var n=tn,r=en;n=(r&~(1<<32-Ot(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=zo++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=c2++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},h2={readContext:jt,useCallback:D0,useContext:jt,useEffect:Pf,useImperativeHandle:_0,useInsertionEffect:M0,useLayoutEffect:z0,useMemo:I0,useReducer:Ec,useRef:F0,useState:function(){return Ec(No)},useDebugValue:Ef,useDeferredValue:function(e){var t=kt();return V0(t,Pe.memoizedState,e)},useTransition:function(){var e=Ec(No)[0],t=kt().memoizedState;return[e,t]},useMutableSource:E0,useSyncExternalStore:T0,useId:U0,unstable_isNewReconciler:!1},m2={readContext:jt,useCallback:D0,useContext:jt,useEffect:Pf,useImperativeHandle:_0,useInsertionEffect:M0,useLayoutEffect:z0,useMemo:I0,useReducer:Tc,useRef:F0,useState:function(){return Tc(No)},useDebugValue:Ef,useDeferredValue:function(e){var t=kt();return Pe===null?t.memoizedState=e:V0(t,Pe.memoizedState,e)},useTransition:function(){var e=Tc(No)[0],t=kt().memoizedState;return[e,t]},useMutableSource:E0,useSyncExternalStore:T0,useId:U0,unstable_isNewReconciler:!1};function Rt(e,t){if(e&&e.defaultProps){t=pe({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Iu(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:pe({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Rl={isMounted:function(e){return(e=e._reactInternals)?Rr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=qe(),i=zn(e),o=rn(r,i);o.payload=t,n!=null&&(o.callback=n),t=Fn(e,o,i),t!==null&&(Lt(t,e,i,r),ta(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=qe(),i=zn(e),o=rn(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Fn(e,o,i),t!==null&&(Lt(t,e,i,r),ta(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=qe(),r=zn(e),i=rn(n,r);i.tag=2,t!=null&&(i.callback=t),t=Fn(e,i,r),t!==null&&(Lt(t,e,r,n),ta(t,e,r))}};function xh(e,t,n,r,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,s):t.prototype&&t.prototype.isPureReactComponent?!Ao(n,r)||!Ao(i,o):!0}function Q0(e,t,n){var r=!1,i=Un,o=t.contextType;return typeof o=="object"&&o!==null?o=jt(o):(i=et(t)?xr:Ue.current,r=t.contextTypes,o=(r=r!=null)?fi(e,i):Un),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Rl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function wh(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Rl.enqueueReplaceState(t,t.state,null)}function Vu(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},xf(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=jt(o):(o=et(t)?xr:Ue.current,i.context=fi(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Iu(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Rl.enqueueReplaceState(i,i.state,null),Da(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function gi(e,t){try{var n="",r=t;do n+=Bw(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function Rc(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Uu(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var g2=typeof WeakMap=="function"?WeakMap:Map;function q0(e,t,n){n=rn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Ha||(Ha=!0,Zu=r),Uu(e,t)},n}function K0(e,t,n){n=rn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Uu(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Uu(e,t),typeof r!="function"&&(Mn===null?Mn=new Set([this]):Mn.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function bh(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new g2;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=A2.bind(null,e,t,n),t.then(e,e))}function Sh(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function jh(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=rn(-1,1),t.tag=2,Fn(n,t,1))),n.lanes|=1),e)}var v2=pn.ReactCurrentOwner,Ze=!1;function We(e,t,n,r){t.child=e===null?j0(t,null,n,r):hi(t,e.child,n,r)}function kh(e,t,n,r,i){n=n.render;var o=t.ref;return ci(t,i),r=kf(e,t,n,r,o,i),n=Cf(),e!==null&&!Ze?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,un(e,t,i)):(le&&n&&ff(t),t.flags|=1,We(e,t,r,i),t.child)}function Ch(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Mf(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,G0(e,t,o,r,i)):(e=aa(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:Ao,n(s,r)&&e.ref===t.ref)return un(e,t,i)}return t.flags|=1,e=Nn(o,r),e.ref=t.ref,e.return=t,t.child=e}function G0(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Ao(o,r)&&e.ref===t.ref)if(Ze=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(Ze=!0);else return t.lanes=e.lanes,un(e,t,i)}return Bu(e,t,n,r,i)}function Y0(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ee(Jr,it),it|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ee(Jr,it),it|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,ee(Jr,it),it|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,ee(Jr,it),it|=r;return We(e,t,i,n),t.child}function X0(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Bu(e,t,n,r,i){var o=et(n)?xr:Ue.current;return o=fi(t,o),ci(t,i),n=kf(e,t,n,r,o,i),r=Cf(),e!==null&&!Ze?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,un(e,t,i)):(le&&r&&ff(t),t.flags|=1,We(e,t,n,i),t.child)}function Ph(e,t,n,r,i){if(et(n)){var o=!0;Fa(t)}else o=!1;if(ci(t,i),t.stateNode===null)ia(e,t),Q0(t,n,r),Vu(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,a=t.memoizedProps;s.props=a;var l=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=jt(u):(u=et(n)?xr:Ue.current,u=fi(t,u));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof s.getSnapshotBeforeUpdate=="function";f||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||l!==u)&&wh(t,s,r,u),wn=!1;var p=t.memoizedState;s.state=p,Da(t,r,s,i),l=t.memoizedState,a!==r||p!==l||Je.current||wn?(typeof d=="function"&&(Iu(t,n,d,r),l=t.memoizedState),(a=wn||xh(t,n,a,r,p,l,u))?(f||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),s.props=r,s.state=l,s.context=u,r=a):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,C0(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:Rt(t.type,a),s.props=u,f=t.pendingProps,p=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=jt(l):(l=et(n)?xr:Ue.current,l=fi(t,l));var m=n.getDerivedStateFromProps;(d=typeof m=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==f||p!==l)&&wh(t,s,r,l),wn=!1,p=t.memoizedState,s.state=p,Da(t,r,s,i);var y=t.memoizedState;a!==f||p!==y||Je.current||wn?(typeof m=="function"&&(Iu(t,n,m,r),y=t.memoizedState),(u=wn||xh(t,n,u,r,p,y,l)||!1)?(d||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,y,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,y,l)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),s.props=r,s.state=y,s.context=l,r=u):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return Hu(e,t,n,r,o,i)}function Hu(e,t,n,r,i,o){X0(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return i&&dh(t,n,!1),un(e,t,o);r=t.stateNode,v2.current=t;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=hi(t,e.child,null,o),t.child=hi(t,null,a,o)):We(e,t,a,o),t.memoizedState=r.state,i&&dh(t,n,!0),t.child}function Z0(e){var t=e.stateNode;t.pendingContext?uh(e,t.pendingContext,t.pendingContext!==t.context):t.context&&uh(e,t.context,!1),wf(e,t.containerInfo)}function Eh(e,t,n,r,i){return pi(),hf(i),t.flags|=256,We(e,t,n,r),t.child}var Wu={dehydrated:null,treeContext:null,retryLane:0};function Qu(e){return{baseLanes:e,cachePool:null,transitions:null}}function J0(e,t,n){var r=t.pendingProps,i=ue.current,o=!1,s=(t.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),ee(ue,i&1),e===null)return _u(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,o?(r=t.mode,o=t.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=Ol(s,r,0,null),e=gr(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Qu(n),t.memoizedState=Wu,e):Tf(t,s));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return y2(e,t,s,r,a,i,n);if(o){o=r.fallback,s=t.mode,i=e.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(s&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=Nn(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=Nn(a,o):(o=gr(o,s,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,s=e.child.memoizedState,s=s===null?Qu(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~n,t.memoizedState=Wu,r}return o=e.child,e=o.sibling,r=Nn(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Tf(e,t){return t=Ol({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Es(e,t,n,r){return r!==null&&hf(r),hi(t,e.child,null,n),e=Tf(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function y2(e,t,n,r,i,o,s){if(n)return t.flags&256?(t.flags&=-257,r=Rc(Error(R(422))),Es(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Ol({mode:"visible",children:r.children},i,0,null),o=gr(o,i,s,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&hi(t,e.child,null,s),t.child.memoizedState=Qu(s),t.memoizedState=Wu,o);if(!(t.mode&1))return Es(e,t,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(R(419)),r=Rc(o,r,void 0),Es(e,t,s,r)}if(a=(s&e.childLanes)!==0,Ze||a){if(r=Ae,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,cn(e,i),Lt(r,e,i,-1))}return Ff(),r=Rc(Error(R(421))),Es(e,t,s,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=$2.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,ot=Ln(i.nextSibling),st=t,le=!0,$t=null,e!==null&&(vt[yt++]=en,vt[yt++]=tn,vt[yt++]=wr,en=e.id,tn=e.overflow,wr=t),t=Tf(t,r.children),t.flags|=4096,t)}function Th(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Du(e.return,t,n)}function Ac(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function ey(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(We(e,t,r.children,n),r=ue.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Th(e,n,t);else if(e.tag===19)Th(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ee(ue,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Ia(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Ac(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Ia(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Ac(t,!0,n,null,o);break;case"together":Ac(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ia(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function un(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Sr|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(R(153));if(t.child!==null){for(e=t.child,n=Nn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Nn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function x2(e,t,n){switch(t.tag){case 3:Z0(t),pi();break;case 5:P0(t);break;case 1:et(t.type)&&Fa(t);break;case 4:wf(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;ee(Na,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ee(ue,ue.current&1),t.flags|=128,null):n&t.child.childLanes?J0(e,t,n):(ee(ue,ue.current&1),e=un(e,t,n),e!==null?e.sibling:null);ee(ue,ue.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return ey(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ee(ue,ue.current),r)break;return null;case 22:case 23:return t.lanes=0,Y0(e,t,n)}return un(e,t,n)}var ty,qu,ny,ry;ty=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};qu=function(){};ny=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,cr(Wt.current);var o=null;switch(n){case"input":i=mu(e,i),r=mu(e,r),o=[];break;case"select":i=pe({},i,{value:void 0}),r=pe({},r,{value:void 0}),o=[];break;case"textarea":i=yu(e,i),r=yu(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Oa)}wu(n,r);var s;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(jo.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(jo.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ie("scroll",e),o||a===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};ry=function(e,t,n,r){n!==r&&(t.flags|=4)};function Ii(e,t){if(!le)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ze(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function w2(e,t,n){var r=t.pendingProps;switch(pf(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ze(t),null;case 1:return et(t.type)&&La(),ze(t),null;case 3:return r=t.stateNode,mi(),se(Je),se(Ue),Sf(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Cs(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,$t!==null&&(td($t),$t=null))),qu(e,t),ze(t),null;case 5:bf(t);var i=cr(Mo.current);if(n=t.type,e!==null&&t.stateNode!=null)ny(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(R(166));return ze(t),null}if(e=cr(Wt.current),Cs(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Bt]=t,r[Lo]=o,e=(t.mode&1)!==0,n){case"dialog":ie("cancel",r),ie("close",r);break;case"iframe":case"object":case"embed":ie("load",r);break;case"video":case"audio":for(i=0;i<no.length;i++)ie(no[i],r);break;case"source":ie("error",r);break;case"img":case"image":case"link":ie("error",r),ie("load",r);break;case"details":ie("toggle",r);break;case"input":Np(r,o),ie("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},ie("invalid",r);break;case"textarea":Dp(r,o),ie("invalid",r)}wu(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&ks(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&ks(r.textContent,a,e),i=["children",""+a]):jo.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&ie("scroll",r)}switch(n){case"input":gs(r),_p(r,o,!0);break;case"textarea":gs(r),Ip(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Oa)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=$v(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[Bt]=t,e[Lo]=r,ty(e,t,!1,!1),t.stateNode=e;e:{switch(s=bu(n,r),n){case"dialog":ie("cancel",e),ie("close",e),i=r;break;case"iframe":case"object":case"embed":ie("load",e),i=r;break;case"video":case"audio":for(i=0;i<no.length;i++)ie(no[i],e);i=r;break;case"source":ie("error",e),i=r;break;case"img":case"image":case"link":ie("error",e),ie("load",e),i=r;break;case"details":ie("toggle",e),i=r;break;case"input":Np(e,r),i=mu(e,r),ie("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=pe({},r,{value:void 0}),ie("invalid",e);break;case"textarea":Dp(e,r),i=yu(e,r),ie("invalid",e);break;default:i=r}wu(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?Fv(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Ov(e,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ko(e,l):typeof l=="number"&&ko(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(jo.hasOwnProperty(o)?l!=null&&o==="onScroll"&&ie("scroll",e):l!=null&&Xd(e,o,l,s))}switch(n){case"input":gs(e),_p(e,r,!1);break;case"textarea":gs(e),Ip(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Vn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?oi(e,!!r.multiple,o,!1):r.defaultValue!=null&&oi(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Oa)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ze(t),null;case 6:if(e&&t.stateNode!=null)ry(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(R(166));if(n=cr(Mo.current),cr(Wt.current),Cs(t)){if(r=t.stateNode,n=t.memoizedProps,r[Bt]=t,(o=r.nodeValue!==n)&&(e=st,e!==null))switch(e.tag){case 3:ks(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ks(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Bt]=t,t.stateNode=r}return ze(t),null;case 13:if(se(ue),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(le&&ot!==null&&t.mode&1&&!(t.flags&128))b0(),pi(),t.flags|=98560,o=!1;else if(o=Cs(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(R(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(R(317));o[Bt]=t}else pi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ze(t),o=!1}else $t!==null&&(td($t),$t=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||ue.current&1?Ee===0&&(Ee=3):Ff())),t.updateQueue!==null&&(t.flags|=4),ze(t),null);case 4:return mi(),qu(e,t),e===null&&$o(t.stateNode.containerInfo),ze(t),null;case 10:return vf(t.type._context),ze(t),null;case 17:return et(t.type)&&La(),ze(t),null;case 19:if(se(ue),o=t.memoizedState,o===null)return ze(t),null;if(r=(t.flags&128)!==0,s=o.rendering,s===null)if(r)Ii(o,!1);else{if(Ee!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=Ia(e),s!==null){for(t.flags|=128,Ii(o,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ee(ue,ue.current&1|2),t.child}e=e.sibling}o.tail!==null&&ye()>vi&&(t.flags|=128,r=!0,Ii(o,!1),t.lanes=4194304)}else{if(!r)if(e=Ia(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Ii(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!le)return ze(t),null}else 2*ye()-o.renderingStartTime>vi&&n!==1073741824&&(t.flags|=128,r=!0,Ii(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(n=o.last,n!==null?n.sibling=s:t.child=s,o.last=s)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=ye(),t.sibling=null,n=ue.current,ee(ue,r?n&1|2:n&1),t):(ze(t),null);case 22:case 23:return Lf(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?it&1073741824&&(ze(t),t.subtreeFlags&6&&(t.flags|=8192)):ze(t),null;case 24:return null;case 25:return null}throw Error(R(156,t.tag))}function b2(e,t){switch(pf(t),t.tag){case 1:return et(t.type)&&La(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return mi(),se(Je),se(Ue),Sf(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return bf(t),null;case 13:if(se(ue),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(R(340));pi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return se(ue),null;case 4:return mi(),null;case 10:return vf(t.type._context),null;case 22:case 23:return Lf(),null;case 24:return null;default:return null}}var Ts=!1,De=!1,S2=typeof WeakSet=="function"?WeakSet:Set,O=null;function Zr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){me(e,t,r)}else n.current=null}function Ku(e,t,n){try{n()}catch(r){me(e,t,r)}}var Rh=!1;function j2(e,t){if($u=Ra,e=l0(),df(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,u=0,d=0,f=e,p=null;t:for(;;){for(var m;f!==n||i!==0&&f.nodeType!==3||(a=s+i),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break t;if(p===n&&++u===i&&(a=s),p===o&&++d===r&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ou={focusedElem:e,selectionRange:n},Ra=!1,O=t;O!==null;)if(t=O,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,O=e;else for(;O!==null;){t=O;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var w=y.memoizedProps,k=y.memoizedState,h=t.stateNode,g=h.getSnapshotBeforeUpdate(t.elementType===t.type?w:Rt(t.type,w),k);h.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var v=t.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(R(163))}}catch(b){me(t,t.return,b)}if(e=t.sibling,e!==null){e.return=t.return,O=e;break}O=t.return}return y=Rh,Rh=!1,y}function po(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Ku(t,n,o)}i=i.next}while(i!==r)}}function Al(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Gu(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function iy(e){var t=e.alternate;t!==null&&(e.alternate=null,iy(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Bt],delete t[Lo],delete t[Mu],delete t[o2],delete t[s2])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function oy(e){return e.tag===5||e.tag===3||e.tag===4}function Ah(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||oy(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Yu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Oa));else if(r!==4&&(e=e.child,e!==null))for(Yu(e,t,n),e=e.sibling;e!==null;)Yu(e,t,n),e=e.sibling}function Xu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Xu(e,t,n),e=e.sibling;e!==null;)Xu(e,t,n),e=e.sibling}var Oe=null,At=!1;function gn(e,t,n){for(n=n.child;n!==null;)sy(e,t,n),n=n.sibling}function sy(e,t,n){if(Ht&&typeof Ht.onCommitFiberUnmount=="function")try{Ht.onCommitFiberUnmount(Sl,n)}catch{}switch(n.tag){case 5:De||Zr(n,t);case 6:var r=Oe,i=At;Oe=null,gn(e,t,n),Oe=r,At=i,Oe!==null&&(At?(e=Oe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Oe.removeChild(n.stateNode));break;case 18:Oe!==null&&(At?(e=Oe,n=n.stateNode,e.nodeType===8?jc(e.parentNode,n):e.nodeType===1&&jc(e,n),To(e)):jc(Oe,n.stateNode));break;case 4:r=Oe,i=At,Oe=n.stateNode.containerInfo,At=!0,gn(e,t,n),Oe=r,At=i;break;case 0:case 11:case 14:case 15:if(!De&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&Ku(n,t,s),i=i.next}while(i!==r)}gn(e,t,n);break;case 1:if(!De&&(Zr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){me(n,t,a)}gn(e,t,n);break;case 21:gn(e,t,n);break;case 22:n.mode&1?(De=(r=De)||n.memoizedState!==null,gn(e,t,n),De=r):gn(e,t,n);break;default:gn(e,t,n)}}function $h(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new S2),t.forEach(function(r){var i=O2.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Tt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,s=t,a=s;e:for(;a!==null;){switch(a.tag){case 5:Oe=a.stateNode,At=!1;break e;case 3:Oe=a.stateNode.containerInfo,At=!0;break e;case 4:Oe=a.stateNode.containerInfo,At=!0;break e}a=a.return}if(Oe===null)throw Error(R(160));sy(o,s,i),Oe=null,At=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){me(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)ay(t,e),t=t.sibling}function ay(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Tt(t,e),Dt(e),r&4){try{po(3,e,e.return),Al(3,e)}catch(w){me(e,e.return,w)}try{po(5,e,e.return)}catch(w){me(e,e.return,w)}}break;case 1:Tt(t,e),Dt(e),r&512&&n!==null&&Zr(n,n.return);break;case 5:if(Tt(t,e),Dt(e),r&512&&n!==null&&Zr(n,n.return),e.flags&32){var i=e.stateNode;try{ko(i,"")}catch(w){me(e,e.return,w)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,s=n!==null?n.memoizedProps:o,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&Rv(i,o),bu(a,s);var u=bu(a,o);for(s=0;s<l.length;s+=2){var d=l[s],f=l[s+1];d==="style"?Fv(i,f):d==="dangerouslySetInnerHTML"?Ov(i,f):d==="children"?ko(i,f):Xd(i,d,f,u)}switch(a){case"input":gu(i,o);break;case"textarea":Av(i,o);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var m=o.value;m!=null?oi(i,!!o.multiple,m,!1):p!==!!o.multiple&&(o.defaultValue!=null?oi(i,!!o.multiple,o.defaultValue,!0):oi(i,!!o.multiple,o.multiple?[]:"",!1))}i[Lo]=o}catch(w){me(e,e.return,w)}}break;case 6:if(Tt(t,e),Dt(e),r&4){if(e.stateNode===null)throw Error(R(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(w){me(e,e.return,w)}}break;case 3:if(Tt(t,e),Dt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{To(t.containerInfo)}catch(w){me(e,e.return,w)}break;case 4:Tt(t,e),Dt(e);break;case 13:Tt(t,e),Dt(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||($f=ye())),r&4&&$h(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(De=(u=De)||d,Tt(t,e),De=u):Tt(t,e),Dt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(O=e,d=e.child;d!==null;){for(f=O=d;O!==null;){switch(p=O,m=p.child,p.tag){case 0:case 11:case 14:case 15:po(4,p,p.return);break;case 1:Zr(p,p.return);var y=p.stateNode;if(typeof y.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(w){me(r,n,w)}}break;case 5:Zr(p,p.return);break;case 22:if(p.memoizedState!==null){Lh(f);continue}}m!==null?(m.return=p,O=m):Lh(f)}d=d.sibling}e:for(d=null,f=e;;){if(f.tag===5){if(d===null){d=f;try{i=f.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=f.stateNode,l=f.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Lv("display",s))}catch(w){me(e,e.return,w)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(w){me(e,e.return,w)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Tt(t,e),Dt(e),r&4&&$h(e);break;case 21:break;default:Tt(t,e),Dt(e)}}function Dt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(oy(n)){var r=n;break e}n=n.return}throw Error(R(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ko(i,""),r.flags&=-33);var o=Ah(e);Xu(e,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=Ah(e);Yu(e,a,s);break;default:throw Error(R(161))}}catch(l){me(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function k2(e,t,n){O=e,ly(e)}function ly(e,t,n){for(var r=(e.mode&1)!==0;O!==null;){var i=O,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||Ts;if(!s){var a=i.alternate,l=a!==null&&a.memoizedState!==null||De;a=Ts;var u=De;if(Ts=s,(De=l)&&!u)for(O=i;O!==null;)s=O,l=s.child,s.tag===22&&s.memoizedState!==null?Fh(i):l!==null?(l.return=s,O=l):Fh(i);for(;o!==null;)O=o,ly(o),o=o.sibling;O=i,Ts=a,De=u}Oh(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,O=o):Oh(e)}}function Oh(e){for(;O!==null;){var t=O;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:De||Al(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!De)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Rt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&gh(t,o,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}gh(t,s,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&To(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(R(163))}De||t.flags&512&&Gu(t)}catch(p){me(t,t.return,p)}}if(t===e){O=null;break}if(n=t.sibling,n!==null){n.return=t.return,O=n;break}O=t.return}}function Lh(e){for(;O!==null;){var t=O;if(t===e){O=null;break}var n=t.sibling;if(n!==null){n.return=t.return,O=n;break}O=t.return}}function Fh(e){for(;O!==null;){var t=O;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Al(4,t)}catch(l){me(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){me(t,i,l)}}var o=t.return;try{Gu(t)}catch(l){me(t,o,l)}break;case 5:var s=t.return;try{Gu(t)}catch(l){me(t,s,l)}}}catch(l){me(t,t.return,l)}if(t===e){O=null;break}var a=t.sibling;if(a!==null){a.return=t.return,O=a;break}O=t.return}}var C2=Math.ceil,Ba=pn.ReactCurrentDispatcher,Rf=pn.ReactCurrentOwner,St=pn.ReactCurrentBatchConfig,q=0,Ae=null,je=null,Le=0,it=0,Jr=qn(0),Ee=0,Do=null,Sr=0,$l=0,Af=0,ho=null,Xe=null,$f=0,vi=1/0,Yt=null,Ha=!1,Zu=null,Mn=null,Rs=!1,Tn=null,Wa=0,mo=0,Ju=null,oa=-1,sa=0;function qe(){return q&6?ye():oa!==-1?oa:oa=ye()}function zn(e){return e.mode&1?q&2&&Le!==0?Le&-Le:l2.transition!==null?(sa===0&&(sa=Qv()),sa):(e=Z,e!==0||(e=window.event,e=e===void 0?16:Jv(e.type)),e):1}function Lt(e,t,n,r){if(50<mo)throw mo=0,Ju=null,Error(R(185));Zo(e,n,r),(!(q&2)||e!==Ae)&&(e===Ae&&(!(q&2)&&($l|=n),Ee===4&&Cn(e,Le)),tt(e,r),n===1&&q===0&&!(t.mode&1)&&(vi=ye()+500,El&&Kn()))}function tt(e,t){var n=e.callbackNode;lb(e,t);var r=Ta(e,e===Ae?Le:0);if(r===0)n!==null&&Bp(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Bp(n),t===1)e.tag===0?a2(Mh.bind(null,e)):y0(Mh.bind(null,e)),r2(function(){!(q&6)&&Kn()}),n=null;else{switch(qv(r)){case 1:n=nf;break;case 4:n=Hv;break;case 16:n=Ea;break;case 536870912:n=Wv;break;default:n=Ea}n=gy(n,cy.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function cy(e,t){if(oa=-1,sa=0,q&6)throw Error(R(327));var n=e.callbackNode;if(ui()&&e.callbackNode!==n)return null;var r=Ta(e,e===Ae?Le:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Qa(e,r);else{t=r;var i=q;q|=2;var o=dy();(Ae!==e||Le!==t)&&(Yt=null,vi=ye()+500,mr(e,t));do try{T2();break}catch(a){uy(e,a)}while(1);gf(),Ba.current=o,q=i,je!==null?t=0:(Ae=null,Le=0,t=Ee)}if(t!==0){if(t===2&&(i=Pu(e),i!==0&&(r=i,t=ed(e,i))),t===1)throw n=Do,mr(e,0),Cn(e,r),tt(e,ye()),n;if(t===6)Cn(e,r);else{if(i=e.current.alternate,!(r&30)&&!P2(i)&&(t=Qa(e,r),t===2&&(o=Pu(e),o!==0&&(r=o,t=ed(e,o))),t===1))throw n=Do,mr(e,0),Cn(e,r),tt(e,ye()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(R(345));case 2:nr(e,Xe,Yt);break;case 3:if(Cn(e,r),(r&130023424)===r&&(t=$f+500-ye(),10<t)){if(Ta(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){qe(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Fu(nr.bind(null,e,Xe,Yt),t);break}nr(e,Xe,Yt);break;case 4:if(Cn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-Ot(r);o=1<<s,s=t[s],s>i&&(i=s),r&=~o}if(r=i,r=ye()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*C2(r/1960))-r,10<r){e.timeoutHandle=Fu(nr.bind(null,e,Xe,Yt),r);break}nr(e,Xe,Yt);break;case 5:nr(e,Xe,Yt);break;default:throw Error(R(329))}}}return tt(e,ye()),e.callbackNode===n?cy.bind(null,e):null}function ed(e,t){var n=ho;return e.current.memoizedState.isDehydrated&&(mr(e,t).flags|=256),e=Qa(e,t),e!==2&&(t=Xe,Xe=n,t!==null&&td(t)),e}function td(e){Xe===null?Xe=e:Xe.push.apply(Xe,e)}function P2(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!zt(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Cn(e,t){for(t&=~Af,t&=~$l,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ot(t),r=1<<n;e[n]=-1,t&=~r}}function Mh(e){if(q&6)throw Error(R(327));ui();var t=Ta(e,0);if(!(t&1))return tt(e,ye()),null;var n=Qa(e,t);if(e.tag!==0&&n===2){var r=Pu(e);r!==0&&(t=r,n=ed(e,r))}if(n===1)throw n=Do,mr(e,0),Cn(e,t),tt(e,ye()),n;if(n===6)throw Error(R(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,nr(e,Xe,Yt),tt(e,ye()),null}function Of(e,t){var n=q;q|=1;try{return e(t)}finally{q=n,q===0&&(vi=ye()+500,El&&Kn())}}function jr(e){Tn!==null&&Tn.tag===0&&!(q&6)&&ui();var t=q;q|=1;var n=St.transition,r=Z;try{if(St.transition=null,Z=1,e)return e()}finally{Z=r,St.transition=n,q=t,!(q&6)&&Kn()}}function Lf(){it=Jr.current,se(Jr)}function mr(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,n2(n)),je!==null)for(n=je.return;n!==null;){var r=n;switch(pf(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&La();break;case 3:mi(),se(Je),se(Ue),Sf();break;case 5:bf(r);break;case 4:mi();break;case 13:se(ue);break;case 19:se(ue);break;case 10:vf(r.type._context);break;case 22:case 23:Lf()}n=n.return}if(Ae=e,je=e=Nn(e.current,null),Le=it=t,Ee=0,Do=null,Af=$l=Sr=0,Xe=ho=null,lr!==null){for(t=0;t<lr.length;t++)if(n=lr[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}lr=null}return e}function uy(e,t){do{var n=je;try{if(gf(),na.current=Ua,Va){for(var r=fe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Va=!1}if(br=0,Te=Pe=fe=null,fo=!1,zo=0,Rf.current=null,n===null||n.return===null){Ee=1,Do=t,je=null;break}e:{var o=e,s=n.return,a=n,l=t;if(t=Le,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,d=a,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var p=d.alternate;p?(d.updateQueue=p.updateQueue,d.memoizedState=p.memoizedState,d.lanes=p.lanes):(d.updateQueue=null,d.memoizedState=null)}var m=Sh(s);if(m!==null){m.flags&=-257,jh(m,s,a,o,t),m.mode&1&&bh(o,u,t),t=m,l=u;var y=t.updateQueue;if(y===null){var w=new Set;w.add(l),t.updateQueue=w}else y.add(l);break e}else{if(!(t&1)){bh(o,u,t),Ff();break e}l=Error(R(426))}}else if(le&&a.mode&1){var k=Sh(s);if(k!==null){!(k.flags&65536)&&(k.flags|=256),jh(k,s,a,o,t),hf(gi(l,a));break e}}o=l=gi(l,a),Ee!==4&&(Ee=2),ho===null?ho=[o]:ho.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var h=q0(o,l,t);mh(o,h);break e;case 1:a=l;var g=o.type,v=o.stateNode;if(!(o.flags&128)&&(typeof g.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Mn===null||!Mn.has(v)))){o.flags|=65536,t&=-t,o.lanes|=t;var b=K0(o,a,t);mh(o,b);break e}}o=o.return}while(o!==null)}py(n)}catch(S){t=S,je===n&&n!==null&&(je=n=n.return);continue}break}while(1)}function dy(){var e=Ba.current;return Ba.current=Ua,e===null?Ua:e}function Ff(){(Ee===0||Ee===3||Ee===2)&&(Ee=4),Ae===null||!(Sr&268435455)&&!($l&268435455)||Cn(Ae,Le)}function Qa(e,t){var n=q;q|=2;var r=dy();(Ae!==e||Le!==t)&&(Yt=null,mr(e,t));do try{E2();break}catch(i){uy(e,i)}while(1);if(gf(),q=n,Ba.current=r,je!==null)throw Error(R(261));return Ae=null,Le=0,Ee}function E2(){for(;je!==null;)fy(je)}function T2(){for(;je!==null&&!Jw();)fy(je)}function fy(e){var t=my(e.alternate,e,it);e.memoizedProps=e.pendingProps,t===null?py(e):je=t,Rf.current=null}function py(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=b2(n,t),n!==null){n.flags&=32767,je=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ee=6,je=null;return}}else if(n=w2(n,t,it),n!==null){je=n;return}if(t=t.sibling,t!==null){je=t;return}je=t=e}while(t!==null);Ee===0&&(Ee=5)}function nr(e,t,n){var r=Z,i=St.transition;try{St.transition=null,Z=1,R2(e,t,n,r)}finally{St.transition=i,Z=r}return null}function R2(e,t,n,r){do ui();while(Tn!==null);if(q&6)throw Error(R(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(R(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(cb(e,o),e===Ae&&(je=Ae=null,Le=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Rs||(Rs=!0,gy(Ea,function(){return ui(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=St.transition,St.transition=null;var s=Z;Z=1;var a=q;q|=4,Rf.current=null,j2(e,n),ay(n,e),Gb(Ou),Ra=!!$u,Ou=$u=null,e.current=n,k2(n),eb(),q=a,Z=s,St.transition=o}else e.current=n;if(Rs&&(Rs=!1,Tn=e,Wa=i),o=e.pendingLanes,o===0&&(Mn=null),rb(n.stateNode),tt(e,ye()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Ha)throw Ha=!1,e=Zu,Zu=null,e;return Wa&1&&e.tag!==0&&ui(),o=e.pendingLanes,o&1?e===Ju?mo++:(mo=0,Ju=e):mo=0,Kn(),null}function ui(){if(Tn!==null){var e=qv(Wa),t=St.transition,n=Z;try{if(St.transition=null,Z=16>e?16:e,Tn===null)var r=!1;else{if(e=Tn,Tn=null,Wa=0,q&6)throw Error(R(331));var i=q;for(q|=4,O=e.current;O!==null;){var o=O,s=o.child;if(O.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(O=u;O!==null;){var d=O;switch(d.tag){case 0:case 11:case 15:po(8,d,o)}var f=d.child;if(f!==null)f.return=d,O=f;else for(;O!==null;){d=O;var p=d.sibling,m=d.return;if(iy(d),d===u){O=null;break}if(p!==null){p.return=m,O=p;break}O=m}}}var y=o.alternate;if(y!==null){var w=y.child;if(w!==null){y.child=null;do{var k=w.sibling;w.sibling=null,w=k}while(w!==null)}}O=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,O=s;else e:for(;O!==null;){if(o=O,o.flags&2048)switch(o.tag){case 0:case 11:case 15:po(9,o,o.return)}var h=o.sibling;if(h!==null){h.return=o.return,O=h;break e}O=o.return}}var g=e.current;for(O=g;O!==null;){s=O;var v=s.child;if(s.subtreeFlags&2064&&v!==null)v.return=s,O=v;else e:for(s=g;O!==null;){if(a=O,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Al(9,a)}}catch(S){me(a,a.return,S)}if(a===s){O=null;break e}var b=a.sibling;if(b!==null){b.return=a.return,O=b;break e}O=a.return}}if(q=i,Kn(),Ht&&typeof Ht.onPostCommitFiberRoot=="function")try{Ht.onPostCommitFiberRoot(Sl,e)}catch{}r=!0}return r}finally{Z=n,St.transition=t}}return!1}function zh(e,t,n){t=gi(n,t),t=q0(e,t,1),e=Fn(e,t,1),t=qe(),e!==null&&(Zo(e,1,t),tt(e,t))}function me(e,t,n){if(e.tag===3)zh(e,e,n);else for(;t!==null;){if(t.tag===3){zh(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Mn===null||!Mn.has(r))){e=gi(n,e),e=K0(t,e,1),t=Fn(t,e,1),e=qe(),t!==null&&(Zo(t,1,e),tt(t,e));break}}t=t.return}}function A2(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=qe(),e.pingedLanes|=e.suspendedLanes&n,Ae===e&&(Le&n)===n&&(Ee===4||Ee===3&&(Le&130023424)===Le&&500>ye()-$f?mr(e,0):Af|=n),tt(e,t)}function hy(e,t){t===0&&(e.mode&1?(t=xs,xs<<=1,!(xs&130023424)&&(xs=4194304)):t=1);var n=qe();e=cn(e,t),e!==null&&(Zo(e,t,n),tt(e,n))}function $2(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),hy(e,n)}function O2(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(R(314))}r!==null&&r.delete(t),hy(e,n)}var my;my=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Je.current)Ze=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ze=!1,x2(e,t,n);Ze=!!(e.flags&131072)}else Ze=!1,le&&t.flags&1048576&&x0(t,za,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;ia(e,t),e=t.pendingProps;var i=fi(t,Ue.current);ci(t,n),i=kf(null,t,r,e,i,n);var o=Cf();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,et(r)?(o=!0,Fa(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,xf(t),i.updater=Rl,t.stateNode=i,i._reactInternals=t,Vu(t,r,e,n),t=Hu(null,t,r,!0,o,n)):(t.tag=0,le&&o&&ff(t),We(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(ia(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=F2(r),e=Rt(r,e),i){case 0:t=Bu(null,t,r,e,n);break e;case 1:t=Ph(null,t,r,e,n);break e;case 11:t=kh(null,t,r,e,n);break e;case 14:t=Ch(null,t,r,Rt(r.type,e),n);break e}throw Error(R(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Rt(r,i),Bu(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Rt(r,i),Ph(e,t,r,i,n);case 3:e:{if(Z0(t),e===null)throw Error(R(387));r=t.pendingProps,o=t.memoizedState,i=o.element,C0(e,t),Da(t,r,null,n);var s=t.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=gi(Error(R(423)),t),t=Eh(e,t,r,n,i);break e}else if(r!==i){i=gi(Error(R(424)),t),t=Eh(e,t,r,n,i);break e}else for(ot=Ln(t.stateNode.containerInfo.firstChild),st=t,le=!0,$t=null,n=j0(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(pi(),r===i){t=un(e,t,n);break e}We(e,t,r,n)}t=t.child}return t;case 5:return P0(t),e===null&&_u(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,Lu(r,i)?s=null:o!==null&&Lu(r,o)&&(t.flags|=32),X0(e,t),We(e,t,s,n),t.child;case 6:return e===null&&_u(t),null;case 13:return J0(e,t,n);case 4:return wf(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=hi(t,null,r,n):We(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Rt(r,i),kh(e,t,r,i,n);case 7:return We(e,t,t.pendingProps,n),t.child;case 8:return We(e,t,t.pendingProps.children,n),t.child;case 12:return We(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,s=i.value,ee(Na,r._currentValue),r._currentValue=s,o!==null)if(zt(o.value,s)){if(o.children===i.children&&!Je.current){t=un(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=rn(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?l.next=l:(l.next=d.next,d.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Du(o.return,n,t),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(R(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Du(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}We(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,ci(t,n),i=jt(i),r=r(i),t.flags|=1,We(e,t,r,n),t.child;case 14:return r=t.type,i=Rt(r,t.pendingProps),i=Rt(r.type,i),Ch(e,t,r,i,n);case 15:return G0(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Rt(r,i),ia(e,t),t.tag=1,et(r)?(e=!0,Fa(t)):e=!1,ci(t,n),Q0(t,r,i),Vu(t,r,i,n),Hu(null,t,r,!0,e,n);case 19:return ey(e,t,n);case 22:return Y0(e,t,n)}throw Error(R(156,t.tag))};function gy(e,t){return Bv(e,t)}function L2(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function wt(e,t,n,r){return new L2(e,t,n,r)}function Mf(e){return e=e.prototype,!(!e||!e.isReactComponent)}function F2(e){if(typeof e=="function")return Mf(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Jd)return 11;if(e===ef)return 14}return 2}function Nn(e,t){var n=e.alternate;return n===null?(n=wt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function aa(e,t,n,r,i,o){var s=2;if(r=e,typeof e=="function")Mf(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case Br:return gr(n.children,i,o,t);case Zd:s=8,i|=8;break;case du:return e=wt(12,n,t,i|2),e.elementType=du,e.lanes=o,e;case fu:return e=wt(13,n,t,i),e.elementType=fu,e.lanes=o,e;case pu:return e=wt(19,n,t,i),e.elementType=pu,e.lanes=o,e;case Pv:return Ol(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case kv:s=10;break e;case Cv:s=9;break e;case Jd:s=11;break e;case ef:s=14;break e;case xn:s=16,r=null;break e}throw Error(R(130,e==null?e:typeof e,""))}return t=wt(s,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function gr(e,t,n,r){return e=wt(7,e,r,t),e.lanes=n,e}function Ol(e,t,n,r){return e=wt(22,e,r,t),e.elementType=Pv,e.lanes=n,e.stateNode={isHidden:!1},e}function $c(e,t,n){return e=wt(6,e,null,t),e.lanes=n,e}function Oc(e,t,n){return t=wt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function M2(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=fc(0),this.expirationTimes=fc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=fc(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function zf(e,t,n,r,i,o,s,a,l){return e=new M2(e,t,n,a,l),t===1?(t=1,o===!0&&(t|=8)):t=0,o=wt(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},xf(o),e}function z2(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ur,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function vy(e){if(!e)return Un;e=e._reactInternals;e:{if(Rr(e)!==e||e.tag!==1)throw Error(R(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(et(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(R(171))}if(e.tag===1){var n=e.type;if(et(n))return v0(e,n,t)}return t}function yy(e,t,n,r,i,o,s,a,l){return e=zf(n,r,!0,e,i,o,s,a,l),e.context=vy(null),n=e.current,r=qe(),i=zn(n),o=rn(r,i),o.callback=t??null,Fn(n,o,i),e.current.lanes=i,Zo(e,i,r),tt(e,r),e}function Ll(e,t,n,r){var i=t.current,o=qe(),s=zn(i);return n=vy(n),t.context===null?t.context=n:t.pendingContext=n,t=rn(o,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Fn(i,t,s),e!==null&&(Lt(e,i,s,o),ta(e,i,s)),s}function qa(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Nh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Nf(e,t){Nh(e,t),(e=e.alternate)&&Nh(e,t)}function N2(){return null}var xy=typeof reportError=="function"?reportError:function(e){console.error(e)};function _f(e){this._internalRoot=e}Fl.prototype.render=_f.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(R(409));Ll(e,t,null,null)};Fl.prototype.unmount=_f.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;jr(function(){Ll(null,e,null,null)}),t[ln]=null}};function Fl(e){this._internalRoot=e}Fl.prototype.unstable_scheduleHydration=function(e){if(e){var t=Yv();e={blockedOn:null,target:e,priority:t};for(var n=0;n<kn.length&&t!==0&&t<kn[n].priority;n++);kn.splice(n,0,e),n===0&&Zv(e)}};function Df(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ml(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function _h(){}function _2(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=qa(s);o.call(u)}}var s=yy(t,r,e,0,null,!1,!1,"",_h);return e._reactRootContainer=s,e[ln]=s.current,$o(e.nodeType===8?e.parentNode:e),jr(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=qa(l);a.call(u)}}var l=zf(e,0,!1,null,null,!1,!1,"",_h);return e._reactRootContainer=l,e[ln]=l.current,$o(e.nodeType===8?e.parentNode:e),jr(function(){Ll(t,l,n,r)}),l}function zl(e,t,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var a=i;i=function(){var l=qa(s);a.call(l)}}Ll(t,s,e,i)}else s=_2(n,t,e,i,r);return qa(s)}Kv=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=to(t.pendingLanes);n!==0&&(rf(t,n|1),tt(t,ye()),!(q&6)&&(vi=ye()+500,Kn()))}break;case 13:jr(function(){var r=cn(e,1);if(r!==null){var i=qe();Lt(r,e,1,i)}}),Nf(e,1)}};of=function(e){if(e.tag===13){var t=cn(e,134217728);if(t!==null){var n=qe();Lt(t,e,134217728,n)}Nf(e,134217728)}};Gv=function(e){if(e.tag===13){var t=zn(e),n=cn(e,t);if(n!==null){var r=qe();Lt(n,e,t,r)}Nf(e,t)}};Yv=function(){return Z};Xv=function(e,t){var n=Z;try{return Z=e,t()}finally{Z=n}};ju=function(e,t,n){switch(t){case"input":if(gu(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Pl(r);if(!i)throw Error(R(90));Tv(r),gu(r,i)}}}break;case"textarea":Av(e,n);break;case"select":t=n.value,t!=null&&oi(e,!!n.multiple,t,!1)}};Nv=Of;_v=jr;var D2={usingClientEntryPoint:!1,Events:[es,qr,Pl,Mv,zv,Of]},Vi={findFiberByHostInstance:ar,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},I2={bundleType:Vi.bundleType,version:Vi.version,rendererPackageName:Vi.rendererPackageName,rendererConfig:Vi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:pn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Vv(e),e===null?null:e.stateNode},findFiberByHostInstance:Vi.findFiberByHostInstance||N2,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var As=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!As.isDisabled&&As.supportsFiber)try{Sl=As.inject(I2),Ht=As}catch{}}ct.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=D2;ct.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Df(t))throw Error(R(200));return z2(e,t,null,n)};ct.createRoot=function(e,t){if(!Df(e))throw Error(R(299));var n=!1,r="",i=xy;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=zf(e,1,!1,null,null,n,!1,r,i),e[ln]=t.current,$o(e.nodeType===8?e.parentNode:e),new _f(t)};ct.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(R(188)):(e=Object.keys(e).join(","),Error(R(268,e)));return e=Vv(t),e=e===null?null:e.stateNode,e};ct.flushSync=function(e){return jr(e)};ct.hydrate=function(e,t,n){if(!Ml(t))throw Error(R(200));return zl(null,e,t,!0,n)};ct.hydrateRoot=function(e,t,n){if(!Df(e))throw Error(R(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=xy;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=yy(t,null,e,1,n??null,i,!1,o,s),e[ln]=t.current,$o(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Fl(t)};ct.render=function(e,t,n){if(!Ml(t))throw Error(R(200));return zl(null,e,t,!1,n)};ct.unmountComponentAtNode=function(e){if(!Ml(e))throw Error(R(40));return e._reactRootContainer?(jr(function(){zl(null,null,e,!1,function(){e._reactRootContainer=null,e[ln]=null})}),!0):!1};ct.unstable_batchedUpdates=Of;ct.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ml(n))throw Error(R(200));if(e==null||e._reactInternals===void 0)throw Error(R(38));return zl(e,t,n,!1,r)};ct.version="18.3.1-next-f1338f8080-20240426";function wy(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(wy)}catch(e){console.error(e)}}wy(),wv.exports=ct;var by=wv.exports;const V2=Hd(by);var Dh=by;cu.createRoot=Dh.createRoot,cu.hydrateRoot=Dh.hydrateRoot;/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Io(){return Io=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Io.apply(this,arguments)}var Rn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Rn||(Rn={}));const Ih="popstate";function U2(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:s,hash:a}=r.location;return nd("",{pathname:o,search:s,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Ka(i)}return H2(t,n,null,e)}function xe(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Sy(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function B2(){return Math.random().toString(36).substr(2,8)}function Vh(e,t){return{usr:e.state,key:e.key,idx:t}}function nd(e,t,n,r){return n===void 0&&(n=null),Io({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Ti(t):t,{state:n,key:t&&t.key||r||B2()})}function Ka(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Ti(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function H2(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,s=i.history,a=Rn.Pop,l=null,u=d();u==null&&(u=0,s.replaceState(Io({},s.state,{idx:u}),""));function d(){return(s.state||{idx:null}).idx}function f(){a=Rn.Pop;let k=d(),h=k==null?null:k-u;u=k,l&&l({action:a,location:w.location,delta:h})}function p(k,h){a=Rn.Push;let g=nd(w.location,k,h);n&&n(g,k),u=d()+1;let v=Vh(g,u),b=w.createHref(g);try{s.pushState(v,"",b)}catch(S){if(S instanceof DOMException&&S.name==="DataCloneError")throw S;i.location.assign(b)}o&&l&&l({action:a,location:w.location,delta:1})}function m(k,h){a=Rn.Replace;let g=nd(w.location,k,h);n&&n(g,k),u=d();let v=Vh(g,u),b=w.createHref(g);s.replaceState(v,"",b),o&&l&&l({action:a,location:w.location,delta:0})}function y(k){let h=i.location.origin!=="null"?i.location.origin:i.location.href,g=typeof k=="string"?k:Ka(k);return g=g.replace(/ $/,"%20"),xe(h,"No window.location.(origin|href) available to create URL for href: "+g),new URL(g,h)}let w={get action(){return a},get location(){return e(i,s)},listen(k){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Ih,f),l=k,()=>{i.removeEventListener(Ih,f),l=null}},createHref(k){return t(i,k)},createURL:y,encodeLocation(k){let h=y(k);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:p,replace:m,go(k){return s.go(k)}};return w}var Uh;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Uh||(Uh={}));function W2(e,t,n){return n===void 0&&(n="/"),Q2(e,t,n,!1)}function Q2(e,t,n,r){let i=typeof t=="string"?Ti(t):t,o=If(i.pathname||"/",n);if(o==null)return null;let s=jy(e);q2(s);let a=null;for(let l=0;a==null&&l<s.length;++l){let u=iS(o);a=nS(s[l],u,r)}return a}function jy(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,s,a)=>{let l={relativePath:a===void 0?o.path||"":a,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};l.relativePath.startsWith("/")&&(xe(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=_n([r,l.relativePath]),d=n.concat(l);o.children&&o.children.length>0&&(xe(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),jy(o.children,t,d,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:eS(u,o.index),routesMeta:d})};return e.forEach((o,s)=>{var a;if(o.path===""||!((a=o.path)!=null&&a.includes("?")))i(o,s);else for(let l of ky(o.path))i(o,s,l)}),t}function ky(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let s=ky(r.join("/")),a=[];return a.push(...s.map(l=>l===""?o:[o,l].join("/"))),i&&a.push(...s),a.map(l=>e.startsWith("/")&&l===""?"/":l)}function q2(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:tS(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const K2=/^:[\w-]+$/,G2=3,Y2=2,X2=1,Z2=10,J2=-2,Bh=e=>e==="*";function eS(e,t){let n=e.split("/"),r=n.length;return n.some(Bh)&&(r+=J2),t&&(r+=Y2),n.filter(i=>!Bh(i)).reduce((i,o)=>i+(K2.test(o)?G2:o===""?X2:Z2),r)}function tS(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function nS(e,t,n){n===void 0&&(n=!1);let{routesMeta:r}=e,i={},o="/",s=[];for(let a=0;a<r.length;++a){let l=r[a],u=a===r.length-1,d=o==="/"?t:t.slice(o.length)||"/",f=Hh({path:l.relativePath,caseSensitive:l.caseSensitive,end:u},d),p=l.route;if(!f&&u&&n&&!r[r.length-1].route.index&&(f=Hh({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},d)),!f)return null;Object.assign(i,f.params),s.push({params:i,pathname:_n([o,f.pathname]),pathnameBase:lS(_n([o,f.pathnameBase])),route:p}),f.pathnameBase!=="/"&&(o=_n([o,f.pathnameBase]))}return s}function Hh(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=rS(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],s=o.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,d,f)=>{let{paramName:p,isOptional:m}=d;if(p==="*"){let w=a[f]||"";s=o.slice(0,o.length-w.length).replace(/(.)\/+$/,"$1")}const y=a[f];return m&&!y?u[p]=void 0:u[p]=(y||"").replace(/%2F/g,"/"),u},{}),pathname:o,pathnameBase:s,pattern:e}}function rS(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Sy(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function iS(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Sy(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function If(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function oS(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Ti(e):e;return{pathname:n?n.startsWith("/")?n:sS(n,t):t,search:cS(r),hash:uS(i)}}function sS(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Lc(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function aS(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Vf(e,t){let n=aS(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Uf(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Ti(e):(i=Io({},e),xe(!i.pathname||!i.pathname.includes("?"),Lc("?","pathname","search",i)),xe(!i.pathname||!i.pathname.includes("#"),Lc("#","pathname","hash",i)),xe(!i.search||!i.search.includes("#"),Lc("#","search","hash",i)));let o=e===""||i.pathname==="",s=o?"/":i.pathname,a;if(s==null)a=n;else{let f=t.length-1;if(!r&&s.startsWith("..")){let p=s.split("/");for(;p[0]==="..";)p.shift(),f-=1;i.pathname=p.join("/")}a=f>=0?t[f]:"/"}let l=oS(i,a),u=s&&s!=="/"&&s.endsWith("/"),d=(o||s===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||d)&&(l.pathname+="/"),l}const _n=e=>e.join("/").replace(/\/\/+/g,"/"),lS=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),cS=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,uS=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function dS(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Cy=["post","put","patch","delete"];new Set(Cy);const fS=["get",...Cy];new Set(fS);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Vo(){return Vo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Vo.apply(this,arguments)}const Bf=j.createContext(null),pS=j.createContext(null),Gn=j.createContext(null),Nl=j.createContext(null),qt=j.createContext({outlet:null,matches:[],isDataRoute:!1}),Py=j.createContext(null);function hS(e,t){let{relative:n}=t===void 0?{}:t;Ri()||xe(!1);let{basename:r,navigator:i}=j.useContext(Gn),{hash:o,pathname:s,search:a}=Ty(e,{relative:n}),l=s;return r!=="/"&&(l=s==="/"?r:_n([r,s])),i.createHref({pathname:l,search:a,hash:o})}function Ri(){return j.useContext(Nl)!=null}function hn(){return Ri()||xe(!1),j.useContext(Nl).location}function Ey(e){j.useContext(Gn).static||j.useLayoutEffect(e)}function ns(){let{isDataRoute:e}=j.useContext(qt);return e?AS():mS()}function mS(){Ri()||xe(!1);let e=j.useContext(Bf),{basename:t,future:n,navigator:r}=j.useContext(Gn),{matches:i}=j.useContext(qt),{pathname:o}=hn(),s=JSON.stringify(Vf(i,n.v7_relativeSplatPath)),a=j.useRef(!1);return Ey(()=>{a.current=!0}),j.useCallback(function(u,d){if(d===void 0&&(d={}),!a.current)return;if(typeof u=="number"){r.go(u);return}let f=Uf(u,JSON.parse(s),o,d.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:_n([t,f.pathname])),(d.replace?r.replace:r.push)(f,d.state,d)},[t,r,s,o,e])}const gS=j.createContext(null);function vS(e){let t=j.useContext(qt).outlet;return t&&j.createElement(gS.Provider,{value:e},t)}function yS(){let{matches:e}=j.useContext(qt),t=e[e.length-1];return t?t.params:{}}function Ty(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=j.useContext(Gn),{matches:i}=j.useContext(qt),{pathname:o}=hn(),s=JSON.stringify(Vf(i,r.v7_relativeSplatPath));return j.useMemo(()=>Uf(e,JSON.parse(s),o,n==="path"),[e,s,o,n])}function xS(e,t){return wS(e,t)}function wS(e,t,n,r){Ri()||xe(!1);let{navigator:i}=j.useContext(Gn),{matches:o}=j.useContext(qt),s=o[o.length-1],a=s?s.params:{};s&&s.pathname;let l=s?s.pathnameBase:"/";s&&s.route;let u=hn(),d;if(t){var f;let k=typeof t=="string"?Ti(t):t;l==="/"||(f=k.pathname)!=null&&f.startsWith(l)||xe(!1),d=k}else d=u;let p=d.pathname||"/",m=p;if(l!=="/"){let k=l.replace(/^\//,"").split("/");m="/"+p.replace(/^\//,"").split("/").slice(k.length).join("/")}let y=W2(e,{pathname:m}),w=CS(y&&y.map(k=>Object.assign({},k,{params:Object.assign({},a,k.params),pathname:_n([l,i.encodeLocation?i.encodeLocation(k.pathname).pathname:k.pathname]),pathnameBase:k.pathnameBase==="/"?l:_n([l,i.encodeLocation?i.encodeLocation(k.pathnameBase).pathname:k.pathnameBase])})),o,n,r);return t&&w?j.createElement(Nl.Provider,{value:{location:Vo({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:Rn.Pop}},w):w}function bS(){let e=RS(),t=dS(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return j.createElement(j.Fragment,null,j.createElement("h2",null,"Unexpected Application Error!"),j.createElement("h3",{style:{fontStyle:"italic"}},t),n?j.createElement("pre",{style:i},n):null,o)}const SS=j.createElement(bS,null);class jS extends j.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?j.createElement(qt.Provider,{value:this.props.routeContext},j.createElement(Py.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function kS(e){let{routeContext:t,match:n,children:r}=e,i=j.useContext(Bf);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),j.createElement(qt.Provider,{value:t},r)}function CS(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var o;if(!n)return null;if(n.errors)e=n.matches;else if((o=r)!=null&&o.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let s=e,a=(i=n)==null?void 0:i.errors;if(a!=null){let d=s.findIndex(f=>f.route.id&&(a==null?void 0:a[f.route.id])!==void 0);d>=0||xe(!1),s=s.slice(0,Math.min(s.length,d+1))}let l=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<s.length;d++){let f=s[d];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(u=d),f.route.id){let{loaderData:p,errors:m}=n,y=f.route.loader&&p[f.route.id]===void 0&&(!m||m[f.route.id]===void 0);if(f.route.lazy||y){l=!0,u>=0?s=s.slice(0,u+1):s=[s[0]];break}}}return s.reduceRight((d,f,p)=>{let m,y=!1,w=null,k=null;n&&(m=a&&f.route.id?a[f.route.id]:void 0,w=f.route.errorElement||SS,l&&(u<0&&p===0?($S("route-fallback",!1),y=!0,k=null):u===p&&(y=!0,k=f.route.hydrateFallbackElement||null)));let h=t.concat(s.slice(0,p+1)),g=()=>{let v;return m?v=w:y?v=k:f.route.Component?v=j.createElement(f.route.Component,null):f.route.element?v=f.route.element:v=d,j.createElement(kS,{match:f,routeContext:{outlet:d,matches:h,isDataRoute:n!=null},children:v})};return n&&(f.route.ErrorBoundary||f.route.errorElement||p===0)?j.createElement(jS,{location:n.location,revalidation:n.revalidation,component:w,error:m,children:g(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):g()},null)}var Ry=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Ry||{}),Ga=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Ga||{});function PS(e){let t=j.useContext(Bf);return t||xe(!1),t}function ES(e){let t=j.useContext(pS);return t||xe(!1),t}function TS(e){let t=j.useContext(qt);return t||xe(!1),t}function Ay(e){let t=TS(),n=t.matches[t.matches.length-1];return n.route.id||xe(!1),n.route.id}function RS(){var e;let t=j.useContext(Py),n=ES(Ga.UseRouteError),r=Ay(Ga.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function AS(){let{router:e}=PS(Ry.UseNavigateStable),t=Ay(Ga.UseNavigateStable),n=j.useRef(!1);return Ey(()=>{n.current=!0}),j.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,Vo({fromRouteId:t},o)))},[e,t])}const Wh={};function $S(e,t,n){!t&&!Wh[e]&&(Wh[e]=!0)}function OS(e,t){e==null||e.v7_startTransition,(e==null?void 0:e.v7_relativeSplatPath)===void 0&&(!t||t.v7_relativeSplatPath),t&&(t.v7_fetcherPersist,t.v7_normalizeFormMethod,t.v7_partialHydration,t.v7_skipActionErrorRevalidation)}function LS(e){let{to:t,replace:n,state:r,relative:i}=e;Ri()||xe(!1);let{future:o,static:s}=j.useContext(Gn),{matches:a}=j.useContext(qt),{pathname:l}=hn(),u=ns(),d=Uf(t,Vf(a,o.v7_relativeSplatPath),l,i==="path"),f=JSON.stringify(d);return j.useEffect(()=>u(JSON.parse(f),{replace:n,state:r,relative:i}),[u,f,i,n,r]),null}function FS(e){return vS(e.context)}function mt(e){xe(!1)}function MS(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Rn.Pop,navigator:o,static:s=!1,future:a}=e;Ri()&&xe(!1);let l=t.replace(/^\/*/,"/"),u=j.useMemo(()=>({basename:l,navigator:o,static:s,future:Vo({v7_relativeSplatPath:!1},a)}),[l,a,o,s]);typeof r=="string"&&(r=Ti(r));let{pathname:d="/",search:f="",hash:p="",state:m=null,key:y="default"}=r,w=j.useMemo(()=>{let k=If(d,l);return k==null?null:{location:{pathname:k,search:f,hash:p,state:m,key:y},navigationType:i}},[l,d,f,p,m,y,i]);return w==null?null:j.createElement(Gn.Provider,{value:u},j.createElement(Nl.Provider,{children:n,value:w}))}function zS(e){let{children:t,location:n}=e;return xS(rd(t),n)}new Promise(()=>{});function rd(e,t){t===void 0&&(t=[]);let n=[];return j.Children.forEach(e,(r,i)=>{if(!j.isValidElement(r))return;let o=[...t,i];if(r.type===j.Fragment){n.push.apply(n,rd(r.props.children,o));return}r.type!==mt&&xe(!1),!r.props.index||!r.props.children||xe(!1);let s={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=rd(r.props.children,o)),n.push(s)}),n}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function id(){return id=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},id.apply(this,arguments)}function NS(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function _S(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function DS(e,t){return e.button===0&&(!t||t==="_self")&&!_S(e)}function od(e){return e===void 0&&(e=""),new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((t,n)=>{let r=e[n];return t.concat(Array.isArray(r)?r.map(i=>[n,i]):[[n,r]])},[]))}function IS(e,t){let n=od(e);return t&&t.forEach((r,i)=>{n.has(i)||t.getAll(i).forEach(o=>{n.append(i,o)})}),n}const VS=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],US="6";try{window.__reactRouterVersion=US}catch{}const BS="startTransition",Qh=Aw[BS];function HS(e){let{basename:t,children:n,future:r,window:i}=e,o=j.useRef();o.current==null&&(o.current=U2({window:i,v5Compat:!0}));let s=o.current,[a,l]=j.useState({action:s.action,location:s.location}),{v7_startTransition:u}=r||{},d=j.useCallback(f=>{u&&Qh?Qh(()=>l(f)):l(f)},[l,u]);return j.useLayoutEffect(()=>s.listen(d),[s,d]),j.useEffect(()=>OS(r),[r]),j.createElement(MS,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:s,future:r})}const WS=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",QS=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ce=j.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:s,state:a,target:l,to:u,preventScrollReset:d,viewTransition:f}=t,p=NS(t,VS),{basename:m}=j.useContext(Gn),y,w=!1;if(typeof u=="string"&&QS.test(u)&&(y=u,WS))try{let v=new URL(window.location.href),b=u.startsWith("//")?new URL(v.protocol+u):new URL(u),S=If(b.pathname,m);b.origin===v.origin&&S!=null?u=S+b.search+b.hash:w=!0}catch{}let k=hS(u,{relative:i}),h=qS(u,{replace:s,state:a,target:l,preventScrollReset:d,relative:i,viewTransition:f});function g(v){r&&r(v),v.defaultPrevented||h(v)}return j.createElement("a",id({},p,{href:y||k,onClick:w||o?r:g,ref:n,target:l}))});var qh;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(qh||(qh={}));var Kh;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Kh||(Kh={}));function qS(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:s,viewTransition:a}=t===void 0?{}:t,l=ns(),u=hn(),d=Ty(e,{relative:s});return j.useCallback(f=>{if(DS(f,n)){f.preventDefault();let p=r!==void 0?r:Ka(u)===Ka(d);l(e,{replace:p,state:i,preventScrollReset:o,relative:s,viewTransition:a})}},[u,l,d,r,i,n,e,o,s,a])}function KS(e){let t=j.useRef(od(e)),n=j.useRef(!1),r=hn(),i=j.useMemo(()=>IS(r.search,n.current?null:t.current),[r.search]),o=ns(),s=j.useCallback((a,l)=>{const u=od(typeof a=="function"?a(i):a);n.current=!0,o("?"+u,l)},[o,i]);return[i,s]}function sd(e,t){return sd=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,r){return n.__proto__=r,n},sd(e,t)}function rs(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,sd(e,t)}var is=function(){function e(){this.listeners=[]}var t=e.prototype;return t.subscribe=function(r){var i=this,o=r||function(){};return this.listeners.push(o),this.onSubscribe(),function(){i.listeners=i.listeners.filter(function(s){return s!==o}),i.onUnsubscribe()}},t.hasListeners=function(){return this.listeners.length>0},t.onSubscribe=function(){},t.onUnsubscribe=function(){},e}();function K(){return K=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},K.apply(null,arguments)}var Ya=typeof window>"u";function _e(){}function GS(e,t){return typeof e=="function"?e(t):e}function ad(e){return typeof e=="number"&&e>=0&&e!==1/0}function Xa(e){return Array.isArray(e)?e:[e]}function $y(e,t){return Math.max(e+(t||0)-Date.now(),0)}function la(e,t,n){return _l(e)?typeof t=="function"?K({},n,{queryKey:e,queryFn:t}):K({},t,{queryKey:e}):e}function bn(e,t,n){return _l(e)?[K({},t,{queryKey:e}),n]:[e||{},t]}function YS(e,t){if(e===!0&&t===!0||e==null&&t==null)return"all";if(e===!1&&t===!1)return"none";var n=e??!t;return n?"active":"inactive"}function Gh(e,t){var n=e.active,r=e.exact,i=e.fetching,o=e.inactive,s=e.predicate,a=e.queryKey,l=e.stale;if(_l(a)){if(r){if(t.queryHash!==Hf(a,t.options))return!1}else if(!Za(t.queryKey,a))return!1}var u=YS(n,o);if(u==="none")return!1;if(u!=="all"){var d=t.isActive();if(u==="active"&&!d||u==="inactive"&&d)return!1}return!(typeof l=="boolean"&&t.isStale()!==l||typeof i=="boolean"&&t.isFetching()!==i||s&&!s(t))}function Yh(e,t){var n=e.exact,r=e.fetching,i=e.predicate,o=e.mutationKey;if(_l(o)){if(!t.options.mutationKey)return!1;if(n){if(ur(t.options.mutationKey)!==ur(o))return!1}else if(!Za(t.options.mutationKey,o))return!1}return!(typeof r=="boolean"&&t.state.status==="loading"!==r||i&&!i(t))}function Hf(e,t){var n=(t==null?void 0:t.queryKeyHashFn)||ur;return n(e)}function ur(e){var t=Xa(e);return XS(t)}function XS(e){return JSON.stringify(e,function(t,n){return ld(n)?Object.keys(n).sort().reduce(function(r,i){return r[i]=n[i],r},{}):n})}function Za(e,t){return Oy(Xa(e),Xa(t))}function Oy(e,t){return e===t?!0:typeof e!=typeof t?!1:e&&t&&typeof e=="object"&&typeof t=="object"?!Object.keys(t).some(function(n){return!Oy(e[n],t[n])}):!1}function Ja(e,t){if(e===t)return e;var n=Array.isArray(e)&&Array.isArray(t);if(n||ld(e)&&ld(t)){for(var r=n?e.length:Object.keys(e).length,i=n?t:Object.keys(t),o=i.length,s=n?[]:{},a=0,l=0;l<o;l++){var u=n?l:i[l];s[u]=Ja(e[u],t[u]),s[u]===e[u]&&a++}return r===o&&a===r?e:s}return t}function ZS(e,t){if(e&&!t||t&&!e)return!1;for(var n in e)if(e[n]!==t[n])return!1;return!0}function ld(e){if(!Xh(e))return!1;var t=e.constructor;if(typeof t>"u")return!0;var n=t.prototype;return!(!Xh(n)||!n.hasOwnProperty("isPrototypeOf"))}function Xh(e){return Object.prototype.toString.call(e)==="[object Object]"}function _l(e){return typeof e=="string"||Array.isArray(e)}function JS(e){return new Promise(function(t){setTimeout(t,e)})}function Zh(e){Promise.resolve().then(e).catch(function(t){return setTimeout(function(){throw t})})}function Ly(){if(typeof AbortController=="function")return new AbortController}var ej=function(e){rs(t,e);function t(){var r;return r=e.call(this)||this,r.setup=function(i){var o;if(!Ya&&((o=window)!=null&&o.addEventListener)){var s=function(){return i()};return window.addEventListener("visibilitychange",s,!1),window.addEventListener("focus",s,!1),function(){window.removeEventListener("visibilitychange",s),window.removeEventListener("focus",s)}}},r}var n=t.prototype;return n.onSubscribe=function(){this.cleanup||this.setEventListener(this.setup)},n.onUnsubscribe=function(){if(!this.hasListeners()){var i;(i=this.cleanup)==null||i.call(this),this.cleanup=void 0}},n.setEventListener=function(i){var o,s=this;this.setup=i,(o=this.cleanup)==null||o.call(this),this.cleanup=i(function(a){typeof a=="boolean"?s.setFocused(a):s.onFocus()})},n.setFocused=function(i){this.focused=i,i&&this.onFocus()},n.onFocus=function(){this.listeners.forEach(function(i){i()})},n.isFocused=function(){return typeof this.focused=="boolean"?this.focused:typeof document>"u"?!0:[void 0,"visible","prerender"].includes(document.visibilityState)},t}(is),go=new ej,tj=function(e){rs(t,e);function t(){var r;return r=e.call(this)||this,r.setup=function(i){var o;if(!Ya&&((o=window)!=null&&o.addEventListener)){var s=function(){return i()};return window.addEventListener("online",s,!1),window.addEventListener("offline",s,!1),function(){window.removeEventListener("online",s),window.removeEventListener("offline",s)}}},r}var n=t.prototype;return n.onSubscribe=function(){this.cleanup||this.setEventListener(this.setup)},n.onUnsubscribe=function(){if(!this.hasListeners()){var i;(i=this.cleanup)==null||i.call(this),this.cleanup=void 0}},n.setEventListener=function(i){var o,s=this;this.setup=i,(o=this.cleanup)==null||o.call(this),this.cleanup=i(function(a){typeof a=="boolean"?s.setOnline(a):s.onOnline()})},n.setOnline=function(i){this.online=i,i&&this.onOnline()},n.onOnline=function(){this.listeners.forEach(function(i){i()})},n.isOnline=function(){return typeof this.online=="boolean"?this.online:typeof navigator>"u"||typeof navigator.onLine>"u"?!0:navigator.onLine},t}(is),ca=new tj;function nj(e){return Math.min(1e3*Math.pow(2,e),3e4)}function el(e){return typeof(e==null?void 0:e.cancel)=="function"}var Fy=function(t){this.revert=t==null?void 0:t.revert,this.silent=t==null?void 0:t.silent};function ua(e){return e instanceof Fy}var My=function(t){var n=this,r=!1,i,o,s,a;this.abort=t.abort,this.cancel=function(p){return i==null?void 0:i(p)},this.cancelRetry=function(){r=!0},this.continueRetry=function(){r=!1},this.continue=function(){return o==null?void 0:o()},this.failureCount=0,this.isPaused=!1,this.isResolved=!1,this.isTransportCancelable=!1,this.promise=new Promise(function(p,m){s=p,a=m});var l=function(m){n.isResolved||(n.isResolved=!0,t.onSuccess==null||t.onSuccess(m),o==null||o(),s(m))},u=function(m){n.isResolved||(n.isResolved=!0,t.onError==null||t.onError(m),o==null||o(),a(m))},d=function(){return new Promise(function(m){o=m,n.isPaused=!0,t.onPause==null||t.onPause()}).then(function(){o=void 0,n.isPaused=!1,t.onContinue==null||t.onContinue()})},f=function p(){if(!n.isResolved){var m;try{m=t.fn()}catch(y){m=Promise.reject(y)}i=function(w){if(!n.isResolved&&(u(new Fy(w)),n.abort==null||n.abort(),el(m)))try{m.cancel()}catch{}},n.isTransportCancelable=el(m),Promise.resolve(m).then(l).catch(function(y){var w,k;if(!n.isResolved){var h=(w=t.retry)!=null?w:3,g=(k=t.retryDelay)!=null?k:nj,v=typeof g=="function"?g(n.failureCount,y):g,b=h===!0||typeof h=="number"&&n.failureCount<h||typeof h=="function"&&h(n.failureCount,y);if(r||!b){u(y);return}n.failureCount++,t.onFail==null||t.onFail(n.failureCount,y),JS(v).then(function(){if(!go.isFocused()||!ca.isOnline())return d()}).then(function(){r?u(y):p()})}})}};f()},rj=function(){function e(){this.queue=[],this.transactions=0,this.notifyFn=function(n){n()},this.batchNotifyFn=function(n){n()}}var t=e.prototype;return t.batch=function(r){var i;this.transactions++;try{i=r()}finally{this.transactions--,this.transactions||this.flush()}return i},t.schedule=function(r){var i=this;this.transactions?this.queue.push(r):Zh(function(){i.notifyFn(r)})},t.batchCalls=function(r){var i=this;return function(){for(var o=arguments.length,s=new Array(o),a=0;a<o;a++)s[a]=arguments[a];i.schedule(function(){r.apply(void 0,s)})}},t.flush=function(){var r=this,i=this.queue;this.queue=[],i.length&&Zh(function(){r.batchNotifyFn(function(){i.forEach(function(o){r.notifyFn(o)})})})},t.setNotifyFunction=function(r){this.notifyFn=r},t.setBatchNotifyFunction=function(r){this.batchNotifyFn=r},e}(),ge=new rj,zy=console;function tl(){return zy}function ij(e){zy=e}var oj=function(){function e(n){this.abortSignalConsumed=!1,this.hadObservers=!1,this.defaultOptions=n.defaultOptions,this.setOptions(n.options),this.observers=[],this.cache=n.cache,this.queryKey=n.queryKey,this.queryHash=n.queryHash,this.initialState=n.state||this.getDefaultState(this.options),this.state=this.initialState,this.meta=n.meta,this.scheduleGc()}var t=e.prototype;return t.setOptions=function(r){var i;this.options=K({},this.defaultOptions,r),this.meta=r==null?void 0:r.meta,this.cacheTime=Math.max(this.cacheTime||0,(i=this.options.cacheTime)!=null?i:5*60*1e3)},t.setDefaultOptions=function(r){this.defaultOptions=r},t.scheduleGc=function(){var r=this;this.clearGcTimeout(),ad(this.cacheTime)&&(this.gcTimeout=setTimeout(function(){r.optionalRemove()},this.cacheTime))},t.clearGcTimeout=function(){this.gcTimeout&&(clearTimeout(this.gcTimeout),this.gcTimeout=void 0)},t.optionalRemove=function(){this.observers.length||(this.state.isFetching?this.hadObservers&&this.scheduleGc():this.cache.remove(this))},t.setData=function(r,i){var o,s,a=this.state.data,l=GS(r,a);return(o=(s=this.options).isDataEqual)!=null&&o.call(s,a,l)?l=a:this.options.structuralSharing!==!1&&(l=Ja(a,l)),this.dispatch({data:l,type:"success",dataUpdatedAt:i==null?void 0:i.updatedAt}),l},t.setState=function(r,i){this.dispatch({type:"setState",state:r,setStateOptions:i})},t.cancel=function(r){var i,o=this.promise;return(i=this.retryer)==null||i.cancel(r),o?o.then(_e).catch(_e):Promise.resolve()},t.destroy=function(){this.clearGcTimeout(),this.cancel({silent:!0})},t.reset=function(){this.destroy(),this.setState(this.initialState)},t.isActive=function(){return this.observers.some(function(r){return r.options.enabled!==!1})},t.isFetching=function(){return this.state.isFetching},t.isStale=function(){return this.state.isInvalidated||!this.state.dataUpdatedAt||this.observers.some(function(r){return r.getCurrentResult().isStale})},t.isStaleByTime=function(r){return r===void 0&&(r=0),this.state.isInvalidated||!this.state.dataUpdatedAt||!$y(this.state.dataUpdatedAt,r)},t.onFocus=function(){var r,i=this.observers.find(function(o){return o.shouldFetchOnWindowFocus()});i&&i.refetch(),(r=this.retryer)==null||r.continue()},t.onOnline=function(){var r,i=this.observers.find(function(o){return o.shouldFetchOnReconnect()});i&&i.refetch(),(r=this.retryer)==null||r.continue()},t.addObserver=function(r){this.observers.indexOf(r)===-1&&(this.observers.push(r),this.hadObservers=!0,this.clearGcTimeout(),this.cache.notify({type:"observerAdded",query:this,observer:r}))},t.removeObserver=function(r){this.observers.indexOf(r)!==-1&&(this.observers=this.observers.filter(function(i){return i!==r}),this.observers.length||(this.retryer&&(this.retryer.isTransportCancelable||this.abortSignalConsumed?this.retryer.cancel({revert:!0}):this.retryer.cancelRetry()),this.cacheTime?this.scheduleGc():this.cache.remove(this)),this.cache.notify({type:"observerRemoved",query:this,observer:r}))},t.getObserversCount=function(){return this.observers.length},t.invalidate=function(){this.state.isInvalidated||this.dispatch({type:"invalidate"})},t.fetch=function(r,i){var o=this,s,a,l;if(this.state.isFetching){if(this.state.dataUpdatedAt&&(i!=null&&i.cancelRefetch))this.cancel({silent:!0});else if(this.promise){var u;return(u=this.retryer)==null||u.continueRetry(),this.promise}}if(r&&this.setOptions(r),!this.options.queryFn){var d=this.observers.find(function(g){return g.options.queryFn});d&&this.setOptions(d.options)}var f=Xa(this.queryKey),p=Ly(),m={queryKey:f,pageParam:void 0,meta:this.meta};Object.defineProperty(m,"signal",{enumerable:!0,get:function(){if(p)return o.abortSignalConsumed=!0,p.signal}});var y=function(){return o.options.queryFn?(o.abortSignalConsumed=!1,o.options.queryFn(m)):Promise.reject("Missing queryFn")},w={fetchOptions:i,options:this.options,queryKey:f,state:this.state,fetchFn:y,meta:this.meta};if((s=this.options.behavior)!=null&&s.onFetch){var k;(k=this.options.behavior)==null||k.onFetch(w)}if(this.revertState=this.state,!this.state.isFetching||this.state.fetchMeta!==((a=w.fetchOptions)==null?void 0:a.meta)){var h;this.dispatch({type:"fetch",meta:(h=w.fetchOptions)==null?void 0:h.meta})}return this.retryer=new My({fn:w.fetchFn,abort:p==null||(l=p.abort)==null?void 0:l.bind(p),onSuccess:function(v){o.setData(v),o.cache.config.onSuccess==null||o.cache.config.onSuccess(v,o),o.cacheTime===0&&o.optionalRemove()},onError:function(v){ua(v)&&v.silent||o.dispatch({type:"error",error:v}),ua(v)||(o.cache.config.onError==null||o.cache.config.onError(v,o),tl().error(v)),o.cacheTime===0&&o.optionalRemove()},onFail:function(){o.dispatch({type:"failed"})},onPause:function(){o.dispatch({type:"pause"})},onContinue:function(){o.dispatch({type:"continue"})},retry:w.options.retry,retryDelay:w.options.retryDelay}),this.promise=this.retryer.promise,this.promise},t.dispatch=function(r){var i=this;this.state=this.reducer(this.state,r),ge.batch(function(){i.observers.forEach(function(o){o.onQueryUpdate(r)}),i.cache.notify({query:i,type:"queryUpdated",action:r})})},t.getDefaultState=function(r){var i=typeof r.initialData=="function"?r.initialData():r.initialData,o=typeof r.initialData<"u",s=o?typeof r.initialDataUpdatedAt=="function"?r.initialDataUpdatedAt():r.initialDataUpdatedAt:0,a=typeof i<"u";return{data:i,dataUpdateCount:0,dataUpdatedAt:a?s??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchMeta:null,isFetching:!1,isInvalidated:!1,isPaused:!1,status:a?"success":"idle"}},t.reducer=function(r,i){var o,s;switch(i.type){case"failed":return K({},r,{fetchFailureCount:r.fetchFailureCount+1});case"pause":return K({},r,{isPaused:!0});case"continue":return K({},r,{isPaused:!1});case"fetch":return K({},r,{fetchFailureCount:0,fetchMeta:(o=i.meta)!=null?o:null,isFetching:!0,isPaused:!1},!r.dataUpdatedAt&&{error:null,status:"loading"});case"success":return K({},r,{data:i.data,dataUpdateCount:r.dataUpdateCount+1,dataUpdatedAt:(s=i.dataUpdatedAt)!=null?s:Date.now(),error:null,fetchFailureCount:0,isFetching:!1,isInvalidated:!1,isPaused:!1,status:"success"});case"error":var a=i.error;return ua(a)&&a.revert&&this.revertState?K({},this.revertState):K({},r,{error:a,errorUpdateCount:r.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:r.fetchFailureCount+1,isFetching:!1,isPaused:!1,status:"error"});case"invalidate":return K({},r,{isInvalidated:!0});case"setState":return K({},r,i.state);default:return r}},e}(),sj=function(e){rs(t,e);function t(r){var i;return i=e.call(this)||this,i.config=r||{},i.queries=[],i.queriesMap={},i}var n=t.prototype;return n.build=function(i,o,s){var a,l=o.queryKey,u=(a=o.queryHash)!=null?a:Hf(l,o),d=this.get(u);return d||(d=new oj({cache:this,queryKey:l,queryHash:u,options:i.defaultQueryOptions(o),state:s,defaultOptions:i.getQueryDefaults(l),meta:o.meta}),this.add(d)),d},n.add=function(i){this.queriesMap[i.queryHash]||(this.queriesMap[i.queryHash]=i,this.queries.push(i),this.notify({type:"queryAdded",query:i}))},n.remove=function(i){var o=this.queriesMap[i.queryHash];o&&(i.destroy(),this.queries=this.queries.filter(function(s){return s!==i}),o===i&&delete this.queriesMap[i.queryHash],this.notify({type:"queryRemoved",query:i}))},n.clear=function(){var i=this;ge.batch(function(){i.queries.forEach(function(o){i.remove(o)})})},n.get=function(i){return this.queriesMap[i]},n.getAll=function(){return this.queries},n.find=function(i,o){var s=bn(i,o),a=s[0];return typeof a.exact>"u"&&(a.exact=!0),this.queries.find(function(l){return Gh(a,l)})},n.findAll=function(i,o){var s=bn(i,o),a=s[0];return Object.keys(a).length>0?this.queries.filter(function(l){return Gh(a,l)}):this.queries},n.notify=function(i){var o=this;ge.batch(function(){o.listeners.forEach(function(s){s(i)})})},n.onFocus=function(){var i=this;ge.batch(function(){i.queries.forEach(function(o){o.onFocus()})})},n.onOnline=function(){var i=this;ge.batch(function(){i.queries.forEach(function(o){o.onOnline()})})},t}(is),aj=function(){function e(n){this.options=K({},n.defaultOptions,n.options),this.mutationId=n.mutationId,this.mutationCache=n.mutationCache,this.observers=[],this.state=n.state||lj(),this.meta=n.meta}var t=e.prototype;return t.setState=function(r){this.dispatch({type:"setState",state:r})},t.addObserver=function(r){this.observers.indexOf(r)===-1&&this.observers.push(r)},t.removeObserver=function(r){this.observers=this.observers.filter(function(i){return i!==r})},t.cancel=function(){return this.retryer?(this.retryer.cancel(),this.retryer.promise.then(_e).catch(_e)):Promise.resolve()},t.continue=function(){return this.retryer?(this.retryer.continue(),this.retryer.promise):this.execute()},t.execute=function(){var r=this,i,o=this.state.status==="loading",s=Promise.resolve();return o||(this.dispatch({type:"loading",variables:this.options.variables}),s=s.then(function(){r.mutationCache.config.onMutate==null||r.mutationCache.config.onMutate(r.state.variables,r)}).then(function(){return r.options.onMutate==null?void 0:r.options.onMutate(r.state.variables)}).then(function(a){a!==r.state.context&&r.dispatch({type:"loading",context:a,variables:r.state.variables})})),s.then(function(){return r.executeMutation()}).then(function(a){i=a,r.mutationCache.config.onSuccess==null||r.mutationCache.config.onSuccess(i,r.state.variables,r.state.context,r)}).then(function(){return r.options.onSuccess==null?void 0:r.options.onSuccess(i,r.state.variables,r.state.context)}).then(function(){return r.options.onSettled==null?void 0:r.options.onSettled(i,null,r.state.variables,r.state.context)}).then(function(){return r.dispatch({type:"success",data:i}),i}).catch(function(a){return r.mutationCache.config.onError==null||r.mutationCache.config.onError(a,r.state.variables,r.state.context,r),tl().error(a),Promise.resolve().then(function(){return r.options.onError==null?void 0:r.options.onError(a,r.state.variables,r.state.context)}).then(function(){return r.options.onSettled==null?void 0:r.options.onSettled(void 0,a,r.state.variables,r.state.context)}).then(function(){throw r.dispatch({type:"error",error:a}),a})})},t.executeMutation=function(){var r=this,i;return this.retryer=new My({fn:function(){return r.options.mutationFn?r.options.mutationFn(r.state.variables):Promise.reject("No mutationFn found")},onFail:function(){r.dispatch({type:"failed"})},onPause:function(){r.dispatch({type:"pause"})},onContinue:function(){r.dispatch({type:"continue"})},retry:(i=this.options.retry)!=null?i:0,retryDelay:this.options.retryDelay}),this.retryer.promise},t.dispatch=function(r){var i=this;this.state=cj(this.state,r),ge.batch(function(){i.observers.forEach(function(o){o.onMutationUpdate(r)}),i.mutationCache.notify(i)})},e}();function lj(){return{context:void 0,data:void 0,error:null,failureCount:0,isPaused:!1,status:"idle",variables:void 0}}function cj(e,t){switch(t.type){case"failed":return K({},e,{failureCount:e.failureCount+1});case"pause":return K({},e,{isPaused:!0});case"continue":return K({},e,{isPaused:!1});case"loading":return K({},e,{context:t.context,data:void 0,error:null,isPaused:!1,status:"loading",variables:t.variables});case"success":return K({},e,{data:t.data,error:null,status:"success",isPaused:!1});case"error":return K({},e,{data:void 0,error:t.error,failureCount:e.failureCount+1,isPaused:!1,status:"error"});case"setState":return K({},e,t.state);default:return e}}var uj=function(e){rs(t,e);function t(r){var i;return i=e.call(this)||this,i.config=r||{},i.mutations=[],i.mutationId=0,i}var n=t.prototype;return n.build=function(i,o,s){var a=new aj({mutationCache:this,mutationId:++this.mutationId,options:i.defaultMutationOptions(o),state:s,defaultOptions:o.mutationKey?i.getMutationDefaults(o.mutationKey):void 0,meta:o.meta});return this.add(a),a},n.add=function(i){this.mutations.push(i),this.notify(i)},n.remove=function(i){this.mutations=this.mutations.filter(function(o){return o!==i}),i.cancel(),this.notify(i)},n.clear=function(){var i=this;ge.batch(function(){i.mutations.forEach(function(o){i.remove(o)})})},n.getAll=function(){return this.mutations},n.find=function(i){return typeof i.exact>"u"&&(i.exact=!0),this.mutations.find(function(o){return Yh(i,o)})},n.findAll=function(i){return this.mutations.filter(function(o){return Yh(i,o)})},n.notify=function(i){var o=this;ge.batch(function(){o.listeners.forEach(function(s){s(i)})})},n.onFocus=function(){this.resumePausedMutations()},n.onOnline=function(){this.resumePausedMutations()},n.resumePausedMutations=function(){var i=this.mutations.filter(function(o){return o.state.isPaused});return ge.batch(function(){return i.reduce(function(o,s){return o.then(function(){return s.continue().catch(_e)})},Promise.resolve())})},t}(is);function dj(){return{onFetch:function(t){t.fetchFn=function(){var n,r,i,o,s,a,l=(n=t.fetchOptions)==null||(r=n.meta)==null?void 0:r.refetchPage,u=(i=t.fetchOptions)==null||(o=i.meta)==null?void 0:o.fetchMore,d=u==null?void 0:u.pageParam,f=(u==null?void 0:u.direction)==="forward",p=(u==null?void 0:u.direction)==="backward",m=((s=t.state.data)==null?void 0:s.pages)||[],y=((a=t.state.data)==null?void 0:a.pageParams)||[],w=Ly(),k=w==null?void 0:w.signal,h=y,g=!1,v=t.options.queryFn||function(){return Promise.reject("Missing queryFn")},b=function(X,$e,Q,he){return h=he?[$e].concat(h):[].concat(h,[$e]),he?[Q].concat(X):[].concat(X,[Q])},S=function(X,$e,Q,he){if(g)return Promise.reject("Cancelled");if(typeof Q>"u"&&!$e&&X.length)return Promise.resolve(X);var A={queryKey:t.queryKey,signal:k,pageParam:Q,meta:t.meta},$=v(A),z=Promise.resolve($).then(function(H){return b(X,Q,H,he)});if(el($)){var M=z;M.cancel=$.cancel}return z},C;if(!m.length)C=S([]);else if(f){var P=typeof d<"u",T=P?d:Jh(t.options,m);C=S(m,P,T)}else if(p){var L=typeof d<"u",F=L?d:fj(t.options,m);C=S(m,L,F,!0)}else(function(){h=[];var re=typeof t.options.getNextPageParam>"u",X=l&&m[0]?l(m[0],0,m):!0;C=X?S([],re,y[0]):Promise.resolve(b([],y[0],m[0]));for(var $e=function(A){C=C.then(function($){var z=l&&m[A]?l(m[A],A,m):!0;if(z){var M=re?y[A]:Jh(t.options,$);return S($,re,M)}return Promise.resolve(b($,y[A],m[A]))})},Q=1;Q<m.length;Q++)$e(Q)})();var ne=C.then(function(re){return{pages:re,pageParams:h}}),J=ne;return J.cancel=function(){g=!0,w==null||w.abort(),el(C)&&C.cancel()},ne}}}}function Jh(e,t){return e.getNextPageParam==null?void 0:e.getNextPageParam(t[t.length-1],t)}function fj(e,t){return e.getPreviousPageParam==null?void 0:e.getPreviousPageParam(t[0],t)}var pj=function(){function e(n){n===void 0&&(n={}),this.queryCache=n.queryCache||new sj,this.mutationCache=n.mutationCache||new uj,this.defaultOptions=n.defaultOptions||{},this.queryDefaults=[],this.mutationDefaults=[]}var t=e.prototype;return t.mount=function(){var r=this;this.unsubscribeFocus=go.subscribe(function(){go.isFocused()&&ca.isOnline()&&(r.mutationCache.onFocus(),r.queryCache.onFocus())}),this.unsubscribeOnline=ca.subscribe(function(){go.isFocused()&&ca.isOnline()&&(r.mutationCache.onOnline(),r.queryCache.onOnline())})},t.unmount=function(){var r,i;(r=this.unsubscribeFocus)==null||r.call(this),(i=this.unsubscribeOnline)==null||i.call(this)},t.isFetching=function(r,i){var o=bn(r,i),s=o[0];return s.fetching=!0,this.queryCache.findAll(s).length},t.isMutating=function(r){return this.mutationCache.findAll(K({},r,{fetching:!0})).length},t.getQueryData=function(r,i){var o;return(o=this.queryCache.find(r,i))==null?void 0:o.state.data},t.getQueriesData=function(r){return this.getQueryCache().findAll(r).map(function(i){var o=i.queryKey,s=i.state,a=s.data;return[o,a]})},t.setQueryData=function(r,i,o){var s=la(r),a=this.defaultQueryOptions(s);return this.queryCache.build(this,a).setData(i,o)},t.setQueriesData=function(r,i,o){var s=this;return ge.batch(function(){return s.getQueryCache().findAll(r).map(function(a){var l=a.queryKey;return[l,s.setQueryData(l,i,o)]})})},t.getQueryState=function(r,i){var o;return(o=this.queryCache.find(r,i))==null?void 0:o.state},t.removeQueries=function(r,i){var o=bn(r,i),s=o[0],a=this.queryCache;ge.batch(function(){a.findAll(s).forEach(function(l){a.remove(l)})})},t.resetQueries=function(r,i,o){var s=this,a=bn(r,i,o),l=a[0],u=a[1],d=this.queryCache,f=K({},l,{active:!0});return ge.batch(function(){return d.findAll(l).forEach(function(p){p.reset()}),s.refetchQueries(f,u)})},t.cancelQueries=function(r,i,o){var s=this,a=bn(r,i,o),l=a[0],u=a[1],d=u===void 0?{}:u;typeof d.revert>"u"&&(d.revert=!0);var f=ge.batch(function(){return s.queryCache.findAll(l).map(function(p){return p.cancel(d)})});return Promise.all(f).then(_e).catch(_e)},t.invalidateQueries=function(r,i,o){var s,a,l,u=this,d=bn(r,i,o),f=d[0],p=d[1],m=K({},f,{active:(s=(a=f.refetchActive)!=null?a:f.active)!=null?s:!0,inactive:(l=f.refetchInactive)!=null?l:!1});return ge.batch(function(){return u.queryCache.findAll(f).forEach(function(y){y.invalidate()}),u.refetchQueries(m,p)})},t.refetchQueries=function(r,i,o){var s=this,a=bn(r,i,o),l=a[0],u=a[1],d=ge.batch(function(){return s.queryCache.findAll(l).map(function(p){return p.fetch(void 0,K({},u,{meta:{refetchPage:l==null?void 0:l.refetchPage}}))})}),f=Promise.all(d).then(_e);return u!=null&&u.throwOnError||(f=f.catch(_e)),f},t.fetchQuery=function(r,i,o){var s=la(r,i,o),a=this.defaultQueryOptions(s);typeof a.retry>"u"&&(a.retry=!1);var l=this.queryCache.build(this,a);return l.isStaleByTime(a.staleTime)?l.fetch(a):Promise.resolve(l.state.data)},t.prefetchQuery=function(r,i,o){return this.fetchQuery(r,i,o).then(_e).catch(_e)},t.fetchInfiniteQuery=function(r,i,o){var s=la(r,i,o);return s.behavior=dj(),this.fetchQuery(s)},t.prefetchInfiniteQuery=function(r,i,o){return this.fetchInfiniteQuery(r,i,o).then(_e).catch(_e)},t.cancelMutations=function(){var r=this,i=ge.batch(function(){return r.mutationCache.getAll().map(function(o){return o.cancel()})});return Promise.all(i).then(_e).catch(_e)},t.resumePausedMutations=function(){return this.getMutationCache().resumePausedMutations()},t.executeMutation=function(r){return this.mutationCache.build(this,r).execute()},t.getQueryCache=function(){return this.queryCache},t.getMutationCache=function(){return this.mutationCache},t.getDefaultOptions=function(){return this.defaultOptions},t.setDefaultOptions=function(r){this.defaultOptions=r},t.setQueryDefaults=function(r,i){var o=this.queryDefaults.find(function(s){return ur(r)===ur(s.queryKey)});o?o.defaultOptions=i:this.queryDefaults.push({queryKey:r,defaultOptions:i})},t.getQueryDefaults=function(r){var i;return r?(i=this.queryDefaults.find(function(o){return Za(r,o.queryKey)}))==null?void 0:i.defaultOptions:void 0},t.setMutationDefaults=function(r,i){var o=this.mutationDefaults.find(function(s){return ur(r)===ur(s.mutationKey)});o?o.defaultOptions=i:this.mutationDefaults.push({mutationKey:r,defaultOptions:i})},t.getMutationDefaults=function(r){var i;return r?(i=this.mutationDefaults.find(function(o){return Za(r,o.mutationKey)}))==null?void 0:i.defaultOptions:void 0},t.defaultQueryOptions=function(r){if(r!=null&&r._defaulted)return r;var i=K({},this.defaultOptions.queries,this.getQueryDefaults(r==null?void 0:r.queryKey),r,{_defaulted:!0});return!i.queryHash&&i.queryKey&&(i.queryHash=Hf(i.queryKey,i)),i},t.defaultQueryObserverOptions=function(r){return this.defaultQueryOptions(r)},t.defaultMutationOptions=function(r){return r!=null&&r._defaulted?r:K({},this.defaultOptions.mutations,this.getMutationDefaults(r==null?void 0:r.mutationKey),r,{_defaulted:!0})},t.clear=function(){this.queryCache.clear(),this.mutationCache.clear()},e}(),hj=function(e){rs(t,e);function t(r,i){var o;return o=e.call(this)||this,o.client=r,o.options=i,o.trackedProps=[],o.selectError=null,o.bindMethods(),o.setOptions(i),o}var n=t.prototype;return n.bindMethods=function(){this.remove=this.remove.bind(this),this.refetch=this.refetch.bind(this)},n.onSubscribe=function(){this.listeners.length===1&&(this.currentQuery.addObserver(this),em(this.currentQuery,this.options)&&this.executeFetch(),this.updateTimers())},n.onUnsubscribe=function(){this.listeners.length||this.destroy()},n.shouldFetchOnReconnect=function(){return cd(this.currentQuery,this.options,this.options.refetchOnReconnect)},n.shouldFetchOnWindowFocus=function(){return cd(this.currentQuery,this.options,this.options.refetchOnWindowFocus)},n.destroy=function(){this.listeners=[],this.clearTimers(),this.currentQuery.removeObserver(this)},n.setOptions=function(i,o){var s=this.options,a=this.currentQuery;if(this.options=this.client.defaultQueryObserverOptions(i),typeof this.options.enabled<"u"&&typeof this.options.enabled!="boolean")throw new Error("Expected enabled to be a boolean");this.options.queryKey||(this.options.queryKey=s.queryKey),this.updateQuery();var l=this.hasListeners();l&&tm(this.currentQuery,a,this.options,s)&&this.executeFetch(),this.updateResult(o),l&&(this.currentQuery!==a||this.options.enabled!==s.enabled||this.options.staleTime!==s.staleTime)&&this.updateStaleTimeout();var u=this.computeRefetchInterval();l&&(this.currentQuery!==a||this.options.enabled!==s.enabled||u!==this.currentRefetchInterval)&&this.updateRefetchInterval(u)},n.getOptimisticResult=function(i){var o=this.client.defaultQueryObserverOptions(i),s=this.client.getQueryCache().build(this.client,o);return this.createResult(s,o)},n.getCurrentResult=function(){return this.currentResult},n.trackResult=function(i,o){var s=this,a={},l=function(d){s.trackedProps.includes(d)||s.trackedProps.push(d)};return Object.keys(i).forEach(function(u){Object.defineProperty(a,u,{configurable:!1,enumerable:!0,get:function(){return l(u),i[u]}})}),(o.useErrorBoundary||o.suspense)&&l("error"),a},n.getNextResult=function(i){var o=this;return new Promise(function(s,a){var l=o.subscribe(function(u){u.isFetching||(l(),u.isError&&(i!=null&&i.throwOnError)?a(u.error):s(u))})})},n.getCurrentQuery=function(){return this.currentQuery},n.remove=function(){this.client.getQueryCache().remove(this.currentQuery)},n.refetch=function(i){return this.fetch(K({},i,{meta:{refetchPage:i==null?void 0:i.refetchPage}}))},n.fetchOptimistic=function(i){var o=this,s=this.client.defaultQueryObserverOptions(i),a=this.client.getQueryCache().build(this.client,s);return a.fetch().then(function(){return o.createResult(a,s)})},n.fetch=function(i){var o=this;return this.executeFetch(i).then(function(){return o.updateResult(),o.currentResult})},n.executeFetch=function(i){this.updateQuery();var o=this.currentQuery.fetch(this.options,i);return i!=null&&i.throwOnError||(o=o.catch(_e)),o},n.updateStaleTimeout=function(){var i=this;if(this.clearStaleTimeout(),!(Ya||this.currentResult.isStale||!ad(this.options.staleTime))){var o=$y(this.currentResult.dataUpdatedAt,this.options.staleTime),s=o+1;this.staleTimeoutId=setTimeout(function(){i.currentResult.isStale||i.updateResult()},s)}},n.computeRefetchInterval=function(){var i;return typeof this.options.refetchInterval=="function"?this.options.refetchInterval(this.currentResult.data,this.currentQuery):(i=this.options.refetchInterval)!=null?i:!1},n.updateRefetchInterval=function(i){var o=this;this.clearRefetchInterval(),this.currentRefetchInterval=i,!(Ya||this.options.enabled===!1||!ad(this.currentRefetchInterval)||this.currentRefetchInterval===0)&&(this.refetchIntervalId=setInterval(function(){(o.options.refetchIntervalInBackground||go.isFocused())&&o.executeFetch()},this.currentRefetchInterval))},n.updateTimers=function(){this.updateStaleTimeout(),this.updateRefetchInterval(this.computeRefetchInterval())},n.clearTimers=function(){this.clearStaleTimeout(),this.clearRefetchInterval()},n.clearStaleTimeout=function(){this.staleTimeoutId&&(clearTimeout(this.staleTimeoutId),this.staleTimeoutId=void 0)},n.clearRefetchInterval=function(){this.refetchIntervalId&&(clearInterval(this.refetchIntervalId),this.refetchIntervalId=void 0)},n.createResult=function(i,o){var s=this.currentQuery,a=this.options,l=this.currentResult,u=this.currentResultState,d=this.currentResultOptions,f=i!==s,p=f?i.state:this.currentQueryInitialState,m=f?this.currentResult:this.previousQueryResult,y=i.state,w=y.dataUpdatedAt,k=y.error,h=y.errorUpdatedAt,g=y.isFetching,v=y.status,b=!1,S=!1,C;if(o.optimisticResults){var P=this.hasListeners(),T=!P&&em(i,o),L=P&&tm(i,s,o,a);(T||L)&&(g=!0,w||(v="loading"))}if(o.keepPreviousData&&!y.dataUpdateCount&&(m!=null&&m.isSuccess)&&v!=="error")C=m.data,w=m.dataUpdatedAt,v=m.status,b=!0;else if(o.select&&typeof y.data<"u")if(l&&y.data===(u==null?void 0:u.data)&&o.select===this.selectFn)C=this.selectResult;else try{this.selectFn=o.select,C=o.select(y.data),o.structuralSharing!==!1&&(C=Ja(l==null?void 0:l.data,C)),this.selectResult=C,this.selectError=null}catch(J){tl().error(J),this.selectError=J}else C=y.data;if(typeof o.placeholderData<"u"&&typeof C>"u"&&(v==="loading"||v==="idle")){var F;if(l!=null&&l.isPlaceholderData&&o.placeholderData===(d==null?void 0:d.placeholderData))F=l.data;else if(F=typeof o.placeholderData=="function"?o.placeholderData():o.placeholderData,o.select&&typeof F<"u")try{F=o.select(F),o.structuralSharing!==!1&&(F=Ja(l==null?void 0:l.data,F)),this.selectError=null}catch(J){tl().error(J),this.selectError=J}typeof F<"u"&&(v="success",C=F,S=!0)}this.selectError&&(k=this.selectError,C=this.selectResult,h=Date.now(),v="error");var ne={status:v,isLoading:v==="loading",isSuccess:v==="success",isError:v==="error",isIdle:v==="idle",data:C,dataUpdatedAt:w,error:k,errorUpdatedAt:h,failureCount:y.fetchFailureCount,errorUpdateCount:y.errorUpdateCount,isFetched:y.dataUpdateCount>0||y.errorUpdateCount>0,isFetchedAfterMount:y.dataUpdateCount>p.dataUpdateCount||y.errorUpdateCount>p.errorUpdateCount,isFetching:g,isRefetching:g&&v!=="loading",isLoadingError:v==="error"&&y.dataUpdatedAt===0,isPlaceholderData:S,isPreviousData:b,isRefetchError:v==="error"&&y.dataUpdatedAt!==0,isStale:Wf(i,o),refetch:this.refetch,remove:this.remove};return ne},n.shouldNotifyListeners=function(i,o){if(!o)return!0;var s=this.options,a=s.notifyOnChangeProps,l=s.notifyOnChangePropsExclusions;if(!a&&!l||a==="tracked"&&!this.trackedProps.length)return!0;var u=a==="tracked"?this.trackedProps:a;return Object.keys(i).some(function(d){var f=d,p=i[f]!==o[f],m=u==null?void 0:u.some(function(w){return w===d}),y=l==null?void 0:l.some(function(w){return w===d});return p&&!y&&(!u||m)})},n.updateResult=function(i){var o=this.currentResult;if(this.currentResult=this.createResult(this.currentQuery,this.options),this.currentResultState=this.currentQuery.state,this.currentResultOptions=this.options,!ZS(this.currentResult,o)){var s={cache:!0};(i==null?void 0:i.listeners)!==!1&&this.shouldNotifyListeners(this.currentResult,o)&&(s.listeners=!0),this.notify(K({},s,i))}},n.updateQuery=function(){var i=this.client.getQueryCache().build(this.client,this.options);if(i!==this.currentQuery){var o=this.currentQuery;this.currentQuery=i,this.currentQueryInitialState=i.state,this.previousQueryResult=this.currentResult,this.hasListeners()&&(o==null||o.removeObserver(this),i.addObserver(this))}},n.onQueryUpdate=function(i){var o={};i.type==="success"?o.onSuccess=!0:i.type==="error"&&!ua(i.error)&&(o.onError=!0),this.updateResult(o),this.hasListeners()&&this.updateTimers()},n.notify=function(i){var o=this;ge.batch(function(){i.onSuccess?(o.options.onSuccess==null||o.options.onSuccess(o.currentResult.data),o.options.onSettled==null||o.options.onSettled(o.currentResult.data,null)):i.onError&&(o.options.onError==null||o.options.onError(o.currentResult.error),o.options.onSettled==null||o.options.onSettled(void 0,o.currentResult.error)),i.listeners&&o.listeners.forEach(function(s){s(o.currentResult)}),i.cache&&o.client.getQueryCache().notify({query:o.currentQuery,type:"observerResultsUpdated"})})},t}(is);function mj(e,t){return t.enabled!==!1&&!e.state.dataUpdatedAt&&!(e.state.status==="error"&&t.retryOnMount===!1)}function em(e,t){return mj(e,t)||e.state.dataUpdatedAt>0&&cd(e,t,t.refetchOnMount)}function cd(e,t,n){if(t.enabled!==!1){var r=typeof n=="function"?n(e):n;return r==="always"||r!==!1&&Wf(e,t)}return!1}function tm(e,t,n,r){return n.enabled!==!1&&(e!==t||r.enabled===!1)&&(!n.suspense||e.state.status!=="error")&&Wf(e,n)}function Wf(e,t){return e.isStaleByTime(t.staleTime)}var gj=V2.unstable_batchedUpdates;ge.setBatchNotifyFunction(gj);var vj=console;ij(vj);var nm=G.createContext(void 0),Ny=G.createContext(!1);function _y(e){return e&&typeof window<"u"?(window.ReactQueryClientContext||(window.ReactQueryClientContext=nm),window.ReactQueryClientContext):nm}var yj=function(){var t=G.useContext(_y(G.useContext(Ny)));if(!t)throw new Error("No QueryClient set, use QueryClientProvider to set one");return t},xj=function(t){var n=t.client,r=t.contextSharing,i=r===void 0?!1:r,o=t.children;G.useEffect(function(){return n.mount(),function(){n.unmount()}},[n]);var s=_y(i);return G.createElement(Ny.Provider,{value:i},G.createElement(s.Provider,{value:n},o))};function wj(){var e=!1;return{clearReset:function(){e=!1},reset:function(){e=!0},isReset:function(){return e}}}var bj=G.createContext(wj()),Sj=function(){return G.useContext(bj)};function jj(e,t,n){return typeof t=="function"?t.apply(void 0,n):typeof t=="boolean"?t:!!e}function kj(e,t){var n=G.useRef(!1),r=G.useState(0),i=r[1],o=yj(),s=Sj(),a=o.defaultQueryObserverOptions(e);a.optimisticResults=!0,a.onError&&(a.onError=ge.batchCalls(a.onError)),a.onSuccess&&(a.onSuccess=ge.batchCalls(a.onSuccess)),a.onSettled&&(a.onSettled=ge.batchCalls(a.onSettled)),a.suspense&&(typeof a.staleTime!="number"&&(a.staleTime=1e3),a.cacheTime===0&&(a.cacheTime=1)),(a.suspense||a.useErrorBoundary)&&(s.isReset()||(a.retryOnMount=!1));var l=G.useState(function(){return new t(o,a)}),u=l[0],d=u.getOptimisticResult(a);if(G.useEffect(function(){n.current=!0,s.clearReset();var f=u.subscribe(ge.batchCalls(function(){n.current&&i(function(p){return p+1})}));return u.updateResult(),function(){n.current=!1,f()}},[s,u]),G.useEffect(function(){u.setOptions(a,{listeners:!1})},[a,u]),a.suspense&&d.isLoading)throw u.fetchOptimistic(a).then(function(f){var p=f.data;a.onSuccess==null||a.onSuccess(p),a.onSettled==null||a.onSettled(p,null)}).catch(function(f){s.clearReset(),a.onError==null||a.onError(f),a.onSettled==null||a.onSettled(void 0,f)});if(d.isError&&!s.isReset()&&!d.isFetching&&jj(a.suspense,a.useErrorBoundary,[d.error,u.getCurrentQuery()]))throw d.error;return a.notifyOnChangeProps==="tracked"&&(d=u.trackResult(d,a)),d}function Dy(e,t,n){var r=la(e,t,n);return kj(r,hj)}var Iy={exports:{}},Cj="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Pj=Cj,Ej=Pj;function Vy(){}function Uy(){}Uy.resetWarningCache=Vy;var Tj=function(){function e(r,i,o,s,a,l){if(l!==Ej){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:Uy,resetWarningCache:Vy};return n.PropTypes=n,n};Iy.exports=Tj();var Rj=Iy.exports;const W=Hd(Rj);function Aj(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,ud(e,t)}function ud(e,t){return ud=Object.setPrototypeOf||function(n,r){return n.__proto__=r,n},ud(e,t)}var be={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title",FRAGMENT:"Symbol(react.fragment)"},$j={rel:["amphtml","canonical","alternate"]},Oj={type:["application/ld+json"]},Lj={charset:"",name:["robots","description"],property:["og:type","og:title","og:url","og:image","og:image:alt","og:description","twitter:url","twitter:title","twitter:description","twitter:image","twitter:image:alt","twitter:card","twitter:site"]};Object.keys(be).map(function(e){return be[e]});var nl={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"};Object.keys(nl).reduce(function(e,t){return e[nl[t]]=t,e},{});var Fj=function(e){return Array.isArray(e)?e.join(""):e},Fc=function(e,t){return Array.isArray(e)?e.reduce(function(n,r){return function(i,o){for(var s=Object.keys(i),a=0;a<s.length;a+=1)if(o[s[a]]&&o[s[a]].includes(i[s[a]]))return!0;return!1}(r,t)?n.priority.push(r):n.default.push(r),n},{priority:[],default:[]}):{default:e}},Mj=[be.NOSCRIPT,be.SCRIPT,be.STYLE],Mc=function(e,t){return t===void 0&&(t=!0),t===!1?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},rm=function(e){return Object.keys(e).reduce(function(t,n){var r=e[n]!==void 0?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r},"")},im=function(e,t){return t===void 0&&(t={}),Object.keys(e).reduce(function(n,r){return n[nl[r]||r]=e[r],n},t)},da=function(e,t){return t.map(function(n,r){var i,o=((i={key:r})["data-rh"]=!0,i);return Object.keys(n).forEach(function(s){var a=nl[s]||s;a==="innerHTML"||a==="cssText"?o.dangerouslySetInnerHTML={__html:n.innerHTML||n.cssText}:o[a]=n[s]}),G.createElement(e,o)})},pt=function(e,t,n){switch(e){case be.TITLE:return{toComponent:function(){return i=t.titleAttributes,(o={key:r=t.title})["data-rh"]=!0,s=im(i,o),[G.createElement(be.TITLE,s,r)];var r,i,o,s},toString:function(){return function(r,i,o,s){var a=rm(o),l=Fj(i);return a?"<"+r+' data-rh="true" '+a+">"+Mc(l,s)+"</"+r+">":"<"+r+' data-rh="true">'+Mc(l,s)+"</"+r+">"}(e,t.title,t.titleAttributes,n)}};case"bodyAttributes":case"htmlAttributes":return{toComponent:function(){return im(t)},toString:function(){return rm(t)}};default:return{toComponent:function(){return da(e,t)},toString:function(){return function(r,i,o){return i.reduce(function(s,a){var l=Object.keys(a).filter(function(f){return!(f==="innerHTML"||f==="cssText")}).reduce(function(f,p){var m=a[p]===void 0?p:p+'="'+Mc(a[p],o)+'"';return f?f+" "+m:m},""),u=a.innerHTML||a.cssText||"",d=Mj.indexOf(r)===-1;return s+"<"+r+' data-rh="true" '+l+(d?"/>":">"+u+"</"+r+">")},"")}(e,t,n)}}}},zj=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,i=e.htmlAttributes,o=e.noscriptTags,s=e.styleTags,a=e.title,l=a===void 0?"":a,u=e.titleAttributes,d=e.linkTags,f=e.metaTags,p=e.scriptTags,m={toComponent:function(){},toString:function(){return""}};if(e.prioritizeSeoTags){var y=function(w){var k=w.linkTags,h=w.scriptTags,g=w.encode,v=Fc(w.metaTags,Lj),b=Fc(k,$j),S=Fc(h,Oj);return{priorityMethods:{toComponent:function(){return[].concat(da(be.META,v.priority),da(be.LINK,b.priority),da(be.SCRIPT,S.priority))},toString:function(){return pt(be.META,v.priority,g)+" "+pt(be.LINK,b.priority,g)+" "+pt(be.SCRIPT,S.priority,g)}},metaTags:v.default,linkTags:b.default,scriptTags:S.default}}(e);m=y.priorityMethods,d=y.linkTags,f=y.metaTags,p=y.scriptTags}return{priority:m,base:pt(be.BASE,t,r),bodyAttributes:pt("bodyAttributes",n,r),htmlAttributes:pt("htmlAttributes",i,r),link:pt(be.LINK,d,r),meta:pt(be.META,f,r),noscript:pt(be.NOSCRIPT,o,r),script:pt(be.SCRIPT,p,r),style:pt(be.STYLE,s,r),title:pt(be.TITLE,{title:l,titleAttributes:u},r)}},$s=[],Nj=function(e,t){var n=this;t===void 0&&(t=typeof document<"u"),this.instances=[],this.value={setHelmet:function(r){n.context.helmet=r},helmetInstances:{get:function(){return n.canUseDOM?$s:n.instances},add:function(r){(n.canUseDOM?$s:n.instances).push(r)},remove:function(r){var i=(n.canUseDOM?$s:n.instances).indexOf(r);(n.canUseDOM?$s:n.instances).splice(i,1)}}},this.context=e,this.canUseDOM=t,t||(e.helmet=zj({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}}))},_j=G.createContext({}),Dj=W.shape({setHelmet:W.func,helmetInstances:W.shape({get:W.func,add:W.func,remove:W.func})}),Ij=typeof document<"u",ro=function(e){function t(n){var r;return(r=e.call(this,n)||this).helmetData=new Nj(r.props.context,t.canUseDOM),r}return Aj(t,e),t.prototype.render=function(){return G.createElement(_j.Provider,{value:this.helmetData.value},this.props.children)},t}(j.Component);ro.canUseDOM=Ij,ro.propTypes={context:W.shape({helmet:W.shape()}),children:W.node.isRequired},ro.defaultProps={context:{}},ro.displayName="HelmetProvider";Dj.isRequired;W.object,W.object,W.oneOfType([W.arrayOf(W.node),W.node]),W.string,W.bool,W.bool,W.object,W.arrayOf(W.object),W.arrayOf(W.object),W.arrayOf(W.object),W.func,W.arrayOf(W.object),W.arrayOf(W.object),W.string,W.object,W.string,W.bool,W.object;let Vj={data:""},Uj=e=>typeof window=="object"?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||Vj,Bj=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,Hj=/\/\*[^]*?\*\/|  +/g,om=/\n+/g,Pn=(e,t)=>{let n="",r="",i="";for(let o in e){let s=e[o];o[0]=="@"?o[1]=="i"?n=o+" "+s+";":r+=o[1]=="f"?Pn(s,o):o+"{"+Pn(s,o[1]=="k"?"":t)+"}":typeof s=="object"?r+=Pn(s,t?t.replace(/([^,])+/g,a=>o.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,l=>/&/.test(l)?l.replace(/&/g,a):a?a+" "+l:l)):o):s!=null&&(o=/^--/.test(o)?o:o.replace(/[A-Z]/g,"-$&").toLowerCase(),i+=Pn.p?Pn.p(o,s):o+":"+s+";")}return n+(t&&i?t+"{"+i+"}":i)+r},Gt={},By=e=>{if(typeof e=="object"){let t="";for(let n in e)t+=n+By(e[n]);return t}return e},Wj=(e,t,n,r,i)=>{let o=By(e),s=Gt[o]||(Gt[o]=(l=>{let u=0,d=11;for(;u<l.length;)d=101*d+l.charCodeAt(u++)>>>0;return"go"+d})(o));if(!Gt[s]){let l=o!==e?e:(u=>{let d,f,p=[{}];for(;d=Bj.exec(u.replace(Hj,""));)d[4]?p.shift():d[3]?(f=d[3].replace(om," ").trim(),p.unshift(p[0][f]=p[0][f]||{})):p[0][d[1]]=d[2].replace(om," ").trim();return p[0]})(e);Gt[s]=Pn(i?{["@keyframes "+s]:l}:l,n?"":"."+s)}let a=n&&Gt.g?Gt.g:null;return n&&(Gt.g=Gt[s]),((l,u,d,f)=>{f?u.data=u.data.replace(f,l):u.data.indexOf(l)===-1&&(u.data=d?l+u.data:u.data+l)})(Gt[s],t,r,a),s},Qj=(e,t,n)=>e.reduce((r,i,o)=>{let s=t[o];if(s&&s.call){let a=s(n),l=a&&a.props&&a.props.className||/^go/.test(a)&&a;s=l?"."+l:a&&typeof a=="object"?a.props?"":Pn(a,""):a===!1?"":a}return r+i+(s??"")},"");function Dl(e){let t=this||{},n=e.call?e(t.p):e;return Wj(n.unshift?n.raw?Qj(n,[].slice.call(arguments,1),t.p):n.reduce((r,i)=>Object.assign(r,i&&i.call?i(t.p):i),{}):n,Uj(t.target),t.g,t.o,t.k)}let Hy,dd,fd;Dl.bind({g:1});let dn=Dl.bind({k:1});function qj(e,t,n,r){Pn.p=t,Hy=e,dd=n,fd=r}function Yn(e,t){let n=this||{};return function(){let r=arguments;function i(o,s){let a=Object.assign({},o),l=a.className||i.className;n.p=Object.assign({theme:dd&&dd()},a),n.o=/ *go\d+/.test(l),a.className=Dl.apply(n,r)+(l?" "+l:""),t&&(a.ref=s);let u=e;return e[0]&&(u=a.as||e,delete a.as),fd&&u[0]&&fd(a),Hy(u,a)}return t?t(i):i}}var Kj=e=>typeof e=="function",rl=(e,t)=>Kj(e)?e(t):e,Gj=(()=>{let e=0;return()=>(++e).toString()})(),Wy=(()=>{let e;return()=>{if(e===void 0&&typeof window<"u"){let t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}})(),Yj=20,Qy=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,Yj)};case 1:return{...e,toasts:e.toasts.map(o=>o.id===t.toast.id?{...o,...t.toast}:o)};case 2:let{toast:n}=t;return Qy(e,{type:e.toasts.find(o=>o.id===n.id)?1:0,toast:n});case 3:let{toastId:r}=t;return{...e,toasts:e.toasts.map(o=>o.id===r||r===void 0?{...o,dismissed:!0,visible:!1}:o)};case 4:return t.toastId===void 0?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(o=>o.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let i=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(o=>({...o,pauseDuration:o.pauseDuration+i}))}}},fa=[],dr={toasts:[],pausedAt:void 0},Ar=e=>{dr=Qy(dr,e),fa.forEach(t=>{t(dr)})},Xj={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},Zj=(e={})=>{let[t,n]=j.useState(dr),r=j.useRef(dr);j.useEffect(()=>(r.current!==dr&&n(dr),fa.push(n),()=>{let o=fa.indexOf(n);o>-1&&fa.splice(o,1)}),[]);let i=t.toasts.map(o=>{var s,a,l;return{...e,...e[o.type],...o,removeDelay:o.removeDelay||((s=e[o.type])==null?void 0:s.removeDelay)||(e==null?void 0:e.removeDelay),duration:o.duration||((a=e[o.type])==null?void 0:a.duration)||(e==null?void 0:e.duration)||Xj[o.type],style:{...e.style,...(l=e[o.type])==null?void 0:l.style,...o.style}}});return{...t,toasts:i}},Jj=(e,t="blank",n)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...n,id:(n==null?void 0:n.id)||Gj()}),os=e=>(t,n)=>{let r=Jj(t,e,n);return Ar({type:2,toast:r}),r.id},Qe=(e,t)=>os("blank")(e,t);Qe.error=os("error");Qe.success=os("success");Qe.loading=os("loading");Qe.custom=os("custom");Qe.dismiss=e=>{Ar({type:3,toastId:e})};Qe.remove=e=>Ar({type:4,toastId:e});Qe.promise=(e,t,n)=>{let r=Qe.loading(t.loading,{...n,...n==null?void 0:n.loading});return typeof e=="function"&&(e=e()),e.then(i=>{let o=t.success?rl(t.success,i):void 0;return o?Qe.success(o,{id:r,...n,...n==null?void 0:n.success}):Qe.dismiss(r),i}).catch(i=>{let o=t.error?rl(t.error,i):void 0;o?Qe.error(o,{id:r,...n,...n==null?void 0:n.error}):Qe.dismiss(r)}),e};var ek=(e,t)=>{Ar({type:1,toast:{id:e,height:t}})},tk=()=>{Ar({type:5,time:Date.now()})},vo=new Map,nk=1e3,rk=(e,t=nk)=>{if(vo.has(e))return;let n=setTimeout(()=>{vo.delete(e),Ar({type:4,toastId:e})},t);vo.set(e,n)},ik=e=>{let{toasts:t,pausedAt:n}=Zj(e);j.useEffect(()=>{if(n)return;let o=Date.now(),s=t.map(a=>{if(a.duration===1/0)return;let l=(a.duration||0)+a.pauseDuration-(o-a.createdAt);if(l<0){a.visible&&Qe.dismiss(a.id);return}return setTimeout(()=>Qe.dismiss(a.id),l)});return()=>{s.forEach(a=>a&&clearTimeout(a))}},[t,n]);let r=j.useCallback(()=>{n&&Ar({type:6,time:Date.now()})},[n]),i=j.useCallback((o,s)=>{let{reverseOrder:a=!1,gutter:l=8,defaultPosition:u}=s||{},d=t.filter(m=>(m.position||u)===(o.position||u)&&m.height),f=d.findIndex(m=>m.id===o.id),p=d.filter((m,y)=>y<f&&m.visible).length;return d.filter(m=>m.visible).slice(...a?[p+1]:[0,p]).reduce((m,y)=>m+(y.height||0)+l,0)},[t]);return j.useEffect(()=>{t.forEach(o=>{if(o.dismissed)rk(o.id,o.removeDelay);else{let s=vo.get(o.id);s&&(clearTimeout(s),vo.delete(o.id))}})},[t]),{toasts:t,handlers:{updateHeight:ek,startPause:tk,endPause:r,calculateOffset:i}}},ok=dn`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,sk=dn`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,ak=dn`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,lk=Yn("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${ok} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${sk} 0.15s ease-out forwards;
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
    animation: ${ak} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,ck=dn`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,uk=Yn("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${ck} 1s linear infinite;
`,dk=dn`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,fk=dn`
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

  animation: ${dk} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${fk} 0.2s ease-out forwards;
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
`,hk=Yn("div")`
  position: absolute;
`,mk=Yn("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,gk=dn`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,vk=Yn("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${gk} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,yk=({toast:e})=>{let{icon:t,type:n,iconTheme:r}=e;return t!==void 0?typeof t=="string"?j.createElement(vk,null,t):t:n==="blank"?null:j.createElement(mk,null,j.createElement(uk,{...r}),n!=="loading"&&j.createElement(hk,null,n==="error"?j.createElement(lk,{...r}):j.createElement(pk,{...r})))},xk=e=>`
0% {transform: translate3d(0,${e*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,wk=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e*-150}%,-1px) scale(.6); opacity:0;}
`,bk="0%{opacity:0;} 100%{opacity:1;}",Sk="0%{opacity:1;} 100%{opacity:0;}",jk=Yn("div")`
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
`,kk=Yn("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,Ck=(e,t)=>{let n=e.includes("top")?1:-1,[r,i]=Wy()?[bk,Sk]:[xk(n),wk(n)];return{animation:t?`${dn(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${dn(i)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},Pk=j.memo(({toast:e,position:t,style:n,children:r})=>{let i=e.height?Ck(e.position||t||"top-center",e.visible):{opacity:0},o=j.createElement(yk,{toast:e}),s=j.createElement(kk,{...e.ariaProps},rl(e.message,e));return j.createElement(jk,{className:e.className,style:{...i,...n,...e.style}},typeof r=="function"?r({icon:o,message:s}):j.createElement(j.Fragment,null,o,s))});qj(j.createElement);var Ek=({id:e,className:t,style:n,onHeightUpdate:r,children:i})=>{let o=j.useCallback(s=>{if(s){let a=()=>{let l=s.getBoundingClientRect().height;r(e,l)};a(),new MutationObserver(a).observe(s,{subtree:!0,childList:!0,characterData:!0})}},[e,r]);return j.createElement("div",{ref:o,className:t,style:n},i)},Tk=(e,t)=>{let n=e.includes("top"),r=n?{top:0}:{bottom:0},i=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:Wy()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(n?1:-1)}px)`,...r,...i}},Rk=Dl`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,Os=16,Ak=({reverseOrder:e,position:t="top-center",toastOptions:n,gutter:r,children:i,containerStyle:o,containerClassName:s})=>{let{toasts:a,handlers:l}=ik(n);return j.createElement("div",{id:"_rht_toaster",style:{position:"fixed",zIndex:9999,top:Os,left:Os,right:Os,bottom:Os,pointerEvents:"none",...o},className:s,onMouseEnter:l.startPause,onMouseLeave:l.endPause},a.map(u=>{let d=u.position||t,f=l.calculateOffset(u,{reverseOrder:e,gutter:r,defaultPosition:t}),p=Tk(d,f);return j.createElement(Ek,{id:u.id,key:u.id,onHeightUpdate:l.updateHeight,className:u.visible?Rk:"",style:p},u.type==="custom"?rl(u.message,u):i?i(u):j.createElement(Pk,{toast:u,position:d}))}))},ae=Qe;const qy=j.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"}),Il=j.createContext({}),Vl=j.createContext(null),Ul=typeof document<"u",Qf=Ul?j.useLayoutEffect:j.useEffect,Ky=j.createContext({strict:!1}),qf=e=>e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),$k="framerAppearId",Gy="data-"+qf($k);function Ok(e,t,n,r){const{visualElement:i}=j.useContext(Il),o=j.useContext(Ky),s=j.useContext(Vl),a=j.useContext(qy).reducedMotion,l=j.useRef();r=r||o.renderer,!l.current&&r&&(l.current=r(e,{visualState:t,parent:i,props:n,presenceContext:s,blockInitialAnimation:s?s.initial===!1:!1,reducedMotionConfig:a}));const u=l.current;j.useInsertionEffect(()=>{u&&u.update(n,s)});const d=j.useRef(!!(n[Gy]&&!window.HandoffComplete));return Qf(()=>{u&&(u.render(),d.current&&u.animationState&&u.animationState.animateChanges())}),j.useEffect(()=>{u&&(u.updateFeatures(),!d.current&&u.animationState&&u.animationState.animateChanges(),d.current&&(d.current=!1,window.HandoffComplete=!0))}),u}function ei(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function Lk(e,t,n){return j.useCallback(r=>{r&&e.mount&&e.mount(r),t&&(r?t.mount(r):t.unmount()),n&&(typeof n=="function"?n(r):ei(n)&&(n.current=r))},[t])}function Uo(e){return typeof e=="string"||Array.isArray(e)}function Bl(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}const Kf=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Gf=["initial",...Kf];function Hl(e){return Bl(e.animate)||Gf.some(t=>Uo(e[t]))}function Yy(e){return!!(Hl(e)||e.variants)}function Fk(e,t){if(Hl(e)){const{initial:n,animate:r}=e;return{initial:n===!1||Uo(n)?n:void 0,animate:Uo(r)?r:void 0}}return e.inherit!==!1?t:{}}function Mk(e){const{initial:t,animate:n}=Fk(e,j.useContext(Il));return j.useMemo(()=>({initial:t,animate:n}),[sm(t),sm(n)])}function sm(e){return Array.isArray(e)?e.join(" "):e}const am={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Bo={};for(const e in am)Bo[e]={isEnabled:t=>am[e].some(n=>!!t[n])};function zk(e){for(const t in e)Bo[t]={...Bo[t],...e[t]}}const Yf=j.createContext({}),Xy=j.createContext({}),Nk=Symbol.for("motionComponentSymbol");function _k({preloadedFeatures:e,createVisualElement:t,useRender:n,useVisualState:r,Component:i}){e&&zk(e);function o(a,l){let u;const d={...j.useContext(qy),...a,layoutId:Dk(a)},{isStatic:f}=d,p=Mk(a),m=r(a,f);if(!f&&Ul){p.visualElement=Ok(i,m,d,t);const y=j.useContext(Xy),w=j.useContext(Ky).strict;p.visualElement&&(u=p.visualElement.loadFeatures(d,w,e,y))}return j.createElement(Il.Provider,{value:p},u&&p.visualElement?j.createElement(u,{visualElement:p.visualElement,...d}):null,n(i,a,Lk(m,p.visualElement,l),m,f,p.visualElement))}const s=j.forwardRef(o);return s[Nk]=i,s}function Dk({layoutId:e}){const t=j.useContext(Yf).id;return t&&e!==void 0?t+"-"+e:e}function Ik(e){function t(r,i={}){return _k(e(r,i))}if(typeof Proxy>"u")return t;const n=new Map;return new Proxy(t,{get:(r,i)=>(n.has(i)||n.set(i,t(i)),n.get(i))})}const Vk=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Xf(e){return typeof e!="string"||e.includes("-")?!1:!!(Vk.indexOf(e)>-1||/[A-Z]/.test(e))}const il={};function Uk(e){Object.assign(il,e)}const ss=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],$r=new Set(ss);function Zy(e,{layout:t,layoutId:n}){return $r.has(e)||e.startsWith("origin")||(t||n!==void 0)&&(!!il[e]||e==="opacity")}const rt=e=>!!(e&&e.getVelocity),Bk={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},Hk=ss.length;function Wk(e,{enableHardwareAcceleration:t=!0,allowTransformNone:n=!0},r,i){let o="";for(let s=0;s<Hk;s++){const a=ss[s];if(e[a]!==void 0){const l=Bk[a]||a;o+=`${l}(${e[a]}) `}}return t&&!e.z&&(o+="translateZ(0)"),o=o.trim(),i?o=i(e,r?"":o):n&&r&&(o="none"),o}const Jy=e=>t=>typeof t=="string"&&t.startsWith(e),ex=Jy("--"),pd=Jy("var(--"),Qk=/var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g,qk=(e,t)=>t&&typeof e=="number"?t.transform(e):e,Bn=(e,t,n)=>Math.min(Math.max(n,e),t),Or={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},yo={...Or,transform:e=>Bn(0,1,e)},Ls={...Or,default:1},xo=e=>Math.round(e*1e5)/1e5,Wl=/(-)?([\d]*\.?[\d])+/g,tx=/(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,Kk=/^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function as(e){return typeof e=="string"}const ls=e=>({test:t=>as(t)&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),vn=ls("deg"),Qt=ls("%"),N=ls("px"),Gk=ls("vh"),Yk=ls("vw"),lm={...Qt,parse:e=>Qt.parse(e)/100,transform:e=>Qt.transform(e*100)},cm={...Or,transform:Math.round},nx={borderWidth:N,borderTopWidth:N,borderRightWidth:N,borderBottomWidth:N,borderLeftWidth:N,borderRadius:N,radius:N,borderTopLeftRadius:N,borderTopRightRadius:N,borderBottomRightRadius:N,borderBottomLeftRadius:N,width:N,maxWidth:N,height:N,maxHeight:N,size:N,top:N,right:N,bottom:N,left:N,padding:N,paddingTop:N,paddingRight:N,paddingBottom:N,paddingLeft:N,margin:N,marginTop:N,marginRight:N,marginBottom:N,marginLeft:N,rotate:vn,rotateX:vn,rotateY:vn,rotateZ:vn,scale:Ls,scaleX:Ls,scaleY:Ls,scaleZ:Ls,skew:vn,skewX:vn,skewY:vn,distance:N,translateX:N,translateY:N,translateZ:N,x:N,y:N,z:N,perspective:N,transformPerspective:N,opacity:yo,originX:lm,originY:lm,originZ:N,zIndex:cm,fillOpacity:yo,strokeOpacity:yo,numOctaves:cm};function Zf(e,t,n,r){const{style:i,vars:o,transform:s,transformOrigin:a}=e;let l=!1,u=!1,d=!0;for(const f in t){const p=t[f];if(ex(f)){o[f]=p;continue}const m=nx[f],y=qk(p,m);if($r.has(f)){if(l=!0,s[f]=y,!d)continue;p!==(m.default||0)&&(d=!1)}else f.startsWith("origin")?(u=!0,a[f]=y):i[f]=y}if(t.transform||(l||r?i.transform=Wk(e.transform,n,d,r):i.transform&&(i.transform="none")),u){const{originX:f="50%",originY:p="50%",originZ:m=0}=a;i.transformOrigin=`${f} ${p} ${m}`}}const Jf=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function rx(e,t,n){for(const r in t)!rt(t[r])&&!Zy(r,n)&&(e[r]=t[r])}function Xk({transformTemplate:e},t,n){return j.useMemo(()=>{const r=Jf();return Zf(r,t,{enableHardwareAcceleration:!n},e),Object.assign({},r.vars,r.style)},[t])}function Zk(e,t,n){const r=e.style||{},i={};return rx(i,r,e),Object.assign(i,Xk(e,t,n)),e.transformValues?e.transformValues(i):i}function Jk(e,t,n){const r={},i=Zk(e,t,n);return e.drag&&e.dragListener!==!1&&(r.draggable=!1,i.userSelect=i.WebkitUserSelect=i.WebkitTouchCallout="none",i.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(r.tabIndex=0),r.style=i,r}const eC=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","transformValues","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function ol(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||eC.has(e)}let ix=e=>!ol(e);function tC(e){e&&(ix=t=>t.startsWith("on")?!ol(t):e(t))}try{tC(require("@emotion/is-prop-valid").default)}catch{}function nC(e,t,n){const r={};for(const i in e)i==="values"&&typeof e.values=="object"||(ix(i)||n===!0&&ol(i)||!t&&!ol(i)||e.draggable&&i.startsWith("onDrag"))&&(r[i]=e[i]);return r}function um(e,t,n){return typeof e=="string"?e:N.transform(t+n*e)}function rC(e,t,n){const r=um(t,e.x,e.width),i=um(n,e.y,e.height);return`${r} ${i}`}const iC={offset:"stroke-dashoffset",array:"stroke-dasharray"},oC={offset:"strokeDashoffset",array:"strokeDasharray"};function sC(e,t,n=1,r=0,i=!0){e.pathLength=1;const o=i?iC:oC;e[o.offset]=N.transform(-r);const s=N.transform(t),a=N.transform(n);e[o.array]=`${s} ${a}`}function ep(e,{attrX:t,attrY:n,attrScale:r,originX:i,originY:o,pathLength:s,pathSpacing:a=1,pathOffset:l=0,...u},d,f,p){if(Zf(e,u,d,p),f){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:m,style:y,dimensions:w}=e;m.transform&&(w&&(y.transform=m.transform),delete m.transform),w&&(i!==void 0||o!==void 0||y.transform)&&(y.transformOrigin=rC(w,i!==void 0?i:.5,o!==void 0?o:.5)),t!==void 0&&(m.x=t),n!==void 0&&(m.y=n),r!==void 0&&(m.scale=r),s!==void 0&&sC(m,s,a,l,!1)}const ox=()=>({...Jf(),attrs:{}}),tp=e=>typeof e=="string"&&e.toLowerCase()==="svg";function aC(e,t,n,r){const i=j.useMemo(()=>{const o=ox();return ep(o,t,{enableHardwareAcceleration:!1},tp(r),e.transformTemplate),{...o.attrs,style:{...o.style}}},[t]);if(e.style){const o={};rx(o,e.style,e),i.style={...o,...i.style}}return i}function lC(e=!1){return(n,r,i,{latestValues:o},s)=>{const l=(Xf(n)?aC:Jk)(r,o,s,n),d={...nC(r,typeof n=="string",e),...l,ref:i},{children:f}=r,p=j.useMemo(()=>rt(f)?f.get():f,[f]);return j.createElement(n,{...d,children:p})}}function sx(e,{style:t,vars:n},r,i){Object.assign(e.style,t,i&&i.getProjectionStyles(r));for(const o in n)e.style.setProperty(o,n[o])}const ax=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function lx(e,t,n,r){sx(e,t,void 0,r);for(const i in t.attrs)e.setAttribute(ax.has(i)?i:qf(i),t.attrs[i])}function np(e,t){const{style:n}=e,r={};for(const i in n)(rt(n[i])||t.style&&rt(t.style[i])||Zy(i,e))&&(r[i]=n[i]);return r}function cx(e,t){const n=np(e,t);for(const r in e)if(rt(e[r])||rt(t[r])){const i=ss.indexOf(r)!==-1?"attr"+r.charAt(0).toUpperCase()+r.substring(1):r;n[i]=e[r]}return n}function rp(e,t,n,r={},i={}){return typeof t=="function"&&(t=t(n!==void 0?n:e.custom,r,i)),typeof t=="string"&&(t=e.variants&&e.variants[t]),typeof t=="function"&&(t=t(n!==void 0?n:e.custom,r,i)),t}function ux(e){const t=j.useRef(null);return t.current===null&&(t.current=e()),t.current}const sl=e=>Array.isArray(e),cC=e=>!!(e&&typeof e=="object"&&e.mix&&e.toValue),uC=e=>sl(e)?e[e.length-1]||0:e;function pa(e){const t=rt(e)?e.get():e;return cC(t)?t.toValue():t}function dC({scrapeMotionValuesFromProps:e,createRenderState:t,onMount:n},r,i,o){const s={latestValues:fC(r,i,o,e),renderState:t()};return n&&(s.mount=a=>n(r,a,s)),s}const dx=e=>(t,n)=>{const r=j.useContext(Il),i=j.useContext(Vl),o=()=>dC(e,t,r,i);return n?o():ux(o)};function fC(e,t,n,r){const i={},o=r(e,{});for(const p in o)i[p]=pa(o[p]);let{initial:s,animate:a}=e;const l=Hl(e),u=Yy(e);t&&u&&!l&&e.inherit!==!1&&(s===void 0&&(s=t.initial),a===void 0&&(a=t.animate));let d=n?n.initial===!1:!1;d=d||s===!1;const f=d?a:s;return f&&typeof f!="boolean"&&!Bl(f)&&(Array.isArray(f)?f:[f]).forEach(m=>{const y=rp(e,m);if(!y)return;const{transitionEnd:w,transition:k,...h}=y;for(const g in h){let v=h[g];if(Array.isArray(v)){const b=d?v.length-1:0;v=v[b]}v!==null&&(i[g]=v)}for(const g in w)i[g]=w[g]}),i}const ve=e=>e;class dm{constructor(){this.order=[],this.scheduled=new Set}add(t){if(!this.scheduled.has(t))return this.scheduled.add(t),this.order.push(t),!0}remove(t){const n=this.order.indexOf(t);n!==-1&&(this.order.splice(n,1),this.scheduled.delete(t))}clear(){this.order.length=0,this.scheduled.clear()}}function pC(e){let t=new dm,n=new dm,r=0,i=!1,o=!1;const s=new WeakSet,a={schedule:(l,u=!1,d=!1)=>{const f=d&&i,p=f?t:n;return u&&s.add(l),p.add(l)&&f&&i&&(r=t.order.length),l},cancel:l=>{n.remove(l),s.delete(l)},process:l=>{if(i){o=!0;return}if(i=!0,[t,n]=[n,t],n.clear(),r=t.order.length,r)for(let u=0;u<r;u++){const d=t.order[u];d(l),s.has(d)&&(a.schedule(d),e())}i=!1,o&&(o=!1,a.process(l))}};return a}const Fs=["prepare","read","update","preRender","render","postRender"],hC=40;function mC(e,t){let n=!1,r=!0;const i={delta:0,timestamp:0,isProcessing:!1},o=Fs.reduce((f,p)=>(f[p]=pC(()=>n=!0),f),{}),s=f=>o[f].process(i),a=()=>{const f=performance.now();n=!1,i.delta=r?1e3/60:Math.max(Math.min(f-i.timestamp,hC),1),i.timestamp=f,i.isProcessing=!0,Fs.forEach(s),i.isProcessing=!1,n&&t&&(r=!1,e(a))},l=()=>{n=!0,r=!0,i.isProcessing||e(a)};return{schedule:Fs.reduce((f,p)=>{const m=o[p];return f[p]=(y,w=!1,k=!1)=>(n||l(),m.schedule(y,w,k)),f},{}),cancel:f=>Fs.forEach(p=>o[p].cancel(f)),state:i,steps:o}}const{schedule:te,cancel:fn,state:Ne,steps:zc}=mC(typeof requestAnimationFrame<"u"?requestAnimationFrame:ve,!0),gC={useVisualState:dx({scrapeMotionValuesFromProps:cx,createRenderState:ox,onMount:(e,t,{renderState:n,latestValues:r})=>{te.read(()=>{try{n.dimensions=typeof t.getBBox=="function"?t.getBBox():t.getBoundingClientRect()}catch{n.dimensions={x:0,y:0,width:0,height:0}}}),te.render(()=>{ep(n,r,{enableHardwareAcceleration:!1},tp(t.tagName),e.transformTemplate),lx(t,n)})}})},vC={useVisualState:dx({scrapeMotionValuesFromProps:np,createRenderState:Jf})};function yC(e,{forwardMotionProps:t=!1},n,r){return{...Xf(e)?gC:vC,preloadedFeatures:n,useRender:lC(t),createVisualElement:r,Component:e}}function nn(e,t,n,r={passive:!0}){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n)}const fx=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1;function Ql(e,t="page"){return{point:{x:e[t+"X"],y:e[t+"Y"]}}}const xC=e=>t=>fx(t)&&e(t,Ql(t));function on(e,t,n,r){return nn(e,t,xC(n),r)}const wC=(e,t)=>n=>t(e(n)),Dn=(...e)=>e.reduce(wC);function px(e){let t=null;return()=>{const n=()=>{t=null};return t===null?(t=e,n):!1}}const fm=px("dragHorizontal"),pm=px("dragVertical");function hx(e){let t=!1;if(e==="y")t=pm();else if(e==="x")t=fm();else{const n=fm(),r=pm();n&&r?t=()=>{n(),r()}:(n&&n(),r&&r())}return t}function mx(){const e=hx(!0);return e?(e(),!1):!0}class Xn{constructor(t){this.isMounted=!1,this.node=t}update(){}}function hm(e,t){const n="pointer"+(t?"enter":"leave"),r="onHover"+(t?"Start":"End"),i=(o,s)=>{if(o.pointerType==="touch"||mx())return;const a=e.getProps();e.animationState&&a.whileHover&&e.animationState.setActive("whileHover",t),a[r]&&te.update(()=>a[r](o,s))};return on(e.current,n,i,{passive:!e.getProps()[r]})}class bC extends Xn{mount(){this.unmount=Dn(hm(this.node,!0),hm(this.node,!1))}unmount(){}}class SC extends Xn{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Dn(nn(this.node.current,"focus",()=>this.onFocus()),nn(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}const gx=(e,t)=>t?e===t?!0:gx(e,t.parentElement):!1;function Nc(e,t){if(!t)return;const n=new PointerEvent("pointer"+e);t(n,Ql(n))}class jC extends Xn{constructor(){super(...arguments),this.removeStartListeners=ve,this.removeEndListeners=ve,this.removeAccessibleListeners=ve,this.startPointerPress=(t,n)=>{if(this.isPressing)return;this.removeEndListeners();const r=this.node.getProps(),o=on(window,"pointerup",(a,l)=>{if(!this.checkPressEnd())return;const{onTap:u,onTapCancel:d,globalTapTarget:f}=this.node.getProps();te.update(()=>{!f&&!gx(this.node.current,a.target)?d&&d(a,l):u&&u(a,l)})},{passive:!(r.onTap||r.onPointerUp)}),s=on(window,"pointercancel",(a,l)=>this.cancelPress(a,l),{passive:!(r.onTapCancel||r.onPointerCancel)});this.removeEndListeners=Dn(o,s),this.startPress(t,n)},this.startAccessiblePress=()=>{const t=o=>{if(o.key!=="Enter"||this.isPressing)return;const s=a=>{a.key!=="Enter"||!this.checkPressEnd()||Nc("up",(l,u)=>{const{onTap:d}=this.node.getProps();d&&te.update(()=>d(l,u))})};this.removeEndListeners(),this.removeEndListeners=nn(this.node.current,"keyup",s),Nc("down",(a,l)=>{this.startPress(a,l)})},n=nn(this.node.current,"keydown",t),r=()=>{this.isPressing&&Nc("cancel",(o,s)=>this.cancelPress(o,s))},i=nn(this.node.current,"blur",r);this.removeAccessibleListeners=Dn(n,i)}}startPress(t,n){this.isPressing=!0;const{onTapStart:r,whileTap:i}=this.node.getProps();i&&this.node.animationState&&this.node.animationState.setActive("whileTap",!0),r&&te.update(()=>r(t,n))}checkPressEnd(){return this.removeEndListeners(),this.isPressing=!1,this.node.getProps().whileTap&&this.node.animationState&&this.node.animationState.setActive("whileTap",!1),!mx()}cancelPress(t,n){if(!this.checkPressEnd())return;const{onTapCancel:r}=this.node.getProps();r&&te.update(()=>r(t,n))}mount(){const t=this.node.getProps(),n=on(t.globalTapTarget?window:this.node.current,"pointerdown",this.startPointerPress,{passive:!(t.onTapStart||t.onPointerStart)}),r=nn(this.node.current,"focus",this.startAccessiblePress);this.removeStartListeners=Dn(n,r)}unmount(){this.removeStartListeners(),this.removeEndListeners(),this.removeAccessibleListeners()}}const hd=new WeakMap,_c=new WeakMap,kC=e=>{const t=hd.get(e.target);t&&t(e)},CC=e=>{e.forEach(kC)};function PC({root:e,...t}){const n=e||document;_c.has(n)||_c.set(n,{});const r=_c.get(n),i=JSON.stringify(t);return r[i]||(r[i]=new IntersectionObserver(CC,{root:e,...t})),r[i]}function EC(e,t,n){const r=PC(t);return hd.set(e,n),r.observe(e),()=>{hd.delete(e),r.unobserve(e)}}const TC={some:0,all:1};class RC extends Xn{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:t={}}=this.node.getProps(),{root:n,margin:r,amount:i="some",once:o}=t,s={root:n?n.current:void 0,rootMargin:r,threshold:typeof i=="number"?i:TC[i]},a=l=>{const{isIntersecting:u}=l;if(this.isInView===u||(this.isInView=u,o&&!u&&this.hasEnteredView))return;u&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",u);const{onViewportEnter:d,onViewportLeave:f}=this.node.getProps(),p=u?d:f;p&&p(l)};return EC(this.node.current,s,a)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:n}=this.node;["amount","margin","root"].some(AC(t,n))&&this.startObserver()}unmount(){}}function AC({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}const $C={inView:{Feature:RC},tap:{Feature:jC},focus:{Feature:SC},hover:{Feature:bC}};function vx(e,t){if(!Array.isArray(t))return!1;const n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}function OC(e){const t={};return e.values.forEach((n,r)=>t[r]=n.get()),t}function LC(e){const t={};return e.values.forEach((n,r)=>t[r]=n.getVelocity()),t}function ql(e,t,n){const r=e.getProps();return rp(r,t,n!==void 0?n:r.custom,OC(e),LC(e))}let FC=ve,ip=ve;const In=e=>e*1e3,sn=e=>e/1e3,MC={current:!1},yx=e=>Array.isArray(e)&&typeof e[0]=="number";function xx(e){return!!(!e||typeof e=="string"&&wx[e]||yx(e)||Array.isArray(e)&&e.every(xx))}const io=([e,t,n,r])=>`cubic-bezier(${e}, ${t}, ${n}, ${r})`,wx={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:io([0,.65,.55,1]),circOut:io([.55,0,1,.45]),backIn:io([.31,.01,.66,-.59]),backOut:io([.33,1.53,.69,.99])};function bx(e){if(e)return yx(e)?io(e):Array.isArray(e)?e.map(bx):wx[e]}function zC(e,t,n,{delay:r=0,duration:i,repeat:o=0,repeatType:s="loop",ease:a,times:l}={}){const u={[t]:n};l&&(u.offset=l);const d=bx(a);return Array.isArray(d)&&(u.easing=d),e.animate(u,{delay:r,duration:i,easing:Array.isArray(d)?"linear":d,fill:"both",iterations:o+1,direction:s==="reverse"?"alternate":"normal"})}function NC(e,{repeat:t,repeatType:n="loop"}){const r=t&&n!=="loop"&&t%2===1?0:e.length-1;return e[r]}const Sx=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,_C=1e-7,DC=12;function IC(e,t,n,r,i){let o,s,a=0;do s=t+(n-t)/2,o=Sx(s,r,i)-e,o>0?n=s:t=s;while(Math.abs(o)>_C&&++a<DC);return s}function cs(e,t,n,r){if(e===t&&n===r)return ve;const i=o=>IC(o,0,1,e,n);return o=>o===0||o===1?o:Sx(i(o),t,r)}const VC=cs(.42,0,1,1),UC=cs(0,0,.58,1),jx=cs(.42,0,.58,1),BC=e=>Array.isArray(e)&&typeof e[0]!="number",kx=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,Cx=e=>t=>1-e(1-t),op=e=>1-Math.sin(Math.acos(e)),Px=Cx(op),HC=kx(op),Ex=cs(.33,1.53,.69,.99),sp=Cx(Ex),WC=kx(sp),QC=e=>(e*=2)<1?.5*sp(e):.5*(2-Math.pow(2,-10*(e-1))),qC={linear:ve,easeIn:VC,easeInOut:jx,easeOut:UC,circIn:op,circInOut:HC,circOut:Px,backIn:sp,backInOut:WC,backOut:Ex,anticipate:QC},mm=e=>{if(Array.isArray(e)){ip(e.length===4);const[t,n,r,i]=e;return cs(t,n,r,i)}else if(typeof e=="string")return qC[e];return e},ap=(e,t)=>n=>!!(as(n)&&Kk.test(n)&&n.startsWith(e)||t&&Object.prototype.hasOwnProperty.call(n,t)),Tx=(e,t,n)=>r=>{if(!as(r))return r;const[i,o,s,a]=r.match(Wl);return{[e]:parseFloat(i),[t]:parseFloat(o),[n]:parseFloat(s),alpha:a!==void 0?parseFloat(a):1}},KC=e=>Bn(0,255,e),Dc={...Or,transform:e=>Math.round(KC(e))},fr={test:ap("rgb","red"),parse:Tx("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:r=1})=>"rgba("+Dc.transform(e)+", "+Dc.transform(t)+", "+Dc.transform(n)+", "+xo(yo.transform(r))+")"};function GC(e){let t="",n="",r="",i="";return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),i=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),i=e.substring(4,5),t+=t,n+=n,r+=r,i+=i),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}}const md={test:ap("#"),parse:GC,transform:fr.transform},ti={test:ap("hsl","hue"),parse:Tx("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>"hsla("+Math.round(e)+", "+Qt.transform(xo(t))+", "+Qt.transform(xo(n))+", "+xo(yo.transform(r))+")"},He={test:e=>fr.test(e)||md.test(e)||ti.test(e),parse:e=>fr.test(e)?fr.parse(e):ti.test(e)?ti.parse(e):md.parse(e),transform:e=>as(e)?e:e.hasOwnProperty("red")?fr.transform(e):ti.transform(e)},de=(e,t,n)=>-n*e+n*t+e;function Ic(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function YC({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,t/=100,n/=100;let i=0,o=0,s=0;if(!t)i=o=s=n;else{const a=n<.5?n*(1+t):n+t-n*t,l=2*n-a;i=Ic(l,a,e+1/3),o=Ic(l,a,e),s=Ic(l,a,e-1/3)}return{red:Math.round(i*255),green:Math.round(o*255),blue:Math.round(s*255),alpha:r}}const Vc=(e,t,n)=>{const r=e*e;return Math.sqrt(Math.max(0,n*(t*t-r)+r))},XC=[md,fr,ti],ZC=e=>XC.find(t=>t.test(e));function gm(e){const t=ZC(e);let n=t.parse(e);return t===ti&&(n=YC(n)),n}const Rx=(e,t)=>{const n=gm(e),r=gm(t),i={...n};return o=>(i.red=Vc(n.red,r.red,o),i.green=Vc(n.green,r.green,o),i.blue=Vc(n.blue,r.blue,o),i.alpha=de(n.alpha,r.alpha,o),fr.transform(i))};function JC(e){var t,n;return isNaN(e)&&as(e)&&(((t=e.match(Wl))===null||t===void 0?void 0:t.length)||0)+(((n=e.match(tx))===null||n===void 0?void 0:n.length)||0)>0}const Ax={regex:Qk,countKey:"Vars",token:"${v}",parse:ve},$x={regex:tx,countKey:"Colors",token:"${c}",parse:He.parse},Ox={regex:Wl,countKey:"Numbers",token:"${n}",parse:Or.parse};function Uc(e,{regex:t,countKey:n,token:r,parse:i}){const o=e.tokenised.match(t);o&&(e["num"+n]=o.length,e.tokenised=e.tokenised.replace(t,r),e.values.push(...o.map(i)))}function al(e){const t=e.toString(),n={value:t,tokenised:t,values:[],numVars:0,numColors:0,numNumbers:0};return n.value.includes("var(--")&&Uc(n,Ax),Uc(n,$x),Uc(n,Ox),n}function Lx(e){return al(e).values}function Fx(e){const{values:t,numColors:n,numVars:r,tokenised:i}=al(e),o=t.length;return s=>{let a=i;for(let l=0;l<o;l++)l<r?a=a.replace(Ax.token,s[l]):l<r+n?a=a.replace($x.token,He.transform(s[l])):a=a.replace(Ox.token,xo(s[l]));return a}}const eP=e=>typeof e=="number"?0:e;function tP(e){const t=Lx(e);return Fx(e)(t.map(eP))}const Hn={test:JC,parse:Lx,createTransformer:Fx,getAnimatableNone:tP},Mx=(e,t)=>n=>`${n>0?t:e}`;function zx(e,t){return typeof e=="number"?n=>de(e,t,n):He.test(e)?Rx(e,t):e.startsWith("var(")?Mx(e,t):_x(e,t)}const Nx=(e,t)=>{const n=[...e],r=n.length,i=e.map((o,s)=>zx(o,t[s]));return o=>{for(let s=0;s<r;s++)n[s]=i[s](o);return n}},nP=(e,t)=>{const n={...e,...t},r={};for(const i in n)e[i]!==void 0&&t[i]!==void 0&&(r[i]=zx(e[i],t[i]));return i=>{for(const o in r)n[o]=r[o](i);return n}},_x=(e,t)=>{const n=Hn.createTransformer(t),r=al(e),i=al(t);return r.numVars===i.numVars&&r.numColors===i.numColors&&r.numNumbers>=i.numNumbers?Dn(Nx(r.values,i.values),n):Mx(e,t)},Ho=(e,t,n)=>{const r=t-e;return r===0?1:(n-e)/r},vm=(e,t)=>n=>de(e,t,n);function rP(e){return typeof e=="number"?vm:typeof e=="string"?He.test(e)?Rx:_x:Array.isArray(e)?Nx:typeof e=="object"?nP:vm}function iP(e,t,n){const r=[],i=n||rP(e[0]),o=e.length-1;for(let s=0;s<o;s++){let a=i(e[s],e[s+1]);if(t){const l=Array.isArray(t)?t[s]||ve:t;a=Dn(l,a)}r.push(a)}return r}function Dx(e,t,{clamp:n=!0,ease:r,mixer:i}={}){const o=e.length;if(ip(o===t.length),o===1)return()=>t[0];e[0]>e[o-1]&&(e=[...e].reverse(),t=[...t].reverse());const s=iP(t,r,i),a=s.length,l=u=>{let d=0;if(a>1)for(;d<e.length-2&&!(u<e[d+1]);d++);const f=Ho(e[d],e[d+1],u);return s[d](f)};return n?u=>l(Bn(e[0],e[o-1],u)):l}function oP(e,t){const n=e[e.length-1];for(let r=1;r<=t;r++){const i=Ho(0,t,r);e.push(de(n,1,i))}}function sP(e){const t=[0];return oP(t,e.length-1),t}function aP(e,t){return e.map(n=>n*t)}function lP(e,t){return e.map(()=>t||jx).splice(0,e.length-1)}function ll({duration:e=300,keyframes:t,times:n,ease:r="easeInOut"}){const i=BC(r)?r.map(mm):mm(r),o={done:!1,value:t[0]},s=aP(n&&n.length===t.length?n:sP(t),e),a=Dx(s,t,{ease:Array.isArray(i)?i:lP(t,i)});return{calculatedDuration:e,next:l=>(o.value=a(l),o.done=l>=e,o)}}function Ix(e,t){return t?e*(1e3/t):0}const cP=5;function Vx(e,t,n){const r=Math.max(t-cP,0);return Ix(n-e(r),t-r)}const Bc=.001,uP=.01,ym=10,dP=.05,fP=1;function pP({duration:e=800,bounce:t=.25,velocity:n=0,mass:r=1}){let i,o;FC(e<=In(ym));let s=1-t;s=Bn(dP,fP,s),e=Bn(uP,ym,sn(e)),s<1?(i=u=>{const d=u*s,f=d*e,p=d-n,m=gd(u,s),y=Math.exp(-f);return Bc-p/m*y},o=u=>{const f=u*s*e,p=f*n+n,m=Math.pow(s,2)*Math.pow(u,2)*e,y=Math.exp(-f),w=gd(Math.pow(u,2),s);return(-i(u)+Bc>0?-1:1)*((p-m)*y)/w}):(i=u=>{const d=Math.exp(-u*e),f=(u-n)*e+1;return-Bc+d*f},o=u=>{const d=Math.exp(-u*e),f=(n-u)*(e*e);return d*f});const a=5/e,l=mP(i,o,a);if(e=In(e),isNaN(l))return{stiffness:100,damping:10,duration:e};{const u=Math.pow(l,2)*r;return{stiffness:u,damping:s*2*Math.sqrt(r*u),duration:e}}}const hP=12;function mP(e,t,n){let r=n;for(let i=1;i<hP;i++)r=r-e(r)/t(r);return r}function gd(e,t){return e*Math.sqrt(1-t*t)}const gP=["duration","bounce"],vP=["stiffness","damping","mass"];function xm(e,t){return t.some(n=>e[n]!==void 0)}function yP(e){let t={velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1,...e};if(!xm(e,vP)&&xm(e,gP)){const n=pP(e);t={...t,...n,mass:1},t.isResolvedFromDuration=!0}return t}function Ux({keyframes:e,restDelta:t,restSpeed:n,...r}){const i=e[0],o=e[e.length-1],s={done:!1,value:i},{stiffness:a,damping:l,mass:u,duration:d,velocity:f,isResolvedFromDuration:p}=yP({...r,velocity:-sn(r.velocity||0)}),m=f||0,y=l/(2*Math.sqrt(a*u)),w=o-i,k=sn(Math.sqrt(a/u)),h=Math.abs(w)<5;n||(n=h?.01:2),t||(t=h?.005:.5);let g;if(y<1){const v=gd(k,y);g=b=>{const S=Math.exp(-y*k*b);return o-S*((m+y*k*w)/v*Math.sin(v*b)+w*Math.cos(v*b))}}else if(y===1)g=v=>o-Math.exp(-k*v)*(w+(m+k*w)*v);else{const v=k*Math.sqrt(y*y-1);g=b=>{const S=Math.exp(-y*k*b),C=Math.min(v*b,300);return o-S*((m+y*k*w)*Math.sinh(C)+v*w*Math.cosh(C))/v}}return{calculatedDuration:p&&d||null,next:v=>{const b=g(v);if(p)s.done=v>=d;else{let S=m;v!==0&&(y<1?S=Vx(g,v,b):S=0);const C=Math.abs(S)<=n,P=Math.abs(o-b)<=t;s.done=C&&P}return s.value=s.done?o:b,s}}}function wm({keyframes:e,velocity:t=0,power:n=.8,timeConstant:r=325,bounceDamping:i=10,bounceStiffness:o=500,modifyTarget:s,min:a,max:l,restDelta:u=.5,restSpeed:d}){const f=e[0],p={done:!1,value:f},m=T=>a!==void 0&&T<a||l!==void 0&&T>l,y=T=>a===void 0?l:l===void 0||Math.abs(a-T)<Math.abs(l-T)?a:l;let w=n*t;const k=f+w,h=s===void 0?k:s(k);h!==k&&(w=h-f);const g=T=>-w*Math.exp(-T/r),v=T=>h+g(T),b=T=>{const L=g(T),F=v(T);p.done=Math.abs(L)<=u,p.value=p.done?h:F};let S,C;const P=T=>{m(p.value)&&(S=T,C=Ux({keyframes:[p.value,y(p.value)],velocity:Vx(v,T,p.value),damping:i,stiffness:o,restDelta:u,restSpeed:d}))};return P(0),{calculatedDuration:null,next:T=>{let L=!1;return!C&&S===void 0&&(L=!0,b(T),P(T)),S!==void 0&&T>S?C.next(T-S):(!L&&b(T),p)}}}const xP=e=>{const t=({timestamp:n})=>e(n);return{start:()=>te.update(t,!0),stop:()=>fn(t),now:()=>Ne.isProcessing?Ne.timestamp:performance.now()}},bm=2e4;function Sm(e){let t=0;const n=50;let r=e.next(t);for(;!r.done&&t<bm;)t+=n,r=e.next(t);return t>=bm?1/0:t}const wP={decay:wm,inertia:wm,tween:ll,keyframes:ll,spring:Ux};function cl({autoplay:e=!0,delay:t=0,driver:n=xP,keyframes:r,type:i="keyframes",repeat:o=0,repeatDelay:s=0,repeatType:a="loop",onPlay:l,onStop:u,onComplete:d,onUpdate:f,...p}){let m=1,y=!1,w,k;const h=()=>{k=new Promise(M=>{w=M})};h();let g;const v=wP[i]||ll;let b;v!==ll&&typeof r[0]!="number"&&(b=Dx([0,100],r,{clamp:!1}),r=[0,100]);const S=v({...p,keyframes:r});let C;a==="mirror"&&(C=v({...p,keyframes:[...r].reverse(),velocity:-(p.velocity||0)}));let P="idle",T=null,L=null,F=null;S.calculatedDuration===null&&o&&(S.calculatedDuration=Sm(S));const{calculatedDuration:ne}=S;let J=1/0,re=1/0;ne!==null&&(J=ne+s,re=J*(o+1)-s);let X=0;const $e=M=>{if(L===null)return;m>0&&(L=Math.min(L,M)),m<0&&(L=Math.min(M-re/m,L)),T!==null?X=T:X=Math.round(M-L)*m;const H=X-t*(m>=0?1:-1),_t=m>=0?H<0:H>re;X=Math.max(H,0),P==="finished"&&T===null&&(X=re);let Ye=X,Pt=S;if(o){const Et=Math.min(X,re)/J;let mn=Math.floor(Et),ft=Et%1;!ft&&Et>=1&&(ft=1),ft===1&&mn--,mn=Math.min(mn,o+1),!!(mn%2)&&(a==="reverse"?(ft=1-ft,s&&(ft-=s/J)):a==="mirror"&&(Pt=C)),Ye=Bn(0,1,ft)*J}const Ce=_t?{done:!1,value:r[0]}:Pt.next(Ye);b&&(Ce.value=b(Ce.value));let{done:dt}=Ce;!_t&&ne!==null&&(dt=m>=0?X>=re:X<=0);const Zn=T===null&&(P==="finished"||P==="running"&&dt);return f&&f(Ce.value),Zn&&A(),Ce},Q=()=>{g&&g.stop(),g=void 0},he=()=>{P="idle",Q(),w(),h(),L=F=null},A=()=>{P="finished",d&&d(),Q(),w()},$=()=>{if(y)return;g||(g=n($e));const M=g.now();l&&l(),T!==null?L=M-T:(!L||P==="finished")&&(L=M),P==="finished"&&h(),F=L,T=null,P="running",g.start()};e&&$();const z={then(M,H){return k.then(M,H)},get time(){return sn(X)},set time(M){M=In(M),X=M,T!==null||!g||m===0?T=M:L=g.now()-M/m},get duration(){const M=S.calculatedDuration===null?Sm(S):S.calculatedDuration;return sn(M)},get speed(){return m},set speed(M){M===m||!g||(m=M,z.time=sn(X))},get state(){return P},play:$,pause:()=>{P="paused",T=X},stop:()=>{y=!0,P!=="idle"&&(P="idle",u&&u(),he())},cancel:()=>{F!==null&&$e(F),he()},complete:()=>{P="finished"},sample:M=>(L=0,$e(M))};return z}function bP(e){let t;return()=>(t===void 0&&(t=e()),t)}const SP=bP(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),jP=new Set(["opacity","clipPath","filter","transform","backgroundColor"]),Ms=10,kP=2e4,CP=(e,t)=>t.type==="spring"||e==="backgroundColor"||!xx(t.ease);function PP(e,t,{onUpdate:n,onComplete:r,...i}){if(!(SP()&&jP.has(t)&&!i.repeatDelay&&i.repeatType!=="mirror"&&i.damping!==0&&i.type!=="inertia"))return!1;let s=!1,a,l,u=!1;const d=()=>{l=new Promise(v=>{a=v})};d();let{keyframes:f,duration:p=300,ease:m,times:y}=i;if(CP(t,i)){const v=cl({...i,repeat:0,delay:0});let b={done:!1,value:f[0]};const S=[];let C=0;for(;!b.done&&C<kP;)b=v.sample(C),S.push(b.value),C+=Ms;y=void 0,f=S,p=C-Ms,m="linear"}const w=zC(e.owner.current,t,f,{...i,duration:p,ease:m,times:y}),k=()=>{u=!1,w.cancel()},h=()=>{u=!0,te.update(k),a(),d()};return w.onfinish=()=>{u||(e.set(NC(f,i)),r&&r(),h())},{then(v,b){return l.then(v,b)},attachTimeline(v){return w.timeline=v,w.onfinish=null,ve},get time(){return sn(w.currentTime||0)},set time(v){w.currentTime=In(v)},get speed(){return w.playbackRate},set speed(v){w.playbackRate=v},get duration(){return sn(p)},play:()=>{s||(w.play(),fn(k))},pause:()=>w.pause(),stop:()=>{if(s=!0,w.playState==="idle")return;const{currentTime:v}=w;if(v){const b=cl({...i,autoplay:!1});e.setWithVelocity(b.sample(v-Ms).value,b.sample(v).value,Ms)}h()},complete:()=>{u||w.finish()},cancel:h}}function EP({keyframes:e,delay:t,onUpdate:n,onComplete:r}){const i=()=>(n&&n(e[e.length-1]),r&&r(),{time:0,speed:1,duration:0,play:ve,pause:ve,stop:ve,then:o=>(o(),Promise.resolve()),cancel:ve,complete:ve});return t?cl({keyframes:[0,1],duration:0,delay:t,onComplete:i}):i()}const TP={type:"spring",stiffness:500,damping:25,restSpeed:10},RP=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),AP={type:"keyframes",duration:.8},$P={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},OP=(e,{keyframes:t})=>t.length>2?AP:$r.has(e)?e.startsWith("scale")?RP(t[1]):TP:$P,vd=(e,t)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&(Hn.test(t)||t==="0")&&!t.startsWith("url(")),LP=new Set(["brightness","contrast","saturate","opacity"]);function FP(e){const[t,n]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[r]=n.match(Wl)||[];if(!r)return e;const i=n.replace(r,"");let o=LP.has(t)?1:0;return r!==n&&(o*=100),t+"("+o+i+")"}const MP=/([a-z-]*)\(.*?\)/g,yd={...Hn,getAnimatableNone:e=>{const t=e.match(MP);return t?t.map(FP).join(" "):e}},zP={...nx,color:He,backgroundColor:He,outlineColor:He,fill:He,stroke:He,borderColor:He,borderTopColor:He,borderRightColor:He,borderBottomColor:He,borderLeftColor:He,filter:yd,WebkitFilter:yd},lp=e=>zP[e];function Bx(e,t){let n=lp(e);return n!==yd&&(n=Hn),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const Hx=e=>/^0[^.\s]+$/.test(e);function NP(e){if(typeof e=="number")return e===0;if(e!==null)return e==="none"||e==="0"||Hx(e)}function _P(e,t,n,r){const i=vd(t,n);let o;Array.isArray(n)?o=[...n]:o=[null,n];const s=r.from!==void 0?r.from:e.get();let a;const l=[];for(let u=0;u<o.length;u++)o[u]===null&&(o[u]=u===0?s:o[u-1]),NP(o[u])&&l.push(u),typeof o[u]=="string"&&o[u]!=="none"&&o[u]!=="0"&&(a=o[u]);if(i&&l.length&&a)for(let u=0;u<l.length;u++){const d=l[u];o[d]=Bx(t,a)}return o}function DP({when:e,delay:t,delayChildren:n,staggerChildren:r,staggerDirection:i,repeat:o,repeatType:s,repeatDelay:a,from:l,elapsed:u,...d}){return!!Object.keys(d).length}function cp(e,t){return e[t]||e.default||e}const IP={skipAnimations:!1},up=(e,t,n,r={})=>i=>{const o=cp(r,e)||{},s=o.delay||r.delay||0;let{elapsed:a=0}=r;a=a-In(s);const l=_P(t,e,n,o),u=l[0],d=l[l.length-1],f=vd(e,u),p=vd(e,d);let m={keyframes:l,velocity:t.getVelocity(),ease:"easeOut",...o,delay:-a,onUpdate:y=>{t.set(y),o.onUpdate&&o.onUpdate(y)},onComplete:()=>{i(),o.onComplete&&o.onComplete()}};if(DP(o)||(m={...m,...OP(e,m)}),m.duration&&(m.duration=In(m.duration)),m.repeatDelay&&(m.repeatDelay=In(m.repeatDelay)),!f||!p||MC.current||o.type===!1||IP.skipAnimations)return EP(m);if(!r.isHandoff&&t.owner&&t.owner.current instanceof HTMLElement&&!t.owner.getProps().onUpdate){const y=PP(t,e,m);if(y)return y}return cl(m)};function ul(e){return!!(rt(e)&&e.add)}const Wx=e=>/^\-?\d*\.?\d+$/.test(e);function dp(e,t){e.indexOf(t)===-1&&e.push(t)}function fp(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}class pp{constructor(){this.subscriptions=[]}add(t){return dp(this.subscriptions,t),()=>fp(this.subscriptions,t)}notify(t,n,r){const i=this.subscriptions.length;if(i)if(i===1)this.subscriptions[0](t,n,r);else for(let o=0;o<i;o++){const s=this.subscriptions[o];s&&s(t,n,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const VP=e=>!isNaN(parseFloat(e));class UP{constructor(t,n={}){this.version="10.18.0",this.timeDelta=0,this.lastUpdated=0,this.canTrackVelocity=!1,this.events={},this.updateAndNotify=(r,i=!0)=>{this.prev=this.current,this.current=r;const{delta:o,timestamp:s}=Ne;this.lastUpdated!==s&&(this.timeDelta=o,this.lastUpdated=s,te.postRender(this.scheduleVelocityCheck)),this.prev!==this.current&&this.events.change&&this.events.change.notify(this.current),this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()),i&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.scheduleVelocityCheck=()=>te.postRender(this.velocityCheck),this.velocityCheck=({timestamp:r})=>{r!==this.lastUpdated&&(this.prev=this.current,this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()))},this.hasAnimated=!1,this.prev=this.current=t,this.canTrackVelocity=VP(this.current),this.owner=n.owner}onChange(t){return this.on("change",t)}on(t,n){this.events[t]||(this.events[t]=new pp);const r=this.events[t].add(n);return t==="change"?()=>{r(),te.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,n){this.passiveEffect=t,this.stopPassiveEffect=n}set(t,n=!0){!n||!this.passiveEffect?this.updateAndNotify(t,n):this.passiveEffect(t,this.updateAndNotify)}setWithVelocity(t,n,r){this.set(n),this.prev=t,this.timeDelta=r}jump(t){this.updateAndNotify(t),this.prev=t,this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?Ix(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(t){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=t(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function yi(e,t){return new UP(e,t)}const Qx=e=>t=>t.test(e),BP={test:e=>e==="auto",parse:e=>e},qx=[Or,N,Qt,vn,Yk,Gk,BP],Ui=e=>qx.find(Qx(e)),HP=[...qx,He,Hn],WP=e=>HP.find(Qx(e));function QP(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,yi(n))}function qP(e,t){const n=ql(e,t);let{transitionEnd:r={},transition:i={},...o}=n?e.makeTargetAnimatable(n,!1):{};o={...o,...r};for(const s in o){const a=uC(o[s]);QP(e,s,a)}}function KP(e,t,n){var r,i;const o=Object.keys(t).filter(a=>!e.hasValue(a)),s=o.length;if(s)for(let a=0;a<s;a++){const l=o[a],u=t[l];let d=null;Array.isArray(u)&&(d=u[0]),d===null&&(d=(i=(r=n[l])!==null&&r!==void 0?r:e.readValue(l))!==null&&i!==void 0?i:t[l]),d!=null&&(typeof d=="string"&&(Wx(d)||Hx(d))?d=parseFloat(d):!WP(d)&&Hn.test(u)&&(d=Bx(l,u)),e.addValue(l,yi(d,{owner:e})),n[l]===void 0&&(n[l]=d),d!==null&&e.setBaseTarget(l,d))}}function GP(e,t){return t?(t[e]||t.default||t).from:void 0}function YP(e,t,n){const r={};for(const i in e){const o=GP(i,t);if(o!==void 0)r[i]=o;else{const s=n.getValue(i);s&&(r[i]=s.get())}}return r}function XP({protectedKeys:e,needsAnimating:t},n){const r=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,r}function ZP(e,t){const n=e.get();if(Array.isArray(t)){for(let r=0;r<t.length;r++)if(t[r]!==n)return!0}else return n!==t}function Kx(e,t,{delay:n=0,transitionOverride:r,type:i}={}){let{transition:o=e.getDefaultTransition(),transitionEnd:s,...a}=e.makeTargetAnimatable(t);const l=e.getValue("willChange");r&&(o=r);const u=[],d=i&&e.animationState&&e.animationState.getState()[i];for(const f in a){const p=e.getValue(f),m=a[f];if(!p||m===void 0||d&&XP(d,f))continue;const y={delay:n,elapsed:0,...cp(o||{},f)};if(window.HandoffAppearAnimations){const h=e.getProps()[Gy];if(h){const g=window.HandoffAppearAnimations(h,f,p,te);g!==null&&(y.elapsed=g,y.isHandoff=!0)}}let w=!y.isHandoff&&!ZP(p,m);if(y.type==="spring"&&(p.getVelocity()||y.velocity)&&(w=!1),p.animation&&(w=!1),w)continue;p.start(up(f,p,m,e.shouldReduceMotion&&$r.has(f)?{type:!1}:y));const k=p.animation;ul(l)&&(l.add(f),k.then(()=>l.remove(f))),u.push(k)}return s&&Promise.all(u).then(()=>{s&&qP(e,s)}),u}function xd(e,t,n={}){const r=ql(e,t,n.custom);let{transition:i=e.getDefaultTransition()||{}}=r||{};n.transitionOverride&&(i=n.transitionOverride);const o=r?()=>Promise.all(Kx(e,r,n)):()=>Promise.resolve(),s=e.variantChildren&&e.variantChildren.size?(l=0)=>{const{delayChildren:u=0,staggerChildren:d,staggerDirection:f}=i;return JP(e,t,u+l,d,f,n)}:()=>Promise.resolve(),{when:a}=i;if(a){const[l,u]=a==="beforeChildren"?[o,s]:[s,o];return l().then(()=>u())}else return Promise.all([o(),s(n.delay)])}function JP(e,t,n=0,r=0,i=1,o){const s=[],a=(e.variantChildren.size-1)*r,l=i===1?(u=0)=>u*r:(u=0)=>a-u*r;return Array.from(e.variantChildren).sort(eE).forEach((u,d)=>{u.notify("AnimationStart",t),s.push(xd(u,t,{...o,delay:n+l(d)}).then(()=>u.notify("AnimationComplete",t)))}),Promise.all(s)}function eE(e,t){return e.sortNodePosition(t)}function tE(e,t,n={}){e.notify("AnimationStart",t);let r;if(Array.isArray(t)){const i=t.map(o=>xd(e,o,n));r=Promise.all(i)}else if(typeof t=="string")r=xd(e,t,n);else{const i=typeof t=="function"?ql(e,t,n.custom):t;r=Promise.all(Kx(e,i,n))}return r.then(()=>e.notify("AnimationComplete",t))}const nE=[...Kf].reverse(),rE=Kf.length;function iE(e){return t=>Promise.all(t.map(({animation:n,options:r})=>tE(e,n,r)))}function oE(e){let t=iE(e);const n=aE();let r=!0;const i=(l,u)=>{const d=ql(e,u);if(d){const{transition:f,transitionEnd:p,...m}=d;l={...l,...m,...p}}return l};function o(l){t=l(e)}function s(l,u){const d=e.getProps(),f=e.getVariantContext(!0)||{},p=[],m=new Set;let y={},w=1/0;for(let h=0;h<rE;h++){const g=nE[h],v=n[g],b=d[g]!==void 0?d[g]:f[g],S=Uo(b),C=g===u?v.isActive:null;C===!1&&(w=h);let P=b===f[g]&&b!==d[g]&&S;if(P&&r&&e.manuallyAnimateOnMount&&(P=!1),v.protectedKeys={...y},!v.isActive&&C===null||!b&&!v.prevProp||Bl(b)||typeof b=="boolean")continue;let L=sE(v.prevProp,b)||g===u&&v.isActive&&!P&&S||h>w&&S,F=!1;const ne=Array.isArray(b)?b:[b];let J=ne.reduce(i,{});C===!1&&(J={});const{prevResolvedValues:re={}}=v,X={...re,...J},$e=Q=>{L=!0,m.has(Q)&&(F=!0,m.delete(Q)),v.needsAnimating[Q]=!0};for(const Q in X){const he=J[Q],A=re[Q];if(y.hasOwnProperty(Q))continue;let $=!1;sl(he)&&sl(A)?$=!vx(he,A):$=he!==A,$?he!==void 0?$e(Q):m.add(Q):he!==void 0&&m.has(Q)?$e(Q):v.protectedKeys[Q]=!0}v.prevProp=b,v.prevResolvedValues=J,v.isActive&&(y={...y,...J}),r&&e.blockInitialAnimation&&(L=!1),L&&(!P||F)&&p.push(...ne.map(Q=>({animation:Q,options:{type:g,...l}})))}if(m.size){const h={};m.forEach(g=>{const v=e.getBaseTarget(g);v!==void 0&&(h[g]=v)}),p.push({animation:h})}let k=!!p.length;return r&&(d.initial===!1||d.initial===d.animate)&&!e.manuallyAnimateOnMount&&(k=!1),r=!1,k?t(p):Promise.resolve()}function a(l,u,d){var f;if(n[l].isActive===u)return Promise.resolve();(f=e.variantChildren)===null||f===void 0||f.forEach(m=>{var y;return(y=m.animationState)===null||y===void 0?void 0:y.setActive(l,u)}),n[l].isActive=u;const p=s(d,l);for(const m in n)n[m].protectedKeys={};return p}return{animateChanges:s,setActive:a,setAnimateFunction:o,getState:()=>n}}function sE(e,t){return typeof t=="string"?t!==e:Array.isArray(t)?!vx(t,e):!1}function Jn(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function aE(){return{animate:Jn(!0),whileInView:Jn(),whileHover:Jn(),whileTap:Jn(),whileDrag:Jn(),whileFocus:Jn(),exit:Jn()}}class lE extends Xn{constructor(t){super(t),t.animationState||(t.animationState=oE(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();this.unmount(),Bl(t)&&(this.unmount=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:n}=this.node.prevProps||{};t!==n&&this.updateAnimationControlsSubscription()}unmount(){}}let cE=0;class uE extends Xn{constructor(){super(...arguments),this.id=cE++}update(){if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:n,custom:r}=this.node.presenceContext,{isPresent:i}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===i)return;const o=this.node.animationState.setActive("exit",!t,{custom:r??this.node.getProps().custom});n&&!t&&o.then(()=>n(this.id))}mount(){const{register:t}=this.node.presenceContext||{};t&&(this.unmount=t(this.id))}unmount(){}}const dE={animation:{Feature:lE},exit:{Feature:uE}},jm=(e,t)=>Math.abs(e-t);function fE(e,t){const n=jm(e.x,t.x),r=jm(e.y,t.y);return Math.sqrt(n**2+r**2)}class Gx{constructor(t,n,{transformPagePoint:r,contextWindow:i,dragSnapToOrigin:o=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const f=Wc(this.lastMoveEventInfo,this.history),p=this.startEvent!==null,m=fE(f.offset,{x:0,y:0})>=3;if(!p&&!m)return;const{point:y}=f,{timestamp:w}=Ne;this.history.push({...y,timestamp:w});const{onStart:k,onMove:h}=this.handlers;p||(k&&k(this.lastMoveEvent,f),this.startEvent=this.lastMoveEvent),h&&h(this.lastMoveEvent,f)},this.handlePointerMove=(f,p)=>{this.lastMoveEvent=f,this.lastMoveEventInfo=Hc(p,this.transformPagePoint),te.update(this.updatePoint,!0)},this.handlePointerUp=(f,p)=>{this.end();const{onEnd:m,onSessionEnd:y,resumeAnimation:w}=this.handlers;if(this.dragSnapToOrigin&&w&&w(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const k=Wc(f.type==="pointercancel"?this.lastMoveEventInfo:Hc(p,this.transformPagePoint),this.history);this.startEvent&&m&&m(f,k),y&&y(f,k)},!fx(t))return;this.dragSnapToOrigin=o,this.handlers=n,this.transformPagePoint=r,this.contextWindow=i||window;const s=Ql(t),a=Hc(s,this.transformPagePoint),{point:l}=a,{timestamp:u}=Ne;this.history=[{...l,timestamp:u}];const{onSessionStart:d}=n;d&&d(t,Wc(a,this.history)),this.removeListeners=Dn(on(this.contextWindow,"pointermove",this.handlePointerMove),on(this.contextWindow,"pointerup",this.handlePointerUp),on(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),fn(this.updatePoint)}}function Hc(e,t){return t?{point:t(e.point)}:e}function km(e,t){return{x:e.x-t.x,y:e.y-t.y}}function Wc({point:e},t){return{point:e,delta:km(e,Yx(t)),offset:km(e,pE(t)),velocity:hE(t,.1)}}function pE(e){return e[0]}function Yx(e){return e[e.length-1]}function hE(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null;const i=Yx(e);for(;n>=0&&(r=e[n],!(i.timestamp-r.timestamp>In(t)));)n--;if(!r)return{x:0,y:0};const o=sn(i.timestamp-r.timestamp);if(o===0)return{x:0,y:0};const s={x:(i.x-r.x)/o,y:(i.y-r.y)/o};return s.x===1/0&&(s.x=0),s.y===1/0&&(s.y=0),s}function lt(e){return e.max-e.min}function wd(e,t=0,n=.01){return Math.abs(e-t)<=n}function Cm(e,t,n,r=.5){e.origin=r,e.originPoint=de(t.min,t.max,e.origin),e.scale=lt(n)/lt(t),(wd(e.scale,1,1e-4)||isNaN(e.scale))&&(e.scale=1),e.translate=de(n.min,n.max,e.origin)-e.originPoint,(wd(e.translate)||isNaN(e.translate))&&(e.translate=0)}function wo(e,t,n,r){Cm(e.x,t.x,n.x,r?r.originX:void 0),Cm(e.y,t.y,n.y,r?r.originY:void 0)}function Pm(e,t,n){e.min=n.min+t.min,e.max=e.min+lt(t)}function mE(e,t,n){Pm(e.x,t.x,n.x),Pm(e.y,t.y,n.y)}function Em(e,t,n){e.min=t.min-n.min,e.max=e.min+lt(t)}function bo(e,t,n){Em(e.x,t.x,n.x),Em(e.y,t.y,n.y)}function gE(e,{min:t,max:n},r){return t!==void 0&&e<t?e=r?de(t,e,r.min):Math.max(e,t):n!==void 0&&e>n&&(e=r?de(n,e,r.max):Math.min(e,n)),e}function Tm(e,t,n){return{min:t!==void 0?e.min+t:void 0,max:n!==void 0?e.max+n-(e.max-e.min):void 0}}function vE(e,{top:t,left:n,bottom:r,right:i}){return{x:Tm(e.x,n,i),y:Tm(e.y,t,r)}}function Rm(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}function yE(e,t){return{x:Rm(e.x,t.x),y:Rm(e.y,t.y)}}function xE(e,t){let n=.5;const r=lt(e),i=lt(t);return i>r?n=Ho(t.min,t.max-r,e.min):r>i&&(n=Ho(e.min,e.max-i,t.min)),Bn(0,1,n)}function wE(e,t){const n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}const bd=.35;function bE(e=bd){return e===!1?e=0:e===!0&&(e=bd),{x:Am(e,"left","right"),y:Am(e,"top","bottom")}}function Am(e,t,n){return{min:$m(e,t),max:$m(e,n)}}function $m(e,t){return typeof e=="number"?e:e[t]||0}const Om=()=>({translate:0,scale:1,origin:0,originPoint:0}),ni=()=>({x:Om(),y:Om()}),Lm=()=>({min:0,max:0}),we=()=>({x:Lm(),y:Lm()});function gt(e){return[e("x"),e("y")]}function Xx({top:e,left:t,right:n,bottom:r}){return{x:{min:t,max:n},y:{min:e,max:r}}}function SE({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function jE(e,t){if(!t)return e;const n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function Qc(e){return e===void 0||e===1}function Sd({scale:e,scaleX:t,scaleY:n}){return!Qc(e)||!Qc(t)||!Qc(n)}function rr(e){return Sd(e)||Zx(e)||e.z||e.rotate||e.rotateX||e.rotateY}function Zx(e){return Fm(e.x)||Fm(e.y)}function Fm(e){return e&&e!=="0%"}function dl(e,t,n){const r=e-n,i=t*r;return n+i}function Mm(e,t,n,r,i){return i!==void 0&&(e=dl(e,i,r)),dl(e,n,r)+t}function jd(e,t=0,n=1,r,i){e.min=Mm(e.min,t,n,r,i),e.max=Mm(e.max,t,n,r,i)}function Jx(e,{x:t,y:n}){jd(e.x,t.translate,t.scale,t.originPoint),jd(e.y,n.translate,n.scale,n.originPoint)}function kE(e,t,n,r=!1){const i=n.length;if(!i)return;t.x=t.y=1;let o,s;for(let a=0;a<i;a++){o=n[a],s=o.projectionDelta;const l=o.instance;l&&l.style&&l.style.display==="contents"||(r&&o.options.layoutScroll&&o.scroll&&o!==o.root&&ri(e,{x:-o.scroll.offset.x,y:-o.scroll.offset.y}),s&&(t.x*=s.x.scale,t.y*=s.y.scale,Jx(e,s)),r&&rr(o.latestValues)&&ri(e,o.latestValues))}t.x=zm(t.x),t.y=zm(t.y)}function zm(e){return Number.isInteger(e)||e>1.0000000000001||e<.999999999999?e:1}function Sn(e,t){e.min=e.min+t,e.max=e.max+t}function Nm(e,t,[n,r,i]){const o=t[i]!==void 0?t[i]:.5,s=de(e.min,e.max,o);jd(e,t[n],t[r],s,t.scale)}const CE=["x","scaleX","originX"],PE=["y","scaleY","originY"];function ri(e,t){Nm(e.x,t,CE),Nm(e.y,t,PE)}function e1(e,t){return Xx(jE(e.getBoundingClientRect(),t))}function EE(e,t,n){const r=e1(e,n),{scroll:i}=t;return i&&(Sn(r.x,i.offset.x),Sn(r.y,i.offset.y)),r}const t1=({current:e})=>e?e.ownerDocument.defaultView:null,TE=new WeakMap;class RE{constructor(t){this.openGlobalLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=we(),this.visualElement=t}start(t,{snapToCursor:n=!1}={}){const{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;const i=d=>{const{dragSnapToOrigin:f}=this.getProps();f?this.pauseAnimation():this.stopAnimation(),n&&this.snapToCursor(Ql(d,"page").point)},o=(d,f)=>{const{drag:p,dragPropagation:m,onDragStart:y}=this.getProps();if(p&&!m&&(this.openGlobalLock&&this.openGlobalLock(),this.openGlobalLock=hx(p),!this.openGlobalLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),gt(k=>{let h=this.getAxisMotionValue(k).get()||0;if(Qt.test(h)){const{projection:g}=this.visualElement;if(g&&g.layout){const v=g.layout.layoutBox[k];v&&(h=lt(v)*(parseFloat(h)/100))}}this.originPoint[k]=h}),y&&te.update(()=>y(d,f),!1,!0);const{animationState:w}=this.visualElement;w&&w.setActive("whileDrag",!0)},s=(d,f)=>{const{dragPropagation:p,dragDirectionLock:m,onDirectionLock:y,onDrag:w}=this.getProps();if(!p&&!this.openGlobalLock)return;const{offset:k}=f;if(m&&this.currentDirection===null){this.currentDirection=AE(k),this.currentDirection!==null&&y&&y(this.currentDirection);return}this.updateAxis("x",f.point,k),this.updateAxis("y",f.point,k),this.visualElement.render(),w&&w(d,f)},a=(d,f)=>this.stop(d,f),l=()=>gt(d=>{var f;return this.getAnimationState(d)==="paused"&&((f=this.getAxisMotionValue(d).animation)===null||f===void 0?void 0:f.play())}),{dragSnapToOrigin:u}=this.getProps();this.panSession=new Gx(t,{onSessionStart:i,onStart:o,onMove:s,onSessionEnd:a,resumeAnimation:l},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:u,contextWindow:t1(this.visualElement)})}stop(t,n){const r=this.isDragging;if(this.cancel(),!r)return;const{velocity:i}=n;this.startAnimation(i);const{onDragEnd:o}=this.getProps();o&&te.update(()=>o(t,n))}cancel(){this.isDragging=!1;const{projection:t,animationState:n}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:r}=this.getProps();!r&&this.openGlobalLock&&(this.openGlobalLock(),this.openGlobalLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(t,n,r){const{drag:i}=this.getProps();if(!r||!zs(t,i,this.currentDirection))return;const o=this.getAxisMotionValue(t);let s=this.originPoint[t]+r[t];this.constraints&&this.constraints[t]&&(s=gE(s,this.constraints[t],this.elastic[t])),o.set(s)}resolveConstraints(){var t;const{dragConstraints:n,dragElastic:r}=this.getProps(),i=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(t=this.visualElement.projection)===null||t===void 0?void 0:t.layout,o=this.constraints;n&&ei(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&i?this.constraints=vE(i.layoutBox,n):this.constraints=!1,this.elastic=bE(r),o!==this.constraints&&i&&this.constraints&&!this.hasMutatedConstraints&&gt(s=>{this.getAxisMotionValue(s)&&(this.constraints[s]=wE(i.layoutBox[s],this.constraints[s]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:n}=this.getProps();if(!t||!ei(t))return!1;const r=t.current,{projection:i}=this.visualElement;if(!i||!i.layout)return!1;const o=EE(r,i.root,this.visualElement.getTransformPagePoint());let s=yE(i.layout.layoutBox,o);if(n){const a=n(SE(s));this.hasMutatedConstraints=!!a,a&&(s=Xx(a))}return s}startAnimation(t){const{drag:n,dragMomentum:r,dragElastic:i,dragTransition:o,dragSnapToOrigin:s,onDragTransitionEnd:a}=this.getProps(),l=this.constraints||{},u=gt(d=>{if(!zs(d,n,this.currentDirection))return;let f=l&&l[d]||{};s&&(f={min:0,max:0});const p=i?200:1e6,m=i?40:1e7,y={type:"inertia",velocity:r?t[d]:0,bounceStiffness:p,bounceDamping:m,timeConstant:750,restDelta:1,restSpeed:10,...o,...f};return this.startAxisValueAnimation(d,y)});return Promise.all(u).then(a)}startAxisValueAnimation(t,n){const r=this.getAxisMotionValue(t);return r.start(up(t,r,0,n))}stopAnimation(){gt(t=>this.getAxisMotionValue(t).stop())}pauseAnimation(){gt(t=>{var n;return(n=this.getAxisMotionValue(t).animation)===null||n===void 0?void 0:n.pause()})}getAnimationState(t){var n;return(n=this.getAxisMotionValue(t).animation)===null||n===void 0?void 0:n.state}getAxisMotionValue(t){const n="_drag"+t.toUpperCase(),r=this.visualElement.getProps(),i=r[n];return i||this.visualElement.getValue(t,(r.initial?r.initial[t]:void 0)||0)}snapToCursor(t){gt(n=>{const{drag:r}=this.getProps();if(!zs(n,r,this.currentDirection))return;const{projection:i}=this.visualElement,o=this.getAxisMotionValue(n);if(i&&i.layout){const{min:s,max:a}=i.layout.layoutBox[n];o.set(t[n]-de(s,a,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:n}=this.getProps(),{projection:r}=this.visualElement;if(!ei(n)||!r||!this.constraints)return;this.stopAnimation();const i={x:0,y:0};gt(s=>{const a=this.getAxisMotionValue(s);if(a){const l=a.get();i[s]=xE({min:l,max:l},this.constraints[s])}});const{transformTemplate:o}=this.visualElement.getProps();this.visualElement.current.style.transform=o?o({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.resolveConstraints(),gt(s=>{if(!zs(s,t,null))return;const a=this.getAxisMotionValue(s),{min:l,max:u}=this.constraints[s];a.set(de(l,u,i[s]))})}addListeners(){if(!this.visualElement.current)return;TE.set(this.visualElement,this);const t=this.visualElement.current,n=on(t,"pointerdown",l=>{const{drag:u,dragListener:d=!0}=this.getProps();u&&d&&this.start(l)}),r=()=>{const{dragConstraints:l}=this.getProps();ei(l)&&(this.constraints=this.resolveRefConstraints())},{projection:i}=this.visualElement,o=i.addEventListener("measure",r);i&&!i.layout&&(i.root&&i.root.updateScroll(),i.updateLayout()),r();const s=nn(window,"resize",()=>this.scalePositionWithinConstraints()),a=i.addEventListener("didUpdate",({delta:l,hasLayoutChanged:u})=>{this.isDragging&&u&&(gt(d=>{const f=this.getAxisMotionValue(d);f&&(this.originPoint[d]+=l[d].translate,f.set(f.get()+l[d].translate))}),this.visualElement.render())});return()=>{s(),n(),o(),a&&a()}}getProps(){const t=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:r=!1,dragPropagation:i=!1,dragConstraints:o=!1,dragElastic:s=bd,dragMomentum:a=!0}=t;return{...t,drag:n,dragDirectionLock:r,dragPropagation:i,dragConstraints:o,dragElastic:s,dragMomentum:a}}}function zs(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function AE(e,t=10){let n=null;return Math.abs(e.y)>t?n="y":Math.abs(e.x)>t&&(n="x"),n}class $E extends Xn{constructor(t){super(t),this.removeGroupControls=ve,this.removeListeners=ve,this.controls=new RE(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||ve}unmount(){this.removeGroupControls(),this.removeListeners()}}const _m=e=>(t,n)=>{e&&te.update(()=>e(t,n))};class OE extends Xn{constructor(){super(...arguments),this.removePointerDownListener=ve}onPointerDown(t){this.session=new Gx(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:t1(this.node)})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:n,onPan:r,onPanEnd:i}=this.node.getProps();return{onSessionStart:_m(t),onStart:_m(n),onMove:r,onEnd:(o,s)=>{delete this.session,i&&te.update(()=>i(o,s))}}}mount(){this.removePointerDownListener=on(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}function LE(){const e=j.useContext(Vl);if(e===null)return[!0,null];const{isPresent:t,onExitComplete:n,register:r}=e,i=j.useId();return j.useEffect(()=>r(i),[]),!t&&n?[!1,()=>n&&n(i)]:[!0]}const ha={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function Dm(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const Bi={correct:(e,t)=>{if(!t.target)return e;if(typeof e=="string")if(N.test(e))e=parseFloat(e);else return e;const n=Dm(e,t.target.x),r=Dm(e,t.target.y);return`${n}% ${r}%`}},FE={correct:(e,{treeScale:t,projectionDelta:n})=>{const r=e,i=Hn.parse(e);if(i.length>5)return r;const o=Hn.createTransformer(e),s=typeof i[0]!="number"?1:0,a=n.x.scale*t.x,l=n.y.scale*t.y;i[0+s]/=a,i[1+s]/=l;const u=de(a,l,.5);return typeof i[2+s]=="number"&&(i[2+s]/=u),typeof i[3+s]=="number"&&(i[3+s]/=u),o(i)}};class ME extends G.Component{componentDidMount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r,layoutId:i}=this.props,{projection:o}=t;Uk(zE),o&&(n.group&&n.group.add(o),r&&r.register&&i&&r.register(o),o.root.didUpdate(),o.addEventListener("animationComplete",()=>{this.safeToRemove()}),o.setOptions({...o.options,onExitComplete:()=>this.safeToRemove()})),ha.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:n,visualElement:r,drag:i,isPresent:o}=this.props,s=r.projection;return s&&(s.isPresent=o,i||t.layoutDependency!==n||n===void 0?s.willUpdate():this.safeToRemove(),t.isPresent!==o&&(o?s.promote():s.relegate()||te.postRender(()=>{const a=s.getStack();(!a||!a.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),queueMicrotask(()=>{!t.currentAnimation&&t.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r}=this.props,{projection:i}=t;i&&(i.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(i),r&&r.deregister&&r.deregister(i))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function n1(e){const[t,n]=LE(),r=j.useContext(Yf);return G.createElement(ME,{...e,layoutGroup:r,switchLayoutGroup:j.useContext(Xy),isPresent:t,safeToRemove:n})}const zE={borderRadius:{...Bi,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Bi,borderTopRightRadius:Bi,borderBottomLeftRadius:Bi,borderBottomRightRadius:Bi,boxShadow:FE},r1=["TopLeft","TopRight","BottomLeft","BottomRight"],NE=r1.length,Im=e=>typeof e=="string"?parseFloat(e):e,Vm=e=>typeof e=="number"||N.test(e);function _E(e,t,n,r,i,o){i?(e.opacity=de(0,n.opacity!==void 0?n.opacity:1,DE(r)),e.opacityExit=de(t.opacity!==void 0?t.opacity:1,0,IE(r))):o&&(e.opacity=de(t.opacity!==void 0?t.opacity:1,n.opacity!==void 0?n.opacity:1,r));for(let s=0;s<NE;s++){const a=`border${r1[s]}Radius`;let l=Um(t,a),u=Um(n,a);if(l===void 0&&u===void 0)continue;l||(l=0),u||(u=0),l===0||u===0||Vm(l)===Vm(u)?(e[a]=Math.max(de(Im(l),Im(u),r),0),(Qt.test(u)||Qt.test(l))&&(e[a]+="%")):e[a]=u}(t.rotate||n.rotate)&&(e.rotate=de(t.rotate||0,n.rotate||0,r))}function Um(e,t){return e[t]!==void 0?e[t]:e.borderRadius}const DE=i1(0,.5,Px),IE=i1(.5,.95,ve);function i1(e,t,n){return r=>r<e?0:r>t?1:n(Ho(e,t,r))}function Bm(e,t){e.min=t.min,e.max=t.max}function ht(e,t){Bm(e.x,t.x),Bm(e.y,t.y)}function Hm(e,t,n,r,i){return e-=t,e=dl(e,1/n,r),i!==void 0&&(e=dl(e,1/i,r)),e}function VE(e,t=0,n=1,r=.5,i,o=e,s=e){if(Qt.test(t)&&(t=parseFloat(t),t=de(s.min,s.max,t/100)-s.min),typeof t!="number")return;let a=de(o.min,o.max,r);e===o&&(a-=t),e.min=Hm(e.min,t,n,a,i),e.max=Hm(e.max,t,n,a,i)}function Wm(e,t,[n,r,i],o,s){VE(e,t[n],t[r],t[i],t.scale,o,s)}const UE=["x","scaleX","originX"],BE=["y","scaleY","originY"];function Qm(e,t,n,r){Wm(e.x,t,UE,n?n.x:void 0,r?r.x:void 0),Wm(e.y,t,BE,n?n.y:void 0,r?r.y:void 0)}function qm(e){return e.translate===0&&e.scale===1}function o1(e){return qm(e.x)&&qm(e.y)}function HE(e,t){return e.x.min===t.x.min&&e.x.max===t.x.max&&e.y.min===t.y.min&&e.y.max===t.y.max}function s1(e,t){return Math.round(e.x.min)===Math.round(t.x.min)&&Math.round(e.x.max)===Math.round(t.x.max)&&Math.round(e.y.min)===Math.round(t.y.min)&&Math.round(e.y.max)===Math.round(t.y.max)}function Km(e){return lt(e.x)/lt(e.y)}class WE{constructor(){this.members=[]}add(t){dp(this.members,t),t.scheduleRender()}remove(t){if(fp(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(t){const n=this.members.findIndex(i=>t===i);if(n===0)return!1;let r;for(let i=n;i>=0;i--){const o=this.members[i];if(o.isPresent!==!1){r=o;break}}return r?(this.promote(r),!0):!1}promote(t,n){const r=this.lead;if(t!==r&&(this.prevLead=r,this.lead=t,t.show(),r)){r.instance&&r.scheduleRender(),t.scheduleRender(),t.resumeFrom=r,n&&(t.resumeFrom.preserveOpacity=!0),r.snapshot&&(t.snapshot=r.snapshot,t.snapshot.latestValues=r.animationValues||r.latestValues),t.root&&t.root.isUpdating&&(t.isLayoutDirty=!0);const{crossfade:i}=t.options;i===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(t=>{const{options:n,resumingFrom:r}=t;n.onExitComplete&&n.onExitComplete(),r&&r.options.onExitComplete&&r.options.onExitComplete()})}scheduleRender(){this.members.forEach(t=>{t.instance&&t.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function Gm(e,t,n){let r="";const i=e.x.translate/t.x,o=e.y.translate/t.y;if((i||o)&&(r=`translate3d(${i}px, ${o}px, 0) `),(t.x!==1||t.y!==1)&&(r+=`scale(${1/t.x}, ${1/t.y}) `),n){const{rotate:l,rotateX:u,rotateY:d}=n;l&&(r+=`rotate(${l}deg) `),u&&(r+=`rotateX(${u}deg) `),d&&(r+=`rotateY(${d}deg) `)}const s=e.x.scale*t.x,a=e.y.scale*t.y;return(s!==1||a!==1)&&(r+=`scale(${s}, ${a})`),r||"none"}const QE=(e,t)=>e.depth-t.depth;class qE{constructor(){this.children=[],this.isDirty=!1}add(t){dp(this.children,t),this.isDirty=!0}remove(t){fp(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(QE),this.isDirty=!1,this.children.forEach(t)}}function KE(e,t){const n=performance.now(),r=({timestamp:i})=>{const o=i-n;o>=t&&(fn(r),e(o-t))};return te.read(r,!0),()=>fn(r)}function GE(e){window.MotionDebug&&window.MotionDebug.record(e)}function YE(e){return e instanceof SVGElement&&e.tagName!=="svg"}function XE(e,t,n){const r=rt(e)?e:yi(e);return r.start(up("",r,t,n)),r.animation}const Ym=["","X","Y","Z"],ZE={visibility:"hidden"},Xm=1e3;let JE=0;const ir={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0};function a1({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:r,resetTransform:i}){return class{constructor(s={},a=t==null?void 0:t()){this.id=JE++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,ir.totalNodes=ir.resolvedTargetDeltas=ir.recalculatedProjection=0,this.nodes.forEach(nT),this.nodes.forEach(aT),this.nodes.forEach(lT),this.nodes.forEach(rT),GE(ir)},this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=s,this.root=a?a.root||a:this,this.path=a?[...a.path,a]:[],this.parent=a,this.depth=a?a.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new qE)}addEventListener(s,a){return this.eventHandlers.has(s)||this.eventHandlers.set(s,new pp),this.eventHandlers.get(s).add(a)}notifyListeners(s,...a){const l=this.eventHandlers.get(s);l&&l.notify(...a)}hasListeners(s){return this.eventHandlers.has(s)}mount(s,a=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=YE(s),this.instance=s;const{layoutId:l,layout:u,visualElement:d}=this.options;if(d&&!d.current&&d.mount(s),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),a&&(u||l)&&(this.isLayoutDirty=!0),e){let f;const p=()=>this.root.updateBlockedByResize=!1;e(s,()=>{this.root.updateBlockedByResize=!0,f&&f(),f=KE(p,250),ha.hasAnimatedSinceResize&&(ha.hasAnimatedSinceResize=!1,this.nodes.forEach(Jm))})}l&&this.root.registerSharedNode(l,this),this.options.animate!==!1&&d&&(l||u)&&this.addEventListener("didUpdate",({delta:f,hasLayoutChanged:p,hasRelativeTargetChanged:m,layout:y})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const w=this.options.transition||d.getDefaultTransition()||pT,{onLayoutAnimationStart:k,onLayoutAnimationComplete:h}=d.getProps(),g=!this.targetLayout||!s1(this.targetLayout,y)||m,v=!p&&m;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||v||p&&(g||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(f,v);const b={...cp(w,"layout"),onPlay:k,onComplete:h};(d.shouldReduceMotion||this.options.layoutRoot)&&(b.delay=0,b.type=!1),this.startAnimation(b)}else p||Jm(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=y})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const s=this.getStack();s&&s.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,fn(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(cT),this.animationId++)}getTransformTemplate(){const{visualElement:s}=this.options;return s&&s.getProps().transformTemplate}willUpdate(s=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let d=0;d<this.path.length;d++){const f=this.path[d];f.shouldResetTransform=!0,f.updateScroll("snapshot"),f.options.layoutRoot&&f.willUpdate(!1)}const{layoutId:a,layout:l}=this.options;if(a===void 0&&!l)return;const u=this.getTransformTemplate();this.prevTransformTemplateValue=u?u(this.latestValues,""):void 0,this.updateSnapshot(),s&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(Zm);return}this.isUpdating||this.nodes.forEach(oT),this.isUpdating=!1,this.nodes.forEach(sT),this.nodes.forEach(eT),this.nodes.forEach(tT),this.clearAllSnapshots();const a=performance.now();Ne.delta=Bn(0,1e3/60,a-Ne.timestamp),Ne.timestamp=a,Ne.isProcessing=!0,zc.update.process(Ne),zc.preRender.process(Ne),zc.render.process(Ne),Ne.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,queueMicrotask(()=>this.update()))}clearAllSnapshots(){this.nodes.forEach(iT),this.sharedNodes.forEach(uT)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,te.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){te.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const s=this.layout;this.layout=this.measure(!1),this.layoutCorrected=we(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:a}=this.options;a&&a.notify("LayoutMeasure",this.layout.layoutBox,s?s.layoutBox:void 0)}updateScroll(s="measure"){let a=!!(this.options.layoutScroll&&this.instance);this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===s&&(a=!1),a&&(this.scroll={animationId:this.root.animationId,phase:s,isRoot:r(this.instance),offset:n(this.instance)})}resetTransform(){if(!i)return;const s=this.isLayoutDirty||this.shouldResetTransform,a=this.projectionDelta&&!o1(this.projectionDelta),l=this.getTransformTemplate(),u=l?l(this.latestValues,""):void 0,d=u!==this.prevTransformTemplateValue;s&&(a||rr(this.latestValues)||d)&&(i(this.instance,u),this.shouldResetTransform=!1,this.scheduleRender())}measure(s=!0){const a=this.measurePageBox();let l=this.removeElementScroll(a);return s&&(l=this.removeTransform(l)),hT(l),{animationId:this.root.animationId,measuredBox:a,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:s}=this.options;if(!s)return we();const a=s.measureViewportBox(),{scroll:l}=this.root;return l&&(Sn(a.x,l.offset.x),Sn(a.y,l.offset.y)),a}removeElementScroll(s){const a=we();ht(a,s);for(let l=0;l<this.path.length;l++){const u=this.path[l],{scroll:d,options:f}=u;if(u!==this.root&&d&&f.layoutScroll){if(d.isRoot){ht(a,s);const{scroll:p}=this.root;p&&(Sn(a.x,-p.offset.x),Sn(a.y,-p.offset.y))}Sn(a.x,d.offset.x),Sn(a.y,d.offset.y)}}return a}applyTransform(s,a=!1){const l=we();ht(l,s);for(let u=0;u<this.path.length;u++){const d=this.path[u];!a&&d.options.layoutScroll&&d.scroll&&d!==d.root&&ri(l,{x:-d.scroll.offset.x,y:-d.scroll.offset.y}),rr(d.latestValues)&&ri(l,d.latestValues)}return rr(this.latestValues)&&ri(l,this.latestValues),l}removeTransform(s){const a=we();ht(a,s);for(let l=0;l<this.path.length;l++){const u=this.path[l];if(!u.instance||!rr(u.latestValues))continue;Sd(u.latestValues)&&u.updateSnapshot();const d=we(),f=u.measurePageBox();ht(d,f),Qm(a,u.latestValues,u.snapshot?u.snapshot.layoutBox:void 0,d)}return rr(this.latestValues)&&Qm(a,this.latestValues),a}setTargetDelta(s){this.targetDelta=s,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(s){this.options={...this.options,...s,crossfade:s.crossfade!==void 0?s.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Ne.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(s=!1){var a;const l=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=l.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=l.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=l.isSharedProjectionDirty);const u=!!this.resumingFrom||this!==l;if(!(s||u&&this.isSharedProjectionDirty||this.isProjectionDirty||!((a=this.parent)===null||a===void 0)&&a.isProjectionDirty||this.attemptToResolveRelativeTarget))return;const{layout:f,layoutId:p}=this.options;if(!(!this.layout||!(f||p))){if(this.resolvedRelativeTargetAt=Ne.timestamp,!this.targetDelta&&!this.relativeTarget){const m=this.getClosestProjectingParent();m&&m.layout&&this.animationProgress!==1?(this.relativeParent=m,this.forceRelativeParentToResolveTarget(),this.relativeTarget=we(),this.relativeTargetOrigin=we(),bo(this.relativeTargetOrigin,this.layout.layoutBox,m.layout.layoutBox),ht(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=we(),this.targetWithTransforms=we()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),mE(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):ht(this.target,this.layout.layoutBox),Jx(this.target,this.targetDelta)):ht(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const m=this.getClosestProjectingParent();m&&!!m.resumingFrom==!!this.resumingFrom&&!m.options.layoutScroll&&m.target&&this.animationProgress!==1?(this.relativeParent=m,this.forceRelativeParentToResolveTarget(),this.relativeTarget=we(),this.relativeTargetOrigin=we(),bo(this.relativeTargetOrigin,this.target,m.target),ht(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}ir.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||Sd(this.parent.latestValues)||Zx(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var s;const a=this.getLead(),l=!!this.resumingFrom||this!==a;let u=!0;if((this.isProjectionDirty||!((s=this.parent)===null||s===void 0)&&s.isProjectionDirty)&&(u=!1),l&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(u=!1),this.resolvedRelativeTargetAt===Ne.timestamp&&(u=!1),u)return;const{layout:d,layoutId:f}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(d||f))return;ht(this.layoutCorrected,this.layout.layoutBox);const p=this.treeScale.x,m=this.treeScale.y;kE(this.layoutCorrected,this.treeScale,this.path,l),a.layout&&!a.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(a.target=a.layout.layoutBox);const{target:y}=a;if(!y){this.projectionTransform&&(this.projectionDelta=ni(),this.projectionTransform="none",this.scheduleRender());return}this.projectionDelta||(this.projectionDelta=ni(),this.projectionDeltaWithTransform=ni());const w=this.projectionTransform;wo(this.projectionDelta,this.layoutCorrected,y,this.latestValues),this.projectionTransform=Gm(this.projectionDelta,this.treeScale),(this.projectionTransform!==w||this.treeScale.x!==p||this.treeScale.y!==m)&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",y)),ir.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(s=!0){if(this.options.scheduleRender&&this.options.scheduleRender(),s){const a=this.getStack();a&&a.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}setAnimationOrigin(s,a=!1){const l=this.snapshot,u=l?l.latestValues:{},d={...this.latestValues},f=ni();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!a;const p=we(),m=l?l.source:void 0,y=this.layout?this.layout.source:void 0,w=m!==y,k=this.getStack(),h=!k||k.members.length<=1,g=!!(w&&!h&&this.options.crossfade===!0&&!this.path.some(fT));this.animationProgress=0;let v;this.mixTargetDelta=b=>{const S=b/1e3;eg(f.x,s.x,S),eg(f.y,s.y,S),this.setTargetDelta(f),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(bo(p,this.layout.layoutBox,this.relativeParent.layout.layoutBox),dT(this.relativeTarget,this.relativeTargetOrigin,p,S),v&&HE(this.relativeTarget,v)&&(this.isProjectionDirty=!1),v||(v=we()),ht(v,this.relativeTarget)),w&&(this.animationValues=d,_E(d,u,this.latestValues,S,g,h)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=S},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(s){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(fn(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=te.update(()=>{ha.hasAnimatedSinceResize=!0,this.currentAnimation=XE(0,Xm,{...s,onUpdate:a=>{this.mixTargetDelta(a),s.onUpdate&&s.onUpdate(a)},onComplete:()=>{s.onComplete&&s.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const s=this.getStack();s&&s.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(Xm),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const s=this.getLead();let{targetWithTransforms:a,target:l,layout:u,latestValues:d}=s;if(!(!a||!l||!u)){if(this!==s&&this.layout&&u&&l1(this.options.animationType,this.layout.layoutBox,u.layoutBox)){l=this.target||we();const f=lt(this.layout.layoutBox.x);l.x.min=s.target.x.min,l.x.max=l.x.min+f;const p=lt(this.layout.layoutBox.y);l.y.min=s.target.y.min,l.y.max=l.y.min+p}ht(a,l),ri(a,d),wo(this.projectionDeltaWithTransform,this.layoutCorrected,a,d)}}registerSharedNode(s,a){this.sharedNodes.has(s)||this.sharedNodes.set(s,new WE),this.sharedNodes.get(s).add(a);const u=a.options.initialPromotionConfig;a.promote({transition:u?u.transition:void 0,preserveFollowOpacity:u&&u.shouldPreserveFollowOpacity?u.shouldPreserveFollowOpacity(a):void 0})}isLead(){const s=this.getStack();return s?s.lead===this:!0}getLead(){var s;const{layoutId:a}=this.options;return a?((s=this.getStack())===null||s===void 0?void 0:s.lead)||this:this}getPrevLead(){var s;const{layoutId:a}=this.options;return a?(s=this.getStack())===null||s===void 0?void 0:s.prevLead:void 0}getStack(){const{layoutId:s}=this.options;if(s)return this.root.sharedNodes.get(s)}promote({needsReset:s,transition:a,preserveFollowOpacity:l}={}){const u=this.getStack();u&&u.promote(this,l),s&&(this.projectionDelta=void 0,this.needsReset=!0),a&&this.setOptions({transition:a})}relegate(){const s=this.getStack();return s?s.relegate(this):!1}resetRotation(){const{visualElement:s}=this.options;if(!s)return;let a=!1;const{latestValues:l}=s;if((l.rotate||l.rotateX||l.rotateY||l.rotateZ)&&(a=!0),!a)return;const u={};for(let d=0;d<Ym.length;d++){const f="rotate"+Ym[d];l[f]&&(u[f]=l[f],s.setStaticValue(f,0))}s.render();for(const d in u)s.setStaticValue(d,u[d]);s.scheduleRender()}getProjectionStyles(s){var a,l;if(!this.instance||this.isSVG)return;if(!this.isVisible)return ZE;const u={visibility:""},d=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,u.opacity="",u.pointerEvents=pa(s==null?void 0:s.pointerEvents)||"",u.transform=d?d(this.latestValues,""):"none",u;const f=this.getLead();if(!this.projectionDelta||!this.layout||!f.target){const w={};return this.options.layoutId&&(w.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,w.pointerEvents=pa(s==null?void 0:s.pointerEvents)||""),this.hasProjected&&!rr(this.latestValues)&&(w.transform=d?d({},""):"none",this.hasProjected=!1),w}const p=f.animationValues||f.latestValues;this.applyTransformsToTarget(),u.transform=Gm(this.projectionDeltaWithTransform,this.treeScale,p),d&&(u.transform=d(p,u.transform));const{x:m,y}=this.projectionDelta;u.transformOrigin=`${m.origin*100}% ${y.origin*100}% 0`,f.animationValues?u.opacity=f===this?(l=(a=p.opacity)!==null&&a!==void 0?a:this.latestValues.opacity)!==null&&l!==void 0?l:1:this.preserveOpacity?this.latestValues.opacity:p.opacityExit:u.opacity=f===this?p.opacity!==void 0?p.opacity:"":p.opacityExit!==void 0?p.opacityExit:0;for(const w in il){if(p[w]===void 0)continue;const{correct:k,applyTo:h}=il[w],g=u.transform==="none"?p[w]:k(p[w],f);if(h){const v=h.length;for(let b=0;b<v;b++)u[h[b]]=g}else u[w]=g}return this.options.layoutId&&(u.pointerEvents=f===this?pa(s==null?void 0:s.pointerEvents)||"":"none"),u}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(s=>{var a;return(a=s.currentAnimation)===null||a===void 0?void 0:a.stop()}),this.root.nodes.forEach(Zm),this.root.sharedNodes.clear()}}}function eT(e){e.updateLayout()}function tT(e){var t;const n=((t=e.resumeFrom)===null||t===void 0?void 0:t.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&n&&e.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:i}=e.layout,{animationType:o}=e.options,s=n.source!==e.layout.source;o==="size"?gt(f=>{const p=s?n.measuredBox[f]:n.layoutBox[f],m=lt(p);p.min=r[f].min,p.max=p.min+m}):l1(o,n.layoutBox,r)&&gt(f=>{const p=s?n.measuredBox[f]:n.layoutBox[f],m=lt(r[f]);p.max=p.min+m,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[f].max=e.relativeTarget[f].min+m)});const a=ni();wo(a,r,n.layoutBox);const l=ni();s?wo(l,e.applyTransform(i,!0),n.measuredBox):wo(l,r,n.layoutBox);const u=!o1(a);let d=!1;if(!e.resumeFrom){const f=e.getClosestProjectingParent();if(f&&!f.resumeFrom){const{snapshot:p,layout:m}=f;if(p&&m){const y=we();bo(y,n.layoutBox,p.layoutBox);const w=we();bo(w,r,m.layoutBox),s1(y,w)||(d=!0),f.options.layoutRoot&&(e.relativeTarget=w,e.relativeTargetOrigin=y,e.relativeParent=f)}}}e.notifyListeners("didUpdate",{layout:r,snapshot:n,delta:l,layoutDelta:a,hasLayoutChanged:u,hasRelativeTargetChanged:d})}else if(e.isLead()){const{onExitComplete:r}=e.options;r&&r()}e.options.transition=void 0}function nT(e){ir.totalNodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function rT(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function iT(e){e.clearSnapshot()}function Zm(e){e.clearMeasurements()}function oT(e){e.isLayoutDirty=!1}function sT(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function Jm(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function aT(e){e.resolveTargetDelta()}function lT(e){e.calcProjection()}function cT(e){e.resetRotation()}function uT(e){e.removeLeadSnapshot()}function eg(e,t,n){e.translate=de(t.translate,0,n),e.scale=de(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function tg(e,t,n,r){e.min=de(t.min,n.min,r),e.max=de(t.max,n.max,r)}function dT(e,t,n,r){tg(e.x,t.x,n.x,r),tg(e.y,t.y,n.y,r)}function fT(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const pT={duration:.45,ease:[.4,0,.1,1]},ng=e=>typeof navigator<"u"&&navigator.userAgent.toLowerCase().includes(e),rg=ng("applewebkit/")&&!ng("chrome/")?Math.round:ve;function ig(e){e.min=rg(e.min),e.max=rg(e.max)}function hT(e){ig(e.x),ig(e.y)}function l1(e,t,n){return e==="position"||e==="preserve-aspect"&&!wd(Km(t),Km(n),.2)}const mT=a1({attachResizeListener:(e,t)=>nn(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),qc={current:void 0},c1=a1({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!qc.current){const e=new mT({});e.mount(window),e.setOptions({layoutScroll:!0}),qc.current=e}return qc.current},resetTransform:(e,t)=>{e.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),gT={pan:{Feature:OE},drag:{Feature:$E,ProjectionNode:c1,MeasureLayout:n1}},vT=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;function yT(e){const t=vT.exec(e);if(!t)return[,];const[,n,r]=t;return[n,r]}function kd(e,t,n=1){const[r,i]=yT(e);if(!r)return;const o=window.getComputedStyle(t).getPropertyValue(r);if(o){const s=o.trim();return Wx(s)?parseFloat(s):s}else return pd(i)?kd(i,t,n+1):i}function xT(e,{...t},n){const r=e.current;if(!(r instanceof Element))return{target:t,transitionEnd:n};n&&(n={...n}),e.values.forEach(i=>{const o=i.get();if(!pd(o))return;const s=kd(o,r);s&&i.set(s)});for(const i in t){const o=t[i];if(!pd(o))continue;const s=kd(o,r);s&&(t[i]=s,n||(n={}),n[i]===void 0&&(n[i]=o))}return{target:t,transitionEnd:n}}const wT=new Set(["width","height","top","left","right","bottom","x","y","translateX","translateY"]),u1=e=>wT.has(e),bT=e=>Object.keys(e).some(u1),og=e=>e===Or||e===N,sg=(e,t)=>parseFloat(e.split(", ")[t]),ag=(e,t)=>(n,{transform:r})=>{if(r==="none"||!r)return 0;const i=r.match(/^matrix3d\((.+)\)$/);if(i)return sg(i[1],t);{const o=r.match(/^matrix\((.+)\)$/);return o?sg(o[1],e):0}},ST=new Set(["x","y","z"]),jT=ss.filter(e=>!ST.has(e));function kT(e){const t=[];return jT.forEach(n=>{const r=e.getValue(n);r!==void 0&&(t.push([n,r.get()]),r.set(n.startsWith("scale")?1:0))}),t.length&&e.render(),t}const xi={width:({x:e},{paddingLeft:t="0",paddingRight:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),height:({y:e},{paddingTop:t="0",paddingBottom:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:ag(4,13),y:ag(5,14)};xi.translateX=xi.x;xi.translateY=xi.y;const CT=(e,t,n)=>{const r=t.measureViewportBox(),i=t.current,o=getComputedStyle(i),{display:s}=o,a={};s==="none"&&t.setStaticValue("display",e.display||"block"),n.forEach(u=>{a[u]=xi[u](r,o)}),t.render();const l=t.measureViewportBox();return n.forEach(u=>{const d=t.getValue(u);d&&d.jump(a[u]),e[u]=xi[u](l,o)}),e},PT=(e,t,n={},r={})=>{t={...t},r={...r};const i=Object.keys(t).filter(u1);let o=[],s=!1;const a=[];if(i.forEach(l=>{const u=e.getValue(l);if(!e.hasValue(l))return;let d=n[l],f=Ui(d);const p=t[l];let m;if(sl(p)){const y=p.length,w=p[0]===null?1:0;d=p[w],f=Ui(d);for(let k=w;k<y&&p[k]!==null;k++)m?ip(Ui(p[k])===m):m=Ui(p[k])}else m=Ui(p);if(f!==m)if(og(f)&&og(m)){const y=u.get();typeof y=="string"&&u.set(parseFloat(y)),typeof p=="string"?t[l]=parseFloat(p):Array.isArray(p)&&m===N&&(t[l]=p.map(parseFloat))}else f!=null&&f.transform&&(m!=null&&m.transform)&&(d===0||p===0)?d===0?u.set(m.transform(d)):t[l]=f.transform(p):(s||(o=kT(e),s=!0),a.push(l),r[l]=r[l]!==void 0?r[l]:t[l],u.jump(p))}),a.length){const l=a.indexOf("height")>=0?window.pageYOffset:null,u=CT(t,e,a);return o.length&&o.forEach(([d,f])=>{e.getValue(d).set(f)}),e.render(),Ul&&l!==null&&window.scrollTo({top:l}),{target:u,transitionEnd:r}}else return{target:t,transitionEnd:r}};function ET(e,t,n,r){return bT(t)?PT(e,t,n,r):{target:t,transitionEnd:r}}const TT=(e,t,n,r)=>{const i=xT(e,t,r);return t=i.target,r=i.transitionEnd,ET(e,t,n,r)},Cd={current:null},d1={current:!1};function RT(){if(d1.current=!0,!!Ul)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>Cd.current=e.matches;e.addListener(t),t()}else Cd.current=!1}function AT(e,t,n){const{willChange:r}=t;for(const i in t){const o=t[i],s=n[i];if(rt(o))e.addValue(i,o),ul(r)&&r.add(i);else if(rt(s))e.addValue(i,yi(o,{owner:e})),ul(r)&&r.remove(i);else if(s!==o)if(e.hasValue(i)){const a=e.getValue(i);!a.hasAnimated&&a.set(o)}else{const a=e.getStaticValue(i);e.addValue(i,yi(a!==void 0?a:o,{owner:e}))}}for(const i in n)t[i]===void 0&&e.removeValue(i);return t}const lg=new WeakMap,f1=Object.keys(Bo),$T=f1.length,cg=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"],OT=Gf.length;class LT{constructor({parent:t,props:n,presenceContext:r,reducedMotionConfig:i,visualState:o},s={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.scheduleRender=()=>te.render(this.render,!1,!0);const{latestValues:a,renderState:l}=o;this.latestValues=a,this.baseTarget={...a},this.initialValues=n.initial?{...a}:{},this.renderState=l,this.parent=t,this.props=n,this.presenceContext=r,this.depth=t?t.depth+1:0,this.reducedMotionConfig=i,this.options=s,this.isControllingVariants=Hl(n),this.isVariantNode=Yy(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:u,...d}=this.scrapeMotionValuesFromProps(n,{});for(const f in d){const p=d[f];a[f]!==void 0&&rt(p)&&(p.set(a[f],!1),ul(u)&&u.add(f))}}scrapeMotionValuesFromProps(t,n){return{}}mount(t){this.current=t,lg.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,r)=>this.bindToMotionValue(r,n)),d1.current||RT(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:Cd.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){lg.delete(this.current),this.projection&&this.projection.unmount(),fn(this.notifyUpdate),fn(this.render),this.valueSubscriptions.forEach(t=>t()),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const t in this.events)this.events[t].clear();for(const t in this.features)this.features[t].unmount();this.current=null}bindToMotionValue(t,n){const r=$r.has(t),i=n.on("change",s=>{this.latestValues[t]=s,this.props.onUpdate&&te.update(this.notifyUpdate,!1,!0),r&&this.projection&&(this.projection.isTransformDirty=!0)}),o=n.on("renderRequest",this.scheduleRender);this.valueSubscriptions.set(t,()=>{i(),o()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}loadFeatures({children:t,...n},r,i,o){let s,a;for(let l=0;l<$T;l++){const u=f1[l],{isEnabled:d,Feature:f,ProjectionNode:p,MeasureLayout:m}=Bo[u];p&&(s=p),d(n)&&(!this.features[u]&&f&&(this.features[u]=new f(this)),m&&(a=m))}if((this.type==="html"||this.type==="svg")&&!this.projection&&s){this.projection=new s(this.latestValues,this.parent&&this.parent.projection);const{layoutId:l,layout:u,drag:d,dragConstraints:f,layoutScroll:p,layoutRoot:m}=n;this.projection.setOptions({layoutId:l,layout:u,alwaysMeasureLayout:!!d||f&&ei(f),visualElement:this,scheduleRender:()=>this.scheduleRender(),animationType:typeof u=="string"?u:"both",initialPromotionConfig:o,layoutScroll:p,layoutRoot:m})}return a}updateFeatures(){for(const t in this.features){const n=this.features[t];n.isMounted?n.update():(n.mount(),n.isMounted=!0)}}triggerBuild(){this.build(this.renderState,this.latestValues,this.options,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):we()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,n){this.latestValues[t]=n}makeTargetAnimatable(t,n=!0){return this.makeTargetAnimatableFromInstance(t,this.props,n)}update(t,n){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let r=0;r<cg.length;r++){const i=cg[r];this.propEventSubscriptions[i]&&(this.propEventSubscriptions[i](),delete this.propEventSubscriptions[i]);const o=t["on"+i];o&&(this.propEventSubscriptions[i]=this.on(i,o))}this.prevMotionValues=AT(this,this.scrapeMotionValuesFromProps(t,this.prevProps),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}getVariantContext(t=!1){if(t)return this.parent?this.parent.getVariantContext():void 0;if(!this.isControllingVariants){const r=this.parent?this.parent.getVariantContext()||{}:{};return this.props.initial!==void 0&&(r.initial=this.props.initial),r}const n={};for(let r=0;r<OT;r++){const i=Gf[r],o=this.props[i];(Uo(o)||o===!1)&&(n[i]=o)}return n}addVariantChild(t){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(t),()=>n.variantChildren.delete(t)}addValue(t,n){n!==this.values.get(t)&&(this.removeValue(t),this.bindToMotionValue(t,n)),this.values.set(t,n),this.latestValues[t]=n.get()}removeValue(t){this.values.delete(t);const n=this.valueSubscriptions.get(t);n&&(n(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,n){if(this.props.values&&this.props.values[t])return this.props.values[t];let r=this.values.get(t);return r===void 0&&n!==void 0&&(r=yi(n,{owner:this}),this.addValue(t,r)),r}readValue(t){var n;return this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:(n=this.getBaseTargetFromProps(this.props,t))!==null&&n!==void 0?n:this.readValueFromInstance(this.current,t,this.options)}setBaseTarget(t,n){this.baseTarget[t]=n}getBaseTarget(t){var n;const{initial:r}=this.props,i=typeof r=="string"||typeof r=="object"?(n=rp(this.props,r))===null||n===void 0?void 0:n[t]:void 0;if(r&&i!==void 0)return i;const o=this.getBaseTargetFromProps(this.props,t);return o!==void 0&&!rt(o)?o:this.initialValues[t]!==void 0&&i===void 0?void 0:this.baseTarget[t]}on(t,n){return this.events[t]||(this.events[t]=new pp),this.events[t].add(n)}notify(t,...n){this.events[t]&&this.events[t].notify(...n)}}class p1 extends LT{sortInstanceNodePosition(t,n){return t.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(t,n){return t.style?t.style[n]:void 0}removeValueFromRenderState(t,{vars:n,style:r}){delete n[t],delete r[t]}makeTargetAnimatableFromInstance({transition:t,transitionEnd:n,...r},{transformValues:i},o){let s=YP(r,t||{},this);if(i&&(n&&(n=i(n)),r&&(r=i(r)),s&&(s=i(s))),o){KP(this,r,s);const a=TT(this,r,s,n);n=a.transitionEnd,r=a.target}return{transition:t,transitionEnd:n,...r}}}function FT(e){return window.getComputedStyle(e)}class MT extends p1{constructor(){super(...arguments),this.type="html"}readValueFromInstance(t,n){if($r.has(n)){const r=lp(n);return r&&r.default||0}else{const r=FT(t),i=(ex(n)?r.getPropertyValue(n):r[n])||0;return typeof i=="string"?i.trim():i}}measureInstanceViewportBox(t,{transformPagePoint:n}){return e1(t,n)}build(t,n,r,i){Zf(t,n,r,i.transformTemplate)}scrapeMotionValuesFromProps(t,n){return np(t,n)}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;rt(t)&&(this.childSubscription=t.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}renderInstance(t,n,r,i){sx(t,n,r,i)}}class zT extends p1{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1}getBaseTargetFromProps(t,n){return t[n]}readValueFromInstance(t,n){if($r.has(n)){const r=lp(n);return r&&r.default||0}return n=ax.has(n)?n:qf(n),t.getAttribute(n)}measureInstanceViewportBox(){return we()}scrapeMotionValuesFromProps(t,n){return cx(t,n)}build(t,n,r,i){ep(t,n,r,this.isSVGTag,i.transformTemplate)}renderInstance(t,n,r,i){lx(t,n,r,i)}mount(t){this.isSVGTag=tp(t.tagName),super.mount(t)}}const NT=(e,t)=>Xf(e)?new zT(t,{enableHardwareAcceleration:!1}):new MT(t,{enableHardwareAcceleration:!0}),_T={layout:{ProjectionNode:c1,MeasureLayout:n1}},DT={...dE,...$C,...gT,..._T},_=Ik((e,t)=>yC(e,t,DT,NT));function h1(){const e=j.useRef(!1);return Qf(()=>(e.current=!0,()=>{e.current=!1}),[]),e}function IT(){const e=h1(),[t,n]=j.useState(0),r=j.useCallback(()=>{e.current&&n(t+1)},[t]);return[j.useCallback(()=>te.postRender(r),[r]),t]}class VT extends j.Component{getSnapshotBeforeUpdate(t){const n=this.props.childRef.current;if(n&&t.isPresent&&!this.props.isPresent){const r=this.props.sizeRef.current;r.height=n.offsetHeight||0,r.width=n.offsetWidth||0,r.top=n.offsetTop,r.left=n.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function UT({children:e,isPresent:t}){const n=j.useId(),r=j.useRef(null),i=j.useRef({width:0,height:0,top:0,left:0});return j.useInsertionEffect(()=>{const{width:o,height:s,top:a,left:l}=i.current;if(t||!r.current||!o||!s)return;r.current.dataset.motionPopId=n;const u=document.createElement("style");return document.head.appendChild(u),u.sheet&&u.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${o}px !important;
            height: ${s}px !important;
            top: ${a}px !important;
            left: ${l}px !important;
          }
        `),()=>{document.head.removeChild(u)}},[t]),j.createElement(VT,{isPresent:t,childRef:r,sizeRef:i},j.cloneElement(e,{ref:r}))}const Kc=({children:e,initial:t,isPresent:n,onExitComplete:r,custom:i,presenceAffectsLayout:o,mode:s})=>{const a=ux(BT),l=j.useId(),u=j.useMemo(()=>({id:l,initial:t,isPresent:n,custom:i,onExitComplete:d=>{a.set(d,!0);for(const f of a.values())if(!f)return;r&&r()},register:d=>(a.set(d,!1),()=>a.delete(d))}),o?void 0:[n]);return j.useMemo(()=>{a.forEach((d,f)=>a.set(f,!1))},[n]),j.useEffect(()=>{!n&&!a.size&&r&&r()},[n]),s==="popLayout"&&(e=j.createElement(UT,{isPresent:n},e)),j.createElement(Vl.Provider,{value:u},e)};function BT(){return new Map}function HT(e){return j.useEffect(()=>()=>e(),[])}const or=e=>e.key||"";function WT(e,t){e.forEach(n=>{const r=or(n);t.set(r,n)})}function QT(e){const t=[];return j.Children.forEach(e,n=>{j.isValidElement(n)&&t.push(n)}),t}const Wn=({children:e,custom:t,initial:n=!0,onExitComplete:r,exitBeforeEnter:i,presenceAffectsLayout:o=!0,mode:s="sync"})=>{const a=j.useContext(Yf).forceRender||IT()[0],l=h1(),u=QT(e);let d=u;const f=j.useRef(new Map).current,p=j.useRef(d),m=j.useRef(new Map).current,y=j.useRef(!0);if(Qf(()=>{y.current=!1,WT(u,m),p.current=d}),HT(()=>{y.current=!0,m.clear(),f.clear()}),y.current)return j.createElement(j.Fragment,null,d.map(g=>j.createElement(Kc,{key:or(g),isPresent:!0,initial:n?void 0:!1,presenceAffectsLayout:o,mode:s},g)));d=[...d];const w=p.current.map(or),k=u.map(or),h=w.length;for(let g=0;g<h;g++){const v=w[g];k.indexOf(v)===-1&&!f.has(v)&&f.set(v,void 0)}return s==="wait"&&f.size&&(d=[]),f.forEach((g,v)=>{if(k.indexOf(v)!==-1)return;const b=m.get(v);if(!b)return;const S=w.indexOf(v);let C=g;if(!C){const P=()=>{f.delete(v);const T=Array.from(m.keys()).filter(L=>!k.includes(L));if(T.forEach(L=>m.delete(L)),p.current=u.filter(L=>{const F=or(L);return F===v||T.includes(F)}),!f.size){if(l.current===!1)return;a(),r&&r()}};C=j.createElement(Kc,{key:or(b),isPresent:!1,onExitComplete:P,custom:t,presenceAffectsLayout:o,mode:s},b),f.set(v,C)}d.splice(S,0,C)}),d=d.map(g=>{const v=g.key;return f.has(v)?g:j.createElement(Kc,{key:or(g),isPresent:!0,presenceAffectsLayout:o,mode:s},g)}),j.createElement(j.Fragment,null,f.size?d:d.map(g=>j.cloneElement(g)))};var Ve=function(){return Ve=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},Ve.apply(this,arguments)};function Wo(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}var oe="-ms-",So="-moz-",Y="-webkit-",m1="comm",Kl="rule",hp="decl",qT="@import",g1="@keyframes",KT="@layer",v1=Math.abs,mp=String.fromCharCode,Pd=Object.assign;function GT(e,t){return Re(e,0)^45?(((t<<2^Re(e,0))<<2^Re(e,1))<<2^Re(e,2))<<2^Re(e,3):0}function y1(e){return e.trim()}function Xt(e,t){return(e=t.exec(e))?e[0]:e}function U(e,t,n){return e.replace(t,n)}function ma(e,t,n){return e.indexOf(t,n)}function Re(e,t){return e.charCodeAt(t)|0}function wi(e,t,n){return e.slice(t,n)}function Ut(e){return e.length}function x1(e){return e.length}function oo(e,t){return t.push(e),e}function YT(e,t){return e.map(t).join("")}function ug(e,t){return e.filter(function(n){return!Xt(n,t)})}var Gl=1,bi=1,w1=0,Ct=0,Se=0,Ai="";function Yl(e,t,n,r,i,o,s,a){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:Gl,column:bi,length:s,return:"",siblings:a}}function yn(e,t){return Pd(Yl("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Mr(e){for(;e.root;)e=yn(e.root,{children:[e]});oo(e,e.siblings)}function XT(){return Se}function ZT(){return Se=Ct>0?Re(Ai,--Ct):0,bi--,Se===10&&(bi=1,Gl--),Se}function Ft(){return Se=Ct<w1?Re(Ai,Ct++):0,bi++,Se===10&&(bi=1,Gl++),Se}function vr(){return Re(Ai,Ct)}function ga(){return Ct}function Xl(e,t){return wi(Ai,e,t)}function Ed(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function JT(e){return Gl=bi=1,w1=Ut(Ai=e),Ct=0,[]}function eR(e){return Ai="",e}function Gc(e){return y1(Xl(Ct-1,Td(e===91?e+2:e===40?e+1:e)))}function tR(e){for(;(Se=vr())&&Se<33;)Ft();return Ed(e)>2||Ed(Se)>3?"":" "}function nR(e,t){for(;--t&&Ft()&&!(Se<48||Se>102||Se>57&&Se<65||Se>70&&Se<97););return Xl(e,ga()+(t<6&&vr()==32&&Ft()==32))}function Td(e){for(;Ft();)switch(Se){case e:return Ct;case 34:case 39:e!==34&&e!==39&&Td(Se);break;case 40:e===41&&Td(e);break;case 92:Ft();break}return Ct}function rR(e,t){for(;Ft()&&e+Se!==47+10;)if(e+Se===42+42&&vr()===47)break;return"/*"+Xl(t,Ct-1)+"*"+mp(e===47?e:Ft())}function iR(e){for(;!Ed(vr());)Ft();return Xl(e,Ct)}function oR(e){return eR(va("",null,null,null,[""],e=JT(e),0,[0],e))}function va(e,t,n,r,i,o,s,a,l){for(var u=0,d=0,f=s,p=0,m=0,y=0,w=1,k=1,h=1,g=0,v="",b=i,S=o,C=r,P=v;k;)switch(y=g,g=Ft()){case 40:if(y!=108&&Re(P,f-1)==58){ma(P+=U(Gc(g),"&","&\f"),"&\f",v1(u?a[u-1]:0))!=-1&&(h=-1);break}case 34:case 39:case 91:P+=Gc(g);break;case 9:case 10:case 13:case 32:P+=tR(y);break;case 92:P+=nR(ga()-1,7);continue;case 47:switch(vr()){case 42:case 47:oo(sR(rR(Ft(),ga()),t,n,l),l);break;default:P+="/"}break;case 123*w:a[u++]=Ut(P)*h;case 125*w:case 59:case 0:switch(g){case 0:case 125:k=0;case 59+d:h==-1&&(P=U(P,/\f/g,"")),m>0&&Ut(P)-f&&oo(m>32?fg(P+";",r,n,f-1,l):fg(U(P," ","")+";",r,n,f-2,l),l);break;case 59:P+=";";default:if(oo(C=dg(P,t,n,u,d,i,a,v,b=[],S=[],f,o),o),g===123)if(d===0)va(P,t,C,C,b,o,f,a,S);else switch(p===99&&Re(P,3)===110?100:p){case 100:case 108:case 109:case 115:va(e,C,C,r&&oo(dg(e,C,C,0,0,i,a,v,i,b=[],f,S),S),i,S,f,a,r?b:S);break;default:va(P,C,C,C,[""],S,0,a,S)}}u=d=m=0,w=h=1,v=P="",f=s;break;case 58:f=1+Ut(P),m=y;default:if(w<1){if(g==123)--w;else if(g==125&&w++==0&&ZT()==125)continue}switch(P+=mp(g),g*w){case 38:h=d>0?1:(P+="\f",-1);break;case 44:a[u++]=(Ut(P)-1)*h,h=1;break;case 64:vr()===45&&(P+=Gc(Ft())),p=vr(),d=f=Ut(v=P+=iR(ga())),g++;break;case 45:y===45&&Ut(P)==2&&(w=0)}}return o}function dg(e,t,n,r,i,o,s,a,l,u,d,f){for(var p=i-1,m=i===0?o:[""],y=x1(m),w=0,k=0,h=0;w<r;++w)for(var g=0,v=wi(e,p+1,p=v1(k=s[w])),b=e;g<y;++g)(b=y1(k>0?m[g]+" "+v:U(v,/&\f/g,m[g])))&&(l[h++]=b);return Yl(e,t,n,i===0?Kl:a,l,u,d,f)}function sR(e,t,n,r){return Yl(e,t,n,m1,mp(XT()),wi(e,2,-2),0,r)}function fg(e,t,n,r,i){return Yl(e,t,n,hp,wi(e,0,r),wi(e,r+1,-1),r,i)}function b1(e,t,n){switch(GT(e,t)){case 5103:return Y+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Y+e+e;case 4789:return So+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return Y+e+So+e+oe+e+e;case 5936:switch(Re(e,t+11)){case 114:return Y+e+oe+U(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return Y+e+oe+U(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return Y+e+oe+U(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return Y+e+oe+e+e;case 6165:return Y+e+oe+"flex-"+e+e;case 5187:return Y+e+U(e,/(\w+).+(:[^]+)/,Y+"box-$1$2"+oe+"flex-$1$2")+e;case 5443:return Y+e+oe+"flex-item-"+U(e,/flex-|-self/g,"")+(Xt(e,/flex-|baseline/)?"":oe+"grid-row-"+U(e,/flex-|-self/g,""))+e;case 4675:return Y+e+oe+"flex-line-pack"+U(e,/align-content|flex-|-self/g,"")+e;case 5548:return Y+e+oe+U(e,"shrink","negative")+e;case 5292:return Y+e+oe+U(e,"basis","preferred-size")+e;case 6060:return Y+"box-"+U(e,"-grow","")+Y+e+oe+U(e,"grow","positive")+e;case 4554:return Y+U(e,/([^-])(transform)/g,"$1"+Y+"$2")+e;case 6187:return U(U(U(e,/(zoom-|grab)/,Y+"$1"),/(image-set)/,Y+"$1"),e,"")+e;case 5495:case 3959:return U(e,/(image-set\([^]*)/,Y+"$1$`$1");case 4968:return U(U(e,/(.+:)(flex-)?(.*)/,Y+"box-pack:$3"+oe+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Y+e+e;case 4200:if(!Xt(e,/flex-|baseline/))return oe+"grid-column-align"+wi(e,t)+e;break;case 2592:case 3360:return oe+U(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,Xt(r.props,/grid-\w+-end/)})?~ma(e+(n=n[t].value),"span",0)?e:oe+U(e,"-start","")+e+oe+"grid-row-span:"+(~ma(n,"span",0)?Xt(n,/\d+/):+Xt(n,/\d+/)-+Xt(e,/\d+/))+";":oe+U(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return Xt(r.props,/grid-\w+-start/)})?e:oe+U(U(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return U(e,/(.+)-inline(.+)/,Y+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Ut(e)-1-t>6)switch(Re(e,t+1)){case 109:if(Re(e,t+4)!==45)break;case 102:return U(e,/(.+:)(.+)-([^]+)/,"$1"+Y+"$2-$3$1"+So+(Re(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~ma(e,"stretch",0)?b1(U(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return U(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,s,a,l,u){return oe+i+":"+o+u+(s?oe+i+"-span:"+(a?l:+l-+o)+u:"")+e});case 4949:if(Re(e,t+6)===121)return U(e,":",":"+Y)+e;break;case 6444:switch(Re(e,Re(e,14)===45?18:11)){case 120:return U(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Y+(Re(e,14)===45?"inline-":"")+"box$3$1"+Y+"$2$3$1"+oe+"$2box$3")+e;case 100:return U(e,":",":"+oe)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return U(e,"scroll-","scroll-snap-")+e}return e}function fl(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function aR(e,t,n,r){switch(e.type){case KT:if(e.children.length)break;case qT:case hp:return e.return=e.return||e.value;case m1:return"";case g1:return e.return=e.value+"{"+fl(e.children,r)+"}";case Kl:if(!Ut(e.value=e.props.join(",")))return""}return Ut(n=fl(e.children,r))?e.return=e.value+"{"+n+"}":""}function lR(e){var t=x1(e);return function(n,r,i,o){for(var s="",a=0;a<t;a++)s+=e[a](n,r,i,o)||"";return s}}function cR(e){return function(t){t.root||(t=t.return)&&e(t)}}function uR(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case hp:e.return=b1(e.value,e.length,n);return;case g1:return fl([yn(e,{value:U(e.value,"@","@"+Y)})],r);case Kl:if(e.length)return YT(n=e.props,function(i){switch(Xt(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Mr(yn(e,{props:[U(i,/:(read-\w+)/,":"+So+"$1")]})),Mr(yn(e,{props:[i]})),Pd(e,{props:ug(n,r)});break;case"::placeholder":Mr(yn(e,{props:[U(i,/:(plac\w+)/,":"+Y+"input-$1")]})),Mr(yn(e,{props:[U(i,/:(plac\w+)/,":"+So+"$1")]})),Mr(yn(e,{props:[U(i,/:(plac\w+)/,oe+"input-$1")]})),Mr(yn(e,{props:[i]})),Pd(e,{props:ug(n,r)});break}return""})}}var dR={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Si=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",S1="active",j1="data-styled-version",Zl="6.1.19",gp=`/*!sc*/
`,pl=typeof window<"u"&&typeof document<"u",fR=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),Jl=Object.freeze([]),ji=Object.freeze({});function pR(e,t,n){return n===void 0&&(n=ji),e.theme!==n.theme&&e.theme||t||n.theme}var k1=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),hR=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,mR=/(^-|-$)/g;function pg(e){return e.replace(hR,"-").replace(mR,"")}var gR=/(a)(d)/gi,Ns=52,hg=function(e){return String.fromCharCode(e+(e>25?39:97))};function Rd(e){var t,n="";for(t=Math.abs(e);t>Ns;t=t/Ns|0)n=hg(t%Ns)+n;return(hg(t%Ns)+n).replace(gR,"$1-$2")}var Yc,C1=5381,ii=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},P1=function(e){return ii(C1,e)};function E1(e){return Rd(P1(e)>>>0)}function vR(e){return e.displayName||e.name||"Component"}function Xc(e){return typeof e=="string"&&!0}var T1=typeof Symbol=="function"&&Symbol.for,R1=T1?Symbol.for("react.memo"):60115,yR=T1?Symbol.for("react.forward_ref"):60112,xR={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},wR={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},A1={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},bR=((Yc={})[yR]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Yc[R1]=A1,Yc);function mg(e){return("type"in(t=e)&&t.type.$$typeof)===R1?A1:"$$typeof"in e?bR[e.$$typeof]:xR;var t}var SR=Object.defineProperty,jR=Object.getOwnPropertyNames,gg=Object.getOwnPropertySymbols,kR=Object.getOwnPropertyDescriptor,CR=Object.getPrototypeOf,vg=Object.prototype;function $1(e,t,n){if(typeof t!="string"){if(vg){var r=CR(t);r&&r!==vg&&$1(e,r,n)}var i=jR(t);gg&&(i=i.concat(gg(t)));for(var o=mg(e),s=mg(t),a=0;a<i.length;++a){var l=i[a];if(!(l in wR||n&&n[l]||s&&l in s||o&&l in o)){var u=kR(t,l);try{SR(e,l,u)}catch{}}}}return e}function kr(e){return typeof e=="function"}function vp(e){return typeof e=="object"&&"styledComponentId"in e}function pr(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Ad(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function Qo(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function $d(e,t,n){if(n===void 0&&(n=!1),!n&&!Qo(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=$d(e[r],t[r]);else if(Qo(t))for(var r in t)e[r]=$d(e[r],t[r]);return e}function yp(e,t){Object.defineProperty(e,"toString",{value:t})}function Cr(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var PR=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;t>=o;)if((o<<=1)<0)throw Cr(16,"".concat(t));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var s=i;s<o;s++)this.groupSizes[s]=0}for(var a=this.indexOfGroup(t+1),l=(s=0,n.length);s<l;s++)this.tag.insertRule(a,n[s])&&(this.groupSizes[t]++,a++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),o=i+r,s=i;s<o;s++)n+="".concat(this.tag.getRule(s)).concat(gp);return n},e}(),ya=new Map,hl=new Map,xa=1,_s=function(e){if(ya.has(e))return ya.get(e);for(;hl.has(xa);)xa++;var t=xa++;return ya.set(e,t),hl.set(t,e),t},ER=function(e,t){xa=t+1,ya.set(e,t),hl.set(t,e)},TR="style[".concat(Si,"][").concat(j1,'="').concat(Zl,'"]'),RR=new RegExp("^".concat(Si,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),AR=function(e,t,n){for(var r,i=n.split(","),o=0,s=i.length;o<s;o++)(r=i[o])&&e.registerName(t,r)},$R=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(gp),i=[],o=0,s=r.length;o<s;o++){var a=r[o].trim();if(a){var l=a.match(RR);if(l){var u=0|parseInt(l[1],10),d=l[2];u!==0&&(ER(d,u),AR(e,d,l[3]),e.getTag().insertRules(u,i)),i.length=0}else i.push(a)}}},yg=function(e){for(var t=document.querySelectorAll(TR),n=0,r=t.length;n<r;n++){var i=t[n];i&&i.getAttribute(Si)!==S1&&($R(e,i),i.parentNode&&i.parentNode.removeChild(i))}};function OR(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var O1=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(a){var l=Array.from(a.querySelectorAll("style[".concat(Si,"]")));return l[l.length-1]}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(Si,S1),r.setAttribute(j1,Zl);var s=OR();return s&&r.setAttribute("nonce",s),n.insertBefore(r,o),r},LR=function(){function e(t){this.element=O1(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,o=r.length;i<o;i++){var s=r[i];if(s.ownerNode===n)return s}throw Cr(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),FR=function(){function e(t){this.element=O1(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),MR=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),xg=pl,zR={isServer:!pl,useCSSOMInjection:!fR},L1=function(){function e(t,n,r){t===void 0&&(t=ji),n===void 0&&(n={});var i=this;this.options=Ve(Ve({},zR),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&pl&&xg&&(xg=!1,yg(this)),yp(this,function(){return function(o){for(var s=o.getTag(),a=s.length,l="",u=function(f){var p=function(h){return hl.get(h)}(f);if(p===void 0)return"continue";var m=o.names.get(p),y=s.getGroup(f);if(m===void 0||!m.size||y.length===0)return"continue";var w="".concat(Si,".g").concat(f,'[id="').concat(p,'"]'),k="";m!==void 0&&m.forEach(function(h){h.length>0&&(k+="".concat(h,","))}),l+="".concat(y).concat(w,'{content:"').concat(k,'"}').concat(gp)},d=0;d<a;d++)u(d);return l}(i)})}return e.registerId=function(t){return _s(t)},e.prototype.rehydrate=function(){!this.server&&pl&&yg(this)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(Ve(Ve({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new MR(i):r?new LR(i):new FR(i)}(this.options),new PR(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(_s(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(_s(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(_s(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),NR=/&/g,_R=/^\s*\/\/.*$/gm;function F1(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=F1(n.children,t)),n})}function DR(e){var t,n,r,i=e===void 0?ji:e,o=i.options,s=o===void 0?ji:o,a=i.plugins,l=a===void 0?Jl:a,u=function(p,m,y){return y.startsWith(n)&&y.endsWith(n)&&y.replaceAll(n,"").length>0?".".concat(t):p},d=l.slice();d.push(function(p){p.type===Kl&&p.value.includes("&")&&(p.props[0]=p.props[0].replace(NR,n).replace(r,u))}),s.prefix&&d.push(uR),d.push(aR);var f=function(p,m,y,w){m===void 0&&(m=""),y===void 0&&(y=""),w===void 0&&(w="&"),t=w,n=m,r=new RegExp("\\".concat(n,"\\b"),"g");var k=p.replace(_R,""),h=oR(y||m?"".concat(y," ").concat(m," { ").concat(k," }"):k);s.namespace&&(h=F1(h,s.namespace));var g=[];return fl(h,lR(d.concat(cR(function(v){return g.push(v)})))),g};return f.hash=l.length?l.reduce(function(p,m){return m.name||Cr(15),ii(p,m.name)},C1).toString():"",f}var IR=new L1,Od=DR(),M1=G.createContext({shouldForwardProp:void 0,styleSheet:IR,stylis:Od});M1.Consumer;G.createContext(void 0);function wg(){return j.useContext(M1)}var z1=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=Od);var s=r.name+o.hash;i.hasNameForId(r.id,s)||i.insertRules(r.id,s,o(r.rules,s,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,yp(this,function(){throw Cr(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Od),this.name+t.hash},e}(),VR=function(e){return e>="A"&&e<="Z"};function bg(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;VR(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var N1=function(e){return e==null||e===!1||e===""},_1=function(e){var t,n,r=[];for(var i in e){var o=e[i];e.hasOwnProperty(i)&&!N1(o)&&(Array.isArray(o)&&o.isCss||kr(o)?r.push("".concat(bg(i),":"),o,";"):Qo(o)?r.push.apply(r,Wo(Wo(["".concat(i," {")],_1(o),!1),["}"],!1)):r.push("".concat(bg(i),": ").concat((t=i,(n=o)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in dR||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function yr(e,t,n,r){if(N1(e))return[];if(vp(e))return[".".concat(e.styledComponentId)];if(kr(e)){if(!kr(o=e)||o.prototype&&o.prototype.isReactComponent||!t)return[e];var i=e(t);return yr(i,t,n,r)}var o;return e instanceof z1?n?(e.inject(n,r),[e.getName(r)]):[e]:Qo(e)?_1(e):Array.isArray(e)?Array.prototype.concat.apply(Jl,e.map(function(s){return yr(s,t,n,r)})):[e.toString()]}function UR(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(kr(n)&&!vp(n))return!1}return!0}var BR=P1(Zl),HR=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&UR(t),this.componentId=n,this.baseHash=ii(BR,n),this.baseStyle=r,L1.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=pr(i,this.staticRulesId);else{var o=Ad(yr(this.rules,t,n,r)),s=Rd(ii(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,s)){var a=r(o,".".concat(s),void 0,this.componentId);n.insertRules(this.componentId,s,a)}i=pr(i,s),this.staticRulesId=s}else{for(var l=ii(this.baseHash,r.hash),u="",d=0;d<this.rules.length;d++){var f=this.rules[d];if(typeof f=="string")u+=f;else if(f){var p=Ad(yr(f,t,n,r));l=ii(l,p+d),u+=p}}if(u){var m=Rd(l>>>0);n.hasNameForId(this.componentId,m)||n.insertRules(this.componentId,m,r(u,".".concat(m),void 0,this.componentId)),i=pr(i,m)}}return i},e}(),ml=G.createContext(void 0);ml.Consumer;function WR(e){var t=G.useContext(ml),n=j.useMemo(function(){return function(r,i){if(!r)throw Cr(14);if(kr(r)){var o=r(i);return o}if(Array.isArray(r)||typeof r!="object")throw Cr(8);return i?Ve(Ve({},i),r):r}(e.theme,t)},[e.theme,t]);return e.children?G.createElement(ml.Provider,{value:n},e.children):null}var Zc={};function QR(e,t,n){var r=vp(e),i=e,o=!Xc(e),s=t.attrs,a=s===void 0?Jl:s,l=t.componentId,u=l===void 0?function(b,S){var C=typeof b!="string"?"sc":pg(b);Zc[C]=(Zc[C]||0)+1;var P="".concat(C,"-").concat(E1(Zl+C+Zc[C]));return S?"".concat(S,"-").concat(P):P}(t.displayName,t.parentComponentId):l,d=t.displayName,f=d===void 0?function(b){return Xc(b)?"styled.".concat(b):"Styled(".concat(vR(b),")")}(e):d,p=t.displayName&&t.componentId?"".concat(pg(t.displayName),"-").concat(t.componentId):t.componentId||u,m=r&&i.attrs?i.attrs.concat(a).filter(Boolean):a,y=t.shouldForwardProp;if(r&&i.shouldForwardProp){var w=i.shouldForwardProp;if(t.shouldForwardProp){var k=t.shouldForwardProp;y=function(b,S){return w(b,S)&&k(b,S)}}else y=w}var h=new HR(n,p,r?i.componentStyle:void 0);function g(b,S){return function(C,P,T){var L=C.attrs,F=C.componentStyle,ne=C.defaultProps,J=C.foldedComponentIds,re=C.styledComponentId,X=C.target,$e=G.useContext(ml),Q=wg(),he=C.shouldForwardProp||Q.shouldForwardProp,A=pR(P,$e,ne)||ji,$=function(Pt,Ce,dt){for(var Zn,Et=Ve(Ve({},Ce),{className:void 0,theme:dt}),mn=0;mn<Pt.length;mn+=1){var ft=kr(Zn=Pt[mn])?Zn(Et):Zn;for(var Kt in ft)Et[Kt]=Kt==="className"?pr(Et[Kt],ft[Kt]):Kt==="style"?Ve(Ve({},Et[Kt]),ft[Kt]):ft[Kt]}return Ce.className&&(Et.className=pr(Et.className,Ce.className)),Et}(L,P,A),z=$.as||X,M={};for(var H in $)$[H]===void 0||H[0]==="$"||H==="as"||H==="theme"&&$.theme===A||(H==="forwardedAs"?M.as=$.forwardedAs:he&&!he(H,z)||(M[H]=$[H]));var _t=function(Pt,Ce){var dt=wg(),Zn=Pt.generateAndInjectStyles(Ce,dt.styleSheet,dt.stylis);return Zn}(F,$),Ye=pr(J,re);return _t&&(Ye+=" "+_t),$.className&&(Ye+=" "+$.className),M[Xc(z)&&!k1.has(z)?"class":"className"]=Ye,T&&(M.ref=T),j.createElement(z,M)}(v,b,S)}g.displayName=f;var v=G.forwardRef(g);return v.attrs=m,v.componentStyle=h,v.displayName=f,v.shouldForwardProp=y,v.foldedComponentIds=r?pr(i.foldedComponentIds,i.styledComponentId):"",v.styledComponentId=p,v.target=r?i.target:e,Object.defineProperty(v,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(b){this._foldedDefaultProps=r?function(S){for(var C=[],P=1;P<arguments.length;P++)C[P-1]=arguments[P];for(var T=0,L=C;T<L.length;T++)$d(S,L[T],!0);return S}({},i.defaultProps,b):b}}),yp(v,function(){return".".concat(v.styledComponentId)}),o&&$1(v,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),v}function Sg(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var jg=function(e){return Object.assign(e,{isCss:!0})};function Be(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(kr(e)||Qo(e))return jg(yr(Sg(Jl,Wo([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?yr(r):jg(yr(Sg(r,t)))}function Ld(e,t,n){if(n===void 0&&(n=ji),!t)throw Cr(1,t);var r=function(i){for(var o=[],s=1;s<arguments.length;s++)o[s-1]=arguments[s];return e(t,n,Be.apply(void 0,Wo([i],o,!1)))};return r.attrs=function(i){return Ld(e,t,Ve(Ve({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return Ld(e,t,Ve(Ve({},n),i))},r}var D1=function(e){return Ld(QR,e)},x=D1;k1.forEach(function(e){x[e]=D1(e)});function xp(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Ad(Be.apply(void 0,Wo([e],t,!1))),i=E1(r);return new z1(i,r)}var qR={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const KR=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),GR=(e,t)=>{const n=j.forwardRef(({color:r="currentColor",size:i=24,strokeWidth:o=2,absoluteStrokeWidth:s,children:a,...l},u)=>j.createElement("svg",{ref:u,...qR,width:i,height:i,stroke:r,strokeWidth:s?Number(o)*24/Number(i):o,className:`lucide lucide-${KR(e)}`,...l},[...t.map(([d,f])=>j.createElement(d,f)),...(Array.isArray(a)?a:[a])||[]]));return n.displayName=`${e}`,n};var V=GR;const YR=V("Activity",[["path",{d:"M22 12h-4l-3 9L9 3l-3 9H2",key:"d5dnw9"}]]),jn=V("AlertCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]),kg=V("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]),Ds=V("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]),ki=V("Award",[["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}],["path",{d:"M15.477 12.89 17 22l-5-3-5 3 1.523-9.11",key:"em7aur"}]]),Cg=V("BarChart3",[["path",{d:"M3 3v18h18",key:"1s2lah"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]),bt=V("BookOpen",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}]]),XR=V("Camera",[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]),xt=V("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["polyline",{points:"22 4 12 14.01 9 11.01",key:"6xbx8j"}]]),ZR=V("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]),qo=V("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]),gl=V("EyeOff",[["path",{d:"M9.88 9.88a3 3 0 1 0 4.24 4.24",key:"1jxqfv"}],["path",{d:"M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",key:"9wicm4"}],["path",{d:"M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",key:"1jreej"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]),Ko=V("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]),wp=V("Facebook",[["path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",key:"1jg4f8"}]]),Fd=V("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"2",x2:"22",y1:"12",y2:"12",key:"1dnqot"}],["path",{d:"M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z",key:"nb9nel"}]]),Md=V("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]),bp=V("Instagram",[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]]),JR=V("Loader2",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]),zd=V("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]),Nd=V("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]),$i=V("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]),Sp=V("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]),e3=V("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]),Pg=V("Package",[["path",{d:"M16.5 9.4 7.55 4.24",key:"10qotr"}],["path",{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z",key:"yt0hxn"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12",key:"a4e8g8"}]]),t3=V("PenSquare",[["path",{d:"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1qinfi"}],["path",{d:"M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4Z",key:"w2jsv5"}]]),vl=V("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]),Eg=V("PieChart",[["path",{d:"M21.21 15.89A10 10 0 1 1 8 2.83",key:"k2fpak"}],["path",{d:"M22 12A10 10 0 0 0 12 2v10z",key:"1rfc4y"}]]),jp=V("Play",[["polygon",{points:"5 3 19 12 5 21 5 3",key:"191637"}]]),n3=V("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]),r3=V("Save",[["path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z",key:"1owoqh"}],["polyline",{points:"17 21 17 13 7 13 7 21",key:"1md35c"}],["polyline",{points:"7 3 7 8 15 8",key:"8nz8an"}]]),kp=V("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]),i3=V("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]),o3=V("Shield",[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",key:"3xmgem"}]]),s3=V("ShoppingCart",[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]]),Pr=V("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]),I1=V("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]),a3=V("Twitter",[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]]),Go=V("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]),us=V("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]),l3=V("XCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]),c3=V("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),u3=x.section`
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
`,d3=x.div`
  position: relative;
  z-index: 1;
  max-width: 800px;
  margin: 0 auto;
  padding: 0 var(--spacing-md);
`,f3=x(_.h1)`
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
`,h3=x(_(ce))`
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
`,m3=x.section`
  padding: var(--spacing-xxl) 0;
  background: white;
`,g3=x.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-xl);
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-md);
`,v3=x(_.div)`
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
`,y3=x.div`
  width: 80px;
  height: 80px;
  background: var(--color-primary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto var(--spacing-lg);
  color: white;
`,x3=x.section`
  padding: var(--spacing-xxl) 0;
  background: var(--color-background-secondary);
`,w3=x.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--spacing-xl);
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-md);
  text-align: center;
`,b3=x(_.div)`
  h3 {
    font-size: 2.5rem;
    color: var(--color-primary);
    margin-bottom: var(--spacing-sm);
  }
  
  p {
    color: var(--color-text-light);
    font-size: 1.125rem;
  }
`,S3=x.section`
  padding: var(--spacing-xxl) 0;
  background: white;
`,Tg=x.h2`
  text-align: center;
  font-size: 2.5rem;
  color: var(--color-text);
  margin-bottom: var(--spacing-xl);
`,j3=x.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: var(--spacing-xl);
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-md);
`,k3=x(_.div)`
  background: var(--color-background);
  border-radius: var(--border-radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  transition: var(--transition-normal);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-lg);
  }
`,C3=x.div`
  height: 200px;
  background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
  font-weight: 600;
`,P3=x.div`
  padding: var(--spacing-lg);
`,E3=x.h3`
  color: var(--color-text);
  margin-bottom: var(--spacing-sm);
`,T3=x.p`
  color: var(--color-text-light);
  margin-bottom: var(--spacing-md);
`,R3=x.div`
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--color-primary);
  margin-bottom: var(--spacing-md);
`,A3=x(ce)`
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
`,$3=()=>{const e=[{icon:c.jsx(bt,{size:32}),title:"Профессиональные курсы",description:"Изучайте флористику с ведущими экспертами отрасли"},{icon:c.jsx(us,{size:32}),title:"Сообщество",description:"Присоединяйтесь к сообществу флористов и делитесь опытом"},{icon:c.jsx(ki,{size:32}),title:"Сертификация",description:"Получите сертификат по окончании курса"}],t=[{number:"1000+",label:"Студентов"},{number:"50+",label:"Курсов"},{number:"20+",label:"Преподавателей"},{number:"95%",label:"Довольных клиентов"}],n=[{title:"Профессия флорист",description:"Базовый курс для начинающих флористов",price:"29,900 ₽",image:"🌺"},{title:"Флорист-дизайнер",description:"Продвинутый курс для создания уникальных композиций",price:"39,900 ₽",image:"🌸"},{title:"Свадебная флористика",description:"Специализация на свадебных букетах и декоре",price:"24,900 ₽",image:"🌹"}];return c.jsxs(c.Fragment,{children:[c.jsx(u3,{children:c.jsxs(d3,{children:[c.jsx(f3,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.8},children:"Изучайте искусство флористики онлайн"}),c.jsx(p3,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.8,delay:.2},children:"Превратите свое увлечение цветами в прибыльную профессию. Изучайте с лучшими преподавателями, практикуйтесь и создавайте прекрасные композиции."}),c.jsxs(h3,{to:"/courses",initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.8,delay:.4},whileHover:{scale:1.05},whileTap:{scale:.95},children:["Начать обучение",c.jsx(kg,{size:20})]})]})}),c.jsx(m3,{children:c.jsxs("div",{className:"container",children:[c.jsx(Tg,{children:"Почему выбирают Flerr?"}),c.jsx(g3,{children:e.map((r,i)=>c.jsxs(v3,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.6,delay:i*.2},viewport:{once:!0},children:[c.jsx(y3,{children:r.icon}),c.jsx("h3",{children:r.title}),c.jsx("p",{children:r.description})]},i))})]})}),c.jsx(x3,{children:c.jsx("div",{className:"container",children:c.jsx(w3,{children:t.map((r,i)=>c.jsxs(b3,{initial:{opacity:0,scale:.8},whileInView:{opacity:1,scale:1},transition:{duration:.6,delay:i*.1},viewport:{once:!0},children:[c.jsx("h3",{children:r.number}),c.jsx("p",{children:r.label})]},i))})})}),c.jsx(S3,{children:c.jsxs("div",{className:"container",children:[c.jsx(Tg,{children:"Популярные курсы"}),c.jsx(j3,{children:n.map((r,i)=>c.jsxs(k3,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.6,delay:i*.2},viewport:{once:!0},children:[c.jsx(C3,{children:r.image}),c.jsxs(P3,{children:[c.jsx(E3,{children:r.title}),c.jsx(T3,{children:r.description}),c.jsx(R3,{children:r.price}),c.jsxs(A3,{to:"/courses",children:["Подробнее",c.jsx(kg,{size:16})]})]})]},i))})]})})]})},O3=x(_.button)`
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
`,L3=x.div`
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
`,Jc=({variant:e="primary",size:t="medium",fullWidth:n=!1,disabled:r=!1,loading:i=!1,children:o,onClick:s,type:a="button",...l})=>c.jsxs(O3,{variant:e,size:t,fullWidth:n,disabled:r||i,loading:i,onClick:s,type:a,whileHover:{scale:r||i?1:1.02},whileTap:{scale:r||i?1:.98},...l,children:[i&&c.jsx(L3,{}),o]});x(_.div)`
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
`;const F3=x.div`
  position: relative;
  width: ${({fullWidth:e})=>e?"100%":"auto"};
`,M3=x.label`
  display: block;
  margin-bottom: 8px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.purple};
  font-size: 14px;
`,z3=x.div`
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
`,N3=x(_.input)`
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
`,_3=x.div`
  position: absolute;
  left: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({theme:e})=>e.colors.textLight};
  z-index: 1;
`,D3=x.button`
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
`,I3=x(_.div)`
  margin-top: 4px;
  font-size: 12px;
  color: ${({theme:e})=>e.colors.error};
  font-weight: 500;
`,V1=j.forwardRef(({type:e="text",placeholder:t,value:n,onChange:r,onBlur:i,onFocus:o,label:s,error:a,disabled:l=!1,required:u=!1,fullWidth:d=!1,size:f="medium",icon:p,className:m,...y},w)=>{const[k,h]=j.useState(!1),[g,v]=j.useState(!1),b=T=>{h(!0),o==null||o(T)},S=T=>{h(!1),i==null||i(T)},C=()=>{v(!g)},P=e==="password"&&g?"text":e;return c.jsxs(F3,{fullWidth:d,className:m,children:[s&&c.jsxs(M3,{children:[s,u&&c.jsx("span",{style:{color:"#d32f2f"},children:" *"})]}),c.jsxs(z3,{hasError:!!a,isFocused:k,disabled:l,children:[p&&c.jsx(_3,{children:p}),c.jsx(N3,{ref:w,type:P,placeholder:t,value:n,onChange:r,onFocus:b,onBlur:S,disabled:l,required:u,size:f,hasIcon:!!p,...y}),e==="password"&&c.jsx(D3,{type:"button",onClick:C,disabled:l,children:g?c.jsx(gl,{size:18}):c.jsx(Ko,{size:18})})]}),a&&c.jsx(I3,{initial:{opacity:0,y:-10},animate:{opacity:1,y:0},transition:{duration:.2},children:a})]})});V1.displayName="Input";const V3=xp`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`,U3=xp`
  0%, 80%, 100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
`,B3=xp`
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
  animation: ${V3} 1s linear infinite;
`;x.div`
  display: flex;
  gap: 4px;
`;x.div`
  width: ${({size:e})=>{switch(e){case"small":return"6px";case"large":return"12px";default:return"8px"}}};
  height: ${({size:e})=>{switch(e){case"small":return"6px";case"large":return"12px";default:return"8px"}}};
  background: ${({theme:e,color:t})=>t||e.colors.purple};
  border-radius: 50%;
  animation: ${U3} 1.4s ease-in-out infinite both;
  animation-delay: ${({delay:e})=>e}s;
`;x.div`
  width: ${({size:e})=>{switch(e){case"small":return"24px";case"large":return"48px";default:return"32px"}}};
  height: ${({size:e})=>{switch(e){case"small":return"24px";case"large":return"48px";default:return"32px"}}};
  background: ${({theme:e,color:t})=>t||e.colors.purple};
  border-radius: 50%;
  animation: ${B3} 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
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
`;function U1(e,t){return function(){return e.apply(t,arguments)}}const{toString:H3}=Object.prototype,{getPrototypeOf:Cp}=Object,{iterator:ec,toStringTag:B1}=Symbol,tc=(e=>t=>{const n=H3.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),Nt=e=>(e=e.toLowerCase(),t=>tc(t)===e),nc=e=>t=>typeof t===e,{isArray:Oi}=Array,Yo=nc("undefined");function ds(e){return e!==null&&!Yo(e)&&e.constructor!==null&&!Yo(e.constructor)&&nt(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const H1=Nt("ArrayBuffer");function W3(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&H1(e.buffer),t}const Q3=nc("string"),nt=nc("function"),W1=nc("number"),fs=e=>e!==null&&typeof e=="object",q3=e=>e===!0||e===!1,wa=e=>{if(tc(e)!=="object")return!1;const t=Cp(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(B1 in e)&&!(ec in e)},K3=e=>{if(!fs(e)||ds(e))return!1;try{return Object.keys(e).length===0&&Object.getPrototypeOf(e)===Object.prototype}catch{return!1}},G3=Nt("Date"),Y3=Nt("File"),X3=Nt("Blob"),Z3=Nt("FileList"),J3=e=>fs(e)&&nt(e.pipe),eA=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||nt(e.append)&&((t=tc(e))==="formdata"||t==="object"&&nt(e.toString)&&e.toString()==="[object FormData]"))},tA=Nt("URLSearchParams"),[nA,rA,iA,oA]=["ReadableStream","Request","Response","Headers"].map(Nt),sA=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function ps(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,i;if(typeof e!="object"&&(e=[e]),Oi(e))for(r=0,i=e.length;r<i;r++)t.call(null,e[r],r,e);else{if(ds(e))return;const o=n?Object.getOwnPropertyNames(e):Object.keys(e),s=o.length;let a;for(r=0;r<s;r++)a=o[r],t.call(null,e[a],a,e)}}function Q1(e,t){if(ds(e))return null;t=t.toLowerCase();const n=Object.keys(e);let r=n.length,i;for(;r-- >0;)if(i=n[r],t===i.toLowerCase())return i;return null}const hr=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),q1=e=>!Yo(e)&&e!==hr;function _d(){const{caseless:e}=q1(this)&&this||{},t={},n=(r,i)=>{const o=e&&Q1(t,i)||i;wa(t[o])&&wa(r)?t[o]=_d(t[o],r):wa(r)?t[o]=_d({},r):Oi(r)?t[o]=r.slice():t[o]=r};for(let r=0,i=arguments.length;r<i;r++)arguments[r]&&ps(arguments[r],n);return t}const aA=(e,t,n,{allOwnKeys:r}={})=>(ps(t,(i,o)=>{n&&nt(i)?e[o]=U1(i,n):e[o]=i},{allOwnKeys:r}),e),lA=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),cA=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},uA=(e,t,n,r)=>{let i,o,s;const a={};if(t=t||{},e==null)return t;do{for(i=Object.getOwnPropertyNames(e),o=i.length;o-- >0;)s=i[o],(!r||r(s,e,t))&&!a[s]&&(t[s]=e[s],a[s]=!0);e=n!==!1&&Cp(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},dA=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},fA=e=>{if(!e)return null;if(Oi(e))return e;let t=e.length;if(!W1(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},pA=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&Cp(Uint8Array)),hA=(e,t)=>{const r=(e&&e[ec]).call(e);let i;for(;(i=r.next())&&!i.done;){const o=i.value;t.call(e,o[0],o[1])}},mA=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},gA=Nt("HTMLFormElement"),vA=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,i){return r.toUpperCase()+i}),Rg=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),yA=Nt("RegExp"),K1=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};ps(n,(i,o)=>{let s;(s=t(i,o,e))!==!1&&(r[o]=s||i)}),Object.defineProperties(e,r)},xA=e=>{K1(e,(t,n)=>{if(nt(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(nt(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},wA=(e,t)=>{const n={},r=i=>{i.forEach(o=>{n[o]=!0})};return Oi(e)?r(e):r(String(e).split(t)),n},bA=()=>{},SA=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t;function jA(e){return!!(e&&nt(e.append)&&e[B1]==="FormData"&&e[ec])}const kA=e=>{const t=new Array(10),n=(r,i)=>{if(fs(r)){if(t.indexOf(r)>=0)return;if(ds(r))return r;if(!("toJSON"in r)){t[i]=r;const o=Oi(r)?[]:{};return ps(r,(s,a)=>{const l=n(s,i+1);!Yo(l)&&(o[a]=l)}),t[i]=void 0,o}}return r};return n(e,0)},CA=Nt("AsyncFunction"),PA=e=>e&&(fs(e)||nt(e))&&nt(e.then)&&nt(e.catch),G1=((e,t)=>e?setImmediate:t?((n,r)=>(hr.addEventListener("message",({source:i,data:o})=>{i===hr&&o===n&&r.length&&r.shift()()},!1),i=>{r.push(i),hr.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",nt(hr.postMessage)),EA=typeof queueMicrotask<"u"?queueMicrotask.bind(hr):typeof process<"u"&&process.nextTick||G1,TA=e=>e!=null&&nt(e[ec]),E={isArray:Oi,isArrayBuffer:H1,isBuffer:ds,isFormData:eA,isArrayBufferView:W3,isString:Q3,isNumber:W1,isBoolean:q3,isObject:fs,isPlainObject:wa,isEmptyObject:K3,isReadableStream:nA,isRequest:rA,isResponse:iA,isHeaders:oA,isUndefined:Yo,isDate:G3,isFile:Y3,isBlob:X3,isRegExp:yA,isFunction:nt,isStream:J3,isURLSearchParams:tA,isTypedArray:pA,isFileList:Z3,forEach:ps,merge:_d,extend:aA,trim:sA,stripBOM:lA,inherits:cA,toFlatObject:uA,kindOf:tc,kindOfTest:Nt,endsWith:dA,toArray:fA,forEachEntry:hA,matchAll:mA,isHTMLForm:gA,hasOwnProperty:Rg,hasOwnProp:Rg,reduceDescriptors:K1,freezeMethods:xA,toObjectSet:wA,toCamelCase:vA,noop:bA,toFiniteNumber:SA,findKey:Q1,global:hr,isContextDefined:q1,isSpecCompliantForm:jA,toJSONObject:kA,isAsyncFn:CA,isThenable:PA,setImmediate:G1,asap:EA,isIterable:TA};function I(e,t,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i,this.status=i.status?i.status:null)}E.inherits(I,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:E.toJSONObject(this.config),code:this.code,status:this.status}}});const Y1=I.prototype,X1={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{X1[e]={value:e}});Object.defineProperties(I,X1);Object.defineProperty(Y1,"isAxiosError",{value:!0});I.from=(e,t,n,r,i,o)=>{const s=Object.create(Y1);return E.toFlatObject(e,s,function(l){return l!==Error.prototype},a=>a!=="isAxiosError"),I.call(s,e.message,t,n,r,i),s.cause=e,s.name=e.name,o&&Object.assign(s,o),s};const RA=null;function Dd(e){return E.isPlainObject(e)||E.isArray(e)}function Z1(e){return E.endsWith(e,"[]")?e.slice(0,-2):e}function Ag(e,t,n){return e?e.concat(t).map(function(i,o){return i=Z1(i),!n&&o?"["+i+"]":i}).join(n?".":""):t}function AA(e){return E.isArray(e)&&!e.some(Dd)}const $A=E.toFlatObject(E,{},null,function(t){return/^is[A-Z]/.test(t)});function rc(e,t,n){if(!E.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=E.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(w,k){return!E.isUndefined(k[w])});const r=n.metaTokens,i=n.visitor||d,o=n.dots,s=n.indexes,l=(n.Blob||typeof Blob<"u"&&Blob)&&E.isSpecCompliantForm(t);if(!E.isFunction(i))throw new TypeError("visitor must be a function");function u(y){if(y===null)return"";if(E.isDate(y))return y.toISOString();if(E.isBoolean(y))return y.toString();if(!l&&E.isBlob(y))throw new I("Blob is not supported. Use a Buffer instead.");return E.isArrayBuffer(y)||E.isTypedArray(y)?l&&typeof Blob=="function"?new Blob([y]):Buffer.from(y):y}function d(y,w,k){let h=y;if(y&&!k&&typeof y=="object"){if(E.endsWith(w,"{}"))w=r?w:w.slice(0,-2),y=JSON.stringify(y);else if(E.isArray(y)&&AA(y)||(E.isFileList(y)||E.endsWith(w,"[]"))&&(h=E.toArray(y)))return w=Z1(w),h.forEach(function(v,b){!(E.isUndefined(v)||v===null)&&t.append(s===!0?Ag([w],b,o):s===null?w:w+"[]",u(v))}),!1}return Dd(y)?!0:(t.append(Ag(k,w,o),u(y)),!1)}const f=[],p=Object.assign($A,{defaultVisitor:d,convertValue:u,isVisitable:Dd});function m(y,w){if(!E.isUndefined(y)){if(f.indexOf(y)!==-1)throw Error("Circular reference detected in "+w.join("."));f.push(y),E.forEach(y,function(h,g){(!(E.isUndefined(h)||h===null)&&i.call(t,h,E.isString(g)?g.trim():g,w,p))===!0&&m(h,w?w.concat(g):[g])}),f.pop()}}if(!E.isObject(e))throw new TypeError("data must be an object");return m(e),t}function $g(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function Pp(e,t){this._pairs=[],e&&rc(e,this,t)}const J1=Pp.prototype;J1.append=function(t,n){this._pairs.push([t,n])};J1.toString=function(t){const n=t?function(r){return t.call(this,r,$g)}:$g;return this._pairs.map(function(i){return n(i[0])+"="+n(i[1])},"").join("&")};function OA(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function ew(e,t,n){if(!t)return e;const r=n&&n.encode||OA;E.isFunction(n)&&(n={serialize:n});const i=n&&n.serialize;let o;if(i?o=i(t,n):o=E.isURLSearchParams(t)?t.toString():new Pp(t,n).toString(r),o){const s=e.indexOf("#");s!==-1&&(e=e.slice(0,s)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class LA{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){E.forEach(this.handlers,function(r){r!==null&&t(r)})}}const Og=LA,tw={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},FA=typeof URLSearchParams<"u"?URLSearchParams:Pp,MA=typeof FormData<"u"?FormData:null,zA=typeof Blob<"u"?Blob:null,NA={isBrowser:!0,classes:{URLSearchParams:FA,FormData:MA,Blob:zA},protocols:["http","https","file","blob","url","data"]},Ep=typeof window<"u"&&typeof document<"u",Id=typeof navigator=="object"&&navigator||void 0,_A=Ep&&(!Id||["ReactNative","NativeScript","NS"].indexOf(Id.product)<0),DA=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),IA=Ep&&window.location.href||"http://localhost",VA=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Ep,hasStandardBrowserEnv:_A,hasStandardBrowserWebWorkerEnv:DA,navigator:Id,origin:IA},Symbol.toStringTag,{value:"Module"})),Ie={...VA,...NA};function UA(e,t){return rc(e,new Ie.classes.URLSearchParams,{visitor:function(n,r,i,o){return Ie.isNode&&E.isBuffer(n)?(this.append(r,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)},...t})}function BA(e){return E.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function HA(e){const t={},n=Object.keys(e);let r;const i=n.length;let o;for(r=0;r<i;r++)o=n[r],t[o]=e[o];return t}function nw(e){function t(n,r,i,o){let s=n[o++];if(s==="__proto__")return!0;const a=Number.isFinite(+s),l=o>=n.length;return s=!s&&E.isArray(i)?i.length:s,l?(E.hasOwnProp(i,s)?i[s]=[i[s],r]:i[s]=r,!a):((!i[s]||!E.isObject(i[s]))&&(i[s]=[]),t(n,r,i[s],o)&&E.isArray(i[s])&&(i[s]=HA(i[s])),!a)}if(E.isFormData(e)&&E.isFunction(e.entries)){const n={};return E.forEachEntry(e,(r,i)=>{t(BA(r),i,n,0)}),n}return null}function WA(e,t,n){if(E.isString(e))try{return(t||JSON.parse)(e),E.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const Tp={transitional:tw,adapter:["xhr","http","fetch"],transformRequest:[function(t,n){const r=n.getContentType()||"",i=r.indexOf("application/json")>-1,o=E.isObject(t);if(o&&E.isHTMLForm(t)&&(t=new FormData(t)),E.isFormData(t))return i?JSON.stringify(nw(t)):t;if(E.isArrayBuffer(t)||E.isBuffer(t)||E.isStream(t)||E.isFile(t)||E.isBlob(t)||E.isReadableStream(t))return t;if(E.isArrayBufferView(t))return t.buffer;if(E.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let a;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return UA(t,this.formSerializer).toString();if((a=E.isFileList(t))||r.indexOf("multipart/form-data")>-1){const l=this.env&&this.env.FormData;return rc(a?{"files[]":t}:t,l&&new l,this.formSerializer)}}return o||i?(n.setContentType("application/json",!1),WA(t)):t}],transformResponse:[function(t){const n=this.transitional||Tp.transitional,r=n&&n.forcedJSONParsing,i=this.responseType==="json";if(E.isResponse(t)||E.isReadableStream(t))return t;if(t&&E.isString(t)&&(r&&!this.responseType||i)){const s=!(n&&n.silentJSONParsing)&&i;try{return JSON.parse(t)}catch(a){if(s)throw a.name==="SyntaxError"?I.from(a,I.ERR_BAD_RESPONSE,this,null,this.response):a}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Ie.classes.FormData,Blob:Ie.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};E.forEach(["delete","get","head","post","put","patch"],e=>{Tp.headers[e]={}});const Rp=Tp,QA=E.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),qA=e=>{const t={};let n,r,i;return e&&e.split(`
`).forEach(function(s){i=s.indexOf(":"),n=s.substring(0,i).trim().toLowerCase(),r=s.substring(i+1).trim(),!(!n||t[n]&&QA[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},Lg=Symbol("internals");function Hi(e){return e&&String(e).trim().toLowerCase()}function ba(e){return e===!1||e==null?e:E.isArray(e)?e.map(ba):String(e)}function KA(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const GA=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function eu(e,t,n,r,i){if(E.isFunction(r))return r.call(this,t,n);if(i&&(t=n),!!E.isString(t)){if(E.isString(r))return t.indexOf(r)!==-1;if(E.isRegExp(r))return r.test(t)}}function YA(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function XA(e,t){const n=E.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(i,o,s){return this[r].call(this,t,i,o,s)},configurable:!0})})}class ic{constructor(t){t&&this.set(t)}set(t,n,r){const i=this;function o(a,l,u){const d=Hi(l);if(!d)throw new Error("header name must be a non-empty string");const f=E.findKey(i,d);(!f||i[f]===void 0||u===!0||u===void 0&&i[f]!==!1)&&(i[f||l]=ba(a))}const s=(a,l)=>E.forEach(a,(u,d)=>o(u,d,l));if(E.isPlainObject(t)||t instanceof this.constructor)s(t,n);else if(E.isString(t)&&(t=t.trim())&&!GA(t))s(qA(t),n);else if(E.isObject(t)&&E.isIterable(t)){let a={},l,u;for(const d of t){if(!E.isArray(d))throw TypeError("Object iterator must return a key-value pair");a[u=d[0]]=(l=a[u])?E.isArray(l)?[...l,d[1]]:[l,d[1]]:d[1]}s(a,n)}else t!=null&&o(n,t,r);return this}get(t,n){if(t=Hi(t),t){const r=E.findKey(this,t);if(r){const i=this[r];if(!n)return i;if(n===!0)return KA(i);if(E.isFunction(n))return n.call(this,i,r);if(E.isRegExp(n))return n.exec(i);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=Hi(t),t){const r=E.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||eu(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let i=!1;function o(s){if(s=Hi(s),s){const a=E.findKey(r,s);a&&(!n||eu(r,r[a],a,n))&&(delete r[a],i=!0)}}return E.isArray(t)?t.forEach(o):o(t),i}clear(t){const n=Object.keys(this);let r=n.length,i=!1;for(;r--;){const o=n[r];(!t||eu(this,this[o],o,t,!0))&&(delete this[o],i=!0)}return i}normalize(t){const n=this,r={};return E.forEach(this,(i,o)=>{const s=E.findKey(r,o);if(s){n[s]=ba(i),delete n[o];return}const a=t?YA(o):String(o).trim();a!==o&&delete n[o],n[a]=ba(i),r[a]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return E.forEach(this,(r,i)=>{r!=null&&r!==!1&&(n[i]=t&&E.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(i=>r.set(i)),r}static accessor(t){const r=(this[Lg]=this[Lg]={accessors:{}}).accessors,i=this.prototype;function o(s){const a=Hi(s);r[a]||(XA(i,s),r[a]=!0)}return E.isArray(t)?t.forEach(o):o(t),this}}ic.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);E.reduceDescriptors(ic.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});E.freezeMethods(ic);const Mt=ic;function tu(e,t){const n=this||Rp,r=t||n,i=Mt.from(r.headers);let o=r.data;return E.forEach(e,function(a){o=a.call(n,o,i.normalize(),t?t.status:void 0)}),i.normalize(),o}function rw(e){return!!(e&&e.__CANCEL__)}function Li(e,t,n){I.call(this,e??"canceled",I.ERR_CANCELED,t,n),this.name="CanceledError"}E.inherits(Li,I,{__CANCEL__:!0});function iw(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new I("Request failed with status code "+n.status,[I.ERR_BAD_REQUEST,I.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function ZA(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function JA(e,t){e=e||10;const n=new Array(e),r=new Array(e);let i=0,o=0,s;return t=t!==void 0?t:1e3,function(l){const u=Date.now(),d=r[o];s||(s=u),n[i]=l,r[i]=u;let f=o,p=0;for(;f!==i;)p+=n[f++],f=f%e;if(i=(i+1)%e,i===o&&(o=(o+1)%e),u-s<t)return;const m=d&&u-d;return m?Math.round(p*1e3/m):void 0}}function e5(e,t){let n=0,r=1e3/t,i,o;const s=(u,d=Date.now())=>{n=d,i=null,o&&(clearTimeout(o),o=null),e(...u)};return[(...u)=>{const d=Date.now(),f=d-n;f>=r?s(u,d):(i=u,o||(o=setTimeout(()=>{o=null,s(i)},r-f)))},()=>i&&s(i)]}const yl=(e,t,n=3)=>{let r=0;const i=JA(50,250);return e5(o=>{const s=o.loaded,a=o.lengthComputable?o.total:void 0,l=s-r,u=i(l),d=s<=a;r=s;const f={loaded:s,total:a,progress:a?s/a:void 0,bytes:l,rate:u||void 0,estimated:u&&a&&d?(a-s)/u:void 0,event:o,lengthComputable:a!=null,[t?"download":"upload"]:!0};e(f)},n)},Fg=(e,t)=>{const n=e!=null;return[r=>t[0]({lengthComputable:n,total:e,loaded:r}),t[1]]},Mg=e=>(...t)=>E.asap(()=>e(...t)),t5=Ie.hasStandardBrowserEnv?((e,t)=>n=>(n=new URL(n,Ie.origin),e.protocol===n.protocol&&e.host===n.host&&(t||e.port===n.port)))(new URL(Ie.origin),Ie.navigator&&/(msie|trident)/i.test(Ie.navigator.userAgent)):()=>!0,n5=Ie.hasStandardBrowserEnv?{write(e,t,n,r,i,o){const s=[e+"="+encodeURIComponent(t)];E.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),E.isString(r)&&s.push("path="+r),E.isString(i)&&s.push("domain="+i),o===!0&&s.push("secure"),document.cookie=s.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function r5(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function i5(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function ow(e,t,n){let r=!r5(t);return e&&(r||n==!1)?i5(e,t):t}const zg=e=>e instanceof Mt?{...e}:e;function Er(e,t){t=t||{};const n={};function r(u,d,f,p){return E.isPlainObject(u)&&E.isPlainObject(d)?E.merge.call({caseless:p},u,d):E.isPlainObject(d)?E.merge({},d):E.isArray(d)?d.slice():d}function i(u,d,f,p){if(E.isUndefined(d)){if(!E.isUndefined(u))return r(void 0,u,f,p)}else return r(u,d,f,p)}function o(u,d){if(!E.isUndefined(d))return r(void 0,d)}function s(u,d){if(E.isUndefined(d)){if(!E.isUndefined(u))return r(void 0,u)}else return r(void 0,d)}function a(u,d,f){if(f in t)return r(u,d);if(f in e)return r(void 0,u)}const l={url:o,method:o,data:o,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,withXSRFToken:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:a,headers:(u,d,f)=>i(zg(u),zg(d),f,!0)};return E.forEach(Object.keys({...e,...t}),function(d){const f=l[d]||i,p=f(e[d],t[d],d);E.isUndefined(p)&&f!==a||(n[d]=p)}),n}const sw=e=>{const t=Er({},e);let{data:n,withXSRFToken:r,xsrfHeaderName:i,xsrfCookieName:o,headers:s,auth:a}=t;t.headers=s=Mt.from(s),t.url=ew(ow(t.baseURL,t.url,t.allowAbsoluteUrls),e.params,e.paramsSerializer),a&&s.set("Authorization","Basic "+btoa((a.username||"")+":"+(a.password?unescape(encodeURIComponent(a.password)):"")));let l;if(E.isFormData(n)){if(Ie.hasStandardBrowserEnv||Ie.hasStandardBrowserWebWorkerEnv)s.setContentType(void 0);else if((l=s.getContentType())!==!1){const[u,...d]=l?l.split(";").map(f=>f.trim()).filter(Boolean):[];s.setContentType([u||"multipart/form-data",...d].join("; "))}}if(Ie.hasStandardBrowserEnv&&(r&&E.isFunction(r)&&(r=r(t)),r||r!==!1&&t5(t.url))){const u=i&&o&&n5.read(o);u&&s.set(i,u)}return t},o5=typeof XMLHttpRequest<"u",s5=o5&&function(e){return new Promise(function(n,r){const i=sw(e);let o=i.data;const s=Mt.from(i.headers).normalize();let{responseType:a,onUploadProgress:l,onDownloadProgress:u}=i,d,f,p,m,y;function w(){m&&m(),y&&y(),i.cancelToken&&i.cancelToken.unsubscribe(d),i.signal&&i.signal.removeEventListener("abort",d)}let k=new XMLHttpRequest;k.open(i.method.toUpperCase(),i.url,!0),k.timeout=i.timeout;function h(){if(!k)return;const v=Mt.from("getAllResponseHeaders"in k&&k.getAllResponseHeaders()),S={data:!a||a==="text"||a==="json"?k.responseText:k.response,status:k.status,statusText:k.statusText,headers:v,config:e,request:k};iw(function(P){n(P),w()},function(P){r(P),w()},S),k=null}"onloadend"in k?k.onloadend=h:k.onreadystatechange=function(){!k||k.readyState!==4||k.status===0&&!(k.responseURL&&k.responseURL.indexOf("file:")===0)||setTimeout(h)},k.onabort=function(){k&&(r(new I("Request aborted",I.ECONNABORTED,e,k)),k=null)},k.onerror=function(){r(new I("Network Error",I.ERR_NETWORK,e,k)),k=null},k.ontimeout=function(){let b=i.timeout?"timeout of "+i.timeout+"ms exceeded":"timeout exceeded";const S=i.transitional||tw;i.timeoutErrorMessage&&(b=i.timeoutErrorMessage),r(new I(b,S.clarifyTimeoutError?I.ETIMEDOUT:I.ECONNABORTED,e,k)),k=null},o===void 0&&s.setContentType(null),"setRequestHeader"in k&&E.forEach(s.toJSON(),function(b,S){k.setRequestHeader(S,b)}),E.isUndefined(i.withCredentials)||(k.withCredentials=!!i.withCredentials),a&&a!=="json"&&(k.responseType=i.responseType),u&&([p,y]=yl(u,!0),k.addEventListener("progress",p)),l&&k.upload&&([f,m]=yl(l),k.upload.addEventListener("progress",f),k.upload.addEventListener("loadend",m)),(i.cancelToken||i.signal)&&(d=v=>{k&&(r(!v||v.type?new Li(null,e,k):v),k.abort(),k=null)},i.cancelToken&&i.cancelToken.subscribe(d),i.signal&&(i.signal.aborted?d():i.signal.addEventListener("abort",d)));const g=ZA(i.url);if(g&&Ie.protocols.indexOf(g)===-1){r(new I("Unsupported protocol "+g+":",I.ERR_BAD_REQUEST,e));return}k.send(o||null)})},a5=(e,t)=>{const{length:n}=e=e?e.filter(Boolean):[];if(t||n){let r=new AbortController,i;const o=function(u){if(!i){i=!0,a();const d=u instanceof Error?u:this.reason;r.abort(d instanceof I?d:new Li(d instanceof Error?d.message:d))}};let s=t&&setTimeout(()=>{s=null,o(new I(`timeout ${t} of ms exceeded`,I.ETIMEDOUT))},t);const a=()=>{e&&(s&&clearTimeout(s),s=null,e.forEach(u=>{u.unsubscribe?u.unsubscribe(o):u.removeEventListener("abort",o)}),e=null)};e.forEach(u=>u.addEventListener("abort",o));const{signal:l}=r;return l.unsubscribe=()=>E.asap(a),l}},l5=a5,c5=function*(e,t){let n=e.byteLength;if(!t||n<t){yield e;return}let r=0,i;for(;r<n;)i=r+t,yield e.slice(r,i),r=i},u5=async function*(e,t){for await(const n of d5(e))yield*c5(n,t)},d5=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}const t=e.getReader();try{for(;;){const{done:n,value:r}=await t.read();if(n)break;yield r}}finally{await t.cancel()}},Ng=(e,t,n,r)=>{const i=u5(e,t);let o=0,s,a=l=>{s||(s=!0,r&&r(l))};return new ReadableStream({async pull(l){try{const{done:u,value:d}=await i.next();if(u){a(),l.close();return}let f=d.byteLength;if(n){let p=o+=f;n(p)}l.enqueue(new Uint8Array(d))}catch(u){throw a(u),u}},cancel(l){return a(l),i.return()}},{highWaterMark:2})},oc=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",aw=oc&&typeof ReadableStream=="function",f5=oc&&(typeof TextEncoder=="function"?(e=>t=>e.encode(t))(new TextEncoder):async e=>new Uint8Array(await new Response(e).arrayBuffer())),lw=(e,...t)=>{try{return!!e(...t)}catch{return!1}},p5=aw&&lw(()=>{let e=!1;const t=new Request(Ie.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!t}),_g=64*1024,Vd=aw&&lw(()=>E.isReadableStream(new Response("").body)),xl={stream:Vd&&(e=>e.body)};oc&&(e=>{["text","arrayBuffer","blob","formData","stream"].forEach(t=>{!xl[t]&&(xl[t]=E.isFunction(e[t])?n=>n[t]():(n,r)=>{throw new I(`Response type '${t}' is not supported`,I.ERR_NOT_SUPPORT,r)})})})(new Response);const h5=async e=>{if(e==null)return 0;if(E.isBlob(e))return e.size;if(E.isSpecCompliantForm(e))return(await new Request(Ie.origin,{method:"POST",body:e}).arrayBuffer()).byteLength;if(E.isArrayBufferView(e)||E.isArrayBuffer(e))return e.byteLength;if(E.isURLSearchParams(e)&&(e=e+""),E.isString(e))return(await f5(e)).byteLength},m5=async(e,t)=>{const n=E.toFiniteNumber(e.getContentLength());return n??h5(t)},g5=oc&&(async e=>{let{url:t,method:n,data:r,signal:i,cancelToken:o,timeout:s,onDownloadProgress:a,onUploadProgress:l,responseType:u,headers:d,withCredentials:f="same-origin",fetchOptions:p}=sw(e);u=u?(u+"").toLowerCase():"text";let m=l5([i,o&&o.toAbortSignal()],s),y;const w=m&&m.unsubscribe&&(()=>{m.unsubscribe()});let k;try{if(l&&p5&&n!=="get"&&n!=="head"&&(k=await m5(d,r))!==0){let S=new Request(t,{method:"POST",body:r,duplex:"half"}),C;if(E.isFormData(r)&&(C=S.headers.get("content-type"))&&d.setContentType(C),S.body){const[P,T]=Fg(k,yl(Mg(l)));r=Ng(S.body,_g,P,T)}}E.isString(f)||(f=f?"include":"omit");const h="credentials"in Request.prototype;y=new Request(t,{...p,signal:m,method:n.toUpperCase(),headers:d.normalize().toJSON(),body:r,duplex:"half",credentials:h?f:void 0});let g=await fetch(y,p);const v=Vd&&(u==="stream"||u==="response");if(Vd&&(a||v&&w)){const S={};["status","statusText","headers"].forEach(L=>{S[L]=g[L]});const C=E.toFiniteNumber(g.headers.get("content-length")),[P,T]=a&&Fg(C,yl(Mg(a),!0))||[];g=new Response(Ng(g.body,_g,P,()=>{T&&T(),w&&w()}),S)}u=u||"text";let b=await xl[E.findKey(xl,u)||"text"](g,e);return!v&&w&&w(),await new Promise((S,C)=>{iw(S,C,{data:b,headers:Mt.from(g.headers),status:g.status,statusText:g.statusText,config:e,request:y})})}catch(h){throw w&&w(),h&&h.name==="TypeError"&&/Load failed|fetch/i.test(h.message)?Object.assign(new I("Network Error",I.ERR_NETWORK,e,y),{cause:h.cause||h}):I.from(h,h&&h.code,e,y)}}),Ud={http:RA,xhr:s5,fetch:g5};E.forEach(Ud,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const Dg=e=>`- ${e}`,v5=e=>E.isFunction(e)||e===null||e===!1,cw={getAdapter:e=>{e=E.isArray(e)?e:[e];const{length:t}=e;let n,r;const i={};for(let o=0;o<t;o++){n=e[o];let s;if(r=n,!v5(n)&&(r=Ud[(s=String(n)).toLowerCase()],r===void 0))throw new I(`Unknown adapter '${s}'`);if(r)break;i[s||"#"+o]=r}if(!r){const o=Object.entries(i).map(([a,l])=>`adapter ${a} `+(l===!1?"is not supported by the environment":"is not available in the build"));let s=t?o.length>1?`since :
`+o.map(Dg).join(`
`):" "+Dg(o[0]):"as no adapter specified";throw new I("There is no suitable adapter to dispatch the request "+s,"ERR_NOT_SUPPORT")}return r},adapters:Ud};function nu(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Li(null,e)}function Ig(e){return nu(e),e.headers=Mt.from(e.headers),e.data=tu.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),cw.getAdapter(e.adapter||Rp.adapter)(e).then(function(r){return nu(e),r.data=tu.call(e,e.transformResponse,r),r.headers=Mt.from(r.headers),r},function(r){return rw(r)||(nu(e),r&&r.response&&(r.response.data=tu.call(e,e.transformResponse,r.response),r.response.headers=Mt.from(r.response.headers))),Promise.reject(r)})}const uw="1.11.0",sc={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{sc[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const Vg={};sc.transitional=function(t,n,r){function i(o,s){return"[Axios v"+uw+"] Transitional option '"+o+"'"+s+(r?". "+r:"")}return(o,s,a)=>{if(t===!1)throw new I(i(s," has been removed"+(n?" in "+n:"")),I.ERR_DEPRECATED);return n&&!Vg[s]&&(Vg[s]=!0,console.warn(i(s," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(o,s,a):!0}};sc.spelling=function(t){return(n,r)=>(console.warn(`${r} is likely a misspelling of ${t}`),!0)};function y5(e,t,n){if(typeof e!="object")throw new I("options must be an object",I.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let i=r.length;for(;i-- >0;){const o=r[i],s=t[o];if(s){const a=e[o],l=a===void 0||s(a,o,e);if(l!==!0)throw new I("option "+o+" must be "+l,I.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new I("Unknown option "+o,I.ERR_BAD_OPTION)}}const Sa={assertOptions:y5,validators:sc},It=Sa.validators;class wl{constructor(t){this.defaults=t||{},this.interceptors={request:new Og,response:new Og}}async request(t,n){try{return await this._request(t,n)}catch(r){if(r instanceof Error){let i={};Error.captureStackTrace?Error.captureStackTrace(i):i=new Error;const o=i.stack?i.stack.replace(/^.+\n/,""):"";try{r.stack?o&&!String(r.stack).endsWith(o.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+o):r.stack=o}catch{}}throw r}}_request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=Er(this.defaults,n);const{transitional:r,paramsSerializer:i,headers:o}=n;r!==void 0&&Sa.assertOptions(r,{silentJSONParsing:It.transitional(It.boolean),forcedJSONParsing:It.transitional(It.boolean),clarifyTimeoutError:It.transitional(It.boolean)},!1),i!=null&&(E.isFunction(i)?n.paramsSerializer={serialize:i}:Sa.assertOptions(i,{encode:It.function,serialize:It.function},!0)),n.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?n.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:n.allowAbsoluteUrls=!0),Sa.assertOptions(n,{baseUrl:It.spelling("baseURL"),withXsrfToken:It.spelling("withXSRFToken")},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let s=o&&E.merge(o.common,o[n.method]);o&&E.forEach(["delete","get","head","post","put","patch","common"],y=>{delete o[y]}),n.headers=Mt.concat(s,o);const a=[];let l=!0;this.interceptors.request.forEach(function(w){typeof w.runWhen=="function"&&w.runWhen(n)===!1||(l=l&&w.synchronous,a.unshift(w.fulfilled,w.rejected))});const u=[];this.interceptors.response.forEach(function(w){u.push(w.fulfilled,w.rejected)});let d,f=0,p;if(!l){const y=[Ig.bind(this),void 0];for(y.unshift(...a),y.push(...u),p=y.length,d=Promise.resolve(n);f<p;)d=d.then(y[f++],y[f++]);return d}p=a.length;let m=n;for(f=0;f<p;){const y=a[f++],w=a[f++];try{m=y(m)}catch(k){w.call(this,k);break}}try{d=Ig.call(this,m)}catch(y){return Promise.reject(y)}for(f=0,p=u.length;f<p;)d=d.then(u[f++],u[f++]);return d}getUri(t){t=Er(this.defaults,t);const n=ow(t.baseURL,t.url,t.allowAbsoluteUrls);return ew(n,t.params,t.paramsSerializer)}}E.forEach(["delete","get","head","options"],function(t){wl.prototype[t]=function(n,r){return this.request(Er(r||{},{method:t,url:n,data:(r||{}).data}))}});E.forEach(["post","put","patch"],function(t){function n(r){return function(o,s,a){return this.request(Er(a||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:s}))}}wl.prototype[t]=n(),wl.prototype[t+"Form"]=n(!0)});const ja=wl;class Ap{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const r=this;this.promise.then(i=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](i);r._listeners=null}),this.promise.then=i=>{let o;const s=new Promise(a=>{r.subscribe(a),o=a}).then(i);return s.cancel=function(){r.unsubscribe(o)},s},t(function(o,s,a){r.reason||(r.reason=new Li(o,s,a),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const t=new AbortController,n=r=>{t.abort(r)};return this.subscribe(n),t.signal.unsubscribe=()=>this.unsubscribe(n),t.signal}static source(){let t;return{token:new Ap(function(i){t=i}),cancel:t}}}const x5=Ap;function w5(e){return function(n){return e.apply(null,n)}}function b5(e){return E.isObject(e)&&e.isAxiosError===!0}const Bd={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Bd).forEach(([e,t])=>{Bd[t]=e});const S5=Bd;function dw(e){const t=new ja(e),n=U1(ja.prototype.request,t);return E.extend(n,ja.prototype,t,{allOwnKeys:!0}),E.extend(n,t,null,{allOwnKeys:!0}),n.create=function(i){return dw(Er(e,i))},n}const ke=dw(Rp);ke.Axios=ja;ke.CanceledError=Li;ke.CancelToken=x5;ke.isCancel=rw;ke.VERSION=uw;ke.toFormData=rc;ke.AxiosError=I;ke.Cancel=ke.CanceledError;ke.all=function(t){return Promise.all(t)};ke.spread=w5;ke.isAxiosError=b5;ke.mergeConfig=Er;ke.AxiosHeaders=Mt;ke.formToJSON=e=>nw(E.isHTMLForm(e)?new FormData(e):e);ke.getAdapter=cw.getAdapter;ke.HttpStatusCode=S5;ke.default=ke;const j5=ke,sr=j5.create({baseURL:{BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1}.VITE_API_URL||"http://localhost:5000/api",timeout:1e4,headers:{"Content-Type":"application/json"}});sr.interceptors.request.use(e=>{const t=localStorage.getItem("token");return t&&(e.headers.Authorization=`Bearer ${t}`),e},e=>Promise.reject(e));sr.interceptors.response.use(e=>e,e=>{const{response:t}=e;if(t){const{status:n,data:r}=t;switch(n){case 401:localStorage.removeItem("token"),window.location.href="/login",ae.error("Session expired. Please login again.");break;case 403:ae.error("Access denied. You don't have permission to perform this action.");break;case 404:ae.error("Resource not found.");break;case 422:if(r.details){const i=r.details.map(o=>o.message).join(", ");ae.error(i)}else ae.error(r.error||"Validation failed");break;case 500:ae.error("Server error. Please try again later.");break;default:ae.error(r.error||"Something went wrong")}}else ae.error("Network error. Please check your connection.");return Promise.reject(e)});const Zt={get:(e,t)=>sr.get(e,t),post:(e,t,n)=>sr.post(e,t,n),put:(e,t,n)=>sr.put(e,t,n),patch:(e,t,n)=>sr.patch(e,t,n),delete:(e,t)=>sr.delete(e,t)},fw={list:e=>Zt.get("/courses",{params:e}),getBySlug:e=>Zt.get(`/courses/${e}`)},Ug=x.div`
  padding: var(--spacing-xxl) 0;
  min-height: 80vh;
`,k5=x.div`
  text-align: center;
  margin-bottom: var(--spacing-xxl);
`,C5=x.h1`
  color: var(--color-text);
  margin-bottom: var(--spacing-md);
  font-size: 2.5rem;
  font-weight: 600;
`,P5=x.p`
  color: var(--color-text-light);
  font-size: 1.125rem;
  line-height: 1.6;
  max-width: 600px;
  margin: 0 auto;
`,E5=x.div`
  background: var(--color-background-secondary);
  padding: var(--spacing-lg);
  border-radius: var(--border-radius-lg);
  margin-bottom: var(--spacing-xl);
  box-shadow: var(--shadow-sm);
`,T5=x.div`
  display: grid;
  grid-template-columns: 1fr auto auto auto;
  gap: var(--spacing-md);
  align-items: center;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: var(--spacing-sm);
  }
`,R5=x.div`
  position: relative;
  width: 100%;
`,ru=x.select`
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
`,A5=x.div`
  display: flex;
  gap: var(--spacing-sm);
  justify-content: flex-end;
  margin-bottom: var(--spacing-md);
`,$5=x.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: var(--spacing-lg);
  margin-bottom: var(--spacing-xl);
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,O5=x(_.div)`
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
`,L5=x.div`
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
`,F5=x.div`
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
`,M5=x.div`
  padding: var(--spacing-lg);
`,z5=x.h3`
  color: var(--color-text);
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: var(--spacing-sm);
  line-height: 1.4;
`,N5=x.p`
  color: var(--color-text-light);
  font-size: 0.9rem;
  line-height: 1.5;
  margin-bottom: var(--spacing-md);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,_5=x.div`
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
`,D5=x.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: var(--spacing-md);
`,I5=x.div`
  display: flex;
  align-items: baseline;
  gap: var(--spacing-sm);
`,V5=x.span`
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--color-primary);
`,U5=x.span`
  font-size: 1rem;
  color: var(--color-text-muted);
  text-decoration: line-through;
`,B5=x.span`
  background: var(--color-success);
  color: white;
  padding: 0.25rem 0.5rem;
  border-radius: var(--border-radius-sm);
  font-size: 0.75rem;
  font-weight: 500;
`,H5=x(ce)`
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
`,Bg=x.div`
  text-align: center;
  padding: var(--spacing-xxl) 0;
  color: var(--color-text-muted);
`,W5=x.div`
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
`,Q5=()=>{const[e,t]=KS(),[n,r]=j.useState(e.get("q")||""),[i,o]=j.useState(e.get("category")||""),[s,a]=j.useState(e.get("level")||""),[l,u]=j.useState(e.get("sort")||"createdAt"),[d,f]=j.useState(Number(e.get("page")||1)),[p]=j.useState(12),m=S=>S==="students"?"popularity":S==="price"?"price":"createdAt",{data:y,isLoading:w,isError:k}=Dy(["courses",{page:d,limit:p,searchTerm:n,categoryFilter:i,levelFilter:s,sortBy:l}],async()=>(await fw.list({page:d,limit:p,search:n||void 0,category:i||void 0,level:s||void 0,sort:m(l),order:"desc"})).data,{keepPreviousData:!0}),h=(y==null?void 0:y.data)??[],g=y==null?void 0:y.pagination;G.useEffect(()=>{const S=new URLSearchParams;n&&S.set("q",n),i&&S.set("category",i),s&&S.set("level",s),l&&l!=="createdAt"&&S.set("sort",l),d&&d!==1&&S.set("page",String(d)),t(S,{replace:!0})},[n,i,s,l,d,t]);const v=h,b=(S,C)=>Math.round((S-C)/S*100);return w?c.jsx(Ug,{children:c.jsx(W5,{})}):c.jsxs(Ug,{children:[c.jsxs(k5,{children:[c.jsx(C5,{children:"Курсы флористики"}),c.jsx(P5,{children:"Выберите подходящий курс и начните свой путь в мире флористики. Каждый курс включает бонусные уроки по бизнесу и социальным сетям."})]}),c.jsxs(E5,{children:[c.jsx(A5,{children:c.jsx(Jc,{onClick:()=>{r(""),o(""),a(""),u("createdAt"),f(1)},variant:"secondary",children:"Сбросить фильтры"})}),c.jsxs(T5,{children:[c.jsxs(R5,{children:[c.jsx(kp,{size:20}),c.jsx(V1,{type:"text",placeholder:"Поиск курсов...",value:n,onChange:S=>{r(S.target.value),f(1)}})]}),c.jsxs(ru,{value:i,onChange:S=>{o(S.target.value),f(1)},children:[c.jsx("option",{value:"",children:"Все категории"}),c.jsx("option",{value:"profession",children:"Профессия"}),c.jsx("option",{value:"design",children:"Дизайн"}),c.jsx("option",{value:"interior",children:"Интерьер"}),c.jsx("option",{value:"commercial",children:"Коммерция"}),c.jsx("option",{value:"wedding",children:"Свадьба"})]}),c.jsxs(ru,{value:s,onChange:S=>{a(S.target.value),f(1)},children:[c.jsx("option",{value:"",children:"Все уровни"}),c.jsx("option",{value:"beginner",children:"Начинающий"}),c.jsx("option",{value:"intermediate",children:"Средний"}),c.jsx("option",{value:"advanced",children:"Продвинутый"})]}),c.jsxs(ru,{value:l,onChange:S=>{u(S.target.value),f(1)},children:[c.jsx("option",{value:"createdAt",children:"По дате"}),c.jsx("option",{value:"price",children:"По цене"}),c.jsx("option",{value:"rating",children:"По рейтингу"}),c.jsx("option",{value:"students",children:"По популярности"})]})]})]}),c.jsx(Wn,{mode:"wait",children:k?c.jsxs(Bg,{children:[c.jsx("h3",{children:"Ошибка загрузки"}),c.jsx("p",{children:"Попробуйте обновить страницу или позже."})]}):v.length>0?c.jsx($5,{children:v.map((S,C)=>{var P;return c.jsxs(O5,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},transition:{delay:C*.1},children:[c.jsx(L5,{$imageUrl:S.image,children:c.jsx(F5,{children:c.jsx(jp,{size:24})})}),c.jsxs(M5,{children:[c.jsx(z5,{children:S.title}),c.jsx(N5,{children:S.description}),c.jsxs(_5,{children:[typeof S.rating<"u"&&c.jsxs("span",{children:[c.jsx(Pr,{size:16}),S.rating]}),c.jsxs("span",{children:[c.jsx(qo,{size:16}),S.duration]}),typeof S.studentsCount<"u"&&c.jsxs("span",{children:[c.jsx(us,{size:16}),S.studentsCount," студентов"]}),c.jsxs("span",{children:[c.jsx(bt,{size:16}),((P=S.lessons)==null?void 0:P.length)??0," уроков"]})]}),c.jsxs(D5,{children:[c.jsxs(I5,{children:[c.jsxs(V5,{children:[S.price.toLocaleString()," ₽"]}),S.originalPrice>S.price&&c.jsxs(c.Fragment,{children:[c.jsxs(U5,{children:[S.originalPrice.toLocaleString()," ₽"]}),c.jsxs(B5,{children:["-",b(S.originalPrice,S.price),"%"]})]})]}),c.jsxs(H5,{to:`/courses/${S.slug}`,children:["Подробнее",c.jsx(ZR,{size:16})]})]})]})]},S._id)})}):c.jsxs(Bg,{children:[c.jsx("h3",{children:"Курсы не найдены"}),c.jsx("p",{children:"Попробуйте изменить параметры поиска или фильтры"})]})}),g&&g.totalPages>1&&c.jsxs("div",{style:{display:"flex",justifyContent:"center",gap:"1rem",marginTop:"1rem"},children:[c.jsx(Jc,{onClick:()=>f(S=>Math.max(1,S-1)),disabled:!g.hasPrev,children:"Назад"}),c.jsxs("span",{style:{alignSelf:"center"},children:["Страница ",g.page," из ",g.totalPages]}),c.jsx(Jc,{onClick:()=>f(S=>S+1),disabled:!g.hasNext,children:"Далее"})]})]})},Is={login:e=>Zt.post("/auth/login",e),register:e=>Zt.post("/auth/register",e),getMe:()=>Zt.get("/auth/me"),updateProfile:e=>Zt.put("/auth/profile",e),changePassword:e=>Zt.put("/auth/change-password",e),forgotPassword:e=>Zt.post("/auth/forgot-password",e),resetPassword:e=>Zt.post("/auth/reset-password",e)},pw=j.createContext(void 0),q5={user:null,token:localStorage.getItem("token"),isLoading:!1,isAuthenticated:!1},K5=(e,t)=>{switch(t.type){case"AUTH_START":return{...e,isLoading:!0};case"AUTH_SUCCESS":return{...e,user:t.payload.user,token:t.payload.token,isLoading:!1,isAuthenticated:!0};case"AUTH_FAILURE":return{...e,user:null,token:null,isLoading:!1,isAuthenticated:!1};case"LOGOUT":return{...e,user:null,token:null,isLoading:!1,isAuthenticated:!1};case"UPDATE_USER":return{...e,user:t.payload};default:return e}},G5=({children:e})=>{const[t,n]=j.useReducer(K5,q5);j.useEffect(()=>{(async()=>{const u=localStorage.getItem("token");if(u)try{n({type:"AUTH_START"});const d=await Is.getMe();n({type:"AUTH_SUCCESS",payload:{user:d.data,token:u}})}catch{localStorage.removeItem("token"),n({type:"AUTH_FAILURE"})}})()},[]);const a={...t,login:async(l,u)=>{try{n({type:"AUTH_START"});const d=await Is.login({email:l,password:u}),{user:f,token:p}=d.data;localStorage.setItem("token",p),n({type:"AUTH_SUCCESS",payload:{user:f,token:p}})}catch(d){throw n({type:"AUTH_FAILURE"}),d}},register:async l=>{try{n({type:"AUTH_START"});const u=await Is.register(l),{user:d,token:f}=u.data;localStorage.setItem("token",f),n({type:"AUTH_SUCCESS",payload:{user:d,token:f}})}catch(u){throw n({type:"AUTH_FAILURE"}),u}},logout:()=>{localStorage.removeItem("token"),n({type:"LOGOUT"})},updateUser:async l=>{try{const u=await Is.updateProfile(l);n({type:"UPDATE_USER",payload:u.data})}catch(u){throw u}}};return c.jsx(pw.Provider,{value:a,children:e})},Lr=()=>{const e=j.useContext(pw);if(e===void 0)throw new Error("useAuth must be used within an AuthProvider");return e},iu=x.div`
  padding: var(--spacing-xxl) 0;
  min-height: 80vh;
`,Y5=x.section`
  background: linear-gradient(135deg, var(--color-accent) 0%, var(--color-background-secondary) 100%);
  padding: var(--spacing-xxl) 0;
  margin-bottom: var(--spacing-xxl);
`,X5=x.div`
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
`,Z5=x.div``,J5=x(_.h1)`
  color: var(--color-text);
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: var(--spacing-md);
  line-height: 1.2;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`,e$=x(_.p)`
  color: var(--color-text-light);
  font-size: 1.25rem;
  line-height: 1.6;
  margin-bottom: var(--spacing-lg);
`,t$=x(_.div)`
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
`,n$=x.div`
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
`,r$=x(_.button)`
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
`,i$=x.div`
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
`,Wi=x.section`
  margin-bottom: var(--spacing-xxl);
`,Qi=x.h2`
  color: var(--color-text);
  font-size: 1.75rem;
  font-weight: 600;
  margin-bottom: var(--spacing-lg);
`,o$=x.div`
  color: var(--color-text-light);
  line-height: 1.7;
  font-size: 1.1rem;
  margin-bottom: var(--spacing-xl);
`,s$=x.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--spacing-lg);
  margin-bottom: var(--spacing-xl);
`,a$=x(_.div)`
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
`,l$=x.div`
  margin-bottom: var(--spacing-xl);
`,c$=x.div`
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
`,u$=x.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: var(--spacing-sm);
`,d$=x.h4`
  color: var(--color-text);
  font-size: 1.125rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
`,f$=x.span`
  color: var(--color-text-muted);
  font-size: 0.875rem;
`,p$=x.p`
  color: var(--color-text-light);
  font-size: 0.9rem;
  line-height: 1.5;
`,h$=x.aside`
  position: sticky;
  top: var(--spacing-lg);
  height: fit-content;
`,m$=x(_.div)`
  background: white;
  padding: var(--spacing-xl);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-lg);
  margin-bottom: var(--spacing-lg);
`,g$=x.div`
  text-align: center;
  margin-bottom: var(--spacing-lg);
`,v$=x.div`
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--color-primary);
  margin-bottom: var(--spacing-sm);
`,y$=x.div`
  font-size: 1.25rem;
  color: var(--color-text-muted);
  text-decoration: line-through;
  margin-bottom: var(--spacing-sm);
`,x$=x.div`
  background: var(--color-success);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: var(--border-radius-sm);
  font-size: 0.875rem;
  font-weight: 500;
  display: inline-block;
`,w$=x.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-lg);
`,Hg=x.button`
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
`,b$=x.button`
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
`,S$=x.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-lg);
`,Wg=x.div`
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
`,j$=x(_.div)`
  background: white;
  padding: var(--spacing-lg);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-md);
  text-align: center;
`,k$=x.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--color-accent) 0%, var(--color-background-secondary) 100%);
  background-image: ${e=>e.$imageUrl?`url(${e.$imageUrl})`:"none"};
  background-size: cover;
  background-position: center;
  margin: 0 auto var(--spacing-md);
`,C$=x.h4`
  color: var(--color-text);
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: var(--spacing-sm);
`,P$=x.p`
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
`;const E$=()=>{const{slug:e}=yS(),{isAuthenticated:t}=Lr(),[n,r]=G.useState(!1),{data:i,isLoading:o,isError:s}=Dy(["course",e],async()=>(await fw.getBySlug(e)).data.data,{enabled:!!e}),a=(m,y)=>Math.round((m-y)/m*100),l=()=>{if(!t){ae.error("Войдите в аккаунт для записи на курс");return}ae.success("Вы успешно записались на курс!"),r(!0)},u=()=>{ae("Воспроизведение превью курса")};if(o)return c.jsx(iu,{children:c.jsx("div",{style:{textAlign:"center",padding:"var(--spacing-xxl) 0"},children:"Загрузка курса..."})});if(s||!i)return c.jsx(iu,{children:c.jsx("div",{style:{textAlign:"center",padding:"var(--spacing-xxl) 0"},children:"Курс не найден"})});const d=i,f=d.instructors&&d.instructors.length>0?d.instructors[0]:null,p=Array.isArray(d.lessons)?d.lessons.length:0;return c.jsxs(iu,{children:[c.jsx(Y5,{children:c.jsxs(X5,{children:[c.jsxs(Z5,{children:[c.jsx(J5,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.6},children:d.title}),c.jsx(e$,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.6,delay:.1},children:d.shortDescription}),c.jsxs(t$,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.6,delay:.2},children:[typeof d.rating<"u"&&c.jsxs("span",{children:[c.jsx(Pr,{size:16}),d.rating]}),c.jsxs("span",{children:[c.jsx(qo,{size:16}),d.duration]}),typeof d.studentsCount<"u"&&c.jsxs("span",{children:[c.jsx(us,{size:16}),d.studentsCount," студентов"]}),c.jsxs("span",{children:[c.jsx(bt,{size:16}),p," уроков"]})]})]}),c.jsx(n$,{$imageUrl:d.image,children:c.jsx(r$,{onClick:u,whileHover:{scale:1.1},whileTap:{scale:.95},children:c.jsx(jp,{size:32})})})]})}),c.jsxs(i$,{children:[c.jsxs("div",{children:[c.jsxs(Wi,{children:[c.jsx(Qi,{children:"Описание курса"}),c.jsx(o$,{children:d.description})]}),c.jsx(Wi,{children:Array.isArray(d.outcomes)&&d.outcomes.length>0&&c.jsxs(c.Fragment,{children:[c.jsx(Qi,{children:"Что вы получите"}),c.jsx(s$,{children:d.outcomes.map((m,y)=>c.jsxs(a$,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.5,delay:y*.05},viewport:{once:!0},children:[c.jsx("h4",{children:m}),c.jsx("p",{})]},y))})]})}),c.jsxs(Wi,{children:[c.jsx(Qi,{children:"Программа курса"}),c.jsx(l$,{children:Array.isArray(d.lessons)&&d.lessons.map((m,y)=>c.jsxs(c$,{$isCompleted:m.isCompleted,children:[c.jsxs(u$,{children:[c.jsxs(d$,{children:[m.isCompleted&&c.jsx(xt,{size:16,color:"var(--color-success)"}),m.title,m.isFree&&c.jsx("span",{style:{background:"var(--color-success)",color:"white",padding:"0.25rem 0.5rem",borderRadius:"var(--border-radius-sm)",fontSize:"0.75rem"},children:"Бесплатно"})]}),c.jsx(f$,{children:typeof m.duration=="number"?`${m.duration} мин`:m.duration})]}),c.jsx(p$,{children:m.description})]},m._id))})]}),c.jsxs(Wi,{children:[c.jsx(Qi,{children:"Требования"}),c.jsx("ul",{style:{color:"var(--color-text-light)",lineHeight:1.7},children:Array.isArray(d.requirements)&&d.requirements.map((m,y)=>c.jsx("li",{style:{marginBottom:"0.5rem"},children:m},y))})]}),c.jsxs(Wi,{children:[c.jsx(Qi,{children:"Результаты обучения"}),c.jsx("ul",{style:{color:"var(--color-text-light)",lineHeight:1.7},children:Array.isArray(d.outcomes)&&d.outcomes.map((m,y)=>c.jsx("li",{style:{marginBottom:"0.5rem"},children:m},y))})]})]}),c.jsxs(h$,{children:[c.jsxs(m$,{initial:{opacity:0,x:30},animate:{opacity:1,x:0},transition:{duration:.6,delay:.3},children:[c.jsxs(g$,{children:[c.jsxs(v$,{children:[d.price.toLocaleString()," ₽"]}),d.originalPrice>d.price&&c.jsxs(c.Fragment,{children:[c.jsxs(y$,{children:[d.originalPrice.toLocaleString()," ₽"]}),c.jsxs(x$,{children:["-",a(d.originalPrice,d.price),"%"]})]})]}),c.jsxs(S$,{children:[c.jsxs(Wg,{children:[c.jsx("div",{className:"stat-number",children:p}),c.jsx("div",{className:"stat-label",children:"Уроков"})]}),c.jsxs(Wg,{children:[c.jsx("div",{className:"stat-number",children:d.duration}),c.jsx("div",{className:"stat-label",children:"Длительность"})]})]}),c.jsxs(w$,{children:[n?c.jsxs(Hg,{children:[c.jsx(bt,{size:20}),"Перейти к курсу"]}):c.jsxs(Hg,{onClick:l,children:[c.jsx(s3,{size:20}),"Записаться на курс"]}),c.jsxs(b$,{children:[c.jsx(Md,{size:20}),"Добавить в избранное"]})]}),c.jsx("div",{style:{textAlign:"center",color:"var(--color-text-muted)",fontSize:"0.875rem"},children:"Гарантия возврата денег в течение 30 дней"})]}),f&&c.jsxs(j$,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.4},children:[c.jsx(k$,{$imageUrl:f.avatar||""}),c.jsx(C$,{children:`${f.firstName||""} ${f.lastName||""}`.trim()}),f.bio&&c.jsx(P$,{children:f.bio})]})]})]})]})},T$=x.div`
  padding: var(--spacing-xxl) 0;
  min-height: 80vh;
`,R$=x.section`
  text-align: center;
  margin-bottom: var(--spacing-xxl);
  background: linear-gradient(135deg, var(--color-accent) 0%, var(--color-background-secondary) 100%);
  padding: var(--spacing-xxl) 0;
  border-radius: var(--border-radius-lg);
`,A$=x(_.h1)`
  color: var(--color-text);
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: var(--spacing-lg);
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`,$$=x(_.p)`
  color: var(--color-text-light);
  font-size: 1.25rem;
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto;
`,O$=x.section`
  margin-bottom: var(--spacing-xxl);
`,Vs=x.h2`
  color: var(--color-text);
  font-size: 2.5rem;
  font-weight: 600;
  text-align: center;
  margin-bottom: var(--spacing-xl);
`,L$=x.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-xl);
  margin-bottom: var(--spacing-xxl);
`,F$=x(_.div)`
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
`,M$=x.div`
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
`,z$=x.h3`
  color: var(--color-text);
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: var(--spacing-md);
`,N$=x.p`
  color: var(--color-text-light);
  line-height: 1.6;
`,_$=x.section`
  margin-bottom: var(--spacing-xxl);
  background: var(--color-background-secondary);
  padding: var(--spacing-xxl) 0;
  border-radius: var(--border-radius-lg);
`,D$=x.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--spacing-lg);
`,I$=x(_.div)`
  background: white;
  padding: var(--spacing-lg);
  border-radius: var(--border-radius-md);
  box-shadow: var(--shadow-sm);
  text-align: center;
  
  &:hover {
    box-shadow: var(--shadow-md);
  }
`,V$=x.div`
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
`,U$=x.h4`
  color: var(--color-text);
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: var(--spacing-sm);
`,B$=x.p`
  color: var(--color-text-light);
  font-size: 0.9rem;
  line-height: 1.5;
`,H$=x.section`
  margin-bottom: var(--spacing-xxl);
`,W$=x.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: var(--spacing-xl);
`,Q$=x(_.div)`
  background: white;
  padding: var(--spacing-xl);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-md);
  border-left: 4px solid var(--color-primary);
`,q$=x.div`
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
`,K$=x.h3`
  color: var(--color-text);
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: var(--spacing-md);
`,G$=x.p`
  color: var(--color-text-light);
  line-height: 1.6;
`,Y$=x.section`
  background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%);
  padding: var(--spacing-xxl) 0;
  border-radius: var(--border-radius-lg);
  margin-bottom: var(--spacing-xxl);
`,X$=x.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--spacing-xl);
  text-align: center;
`,Z$=x(_.div)`
  color: white;
`,J$=x.div`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: var(--spacing-sm);
`,e4=x.div`
  font-size: 1.125rem;
  opacity: 0.9;
`,t4=x.section`
  margin-bottom: var(--spacing-xxl);
`,n4=x.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-lg);
`,r4=x(_.div)`
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
`,i4=x.div`
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
`,o4=x.div`
  flex: 1;
`,s4=x.h4`
  color: var(--color-text);
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: var(--spacing-sm);
`,a4=x.p`
  color: var(--color-text-light);
  font-size: 0.9rem;
  line-height: 1.5;
`,l4=()=>{const e=[{icon:c.jsx(Md,{}),title:"Наша миссия",description:"Сделать качественное образование в области флористики доступным для каждого, кто мечтает о творческой профессии."},{icon:c.jsx(I1,{}),title:"Наша цель",description:"Подготовить профессиональных флористов, способных создавать уникальные композиции и успешно вести бизнес."},{icon:c.jsx(us,{}),title:"Наше сообщество",description:"Создать дружное сообщество флористов, где каждый может поделиться опытом и найти поддержку."}],t=[{icon:c.jsx(ki,{}),title:"Качество",description:"Мы гарантируем высокое качество обучения и постоянное обновление программ."},{icon:c.jsx(Md,{}),title:"Забота",description:"Индивидуальный подход к каждому студенту и поддержка на всех этапах обучения."},{icon:c.jsx(bt,{}),title:"Инновации",description:"Использование современных технологий и актуальных методик преподавания."},{icon:c.jsx(Pr,{}),title:"Экспертиза",description:"Обучение у ведущих специалистов с многолетним опытом в индустрии."}],n=[{number:"01",title:"Практический подход",description:"Все курсы построены на практических занятиях. Вы не просто изучаете теорию, а сразу применяете знания на практике."},{number:"02",title:"Персональное сопровождение",description:"Каждый студент получает индивидуальную поддержку от преподавателей и кураторов на протяжении всего обучения."},{number:"03",title:"Бизнес-ориентированность",description:"Помимо творческих навыков, вы получаете знания по ведению бизнеса и продвижению в социальных сетях."},{number:"04",title:"Гибкое обучение",description:"Учитесь в удобном для вас темпе. Доступ к материалам курса остается навсегда."}],r=[{number:"500+",label:"Выпускников"},{number:"15+",label:"Экспертов"},{number:"95%",label:"Успешных проектов"},{number:"24/7",label:"Поддержка"}],i=[{icon:c.jsx(xt,{}),title:"Бонусные уроки",description:"К каждому курсу прилагаются уроки по бизнесу и продвижению в социальных сетях."},{icon:c.jsx(xt,{}),title:"Скидки на курсы",description:"Скидка 20% на каждый следующий курс по бизнесу и социальным сетям."},{icon:c.jsx(xt,{}),title:"База поставщиков",description:"Доступ к проверенной базе поставщиков цветов и материалов для студентов."},{icon:c.jsx(xt,{}),title:"Сертификат",description:"Получение сертификата по завершении курса с возможностью трудоустройства."}];return c.jsxs(T$,{children:[c.jsxs(R$,{children:[c.jsx(A$,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.6},children:"О школе Flerr"}),c.jsx($$,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.6,delay:.2},children:"Мы создаем будущее флористики, обучая талантливых людей создавать красоту и строить успешный бизнес в мире цветов."})]}),c.jsxs(O$,{children:[c.jsx(Vs,{children:"Наша миссия и цели"}),c.jsx(L$,{children:e.map((o,s)=>c.jsxs(F$,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.6,delay:s*.1},viewport:{once:!0},children:[c.jsx(M$,{children:o.icon}),c.jsx(z$,{children:o.title}),c.jsx(N$,{children:o.description})]},s))})]}),c.jsxs(_$,{children:[c.jsx(Vs,{children:"Наши ценности"}),c.jsx(D$,{children:t.map((o,s)=>c.jsxs(I$,{initial:{opacity:0,scale:.9},whileInView:{opacity:1,scale:1},transition:{duration:.5,delay:s*.1},viewport:{once:!0},children:[c.jsx(V$,{children:o.icon}),c.jsx(U$,{children:o.title}),c.jsx(B$,{children:o.description})]},s))})]}),c.jsxs(H$,{children:[c.jsx(Vs,{children:"Наш подход к обучению"}),c.jsx(W$,{children:n.map((o,s)=>c.jsxs(Q$,{initial:{opacity:0,x:-30},whileInView:{opacity:1,x:0},transition:{duration:.6,delay:s*.1},viewport:{once:!0},children:[c.jsx(q$,{children:o.number}),c.jsx(K$,{children:o.title}),c.jsx(G$,{children:o.description})]},s))})]}),c.jsx(Y$,{children:c.jsx(X$,{children:r.map((o,s)=>c.jsxs(Z$,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.6,delay:s*.1},viewport:{once:!0},children:[c.jsx(J$,{children:o.number}),c.jsx(e4,{children:o.label})]},s))})}),c.jsxs(t4,{children:[c.jsx(Vs,{children:"Преимущества обучения"}),c.jsx(n4,{children:i.map((o,s)=>c.jsxs(r4,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.5,delay:s*.1},viewport:{once:!0},children:[c.jsx(i4,{children:o.icon}),c.jsxs(o4,{children:[c.jsx(s4,{children:o.title}),c.jsx(a4,{children:o.description})]})]},s))})]})]})},Qg=x.div`
  padding: var(--spacing-xxl) 0;
  min-height: 80vh;
`,c4=x.div`
  text-align: center;
  margin-bottom: var(--spacing-xxl);
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 var(--spacing-lg);
`,u4=x(_.h1)`
  color: var(--color-text);
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: var(--spacing-md);
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`,d4=x(_.p)`
  color: var(--color-text-light);
  font-size: 1.25rem;
  line-height: 1.6;
  margin-bottom: var(--spacing-lg);
`,f4=x(_.div)`
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
`,h4=x.div`
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
`,m4=x.div`
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
`,qg=x.select`
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
`,g4=x.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-lg);
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: var(--spacing-lg);
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,v4=x(_.div)`
  background: white;
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-md);
  overflow: hidden;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-lg);
  }
`,y4=x.div`
  position: relative;
  height: 200px;
  background: linear-gradient(135deg, var(--color-accent) 0%, var(--color-background-secondary) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
`,x4=x.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: white;
  background-image: ${e=>e.$imageUrl?`url(${e.$imageUrl})`:"none"};
  background-size: cover;
  background-position: center;
  border: 4px solid white;
  box-shadow: var(--shadow-md);
`,w4=x.div`
  padding: var(--spacing-lg);
`,b4=x.h3`
  color: var(--color-text);
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: var(--spacing-sm);
`,S4=x.p`
  color: var(--color-primary);
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: var(--spacing-md);
`,j4=x.p`
  color: var(--color-text-light);
  font-size: 0.9rem;
  line-height: 1.6;
  margin-bottom: var(--spacing-md);
`,k4=x.div`
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
`,C4=x.div`
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
`,P4=x.div`
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
`,E4=x.div`
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
`,T4=x.button`
  background: var(--color-primary);
  color: white;
  
  &:hover {
    background: var(--color-hover-primary);
  }
`,R4=x.button`
  background: var(--color-accent);
  color: var(--color-primary);
  
  &:hover {
    background: var(--color-primary);
    color: white;
  }
`,A4=x.div`
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
`,$4=x.div`
  position: absolute;
  top: var(--spacing-md);
  right: var(--spacing-md);
  background: var(--color-primary);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: var(--border-radius-sm);
  font-size: 0.75rem;
  font-weight: 500;
`,O4=()=>{const[e,t]=j.useState([]),[n,r]=j.useState(!0),[i,o]=j.useState(""),[s,a]=j.useState(""),[l,u]=j.useState(""),d=[{_id:"1",name:"Анна Петрова",title:"Ведущий флорист",avatar:"/images/instructor-1.jpg",bio:'Профессиональный флорист с 10-летним опытом работы. Основатель студии "Цветочная мастерская". Специализируется на свадебной флористике и интерьерных композициях.',experience:10,rating:4.9,studentsCount:156,coursesCount:8,specialization:"Свадебная флористика",location:"Москва",isFeatured:!0,socialMedia:{instagram:"@anna_florist",facebook:"anna.petrovna",website:"www.annaflorist.com"}},{_id:"2",name:"Мария Сидорова",title:"Флорист-дизайнер",avatar:"/images/instructor-2.jpg",bio:'Дизайнер с художественным образованием. Создает уникальные композиции из сухих и искусственных цветов. Автор курса "Интерьерные композиции".',experience:8,rating:4.8,studentsCount:98,coursesCount:5,specialization:"Интерьерные композиции",location:"Санкт-Петербург",isFeatured:!1,socialMedia:{instagram:"@maria_design",facebook:"maria.sidorova",website:"www.mariadesign.ru"}},{_id:"3",name:"Елена Козлова",title:"Коммерческий флорист",avatar:"/images/instructor-3.jpg",bio:'Эксперт по коммерческой флористике. Помогает начинающим флористам открыть свой бизнес. Автор популярного курса "Коммерческий флорист".',experience:12,rating:4.9,studentsCount:203,coursesCount:12,specialization:"Коммерческая флористика",location:"Москва",isFeatured:!0,socialMedia:{instagram:"@elena_commercial",facebook:"elena.kozlovna",website:"www.elenaflorist.ru"}},{_id:"4",name:"Ольга Иванова",title:"Мастер свадебной флористики",avatar:"/images/instructor-4.jpg",bio:"Специалист по свадебной флористике с международным опытом. Работала в Италии и Франции. Создает роскошные свадебные композиции.",experience:15,rating:5,studentsCount:89,coursesCount:6,specialization:"Свадебная флористика",location:"Казань",isFeatured:!1,socialMedia:{instagram:"@olga_wedding",facebook:"olga.ivanova",website:"www.olgawedding.ru"}},{_id:"5",name:"Татьяна Смирнова",title:"Флорист-преподаватель",avatar:"/images/instructor-5.jpg",bio:"Опытный преподаватель с педагогическим образованием. Специализируется на обучении начинающих флористов. Автор методических пособий.",experience:7,rating:4.7,studentsCount:134,coursesCount:9,specialization:"Обучение флористике",location:"Екатеринбург",isFeatured:!1,socialMedia:{instagram:"@tatiana_teach",facebook:"tatiana.smirnova",website:"www.tatianateach.ru"}},{_id:"6",name:"Ирина Волкова",title:"Дизайнер интерьерных композиций",avatar:"/images/instructor-6.jpg",bio:"Художник-дизайнер, специализирующийся на создании интерьерных композиций из сухих цветов. Автор уникальных техник сохранения цветов.",experience:9,rating:4.8,studentsCount:76,coursesCount:4,specialization:"Интерьерные композиции",location:"Новосибирск",isFeatured:!1,socialMedia:{instagram:"@irina_interior",facebook:"irina.volkova",website:"www.irinainterior.ru"}}];j.useEffect(()=>{setTimeout(()=>{t(d),r(!1)},1e3)},[]);const f=e.filter(h=>{const g=h.name.toLowerCase().includes(i.toLowerCase())||h.specialization.toLowerCase().includes(i.toLowerCase()),v=!s||h.experience>=parseInt(s),b=!l||h.specialization===l;return g&&v&&b}),p=h=>{ae.success(`Связаться с ${h.name}`)},m=h=>{ae(`Переход к профилю ${h.name}`)},y=e.length,w=e.filter(h=>h.isFeatured).length,k=(e.reduce((h,g)=>h+g.rating,0)/e.length).toFixed(1);return n?c.jsx(Qg,{children:c.jsx("div",{style:{textAlign:"center",padding:"var(--spacing-xxl) 0"},children:"Загрузка преподавателей..."})}):c.jsxs(Qg,{children:[c.jsxs(c4,{children:[c.jsx(u4,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.6},children:"Наши преподаватели"}),c.jsx(d4,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.6,delay:.1},children:"Учитесь у лучших флористов России с многолетним опытом работы"}),c.jsxs(f4,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.6,delay:.2},children:[c.jsxs("div",{className:"stat",children:[c.jsx("div",{className:"number",children:y}),c.jsx("div",{className:"label",children:"Преподавателей"})]}),c.jsxs("div",{className:"stat",children:[c.jsx("div",{className:"number",children:w}),c.jsx("div",{className:"label",children:"Ведущих специалистов"})]}),c.jsxs("div",{className:"stat",children:[c.jsx("div",{className:"number",children:k}),c.jsx("div",{className:"label",children:"Средний рейтинг"})]})]})]}),c.jsx(p4,{children:c.jsxs(h4,{children:[c.jsxs(m4,{children:[c.jsx(kp,{size:20}),c.jsx("input",{type:"text",placeholder:"Поиск по имени или специализации...",value:i,onChange:h=>o(h.target.value)})]}),c.jsxs(qg,{value:s,onChange:h=>a(h.target.value),children:[c.jsx("option",{value:"",children:"Любой опыт"}),c.jsx("option",{value:"5",children:"От 5 лет"}),c.jsx("option",{value:"10",children:"От 10 лет"}),c.jsx("option",{value:"15",children:"От 15 лет"})]}),c.jsxs(qg,{value:l,onChange:h=>u(h.target.value),children:[c.jsx("option",{value:"",children:"Все специализации"}),c.jsx("option",{value:"Свадебная флористика",children:"Свадебная флористика"}),c.jsx("option",{value:"Интерьерные композиции",children:"Интерьерные композиции"}),c.jsx("option",{value:"Коммерческая флористика",children:"Коммерческая флористика"}),c.jsx("option",{value:"Обучение флористике",children:"Обучение флористике"})]})]})}),c.jsx(g4,{children:c.jsx(Wn,{mode:"wait",children:f.length>0?f.map((h,g)=>c.jsxs(v4,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:g*.1},layout:!0,children:[c.jsxs(y4,{children:[h.isFeatured&&c.jsx($4,{children:"Ведущий специалист"}),c.jsx(x4,{$imageUrl:h.avatar})]}),c.jsxs(w4,{children:[c.jsx(b4,{children:h.name}),c.jsx(S4,{children:h.title}),c.jsx(j4,{children:h.bio}),c.jsxs(k4,{children:[c.jsxs("div",{className:"stat",children:[c.jsx("div",{className:"number",children:h.experience}),c.jsx("div",{className:"label",children:"лет опыта"})]}),c.jsxs("div",{className:"stat",children:[c.jsx("div",{className:"number",children:h.studentsCount}),c.jsx("div",{className:"label",children:"студентов"})]}),c.jsxs("div",{className:"stat",children:[c.jsx("div",{className:"number",children:h.coursesCount}),c.jsx("div",{className:"label",children:"курсов"})]})]}),c.jsxs(C4,{children:[c.jsxs("span",{children:[c.jsx(Pr,{size:16}),h.rating]}),c.jsxs("span",{children:[c.jsx(Sp,{size:16}),h.location]}),c.jsxs("span",{children:[c.jsx(ki,{size:16}),h.specialization]})]}),c.jsxs(P4,{children:[c.jsx("a",{href:"#",title:"Instagram",children:c.jsx(bp,{size:18})}),c.jsx("a",{href:"#",title:"Facebook",children:c.jsx(wp,{size:18})}),c.jsx("a",{href:"#",title:"Website",children:c.jsx(Fd,{size:18})})]}),c.jsxs(E4,{children:[c.jsxs(T4,{onClick:()=>m(h),children:[c.jsx(bt,{size:16}),"Профиль"]}),c.jsxs(R4,{onClick:()=>p(h),children:[c.jsx($i,{size:16}),"Связаться"]})]})]})]},h._id)):c.jsxs(A4,{children:[c.jsx("h3",{children:"Преподаватели не найдены"}),c.jsx("p",{children:"Попробуйте изменить параметры поиска"})]})})})]})},Kg=x.div`
  padding: var(--spacing-xxl) 0;
  min-height: 80vh;
`,L4=x.div`
  text-align: center;
  margin-bottom: var(--spacing-xxl);
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 var(--spacing-lg);
`,F4=x(_.h1)`
  color: var(--color-text);
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: var(--spacing-md);
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`,M4=x(_.p)`
  color: var(--color-text-light);
  font-size: 1.25rem;
  line-height: 1.6;
  margin-bottom: var(--spacing-lg);
`,z4=x(_.div)`
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
`,N4=x.div`
  max-width: 1200px;
  margin: 0 auto var(--spacing-xxl);
  padding: 0 var(--spacing-lg);
`,_4=x.div`
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
`,D4=x.div`
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
`,Gg=x.select`
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
`,I4=x.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-lg);
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: var(--spacing-lg);
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,V4=x(_.div)`
  background: white;
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-md);
  overflow: hidden;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-lg);
  }
`,U4=x.div`
  position: relative;
  height: 200px;
  background: linear-gradient(135deg, var(--color-accent) 0%, var(--color-background-secondary) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
`,B4=x.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: white;
  background-image: ${e=>e.$imageUrl?`url(${e.$imageUrl})`:"none"};
  background-size: cover;
  background-position: center;
  border: 4px solid white;
  box-shadow: var(--shadow-md);
`,H4=x.div`
  padding: var(--spacing-lg);
`,W4=x.h3`
  color: var(--color-text);
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: var(--spacing-sm);
`,Q4=x.p`
  color: var(--color-primary);
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: var(--spacing-md);
`,q4=x.p`
  color: var(--color-text-light);
  font-size: 0.9rem;
  line-height: 1.6;
  margin-bottom: var(--spacing-md);
`,K4=x.div`
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
`,G4=x.div`
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
`,Y4=x.div`
  display: flex;
  gap: var(--spacing-sm);
  margin-bottom: var(--spacing-md);
  flex-wrap: wrap;
`,ou=x.span`
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
`,X4=x.div`
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
`,Z4=x.div`
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
`,J4=x.div`
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
`,eO=x.button`
  background: var(--color-primary);
  color: white;
  
  &:hover {
    background: var(--color-hover-primary);
  }
`,tO=x.button`
  background: var(--color-accent);
  color: var(--color-primary);
  
  &:hover {
    background: var(--color-primary);
    color: white;
  }
`,nO=x.div`
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
`,rO=()=>{const[e,t]=j.useState([]),[n,r]=j.useState(!0),[i,o]=j.useState(""),[s,a]=j.useState(""),[l,u]=j.useState(""),d=[{_id:"1",name:"Цветочный Рай",category:"Свежие цветы",description:"Поставщик свежих цветов премиум-класса. Работаем с лучшими плантациями Голландии, Эквадора и Кении. Доставка по всей России.",logo:"/images/supplier-1.jpg",rating:4.9,productsCount:150,deliveryTime:"1-2 дня",region:"Москва",isVerified:!0,isFeatured:!0,isPremium:!0,contact:{phone:"+7 (495) 123-45-67",email:"info@flowerparadise.ru",website:"www.flowerparadise.ru"},socialMedia:{instagram:"@flowerparadise",facebook:"flowerparadise.ru"}},{_id:"2",name:"Сухие Цветы",category:"Сухие цветы",description:"Специализируемся на поставке качественных сухих цветов и декоративных элементов для интерьерных композиций.",logo:"/images/supplier-2.jpg",rating:4.7,productsCount:89,deliveryTime:"3-5 дней",region:"Санкт-Петербург",isVerified:!0,isFeatured:!1,isPremium:!1,contact:{phone:"+7 (812) 987-65-43",email:"sales@dryflowers.ru",website:"www.dryflowers.ru"},socialMedia:{instagram:"@dryflowers",facebook:"dryflowers.ru"}},{_id:"3",name:"Искусственные Цветы",category:"Искусственные цветы",description:"Производитель высококачественных искусственных цветов для декора и флористики. Широкий ассортимент и доступные цены.",logo:"/images/supplier-3.jpg",rating:4.5,productsCount:234,deliveryTime:"2-3 дня",region:"Екатеринбург",isVerified:!0,isFeatured:!1,isPremium:!0,contact:{phone:"+7 (343) 456-78-90",email:"info@artificialflowers.ru",website:"www.artificialflowers.ru"},socialMedia:{instagram:"@artificialflowers",facebook:"artificialflowers.ru"}},{_id:"4",name:"Флористические Материалы",category:"Материалы и инструменты",description:"Поставщик профессиональных материалов и инструментов для флористов. Ленты, проволока, флористическая губка, ножницы.",logo:"/images/supplier-4.jpg",rating:4.8,productsCount:567,deliveryTime:"1-3 дня",region:"Москва",isVerified:!0,isFeatured:!0,isPremium:!1,contact:{phone:"+7 (495) 234-56-78",email:"sales@floristmaterials.ru",website:"www.floristmaterials.ru"},socialMedia:{instagram:"@floristmaterials",facebook:"floristmaterials.ru"}},{_id:"5",name:"Упаковка для Букетов",category:"Упаковка",description:"Специализируемся на поставке качественной упаковки для букетов и подарков. Бумага, ленты, коробки, пакеты.",logo:"/images/supplier-5.jpg",rating:4.6,productsCount:123,deliveryTime:"2-4 дня",region:"Казань",isVerified:!0,isFeatured:!1,isPremium:!1,contact:{phone:"+7 (843) 345-67-89",email:"info@packaging.ru",website:"www.packaging.ru"},socialMedia:{instagram:"@packaging",facebook:"packaging.ru"}},{_id:"6",name:"Экзотические Цветы",category:"Свежие цветы",description:"Поставщик экзотических цветов и редких сортов. Орхидеи, антуриумы, стрелиции и другие тропические растения.",logo:"/images/supplier-6.jpg",rating:4.9,productsCount:78,deliveryTime:"3-7 дней",region:"Новосибирск",isVerified:!0,isFeatured:!0,isPremium:!0,contact:{phone:"+7 (383) 456-78-90",email:"sales@exoticflowers.ru",website:"www.exoticflowers.ru"},socialMedia:{instagram:"@exoticflowers",facebook:"exoticflowers.ru"}}];j.useEffect(()=>{setTimeout(()=>{t(d),r(!1)},1e3)},[]);const f=e.filter(h=>{const g=h.name.toLowerCase().includes(i.toLowerCase())||h.category.toLowerCase().includes(i.toLowerCase())||h.description.toLowerCase().includes(i.toLowerCase()),v=!s||h.category===s,b=!l||h.region===l;return g&&v&&b}),p=h=>{ae.success(`Связаться с ${h.name}`)},m=h=>{ae(`Переход к каталогу ${h.name}`)},y=e.length,w=e.filter(h=>h.isVerified).length,k=e.filter(h=>h.isFeatured).length;return n?c.jsx(Kg,{children:c.jsx("div",{style:{textAlign:"center",padding:"var(--spacing-xxl) 0"},children:"Загрузка поставщиков..."})}):c.jsxs(Kg,{children:[c.jsxs(L4,{children:[c.jsx(F4,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.6},children:"База поставщиков"}),c.jsx(M4,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.6,delay:.1},children:"Надежные поставщики цветов, материалов и инструментов для флористов"}),c.jsxs(z4,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.6,delay:.2},children:[c.jsxs("div",{className:"stat",children:[c.jsx("div",{className:"number",children:y}),c.jsx("div",{className:"label",children:"Поставщиков"})]}),c.jsxs("div",{className:"stat",children:[c.jsx("div",{className:"number",children:w}),c.jsx("div",{className:"label",children:"Проверенных"})]}),c.jsxs("div",{className:"stat",children:[c.jsx("div",{className:"number",children:k}),c.jsx("div",{className:"label",children:"Рекомендуемых"})]})]})]}),c.jsx(N4,{children:c.jsxs(_4,{children:[c.jsxs(D4,{children:[c.jsx(kp,{size:20}),c.jsx("input",{type:"text",placeholder:"Поиск по названию, категории или описанию...",value:i,onChange:h=>o(h.target.value)})]}),c.jsxs(Gg,{value:s,onChange:h=>a(h.target.value),children:[c.jsx("option",{value:"",children:"Все категории"}),c.jsx("option",{value:"Свежие цветы",children:"Свежие цветы"}),c.jsx("option",{value:"Сухие цветы",children:"Сухие цветы"}),c.jsx("option",{value:"Искусственные цветы",children:"Искусственные цветы"}),c.jsx("option",{value:"Материалы и инструменты",children:"Материалы и инструменты"}),c.jsx("option",{value:"Упаковка",children:"Упаковка"})]}),c.jsxs(Gg,{value:l,onChange:h=>u(h.target.value),children:[c.jsx("option",{value:"",children:"Все регионы"}),c.jsx("option",{value:"Москва",children:"Москва"}),c.jsx("option",{value:"Санкт-Петербург",children:"Санкт-Петербург"}),c.jsx("option",{value:"Екатеринбург",children:"Екатеринбург"}),c.jsx("option",{value:"Казань",children:"Казань"}),c.jsx("option",{value:"Новосибирск",children:"Новосибирск"})]})]})}),c.jsx(I4,{children:c.jsx(Wn,{mode:"wait",children:f.length>0?f.map((h,g)=>c.jsxs(V4,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:g*.1},layout:!0,children:[c.jsx(U4,{children:c.jsx(B4,{$imageUrl:h.logo})}),c.jsxs(H4,{children:[c.jsx(W4,{children:h.name}),c.jsx(Q4,{children:h.category}),c.jsx(q4,{children:h.description}),c.jsxs(K4,{children:[c.jsxs("div",{className:"stat",children:[c.jsx("div",{className:"number",children:h.rating}),c.jsx("div",{className:"label",children:"рейтинг"})]}),c.jsxs("div",{className:"stat",children:[c.jsx("div",{className:"number",children:h.productsCount}),c.jsx("div",{className:"label",children:"товаров"})]}),c.jsxs("div",{className:"stat",children:[c.jsx("div",{className:"number",children:h.deliveryTime}),c.jsx("div",{className:"label",children:"доставка"})]})]}),c.jsxs(G4,{children:[c.jsxs("span",{children:[c.jsx(Pr,{size:16}),h.rating]}),c.jsxs("span",{children:[c.jsx(Sp,{size:16}),h.region]}),c.jsxs("span",{children:[c.jsx(Pg,{size:16}),h.category]})]}),c.jsxs(Y4,{children:[h.isVerified&&c.jsxs(ou,{$type:"verified",children:[c.jsx(o3,{size:12}),"Проверен"]}),h.isFeatured&&c.jsxs(ou,{$type:"featured",children:[c.jsx(ki,{size:12}),"Рекомендуемый"]}),h.isPremium&&c.jsxs(ou,{$type:"premium",children:[c.jsx(Pr,{size:12}),"Премиум"]})]}),c.jsxs(X4,{children:[c.jsxs("div",{className:"contact-item",children:[c.jsx(vl,{size:14}),c.jsx("a",{href:`tel:${h.contact.phone}`,children:h.contact.phone})]}),c.jsxs("div",{className:"contact-item",children:[c.jsx($i,{size:14}),c.jsx("a",{href:`mailto:${h.contact.email}`,children:h.contact.email})]}),c.jsxs("div",{className:"contact-item",children:[c.jsx(Fd,{size:14}),c.jsx("a",{href:`https://${h.contact.website}`,target:"_blank",rel:"noopener noreferrer",children:h.contact.website})]})]}),c.jsxs(Z4,{children:[c.jsx("a",{href:"#",title:"Instagram",children:c.jsx(bp,{size:18})}),c.jsx("a",{href:"#",title:"Facebook",children:c.jsx(wp,{size:18})}),c.jsx("a",{href:"#",title:"Website",children:c.jsx(Fd,{size:18})})]}),c.jsxs(J4,{children:[c.jsxs(eO,{onClick:()=>m(h),children:[c.jsx(Pg,{size:16}),"Каталог"]}),c.jsxs(tO,{onClick:()=>p(h),children:[c.jsx(vl,{size:16}),"Связаться"]})]})]})]},h._id)):c.jsxs(nO,{children:[c.jsx("h3",{children:"Поставщики не найдены"}),c.jsx("p",{children:"Попробуйте изменить параметры поиска"})]})})})]})},iO=x.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-lg);
  background: linear-gradient(135deg, var(--color-accent) 0%, var(--color-background-secondary) 100%);
`,oO=x(_.div)`
  background: white;
  padding: var(--spacing-xxl);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-lg);
  width: 100%;
  max-width: 400px;
`,sO=x.div`
  text-align: center;
  margin-bottom: var(--spacing-xl);
`,aO=x.h1`
  color: var(--color-text);
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: var(--spacing-sm);
`,lO=x.p`
  color: var(--color-text-light);
  font-size: 1rem;
`,cO=x.form`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
`,Yg=x.div`
  position: relative;
`,Xg=x.input`
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
`,Zg=x.div`
  position: absolute;
  left: var(--spacing-md);
  top: 50%;
  transform: translateY(-50%);
  color: var(--color-text-muted);
`,uO=x.button`
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
`,Jg=x.div`
  color: var(--color-error);
  font-size: 0.875rem;
  margin-top: var(--spacing-xs);
  display: flex;
  align-items: center;
  gap: 0.25rem;
`,dO=x.button`
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
`,fO=x.div`
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
`,hO=x.div`
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
`,mO=x.div`
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
`,gO=()=>{var w,k;const[e,t]=j.useState({email:"",password:""}),[n,r]=j.useState({}),[i,o]=j.useState(!1),[s,a]=j.useState(!1),{login:l}=Lr(),u=ns(),f=((k=(w=hn().state)==null?void 0:w.from)==null?void 0:k.pathname)||"/",p=()=>{const h={};return e.email?/\S+@\S+\.\S+/.test(e.email)||(h.email="Введите корректный email"):h.email="Email обязателен",e.password?e.password.length<6&&(h.password="Пароль должен содержать минимум 6 символов"):h.password="Пароль обязателен",r(h),Object.keys(h).length===0},m=async h=>{if(h.preventDefault(),!!p()){a(!0);try{await l(e.email,e.password),ae.success("Добро пожаловать!"),u(f,{replace:!0})}catch(g){ae.error(g.message||"Ошибка входа")}finally{a(!1)}}},y=h=>{const{name:g,value:v}=h.target;t(b=>({...b,[g]:v})),n[g]&&r(b=>({...b,[g]:""}))};return c.jsx(iO,{children:c.jsxs(oO,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6},children:[c.jsxs(sO,{children:[c.jsx(aO,{children:"Вход в аккаунт"}),c.jsx(lO,{children:"Войдите в свой аккаунт для доступа к курсам"})]}),c.jsxs(cO,{onSubmit:m,children:[c.jsxs(Yg,{children:[c.jsx(Zg,{children:c.jsx($i,{size:20})}),c.jsx(Xg,{type:"email",name:"email",placeholder:"Введите email",value:e.email,onChange:y,$hasError:!!n.email}),n.email&&c.jsxs(Jg,{children:[c.jsx(jn,{size:16}),n.email]})]}),c.jsxs(Yg,{children:[c.jsx(Zg,{children:c.jsx(zd,{size:20})}),c.jsx(Xg,{type:i?"text":"password",name:"password",placeholder:"Введите пароль",value:e.password,onChange:y,$hasError:!!n.password}),c.jsx(uO,{type:"button",onClick:()=>o(!i),children:i?c.jsx(gl,{size:20}):c.jsx(Ko,{size:20})}),n.password&&c.jsxs(Jg,{children:[c.jsx(jn,{size:16}),n.password]})]}),c.jsx(dO,{type:"submit",$isLoading:s,disabled:s,children:s?c.jsxs(c.Fragment,{children:[c.jsx(mO,{}),"Вход..."]}):"Войти"})]}),c.jsx(fO,{children:c.jsx("span",{children:"или"})}),c.jsx(pO,{type:"button",onClick:()=>ae("Функция в разработке"),children:"Войти через Google"}),c.jsxs(hO,{children:[c.jsxs("p",{children:["Нет аккаунта?"," ",c.jsx(ce,{to:"/register",children:"Зарегистрироваться"})]}),c.jsx("p",{style:{marginTop:"0.5rem"},children:c.jsx(ce,{to:"/forgot-password",children:"Забыли пароль?"})})]})]})})},vO=x.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-lg);
  background: linear-gradient(135deg, var(--color-accent) 0%, var(--color-background-secondary) 100%);
`,yO=x(_.div)`
  background: white;
  padding: var(--spacing-xxl);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-lg);
  width: 100%;
  max-width: 500px;
`,xO=x.div`
  text-align: center;
  margin-bottom: var(--spacing-xl);
`,wO=x.h1`
  color: var(--color-text);
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: var(--spacing-sm);
`,bO=x.p`
  color: var(--color-text-light);
  font-size: 1rem;
`,SO=x.form`
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
`,ev=x.button`
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
`,qi=x.div`
  color: var(--color-success);
  font-size: 0.875rem;
  margin-top: var(--spacing-xs);
  display: flex;
  align-items: center;
  gap: 0.25rem;
`,jO=x.button`
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
`,kO=x.div`
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
`,CO=x.button`
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
`,PO=x.div`
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
`,EO=x.div`
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
`,TO=x.div`
  margin-top: var(--spacing-xs);
`,RO=x.div`
  height: 4px;
  background: var(--color-border);
  border-radius: 2px;
  overflow: hidden;
  margin-bottom: var(--spacing-xs);
`,AO=x.div`
  height: 100%;
  background: ${e=>e.$strength<=2?"var(--color-error)":e.$strength<=3?"var(--color-warning)":"var(--color-success)"};
  width: ${e=>e.$strength*25}%;
  transition: all 0.3s ease;
`,$O=x.div`
  font-size: 0.75rem;
  color: ${e=>e.$strength<=2?"var(--color-error)":e.$strength<=3?"var(--color-warning)":"var(--color-success)"};
`,OO=()=>{const[e,t]=j.useState({firstName:"",lastName:"",email:"",phone:"",password:"",confirmPassword:""}),[n,r]=j.useState({}),[i,o]=j.useState({}),[s,a]=j.useState(!1),[l,u]=j.useState(!1),[d,f]=j.useState(!1),{register:p}=Lr(),m=ns(),y=b=>{let S=0;return b.length>=8&&S++,/[a-z]/.test(b)&&S++,/[A-Z]/.test(b)&&S++,/[0-9]/.test(b)&&S++,/[^A-Za-z0-9]/.test(b)&&S++,Math.min(S,4)},w=b=>{switch(b){case 0:return"Очень слабый";case 1:return"Слабый";case 2:return"Средний";case 3:return"Хороший";case 4:return"Отличный";default:return""}},k=()=>{const b={},S={};return e.firstName?e.firstName.length<2?b.firstName="Имя должно содержать минимум 2 символа":S.firstName=!0:b.firstName="Имя обязательно",e.lastName?e.lastName.length<2?b.lastName="Фамилия должна содержать минимум 2 символа":S.lastName=!0:b.lastName="Фамилия обязательна",e.email?/\S+@\S+\.\S+/.test(e.email)?S.email=!0:b.email="Введите корректный email":b.email="Email обязателен",e.phone&&!/^[\+]?[0-9\s\-\(\)]{10,}$/.test(e.phone)?b.phone="Введите корректный номер телефона":e.phone&&(S.phone=!0),e.password?e.password.length<8?b.password="Пароль должен содержать минимум 8 символов":S.password=!0:b.password="Пароль обязателен",e.confirmPassword?e.password!==e.confirmPassword?b.confirmPassword="Пароли не совпадают":e.confirmPassword&&(S.confirmPassword=!0):b.confirmPassword="Подтвердите пароль",r(b),o(S),Object.keys(b).length===0},h=async b=>{if(b.preventDefault(),!!k()){f(!0);try{await p(e),ae.success("Регистрация успешна! Добро пожаловать!"),m("/")}catch(S){ae.error(S.message||"Ошибка регистрации")}finally{f(!1)}}},g=b=>{const{name:S,value:C}=b.target;t(P=>({...P,[S]:C})),n[S]&&r(P=>({...P,[S]:""})),i[S]&&o(P=>({...P,[S]:!1}))},v=y(e.password);return c.jsx(vO,{children:c.jsxs(yO,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6},children:[c.jsxs(xO,{children:[c.jsx(wO,{children:"Создать аккаунт"}),c.jsx(bO,{children:"Присоединяйтесь к сообществу флористов"})]}),c.jsxs(SO,{onSubmit:h,children:[c.jsxs(zr,{children:[c.jsx(_r,{children:c.jsx(Go,{size:20})}),c.jsx(Nr,{type:"text",name:"firstName",placeholder:"Имя",value:e.firstName,onChange:g,$hasError:!!n.firstName,$hasSuccess:i.firstName}),n.firstName&&c.jsxs(Dr,{children:[c.jsx(jn,{size:16}),n.firstName]}),i.firstName&&c.jsxs(qi,{children:[c.jsx(xt,{size:16}),"Отлично!"]})]}),c.jsxs(zr,{children:[c.jsx(_r,{children:c.jsx(Go,{size:20})}),c.jsx(Nr,{type:"text",name:"lastName",placeholder:"Фамилия",value:e.lastName,onChange:g,$hasError:!!n.lastName,$hasSuccess:i.lastName}),n.lastName&&c.jsxs(Dr,{children:[c.jsx(jn,{size:16}),n.lastName]}),i.lastName&&c.jsxs(qi,{children:[c.jsx(xt,{size:16}),"Отлично!"]})]}),c.jsxs(zr,{children:[c.jsx(_r,{children:c.jsx($i,{size:20})}),c.jsx(Nr,{type:"email",name:"email",placeholder:"Email",value:e.email,onChange:g,$hasError:!!n.email,$hasSuccess:i.email}),n.email&&c.jsxs(Dr,{children:[c.jsx(jn,{size:16}),n.email]}),i.email&&c.jsxs(qi,{children:[c.jsx(xt,{size:16}),"Отлично!"]})]}),c.jsxs(zr,{children:[c.jsx(_r,{children:c.jsx(vl,{size:20})}),c.jsx(Nr,{type:"tel",name:"phone",placeholder:"Телефон (необязательно)",value:e.phone,onChange:g,$hasError:!!n.phone,$hasSuccess:i.phone}),n.phone&&c.jsxs(Dr,{children:[c.jsx(jn,{size:16}),n.phone]}),i.phone&&c.jsxs(qi,{children:[c.jsx(xt,{size:16}),"Отлично!"]})]}),c.jsxs(zr,{children:[c.jsx(_r,{children:c.jsx(zd,{size:20})}),c.jsx(Nr,{type:s?"text":"password",name:"password",placeholder:"Пароль",value:e.password,onChange:g,$hasError:!!n.password,$hasSuccess:i.password}),c.jsx(ev,{type:"button",onClick:()=>a(!s),children:s?c.jsx(gl,{size:20}):c.jsx(Ko,{size:20})}),n.password&&c.jsxs(Dr,{children:[c.jsx(jn,{size:16}),n.password]}),e.password&&!n.password&&c.jsxs(TO,{children:[c.jsx(RO,{children:c.jsx(AO,{$strength:v})}),c.jsx($O,{$strength:v,children:w(v)})]})]}),c.jsxs(zr,{children:[c.jsx(_r,{children:c.jsx(zd,{size:20})}),c.jsx(Nr,{type:l?"text":"password",name:"confirmPassword",placeholder:"Подтвердите пароль",value:e.confirmPassword,onChange:g,$hasError:!!n.confirmPassword,$hasSuccess:i.confirmPassword}),c.jsx(ev,{type:"button",onClick:()=>u(!l),children:l?c.jsx(gl,{size:20}):c.jsx(Ko,{size:20})}),n.confirmPassword&&c.jsxs(Dr,{children:[c.jsx(jn,{size:16}),n.confirmPassword]}),i.confirmPassword&&c.jsxs(qi,{children:[c.jsx(xt,{size:16}),"Пароли совпадают!"]})]}),c.jsx(jO,{type:"submit",$isLoading:d,disabled:d,children:d?c.jsxs(c.Fragment,{children:[c.jsx(EO,{}),"Регистрация..."]}):"Создать аккаунт"})]}),c.jsx(kO,{children:c.jsx("span",{children:"или"})}),c.jsx(CO,{type:"button",onClick:()=>ae("Функция в разработке"),children:"Зарегистрироваться через Google"}),c.jsx(PO,{children:c.jsxs("p",{children:["Уже есть аккаунт?"," ",c.jsx(ce,{to:"/login",children:"Войти"})]})})]})})},tv=x.div`
  padding: var(--spacing-xxl) 0;
  min-height: 80vh;
`,LO=x.div`
  background: linear-gradient(135deg, var(--color-accent) 0%, var(--color-background-secondary) 100%);
  padding: var(--spacing-xxl) 0;
  margin-bottom: var(--spacing-xxl);
`,FO=x.div`
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
`,MO=x.div`
  position: relative;
`,zO=x.div`
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
`,NO=x.button`
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
`,_O=x.div`
  flex: 1;
`,DO=x.h1`
  color: var(--color-text);
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: var(--spacing-sm);
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`,IO=x.p`
  color: var(--color-text-light);
  font-size: 1.125rem;
  margin-bottom: var(--spacing-md);
`,VO=x.div`
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
`,UO=x.div`
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
`,BO=x.aside`
  height: fit-content;
`,nv=x(_.div)`
  background: white;
  padding: var(--spacing-xl);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-md);
  margin-bottom: var(--spacing-lg);
`,rv=x.h3`
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
`,Ki=x.input`
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
`,HO=x.textarea`
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
`,su=x.div`
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
`,WO=x.section`
  margin-bottom: var(--spacing-xxl);
`,QO=x.h2`
  color: var(--color-text);
  font-size: 1.75rem;
  font-weight: 600;
  margin-bottom: var(--spacing-lg);
`,qO=x.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: var(--spacing-lg);
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,KO=x(_.div)`
  background: white;
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-md);
  overflow: hidden;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-lg);
  }
`,GO=x.div`
  height: 160px;
  background: linear-gradient(135deg, var(--color-accent) 0%, var(--color-background-secondary) 100%);
  background-image: ${e=>e.$imageUrl?`url(${e.$imageUrl})`:"none"};
  background-size: cover;
  background-position: center;
  position: relative;
`,YO=x.div`
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
`,XO=x.div`
  padding: var(--spacing-lg);
`,ZO=x.h4`
  color: var(--color-text);
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: var(--spacing-sm);
`,JO=x.div`
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
`,eL=x.div`
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
`,tL=x.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.875rem;
  color: var(--color-text-muted);
`,nL=x.div`
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
`,rL=()=>{const{user:e,logout:t}=Lr(),[n,r]=j.useState(!1),[i,o]=j.useState(!0),[s,a]=j.useState({firstName:"",lastName:"",email:"",phone:"",location:"",bio:""}),[l,u]=j.useState({}),[d,f]=j.useState([]),p={_id:"1",firstName:"Анна",lastName:"Иванова",email:"anna.ivanova@example.com",phone:"+7 (999) 123-45-67",location:"Москва",bio:"Начинающий флорист, увлекаюсь созданием букетов и композиций. Изучаю основы флористики и планирую открыть свою студию.",avatar:"/images/user-avatar.jpg",joinDate:"2024-01-15",completedCourses:2,totalCourses:5,averageRating:4.8},m=[{_id:"1",title:"Профессия флорист",image:"/images/course-1.jpg",progress:75,completedLessons:18,totalLessons:24,lastAccessed:"2024-03-15",instructor:"Анна Петрова"},{_id:"2",title:"Интерьерные композиции",image:"/images/course-2.jpg",progress:30,completedLessons:6,totalLessons:20,lastAccessed:"2024-03-10",instructor:"Мария Сидорова"},{_id:"3",title:"Коммерческий флорист",image:"/images/course-3.jpg",progress:0,completedLessons:0,totalLessons:16,lastAccessed:"2024-03-01",instructor:"Елена Козлова"}];j.useEffect(()=>{setTimeout(()=>{a({firstName:p.firstName,lastName:p.lastName,email:p.email,phone:p.phone,location:p.location,bio:p.bio}),f(m),o(!1)},1e3)},[]);const y=()=>{const v={};return s.firstName||(v.firstName="Имя обязательно"),s.lastName||(v.lastName="Фамилия обязательна"),s.email?/\S+@\S+\.\S+/.test(s.email)||(v.email="Введите корректный email"):v.email="Email обязателен",u(v),Object.keys(v).length===0},w=()=>{y()&&(ae.success("Профиль успешно обновлен!"),r(!1))},k=()=>{a({firstName:p.firstName,lastName:p.lastName,email:p.email,phone:p.phone,location:p.location,bio:p.bio}),u({}),r(!1)},h=v=>{const{name:b,value:S}=v.target;a(C=>({...C,[b]:S})),l[b]&&u(C=>({...C,[b]:""}))},g=()=>{t(),ae.success("Вы успешно вышли из аккаунта")};return i?c.jsx(tv,{children:c.jsx("div",{style:{textAlign:"center",padding:"var(--spacing-xxl) 0"},children:"Загрузка профиля..."})}):c.jsxs(tv,{children:[c.jsx(LO,{children:c.jsxs(FO,{children:[c.jsxs(MO,{children:[c.jsx(zO,{$imageUrl:p.avatar,children:!p.avatar}),c.jsx(NO,{onClick:()=>ae("Загрузка фото"),children:c.jsx(XR,{size:20})})]}),c.jsxs(_O,{children:[c.jsxs(DO,{children:[p.firstName," ",p.lastName]}),c.jsx(IO,{children:p.email}),c.jsxs(VO,{children:[c.jsxs("div",{className:"stat",children:[c.jsx("div",{className:"number",children:p.completedCourses}),c.jsx("div",{className:"label",children:"Завершенных курсов"})]}),c.jsxs("div",{className:"stat",children:[c.jsx("div",{className:"number",children:p.totalCourses}),c.jsx("div",{className:"label",children:"Всего курсов"})]}),c.jsxs("div",{className:"stat",children:[c.jsx("div",{className:"number",children:p.averageRating}),c.jsx("div",{className:"label",children:"Средний рейтинг"})]})]})]})]})}),c.jsxs(UO,{children:[c.jsxs(BO,{children:[c.jsxs(nv,{initial:{opacity:0,x:-30},animate:{opacity:1,x:0},transition:{duration:.6},children:[c.jsxs(rv,{children:[c.jsx(Go,{size:20}),"Личная информация"]}),c.jsxs(Ir,{children:[c.jsx(Vr,{children:"Имя"}),c.jsx(Ki,{type:"text",name:"firstName",value:s.firstName,onChange:h,disabled:!n,$hasError:!!l.firstName}),l.firstName&&c.jsx(su,{children:l.firstName})]}),c.jsxs(Ir,{children:[c.jsx(Vr,{children:"Фамилия"}),c.jsx(Ki,{type:"text",name:"lastName",value:s.lastName,onChange:h,disabled:!n,$hasError:!!l.lastName}),l.lastName&&c.jsx(su,{children:l.lastName})]}),c.jsxs(Ir,{children:[c.jsx(Vr,{children:"Email"}),c.jsx(Ki,{type:"email",name:"email",value:s.email,onChange:h,disabled:!n,$hasError:!!l.email}),l.email&&c.jsx(su,{children:l.email})]}),c.jsxs(Ir,{children:[c.jsx(Vr,{children:"Телефон"}),c.jsx(Ki,{type:"tel",name:"phone",value:s.phone,onChange:h,disabled:!n})]}),c.jsxs(Ir,{children:[c.jsx(Vr,{children:"Город"}),c.jsx(Ki,{type:"text",name:"location",value:s.location,onChange:h,disabled:!n})]}),c.jsxs(Ir,{children:[c.jsx(Vr,{children:"О себе"}),c.jsx(HO,{name:"bio",value:s.bio,onChange:h,disabled:!n,placeholder:"Расскажите о себе..."})]}),n?c.jsxs("div",{style:{display:"flex",gap:"var(--spacing-sm)"},children:[c.jsxs(er,{onClick:w,children:[c.jsx(r3,{size:16}),"Сохранить"]}),c.jsxs(er,{$variant:"secondary",onClick:k,children:[c.jsx(l3,{size:16}),"Отмена"]})]}):c.jsxs(er,{onClick:()=>r(!0),children:[c.jsx(t3,{size:16}),"Редактировать"]})]}),c.jsxs(nv,{initial:{opacity:0,x:-30},animate:{opacity:1,x:0},transition:{duration:.6,delay:.1},children:[c.jsxs(rv,{children:[c.jsx(i3,{size:20}),"Настройки"]}),c.jsxs(er,{$variant:"secondary",style:{marginBottom:"var(--spacing-md)"},children:[c.jsx(Ko,{size:16}),"Настройки приватности"]}),c.jsxs(er,{$variant:"secondary",style:{marginBottom:"var(--spacing-md)"},children:[c.jsx($i,{size:16}),"Настройки уведомлений"]}),c.jsxs(er,{$variant:"danger",onClick:g,children:[c.jsx(Nd,{size:16}),"Выйти из аккаунта"]})]})]}),c.jsx("div",{children:c.jsxs(WO,{children:[c.jsx(QO,{children:"Мои курсы"}),d.length>0?c.jsx(qO,{children:c.jsx(Wn,{mode:"wait",children:d.map((v,b)=>c.jsxs(KO,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:b*.1},children:[c.jsx(GO,{$imageUrl:v.image,children:c.jsx(YO,{children:c.jsx("div",{className:"progress-fill",style:{width:`${v.progress}%`}})})}),c.jsxs(XO,{children:[c.jsx(ZO,{children:v.title}),c.jsxs(JO,{children:[c.jsxs("span",{children:[c.jsx(bt,{size:14}),v.completedLessons,"/",v.totalLessons," уроков"]}),c.jsxs("span",{children:[c.jsx(qo,{size:14}),v.lastAccessed]})]}),c.jsx(eL,{children:c.jsx("div",{className:"progress-fill",style:{width:`${v.progress}%`}})}),c.jsxs(tL,{children:[c.jsx("span",{children:"Прогресс"}),c.jsxs("span",{children:[v.progress,"%"]})]}),c.jsx("div",{style:{marginTop:"var(--spacing-md)"},children:c.jsxs(er,{$variant:"primary",style:{width:"100%"},children:[c.jsx(bt,{size:16}),"Продолжить обучение"]})})]})]},v._id))})}):c.jsxs(nL,{children:[c.jsx("h3",{children:"У вас пока нет курсов"}),c.jsx("p",{children:"Запишитесь на курсы, чтобы начать обучение"})]})]})})]})]})},iv=x.div`
  padding: var(--spacing-xxl) 0;
  min-height: 80vh;
`,iL=x.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-lg);
  margin-bottom: var(--spacing-xxl);
`,oL=x.div`
  background: linear-gradient(135deg, var(--color-accent) 0%, var(--color-background-secondary) 100%);
  padding: var(--spacing-xl);
  border-radius: var(--border-radius-lg);
  margin-bottom: var(--spacing-lg);
`,sL=x.h1`
  color: var(--color-text);
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: var(--spacing-sm);
`,aL=x.p`
  color: var(--color-text-light);
  font-size: 1.125rem;
  margin-bottom: var(--spacing-lg);
`,lL=x.div`
  display: flex;
  gap: var(--spacing-md);
  flex-wrap: wrap;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`,au=x(ce)`
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
`,cL=x.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-lg);
`,uL=x.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--spacing-lg);
  margin-bottom: var(--spacing-xxl);
`,Us=x(_.div)`
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
`,Bs=x.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: var(--spacing-md);
`,Hs=x.div`
  width: 48px;
  height: 48px;
  border-radius: var(--border-radius-md);
  background: ${e=>e.$color};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`,Ws=x.div`
  font-size: 2rem;
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: var(--spacing-xs);
`,Qs=x.div`
  color: var(--color-text-muted);
  font-size: 0.875rem;
  margin-bottom: var(--spacing-sm);
`,qs=x.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.875rem;
  color: ${e=>e.$isPositive?"var(--color-success)":"var(--color-error)"};
`,dL=x.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: var(--spacing-xxl);
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: var(--spacing-lg);
  }
`,Gi=x.section`
  margin-bottom: var(--spacing-xxl);
`,Yi=x.h2`
  color: var(--color-text);
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: var(--spacing-lg);
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
`,fL=x(_.div)`
  background: white;
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-md);
  overflow: hidden;
`,pL=x(_.div)`
  padding: var(--spacing-lg);
  border-bottom: 1px solid var(--color-border);
  transition: all 0.2s ease;
  
  &:last-child {
    border-bottom: none;
  }
  
  &:hover {
    background: var(--color-background-secondary);
  }
`,hL=x.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: var(--spacing-sm);
`,mL=x.h4`
  color: var(--color-text);
  font-size: 1.125rem;
  font-weight: 600;
`,gL=x.div`
  font-size: 0.875rem;
  color: var(--color-primary);
  font-weight: 500;
`,vL=x.div`
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
`,Xi=x.div`
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
`,ov=x.div`
  background: white;
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-md);
  padding: var(--spacing-lg);
`,yL=x.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  padding: var(--spacing-md) 0;
  border-bottom: 1px solid var(--color-border);
  
  &:last-child {
    border-bottom: none;
  }
`,xL=x.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  
  ${e=>{switch(e.$type){case"course":return"background: var(--color-primary);";case"achievement":return"background: var(--color-success);";case"certificate":return"background: var(--color-warning);";default:return""}}}
`,wL=x.div`
  flex: 1;
`,bL=x.div`
  color: var(--color-text);
  font-weight: 500;
  margin-bottom: 0.25rem;
`,SL=x.div`
  color: var(--color-text-muted);
  font-size: 0.875rem;
`,sv=x.div`
  background: white;
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-md);
  padding: var(--spacing-lg);
  margin-bottom: var(--spacing-lg);
`,av=x.div`
  height: 200px;
  background: var(--color-background-secondary);
  border-radius: var(--border-radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-text-muted);
  font-size: 1.125rem;
`,jL=x.div`
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
`,kL=()=>{const{user:e}=Lr(),[t,n]=j.useState(!0),[r,i]=j.useState({}),[o,s]=j.useState([]),[a,l]=j.useState([]),u={totalCourses:5,completedCourses:2,totalHours:48,averageRating:4.8,certificates:3,achievements:12,weeklyProgress:15,monthlyProgress:25},d=[{_id:"1",title:"Профессия флорист",progress:75,lastAccessed:"2 часа назад",instructor:"Анна Петрова",nextLesson:"Урок 19: Создание свадебных букетов"},{_id:"2",title:"Интерьерные композиции",progress:30,lastAccessed:"1 день назад",instructor:"Мария Сидорова",nextLesson:"Урок 7: Работа с сухими цветами"},{_id:"3",title:"Коммерческий флорист",progress:0,lastAccessed:"3 дня назад",instructor:"Елена Козлова",nextLesson:"Урок 1: Введение в коммерческую флористику"}],f=[{_id:"1",type:"course",title:'Завершен курс "Основы флористики"',time:"2 дня назад",icon:bt},{_id:"2",type:"achievement",title:'Получено достижение "Первые шаги"',time:"3 дня назад",icon:ki},{_id:"3",type:"certificate",title:'Получен сертификат по курсу "Базовые техники"',time:"1 неделю назад",icon:xt},{_id:"4",type:"course",title:'Начат новый курс "Интерьерные композиции"',time:"1 неделю назад",icon:jp}];j.useEffect(()=>{setTimeout(()=>{i(u),s(d),l(f),n(!1)},1e3)},[]);const p=()=>{const y=new Date().getHours();return y<12?"Доброе утро":y<18?"Добрый день":"Добрый вечер"};return t?c.jsx(iv,{children:c.jsx("div",{style:{textAlign:"center",padding:"var(--spacing-xxl) 0"},children:"Загрузка панели управления..."})}):c.jsxs(iv,{children:[c.jsx(iL,{children:c.jsxs(oL,{children:[c.jsxs(sL,{children:[p(),", ",(e==null?void 0:e.firstName)||"Студент","!"]}),c.jsx(aL,{children:"Продолжайте обучение и развивайте свои навыки флориста"}),c.jsxs(lL,{children:[c.jsxs(au,{to:"/courses",children:[c.jsx(bt,{size:20}),"Найти курсы"]}),c.jsxs(au,{to:"/profile",children:[c.jsx(I1,{size:20}),"Мои курсы"]}),c.jsxs(au,{to:"/suppliers",children:[c.jsx(n3,{size:20}),"Поставщики"]})]})]})}),c.jsxs(cL,{children:[c.jsxs(uL,{children:[c.jsxs(Us,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},children:[c.jsxs(Bs,{children:[c.jsx(Hs,{$color:"var(--color-primary)",children:c.jsx(bt,{size:24})}),c.jsxs(qs,{$isPositive:!0,children:[c.jsx(Ds,{size:16}),"+15%"]})]}),c.jsx(Ws,{children:r.totalCourses}),c.jsx(Qs,{children:"Всего курсов"}),c.jsx(Xi,{children:c.jsx("div",{className:"progress-fill",style:{width:`${r.completedCourses/r.totalCourses*100}%`}})})]}),c.jsxs(Us,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.1},children:[c.jsxs(Bs,{children:[c.jsx(Hs,{$color:"var(--color-success)",children:c.jsx(xt,{size:24})}),c.jsxs(qs,{$isPositive:!0,children:[c.jsx(Ds,{size:16}),"+8%"]})]}),c.jsx(Ws,{children:r.completedCourses}),c.jsx(Qs,{children:"Завершенных курсов"}),c.jsx(Xi,{children:c.jsx("div",{className:"progress-fill",style:{width:`${r.completedCourses/r.totalCourses*100}%`}})})]}),c.jsxs(Us,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.2},children:[c.jsxs(Bs,{children:[c.jsx(Hs,{$color:"var(--color-warning)",children:c.jsx(qo,{size:24})}),c.jsxs(qs,{$isPositive:!0,children:[c.jsx(Ds,{size:16}),"+12%"]})]}),c.jsx(Ws,{children:r.totalHours}),c.jsx(Qs,{children:"Часов обучения"}),c.jsx(Xi,{children:c.jsx("div",{className:"progress-fill",style:{width:`${r.totalHours/100*100}%`}})})]}),c.jsxs(Us,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.3},children:[c.jsxs(Bs,{children:[c.jsx(Hs,{$color:"var(--color-primary)",children:c.jsx(Pr,{size:24})}),c.jsxs(qs,{$isPositive:!0,children:[c.jsx(Ds,{size:16}),"+5%"]})]}),c.jsx(Ws,{children:r.averageRating}),c.jsx(Qs,{children:"Средний рейтинг"}),c.jsx(Xi,{children:c.jsx("div",{className:"progress-fill",style:{width:`${r.averageRating/5*100}%`}})})]})]}),c.jsxs(dL,{children:[c.jsxs("div",{children:[c.jsxs(Gi,{children:[c.jsxs(Yi,{children:[c.jsx(bt,{size:24}),"Недавние курсы"]}),o.length>0?c.jsx(fL,{children:c.jsx(Wn,{mode:"wait",children:o.map((m,y)=>c.jsxs(pL,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{duration:.5,delay:y*.1},children:[c.jsxs(hL,{children:[c.jsx(mL,{children:m.title}),c.jsxs(gL,{children:[m.progress,"%"]})]}),c.jsxs(vL,{children:[c.jsxs("span",{children:[c.jsx(us,{size:14}),m.instructor]}),c.jsxs("span",{children:[c.jsx(qo,{size:14}),m.lastAccessed]})]}),c.jsxs("div",{style:{color:"var(--color-text-light)",fontSize:"0.875rem",marginTop:"var(--spacing-sm)"},children:["Следующий урок: ",m.nextLesson]}),c.jsx(Xi,{children:c.jsx("div",{className:"progress-fill",style:{width:`${m.progress}%`}})})]},m._id))})}):c.jsxs(jL,{children:[c.jsx("h3",{children:"У вас пока нет курсов"}),c.jsx("p",{children:"Запишитесь на курсы, чтобы начать обучение"})]})]}),c.jsxs(Gi,{children:[c.jsxs(Yi,{children:[c.jsx(Cg,{size:24}),"Прогресс обучения"]}),c.jsx(sv,{children:c.jsxs(av,{children:[c.jsx(Cg,{size:48}),c.jsx("div",{style:{marginLeft:"var(--spacing-md)"},children:"График прогресса обучения"})]})})]})]}),c.jsxs("div",{children:[c.jsxs(Gi,{children:[c.jsxs(Yi,{children:[c.jsx(YR,{size:24}),"Последняя активность"]}),c.jsx(ov,{children:c.jsx(Wn,{mode:"wait",children:a.map((m,y)=>c.jsxs(yL,{children:[c.jsx(xL,{$type:m.type,children:c.jsx(m.icon,{size:20})}),c.jsxs(wL,{children:[c.jsx(bL,{children:m.title}),c.jsx(SL,{children:m.time})]})]},m._id))})})]}),c.jsxs(Gi,{children:[c.jsxs(Yi,{children:[c.jsx(Eg,{size:24}),"Статистика"]}),c.jsx(sv,{children:c.jsxs(av,{children:[c.jsx(Eg,{size:48}),c.jsx("div",{style:{marginLeft:"var(--spacing-md)"},children:"Круговая диаграмма достижений"})]})})]}),c.jsxs(Gi,{children:[c.jsxs(Yi,{children:[c.jsx(ki,{size:24}),"Достижения"]}),c.jsx(ov,{children:c.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"var(--spacing-md)"},children:[c.jsxs("div",{style:{textAlign:"center",padding:"var(--spacing-md)"},children:[c.jsx("div",{style:{fontSize:"2rem",fontWeight:"700",color:"var(--color-primary)",marginBottom:"0.5rem"},children:r.certificates}),c.jsx("div",{style:{fontSize:"0.875rem",color:"var(--color-text-muted)"},children:"Сертификатов"})]}),c.jsxs("div",{style:{textAlign:"center",padding:"var(--spacing-md)"},children:[c.jsx("div",{style:{fontSize:"2rem",fontWeight:"700",color:"var(--color-success)",marginBottom:"0.5rem"},children:r.achievements}),c.jsx("div",{style:{fontSize:"0.875rem",color:"var(--color-text-muted)"},children:"Достижений"})]})]})})]})]})]})]})]})},CL=x(_.header)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(248, 247, 255, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(230, 230, 250, 0.3);
  transition: var(--transition-normal);
`,PL=x.nav`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-md);
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
`,EL=x(ce)`
  font-family: var(--font-secondary);
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-primary);
  text-decoration: none;
  transition: var(--transition-fast);
  
  &:hover {
    color: var(--color-hover-primary);
  }
`,TL=x.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-lg);
  
  @media (max-width: 768px) {
    display: none;
  }
`,RL=x(ce)`
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
`,AL=x.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  
  @media (max-width: 768px) {
    display: none;
  }
`,Zi=x.button`
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
`,$L=x.button`
  display: none;
  background: none;
  border: none;
  color: var(--color-text);
  cursor: pointer;
  padding: var(--spacing-sm);
  
  @media (max-width: 768px) {
    display: block;
  }
`,OL=x(_.div)`
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
`,Ks=x(ce)`
  color: ${e=>e.$isActive?"var(--color-primary)":"var(--color-text)"};
  text-decoration: none;
  font-weight: ${e=>e.$isActive?"600":"400"};
  padding: var(--spacing-sm) 0;
  border-bottom: 1px solid var(--color-background-secondary);
  transition: var(--transition-fast);
  
  &:hover {
    color: var(--color-primary);
  }
`,LL=x.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
`,FL=x.div`
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
`,ML=()=>{var f;const[e,t]=j.useState(!1),[n,r]=j.useState(!1),i=hn(),{user:o,isAuthenticated:s,logout:a}=Lr();j.useEffect(()=>{const p=()=>{r(window.scrollY>20)};return window.addEventListener("scroll",p),()=>window.removeEventListener("scroll",p)},[]);const l=[{path:"/",label:"Главная"},{path:"/courses",label:"Курсы"},{path:"/instructors",label:"Преподаватели"},{path:"/suppliers",label:"Поставщики"},{path:"/about",label:"О нас"}],u=p=>i.pathname===p,d=()=>{a(),t(!1)};return c.jsxs(CL,{initial:{y:-100},animate:{y:0},style:{boxShadow:n?"var(--shadow-md)":"none"},children:[c.jsxs(PL,{children:[c.jsx(EL,{to:"/",children:"Flerr"}),c.jsx(TL,{children:l.map(p=>c.jsx(RL,{to:p.path,$isActive:u(p.path),children:p.label},p.path))}),c.jsx(AL,{children:s?c.jsxs(LL,{children:[c.jsx(FL,{children:((f=o==null?void 0:o.firstName)==null?void 0:f.charAt(0))||"U"}),c.jsx(ce,{to:"/profile",children:c.jsxs(Zi,{$variant:"secondary",children:[c.jsx(Go,{size:16}),"Профиль"]})}),c.jsxs(Zi,{$variant:"secondary",onClick:d,children:[c.jsx(Nd,{size:16}),"Выйти"]})]}):c.jsxs(c.Fragment,{children:[c.jsx(ce,{to:"/login",children:c.jsx(Zi,{$variant:"secondary",children:"Войти"})}),c.jsx(ce,{to:"/register",children:c.jsx(Zi,{$variant:"primary",children:"Регистрация"})})]})}),c.jsx($L,{onClick:()=>t(!e),children:e?c.jsx(c3,{size:24}):c.jsx(e3,{size:24})})]}),c.jsx(Wn,{children:e&&c.jsxs(OL,{initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},transition:{duration:.3},children:[l.map(p=>c.jsx(Ks,{to:p.path,$isActive:u(p.path),onClick:()=>t(!1),children:p.label},p.path)),s?c.jsxs(c.Fragment,{children:[c.jsxs(Ks,{to:"/profile",onClick:()=>t(!1),children:[c.jsx(Go,{size:16}),"Профиль"]}),c.jsxs(Zi,{$variant:"secondary",onClick:d,children:[c.jsx(Nd,{size:16}),"Выйти"]})]}):c.jsxs(c.Fragment,{children:[c.jsx(Ks,{to:"/login",onClick:()=>t(!1),children:"Войти"}),c.jsx(Ks,{to:"/register",onClick:()=>t(!1),children:"Регистрация"})]})]})})]})},zL=x.footer`
  background: var(--color-background-secondary);
  border-top: 1px solid var(--color-background-tertiary);
  padding: var(--spacing-xxl) 0 var(--spacing-lg);
  margin-top: auto;
`,NL=x.div`
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
`,Gs=x.div`
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
`,lu=x.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  margin-bottom: var(--spacing-sm);
  color: var(--color-text-light);
  
  svg {
    color: var(--color-primary);
    flex-shrink: 0;
  }
`,_L=x.div`
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
`,DL=x.div`
  text-align: center;
  padding-top: var(--spacing-lg);
  margin-top: var(--spacing-xl);
  border-top: 1px solid var(--color-background-tertiary);
  color: var(--color-text-muted);
  font-size: 0.875rem;
`,IL=()=>c.jsxs(zL,{children:[c.jsxs(NL,{children:[c.jsxs(Gs,{children:[c.jsx("h3",{children:"Flerr"}),c.jsx("p",{children:"Онлайн школа флористики, где вы научитесь создавать прекрасные композиции и превратите свое увлечение в прибыльную профессию."}),c.jsxs(_L,{children:[c.jsx("a",{href:"#","aria-label":"Instagram",children:c.jsx(bp,{size:20})}),c.jsx("a",{href:"#","aria-label":"Facebook",children:c.jsx(wp,{size:20})}),c.jsx("a",{href:"#","aria-label":"Twitter",children:c.jsx(a3,{size:20})})]})]}),c.jsxs(Gs,{children:[c.jsx("h3",{children:"Курсы"}),c.jsxs("ul",{children:[c.jsx("li",{children:c.jsx(ce,{to:"/courses",children:"Все курсы"})}),c.jsx("li",{children:c.jsx(ce,{to:"/courses?category=beginner",children:"Для начинающих"})}),c.jsx("li",{children:c.jsx(ce,{to:"/courses?category=advanced",children:"Продвинутые"})}),c.jsx("li",{children:c.jsx(ce,{to:"/courses?category=wedding",children:"Свадебная флористика"})}),c.jsx("li",{children:c.jsx(ce,{to:"/courses?category=interior",children:"Интерьерные композиции"})})]})]}),c.jsxs(Gs,{children:[c.jsx("h3",{children:"Информация"}),c.jsxs("ul",{children:[c.jsx("li",{children:c.jsx(ce,{to:"/about",children:"О нас"})}),c.jsx("li",{children:c.jsx(ce,{to:"/instructors",children:"Преподаватели"})}),c.jsx("li",{children:c.jsx(ce,{to:"/suppliers",children:"Поставщики"})}),c.jsx("li",{children:c.jsx(ce,{to:"/contact",children:"Контакты"})}),c.jsx("li",{children:c.jsx(ce,{to:"/privacy",children:"Политика конфиденциальности"})})]})]}),c.jsxs(Gs,{children:[c.jsx("h3",{children:"Контакты"}),c.jsxs(lu,{children:[c.jsx($i,{size:16}),c.jsx("span",{children:"info@flerr-school.com"})]}),c.jsxs(lu,{children:[c.jsx(vl,{size:16}),c.jsx("span",{children:"+7 (999) 123-45-67"})]}),c.jsxs(lu,{children:[c.jsx(Sp,{size:16}),c.jsx("span",{children:"Москва, ул. Цветочная, 1"})]})]})]}),c.jsx(DL,{children:c.jsx("div",{className:"container",children:"© 2024 Flerr Online School. Все права защищены."})})]}),VL=x.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`,UL=x(_.main)`
  flex: 1;
  padding-top: 80px; // Account for fixed header
`,BL={initial:{opacity:0,y:20},in:{opacity:1,y:0},out:{opacity:0,y:-20}},HL={type:"tween",ease:"anticipate",duration:.4},WL=()=>c.jsxs(VL,{children:[c.jsx(ML,{}),c.jsx(UL,{initial:"initial",animate:"in",exit:"out",variants:BL,transition:HL,children:c.jsx(FS,{})}),c.jsx(IL,{})]}),QL=x.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 400px;
  color: var(--color-primary);
`,qL=x(JR)`
  animation: spin 1s linear infinite;
  
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`,lv=({children:e})=>{const{isAuthenticated:t,isLoading:n}=Lr(),r=hn();return n?c.jsx(QL,{children:c.jsx(qL,{size:32})}):t?c.jsx(c.Fragment,{children:e}):c.jsx(LS,{to:"/login",state:{from:r},replace:!0})},KL=()=>c.jsx(Wn,{mode:"wait",children:c.jsx(zS,{children:c.jsxs(mt,{path:"/",element:c.jsx(WL,{}),children:[c.jsx(mt,{index:!0,element:c.jsx($3,{})}),c.jsx(mt,{path:"courses",element:c.jsx(Q5,{})}),c.jsx(mt,{path:"courses/:slug",element:c.jsx(E$,{})}),c.jsx(mt,{path:"about",element:c.jsx(l4,{})}),c.jsx(mt,{path:"instructors",element:c.jsx(O4,{})}),c.jsx(mt,{path:"suppliers",element:c.jsx(rO,{})}),c.jsx(mt,{path:"login",element:c.jsx(gO,{})}),c.jsx(mt,{path:"register",element:c.jsx(OO,{})}),c.jsx(mt,{path:"profile",element:c.jsx(lv,{children:c.jsx(rL,{})})}),c.jsx(mt,{path:"dashboard",element:c.jsx(lv,{children:c.jsx(kL,{})})})]})})}),D={colors:{primary:"#800080",purple:"#800080",secondary:"#B4A5A5",charlotte:"#B4A5A5",accent:"#E6E6FA",lavender:"#E6E6FA",lightLavender:"#F0E6FF",background:"#F8F7FF",backgroundSecondary:"#E6E6FA",backgroundTertiary:"#F0F0FF",text:"#2D1B3D",textLight:"#6B4E71",textMuted:"#9B8BA5",success:"#4CAF50",warning:"#FF9800",error:"#F44336",info:"#2196F3",gradientPrimary:"linear-gradient(135deg, #E6E6FA 0%, #F0F0FF 100%)",gradientSecondary:"linear-gradient(135deg, #800080 0%, #6B4E71 100%)",gradientAccent:"linear-gradient(135deg, #B4A5A5 0%, #9B8BA5 100%)",hoverPrimary:"#E0DCFF",hoverSecondary:"#A595A5",hoverAccent:"#D0C0FF"},fonts:{primary:'"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',secondary:'"Playfair Display", Georgia, serif'},spacing:{xs:"0.25rem",sm:"0.5rem",md:"1rem",lg:"1.5rem",xl:"2rem",xxl:"3rem"},borderRadius:{sm:"0.25rem",md:"0.5rem",lg:"1rem",xl:"1.5rem"},shadows:{sm:"0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)",md:"0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)",lg:"0 10px 20px rgba(0, 0, 0, 0.1), 0 6px 6px rgba(0, 0, 0, 0.06)",xl:"0 20px 25px rgba(0, 0, 0, 0.1), 0 10px 10px rgba(0, 0, 0, 0.04)"},transitions:{fast:"all 0.15s ease-in-out",normal:"all 0.3s ease-in-out",slow:"all 0.5s ease-in-out"},breakpoints:{xs:"480px",sm:"768px",md:"1024px",lg:"1200px",xl:"1440px"},animations:{fadeIn:{from:{opacity:0,transform:"translateY(20px)"},to:{opacity:1,transform:"translateY(0)"}},slideIn:{from:{transform:"translateX(-100%)"},to:{transform:"translateX(0)"}},scaleIn:{from:{transform:"scale(0.9)",opacity:0},to:{transform:"scale(1)",opacity:1}},bounce:{"0%, 20%, 53%, 80%, 100%":{transform:"translate3d(0,0,0)"},"40%, 43%":{transform:"translate3d(0, -30px, 0)"},"70%":{transform:"translate3d(0, -15px, 0)"},"90%":{transform:"translate3d(0, -4px, 0)"}}}};`${D.colors.primary}${D.colors.secondary}${D.colors.accent}${D.colors.background}${D.colors.backgroundSecondary}${D.colors.text}${D.colors.textLight}${D.colors.textMuted}${D.fonts.primary}${D.fonts.secondary}${D.spacing.xs}${D.spacing.sm}${D.spacing.md}${D.spacing.lg}${D.spacing.xl}${D.spacing.xxl}${D.borderRadius.sm}${D.borderRadius.md}${D.borderRadius.lg}${D.borderRadius.xl}${D.shadows.sm}${D.shadows.md}${D.shadows.lg}${D.shadows.xl}${D.transitions.fast}${D.transitions.normal}${D.transitions.slow}`;const GL={...D,components:{button:{primary:{background:D.colors.primary,color:"white",border:"none","&:hover":{background:D.colors.hoverPrimary}},secondary:{background:"transparent",color:D.colors.text,border:`1px solid ${D.colors.textMuted}`,"&:hover":{background:D.colors.backgroundSecondary,borderColor:D.colors.primary}}},card:{background:D.colors.background,borderRadius:D.borderRadius.lg,boxShadow:D.shadows.sm,"&:hover":{boxShadow:D.shadows.md}},input:{border:`1px solid ${D.colors.textMuted}`,borderRadius:D.borderRadius.md,"&:focus":{borderColor:D.colors.primary,boxShadow:`0 0 0 3px ${D.colors.primary}20`}}}},YL=({children:e})=>c.jsx(WR,{theme:GL,children:e});const XL=new pj({defaultOptions:{queries:{retry:1,refetchOnWindowFocus:!1}}});cu.createRoot(document.getElementById("root")).render(c.jsx(G.StrictMode,{children:c.jsx(ro,{children:c.jsx(xj,{client:XL,children:c.jsx(HS,{children:c.jsx(YL,{children:c.jsxs(G5,{children:[c.jsx(KL,{}),c.jsx(Ak,{position:"top-right",toastOptions:{duration:4e3,style:{background:"#363636",color:"#fff"}}})]})})})})})}));
//# sourceMappingURL=index-17444b60.js.map
