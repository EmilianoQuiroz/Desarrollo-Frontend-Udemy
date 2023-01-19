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
/*
let teclado1 = new Teclado('USB', 'RedDragon');
console.log(teclado1.toString());
let teclado2 = new Teclado('Bluetooth', 'Logitech');
console.log(teclado2.toString());
*/

//Clase Monitor (Es una clase independiente)

class Monitor{
    
    static contadorMonitor = 0;

    constructor(marca, tamaño){
        this._idMonitor = ++Monitor.contadorMonitor;
        this._marca = marca;
        this._tamaño = tamaño;
    }

    get idMonitor(){
        return this._idMonitor;
    }
    toString(){
        return `Monitor: [idMonitor: ${this._idMonitor}, Marca: ${this._marca}, Tamaño: ${this._tamaño}]`;
    }
}

//Prueba clase Monitor
/*
let monitor1 = new Monitor('RedDragon', '24');
console.log(monitor1.toString());
console.log(monitor2.toString());
*/

//Class computadora
class Computadora{
    static contadorComputadoras = 0;
    constructor(nombre, monitor, raton, teclado){
        this._idComputadora = ++Computadora.contadorComputadoras;
        this._nombre = nombre;
        this._monitor = monitor;
        this._raton = raton;
        this._teclado = teclado;
    }
    toString(){
        return `Computadora ${this._idComputadora}: ${this._nombre}\n ${this._monitor}\n ${this._raton}\n ${this._teclado}`;
    }
}

//Clase Orden
class Orden{
    static contadorOrdenes = 0;

    constructor(){
        this._idOrden = ++Orden.contadorOrdenes;
        this._computadoras = [];
    }

    get idOrden(){
        return this._idOrden;
    }
    agregarComputadora(computadora){
        this._computadoras.push(computadora);
    }
    mostrarOrden(){
        let computadorasOrden = ' ';
        for(let computadora of this._computadoras){
            computadorasOrden += `\n${computadora}`;
        }
        console.log(`Orden: ${this._idOrden}, Computadoras: ${computadorasOrden}`);
    }
}

let raton1 = new Raton('USB', 'HP');
let teclado1 = new Teclado('USB', 'RedDragon');
let monitor1 = new Monitor('RedDragon', '24');


let computadora1 = new Computadora('HP', monitor1, teclado1, raton1);

//console.log(computadora1.toString());

let orden1 = new Orden();
orden1.agregarComputadora(computadora1);
orden1.mostrarOrden();