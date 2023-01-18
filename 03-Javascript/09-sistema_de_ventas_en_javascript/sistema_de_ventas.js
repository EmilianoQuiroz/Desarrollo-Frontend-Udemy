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
class Orden{
    
    static contadorOrdenes = 0;

    static get MAX_PRODUCTOS(){
        return 5;
    }

    //Atributos
    constructor(){
        this._idOrdenes = ++Orden.contadorOrdenes;
        this._producto = [];
        //this.contadorProductosAgregados = 0;
    }

    //Metodos
    get idOrdenes(){
        return this._idOrdenes;
    }
    agregarProducto(producto){
        if(this._producto.length < Orden.MAX_PRODUCTOS){
            this._producto.push(producto);
            //this._productos[this._contadorProductosAgregados++] = this._producto ;
        }
        else{
        console.log('No se pueden agregar mas productos');
        }
    }
    calcularTotal(){
        let totalVenta = 0;
        for(let producto of this._producto){
            totalVenta += producto.precio;
        }

        return totalVenta;
    }

    mostrarOrden(){
        let productosOrden = '';
        for(let producto of this._producto){
            productosOrden +='\n{' + producto.toString() + '}';
        }

        console.log(`Orden . ${this._idOrdenes} Total: $${this.calcularTotal()}, Productos: ${productosOrden}`);
    }
}


//Prueba Orden 
let producto1 = new Producto('Pantalon', '20000');
let producto2 = new Producto('Hoddie', '11000');

let orden1 = new Orden();
orden1.agregarProducto(producto1);
orden1.agregarProducto(producto2);

orden1.mostrarOrden();