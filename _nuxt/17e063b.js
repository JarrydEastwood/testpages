(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{401:function(t,n,e){var content=e(431);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(101).default)("80fa6022",content,!0,{sourceMap:!1})},430:function(t,n,e){"use strict";e(401)},431:function(t,n,e){var r=e(100)(!1);r.push([t.i,"article[data-v-f6a075f0]{max-width:600px;margin:0 auto}img[data-v-f6a075f0]{height:200px}p[data-v-f6a075f0]{text-align:left}",""]),t.exports=r},456:function(t,n,e){"use strict";e.r(n);e(4),e(62);var r=e(20),o=(e(77),{data:function(){return{mountain:{}}},fetch:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.$http.$get("https://api.nuxtjs.dev/mountains/".concat(t.$route.params.slug));case 2:t.mountain=n.sent;case 3:case"end":return n.stop()}}),n)})))()},methods:{goBack:function(){return this.$router.go(-1)}}}),c=(e(430),e(83)),component=Object(c.a)(o,(function(){var t=this,n=t._self._c;return n("article",[n("h1",[t._v(t._s(t.mountain.title))]),t._v(" "),t.$fetchState.pending?n("p",[n("span",{staticClass:"loading"})]):t.$fetchState.error?n("p",[t._v("Error while fetching mountains 🤬")]):t._e(),t._v(" "),n("section",[n("img",{attrs:{src:t.mountain.image,alt:t.mountain.title}}),t._v(" "),n("p",[t._v(t._s(t.mountain.description))])]),t._v(" "),n("button",{on:{click:t.goBack}},[t._v("Back")])])}),[],!1,null,"f6a075f0",null);n.default=component.exports}}]);