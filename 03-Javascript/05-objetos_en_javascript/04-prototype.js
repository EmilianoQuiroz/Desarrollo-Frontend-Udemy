//***** Prototype en Javascript *****//
//Nos sertvira para asignar propiedades a todos los objetos que creemos

function Persona(nombre, apellido, email) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function (){
        return this.nombre + ' ' + this.apellido;
    }
}
Persona.prototype.tel = '1122334455';//Se asigna el valor a todos los objetos

let padre = new Persona('Juan', 'Perez', 'juan@gmail');
padre.tel = '2233445566';//Se asigna un nuevo valor
console.log(padre.tel);
let madre = new Persona('Juana', 'Perez', 'juana@gmail');
console.log(madre.tel);