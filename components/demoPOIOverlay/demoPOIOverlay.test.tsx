import * as React from "react";
import { shallow } from "enzyme";
import DemoPOIOverlay from "./demoPOIOverlay";

describe("DemoPOIOverlay", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<DemoPOIOverlay />);
    expect(wrapper).toMatchSnapshot();
  });
});
