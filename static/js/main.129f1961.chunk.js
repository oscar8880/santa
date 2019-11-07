(this.webpackJsonpwebapp=this.webpackJsonpwebapp||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(7),c=a.n(r),l=(a(14),a(1)),o=a(2),s=a(4),m=a(3),u=a(5),p=(a(15),a(16),a(8)),d=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).state={id:a.props.id,name:"",email:""},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"formChange",value:function(e){var t=this;this.setState(Object(p.a)({},e.target.name,e.target.value),(function(){t.props.updateState(t.state)}))}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"form-group"},i.a.createElement("h4",{className:"col"},"Participant ",this.props.id+1),i.a.createElement("div",{className:"row-md"},i.a.createElement("div",{className:"col-sm"},i.a.createElement("label",{className:"col-sm control-label",for:"email"},"Name"),i.a.createElement("input",{className:"form-control",type:"text",name:"name",onChange:function(t){e.formChange(t)},required:!0})),i.a.createElement("br",null),i.a.createElement("div",{className:"col-sm"},i.a.createElement("label",{className:"col-sm control-label",for:"email"},"Email"),i.a.createElement("input",{className:"form-control",type:"email",name:"email",onChange:function(t){e.formChange(t)},onFocusOut:function(t){e.formChange(t)},required:!0})),i.a.createElement("br",null)))}}]),t}(n.Component),b=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).state={numParticipants:4,participants:[{id:0,name:"",email:""},{id:1,name:"",email:""},{id:2,name:"",email:""},{id:3,name:"",email:""}],invalid:!0},a.updateState=function(e){for(var t=a.state.participants,n=0;n<a.state.numParticipants;n++)e.id===t[n].id&&(t[n]=e);a.setState({participants:t})},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"onAddClick",value:function(e){var t=this.state.participants;t.push({id:this.state.numParticipants,name:"",email:""}),this.setState({numParticipants:this.state.numParticipants+1,participants:t})}},{key:"onRemoveClick",value:function(e){if(this.state.numParticipants>3){var t=this.state.participants;t.pop(),this.setState({numParticipants:this.state.numParticipants-1,participants:t})}else alert("Must have at least 3 participants.")}},{key:"onSubmit",value:function(e){console.log("Clicked submit"),e.preventDefault();var t=JSON.stringify(this.state.participants);console.log(t)}},{key:"render",value:function(){for(var e=this,t=[],a=0;a<this.state.numParticipants;a++)t.push(i.a.createElement(d,{id:a,updateState:this.updateState}));return i.a.createElement("div",{className:"container-fluid"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-md-2"}),i.a.createElement("div",{className:"col-md-8"},i.a.createElement("div",{className:"jumbotron",id:"content"},i.a.createElement("form",{className:"well form-vertical",action:" ",id:"santa_form",onSubmit:function(t){return e.onSubmit(t)},noValidate:!0},i.a.createElement("fieldset",null,i.a.createElement("legend",null,i.a.createElement("center",null,i.a.createElement("h2",null,i.a.createElement("b",null,"Secret Santa")))),i.a.createElement("br",null),t),i.a.createElement("div",{className:"text-center"},i.a.createElement(h,{onClick:function(){return e.onAddClick()}}),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement(f,{onClick:function(t){return e.onRemoveClick(t)}}),i.a.createElement("br",null),i.a.createElement("br",null)),i.a.createElement("div",{className:"text-center"},i.a.createElement("button",{className:"btn btn-primary btn-sm"},"Submit")))))))}}]),t}(n.Component),h=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return i.a.createElement("button",{type:"button",className:"btn btn-primary btn-sm",id:"addButton",onClick:this.props.onClick},"Add participant")}}]),t}(i.a.Component),f=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return i.a.createElement("button",{type:"button",className:"btn btn-danger btn-sm",id:"removeButton",onClick:this.props.onClick},"Remove last participant")}}]),t}(i.a.Component);var v=b;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},9:function(e,t,a){e.exports=a(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.129f1961.chunk.js.map