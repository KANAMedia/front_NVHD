(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{144:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(155),o=n(151),c=n(186),s=n(308),l=n.n(s);t.default=function(e){return r.a.createElement("section",{className:l.a.sectionTermine},r.a.createElement(i.a,{currentPath:e.location.pathname},r.a.createElement(o.a,{title:"Termine",keywords:["Termine","Fasnet 2019","2019"]}),r.a.createElement("section",{className:l.a.content},r.a.createElement("h2",null,"Termine ",r.a.createElement("br",null),r.a.createElement("span",{className:l.a.h2Span},"2019")),r.a.createElement("div",{className:l.a.termine},r.a.createElement(c.a,null)))))}},151:function(e,t,n){"use strict";var a=n(152),r=n(0),i=n.n(r),o=n(4),c=n.n(o),s=n(156),l=n.n(s),u=n(150);function m(e){var t=e.description,n=e.lang,r=e.meta,o=e.keywords,c=e.title;return i.a.createElement(u.StaticQuery,{query:d,render:function(e){var a=t||e.site.siteMetadata.description;return i.a.createElement(l.a,{htmlAttributes:{lang:n},title:c,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:a},{property:"og:title",content:c},{property:"og:description",content:a},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:a}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})},data:a})}m.defaultProps={lang:"en",meta:[],keywords:[]},m.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.array,keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},t.a=m;var d="1025518380"},152:function(e){e.exports={data:{site:{siteMetadata:{title:"Narrenverein Heulicher | Heudorf im Hegau",description:"Der Narrenverein Heulicher",author:"NV Heulicher"}}}}},180:function(e,t,n){"use strict";var a=n(11),r=n(27),i=n(26),o=n(25),c=[].sort,s=[1,2,3];a(a.P+a.F*(o(function(){s.sort(void 0)})||!o(function(){s.sort(null)})||!n(181)(c)),"Array",{sort:function(e){return void 0===e?c.call(i(this)):c.call(i(this),r(e))}})},181:function(e,t,n){"use strict";var a=n(25);e.exports=function(e,t){return!!e&&a(function(){t?e.call(null,function(){},1):e.call(null)})}},182:function(e){e.exports={data:{termine:{edges:[{node:{id:"49ade26e-18bf-59bf-9823-36fd7805c4f7",date:"2019-02-22",title:"Nachtumzug Bermatingen"}},{node:{id:"e346feac-563c-522a-9e4e-c4e43762b4aa",date:"2019-02-17",title:"Sonntagsumzug Volkertshausen"}},{node:{id:"86fb138b-c980-56bc-ac00-6404b2a0242d",date:"2019-02-24",title:"Sonntagsumzug See Narrentreffen Dingelsdorf"}},{node:{id:"0fc9bbec-25af-5b7d-88fe-12ca3a65b292",date:"2019-04-16",title:"Generalversammlung"}}]}}}},183:function(e,t,n){},184:function(e,t,n){e.exports={termin:"termin-module--termin--3jHK2",date:"termin-module--date--93MkE",heading:"termin-module--heading--3elkK"}},186:function(e,t,n){"use strict";n(32),n(180);var a=n(7),r=n.n(a),i=n(182),o=n(150),c=n(0),s=n.n(c),l=n(183),u=n.n(l),m=(n(75),n(184)),d=n.n(m),p=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).formatDate=function(e){var t=e.split("-");return(t=t.slice(1,3)).splice(0,1,""+t.splice(1,1,t[0])),t=t.join(".")},t}return r()(t,e),t.prototype.render=function(){return s.a.createElement("div",{className:d.a.termin},s.a.createElement("p",{className:d.a.date},this.formatDate(this.props.date)),s.a.createElement("h4",{className:d.a.heading}," ",this.props.title," "))},t}(c.Component),f=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).state={termine:[]},t.prepareData=function(){t.props.data.termine.edges.filter(function(e){var n=new Date;new Date(""+e.node.date)>n&&t.setState(function(t){return{termine:[].concat(t.termine,[e])}})})},t.sortDates=function(){t.state.termine.sort(function(e,t){return new Date(t.node.date)-new Date(e.node.date)})},t}r()(t,e);var n=t.prototype;return n.componentWillMount=function(){var e=[];this.props.data.termine.edges.filter(function(t){var n=new Date;new Date(""+t.node.date)>n&&e.push(t)}),e.sort(function(e,t){return new Date(t.node.date)-new Date(e.node.date)}),this.setState({termine:e.reverse()})},n.render=function(){return console.log(this.state),s.a.createElement(s.a.Fragment,null,this.state.termine?s.a.createElement("div",{className:u.a.termine},this.state.termine.map(function(e){return s.a.createElement(p,{key:e.node.id,terminKey:e.node.id,date:e.node.date,title:e.node.title})})):s.a.createElement("p",null,"Jemand hat vergessen hier die nächsten Termine ein zu tragen 🏃"))},t}(s.a.Component);t.a=function(e){return s.a.createElement(o.StaticQuery,{query:"3028325984",render:function(t){return s.a.createElement(f,Object.assign({data:t},e))},data:i})}},308:function(e,t,n){e.exports={h2Span:"termine-module--h2Span--1FFAK",termine:"termine-module--termine--kUhBn",sectionTermine:"termine-module--sectionTermine--1i2a9",content:"termine-module--content--1wNY0"}}}]);
//# sourceMappingURL=component---src-pages-termine-js-1ae03989f9d7a179e5b8.js.map