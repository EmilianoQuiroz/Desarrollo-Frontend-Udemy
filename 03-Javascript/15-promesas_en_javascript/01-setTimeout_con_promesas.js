//***** Set Time Out con Promesas *****//

let promesa = new Promise((resolve) => {
    setTimeout(() => resolve('Saludos con promesa y setTimeout'), 3000);
    console.log('Fin promesa');
});

promesa.then(valor => console.log(valor));