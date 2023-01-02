//***** SENTENCIA SWITCH ******//
//La declaración switch evalúa una expresión, comparando el valor de esa expresión con una instancia case , y ejecuta declaraciones asociadas a ese case , así como las declaraciones en los case que siguen.

//Estructura 
/*
switch (Variable a evaluar)
{
    case 1:(Si se cumple esta condicion se ejecuta el siguient codigo)

        (Codigo a ejecutar)
        
        break;
    case 2:
        
        (Codigo a ejecutar)
        
        break;
    default:
        
        (Codigo a ejecutar en caso de que no se cumpla ninguno de los case)
        
        break;
}
*/

//EJEMPLO

let numero = 3;

switch (numero)
{
    case 1:
        console.log("1");
        break;
    case 2:
        console.log("2");
        break;
    case 3:
            console.log("3");
            break;
    case 4:
        console.log("4");
        break;
    default:
        console.log("No es un valor valido");
        break;
}
