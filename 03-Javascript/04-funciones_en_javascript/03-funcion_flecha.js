//***** FUNCIONES FLECHA *****/
// Una expresión de función flecha es una alternativa compacta a una expresión de función tradicional, pero es limitada y no se puede utilizar en todas las situaciones.

const sumar = (a,b) => a + b;

//Omitimos la palabra reservada function, luego a una constante le asignamos la función
//Le asignamos entre parentesis los parametros y luego seguido de los caracteres "=>" ponemos el cuerpo de la función

//Llamamos a la funcion 
let resultado = sumar(23,32);

//Mostramos el resultado
console.log(resultado);
