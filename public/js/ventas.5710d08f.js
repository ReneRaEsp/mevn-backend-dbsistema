(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["ventas"],{"129f":function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t===1/e:t!=t&&e!=e}},"14c3":function(t,e,n){var a=n("c6b6"),s=n("9263");t.exports=function(t,e){var n=t.exec;if("function"===typeof n){var i=n.call(t,e);if("object"!==typeof i)throw TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==a(t))throw TypeError("RegExp#exec called on incompatible receiver");return s.call(t,e)}},"159b":function(t,e,n){var a=n("da84"),s=n("fdbc"),i=n("17c2"),r=n("9112");for(var o in s){var c=a[o],u=c&&c.prototype;if(u&&u.forEach!==i)try{r(u,"forEach",i)}catch(l){u.forEach=i}}},"17c2":function(t,e,n){"use strict";var a=n("b727").forEach,s=n("a640"),i=s("forEach");t.exports=i?[].forEach:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}},"353b":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"cabeceroVentas"},[n("router-link",{staticClass:"button",attrs:{to:"/ventas"}},[t._v(" Ventas ")]),n("router-link",{staticClass:"button",attrs:{to:"/ventas/clientes"}},[t._v(" Clientes ")])],1)},s=[],i={},r=i,o=(n("3cf0"),n("2877")),c=Object(o["a"])(r,a,s,!1,null,"7901d10e",null);e["a"]=c.exports},"3cf0":function(t,e,n){"use strict";n("6c27")},"4adb":function(t,e,n){"use strict";n("c018")},"65f0":function(t,e,n){var a=n("861d"),s=n("e8b5"),i=n("b622"),r=i("species");t.exports=function(t,e){var n;return s(t)&&(n=t.constructor,"function"!=typeof n||n!==Array&&!s(n.prototype)?a(n)&&(n=n[r],null===n&&(n=void 0)):n=void 0),new(void 0===n?Array:n)(0===e?0:e)}},"6c27":function(t,e,n){},"841c":function(t,e,n){"use strict";var a=n("d784"),s=n("825a"),i=n("1d80"),r=n("129f"),o=n("14c3");a("search",1,(function(t,e,n){return[function(e){var n=i(this),a=void 0==e?void 0:e[t];return void 0!==a?a.call(e,n):new RegExp(e)[t](String(n))},function(t){var a=n(e,t,this);if(a.done)return a.value;var i=s(t),c=String(this),u=i.lastIndex;r(u,0)||(i.lastIndex=0);var l=o(i,c);return r(i.lastIndex,u)||(i.lastIndex=u),null===l?-1:l.index}]}))},"86f1":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"ventas"},[n("CabeceroVentas"),n("h3",{staticClass:"title"},[t._v("Ventas")]),n("div",{staticClass:"modulo"},[n("div",{staticClass:"busqueda"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.busqueda,expression:"busqueda"}],staticClass:"input",attrs:{type:"text",placeholder:"Buscar por usuario...",name:"search"},domProps:{value:t.busqueda},on:{input:[function(e){e.target.composing||(t.busqueda=e.target.value)},function(e){return t.filtrarPorNombreInput()}]}}),n("button",{staticClass:"submit",on:{click:function(e){return t.filtrarPorNombreInput()}}},[t._v("Buscar")])]),n("button",{staticClass:"mostrarT",on:{click:function(e){return t.listar()}}},[t._v("mostrar todo")]),n("router-link",{staticClass:"agregar",attrs:{to:"/ventas/add"}},[t._v(" Agregar ")])],1),t.buscando?t._e():n("table",{staticStyle:{width:"90%"}},[t._m(0),t._l(t.ventas,(function(e){return n("tr",{key:e._id},[n("td",[t._v(t._s(e.usuario.nombre))]),n("td",[t._v(t._s(e.persona.nombre))]),n("td",[t._v(t._s(e.tipo_comprobante))]),n("td",[t._v(t._s(e.serie_comprobante))]),n("td",[t._v(t._s(e.num_comprobante))]),n("td",[t._v(t._s(e.createdAt))]),n("td",[t._v(t._s(e.impuesto))]),n("td",[t._v(t._s(e.total))]),n("td",[e.estado?n("div",[n("span",{staticClass:"activo"},[t._v(" Activa ")])]):n("div",[n("span",{staticClass:"inactivo"},[t._v(" Inactiva ")])])]),n("td",[n("router-link",{attrs:{to:"/ventas/add"+e._id}},[n("i",{staticClass:"edit fas fa-edit"})]),0==e.estado?n("button",{staticClass:"buttonDelete",on:{click:function(n){return t.activar(e._id)}}},[n("i",{staticClass:"delete fas fa-lock-open"})]):n("button",{staticClass:"buttonDelete",on:{click:function(n){return t.desactivar(e._id)}}},[n("i",{staticClass:"delete fas fa-lock"})]),n("router-link",{attrs:{to:"/ventas/detalles"+e._id}},[n("i",{staticClass:"detallesIco far fa-list-alt"},[n("span",{staticClass:"detalles"},[t._v("Detalles")])])])],1)])}))],2),t.buscando?n("table",{staticStyle:{width:"90%"}},[t._m(1),t._l(t.resultados,(function(e){return n("tr",{key:e._id},[n("td",[t._v(t._s(e.usuario.nombre))]),n("td",[t._v(t._s(e.persona.nombre))]),n("td",[t._v(t._s(e.tipo_comprobante))]),n("td",[t._v(t._s(e.serie_comprobante))]),n("td",[t._v(t._s(e.num_comprobante))]),n("td",[t._v(t._s(e.createdAt))]),n("td",[t._v(t._s(e.impuesto))]),n("td",[t._v(t._s(e.total))]),n("td",[e.estado?n("div",[n("span",{staticClass:"activo"},[t._v(" Activo ")])]):n("div",[n("span",{staticClass:"inactivo"},[t._v(" Inactivo ")])])]),n("td",[n("router-link",{attrs:{to:"/ventas/add"+e._id}},[n("i",{staticClass:"edit fas fa-edit"})]),0==e.estado?n("button",{staticClass:"buttonDelete",on:{click:function(n){return t.activar(e._id)}}},[n("i",{staticClass:"delete fas fa-lock-open"})]):n("button",{staticClass:"buttonDelete",on:{click:function(n){return t.desactivar(e._id)}}},[n("i",{staticClass:"delete fas fa-lock"})]),n("router-link",{attrs:{to:"/ventas/detalles"+e._id}},[n("i",{staticClass:"detallesIco far fa-list-alt"},[n("span",{staticClass:"detalles"},[t._v("Detalles")])])])],1)])}))],2):t._e(),t.sinCoincidencias?n("h3",{staticClass:"sinCoincidencias"},[t._v(" No se han encotrado resultados"),n("br"),t._v(" para su busqueda ")]):n("span")],1)},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tr",[n("th",[t._v("Usuario")]),n("th",[t._v("Cliente")]),n("th",[t._v("Tipo Comprobante")]),n("th",[t._v("Serie Comprobante")]),n("th",[t._v("Nro Comprobante")]),n("th",[t._v("Fecha")]),n("th",[t._v("Impuesto")]),n("th",[t._v("Total")]),n("th",[t._v("Estado")]),n("th",[t._v("Opciones")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tr",[n("th",[t._v("Usuario")]),n("th",[t._v("Cliente")]),n("th",[t._v("Tipo Comprobante")]),n("th",[t._v("Serie Comprobante")]),n("th",[t._v("Nro Comprobante")]),n("th",[t._v("Fecha")]),n("th",[t._v("Impuesto")]),n("th",[t._v("Total")]),n("th",[t._v("Estado")]),n("th",[t._v("Opciones")])])}],i=(n("159b"),n("ac1f"),n("841c"),n("bc3a")),r=n.n(i),o=n("353b"),c={data:function(){return{ventas:[],busqueda:"",buscando:!1,resultados:[],sinCoincidencias:!1}},created:function(){this.listar()},methods:{listar:function(){var t=this,e={Token:this.$store.state.token},n={headers:e};this.sinCoincidencias=!1,this.buscando=!1,r.a.get("venta/list",n).then((function(e){""==t.busqueda?(t.ventas=e.data,console.log("listo")):console.log("Realizando busqueda")})).catch((function(t){console.log(t)})),this.limpiar()},filtrarPorNombreInput:function(){var t=this;this.resultados=[];var e=[];this.ventas.forEach((function(n){n.usuario.nombre.search(t.busqueda)?t.sinCoincidencias=!0:e.push(n)})),this.resultados=e,this.resultados==[]||""==this.resultados||void 0==this.resultados?this.sinCoincidencias=!0:this.sinCoincidencias=!1,this.buscando=!0},limpiar:function(){this.busqueda="",this.buscando=!1,this.resultados=[],this.sinCoincidencias=!1},activar:function(t){var e={Token:this.$store.state.token},n={headers:e};r.a.put("/venta/activate",{_id:t},n).then((function(t){console.log("Venta activada: "+t.data.nombre)})).catch((function(t){console.log(t)})),this.limpiar(),this.listar()},desactivar:function(t){var e={Token:this.$store.state.token},n={headers:e};r.a.put("/venta/deactivate",{_id:t},n).then((function(t){console.log("Usuario desactivado: "+t.data.nombre)})).catch((function(t){console.log(t)})),this.limpiar(),this.listar()}},components:{CabeceroVentas:o["a"]}},u=c,l=(n("4adb"),n("2877")),d=Object(l["a"])(u,a,s,!1,null,"1136ae79",null);e["default"]=d.exports},9263:function(t,e,n){"use strict";var a=n("ad6d"),s=n("9f7f"),i=n("5692"),r=RegExp.prototype.exec,o=i("native-string-replace",String.prototype.replace),c=r,u=function(){var t=/a/,e=/b*/g;return r.call(t,"a"),r.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),l=s.UNSUPPORTED_Y||s.BROKEN_CARET,d=void 0!==/()??/.exec("")[1],v=u||d||l;v&&(c=function(t){var e,n,s,i,c=this,v=l&&c.sticky,f=a.call(c),p=c.source,h=0,_=t;return v&&(f=f.replace("y",""),-1===f.indexOf("g")&&(f+="g"),_=String(t).slice(c.lastIndex),c.lastIndex>0&&(!c.multiline||c.multiline&&"\n"!==t[c.lastIndex-1])&&(p="(?: "+p+")",_=" "+_,h++),n=new RegExp("^(?:"+p+")",f)),d&&(n=new RegExp("^"+p+"$(?!\\s)",f)),u&&(e=c.lastIndex),s=r.call(v?n:c,_),v?s?(s.input=s.input.slice(h),s[0]=s[0].slice(h),s.index=c.lastIndex,c.lastIndex+=s[0].length):c.lastIndex=0:u&&s&&(c.lastIndex=c.global?s.index+s[0].length:e),d&&s&&s.length>1&&o.call(s[0],n,(function(){for(i=1;i<arguments.length-2;i++)void 0===arguments[i]&&(s[i]=void 0)})),s}),t.exports=c},"9f7f":function(t,e,n){"use strict";var a=n("d039");function s(t,e){return RegExp(t,e)}e.UNSUPPORTED_Y=a((function(){var t=s("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=a((function(){var t=s("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},a640:function(t,e,n){"use strict";var a=n("d039");t.exports=function(t,e){var n=[][t];return!!n&&a((function(){n.call(null,e||function(){throw 1},1)}))}},ac1f:function(t,e,n){"use strict";var a=n("23e7"),s=n("9263");a({target:"RegExp",proto:!0,forced:/./.exec!==s},{exec:s})},ad6d:function(t,e,n){"use strict";var a=n("825a");t.exports=function(){var t=a(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},b727:function(t,e,n){var a=n("0366"),s=n("44ad"),i=n("7b0b"),r=n("50c4"),o=n("65f0"),c=[].push,u=function(t){var e=1==t,n=2==t,u=3==t,l=4==t,d=6==t,v=7==t,f=5==t||d;return function(p,h,_,b){for(var m,x,C=i(p),g=s(C),E=a(h,_,3),y=r(g.length),k=0,I=b||o,R=e?I(p,y):n||v?I(p,0):void 0;y>k;k++)if((f||k in g)&&(m=g[k],x=E(m,k,C),t))if(e)R[k]=x;else if(x)switch(t){case 3:return!0;case 5:return m;case 6:return k;case 2:c.call(R,m)}else switch(t){case 4:return!1;case 7:c.call(R,m)}return d?-1:u||l?l:R}};t.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6),filterOut:u(7)}},c018:function(t,e,n){},d784:function(t,e,n){"use strict";n("ac1f");var a=n("6eeb"),s=n("9263"),i=n("d039"),r=n("b622"),o=n("9112"),c=r("species"),u=RegExp.prototype,l=!i((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),d=function(){return"$0"==="a".replace(/./,"$0")}(),v=r("replace"),f=function(){return!!/./[v]&&""===/./[v]("a","$0")}(),p=!i((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));t.exports=function(t,e,n,v){var h=r(t),_=!i((function(){var e={};return e[h]=function(){return 7},7!=""[t](e)})),b=_&&!i((function(){var e=!1,n=/a/;return"split"===t&&(n={},n.constructor={},n.constructor[c]=function(){return n},n.flags="",n[h]=/./[h]),n.exec=function(){return e=!0,null},n[h](""),!e}));if(!_||!b||"replace"===t&&(!l||!d||f)||"split"===t&&!p){var m=/./[h],x=n(h,""[t],(function(t,e,n,a,i){var r=e.exec;return r===s||r===u.exec?_&&!i?{done:!0,value:m.call(e,n,a)}:{done:!0,value:t.call(n,e,a)}:{done:!1}}),{REPLACE_KEEPS_$0:d,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:f}),C=x[0],g=x[1];a(String.prototype,t,C),a(u,h,2==e?function(t,e){return g.call(t,this,e)}:function(t){return g.call(t,this)})}v&&o(u[h],"sham",!0)}},e8b5:function(t,e,n){var a=n("c6b6");t.exports=Array.isArray||function(t){return"Array"==a(t)}}}]);
//# sourceMappingURL=ventas.5710d08f.js.map