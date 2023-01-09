//***** Herencia en Javascript *****//
// La herencia en JavaScript es un concepto que nos permite hacer que un objeto herede los comportamientos de otro, al igual que lo harían las características de un ser vivo en la vida real. Además, podemos ir añadiendo comportamientos en la línea de herencia para que cada objeto tenga características únicas o nuevas.

//Clase padre
class Persona{
    constructor(nombre, apellido){
        this._nombre = nombre;
        this.apellido = apellido;
    }
    get nombre(){
        return this._nombre;
    }
    set apellido(nombre){
        this._apellido = nombre;
    }
    get apellido(){
        return this._apellido;
    }
    set apellido(apellido){
        this._apellido = apellido;
    }
}

//Clase hija
class Empleado extends Persona{
    constructor(nombre, apellido, area){
        super(nombre, apellido);
        this._area = area;
    }
    get area(){
            return this._area;
        }
        set area(area){
            this._area = area;
        }
    /*Heredar metodos*/
    nombreCompleto(){
        return this._nombre + " " + this._apellido;
    }
}

//Creamos un nuevo objeto con la clase hija 
let empleado1 = new Empleado('Santiago', 'Quiroz', 'It');

//Imprimimos los valores de la clase hija
console.log(empleado1);

//Accedemos al metodo creado
console.log(empleado1.nombreCompleto());