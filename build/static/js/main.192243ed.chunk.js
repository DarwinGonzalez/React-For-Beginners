(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){e.exports=a(25)},23:function(e,t,a){},25:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(12),l=a(4),o=a(5),s=a(8),u=a(6),i=a(9),m=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("header",{className:"top"},r.a.createElement("h1",null,"Catch",r.a.createElement("span",{className:"ofThe"},r.a.createElement("span",{className:"of"},"Of"),r.a.createElement("span",{className:"the"},"The"),"he"),"Day"),r.a.createElement("h3",{className:"tagline"},r.a.createElement("span",null,this.props.tagline)))}}]),t}(r.a.Component),h=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("header",{className:"order"},"Order!!!")}}]),t}(r.a.Component),p=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"inventory"},"Inventory!!!")}}]),t}(r.a.Component),f=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"catch-of-the-day"},r.a.createElement("div",{className:"menu"},r.a.createElement(m,{tagline:"Fresh Seafood Market"})),r.a.createElement(p,null),r.a.createElement(h,null))}}]),t}(r.a.Component),d=a(27),b=a(29),y=a(28);function v(e){return e[Math.floor(Math.random()*e.length)]}function O(){var e=["adorable","beautiful","clean","drab","elegant","fancy","glamorous","handsome","long","magnificent","old-fashioned","plain","quaint","sparkling","ugliest","unsightly","angry","bewildered","clumsy","defeated","embarrassed","fierce","grumpy","helpless","itchy","jealous","lazy","mysterious","nervous","obnoxious","panicky","repulsive","scary","thoughtless","uptight","worried"];return"".concat(v(e),"-").concat(v(e),"-").concat(v(["women","men","children","teeth","feet","people","leaves","mice","geese","halves","knives","wives","lives","elves","loaves","potatoes","tomatoes","cacti","foci","fungi","nuclei","syllabuses","analyses","diagnoses","oases","theses","crises","phenomena","criteria","data"]))}var j=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).myInput=r.a.createRef(),a.goToStore=function(e){e.preventDefault();var t=a.myInput.value.value;console.log(t),a.props.history.push("/store/".concat(t))},a}return Object(i.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("form",{className:"store-selector",onSubmit:this.goToStore},r.a.createElement("h2",null,"Please Enter a Store"),r.a.createElement("input",{type:"text",ref:this.myInput,required:!0,placeholder:"Store name",defaultValue:O()}),r.a.createElement("button",{type:"submit"},"Visit Store "))}}]),t}(r.a.Component),E=function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Not Found!!!???"))},g=function(){return r.a.createElement(d.a,null,r.a.createElement(b.a,null,r.a.createElement(y.a,{exact:!0,path:"/",component:j}),r.a.createElement(y.a,{path:"/store/:storeId",component:f}),r.a.createElement(y.a,{component:E})))};a(23);Object(c.render)(r.a.createElement(g,null),document.querySelector("#main"))}},[[14,2,1]]]);
//# sourceMappingURL=main.192243ed.chunk.js.map