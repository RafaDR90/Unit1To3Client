//1 GATO
class Gato{
    constructor(cansado,hambriento,soledad,felicidad){
        this.cansado=cansado;
        this.hambriento=hambriento;
        this.soledad=soledad;
        this.felicidad=felicidad;
    }

    alimentar(){
        quiereComer=Math.round(Math.random());
        if(quiereComer==1){
            if(this.hambriento<100){
                this.hambriento+=30;
            }
            (this.hambriendo>100)?this.hambriento=100:this.hambriento=this.hambriento;
        }else{
            console.log("No tiene hambra");
        }
    }

    dormir(){
        quiere=Math.round(Math.random());
        if(quiere==1){
        if(this.cansado>0){
            this.cansado=0;
            console.log(`Ha descansado`);
        }else{
            console.log("No necesito dormir!");
        }
        }
    }

    acariciar(){
        quiere=Math.round(Math.random());
        if(quiere==1){
        if(this.soledad>0){
            this.soledad-=30;
        }
        if(this.felicidad<100){
            this.felicidad+=30;
        }
        if(this.soledad<0) this.soledad=0;
        if (this.felicidad>100) this.felicidad=100;
        }else{
            console.log("No quiere que lo acaricien");
        }
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
        if(cantidad<100 && cantidad > -1){
            this.cansado=cantidad;
        }else{
            document.log("No se ha podido modificar.");
        }
    }

    modificarHambre(catidad){
        if(cantidad<=0)
        if(cantidad<100 && cantidad > -1){
            this.hambriento=cantidad;
        }else{
            document.log("No se ha podido modificar.");
        }
    }

    modificarSoledad(catidad){
        if(cantidad<=0)
        if(cantidad<100 && cantidad > -1){
            this.soledad=cantidad;
        }else{
            document.log("No se ha podido modificar.");
        }
    }

    modificarFelicidad(catidad){
        if(cantidad<=0)
        if(cantidad<100 && cantidad > -1){
            this.felicidad=cantidad;
        }else{
            document.log("No se ha podido modificar.");
        }
    }
}

//2 Lista de lectura

class BookList{
    constructor(){
        this.numLibrosLeidos=0;
        this.todosLibros=[];
        this.numLibrosNoLeidos=0;
        this.libroALeer=0;
        this.libroLecturaActual=-1;
        this.ultimoLibroLeido=-1;
    }

    añadirLibro(libro){
        if(!this.todosLibros.includes(libro.titulo)){
            this.todosLibros.push(libro.tiulo);
            if(libro.leido===false){
                this.numLibrosNoLeidos++;
                if(this.libroLecturaActual==-1){
                    this.libroLecturaActual=0;
                    this.libroALeer++;
                }
            }else{
                this.numLibrosLeidos++;
                if(this.ultimoLibroLeido==-1){
                    this.ultimoLibroLeido==0;
                }
            }
        }
    }

    terminarDeLeer(){
        if(this.libroLecturaActual!=-1){
            libro=this.todosLibros[this.libroLecturaActual];
            this.ultimoLibroLeido=this.libroLecturaActual++;
            this.libroALeer++;
            leidosYNoLeidos=this.actualiazrLibrosLeidos();
            this.numLibrosNoLeidos=leidosYNoLeidos[1];
            this.numLibrosLeidos=leidosYNoLeidos[0];
            libro.leido=true;
            libro.fechaLectura=Date();
        }
    }

    actualiazrLibrosLeidos(){
        leidosYNoLeidos=[0,0];
        for(x of this.todosLibros){
            if (x.leido==true) {
                leidosYNoLeidos[0]++;
            }else{
                leidosYNoLeidos[1]++;
            }
        }
        return leidosYNoLeidos;
    }


}

class Book{
    constructor(titulo,genero,autor,leido=false,fechaLectura=null){
        this.titulo=titulo;
        this.genero=genero;
        this.autor=autor;
        this.leido=leido;
        this.fechaLectura=fechaLectura;
    }

    establecerFechaLectura(fecha,libro){
        if(libro.fechaLectura==null){
            libro.fechaLectura==fecha;
        }else{
            console.log("No se puede cambiar una fecha de lectura");
        }
    }
}

libros=[];
libros[0]=new Book("Harry Potter","Magia","howars");
libros[1]=new Book("Mujeres Calentorras","Accion","Torbe",true,new Date(2020, 3, 17));
libros[2]=new Book("Padre rico padre pobre", "Economia", "Nombre Raro");

estanteria=new BookList();
for(x of libros){
    estanteria.añadirLibro(x)
}

console.log(estanteria.todosLibros);