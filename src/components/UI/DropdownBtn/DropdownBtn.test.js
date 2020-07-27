import { shallow } from "enzyme";
import React from "react";
import DropdownBtn from "./index.jsx";

it("shows dropdown when titled button was clicked", () => {
  const wrapper = shallow(<DropdownBtn />);
  wrapper.find("[data-cy-id='filtering-btn']").simulate("click");
  expect(wrapper.find("[data-cy-id='filtering-list']")).toExist();
});
