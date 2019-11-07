(this.webpackJsonpwebapp=this.webpackJsonpwebapp||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(7),l=a.n(i),c=(a(14),a(1)),o=a(2),s=a(4),m=a(3),u=a(5),p=(a(15),a(16),a(8)),d=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={id:a.props.id,name:"",email:""},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"formChange",value:function(e){var t=this;this.setState(Object(p.a)({},e.target.name,e.target.value),(function(){t.props.updateState(t.state)}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"form-group"},r.a.createElement("h4",{className:"col"},"Participant ",this.props.id+1),r.a.createElement("div",{className:"row-md"},r.a.createElement("div",{className:"col-sm"},r.a.createElement("label",{className:"col-sm control-label",for:"email"},"Name"),r.a.createElement("input",{className:"form-control",type:"text",name:"name",onChange:function(t){e.formChange(t)},required:!0})),r.a.createElement("br",null),r.a.createElement("div",{className:"col-sm"},r.a.createElement("label",{className:"col-sm control-label",for:"email"},"Email"),r.a.createElement("input",{className:"form-control",type:"email",name:"email",onChange:function(t){e.formChange(t)},onFocusOut:function(t){e.formChange(t)},required:!0})),r.a.createElement("br",null)))}}]),t}(n.Component),h=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={numParticipants:4,participants:[{id:0,name:"",email:""},{id:1,name:"",email:""},{id:2,name:"",email:""},{id:3,name:"",email:""}],invalid:!0},a.updateState=function(e){for(var t=a.state.participants,n=0;n<a.state.numParticipants;n++)e.id===t[n].id&&(t[n]=e);a.setState({participants:t})},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"onAddClick",value:function(e){this.setState({numParticipants:this.state.numParticipants+1}),this.state.participants.push({id:this.state.numParticipants-1,name:"",email:""})}},{key:"onRemoveClick",value:function(e){if(this.state.numParticipants>3){var t=this.state.participants;t.pop(),this.setState({numParticipants:this.state.numParticipants-1,participants:t})}else alert("Must have at least 3 participants.")}},{key:"onSubmit",value:function(e){console.log("Clicked submit"),e.preventDefault();var t=JSON.stringify(this.state.participants);console.log(t),console.log(function(e){var t,a=[];t=function(e){var t=[],a=!0,n=!1,r=void 0;try{for(var i,l=e[Symbol.iterator]();!(a=(i=l.next()).done);a=!0){var c=i.value;t.push(c.name)}}catch(p){n=!0,r=p}finally{try{a||null==l.return||l.return()}finally{if(n)throw r}}var o=t.length;console.log(t);var s=(m=1,u=o,m=Math.ceil(m),u=Math.floor(u),Math.floor(Math.random()*(u-m))+m);var m,u;return function(e,t){for(var a=e,n=e.slice(e.length-t),r=0;r<t;r++)a.pop();return a=n.concat(a)}(t,s)}(e);var n=0,r=!0,i=!1,l=void 0;try{for(var c,o=e[Symbol.iterator]();!(r=(c=o.next()).done);r=!0){var s=c.value,m={to:s.email,to_name:s.name,santa_recipient:t[n++]};a.push(m)}}catch(u){i=!0,l=u}finally{try{r||null==o.return||o.return()}finally{if(i)throw l}}return a}(this.state.participants))}},{key:"render",value:function(){for(var e=this,t=[],a=0;a<this.state.numParticipants;a++)t.push(r.a.createElement(d,{id:a,updateState:this.updateState}));return r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-2"}),r.a.createElement("div",{className:"col-md-8"},r.a.createElement("div",{className:"jumbotron",id:"content"},r.a.createElement("form",{className:"well form-vertical",action:" ",id:"santa_form",onSubmit:function(t){return e.onSubmit(t)},noValidate:!0},r.a.createElement("fieldset",null,r.a.createElement("legend",null,r.a.createElement("center",null,r.a.createElement("h2",null,r.a.createElement("b",null,"Secret Santa")))),r.a.createElement("br",null),t),r.a.createElement("div",{className:"text-center"},r.a.createElement(f,{onClick:function(){return e.onAddClick()}}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(b,{onClick:function(t){return e.onRemoveClick(t)}}),r.a.createElement("br",null),r.a.createElement("br",null)),r.a.createElement("div",{className:"text-center"},r.a.createElement("button",{className:"btn btn-primary btn-sm"},"Submit")))))))}}]),t}(n.Component),f=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("button",{type:"button",className:"btn btn-primary btn-sm",id:"addButton",onClick:this.props.onClick},"Add participant")}}]),t}(r.a.Component),b=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("button",{type:"button",className:"btn btn-danger btn-sm",id:"removeButton",onClick:this.props.onClick},"Remove last participant")}}]),t}(r.a.Component);var v=h;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},9:function(e,t,a){e.exports=a(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.af3cb0fc.chunk.js.map