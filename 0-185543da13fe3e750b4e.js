(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{154:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return p}),a.d(t,"StaticQueryContext",function(){return h}),a.d(t,"StaticQuery",function(){return d});var n=a(0),r=a.n(n),o=a(4),l=a.n(o),i=a(163),c=a.n(i);a.d(t,"Link",function(){return c.a}),a.d(t,"withPrefix",function(){return i.withPrefix}),a.d(t,"navigate",function(){return i.navigate}),a.d(t,"push",function(){return i.push}),a.d(t,"replace",function(){return i.replace}),a.d(t,"navigateTo",function(){return i.navigateTo});var s=a(195),u=a.n(s);a.d(t,"PageRenderer",function(){return u.a});var m=a(49);a.d(t,"parsePath",function(){return m.a});var h=r.a.createContext({}),d=function(e){return r.a.createElement(h.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}d.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},159:function(e,t,a){"use strict";a(32);var n=a(7),r=a.n(n),o=a(212),l=a(0),i=a.n(l),c=a(4),s=a.n(c),u=a(154),m=a(214),h=a.n(m),d=a(215),p=a(216),f=a.n(p),g=a(193),v=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={showMenu:!1},t.toggleMenu=function(){t.setState({showMenu:!t.state.showMenu})},t}return r()(t,e),t.prototype.render=function(){return i.a.createElement("header",{className:f.a.header},i.a.createElement("div",{className:f.a.logoBox},i.a.createElement("h1",{style:{margin:0}},i.a.createElement(u.Link,{to:"/"},i.a.createElement("img",{key:this.props.data.logo.edges[0].node.id+"-image",className:f.a.logo,src:"https://cdn.sanity.io/"+this.props.data.logo.edges[0].node.logo.asset.path,alt:this.props.siteTitle})))),i.a.createElement("button",{className:f.a.burgerNavIconBox,onClick:this.toggleMenu,type:"button","aria-label":"Menu","aria-controls":"navigation"},i.a.createElement("span",{className:this.state.showMenu?f.a.burgerNavIconOpen:f.a.burgerNavIconClosed})),i.a.createElement(g.a,{showMenu:this.state.showMenu,type:"header",currentPath:this.props.currentPath}))},t}(i.a.Component),k=function(e){return i.a.createElement(u.StaticQuery,{query:"178536440",render:function(t){return i.a.createElement(v,Object.assign({data:t},e))},data:d})};v.propTypes={siteTitle:s.a.string},v.defaultProps={siteTitle:""};var E=a(219),y=a(220),b=a.n(y),w=(a(164),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return i.a.createElement("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",fill:this.props.fill,className:this.props.className,viewBox:"0 0 32 32"},i.a.createElement("title",null,"facebook"),i.a.createElement("path",{d:"M29 0h-26c-1.65 0-3 1.35-3 3v26c0 1.65 1.35 3 3 3h13v-14h-4v-4h4v-2c0-3.306 2.694-6 6-6h4v4h-4c-1.1 0-2 0.9-2 2v2h6l-1 4h-5v14h9c1.65 0 3-1.35 3-3v-26c0-1.65-1.35-3-3-3z"}))},t}(i.a.Component)),N=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return i.a.createElement("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",fill:this.props.fill,className:this.props.className,viewBox:"0 0 32 32"},i.a.createElement("title",null,"instagram"),i.a.createElement("path",{d:"M16 2.881c4.275 0 4.781 0.019 6.462 0.094 1.563 0.069 2.406 0.331 2.969 0.55 0.744 0.288 1.281 0.638 1.837 1.194 0.563 0.563 0.906 1.094 1.2 1.838 0.219 0.563 0.481 1.412 0.55 2.969 0.075 1.688 0.094 2.194 0.094 6.463s-0.019 4.781-0.094 6.463c-0.069 1.563-0.331 2.406-0.55 2.969-0.288 0.744-0.637 1.281-1.194 1.837-0.563 0.563-1.094 0.906-1.837 1.2-0.563 0.219-1.413 0.481-2.969 0.55-1.688 0.075-2.194 0.094-6.463 0.094s-4.781-0.019-6.463-0.094c-1.563-0.069-2.406-0.331-2.969-0.55-0.744-0.288-1.281-0.637-1.838-1.194-0.563-0.563-0.906-1.094-1.2-1.837-0.219-0.563-0.481-1.413-0.55-2.969-0.075-1.688-0.094-2.194-0.094-6.463s0.019-4.781 0.094-6.463c0.069-1.563 0.331-2.406 0.55-2.969 0.288-0.744 0.638-1.281 1.194-1.838 0.563-0.563 1.094-0.906 1.838-1.2 0.563-0.219 1.412-0.481 2.969-0.55 1.681-0.075 2.188-0.094 6.463-0.094zM16 0c-4.344 0-4.887 0.019-6.594 0.094-1.7 0.075-2.869 0.35-3.881 0.744-1.056 0.412-1.95 0.956-2.837 1.85-0.894 0.888-1.438 1.781-1.85 2.831-0.394 1.019-0.669 2.181-0.744 3.881-0.075 1.713-0.094 2.256-0.094 6.6s0.019 4.887 0.094 6.594c0.075 1.7 0.35 2.869 0.744 3.881 0.413 1.056 0.956 1.95 1.85 2.837 0.887 0.887 1.781 1.438 2.831 1.844 1.019 0.394 2.181 0.669 3.881 0.744 1.706 0.075 2.25 0.094 6.594 0.094s4.888-0.019 6.594-0.094c1.7-0.075 2.869-0.35 3.881-0.744 1.050-0.406 1.944-0.956 2.831-1.844s1.438-1.781 1.844-2.831c0.394-1.019 0.669-2.181 0.744-3.881 0.075-1.706 0.094-2.25 0.094-6.594s-0.019-4.887-0.094-6.594c-0.075-1.7-0.35-2.869-0.744-3.881-0.394-1.063-0.938-1.956-1.831-2.844-0.887-0.887-1.781-1.438-2.831-1.844-1.019-0.394-2.181-0.669-3.881-0.744-1.712-0.081-2.256-0.1-6.6-0.1v0z"}),i.a.createElement("path",{d:"M16 7.781c-4.537 0-8.219 3.681-8.219 8.219s3.681 8.219 8.219 8.219 8.219-3.681 8.219-8.219c0-4.537-3.681-8.219-8.219-8.219zM16 21.331c-2.944 0-5.331-2.387-5.331-5.331s2.387-5.331 5.331-5.331c2.944 0 5.331 2.387 5.331 5.331s-2.387 5.331-5.331 5.331z"}),i.a.createElement("path",{d:"M26.462 7.456c0 1.060-0.859 1.919-1.919 1.919s-1.919-0.859-1.919-1.919c0-1.060 0.859-1.919 1.919-1.919s1.919 0.859 1.919 1.919z"}))},t}(i.a.Component),x=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return i.a.createElement("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",fill:this.props.fill,className:this.props.className,viewBox:"0 0 32 32"},i.a.createElement("title",null,"twitter"),i.a.createElement("path",{d:"M32 7.075c-1.175 0.525-2.444 0.875-3.769 1.031 1.356-0.813 2.394-2.1 2.887-3.631-1.269 0.75-2.675 1.3-4.169 1.594-1.2-1.275-2.906-2.069-4.794-2.069-3.625 0-6.563 2.938-6.563 6.563 0 0.512 0.056 1.012 0.169 1.494-5.456-0.275-10.294-2.888-13.531-6.862-0.563 0.969-0.887 2.1-0.887 3.3 0 2.275 1.156 4.287 2.919 5.463-1.075-0.031-2.087-0.331-2.975-0.819 0 0.025 0 0.056 0 0.081 0 3.181 2.263 5.838 5.269 6.437-0.55 0.15-1.131 0.231-1.731 0.231-0.425 0-0.831-0.044-1.237-0.119 0.838 2.606 3.263 4.506 6.131 4.563-2.25 1.762-5.075 2.813-8.156 2.813-0.531 0-1.050-0.031-1.569-0.094 2.913 1.869 6.362 2.95 10.069 2.95 12.075 0 18.681-10.006 18.681-18.681 0-0.287-0.006-0.569-0.019-0.85 1.281-0.919 2.394-2.075 3.275-3.394z"}))},t}(i.a.Component),I=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return i.a.createElement("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",fill:this.props.fill,className:this.props.className,viewBox:"0 0 32 32"},i.a.createElement("title",null,"youtube"),i.a.createElement("path",{d:"M31.681 9.6c0 0-0.313-2.206-1.275-3.175-1.219-1.275-2.581-1.281-3.206-1.356-4.475-0.325-11.194-0.325-11.194-0.325h-0.012c0 0-6.719 0-11.194 0.325-0.625 0.075-1.987 0.081-3.206 1.356-0.963 0.969-1.269 3.175-1.269 3.175s-0.319 2.588-0.319 5.181v2.425c0 2.587 0.319 5.181 0.319 5.181s0.313 2.206 1.269 3.175c1.219 1.275 2.819 1.231 3.531 1.369 2.563 0.244 10.881 0.319 10.881 0.319s6.725-0.012 11.2-0.331c0.625-0.075 1.988-0.081 3.206-1.356 0.962-0.969 1.275-3.175 1.275-3.175s0.319-2.587 0.319-5.181v-2.425c-0.006-2.588-0.325-5.181-0.325-5.181zM12.694 20.15v-8.994l8.644 4.513-8.644 4.481z"}))},t}(i.a.Component),S=a(221),C=a.n(S),M=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return i.a.createElement("ul",{className:C.a.socialGrid},i.a.createElement("li",null,i.a.createElement(u.Link,{to:"/kontakt"},i.a.createElement(w,{fill:"#f0be2a"}))),i.a.createElement("li",null,i.a.createElement(u.Link,{to:"/kontakt"},i.a.createElement(N,{fill:"#f0be2a"}))),i.a.createElement("li",null,i.a.createElement(u.Link,{to:"/kontakt"},i.a.createElement(x,{fill:"#f0be2a"}))),i.a.createElement("li",null,i.a.createElement(u.Link,{to:"/kontakt"},i.a.createElement(I,{fill:"#f0be2a"}))))},t}(i.a.Component),L=a(222),B=a.n(L),O=function(){return i.a.createElement("ul",{className:B.a.linkBox},i.a.createElement("li",null,i.a.createElement(u.Link,{to:"/datenschutz"},"Datenschutz")),i.a.createElement("li",null,i.a.createElement(u.Link,{to:"/impressum"},"Impressum")))},q=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={},t}return r()(t,e),t.prototype.render=function(){return i.a.createElement("footer",{className:b.a.footer},i.a.createElement(g.a,{type:"footer"}),i.a.createElement(M,null),i.a.createElement(O,null))},t}(i.a.Component),T=function(e){return i.a.createElement(u.StaticQuery,{query:"979500799",render:function(t){return i.a.createElement(q,Object.assign({data:t},e))},data:E})},z=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(k,{siteTitle:this.props.data.site.siteMetadata.title,currentPath:this.props.currentPath}),i.a.createElement("div",{className:h.a.base},this.props.children),i.a.createElement(T,null))},t}(i.a.Component);t.a=function(e){return i.a.createElement(u.StaticQuery,{query:"755544856",render:function(t){return i.a.createElement(z,Object.assign({data:t},e))},data:o})};z.propTypes={children:s.a.node.isRequired}},193:function(e,t,a){"use strict";var n=a(7),r=a.n(n),o=a(154),l=a(4),i=a.n(l),c=a(0),s=a.n(c),u=a(217),m=a.n(u),h=a(218),d=a.n(h),p=(a(164),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return s.a.createElement("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:this.props.fill,className:this.props.className,viewBox:"0 0 37.23 46.67"},s.a.createElement("title",null,"heulicher"),s.a.createElement("path",{className:"cls-1",d:"M7.45,22.63a1.27,1.27,0,0,1-.37,1.52A1.28,1.28,0,0,1,6,24.44c-.93-.31-2.18-5.16-2.18-5.16L3.45,9,0,1S-.3-.56,1.74.22L14.08,15.84,26.11,31l3.44,1.56L37.2,42.72A1.51,1.51,0,0,1,36.89,44c-.47.47-3,2.66-3,2.66A1.39,1.39,0,0,1,32.36,46c-.62-.94-24.84-32-24.84-32S6,12.25,6.27,14.44a17.51,17.51,0,0,0,.31,4.37A12.72,12.72,0,0,0,7.45,22.63Z"}))},t}(s.a.Component)),f=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).checkStyle=function(e){return"header"===t.props.type?m.a[e]:d.a[e]},t}return r()(t,e),t.prototype.render=function(){return s.a.createElement("nav",{className:this.props.showMenu?this.checkStyle("backgroundOnClick"):this.checkStyle("background")},s.a.createElement("ul",{className:this.props.showMenu?this.checkStyle("navOnClick"):this.checkStyle("nav")},s.a.createElement("li",{className:this.checkStyle("link")},s.a.createElement(p,{className:this.checkStyle("linkIcon"),fill:"#f0be2a"}),s.a.createElement(o.Link,{to:"/"},"Home")),s.a.createElement("li",{className:this.checkStyle("link")},s.a.createElement(p,{className:this.checkStyle("linkIcon"),fill:"#f0be2a"}),s.a.createElement(o.Link,{to:"/figuren"},"Figuren")),s.a.createElement("li",{className:this.checkStyle("link")},s.a.createElement(p,{className:this.checkStyle("linkIcon"),fill:"#f0be2a"}),s.a.createElement(o.Link,{to:"/dorffasnet"},"Dorffasnet")),s.a.createElement("li",{className:this.checkStyle("link")},s.a.createElement(p,{className:this.checkStyle("linkIcon"),fill:"#f0be2a"}),s.a.createElement(o.Link,{to:"/termine"},"Termine")),s.a.createElement("li",{className:this.checkStyle("link")},s.a.createElement(p,{className:this.checkStyle("linkIcon"),fill:"#f0be2a"}),s.a.createElement(o.Link,{to:"/chronik"},"Chronik")),s.a.createElement("li",{className:this.checkStyle("link")},s.a.createElement(p,{className:this.checkStyle("linkIcon"),fill:"#f0be2a"}),s.a.createElement(o.Link,{to:"/galerie"},"Galerie")),s.a.createElement("li",{className:this.checkStyle("link")},s.a.createElement(p,{className:this.checkStyle("linkIcon"),fill:"#f0be2a"}),s.a.createElement(o.Link,{to:"/vorstand"},"Vorstand")),s.a.createElement("li",{className:this.checkStyle("link")},s.a.createElement(p,{className:this.checkStyle("linkIcon"),fill:"#f0be2a"}),s.a.createElement(o.Link,{to:"/kontakt",activeClassName:this.checkStyle("active")},"Kontakt"))))},t}(s.a.Component);f.propTypes={type:i.a.string};t.a=f},195:function(e,t,a){var n;e.exports=(n=a(213))&&n.default||n},212:function(e){e.exports={data:{site:{siteMetadata:{title:"Narrenverein Heulicher | Heudorf im Hegau"}}}}},213:function(e,t,a){"use strict";a.r(t);a(32);var n=a(0),r=a.n(n),o=a(4),l=a.n(o),i=a(69),c=a(2),s=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(i.a,Object.assign({location:t,pageResources:a},a.json))};s.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=s},214:function(e,t,a){e.exports={base:"layout-module--base--1K8r7"}},215:function(e){e.exports={data:{logo:{edges:[{node:{id:"02030287-fa36-5ef6-b6ec-8894176570c0",title:"Logo",logo:{asset:{path:"images/74ftimmm/production/0b13f403bf734e27ebaf1d676492dea5611f3a09-276x153.png"}}}}]}}}},216:function(e,t,a){e.exports={header:"header-module--header--19Rvl",burgerNavIconBox:"header-module--burgerNavIconBox--1G3Q2",burgerNavIcon:"header-module--burgerNavIcon--3on5U",burgerNavIconClosed:"header-module--burgerNavIconClosed--R4R4h header-module--burgerNavIcon--3on5U",burgerNavIconOpen:"header-module--burgerNavIconOpen--I15qI header-module--burgerNavIcon--3on5U",logoBox:"header-module--logoBox--3YiO6",logo:"header-module--logo--3CGDT"}},217:function(e,t,a){e.exports={background:"navigation-header-module--background--mQNI8",backgroundOnClick:"navigation-header-module--backgroundOnClick--1Zl_P navigation-header-module--background--mQNI8",nav:"navigation-header-module--nav--fjVYA",navOnClick:"navigation-header-module--navOnClick--A1q-p navigation-header-module--nav--fjVYA",fadeIn:"navigation-header-module--fadeIn--14Yof",link:"navigation-header-module--link--zn3O3",linkIcon:"navigation-header-module--linkIcon--3Bk-K",active:"navigation-header-module--active--3voBg",pulsate:"navigation-header-module--pulsate--Bii9A",zoomOutATad:"navigation-header-module--zoomOutATad--2dU5u"}},218:function(e,t,a){e.exports={nav:"navigation-footer-module--nav--tCPl3",link:"navigation-footer-module--link--1TyNH",linkIcon:"navigation-footer-module--linkIcon--eo3uH"}},219:function(e){e.exports={data:{logo:{edges:[{node:{id:"02030287-fa36-5ef6-b6ec-8894176570c0",title:"Logo",logo:{asset:{path:"images/74ftimmm/production/0b13f403bf734e27ebaf1d676492dea5611f3a09-276x153.png"}}}}]}}}},220:function(e,t,a){e.exports={footer:"footer-module--footer--1X1DK"}},221:function(e,t,a){e.exports={socialGrid:"navigationSocial-module--socialGrid--3fWX2"}},222:function(e,t,a){e.exports={linkBox:"navigatonRechtliches-module--linkBox--2rmVF"}}}]);
//# sourceMappingURL=0-185543da13fe3e750b4e.js.map