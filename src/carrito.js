class Producto {
    constructor(marca) {
        this.marca = marca
    }
    precioTotal(cantidad) {
        return this.precioUnitario(cantidad) * cantidad
    }
}
class Leche {
    precioUnitario(cantidad) {
        return (cantidad > 10) ? 5 : 10
    }
}

class Queso {
    precioUnitario(cantidad) {
        return 50
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
        this.items.add(new Item(cantidad, producto))
    }
    cantidadProductos() {
        return this.items.length
    }
    totalAPagar(carrito) {
        return this.items.reduce((total, item) => total + item.precioTotal())
    }
}

