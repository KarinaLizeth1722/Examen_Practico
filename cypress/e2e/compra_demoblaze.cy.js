describe("Flujo de compra en demoblaze.com", () => {
  before(() => {
    cy.visit("https://www.demoblaze.com/");
  });

  const agregarProducto = (nombreProducto) => {
    cy.contains(nombreProducto).click();
    cy.wait(2000);
    cy.contains("Add to cart").click();

    // Esperar y aceptar alerta
    cy.on("window:alert", (text) => {
      expect(text).to.include("Product added");
    });

    cy.wait(2000);
    cy.go("back"); // Regresar a la página principal
    cy.wait(2000);
  };

  it("Agrega dos productos al carrito y finaliza la compra", () => {
    agregarProducto("Samsung galaxy s6");

    // Regresar al catálogo correctamente
    cy.visit("https://www.demoblaze.com/");
    cy.wait(2000);

    // Esperar y hacer clic en "Next" (segunda página de productos)
    cy.contains("Next", { timeout: 10000 }).should("be.visible").click();
    cy.wait(2000);

    agregarProducto("Nokia lumia 1520");

    // Ir al carrito
    cy.get("#cartur").click();
    cy.wait(2000);

    // Click en "Place Order"
    cy.contains("Place Order").click();
    cy.wait(3000);

    // Completar el formulario
    cy.get("#name").type("Karina Valencia");
    cy.get("#country").type("Ecuador");
    cy.get("#city").type("Quito");
    cy.get("#card").type("4111111111111111");
    cy.get("#month").type("07");
    cy.get("#year").type("2025");

    // Finalizar compra
    cy.contains("Purchase").click();

    // Validar mensaje de confirmación
    cy.get(".sweet-alert").should("be.visible");
    cy.get(".confirm").click(); // Cierra el modal de confirmación
  });
});