webpackJsonp([7],{"0JcG":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var l={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",staticStyle:{"text-align":"left"},attrs:{slot:"header"},slot:"header"},[a("span",[t._v("博客列表")]),t._v(" "),a("el-button",{staticStyle:{float:"right",padding:"3px 0"},attrs:{icon:"el-icon-edit",type:"danger"},on:{click:function(e){t.createClick()}}},[t._v("开始生成")])],1),t._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,stripe:""}},[a("el-table-column",{attrs:{align:"center",prop:"ID",label:"id"}}),t._v(" "),a("el-table-column",{attrs:{align:"center",prop:"COLLECTION_NAME",label:"合集"}}),t._v(" "),a("el-table-column",{attrs:{align:"center",prop:"CREATE_TIME",label:"日期"}}),t._v(" "),a("el-table-column",{attrs:{align:"center",prop:"TITLE",label:"标题"}}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"操作",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){t.handleClick(e.row)}}},[t._v("查看")]),t._v(" "),a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){t.deleteClick(e.row)}}},[t._v("删除")])]}}])})],1)],1)},staticRenderFns:[]};var n=a("SZvu")({data:function(){return{tableData:[]}},mounted:function(){this.$http.post(this.baseUrl+"/api/blog/list",{}).then(function(t){this.$data.tableData=t.data})},methods:{handleClick:function(t){this.$router.push({path:"/menu/preview",query:{id:t.ID}})},deleteClick:function(t){this.$http.post(this.baseUrl+"/api/blog/delete",{id:t.ID}).then(function(t){this.$data.tableData=t.data})},createClick:function(){this.$http.post(this.baseUrl+"/api/blog/create",{}).then(function(t){this.$message("完成生成工作")})}}},l,!1,function(t){a("W2hN")},null,null);e.default=n.exports},W2hN:function(t,e){}});
//# sourceMappingURL=7.3bfb63584f9ac45c64d6.js.map