(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n(7),o=n.n(c),s=(n(12),n(2)),a=n(3),i=n(5),h=n(4),u=(n(13),n(0)),b=function(e){var t=e.name,n=e.email,r=e.id;return Object(u.jsxs)("div",{className:"dib ma2 w-20 dib br3 grow shadow-5 bg-washed-green ",children:[Object(u.jsx)("img",{src:"https://robohash.org/".concat(r,"?size=200x200"),alt:"robot-icon"}),Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:t}),Object(u.jsx)("p",{children:n.toLowerCase()})]})]})},d=function(e){var t=e.robots;return Object(u.jsx)("div",{children:t.map((function(e,n){return Object(u.jsx)(b,{id:t[n].id,name:t[n].name,email:t[n].email},n)}))})},l=function(e){var t=e.searchChange;return Object(u.jsx)("div",{children:Object(u.jsx)("input",{className:"pa3 bn br3 ba mb4 b--gray bg-washed-yellow",type:"search",placeholder:"search your robot",onChange:t})})},j=function(e){return Object(u.jsx)("div",{children:e.children})},f=function(e){Object(i.a)(n,e);var t=Object(h.a)(n);function n(e){var r;return Object(s.a)(this,n),(r=t.call(this,e)).state={hasError:!1},r}return Object(a.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(u.jsx)("h1",{children:"ops... that is not good"}):this.props.children}}]),n}(r.Component),O=(n(15),function(e){Object(i.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(s.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.state={robots:[],searchfield:""},e}return Object(a.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({robots:t})}))}},{key:"render",value:function(){var e=this.state,t=e.robots,n=e.searchfield,r=t.filter((function(e){return e.name.toLocaleLowerCase().includes(n.toLocaleLowerCase())}));return t.length?Object(u.jsxs)("div",{className:"tc",children:[Object(u.jsx)("h1",{className:"t1",children:"RoboFriends"}),Object(u.jsx)(l,{searchChange:this.onSearchChange}),Object(u.jsx)(j,{children:Object(u.jsx)(f,{children:Object(u.jsx)(d,{robots:r})})})]}):Object(u.jsx)("h1",{children:"Loading..."})}}]),n}(r.Component)),g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),o(e),s(e)}))};n(16);o.a.render(Object(u.jsx)(O,{}),document.getElementById("root")),g()}},[[17,1,2]]]);
//# sourceMappingURL=main.41191d5b.chunk.js.map