import React from "react";
import { shallow } from "enzyme";
import { CountryComponent } from "./Post";

describe("Component Post", () => {
  it("should render without crashing", () => {
    const component = shallow(<CountryComponent />);
    expect(component).toBeTruthy();
  });
});
