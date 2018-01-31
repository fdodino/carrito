/** Podemos construir funciones y asignarlas a referencias así... */
const leche = (marca, cantidad) => calcularTotal(cantidad, (cantidad > 10) ? 5 : 10)

const queso = (marca, cantidad) => calcularTotal(cantidad, 50)

/** ...o bien definir funciones como en Javascript 5 */
function calcularTotal(cantidad, precioUnitario) {
    return cantidad * precioUnitario
}

/** Las referencias también pueden apuntar a objetos, como el carrito de Juan\
 */
const carritoJuan = {
    /* normalmente los objetos suelen tener atributos... */
    cliente: 'Juan',
    productos: [ leche("La Serenisima", 2), queso("La Paulina", 1)],
    /* ... y comportamiento */
    cantidadProductos() {
        return this.productos.length
    }
}

function totalAPagar(carrito) {
    return carrito.productos.reduce((total, linea) => total + linea)
}
