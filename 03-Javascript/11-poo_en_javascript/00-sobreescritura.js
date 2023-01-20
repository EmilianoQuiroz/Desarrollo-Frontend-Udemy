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

//Elemento de la clase padre
let empleado1 = new Empleado('Pedro', 3500);
console.log(empleado1.obtenerDetalles());

//Creamos el objeto de la clase hija
let gerente1 = new Gerente('Luis', 3000, 'Sistemas');
console.log(gerente1.obtenerDetalles());