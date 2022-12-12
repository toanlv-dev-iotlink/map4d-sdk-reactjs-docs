import * as React from "react";
import { shallow } from "enzyme";
import DemoGroundOverlay from "./demoGroundOverlay";

describe("DemoGroundOverlay", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<DemoGroundOverlay />);
    expect(wrapper).toMatchSnapshot();
  });
});
