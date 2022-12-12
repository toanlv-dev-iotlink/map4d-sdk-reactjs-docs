import * as React from "react";
import { shallow } from "enzyme";
import DemoDataLayer from "./demoDataLayer";

describe("DemoDataLayer", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<DemoDataLayer />);
    expect(wrapper).toMatchSnapshot();
  });
});
