"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[657,89],{461:function(e,n,t){t.d(n,{Df:function(){return i},Ku:function(){return l},Pg:function(){return u},Wf:function(){return o},fI:function(){return v}});var r=t(861),a=t(757),s=t.n(a),c=t(388);c.Z.defaults.baseURL="https://api.themoviedb.org/3",c.Z.defaults.params={api_key:"aca3a80d7ad77ed9a43b3a4a106c9d1c",language:"en-US"};var i=function(){var e=(0,r.Z)(s().mark((function e(){var n,t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("/trending/movie/day");case 3:return n=e.sent,t=n.data,e.abrupt("return",t.results);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(s().mark((function e(n){var t,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("/search/movie?query=".concat(n));case 3:return t=e.sent,r=t.data,e.abrupt("return",r.results);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(n){return e.apply(this,arguments)}}(),u=function(){var e=(0,r.Z)(s().mark((function e(n){var t,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("/movie/".concat(n));case 3:return t=e.sent,r=t.data,e.abrupt("return",r);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(s().mark((function e(n){var t,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("/movie/".concat(n,"/credits"));case 3:return t=e.sent,r=t.data,e.abrupt("return",r.cast);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(n){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(s().mark((function e(n){var t,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("/movie/".concat(n,"/reviews"));case 3:return t=e.sent,r=t.data,e.abrupt("return",r.results);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(n){return e.apply(this,arguments)}}()},89:function(e,n,t){t.r(n),t.d(n,{IMAGE_BASE_URL:function(){return m},default:function(){return x}});var r=t(861),a=t(439),s=t(757),c=t.n(s),i=t(791),o=t(461),u=t(87),l="Home_header__LYx1J",v="Home_link__V6Qxt",p="Home_moviesList__J6K-h",d="Home_movieImg__2wHIM",f="Home_movieTitle__MIzFQ",_=t(26),h=t(184),m="https://image.tmdb.org/t/p/w500",x=function(){var e=(0,i.useState)([]),n=(0,a.Z)(e,2),t=n[0],s=n[1];return(0,i.useEffect)((function(){var e=function(){var e=(0,r.Z)(c().mark((function e(){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,o.Df)();case 2:n=e.sent,s(n);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,h.jsxs)("div",{className:"container",children:[(0,h.jsx)("h1",{className:l,children:"Trending today"}),(0,h.jsx)("ul",{className:p,children:t.map((function(e){return(0,h.jsx)("li",{children:(0,h.jsxs)(u.rU,{to:"/movies/".concat(e.id),className:v,children:[(0,h.jsx)("img",{src:"".concat(m).concat(e.poster_path),alt:e.title,className:d,onError:_.M}),(0,h.jsx)("p",{className:f,children:e.title})]})},e.id)}))})]})}},657:function(e,n,t){t.r(n),t.d(n,{default:function(){return I}});var r=t(861),a=t(439),s=t(757),c=t.n(s),i=t(791),o=t(87),u=t(689),l=t(461),v=t(26),p=t(89),d=t(78),f="MovieDetails_movieContainer__Pi1nw",_="MovieDetails_movieImgContainer__n9VJr",h="MovieDetails_overviewContainer__XVWT4",m="MovieDetails_title__g-GJu",x="MovieDetails_rating__KBmkn",g="MovieDetails_genres__IIJbV",j="MovieDetails_overviewHeader__qZMMv",w="MovieDetails_overview__ZzZtr",k="MovieDetails_additionalInfoContainer__ErJkJ",M="MovieDetails_additionalInfo__af40x",N="MovieDetails_linksList__90hl-",Z="MovieDetails_link__0Fq4t",b="MovieDetails_activeLink__7t9YR",D=t(184),I=function(){var e=(0,u.UO)().movieId,n=(0,i.useState)(null),t=(0,a.Z)(n,2),s=t[0],I=t[1];if((0,i.useEffect)((function(){if(!s){var n=function(){var n=(0,r.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,l.Pg)(Number(e));case 2:t=n.sent,I(t);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();n()}}),[e]),!s)return(0,D.jsx)(d.$,{});var y=s.genres.map((function(e){return e.name})).join(", ");return(0,D.jsxs)(D.Fragment,{children:[(0,D.jsxs)("div",{className:"container ".concat(f),children:[(0,D.jsx)("div",{className:_,children:(0,D.jsx)("img",{src:"".concat(p.IMAGE_BASE_URL).concat(s.poster_path),alt:s.title,onError:v.M})}),(0,D.jsxs)("div",{className:h,children:[(0,D.jsxs)("p",{className:m,children:[s.title," \ud83d\udd25"," ",(0,D.jsx)("span",{children:s.release_date.substring(0,4)})]}),(0,D.jsxs)("p",{className:x,children:["Rating: ",(0,D.jsx)("span",{children:s.vote_average})]}),(0,D.jsxs)("p",{className:x,children:["Budget: ",(0,D.jsxs)("span",{children:[s.budget.toLocaleString()," $"]})]}),(0,D.jsxs)("p",{className:x,children:["Revenue: ",(0,D.jsxs)("span",{children:[s.revenue.toLocaleString()," $"]})]}),(0,D.jsxs)("p",{className:g,children:["Genres: ",(0,D.jsxs)("span",{children:[y,"."]})]}),(0,D.jsx)("p",{className:j,children:"Overview"}),(0,D.jsx)("p",{className:w,children:s.overview})]}),(0,D.jsxs)("div",{className:k,children:[(0,D.jsx)("p",{className:M,children:"Additional information:"}),(0,D.jsxs)("ul",{className:N,children:[(0,D.jsx)("li",{children:(0,D.jsx)(o.OL,{to:"cast",className:function(e){return e.isActive?b:Z},children:"Cast"})}),(0,D.jsx)("li",{children:(0,D.jsx)(o.OL,{to:"reviews",className:function(e){return e.isActive?b:Z},children:"Reviews"})})]})]})]}),(0,D.jsx)(i.Suspense,{fallback:(0,D.jsx)(d.$,{}),children:(0,D.jsx)(u.j3,{context:{movieId:e}})})]})}},26:function(e,n,t){t.d(n,{M:function(){return r}});var r=function(e){e.target.onerror=null,e.target.src="https://t4.ftcdn.net/jpg/04/00/24/31/360_F_400243185_BOxON3h9avMUX10RsDkt3pJ8iQx72kS3.jpg"}}}]);
//# sourceMappingURL=657.aa313f6e.chunk.js.map