(function(t){function e(e){for(var i,o,r=e[0],s=e[1],c=e[2],d=0,_=[];d<r.length;d++)o=r[d],a[o]&&_.push(a[o][0]),a[o]=0;for(i in s)Object.prototype.hasOwnProperty.call(s,i)&&(t[i]=s[i]);u&&u(e);while(_.length)_.shift()();return l.push.apply(l,c||[]),n()}function n(){for(var t,e=0;e<l.length;e++){for(var n=l[e],i=!0,r=1;r<n.length;r++){var s=n[r];0!==a[s]&&(i=!1)}i&&(l.splice(e--,1),t=o(o.s=n[0]))}return t}var i={},a={app:0},l=[];function o(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=i,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(n,i,function(e){return t[e]}.bind(null,i));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],s=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var u=s;l.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"07ad":function(t,e,n){"use strict";var i=n("1e54"),a=n.n(i);a.a},"0bbf":function(t,e,n){},"15d1":function(t,e,n){},"1e54":function(t,e,n){},"2ed2":function(t,e,n){"use strict";var i=n("b380"),a=n.n(i);a.a},"37b5":function(t,e,n){"use strict";var i=n("498b"),a=n.n(i);a.a},"3cd9":function(t,e,n){},"498b":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var i=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app",attrs:{id:"app"}},[n("div",{staticClass:"app_box_left"},[n("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"default-active":t.activeIndex,"background-color":"#525c65","active-text-color":"#ffd04b","text-color":"#fff"},on:{select:t.handleSelect}},[n("el-menu-item",{attrs:{index:"1"}},[n("template",{slot:"title"},[n("i",{staticClass:"el-icon-menu"}),n("span",{on:{click:function(e){return t.$router.push({path:"/"})}}},[t._v("文章列表")])])],2),n("el-menu-item",{attrs:{index:"2"}},[n("template",{slot:"title"},[n("i",{staticClass:"el-icon-document"}),n("span",{on:{click:function(e){return t.$router.push({path:"/ArticleAllInfo"})}}},[t._v("文章详情")])])],2),n("el-menu-item",{attrs:{index:"3"}},[n("template",{slot:"title"},[n("i",{staticClass:"el-icon-notebook-1"}),n("span",{on:{click:function(e){return t.$router.push({path:"/FirstAnalyse"})}}},[t._v("初步分析")])])],2),n("el-menu-item",{attrs:{index:"4"}},[n("i",{staticClass:"el-icon-notebook-2"}),n("span",{on:{click:function(e){return t.$router.push({path:"/SecondAnalyse"})}}},[t._v("二次分析")])]),n("el-menu-item",{attrs:{index:"5"}},[n("i",{staticClass:"el-icon-printer"}),n("span",{on:{click:function(e){return t.$router.push({path:"/OutputArticle"})}}},[t._v("输出详情")])])],1)],1),n("div",{staticClass:"app_box_right"},[n("router-view")],1)])},l=[],o={name:"App",data:function(){return{activeIndex:"1"}},mounted:function(){},methods:{handleSelect:function(t,e){console.log(t,e)}}},r=o,s=(n("7faf"),n("2877")),c=Object(s["a"])(r,a,l,!1,null,null,null),u=c.exports,d=n("8c4f"),_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about"},[n("div",{staticClass:"input-suffix"},[n("div",[n("el-select",{attrs:{filterable:"",placeholder:"请选择要查询类型",size:"small"},model:{value:t.searchValue,callback:function(e){t.searchValue=e},expression:"searchValue"}},t._l(t.options,function(t){return n("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}),1)],1),n("div",[n("el-input",{attrs:{placeholder:"请输入id或标题",size:"small"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.searchById(e)}},model:{value:t.inputArticle,callback:function(e){t.inputArticle=e},expression:"inputArticle"}},[n("i",{staticClass:"el-input__icon el-icon-search",attrs:{slot:"suffix"},slot:"suffix"})])],1),t._v(" \n      "),n("div",[n("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"选择开始日期",format:"yyyy 年 MM 月 dd 日 HH 时 mm 分","value-format":"timestamp",size:"small"},model:{value:t.startTimeValue3,callback:function(e){t.startTimeValue3=e},expression:"startTimeValue3"}})],1),n("div",[n("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"选择截止日期",format:"yyyy 年 MM 月 dd 日 HH 时 mm 分","value-format":"timestamp",size:"small"},model:{value:t.endtimeValue3,callback:function(e){t.endtimeValue3=e},expression:"endtimeValue3"}})],1)]),n("div",[n("el-pagination",{attrs:{"current-page":t.pageIndex,"page-sizes":[20,50,100,300,400,600],"page-size":20,layout:"total, sizes, prev, pager, next, jumper",total:t.articleNum},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange,"update:currentPage":function(e){t.pageIndex=e},"update:current-page":function(e){t.pageIndex=e}}})],1),n("div",{staticClass:"article-table"},[n("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,border:"",height:"800"},on:{"update:data":function(e){t.tableData=e},"cell-click":t.changeButton}},[n("el-table-column",{attrs:{prop:"id",label:"id",width:"90"}}),n("el-table-column",{attrs:{prop:"title",label:"标题","show-overflow-tooltip":""}}),n("el-table-column",{attrs:{prop:"_source",label:"来源",width:"100","show-overflow-tooltip":""}}),n("el-table-column",{attrs:{prop:"category",label:"分类",width:"150"}}),n("el-table-column",{attrs:{prop:"article_author",label:"作者",width:"120"}}),n("el-table-column",{attrs:{prop:"status",label:"状态",width:"120"}}),n("el-table-column",{attrs:{prop:"operator",label:"操作人",width:"120"}}),n("el-table-column",{attrs:{prop:"operate_time",label:"操作时间",width:"150","show-overflow-tooltip":""}}),n("el-table-column",{attrs:{prop:"ctime",label:"入库时间",width:"150","show-overflow-tooltip":""}}),n("el-table-column",{attrs:{label:"文章",width:"60"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{type:"text",size:"small"}},[t._v("详情")])]}}])}),n("el-table-column",{attrs:{label:"初步",width:"60"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{type:"text",size:"small"}},[t._v("分析")])]}}])}),n("el-table-column",{attrs:{label:"二次",width:"60"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{type:"text",size:"small"}},[t._v("分析")])]}}])}),n("el-table-column",{attrs:{label:"输出",width:"60"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{type:"text",size:"small"}},[t._v("详情")])]}}])})],1),t._m(0)],1)])},p=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"status-means"},[n("strong",[t._v("状态码注释：")]),t._v("  1：原文和转json后文章上传成功\n300：分析文章后上传成功\n301：分析文章失败\n302：分析后上传资源框架失败\n304：分析阶段从资源框架提取文章json数据失败\n400：文章转h5后上传成功\n401：文章转h5失败\n402：文章转h5后上传资源框架失败\n404：转h5阶段从资源框架提取文章json数据失败")])}],h=(n("6b54"),n("2427")),m=n.n(h),v=n("4328"),f=n.n(v),g={data:function(){return{inputArticle:"",tableData:[],articleNum:1,pageSize:20,pageIndex:1,contentId:"",firAnalyse:"",secAnalyse:"",searchValue:"",options:[{value:"1",label:"标题"},{value:"2",label:"操作人"}],startTimeValue3:"",endtimeValue3:""}},watch:{pageIndex:function(){"undefined"==this.pageIndex&&(this.pageIndex=1,window.localStorage.setItem("pageIndex",this.pageIndex))}},mounted:function(){this.pageSize=window.localStorage.getItem("pageSize"),this.pageIndex=window.localStorage.getItem("pageIndex"),this.getArticleTable()},methods:{changeButton:function(t,e,n,i){var a=e["label"];switch(a){case"文章":window.localStorage.setItem("articleId",t["id"]),this.$router.push({name:"ArticleAllInfo",params:{articleId:t["id"]}});break;case"初步":window.localStorage.setItem("content",t["content"]),window.localStorage.setItem("firAnalyse",t["json_content"]),window.localStorage.setItem("secondAnalyseId",t["analyze_content"]),window.localStorage.setItem("outPutContent",t["html_content"]),window.localStorage.setItem("articleId",t["id"]),this.$router.push({name:"FirstAnalyse",params:{firAnalyse:t["json_content"],articleFirImgs:t["article_img"].length}});break;case"二次":window.localStorage.setItem("secondAnalyseId",t["analyze_content"]),window.localStorage.setItem("articleId",t["id"]),this.$router.push({name:"SecondAnalyse",params:{}});break;case"输出":window.localStorage.setItem("content",t["content"]),window.localStorage.setItem("firAnalyse",t["json_content"]),window.localStorage.setItem("outPutContent",t["html_content"]),window.localStorage.setItem("articleId",t["id"]),this.$router.push({name:"OutputArticle",params:{outPutContent:t["html_content"]}});break}},getArticleTable:function(){var t=this;"null"!=t.pageSize&&"null"!=t.pageIndex||(t.pageSize=20,window.localStorage.setItem("pageIndex",t.pageIndex),window.localStorage.setItem("pageSize",t.pageSize));window.localStorage.setItem("pageSize",t.pageSize);var e=window.localStorage.setItem("pageIndex",t.pageIndex);e&&(t.pageSize=window.localStorage.getItem("pageSize"),t.pageIndex=window.localStorage.getItem("pageIndex")),m.a.post("/article/art_list/",f.a.stringify({page_num:t.pageIndex,per_num:t.pageSize})).then(function(e){if(1===e.data.code){var n=e.data.resultObj.records;t.tableData=n;var i=e.data.resultObj.total_num;t.articleNum=i}else 2==e.data.code&&t.$message({type:"info",message:"对象属性添加失败!"})}).catch(function(t){console.log("对象扩展属性添加接口请求失败"+t.toString())})},handleSizeChange:function(t){this.pageSize=t,this.getArticleTable(),console.log(t)},handleCurrentChange:function(t){this.pageIndex=t,this.getArticleTable(),console.log(t)},searchById:function(){var t=this;m.a.post("/article/art_detail/",f.a.stringify({art_id:t.inputArticle})).then(function(t){}).catch(function(t){console.log("概念详情接口请求失败"+t.toString())})}}},I=g,w=(n("67ce"),Object(s["a"])(I,_,p,!1,null,"2fe8ab8a",null)),y=w.exports,A=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"input-suffix"},[n("div",[n("el-input",{attrs:{placeholder:"按标题或主键搜索",size:"small"},model:{value:t.inputArticle,callback:function(e){t.inputArticle=e},expression:"inputArticle"}},[n("i",{staticClass:"el-input__icon el-icon-search",attrs:{slot:"suffix"},slot:"suffix"})]),n("router-link",{attrs:{to:"FirstAnalyse"}},[n("el-button",{attrs:{type:"primary",plain:"",size:"small"}},[t._v("初步分析")])],1),n("router-link",{attrs:{to:"SecondAnalyse"}},[n("el-button",{attrs:{type:"success",plain:"",size:"small"}},[t._v("二次分析")])],1),n("el-button",{attrs:{type:"info",plain:"",size:"small"}},[t._v("输出结果")])],1)]),n("div",[n("div",{domProps:{innerHTML:t._s(t.articleSelf)}})])])},S=[],b={data:function(){return{inputArticle:"",contentId:this.$route.params.content,articleSelf:""}},mounted:function(){this.getArticleContent()},methods:{getArticleContent:function(){var t=this,e=window.localStorage.getItem("content");t.contentId=e,console.log(e),m.a.post("/article/art_content/",f.a.stringify({text_id:t.contentId})).then(function(e){var n=e.data.resultObj;t.articleSelf=n}).catch(function(t){console.log("概念详情接口请求失败"+t.toString())})}}},C=b,x=(n("5cf3"),Object(s["a"])(C,A,S,!1,null,"7af5da48",null)),k=x.exports,z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"input-suffix"},[n("div",{staticClass:"top-search"},[n("el-input",{attrs:{placeholder:"按标题或主键搜索",size:"small"},model:{value:t.inputArticle,callback:function(e){t.inputArticle=e},expression:"inputArticle"}},[n("i",{staticClass:"el-input__icon el-icon-search",attrs:{slot:"suffix"},slot:"suffix"})]),n("el-button",{attrs:{type:"primary",plain:"",size:"small"},on:{click:t.ToArticleAllInfo}},[t._v("文章详情")]),n("router-link",{attrs:{to:"SecondAnalyse"}},[n("el-button",{attrs:{type:"success",plain:"",size:"small"}},[t._v("二次分析")])],1),n("el-button",{attrs:{type:"info",plain:"",size:"small"},on:{click:t.ToOutputH5}},[t._v("输出结果")])],1),n("div",[n("div",{staticClass:"article-fir-tit"},[n("div",[n("h4",[t._v("标题：")]),t._v(t._s(t.articleFirTit))]),n("div",[n("h4",[t._v("原始关键词：")]),t._v(t._s(t.articleFirTag))]),n("div",[n("ul",[n("li",[n("h4",[t._v("文章ID：")]),t._v(t._s(t.articleId))]),n("li",[n("h4",[t._v("来源：")]),t._v(t._s(t.artSource))]),n("li",[n("h4",[t._v("作者：")]),t._v(t._s(t.article_author))]),n("li",[n("h4",[t._v("写作时间：")]),t._v(t._s(t.publish_time))])])]),n("div",[n("ul",[n("li",[n("h4",[t._v("总字数：")]),t._v(t._s(t.articleFirWords))]),n("li",[n("h4",[t._v("图片数：")]),t._v(t._s(t.articleFirImgs))]),n("li",[n("h4",[t._v("浏览量数：")]),t._v(t._s(t.articleFirViewCount))])])]),n("div",[n("h4",[t._v("原始链接：")]),t._v(t._s(t.originLink))])]),n("div",{staticClass:"artAttr"},[n("div",{staticClass:"init-article",domProps:{innerHTML:t._s(t.articleSelf)}}),n("div",{staticClass:"firAna-article"},t._l(t.articleFirPar,function(e,i,a){return n("div",{staticClass:"paragraph"},[n("div",[n("h4",[t._v("  段落标题：")]),t._v(t._s(e.title))]),n("div",[n("h4",[t._v("句子信息：")]),t._l(e.sentences,function(e,i,a){return n("span",[t._v(t._s(i)+"，"+t._s(e))])})],2)])}),0)])])])])},T=[],F=(n("b54a"),{data:function(){return{inputArticle:"",firAnalyse:this.$route.params.firAnalyse,articleFirTit:"",articleId:"",contentId:"",articleFirTag:"",articleFirWords:"",articleFirParL:"",articleFirViewCount:"",articleFirImgs:"",articleFirPar:"",artSource:"",publish_time:"",article_author:"",originLink:"",articleSelf:"",outPutContent:""}},mounted:function(){this.getLocalResourceId(),this.getArticleContent(),this.getInitArticleContent()},methods:{getLocalResourceId:function(){this.outPutContent=window.localStorage.getItem("outPutContent")},getInitArticleContent:function(){var t=this,e=window.localStorage.getItem("content");t.contentId=e,m.a.post("/article/art_content/",f.a.stringify({text_id:t.contentId})).then(function(e){var n=e.data.resultObj;t.articleSelf=n}).catch(function(t){console.log("概念详情接口请求失败"+t.toString())})},getArticleContent:function(){var t=this;t.firAnalyse=window.localStorage.getItem("firAnalyse"),t.articleId=window.localStorage.getItem("articleId"),m.a.post("/article/art_content/",f.a.stringify({text_id:t.firAnalyse})).then(function(e){var n=e.data.resultObj,i=n.articleInfo;t.articleFirTit=i.title,t.artSource=i._source,t.article_author=i.article_author,t.publish_time=i.publish_time,t.articleFirTag=i.source_key_words,t.articleFirWords=i.word_num,t.originLink=i.link,t.articleFirImgs=i.article_img_num,t.articleFirViewCount=i.view_count,t.articleFirPar=n.paragraph,t.articleFirParL=n.paragraph.length}).catch(function(t){console.log("概念详情接口请求失败"+t.toString())})},ToArticleAllInfo:function(){this.articleId=window.localStorage.getItem("articleId"),window.localStorage.setItem("articleId",this.articleId),this.$router.push({name:"ArticleAllInfo",params:{articleId:this.articleId}})},ToArticleSecond:function(){this.articleId=window.localStorage.getItem("articleId"),this.secondAnalyseId=window.localStorage.getItem("secondAnalyseId"),this.secondAnalyseId=window.localStorage.getItem("outPutContent"),window.localStorage.setItem("articleId",this.articleId),window.localStorage.setItem("content",this.contentId),window.localStorage.setItem("firAnalyse",this.firAnalyse),window.localStorage.setItem("secondAnalyseId",this.secondAnalyseId),window.localStorage.setItem("outPutContent",this.outPutContent),this.$router.push({name:"SecondAnalyse",params:{articleId:this.articleId,secondAnalyseId:this.secondAnalyseId}})},ToOutputH5:function(){window.localStorage.setItem("content",this.contentId),window.localStorage.setItem("outPutContent",this.outPutContent),this.$router.push({name:"OutputArticle",params:{outPutContent:this.outPutContent,content:this.contentId}})}}}),O=F,P=(n("37b5"),Object(s["a"])(O,z,T,!1,null,"2cbe7abb",null)),j=P.exports,$=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"input-suffix"},[n("div",[n("el-input",{attrs:{placeholder:"按标题或主键搜索",size:"small"},model:{value:t.inputArticle,callback:function(e){t.inputArticle=e},expression:"inputArticle"}},[n("i",{staticClass:"el-input__icon el-icon-search",attrs:{slot:"suffix"},slot:"suffix"})]),n("el-button",{attrs:{type:"primary",plain:"",size:"small"},on:{click:t.ToFirstAnalyse}},[t._v("初步分析")]),n("el-button",{attrs:{type:"success",plain:"",size:"small"},on:{click:t.ToArticleAllInfo}},[t._v("文章详情")]),n("el-button",{attrs:{type:"info",plain:"",size:"small"},on:{click:t.ToOutputH5}},[t._v("输出结果")])],1)]),n("div",[n("ul",[n("li",[n("h4",[t._v("文章ID：")]),t._v("\n        "+t._s(t.articleId)+"\n      ")]),n("li",[n("h4",[t._v("标题：")]),t._v("\n        "+t._s(t.artTitle)+"\n      ")]),n("li",[n("h4",[t._v("原始关键词：")]),t._v("\n        "+t._s(t.originKeys)+"\n      ")]),n("li",[n("h4",[t._v("分析关键词：")]),t._v("\n        "+t._s(t.analyze_keys)+"\n      ")]),n("li",[n("h4",[t._v("新词：")]),t._v("\n        "+t._s(t.new_words)+"\n      ")]),n("li",[n("h4",[t._v("原始链接：")]),t._v("\n        "+t._s(t.originLink)+"\n      ")])])]),n("div",t._l(t.artSecondContent,function(e,i,a){return n("div",{staticClass:"sec-para"},[n("div",[n("h5",[t._v("段落：")]),t._v("\n        "+t._s(e.name)+"\n      ")]),n("div",[n("h5",[t._v("标题：")]),t._v("\n        "+t._s(e.title)+"\n      ")]),n("div",[n("h5",[t._v("段落类型：")]),t._v("\n        "+t._s(e.html_class)+"\n      ")]),n("div",[n("h5",[t._v("段落：")]),t._v("\n        "+t._s(e.sentences)+"\n      ")]),t._l(e.cut_sent,function(e,i){return n("div",[n("div",[n("h5",[t._v("句子id：")]),n("span",[t._v(t._s(e.id))])]),n("div",[n("h5",[t._v("句子切分：")]),n("span",[t._v(t._s(e.mr))])])])})],2)}),0)])},L=[],H={data:function(){return{inputArticle:"",secondAnalyseId:this.$route.params.content,artTitle:"",artSecondContent:"",articleId:"",contentId:"",firAnalyse:"",outPutContent:"",originKeys:"",analyze_keys:"",new_words:"",originLink:"",cut_sent_id:"",cut_sent_mr:"",cutAll:"",acut_sent:""}},mounted:function(){this.getLocalSave(),this.getSecondTitle(),this.getSecondContent()},methods:{getLocalSave:function(){this.secondAnalyseId=window.localStorage.getItem("secondAnalyseId"),this.articleId=window.localStorage.getItem("articleId"),this.contentId=window.localStorage.getItem("content"),this.firAnalyse=window.localStorage.getItem("firAnalyse"),this.outPutContent=window.localStorage.getItem("outPutContent")},getSecondTitle:function(){var t=this;"null"==this.secondAnalyseId&&t.$message({type:"error",message:"文章二次分析资源id为NULL",showClose:"true"}),m.a.post("/article/analyze_page_head/",f.a.stringify({text_id:t.secondAnalyseId})).then(function(e){var n=e.data.resultObj;t.artTitle=n.title,t.originKeys=n.original_keys,t.analyze_keys=n.analyze_keys,t.new_words=n.new_words,t.originLink=n.link}).catch(function(t){console.log("概念详情接口请求失败"+t.toString())})},getSecondContent:function(){var t=this;m.a.post("/article/analyze_paragraph/",f.a.stringify({text_id:t.secondAnalyseId})).then(function(e){var n=e.data.resultObj,i=n.resultObj.paragraph;t.artSecondContent=i;for(var a=0;a<i.length;a++)if(void 0!==i[a].cut_sent){var l=i[a].cut_sent;t.acut_sent=l,console.log(l)}}).catch(function(t){console.log("概念详情接口请求失败"+t.toString())})},ToFirstAnalyse:function(){window.localStorage.setItem("content",this.contentId),window.localStorage.setItem("firAnalyse",this.firAnalyse),window.localStorage.setItem("articleId",this.articleId),this.$router.push({name:"FirstAnalyse",params:{}})},ToArticleAllInfo:function(){this.articleId=window.localStorage.getItem("articleId"),window.localStorage.setItem("articleId",this.articleId),this.$router.push({name:"ArticleAllInfo",params:{articleId:this.articleId}})},ToOutputH5:function(){window.localStorage.setItem("content",this.contentId),window.localStorage.setItem("outPutContent",this.outPutContent),this.$router.push({name:"OutputArticle",params:{outPutContent:this.outPutContent,content:this.contentId}})}}},V=H,M=(n("56e3"),Object(s["a"])(V,$,L,!1,null,"b64eaeaa",null)),E=M.exports,D=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"input-suffix-output"},[n("div",[n("el-input",{attrs:{placeholder:"按标题或主键搜索",size:"small"},model:{value:t.inputArticle,callback:function(e){t.inputArticle=e},expression:"inputArticle"}},[n("i",{staticClass:"el-input__icon el-icon-search",attrs:{slot:"suffix"},slot:"suffix"})]),n("el-button",{attrs:{type:"primary",plain:"",size:"small"},on:{click:t.ToFirstAnalyse}},[t._v("初步分析")])],1)]),n("div",{staticClass:"article-fir-tit"},[n("div",[n("h4",[t._v("标题：")]),t._v("\n      "+t._s(t.articleFirTit)+"\n    ")]),n("div",[n("h4",[t._v("原始关键词：")]),t._v("\n      "+t._s(t.articleFirTag)+"\n    ")]),n("div",[n("ul",[n("li",[n("h4",[t._v("文章ID：")]),t._v("\n          "+t._s(t.articleId)+"\n        ")]),n("li",[n("h4",[t._v("来源：")]),t._v("\n          "+t._s(t.artSource)+"\n        ")]),n("li",[n("h4",[t._v("作者：")]),t._v("\n          "+t._s(t.article_author)+"\n        ")]),n("li",[n("h4",[t._v("写作时间：")]),t._v("\n          "+t._s(t.publish_time)+"\n        ")])])]),n("div",[n("ul",[n("li",[n("h4",[t._v("总字数：")]),t._v("\n          "+t._s(t.articleFirWords)+"\n        ")]),n("li",[n("h4",[t._v("图片数：")]),t._v("\n          "+t._s(t.articleFirImgs)+"\n        ")]),n("li",[n("h4",[t._v("浏览量数：")]),t._v("\n          "+t._s(t.articleFirViewCount)+"\n        ")])])]),n("div",[n("h4",[t._v("原始链接：")]),t._v("\n      "+t._s(t.originLink)+"\n    ")])]),n("div",{staticClass:"art-attr"},[n("div",{staticClass:"init-article",domProps:{innerHTML:t._s(t.articleSelf)}}),n("div",{staticClass:"firAna-article",domProps:{innerHTML:t._s(t.articleOutput)}})])])},N=[],W={data:function(){return{inputArticle:"",outputContentId:this.$route.params.outPutContent,articleOutput:"",contentId:"",articleSelf:"",articleId:"",firAnalyse:this.$route.params.firAnalyse,articleFirTit:"",articleFirTag:"",articleFirWords:"",articleFirParL:"",articleFirViewCount:"",articleFirImgs:"",articleFirPar:"",artSource:"",publish_time:"",article_author:"",originLink:""}},mounted:function(){this.getLocalResourceId(),this.getArticleTitle(),this.getArticleContent(),this.getInitArticleContent()},methods:{getLocalResourceId:function(){this.contentId=window.localStorage.getItem("content"),this.firAnalyse=window.localStorage.getItem("firAnalyse"),this.articleId=window.localStorage.getItem("articleId")},getArticleTitle:function(){var t=this;t.firAnalyse=window.localStorage.getItem("firAnalyse"),t.articleId=window.localStorage.getItem("articleId"),m.a.post("/article/art_content/",f.a.stringify({text_id:t.firAnalyse})).then(function(e){var n=e.data.resultObj,i=n.articleInfo;t.articleFirTit=i.title,t.artSource=i._source,t.article_author=i.article_author,t.publish_time=i.publish_time,t.articleFirTag=i.source_key_words,t.articleFirWords=i.word_num,t.originLink=i.link,t.articleFirImgs=i.article_img_num,t.articleFirViewCount=i.view_count}).catch(function(t){console.log("概念详情接口请求失败"+t.toString())})},getInitArticleContent:function(){var t=this,e=window.localStorage.getItem("content");t.contentId=e,m.a.post("/article/art_content/",f.a.stringify({text_id:t.contentId})).then(function(e){var n=e.data.resultObj;t.articleSelf=n}).catch(function(t){console.log("概念详情接口请求失败"+t.toString())})},getArticleContent:function(){var t=this;t.outputContentId=window.localStorage.getItem("outPutContent"),"null"==this.outputContentId&&t.$message({type:"error",message:"输出H5资源id为NULL",showClose:"true"}),m.a.post("/article/art_content/",f.a.stringify({text_id:t.outputContentId})).then(function(e){var n=e.data.resultObj;t.articleOutput=n}).catch(function(t){console.log("概念详情接口请求失败"+t.toString())})},ToArticleAllInfo:function(){this.articleId=window.localStorage.setItem("articleId",this.articleId),this.$router.push({name:"ArticleAllInfo",params:{articleId:this.articleId}})},ToFirstAnalyse:function(){window.localStorage.setItem("content",this.contentId),window.localStorage.setItem("firAnalyse",this.firAnalyse),window.localStorage.setItem("articleId",this.articleId),this.$router.push({name:"FirstAnalyse",params:{}})},ToArticleSecond:function(){this.articleId=window.localStorage.getItem("articleId"),this.secondAnalyseId=window.localStorage.getItem("secondAnalyseId"),this.secondAnalyseId=window.localStorage.getItem("outPutContent"),window.localStorage.setItem("articleId",this.articleId),window.localStorage.setItem("content",this.contentId),window.localStorage.setItem("firAnalyse",this.firAnalyse),window.localStorage.setItem("secondAnalyseId",this.secondAnalyseId),window.localStorage.setItem("outPutContent",this.outPutContent),this.$router.push({name:"SecondAnalyse",params:{articleId:this.articleId,secondAnalyseId:this.secondAnalyseId}})}}},B=W,R=(n("07ad"),Object(s["a"])(B,D,N,!1,null,null,null)),K=R.exports,U=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"input-suffix-detail"},[n("div",[n("el-input",{attrs:{placeholder:"按标题或主键搜索",size:"small"},model:{value:t.inputArticle,callback:function(e){t.inputArticle=e},expression:"inputArticle"}},[n("i",{staticClass:"el-input__icon el-icon-search",attrs:{slot:"suffix"},slot:"suffix"})]),n("el-button",{attrs:{type:"primary",plain:"",size:"small"},on:{click:t.ToFirstAnalyse}},[t._v("初步分析")]),n("router-link",{attrs:{to:"SecondAnalyse"}},[n("el-button",{attrs:{type:"success",plain:"",size:"small"}},[t._v("二次分析")])],1),n("el-button",{attrs:{type:"info",plain:"",size:"small"},on:{click:t.ToOutputH5}},[t._v("输出结果")])],1)]),n("div",[n("div",{staticClass:"articleSelf"},[n("div",[n("h5",[t._v("标题：")]),t._v("\n        "+t._s(t.articleTit)+"\n      ")]),n("div",[n("h5",[t._v("摘要：")]),t._v("\n        "+t._s(t._summary)+"\n      ")]),n("div",[n("h5",[t._v("文章标签：")]),t._v("\n        "+t._s(t.all_tags)+"\n      ")]),n("div",[n("h5",[t._v("文章作者：")]),t._v("\n        "+t._s(t.article_author)+"   \n        "),n("h5",[t._v("分类：")]),t._v("\n        "+t._s(t.category)+"   \n        "),n("h5",[t._v("关键词：")]),t._v("\n        "+t._s(t.source_key_words)+"   \n        "),n("h5",[t._v("来源：")]),t._v("\n        "+t._s(t._source)+"\n      ")]),n("div",[n("h5",[t._v("文章类型(0 图文；1 纯文；2 纯图)：")]),t._v("\n        "+t._s(t.atype)+"\n      ")]),n("div",[n("h5",[t._v("浏览量：")]),t._v("\n        "+t._s(t.view_count)+"   \n        "),n("h5",[t._v("评论量：")]),t._v("\n        "+t._s(t.comment_count)+"   \n        "),n("h5",[t._v("字数：")]),t._v("\n        "+t._s(t.word_num)+"   \n        "),n("h5",[t._v("文章内图片数量：")]),t._v("\n        "+t._s(t.article_img_num)+"\n      ")]),n("div",[n("h5",[t._v("是否有外部链接：")]),t._v("\n        "+t._s(t.has_extern_link)+"\n      ")]),n("div",[n("h5",[t._v("文章url：")]),t._v("\n        "+t._s(t.link)+"\n      ")]),n("div",[n("h5",[t._v("状态码：")]),t._v("\n        "+t._s(t.status)+"   \n        "),n("h5",[t._v("id：")]),t._v("\n        "+t._s(t.id)+"\n      ")]),n("div",[n("h5",[t._v("标题md5：")]),t._v("\n        "+t._s(t.article_title_md5)+"\n        "),n("h5",[t._v("文章内容md5：")]),t._v("\n        "+t._s(t.content_md5)+"\n      ")]),n("div",[n("h5",[t._v("操作时间：")]),t._v("\n        "+t._s(t.operate_time)+"    \n        "),n("h5",[t._v("操作人：")]),t._v("\n        "+t._s(t.operator)+"\n      ")]),n("div",[n("h5",[t._v("文章爬取时间：")]),t._v("\n        "+t._s(t.download_time)+"   \n        "),n("h5",[t._v("爬取人：")]),t._v("\n        "+t._s(t.username)+"\n      ")]),n("div",[n("h5",[t._v("文章写作时间：")]),t._v("\n        "+t._s(t.publish_time)+"   \n        "),n("h5",[t._v("入库时间：")]),t._v("\n        "+t._s(t.ctime)+"\n      ")]),n("div",[n("h5",[t._v("文章内图片：")]),t._v("\n        "+t._s(t.article_img)+"\n      ")]),n("div",[n("h5",[t._v("封面图：")]),t._v("\n        "+t._s(t.list_img)+"\n      ")]),n("div",[n("h5",[t._v("原文内容的资源id（原始HTML）：")]),t._v("\n        "+t._s(t.content)+"\n      ")]),n("div",[n("h5",[t._v("文章转json后的资源id(初步分析)：")]),t._v("\n        "+t._s(t.json_content)+"\n      ")]),n("div",[n("h5",[t._v("文章分析后的资源id（二次分析）：")]),t._v("\n        "+t._s(t.analyze_content)+"\n      ")]),n("div",[n("h5",[t._v("文章转H5后的资源id（输出H5）：")]),t._v("\n        "+t._s(t.html_content)+"\n      ")])])])])},J=[],q=(n("ac6a"),{data:function(){return{inputArticle:"",articleId:this.$route.params.articleId,articleAllInfo:"",articleTit:"",_source:"",_summary:"",all_tags:"",source_key_words:"",articleStatus:"",articleTag:"",has_extern_link:"",download_time:"",ctime:"",operate_time:"",operator:"",view_count:"",score:"",status:"",article_author:"",comment_count:"",word_num:"",publish_time:"",list_img:"",article_title_md5:"",content_md5:"",username:"",link:"",json_content:"",content:"",id:"",category:"",article_img_num:"",article_img:"",atype:"",html_content:"",analyze_content:""}},mounted:function(){this.getArticleAllInfo()},methods:{getArticleAllInfo:function(){var t=this;t.articleId=window.localStorage.getItem("articleId"),m.a.post("/article/art_detail/",f.a.stringify({art_id:t.articleId})).then(function(e){var n=e.data.resultObj;n.forEach(function(e){for(var n in t.articleAllInfo=e,e)t.articleTit=e.title,t.word_num=e.word_num,t._source=e._source,t.article_author=e.article_author,t.all_tags=e.all_tags,t.score=e.score,t.view_count=e.view_count,t.download_time=e.download_time,t.has_extern_link=e.has_extern_link,t.operate_time=e.operate_time,t.comment_count=e.comment_count,t.status=e.status,t.publish_time=e.publish_time,t.list_img=e.list_img,t.article_title_md5=e.article_title_md5,null==e.content_md5&&(t.content_md5="NULL"),t._summary=e._summary,t.source_key_words=e.source_key_words,t.username=e.username,t.link=e.link,t.json_content=e.json_content,t.operator=e.operator,t.id=e.id,t.category=e.category,t.article_img_num=e.article_img_num,t.article_img=e.article_img,t.ctime=e.ctime,t.atype=e.atype,t.content=e.content,t.atype=e.atype,null==e.analyze_content?t.analyze_content="null":t.analyze_content=e.analyze_content,null==e.html_content?t.html_content="null":t.html_content=e.html_content})}).catch(function(t){console.log("概念详情接口请求失败"+t.toString())})},ToFirstAnalyse:function(){window.localStorage.setItem("content",this.content),window.localStorage.setItem("firAnalyse",this.json_content),window.localStorage.setItem("outPutContent",this.html_content),window.localStorage.setItem("articleId",this.id),this.$router.push({name:"FirstAnalyse",params:{firAnalyse:this.json_content}})},ToOutputH5:function(){window.localStorage.setItem("content",this.content),window.localStorage.setItem("outPutContent",this.html_content),this.$router.push({name:"OutputArticle",params:{outPutContent:this.html_content}})}}}),G=q,Q=(n("2ed2"),Object(s["a"])(G,U,J,!1,null,"7df6f01e",null)),X=Q.exports;i["default"].use(d["a"]);var Y=new d["a"]({mode:"history",base:"/",routes:[{path:"/",name:"ArticleTable",component:y},{path:"/ArticleDetail",name:"ArticleDetail",component:k},{path:"/FirstAnalyse",name:"FirstAnalyse",component:j},{path:"/SecondAnalyse",name:"SecondAnalyse",component:E},{path:"/OutputArticle",name:"OutputArticle",component:K},{path:"/ArticleAllInfo",name:"ArticleAllInfo",component:X}]}),Z=n("2f62");i["default"].use(Z["a"]);var tt=new Z["a"].Store({state:{},mutations:{},actions:{}}),et=n("4f67"),nt=n.n(et);n("fc20");i["default"].config.productionTip=!1,i["default"].use(nt.a),i["default"].prototype.$http=m.a,new i["default"]({router:Y,store:tt,render:function(t){return t(u)}}).$mount("#app")},"56e3":function(t,e,n){"use strict";var i=n("15d1"),a=n.n(i);a.a},"5cf3":function(t,e,n){"use strict";var i=n("3cd9"),a=n.n(i);a.a},"67ce":function(t,e,n){"use strict";var i=n("0bbf"),a=n.n(i);a.a},"7faf":function(t,e,n){"use strict";var i=n("8fba"),a=n.n(i);a.a},"8fba":function(t,e,n){},b380:function(t,e,n){}});
//# sourceMappingURL=app.f9e3339f.js.map