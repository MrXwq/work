(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-438ab900"],{"37d0":function(t,a,s){"use strict";var e=s("9d30"),i=s.n(e);i.a},"7a4b":function(t,a,s){},"9d30":function(t,a,s){},bcda:function(t,a,s){"use strict";var e=s("7a4b"),i=s.n(e);i.a},e690:function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"m-1"},[s("div",{staticClass:"top d-flex jc-around bg-white pt-3 pb-1"},[s("router-link",{staticClass:"advanced px-6 py-6 text-center",class:{active:t.flag1,"no-active":!t.flag1},attrs:{tag:"div",to:"/vip/version/"+this.id},nativeOn:{click:function(a){return t.changeColor(a)}}},[s("h2",[t._v("高级版")]),s("span",{staticClass:"fs-sss smallFont",class:{"fs-red-4":t.flag1,"fs-black-2":!t.flag1}},[t._v("\n      适合独立摄影师\n      ")])]),s("router-link",{staticClass:"tailor-made px-6 py-6 text-center",class:{active:t.flag2,"no-active":!t.flag2},attrs:{tag:"div",to:"/vip/version/"+this.id1},nativeOn:{click:function(a){return t.changeColor(a)}}},[s("h2",[t._v("定制版")]),s("span",{staticClass:"fs-sss smallFont",class:{"fs-red-4":t.flag2,"fs-black-2":!t.flag2}},[t._v("\n            适合小型工作室\n      ")])])],1),s("Alert",{directives:[{name:"show",rawName:"v-show",value:t.flag11,expression:"flag11"}]},[s("div",{staticClass:"alert-content p-5",on:{closee:t.close1}},[s("h2",[t._v("高级版-标题1")]),s("div",{staticClass:"fs-black-7 fs-ss pt-4"},[t._v("高级版正文高级版正文高级版正文高级版正文高级版正文高级版正文高级版正文高级版正文高级版正文高级版正文高级版正文高级版正文高级版正文高级版正文")])])]),s("Alert",{directives:[{name:"show",rawName:"v-show",value:t.flag22,expression:"flag22"}],on:{closee:t.close2}},[s("div",{staticClass:"alert-content p-5"},[s("h2",[t._v("定制版-标题1")]),s("div",{staticClass:"fs-black-7 fs-ss pt-4"},[t._v("定制版正文定制版正文定制版正文定制版正文定制版正文定制版正文定制版正文定制版正文定制版正文定制版正文定制版正文定制版正文定制版正文定制版正文")])])]),s("router-view",{attrs:{flag:t.flag1}})],1)},i=[],l=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{attrs:{id:"alert"},on:{click:function(a){return t.$emit("closee")}}},[t._t("default"),t._m(0)],2)},n=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"mt-5"},[s("i",{staticClass:"iconfont icon-close- fs-white",staticStyle:{"font-size":"2rem"}})])}],c={},o=c,r=(s("bcda"),s("2877")),f=Object(r["a"])(o,l,n,!1,null,null,null),d=f.exports,u={data:function(){return{flag1:!0,flag2:!1,flag11:!0,flag22:!1,id:"advanced",id1:"customize"}},components:{Alert:d},methods:{changeColor:function(){"advanced"===this.$route.params.id?(this.flag1=!0,this.flag2=!1,localStorage.getItem("advanced")===this.id&&(this.flag11=!1)):"customize"===this.$route.params.id&&(this.flag1=!1,this.flag2=!0,localStorage.getItem("customize")!==this.id1?(localStorage.setItem("customize",this.id1),this.flag22=!0):this.flag22=!1)},close1:function(){this.flag11=!1},close2:function(){this.flag22=!1}},created:function(){this.changeColor(),localStorage.getItem("advanced")!==this.id&&localStorage.setItem("advanced",this.id)}},v=u,g=(s("37d0"),Object(r["a"])(v,e,i,!1,null,null,null));a["default"]=g.exports}}]);
//# sourceMappingURL=chunk-438ab900.56fe1104.js.map