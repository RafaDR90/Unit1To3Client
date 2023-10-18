class Juego{
    constructor(tamaño){
        this.tiempo=0;
        this.tablero=this.crearTablero(tamaño);
        this.blanco=[tamaño-1,tamaño-1];
        this.intervalId = null;
    }

    baraja(){
        for(let i=0;i<2;i++){
            this.mover(Math.floor(Math.random() * 4))
        }
        const intervalId = setInterval(() => {
            this.tiempo++;
        }, 1000);
    }

    crearTablero(tamaño){
        let contador=0;
        let tablero=[]
        for(let i=0;i<tamaño;i++){
            tablero[i]=[];
            for(let j=0;j<tamaño;j++){
                tablero[i][j]=contador++;              
            }
        }
        tablero[tablero.length-1][tablero[0].length-1]=null;
        return tablero;
    }

    imprimirTablero() {
        for (let i=0;i<this.tablero.length;i++) {
            let row ='';
            for (let j=0;j<this.tablero[i].length;j++) {
                row+=this.tablero[i][j] + '\t';
            }
            console.log(row);
        }
    }

    /**
     * mueve ficha vacia en cualquier direccion, la direccion se introducira en valor numerico
     * donde arriba=0 abajo=1 izquierda=2 derecha=3
     *
     * @param {*} direccion valor numerio de la direccion en la que vas a mover.
     * @memberof Juego
     */
    mover(direccion){
        switch(direccion){
            case 0:
                if(this.blanco[0]>0){
                    this.tablero[this.blanco[0]][this.blanco[1]]=this.tablero[this.blanco[0]-1][this.blanco[1]];
                    this.tablero[this.blanco[0]-1][this.blanco[1]]=null;
                    this.blanco[0]-=1;
                }else{
                    console.log("Si sigues subiendo te saldras del tablero!");
                }
                break;
            case 1:
                if(this.blanco[0]<((this.tablero[0].length-1))){
                    this.tablero[this.blanco[0]][this.blanco[1]]=this.tablero[this.blanco[0]+1][this.blanco[1]];
                    this.tablero[this.blanco[0]+1][this.blanco[1]]=null;
                    this.blanco[0]+=1;

                }else{
                    console.log("Si sigues bajando te saldras del tablero!");
                }
                break;
            case 2:
                if(this.blanco[1]>0){
                    this.tablero[this.blanco[0]][this.blanco[1]]=this.tablero[this.blanco[0]][this.blanco[1]-1];
                    this.tablero[this.blanco[0]][this.blanco[1]-1]=null;
                    this.blanco[1]-=1;
                }else{
                    console.log("Si sigues te saldras del tablero!");
                }
                break;
            case 3:
                if(this.blanco[1]<(this.tablero[0].length-1)){
                    this.tablero[this.blanco[0]][this.blanco[1]]=this.tablero[this.blanco[0]][this.blanco[1]+1];
                    this.tablero[this.blanco[0]][this.blanco[1]+1]=null;
                    this.blanco[1]+=1;
                }else{
                    console.log("Si sigues te saldras del tablero!");
                }
        }
        if(this.comprovarTablero() === true) {
            clearInterval(this.intervalId);
            return "Enhorabuena! Has completado el puzzle! Has tardado: "+this.tiempo+" segundos";

        }
    }
    

    comprovarTablero() {
        let contador = 0;
        const tamaño = this.tablero.length;
        for (let i = 0; i < tamaño; i++) {
            for (let j = 0; j < tamaño; j++) {
                if (i !== tamaño - 1 || j !== tamaño - 1) {
                    if (this.tablero[i][j] !== contador) {
                        return false;
                    }
                }
                contador++;
            }
        }
        return true;
    }

}
jugando=new Juego(5,55);

jugando.imprimirTablero()