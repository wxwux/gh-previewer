/*eslint-disable*/

const host = Cypress.env("host");

it("has necessary controls on welcome screen", () => {
  cy.visit(host);

  cy.get("[data-cy-id=finder-input]");
  cy.get("[data-cy-id=finder-btn]");
});

