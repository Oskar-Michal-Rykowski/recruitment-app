import React from "react";
import { shallow } from "enzyme";
import { HomepageComponent } from "./Search";

describe("Component Homepage", () => {
  const countries = [
    {
      ID: "663333d5-859e-401d-8508-577fc51de878",
      Country: "Afghanistan",
      CountryCode: "AF",
      Slug: "afghanistan",
      NewConfirmed: 0,
      TotalConfirmed: 158300,
      NewDeaths: 0,
      TotalDeaths: 7368,
      NewRecovered: 0,
      TotalRecovered: 0,
      Date: "2022-01-08T11:03:08.524Z",
      Premium: {},
    },
    {
      ID: "b7af4c35-0ba0-4045-973b-54202e8c7eae",
      Country: "Albania",
      CountryCode: "AL",
      Slug: "albania",
      NewConfirmed: 0,
      TotalConfirmed: 214905,
      NewDeaths: 0,
      TotalDeaths: 3233,
      NewRecovered: 0,
      TotalRecovered: 0,
      Date: "2022-01-08T11:03:08.524Z",
      Premium: {},
    },
  ];

  it("should render without crashing", () => {
    const component = shallow(<HomepageComponent countries={countries} />);
    expect(component).toBeTruthy();
  });
});
