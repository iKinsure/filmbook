(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{50:function(e,t,n){},51:function(e,t,n){},57:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(24),c=n.n(i),o=(n(50),n(51),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,69)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),a(e),r(e),i(e),c(e)}))}),s=n(8),l=n(9),u=n(11),d=n(10),h=n(67),j=n(1),f=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(j.jsx)("footer",{className:"text-muted",style:{boxShadow:"0 0 50px 6px",zIndex:"1"},children:Object(j.jsx)(h.a,{bg:"dark",variant:"dark",className:"justify-content-center",children:Object(j.jsxs)("p",{children:["\xa9 ",(new Date).getFullYear()," iKinsure"]})})})}}]),n}(a.Component),p=n(66),b=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return Object(j.jsxs)(h.a,{bg:"dark",variant:"dark",style:{boxShadow:"0 0 50px 6px",zIndex:"1"},children:[Object(j.jsx)(h.a.Brand,{children:Object(j.jsx)("svg",{style:{marginBottom:"4px"},xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"white",className:"bi bi-film",viewBox:"0 0 16 16",children:Object(j.jsx)("path",{d:"M0 1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1zm4 0v6h8V1H4zm8 8H4v6h8V9zM1 1v2h2V1H1zm2 3H1v2h2V4zM1 7v2h2V7H1zm2 3H1v2h2v-2zm-2 3v2h2v-2H1zM15 1h-2v2h2V1zm-2 3v2h2V4h-2zm2 3h-2v2h2V7zm-2 3v2h2v-2h-2zm2 3h-2v2h2v-2z"})})}),Object(j.jsx)(h.a.Brand,{children:"Filmbook"}),Object(j.jsx)(p.a,{className:"mr-auto",children:Object(j.jsx)(p.a.Link,{onClick:function(){return e.props.onClick("","create")},children:"Upload"})})]})}}]),n}(a.Component),O=n(60),m=n(61),x=n(68),v=n(59),y=n(14),g=n.n(y),C=n(27),k=function(e){if(!e.ok)throw console.log(e),new Error(e.statusText+" "+e.status);return e},w=function(e){return"api/images/"+e},D=function(){var e=Object(C.a)(g.a.mark((function e(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("api/films").then(k);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),S=function(){var e=Object(C.a)(g.a.mark((function e(t,n){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("api/films/".concat(t),{headers:{Accept:"application/json","Content-Type":"application/json"},method:"PUT",body:JSON.stringify(n)}).then(k);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),M=function(){var e=Object(C.a)(g.a.mark((function e(t){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("api/films",{headers:{Accept:"application/json","Content-Type":"application/json"},method:"POST",body:JSON.stringify(t)}).then(k);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),F=function(){var e=Object(C.a)(g.a.mark((function e(t){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("api/films/".concat(t),{headers:{Accept:"application/json","Content-Type":"application/json"},method:"DELETE"}).then(k);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),I=function(){var e=Object(C.a)(g.a.mark((function e(t){var n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(n=new FormData).append("file",t),e.next=4,fetch("/api/images",{method:"POST",body:n}).then(k);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),z=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this,t=this.props.film;return Object(j.jsxs)(x.a,{style:{minWidth:"300px",margin:"5px",border:"solid 2px lightgrey",zIndex:"2",borderRadius:"5px"},children:[Object(j.jsx)(x.a.Img,{variant:"top",src:w(t.imageId)}),Object(j.jsxs)(x.a.Body,{children:[Object(j.jsx)(x.a.Title,{children:t.title}),Object(j.jsx)(x.a.Subtitle,{className:"mb-2 text-muted",children:t.releaseDate})]}),Object(j.jsxs)(x.a.Footer,{style:{display:"flex",justifyContent:"space-evenly"},children:[Object(j.jsx)(v.a,{type:"button",style:{width:"25%"},size:"sm",variant:"secondary",onClick:function(){return e.props.onClick(t,"view")},children:"View"}),Object(j.jsx)(v.a,{type:"button",style:{width:"25%"},size:"sm",variant:"secondary",onClick:function(){return e.props.onClick(t,"edit")},children:"Edit"}),Object(j.jsx)(v.a,{type:"button",style:{width:"25%"},size:"sm",variant:"secondary",onClick:function(){return e.props.onClick(t,"delete")},children:"Delete"})]})]})}}]),n}(a.Component),T=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return Object(j.jsx)(O.a,{children:Object(j.jsx)(m.a,{children:this.props.films.map((function(t,n){return Object(j.jsx)(z,{film:t,onClick:e.props.onClick},n)}))})})}}]),n}(r.a.Component),H=n(64),B=n(65),E=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={validated:!1,film:{title:"",releaseDate:"",description:""},file:null},a}return Object(l.a)(n,[{key:"handleSubmit",value:function(e){e.preventDefault(),!1===e.currentTarget.checkValidity()&&e.stopPropagation(),this.setState({validated:!0}),this.props.onAccept(this.state.film,this.state.file)}},{key:"handleChange",value:function(e){var t=this.state.film;t[e.target.id]=e.target.value,this.setState({film:t})}},{key:"handleFileChange",value:function(e){this.setState({file:e.target.files[0]})}},{key:"render",value:function(){var e=this,t=function(){return e.props.onDecline()},n=function(t){return e.handleChange(t)};return Object(j.jsxs)(H.a,{backdrop:"static",show:!0,onHide:t,children:[Object(j.jsx)(H.a.Header,{closeButton:!0,children:Object(j.jsx)(H.a.Title,{children:"Create film"})}),Object(j.jsxs)(B.a,{id:"create-form",validated:this.state.validated,onSubmit:function(t){return e.handleSubmit(t)},children:[Object(j.jsxs)(H.a.Body,{children:[Object(j.jsxs)(B.a.Group,{controlId:"title",children:[Object(j.jsx)(B.a.Label,{children:"Title:"}),Object(j.jsx)(B.a.Control,{required:!0,type:"text",placeholder:"",value:this.state.film.title,onChange:n})]}),Object(j.jsxs)(B.a.Group,{controlId:"releaseDate",children:[Object(j.jsx)(B.a.Label,{children:"Release date:"}),Object(j.jsx)(B.a.Control,{required:!0,type:"date",placeholder:"",value:this.state.film.releaseDate,onChange:n})]}),Object(j.jsxs)(B.a.Group,{controlId:"description",children:[Object(j.jsx)(B.a.Label,{children:"Description: "}),Object(j.jsx)(B.a.Control,{required:!0,as:"textarea",rows:3,placeholder:"",value:this.state.film.description,onChange:n})]}),Object(j.jsxs)(B.a.Group,{controlId:"image",children:[Object(j.jsx)(B.a.Label,{children:"Image:"}),Object(j.jsx)(B.a.File,{required:!0,onChange:function(t){return e.handleFileChange(t)}})]})]}),Object(j.jsxs)(H.a.Footer,{children:[Object(j.jsx)(v.a,{variant:"secondary",type:"button",onClick:t,children:"Close"}),Object(j.jsx)(v.a,{variant:"primary",type:"submit",children:"Save"})]})]})]})}}]),n}(a.Component),G=n(62),L=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this,t=this.props.film,n=function(){return e.props.onDecline()};return Object(j.jsxs)(H.a,{size:"lg",style:{wordWrap:"break-word"},show:!0,onHide:n,children:[Object(j.jsx)(H.a.Body,{style:{margin:"auto"},children:Object(j.jsx)(G.a,{src:w(t.imageId),fluid:!0})}),Object(j.jsx)(H.a.Header,{children:Object(j.jsx)(H.a.Title,{children:t.title})}),Object(j.jsxs)(H.a.Body,{children:[Object(j.jsx)("h6",{children:t.releaseDate}),Object(j.jsx)("p",{children:t.description})]}),Object(j.jsx)(H.a.Footer,{children:Object(j.jsx)(v.a,{variant:"secondary",type:"button",onClick:n,children:"Close"})})]})}}]),n}(a.Component),V=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={validated:!1,film:{title:void 0,releaseDate:void 0,description:void 0},file:null},a}return Object(l.a)(n,[{key:"handleSubmit",value:function(e){e.preventDefault(),!1===e.currentTarget.checkValidity()&&e.stopPropagation(),this.setState({validated:!0}),this.props.onAccept(this.state.film,this.state.file)}},{key:"handleChange",value:function(e){var t=this.state.film;t[e.target.id]=e.target.value,this.setState({film:t})}},{key:"handleFileChange",value:function(e){this.setState({file:e.target.files[0]})}},{key:"render",value:function(){var e=this,t=this.props.film,n=function(){return e.props.onDecline()},a=function(t){return e.handleChange(t)};return Object(j.jsxs)(H.a,{backdrop:"static",show:!0,onHide:n,children:[Object(j.jsx)(H.a.Header,{closeButton:!0,children:Object(j.jsx)(H.a.Title,{children:"Edit film"})}),Object(j.jsxs)(B.a,{id:"edit-form",validated:this.state.validated,onSubmit:function(t){return e.handleSubmit(t)},children:[Object(j.jsxs)(H.a.Body,{children:[Object(j.jsxs)(B.a.Group,{controlId:"title",children:[Object(j.jsx)(B.a.Label,{children:"Title:"}),Object(j.jsx)(B.a.Control,{type:"text",placeholder:t.title,value:this.state.film.title,onChange:a})]}),Object(j.jsxs)(B.a.Group,{controlId:"releaseDate",children:[Object(j.jsx)(B.a.Label,{children:"Release date:"}),Object(j.jsx)(B.a.Control,{type:"date",placeholder:t.releaseDate,value:this.state.film.releaseDate,onChange:a})]}),Object(j.jsxs)(B.a.Group,{controlId:"description",children:[Object(j.jsx)(B.a.Label,{children:"Description: "}),Object(j.jsx)(B.a.Control,{as:"textarea",rows:3,placeholder:t.description,value:this.state.film.description,onChange:a})]}),Object(j.jsxs)(B.a.Group,{controlId:"image",children:[Object(j.jsx)(B.a.Label,{children:"Image:"}),Object(j.jsx)(B.a.File,{onChange:function(t){return e.handleFileChange(t)}})]}),Object(j.jsx)(B.a.Text,{className:"text-muted",children:"Leave field empty if no change"})]}),Object(j.jsxs)(H.a.Footer,{children:[Object(j.jsx)(v.a,{variant:"secondary",type:"button",onClick:n,children:"Close"}),Object(j.jsx)(v.a,{variant:"primary",type:"submit",children:"Save"})]})]})]})}}]),n}(a.Component),A=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return Object(j.jsxs)(H.a,{show:!0,onHide:function(){return e.props.onDecline()},children:[Object(j.jsx)(H.a.Header,{closeButton:!0,children:Object(j.jsx)(H.a.Title,{children:"Confirm delete"})}),Object(j.jsx)(H.a.Body,{children:"Are you sure you want to delete film?"}),Object(j.jsxs)(H.a.Footer,{children:[Object(j.jsx)(v.a,{variant:"secondary",type:"button",onClick:function(){return e.props.onDecline()},children:"Close"}),Object(j.jsx)(v.a,{variant:"primary",type:"button",onClick:function(){return e.props.onAccept()},children:"Delete"})]})]})}}]),n}(a.Component),N=n(63),P=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this,t=function(){return e.props.onDecline()};return Object(j.jsx)(H.a,{show:!0,onHide:t,children:Object(j.jsxs)(N.a,{variant:"danger",onClose:t,style:{marginBottom:"0"},children:[Object(j.jsx)(N.a.Heading,{children:"Error occurred!"}),Object(j.jsx)("p",{children:this.props.body}),Object(j.jsx)("hr",{}),Object(j.jsx)("div",{className:"d-flex justify-content-end",children:Object(j.jsx)(v.a,{onClick:t,variant:"danger",children:"Close"})})]})})}}]),n}(a.Component),q=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={films:[],loaded:!1,showModal:!1},a}return Object(l.a)(n,[{key:"turnOffModal",value:function(){this.setState({showModal:!1})}},{key:"componentDidMount",value:function(){this.handleGet()}},{key:"handleGet",value:function(){var e=this;D().then((function(e){return e.json()})).then((function(t){e.setState({films:t,loaded:!0})})).catch((function(t){return e.handleError(t,"Failed to get list of films")}))}},{key:"handleCreate",value:function(e,t){var n=this;I(t).then((function(e){return e.json()})).then((function(t){e.imageId=t.imageId,M(e).then((function(){n.handleGet(),n.turnOffModal()})).catch((function(e){return n.handleError(e,"Failed to create film")}))})).catch((function(e){return n.handleError(e,"Failed to upload image")}))}},{key:"handleUpdate",value:function(e,t,n){var a=this;null===n?S(e,t).then((function(){a.handleGet(),a.turnOffModal()})).catch((function(e){return a.handleError(e,"Failed to update film")})):I(n).then((function(e){return e.json()})).then((function(n){t.imageId=n.imageId,S(e,t).then((function(){a.handleGet(),a.turnOffModal()})).catch((function(e){return a.handleError(e,"Failed to update film")}))})).catch((function(e){return a.handleError(e,"Failed to upload image")}))}},{key:"handleDelete",value:function(e){var t=this;F(e.id).then((function(){t.handleGet(),t.turnOffModal()})).catch((function(e){return t.handleError(e,"Failed to delete film")}))}},{key:"handleModalClick",value:function(e,t){var n=this;switch(t){case"create":this.modal=Object(j.jsx)(E,{onAccept:function(e,t){return n.handleCreate(e,t)},onDecline:function(){return n.turnOffModal()}}),this.setState({showModal:!0});break;case"view":this.modal=Object(j.jsx)(L,{film:e,onDecline:function(){return n.turnOffModal()}}),this.setState({showModal:!0});break;case"edit":this.modal=Object(j.jsx)(V,{film:e,onAccept:function(t,a){return n.handleUpdate(e.id,t,a)},onDecline:function(){return n.turnOffModal()}}),this.setState({showModal:!0});break;case"delete":this.modal=Object(j.jsx)(A,{onAccept:function(){return n.handleDelete(e)},onDecline:function(){return n.turnOffModal()}}),this.setState({showModal:!0});break;default:console.warn("Invalid method "+t)}}},{key:"handleError",value:function(e,t){var n=this;this.modal=Object(j.jsx)(P,{onDecline:function(){return n.turnOffModal()},body:e.name+": "+e.message+": "+t}),this.setState({showModal:!0})}},{key:"render",value:function(){var e=this;return Object(j.jsxs)(r.a.Fragment,{children:[Object(j.jsx)(b,{onClick:function(t,n){return e.handleModalClick(t,n)}}),Object(j.jsxs)("main",{style:{minHeight:"calc(100vh - 112px)",background:"linear-gradient(90deg, rgba(28,64,107,0.5) 0%, rgba(66,93,157,0.3) 50%, rgba(28,64,107,0.5) 100%)"},children:[this.state.showModal?this.modal:"",Object(j.jsx)(T,{films:this.state.films,onClick:function(t,n){return e.handleModalClick(t,n)}})]}),Object(j.jsx)(f,{})]})}}]),n}(r.a.Component);c.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(q,{})}),document.getElementById("root")),o()}},[[57,1,2]]]);
//# sourceMappingURL=main.9c70c2a3.chunk.js.map