tablero=[
    [-1,-1,-1],
    [-1,-1,-1],
    [-1,-1,-1]
];




function mostrarTablero(tablero){
    impreso=" ______________";
    for(let i=0;i<tablero.length;i++){
        impreso=impreso.concat("\n| ")
        for(let j=0;j<tablero.length;j++){
            impreso=impreso.concat(tablero[i][j]+" | ");
        }
    }
    console.log(impreso);
}

function hacerJugada(tablero){
    let coordX=prompt("coordenada X");
    let coordY=prompt("coordenada Y");
    tablero[coordX][coordY]=1;
}//sin terminar.