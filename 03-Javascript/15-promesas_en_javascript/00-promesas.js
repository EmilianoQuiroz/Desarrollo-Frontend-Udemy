//***** Promesas en Javascript *****//
//Una Promesa ( Promise ) es un proxy de un valor que no necesariamente se conoce cuando se crea la promesa. Le permite asociar controladores con el valor eventual de éxito o el motivo de falla de una acción asíncrona.

let miPromesa = new Promise((resolve, rejected) => {
    let expresion = true;
    if(expresion){
        resolve('Resolvio correctamente');
    }
    else {
        rejected('Se produjo un error');
    }
});

//Metodo .them
/*
miPromesa.then(
    valor => console.log(valor),
    error => console.error(error)
);
Mandamos a llamar a nuestra promesa
*/

//Metodo .catch
miPromesa.then(valor => console.log(valor)).catch(error => console.error(error));
