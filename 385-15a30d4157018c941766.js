"use strict";(self.webpackChunkportfolio_colocate=self.webpackChunkportfolio_colocate||[]).push([[385],{9247:function(t,e,r){r.d(e,{m:function(){return n}});var n=function(t){var e,r;return null==t||null===(e=t.localFile)||void 0===e||null===(r=e.childImageSharp)||void 0===r?void 0:r.gatsbyImageData}},8385:function(t,e,r){r.r(e),r.d(e,{default:function(){return p}});var n=r(9439);function o(t,e){return null==t||null==e?NaN:t<e?-1:t>e?1:t>=e?0:NaN}function a(t,e){return Array.from(e,(function(e){return t[e]}))}function l(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return i(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return i(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,l=!0,u=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return l=t.done,t},e:function(t){u=!0,a=t},f:function(){try{l||null==r.return||r.return()}finally{if(u)throw a}}}}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function u(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o;if(t===o)return c;if("function"!=typeof t)throw new TypeError("compare is not a function");return function(e,r){var n=t(e,r);return n||0===n?n:(0===t(r,r))-(0===t(e,e))}}function c(t,e){return(null==t||!(t>=t))-(null==e||!(e>=e))||(t<e?-1:t>e?1:0)}var s=r(1082),f=r(7294),d=r(3723),m=r(8427),v=r(9247),g=function(t){var e=t.project,r=t.hideTitle,n=t.hideOverlay,o=t.index,a=void 0===o?0:o,l=t.className,i=void 0===l?"":l,u=e.highlightColor,c=e.coverImage,s=(0,v.m)(c),g=a%2==0;return f.createElement("div",{className:(0,m.m)("grid grid-rows-1 grid-cols-1 overflow-hidden",i)},f.createElement("div",{className:"col-start-1 row-start-1"},f.createElement("div",{className:"aspect-video sm:aspect-square"},s&&f.createElement(d.G,{image:s,alt:(null==c?void 0:c.alternativeText)||"",className:"object-cover object-center h-full transition-all ease-out duration-700 "+(n||u?"":"opacity-90")}))),!n&&f.createElement("div",{className:"col-start-1 row-start-1"},f.createElement("div",{style:{color:u||""},className:"z-10 h-full stripe-pattern  "+(u?"opacity-70":"opacity-5 bg-secondary")+" transition-all ease-out duration-200"})),!r&&f.createElement("div",{className:"row-start-1 col-start-1 flex "+(g?"justify-start":"justify-end")+" items-start"},f.createElement("div",{className:"inline z-20 mt-[10%] "+(g?"text-left":"text-right")+" bg-[rgba(247,247,247,0.97)] dark:bg-[rgba(21,21,21,0.9)] shadow-md py-0.5 "+(g?"pr-2 pl-0.5 rounded-tr-sm rounded-br-sm":"pl-2 pr-0.5 rounded-tl-sm rounded-bl-sm")},f.createElement("h2",{className:"tracking-wide text-secondary xs:text-xl"},e.title))))},h=r(4835),p=function(t){var e=t.projects,r=(0,h.t)()[0],o=null==r?void 0:r.slug,i=(0,f.useCallback)((function(t){var e;return Boolean(!o||(null===(e=t.areas)||void 0===e?void 0:e.map((function(t){return null==t?void 0:t.slug})).includes(o)))}),[o]),d=(0,f.useMemo)((function(){var t=e.map((function(t){return Object.assign({},t,{highlightColor:i(t)?null==r?void 0:r.color:null})}));return t?function(t){for(var e=arguments.length,r=new Array(e>1?e-1:0),o=1;o<e;o++)r[o-1]=arguments[o];if("function"!=typeof t[Symbol.iterator])throw new TypeError("values is not iterable");t=Array.from(t);var i=r,s=(0,n.Z)(i,1)[0];if(s&&2!==s.length||r.length>1){var f=Uint32Array.from(t,(function(t,e){return e}));return r.length>1?(r=r.map((function(e){return t.map(e)})),f.sort((function(t,e){var n,o=l(r);try{for(o.s();!(n=o.n()).done;){var a=n.value,i=c(a[t],a[e]);if(i)return i}}catch(u){o.e(u)}finally{o.f()}}))):(s=t.map(s),f.sort((function(t,e){return c(s[t],s[e])}))),a(t,f)}return t.sort(u(s))}(t,(function(t,e){var r=t.highlightColor,n=e.highlightColor;return Boolean(r)===Boolean(n)?0:r?-1:1})):t}),[i,null==r?void 0:r.color,e]);return f.createElement(f.Fragment,null,f.createElement("ul",{className:"grid grid-cols-1 gap-3 mx-3 mt-3 mb-2 sm:grid-cols-2"},d.map((function(t,e){return f.createElement("li",{key:t.id,className:"overflow-hidden rounded-sm"},f.createElement(s.rU,{to:t.slug||""},f.createElement(g,{project:t,index:e})))}))))}}}]);
//# sourceMappingURL=385-15a30d4157018c941766.js.map