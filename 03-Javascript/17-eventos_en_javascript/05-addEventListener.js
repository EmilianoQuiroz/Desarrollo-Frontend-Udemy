//***** addEventListener en Javascript *****//

//1.Primero recuperamos nuestro elemento con document.getElementById()
//2.Luego le asignamos el addevEntListener, este metodo lo podemos utilizar para agregar uno o mas eventos al componente que estamos utilizando

//3.A nuestro addEventListener le asignamos dos valores, el primero es el nombre del metodo que vamos a utilizar y el segundo es el nombre de la funcion que va a efectuar el cambio
document.getElementById('nombre').addEventListener('focus', cambiar);

//Ahora programamos el metodo blur para que cuando retiremos el cursos de la casilla este cambie de color
document.getElementById('nombre').addEventListener('blur', regresar);

//4.Creamos nuestra funcion
function cambiar(evento){

    let componente = evento.target;//Guardamos nuestro componente dentro de una variable 
    
    componente.style.background = 'red';
}

//Definimos la funcion para quitar el color
function regresar(evento){

    evento.target.style.background = 'white';

}
