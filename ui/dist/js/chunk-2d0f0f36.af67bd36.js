(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0f0f36"],{"9f0c":function(t,a,e){"use strict";e.r(a);var n,i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"row"},[t._m(0),e("p",{staticClass:"category"}),e("div",[e("loading",{attrs:{active:t.isLoading,"can-cancel":!1},on:{"update:active":function(a){t.isLoading=a}}})],1),e("div",{staticClass:"col-12"},[e("card",[e("div",[e("div",{staticClass:"col-12 d-flex justify-content-center justify-content-sm-between flex-wrap"},[e("el-select",{staticClass:"select-default mb-3",staticStyle:{width:"200px"},attrs:{placeholder:"Per page"},model:{value:t.pagination.perPage,callback:function(a){t.$set(t.pagination,"perPage",a)},expression:"pagination.perPage"}},t._l(t.pagination.perPageOptions,(function(t){return e("el-option",{key:t,staticClass:"select-default",attrs:{label:t,value:t}})})),1),e("el-input",{staticClass:"mb-3",staticStyle:{width:"200px"},attrs:{type:"search",placeholder:"Search IP","aria-controls":"datatables"},model:{value:t.searchQuery,callback:function(a){t.searchQuery=a},expression:"searchQuery"}})],1),e("div",{staticClass:"col-sm-12"},[e("el-table",{staticStyle:{width:"100%"},attrs:{stripe:"",data:t.queriedData,border:""}},[e("el-table-column",{attrs:{type:"expand"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("p",[e("b",[t._v("In:")])]),e("ul",t._l(a.row.connectionsIn,(function(a,n){return e("li",{key:n},[t._v(t._s(a))])})),0),e("p",[e("b",[t._v("Out:")])]),e("ul",t._l(a.row.connectionsOut,(function(a,n){return e("li",{key:n},[t._v(t._s(a))])})),0)]}}])}),t._l(t.tableColumns,(function(t){return e("el-table-column",{key:t.label,attrs:{"min-width":t.minWidth,prop:t.prop,label:t.label,sortable:""}})}))],2)],1)]),e("div",{staticClass:"col-12 d-flex justify-content-center justify-content-sm-between flex-wrap",attrs:{slot:"footer"},slot:"footer"},[e("div",{},[e("p",{staticClass:"card-category"},[t._v("Showing "+t._s(t.from+1)+" to "+t._s(t.to)+" of "+t._s(t.total)+" entries")])]),e("l-pagination",{staticClass:"pagination-no-border",attrs:{"per-page":t.pagination.perPage,total:t.pagination.total},model:{value:t.pagination.currentPage,callback:function(a){t.$set(t.pagination,"currentPage",a)},expression:"pagination.currentPage"}})],1)])],1)])},s=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"col-md-12"},[e("h2",{staticClass:"title"},[t._v("Connection")])])}],o=e("ade3"),l=(e("5466"),e("450d"),e("ecdf")),r=e.n(l),c=(e("38a0"),e("ad41")),u=e.n(c),p=(e("6611"),e("e772")),d=e.n(p),h=(e("1f1a"),e("4e4b")),f=e.n(h),g=(e("b0c0"),e("fb6a"),e("ac1f"),e("841c"),e("b64b"),e("2af9")),b=e("6062"),m=e("bc3a"),v=e.n(m),y=e("9062"),_=e.n(y),w=(e("e40d"),{components:(n={LPagination:g["c"]},Object(o["a"])(n,f.a.name,f.a),Object(o["a"])(n,d.a.name,d.a),Object(o["a"])(n,u.a.name,u.a),Object(o["a"])(n,r.a.name,r.a),Object(o["a"])(n,"Loading",_.a),n),data:function(){return{pagination:{perPage:5,currentPage:1,perPageOptions:[5,10,25,50,100,200,500,1e3,2e3,5e3,1e4],total:0},searchQuery:"",propsToSearch:["ip"],tableColumns:[{prop:"ip",label:"IP Address",minWidth:200}],tableData:[],fuseSearch:null,isLoading:!1}},computed:{pagedData:function(){return this.tableData.slice(this.from,this.to)},queriedData:function(){var t;if(""!==this.searchQuery){var a=[];t=this.fuseSearch.search("=".concat(this.searchQuery));for(var e=0;e<Object.keys(t).length;e++)a.push(t[e].item);t=a,this.paginationTotal(t.length)}else this.paginationTotal(this.tableData.length),t=this.tableData;return t.slice(this.from,this.to)},to:function(){var t=this.from+this.pagination.perPage;return this.total<t&&(t=this.total),t},from:function(){return this.pagination.perPage*(this.pagination.currentPage-1)},total:function(){return this.paginationTotal(this.tableData.length),this.tableData.length}},methods:{paginationTotal:function(t){this.pagination.total=t}},mounted:function(){var t=this;this.isLoading=!0,v.a.get("https://stats.runonflux.io/fluxinfo?projection=ip,connectionsOut,connectionsIn").then((function(a){t.tableData=a.data.data,t.fuseSearch=new b["a"](t.tableData,{useExtendedSearch:!0,keys:["ip"]}),t.isLoading=!1}))}}),P=w,C=e("2877"),x=Object(C["a"])(P,i,s,!1,null,null,null);a["default"]=x.exports}}]);
//# sourceMappingURL=chunk-2d0f0f36.af67bd36.js.map