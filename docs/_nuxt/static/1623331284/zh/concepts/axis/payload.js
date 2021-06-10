__NUXT_JSONP__("/zh/concepts/axis", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F){return {data:[{article:{slug:"axis",toc:[{id:B,depth:p,text:C},{id:v,depth:p,text:v},{id:w,depth:p,text:w},{id:x,depth:p,text:x},{id:y,depth:p,text:y}],body:{type:"root",children:[{type:b,tag:"h1",props:{id:D},children:[{type:b,tag:e,props:{href:"#%E5%9D%90%E6%A0%87%E8%BD%B4",ariaHidden:k,tabIndex:l},children:[{type:b,tag:m,props:{className:[n,o]},children:[]}]},{type:a,value:D}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"直角坐标系中的 x\u002Fy 轴。"}]},{type:a,value:c},{type:b,tag:q,props:{id:B},children:[{type:b,tag:e,props:{href:"#x-%E8%BD%B4%E3%80%81y-%E8%BD%B4",ariaHidden:k,tabIndex:l},children:[{type:b,tag:m,props:{className:[n,o]},children:[]}]},{type:a,value:C}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"x 轴和 y 轴都由轴线、刻度、刻度标签、轴标题四个部分组成。部分图表中还会有网格线来帮助查看和计算数据"}]},{type:a,value:c},{type:b,tag:"img",props:{"max-width":E,width:z,height:z,src:"images\u002Fdesign\u002Faxis\u002Fcharts_axis_img02.jpg"},children:[]},{type:a,value:"\n\n"},{type:b,tag:f,props:{},children:[{type:a,value:"普通的二维数据坐标系都有 x 轴和 y 轴，通常情况下，x 轴显示在图表的底部，y 轴显示在左侧，一般配置如下："}]},{type:a,value:c},{type:b,tag:g,props:{className:[h]},children:[{type:b,tag:i,props:{lang:j,"line-highlights":d,"file-name":d},children:[{type:a,value:"option = {\n  xAxis: {\n    \u002F\u002F ...\n  },\n  yAxis: {\n    \u002F\u002F ...\n  }\n};\n"}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"x 轴常用来标示数据的维度，维度一般用来指数据的类别，是观察数据的角度，例如“销售时间” “销售地点” “产品名称”等。y 轴常常用来标示数据的数值，数值是用来具体考察某一类数据的数量值，也是我们需要分析的指标，例如“销售数量”和“销售金额”等。"}]},{type:a,value:c},{type:b,tag:g,props:{className:[h]},children:[{type:b,tag:i,props:{lang:j,"line-highlights":d,"file-name":d},children:[{type:a,value:"option = {\n  xAxis: {\n    type: 'time',\n    name: '销售时间'\n    \u002F\u002F ...\n  },\n  yAxis: {\n    type: 'value',\n    name: '销售数量'\n    \u002F\u002F ...\n  }\n  \u002F\u002F ...\n};\n"}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"当 x 轴（水平坐标轴）跨度很大，可以采用才区域缩放方式灵活显示数据内容。"}]},{type:a,value:c},{type:b,tag:g,props:{className:[h]},children:[{type:b,tag:i,props:{lang:j,"line-highlights":d,"file-name":d},children:[{type:a,value:"option = {\n  xAxis: {\n    type: 'time',\n    name: '销售时间'\n    \u002F\u002F ...\n  },\n  yAxis: {\n    type: 'value',\n    name: '销售数量'\n    \u002F\u002F ...\n  },\n  dataZoom: [\n    \u002F\u002F ...\n  ]\n  \u002F\u002F ...\n};\n"}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"在二维数据中，轴也可以有多个。ECharts 中一般情况下单个 grid 组件最多只能放两个 x\u002Fy 轴，多于两个 x\u002Fy 轴需要通过配置 "},{type:b,tag:e,props:{href:"https:\u002F\u002Fecharts.apache.org\u002Foption.html#xAxis.offset",rel:[r,s,t],target:u},children:[{type:a,value:"offset"}]},{type:a,value:" 属性防止同个位置多个轴的重叠。两个 x 轴显示在上下，两个 y 轴显示在左右两侧。"}]},{type:a,value:c},{type:b,tag:g,props:{className:[h]},children:[{type:b,tag:i,props:{lang:j,"line-highlights":d,"file-name":d},children:[{type:a,value:"option = {\n  xAxis: {\n    type: 'time',\n    name: '销售时间'\n    \u002F\u002F ...\n  },\n  yAxis: [\n    {\n      type: 'value',\n      name: '销售数量'\n      \u002F\u002F ...\n    },\n    {\n      type: 'value',\n      name: '销售金额'\n      \u002F\u002F ...\n    }\n  ]\n  \u002F\u002F ...\n};\n"}]}]},{type:a,value:c},{type:b,tag:q,props:{id:v},children:[{type:b,tag:e,props:{href:"#%E8%BD%B4%E7%BA%BF",ariaHidden:k,tabIndex:l},children:[{type:b,tag:m,props:{className:[n,o]},children:[]}]},{type:a,value:v}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:A},{type:b,tag:e,props:{href:"https:\u002F\u002Fecharts.apache.org\u002Foption.html#xAxis.axisLine",rel:[r,s,t],target:u},children:[{type:a,value:"axisLine"}]},{type:a,value:" 相关的配置，我们可以根据实际情况调整，例如轴线两端的箭头，轴线的样式等。"}]},{type:a,value:c},{type:b,tag:g,props:{className:[h]},children:[{type:b,tag:i,props:{lang:j,"line-highlights":d,"file-name":d},children:[{type:a,value:"option = {\n  xAxis: {\n    axisLine: {\n      symbol: 'arrow',\n      lineStyle: {\n        type: 'dashed'\n        \u002F\u002F ...\n      }\n    }\n    \u002F\u002F ...\n  },\n  yAxis: {\n    axisLine: {\n      symbol: 'arrow',\n      lineStyle: {\n        type: 'dashed'\n        \u002F\u002F ...\n      }\n    }\n  }\n  \u002F\u002F ...\n};\n"}]}]},{type:a,value:c},{type:b,tag:q,props:{id:w},children:[{type:b,tag:e,props:{href:"#%E5%88%BB%E5%BA%A6",ariaHidden:k,tabIndex:l},children:[{type:b,tag:m,props:{className:[n,o]},children:[]}]},{type:a,value:w}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:A},{type:b,tag:e,props:{href:"https:\u002F\u002Fecharts.apache.org\u002Foption.html#xAxis.axisTick",rel:[r,s,t],target:u},children:[{type:a,value:"axisTick"}]},{type:a,value:" 相关的配置，我们可以根据实际情况调整，例如刻度线的长度，样式等。"}]},{type:a,value:c},{type:b,tag:g,props:{className:[h]},children:[{type:b,tag:i,props:{lang:j,"line-highlights":d,"file-name":d},children:[{type:a,value:"option = {\n  xAxis: {\n    axisTick: {\n      length: 6,\n      lineStyle: {\n        type: 'dashed'\n        \u002F\u002F ...\n      }\n    }\n    \u002F\u002F ...\n  },\n  yAxis: {\n    axisTick: {\n      length: 6,\n      lineStyle: {\n        type: 'dashed'\n        \u002F\u002F ...\n      }\n    }\n  }\n  \u002F\u002F ...\n};\n"}]}]},{type:a,value:c},{type:b,tag:q,props:{id:x},children:[{type:b,tag:e,props:{href:"#%E5%88%BB%E5%BA%A6%E6%A0%87%E7%AD%BE",ariaHidden:k,tabIndex:l},children:[{type:b,tag:m,props:{className:[n,o]},children:[]}]},{type:a,value:x}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:A},{type:b,tag:e,props:{href:"https:\u002F\u002Fecharts.apache.org\u002Foption.html#xAxis.axisLabel",rel:[r,s,t],target:u},children:[{type:a,value:"axisLabel"}]},{type:a,value:" 相关的配置，我们可以根据实际情况调整，例如文字对齐方式，自定义刻度标签内容等。"}]},{type:a,value:c},{type:b,tag:g,props:{className:[h]},children:[{type:b,tag:i,props:{lang:j,"line-highlights":d,"file-name":d},children:[{type:a,value:"option = {\n  xAxis: {\n    axisLabel: {\n      formatter: '{value} kg',\n      align: 'center'\n      \u002F\u002F ...\n    }\n    \u002F\u002F ...\n  },\n  yAxis: {\n    axisLabel: {\n      formatter: '{value} 元',\n      align: 'center'\n      \u002F\u002F ...\n    }\n  }\n  \u002F\u002F ...\n};\n"}]}]},{type:a,value:c},{type:b,tag:q,props:{id:y},children:[{type:b,tag:e,props:{href:"#%E7%A4%BA%E4%BE%8B",ariaHidden:k,tabIndex:l},children:[{type:b,tag:m,props:{className:[n,o]},children:[]}]},{type:a,value:y}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"图左侧的 y 轴代表东京月平均气温，右侧的 y 轴表示东京降水量，x 轴表示时间。两组 y 轴在一起，反映了平均气温和降水量间的趋势关系。"}]},{type:a,value:c},{type:a,value:c},{type:b,tag:"iframe",props:{"max-width":E,width:z,height:400,src:"https:\u002F\u002Fgallery.echartsjs.com\u002Fview-lite.html?cid=xrJYBh__4z"},children:[{type:a,value:c}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"这里简要介绍了坐标轴相关的常用配置项及用法，更多关于坐标轴配置项及用法请移步"},{type:b,tag:e,props:{href:"https:\u002F\u002Fecharts.apache.org\u002Foption.html#xAxis",rel:[r,s,t],target:u},children:[{type:a,value:"官网"}]},{type:a,value:"。"}]}]},dir:"\u002Fzh\u002Fconcepts",path:"\u002Fzh\u002Fconcepts\u002Faxis",extension:".md",createdAt:F,updatedAt:F},postPath:"zh\u002Fconcepts\u002Faxis"}],fetch:{},mutations:[]}}("text","element","\n","","a","p","div","nuxt-content-highlight","md-code-block","js","true",-1,"span","icon","icon-link",2,"h2","nofollow","noopener","noreferrer","_blank","轴线","刻度","刻度标签","示例","100%","ECharts 提供了轴线 ","x-轴、y-轴","x 轴、y 轴","坐标轴","830","2021-06-10T13:19:59.312Z")));