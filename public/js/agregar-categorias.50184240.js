(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["agregar-categorias"],{2911:function(e,t,a){"use strict";a("2ae2")},"2ae2":function(e,t,a){},"333f":function(e,t,a){},"498a":function(e,t,a){"use strict";var r=a("23e7"),n=a("58a8").trim,i=a("c8d2");r({target:"String",proto:!0,forced:i("trim")},{trim:function(){return n(this)}})},5899:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(e,t,a){var r=a("1d80"),n=a("5899"),i="["+n+"]",o=RegExp("^"+i+i+"*"),s=RegExp(i+i+"*$"),c=function(e){return function(t){var a=String(r(t));return 1&e&&(a=a.replace(o,"")),2&e&&(a=a.replace(s,"")),a}};e.exports={start:c(1),end:c(2),trim:c(3)}},8071:function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"cabeceroAlmacen"},[a("router-link",{staticClass:"button",attrs:{to:"/almacen/categorias"}},[e._v(" Categorias ")]),a("router-link",{staticClass:"button",attrs:{to:"/almacen/articulos"}},[e._v(" Articulos ")])],1)},n=[],i={},o=i,s=(a("2911"),a("2877")),c=Object(s["a"])(o,r,n,!1,null,"5bbdcfb8",null);t["a"]=c.exports},"93b7":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"agregarCat"},[a("CabeceroAlmacen"),a("h3",{staticClass:"title"},[e._v("Agregar Categoria")]),a("div",{staticClass:"formAgregar",on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.guardar()}}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.nombre,expression:"nombre"}],staticClass:"input",attrs:{placeholder:"Nombre",type:"text"},domProps:{value:e.nombre},on:{input:function(t){t.target.composing||(e.nombre=t.target.value)}}}),a("br"),a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.descripcion,expression:"descripcion"}],staticClass:"textArea",attrs:{placeholder:"Descripcion",cols:"10",rows:"5"},domProps:{value:e.descripcion},on:{input:function(t){t.target.composing||(e.descripcion=t.target.value)}}}),e._l(e.validarMensaje,(function(t){return a("div",{key:t},[a("p",{staticClass:"errores"},[e._v("* "+e._s(t))])])})),a("button",{staticClass:"guardar",on:{click:function(t){return e.guardar()}}},[e._v(" Guardar ")])],2),a("router-link",{staticClass:"volver",attrs:{to:"/almacen/categorias"}},[e._v(" Volver sin guardar ")])],1)},n=[],i=(a("498a"),a("8071")),o=a("bc3a"),s=a.n(o),c={data:function(){return{nombre:"",descripcion:"",ruta:this.$router.currentRoute.fullPath,editar:!1,validar:0,validarMensaje:[]}},methods:{guardar:function(){if(this.validacion(),this.validar<=0)if(this.editar){var e={Token:this.$store.state.token},t={headers:e};s.a.put("categoria/update",{_id:this.$router.currentRoute.params.id,nombre:this.nombre,descripcion:this.descripcion},t).then((function(e){console.log("Categoria actualizada exitosamente: "+e.data.nombre)})).catch((function(e){console.log(e),alert("no se pudo actualizar el registro")})),this.limpiar(),this.$router.push({path:"/almacen/categorias/"})}else{var a={Token:this.$store.state.token},r={headers:a};s.a.post("categoria/add",{nombre:this.nombre,descripcion:this.descripcion},r).then((function(e){console.log("Categoria agregada exitosamente: "+e.data.nombre)})).catch((function(e){console.log(e),alert("no se pudo agregar el registro")})),this.limpiar(),this.$router.push({path:"/almacen/categorias/"})}else console.log("Error de validacion")},opcion:function(){"/almacen/categorias/add"===this.ruta?(console.log("agregar"),this.editar=!1):(console.log("editar"),this.buscarPorId(),this.editar=!0)},buscarPorId:function(){var e=this,t={Token:this.$store.state.token},a={headers:t};s.a.get("categoria/query?_id="+this.$router.currentRoute.params.id,a).then((function(t){console.log("respuesta"+t.data.nombre),e.nombre=t.data.nombre,e.descripcion=t.data.descripcion})).catch((function(e){console.log("error del query :"+e)})),console.log(this.$router.currentRoute.params.id)},validacion:function(){var e=this.nombre.trim(),t=this.descripcion.trim();return this.validar=0,this.validarMensaje=[],(e.length<1||e.length>50)&&this.validarMensaje.push("debes ingresar un nombre y este no puede exceder los 50 caracteres"),(t.length<1||t.length>255)&&this.validarMensaje.push("debes ingresar una descripción y esta no puede exceder los 255 caracteres"),this.validarMensaje.length&&(this.validar=1),this.validar},limpiar:function(){this.nombre="",this.descripcion="",this.validar=0,this.validarMensaje=[]}},created:function(){this.opcion()},components:{CabeceroAlmacen:i["a"]}},u=c,l=(a("9d2e"),a("2877")),d=Object(l["a"])(u,r,n,!1,null,"f2b9d2aa",null);t["default"]=d.exports},"9d2e":function(e,t,a){"use strict";a("333f")},c8d2:function(e,t,a){var r=a("d039"),n=a("5899"),i="​᠎";e.exports=function(e){return r((function(){return!!n[e]()||i[e]()!=i||n[e].name!==e}))}}}]);
//# sourceMappingURL=agregar-categorias.50184240.js.map