//Tipos de datos en Javascript
//-- Tipo de dato String--//
/* El String es un tipo de dato que contiene caracteres y texto */
let nombre = "Santiago";
console.log(nombre); /* En este ejemplo imprimimos un tipo de dato string */

//--Tipo de dato Numerico--//
let numero = 12;
console.log(numero); /* En este ejemplo imprimimos el numero de nuestra variable numero */

//--Tipo de dato Boolean--//
let boolea = true;
console.log(boolea); /* En este ejemplo imprimimos el valor boolean */

//--Tipo de dato Date--//
let data = new Date();
console.log(data); /* En este ejemplo imprimimos el valor date */

//--Tipo de dato Array--//
let array = [1, 2, 3];
console.log(array); /* En este ejemplo imprimimos el valor array */

//--Tipo de dato Object--//
let objeto = {
    nombre: "Santiago",
    numero: 12,
    boolea: true,
    data: new Date(),
    array: [1, 2, 3]
}
console.log(objeto); /* En este ejemplo imprimimos el objeto
/* Con un objeto podemos contener varias propiedades */

//-- Tipo de datp Undefined --//
//Es un tipo de dato que no esta definido
let x;
console.log(typeof x);/* Como no hemos guardado ningun valor en la variable x entonces el valor es indefinido */

//-- Tipo de dato Null --//
//Es un tipo de dato que indica que no tiene ningun valor en la variable
let y = null;
console.log(y); /* En este ejemplo imprimimos el valor de y

/* En javascript las variables son dinamicas, es decir, pueden volver a cambiar su valor */

//-- TypeOf en Javascript --//
//Con esta propiedad podremos saber que tipos de dato guarda una variable

console.log(typeof nombre);/* Se usa escribiendo typeof seguido del nombre de la variable*/
