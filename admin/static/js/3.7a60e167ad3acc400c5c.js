webpackJsonp([3],{"7hmB":function(t,e){},zCyR:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});i("n2nY");var a=new COS({SecretId:"AKIDNDEoAFsUFLL95otDNL5tGOK17PelmpQs",SecretKey:"Pq20vuqjaGn7DPPAg0A6nOllaS8alupB"}),s={data:function(){return{category_list:[],filter_list:[],show_list:[],img_urls:[],page_size:10,page_index:1,page_total:0,search_key:""}},methods:{initUser:function(){var t=window.prompt("提示","输入密码吧！");t==this.sysuser&&(window.localStorage.setItem("user",t),this.getList())},findArticle:function(t){this.$router.push({path:"/view/all_view",query:{key:t}})},getList:function(){var t=this,e={Bucket:"cyp20190111-1251525641",Region:"ap-chengdu"};a.getBucket(e,function(e,i){var a=[];e?console.log(e):i.Contents.map(function(e){var i=e.Key;i.endsWith("/")&&(i="");var s={};s.key=i,s.size=e.Size,s.tag=e.ETag,s.date=e.LastModified,i.indexOf("public/")>=0?(i=i.replace("public/",""),s.type="public",s.typeName="公共",i.indexOf("/")>=0&&(s.category=i.substring(0,i.indexOf("/")),s.title=i.substring(i.indexOf("/")+1,i.length),a.push(s))):i.indexOf("private/")>=0&&window.localStorage.getItem("user")&&window.localStorage.getItem("user")==t.sysuser&&(i=i.replace("private/",""),s.type="private",s.typeName="私有",i.indexOf("/")>=0&&(s.category=i.substring(0,i.indexOf("/")),s.title=i.substring(i.indexOf("/")+1,i.length),a.push(s)))}),t.$data.category_list=a,t.$data.filter_list=a,t.initList()})},setFilters:function(t){this.$data.search_key=t,this.filterList()},filterList:function(){var t=this;if(this.$data.search_key){var e=[];this.$data.category_list.map(function(i){console.log(i),i.key.indexOf(t.$data.search_key)>-1&&(console.log("push"+i),e.push(i))}),this.$data.filter_list=e}else this.$data.filter_list=this.$data.category_list;this.initList()},initList:function(){var t=this.$data.page_size,e=(this.$data.filter_list.length,this.$data.page_index);this.$data.page_total=this.$data.filter_list.length,this.$data.show_list=[];for(var i=t*(e-1);i<t*e&&i<this.$data.page_total;i++)this.$data.show_list.push(this.$data.filter_list[i])},pageChange:function(t){this.$data.page_index=t,this.initList()}},computed:{},mounted:function(){this.$data.img_urls=[];for(var t=0;t<=5;t++){this.$data.img_urls.push("https://uploadbeta.com/api/pictures/random/?key=BingEverydayWallpaperPicture&s="+t)}this.getList()}},n={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"main"},[i("div",{staticClass:"right_c"},[i("el-carousel",{attrs:{trigger:"click",height:"350px"}},t._l(t.img_urls,function(t){return i("el-carousel-item",{key:t},[i("img",{staticClass:"img_c",attrs:{src:t}})])})),t._v(" "),i("el-card",{staticStyle:{"text-align":"left",margin:"2px auto"},attrs:{shadow:"never"}},[i("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[i("span",[t._v("文章列表")]),t._v(" "),i("el-button",{staticStyle:{float:"right",padding:"3px 0"},attrs:{type:"text"},on:{click:t.initUser}},[i("i",{staticClass:"el-icon-sort"})]),t._v(" "),t.search_key?i("el-button",{staticStyle:{float:"right",padding:"3px 0"},attrs:{type:"text"},on:{click:function(e){t.setFilters()}}},[t._v("重置条件\n          "),i("el-tag",{attrs:{type:"warning",size:"mini"}},[t._v(t._s(t.search_key))])],1):t._e()],1),t._v(" "),t._l(t.show_list,function(e){return i("el-card",{key:e,staticStyle:{"text-align":"left",margin:"10px auto"},attrs:{shadow:"never"}},[i("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[i("span",[i("el-button",{staticStyle:{color:"#000","font-size":"20px"},attrs:{type:"text"},on:{click:function(i){t.findArticle(e.key)}}},[i("i",{staticClass:"el-icon-tickets"}),t._v("\n          "+t._s(e.title)+"\n          ")])],1),t._v(" "),i("el-button",{staticStyle:{float:"right",padding:"10px 0"},attrs:{type:"text"},on:{click:function(i){t.findArticle(e.key)}}},[i("i",{staticClass:"el-icon-view"})])],1),t._v(" "),i("div",[i("el-button",{attrs:{size:"mini"}},[t._v(t._s(e.date))]),t._v(" "),i("el-button",{attrs:{size:"mini",type:"success"},on:{click:function(i){t.setFilters(e.type)}}},[t._v(t._s(e.typeName))]),t._v(" "),i("el-button",{attrs:{size:"mini",type:"info"},on:{click:function(i){t.setFilters(e.category)}}},[t._v(t._s(e.category))]),t._v(" "),i("el-button",{attrs:{size:"mini",type:"warning"}},[t._v(t._s(e.size))]),t._v(" "),i("el-button",{attrs:{size:"mini",type:"danger"}},[t._v(t._s(e.tag))])],1)])})],2),t._v(" "),i("el-card",{staticStyle:{"text-align":"left",margin:"2px auto"},attrs:{shadow:"never"}},[i("el-pagination",{attrs:{background:"",layout:"prev, pager, next",total:t.page_total,"page-size":t.page_size,"current-page":t.page_index},on:{"current-change":t.pageChange}})],1)],1),t._v(" "),i("div",{staticClass:"left_c"},[i("el-card",{staticStyle:{"text-align":"left",margin:"4px auto"},attrs:{shadow:"never"}},[i("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[i("span",[t._v("天气")])]),t._v(" "),i("iframe",{attrs:{height:"50",frameborder:"0",scrolling:"no",hspace:"0",src:"https://i.tianqi.com/index.php?c=code&id=12&icon=1&num=2&site=12"}})]),t._v(" "),i("el-card",{staticStyle:{"text-align":"left",margin:"10px auto"},attrs:{shadow:"never"}},[i("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[i("span",[t._v("搜索")])]),t._v(" "),i("el-input",{attrs:{placeholder:"请输入内容"},model:{value:t.search_key,callback:function(e){t.search_key=e},expression:"search_key"}},[i("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:function(e){t.filterList()}},slot:"append"}),t._v("|\n      ")],1)],1),t._v(" "),i("el-card",{staticStyle:{"text-align":"left",margin:"10px auto"},attrs:{shadow:"never"}},[i("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[i("span",[t._v("简介")])]),t._v(" "),i("div",[i("p",[t._v("做过很多个的博客了，发现自己做博客最大的问题就是，没服务器！虽然也会买一些云服务器，但是还是觉得好贵啊！")]),t._v(" "),i("p",[t._v("后来听说可以用github做博客，自己也折腾过hexo之类的东东，但始终用起来很不爽！毕竟是别人定制的东西，很多diy的地方都不是那么尽人意！")]),t._v(" "),i("p",[t._v("所以最后决定自己写一个，反正git的页面就是些静态页面呗！自己写个内容管理系统还不是手到擒来！后台用springboot很容易就搞定了，数据库在几番研究后使用了非常轻量的嵌入式数据库，h2！然后数据移植的问题也搞定了！用vue随意搭了个管理页面，写上几个模板，新鲜出炉的gitblog就做好了！")]),t._v(" "),i("p",[t._v("接下来，优化模板的样式，增加标签功能，把管理页面嵌入博客，加入评论！！！！")])]),t._v(" "),i("a",{attrs:{target:"_blank",href:"https://github.com/ro1992613/gitblog"}},[t._v("查看更多")])])],1)])},staticRenderFns:[]};var r=i("VU/8")(s,n,!1,function(t){i("7hmB")},"data-v-a4437f18",null);e.default=r.exports}});
//# sourceMappingURL=3.7a60e167ad3acc400c5c.js.map