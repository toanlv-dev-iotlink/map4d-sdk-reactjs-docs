import * as React from "react";
import { shallow } from "enzyme";
import DemoBuilding from "./demoBuilding";

describe("DemoBuilding", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<DemoBuilding />);
    expect(wrapper).toMatchSnapshot();
  });
});
