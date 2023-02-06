//Funcion de Suma
 function sumar (){

    //Definimos una constante para recibir el formulario
    const forma = document.getElementById('forma');
    
    //Recuperamos los elementos operandoA y operandoB
    let operandoA = forma['operandoA'];
    let operandoB = forma['operandoB'];
    
    //Definimos el resultado de la suma de los dos operandos y los parseamos
    let resultado = parseInt(operandoA.value) + parseInt(operandoB.value);

    //En caso de que el usuario no digite un numero ejecutamos el siguiente if
    if(isNaN(resultado)){
        resultado = 'Digite un numero';
    }
    //Mostramos el resultado de la operacion en el div
    document.getElementById('resultado').innerHTML = `Resultado: ${resultado}`;
}

//Funcion de Resta
function restar (){

    //Definimos una constante para recibir el formulario
    const forma = document.getElementById('forma');
    
    //Recuperamos los elementos operandoA y operandoB
    let operandoA = forma['operandoA'];
    let operandoB = forma['operandoB'];
    
    //Definimos el resultado de la resta de los dos operandos
    let resultado = operandoA.value - operandoB.value;

    //En caso de que el usuario no digite un numero ejecutamos el siguiente if
    if(isNaN(resultado)){
        resultado = 'Digite un numero';
    }
    //Mostramos el resultado de la operacion en el div
    document.getElementById('resultado').innerHTML = `Resultado: ${resultado}`;
}

//Funcion de Multiplicar
function multiplicar (){

    //Definimos una constante para recibir el formulario
    const forma = document.getElementById('forma');
    
    //Recuperamos los elementos operandoA y operandoB
    let operandoA = forma['operandoA'];
    let operandoB = forma['operandoB'];
    
    //Definimos el resultado de la multiplicacion de los dos operandos
    let resultado = operandoA.value * operandoB.value;

    //En caso de que el usuario no digite un numero ejecutamos el siguiente if
    if(isNaN(resultado)){
        resultado = 'Digite un numero';
    }
    //Mostramos el resultado de la operacion en el div
    document.getElementById('resultado').innerHTML = `Resultado: ${resultado}`;
}

//Funcion de Division
function dividir (){

    //Definimos una constante para recibir el formulario
    const forma = document.getElementById('forma');
    
    //Recuperamos los elementos operandoA y operandoB
    let operandoA = forma['operandoA'];
    let operandoB = forma['operandoB'];
    
    //Definimos el resultado de la division de los dos operandos
    let resultado = operandoA.value / operandoB.value;

    //En caso de que el usuario no digite un numero ejecutamos el siguiente if
    if(isNaN(resultado)){
        resultado = 'Digite un numero';
    }
    //Mostramos el resultado de la operacion en el div
    document.getElementById('resultado').innerHTML = `Resultado: ${resultado}`;
}