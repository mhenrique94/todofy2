"use strict";(self["webpackChunktodofy"]=self["webpackChunktodofy"]||[]).push([[476],{4476:function(a,e,s){s.r(e),s.d(e,{default:function(){return y}});var t=s(4562),o=s(4145),l=s(266),n=s(2118),i=s(5125),r=s(4324),d=s(1713),u=s(9258),c=s(7808),g=function(){var a=this,e=a._self._c;return e("div",{staticClass:"loginPageWrapper"},[e("div",{staticClass:"loginPageLeft"},[e("p",[e(d.Z,[e("h2",{staticClass:"pt-4 pb-3 display-3"},[a._v("todofy")])]),e(d.Z,[e("h3",[a._v(" your "),e("span",{staticClass:"white--text"},[a._v(" to-do-list ")]),a._v(" in vuetify ")])])],1)]),e(n.Z,{staticClass:"loginPageRight"},[e(u.Z,{attrs:{value:!0,absolute:"",left:"",shaped:"",top:""},model:{value:a.snackbar.show,callback:function(e){a.$set(a.snackbar,"show",e)},expression:"snackbar.show"}},[a._v(" "+a._s(a.snackbar.message)+" ")]),e(d.Z,{staticClass:"text-center"},[e(l.Z,{attrs:{md:"6","offset-md":"3"}},[e(o.Z,{staticClass:"pa-4 rounded mt-6 card",attrs:{outlined:"",tile:""}},[e("h2",[a._v("Login")]),e(i.Z,{model:{value:a.valid,callback:function(e){a.valid=e},expression:"valid"}},[e(c.Z,{attrs:{label:"Usuário",required:"",outlined:"","append-icon":"fa-user"},on:{keyup:function(e){return!e.type.indexOf("key")&&a._k(e.keyCode,"enter",13,e.key,"Enter")?null:a.login.apply(null,arguments)}},model:{value:a.username,callback:function(e){a.username=e},expression:"username"}}),e(c.Z,{attrs:{label:"Senha",type:"password",required:"",outlined:"","append-icon":"fa-key"},on:{keyup:function(e){return!e.type.indexOf("key")&&a._k(e.keyCode,"enter",13,e.key,"Enter")?null:a.login.apply(null,arguments)}},model:{value:a.password,callback:function(e){a.password=e},expression:"password"}}),e(t.Z,{staticClass:"mr-4",attrs:{loading:a.loading,disabled:!a.valid,color:"primary","x-large":"",block:""},on:{click:a.login}},[a._v("Continuar "),e(r.Z,{staticClass:"pl-3"},[a._v("fa-arrow-right")])],1)],1),e("p",{staticClass:"ma-4"},[e("span",{staticClass:"subtitle-1"},[a._v("Não tenho conta! Fazer "),e("router-link",{attrs:{to:"/register"}},[a._v("Cadastro")])],1)])],1)],1)],1)],1)],1)},p=[],k=s(3395),h={data:()=>({loading:!1,valid:!1,username:"",password:"",snackbar:{show:!1,message:""}}),methods:{login(){this.loading=!0,k.Z.login(this.username,this.password).then((a=>{console.log("login ok",a),this.saveLoggedUser(a),this.$router.push({name:"taskSummary"})})).catch((a=>{console.log("login falhou",a),this.snackbar.message="Usuario ou senha invalida",this.snackbar.show=!0})).finally((()=>{this.loading=!1}))},saveLoggedUser(a){window.localStorage.setItem("loggedUser",a.id),window.localStorage.setItem("loggedUserToken",a.token),window.localStorage.setItem("loggedUserInfos",JSON.stringify(a))}}},f=h,v=s(1001),m=(0,v.Z)(f,g,p,!1,null,"64d3f0b4",null),y=m.exports}}]);
//# sourceMappingURL=476.9ff5b541.js.map