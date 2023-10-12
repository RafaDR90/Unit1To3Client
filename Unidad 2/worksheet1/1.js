/* //1
fecha=new Date();
document.write(`Año: ${fecha.getFullYear()}<br>Mes: ${fecha.getMonth()+1}<br>Dia: ${fecha.getDate()}<br>Hora: ${fecha.getHours()}<br>Minuto: ${fecha.getMinutes()}<br>Segundo: ${fecha.getSeconds()}`);

//2
var fechaHoy=new Date();
var fecha85=fechaHoy;
fecha85.setDate(fecha85.getDate()+85)
document.write(fecha85+"<br><br>");

var fecha187
 */
//3
/* a=60;
var intervalo=setInterval(function(){
    console.log(a);
    if(a!=0)
        a-=1;
    else
        clearInterval(intervalo)
},1000); */

//5
function mostrarHora() {
    let reloj = new Date();
    console.log(reloj.getHours() + ":" + reloj.getMinutes() + ":" + reloj.getSeconds());

    setTimeout(mostrarHora, 1000);
}

mostrarHora();
document.getElementById().