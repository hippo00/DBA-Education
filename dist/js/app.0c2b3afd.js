(function(e){function n(n){for(var t,i,s=n[0],c=n[1],d=n[2],m=0,l=[];m<s.length;m++)i=s[m],r[i]&&l.push(r[i][0]),r[i]=0;for(t in c)Object.prototype.hasOwnProperty.call(c,t)&&(e[t]=c[t]);w&&w(n);while(l.length)l.shift()();return a.push.apply(a,d||[]),o()}function o(){for(var e,n=0;n<a.length;n++){for(var o=a[n],t=!0,i=1;i<o.length;i++){var s=o[i];0!==r[s]&&(t=!1)}t&&(a.splice(n--,1),e=c(c.s=o[0]))}return e}var t={},i={app:0},r={app:0},a=[];function s(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-a5c18b10":"5fdd9755","chunk-06178758":"3d32a7e6","chunk-3d709b4a":"264dd1f1"}[e]+".js"}function c(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,c),o.l=!0,o.exports}c.e=function(e){var n=[],o={"chunk-a5c18b10":1,"chunk-06178758":1};i[e]?n.push(i[e]):0!==i[e]&&o[e]&&n.push(i[e]=new Promise(function(n,o){for(var t="css/"+({}[e]||e)+"."+{"chunk-a5c18b10":"d7d30054","chunk-06178758":"8a0e0b57","chunk-3d709b4a":"31d6cfe0"}[e]+".css",r=c.p+t,a=document.getElementsByTagName("link"),s=0;s<a.length;s++){var d=a[s],m=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(m===t||m===r))return n()}var l=document.getElementsByTagName("style");for(s=0;s<l.length;s++){d=l[s],m=d.getAttribute("data-href");if(m===t||m===r)return n()}var w=document.createElement("link");w.rel="stylesheet",w.type="text/css",w.onload=n,w.onerror=function(n){var t=n&&n.target&&n.target.src||r,a=new Error("Loading CSS chunk "+e+" failed.\n("+t+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=t,delete i[e],w.parentNode.removeChild(w),o(a)},w.href=r;var u=document.getElementsByTagName("head")[0];u.appendChild(w)}).then(function(){i[e]=0}));var t=r[e];if(0!==t)if(t)n.push(t[2]);else{var a=new Promise(function(n,o){t=r[e]=[n,o]});n.push(t[2]=a);var d,m=document.createElement("script");m.charset="utf-8",m.timeout=120,c.nc&&m.setAttribute("nonce",c.nc),m.src=s(e),d=function(n){m.onerror=m.onload=null,clearTimeout(l);var o=r[e];if(0!==o){if(o){var t=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src,a=new Error("Loading chunk "+e+" failed.\n("+t+": "+i+")");a.type=t,a.request=i,o[1](a)}r[e]=void 0}};var l=setTimeout(function(){d({type:"timeout",target:m})},12e4);m.onerror=m.onload=d,document.head.appendChild(m)}return Promise.all(n)},c.m=e,c.c=t,c.d=function(e,n,o){c.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,n){if(1&n&&(e=c(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(c.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var t in e)c.d(o,t,function(n){return e[n]}.bind(null,t));return o},c.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(n,"a",n),n},c.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},c.p="/dba-support/DBA-Education/",c.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],m=d.push.bind(d);d.push=n,d=d.slice();for(var l=0;l<d.length;l++)n(d[l]);var w=m;a.push([0,"chunk-vendors"]),o()})({0:function(e,n,o){e.exports=o("56d7")},"56d7":function(e,n,o){"use strict";o.r(n);o("cadf"),o("551c"),o("f751"),o("097d");var t=o("2b0e"),i=function(){var e=this,n=e.$createElement,o=e._self._c||n;return o("div",{attrs:{id:"app"}},[o("Header",{on:{toggleMenu:e.toggleMenu}}),o("main",[o("nav",{staticClass:"main__nav",class:{active:e.isNavOpen}},[o("div",{staticClass:"nav__search"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.searchKeywords,expression:"searchKeywords"}],staticClass:"nav__search-input",attrs:{placeholder:"Type to search"},domProps:{value:e.searchKeywords},on:{keyup:e.search,input:function(n){n.target.composing||(e.searchKeywords=n.target.value)}}}),e.searchResultsVisible?o("svg",{staticClass:"nav__search-icon",attrs:{tabindex:"0",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 52 52"},on:{click:e.reset,keyup:function(n){return!n.type.indexOf("key")&&e._k(n.keyCode,"enter",13,n.key,"Enter")?null:e.reset(n)}}},[o("path",{attrs:{d:"M26 0C11.664 0 0 11.663 0 26s11.664 26 26 26 26-11.663 26-26S40.336 0 26 0zm0 50C12.767 50 2 39.233 2 26S12.767 2 26 2s24 10.767 24 24-10.767 24-24 24z"}}),o("path",{attrs:{d:"M35.707 16.293a.999.999 0 0 0-1.414 0L26 24.586l-8.293-8.293a.999.999 0 1 0-1.414 1.414L24.586 26l-8.293 8.293a.999.999 0 1 0 1.414 1.414L26 27.414l8.293 8.293a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414L27.414 26l8.293-8.293a.999.999 0 0 0 0-1.414z"}})]):e._e()]),o("vue-tree-navigation",{attrs:{items:e.tocItems,defaultOpenLevel:1}})],1),e.searchResultsVisible?o("div",{staticClass:"container"},[e.searchResults.length?o("h1",{staticClass:"results__heading"},[e._v(e._s(e.searchResults.length)+' results matching "'+e._s(e.searchKeywords)+'"')]):e.content?o("h1",{staticClass:"results__heading"},[e._v('No results matching "'+e._s(e.searchKeywords)+'"')]):o("h1",{staticClass:"results__heading"},[e._v("Loading...")]),e.searchResults?o("ul",{staticClass:"results__search"},e._l(e.searchResults,function(n,t){return o("li",{key:t,staticClass:"result"},[o("header",{staticClass:"result__header"},[o("router-link",{attrs:{to:n.path}},[o("h2",{staticClass:"result__title"},[e._v(e._s(n.name))])]),e._l(n.topics,function(n,t){return o("span",{key:t,staticClass:"tag",attrs:{tabindex:"0"},on:{keyup:function(o){return!o.type.indexOf("key")&&e._k(o.keyCode,"enter",13,o.key,"Enter")?null:e.searchTopic(n)},click:function(o){return e.searchTopic(n)}}},[e._v(e._s(n))])})],2),o("p",[e._v(e._s(e._f("truncate")(n.text,300,"...")))])])}),0):e._e()]):o("router-view")],1)],1)},r=[],a=o("cebc"),s=(o("a481"),o("386d"),o("ac4d"),o("8a81"),o("ac6a"),o("661c")),c=o.n(s),d=o("8f8a"),m=function(){var e=this,n=e.$createElement,o=e._self._c||n;return o("header",{staticClass:"header"},[o("div",{staticClass:"header__brand"},[o("svg",{ref:"nav__open",staticClass:"header__hamburger",attrs:{tabindex:"0",viewBox:"0 0 512 512",xmlns:"http://www.w3.org/2000/svg"},on:{keyup:function(n){return!n.type.indexOf("key")&&e._k(n.keyCode,"enter",13,n.key,"Enter")?null:e.openNavigation(n)},click:e.openNavigation}},[o("path",{attrs:{d:"M424 394H89a8 8 0 0 1 0-16h335a8 8 0 0 1 0 16zM424 265H89a8 8 0 0 1 0-16h335a8 8 0 0 1 0 16zM424 135H89a8 8 0 0 1 0-16h335a8 8 0 0 1 0 16z"}})]),o("span",{staticClass:"header__name"},[e._v(e._s(e.name)+" "),o("b")])])])},l=[],w={name:"header-component",data:function(){return{isVisible:!1,isDesktop:!1,name:d["a"].getBaseConfig().appName,list:d["a"].getBaseConfig().headerNavigation}},created:function(){window.innerWidth>=780&&(this.isDesktop=!0),window.addEventListener("resize",this.handleResize)},beforeDestroy:function(){window.removeEventListener("resize",this.handleResize)},methods:{handleResize:function(e){e.currentTarget.innerWidth>=780?this.isDesktop=!0:this.isDesktop=!1},openNavigation:function(){this.$emit("toggleMenu")},closeNavigation:function(e){this.$emit("toggleMenu")}}},u=w,p=o("2877"),h=Object(p["a"])(u,m,l,!1,null,null,null),f=h.exports,k={name:"app",data:function(){return{baseUrl:"https://pages.github.ibm.com/dba-support/DBA-Education/#",isNavOpen:!1,tocItems:d["a"].getPages(),content:null,searchResultsVisible:!1,searchResults:null,searchKeywords:null,searchIndex:null}},components:{Header:f},created:function(){var e=this;d["a"].getStatus().then(function(n){if(void 0!==n){var o=n;e.searchIndex=c()(function(){this.addField("name"),this.addField("text"),this.addField("description"),this.setRef("path");var e=!0,n=!1,t=void 0;try{for(var i,r=o[Symbol.iterator]();!(e=(i=r.next()).done);e=!0){var a=i.value;this.addDoc(a)}}catch(s){n=!0,t=s}finally{try{e||null==r.return||r.return()}finally{if(n)throw t}}}),e.content=n||[],e.searchKeywords&&e.search()}}).catch(function(){})},methods:{toggleMenu:function(){this.isNavOpen=!this.isNavOpen},search:function(e){var n=this;if(this.searchKeywords&&this.content&&this.searchIndex){var o=Object.assign({},this.$route.query,{search:this.searchKeywords});this.$router.push({query:o}),this.searchResultsVisible=!0;var t="topic:";if(this.searchKeywords.indexOf("topic:")>-1)this.searchResults=this.content.filter(function(e){for(var o=(e.topics||[]).map(function(e){return e.toLowerCase()}),i=!1,r=0;r<o.length;r++)o[r].indexOf(n.searchKeywords.toLowerCase().replace(t,""))>-1&&(i=!0);return i});else{for(var i=this.searchIndex.search(this.searchKeywords,{fields:{name:{boost:4},text:{boost:2},description:{boost:1}}}),r=0;r<i.length;r++)i[r]=Object(a["a"])({},this.searchIndex.documentStore.getDoc(i[r].ref),i[r]);this.searchResults=i}}else this.reset()},searchTopic:function(e){var n="topic:".concat(e),o=Object.assign({},this.$route.query,{search:n});this.searchKeywords=n,this.search(),this.$router.push({query:o})},reset:function(){var e=Object.assign({},this.$route.query);delete e.search,this.$router.replace({query:e}),this.searchResultsVisible=!1,this.searchKeywords="",this.searchResults=[]}},watch:{$route:{immediate:!0,handler:function(e,n){var o=window.location.href;if(o.indexOf("?")>-1&&o.indexOf("search=")>-1){var t=o.substring(o.indexOf("?")+1),i=JSON.parse('{"'+decodeURIComponent(t.replace(/&/g,'","').replace(/=/g,'": "'))+'"}');i&&i.search&&(this.searchKeywords=i.search,this.search())}else this.searchKeywords="",this.searchResultsVisible=!1}}}},g=k,b=(o("5c0b"),Object(p["a"])(g,i,r,!1,null,null,null)),A=b.exports,v=o("8c4f");t["a"].use(v["a"]);var y=new v["a"]({base:"/dba-support/DBA-Education/",routes:d["a"].getRoutingConfig()}),C=o("12d3"),S=o.n(C),P=o("ecee"),_=o("ad3d"),B=o("c074");t["a"].use(S.a),P["c"].add(B["l"],B["zb"],B["kb"],B["Y"],B["jb"],B["Eb"],B["N"],B["H"],B["I"],B["ob"],B["W"],B["qb"],B["Db"],B["D"],B["C"],B["yb"],B["vb"],B["Q"],B["B"],B["nb"],B["ab"],B["v"],B["V"],B["gb"],B["j"],B["Bb"],B["db"],B["c"],B["q"],B["R"],B["Cb"],B["T"],B["F"],B["s"],B["rb"],B["f"],B["G"],B["ub"],B["w"],B["a"],B["e"],B["z"],B["n"],B["y"],B["lb"],B["S"],B["Hb"],B["t"],B["cb"],B["E"],B["U"],B["xb"],B["wb"],B["eb"],B["X"],B["g"],B["mb"],B["tb"],B["x"],B["fb"],B["pb"],B["p"],B["J"],B["ib"],B["Z"],B["h"],B["Ab"],B["d"],B["k"],B["u"],B["m"],B["P"],B["i"],B["K"],B["b"],B["O"],B["hb"],B["sb"],B["bb"],B["Gb"],B["r"],B["o"],B["L"],B["A"],B["M"],B["Fb"]);var M=function(e,n,o){o=o||"...";var t=document.createElement("div");t.innerHTML=e;var i=t.textContent;return i.length>n?i.slice(0,n)+o:i};t["a"].filter("truncate",M),t["a"].component("font-awesome-icon",_["a"]),t["a"].config.productionTip=!1,new t["a"]({el:"#app",router:y,render:function(e){return e(A)}})},"5c0b":function(e,n,o){"use strict";var t=o("5e27"),i=o.n(t);i.a},"5e27":function(e,n,o){},"8f8a":function(e,n,o){"use strict";o("7f7f");var t=o("ac4b"),i=o("bc3a"),r=o.n(i),a="https://hooks.slack.com/services/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",s=function(){return o.e("chunk-a5c18b10").then(o.bind(null,"11a9"))},c={};function d(e,n){e.path=e.route,e.breadCrumb=n?JSON.parse(JSON.stringify(n.breadCrumb)):[];var o=null!=n?n.path+e.route:"/";e.breadCrumb.push({name:e.name,path:o}),e.component=s,null!=n&&(e.path=n.path+e.route);var t=[];if(e.children)for(var i in e.children){var r=e.children[i];t.push({name:r.name,description:r.description,path:e.path+r.route,icon:r.icon,bgColor:r.bgColor,owner:r.owner,topics:r.topics}),d(r,e)}e.meta={tiles:t.length>0?t:null,name:e.name,description:e.description,markdown:e.markdown,icon:e.icon,bgColor:e.bgColor,owner:e.owner,topics:e.topics,breadCrumb:e.breadCrumb},c[e.path]=e.meta}function m(e){var n=JSON.parse(JSON.stringify(e.pages));for(var o in n){var t=n[o];d(t,null)}return n.push({path:"/",redirect:e.landingPage}),n}n["a"]={getMetaById:function(e){return c[e]},traverse:function(e){if(e.name&&(e.title=e.name,delete e.name),Array.isArray(e.children))for(var n=0;n<e.children.length;n++)this.traverse(e.children[n])},getRoutingConfig:function(){var e=m(this.getBaseConfig());return this.traverse(e[0]),e},getContent:function(e,n){return new Promise(function(o,t){var i={name:e.name,description:e.description,owner:e.owner,path:n?"".concat(n).concat(e.route):e.route,text:"",wordCount:0,topics:e.topics};return e.markdown?o(i):(e.children&&(i.type="TOC"),o(i))})},getBaseConfig:function(){return t},getPages:function(){return this.getBaseConfig().pages},getStatus:function(){return new Promise(function(e,n){var o="./content.json";r.a.get(o).then(function(n){e(n.data)}).catch(function(e){return n(e)})})},sendSlackMessage:function(e,n){var o="https://pages.github.ibm.com/dba-support/DBA-Education/#"+e,t=o+" : "+n,i={text:t};r.a.post(a,JSON.stringify(i)).then(function(e){}).catch(function(e){console.error("FAILED: Send slack webhook",e)})}}},ac4b:function(e){e.exports={appName:"DBA Support Education Platform",headerNavigation:[{name:"DBA-Education",path:"/DBA-Education"}],landingPage:"/manual",topics:["news","roles","access","process","reporting","notification","pager-duty","customer","case-status","e2c","case-field","omni","routing","assignment","product","case","account","contact","work-order","skills-case","collab-case","activity","defect","chat","search","watson","knowledge","attachment","field-service","teams","support-mission","time","caseview","policy","deepdive","portal","entitlement","chatter"],pages:[{route:"/manual",name:"Bussiness Process Manager",description:"",icon:"bullhorn",children:[{route:"/whatsNew",name:"General BPM",description:"BPM BPM BPM",icon:"bullhorn",topics:[],children:[{route:"/huaweiannouncement1",name:"Learning roadmap",description:"",icon:"bullhorn",topics:[],markdown:"/markdown/whatsnew/Aefiles.md"},{route:"/Whatscoming101911212",name:"New hire training (Foundation course review)",description:"",icon:"bullhorn",topics:[],markdown:"/markdown/whatsnew/Aefiles.md"},{route:"/Releasenote",name:"Knowledge buckets",description:"",icon:"bullhorn",topics:[],markdown:"/markdown/whatsnew/Aefiles.md"},{route:"/Whats",name:"Skills Transfer (L3-L2, SWAT-L2)",description:"",icon:"bullhorn",topics:[],markdown:"/markdown/whatsnew/Aefiles.md"},{route:"/Rel",name:"CFs Training Enablement",description:"",icon:"bullhorn",topics:[],markdown:"/markdown/whatsnew/Aefiles.md"}]},{route:"/helpful-links",name:"Install, Upgrade, Migration",description:"",icon:"question-circle",topics:[],children:[{route:"/faq1212",name:"Install/DE Config",description:"",topics:[],icon:"question-circle",markdown:"/markdown/whatsnew/Aefiles.md"},{route:"/faq2323",name:"Upgrade",description:"",topics:[],icon:"question-circle",markdown:"/markdown/whatsnew/Aefiles.md"},{route:"/faq3434",name:"Migration",description:"",topics:[],icon:"question-circle",markdown:"/markdown/whatsnew/Aefiles.md"},{route:"/faq4545",name:"Disaster Recovery",description:"",topics:[],icon:"question-circle",markdown:"/markdown/whatsnew/Aefiles.md"}]},{route:"/process",name:"Application Management",description:"",icon:"project-diagram",topics:[],children:[{route:"/introduction",name:"EAR Deployment",description:"",icon:"project-diagram",topics:[],markdown:"/markdown/whatsnew/Aefiles.md"},{route:"/usersroles1112",name:"Snapshot Management",description:"",icon:"users-cog",topics:[],owner:"eugene",markdown:"/markdown/whatsnew/Aefiles.md"},{route:"/usersroles",name:"Instance Migration",description:"",icon:"users-cog",topics:[],owner:"eugene",markdown:"/markdown/whatsnew/Aefiles.md"}]},{route:"/praxis",name:"BPM Dev Tools and Repository",description:"",icon:"fire",topics:[],children:[{route:"/intro555555",name:"IBM Integration Designer",description:"",icon:"fire",topics:[],markdown:"/markdown/whatsnew/Aefiles.md"},{route:"/intro44444",name:"Process Designer",description:"",icon:"fire",topics:[],markdown:"/markdown/whatsnew/Aefiles.md"},{route:"/intro67777",name:"Inspector",description:"",icon:"fire",topics:[],markdown:"/markdown/whatsnew/Aefiles.md"},{route:"/intro",name:"Web PD",description:"",icon:"fire",topics:[],markdown:"/markdown/whatsnew/Aefiles.md"},{route:"/intro88888",name:"Repository",description:"",icon:"fire",topics:[],markdown:"/markdown/whatsnew/Aefiles.md"}]},{route:"/social",name:"General Performance",description:"",icon:"lightbulb",topics:[],children:[{route:"/generalInfo",name:"Cache Tuning",description:"",icon:"globe",topics:[],children:[{route:"/Welcome",name:"Welcome to Social Support",description:"",icon:"pencil-alt",topics:[],markdown:"/markdown/whatsnew/Aefiles.md"},{route:"/contacts",name:"Social Support Contacts",description:"",icon:"user",topics:[],markdown:"/markdown/whatsnew/Aefiles.md"}]},{route:"/socialchannels",name:"High CPU",description:"",icon:"comments",topics:[],children:[{route:"/twitter",name:"Twitter & Facebook channels",description:"",icon:"search",topics:[],markdown:"/markdown/whatsnew/Aefiles.md"},{route:"/youTube",name:"YouTube channels",description:"",icon:"search",topics:[],markdown:"/markdown/whatsnew/Aefiles.md"},{route:"/otherSocialChnls",name:"Other Social Media channels",description:"",icon:"search",topics:[],markdown:"/markdown/whatsnew/Aefiles.md"},{route:"/socialTags",name:"Social Media Tags",description:"",icon:"search",topics:[],markdown:"/markdown/whatsnew/Aefiles.md"}]},{route:"/blogging",name:"OOM",description:"",icon:"edit",topics:[],children:[{route:"/blogWG",name:"Writing guide for blogging",description:"",icon:"map-signs",topics:[],markdown:"/markdown/whatsnew/Aefiles.md"},{route:"/blogID",name:"Getting Started with blogging",description:"",icon:"id-card",topics:[],markdown:"/markdown/whatsnew/Aefiles.md"},{route:"/blogCreation",name:"Creating a Blog post",description:"",icon:"edit",topics:[],markdown:"/markdown/whatsnew/Aefiles.md"},{route:"/blogPublishing",name:"Blog Publishing",description:"",icon:"search",topics:[],markdown:"/markdown/whatsnew/Aefiles.md"},{route:"/blogBP",name:"Blogging Best Practices",description:"",icon:"project-diagram",topics:[],markdown:"/markdown/whatsnew/Aefiles.md"}]},{route:"/video",name:"Timeouts/Hangs",description:"",icon:"desktop",topics:[],children:[{route:"/recordingOptions",name:"Tooling Options for creating Support Videos",description:"",icon:"video",topics:[],markdown:"/markdown/whatsnew/Aefiles.md"},{route:"/productionEditing",name:"Video Production and Editing",description:"",icon:"book-reader",topics:[],markdown:"/markdown/whatsnew/Aefiles.md"},{route:"/youTube",name:"Publishing to YouTube",description:"",icon:"search",topics:[],markdown:"/markdown/whatsnew/Aefiles.md"},{route:"/videoBP",name:"Video Production Best Practices",description:"",icon:"project-diagram",topics:[],markdown:"/markdown/whatsnew/Aefiles.md"}]}]},{route:"/coreConcepts",name:"Portal,PAC,Coaches,PFS",description:"",icon:"bolt",owner:"thomas",topics:[],children:[{route:"/terminology",name:"General/Responsive Process Portal",description:"",icon:"file-word",topics:[],markdown:"/markdown/whatsnew/Aefiles.md"},{route:"/oneoneone",name:"Process Admin Console",description:"",icon:"sliders-h",owner:"thomas",topics:[],markdown:"/markdown/whatsnew/Aefiles.md"},{route:"/taxonomy",name:"General/Heritage Coaches",description:"",icon:"book",owner:"thomas",topics:[],markdown:"/markdown/whatsnew/Aefiles.md"},{route:"/contentspace",name:"Client-side/Heritage Human Service",description:"",icon:"file-alt",owner:"thomas",topics:[],markdown:"/markdown/whatsnew/Aefiles.md"},{route:"/supportmission",name:"Toolkit Controls",description:"",icon:"th-large",owner:"thomas",topics:[],markdown:"/markdown/whatsnew/Aefiles.md"},{route:"/casetypes",name:"PFS",description:"",icon:"copy",owner:"thomas",topics:[],markdown:"/markdown/whatsnew/Aefiles.md"}]},{route:"/knowledge",name:"Monitor,Business Space,PDW",description:"",icon:"lightbulb",topics:[],children:[{route:"/overview",name:"Business Monitor",description:"",icon:"sitemap",topics:[],markdown:"/markdown/whatsnew/Aefiles.md"},{route:"/services",name:"Business Space",description:"",icon:"taxi",topics:[],markdown:"/markdown/whatsnew/Aefiles.md"},{route:"/forumBP",name:"Performance Data Warehouse",description:"",icon:"project-diagram",topics:[],markdown:"/markdown/whatsnew/Aefiles.md"}]},{route:"/uis",name:"Security",description:"",icon:"desktop",topics:[],children:[{route:"/portal",name:"Security Scans",description:"",icon:"desktop",topics:[],markdown:"/markdown/whatsnew/Aefiles.md"},{route:"/workbench",name:"SSL",description:"",icon:"headset",topics:[],markdown:"/markdown/whatsnew/Aefiles.md"},{route:"/casemanager",name:"SSO",description:"",icon:"headset",topics:[],markdown:"/markdown/whatsnew/Aefiles.md"},{route:"/fieldservice",name:"User&Group Security",description:"",icon:"handshake",owner:"paulo",topics:[],markdown:"/markdown/whatsnew/Aefiles.md"}]},{route:"/knowled",name:"Advanced Content",description:"",icon:"desktop",topics:[],children:[{route:"/po",name:"AIS",description:"",icon:"desktop",topics:[],markdown:"/markdown/whatsnew/Aefiles.md"},{route:"/workben",name:"BPC",description:"",icon:"headset",topics:[],markdown:"/markdown/whatsnew/Aefiles.md"},{route:"/casemanag12",name:"BO",description:"",icon:"headset",topics:[],markdown:"/markdown/whatsnew/Aefiles.md"},{route:"/fieldservic",name:"Bindings",description:"",icon:"handshake",owner:"paulo",topics:[],markdown:"/markdown/whatsnew/Aefiles.md"},{route:"/casemanage223",name:"SCA",description:"",icon:"headset",topics:[],markdown:""},{route:"/casemanag3434",name:"SIB",description:"",icon:"headset",topics:[],markdown:"/markdown/whatsnew/Aefiles.md"},{route:"/casemanage4545",name:"Failed Event",description:"",icon:"headset",topics:[],markdown:"/markdown/whatsnew/Aefiles.md"},{route:"/casemanager565",name:"Adapters",description:"",icon:"headset",topics:[],markdown:"/markdown/whatsnew/Aefiles.md"},{route:"/casemanager6767",name:"Mediation",description:"",icon:"headset",topics:[],markdown:"/markdown/whatsnew/Aefiles.md"}]},{route:"/uiss",name:"BPD/Service Engine",description:"",icon:"desktop",topics:[],children:[{route:"/por",name:"BPD",description:"",icon:"desktop",topics:[],markdown:"/markdown/whatsnew/Aefiles.md"},{route:"/workbenc",name:"Event Manager",description:"",icon:"headset",topics:[],markdown:"/markdown/whatsnew/Aefiles.md"},{route:"/casemanager4545",name:"JS API,REST API",description:"",icon:"headset",topics:[],markdown:"/markdown/whatsnew/Aefiles.md"},{route:"/fieldservice",name:"Web Service",description:"",icon:"handshake",owner:"paulo",topics:[],markdown:"/markdown/whatsnew/Aefiles.md"},{route:"/casemanager",name:"UCA",description:"",icon:"headset",topics:[],markdown:"/markdown/whatsnew/Aefiles.md"}]},{route:"/training1212",name:"ECM Integration",description:"",icon:"graduation-cap",topics:[],markdown:"/markdown/whatsnew/Aefiles.md"},{route:"/training",name:"BPM on Cloud",description:"",icon:"graduation-cap",topics:[],markdown:"/markdown/whatsnew/Aefiles.md"}]},{route:"/reporting",name:"Operational Decision Manager",description:"",icon:"chart-bar",topics:[],children:[{route:"/medallia",name:"General ODM",description:"",icon:"chart-area",topics:[],children:[{route:"/intro32",name:"Learning roadmap",description:"",icon:"fire",topics:[],markdown:"/markdown/whatsnew/Aefiles.md"},{route:"/intro33",name:"New hire training(Foundation course review)",description:"",icon:"fire",topics:[],markdown:"/markdown/whatsnew/Aefiles.md"},{route:"/intro34",name:"Knowledge buckets",description:"",icon:"fire",topics:[],markdown:"/markdown/whatsnew/Aefiles.md"},{route:"/intro45",name:"Skills Transfer(L3-L2,SWAT-L2)",description:"",icon:"fire",topics:[],markdown:"/markdown/whatsnew/Aefiles.md"},{route:"/intro5666",name:"CFs Training Enablement",description:"",icon:"fire",topics:[],markdown:"/markdown/whatsnew/Aefiles.md"}]},{route:"/reporting11",name:"Install,Upgrade,Migration",description:"",icon:"chart-bar",topics:[],markdown:"/markdown/whatsnew/Aefiles.md"},{route:"/reporting12",name:"ODM Profile Templates",description:"",icon:"chart-bar",topics:[],markdown:"/markdown/whatsnew/Aefiles.md"},{route:"/medalli",name:"Performance",description:"",icon:"chart-area",topics:[],children:[{route:"/intro65",name:"General performance tuning",description:"",icon:"fire",topics:[],markdown:"/markdown/whatsnew/Aefiles.md"},{route:"/intro66",name:"Hung thread & high CPU",description:"",icon:"fire",topics:[],markdown:"/markdown/whatsnew/Aefiles.md"},{route:"/intro67",name:"OOM",description:"",icon:"fire",topics:[],markdown:"/markdown/whatsnew/Aefiles.md"}]},{route:"/medall",name:"Decision Center",description:"",icon:"chart-area",topics:[],children:[{route:"/intr",name:"Decision Governance Framework",description:"",icon:"fire",topics:[],markdown:"/markdown/whatsnew/Aefiles.md"},{route:"/intro76",name:"Scurity & user management",description:"",icon:"fire",topics:[],markdown:"/markdown/whatsnew/Aefiles.md"},{route:"/intro77",name:"Test and simulation",description:"",icon:"fire",topics:[],markdown:"/markdown/whatsnew/Aefiles.md"},{route:"/intro78",name:"Decision Model Service",description:"",icon:"fire",topics:[],markdown:"/markdown/whatsnew/Aefiles.md"}]},{route:"/meda",name:"Decision Server Rules",description:"",icon:"chart-area",topics:[],children:[{route:"/int",name:"Rule Designer",description:"",icon:"fire",topics:[],markdown:"/markdown/whatsnew/Aefiles.md"},{route:"/intro00",name:"RES Console",description:"",icon:"fire",topics:[],markdown:"/markdown/whatsnew/Aefiles.md"},{route:"/intro09",name:"RES runtime",description:"",icon:"fire",topics:[],markdown:"/markdown/whatsnew/Aefiles.md"},{route:"/intro099",name:"Decision Warehouse",description:"",icon:"fire",topics:[],markdown:"/markdown/whatsnew/Aefiles.md"}]},{route:"/reporting",name:"Decision Server Insights",description:"",icon:"chart-bar",topics:[],markdown:"/markdown/whatsnew/Aefiles.md"},{route:"/warehousi",name:"ODM on docker",description:"",icon:"database",topics:[],markdown:"/markdown/whatsnew/Aefiles.md"},{route:"/warehousing",name:"Decision Composer",description:"",icon:"database",topics:[],markdown:"/markdown/whatsnew/Aefiles.md"}]},{route:"/playb",name:"Blueworks Live",description:"",icon:"address-book",children:[{route:"/whats",name:"Admin Console",description:"",icon:"bullhorn",topics:[],children:[{route:"/huaweiannounc",name:"Custom properties",description:"",icon:"bullhorn",topics:[],markdown:"/markdown/whatsnew/Aefiles.md"},{route:"/Whatscoming1019",name:"Customize account",description:"",icon:"bullhorn",topics:[],markdown:"/markdown/whatsnew/Aefiles.md"},{route:"/Releasenotes0919",name:"Manage users",description:"",icon:"bullhorn",topics:[],markdown:"/markdown/whatsnew/Aefiles.md"},{route:"/Whatscoming0919",name:"Manage Billing",description:"",icon:"bullhorn",topics:[],markdown:"/markdown/whatsnew/Aefiles.md"},{route:"/Releasenotes08191",name:"Manage Disk space",description:"",icon:"bullhorn",topics:[],markdown:"/markdown/whatsnew/Aefiles.md"},{route:"/Releasenotes08192",name:"Security",description:"",icon:"bullhorn",topics:[],markdown:"/markdown/whatsnew/Aefiles.md"},{route:"/Releasenotes08193",name:"Single sign on(SSO)",description:"",icon:"bullhorn",topics:[],markdown:"/markdown/whatsnew/Aefiles.md"}]},{route:"/helpful-li",name:"Blueworks Live Service",description:"",icon:"question-circle",topics:[],children:[{route:"/fa1",name:"API",description:"",topics:[],icon:"question-circle",markdown:"/markdown/whatsnew/Aefiles.md"},{route:"/fa2",name:"Attach files",description:"",topics:[],icon:"question-circle",markdown:"/markdown/whatsnew/Aefiles.md"},{route:"/fa3",name:"Collaboration and Sharing",description:"",topics:[],icon:"question-circle",markdown:"/markdown/whatsnew/Aefiles.md"},{route:"/fa4",name:"Glossary",description:"",topics:[],icon:"question-circle",markdown:"/markdown/whatsnew/Aefiles.md"},{route:"/fa5",name:"Import,Export and Printing",description:"",topics:[],icon:"question-circle",markdown:"/markdown/whatsnew/Aefiles.md"},{route:"/fa6",name:"Process app",description:"",topics:[],icon:"question-circle",markdown:"/markdown/whatsnew/Aefiles.md"},{route:"/fa7",name:"Process diagram",description:"",topics:[],icon:"question-circle",markdown:"/markdown/whatsnew/Aefiles.md"},{route:"/fa8",name:"Search and Filter Tools",description:"",topics:[],icon:"question-circle",markdown:"/markdown/whatsnew/Aefiles.md"},{route:"/fa9",name:"Space",description:"",topics:[],icon:"question-circle",markdown:"/markdown/whatsnew/Aefiles.md"}]},{route:"/process",name:"Account",description:"",icon:"project-diagram",topics:[],children:[{route:"/introduction",name:"Personalize Account",description:"",icon:"project-diagram",topics:[],markdown:"/markdown/whatsnew/Aefiles.md"},{route:"/usersroles",name:"User Settings",description:"",icon:"users-cog",topics:[],owner:"eugene",markdown:"/markdown/whatsnew/Aefiles.md"}]},{route:"/praxis",name:"Business Process Management(BPM)",description:"",icon:"fire",topics:[],markdown:"/markdown/whatsnew/Aefiles.md"},{route:"/social",name:"Operations",description:"",icon:"lightbulb",topics:[],children:[{route:"/generalInfo",name:"SSAE request",description:"",icon:"globe",topics:[],markdown:"/markdown/whatsnew/Aefiles.md"},{route:"/socialchannels",name:"Vulnerability Request",description:"",icon:"comments",topics:[],markdown:"/markdown/whatsnew/Aefiles.md"}]},{route:"/coreConcepts",name:"Sales and Billing",description:"",icon:"bolt",owner:"thomas",topics:[],children:[{route:"/terminology",name:"Account",description:"",icon:"file-word",topics:[],markdown:"/markdown/whatsnew/Aefiles.md"},{route:"/oneoneone",name:"Billing",description:"",icon:"sliders-h",owner:"thomas",topics:[],markdown:"/markdown/whatsnew/Aefiles.md"}]},{route:"/knowledge",name:"Support",description:"",icon:"lightbulb",topics:[],children:[{route:"/overview",name:"Request Access to Community",description:"",icon:"sitemap",topics:[],markdown:"/markdown/whatsnew/Aefiles.md"}]}]},{route:"/reporti",name:"Robotic Process Automation",description:"Robotic Process Automation",icon:"chart-bar",topics:[],children:[{route:"/medal",name:"Install,Configure,Migrate",description:"",icon:"chart-area",topics:[],children:[{route:"/intro33",name:"Control Room",description:"",icon:"fire",topics:[],markdown:"/markdown/whatsnew/Aefiles.md"},{route:"/intro44",name:"Bot Creator/Runner",description:"",icon:"fire",topics:[],markdown:"/markdown/whatsnew/Aefiles.md"},{route:"/intro55",name:"HA",description:"",icon:"fire",topics:[],markdown:"/markdown/whatsnew/Aefiles.md"},{route:"/intro66",name:"Version Control",description:"",icon:"fire",topics:[],markdown:"/markdown/whatsnew/Aefiles.md"}]},{route:"/reportin",name:"Bot Development & Deployment",description:"",icon:"chart-bar",topics:[],children:[{route:"/intro22",name:"Connectivity",description:"",icon:"fire",topics:[],markdown:"/markdown/whatsnew/Aefiles.md"},{route:"/intro3",name:"Metabot",description:"",icon:"fire",topics:[],markdown:"/markdown/whatsnew/Aefiles.md"},{route:"/intro4",name:"Credential Vault",description:"",icon:"fire",topics:[],markdown:"/markdown/whatsnew/Aefiles.md"},{route:"/intro5",name:"SAP Integration",description:"",icon:"fire",topics:[],markdown:"/markdown/whatsnew/Aefiles.md"}]},{route:"/warehousin",name:"Task Bot Execution",description:"",icon:"database",topics:[],children:[{route:"/i",name:"Workload",description:"",icon:"fire",topics:[],markdown:"/markdown/whatsnew/Aefiles.md"},{route:"/in",name:"Devices",description:"",icon:"fire",topics:[],markdown:"/markdown/whatsnew/Aefiles.md"},{route:"/int",name:"User Management",description:"",icon:"fire",topics:[],markdown:"/markdown/whatsnew/Aefiles.md"},{route:"/intrr",name:"Auto-Login",description:"",icon:"fire",topics:[],markdown:"/markdown/whatsnew/Aefiles.md"},{route:"/introrr",name:"Monitoring",description:"",icon:"fire",topics:[],markdown:"/markdown/whatsnew/Aefiles.md"}]}]}]}}});
//# sourceMappingURL=app.0c2b3afd.js.map