(this.webpackJsonpdriver=this.webpackJsonpdriver||[]).push([[0],{103:function(e,t,s){},107:function(e,t,s){},108:function(e,t,s){},349:function(e,t,s){},350:function(e,t,s){},351:function(e,t,s){},352:function(e,t,s){},354:function(e,t,s){"use strict";s.r(t);var n=s(9),c=s.n(n),i=s(62),a=s.n(i),r=s(0),l=s(6),j=s(4),b=s(5),d=s(356),o=s(8),h=s(97),u=(s(103),s(3));Object(d.b)({OrbitControls:h.a});var p=function(){var e=Object(d.d)(),t=e.camera,s=e.gl.domElement,c=Object(n.useRef)();return Object(d.c)((function(){return c.current.update()})),Object(u.jsx)("orbitControls",{ref:c,args:[t,s],autoRotate:!0,enableZoom:!1})};function O(){var e=Object(d.d)().scene,t=(new o.CubeTextureLoader).load(["/side1.jpg","/side2.jpg","/side3.jpg","/side4.jpg","/side5.jpg","/side6.jpg"]);return e.background=t,null}function x(){var e=Object(d.d)(),t=e.scene,s=e.gl,n=new o.WebGLCubeRenderTarget(256,{format:o.RGBFormat,generateMipmaps:!0,minFilter:o.LinearMipmapLinearFilter}),c=new o.CubeCamera(1,1e3,n);return c.position.set(0,0,0),t.add(c),Object(d.c)((function(){return c.update(s,t)})),Object(u.jsxs)("mesh",{visible:!0,position:[0,0,0],rotation:[0,0,0],castShadow:!0,children:[Object(u.jsx)("directionalLight",{intensity:.5}),Object(u.jsx)("sphereGeometry",{attach:"geometry",args:[2,32,32]}),Object(u.jsx)("meshBasicMaterial",{attach:"material",envMap:c.renderTarget.texture,color:"white",roughness:.1,metalness:1})]})}var m=function(){return Object(u.jsx)("div",{id:"rot",children:Object(u.jsxs)(d.a,{className:"canvas",children:[Object(u.jsx)(p,{}),Object(u.jsx)(x,{}),Object(u.jsx)(O,{})]})})},v=(s(107),s(108),function(e){var t=e.onRouteChange;return Object(u.jsxs)("div",{className:"tc  ",children:[Object(u.jsxs)("h2",{className:"mt7",children:[" ",Object(u.jsx)("span",{children:"W"}),"elcome to ",Object(u.jsx)("span",{children:"Wa"}),"yz"]}),Object(u.jsx)("input",{onClick:function(){return t("signin")},id:"rt",className:" br4 ph4 pv3 input-reset ba white bg-transparent grow pointer  ",type:"submit",value:"Get Started"})]})}),f=s(98),g=s.n(f),w=(s(349),{particles:{number:{value:150,density:{enable:!0,value_area:800}}}}),k=function(){return Object(u.jsx)(g.a,{className:"particles",params:w})},C=(s(350),s.p+"static/media/2121.5952c4d8.jpg"),y=function(e){Object(j.a)(s,e);var t=Object(b.a)(s);function s(){var e;return Object(r.a)(this,s),(e=t.call(this)).state={brktebutton:!1},e}return Object(l.a)(s,[{key:"openNav",value:function(){this.setState({brktebutton:!0})}},{key:"closeNav",value:function(){this.setState({brktebutton:!1})}},{key:"render",value:function(){var e=this;return Object(u.jsx)("div",{children:!1===this.state.brktebutton?Object(u.jsxs)("div",{class:"navbar navbar1",children:[Object(u.jsx)("div",{class:"navbar_left",children:Object(u.jsxs)("ul",{class:"menu",children:[Object(u.jsx)("li",{class:"li_img",children:Object(u.jsx)("img",{src:C,alt:"PDP",width:"100%",class:"img_pers"})}),Object(u.jsx)("li",{children:Object(u.jsxs)("div",{class:"dropdown",children:[Object(u.jsx)("button",{class:"dropbtn",children:" \u2228 "}),Object(u.jsxs)("div",{class:"dropdown-content",children:[Object(u.jsx)("a",{href:"#",children:"Link 1"}),Object(u.jsx)("a",{href:"#",children:"Link 2"}),Object(u.jsx)("a",{href:"#",children:"Link 3"})]})]})})]})}),Object(u.jsx)("span",{style:{cursor:"pointer"},onClick:function(){return e.openNav()},children:"\u2630"})]}):Object(u.jsxs)("div",{children:[Object(u.jsxs)("div",{class:"navbar navbar1",children:[Object(u.jsx)("div",{class:"navbar_left",children:Object(u.jsxs)("ul",{class:"menu",children:[Object(u.jsx)("li",{class:"li_img",children:Object(u.jsx)("img",{src:C,alt:"PDP",width:"100%",class:"img_pers"})}),Object(u.jsx)("li",{children:Object(u.jsxs)("div",{class:"dropdown",children:[Object(u.jsx)("button",{class:"dropbtn",children:" \u2228 "}),Object(u.jsxs)("div",{class:"dropdown-content",children:[Object(u.jsx)("a",{href:"#",children:"Link 1"}),Object(u.jsx)("a",{href:"#",children:"Link 2"}),Object(u.jsx)("a",{href:"#",children:"Link 3"})]})]})})]})}),Object(u.jsx)("span",{style:{cursor:"pointer"},onClick:function(){return e.closeNav()},children:"\u2630"})]}),Object(u.jsxs)("div",{id:"mySidenav",class:"sidenav",style:{width:"350px",marginTop:"60px"},children:[Object(u.jsx)("a",{href:"#",class:"closebtn",onClick:function(){return e.closeNav()},children:"\xd7"}),Object(u.jsx)("a",{href:"#",children:"Home"}),Object(u.jsx)("a",{href:"#",children:"Creer un covoiturage"}),Object(u.jsx)("a",{href:"#",children:"Mes Messages"}),Object(u.jsx)("a",{href:"#",children:"Contact"}),Object(u.jsx)("div",{class:"navbar_right",children:Object(u.jsx)("ul",{children:Object(u.jsxs)("li",{children:[Object(u.jsx)("a",{href:"#",onClick:function(){return e.props.onRouteChange("homep")},children:"Sign Out"})," "]})})})]})]})})}}]),s}(n.Component),R=function(e){var t=e.onRouteChange;return e.isSignedIn?Object(u.jsx)("nav",{style:{display:"flex",justifyContent:"flex-end"},children:Object(u.jsx)(y,{onRouteChange:t})}):Object(u.jsxs)("nav",{style:{display:"flex",justifyContent:"flex-end"},children:[Object(u.jsx)("p",{onClick:function(){return t("signin")},className:"f3 link dim black  pa3 pointer",children:" Sign In"}),Object(u.jsx)("p",{onClick:function(){return t("register")},className:"f3 link dim black  pa3 pointer",children:" Register"})]})},S=s(99),N=s.n(S),L=(s(351),s.p+"static/media/wayz.4b40602d.png"),_=function(){return Object(u.jsx)("div",{className:"ma4 mt0",children:Object(u.jsx)(N.a,{className:"Tilt br2 shadow-2",options:{max:55},style:{height:150,width:150},children:Object(u.jsxs)("div",{className:" Tilt-inner",children:[" ",Object(u.jsx)("img",{className:"mt3",alt:"",src:L})]})})})},I=(s(352),function(e){var t=e.onRouteChange;return Object(u.jsx)("article",{class:"br3 ba  b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center",children:Object(u.jsx)("div",{class:"pa4 black-80",children:Object(u.jsxs)("form",{class:"measure ",children:[Object(u.jsxs)("fieldset",{id:"sign_up",class:"ba b--transparent ph0 mh0",children:[Object(u.jsx)("legend",{class:" tc f1 fw6 ph0 mh0",children:"Sign In"}),Object(u.jsxs)("div",{class:"mt3",children:[Object(u.jsx)("label",{class:"db fw6 lh-copy f6",for:"email-address",children:"Email"}),Object(u.jsx)("input",{class:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address"})]}),Object(u.jsxs)("div",{class:"mv3",children:[Object(u.jsx)("label",{class:"db fw6 lh-copy f6",for:"password",children:"Password"}),Object(u.jsx)("input",{class:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password"})]})]}),Object(u.jsx)("div",{class:"",children:Object(u.jsx)("input",{onClick:function(){return t("home")},class:"sat b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Sign in"})}),Object(u.jsx)("div",{class:"lh-copy mt3",children:Object(u.jsx)("p",{onClick:function(){return t("register")},class:"tc f6 link dim black db pointer",children:"Register"})})]})})})}),M=function(e){var t=e.onRouteChange;return Object(u.jsx)("article",{class:"br3 ba  b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center",children:Object(u.jsx)("div",{class:"pa4 black-80",children:Object(u.jsxs)("form",{class:"measure ",children:[Object(u.jsxs)("fieldset",{id:"sign_up",class:"ba b--transparent ph0 mh0",children:[Object(u.jsx)("legend",{class:"tc f1 fw6 ph0 mh0",children:"Register"}),Object(u.jsxs)("div",{class:"mt3",children:[Object(u.jsx)("label",{class:"db fw6 lh-copy f6",for:"name",children:"Name"}),Object(u.jsx)("input",{class:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"text",name:"name",id:"name"})]}),Object(u.jsxs)("div",{class:"mt3",children:[Object(u.jsx)("label",{class:"db fw6 lh-copy f6",for:"email-address",children:"Email"}),Object(u.jsx)("input",{class:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address"})]}),Object(u.jsxs)("div",{class:"mv3",children:[Object(u.jsx)("label",{class:"db fw6 lh-copy f6",for:"password",children:"Password"}),Object(u.jsx)("input",{class:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password"})]})]}),Object(u.jsx)("div",{class:"",children:Object(u.jsx)("input",{onClick:function(){return t("signin")},class:"sat b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Register"})})]})})})},P=function(e){Object(j.a)(s,e);var t=Object(b.a)(s);function s(){var e;return Object(r.a)(this,s),(e=t.call(this)).onRouteChange=function(t){"home"===t?e.setState({isSignedIn:!0}):e.setState({isSignedIn:!1}),e.setState({route:t})},e.state={input:"",route:"homep",isSignedIn:!1},e}return Object(l.a)(s,[{key:"render",value:function(){return Object(u.jsx)("div",{children:"homep"===this.state.route?Object(u.jsxs)("div",{children:[Object(u.jsx)(m,{}),Object(u.jsx)(v,{onRouteChange:this.onRouteChange})]}):Object(u.jsxs)("div",{children:[Object(u.jsx)(k,{}),Object(u.jsx)(R,{isSignedIn:this.state.isSignedIn,onRouteChange:this.onRouteChange}),Object(u.jsx)(_,{}),"signin"===this.state.route?Object(u.jsx)(I,{onRouteChange:this.onRouteChange}):"home"===this.state.route?Object(u.jsx)("div",{}):Object(u.jsx)(M,{onRouteChange:this.onRouteChange})]})})}}]),s}(n.Component),T=(s(353),document.getElementById("root"));a.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(P,{})}),T)}},[[354,1,2]]]);
//# sourceMappingURL=main.546a576b.chunk.js.map