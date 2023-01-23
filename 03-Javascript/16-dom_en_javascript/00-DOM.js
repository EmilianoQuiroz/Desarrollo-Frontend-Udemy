//***** Document Objet Model en Javascript *****//
//***** Accediendo al DOM *****//

//alert('Hola desde JS');

//Accedemos a los elementos definidos en el documento html
let cabecero = document.getElementById('cabecero').innerHTML;
let parrafo = document.getElementById('parrafo').innerHTML;


//Imprimimos en patalla los elementos
//document.write(cabecero);
//document.write(parrafo);

//***** Modificando el DOM *****//
/*
parrafo.innerHTML = 'Valor del parrafo modificado';
cabecero.innerHTML = 'Valor del cabecero modificado';

console.log(parrafo);
console.log(cabecero);
*/
//***** getElementByTagName en Javascript *****//

let etiqueta = document.getElementsByTagName('strong');/*Accedemos a todos los elementos que tengan la etiqueta 'strong'*/
document.write(etiqueta.length);/*Imprimimos el numero de elementos*/