(function(e){function t(t){for(var n,l,i=t[0],c=t[1],u=t[2],v=0,d=[];v<i.length;v++)l=i[v],Object.prototype.hasOwnProperty.call(o,l)&&o[l]&&d.push(o[l][0]),o[l]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);s&&s(t);while(d.length)d.shift()();return r.push.apply(r,u||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],n=!0,i=1;i<a.length;i++){var c=a[i];0!==o[c]&&(n=!1)}n&&(r.splice(t--,1),e=l(l.s=a[0]))}return e}var n={},o={app:0},r=[];function l(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.m=e,l.c=n,l.d=function(e,t,a){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)l.d(a,n,function(t){return e[t]}.bind(null,n));return a},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/bannerlord-toolkit/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var s=c;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("cd49")},"297c":function(e,t,a){"use strict";var n=a("d7b4"),o=a.n(n);o.a},"5c0b":function(e,t,a){"use strict";var n=a("9c0c"),o=a.n(n);o.a},"9c0c":function(e,t,a){},cd49:function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n,o,r,l=a("2b0e"),i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",{attrs:{dark:""}},[a("v-app-bar",{attrs:{app:""}},[a("v-btn",{staticClass:"no-active",attrs:{to:"/",exact:"",icon:""}},[a("v-icon",[e._v("mdi-home")])],1),a("v-spacer"),a("v-btn",{staticClass:"no-active",attrs:{ripple:!1,to:"/",exact:"",text:""}},[a("v-toolbar-title",{staticClass:"title"},[e._v("Bannerlord Toolkit")])],1),a("v-spacer"),a("v-btn",{attrs:{href:"https://github.com/UnluckyNinja/bannerlord-toolkit",target:"_blank",icon:""}},[a("v-icon",[e._v("mdi-github")])],1)],1),a("v-content",[a("v-container",{attrs:{fluid:""}},[a("v-chip-group",{attrs:{column:"/"===e.$route.path}},e._l(e.links,(function(t){return a("v-chip",{key:t.path,attrs:{to:t.path}},[e._v(e._s(t.name))])})),1),a("router-view")],1)],1),a("v-footer",{attrs:{app:""}},[a("v-spacer"),e._v("©UnluckyNinja "),a("v-spacer")],1)],1)},c=[],u=(a("99af"),a("d4ec")),s=a("257e"),v=a("262e"),d=a("2caf"),f=a("ade3"),p=a("60a3"),m=(n=Object(p["a"])({}),n((r=function(e){Object(v["a"])(a,e);var t=Object(d["a"])(a);function a(){var e;Object(u["a"])(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return e=t.call.apply(t,[this].concat(o)),Object(f["a"])(Object(s["a"])(e),"links",[{name:"BodyFlags",path:"/bodyflags"}]),e}return a}(p["b"]),o=r))||o),b=m,h=(a("5c0b"),a("2877")),y=Object(h["a"])(b,i,c,!1,null,null,null),g=y.exports,O=a("9483");Object(O["a"])("".concat("/bannerlord-toolkit/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var j=a("8c4f"),w=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("v-card",[a("v-card-title",{staticClass:"headline justify-center"},[a("span",[a("span",{staticClass:"blue--text"},[e._v("enum")]),e._v(" BodyFlags "),a("span",{staticClass:"yellow--text"},[e._v("@TaleWorlds.Engine")])])]),a("BodyFlags")],1)],1)},F=[],k=a("bee2"),C=a("9ab4"),_=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{staticClass:"monospace"},e._l(e.flags,(function(t,n){return a("v-row",{key:n,attrs:{dense:""},on:{click:function(a){e.selectedValue===t.value?e.selectedValue=-1:e.selectedValue=t.value}}},[a("v-col",[a("v-btn",{staticClass:"text-capitalize",attrs:{color:e.whichColor(t.value,e.selectedValue),rounded:"",depressed:"",block:""}},[a("v-col",[e._v(e._s(t.name))]),a("v-spacer"),a("v-col",[e._v(e._s(t.value.toString(2).padStart(32,"0")))])],1)],1)],1)})),1)},x=[],B=[{name:"None",value:0},{name:"Disabled",value:1},{name:"NotDestructible",value:2},{name:"TwoSided",value:4},{name:"Dynamic",value:8},{name:"Moveable",value:16},{name:"DynamicConvexHull",value:32},{name:"Ladder",value:64},{name:"OnlyCollideWithRaycast",value:128},{name:"AILimiter",value:256},{name:"Barrier",value:512},{name:"Barrier3D",value:1024},{name:"Ragdoll",value:4096},{name:"RagdollLimiter",value:8192},{name:"DestructibleDoor",value:16384},{name:"DroppedItem",value:32768},{name:"DoNotCollideWithRaycast",value:65536},{name:"DontTransferToPhysicsEngine",value:131072},{name:"UseLocalBoundsOnGridInsertion",value:262144},{name:"ExcludePathSnap",value:524288},{name:"IsOpoed",value:1048576},{name:"AfterAddFlags",value:1048576},{name:"AgentOnly",value:2097152},{name:"MissileOnly",value:4194304},{name:"HasMaterial",value:8388608},{name:"BodyFlagFilter",value:16777215},{name:"CommonCollisionExcludeFlags",value:6402441},{name:"CameraCollisionRayCastExludeFlags",value:6404041},{name:"CommonCollisionExcludeFlagsForAgent",value:4305289},{name:"CommonCollisionExcludeFlagsForMissile",value:2208137},{name:"CommonCollisionExcludeFlagsForEditor",value:2208137},{name:"CommonFlagsThatDoNotBlocksRay",value:16727871},{name:"CommonFocusRayCastExcludeFlags",value:79617},{name:"BodyOwnerNone",value:0},{name:"BodyOwnerEntity",value:16777216},{name:"BodyOwnerTerrain",value:33554432},{name:"BodyOwnerFlora",value:67108864},{name:"BodyOwnerFilter",value:251658240}],E=function(e){Object(v["a"])(a,e);var t=Object(d["a"])(a);function a(){var e;return Object(u["a"])(this,a),e=t.apply(this,arguments),e.selectedValue=-1,e}return Object(k["a"])(a,[{key:"whichColor",value:function(e,t){if(-1===t)return"";if(e===t)return"blue";var a=e&t;return a===e?"cyan":a===t?"indigo":""}},{key:"flags",get:function(){return B}}]),a}(p["b"]);E=Object(C["a"])([Object(p["a"])({components:{}})],E);var D=E,T=D,S=(a("297c"),Object(h["a"])(T,_,x,!1,null,"351176f3",null)),A=S.exports,N=function(e){Object(v["a"])(a,e);var t=Object(d["a"])(a);function a(){return Object(u["a"])(this,a),t.apply(this,arguments)}return Object(k["a"])(a,[{key:"mounted",value:function(){this.originalTheme=this.$vuetify.theme.dark,this.$vuetify.theme.dark=!0}},{key:"beforeDestroy",value:function(){this.$vuetify.theme.dark=this.originalTheme}}]),a}(p["b"]);N=Object(C["a"])([Object(p["a"])({components:{BodyFlags:A}})],N);var P=N,M=P,$=Object(h["a"])(M,w,F,!1,null,"02f6f040",null),R=$.exports;l["default"].use(j["a"]);var V=[{path:"/",name:"Home"},{path:"/bodyflags",name:"BodyFlags",component:R}],I=new j["a"]({routes:V}),L=I,H=a("2f62");l["default"].use(H["a"]);var U=new H["a"].Store({state:{},mutations:{},actions:{},modules:{}}),W=a("ce5b"),J=a.n(W);a("bf40");l["default"].use(J.a);var q=new J.a({theme:{themes:{light:{primary:"#f1b434",secondary:"#424242",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107"}}}});l["default"].config.productionTip=!1,new l["default"]({router:L,store:U,vuetify:q,render:function(e){return e(g)}}).$mount("#app")},d7b4:function(e,t,a){}});