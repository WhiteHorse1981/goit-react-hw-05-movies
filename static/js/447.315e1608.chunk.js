"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[447],{5447:function(e,r,t){t.r(r),t.d(r,{default:function(){return d}});var n=t(5861),a=t(9439),u=t(7757),c=t.n(u),i=t(2791),s=t(7689),o="Video_VideoList__AEYX0",p=t(4390),f=t(6673),l=t(5984),v=t(184);var d=function(){var e=(0,i.useState)(null),r=(0,a.Z)(e,2),t=r[0],u=r[1],d=(0,i.useState)(null),h=(0,a.Z)(d,2),m=(h[0],h[1]),g=(0,s.UO)().movieId;return(0,i.useEffect)((function(){if(g){var e=function(){var e=(0,n.Z)(c().mark((function e(){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.H(g);case 3:r=e.sent,u(r.results),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),m(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}}),[g]),t?(0,v.jsx)(v.Fragment,{children:(0,v.jsx)("ul",{className:o,children:t.length>0?t.map((function(e){var r=e.key,t=e.name,n="https://www.youtube.com/embed/".concat(r);return(0,v.jsx)("li",{children:(0,v.jsx)("iframe",{width:"300",height:"200",src:n,title:t,allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0})},(0,l.x0)())})):(0,v.jsx)("p",{children:"Unfortunately there is no trailer for this movie."})})}):(0,v.jsx)(f.a,{})}},4390:function(e,r,t){t.d(r,{Df:function(){return i},H:function(){return l},Oy:function(){return f},V0:function(){return s},dB:function(){return o},l$:function(){return p}});var n=t(5861),a=t(7757),u=t.n(a),c=t(3263).Z.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"a3d945b8f328c6538b57f110a6218b6e"}}),i=function(){var e=(0,n.Z)(u().mark((function e(){var r,t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("trending/all/day");case 2:return r=e.sent,t=r.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),s=function(){var e=(0,n.Z)(u().mark((function e(r){var t,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("search/movie",{params:{query:r,language:"en-US",page:1,include_adult:!1}});case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(u().mark((function e(r){var t,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("movie/".concat(r),{params:{language:"en-US"}});case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(u().mark((function e(r){var t,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("movie/".concat(r,"/credits"),{params:{language:"en-US"}});case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(u().mark((function e(r){var t,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("movie/".concat(r,"/reviews"),{params:{language:"en-US",page:1}});case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(u().mark((function e(r){var t,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("movie/".concat(r,"/videos"),{params:{language:"en-US",page:1}});case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()},5984:function(e,r,t){t.d(r,{x0:function(){return n}});var n=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(e)).reduce((function(e,r){return e+=(r&=63)<36?r.toString(36):r<62?(r-26).toString(36).toUpperCase():r>62?"-":"_"}),"")}}}]);
//# sourceMappingURL=447.315e1608.chunk.js.map