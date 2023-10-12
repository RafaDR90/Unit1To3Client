function Hora(){
    hora=new Date();
    document.getElementById("reloj").innerHTML=`${hora.getHours()}:${hora.getMinutes()}:${hora.getSeconds()}`; 
}
setInterval(Hora,1000);
