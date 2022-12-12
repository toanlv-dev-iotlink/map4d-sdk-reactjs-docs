import * as React from "react";
import { shallow } from "enzyme";
import DemoPolyline from "./demoPolyline";

describe("DemoPolyline", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<DemoPolyline />);
    expect(wrapper).toMatchSnapshot();
  });
});
