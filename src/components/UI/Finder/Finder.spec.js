import Finder from "./index.jsx";
import { shallow } from 'enzyme';
import React from "react";

it("finder matches snapshot", () => {
  const wrapper = shallow(<Finder />);
  expect(wrapper).toMatchSnapshot();
});