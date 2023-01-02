//***** CICLO DO WHILE *****//

//Al contrario que el bucle while , que comprueba la condición antes de entrar en el bucle, el bucle do - while la evalúa al final del bucle. Esto implica que el bucle se ejecutará al menos una vez.

let contador = 1;

do{
    /* Ejecutamos este bloque de codigo una vez */
    console.log(contador);
    contador++;
}
while(contador < 0);/* Seguimos ejecutando el bloque mientras se cumpla la siguiente condicion */