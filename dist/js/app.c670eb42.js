(function(e){function n(n){for(var i,r,s=n[0],c=n[1],m=n[2],d=0,u=[];d<s.length;d++)r=s[d],a[r]&&u.push(a[r][0]),a[r]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(e[i]=c[i]);l&&l(n);while(u.length)u.shift()();return t.push.apply(t,m||[]),o()}function o(){for(var e,n=0;n<t.length;n++){for(var o=t[n],i=!0,r=1;r<o.length;r++){var s=o[r];0!==a[s]&&(i=!1)}i&&(t.splice(n--,1),e=c(c.s=o[0]))}return e}var i={},r={app:0},a={app:0},t=[];function s(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-7beb209c":"822da275","chunk-06178758":"65e8305b","chunk-3d709b4a":"264dd1f1"}[e]+".js"}function c(n){if(i[n])return i[n].exports;var o=i[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,c),o.l=!0,o.exports}c.e=function(e){var n=[],o={"chunk-7beb209c":1,"chunk-06178758":1};r[e]?n.push(r[e]):0!==r[e]&&o[e]&&n.push(r[e]=new Promise(function(n,o){for(var i="css/"+({}[e]||e)+"."+{"chunk-7beb209c":"a3cd9af0","chunk-06178758":"8a0e0b57","chunk-3d709b4a":"31d6cfe0"}[e]+".css",a=c.p+i,t=document.getElementsByTagName("link"),s=0;s<t.length;s++){var m=t[s],d=m.getAttribute("data-href")||m.getAttribute("href");if("stylesheet"===m.rel&&(d===i||d===a))return n()}var u=document.getElementsByTagName("style");for(s=0;s<u.length;s++){m=u[s],d=m.getAttribute("data-href");if(d===i||d===a)return n()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=n,l.onerror=function(n){var i=n&&n.target&&n.target.src||a,t=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");t.code="CSS_CHUNK_LOAD_FAILED",t.request=i,delete r[e],l.parentNode.removeChild(l),o(t)},l.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(l)}).then(function(){r[e]=0}));var i=a[e];if(0!==i)if(i)n.push(i[2]);else{var t=new Promise(function(n,o){i=a[e]=[n,o]});n.push(i[2]=t);var m,d=document.createElement("script");d.charset="utf-8",d.timeout=120,c.nc&&d.setAttribute("nonce",c.nc),d.src=s(e),m=function(n){d.onerror=d.onload=null,clearTimeout(u);var o=a[e];if(0!==o){if(o){var i=n&&("load"===n.type?"missing":n.type),r=n&&n.target&&n.target.src,t=new Error("Loading chunk "+e+" failed.\n("+i+": "+r+")");t.type=i,t.request=r,o[1](t)}a[e]=void 0}};var u=setTimeout(function(){m({type:"timeout",target:d})},12e4);d.onerror=d.onload=m,document.head.appendChild(d)}return Promise.all(n)},c.m=e,c.c=i,c.d=function(e,n,o){c.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,n){if(1&n&&(e=c(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(c.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var i in e)c.d(o,i,function(n){return e[n]}.bind(null,i));return o},c.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(n,"a",n),n},c.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},c.p="/dba-support/DBA-Education/",c.oe=function(e){throw console.error(e),e};var m=window["webpackJsonp"]=window["webpackJsonp"]||[],d=m.push.bind(m);m.push=n,m=m.slice();for(var u=0;u<m.length;u++)n(m[u]);var l=d;t.push([0,"chunk-vendors"]),o()})({0:function(e,n,o){e.exports=o("56d7")},"56d7":function(e,n,o){"use strict";o.r(n);o("cadf"),o("551c"),o("f751"),o("097d");var i=o("2b0e"),r=function(){var e=this,n=e.$createElement,o=e._self._c||n;return o("div",{attrs:{id:"app"}},[o("Header",{on:{toggleMenu:e.toggleMenu}}),o("main",[o("nav",{staticClass:"main__nav",class:{active:e.isNavOpen}},[o("div",{staticClass:"nav__search"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.searchKeywords,expression:"searchKeywords"}],staticClass:"nav__search-input",attrs:{placeholder:"Type to search"},domProps:{value:e.searchKeywords},on:{keyup:e.search,input:function(n){n.target.composing||(e.searchKeywords=n.target.value)}}}),e.searchResultsVisible?o("svg",{staticClass:"nav__search-icon",attrs:{tabindex:"0",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 52 52"},on:{click:e.reset,keyup:function(n){return!n.type.indexOf("key")&&e._k(n.keyCode,"enter",13,n.key,"Enter")?null:e.reset(n)}}},[o("path",{attrs:{d:"M26 0C11.664 0 0 11.663 0 26s11.664 26 26 26 26-11.663 26-26S40.336 0 26 0zm0 50C12.767 50 2 39.233 2 26S12.767 2 26 2s24 10.767 24 24-10.767 24-24 24z"}}),o("path",{attrs:{d:"M35.707 16.293a.999.999 0 0 0-1.414 0L26 24.586l-8.293-8.293a.999.999 0 1 0-1.414 1.414L24.586 26l-8.293 8.293a.999.999 0 1 0 1.414 1.414L26 27.414l8.293 8.293a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414L27.414 26l8.293-8.293a.999.999 0 0 0 0-1.414z"}})]):e._e()]),o("vue-tree-navigation",{attrs:{items:e.tocItems,defaultOpenLevel:1}})],1),e.searchResultsVisible?o("div",{staticClass:"container"},[e.searchResults.length?o("h1",{staticClass:"results__heading"},[e._v(e._s(e.searchResults.length)+' results matching "'+e._s(e.searchKeywords)+'"')]):e.content?o("h1",{staticClass:"results__heading"},[e._v('No results matching "'+e._s(e.searchKeywords)+'"')]):o("h1",{staticClass:"results__heading"},[e._v("Loading...")]),e.searchResults?o("ul",{staticClass:"results__search"},e._l(e.searchResults,function(n,i){return o("li",{key:i,staticClass:"result"},[o("header",{staticClass:"result__header"},[o("router-link",{attrs:{to:n.path}},[o("h2",{staticClass:"result__title"},[e._v(e._s(n.name))])]),e._l(n.topics,function(n,i){return o("span",{key:i,staticClass:"tag",attrs:{tabindex:"0"},on:{keyup:function(o){return!o.type.indexOf("key")&&e._k(o.keyCode,"enter",13,o.key,"Enter")?null:e.searchTopic(n)},click:function(o){return e.searchTopic(n)}}},[e._v(e._s(n))])})],2),o("p",[e._v(e._s(e._f("truncate")(n.text,300,"...")))])])}),0):e._e()]):o("router-view")],1)],1)},a=[],t=o("cebc"),s=(o("a481"),o("386d"),o("ac4d"),o("8a81"),o("ac6a"),o("661c")),c=o.n(s),m=o("8f8a"),d=function(){var e=this,n=e.$createElement,o=e._self._c||n;return o("header",{staticClass:"header"},[o("div",{staticClass:"header__brand"},[o("svg",{ref:"nav__open",staticClass:"header__hamburger",attrs:{tabindex:"0",viewBox:"0 0 512 512",xmlns:"http://www.w3.org/2000/svg"},on:{keyup:function(n){return!n.type.indexOf("key")&&e._k(n.keyCode,"enter",13,n.key,"Enter")?null:e.openNavigation(n)},click:e.openNavigation}},[o("path",{attrs:{d:"M424 394H89a8 8 0 0 1 0-16h335a8 8 0 0 1 0 16zM424 265H89a8 8 0 0 1 0-16h335a8 8 0 0 1 0 16zM424 135H89a8 8 0 0 1 0-16h335a8 8 0 0 1 0 16z"}})]),o("span",{staticClass:"header__name"},[e._v(e._s(e.name)+" "),o("b")])])])},u=[],l={name:"header-component",data:function(){return{isVisible:!1,isDesktop:!1,name:m["a"].getBaseConfig().appName,list:m["a"].getBaseConfig().headerNavigation}},created:function(){window.innerWidth>=780&&(this.isDesktop=!0),window.addEventListener("resize",this.handleResize)},beforeDestroy:function(){window.removeEventListener("resize",this.handleResize)},methods:{handleResize:function(e){e.currentTarget.innerWidth>=780?this.isDesktop=!0:this.isDesktop=!1},openNavigation:function(){this.$emit("toggleMenu")},closeNavigation:function(e){this.$emit("toggleMenu")}}},p=l,g=o("2877"),w=Object(g["a"])(p,d,u,!1,null,null,null),h=w.exports,k={name:"app",data:function(){return{baseUrl:"https://pages.github.ibm.com/dba-support/DBA-Education",isNavOpen:!1,tocItems:m["a"].getPages(),content:null,searchResultsVisible:!1,searchResults:null,searchKeywords:null,searchIndex:null}},components:{Header:h},created:function(){var e=this;m["a"].getStatus().then(function(n){if(void 0!==n){var o=n;e.searchIndex=c()(function(){this.addField("name"),this.addField("text"),this.addField("description"),this.setRef("path");var e=!0,n=!1,i=void 0;try{for(var r,a=o[Symbol.iterator]();!(e=(r=a.next()).done);e=!0){var t=r.value;this.addDoc(t)}}catch(s){n=!0,i=s}finally{try{e||null==a.return||a.return()}finally{if(n)throw i}}}),e.content=n||[],e.searchKeywords&&e.search()}}).catch(function(){})},methods:{toggleMenu:function(){this.isNavOpen=!this.isNavOpen},search:function(e){var n=this;if(this.searchKeywords&&this.content&&this.searchIndex){var o=Object.assign({},this.$route.query,{search:this.searchKeywords});this.$router.push({query:o}),this.searchResultsVisible=!0;var i="topic:";if(this.searchKeywords.indexOf("topic:")>-1)this.searchResults=this.content.filter(function(e){for(var o=(e.topics||[]).map(function(e){return e.toLowerCase()}),r=!1,a=0;a<o.length;a++)o[a].indexOf(n.searchKeywords.toLowerCase().replace(i,""))>-1&&(r=!0);return r});else{for(var r=this.searchIndex.search(this.searchKeywords,{fields:{name:{boost:4},text:{boost:2},description:{boost:1}}}),a=0;a<r.length;a++)r[a]=Object(t["a"])({},this.searchIndex.documentStore.getDoc(r[a].ref),r[a]);this.searchResults=r}}else this.reset()},searchTopic:function(e){var n="topic:".concat(e),o=Object.assign({},this.$route.query,{search:n});this.searchKeywords=n,this.search(),this.$router.push({query:o})},reset:function(){var e=Object.assign({},this.$route.query);delete e.search,this.$router.replace({query:e}),this.searchResultsVisible=!1,this.searchKeywords="",this.searchResults=[]}},watch:{$route:{immediate:!0,handler:function(e,n){var o=window.location.href;if(o.indexOf("?")>-1&&o.indexOf("search=")>-1){var i=o.substring(o.indexOf("?")+1),r=JSON.parse('{"'+decodeURIComponent(i.replace(/&/g,'","').replace(/=/g,'": "'))+'"}');r&&r.search&&(this.searchKeywords=r.search,this.search())}else this.searchKeywords="",this.searchResultsVisible=!1}}}},b=k,v=(o("5c0b"),Object(g["a"])(b,r,a,!1,null,null,null)),f=v.exports,S=o("8c4f");i["a"].use(S["a"]);var M=new S["a"]({base:"/dba-support/DBA-Education/",routes:m["a"].getRoutingConfig()}),B=o("12d3"),y=o.n(B),P=o("ecee"),C=o("ad3d"),D=o("c074"),A=o("cb5b"),R=o("da3e"),E=o("faaa"),O=o("42b9");A["a"].library.add(R["a"]),A["a"].library.add(E["a"]),A["a"].library.add(O["a"]),i["a"].use(y.a),P["c"].add(D["m"],D["Ab"],D["lb"],D["Z"],D["kb"],D["Fb"],D["O"],D["I"],D["J"],D["pb"],D["X"],D["rb"],D["Eb"],D["E"],D["D"],D["zb"],D["wb"],D["R"],D["C"],D["ob"],D["bb"],D["w"],D["W"],D["hb"],D["k"],D["c"],D["Cb"],D["eb"],D["d"],D["r"],D["S"],D["Db"],D["U"],D["G"],D["t"],D["sb"],D["g"],D["H"],D["vb"],D["x"],D["a"],D["f"],D["A"],D["o"],D["z"],D["mb"],D["T"],D["Ib"],D["u"],D["db"],D["F"],D["V"],D["yb"],D["xb"],D["fb"],D["Y"],D["h"],D["nb"],D["ub"],D["y"],D["gb"],D["qb"],D["q"],D["K"],D["jb"],D["ab"],D["i"],D["Bb"],D["e"],D["l"],D["v"],D["n"],D["Q"],D["j"],D["L"],D["b"],D["P"],D["ib"],D["tb"],D["cb"],D["Hb"],D["s"],D["p"],D["M"],D["B"],D["N"],D["Gb"]);var I=function(e,n,o){o=o||"...";var i=document.createElement("div");i.innerHTML=e;var r=i.textContent;return r.length>n?r.slice(0,n)+o:r};i["a"].filter("truncate",I),i["a"].component("font-awesome-icon",C["a"]),i["a"].config.productionTip=!1,new i["a"]({el:"#app",router:M,render:function(e){return e(f)}})},"5c0b":function(e,n,o){"use strict";var i=o("5e27"),r=o.n(i);r.a},"5e27":function(e,n,o){},"8f8a":function(e,n,o){"use strict";o("7f7f");var i=o("ac4b"),r=o("bc3a"),a=o.n(r),t="https://hooks.slack.com/services/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",s=function(){return o.e("chunk-7beb209c").then(o.bind(null,"11a9"))},c={};function m(e,n){e.path=e.route,e.breadCrumb=n?JSON.parse(JSON.stringify(n.breadCrumb)):[];var o=null!=n?n.path+e.route:"/";e.breadCrumb.push({name:e.name,path:o}),e.component=s,null!=n&&(e.path=n.path+e.route);var i=[];if(e.children)for(var r in e.children){var a=e.children[r];i.push({name:a.name,description:a.description,path:e.path+a.route,icon:a.icon,iconn:a.iconn,bgColor:a.bgColor,owner:a.owner,topics:a.topics}),m(a,e)}e.meta={tiles:i.length>0?i:null,name:e.name,description:e.description,markdown:e.markdown,icon:e.icon,iconn:e.iconn,bgColor:e.bgColor,owner:e.owner,topics:e.topics,breadCrumb:e.breadCrumb},c[e.path]=e.meta}function d(e){var n=JSON.parse(JSON.stringify(e.pages));for(var o in n){var i=n[o];m(i,null)}return n.push({path:"/",redirect:e.landingPage}),n}n["a"]={getMetaById:function(e){return c[e]},traverse:function(e){if(e.name&&(e.title=e.name,delete e.name),Array.isArray(e.children))for(var n=0;n<e.children.length;n++)this.traverse(e.children[n])},getRoutingConfig:function(){var e=d(this.getBaseConfig());return this.traverse(e[0]),e},getContent:function(e,n){return new Promise(function(o,i){var r={name:e.name,description:e.description,owner:e.owner,path:n?"".concat(n).concat(e.route):e.route,text:"",wordCount:0,topics:e.topics};return e.markdown?o(r):(e.children&&(r.type="TOC"),o(r))})},getBaseConfig:function(){return i},getPages:function(){return this.getBaseConfig().pages},getStatus:function(){return new Promise(function(e,n){var o="./content.json";a.a.get(o).then(function(n){e(n.data)}).catch(function(e){return n(e)})})},sendSlackMessage:function(e,n){var o="https://pages.github.ibm.com/dba-support/DBA-Education"+e,i=o+" : "+n,r={text:i};a.a.post(t,JSON.stringify(r)).then(function(e){}).catch(function(e){console.error("FAILED: Send slack webhook",e)})}}},ac4b:function(e){e.exports={appName:"  IBM DBA Support Education",headerNavigation:[{name:"DBA-Education",path:"/DBA-Education"}],landingPage:"/BusinessProcessManager",topics:["news","roles","access","process","reporting","notification","pager-duty","customer","case-status","e2c","case-field","omni","routing","assignment","product","case","account","contact","work-order","skills-case","collab-case","activity","defect","chat","search","watson","knowledge","attachment","field-service","teams","support-mission","time","caseview","policy","deepdive","portal","entitlement","chatter"],pages:[{route:"/BusinessProcessManager",name:"Business Process Manager/Business Automation Workflow",description:"",icon:"",children:[{route:"/GeneralBPM",name:"General BPM/BAW",description:"",icon:"bookmark",topics:[],children:[{route:"/Learningroadmap",name:"Learning Plan",description:"qingzou@cn.ibm.com;shangjin@cn.ibm.com",owner:"@Qing Zou,@Jin Shang",icon:"chalkboard-teacher",topics:[],markdown:"/markdown/BusinessProcessManager/GeneralBPM/Learningroadmap.md"},{route:"/DeepDive",name:"Deep Dive",description:"qingzou@cn.ibm.com",owner:"@Qing Zou",icon:"street-view",topics:[],markdown:"/markdown/BusinessProcessManager/GeneralBPM/DeepDive.md"},{route:"/SkillsTransfer",name:"Skills Transfer (Dev/L3-L2, SWAT-L2)",description:"shangjin@cn.ibm.com",owner:"@Jin Shang",icon:"exchange-alt",topics:[],markdown:"/markdown/BusinessProcessManager/GeneralBPM/SkillsTransfer.md"},{route:"/CFsTraining",name:"CFs Training",description:"shangjin@cn.ibm.com",owner:"@Jin Shang",icon:"lightbulb",topics:[],markdown:"/markdown/BusinessProcessManager/GeneralBPM/CFsTrainingEnablement.md"},{route:"/TestEnvironments",name:"Test Environments",description:"enricom@cn.ibm.com",owner:"@Enrico Monteleone",icon:"sitemap",topics:[],markdown:"/markdown/BusinessProcessManager/GeneralBPM/TestEnvironments.md"},{route:"/Knowledgebuckets",name:"Knowledge Buckets",description:"",icon:"graduation-cap",topics:[],markdown:"/markdown/BusinessProcessManager/GeneralBPM/Knowledgebuckets.md"}]},{route:"/Install,Upgrade,Configuration",name:"Install, Upgrade, Configuration",description:"",icon:"wrench",topics:[],children:[{route:"/Installation",name:"Installation",description:"FHERDADE@de.ibm.com",owner:"@Fabiola Herdade",topics:[],icon:"wrench",markdown:"/markdown/BusinessProcessManager/Install,Upgrade,Configuration/InstallDEConfig.md"},{route:"/Upgrade",name:"Upgrade",description:"bjzysun@cn.ibm.com",owner:"@Zhen Ye Sun",topics:[],icon:"cogs",markdown:"/markdown/BusinessProcessManager/Install,Upgrade,Configuration/Upgrade.md"},{route:"/Migration",name:"Migration",description:"bjzysun@cn.ibm.com",owner:"@Zhen Ye Sun",topics:[],icon:"dolly-flatbed",markdown:"/markdown/BusinessProcessManager/Install,Upgrade,Configuration/Migration.md"},{route:"/DisasterRecovery",name:"Disaster Recovery",description:"enricom@cn.ibm.com",owner:"@Enrico Monteleone",topics:[],icon:"toolbox",markdown:"/markdown/BusinessProcessManager/Install,Upgrade,Configuration/DisasterRecovery.md"},{route:"/DE Configuration",name:"DE Configuration",description:"enricom@cn.ibm.com",owner:"@Enrico Monteleone",topics:[],icon:"sitemap",markdown:"/markdown/BusinessProcessManager/Install,Upgrade,Configuration/Configuration.md"},{route:"/Endpoint Configuration",name:"Endpoint Configuration",description:"shyuan@cn.ibm.com",owner:"@Yuan Shang",topics:[],icon:"list-alt",markdown:"/markdown/BusinessProcessManager/Install,Upgrade,Configuration/EndpointConfiguration.md"}]},{route:"/ApplicationManagement",name:"Application Management",description:"",icon:"tasks",topics:[],children:[{route:"/EARDeployment",name:"EAR Deployment",description:"shyuan@cn.ibm.com",owner:"@Yuan Shang",icon:"flag",topics:[],markdown:"/markdown/BusinessProcessManager/ApplicationManagement/EARDeployment.md"},{route:"/SnapshotManagement",name:"Snapshot Management",description:"shyuan@cn.ibm.com",owner:"@Yuan Shang",icon:"folder-open",topics:[],markdown:"/markdown/BusinessProcessManager/ApplicationManagement/SnapshotManagement.md"},{route:"/InstanceMigration",name:"Instance Migration",description:"shyuan@cn.ibm.com",owner:"@Yuan Shang",icon:"dolly-flatbed",topics:[],markdown:"/markdown/BusinessProcessManager/ApplicationManagement/InstanceMigration.md"}]},{route:"/BPMDevToolsandRepository",name:"BPM Dev Tools and Repository",description:"",icon:"code",topics:[],children:[{route:"/IBMIntegrationDesigner",name:"IBM Integration Designer",description:"Andreas.Jaensch@de.ibm.com",owner:"@Andreas Jaensch",icon:"ruler-combined",topics:[],markdown:"/markdown/BusinessProcessManager/BPMDevToolsandRepository/IBMIntegrationDesigner.md"},{route:"/DesktopProcessDesigner",name:"Desktop Process Designer/Web PD",description:"michaela.trautwein@de.ibm.com",owner:"@Michaela Trautwein-Ostner",icon:"tape",topics:[],markdown:"/markdown/BusinessProcessManager/BPMDevToolsandRepository/DesktopProcessDesigner.md"},{route:"/ServerConnection",name:"Server Connection",description:"shyuan@cn.ibm.com",owner:"@Yuan Shang",icon:"map-marker-alt",topics:[],markdown:"/markdown/BusinessProcessManager/BPMDevToolsandRepository/ServerConnection.md"}]},{route:"/Performance",name:"Performance",description:"",icon:"user-edit",topics:[],children:[{route:"/HighCPU",name:"High CPU",description:"jennthom@us.ibm.com",owner:"@Jennifer Thompson",icon:"microchip",topics:[],markdown:"/markdown/BusinessProcessManager/GeneralPerformance/HighCPU.md"},{route:"/OutofMemory",name:"Out of Memory/High Memory",description:"jennthom@us.ibm.com",owner:"@Jennifer Thompson",icon:"ellipsis-h",topics:[],markdown:"/markdown/BusinessProcessManager/GeneralPerformance/OutofMemory.md"},{route:"/Database",name:"Database",description:"michaela.trautwein@de.ibm.com",owner:"@Michaela Trautwein-Ostner",icon:"sitemap",topics:[],markdown:"/markdown/BusinessProcessManager/GeneralPerformance/Database.md"},{route:"/Housekeeping",name:"Housekeeping",description:"qingzou@cn.ibm.com",owner:"@Qing Zou",icon:"tape",topics:[],markdown:"/markdown/BusinessProcessManager/GeneralPerformance/Housekeeping.md"}]},{route:"/BusinessUserExperience",name:"Business User Experience",description:"",icon:"podcast",topics:[],children:[{route:"/ProcessPortal",name:"Process Portal",description:"smmerris@us.ibm.com",owner:"@Seth Merriss",icon:"bookmark",topics:[],markdown:"/markdown/BusinessProcessManager/BusinessUserExperience/ProcessPortal.md"},{route:"/HumanServices",name:"Human Services",description:"ellia@ca.ibm.com",owner:"Elli Afshar",icon:"podcast",topics:[],markdown:"/markdown/BusinessProcessManager/BusinessUserExperience/HumanServices.md"},{route:"/ToolkitControls",name:"Coaches and Toolkits",description:"ellia@ca.ibm.com",owner:"Elli Afshar",icon:"toolbox",topics:[],markdown:"/markdown/BusinessProcessManager/BusinessUserExperience/ToolkitControls.md"},{route:"/BusinessSpace",name:"Business Space",description:"fangyyan@cn.ibm.com",owner:"@Yan Fang",icon:"user",topics:[],markdown:"/markdown/BusinessProcessManager/BusinessUserExperience/BusinessSpace.md"},{route:"/ProcessFederatedServer",name:"Process Federated Server",description:"smmerris@us.ibm.com",owner:"@Seth Merriss",icon:"print",topics:[],markdown:"/markdown/BusinessProcessManager/BusinessUserExperience/PFS.md"}]},{route:"/Monitoring",name:"Monitoring",description:"",icon:"desktop",topics:[],children:[{route:"/BusinessAutomationInsights",name:"Business Automation Insights",description:"mluczkowiak@us.ibm.com",owner:"@Matt Luczkowiak",icon:"archive",topics:[],markdown:"/markdown/BusinessProcessManager/Monitoring/BusinessAutomationInsights.md"},{route:"/BusinessMonitor",name:"Business Monitor",description:"klaus.ulrich@de.ibm.com",owner:"@Klaus Ulrich",icon:"desktop",topics:[],markdown:"/markdown/BusinessProcessManager/Monitoring/BusinessMonitor.md"},{route:"/PerformanceDataWarehouse",name:"Performance Data Warehouse",description:"klaus.ulrich@de.ibm.com",owner:"@Klaus Ulrich",icon:"database",topics:[],markdown:"/markdown/BusinessProcessManager/Monitoring/PerformanceDataWarehouse.md"}]},{route:"/Security",name:"Security",description:"",icon:"shield-alt",topics:[],children:[{route:"/SecurityScans",name:"Security Scans",description:"qingzou@cn.ibm.com",owner:"@Qing Zou",icon:"hourglass-start",topics:[],markdown:"/markdown/BusinessProcessManager/Security/SecurityScans.md"},{route:"/SSL",name:"SSL",description:"shangjin@cn.ibm.com",owner:"@Jin Shang",icon:"shield-alt",topics:[],markdown:"/markdown/BusinessProcessManager/Security/SSL.md"},{route:"/SSO",name:"SSO",description:"shangjin@cn.ibm.com",owner:"@Jin Shang",icon:"sign-in-alt",topics:[],markdown:"/markdown/BusinessProcessManager/Security/SSO.md"},{route:"/User&GroupSecurity",name:"User and Group Security",description:"bkonopik@us.ibm.com",icon:"users",owner:"@Brad Konopik",topics:[],markdown:"/markdown/BusinessProcessManager/Security/User&GroupSecurity.md"}]},{route:"/AdvancedContent",name:"Advanced Content",description:"",icon:"file-signature",topics:[],children:[{route:"/AIS",name:"Advanced Integration Service",description:"shangjin@cn.ibm.com;lifengbj@cn.ibm.com",owner:"@Jin Shang,@Feng Li",icon:"file-archive",topics:[],markdown:"/markdown/BusinessProcessManager/AdvancedContent/AIS.md"},{route:"/BPC",name:"Business Process Choreographer",description:"ILGUEN@de.ibm.com;siro@it.ibm.com",owner:"@Serhad Ilgün,@Dino Sironi",icon:"square",topics:[],markdown:"/markdown/BusinessProcessManager/AdvancedContent/BPC.md"},{route:"/Bindings",name:"Bindings",description:"shangjin@cn.ibm.com;lifengbj@cn.ibm.com",owner:"@Jin Shang,@Feng Li",icon:"industry",topics:[],markdown:"/markdown/BusinessProcessManager/AdvancedContent/Bindings.md"},{route:"/SIB",name:"Service Integration Bus",description:"shangjin@cn.ibm.com;lifengbj@cn.ibm.com",owner:"@Jin Shang,@Feng Li",icon:"star",topics:[],markdown:"/markdown/BusinessProcessManager/AdvancedContent/SIB.md"},{route:"/FailedEvent",name:"Failed Event",description:"shangjin@cn.ibm.com;lifengbj@cn.ibm.com",owner:"@Jin Shang,@Feng Li",icon:"calendar-times",topics:[],markdown:"/markdown/BusinessProcessManager/AdvancedContent/FailedEvent.md"},{route:"/Adapters",name:"Adapters",description:"lifengbj@cn.ibm.com",owner:"@Feng Li",icon:"sliders-h",topics:[],markdown:"/markdown/BusinessProcessManager/AdvancedContent/Adapters.md"},{route:"/Mediation",name:"Mediation",description:"shangjin@cn.ibm.com",owner:"@Jin Shang",icon:"file-medical",topics:[],markdown:"/markdown/BusinessProcessManager/AdvancedContent/Mediation.md"}]},{route:"/StandardRuntime",name:"Standard Runtime",description:"",icon:"server",topics:[],children:[{route:"/BPD",name:"BPD & Service Engine",description:"nldillard@us.ibm.com",owner:"@Nathan Dillard",icon:"file-alt",topics:[],markdown:"/markdown/BusinessProcessManager/StandardRuntime/BPD.md"},{route:"/EventManager",name:"Event Manager",description:"nldillard@us.ibm.com",owner:"@Nathan Dillard",icon:"calendar-minus",topics:[],markdown:"/markdown/BusinessProcessManager/StandardRuntime/EventManager.md"},{route:"/JSAPI,RESTAPI",name:"JavaScript & REST API",description:"nldillard@us.ibm.com",owner:"@Nathan Dillard",icon:"retweet",topics:[],markdown:"/markdown/BusinessProcessManager/StandardRuntime/JSAPI,RESTAPI.md"},{route:"/WebService",name:"Web Service",description:"shangjin@cn.ibm.com",owner:"@Jin Shang",icon:"map-marker-alt",topics:[],markdown:"/markdown/BusinessProcessManager/StandardRuntime/WebService.md"},{route:"/UCA",name:"Undercover Agent (UCA)",description:"lifengbj@cn.ibm.com",owner:"@Feng Li",icon:"star",topics:[],markdown:"/markdown/BusinessProcessManager/StandardRuntime/UCA.md"},{route:"/ProcessAdminConsole",name:"Process Admin Console",description:"shangjin@cn.ibm.com;shyuan@cn.ibm.com",owner:"@Jin Shang,@Yuan Shang",icon:"user",topics:[],markdown:"/markdown/BusinessProcessManager/StandardRuntime/ProcessAdminConsole.md"},{route:"/DocumentStore&ECMIntegration",name:"Document Store & ECM Integration",description:"shangjin@cn.ibm.com",owner:"@Jin Shang",icon:"sitemap",topics:[],markdown:"/markdown/BusinessProcessManager/StandardRuntime/DocumentStore&ECMIntegration.md"}]}]},{route:"/OperationalDecisionManager",name:"Operational Decision Manager",description:"",icon:"",topics:[],children:[{route:"/GeneralODM",name:"General ODM",description:"",icon:"bookmark",topics:[],children:[{route:"/Acronymslist",name:"Acronyms list",description:"ELEBRAS@jp.ibm.com",owner:"@Erwan Le Bras",icon:"file-alt",topics:[],markdown:"/markdown/OperationalDecisionManager/GeneralODM/Acronymslist.md"},{route:"/Learningroadmap",name:"Learning Roadmap",description:"renyren@cn.ibm.com",owner:"@Ren Yan",icon:"chalkboard-teacher",topics:[],markdown:"/markdown/OperationalDecisionManager/GeneralODM/Learningroadmap.md"},{route:"/SkillsTransfer",name:"Skills Transfer",description:"",owner:"",icon:"exchange-alt",topics:[],markdown:"/markdown/OperationalDecisionManager/GeneralODM/SkillsTransfer.md"},{route:"/Knowledgebuckets",name:"Knowledge Buckets",description:"",owner:"",icon:"graduation-cap",topics:[],markdown:"/markdown/OperationalDecisionManager/GeneralODM/Knowledgebuckets.md"}]},{route:"/Install,Upgrade,Migration",name:"Install, Upgrade, Migration",description:"",icon:"wrench",topics:[],children:[{route:"/Installation",name:"Installation",description:"wyouli@cn.ibm.com",owner:"@May Wang",icon:"wrench",topics:[],markdown:"/markdown/OperationalDecisionManager/Install,Upgrade,Migration/Installation.md"},{route:"/Upgrade",name:"Upgrade",description:"renyren@cn.ibm.com",owner:"@Ren Yan",icon:"upload",topics:[],markdown:"/markdown/OperationalDecisionManager/Install,Upgrade,Migration/Upgrade.md"},{route:"/ODM Profile Template",name:"ODM Profile Template",description:"renyren@cn.ibm.com",owner:"@Ren Yan",icon:"file-powerpoint",topics:[],markdown:"/markdown/OperationalDecisionManager/Install,Upgrade,Migration/ODMProfileTemplate.md"},{route:"/Configuring",name:"Configuring",description:"renyren@cn.ibm.com",owner:"@Ren Yan",icon:"calendar-check",topics:[],markdown:"/markdown/OperationalDecisionManager/Install,Upgrade,Migration/Configuring.md"},{route:"/Migration From CRE To DE",name:"Migration From CRE To DE",description:"",owner:"",icon:"people-carry",topics:[],markdown:"/markdown/OperationalDecisionManager/Install,Upgrade,Migration/MigrationFromCREToDE.md"},{route:"/Migration From CRP To DS",name:"Migration From CRP To DS",description:"",owner:"",icon:"people-carry",topics:[],markdown:"/markdown/OperationalDecisionManager/Install,Upgrade,Migration/MigrationFromCRPToDS.md"}]},{route:"/Performance",name:"Performance",description:"",icon:"user-edit",topics:[],children:[{route:"/Hungthread&highCPU",name:"Hung thread & high CPU",description:"wyouli@cn.ibm.com",owner:"@May Wang",icon:"microchip",topics:[],markdown:"/markdown/OperationalDecisionManager/Performance/Hungthread&highCPU.md"},{route:"/OOM",name:"Out of Memory",description:"wyouli@cn.ibm.com",owner:"@May Wang",icon:"ellipsis-h",topics:[],markdown:"/markdown/OperationalDecisionManager/Performance/OOM.md"},{route:"/Decision Center Performance",name:"Decision Center Performance",description:"",icon:"users-cog",topics:[],markdown:"/markdown/OperationalDecisionManager/Performance/DecisionCenterPerformance.md"},{route:"/RES Performance",name:"RES Performance",description:"",icon:"history",topics:[],markdown:"/markdown/OperationalDecisionManager/Performance/RESPerformance.md"},{route:"/Optimizing Execution",name:"Optimizing Execution",description:"",icon:"circle-notch",topics:[],markdown:"/markdown/OperationalDecisionManager/Performance/OptimizingExecution.md"}]},{route:"/DecisionCenter",name:"Decision Center",description:"",icon:"certificate",topics:[],children:[{route:"/Database",name:"Database",description:"ELEBRAS@jp.ibm.com",owner:"@Erwan Le Bras",icon:"sitemap",topics:[],markdown:"/markdown/OperationalDecisionManager/DecisionCenter/Database.md"},{route:"/Managing Decision Service",name:"Managing Decision Service",description:"wyouli@cn.ibm.com",owner:"@May Wang",icon:"calendar-minus",topics:[],markdown:"/markdown/OperationalDecisionManager/DecisionCenter/ManagingDecisionService.md"},{route:"/Security&usermanagement",name:"Security & user management",description:"wyouli@cn.ibm.com",owner:"@May Wang",icon:"user-friends",topics:[],markdown:"/markdown/OperationalDecisionManager/DecisionCenter/Security&usermanagement.md"},{route:"/Testandsimulation",name:"Test and simulation",description:"ELEBRAS@jp.ibm.com",owner:"@Erwan Le Bras",icon:"keyboard",topics:[],markdown:"/markdown/OperationalDecisionManager/DecisionCenter/Testandsimulation.md"},{route:"/DecisionModelService",name:"Decision Model Service",description:"renyren@cn.ibm.com",owner:"@Ren Yan",icon:"expand-arrows-alt",topics:[],markdown:"/markdown/OperationalDecisionManager/DecisionCenter/DecisionModelService.md"},{route:"/Decision Center API",name:"Decision Center API",description:"renyren@cn.ibm.com",owner:"@Ren Yan",icon:"align-justify",topics:[],markdown:"/markdown/OperationalDecisionManager/DecisionCenter/DecisionCenterAPI.md"}]},{route:"/DecisionServerRules",name:"Decision Server Rules",description:"",icon:"user-tag",topics:[],children:[{route:"/RuleDesigner",name:"Rule Designer",description:"ELEBRAS@jp.ibm.com",owner:"@Erwan Le Bras",icon:"user-tag",topics:[],markdown:"/markdown/OperationalDecisionManager/DecisionServerRules/RuleDesigner.md"},{route:"/RESConsole",name:"RES Console",description:"ELEBRAS@jp.ibm.com",owner:"@Erwan Le Bras",icon:"terminal",topics:[],markdown:"/markdown/OperationalDecisionManager/DecisionServerRules/RESConsole.md"},{route:"/RESruntime",name:"RES Runtime",description:"ELEBRAS@jp.ibm.com",owner:"@Erwan Le Bras",icon:"redo",topics:[],markdown:"/markdown/OperationalDecisionManager/DecisionServerRules/RESruntime.md"},{route:"/DecisionWarehouse",name:"Decision Warehouse",description:"renyren@cn.ibm.com",owner:"@Ren Yan",icon:"boxes",topics:[],markdown:"/markdown/OperationalDecisionManager/DecisionServerRules/DecisionWarehouse.md"},{route:"/REST API",name:"REST API",description:"",owner:"",icon:"check-circle",topics:[],markdown:"/markdown/OperationalDecisionManager/DecisionServerRules/RESTAPI.md"}]},{route:"/DecisionServerInsights",name:"Decision Server Insights",description:"",owner:"",icon:"server",topics:[],markdown:"/markdown/OperationalDecisionManager/DecisionServerInsights.md"}]},{route:"/BlueworksLive",name:"Blueworks Live",description:"",icon:"",children:[{route:"/AdminConsole",name:"Admin Console",description:"",icon:"terminal",topics:[],children:[{route:"/Customproperties",name:"Custom properties",description:"sthilini@au1.ibm.com",owner:"@Thilini Silva",icon:"edit",topics:[],markdown:"/markdown/BlueworksLive/AdminConsole/Customproperties.md"},{route:"/Customizeaccount",name:"Customize account",description:"sthilini@au1.ibm.com",owner:"@Thilini Silva",icon:"lock-open",topics:[],markdown:"/markdown/BlueworksLive/AdminConsole/Customizeaccount.md"},{route:"/Manageusers",name:"Manage users",description:"sthilini@au1.ibm.com",owner:"@Thilini Silva",icon:"user-circle",topics:[],markdown:"/markdown/BlueworksLive/AdminConsole/Manageusers.md"},{route:"/ManageBilling",name:"Manage Billing",description:"sthilini@au1.ibm.com",owner:"@Thilini Silva",icon:"bullseye",topics:[],markdown:"/markdown/BlueworksLive/AdminConsole/ManageBilling.md"},{route:"/ManageDiskspace",name:"Manage Disk space",description:"sthilini@au1.ibm.com",owner:"@Thilini Silva",icon:"save",topics:[],markdown:"/markdown/BlueworksLive/AdminConsole/ManageDiskspace.md"},{route:"/Security",name:"Security",description:"sthilini@au1.ibm.com",owner:"@Thilini Silva",icon:"shield-alt",topics:[],markdown:"/markdown/BlueworksLive/AdminConsole/Security.md"},{route:"/SinglesignonSSO",name:"Single sign on(SSO)",description:"sthilini@au1.ibm.com",owner:"@Thilini Silva",icon:"sign-in-alt",topics:[],markdown:"/markdown/BlueworksLive/AdminConsole/Singlesignon(SSO).md"}]},{route:"/BlueworksLiveService",name:"Blueworks Live Service",description:"",icon:"server",topics:[],children:[{route:"/API",name:"API",description:"sthilini@au1.ibm.com",owner:"@Thilini Silva",topics:[],icon:"retweet",markdown:"/markdown/BlueworksLive/BlueworksLiveService/API.md"},{route:"/Attachfiles",name:"Attach files",description:"sthilini@au1.ibm.com",owner:"@Thilini Silva",topics:[],icon:"file",markdown:"/markdown/BlueworksLive/BlueworksLiveService/Attachfiles.md"},{route:"/CollaborationandSharing",name:"Collaboration and Sharing",description:"sthilini@au1.ibm.com",owner:"@Thilini Silva",topics:[],icon:"share-square",markdown:"/markdown/BlueworksLive/BlueworksLiveService/CollaborationandSharing.md"},{route:"/Glossary",name:"Glossary",description:"sthilini@au1.ibm.com",owner:"@Thilini Silva",topics:[],icon:"th",markdown:"/markdown/BlueworksLive/BlueworksLiveService/Glossary.md"},{route:"/Import,ExportandPrinting",name:"Import,Export and Printing",description:"",topics:[],icon:"plus-square",markdown:"/markdown/BlueworksLive/BlueworksLiveService/Import,ExportandPrinting.md"},{route:"/Processapp",name:"Process app",description:"",topics:[],icon:"tablet-alt",markdown:"/markdown/BlueworksLive/BlueworksLiveService/Processapp.md"},{route:"/Processdiagram",name:"Process diagram",description:"sthilini@au1.ibm.com",owner:"@Thilini Silva",topics:[],icon:"chart-pie",markdown:"/markdown/BlueworksLive/BlueworksLiveService/Processdiagram.md"},{route:"/SearchandFilterTools",name:"Search and Filter Tools",description:"sthilini@au1.ibm.com",owner:"@Thilini Silva",topics:[],icon:"search",markdown:"/markdown/BlueworksLive/BlueworksLiveService/SearchandFilterTools.md"},{route:"/Space",name:"Space",description:"sthilini@au1.ibm.com",owner:"@Thilini Silva",topics:[],icon:"newspaper",markdown:"/markdown/BlueworksLive/BlueworksLiveService/Space.md"}]},{route:"/Account",name:"Account",description:"",icon:"user-circle",topics:[],children:[{route:"/PersonalizeAccount",name:"Personalize Account",description:"sthilini@au1.ibm.com",owner:"@Thilini Silva",icon:"user-circle",topics:[],markdown:"/markdown/BlueworksLive/Account/PersonalizeAccount.md"},{route:"/UserSettings",name:"User Settings",description:"sthilini@au1.ibm.com",owner:"",icon:"user-cog",topics:[],markdown:"/markdown/BlueworksLive/Account/UserSettings.md"}]},{route:"/Operations",name:"Operations",description:"",icon:"project-diagram",topics:[],children:[{route:"/SSAErequest",name:"SSAE request",description:"sthilini@au1.ibm.com",owner:"@Thilini Silva",icon:"chevron-right",topics:[],markdown:"/markdown/BlueworksLive/Operations/SSAErequest.md"},{route:"/VulnerabilityRequest",name:"Vulnerability Request",description:"sthilini@au1.ibm.com",owner:"@Thilini Silva",icon:"chevron-left",topics:[],markdown:"/markdown/BlueworksLive/Operations/VulnerabilityRequest.md"}]},{route:"/SalesandBilling",name:"Sales and Billing",description:"",icon:"futbol",topics:[],children:[{route:"/Account",name:"Account",description:"sthilini@au1.ibm.com",owner:"@Thilini Silva",icon:"user-circle",topics:[],markdown:"/markdown/BlueworksLive/SalesandBilling/Account.md"},{route:"/Billing",name:"Billing",description:"sthilini@au1.ibm.com",owner:"@Thilini Silva",icon:"bullseye",topics:[],markdown:"/markdown/BlueworksLive/SalesandBilling/Billing.md"}]},{route:"/Support",name:"Support",description:"",icon:"phone-volume",topics:[],children:[{route:"/RequestAccesstoCommunity",name:"Request Access to Community",description:"sthilini@au1.ibm.com",owner:"@Thilini Silva",icon:"comments",topics:[],markdown:"/markdown/BlueworksLive/Support/RequestAccesstoCommunity.md"},{route:"/Clients with Special Support",name:"Clients with Special Support",description:"sthilini@au1.ibm.com",owner:"@Thilini Silva",icon:"chalkboard-teacher",topics:[],markdown:"/markdown/BlueworksLive/Support/ClientswithSpecialSupport.md"}]}]},{route:"/RoboticProcessAutomation",name:"Robotic Process Automation",description:"Robotic Process Automation",icon:"",topics:[],children:[{route:"/AA Installer/Post Install Config",name:"AA Installer/Post Install Config",description:"bjdickey@us.ibm.com",owner:"@Brandon Dickey",icon:"filter",topics:[],markdown:"/markdown/RoboticProcessAutomation/AAInstallerPostInstallConfig.md"},{route:"/Application Development/Bot Creator",name:"Application Development/Bot Creator",description:"rusna@my.ibm.com",owner:"@Rusna Mustaffa",icon:"credit-card",topics:[],markdown:"/markdown/RoboticProcessAutomation/ApplicationDevelopmentBotCreator.md"},{route:"/Auto-Login",name:"Auto-Login",description:"kamelio@us.ibm.com",owner:"@Ken Amelio",icon:"sign-in-alt",topics:[],markdown:"/markdown/RoboticProcessAutomation/Auto-Login.md"},{route:"/Bot Runner",name:"Bot Runner",description:"shangjin@cn.ibm.com",owner:"@Jin Shang",icon:"stroopwafel",topics:[],markdown:"/markdown/RoboticProcessAutomation/BotRunner.md"},{route:"/Connectivity",name:"Connectivity",description:"bjdickey@us.ibm.com",owner:"@Brandon Dickey",icon:"link",topics:[],markdown:"/markdown/RoboticProcessAutomation/Connectivity.md"},{route:"/ControlRoom",name:"Control Room",description:"rHenning.Burgmann@de.ibm.com",owner:"@Henning Burgmann",icon:"door-closed",topics:[],markdown:"/markdown/RoboticProcessAutomation/ControlRoom.md"},{route:"/Database Related",name:"Database Related",description:"bjdickey@us.ibm.com",owner:"@Brandon Dickey",icon:"globe",topics:[],markdown:"/markdown/RoboticProcessAutomation/DatabaseRelated.md"},{route:"/IBM Installer",name:"IBM Installer",description:"bjdickey@us.ibm.com",owner:"@Brandon Dickey",icon:"sitemap",topics:[],markdown:"/markdown/RoboticProcessAutomation/IBMInstaller.md"},{route:"/Metabot",name:"Metabot",description:"rusna@my.ibm.com",owner:"@Rusna Mustaffa",icon:"diagnoses",topics:[],markdown:"/markdown/RoboticProcessAutomation/Metabot.md"},{route:"/VersionControl",name:"Version Control",description:"rHenning.Burgmann@de.ibm.com",owner:"@Henning Burgmann",icon:"universal-access",topics:[],markdown:"/markdown/RoboticProcessAutomation/VersionControl.md"},{route:"/Knowledge Buckets",name:"Knowledge Buckets",description:"",icon:"desktop",topics:[],markdown:"/markdown/RoboticProcessAutomation/KnowledgeBuckets.md"}]}]}}});
//# sourceMappingURL=app.c670eb42.js.map