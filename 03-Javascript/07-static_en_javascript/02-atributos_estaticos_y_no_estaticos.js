//***** Atributos estaticos y No estaticos en Javascript *****//

class Persona{

    //Definir atributos estaticos a nuestra clase
    static contadorObjetosPersona = 0;/*Esta variable se asocia con la clase en si misma y no con el objeto*/

    //Agregamos un atributo NO estatico
    email = 'Valor default email';/*Es un atributo que se asocia con los objetos y no con la clase en si misma*/

    constructor(nombre, apellido){
        this._nombre = nombre; 
        this._apellido = apellido;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    get apellido(){
        return this._apellido;
    }
    set apellido(apellido){
        this._apellido = apellido;
    }
    nombreCompleto(){
        return this._nombre + ' ' + this._apellido;
    }
    //Sobreescribiendo el metodo de la clase Padre (Object)
    toString(){
        //Se aplica poliformismo (multiples formas en tiempo de ejecucion)
        //el metodo que se ejecuta depende si es una referencia de tipo padre 
        //o de tipo hijo
        return this.nombreCompleto();
    }
    static saludar(){
        console.log('saludos desde método static');
    }
    static saludar2(persona){
        console.log(persona.nombre + ' ' + persona.apellido);
    }
}

class Empleado extends Persona{
    constructor(nombre, apellido, departamento){
        super(nombre, apellido);//llamar al constructor de la clase padre
        this._departamento = departamento;
    }
    get departamento(){
        return this._departamento;
    }
    set departamento(departamento){
        this._departamento = departamento;
    }
    //Sobreescritura
    nombreCompleto(){
        return super.nombreCompleto() + ', ' + this._departamento;
    }
}

let persona1 = new Persona('Juan', 'Perez');
console.log( persona1.toString() );

let empleado1 = new Empleado('Maria', 'Jimenez', 'Sistemas');
console.log( empleado1 );
console.log( empleado1.nombreCompleto() );
console.log( empleado1.toString());

//persona1.saludar(); no es posible llamar un método static desde un objeto
Persona.saludar();
Persona.saludar2(persona1);

Empleado.saludar();
Empleado.saludar2(empleado1);

//Uso de nuesra variable
console.log(persona1.contadorObjetosPersona);/*No podemos acceder a nuestro metodo desded nuestra clase */
console.log(Persona.contadorObjetosPersona);/*Pero si desde el objeto*/

console.log(Empleado.contadorObjetosPersona);/*Las clases hijas pueden heredar este atributo*/

//Accedemos al email
console.log(persona1.email);
console.log(empleado1.email);/*Las clases hijas tambien heredan el atributo email*/