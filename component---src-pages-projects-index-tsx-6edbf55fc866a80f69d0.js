"use strict";(self.webpackChunkportfolio_colocate=self.webpackChunkportfolio_colocate||[]).push([[845],{1736:function(e,n,t){t.d(n,{R:function(){return a},o:function(){return i}});var r=t(2875),i=(0,r.cn)([]),a=(0,r.cn)([])},6114:function(e,n,t){t.d(n,{T:function(){return i}});var r=t(1380),i=function(e){return e.edges.filter(r.Z).map((function(e){return e.node}))}},4835:function(e,n,t){t.d(n,{t:function(){return l}});var r=t(2875),i=t(4857),a=t(1736),o=(0,i.GG)("area","",{serialize:function(e){return e},deserialize:function(e){return e}}),u=(0,r.cn)((function(e){var n,t=e(a.o),r=e(o);return null!==(n=t.find((function(e){return e.slug===r})))&&void 0!==n?n:null}),(function(e,n,t){return n(o,null!=t?t:i.td)})),l=function(){return(0,r.KO)(u)}},7768:function(e,n,t){t.r(n),t.d(n,{default:function(){return oe}});var r=t(5987),i=t(9439),a=t(4942),o=t(7294),u=t(8222),l=t(4474),c=t(5893),s=t(260);function f(){var e=(0,o.useRef)(!1);return(0,s.e)((function(){return e.current=!0,function(){e.current=!1}}),[]),e}var d=t(6759),v=t(1919),m=t(5307),p=t(3433);var h=t(1835);function g(e){for(var n,t=arguments.length,r=new Array(t>1?t-1:0),i=1;i<t;i++)r[i-1]=arguments[i];e&&r.length>0&&(n=e.classList).add.apply(n,r)}function E(e){for(var n,t=arguments.length,r=new Array(t>1?t-1:0),i=1;i<t;i++)r[i-1]=arguments[i];e&&r.length>0&&(n=e.classList).remove.apply(n,r)}var b,y=((b=y||{}).Ended="ended",b.Cancelled="cancelled",b);function w(e,n,t,r){var a=t?"enter":"leave",o=(0,h.k)(),u=void 0!==r?function(e){var n={called:!1};return function(){if(!n.called)return n.called=!0,e.apply(void 0,arguments)}}(r):function(){};"enter"===a&&(e.removeAttribute("hidden"),e.style.display="");var l=(0,c.E)(a,{enter:function(){return n.enter},leave:function(){return n.leave}}),s=(0,c.E)(a,{enter:function(){return n.enterTo},leave:function(){return n.leaveTo}}),f=(0,c.E)(a,{enter:function(){return n.enterFrom},leave:function(){return n.leaveFrom}});return E.apply(void 0,[e].concat((0,p.Z)(n.enter),(0,p.Z)(n.enterTo),(0,p.Z)(n.enterFrom),(0,p.Z)(n.leave),(0,p.Z)(n.leaveFrom),(0,p.Z)(n.leaveTo),(0,p.Z)(n.entered))),g.apply(void 0,[e].concat((0,p.Z)(l),(0,p.Z)(f))),o.nextFrame((function(){E.apply(void 0,[e].concat((0,p.Z)(f))),g.apply(void 0,[e].concat((0,p.Z)(s))),function(e,n){var t=(0,h.k)();if(!e)return t.dispose;var r=getComputedStyle(e),a=[r.transitionDuration,r.transitionDelay].map((function(e){var n=e.split(",").filter(Boolean).map((function(e){return e.includes("ms")?parseFloat(e):1e3*parseFloat(e)})).sort((function(e,n){return n-e})),t=(0,i.Z)(n,1)[0];return void 0===t?0:t})),o=(0,i.Z)(a,2);if(o[0]+o[1]!==0){var u=[];u.push(t.addEventListener(e,"transitionrun",(function(r){r.target===r.currentTarget&&(u.splice(0).forEach((function(e){return e()})),u.push(t.addEventListener(e,"transitionend",(function(e){e.target===e.currentTarget&&(n("ended"),u.splice(0).forEach((function(e){return e()})))})),t.addEventListener(e,"transitioncancel",(function(e){e.target===e.currentTarget&&(n("cancelled"),u.splice(0).forEach((function(e){return e()})))}))))})))}else n("ended");t.add((function(){return n("cancelled")})),t.dispose}(e,(function(t){return"ended"===t&&(E.apply(void 0,[e].concat((0,p.Z)(l))),g.apply(void 0,[e].concat((0,p.Z)(n.entered)))),u(t)}))})),o.dispose}var Z=t(6482);function x(e){var n=e.container,t=e.direction,r=e.classes,i=e.onStart,o=e.onStop,u=f(),l=(0,Z.G)(),v=(0,d.E)(t);(0,s.e)((function(){var e=(0,h.k)();l.add(e.dispose);var t=n.current;if(t&&"idle"!==v.current&&u.current)return e.dispose(),i.current(v.current),e.add(w(t,r.current,"enter"===v.current,(function(n){var t;e.dispose(),(0,c.E)(n,(t={},(0,a.Z)(t,y.Ended,(function(){o.current(v.current)})),(0,a.Z)(t,y.Cancelled,(function(){})),t))}))),e.dispose}),[t])}var T=t(9777),C=["beforeEnter","afterEnter","beforeLeave","afterLeave","enter","enterFrom","enterTo","entered","leave","leaveFrom","leaveTo"],k=["show","appear","unmount"];function O(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function R(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?O(Object(t),!0).forEach((function(n){(0,a.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):O(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function j(e,n){var t="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=function(e,n){if(!e)return;if("string"==typeof e)return S(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return S(e,n)}(e))||n&&e&&"number"==typeof e.length){t&&(e=t);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,o=!0,u=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return o=e.done,e},e:function(e){u=!0,a=e},f:function(){try{o||null==t.return||t.return()}finally{if(u)throw a}}}}function S(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function P(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e.split(" ").filter((function(e){return e.trim().length>1}))}var F=(0,o.createContext)(null);F.displayName="TransitionContext";var L,N=((L=N||{}).Visible="visible",L.Hidden="hidden",L);var A=(0,o.createContext)(null);function M(e){return"children"in e?M(e.children):e.current.filter((function(e){return null!==e.el.current})).filter((function(e){return"visible"===e.state})).length>0}function z(e,n){var t=(0,d.E)(e),r=(0,o.useRef)([]),l=f(),s=(0,Z.G)(),v=(0,T.z)((function(e){var n,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:u.l4.Hidden,o=r.current.findIndex((function(n){return n.el===e}));-1!==o&&((0,c.E)(i,(n={},(0,a.Z)(n,u.l4.Unmount,(function(){r.current.splice(o,1)})),(0,a.Z)(n,u.l4.Hidden,(function(){r.current[o].state="hidden"})),n)),s.microTask((function(){var e;!M(r)&&l.current&&(null==(e=t.current)||e.call(t))})))})),m=(0,T.z)((function(e){var n=r.current.find((function(n){return n.el===e}));return n?"visible"!==n.state&&(n.state="visible"):r.current.push({el:e,state:"visible"}),function(){return v(e,u.l4.Unmount)}})),p=(0,o.useRef)([]),h=(0,o.useRef)(Promise.resolve()),g=(0,o.useRef)({enter:[],leave:[],idle:[]}),E=(0,T.z)((function(e,t,r){p.current.splice(0),n&&(n.chains.current[t]=n.chains.current[t].filter((function(n){return(0,i.Z)(n,1)[0]!==e}))),null==n||n.chains.current[t].push([e,new Promise((function(e){p.current.push(e)}))]),null==n||n.chains.current[t].push([e,new Promise((function(e){Promise.all(g.current[t].map((function(e){var n=(0,i.Z)(e,2);n[0];return n[1]}))).then((function(){return e()}))}))]),"enter"===t?h.current=h.current.then((function(){return null==n?void 0:n.wait.current})).then((function(){return r(t)})):r(t)})),b=(0,T.z)((function(e,n,t){Promise.all(g.current[n].splice(0).map((function(e){var n=(0,i.Z)(e,2);n[0];return n[1]}))).then((function(){var e;null==(e=p.current.shift())||e()})).then((function(){return t(n)}))}));return(0,o.useMemo)((function(){return{children:r,register:m,unregister:v,onStart:E,onStop:b,wait:h,chains:g}}),[m,v,r,E,b,g,h])}function D(){}A.displayName="NestingContext";var H=["beforeEnter","afterEnter","beforeLeave","afterLeave"];function B(e){var n,t,r={},i=j(H);try{for(i.s();!(t=i.n()).done;){var a=t.value;r[a]=null!=(n=e[a])?n:D}}catch(o){i.e(o)}finally{i.f()}return r}var G=u.AN.RenderStrategy,I=(0,u.yV)((function(e,n){var t,s=e.beforeEnter,f=e.afterEnter,p=e.beforeLeave,h=e.afterLeave,g=e.enter,E=e.enterFrom,b=e.enterTo,y=e.entered,w=e.leave,Z=e.leaveFrom,k=e.leaveTo,O=(0,r.Z)(e,C),R=(0,o.useRef)(null),j=(0,m.T)(R,n),S=O.unmount?u.l4.Unmount:u.l4.Hidden,L=function(){var e=(0,o.useContext)(F);if(null===e)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}(),N=L.show,D=L.appear,H=L.initial,I=(0,o.useState)(N?"visible":"hidden"),V=(0,i.Z)(I,2),U=V[0],J=V[1],Y=function(){var e=(0,o.useContext)(A);if(null===e)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}(),_=Y.register,K=Y.unregister,W=(0,o.useRef)(null);(0,o.useEffect)((function(){return _(R)}),[_,R]),(0,o.useEffect)((function(){var e;if(S===u.l4.Hidden&&R.current)return N&&"visible"!==U?void J("visible"):(0,c.E)(U,(e={},(0,a.Z)(e,"hidden",(function(){return K(R)})),(0,a.Z)(e,"visible",(function(){return _(R)})),e))}),[U,R,_,K,N,S]);var $=(0,d.E)({enter:P(g),enterFrom:P(E),enterTo:P(b),entered:P(y),leave:P(w),leaveFrom:P(Z),leaveTo:P(k)}),q=function(e){var n=(0,o.useRef)(B(e));return(0,o.useEffect)((function(){n.current=B(e)}),[e]),n}({beforeEnter:s,afterEnter:f,beforeLeave:p,afterLeave:h}),Q=(0,v.H)();(0,o.useEffect)((function(){if(Q&&"visible"===U&&null===R.current)throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")}),[R,U,Q]);var X=H&&!D,ee=!Q||X||W.current===N?"idle":N?"enter":"leave",ne=(0,T.z)((function(e){return(0,c.E)(e,{enter:function(){return q.current.beforeEnter()},leave:function(){return q.current.beforeLeave()},idle:function(){}})})),te=(0,T.z)((function(e){return(0,c.E)(e,{enter:function(){return q.current.afterEnter()},leave:function(){return q.current.afterLeave()},idle:function(){}})})),re=z((function(){J("hidden"),K(R)}),Y);x({container:R,classes:$,direction:ee,onStart:(0,d.E)((function(e){re.onStart(R,e,ne)})),onStop:(0,d.E)((function(e){re.onStop(R,e,te),"leave"===e&&!M(re)&&(J("hidden"),K(R))}))}),(0,o.useEffect)((function(){!X||(S===u.l4.Hidden?W.current=null:W.current=N)}),[N,X,U]);var ie=O,ae={ref:j};return o.createElement(A.Provider,{value:re},o.createElement(l.up,{value:(0,c.E)(U,(t={},(0,a.Z)(t,"visible",l.ZM.Open),(0,a.Z)(t,"hidden",l.ZM.Closed),t))},(0,u.sY)({ourProps:ae,theirProps:ie,defaultTag:"div",features:G,visible:"visible"===U,name:"Transition.Child"})))})),V=(0,u.yV)((function(e,n){var t,f=e.show,d=e.appear,p=void 0!==d&&d,h=e.unmount,g=(0,r.Z)(e,k),E=(0,o.useRef)(null),b=(0,m.T)(E,n);(0,v.H)();var y=(0,l.oJ)();if(void 0===f&&null!==y&&(f=(0,c.E)(y,(t={},(0,a.Z)(t,l.ZM.Open,!0),(0,a.Z)(t,l.ZM.Closed,!1),t))),![!0,!1].includes(f))throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");var w=(0,o.useState)(f?"visible":"hidden"),Z=(0,i.Z)(w,2),x=Z[0],T=Z[1],C=z((function(){T("hidden")})),O=(0,o.useState)(!0),j=(0,i.Z)(O,2),S=j[0],P=j[1],L=(0,o.useRef)([f]);(0,s.e)((function(){!1!==S&&L.current[L.current.length-1]!==f&&(L.current.push(f),P(!1))}),[L,f]);var N=(0,o.useMemo)((function(){return{show:f,appear:p,initial:S}}),[f,p,S]);(0,o.useEffect)((function(){if(f)T("visible");else if(M(C)){var e=E.current;if(!e)return;var n=e.getBoundingClientRect();0===n.x&&0===n.y&&0===n.width&&0===n.height&&T("hidden")}else T("hidden")}),[f,C]);var D={unmount:h};return o.createElement(A.Provider,{value:C},o.createElement(F.Provider,{value:N},(0,u.sY)({ourProps:R(R({},D),{},{as:o.Fragment,children:o.createElement(I,R(R({ref:b},D),g))}),theirProps:{},defaultTag:o.Fragment,features:G,visible:"visible"===x,name:"Transition"})))})),U=(0,u.yV)((function(e,n){var t=null!==(0,o.useContext)(F),r=null!==(0,l.oJ)();return o.createElement(o.Fragment,null,!t&&r?o.createElement(V,R({ref:n},e)):o.createElement(I,R({ref:n},e)))})),J=Object.assign(V,{Child:U,Root:V});var Y=o.forwardRef((function(e,n){return o.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:n},e),o.createElement("path",{fillRule:"evenodd",d:"M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z",clipRule:"evenodd"}))})),_=t(6467),K=t(379),W=t(1819),$=t(1736),q=t(6114),Q=t(6466);var X=o.forwardRef((function(e,n){return o.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor","aria-hidden":"true",ref:n},e),o.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18L18 6M6 6l12 12"}))})),ee=t(4835),ne=function(e){var n=e.areas,t=(0,ee.t)(),r=t[0],i=t[1];return o.createElement("div",{className:"flex items-center justify-center gap-4 text-bg-secondary"},n.map((function(e,n){var t=e.id,a=e.color,u=e.name,l=e.slug,c=l===(null==r?void 0:r.slug);return o.createElement("button",{key:t,onClick:function(e){i(c?null:null!=l?l:null)},style:{color:c?"inherit":a||"inherit",backgroundColor:c&&a||"transparent",borderColor:a||"none"},className:"ml-2 animate-fadeIn animate-delay-"+(100+100*n)+" cursor-pointer px-1.5 py-0.5 rounded\n            "},u)})))},te=function(e){var n=e.areas,t=(0,ee.t)(),r=t[0],i=t[1],a=(0,o.useCallback)((function(e){var n=e.slug===(null==r?void 0:r.slug);i(n||!e.slug?null:e.slug)}),[null==r?void 0:r.slug,i]);return o.createElement("div",{className:"flex flex-col items-center"},o.createElement(Q.R,{value:r,onChange:a},o.createElement("div",{className:"relative"},o.createElement(Q.R.Button,{style:{backgroundColor:(null==r?void 0:r.color)||"transparent"},className:"px-2 py-0.5 rounded text-center tracking-wide "+(r?"text-bg-secondary":"text-primary")},r?r.name:"Filter by Area"),r&&o.createElement("button",{className:"absolute top-0 bottom-0 flex items-center p-1 -right-9",onClick:function(){return i(null)}},o.createElement(X,{className:"w-4 h-4"}))),o.createElement(Q.R.Options,{className:"flex flex-col items-center"},n.filter((function(e){return!r||e.id!==r.id})).map((function(e,n){var t=e.id,i=void 0===t?null:t,a=e.color,u=e.name,l=e.slug===(null==r?void 0:r.slug);return o.createElement(Q.R.Option,{key:i,value:e,className:"text-bg-secondary"},o.createElement("div",{style:{color:l?"inherit":a||"inherit",backgroundColor:l?a||"transparent":""},className:"inline-block px-2 py-0.5 rounded mt-1.5 animate-fadeInFast bg-primary tracking-wide animate-delay-"+50*n+" cursor-pointer"},u))})))))},re=function(e){var n=e.areas;return(0,_.Gc)().lg?o.createElement(ne,{areas:n}):o.createElement("div",{className:"self-start block mt-3.5 min-w-[180px] lg:hidden"},o.createElement(te,{areas:n}))},ie=(0,o.lazy)((function(){return t.e(385).then(t.bind(t,8385))})),ae=(0,o.lazy)((function(){return Promise.all([t.e(532),t.e(865)]).then(t.bind(t,2865))})),oe=function(e){var n=e.data,t=n.allStrapiArea,r=n.allStrapiProject,i=(0,o.useMemo)((function(){return(0,q.T)(t)}),[t]),a=(0,o.useMemo)((function(){return(0,q.T)(r)}),[r]),u=(0,_.Gc)(),l=(0,o.useRef)(null);return o.createElement(K.Z,{ref:l,navbar:o.createElement(W.w,null,o.createElement(re,{areas:i})),providerData:[[$.o,i],[$.R,a]]},o.createElement(o.Suspense,{fallback:o.createElement("div",{className:"flex items-center justify-center text-2xl font-light tracking-wide h-4/5 text-secondary"},o.createElement("div",null,"Loading ..."))},o.createElement(J,{appear:Object.keys(u).length>0,show:!0,enter:"transition-opacity duration-600",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"transition-opacity duration-600",leaveFrom:"opacity-100",leaveTo:"opacity-0"},u.md?o.createElement(ae,{projects:a,areas:i}):o.createElement(o.Fragment,null,o.createElement(ie,{projects:a,areas:i}),o.createElement("div",{className:"flex justify-center mb-2"},o.createElement("button",{className:"p-2 rounded-full",onClick:function(){var e;return null===(e=l.current)||void 0===e?void 0:e.scrollTo(0,0)}},o.createElement("div",{className:"flex items-center gap-2"},o.createElement("div",null,"Back to top"),o.createElement(Y,{className:"w-4 h-4"}))))))))}}}]);
//# sourceMappingURL=component---src-pages-projects-index-tsx-6edbf55fc866a80f69d0.js.map