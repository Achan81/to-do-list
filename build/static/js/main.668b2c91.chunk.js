(this["webpackJsonpblank-app"]=this["webpackJsonpblank-app"]||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(7),i=n.n(s),l=(n(13),n(6)),r=n(8),o=n(5),d=n(17),m=n(0);var j=function(e){var t=e.completed,n=e.task,c=e.handleClick,a=e.handleDelete;return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)("div",{className:"container",children:Object(m.jsx)("div",{className:"row",children:Object(m.jsxs)("div",{className:"d-flex justify-content-center",children:[Object(m.jsx)("div",{className:"singletodos",children:Object(m.jsx)("li",{className:t?"completed":"",onClick:c,children:n})}),Object(m.jsx)("button",{onClick:a,type:"text",className:"delete-task btn-none btn btn-sm",children:"REMOVE"})]})})})})};var b=function(e){var t=e.handleSubmit,n=e.handleChange,c=e.newTodo,a=e.hasNewTodo;return Object(m.jsxs)("form",{onSubmit:t,children:[Object(m.jsx)("input",{className:"form-label pt-0 al",placeholder:"Task",onChange:n,value:c}),Object(m.jsx)("button",{disabled:!a,className:"add-btn btn btn-secondary btn-sm",children:"ADD"})]})};var h=function(){var e=a.a.useState((function(){var e=window.localStorage.getItem("todos");return e?JSON.parse(e):[]})),t=Object(o.a)(e,2),n=t[0],c=t[1],s=a.a.useState(""),i=Object(o.a)(s,2),h=i[0],u=i[1],O=!!h.trim();a.a.useEffect((function(){window.localStorage.setItem("todos",JSON.stringify(n))}),[n]);var p=n.filter((function(e){return!e.completed})).length;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("div",{className:"container col-11 listbg mt-4 pt-2 pb-1 shadow p-3 mb-5 bg-body rounded",children:Object(m.jsx)("div",{className:"row align-items-center",children:Object(m.jsx)("div",{className:"col",children:Object(m.jsxs)("main",{children:[Object(m.jsxs)("div",{className:"icon-group d-flex justify-content-end",children:[Object(m.jsx)("a",{href:"mailto:achan81@icloud.com",rel:"noopener noreferrer",target:"_blank",children:Object(m.jsx)("img",{alt:"mail",src:"https://i.imgur.com/l0ehegq.png",className:"icon mail-image col"})}),Object(m.jsx)("a",{href:"https://github.com/Achan81/",rel:"noopener noreferrer",target:"_blank",children:Object(m.jsx)("img",{alt:"acgh",src:"https://i.imgur.com/yWic7vC.png",className:"icon acgh-image col"})}),Object(m.jsx)("a",{href:"https://www.linkedin.com/in/achan81/",rel:"noopener noreferrer",target:"_blank",children:Object(m.jsx)("img",{alt:"linkedin",src:"https://i.imgur.com/6j6BRm3.png",className:"icon linkedin-image col"})})]}),Object(m.jsx)("h5",{className:"title text-bold",children:"TO DO LIST"}),Object(m.jsxs)("p",{className:"remaining",children:["You have ",p," thing(s) to do!"]}),Object(m.jsx)("hr",{}),Object(m.jsx)("hr",{}),Object(m.jsx)("div",{className:"container",children:Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("div",{className:"col-xs-12 col-sm-6",children:Object(m.jsx)(b,{handleSubmit:function(e){if(e.preventDefault(),h.trim()){var t={task:h,completed:!1,id:Object(d.a)()};c([].concat(Object(r.a)(n),[t])),u("")}},handleChange:function(e){u(e.target.value)},newTodo:h,hasNewTodo:O})}),Object(m.jsxs)("div",{className:"col-xs-12 col-sm-6",children:[Object(m.jsxs)("p",{className:"small-instruction",children:["(click on assigned task to ",Object(m.jsx)("span",{className:"text-decoration-line-through",children:"mark"})," as completed)"]}),Object(m.jsx)("button",{type:"button",className:"remove-completed btn btn-secondary btn-sm",onClick:function(e){if(window.confirm("Are you sure you want to remove these completed items?")){var t=n.filter((function(t){if(!0!==t.completed)return e}));c(t)}},children:"Remove all Completed Tasks"})]})]})}),Object(m.jsx)("ul",{className:"container tasks-added",children:n.map((function(e){return Object(m.jsx)(j,{task:e.task,completed:e.completed,handleClick:function(){return function(e){var t=n.map((function(t){return t.id===e?Object(l.a)(Object(l.a)({},t),{},{completed:!t.completed}):t}));c(t)}(e.id)},handleDelete:function(){return function(e){if(window.confirm("Are you sure you want to remove this item?")){var t=n.filter((function(t){return t.id!==e}));c(t)}}(e.id)}},e.id)}))})]})})})}),Object(m.jsx)("div",{className:"container",children:Object(m.jsx)("div",{className:"icons d-flex flex-row justify-content-center"})})]})};i.a.render(Object(m.jsx)(h,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.668b2c91.chunk.js.map