(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{14:function(t,e,a){},16:function(t,e,a){},17:function(t,e,a){},18:function(t,e,a){},19:function(t,e,a){"use strict";a.r(e);var n=a(1),s=a(5),c=a.n(s),i=a(2),r=a(6),l=a(7),o=a(9),u=a(8),d=(a(14),a(3)),h=a(0);function j(t){var e=t.tasks,a=t.handleEdit,n=t.handleDelete;return Object(h.jsx)("ul",{className:"tasks",children:e.map((function(t,e){return Object(h.jsxs)("li",{children:[t,Object(h.jsxs)("div",{children:[Object(h.jsx)(d.a,{className:"edit",title:"editar",onClick:function(t){return a(t,e)}}),Object(h.jsx)(d.c,{className:"delete",title:"excluir",onClick:function(t){return n(t,e)}})]})]},t)}))})}a(16);function b(t){var e=t.handleSubmit,a=t.handleChange,n=t.newTask;return Object(h.jsxs)("form",{action:"#",onSubmit:e,className:"form",children:[Object(h.jsx)("input",{onChange:a,type:"text",value:n}),Object(h.jsx)("button",{type:"submit",children:Object(h.jsx)(d.b,{})})]})}a(17);var k=function(t){Object(o.a)(a,t);var e=Object(u.a)(a);function a(){var t;Object(r.a)(this,a);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(t=e.call.apply(e,[this].concat(s))).state={newTask:"",tasks:[],index:-1},t.handleSubmit=function(e){e.preventDefault();var a=t.state,n=a.tasks,s=a.index,c=t.state.newTask;if(c=c.trim(),-1===n.indexOf(c)){var r=Object(i.a)(n);-1===s?t.setState({tasks:[].concat(Object(i.a)(r),[c]),newTask:""}):(r[s]=c,t.setState({tasks:Object(i.a)(r),index:-1}))}},t.handleChange=function(e){t.setState({newTask:e.target.value})},t.handleEdit=function(e,a){var n=t.state.tasks;t.setState({index:a,newTask:n[a]})},t.handleDelete=function(e,a){var n=t.state.tasks,s=Object(i.a)(n);s.splice(a,1),t.setState({tasks:Object(i.a)(s)})},t}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var t=JSON.parse(localStorage.getItem("tasks"));t&&this.setState({tasks:t})}},{key:"componentDidUpdate",value:function(t,e){var a=this.state.tasks;a!==e&&localStorage.setItem("tasks",JSON.stringify(a))}},{key:"render",value:function(){var t=this.state,e=t.newTask,a=t.tasks;return Object(h.jsxs)("div",{className:"main",children:[Object(h.jsx)("h1",{children:"Lista de tarefas"}),Object(h.jsx)(b,{handleSubmit:this.handleSubmit,handleChange:this.handleChange,newTask:e}),Object(h.jsx)(j,{tasks:a,handleEdit:this.handleEdit,handleDelete:this.handleDelete})]})}}]),a}(n.Component);a(18);function f(){return Object(h.jsx)(k,{})}c.a.render(Object(h.jsx)(f,{}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.2b2ac1b3.chunk.js.map