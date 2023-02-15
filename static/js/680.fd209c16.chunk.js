"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[680],{1510:function(e,n,t){t.d(n,{Z:function(){return v}});var r=t(1087),a=t(7689),u="MovieList_Title__T5U9i",s="MovieList_ListStyle__qnSDe",c="MovieList_ListItem__0Tdm7",i="MovieList_ListItemLink__+kzcJ",o="MovieList_BoxList__Dcx8-",f=t(3479),p=t(184);var v=function(e){var n=e.movies,t=(0,a.TH)();return(0,p.jsxs)("main",{className:o,children:[(0,p.jsx)("h2",{className:u,children:"Trending today"}),(0,p.jsx)("ul",{className:s,children:n.map((function(e){return(0,p.jsx)("li",{className:c,children:(0,p.jsxs)(r.rU,{className:i,to:"/movies/".concat(e.id),state:{from:t},children:[(0,p.jsx)(f.$In,{}),e.name?e.name:e.title]})},e.id)}))})]})}},680:function(e,n,t){t.r(n);var r=t(5861),a=t(9439),u=t(7757),s=t.n(u),c=t(2791),i=t(4390),o=t(6673),f=t(1510),p=t(184);n.default=function(){var e=(0,c.useState)(null),n=(0,a.Z)(e,2),t=n[0],u=n[1],v=(0,c.useState)(!1),l=(0,a.Z)(v,2),m=l[0],d=l[1],h=(0,c.useState)(null),g=(0,a.Z)(h,2),x=g[0],_=g[1];return(0,c.useEffect)((function(){var e=function(){var e=(0,r.Z)(s().mark((function e(){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d(!0),e.prev=1,e.next=4,i.Df();case 4:n=e.sent,u(n.results),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),_(e.t0.message);case 11:return e.prev=11,d(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,8,11,14]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,p.jsxs)(p.Fragment,{children:[x&&(0,p.jsx)("p",{children:"Server request failed. Try again."}),t&&(0,p.jsx)(f.Z,{movies:t}),m&&(0,p.jsx)(o.a,{})]})}},4390:function(e,n,t){t.d(n,{Df:function(){return c},H:function(){return v},Oy:function(){return p},V0:function(){return i},dB:function(){return o},l$:function(){return f}});var r=t(5861),a=t(7757),u=t.n(a),s=t(3263).Z.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"a3d945b8f328c6538b57f110a6218b6e"}}),c=function(){var e=(0,r.Z)(u().mark((function e(){var n,t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("trending/all/day");case 2:return n=e.sent,t=n.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=(0,r.Z)(u().mark((function e(n){var t,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("search/movie",{params:{query:n,language:"en-US",page:1,include_adult:!1}});case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(u().mark((function e(n){var t,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("movie/".concat(n),{params:{language:"en-US"}});case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(u().mark((function e(n){var t,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("movie/".concat(n,"/credits"),{params:{language:"en-US"}});case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(u().mark((function e(n){var t,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("movie/".concat(n,"/reviews"),{params:{language:"en-US",page:1}});case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(u().mark((function e(n){var t,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("movie/".concat(n,"/videos"),{params:{language:"en-US",page:1}});case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=680.fd209c16.chunk.js.map