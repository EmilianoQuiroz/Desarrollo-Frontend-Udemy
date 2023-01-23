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

//El objetivo de las funciones callbacks es que puedan ser utilizadas de manera asincrona

//***** Llamadas Asincronas con Set Time Out en Javascript *****//

function miFuncionCallback(){
    console.log('Saludo asincrono despues de tres segundos');
}

setTimeout(miFuncionCallback, 3000);//La funcion se ejecuta despues de tres segundos
/*setTimeout tambien puede recibir directamente la funcion como parametro*/

setTimeout(() => console.log('Saludo asincrono despues de 5 segundos'), 5000);//La funcion se pasa como parametro en el setTimeout y se ejecuta despues de 5 segundos