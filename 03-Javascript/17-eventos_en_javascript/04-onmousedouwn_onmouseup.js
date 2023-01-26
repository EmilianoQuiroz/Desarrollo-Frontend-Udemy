//***** Onmousedown y Onmouseup en Javascript *****//
//Con esta propiedad podemos cambiar el color o el formato de un texto cuando hacemos chick sobre este

//1.Definimos nuestra funcion
function rojo(titulo){
    
    //2.Meduiante el titulo podemos acceder a estilo y a la propiedad color de nuestro elemento h1
    titulo.style.color = 'red';

}

//Con Onmouseup podemos crear una funcion que nos cambie el color del h1 al quitar el cursor sobre este.


function azul(titulo){
    titulo.style.color = 'blue';
}