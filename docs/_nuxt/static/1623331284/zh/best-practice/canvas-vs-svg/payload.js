__NUXT_JSONP__("/zh/best-practice/canvas-vs-svg", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B){return {data:[{article:{slug:"canvas-vs-svg",toc:[{id:k,depth:t,text:k},{id:l,depth:t,text:l}],body:{type:"root",children:[{type:b,tag:"h1",props:{id:"使用-canvas-或者-svg-渲染"},children:[{type:b,tag:d,props:{href:"#%E4%BD%BF%E7%94%A8-canvas-%E6%88%96%E8%80%85-svg-%E6%B8%B2%E6%9F%93",ariaHidden:n,tabIndex:o},children:[{type:b,tag:p,props:{className:[q,r]},children:[]}]},{type:a,value:"使用 Canvas 或者 SVG 渲染"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"浏览器端图表库大多会选择 SVG 或者 Canvas 进行渲染。对于绘制图表来说，这两种技术往往是可替换的，效果相近。但是在一些场景中，他们的表现和能力又有一定差异。于是，对它们的选择取舍，就成为了一个一直存在的不易有标准答案的话题。"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"ECharts 从初始一直使用 Canvas 绘制图表（除了对 IE8- 使用 VML）。而 "},{type:b,tag:d,props:{href:"https:\u002F\u002Fgithub.com\u002Fapache\u002Fecharts\u002Freleases",rel:[f,g,h],target:i},children:[{type:a,value:"ECharts v4.0"}]},{type:a,value:" 发布了 SVG 渲染器，从而提供了一种新的选择。只须在初始化一个图表实例时，设置 "},{type:b,tag:d,props:{href:"http:\u002F\u002Fecharts.baidu.com\u002Fapi.html#echarts.init",rel:[f,g,h],target:i},children:[{type:a,value:"renderer 参数"}]},{type:a,value:" 为 "},{type:b,tag:u,props:{},children:[{type:a,value:"'canvas'"}]},{type:a,value:" 或 "},{type:b,tag:u,props:{},children:[{type:a,value:"'svg'"}]},{type:a,value:" 即可指定渲染器，比较方便。"}]},{type:a,value:c},{type:b,tag:"blockquote",props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"SVG 和 Canvas 这两种使用方式差异很大的技术，能够做到同时被透明支持，主要归功于 ECharts 底层库 "},{type:b,tag:d,props:{href:"https:\u002F\u002Fgithub.com\u002Fecomfe\u002Fzrender",rel:[f,g,h],target:i},children:[{type:a,value:"ZRender"}]},{type:a,value:" 的抽象和实现，形成可互换的 SVG 渲染器和 Canvas 渲染器。"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:v,props:{id:k},children:[{type:b,tag:d,props:{href:"#%E9%80%89%E6%8B%A9%E5%93%AA%E7%A7%8D%E6%B8%B2%E6%9F%93%E5%99%A8",ariaHidden:n,tabIndex:o},children:[{type:b,tag:p,props:{className:[q,r]},children:[]}]},{type:a,value:k}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"一般来说，Canvas 更适合绘制图形元素数量非常大（这一般是由数据量大导致）的图表（如热力图、地理坐标系或平行坐标系上的大规模线图或散点图等），也利于实现某些视觉 "},{type:b,tag:d,props:{href:"examples\u002Feditor.html?c=lines-bmap-effect"},children:[{type:a,value:"特效"}]},{type:a,value:"。但是，在不少场景中，SVG 具有重要的优势：它的内存占用更低（这对移动端尤其重要）、渲染性能略高、并且用户使用浏览器内置的缩放功能时不会模糊。"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"选择哪种渲染器，我们可以根据软硬件环境、数据量、功能需求综合考虑。"}]},{type:a,value:c},{type:b,tag:s,props:{},children:[{type:a,value:c},{type:b,tag:j,props:{},children:[{type:a,value:"在软硬件环境较好，数据量不大的场景下（例如 PC 端做商务报表），两种渲染器都可以适用，并不需要太多纠结。"}]},{type:a,value:c},{type:b,tag:j,props:{},children:[{type:a,value:"在环境较差，出现性能问题需要优化的场景下，可以通过试验来确定使用哪种渲染器。比如有这些经验：\n"},{type:b,tag:s,props:{},children:[{type:a,value:c},{type:b,tag:j,props:{},children:[{type:a,value:"在须要创建很多 ECharts 实例且浏览器易崩溃的情况下（可能是因为 Canvas 数量多导致内存占用超出手机承受能力），可以使用 SVG 渲染器来进行改善。大略得说，如果图表运行在低端安卓机，或者我们在使用一些特定图表如 "},{type:b,tag:d,props:{href:"https:\u002F\u002Fecomfe.github.io\u002Fecharts-liquidfill\u002Fexample\u002F",rel:[f,g,h],target:i},children:[{type:a,value:"水球图"}]},{type:a,value:" 等，SVG 渲染器可能效果更好。"}]},{type:a,value:c},{type:b,tag:j,props:{},children:[{type:a,value:"数据量很大、较多交互时，可以选用 Canvas 渲染器。"}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"我们强烈欢迎开发者们"},{type:b,tag:d,props:{href:"https:\u002F\u002Fgithub.com\u002Fapache\u002Fecharts\u002Fissues\u002Fnew",rel:[f,g,h],target:i},children:[{type:a,value:"反馈"}]},{type:a,value:"给我们使用的体验和场景，帮助我们更好的做优化。"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"注：除了某些特殊的渲染可能依赖 Canvas：如"},{type:b,tag:d,props:{href:"option.html#series-lines.effect"},children:[{type:a,value:"炫光尾迹特效"}]},{type:a,value:"、"},{type:b,tag:d,props:{href:"examples\u002Feditor.html?c=heatmap-bmap"},children:[{type:a,value:"带有混合效果的热力图"}]},{type:a,value:"等，绝大部分功能 SVG 都是支持的。"}]},{type:a,value:c},{type:b,tag:v,props:{id:l},children:[{type:b,tag:d,props:{href:"#%E5%A6%82%E4%BD%95%E4%BD%BF%E7%94%A8%E6%B8%B2%E6%9F%93%E5%99%A8",ariaHidden:n,tabIndex:o},children:[{type:b,tag:p,props:{className:[q,r]},children:[]}]},{type:a,value:l}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"ECharts 默认使用 Canvas 渲染。如果想使用 SVG 渲染，ECharts 代码中须包括有 SVG 渲染器模块。"}]},{type:a,value:c},{type:b,tag:s,props:{},children:[{type:a,value:c},{type:b,tag:j,props:{},children:[{type:a,value:"ECharts 的"},{type:b,tag:d,props:{href:"https:\u002F\u002Fwww.jsdelivr.com\u002Fpackage\u002Fnpm\u002Fecharts",rel:[f,g,h],target:i},children:[{type:a,value:"预构建文件"}]},{type:a,value:" 中，"},{type:b,tag:d,props:{href:"https:\u002F\u002Fcdn.jsdelivr.net\u002Fnpm\u002Fecharts\u002Fdist\u002Fecharts.common.min.js",rel:[f,g,h],target:i},children:[{type:a,value:"常用版"}]},{type:a,value:" 和 "},{type:b,tag:d,props:{href:"https:\u002F\u002Fcdn.jsdelivr.net\u002Fnpm\u002Fecharts\u002Fdist\u002Fecharts.min.js",rel:[f,g,h],target:i},children:[{type:a,value:"完整版"}]},{type:a,value:" 已经包含了 SVG 渲染器，可直接使用。而 "},{type:b,tag:d,props:{href:"https:\u002F\u002Fcdn.jsdelivr.net\u002Fnpm\u002Fecharts\u002Fdist\u002Fecharts.simple.min.js",rel:[f,g,h],target:i},children:[{type:a,value:"精简版"}]},{type:a,value:" 没有包括。"}]},{type:a,value:c},{type:b,tag:j,props:{},children:[{type:a,value:w},{type:b,tag:d,props:{href:"builder.html"},children:[{type:a,value:"在线自定义构建 ECharts"}]},{type:a,value:"，则需要勾上页面下方的 “SVG 渲染”。"}]},{type:a,value:c},{type:b,tag:j,props:{},children:[{type:a,value:w},{type:b,tag:d,props:{href:"tutorial.html#%E8%87%AA%E5%AE%9A%E4%B9%89%E6%9E%84%E5%BB%BA%20ECharts"},children:[{type:a,value:"线下自定义构建 ECharts"}]},{type:a,value:"，则须引入 SVG 渲染器模块，即："}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:x,props:{className:[y]},children:[{type:b,tag:z,props:{lang:A,"line-highlights":m,"file-name":m},children:[{type:a,value:"import 'zrender\u002Flib\u002Fsvg\u002Fsvg';\n"}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"然后，我们就可以在代码中，初始化图表实例时，"},{type:b,tag:d,props:{href:"api.html#echarts.init"},children:[{type:a,value:"传入参数"}]},{type:a,value:" 选择渲染器类型："}]},{type:a,value:c},{type:b,tag:x,props:{className:[y]},children:[{type:b,tag:z,props:{lang:A,"line-highlights":m,"file-name":m},children:[{type:a,value:"\u002F\u002F 使用 Canvas 渲染器（默认）\nvar chart = echarts.init(containerDom, null, { renderer: 'canvas' });\n\u002F\u002F 等价于：\nvar chart = echarts.init(containerDom);\n\n\u002F\u002F 使用 SVG 渲染器\nvar chart = echarts.init(containerDom, null, { renderer: 'svg' });\n"}]}]}]},dir:"\u002Fzh\u002Fbest-practice",path:"\u002Fzh\u002Fbest-practice\u002Fcanvas-vs-svg",extension:".md",createdAt:B,updatedAt:B},postPath:"zh\u002Fbest-practice\u002Fcanvas-vs-svg"}],fetch:{},mutations:[]}}("text","element","\n","a","p","nofollow","noopener","noreferrer","_blank","li","选择哪种渲染器","如何使用渲染器","","true",-1,"span","icon","icon-link","ul",2,"code","h2","如果","div","nuxt-content-highlight","md-code-block","js","2021-06-10T13:19:59.312Z")));