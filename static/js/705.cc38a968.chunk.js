"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[705,89],{461:function(e,t,n){n.d(t,{Df:function(){return i},Pg:function(){return u},Wf:function(){return o}});var r=n(861),a=n(757),s=n.n(a),c=n(388);c.Z.defaults.baseURL="https://api.themoviedb.org/3",c.Z.defaults.params={api_key:"aca3a80d7ad77ed9a43b3a4a106c9d1c",language:"en-US"};var i=function(){var e=(0,r.Z)(s().mark((function e(){var t,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("/trending/movie/day");case 3:return t=e.sent,n=t.data,e.abrupt("return",n.results);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(s().mark((function e(t){var n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("/search/movie?query=".concat(t));case 3:return n=e.sent,r=n.data,e.abrupt("return",r.results);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),u=function(){var e=(0,r.Z)(s().mark((function e(t){var n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("/movie/".concat(t));case 3:return n=e.sent,r=n.data,e.abrupt("return",r);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()},89:function(e,t,n){n.r(t),n.d(t,{IMAGE_BASE_URL:function(){return d},default:function(){return _}});var r=n(861),a=n(439),s=n(757),c=n.n(s),i=n(791),o=n(461),u=n(87),l="Home_header__LYx1J",m="Home_link__V6Qxt",p="Home_moviesList__J6K-h",v="Home_movieImg__2wHIM",h="Home_movieTitle__MIzFQ",f=n(184),d="https://image.tmdb.org/t/p/w500",_=function(){var e=(0,i.useState)([]),t=(0,a.Z)(e,2),n=t[0],s=t[1];return(0,i.useEffect)((function(){var e=function(){var e=(0,r.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,o.Df)();case 2:t=e.sent,s(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,f.jsxs)("div",{className:"container",children:[(0,f.jsx)("h1",{className:l,children:"Trending today"}),(0,f.jsx)("ul",{className:p,children:n.map((function(e){return(0,f.jsx)("li",{children:(0,f.jsxs)(u.rU,{to:"/movies/".concat(e.id),className:m,children:[(0,f.jsx)("img",{src:"".concat(d).concat(e.poster_path),alt:e.title,className:v}),(0,f.jsx)("p",{className:h,children:e.title})]})},e.id)}))})]})}},705:function(e,t,n){n.r(t),n.d(t,{default:function(){return v}});var r=n(861),a=n(439),s=n(757),c=n.n(s),i=n(791),o=n(87),u=n(461),l=n(89),m={searchForm:"Movies_searchForm__xME-i",searchContainer:"Movies_searchContainer__7qJO0",moviesList:"Movies_moviesList__P-Bgz",movieImg:"Movies_movieImg__8RA59",movieTitle:"Movies_movieTitle__o-P2e"},p=n(184),v=function(){var e=(0,i.useState)(""),t=(0,a.Z)(e,2),n=t[0],s=t[1],v=(0,i.useState)([]),h=(0,a.Z)(v,2),f=h[0],d=h[1],_=function(){var e=(0,r.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),n){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,(0,u.Wf)(n);case 5:r=e.sent,d(r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,p.jsxs)("div",{className:"container",children:[(0,p.jsx)("form",{className:m.searchForm,onSubmit:_,children:(0,p.jsxs)("div",{className:m.searchContainer,children:[(0,p.jsx)("input",{type:"text",autoComplete:"off",placeholder:"Search movies...",value:n,onChange:function(e){s(e.target.value)}}),(0,p.jsx)("button",{type:"submit",children:(0,p.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16",children:(0,p.jsx)("path",{d:"M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"})})})]})}),f.length?(0,p.jsx)("ul",{className:m.moviesList,children:f.map((function(e){return(0,p.jsx)("li",{children:(0,p.jsxs)(o.rU,{to:"/movies/".concat(e.id),className:m.link,children:[(0,p.jsx)("img",{src:"".concat(l.IMAGE_BASE_URL).concat(e.poster_path),alt:e.title,className:m.movieImg}),(0,p.jsx)("p",{className:m.movieTitle,children:e.title})]})},e.id)}))}):""]})}}}]);
//# sourceMappingURL=705.cc38a968.chunk.js.map