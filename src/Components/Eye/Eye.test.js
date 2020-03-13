import React from "react";
import Eye from "./Eye";
import left from "../../Assets/left.png";
import { shallow } from "enzyme";

describe("Eye tests", () => {
  let component;

  beforeEach(() => {
    component = shallow(<Eye eye={left} whichEye={"left"}/>);
  })

  it("should render", () => {
    expect(component).toBeTruthy();
  });

  it("should render an image passed through as props", () => {
    expect(component.find('img').prop('src')).toBe(left);
  });
});
