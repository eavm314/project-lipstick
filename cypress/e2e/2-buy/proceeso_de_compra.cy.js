// <reference types="cypress" />

// context('Aliasing', () => {
//     beforeEach(() => {
//       cy.visit('http://localhost:3000/tienda')
//     })
  
//     it('Añadir al carrito de compras', () => {
//       cy.wait(1000)
//       cy.get('[id="add"]').first().click()
//       cy.wait(1000)
//     })
  
//     it('Carrito de compras', () => {
//       // visitar el carrito de compras
//       cy.wait(1000)
//       cy.visit('http://localhost:3000/bolsaCompras/1')
//       cy.wait(1000)
//       // comprar
//       cy.wait(1000)
//       cy.get('[id="comprar"]').click()
//       cy.wait(1000)
//     })
  
//     it('Llenado de datos', () => {
//       cy.get('[id="nombre"]').type('Brenda')
//       cy.wait(1000)
//       cy.get('[id="telefono"]').type('70707070')
//       cy.wait(1000)
//       cy.get('[id="direccion"]').type('direccion ejemploo')
//       cy.wait(1000)
//       cy.get('[id="nit"]').type('77777777')
//       cy.wait(1000)
//       cy.get('[id="razonSocial"]').type('razon social ejemploo')
//       cy.wait(1000)
//       // continuar a la siguiente pagina
//       cy.wait(1000)
//       cy.get('[id="comprar"]').click()
//       cy.wait(1000)
//     })
//   })