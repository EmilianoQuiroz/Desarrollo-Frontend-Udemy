//***** EJERCICIO *****//
//Pedirle al usuario que digite un mes del año e indicarle en cual estacion del año se encuentra

let mes = "Marzo";

if (mes == "Diciembre" || mes == "Enero" || mes == "Febrero")
{
    console.log("Verano");
}
else if(mes == "Marzo" || mes == "Abril" || mes == "Mayo")
{
    console.log("Otoño");
}
else if(mes == "Junio" || mes == "Julio" || mes == "Agosto")
{
    console.log("Invierno");
}
else{
    console.log("Primavera");
}