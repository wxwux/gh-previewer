import { parseQLError } from "../errors";

const errorData = {
  type: "NOT_FOUND",
  message: "server not found message",
};

class qlError extends Error {
  constructor(message) {
    super(message);
    this.graphQLErrors = [errorData];
  }
}

it("returns not found message", () => {
  const errorMessage = parseQLError(new qlError()).notFound();
  expect(errorMessage).toEqual(errorData.message);
});
