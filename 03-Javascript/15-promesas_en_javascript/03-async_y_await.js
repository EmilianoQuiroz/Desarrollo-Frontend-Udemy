//***** Async y Awayt en Javascript *****//
//Lo que hace la palabra reservada await es esperar una promesa

//Asyc Await
async function funcionConPromesaYAwait(){
    let miPromesa = new Promise((resolve) => {
        resolve('Promesa con await');
    });
    console.log(await miPromesa);
}

funcionConPromesaYAwait();
