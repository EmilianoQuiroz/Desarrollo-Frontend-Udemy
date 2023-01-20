//*****Programacion Orientada a Objetos en Javascript (Polimosrfismo) *****//
//El polimorfismo es la capacidad que nos proporciona un lenguaje de programación orientado a objetos para tratar un objeto como si fuera un objeto de otra clase.
//***** Programacion Orientada a Objetos en Javascript (Sobreescritura) *****//
//La Sobreescritura es la forma por la cual una clase que hereda puede re-definir los métodos de su clase Padre, de esta manera puede crear nuevos métodos con el mismo nombre de su superClase.

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
function imprimir(tipo){
    console.log(tipo.obtenerDetalles());
}
//Elemento de la clase padre
let empleado1 = new Empleado('Pedro', 3500);
//Creamos el objeto de la clase hija
let gerente1 = new Gerente('Luis', 3000, 'Sistemas');

imprimir(empleado1);//Estamos imprimiendo el metodo obtenerDetalles de la clase padre
imprimir(gerente1);