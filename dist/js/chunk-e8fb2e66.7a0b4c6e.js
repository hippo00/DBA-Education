(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e8fb2e66"],{"11a9":function(t,i,a){"use strict";a.r(i);var e=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"container",on:{scroll:t.handleScroll}},[a("Breadcrumb"),t.pageConfig&&!t.pageConfig.tiles?a("section",{staticClass:"banner",class:{active:t.isActive},attrs:{"data-name":t.pageConfig.name}},[a("h1",{staticClass:"banner__title"},[t._v(t._s(t.pageConfig.name))]),a("div",{staticClass:"banner__btns"},[a("div",{staticClass:"banner__btnLike"},[a("button",{staticClass:"banner__btn banner__btn--like",on:{keyup:t.submitLike,click:t.submitLike}},[a("font-awesome-icon",{staticClass:"btn--like",attrs:{size:"1x",icon:"thumbs-up"}}),t.likes?a("span",[t._v(t._s(t.likes))]):t._e()],1)]),a("div",{staticClass:"banner__btnDislike"},[a("button",{staticClass:"banner__btn banner__btn--dislike",on:{keyup:t.submitDislike,click:t.submitDislike}},[a("font-awesome-icon",{staticClass:"btn--dislike",attrs:{size:"1x",icon:"thumbs-down"}}),t.dislikes?a("span",[t._v(t._s(t.dislikes))]):t._e()],1)])])]):t._e(),t.topics?a("section",{staticClass:"topics"},t._l(t.topics,function(i,e){return a("span",{key:e,staticClass:"tag",attrs:{tabindex:"0"},on:{keyup:function(a){return!a.type.indexOf("key")&&t._k(a.keyCode,"enter",13,a.key,"Enter")?null:t.searchTopic(i)},click:function(a){return t.searchTopic(i)}}},[t._v(t._s(i))])}),0):t._e(),a("vue-markdown",{staticClass:"content",attrs:{source:t.markdown}}),t.pageConfig.tiles?a("ul",{staticClass:"cards"},t._l(t.pageConfig.tiles,function(i,e){return a("li",{key:e,staticClass:"card",style:{backgroundColor:i.bgColor}},[a("router-link",{attrs:{to:i.path}},["watson"!==i.icon?a("font-awesome-icon",{staticClass:"card__icon",attrs:{size:"2x",icon:i.icon}}):t._e(),"watson"===i.icon?a("svg",{staticStyle:{"enable-background":"new 0 0 480 480"},attrs:{xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"72px",height:"72px",viewBox:"0 0 480 480","xml:space":"preserve"}},[a("g",[a("path",{staticStyle:{fill:"#2d74da"},attrs:{d:"M270.722,284.171c16.793-67.911,14.472-122.761-0.906-129.351c-0.091-0.041-0.185-0.049-0.276-0.091 l-1.185,9.953c0.082,0.008,0.177,0,0.263,0.021c11.632,2.778,9.245,72.056-2.75,120.588 c-11.974,48.442-42.157,110.129-52.702,104.675l-3.4,8.446c0.284,0.099,0.539,0.272,0.823,0.354 C226.672,403.418,253.933,352.086,270.722,284.171"}}),a("path",{staticStyle:{fill:"#2d74da"},attrs:{d:"M289.016,381.37c-30.973-0.642-69.327-18.625-101.576-50.545 c-49.742-49.277-66.408-113.405-37.131-142.983l7.421,7.343c-25.227,25.478-13.764,87.067,31.899,132.278 c45.647,45.215,108.491,57.217,133.726,31.747l7.405,7.339C320.471,376.949,305.826,381.707,289.016,381.37"}}),a("path",{staticStyle:{fill:"#2d74da"},attrs:{d:"M292.054,177.601c19.452,0,35.929,6.071,46.376,18.712l-8.047,6.639 c-22.848-27.643-86.548-21.91-136.077,19.02c-49.545,40.938-66.441,101.823-43.601,129.47l-8.051,6.643 c-26.503-32.072-4.161-94.459,49.813-139.065C225.176,191.979,262.13,177.601,292.054,177.601"}}),a("path",{staticStyle:{fill:"#2d74da"},attrs:{d:"M125.724,295.424c-5.87-7.265,39.901-31.702,111.689-43.005 c71.508-11.257,117.822-2.05,118.238,6.524l10.323-1.544c-4.478-27.915-124.766-9.29-129.886-8.483 c-5.116,0.807-125.379,20.074-120.991,48.047c0.016,0.033,0.025,0.066,0.033,0.086l10.607-1.605 C125.728,295.441,125.724,295.424,125.724,295.424"}}),a("path",{staticStyle:{fill:"#2d74da"},attrs:{d:"M185.239,334.803c-4.956,0-8.981-4.042-8.981-8.981c0-4.968,4.025-8.981,8.981-8.981 c4.964,0,8.973,4.013,8.973,8.981C194.212,330.761,190.203,334.803,185.239,334.803"}}),a("path",{staticStyle:{fill:"#2d74da"},attrs:{d:"M184.727,237.514c-4.943,0-8.973-4.025-8.973-8.973c0-4.96,4.03-8.985,8.973-8.985 c4.956,0,8.981,4.025,8.981,8.985C193.708,233.488,189.683,237.514,184.727,237.514"}}),a("path",{staticStyle:{fill:"#2d74da"},attrs:{d:"M255.804,254.884c-3.89,0-7.055-3.157-7.055-7.059c0-3.881,3.165-7.051,7.055-7.051 c3.894,0,7.059,3.169,7.059,7.051C262.863,251.727,259.697,254.884,255.804,254.884"}}),a("path",{staticStyle:{fill:"#2d74da"},attrs:{d:"M271.502,278.858c-4.952,0-8.977-4.021-8.977-8.965c0-4.964,4.026-8.99,8.977-8.99 c4.947,0,8.977,4.026,8.977,8.99C280.479,274.837,276.449,278.858,271.502,278.858"}}),a("path",{staticStyle:{fill:"#2d74da"},attrs:{d:"M338.426,196.31c26.511,32.072,6.088,95.653-47.878,140.259 c-53.974,44.602-121.386,53.595-147.894,21.527l8.055-6.652c15.571,26.092,83.716,18.609,133.253-22.334 c49.533-40.93,68.907-104.651,46.425-126.161L338.426,196.31z"}}),a("path",{staticStyle:{fill:"#2d74da"},attrs:{d:"M330.775,366.549l-7.417-7.335c25.227-25.483,9.767-84.181-35.896-129.396 c-45.655-45.215-104.498-60.115-129.73-34.632l-7.421-7.339c29.286-29.57,95.32-14.682,145.07,34.583 C345.127,271.687,360.044,336.975,330.775,366.549"}}),a("path",{staticStyle:{fill:"#2d74da"},attrs:{d:"M245.8,307.588c15.76-2.293,124.576-22.194,120.176-50.158l-0.004-0.029l-10.315,1.539v0.021 c0.189,7.965-40.93,27.195-112.664,38.502c-71.747,11.307-112.467,6.33-117.258-2.021l-10.603,1.613 C121.475,324.843,226.624,310.371,245.8,307.588"}}),a("path",{staticStyle:{fill:"#2d74da"},attrs:{d:"M233.784,124.234V82.559c0-3.733,3.005-6.738,6.738-6.738c3.729,0,6.767,3.005,6.767,6.738v41.675 c0,3.725-3.038,6.755-6.767,6.755C236.789,130.988,233.784,127.959,233.784,124.234"}}),a("path",{staticStyle:{fill:"#2d74da"},attrs:{d:"M306.939,146.725c-2.424-1.152-3.836-3.581-3.836-6.1c0-0.971,0.214-1.972,0.667-2.894 l17.975-37.596c1.165-2.424,3.593-3.824,6.104-3.824c0.967,0,1.959,0.202,2.894,0.667c2.428,1.14,3.849,3.573,3.849,6.079 c0,0.98-0.206,1.976-0.663,2.914l-17.991,37.575c-1.152,2.42-3.564,3.844-6.079,3.844 C308.873,147.392,307.877,147.174,306.939,146.725"}}),a("path",{staticStyle:{fill:"#2d74da"},attrs:{d:"M170.89,146.725c-0.939,0.449-1.926,0.667-2.902,0.667c-2.519,0-4.939-1.424-6.092-3.844 l-17.983-37.575c-0.461-0.939-0.679-1.935-0.679-2.914c0-2.507,1.428-4.939,3.857-6.079c0.938-0.465,1.922-0.667,2.906-0.667 c2.503,0,4.927,1.399,6.096,3.824l17.983,37.596c0.445,0.922,0.659,1.922,0.659,2.894 C174.734,143.144,173.322,145.572,170.89,146.725"}}),a("path",{staticStyle:{fill:"#2d74da"},attrs:{d:"M356.313,188.522c-0.692-1.103-1.013-2.325-1.013-3.556c0-2.251,1.124-4.462,3.177-5.746 l35.39-21.972c1.115-0.687,2.342-1.025,3.564-1.025c2.256,0,4.458,1.124,5.738,3.186c0.7,1.128,1.013,2.346,1.013,3.556 c0,2.272-1.12,4.466-3.173,5.754l-35.406,21.963c-1.111,0.708-2.334,1.025-3.56,1.025 C359.795,191.708,357.585,190.588,356.313,188.522"}}),a("path",{staticStyle:{fill:"#2d74da"},attrs:{d:"M123.692,188.522c-1.28,2.066-3.474,3.186-5.73,3.186c-1.218,0-2.449-0.317-3.552-1.025 L79.016,168.72c-2.058-1.288-3.198-3.482-3.198-5.754c0-1.21,0.329-2.428,1.029-3.556c1.264-2.062,3.474-3.186,5.734-3.186 c1.214,0,2.445,0.338,3.56,1.025l35.39,21.972c2.046,1.284,3.182,3.495,3.182,5.746 C124.712,186.197,124.387,187.419,123.692,188.522"}}),a("path",{staticStyle:{fill:"#2d74da"},attrs:{d:"M238.59,316.146c-7.784,0-14.118-6.326-14.118-14.11s6.335-14.11,14.118-14.11 c7.775,0,14.106,6.326,14.106,14.11S246.365,316.146,238.59,316.146"}}),a("path",{staticStyle:{fill:"#2d74da"},attrs:{d:"M306.632,258.708c-8.487,0-15.39-6.915-15.39-15.39c0-8.491,6.903-15.394,15.39-15.394 c8.483,0,15.39,6.903,15.39,15.394C322.022,251.793,315.115,258.708,306.632,258.708"}}),a("path",{staticStyle:{fill:"#2d74da"},attrs:{d:"M289.91,347.319c-9.191,0-16.666-7.475-16.666-16.666c0-9.191,7.475-16.682,16.666-16.682 c9.199,0,16.682,7.491,16.682,16.682C306.592,339.844,299.109,347.319,289.91,347.319"}}),a("path",{staticStyle:{fill:"#2d74da"},attrs:{d:"M218.944,270.861c-10.615,0-19.247-8.631-19.247-19.238c0-10.611,8.631-19.247,19.247-19.247 c10.603,0,19.242,8.635,19.242,19.247C238.187,262.229,229.547,270.861,218.944,270.861"}}),a("path",{staticStyle:{fill:"#2d74da"},attrs:{d:"M213.093,389.939c-13.678-7.561-5.972-71.072,6.03-119.637 c11.92-48.232,35.859-107.997,49.24-105.618l1.181-9.957c-15.695-6.096-44.248,38.444-61.358,114.159 c-18.456,81.63-16.966,122.946,1.581,129.528l3.408-8.45C213.151,389.951,213.118,389.951,213.093,389.939"}}),a("path",{staticStyle:{fill:"#2d74da"},attrs:{d:"M240.54,160.653c-64.26,0-116.546,52.282-116.546,116.542c0,64.268,52.286,116.55,116.546,116.55 c64.264,0,116.542-52.282,116.542-116.55C357.082,212.935,304.804,160.653,240.54,160.653 M240.54,404.179 c-70.01,0-126.989-56.974-126.989-126.984c0-70.022,56.979-126.976,126.989-126.976c70.014,0,126.98,56.954,126.98,126.976 C367.52,347.205,310.554,404.179,240.54,404.179"}})])]):t._e(),a("h4",{staticClass:"card__title"},[t._v(t._s(i.name))])],1)],1)}),0):t._e()],1)},s=[],c=(a("7f7f"),a("ac4d"),a("8a81"),a("ac6a"),a("8f8a")),n=a("bc3a"),l=a.n(n),o=function(){return a.e("chunk-3d709b4a").then(a.t.bind(null,"9ce6",7))},r=function(){return a.e("chunk-06178758").then(a.bind(null,"2fbc"))},d={components:{VueMarkdown:o,Breadcrumb:r},data:function(){return{markdown:"",lastModified:"",pageConfig:{},tocItems:c["a"].getPages(),isActive:!1,container:null,initialScroll:!1,isCommentOpen:!1,comment:"",likes:0,dislikes:0,topics:null}},mounted:function(){var t=this;this.initialize(this.$router.currentRoute.path),setTimeout(function(){t.scrollTo(t.$route.hash)},150),this.container=document.querySelector("main > .container"),this.container&&this.container.addEventListener("scroll",function(t){}),setTimeout(function(){var t=document.querySelectorAll("iframe"),i=!0,a=!1,e=void 0;try{for(var s,c=t[Symbol.iterator]();!(i=(s=c.next()).done);i=!0){var n=s.value;n.addEventListener("load",function(){})}}catch(l){a=!0,e=l}finally{try{i||null==c.return||c.return()}finally{if(a)throw e}}},150)},watch:{$route:function(t,i){var a=this;t.path!==i.path?(this.pageConfig=t.meta,this.initialize()):setTimeout(function(){t.hash&&(a.scrollTo(t.hash),"#toc"===t.hash.toLowerCase()&&a.$router.push({path:t.path}))},10)}},methods:{searchTopic:function(t){var i="topic:".concat(t),a=Object.assign({},this.$route.query,{search:i});this.$router.push({query:a})},submitComment:function(){this.comment="",this.isCommentOpen=!1},submitLike:function(){var t=this.$router.currentRoute.path;this.likes=this.likes+1,l.a.post("https://merlin-playbook-api.mybluemix.net/add_likes",{route:t,amount:1})},submitDislike:function(){var t=this.$router.currentRoute.path;this.dislikes=this.dislikes+1,l.a.post("https://merlin-playbook-api.mybluemix.net/add_dislikes",{route:t,amount:1})},onLoadIFrame:function(t){},getLikes:function(){var t=this,i=this.$router.currentRoute.path;l.a.post("https://merlin-playbook-api.mybluemix.net/likes",{route:i}).then(function(i){t.likes=i.data.likes})},getDislikes:function(){var t=this,i=this.$router.currentRoute.path;l.a.post("https://merlin-playbook-api.mybluemix.net/dislikes",{route:i}).then(function(i){t.dislikes=i.data.dislikes})},initialize:function(t){var i=this;if(this.topics=null,!this.pageConfig.name){var a=this.$router.currentRoute.path;this.pageConfig=c["a"].getMetaById(a)}var e=this.$router.currentRoute.path;if(l.a.post("https://merlin-playbook-api.mybluemix.net/visit",{route:e}).then(function(t){}),this.getLikes(),this.getDislikes(),this.markdown="",void 0!==this.pageConfig.markdown){var s=window.location.pathname,n="".concat(s.substring(0,s.length-1)).concat(this.pageConfig.markdown);this.topics=this.pageConfig.topics;var o={headers:{"Cache-Control":"no-cache"}};l.a.get(n,o).then(function(t){i.lastModified=t.headers["last-modified"],i.markdown=t.data}).catch(function(){document.location.reload(!0)})}},routeTo:function(t){},handleScroll:function(t){t.target.scrollTop>=155?this.isActive=!0:this.isActive=!1},scrollTo:function(t){if(t){var i=document.querySelector(".content ".concat(t.toLowerCase()));i&&(i.scrollIntoView(!0),this.initialScroll=!0)}else document.querySelector("main > .container").scrollTo(0,0),this.initialScroll=!0}}},u=d,h=(a("a102"),a("2877")),p=Object(h["a"])(u,e,s,!1,null,"267944b0",null);i["default"]=p.exports},"655d":function(t,i,a){},a102:function(t,i,a){"use strict";var e=a("655d"),s=a.n(e);s.a}}]);
//# sourceMappingURL=chunk-e8fb2e66.7a0b4c6e.js.map