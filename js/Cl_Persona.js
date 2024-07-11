export default class Persona{
    constructor(nombre, sueldo, mIM){
        this.nombre=nombre
        this.sueldo=sueldo
    }
    set nombre(nombre){this._nombre=nombre}
    set sueldo(sueldo){this._sueldo=sueldo}

    get nombre(){return this._nombre}
    get sueldo(){return this._sueldo}
}