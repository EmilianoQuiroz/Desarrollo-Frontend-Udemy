//***** Promesas, Async, Await y setTimeout en Javascript *****//

async function funcionConPromesaAwaitYTimeout(){
    console.log('Inicio de la funcion');
    let miPromesa = new Promise((resolve) => {
        setTimeout(() => resolve('Promesacon await y timeout'),3000);
    });
    console.log(await miPromesa);
    console.log('Fin de la funcion');
}

funcionConPromesaAwaitYTimeout();