(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{2730:function(t,n,e){"use strict";var i=e(7294);function r(t){return Array.prototype.slice.call(t)}function A(t,n){var e=Math.floor(t);return e===n||e+1===n?t:n}function o(){return Date.now()}function a(t,n,e){if(n="data-keen-slider-"+n,null===e)return t.removeAttribute(n);t.setAttribute(n,e||"")}function s(t,n){return n=n||document,"function"==typeof t&&(t=t(n)),Array.isArray(t)?t:"string"==typeof t?r(n.querySelectorAll(t)):t instanceof HTMLElement?[t]:t instanceof NodeList?r(t):[]}function c(t){t.raw&&(t=t.raw),t.cancelable&&!t.defaultPrevented&&t.preventDefault()}function u(t){t.raw&&(t=t.raw),t.stopPropagation&&t.stopPropagation()}function d(){var t=[];return{add:function(n,e,i,r){n.addListener?n.addListener(i):n.addEventListener(e,i,r),t.push([n,e,i,r])},input:function(t,n,e,i){this.add(t,n,function(t){t.nativeEvent&&(t=t.nativeEvent);var n=t.changedTouches||[],i=t.targetTouches||[],r=t.detail&&t.detail.x?t.detail:null;return e({id:r?r.identifier?r.identifier:"i":i[0]?i[0]?i[0].identifier:"e":"d",idChanged:r?r.identifier?r.identifier:"i":n[0]?n[0]?n[0].identifier:"e":"d",raw:t,x:r&&r.x?r.x:i[0]?i[0].screenX:r?r.x:t.pageX,y:r&&r.y?r.y:i[0]?i[0].screenY:r?r.y:t.pageY})},i)},purge:function(){t.forEach(function(t){t[0].removeListener?t[0].removeListener(t[2]):t[0].removeEventListener(t[1],t[2],t[3])}),t=[]}}}function l(t,n,e){return Math.min(Math.max(t,n),e)}function f(t){return(t>0?1:0)-(t<0?1:0)||+t}function h(t){var n=t.getBoundingClientRect();return{height:A(n.height,t.offsetHeight),width:A(n.width,t.offsetWidth)}}function g(t,n,e,i){var r=t&&t[n];return null==r?e:i&&"function"==typeof r?r():r}function p(t){return Math.round(1e6*t)/1e6}var m=function(){return(m=Object.assign||function(t){for(var n,e=1,i=arguments.length;e<i;e++)for(var r in n=arguments[e])Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r]);return t}).apply(this,arguments)};function x(t,n,e){if(e||2==arguments.length)for(var i,r=0,A=n.length;r<A;r++)!i&&r in n||(i||(i=Array.prototype.slice.call(n,0,r)),i[r]=n[r]);return t.concat(i||Array.prototype.slice.call(n))}function v(t){var n,e,i,r,A,o,a;function s(t){return 1-Math.pow(1-t,3)}function c(t,n){void 0===n&&(n=1e3);var e=147e-9+(t=Math.abs(t))/n;return{dist:Math.pow(t,2)/e,dur:t/e}}function u(){var n=t.track.details;n&&(r=n.min,A=n.max,o=n.minIdx,a=n.maxIdx)}function d(){t.animator.stop()}t.on("updated",u),t.on("optionsChanged",u),t.on("created",u),t.on("dragStarted",function(){d(),n=e=t.track.details.abs}),t.on("dragEnded",function(){var u,h,g,p,m,x,v=t.options.mode;"snap"===v&&(u=t.track,g=(h=t.track.details).position,p=f(u.velocity()),(g>A||g<r)&&(p=0),m=n+p,0===h.slides[u.absToRel(m)].portion&&(m-=p),n!==e&&(m=e),f(u.idxToDist(m,!0))!==p&&(m+=p),m=l(m,o,a),x=u.idxToDist(m,!0),t.animator.start([{distance:x,duration:500,easing:function(t){return 1+--t*t*t*t*t}}])),"free"!==v&&"free-snap"!==v||function(){d();var n="free-snap"===t.options.mode,e=t.track,u=e.velocity();i=f(u);var h=t.track.details,g=[];if(u||!n){var p=c(u),m=p.dist,x=p.dur;if(x*=2,m*=i,n){var v=e.idxToDist(e.distToIdx(m),!0);v&&(m=v)}g.push({distance:m,duration:x,easing:s});var w=h.position,b=w+m;if(b<r||b>A){var y=b<r?r-w:A-w,C=0,E=u;if(f(y)===i){var Q=Math.min(Math.abs(y)/Math.abs(m),1),I=(1-Math.pow(1-Q,1/3))*x;g[0].earlyExit=I,E=u*(1-Q)}else g[0].earlyExit=0,C+=y;var k=c(E,100),j=k.dist*i;t.options.rubberband&&(g.push({distance:j,duration:2*k.dur,easing:s}),g.push({distance:-j+C,duration:500,easing:s}))}t.animator.start(g)}else t.moveToIdx(l(h.abs,o,a),!0,{duration:500,easing:function(t){return 1+--t*t*t*t*t}})}()}),t.on("dragged",function(){e=t.track.details.abs})}function w(t){var n,e,i,r,A,o,h,g,p,m,x,v,w,b,y,C,E,Q,I=d();function k(s){if(o&&g===s.id){var d=D(s);if(p){if(!M(s))return B(s);m=d,p=!1,t.emit("dragChecked")}if(C)return m=d;c(s);var w=function(n){if(E===-1/0&&Q===1/0)return n;var i=t.track.details,o=i.length,a=i.position,s=l(n,E-a,Q-a);if(0===o)return 0;if(!t.options.rubberband)return s;if(a<=Q&&a>=E||a<E&&e>0||a>Q&&e<0)return n;var c=Math.max(0,1-Math.abs((a<E?a-E:a-Q)/o*(r*o))/A*2);return c*c*n}(h(m-d)/r*i);e=f(w);var b=t.track.details.position;(b>E&&b<Q||b===E&&e>0||b===Q&&e<0)&&u(s),x+=w,!v&&Math.abs(x*r)>5&&(v=!0,a(n,"moves","")),t.track.add(w),m=d,t.emit("dragged")}}function j(n){!o&&t.track.details&&t.track.details.length&&(v=!1,x=0,o=!0,p=!0,g=n.id,M(n),m=D(n),t.emit("dragStarted"))}function B(e){o&&g===e.idChanged&&(a(n,"moves",null),o=!1,t.emit("dragEnded"))}function M(t){var n=_(),e=n?t.y:t.x,i=n?t.x:t.y,r=void 0!==w&&void 0!==b&&Math.abs(b-i)<=Math.abs(w-e);return w=e,b=i,r}function D(t){return _()?t.y:t.x}function _(){return t.options.vertical}function P(){r=t.size,A=_()?window.innerHeight:window.innerWidth;var n=t.track.details;n&&(E=n.min,Q=n.max)}function S(){if(I.purge(),t.options.drag&&!t.options.disabled){h="function"==typeof(r=t.options.dragSpeed||1)?r:function(t){return t*r},i=t.options.rtl?-1:1,P(),n=t.container,e="data-keen-slider-clickable",s("[".concat(e,"]:not([").concat(e,"=false])"),n).map(function(t){I.add(t,"mousedown",u),I.add(t,"touchstart",u)}),I.add(n,"dragstart",function(t){c(t)}),I.input(n,"ksDragStart",j),I.input(n,"ksDrag",k),I.input(n,"ksDragEnd",B),I.input(n,"mousedown",j),I.input(n,"mousemove",k),I.input(n,"mouseleave",B),I.input(n,"mouseup",B),I.input(n,"touchstart",j,{passive:!0}),I.input(n,"touchmove",k,{passive:!1}),I.input(n,"touchend",B),I.input(n,"touchcancel",B),I.add(window,"wheel",function(t){o&&c(t)});var e,r,A="data-keen-slider-scrollable";s("[".concat(A,"]:not([").concat(A,"=false])"),t.container).map(function(t){var n;I.input(t,"touchstart",function(t){n=D(t),C=!0,y=!0},{passive:!0}),I.input(t,"touchmove",function(e){var i=_(),r=i?t.scrollHeight-t.clientHeight:t.scrollWidth-t.clientWidth,A=n-D(e),o=i?t.scrollTop:t.scrollLeft,a=i&&"scroll"===t.style.overflowY||!i&&"scroll"===t.style.overflowX;if(n=D(e),(A<0&&o>0||A>0&&o<r)&&y&&a)return C=!0;y=!1,c(e),C=!1}),I.input(t,"touchend",function(){C=!1})})}}t.on("updated",P),t.on("optionsChanged",S),t.on("created",S),t.on("destroyed",I.purge)}function b(t){var n,e,i=null;function r(n,e,i){t.animator.active?o(n,e,i):requestAnimationFrame(function(){return o(n,e,i)})}function A(){r(!1,!1,e)}function o(e,r,A){var o=0,a=t.size,u=t.track.details;if(u&&n){var d=u.slides;n.forEach(function(t,n){if(e)!i&&r&&s(t,null,A),c(t,null,A);else{if(!d[n])return;var u=d[n].size*a;!i&&r&&s(t,u,A),c(t,d[n].distance*a-o,A),o+=u}})}}function a(n){return"performance"===t.options.renderMode?Math.round(n):n}function s(t,n,e){var i=e?"height":"width";null!==n&&(n=a(n)+"px"),t.style["min-"+i]=n,t.style["max-"+i]=n}function c(t,n,e){if(null!==n){n=a(n);var i=e?n:0;n="translate3d(".concat(e?0:n,"px, ").concat(i,"px, 0)")}t.style.transform=n,t.style["-webkit-transform"]=n}function u(){n&&(o(!0,!0,e),n=null),t.on("detailsChanged",A,!0)}function d(){r(!1,!0,e)}function l(){u(),e=t.options.vertical,t.options.disabled||"custom"===t.options.renderMode||(i="auto"===g(t.options.slides,"perView",null),t.on("detailsChanged",A),(n=t.slides).length&&d())}t.on("created",l),t.on("optionsChanged",l),t.on("beforeOptionsChanged",function(){u()}),t.on("updated",d),t.on("destroyed",u)}var y=function(t,n,e){try{var i,r,A,c;return r=x([(i={drag:!0,mode:"snap",renderMode:"precision",rubberband:!0,selector:".keen-slider__slide"},function(n){var e,r,A,o,c,u,l=d();function f(t){var e;a(n.container,"reverse","rtl"!==(e=n.container,window.getComputedStyle(e,null).getPropertyValue("direction"))||t?null:""),a(n.container,"v",n.options.vertical&&!t?"":null),a(n.container,"disabled",n.options.disabled&&!t?"":null)}function p(){x()&&y()}function x(){var t=null;if(o.forEach(function(n){n.matches&&(t=n.__media)}),t===e)return!1;e||n.emit("beforeOptionsChanged"),e=t;var i=t?A.breakpoints[t]:A;return n.options=m(m({},A),i),f(),k(),j(),E(),!0}function v(){return n.options.trackConfig.length}function w(t){for(var a in e=!1,A=m(m({},i),t),l.purge(),r=n.size,o=[],A.breakpoints||[]){var s=window.matchMedia(a);s.__media=a,o.push(s),l.add(s,"change",p)}l.add(window,"orientationchange",I),l.add(window,"resize",Q),x()}function b(t){n.animator.stop();var e=n.track.details;n.track.init(null!=t?t:e?e.abs:0)}function y(t){b(t),n.emit("optionsChanged")}function C(t,e){if(t)return w(t),void y(e);k(),j();var i=v();E(),v()!==i?y(e):b(e),n.emit("updated")}function E(){var t=n.options.slides;if("function"==typeof t)return n.options.trackConfig=t(n.size,n.slides);for(var e=n.slides,i=e.length,r="number"==typeof t?t:g(t,"number",i,!0),A=[],o=g(t,"perView",1,!0),a=g(t,"spacing",0,!0)/n.size||0,s="auto"===o?a:a/o,c=g(t,"origin","auto"),u=0,d=0;d<r;d++){var l="auto"===o?function(t){var e=h(t);return(n.options.vertical?e.height:e.width)/n.size||1}(e[d]):1/o-a+s,f="center"===c?.5-l/2:"auto"===c?0:c;A.push({origin:f,size:l,spacing:a}),u+=l}if(u+=a*(r-1),"auto"===c&&!n.options.loop&&1!==o){var p=0;A.map(function(t){var n=u-p;return p+=t.size+a,n>=1||(t.origin=1-n-(u>1?0:1-u)),t})}n.options.trackConfig=A}function Q(){k();var t=n.size;n.options.disabled||t===r||(r=t,C())}function I(){Q(),setTimeout(Q,500),setTimeout(Q,2e3)}function k(){var t=h(n.container);n.size=(n.options.vertical?t.height:t.width)||1}function j(){n.slides=s(n.options.selector,n.container)}n.container=(u=s(t,c||document)).length?u[0]:null,n.destroy=function(){l.purge(),n.emit("destroyed"),f(!0)},n.prev=function(){n.moveToIdx(n.track.details.abs-1,!0)},n.next=function(){n.moveToIdx(n.track.details.abs+1,!0)},n.update=C,w(n.options)}),b,w,v],e||[],!0),c={},A={emit:function(t){c[t]&&c[t].forEach(function(t){t(A)});var n=A.options&&A.options[t];n&&n(A)},moveToIdx:function(t,n,e){var i=A.track.idxToDist(t,n);if(i){var r=A.options.defaultAnimation;A.animator.start([{distance:i,duration:g(e||r,"duration",500),easing:g(e||r,"easing",function(t){return 1+--t*t*t*t*t})}])}},on:function(t,n,e){void 0===e&&(e=!1),c[t]||(c[t]=[]);var i=c[t].indexOf(n);i>-1?e&&delete c[t][i]:e||c[t].push(n)},options:n},function(){if(A.track=function(t){var n,e,i,r,A,a,s,c,u,d,h,m,v,w,b=1/0,y=[],C=null,E=0;function Q(t){_(E+t)}function I(t){var n=k(E+t).abs;return M(n)===n?n:null}function k(t){var n=Math.floor(Math.abs(t/e)),i=p((t%e+e)%e),r=f(t),A=s.indexOf(x([],s,!0).reduce(function(t,n){return Math.abs(n-i)<Math.abs(t-i)?n:t})),o=A;return r<0&&0!==i&&n++,A===a&&(o=0,n+=r>0?1:-1),{abs:o+n*a*r,origin:A,rel:o}}function j(t,n,e){if(n||!r.loop)return B(t,e);if(M(t)!==t)return null;var i,A=k(null!=e?e:E),o=A.abs,s=t-A.rel,c=o+s;i=B(c);var u=B(c-a*f(s));return(null!==u&&Math.abs(u)<Math.abs(i)||null===i)&&(i=u),p(i)}function B(t,n){if(null==n&&(n=p(E)),i=t,M(i)!==i||null===t)return null;t=Math.round(t);var i,r=k(n),A=r.abs,o=r.rel,c=r.origin,u=D(t),d=(n%e+e)%e,l=s[c],f=Math.floor((t-(A-o))/a)*e;return p(l-d-l+s[u]+f+(c===a?e:0))}function M(t){return l(t,u,d)}function D(t){return(t%a+a)%a}function _(n){e=n-E,y.push({distance:e,timestamp:o()}),y.length>6&&(y=y.slice(-6)),E=Math.round(1e6*n)/1e6;var e,i=P().abs;if(i!==C){var r=null!==C;C=i,r&&t.emit("slideChanged")}}function P(o){var s=o?null:function(){if(a){var t=r.loop,n=t?(E%e+e)%e:E,o=(t?E%e:E)-A[0][2],s=0-(o<0&&t?e-Math.abs(o):o),c=0,l=k(E),g=l.abs,p=l.rel,x=A[p][2],b=A.map(function(n,i){var A=s+c;(A<0-n[0]||A>1)&&(A+=(Math.abs(A)>e-1&&t?e:0)*f(-A));var o=i-p,u=f(o),d=o+g;t&&(-1===u&&A>x&&(d+=a),1===u&&A<x&&(d-=a),null!==h&&d<h&&(A+=e),null!==m&&d>m&&(A-=e));var l=A+n[0]+n[1],v=Math.max(A>=0&&l<=1?1:l<0||A>1?0:A<0?Math.min(1,(n[0]+A)/n[0]):(1-A)/n[0],0);return c+=n[0]+n[1],{abs:d,distance:r.rtl?-1*A+1-n[0]:A,portion:v,size:n[0]}});return p=D(g=M(g)),{abs:M(g),length:i,max:w,maxIdx:d,min:v,minIdx:u,position:E,progress:t?n/e:E/i,rel:p,slides:b}}}();return n.details=s,t.emit("detailsChanged"),s}return n={absToRel:D,add:Q,details:null,distToIdx:I,idxToDist:j,init:function(n){var o,l,f,x;if(function(){if(a=(A=((r=t.options).trackConfig||[]).map(function(t){return[g(t,"size",1),g(t,"spacing",0),g(t,"origin",0)]})).length){e=p(A.reduce(function(t,n){return t+n[0]+n[1]},0));var n,o=a-1;i=p(e+A[0][2]-A[o][0]-A[o][2]-A[o][1]),s=A.reduce(function(t,e){if(!t)return[0];var i=A[t.length-1],r=t[t.length-1]+(i[0]+i[2])+i[1];return r-=e[2],t[t.length-1]>r&&(r=t[t.length-1]),r=p(r),t.push(r),(!n||n<r)&&(c=t.length-1),n=r,t},null),0===i&&(c=0),s.push(e)}}(),!a)return P(!0);o=t.options.range,h=u=(l=t.options.loop)?g(l,"min",-1/0):0,m=d=l?g(l,"max",b):c,f=g(o,"min",null),x=g(o,"max",null),f&&(u=f),x&&(d=x),v=u===-1/0?u:t.track.idxToDist(u||0,!0,0),w=d===b?d:j(d,!0,0),null===x&&(m=d),g(o,"align",!1)&&d!==b&&0===A[D(d)][2]&&(w-=1-A[D(d)][0],d=I(w)),v=p(v),w=p(w),Number(n)===n?Q(B(M(n))):P()},to:_,velocity:function(){var t=o(),n=y.reduce(function(n,e){var i=e.distance,r=e.timestamp;return t-r>200||(f(i)!==f(n.distance)&&n.distance&&(n={distance:0,lastTimestamp:0,time:0}),n.time&&(n.distance+=i),n.lastTimestamp&&(n.time+=r-n.lastTimestamp),n.lastTimestamp=r),n},{distance:0,lastTimestamp:0,time:0});return n.distance/n.time||0}}}(A),A.animator=function(t){var n,e,i,r,A,o;function a(t){n.active=t}function s(t){n.targetIdx=t}function c(){window.cancelAnimationFrame(A),a(!1),s(null),o&&t.emit("animationStopped"),o=null}return n={active:!1,start:function(n){if(c(),t.track.details){var u=0,d=t.track.details.position;e=0,i=0,r=n.map(function(t){var n,e=d,r=null!==(n=t.earlyExit)&&void 0!==n?n:t.duration,A=t.easing,o=t.distance*A(r/t.duration)||0;d+=o;var a=i;return i+=r,u+=o,[e,t.distance,a,i,t.duration,A]}),s(t.track.distToIdx(u)),function n(){var c;c=function A(c){o||(o=c),a(!0);var u=c-o;u>i&&(u=i);var d=r[e];if(d[3]<u)return e++,A(c);var l=d[2],f=d[4],h=d[0],g=d[1]*(0,d[5])(0===f?1:(u-l)/f);if(g&&t.track.to(h+g),u<i)return n();o=null,a(!1),s(null),t.emit("animationEnded")},A=window.requestAnimationFrame(c)}(),t.emit("animationStarted")}},stop:c,targetIdx:null}}(A),r)for(var t=0;t<r.length;t++)(0,r[t])(A);A.track.init(A.options.initial||0),A.emit("created")}(),A}catch(u){console.error(u)}};n.E=function(t,n){var e,r=i.useRef(null),A=i.useRef(!1),o=i.useRef(t),a=i.useCallback(function(e){e?(o.current=t,r.current=new y(e,t,n),A.current=!1):(r.current&&r.current.destroy&&r.current.destroy(),r.current=null)},[]);return i.useEffect(function(){A.current?r.current&&r.current.update(o.current):A.current=!0},[(function t(n,e){if(n===e)return!0;var i=typeof n;if(i!==typeof e)return!1;if("object"!==i||null===n||null===e)return"function"===i&&n.toString()===e.toString();if(n.length!==e.length||Object.getOwnPropertyNames(n).length!==Object.getOwnPropertyNames(e).length)return!1;for(var r in n)if(!t(n[r],e[r]))return!1;return!0}((e=o).current,t)||(e.current=t),e.current)]),[a,r]}},6565:function(t,n,e){"use strict";e.d(n,{Z:function(){return h}});var i=e(2125),r=e(1664),A=e.n(r),o=e(282),a=e(3462),s=e(2325),c=e(6373),u=(0,i.ZP)(A()).attrs({rel:"noreferrer noopener"}).withConfig({displayName:"styled__StyledLink",componentId:"sc-wlua4m-0"})(["text-decoration:none;"]),d=i.ZP.a.attrs({rel:"noreferrer noopener"}).withConfig({displayName:"styled__TargettedLink",componentId:"sc-wlua4m-1"})(["text-decoration:none;"]),l=(0,i.ZP)(o.Z).withConfig({displayName:"styled__StyledButton",componentId:"sc-wlua4m-2"})(["font-family:",";background:",";color:",";&:hover{background:",";color:",";}@media (min-width:0px){width:100%;};@media (min-width:","){",";};"],c.Uo,s.ZA,s.Cj,s.ZA,s.Cj,a.rN,function(t){return t.width?"width: ".concat(t.width):"width: auto"}),f=e(5893),h=function(t){var n=t.type,e=t.label,i=t.width,r=t.href,A=void 0===r?"":r,o=t.target,a=t.onClick,s=function(){return(0,f.jsx)(l,{variant:"contained",size:"large",width:i,onClick:a,children:e})};return"link"===(void 0===n?"default":n)?"_self"!==(void 0===o?"_self":o)?(0,f.jsx)(d,{href:A,target:"_blank",children:s()}):(0,f.jsx)(u,{href:A,children:s()}):s()}},2770:function(t,n,e){"use strict";e.d(n,{Z:function(){return c}});var i=e(2125),r=e(3462),A=e(2325),o=e(6373),a=i.ZP.h2.withConfig({displayName:"styled__Heading",componentId:"sc-3fsa4i-0"})(["font-family:",";color:",";text-align:center;margin:0;padding:0;@media (min-width:","){font-size:2.2rem;}@media (min-width:","){font-size:3.2rem;}"],o.RQ,A.ZA,r.Gh,r.rN),s=e(5893),c=function(t){var n=t.text;return(0,s.jsx)(a,{children:n})}},2443:function(t,n,e){"use strict";e.d(n,{Z:function(){return c}}),e(7294);var i=e(2325),r=e(2125),A=e(3462),o=e(6373),a=r.ZP.div.withConfig({displayName:"styled__Container",componentId:"sc-sdg1iu-0"})(["font-family:",";width:100%;min-width:",";color:",";word-break:break-word;line-height:1.5em;text-align:",";margin:",";@media (min-width:","){font-size:",";}@media (min-width:","){font-size:",";}a{color:",";text-decoration:none;}"],o.Uo,function(t){return t.minWidth},function(t){return t.color},function(t){return t.textAlign},function(t){return t.margin},A.Gh,function(t){return t.fontSizeMobile},A.rN,function(t){return t.fontSizeDesktop},i.ZA),s=e(5893),c=function(t){var n=t.children,e=t.textAlign,r=t.minWidth,A=t.margin,o=t.color,c=void 0===o?"".concat(i.fC):o,u=t.fontSizeDesktop,d=t.fontSizeMobile;return(0,s.jsx)(a,{className:"paragraph",textAlign:void 0===e?"left":e,minWidth:r,margin:A,color:c,fontSizeDesktop:void 0===u?"1.25rem":u,fontSizeMobile:void 0===d?"1rem":d,children:n})}},692:function(t,n,e){"use strict";e.d(n,{Z:function(){return d}});var i=e(2125),r=e(3462),A=e(2823),o=i.ZP.img.withConfig({displayName:"styled__Image",componentId:"sc-1fq7fnk-0"})(["position:relative;width:100vw;max-width:",";object-fit:cover;max-height:",""],r.WL,function(t){return t.maxHeight}),a=i.ZP.div.withConfig({displayName:"styled__Container",componentId:"sc-1fq7fnk-1"})(["filter:",";"],A.W),s=e(7294),c=function(){var t=(0,s.useState)({width:null,height:null}),n=t[0],e=t[1];return(0,s.useEffect)(function(){var t=function(){e({width:window.innerWidth,height:window.innerHeight})};return window.addEventListener("resize",t),t(),function(){return window.removeEventListener("resize",t)}},[]),n},u=e(5893),d=function(t){var n=t.src,e=t.srcMobile,i=t.alt,r=t.maxHeight,A=t.mobileBreakpoint,s=void 0===A?null:A,d=c().width;return(0,u.jsx)(a,{children:(0,u.jsx)(o,{src:null!=s&&d&&d<=s&&e?e:n,alt:void 0===i?"":i,maxHeight:r})})}},2118:function(t,n,e){"use strict";function i(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,i=Array(n);e<n;e++)i[e]=t[e];return i}function r(t,n){if(t){if("string"==typeof t)return i(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);if("Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return i(t,n)}}function A(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){var e,i,r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var A=[],o=!0,a=!1;try{for(r=r.call(t);!(o=(e=r.next()).done)&&(A.push(e.value),!n||A.length!==n);o=!0);}catch(s){a=!0,i=s}finally{try{o||null==r.return||r.return()}finally{if(a)throw i}}return A}}(t,n)||r(t,n)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}e.r(n),e.d(n,{SlideshowImage:function(){return V},__N_SSG:function(){return Y},default:function(){return O}});var o=e(7294),a=e(2730);e(1595);var s=e(2125),c=e(3462),u=e(2325),d=e(2823),l="750px",f=s.ZP.div.attrs({className:"keen-slider"}).withConfig({displayName:"styled__KeenSlider",componentId:"sc-19p6r02-0"})(["width:100vw;max-height:",";min-width:",";filter:",";"],l,c.Pv,d.W),h=s.ZP.div.attrs({className:"keen-slider__slide"}).withConfig({displayName:"styled__Slide",componentId:"sc-19p6r02-1"})(["background-color:",";max-height:",";display:flex;justify-content:center;align-items:center;overflow:hidden;cursor:move;cursor:-moz-grab;cursor:-webkit-grab;cursor:grab;&:active{cursor:grabbing;cursor:-moz-grabbing;cursor:-webkit-grabbing;}"],u.M6,l),g=e(5893),p=function(t){var n=t.children,e=A((0,a.E)({loop:!0},[function(t){var n,e=!1,i=function(){clearTimeout(n)},r=function(){clearTimeout(n),e||(n=setTimeout(function(){t.next()},3e3))};t.on("created",function(){t.container.addEventListener("mouseover",function(){e=!0,i()}),t.container.addEventListener("mouseout",function(){e=!1,r()}),r()}),t.on("dragStarted",i),t.on("animationEnded",r),t.on("updated",r)}]),1)[0],i=o.Children.toArray(n);return(0,g.jsx)(f,{ref:e,children:i.map(function(t,n){return(0,g.jsx)(h,{children:t},"slideshow-".concat(n))})})},m=e(117),x=e(8260),v=e(6526),w=e(1794),b=e(403),y=e(7367),C=e(1749),E=e(3832),Q=s.ZP.div.withConfig({displayName:"styled__PhotoContainer",componentId:"sc-179l9yy-0"})(["position:relative;display:flex;justify-content:center;align-items:center;flex-wrap:nowrap;height:550px;@media (min-width:","){display:none;}@media (min-width:959px){display:flex;height:400px;div{background-size:100% 100%;background-position:top center;}}"],c.Gh),I=s.ZP.div.withConfig({displayName:"styled__Photo",componentId:"sc-179l9yy-1"})(["background:",";background-size:cover;background-repeat:no-repeat;height:480px;width:350px;position:absolute;"],function(t){return"url(".concat(t.photo,")")}),k=e(2443),j=e(2770),B=e(6565),M=e(4353),D=function(t){var n=t.paragraph1,e=t.paragraph2;return(0,g.jsxs)(C.Z,{container:!0,direction:"row",justifyContent:"center",alignItems:"center",style:{marginTop:30,marginBottom:50,maxWidth:"1000px"},children:[(0,g.jsx)(C.Z,{item:!0,md:6,xs:12,children:(0,g.jsxs)(E.Z,{children:[(0,g.jsx)(j.Z,{text:"Hello Beautiful!"}),(0,g.jsx)(k.Z,{children:n}),(0,g.jsx)("br",{}),(0,g.jsx)(k.Z,{children:e}),(0,g.jsx)("br",{}),(0,g.jsxs)(k.Z,{textAlign:"center",children:[(0,g.jsx)(B.Z,{type:"link",label:"Explore our Services",href:"/treatments",width:"100%"}),"or",(0,g.jsx)(B.Z,{type:"link",label:"Book a Consultation",href:"/bookings",width:"100%"})]})]})}),(0,g.jsx)(C.Z,{item:!0,md:6,xs:12,children:(0,g.jsx)(Q,{children:(0,g.jsx)(I,{photo:M.Z.src})})})]})},_=e(692),P=s.ZP.div.attrs({className:"keen-slider"}).withConfig({displayName:"styled__SlideContainer",componentId:"sc-13x3mpm-0"})(["padding-top:20px;max-width:1000px;min-width:1000px;"]),S=s.ZP.div.attrs({className:"keen-slider__slide"}).withConfig({displayName:"styled__Slide",componentId:"sc-13x3mpm-1"})(["background:grey;display:flex;align-items:center;justify-content:center;font-size:50px;color:#fff;font-weight:500;height:240px;width:240px;min-height:240px;min-width:240px;max-height:240px;max-width:240px;"]),T=s.ZP.img.withConfig({displayName:"styled__Thumbnail",componentId:"sc-13x3mpm-2"})(["height:240px;width:240px;min-height:240px;min-width:240px;max-height:240px;max-width:240px;cursor:pointer;"]),Z=s.ZP.div.withConfig({displayName:"styled__Dots",componentId:"sc-13x3mpm-3"})(["display:flex;padding:10px 0;justify-content:center;"]),L=s.ZP.button.withConfig({displayName:"styled__Dot",componentId:"sc-13x3mpm-4"})(["border:none;width:10px;height:10px;background:",";border-radius:50%;margin:0 5px;padding:5px;cursor:pointer;&:focus{outline:none;}"],function(t){return t.isActive?u.ZA:"#c5c5c5"}),z=s.ZP.a.attrs({rel:"noreferrer noopener"}).withConfig({displayName:"styled__TargettedLink",componentId:"sc-13x3mpm-5"})(["text-decoration:none;min-height:240px;min-width:240px;max-height:240px;max-width:240px;"]),F={src:"/_next/static/media/0.a9f94cad.jpg",height:1692,width:1440,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgABwMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABQEBAQAAAAAAAAAAAAAAAAAAAQP/2gAMAwEAAhADEAAAALom/wD/xAAcEAABAwUAAAAAAAAAAAAAAAACAQQVAAMkMYH/2gAIAQEAAT8Abys27E7mGgCQdTVf/8QAFREBAQAAAAAAAAAAAAAAAAAAAAH/2gAIAQIBAT8Aj//EABURAQEAAAAAAAAAAAAAAAAAAAAR/9oACAEDAQE/AI//2Q==",blurWidth:7,blurHeight:8},N={src:"/_next/static/media/1.96f09068.jpg",height:1800,width:1440,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgABgMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABQEBAQAAAAAAAAAAAAAAAAAAAQL/2gAMAwEAAhADEAAAAL4L/8QAHxAAAQMDBQAAAAAAAAAAAAAAAwECBAAFEgYRFDJi/9oACAEBAAE/ANUcw10AeIVWgbHUb9se+Xqv/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAECEf/aAAgBAgEBPwCpWn//xAAYEQACAwAAAAAAAAAAAAAAAAAAAgEhMf/aAAgBAwEBPwBWrIP/2Q==",blurWidth:6,blurHeight:8},U={src:"/_next/static/media/2.ca5a3367.jpg",height:1080,width:1080,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABwEBAAAAAAAAAAAAAAAAAAAAA//aAAwDAQACEAMQAAAAqwBf/8QAFxAAAwEAAAAAAAAAAAAAAAAAAAECIf/aAAgBAQABPwBxp//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Af//EABURAQEAAAAAAAAAAAAAAAAAAAAR/9oACAEDAQE/AK//2Q==",blurWidth:8,blurHeight:8},R={src:"/_next/static/media/3.96a913db.jpg",height:1080,width:1080,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAAAwEBAQAAAAAAAAAAAAAAAAAAAgP/2gAMAwEAAhADEAAAAKCL/8QAGhABAQEAAwEAAAAAAAAAAAAAAQIDABIxQv/aAAgBAQABPwB0zs2p2kXSQbnsAPgHzz//xAAZEQABBQAAAAAAAAAAAAAAAAAAAQIREnH/2gAIAQIBAT8AakW0/8QAGREAAgMBAAAAAAAAAAAAAAAAAQIAAxJh/9oACAEDAQE/ALGLY4on/9k=",blurWidth:8,blurHeight:8},H={src:"/_next/static/media/4.109321a5.jpg",height:1080,width:1080,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABAEBAQAAAAAAAAAAAAAAAAAAAgP/2gAMAwEAAhADEAAAAJhI/wD/xAAZEAEAAgMAAAAAAAAAAAAAAAABAAIREiL/2gAIAQEAAT8A5a5NRJ//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAECAQE/AH//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDAQE/AH//2Q==",blurWidth:8,blurHeight:8},G={src:"/_next/static/media/5.54018359.jpg",height:1799,width:1440,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgABgMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABgEBAAAAAAAAAAAAAAAAAAAAA//aAAwDAQACEAMQAAAApQaf/8QAGhABAAMAAwAAAAAAAAAAAAAAAQIDEQAEMf/aAAgBAQABPwCyuAsnr1BuA4mHmc//xAAWEQADAAAAAAAAAAAAAAAAAAAAARH/2gAIAQIBAT8AiP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Af//Z",blurWidth:6,blurHeight:8},W=function(t){var n,e=t.content,s=(0,o.useState)(0),c=s[0],u=s[1],d=(0,o.useState)(!1),l=d[0],f=d[1],h=A((0,a.E)({initial:0,slideChanged:function(t){u(t.track.details.rel)},created:function(){f(!0)},loop:!0,mode:"free-snap",slides:{perView:4,spacing:15}}),2),p=h[0],m=h[1];return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)("div",{className:"navigation-wrapper",children:(0,g.jsxs)(P,{ref:p,children:[(0,g.jsx)(S,{children:(0,g.jsx)(z,{href:e[0].permalink,target:"_blank",children:(0,g.jsx)(T,{src:F.src,alt:""})})}),(0,g.jsx)(S,{children:(0,g.jsx)(z,{href:e[1].permalink,target:"_blank",children:(0,g.jsx)(T,{src:N.src,alt:""})})}),(0,g.jsx)(S,{children:(0,g.jsx)(z,{href:e[2].permalink,target:"_blank",children:(0,g.jsx)(T,{src:U.src,alt:""})})}),(0,g.jsx)(S,{children:(0,g.jsx)(z,{href:e[3].permalink,target:"_blank",children:(0,g.jsx)(T,{src:R.src,alt:""})})}),(0,g.jsx)(S,{children:(0,g.jsx)(z,{href:e[4].permalink,target:"_blank",children:(0,g.jsx)(T,{src:H.src,alt:""})})}),(0,g.jsx)(S,{children:(0,g.jsx)(z,{href:e[5].permalink,target:"_blank",children:(0,g.jsx)(T,{src:G.src,alt:""})})})]})}),l&&m.current&&(0,g.jsx)(Z,{children:((function(t){if(Array.isArray(t))return i(t)})(n=Array.from(Array(m.current.track.details.slides.length).keys()))||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(n)||r(n)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map(function(t){return(0,g.jsx)(L,{onClick:function(){var n;null===(n=m.current)||void 0===n||n.moveToIdx(t)},isActive:c===t},t)})})]})},K=function(t){var n=t.instagramData;return(0,g.jsxs)(C.Z,{container:!0,direction:"column",justifyContent:"center",alignItems:"center",style:{marginTop:60,marginBottom:30,maxWidth:"1000px"},children:[(0,g.jsx)(j.Z,{text:"Social Media"}),(0,g.jsxs)(C.Z,{item:!0,xs:12,container:!0,justifyContent:"center",alignItems:"center",style:{marginTop:10,marginBottom:10},children:[(0,g.jsxs)(k.Z,{textAlign:"center",children:["Like us on Facebook"," ",(0,g.jsx)("a",{href:"https://www.facebook.com/AntidoteCosmeticStudio",target:"_blank",rel:"noreferrer noopener",children:"@AntidoteCosmeticStudio"})]}),(0,g.jsxs)(k.Z,{textAlign:"center",children:["Follow us on Instagram"," ",(0,g.jsx)("a",{href:"https://www.instagram.com/antidote.cosmeticstudio",target:"_blank",rel:"noreferrer noopener",children:"@antidote.cosmeticstudio"})]}),(0,g.jsx)(W,{content:n})]})]})},Y=!0,V=s.ZP.img.withConfig({displayName:"pages__SlideshowImage",componentId:"sc-17bzv0s-0"})(["width:100vw;max-width:1920px;flex:none;"]),O=function(t){var n=t.content;return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)(p,{children:[(0,g.jsx)(V,{src:m.Z.src,alt:""}),(0,g.jsx)(V,{src:x.Z.src,alt:""}),(0,g.jsx)(V,{src:w.Z.src,alt:""}),(0,g.jsx)(V,{src:v.Z.src,alt:""}),(0,g.jsx)(V,{src:b.Z.src,alt:""})]}),(0,g.jsx)(D,{paragraph1:n.HOME_PARAGRAPH1,paragraph2:n.HOME_PARAGRAPH2}),(0,g.jsx)(_.Z,{src:y.Z.src,alt:"",maxHeight:"750px"}),(0,g.jsx)(K,{instagramData:n.INSTAGRAM_DATA}),(0,g.jsx)("br",{})]})}},8312:function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return e(2118)}])},1595:function(){}},function(t){t.O(0,[774,888,179],function(){return t(t.s=8312)}),_N_E=t.O()}]);