describe('clientes', () => {
  
    beforeEach(() => {
    })
  
    it('cualquier queso sale 50', () => {
        expect(50).toBe(queso("La Paulina", 1))
    })

    it('2 sachets de leche cuestan 20', () => {
        expect(20).toBe(leche("La Serenísima", 2))
    })

    it('12 sachets de leche cuestan 60', () => {
        expect(60).toBe(leche("La Serenísima", 12))
    })

    /** enviando un mensaje a un objeto carritoJuan. De esta manera nuestro código es más OO. */
    it("cantidad de productos definidos para carritoJuan", () => {
        expect(2).toBe(carritoJuan.cantidadProductos())
    })

    /** en este caso estamos aplicando una función totalAPagar pasando una estructura de datos como carritoJuan,
     * De esta manera nuestro código es más funcional o imperativo
     */
    it('total a pagar del carrito es 70', () => {
        expect(70).toBe(totalAPagar(carritoJuan))
    })
    
})