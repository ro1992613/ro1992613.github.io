webpackJsonp([6],{Ocwf:function(t,e){},wJI9:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});a("n2nY");var i=new COS({SecretId:"AKIDNDEoAFsUFLL95otDNL5tGOK17PelmpQs",SecretKey:"Pq20vuqjaGn7DPPAg0A6nOllaS8alupB"}),n={data:function(){return{tdata:"",title:"",typeName:"",category:""}},methods:{to_public:function(){this.$router.back(-1)},to_private:function(){this.$router.push({path:"/view/private"})},initData:function(){var t=this,e=t.$route.query.key,a={Bucket:"cyp20190111-1251525641",Region:"ap-chengdu"};a.Key=e,e.indexOf("public/")>=0?(e=e.replace("public/",""),t.$data.typeName="公共"):e.indexOf("private/")>=0&&(e=e.replace("private/",""),t.$data.typeName="私有"),t.category=e.substring(0,e.indexOf("/")),t.$data.title=e.substring(e.indexOf("/")+1,e.length),i.getObject(a,function(e,a){e?console.log(e):(console.log(a),t.$data.tdata=a.Body)})}},computed:{},mounted:function(){this.initData()}},s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main"},[a("div",{staticClass:"right_c"},[a("el-card",{staticStyle:{"text-align":"left",margin:"2px auto"},attrs:{shadow:"never"}},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[a("i",{staticClass:"el-icon-document"}),t._v(t._s(t.title))]),t._v(" "),a("el-button",{staticStyle:{float:"right",padding:"3px 0"},attrs:{type:"text"},on:{click:function(e){t.to_public()}}},[t._v("返回")]),t._v(" "),a("br"),t._v(" "),a("el-tag",{attrs:{size:"mini",type:"success"}},[t._v(t._s(t.typeName))]),t._v(" "),a("el-tag",{attrs:{size:"mini",type:"info"}},[t._v(t._s(t.category))])],1),t._v(" "),a("div",{domProps:{innerHTML:t._s(t.tdata)}})])],1),t._v(" "),a("div",{staticClass:"left_c"},[a("el-card",{staticStyle:{"text-align":"left",margin:"4px auto"},attrs:{shadow:"never"}},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v("天气")])]),t._v(" "),a("iframe",{attrs:{height:"50",frameborder:"0",scrolling:"no",hspace:"0",src:"https://i.tianqi.com/index.php?c=code&id=12&icon=1&num=2&site=12"}})]),t._v(" "),a("el-card",{staticStyle:{"text-align":"left",margin:"10px auto"},attrs:{shadow:"never"}},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v("简介")])]),t._v(" "),a("div",[a("p",[t._v("\n               做过很多个的博客了，发现自己做博客最大的问题就是，没服务器！虽然也会买一些云服务器，但是还是觉得好贵啊！\n                ")]),t._v(" "),a("p",[t._v("\n                后来听说可以用github做博客，自己也折腾过hexo之类的东东，但始终用起来很不爽！毕竟是别人定制的东西，很多diy的地方都不是那么尽人意！\n                ")]),t._v(" "),a("p",[t._v("\n                所以最后决定自己写一个，反正git的页面就是些静态页面呗！自己写个内容管理系统还不是手到擒来！后台用springboot很容易就搞定了，数据库在几番研究后使用了非常轻量的嵌入式数据库，h2！然后数据移植的问题也搞定了！用vue随意搭了个管理页面，写上几个模板，新鲜出炉的gitblog就做好了！\n                ")]),t._v(" "),a("p",[t._v("\n                接下来，优化模板的样式，增加标签功能，把管理页面嵌入博客，加入评论！！！！\n                ")])]),t._v(" "),a("a",{attrs:{target:"_blank",href:"https://github.com/ro1992613/gitblog"}},[t._v("查看更多")])])],1)])},staticRenderFns:[]};var r=a("SZvu")(n,s,!1,function(t){a("Ocwf")},"data-v-139ad49c",null);e.default=r.exports}});
//# sourceMappingURL=6.111c8a95450f868f7ab7.js.map