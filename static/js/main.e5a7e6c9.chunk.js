(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(2),i=n.n(r),s=n(3),u=n(4),o=n(5),c=n(7),p=n(6),m=n(8),h=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,l=new Array(a),r=0;r<a;r++)l[r]=arguments[r];return(n=Object(c.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(l)))).state={penniesInput:0,dollars:0,quarters:0,dimes:0,nickels:0,pennies:0},n.handleInputChange=function(e){console.log(e.target.value),n.setState(Object(s.a)({},e.target.id,e.target.value))},n.handleInputSubmit=function(e){e.preventDefault(),n.penniesConvert(n.state.penniesInput)},n.penniesConvert=function(e){var t=Math.floor(e/100);n.setState({dollars:t});var a=e%100,l=Math.floor(a/25);n.setState({quarters:l}),a%=25;var r=Math.floor(a/10);n.setState({dimes:r}),a%=10;var i=Math.floor(a/5);n.setState({nickels:i});var s=(a%=5)/1;n.setState({pennies:s})},n}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{id:"data-container"},l.a.createElement("form",{onSubmit:this.handleInputSubmit},l.a.createElement("label",{htmlFor:"penniesInput"},"Pennies Input: "),l.a.createElement("input",{id:"penniesInput",type:"number",value:this.state.penniesInput,onChange:this.handleInputChange}),l.a.createElement("button",null,"Submit")),l.a.createElement("div",{id:"results-container"},l.a.createElement("label",null,"Dollars:",l.a.createElement("input",{type:"text",value:this.state.dollars})),l.a.createElement("label",null,"Quarters:",l.a.createElement("input",{type:"text",value:this.state.quarters})),l.a.createElement("label",null,"Dimes:",l.a.createElement("input",{type:"text",value:this.state.dimes})),l.a.createElement("label",null,"Nickels:",l.a.createElement("input",{type:"text",value:this.state.nickels})),l.a.createElement("label",null,"Pennies:",l.a.createElement("input",{type:"text",value:this.state.pennies}))))}}]),t}(l.a.Component),v=(n(15),function(){return l.a.createElement("div",{id:"app"},l.a.createElement("h1",null,"Coins Converter"),l.a.createElement("h3",null,"Convert your pennies into Money"),l.a.createElement(h,null),l.a.createElement("small",null,"More conversions coming soon!"))});i.a.render(l.a.createElement(v,null),document.getElementById("root"))},9:function(e,t,n){e.exports=n(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.e5a7e6c9.chunk.js.map