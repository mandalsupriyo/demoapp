(window.webpackJsonpgithubsearch=window.webpackJsonpgithubsearch||[]).push([[0],{31:function(e,t,a){e.exports=a.p+"static/media/spinner.21cf2782.gif"},32:function(e,t,a){e.exports=a(61)},60:function(e,t,a){},61:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(28),l=a.n(c),o=a(6),s=a(7),u=function(e){var t=e.icon,a=e.title;return r.a.createElement("nav",{className:"navbar bg-primary"},r.a.createElement("h2",null,r.a.createElement("i",{className:t})," ",a),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(o.b,{to:"/"},"Home")),r.a.createElement("li",null,r.a.createElement(o.b,{to:"/about"},"About"))))};u.defaultProps={title:"Github Finder",icon:"fab fa-github"};var i=u,m=Object(n.createContext)(),p=function(){var e=Object(n.useContext)(m);return null!==e.alert&&r.a.createElement("div",{className:"alert alert-".concat(e.alert.type)},r.a.createElement("i",{className:"fa fa-info-circle"}),"  ",e.alert.msg)},E=function(){return r.a.createElement(n.Fragment,null,r.a.createElement("h1",null,"404 Not Found"),r.a.createElement("p",{className:"lead"},"The page you are looking for doesn't exist..."))},b=function(){return r.a.createElement(n.Fragment,null,r.a.createElement("h1",null,"About This App"),r.a.createElement("p",null,"App to Search Github USers"),r.a.createElement("p",null,"Version: 1.0.0"))},d=function(e){var t=e.user,a=t.login,n=t.avatar_url;t.html_url;return r.a.createElement("div",{className:"card text-center"},r.a.createElement("img",{src:n,alt:"User Avater",className:"round-img",style:{width:"60px"}}),r.a.createElement("h3",null,a),r.a.createElement("div",null,r.a.createElement(o.b,{to:"user/".concat(a),className:"btn btn-dark btn-sm my-1"},"More")))},f=a(31),g=a.n(f),h=function(){return r.a.createElement(n.Fragment,null,r.a.createElement("img",{src:g.a,alt:"Loading...",style:{width:"200px",margin:"auto",display:"block"}}))},v=Object(n.createContext)(),y={display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gridGap:"1rem"},O=function(){var e=Object(n.useContext)(v),t=e.loading,a=e.users;return t?r.a.createElement(h,null):r.a.createElement("div",{style:y},a.map(function(e){return r.a.createElement(d,{key:e.id,user:e})}))},j=a(9),w=function(){var e=Object(n.useState)(""),t=Object(j.a)(e,2),a=t[0],c=t[1],l=Object(n.useContext)(v),o=Object(n.useContext)(m);return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),""!==a?(l.searchUsers(a),c("")):o.setAlert("Please Enter Something","info")}},r.a.createElement("div",{className:"form"},r.a.createElement("input",{type:"text",name:"text",placeholder:"Search Users...",value:a,onChange:function(e){c(e.target.value)}}),r.a.createElement("input",{type:"submit",value:"Search",className:"btn btn-dark btn-block"}))),l.users.length>0&&r.a.createElement("button",{className:"btn btn-warnning btn-block",onClick:l.userClear},"Clear"))},N=function(){return r.a.createElement(n.Fragment,null,r.a.createElement(w,null),r.a.createElement(O,null))},_=function(e){var t=e.repo;return r.a.createElement("div",{className:"card"},r.a.createElement("h3",null,r.a.createElement("a",{href:t.html_url},t.name)))},S=function(e){return e.repos.map(function(e){return r.a.createElement(_,{repo:e,key:e.id})})},x=function(e){var t=e.match,a=Object(n.useContext)(v);Object(n.useEffect)(function(){a.getUser(t.params.login),a.getUserRepos(t.params.login)},[]);var c=a.user,l=c.name,s=c.avatar_url,u=c.location,i=c.bio,m=c.blog,p=c.html_url,E=c.followers,b=c.following,d=c.login,f=c.public_repos,g=c.public_gists,y=c.hireable,O=c.company;return a.loading?r.a.createElement(h,null):r.a.createElement(n.Fragment,null,r.a.createElement(o.b,{to:"/",className:"btn btn-light"},"Back To Search"),"Hireable: "," "," ",y?r.a.createElement("i",{className:"fas fa-check text-success"}):r.a.createElement("i",{className:"fas fa-times-circle text-danger"}),r.a.createElement("div",{className:"card grid-2"},r.a.createElement("div",{className:"all-center"},r.a.createElement("img",{src:s,alt:"avatar",className:"round-img",style:{width:"150px"}}),r.a.createElement("h1",null,l),r.a.createElement("p",null,"Location: ",u)),r.a.createElement("div",null,i&&r.a.createElement(n.Fragment,null,r.a.createElement("h3",null,"Bio"),r.a.createElement("p",null,i)),r.a.createElement("a",{href:p,className:"btn btn-dark my-1"},"Visit Github Profile"),r.a.createElement("ul",null,r.a.createElement("li",null,d&&r.a.createElement(n.Fragment,null,r.a.createElement("strong",null,"Username: ")," ",d)),r.a.createElement("li",null,O&&r.a.createElement(n.Fragment,null,r.a.createElement("strong",null,"Company: ")," ",O)),r.a.createElement("li",null,m&&r.a.createElement(n.Fragment,null,r.a.createElement("strong",null,"Website: ")," ",m))))),r.a.createElement("div",{className:"card text-center"},r.a.createElement("div",{className:"badge badge-primary"},"Followers: ",E),r.a.createElement("div",{className:"badge badge-success"},"Following: ",b),r.a.createElement("div",{className:"badge badge-light"},"Public Repos: ",f),r.a.createElement("div",{className:"badge badge-dark"},"Public Gists: ",g)),r.a.createElement(S,{repos:a.repos}))},P=a(8),C=a.n(P),R=a(13),U=a(14),k=a.n(U),T=a(12);function A(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function D(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?A(a,!0).forEach(function(t){Object(T.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):A(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var F,G,L=function(e,t){switch(t.type){case"SEARCH_USERS":return D({},e,{users:t.payload,loading:!1});case"SET_LOADING":return D({},e,{loading:!0});case"CLEAR_USERS":return D({},e,{loading:!1,users:[]});case"GET_USER":return D({},e,{user:t.payload,loading:!1});case"GET_REPOS":return D({},e,{repos:t.payload,loading:!1});default:return e}};F=Object({NODE_ENV:"production",PUBLIC_URL:"/demoapp"}).GITHUB_CLIENT_ID,G=Object({NODE_ENV:"production",PUBLIC_URL:"/demoapp"}).GITHUB_CLIENT_SECRET;var I=function(e){var t=Object(n.useReducer)(L,{users:[],user:{},repos:[],loading:!1}),a=Object(j.a)(t,2),c=a[0],l=a[1],o=function(){var e=Object(R.a)(C.a.mark(function e(t){var a;return C.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return i(),e.next=3,k.a.get("https://api.github.com/search/users?q=".concat(t,"&client_id=").concat(F,"&client_secret=").concat(G));case 3:a=e.sent,l({type:"SEARCH_USERS",payload:a.data.items});case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),s=function(){var e=Object(R.a)(C.a.mark(function e(t){var a;return C.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return i(),e.next=3,k.a.get("https://api.github.com/users/".concat(t,"?client_id=").concat(F,"&client_secret=").concat(G));case 3:a=e.sent,l({type:"GET_USER",payload:a.data});case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),u=function(){var e=Object(R.a)(C.a.mark(function e(t){var a;return C.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return i(),e.next=3,k.a.get("https://api.github.com/users/".concat(t,"/repos?per_page=5&sort=created:asc&client_id=").concat(F,"&client_secret=").concat(G));case 3:a=e.sent,l({type:"GET_REPOS",payload:a.data});case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),i=function(){return l({type:"SET_LOADING"})};return r.a.createElement(v.Provider,{value:{users:c.users,user:c.user,repos:c.repos,loading:c.loading,searchUsers:o,userClear:function(){return l({type:"CLEAR_USERS"})},getUser:s,getUserRepos:u}},e.children)};function B(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}var H=function(e,t){switch(t.type){case"SET_ALERT":return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?B(a,!0).forEach(function(t){Object(T.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):B(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}({},e,{alert:t.payload});default:return e}},V=function(e){var t=function(e,t){o({type:"SET_ALERT",payload:{msg:e,cls:t}})},a=Object(n.useReducer)(H,{alert:null}),c=Object(j.a)(a,2),l=c[0],o=c[1];return r.a.createElement(m.Provider,{value:{alert:l.alert,showAlert:function(e,a){t({msg:e,cls:a}),setTimeout(function(){t(null)},2e3)},setAlert:t}},e.children)},J=(a(60),function(){return r.a.createElement(I,null,r.a.createElement(V,null,r.a.createElement(o.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(i,{title:"Github Finder",icon:"fab fa-github"}),r.a.createElement("div",{className:"container"},r.a.createElement(p,null),r.a.createElement(s.c,null,r.a.createElement(s.a,{exact:!0,path:"/",component:N}),r.a.createElement(s.a,{exact:!0,path:"/user/:login",component:x}),r.a.createElement(s.a,{exact:!0,path:"/about",component:b}),r.a.createElement(s.a,{path:"/about",component:E}),r.a.createElement(s.a,{component:E})))))))});l.a.render(r.a.createElement(J,null),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.0c146683.chunk.js.map