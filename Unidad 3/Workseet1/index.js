//ej2
var lanzamiento=()=> Math.floor((Math.random()*6)+1);

//ej3
var num=[0,0,0,0,0,0];
for(i=0;i<6000;i++){
    tirada=lanzamiento();
    switch(tirada){
        case 1:
            num[0]++
            break;
        case 2:
            num[1]++
            break;
        case 3:
            num[2]++
            break;
        case 4:
            num[3]++
            break;
        case 5:
            num[4]++
            break;
        case 6:
            num[5]++
            break;
            default:
                console.log("Algo va mal");
    }
}
//console.log(`El dado 1 ha salido ${num[0]} veces\nEl dado 2 ha salido ${num[1]} veces\nEl dado 3 ha salido ${num[2]} veces\nEl dado 4 ha salido ${num[3]} veces\nEl dado 5 ha salido ${num[4]} veces\nEl dado 6 ha salido ${num[5]} veces`);

//6 calcula potencia de forma recursiva
calculaPotencia=(a,b) => {
    if (b==0){
        return 1;
    }else if(b<0){
        return calculaPotencia(a,b+1)/a;
    }else{
        return a*calculaPotencia(a,b-1);
    }     
}
//document.write(calculaPotencia(3,4));

//7

calculaFactorial=(num) => {
    if(num==0){
        return 1;
    }else{
        return num*calculaFactorial(num-1);
    }
}
document.write(`<table border='solid black'><tr>`);
for(i=0;i<10;i++){
    document.write(`<th>${i+1}</th>`);
}
document.write("</tr><tr>");
for(i=0;i<10;i++){
    document.write(`<td>`+calculaFactorial(i+1)+`</td>`)
}
document.write(`</tr></table>`);
