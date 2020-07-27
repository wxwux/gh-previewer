/*eslint-disable*/
import { buildSearchQuery } from "../../src/libs/queries";

const orgForSearching = "impraise";

function waitForGQLByQuery(query, onQueryFoundFn) {
  const waitOnce = () => {
    cy.wait('@search').then(xhr => {
      const xhrBody = xhr.requestBody;
      if (xhrBody.variables && xhrBody.variables.query === query) {
        if (onQueryFoundFn) onQueryFoundFn(xhr);
      } else {
        waitOnce();
      }
    });
  }

  waitOnce();
};

describe("filtering", () => {
  beforeEach(() => {
    cy.search(orgForSearching);
    cy.get("[data-cy-id=filtering-btn]").click();
  })
  it("filters by fork", () => {
    cy.get("[data-cy-id=Forks] button").click();

    const searchQuery = {
      org: orgForSearching,
      sort: "updated-desc",
      fork: "only"
    }

    waitForGQLByQuery(buildSearchQuery(searchQuery), (xhr) => {
      const data = xhr.response.body.data.search.nodes;

      if (data.length) {
        const allForks = data.every(item => item.isFork);
        expect(allForks).to.be.true;
      }
      expect(xhr.status).to.equal(200);
    });
  });

  it("filters by sources", () => {
    cy.get("[data-cy-id=Sources] button").click();

    const searchQuery = {
      org: orgForSearching,
      sort: "updated-desc",
      fork: false
    }

    waitForGQLByQuery(buildSearchQuery(searchQuery), (xhr) => {
      const data = xhr.response.body.data.search.nodes;

      if (data.length) {
        const allForks = data.every(item => item.isFork === false);
        expect(allForks).to.be.true;
      }
      expect(xhr.status).to.equal(200);
    });
  });

  it("filters by archived", () => {
    cy.get("[data-cy-id=Archived] button").click();

    const searchQuery = {
      org: orgForSearching,
      sort: "updated-desc",
      archived: true
    }

    waitForGQLByQuery(buildSearchQuery(searchQuery), (xhr) => {
      const data = xhr.response.body.data.search.nodes;

      if (data.length) {
        const allForks = data.every(item => item.isArchived);
        expect(allForks).to.be.true;
      }
      expect(xhr.status).to.equal(200);
    });
  });

  it("filters by mirrors", () => {
    cy.get("[data-cy-id=Mirrors] button").click();

    const searchQuery = {
      org: orgForSearching,
      sort: "updated-desc",
      mirror: true
    }

    waitForGQLByQuery(buildSearchQuery(searchQuery), (xhr) => {
      const data = xhr.response.body.data.search.nodes;

      if (data.length) {
        const allForks = data.every(item => item.isMirror);
        expect(allForks).to.be.true;
      }
      expect(xhr.status).to.equal(200);
    });
  });
})
