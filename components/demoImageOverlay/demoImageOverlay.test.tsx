import * as React from "react";
import { shallow } from "enzyme";
import DemoImageOverlay from "./demoImageOverlay";

describe("DemoImageOverlay", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<DemoImageOverlay />);
    expect(wrapper).toMatchSnapshot();
  });
});
