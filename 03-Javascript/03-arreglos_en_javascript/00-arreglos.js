//****** ARREGLOS ******//

//Un arreglo en Javascript es un dato de tipo objet que nos permite almacenar varios valores

//Formas de decarar un array

//let autos = new Array('BMW', 'Mercedes Benz', 'Volvo'); Forma antigua y deprecada

const autos = ['BMW', 'Mercedes Benz', 'Volvo']
//console.log(autos);

//Acceder a un array

//console.log(autos[0]);Con el nombre de nuestro array y entre corchetes ponemos el indice al que queremos acceder

//Acceder con un for

for(let i = 0; i < autos.length; i++)/* Con .length podemos acceder a la cantidad de elementos en nuestro arreglo */
{
    console.log(i + " : " + autos[i]);/* Nos mostrara todos los valores dentro de nuestro array */
}

