(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{15:function(e,t,a){e.exports=a(29)},20:function(e,t,a){},21:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},22:function(e,t,a){},23:function(e,t,a){},29:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(3),s=a.n(r),o=(a(20),a(12)),c=a(8),l=a(9),u=a(2),m=a(14),d=a(13),h=(a(21),a(22),a(23),a(10)),p=a(6);var f=function(e){var t=e.items.map((function(t){return i.a.createElement("div",{className:"list",key:t.key},i.a.createElement("p",null,i.a.createElement("input",{type:"text",id:t.key,value:t.text,onChange:function(a){e.setUpdate(a.target.value,t.key)}}),i.a.createElement("span",null,i.a.createElement(h.a,{className:"faicons",icon:"trash",onClick:function(){return e.deleteItem(t.key)}}))))}));return i.a.createElement("div",null,i.a.createElement(p.a,{duration:300,easing:"ease-in-out"},t))},v=a(4),k=a(11);v.b.add(k.a);var y=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={items:[],currentItem:{text:"",key:""}},n.handleInput=n.handleInput.bind(Object(u.a)(n)),n.addItem=n.addItem.bind(Object(u.a)(n)),n.deleteItem=n.deleteItem.bind(Object(u.a)(n)),n.setUpdate=n.setUpdate.bind(Object(u.a)(n)),n}return Object(l.a)(a,[{key:"handleInput",value:function(e){this.setState({currentItem:{text:e.target.value,key:Date.now()}})}},{key:"addItem",value:function(e){e.preventDefault();var t=this.state.currentItem;if(console.log(t),""!==t.text){var a=[].concat(Object(o.a)(this.state.items),[t]);this.setState({items:a,currentItem:{text:"",key:""}})}}},{key:"deleteItem",value:function(e){var t=this.state.items.filter((function(t){return t.key!==e}));this.setState({items:t})}},{key:"setUpdate",value:function(e,t){var a=this.state.items;a.map((function(a){a.key===t&&(a.text=e)})),this.setState({items:a})}},{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement("header",null,i.a.createElement("form",{id:"to-do-form",onSubmit:this.addItem},i.a.createElement("input",{type:"text",placeholder:"Enter Text",value:this.state.currentItem.text,onChange:this.handleInput}),i.a.createElement("button",{type:"submit"},"Add"))),i.a.createElement(f,{items:this.state.items,deleteItem:this.deleteItem,setUpdate:this.setUpdate}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[15,1,2]]]);
//# sourceMappingURL=main.19ec9170.chunk.js.map