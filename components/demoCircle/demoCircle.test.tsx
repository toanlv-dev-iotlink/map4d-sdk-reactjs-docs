import * as React from "react";
import { shallow } from "enzyme";
import DemoCircle from "./demoCircle";

describe("DemoCircle", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<DemoCircle />);
    expect(wrapper).toMatchSnapshot();
  });
});
