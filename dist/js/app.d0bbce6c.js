(function(e){function t(t){for(var n,o,i=t[0],s=t[1],l=t[2],d=0,b=[];d<i.length;d++)o=i[d],Object.prototype.hasOwnProperty.call(c,o)&&c[o]&&b.push(c[o][0]),c[o]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);u&&u(t);while(b.length)b.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],n=!0,i=1;i<a.length;i++){var s=a[i];0!==c[s]&&(n=!1)}n&&(r.splice(t--,1),e=o(o.s=a[0]))}return e}var n={},c={app:0},r=[];function o(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=n,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(a,n,function(t){return e[t]}.bind(null,n));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var u=s;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"0b09":function(e,t,a){},"0c91":function(e,t,a){},"2abc":function(e,t,a){"use strict";a("d785")},3572:function(e,t,a){},"476e":function(e,t,a){"use strict";a("539d")},"539d":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("7a23"),c={id:"nav"},r=Object(n["h"])("Home"),o=Object(n["h"])(" | "),i=Object(n["h"])("Introduction"),s=Object(n["h"])(" | "),l=Object(n["h"])("NaTour"),u=Object(n["h"])(" | "),d=Object(n["h"])("LoopLAB"),b=Object(n["h"])(" | "),f=Object(n["h"])("Google Fonts Clone");function p(e,t){var a=Object(n["z"])("router-link"),p=Object(n["z"])("router-view");return Object(n["s"])(),Object(n["e"])("div",null,[Object(n["f"])("nav",c,[Object(n["i"])(a,{to:"/"},{default:Object(n["F"])((function(){return[r]})),_:1}),o,Object(n["i"])(a,{to:"/intro"},{default:Object(n["F"])((function(){return[i]})),_:1}),s,Object(n["i"])(a,{to:"/natour"},{default:Object(n["F"])((function(){return[l]})),_:1}),u,Object(n["i"])(a,{to:"/looplab"},{default:Object(n["F"])((function(){return[d]})),_:1}),b,Object(n["i"])(a,{to:"/googlefontclone"},{default:Object(n["F"])((function(){return[f]})),_:1})]),Object(n["i"])(p)])}a("2abc");const h={};h.render=p;var O=h,j=a("6c02"),v={class:"home"};function m(e,t,a,c,r,o){var i=Object(n["z"])("HelloWorld");return Object(n["s"])(),Object(n["e"])("div",v,[Object(n["i"])(i,{msg:"Check out CSS/SASS experiments"})])}var g={class:"hello"},y=Object(n["g"])("<p> Powered by Vue, Vue-router and SASS </p><section><h3>Schwerpunkte</h3><article><h4>Introduction</h4><p>AOS Plugin, Flexbox oder Grid</p></article><article><h4>NaTour</h4><p> fortgeschrittene CSS und SASS <br> Animations durch CSS </p></article><article><h4>LoopLAB</h4><p>Bootstrap Projekt</p></article></section>",2);function x(e,t,a,c,r,o){return Object(n["s"])(),Object(n["e"])("div",g,[Object(n["f"])("h1",null,Object(n["B"])(a.msg),1),y])}var S={name:"HelloWorld",props:{msg:String}};a("476e");S.render=x;var w=S,T={name:"Home",components:{HelloWorld:w}};T.render=m;var k=T,_={class:"home"};function A(e,t,a,c,r,o){var i=Object(n["z"])("natour");return Object(n["s"])(),Object(n["e"])("div",_,[Object(n["i"])(i)])}Object(n["v"])("data-v-26a97a9c");var P={class:"header"},z={class:"logoBox"},L=["src"],I=Object(n["g"])('<div class="textBox" data-v-26a97a9c><h1 class="headingPrimary" data-v-26a97a9c><span class="headingPrimaryMain" data-v-26a97a9c>OUTDOORS</span><span class="headingPrimarySub" data-v-26a97a9c> is where life begins</span></h1><a href="#" class="btn btn-white" data-v-26a97a9c>Discover Our Tour</a></div>',1);function F(e,t,a,c,r,o){return Object(n["s"])(),Object(n["e"])("header",P,[Object(n["f"])("div",z,[Object(n["f"])("img",{src:e.image,alt:"Logo",class:"logo"},null,8,L)]),I])}Object(n["t"])();var C=a("6141"),Y=a.n(C),B={name:"natour",data:function(){return{image:Y.a}}};a("93ce");B.render=F,B.__scopeId="data-v-26a97a9c";var H=B,E={name:"NaTour",components:{natour:H}};E.render=A;var D=E;function U(e,t,a,c,r,o){var i=Object(n["z"])("looplab");return Object(n["s"])(),Object(n["d"])(i)}var G=Object(n["g"])('<header><h1>LoopLAB</h1><ul><li>Home</li><li>Explore</li><li>Create</li><li>Share</li></ul></header><section><h2>Build social profiles and gain revenue profits</h2><h5> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed, tempore iusto in minima facere dolorem! </h5><h5> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed, tempore iusto in minima facere dolorem! </h5><h5> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed, tempore iusto in minima facere dolorem! </h5></section><aside><h3>Sign Up Today</h3><h5>Please fill out this form to register</h5><input type="text" placeholder="Username"><input type="text" placeholder="Email"><input type="text" placeholder="Password"><input type="text" placeholder="Confirm Password"><button type="submit"></button></aside>',3),N=[G];function M(e,t,a,c,r,o){return Object(n["s"])(),Object(n["e"])("div",null,N)}var Q={name:"looplab"};Q.render=M;var R=Q,V={name:"LoopLab",components:{looplab:R}};V.render=U;var J=V;function W(e,t,a,c,r,o){var i=Object(n["z"])("introduction");return Object(n["s"])(),Object(n["d"])(i)}Object(n["v"])("data-v-502530a1");var K={id:"header"},X=["src"],Z=Object(n["f"])("div",{class:"title"},[Object(n["f"])("h1",{class:"titleText"},[Object(n["h"])(" Deine Herausforderung freundliche "),Object(n["f"])("br"),Object(n["h"])(" Entwicklerin mit Designer Wurzeln ")])],-1);function q(e,t,a,c,r,o){var i=Object(n["z"])("cv");return Object(n["s"])(),Object(n["e"])("div",null,[Object(n["f"])("header",K,[Object(n["f"])("img",{src:e.image,alt:"myPic",class:"picture"},null,8,X),Z]),Object(n["i"])(i)])}Object(n["t"])();var $=a("7d03"),ee=a.n($);Object(n["v"])("data-v-00bc31a0");var te=Object(n["f"])("h3",{class:"title"},"Lebenslauf",-1),ae={id:"lebenslauf"},ne={id:"arbeit"},ce=Object(n["f"])("h4",{class:"subText"},"Arbeit",-1),re=Object(n["g"])('<section class="year" data-v-00bc31a0><h6 class="eachYear" data-v-00bc31a0>2021</h6><h6 class="eachYear" data-v-00bc31a0>2020</h6><h6 class="eachYear" data-v-00bc31a0>2019</h6><h6 class="eachYear" data-v-00bc31a0>2018</h6><h6 class="eachYear" data-v-00bc31a0>2017</h6><h6 class="eachYear" data-v-00bc31a0>2016</h6><h6 class="eachYear" data-v-00bc31a0>2015</h6><h6 class="eachYear" data-v-00bc31a0>2014</h6><h6 class="eachYear" data-v-00bc31a0>2013</h6><h6 class="eachYear" data-v-00bc31a0>2012</h6><h6 class="eachYear" data-v-00bc31a0>2011</h6><h6 class="eachYear" data-v-00bc31a0>2010</h6><h6 class="eachYear" data-v-00bc31a0>2009</h6><h6 class="eachYear" data-v-00bc31a0>2008</h6></section><section id="studium" data-v-00bc31a0><h4 class="subText" data-v-00bc31a0>Studium | Bildung</h4></section>',2);function oe(e,t,a,c,r,o){var i=Object(n["z"])("working-exp");return Object(n["s"])(),Object(n["e"])("div",null,[te,Object(n["f"])("div",ae,[Object(n["f"])("section",ne,[ce,Object(n["i"])(i,{class:"workExp"})]),re])])}Object(n["t"])(),Object(n["v"])("data-v-681ae386");var ie=Object(n["g"])('<article data-aos="fade-up" data-aos-anchor-placement="top-center" class="work1" data-v-681ae386><h5 class="work1title" data-v-681ae386>Spielentwicklung Assistentin</h5><h6 class="workPeriod" data-v-681ae386>so-na AG, 02.2021 - 05.2021</h6><p class="workDetail" data-v-681ae386> - Assistenz der Geschäftsführung <br data-v-681ae386> (Recherche, Organisation, Projektmanagement) <br data-v-681ae386> - Grundlagen Programmierung in Unity <br data-v-681ae386> (allgemeine Licht, vorbereitung von Animation, allgemeine Vorbereitung von Hintergrund) </p></article><article class="work2" data-v-681ae386></article>',2),se=[ie];function le(e,t,a,c,r,o){return Object(n["s"])(),Object(n["e"])("aside",null,se)}Object(n["t"])();var ue={name:"workingExp"};a("be5d");ue.render=le,ue.__scopeId="data-v-681ae386";var de=ue,be={name:"cv",components:{workingExp:de}};a("dcd3");be.render=oe,be.__scopeId="data-v-00bc31a0";var fe=be,pe={name:"introduction",components:{cv:fe},data:function(){return{image:ee.a}}};a("c189");pe.render=q,pe.__scopeId="data-v-502530a1";var he=pe,Oe={name:"Intro",components:{introduction:he}};Oe.render=W;var je=Oe;function ve(e,t,a,c,r,o){var i=Object(n["z"])("my-header"),s=Object(n["z"])("font-input");return Object(n["s"])(),Object(n["e"])("div",null,[Object(n["i"])(i),Object(n["i"])(s)])}Object(n["v"])("data-v-7b0beb46");var me={class:"menu"},ge=["src"],ye=Object(n["f"])("div",{class:"menuIcon"},"CATALOG",-1),xe=Object(n["f"])("div",{class:"menuIcon"},"FEATURED",-1),Se=Object(n["f"])("div",{class:"menuIcon"},"ARTICLES",-1),we=Object(n["f"])("div",{class:"menuIcon"},"ABOUT",-1);function Te(e,t,a,c,r,o){return Object(n["s"])(),Object(n["e"])("header",null,[Object(n["f"])("div",me,[Object(n["f"])("img",{src:r.image,id:"logo"},null,8,ge),ye,xe,Se,we])])}Object(n["t"])();var ke=a("f739"),_e=a.n(ke),Ae={name:"myHeader",data:function(){return{image:_e.a}}};a("9cee");Ae.render=Te,Ae.__scopeId="data-v-7b0beb46";var Pe=Ae;Object(n["v"])("data-v-61921ed8");var ze={class:"nav"},Le=["placeholder"],Ie={class:"input3"},Fe=Object(n["f"])("span",{class:"pixelText"},"px",-1),Ce=Object(n["f"])("i",{class:"fas fa-circle"},null,-1),Ye=Object(n["f"])("i",{class:"far fa-circle"},null,-1),Be=Object(n["f"])("div",{id:"extras"},[Object(n["f"])("i",{class:"fas fa-list-ul"}),Object(n["f"])("i",{class:"fas fa-undo-alt"})],-1),He={class:"fontCards"},Ee=["href"],De=Object(n["f"])("i",{class:"fas fa-plus-circle"},null,-1),Ue={class:"fontType"};function Ge(e,t,a,c,r,o){return Object(n["s"])(),Object(n["e"])("div",null,[Object(n["f"])("nav",ze,[Object(n["f"])("input",{class:"input1",type:"search",placeholder:"Search fonts",onKeypress:t[0]||(t[0]=function(){return r.searchQuery&&r.searchQuery.apply(r,arguments)})},null,32),Object(n["G"])(Object(n["f"])("input",{class:"input2",type:"text","onUpdate:modelValue":t[1]||(t[1]=function(e){return r.updateText=e}),placeholder:[[r.inputText]]},null,8,Le),[[n["D"],r.updateText]]),Object(n["f"])("div",Ie,[Object(n["G"])(Object(n["f"])("input",{id:"pixel",type:"number",placeholder:"16",max:"28",min:"8","onUpdate:modelValue":t[2]||(t[2]=function(e){return r.fontSize=e})},null,512),[[n["D"],r.fontSize]]),Fe,Ce,Ye]),Be]),Object(n["f"])("section",He,[(Object(n["s"])(!0),Object(n["e"])(n["a"],null,Object(n["y"])(r.posts,(function(e){return Object(n["s"])(),Object(n["e"])("article",{id:"eachFont",key:e},[Object(n["f"])("link",{href:o.myUrl},null,8,Ee),Object(n["f"])("h3",{class:"fontName",style:Object(n["o"])({actualFont:o.actualFont})},[Object(n["h"])(Object(n["B"])(e.family),1),De],4),Object(n["f"])("h5",Ue,Object(n["B"])(e.category),1),Object(n["f"])("p",{class:"sampleText",style:Object(n["o"])({"font-size":[[r.fontSize]]+"px",actualFont:o.actualFont})},Object(n["B"])(r.updateText),5)])})),128))])])}Object(n["t"])();a("a9e3");var Ne=a("62c3"),Me=a.n(Ne),Qe={name:"fontInput",data:function(){return{posts:[],errors:[],searchQuery:"",noResult:"Sorry! Try different keyword?",inputText:"Check your font sample!",updateText:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",fontSize:Number,sizeChange:"",fontName:[]}},methods:{fontFamily:function(){return this.posts.category},myUrl:function(){return"https://fonts.googleapis.com/css2?family="+this.post.family+'&display=swap" rel="stylesheet'},actualFont:function(){return"font-family: AbeeZee, sans-serif"}},created:function(){var e=this;Me.a.get("https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyDaEHww-taTENK-JAPjSwwD9JeXKQdTblQ").then((function(t){return e.posts=t.data.items})).catch((function(t){e.errors.push(t)}))}};a("76d4");Qe.render=Ge,Qe.__scopeId="data-v-61921ed8";var Re=Qe,Ve={name:"googleFontClone",components:{myHeader:Pe,fontInput:Re}};Ve.render=ve;var Je=Ve,We=[{path:"/",name:"Home",component:k},{path:"/intro",name:"Intro",component:je},{path:"/natour",name:"NaTour",component:D},{path:"/looplab",name:"LoopLab",component:J},{path:"/googlefontclone",name:"GoogleFontClone",component:Je}],Ke=Object(j["a"])({history:Object(j["b"])("/"),routes:We}),Xe=Ke,Ze=a("f5af"),qe=a.n(Ze),$e=(a("e829"),Object(n["c"])(O));$e.AOS=new qe.a.init({disable:"phone"}),$e.use(Xe).mount("#app")},"5e7b":function(e,t,a){},6141:function(e,t,a){e.exports=a.p+"img/logo-white.40d4ef82.png"},"76d4":function(e,t,a){"use strict";a("0b09")},"7d03":function(e,t,a){e.exports=a.p+"img/mypic.a7254904.png"},"822a":function(e,t,a){},"93ce":function(e,t,a){"use strict";a("c88b")},"9cee":function(e,t,a){"use strict";a("0c91")},be5d:function(e,t,a){"use strict";a("3572")},c189:function(e,t,a){"use strict";a("5e7b")},c88b:function(e,t,a){},d785:function(e,t,a){},dcd3:function(e,t,a){"use strict";a("822a")},f739:function(e,t,a){e.exports=a.p+"img/google_fonts.28fe5e1d.png"}});
//# sourceMappingURL=app.d0bbce6c.js.map