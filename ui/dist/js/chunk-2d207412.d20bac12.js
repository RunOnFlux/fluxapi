(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d207412"],{a06c:function(e,t,a){"use strict";a.r(t);var n,o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"row"},[e._m(0),a("p",{staticClass:"category"}),a("div",[a("loading",{attrs:{active:e.isLoading,"can-cancel":!1},on:{"update:active":function(t){e.isLoading=t}}})],1),a("div",{staticClass:"col-12"},[a("card",[a("div",[a("div",{staticClass:"col-12 d-flex justify-content-center justify-content-sm-between flex-wrap"},[a("el-select",{staticClass:"select-default mb-3",staticStyle:{width:"200px"},attrs:{placeholder:"Per page"},model:{value:e.pagination.perPage,callback:function(t){e.$set(e.pagination,"perPage",t)},expression:"pagination.perPage"}},e._l(e.pagination.perPageOptions,(function(e){return a("el-option",{key:e,staticClass:"select-default",attrs:{label:e,value:e}})})),1),a("el-input",{staticClass:"mb-3",staticStyle:{width:"200px"},attrs:{type:"search",placeholder:"Search IP","aria-controls":"datatables"},model:{value:e.searchQuery,callback:function(t){e.searchQuery=t},expression:"searchQuery"}})],1),a("div",{staticClass:"col-sm-12"},[a("el-table",{staticStyle:{width:"100%"},attrs:{stripe:"",data:e.queriedData,border:""}},[a("el-table-column",{attrs:{type:"expand"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("p",[a("b",[e._v("Flux Info:")])]),a("p",[a("b",[e._v("Zel ID:")]),e._v(" "+e._s(t.row.flux.zelid)+" ")]),a("p",[a("b",[e._v("Crux ID:")]),e._v(" "+e._s(t.row.flux.cruxid))]),a("p",[a("b",[e._v("DOS State:")]),e._v(" "+e._s(t.row.flux.dos.dosState))]),a("p",[a("b",[e._v("DOS Message:")]),e._v(" "+e._s(t.row.flux.dos.dosMessage))]),a("br"),a("p",[a("b",[e._v("Daemon Info:")])]),a("p",[a("b",[e._v("Protocol Version:")]),e._v(" "+e._s(t.row.daemon.info.protocolversion)+" ")]),a("p",[a("b",[e._v("Wallet Version:")]),e._v(" "+e._s(t.row.daemon.info.walletversion))]),a("p",[a("b",[e._v("Blocks:")]),e._v(" "+e._s(t.row.daemon.info.blocks))]),a("p",[a("b",[e._v("Time Offset:")]),e._v(" "+e._s(t.row.daemon.info.timeoffset))]),a("p",[a("b",[e._v("Connections:")]),e._v(" "+e._s(t.row.daemon.info.connections))]),a("p",[a("b",[e._v("Proxy:")]),e._v(" "+e._s(t.row.daemon.info.proxy))]),a("p",[a("b",[e._v("Difficulty:")]),e._v(" "+e._s(t.row.daemon.info.difficulty))]),a("p",[a("b",[e._v("Testnet:")]),e._v(" "+e._s(t.row.daemon.info.testnet))]),a("p",[a("b",[e._v("Key Pool Old Test:")]),e._v(" "+e._s(t.row.daemon.info.keypoololdest))]),a("p",[a("b",[e._v("Key Pool Size:")]),e._v(" "+e._s(t.row.daemon.info.keypoolsize))]),a("p",[a("b",[e._v("Pay Txn Fee:")]),e._v(" "+e._s(t.row.daemon.info.paytxfee))]),a("p",[a("b",[e._v("Relay Fee:")]),e._v(" "+e._s(t.row.daemon.info.relayfee))]),a("p",[a("b",[e._v("Errors:")]),e._v(" "+e._s(t.row.daemon.info.errors))]),a("br"),a("p",[a("b",[e._v("Benchmark Info:")])]),a("p",[a("b",[e._v("RPC Port:")]),e._v(" "+e._s(t.row.benchmark.info.rpcport)+" ")]),a("p",[a("b",[e._v("Architecture:")]),e._v(" "+e._s(t.row.benchmark.bench.architecture))]),a("p",[a("b",[e._v("Arm Board:")]),e._v(" "+e._s(t.row.benchmark.bench.armboard))]),a("p",[a("b",[e._v("Time:")]),e._v(" "+e._s(t.row.benchmark.bench.time))]),a("p",[a("b",[e._v("Converted Time:")]),e._v(" "+e._s(new Date(1e3*parseInt(t.row.benchmark.bench.time)).toLocaleDateString()+" "+new Date(1e3*parseInt(t.row.benchmark.bench.time)).toLocaleTimeString()))]),a("p",[a("b",[e._v("Real Cores:")]),e._v(" "+e._s(t.row.benchmark.bench.real_cores))]),a("p",[a("b",[e._v("Cores:")]),e._v(" "+e._s(t.row.benchmark.bench.cores))]),a("p",[a("b",[e._v("RAM:")]),e._v(" "+e._s(t.row.benchmark.bench.ram))]),a("p",[a("b",[e._v("HDD:")]),e._v(" "+e._s(t.row.benchmark.bench.hdd))]),a("p",[a("b",[e._v("Total Storage:")]),e._v(" "+e._s(t.row.benchmark.bench.totalstorage))]),a("p",[a("b",[e._v("Disk:")]),e._v(" "+e._s(t.row.benchmark.bench.disksinfo.disk))]),a("p",[a("b",[e._v("Disk Size:")]),e._v(" "+e._s(t.row.benchmark.bench.disksinfo.size))]),a("p",[a("b",[e._v("Disk Write Speed:")]),e._v(" "+e._s(t.row.benchmark.bench.disksinfo.writespeed))]),a("p",[a("b",[e._v("EPS:")]),e._v(" "+e._s(t.row.benchmark.bench.eps))]),a("p",[a("b",[e._v("Errors:")]),e._v(" "+e._s(t.row.benchmark.bench.error))])]}}])}),e._l(e.tableColumns,(function(e){return a("el-table-column",{key:e.label,attrs:{"min-width":e.minWidth,prop:e.prop,label:e.label,sortable:""}})}))],2)],1)]),a("div",{staticClass:"col-12 d-flex justify-content-center justify-content-sm-between flex-wrap",attrs:{slot:"footer"},slot:"footer"},[a("div",{},[a("p",{staticClass:"card-category"},[e._v("Showing "+e._s(e.from+1)+" to "+e._s(e.to)+" of "+e._s(e.total)+" entries")])]),a("l-pagination",{staticClass:"pagination-no-border",attrs:{"per-page":e.pagination.perPage,total:e.pagination.total},model:{value:e.pagination.currentPage,callback:function(t){e.$set(e.pagination,"currentPage",t)},expression:"pagination.currentPage"}})],1)])],1)])},r=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"col-md-12"},[a("h2",{staticClass:"title"},[e._v("Version")])])}],i=a("ade3"),s=(a("5466"),a("450d"),a("ecdf")),c=a.n(s),l=(a("38a0"),a("ad41")),p=a.n(l),b=(a("6611"),a("e772")),_=a.n(b),d=(a("1f1a"),a("4e4b")),h=a.n(d),v=(a("b0c0"),a("fb6a"),a("ac1f"),a("841c"),a("b64b"),a("2af9")),f=a("6062"),u=a("bc3a"),m=a.n(u),g=a("9062"),w=a.n(g),k=(a("e40d"),{components:(n={LPagination:v["c"]},Object(i["a"])(n,h.a.name,h.a),Object(i["a"])(n,_.a.name,_.a),Object(i["a"])(n,p.a.name,p.a),Object(i["a"])(n,c.a.name,c.a),Object(i["a"])(n,"Loading",w.a),n),data:function(){return{pagination:{perPage:5,currentPage:1,perPageOptions:[5,10,25,50,100,200,500,1e3,2e3,5e3,1e4],total:0},searchQuery:"",propsToSearch:["ip"],tableColumns:[{prop:"ip",label:"IP Address",minWidth:200},{prop:"daemon.info.version",label:"Daemon Version",minWidth:250},{prop:"benchmark.info.version",label:"Benchmark Version",minWidth:100},{prop:"flux.version",label:"Flux Version",minWidth:120}],tableData:[],fuseSearch:null,isLoading:!1}},computed:{pagedData:function(){return this.tableData.slice(this.from,this.to)},queriedData:function(){var e;if(""!==this.searchQuery){var t=[];e=this.fuseSearch.search("=".concat(this.searchQuery));for(var a=0;a<Object.keys(e).length;a++)t.push(e[a].item);e=t,this.paginationTotal(e.length)}else this.paginationTotal(this.tableData.length),e=this.tableData;return e.slice(this.from,this.to)},to:function(){var e=this.from+this.pagination.perPage;return this.total<e&&(e=this.total),e},from:function(){return this.pagination.perPage*(this.pagination.currentPage-1)},total:function(){return this.paginationTotal(this.tableData.length),this.tableData.length}},methods:{paginationTotal:function(e){this.pagination.total=e}},mounted:function(){var e=this;this.isLoading=!0,m.a.get("https://stats.runonflux.io/fluxinfo?projection=ip,daemon,benchmark,flux").then((function(t){e.tableData=t.data.data,e.fuseSearch=new f["a"](e.tableData,{useExtendedSearch:!0,keys:["ip"]}),e.isLoading=!1}))}}),y=k,x=a("2877"),D=Object(x["a"])(y,o,r,!1,null,null,null);t["default"]=D.exports}}]);
//# sourceMappingURL=chunk-2d207412.d20bac12.js.map