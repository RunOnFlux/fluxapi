"use strict";(self["webpackChunkfluxstats"]=self["webpackChunkfluxstats"]||[]).push([[683],{3683:function(t,a,e){e.r(a),e.d(a,{default:function(){return w}});var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"row"},[t._m(0),e("p",{staticClass:"category"}),e("div",[e("loading",{attrs:{active:t.isLoading,"can-cancel":!0},on:{"update:active":function(a){t.isLoading=a}}})],1),e("div",{staticClass:"col-12"},[e("card",[e("div",[e("div",{staticClass:"col-12 d-flex justify-content-center justify-content-sm-between flex-wrap"},[e("el-select",{staticClass:"select-default mb-3",staticStyle:{width:"200px"},attrs:{placeholder:"Per page"},model:{value:t.pagination.perPage,callback:function(a){t.$set(t.pagination,"perPage",a)},expression:"pagination.perPage"}},t._l(t.pagination.perPageOptions,(function(t){return e("el-option",{key:t,staticClass:"select-default",attrs:{label:t,value:t}})})),1),e("el-input",{staticClass:"mb-3",staticStyle:{width:"200px"},attrs:{type:"search",placeholder:"Search records","aria-controls":"datatables"},model:{value:t.searchQuery,callback:function(a){t.searchQuery=a},expression:"searchQuery"}})],1),e("div",{staticClass:"col-sm-12"},[e("el-table",{staticStyle:{width:"100%"},attrs:{stripe:"",data:t.queriedData,border:""}},t._l(t.tableColumns,(function(t){return e("el-table-column",{key:t.label,attrs:{"min-width":t.minWidth,prop:t.prop,label:t.label}})})),1)],1)]),e("div",{staticClass:"col-12 d-flex justify-content-center justify-content-sm-between flex-wrap",attrs:{slot:"footer"},slot:"footer"},[e("div",{},[e("p",{staticClass:"card-category"},[t._v("Showing "+t._s(t.from+1)+" to "+t._s(t.to)+" of "+t._s(t.total)+" entries")])]),e("l-pagination",{staticClass:"pagination-no-border",attrs:{"per-page":t.pagination.perPage,total:t.pagination.total},model:{value:t.pagination.currentPage,callback:function(a){t.$set(t.pagination,"currentPage",a)},expression:"pagination.currentPage"}})],1)])],1)])},n=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"col-md-12"},[e("h2",{staticClass:"title"},[t._v("Nodes Version")])])}],s=e(5034),l=e.n(s),r=e(3364),o=e.n(r),c=e(5614),p=e.n(c),u=e(7186),h=e.n(u),d=e(6160),g=(e(2047),e(4221)),f=e(9669),m=e.n(f),b=e(7398),v=e.n(b),y={components:{LPagination:d.tl,[h().name]:h(),[p().name]:p(),[o().name]:o(),[l().name]:l(),Loading:v()},data(){return{pagination:{perPage:5,currentPage:1,perPageOptions:[5,10,25,50],total:0},searchQuery:"",propsToSearch:["ip"],tableColumns:[{prop:"ip",label:"IP Address",minWidth:200},{prop:"daemon",label:"Daemon",minWidth:250},{prop:"benchmark",label:"Benchmark",minWidth:100},{prop:"flux",label:"Flux Version",minWidth:120}],tableData:[],fuseSearch:null,isLoading:!1}},computed:{pagedData(){return this.tableData.slice(this.from,this.to)},queriedData(){let t=this.tableData;return""!==this.searchQuery&&(t=this.fuseSearch.search(this.searchQuery),this.paginationTotal(t.length)),t.slice(this.from,this.to)},to(){let t=this.from+this.pagination.perPage;return this.total<t&&(t=this.total),t},from(){return this.pagination.perPage*(this.pagination.currentPage-1)},total(){return this.paginationTotal(this.tableData.length),this.tableData.length}},methods:{paginationTotal(t){this.pagination.total=t}},mounted(){this.isLoading=!0,m().get("https://stats.runonflux.io/fluxversions").then((t=>{this.isLoading=!1,this.tableData=t.data.data,this.fuseSearch=new g.Z(this.tableData,{keys:["ip"]})}))}},C=y,P=e(1001),x=(0,P.Z)(C,i,n,!1,null,null,null),w=x.exports},2047:function(){}}]);
//# sourceMappingURL=683.0fc2351e.js.map