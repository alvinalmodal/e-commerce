(this["webpackJsonpe-commerce"]=this["webpackJsonpe-commerce"]||[]).push([[0],{17:function(e,t,c){},19:function(e,t,c){},26:function(e,t,c){"use strict";c.r(t);var a=c(2),n=c.n(a),s=c(12),r=c.n(s),l=(c(17),c.p,c(18),c(19),c(3)),i=c(4),o=c(6),j=c(5),d=c(0),b=function(e){Object(o.a)(c,e);var t=Object(j.a)(c);function c(){var e;Object(l.a)(this,c);for(var a=arguments.length,n=new Array(a),s=0;s<a;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={},e}return Object(i.a)(c,[{key:"render",value:function(){return Object(d.jsx)(n.a.Fragment,{children:Object(d.jsx)("header",{children:Object(d.jsxs)("nav",{className:"navbar navbar-expand-md navbar-dark fixed-top bg-dark",children:[Object(d.jsx)("a",{className:"navbar-brand",href:"#",children:"E-commerce"}),Object(d.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarCollapse","aria-controls":"navbarCollapse","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(d.jsx)("span",{className:"navbar-toggler-icon"})}),Object(d.jsx)("div",{className:"collapse navbar-collapse",id:"navbarCollapse",children:Object(d.jsxs)("ul",{className:"navbar-nav ml-auto mr-5",children:[Object(d.jsx)("li",{className:"nav-item active",children:Object(d.jsxs)("a",{className:"nav-link",href:"#",children:["Products ",Object(d.jsx)("span",{className:"sr-only",children:"(current)"})]})}),Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)("a",{className:"nav-link",href:"#",children:"Cart"})}),Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)("a",{className:"nav-link",href:"#",children:"My Account"})})]})})]})})})}}]),c}(a.Component),m=c(7),h=c(8),O=function(e){Object(o.a)(c,e);var t=Object(j.a)(c);function c(){var e;Object(l.a)(this,c);for(var a=arguments.length,n=new Array(a),s=0;s<a;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={},e}return Object(i.a)(c,[{key:"render",value:function(){var e=this.props,t=e.imageUrl,c=e.onImageSelect,a=e.alt;return Object(d.jsx)(n.a.Fragment,{children:Object(d.jsx)("div",{onMouseEnter:function(){return c(t)},children:Object(d.jsx)("img",{src:t,alt:a})})})}}]),c}(a.Component),u=function(e){Object(o.a)(c,e);var t=Object(j.a)(c);function c(){var e;Object(l.a)(this,c);for(var a=arguments.length,n=new Array(a),s=0;s<a;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={selectedImageUrl:"https://i.postimg.cc/htWpbH6Y/remote.png",productHoverState:"product-card shadow mb-1 mt-5"},e.handleImageSelect=function(t){e.setState({selectedImageUrl:t})},e.handleProductFocus=function(){e.setState({productHoverState:"product-card shadow-lg mb-1 mt-4"})},e.handleProductUnfocus=function(){e.setState({productHoverState:"product-card shadow mb-1 mt-5"})},e}return Object(i.a)(c,[{key:"render",value:function(){var e=this,t=this.state,c=t.selectedImageUrl,a=t.productHoverState;return Object(d.jsx)(n.a.Fragment,{children:Object(d.jsx)("div",{className:"product-container",onMouseEnter:function(){return e.handleProductFocus()},onMouseLeave:function(){return e.handleProductUnfocus()},children:Object(d.jsxs)("div",{className:a,children:[Object(d.jsxs)("div",{className:"product-content-1",children:[Object(d.jsx)("div",{className:"heart",children:Object(d.jsx)(m.a,{icon:h.a})}),Object(d.jsx)("div",{className:"main-image",children:Object(d.jsx)("img",{src:c,alt:"remote ps4 controller"})})]}),Object(d.jsx)("div",{className:"product-content-2",children:Object(d.jsxs)("div",{className:"sub-image",children:[Object(d.jsx)(O,{imageUrl:"https://i.postimg.cc/htWpbH6Y/remote.png",onImageSelect:this.handleImageSelect,alt:"test"}),Object(d.jsx)(O,{imageUrl:"https://i.postimg.cc/Vv24hT6d/remote1.png",onImageSelect:this.handleImageSelect,alt:"test"}),Object(d.jsx)(O,{imageUrl:"https://i.postimg.cc/ZKywNT73/remote2.png",onImageSelect:this.handleImageSelect,alt:"test"}),Object(d.jsx)(O,{imageUrl:"https://i.postimg.cc/4408nK5s/remote3.png",onImageSelect:this.handleImageSelect,alt:"test"})]})}),Object(d.jsxs)("div",{className:"product-content-3",children:[Object(d.jsxs)("div",{className:"branding",children:[Object(d.jsx)("span",{children:"Dualshock 4 controller"}),Object(d.jsx)("h4",{children:"Playstation"})]}),Object(d.jsxs)("div",{className:"ratings",children:[Object(d.jsx)("span",{children:Object(d.jsx)(m.a,{icon:h.b})}),Object(d.jsx)("span",{children:Object(d.jsx)(m.a,{icon:h.b})}),Object(d.jsx)("span",{children:Object(d.jsx)(m.a,{icon:h.b})}),Object(d.jsx)("span",{children:Object(d.jsx)(m.a,{icon:h.b})}),Object(d.jsx)("span",{children:Object(d.jsx)(m.a,{icon:h.b})})]}),Object(d.jsxs)("div",{className:"paragraph",children:["The DualShock 4 (CUH-ZCT1) is the PlayStation 4's controller...",Object(d.jsx)("span",{children:"Read More"})]}),Object(d.jsxs)("div",{className:"price",children:[Object(d.jsx)("span",{children:"$"}),Object(d.jsx)("span",{children:"55"}),Object(d.jsx)("div",{className:"space"}),Object(d.jsx)("a",{href:"#",children:"ADD TO CART"})]})]})]})})})}}]),c}(a.Component),p=function(e){Object(o.a)(c,e);var t=Object(j.a)(c);function c(){var e;Object(l.a)(this,c);for(var a=arguments.length,n=new Array(a),s=0;s<a;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={},e}return Object(i.a)(c,[{key:"render",value:function(){return Object(d.jsx)(n.a.Fragment,{children:Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:"col-sm-6 col-md-4 col-lg-3 mt-5",children:Object(d.jsx)(u,{})}),Object(d.jsx)("div",{className:"col-sm-6 col-md-4 col-lg-3 mt-5",children:Object(d.jsx)(u,{})}),Object(d.jsx)("div",{className:"col-sm-6 col-md-4 col-lg-3 mt-5",children:Object(d.jsx)(u,{})}),Object(d.jsx)("div",{className:"col-sm-6 col-md-4 col-lg-3 mt-5",children:Object(d.jsx)(u,{})})]})})}}]),c}(a.Component);var x=function(){return Object(d.jsxs)("div",{className:"App container-fluid",children:[Object(d.jsx)(b,{}),Object(d.jsx)(p,{})]})},v=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,27)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),a(e),n(e),s(e),r(e)}))};r.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(x,{})}),document.getElementById("root")),v()}},[[26,1,2]]]);
//# sourceMappingURL=main.066842e7.chunk.js.map