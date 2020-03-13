import React from "react";
import Face from "./Face";
import { mount } from "enzyme";

describe("Face tests", () => {
  let component;

  beforeEach(() => {
    component = mount(<Face />);
  });

  it("should render", () => {
    expect(component).toBeTruthy();
  });

  it("should render both eyes", () => {
    expect(component.find("Eye")).toBeTruthy();
  });
  
});
