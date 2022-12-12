import * as React from "react";
import { shallow } from "enzyme";
import DemoPOI from "./demoPOI";

describe("DemoPOI", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<DemoPOI />);
    expect(wrapper).toMatchSnapshot();
  });
});
