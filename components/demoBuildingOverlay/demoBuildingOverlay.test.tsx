import * as React from "react";
import { shallow } from "enzyme";
import DemoBuildingOverlay from "./demoBuildingOverlay";

describe("DemoBuildingOverlay", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<DemoBuildingOverlay />);
    expect(wrapper).toMatchSnapshot();
  });
});
