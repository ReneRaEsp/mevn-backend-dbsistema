(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["proveedores"],{2043:function(t,e,o){"use strict";o("3d8c")},"3d8c":function(t,e,o){},"7b03":function(t,e,o){"use strict";o("b748")},"7f83":function(t,e,o){"use strict";var s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"cabeceroCompras"},[o("router-link",{staticClass:"button",attrs:{to:"/compras/ingresos"}},[t._v(" Ingresos ")]),o("router-link",{staticClass:"button",attrs:{to:"/compras/proveedores"}},[t._v(" Proveedores ")])],1)},a=[],r={},i=r,n=(o("7b03"),o("2877")),c=Object(n["a"])(i,s,a,!1,null,"b2a36c2c",null);e["a"]=c.exports},b748:function(t,e,o){},e3fe:function(t,e,o){"use strict";o.r(e);var s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"proveedores"},[o("CabeceroCompras"),o("h3",{staticClass:"title"},[t._v("Proveedores")]),o("div",{staticClass:"modulo"},[o("div",{staticClass:"busqueda"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.busqueda,expression:"busqueda"}],staticClass:"input",attrs:{type:"text",placeholder:"Buscar categoria...",name:"search"},domProps:{value:t.busqueda},on:{input:[function(e){e.target.composing||(t.busqueda=e.target.value)},function(e){return t.filtrarPorNombreInput()}]}}),o("button",{staticClass:"submit",on:{click:function(e){return t.filtrarPorNombre()}}},[t._v("Buscar")])]),o("button",{staticClass:"mostrarT",on:{click:function(e){return t.listar()}}},[t._v("mostrar todo")]),o("router-link",{staticClass:"agregar",attrs:{to:"/compras/proveedores/add"}},[t._v(" Agregar ")])],1),t.buscando?t.buscando?o("table",{staticStyle:{width:"90%"}},[t._m(1),t._l(t.resultados,(function(e){return o("tr",{key:e._id},["Proveedor"==e.tipo_persona?o("td",[t._v(t._s(e.nombre))]):t._e(),"Proveedor"==e.tipo_persona?o("td",[t._v(t._s(e.num_documento))]):t._e(),"Proveedor"==e.tipo_persona?o("td",[t._v(t._s(e.direccion))]):t._e(),"Proveedor"==e.tipo_persona?o("td",[t._v(t._s(e.telefono))]):t._e(),"Proveedor"==e.tipo_persona?o("td",[t._v(t._s(e.email))]):t._e(),"Proveedor"==e.tipo_persona?o("td",[t._v(t._s(e.tipo_persona))]):t._e(),"Proveedor"==e.tipo_persona?o("td",[e.estado?o("div",[o("span",{staticClass:"activo"},[t._v(" Activa ")])]):o("div",[o("span",{staticClass:"inactivo"},[t._v(" Inactiva ")])])]):t._e(),"Proveedor"==t.proveedor.tipo_persona?o("td",[o("router-link",{attrs:{to:"/compras/proveedor/add"+t.proveedor._id}},[o("i",{staticClass:"edit fas fa-edit"})]),0==t.proveedor.estado?o("button",{staticClass:"buttonDelete",on:{click:function(e){return t.activar(t.proveedor._id)}}},[o("i",{staticClass:"delete fas fa-lock-open"})]):o("button",{staticClass:"buttonDelete",on:{click:function(e){return t.desactivar(t.proveedor._id)}}},[o("i",{staticClass:"delete fas fa-lock"})])],1):t._e()])}))],2):t._e():o("table",{staticStyle:{width:"90%"}},[t._m(0),t._l(t.proveedores,(function(e){return o("tr",{key:e._id},["Proveedor"==e.tipo_persona?o("td",[t._v(t._s(e.nombre))]):t._e(),"Proveedor"==e.tipo_persona?o("td",[t._v(t._s(e.num_documento))]):t._e(),"Proveedor"==e.tipo_persona?o("td",[t._v(t._s(e.direccion))]):t._e(),"Proveedor"==e.tipo_persona?o("td",[t._v(t._s(e.telefono))]):t._e(),"Proveedor"==e.tipo_persona?o("td",[t._v(t._s(e.email))]):t._e(),"Proveedor"==e.tipo_persona?o("td",[t._v(t._s(e.tipo_persona))]):t._e(),"Proveedor"==e.tipo_persona?o("td",[e.estado?o("div",[o("span",{staticClass:"activo"},[t._v(" Activa ")])]):o("div",[o("span",{staticClass:"inactivo"},[t._v(" Inactiva ")])])]):t._e(),"Proveedor"==e.tipo_persona?o("td",[o("router-link",{attrs:{to:"/compras/proveedores/add"+e._id}},[o("i",{staticClass:"edit fas fa-edit"})]),0==e.estado?o("button",{staticClass:"buttonDelete",on:{click:function(o){return t.activar(e._id)}}},[o("i",{staticClass:"delete fas fa-lock-open"})]):o("button",{staticClass:"buttonDelete",on:{click:function(o){return t.desactivar(e._id)}}},[o("i",{staticClass:"delete fas fa-lock"})])],1):t._e()])}))],2)],1)},a=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("tr",[o("th",[t._v("Nombre")]),o("th",[t._v("Documento Nro")]),o("th",[t._v("Dirección")]),o("th",[t._v("Telefono")]),o("th",[t._v("Email")]),o("th",[t._v("Tipo")]),o("th",[t._v("Estado")]),o("th",[t._v("Opc")])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("tr",[o("th",[t._v("Nombre")]),o("th",[t._v("Documento Nro")]),o("th",[t._v("Dirección")]),o("th",[t._v("Telefono")]),o("th",[t._v("Email")]),o("th",[t._v("Tipo")]),o("th",[t._v("Estado")]),o("th",[t._v("Opc")])])}],r=o("bc3a"),i=o.n(r),n=o("7f83"),c={data:function(){return{proveedores:[],busqueda:"",buscando:!1,resultados:[],sinCoincidencias:!1}},created:function(){this.listar()},methods:{listar:function(){var t=this,e={Token:this.$store.state.token},o={headers:e};this.sinCoincidencias=!1,this.buscando=!1,i.a.get("persona/list-proveedores",o).then((function(e){""==t.busqueda?t.proveedores=e.data:console.log("Realizando busqueda")})).catch((function(t){console.log(t)})),this.limpiar()},limpiar:function(){this.busqueda="",this.buscando=!1,this.resultados=[],this.sinCoincidencias=!1},activar:function(t){var e={Token:this.$store.state.token},o={headers:e};i.a.put("/persona/activate",{_id:t},o).then((function(t){console.log("Persona activada: "+t.data.nombre)})).catch((function(t){console.log(t)})),this.limpiar(),this.listar()},desactivar:function(t){var e={Token:this.$store.state.token},o={headers:e};i.a.put("/persona/deactivate",{_id:t},o).then((function(t){console.log("Persona desactivada: "+t.data.nombre)})).catch((function(t){console.log(t)})),this.limpiar(),this.listar()}},components:{CabeceroCompras:n["a"]}},d=c,u=(o("2043"),o("2877")),l=Object(u["a"])(d,s,a,!1,null,"4b403153",null);e["default"]=l.exports}}]);
//# sourceMappingURL=proveedores.df799406.js.map