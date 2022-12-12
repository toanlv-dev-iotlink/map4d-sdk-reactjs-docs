import * as React from "react";
import { shallow } from "enzyme";
import DemoTileOverlay from "./demoTileOverlay";

describe("DemoTileOverlay", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<DemoTileOverlay />);
    expect(wrapper).toMatchSnapshot();
  });
});
