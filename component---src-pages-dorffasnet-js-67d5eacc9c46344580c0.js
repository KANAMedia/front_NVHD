(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{147:function(e,t,n){"use strict";n.r(t),n.d(t,"query",function(){return l});var a=n(75),r=n.n(a),i=n(0),o=n.n(i),s=n(162),c=n(164),u=n(221),l="268767952";t.default=function(e){var t=e.data,n=r()(e,["data"]);return o.a.createElement(s.a,{currentHref:n.location.href},o.a.createElement(c.a,{title:"Dorffasnet",keywords:["Figuren","Dorffasnet","Eiersammler","Wischenführer","Narrenpolizist"]}),o.a.createElement("section",null,o.a.createElement("h2",null,"die ",o.a.createElement("br",null),o.a.createElement("span",null,"Dorffasnet")),o.a.createElement(u.a,{data:t})))}},170:function(e,t,n){var a=n(24).f,r=Function.prototype,i=/^\s*function ([^ (]*)/;"name"in r||n(18)&&a(r,"name",{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(e){return""}}})},221:function(e,t,n){"use strict";n(170);var a=n(7),r=n.n(a),i=n(0),o=n.n(i),s=n(242),c=n.n(s),u=n(243),l=n.n(u),d=n(163),p=n.n(d),f=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return o.a.createElement("div",{className:l.a.figur},o.a.createElement(p.a,{className:l.a.img,fluid:this.props.fluid}),o.a.createElement("h3",{className:l.a.heading}," ",this.props.heading," "),o.a.createElement("p",{className:l.a.text},this.props.text))},t}(i.Component),m=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return o.a.createElement("div",{className:c.a.figuren},this.props.data.page.edges.map(function(e){return o.a.createElement(f,{key:e.node.id,FigurKey:e.node.id,img:"https://cdn.sanity.io/"+e.node.bild.asset.path,fluid:e.node.bild.asset.fluid,heading:e.node.name,text:e.node.description})}))},t}(o.a.Component);t.a=m}}]);
//# sourceMappingURL=component---src-pages-dorffasnet-js-67d5eacc9c46344580c0.js.map