import * as React from "react";
import { shallow } from "enzyme";
import DemoDirectionsRenderer from "./demoDirectionsRenderer";

describe("DemoDirectionsRenderer", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<DemoDirectionsRenderer />);
    expect(wrapper).toMatchSnapshot();
  });
});
