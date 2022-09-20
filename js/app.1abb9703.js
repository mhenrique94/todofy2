(function(){"use strict";var e={3395:function(e,t,a){var s=a(7877);t["Z"]={login:(e,t)=>new Promise(((a,r)=>{s.ZP.post("/api/auth/login",{username:e,password:t}).then((e=>(console.log("API AUTH: SUCCESS"),a(e.data)))).catch((e=>(console.log("API AUTH: ERROR"),r(e))))})),signup:(e,t,a,r)=>new Promise(((o,n)=>{s.ZP.post("/api/auth/signup",{username:e,name:t,email:a,password:r}).then((e=>(console.log("API AUTH: SUCCESS"),o(e.data)))).catch((e=>(console.log("API AUTH: ERROR"),n(e))))}))}},7877:function(e,t,a){var s=a(9669),r=a.n(s),o=a(1721);const n=r().create({baseURL:"http://localhost:3001"});function i(e){const t=window.localStorage.getItem("loggedUser"),a=window.localStorage.getItem("loggedUserToken");return t&&(e.headers["X-Authorization-UserId"]=`${t}`,e.headers["X-Authorization-UserToken"]=`${a}`),e}function l(e){return Promise.reject(e)}function c(e){return e}function u(e){return e.response&&401==e.response.status&&o.Z.push({name:"login"}),Promise.reject(e)}n.interceptors.request.use(i,l),n.interceptors.response.use(c,u),t["ZP"]=n},6924:function(e,t,a){var s=a(144),r=a(998),o=function(){var e=this,t=e._self._c;return t(r.Z,[t("BaseLayout")],1)},n=[],i=a(4562),l=a(4324),c=a(3059),u=function(){var e=this,t=e._self._c;return t("div",[t(c.Z,{staticClass:"adjust-footer"},[t("router-view"),t(i.Z,{directives:[{name:"show",rawName:"v-show",value:e.loggedUser,expression:"loggedUser"}],staticClass:"zIndex ma-8 pink white--text lighten-1",attrs:{fab:"",large:"",fixed:"",bottom:"",right:""},on:{click:e.scrollToTop}},[t(l.Z,[e._v("mdi-arrow-up")])],1)],1)],1)},d=[],g={name:"BaseLayout",data(){return{loggedUsername:"",loggedUser:""}},methods:{scrollToTop(){window.scrollTo(0,0)},carregaLoggedser(){try{let e=JSON.parse(window.localStorage.getItem("loggedUserInfos"));this.loggedUser=window.localStorage.getItem("loggedUser"),this.loggedUsername=e.username.charAt(0).toUpperCase()+e.username.slice(1)}catch(e){console.log(e)}}},created(){this.carregaLoggedser()}},m=g,p=a(1001),h=(0,p.Z)(m,u,d,!1,null,"36ec4196",null),f=h.exports,k={name:"App",components:{BaseLayout:f}},v=k,y=(0,p.Z)(v,o,n,!1,null,null,null),w=y.exports,b=a(1721),Z=a(1858);s.ZP.use(Z.Z);var C=new Z.Z({theme:{themes:{light:{primary:"#e91e63",secondary:"#03a9f4",accent:"#673ab7",error:"#ff5722",warning:"#f44336",info:"#3f51b5",success:"#009688"}}}});s.ZP.config.productionTip=!1,new s.ZP({router:b.Z,vuetify:C,render:e=>e(w)}).$mount("#app")},1721:function(e,t,a){a.d(t,{Z:function(){return De}});var s=a(144),r=a(8345),o=a(6232),n=a(4562),i=a(4324),l=a(7808),c=function(){var e=this,t=e._self._c;return t("div",{staticClass:"wrapper"},[t(o.Z,{attrs:{app:"",color:"#fb2784"}},[t("Navbar",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],attrs:{loggedUser:e.loggedUser,loggedUsername:e.loggedUsername},on:{logout:function(t){return e.logout()}}})],1),t("div",{staticClass:"wrapperPage"},[t(n.Z,{staticClass:"mx-2 btn-floating",attrs:{fab:"",dark:"",color:"pink"},on:{click:function(t){e.editIsEnabled=!0,e.listIsEnabled=!1}}},[t(i.Z,{attrs:{dark:""}},[e._v(" mdi-plus ")])],1),t("div",[t(l.Z,{directives:[{name:"show",rawName:"v-show",value:!e.editIsEnabled,expression:"!editIsEnabled"}],attrs:{label:"Buscar",height:"40"},model:{value:e.input,callback:function(t){e.input=t},expression:"input"}})],1),t("formTask",{directives:[{name:"show",rawName:"v-show",value:e.editIsEnabled,expression:"editIsEnabled"}],key:e.componentKey,attrs:{task:e.task,projects:e.projects,statuses:e.statuses,editingTask:e.editingTask},on:{"to-index":function(t){e.editIsEnabled=!1,e.editingTask=!1,e.listIsEnabled=!0},"salva-task":t=>{e.postTasks(t)},"atualiza-task":t=>{e.updateTasks(t)}}}),e._l(e.inputSearch,(function(a,s){return t("div",{directives:[{name:"show",rawName:"v-show",value:e.listIsEnabled,expression:"listIsEnabled"}],key:s},[t("cardTask",{attrs:{tarefa:a,task:e.task},on:{"deleta-task":t=>{e.removeTasks(t),e.getTasks()},"edita-task":t=>{e.task=t,e.editingTask=!0,e.editIsEnabled=!0,e.listIsEnabled=!1,e.forceRenderer()}}})],1)}))],2),t("Calendar",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],staticClass:"calendar"})],1)},u=[],d=a(2118),g=a(2318),m=a(5125),p=a(4528),h=a(1713),f=a(6308),k=function(){var e=this,t=e._self._c;return t("div",{staticClass:"formulary"},[t(m.Z,{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[t(d.Z,[t(h.Z,[t(l.Z,{attrs:{rules:e.titleRules,counter:250,label:"Título da tarefa",required:"",value:e.task.title},model:{value:e.myTask.title,callback:function(t){e.$set(e.myTask,"title",t)},expression:"myTask.title"}})],1),t(h.Z,{staticClass:"centerLine"},[t(f.Z,{attrs:{items:e.projects,rules:e.nameRules,label:"Categoria",required:""},model:{value:e.myTask.project,callback:function(t){e.$set(e.myTask,"project",t)},expression:"myTask.project"}}),t("router-link",{staticClass:"link",attrs:{to:"/manage"}},[t(i.Z,[e._v("mdi-dots-horizontal")])],1)],1),t(h.Z,[t(p.Z,{attrs:{"close-on-content-click":!1,"nudge-right":40,transition:"scale-transition","offset-y":"","min-width":"auto"},scopedSlots:e._u([{key:"activator",fn:function({on:a,attrs:s}){return[t(l.Z,e._g(e._b({attrs:{rules:[e=>!!e||"Item is required"],label:"Selecione a data de expiração da tarefa","prepend-icon":"mdi-calendar",readonly:""},model:{value:e.myTask.date,callback:function(t){e.$set(e.myTask,"date",t)},expression:"myTask.date"}},"v-text-field",s,!1),a))]}}]),model:{value:e.menu2,callback:function(t){e.menu2=t},expression:"menu2"}},[t(g.Z,{on:{input:function(t){e.menu2=!1}},model:{value:e.myTask.date,callback:function(t){e.$set(e.myTask,"date",t)},expression:"myTask.date"}})],1)],1),t(h.Z,[t(f.Z,{attrs:{items:e.statuses,label:"Status"},model:{value:e.myTask.status,callback:function(t){e.$set(e.myTask,"status",t)},expression:"myTask.status"}})],1),t(h.Z,[t(n.Z,{staticClass:"mr-4",on:{click:e.reset}},[e._v(" Limpar Form ")]),!1===e.editingTask?t(n.Z,{staticClass:"mr-4",attrs:{color:"pink lighten-1 white--text"},on:{click:function(t){return e.$emit("salva-task",e.myTask)}}},[e._v(" Salvar ")]):t(n.Z,{staticClass:"mr-4",attrs:{color:"pink lighten-1 white--text"},on:{click:function(t){return e.$emit("atualiza-task",e.myTask)}}},[e._v(" Atualizar ")]),t(n.Z,{staticClass:"mr-4",attrs:{color:"grey lighten-1 white--text"},on:{click:function(t){return e.$emit("to-index")}}},[e._v(" Cancelar ")])],1)],1)],1)],1)},v=[],y={name:"formTask",props:{task:{type:Object,required:!0},projects:Array,editingTask:{type:Boolean},statuses:Array},data(){return{menu2:!1,myTask:{...this.task},valid:!0,nameRules:[e=>!!e||"Preencha esse campo",e=>e&&e.length<=16||"Esse campo precisar ter no máximo 16 caracteres"],titleRules:[e=>!!e||"Name is required",e=>e&&e.length<=250||"Esse campo aceita no máximo 250 caracteres"]}},methods:{reset(){this.$refs.form.reset()}}},w=y,b=a(1001),Z=(0,b.Z)(w,k,v,!1,null,"7f615a8a",null),C=Z.exports,_=a(4145),x=a(4886),T=function(){var e=this,t=e._self._c;return t(_.Z,{staticClass:"card",attrs:{elevation:"2"}},[t(x.EB,[e._v(e._s(e.tarefa.title))]),t(x.ZB,{staticClass:"cardText"},[t(h.Z,[e._v("Categoria: "+e._s(e.tarefa.project))]),t(h.Z,[e._v("Vence em "+e._s(e.tarefa.date?e.tarefa.date:"Indefinida"))]),t(h.Z,[e._v("Status: "+e._s(e.tarefa.status))])],1),t(x.h7,[t(n.Z,{attrs:{color:"pink lighten-2",text:""},on:{click:function(t){return e.$emit("edita-task",e.tarefa)}}},[e._v(" Editar ")]),t(n.Z,{attrs:{color:"pink lighten-2",text:""},on:{click:function(t){return e.$emit("deleta-task",e.tarefa.id)}}},[e._v(" Excluir ")])],1)],1)},U=[],P={name:"cardTask",props:{tarefa:{type:Object,required:!0},task:{}}},S=P,j=(0,b.Z)(S,T,U,!1,null,"6f1b9584",null),I=j.exports,$=a(7877),E={getTasks:e=>{$.ZP.get("/api/tasks").then((t=>{e(t.data)})).catch((e=>e))},removeTask:e=>new Promise(((t,a)=>{$.ZP["delete"](`/api/tasks/${e}`).then((e=>t(e.data))).catch((e=>a(e)))})),postTasks:e=>{const t=e,a={"Content-Type":"application/json"},s=JSON.stringify(t);$.ZP.post("/api/tasks",s,{headers:a})},updateTasks(e){const t=JSON.stringify(e),a={"Content-Type":"application/json"};$.ZP.patch(`/api/tasks/${e.id}`,t,{headers:a})},editTasks:e=>{$.ZP.get(`/api/tasks/${(void 0).task.id}`).then((t=>{e(t.data)})).catch((e=>{console.log("error:",e)}))},summary:()=>new Promise(((e,t)=>{$.ZP.get("/api/tasks/summary").then((t=>e(t.data))).catch((e=>t(e)))}))},N={getProjects:e=>{$.ZP.get("api/projects").then((t=>{e(t.data)})).catch((e=>{console.log(`Error: ${e}`)}))},addProject:e=>{$.ZP.post("api/projects",e)},delProject(e,t){$.ZP["delete"](`api/projects/${t}`).then((()=>e()))}},O=a(5715),A=a(7423),L=function(){var e=this,t=e._self._c;return t("div",{staticClass:"calendarContainer"},[t(A.Z,{attrs:{height:"260",width:"300"}},[t(O.Z,{ref:"calendar",attrs:{type:e.type,color:"primary"}})],1)],1)},F=[],q={name:"Calendar",data:()=>({type:"month"})},R=q,J=(0,b.Z)(R,L,F,!1,null,"422192f2",null),z=J.exports,B=a(3687),D=a(7953),V=function(){var e=this,t=e._self._c;return t("nav",{staticClass:"navbar white--text"},[t("router-link",{staticClass:"logo",attrs:{to:"/"}},[t(D.qW,{staticClass:"font-weight-bold white--text"},[e._v("todofy")])],1),t(B.Z),t("h4",{staticClass:"white--text font-weight-light"},[t("span",{staticClass:"font-weight-bold"},[e._v(e._s(e.loggedUsername))]),e._v(", sua to-do list em vuetify ")]),t(B.Z),t("ul",{staticClass:"navList"},[t("router-link",{attrs:{to:"/"}},[t("li",{directives:[{name:"show",rawName:"v-show",value:"taskSummary"!=this.$route.name,expression:"this.$route.name != 'taskSummary'"}],staticClass:"link"},[e._v(" Início ")])]),t("router-link",{attrs:{to:"/tasks"}},[t("li",{directives:[{name:"show",rawName:"v-show",value:"/tasks"!=this.$route.path,expression:"this.$route.path != '/tasks'"}]},[e._v("Tarefas")])]),t("router-link",{attrs:{to:"/manage"}},[t("li",{directives:[{name:"show",rawName:"v-show",value:"manage"!=this.$route.name,expression:"this.$route.name != 'manage'"}]},[e._v("Gerenciar")])]),t("a",[e.loggedUser?t("li",{on:{click:function(t){return e.$emit("logout")}}},[e._v("Sair")]):e._e()])],1)],1)},H=[],M={name:"Navbar",props:["loggedUser","loggedUsername"]},K=M,G=(0,b.Z)(K,V,H,!1,null,"d958a19c",null),W=G.exports,X={name:"ListView",components:{formTask:C,cardTask:I,Calendar:z,Navbar:W},data(){return{show:!0,editIsEnabled:!1,listIsEnabled:!0,editingTask:!1,tasks:[],task:{id:"",title:"",date:"",project:"",status:""},projects:[],componentKey:null,input:"",statuses:["done","pending","working"],loggedUser:"",loggedUsername:""}},methods:{carregaLoggedser(){let e=JSON.parse(window.localStorage.getItem("loggedUserInfos"));this.loggedUser=window.localStorage.getItem("loggedUser"),this.loggedUsername=e.username.charAt(0).toUpperCase()+e.username.slice(1)},getTasks(){E.getTasks((e=>{this.tasks=e}))},getProjects(){N.getProjects((e=>{for(let t of e)this.projects.push(t.name)}))},postTasks(e){E.postTasks(e),this.reload()},removeTasks(e){E.removeTask(e),this.reload()},updateTasks(e){E.updateTasks(e),this.$router.push({name:"tasks"})},editTasks(){E.editTasks((e=>{this.task=e})),this.reload()},forceRenderer(){this.componentKey+=1},reload(){window.location.href="/"},exhibs(){console.log("base=== exibe se foi chamado"),"login"==this.$route.name||"taskSummary"==this.$route.name||"register"==this.$route.name?this.show=!1:this.show=!0},logout(){localStorage.clear(),this.$router.push({name:"login"})}},created(){this.getTasks(),this.getProjects(),this.carregaLoggedser()},computed:{inputSearch(){return this.tasks.filter((e=>e.title.toLowerCase().includes(this.input.toLowerCase())))}}},Q=X,Y=(0,b.Z)(Q,c,u,!1,null,null,null),ee=Y.exports,te=a(3577),ae=a(4061),se=a(5808),re=a(4525),oe=a(2017),ne=function(){var e=this,t=e._self._c;return t("div",{staticClass:"wrapperPage"},[t(o.Z,{attrs:{app:"",color:"#fb2784"}},[t("Navbar",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],attrs:{loggedUser:e.loggedUser,loggedUsername:e.loggedUsername},on:{logout:function(t){return e.logout()}}})],1),t("Drawer",{staticClass:"suspendMenu",on:{show:t=>{e.show=t}}}),"categoryShow"==e.show?t(d.Z,[t(d.Z,{staticClass:"banner",attrs:{fluid:""}},[t(h.Z,{attrs:{justify:"center",align:"center"}},[t(l.Z,{staticClass:"text-input",attrs:{label:"Digite e clique em + para adicionar uma nova categoria"},model:{value:e.category.name,callback:function(t){e.$set(e.category,"name",t)},expression:"category.name"}}),t(n.Z,{attrs:{color:e.category.color.hex},on:{click:function(t){t.stopPropagation(),e.dialog=!0}}},[e._v(" cor ")]),t(ae.Z,{attrs:{"max-width":"320"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[t(te.Z,{staticClass:"ma-2",attrs:{"hide-inputs":""},model:{value:e.category.color,callback:function(t){e.$set(e.category,"color",t)},expression:"category.color"}})],1),t(n.Z,{staticClass:"mx-2 float",attrs:{fab:"",dark:"",color:"pink"},on:{click:function(t){return e.addProject(e.category)}}},[t(i.Z,{attrs:{dark:""}},[e._v(" mdi-plus ")])],1)],1)],1),t(_.Z,[t(se.Z,{staticClass:"list"},e._l(e.categories,(function(a,s){return t(re.Z,{key:s,staticClass:"catContainer"},[t("i",{staticClass:"gg-zeit gg",style:{color:a.color.hex}}),t(oe.km,[t(oe.V9,[e._v(e._s(a.name)),t("i",{staticClass:"gg-trash gg",on:{click:function(t){return e.delProject(a.id)}}})])],1)],1)})),1)],1)],1):e._e(),"userShow"==e.show?t(d.Z,[t(d.Z,{staticClass:"banner",attrs:{fluid:""}},[t(h.Z,[t(l.Z,{attrs:{label:"Digite e clique em + para adicionar um novo usuário"},model:{value:e.user.name,callback:function(t){e.$set(e.user,"name",t)},expression:"user.name"}}),t(n.Z,{staticClass:"mx-2 float",attrs:{fab:"",dark:"",color:"pink"},on:{click:function(t){return e.pushUsers(e.user)}}},[t(i.Z,{attrs:{dark:""}},[e._v(" mdi-plus ")])],1)],1)],1),t(_.Z,[t(se.Z,{staticClass:"list"},e._l(e.users,(function(a,s){return t(re.Z,{key:s,staticClass:"catContainer"},[t(oe.km,[t(oe.V9,[e._v(e._s(a.name)),t("i",{staticClass:"gg-trash gg",on:{click:function(t){return e.deleteUser(a.id)}}})])],1)],1)})),1)],1)],1):e._e()],1)},ie=[],le=a(9669),ce=a.n(le);ce().defaults.baseURL="http://localhost:3000";var ue={getCategories:e=>{ce().get("/categories").then((t=>{e(t.data)})).catch((e=>{console.log("error:",e)}))},getUsers:e=>{ce().get("/users").then((t=>{e(t.data)})).catch((e=>{console.log("error:",e)}))},pushCategory:e=>{const t=e,a={"Content-Type":"application/json"},s=JSON.stringify(t);ce().post("/categories",s,{headers:a})},pushUsers:e=>{const t=e,a={"Content-Type":"application/json"},s=JSON.stringify(t);ce().post("/users",s,{headers:a})},deleteCategory:e=>{ce()["delete"](`/categories/${e}`)},deleteUser:e=>{ce()["delete"](`/users/${e}`)},getTasks:e=>{ce().get("/tasks").then((t=>{e(t.data)})).catch((e=>{console.log("error:",e)}))},postTasks:e=>{const t=e,a={"Content-Type":"application/json"},s=JSON.stringify(t);ce().post("/tasks",s,{headers:a})},deleteTasks:e=>{ce()["delete"](`/tasks/${e}`)},updateTasks(e){const t=JSON.stringify(e),a={"Content-Type":"application/json"};ce().patch(`/tasks/${e.id}`,t,{headers:a})},editTasks:e=>{ce().get(`/tasks/${(void 0).task.id}`).then((t=>{e(t.data)})).catch((e=>{console.log("error:",e)}))}},de=a(7941),ge=a(4611),me=a(8515),pe=function(){var e=this,t=e._self._c;return t(d.Z,[t(me.Z,{attrs:{floating:"",permanent:"",width:"100%"}},[t(se.Z,{attrs:{dense:"",width:"100%"}},[t(de.Z,{staticClass:"listItemGroup",attrs:{color:"primary",width:"100%"},model:{value:e.selectedItem,callback:function(t){e.selectedItem=t},expression:"selectedItem"}},e._l(e.items,(function(a){return t(re.Z,{key:a.title,staticClass:"itemTitle",attrs:{router:"",link:""},on:{click:function(t){return e.clickItem(a.click)}}},[t(ge.Z,[t(i.Z,[e._v(e._s(a.icon))])],1),t(oe.km,[t(oe.V9,[e._v(e._s(a.title))])],1)],1)})),1)],1)],1)],1)},he=[],fe={data(){return{items:[{title:"Categorias",icon:"mdi-shape",click:"categoryShow"}],selectedItem:0}},methods:{clickItem(e){this.$emit("show",e)}}},ke=fe,ve=(0,b.Z)(ke,pe,he,!1,null,"1f6e6254",null),ye=ve.exports,we={name:"ManageView",methods:{getProjects(){N.getProjects((e=>{for(var t of e)this.categories.push(t)}))},addProject(e){N.addProject(e),this.reload()},delProject(e){N.delProject(e),this.reload()},getUsers(){ue.getUsers((e=>{for(var t of e)this.users.push(t)}))},pushUsers(e){ue.pushUsers(e),this.reload()},deleteUser(e){ue.deleteUser(e),this.reload()},reload(){this.$router.go()},carregaLoggedser(){let e=JSON.parse(window.localStorage.getItem("loggedUserInfos"));this.loggedUser=window.localStorage.getItem("loggedUser"),this.loggedUsername=e.username.charAt(0).toUpperCase()+e.username.slice(1)}},data(){return{categories:[],users:[],category:{name:null,color:{hex:"#FFFFFF"}},user:{name:null},show:"categoryShow",loggedUser:"",loggedUsername:"",types:["hex","hexa","rgba","hsla","hsva"],type:"hex",hex:"#FF00FF",hexa:"#FF00FFFF",rgba:{r:255,g:0,b:255,a:1},hsla:{h:300,s:1,l:.5,a:1},hsva:{h:300,s:1,v:1,a:1},dialog:!1}},created(){this.getProjects(),this.carregaLoggedser()},computed:{color:{get(){return this[this.type]},set(e){this[this.type]=e}},showColor(){return"string"===typeof this.color?this.color:JSON.stringify(Object.keys(this.color).reduce(((e,t)=>(e[t]=Number(this.color[t].toFixed(2)),e)),{}),null,2)}},components:{Drawer:ye,Navbar:W}},be=we,Ze=(0,b.Z)(be,ne,ie,!1,null,null,null),Ce=Ze.exports,_e=a(266),xe=a(9258),Te=function(){var e=this,t=e._self._c;return t(d.Z,[t(xe.Z,{attrs:{value:!0,absolute:"",left:"",shaped:"",top:""},model:{value:e.snackbar.show,callback:function(t){e.$set(e.snackbar,"show",t)},expression:"snackbar.show"}},[e._v(" "+e._s(e.snackbar.message)+" ")]),t(h.Z,{staticClass:"text-center"},[t(_e.Z,{attrs:{md:"6","offset-md":"3"}},[t(_.Z,{staticClass:"pa-4 rounded mt-6",attrs:{outlined:"",tile:""}},[t("h2",[e._v("Cadastre-se")]),t(m.Z,{model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[t(l.Z,{attrs:{label:"Usuário",required:"",outlined:"","append-icon":"fa-user"},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.signup.apply(null,arguments)}},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}}),t(l.Z,{attrs:{label:"Nome",required:"",outlined:"","append-icon":"fa-user"},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.signup.apply(null,arguments)}},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),t(l.Z,{attrs:{label:"Email",type:"email",required:"",outlined:"","append-icon":"fa-envelope"},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.signup.apply(null,arguments)}},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),t(l.Z,{attrs:{rules:[e.required,e.min6],label:"Senha",type:"password",required:"",outlined:"","append-icon":"fa-key"},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.signup.apply(null,arguments)}},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),t(l.Z,{attrs:{rules:[e.required,e.min6,e.matchingPasswords],label:"Repita a senha",type:"password",required:"",outlined:"","append-icon":"fa-key"},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.signup.apply(null,arguments)}},model:{value:e.validPassword,callback:function(t){e.validPassword=t},expression:"validPassword"}}),t(n.Z,{staticClass:"mr-4",attrs:{loading:e.loading,disabled:!e.valid,color:"secondary","x-large":"",block:""},on:{click:e.signup}},[e._v("Registrar "),t(i.Z,{staticClass:"pl-3"},[e._v("fa-arrow-right")])],1)],1)],1)],1)],1)],1)},Ue=[],Pe=a(3395),Se={data:()=>({loading:!1,valid:!1,username:"",name:"",email:"",password:"",validPassword:"",snackbar:{show:!1,message:""}}),methods:{signup(){this.loading=!0,Pe.Z.signup(this.username,this.name,this.email,this.password).then((e=>{console.log("login ok",e),this.$router.push({name:"home"})})).catch((e=>{console.log("Deu erro: ",e),this.snackbar.message="Usuario ou senha invalida",this.snackbar.show=!0})).finally((()=>{this.loading=!1}))},matchingPasswords(){return this.password===this.validPassword||"Senhas não coincidem"},required(e){return!!e||"Campo obrigatório"},min6(e){return e.length>=6||"A senha deve conter mais que 6 caracteres"}}},je=Se,Ie=(0,b.Z)(je,Te,Ue,!1,null,null,null),$e=Ie.exports,Ee=a(4127),Ne=a(3059),Oe=a(3305),Ae=function(){var e=this,t=e._self._c;return t(Ne.Z,{staticClass:"overflow-hidden mt-4"},[t(o.Z,{attrs:{app:"",color:"#fb2784"}},[t("Navbar",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],attrs:{loggedUser:e.loggedUser,loggedUsername:e.loggedUsername},on:{logout:function(t){return e.logout()}}})],1),t(d.Z,{attrs:{margin:"auto"}},[t("h2",[e._v("Resumo das tarefas")]),t(d.Z,{staticClass:"taskContainer"},e._l(e.data,(function(a){return t("div",{key:a.group},[t("h3",[e._v(" "+e._s(a.group)+" "),t(Ee.Z,{staticClass:"ma-2"},[e._v(" "+e._s(a.tasks)+" ")])],1),t(_.Z,{staticClass:"summaryCard",attrs:{elevation:"0"}},[t(Oe.Z,{attrs:{rotate:360,size:100,width:15,value:a.percent,color:"pink"}}),t("p",[e._v(" Done:"+e._s(e.summary[a.group].done)+" "),t("br"),e._v(" Working:"+e._s(e.summary[a.group].working)),t("br"),e._v(" Pending:"+e._s(e.summary[a.group].pending)+" ")])],1)],1)})),0),t("div",{staticClass:"my-4"},[t(n.Z,{attrs:{rounded:"",color:"primary",dark:"",to:{name:"tasks"}}},[e._v(" Ver todas tarefas ")])],1)],1)],1)},Le=[],Fe={components:{Navbar:W},data:()=>({summary:{},data:[],show:!0,loggedUser:"",loggedUsername:""}),methods:{getSummary(){E.summary().then((e=>{this.summary=e;for(const[t,a]of Object.entries(e)){const e=a.pending+a.working+a.done;let s={group:t,tasks:e,percent:100-a.pending/e*100};this.data.push(s)}}))},carregaLoggedser(){let e=JSON.parse(window.localStorage.getItem("loggedUserInfos"));this.loggedUser=window.localStorage.getItem("loggedUser"),this.loggedUsername=e.username.charAt(0).toUpperCase()+e.username.slice(1)},logout(){window.localStorage.clear,this.$router.push({name:"login"})}},created(){console.log("carregando 1"),this.getSummary(),this.carregaLoggedser()}},qe=Fe,Re=(0,b.Z)(qe,Ae,Le,!1,null,"e0c9e610",null),Je=Re.exports;s.ZP.use(r.ZP);const ze=[{path:"/",name:"taskSummary",component:Je},{path:"/manage",name:"manage",component:Ce},{path:"/login",name:"login",component:()=>a.e(476).then(a.bind(a,4476))},{path:"/register",name:"register",component:$e},{path:"/tasks",name:"tasks",component:ee}],Be=new r.ZP({mode:"history",base:"/todofy2/",routes:ze});var De=Be}},t={};function a(s){var r=t[s];if(void 0!==r)return r.exports;var o=t[s]={exports:{}};return e[s](o,o.exports,a),o.exports}a.m=e,function(){var e=[];a.O=function(t,s,r,o){if(!s){var n=1/0;for(u=0;u<e.length;u++){s=e[u][0],r=e[u][1],o=e[u][2];for(var i=!0,l=0;l<s.length;l++)(!1&o||n>=o)&&Object.keys(a.O).every((function(e){return a.O[e](s[l])}))?s.splice(l--,1):(i=!1,o<n&&(n=o));if(i){e.splice(u--,1);var c=r();void 0!==c&&(t=c)}}return t}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[s,r,o]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var s in t)a.o(t,s)&&!a.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}}(),function(){a.f={},a.e=function(e){return Promise.all(Object.keys(a.f).reduce((function(t,s){return a.f[s](e,t),t}),[]))}}(),function(){a.u=function(e){return"js/"+e+".9ff5b541.js"}}(),function(){a.miniCssF=function(e){return"css/"+e+".45c14e1a.css"}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="todofy:";a.l=function(s,r,o,n){if(e[s])e[s].push(r);else{var i,l;if(void 0!==o)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==s||d.getAttribute("data-webpack")==t+o){i=d;break}}i||(l=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,a.nc&&i.setAttribute("nonce",a.nc),i.setAttribute("data-webpack",t+o),i.src=s),e[s]=[r];var g=function(t,a){i.onerror=i.onload=null,clearTimeout(m);var r=e[s];if(delete e[s],i.parentNode&&i.parentNode.removeChild(i),r&&r.forEach((function(e){return e(a)})),t)return t(a)},m=setTimeout(g.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=g.bind(null,i.onerror),i.onload=g.bind(null,i.onload),l&&document.head.appendChild(i)}}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){a.p="/todofy2/"}(),function(){var e=function(e,t,a,s){var r=document.createElement("link");r.rel="stylesheet",r.type="text/css";var o=function(o){if(r.onerror=r.onload=null,"load"===o.type)a();else{var n=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.href||t,l=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=n,l.request=i,r.parentNode.removeChild(r),s(l)}};return r.onerror=r.onload=o,r.href=t,document.head.appendChild(r),r},t=function(e,t){for(var a=document.getElementsByTagName("link"),s=0;s<a.length;s++){var r=a[s],o=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(o===e||o===t))return r}var n=document.getElementsByTagName("style");for(s=0;s<n.length;s++){r=n[s],o=r.getAttribute("data-href");if(o===e||o===t)return r}},s=function(s){return new Promise((function(r,o){var n=a.miniCssF(s),i=a.p+n;if(t(n,i))return r();e(s,i,r,o)}))},r={143:0};a.f.miniCss=function(e,t){var a={476:1};r[e]?t.push(r[e]):0!==r[e]&&a[e]&&t.push(r[e]=s(e).then((function(){r[e]=0}),(function(t){throw delete r[e],t})))}}(),function(){var e={143:0};a.f.j=function(t,s){var r=a.o(e,t)?e[t]:void 0;if(0!==r)if(r)s.push(r[2]);else{var o=new Promise((function(a,s){r=e[t]=[a,s]}));s.push(r[2]=o);var n=a.p+a.u(t),i=new Error,l=function(s){if(a.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var o=s&&("load"===s.type?"missing":s.type),n=s&&s.target&&s.target.src;i.message="Loading chunk "+t+" failed.\n("+o+": "+n+")",i.name="ChunkLoadError",i.type=o,i.request=n,r[1](i)}};a.l(n,l,"chunk-"+t,t)}},a.O.j=function(t){return 0===e[t]};var t=function(t,s){var r,o,n=s[0],i=s[1],l=s[2],c=0;if(n.some((function(t){return 0!==e[t]}))){for(r in i)a.o(i,r)&&(a.m[r]=i[r]);if(l)var u=l(a)}for(t&&t(s);c<n.length;c++)o=n[c],a.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return a.O(u)},s=self["webpackChunktodofy"]=self["webpackChunktodofy"]||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))}();var s=a.O(void 0,[998],(function(){return a(6924)}));s=a.O(s)})();
//# sourceMappingURL=app.1abb9703.js.map