class Gato{
    constructor(cansado,hambriento,soledad,felicidad){
        this.cansado=cansado;
        this.hambriento=hambriento;
        this.soledad=soledad;
        this.felicidad=felicidad;
    }

    alimentar(){
        if(this.hambriento<100){
            this.hambriento+=30;
        }
        (this.hambriendo>100)?this.hambriento=100:this.hambriento=this.hambriento;
    }

    dormir(){
        if(this.cansado>0){
            this.cansado=0;
            console.log(`Ha descansado`);
        }else{
            console.log("No necesito dormir!");
        }
    }

    acariciar(){
        if(this.soledad>0){
            this.soledad-=30;
        }
        if(this.felicidad<100){
            this.felicidad+=30;
        }
        if(this.soledad<0) this.soledad=0;
        if (this.felicidad>100) this.felicidad=100;
    }

    verEstado(){
        necesitaCuidado=false;
        if(this.hambriento<=30){
            document.write(`Gato tiene mucha hambre`);
            necesitaCuidado=true;
        }else if(this.hambriento<=70){
            document.write(`Gato tiene hambre.`);
            necesitaCuidado=true;
        }

        if(this.cansado>=70){
            document.write(`Gato esta reventado`);
            necesitaCuidado=true;
        }else if(this.cansado>=30){
            document.write(`Gato esta cansado`);
            necesitaCuidado=true;
        }

        if(this.soledad>70){
            document.write("Gato se siente muy solo");
            necesitaCuidado=true;
        }else if(this.soledad>30){
            document.write("Gato se siente un poco solo");
            necesitaCuidado=true;
        }

        if(this.felicidad<30){
            document.write("Gato es infeliz");
            necesitaCuidado=true;
        }else if(this.felicidad<70){
            document.write("Gato no es todo lo feliz que podria ser");
            necesitaCuidado=true;
        }

        if(necesitaCuidado){
            document.write("Gato esta de puta madre.");
        }
    }

    modificarCansancio(catidad){
        if(cantidad<=0)
    }
}
