import React from "react";
import { shallow } from "enzyme";
import { BottomNavComponent } from "./BottomNav";

describe("Component MainLayout", () => {
  it("should render without crashing", () => {
    const component = shallow(<BottomNavComponent />);
    expect(component).toBeTruthy();
  });
});
