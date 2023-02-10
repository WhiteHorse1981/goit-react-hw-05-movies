"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[758],{758:function(e,n,r){r.r(n),r.d(n,{default:function(){return U}});var t=r(861),a=r(439),s=r(757),i=r.n(s),c=r(689),o=r(791),u=r(390),l=r(673),v=r(87),d="OneMovie_BoxMovie__5LXW1",f="OneMovie_MovieImg__JVoUS",p="OneMovie_NameMovie__s0zSP",h="OneMovie_VoteMovie__s8SrC",m="OneMovie_OverviewMovie__HBkBv",_="OneMovie_GenresMovie__WAJfF",x="OneMovie_Information__S3xG8",j="OneMovie_ListInformationMovie__n+0j7",g="OneMovie_SectionList__DU673",w="OneMovie_ListAdditional__CcC1l",M="OneMovie_LinkAdditional__FK6ed",O="OneMovie_BoxList__2mrzn",k=r(984),S=r(184),b=function(e){var n=e.movie,r=(0,c.TH)(),t=n.poster_path,a=n.title,s=n.overview,i=n.genres,o=n.release_date,u=n.first_air_date,l=n.name,b=n.vote_average,N=new Date(o||u),y=Math.round(10*b),U=N.getFullYear(),B=a||l,Z=t?"https://image.tmdb.org/t/p/w500".concat(t):"https://nuft.edu.ua/assets/images/people/no-image.jpg";return(0,S.jsxs)("section",{className:g,children:[(0,S.jsxs)("div",{className:d,children:[(0,S.jsx)("div",{children:(0,S.jsx)("img",{src:Z,alt:B,className:f})}),(0,S.jsx)("div",{className:O,children:(0,S.jsxs)("ul",{className:j,children:[(0,S.jsxs)("li",{className:p,children:[(0,S.jsx)("h2",{children:B}),(0,S.jsxs)("p",{children:["( ",U," )"]})]}),(0,S.jsxs)("li",{className:h,children:[(0,S.jsx)("h3",{children:"User Score: "}),(0,S.jsxs)("p",{children:[y,"%"]})]}),(0,S.jsxs)("li",{className:m,children:[(0,S.jsx)("h3",{children:"Overview"}),(0,S.jsx)("p",{children:s})]}),(0,S.jsxs)("li",{className:_,children:[(0,S.jsx)("h3",{children:"Genres"}),(0,S.jsx)("p",{children:i.map((function(e){return(0,S.jsx)("span",{children:null===e||void 0===e?void 0:e.name},(0,k.x0)())}))})]})]})})]}),(0,S.jsx)("hr",{}),(0,S.jsx)("p",{className:x,children:" Additional information"}),(0,S.jsxs)("ul",{className:w,children:[(0,S.jsx)("li",{children:(0,S.jsx)(v.OL,{className:M,state:{from:r.state.from},to:"cast",children:"Cast"})}),(0,S.jsx)("li",{children:(0,S.jsx)(v.OL,{className:M,state:{from:r.state.from},to:"reviews",children:"Reviews"})})]}),(0,S.jsx)(c.j3,{})]})},N="GoBack_BtnGoBack__fHaxB";var y=function(){var e,n,r=(0,c.TH)();return(0,S.jsx)(v.rU,{className:N,to:null!==(e=null===(n=r.state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/",children:"GoBack"})};var U=function(){var e=(0,o.useState)(null),n=(0,a.Z)(e,2),r=n[0],s=n[1],v=(0,o.useState)(!1),d=(0,a.Z)(v,2),f=d[0],p=d[1],h=(0,o.useState)(null),m=(0,a.Z)(h,2),_=m[0],x=m[1],j=(0,c.UO)().movieId;return(0,o.useEffect)((function(){if(j){var e=function(){var e=(0,t.Z)(i().mark((function e(){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,p(!0),e.next=4,u.dB(j);case 4:n=e.sent,s(n),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),x(e.t0.message);case 11:return e.prev=11,p(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})));return function(){return e.apply(this,arguments)}}();e()}}),[j]),(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(y,{}),_&&(0,S.jsx)("p",{children:"Server request failed. Try again."}),null!==r&&(0,S.jsx)(b,{movie:r})||(0,S.jsx)("p",{children:"Unfortunately there is no information about this film."}),f&&(0,S.jsx)(l.a,{})]})}},390:function(e,n,r){r.d(n,{Df:function(){return c},Oy:function(){return v},V0:function(){return o},dB:function(){return u},l$:function(){return l}});var t=r(861),a=r(757),s=r.n(a),i=r(263).Z.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"a3d945b8f328c6538b57f110a6218b6e"}}),c=function(){var e=(0,t.Z)(s().mark((function e(){var n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("trending/all/day");case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,t.Z)(s().mark((function e(n){var r,t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("search/movie",{params:{query:n,language:"en-US",page:1,include_adult:!1}});case 2:return r=e.sent,t=r.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),u=function(){var e=(0,t.Z)(s().mark((function e(n){var r,t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("movie/".concat(n),{params:{language:"en-US"}});case 2:return r=e.sent,t=r.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=(0,t.Z)(s().mark((function e(n){var r,t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("movie/".concat(n,"/credits"),{params:{language:"en-US"}});case 2:return r=e.sent,t=r.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),v=function(){var e=(0,t.Z)(s().mark((function e(n){var r,t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("movie/".concat(n,"/reviews"),{params:{language:"en-US",page:1}});case 2:return r=e.sent,t=r.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},984:function(e,n,r){r.d(n,{x0:function(){return t}});var t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(e)).reduce((function(e,n){return e+=(n&=63)<36?n.toString(36):n<62?(n-26).toString(36).toUpperCase():n>62?"-":"_"}),"")}}}]);
//# sourceMappingURL=758.07b0c5d3.chunk.js.map