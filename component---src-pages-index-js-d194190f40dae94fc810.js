(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{148:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(154),o=n(152),c=n(289),u=n.n(c),s=(n(290),n(7)),l=n.n(s),m=n(292),d=n.n(m),p=n(151),f=function(e){function t(){return e.apply(this,arguments)||this}return l()(t,e),t.prototype.render=function(){return r.a.createElement("button",{className:d.a.btn},r.a.createElement(p.Link,{className:d.a.btnText,to:this.props.link},this.props.children))},t}(a.Component),g=(n(157),n(293)),h=n(294),b=n.n(h),k=function(){return r.a.createElement(p.StaticQuery,{query:"1579897945",render:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:b.a.figurenImagesBox},e.figurenVerein.edges.map(function(e,t){return r.a.createElement("figure",{key:e.node.id+"-figure",className:b.a["Figur"+t]},r.a.createElement("img",{src:"https://cdn.sanity.io/"+e.node.bild.asset.path}),r.a.createElement("figcaption",null,e.node.name))})))},data:g})},E=n(177);t.default=function(e){return console.log(e),r.a.createElement(i.a,{currentPath:e.location.pathname},r.a.createElement(o.a,{title:"Figuren",keywords:["Termine","Fasnet 2019","2019"]}),r.a.createElement("section",null,r.a.createElement("p",{className:u.a.brauchtumInSchönsterForm},"Brauchtum in seiner schönsten Form erleben"),r.a.createElement("h2",{className:u.a.h2},"HEU !",r.a.createElement("br",null),r.a.createElement("span",{className:u.a.h2Span},"LICHER !"))),r.a.createElement("section",{className:u.a.unserVerein},r.a.createElement("h3",null,"unser ",r.a.createElement("br",null),r.a.createElement("span",null,"Verein")),r.a.createElement(k,null),r.a.createElement(f,{link:"/figuren"},"Mehr erfahren")),r.a.createElement("section",{className:u.a.terminSection},r.a.createElement("h3",null,"Fasnet ",r.a.createElement("br",null),r.a.createElement("span",null,"2019")),r.a.createElement(E.a,null),r.a.createElement(f,{link:"/termine"},"alle Termine")),r.a.createElement("section",{className:u.a.kontaktSection},r.a.createElement("h3",{className:u.a.kontaktSectionH3},"Mit ",r.a.createElement("br",null),r.a.createElement("span",{className:u.a.kontaktSectionH3Span},"Machen")),r.a.createElement("p",{className:u.a.kontaktSectionP},"Du hast lust mit uns um die Häuser zu ziehen oder wolltest schon immer mal wissen wie es unter einer Maske aussieht?"),r.a.createElement(f,{link:"/kontakt"},"schreib uns")))}},152:function(e,t,n){"use strict";var a=n(153),r=n(0),i=n.n(r),o=n(4),c=n.n(o),u=n(156),s=n.n(u),l=n(151);function m(e){var t=e.description,n=e.lang,r=e.meta,o=e.keywords,c=e.title;return i.a.createElement(l.StaticQuery,{query:d,render:function(e){var a=t||e.site.siteMetadata.description;return i.a.createElement(s.a,{htmlAttributes:{lang:n},title:c,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:a},{property:"og:title",content:c},{property:"og:description",content:a},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:a}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})},data:a})}m.defaultProps={lang:"en",meta:[],keywords:[]},m.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.array,keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},t.a=m;var d="1025518380"},153:function(e){e.exports={data:{site:{siteMetadata:{title:"Narrenverein Heulicher | Heudorf im Hegau",description:"Der Narrenverein Heulicher",author:"NV Heulicher"}}}}},157:function(e,t,n){var a=n(24).f,r=Function.prototype,i=/^\s*function ([^ (]*)/;"name"in r||n(16)&&a(r,"name",{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(e){return""}}})},173:function(e){e.exports={data:{termine:{edges:[{node:{id:"49ade26e-18bf-59bf-9823-36fd7805c4f7",date:"2019-02-22",title:"Nachtumzug Bermatingen"}},{node:{id:"e346feac-563c-522a-9e4e-c4e43762b4aa",date:"2019-02-17",title:"Sonntagsumzug Volkertshausen"}},{node:{id:"86fb138b-c980-56bc-ac00-6404b2a0242d",date:"2019-02-24",title:"Sonntagsumzug See Narrentreffen Dingelsdorf"}}]}}}},174:function(e,t,n){},175:function(e,t,n){e.exports={termin:"termin-module--termin--3jHK2",date:"termin-module--date--93MkE",heading:"termin-module--heading--3elkK"}},177:function(e,t,n){"use strict";n(32);var a=n(7),r=n.n(a),i=n(173),o=n(151),c=n(0),u=n.n(c),s=n(174),l=n.n(s),m=(n(75),n(175)),d=n.n(m),p=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).formatDate=function(e){var t=e.split("-");return(t=t.slice(1,3)).splice(0,1,""+t.splice(1,1,t[0])),t=t.join(".")},t}return r()(t,e),t.prototype.render=function(){return u.a.createElement("div",{className:d.a.termin},u.a.createElement("p",{className:d.a.date},this.formatDate(this.props.date)),u.a.createElement("h4",{className:d.a.heading}," ",this.props.title," "))},t}(c.Component),f=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return u.a.createElement("div",{className:l.a.termine},this.props.data.termine.edges.map(function(e){return u.a.createElement(p,{key:e.node.id,terminKey:e.node.id,date:e.node.date,title:e.node.title})}))},t}(u.a.Component);t.a=function(e){return u.a.createElement(o.StaticQuery,{query:"3028325984",render:function(t){return u.a.createElement(f,Object.assign({data:t},e))},data:i})}},289:function(e,t,n){e.exports={"brauchtumInSchönsterForm":"index-module--brauchtumInSchönsterForm--3JSRF",h2:"index-module--h2--aQMTX",h2Span:"index-module--h2Span---9iWc",terminSection:"index-module--terminSection--arNdd",kontaktSection:"index-module--kontaktSection--1-vQY",kontaktSectionP:"index-module--kontaktSectionP--1n-na",kontaktSectionH3:"index-module--kontaktSectionH3--3e2sv",kontaktSectionH3Span:"index-module--kontaktSectionH3Span--323vY"}},290:function(e,t,n){"use strict";n(291)("link",function(e){return function(t){return e(this,"a","href",t)}})},291:function(e,t,n){var a=n(11),r=n(26),i=n(17),o=/"/g,c=function(e,t,n,a){var r=String(i(e)),c="<"+t;return""!==n&&(c+=" "+n+'="'+String(a).replace(o,"&quot;")+'"'),c+">"+r+"</"+t+">"};e.exports=function(e,t){var n={};n[e]=t(c),a(a.P+a.F*r(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",n)}},292:function(e,t,n){e.exports={btn:"btnCta-module--btn--2t8tz",pulsate:"btnCta-module--pulsate--9l4FD",btnText:"btnCta-module--btnText--_9-Go",zoomOutATad:"btnCta-module--zoomOutATad--1iMCq"}},293:function(e){e.exports={data:{figurenVerein:{edges:[{node:{id:"d0e78384-7958-5431-9e6d-835e4f767ffc",name:"Heulicher",bild:{asset:{path:"images/74ftimmm/production/83a1b10ab067be8dce6226d88d1d6fef71239359-402x824.png"}}}},{node:{id:"a9b8f525-c3de-58d2-9b23-19c8892721fb",name:"Hardmännle",bild:{asset:{path:"images/74ftimmm/production/6409c32e37d5ea7606225690b87ff65505cd5041-289x633.png"}}}},{node:{id:"c432c3a7-1553-58d9-bf85-4eed954503c7",name:"Heulicherin",bild:{asset:{path:"images/74ftimmm/production/49eb9046021849c1e523294a4f4d361c85792a19-312x811.png"}}}}]}}}},294:function(e,t,n){e.exports={figurenImagesBox:"imageCompVereinsfiguren-module--figurenImagesBox--3iOdF",Figur0:"imageCompVereinsfiguren-module--Figur0--3wxsn",Figur1:"imageCompVereinsfiguren-module--Figur1--33li-",Figur2:"imageCompVereinsfiguren-module--Figur2--TrkL8"}}}]);
//# sourceMappingURL=component---src-pages-index-js-d194190f40dae94fc810.js.map