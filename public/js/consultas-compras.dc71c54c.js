(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["consultas-compras"],{"35e8":function(a,e,r){"use strict";r("5dce")},"5dce":function(a,e,r){},"90d4":function(a,e,r){"use strict";r.r(e);var s=function(){var a=this,e=a.$createElement,r=a._self._c||e;return r("section",{staticClass:"consultasCompras"},[r("CabeceroConsultas"),r("canvas",{attrs:{id:"myChart",width:"400",height:"200"}})],1)},t=[],o=(r("d81d"),r("8737")),n=r("bc3a"),b=r.n(n),c=r("30ef"),i=r.n(c),g={data:function(){return{valores:[],meses:[],totales:[],myChart:""}},methods:{listar:function(){var a=this,e={Token:this.$store.state.token},r={headers:e};b.a.get("ingreso/grafico-doce-meses",r).then((function(e){a.valores=e.data,a.graficar()})).catch((function(a){console.log(a)}))},graficar:function(){var a=this,e="";this.valores.map((function(r){switch(parseInt(r._id.mes)){case 1:e="Enero";break;case 2:e="Febrero";break;case 3:e="Marzo";break;case 4:e="Abril";break;case 5:e="Mayo";break;case 6:e="Junio";break;case 7:e="Julio";break;case 8:e="Agosto";break;case 9:e="Septiembre";break;case 10:e="Octubre";break;case 11:e="Noviembre";break;case 12:e="Diciembre";break}a.meses.push(e),a.totales.push(r.total)}));var r=document.getElementById("myChart");new i.a(r,{type:"bar",data:{labels:this.meses,datasets:[{label:"Compras de los ultimos 12 meses",data:this.totales,backgroundColor:["rgba(255, 99, 132, 0.6)","rgba(54, 162, 235, 0.6)","rgba(255, 206, 86, 0.6)","rgba(75, 192, 192, 0.6)","rgba(153, 102, 255, 0.6)","rgba(255, 159, 64, 0.6)","rgba(255, 99, 132, 0.6)","rgba(54, 162, 235, 0.6)","rgba(255, 206, 86, 0.6)","rgba(75, 192, 192, 0.6)","rgba(153, 102, 255, 0.6)","rgba(255, 159, 64, 0.6)"],borderColor:["rgba(255, 99, 132, 1)","rgba(54, 162, 235, 1)","rgba(255, 206, 86, 1)","rgba(75, 192, 192, 1)","rgba(153, 102, 255, 1)","rgba(255, 159, 64, 1)","rgba(255, 99, 132, 1)","rgba(54, 162, 235, 1)","rgba(255, 206, 86, 1)","rgba(75, 192, 192, 1)","rgba(153, 102, 255, 1)","rgba(255, 159, 64, 1)"],borderWidth:3}]},options:{scales:{y:{beginAtZero:!0}}}})}},mounted:function(){this.listar()},components:{CabeceroConsultas:o["a"]}},l=g,u=(r("35e8"),r("2877")),d=Object(u["a"])(l,s,t,!1,null,"135ada59",null);e["default"]=d.exports}}]);
//# sourceMappingURL=consultas-compras.dc71c54c.js.map