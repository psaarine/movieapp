(this.webpackJsonpimageapp=this.webpackJsonpimageapp||[]).push([[0],{24:function(e,t,n){},25:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n(1),r=n.n(i),a=n(10),s=n.n(a),o=n(2),l=n(3),d=n(4),u=n(7),j=n.n(u),h=n(11),b="204136600090e24124b9f4d6fecc8b71",f="7064440";function m(){return(m=Object(h.a)(j.a.mark((function e(t,n,c){var i,r,a,s,o,l;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=[],o=0,l="w500",e.next=5,fetch("https://api.themoviedb.org/3/configuration?api_key=".concat(b)).then((function(e){return e.json()})).then((function(e){i=e.images.base_url}));case 5:return e.next=7,fetch("https://api.themoviedb.org/3/list/".concat(f,"?api_key=").concat(b)).then((function(e){return e.json()})).then((function(e){r=e.items}));case 7:r.forEach((function(e){o<8&&(a={url:i+l+e.poster_path,title:e.original_title,rating:e.vote_average,overview:e.overview},s.push(a))})),t(s),fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(b)).then((function(e){return e.json()})).then((function(e){var t=e.results,n=[];t.forEach((function(e){var t=e.poster_path;e.image_path=i+l+t,n.push(e)})),c(t)}));case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var v=function(e,t){switch(t){case"increment":return e<3?e+1:e;case"decrement":return 0==e?e:e-1;default:return e}};var x=n.p+"static/media/tmdb_logo.de1a664e.svg",O=function(e){return Object(c.jsxs)("div",{className:"preloader-cont",children:[Object(c.jsx)("img",{src:x,id:"logo-image",style:{width:600},alt:"logo"}),Object(c.jsx)("div",{className:"preloader-text",children:Object(c.jsxs)("p",{children:["All the images and data here belong to awesome",Object(c.jsx)("a",{href:"https://www.themoviedb.org/?language=fi",children:"TMDb-website."}),Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),"I only created the layout of the page, animations and visuals. Please support them since they allow for people to make awesome stuff like this. Most elements on the page have somekind of scroll effect, so make sure you dont miss it!"]})}),Object(c.jsx)("div",{className:"preloader-button-cont",children:e.children})]})},p=n(15),g=Object(i.createContext)(),w=function(e){var t=Object(i.useState)({title:"Lol",rating:9.1,description:"Vitun hyv\xe4 leffa"}),n=Object(o.a)(t,2),r=n[0],a=n[1];return Object(c.jsx)(g.Provider,{value:[Object(p.a)({},r),function(e){a(e)}],children:e.children})};function y(){var e=Object(l.a)(["\n    width: 300px;\n    height: 450px;\n    position: relative;\n    transform-style: preserve-3d;\n    transform: perspective(3000px) rotateY(","deg);\n    transition: linear 1s;\n"]);return y=function(){return e},e}function N(){var e=Object(l.a)(["\n    height: auto;\n    position: absolute;\n    border: 1px solid black;\n    transform: rotateY(","deg) translateZ(500px);\n    scale: ",";\n    transition: 1s;\n"]);return N=function(){return e},e}var k=function(e,t){switch(t){case"increment":return e+1;case"decrement":return e-1;case"reset":return 0;default:return e}},T=d.a.div(N(),(function(e){return 45*e.index}),(function(e){return e.scaled?1.2:1})),S=d.a.div(y(),(function(e){return 45*e.current})),_=function(e){var t=Object(i.useReducer)(k,0),n=Object(o.a)(t,2),r=n[0],a=n[1];return Object(c.jsxs)("div",{className:"carousel",children:[Object(c.jsx)(S,{current:r,children:e.images.map((function(e,t){return Object(c.jsx)(C,{index:t,data:e,highlight:r},t)}))}),Object(c.jsx)("div",{className:"scroll-hitbox",onWheel:function(e){return function(e,t){e.deltaY>0?t("decrement"):t("increment")}(e,a)}}),e.children]})},C=function(e){var t=Object(i.useState)(!1),n=Object(o.a)(t,2),r=n[0],a=n[1],s=e.highlight%8,l=Object(i.useContext)(g)[1],d={title:e.data.title,rating:e.data.rating,description:e.data.overview};return Object(i.useEffect)((function(){s>0?s==Math.abs(e.index-8)?(a(!0),l(d)):a(!1):Math.abs(s)==e.index?(a(!0),l(d)):a(!1)}),[e.highlight]),Object(c.jsx)(T,{index:e.index,scaled:r,children:Object(c.jsx)("img",{className:"carouselImage",src:e.data.url})})},E=function(e){var t=Object(i.useContext)(g);return Object(c.jsxs)("div",{className:"carouselInfoCont",children:[Object(c.jsx)("div",{className:"carousel-info-header-cont",children:Object(c.jsx)("h1",{children:t[0].title})}),Object(c.jsxs)("div",{className:"carousel-info-body-cont",children:[Object(c.jsx)("div",{className:"carousel-info-body-rating",children:Object(c.jsx)("p",{children:t[0].rating})}),Object(c.jsx)("div",{id:"text-field",onWheel:function(e){return function(e){var t=document.getElementById("text-field"),n=t.scrollTop;e.deltaY>0?t.scrollTo(0,n+10):t.scrollTo(0,n-10);console.log(n)}(e)},className:"carousel-info-body-text",children:t[0].description})]}),e.children]})};function I(){var e=Object(l.a)(["\n    // This is achieved with styled component because of my original plans\n    width: 20%;\n    height: 100%;\n    border: 1px solid black;\n    box-sizing: border-box;\n"]);return I=function(){return e},e}var M=d.a.div(I()),Y=function(e){return Object(c.jsxs)(M,{children:[Object(c.jsx)("div",{className:"jumbo-imagediv",children:Object(c.jsx)("img",{className:"jumbo-image",src:e.movie.image_path,alt:e.movie.title})}),Object(c.jsxs)("div",{className:"jumbo-infodiv",children:[Object(c.jsxs)("p",{className:"trendingDescription",children:[e.index+1,".",e.movie.title]}),Object(c.jsx)("p",{children:e.movie.overview})]})]})};n(24);function D(){var e=Object(l.a)(["\n  background-color: ",";\n  height: 100vh;\n  display:flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n"]);return D=function(){return e},e}var A=d.a.section(D(),(function(e){return e.color||"orange"}));var B=function(){var e=Object(i.useState)(0),t=Object(o.a)(e,2),n=t[0],r=t[1],a=Object(i.useState)([]),s=Object(o.a)(a,2),l=s[0],d=s[1],u=Object(i.useState)([]),j=Object(o.a)(u,2),h=j[0],b=j[1],f=Object(i.useState)([]),x=Object(o.a)(f,2),p=x[0],g=x[1],y=Object(i.useReducer)(v,0),N=Object(o.a)(y,2),k=N[0],T=N[1],S=5*k;return Object(i.useEffect)((function(){n>0&&function(e){var t=window.scrollY,n=window.innerHeight,c=Date.now(),i=e*n-t;!function r(){var a,s,o,l=Date.now()-c,d=l/1e3;l<1e3?(window.scrollTo(0,t+i*((a=1)<(s=(o=d)*o)?a:s)),window.requestAnimationFrame(r)):window.scrollTo(0,n*e)}()}(n)}),[n]),Object(i.useEffect)((function(){!function(e,t,n){m.apply(this,arguments)}(d,r,b),window.onwheel=function(e){return function(e,t){e.preventDefault(),document.getElementById("jumbo-cont").onwheel=function(e){e.deltaY>0?t("increment"):t("decrement")}}(e,T)}}),[]),Object(i.useEffect)((function(){g(h.slice(S,S+5))}),[h,k,S]),Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(A,{color:"black",children:Object(c.jsx)(O,{children:l!=[]?Object(c.jsx)("div",{className:"to-website-btn",onClick:function(){return r(1)},children:Object(c.jsx)("h1",{children:"To Website"})}):Object(c.jsx)("p",{children:"Loading"})})}),Object(c.jsxs)(A,{color:"black",children:[Object(c.jsx)("h1",{id:"carousel-header",children:"My favourites"}),Object(c.jsx)("div",{className:"carousel-wrapper",children:Object(c.jsx)("div",{className:"carouselCont",children:Object(c.jsxs)(w,{children:[Object(c.jsx)(_,{images:l}),Object(c.jsx)(E,{})]})})}),Object(c.jsx)("div",{className:"button",id:"favs-to-trend",onClick:function(){return r(2)},children:"To Trending"}),Object(c.jsx)("h1",{className:"advice-text",children:"Scroll to see 3d effect!"})]}),Object(c.jsxs)(A,{color:"black",children:[Object(c.jsx)("h1",{id:"trending-header",children:"Trending"}),Object(c.jsx)("div",{className:"jumbo-container",id:"jumbo-cont",children:p.map((function(e,t){return Object(c.jsx)(Y,{movie:e,index:t+S},t)}))}),Object(c.jsx)("div",{className:"button",id:"trend-to-favs",onClick:function(){return r(1)},children:"To Favourites"}),Object(c.jsx)("div",{className:"button",id:"trend-to-sign",onClick:function(){return r(3)},children:"To Signature"}),Object(c.jsx)("h1",{className:"advice-text",children:"Scroll to watch more!"})]}),Object(c.jsxs)(A,{color:"black",children:[Object(c.jsx)("div",{className:"button",id:"sign-to-trend",onClick:function(){return r(2)},children:"To trending"}),Object(c.jsxs)("div",{className:"signature-wrapper",children:[Object(c.jsx)("div",{className:"signature-wrapper-text",children:Object(c.jsxs)("p",{children:["This website was done using purely react hooks. I mainly wanted to prove my understanding of fundamental react concepts. All data is taken from ",Object(c.jsx)("a",{href:"https://www.themoviedb.org/?language=fi",children:"tmdb api"})]})}),Object(c.jsx)("h1",{children:"Pyry Saarinen"})]})]})]})};s.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(B,{})}),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.c3714360.chunk.js.map