(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{412:function(t,e,n){"use strict";n.r(e);var r=n(20),c=(n(77),n(1),n(41),{data:function(){return{events:[]}},fetch:function(t){function e(){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://cm.beneb.com/wp-json/wp/v2/events/?per_page=100").then((function(t){return t.json()}));case 2:for(n=e.sent,r=[],i=0;i<n.length;i++)"2020","2020"==n[i].acf.year&&r.push(n[i]);t.events=r;case 6:case"end":return e.stop()}}),e)})))()}))}),o=c,f=n(83),component=Object(f.a)(o,(function(){var t=this,e=t._self._c;return e("div",{},[t.$fetchState.pending?e("p",[e("span",{staticClass:"loading"})]):t.$fetchState.error?e("p",[t._v("Error while fetching events")]):e("ul",{staticClass:"list-group"},t._l(t.events,(function(n){return e("li",{key:n.id,staticClass:"list-group-item"},[e("NuxtLink",{attrs:{to:"/events/"+n.slug}},[t._v("\n\t\t\t\t"+t._s(n.title.rendered)+"\n\t\t\t")]),t._v(" "),t._v("\n\t\t\t: "+t._s(n.acf.year)+"\n\t\t")],1)})),0)])}),[],!1,null,null,null);e.default=component.exports}}]);