//***** OBJETOS *****//

// En JavaScript, un objeto es un entidad independiente con propiedades y tipos.

// Estructura de un objeto
//Primero definimos la variable y luego, entre corchetes, ponemos las propiedades
let persona = {
    name: "John",
    surname: "Doe",
    age: 30,
    hobby: "coding",
    email: "john.doe@gmail.com",
    nombreCompleto: function() {
        return this.nombre;
    }
}

//Acceder a nuestro objeto 
// console.log(persona);
//Acceder a una propiedad de nuestro objeto
// console.log(persona.age);
// console.log(persona.name);
console.log(nombreCompleto());