(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{34:function(e,a,t){e.exports=t(83)},42:function(e,a,t){},83:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),m=t(24),r=t.n(m),s=t(9),c=t.n(s),o=t(25),i=t(26),u=t(27),h=t(28),b=t(32),d=t(29),p=t(33),f=t(3),E=(t(42),t(30)),v=t(31),g=t.n(v),N=function(e){function a(){var e;return Object(u.a)(this,a),(e=Object(b.a)(this,Object(d.a)(a).call(this))).handleChange=function(a){e.setState(Object(i.a)({},a.target.name,a.target.value))},e.state={name:"",email:"",message:""},e.handleChange=e.handleChange.bind(Object(f.a)(Object(f.a)(e))),e.handleSubmit=e.handleSubmit.bind(Object(f.a)(Object(f.a)(e))),e}return Object(p.a)(a,e),Object(h.a)(a,[{key:"handleSubmit",value:function(){var e=Object(o.a)(c.a.mark(function e(a){var t,n,l,m;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),t=this.state,n=t.name,l=t.email,m=t.message,e.next=4,g.a.post("/api/form",{name:n,email:l,message:m}).then(function(e){console.log(e)}).catch(function(e){console.log(e.response)});case 4:e.sent;case 5:case"end":return e.stop()}},e,this)}));return function(a){return e.apply(this,arguments)}}()},{key:"render",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary"},l.a.createElement("a",{className:"navbar-brand",href:"https://JOHNFLEURIMOND.com"},"Fleurimond"),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarColor01","aria-controls":"navbarColor01","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarColor01"},l.a.createElement("ul",{className:"navbar-nav mr-auto"},l.a.createElement("li",{className:"nav-item active"},l.a.createElement("a",{className:"nav-link",href:"https://github.com/JOHNFLEURIMOND"},"Github")," "),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link",href:"https://www.linkedin.com/in/john-fleurimond/"},"LinkedIn")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link",href:"https://twitter.com/fleurimond_john"},"Twitter"))),l.a.createElement("form",{className:"form-inline my-2 my-lg-0"},l.a.createElement("input",{className:"form-control mr-sm-2",type:"text",placeholder:"Search"}),l.a.createElement("button",{className:"btn btn-secondary my-2 my-sm-0",type:"submit"},"Search")))),l.a.createElement("div",{className:"row m-5"},l.a.createElement("div",{className:"col-sm-1"}),l.a.createElement("div",{className:"col-sm-10"},l.a.createElement(E.Animated,{animationIn:"bounceInLeft",animationOut:"fadeOut",isVisible:!0},l.a.createElement("form",{action:"/form",method:"post",onSubmit:this.handleSubmit},l.a.createElement("fieldset",null,l.a.createElement("legend",null,"Email Center"),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"name"},"Name"),l.a.createElement("input",{type:"name",name:"name",form:this.state.form,className:"form-control",placeholder:"Enter Your Name",onChange:this.handleChange})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"email"},"Email"),l.a.createElement("input",{type:"email",name:"email",className:"form-control",form:this.state.form,placeholder:"Enter Your Email. ",onChange:this.handleChange}),l.a.createElement("small",{id:"emailHelp",className:"form-text text-muted"},"We'll never share your email with anyone else.")),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"message"},"Message"),l.a.createElement("textarea",{className:"form-control",name:"message",form:this.state.form,onChange:this.handleChange,rows:"3"})),l.a.createElement("button",{type:"Submit",name:"Submit",value:"Submit",className:"btn btn-primary"},"Submit"))))),l.a.createElement("div",{className:"col-sm-1"}," ")))}}]),a}(n.Component);r.a.render(l.a.createElement(N,null),document.getElementById("root"))}},[[34,2,1]]]);
//# sourceMappingURL=main.50d2cc3a.chunk.js.map