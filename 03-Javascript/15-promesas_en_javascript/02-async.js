//***** Async en Javascript *****//
//La palabra async nos va a permitir facilitar el uso de promesas, al poner esta palabra antes de la definicion de un metodo, este, esta obligado a devolver una promesa

async function miFuncionConPromesa(){
    return 'Saludo con promesa y async';
}

miFuncionConPromesa().then(valor => console.log(valor));