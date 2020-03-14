import React from "react";
import InputField from "./InputField";
import { shallow } from "enzyme";

describe("Face tests", () => {
  let component;

  beforeEach(() => {
    component = shallow(<InputField />);
  });

  it("should render", () => {
    expect(component).toBeTruthy();
  });


});