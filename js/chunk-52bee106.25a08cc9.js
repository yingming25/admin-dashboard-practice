(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-52bee106"],{2947:function(t,e,r){"use strict";r.r(e);var s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"my-5 row justify-content-center"},[r("form",{staticClass:"col-md-6",on:{submit:function(e){return e.preventDefault(),t.payOrder(e)}}},[r("table",{staticClass:"table"},[t._m(0),r("tbody",t._l(t.order.products,function(e){return r("tr",{key:e.id},[r("td",{staticClass:"align-middle"},[t._v(t._s(e.product.title))]),r("td",{staticClass:"align-middle"},[t._v(t._s(e.qty)+"/"+t._s(e.product.unit))]),r("td",{staticClass:"align-middle text-right"},[t._v(t._s(t._f("currency")(t._f("toFixed")(e.final_total))))])])}),0),r("tfoot",[r("tr",[r("td",{staticClass:"text-right",attrs:{colspan:"2"}},[t._v("總計")]),r("td",{staticClass:"text-right"},[t._v(t._s(t._f("currency")(t._f("toFixed")(t.order.total))))])])])]),r("table",{staticClass:"table"},[r("tbody",[r("tr",[r("th",{attrs:{width:"100"}},[t._v("Email")]),r("td",[t._v(t._s(t.order.user.email))])]),r("tr",[r("th",[t._v("姓名")]),r("td",[t._v(t._s(t.order.user.name))])]),r("tr",[r("th",[t._v("收件人電話")]),r("td",[t._v(t._s(t.order.user.tel))])]),r("tr",[r("th",[t._v("收件人地址")]),r("td",[t._v(t._s(t.order.user.address))])]),r("tr",[r("th",[t._v("付款狀態")]),r("td",[t.order.is_paid?r("span",{staticClass:"text-success"},[t._v("付款完成")]):r("span",[t._v("尚未付款")])])])])]),r("div",{staticClass:"text-right"},[t.order.is_paid?t._e():r("router-link",{staticClass:"btn btn-primary mr-3",attrs:{to:"/custom-orders"}},[t._v("取消")]),t.order.is_paid?t._e():r("button",{staticClass:"btn btn-danger"},[t._v("確認付款去")])],1)])])])},n=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("thead",[r("th",[t._v("品名")]),r("th",[t._v("數量")]),r("th",[t._v("單價")])])}],i=r("be94"),o=r("2f62"),a={filters:{toFixed:function(t){return t.toFixed(0)}},computed:Object(i["a"])({},Object(o["b"])("ordersModule",["order"])),methods:{getOrder:function(){this.$store.dispatch("ordersModule/getOrder",this.$route.params.orderId)},payOrder:function(){this.$store.dispatch("ordersModule/payOrder",this.$route.params.orderId)}},created:function(){var t=this;t.getOrder()}},d=a,c=r("2877"),u=Object(c["a"])(d,s,n,!1,null,null,null);u.options.__file="CustomCheckout.vue";e["default"]=u.exports},be94:function(t,e,r){"use strict";function s(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function n(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable}))),n.forEach(function(e){s(t,e,r[e])})}return t}r.d(e,"a",function(){return n})}}]);
//# sourceMappingURL=chunk-52bee106.25a08cc9.js.map