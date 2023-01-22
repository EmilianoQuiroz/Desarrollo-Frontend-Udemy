//***** Funciones Callback en Javascript *****//
//Una función de callback es una función que se pasa a otra función como un argumento, que luego se invoca dentro de la función externa para completar algún tipo de rutina o acción. El ejemplo anterior es una callback sincrónica, ya que se ejecuta inmediatamente.

//Funciones clasicas
function miFuncion1(){
    console.log('funcion 1');
}

function miFuncion2(){
    console.log('funcion 2');
}

miFuncion1();
miFuncion2();

//Funciones de tipo callback
function imprimir(mensaje){
    console.log(mensaje);
}/*Pasamos esta funcion como argumento de otra funcion (callback)*/

function sumar(num1, num2, funcionCallback){
    let resultado = num1 + num2;
    funcionCallback(resultado);
}

sumar(4, 10, imprimir);