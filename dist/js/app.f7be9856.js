(function(t){function e(e){for(var o,s,c=e[0],i=e[1],u=e[2],f=0,m=[];f<c.length;f++)s=c[f],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&m.push(a[s][0]),a[s]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(t[o]=i[o]);l&&l(e);while(m.length)m.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],o=!0,c=1;c<n.length;c++){var i=n[c];0!==a[i]&&(o=!1)}o&&(r.splice(e--,1),t=s(s.s=n[0]))}return t}var o={},a={app:0},r=[];function s(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=o,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)s.d(n,o,function(e){return t[e]}.bind(null,o));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var l=i;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0ba8":function(t,e,n){},"3c02":function(t,e,n){},5026:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},r=[],s=(n("5c0b"),n("2877")),c={},i=Object(s["a"])(c,a,r,!1,null,null,null),u=i.exports,l=n("8c4f"),f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"login-container"},[n("div",{staticClass:"login-from"},[n("h2",[t._v("集运后台管理系统")]),n("el-form",{ref:"form",attrs:{rules:t.rules,model:t.form,"label-width":"90px"}},[n("el-form-item",{attrs:{label:"账号",prop:"name"}},[n("el-input",{attrs:{placeholder:"账号"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),n("el-form-item",{attrs:{label:"密码",prop:"pass"}},[n("el-input",{attrs:{type:"password",placeholder:"密码"},model:{value:t.form.pass,callback:function(e){t.$set(t.form,"pass",e)},expression:"form.pass"}})],1),n("el-form-item",[n("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.submitForm("form")}}},[t._v("登录")])],1)],1)],1)])},m=[],p=(n("b0c0"),n("bc3a")),d=n.n(p);d.a.create({bseURL:"/  dev-api",timeout:5e3});var h=d.a,v={login:function(t,e){return h({url:"/user/login",method:"post",data:{username:t,userpass:e}})},getUserInfo:function(){return h({url:"/user/info"})}},b={name:"component_name",components:{},props:{attr_name:{type:Object,required:!1,default:function(){return{}}}},data:function(){return{form:{name:"",pass:""},rules:{name:[{required:!0,message:"请输入有效手机号码",trigger:"blur"},{min:3,max:10,message:"长度6——20个字符",trigger:"blur"}],pass:[{required:!0,message:"请输入有效密码",trigger:"blur"},{min:3,max:20,message:"长度6——20个字符",trigger:"blur"}]}}},watch:{a:function(t,e){},"b.c":function(t,e){}},beforeRouteEnter:function(t,e,n){n()},beforeRouteUpdate:function(t,e,n){n()},beforeRouteLeave:function(t,e,n){n()},beforeCreate:function(){},created:function(){},mounted:function(){},computed:{aDouble:function(){return 2*this.a},aPlus:{get:function(){return this.a+1},set:function(t){this.a=t-1}}},methods:{submitForm:function(t){var e=this;this.$refs[t].validate((function(t){if(console.log(t),!t)return console.log("error submit"),!1;v.login(e.form.name,e.form.pass).then((function(t){console.log(t);var n=t.data.data.code;if(200==n){var o=t.data.data.data.token;localStorage.setItem("yy_token",o),v.getUserInfo().then((function(t){var n=t.data.data;200==n.code?(localStorage.setItem("jy_info",JSON.stringify(n.data)),e.$router.push({path:"/"})):e.$message({message:"登录失败",type:"warning"})}))}else e.$message({message:"登录失败",type:"warning"})}))["catch"]((function(t){console.log(t)}))}))}}},g=b,_=(n("7756"),Object(s["a"])(g,f,m,!1,null,"31e459b5",null)),w=_.exports,y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("AppHeader"),n("AppNavBar"),n("AppMain")],1)},x=[],O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header"},[n("div",{staticClass:"login"},[n("router-link",{staticClass:"link",attrs:{to:{path:"/"}}},[n("img",{attrs:{src:"http://mengxuegu.com:9999/img/logo.7156be27.png",alt:""}}),n("span",{staticClass:"commpany"},[t._v("集运会员管理系统")]),n("div",{staticClass:"info"},[n("el-dropdown",{on:{command:t.handle}},[n("span",{staticClass:"el-dropdown-link"},[t._v(" 张三"),n("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),n("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[n("el-dropdown-item",{attrs:{icon:"el-icon-edit",command:"changePass"}},[t._v("修改密码")]),n("el-dropdown-item",{attrs:{icon:"el-icon-s-fold",command:"checkout"}},[t._v("退出登录")])],1)],1)],1)])],1),n("div",{staticClass:"menu"})])},j=[],C={name:"",props:{},components:{},data:function(){return{name:""}},computed:{},watch:{},methods:{handle:function(t){switch(t){case"changePass":this.changePass();break;case"checkout":this.checkout();break}},changePass:function(){console.log("修改密码")},checkout:function(){console.log("退出登录")}},created:function(){var t=JSON.parse(localStorage.getItem(""));this.name=""!==t.name?t.name:"",console.log(t.name)},mounted:function(){},beforeDestroy:function(){}},k=C,$=(n("c969"),Object(s["a"])(k,O,j,!1,null,"16cc4088",null)),E=$.exports,P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main"},[n("App-link"),n("router-view")],1)},D=[],S=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"main"},[n("el-breadcrumb",{attrs:{separator:"/"}},[n("el-breadcrumb-item",{staticClass:"line",attrs:{to:{path:"/"}}},[t._v("首页")])],1),n("router-view")],1)])},A=[],M={name:"",props:{},components:{},data:function(){return{}},computed:{},watch:{},methods:{},created:function(){},mounted:function(){},beforeDestroy:function(){}},I=M,L=(n("6304"),Object(s["a"])(I,S,A,!1,null,null,null)),H=L.exports,J={name:"",props:{},components:{AppLink:H},data:function(){return{}},computed:{},watch:{},methods:{},created:function(){},mounted:function(){},beforeDestroy:function(){}},N=J,R=(n("8a9e"),Object(s["a"])(N,P,D,!1,null,null,null)),U=R.exports,q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{},[n("div",{staticClass:"navBar"},[n("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{router:!0,"default-active":"2","background-color":"#545c64","text-color":"#fff","active-text-color":"#ffd04b"},on:{open:t.handleOpen,close:t.handleClose}},[n("el-menu-item",{attrs:{index:"/home"}},[n("i",{staticClass:"el-icon-s-home"}),n("span",{attrs:{slot:"title"},slot:"title"},[t._v("首页")])]),n("el-menu-item",{attrs:{index:"/member"}},[n("i",{staticClass:"el-icon-user-solid"}),n("span",{attrs:{slot:"title"},slot:"title"},[t._v("会员管理")])]),n("el-menu-item",{attrs:{index:"/supplier"}},[n("i",{staticClass:"el-icon-s-cooperation"}),n("span",{attrs:{slot:"title"},slot:"title"},[t._v("供应商管理")])]),n("el-menu-item",{attrs:{index:"/goods"}},[n("i",{staticClass:"el-icon-s-goods"}),n("span",{attrs:{slot:"title"},slot:"title"},[t._v("商品管理")])]),n("el-menu-item",{attrs:{index:"/staff"}},[n("i",{staticClass:"el-icon-user"}),n("span",{attrs:{slot:"title"},slot:"title"},[t._v("员工管理")])])],1)],1)])},B=[],T={name:"",props:{},components:{},data:function(){return{}},computed:{},watch:{},methods:{},created:function(){},mounted:function(){},beforeDestroy:function(){}},F=T,z=(n("7e87"),Object(s["a"])(F,q,B,!1,null,null,null)),G=z.exports,K={name:"",props:{},components:{AppHeader:E,AppMain:U,AppNavBar:G},data:function(){return{}},computed:{},watch:{},methods:{},created:function(){},mounted:function(){},beforeDestroy:function(){}},Q=K,V=(n("895a"),Object(s["a"])(Q,y,x,!1,null,null,null)),W=V.exports,X=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div")},Y=[],Z={name:"supplier",props:{},components:{},data:function(){return{}},computed:{},watch:{},methods:{},created:function(){},mounted:function(){},beforeDestroy:function(){}},tt=Z,et=Object(s["a"])(tt,X,Y,!1,null,"177311d3",null),nt=et.exports,ot=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div")},at=[],rt={name:"staff",props:{},components:{},data:function(){return{}},computed:{},watch:{},methods:{},created:function(){},mounted:function(){},beforeDestroy:function(){}},st=rt,ct=Object(s["a"])(st,ot,at,!1,null,"754487ea",null),it=ct.exports,ut=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div")},lt=[],ft={name:"",props:{},components:{},data:function(){return{}},computed:{},watch:{},methods:{},created:function(){},mounted:function(){},beforeDestroy:function(){}},mt=ft,pt=Object(s["a"])(mt,ut,lt,!1,null,"6a140a9e",null),dt=pt.exports,ht=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div")},vt=[],bt={name:"",props:{},components:{},data:function(){return{}},computed:{},watch:{},methods:{},created:function(){},mounted:function(){},beforeDestroy:function(){}},gt=bt,_t=Object(s["a"])(gt,ht,vt,!1,null,"2fd2b8ec",null),wt=_t.exports,yt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div")},xt=[],Ot={name:"",props:{},components:{},data:function(){return{}},computed:{},watch:{},methods:{},created:function(){},mounted:function(){},beforeDestroy:function(){}},jt=Ot,Ct=Object(s["a"])(jt,yt,xt,!1,null,"e24b498e",null),kt=Ct.exports;o["default"].use(l["a"]);var $t=[{path:"/login",name:"login",component:w},{path:"/Layout",name:"Layout",component:W,children:[{path:"/supplier",name:"supplier",component:nt,meta:{title:"供应商"}},{path:"/Home",name:"Home",component:wt,meta:{title:"首页"}},{path:"/member",name:"member",component:dt,meta:{title:"会员管理"}},{path:"/goods",name:"goods",component:kt,meta:{title:"商品管理"}},{path:"/staff",name:"staff",component:it,meta:{title:"员工管理"}}]}],Et=new l["a"]({routes:$t}),Pt=Et,Dt=n("2f62");o["default"].use(Dt["a"]);var St=new Dt["a"].Store({state:{},mutations:{},actions:{},modules:{}}),At=n("5c96"),Mt=n.n(At);n("0fae");o["default"].use(Mt.a),console.log("/  dev-api"),o["default"].config.productionTip=!0,new o["default"]({router:Pt,store:St,render:function(t){return t(u)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var o=n("9c0c"),a=n.n(o);a.a},6304:function(t,e,n){"use strict";var o=n("f177"),a=n.n(o);a.a},"6b24":function(t,e,n){},7756:function(t,e,n){"use strict";var o=n("0ba8"),a=n.n(o);a.a},"7e87":function(t,e,n){"use strict";var o=n("3c02"),a=n.n(o);a.a},"81e4":function(t,e,n){},"895a":function(t,e,n){"use strict";var o=n("6b24"),a=n.n(o);a.a},"8a9e":function(t,e,n){"use strict";var o=n("5026"),a=n.n(o);a.a},"9c0c":function(t,e,n){},c969:function(t,e,n){"use strict";var o=n("81e4"),a=n.n(o);a.a},f177:function(t,e,n){}});