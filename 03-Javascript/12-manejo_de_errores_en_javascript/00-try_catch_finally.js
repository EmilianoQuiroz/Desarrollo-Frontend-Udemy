//*****Manejo de errores en Javascript *****//
'use strict';/*En "modo estricto" solo podremos usar variables que hayan sido previamente declaradas*/

try{
    let x;
    x = 10;/*Al estar llamando a una variable que no fue previamente declarada se produce un error*/
}
catch(error){
    /*En catch se recibe el error del try, se procesa y lo manda a imprimir para su facil identificacion*/
    console.log(error);
}
finally{
    /*Este bloque se ejecuta independientemente si el tray o el catch se ejecutan o no*/
    console.log('Termina la revision de errores');
}
console.log('Siguiente ejecucion');