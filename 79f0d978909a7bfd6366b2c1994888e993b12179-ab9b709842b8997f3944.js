"use strict";(self.webpackChunkportfolio_colocate=self.webpackChunkportfolio_colocate||[]).push([[215],{2875:function(n,r,e){e.d(r,{KO:function(){return k},cn:function(){return M},zt:function(){return Z}});var t=e(4942),o=e(9439),i=e(7294);function u(n,r){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable}))),e.push.apply(e,t)}return e}function a(n){for(var r=1;r<arguments.length;r++){var e=null!=arguments[r]?arguments[r]:{};r%2?u(Object(e),!0).forEach((function(r){(0,t.Z)(n,r,e[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):u(Object(e)).forEach((function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(e,r))}))}return n}function c(n,r){var e="undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(!e){if(Array.isArray(n)||(e=function(n,r){if(!n)return;if("string"==typeof n)return f(n,r);var e=Object.prototype.toString.call(n).slice(8,-1);"Object"===e&&n.constructor&&(e=n.constructor.name);if("Map"===e||"Set"===e)return Array.from(n);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return f(n,r)}(n))||r&&n&&"number"==typeof n.length){e&&(n=e);var t=0,o=function(){};return{s:o,n:function(){return t>=n.length?{done:!0}:{done:!1,value:n[t++]}},e:function(n){throw n},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,u=!0,a=!1;return{s:function(){e=e.call(n)},n:function(){var n=e.next();return u=n.done,n},e:function(n){a=!0,i=n},f:function(){try{u||null==e.return||e.return()}finally{if(a)throw i}}}}function f(n,r){(null==r||r>n.length)&&(r=n.length);for(var e=0,t=new Array(r);e<r;e++)t[e]=n[e];return t}var l=Symbol(),v=function(n){return!!n[l]},s=function(n){var r,e;null==(e=(r=n[l]).c)||e.call(r)},d=function n(r,e){var t=r[l].o,o=e[l].o;return t===o||r===o||v(t)&&n(t,e)},p=function(n){var r={o:n,c:null},e=new Promise((function(e){r.c=function(){r.c=null,e()},n.then(r.c,r.c)}));return e[l]=r,e},w=function(n){return"init"in n},h="r",g="w",m="c",b="s",y=function(n){var r,e,i=new WeakMap,u=new WeakMap,f=new Map;if(r=new Set,e=new Set,n){var y,E=c(n);try{for(E.s();!(y=E.n()).done;){var O=(0,o.Z)(y.value,2),S=O[0],Z={v:O[1],r:0,d:new Map};Object.freeze(Z),w(S)||console.warn("Found initial value for derived atom which can cause unexpected behavior",S),i.set(S,Z)}}catch(H){E.e(H)}finally{E.f()}}var j,M=new WeakMap,P=new WeakMap,z=function(n){var r=P.get(n);return r||(r=new Map,P.set(n,r)),r},k=function n(r,e){if(r){var t=z(r),o=t.get(e);return o||(o=n(r.p,e))&&t.set(e,o),o}return i.get(e)},A=function(n,r,e){if(Object.freeze(e),n){z(n).set(r,e)}else{var t=i.get(r);i.set(r,e),f.has(r)||f.set(r,t)}},C=function(n){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new Map,e=arguments.length>2?arguments[2]:void 0;if(!e)return r;var t=new Map,o=!1;return e.forEach((function(e){var i,u=(null==(i=k(n,e))?void 0:i.r)||0;t.set(e,u),r.get(e)!==u&&(o=!0)})),r.size!==t.size||o?t:r},R=function(n,r,e,t,o){var i=k(n,r);if(i){if(o&&(!("p"in i)||!d(i.p,o)))return i;"p"in i&&s(i.p)}var u={v:e,r:(null==i?void 0:i.r)||0,d:C(n,null==i?void 0:i.d,t)},a=!1;return i&&"v"in i&&Object.is(i.v,e)?!("i"in i)&&(u.d===i.d||u.d.size===i.d.size&&Array.from(u.d.keys()).every((function(n){return i.d.has(n)})))||(a=!0,Promise.resolve().then((function(){U(n)}))):(a=!0,++u.r,u.d.has(r)&&(u.d=new Map(u.d).set(r,u.r))),i&&!a?i:(A(n,r,u),u)},_=function(n,r,e,t,o){var i=k(n,r);if(i){if(o&&(!("p"in i)||!d(i.p,o)))return i;"p"in i&&s(i.p)}var u={e:e,r:(null==i?void 0:i.r)||0,d:C(n,null==i?void 0:i.d,t)};return A(n,r,u),u},x=function(n,r,e,t){var o=k(n,r);if(o&&"p"in o){if(d(o.p,e))return o;s(o.p)}!function(n,r,e){var t=M.get(r);t||(t=new Map,M.set(r,t)),e.then((function(){t.get(n)===e&&(t.delete(n),t.size||M.delete(r))})),t.set(n,e)}(n,r,e);var i={p:e,r:(null==o?void 0:o.r)||0,d:C(n,null==o?void 0:o.d,t)};return A(n,r,i),i},D=function(n,r,e,t){if(e instanceof Promise){var o=p(e.then((function(e){R(n,r,e,t,o)})).catch((function(e){if(e instanceof Promise)return v(e)?e.then((function(){W(n,r,!0)})):e;_(n,r,e,t,o)})));return x(n,r,o,t)}return R(n,r,e,t)},W=function n(r,e,t){if(!t){var i=k(r,e);if(i){if(i.r!==i.i&&"p"in i&&!function(n){return!n[l].c}(i.p))return i;if(i.d.forEach((function(t,o){if(o!==e)if(u.has(o)){var i=k(r,o);i&&i.r===i.i&&n(r,o)}else n(r,o)})),Array.from(i.d).every((function(n){var e=(0,o.Z)(n,2),t=e[0],i=e[1],u=k(r,t);return u&&"v"in u&&u.r===i})))return i}}var a=new Set;try{var c=e.read((function(t){a.add(t);var o=t===e?k(r,t):n(r,t);if(o){if("e"in o)throw o.e;if("p"in o)throw o.p;return o.v}if(w(t))return t.init;throw new Error("no atom init")}));return D(r,e,c,a)}catch(v){if(v instanceof Promise){var f=p(v);return x(r,e,f,a)}return _(r,e,v,a)}},N=function(n,r){return W(r,n)},T=function(n,r){return!r.l.size&&(!r.t.size||1===r.t.size&&r.t.has(n))},I=function n(r,e){var t=u.get(e);null==t||t.t.forEach((function(t){t!==e&&(!function(n,r){var e=k(n,r);if(e){var t=a(a({},e),{},{i:e.r});A(n,r,t)}else console.warn("[Bug] could not invalidate non existing atom",r)}(r,t),n(r,t))}))},V=function n(r,e,t){var o=!0,i=e.write((function n(e,t){var o=W(r,e);if("e"in o)throw o.e;if("p"in o){if(null==t?void 0:t.unstable_promise)return o.p.then((function(){return n(e,t)}));throw console.info("Reading pending atom state in write operation. We throw a promise for now.",e),o.p}if("v"in o)return o.v;throw console.warn("[Bug] no value found while reading atom in write operation. This is probably a bug.",e),new Error("no value found")}),(function(t,i){var u;if(t===e){if(!w(t))throw new Error("atom not writable");var a=function(n){var r=new Set,e=M.get(n);return e&&(M.delete(n),e.forEach((function(n,e){s(n),r.add(e)}))),r}(t);a.forEach((function(n){n!==r&&D(n,t,i)})),k(r,t)!==D(r,t,i)&&I(r,t)}else u=n(r,t,i);return o||U(r),u}),t);return o=!1,i},B=function(n,r,e){var t=V(e,n,r);return U(e),t},F=function n(r,t,o){var i={t:new Set(o&&[o]),l:new Set};if(u.set(t,i),e.add(t),W(void 0,t).d.forEach((function(e,o){var i=u.get(o);i?i.t.add(t):o!==t&&n(r,o,t)})),function(n){return!!n.write}(t)&&t.onMount){var a=t.onMount((function(n){return B(t,n,r)}));r=void 0,a&&(i.u=a)}return i},K=function n(r,t){var o,i=null==(o=u.get(t))?void 0:o.u;i&&i(),u.delete(t),e.delete(t);var a=k(r,t);a?a.d.forEach((function(e,o){if(o!==t){var i=u.get(o);i&&(i.t.delete(t),T(o,i)&&n(r,o))}})):console.warn("[Bug] could not find atom state to unmount",t)},L=function(n,r,e,t){var o=new Set(e.d.keys());null==t||t.forEach((function(e,t){if(o.has(t))o.delete(t);else{var i=u.get(t);i&&(i.t.delete(r),T(t,i)&&K(n,t))}})),o.forEach((function(e){var t=u.get(e);t?t.t.add(r):u.has(r)&&F(n,e,r)}))},U=function(n){if(n){z(n).forEach((function(r,e){if(r!==i.get(e)){var t=u.get(e);null==t||t.l.forEach((function(r){return r(n)}))}}))}else{for(;f.size;){var e=Array.from(f);f.clear(),e.forEach((function(n){var r=(0,o.Z)(n,2),e=r[0],t=r[1],i=k(void 0,e);if(i&&i.d!==(null==t?void 0:t.d)&&L(void 0,e,i,null==t?void 0:t.d),!(t&&"i"in t&&i)||"i"in i){var a=u.get(e);null==a||a.l.forEach((function(n){return n()}))}}))}r.forEach((function(n){return n()}))}},$=function(n,r){r&&function(n){z(n).forEach((function(r,e){var t=i.get(e);(!t||r.r>t.r||"v"in r&&r.r===t.r&&r.d!==t.d)&&(i.set(e,r),r.d!==(null==t?void 0:t.d)&&L(n,e,r,null==t?void 0:t.d))}))}(r),U(void 0)},q=function(n,r,e){var t=function(n,r){var e=u.get(r);return e||(e=F(n,r)),e}(e,n),o=t.l;return o.add(r),function(){o.delete(r),function(n,r){var e=u.get(r);e&&T(r,e)&&K(n,r)}(e,n)}},G=function(n,r){var e,t=c(n);try{for(t.s();!(e=t.n()).done;){var i=(0,o.Z)(e.value,2),u=i[0],a=i[1];w(u)&&(D(r,u,a),I(r,u))}}catch(H){t.e(H)}finally{t.f()}U(r)};return j={},(0,t.Z)(j,h,N),(0,t.Z)(j,g,B),(0,t.Z)(j,m,$),(0,t.Z)(j,b,q),(0,t.Z)(j,"h",G),(0,t.Z)(j,"n",(function(n){return r.add(n),function(){r.delete(n)}})),(0,t.Z)(j,"l",(function(){return e.values()})),(0,t.Z)(j,"a",(function(n){return i.get(n)})),(0,t.Z)(j,"m",(function(n){return u.get(n)})),j},E=function(n,r){return{s:r?r(n).SECRET_INTERNAL_store:y(n)}},O=new Map,S=function(n){return O.has(n)||O.set(n,(0,i.createContext)(E())),O.get(n)},Z=function(n){var r=n.children,e=n.initialValues,t=n.scope,u=n.unstable_createStore,a=n.unstable_enableVersionedWrite,c=(0,i.useState)({}),f=(0,o.Z)(c,2),l=f[0],v=f[1];(0,i.useEffect)((function(){var n=s.current;n.w&&(n.s.c(null,l),delete l.p,n.v=l)}),[l]);var s=(0,i.useRef)();if(!s.current){var d=E(e,u);if(a){var p=0;d.w=function(n){v((function(r){var e=p?r:{p:r};return n(e),e}))},d.v=l,d.r=function(n){++p,n(),--p}}s.current=d}var w=S(t);return(0,i.createElement)(w.Provider,{value:s.current},r)},j=0;function M(n,r){var e="atom".concat(++j),t={toString:function(){return e}};return"function"==typeof n?t.read=n:(t.init=n,t.read=function(n){return n(t)},t.write=function(n,r,e){return r(t,"function"==typeof e?e(n(t)):e)}),r&&(t.write=r),t}function P(n,r){var e=S(r),t=(0,i.useContext)(e),u=t.s,a=t.v,c=function(r){var e=u.r(n,r);if("e"in e)throw e.e;if("p"in e)throw e.p;if("v"in e)return e.v;throw new Error("no atom value")},f=(0,i.useReducer)((function(r,e){var t=c(e);return Object.is(r[1],t)&&r[2]===n?r:[e,t,n]}),a,(function(r){return[r,c(r),n]})),l=(0,o.Z)(f,2),v=(0,o.Z)(l[0],3),s=v[0],d=v[1],p=v[2],w=l[1],h=d;return p!==n&&(w(s),h=c(s)),(0,i.useEffect)((function(){var r=t.v;r&&u.c(n,r);var e=u.s(n,w,r);return w(r),e}),[u,n,t]),(0,i.useEffect)((function(){u.c(n,s)})),(0,i.useDebugValue)(h),h}function z(n,r){var e=S(r),t=(0,i.useContext)(e),o=t.s,u=t.w;return(0,i.useCallback)((function(r){if(!("write"in n))throw new Error("not writable atom");var e=function(e){return o.w(n,r,e)};return u?u(e):e()}),[o,u,n])}function k(n,r){return"scope"in n&&(console.warn("atom.scope is deprecated. Please do useAtom(atom, scope) instead."),r=n.scope),[P(n,r),z(n,r)]}},379:function(n,r,e){e.d(r,{Z:function(){return a}});var t=e(2875),o=e(7294),i=e(8427),u=(0,o.forwardRef)((function(n,r){var e=n.children,t=n.className,u=void 0===t?"":t;return o.createElement("main",{className:(0,i.m)("relative overflow-auto",u),ref:r},e)})),a=(0,o.forwardRef)((function(n,r){var e=n.children,i=n.navbar,a=n.providerData;return o.createElement(t.zt,{initialValues:a},o.createElement("div",{className:"grid h-screen bg-primary",style:{gridTemplateRows:"auto 1fr"}},i,o.createElement(u,{ref:r},e)))}))},1380:function(n,r){r.Z=function(n){return null!=n}}}]);
//# sourceMappingURL=79f0d978909a7bfd6366b2c1994888e993b12179-ab9b709842b8997f3944.js.map