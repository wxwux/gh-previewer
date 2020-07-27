import { convertDate } from "../dates";

it("converts date to human format from iso-8601", () => {
  const date = new Date("July 19, 2020 11:12:13");

  expect(convertDate(date.toISOString())).toEqual("19 Jul");
  expect(convertDate("incorrect")).toBeNull();
});
