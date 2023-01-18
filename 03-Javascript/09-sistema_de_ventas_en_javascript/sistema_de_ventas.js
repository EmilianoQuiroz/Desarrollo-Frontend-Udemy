//**** Sistema de ventas en Javascript *****//


//Clase Producto
class Producto{
    static contadorProductos = 0;

    constructor(nombre, precio){
        this._idProducto = ++Producto.contadorProductos;
        this.nombre = nombre;
        this.precio = precio;
    }

    //Atributos
    get idProducto(){
        return this._idProducto;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    get precio() {
        return this._precio;
    }
    set precio(precio){
        this._precio = precio;
    }

    toString(){
        return `IdProducto: ${this._idProducto}, nombre:${this._nombre}, precio: $${this._precio}`;
    }
}
/*
let producto1 = new Producto('Pantalon', '20.000');
let producto2 = new Producto('Hoddie', '11.000');

console.log(producto1.toString());
console.log(producto2.toString());
*/

//Clase orden
