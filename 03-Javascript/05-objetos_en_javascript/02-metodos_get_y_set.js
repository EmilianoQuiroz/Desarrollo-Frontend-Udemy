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

// SET

let persona2 = {
    nombre: 'Santiago',
    apellido: 'Quiroz',
    email: 'Santiago.Quiroz@gmail.com',
    idioma: 'es',
    edad: '24',
    get lang(){
        return this.idioma.toLocaleUpperCase();
    },
    set lang(lang){
        this.idioma = lang.toLocaleUpperCase();
    },
    get nombreCompleto(){
        return this.nombre + ' ' + this.apellido;
    }
}

console.log(persona2.lang);

persona2.lang = 'en';

console.log(persona2.lang);