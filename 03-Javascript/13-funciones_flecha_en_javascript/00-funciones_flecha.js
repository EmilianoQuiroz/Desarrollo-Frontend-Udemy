//***** Funciones Flecha en Javascript *****//
//Una expresión de función flecha es una alternativa compacta a una expresión de función tradicional, pero es limitada y no se puede utilizar en todas las situaciones. Las principales limitaciones de estas funciones son no tiene sus propios enlaces a this o super y no se debe usar como métodos.

//Funcion clasica
/*
function miFuncion(){
    console.log('Saludos desde mi funcion');
}

miFuncion();
*/

//Funcion flecha
let miFuncion = () => console.log('Hola desde mi funcion')
/*Cuando usamos funciones flecha no aplica el concepto de Hoisting*/

miFuncion();