(this["webpackJsonpmatching-game"]=this["webpackJsonpmatching-game"]||[]).push([[0],{13:function(t,e,a){},15:function(t,e,a){"use strict";a.r(e);var n=a(1),s=a.n(n),i=a(8),c=a.n(i),r=(a(13),a(4)),o=a(2),u=a(3),h=a(6),l=a(5),f=a(0),d=function(t){Object(h.a)(a,t);var e=Object(l.a)(a);function a(){return Object(o.a)(this,a),e.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){var t=this;return Object(f.jsx)("button",{className:"square",onClick:function(){return t.props.onClick()},children:this.props.face?this.props.value:"face down"})}}]),a}(n.Component);function p(t){return Object(f.jsx)("div",{className:"board",style:{display:"grid",gridTemplateColumns:"repeat(".concat(t.size,", 1fr)")},children:Object(r.a)(Array(Math.pow(t.size,2)).keys()).map((function(e){return Object(f.jsx)(d,{value:t.list[e],onClick:function(){return t.onClick(e)},face:t.face[e]},e)}))})}var j=function(t){Object(h.a)(a,t);var e=Object(l.a)(a);function a(t){var n;Object(o.a)(this,a),(n=e.call(this,t)).state={size:3,face:Array(2),data:[],cur:[],finish:[],point:0};for(var s=Object(r.a)(Array(Math.pow(n.state.size,2)).fill(!1)),i=0;i<Math.pow(n.state.size,2)/2;i++){var c=n.getRandomInt(100);n.state.data.push(c),n.state.data.push(c)}return n.shuffle(n.state.data),n.state.face=s,n.state.finish=Array(Math.pow(n.state.size,2)).fill(!1),n}return Object(u.a)(a,[{key:"detect",value:function(){var t=this.state,e=t.size,a=t.face,n=t.data,s=t.cur,i=t.finish,c=t.point;console.log(s),2===s.length&&(n[s[0]]===n[s[1]]&&(i[s[0]]=!0,i[s[1]]=!0,c++,console.log("bug")),a=i.slice(),s=[],setTimeout(this.setState({size:e,face:a,data:n,cur:s,finish:i,point:c}),1e3))}},{key:"handleClick",value:function(t){if(!this.state.finish[t]){var e=this.state.cur,a=this.state.face;e=e.concat(t),a[t]=!a[t],this.setState({cur:e,face:a}),this.detect()}}},{key:"getRandomInt",value:function(t){return Math.floor(Math.random()*t)}},{key:"shuffle",value:function(t){t.sort((function(){return Math.random()-.5}))}},{key:"render",value:function(){var t=this;return Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)("h1",{children:this.state.point}),Object(f.jsx)(p,{size:this.state.size,onClick:function(e){return t.handleClick(e)},face:this.state.face,list:this.state.data})]})}}]),a}(n.Component);c.a.render(Object(f.jsx)(s.a.StrictMode,{children:Object(f.jsx)(j,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.a6a96b6b.chunk.js.map