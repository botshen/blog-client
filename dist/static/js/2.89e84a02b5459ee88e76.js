webpackJsonp([2],{YDhy:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=r("Dd8w"),n=r.n(s),a=r("NYxO"),o={name:"HelloWorld",data:function(){return{username:"",password:""}},methods:n()({},Object(a.b)(["register"]),{onRegister:function(){var e=this;this.register({username:this.username,password:this.password}).then(function(){e.$router.push({path:"/"})})}})},i={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"register"}},[r("h4",[e._v("用户名")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],attrs:{placeholder:"用户名"},domProps:{value:e.username},on:{input:function(t){t.target.composing||(e.username=t.target.value)}}}),e._v(" "),r("h4",[e._v("密码")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",placeholder:"密码"},domProps:{value:e.password},on:{keyup:e.onRegister,input:function(t){t.target.composing||(e.password=t.target.value)}}}),e._v(" "),r("el-button",{attrs:{size:"medium"},on:{click:e.onRegister}},[e._v("立即注册")]),e._v(" "),r("p",{staticClass:"notice"},[e._v("已有账号？\n    "),r("router-link",{attrs:{to:"/login"}},[e._v("立即登录")])],1)],1)},staticRenderFns:[]};var u=r("VU/8")(o,i,!1,function(e){r("yj4/")},null,null);t.default=u.exports},"yj4/":function(e,t){}});
//# sourceMappingURL=2.89e84a02b5459ee88e76.js.map