window.addEventListener('scroll',scrollInfinito);
//document.write("<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>")

let scrollHeight=document.documentElement.scrollHeight;
//altura total scroll
let scrollTop=document.documentElement.scrollTop;
//distancia respecto arriba
let clientHeight=document.documentElement.clientHeight;
//lo que ocupa el scroll, es un valor que va a ser fijo
function scrollInfinito(){
    if((scrollTop+clientHeight)>(scrollHeight-200)){
    document.getElementById("etiqueta").innerHTML+="SALTA SCROLL<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>";
    }
}