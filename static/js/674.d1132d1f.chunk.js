"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[674],{126:function(e,n,r){var t=r(689),a=r(87),u=r(184);n.Z=function(e){var n=e.movies,r=(0,t.TH)();return(0,u.jsx)("ul",{children:n.map((function(e){return(0,u.jsx)("li",{children:(0,u.jsx)(a.rU,{to:"/movies/".concat(e.id),state:{from:r},children:e.name?e.name:e.title})},e.id)}))})}},674:function(e,n,r){r.r(n),r.d(n,{default:function(){return l}});var t=r(861),a=r(439),u=r(757),c=r.n(u),s=r(791),i="HomePage_Title__x++dF",o=r(390),f=r(673),p=r(126),v=r(184);var l=function(){var e=(0,s.useState)(null),n=(0,a.Z)(e,2),r=n[0],u=n[1],l=(0,s.useState)(!1),d=(0,a.Z)(l,2),h=d[0],m=d[1],g=(0,s.useState)(null),x=(0,a.Z)(g,2),w=x[0],b=x[1];return(0,s.useEffect)((function(){var e=function(){var e=(0,t.Z)(c().mark((function e(){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return m(!0),e.prev=1,e.next=4,o.Df();case 4:n=e.sent,u(n.results),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),b(e.t0.message);case 11:return e.prev=11,m(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,8,11,14]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,v.jsxs)(v.Fragment,{children:[w&&(0,v.jsx)("p",{children:"Server request failed. Try again."}),(0,v.jsx)("h2",{className:i,children:"Trending today"}),r&&(0,v.jsx)(p.Z,{movies:r}),h&&(0,v.jsx)(f.a,{})]})}},390:function(e,n,r){r.d(n,{Df:function(){return s},Oy:function(){return p},V0:function(){return i},dB:function(){return o},l$:function(){return f}});var t=r(861),a=r(757),u=r.n(a),c=r(263).Z.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"a3d945b8f328c6538b57f110a6218b6e"}}),s=function(){var e=(0,t.Z)(u().mark((function e(){var n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("trending/all/day");case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=(0,t.Z)(u().mark((function e(n){var r,t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("search/movie",{params:{query:n,language:"en-US",page:1,include_adult:!1}});case 2:return r=e.sent,t=r.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),o=function(){var e=(0,t.Z)(u().mark((function e(n){var r,t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("movie/".concat(n),{params:{language:"en-US"}});case 2:return r=e.sent,t=r.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),f=function(){var e=(0,t.Z)(u().mark((function e(n){var r,t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("movie/".concat(n,"/credits"),{params:{language:"en-US"}});case 2:return r=e.sent,t=r.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,t.Z)(u().mark((function e(n){var r,t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("movie/".concat(n,"/reviews"),{params:{language:"en-US",page:1}});case 2:return r=e.sent,t=r.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=674.d1132d1f.chunk.js.map