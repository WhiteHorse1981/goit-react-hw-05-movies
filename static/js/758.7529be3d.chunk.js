"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[758],{2758:function(e,n,r){r.r(n),r.d(n,{default:function(){return B}});var t=r(5861),a=r(9439),i=r(7757),s=r.n(i),c=r(7689),o=r(2791),u=r(4390),l=r(6673),v=r(1087),d="OneMovie_BoxMovie__5LXW1",f="OneMovie_MovieImg__JVoUS",p="OneMovie_NameMovie__s0zSP",h="OneMovie_VoteMovie__s8SrC",m="OneMovie_OverviewMovie__HBkBv",_="OneMovie_GenresMovie__WAJfF",x="OneMovie_Information__S3xG8",g="OneMovie_ListInformationMovie__n+0j7",j="OneMovie_SectionList__DU673",w="OneMovie_ListAdditional__CcC1l",M="OneMovie_LinkAdditional__FK6ed",O="OneMovie_LinkAdditionalActive__N61mD",k="OneMovie_BoxList__2mrzn",N=r(5984),S=r(184),b=function(e){var n=e.movie,r=(0,c.TH)(),t=n.poster_path,a=n.title,i=n.overview,s=n.genres,o=n.release_date,u=n.first_air_date,l=n.name,b=n.vote_average,y=new Date(o||u),U=Math.round(10*b),B=y.getFullYear(),L=a||l,Z=t?"https://image.tmdb.org/t/p/w500".concat(t):"https://nuft.edu.ua/assets/images/people/no-image.jpg";return(0,S.jsxs)("section",{className:j,children:[(0,S.jsxs)("div",{className:d,children:[(0,S.jsx)("div",{children:(0,S.jsx)("img",{src:Z,alt:L,className:f})}),(0,S.jsx)("div",{className:k,children:(0,S.jsxs)("ul",{className:g,children:[(0,S.jsxs)("li",{className:p,children:[(0,S.jsx)("h2",{children:L}),(0,S.jsxs)("p",{children:["( ",B," )"]})]}),(0,S.jsxs)("li",{className:h,children:[(0,S.jsx)("h3",{children:"User Score: "}),(0,S.jsxs)("p",{children:[U,"%"]})]}),(0,S.jsxs)("li",{className:m,children:[(0,S.jsx)("h3",{children:"Overview"}),(0,S.jsx)("p",{children:i})]}),(0,S.jsxs)("li",{className:_,children:[(0,S.jsx)("h3",{children:"Genres"}),(0,S.jsx)("p",{children:s.map((function(e){return(0,S.jsx)("span",{children:null===e||void 0===e?void 0:e.name},(0,N.x0)())}))})]})]})})]}),(0,S.jsx)("hr",{}),(0,S.jsx)("p",{className:x,children:" Additional information"}),(0,S.jsxs)("ul",{className:w,children:[(0,S.jsx)("li",{children:(0,S.jsx)(v.OL,{className:function(e){return e.isActive?O:M},state:{from:r.state.from},to:"cast",children:"Cast"})}),(0,S.jsx)("li",{children:(0,S.jsx)(v.OL,{className:function(e){return e.isActive?O:M},state:{from:r.state.from},to:"reviews",children:"Reviews"})}),(0,S.jsx)("li",{children:(0,S.jsx)(v.OL,{className:function(e){return e.isActive?O:M},state:{from:r.state.from},to:"video",children:"Video"})})]}),(0,S.jsx)(c.j3,{})]})},y="GoBack_BtnGoBack__fHaxB";var U=function(){var e,n,r=(0,c.TH)();return(0,S.jsx)(v.rU,{className:y,to:null!==(e=null===(n=r.state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/",children:"GoBack"})};var B=function(){var e=(0,o.useState)(null),n=(0,a.Z)(e,2),r=n[0],i=n[1],v=(0,o.useState)(!1),d=(0,a.Z)(v,2),f=d[0],p=d[1],h=(0,o.useState)(null),m=(0,a.Z)(h,2),_=m[0],x=m[1],g=(0,c.UO)().movieId;return(0,o.useEffect)((function(){if(g){var e=function(){var e=(0,t.Z)(s().mark((function e(){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,p(!0),e.next=4,u.dB(g);case 4:n=e.sent,i(n),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),x(e.t0.message);case 11:return e.prev=11,p(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})));return function(){return e.apply(this,arguments)}}();e()}}),[g]),(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(U,{}),_&&(0,S.jsx)("p",{children:"Server request failed. Try again."}),null!==r&&(0,S.jsx)(b,{movie:r})||(0,S.jsx)("p",{children:"Unfortunately there is no information about this film."}),f&&(0,S.jsx)(l.a,{})]})}},4390:function(e,n,r){r.d(n,{Df:function(){return c},H:function(){return d},Oy:function(){return v},V0:function(){return o},dB:function(){return u},l$:function(){return l}});var t=r(5861),a=r(7757),i=r.n(a),s=r(3263).Z.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"a3d945b8f328c6538b57f110a6218b6e"}}),c=function(){var e=(0,t.Z)(i().mark((function e(){var n,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("trending/all/day");case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,t.Z)(i().mark((function e(n){var r,t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("search/movie",{params:{query:n,language:"en-US",page:1,include_adult:!1}});case 2:return r=e.sent,t=r.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),u=function(){var e=(0,t.Z)(i().mark((function e(n){var r,t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("movie/".concat(n),{params:{language:"en-US"}});case 2:return r=e.sent,t=r.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=(0,t.Z)(i().mark((function e(n){var r,t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("movie/".concat(n,"/credits"),{params:{language:"en-US"}});case 2:return r=e.sent,t=r.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),v=function(){var e=(0,t.Z)(i().mark((function e(n){var r,t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("movie/".concat(n,"/reviews"),{params:{language:"en-US",page:1}});case 2:return r=e.sent,t=r.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),d=function(){var e=(0,t.Z)(i().mark((function e(n){var r,t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("movie/".concat(n,"/videos"),{params:{language:"en-US",page:1}});case 2:return r=e.sent,t=r.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},5984:function(e,n,r){r.d(n,{x0:function(){return t}});var t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(e)).reduce((function(e,n){return e+=(n&=63)<36?n.toString(36):n<62?(n-26).toString(36).toUpperCase():n>62?"-":"_"}),"")}}}]);
//# sourceMappingURL=758.7529be3d.chunk.js.map