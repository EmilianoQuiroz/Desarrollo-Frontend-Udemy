//Extraemos los elementos html les asignamos un valor con con la funcion de Date y las mostramos en pantalla
const mostrarReloj = () => {
    let fecha = new Date();
    let hr = formatoHora(fecha.getHours());
    let min = formatoHora(fecha.getMinutes());
    let seg = formatoHora(fecha.getSeconds());
    document.getElementById('hora').innerHTML = `${hr}:${min}:${seg}`;

    //Procesamos la fecha
    const meses = ['Ene','Feb','Mar','Abr','May','Jun','Jul','Aug','Sep','Oct','Nov'];
    const dias = ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'];

    let diaSemana = dias[fecha.getDay()];
    let dia = fecha.getDate();
    let mes = meses[fecha.getMonth()];
    
    let fechaTexto = `${diaSemana}, ${dia} ${mes}`;

    document.getElementById('fecha').innerHTML = fechaTexto;

    document.getElementById('contenedor').classList.toggle('animar');
}

//Definimos un formato a la hora para que cuando haya un solo digito como valor, a este, se le agregue un 0
const formatoHora = (hora) => {
    if(hora < 10)
        hora = '0' + hora;
        return hora;

}

//Mandamos a llamar a la funcion mostrarReloj y la mostramos cada segundo
setInterval(mostrarReloj,1000);