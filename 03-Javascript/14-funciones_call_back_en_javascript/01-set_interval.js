//***** Set Interval en Javascript *****//
//La función setInterval() se utiliza comúnmente para establecer un retardo en funciones que son ejecutadas una y otra vez, como por ejemplo las animaciones. Puede cancelar el intervalo utilizando clearInterval() . Si desea que su función sea llamada una vez después del retardo especificado utilice setTimeout()

let reloj = ()=> {
    let fecha = new Date();
    console.log(`${fecha.getHours()} ${fecha.getMinutes()} ${fecha.getSeconds()}`);
}

setInterval(reloj, 1000);//La funcion es llamda cada un segundo
