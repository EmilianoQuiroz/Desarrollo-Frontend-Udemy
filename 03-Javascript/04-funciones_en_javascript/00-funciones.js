//***** FUNCIONES EN JAVASCRIPT *****//
// Una funcion es un codigo que se puede volver a reutilizar

//La estructura basica de una funcion consta de la palabra reservada "function" seguido del nombre de la misma
//Luego entre parentesis los parametros (si es que nuestra funcion los requiere)
//Y por ultimo el codigo que ejecutara nuestra funcion
//Primero declaramos la funcion y luego podremos utilizarla las veces que querramos 
function miFuncion(a,b)
{

    console.log("Suma: " + (a + b)); //Nuestra funcion va a sumar los parametros que el usuario ingrese

}

//Luego de declarar la funcion podremos usarla las veces que necesitemos, antes o despues de la declaracion de la funcion.
miFuncion(1,2);
miFuncion(23,4);
miFuncion(3,34);
miFuncion(33,56); 