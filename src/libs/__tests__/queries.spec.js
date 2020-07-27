import { buildSearchQuery } from "../queries";

it("generates github search query from an object", () => {
  const obj = {
    org: "impraise",
    fork: "true",
  };

  const result = "org:impraise fork:true";
  expect(buildSearchQuery(obj)).toEqual(result);
});

it("returns an empty string if the value isn't correct", () => {
  expect(buildSearchQuery(null)).toBe("");
  expect(buildSearchQuery(13)).toBe("");
  expect(buildSearchQuery("string")).toBe("");
  expect(buildSearchQuery({})).toBe("");
});
