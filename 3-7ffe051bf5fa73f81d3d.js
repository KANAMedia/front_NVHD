(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{178:function(f,p,y){"use strict";var v=y(0),o=y(4),O=y(202),x=y(297),z=x.serializers,S=x.serializeSpan,P=x.renderProps,g=O.getImageUrl,E=O.blocksToNodes,_=O.mergeSerializers,H=v.createElement,U=function f(p){var y=_(f.defaultSerializers,p.serializers),v=Object.assign({},P,p,{serializers:y,blocks:p.blocks||[]});return E(H,v,z,S)};U.defaultSerializers=z,U.getImageUrl=g,U.propTypes={className:o.string,renderContainerOnSingleChild:o.bool,projectId:o.string,dataset:o.string,imageOptions:o.object,serializers:o.shape({types:o.object,marks:o.object,list:o.func,listItem:o.func,block:o.func,span:o.func}),blocks:o.oneOfType([o.arrayOf(o.shape({_type:o.string.isRequired})),o.shape({_type:o.string.isRequired})]).isRequired},U.defaultProps={renderContainerOnSingleChild:!1,serializers:{},imageOptions:{}},f.exports=U},202:function(f,p,y){f.exports=y(285)},203:function(f,p,y){"use strict";var v=y(287),o=y(288),O=y(52),x=encodeURIComponent,z="You must either:\n  - Pass `projectId` and `dataset` to the block renderer\n  - Materialize images to include the `url` field.\n\nFor more information, see "+v("block-content-image-materializing");f.exports=function(f){var p=f.node,y=f.options,v=y.projectId,S=y.dataset,P=p.asset;if(!P)throw new Error("Image does not have required `asset` property");if(P.url)return P.url+function(f){var p=f.imageOptions,y=Object.keys(p);return y.length?"?"+y.map(function(f){return x(f)+"="+x(p[f])}).join("&"):""}(y);if(!v||!S)throw new Error(z);if(!P._ref)throw new Error("Invalid image reference in block, no `_ref` found on `asset`");return o(O({projectId:v,dataset:S},y.imageOptions||{})).image(p).toString()}},204:function(f,p,y){"use strict";var v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(f){return typeof f}:function(f){return f&&"function"==typeof Symbol&&f.constructor===Symbol&&f!==Symbol.prototype?"symbol":typeof f},o=y(52);f.exports=function(f,p){return Object.keys(f).reduce(function(y,O){var x=v(f[O]);return y[O]="function"===x?void 0!==p[O]?p[O]:f[O]:"object"===x?o({},f[O],p[O]):void 0===p[O]?f[O]:p[O],y},{})}},285:function(f,p,y){"use strict";var v=y(286),o=y(293),O=y(203),x=y(204);f.exports={blocksToNodes:function(f,p,y,O){if(y)return o(f,p,y,O);var x=v(f);return o(f,p,x.defaultSerializers,x.serializeSpan)},getSerializers:v,getImageUrl:O,mergeSerializers:x}},286:function(f,p,y){"use strict";var v=y(52),o=y(203);f.exports=function(f,p){var y=p||{useDashedStyles:!1};function O(p,y){return f(p,null,y.children)}return{defaultSerializers:{types:{block:function(p){var y=p.node.style||"normal";return/^h\d/.test(y)?f(y,null,p.children):f("blockquote"===y?"blockquote":"p",null,p.children)},image:function(p){if(!p.node.asset)return null;var y=f("img",{src:o(p)});return p.isInline?y:f("figure",null,y)}},marks:{strong:O.bind(null,"strong"),em:O.bind(null,"em"),code:O.bind(null,"code"),underline:function(p){var v=y.useDashedStyles?{"text-decoration":"underline"}:{textDecoration:"underline"};return f("span",{style:v},p.children)},"strike-through":function(p){return f("del",null,p.children)},link:function(p){return f("a",{href:p.mark.href},p.children)}},list:function(p){var y="bullet"===p.type?"ul":"ol";return f(y,null,p.children)},listItem:function(p){var y=p.node.style&&"normal"!==p.node.style?f(p.serializers.types.block,p,p.children):p.children;return f("li",null,y)},block:function(p){var y=p.node,v=p.serializers,o=p.options,O=p.isInline,x=p.children,z=y._type,S=v.types[z];if(!S)throw new Error('Unknown block type "'+z+'", please specify a serializer for it in the `serializers.types` prop');return f(S,{node:y,options:o,isInline:O},x)},span:function(p){var y=p.node,v=y.mark,o=y.children,O="string"==typeof v?v:v._type,x=p.serializers.marks[O];return x?f(x,p.node,o):(console.warn('Unknown mark type "'+O+'", please specify a serializer for it in the `serializers.marks` prop'),f(p.serializers.markFallback,null,o))},hardBreak:function(){return f("br")},container:"div",markFallback:"span",text:void 0,empty:""},serializeSpan:function(p,y,o,O){if("\n"===p&&y.hardBreak)return f(y.hardBreak,{key:"hb-"+o});if("string"==typeof p)return y.text?f(y.text,{key:"text-"+o},p):p;var x=void 0;p.children&&(x={children:p.children.map(function(f,y){return O.serializeNode(f,y,p.children,!0)})});var z=v({},p,x);return f(y.span,{key:p._key||"span-"+o,node:z,serializers:y})}}}},287:function(f,p){f.exports=function(f){return"https://docs.sanity.io/help/"+f}},288:function(f,p,y){f.exports=y(289).default},289:function(f,p,y){"use strict";Object.defineProperty(p,"__esModule",{value:!0}),p.default=function(f){if(f&&"object"===O(f.clientConfig))return new g(null,{baseUrl:f.clientConfig.apiHost.replace(/^https:\/\/api\./,"https://cdn."),projectId:f.clientConfig.projectId,dataset:f.clientConfig.dataset});return new g(null,f)};var v,o=(v=y(290))&&v.__esModule?v:{default:v};function O(f){return(O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(f){return typeof f}:function(f){return f&&"function"==typeof Symbol&&f.constructor===Symbol&&f!==Symbol.prototype?"symbol":typeof f})(f)}function x(f,p,y){return p in f?Object.defineProperty(f,p,{value:y,enumerable:!0,configurable:!0,writable:!0}):f[p]=y,f}function z(f,p){for(var y=0;y<p.length;y++){var v=p[y];v.enumerable=v.enumerable||!1,v.configurable=!0,"value"in v&&(v.writable=!0),Object.defineProperty(f,v.key,v)}}var S=["clip","crop","fill","fillmax","max","scale","min"],P=["top","bottom","left","right","center","focalpoint","entropy"],g=function(){function f(p,y){!function(f,p){if(!(f instanceof p))throw new TypeError("Cannot call a class as a function")}(this,f),this.options=p?function(f){for(var p=1;p<arguments.length;p++){var y=null!=arguments[p]?arguments[p]:{},v=Object.keys(y);"function"==typeof Object.getOwnPropertySymbols&&(v=v.concat(Object.getOwnPropertySymbols(y).filter(function(f){return Object.getOwnPropertyDescriptor(y,f).enumerable}))),v.forEach(function(p){x(f,p,y[p])})}return f}({},p.options||{},y||{}):y||{}}var p,y,v;return p=f,(y=[{key:"withOptions",value:function(p){return new f(this,p)}},{key:"image",value:function(f){return this.withOptions({source:f})}},{key:"dataset",value:function(f){return this.withOptions({dataset:f})}},{key:"projectId",value:function(f){return this.withOptions({projectId:f})}},{key:"bg",value:function(f){return this.withOptions({bg:f})}},{key:"width",value:function(f){return this.withOptions({width:f})}},{key:"height",value:function(f){return this.withOptions({height:f})}},{key:"focalPoint",value:function(f,p){return this.withOptions({focalPoint:{x:f,y:p}})}},{key:"maxWidth",value:function(f){return this.withOptions({maxWidth:f})}},{key:"minWidth",value:function(f){return this.withOptions({minWidth:f})}},{key:"maxHeight",value:function(f){return this.withOptions({maxHeight:f})}},{key:"minHeight",value:function(f){return this.withOptions({minHeight:f})}},{key:"size",value:function(f,p){return this.withOptions({width:f,height:p})}},{key:"blur",value:function(f){return this.withOptions({blur:f})}},{key:"sharpen",value:function(f){return this.withOptions({sharpen:f})}},{key:"rect",value:function(f,p,y,v){return this.withOptions({rect:{left:f,top:p,width:y,height:v}})}},{key:"format",value:function(f){return this.withOptions({format:f})}},{key:"invert",value:function(f){return this.withOptions({invert:f})}},{key:"orientation",value:function(f){return this.withOptions({orientation:f})}},{key:"quality",value:function(f){return this.withOptions({quality:f})}},{key:"forceDownload",value:function(f){return this.withOptions({download:f})}},{key:"flipHorizontal",value:function(){return this.withOptions({flipHorizontal:!0})}},{key:"flipVertical",value:function(){return this.withOptions({flipVertical:!0})}},{key:"ignoreImageParams",value:function(){return this.withOptions({ignoreImageParams:!0})}},{key:"fit",value:function(f){if(-1===S.indexOf(f))throw new Error('Invalid fit mode "'.concat(f,'"'));return this.withOptions({fit:f})}},{key:"crop",value:function(f){if(-1===P.indexOf(f))throw new Error('Invalid crop mode "'.concat(f,'"'));return this.withOptions({crop:f})}},{key:"url",value:function(){return(0,o.default)(this.options)}},{key:"toString",value:function(){return this.url()}}])&&z(p.prototype,y),v&&z(p,v),f}()},290:function(f,p,y){"use strict";Object.defineProperty(p,"__esModule",{value:!0}),p.default=function(f){var p=x({},f||{}),y=p.source;delete p.source;var O=(0,v.default)(y);if(!O)return null;var z=(0,o.default)(O.asset._ref||O.asset._id),P={left:Math.round(O.crop.left*z.width),top:Math.round(O.crop.top*z.height)};P.width=Math.round(z.width-O.crop.right*z.width-P.left),P.height=Math.round(z.height-O.crop.bottom*z.height-P.top);var g=O.hotspot.height*z.height/2,E=O.hotspot.width*z.width/2,_=O.hotspot.x*z.width,H=O.hotspot.y*z.height,U={left:_-E,top:H-g,right:_+E,bottom:H+g};p.asset=z,p.rect||p.focalPoint||p.ignoreImageParams||p.crop||(p=x({},p,function(f,p){var y={width:p.width,height:p.height};if(!p.width||!p.height)return y.rect=f.crop,y;var v=f.crop,o=f.hotspot,O=p.width/p.height;if(v.width/v.height>O){var x=v.height,z=x*O,S=v.top,P=(o.right-o.left)/2+o.left,g=P-z/2;return g<v.left?g=v.left:g+z>v.left+v.width&&(g=v.left+v.width-z),y.rect={left:Math.round(g),top:Math.round(S),width:Math.round(z),height:Math.round(x)},y}var E=v.width,_=E/O,H=v.left,U=(o.bottom-o.top)/2+o.top-_/2;U<v.top?U=v.top:U+_>v.top+v.height&&(U=v.top+v.height-_);return y.rect={left:Math.max(0,Math.floor(H)),top:Math.max(0,Math.floor(U)),width:Math.round(E),height:Math.round(_)},y}({crop:P,hotspot:U},p)));return function(f){var p=f.baseUrl||"https://cdn.sanity.io",y="".concat(f.asset.id,"-").concat(f.asset.width,"x").concat(f.asset.height,".").concat(f.asset.format),v="".concat(p,"/images/").concat(f.projectId,"/").concat(f.dataset,"/").concat(y),o=[];if(f.rect){var O=0!=f.rect.left||0!=f.rect.top||f.rect.height!=f.asset.height||f.rect.width!=f.asset.width;O&&o.push("rect=".concat(f.rect.left,",").concat(f.rect.top,",").concat(f.rect.width,",").concat(f.rect.height))}f.bg&&o.push("bg=".concat(f.bg));f.focalPoint&&(o.push("fp-x=".concat(f.focalPoint.x)),o.push("fp-x=".concat(f.focalPoint.y)));(f.flipHorizontal||f.flipVertical)&&o.push("flip=".concat(f.flipHorizontal?"h":"").concat(f.flipVertical?"v":""));if(S.forEach(function(p){var y,v,O=(v=2,function(f){if(Array.isArray(f))return f}(y=p)||function(f,p){var y=[],v=!0,o=!1,O=void 0;try{for(var x,z=f[Symbol.iterator]();!(v=(x=z.next()).done)&&(y.push(x.value),!p||y.length!==p);v=!0);}catch(S){o=!0,O=S}finally{try{v||null==z.return||z.return()}finally{if(o)throw O}}return y}(y,v)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()),x=O[0],z=O[1];void 0!==f[x]?o.push("".concat(z,"=").concat(encodeURIComponent(f[x]))):void 0!==f[z]&&o.push("".concat(z,"=").concat(encodeURIComponent(f[z])))}),0===o.length)return v;return"".concat(v,"?").concat(o.join("&"))}(p)},Object.defineProperty(p,"parseSource",{enumerable:!0,get:function(){return v.default}});var v=O(y(291)),o=O(y(292));function O(f){return f&&f.__esModule?f:{default:f}}function x(f){for(var p=1;p<arguments.length;p++){var y=null!=arguments[p]?arguments[p]:{},v=Object.keys(y);"function"==typeof Object.getOwnPropertySymbols&&(v=v.concat(Object.getOwnPropertySymbols(y).filter(function(f){return Object.getOwnPropertyDescriptor(y,f).enumerable}))),v.forEach(function(p){z(f,p,y[p])})}return f}function z(f,p,y){return p in f?Object.defineProperty(f,p,{value:y,enumerable:!0,configurable:!0,writable:!0}):f[p]=y,f}var S=[["width","w"],["height","h"],["format","fm"],["download","dl"],["blur","blur"],["sharpen","sharp"],["invert","invert"],["orientation","or"],["minHeight","min-h"],["maxHeight","max-h"],["minWidth","min-w"],["maxWidth","max-w"],["quality","q"],["fit","fit"],["crop","crop"]]},291:function(f,p,y){"use strict";function v(f){return(v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(f){return typeof f}:function(f){return f&&"function"==typeof Symbol&&f.constructor===Symbol&&f!==Symbol.prototype?"symbol":typeof f})(f)}function o(f){var p=f.split("/").slice(-1);return"image-".concat(p[0]).replace(/\.([a-z]+)$/,"-$1")}Object.defineProperty(p,"__esModule",{value:!0}),p.default=function(f){if(!f)return null;var p;if("string"==typeof f&&(y=f,/^https?:\/\//.test("".concat(y))))p={asset:{_ref:o(f)}};else if("string"==typeof f)p={asset:{_ref:f}};else if("string"==typeof f._ref)p={asset:f};else if(f._id)p={asset:{_ref:f._id}};else if(f.asset&&f.asset.url&&!f.asset._ref)p={asset:{_ref:o(f.asset.url)}};else{if("object"!==v(f.asset))return null;p=f}var y;f.crop&&(p.crop=f.crop);f.hotspot&&(p.hotspot=f.hotspot);return function(f){if(f.crop&&f.hotspot)return f;var p=Object.assign({},f);p.crop||(p.crop={left:0,top:0,bottom:0,right:0});p.hotspot||(p.hotspot={x:.5,y:.5,height:1,width:1});return p}(p)}},292:function(f,p,y){"use strict";function v(f,p){return function(f){if(Array.isArray(f))return f}(f)||function(f,p){var y=[],v=!0,o=!1,O=void 0;try{for(var x,z=f[Symbol.iterator]();!(v=(x=z.next()).done)&&(y.push(x.value),!p||y.length!==p);v=!0);}catch(S){o=!0,O=S}finally{try{v||null==z.return||z.return()}finally{if(o)throw O}}return y}(f,p)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}Object.defineProperty(p,"__esModule",{value:!0}),p.default=function(f){var p=v(f.split("-"),4),y=p[1],O=p[2],x=p[3];if(!y||!O||!x)throw new Error("Malformed asset _ref '".concat(f,"'. Expected an id like \"").concat(o,'".'));var z=v(O.split("x"),2),S=z[0],P=z[1],g=+S,E=+P;if(!isFinite(g)||!isFinite(E))throw new Error("Malformed asset _ref '".concat(f,"'. Expected an id like \"").concat(o,'".'));return{id:y,width:g,height:E,format:x}};var o="image-Tb9Ew8CXIwaY6R1kjMvI0uRR-2000x3000-jpg"},293:function(f,p,y){"use strict";var v=y(52),o=y(294),O=y(295),x=y(296),z=y(204),S=["projectId","dataset","imageOptions"],P=function(f){return void 0!==f},g={imageOptions:{}};function E(f){return"block"===f._type&&f.listItem}f.exports=function(f,p,y,_){var H=v({},g,p),U=Array.isArray(H.blocks)?H.blocks:[H.blocks],q=x(U),R=O(q,H.listNestMode),W=z(y,H.serializers||{}),D=S.reduce(function(f,p){var y=H[p];return P(y)&&(f[p]=y),f},{});function T(p,y,v,O){return"list"===(H=p)._type&&H.listItem?(z=(x=p).listItem,S=x.level,P=x._key,g=x.children.map(T),f(W.list,{key:P,level:S,type:z,options:D},g)):E(p)?function(p,y){var v=p._key,O=o(p).map(T);return f(W.listItem,{node:p,serializers:W,index:y,key:v,options:D},O)}(p,function(f,p){for(var y=0,v=0;v<p.length;v++){if(p[v]===f)return y;E(p[v])&&y++}return y}(p,v)):function(f){return"string"==typeof f||f.marks||"span"===f._type}(p)?_(p,W,y,{serializeNode:T}):function(p,y,v){var O=o(p).map(function(f,p,y){return T(f,p,y,!0)}),x={key:p._key||"block-"+y,node:p,isInline:v,serializers:W,options:D};return f(W.block,x,O)}(p,y,O);var x,z,S,P,g,H}var V=Boolean(H.renderContainerOnSingleChild),J=R.map(T);if(V||J.length>1){var K=H.className?{className:H.className}:{};return f(W.container,K,J)}return J[0]?J[0]:"function"==typeof W.empty?f(W.empty):W.empty}},294:function(f,p,y){"use strict";var v=["strong","em","code","underline","strike-through"];function o(f,p,y){if(!f.marks||0===f.marks.length)return f.marks||[];var o=f.marks.reduce(function(f,v){f[v]=f[v]?f[v]+1:1;for(var o=p+1;o<y.length;o++){var O=y[o];if(!O.marks||!Array.isArray(O.marks)||-1===O.marks.indexOf(v))break;f[v]++}return f},{}),O=function(f,p,y){var o=f[p]||0,O=f[y]||0;if(o!==O)return O-o;var x=v.indexOf(p),z=v.indexOf(y);if(x!==z)return x-z;if(p<y)return-1;if(p>y)return 1;return 0}.bind(null,o);return f.marks.slice().sort(O)}f.exports=function(f){var p=f.children,y=f.markDefs;if(!p||!p.length)return[];var v=p.map(o),O={_type:"span",children:[]},x=[O];return p.forEach(function(f,p){var o=v[p];if(o){var O=1;if(x.length>1)for(;O<x.length;O++){var z=x[O].markKey,S=o.indexOf(z);if(-1===S)break;o.splice(S,1)}var P,g=function(f){for(var p=f.length-1;p>=0;p--){var y=f[p];if("span"===y._type&&y.children)return y}}(x=x.slice(0,O));if(o.forEach(function(p){var v={_type:"span",_key:f._key,children:[],mark:y.find(function(f){return f._key===p})||p,markKey:p};g.children.push(v),x.push(v),g=v}),"span"!==(P=f)._type||"string"!=typeof P.text||!Array.isArray(P.marks)&&void 0!==P.marks)g.children=g.children.concat(f);else{for(var E=f.text.split("\n"),_=E.length;_-- >1;)E.splice(_,0,"\n");g.children=g.children.concat(E)}}else x[x.length-1].children.push(f)}),O.children}},295:function(f,p,y){"use strict";var v=y(52);function o(f){return Boolean(f.listItem)}function O(f,p){return f.level===p.level&&f.listItem===p.listItem}function x(f){return{_type:"list",_key:f._key+"-parent",level:f.level,listItem:f.listItem,children:[f]}}function z(f){return f.children&&f.children[f.children.length-1]}function S(f,p){var y="string"==typeof p.listItem;if("list"===f._type&&f.level===p.level&&y&&f.listItem===p.listItem)return f;var v=z(f);return!!v&&S(v,p)}f.exports=function(f){for(var p=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"html",y=[],P=void 0,g=0;g<f.length;g++){var E=f[g];if(o(E))if(P)if(O(E,P))P.children.push(E);else if(E.level>P.level){var _=x(E);if("html"===p){var H=z(P),U=v({},H,{children:H.children.concat(_)});P.children[P.children.length-1]=U}else P.children.push(_);P=_}else if(E.level<P.level){var q=S(y[y.length-1],E);if(q){(P=q).children.push(E);continue}P=x(E),y.push(P)}else if(E.listItem===P.listItem)console.warn("Unknown state encountered for block",E),y.push(E);else{var R=S(y[y.length-1],{level:E.level});if(R&&R.listItem===E.listItem){(P=R).children.push(E);continue}P=x(E),y.push(P)}else P=x(E),y.push(P);else y.push(E),P=null}return y}},296:function(f,p,y){"use strict";var v=y(52);function o(f){var p=0,y=f.length;if(0===y)return p;for(var v=0;v<y;v++)p=(p<<5)-p+f.charCodeAt(v),p&=p;return p}f.exports=function(f){return f.map(function(f){return f._key?f:v({_key:(p=f,o(JSON.stringify(p)).toString(36).replace(/[^A-Za-z0-9]/g,""))},f);var p})}},297:function(f,p,y){"use strict";var v=y(0),o=(0,y(202).getSerializers)(v.createElement),O=o.defaultSerializers,x=o.serializeSpan;f.exports={serializeSpan:x,serializers:O,renderProps:{nestMarks:!0}}}}]);
//# sourceMappingURL=3-7ffe051bf5fa73f81d3d.js.map