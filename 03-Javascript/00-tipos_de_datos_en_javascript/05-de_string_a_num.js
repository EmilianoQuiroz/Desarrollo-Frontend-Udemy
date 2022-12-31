/***** COMBERTIR STRINGS A NUMBER *****/
//En JS muechas veces recibimos numeros como strings, con lo cual para poder hacer operaciones con estos necesitamos pasarlos a dato de tipo numerico
let numero1 = "23";
let numero2 = "8";


// suma = numero1 + numero2;
// console.log(suma);

//Para poder hacer operaciones con estos necesitamos pasarlos a dato de tipo number

let edad = Number(numero1);
let usuarios = Number(numero2);
//Con Number podemos pasar datos de tipo string a tipo number

let suma2 = edad + usuarios; 

console.log(suma2);

//Ahora podemos visualisar los datos como numeros
