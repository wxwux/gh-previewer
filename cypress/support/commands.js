/*eslint-disable*/
const host = Cypress.env("host");

Cypress.Commands.add("openDomain", () => {
  cy.visit(host, {
    onBeforeLoad(win) {
      delete win.fetch
    }
  });
})

Cypress.Commands.add("search", (searchValue) => {
  console.log('searchValue', searchValue);
  cy.server({
    method: "POST",
  });
  cy.route("**/graphql").as("search");
  cy.visit(host, {
    onBeforeLoad(win) {
      delete win.fetch
    }
  });

  cy.get("[data-cy-id=finder-input]").type(searchValue);
  cy.get("[data-cy-id=finder-btn]").click();
  cy.wait(1000);
});


Cypress.Commands.add(
  "expectDataAppearedInListCorrectly",
  (listItems, dataArray) => {
    const titles = [];
    cy.get(listItems)
      .each((item) => {
        titles.push(item.text());
      })
      .then(() => {
        const itemsShownCorrectly = dataArray.every(
          (item, ndx) => item.name === titles[ndx]
        );

        expect(itemsShownCorrectly).to.be.true;
      });
  }
);

Cypress.Commands.add("waitForGQL", (queryName, onQueryFoundFn) => {
  const waitOnce = () => {
    cy.wait('@search').then(xhr => {
      if (xhr.requestBody && xhr.requestBody.query.includes(queryName)) {
        if (onQueryFoundFn) onQueryFoundFn(xhr);
      } else {
        waitOnce();
      }
    });
  }

  waitOnce();
})
