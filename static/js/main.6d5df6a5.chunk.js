(window["webpackJsonpmonsters-rolodex"]=window["webpackJsonpmonsters-rolodex"]||[]).push([[0],[,,,,,,function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},,,function(e,t,n){e.exports=n(19)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(2),s=n.n(r),c=(n(14),n(3)),l=n(4),i=n(7),m=n(5),u=n(8),h=n(6),d=n.n(h),f=(n(15),n(16),n(17),function(e){e.monster;return o.a.createElement("div",{className:"card-container"},o.a.createElement("img",{alt:"monster",src:"https://robohash.org/".concat(e.monster.id,"?set=set4&size=180x180")}),o.a.createElement("h2",null," ",e.monster.name," "),o.a.createElement("p",null," ",e.monster.email," "))}),p=function(e){return console.log(e),o.a.createElement("div",{className:"card-list"},e.monsters.map(function(e){return o.a.createElement(f,{key:e.id,monster:e})}))},g=(n(18),function(e){e.placeholder;var t=e.handleChange;return o.a.createElement("input",{className:"search-box",type:"search",placeholder:"search cats",onChange:t})}),v=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(i.a)(this,Object(m.a)(t).call(this))).handleChange=function(t){e.setState({searchField:t.target.value})},e.state={monsters:[],searchField:""},e}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then(function(e){return e.json()}).then(function(t){return e.setState({monsters:t})})}},{key:"render",value:function(){var e=this.state,t=e.monsters,n=e.searchField,a=t.filter(function(e){return e.name.toLowerCase().includes(n.toLowerCase())});return o.a.createElement("div",{className:"App"},o.a.createElement("img",{src:d.a,className:"App-logo",alt:"logo"}),o.a.createElement("h1",null,"Cats Cards"),o.a.createElement(g,{handleChange:this.handleChange}),o.a.createElement(p,{monsters:a}))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[9,1,2]]]);
//# sourceMappingURL=main.6d5df6a5.chunk.js.map