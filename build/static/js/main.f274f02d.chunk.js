(this["webpackJsonpreact-quiz"]=this["webpackJsonpreact-quiz"]||[]).push([[0],{26:function(e,t,n){e.exports={Drawer:"Drawer_Drawer__2LXv4",close:"Drawer_close__2LIl2",acive:"Drawer_acive__2xVQT"}},29:function(e,t,n){e.exports={MenuToggle:"MenuToggle_MenuToggle__3Mygd",open:"MenuToggle_open__2o0iP"}},33:function(e,t,n){e.exports={Quiz:"Quiz_Quiz__3jYaV",QuizWrapper:"Quiz_QuizWrapper__1McP4"}},34:function(e,t,n){e.exports={ActiveQuiz:"ActiveQuiz_ActiveQuiz__oi3IQ",Question:"ActiveQuiz_Question__3o7Zd"}},35:function(e,t,n){e.exports={AnswerItem:"AnswerItem_AnswerItem__3rtqG",success:"AnswerItem_success__3XM_x",error:"AnswerItem_error__2xMO5"}},36:function(e,t,n){e.exports={FinishedQuiz:"FinishedQuiz_FinishedQuiz__2QvHg",success:"FinishedQuiz_success__6MlcB",error:"FinishedQuiz_error__3Z-jH"}},37:function(e,t,n){e.exports={Button:"Button_Button__2ac8f",error:"Button_error__1IQkI",success:"Button_success__16i1F",primary:"Button_primary__1My0x"}},38:function(e,t,n){e.exports={Center:"Loader_Center__2dpGw",Loader:"Loader_Loader__2F6Cz","lds-facebook":"Loader_lds-facebook__1Q1Xf"}},39:function(e,t,n){e.exports={Auth:"Auth_Auth__28wnx",AuthForm:"Auth_AuthForm__-WzHH"}},40:function(e,t,n){e.exports={Input:"Input_Input__SwPcc",invalid:"Input_invalid__3vyIO"}},50:function(e,t,n){e.exports={Layout:"Layout_Layout__mezfs"}},51:function(e,t,n){e.exports={Backdrop:"Backdrop_Backdrop__1zFFR"}},54:function(e,t,n){e.exports={AnswersList:"AnswersList_AnswersList__1s9bD"}},55:function(e,t,n){e.exports={QuizList:"QuizList_QuizList__3fShh"}},57:function(e,t,n){e.exports={QuizCreator:"QuizCreator_QuizCreator__Q-GLS"}},58:function(e,t,n){e.exports={Select:"Select_Select__2znyo"}},61:function(e,t,n){e.exports=n(90)},66:function(e,t,n){},90:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(23),o=n.n(i),u=(n(66),n(3)),s=n(4),c=n(7),l=n(5),p=n(8),d=n(50),m=n.n(d),h=n(29),v=n.n(h),f=function(e){var t=[v.a.MenuToggle,"fa"];return e.isOpen?(t.push("fa-times"),t.push(v.a.open)):t.push("fa-bars"),r.a.createElement("i",{className:t.join(" "),onClick:e.onToggle})},E=n(26),_=n.n(E),b=n(51),g=n.n(b),O=function(e){return r.a.createElement("div",{className:g.a.Backdrop,onClick:e.onClick})},C=n(15),w=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(c.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).clickHasndler=function(){n.props.onClose()},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"renderLinks",value:function(e){var t=this;return e.map((function(e,n){return r.a.createElement("li",{key:n},r.a.createElement(C.c,{to:e.to,exact:e.exact,activeClassName:_.a.active,onClick:t.clickHasndler},e.label))}))}},{key:"render",value:function(){var e=[_.a.Drawer];this.props.isOpen||e.push(_.a.close);var t=[{to:"/",label:"C\u043f\u0438\u0441\u043e\u043a \u0442\u0435\u0441\u0442\u043e\u0432",exact:!0}];return this.props.isAuthenticated?(t.push({to:"/quiz-creator",label:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0442\u0435\u0441\u0442",exact:!1}),t.push({to:"/logout",label:"\u0412\u044b\u0439\u0442\u0438",exact:!1})):t.push({to:"/auth",label:"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f",exact:!1}),r.a.createElement(r.a.Fragment,null,r.a.createElement("nav",{className:e.join(" ")},r.a.createElement("ul",null,this.renderLinks(t))),this.props.isOpen?r.a.createElement(O,{onClick:this.props.onClose}):null)}}]),t}(a.Component),y=n(6),z=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(c.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).state={menu:!1},n.toggleMenuHandler=function(){n.setState({menu:!n.state.menu})},n.menuCloseHandler=function(){n.setState({menu:!1})},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:m.a.Layout},r.a.createElement(w,{isOpen:this.state.menu,onClose:this.menuCloseHandler,isAuthenticated:this.props.isAuthenticated}),r.a.createElement(f,{onToggle:this.toggleMenuHandler,isOpen:this.state.menu}),r.a.createElement("main",null,this.props.children))}}]),t}(a.Component);var j=Object(y.b)((function(e){return{isAuthenticated:!!e.auth.token}}))(z),k=n(10),Q=n.n(k),S=n(17),I=n(33),q=n.n(I),T=n(34),A=n.n(T),x=n(54),F=n.n(x),H=n(35),N=n.n(H),U=function(e){var t=[N.a.AnswerItem];return e.state&&t.push(N.a[e.state]),r.a.createElement("li",{className:t.join(" "),onClick:function(){return e.onAnswerClick(e.answer.id)}},e.answer.text)},L=function(e){return r.a.createElement("ul",{className:F.a.AnswersList},e.answers.map((function(t,n){return r.a.createElement(U,{key:n,answer:t,onAnswerClick:e.onAnswerClick,state:e.state?e.state[t.id]:null})})))},M=function(e){return r.a.createElement("div",{className:A.a.ActiveQuiz},r.a.createElement("p",{className:A.a.Question},r.a.createElement("span",null,r.a.createElement("strong",null,e.answerNumber,"."),"\xa0",e.question),r.a.createElement("small",null,e.answerNumber," \u0438\u0437 ",e.quizLength)),r.a.createElement(L,{state:e.state,answers:e.answers,onAnswerClick:e.onAnswerClick}))},D=n(36),R=n.n(D),Z=n(37),V=n.n(Z),B=function(e){var t=[V.a.Button,V.a[e.type]];return r.a.createElement("button",{onClick:e.onClick,className:t.join(" "),disabled:e.disabled},e.children)},X=function(e){var t=Object.keys(e.results).reduce((function(t,n){return"success"===e.results[n]&&t++,t}),0);return r.a.createElement("div",{className:R.a.FinishedQuiz},r.a.createElement("ul",null,e.quiz.map((function(t,n){var a=["fa","error"===e.results[t.id]?"fa-times":"fa-check",R.a[e.results[t.id]]];return r.a.createElement("li",{key:n},r.a.createElement("strong",null,n+1),".\xa0",t.question,r.a.createElement("i",{className:a.join(" ")}))}))),r.a.createElement("p",null,"\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e ",t," \u0438\u0437 ",e.quiz.length),r.a.createElement("div",null,r.a.createElement(B,{onClick:e.onRetry,type:"primary"},"\u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u044c"),r.a.createElement(C.b,{to:"/"},r.a.createElement(B,{type:"success"},"\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u0432 \u0441\u043f\u0438\u0441\u043e\u043a \u0442\u0435\u0441\u0442\u043e\u0432"))))},G=n(38),W=n.n(G),P=function(e){return r.a.createElement("div",{className:W.a.Center},r.a.createElement("div",{className:W.a.Loader},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null)))},Y=n(22),J=n(25),K=n.n(J),$=K.a.create({baseURL:"https://react-quiz-d33b4.firebaseio.com/"});function ee(e){return{type:"FETCH_QUIZ_SUCCESS",quiz:e}}function te(e){return{type:"FETCH_QUIZES_SUCCESS",quizes:e}}function ne(e){return{type:"FETCH_QUIZES_ERROR",error:e}}function ae(e,t){return{type:"FETCH_SET_STATE",answerState:e,results:t}}var re=function(e){function t(){return Object(u.a)(this,t),Object(c.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=Object(S.a)(Q.a.mark((function e(){return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.props.fetchQuizById(this.props.match.params.id);case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){this.props.retryQuiz()}},{key:"render",value:function(){return r.a.createElement("div",{className:q.a.Quiz},r.a.createElement("div",{className:q.a.QuizWrapper},r.a.createElement("h1",null,"\u041e\u0442\u0432\u0435\u0442\u044c\u0442\u0435 \u043d\u0430 \u0432\u0441\u0435 \u0432\u043e\u043f\u0440\u043e\u0441\u044b"),this.props.loading||!this.props.quiz?r.a.createElement(P,null):this.props.isFinished?r.a.createElement(X,{results:this.props.results,quiz:this.props.quiz,onRetry:this.props.retryQuiz}):r.a.createElement(M,{answers:this.props.quiz[this.props.activeQuestion].answers,question:this.props.quiz[this.props.activeQuestion].question,onAnswerClick:this.props.quizAnswerClick,quizLength:this.props.quiz.length,answerNumber:this.props.activeQuestion+1,state:this.props.answerState})))}}]),t}(a.Component);var ie=Object(y.b)((function(e){return{results:e.quiz.results,isFinished:e.quiz.isFinished,activeQuestion:e.quiz.activeQuestion,answerState:e.quiz.answerState,quiz:e.quiz.quiz,loading:e.quiz.loading}}),(function(e){return{fetchQuizById:function(t){return e((n=t,function(){var e=Object(S.a)(Q.a.mark((function e(t){var a,r;return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"FETCH_QUIZES_START"}),e.prev=1,e.next=4,$.get("/quizes/".concat(n,".json"));case 4:a=e.sent,r=a.data,t(ee(r)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),t(ne(e.t0));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()));var n},quizAnswerClick:function(t){return e(function(e){return function(t,n){var a=n().quiz;if(a.answerState){var r=Object.keys(a.answerState)[0];if("success"===a.answerState[r])return}var i=a.quiz[a.activeQuestion],o=a.results;if(i.rightAnswerId===e){o[i.id]||(o[i.id]="success"),t(ae(Object(Y.a)({},e,"success"),o));var u=window.setTimeout((function(){!function(e){return e.activeQuestion+1===e.quiz.length}(a)?t({type:"QUIZ_NEXT_QUESTION",number:a.activeQuestion+1}):t({type:"FINISH_QUIZ"}),window.clearTimeout(u)}),1e3)}else o[i.id]="error",t(ae(Object(Y.a)({},e,"error"),o))}}(t))},retryQuiz:function(){return e({type:"QUIZ_RETRY"})}}}))(re),oe=n(55),ue=n.n(oe),se=function(e){function t(){return Object(u.a)(this,t),Object(c.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"renderQuizes",value:function(){return this.props.quizes.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement(C.c,{to:"/quiz/"+e.id},e.name))}))}},{key:"componentDidMount",value:function(){this.props.fetchQuizes()}},{key:"render",value:function(){return r.a.createElement("div",{className:ue.a.QuizList},r.a.createElement("div",null,r.a.createElement("h1",null,"\u0421\u043f\u0438\u0441\u043e\u043a \u0442\u0435\u0441\u0442\u043e\u0432"),this.props.loading&&0!==this.props.quizes.length?r.a.createElement(P,null):r.a.createElement("ul",null,this.renderQuizes())))}}]),t}(a.Component);var ce=Object(y.b)((function(e){return{quizes:e.quiz.quizes,loading:e.quiz.loading}}),(function(e){return{fetchQuizes:function(){return e(function(){var e=Object(S.a)(Q.a.mark((function e(t){var n,a;return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"FETCH_QUIZES_START"}),e.prev=1,e.next=4,$.get("/quizes.json");case 4:n=e.sent,a=[],Object.keys(n.data).forEach((function(e,t){a.push({id:e,name:"\u0422\u0435\u0441\u0442 \u2116".concat(t+1)})})),t(te(a)),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),t(ne(e.t0));case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}())}}}))(se),le=n(2),pe=n(39),de=n.n(pe),me=n(40),he=n.n(me);function ve(e){var t=e.valid,n=e.touched,a=e.shouldValidate;return!t&&a&&n}var fe=function(e){var t=e.type||"text",n=[he.a.Input],a="".concat(t,"-").concat(Math.random());return ve(e)&&n.push(he.a.invalid),r.a.createElement("div",{className:n.join(" ")},r.a.createElement("label",{htmlFor:""},e.label),r.a.createElement("input",{type:t,id:a,value:e.value,onChange:e.onChange}),ve(e)?r.a.createElement("span",null,e.errorMessage||"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0435\u0440\u043d\u044b\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f"):null)},Ee=n(56),_e=n.n(Ee);function be(e){return function(t){setTimeout((function(){t(ge())}),1e3*e)}}function ge(){return localStorage.removeItem("token"),localStorage.removeItem("userId"),localStorage.removeItem("expirationDate"),{type:"AUTH_LOGOUT"}}function Oe(e){return{type:"AUTH_SUCCESS",token:e}}var Ce=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(c.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).state={isFormValid:!1,formControls:{email:{value:"",type:"email",label:"Email",errorMessage:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 email",valid:!1,touched:!1,validation:{required:!0,email:!0}},password:{value:"",type:"password",label:"\u041f\u0430\u0440\u043e\u043b\u044c",errorMessage:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 \u043f\u0430\u0440\u043e\u043b\u044c",valid:!1,touched:!1,validation:{required:!0,minLength:6}}}},n.loginHandler=function(){n.props.auth(n.state.formControls.email.value,n.state.formControls.password.value,!0)},n.registerHandler=function(){n.props.auth(n.state.formControls.email.value,n.state.formControls.password.value,!1)},n.submitHandler=function(e){e.preventDefault()},n.onChangeHandler=function(e,t){var a=Object(le.a)({},n.state.formControls),r=Object(le.a)({},a[t]);r.value=e.target.value,r.touched=!0,r.valid=n.validateControl(r.value,r.validation),a[t]=r;var i=!0;Object.keys(a).forEach((function(e){i=a[e].valid&&i})),n.setState({formControls:a,isFormValid:i})},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"validateControl",value:function(e,t){if(!t)return!0;var n=!0;return t.required&&(n=""!==e.trim()&&n),t.email&&(n=_e.a.email(e)&&n),t.minLength&&(n=e.length>=t.minLength&&n),n}},{key:"renderInputs",value:function(){var e=this;return Object.keys(this.state.formControls).map((function(t,n){var a=e.state.formControls[t];return r.a.createElement(fe,{key:t+n,type:a.type,value:a.value,valid:a.valid,touched:a.touched,label:a.label,shouldValidate:!!a.validation,errorMessage:a.errorMessage,onChange:function(n){return e.onChangeHandler(n,t)}})}))}},{key:"render",value:function(){return r.a.createElement("div",{className:de.a.Auth},r.a.createElement("div",null,r.a.createElement("h1",null,"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f"),r.a.createElement("form",{onSubmit:this.submitHandler,className:de.a.AuthForm},this.renderInputs(),r.a.createElement(B,{type:"success",onClick:this.loginHandler,disabled:!this.state.isFormValid},"\u0412\u043e\u0439\u0442\u0438"),r.a.createElement(B,{type:"primary",onClick:this.registerHandler,disabled:!this.state.isFormValid},"\u0417\u0430\u0440\u0435\u0433\u0435\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"))))}}]),t}(a.Component);var we=Object(y.b)(null,(function(e){return{auth:function(t,n,a){return e(function(e,t,n){return function(){var a=Object(S.a)(Q.a.mark((function a(r){var i,o,u,s,c;return Q.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return i={email:e,password:t,returnSecureToken:!0},o="https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD3KFTS6NkJXQ165YZ4TA1iYCIGVGtXlCw",n&&(o="https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD3KFTS6NkJXQ165YZ4TA1iYCIGVGtXlCw"),a.next=5,K.a.post(o,i);case 5:u=a.sent,s=u.data,c=new Date((new Date).getTime()+1e3*s.expiresIn),localStorage.setItem("token",s.idToken),localStorage.setItem("userId",s.localId),localStorage.setItem("expirationDate",c),r(Oe(s.idToken)),r(be(s.expiresIn));case 13:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}(t,n,a))}}}))(Ce),ye=n(57),ze=n.n(ye);function je(e,t){return Object(le.a)({},e,{validation:t,valid:!t,touched:!1,value:""})}function ke(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(!t)return!0;var n=!0;return t.required&&(n=""!==e.trim()&&n),n}function Qe(e){var t=!0;for(var n in e)e.hasOwnProperty(n)&&(t=e[n].valid&&t);return t}var Se=function(e){return e.children},Ie=n(58),qe=n.n(Ie),Te=function(e){var t="".concat(e.label,"-").concat(Math.random());return r.a.createElement("div",{className:qe.a.Select},r.a.createElement("label",{htmlFor:t},e.label),r.a.createElement("select",{id:t,value:e.value,onChange:e.onChange},e.options.map((function(e,t){return r.a.createElement("option",{value:e.value,key:e.value+t},e.text)}))))};function Ae(e){return je({label:"\u0412\u0430\u0440\u0438\u0430\u043d\u0442 ".concat(e),errorMessage:"\u0417\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u0443\u0441\u0442\u044b\u043c",id:e},{required:!0})}function xe(){return{question:je({label:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u043e\u043f\u0440\u043e\u0441",errorMessage:"\u0412\u043e\u043f\u0440\u043e\u0441 \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u0443\u0441\u0442\u044b\u043c"},{required:!0}),option1:Ae(1),option2:Ae(2),option3:Ae(3),option4:Ae(4)}}var Fe=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(c.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).state={isFormValid:!1,rightAnswerId:1,formControls:xe()},n.sibmitHandler=function(e){e.preventDefault()},n.addQuestionHandler=function(e){e.preventDefault();var t=n.state.formControls,a=t.question,r=t.option1,i=t.option2,o=t.option3,u=t.option4,s={question:a.value,id:n.props.quiz.length+1,rightAnswerId:n.state.rightAnswerId,answers:[{text:r.value,id:r.id},{text:i.value,id:i.id},{text:o.value,id:o.id},{text:u.value,id:u.id}]};n.props.createQuizQuestion(s),n.setState({isFormValid:!1,rightAnswerId:1,formControls:xe()})},n.createQuizHandler=function(e){e.preventDefault(),n.setState({isFormValid:!1,rightAnswerId:1,formControls:xe()}),n.props.finishCreateQuiz()},n.changeHandler=function(e,t){var a=Object(le.a)({},n.state.formControls),r=Object(le.a)({},a[t]);r.touched=!0,r.value=e,r.valid=ke(r.value,r.validation),a[t]=r,n.setState({formControls:a,isFormValid:Qe(a)})},n.selectChangeHandler=function(e){n.setState({rightAnswerId:+e.target.value})},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"renderControls",value:function(){var e=this;return Object.keys(this.state.formControls).map((function(t,n){var a=e.state.formControls[t];return r.a.createElement(Se,{key:t+n},r.a.createElement(fe,{label:a.label,value:a.value,valid:a.valid,shouldValidate:!!a.validation,touched:a.touched,errorMessage:a.errorMessage,onChange:function(n){return e.changeHandler(n.target.value,t)}}),0===n?r.a.createElement("hr",null):null)}))}},{key:"render",value:function(){var e=r.a.createElement(Te,{label:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0439 \u043e\u0442\u0432\u0435\u0442",value:this.state.rightAnswerId,onChange:this.selectChangeHandler,options:[{text:1,value:1},{text:2,value:2},{text:3,value:3},{text:4,value:4}]});return r.a.createElement("div",{className:ze.a.QuizCreator},r.a.createElement("div",null,r.a.createElement("h1",null,"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0442\u0435\u0441\u0442\u0430"),r.a.createElement("form",{onSubmit:this.submitHandler},this.renderControls(),e,r.a.createElement(B,{type:"primary",onClick:this.addQuestionHandler,disabled:!this.state.isFormValid},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432\u043e\u043f\u0440\u043e\u0441"),r.a.createElement(B,{type:"success",onClick:this.createQuizHandler,disabled:0===this.props.quiz.length},"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0442\u0435\u0441\u0442"))))}}]),t}(a.Component);var He=Object(y.b)((function(e){return{quiz:e.create.quiz}}),(function(e){return{createQuizQuestion:function(t){return e(function(e){return{type:"CREATE_QUIZ_QUESTION",item:e}}(t))},finishCreateQuiz:function(){return e(function(){var e=Object(S.a)(Q.a.mark((function e(t,n){return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,$.post("/quizes.json",n().create.quiz);case 2:t({type:"RESET_QUIZ_CREATION"});case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}())}}}))(Fe),Ne=n(20),Ue=function(e){function t(){return Object(u.a)(this,t),Object(c.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.props.logout()}},{key:"render",value:function(){return r.a.createElement(Ne.a,{to:"/"})}}]),t}(a.Component);var Le=Object(y.b)(null,(function(e){return{logout:function(){return e(ge())}}}))(Ue),Me=function(e){function t(){return Object(u.a)(this,t),Object(c.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.props.autologin()}},{key:"render",value:function(){var e=r.a.createElement(Ne.d,null,r.a.createElement(Ne.b,{path:"/auth",component:we}),r.a.createElement(Ne.b,{path:"/quiz/:id",component:ie}),r.a.createElement(Ne.b,{path:"/",exact:!0,component:ce}),r.a.createElement(Ne.a,{to:"/"}));return this.props.isAuthenticated&&(e=r.a.createElement(Ne.d,null,r.a.createElement(Ne.b,{path:"/auth",component:we}),r.a.createElement(Ne.b,{path:"/quiz-creator",component:He}),r.a.createElement(Ne.b,{path:"/quiz/:id",component:ie}),r.a.createElement(Ne.b,{path:"/logout",component:Le}),r.a.createElement(Ne.b,{path:"/",exact:!0,component:ce}),r.a.createElement(Ne.a,{to:"/"}))),r.a.createElement(j,null,e)}}]),t}(a.Component);var De=Object(Ne.g)(Object(y.b)((function(e){return{isAuthenticated:!!e.auth.token}}),(function(e){return{autologin:function(){return e((function(e){var t=localStorage.getItem("token");if(t){var n=new Date(localStorage.getItem("expirationDate"));n<=new Date?e(ge()):(e(Oe(t)),e(be((n.getTime()-(new Date).getTime())/1e3)))}else e(ge())}))}}}))(Me));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Re=n(19),Ze={quizes:[],loading:!1,error:null,results:{},isFinished:!1,activeQuestion:0,answerState:null,quiz:null};var Ve=n(60),Be={quiz:[]};var Xe={token:null};var Ge=Object(Re.c)({quiz:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ze,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_QUIZES_START":return Object(le.a)({},e,{loading:!0});case"FETCH_QUIZES_SUCCESS":return Object(le.a)({},e,{loading:!1,quizes:t.quizes});case"FETCH_QUIZES_ERROR":return Object(le.a)({},e,{loading:!1,error:t.error});case"FETCH_QUIZ_SUCCESS":return Object(le.a)({},e,{loading:!1,quiz:t.quiz});case"FETCH_SET_STATE":return Object(le.a)({},e,{answerState:t.answerState,results:t.results});case"FINISH_QUIZ":return Object(le.a)({},e,{isFinished:!0});case"QUIZ_NEXT_QUESTION":return Object(le.a)({},e,{answerState:null,activeQuestion:t.number});case"QUIZ_RETRY":return Object(le.a)({},e,{activeQuestion:0,answerState:null,isFinished:!1,results:{}});default:return e}},create:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Be,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_QUIZ_QUESTION":return Object(le.a)({},e,{quiz:[].concat(Object(Ve.a)(e.quiz),[t.item])});case"RESET_QUIZ_CREATION":return Object(le.a)({},e,{quiz:[]});default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Xe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"AUTH_SUCCESS":return Object(le.a)({},e,{token:t.token});case"AUTH_LOGOUT":return Object(le.a)({},e,{token:null});default:return e}}}),We=n(59),Pe="object"===typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):Re.d,Ye=Object(Re.e)(Ge,Pe(Object(Re.a)(We.a))),Je=r.a.createElement(y.a,{store:Ye},r.a.createElement(C.a,null,r.a.createElement(De,null)));o.a.render(Je,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[61,1,2]]]);
//# sourceMappingURL=main.f274f02d.chunk.js.map