(window.webpackJsonp=window.webpackJsonp||[]).push([[16,14],{384:function(t,n,e){var content=e(387);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(101).default)("71f5f012",content,!0,{sourceMap:!1})},385:function(t,n,e){t.exports=e.p+"img/cmlogo.0a87f30.png"},386:function(t,n,e){"use strict";e(384)},387:function(t,n,e){var r=e(100)(!1);r.push([t.i,"@import url(http://fonts.cdnfonts.com/css/futura-std-4);"]),r.push([t.i,'.content[data-v-206081dc]{margin:5vh auto;max-width:90vw;width:90vw;background-color:hsla(0,0%,100%,.3);box-shadow:0 0 80px hsla(0,0%,100%,.7)}.cmlogo[data-v-206081dc]{text-decoration:none;font-family:"Futura Std",sans-serif;font-weight:600;color:#000;margin:auto;padding-left:1vw;font-size:larger}.page[data-v-206081dc]{max-width:90vw;width:90vw;margin:0 auto;scroll-behavior:smooth;word-wrap:normal}.about img[data-v-206081dc]{max-width:25vw}.headWrapper[data-v-206081dc]{max-width:90vw;margin:0 auto}.navWrapper[data-v-206081dc]{max-width:50vw;margin:auto}.siteNav[data-v-206081dc]{padding:2vh 0}.loading[data-v-206081dc]{display:inline-block;width:20vw;height:20vw;border-radius:50%;border:2vw solid rgba(#fcc58a);border-top-color:#158876;-webkit-animation:spin-206081dc 1s ease-in-out infinite;animation:spin-206081dc 1s ease-in-out infinite}@-webkit-keyframes spin-206081dc{to{-webkit-transform:rotate(1turn)}}@keyframes spin-206081dc{to{-webkit-transform:rotate(1turn)}}.clip-animation img[data-v-206081dc]{-webkit-clip-path:circle(11vw at center);clip-path:circle(11vw at center);transition:cubic-bezier(.175,.885,.32,1.275);animation:clip-206081dc 2s infinite alternate-reverse}@-webkit-keyframes clip-206081dc{0%{-webkit-clip-path:circle(5vw at center);clip-path:circle(5vw at center)}50%{-webkit-clip-path:circle(10vw at center);clip-path:circle(10vw at center)}to{-webkit-clip-path:circle(13vw at center);clip-path:circle(13vw at center)}}@keyframes clip-206081dc{0%{-webkit-clip-path:circle(5vw at center);clip-path:circle(5vw at center)}50%{-webkit-clip-path:circle(10vw at center);clip-path:circle(10vw at center)}to{-webkit-clip-path:circle(13vw at center);clip-path:circle(13vw at center)}}',""]),t.exports=r},388:function(t,n,e){"use strict";e.r(n);var r=[function(){var t=this._self._c;return t("span",{staticClass:"navbar-brand"},[t("img",{staticClass:"d-inline-block align-text-top",attrs:{src:e(385),alt:"",width:"150",height:"150"}})])}],c=(e(386),e(83)),component=Object(c.a)({},(function(){var t=this,n=t._self._c;return n("nav",{staticClass:"navbar navbar-light headWrapper"},[n("div",{staticClass:"d-flex justify-content-start"},[t._m(0),t._v(" "),n("NuxtLink",{staticClass:"cmlogo siteNav d-inline-block flex-start",attrs:{to:"/"}},[t._v("\n        Canberra Modern\n      ")])],1),t._v(" "),n("div",{staticClass:"d-flex navWrapper justify-content-end"},[n("ul",{staticClass:"nav"},[n("li",{staticClass:"nav-item"},[n("NuxtLink",{staticClass:"btn btn-outline-dark m-2",attrs:{to:"/"}},[t._v("\n            Home\n          ")])],1),t._v(" "),n("li",{staticClass:"nav-item"},[n("NuxtLink",{staticClass:"btn btn-outline-dark m-2",attrs:{to:"/about"}},[t._v("\n          About\n        ")])],1),t._v(" "),n("li",{staticClass:"nav-item"},[n("NuxtLink",{staticClass:"btn btn-outline-dark m-2",attrs:{to:"/events"}},[t._v("\n          Events\n        ")])],1),t._v(" "),n("li",{staticClass:"nav-item"},[n("NuxtLink",{staticClass:"btn btn-outline-dark m-2",attrs:{to:"/links"}},[t._v("\n          Links\n        ")])],1),t._v(" "),n("li",{staticClass:"nav-item"},[n("NuxtLink",{staticClass:"btn btn-outline-dark m-2",attrs:{to:"/partners"}},[t._v("\n          Partners\n        ")])],1),t._v(" "),n("li",{staticClass:"nav-item"},[n("NuxtLink",{staticClass:"btn btn-outline-dark m-2",attrs:{to:"/buildings"}},[t._v("\n          Canberra's Modern\n        ")])],1),t._v(" "),n("li",{staticClass:"nav-item"},[n("NuxtLink",{staticClass:"btn btn-outline-dark m-2",attrs:{to:"/videos"}},[t._v("\n          Videos\n        ")])],1)])])])}),r,!1,null,"206081dc",null);n.default=component.exports},460:function(t,n,e){"use strict";e.r(n);var r=e(20),c=(e(77),e(1),{asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function n(){var e;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t.params,n.next=3,fetch("http://cm.beneb.com/wp-json/wp/v2/pages/?slug=about").then((function(t){if(t.ok)return t.json();throw new Error(t.status)}));case 3:return e=n.sent,n.abrupt("return",{page:e});case 5:case"end":return n.stop()}}),n)})))()}}),l=e(83),component=Object(l.a)(c,(function(){var t=this,n=t._self._c;return n("div",{staticClass:"container"},[n("h2",[t._v(t._s(t.$route.params.slug))]),t._v(" "),n("h3",[t._v("Filename: pages/_pages.vue")]),t._v(" "),n("SiteNavigation"),t._v(" "),n("div",{staticClass:"page"},[n("pre",[t._v(t._s(t.$data))])])],1)}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{SiteNavigation:e(388).default})}}]);