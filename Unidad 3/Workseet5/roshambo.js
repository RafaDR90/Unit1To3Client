class Jugador{
    constructor(nombre){
        this.nombre=nombre;
        wins=0;
        losses=0;
        mano=null
    }
    elegirMano(mano){
        this.mano=mano
    }
}

class roshambo{
    constructor(jugador1,jugador2){
        this.jugador1=jugador1;
        this.jugador2=jugador2;
    }

    jugar(){
        ganador=0;
        if(this.jugador1.mano=="tijeras" && this.jugador2.mano=="piedra"){
            console.log("Gana el jugador 2!");
            this.jugador2.wins+=1;
            this.jugador1.losses+=1;
            console.log(`${jugador1.nombre}: victorias: ${jugador1.wins} / derrotas: ${jugador1.losses}`);
            console.log(`${jugador2.nombre}: victorias: ${jugador2.wins} / derrotas: ${jugador2.losses}`);
        }else if(this.jugador1.mano=="piedra" && this.jugador2.mano=="tijeras"){
            console.log("Gana el jugador 1!");
            this.jugador1.wins+=1;
            this.jugador2.losses+=1;
            console.log(`${jugador1.nombre}: victorias: ${jugador1.wins} / derrotas: ${jugador1.losses}`);
            console.log(`${jugador2.nombre}: victorias: ${jugador2.wins} / derrotas: ${jugador2.losses}`);
        }else if(this.jugador1.mano=="papel" && this.jugador2.mano=="piedra"){
            console.log("Gana el jugador 1!");
            this.jugador1.wins+=1;
            this.jugador2.losses+=1;
            console.log(`${jugador1.nombre}: victorias: ${jugador1.wins} / derrotas: ${jugador1.losses}`);
            console.log(`${jugador2.nombre}: victorias: ${jugador2.wins} / derrotas: ${jugador2.losses}`);
        }else if(this.jugador1.mano=="piedra" && this.jugador2.mano=="papel"){
            console.log("Gana el jugador 2!");
            this.jugador2.wins+=1;
            this.jugador1.losses+=1;
            console.log(`${jugador1.nombre}: victorias: ${jugador1.wins} / derrotas: ${jugador1.losses}`);
            console.log(`${jugador2.nombre}: victorias: ${jugador2.wins} / derrotas: ${jugador2.losses}`);
        }else if(this.jugador1.mano=="tijeras" && this.jugador2.mano=="papel"){
            console.log("Gana el jugador 1!");
            this.jugador1.wins+=1;
            this.jugador2.losses+=1;
            console.log(`${jugador1.nombre}: victorias: ${jugador1.wins} / derrotas: ${jugador1.losses}`);
            console.log(`${jugador2.nombre}: victorias: ${jugador2.wins} / derrotas: ${jugador2.losses}`);
        }else if(this.jugador1.mano=="papel" && this.jugador2.mano=="tijeras"){
            console.log("Gana el jugador 2!");
            this.jugador2.wins+=1;
            this.jugador1.losses+=1;
            console.log(`${jugador1.nombre}: victorias: ${jugador1.wins} / derrotas: ${jugador1.losses}`);
            console.log(`${jugador2.nombre}: victorias: ${jugador2.wins} / derrotas: ${jugador2.losses}`);
        }else if(this.jugador1.mano==this.jugador2.mano){
            console.log("Es un empate.")
            console.log(`${jugador1.nombre}: victorias: ${jugador1.wins} / derrotas: ${jugador1.losses}`);
            console.log(`${jugador2.nombre}: victorias: ${jugador2.wins} / derrotas: ${jugador2.losses}`);
        }
    }
}