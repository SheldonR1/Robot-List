(this.webpackJsonpapp1=this.webpackJsonpapp1||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),s=n(3),a=n.n(s),i=(n(12),n(4)),o=n(5),u=n(7),h=n(6),l=(n(13),n(14),n(0)),j=function(e){var t=e.placeholder,n=e.handleChange;return Object(l.jsx)("input",{className:"search",type:"search",placeholder:t,onChange:n})},d=(n(16),n(17),function(e){return Object(l.jsxs)("div",{className:"card-container",children:[Object(l.jsx)("img",{alt:"user",src:"https://robohash.org/".concat(e.user.id,"?set=set1")}),Object(l.jsx)("h2",{children:e.user.name}),Object(l.jsx)("p",{children:e.user.phone})]})}),f=function(e){return Object(l.jsx)("div",{className:"card-list",children:e.users.map((function(e){return Object(l.jsx)(d,{user:e},e.id)}))})};var p=function(){var e=(new Date).getFullYear();return Object(l.jsxs)("footer",{children:[" ",Object(l.jsxs)("p",{children:["Copyright \u24d2  SR ",e]})]})},b=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).handleChange=function(t){e.setState({searchfield:t.target.value})},e.state={users:[],searchfield:""},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({users:t})}))}},{key:"render",value:function(){var e=this.state,t=e.users,n=e.searchfield,r=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("h1",{children:"Robot List"}),Object(l.jsx)(j,{placeholder:"search for users",handleChange:this.handleChange}),Object(l.jsx)(f,{users:r}),Object(l.jsx)(p,{})]})}}]),n}(r.Component),O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),r(e),c(e),s(e),a(e)}))};a.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(b,{})}),document.getElementById("root")),O()}],[[18,1,2]]]);
//# sourceMappingURL=main.d7c35248.chunk.js.map