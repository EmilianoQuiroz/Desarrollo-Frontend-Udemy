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

parrafo.innerHTML = 'Valor del parrafo modificado';
cabecero.innerHTML = 'Valor del cabecero modificado';

console.log(parrafo);
console.log(cabecero);