class Elevador{
    private pisoActual:Number;
    private numPisos:Number;
    private edoPuerta:boolean;
    constructor(){
        this.pisoActual=1;
        this.numPisos=5;
        this.edoPuerta=true;
    }

    getPisoActual(pisoActual){
        return this.pisoActual;
    }

    getNumPisos(numPisos){
        return this.numPisos;
    }

    getEdoPuerta(edoPuerta){
        return this.edoPuerta;
    }

    abrirPuerta(getEdoPuerta){
        if(getEdoPuerta==false){
            getEdoPuerta==true;
        }
    }

    cerrarPuerta(getEdoPuerta){
        if(getEdoPuerta==true){
            getEdoPuerta==false;
        } 
    }
    destino:number
    subir(getPisoActual,getNumPisos,destino){
        if(getPisoActual=getNumPisos){
            console.log("Ya se llego al limite de pisos no puede subir mas");
        }
        else if(destino>getPisoActual){
            do{
                getPisoActual+=1
                console.log(getPisoActual);
            }while(destino>getPisoActual);
        }
    }

    bajar(getPisoActual, getNumPisos,destino){
        if(getPisoActual=getNumPisos){
            console.log("Ya se llego al limite de pisos no puede subir mas");
        }
        else if(destino<getPisoActual){    
        do{
            getPisoActual-=1
            console.log(getPisoActual);
        }while(destino<getPisoActual);
        }
    }

    irA(destino,getPisoActual){
        if(destino<getPisoActual){
        do{
            getPisoActual-=1
            console.log(getPisoActual);
        }while(destino<getPisoActual);}
        else if(destino>getPisoActual){
           do{
                getPisoActual+=1
                console.log(getPisoActual);
            }while(destino>getPisoActual);
        }
    }
}