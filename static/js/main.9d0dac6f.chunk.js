(this.webpackJsonpwallet=this.webpackJsonpwallet||[]).push([[0],{25:function(e,t,a){e.exports=a.p+"static/media/wallet-attention.395f42dc.gif"},37:function(e,t,a){e.exports=a(67)},42:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(24),c=a.n(l),o=a(19),i=(a(42),a(7)),s=a(8),u=(a(49),a(16)),d=a(2),p=a(3),m=a(9),h=a(5),E=a(4),b=(a(50),a(25)),v=a.n(b),f=function(e){Object(h.a)(a,e);var t=Object(E.a)(a);function a(){var e;return Object(d.a)(this,a),(e=t.call(this)).state={userEmail:"",userPassword:"",shouldRedirect:!1},e.handleInputChange=e.handleInputChange.bind(Object(m.a)(e)),e.userVerify=e.userVerify.bind(Object(m.a)(e)),e.handleSubmit=e.handleSubmit.bind(Object(m.a)(e)),e}return Object(p.a)(a,[{key:"handleInputChange",value:function(e){var t=e.target,a=t.name,n=t.value;this.setState(Object(u.a)({},a,n))}},{key:"userVerify",value:function(){var e=this.state,t=e.userEmail,a=e.userPassword;return"alguem@email.com"!==t||"123456"!==a}},{key:"handleSubmit",value:function(){var e=this.state.userEmail;(0,this.props.addUser)(e),this.setState({shouldRedirect:!0})}},{key:"render",value:function(){var e=this.state,t=e.userEmail,a=e.userPassword;return e.shouldRedirect?r.a.createElement(s.a,{to:"/carteira"}):r.a.createElement("main",{className:"loginPage"},r.a.createElement("section",{className:"container"},r.a.createElement("div",{className:"gif"},r.a.createElement("img",{src:v.a,alt:"wallet"})),r.a.createElement("div",{className:"input"},r.a.createElement("label",{htmlFor:"userEmail"},"Email:",r.a.createElement("input",{onChange:this.handleInputChange,name:"userEmail",value:t,"data-testid":"email-input",type:"text",id:"userEmail"}))),r.a.createElement("div",{className:"input"},r.a.createElement("label",{htmlFor:"userPassword"},"Senha:",r.a.createElement("input",{onChange:this.handleInputChange,name:"userPassword",value:a,"data-testid":"password-input",type:"text",id:"userPassword"}))),r.a.createElement("button",{onClick:this.handleSubmit,disabled:this.userVerify(),type:"button"},"Entrar")))}}]),a}(r.a.Component),O=Object(i.b)(null,(function(e){return{addUser:function(t){return e(function(e){return{type:"ADD_USER_EMAIL",email:e}}(t))}}}))(f),x=a(17),j=a(18),g=(a(57),function(e){Object(h.a)(a,e);var t=Object(E.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"totalExpenses",value:function(){return this.props.expenses.reduce((function(e,t){var a=t.currency,n=parseFloat(t.exchangeRates[a].ask);return e+parseFloat(t.value)*n}),0)}},{key:"render",value:function(){var e=this.props,t=e.userState,a=e.expenses,n=t.email;return r.a.createElement("header",{className:"header"},r.a.createElement("div",{className:"gifHeader"},r.a.createElement("img",{src:v.a,alt:"wallet"})),r.a.createElement("div",{className:"userInfoContainer"},r.a.createElement("div",{className:"userEmail"},r.a.createElement("h3",null,"Email:"),r.a.createElement("p",{"data-testid":"email-field"},n)),r.a.createElement("div",{className:"userExpenses"},r.a.createElement("h3",null,"Despesas Totais:"),r.a.createElement("p",{"data-testid":"total-field"},"R$: ",a.length>0?this.totalExpenses():0)),r.a.createElement("div",{className:"userExchange"},r.a.createElement("h3",null,"C\xe2mbio Utilizado:"),r.a.createElement("p",{"data-testid":"header-currency-field"},"BRL"))),r.a.createElement("div",null,r.a.createElement(o.b,{to:"/carteira"},r.a.createElement("button",{type:"button"},r.a.createElement(x.a,{icon:j.e,color:"rgb(222, 221, 228)"}))),r.a.createElement(o.b,{to:"/charts"},r.a.createElement("button",{type:"button"},r.a.createElement(x.a,{icon:j.a,color:"rgb(222, 221, 228)"})))))}}]),a}(r.a.Component)),y=Object(i.b)((function(e){return{userState:e.user,expenses:e.wallet.expenses}}))(g),C=(a(58),function(e){Object(h.a)(a,e);var t=Object(E.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){var e=this.props,t=e.func,a=e.value;return r.a.createElement("label",{htmlFor:"tag"},"Tag:",r.a.createElement("select",{"data-testid":"tag-input",onChange:t,value:a,id:"tag",name:"tag"},r.a.createElement("option",{value:"Alimenta\xe7\xe3o"},"Alimenta\xe7\xe3o"),r.a.createElement("option",{value:"Lazer"},"Lazer"),r.a.createElement("option",{value:"Trabalho"},"Trabalho"),r.a.createElement("option",{value:"Transporte"},"Transporte"),r.a.createElement("option",{value:"Sa\xfade"},"Sa\xfade")))}}]),a}(r.a.Component)),I=function(e){Object(h.a)(a,e);var t=Object(E.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){var e=this.props,t=e.func,a=e.value;return r.a.createElement("label",{htmlFor:"method"},"M\xe9todo de pagamento:",r.a.createElement("select",{"data-testid":"method-input",onChange:t,value:a,id:"method",name:"method"},r.a.createElement("option",{value:"Dinheiro"},"Dinheiro"),r.a.createElement("option",{value:"Cart\xe3o de cr\xe9dito"},"Cart\xe3o de cr\xe9dito"),r.a.createElement("option",{value:"Cart\xe3o de d\xe9bito"},"Cart\xe3o de d\xe9bito")))}}]),a}(r.a.Component),D=(a(59),function(e){Object(h.a)(a,e);var t=Object(E.a)(a);function a(){var e;return Object(d.a)(this,a),(e=t.call(this)).state={Valor:"",Description:"",Moeda:"USD",method:"Dinheiro",tag:"Alimenta\xe7\xe3o"},e.handleInputChange=e.handleInputChange.bind(Object(m.a)(e)),e.addExpense=e.addExpense.bind(Object(m.a)(e)),e}return Object(p.a)(a,[{key:"componentDidMount",value:function(){(0,this.props.addCurrencies)()}},{key:"handleInputChange",value:function(e){var t=e.target,a=t.name,n=t.value;this.setState(Object(u.a)({},a,n))}},{key:"addExpense",value:function(){var e=this.state,t=e.Valor,a=e.Description,n=e.Moeda,r=e.method,l=e.tag,c=this.props,o=c.nextId,i=c.addExpense;fetch("https://economia.awesomeapi.com.br/json/all").then((function(e){return e.json()})).then((function(e){i({id:o,value:t,description:a,currency:n,method:r,tag:l,exchangeRates:e},o)})),this.setState({Valor:"",Description:"",Moeda:"USD",method:"Dinheiro",tag:"Alimenta\xe7\xe3o"})}},{key:"render",value:function(){var e=this.props.currencies,t=this.state,a=t.Valor,n=t.Description,l=t.Moeda,c=t.method,o=t.tag;return r.a.createElement("form",{className:"expenseForm"},r.a.createElement("label",{className:"valueLabel",htmlFor:"Valor"},"Valor:",r.a.createElement("input",{onChange:this.handleInputChange,value:a,id:"Valor",className:"small",type:"text",name:"Valor"})),r.a.createElement("label",{className:"descriptionLabel",htmlFor:"Description"},"Descri\xe7\xe3o:",r.a.createElement("input",{onChange:this.handleInputChange,value:n,id:"Description",type:"text",name:"Description"})),r.a.createElement("label",{htmlFor:"Moeda"},"Moeda:",r.a.createElement("select",{onChange:this.handleInputChange,value:l,id:"Moeda",name:"Moeda"},e.map((function(e){return r.a.createElement("option",{key:e,value:e},e)})))),r.a.createElement(I,{func:this.handleInputChange,value:c}),r.a.createElement(C,{func:this.handleInputChange,value:o}),r.a.createElement("button",{onClick:this.addExpense,type:"button"},r.a.createElement(x.a,{icon:j.c,color:"rgb(222, 221, 228)"})))}}]),a}(r.a.Component)),M=Object(i.b)((function(e){return{currencies:e.wallet.currencies,nextId:e.wallet.nextId}}),(function(e){return{addCurrencies:function(){return e((function(e){return fetch("https://economia.awesomeapi.com.br/json/all").then((function(e){return e.json()})).then((function(t){var a=Object.keys(t).filter((function(e){return"USDT"!==e}));e(function(e){return{type:"REQUEST_CURRENCIES",currencies:e}}(a))}))}))},addExpense:function(t,a){return e(function(e,t){return{type:"ADD_EXPENSE",newExpense:e,ID:t}}(t,a))}}}))(D),k=(a(60),function(e){Object(h.a)(a,e);var t=Object(E.a)(a);function a(e){var n;Object(d.a)(this,a);var r=(n=t.call(this,e)).props.expense,l=r.id,c=r.description,o=r.tag,i=r.method,s=r.value,u=r.currency,p=r.exchangeRates[u],h=p.name.split("/")[0],E=s*p.ask;return n.state={id:l,description:c,tag:o,method:i,value:s,currencyName:h,currentChange:p.ask,convertedValue:E},n.updateState=n.updateState.bind(Object(m.a)(n)),n}return Object(p.a)(a,[{key:"componentDidUpdate",value:function(e){var t=this.props.expense;t!==e.expense&&this.updateState(t)}},{key:"updateState",value:function(e){var t=e.id,a=e.description,n=e.tag,r=e.method,l=e.value,c=e.currency,o=e.exchangeRates[c],i=o.name.split("/")[0],s=l*o.ask;this.setState({id:t,description:a,tag:n,method:r,value:l,currencyName:i,currentChange:o.ask,convertedValue:s})}},{key:"render",value:function(){var e=this.props,t=e.removeExpense,a=e.showModal,n=e.editItemDispatch,l=this.state,c=l.id,o=l.description,i=l.tag,s=l.method,u=l.value,d=l.currencyName,p=l.currentChange,m=l.convertedValue;return r.a.createElement("tr",null,r.a.createElement("td",null,o),r.a.createElement("td",null,i),r.a.createElement("td",null,s),r.a.createElement("td",null,u),r.a.createElement("td",null,d),r.a.createElement("td",null,parseFloat(p).toFixed(2)),r.a.createElement("td",null,parseFloat(m).toFixed(2)),r.a.createElement("td",null,"Real"),r.a.createElement("td",null,r.a.createElement("button",{onClick:function(){n(c),a()},className:"edit-btn","data-testid":"edit-btn",type:"button"},r.a.createElement(x.a,{icon:j.b,color:"rgb(222, 221, 228)"})),r.a.createElement("button",{"data-testid":"delete-btn",className:"delete-btn",onClick:function(){return t(c)},type:"button"},r.a.createElement(x.a,{icon:j.d,color:"rgb(222, 221, 228)"}))))}}]),a}(r.a.Component)),w=Object(i.b)((function(e){return{expenses:e.wallet.expenses}}),(function(e){return{removeExpense:function(t){return e(function(e){return{type:"REMOVE_EXPENSE",ID:e}}(t))},showModal:function(){return e({type:"SHOW_EDIT_MODAL"})},editItemDispatch:function(t){return e(function(e){return{type:"EDIT_ITEM",ID:e}}(t))}}}))(k),S=(a(61),function(e){Object(h.a)(a,e);var t=Object(E.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){var e=this.props.expenses;return r.a.createElement("main",{className:"expenseTable"},r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Descri\xe7\xe3o"),r.a.createElement("th",null,"Tag"),r.a.createElement("th",null,"M\xe9todo de pagamento"),r.a.createElement("th",null,"Valor"),r.a.createElement("th",null,"Moeda"),r.a.createElement("th",null,"C\xe2mbio utilizado"),r.a.createElement("th",null,"Valor convertido"),r.a.createElement("th",null,"Moeda de convers\xe3o"),r.a.createElement("th",null,"Editar/Excluir"))),r.a.createElement("tbody",null,e.map((function(e){return r.a.createElement(w,{key:e.id,expense:e})})))))}}]),a}(r.a.Component)),N=Object(i.b)((function(e){return{expenses:e.wallet.expenses,showEditModal:e.wallet.showEditModal}}))(S),T=a(10),F=function(e){Object(h.a)(a,e);var t=Object(E.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){var e=this.props,t=e.func,a=e.value;return r.a.createElement("label",{htmlFor:"value"},"Valor:",r.a.createElement("input",{onChange:t,value:a,id:"value",type:"text",name:"value","data-testid":"value-input"}))}}]),a}(r.a.Component),R=function(e){Object(h.a)(a,e);var t=Object(E.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){var e=this.props,t=e.func,a=e.value;return r.a.createElement("label",{htmlFor:"description"},"Descri\xe7\xe3o:",r.a.createElement("input",{onChange:t,value:a,id:"description",type:"text",name:"description","data-testid":"description-input"}))}}]),a}(r.a.Component),_=(a(62),function(e){Object(h.a)(a,e);var t=Object(E.a)(a);function a(e){var n;Object(d.a)(this,a);var r=(n=t.call(this,e)).props,l=r.expenses,c=r.editItemID,o=l.find((function(e){return e.id===c})),i=o.value,s=o.description,u=o.currency,p=o.method,h=o.tag;return n.state={value:i,description:s,currency:u,method:p,tag:h},n.handleInputChange=n.handleInputChange.bind(Object(m.a)(n)),n.submit=n.submit.bind(Object(m.a)(n)),n.closeModal=n.closeModal.bind(Object(m.a)(n)),n}return Object(p.a)(a,[{key:"handleInputChange",value:function(e){var t=e.target,a=t.name,n=t.value;this.setState(Object(u.a)({},a,n))}},{key:"submit",value:function(){var e=this.props,t=e.expenses,a=e.editItemID,n=e.changeItem,r=e.hideModal,l=t.find((function(e){return e.id===a})),c=Object(T.a)(Object(T.a)({},l),this.state);t[a]=c,n(t),r()}},{key:"closeModal",value:function(){(0,this.props.hideModal)()}},{key:"render",value:function(){var e=this.props.currencies,t=this.state,a=t.value,n=t.description,l=t.currency,c=t.method,o=t.tag;return r.a.createElement("div",{className:"modal"},r.a.createElement("div",{className:"modalContent"},r.a.createElement("h2",null,"Editar Item"),r.a.createElement("form",null,r.a.createElement(F,{func:this.handleInputChange,value:a}),r.a.createElement(R,{func:this.handleInputChange,value:n}),r.a.createElement("label",{htmlFor:"currency"},"Moeda:",r.a.createElement("select",{onChange:this.handleInputChange,value:l,id:"currency",name:"currency","data-testid":"currency-input"},e.map((function(e){return r.a.createElement("option",{key:e,value:e},e)})))),r.a.createElement(I,{func:this.handleInputChange,value:c}),r.a.createElement(C,{func:this.handleInputChange,value:o}),r.a.createElement("div",{className:"actionButtons"},r.a.createElement("button",{className:"editExpense",onClick:this.submit,type:"button"},"Editar despesa"),r.a.createElement("button",{className:"cancelEdit",onClick:this.closeModal,type:"button"},"Cancelar")))))}}]),a}(r.a.Component)),V=Object(i.b)((function(e){return{editItemID:e.wallet.editID,expenses:e.wallet.expenses,currencies:e.wallet.currencies}}),(function(e){return{changeItem:function(t){return e(function(e){return{type:"CHANGE_EDIT_ITEM",expenses:e}}(t))},hideModal:function(){return e({type:"HIDE_EDIT_MODAL"})}}}))(_),A=(a(63),function(e){Object(h.a)(a,e);var t=Object(E.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){var e=this.props.showEditModal;return r.a.createElement("div",{className:"wallet"},r.a.createElement(y,null),!e&&r.a.createElement(M,null),r.a.createElement(N,null),e&&r.a.createElement(V,null))}}]),a}(r.a.Component)),P=Object(i.b)((function(e){return{showEditModal:e.wallet.showEditModal}}))(A),L=(a(64),a(21)),U=a.n(L),B=a(26),H=a.n(B),z=(a(65),function(e){Object(h.a)(a,e);var t=Object(E.a)(a);function a(){var e;return Object(d.a)(this,a),(e=t.call(this)).totalExpenses=e.totalExpenses.bind(Object(m.a)(e)),e.totalTagExpenses=e.totalTagExpenses.bind(Object(m.a)(e)),e}return Object(p.a)(a,[{key:"totalExpenses",value:function(){var e=this.props.expenses;return e!==[]?e.reduce((function(e,t){var a=t.currency,n=parseFloat(t.exchangeRates[a].ask);return e+parseFloat(t.value)*n}),0):1}},{key:"totalTagExpenses",value:function(e){var t=this.props.expenses;return t!==[]?t.filter((function(t){return t.tag===e})).reduce((function(e,t){var a=t.currency,n=parseFloat(t.exchangeRates[a].ask);return e+parseFloat(t.value)*n}),0):0}},{key:"render",value:function(){var e={chart:{styledMode:!0,type:"pie"},title:{text:"Despesas por Tag"},tooltip:{pointFormat:"{series.name}: <b>{point.percentage:.1f}%</b>"},accessibility:{point:{valueSuffix:"%"}},plotOptions:{pie:{allowPointSelect:!0,cursor:"pointer",dataLabels:{enabled:!0,format:"<b>{point.name}</b>: {point.percentage:.1f} %"}}},series:[{name:"Brands",colorByPoint:!0,data:[{name:"Alimenta\xe7\xe3o",y:this.totalTagExpenses("Alimenta\xe7\xe3o")/this.totalExpenses()*100},{name:"Trabalho",y:this.totalTagExpenses("Trabalho")/this.totalExpenses()*100},{name:"Lazer",y:this.totalTagExpenses("Lazer")/this.totalExpenses()*100},{name:"Transporte",y:this.totalTagExpenses("Transporte")/this.totalExpenses()*100},{name:"Sa\xfade",y:this.totalTagExpenses("Sa\xfade")/this.totalExpenses()*100}]}]};return r.a.createElement("div",{className:"tagChart"},r.a.createElement(H.a,{highcharts:U.a,options:e}))}}]),a}(r.a.Component)),W=Object(i.b)((function(e){return{expenses:e.wallet.expenses}}))(z),X=(a(66),function(e){Object(h.a)(a,e);var t=Object(E.a)(a);function a(){var e;return Object(d.a)(this,a),(e=t.call(this)).totalExpenses=e.totalExpenses.bind(Object(m.a)(e)),e.totalMethodExpenses=e.totalMethodExpenses.bind(Object(m.a)(e)),e}return Object(p.a)(a,[{key:"totalExpenses",value:function(){var e=this.props.expenses;return e!==[]?e.reduce((function(e,t){var a=t.currency,n=parseFloat(t.exchangeRates[a].ask);return e+parseFloat(t.value)*n}),0):1}},{key:"totalMethodExpenses",value:function(e){var t=this.props.expenses;return t!==[]?t.filter((function(t){return t.method===e})).reduce((function(e,t){var a=t.currency,n=parseFloat(t.exchangeRates[a].ask);return e+parseFloat(t.value)*n}),0):0}},{key:"render",value:function(){var e={chart:{styledMode:!0,type:"pie"},title:{text:"Despesas por M\xe9todo de Pagamento"},tooltip:{pointFormat:"{series.name}: <b>{point.percentage:.1f}%</b>"},accessibility:{point:{valueSuffix:"%"}},plotOptions:{pie:{allowPointSelect:!0,cursor:"pointer",dataLabels:{enabled:!0,format:"<b>{point.name}</b>: {point.percentage:.1f} %"}}},series:[{name:"Brands",colorByPoint:!0,data:[{name:"Dinheiro",y:this.totalMethodExpenses("Dinheiro")/this.totalExpenses()*100},{name:"Cart\xe3o de cr\xe9dito",y:this.totalMethodExpenses("Cart\xe3o de cr\xe9dito")/this.totalExpenses()*100},{name:"Cart\xe3o de d\xe9bito",y:this.totalMethodExpenses("Cart\xe3o de d\xe9bito")/this.totalExpenses()*100}]}]};return r.a.createElement("div",{className:"methodChart"},r.a.createElement(H.a,{highcharts:U.a,options:e}))}}]),a}(r.a.Component)),G=Object(i.b)((function(e){return{expenses:e.wallet.expenses}}))(X),J=function(e){Object(h.a)(a,e);var t=Object(E.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){return r.a.createElement("main",{className:"chartsPage"},r.a.createElement(y,null),r.a.createElement(W,null),r.a.createElement(G,null))}}]),a}(r.a.Component),Q=Object(i.b)((function(e){return{expenses:e.wallet.expenses}}))(J);var $=function(){return r.a.createElement("div",{className:"mainPage"},r.a.createElement(s.d,null,r.a.createElement(s.b,{exact:!0,path:"/",component:O}),r.a.createElement(s.b,{exact:!0,path:"/carteira",component:P}),r.a.createElement(s.b,{exact:!0,path:"/charts",component:Q})))},q=a(15),K=a(34),Y=a(35),Z={email:""},ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_USER_EMAIL":return Object(T.a)(Object(T.a)({},e),{},{email:t.email});default:return e}},te=a(36),ae={currencies:[],expenses:[],nextId:0,showEditModal:!1,editID:null};var ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ae,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REQUEST_CURRENCIES":return Object(T.a)(Object(T.a)({},e),{},{currencies:t.currencies});case"ADD_EXPENSE":return Object(T.a)(Object(T.a)({},e),{},{expenses:[].concat(Object(te.a)(e.expenses),[t.newExpense]),nextId:t.ID+1});case"REMOVE_EXPENSE":return Object(T.a)(Object(T.a)({},e),{},{expenses:e.expenses.filter((function(e){return e.id!==t.ID}))});case"SHOW_EDIT_MODAL":return Object(T.a)(Object(T.a)({},e),{},{showEditModal:!0});case"HIDE_EDIT_MODAL":return Object(T.a)(Object(T.a)({},e),{},{showEditModal:!1});case"EDIT_ITEM":return Object(T.a)(Object(T.a)({},e),{},{editID:t.ID});case"CHANGE_EDIT_ITEM":return Object(T.a)(Object(T.a)({},e),{},{expenses:t.expenses,editID:null});default:return e}},re=Object(q.combineReducers)({user:ee,wallet:ne}),le=Object(q.createStore)(re,Object(K.composeWithDevTools)(Object(q.applyMiddleware)(Y.a)));c.a.render(r.a.createElement(i.a,{store:le},r.a.createElement(o.a,{basename:"/Wallet.github.io"},r.a.createElement($,null))),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.9d0dac6f.chunk.js.map