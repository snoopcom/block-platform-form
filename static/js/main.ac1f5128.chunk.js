(this.webpackJsonpform=this.webpackJsonpform||[]).push([[0],{208:function(e,a,t){e.exports=t(362)},214:function(e,a,t){},361:function(e,a,t){},362:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),c=t(36),s=t.n(c),l=(t(213),t(214),t(22)),u=t(49),o=t(187),i=t(5),m=t.n(i),p=t(20),d=t(58),f=t(6),b=t(11),E=t(365),h=t(367),v=t(363),O=t(369),w=t(368),j=t(121),g=t.n(j),N="https://conduit.productionready.io/api/",x=g.a.create();x.interceptors.request.use((function(e){var a=localStorage.getItem("token");if(a){var t=e;return t.headers.Authorization="Token ".concat(a),t}return e}));var k,S,y=function(){var e=Object(p.a)(m.a.mark((function e(){var a,t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="".concat(N,"user"),e.next=3,x.get(a);case 3:return t=e.sent,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),I=function(){var e=Object(p.a)(m.a.mark((function e(a){var t,r,n,c,s;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.email,r=a.password,n={user:{email:t,password:r}},c="".concat(N,"users/login"),e.next=5,g.a.post(c,n);case 5:return s=e.sent,e.abrupt("return",s);case 7:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),q=function(){var e=Object(p.a)(m.a.mark((function e(a){var t,r,n,c,s,l;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.username,r=a.email,n=a.password,c={user:{username:t,email:r,password:n}},s="".concat(N,"users"),e.next=5,g.a.post(s,c);case 5:return l=e.sent,e.abrupt("return",l);case 7:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),z=Object(w.a)("LOGIN_USER"),T=Object(w.a)("LOGOUT_USER"),_=Object(w.a)("ACTIVE_BUTTON"),U=Object(w.a)("OUT_BUTTON"),R=function(e){return Object(p.a)(m.a.mark((function a(){var t;return m.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,I(e);case 2:return t=a.sent,a.abrupt("return",t);case 4:case"end":return a.stop()}}),a)})))},C=t(53),B=C.a({email:C.b().email("\u041d\u0435\u043a\u043a\u043e\u0440\u0435\u0442\u043d\u044b\u0439 email").required("\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u043e\u0447\u0442\u0443")}),A={email:"",password:""},F=function(){var e=Object(l.c)((function(e){return e.buttonReducer})),a=Object(l.b)(),t=Object(f.f)(),r=function(){var e=Object(p.a)(m.a.mark((function e(r){var n,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a(_()),a(z(r)),e.next=5,a(R(r));case 5:n=e.sent,c=n.data.user.token,localStorage.setItem("token","".concat(c)),localStorage.setItem("user",JSON.stringify(n.data.user)),t.push("/"),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(0),422===e.t0.request.status&&(a(U()),alert("\u041d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u043b\u043e\u0433\u0438\u043d \u0438\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044c")),0===e.t0.request.status&&(a(U()),alert(":( \u043d\u0435\u043f\u043e\u043b\u0430\u0434\u043a\u0438 \u0441 \u0441\u0435\u0442\u044c\u044e"));case 16:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(a){return e.apply(this,arguments)}}();return n.a.createElement(b.c,{onSubmit:r,initialValues:A,validationSchema:B},n.a.createElement(E.a,{className:"form"},n.a.createElement("h2",null,"\u0412\u0445\u043e\u0434"),n.a.createElement("div",null,n.a.createElement("label",{htmlFor:"email"},"\u041f\u043e\u0447\u0442\u0430",n.a.createElement("span",{className:"required-star"}," *")),n.a.createElement(E.a.Item,{name:"email"},n.a.createElement(h.a,{id:"email",name:"email",placeholder:"my@mail.ru",size:"large",suffix:n.a.createElement(O.a,null)}))),n.a.createElement("div",null,n.a.createElement("label",{htmlFor:"password"},"\u041f\u0430\u0440\u043e\u043b\u044c",n.a.createElement("span",{className:"required-star"}," *")),n.a.createElement(E.a.Item,{name:"password"},n.a.createElement(h.a.Password,{id:"password",name:"password",placeholder:"My-password-123",size:"large"}))),n.a.createElement("div",{className:"formButtonsContainer"},n.a.createElement(v.a,{disabled:e,htmlType:"submit",size:"large",className:"button"},"\u0412\u043e\u0439\u0442\u0438")),n.a.createElement("div",{className:"linkContainer"},n.a.createElement(d.b,{to:"/signUp"},"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"))))},J=t(370),V=C.a({username:C.b().max(50,"\u0418\u043c\u044f \u0434\u043e\u043b\u0436\u043d\u043e \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043d\u0435 \u0431\u043e\u043b\u0435\u0435 50 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432").required("\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f"),password:C.b().matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=(.*[a-zA-Z]){4}).{8,20}$/,"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043e\u0442 8 \u0434\u043e 40 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432, \u043a\u0430\u043a \u043c\u0438\u043d\u0438\u043c\u0443\u043c \u043e\u0434\u043d\u0430 \u0446\u0438\u0444\u0440\u0430 \u0438 \u043e\u0434\u043d\u0430 \u0437\u0430\u0433\u043b\u0430\u0432\u043d\u0430\u044f \u0431\u0443\u043a\u0432\u0430").required("\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c"),email:C.b().email("\u041d\u0435\u043a\u043a\u043e\u0440\u0435\u0442\u043d\u044b\u0439 email").required("\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u043e\u0447\u0442\u0443")}),L={username:"",password:"",email:""},M=function(){var e=Object(l.c)((function(e){return e.buttonReducer})),a=Object(l.b)(),t=Object(f.f)(),r=function(){var e=Object(p.a)(m.a.mark((function e(r){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a(_()),a(z(r)),e.next=5,q(r);case 5:t.push("/"),alert("\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c!"),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),422===e.t0.request.status&&(a(U()),alert("\u0422\u0430\u043a\u043e\u0439 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0443\u0436\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442")),0===e.t0.request.status&&(a(U()),alert(":( \u043d\u0435\u043f\u043e\u043b\u0430\u0434\u043a\u0438 \u0441 \u0441\u0435\u0442\u044c\u044e"));case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(a){return e.apply(this,arguments)}}();return n.a.createElement(b.c,{onSubmit:r,initialValues:L,validationSchema:V},n.a.createElement(E.a,{className:"form"},n.a.createElement("h2",{className:"header"},"\u0424\u043e\u0440\u043c\u0430 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438"),n.a.createElement("div",null,n.a.createElement("label",{htmlFor:"username"},"\u0418\u043c\u044f",n.a.createElement("span",{className:"required-star"}," *")),n.a.createElement(E.a.Item,{name:"username"},n.a.createElement(h.a,{id:"username",name:"username",placeholder:"\u0410\u043b\u0435\u043a\u0441\u0435\u0439",size:"large",suffix:n.a.createElement(J.a,null)}))),n.a.createElement("div",null,n.a.createElement("label",{htmlFor:"email"},"\u041f\u043e\u0447\u0442\u0430",n.a.createElement("span",{className:"required-star"}," *")),n.a.createElement(E.a.Item,{name:"email"},n.a.createElement(h.a,{id:"email",name:"email",placeholder:"my@mail.ru",size:"large",suffix:n.a.createElement(O.a,null)}))),n.a.createElement("div",null,n.a.createElement("label",{htmlFor:"password"},"\u041f\u0430\u0440\u043e\u043b\u044c",n.a.createElement("span",{className:"required-star"}," *")),n.a.createElement(E.a.Item,{name:"password"},n.a.createElement(h.a.Password,{id:"password",name:"password",placeholder:"My-password-123",size:"large"}))),n.a.createElement("div",{className:"formButtonsContainer"},n.a.createElement(v.a,{loading:!1,disabled:e,size:"large",className:"button"},"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f")),n.a.createElement("div",{className:"linkContainer"},n.a.createElement("span",null,"\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c? "),n.a.createElement(d.b,{to:"/login"},"\u0412\u043e\u0439\u0442\u0438"))))},P={name:"",password:"",email:""},D=function(){var e,a=Object(l.b)(),t=Object(f.f)(),r=Object(l.c)((function(e){return e.userReducer})).email;try{e=JSON.parse(localStorage.getItem("user")),void 0===r&&(r=e.email)}catch(c){null===e&&t.push("/login")}return n.a.createElement("div",null,n.a.createElement(b.c,{onSubmit:function(){a(U()),a(T()),localStorage.removeItem("token"),t.push("/login")},initialValues:P},n.a.createElement(E.a,{className:"form"},n.a.createElement("h2",{className:"header"},"\u041f\u0440\u0438\u0432\u0435\u0442 !"),n.a.createElement("h3",{className:"header"},r),n.a.createElement("div",{className:"formButtonsContainer"},n.a.createElement(v.a,{size:"large",className:"button"},"\u0412\u044b\u0445\u043e\u0434")))))},G=(t(361),function(){var e=Object(l.b)(),a=function(){var a=Object(p.a)(m.a.mark((function a(){return m.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(!localStorage.getItem("token")){a.next=4;break}return a.next=4,e(Object(p.a)(m.a.mark((function e(){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y();case 2:return a=e.sent,localStorage.setItem("user",JSON.stringify(a.data.user)),e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)}))));case 4:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}();return Object(r.useEffect)((function(){a()}),[]),n.a.createElement(d.a,null,n.a.createElement("div",{className:"App"},n.a.createElement(f.c,null,n.a.createElement(f.a,{path:"/signUp",exact:!0,component:M}),n.a.createElement(f.a,{path:"/",exact:!0,component:D}),n.a.createElement(f.a,{path:"/login",exact:!0,component:F}))))}),X=t(90),Z=t(364),$=Object(Z.a)((k={},Object(X.a)(k,T,(function(){})),Object(X.a)(k,z,(function(e,a){return a.payload})),k),{}),H=Object(Z.a)((S={},Object(X.a)(S,_,(function(){return!0})),Object(X.a)(S,U,(function(){return!1})),S),!1),K=Object(u.c)({userReducer:$,buttonReducer:H}),Q=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||u.d,W=Object(u.e)(K,Q(Object(u.a)(o.a)));s.a.render(n.a.createElement(l.a,{store:W},n.a.createElement(G,null)),document.getElementById("root"))}},[[208,1,2]]]);
//# sourceMappingURL=main.ac1f5128.chunk.js.map