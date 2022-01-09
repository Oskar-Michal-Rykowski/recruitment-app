import React from "react";
import { shallow } from "enzyme";
import { SearchModuleComponent } from "./SearchModule";

describe("Component Header", () => {
  const labels = [
    { label: "Afghanistan" },
    { label: "Albania" },
    { label: "Algeria" },
    { label: "Andorra" },
    { label: "Angola" },
    { label: "Antigua and Barbuda" },
    { label: "Argentina" },
    { label: "Armenia" },
    { label: "Australia" },
  ];
  it("should render without crashing", () => {
    const component = shallow(
      <SearchModuleComponent autocompleteOptions={labels} />
    );
    expect(component).toBeTruthy();
  });
});
