/*eslint-disable*/
const host = Cypress.env("host");

it("has necessary controls on welcome screen", () => {
  cy.visit(host);

  cy.get("[data-cy-id=finder-input]");
  cy.get("[data-cy-id=finder-btn]");
});


it("doesn't fail if no data appears", () => {
  cy.server({
    method: "POST",
  });
  cy.route("**/graphql", require("../fixtures/empty-organization.json")).as("search");
  cy.openDomain();

  cy.get("[data-cy-id=finder-input]").type("Triple-slash");
  cy.get("[data-cy-id=finder-btn]").click();

  cy.wait('@search');

  cy.wait(500);

  cy.on('uncaught:exception', () => false)

  cy.get("[data-cy-id=error-boundary]").should("not.contain", "error");

  cy.reload();
});



