(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(e,t,a){e.exports=a(45)},30:function(e,t,a){},32:function(e,t,a){},37:function(e,t,a){},40:function(e,t,a){},43:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),l=a(17),r=a.n(l),i=(a(30),a(32),a(34),a(6)),o=a(0);a(37);var s=function(){return c.a.createElement("div",{className:"home"},c.a.createElement("h1",null,"Chaos Game"),c.a.createElement("div",{className:"choices"},c.a.createElement(i.b,{to:"/Triangle"},c.a.createElement("button",{className:"triangle choice"})),c.a.createElement(i.b,{to:"/Hexagon"},c.a.createElement("button",{className:"hexagon choice"}))))},u=a(3);a(40);var m=function(){var e,t=Object(n.useState)(e),a=Object(u.a)(t,2),l=a[0],r=a[1],o=Object(n.useState)(!0),s=Object(u.a)(o,2),m=s[0],h=s[1],d=Object(n.useRef)(null),f=Object(n.useState)(null),E=Object(u.a)(f,2),w=E[0],v=E[1],b=w,g={x:window.innerWidth/2,y:window.innerHeight/2},x=.8*window.innerHeight,N=[[g.x,g.y-.58*x],[g.x-x/2,g.y+.29*x],[g.x+x/2,g.y+.29*x]],y={x:954,y:387};Object(n.useEffect)(function(){var e=d.current,t=e.getContext("2d");e.width=window.innerWidth,e.height=window.innerHeight,t.translate(0,.12*window.innerHeight),v(t)},[d]);var j=function(){var e=Math.floor(3*Math.random());y={x:(y.x+N[e][0])/2,y:(y.y+N[e][1])/2},b.fillRect(y.x,y.y,1,1)};return c.a.createElement("div",{className:"Triangle"},m&&c.a.createElement("button",{className:"startButton",onMouseUp:function(){b.fillStyle="white",b.fillRect(N[0][0],N[0][1],3,3),b.fillRect(N[1][0],N[1][1],3,3),b.fillRect(N[2][0],N[2][1],3,3),e=setInterval(j,.25),r(e),h(!m)}}," START"),c.a.createElement("div",{className:"headerDiv"},c.a.createElement("h1",{className:"header"},"Let the Chaos Begin")),c.a.createElement("div",null,c.a.createElement("canvas",{className:"canvas",ref:d})),c.a.createElement("div",{className:"controlpanel"},c.a.createElement(i.b,{to:"/"},c.a.createElement("button",{className:"homeButton"},"\u2039")),c.a.createElement("button",{className:"clearButton",onClick:function(){h(!0),w.clearRect(0,0,d.current.width,d.current.height),clearInterval(l)}},"\u27f2")))};a(43);var h=function(){var e,t=Object(n.useState)(e),a=Object(u.a)(t,2),l=a[0],r=a[1],o=Object(n.useState)(!0),s=Object(u.a)(o,2),m=s[0],h=s[1],d=Object(n.useState)({x:0,y:0}),f=Object(u.a)(d,2),E=f[0],w=(f[1],Object(n.useRef)(null)),v=Object(n.useState)(null),b=Object(u.a)(v,2),g=b[0],x=b[1],N=g,y=(E.x,E.y,{x:window.innerWidth/2,y:window.innerHeight/2}),j=.4*window.innerHeight,O=[[y.x,y.y-j],[y.x-.86*j,y.y-j/2],[y.x-.86*j,y.y+j/2],[y.x+.86*j,y.y-j/2],[y.x+.86*j,y.y+j/2],[y.x,y.y+j]],R=Math.floor(6*Math.random()),p=[O[R][0],O[R][1]];Object(n.useEffect)(function(){var e=w.current,t=e.getContext("2d");e.width=window.innerWidth,e.height=window.innerHeight,x(t),t.translate(0,.05*window.innerHeight)},[w]);var S=function(){var e=Math.floor(6*Math.random());p[0]=(1*p[0]+2*O[e][0])/3,p[1]=(1*p[1]+2*O[e][1])/3,N.fillRect(p[0],p[1],1,1)};return c.a.createElement("div",{className:"Hexagon"},m&&c.a.createElement("button",{className:"startButton",onMouseUp:function(){N.fillStyle="white",N.fillRect(O[0][0],O[0][1],3,3),N.fillRect(O[5][0],O[5][1],3,3),N.fillRect(O[1][0],O[1][1],3,3),N.fillRect(O[2][0],O[2][1],3,3),N.fillRect(O[3][0],O[3][1],3,3),N.fillRect(O[4][0],O[4][1],3,3),e=setInterval(S,.25),r(e),h(!m)}}," START"),c.a.createElement("div",{className:"headerDiv"},c.a.createElement("h1",{className:"header"},"Let the Chaos Begin")),c.a.createElement("canvas",{className:"canvas",ref:w}),c.a.createElement("div",{className:"controlpanel"},c.a.createElement(i.b,{to:"/"},c.a.createElement("button",{className:"homeButton"},"\u2039")),c.a.createElement("button",{className:"clearButton",onClick:function(){h(!0),g.clearRect(0,0,w.current.width,w.current.height),clearInterval(l)}}," \u27f2")))};var d=function(){return c.a.createElement(i.a,null,c.a.createElement("div",{className:"App"},c.a.createElement(o.c,null,c.a.createElement(o.a,{path:"/",element:[c.a.createElement(s,null)]}),c.a.createElement(o.a,{path:"/Triangle",element:[c.a.createElement(m,null)]}),c.a.createElement(o.a,{path:"/Hexagon",element:[c.a.createElement(h,null)]}))))};r.a.createRoot(document.getElementById("root")).render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(d,null)))}},[[21,2,1]]]);
//# sourceMappingURL=main.f1018c28.chunk.js.map