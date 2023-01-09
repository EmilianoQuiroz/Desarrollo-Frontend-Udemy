//***** CLASES EN JAVASCRIPT ******//
/*
Las clases de javascript, introducidas en ECMAScript 2015, son una mejora sintáctica sobre la herencia basada en prototipos de JavaScript. La sintaxis de las clases no introduce un nuevo modelo de herencia orientada a objetos en JavaScript */

//Estructura
//Creamos la plantilla 
class Persona{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}
//Llamamos al constructor de la clase
let persona1 = new Persona('Santiago','24');/*Se pueden crear todo tipo de objetos a partir de esta clase*/
//Imprimimos el resultado
console.log(persona1);

let persona2 = new Persona('Luis','23');
let persona3 = new Persona('Juan ','21');

console.log(persona2);
console.log(persona3);