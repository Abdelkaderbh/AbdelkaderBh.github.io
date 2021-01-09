webpackJsonp([1],{"7IUO":function(e,t){},Dkk8:function(e,t){},GZUq:function(e,t){},NHnr:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a("7+uW"),n=a("yGkR"),s={name:"navbar",data:function(){return{isLoggedIn:!1,currentUser:!1}},created:function(){n.a.auth().currentUser&&(this.isLoggedIn=!0,this.currentUser=n.a.auth().currentUser.email)},methods:{logout:function(){var e=this;n.a.auth().signOut().then(function(){e.$router.push("/login")})}}},o={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("nav",[a("div",{staticClass:"nav-wrapper teal"},[a("div",{staticClass:"container"},[a("router-link",{staticClass:"brand-logo",attrs:{to:"/"}},[e._v(" Rh Manager ")]),e._v(" "),a("ul",{staticClass:"right"},[e.isLoggedIn?a("li",[a("span",{staticClass:"email white-text"},[e._v(" "+e._s(e.currentUser)+" ")])]):e._e(),e._v(" "),e.isLoggedIn?a("li",[a("router-link",{attrs:{to:"/"}},[e._v(" Dashboard ")])],1):e._e(),e._v(" "),e.isLoggedIn?e._e():a("li",[a("router-link",{attrs:{to:"/login"}},[e._v(" Login")])],1),e._v(" "),e.isLoggedIn?e._e():a("li",[a("router-link",{attrs:{to:"/register"}},[e._v(" register ")])],1),e._v(" "),e.isLoggedIn?a("li",[e.isLoggedIn?a("button",{staticClass:"btn teal",on:{click:e.logout}},[e._v(" Logout  ")]):e._e()]):e._e()])],1)])])},staticRenderFns:[]};var r={name:"App",components:{navbar:a("VU/8")(s,o,!1,function(e){a("GZUq")},"data-v-309dad5e",null).exports}},l={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("navbar",{key:this.$route.fullPath}),this._v(" "),t("div",{staticClass:"container"},[t("router-view")],1)],1)},staticRenderFns:[]},d=a("VU/8")(r,l,!1,null,null,null).exports,p=a("/ocq"),u=(a("881v"),n.a.initializeApp({apiKey:"AIzaSyCRbEfjXhDMU3VTz93sawHUly1IrLTkZjo",authDomain:"dash-project-9f325.firebaseapp.com",projectId:"dash-project-9f325",storageBucket:"dash-project-9f325.appspot.com",messagingSenderId:"806862073891",appId:"1:806862073891:web:b2fab40f78c09374c14196"}).firestore()),c={name:"dashboard",data:function(){return{employees:[]}},created:function(){var e=this;u.collection("employees").orderBy("empid").get().then(function(t){t.forEach(function(t){var a={id:t.id,employee_id:t.data().empid,name:t.data().name,dept:t.data().dept,position:t.data().position};e.employees.push(a)})})}},m={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"dashboard"}},[a("ul",{staticClass:"collection with-header"},[e._m(0),e._v(" "),e._l(e.employees,function(t){return a("li",{key:t.id,staticClass:"collection-item"},[a("div",{staticClass:"chip"},[e._v(e._s(t.dept)+" ")]),e._v("\n "+e._s(t.employee_id)+" :"+e._s(t.name)+"\n\n\n "),a("router-link",{staticClass:"secondary-content",attrs:{to:{name:"view-employee",params:{employee_id:t.employee_id}}}},[a("i",{staticClass:"fa fa-eye"})])],1)})],2),e._v(" "),a("div",{staticClass:"fixed-action-btn"},[a("router-link",{staticClass:"btn-floating btn-large-red",attrs:{to:"/new"}},[a("i",{staticClass:"fa fa-plus"})])],1)])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("li",{staticClass:"collection with-header"},[t("h4",[this._v(" Employees ")])])}]};var v=a("VU/8")(c,m,!1,function(e){a("7IUO")},null,null).exports,f={name:"view-employe",data:function(){return{empid:null,name:null,dept:null,position:null}},beforeRouteEnter:function(e,t,a){u.collection("employees").where("empid","==",e.params.employee_id).get().then(function(e){e.forEach(function(e){a(function(t){t.empid=e.data().empid,t.name=e.data().name,t.dept=e.data().dept,t.position=e.data().position})})})},watch:{$route:"fetchData"},methods:{fetchData:function(){var e=this;u.collection("employees").where("empid","==",this.params.employee_id).get().then(function(t){t.forEach(function(t){e.employee_id=t.data().empid,e.name=t.data().name,e.dept=t.data().dept,e.position=t.data().position})})},deleteEmployee:function(){var e=this;confirm("are you sure you want to delete this employee ?")&&u.collection("employees").where("empid","==",this.$route.params.employee_id).get().then(function(t){t.forEach(function(t){t.ref.delete(),e.$router.push("/")})})}}},h={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"view-employe"}},[a("ul",{staticClass:"collection with-header"},[a("li",{staticClass:"collection-header"},[a("h4",[e._v(" "+e._s(e.name))])]),e._v(" "),a("li",{staticClass:"collection-item"},[e._v("Employee ID: "+e._s(e.empid))]),e._v(" "),a("li",{staticClass:"collection-item"},[e._v("Departement: "+e._s(e.dept))]),e._v(" "),a("li",{staticClass:"collection-item"},[e._v("Poisiton: "+e._s(e.position))])]),e._v(" "),a("router-link",{staticClass:"btn teal",attrs:{to:"/"}},[e._v(" Back ")]),e._v(" "),a("button",{staticClass:"btn red",on:{click:e.deleteEmployee}},[e._v("  Delete ")]),e._v(" "),a("div",{staticClass:"fixed-action-btn"},[a("router-link",{staticClass:"btn-floating btn-large teal",attrs:{to:{name:"edit-employe",params:{empid:e.empid}}}},[a("i",{staticClass:"fa fa-pencil"})])],1)],1)},staticRenderFns:[]},_=a("VU/8")(f,h,!1,null,null,null).exports,g={name:"edit-employe",data:function(){return{empid:null,name:null,dept:null,position:null}},beforeRouteEnter:function(e,t,a){u.collection("employees").where("empid","==",e.params.empid).get().then(function(e){e.forEach(function(e){a(function(t){t.empid=e.data().empid,t.name=e.data().name,t.dept=e.data().dept,t.position=e.data().position})})})},watch:{$route:"fetchData"},methods:{fetchData:function(){var e=this;u.collection("employees").where("empid","==",this.params.employee_id).get().then(function(t){t.forEach(function(t){e.employee_id=t.data().empid,e.name=t.data().name,e.dept=t.data().dept,e.position=t.data().position})})},updateEmployee:function(){var e=this;u.collection("employees").where("empid","==",this.params.empid).get().then(function(t){t.forEach(function(t){t.ref.update({name:e.name,dept:e.dept,position:e.position}).then(function(){e.$router.push({name:"view-employee",params:{empid:e.empid}})})})})}}},y={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"edit-employe"}},[a("h2",[e._v(" Edit Employee ")]),e._v(" "),a("div",{staticClass:"row"},[a("form",{staticClass:"col s12",on:{submit:function(t){return t.preventDefault(),e.updateEmployee(t)}}},[a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s6"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.empid,expression:"empid"}],attrs:{disabled:"",type:"text",required:""},domProps:{value:e.empid},on:{input:function(t){t.target.composing||(e.empid=t.target.value)}}})]),e._v(" "),a("div",{staticClass:"input-field col s6"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{type:"text",required:""},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}})]),e._v(" "),a("div",{staticClass:"input-field col s6"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.dept,expression:"dept"}],attrs:{type:"text",required:""},domProps:{value:e.dept},on:{input:function(t){t.target.composing||(e.dept=t.target.value)}}})]),e._v(" "),a("div",{staticClass:"input-field col s6"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.position,expression:"position"}],attrs:{type:"text",required:""},domProps:{value:e.position},on:{input:function(t){t.target.composing||(e.position=t.target.value)}}})])]),e._v(" "),a("button",{staticClass:"btn green",attrs:{type:"submit"}},[e._v(" Submit ")]),e._v(" "),a("router-link",{staticClass:"btn red",attrs:{to:"/"}},[e._v(" Cancel ")])],1)])])},staticRenderFns:[]},w=a("VU/8")(g,y,!1,null,null,null).exports,C={name:"new-employee",data:function(){return{empid:null,name:null,dept:null,position:null}},methods:{saveEmployee:function(){var e=this;u.collection("employees").add({empid:this.employee_id,name:this.name,dept:this.dept,position:this.position}).then(function(t){e.$router.push("/")}).catch(function(e){return console.log(e)})}}},b={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"new-employee"}},[a("h2",[e._v(" new Employee ")]),e._v(" "),a("div",{staticClass:"row"},[a("form",{staticClass:"col s12",on:{submit:function(t){return t.preventDefault(),e.saveEmployee(t)}}},[a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s6"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.employee_id,expression:"employee_id"}],attrs:{type:"text",required:""},domProps:{value:e.employee_id},on:{input:function(t){t.target.composing||(e.employee_id=t.target.value)}}}),e._v(" "),a("label",[e._v(" Employee ID: ")])]),e._v(" "),a("div",{staticClass:"input-field col s6"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{type:"text",required:""},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}}),e._v(" "),a("label",[e._v(" Name: ")])]),e._v(" "),a("div",{staticClass:"input-field col s6"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.dept,expression:"dept"}],attrs:{type:"text",required:""},domProps:{value:e.dept},on:{input:function(t){t.target.composing||(e.dept=t.target.value)}}}),e._v(" "),a("label",[e._v(" Departement : ")])]),e._v(" "),a("div",{staticClass:"input-field col s6"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.position,expression:"position"}],attrs:{type:"text",required:""},domProps:{value:e.position},on:{input:function(t){t.target.composing||(e.position=t.target.value)}}}),e._v(" "),a("label",[e._v(" Position : ")])])]),e._v(" "),a("button",{staticClass:"btn green",attrs:{type:"submit"}},[e._v(" Submit ")]),e._v(" "),a("router-link",{staticClass:"btn red",attrs:{to:"/"}},[e._v(" Cancel ")])],1)])])},staticRenderFns:[]},x=a("VU/8")(C,b,!1,null,null,null).exports,E={name:"login",data:function(){return{email:"",password:""}},methods:{login:function(e){var t=this;n.a.auth().signInWithEmailAndPassword(this.email,this.password).then(function(e){alert("you are logged in as ${user.email}"),t.$router.push("/")},function(e){alert(e.message)}),e.preventDefault()}}},k={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col s12 m8 offset -m2"}),e._v(" "),a("div",{staticClass:"login card-panel teal white-text center"}),e._v(" "),a("h3",[e._v(" Login ")]),e._v(" "),a("form",[a("div",{staticClass:"input-field"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"text",id:"email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),e._v(" "),a("label",{attrs:{for:"email"}},[e._v(" E-mail ")])]),e._v(" "),a("div",{staticClass:"input-field"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",id:"lock"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),e._v(" "),a("label",{attrs:{for:"password"}},[e._v(" password ")])]),e._v(" "),a("button",{staticClass:"btn btn-large green  white-text",on:{click:e.login}},[e._v(" login ")])])])])])},staticRenderFns:[]};var q=a("VU/8")(E,k,!1,function(e){a("jvx1")},"data-v-ba7a1d02",null).exports,U={name:"Register",data:function(){return{email:"",password:""}},methods:{register:function(e){var t=this;n.a.auth().createUserWithEmailAndPassword(this.email,this.password).then(function(e){alert("account created for ${user.email}"),t.$router.push("/")},function(e){alert(e.message)}),e.preventDefault()}}},$={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col s12 m8 offset-m2"}),e._v(" "),a("div",{staticClass:"login card-panel teal white-text center"}),e._v(" "),a("h3",[e._v(" Register ")]),e._v(" "),a("form",[a("div",{staticClass:"input-field"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"text",id:"email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),e._v(" "),a("label",{attrs:{for:"email"}},[e._v(" E-mail ")])]),e._v(" "),a("div",{staticClass:"input-field"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",id:"lock"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),e._v(" "),a("label",{attrs:{for:"password"}},[e._v(" password ")])]),e._v(" "),a("button",{staticClass:"btn btn-large green  white-text",on:{click:e.register}},[e._v(" Register ")])])])])])},staticRenderFns:[]};var P=a("VU/8")(U,$,!1,function(e){a("Dkk8")},"data-v-31156d76",null).exports;a("53Xq");i.a.use(p.a);var D=new p.a({routes:[{path:"/",name:"Dashboard",component:v,meta:{requiresAuth:!0}},{path:"/login",name:"login",component:q,meta:{requiresGuest:!0}},{path:"/register",name:"register",component:P,meta:{requiresGuest:!0}},{path:"/new",name:"new-employee",component:x,meta:{requiresAuth:!0}},{path:"/edit/:employe_id",name:"edit-employe",component:w,meta:{requiresAuth:!0}},{path:"/:employee_id",name:"view-employee",component:_,meta:{requiresAuth:!0}}]});D.beforeEach(function(e,t,a){e.matched.some(function(e){return e.meta.requiresAuth})?n.a.auth().currentUser?a():a({path:"/login",query:{redirect:e.fullPath}}):e.matched.some(function(e){return e.meta.requiresGuest})&&n.a.auth().currentUser?a({path:"",query:{redirect:e.fullPath}}):a()});var I=D;i.a.config.productionTip=!1;var R=void 0;n.a.auth().onAuthStateChanged(function(e){R||(R=new i.a({el:"#app",router:I,components:{App:d},template:"<App/>"}))})},jvx1:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.55c9955db139c357a2e5.js.map