(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{105:function(t,e,r){"use strict";var l={gh:{routerBase:"/echarts-handbook",rootPath:"https://apache.github.io/echarts-handbook/",exampleViewPath:"https://echarts.apache.org/examples/zh/view.html?c=",exampleEditorPath:"https://echarts.apache.org/examples/zh/editor.html?c=",mainSitePath:"https://echarts.apache.org/",optionPath:"https://echarts.apache.org/option.html#",gitRepo:"apache/echarts-handbook"},asf:{routerBase:"/handbook",rootPath:"https://echarts.apache.org/handbook/",exampleViewPath:"https://echarts.apache.org/examples/zh/view.html?c=",exampleEditorPath:"https://echarts.apache.org/examples/zh/editor.html?c=",mainSitePath:"https://echarts.apache.org/",optionPath:"https://echarts.apache.org/option.html#",gitRepo:"apache/echarts-handbook"},local:{routerBase:"/echarts-handbook/dist",rootPath:"http://localhost/echarts-handbook/dist/",exampleViewPath:"http://localhost/echarts-website/examples/zh/view.html?c=",exampleEditorPath:"http://localhost/echarts-website/examples/zh/editor.html?c=",mainSitePath:"http://localhost/echarts-website/",optionPath:"http://localhost/echarts-website/option.html#",gitRepo:"apache/echarts-handbook"},localsite:{routerBase:"/echarts-website/handbook/dist",rootPath:"http://localhost/echarts-website/handbook/dist/",exampleViewPath:"http://localhost/echarts-website/examples/zh/view.html?c=",exampleEditorPath:"http://localhost/echarts-website/examples/zh/editor.html?c=",mainSitePath:"http://localhost/echarts-website/",optionPath:"http://localhost/echarts-website/option.html#",gitRepo:"apache/echarts-handbook"}};var n=function(){var t="gh";if(!l.gh)throw"Deploy config ".concat(t," not exits");return l.gh}();e.a=n},129:function(t,e,r){t.exports={}},130:function(t,e,r){t.exports={}},131:function(t,e,r){t.exports={}},149:function(t,e,r){"use strict";var l=r(0),n=r(145),o=r.n(n),h=(r(152),r(57),l.default.extend({name:"SidebarNavItem",props:{item:{type:Object},parentPath:{type:String},level:{type:Number}},computed:{link:function(){return"/"+this.$store.state.locale+"/"+this.path},isActived:function(){return this.$route.params.post===this.path}},data:function(){var path=this.parentPath?this.parentPath+"/"+this.item.dir:this.item.dir,t=(this.$route.params.post+"").startsWith(path);return{get path(){return path},collapsed:this.level>=2&&!t}},methods:{toggleCollapsed:function(){this.collapsed=!this.collapsed}}})),c=(r(188),r(8)),d=Object(c.a)(h,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.item.draft?t._e():r("li",{class:["nav-item",t.isActived?"actived":""]},[t.item.children?t.level>1?r("a",{staticClass:"nav-link",on:{click:t.toggleCollapsed}},[r("span",{staticClass:"title"},[t._v(t._s(t.item.title))]),t._v(" "),r("span",{class:["glyphicon",t.collapsed?"glyphicon-menu-down":"glyphicon-menu-up"]})]):r("div",{staticClass:"nav-link"},[r("span",{staticClass:"title"},[t._v(t._s(t.item.title))])]):r("nuxt-link",{staticClass:"nav-link",attrs:{to:t.link}},[r("span",{staticClass:"title"},[t._v(t._s(t.item.title))])]),t._v(" "),t.item.draft||!t.item.children||t.collapsed?t._e():r("ul",{class:["nav","bd-sidenav","level"+t.level]},t._l(t.item.children,(function(e){return r("SidebarNavItem",{key:e.dir,attrs:{parentPath:t.path,item:e,level:t.level+1}})})),1)],1)}),[],!1,null,null,null).exports,v=l.default.extend({components:{SidebarNavItem:d},mounted:function(){var t=this.$el.querySelector(".actived");t&&o()(t,{time:0,align:{top:0,topOffset:300},isScrollable:function(t){return!!t.className&&t.className.indexOf("bd-sidebar")>=0}})}}),m=(r(189),Object(c.a)(v,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"bd-sidebar border-bottom-0 col-sm-3 col-sm-9 col-md-2 col-md-10"},[r("div",{staticClass:"bd-docs-nav"},[r("ul",{staticClass:"nav bd-sidenav nav-root level0"},t._l(t.$store.state.posts[this.$store.state.locale],(function(t){return r("SidebarNavItem",{key:t.dir,attrs:{item:t,parentPath:"",level:1}})})),1)])])}),[],!1,null,null,null).exports),f=Object(c.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("nav",{staticClass:"navbar navbar-default navbar-fixed-top",attrs:{role:"navigation"}},[r("div",{staticClass:"container-fluid"},[t._m(0),r("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbar-collapse"}},[r("ul",{staticClass:"nav navbar-nav navbar-left"},[t._m(1),t._m(2),t._m(3),t._m(4),t._m(5),r("li",{attrs:{id:"nav-contribute"}},[t._m(6),r("ul",{staticClass:"dropdown-menu"},[t._m(7),t._m(8),t._m(9),t._m(10),t._m(11),t._m(12),r("li",[r("a",{attrs:{href:"https://github.com/apache/echarts",target:"_blank"}},[t._v("源码（GitHub）"),r("svg",{staticClass:"icon-external-link",attrs:{width:"15px",height:"15px",viewbox:"0 0 100 100",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[r("path",{attrs:{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"}}),r("polygon",{attrs:{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"}})])])]),r("li",[r("a",{attrs:{href:"https://github.com/apache/echarts/issues",target:"_blank"}},[t._v("Issues（GitHub）"),r("svg",{staticClass:"icon-external-link",attrs:{width:"15px",height:"15px",viewbox:"0 0 100 100",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[r("path",{attrs:{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"}}),r("polygon",{attrs:{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"}})])])])])]),r("li",{attrs:{id:"nav-others"}},[t._m(13),r("ul",{staticClass:"dropdown-menu"},[r("li",[r("a",{attrs:{href:"https://www.apache.org/",target:"_blank"}},[t._v("Apache Software Foundation"),r("svg",{staticClass:"icon-external-link",attrs:{width:"15px",height:"15px",viewbox:"0 0 100 100",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[r("path",{attrs:{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"}}),r("polygon",{attrs:{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"}})])])]),t._m(14),r("li",[r("a",{attrs:{href:"https://www.apache.org/licenses/",target:"_blank"}},[t._v("版权"),r("svg",{staticClass:"icon-external-link",attrs:{width:"15px",height:"15px",viewbox:"0 0 100 100",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[r("path",{attrs:{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"}}),r("polygon",{attrs:{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"}})])])]),r("li",[r("a",{attrs:{href:"https://www.apache.org/events/current-event",target:"_blank"}},[t._v("活动"),r("svg",{staticClass:"icon-external-link",attrs:{width:"15px",height:"15px",viewbox:"0 0 100 100",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[r("path",{attrs:{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"}}),r("polygon",{attrs:{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"}})])])]),r("li",[r("a",{attrs:{href:"https://www.apache.org/foundation/sponsorship.html",target:"_blank"}},[t._v("捐赠"),r("svg",{staticClass:"icon-external-link",attrs:{width:"15px",height:"15px",viewbox:"0 0 100 100",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[r("path",{attrs:{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"}}),r("polygon",{attrs:{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"}})])])]),r("li",[r("a",{attrs:{href:"https://www.apache.org/foundation/thanks.html",target:"_blank"}},[t._v("鸣谢"),r("svg",{staticClass:"icon-external-link",attrs:{width:"15px",height:"15px",viewbox:"0 0 100 100",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[r("path",{attrs:{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"}}),r("polygon",{attrs:{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"}})])])])])])]),t._m(15)])])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"navbar-header"},[r("button",{staticClass:"navbar-toggle collapsed",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbar-collapse","aria-expanded":"false"}},[r("span",{staticClass:"sr-only"},[t._v("Toggle navigation")]),r("span",{staticClass:"icon-bar"}),r("span",{staticClass:"icon-bar"}),r("span",{staticClass:"icon-bar"})]),r("a",{staticClass:"navbar-brand",attrs:{href:"https://echarts.apache.org/zh/index.html"}},[r("img",{staticClass:"navbar-logo",attrs:{src:"https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/zh/images/logo.png?_v_=20200710_1",alt:"echarts logo"}})])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("li",{attrs:{id:"nav-index"}},[r("a",{attrs:{href:"https://echarts.apache.org/zh/index.html"}},[t._v("首页")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("li",{staticClass:"dropdown",attrs:{id:"nav-doc"}},[r("a",{staticClass:"dropdown-toggle",attrs:{href:"#","data-toggle":"dropdown"}},[t._v("文档"),r("b",{staticClass:"caret"})]),r("ul",{staticClass:"dropdown-menu"},[r("li",[r("a",{attrs:{href:"https://echarts.apache.org/zh/feature.html"}},[t._v("特性")])]),r("li",[r("a",{attrs:{href:"https://echarts.apache.org/zh/tutorial.html"}},[t._v("教程")])]),r("li",[r("a",{attrs:{href:"https://echarts.apache.org/zh/api.html"}},[t._v("API")])]),r("li",[r("a",{attrs:{href:"https://echarts.apache.org/zh/option.html"}},[t._v("配置项手册")])]),r("li",[r("a",{attrs:{href:"https://echarts.apache.org/zh/changelog.html"}},[t._v("版本记录")])]),r("li",[r("a",{attrs:{href:"https://echarts.apache.org/zh/faq.html"}},[t._v("常见问题")])]),r("li",[r("a",{attrs:{href:"https://echarts.apache.org/zh/tutorial.html#ECharts%205%20升级指南"}},[t._v("v5 升级指南"),r("span",{staticClass:"new"},[t._v("new")])])])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("li",{staticClass:"dropdown",attrs:{id:"nav-download"}},[r("a",{staticClass:"dropdown-toggle",attrs:{href:"#","data-toggle":"dropdown"}},[t._v("下载"),r("b",{staticClass:"caret"})]),r("ul",{staticClass:"dropdown-menu"},[r("li",[r("a",{attrs:{href:"https://echarts.apache.org/zh/download.html"}},[t._v("下载")])]),r("li",[r("a",{attrs:{href:"https://echarts.apache.org/zh/download-theme.html"}},[t._v("主题下载")])]),r("li",[r("a",{attrs:{href:"https://echarts.apache.org/zh/download-extension.html"}},[t._v("扩展下载")])])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("li",{attrs:{id:"nav-examples"}},[r("a",{attrs:{href:"https://echarts.apache.org/examples/zh/index.html"}},[t._v("示例")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("li",{attrs:{id:"nav-resources"}},[r("a",{staticClass:"dropdown-toggle",attrs:{href:"#","data-toggle":"dropdown"}},[t._v("资源"),r("b",{staticClass:"caret"})]),r("ul",{staticClass:"dropdown-menu"},[r("li",[r("a",{attrs:{href:"https://echarts.apache.org/zh/spreadsheet.html"}},[t._v("表格工具")])]),r("li",[r("a",{attrs:{href:"https://echarts.apache.org/zh/theme-builder.html"}},[t._v("主题构建工具")])]),r("li",[r("a",{attrs:{href:"https://echarts.apache.org/zh/cheat-sheet.html"}},[t._v("术语速查手册")])]),r("li",[r("a",{attrs:{href:"https://echarts.apache.org/zh/resources.html"}},[t._v("更多资源")])])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("a",{staticClass:"dropdown-toggle",attrs:{href:"#","data-toggle":"dropdown"}},[t._v("社区"),r("b",{staticClass:"caret"})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("li",[r("a",{attrs:{href:"https://echarts.apache.org/zh/events.html"}},[t._v("活动")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("li",[r("a",{attrs:{href:"https://echarts.apache.org/zh/committers.html"}},[t._v("贡献者列表")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("li",[r("a",{attrs:{href:"https://echarts.apache.org/zh/maillist.html"}},[t._v("邮件列表")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("li",[r("a",{attrs:{href:"https://echarts.apache.org/zh/contributing.html"}},[t._v("如何贡献")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("li",[r("a",{attrs:{href:"https://echarts.apache.org/zh/dependencies.html"}},[t._v("依赖项")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("li",[r("a",{attrs:{href:"https://echarts.apache.org/zh/coding-standard.html"}},[t._v("代码规范")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("a",{staticClass:"dropdown-toggle",attrs:{href:"#","data-toggle":"dropdown"}},[t._v("ASF"),r("b",{staticClass:"caret"})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("li",[r("a",{attrs:{href:"https://echarts.apache.org/zh/security.html"}},[t._v("安全")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",{staticClass:"nav navbar-nav navbar-right"},[r("li",{attrs:{id:"nav-homeen"}},[r("a",{attrs:{href:"javascript:;",onclick:"changeLang('en')"}},[t._v("EN")])])])}],!1,null,null,null).exports,w=Object(c.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("nav",{staticClass:"navbar navbar-default navbar-fixed-top",attrs:{role:"navigation"}},[r("div",{staticClass:"container-fluid"},[t._m(0),r("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbar-collapse"}},[r("ul",{staticClass:"nav navbar-nav navbar-left"},[t._m(1),t._m(2),t._m(3),t._m(4),t._m(5),r("li",{attrs:{id:"nav-contribute"}},[t._m(6),r("ul",{staticClass:"dropdown-menu"},[t._m(7),t._m(8),t._m(9),t._m(10),t._m(11),t._m(12),r("li",[r("a",{attrs:{href:"https://github.com/apache/echarts",target:"_blank"}},[t._v("Source Code (GitHub)"),r("svg",{staticClass:"icon-external-link",attrs:{width:"15px",height:"15px",viewbox:"0 0 100 100",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[r("path",{attrs:{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"}}),r("polygon",{attrs:{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"}})])])]),r("li",[r("a",{attrs:{href:"https://github.com/apache/echarts/issues",target:"_blank"}},[t._v("Issues (GitHub)"),r("svg",{staticClass:"icon-external-link",attrs:{width:"15px",height:"15px",viewbox:"0 0 100 100",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[r("path",{attrs:{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"}}),r("polygon",{attrs:{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"}})])])])])]),r("li",{attrs:{id:"nav-others"}},[t._m(13),r("ul",{staticClass:"dropdown-menu"},[r("li",[r("a",{attrs:{href:"https://www.apache.org/",target:"_blank"}},[t._v("Apache Software Foundation"),r("svg",{staticClass:"icon-external-link",attrs:{width:"15px",height:"15px",viewbox:"0 0 100 100",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[r("path",{attrs:{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"}}),r("polygon",{attrs:{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"}})])])]),t._m(14),r("li",[r("a",{attrs:{href:"https://www.apache.org/licenses/",target:"_blank"}},[t._v("License"),r("svg",{staticClass:"icon-external-link",attrs:{width:"15px",height:"15px",viewbox:"0 0 100 100",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[r("path",{attrs:{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"}}),r("polygon",{attrs:{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"}})])])]),r("li",[r("a",{attrs:{href:"https://www.apache.org/events/current-event",target:"_blank"}},[t._v("Events"),r("svg",{staticClass:"icon-external-link",attrs:{width:"15px",height:"15px",viewbox:"0 0 100 100",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[r("path",{attrs:{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"}}),r("polygon",{attrs:{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"}})])])]),r("li",[r("a",{attrs:{href:"https://www.apache.org/foundation/sponsorship.html",target:"_blank"}},[t._v("Sponsorship"),r("svg",{staticClass:"icon-external-link",attrs:{width:"15px",height:"15px",viewbox:"0 0 100 100",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[r("path",{attrs:{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"}}),r("polygon",{attrs:{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"}})])])]),r("li",[r("a",{attrs:{href:"https://www.apache.org/foundation/thanks.html",target:"_blank"}},[t._v("Thanks"),r("svg",{staticClass:"icon-external-link",attrs:{width:"15px",height:"15px",viewbox:"0 0 100 100",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[r("path",{attrs:{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"}}),r("polygon",{attrs:{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"}})])])])])])]),t._m(15)])])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"navbar-header"},[r("button",{staticClass:"navbar-toggle collapsed",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbar-collapse","aria-expanded":"false"}},[r("span",{staticClass:"sr-only"},[t._v("Toggle navigation")]),r("span",{staticClass:"icon-bar"}),r("span",{staticClass:"icon-bar"}),r("span",{staticClass:"icon-bar"})]),r("a",{staticClass:"navbar-brand",attrs:{href:"https://echarts.apache.org/en/index.html"}},[r("img",{staticClass:"navbar-logo",attrs:{src:"https://echarts.apache.org/en/images/logo.png",alt:"echarts logo"}})])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("li",{attrs:{id:"nav-index"}},[r("a",{attrs:{href:"https://echarts.apache.org/en/index.html"}},[t._v("Home")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("li",{staticClass:"dropdown",attrs:{id:"nav-doc"}},[r("a",{staticClass:"dropdown-toggle",attrs:{href:"#","data-toggle":"dropdown"}},[t._v("Docs"),r("b",{staticClass:"caret"})]),r("ul",{staticClass:"dropdown-menu"},[r("li",[r("a",{attrs:{href:"https://echarts.apache.org/en/feature.html"}},[t._v("Features")])]),r("li",[r("a",{attrs:{href:"https://echarts.apache.org/en/tutorial.html"}},[t._v("Tutorials")])]),r("li",[r("a",{attrs:{href:"https://echarts.apache.org/en/api.html"}},[t._v("API")])]),r("li",[r("a",{attrs:{href:"https://echarts.apache.org/en/option.html"}},[t._v("Chart Configuration")])]),r("li",[r("a",{attrs:{href:"https://echarts.apache.org/en/changelog.html"}},[t._v("Changelog")])]),r("li",[r("a",{attrs:{href:"https://echarts.apache.org/en/faq.html"}},[t._v("FAQ")])]),r("li",[r("a",{attrs:{href:"https://echarts.apache.org/en/tutorial.html#ECharts%205%20Upgrade%20Guide"}},[t._v("V5 Upgrade Guide"),r("span",{staticClass:"new"},[t._v("new")])])])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("li",{staticClass:"dropdown",attrs:{id:"nav-download"}},[r("a",{staticClass:"dropdown-toggle",attrs:{href:"#","data-toggle":"dropdown"}},[t._v("Download"),r("b",{staticClass:"caret"})]),r("ul",{staticClass:"dropdown-menu"},[r("li",[r("a",{attrs:{href:"https://echarts.apache.org/en/download.html"}},[t._v("Download")])]),r("li",[r("a",{attrs:{href:"https://echarts.apache.org/en/download-theme.html"}},[t._v("Download Themes")])]),r("li",[r("a",{attrs:{href:"https://echarts.apache.org/en/download-extension.html"}},[t._v("Download Extensions")])])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("li",{attrs:{id:"nav-examples"}},[r("a",{attrs:{href:"https://echarts.apache.org/examples/en/index.html"}},[t._v("Examples")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("li",{attrs:{id:"nav-resources"}},[r("a",{staticClass:"dropdown-toggle",attrs:{href:"#","data-toggle":"dropdown"}},[t._v("Resources"),r("b",{staticClass:"caret"})]),r("ul",{staticClass:"dropdown-menu"},[r("li",[r("a",{attrs:{href:"https://echarts.apache.org/en/spreadsheet.html"}},[t._v("Spread Sheet Tool")])]),r("li",[r("a",{attrs:{href:"https://echarts.apache.org/en/theme-builder.html"}},[t._v("Theme Builder")])]),r("li",[r("a",{attrs:{href:"https://echarts.apache.org/en/cheat-sheet.html"}},[t._v("Cheat Sheet")])]),r("li",[r("a",{attrs:{href:"https://echarts.apache.org/en/resources.html"}},[t._v("More Resources")])])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("a",{staticClass:"dropdown-toggle",attrs:{href:"#","data-toggle":"dropdown"}},[t._v("Community"),r("b",{staticClass:"caret"})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("li",[r("a",{attrs:{href:"https://echarts.apache.org/en/events.html"}},[t._v("Events")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("li",[r("a",{attrs:{href:"https://echarts.apache.org/en/committers.html"}},[t._v("Committers")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("li",[r("a",{attrs:{href:"https://echarts.apache.org/en/maillist.html"}},[t._v("Mailing List")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("li",[r("a",{attrs:{href:"https://echarts.apache.org/en/contributing.html"}},[t._v("How to Contribute")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("li",[r("a",{attrs:{href:"https://echarts.apache.org/en/dependencies.html"}},[t._v("Dependencies")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("li",[r("a",{attrs:{href:"https://echarts.apache.org/en/coding-standard.html"}},[t._v("Code Standard")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("a",{staticClass:"dropdown-toggle",attrs:{href:"#","data-toggle":"dropdown"}},[t._v("ASF"),r("b",{staticClass:"caret"})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("li",[r("a",{attrs:{href:"https://echarts.apache.org/en/security.html"}},[t._v("Security")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",{staticClass:"nav navbar-nav navbar-right"},[r("li",{attrs:{id:"nav-homeen"}},[r("a",{attrs:{href:"javascript:;",onclick:"changeLang('zh')"}},[t._v("中文")])])])}],!1,null,null,null).exports,_=l.default.extend({components:{},computed:{navComponent:function(){return"zh"===this.$store.state.locale?f:w}}}),x={components:{Sidebar:m,Navbar:Object(c.a)(_,(function(){var t=this,e=t.$createElement;return(t._self._c||e)(t.navComponent,{tag:"div"})}),[],!1,null,null,null).exports},mounted:function(){var t=location.hash;location.hash="",location.hash=t},computed:{},methods:{}},C=(r(190),Object(c.a)(x,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("navbar"),t._v(" "),r("div",{staticClass:"page-main"},[r("div",{staticClass:"page-content single-page container-fluid row flex-xl-nowrap"},[r("sidebar"),t._v(" "),r("div",{staticClass:"bd-content col-sm-7 pl-sm-2 col-12"},[r("div",{staticClass:"post-content content"},[r("nuxt")],1)])],1),t._v(" "),r("link",{attrs:{rel:"stylesheet",href:"//cdn.jsdelivr.net/npm/highlight.js@9.12.0/styles/github-gist.min.css"}})])],1)}),[],!1,null,null,null));e.a=C.exports},153:function(t,e,r){t.exports=r(154)},188:function(t,e,r){"use strict";r(129)},189:function(t,e,r){"use strict";r(130)},190:function(t,e,r){"use strict";r(131)},201:function(t,e,r){"use strict";r.r(e),r.d(e,"state",(function(){return h})),r.d(e,"mutations",(function(){return c})),r.d(e,"actions",(function(){return v}));var l=r(2),n=(r(20),[{title:"快速上手",dir:"get-started"},{title:"入门篇",dir:"basics",children:[{title:"下载",dir:"download"},{title:"资源列表",dir:"resource"},{title:"获取灵感",dir:"inspiration"},{title:"寻求帮助",dir:"help"}]},{title:"概念篇",dir:"concepts",children:[{title:"图表容器及大小",dir:"chart-size"},{title:"配置项",dir:"options",draft:!0},{title:"系列",dir:"series",draft:!0},{title:"数据集",dir:"dataset"},{title:"数据转换",dir:"data-transform"},{title:"坐标系",dir:"coordinate",draft:!0},{title:"坐标轴",dir:"axis"},{title:"视觉映射",dir:"visual-map"},{title:"图例",dir:"legend"},{title:"提示框",dir:"tooltip",draft:!0},{title:"事件与行为",dir:"event"}]},{title:"应用篇",dir:"application",children:[{title:"常用图表类型",dir:"chart-types",children:[{title:"柱状图",dir:"bar",children:[{title:"基础柱状图",dir:"basic-bar"},{title:"堆叠柱状图",dir:"stacked-bar"},{title:"动态排序柱状图",dir:"bar-race",draft:!0},{title:"极坐标系柱状图",dir:"polar-bar",draft:!0},{title:"瀑布图",dir:"waterfall",draft:!0},{title:"视觉映射的柱状图",dir:"visual-map",draft:!0}]},{title:"折线图",dir:"line",children:[{title:"基础折线图",dir:"basic-line"},{title:"堆叠折线图",dir:"stacked-line"},{title:"区域面积折线图",dir:"area-line"},{title:"平滑曲线图",dir:"smooth-line"},{title:"阶梯线图",dir:"step-line"}]},{title:"饼图",dir:"pie",children:[{title:"基础饼图",dir:"basic-pie"},{title:"环形图",dir:"ring"},{title:"南丁格尔图（玫瑰图）",dir:"rose"}]},{title:"散点图",dir:"scatter",children:[{title:"基础散点图",dir:"basic-scatter"}]}]},{title:"移动端优化",dir:"mobile",draft:!0},{title:"跨平台方案",dir:"cross-platform",children:[{title:"百度智能小程序",dir:"baidu-app"},{title:"微信小程序",dir:"wechat-app"},{title:"服务端渲染",dir:"server"}]},{title:"数据处理",dir:"data",children:[{title:"动态的异步数据",dir:"dynamic-data"},{title:"数据下钻",dir:"drilldown",draft:!0}]},{title:"多图联动",dir:"connect",draft:!0}]},{title:"最佳实践",dir:"best-practice",children:[{title:"移动端优化",dir:"mobile",draft:!0},{title:"Canvas vs. SVG",dir:"canvas-vs-svg"},{title:"无障碍访问",dir:"aria"},{title:"可视化设计原则",dir:"design",children:[{title:"用颜色增强可视化效果",dir:"color-enhance"}]},{title:"可视化规范",dir:"chart-specificatio",children:[{title:"折线图",dir:"line",children:[{title:"基础折线图",dir:"basic-line"},{title:"面积图",dir:"area"},{title:"堆叠面积图",dir:"stacked-area"}]},{title:"柱状图",dir:"bar",children:[{title:"基础柱状图",dir:"basic-bar"},{title:"堆叠柱状图",dir:"stacked-bar"},{title:"双向柱状图",dir:"bi-directional-bar"},{title:"分组柱状图",dir:"grouped-bar"}]},{title:"饼图",dir:"pie",children:[{title:"基础饼图",dir:"basic-pie"}]},{title:"散点图",dir:"scatter",children:[{title:"散点图",dir:"scatter"},{title:"气泡图",dir:"bubble"}]},{title:"雷达图",dir:"radar"},{title:"漏斗图",dir:"funnel"},{title:"仪表盘",dir:"gauger"}]}]},{title:"编辑本文档",dir:"meta",children:[{title:"文档编辑指南",dir:"get-started"}]}]),o=r(105),h=function(){return{filled:!1,docVersion:"",ghVersion:"",visibleAffix:!1,locale:"zh",lang:{},menu:{},homepage:{},adBlocked:!1,focusMode:!1,posts:{zh:n},config:o.a}},c={toggle:function(t,e){t[e]=!t[e]},setDocVersion:function(t,e){t.docVersion=e},setGhVersion:function(t,e){t.ghVersion=e},setLocale:function(t,e){t.locale=e},setLang:function(t,e){t.lang=e},setMenu:function(t,menu){t.menu=menu},setHomepage:function(t,e){t.homepage=e},setFilled:function(t){t.filled=!0},setAdBlocked:function(t,e){t.adBlocked=e},setFocusMode:function(t,e){t.focusMode=e}},d=null,v={getLangData:function(t,e){var r=this;return Object(l.a)(regeneratorRuntime.mark((function l(){var n,o,menu,h;return regeneratorRuntime.wrap((function(l){for(;;)switch(l.prev=l.next){case 0:return n=t.commit,l.next=3,r.$docs.get("/lang/"+e);case 3:return o=l.sent,n("setLang",o),n("setDocVersion",o.docVersion),l.next=8,r.$docs.get("/menu/"+e);case 8:return menu=l.sent,n("setMenu",menu),l.next=12,r.$docs.get("/homepage/"+e);case 12:h=l.sent,n("setHomepage",h);case 14:case"end":return l.stop()}}),l)})))()},focusMode:function(t){var e=t.commit;d||(d=setTimeout((function(){return e("setFocusMode",!0)}),1300))},clearFocusMode:function(t){var e=t.commit;d&&(clearTimeout(d),d=null),e("setFocusMode",!1)}}}},[[153,7,3,8]]]);