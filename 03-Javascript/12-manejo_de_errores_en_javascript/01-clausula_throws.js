//***** Clausula Throws en Javascript *****//

'use strict';/*En "modo estricto" solo podremos usar variables que hayan sido previamente declaradas*/

let resultado = 'Hola';

try{
    //x = 10;
    if(isNaN(resultado)) throw 'No es un numero'; /*Si 'resultado no es un numero, entonces mandamos el mensaje dentro de throw como error '*/
    else if(resultado === '') throw 'Cadena vacia';
}
catch(error){
    console.log(error);
    console.log(error.name);
    console.log(error.message);
}
finally {
    console.log('Termina revision de errores');
}
//console.log('Siguiente ejecucion');