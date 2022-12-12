import * as React from "react";
import { shallow } from "enzyme";
import DemoMarker from "./demoMarker";

describe("DemoMarker", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<DemoMarker />);
    expect(wrapper).toMatchSnapshot();
  });
});
