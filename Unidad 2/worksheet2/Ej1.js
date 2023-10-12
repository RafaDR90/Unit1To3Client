//1
    //numero aleatorio 0,1
num01=Math.floor(Math.random()*2);
num100200=Math.floor(Math.random()*101)+100;
num1=parseInt(prompt("numero1"));
num2=parseInt(prompt("numero2"));
numeroUsuario=Math.floor(Math.random()*(num2-num1+1))+num1;
document.write(num01+"-"+num100200+"-"+numeroUsuario);

//
numeroAscendente=Math.floor(Math.random()*100);
numeroSeno=Math.sin((numeroAscendente * Math.PI) / 180);
document.write("<hr><table><tr><hd>"+numeroAscendente+"</hd><hd>"+numeroSeno+"</hd></tr></table>");
