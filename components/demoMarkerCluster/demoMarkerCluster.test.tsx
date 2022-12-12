import * as React from "react";
import { shallow } from "enzyme";
import DemoMarkerCluster from "./demoMarkerCluster";

describe("DemoMarkerCluster", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<DemoMarkerCluster />);
    expect(wrapper).toMatchSnapshot();
  });
});
