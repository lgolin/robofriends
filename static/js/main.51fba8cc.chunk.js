(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n(7),o=n.n(c),s=(n(12),n(2)),a=n(3),i=n(5),h=n(4),l=(n(13),n(0)),u=function(e){var t=e.name,n=e.email,r=e.id;return Object(l.jsxs)("div",{className:"tc grow br3 pa3 ma2 dib bw2 shadow-5 card-bg",children:[Object(l.jsx)("img",{src:"https://robohash.org/".concat(r,"?size=200x200"),alt:"robot-icon"}),Object(l.jsxs)("div",{children:[Object(l.jsx)("h2",{children:t}),Object(l.jsx)("p",{children:n})]})]})},b=function(e){var t=e.robots;return Object(l.jsx)("div",{children:t.map((function(e,n){return Object(l.jsx)(u,{id:t[n].id,name:t[n].name,email:t[n].email},n)}))})},d=function(e){var t=e.searchChange;return Object(l.jsx)("div",{children:Object(l.jsx)("input",{className:"pa3 ma2 ba b--purple bg-lightest-purple",type:"search",placeholder:"search robots",onChange:t})})},j=function(e){return Object(l.jsx)("div",{style:{overflow:"scroll",border:"1px solid white",height:"800px"},children:e.children})},f=function(e){Object(i.a)(n,e);var t=Object(h.a)(n);function n(e){var r;return Object(s.a)(this,n),(r=t.call(this,e)).state={hasError:!1},r}return Object(a.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(l.jsx)("h1",{children:"ops... that is not good"}):this.props.children}}]),n}(r.Component),p=(n(15),function(e){Object(i.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(s.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.state={robots:[],searchfield:""},e}return Object(a.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({robots:t})}))}},{key:"render",value:function(){var e=this.state,t=e.robots,n=e.searchfield,r=t.filter((function(e){return e.name.toLocaleLowerCase().includes(n.toLocaleLowerCase())}));return t.length?Object(l.jsxs)("div",{className:"tc",children:[Object(l.jsx)("h1",{className:"f2",children:"RoboFriends"}),Object(l.jsx)(d,{searchChange:this.onSearchChange}),Object(l.jsx)(j,{children:Object(l.jsx)(f,{children:Object(l.jsx)(b,{robots:r})})})]}):Object(l.jsx)("h1",{children:"Loading..."})}}]),n}(r.Component)),O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),o(e),s(e)}))};n(16);o.a.render(Object(l.jsx)(p,{}),document.getElementById("root")),O()}},[[17,1,2]]]);
//# sourceMappingURL=main.51fba8cc.chunk.js.map