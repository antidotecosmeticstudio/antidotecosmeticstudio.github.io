(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{2730:function(e,t,n){"use strict";var i=n(7294);function r(e){return Array.prototype.slice.call(e)}function o(e,t){var n=Math.floor(e);return n===t||n+1===t?e:t}function a(){return Date.now()}function A(e,t,n){if(t="data-keen-slider-"+t,null===n)return e.removeAttribute(t);e.setAttribute(t,n||"")}function s(e,t){return t=t||document,"function"==typeof e&&(e=e(t)),Array.isArray(e)?e:"string"==typeof e?r(t.querySelectorAll(e)):e instanceof HTMLElement?[e]:e instanceof NodeList?r(e):[]}function c(e){e.raw&&(e=e.raw),e.cancelable&&!e.defaultPrevented&&e.preventDefault()}function l(e){e.raw&&(e=e.raw),e.stopPropagation&&e.stopPropagation()}function d(){var e=[];return{add:function(t,n,i,r){t.addListener?t.addListener(i):t.addEventListener(n,i,r),e.push([t,n,i,r])},input:function(e,t,n,i){this.add(e,t,function(e){e.nativeEvent&&(e=e.nativeEvent);var t=e.changedTouches||[],i=e.targetTouches||[],r=e.detail&&e.detail.x?e.detail:null;return n({id:r?r.identifier?r.identifier:"i":i[0]?i[0]?i[0].identifier:"e":"d",idChanged:r?r.identifier?r.identifier:"i":t[0]?t[0]?t[0].identifier:"e":"d",raw:e,x:r&&r.x?r.x:i[0]?i[0].screenX:r?r.x:e.pageX,y:r&&r.y?r.y:i[0]?i[0].screenY:r?r.y:e.pageY})},i)},purge:function(){e.forEach(function(e){e[0].removeListener?e[0].removeListener(e[2]):e[0].removeEventListener(e[1],e[2],e[3])}),e=[]}}}function u(e,t,n){return Math.min(Math.max(e,t),n)}function h(e){return(e>0?1:0)-(e<0?1:0)||+e}function m(e){var t=e.getBoundingClientRect();return{height:o(t.height,e.offsetHeight),width:o(t.width,e.offsetWidth)}}function f(e,t,n,i){var r=e&&e[t];return null==r?n:i&&"function"==typeof r?r():r}function g(e){return Math.round(1e6*e)/1e6}var p=function(){return(p=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};function x(e,t,n){if(n||2==arguments.length)for(var i,r=0,o=t.length;r<o;r++)!i&&r in t||(i||(i=Array.prototype.slice.call(t,0,r)),i[r]=t[r]);return e.concat(i||Array.prototype.slice.call(t))}function w(e){var t,n,i,r,o,a,A;function s(e){return 1-Math.pow(1-e,3)}function c(e,t){void 0===t&&(t=1e3);var n=147e-9+(e=Math.abs(e))/t;return{dist:Math.pow(e,2)/n,dur:e/n}}function l(){var t=e.track.details;t&&(r=t.min,o=t.max,a=t.minIdx,A=t.maxIdx)}function d(){e.animator.stop()}e.on("updated",l),e.on("optionsChanged",l),e.on("created",l),e.on("dragStarted",function(){d(),t=n=e.track.details.abs}),e.on("dragEnded",function(){var l,m,f,g,p,x,w=e.options.mode;"snap"===w&&(l=e.track,f=(m=e.track.details).position,g=h(l.velocity()),(f>o||f<r)&&(g=0),p=t+g,0===m.slides[l.absToRel(p)].portion&&(p-=g),t!==n&&(p=n),h(l.idxToDist(p,!0))!==g&&(p+=g),p=u(p,a,A),x=l.idxToDist(p,!0),e.animator.start([{distance:x,duration:500,easing:function(e){return 1+--e*e*e*e*e}}])),"free"!==w&&"free-snap"!==w||function(){d();var t="free-snap"===e.options.mode,n=e.track,l=n.velocity();i=h(l);var m=e.track.details,f=[];if(l||!t){var g=c(l),p=g.dist,x=g.dur;if(x*=2,p*=i,t){var w=n.idxToDist(n.distToIdx(p),!0);w&&(p=w)}f.push({distance:p,duration:x,easing:s});var y=m.position,v=y+p;if(v<r||v>o){var b=v<r?r-y:o-y,C=0,I=l;if(h(b)===i){var k=Math.min(Math.abs(b)/Math.abs(p),1),E=(1-Math.pow(1-k,1/3))*x;f[0].earlyExit=E,I=l*(1-k)}else f[0].earlyExit=0,C+=b;var j=c(I,100),Q=j.dist*i;e.options.rubberband&&(f.push({distance:Q,duration:2*j.dur,easing:s}),f.push({distance:-Q+C,duration:500,easing:s}))}e.animator.start(f)}else e.moveToIdx(u(m.abs,a,A),!0,{duration:500,easing:function(e){return 1+--e*e*e*e*e}})}()}),e.on("dragged",function(){n=e.track.details.abs})}function y(e){var t,n,i,r,o,a,m,f,g,p,x,w,y,v,b,C,I,k,E=d();function j(s){if(a&&f===s.id){var d=M(s);if(g){if(!B(s))return S(s);p=d,g=!1,e.emit("dragChecked")}if(C)return p=d;c(s);var y=function(t){if(I===-1/0&&k===1/0)return t;var i=e.track.details,a=i.length,A=i.position,s=u(t,I-A,k-A);if(0===a)return 0;if(!e.options.rubberband)return s;if(A<=k&&A>=I||A<I&&n>0||A>k&&n<0)return t;var c=Math.max(0,1-Math.abs((A<I?A-I:A-k)/a*(r*a))/o*2);return c*c*t}(m(p-d)/r*i);n=h(y);var v=e.track.details.position;(v>I&&v<k||v===I&&n>0||v===k&&n<0)&&l(s),x+=y,!w&&Math.abs(x*r)>5&&(w=!0,A(t,"moves","")),e.track.add(y),p=d,e.emit("dragged")}}function Q(t){!a&&e.track.details&&e.track.details.length&&(w=!1,x=0,a=!0,g=!0,f=t.id,B(t),p=M(t),e.emit("dragStarted"))}function S(n){a&&f===n.idChanged&&(A(t,"moves",null),a=!1,e.emit("dragEnded"))}function B(e){var t=D(),n=t?e.y:e.x,i=t?e.x:e.y,r=void 0!==y&&void 0!==v&&Math.abs(v-i)<=Math.abs(y-n);return y=n,v=i,r}function M(e){return D()?e.y:e.x}function D(){return e.options.vertical}function _(){r=e.size,o=D()?window.innerHeight:window.innerWidth;var t=e.track.details;t&&(I=t.min,k=t.max)}function P(){if(E.purge(),e.options.drag&&!e.options.disabled){m="function"==typeof(r=e.options.dragSpeed||1)?r:function(e){return e*r},i=e.options.rtl?-1:1,_(),t=e.container,n="data-keen-slider-clickable",s("[".concat(n,"]:not([").concat(n,"=false])"),t).map(function(e){E.add(e,"mousedown",l),E.add(e,"touchstart",l)}),E.add(t,"dragstart",function(e){c(e)}),E.input(t,"ksDragStart",Q),E.input(t,"ksDrag",j),E.input(t,"ksDragEnd",S),E.input(t,"mousedown",Q),E.input(t,"mousemove",j),E.input(t,"mouseleave",S),E.input(t,"mouseup",S),E.input(t,"touchstart",Q,{passive:!0}),E.input(t,"touchmove",j,{passive:!1}),E.input(t,"touchend",S),E.input(t,"touchcancel",S),E.add(window,"wheel",function(e){a&&c(e)});var n,r,o="data-keen-slider-scrollable";s("[".concat(o,"]:not([").concat(o,"=false])"),e.container).map(function(e){var t;E.input(e,"touchstart",function(e){t=M(e),C=!0,b=!0},{passive:!0}),E.input(e,"touchmove",function(n){var i=D(),r=i?e.scrollHeight-e.clientHeight:e.scrollWidth-e.clientWidth,o=t-M(n),a=i?e.scrollTop:e.scrollLeft,A=i&&"scroll"===e.style.overflowY||!i&&"scroll"===e.style.overflowX;if(t=M(n),(o<0&&a>0||o>0&&a<r)&&b&&A)return C=!0;b=!1,c(n),C=!1}),E.input(e,"touchend",function(){C=!1})})}}e.on("updated",_),e.on("optionsChanged",P),e.on("created",P),e.on("destroyed",E.purge)}function v(e){var t,n,i=null;function r(t,n,i){e.animator.active?a(t,n,i):requestAnimationFrame(function(){return a(t,n,i)})}function o(){r(!1,!1,n)}function a(n,r,o){var a=0,A=e.size,l=e.track.details;if(l&&t){var d=l.slides;t.forEach(function(e,t){if(n)!i&&r&&s(e,null,o),c(e,null,o);else{if(!d[t])return;var l=d[t].size*A;!i&&r&&s(e,l,o),c(e,d[t].distance*A-a,o),a+=l}})}}function A(t){return"performance"===e.options.renderMode?Math.round(t):t}function s(e,t,n){var i=n?"height":"width";null!==t&&(t=A(t)+"px"),e.style["min-"+i]=t,e.style["max-"+i]=t}function c(e,t,n){if(null!==t){t=A(t);var i=n?t:0;t="translate3d(".concat(n?0:t,"px, ").concat(i,"px, 0)")}e.style.transform=t,e.style["-webkit-transform"]=t}function l(){t&&(a(!0,!0,n),t=null),e.on("detailsChanged",o,!0)}function d(){r(!1,!0,n)}function u(){l(),n=e.options.vertical,e.options.disabled||"custom"===e.options.renderMode||(i="auto"===f(e.options.slides,"perView",null),e.on("detailsChanged",o),(t=e.slides).length&&d())}e.on("created",u),e.on("optionsChanged",u),e.on("beforeOptionsChanged",function(){l()}),e.on("updated",d),e.on("destroyed",l)}var b=function(e,t,n){try{var i,r,o,c;return r=x([(i={drag:!0,mode:"snap",renderMode:"precision",rubberband:!0,selector:".keen-slider__slide"},function(t){var n,r,o,a,c,l,u=d();function h(e){var n;A(t.container,"reverse","rtl"!==(n=t.container,window.getComputedStyle(n,null).getPropertyValue("direction"))||e?null:""),A(t.container,"v",t.options.vertical&&!e?"":null),A(t.container,"disabled",t.options.disabled&&!e?"":null)}function g(){x()&&b()}function x(){var e=null;if(a.forEach(function(t){t.matches&&(e=t.__media)}),e===n)return!1;n||t.emit("beforeOptionsChanged"),n=e;var i=e?o.breakpoints[e]:o;return t.options=p(p({},o),i),h(),j(),Q(),I(),!0}function w(){return t.options.trackConfig.length}function y(e){for(var A in n=!1,o=p(p({},i),e),u.purge(),r=t.size,a=[],o.breakpoints||[]){var s=window.matchMedia(A);s.__media=A,a.push(s),u.add(s,"change",g)}u.add(window,"orientationchange",E),u.add(window,"resize",k),x()}function v(e){t.animator.stop();var n=t.track.details;t.track.init(null!=e?e:n?n.abs:0)}function b(e){v(e),t.emit("optionsChanged")}function C(e,n){if(e)return y(e),void b(n);j(),Q();var i=w();I(),w()!==i?b(n):v(n),t.emit("updated")}function I(){var e=t.options.slides;if("function"==typeof e)return t.options.trackConfig=e(t.size,t.slides);for(var n=t.slides,i=n.length,r="number"==typeof e?e:f(e,"number",i,!0),o=[],a=f(e,"perView",1,!0),A=f(e,"spacing",0,!0)/t.size||0,s="auto"===a?A:A/a,c=f(e,"origin","auto"),l=0,d=0;d<r;d++){var u="auto"===a?function(e){var n=m(e);return(t.options.vertical?n.height:n.width)/t.size||1}(n[d]):1/a-A+s,h="center"===c?.5-u/2:"auto"===c?0:c;o.push({origin:h,size:u,spacing:A}),l+=u}if(l+=A*(r-1),"auto"===c&&!t.options.loop&&1!==a){var g=0;o.map(function(e){var t=l-g;return g+=e.size+A,t>=1||(e.origin=1-t-(l>1?0:1-l)),e})}t.options.trackConfig=o}function k(){j();var e=t.size;t.options.disabled||e===r||(r=e,C())}function E(){k(),setTimeout(k,500),setTimeout(k,2e3)}function j(){var e=m(t.container);t.size=(t.options.vertical?e.height:e.width)||1}function Q(){t.slides=s(t.options.selector,t.container)}t.container=(l=s(e,c||document)).length?l[0]:null,t.destroy=function(){u.purge(),t.emit("destroyed"),h(!0)},t.prev=function(){t.moveToIdx(t.track.details.abs-1,!0)},t.next=function(){t.moveToIdx(t.track.details.abs+1,!0)},t.update=C,y(t.options)}),v,y,w],n||[],!0),c={},o={emit:function(e){c[e]&&c[e].forEach(function(e){e(o)});var t=o.options&&o.options[e];t&&t(o)},moveToIdx:function(e,t,n){var i=o.track.idxToDist(e,t);if(i){var r=o.options.defaultAnimation;o.animator.start([{distance:i,duration:f(n||r,"duration",500),easing:f(n||r,"easing",function(e){return 1+--e*e*e*e*e})}])}},on:function(e,t,n){void 0===n&&(n=!1),c[e]||(c[e]=[]);var i=c[e].indexOf(t);i>-1?n&&delete c[e][i]:n||c[e].push(t)},options:t},function(){if(o.track=function(e){var t,n,i,r,o,A,s,c,l,d,m,p,w,y,v=1/0,b=[],C=null,I=0;function k(e){D(I+e)}function E(e){var t=j(I+e).abs;return B(t)===t?t:null}function j(e){var t=Math.floor(Math.abs(e/n)),i=g((e%n+n)%n),r=h(e),o=s.indexOf(x([],s,!0).reduce(function(e,t){return Math.abs(t-i)<Math.abs(e-i)?t:e})),a=o;return r<0&&0!==i&&t++,o===A&&(a=0,t+=r>0?1:-1),{abs:a+t*A*r,origin:o,rel:a}}function Q(e,t,n){if(t||!r.loop)return S(e,n);if(B(e)!==e)return null;var i,o=j(null!=n?n:I),a=o.abs,s=e-o.rel,c=a+s;i=S(c);var l=S(c-A*h(s));return(null!==l&&Math.abs(l)<Math.abs(i)||null===i)&&(i=l),g(i)}function S(e,t){if(null==t&&(t=g(I)),i=e,B(i)!==i||null===e)return null;e=Math.round(e);var i,r=j(t),o=r.abs,a=r.rel,c=r.origin,l=M(e),d=(t%n+n)%n,u=s[c],h=Math.floor((e-(o-a))/A)*n;return g(u-d-u+s[l]+h+(c===A?n:0))}function B(e){return u(e,l,d)}function M(e){return(e%A+A)%A}function D(t){n=t-I,b.push({distance:n,timestamp:a()}),b.length>6&&(b=b.slice(-6)),I=Math.round(1e6*t)/1e6;var n,i=_().abs;if(i!==C){var r=null!==C;C=i,r&&e.emit("slideChanged")}}function _(a){var s=a?null:function(){if(A){var e=r.loop,t=e?(I%n+n)%n:I,a=(e?I%n:I)-o[0][2],s=0-(a<0&&e?n-Math.abs(a):a),c=0,u=j(I),f=u.abs,g=u.rel,x=o[g][2],v=o.map(function(t,i){var o=s+c;(o<0-t[0]||o>1)&&(o+=(Math.abs(o)>n-1&&e?n:0)*h(-o));var a=i-g,l=h(a),d=a+f;e&&(-1===l&&o>x&&(d+=A),1===l&&o<x&&(d-=A),null!==m&&d<m&&(o+=n),null!==p&&d>p&&(o-=n));var u=o+t[0]+t[1],w=Math.max(o>=0&&u<=1?1:u<0||o>1?0:o<0?Math.min(1,(t[0]+o)/t[0]):(1-o)/t[0],0);return c+=t[0]+t[1],{abs:d,distance:r.rtl?-1*o+1-t[0]:o,portion:w,size:t[0]}});return g=M(f=B(f)),{abs:B(f),length:i,max:y,maxIdx:d,min:w,minIdx:l,position:I,progress:e?t/n:I/i,rel:g,slides:v}}}();return t.details=s,e.emit("detailsChanged"),s}return t={absToRel:M,add:k,details:null,distToIdx:E,idxToDist:Q,init:function(t){var a,u,h,x;if(function(){if(A=(o=((r=e.options).trackConfig||[]).map(function(e){return[f(e,"size",1),f(e,"spacing",0),f(e,"origin",0)]})).length){n=g(o.reduce(function(e,t){return e+t[0]+t[1]},0));var t,a=A-1;i=g(n+o[0][2]-o[a][0]-o[a][2]-o[a][1]),s=o.reduce(function(e,n){if(!e)return[0];var i=o[e.length-1],r=e[e.length-1]+(i[0]+i[2])+i[1];return r-=n[2],e[e.length-1]>r&&(r=e[e.length-1]),r=g(r),e.push(r),(!t||t<r)&&(c=e.length-1),t=r,e},null),0===i&&(c=0),s.push(n)}}(),!A)return _(!0);a=e.options.range,m=l=(u=e.options.loop)?f(u,"min",-1/0):0,p=d=u?f(u,"max",v):c,h=f(a,"min",null),x=f(a,"max",null),h&&(l=h),x&&(d=x),w=l===-1/0?l:e.track.idxToDist(l||0,!0,0),y=d===v?d:Q(d,!0,0),null===x&&(p=d),f(a,"align",!1)&&d!==v&&0===o[M(d)][2]&&(y-=1-o[M(d)][0],d=E(y)),w=g(w),y=g(y),Number(t)===t?k(S(B(t))):_()},to:D,velocity:function(){var e=a(),t=b.reduce(function(t,n){var i=n.distance,r=n.timestamp;return e-r>200||(h(i)!==h(t.distance)&&t.distance&&(t={distance:0,lastTimestamp:0,time:0}),t.time&&(t.distance+=i),t.lastTimestamp&&(t.time+=r-t.lastTimestamp),t.lastTimestamp=r),t},{distance:0,lastTimestamp:0,time:0});return t.distance/t.time||0}}}(o),o.animator=function(e){var t,n,i,r,o,a;function A(e){t.active=e}function s(e){t.targetIdx=e}function c(){window.cancelAnimationFrame(o),A(!1),s(null),a&&e.emit("animationStopped"),a=null}return t={active:!1,start:function(t){if(c(),e.track.details){var l=0,d=e.track.details.position;n=0,i=0,r=t.map(function(e){var t,n=d,r=null!==(t=e.earlyExit)&&void 0!==t?t:e.duration,o=e.easing,a=e.distance*o(r/e.duration)||0;d+=a;var A=i;return i+=r,l+=a,[n,e.distance,A,i,e.duration,o]}),s(e.track.distToIdx(l)),function t(){var c;c=function o(c){a||(a=c),A(!0);var l=c-a;l>i&&(l=i);var d=r[n];if(d[3]<l)return n++,o(c);var u=d[2],h=d[4],m=d[0],f=d[1]*(0,d[5])(0===h?1:(l-u)/h);if(f&&e.track.to(m+f),l<i)return t();a=null,A(!1),s(null),e.emit("animationEnded")},o=window.requestAnimationFrame(c)}(),e.emit("animationStarted")}},stop:c,targetIdx:null}}(o),r)for(var e=0;e<r.length;e++)(0,r[e])(o);o.track.init(o.options.initial||0),o.emit("created")}(),o}catch(l){console.error(l)}};t.E=function(e,t){var n,r=i.useRef(null),o=i.useRef(!1),a=i.useRef(e),A=i.useCallback(function(n){n?(a.current=e,r.current=new b(n,e,t),o.current=!1):(r.current&&r.current.destroy&&r.current.destroy(),r.current=null)},[]);return i.useEffect(function(){o.current?r.current&&r.current.update(a.current):o.current=!0},[(function e(t,n){if(t===n)return!0;var i=typeof t;if(i!==typeof n)return!1;if("object"!==i||null===t||null===n)return"function"===i&&t.toString()===n.toString();if(t.length!==n.length||Object.getOwnPropertyNames(t).length!==Object.getOwnPropertyNames(n).length)return!1;for(var r in t)if(!e(t[r],n[r]))return!1;return!0}((n=a).current,e)||(n.current=e),n.current)]),[A,r]}},6565:function(e,t,n){"use strict";n.d(t,{Z:function(){return m}});var i=n(2125),r=n(1664),o=n.n(r),a=n(282),A=n(3462),s=n(2325),c=n(6373),l=(0,i.ZP)(o()).attrs({rel:"noreferrer noopener"}).withConfig({displayName:"styled__StyledLink",componentId:"sc-wlua4m-0"})(["text-decoration:none;"]),d=i.ZP.a.attrs({rel:"noreferrer noopener"}).withConfig({displayName:"styled__TargettedLink",componentId:"sc-wlua4m-1"})(["text-decoration:none;"]),u=(0,i.ZP)(a.Z).withConfig({displayName:"styled__StyledButton",componentId:"sc-wlua4m-2"})(["font-family:",";background:",";color:",";&:hover{background:",";color:",";}@media (min-width:0px){width:100%;};@media (min-width:","){",";};"],c.Uo,s.ZA,s.Cj,s.ZA,s.Cj,A.rN,function(e){return e.width?"width: ".concat(e.width):"width: auto"}),h=n(5893),m=function(e){var t=e.type,n=e.label,i=e.width,r=e.href,o=void 0===r?"":r,a=e.target,A=e.onClick,s=function(){return(0,h.jsx)(u,{variant:"contained",size:"large",width:i,onClick:A,children:n})};return"link"===(void 0===t?"default":t)?"_self"!==(void 0===a?"_self":a)?(0,h.jsx)(d,{href:o,target:"_blank",children:s()}):(0,h.jsx)(l,{href:o,children:s()}):s()}},2770:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var i=n(2125),r=n(3462),o=n(2325),a=n(6373),A=i.ZP.h2.withConfig({displayName:"styled__Heading",componentId:"sc-3fsa4i-0"})(["font-family:",";color:",";text-align:center;margin:0;padding:0;@media (min-width:","){font-size:2.2rem;}@media (min-width:","){font-size:3.2rem;}"],a.RQ,o.ZA,r.Gh,r.rN),s=n(5893),c=function(e){var t=e.text;return(0,s.jsx)(A,{children:t})}},2443:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}}),n(7294);var i=n(2325),r=n(2125),o=n(3462),a=n(6373),A=r.ZP.div.withConfig({displayName:"styled__Container",componentId:"sc-sdg1iu-0"})(["font-family:",";width:100%;min-width:",";color:",";word-break:break-word;line-height:1.5em;text-align:",";margin:",";@media (min-width:","){font-size:",";}@media (min-width:","){font-size:",";}a{color:",";text-decoration:none;}"],a.Uo,function(e){return e.minWidth},function(e){return e.color},function(e){return e.textAlign},function(e){return e.margin},o.Gh,function(e){return e.fontSizeMobile},o.rN,function(e){return e.fontSizeDesktop},i.ZA),s=n(5893),c=function(e){var t=e.children,n=e.textAlign,r=e.minWidth,o=e.margin,a=e.color,c=void 0===a?"".concat(i.fC):a,l=e.fontSizeDesktop,d=e.fontSizeMobile;return(0,s.jsx)(A,{className:"paragraph",textAlign:void 0===n?"left":n,minWidth:r,margin:o,color:c,fontSizeDesktop:void 0===l?"1.25rem":l,fontSizeMobile:void 0===d?"1rem":d,children:t})}},692:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var i=n(2125),r=n(2823),o=i.ZP.img.withConfig({displayName:"styled__Image",componentId:"sc-1fq7fnk-0"})(["position:relative;width:100vw;object-fit:cover;max-height:",""],function(e){return e.maxHeight}),a=i.ZP.div.withConfig({displayName:"styled__Container",componentId:"sc-1fq7fnk-1"})(["filter:",";"],r.W),A=n(7294),s=function(){var e=(0,A.useState)({width:null,height:null}),t=e[0],n=e[1];return(0,A.useEffect)(function(){var e=function(){n({width:window.innerWidth,height:window.innerHeight})};return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}},[]),t},c=n(5893),l=function(e){var t=e.src,n=e.srcMobile,i=e.alt,r=e.maxHeight,A=e.mobileBreakpoint,l=void 0===A?null:A,d=s().width;return(0,c.jsx)(a,{children:(0,c.jsx)(o,{src:null!=l&&d&&d<=l&&n?n:t,alt:void 0===i?"":i,maxHeight:r})})}},4769:function(e,t,n){"use strict";function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=Array(t);n<t;n++)i[n]=e[n];return i}function r(e,t){if(e){if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(e,t)}}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n,i,r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var o=[],a=!0,A=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);a=!0);}catch(s){A=!0,i=s}finally{try{a||null==r.return||r.return()}finally{if(A)throw i}}return o}}(e,t)||r(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.r(t),n.d(t,{SlideshowImage:function(){return ea},__N_SSG:function(){return eo},default:function(){return eA}});var a=n(7294),A=n(2730);n(1595);var s=n(2125),c=n(3462),l=n(2325),d=n(2823),u="750px",h=s.ZP.div.attrs({className:"keen-slider"}).withConfig({displayName:"styled__KeenSlider",componentId:"sc-19p6r02-0"})(["width:100vw;max-height:",";min-width:",";filter:",";"],u,c.Pv,d.W),m=s.ZP.div.attrs({className:"keen-slider__slide"}).withConfig({displayName:"styled__Slide",componentId:"sc-19p6r02-1"})(["background-color:",";max-height:",";display:flex;justify-content:center;align-items:center;overflow:hidden;cursor:move;cursor:-moz-grab;cursor:-webkit-grab;cursor:grab;&:active{cursor:grabbing;cursor:-moz-grabbing;cursor:-webkit-grabbing;}"],l.M6,u),f=n(5893),g=function(e){var t=e.children,n=o((0,A.E)({loop:!0},[function(e){var t,n=!1,i=function(){clearTimeout(t)},r=function(){clearTimeout(t),n||(t=setTimeout(function(){e.next()},3e3))};e.on("created",function(){e.container.addEventListener("mouseover",function(){n=!0,i()}),e.container.addEventListener("mouseout",function(){n=!1,r()}),r()}),e.on("dragStarted",i),e.on("animationEnded",r),e.on("updated",r)}]),1)[0],i=a.Children.toArray(t);return(0,f.jsx)(h,{ref:n,children:i.map(function(e,t){return(0,f.jsx)(m,{children:e},"slideshow-".concat(t))})})},p=n(117),x=n(8260),w=n(6526),y=n(1794),v=n(403),b=n(7367),C=n(299),I=n(1749),k=n(3832),E=s.ZP.div.withConfig({displayName:"styled__PhotoContainer",componentId:"sc-179l9yy-0"})(["position:relative;display:flex;justify-content:center;align-items:center;flex-wrap:nowrap;height:550px;@media (min-width:","){display:none;}@media (min-width:959px){display:flex;height:400px;div{background-size:100% 100%;background-position:top center;}}"],c.Gh),j=s.ZP.div.withConfig({displayName:"styled__Photo",componentId:"sc-179l9yy-1"})(["background:",";background-size:cover;background-repeat:no-repeat;height:480px;width:350px;position:absolute;"],function(e){return"url(".concat(e.photo,")")}),Q=n(2443),S=n(2770),B=n(6565),M=n(4353),D=function(e){var t=e.paragraph1,n=e.paragraph2;return(0,f.jsxs)(I.Z,{container:!0,direction:"row",justifyContent:"center",alignItems:"center",style:{marginTop:30,marginBottom:50,maxWidth:"1000px"},children:[(0,f.jsx)(I.Z,{item:!0,md:6,xs:12,children:(0,f.jsxs)(k.Z,{children:[(0,f.jsx)(S.Z,{text:"Hello Beautiful!"}),(0,f.jsx)(Q.Z,{children:t}),(0,f.jsx)("br",{}),(0,f.jsx)(Q.Z,{children:n}),(0,f.jsx)("br",{}),(0,f.jsxs)(Q.Z,{textAlign:"center",children:[(0,f.jsx)(B.Z,{type:"link",label:"Explore our Services",href:"/treatments",width:"100%"}),"or",(0,f.jsx)(B.Z,{type:"link",label:"Book a Consultation",href:"/bookings",width:"100%"})]})]})}),(0,f.jsx)(I.Z,{item:!0,md:6,xs:12,children:(0,f.jsx)(E,{children:(0,f.jsx)(j,{photo:M.Z.src})})})]})},_=n(692);function P(e){return function(e){if(Array.isArray(e))return i(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||r(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var Z=s.ZP.div.attrs({className:"keen-slider"}).withConfig({displayName:"styled__SlideContainer",componentId:"sc-13x3mpm-0"})(["padding-top:20px;max-width:1000px;min-width:1000px;"]),T=s.ZP.div.attrs({className:"keen-slider__slide"}).withConfig({displayName:"styled__Slide",componentId:"sc-13x3mpm-1"})(["background:grey;display:flex;align-items:center;justify-content:center;font-size:50px;color:#fff;font-weight:500;height:240px;width:240px;min-height:240px;min-width:240px;max-height:240px;max-width:240px;"]),z=s.ZP.img.withConfig({displayName:"styled__Thumbnail",componentId:"sc-13x3mpm-2"})(["height:240px;width:240px;min-height:240px;min-width:240px;max-height:240px;max-width:240px;cursor:pointer;"]),F=s.ZP.div.withConfig({displayName:"styled__Dots",componentId:"sc-13x3mpm-3"})(["display:flex;padding:10px 0;justify-content:center;"]),N=s.ZP.button.withConfig({displayName:"styled__Dot",componentId:"sc-13x3mpm-4"})(["border:none;width:10px;height:10px;background:",";border-radius:50%;margin:0 5px;padding:5px;cursor:pointer;&:focus{outline:none;}"],function(e){return e.isActive?l.ZA:"#c5c5c5"}),H=s.ZP.a.attrs({rel:"noreferrer noopener"}).withConfig({displayName:"styled__TargettedLink",componentId:"sc-13x3mpm-5"})(["text-decoration:none;min-height:240px;min-width:240px;max-height:240px;max-width:240px;"]),L={src:"/_next/static/media/0.5654bd5c.jpg",height:1080,width:1080,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABgEBAAAAAAAAAAAAAAAAAAAABP/aAAwDAQACEAMQAAAAqAZP/8QAHRAAAgIBBQAAAAAAAAAAAAAAAQIDBBMABSExQv/aAAgBAQABPwCwm6JNLgllCG3AV6Ix+151/8QAFhEAAwAAAAAAAAAAAAAAAAAAAAFB/9oACAECAQE/AFT/xAAWEQADAAAAAAAAAAAAAAAAAAAAAUH/2gAIAQMBAT8AcP/Z",blurWidth:8,blurHeight:8},R={src:"/_next/static/media/1.772e9e7e.jpg",height:1080,width:1080,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABAEBAQAAAAAAAAAAAAAAAAAAAgP/2gAMAwEAAhADEAAAAJhI/wD/xAAZEAACAwEAAAAAAAAAAAAAAAABAgARImH/2gAIAQEAAT8Ayy3hSOz/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAECAQE/AH//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDAQE/AH//2Q==",blurWidth:8,blurHeight:8},U={src:"/_next/static/media/2.687344f1.jpg",height:1800,width:1440,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgABgMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABgEBAAAAAAAAAAAAAAAAAAAAAv/aAAwDAQACEAMQAAAArwF//8QAHRAAAQQCAwAAAAAAAAAAAAAAAQIDBBEABRIUcf/aAAgBAQABPwDVPzHps7sIqnneAAIAQFUn28//xAAXEQADAQAAAAAAAAAAAAAAAAAAAQIh/9oACAECAQE/AJ1H/8QAFhEAAwAAAAAAAAAAAAAAAAAAAAIx/9oACAEDAQE/AGp//9k=",blurWidth:6,blurHeight:8},G={src:"/_next/static/media/3.fe61f711.jpg",height:1080,width:1080,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABAEBAQAAAAAAAAAAAAAAAAAAAgP/2gAMAwEAAhADEAAAALBF/wD/xAAfEAACAQIHAAAAAAAAAAAAAAACERMAEgEDFCExUqH/2gAIAQEAAT8AHPDXzTjao7iw2UXC6P2v/8QAGBEAAgMAAAAAAAAAAAAAAAAAAAIRIXH/2gAIAQIBAT8AWp0//8QAGhEAAAcAAAAAAAAAAAAAAAAAAAECERIhQf/aAAgBAwEBPwBZvGsH/9k=",blurWidth:8,blurHeight:8},W={src:"/_next/static/media/4.f9a51906.jpg",height:1080,width:1080,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABgEBAAAAAAAAAAAAAAAAAAAABP/aAAwDAQACEAMQAAAArQdP/8QAHhAAAgIABwAAAAAAAAAAAAAAAQMCBAAFERIjQaL/2gAIAQEAAT8AsjMYMcVzYIG2kjbpLj7AB9Y//8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAgEBPwB//8QAFxEAAwEAAAAAAAAAAAAAAAAAAAEhQf/aAAgBAwEBPwDFD//Z",blurWidth:8,blurHeight:8},K={src:"/_next/static/media/5.c0e697ed.jpg",height:1800,width:1440,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgABgMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABQEBAQAAAAAAAAAAAAAAAAAAAQP/2gAMAwEAAhADEAAAAKgKf//EABoQAAIDAQEAAAAAAAAAAAAAAAEDAgQFABL/2gAIAQEAAT8Ay6mmiw+LV+q8ogrIiR3/xAAWEQEBAQAAAAAAAAAAAAAAAAABABH/2gAIAQIBAT8AAwv/xAAWEQADAAAAAAAAAAAAAAAAAAAAATH/2gAIAQMBAT8AdP/Z",blurWidth:6,blurHeight:8},Y=function(e){var t=e.content,n=(0,a.useState)(0),i=n[0],r=n[1],s=(0,a.useState)(!1),c=s[0],l=s[1],d=o((0,A.E)({initial:0,slideChanged:function(e){r(e.track.details.rel)},created:function(){l(!0)},loop:!0,mode:"free-snap",slides:{perView:4,spacing:15}}),2),u=d[0],h=d[1];return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("div",{className:"navigation-wrapper",children:(0,f.jsxs)(Z,{ref:u,children:[(0,f.jsx)(T,{children:(0,f.jsx)(H,{href:t[0].permalink,target:"_blank",children:(0,f.jsx)(z,{src:L.src,alt:""})})}),(0,f.jsx)(T,{children:(0,f.jsx)(H,{href:t[1].permalink,target:"_blank",children:(0,f.jsx)(z,{src:R.src,alt:""})})}),(0,f.jsx)(T,{children:(0,f.jsx)(H,{href:t[2].permalink,target:"_blank",children:(0,f.jsx)(z,{src:U.src,alt:""})})}),(0,f.jsx)(T,{children:(0,f.jsx)(H,{href:t[3].permalink,target:"_blank",children:(0,f.jsx)(z,{src:G.src,alt:""})})}),(0,f.jsx)(T,{children:(0,f.jsx)(H,{href:t[4].permalink,target:"_blank",children:(0,f.jsx)(z,{src:W.src,alt:""})})}),(0,f.jsx)(T,{children:(0,f.jsx)(H,{href:t[5].permalink,target:"_blank",children:(0,f.jsx)(z,{src:K.src,alt:""})})})]})}),c&&h.current&&(0,f.jsx)(F,{children:P(Array.from(Array(h.current.track.details.slides.length).keys())).map(function(e){return(0,f.jsx)(N,{onClick:function(){var t;null===(t=h.current)||void 0===t||t.moveToIdx(e)},isActive:i===e},e)})})]})},V=function(e){var t=e.instagramData;return(0,f.jsxs)(I.Z,{container:!0,direction:"column",justifyContent:"center",alignItems:"center",style:{marginTop:60,marginBottom:30,maxWidth:"1000px"},children:[(0,f.jsx)(S.Z,{text:"Social Media"}),(0,f.jsxs)(I.Z,{item:!0,xs:12,container:!0,justifyContent:"center",alignItems:"center",style:{marginTop:10,marginBottom:10},children:[(0,f.jsxs)(Q.Z,{textAlign:"center",children:["Like us on Facebook"," ",(0,f.jsx)("a",{href:"https://www.facebook.com/AntidoteCosmeticStudio",target:"_blank",rel:"noreferrer noopener",children:"@AntidoteCosmeticStudio"})]}),(0,f.jsxs)(Q.Z,{textAlign:"center",children:["Follow us on Instagram"," ",(0,f.jsx)("a",{href:"https://www.instagram.com/antidote.cosmeticstudio",target:"_blank",rel:"noreferrer noopener",children:"@antidote.cosmeticstudio"})]}),(0,f.jsx)(Y,{content:t})]})]})},O=n(6373),J=s.ZP.div.attrs({className:"keen-slider__slide"}).withConfig({displayName:"styled__Container",componentId:"sc-1gvxa6k-0"})(["display:flex;flex-direction:column;min-width:280px;max-width:280px;background:",";color:",";text-align:center;border-radius:0.8rem;cursor:pointer;"],l.Cj,l.ZA),X=s.ZP.div.withConfig({displayName:"styled__StarContainer",componentId:"sc-1gvxa6k-1"})(["margin-bottom:10px;"]),q=s.ZP.p.withConfig({displayName:"styled__Author",componentId:"sc-1gvxa6k-2"})(["margin-top:10px;font-weight:bold;font-family:",";font-size:1.5em;"],O.RQ),$=function(e){var t=e.author,n=e.comment,i=(0,a.useState)(!1),r=i[0],o=i[1],A=function(){o(!r)};return(0,f.jsx)(J,{onClick:A,children:(0,f.jsxs)("div",{style:{padding:"0.8rem"},children:[(0,f.jsx)(X,{children:"★★★★★"}),(0,f.jsxs)(Q.Z,{color:l.ZA,fontSizeDesktop:"1.2rem",fontSizeMobile:"1.2rem",children:[r?n:n.substring(0,200),(0,f.jsx)("strong",{children:r?"":"...see more"})]}),(0,f.jsx)(q,{children:t})]})})},ee=[{author:"Kimann Pham",comment:"\n      Attention to details with a smile\n      It’s definitely an experience going to Antidote that you are excited to return to. Sam made me feel comfortable and made the time to hear my needs and concerns of my wiser face expressions. I confidently felt safe in her hands and knew I would be getting the attention I needed for the visual end results. I love how every visit there is a follow up and she is always happy to hear from you. Her practice is set up nicely. I enjoyed laying on her bed and feeling the clean soft bed linen.\n      If you are interested in any of her services just reach out to her. So beautifully welcoming and friendly. Highly recommended.\n    "},{author:"Lara Rooney",comment:"\n      Not only do you get the results you want but also the customer support is second to none. Sam always take time to see how your doing after you  treatment, she remembers things about you making your session so personable. She is also a great hype girl on social media.\n      I low key want to be her best friend tbh.\n      Natural looking results making you feel and look refreshed.\n      Do not hesitate book now\n    "},{author:"Jess Helen",comment:"\n      Had an amazing experience and results with Sam.\n      Sam is very professional but also really lovely and down to earth, which helped me to feel relaxed and calm as this was my first time getting treatment like this.\n      I went to see her for Botox in my jaw to help relax tense jaw muscles from clenching in the hope of easing my tension headaches and migraines. I saw amazing results and my jaw not only feels much better which has helped reduce my headaches and migraines, but I also got great cosmetic results as my face and jaw appeared slimmer and more defined.\n      I also got Sam to treat my forehead lines and frown lines and my skin has never looked better! Super happy with my results and will definitely be returning in the future. Couldn't recommend Sam highly enough! You're in good hands if you come here!\n    "},{author:"Estella Quan",comment:"\n      Sam is extremely professional and made me feel comfortable, especially since it was my first time getting botox. She educated me about the product and checked up on me after 2 weeks to ensure that everything was settling in smoothly. I couldn’t be happier with the results of my baby botox treatment, will definitely be going back to Sam.\n    "},{author:"Tiana",comment:"\n      Antidote is the only place I will ever be going for my botox, after years of pain & discomfort in my jaw Sam walked me through what we could do & my journey began! The clinic is beautiful & clean & Sam's attention to detail should be noted. Would reccomend to anyone!\n    "},{author:"Ron Erazo",comment:"\n      Sam is amazing! My sister and I both had appointments for lip fillers, and I cannot recommend Sam enough.\n      She was patient, kind and gentle. it was an all round amazing experience and I left feeling so happy and confident. My lips look fresh and full, and it was such a painless and quick procedure!\n      As someone who usually has a very low pain tolerance and extreme stress around these sort of things, I was a little worried before attending my appointment but Samantha was so accommodating and helpful, and I did not experience any pain at all.\n      Alongside this, she is a ray of sunshine to be around.\n      I highly recommend going here!\n    "},{author:"Leah Ramos",comment:"\n      Sam has an exemplary skills and customer service. She will make you feel comfortable and relaxed. She works collaboratively with what the client wants to achieve but also giving an informed decision and education about a particular goal. She works in consultation with great doctors to ensure the safety of her clients. You will feel safe in her hands!\n      Sam spends good quality time with her clients and you wouldn’t feel rushed at all. The value for money is even greater and it definitely wouldn’t break the bank! \uD83D\uDE01\n      Sam even checks in for after care, which is an extra service that I have never experienced from other clinics.\n      Amazing experience with Sam and highly recommended.\n    "},{author:"Ruby Ramos",comment:"\n      I love the result of the cosmetic injectable procedure that I had with Sam. Its very natural and subtle. I feel that it refreshed my look.\n      Sam provided a very relaxing environment, very efficient with her skills. The appointment time allows you to thoroughly discuss the procedure, answer questions and discuss expectations. In the end i felt well informed and not rushed because you have all the time and attention to yourself. Great follow up emails and appointment set to make sure you are happy with the results. Highly recommended.\n    "},{author:"Lin Da",comment:"\n    I have permanently changed my I hector services after trusting Sam. Her results are beyond what I had hoped for. She is gentle, meticulous, scrupulously hygienic and so caring. She follows up each appointment to ensure you are satisfied. I am 100% happy and would recommend Sam. She is the best!\n    "}],et=s.ZP.div.attrs({className:"keen-slider"}).withConfig({displayName:"styled__ReviewContainer",componentId:"sc-yogt8v-0"})(["display:flex;align-items:flex-start;max-width:1000px;min-width:1000px;"]),en=s.ZP.div.withConfig({displayName:"styled__Dots",componentId:"sc-yogt8v-1"})(["display:flex;padding:10px 0;justify-content:center;"]),ei=s.ZP.button.withConfig({displayName:"styled__Dot",componentId:"sc-yogt8v-2"})(["border:none;width:10px;height:10px;background:",";border-radius:50%;margin:0 5px;padding:5px;cursor:pointer;&:focus{outline:none;}"],function(e){return e.isActive?l.ZA:"#c5c5c5"}),er=function(){var e=(0,a.useState)(0),t=e[0],n=e[1],i=(0,a.useState)(!1),r=i[0],s=i[1],c=o((0,A.E)({initial:0,slideChanged:function(e){n(e.track.details.rel)},created:function(){s(!0)},loop:!0,mode:"free-snap",slides:{perView:3,spacing:15}}),2),l=c[0],d=c[1];return(0,f.jsxs)(I.Z,{container:!0,direction:"column",justifyContent:"center",alignItems:"center",style:{marginTop:30,marginBottom:80,maxWidth:"1000px"},children:[(0,f.jsx)(S.Z,{text:"Testimonials"}),(0,f.jsx)(I.Z,{item:!0,xs:12,container:!0,justifyContent:"center",alignItems:"center",style:{marginTop:10,marginBottom:10},children:(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("div",{className:"navigation-wrapper",children:(0,f.jsx)(et,{ref:l,children:ee.map(function(e,t){return(0,f.jsx)($,{author:e.author,comment:e.comment},"review-".concat(t))})})}),r&&d.current&&(0,f.jsx)(en,{children:P(Array.from(Array(d.current.track.details.slides.length).keys())).map(function(e){return(0,f.jsx)(ei,{onClick:function(){var t;null===(t=d.current)||void 0===t||t.moveToIdx(e)},isActive:t===e},e)})})]})})]})},eo=!0,ea=s.ZP.img.withConfig({displayName:"pages__SlideshowImage",componentId:"sc-17bzv0s-0"})(["width:100vw;max-width:1920px;flex:none;"]),eA=function(e){var t=e.content;return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)(g,{children:[(0,f.jsx)(ea,{src:p.Z.src,alt:""}),(0,f.jsx)(ea,{src:x.Z.src,alt:""}),(0,f.jsx)(ea,{src:y.Z.src,alt:""}),(0,f.jsx)(ea,{src:w.Z.src,alt:""}),(0,f.jsx)(ea,{src:v.Z.src,alt:""})]}),(0,f.jsx)(D,{paragraph1:t.HOME_PARAGRAPH1,paragraph2:t.HOME_PARAGRAPH2}),(0,f.jsx)(_.Z,{src:b.Z.src,alt:"",maxHeight:"750px"}),(0,f.jsx)(er,{}),(0,f.jsx)(_.Z,{src:C.Z.src,alt:"",maxHeight:"750px"}),(0,f.jsx)(V,{instagramData:t.INSTAGRAM_DATA}),(0,f.jsx)("br",{})]})}},8312:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(4769)}])},1595:function(){}},function(e){e.O(0,[774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);