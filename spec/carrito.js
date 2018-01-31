describe('clientes', () => {

    let carritoJuan
    const quesoLaPaulina = new Queso("La Paulina", 1)
    const itemQuesoLaPaulina = new Item(1, quesoLaPaulina)
    let itemLecheSerenisima = new Item(2, new Leche("La Serenisima"))

    beforeEach(() => {
        carritoJuan = new Carrito('Juan')
        carritoJuan.agregarItem(2, new Leche("La Serenisima"))
        carritoJuan.agregarItem(1, new Queso("La Paulina"))
    })
  
    it('cualquier queso sale 50', () => {
        expect(50).toBe(itemQuesoLaPaulina.precioTotal())
    })

    it('2 sachets de leche cuestan 20', () => {
        expect(20).toBe(itemLecheSerenisima.precioTotal())
    })

    it('12 sachets de leche cuestan 60', () => {
        itemLecheSerenisima.cantidad = 12
        expect(60).toBe(itemLecheSerenisima.precioTotal())
    })

    it("cantidad de productos definidos para carritoJuan", () => {
        expect(2).toBe(carritoJuan.cantidadProductos())
    })

    it('total a pagar del carrito es 70', () => {
        expect(70).toBe(carritoJuan.totalAPagar())
    })
    
})