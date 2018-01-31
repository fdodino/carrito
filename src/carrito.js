class Producto {
    constructor(marca) {
        this.marca = marca
    }
    precioTotal(cantidad) {
        return this.precioUnitario(cantidad) * cantidad
    }
}

class Leche extends Producto {
    precioUnitario(cantidad) {
        return (cantidad > 10) ? 5 : 10
    }
}

class Queso extends Producto {
    precioUnitario(cantidad) {
        return 50
    }
}

class Miel extends Producto {
    precioUnitario(cantidad) {
        return (this.marca === 'Real') ? 20 : 15
    }
}

class Item {
    constructor(cantidad, producto) {
        this.cantidad = cantidad
        this.producto = producto
    }
    precioTotal() {
        return this.producto.precioTotal(this.cantidad)
    }
}

class Carrito {
    constructor(cliente) {
        this.items = []
        this.cliente = cliente
    }
    agregarItem(cantidad, producto) {
        this.items.push(new Item(cantidad, producto))
    }
    cantidadProductos() {
        return this.items.length
    }
    totalAPagar() {
        return this.items.reduce((total, item) => total + item.precioTotal(), 0)
    }
}

