//***** Call *****//

let persona1 = {
    nombre:'Juan',
    apellido:'Perez',
    nombreCompleto: function(){
        return this.nombre + ' ' + this.apellido;
    }
}

let persona2 = {
    nombre:'Carlos',
    apellido:'Gomez'
}

//Uso de Call para usar el metodo de nombre completo en persona2
console.log(persona1.nombreCompleto());

console.log(persona1.nombreCompleto.call(persona2));
//Se toman los datos de persona2 pero se usan en la funcion creada en persona1

