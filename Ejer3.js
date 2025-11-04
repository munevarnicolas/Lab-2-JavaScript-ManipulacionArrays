// Buscar Productos en Inventario
const prompt = require("prompt-sync")();
const inventario = 
[
    { nombre: "camiseta", precio: 20 },
    { nombre: "chaqueta", precio: 50 },
    { nombre: "pantalon", precio: 30 },
    { nombre: "saco", precio: 10 }
];


function buscarProducto(nombre, inventario)
 {
    for (let i = 0; i < inventario.length; i++) 
    {
        if (inventario[i].nombre === nombre)
        {
            return inventario[i];
        }
    }

    return null;
}

let nombreProducto = prompt("Ingrese el nombre del producto a buscar: ").toLowerCase();

let productoEncontrado = buscarProducto(nombreProducto, inventario);

if (productoEncontrado !== null) 
{
    console.log("Producto encontrado:");
    console.log("Nombre:", productoEncontrado.nombre);
    console.log("Precio:", productoEncontrado.precio);
} 
else 
{
    console.log("Producto no encontrado");
}
