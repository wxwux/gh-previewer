import { shallow } from "enzyme";
import React from "react";
import Finder from "./index.jsx";

it("finder matches snapshot", () => {
  const wrapper = shallow(<Finder />);
  expect(wrapper).toMatchSnapshot();
});
