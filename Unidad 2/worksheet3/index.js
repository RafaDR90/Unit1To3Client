//1
function InvierteFrase(){
    let cadena1=prompt("Escribe algo");
    let cadenaInvertida="";
    for(let i=cadena1.length-1;i>=0;i--){
        cadenaInvertida+=cadena1[i];
    }

    document.write(cadenaInvertida+"<br>");
    document.write(cadena1.split(" ").reverse().join());
}

//2
function muestraInfo(texto){
    texto==texto.toLowerCase()?document.write("Esta todo en minuscula"):texto==texto.toUpperCase()?document.write("Esta todo en mayuscula"):document.write("Esta mixto");
}
//muestraInfo("sdfjsdlkfsjdl");

//3
function contadorApariciones(texto,subcadena){
    texto=texto.split(" ");
    contador=0;
    for(let i of texto){
        if(i==subcadena){
            contador+=1;
        }
    }
    document.write("La subcadena aparece en el texto "+contador+" veces");
}
//contadorApariciones("hola soy perro soy indio soy español soy moro","soy");

//4
function consonantesVocales(texto){
    texto=texto.replace(/\s/g, '');
    let vocales="";
    let consonantes="";
    for(i=0;i<texto.length;i++){
        if(texto[i]=="a"||texto[i]=="e"||texto[i]=="i"||texto[i]=="o"||texto[i]=="u"){
            vocales+=texto[i];
        }else{
            consonantes+=texto[i];
        }
    }
    document.write(consonantes.concat(' ',vocales));
}
//consonantesVocales("hola adios");

//5
function eliminaCaracteresRepetidos(texto){
    texto=texto.split("");
    let aux="";
    for(i of texto){
        if(!aux.includes(i)){
            aux+=i;
        }
    }
    document.write(aux);
}
eliminaCaracteresRepetidos("hola pero la ija");

//6
function cadenaSubcadena(cadena,subcadena){
    let posicion=cadena.indexOf(subcadena);
    if(posicion>=0){
        document.write(`La subcadena introducida forma parte de la cadena y comienza en la posicion ${posicion}`);
    }else{
        document.write(`La subcadena introducida no forma parte de la cadena`);
    }
}
//cadenaSubcadena("hola don pepito","don s");

//7
function esPalindromo (cadena){
    let cadenaInvert="";
    for(i=cadena.length-1;i>=0;i--){
        cadenaInvert=cadenaInvert+cadena[i];
    }
    if(cadena==cadenaInvert){
        document.write("Es un palindromo");
    }else{
        document.write("No es un palindromo");
    }
}
//esPalindromo("olos");

//8
function cuentaPalabras (texto){
    texto=texto.replace(/ +/g, ' ');
    texto=texto.split(" ")
    document.write(texto.length);
}
cuentaPalabras("hola   caracola perraca    perrona")