(function(e){function n(n){for(var r,i,a=n[0],c=n[1],d=n[2],m=0,u=[];m<a.length;m++)i=a[m],t[i]&&u.push(t[i][0]),t[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);l&&l(n);while(u.length)u.shift()();return s.push.apply(s,d||[]),o()}function o(){for(var e,n=0;n<s.length;n++){for(var o=s[n],r=!0,i=1;i<o.length;i++){var a=o[i];0!==t[a]&&(r=!1)}r&&(s.splice(n--,1),e=c(c.s=o[0]))}return e}var r={},i={app:0},t={app:0},s=[];function a(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-7beb209c":"51f2eeb9","chunk-06178758":"40bd9d59","chunk-3d709b4a":"264dd1f1"}[e]+".js"}function c(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,c),o.l=!0,o.exports}c.e=function(e){var n=[],o={"chunk-7beb209c":1,"chunk-06178758":1};i[e]?n.push(i[e]):0!==i[e]&&o[e]&&n.push(i[e]=new Promise(function(n,o){for(var r="css/"+({}[e]||e)+"."+{"chunk-7beb209c":"a3cd9af0","chunk-06178758":"8a0e0b57","chunk-3d709b4a":"31d6cfe0"}[e]+".css",t=c.p+r,s=document.getElementsByTagName("link"),a=0;a<s.length;a++){var d=s[a],m=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(m===r||m===t))return n()}var u=document.getElementsByTagName("style");for(a=0;a<u.length;a++){d=u[a],m=d.getAttribute("data-href");if(m===r||m===t)return n()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=n,l.onerror=function(n){var r=n&&n.target&&n.target.src||t,s=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=r,delete i[e],l.parentNode.removeChild(l),o(s)},l.href=t;var p=document.getElementsByTagName("head")[0];p.appendChild(l)}).then(function(){i[e]=0}));var r=t[e];if(0!==r)if(r)n.push(r[2]);else{var s=new Promise(function(n,o){r=t[e]=[n,o]});n.push(r[2]=s);var d,m=document.createElement("script");m.charset="utf-8",m.timeout=120,c.nc&&m.setAttribute("nonce",c.nc),m.src=a(e),d=function(n){m.onerror=m.onload=null,clearTimeout(u);var o=t[e];if(0!==o){if(o){var r=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src,s=new Error("Loading chunk "+e+" failed.\n("+r+": "+i+")");s.type=r,s.request=i,o[1](s)}t[e]=void 0}};var u=setTimeout(function(){d({type:"timeout",target:m})},12e4);m.onerror=m.onload=d,document.head.appendChild(m)}return Promise.all(n)},c.m=e,c.c=r,c.d=function(e,n,o){c.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,n){if(1&n&&(e=c(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(c.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)c.d(o,r,function(n){return e[n]}.bind(null,r));return o},c.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(n,"a",n),n},c.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},c.p="/dba-support/DBA-Education/",c.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],m=d.push.bind(d);d.push=n,d=d.slice();for(var u=0;u<d.length;u++)n(d[u]);var l=m;s.push([0,"chunk-vendors"]),o()})({0:function(e,n,o){e.exports=o("56d7")},"56d7":function(e,n,o){"use strict";o.r(n);o("cadf"),o("551c"),o("f751"),o("097d");var r=o("2b0e"),i=function(){var e=this,n=e.$createElement,o=e._self._c||n;return o("div",{attrs:{id:"app"}},[o("Header",{on:{toggleMenu:e.toggleMenu}}),o("main",[o("nav",{staticClass:"main__nav",class:{active:e.isNavOpen}},[o("div",{staticClass:"nav__search"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.searchKeywords,expression:"searchKeywords"}],staticClass:"nav__search-input",attrs:{placeholder:"Type to search"},domProps:{value:e.searchKeywords},on:{keyup:e.search,input:function(n){n.target.composing||(e.searchKeywords=n.target.value)}}}),e.searchResultsVisible?o("svg",{staticClass:"nav__search-icon",attrs:{tabindex:"0",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 52 52"},on:{click:e.reset,keyup:function(n){return!n.type.indexOf("key")&&e._k(n.keyCode,"enter",13,n.key,"Enter")?null:e.reset(n)}}},[o("path",{attrs:{d:"M26 0C11.664 0 0 11.663 0 26s11.664 26 26 26 26-11.663 26-26S40.336 0 26 0zm0 50C12.767 50 2 39.233 2 26S12.767 2 26 2s24 10.767 24 24-10.767 24-24 24z"}}),o("path",{attrs:{d:"M35.707 16.293a.999.999 0 0 0-1.414 0L26 24.586l-8.293-8.293a.999.999 0 1 0-1.414 1.414L24.586 26l-8.293 8.293a.999.999 0 1 0 1.414 1.414L26 27.414l8.293 8.293a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414L27.414 26l8.293-8.293a.999.999 0 0 0 0-1.414z"}})]):e._e()]),o("vue-tree-navigation",{attrs:{items:e.tocItems,defaultOpenLevel:1}})],1),e.searchResultsVisible?o("div",{staticClass:"container"},[e.searchResults.length?o("h1",{staticClass:"results__heading"},[e._v(e._s(e.searchResults.length)+' results matching "'+e._s(e.searchKeywords)+'"')]):e.content?o("h1",{staticClass:"results__heading"},[e._v('No results matching "'+e._s(e.searchKeywords)+'"')]):o("h1",{staticClass:"results__heading"},[e._v("Loading...")]),e.searchResults?o("ul",{staticClass:"results__search"},e._l(e.searchResults,function(n,r){return o("li",{key:r,staticClass:"result"},[o("header",{staticClass:"result__header"},[o("router-link",{attrs:{to:n.path}},[o("h2",{staticClass:"result__title"},[e._v(e._s(n.name))])]),e._l(n.topics,function(n,r){return o("span",{key:r,staticClass:"tag",attrs:{tabindex:"0"},on:{keyup:function(o){return!o.type.indexOf("key")&&e._k(o.keyCode,"enter",13,o.key,"Enter")?null:e.searchTopic(n)},click:function(o){return e.searchTopic(n)}}},[e._v(e._s(n))])})],2),o("p",[e._v(e._s(e._f("truncate")(n.text,300,"...")))])])}),0):e._e()]):o("router-view")],1)],1)},t=[],s=o("cebc"),a=(o("a481"),o("386d"),o("ac4d"),o("8a81"),o("ac6a"),o("661c")),c=o.n(a),d=o("8f8a"),m=function(){var e=this,n=e.$createElement,o=e._self._c||n;return o("header",{staticClass:"header"},[o("div",{staticClass:"header__brand"},[o("svg",{ref:"nav__open",staticClass:"header__hamburger",attrs:{tabindex:"0",viewBox:"0 0 512 512",xmlns:"http://www.w3.org/2000/svg"},on:{keyup:function(n){return!n.type.indexOf("key")&&e._k(n.keyCode,"enter",13,n.key,"Enter")?null:e.openNavigation(n)},click:e.openNavigation}},[o("path",{attrs:{d:"M424 394H89a8 8 0 0 1 0-16h335a8 8 0 0 1 0 16zM424 265H89a8 8 0 0 1 0-16h335a8 8 0 0 1 0 16zM424 135H89a8 8 0 0 1 0-16h335a8 8 0 0 1 0 16z"}})]),o("span",{staticClass:"header__name"},[e._v(e._s(e.name)+" "),o("b")])])])},u=[],l={name:"header-component",data:function(){return{isVisible:!1,isDesktop:!1,name:d["a"].getBaseConfig().appName,list:d["a"].getBaseConfig().headerNavigation}},created:function(){window.innerWidth>=780&&(this.isDesktop=!0),window.addEventListener("resize",this.handleResize)},beforeDestroy:function(){window.removeEventListener("resize",this.handleResize)},methods:{handleResize:function(e){e.currentTarget.innerWidth>=780?this.isDesktop=!0:this.isDesktop=!1},openNavigation:function(){this.$emit("toggleMenu")},closeNavigation:function(e){this.$emit("toggleMenu")}}},p=l,g=o("2877"),w=Object(g["a"])(p,m,u,!1,null,null,null),k=w.exports,h={name:"app",data:function(){return{baseUrl:"https://pages.github.ibm.com/dba-support/DBA-Education",isNavOpen:!1,tocItems:d["a"].getPages(),content:null,searchResultsVisible:!1,searchResults:null,searchKeywords:null,searchIndex:null}},components:{Header:k},created:function(){var e=this;d["a"].getStatus().then(function(n){if(void 0!==n){var o=n;e.searchIndex=c()(function(){this.addField("name"),this.addField("text"),this.addField("description"),this.setRef("path");var e=!0,n=!1,r=void 0;try{for(var i,t=o[Symbol.iterator]();!(e=(i=t.next()).done);e=!0){var s=i.value;this.addDoc(s)}}catch(a){n=!0,r=a}finally{try{e||null==t.return||t.return()}finally{if(n)throw r}}}),e.content=n||[],e.searchKeywords&&e.search()}}).catch(function(){})},methods:{toggleMenu:function(){this.isNavOpen=!this.isNavOpen},search:function(e){var n=this;if(this.searchKeywords&&this.content&&this.searchIndex){var o=Object.assign({},this.$route.query,{search:this.searchKeywords});this.$router.push({query:o}),this.searchResultsVisible=!0;var r="topic:";if(this.searchKeywords.indexOf("topic:")>-1)this.searchResults=this.content.filter(function(e){for(var o=(e.topics||[]).map(function(e){return e.toLowerCase()}),i=!1,t=0;t<o.length;t++)o[t].indexOf(n.searchKeywords.toLowerCase().replace(r,""))>-1&&(i=!0);return i});else{for(var i=this.searchIndex.search(this.searchKeywords,{fields:{name:{boost:4},text:{boost:2},description:{boost:1}}}),t=0;t<i.length;t++)i[t]=Object(s["a"])({},this.searchIndex.documentStore.getDoc(i[t].ref),i[t]);this.searchResults=i}}else this.reset()},searchTopic:function(e){var n="topic:".concat(e),o=Object.assign({},this.$route.query,{search:n});this.searchKeywords=n,this.search(),this.$router.push({query:o})},reset:function(){var e=Object.assign({},this.$route.query);delete e.search,this.$router.replace({query:e}),this.searchResultsVisible=!1,this.searchKeywords="",this.searchResults=[]}},watch:{$route:{immediate:!0,handler:function(e,n){var o=window.location.href;if(o.indexOf("?")>-1&&o.indexOf("search=")>-1){var r=o.substring(o.indexOf("?")+1),i=JSON.parse('{"'+decodeURIComponent(r.replace(/&/g,'","').replace(/=/g,'": "'))+'"}');i&&i.search&&(this.searchKeywords=i.search,this.search())}else this.searchKeywords="",this.searchResultsVisible=!1}}}},v=h,f=(o("5c0b"),Object(g["a"])(v,i,t,!1,null,null,null)),M=f.exports,b=o("8c4f");r["a"].use(b["a"]);var B=new b["a"]({base:"/dba-support/DBA-Education/",routes:d["a"].getRoutingConfig()}),P=o("12d3"),S=o.n(P),C=o("ecee"),y=o("ad3d"),D=o("c074"),A=o("cb5b"),O=o("da3e"),R=o("faaa"),E=o("42b9");A["a"].library.add(O["a"]),A["a"].library.add(R["a"]),A["a"].library.add(E["a"]),r["a"].use(S.a),C["c"].add(D["m"],D["Ab"],D["lb"],D["Z"],D["kb"],D["Fb"],D["O"],D["I"],D["J"],D["pb"],D["X"],D["rb"],D["Eb"],D["E"],D["D"],D["zb"],D["wb"],D["R"],D["C"],D["ob"],D["bb"],D["w"],D["W"],D["hb"],D["k"],D["c"],D["Cb"],D["eb"],D["d"],D["r"],D["S"],D["Db"],D["U"],D["G"],D["t"],D["sb"],D["g"],D["H"],D["vb"],D["x"],D["a"],D["f"],D["A"],D["o"],D["z"],D["mb"],D["T"],D["Ib"],D["u"],D["db"],D["F"],D["V"],D["yb"],D["xb"],D["fb"],D["Y"],D["h"],D["nb"],D["ub"],D["y"],D["gb"],D["qb"],D["q"],D["K"],D["jb"],D["ab"],D["i"],D["Bb"],D["e"],D["l"],D["v"],D["n"],D["Q"],D["j"],D["L"],D["b"],D["P"],D["ib"],D["tb"],D["cb"],D["Hb"],D["s"],D["p"],D["M"],D["B"],D["N"],D["Gb"]);var I=function(e,n,o){o=o||"...";var r=document.createElement("div");r.innerHTML=e;var i=r.textContent;return i.length>n?i.slice(0,n)+o:i};r["a"].filter("truncate",I),r["a"].component("font-awesome-icon",y["a"]),r["a"].config.productionTip=!1,new r["a"]({el:"#app",router:B,render:function(e){return e(M)}})},"5c0b":function(e,n,o){"use strict";var r=o("5e27"),i=o.n(r);i.a},"5e27":function(e,n,o){},"8f8a":function(e,n,o){"use strict";o("7f7f");var r=o("ac4b"),i=o("bc3a"),t=o.n(i),s="https://hooks.slack.com/services/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",a=function(){return o.e("chunk-7beb209c").then(o.bind(null,"11a9"))},c={};function d(e,n){e.path=e.route,e.breadCrumb=n?JSON.parse(JSON.stringify(n.breadCrumb)):[];var o=null!=n?n.path+e.route:"/";e.breadCrumb.push({name:e.name,path:o}),e.component=a,null!=n&&(e.path=n.path+e.route);var r=[];if(e.children)for(var i in e.children){var t=e.children[i];r.push({name:t.name,description:t.description,path:e.path+t.route,icon:t.icon,iconn:t.iconn,bgColor:t.bgColor,owner:t.owner,topics:t.topics}),d(t,e)}e.meta={tiles:r.length>0?r:null,name:e.name,description:e.description,markdown:e.markdown,icon:e.icon,iconn:e.iconn,bgColor:e.bgColor,owner:e.owner,topics:e.topics,breadCrumb:e.breadCrumb},c[e.path]=e.meta}function m(e){var n=JSON.parse(JSON.stringify(e.pages));for(var o in n){var r=n[o];d(r,null)}return n.push({path:"/",redirect:e.landingPage}),n}n["a"]={getMetaById:function(e){return c[e]},traverse:function(e){if(e.name&&(e.title=e.name,delete e.name),Array.isArray(e.children))for(var n=0;n<e.children.length;n++)this.traverse(e.children[n])},getRoutingConfig:function(){var e=m(this.getBaseConfig());return this.traverse(e[0]),e},getContent:function(e,n){return new Promise(function(o,r){var i={name:e.name,description:e.description,owner:e.owner,path:n?"".concat(n).concat(e.route):e.route,text:"",wordCount:0,topics:e.topics};return e.markdown?o(i):(e.children&&(i.type="TOC"),o(i))})},getBaseConfig:function(){return r},getPages:function(){return this.getBaseConfig().pages},getStatus:function(){return new Promise(function(e,n){var o="./content.json";t.a.get(o).then(function(n){e(n.data)}).catch(function(e){return n(e)})})},sendSlackMessage:function(e,n){var o="https://pages.github.ibm.com/dba-support/DBA-Education"+e,r=o+" : "+n,i={text:r};t.a.post(s,JSON.stringify(i)).then(function(e){}).catch(function(e){console.error("FAILED: Send slack webhook",e)})}}},ac4b:function(e){e.exports={appName:"  IBM DBA Support Education",headerNavigation:[{name:"DBA-Education",path:"/DBA-Education"}],landingPage:"/BusinessProcessManager",topics:["news","roles","access","process","reporting","notification","pager-duty","customer","case-status","e2c","case-field","omni","routing","assignment","product","case","account","contact","work-order","skills-case","collab-case","activity","defect","chat","search","watson","knowledge","attachment","field-service","teams","support-mission","time","caseview","policy","deepdive","portal","entitlement","chatter"],pages:[{route:"/BusinessProcessManager",name:"Business Process Manager/Business Automation Workflow",description:"",icon:"",children:[{route:"/GeneralBPM",name:"General BPM/BAW",description:"",icon:"bookmark",topics:[],children:[{route:"/Learningroadmap",name:"Learning Plan",description:"qingzou@cn.ibm.com;shangjin@cn.ibm.com",owner:"@Qing Zou,@Jin Shang",icon:"chalkboard-teacher",topics:[],markdown:"/markdown/BusinessProcessManager/GeneralBPM/Learningroadmap.md"},{route:"/DeepDive",name:"Deep Dive",description:"qingzou@cn.ibm.com",owner:"@Qing Zou",icon:"street-view",topics:[],markdown:"/markdown/BusinessProcessManager/GeneralBPM/DeepDive.md"},{route:"/SkillsTransfer",name:"Skills Transfer (Dev/L3-L2, SWAT-L2)",description:"shangjin@cn.ibm.com",owner:"@Jin Shang",icon:"exchange-alt",topics:[],markdown:"/markdown/BusinessProcessManager/GeneralBPM/SkillsTransfer.md"},{route:"/CFsTraining",name:"CFs Training",description:"shangjin@cn.ibm.com",owner:"@Jin Shang",icon:"lightbulb",topics:[],markdown:"/markdown/BusinessProcessManager/GeneralBPM/CFsTrainingEnablement.md"},{route:"/TestEnvironments",name:"Test Environments",description:"enricom@cn.ibm.com",owner:"@Enrico Monteleone",icon:"sitemap",topics:[],markdown:"/markdown/BusinessProcessManager/GeneralBPM/TestEnvironments.md"},{route:"/Knowledgebuckets",name:"Knowledge Buckets",description:"",icon:"graduation-cap",topics:[],markdown:"/markdown/BusinessProcessManager/GeneralBPM/Knowledgebuckets.md"}]},{route:"/Install,Upgrade,Migration",name:"Install, Upgrade, Migration",description:"",icon:"wrench",topics:[],children:[{route:"/InstallDEConfiguration",name:"Install/DE Configuration",description:"steffen.baumann@de.ibm.com",owner:"@Steffen Baumann",topics:[],icon:"wrench",markdown:"/markdown/BusinessProcessManager/Install,Upgrade,Migration/InstallDEConfig.md"},{route:"/Upgrade",name:"Upgrade",description:"",topics:[],icon:"cogs",markdown:"/markdown/BusinessProcessManager/Install,Upgrade,Migration/Upgrade.md"},{route:"/Migration",name:"Migration",description:"",topics:[],icon:"dolly-flatbed",markdown:"/markdown/BusinessProcessManager/Install,Upgrade,Migration/Migration.md"},{route:"/DisasterRecovery",name:"Disaster Recovery",description:"",topics:[],icon:"toolbox",markdown:"/markdown/BusinessProcessManager/Install,Upgrade,Migration/DisasterRecovery.md"},{route:"/Configuration",name:"Configuration",description:"",topics:[],icon:"sitemap",markdown:"/markdown/BusinessProcessManager/Install,Upgrade,Migration/Configuration.md"}]},{route:"/ApplicationManagement",name:"Application Management",description:"",icon:"tasks",topics:[],children:[{route:"/EARDeployment",name:"EAR Deployment",description:"",icon:"flag",topics:[],markdown:"/markdown/BusinessProcessManager/ApplicationManagement/EARDeployment.md"},{route:"/SnapshotManagement",name:"Snapshot Management",description:"",icon:"folder-open",topics:[],owner:"eugene",markdown:"/markdown/BusinessProcessManager/ApplicationManagement/SnapshotManagement.md"},{route:"/InstanceMigration",name:"Instance Migration",description:"",icon:"dolly-flatbed",topics:[],owner:"eugene",markdown:"/markdown/BusinessProcessManager/ApplicationManagement/InstanceMigration.md"}]},{route:"/BPMDevToolsandRepository",name:"BPM Dev Tools and Repository",description:"",icon:"code",topics:[],children:[{route:"/IBMIntegrationDesigner",name:"IBM Integration Designer",description:"",icon:"ruler-combined",topics:[],markdown:"/markdown/BusinessProcessManager/BPMDevToolsandRepository/IBMIntegrationDesigner.md"},{route:"/DesktopProcessDesigner",name:"Desktop Process Designer/Web PD",description:"",icon:"tape",topics:[],markdown:"/markdown/BusinessProcessManager/BPMDevToolsandRepository/DesktopProcessDesigner.md"},{route:"/Inspector",name:"Inspector",description:"",icon:"list-alt",topics:[],markdown:"/markdown/BusinessProcessManager/BPMDevToolsandRepository/Inspector.md"},{route:"/Repository",name:"Repository",description:"",icon:"warehouse",topics:[],markdown:"/markdown/BusinessProcessManager/BPMDevToolsandRepository/Repository.md"},{route:"/ServerConnection",name:"Server Connection",description:"",icon:"map-marker-alt",topics:[],markdown:"/markdown/BusinessProcessManager/BPMDevToolsandRepository/ServerConnection.md"}]},{route:"/Performance",name:"Performance",description:"",icon:"user-edit",topics:[],children:[{route:"/CacheTuning",name:"Cache Tuning",description:"",icon:"history",topics:[],markdown:"/markdown/BusinessProcessManager/GeneralPerformance/CacheTuning.md"},{route:"/HighCPU",name:"High CPU",description:"",icon:"microchip",topics:[],markdown:"/markdown/BusinessProcessManager/GeneralPerformance/HighCPU.md"},{route:"/OutofMemory",name:"Out of Memory/High Memory",description:"",icon:"ellipsis-h",topics:[],markdown:"/markdown/BusinessProcessManager/GeneralPerformance/OutofMemory.md"},{route:"/TimeoutsHangs",name:"Timeouts/Hangs",description:"",icon:"hand-paper",topics:[],markdown:"/markdown/BusinessProcessManager/GeneralPerformance/TimeoutsHangs.md"},{route:"/Database",name:"Database",description:"",icon:"sitemap",topics:[],markdown:"/markdown/BusinessProcessManager/GeneralPerformance/Database.md"},{route:"/Housekeeping",name:"Housekeeping",description:"",icon:"tape",topics:[],markdown:"/markdown/BusinessProcessManager/GeneralPerformance/Housekeeping.md"}]},{route:"/BusinessUserExperience",name:"Business User Experience",description:"",icon:"podcast",owner:"thomas",topics:[],children:[{route:"/ProcessPortal",name:"Process Portal",description:"",icon:"bookmark",topics:[],markdown:"/markdown/BusinessProcessManager/BusinessUserExperience/ProcessPortal.md"},{route:"/Coaches",name:"Coaches",description:"",icon:"terminal",owner:"thomas",topics:[],markdown:"/markdown/BusinessProcessManager/BusinessUserExperience/Coaches.md"},{route:"/HumanServices",name:"Human Services",description:"",icon:"podcast",owner:"thomas",topics:[],markdown:"/markdown/BusinessProcessManager/BusinessUserExperience/HumanServices.md"},{route:"/ToolkitControls",name:"Toolkit Controls",description:"",icon:"toolbox",owner:"thomas",topics:[],markdown:"/markdown/BusinessProcessManager/BusinessUserExperience/ToolkitControls.md"},{route:"/BusinessSpace",name:"Business Space",description:"",icon:"user",owner:"thomas",topics:[],markdown:"/markdown/BusinessProcessManager/BusinessUserExperience/BusinessSpace.md"},{route:"/ProcessFederatedServer",name:"Process Federated Server",description:"",icon:"print",owner:"thomas",topics:[],markdown:"/markdown/BusinessProcessManager/BusinessUserExperience/PFS.md"}]},{route:"/Monitoring",name:"Monitoring",description:"",icon:"desktop",topics:[],children:[{route:"/BusinessAutomationInsights",name:"Business Automation Insights",description:"",icon:"archive",topics:[],markdown:"/markdown/BusinessProcessManager/Monitoring/BusinessAutomationInsights.md"},{route:"/BusinessMonitor",name:"Business Monitor",description:"",icon:"desktop",topics:[],markdown:"/markdown/BusinessProcessManager/Monitoring/BusinessMonitor.md"},{route:"/PerformanceDataWarehouse",name:"Performance Data Warehouse",description:"",icon:"database",topics:[],markdown:"/markdown/BusinessProcessManager/Monitoring/PerformanceDataWarehouse.md"}]},{route:"/Security",name:"Security",description:"",icon:"shield-alt",topics:[],children:[{route:"/SecurityScans",name:"Security Scans",description:"",icon:"hourglass-start",topics:[],markdown:"/markdown/BusinessProcessManager/Security/SecurityScans.md"},{route:"/SSL",name:"SSL",description:"",icon:"shield-alt",topics:[],markdown:"/markdown/BusinessProcessManager/Security/SSL.md"},{route:"/SSO",name:"SSO",description:"",icon:"sign-in-alt",topics:[],markdown:"/markdown/BusinessProcessManager/Security/SSO.md"},{route:"/User&GroupSecurity",name:"User and Group Security",description:"",icon:"users",owner:"paulo",topics:[],markdown:"/markdown/BusinessProcessManager/Security/User&GroupSecurity.md"}]},{route:"/AdvancedContent",name:"Advanced Content",description:"",icon:"file-signature",topics:[],children:[{route:"/AIS",name:"Advanced Integration Service",description:"",icon:"file-archive",topics:[],markdown:"/markdown/BusinessProcessManager/AdvancedContent/AIS.md"},{route:"/BPC",name:"Business Process Choreographer",description:"",icon:"square",topics:[],markdown:"/markdown/BusinessProcessManager/AdvancedContent/BPC.md"},{route:"/BO",name:"Business Object",description:"",icon:"box",topics:[],markdown:"/markdown/BusinessProcessManager/AdvancedContent/BO.md"},{route:"/Bindings",name:"Bindings",description:"",icon:"industry",owner:"paulo",topics:[],markdown:"/markdown/BusinessProcessManager/AdvancedContent/Bindings.md"},{route:"/SCA",name:"Service Component Architecture",description:"",icon:"stream",topics:[],markdown:"/markdown/BusinessProcessManager/AdvancedContent/SCA.md"},{route:"/SIB",name:"Service Integration Bus",description:"",icon:"star",topics:[],markdown:"/markdown/BusinessProcessManager/AdvancedContent/SIB.md"},{route:"/FailedEvent",name:"Failed Event",description:"",icon:"calendar-times",topics:[],markdown:"/markdown/BusinessProcessManager/AdvancedContent/FailedEvent.md"},{route:"/Adapters",name:"Adapters",description:"",icon:"sliders-h",topics:[],markdown:"/markdown/BusinessProcessManager/AdvancedContent/Adapters.md"},{route:"/Mediation",name:"Mediation",description:"",icon:"file-medical",topics:[],markdown:"/markdown/BusinessProcessManager/AdvancedContent/Mediation.md"}]},{route:"/StandardRuntime",name:"Standard Runtime",description:"",icon:"server",topics:[],children:[{route:"/BPD",name:"BPD & Service Engine",description:"",icon:"file-alt",topics:[],markdown:"/markdown/BusinessProcessManager/StandardRuntime/BPD.md"},{route:"/EventManager",name:"Event Manager",description:"",icon:"calendar-minus",topics:[],markdown:"/markdown/BusinessProcessManager/StandardRuntime/EventManager.md"},{route:"/JSAPI,RESTAPI",name:"JavaScript & REST API",description:"",icon:"retweet",topics:[],markdown:"/markdown/BusinessProcessManager/StandardRuntime/JSAPI,RESTAPI.md"},{route:"/WebService",name:"Web Service",description:"",icon:"map-marker-alt",owner:"paulo",topics:[],markdown:"/markdown/BusinessProcessManager/StandardRuntime/WebService.md"},{route:"/UCA",name:"Undercover Agent (UCA)",description:"",icon:"star",topics:[],markdown:"/markdown/BusinessProcessManager/StandardRuntime/UCA.md"},{route:"/ProcessAdminConsole",name:"Process Admin Console",description:"",icon:"user",topics:[],markdown:"/markdown/BusinessProcessManager/StandardRuntime/ProcessAdminConsole.md"},{route:"/DocumentStore&ECMIntegration",name:"Document Store & ECM Integration",description:"",icon:"sitemap",topics:[],markdown:"/markdown/BusinessProcessManager/StandardRuntime/DocumentStore&ECMIntegration.md"}]},{route:"/BPMonCloud",name:"BPM on Cloud",description:"",icon:"cloud",topics:[],markdown:"/markdown/BusinessProcessManager/BPMonCloud.md"}]},{route:"/OperationalDecisionManager",name:"Operational Decision Manager",description:"",icon:"",topics:[],children:[{route:"/GeneralODM",name:"General ODM",description:"",icon:"bookmark",topics:[],children:[{route:"/Learningroadmap",name:"Learning roadmap",description:"",icon:"chalkboard-teacher",topics:[],markdown:"/markdown/OperationalDecisionManager/GeneralODM/Learningroadmap.md"},{route:"/Newhiretraining",name:"New hire training(Foundation course review)",description:"",icon:"street-view",topics:[],markdown:"/markdown/OperationalDecisionManager/GeneralODM/Newhiretraining.md"},{route:"/Knowledgebuckets",name:"Knowledge buckets",description:"",icon:"graduation-cap",topics:[],markdown:"/markdown/OperationalDecisionManager/GeneralODM/Knowledgebuckets.md"},{route:"/SkillsTransfer",name:"Skills Transfer(L3-L2,SWAT-L2)",description:"",icon:"exchange-alt",topics:[],markdown:"/markdown/OperationalDecisionManager/GeneralODM/SkillsTransfer.md"},{route:"/CFsTrainingEnablement",name:"CFs Training Enablement",description:"",icon:"lightbulb",topics:[],markdown:"/markdown/OperationalDecisionManager/GeneralODM/CFsTrainingEnablement.md"}]},{route:"/Install,Upgrade,Migration",name:"Install, Upgrade, Migration",description:"",icon:"wrench",topics:[],markdown:"/markdown/OperationalDecisionManager/Install,Upgrade,Migration.md"},{route:"/ODMProfileTemplates",name:"ODM Profile Templates",description:"",icon:"file-alt",topics:[],markdown:"/markdown/OperationalDecisionManager/ODMProfileTemplates.md"},{route:"/Performance",name:"Performance",description:"",icon:"user-edit",topics:[],children:[{route:"/Generalperformancetuning",name:"General performance tuning",description:"",icon:"history",topics:[],markdown:"/markdown/OperationalDecisionManager/Performance/Generalperformancetuning.md"},{route:"/Hungthread&highCPU",name:"Hung thread & high CPU",description:"",icon:"microchip",topics:[],markdown:"/markdown/OperationalDecisionManager/Performance/Hungthread&highCPU.md"},{route:"/OOM",name:"OOM",description:"",icon:"ellipsis-h",topics:[],markdown:"/markdown/OperationalDecisionManager/Performance/OOM.md"}]},{route:"/DecisionCenter",name:"Decision Center",description:"",icon:"certificate",topics:[],children:[{route:"/DecisionGovernanceFramework",name:"Decision Governance Framework",description:"",icon:"align-justify",topics:[],markdown:"/markdown/OperationalDecisionManager/DecisionCenter/DecisionGovernanceFramework.md"},{route:"/Scurity&usermanagement",name:"Scurity & user management",description:"",icon:"user-friends",topics:[],markdown:"/markdown/OperationalDecisionManager/DecisionCenter/Scurity&usermanagement.md"},{route:"/Testandsimulation",name:"Test and simulation",description:"",icon:"keyboard",topics:[],markdown:"/markdown/OperationalDecisionManager/DecisionCenter/Testandsimulation.md"},{route:"/DecisionModelService",name:"Decision Model Service",description:"",icon:"expand-arrows-alt",topics:[],markdown:"/markdown/OperationalDecisionManager/DecisionCenter/DecisionModelService.md"}]},{route:"/DecisionServerRules",name:"Decision Server Rules",description:"",icon:"user-tag",topics:[],children:[{route:"/RuleDesigner",name:"Rule Designer",description:"",icon:"user-tag",topics:[],markdown:"/markdown/OperationalDecisionManager/DecisionServerRules/RuleDesigner.md"},{route:"/RESConsole",name:"RES Console",description:"",icon:"terminal",topics:[],markdown:"/markdown/OperationalDecisionManager/DecisionServerRules/RESConsole.md"},{route:"/RESruntime",name:"RES runtime",description:"",icon:"redo",topics:[],markdown:"/markdown/OperationalDecisionManager/DecisionServerRules/RESruntime.md"},{route:"/DecisionWarehouse",name:"Decision Warehouse",description:"",icon:"boxes",topics:[],markdown:"/markdown/OperationalDecisionManager/DecisionServerRules/DecisionWarehouse.md"}]},{route:"/DecisionServerInsights",name:"Decision Server Insights",description:"",icon:"server",topics:[],markdown:"/markdown/OperationalDecisionManager/DecisionServerInsights.md"},{route:"/ODMondocker",name:"ODM on docker",description:"",icon:"anchor",topics:[],markdown:"/markdown/OperationalDecisionManager/ODMondocker.md"},{route:"/DecisionComposer",name:"Decision Composer",description:"",icon:"hdd",topics:[],markdown:"/markdown/OperationalDecisionManager/DecisionComposer.md"}]},{route:"/BlueworksLive",name:"Blueworks Live",description:"",icon:"",children:[{route:"/AdminConsole",name:"Admin Console",description:"",icon:"terminal",topics:[],children:[{route:"/Customproperties",name:"Custom properties",description:"",icon:"edit",topics:[],markdown:"/markdown/BlueworksLive/AdminConsole/Customproperties.md"},{route:"/Customizeaccount",name:"Customize account",description:"",icon:"lock-open",topics:[],markdown:"/markdown/BlueworksLive/AdminConsole/Customizeaccount.md"},{route:"/Manageusers",name:"Manage users",description:"",icon:"user-circle",topics:[],markdown:"/markdown/BlueworksLive/AdminConsole/Manageusers.md"},{route:"/ManageBilling",name:"Manage Billing",description:"",icon:"bullseye",topics:[],markdown:"/markdown/BlueworksLive/AdminConsole/ManageBilling.md"},{route:"/ManageDiskspace",name:"Manage Disk space",description:"",icon:"save",topics:[],markdown:"/markdown/BlueworksLive/AdminConsole/ManageDiskspace.md"},{route:"/Security",name:"Security",description:"",icon:"shield-alt",topics:[],markdown:"/markdown/BlueworksLive/AdminConsole/Security.md"},{route:"/SinglesignonSSO",name:"Single sign on(SSO)",description:"",icon:"sign-in-alt",topics:[],markdown:"/markdown/BlueworksLive/AdminConsole/Singlesignon(SSO).md"}]},{route:"/BlueworksLiveService",name:"Blueworks Live Service",description:"",icon:"server",topics:[],children:[{route:"/API",name:"API",description:"",topics:[],icon:"retweet",markdown:"/markdown/BlueworksLive/BlueworksLiveService/API.md"},{route:"/Attachfiles",name:"Attach files",description:"",topics:[],icon:"file",markdown:"/markdown/BlueworksLive/BlueworksLiveService/Attachfiles.md"},{route:"/CollaborationandSharing",name:"Collaboration and Sharing",description:"",topics:[],icon:"share-square",markdown:"/markdown/BlueworksLive/BlueworksLiveService/CollaborationandSharing.md"},{route:"/Glossary",name:"Glossary",description:"",topics:[],icon:"th",markdown:"/markdown/BlueworksLive/BlueworksLiveService/Glossary.md"},{route:"/Import,ExportandPrinting",name:"Import,Export and Printing",description:"",topics:[],icon:"plus-square",markdown:"/markdown/BlueworksLive/BlueworksLiveService/Import,ExportandPrinting.md"},{route:"/Processapp",name:"Process app",description:"",topics:[],icon:"tablet-alt",markdown:"/markdown/BlueworksLive/BlueworksLiveService/Processapp.md"},{route:"/Processdiagram",name:"Process diagram",description:"",topics:[],icon:"chart-pie",markdown:"/markdown/BlueworksLive/BlueworksLiveService/Processdiagram.md"},{route:"/SearchandFilterTools",name:"Search and Filter Tools",description:"",topics:[],icon:"search",markdown:"/markdown/BlueworksLive/BlueworksLiveService/SearchandFilterTools.md"},{route:"/Space",name:"Space",description:"",topics:[],icon:"newspaper",markdown:"/markdown/BlueworksLive/BlueworksLiveService/Space.md"}]},{route:"/Account",name:"Account",description:"",icon:"user-circle",topics:[],children:[{route:"/PersonalizeAccount",name:"Personalize Account",description:"",icon:"user-circle",topics:[],markdown:"/markdown/BlueworksLive/Account/PersonalizeAccount.md"},{route:"/UserSettings",name:"User Settings",description:"",icon:"user-cog",topics:[],owner:"eugene",markdown:"/markdown/BlueworksLive/Account/UserSettings.md"}]},{route:"/BusinessProcessManagement",name:"Business Process Management(BPM)",description:"",icon:"bold",topics:[],markdown:"/markdown/BlueworksLive/BusinessProcessManagement.md"},{route:"/Operations",name:"Operations",description:"",icon:"project-diagram",topics:[],children:[{route:"/SSAErequest",name:"SSAE request",description:"",icon:"chevron-right",topics:[],markdown:"/markdown/BlueworksLive/Operations/SSAErequest.md"},{route:"/VulnerabilityRequest",name:"Vulnerability Request",description:"",icon:"chevron-left",topics:[],markdown:"/markdown/BlueworksLive/Operations/VulnerabilityRequest.md"}]},{route:"/SalesandBilling",name:"Sales and Billing",description:"",icon:"futbol",owner:"thomas",topics:[],children:[{route:"/Account",name:"Account",description:"",icon:"user-circle",topics:[],markdown:"/markdown/BlueworksLive/SalesandBilling/Account.md"},{route:"/Billing",name:"Billing",description:"",icon:"bullseye",owner:"thomas",topics:[],markdown:"/markdown/BlueworksLive/SalesandBilling/Billing.md"}]},{route:"/Support",name:"Support",description:"",icon:"phone-volume",topics:[],children:[{route:"/RequestAccesstoCommunity",name:"Request Access to Community",description:"",icon:"comments",topics:[],markdown:"/markdown/BlueworksLive/Support/RequestAccesstoCommunity.md"}]}]},{route:"/RoboticProcessAutomation",name:"Robotic Process Automation",description:"Robotic Process Automation",icon:"",topics:[],children:[{route:"/Install,Configure,Migrate",name:"Install, Configure, Migrate",description:"",icon:"wrench",topics:[],children:[{route:"/ControlRoom",name:"Control Room",description:"",icon:"door-closed",topics:[],markdown:"/markdown/RoboticProcessAutomation/Install,Configure,Migrate/ControlRoom.md"},{route:"/BotCreatorRunner",name:"Bot Creator/Runner",description:"",icon:"stroopwafel",topics:[],markdown:"/markdown/RoboticProcessAutomation/Install,Configure,Migrate/BotCreatorRunner.md"},{route:"/HA",name:"HA",description:"",icon:"filter",topics:[],markdown:"/markdown/RoboticProcessAutomation/Install,Configure,Migrate/HA.md"},{route:"/VersionControl",name:"Version Control",description:"",icon:"universal-access",topics:[],markdown:"/markdown/RoboticProcessAutomation/Install,Configure,Migrate/VersionControl.md"}]},{route:"/BotDevelopment&Deployment",name:"Bot Development & Deployment",description:"",icon:"robot",topics:[],children:[{route:"/Connectivity",name:"Connectivity",description:"",icon:"link",topics:[],markdown:"/markdown/RoboticProcessAutomation/BotDevelopment&Deployment/Connectivity.md"},{route:"/Metabot",name:"Metabot",description:"",icon:"diagnoses",topics:[],markdown:"/markdown/RoboticProcessAutomation/BotDevelopment&Deployment/Metabot.md"},{route:"/CredentialVault",name:"Credential Vault",description:"",icon:"credit-card",topics:[],markdown:"/markdown/RoboticProcessAutomation/BotDevelopment&Deployment/CredentialVault.md"},{route:"/SAPIntegration",name:"SAP Integration",description:"",icon:"sitemap",topics:[],markdown:"/markdown/RoboticProcessAutomation/BotDevelopment&Deployment/SAPIntegration.md"}]},{route:"/TaskBotExecution",name:"Task Bot Execution",description:"",icon:"tasks",topics:[],children:[{route:"/Workload",name:"Workload",description:"",icon:"globe",topics:[],markdown:"/markdown/RoboticProcessAutomation/TaskBotExecution/Workload.md"},{route:"/Devices",name:"Devices",description:"",icon:"object-group",topics:[],markdown:"/markdown/RoboticProcessAutomation/TaskBotExecution/Devices.md"},{route:"/UserManagement",name:"User Management",description:"",icon:"id-card",topics:[],markdown:"/markdown/RoboticProcessAutomation/TaskBotExecution/UserManagement.md"},{route:"/Auto-Login",name:"Auto-Login",description:"",icon:"sign-in-alt",topics:[],markdown:"/markdown/RoboticProcessAutomation/TaskBotExecution/Auto-Login.md"},{route:"/Monitoring",name:"Monitoring",description:"",icon:"desktop",topics:[],markdown:"/markdown/RoboticProcessAutomation/TaskBotExecution/Monitoring.md"}]}]}]}}});
//# sourceMappingURL=app.e6580411.js.map