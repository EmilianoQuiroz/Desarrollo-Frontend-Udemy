//*****Programacion Orientada a Objetos en Javascript (instance Of) *****//
//Con esta palabra reservada podemos preguntar si un parametro pertenece a cierta clase

//Clase padre
class Empleado {
    constructor(nombre, sueldo){
        this._nombre = nombre;
        this._sueldo = sueldo;
    }

    obtenerDetalles(){
        return `Empleado: nombre: ${this._nombre}, sueldo: ${this._sueldo}`;
    }
}

//Clase hija
class Gerente extends Empleado{
    constructor(nombre, sueldo,departamento){
        super(nombre, sueldo);
        this._departamento = departamento;
    }

    obtenerDetalles(){
        return `Gerente:${super.obtenerDetalles()} depto: ${this._departamento}`;
    }
}
//Metodo independiente
/*Estamos aplicando una de las multiples formas en las que podemos llamar a un metodo de la clase padre o hija*/
function determinarTipo(tipo){
    console.log(tipo.obtenerDetalles());
    if(tipo instanceof Gerente){
        console.log('Es un objeto de tipo gerente');
    }
    else if(tipo instanceof Empleado){
        console.log('Es un objeto de tipo empleado');
    }
    else if(tipo instanceof Object){
        console.log('Es un objeto');
    }
}
//Elemento de la clase padre
let empleado1 = new Empleado('Pedro', 3500);
//Creamos el objeto de la clase hija
let gerente1 = new Gerente('Luis', 3000, 'Sistemas');

determinarTipo(empleado1);//Estamos imprimiendo el metodo obtenerDetalles de la clase padre
determinarTipo(gerente1);