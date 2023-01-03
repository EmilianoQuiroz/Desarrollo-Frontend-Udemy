//***** Get y Set *****//

//Get es una forma de acceder a los valores de nuestras propiedades

let persona = {
    nombre: 'Santiago',
    apellido: 'Quiroz',
    email: 'Santiago.Quiroz@gmail.com',
    edad: '24',
    get nombreCompleto(){
        return this.nombre + ' ' + this.apellido;
    }
}
//Anteponiendo get en nuetra funcion podemos simplificar la sintaxis de la llamanada a la funcion sacandole los parentesis 

console.log(persona.nombreCompleto);