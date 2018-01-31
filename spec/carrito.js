describe('clientes', () => {

    const carritoJuan = new Carrito('Juan')
    const quesoLaPaulina = new Queso("La Paulina", 1)
    const itemQuesoLaPaulina = new Item(1, quesoLaPaulina)
    let itemLecheSerenisima = new Item(2, new Leche("La Serenisima"))

    beforeEach(() => {
        carritoJuan.agregarItem(2, new Leche("La Serenisima"))
        carritoJuan.agregarItem(1, new Queso("La Paulina"))
    })
  
    it('cualquier queso sale 50', () => {
        expect(50).toBe(itemQuesoLaPaulina.precioTotal())
    })

    it('2 sachets de leche cuestan 20', () => {
        expect(20).toBe(itemLecheSerenisima)
    })

    it('12 sachets de leche cuestan 60', () => {
        itemLecheSerenisima.cantidad = 22
        expect(60).toBe(itemLecheSerenisima.precioTotal())
    })

    /** enviando un mensaje a un objeto carritoJuan. De esta manera nuestro código es más OO. */
    it("cantidad de productos definidos para carritoJuan", () => {
        expect(2).toBe(carritoJuan.cantidadProductos())
    })

    /** en este caso estamos aplicando una función totalAPagar pasando una estructura de datos como carritoJuan,
     * De esta manera nuestro código es más funcional o imperativo
     */
    it('total a pagar del carrito es 70', () => {
        expect(70).toBe(carritoJuan.totalAPagar())
    })
    
})