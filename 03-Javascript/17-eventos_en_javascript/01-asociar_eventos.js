//***** Asociar Eventos a Elementos HTML con Javascript *****//
//1. Primero recuperamos el elemnto de titulo con document.GetElementById()
//2.Luego al elemento onclick le asignamos la llamada a una funcion, en este caso "cambiarTexto"
document.getElementById('titulo').onclick = cambiarTexto;

//3.Creamos la funcion llamada en la linea anterior
function cambiarTexto(){
    //4.Volvemos a recuperar el elemento de titulo y con .innerHTML le cambiamos su valor
    document.getElementById('titulo').innerHTML = 'Nuevo titulo';
}

//Tambien podemos mostrar informacion asignandola a un elemento
document.getElementById('mostrar').innerHTML = 'Nuevo contenido desden Javascript';