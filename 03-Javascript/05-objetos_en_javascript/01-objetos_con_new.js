//***** OBJETOS CON NEW *****//
/* Con la palabra new se le asigna un nuevo espacio en memoria a nuestro objeto */
let persona = new Object();/* Primero creamos el objeto vacio */
/* Luego le asignamos sus propiedades */
persona.nombre = 'Carlos';
persona.apellido = 'Adela';
persona.email = '123abc@gmail.com';

//console.log(persona);

// Agregar propiedades a un objeto 

persona.telefono = '1122334455';

// Escribimos el nombre de nuestro objeto seguido de un punto y el nombre de la propiedad que quer queremos crear
//Luego le asignamos el valor

//console.log(persona);

// Modificar valores de propiedades de nuestro objeto

persona.telefono = '1522334455';
// Podemos modificar los valores simplemente reescribiendolo de la misma manera que creado, siendo que se mostrara el ultimo valor asignado

//console.log(persona);

// Eliminar una propiedad

delete persona.nombre;

//Esto lo podemos hacer con la palabra reservada "delete" junto con el nombre del objeto y la propiedad a borrar

console.log(persona);
