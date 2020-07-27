/*eslint-disable*/
import { parseQLError } from "../../src/libs/errors";

const orgForSearching = "impraise";

const generateRandomString = () => {
  return Math.random().toString(20).substr(2)
}

it("shows not found error", () => {
  cy.search(`!_!random!_!-${generateRandomString()}`);

  cy.wait("@search").then(xhr => {
    const errorBody = xhr.response.body.errors;
    const errorObj = {
      graphQLErrors: errorBody
    }
    const result = parseQLError(errorObj).notFound();

    cy.get("[data-cy-id=error-message]").contains(result);

    cy.get("[data-cy-id=finder-input]");
    cy.get("[data-cy-id=finder-btn]");

    expect(xhr.status).to.equal(200);
  })

});




it("shows company info", () => {
  cy.search(orgForSearching);


  cy.wait("@search").then(xhr => {
    const data = xhr.response.body.data;
    const name = data.organization.name
    const location = data.organization.location
    const avatar = data.organization.avatar
    const url = data.organization.websiteUrl

    cy.get("[data-cy-id=org-name]").contains(name);

    if (location) {
      cy.get("[data-cy-id=org-location]").contains(location);
    }

    if (avatar) {
      const avatarSrc = Cypress.$("[data-cy-id=org-avatar]").attr('src');
      expect(avatarSrc).to.equal(avatar);
    }

    if (url) {
      cy.get("[data-cy-id=org-url]").contains(url);
    }

    expect(xhr.status).to.equal(200);
  })
});


it("shows pinned items", () => {
  cy.search("airbnb");

  cy.waitForGQL("Pinned", (xhr) => {
    const data = xhr.response.body.data.organization.pinnedItems.nodes

    if (data.length) {
      const items = Cypress.$("[data-cy-id=pinned-list] li h3");
      cy.expectDataAppearedInListCorrectly(items, data);
    }
  })
});

it("shows repositories items", () => {
  cy.search(orgForSearching);

  cy.waitForGQL("Search", (xhr) => {
    const data = xhr.response.body.data.search.nodes;
    const items = Cypress.$("[data-cy-id=repos-list] li h3");
    cy.expectDataAppearedInListCorrectly(items, data);
  });
});