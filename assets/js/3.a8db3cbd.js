(window.webpackJsonp=window.webpackJsonp||[]).push([[3,4,6,21,22,23,24],{113:function(e,t,n){},114:function(e,t,n){},118:function(e,t,n){e.exports=n.p+"assets/img/Dim1PWM_finish-1.0e03101f.jpg"},119:function(e,t,n){e.exports=n.p+"assets/img/HM-LC-Dim1PWM.dd38e5ca.svg"},120:function(e,t,n){e.exports=n.p+"assets/img/Dim1PWM_parts.9876c86e.jpg"},121:function(e,t,n){e.exports=n.p+"assets/img/Dim1PWM_PCB-top.b108f7b2.jpg"},122:function(e,t,n){e.exports=n.p+"assets/img/Dim1PWM_PCB-bottom.ae800755.jpg"},123:function(e,t,n){e.exports=n.p+"assets/img/Dim1PWM_PCB_partly-equiped.bd9ad69b.jpg"},124:function(e,t,n){e.exports=n.p+"assets/img/Dim1PWM_1.4-repair.088eba97.jpg"},125:function(e,t,n){e.exports=n.p+"assets/img/Dim1PWM_run-1.a221d99f.jpg"},145:function(e,t,n){"use strict";var r=n(113);n.n(r).a},146:function(e,t,n){"use strict";var r=n(114);n.n(r).a},147:function(e,t,n){},156:function(e,t,n){"use strict";n.r(t);var r=n(155),i=n(149),a={data:function(){return{isDark:!1}},mounted:function(){this.isDark=window.localStorage.getItem("vuepress-isDark")||!1,this.isDark&&document.getElementsByTagName("html")[0].classList.add("dark")},methods:{toggle:function(){this.isDark=!this.isDark,window.localStorage.setItem("vuepress-isDark",this.isDark?"yes":""),document.getElementsByTagName("html")[0].classList[this.isDark?"add":"remove"]("dark")}}},s=(n(145),n(20)),o=Object(s.a)(a,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"theme-toggler"},[n("a",{on:{click:e.toggle}},[e.isDark?n("svg",{staticClass:"feather feather-sun",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[n("circle",{attrs:{cx:"12",cy:"12",r:"5"}}),e._v(" "),n("line",{attrs:{x1:"12",y1:"1",x2:"12",y2:"3"}}),e._v(" "),n("line",{attrs:{x1:"12",y1:"21",x2:"12",y2:"23"}}),e._v(" "),n("line",{attrs:{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"}}),e._v(" "),n("line",{attrs:{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"}}),e._v(" "),n("line",{attrs:{x1:"1",y1:"12",x2:"3",y2:"12"}}),e._v(" "),n("line",{attrs:{x1:"21",y1:"12",x2:"23",y2:"12"}}),e._v(" "),n("line",{attrs:{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"}}),e._v(" "),n("line",{attrs:{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"}})]):n("svg",{staticClass:"feather feather-moon",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[n("path",{attrs:{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"}})])])])},[],!1,null,"62436dda",null);o.options.__file="ThemeToggler.vue";var l=o.exports,u={extends:i.a,components:{ThemeToggler:l}},c=Object(s.a)(u,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",{staticClass:"navbar"},[n("SidebarButton",{on:{"toggle-sidebar":function(t){e.$emit("toggle-sidebar")}}}),e._v(" "),n("router-link",{staticClass:"home-link",attrs:{to:e.$localePath}},[e.$site.themeConfig.logo?n("img",{staticClass:"logo",attrs:{src:e.$withBase(e.$site.themeConfig.logo),alt:e.$siteTitle}}):e._e(),e._v(" "),e.$siteTitle?n("span",{ref:"siteName",staticClass:"site-name",class:{"can-hide":e.$site.themeConfig.logo}},[e._v(e._s(e.$siteTitle))]):e._e()]),e._v(" "),n("div",{staticClass:"links",style:{"max-width":e.linksWrapMaxWidth+"px"}},[e.isAlgoliaSearch?n("AlgoliaSearchBox",{attrs:{options:e.algolia}}):!1!==e.$site.themeConfig.search?n("SearchBox"):e._e(),e._v(" "),n("NavLinks",{staticClass:"can-hide"}),e._v(" "),n("ThemeToggler")],1)],1)},[],!1,null,null,null);c.options.__file="Navbar.vue";var h=c.exports,d={components:{NavLink:n(116).a},computed:{data:function(){return this.$page.frontmatter}},mounted:function(){this.$vuepress.$emit("AsyncMarkdownContentMounted")}},v=(n(146),Object(s.a)(d,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("div",{staticClass:"hero"},[n("h1",[e._v("AskSinPP Collection")]),e._v(" "),n("p",{staticClass:"description"},[e._v("\n      Selbstbau-Komponenten für HomeMatic mit AskSinPP\n    ")]),e._v(" "),n("p",{staticClass:"action"},[n("NavLink",{staticClass:"action-button",attrs:{item:{text:"Und los →",link:"/Grundlagen/"}}})],1)]),e._v(" "),e._m(0),e._v(" "),n("div",{staticClass:"footer",staticStyle:{"text-align":"left"}},[n("img",{staticStyle:{float:"right","margin-left":"10px","margin-bottom":"10px"},attrs:{src:"https://hits.dwyl.com/jp112sdl/AskSinPPCollection.svg"}}),e._v("\n    Diese Seite lebt von euren Zuarbeiten!"),n("br"),e._v("\n    Wer sich hier vermisst, oder noch was gefunden hat, das fehlt - immer her damit. Entweder per\n    "),n("NavLink",{attrs:{item:{text:"Pull request",link:"https://github.com/jp112sdl/AskSinPPCollection/pulls"}}}),e._v("\n    oder\n    "),n("NavLink",{attrs:{item:{text:"Issue",link:"https://github.com/jp112sdl/AskSinPPCollection/issues"}}}),e._v(".\n  ")],1)])},[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"features"},[n("div",{staticClass:"feature"},[n("h2",[e._v("Hardware")]),e._v(" "),n("p",[e._v("Arduino Pro Mini, STM32 und kompatible Microcontroller mit CC1101 868Mhz Funkmodul als Hardwarebasis.")]),e._v(" "),n("div",[n("img",{attrs:{src:"platine.jpg",alt:""}})])]),e._v(" "),n("div",{staticClass:"feature"},[n("h2",[e._v("Software")]),e._v(" "),n("p",[e._v("Homematic kompatible AskSinPP Implementierung. Viele Sketche für Aktoren und Sensoren.")]),e._v(" "),n("div",[n("img",{attrs:{src:"asksinpp.jpg",alt:""}})])]),e._v(" "),n("div",{staticClass:"feature"},[n("h2",[e._v("Community")]),e._v(" "),n("p",[e._v("Projekte, Platinen und Gehäuse von der Homematic Community zum Aufbau der Komponenten.")]),e._v(" "),n("div",[n("img",{attrs:{src:"3d-druck.jpg",alt:""}})])])])}],!1,null,null,null));v.options.__file="Home.vue";var m=v.exports,p={extends:r.a,components:{Home:m,Navbar:h}},_=Object(s.a)(p,void 0,void 0,!1,null,null,null);_.options.__file="Layout.vue";t.default=_.exports},158:function(e,t,n){"use strict";n.r(t);n(153),n(154),n(200),n(201),n(134),n(31),n(202),n(203),n(152),n(46);var r=n(24),i=(n(32),n(21),n(51),n(78),{extends:n(156).default,data:function(){return{allProjects:[],filterTags:[]}},computed:{tags:function(){var e=new Set;return this.allProjects.forEach(function(t){return t.tags.forEach(function(t){return e.add(t)})}),Object(r.a)(e)},projects:function(){var e=this;return this.allProjects.filter(function(t){return e.filterTags.every(function(e){return t.tags.includes(e)})})}},created:function(){this.allProjects=this.$site.pages.filter(function(e){return e.frontmatter.isProject}).map(function(e){var t=null;if(e.frontmatter.Thumb){var r=e.path.replace("/Projekte",".");r.endsWith(".html")&&(r=r.split("/").slice(0,-1).join("/")+"/"),t=n(204)(""+r+e.frontmatter.Thumb)}return{title:e.title,path:e.path,thumb:t,tags:e.frontmatter.Tags.split(",").map(function(e){return e.trim()}).filter(function(e){return e.length>0})||[],author:e.frontmatter.Author||[],authorUrl:e.frontmatter.AuthorUrl,desc:e.frontmatter.Desc||"",url:e.frontmatter.ProjectUrl}})},mounted:function(){var e=this;document.location&&document.location.hash&&(this.filterTags=document.location.hash.substr(1).split(",").filter(function(t){return e.tags.includes(t)}))},methods:{toggleTag:function(e){this.filterTags.includes(e)?this.filterTags.splice(this.filterTags.indexOf(e),1):this.filterTags.push(e),document.location.hash=this.filterTags.join(",")}}}),a=(n(211),n(20)),s=Object(a.a)(i,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"theme-container",class:e.pageClasses,on:{touchstart:e.onTouchStart,touchend:e.onTouchEnd}},[e.shouldShowNavbar?n("Navbar",{on:{"toggle-sidebar":e.toggleSidebar}}):e._e(),e._v(" "),n("div",{staticClass:"layout--projects"},[n("h1",[e._v("Projekte")]),e._v(" "),n("div",{staticClass:"tags"},[n("h3",[e._v("Filter")]),e._v(" "),n("svg",{staticClass:"feather feather-tag",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[n("path",{attrs:{d:"M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"}}),e._v(" "),n("line",{attrs:{x1:"7",y1:"7",x2:"7",y2:"7"}})]),e._v(" "),e._l(e.tags,function(t){return n("span",{staticClass:"tag",class:{active:e.filterTags.includes(t)},on:{click:function(n){e.toggleTag(t)}}},[e._v(e._s(t))])})],2),e._v(" "),n("hr"),e._v(" "),n("div",{staticClass:"projects"},e._l(e.projects,function(t){var r=t.title,i=(t.path,t.thumb),a=t.tags,s=t.author,o=t.authorUrl,l=t.desc,u=t.url;return n("div",[n("a",{staticClass:"title",attrs:{rel:"noreferrer noopener",href:u,target:"_blank"}},[e._v(e._s(r))]),e._v(" "),n("div",{staticClass:"thumb"},[n("div",{staticClass:"author"},[n("svg",{staticClass:"feather feather-user",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[n("path",{attrs:{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}}),e._v(" "),n("circle",{attrs:{cx:"12",cy:"7",r:"4"}})]),e._v(" "),n("a",{attrs:{rel:"noreferrer noopener",href:o,target:"_blank"}},[e._v(e._s(s))])]),e._v(" "),n("a",{attrs:{rel:"noreferrer noopener",href:u,target:"_blank"}},[i?n("img",{attrs:{src:i,alt:""}}):e._e()]),e._v(" "),n("div",{staticClass:"tags"},[n("svg",{staticClass:"feather feather-tag",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[n("path",{attrs:{d:"M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"}}),e._v(" "),n("line",{attrs:{x1:"7",y1:"7",x2:"7",y2:"7"}})]),e._v(" "),e._l(a,function(t){return n("span",{staticClass:"tag",class:{active:e.filterTags.includes(t)},on:{click:function(n){e.toggleTag(t)}}},[e._v(e._s(t))])})],2)]),e._v(" "),n("div",{staticClass:"desc"},[e._v(e._s(l))])])}),0),e._v(" "),e._m(0)])],1)},[function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("a",{attrs:{href:"./Projekt-hinzufuegen.html"}},[this._v("→ Projekt hinzufügen")])])}],!1,null,null,null);s.options.__file="README.vue";t.default=s.exports},160:function(e,t,n){"use strict";n.r(t);var r=n(20),i=Object(r.a)({},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"projekt-hinzufugen"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#projekt-hinzufugen","aria-hidden":"true"}},[e._v("#")]),e._v(" Projekt hinzufügen")]),e._v(" "),n("p",[e._v("Die Projekte werden aus den Markdown-Dateien des Github Projekts "),n("a",{attrs:{href:"https://github.com/jp112sdl/AskSinPPCollection",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/jp112sdl/AskSinPPCollection"),n("OutboundLink")],1),e._v(" erzeugt.")]),e._v(" "),n("p",[e._v("Um ein neues Projekt hinzuzufügen wird unter "),n("code",[e._v("/Projekte/")]),e._v(" eine beliebiger Datei angelegt, z.B. "),n("code",[e._v("/Projekte/HM-Mein-Projekt/README.md")]),e._v(" oder "),n("code",[e._v("/Projekte/nickname/HM-Mein-Projekt.md")]),e._v(":")]),e._v(" "),n("div",{staticClass:"language-markdown line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-markdown"}},[n("code",[n("span",{pre:!0,attrs:{class:"token hr punctuation"}},[e._v("---")]),e._v("\nisProject: true\nDesc: Die Kurzbeschreibung des Projekts\nProjectUrl: https://eine-url-zur-projektbeschreibung\nAuthor: Names des Autors\nAuthorUrl: https://website-des-authors\nTags: Filter-Tags, mit Komma, getrennt\nThumb: vorschaubild.jpg\n\n"),n("span",{pre:!0,attrs:{class:"token hr punctuation"}},[e._v("---")]),e._v("\n\n"),n("span",{pre:!0,attrs:{class:"token title important"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("#")]),e._v(" Name des Projekts")]),e._v("\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br"),n("span",{staticClass:"line-number"},[e._v("7")]),n("br"),n("span",{staticClass:"line-number"},[e._v("8")]),n("br"),n("span",{staticClass:"line-number"},[e._v("9")]),n("br"),n("span",{staticClass:"line-number"},[e._v("10")]),n("br"),n("span",{staticClass:"line-number"},[e._v("11")]),n("br"),n("span",{staticClass:"line-number"},[e._v("12")]),n("br")])]),n("p",[e._v("Das Bild sollte im Format 16:9 sein und eine Breite von 640px haben.")]),e._v(" "),n("p",[e._v("Die "),n("code",[e._v("ProjectUrl")]),e._v(" enthält den Link zum Projekt.\nDies kann z.B. dein Blog, GitHub-Repo oder ein Forum-Thread sein.\nAlternativ kann die Markdown Datei auch eine vollständige Projektbeschreibung enthalten."),n("br"),e._v("\nWichtig ist, dass hier alle nötigen Informationen zum Nachbau vorhanden sind.")]),e._v(" "),n("p",[e._v("Bitte orientiert euch bei den Tags an den vorhandenen. Natürlich kannst du auch neue hinzufügen\naber nur wenn diese thematisch nicht passen.")]),e._v(" "),n("p",[e._v("Einfach einen PullRequest stellen oder uns die Markdown-Datei und das Vorschaubild zukommen lassen.")]),e._v(" "),n("p",[e._v("PS: Es tut nicht weh, wenn es verschiedene Projekte zum selben Thema gibt 😃")])])},[],!1,null,null,null);i.options.__file="Projekt-hinzufuegen.md";t.default=i.exports},161:function(e,t,n){"use strict";n.r(t);var r=n(20),i=Object(r.a)({},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"hm-lc-dim1pwm"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#hm-lc-dim1pwm","aria-hidden":"true"}},[e._v("#")]),e._v(" HM-LC-Dim1PWM")]),e._v(" "),r("p",[e._v("1-Kanal PWM LED Dimmer für 7-24V")]),e._v(" "),r("p",[r("img",{attrs:{src:n(118),alt:"HM-LC-Dim1PWM"}})]),e._v(" "),r("h2",{attrs:{id:"schaltplan"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#schaltplan","aria-hidden":"true"}},[e._v("#")]),e._v(" Schaltplan")]),e._v(" "),r("p",[r("img",{attrs:{src:n(119),alt:"Dim1PWM Schaltplan"}})]),e._v(" "),r("p",[e._v("Zur Sicherheit kann noch ein Gate-Widerstand von ca 100Ω eingefügt werden.")]),e._v(" "),r("h2",{attrs:{id:"hardware"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#hardware","aria-hidden":"true"}},[e._v("#")]),e._v(" Hardware")]),e._v(" "),r("h3",{attrs:{id:"bauteile"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#bauteile","aria-hidden":"true"}},[e._v("#")]),e._v(" Bauteile")]),e._v(" "),r("p",[r("img",{attrs:{src:n(120),alt:"Bauteile"}})]),e._v(" "),r("ul",[r("li",[e._v("Arduino Pro Mini ATmega328P (3.3V/8MHz)")]),e._v(" "),r("li",[e._v("CC1101 Funkmodul (868 MHz)")]),e._v(" "),r("li",[e._v("Festspannungsregler L78L05ACZ")]),e._v(" "),r("li",[e._v("Taster 6x6")]),e._v(" "),r("li",[e._v("Led 5mm")]),e._v(" "),r("li",[e._v("Widerstände 1/4W 100Ω, 300Ω, 4,7kΩ")]),e._v(" "),r("li",[e._v("MOSFET "),r("a",{attrs:{href:"http://www.irf.com/product-info/datasheets/data/irlz44n.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("IRLZ44N"),r("OutboundLink")],1),e._v(" (oder ggf. besser "),r("a",{attrs:{href:"http://www.irf.com/product-info/datasheets/data/irf3708.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("IRF3708"),r("OutboundLink")],1),e._v(", siehe "),r("a",{attrs:{href:"https://homematic-forum.de/forum/viewtopic.php?f=19&t=46999#p472462",target:"_blank",rel:"noopener noreferrer"}},[e._v("Forum-Beitrag"),r("OutboundLink")],1),e._v(")")]),e._v(" "),r("li",[e._v("AKL 057-03 Anschlussklemme, 3-pol, alternativ 1x WAGO 250-503 (Federklemmen sind zu bevorzugen)")]),e._v(" "),r("li",[e._v("2x AKL 057-02 Anschlussklemme, 2-pol, alternativ 1x WAGO 250-504")])]),e._v(" "),r("h3",{attrs:{id:"platine"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#platine","aria-hidden":"true"}},[e._v("#")]),e._v(" Platine")]),e._v(" "),r("p",[e._v("Der Dim1PWM lässt sich ganz gut auf einer Streifenraster-Platine aufbaun."),r("br"),e._v("\nEleganter geht is mit der Platine von Ronny.")]),e._v(" "),r("p",[r("img",{attrs:{src:n(121),alt:"Dim1PWM-PCB top"}}),e._v(" "),r("img",{attrs:{src:n(122),alt:"Dim1PWM-PCB bottom"}})]),e._v(" "),r("p",[e._v("Wer Bedarf an einer Platine hat kann "),r("a",{attrs:{href:"https://www.facebook.com/ronny.thomas.83",target:"_blank",rel:"noopener noreferrer"}},[e._v("Ronny über Facebook kontaktieren"),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("Die Version 1.4 der Platine hat noch einen Fehler. Die Leiterbahn, markiert durch den roten Kreis, muss unterbrochen werden.")]),e._v(" "),r("h3",{attrs:{id:"aufbau"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#aufbau","aria-hidden":"true"}},[e._v("#")]),e._v(" Aufbau")]),e._v(" "),r("p",[e._v("Mit einer dritten Hand und einer selbstklemmenden Pinzette ist der Dim1PWM im Handumrehene verlötet."),r("br"),e._v("\nMan fängt mit den niedrigen Bauteilen an. Die Widerstände werden unter dem Arduino platziert. Die Anode der Status-LED ist durch\nden geraden Strich symbolisiert und zeigt Richtung "),r("em",[e._v("Gnd")]),e._v(".")]),e._v(" "),r("p",[r("img",{attrs:{src:n(123),alt:"Dim1PWM teilweise bestückt"}})]),e._v(" "),r("p",[e._v("Ursprünglich wurden zwei Kondensatoren zur Entstörung und Glättung der Spannung vorgesehen. Diese blieben bislang\nunbestückt da sich keine Probleme ergaben.")]),e._v(" "),r("p",[e._v("Nachdem alle Bauteile verlötet sind, muss bei Version 1.4 der Platine noch GND "),r("em",[e._v("repariert")]),e._v(" werden wozu\nzwei Drahtbrücken auf der Unterseite gesetzt werden:")]),e._v(" "),r("p",[r("img",{attrs:{src:n(124),alt:"Dim1PWM Reparatur v1.4 "}})]),e._v(" "),r("h3",{attrs:{id:"gehause"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#gehause","aria-hidden":"true"}},[e._v("#")]),e._v(" Gehäuse")]),e._v(" "),r("p",[e._v("// TBD")]),e._v(" "),r("h2",{attrs:{id:"software"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#software","aria-hidden":"true"}},[e._v("#")]),e._v(" Software")]),e._v(" "),r("p",[e._v("Als Sketch kommt "),r("a",{attrs:{href:"https://github.com/pa-pa/AskSinPP/blob/master/examples/HM-LC-Dim1PWM-CV/HM-LC-Dim1PWM-CV.ino",target:"_blank",rel:"noopener noreferrer"}},[e._v("HM-LC-Dim1PWM-CV"),r("OutboundLink")],1),e._v("\naus dem Repository von pa-pa zum Einsatz.")]),e._v(" "),r("p",[e._v("// TODO: "),r("code",[e._v("hal.activity.savePower<Idle<true> >(hal);")]),e._v(" ???")]),e._v(" "),r("div",{staticClass:"warning custom-block"},[r("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),r("p",[e._v("Stand 16.12.2018: Es musst zwingend der "),r("a",{attrs:{href:"https://github.com/pa-pa/AskSinPP/archive/master.zip",target:"_blank",rel:"noopener noreferrer"}},[e._v("Master-Branch"),r("OutboundLink")],1),e._v("\nvon AskSinPP verwendet werden da in V3 der\n"),r("a",{attrs:{href:"https://github.com/pa-pa/AskSinPP/issues/80",target:"_blank",rel:"noopener noreferrer"}},[e._v("Fehler in der pwmtable"),r("OutboundLink")],1),e._v(" noch nicht behoben ist was dazu führt,\ndass die LEDs auch bei 0% noch sichtbar glimmen.")])]),e._v(" "),r("p",[e._v("Aus "),r("a",{attrs:{href:"https://github.com/pa-pa/AskSinPP/blob/master/examples/HM-LC-Dim1PWM-CV/HM-LC-Dim1PWM-CV.ino#L51",target:"_blank",rel:"noopener noreferrer"}},[e._v("Zeile 51"),r("OutboundLink")],1),e._v("\nlässt sich die ablesen, dass der Aktor über 3 Kanäle verfügt wovon 2\n"),r("a",{attrs:{href:"https://www.elv.de/elektronikwissen/virtuelle-homematic-aktorkanaele-und-ihre-verknuepfungslogik.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("virtuelle Kanäle"),r("OutboundLink")],1),e._v(" sind.\nWill man nur einen Kanal, kann "),r("code",[e._v("typedef DimmerDevice<HalType,ChannelType,1,1,PWM8<> > DimmerType;")]),e._v(" verwendet werden.")]),e._v(" "),r("p",[e._v("PS: Man denke daran die "),r("code",[e._v("Device ID")]),e._v(" und "),r("code",[e._v("Device Serial")]),e._v(" zu verändern da diese nur einmal pro Homematic Installation vorkommen dürfen.")]),e._v(" "),r("h2",{attrs:{id:"betrieb"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#betrieb","aria-hidden":"true"}},[e._v("#")]),e._v(" Betrieb")]),e._v(" "),r("p",[e._v("Da im Sketch ein "),r("code",[e._v("ConfigToggleButton")]),e._v(" definiert ist wird durch:")]),e._v(" "),r("ul",[r("li",[e._v("kurzen Tastedruck der Zustand verändert: LED an / aus")]),e._v(" "),r("li",[e._v("langen Tastendruck (~3s) der Anlernmodus gestartet")]),e._v(" "),r("li",[e._v("ganz langen Tastendruck (~7s) ein RESET des Aktors ausgeüfhrt")])]),e._v(" "),r("p",[e._v("Das Anlernen kann auch über die Serial durchgeführt werden.")]),e._v(" "),r("p",[r("img",{attrs:{src:n(125),alt:"Dim1PWM in action"}})])])},[],!1,null,null,null);i.options.__file="README.md";t.default=i.exports},162:function(e,t,n){"use strict";n.r(t);var r=n(20),i=Object(r.a)({},function(){var e=this.$createElement,t=this._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[t("h1",{attrs:{id:"hb-uni-rgb-led-ctrl"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#hb-uni-rgb-led-ctrl","aria-hidden":"true"}},[this._v("#")]),this._v(" HB-UNI-RGB-LED-CTRL")])])},[],!1,null,null,null);i.options.__file="HB-UNI-RGB-LED-CTRL.md";t.default=i.exports},163:function(e,t,n){"use strict";n.r(t);var r=n(20),i=Object(r.a)({},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("p",[n("a",{attrs:{href:"https://github.com/jp112sdl/AskSinPPCollection/blob/master/README.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("Startseite"),n("OutboundLink")],1)]),e._v(" "),n("h2",{attrs:{id:"gerateumbau-auf-asksinpp"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#gerateumbau-auf-asksinpp","aria-hidden":"true"}},[e._v("#")]),e._v(" Geräteumbau auf AskSinPP")]),e._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://homematic-forum.de/forum/viewtopic.php?f=76&t=43718",target:"_blank",rel:"noopener noreferrer"}},[e._v("Umbau Sonoff 4CH zu HM-LC-SW4-SM"),n("OutboundLink")],1)]),e._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/stan23/HM-LC-Sw1-Pl-DN-R1_OBI",target:"_blank",rel:"noopener noreferrer"}},[e._v("Umbau OBI WiFi Zwischenstecker zu HM-LC-Sw1-Pl-DN-R1"),n("OutboundLink")],1)]),e._v(" "),n("li",[n("a",{attrs:{href:"https://homematic-forum.de/forum/viewtopic.php?f=76&t=44258",target:"_blank",rel:"noopener noreferrer"}},[e._v("Umbau Sonoff S20 auf HM-LC-Sw1-Pl-DN-R1"),n("OutboundLink")],1)]),e._v(" "),n("li",[n("a",{attrs:{href:"https://homematic-forum.de/forum/viewtopic.php?f=76&t=47685",target:"_blank",rel:"noopener noreferrer"}},[e._v("Umbau Sonoff Basic auf HM-LC-SW1-SM"),n("OutboundLink")],1)]),e._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/stan23/HM-ES-PMSw1-Pl_GosundSP1",target:"_blank",rel:"noopener noreferrer"}},[e._v("Umbau Gosund SP1 / BliTZWOLF SHP2 zu HM-ES-PMSw1-Pl"),n("OutboundLink")],1)]),e._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/jp112sdl/Beispiel_AskSinPP/tree/master/examples/HM-ES-PMSw1-Pl",target:"_blank",rel:"noopener noreferrer"}},[e._v("Umbau Sonoff POW V1 zu HM-ES-PMSw1-Pl"),n("OutboundLink")],1)]),e._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/ronnythomas/Wandsender",target:"_blank",rel:"noopener noreferrer"}},[e._v("Umbau Funk Wandsender Licht Wandschalter 433MHZ für RF Empfänger"),n("OutboundLink")],1)])])])},[],!1,null,null,null);i.options.__file="Umbau.md";t.default=i.exports},164:function(e,t,n){"use strict";n.r(t);var r=n(20),i=Object(r.a)({},function(){var e=this.$createElement,t=this._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[t("h1",{attrs:{id:"hb-uni-senact-4-4-hutschine"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#hb-uni-senact-4-4-hutschine","aria-hidden":"true"}},[this._v("#")]),this._v(" HB-UNI-SenAct-4-4-Hutschine")])])},[],!1,null,null,null);i.options.__file="HB-UNI-SenAct-4-4-Hutschine.md";t.default=i.exports},200:function(e,t,n){"use strict";var r=n(72),i=n(5),a=n(48),s=n(129),o=n(14),l=n(130),u=n(132),c=Math.min,h=[].push,d=!!function(){try{return new RegExp("x","y")}catch(e){}}();n(131)("split",2,function(e,t,n,v){var m;return m="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,t){var i=String(this);if(void 0===e&&0===t)return[];if(!r(e))return n.call(i,e,t);for(var a,s,o,l=[],c=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),d=0,v=void 0===t?4294967295:t>>>0,m=new RegExp(e.source,c+"g");(a=u.call(m,i))&&!((s=m.lastIndex)>d&&(l.push(i.slice(d,a.index)),a.length>1&&a.index<i.length&&h.apply(l,a.slice(1)),o=a[0].length,d=s,l.length>=v));)m.lastIndex===a.index&&m.lastIndex++;return d===i.length?!o&&m.test("")||l.push(""):l.push(i.slice(d)),l.length>v?l.slice(0,v):l}:"0".split(void 0,0).length?function(e,t){return void 0===e&&0===t?[]:n.call(this,e,t)}:n,[function(n,r){var i=e(this),a=null==n?void 0:n[t];return void 0!==a?a.call(n,i,r):m.call(String(i),n,r)},function(e,t){var r=v(m,e,this,t,m!==n);if(r.done)return r.value;var u=i(e),h=String(this),p=a(u,RegExp),_=u.unicode,f=(u.ignoreCase?"i":"")+(u.multiline?"m":"")+(u.unicode?"u":"")+(d?"y":"g"),g=new p(d?u:"^(?:"+u.source+")",f),b=void 0===t?4294967295:t>>>0;if(0===b)return[];if(0===h.length)return null===l(g,h)?[h]:[];for(var k=0,P=0,C=[];P<h.length;){g.lastIndex=d?P:0;var w,M=l(g,d?h:h.slice(P));if(null===M||(w=c(o(g.lastIndex+(d?0:P)),h.length))===k)P=s(h,P,_);else{if(C.push(h.slice(k,P)),C.length===b)return C;for(var D=1;D<=M.length-1;D++)if(C.push(M[D]),C.length===b)return C;P=k=w}}return C.push(h.slice(k)),C}]})},201:function(e,t,n){"use strict";var r=n(4),i=n(14),a=n(71),s="".endsWith;r(r.P+r.F*n(73)("endsWith"),"String",{endsWith:function(e){var t=a(this,e,"endsWith"),n=arguments.length>1?arguments[1]:void 0,r=i(t.length),o=void 0===n?r:Math.min(i(n),r),l=String(e);return s?s.call(t,l,o):t.slice(o-l.length,o)===l}})},202:function(e,t,n){"use strict";var r=n(4),i=n(70)(!0);r(r.P,"Array",{includes:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),n(74)("includes")},203:function(e,t,n){"use strict";var r=n(4),i=n(71);r(r.P+r.F*n(73)("includes"),"String",{includes:function(e){return!!~i(this,e,"includes").indexOf(e,arguments.length>1?arguments[1]:void 0)}})},204:function(e,t,n){var r={"./Projekt-hinzufuegen.md":160,"./README":158,"./README.vue":158,"./Umbau.md":163,"./jerome/HB-UNI-RGB-LED-CTRL.jpg":205,"./jerome/HB-UNI-RGB-LED-CTRL.md":162,"./psi/HM-LC-Dim1PWM/README.md":161,"./psi/HM-LC-Dim1PWM/images/Dim1PWM_1.4-repair.jpg":124,"./psi/HM-LC-Dim1PWM/images/Dim1PWM_PCB-bottom.jpg":122,"./psi/HM-LC-Dim1PWM/images/Dim1PWM_PCB-top.jpg":121,"./psi/HM-LC-Dim1PWM/images/Dim1PWM_PCB_partly-equiped.jpg":123,"./psi/HM-LC-Dim1PWM/images/Dim1PWM_finish-1.jpg":118,"./psi/HM-LC-Dim1PWM/images/Dim1PWM_finish-2.jpg":206,"./psi/HM-LC-Dim1PWM/images/Dim1PWM_parts.jpg":120,"./psi/HM-LC-Dim1PWM/images/Dim1PWM_run-1.jpg":125,"./psi/HM-LC-Dim1PWM/images/Dim1PWM_run-2.jpg":207,"./psi/HM-LC-Dim1PWM/images/HM-LC-Dim1PWM.sch":208,"./psi/HM-LC-Dim1PWM/images/HM-LC-Dim1PWM.svg":119,"./psi/HM-LC-Dim1PWM/images/thumb.jpg":209,"./ronny/HB-UNI-SenAct-4-4-Hutschine.jpg":210,"./ronny/HB-UNI-SenAct-4-4-Hutschine.md":164};function i(e){var t=a(e);return n(t)}function a(e){var t=r[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}i.keys=function(){return Object.keys(r)},i.resolve=a,e.exports=i,i.id=204},205:function(e,t,n){e.exports=n.p+"assets/img/HB-UNI-RGB-LED-CTRL.8fbc6fa2.jpg"},206:function(e,t,n){e.exports=n.p+"assets/img/Dim1PWM_finish-2.becabe5c.jpg"},207:function(e,t,n){e.exports=n.p+"assets/img/Dim1PWM_run-2.2677691e.jpg"},208:function(e,t){throw new Error("Module parse failed: Unexpected token (1:9)\nYou may need an appropriate loader to handle this file type.\n> EESchema Schematic File Version 4\n| LIBS:HM-LC-Dim2PWM_ohne_Taster-cache\n| EELAYER 26 0")},209:function(e,t,n){e.exports=n.p+"assets/img/thumb.f472ae80.jpg"},210:function(e,t,n){e.exports=n.p+"assets/img/HB-UNI-SenAct-4-4-Hutschine.df0daec3.jpg"},211:function(e,t,n){"use strict";var r=n(147);n.n(r).a}}]);