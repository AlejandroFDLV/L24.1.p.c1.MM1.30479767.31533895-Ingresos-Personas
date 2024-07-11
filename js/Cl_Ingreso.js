export default class Ingreso{
    constructor(){
        this.mIM=9999;
        this.acIn=0;
    }
    procesarPersona(p){
        this.acIn+=p.sueldo;
        if(p.sueldo<this.mIM)
            this.mIM=p.sueldo;
    }
    promIng(){
        return (this.acIn/4);
    }
    menIng(){return this.mIM;}
}