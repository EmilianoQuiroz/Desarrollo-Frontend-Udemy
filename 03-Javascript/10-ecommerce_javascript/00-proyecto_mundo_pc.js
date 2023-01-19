//***** Proyecto Mundo PC en Javascript *****//
/*
Crear una aplicacion que tenga una clase padre llamada DispositivoEntrada que tenga dos clases hijas, una llamada Raton y la otra Teclado. La clase Teclado a su vez debe tener una clase hija llamada Monitor, de esta se extiende la calse Computadora que se compone de todos los objetos creados hasta el momento. Por ultimo, se crea la clase Orden, con la cual, debemos poder crear una serie de computaodras.
*/

//Clase padre: DispositivoEntrada
class DispositivoEntrada{
    constructor(tipoEntrada, marca){
        this._tipoEntrada = tipoEntrada;
        this._marca = marca;
    }
    get tipoEntrada(){
        return this._tipoEntrada;
    }
    set tipoEntrada(tipoEntrada){
        this._tipoEntrada = tipoEntrada;
    }
    get marca(){
        return this._marca;
    }
    set marca(marca){
        this._marca = marca;
    }
}

//Clases hijas
//Clase Raton
class Raton extends DispositivoEntrada{
    static contadorRatones = 0;

    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca);
        this._idRaton = ++Raton.contadorRatones;
    }
    get idRaton(){
        return this._idRaton;
    }
    toString(){
        return `Raton:[idRaton: ${this._idRaton}, tipoEntrada: ${this._tipoEntrada}, marca: ${this._marca}]`;
    }
}

//Prueba clase raton
/*
let raton1 = new Raton('USB', 'HP');
console.log(raton1.toString());
let raton2 = new Raton('Bluetooth', 'Red Dragon');
console.log(raton2.toString());
*/

//Class teclado
class Teclado extends DispositivoEntrada{
    static contadorTeclado = 0;

    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca);
        this._idTeclado = ++Teclado.contadorTeclado;
    }
    
    get idTeclado(){
        return this._idTeclado;
    }
    toString(){
        return `Teclado: [idTeclado: ${this._idTeclado}, tipoEntrada: ${this._tipoEntrada}, marca: ${this._marca}]`;
    }

}

//Prueba clase Teclado
/*let teclado1 = new Teclado('USB', 'RedDragon');
console.log(teclado1.toString());
let teclado2 = new Teclado('Bluetooth', 'Logitech');
console.log(teclado2.toString());
*/