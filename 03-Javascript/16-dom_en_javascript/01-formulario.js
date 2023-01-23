//***** Formulario HTML y Javascript *****//

function mostrarValores(){

    let formulario = document.forms['formulario'];
    let texto = '';
    
    for(let elemento of formulario){

        texto += elemento.value + '<br/>';

    }

    document.getElementById('valores').innerHTML = texto;

}
