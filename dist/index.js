"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=require("react"),e=require("react/jsx-runtime");function r(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var a=r(t),n=function(){return n=Object.assign||function(t){for(var e,r=1,a=arguments.length;r<a;r++)for(var n in e=arguments[r])Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t},n.apply(this,arguments)};function o(t,e,r,a){return new(r||(r=Promise))((function(n,o){function c(t){try{i(a.next(t))}catch(t){o(t)}}function s(t){try{i(a.throw(t))}catch(t){o(t)}}function i(t){var e;t.done?n(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(c,s)}i((a=a.apply(t,e||[])).next())}))}function c(t,e){var r,a,n,o,c={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s){return function(o){if(r)throw new TypeError("Generator is already executing.");for(;c;)try{if(r=1,a&&(n=2&o[0]?a.return:o[0]?a.throw||((n=a.return)&&n.call(a),0):a.next)&&!(n=n.call(a,o[1])).done)return n;switch(a=0,n&&(o=[2&o[0],n.value]),o[0]){case 0:case 1:n=o;break;case 4:return c.label++,{value:o[1],done:!1};case 5:c.label++,a=o[1],o=[0];continue;case 7:o=c.ops.pop(),c.trys.pop();continue;default:if(!(n=c.trys,(n=n.length>0&&n[n.length-1])||6!==o[0]&&2!==o[0])){c=0;continue}if(3===o[0]&&(!n||o[1]>n[0]&&o[1]<n[3])){c.label=o[1];break}if(6===o[0]&&c.label<n[1]){c.label=n[1],n=o;break}if(n&&c.label<n[2]){c.label=n[2],c.ops.push(o);break}n[2]&&c.ops.pop(),c.trys.pop();continue}o=e.call(t,c)}catch(t){o=[6,t],a=0}finally{r=n=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}}var s=a.default.createContext({snackbarState:{toggleOpenSnackbar:!1,color:"success",message:null,vertical:"",horizontal:""},setSnackbarState:function(t){}});!function(t,e){void 0===e&&(e={});var r=e.insertAt;if(t&&"undefined"!=typeof document){var a=document.head||document.getElementsByTagName("head")[0],n=document.createElement("style");n.type="text/css","top"===r&&a.firstChild?a.insertBefore(n,a.firstChild):a.appendChild(n),n.styleSheet?n.styleSheet.cssText=t:n.appendChild(document.createTextNode(t))}}(".snackbar-container{align-items:center;border:transparent;border-radius:.75rem;box-shadow:0 3px 6px rgba(0,0,0,.16),0 3px 6px rgba(0,0,0,.23);color:#fff;display:flex;justify-content:center;max-width:30%;padding:.625rem 1rem;position:fixed;z-index:1000}.snackbar-rtl{direction:rtl}.snackbar-ltr{direction:ltr}.snackbar-left{left:10px}.snackbar-right{right:10px}.snackbar-bottom{bottom:1rem}.snackbar-bottom.snackbar-open{animation:fadeinBottom .5s}.snackbar-bottom.snackbar-close{animation:fadeoutBottom .5s}.snackbar-top{top:1rem}.snackbar-top.snackbar-open{animation:fadeinTop .5s}.snackbar-top.snackbar-close{animation:fadeoutTop .5s}.snackbar-center-horizontal{left:50%;transform:translateX(-50%)}.snackbar-center-vertical{top:50%}.snackbar-center-vertical.snackbar-open{animation:fadeinCenter .5s}.snackbar-center-vertical.snackbar-close{animation:fadeoutCenter .5s}.ms-2{margin-left:8px}.mr-2{margin-right:8px}.error-snack{background-color:#dc3545}.success-snack{background-color:#28a745}.warn-snack{background-color:#ffc107}.snackbar-button{align-items:center;background-color:transparent;border:none;border-radius:50%;color:#fff;cursor:pointer;display:flex;height:1.75rem;justify-content:center;opacity:1;padding:0;text-align:center;transition:.5s;width:1.75rem}.snackbar-button:hover{background-color:gray;opacity:.5}@keyframes fadeoutBottom{0%{bottom:1rem;opacity:1}to{bottom:0;opacity:0}}@keyframes fadeinBottom{0%{bottom:0;opacity:0}to{bottom:1rem;opacity:1}}@keyframes fadeinTop{0%{opacity:0;top:0}to{opacity:1;top:1rem}}@keyframes fadeoutTop{0%{opacity:1;top:1rem}to{opacity:0;top:0}}@keyframes fadeinCenter{0%{opacity:0}to{opacity:1}}@keyframes fadeoutCenter{0%{opacity:1}to{opacity:0}}");var i={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},l=a.default.createContext&&a.default.createContext(i),u=function(){return u=Object.assign||function(t){for(var e,r=1,a=arguments.length;r<a;r++)for(var n in e=arguments[r])Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t},u.apply(this,arguments)},d=function(t,e){var r={};for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&e.indexOf(a)<0&&(r[a]=t[a]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(t);n<a.length;n++)e.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(t,a[n])&&(r[a[n]]=t[a[n]])}return r};function f(t){return t&&t.map((function(t,e){return a.default.createElement(t.tag,u({key:e},t.attr),f(t.child))}))}function m(t){return function(e){return a.default.createElement(p,u({attr:u({},t.attr)},e),f(t.child))}}function p(t){var e=function(e){var r,n=t.attr,o=t.size,c=t.title,s=d(t,["attr","size","title"]),i=o||e.size||"1em";return e.className&&(r=e.className),t.className&&(r=(r?r+" ":"")+t.className),a.default.createElement("svg",u({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},e.attr,n,s,{className:r,style:u(u({color:t.color||e.color},e.style),t.style),height:i,width:i,xmlns:"http://www.w3.org/2000/svg"}),c&&a.default.createElement("title",null,c),t.children)};return void 0!==l?a.default.createElement(l.Consumer,null,(function(t){return e(t)})):e(i)}function b(t){return m({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"18",y1:"6",x2:"6",y2:"18"}},{tag:"line",attr:{x1:"6",y1:"6",x2:"18",y2:"18"}}]})(t)}function k(t){return m({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M8.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L2.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093L8.95 4.992a.252.252 0 0 1 .02-.022zm-.92 5.14.92.92a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 1 0-1.091-1.028L9.477 9.417l-.485-.486-.943 1.179z"}}]})(t)}function h(t){return m({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M11.953 2C6.465 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.493 2 11.953 2zM12 20c-4.411 0-8-3.589-8-8s3.567-8 7.953-8C16.391 4 20 7.589 20 12s-3.589 8-8 8z"}},{tag:"path",attr:{d:"M11 7h2v7h-2zm0 8h2v2h-2z"}}]})(t)}function v(t){return m({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M464 720a48 48 0 1 0 96 0 48 48 0 1 0-96 0zm16-304v184c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V416c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8zm475.7 440l-416-720c-6.2-10.7-16.9-16-27.7-16s-21.6 5.3-27.7 16l-416 720C56 877.4 71.4 904 96 904h832c24.6 0 40-26.6 27.7-48zm-783.5-27.9L512 239.9l339.8 588.2H172.2z"}}]})(t)}var g=function(r){var a,i=r.timeout,l=r.vertical,u=r.horizontal,d=r.dir,f=t.useContext(s),m=f.snackbarState,p=f.setSnackbarState,g=m.toggleOpenSnackbar,y=m.message,x=m.color,w=m.vertical?m.vertical:l,S=m.horizontal?m.horizontal:u,z="bottom"===w?"snackbar-bottom":"center"===w?"snackbar-center-vertical":"snackbar-top",j="left"===S?"snackbar-left":"center"===S?"snackbar-center-horizontal":"snackbar-right";t.useEffect((function(){return g&&function(){o(this,void 0,void 0,(function(){var t;return c(this,(function(e){return clearTimeout(a),null==(t=document.getElementById("custom-snack"))||t.classList.remove("snackbar-close"),null==t||t.classList.add("snackbar-open"),a=setTimeout((function(){null==t||t.classList.add("snackbar-close"),null==t||t.classList.remove("snackbar-open"),setTimeout((function(){p(n(n({},m),{message:null,toggleOpenSnackbar:!1}))}),500)}),i),[2]}))}))}(),function(){clearTimeout(a)}}),[g,y,a,x]);var C={error:{rtl:"خطا",ltr:"Error"},success:{rtl:"موفقیت",ltr:"Done"},warn:{rtl:"اخطار",ltr:"Warn"}};return g?e.jsxs("div",n({"data-testid":"custom-snack",id:"custom-snack",className:"\n                    snackbar-container \n                    ".concat(z," \n                    ").concat(j," \n                    ").concat(g?"snackbar-open":"snackbar-close"," \n                    ").concat("error"===x?"error-snack":"success"===x?"success-snack":"warn-snack","\n                    ").concat("rtl"===d?"snackbar-rtl":"snackbar-ltr","\n                    ")},{children:[e.jsx("div",{children:"error"===x?e.jsx(h,{width:20,height:20}):"success"===x?e.jsx(k,{}):e.jsx(v,{})}),e.jsxs("span",n({className:"ms-2 mr-2",style:{fontFamily:"serif",textAlign:"ltr"===d?"left":"right",wordBreak:"break-all"}},{children:["error"===x?C.error[d]:"success"===x?C.success[d]:C.warn[d],": ",y]})),e.jsx("div",{children:e.jsx("button",n({className:"snackbar-button ".concat("error"===x?"error-snack":"success"===x?"success-snack":"warn-snack"),onClick:function(){clearTimeout(a);var t=document.getElementById("custom-snack");null==t||t.classList.add("snackbar-close"),null==t||t.classList.remove("snackbar-open"),setTimeout((function(){p(n(n({},m),{message:null,toggleOpenSnackbar:!1}))}),500)}},{children:e.jsx(b,{})}))})]})):null};exports.SnackbarProvider=function(r){var a=r.children,o=r.timeout,c=void 0===o?3e3:o,i=r.vertical,l=void 0===i?"bottom":i,u=r.horizontal,d=void 0===u?"center":u,f=r.dir,m=void 0===f?"ltr":f,p=t.useState({toggleOpenSnackbar:!1,color:"success",message:null,vertical:"bottom",horizontal:"center"}),b={snackbarState:p[0],setSnackbarState:p[1]};return e.jsxs(s.Provider,n({value:b},{children:[e.jsx(g,{timeout:c,vertical:l,horizontal:d,dir:m}),a]}))},exports.useSnackbar=function(){var e=t.useContext(s).setSnackbarState;return function(t){var r=t.message,a=t.color,o=t.vertical,c=t.horizontal;e(n(n({},StaticRange),{toggleOpenSnackbar:!0,message:r,color:a,vertical:o,horizontal:c}))}};
//# sourceMappingURL=index.js.map