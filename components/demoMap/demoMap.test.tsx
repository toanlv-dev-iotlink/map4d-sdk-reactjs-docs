import * as React from "react";
import { shallow } from "enzyme";
import DemoMap from "./demoMap";

describe("DemoMap", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<DemoMap />);
    expect(wrapper).toMatchSnapshot();
  });
});
