//***** CICLO WHILE *****//
// La sentencia (hacer mientras) crea un bucle que ejecuta una sentencia especificada, hasta que la condición de comprobación se evalúa como falsa. La condición se evalúa después de ejecutar la sentencia, dando como resultado que la sentencia especificada se ejecute al menos una vez.

//Para ejecutar el ciclo vamos a necesitar de una variable llamanda "contador", esta variable nos va a permitir terminar el ciclo en cierto momento

let contador = 1;

while(contador <= 3)/* En la condicion indicamos que si el contador es menor o igual que 3 se ejecutara el siguiente codigo */
{
    console.log(contador);/* Imprimimos la variable "contador" */
    contador++;/* Le sumamos un valor a contador por cada vez que se repita el bucle */
}