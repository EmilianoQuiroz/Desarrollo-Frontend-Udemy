//Extraemos los elementos html les asignamos un valor con con la funcion de Date y las mostramos en pantalla
const mostrarReloj = () => {
    let fecha = new Date();
    let hr = fecha.getHours();
    let min = fecha.getMinutes();
    let seg = fecha.getSeconds();

    document.getElementById('hora').innerHTML = `${hr}:${min}:${seg}`;
}

//Mandamos a llamar a la funcion mostrarReloj y la mostramos cada segundo
setInterval(mostrarReloj,1000);