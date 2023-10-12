var num1 = parseInt(prompt("Introduce un número"));
alert("Adivina el número introducido anteriormente");
var contador = 1;

do {
    var num2 = parseInt(prompt(`Intento ${contador++}`));
    if(num1!=num2){
        alert((num1 < num2) ? "Es menor" : "Es mayor");
    }else{
        alert("Enhorabuena has acertado!");
    }
} while (num1 !== num2);