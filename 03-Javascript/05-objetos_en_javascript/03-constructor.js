//***** CONSTRUCTOR *****//
//El método constructor es un metodo especial para crear e inicializar un objeto creado a partir de una clase.
//Creamos una funcion a la que le pasamos los elementos que queremos crear como parametro
function Persona(nombre, apellido, email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
}

//Ahora podemos crear todos los objetos que querramos en base al ya creado
let padre = new Persona('Jhon', 'Doe', 'jhon@doe.com');
console.log(padre);

let madre = new Persona('Jhon', 'Doe', 'jhon@doe.com');
console.log(madre);

let hijo = new Persona('Jhon', 'Doe', 'jhon@doe.com');
console.log(hijo);
