import * as React from "react";
import { shallow } from "enzyme";
import DemoPolygon from "./demoPolygon";

describe("DemoPolygon", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<DemoPolygon />);
    expect(wrapper).toMatchSnapshot();
  });
});
