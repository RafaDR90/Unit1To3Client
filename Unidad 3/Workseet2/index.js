//5
function paresImpares(cantidad){
    arrayPar=[];
    let pI=[];
    for(i=0;i<cantidad;i++){
        pI.push(Math.floor((Math.random()*901)+100));
    }
    
    for(numero of pI){
        document.write(numero+"<br>");
    }
    document.write("<br><br>");
    for(i=pI.length-1;i>=0;i--){
        if(pI[i]%2==0){
            arrayPar.push(pI[i]);
            pI.splice(i,1);
        }
    }
    pI=pI.concat(arrayPar);
    for(numero of pI){
        document.write(numero+"<br>");
    }
}
//paresImpares(5);

//7
function arrayUnaDimension(){
    arr=[]=[];
    for(i=0;i<10;i++){
        
    }
}